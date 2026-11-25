// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{createHash as a,randomBytes as n}from"crypto";function r(e){return e.toString("base64").replaceAll("+","-").replaceAll("/","_").replaceAll("=","")}function jko(){return r(n(32))}function Gko(e){let t=a("sha256");return t.update(e),r(t.digest())}function zko(){return r(n(32))}
export{jko,Gko,zko};
