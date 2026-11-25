// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { fke, PE, b } from "/$bunfs/root/chunk-865at33z.js";
import { me } from "/$bunfs/root/chunk-5appeerh.js";
import { a } from "/$bunfs/root/chunk-y53wbr8a.js";
import { et } from "/$bunfs/root/chunk-0jve1fep.js";
import { p } from "/$bunfs/root/chunk-2cbgkbm2.js";
import { Pl } from "/$bunfs/root/chunk-qdcbcsg7.js";
import { bd, T7i, HVn, DVn } from "/$bunfs/root/chunk-epy4sc29.js";
import { Bu, lr } from "/$bunfs/root/chunk-px0hhsq7.js";
import { cze } from "/$bunfs/root/chunk-xfj2cwfv.js";
import { cVt, q1 } from "/$bunfs/root/chunk-0ha8wex8.js";
import { gt } from "/$bunfs/root/chunk-4vsz8a99.js";
import { _t, Df } from "/$bunfs/root/chunk-060xwhvh.js";
import { xc } from "/$bunfs/root/chunk-jar84hn9.js";
import { lUe, Igt } from "/$bunfs/root/chunk-xggvpcqr.js";
import { _g } from "/$bunfs/root/chunk-bzyb60p0.js";
import { UFn } from "/$bunfs/root/chunk-0vvtfqck.js";
import { n, Zc, P, ie, C, c, he, B } from "/$bunfs/root/chunk-adx6804h.js";
import { xs } from "/$bunfs/root/chunk-bp9b0hd8.js";
import { U } from "/$bunfs/root/chunk-4smdap7r.js";
B();
var z = "tengu_rc_thread_reply_gate";
function j2o() {
  return b(z, !0);
}
var H = "tengu_candid_wren",
  $8l = 5000,
  U8l = 1000,
  N = lr(bd, "no_reply_needed"),
  Y = "rc_owner",
  A = 4,
  G = 64,
  F = p(() => {
    let t = n().min(1).max(256),
      e = n().trim().min(1).max(4096),
      r = Zc().min(0).max(A);
    return c({
      terminal_tools: C(t).min(1).max(G),
      ask_text: e,
      max_asks_after_person: r,
      max_asks_after_server_event: r,
      max_asks_after_own_task: r.optional(),
      skip_while_worker_out: P().optional(),
      max_asks_after_error: r.optional(),
      ask_texts_after_error: he(t, e)
        .refine((o) => Object.keys(o).length <= G)
        .optional(),
      skip_retry_while_server_down: P().optional(),
      status_nudge: ie().optional(),
      prompt_reminder: ie().optional(),
    });
  }),
  K = 60,
  J = p(() =>
    c({
      seconds: Zc().min(1).max(86400),
      visible_tools: C(n().min(1).max(128)).min(1).max(32),
      text: n().trim().min(1).max(2048),
    }),
  ),
  V = p(() => n().trim().min(1).max(2048));
function CKs(t) {
  let e = F().safeParse(et(t, !1));
  if (!e.success)
    return {
      invalidField: (e.error.issues[0]?.path ?? [])
        .filter((l, s) => s === 0 || typeof l === "number")
        .join("."),
    };
  let r = J().safeParse(e.data.status_nudge),
    o = V().safeParse(e.data.prompt_reminder);
  return {
    policy: {
      terminalTools: e.data.terminal_tools,
      askText: e.data.ask_text,
      maxAsksAfterPerson: e.data.max_asks_after_person,
      maxAsksAfterServerEvent: e.data.max_asks_after_server_event,
      ...(e.data.max_asks_after_own_task !== void 0 && {
        maxAsksAfterOwnTask: e.data.max_asks_after_own_task,
      }),
      ...(e.data.skip_while_worker_out !== void 0 && {
        skipWhileWorkerOut: e.data.skip_while_worker_out,
      }),
      ...(e.data.max_asks_after_error !== void 0 && {
        maxAsksAfterError: e.data.max_asks_after_error,
      }),
      ...(e.data.ask_texts_after_error !== void 0 && {
        askTextsAfterError: new Map(
          Object.entries(e.data.ask_texts_after_error),
        ),
      }),
      ...(e.data.skip_retry_while_server_down !== void 0 && {
        skipRetryWhileServerDown: e.data.skip_retry_while_server_down,
      }),
      ...(r.success && {
        statusNudge: {
          seconds: Math.max(K, r.data.seconds),
          visibleTools: r.data.visible_tools,
          text: r.data.text,
        },
      }),
      ...(o.success && { promptReminder: o.data }),
    },
    unreadBlocks: [
      ...(e.data.status_nudge !== void 0 && !r.success ? ["status_nudge"] : []),
      ...(e.data.prompt_reminder !== void 0 && !o.success
        ? ["prompt_reminder"]
        : []),
    ],
  };
}
function AKs(t, e) {
  let r =
    "longerThan" in e
      ? `its text is over the limit of ${e.longerThan} characters`
      : e.invalidField === ""
        ? "it is not a JSON object"
        : `its ${e.invalidField} is missing or invalid`;
  return `ignoring ${t}: ${r}, so Claude will not be re-prompted when a turn ends without a reply tool call`;
}
var X = [_t, Df, xc],
  q = new Set([
    "max_tokens",
    "model_context_window_exceeded",
    "pause_turn",
    "refusal",
  ]);
function G2o(t) {
  let e = t.mcp.clients.find((r) => r.name === bd);
  return e !== void 0 && e.type === "connected" && Pl(e.config);
}
async function B8l(t, e, r) {
  if (!j2o()) return;
  let o = performance.now(),
    l = await me(
      t.then(() => !0),
      r,
    );
  a("tengu_bridge_projects_mount_wait", {
    waited_ms: Math.round(performance.now() - o),
    settled: l === !0,
    connected: G2o(e()),
  });
}
function RKs(t) {
  let e = PE(t).decider,
    r = e === null ? void 0 : t[e.index];
  if (e === null || r === void 0) return !1;
  return (
    (g(r)?.startsWith(cVt) === !0 || j(r)) &&
    !k(t.slice(e.index + 1), DVn).answered
  );
}
function W8l(t, e, r, o) {
  let l = PE(t).decider,
    s = 0,
    i = l;
  while (i !== null) {
    let u = t[i.index];
    if (g(u)?.startsWith(cVt) === !0) s++;
    else if (r.kind !== "policy" || u === void 0 || !q1(u)) break;
    i = PE(t.slice(0, i.index)).decider;
  }
  let _ = i === null ? void 0 : t[i.index],
    d = Q(_, i),
    T = d === "person",
    E = Z(r, _, d);
  if (s === 0 && E === 0)
    return (
      o?.({ verdict: "skip", why: "not_held", opener: d }),
      { kind: "skip" }
    );
  let w = [...t.slice(l === null ? 0 : l.index + 1), ...e];
  if (!w.some(L))
    return (
      o?.({ verdict: "skip", why: "no_completion", opener: d }),
      { kind: "skip" }
    );
  let R = [...t.slice(i === null ? 0 : i.index + 1), ...e],
    f = r.kind === "policy" ? R : w,
    O =
      r.kind === "remote_control" &&
      (R.some(
        (u) =>
          u.type === "assistant" &&
          u.message.content.some(
            (v) => v.type === "tool_use" && r.workOutFrom.has(v.id),
          ),
      ) ||
        b(H, !1) === !0),
    {
      answered: W,
      noReplyOnly: I,
      erroredTerminalTool: S,
      firstErroredAt: M,
    } = k(f, r.kind === "policy" ? r.policy.terminalTools : O ? DVn : T7i);
  if (W)
    return (
      o?.({ verdict: "answered", opener: d }),
      { kind: "answered", noReplyOnly: I, personOpened: T }
    );
  if (r.kind === "policy" && r.replMode === !0)
    return (
      o?.({ verdict: "skip", why: "repl_mode", opener: d }),
      { kind: "skip" }
    );
  if (
    r.kind === "policy" &&
    (_g(e)?.isApiErrorMessage === !0 ||
      q.has(w.findLast(L)?.message.stop_reason ?? null))
  )
    return (
      o?.({ verdict: "skip", why: "unclean_stop", opener: d }),
      { kind: "skip" }
    );
  if (
    r.kind === "policy" &&
    r.policy.skipWhileWorkerOut === !0 &&
    r.coordinatorMode === !0 &&
    r.workerStillRunning === !0 &&
    (d === "own_task" || (i !== null && k(f, X).answered))
  )
    return (
      o?.({ verdict: "skip", why: "worker_out", opener: d }),
      { kind: "skip" }
    );
  let m = S !== void 0 ? "reply_errored" : "silent_turn",
    y =
      r.kind === "policy" &&
      r.policy.maxAsksAfterError !== void 0 &&
      M !== void 0
        ? {
            used: U(f.slice(M + 1), (u) => g(u)?.startsWith(cVt) === !0),
            cap: r.policy.maxAsksAfterError,
            cap_of: "after_error",
          }
        : { used: s, cap: E, cap_of: "opener" },
    h =
      y.used >= y.cap
        ? y
        : s >= A
          ? { used: s, cap: A, cap_of: "turn" }
          : void 0;
  if (h !== void 0 && s === 0)
    return (
      o?.({ verdict: "skip", why: "no_ask_after_error", opener: d }),
      { kind: "skip" }
    );
  if (h !== void 0)
    return (
      o?.({ verdict: "still_silent", reason: m, opener: d, ...h }),
      { kind: "still_silent", reason: m, personOpened: T }
    );
  o?.({ verdict: "bounce", reason: m, opener: d, ...y });
  let x =
    r.kind === "remote_control" && m === "silent_turn" && k(f, HVn).answered;
  return {
    kind: "bounce",
    reason: m,
    text: `${cVt} ${ee(r, S, O, x)}`,
    personOpened: T,
    ...(x && { afterChecklist: x }),
  };
}
function Z(t, e, r) {
  switch (t.kind) {
    case "remote_control":
      return e !== void 0 && j(e) ? 1 : 0;
    case "policy":
      switch (r) {
        case "person":
          return t.policy.maxAsksAfterPerson;
        case "own_task":
          return (
            t.policy.maxAsksAfterOwnTask ?? t.policy.maxAsksAfterServerEvent
          );
        case "other":
          return t.policy.maxAsksAfterServerEvent;
      }
  }
}
function Q(t, e) {
  if (t !== void 0 && (e?.userDriven === !0 || D(t))) return "person";
  return cze(e?.origin, t?.type === "user" ? t[fke] : void 0)
    ? "own_task"
    : "other";
}
function j8l(t, e, r) {
  let o = r.filter(
      (s) =>
        s.type === "failed" || s.type === "needs-auth" || s.type === "disabled",
    ),
    l = e.filter((s) => t.terminalTools.some((i) => gt(s, i)));
  return (
    l.length > 0 &&
    l.every((s) => s.isMcp === !0 && o.some((i) => Bu(s, i.name)))
  );
}
function ee(t, e, r, o) {
  switch (t.kind) {
    case "remote_control":
      return e !== void 0
        ? `Your \`${e}\` call this turn returned an error, so it did not reach the project thread. Call \`${t.toolNames.reply}\` again with what the thread should see, or \`${N}\` if no reply is warranted.`
        : `Your last turn ended without a reply to the project thread: plain text is not delivered there${o ? ", and a checklist is not a reply" : ""}. Call \`${t.toolNames.reply}\` now with what the thread should see, ${r ? `\`${t.toolNames.status}\` if you dispatched work that reports back later, ` : ""}or \`${N}\` if no reply is warranted.`;
    case "policy":
      return (
        (e !== void 0 ? t.policy.askTextsAfterError?.get(e) : void 0) ??
        t.policy.askText
      );
  }
}
function L(t) {
  return t.type === "assistant" && t.message.model !== xs;
}
function g(t) {
  return t?.type === "user" &&
    t.isMeta === !0 &&
    typeof t.message.content === "string"
    ? t.message.content
    : void 0;
}
function j(t) {
  if (D(t)) return !0;
  if (t.type !== "user") return !1;
  let e = t.message.content,
    r = typeof e === "string" ? e : e[0]?.type === "text" ? e[0].text : void 0;
  if (r === void 0) return !1;
  let o = lUe(r);
  return o !== null && Igt(o) && o.data.sender_kind === Y;
}
function D(t) {
  return t.type === "attachment"
    ? t.attachment.type === "queued_command" &&
        t.attachment.projectsUserTurn === !0
    : t.type === "user" && t.projectsUserTurn === !0;
}
function k(t, e) {
  let r = new Set();
  for (let i of t) {
    if (i.type !== "user" || !Array.isArray(i.message.content)) continue;
    for (let _ of i.message.content)
      if (_.type === "tool_result" && _.is_error === !0) r.add(_.tool_use_id);
  }
  let o = !1,
    l,
    s;
  for (let [i, _] of t.entries()) {
    if (_.type !== "assistant") continue;
    for (let d of _.message.content) {
      if (d.type !== "tool_use" || !e.includes(d.name)) continue;
      if (r.has(d.id)) {
        ((l = d.name), (s ??= i));
        continue;
      }
      if (!d.name.endsWith(UFn))
        return {
          answered: !0,
          noReplyOnly: !1,
          erroredTerminalTool: void 0,
          firstErroredAt: void 0,
        };
      o = !0;
    }
  }
  return {
    answered: o,
    noReplyOnly: o,
    erroredTerminalTool: o ? void 0 : l,
    firstErroredAt: o ? void 0 : s,
  };
}
export { j2o, $8l, U8l, CKs, AKs, G2o, B8l, RKs, W8l, j8l };
