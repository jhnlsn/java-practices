// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{homedir as i}from"os";import{isAbsolute as c,join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??s.HOME??i()}}function fvl(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function m(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function Bvt(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function GYe(e){return o(Bvt(e),"claude","versions")}function UTr(e){let n=m(e),{home:t}=r(e);return o(c(n)?n:o(t,".cache"),"claude","staging")}function Tme(e){let{home:n}=r(e);return o(n,".local","bin")}
export{fvl,Bvt,GYe,UTr,Tme};
