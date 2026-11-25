// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { A } from "/$bunfs/root/chunk-jv7av99m.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { pV, Nbe, Bbr } from "/$bunfs/root/chunk-w50zedgp.js";
function _7r(o, e) {
  if (
    ue() &&
    pV({
      agentId: e.agentId,
      stickyBetas: e.stickyBetas,
      namesShownToApi: e.namesShownToApi,
      toolName: o,
    })
  )
    throw new A(pV() ? Nbe() : Bbr(), "Computer use call refused in REPL mode");
}
export { _7r };
