import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import * as parser from '@babel/parser';
import traversePackage from '@babel/traverse';
const traverse = traversePackage.default ?? traversePackage;
const cores = {'2.1.329':'chunk-xgav7f9x.js','2.1.330':'chunk-v7j43e2p.js'};
const labels = {
  Bs:'createPersistentSandbox', dm:'createBoundarySanitizers', Xd:'installGlobalHelpers',
  um:'installToolAndFileBridges', cm:'hideInstrumentationInFunctionToString', gm:'installStepBudget',
  wm:'installRawLiteralProvenance', Mr:'getStepBudget', yn:'parseScript', Oa:'instrumentScript',
  Nr:'removeExpressionMarkers', mu:'transformScript', hu:'rejectProtectedGlobalWrites',
  Tu:'trackUninitializedBindings', yu:'preserveHelperDeclarations', Au:'ScriptExecution',
  Xs:'ScriptEngine', Ls:'invokeTrackedTool', to:'createPermissionCheckedToolWrapper',
  us:'createToolDiscovery', Da:'generateToolDescription', Ia:'generateGlobalDeclarations',
  Ca:'normalizeTemplateText', kp:'generateToolTypeDeclarations', Pr:'normalizeShellResult',
  Hd:'quotePosixArgument', Qd:'createScriptCallBinding',
  cu:'createCallState', ri:'serializeResultParts', Th:'trackScriptOwnTime',
  Oh:'createHungToolWatchdog', am:'createScriptOutputCollector', om:'appendConsoleRing',
  sm:'readConsoleRingTail', ih:'executeToolCall', Vu:'executeScriptWithLifecycle',
  li:'EvalTool', Vm:'inputSchema', qu:'outputSchema',
};
function normalized(node) {
  if(typeof node==='bigint') return {bigint:String(node)};
  if(Array.isArray(node)) return node.map(normalized);
  if(node && typeof node==='object') {
    const out={};
    for(const [k,v] of Object.entries(node)) {
      if(['start','end','loc','extra','leadingComments','trailingComments','innerComments'].includes(k)) continue;
      out[k]=k==='name' && /Identifier$/.test(node.type) ? '$identifier' : normalized(v);
    }
    return out;
  }
  return node;
}
const all={};
for(const [version,core] of Object.entries(cores)) {
  const root=path.resolve('versions',version), source=await fs.readFile(path.join(root,'formatted',core),'utf8');
  const ast=parser.parse(source,{sourceType:'module'});
  const symbols=[];
  traverse(ast,{Program(p){
    for(const [name,binding] of Object.entries(p.scope.bindings)) {
      const bp=binding.path, n=bp.node, deps=new Set();
      bp.traverse({ReferencedIdentifier(ref){
        const b=ref.scope.getBinding(ref.node.name);
        if(b?.scope===p.scope && b.identifier.name!==name) deps.add(b.identifier.name);
      }});
      symbols.push({name,kind:n.type,line:n.loc.start.line,endLine:n.loc.end.line,
        dependencies:[...deps],importedFrom:bp.parentPath.isImportDeclaration()?bp.parentPath.node.source.value:undefined,
        imported:bp.isImportSpecifier()?n.imported.name:undefined,
        structuralHash:crypto.createHash('sha256').update(JSON.stringify(normalized(n))).digest('hex')});
    }
    p.stop();
  }});
  all[version]={core,symbols};
}
const old=all['2.1.329'].symbols, latest=all['2.1.330'].symbols;
const transitions=[];
for(const s of old.filter(x=>!x.importedFrom)) {
  const candidates=latest.filter(x=>!x.importedFrom&&x.structuralHash===s.structuralHash);
  const uniqueOld=old.filter(x=>!x.importedFrom&&x.structuralHash===s.structuralHash).length===1;
  if(candidates.length===1&&uniqueOld) {
    const t=candidates[0];
    if(labels[s.name]) {s.label=labels[s.name];t.label=labels[s.name];}
    transitions.push({from:s.name,to:t.name,label:labels[s.name],fromLine:s.line,toLine:t.line});
  } else if(labels[s.name]) s.label=labels[s.name];
}
for(const [version,data] of Object.entries(all)) {
  await fs.writeFile(path.resolve('versions',version,'symbols.json'),JSON.stringify(data,null,2)+'\n');
  const root=path.resolve('versions',version);
  const extra=new Set(data.symbols.filter(s=>s.importedFrom && /(?:ipr|apr|wTi|ine|MHe|NWe|v0n|rTi)$/.test(s.name)).map(s=>s.importedFrom.slice(13)));
  // Follow the corresponding imports in 330 using 329's imported-symbol groups.
  const configMarker='4294967296';
  for(const imp of data.symbols.filter(s=>s.importedFrom)) {
    const file=imp.importedFrom.slice(13);
    if(!file.startsWith('chunk-'))continue;
    const raw=await fs.readFile(path.join(root,'raw',file),'latin1');
    if(raw.includes(configMarker)&&raw.includes('50000')&&raw.includes('7200000'))extra.add(file);
    if(raw.includes('Refusing to make a node:vm context'))extra.add(file);
    if(raw.includes('isEngineCheckDone'))extra.add(file);
  }
  for(const file of extra) {
    const raw=await fs.readFile(path.join(root,'raw',file),'latin1');
    const prettier=await import('prettier');
    await fs.writeFile(path.join(root,'formatted',file),await prettier.format(raw,{parser:'babel'}));
  }
  await fs.writeFile(path.join(root,'symbol-index.md'),`# Recovered Code Mode symbols (${version})\n\nNames in the shipped bundle are retained. Descriptive labels are analyst annotations.\n\n| Symbol | Role / kind | Source line |\n|---|---|---|\n`+data.symbols.filter(s=>!s.importedFrom).map(s=>`| \`${s.name}\` | ${s.label??s.kind} | [${s.line}](formatted/${data.core}#L${s.line}) |`).join('\n')+'\n');
}
await fs.writeFile('evidence/core-version-map.json',JSON.stringify({method:'Unique AST shape match after erasing identifier names; evidence of structural similarity, not semantic equivalence.',matched:transitions.length,oldDeclarations:old.filter(x=>!x.importedFrom).length,newDeclarations:latest.filter(x=>!x.importedFrom).length,transitions},null,2)+'\n');
console.log(JSON.stringify({matched:transitions.length,oldDeclarations:old.filter(x=>!x.importedFrom).length,newDeclarations:latest.filter(x=>!x.importedFrom).length,labels:transitions.filter(x=>x.label)}));
