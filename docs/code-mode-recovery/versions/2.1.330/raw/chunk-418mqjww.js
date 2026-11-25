// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var _xt=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function zoe(e){return new RegExp(_xt).test(e)}function yxt(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(_xt,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function Wqn(e){return e.replace(new RegExp(_xt,"g"),(n)=>"x".repeat(n.length))}function sft(e){return e.replace(new RegExp(_xt,"g"),(n,r)=>`\${${r}}`)}
export{_xt,zoe,yxt,Wqn,sft};
