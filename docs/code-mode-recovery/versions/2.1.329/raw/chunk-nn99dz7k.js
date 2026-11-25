// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{createHash as a,randomBytes as n}from"crypto";function r(e){return e.toString("base64").replaceAll("+","-").replaceAll("/","_").replaceAll("=","")}function Rmo(){return r(n(32))}function xmo(e){let t=a("sha256");return t.update(e),r(t.digest())}function Pmo(){return r(n(32))}
export{Rmo,xmo,Pmo};
