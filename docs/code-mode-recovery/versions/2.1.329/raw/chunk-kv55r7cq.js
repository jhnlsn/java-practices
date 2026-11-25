// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Tfe}from"/$bunfs/root/chunk-d1pd8gzf.js";import{uEe}from"/$bunfs/root/chunk-td1xhp57.js";import{z4e}from"/$bunfs/root/chunk-53y43tg8.js";import{w$e}from"/$bunfs/root/chunk-5yft96g2.js";import{fVe,iZe}from"/$bunfs/root/chunk-ed4p7gwk.js";import{E9t}from"/$bunfs/root/chunk-crehsfeq.js";import{Ig}from"/$bunfs/root/chunk-15e5qt5d.js";function lQn(e){if(w$e(e.client,e.name)!==void 0)return"file_reference";if(E9t(e.meta)!==void 0&&z4e.some((o)=>Tfe(e.client,o)))return"listed_mark";if(Ig(e.client.config)===void 0&&uEe(e.client)===void 0)return;let{marked:r,unfilled:n,everyCall:i}=fVe(e.schema);return r.length>0||n.length>0||i||iZe(e.schema).length>0?"schema_mark":void 0}
export{lQn};
