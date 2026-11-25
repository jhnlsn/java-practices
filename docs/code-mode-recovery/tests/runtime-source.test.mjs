import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {slice,parserBindings} from './source-support.mjs';

const parserHost=await parserBindings();
const {namespace:rewriter}=slice(['Oa','Nr','hu','Mr'],{...parserHost,A:Error});
// Bun's private replMode transpiler supplies this wrapper. The system Bun 1.2.9
// does not implement that mode; these probes start at the recovered AST pass.
const instrument=code=>rewriter.Oa('(()=>{'+code+'})()');
await test('recovered parser and instrumentation',async t=>{
  await t.test('real Acorn parser accepts an async execution wrapper',()=>{
    const out=rewriter.Oa('(async()=>{async function run(){return 4}; await run();})()');
    assert.match(out,/__replStep\(\)/);assert.match(out,/await run/);
  });
  await t.test('loop and function steps are injected and enforce a host counter',async()=>{
    let steps=0;
    const code=instrument('let total=0; for(let i=0;i<4;i++)total+=i; return total;');
    const result=await vm.runInNewContext(code,{__replStep(){steps++;}},{timeout:1000});
    assert.equal(result,6);assert.equal(steps,5);
    await assert.rejects(vm.runInNewContext(instrument('while(true) {}'),{__replStep(){if(++steps>20)throw Error('budget fixture');}},{timeout:1000}),/budget fixture/);
  });
  await t.test('reserved names and with blocks are rejected before execution',()=>{
    for(const name of ['__replStep','__replRaw','__replAt'])assert.throws(()=>instrument('let '+name+'=0'),/reserved/);
    assert.throws(()=>instrument('with({}) {}'),/not supported/);
  });
  await t.test('only one-key raw object literals receive provenance marks',()=>{
    const output=instrument('const a={raw:"ok"}; const b={raw:"x",other:1};');
    assert.equal(output.split('__replRaw(').length-1,1);
    assert.equal(rewriter.Nr(output).includes('__replRaw'),false);
  });
  await t.test('protected globals cannot be declared or assigned; local shadowing works',()=>{
    const protectedName=name=>['Read','Object'].includes(name);
    for(const code of ['const Read=1','Read=1','globalThis.Read=1','globalThis["Read"]=1','Object=0'])
      assert.throws(()=>rewriter.hu(code,protectedName,'model'),/would overwrite/);
    assert.doesNotThrow(()=>rewriter.hu('function f(Read){Read=2; return Read}',protectedName,'model'));
  });
  await t.test('deep syntax is refused and the recovered step budget is numeric',()=>{
    assert.throws(()=>instrument('['.repeat(505)+'0'+']'.repeat(505)),/nested too deeply/);
    assert.equal(rewriter.Mr(),300000000);
  });
});

function counterFixture({budget=16,memory=false,clockBound=1000}={}) {
  const target=vm.createContext({});
  const steps={left:0,rest:budget,budget,deadline:0,bound:0,leftoverBound:Infinity,stride:1,lastClock:0,stopped:false,clockStops:0,budgetStopped:false,budgetStops:0,memoryReadAt:0,memoryWasRead:false,memoryStopped:false,memoryStops:0};
  const overrides={
    hm:()=>()=>memory, fm:()=>{}, _Ti:100, _:JSON.stringify,
    an:n=>String(n), apr:()=>1024, $e:()=>Date.now(),
    en:(code,ctx)=>vm.runInContext(code,ctx,{timeout:1000}), A:Error,
  };
  const {namespace:n}=slice(['gm','An'],overrides);
  n.gm(target,steps,{clone:x=>x,fn:x=>x,rejectImport:undefined});
  n.An.get(steps).start(clockBound);
  return {target,steps,run:code=>vm.runInContext(instrument(code),target,{timeout:1000})};
}
await test('recovered step-budget installer',async t=>{
  await t.test('exact guard stops an endless loop at the configured budget',async()=>{
    const f=counterFixture();await assert.rejects(f.run('while(true) {}'),/16 steps/);assert.equal(f.steps.budgetStops,1);
    assert.equal(vm.runInContext('typeof __replStepCounter',f.target),'undefined');
  });
  await t.test('exact guard reports a wall-clock stop',async()=>{
    const f=counterFixture({clockBound:-1});await assert.rejects(f.run('while(true) {}'),/wall clock/);assert.equal(f.steps.clockStops,1);
  });
  await t.test('exact guard surfaces host memory-pressure signal',async()=>{
    const f=counterFixture({memory:true});await assert.rejects(f.run('while(true) {}'),/of memory/);assert.equal(f.steps.memoryStops,1);
  });
});

await test('recovered raw-literal provenance installer',()=>{
  const target=vm.createContext({});
  const {namespace:n}=slice(['wm'],{en:(code,ctx)=>vm.runInContext(code,ctx),Ie:()=>true});
  const check=n.wm(target,{fn:x=>x,rejectImport:undefined});
  const written=vm.runInContext('__replRaw({raw:"x"})',target);
  assert.equal(check(written),true);assert.equal(check({raw:'x'}),false);
  written.raw='changed';assert.equal(check(written),false);
});
