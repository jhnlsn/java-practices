// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{n,E,P,C,c,B}from"/$bunfs/root/chunk-adx6804h.js";B();var o=p(()=>c({path:n(),text:n(),chars:E().int().min(0),clipped:P().optional()}));function cKr(){return{init_references:c({docs:C(o()),unavailable:C(c({path:n(),why:n()})).optional()}).optional()}}function FZn(){return{design_system:c({url:n().optional(),default:n().optional(),title:n().optional(),store:P().optional(),docs:C(o()).optional(),token_files:C(n()).optional(),unavailable:n().optional()}).optional()}}var t=p(()=>c({dir:n(),files:C(c({path:n(),bytes:E()})),skipped:C(c({path:n(),reason:n()}))})),uKr=p(()=>c({type:t().optional(),system_url:n().optional(),system:t().optional(),skill_in_result:P(),capabilities_skill:P(),repl_tool:P().optional()}));
export{cKr,FZn,uKr};
