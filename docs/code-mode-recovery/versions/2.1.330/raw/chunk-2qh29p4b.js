// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{OOo,MOo,oLl}from"/$bunfs/root/chunk-2mwshd9r.js";import{ji}from"/$bunfs/root/chunk-xcgcdx61.js";import{de}from"/$bunfs/root/chunk-t57w17k7.js";var i=de({noted:new WeakMap},(t)=>{t.noted=new WeakMap});function l0t(t){let e=[];for(let r of t){if(!ji(r))continue;let{config:n}=r,o=n&&typeof n==="object"&&"url"in n&&typeof n.url==="string"?n.url:null;if(o!==null&&oLl(o))s(n);if(o!==null&&MOo(o))e.push(r)}return e.length===1?e[0]:null}function s(t){let e=OOo();if(i.noted.get(t)===e)return;i.noted.set(t,e),a("tengu_mcp_meta_name_hash_unfit",{lifted:e})}
export{l0t};
