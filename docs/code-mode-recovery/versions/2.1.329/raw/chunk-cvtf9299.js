// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Os}from"/$bunfs/root/chunk-cqahc80t.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),aca=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function iM(t,e){return`${t}=${e}`}function TDo(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[iM(t,n)];return[t,n]}function i3n(t,e,n){t.push(...TDo(`--${e}`,n))}function CNr(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!Os(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")i3n(t,r,s),i++}return i}
export{aca,iM,TDo,i3n,CNr};
