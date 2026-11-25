// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{sEi,G$e}from"/$bunfs/root/chunk-8xw2rxmj.js";function F3s(r,o=[],n=!1){let t=r.message.content;if(!Array.isArray(t))return"";let i=G$e();if(i.size===0)return"";return t.flatMap((e)=>{if(e.type!=="tool_use")return[];if(!i.has(e.name))return o.filter((s)=>s.replCallId===e.id&&(n||!s.toAnotherAgent)).map((s)=>s.text);if(!n&&!sEi(e.name))return[];let a=e.input?.text;return typeof a==="string"?[a]:[]}).filter(Boolean).join(`
`)}var p=8;class vOt{#t=[];note(r,o,n){let t=n.text;if(typeof t!=="string"||!t)return;if(this.#t.push({replCallId:r,text:t,...!sEi(o)&&{toAnotherAgent:!0}}),this.#t.length>p)this.#t.shift()}take(){return this.#t.splice(0)}clear(){this.#t.length=0}}
export{F3s,vOt};
