import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {parse} from '@babel/parser';
const source=await fs.readFile('versions/2.1.330/formatted/chunk-yaw6xb6n.js','utf8');
const ast=parse(source,{sourceType:'module'}),imports=new Map();
for(const node of ast.program.body)if(node.type==='ImportDeclaration')imports.set(node.source.value,node.specifiers.map(s=>s.imported.name));
const errors=[];
function emitter(){const listeners=new Set();return{emit(...args){for(const fn of listeners)fn(...args);},subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn);}};}
const host={K:ms=>new Promise(r=>setTimeout(r,ms)),_r:()=>new AbortController(),hl:()=>Error('cancelled'),Be:emitter,A:Error,i:e=>errors.push(e),nn:()=>false,Ga:async()=>{},Bje:'main',ue:()=>true,u$n:()=>false,Vgs:()=>{},Kgs:x=>x,uj:x=>x instanceof Error};
const mod=new vm.SourceTextModule(source);
await mod.link(async spec=>{
  const names=imports.get(spec);
  for(const n of names)assert.ok(Object.hasOwn(host,n),'Missing scheduler host '+n);
  return new vm.SyntheticModule(names,function(){for(const n of names)this.setExport(n,host[n]);});
});
await mod.evaluate();
const {Lbe}=mod.namespace;
const deferred=()=>{let resolve;const promise=new Promise(r=>resolve=r);return{promise,resolve};};
const tick=()=>new Promise(r=>setImmediate(r));
function dispatch(sessions,execute,{detachAfterMs=1000}={}){
  const output=[];
  const handle=sessions.dispatch('main',execute,{signal:new AbortController().signal,description:'fixture',detachAfterMs,deliver:async(...args)=>output.push(args)},'fixture code');
  return{...handle,output};
}
await test('330: original async scheduler',async t=>{
  await t.test('scripts start FIFO and results are delivered once',async()=>{
    const sessions=new Lbe(),gate=deferred(),starts=[];
    const first=dispatch(sessions,async()=>{starts.push(1);await gate.promise;return 'first';});
    const second=dispatch(sessions,async()=>{starts.push(2);return 'second';});
    await tick();assert.deepEqual(starts,[1]);assert.equal(sessions.pending('main')[1].state,'waiting');
    gate.resolve();await Promise.all([first.ended,second.ended]);
    assert.deepEqual(starts,[1,2]);assert.equal(first.output.length,1);assert.equal(second.output[0][1],'second');assert.equal(sessions.outstanding(),0);
  });
  await t.test('detaching lets the next script start while the first remains active',async()=>{
    const sessions=new Lbe(),gate=deferred(),started=deferred();
    const first=dispatch(sessions,async()=>{await gate.promise;return 'first';},{detachAfterMs:10});
    const second=dispatch(sessions,async()=>{started.resolve();return 'second';});
    await started.promise;assert.equal(sessions.pending('main').find(x=>x.id===first.evalId).state,'detached');
    gate.resolve();await Promise.all([first.ended,second.ended]);assert.equal(first.output.length,1);
  });
  await t.test('eight unsettled scripts fill the cap; ninth is refused',async()=>{
    const sessions=new Lbe(),gate=deferred();
    const entries=Array.from({length:8},()=>dispatch(sessions,async()=>{await gate.promise;return 'ok';}));
    assert.throws(()=>dispatch(sessions,async()=>0),/8 evals/);
    gate.resolve();await Promise.all(entries.map(x=>x.ended));assert.equal(sessions.depth('main'),0);
  });
  await t.test('aborting a queued script marks it never run and preserves other work',async()=>{
    const sessions=new Lbe(),gate=deferred();let ran=false;
    const first=dispatch(sessions,async()=>{await gate.promise;return 'first';});
    const second=dispatch(sessions,async()=>{ran=true;return 'second';});
    assert.equal(sessions.abort('main',second.evalId),'');gate.resolve();
    await Promise.all([first.ended,second.ended]);assert.equal(ran,false);assert.equal(second.output[0][2],true);assert.equal(second.output[0][5],'other');
    assert.equal(sessions.abort('main',999),'no such eval (it may have settled already)');
  });
  await t.test('runtime failures settle as errors and do not block later scripts',async()=>{
    const sessions=new Lbe();const failed=dispatch(sessions,async()=>{throw Error('probe error');});const next=dispatch(sessions,async()=>2);
    await Promise.all([failed.ended,next.ended]);assert.equal(failed.output[0][1],'probe error');assert.equal(failed.output[0][2],true);assert.equal(next.output[0][1],2);
  });
  await t.test('context release clears timers and removes its persistent context',()=>{
    const sessions=new Lbe();let cleared=0;const context={clearAllTimers(){cleared++;}};
    sessions.set('temporary',context);assert.equal(sessions.get('temporary'),context);assert.equal(sessions.release('temporary'),true);assert.equal(cleared,1);assert.equal(sessions.has('temporary'),false);
  });
  assert.deepEqual(errors,[]);
});
