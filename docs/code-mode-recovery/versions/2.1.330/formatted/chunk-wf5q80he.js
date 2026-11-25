// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { tye } from "/$bunfs/root/chunk-rg2p81t1.js";
import { ior, PAn, $tt, RMe } from "/$bunfs/root/chunk-tzhcnzkd.js";
import { P8r } from "/$bunfs/root/chunk-tryt5bb1.js";
import { W } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { f } from "/$bunfs/root/chunk-78g0060s.js";
import { Ie, A } from "/$bunfs/root/chunk-jv7av99m.js";
import { Gi, K, qt } from "/$bunfs/root/chunk-5appeerh.js";
import { u, m, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { b } from "/$bunfs/root/chunk-865at33z.js";
import { te } from "/$bunfs/root/chunk-w578pjby.js";
import { nt } from "/$bunfs/root/chunk-7cfjrnwy.js";
import { i } from "/$bunfs/root/chunk-k449cc64.js";
import { da, OM } from "/$bunfs/root/chunk-xcgcdx61.js";
import { Bm } from "/$bunfs/root/chunk-yz5b8aaa.js";
import { EI } from "/$bunfs/root/chunk-pbteexar.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { Jr, Ba } from "/$bunfs/root/chunk-xfj2cwfv.js";
import { Z_ } from "/$bunfs/root/chunk-drk264d0.js";
import { Rn } from "/$bunfs/root/chunk-2nv4wrez.js";
import { gt } from "/$bunfs/root/chunk-4vsz8a99.js";
import { Z } from "/$bunfs/root/chunk-bz1f2qnq.js";
import { jwo } from "/$bunfs/root/chunk-ddznn4yb.js";
import { fZ, Fi } from "/$bunfs/root/chunk-929j4hj9.js";
import { pV, Nbe, Bbr } from "/$bunfs/root/chunk-w50zedgp.js";
import { EA } from "/$bunfs/root/chunk-fbqj9ad4.js";
import { iQt, LW } from "/$bunfs/root/chunk-bzyb60p0.js";
import { ACe, Yso } from "/$bunfs/root/chunk-sjqze7qg.js";
import { PH } from "/$bunfs/root/chunk-w4dc83v7.js";
import { d0, g7 } from "/$bunfs/root/chunk-1w26p6p9.js";
import { $oi, s7r, i7r } from "/$bunfs/root/chunk-7z55j6ad.js";
import {
  B$,
  Fue,
  p7r,
  yTe,
  SJt,
  ARn,
  a8o,
  nsr,
} from "/$bunfs/root/chunk-52cad0n6.js";
import { cni } from "/$bunfs/root/chunk-c2atdz6e.js";
import { KFa } from "/$bunfs/root/chunk-jp3c197c.js";
import { fni, oor } from "/$bunfs/root/chunk-3mgqz62p.js";
import { jgt } from "/$bunfs/root/chunk-31467yzh.js";
import { a7r, zUa, KUa } from "/$bunfs/root/chunk-ca9ws28w.js";
import { c7r } from "/$bunfs/root/chunk-2atp9x7j.js";
import { ac } from "/$bunfs/root/chunk-yvba4101.js";
import { Xi, eIo, nIo } from "/$bunfs/root/chunk-prn6030k.js";
import { _B } from "/$bunfs/root/chunk-5rd4zsth.js";
import { T } from "/$bunfs/root/chunk-ma3kja9f.js";
function N(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${B$(o.host)}`;
}
function se(e, o) {
  let t = N(e),
    s = N(o);
  return t === void 0 || s === void 0 || t !== s;
}
function H(e, o) {
  let t = Fi().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return se(t, o) ? { from: t, to: o } : void 0;
}
function D(e, o) {
  Fi().lastExecutedTabUrlByScope.set(e, o);
}
var oe = 200;
function G(e, o) {
  let t = Fi().resolvedHostByToolUseId;
  if (t.size >= oe) t.clear();
  t.set(fZ(e), o);
}
function ie(e, o) {
  let t = Fi().resolvedUrlByToolUseId;
  if (t.size >= oe) t.clear();
  t.set(fZ(e), o);
}
function re() {
  let { key: e, fromHost: o } = fni(),
    t = Fi().chromeTabGroupTitle;
  if (t !== void 0 && _B() && Rn("allow_chrome_tab_group_title"))
    return { sessionId: e, displayName: t };
  if (o) return { sessionId: e };
  let s = W();
  return { sessionId: s };
}
function WXl(e, o) {
  Fi().bridgeBinding = { context: e, socketClient: o };
}
function j(e, o) {
  let t = d0.slice(0, -2),
    s = `${d0}*`;
  for (let n of Object.values(e.alwaysAllowRules))
    for (let r of n ?? []) {
      let p = r.replace(/\(\*?\)$/, "");
      if (p === o || p === t || p === s) return !0;
    }
  return !1;
}
var ae = new Set([
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "resize_window",
    "shortcuts_list",
    "list_connected_browsers",
  ]),
  le = new Set(["switch_browser", "select_browser"]),
  ce = {
    tab_missing: eIo,
    batch_multiple_tabs: nIo,
    batch_after_navigate:
      "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch:
      "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item:
      "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch.",
  };
function de(e, o) {
  let t = [];
  if (e === "browser_batch") {
    if (!Array.isArray(o.actions))
      return { kind: "deny", code: "batch_malformed_item" };
    for (let r of o.actions) {
      if (!T(r) || typeof r.name !== "string" || r.name === "browser_batch")
        return { kind: "deny", code: "batch_malformed_item" };
      t.push({ name: r.name, input: T(r.input) ? r.input : {} });
    }
  } else t.push({ name: e, input: o });
  let s = new Set(),
    n = !1;
  for (let r of t) {
    if (r.name === "navigate") {
      n = !0;
      continue;
    }
    if (le.has(r.name)) {
      if (t.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (ae.has(r.name)) continue;
    if (n) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof r.input.tabId !== "number")
      return { kind: "deny", code: "tab_missing" };
    s.add(r.input.tabId);
  }
  if (s.size === 0) return { kind: "none" };
  if (s.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...s][0] };
}
var ne = 5000,
  me = 2500,
  fe = new Set([
    "connect_timeout",
    "no_browser_selected_timeout",
    "browser_selected_late_timeout",
    "answer_timeout",
  ]);
async function z(e) {
  let o = Gi.monotonicNow(),
    t = Promise.withResolvers(),
    s = new AbortController(),
    n = x({ onSentToSelectedBrowser: t.resolve }).then(
      (c) => (s.abort(), Y(c, e)),
    ),
    r = { sent: !1 },
    p = t.promise
      .then(async () => {
        await K(me, s.signal);
        let c = ne - (Gi.monotonicNow() - o),
          d = Fi().bridgeBinding?.socketClient;
        if (
          s.signal.aborted ||
          c <= 0 ||
          d?.isConnected() !== !0 ||
          d.hasActiveSelection?.() !== !0
        )
          return;
        r.sent = !0;
        let a = Y(await x({ capMs: c }), e);
        if (F(a)) return a;
        if (a.ok || !fe.has(a.failure)) r.callMs = a.callMs;
        return;
      })
      .catch((c) => {
        i(c);
        return;
      }),
    g = await Promise.race([
      n.then(() => {
        return;
      }),
      p,
    ]);
  if (g === void 0) {
    let c = await n;
    if (r.sent && !c.ok && c.failure === "answer_timeout")
      return {
        ...c,
        failure: "answer_timeout_after_retry",
        retryCallMs: r.callMs,
      };
    return c;
  }
  return (
    n
      .then((c) => {
        let d = {
            connect_ms: c.connectMs,
            call_ms: c.callMs,
            retry_call_ms: g.callMs,
          },
          a = F(c);
        if (a) {
          if (B$(a.host) !== B$(F(g)?.host ?? ""))
            l("chrome_permission_prompt", "tab_lookup_hosts_differed", d);
          return;
        }
        let h = c.ok ? "non_web_tab_url" : c.failure;
        if (h === "answer_timeout") {
          l(
            "chrome_permission_prompt",
            "tab_lookup_rescued_after_answer_timeout",
            d,
          );
          return;
        }
        l("chrome_permission_prompt", "tab_lookup_rescued_after_failure", {
          ...d,
          first_lookup_failure: f(h),
        });
      })
      .catch(i),
    g
  );
}
function q(e) {
  return {
    connect_ms: e.connectMs,
    call_ms: e.callMs,
    ...(!e.ok && e.retryCallMs !== void 0 && { retry_call_ms: e.retryCallMs }),
  };
}
async function V(e, o) {
  let t =
      "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
    s = Fi().bridgeBinding;
  if (
    s &&
    o.toolUseId &&
    o.permissionRound !== void 0 &&
    !e.ok &&
    (e.failure === "not_connected" || e.failure === "no_extension") &&
    b(c7r, !1)
  )
    try {
      let n = s.context.onToolCallDisconnected(),
        [r] = (await $oi({ content: [{ type: "text", text: n }] }, o)).content;
      if (r?.type === "text") t = r.text;
    } catch (n) {
      i(n);
    }
  return {
    behavior: "deny",
    message: t,
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: tab URL unresolved",
      classifierApprovable: !1,
    },
  };
}
function F(e) {
  return e.ok ? SJt(e.url) : void 0;
}
function Y(e, o) {
  if (!e.ok) return e;
  let { tabs: t, connectMs: s, callMs: n } = e,
    r = t.findIndex((g) => g == null || g.tabId === o),
    p = t[r];
  if (r === -1)
    return {
      ok: !1,
      failure: t.length === 0 ? "empty_tab_list" : "tab_not_listed",
      connectMs: s,
      callMs: n,
    };
  if (p == null || typeof p.url !== "string")
    return { ok: !1, failure: "malformed_tab_list", connectMs: s, callMs: n };
  if (p.url === "")
    return { ok: !1, failure: "tab_url_empty", connectMs: s, callMs: n };
  return { ok: !0, url: p.url, connectMs: s, callMs: n };
}
async function Q(e, o) {
  let t = await e.callTool(
    "tabs_context_mcp",
    { createIfEmpty: !1, includePermissionState: !1 },
    { permissionMode: "ask", sessionScope: o },
  );
  if (!t) return "empty_result";
  if (t.error) return `tool_error_${ior("tabs_context_mcp", PAn(t.error))}`;
  let s = t.result?.content,
    n =
      Array.isArray(s) &&
      s[0] &&
      typeof s[0] === "object" &&
      "text" in s[0] &&
      typeof s[0].text === "string"
        ? s[0].text
        : void 0;
  if (!n) return "no_text";
  let r;
  try {
    r = te(n);
  } catch {
    return n.includes("createIfEmpty") ? "no_tab_group" : "not_json";
  }
  let p = r?.availableTabs;
  return Array.isArray(p) ? p : "no_tab_list";
}
async function x(e) {
  await cni();
  let o = Gi.monotonicNow(),
    t = {},
    s;
  try {
    let g = Fi().bridgeBinding;
    if (!g)
      return { ok: !1, failure: "binding_missing", connectMs: 0, callMs: 0 };
    let { socketClient: c } = g;
    s = await qt(
      (async () => {
        if (!(await c.ensureConnected())) return "not_connected";
        if (
          ((t.browserSelected = c.hasActiveSelection?.()),
          (t.startedAt = Gi.monotonicNow()),
          t.browserSelected === !0)
        )
          e?.onSentToSelectedBrowser?.();
        let d = re(),
          a = await Q(c, d);
        if (a !== "no_tab_group" || d.displayName === void 0) return a;
        return Q(c, { sessionId: d.sessionId });
      })().catch((d) => {
        if (t.startedAt === void 0) return "connect_threw";
        if (
          d instanceof Error &&
          (d.name === "SocketConnectionError" || d.name === "ToolCallLostError")
        )
          return "connection_lost";
        if (d instanceof $tt) return "no_extension";
        if (d instanceof RMe) return "extension_disconnected";
        return "call_threw";
      }),
      e?.capMs ?? ne,
      "queryTabUrl bridge call",
    ).catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (c.hasActiveSelection?.() === !1) return "no_browser_selected_timeout";
      return t.browserSelected === !1
        ? "browser_selected_late_timeout"
        : "answer_timeout";
    });
  } catch {
    s = "other_threw";
  }
  let n = Gi.monotonicNow(),
    r = Math.round((t.startedAt ?? n) - o),
    p = t.startedAt === void 0 ? 0 : Math.round(n - t.startedAt);
  return typeof s === "string"
    ? { ok: !1, failure: s, connectMs: r, callMs: p }
    : { ok: !0, tabs: s, connectMs: r, callMs: p };
}
KFa(async () => {
  let e = await x();
  return e.ok ? e.tabs : void 0;
});
var pe = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function X(e) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`,
  };
}
function _e(e) {
  if (!e) return !1;
  let o = nt(e, ";").trim().toLowerCase();
  return pe.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function be(e, o) {
  let t = ac(o),
    s = [];
  for (let n of e.content ?? [])
    if (n.type === "text") s.push({ type: "text", text: n.text });
    else if (n.type === "image")
      if (_e(n.mimeType))
        try {
          let { block: r } = await EA({
            data: String(n.data),
            mediaType: n.mimeType,
            limits: t,
          });
          s.push(r);
        } catch {
          s.push(X("could not be decoded"));
        }
      else s.push(X(`unsupported type ${n.mimeType ?? "unknown"}`));
  return s;
}
function he(e) {
  if (!Array.isArray(e.actions)) return !1;
  return e.actions.some((o) => {
    if (!T(o) || typeof o.name !== "string") return !0;
    return (
      o.name === "browser_batch" ||
      (tye.has(o.name) && !ACe(o.name, T(o.input) ? o.input : {}))
    );
  });
}
function J(e, o) {
  return {
    source: o,
    ruleBehavior: "allow",
    ruleValue: { toolName: g7, ruleContent: e },
  };
}
function ee(e, o, t) {
  let s = jgt(e, o);
  return t
    ? `Allow Claude in Chrome to ${s} on ${t}?`
    : `Allow Claude in Chrome to ${s}?`;
}
function ge(e, o) {
  return async (t) => {
    let s;
    try {
      s = new URL(t.url);
    } catch {}
    let n = !!s?.host && e.has(B$(s.host)) && !p7r(o, B$(ARn({ url: s.href })));
    if (!n) m("chrome_permission_prompt", "stale_host_mismatch");
    return n;
  };
}
function Ce(e, o) {
  if (e !== "browser_batch") return e === "navigate";
  let t = T(o) ? o.actions : void 0;
  return Array.isArray(t) && t.some((s) => T(s) && s.name === "navigate");
}
async function we(e, o, t, s, n, r, p) {
  let g = Fi().bridgeBinding;
  if (!g)
    throw (
      m("chrome_permission_prompt", "binding_missing"),
      Error("Claude in Chrome bridge is not initialized in this session.")
    );
  if (t.aborted) throw new Ie("Claude in Chrome tool call aborted");
  let c,
    d = new Promise((I, w) => {
      ((c = () => w(new Ie("Claude in Chrome tool call aborted"))),
        t.addEventListener("abort", c, { once: !0 }));
    }),
    a,
    h = r?.mark("external");
  try {
    a = await Promise.race([
      P8r(g.context, g.socketClient, e, Yso(o ?? {}), n),
      d,
    ]);
  } finally {
    if ((h?.(), Ce(e, o))) Fi().lastNavigateEndedAt = Gi.monotonicNow();
    if (c) t.removeEventListener("abort", c);
  }
  if (a.isError) {
    let I =
        (a.content ?? []).flatMap((R) => (R.type === "text" ? [R.text] : []))
          .join(`
`) || `${e} failed`,
      w = a._meta,
      v = w?.toolCallFailureCause,
      S =
        w?.isBridgeTimeout === !0
          ? "bridge_timeout"
          : w?.isFrontLoadBoundExceeded === !0
            ? "front_load_bound_exceeded"
            : v === "connection_lost_mid_call" ||
                v === "connection_lost_before_call"
              ? v
              : void 0,
      k = T(w) ? PH(w) : void 0;
    throw Object.assign(
      new Bm(
        I,
        "Claude in Chrome tool returned error",
        k ? { _meta: k } : void 0,
        `chrome_${S ?? ior(e, I)}`,
      ),
      { mcpErrorSource: "other" },
    );
  }
  let y = await be(await $oi(a, p), s),
    M = PH(a._meta);
  return { data: y, ...(M && { mcpMeta: { _meta: M } }) };
}
function dni(e) {
  let o = `${d0}${e}`;
  return {
    checkPermissions: async (n, r) => {
      a7r(r.options?.messageClientPlatform);
      let p = r.toolUseId,
        g = tye.has(e);
      if (g && ACe(e, n)) {
        let _ = Z(r);
        if (
          _?.chromeHostToolAsksEnabled !== !1 &&
          _?.mcpAskForTools?.[Xi]?.includes(e) === !0 &&
          !EI(_) &&
          _.mode !== "dontAsk"
        )
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            suppressAlwaysAllowRule: !0,
            decisionReason: {
              type: "other",
              reason: "Claude in Chrome action",
            },
            metadata: { command: { name: o, description: ee(e, n, void 0) } },
          };
        return { behavior: "allow", updatedInput: n };
      }
      let c = (g && !ACe(e, n)) || (e === "browser_batch" && he(n));
      if (
        e === "navigate" &&
        typeof n.url === "string" &&
        (n.url.trim().toLowerCase() === "back" ||
          n.url.trim().toLowerCase() === "forward")
      )
        return { behavior: "allow", updatedInput: n };
      let d = e === "browser_batch" ? nsr(n) : { input: n, toolName: e },
        a;
      if (d && d.toolName === "navigate" && typeof d.input.url === "string") {
        if (((a = SJt(d.input.url)), !a))
          return (
            m("chrome_permission_prompt", "non_web_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable URL",
                classifierApprovable: !1,
              },
            }
          );
      } else if (d && typeof d.input.tabId === "number") {
        let _ = await z(d.input.tabId);
        if (!_.ok)
          return (
            m(
              "chrome_permission_prompt",
              `tab_url_unresolved_${_.failure}`,
              q(_),
            ),
            V(_, r)
          );
        if (((a = SJt(_.url)), !a))
          return (
            m("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: !1,
              },
            }
          );
      }
      let h = Z(r),
        y = da(
          r.options?.tools?.find((_) => gt(_, o)),
          h,
        ),
        M =
          y === "bypassPermissions" ||
          OM(y, h.isBypassPermissionsModeAvailable),
        I =
          h.chromeNavigationClassifierEnabled === !0 &&
          !M &&
          (h.chromeClassifierFloorEnabled === !0 || Jr(y)),
        w,
        v,
        S = () => {
          if (!p) return;
          if (v === void 0) Fi().resolvedUrlByToolUseId.delete(fZ(p));
          else ie(p, v);
          if (w === void 0) iQt(p);
        };
      if (I) {
        let _ = de(e, n);
        if (_.kind === "deny")
          return (
            m("chrome_permission_prompt", _.code),
            S(),
            {
              behavior: "deny",
              message: ce[_.code],
              decisionReason: {
                type: "safetyCheck",
                reason: `Claude in Chrome: ${_.code}`,
                classifierApprovable: !1,
              },
            }
          );
        if (_.kind === "tab") {
          let C =
              a && d?.toolName !== "navigate" && d?.input.tabId === _.tabId
                ? { ok: !0, url: a.url, connectMs: 0, callMs: 0 }
                : await z(_.tabId),
            B = C.ok ? SJt(C.url) : void 0;
          if (B === void 0)
            return (
              m(
                "chrome_permission_prompt",
                `tab_url_unresolved_${C.ok ? "non_web_tab_url" : C.failure}`,
                q(C),
              ),
              S(),
              V(C, r)
            );
          if (((w = H(oor(), B.url)), !(c && h.mode === "plan"))) v = B.url;
        }
      }
      S();
      let k = e === "browser_batch" ? a8o(n) : [];
      if (k === "unvettable")
        return (
          m("chrome_permission_prompt", "non_web_url"),
          {
            behavior: "deny",
            message:
              "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: non-web or unparseable URL",
              classifierApprovable: !1,
            },
          }
        );
      let R = Fue(h),
        L = [...(a ? [a.host, ARn(a)] : []), ...k]
          .map((_) => yTe(R, _))
          .find((_) => _ !== void 0);
      if (L) return (l("chrome_permission_prompt", "domain_rule_denied"), L);
      let E = !1,
        U;
      if (a) {
        let _ = B$(a.host),
          C = R.sourceOf.get(_) ?? "session";
        if (
          ((E = R.allowed.has(_)),
          (U = E ? J(a.host, C) : void 0),
          E && w === void 0 && h.chromeClassifierFloorEnabled !== !0 && !c)
        ) {
          if (p) G(p, a);
          return {
            behavior: "allow",
            updatedInput: n,
            decisionReason: { type: "rule", rule: J(a.host, C) },
          };
        }
        if (p && (E || h.chromeClassifierFloorEnabled === !0 || !j(h, o)))
          G(p, a);
      }
      let P = Fi().bridgeBinding;
      if (
        p &&
        P &&
        !M &&
        !(h.chromeClassifierFloorEnabled !== !0 && j(h, o)) &&
        (await zUa(r.abortController.signal))
      )
        return {
          behavior: "deny",
          message: P.context.onToolCallDisconnected(),
          decisionReason: {
            type: "other",
            reason: "Claude in Chrome: no browser connected",
          },
        };
      let O = await s7r(e, n, r, h, () => KUa(r.abortController.signal));
      if (O !== void 0) return O;
      if (c && h.mode === "plan")
        return {
          behavior: "passthrough",
          message: "Claude in Chrome requires permission.",
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: o, ruleContent: void 0 }],
              behavior: "allow",
              destination: "session",
            },
          ],
        };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: a
          ? E
            ? void 0
            : [
                {
                  type: "addRules",
                  rules: [{ toolName: g7, ruleContent: a.host }],
                  behavior: "allow",
                  destination: "session",
                },
              ]
          : [
              {
                type: "addRules",
                rules: [{ toolName: o, ruleContent: void 0 }],
                behavior: "allow",
                destination: "session",
              },
            ],
        decisionReason: w
          ? {
              type: "safetyCheck",
              reason: "Claude in Chrome: cross-site navigation pending",
              classifierApprovable: !0,
            }
          : {
              type: "other",
              reason: a ? jwo + a.host : "Claude in Chrome action",
            },
        metadata: {
          command: {
            name: o,
            description: ee(e, n, a?.host),
            chrome: a
              ? {
                  ...a,
                  domainAllowed: E,
                  navigation: w,
                  ...(U && {
                    grantRule: U,
                    classifierUnavailable:
                      h.chromeClassifierFloorEnabled === !0 &&
                      h.canAutoClassifierRun === !1,
                  }),
                }
              : void 0,
          },
        },
      };
    },
    call: async (n, r, p, g, c, d) => {
      let a = r.toolUseId && fZ(r.toolUseId),
        h = a ? Fi().resolvedHostByToolUseId.get(a) : void 0,
        y = h?.host,
        M = a ? Fi().resolvedUrlByToolUseId.get(a) : void 0;
      if (a)
        (Fi().resolvedHostByToolUseId.delete(a),
          Fi().resolvedUrlByToolUseId.delete(a));
      if (
        ue() &&
        pV({
          agentId: r.agentId,
          stickyBetas: r.stickyBetas,
          namesShownToApi: r.namesShownToApi,
          toolName: o,
        })
      )
        throw new A(
          pV() ? Nbe() : Bbr(),
          "Claude in Chrome call refused in REPL mode",
        );
      let I = i7r(r.permissionPhase, n);
      if (I !== void 0) return I;
      await cni();
      let w = Z(r),
        v = Fue(w),
        S = v.allowed,
        k = [...v.allowedRaw],
        R =
          h &&
          [h.host, h.url === void 0 ? `${h.host}:80` : ARn({ url: h.url })]
            .map((C) => yTe(v, C))
            .find((C) => C !== void 0);
      if (R)
        throw (
          l("chrome_permission_prompt", "domain_rule_denied"),
          new A(R.message, "Claude in Chrome call refused under a deny rule")
        );
      if (y && !S.has(B$(y))) (S.add(B$(y)), k.push(y));
      let L = r.options?.tools?.find((C) => gt(C, o)),
        E = da(L, w),
        U =
          E === "bypassPermissions" ||
          (E === "auto" &&
            r.autoModeClassified === !0 &&
            y !== void 0 &&
            v.denied.size === 0 &&
            h?.keepHostPin !== !0),
        P = re(),
        O = U
          ? { permissionMode: "skip_all_permission_checks", sessionScope: P }
          : y
            ? {
                permissionMode: "follow_a_plan",
                allowedDomains: k,
                onPermissionRequest: ge(S, v.denied),
                sessionScope: P,
              }
            : k.length > 0
              ? {
                  permissionMode: "follow_a_plan",
                  allowedDomains: k,
                  sessionScope: P,
                }
              : { permissionMode: "ask", sessionScope: P },
        _ = await we(
          e,
          n,
          r.abortController.signal,
          r.modelFacts.model,
          O,
          d?.timing,
          r,
        );
      if (M !== void 0) {
        let C = oor();
        if (Z_(r) === void 0 || !Fi().lastExecutedTabUrlByScope.has(C)) D(C, M);
      }
      if (y) u("chrome_permission_prompt");
      return _;
    },
    ignoresWholeToolAllowRule: (n) => tye.has(e) && ACe(e, n),
  };
}
export { WXl, dni };
