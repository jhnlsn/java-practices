// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Me } from "/$bunfs/root/chunk-pwxp2pn6.js";
import { lL } from "/$bunfs/root/chunk-w4fa2yxz.js";
import { Ert } from "/$bunfs/root/chunk-feszzf9k.js";
function fWl(t, o, s) {
  let e = mIo(s);
  if (e.size === 0) return;
  (t.dropRewound(Ert, e),
    lL(
      o.removeByFilter(
        (n) => {
          let r = n.pollEvent?.replToolUseId;
          return r !== void 0 && e.has(r);
        },
        { reason: "rewound" },
      ),
      "a rewind removed the REPL call this event comes from",
    ));
}
function mIo(t) {
  let o = new Set();
  for (let s of t) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let e of s.message.content)
      if (Me(e) && e.type === "tool_use" && typeof e.id === "string")
        o.add(e.id);
  }
  return o;
}
export { fWl, mIo };
