// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var _Tt=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function rre(e){return new RegExp(_Tt).test(e)}function yTt(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(_Tt,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function v2n(e){return e.replace(new RegExp(_Tt,"g"),(n)=>"x".repeat(n.length))}function Hlt(e){return e.replace(new RegExp(_Tt,"g"),(n,r)=>`\${${r}}`)}
export{_Tt,rre,yTt,v2n,Hlt};
