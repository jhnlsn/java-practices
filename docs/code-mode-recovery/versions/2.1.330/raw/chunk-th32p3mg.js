// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Oi}from"/$bunfs/root/chunk-69qhefwa.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),QSa=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function uH(t,e){return`${t}=${e}`}function SWo(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[uH(t,n)];return[t,n]}function wXn(t,e,n){t.push(...SWo(`--${e}`,n))}function Njr(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!Oi(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")wXn(t,r,s),i++}return i}
export{QSa,uH,SWo,wXn,Njr};
