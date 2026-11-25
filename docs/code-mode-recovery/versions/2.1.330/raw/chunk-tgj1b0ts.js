// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{mt}from"/$bunfs/root/chunk-qdcbcsg7.js";var s=null;function kUa(e){let n=s;return s=e,n}function EUa(){return s}var r=null;function vUa(e){let n=r;return r=e,n}async function o4e(e){return await r?.(e)??!1}class t7r extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function TUa(e){let n=t;return t=e,n}function s8o(){return t}function CUa(e){let n=mt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function xoi(){let e=mt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function AUa(){let e=xoi();if(e)process.stderr.write(`${e}
`)}
export{kUa,EUa,vUa,o4e,t7r,TUa,s8o,CUa,xoi,AUa};
