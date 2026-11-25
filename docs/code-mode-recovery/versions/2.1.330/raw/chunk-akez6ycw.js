// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ld,ef}from"/$bunfs/root/chunk-racn22qq.js";var n=new Set([-32002,ld.InvalidParams]);function cJl(o){return o instanceof ef?o.code:void 0}function soi(o){return o instanceof ef&&o.code===ld.MethodNotFound}function uJl(o){return o instanceof ef&&(o.code===ld.MethodNotFound||o.code===ld.InvalidParams)}function fJl(o){return o instanceof ef&&n.has(o.code)}function pJl(o){return o instanceof ef&&o.code===ld.InvalidParams}function mJl(o){return o instanceof ef&&o.code===ld.UrlElicitationRequired}
export{cJl,soi,uJl,fJl,pJl,mJl};
