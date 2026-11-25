// Executes selected, unchanged declarations in a test VM, with explicit host substitutions.
// This is an analysis harness, not Claude's security boundary or a replacement runtime.
import fs from 'node:fs/promises';
import vm from 'node:vm';
import path from 'node:path';
import * as parser from '@babel/parser';
import traversePackage from '@babel/traverse';
const traverse=traversePackage.default??traversePackage;
const root=path.resolve('versions/2.1.329');
const source=await fs.readFile(path.join(root,'formatted/chunk-xgav7f9x.js'),'utf8');
const ast=parser.parse(source,{sourceType:'module'});
let bindings;
traverse(ast,{Program(p){bindings=p.scope.bindings;p.stop();}});
const index=JSON.parse(await fs.readFile(path.join(root,'symbols.json'),'utf8'));
const symbols=new Map(index.symbols.map(s=>[s.name,s]));
export function slice(roots,overrides={}) {
  return sliceImpl(source,bindings,symbols,roots,overrides);
}
export async function slicerFromFile(filename) {
  const code=await fs.readFile(filename,'utf8'),tree=parser.parse(code,{sourceType:'module'});
  let locals;const infos=new Map();
  traverse(tree,{Program(p){
    locals=p.scope.bindings;
    for(const [name,binding] of Object.entries(locals)) {
      const deps=new Set();
      binding.path.traverse({ReferencedIdentifier(ref){
        const b=ref.scope.getBinding(ref.node.name);
        if(b?.scope===p.scope&&b.identifier.name!==name)deps.add(b.identifier.name);
      }});
      infos.set(name,{dependencies:[...deps],importedFrom:binding.path.parentPath.isImportDeclaration()?binding.path.parentPath.node.source.value:undefined});
    }
    p.stop();
  }});
  return(roots,overrides={})=>sliceImpl(code,locals,infos,roots,overrides);
}
function sliceImpl(source,bindings,symbols,roots,overrides) {
  const selected=new Set();
  function visit(name) {
    if(Object.hasOwn(overrides,name)||selected.has(name))return;
    const info=symbols.get(name);
    if(!info)throw Error('Missing symbol '+name);
    if(info.importedFrom)throw Error('Host substitution required: '+name+' from '+info.importedFrom);
    selected.add(name);
    for(const dep of info.dependencies)visit(dep);
  }
  roots.forEach(visit);
  const declarations=[...selected].map(name=>bindings[name].path).sort((a,b)=>a.node.start-b.node.start).map(p=>
    (p.isVariableDeclarator()?'var ':'')+source.slice(p.node.start,p.node.end)+(p.isVariableDeclarator()?';':'')).join('\n');
  const context=vm.createContext({...overrides});
  const namespace=vm.runInContext('(function(){\n'+declarations.replaceAll('import.meta.require','__require')+'\nreturn {'+roots.join(',')+'};})()',context,{timeout:3000});
  return {namespace,context,declarations,selected:[...selected]};
}
// Load only the shipped Acorn parser, walker and Bun's small bundler wrapper.
// Their imports are evaluated from the extracted archive without app initialization.
const cache=new Map();
export async function recoveredModule(name) {
  if(cache.has(name))return cache.get(name);
  const src=await fs.readFile(path.join(root,'raw',name),'latin1');
  const mod=new vm.SourceTextModule(src,{identifier:name,initializeImportMeta(meta){
    meta.require=()=>{throw Error('Module loading is unused in these parser dependencies');};
  }});
  cache.set(name,mod);
  await mod.link(async spec=>recoveredModule(spec.slice('/$bunfs/root/'.length)));
  return mod;
}
export async function parserBindings() {
  const acorn=await recoveredModule('chunk-2kq3kff0.js');
  const walker=await recoveredModule('chunk-dw2dymvj.js');
  await acorn.evaluate();await walker.evaluate();
  return {NWe:acorn.namespace.NWe,__require:()=>walker.namespace};
}
