// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{a}from"/$bunfs/root/chunk-487kez16.js";import{fEo,mEo,sTl}from"/$bunfs/root/chunk-73rzabst.js";import{Oa}from"/$bunfs/root/chunk-t39fw2cy.js";import{de}from"/$bunfs/root/chunk-pb0k2vmd.js";var i=de({noted:new WeakMap},(t)=>{t.noted=new WeakMap});function qOt(t){let e=[];for(let r of t){if(!Oa(r))continue;let{config:n}=r,o=n&&typeof n==="object"&&"url"in n&&typeof n.url==="string"?n.url:null;if(o!==null&&sTl(o))s(n);if(o!==null&&mEo(o))e.push(r)}return e.length===1?e[0]:null}function s(t){let e=fEo();if(i.noted.get(t)===e)return;i.noted.set(t,e),a("tengu_mcp_meta_name_hash_unfit",{lifted:e})}
export{qOt};
