// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{SM}from"/$bunfs/root/chunk-865at33z.js";async function HKe(e,t,i,r=!0){let a=t??await SM(e,void 0,void 0,i);if(a.valid)return null;if(r){let{sendOrgValidationRefusal:n}=await import("/$bunfs/root/chunk-z0mhdzdx.js");await n(a)}return a}function C8l(e){return e.reason==="org_verify_failed"||e.policyUnreadable===!0}
export{HKe,C8l};
