// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Vg, sn } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { jc } from "/$bunfs/root/chunk-ht6e56zb.js";
import { t, _ } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { ue } from "/$bunfs/root/chunk-ex299d27.js";
import { fi } from "/$bunfs/root/chunk-w03c3634.js";
import { Zi } from "/$bunfs/root/chunk-gsktpex7.js";
import { BIe, eqe } from "/$bunfs/root/chunk-hg1yqkjk.js";
import { BC, hJ, HR, L3e, fnn, CFt } from "/$bunfs/root/chunk-w4fa2yxz.js";
import { oy } from "/$bunfs/root/chunk-09zj247f.js";
import { sSt } from "/$bunfs/root/chunk-q4pth4e7.js";
import { EOt, ZCa } from "/$bunfs/root/chunk-dbp0a6zk.js";
import { Hqs } from "/$bunfs/root/chunk-m90emveq.js";
import { hoe } from "/$bunfs/root/chunk-by92j3mn.js";
import { IK } from "/$bunfs/root/chunk-v79jxheq.js";
import { kye } from "/$bunfs/root/chunk-201k1m75.js";
import { Phe } from "/$bunfs/root/chunk-hvhp9a24.js";
import { Syn, byn } from "/$bunfs/root/chunk-bj6vbkzt.js";
var E = /artifact\w*\s*\(|\/artifacts?\/[0-9a-z]{8}|artifact-[0-9a-f]{8}-/i;
function lFo(o) {
  if (!ue()) return "";
  return `eval #${o} never settled: the process that was running it exited. Its result is lost and the script is no longer running; a command it had started may have run on.`;
}
function y(o) {
  if (!ue()) return "";
  return `eval #${o} never reported back: your earlier run ended or was stopped, or Claude Code exited, before its result reached you. Its result is lost and the script is no longer running. A command the script had started may still have run to completion.`;
}
function c(o, n) {
  if (!ue()) return [];
  let i = Array.isArray(n) && n.length === o.length ? n : [],
    l = [];
  for (let [a, r] of o.entries()) {
    let s = i[a] == null ? void 0 : EOt(r, i[a]);
    if (s !== void 0) {
      l.push(s.evalId);
      continue;
    }
    for (let e of ZCa(r)) l.push(e.evalId);
  }
  return l;
}
function h(o) {
  if (!ue()) return "";
  if (o === null || typeof o !== "object") return "";
  let n = o,
    i = "content" in n ? n.content : void 0;
  return typeof i === "string" && fnn(i) ? i : "";
}
function A(o) {
  if (!ue()) return [];
  let n = h(o),
    i =
      n !== "" && typeof o === "object" && o !== null && "declared" in o
        ? o.declared
        : void 0,
    l = Array.isArray(i) ? CFt(n) : void 0;
  return l === void 0 ? c([n], void 0) : c(l, i);
}
function uUr(o) {
  if (!ue()) return [];
  let n = new Map(),
    i = new Set(),
    l = [],
    a = (r) => {
      let s = l.findLastIndex((e) => e.evalId === r);
      if (s !== -1) l.splice(s, 1);
    };
  for (let r of o) {
    if (r.type === "attachment") {
      if (r.attachment.type === "poll_events")
        c(r.attachment.envelopes, r.attachment.declared).forEach(a);
      continue;
    }
    if (r.type === "assistant" && !r.isVirtual) {
      for (let e of r.message.content) {
        if (e.type !== "tool_use") continue;
        if (Zi(e.name)) n.set(e.id, e.input);
        else if (e.name === fi) i.add(e.id);
      }
      continue;
    }
    if (r.type !== "user" || r.isVirtual) continue;
    let s = r.message.content;
    if (!Array.isArray(s)) continue;
    for (let e of s) {
      if (e.type !== "tool_result") continue;
      if (i.has(e.tool_use_id)) A(r.toolUseResult).forEach(a);
      else if (n.has(e.tool_use_id)) {
        let u = Hqs(r.toolUseResult);
        if (u !== void 0)
          l.push({
            toolUseId: e.tool_use_id,
            evalId: u,
            recordedAt: r.timestamp,
            ...(E.test(_(n.get(e.tool_use_id)) ?? "") && {
              namesAnArtifact: !0,
            }),
          });
      }
    }
  }
  return l;
}
function Gjl(o, { startsTurn: n = !0 } = {}) {
  if (!ue()) return;
  let i = uUr(o).filter(
    (a) => Date.parse(a.recordedAt) < performance.timeOrigin,
  );
  if (i.length === 0) return;
  let l = !n && oy();
  if (!HR() && !l) {
    t(
      `resume: ${i.length} async REPL eval(s) never settled, and poll-event delivery is off, so no lost event is queued`,
      { level: "warn" },
    );
    return;
  }
  (t(
    `resume: ${i.length} async REPL eval(s) never settled (${i.map((a) => `#${a.evalId}`).join(", ")}); answering each with a lost event`,
  ),
    v(i, {
      text: lFo,
      rowText: "Lost: Claude Code exited before this finished",
      startsTurn: n,
    }));
}
function zjl(o, n, i) {
  if (!ue() || !HR()) return;
  let l = i.get(kye),
    a = new Set(
      BIe()
        .filter((s) => L3e(s, n))
        .flatMap((s) =>
          s.pollEvent === void 0
            ? []
            : c(
                [s.pollEvent.envelope],
                s.pollEvent.declared === void 0
                  ? void 0
                  : [{ kind: s.pollEvent.kind, ...s.pollEvent.declared }],
              ),
        ),
    ),
    r = uUr(o).filter(({ evalId: s }) => !l.tracks(n, s) && !a.has(s));
  if (r.length === 0) return;
  (t(
    `subagent resume: ${r.length} async REPL eval(s) never settled; answering each with a lost event`,
  ),
    v(r, {
      text: y,
      rowText: "Lost: the result never reached the agent",
      agentId: n,
    }));
}
function v(o, { text: n, rowText: i, agentId: l, startsTurn: a = !0 }) {
  if (!ue()) return;
  let r = hoe(),
    s = sn()
      .names()
      .some((e) => e === Vg || /artifact/i.test(e));
  for (let { evalId: e, namesAnArtifact: u } of o) {
    let f = byn(s || u ? [jc] : []),
      g = Phe() && f.length === 0,
      p = new Date().toISOString();
    eqe({
      kind: BC,
      ...(g
        ? { typed: { at: p, fields: { eval: e, status: sSt, text: n(e) } } }
        : {
            element: hJ({
              kind: BC,
              at: p,
              ...(f.length > 0
                ? { content: "", children: [...f, { tag: "log", text: n(e) }] }
                : { content: n(e) }),
              attributes: { eval: String(e), status: sSt },
            }),
          }),
      ...(l !== void 0 && { agentId: l }),
      ...(!a && { startsTurn: a }),
      allowReservedKind: !0,
      ...(r
        ? { displayRows: Syn(i, { clientsDrawCalls: !0, shownOnCall: !0 }) }
        : { keepsRow: !0 }),
    }).catch((m) => {
      t(
        `async REPL lost event for eval #${e} not queued: ${IK(m) ? m.message : "non-Error rejection"}`,
        { level: "warn" },
      );
    });
  }
}
export { lFo, uUr, Gjl, zjl };
