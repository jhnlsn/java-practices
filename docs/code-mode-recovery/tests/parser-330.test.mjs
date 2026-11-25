import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {slicerFromFile} from './source-support.mjs';
async function module(name){
  const m=new vm.SourceTextModule(await fs.readFile('versions/2.1.330/raw/'+name,'utf8'));
  await m.link(()=>{throw Error('Unexpected parser dependency');});await m.evaluate();return m.namespace;
}
const parser=await module('chunk-dzjs7e5t.js'),walker=await module('chunk-qkq8jy2e.js'),guard=await module('chunk-akv83krc.js');
const create=await slicerFromFile('versions/2.1.330/formatted/chunk-zg2mw0h6.js');
const {namespace:n}=create(['U$e','zIa','C7s'],{zAr:guard.zAr,__require:name=>name.includes('dzjs7e5t')?parser:walker});
await test('330: recovered replacement parser',async t=>{
  await t.test('parses top-level await, destructuring, classes and regex literals',()=>{
    const ast=n.U$e('const {a,...rest}=await source(); class X { #v=1; value(){return this.#v} }; /a+/g;');
    assert.equal(ast.type,'Program');assert.equal(ast.body[0].type,'VariableDeclaration');assert.equal(ast.body[1].type,'ClassDeclaration');
  });
  await t.test('new __replEnter reservation is enforced',()=>{
    assert.throws(()=>n.zIa('(()=>{const __replEnter=1;})()'),/reserved/);
  });
  await t.test('replacement instrumentation executes loops and async functions',async()=>{
    let steps=0;
    const code=n.zIa('(async()=>{const plus=async x=>x+1; let total=0; for(let i=0;i<3;i++){total=await plus(total)} return total;})()');
    const out=await vm.runInNewContext(code,{__replStep(){steps++;}},{timeout:1000});
    assert.equal(out,3);assert.equal(steps,7);assert.equal(n.C7s(),300000000);
  });
  await t.test('replacement parser reports syntax failures and nesting guard still applies',()=>{
    assert.throws(()=>n.U$e('let = ;'));
    assert.throws(()=>n.zIa('(()=>{'+'['.repeat(505)+'0'+']'.repeat(505)+'})()'),/nested too deeply/);
  });
});
