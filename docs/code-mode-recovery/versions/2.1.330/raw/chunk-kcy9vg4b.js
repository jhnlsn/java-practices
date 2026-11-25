// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{bn,yRt,XX}from"/$bunfs/root/chunk-3jjr3wje.js";import{d0l}from"/$bunfs/root/chunk-702cfzzh.js";var LS={async get(e,t){return bn.get(e,s(e,t))},async post(e,t,n){return bn.post(e,t,s(e,n))},async put(e,t,n){return bn.put(e,t,s(e,n))},async patch(e,t,n){return bn.patch(e,t,s(e,n))},async delete(e,t){return bn.delete(e,s(e,t))}};function s(e,t){return yRt()&&d0l()?{...t,...XX(e,t?.headers)}:t}
export{LS};
