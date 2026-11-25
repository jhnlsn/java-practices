// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{g5n,bVe,rSn}from"/$bunfs/root/chunk-dw5px5e0.js";import{el}from"/$bunfs/root/chunk-7cfjrnwy.js";import{Tt}from"/$bunfs/root/chunk-f64qna2j.js";var s=/\s|\P{ASCII}/u,i=/^(?:[.~{\\]|\/[^\s/]*\/|\w+:\S)/,p=/(?:^|[\s,])(?![A-Z\s,]|mcp__|$)/;function dMt(e=process.argv.slice(2)){if(rSn(e)!==-1)return;for(let t=0;t<e.length;t++){let o=e[t],r=bVe(e,t),n=e[r]?.trim();if(g5n.has(o)&&r>t+1&&n!==void 0&&s.test(n)&&!i.test(n)&&p.test(n.replace(/\(.*\)/s,"")))return{problem:`"${Tt(el(n),40)}" was read as a value of ${o}, not as a prompt`,fix:`put a prompt before ${o} or after --`};t=r}return}
export{dMt};
