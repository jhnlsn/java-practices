import fs from 'node:fs/promises';
import path from 'node:path';
import * as parser from '@babel/parser';
import * as prettier from 'prettier';

const markers = ['REPL context poisoned', 'stepAfterDirectives', 'REPL execution exceeded',
  'searchTools:', 'REPL is your programming', 'dispatched #', 'EXPERIMENTAL_CODE_MODE',
  '__repl', 'REPL', 'Code Mode', 'codeMode', 'repl_mode', 'ReplSessions', 'repl-eval'];
for (const version of process.argv.slice(2)) {
  const root = path.resolve('versions', version);
  const manifest = JSON.parse(await fs.readFile(path.join(root,'manifest.json'),'utf8'));
  const modules = [], selected = [];
  await fs.mkdir(path.join(root,'formatted'), {recursive:true});
  for (const item of manifest.modules) {
    if (!item.encoding || !(/\.(?:m?js|cjs)$/.test(item.path) || item.path === 'cli')) continue;
    const bytes = await fs.readFile(path.join(root,'raw',item.path));
    const source = bytes.toString(item.encoding === 2 ? 'utf16le' : 'latin1');
    const hits = markers.filter(marker=>source.includes(marker));
    let ast;
    try { ast = parser.parse(source,{sourceType:'unambiguous'}); }
    catch(error) { modules.push({path:item.path,parseError:error.message}); continue; }
    const imports = ast.program.body.filter(s=>s.type==='ImportDeclaration'||s.source)
      .map(s=>s.source?.value).filter(Boolean);
    const refs=new Set(), pending=[ast.program];
    while(pending.length) {
      const n=pending.pop();
      if(!n||typeof n!=='object')continue;
      if(n.type==='StringLiteral' && n.value.startsWith('/$bunfs/root/'))refs.add(n.value.slice(13));
      for(const [key,value] of Object.entries(n)) {
        if(['loc','extra','comments','tokens'].includes(key))continue;
        if(Array.isArray(value))pending.push(...value);
        else if(value&&typeof value==='object')pending.push(value);
      }
    }
    const exports = ast.program.body.filter(s=>s.type.startsWith('Export')).flatMap(s=>
      (s.specifiers??[]).map(x=>({local:x.local?.name,exported:x.exported?.name})));
    modules.push({path:item.path,imports,exports,hits,embeddedRefs:[...refs]});
    if(hits.length) {
      selected.push(item.path);
      const formatted = await prettier.format(source,{parser:'babel'});
      await fs.writeFile(path.join(root,'formatted',item.path),formatted);
    }
  }
  const byName = new Map(modules.map(m=>[m.path,m]));
  const closure = new Set();
  function visit(name) {
    if(closure.has(name)) return;
    closure.add(name);
    for(const imp of byName.get(name)?.embeddedRefs??[]) visit(imp);
  }
  for(const name of selected) visit(name);
  const archived=new Set(manifest.modules.map(m=>m.path));
  const unresolved=modules.flatMap(m=>m.embeddedRefs?.filter(p=>!archived.has(p)).map(target=>({from:m.path,target}))??[]);
  await fs.writeFile(path.join(root,'module-graph.json'),JSON.stringify({selected,closure:[...closure],unresolved,modules},null,2)+'\n');
  console.log(JSON.stringify({version,parsed:modules.filter(m=>!m.parseError).length,parseErrors:modules.filter(m=>m.parseError),selected,closure:closure.size}));
}
