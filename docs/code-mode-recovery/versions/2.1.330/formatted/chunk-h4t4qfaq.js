// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
var vo = "REPL",
  xZ = "Eval",
  Mcn = "Code";
function li(o) {
  return o === vo || o === xZ;
}
function Lb(o) {
  if (o === vo) return !0;
  return ue() && o === xZ;
}
function Cwe(o) {
  return ue() && li(o) ? Mcn : o;
}
export { vo, xZ, Mcn, li, Lb, Cwe };
