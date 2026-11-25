// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{homedir as i}from"os";import{isAbsolute as c,join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??s.HOME??i()}}function kfl(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function m(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function Xbt(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function J5e(e){return o(Xbt(e),"claude","versions")}function kyr(e){let n=m(e),{home:t}=r(e);return o(c(n)?n:o(t,".cache"),"claude","staging")}function Rfe(e){let{home:n}=r(e);return o(n,".local","bin")}
export{kfl,Xbt,J5e,kyr,Rfe};
