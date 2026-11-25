// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{$d}from"/$bunfs/root/chunk-9js1xpg4.js";import{Urn}from"/$bunfs/root/chunk-y8kqnbqt.js";import{H,re,I,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function cu(e,n,t){let i=$d(),o=re(()=>i?.getDisplayText(e,n),[i,e,n]),r=o===void 0,s=i?"action_not_found":"no_context",u=I(!1);if(H(()=>{if(r&&!u.current)u.current=!0,Urn(e,n,t,s)},[r,e,n,t,s]),r)return t;return o===null?"":o}
export{cu};
