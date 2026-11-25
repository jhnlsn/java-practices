// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Oe, Os } from "/$bunfs/root/chunk-cqahc80t.js";
import { V, Se } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { u, fe } from "/$bunfs/root/chunk-y98mhv74.js";
import { Jt } from "/$bunfs/root/chunk-q3pjyhpy.js";
import { s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { Ee, Ec, Zl } from "/$bunfs/root/chunk-cd3hqxcc.js";
import {
  ct,
  QSe,
  Dd,
  _t,
  Vt,
  ih,
  Ng,
  ec,
  wn,
  dr,
  tC,
  s5,
  Zt,
  Bs,
  b,
  Uw,
  me,
} from "/$bunfs/root/chunk-aq3ms068.js";
import { ws, en } from "/$bunfs/root/chunk-jngxzq9c.js";
import { a } from "/$bunfs/root/chunk-487kez16.js";
import { f, l } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { lN } from "/$bunfs/root/chunk-rqs3939j.js";
import { Xi } from "/$bunfs/root/chunk-0v6g5ynk.js";
import { ku } from "/$bunfs/root/chunk-t39fw2cy.js";
import { Cle } from "/$bunfs/root/chunk-ex299d27.js";
import { DE, Ilt, Dr, Cf } from "/$bunfs/root/chunk-d1scfh43.js";
import { ye, hm, qF } from "/$bunfs/root/chunk-pxy9yt8m.js";
import { AI } from "/$bunfs/root/chunk-a9w6x5dz.js";
import { mS, Dae } from "/$bunfs/root/chunk-w03c3634.js";
import { po, CRe, Zb } from "/$bunfs/root/chunk-r3ggct44.js";
import { Asn } from "/$bunfs/root/chunk-dt01kn47.js";
import { ONn } from "/$bunfs/root/chunk-780wwpzh.js";
import { um } from "/$bunfs/root/chunk-hjygr1qe.js";
import { S_, F3 } from "/$bunfs/root/chunk-tsby2qjm.js";
import { Yo, Zi } from "/$bunfs/root/chunk-gsktpex7.js";
import { OM } from "/$bunfs/root/chunk-c76p2516.js";
import { uie, olo, Knl, cas } from "/$bunfs/root/chunk-mjpt6p5c.js";
import { cg } from "/$bunfs/root/chunk-7vfh1k4y.js";
import { OPe } from "/$bunfs/root/chunk-pv8323n1.js";
import { XGr } from "/$bunfs/root/chunk-0cw29n2z.js";
import { v0n, oTi } from "/$bunfs/root/chunk-pmma51a8.js";
import { nXn } from "/$bunfs/root/chunk-w1mb2fsc.js";
import { Jd } from "/$bunfs/root/chunk-v16rzw0k.js";
import { wye } from "/$bunfs/root/chunk-ngf9mksb.js";
import { xd, iA, z2e, By } from "/$bunfs/root/chunk-bpdncsrm.js";
import { ve } from "/$bunfs/root/chunk-5hv562wg.js";
import { Uh } from "/$bunfs/root/chunk-e08hgx8f.js";
import { de } from "/$bunfs/root/chunk-pb0k2vmd.js";
var M0l = "tengu_rustling_blossom",
  D = 5000,
  _ = "retried",
  o = de(
    {
      reviewed: !1,
      policyPrincipal: void 0,
      signedInAs: void 0,
      askedIn: void 0,
      restarted: !1,
      restartedFrom: void 0,
    },
    (e) => {
      ((e.reviewed = !1),
        (e.policyPrincipal = void 0),
        (e.signedInAs = void 0),
        (e.askedIn = void 0),
        (e.restarted = !1),
        (e.restartedFrom = void 0));
    },
  );
function i(e) {
  if (e === void 0) return "unset";
  let n = String(e).trim();
  if (n === "" || Os(n)) return "off";
  return Oe(n) ? "on" : "bad";
}
function O(e, n) {
  if (e === void 0) return;
  if (e[n] !== void 0) return e[n];
  let t = Object.keys(e).find((r) => r.toUpperCase() === n);
  return t === void 0 ? void 0 : e[t];
}
function p(e) {
  return O(e, lN);
}
function y(e) {
  return en(e) ? p(ye(e)?.env) : void 0;
}
function m() {
  return (
    qF() ||
    hm().some((e) => {
      let n = i(p(e.env));
      return n === "off" || n === "bad";
    })
  );
}
function P() {
  return i(p(F3())) === "on" || hm().some((e) => i(p(e.env)) === "on");
}
function G() {
  let e = [
    { source: "flagSettings", kind: i(y("flagSettings")) },
    { source: "userSettings", kind: i(y("userSettings")) },
    { source: "shell", kind: i(p(S_())) },
  ];
  if (e[2].kind === "off")
    return { state: "not_asked", turnedOffIn: m() ? "managed" : "shell" };
  if (e.some((d) => d.kind === "off") || i(p(F3())) === "off")
    return { state: "not_asked", turnedOffIn: "settings" };
  let n = P(),
    t = e.find(
      (d) =>
        d.kind !== "unset" && !(d.source === "shell" && d.kind === "on" && n),
    ),
    r = m();
  if (t === void 0) {
    if (r) return { state: "not_asked", turnedOffIn: "managed" };
    if (e[2].kind !== "on") return { state: "not_asked" };
    return ((o.askedIn = "shell"), { state: "refused", why: "own_settings" });
  }
  if (((o.askedIn = t.source), r)) return { state: "refused", why: "admin" };
  let E = i(OPe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE);
  if (t.kind === "bad" || E === "bad")
    return { state: "refused", why: "bad_value" };
  if (E !== "on") return { state: "not_asked", turnedOffIn: "settings" };
  return { state: "asked", source: t.source };
}
function $3n(e) {
  return [_t(e, { identity: !0 }), _t(e)].some((n) => {
    let t = xd(n);
    if (!iA(t)) return !1;
    let r = t.family === "fable" || t.family === "mythos" ? 2 : 5;
    return z2e(t, { major: 5, minor: r }) >= 0;
  });
}
function M() {
  return Ee() === "firstParty" && Ec() && !s5();
}
function H() {
  return hm().some((e) => {
    let n = O(e.env, "ANTHROPIC_BASE_URL");
    return (
      By.some((t) => Oe(O(e.env, t))) ||
      (typeof n === "string" && n !== "" && !Zl(n))
    );
  });
}
function X() {
  return Uh();
}
function T() {
  return b(M0l, !0) !== !0;
}
function v() {
  return !um() || ku();
}
function k() {
  return CRe() && !Zb();
}
function I() {
  return po("hipaa");
}
function Y() {
  return Ng() !== void 0 || mS() || Dae();
}
function R() {
  let e = hm().map((t) => t.env ?? {}),
    n = [process.env, ...e];
  return (
    (n.some((t) => Oe(t.CLAUDE_CODE_ENABLE_TELEMETRY)) &&
      n.some((t) =>
        Oe(
          t.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ??
            t.ENABLE_ENHANCED_TELEMETRY_BETA,
        ),
      )) ||
    OM() ||
    (n.some((t) => Oe(t.ENABLE_BETA_TRACING_DETAILED)) &&
      n.some((t) => t.BETA_TRACING_ENDPOINT) &&
      e.some((t) => t.ENABLE_BETA_TRACING_DETAILED || t.BETA_TRACING_ENDPOINT))
  );
}
function L() {
  let e = me();
  return (
    e.codeModeCaveatsAcceptedV1 === !0 &&
    e.codeModeAutoModeCaveatAcceptedV1 === !0
  );
}
function c(e) {
  if ((olo(e), e.state === "refused")) w(e);
}
function w(e) {
  if (
    (a("tengu_repl_mode_opt_in", {
      state: u(e.state),
      why: fe(e.state === "refused" ? e.why : void 0),
      source: fe(o.askedIn),
      restarted: o.restarted,
      restarted_from: ve(o.restartedFrom),
    }),
    e.state === "on")
  )
    f("repl_mode_opt_in");
  else if (e.state === "refused") l("repl_mode_opt_in", e.why);
}
function z() {
  let e = OPe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART;
  return (
    OPe.unset("CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART"),
    (o.restartedFrom =
      e === void 0
        ? void 0
        : OPe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTARTED_FROM),
    OPe.unset("CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTARTED_FROM"),
    e
  );
}
function h(e) {
  let { toolName: n, ruleContent: t } = Dr(e);
  return t === void 0 && N(n);
}
function N(e) {
  return Zi(e) || (DE(e) && Ilt(e, Yo));
}
function K(e) {
  if (nXn(e.join(" ").trim()) !== null) return !0;
  let { kept: n, excluded: t } = XGr(Cf(e));
  return (n.some(Zi) || n.includes("preset:default")) && ![...t].some(N);
}
function wjl({ restricted: e, disallowedTools: n, baseTools: t }) {
  return (
    e ||
    Cf(n).some(h) ||
    (t.length > 0 && !K(t)) ||
    ws.some((r) => en(r) && ye(r)?.permissions?.deny?.some(h) === !0)
  );
}
function B(e, n) {
  if (!X()) return "runtime";
  if (!Jd()) return "no_bash";
  if (s.CLAUDE_CODE_REMOTE) return "entrypoint";
  if (
    Xi() !== "cli" ||
    Se() ||
    e.thinClient ||
    s.ANTHROPIC_UNIX_SOCKET !== void 0
  )
    return "entrypoint";
  if (
    Zt() ||
    e.teammate ||
    e.remoteControl ||
    s.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0
  )
    return "unattended";
  if (Oe(!1) || s.IS_DEMO !== void 0 || s.CLAUBBIT) return "no_setup";
  if (e.toolsLeaveReplOut) return "tools";
  if ((n || oTi()) && v0n() !== "passed") return "engine";
  if (!M()) return "provider";
  if (Y()) return "credentials";
  if (I()) return "compliance";
  if (R()) return "otel";
  let t =
    e.cliModel === void 0
      ? ct()
      : e.cliModel === "default"
        ? Vt(QSe() ?? Dd())
        : Vt(e.cliModel);
  return $3n(t) ? void 0 : "model";
}
async function kjl(e) {
  let n = z();
  o.restarted = n !== void 0;
  let t = (x) => c({ state: "refused", why: x }),
    r = G(),
    E = OPe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE !== void 0,
    d = n === _;
  if (n !== void 0 && n !== _ && E) return t(n);
  if (r.state !== "asked") return c(r);
  let C = B(e, !0);
  if (C !== void 0) {
    if (C === "engine") l("repl_engine_check", v0n(), { held: !0 });
    return t(C);
  }
  let S = T();
  if (S || !L()) {
    if (d) return t(S ? "gate" : "unsaved");
    return Knl();
  }
  (c({ state: "on", source: r.source }), Cle());
}
function Ejl(e) {
  if (m()) return "admin";
  if (P()) return "own_settings";
  let n = B(e, !1);
  if (n !== void 0) return n;
  return T() ? "gate" : void 0;
}
async function W() {
  let e = (n) => Jt(n, D, "opt-in wait").catch(() => {});
  if (
    (await Promise.all([wye({ initialize: Bs, budgetMs: D }), e(cg()), ONn()]),
    !CRe() && ih() !== void 0)
  )
    return "credentials";
  if (!v() || !k()) return "admin_unread";
  if (m()) return "admin";
  if (I()) return "compliance";
  if (R()) return "otel";
  if (!M()) return "provider";
  if (!$3n(ct())) return "model";
  return T() ? "gate" : void 0;
}
async function vjl() {
  let e = uie().state === "on";
  if (!e && !cas()) return "none";
  let n = await W();
  if (((o.reviewed = !0), (o.policyPrincipal = U()), n !== void 0)) {
    if (e) return g(n, "restart_without_mode");
    return (c({ state: "refused", why: n }), "none");
  }
  if (e) return (w(uie()), "none");
  return L() ? g(_, "restart_into_mode") : "ask";
}
async function jLo(e, n) {
  if (!cas() || !o.reviewed) return "none";
  if (!e) return (c({ state: "refused", why: "declined" }), "none");
  if (
    !(await Uw(
      (r) => ({
        ...r,
        codeModeCaveatsAcceptedV1: !0,
        codeModeAutoModeCaveatAcceptedV1: !0,
      }),
      n,
    ))
  )
    return (c({ state: "refused", why: "unsaved" }), "none");
  return g(_, "restart_into_mode");
}
async function g(e, n) {
  return (
    OPe.set("CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART", e),
    OPe.set("CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTARTED_FROM", V()),
    await Jt(AI(), 2000, "write queue drain timeout (opt-in restart)").catch(
      () => {},
    ),
    n
  );
}
function U() {
  try {
    return { read: !0, id: Asn() };
  } catch {
    return { read: !1 };
  }
}
function j() {
  let e = o.policyPrincipal;
  if (e === void 0) return;
  if (!e.read) return "unread";
  let n = U();
  if (!n.read) return "unread";
  return n.id === e.id ? void 0 : "changed";
}
async function Tjl() {
  if (uie().state !== "on")
    return (
      c(cas() ? { state: "refused", why: "no_setup" } : { state: "not_asked" }),
      "none"
    );
  let e = j(),
    n = !o.reviewed
      ? "no_setup"
      : !v() || !k() || e === "unread"
        ? "admin_unread"
        : e === "changed"
          ? "credential_changed"
          : m()
            ? "admin"
            : I()
              ? "compliance"
              : R()
                ? "otel"
                : !M() || H()
                  ? "provider"
                  : !$3n(ct())
                    ? "model"
                    : void 0;
  if (n === void 0) return ((o.signedInAs = F()), "none");
  return g(n, "restart_without_mode");
}
function F() {
  let e = wn();
  return {
    accountUuid: e?.accountUuid,
    organizationUuid: e?.organizationUuid,
    subscriptionType: dr(),
    rateLimitTier: tC(),
  };
}
function Cjl() {
  let e = o.signedInAs;
  if (e === void 0) return !1;
  let n = F();
  return (
    ec(e, n) &&
    e.subscriptionType === n.subscriptionType &&
    e.rateLimitTier === n.rateLimitTier
  );
}
export { M0l, $3n, wjl, kjl, Ejl, vjl, jLo, Tjl, Cjl };
