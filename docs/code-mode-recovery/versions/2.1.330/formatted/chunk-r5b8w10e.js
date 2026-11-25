// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { p_, en } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { lu } from "/$bunfs/root/chunk-k449cc64.js";
import { t, _ } from "/$bunfs/root/chunk-w578pjby.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { Vo } from "/$bunfs/root/chunk-3grsnd7a.js";
import { li } from "/$bunfs/root/chunk-h4t4qfaq.js";
import { YHe, j3e } from "/$bunfs/root/chunk-bzyb60p0.js";
import { kE, pZ, Mx, N8e, uln, EWt } from "/$bunfs/root/chunk-qf73a9we.js";
import { Hy, Ng } from "/$bunfs/root/chunk-w50zedgp.js";
import { nEt } from "/$bunfs/root/chunk-vce2t55r.js";
import { IDt, cNa } from "/$bunfs/root/chunk-bxw3frzq.js";
import { iQs } from "/$bunfs/root/chunk-771npqpr.js";
import { bue } from "/$bunfs/root/chunk-ncwex88j.js";
import { uj } from "/$bunfs/root/chunk-5412tm8t.js";
import { Lbe } from "/$bunfs/root/chunk-yaw6xb6n.js";
import { Ute } from "/$bunfs/root/chunk-3e58nsa7.js";
import { cvn } from "/$bunfs/root/chunk-k34ja5gf.js";
import { uvn } from "/$bunfs/root/chunk-n1bj1qv8.js";
var E = /artifact\w*\s*\(|\/artifacts?\/[0-9a-z]{8}|artifact-[0-9a-f]{8}-/i;
function IGo(o) {
  if (!ue()) return "";
  return `eval #${o} never settled: the process that was running it exited. Its result is lost and the script is no longer running; a command it had started may have run on.`;
}
function y(o) {
  if (!ue()) return "";
  return `eval #${o} never reported back: your earlier run ended or was stopped, or Claude Code exited, before its result reached you. Its result is lost and the script is no longer running. A command the script had started may still have run to completion.`;
}
function c(o, r) {
  if (!ue()) return [];
  let l = Array.isArray(r) && r.length === o.length ? r : [],
    s = [];
  for (let [a, e] of o.entries()) {
    let i = l[a] == null ? void 0 : IDt(e, l[a]);
    if (i !== void 0) {
      s.push(i.evalId);
      continue;
    }
    for (let n of cNa(e)) s.push(n.evalId);
  }
  return s;
}
function h(o) {
  if (!ue()) return "";
  if (o === null || typeof o !== "object") return "";
  let r = o,
    l = "content" in r ? r.content : void 0;
  return typeof l === "string" && uln(l) ? l : "";
}
function A(o) {
  if (!ue()) return [];
  let r = h(o),
    l =
      r !== "" && typeof o === "object" && o !== null && "declared" in o
        ? o.declared
        : void 0,
    s = Array.isArray(l) ? EWt(r) : void 0;
  return s === void 0 ? c([r], void 0) : c(s, l);
}
function Jzr(o) {
  if (!ue()) return [];
  let r = new Map(),
    l = new Set(),
    s = [],
    a = (e) => {
      let i = s.findLastIndex((n) => n.evalId === e);
      if (i !== -1) s.splice(i, 1);
    };
  for (let e of o) {
    if (e.type === "attachment") {
      if (e.attachment.type === "poll_events")
        c(e.attachment.envelopes, e.attachment.declared).forEach(a);
      continue;
    }
    if (e.type === "assistant" && !e.isVirtual) {
      for (let n of e.message.content) {
        if (n.type !== "tool_use") continue;
        if (li(n.name)) r.set(n.id, n.input);
        else if (n.name === Vo) l.add(n.id);
      }
      continue;
    }
    if (e.type !== "user" || e.isVirtual) continue;
    let i = e.message.content;
    if (!Array.isArray(i)) continue;
    for (let n of i) {
      if (n.type !== "tool_result") continue;
      if (l.has(n.tool_use_id)) A(e.toolUseResult).forEach(a);
      else if (r.has(n.tool_use_id)) {
        let u = iQs(e.toolUseResult);
        if (u !== void 0)
          s.push({
            toolUseId: n.tool_use_id,
            evalId: u,
            recordedAt: e.timestamp,
            ...(E.test(_(r.get(n.tool_use_id)) ?? "") && {
              namesAnArtifact: !0,
            }),
          });
      }
    }
  }
  return s;
}
function dYl(o, { startsTurn: r = !0 } = {}) {
  if (!ue()) return;
  let l = r && !Ng(),
    s = Jzr(o).filter((e) => Date.parse(e.recordedAt) < performance.timeOrigin);
  if (s.length === 0) return;
  let a = !l && Hy();
  if (!Mx() && !a) {
    t(
      `resume: ${s.length} async REPL eval(s) never settled, and poll-event delivery is off, so no lost event is queued`,
      { level: "warn" },
    );
    return;
  }
  (t(
    `resume: ${s.length} async REPL eval(s) never settled (${s.map((e) => `#${e.evalId}`).join(", ")}); answering each with a lost event`,
  ),
    v(s, {
      text: IGo,
      rowText: "Lost: Claude Code exited before this finished",
      startsTurn: l,
    }));
}
function cYl(o, r, l) {
  if (!ue() || !Mx()) return;
  let s = l.get(Lbe),
    a = new Set(
      YHe()
        .filter((i) => N8e(i, r))
        .flatMap((i) =>
          i.pollEvent === void 0
            ? []
            : c(
                [i.pollEvent.envelope],
                i.pollEvent.declared === void 0
                  ? void 0
                  : [{ kind: i.pollEvent.kind, ...i.pollEvent.declared }],
              ),
        ),
    ),
    e = Jzr(o).filter(({ evalId: i }) => !s.tracks(r, i) && !a.has(i));
  if (e.length === 0) return;
  (t(
    `subagent resume: ${e.length} async REPL eval(s) never settled; answering each with a lost event`,
  ),
    v(e, {
      text: y,
      rowText: "Lost: the result never reached the agent",
      agentId: r,
    }));
}
function v(o, { text: r, rowText: l, agentId: s, startsTurn: a = !0 }) {
  if (!ue()) return;
  let e = bue(),
    i = en()
      .names()
      .some((n) => n === p_ || /artifact/i.test(n));
  for (let { evalId: n, namesAnArtifact: u } of o) {
    let f = cvn(i || u ? [lu] : []),
      g = Ute() && f.length === 0,
      p = new Date().toISOString();
    j3e({
      kind: kE,
      ...(g
        ? { typed: { at: p, fields: { eval: n, status: nEt, text: r(n) } } }
        : {
            element: pZ({
              kind: kE,
              at: p,
              ...(f.length > 0
                ? { content: "", children: [...f, { tag: "log", text: r(n) }] }
                : { content: r(n) }),
              attributes: { eval: String(n), status: nEt },
            }),
          }),
      ...(s !== void 0 && { agentId: s }),
      ...(!a && { startsTurn: a }),
      allowReservedKind: !0,
      ...(e
        ? { displayRows: uvn(l, { clientsDrawCalls: !0, shownOnCall: !0 }) }
        : { keepsRow: !0 }),
    }).catch((m) => {
      t(
        `async REPL lost event for eval #${n} not queued: ${uj(m) ? m.message : "non-Error rejection"}`,
        { level: "warn" },
      );
    });
  }
}
export { IGo, Jzr, dYl, cYl };
