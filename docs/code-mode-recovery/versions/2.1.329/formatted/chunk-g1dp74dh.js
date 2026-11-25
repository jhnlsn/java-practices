// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { P7, Sl, Vle, rpn } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { u } from "/$bunfs/root/chunk-y98mhv74.js";
import { A } from "/$bunfs/root/chunk-avbzeyf3.js";
import { p } from "/$bunfs/root/chunk-3kmy2srk.js";
import { a } from "/$bunfs/root/chunk-487kez16.js";
import { f } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { EWt } from "/$bunfs/root/chunk-aq3ms068.js";
import { s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { I } from "/$bunfs/root/chunk-m55722gg.js";
import { ue } from "/$bunfs/root/chunk-ex299d27.js";
import {
  ln,
  fi,
  Aje,
  qwl,
  FWi,
  Ywl,
  bws,
  Xwl,
  Jwl,
  wws,
  Qwl,
  Zwl,
  Sbe,
} from "/$bunfs/root/chunk-w03c3634.js";
import { Yo, Zi } from "/$bunfs/root/chunk-gsktpex7.js";
import { En } from "/$bunfs/root/chunk-bxxahqqj.js";
import {
  v0a,
  xOe,
  jJs,
  C0a,
  w4r,
  CEn,
  xX,
  qee,
} from "/$bunfs/root/chunk-hg1yqkjk.js";
import {
  BC,
  vye,
  Rrt,
  erl,
  HR,
  trl,
  xrt,
  lnn,
  rrl,
  dnn,
  Tye,
  pnn,
  s0e,
} from "/$bunfs/root/chunk-w4fa2yxz.js";
import { sI, oy, Jtn } from "/$bunfs/root/chunk-09zj247f.js";
import { sv, V5a, Vto, Kto, J5a } from "/$bunfs/root/chunk-a4cww0eh.js";
import { VUr } from "/$bunfs/root/chunk-1pbg7kqs.js";
import { n4t } from "/$bunfs/root/chunk-b9y2z2dt.js";
import { qo } from "/$bunfs/root/chunk-wrjcstwp.js";
import { zN } from "/$bunfs/root/chunk-h1btt56e.js";
import { y3e, oie, KMe, QB } from "/$bunfs/root/chunk-496v3ed2.js";
import { od } from "/$bunfs/root/chunk-dr4n033a.js";
import { n, E, C, c, Pe, je, U, v, W } from "/$bunfs/root/chunk-8s3h5g9z.js";
W();
var te = 1000,
  $Fo = p(() => Pe({})),
  oe = p(() =>
    je([
      c({
        type: v("image"),
        source: c({
          type: v("base64"),
          media_type: U(["image/jpeg", "image/png", "image/gif", "image/webp"]),
          data: n(),
        }),
      }),
      c({
        type: v("document"),
        source: c({
          type: v("base64"),
          media_type: v("application/pdf"),
          data: n(),
        }),
      }),
    ]),
  );
var BFo = p(() =>
    c({
      content: n().describe(`Rendered event envelopes, or "${Aje}"`),
      eventCount: E()
        .int()
        .describe("Number of events delivered in this result"),
      remainingWakeCount: E()
        .int()
        .describe(
          "Wake events still queued after this chunk; they follow in the next delivery",
        ),
      media: C(C(oe()))
        .optional()
        .describe(
          "Each delivered event's images and documents, 1:1 with the events. Absent when none has any",
        ),
      toolsUsed: C(n()).optional(),
      ...{},
      provenance: C(
        c({
          authority: U(Rrt),
          senderId: n().optional(),
          senderText: n().optional(),
        }).nullable(),
      ).optional(),
      declared: C(v0a().nullable()).optional(),
      rows: C(n().nullable()).optional(),
    }),
  ),
  d2l = En({
    registryToolId: "a0b1dc01-4837-5be1-b545-3b6e0c621b82",
    name: fi,
    searchHint: "wait for and receive queued harness events",
    backgrounding: "never",
    maxResultSizeChars: 200000,
    persistenceThresholdCeiling: 200000,
    skipAggregateToolResultBudget: !0,
    get inputSchema() {
      return $Fo();
    },
    get outputSchema() {
      return BFo();
    },
    isEnabled() {
      return HR();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return "Wait for pending harness events";
    },
    async prompt() {
      let e = jJs(xOe()),
        t = s.CLAUDE_CODE_QUEUED_NOTIFICATIONS_BY_POLL ? qwl() : "",
        o =
          e === void 0 || t === ""
            ? e
            : `${e}

${t}`;
      if (ue()) {
        let { isReplSpliceWaitEnabled: m } = import.meta.require(
            "/$bunfs/root/chunk-t0dhyrqb.js",
          ),
          D = w4r() ? C0a() : void 0,
          O =
            o === void 0 || D === void 0
              ? (o ?? D)
              : `${o}

${D}`;
        if (m() && O === void 0) return Qwl();
        return wws(m() ? Ywl() : bws, Xwl(), O, D === void 0 ? void 0 : Jwl());
      }
      return o === void 0 ? Zwl : wws(bws, void 0, o);
    },
    isTransparentWrapper() {
      return ue() && oy();
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: pnn(e.content, e.media),
      };
    },
    stripForStorage(e) {
      return e;
    },
    renderToolUseMessage() {
      return "";
    },
    extractSearchText() {
      return "";
    },
    create(e) {
      let {
        agentId: t,
        messageQueue: o,
        toolState: m,
        taskRegistry: D,
        unlayeredPermissions: O,
      } = e;
      return {
        async call(x, d) {
          let { signal: F, parentMessage: M, onProgress: y } = d,
            g =
              ue() &&
              oy() &&
              t !== void 0 &&
              EWt({
                agentId: t,
                agentContext: e.agentContext,
                teammateContext: e.teammateContext,
              })
                ? t
                : void 0;
          if (t !== void 0 && g === void 0)
            throw new A(
              ue() && oy()
                ? `${fi} isn't available here and isn't needed: each ${Yo} call you make here waits for its script to finish and returns the result.`
                : "Poll is available on the main thread only",
              "Poll refused for this agent",
            );
          let b = g ?? sI,
            L = o;
          if (!L.tryBeginPollCall(g)) {
            if ((Z("duplicate_call", 0, 0), ue() && oy()))
              return {
                data: { content: Aje, eventCount: 0, remainingWakeCount: 0 },
                hideRow: !0,
              };
            return {
              data: { content: Aje, eventCount: 0, remainingWakeCount: 0 },
            };
          }
          let k = ue() && oy(),
            K =
              ue() &&
              import.meta
                .require("/$bunfs/root/chunk-t0dhyrqb.js")
                .isReplSpliceWaitEnabled(),
            r;
          try {
            let h = ue()
              ? import.meta
                  .require("/$bunfs/root/chunk-afvacbqj.js")
                  .getReplSessions({ toolState: m })
              : void 0;
            if (ue() && k && Sl() && h !== void 0 && y !== void 0 && !K) {
              let l = ({ startedAt: _, tick: w }) =>
                y({
                  type: "progress",
                  toolUseID: w.toolUseId,
                  data: { ...w, scriptStartedAt: _ },
                });
              for (let _ of h.ticks(b)) l(_);
              r = h.onTick(b, l);
            }
            let H = Date.now(),
              N = await WFo(L, F, h, {
                messages: e.messages,
                ...ae({
                  ingress: rpn(),
                  permissionMode: O().mode,
                  cacheTtlMs: g === void 0 ? P7() : null,
                  ...(ue()
                    ? {
                        codeModeExperiment: k,
                        besideReplCall: [
                          M,
                          ...(d.sameTurnToolUses ?? []).filter(
                            (l) => l.message.id === M?.message.id,
                          ),
                        ].some(
                          (l) =>
                            Array.isArray(l?.message.content) &&
                            l.message.content.some(
                              (_) => _.type === "tool_use" && Zi(_.name),
                            ),
                        ),
                        printInputClosed: Vle(),
                        selfArmed: trl(),
                      }
                    : {}),
                }),
                ...(g !== void 0 && {
                  ownWorkOnly: !0,
                  inputClosed: !1,
                  idleWaitMs: void 0,
                  agentId: g,
                }),
                liveTasks:
                  ue() && k
                    ? () =>
                        Object.values(D.all())
                          .filter((l) => ie(l) && (g === void 0 || re(l, g)))
                          .map((l) => l.description)
                    : () => [],
                ...(ue() && {
                  deliveryTurn: e.deliveryTurn,
                  onNoDelivered: (l) => VUr({ toolState: m }, l),
                }),
              }),
              { endReason: T, ...R } = N;
            if (
              (Z(T, Date.now() - H, T === "delivered" ? R.data.eventCount : 0),
              ue() && K && h !== void 0)
            ) {
              if (R.data.eventCount > 0) h.takeUnwaited(b);
              else if (T === "queued_input_for_turn_end") {
                let l = new Set(h.pending(b).map((_) => _.id));
                if (l.size > 0) (h.takeUnwaited(b, l), h.noteStatusLine(b));
              }
            }
            return ue() && k && R.data.eventCount === 0
              ? { ...R, hideRow: !0 }
              : R;
          } finally {
            if (ue()) r?.();
            L.endPollCall(g);
          }
        },
      };
    },
  });
function ie(e) {
  return (
    !qo(e.status) &&
    e.type !== "in_process_teammate" &&
    !KMe(e) &&
    !QB(e) &&
    !(ue() && oie(e))
  );
}
function re(e, t) {
  return (
    (e.type === "local_agent" || e.type === "local_workflow"
      ? e.ownerAgentId
      : y3e(e)) === t ||
    (e.type === "local_agent" && e.askers?.includes(t) === !0)
  );
}
function J(e) {
  return Math.min(e ?? zN, zN) - Jtn;
}
function ae(e) {
  let { ingress: t, permissionMode: o, cacheTtlMs: m } = e;
  return {
    ownWorkOnly:
      t === "evals" ||
      (ue() &&
        e.codeModeExperiment &&
        (t === "terminal" ||
          (t === "host" && o !== "auto") ||
          e.besideReplCall)),
    inputClosed: ue() && e.codeModeExperiment && e.printInputClosed,
    waitMs: (m ?? zN) - Jtn,
    idleWaitMs: ue() && e.codeModeExperiment && e.selfArmed ? J(m) : void 0,
  };
}
async function WFo(e, t, o, m) {
  let {
      ownWorkOnly: D,
      inputClosed: O,
      liveTasks: x,
      waitMs: d,
      idleWaitMs: F,
      agentId: M,
      yieldWait: y,
    } = m,
    g = M ?? sI;
  if (ue()) o?.takeStatusLineGiven(g);
  let b = Date.now(),
    L = () =>
      (D || (O && e.pollEventAdmissionsPending() === 0)) &&
      (ue() && o !== void 0 ? o.outstanding(g) === 0 : !0) &&
      x().length === 0,
    k = Math.min(d, J(null));
  function K() {
    return (
      ue() && o !== void 0 && o.ledger(sI).length > 0 && Date.now() - b < k
    );
  }
  for (;;) {
    if (t.aborted) return z("aborted");
    let { commands: r, remainingWakeCount: h } = e.drainPollEventChunk(M);
    if (r.length > 0) {
      let _ = r.map(xrt),
        w = lnn(r);
      (f("poll_event_delivery"), Sbe(r), s0e(r));
      let j = CEn(r, m.messages?.() ?? []),
        P = {
          content: Tye(_, h, j),
          eventCount: r.length,
          remainingWakeCount: h,
          ...(j.length > 0 && { toolsUsed: j }),
          ...(r.some((S) => S.pollEvent?.media !== void 0) && {
            media: r.map((S) => S.pollEvent?.media ?? []),
          }),
          provenance: r.map((S) => S.pollEvent?.provenance ?? null),
          ...(w !== void 0 && { declared: w }),
          ...dnn(r),
        };
      if (ue()) {
        let S = n4t(r),
          {
            clearPollEventFollowing: Q,
            pollEventFollowingOf: X,
            reportsNoInTurn: ee,
          } = import.meta.require("/$bunfs/root/chunk-71a92fe5.js"),
          B = m.deliveryTurn?.(),
          { messages: ne, contextLayers: V } = X(r, B);
        if (B?.chainId !== void 0 && ee(r, B.chainId))
          m.onNoDelivered?.(B.chainId);
        Q(r);
        let q = [...S, ...ne];
        return {
          data: P,
          endReason: r.every((Y) => Y.pollEvent?.kind === vye)
            ? "status_work_running"
            : "delivered",
          ...rrl(r),
          ...(q.length > 0 && { newMessages: q }),
          ...(V.length > 0 && { contextLayers: V }),
          ...(import.meta
            .require("/$bunfs/root/chunk-0pd1qtng.js")
            .clientsDrawScriptCalls() &&
            r.every(
              (Y) =>
                (Y.pollEvent?.kind === BC || Y.pollEvent?.kind === vye) &&
                Y.pollEvent?.keepsRow !== !0,
            ) && { hideRow: !0 }),
        };
      }
      return { data: P, endReason: "delivered" };
    }
    if (G(e, K(), M))
      return z(
        G(e, !0, M) ? "queued_input" : "queued_input_for_turn_end",
        y?.whatArrived(),
      );
    if (y?.scheduledFireDue()) return z("scheduled_fire_due", Kto);
    if (y?.ownMessageArrived()) return z("own_message", Vto);
    if (y?.messageForTurnEnd !== void 0 && (await y.messageForTurnEnd()))
      return z("teammate_message", J5a);
    if (L())
      return O && !D
        ? {
            data: { content: FWi(), eventCount: 0, remainingWakeCount: 0 },
            endReason: "nothing_to_wait_for_input_closed",
          }
        : z("nothing_to_wait_for", y && V5a);
    let H = Date.now() - b,
      N = ue() && o !== void 0 ? o.ledger(g) : [],
      T = N.length > 0 ? [] : x(),
      R = y?.limitMs() ?? d;
    if (H >= R) {
      if (y !== void 0 && T.length > 0)
        return {
          data: {
            content: `nothing has reported yet; ${T.length} background ${I(T.length, "task")} still running. Call ${sv} again to keep waiting.`,
            eventCount: 0,
            remainingWakeCount: 0,
          },
          endReason: "status_work_running",
        };
      if (ue() && N.length > 0) {
        (import.meta
          .require("/$bunfs/root/chunk-hgx3s6xp.js")
          .enqueueReplStatus(e, N, M),
          o?.noteStatusLine(g));
        continue;
      }
      if (ue() && T.length > 0)
        return {
          data: {
            content: `No events yet \u2014 ${T.length} background ${I(T.length, "task")} still running: ${T.map((_) => erl(_)).join("; ")}. Poll again to keep waiting.`,
            eventCount: 0,
            remainingWakeCount: 0,
          },
          endReason: "status_work_running",
        };
    }
    let l = N.length === 0 && T.length === 0;
    if (l && F !== void 0 && H >= F) return z("wait_limit_nothing_running");
    await new Promise((_) => {
      let w = l ? F : G(e, !1, M) ? k : R,
        j =
          w !== void 0
            ? setTimeout(
                P,
                Math.min(Math.max(0, w - H), y === void 0 ? 1 / 0 : te),
              )
            : void 0;
      function P() {
        if (j !== void 0) clearTimeout(j);
        (S(), Q(), t.removeEventListener("abort", P), _());
      }
      let S = e.subscribe(P),
        Q = ue() && o !== void 0 ? o.onOutstandingChange(P) : () => {};
      if ((t.addEventListener("abort", P), t.aborted || G(e, K(), M) || L()))
        P();
    });
  }
}
function G(e, t, o) {
  if (o !== void 0)
    return (
      !e.isMidTurnFoldSuspended() &&
      qee(e.getCommandsByMaxPriority("next"), {
        isMainThread: !1,
        currentAgentId: o,
      }).length > 0
    );
  let m = e.isMidTurnFoldSuspended(),
    D = t && !m,
    O = e
      .getCommandsByMaxPriority("next")
      .findIndex((d) => d.drainOnly === !0 && d.waitsOutStop !== !0),
    x = new Set(
      O < 0
        ? []
        : e
            .getCommandsByMaxPriority("next")
            .slice(O)
            .filter((d) => d.drainOnly === !0 || d.mode === "prompt"),
    );
  return (
    e.peek(
      (d) =>
        od(d) &&
        !(D && (d.priority === "later" || x.has(d)) && d.mode !== "poll-event"),
    ) !== void 0 ||
    (m
      ? !ln() && e.peek(xX) !== void 0
      : qee(e.getCommandsByMaxPriority("next"), {
          isMainThread: !0,
          currentAgentId: void 0,
        }).some((d) => !x.has(d) && d.screeningPending !== !0))
  );
}
function z(e, t = Aje) {
  return {
    data: { content: t, eventCount: 0, remainingWakeCount: 0 },
    endReason: e,
  };
}
function Z(e, t, o) {
  a("tengu_poll_call_end", {
    reason: u(e),
    waitedMs: t,
    deliveredEventCount: o,
  });
}
export { $Fo, BFo, d2l, WFo };
