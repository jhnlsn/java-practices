// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Gl,Fu}from"/$bunfs/root/chunk-gpm60stp.js";var n=new Set([-32002,Gl.InvalidParams]);function wzl(o){return o instanceof Fu?o.code:void 0}function Q8s(o){return o instanceof Fu&&o.code===Gl.MethodNotFound}function kzl(o){return o instanceof Fu&&(o.code===Gl.MethodNotFound||o.code===Gl.InvalidParams)}function Ezl(o){return o instanceof Fu&&n.has(o.code)}function vzl(o){return o instanceof Fu&&o.code===Gl.InvalidParams}function Tzl(o){return o instanceof Fu&&o.code===Gl.UrlElicitationRequired}
export{wzl,Q8s,kzl,Ezl,vzl,Tzl};
