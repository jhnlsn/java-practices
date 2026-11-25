// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{HMi,kje}from"/$bunfs/root/chunk-0vvtfqck.js";function oei(r,o=[],n=!1){let t=r.message.content;if(!Array.isArray(t))return"";let i=kje();if(i.size===0)return"";return t.flatMap((e)=>{if(e.type!=="tool_use")return[];if(!i.has(e.name))return o.filter((s)=>s.replCallId===e.id&&(n||!s.toAnotherAgent)).map((s)=>s.text);if(!n&&!HMi(e.name))return[];let a=e.input?.text;return typeof a==="string"?[a]:[]}).filter(Boolean).join(`
`)}var p=8;class MDt{#t=[];note(r,o,n){let t=n.text;if(typeof t!=="string"||!t)return;if(this.#t.push({replCallId:r,text:t,...!HMi(o)&&{toAnotherAgent:!0}}),this.#t.length>p)this.#t.shift()}take(){return this.#t.splice(0)}clear(){this.#t.length=0}}
export{oei,MDt};
