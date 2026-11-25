// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{EG}from"/$bunfs/root/chunk-9r4r85pg.js";import{ko}from"/$bunfs/root/chunk-xcgcdx61.js";import{T}from"/$bunfs/root/chunk-ma3kja9f.js";var r="claude/structuredContentJsonBase64",mpo="toolbox.text_blocks_left_out",o=/^[A-Za-z0-9+/]*={0,2}$/;function sll(t){return{[r]:Buffer.from(t,"utf8").toString("base64")}}function qDe(t){return EG()&&T(t)&&typeof ko(t,r)==="string"&&Object.keys(t).length===1}function bUt(t){if(!qDe(t))return;let n=t[r];if(n.length%4!==0||!o.test(n))return;let e=Buffer.from(n,"base64").toString("utf8");return e.trim()?e:void 0}
export{mpo,sll,qDe,bUt};
