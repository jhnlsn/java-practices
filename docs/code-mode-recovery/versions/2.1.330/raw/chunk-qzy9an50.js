// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{createHash as t}from"crypto";var dXr="X-Ccs-Host-Assertion";function uWa(s){return`/v1/code/sessions/${s}/worker/events`}function fWa(s){return t("sha256").update(s).digest("base64url")}
export{dXr,uWa,fWa};
