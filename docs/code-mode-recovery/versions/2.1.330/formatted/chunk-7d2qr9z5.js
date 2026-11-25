// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import {
  dt,
  az,
  W7e,
  xa,
  UGe,
  F0,
  o_,
  tr,
  Rt,
  Qf,
  Xxe,
  cz,
  txs,
  RX,
  ni,
  Lc,
  DPr,
  gn,
  b,
  FC,
  JU,
  gxo,
  ge,
  nAt,
  H3i,
  i6n,
  a6n,
  sAt,
} from "/$bunfs/root/chunk-865at33z.js";
import { Ne } from "/$bunfs/root/chunk-69qhefwa.js";
import { CL, P3n, Hn } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { d } from "/$bunfs/root/chunk-jv7av99m.js";
import { qt, me } from "/$bunfs/root/chunk-5appeerh.js";
import { Xn, zK } from "/$bunfs/root/chunk-2gtmjt3y.js";
import { s } from "/$bunfs/root/chunk-c203g5kd.js";
import { uP } from "/$bunfs/root/chunk-ephf358x.js";
import { pse, t } from "/$bunfs/root/chunk-w578pjby.js";
import { X4n, J4n, i } from "/$bunfs/root/chunk-k449cc64.js";
import { jo } from "/$bunfs/root/chunk-t39bs2jr.js";
import { IEe } from "/$bunfs/root/chunk-9zdrdv25.js";
import { Qb } from "/$bunfs/root/chunk-gd77dyw4.js";
import { pce, Cea, WJe, wqn, hDr, Wy } from "/$bunfs/root/chunk-xcgcdx61.js";
import { vi } from "/$bunfs/root/chunk-r3kja8v6.js";
import { vr, tx, POe, ve, jn, cQe, pc } from "/$bunfs/root/chunk-zhr7rpv7.js";
import { eL, d8 } from "/$bunfs/root/chunk-2zeyvjwb.js";
import { c8 } from "/$bunfs/root/chunk-9b4aq7fb.js";
import { Ar } from "/$bunfs/root/chunk-n5qd9b6p.js";
import {
  njn,
  T1,
  oCr,
  MS,
  eD,
  Owe,
  Rn,
  hw,
  v9,
  rGe,
  Dp,
  Q2i,
  ba,
  xEo,
  iun,
  eGi,
  DC,
  Iwe,
} from "/$bunfs/root/chunk-2nv4wrez.js";
import { ELi } from "/$bunfs/root/chunk-qwcebyxc.js";
import { Jae, dms, AIi } from "/$bunfs/root/chunk-8kp03twd.js";
import { glt } from "/$bunfs/root/chunk-fm523nqz.js";
import { Pe } from "/$bunfs/root/chunk-sghy0qej.js";
import { _ct, FXe, qNe, lVt } from "/$bunfs/root/chunk-4jzbgp2v.js";
import { RPe } from "/$bunfs/root/chunk-hz25f5zd.js";
import { vB } from "/$bunfs/root/chunk-r3mm3x33.js";
var J = "tengu_reflective_wolf";
function yFn() {
  let e = Ar();
  return (
    (e.attributionAnnouncementEnabled ??=
      s.CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT ?? b(J, !0)),
    e.attributionAnnouncementEnabled
  );
}
function Smo(e) {
  let n = yFn() ? i6n() : void 0,
    o = dt();
  if ((e(), n === void 0 || dt() === o)) return;
  return (H3i(n, { forContextWindow: !0 }), n);
}
function k(e, n, o) {
  let r = import("/$bunfs/root/chunk-na3hn26q.js")
    .then(({ refreshBootstrapData: a }) => a(e, n, { renderedClientData: o }))
    .then(
      () => {},
      (a) => i(a),
    );
  return (tBt(dt(), r), r);
}
function bmo(e, n, o) {
  return k(e, n, o);
}
function Zdl(e) {
  vr().fetchesClientData = e;
}
function wmo() {
  return vr().fetchesClientData && ve() === "firstParty";
}
function tBt(e, n, { replacesEntry: o = !1 } = {}) {
  let r = a6n(e),
    {
      clientDataFetches: a,
      clientDataReplacements: u,
      clientDataFetchesRunning: f,
    } = vr().providerCache;
  if (
    (f.add(n),
    Promise.allSettled([n]).then(() => f.delete(n)),
    r !== void 0 && (o || !(a.get(r) instanceof Promise)))
  ) {
    let p = CL();
    if ((a.set(r, n), o)) u.add(n);
    n.finally(() => {
      if (a.get(r) === n)
        if (CL() === p) a.set(r, "over");
        else a.delete(r);
    });
  }
}
function M() {
  return [...vr().providerCache.clientDataFetches.values()].filter(
    (e) => e !== "over",
  );
}
function ecl(e) {
  let n = vr().providerCache.clientDataFetches;
  for (let [o, r] of n) if (r === e) n.set(o, "over");
}
function rIi(e) {
  let n = a6n(e);
  if (n === void 0 || !wmo()) return !0;
  let { clientDataFetches: o, clientDataReplacements: r } = vr().providerCache,
    a = o.get(n);
  if (a instanceof Promise && r.has(a)) return !1;
  return sAt(e) || a === "over";
}
function tcl(e, n, o) {
  let r = a6n(e);
  if (r === void 0 || !wmo()) return;
  let a = vr().providerCache.clientDataFetches;
  if (!a.has(r) && !gxo(ge().clientDataCacheSlots, r))
    tBt(
      e,
      import("/$bunfs/root/chunk-na3hn26q.js").then(
        ({ fetchClientDataEntry: f }) => f(e, n, o),
        (f) => i(f),
      ),
    );
  let u = a.get(r);
  return u === "over" || rIi(e) ? void 0 : u;
}
function kmo(e, n) {
  try {
    let o = dt(),
      r = a6n(o);
    if (
      r !== void 0 &&
      wmo() &&
      !sAt(o) &&
      !vr().providerCache.clientDataFetches.has(r)
    )
      k(e, n, i6n());
  } catch (o) {
    i(o);
  }
}
function FH() {
  if (!jn()) return !1;
  if (T1() !== void 0) return !0;
  if (s.ANTHROPIC_UNIX_SOCKET) return !1;
  return pc();
}
function pin() {
  return FH() && _() && (b("tengu_ccr_bridge", !1) || A());
}
function A() {
  if (!S() || !FH() || ue()) return !1;
  let e = U();
  if (e !== null)
    return L.includes(e) && ((e !== "team" && e !== "enterprise") || MS());
  if (!C() || !y()?.organizationUuid) return !1;
  try {
    let n = tr(),
      o = n?.refreshToken ? (n.subscriptionType ?? null) : null;
    return o !== null && L.includes(o);
  } catch {
    return !1;
  }
}
function S() {
  return !Lc() && zK() === null && X4n() === "no-telemetry" && !cz();
}
function U() {
  let e = P3n(),
    n = e?.named;
  if (!n || e?.bearerSha256 !== O()) return null;
  return (
    s.CLAUDE_CODE_ORGANIZATION_UUID || y()?.organizationUuid
  )?.toLowerCase() === n.organizationUuid.toLowerCase()
    ? n.subscriptionType
    : null;
}
function H() {
  let e = P3n();
  return (
    e !== null &&
    e.bearerSha256 === O() &&
    (e.named !== null || Date.now() - e.answeredAtMs < G)
  );
}
function K() {
  return S() && U() !== null;
}
function O() {
  try {
    let e = tr();
    return e && !e.refreshToken && e.accessToken !== IEe ? Xxe() : null;
  } catch {
    return null;
  }
}
var Q = 6000,
  G = 60000;
async function Y(e) {
  if (O() === null || !S() || H()) return;
  await me(
    Promise.allSettled(M()).then(async () => {
      if (e !== void 0) (await x(e), await x(e));
    }),
    Q,
  );
}
function x({ storageV5: e, credentials: n }) {
  let o = O();
  if (o === null || H()) return;
  let r = jo();
  if (
    r.bearerPlanFetch?.bearerSha256 !== o ||
    Date.now() - r.bearerPlanFetch.startedAtMs >= G
  )
    r.bearerPlanFetch = {
      bearerSha256: o,
      startedAtMs: Date.now(),
      answered: import("/$bunfs/root/chunk-na3hn26q.js")
        .then(({ refreshBootstrapData: a }) =>
          a(e, n, { keepRenderCaches: !0 }),
        )
        .then(
          () => {},
          (a) => i(a),
        ),
    };
  return r.bearerPlanFetch.answered;
}
var L = ["pro", "max", "team", "enterprise"];
function Dyr() {
  if (pin()) return null;
  if (!h()) return "not_signed_in";
  if (!_()) return "api_key_auth";
  if (!C()) return "no_profile_scope";
  return "not_in_rollout";
}
function g() {
  return !1;
}
function CG() {
  return vB()?.settings.disableRemoteControl === !0;
}
function mN() {
  if (_je()) return !1;
  if (g()) return !0;
  if (vi()) return !1;
  return v();
}
function v() {
  if (CG()) return !1;
  return !AG() && pin();
}
function Lyr() {
  return vi() && !_je() && !g() && v() && iit() === "allowed";
}
function oIi() {
  {
    let e = D();
    return (e === "earlier_sign_in" || e === "connection") && v();
  }
  return !1;
}
function sIi() {
  if (g()) return !0;
  return !CG() && !AG() && FH();
}
async function Yps(e) {
  if (_je()) return "not_signed_in";
  if (g()) return null;
  if (vi()) return "repl_mode";
  if (CG()) return "managed_disabled";
  if (!FH()) return "not_first_party";
  if (AG()) return "cloud_session";
  if (!_()) return h() ? "not_subscription_auth" : "not_signed_in";
  if ((await Y(e), A() || (await FC("tengu_ccr_bridge")))) return null;
  if (!Lc()) return "flags_disabled";
  return ni() ? "gate_off" : "flags_unreachable";
}
var z =
    "Remote Control is disabled by your organization's policy. Contact your organization admin for access.",
  Z = 86400000,
  ee = 2147483647;
function V() {
  return Iwe();
}
function Emo() {
  let { featureLabel: e, verb: n } = Owe("allow_remote_control");
  return _ct(e, n, eL(), z);
}
function r8e(e) {
  {
    let o = D();
    if (o !== void 0)
      return {
        policy: "allow_remote_control",
        kind: "hybrid_organization",
        detail: {
          sign_in:
            "Remote Control was turned off because this session now uses an organization sign-in (not a claude.ai login).",
          connection:
            "Remote Control was turned off because this session still uses a connection from an organization.",
          earlier_sign_in:
            "Remote Control was turned off because this session used an organization sign-in.",
        }[o],
      };
  }
  let n = e
    ? ["allow_remote_control", "allow_remote_sessions"]
    : ["allow_remote_control"];
  try {
    for (let o of n) {
      let r = ba(o);
      switch (r) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched": {
          if (!v9() && !N()) continue;
          let { featureLabel: a, verb: u } = Owe(o);
          return { policy: o, kind: r, detail: FXe(a, u) };
        }
        case "org_denied":
          if (DC()?.restrictions[o]?.allowed !== !1 && !v9() && !N()) continue;
          return {
            policy: o,
            kind: r,
            detail:
              o === "allow_remote_control"
                ? AIi
                : "Session mirroring was turned off by your organization's policy (allow_remote_sessions).",
          };
        default:
          return { policy: o, kind: "org_denied", detail: AIi };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function N() {
  let e = eD();
  return e !== void 0 && oCr.has(e);
}
var l = (e, n) => ({ reason: n, code: e, orgPolicyDenied: !1 });
async function SFn() {
  let e = bFn();
  if (e !== void 0) return l("not_signed_in", e);
  if (g()) return null;
  if (vi())
    return l(
      "repl_mode",
      `Remote Control isn't available in ${Qb} yet. ${ELi()}`,
    );
  if (!FH()) return l("not_first_party", le());
  if (AG())
    return l(
      "cloud_session",
      "Remote Control is not available inside a cloud session.",
    );
  if (CG()) return l("managed_disabled", Jae);
  let n = sql();
  if (n !== void 0) return l("not_signed_in", n);
  if (!h())
    return l(
      "not_signed_in",
      "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.",
    );
  if (!_())
    return l(
      "not_subscription_auth",
      ikt({
        prefix: "Remote Control requires claude.ai subscription auth.",
        suffix: "to use Remote Control.",
      }),
    );
  await Y(void 0);
  let o = K();
  if (!o && !C())
    return l(
      "token_scope_limited",
      glt() ??
        "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.",
    );
  if (!o && !y()?.organizationUuid)
    return l(
      "no_organization",
      "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.",
    );
  await Tpe();
  let r = iit();
  if (r === "unavailable") return l("policy_unverified", dms);
  if (r === "denied")
    return { reason: j(), code: "org_policy_denied", orgPolicyDenied: !0 };
  if (A()) return null;
  if (!Lc()) {
    let a = J4n() ?? zK();
    if (a)
      return l(
        "flags_disabled",
        `Remote Control requires feature-flag evaluation, which is disabled because ${a} is set. Unset it (or run in a shell without it) to use Remote Control.`,
      );
    return l(
      "flags_disabled",
      "Remote Control requires feature-flag evaluation, which is unavailable in this environment.",
    );
  }
  if (!(await FC("tengu_ccr_bridge"))) {
    if (!ni()) {
      if ((JU(), await FC("tengu_ccr_bridge"))) return null;
      if (!ni())
        return l(
          "flags_unreachable",
          "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.",
        );
    }
    return l(
      "gate_off",
      "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.",
    );
  }
  return null;
}
function D() {
  if (Wy() || wqn() !== null) return "sign_in";
  if (hDr().length > 0) return "connection";
  if (WJe()) return "earlier_sign_in";
  return;
}
function _je() {
  return D() !== void 0;
}
function iIi(e) {
  {
    let n = () => {
      try {
        let a = r8e(!1);
        if (a?.kind === "hybrid_organization") e(a);
      } catch (a) {
        (t(`[bridge] The watch for an organization sign-in threw: ${d(a)}`, {
          level: "error",
        }),
          i(a));
      }
    };
    n();
    let o = () => queueMicrotask(n),
      r = [Cea(o), pce(o)];
    return () => {
      for (let a of r) a();
    };
  }
  return () => {};
}
function bFn() {
  {
    let e = D();
    if (e === "sign_in")
      return "Remote Control needs a claude.ai login. It is not available under an organization sign-in.";
    if (e === "connection")
      return "Remote Control is not available until you restart Claude Code because this session still uses an organization's connection.";
    if (e === "earlier_sign_in")
      return "Remote Control is not available until you restart Claude Code because this session used an organization sign-in.";
  }
  return;
}
function sql() {
  let e = az();
  return e === void 0
    ? void 0
    : txs(e, "remote control can't start", {
        needs: "Remote control needs",
        toUse: "To use it",
      });
}
async function ne() {
  return (await SFn())?.reason ?? null;
}
function j() {
  try {
    if (rGe()) return lVt("Remote Control");
    if (xEo("allow_remote_control")) return FXe("Remote Control", "is");
    if (!V()) return qNe("Remote Control");
    if (!Q2i()) return z;
    return Emo();
  } catch {
    return dms;
  }
}
var te = "set by your organization's configuration, not an admin setting";
function oe({
  policyVerdict: e,
  policyDenialIsAuthoritative: n,
  currentTaints: o,
}) {
  if (e !== "denied" || !n) return !1;
  try {
    return !rGe() && !xEo("allow_remote_control") && RPe(o).length > 0;
  } catch {
    return !1;
  }
}
function min() {
  if (g()) return null;
  if (CG()) return Jae;
  let e = jo(),
    n = njn(),
    o = e.remoteControlLockReason;
  if (o !== void 0 && o.policyCacheRevision === n) return o.reason;
  let r = re();
  return (
    (e.remoteControlLockReason = { policyCacheRevision: n, reason: r }),
    r
  );
}
function re() {
  let e = iit();
  if (e === "allowed") return null;
  if (e === "unavailable") return dms;
  return j();
}
function aIi() {
  return Dp(
    "allow_remote_control",
    "Remote Control",
    "is",
    "Remote Control is disabled by your organization's policy.",
  );
}
function iZl() {
  if (!pse()) return "";
  let e = (n) => (n ? "set" : "unset");
  try {
    let n = tr(),
      o = Object.values(POe).filter((r) => Ne(process.env[r]));
    return [
      "",
      "[debug] Remote Control auth state:",
      `  isBareMode=${Xn()}`,
      `  hasOAuthAccessToken=${!!n?.accessToken}`,
      `  oauthScopes=${n?.scopes?.join(",") ?? "none"}`,
      `  hasClaudeAIInferenceScope=${h()}`,
      `  isClaudeAISubscriber=${_()}`,
      `  hasProfileScope=${C()}`,
      `  oauthAccount.organizationUuid=${y()?.organizationUuid ? "set" : "unset"}`,
      `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`,
      `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`,
      `  apiKeyHelper=${o_() ? "set" : "unset"}`,
      `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`,
      `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`,
      `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`,
      `  3P env=${o.length ? o.join(",") : "none"}`,
      ...ie(),
    ].join(`
`);
  } catch (n) {
    return `
[debug] failed to collect auth state: ${n}`;
  }
}
function ie() {
  let e = RX(),
    n = ae();
  return [
    `  featureFlagsEnabled=${Lc()}`,
    `  telemetryDisabledBy=${J4n() ?? "none"}`,
    `  featureFlagsDisabledBy=${zK() ?? "none"}`,
    `  featureFlagsFresh=${ni()}`,
    `  featureFlagCount=${Object.keys(e).length}`,
    `  featureFlagsLastFetched=${ni() ? "by this process" : n ? `${se(Date.now() - n)} ago` : "never"}`,
    `  tengu_ccr_bridge=${String(e.tengu_ccr_bridge ?? "unset")}`,
  ];
}
async function lIi() {
  if (AG() && !g())
    return { disabledReason: null, inRemoteSession: !0, checks: [] };
  (JU(), await Tpe());
  let e = await ne(),
    n = J4n() ?? zK(),
    o = FH(),
    r = !CG(),
    a = h(),
    u = _(),
    f = K(),
    p = f || C(),
    P = f || !!y()?.organizationUuid,
    m = iit(),
    B = V(),
    q = oe({
      policyVerdict: m,
      policyDenialIsAuthoritative: B,
      currentTaints: d8(),
    }),
    I = Lc(),
    E = A(),
    T = E || (await FC("tengu_ccr_bridge")),
    w = ni(),
    X = [
      {
        label: o
          ? "Connected to the Anthropic API (api.anthropic.com)"
          : "Not connected to the Anthropic API (api.anthropic.com)",
        ok: o,
      },
      {
        label: r
          ? "Not disabled by org policy (disableRemoteControl)"
          : "Disabled by org policy (disableRemoteControl)",
        ok: r,
      },
      {
        label: a ? "Signed in to claude.ai" : "Not signed in to claude.ai",
        ok: a,
      },
      {
        label: u
          ? "claude.ai subscription active"
          : "claude.ai subscription auth not active",
        ok: u,
      },
      {
        label: p
          ? "Sign-in includes the user:profile scope"
          : "Sign-in is missing the user:profile scope",
        ok: p,
      },
      { label: P ? "Organization found" : "Organization not found", ok: P },
      {
        label:
          m === "allowed"
            ? "Org policy allows Remote Control (allow_remote_control)"
            : m === "unavailable"
              ? "Org policy could not be verified (allow_remote_control)"
              : !B
                ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)"
                : "Org policy does not allow Remote Control (allow_remote_control)",
        ok: m === "allowed",
        detail: q ? te : void 0,
      },
      {
        label: I
          ? "Feature-flag evaluation enabled"
          : "Feature-flag evaluation disabled",
        ok: I || E,
        detail: n
          ? E
            ? `disabled by ${n}; Remote Control does not need it on a paid plan`
            : `disabled by ${n}`
          : void 0,
      },
      {
        label: T
          ? "Remote Control enabled for this account"
          : w
            ? "Remote Control not enabled for this account"
            : "Remote Control availability could not be verified",
        ok: T,
        detail: E
          ? "decided from your plan, feature flags are off"
          : w
            ? void 0
            : "no server response this session",
      },
    ];
  return {
    disabledReason:
      e !== null && o && r && a && u && p && P && m === "denied" && !B
        ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above."
        : e,
    inRemoteSession: !1,
    checks: X,
  };
}
function ae() {
  try {
    let e = ge();
    return e.cachedGrowthBookFeatures != null
      ? e.cachedGrowthBookFeaturesAt
      : e.cachedFeatureFlagsAt;
  } catch {
    return;
  }
}
function se(e) {
  let n = Math.round(e / 1000);
  if (n < 120) return `${n}s`;
  let o = Math.round(n / 60);
  if (o < 120) return `${o}m`;
  let r = Math.round(o / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function ikt({ prefix: e, suffix: n }) {
  try {
    if (s.ANTHROPIC_UNIX_SOCKET && !s.CLAUDE_CODE_OAUTH_TOKEN)
      return `${e} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
    let { key: o, source: r } = F0({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (r === "ANTHROPIC_API_KEY") {
      if (o !== s.ANTHROPIC_API_KEY)
        return `${e} The program that started this session passed it an API key, so this session uses API-key auth \u2014 start the session without that key ${n}`;
      return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${n}`;
    }
    if (r === "apiKeyHelper")
      return `${e} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${n}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN)
      return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${n}`;
    let { source: a } = xa();
    if (a === "profile" && c8()) return `${e} Run \`claude auth login\` ${n}`;
    let u = W7e(a);
    if (a !== "none" && !UGe(a) && u)
      return `${e} This session is using ${a} auth \u2014 ${u}`;
  } catch {}
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${n}`;
}
var R =
    "Remote Control is only available when using Claude via api.anthropic.com.",
  F = "unset it (or run in a shell without it) to use Remote Control.";
function Xps({ prefix: e, feature: n }) {
  let o = ve();
  if (o === "firstParty") return null;
  if (o === "gateway")
    return `${e} This session uses a ${tx.gateway}, which does not support ${n}.`;
  if (o === "bedrock" && cQe() === "mantle")
    return `${e} ${POe.bedrock} and ${POe.mantle} are set, so this session is using ${tx.bedrock} + ${tx.mantle} \u2014 unset them (or run in a shell without them) to use ${n}.`;
  return `${e} ${POe[o]} is set, so this session is using ${tx[o]} \u2014 unset it (or run in a shell without it) to use ${n}.`;
}
function le() {
  let e = Xps({ prefix: R, feature: "Remote Control" });
  if (e !== null) return e;
  if (!pc()) {
    let n = s._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL
      ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)"
      : "";
    return `${R} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${F}${n}`;
  }
  if (s.ANTHROPIC_UNIX_SOCKET)
    return `${R} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${F}`;
  return R;
}
function h() {
  try {
    return Boolean(tr()?.scopes?.includes(uP));
  } catch {
    return !1;
  }
}
function _() {
  try {
    return Rt();
  } catch {
    return !1;
  }
}
function C() {
  try {
    return Qf();
  } catch {
    return !1;
  }
}
function y() {
  try {
    return ge().oauthAccount;
  } catch {
    return;
  }
}
function ue() {
  try {
    return iun("require_trusted_devices") || hw();
  } catch {
    return !0;
  }
}
async function Tpe() {
  try {
    await ce();
  } catch (e) {
    t(
      `[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`,
    );
  }
}
async function ce() {
  try {
    if (DC() !== null) return;
  } catch {}
  let e = await import("/$bunfs/root/chunk-7bg0909g.js");
  e.initializePolicyLimitsLoadingPromise();
  let n = jo();
  if (n.diagnosticPolicyKick === void 0) {
    let o = e.loadPolicyLimits();
    (o
      .catch(() => {})
      .finally(() => {
        n.diagnosticPolicyKick = void 0;
      }),
      (n.diagnosticPolicyKick = qt(
        o,
        e.POLICY_LIMITS_COLD_AWAIT_MS,
        "bridge_diagnostic_policy_limits",
      ).catch(() => {})));
  }
  await n.diagnosticPolicyKick;
}
function iit() {
  try {
    return Rn("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function Xae() {
  return mN() && iit() === "allowed";
}
function AG() {
  return s.CLAUDE_CODE_REMOTE || Hn();
}
function dIi() {
  return b("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function o8e() {
  return b("tengu_luminous_seal", !0);
}
function vmo() {
  return b("tengu_bridge_partial_messages", !1);
}
function Jps() {
  return b("tengu_nifty_canyon", !0);
}
function Tmo() {
  return b("tengu_wobbly_pinwheel", !0);
}
function Qps() {
  return b("tengu_copper_kestrel", !0);
}
function hin() {
  return b("tengu_bridge_auth_revive", !0);
}
function Zps() {
  return b("tengu_ethereal_mist", !0);
}
function cIi() {
  return b("tengu_wild_gosling", !1);
}
function gin() {
  return b("tengu_humble_petal", !0);
}
function nBt() {
  return !b("tengu_bridge_leave_silent_pool_off", !1) && "after_no_answer";
}
function uIi() {
  return b("tengu_parallel_llama", !0);
}
function fIi() {
  return b("tengu_moonlit_lagoon", !0);
}
function pIi() {
  return b("tengu_bridge_resume_respects_local_owner", !0);
}
function mIi() {
  return b("tengu_sequential_puffin", !0);
}
function s8e() {
  return b("tengu_bridge_owner_pinned_end", !0);
}
function ems() {
  return b("tengu_bridge_owner_check_attribution", !0);
}
function Cmo() {
  return b("tengu_glimmering_glade", !0);
}
function hIi() {
  return b("tengu_lucky_quill", !0);
}
function gIi() {
  return b("tengu_keen_lantern", !0);
}
function tms() {
  return b("tengu_bridge_host_declined_end", !0);
}
function _Ii() {
  return b("tengu_bridge_signed_out_neutral", !0);
}
function Nyr() {
  return b("tengu_ccr_v2_send_events_cli", !0);
}
function K5() {
  return b("tengu_ccr_v2_session_crud_cli", !1);
}
function aZl() {
  return b("tengu_ccr_v2_bridge_create_cli", !1);
}
function wFn() {
  return b("tengu_composed_quail", !0);
}
function yIi() {
  return b("tengu_woolly_emerson", !0);
}
function SIi() {
  return b("tengu_gravel_chorus", !0);
}
function _in() {
  return nms().value;
}
function nms() {
  if (AG()) return { value: !1, source: "remote_env" };
  let e = eGi("remote_control_at_startup");
  if (S()) return { value: !1, source: e === !1 ? "org_policy" : "growthbook" };
  if (ait()) return { value: !0, source: "persistent_remote_session" };
  if (e !== void 0) return { value: e, source: "org_policy" };
  return { value: b("tengu_cobalt_harbor", !1), source: "growthbook" };
}
function Cpe() {
  let e = nAt();
  return e !== void 0 ? e : _in();
}
function ait() {
  return !1;
}
function lZl() {
  return !1;
}
function Fyr() {
  return b("tengu_amber_relay", !1);
}
async function dZl() {
  return !1;
}
function cZl() {
  return "not_fetched";
}
function i8e() {
  {
    let { value: e, source: n } = gn(
      "tengu_bridge_apply_server_session_config",
      !0,
    );
    if (e !== !1) return !0;
    if (n === "override") return !1;
    return !(n === "payload" && DPr().organizationUUID);
  }
  return !1;
}
function rms() {
  return b("tengu_bridge_child_auto_mode", !0);
}
function bIi() {
  return b("tengu_bridge_child_auto_over_settings", !0);
}
function oms() {
  return b("tengu_bridge_rc_child_artifact", !0);
}
function yin() {
  return b("tengu_bridge_rc_projects_hint", !0);
}
function W() {
  return !0;
}
function wIi() {
  return W() && b("tengu_twinkling_crown", !1);
}
function kIi() {
  return W() && b("tengu_foamy_treehouse", !1);
}
function sms() {
  return b("tengu_bridge_child_machine_settings", !0);
}
function ims() {
  return b("tengu_bridge_rc_child_auto_compact", !0);
}
function ams() {
  return Pe("tengu_gentle_grove", { safe: !1 });
}
function EIi() {
  return Pe("tengu_velvety_hare", { safe: !1 });
}
function kFn() {
  return b("tengu_gentle_orchard", !0);
}
function vIi() {
  return vmo() && b("tengu_eager_eagle", !0);
}
function TIi() {
  let e = b("tengu_bridge_rc_child_idle_exit_ms", Z);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), ee);
}
function $yr() {
  return b("tengu_bridge_rc_child_restart_resume", !0);
}
function akt() {
  return b("tengu_hazy_origami", !0);
}
function lms() {
  return b("tengu_eager_reef", !1);
}
function rBt() {
  return {
    enabled: b("tengu_bridge_subagent_frames", !0),
    forwardText: b("tengu_bridge_subagent_text", !1),
  };
}
function CIi(e, n) {
  if (e.replBridgeOutboundOnly && !n)
    return e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  if (e.replBridgeEnabled === n && !e.replBridgeOutboundOnly)
    return !n && e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  return {
    ...e,
    replBridgeEnabled: n,
    replBridgeOutboundOnly: !1,
    ...(!n && { replBridgeSessionGroupingId: void 0 }),
  };
}
export {
  yFn,
  Smo,
  bmo,
  Zdl,
  wmo,
  tBt,
  ecl,
  rIi,
  tcl,
  kmo,
  FH,
  pin,
  Dyr,
  CG,
  mN,
  Lyr,
  oIi,
  sIi,
  Yps,
  Emo,
  r8e,
  SFn,
  _je,
  iIi,
  bFn,
  sql,
  min,
  aIi,
  iZl,
  lIi,
  ikt,
  Xps,
  Tpe,
  iit,
  Xae,
  AG,
  dIi,
  o8e,
  vmo,
  Jps,
  Tmo,
  Qps,
  hin,
  Zps,
  cIi,
  gin,
  nBt,
  uIi,
  fIi,
  pIi,
  mIi,
  s8e,
  ems,
  Cmo,
  hIi,
  gIi,
  tms,
  _Ii,
  Nyr,
  K5,
  aZl,
  wFn,
  yIi,
  SIi,
  _in,
  nms,
  Cpe,
  ait,
  lZl,
  Fyr,
  dZl,
  cZl,
  i8e,
  rms,
  bIi,
  oms,
  yin,
  wIi,
  kIi,
  sms,
  ims,
  ams,
  EIi,
  kFn,
  vIi,
  TIi,
  $yr,
  akt,
  lms,
  rBt,
  CIi,
};
