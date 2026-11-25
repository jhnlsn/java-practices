import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import path from 'node:path';

const json = v=>JSON.parse(JSON.stringify(v));
async function factory(version, name, globals={}) {
  const root=path.resolve('versions',version,'assets');
  const file=(await fs.readdir(root)).find(n=>n.startsWith(name+'.prelude'));
  return vm.runInNewContext(await fs.readFile(path.join(root,file),'utf8'),globals,{filename:file});
}
function shellHost(responder) {
  const calls=[];
  return {calls,run:async(...args)=>{
    calls.push(args);
    return responder?.(...args)??{stdout:'ok\n',stderr:'',exitCode:0,text:'ok\n',stdoutWhole:true};
  }};
}
function fileHost(initial={}) {
  const files=new Map(Object.entries(initial)), calls=[], notes=[];
  return {files,calls,notes,args:[
    async(p,offset,limit,probe)=>{
      calls.push(['read',p,offset,limit,probe]);
      if(!files.has(p))return {error:'not found',missing:true};
      const text=files.get(p);
      return {ok:{content:offset===undefined?text:text.split('\n').slice(Math.max(0,offset-1),limit===undefined?undefined:Math.max(0,offset-1)+limit).join('\n')}};
    },
    async(p,text)=>{calls.push(['write',p]);files.set(p,text);return {ok:{bytes:Buffer.byteLength(text)}};},
    async(p,old,next,all)=>{
      calls.push(['edit',p]);
      if(!files.has(p))return {error:'not found'};
      const text=files.get(p),count=old?text.split(old).length-1:0;
      if(!count||(!all&&count!==1))return {error:!count?'text not found':'multiple matches'};
      files.set(p,all?text.split(old).join(next):text.replace(old,()=>next));
      return {ok:{replacements:all?count:1}};
    },
    note=>notes.push(note),()=>{},(resolve,ms)=>setTimeout(resolve,ms),
  ]};
}
for(const version of ['2.1.329','2.1.330']) {
  await test(`${version}: original generated helpers`,async t=>{
    await t.test('POSIX interpolation preserves hostile text as one literal argument',async()=>{
      const h=shellHost((cmd)=>({stdout:execFileSync('/bin/sh',['-c',cmd],{encoding:'utf8'}),stderr:'',exitCode:0,text:'',stdoutWhole:true}));
      const {$}= (await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      const value="x y'; $(printf BAD) `printf BAD` ; <&>\nlast";
      assert.equal(await $`printf '%s' ${value}`.text(),value);
    });
    await t.test('arrays expand into separate quoted words',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      await $`cmd ${['a b',"c'd"]}`;
      assert.equal(h.calls[0][0],"cmd 'a b' 'c'\\''d'");
    });
    await t.test('missing interpolation is refused before any host call',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      assert.throws(()=>$`cmd ${undefined}`,/did not run/);assert.equal(h.calls.length,0);
    });
    await t.test('arrays in single-word and redirect positions are refused',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      assert.throws(()=>$`cmd prefix${['a','b']}`,/one word/);
      assert.throws(()=>$`cmd > ${[]}`,/no file/);assert.equal(h.calls.length,0);
    });
    await t.test('raw text requires host provenance approval',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>false);
      assert.throws(()=>$`cmd ${{raw:'x; other'}}`,/not a one-key/);assert.equal(h.calls.length,0);
    });
    await t.test('approved raw text is spliced literally',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      await $`cmd ${{raw:'x | next'}}`;assert.equal(h.calls[0][0],'cmd x | next');
    });
    await t.test('nonzero throws ShellError and nothrow preserves exit code',async()=>{
      const h=shellHost(()=>({stdout:'bad',stderr:'',exitCode:2,text:'bad'})),{$,ShellError}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      await assert.rejects($('failing'),e=>e instanceof ShellError&&e.exitCode===2);
      assert.equal((await $('failing').nothrow()).exitCode,2);
      assert.equal((await $('failing').throws(false)).exitCode,2);
    });
    await t.test('host outcome note exempts a nonzero command from throwing',async()=>{
      const h=shellHost(()=>({stdout:'',stderr:'',exitCode:1,text:'',note:'no matches'})),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      assert.equal((await $('rg no-match')).exitCode,1);
    });
    await t.test('background result is returned but cannot be read as finished output',async()=>{
      const h=shellHost(()=>({stdout:'partial',stderr:'',exitCode:null,text:'partial',running:{taskId:'fixture',outputPath:'/fixture/log'}})),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      const out=await $('long').timeout(50);assert.equal(h.calls[0][1],50);
      assert.equal(out.running.taskId,'fixture');assert.throws(()=>out.text(),/has not/);
      await assert.rejects($('long').json(),/has not/);
    });
    await t.test('cwd and environment values are quoted and invalid keys are refused',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      await $('cmd').cwd('/tmp/a b').env({TEST_VALUE:'x; bad'}).timeout(123);
      assert.equal(h.calls[0][0],"cd '/tmp/a b' && export TEST_VALUE='x; bad'; cmd");
      assert.equal(h.calls[0][1],123);
      await assert.rejects($('cmd').env({'BAD; key':'x'}),/not a shell variable/);
      assert.equal(h.calls.length,1);
    });
    await t.test('immediate readers request full output; later readers use inline output',async()=>{
      const h=shellHost(()=>({stdout:'head',stderr:'',exitCode:0,text:'head',wholeText:'complete\ntext',stdoutWhole:false})),{$}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      assert.equal(await $('cmd').text(),'complete\ntext');assert.equal(h.calls[0][3],true);
      const out=await $('cmd');assert.equal(out.text(),'head');assert.equal(h.calls[1][3],false);
    });
    await t.test('JSON and line readers and preview preserve documented shapes',async()=>{
      const h=shellHost(()=>({stdout:'{"n":4}',stderr:'',exitCode:0,text:'{"n":4}',stdoutWhole:true})),{$,preview}=(await factory(version,'shell'))(h.run,'output','bash',()=>{},()=>true);
      assert.deepEqual(json(await $('cmd').json()),{n:4});assert.deepEqual(json(await $('cmd').lines()),['{"n":4}']);
      assert.equal(preview('abcdef',3),'abc…[+3 chars]');assert.equal(preview(null),'');
    });
    await t.test('PowerShell escapes quotes and refuses typographic delimiters',async()=>{
      const h=shellHost(),{$}=(await factory(version,'shell'))(h.run,'output','powershell',()=>{},()=>true);
      await $`cmd ${"a'b"}`;assert.equal(h.calls[0][0],"cmd 'a''b'");
      assert.throws(()=>$`cmd ${'a\u2019b'}`,/typographic quote/);
    });
    await t.test('batch edit preflights every evolving anchor before writing',async()=>{
      const h=fileHost({f:'alpha beta'}),api=(await factory(version,'file'))(...h.args);
      await assert.rejects(api.edit('f',[['alpha','changed'],['missing','x']]),/untouched/);
      assert.equal(h.files.get('f'),'alpha beta');assert.equal(h.calls.filter(x=>x[0]==='edit').length,0);
      const out=await api.edit('f',[['alpha','changed'],['changed','final']]);
      assert.deepEqual(json(out),{ok:true,replacements:2});assert.equal(h.files.get('f'),'final beta');
    });
    await t.test('batch soft failure reports zero replacements and keeps file intact',async()=>{
      const h=fileHost({f:'aa aa'}),api=(await factory(version,'file'))(...h.args);
      const out=await api.edit('f',[['aa','bb']],{soft:true});assert.equal(out.ok,false);assert.equal(out.replacements,0);assert.equal(h.files.get('f'),'aa aa');
    });
    await t.test('literal replacement tokens remain literal and all counts replacements',async()=>{
      const h=fileHost({f:'x x'}),api=(await factory(version,'file'))(...h.args);
      const out=await api.edit('f','x','$&-$1',{all:true});assert.equal(out.replacements,2);assert.equal(h.files.get('f'),'$&-$1 $&-$1');
    });
    await t.test('same-text edits skip host writes and warn',async()=>{
      const h=fileHost({f:'x'}),api=(await factory(version,'file'))(...h.args);
      assert.equal((await api.edit('f','absent','absent')).replacements,0);assert.equal(h.calls.length,0);assert.equal(h.notes.length,1);
    });
    await t.test('file readers are lazy, sliced, frozen and propagate missing-file errors',async()=>{
      const h=fileHost({f:'one\ntwo\nthree\n',j:'{"ok":1}'}),api=(await factory(version,'file'))(...h.args);
      const f=api.file('f');assert.equal(h.calls.length,0);assert.equal(Object.isFrozen(f),true);
      assert.equal(await f.slice(2,1),'two');assert.equal(await f.exists(),true);assert.equal(await api.file('missing').exists(),false);
      assert.deepEqual(json(await api.file('j').json()),{ok:1});assert.equal((await f.lines()).length,4);
      await assert.rejects(api.file('missing').text(),/not found/);
    });
    await t.test('write returns UTF-8 byte count and rejects object content',async()=>{
      const h=fileHost(),api=(await factory(version,'file'))(...h.args);
      assert.equal(await api.write('f','é'),2);await assert.rejects(api.write('f',{}),/Nothing was written/);assert.equal(h.files.get('f'),'é');
    });
    await t.test('sleep delegates scheduling and surfaces cancellation',async()=>{
      const h=fileHost();h.args[5]=(resolve,ms,cancel)=>{assert.equal(ms,12);cancel();};
      const api=(await factory(version,'file'))(...h.args);await assert.rejects(api.sleep(12),/cancelled/);
    });
    await t.test('running snapshots are frozen; abort and unavailable tools use registry',async()=>{
      const ToolA=()=>7, make=await factory(version,'running',{ToolA});let stopped;
      const api=make(()=>[{id:3,snippet:'script',runningMs:10,state:'late',self:false}],id=>(stopped=id,''),()=>['ToolA'],name=>name==='ToolA');
      const entry=api.running()[0];assert.equal(entry.settled,true);assert.equal(Object.isFrozen(entry),true);assert.equal(entry.abort(),true);assert.equal(stopped,3);
      assert.equal(api.tools.ToolA(),7);assert.equal(api.tools.Other,undefined);assert.deepEqual(json(api.tools.list()),['ToolA']);assert.equal(Reflect.set(api.tools,'Other',1),false);
    });
    await t.test('context handles are stable, live and expose results through host',async()=>{
      let state={status:'running',lastText:'first',cost:1};const released=[];
      const api=(await factory(version,'team'))(async(name,role,prompt,fork)=>({ok:{name,role,prompt,fork}}),async name=>(released.push(name),{ok:true}),async()=>({ok:['worker']}),()=>state,()=>['worker'],async()=>({ok:{status:'done',text:'answer'}}),async(name,n)=>({ok:[name,n]}),async()=>({ok:true}));
      assert.equal(api.contexts.worker,api.contexts.worker);state={...state,lastText:'second'};assert.equal(api.contexts.worker.state.lastText,'second');
      assert.equal((await api.contexts.worker.result()).text,'answer');assert.deepEqual(json(await api.contexts.worker.tail(4)),['worker',4]);
      assert.equal((await api.spawnContext({name:'worker',initialPrompt:'task',fork:true})).fork,true);
      await api.releaseContext('worker');assert.deepEqual(released,['worker']);
      await assert.rejects(api.spawnContext({fork:true,model:'any'}),/model cannot be set/);
      await assert.rejects(api.spawnContext({fork:true,schema:{}}),/schema is not supported/);
      state={...state,unclearedReport:'read tail first'};assert.throws(()=>api.contexts.worker.state.lastText,/read tail first/);
    });
  });
}
