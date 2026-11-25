// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{yt}from"/$bunfs/root/chunk-agyyqm1q.js";var s=null;function UPa(e){let n=s;return s=e,n}function $Pa(){return s}var r=null;function BPa(e){let n=r;return r=e,n}async function lVe(e){return await r?.(e)??!1}class jVr extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function WPa(e){let n=t;return t=e,n}function _zo(){return t}function jPa(e){let n=yt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function wYs(){let e=yt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function GPa(){let e=wYs();if(e)process.stderr.write(`${e}
`)}
export{UPa,$Pa,BPa,lVe,jVr,WPa,_zo,jPa,wYs,GPa};
