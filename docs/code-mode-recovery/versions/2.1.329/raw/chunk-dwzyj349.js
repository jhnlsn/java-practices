// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{createHash as t}from"crypto";var cqr="X-Ccs-Host-Assertion";function UIa(s){return`/v1/code/sessions/${s}/worker/events`}function $Ia(s){return t("sha256").update(s).digest("base64url")}
export{cqr,UIa,$Ia};
