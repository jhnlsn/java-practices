// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var s=new ze(()=>({store:void 0})),i={maxBytes:0,save:async()=>null};function Bwt(e){return s.peek(e)?.store??(e.host.launchOptions.diskless()?i:void 0)}function Kv(){return Bwt(N())}async function tje(e,o,r,n){try{return await e.save(o,r,n)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{Bwt,Kv,tje};
