// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{i2}from"/$bunfs/root/chunk-zzhrwga7.js";import{_o}from"/$bunfs/root/chunk-t39fw2cy.js";import{T}from"/$bunfs/root/chunk-rhrgztck.js";var r="claude/structuredContentJsonBase64",woo="toolbox.text_blocks_left_out",o=/^[A-Za-z0-9+/]*={0,2}$/;function Q7a(t){return{[r]:Buffer.from(t,"utf8").toString("base64")}}function TMe(t){return i2()&&T(t)&&typeof _o(t,r)==="string"&&Object.keys(t).length===1}function xLt(t){if(!TMe(t))return;let n=t[r];if(n.length%4!==0||!o.test(n))return;let e=Buffer.from(n,"base64").toString("utf8");return e.trim()?e:void 0}
export{woo,Q7a,TMe,xLt};
