// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Xzn,AGe,wpn}from"/$bunfs/root/chunk-48t3rr53.js";import{el}from"/$bunfs/root/chunk-m55722gg.js";import{Et}from"/$bunfs/root/chunk-r3zpj4t6.js";var s=/\s|\P{ASCII}/u,i=/^(?:[.~{\\]|\/[^\s/]*\/|\w+:\S)/,p=/(?:^|[\s,])(?![A-Z\s,]|mcp__|$)/;function axt(e=process.argv.slice(2)){if(wpn(e)!==-1)return;for(let t=0;t<e.length;t++){let o=e[t],r=AGe(e,t),n=e[r]?.trim();if(Xzn.has(o)&&r>t+1&&n!==void 0&&s.test(n)&&!i.test(n)&&p.test(n.replace(/\(.*\)/s,"")))return{problem:`"${Et(el(n),40)}" was read as a value of ${o}, not as a prompt`,fix:`put a prompt before ${o} or after --`};t=r}return}
export{axt};
