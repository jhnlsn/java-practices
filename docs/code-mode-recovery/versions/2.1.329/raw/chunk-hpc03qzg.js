// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_I}from"/$bunfs/root/chunk-aq3ms068.js";async function Uze(e,t,i,r=!0){let a=t??await _I(e,void 0,void 0,i);if(a.valid)return null;if(r){let{sendOrgValidationRefusal:n}=await import("/$bunfs/root/chunk-2rh803mc.js");await n(a)}return a}function ijl(e){return e.reason==="org_verify_failed"||e.policyUnreadable===!0}
export{Uze,ijl};
