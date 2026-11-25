// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var s=new qe(()=>({store:void 0})),i={maxBytes:0,save:async()=>null};function X_t(e){return s.peek(e)?.store??(e.host.launchOptions.diskless()?i:void 0)}function av(){return X_t(N())}async function v$e(e,o,r,n){try{return await e.save(o,r,n)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{X_t,av,v$e};
