// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { qs, Rdt, V } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { Fe, yr, d } from "/$bunfs/root/chunk-avbzeyf3.js";
import { Jt } from "/$bunfs/root/chunk-q3pjyhpy.js";
import { a } from "/$bunfs/root/chunk-487kez16.js";
import { f, m, l } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { t, _, te } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { kn } from "/$bunfs/root/chunk-k936fbc4.js";
import { p } from "/$bunfs/root/chunk-3kmy2srk.js";
import { ln, Kln, lji, jit } from "/$bunfs/root/chunk-w03c3634.js";
import { Q_, w2e } from "/$bunfs/root/chunk-phb99ctz.js";
import { Hzt } from "/$bunfs/root/chunk-ht6e56zb.js";
import { Gm } from "/$bunfs/root/chunk-xvdwknca.js";
import { nP, Gk, hpe } from "/$bunfs/root/chunk-aq3ms068.js";
import { Lt } from "/$bunfs/root/chunk-tyy049k4.js";
import { Ho } from "/$bunfs/root/chunk-pm8n3wkz.js";
import { ue } from "/$bunfs/root/chunk-ex299d27.js";
import { sT } from "/$bunfs/root/chunk-t15xyn25.js";
import { vH, nne } from "/$bunfs/root/chunk-eymnzppz.js";
import { ost, YDi } from "/$bunfs/root/chunk-43pg99gd.js";
import { Zh, OSe, Xsn, z$t, KJ, rq } from "/$bunfs/root/chunk-adrqtcd5.js";
import { Gi } from "/$bunfs/root/chunk-wb0pe3gv.js";
import { n, E, C, c, U, v, W } from "/$bunfs/root/chunk-8s3h5g9z.js";
var wms = 32;
function uHe(e) {
  if (!Array.isArray(e)) return [];
  return e
    .filter((r) => typeof r === "string" && r.length > 0 && r.length <= 64)
    .slice(0, 32);
}
W();
import { randomUUID as L } from "crypto";
var eSr = 8000;
async function ye({ verdict: e, respond: r, inform: o }) {
  let s = e.then((y) => y ?? { ok: !0 }),
    i;
  try {
    i = await s;
  } catch (y) {
    return (
      t(`set_model verdict rejected: ${d(y)}`, { level: "error" }),
      r({
        subtype: "error",
        error: "set_model failed",
        error_code: "internal_error",
      })
    );
  }
  let b = typeof i.model === "string" ? kn(i.model) : void 0;
  if (i.ok) {
    if (Array.isArray(i.notices))
      o(i.notices.filter((y) => typeof y === "string").map(kn));
    return r(
      b === void 0
        ? { subtype: "success" }
        : { subtype: "success", response: { model: b } },
    );
  }
  let R = i.code,
    T = lji.find((y) => y === R);
  return r({
    subtype: "error",
    error: Pe(i.error).map(kn).join(`
`),
    ...(T !== void 0 && { error_code: T }),
    ...(b !== void 0 && { model: b }),
  });
}
function Pe(e) {
  return typeof e === "string"
    ? e.split(`
`)
    : [""];
}
var Y = "live_only",
  M$t = 57344,
  Me = "The reply is too large to be sent without storing it";
function Hsn(e, r) {
  return { ...KJ(e, r), [Y]: !0 };
}
function tSr(e) {
  return e.type === "control_response" && e[Y] === !0;
}
function gpl(e) {
  if (!(Y in e)) return e;
  let { [Y]: r, ...o } = e;
  return o;
}
function _pl(e, r) {
  if (!tSr(e) || Buffer.byteLength(_(e)) <= r) return e;
  let o = e.response;
  return {
    type: "control_response",
    [Y]: !0,
    ...(typeof e.uuid === "string" && { uuid: e.uuid }),
    response: { subtype: "error", request_id: o?.request_id, error: Me },
  };
}
W();
function yms(e) {
  if (e == null || e === "") return { valid: !0, toolUseId: void 0 };
  if (typeof e === "string") return { valid: !0, toolUseId: e };
  return { valid: !1 };
}
var Dsn = "Background tasks are disabled in this session.",
  Sms = "background_tasks: tool_use_id must be a string";
function bms(e) {
  return {
    mcpInstructions: void 0,
    agents: e.agents.map(({ path: r, pluginId: o, ...s }) => s),
    skills: e.skills && {
      ...e.skills,
      skillFrontmatter: e.skills.skillFrontmatter.map(
        ({ path: r, pluginId: o, ...s }) => s,
      ),
    },
  };
}
W();
function KNn(e) {
  return Le().safeParse(e).success;
}
var Le = p(() =>
    c({
      max_thinking_tokens: E()
        .refine((e) => Number.isInteger(e))
        .nullable()
        .optional(),
      thinking_display: U(jit).nullable().optional(),
    }),
  ),
  kms = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${jit.map((e) => `"${e}"`).join(", ")}, or null`;
var BDi = "display_only";
function Ems(e) {
  return (
    (e.type === "user" || e.type === "assistant" || e.type === "system") &&
    e.historical === !0 &&
    e.display_only === !0
  );
}
function vms(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    typeof e.type === "string"
  );
}
function Ue(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_response" &&
    "response" in e &&
    e.response != null
  );
}
function $e(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_request" &&
    "request_id" in e &&
    "request" in e &&
    e.request != null
  );
}
function ypl(e) {
  Ho().bridgeStateFramesGate = e;
}
function fHe(e) {
  if (e.type === "user" && e.origin?.kind === "voice-call") return !1;
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual && !Rdt(e)) {
    if (!(ue() && e.visibleToRemoteClients === !0)) return !1;
  }
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return (
      e.attachment.type === "queued_command" &&
      e.attachment.commandMode === "prompt" &&
      !e.attachment.isMeta &&
      Gk(e.attachment.origin)
    );
  }
  return (
    e.type === "user" ||
    (e.type === "assistant" && !nne(e)) ||
    (e.type === "system" &&
      (e.subtype === "local_command" ||
        e.subtype === "model_consent_fallback" ||
        (e.subtype === "compact_boundary" &&
          (Ho().bridgeStateFramesGate?.() ?? !0))))
  );
}
function Tms(e) {
  if (ue() && e.type === "user" && e.isVirtual && !Rdt(e)) return !1;
  return e.type === "user" && !e.isCompactSummary && !Kln(e);
}
function Spl(e) {
  if (
    ue() &&
    (e.type === "user" || e.type === "assistant") &&
    e.isVirtual === !0 &&
    !Rdt(e)
  )
    return !0;
  return (
    e.type === "attachment" ||
    (e.type === "system" && e.subtype === "model_consent_fallback")
  );
}
function Cho(e) {
  return (
    e.type === "conversation_reset" ||
    e.type === "stream_event" ||
    (e.type === "system" && e.subtype === "status") ||
    e.subtype === "task_started" ||
    e.subtype === "task_progress" ||
    e.subtype === "task_updated" ||
    e.subtype === "task_notification" ||
    e.subtype === "background_tasks_changed" ||
    e.subtype === "thinking_tokens" ||
    e.subtype === "code_change_published" ||
    e.subtype === "vcs_state_changed" ||
    e.subtype === "file_attachments_missing"
  );
}
function Aho(e) {
  if (!hpe(e)) return;
  let r = e.message.content,
    o;
  if (typeof r === "string") o = r;
  else
    for (let i of r)
      if (i.type === "text") {
        o = i.text;
        break;
      }
  if (!o) return;
  return Hzt(o) || void 0;
}
function bpl(e, r, o, s, i, b, R, T) {
  try {
    let y = ost(te(e));
    if (Ue(y)) {
      (t("[bridge:repl] Ingress message type=control_response"), i?.(y));
      return;
    }
    if ($e(y)) {
      (t(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`),
        b?.(y));
      return;
    }
    if (
      vms(y) &&
      y.type === "control_cancel_request" &&
      "request_id" in y &&
      typeof y.request_id === "string"
    ) {
      (t(
        `[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`,
      ),
        R?.(y.request_id));
      return;
    }
    if (rt(y)) {
      let I = nt(y.notification);
      if (I === void 0) {
        if (T)
          (t("[bridge:repl] Ingress message type=queued_notification"),
            T({ type: "queued_notification", notification: y.notification }));
        else
          t(
            "[bridge:repl] Ignoring queued_notification: host has no notification buffer",
          );
        return;
      }
      (t(
        "[bridge:repl] Ingress queued_notification from another session: delivering as its user frame",
      ),
        (y = I));
    }
    if (!vms(y)) return;
    let A = "uuid" in y && typeof y.uuid === "string" ? y.uuid : void 0;
    if (A && r.has(A)) {
      t(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${A}`);
      return;
    }
    if (ue()) {
      let I = import.meta.require("/$bunfs/root/chunk-9e31smhj.js");
      if (
        (A !== void 0 && I.isScriptRowUUID(r, A)) ||
        (y.type === "user" && "is_virtual" in y && y.is_virtual === !0)
      ) {
        t(
          `[bridge:repl] Ignoring a script call's row at ingress: type=${y.type} uuid=${A ?? "none"}`,
        );
        return;
      }
    }
    if (A && o.has(A)) {
      t(
        `[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${A}`,
      );
      return;
    }
    if (
      (t(
        `[bridge:repl] Ingress message type=${y.type}${A ? ` uuid=${A}` : ""}`,
      ),
      y.type === "user")
    ) {
      if ("isReplay" in y && y.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${A ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
        t(
          `[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${A}`,
        );
        return;
      }
      if (Ems(y)) {
        t(
          `[bridge:repl] Ignoring fork display frame at ingress: uuid=${A ?? "none"}`,
        );
        return;
      }
      if (A) o.add(A);
      (a("tengu_bridge_message_received", { is_repl: !0 }),
        f("bridge_message_receive"),
        s?.(y));
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
  } catch (y) {
    (t(`[bridge:repl] Failed to parse ingress message: ${d(y)}`),
      m("bridge_message_receive", "bridge_message_receive_parse_failed"));
  }
}
var Ke = new Set(["effortLevel", "ultracode"]),
  Ve = 5,
  Be = 40,
  je =
    "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  We = 8000,
  ee =
    "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  WDi = 660000,
  qNn = "side_question timed out: the host did not answer in time",
  Ge =
    "(No answer available for this side question. Try again, or ask in the main conversation.)";
function jDi(e) {
  return e.response !== null && e.synthetic !== !1
    ? { ...e, response: Ge, synthetic: !0 }
    : e;
}
var Ye = p(() =>
    c({
      question: n(),
      history: C(
        c({ question: n(), response: n(), fallback_notice: n().optional() }),
      ).optional(),
    }),
  ),
  ze = "This session is shutting down.",
  He = new Set([
    "initialize",
    "file_suggestions",
    "read_file",
    "get_workspace_diff",
    "get_context_usage",
    "get_usage",
    "mcp_status",
  ]);
function Se(e, r) {
  if (r instanceof yr) return kn(d(r));
  if (Fe(r)) return kn(d(r));
  return (t(`${e} failed: ${d(r)}`, { level: "error" }), `${e} failed`);
}
function wpl(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, { level: "error" });
    throw new yr("Connection failed");
  }
  throw new yr(`Server status: ${e.type}`);
}
function M(e, r, o, s) {
  ne(
    e,
    r,
    o,
    s.then((i) => ({ subtype: "success", response: i ?? {} })),
  );
}
function ke(e, r) {
  let o = e.request;
  if (
    o.subtype === "mcp_status" ||
    o.subtype === "read_file" ||
    o.subtype === "get_task_output"
  )
    return o.liveReply === !0;
  return (
    o.subtype === "mcp_authenticate" &&
    o.liveReply === !0 &&
    r?.callbackExpected === !0
  );
}
function ne(e, r, o, s) {
  s.catch((i) => ({
    subtype: "error",
    error: Se(e.request.subtype, i),
    ...(i instanceof vH && { error_code: i.errorCode }),
  })).then((i) => {
    let R = {
      ...(i.subtype === "error"
        ? rq(e.request_id, i.error, i.error_code)
        : ke(e, i.response)
          ? Hsn(e.request_id, i.response ?? {})
          : KJ(e.request_id, i.response ?? {})),
      session_id: o,
    };
    (r(R),
      t(
        `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${i.subtype}`,
      ));
  });
}
function be(e, r) {
  if (r && r.ok === !1)
    return {
      type: "control_response",
      response: { subtype: "error", request_id: e, error: kn(r.error) },
    };
  return {
    type: "control_response",
    response: { subtype: "success", request_id: e },
  };
}
function x(e, r) {
  return rq(e.request_id, r, "unsupported_request");
}
function kpl(e, r) {
  let {
    transport: o,
    sessionId: s,
    outboundOnly: i,
    getInitializeState: b,
    claudeCodeVersion: R,
    getCommands: T,
    reportsInboundReadReceipts: y,
    getPendingPrompts: A,
    onInterrupt: I,
    onStopTask: Q,
    onBackgroundTasks: X,
    onCancelAsyncMessage: j,
    onDialogKindsDeclared: B,
    onClientInitialize: J,
    onSetModel: P,
    onSetMaxThinkingTokens: K,
    onSetPermissionMode: w,
    onApplyFlagSettings: G,
    onRenameSession: Te,
    onSetColor: we,
    onFileSuggestions: ie,
    onReadFile: ae,
    onGetWorkspaceDiff: de,
    onGetContextUsage: le,
    onMcpAuthenticate: pe,
    onMcpOauthCallbackUrl: ce,
    onMcpReconnect: Oe,
    onMcpSetServers: _e,
    onForkConversation: ge,
    hasPendingPrompts: xe,
    onSideQuestion: fe,
    cancellableRequests: Z,
  } = r;
  if (!o) {
    t(
      "[bridge:repl] Cannot respond to control_request: transport not configured",
    );
    return;
  }
  let O =
      r.writeFrame ??
      ((u) => {
        o.write(u);
      }),
    S;
  if (ln() && !He.has(e.request.subtype)) {
    (t(`[bridge] refusing ${e.request.subtype}: this process is exiting`),
      (S = {
        type: "control_response",
        response: { subtype: "error", request_id: e.request_id, error: ze },
      }));
    let u = { ...S, session_id: s };
    o.write(u);
    return;
  }
  if (i && e.request.subtype !== "initialize") {
    S = {
      type: "control_response",
      response: { subtype: "error", request_id: e.request_id, error: je },
    };
    let u = { ...S, session_id: s };
    (o.write(u),
      t(
        `[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`,
      ));
    return;
  }
  let N = r.answerSharedControlRequest?.(e.request, e.request_id);
  if (N instanceof Promise) {
    ne(e, O, s, N);
    return;
  }
  if (N !== void 0) {
    let g = {
      ...(N.subtype === "error"
        ? rq(e.request_id, N.error, N.error_code)
        : ke(e, N.response)
          ? Hsn(e.request_id, N.response)
          : {
              type: "control_response",
              response: {
                subtype: "success",
                request_id: e.request_id,
                ...(N.response !== void 0 && { response: N.response }),
              },
            }),
      session_id: s,
    };
    (o.write(g),
      t(
        `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${N.subtype}`,
      ));
    return;
  }
  switch (e.request.subtype) {
    case "initialize": {
      try {
        let D = uHe(e.request.supportedDialogKinds);
        if (D.length > 0) B?.(D);
      } catch (D) {
        t(
          `[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${d(D)}`,
        );
      }
      let u = [];
      if (!i)
        try {
          u = T?.() ?? [];
        } catch (D) {
          (m("bridge_initialize_commands", "get_commands_threw"),
            t(
              `[bridge:repl] getCommands failed; acking initialize with commands: []: ${d(D)}`,
            ));
        }
      let g = A?.() ?? [],
        h = g.filter((D) => D.request.subtype === "can_use_tool"),
        k = g.filter((D) => D.request.subtype === "request_user_dialog");
      S = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            commands: u,
            agents: [],
            output_style: "normal",
            available_output_styles: ["normal"],
            models: [],
            account: {},
            pid: process.pid,
            ...(R !== void 0 && { claude_code_version: R }),
            ...(!i && y?.() === !0 && { inbound_read_receipts: !0 }),
            ...b?.(),
          },
          pending_permission_requests: h,
          pending_user_dialog_requests: k,
        },
      };
      try {
        J?.();
      } catch (D) {
        t(
          `[bridge:repl] onClientInitialize failed; acking initialize anyway: ${d(D)}`,
        );
      }
      break;
    }
    case "set_model": {
      let u = e.request.model;
      if (u != null && typeof u !== "string") {
        (m("model_switch", "invalid_model_type"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: model must be a string",
            },
          }));
        break;
      }
      let g = e.request.only_if_model_is_current;
      if (g !== void 0 && g !== !1) {
        (m("model_switch", "only_if_model_is_current_unserved"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing.",
            },
          }));
        break;
      }
      let h = P?.(e.request.model ?? void 0);
      if (h && "then" in h) {
        ye({
          verdict: h,
          respond: (k) => {
            let Ne = {
              ...{
                type: "control_response",
                response: { ...k, request_id: e.request_id },
              },
              session_id: s,
            };
            (O(Ne),
              t(
                `[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${k.subtype}`,
              ));
          },
          inform: (k) => {
            for (let D of k)
              O({
                type: "system",
                subtype: "informational",
                content: D,
                level: "notice",
                uuid: L(),
                session_id: s,
              });
          },
        });
        return;
      }
      if (h && !h.ok)
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: kn(h.error),
          },
        };
      else
        S = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      break;
    }
    case "set_max_thinking_tokens": {
      if (!KNn(e.request)) {
        S = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: kms },
        };
        break;
      }
      let u = K?.(e.request.max_thinking_tokens, e.request.thinking_display);
      if (u && "then" in u) {
        let g = e.request_id,
          h = e.request.subtype;
        u.then(
          (k) => be(g, k),
          (k) => ({
            type: "control_response",
            response: { subtype: "error", request_id: g, error: Se(h, k) },
          }),
        ).then((k) => {
          let D = { ...k, session_id: s };
          (O(D),
            t(
              `[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${g} result=${k.response.subtype}`,
            ));
        });
        return;
      }
      S = be(e.request_id, u);
      break;
    }
    case "set_permission_mode": {
      let u = Q_(e.request.mode),
        g =
          u === void 0
            ? { ok: !1, error: w2e, code: "invalid_mode" }
            : (w?.(u) ?? {
                ok: !1,
                error:
                  "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)",
                code: "unsupported_request",
              });
      if (g.ok)
        S = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: kn(g.error),
            ...(g.code !== void 0 && { error_code: g.code }),
          },
        };
      break;
    }
    case "rename_session": {
      if (typeof e.request.title !== "string") {
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "rename_session: title must be a string",
          },
        };
        break;
      }
      let g = Te?.(e.request.title);
      if (!g)
        S = x(
          e,
          "rename_session is not supported in this context (onRenameSession callback not registered)",
        );
      else if (g.ok)
        S = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: kn(g.error),
          },
        };
      break;
    }
    case "set_color": {
      let u = we?.(e.request.color);
      if (!u)
        S = x(
          e,
          "set_color is not supported in this context (onSetColor callback not registered)",
        );
      else if (u.ok)
        S = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: kn(u.error),
          },
        };
      break;
    }
    case "file_suggestions": {
      if (!ie) {
        S = x(
          e,
          "file_suggestions is not supported in this context (onFileSuggestions callback not registered)",
        );
        break;
      }
      M(
        e,
        O,
        s,
        ie(e.request.query).then((u) => ({ suggestions: u })),
      );
      return;
    }
    case "read_file": {
      if (!ae) {
        S = x(
          e,
          "read_file is not supported in this context (onReadFile callback not registered)",
        );
        break;
      }
      M(
        e,
        O,
        s,
        ae(
          e.request.path,
          e.request.max_bytes,
          e.request.encoding,
          e.request.anchor,
          e.request.offset,
        ).then(((u) => (g) => ({ ...g, absPath: u }))(e.request.path)),
      );
      return;
    }
    case "get_workspace_diff": {
      if (!de) {
        S = x(
          e,
          "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)",
        );
        break;
      }
      let u = new AbortController();
      ne(
        e,
        O,
        s,
        Jt(de(u.signal), We, ee).then(
          (g) => ({ subtype: "success", response: g }),
          (g) => {
            if ((u.abort(), d(g) === ee))
              return {
                subtype: "error",
                error: ee,
                error_code: "workspace_diff_pending",
              };
            throw g;
          },
        ),
      );
      return;
    }
    case "get_context_usage": {
      if (!le) {
        S = x(
          e,
          "get_context_usage is not supported in this context (onGetContextUsage callback not registered)",
        );
        break;
      }
      M(
        e,
        O,
        s,
        le({ detail: e.request.detail }).then((u) => ({
          ...u,
          memoryFiles: [],
          ...bms(u),
        })),
      );
      return;
    }
    case "get_usage":
      S = x(e, "get_usage is not supported in this context");
      break;
    case "mcp_status":
      S = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: { mcpServers: [] },
        },
      };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect": {
      let u = e.request,
        { subtype: g, serverName: h } = u,
        k =
          u.subtype === "mcp_authenticate"
            ? pe && ((D) => pe(D, u.redirectUri, u.redirectUriOnly))
            : u.subtype === "mcp_oauth_callback_url"
              ? ce && ((D) => ce(D, u.callbackUrl))
              : Oe;
      if (!k) {
        S = x(
          e,
          `${g} is not supported in this context (callback not registered)`,
        );
        break;
      }
      M(e, O, s, k(h));
      return;
    }
    case "interrupt":
      (I?.({
        sparesBackgroundTasks: e.request.spare_background_tasks === !0,
        ...((OSe(e.request) ||
          z$t(e.request_id, e.request) ||
          Xsn(e.request_id)) && { isNoStop: !0 }),
      }),
        (S = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        }));
      break;
    case "apply_flag_settings": {
      let u = Ze(e.request.settings),
        g;
      if (!u.ok) g = u;
      else if (!G) {
        (m("bridge_flag_settings", "not_registered"),
          (S = x(
            e,
            "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)",
          )));
        break;
      } else g = G(u.settings, e.request_id);
      if (g.ok)
        (f("bridge_flag_settings"),
          (S = {
            type: "control_response",
            response: { subtype: "success", request_id: e.request_id },
          }));
      else
        S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: g.error,
          },
        };
      break;
    }
    case "mcp_set_servers": {
      let u = e.request.servers,
        g = "hint" in e.request ? e.request.hint : void 0,
        h;
      if (u === void 0 && typeof g === "string")
        (t(
          "[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply",
        ),
          (h = {
            ok: !0,
            added: [],
            removed: [],
            errors: {},
            unknownServerCount: 0,
          }));
      else if (!Ee(u))
        h = { ok: !1, error: "mcp_set_servers: servers must be an object" };
      else if (!_e) {
        S = x(
          e,
          "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)",
        );
        break;
      } else
        try {
          h = _e(u);
        } catch (k) {
          (t(`[bridge:repl] mcp_set_servers handler threw: ${d(k)}`, {
            level: "error",
          }),
            (h = { ok: !1, error: "mcp_set_servers failed to apply" }));
        }
      S = h.ok
        ? {
            type: "control_response",
            response: {
              subtype: "success",
              request_id: e.request_id,
              response: {
                added: h.added,
                removed: h.removed,
                errors: Xe(h.errors, h.unknownServerCount),
              },
            },
          }
        : {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: kn(h.error),
            },
          };
      break;
    }
    case "stop_task": {
      let u = e.request.task_id;
      if (typeof u !== "string") {
        (m("task_stop_user", "invalid_task_id"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string",
            },
          }));
        break;
      }
      let g = u;
      if (!Q) {
        (m("task_stop_user", "not_supported"),
          (S = x(
            e,
            "stop_task is not supported in this context (callback not registered)",
          )));
        break;
      }
      M(e, O, s, Q(g));
      return;
    }
    case "background_tasks": {
      let u = yms(e.request.tool_use_id);
      if (!u.valid) {
        (m("task_local_shell_background_all", "invalid_tool_use_id"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: Sms,
            },
          }));
        break;
      }
      let { toolUseId: g } = u;
      if (!X) {
        (m("task_local_shell_background_all", "not_supported"),
          (S = x(
            e,
            "background_tasks is not supported in this context (callback not registered)",
          )));
        break;
      }
      if (Gm()) {
        (m("task_local_shell_background_all", "disabled"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: Dsn,
            },
          }));
        break;
      }
      M(
        e,
        O,
        s,
        Promise.resolve()
          .then(() => X(g))
          .then((h) => (g === void 0 ? {} : { backgrounded: h })),
      );
      return;
    }
    case "cancel_async_message": {
      let u = e.request.message_uuid;
      if (typeof u !== "string") {
        (m("bridge_cancel_queued_message", "invalid_message_uuid"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message: message_uuid must be a string",
            },
          }));
        break;
      }
      if (!j) {
        (m("bridge_cancel_queued_message", "not_supported"),
          (S = x(
            e,
            "cancel_async_message is not supported in this context (callback not registered)",
          )));
        break;
      }
      M(
        e,
        O,
        s,
        Promise.resolve()
          .then(() => j(u))
          .then(
            (g) => {
              if (g) f("bridge_cancel_queued_message");
              else l("bridge_cancel_queued_message", "not_queued");
              return g === !0
                ? { cancelled: g, message_uuid: u }
                : { cancelled: g === "read" };
            },
            (g) => {
              throw (m("bridge_cancel_queued_message", "failed"), g);
            },
          ),
      );
      return;
    }
    case "side_question": {
      let u = Ye().safeParse(e.request);
      if (!u.success) {
        (m("bridge_side_question", "invalid_request"),
          (S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "side_question: question must be a string and history an array of {question, response} strings",
            },
          }));
        break;
      }
      if (!fe) {
        (m("bridge_side_question", "not_registered"),
          (S = x(
            e,
            "side_question is not supported in this context (onSideQuestion callback not registered)",
          )));
        break;
      }
      if (Z?.has(e.request_id)) {
        t(
          `[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`,
        );
        return;
      }
      let g = new AbortController();
      Z?.set(e.request_id, g);
      let h = Promise.resolve().then(() =>
        fe(u.data, {
          signal: g.signal,
          onProgress: (k) => {
            O({
              type: "system",
              subtype: "control_request_progress",
              request_id: e.request_id,
              ...k,
              uuid: L(),
              session_id: s,
            });
          },
        }),
      );
      M(
        e,
        O,
        s,
        Jt(h, r.sideQuestionDeadlineMs ?? WDi, qNn)
          .then(
            (k) => {
              if (k.response === null) l("bridge_side_question", "no_response");
              else if (k.synthetic !== !1)
                l("bridge_side_question", "synthetic");
              else f("bridge_side_question");
              return jDi(k);
            },
            (k) => {
              if (d(k) === qNn)
                throw (
                  g.abort(),
                  m("bridge_side_question", "deadline"),
                  new yr(qNn)
                );
              if (Fe(k)) l("bridge_side_question", "cancelled");
              else m("bridge_side_question", "failed");
              throw k;
            },
          )
          .finally(() => {
            if (Z?.get(e.request_id) === g) Z.delete(e.request_id);
          }),
      );
      return;
    }
    case "fork_conversation": {
      if (ge) {
        M(
          e,
          O,
          s,
          ge(e.request, {
            promptPending: xe?.() ?? !1,
            requestId: e.request_id,
          }),
        );
        return;
      }
      let u = {
        forked: !1,
        error: "unsupported",
        reason: "requires_remote_control_server",
      };
      S = {
        type: "control_response",
        response: { subtype: "success", request_id: e.request_id, response: u },
      };
      break;
    }
    default:
      S = x(
        e,
        `REPL bridge does not handle control_request subtype: ${kn(String(e.request.subtype))}`,
      );
  }
  let qe = { ...S, session_id: s };
  (o.write(qe),
    t(
      `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${S.response.subtype}`,
    ));
}
function Ee(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Qe = "(servers not adopted)";
function Xe(e, r) {
  if (r <= 0) return e;
  return {
    ...e,
    [Qe]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`,
  };
}
function Ze(e) {
  if (!Ee(e))
    return (
      m("bridge_flag_settings", "invalid_shape"),
      { ok: !1, error: "apply_flag_settings: settings must be an object" }
    );
  let r = Object.keys(e).filter((s) => !Ke.has(s));
  if (r.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let s = r.slice(0, Ve).map((b) => Lt(b, Be)),
      i = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${i} cannot be changed over Remote Control (only effortLevel and ultracode can)`,
    };
  }
  let o = {};
  if ("effortLevel" in e) {
    let s = e.effortLevel;
    if (s !== null && typeof s !== "string")
      return (
        m("bridge_flag_settings", "invalid_type"),
        {
          ok: !1,
          error: "apply_flag_settings: effortLevel must be a string or null",
        }
      );
    o.effortLevel = s;
  }
  if ("ultracode" in e) {
    let s = e.ultracode;
    if (typeof s !== "boolean")
      return (
        m("bridge_flag_settings", "invalid_type"),
        { ok: !1, error: "apply_flag_settings: ultracode must be a boolean" }
      );
    o.ultracode = s;
  }
  if (!("effortLevel" in o) && !("ultracode" in o))
    return (
      m("bridge_flag_settings", "nothing_to_apply"),
      {
        ok: !1,
        error:
          "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control",
      }
    );
  return { ok: !0, settings: o };
}
function Je(e) {
  return !sT(e.terminal_reason);
}
function nSr({ userMessageUuid: e, outcome: r, aborted: o }) {
  let s = r?.terminal_reason,
    i = sT(s) ? s : o?.guess,
    b =
      i === void 0
        ? void 0
        : {
            userMessageUuid: e,
            terminalReason: i,
            ...(r?.stopped_by_permission_check && {
              stoppedByPermissionCheck: !0,
            }),
          };
  if (o === void 0)
    return r === void 0 || Je(r) ? { userMessageUuid: e, outcome: r } : b;
  if (o.sendRunsAgain) return;
  switch (o.by) {
    case "stop":
      return b;
    case "send-now":
      return { userMessageUuid: e, sendNowCut: !0 };
    case "other":
      return;
  }
}
function Rho(e, r, o) {
  let s = r?.outcome,
    i = {
      type: "result",
      ...(r?.userMessageUuid && { user_message_uuid: r.userMessageUuid }),
      ...(o !== void 0 && { queued_turn_count: o }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: { ...Zh },
      modelUsage: {},
      permission_denials: [],
      session_id: e,
      uuid: L(),
    };
  if (s === void 0)
    return {
      ...i,
      subtype: "success",
      is_error: !1,
      num_turns: 0,
      result: "",
      stop_reason: null,
      ...(r?.terminalReason !== void 0 && {
        terminal_reason: r.terminalReason,
      }),
      ...(r?.stoppedByPermissionCheck && { stopped_by_permission_check: !0 }),
    };
  let b = {
    is_error: s.is_error,
    num_turns: s.num_turns,
    stop_reason: s.stop_reason,
    ...(s.terminal_reason !== void 0 && { terminal_reason: s.terminal_reason }),
  };
  if (s.subtype === "success")
    return {
      ...i,
      ...b,
      subtype: "success",
      result:
        s.is_error && s.structured_output === void 0 ? (s.result ?? "") : "",
      ...(s.api_error_status != null && {
        api_error_status: s.api_error_status,
      }),
      ...(s.api_error_code !== void 0 && { api_error_code: s.api_error_code }),
      ...(s.api_error_type !== void 0 && { api_error_type: s.api_error_type }),
      ...(s.api_error_origin !== void 0 && {
        api_error_origin: s.api_error_origin,
      }),
      ...(s.api_error !== void 0 && { api_error: s.api_error }),
    };
  return { ...i, ...b, subtype: s.subtype, errors: [] };
}
function GDi(e, r) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: r,
    session_id: e,
    uuid: L(),
  };
}
var et = "PushNotification";
function Epl(e, r) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: L(),
      container: null,
      model: qs,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: { ...Zh },
      content: [
        {
          type: "tool_use",
          id: L(),
          name: et,
          input: { message: e, status: "proactive" },
        },
      ],
      context_management: null,
    },
    parent_tool_use_id: null,
    is_meta: !0,
    session_id: r,
    uuid: L(),
  };
}
function Cms(e, r) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: L(),
      container: null,
      model: qs,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: { ...Zh },
      content: [{ type: "text", text: e, citations: null }],
      context_management: null,
    },
    parent_tool_use_id: null,
    session_id: r,
    uuid: L(),
    timestamp: new Date().toISOString(),
  };
}
class BJ {
  capacity;
  ring;
  set = new Set();
  writeIdx = 0;
  constructor(e) {
    ((this.capacity = e), (this.ring = Array(e)));
  }
  add(e) {
    if (this.set.has(e)) return;
    let r = this.ring[this.writeIdx];
    if (r !== void 0) this.set.delete(r);
    ((this.ring[this.writeIdx] = e),
      this.set.add(e),
      (this.writeIdx = (this.writeIdx + 1) % this.capacity));
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    (this.set.clear(), this.ring.fill(void 0), (this.writeIdx = 0));
  }
}
var tt = p(() =>
  c({ notification_id: n().min(1), origin: v(nP), content: n() }),
);
function nt(e) {
  let r = tt().safeParse(e);
  if (!r.success) return;
  return {
    type: "user",
    uuid: r.data.notification_id,
    message: { role: "user", content: r.data.content },
    parent_tool_use_id: null,
    isSynthetic: !0,
    inbound_origin: nP,
  };
}
function rt(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "queued_notification"
  );
}
var ot = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
    "VERIFIED_KEYLESS_DEVICE",
    "SERVICE_VOUCHED",
    "SERVER_AUTHORED",
    "SERVER_REPLAYED",
    "TRANSITIVELY_VOUCHED",
  ],
  he = "DEVICE_ATTESTATION_STATUS_",
  st = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
  ];
function RSe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return st[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(he) ? e.slice(he.length) : e;
  return ot.find((o) => o === r) ?? "UNSPECIFIED";
}
var z = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function vpl(e, r) {
  return z.indexOf(e) <= z.indexOf(r) ? e : r;
}
function Ams(e, r) {
  if (e === "SERVICE_VOUCHED") return !0;
  let o = z.findIndex((s) => s === e);
  return o !== -1 && o <= z.indexOf(r);
}
var Rms = { enforce: !1, acceptLevel: "VERIFIED", acceptStatuses: new Set() },
  it = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  at = p(() =>
    c({
      accept_level: U(z).default("VERIFIED"),
      accept_statuses: C(U(it)).default([]),
    }),
  );
function xms(e) {
  let r = Ho().attestation,
    o = at().safeParse(e);
  if (!o.success && !r.malformedConfigReported) {
    r.malformedConfigReported = !0;
    try {
      (t(
        `[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${o.error.message}`,
        { level: "error" },
      ),
        l("bridge_event_attestation", "malformed_config"));
    } catch (s) {
      t(`[bridge:attestation] malformed-config report threw: ${d(s)}`, {
        level: "error",
      });
    }
  }
  return {
    enforce: !0,
    acceptLevel: o.success ? o.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(o.success ? o.data.accept_statuses : []),
  };
}
function Tpl(e) {
  try {
    let r = Ho().attestation.reportedCloudWorkerCodes;
    if (r.has(e)) return;
    (r.add(e),
      t(
        `${q(!0)} the attestation policy header could not be read whole (${e})`,
        { level: "error" },
      ),
      l("ccr_worker_attestation_policy", e));
  } catch (r) {
    t(`${q(!0)} policy-fault report threw: ${d(r)}`, { level: "error" });
  }
}
function Lsn(e) {
  Ho().attestation.filterPolicy = e;
}
function rSr(e) {
  Ho().attestation.dropNotifier = e;
}
function Cpl(e) {
  let r = Ho().attestation;
  if (r.dropNotifier === e) r.dropNotifier = void 0;
}
function xho(e) {
  Ho().attestation.senderDropWriter = e;
}
function Pho(e) {
  let r = Ho().attestation;
  if (r.senderDropWriter === e) r.senderDropWriter = void 0;
}
var YNn = "[remote-io] warning: ";
function Pms({ status: e, payloadType: r, subtype: o, isCloud: s }) {
  let i = s
    ? "The app that sent it doesn't sign its activity. Use an app that does."
    : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what:
      r === "control_response"
        ? "permission response"
        : r === "control_request"
          ? `remote command (${o})`
          : "message",
    hint:
      s && e === "ABSENT"
        ? "It may be an earlier one, delivered again. If you sent it and Claude has not already acted on it, try again."
        : s && e === "VERIFIED_BY_GATE"
          ? "If you sent it, send it again from another device that is already verified. If the app asks you to sign in again to verify your device, do that and then send it again."
          : e === "ABSENT" || e === "INVALID"
            ? "Re-pair the sending device in Trusted Devices."
            : e === "VERIFIED_BY_GATE" || e === "VERIFIED_KEYLESS_DEVICE"
              ? i
              : e === "TRANSITIVELY_VOUCHED"
                ? "It came from an automated cloud session, not from a person."
                : void 0,
  };
}
function XNn(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped)
    return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let { what: o, hint: s } = Pms(e);
  return `${r} ignored a ${o} that arrived without a valid device signature (attestation: ${e.status}).${s ? ` ${s}` : ""}`;
}
function H$t(e) {
  let { what: r, hint: o } = Pms(e);
  return `This ${r} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${o ? ` ${o}` : ""}`;
}
function dt(e) {
  if (e.payloadType === "control_request") return;
  return Cms(e.windowCapped ? XNn(e) : H$t(e), V());
}
var ut = new Set([
  "set_model",
  "set_permission_mode",
  "interrupt",
  "stop_task",
  "background_tasks",
  "cancel_async_message",
  "update_queued_message",
  "set_max_thinking_tokens",
  "rename_session",
  "set_color",
  "mcp_authenticate",
  "mcp_oauth_callback_url",
  "mcp_reconnect",
  "apply_flag_settings",
  "side_question",
  "reload_plugins",
]);
function rst(e) {
  let r = YDi(e);
  return typeof r === "string" ? r : void 0;
}
function De(e) {
  let r = se(e);
  if (r === void 0 || !ut.has(r)) return;
  return { subtype: r, requestId: e.payload ? rst(e.payload) : void 0 };
}
function se(e) {
  let r = e.payload?.request,
    o =
      typeof r === "object" && r !== null && "subtype" in r
        ? r.subtype
        : void 0;
  return typeof o === "string" ? o : void 0;
}
var lt = new Set(["interrupt", "end_session"]),
  pt = /^b[0-9a-z]{8}$/;
function ct(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    Object.keys(e).sort().join() === "subtype,task_id" &&
    "subtype" in e &&
    e.subtype === "stop_task" &&
    "task_id" in e &&
    typeof e.task_id === "string" &&
    pt.test(e.task_id)
  );
}
var _t = 128;
function zDi(e) {
  let r = se(e),
    o = e.payload ? rst(e.payload) : void 0;
  return RSe(e.device_attestation_status) === "SERVICE_VOUCHED" &&
    e.payload?.type === "control_request" &&
    (r === "set_model" || r === "apply_flag_settings") &&
    typeof o === "string" &&
    o.length <= _t
    ? o
    : void 0;
}
function gt(e, r) {
  if (typeof e !== "object" || e === null) return !1;
  let o = "subtype" in e ? e.subtype : void 0,
    s = Object.keys(e).sort().join();
  if (o === "set_model") {
    let R = "model" in e ? e.model : void 0;
    return s === "model,subtype" && typeof R === "string" && r(R);
  }
  let i = "settings" in e ? e.settings : void 0;
  if (
    o !== "apply_flag_settings" ||
    s !== "settings,subtype" ||
    typeof i !== "object" ||
    i === null
  )
    return !1;
  let b = Object.entries(i);
  return (
    b.every(
      ([R, T]) =>
        (R === "effortLevel" && Gi.some((y) => y === T)) ||
        (R === "ultracode" && T === !1),
    ) && b.some(([R]) => R === "effortLevel")
  );
}
var ft = 2000,
  H = 200,
  Ae = 128,
  yt = 256;
function F(e, r, o) {
  if ((e.delete(o), e.add(o), e.size > r))
    for (let s of e) {
      e.delete(s);
      break;
    }
}
function JNn(e) {
  let r = Ho().attestation;
  return (
    e.length > Ae ||
    r.knownInboundRequestIds.has(e) ||
    r.knownOutboundRequestIds.has(e) ||
    r.elicitationOutboundRequestIds.has(e) ||
    r.hostAskOutboundRequestIds.has(e) ||
    r.filePartOutboundRequestIds.has(e)
  );
}
function Apl(e) {
  let r = Ho().attestation;
  return (
    r.knownOutboundRequestIds.has(e) || r.elicitationOutboundRequestIds.has(e)
  );
}
function Oho(e, { automated: r }) {
  let o = Ho().attestation;
  if ((F(o.knownOutboundRequestIds, H, e), r))
    F(o.automatedOutboundRequestIds, H, e);
}
var mt = 512;
function VDi(e) {
  F(Ho().attestation.deviceOutboundRequestIds, mt, e);
}
function Rpl(e) {
  F(Ho().attestation.elicitationOutboundRequestIds, H, e);
}
function xpl(e) {
  F(Ho().attestation.hostAskOutboundRequestIds, H, e);
}
function Ppl(e) {
  F(Ho().attestation.filePartOutboundRequestIds, H, e);
}
function bt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let o = rst(r),
    s = Ho().attestation;
  return (
    o !== void 0 &&
    (s.automatedOutboundRequestIds.has(o) ||
      s.deviceOutboundRequestIds.has(o) ||
      s.hostAskOutboundRequestIds.has(o) ||
      s.filePartOutboundRequestIds.has(o))
  );
}
function St(e) {
  return e.payload?.inbound_origin === "tool_host_ended_reminder";
}
var kt = 200;
function Iho(e) {
  F(Ho().attestation.resolvedPromptRequestIds, kt, e);
}
function Et(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let o = rst(r);
  return o !== void 0 && Ho().attestation.resolvedPromptRequestIds.has(o);
}
var ht = 60000,
  ve = 10;
function Re(e, r) {
  let o = Ho().attestation;
  if (o.dropNotifier === void 0 && o.senderDropWriter === void 0) return;
  if (o.recentDropEventIds.has(r)) return;
  F(o.recentDropEventIds, yt, r);
  let s =
      e.payloadType === "control_request"
        ? o.commandDropNoticeWindow
        : o.messageDropNoticeWindow,
    i = Date.now();
  if (i - s.start >= ht) ((s.start = i), (s.count = 0));
  if ((s.count++, s.count <= ve)) Ie(e);
  else if (s.count === ve + 1)
    Ie({
      status: e.status,
      payloadType: e.payloadType,
      ...(e.subtype !== void 0 && { subtype: e.subtype }),
      windowCapped: !0,
      ...(e.isCloud && { isCloud: !0 }),
    });
}
function Ie(e) {
  let r = Ho().attestation;
  if (r.dropNotifier !== void 0)
    try {
      r.dropNotifier(e);
    } catch (o) {
      t(`${q(e.isCloud === !0)} drop notifier threw: ${d(o)}`, {
        level: "error",
      });
    }
  if (r.senderDropWriter !== void 0)
    try {
      let o = dt(e);
      if (o) r.senderDropWriter(o);
    } catch (o) {
      t(`${q(e.isCloud === !0)} drop sender writer threw: ${d(o)}`, {
        level: "error",
      });
    }
}
function Oms(e) {
  let o =
    (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) ===
      "control_request" && e.payload
      ? rst(e.payload)
      : void 0;
  if (o !== void 0 && o.length <= Ae)
    F(Ho().attestation.knownInboundRequestIds, ft, o);
}
function oe(e, r, o) {
  if (r !== "control_request") return;
  if ((Oms(e), De(e) !== void 0))
    f(
      o
        ? "ccr_worker_control_request_attestation"
        : "bridge_control_request_attestation",
    );
}
var vt = new Set([
  "bash_command",
  "update_environment_variables",
  "assistant",
  "system",
]);
function Rt(e, r, o, s) {
  try {
    let i = Ho().attestation,
      b = s ? i.reportedCloudWorkerCodes : i.reportedStrayDropCodes,
      R =
        o === "control_request"
          ? "control_request_other"
          : vt.has(o)
            ? o
            : "other_payload_type",
      T = `${r.toLowerCase()}_${R}`;
    if (b.has(T)) return;
    (b.add(T),
      t(
        `${q(s)} DROPPING unverified ${o} event_id=${e.event_id} status=${r} (stray payload class ${T}; counted once per process)`,
        { level: "warn" },
      ),
      m(
        s
          ? "ccr_worker_stray_event_attestation"
          : "bridge_stray_event_attestation",
        T,
      ));
  } catch (i) {
    t(`${q(s)} stray-drop report threw: ${d(i)}`, { level: "error" });
  }
}
function q(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function Nsn(e, r, { isCloudWorker: o, vouchWithheld: s = !1 }) {
  let i =
      !o && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED")
        ? "UNSPECIFIED"
        : e,
    b =
      i === "TRANSITIVELY_VOUCHED" &&
      Ams("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) &&
      !s;
  return {
    status: i,
    meetsLevel: b || Ams(i, r.acceptLevel),
    configException:
      r.acceptStatuses.has(i) ||
      (i === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")),
  };
}
function Ce(e, r, o, s, i) {
  let b = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    R = b === "user" || b === "control_response",
    T = RSe(e.device_attestation_status),
    y =
      T === "TRANSITIVELY_VOUCHED" &&
      b === "user" &&
      !(
        typeof e.payload.inbound_origin === "string" &&
        e.payload.inbound_origin !== ""
      ),
    A =
      o &&
      T === "TRANSITIVELY_VOUCHED" &&
      ((b !== "user" && b !== "queued_notification") ||
        e.payload?.priority === "now" ||
        !s),
    {
      status: I,
      meetsLevel: Q,
      configException: X,
    } = Nsn(T, r, { isCloudWorker: o, vouchWithheld: y || A }),
    j = `${I.toLowerCase()}_${b}${y ? "_unstamped" : ""}`,
    B = e.payload?.request,
    J =
      o &&
      I === "SERVICE_VOUCHED" &&
      b === "control_request" &&
      ((!lt.has(se(e) ?? "") &&
        !ct(B) &&
        (i === void 0 || zDi(e) === void 0 || !gt(B, i))) ||
        (typeof B === "object" && B !== null && OSe(B)));
  if (Q && !J) {
    if (R) f(o ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return (oe(e, b, o), !1);
  }
  if (!r.enforce) {
    if ((oe(e, b, o), I === "UNSPECIFIED")) return !1;
    if (R)
      (t(
        `${q(o)} accepting unverified ${b} event_id=${e.event_id} status=${I}`,
        { level: "info" },
      ),
        l(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", j));
    return !1;
  }
  let P = X,
    K = !1;
  if (R) {
    let w = j;
    if (
      (t(
        `${q(o)} ${P ? "accepting (config exception)" : "DROPPING"} unverified ${b} event_id=${e.event_id} status=${I}`,
        { level: P ? "info" : "warn" },
      ),
      P)
    )
      l(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);
    else if (b === "control_response" && bt(e))
      ((K = !0),
        t(
          `${q(o)} dropped ${b} event_id=${e.event_id} status=${I} answers an automated outbound request; notice suppressed`,
          { level: "info" },
        ),
        m(
          o ? "ccr_worker_event_attestation" : "bridge_event_attestation",
          `${w}_automated_reply`,
        ));
    else if (b === "control_response" && Et(e))
      ((K = !0),
        t(
          `${q(o)} dropped ${b} event_id=${e.event_id} status=${I} is a duplicate answer to an already-resolved prompt; notice suppressed`,
          { level: "info" },
        ),
        m(
          o ? "ccr_worker_event_attestation" : "bridge_event_attestation",
          `${w}_resolved_duplicate`,
        ));
    else if (o && b === "user" && St(e))
      ((K = !0),
        t(
          `${q(o)} dropped ${b} event_id=${e.event_id} status=${I} is the service's own linked-computer line; notice suppressed`,
          { level: "info" },
        ),
        m("ccr_worker_event_attestation", `${w}_service_line`));
    else
      ((K = !0),
        m(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", w),
        Re(
          { status: I, payloadType: b, ...(o && { isCloud: !0 }) },
          e.event_id,
        ));
  } else if (b === "control_request" && !P) {
    let w = De(e);
    if (w) {
      K = !0;
      let G = w.requestId !== void 0 && JNn(w.requestId) ? void 0 : w.requestId;
      (t(
        `${q(o)} DROPPING unverified control_request subtype=${w.subtype} event_id=${e.event_id} status=${I}${G === void 0 && w.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`,
        { level: "warn" },
      ),
        m(
          o
            ? "ccr_worker_control_request_attestation"
            : "bridge_control_request_attestation",
          `${I.toLowerCase()}_${w.subtype}`,
        ),
        Re(
          {
            status: I,
            payloadType: b,
            subtype: w.subtype,
            requestId: G,
            ...(o && { isCloud: !0 }),
          },
          e.event_id,
        ));
    }
  }
  if (!P && !K) Rt(e, I, b, o);
  if (P) oe(e, b, o);
  return !P;
}
function Mho(e) {
  return Ce(e, Ho().attestation.filterPolicy?.() ?? Rms, !1, !0);
}
function Opl(e, r, o = !1, s) {
  if (e.source !== "client") {
    try {
      let i = Ho().attestation.reportedCloudWorkerCodes;
      if (!i.has("source_not_client"))
        (i.add("source_not_client"),
          t(
            `${q(!0)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`,
            { level: "warn" },
          ),
          m("ccr_worker_stray_event_attestation", "source_not_client"));
    } catch (i) {
      t(`${q(!0)} source-drop report threw: ${d(i)}`, { level: "error" });
    }
    if (!r.enforce) Oms(e);
    return r.enforce;
  }
  return Ce(e, r, !0, o, s);
}
export {
  eSr,
  M$t,
  Hsn,
  tSr,
  gpl,
  _pl,
  yms,
  Dsn,
  Sms,
  bms,
  wms,
  uHe,
  KNn,
  kms,
  BDi,
  Ems,
  vms,
  ypl,
  fHe,
  Tms,
  Spl,
  Cho,
  Aho,
  bpl,
  WDi,
  qNn,
  jDi,
  wpl,
  kpl,
  nSr,
  Rho,
  GDi,
  Epl,
  Cms,
  BJ,
  RSe,
  vpl,
  Ams,
  Rms,
  xms,
  Tpl,
  Lsn,
  rSr,
  Cpl,
  xho,
  Pho,
  YNn,
  Pms,
  XNn,
  H$t,
  rst,
  zDi,
  JNn,
  Apl,
  Oho,
  VDi,
  Rpl,
  xpl,
  Ppl,
  Iho,
  Oms,
  Nsn,
  Mho,
  Opl,
};
