// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{f_}from"/$bunfs/root/chunk-wzdjp7c0.js";import{types as d}from"util";import{isContext as c}from"vm";var{isProxy:u}=d,s=c,r=typeof Bun>"u"?void 0:Bun.ant?.isVmContextGlobal,f=f_(),{add:i,has:a}=WeakSet.prototype,{apply:n}=Reflect,o=new WeakSet;function JCl(t,e){if(e!==void 0&&f&&!s(e)&&r?.(e)!==!0)throw Error("Refusing to make a node:vm context: this Bun cannot recognize a context's global, so sandbox checks could be bypassed. Run Claude Code's native build, whose runtime can.");if(n(i,o,[t]),e!==void 0)n(i,o,[e])}function x(t){return n(a,o,[t])}function dd(t){return u(t)||x(t)||typeof t==="object"&&t!==null&&(s(t)||r?.(t)===!0)}
export{JCl,dd};
