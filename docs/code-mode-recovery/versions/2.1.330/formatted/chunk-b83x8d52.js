// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import {
  xyn,
  Rsa,
  QLr,
  b$,
  UE,
  jh,
  zl,
  N,
  Waa,
  uca,
  fca,
  qLo,
  EFs,
  kpt,
  kca,
  ao,
} from "/$bunfs/root/chunk-f9x2f6cx.js";
import { S } from "/$bunfs/root/chunk-78g0060s.js";
import { Ie, D } from "/$bunfs/root/chunk-jv7av99m.js";
import { me, Tn } from "/$bunfs/root/chunk-5appeerh.js";
import {
  Hc,
  odt,
  UCo,
  St,
  jxe,
  Yl,
  ce,
  wzn,
  VRs,
  DCt,
  s3l,
  iee,
  oD,
  hr,
  b,
} from "/$bunfs/root/chunk-865at33z.js";
import { a } from "/$bunfs/root/chunk-y53wbr8a.js";
import { u, m, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { Ls } from "/$bunfs/root/chunk-pbteexar.js";
import { yt } from "/$bunfs/root/chunk-rb36kwbn.js";
import { t } from "/$bunfs/root/chunk-w578pjby.js";
import { s } from "/$bunfs/root/chunk-c203g5kd.js";
import { i } from "/$bunfs/root/chunk-k449cc64.js";
import { gt, gme, OU, dwe, tn, dv } from "/$bunfs/root/chunk-4vsz8a99.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { ji, $ut, zMo, iF, qHr } from "/$bunfs/root/chunk-xcgcdx61.js";
import { Pl, $n, ri, gK, qOo } from "/$bunfs/root/chunk-qdcbcsg7.js";
import { C8, sDo } from "/$bunfs/root/chunk-qebpc5de.js";
import {
  mL,
  A$l,
  R$l,
  x$l,
  rft,
  P$l,
  D$l,
  S_n,
  Ev,
  b_n,
  bge,
  mr,
  Rr,
  lr,
} from "/$bunfs/root/chunk-px0hhsq7.js";
import { J_, Jk, $b } from "/$bunfs/root/chunk-xfj2cwfv.js";
import { uo } from "/$bunfs/root/chunk-2zeyvjwb.js";
import { Wa } from "/$bunfs/root/chunk-szvrpg0x.js";
import { Vt } from "/$bunfs/root/chunk-r8478wtb.js";
import { w4, fcn } from "/$bunfs/root/chunk-qyhf6bts.js";
import { vo, xZ, li } from "/$bunfs/root/chunk-h4t4qfaq.js";
import { Z, pwe, _y } from "/$bunfs/root/chunk-bz1f2qnq.js";
import { Jm, f8e, Eje } from "/$bunfs/root/chunk-6a9gdcsm.js";
import {
  p1,
  Vs,
  al,
  Tr,
  QUi,
  yBn,
  MRe,
  EYe,
} from "/$bunfs/root/chunk-ht27b0vz.js";
import { ga } from "/$bunfs/root/chunk-2b1wcpvk.js";
import { uZ } from "/$bunfs/root/chunk-w50zedgp.js";
import { gG } from "/$bunfs/root/chunk-q2404y26.js";
import { rd, Hkr } from "/$bunfs/root/chunk-pkzhb7kv.js";
import { Bl, xje, Fkt, Pje, r4, fre } from "/$bunfs/root/chunk-271xsh6x.js";
import { tfs, kNn, Yon, S9e } from "/$bunfs/root/chunk-gz6chcf8.js";
import { qon } from "/$bunfs/root/chunk-zmrcnbgs.js";
import { q6, gAe } from "/$bunfs/root/chunk-x1z3yh1m.js";
import { m0, qf } from "/$bunfs/root/chunk-cvv9kfq3.js";
import { K0e } from "/$bunfs/root/chunk-vfxmw1me.js";
import { co } from "/$bunfs/root/chunk-t99xdws4.js";
import { Gn } from "/$bunfs/root/chunk-ww0784kh.js";
import { Xo } from "/$bunfs/root/chunk-9xt9z453.js";
import { Gme } from "/$bunfs/root/chunk-q8sdrdma.js";
import { ke } from "/$bunfs/root/chunk-hn3cwwzt.js";
import { YOo } from "/$bunfs/root/chunk-prn6030k.js";
import { xn } from "/$bunfs/root/chunk-3f4m74y6.js";
import { ze } from "/$bunfs/root/chunk-pzzqg6s3.js";
import { bT } from "/$bunfs/root/chunk-4smdap7r.js";
function Rnl() {
  ce().toolList.isInvalidated = !0;
}
var M = new ze(() => ({
  ok: !1,
  kept: !1,
  failed: !1,
  resumedOnSharedKey: !1,
  serverKeyMoved: !1,
  sendNotRenamed: !1,
  sentNames: new Map(),
}));
function W({ mcpInfo: e }) {
  return (
    e != null &&
    e.standardKey === void 0 &&
    (typeof e.serverName !== "string" || typeof e.toolName !== "string")
  );
}
function ne(e) {
  let o = e.filter((n) => !W(n));
  return Ls(o, "name").flatMap((n) =>
    n.mcpInfo !== void 0 &&
    n.name === lr(n.mcpInfo.serverName, n.mcpInfo.toolName)
      ? [
          {
            name: n.name,
            server: n.mcpInfo,
            standardKey: n.mcpInfo.standardKey,
            denyKey: n.mcpInfo.denyKey,
            mayRecordOwner:
              n.mcpInfo.scope === void 0
                ? void 0
                : fcn(n.mcpInfo.serverName, n.mcpInfo),
          },
        ]
      : [],
  );
}
function j(e, o) {
  let n = Ev(e);
  return (o(e, n), n);
}
function te(e, o) {
  let n = b_n(e);
  return (o(e, n), n);
}
function re(e, o) {
  return "name" in e && typeof e.name === "string"
    ? { ...e, name: j(e.name, o) }
    : e;
}
function H(e) {
  return typeof e === "object" && e !== null;
}
function A(e, o) {
  return typeof e === "string" ? j(e, o) : e;
}
function B(e, o) {
  if (Array.isArray(e)) return e.map((r) => B(r, o));
  if (!H(e)) return e;
  let n = {};
  for (let r of Object.keys(e)) {
    let d = e[r];
    n[r] =
      r === "input"
        ? d
        : (r === "exclude_tools" || r === "clear_tool_inputs") &&
            Array.isArray(d)
          ? d.map((c) => A(c, o))
          : B(d, o);
  }
  switch (n.type) {
    case "tool_use":
      return typeof n.name === "string" ? { ...n, name: te(n.name, o) } : n;
    case "tool_reference":
      return {
        ...n,
        ...("name" in n && { name: A(n.name, o) }),
        ...("tool_name" in n && { tool_name: A(n.tool_name, o) }),
      };
    case "tool_definition":
      return H(n.definition)
        ? {
            ...n,
            definition: { ...n.definition, name: A(n.definition.name, o) },
          }
        : n;
    default:
      return n;
  }
}
function ie(e, o) {
  return Array.isArray(e.content) ? { ...e, content: B(e.content, o) } : e;
}
function se() {
  let e = M.of(N());
  if (A$l() && !e.serverKeyMoved)
    ((e.serverKeyMoved = !0), l("mcp_standard_key", "server_key_moved"));
  if (P$l() > 0 && !e.kept)
    ((e.kept = !0), l("mcp_standard_key", "kept_legacy_names"));
  else if (!e.ok && !e.kept) ((e.ok = !0), u("mcp_standard_key"));
}
function de(e) {
  let o = M.of(N());
  if (
    !o.resumedOnSharedKey &&
    x$l() &&
    e.some(
      ({ content: n }) =>
        Array.isArray(n) &&
        n.some(
          (r) =>
            H(r) &&
            r.type === "tool_use" &&
            typeof r.name === "string" &&
            R$l(r.name),
        ),
    )
  )
    ((o.resumedOnSharedKey = !0),
      l("mcp_standard_key", "resumed_on_shared_key"));
}
function L(e) {
  i(e);
  let o = M.of(N());
  if (!o.failed) ((o.failed = !0), m("mcp_standard_key", "translate_failed"));
}
function Y(e) {
  try {
    if (!e.some(W) || !w4()) return e;
    if (Wa().claim("mcp_malformed_entry_withheld"))
      t(
        "At least one MCP tool was not offered to the model: its entry has no server name or tool name. Other MCP tools are not affected.",
        { level: "warn" },
      );
    return e.filter((o) => !W(o));
  } catch (o) {
    return (L(o), e);
  }
}
function Ids(e) {
  try {
    if (e.some((o) => o.mcpInfo !== void 0) && w4()) (D$l(ne(e)), se());
    return !0;
  } catch (o) {
    return (L(o), !1);
  }
}
function V(e, o) {
  let n = e.tool_choice;
  return {
    ...e,
    messages: e.messages.map((r) => ie(r, o)),
    ...(e.context_management != null && {
      context_management: B(e.context_management, o),
    }),
    ...(e.tools !== void 0 && { tools: e.tools.map((r) => re(r, o)) }),
    ...(n !== void 0 &&
      "name" in n &&
      typeof n.name === "string" && {
        tool_choice: { ...n, name: j(n.name, o) },
      }),
  };
}
function X(e, o) {
  let { sentNames: n } = M.of(N()),
    r = n.get(e);
  n.set(e, r === void 0 || r === o ? o : null);
}
function cTi(e) {
  let o = Mds(e, X);
  if (o === e && mL()) M.of(N()).sendNotRenamed = !0;
  return o;
}
function Mds(e, o = () => {}) {
  try {
    if (!w4()) return e;
    return (
      de(e.messages),
      S_n(
        (e.tools ?? []).flatMap((n) =>
          "name" in n && typeof n.name === "string" ? [n.name] : [],
        ),
      ),
      V(e, o)
    );
  } catch (n) {
    return (L(n), e);
  }
}
function Cnl(e, o) {
  try {
    if (!w4()) return e;
    let { sendNotRenamed: n, sentNames: r } = M.of(N());
    if (!o || n) return;
    let d = !0,
      c = V(e, (f, p) => {
        let g = r.get(f);
        d &&= (g === void 0 ? f : g) === p;
      });
    return d ? c : void 0;
  } catch (n) {
    L(n);
    return;
  }
}
function uTi(e) {
  return w4() ? V(e, () => {}) : e;
}
function fTi(e) {
  let o = bge(e);
  if (mL()) X(o, e);
  return o;
}
function Anl(e) {
  for (let o of e.content)
    if (o.type === "tool_use" && o.name !== void 0) o.name = fTi(o.name);
}
var pTi = "bypassPermissions not supported in restricted mode";
function xnl(e) {
  return e.restricted &&
    (e.permissionMode === "bypassPermissions" ||
      e.allowDangerouslySkipPermissions)
    ? pTi
    : void 0;
}
function Pnl(e) {
  return e.some((o) => o.startsWith("preset:")) ? new Set() : new Set(e);
}
function bhr(e, o) {
  let n = [...e, Gn].filter((c) => !o.has(c)),
    r = [...(o.has(ke) ? [] : [C8]), ...(o.has(Gn) ? [] : [sDo])],
    d = [
      ...[...$ut].map((c) => lr(c, YOo)),
      ...zMo.map((c) => lr($n, `${c}${YOo}`)),
      lr(iF, `${qHr}${YOo}`),
    ];
  return [...n, ...r, gK, qOo, ...d];
}
function Hdo(e) {
  return new Set([
    ...e.filter((o) => o.enablesCodeExecution).map((o) => o.name),
    yt,
  ]);
}
function Hds(e) {
  return e.filter((o) => o.isEnabled()).map((o) => o.name);
}
function IP(e, o, n) {
  let r = Y(e),
    d = Ids(r) || !rft(),
    c = [...Vs(o), ...J(r, o)],
    f = yBn(o, c);
  return r.filter((p) => {
    if (
      K(o, p, c, f) ||
      (p.mcpInfo?.effectiveMaxPermission === "blocked" &&
        n?.keepsBlocked !== !0) ||
      (!d && p.mcpInfo?.standardKey !== void 0)
    )
      return !1;
    if (!Q0n(o, p)) return !0;
    if (n === void 0 && Wa().claim(`tool_outside_launch_list:${p.name}`))
      (t(
        `${Jm(p)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`,
        { level: "warn" },
      ),
        a("tengu_tool_withheld_outside_launch_list", { toolName: hr(Jm(p)) }));
    return !1;
  });
}
function mTi(e, o) {
  let n = { ...o, toolAliases: void 0 },
    r = [...Vs(n), ...J(e, n)],
    d = yBn(n, r);
  return e.filter((c) => !K(n, c, r, d));
}
function Q0n({ toolsKeptByLaunchList: e }, o) {
  return !(
    e === void 0 ||
    qf(o) ||
    o.mcpInfo !== void 0 ||
    m0(o) ||
    p1(o) ||
    e.includes(o.name) ||
    (o.familyParentToolName !== void 0 && e.includes(o.familyParentToolName))
  );
}
function jne(e) {
  return pwe(e) ? IP(e.options.tools, Z(_y(e))) : e.options.tools;
}
function TWe(e, o, n = Vs(e), r) {
  return K(e, o, n, r);
}
function K(e, o, n, r) {
  let d = (c) => (r !== void 0 ? EYe(e, r, c) : Tr(e, c, n) !== null);
  if (d(o)) return !0;
  if (o.underlyingV1ToolName && d({ name: o.underlyingV1ToolName })) return !0;
  if (o.mcpInfo === void 0) {
    let c = f8e(o.name);
    if (c !== void 0 && d(c) && c.isEnabled()) return !0;
  }
  if (m0(o) && ae(e, n)) return !0;
  if (o.mcpInfo === void 0 && Ybt.includes(o.name) && U(e, n) !== null)
    return !0;
  return !1;
}
function Krn(e, o) {
  if (!Waa().has(o.name)) return !1;
  if (uo("hipaa")) return !1;
  let n = Vs(e).filter((r) => r.source !== "toolsNarrowing");
  return !TWe(e, o, n);
}
function ae(e, o) {
  return o.some((n) => n.ruleValue.toolName === ke);
}
var Ybt = [
  Xo,
  import.meta.require("/$bunfs/root/chunk-q36cvre2.js").APPIFACT_REPL_TOOL_NAME,
];
if (!Ybt.every(Boolean))
  throw Error(
    "Claude Code stopped because this build is broken: a rule that denies Bash would not also remove every tool that runs code the way Bash does. Install a different version. If you changed the code, look for a new import cycle through src/tools/registry.ts (TOOLS_RUNNING_CODE_AS_BASH).",
  );
function U(e, o) {
  return Dds(
    e,
    o.filter((n) => n.source !== "toolsNarrowing"),
  );
}
function Z0n(e, o) {
  let n = U(e, Vs(e));
  if (n !== null)
    return {
      rule: n,
      verdict: {
        behavior: "deny",
        message: `Permission to use ${o} has been denied: it runs code as ${ke} does, and a rule denies ${ke}.`,
        decisionReason: { type: "rule", rule: n },
      },
    };
  let r = U(e, al(e));
  return r === null
    ? null
    : {
        rule: r,
        verdict: {
          behavior: "ask",
          message: `${o} runs code as ${ke} does, and a rule asks before ${ke} runs.`,
          decisionReason: { type: "rule", rule: r },
        },
      };
}
function Dds(e, o) {
  let n = e.toolAliases?.[ke],
    r = [ke, ...(n !== void 0 ? [n] : [])];
  for (let d of r) {
    let c = Tr(e, { name: d }, o);
    if (c !== null) return c;
  }
  return (
    o.find(
      (d) =>
        r.includes(d.ruleValue.toolName) &&
        d.ruleValue.ruleContent !== void 0 &&
        QUi(d.ruleValue.ruleContent),
    ) ?? null
  );
}
function J(e, { restricted: o, toolsKeptByLaunchList: n }) {
  if (!(o === !0 && n === void 0)) return [];
  let r = new Set([
    ...e.filter((d) => d.enablesCodeExecution).map((d) => d.name),
    yt,
  ]);
  return bhr(r, new Set()).map((d) => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: { toolName: d },
  }));
}
function hTi() {
  return (ce().toolList.answer?.removed.size ?? 0) > 0;
}
function vae(e, o = ce().toolList.answer?.removed) {
  if (o === void 0 || o.size === 0) return !1;
  return (
    dv(e, o) ||
    (o.has(iee(ke)) &&
      (m0(e) || (e.mcpInfo === void 0 && Ybt.includes(e.name))))
  );
}
function whr(e) {
  let o = ce().toolList,
    n = new Set(o.keptTools.map((r) => r.name));
  if (e.some((r) => !n.has(r.name)))
    o.keptTools = bT([...o.keptTools, ...e], (r) => r.name);
}
function $Kl() {
  ce().toolList.hookFailures += 1;
}
var s$t = Yl();
function ZI(e) {
  return s$t.get()?.settling(e);
}
function Lds(e, o = e) {
  let n = ce(),
    { toolList: r } = n,
    d = r.askedFor !== o;
  if (r.isRetryOwed && d) ((r.isRetryOwed = !1), (r.isInvalidated = !0));
  let c = !d
    ? void 0
    : (n.hookRegistrationInFlight ??
      (n.hookRegistrationOwed ? n.hooksLoadAtStartup : void 0));
  if (((r.askedFor = o), c === void 0))
    return (s$t.get()?.flushInvalidations(), ZI(e));
  return Tn(
    me(
      c.catch(() => {}),
      Gme,
    ),
    e,
    () => new Ie(),
  )
    .catch(() => {})
    .then(() => (s$t.get()?.flushInvalidations(), ZI(e)));
}
function UKl(e) {
  let { pass: o } = ce().toolList;
  return o === void 0 ? void 0 : Tn(o.wait, e, () => new Ie()).catch(() => {});
}
async function gTi(e, o, n) {
  let r = ZI(n);
  if (r !== void 0) await r;
  let d = lr(e.name, o);
  if (r !== void 0 && n.aborted)
    return `${d} was not called: the call ended while the plugins answered for its tools.`;
  return vae({ name: d }) ||
    (e.config?.type === "sdk" &&
      s.CLAUDE_AGENT_SDK_MCP_NO_PREFIX &&
      vae({ name: o, mcpInfo: { serverName: e.name, toolName: o } }))
    ? `A plugin removed ${d} from this session, so it can't be called.`
    : void 0;
}
function _Ti(e) {
  let { answer: o } = ce().toolList;
  if (o === null) return e;
  let n = new Set(o.added);
  return e.filter((r) => !n.has(r));
}
function i$t(e) {
  if (!hTi() && ce().toolList.everAdded.size === 0) return e;
  let o = e.filter((n) => !vae(n) && (!DCt(n) || wzn(n.name)));
  return o.length === e.length ? e : o;
}
function yTi(e) {
  return ((ce().toolList.built = _Ti(e)), i$t(e));
}
function Ddo() {
  return ce().toolList.revision;
}
function Onl(e, o) {
  return e.some((n) => n.name === o) || vae({ name: o });
}
function BKl(e) {
  let o = new Map(VRs().map((r) => [r.name, r])),
    n = e.flatMap((r) => {
      let d = o.get(r.name);
      return !DCt(r) ? [r] : d === void 0 ? [] : [d];
    });
  return n.some((r, d) => r !== e[d]) || n.length !== e.length ? n : e;
}
function Nds(e) {
  let o = ce().toolList.answer?.removed;
  if (o === void 0 || o.size === 0) return e;
  let { alwaysDenyRules: n } = e;
  return {
    ...e,
    alwaysDenyRules: { ...n, session: [...(n.session ?? []), ...o] },
  };
}
var VW = "WaitForMcpServers";
function STi() {
  return [
    "Wait for MCP servers that are still connecting and whose tools are not",
    "yet in your tool list. Pass `servers` to wait for specific ones, or omit",
    "it to wait for all pending servers (once none is pending, a call without",
    "`servers` reports any server that failed to connect or is not configured).",
    "",
    ...(ue() && uZ()
      ? [
          "If the user's request needs tools from a still-connecting server, call this",
          "tool to wait for it. Once it connects, its tools become callable inside",
          "the REPL environment (this surface routes MCP tools through the REPL",
          "rather than advertising them as top-level tools). Returns ready=true when",
          "servers are ready, ready=false if they failed to connect, need",
          "authentication, or are disabled.",
        ]
      : [
          "If the user's request needs tools from a still-connecting server, call this",
          "tool to wait for it. Once it connects, its tools will be added to your tool",
          "list and you can use them directly. Returns ready=true when servers are",
          "ready, ready=false if they failed to connect, need authentication, or are",
          "disabled.",
        ]),
    "",
    "You do not need to ask the user for confirmation to use this tool.",
  ].join(`
`);
}
function Dh(e, o, n) {
  let r = tn(e, o, n);
  {
    let d = n && Object.hasOwn(n, o) ? n[o] : void 0;
    if ((d !== void 0 ? d : o) === xZ && r?.name === vo) return;
  }
  return r;
}
var qfe = "authenticate",
  a$t = "complete_authentication";
function eLn(e) {
  return bTi(e.kind);
}
function bTi(e) {
  switch (e) {
    case "policy_blocked":
    case "reserved_address":
    case "org_blocked":
    case "denied":
    case "disabled":
    case "switched_off":
    case "not_configured":
    case "removed":
    case "replaced":
      return !0;
    case "reconnecting":
    case "needs_auth":
    case "disconnected":
    case "auth_completed":
    case "not_offered":
    case "withdrawn":
      return !1;
  }
}
function Fds(e) {
  return eLn(e) && e.kind !== "replaced" && e.kind !== "removed";
}
function Yfe(e, o, n, r, d = MRe(n), c) {
  let f = vae({
      name: e,
      underlyingV1ToolName: Eje(e),
      familyParentToolName: r?.familyParentToolName,
    }),
    p = r?.mcpInfo;
  if (p === void 0 && mr(e) === null) {
    let h = {
      ...r,
      name: e,
      underlyingV1ToolName: Eje(e),
      familyParentToolName: r?.familyParentToolName,
    };
    if (TWe(n, h, d.rules, d.index) && !Krn(n, h))
      return { kind: "denied", serverName: void 0 };
    if (f) return { kind: "removed" };
    if (!Hkr(h)) return { kind: "withdrawn" };
    if (rd()) return { kind: "replaced" };
    let _ = { name: Vt },
      v = TWe(n, _, d.rules, d.index) && !Krn(n, _);
    return c !== void 0 && !v && le(o, c)
      ? { kind: "replaced" }
      : { kind: "withdrawn" };
  }
  let g =
      p === void 0
        ? EYe(n, d.index, { name: e })
        : TWe(n, { name: e, mcpInfo: p }, d.rules, d.index),
    y = G(e, o, p).map(({ row: h, upstream: _ }) => fe(h, _, g)),
    O =
      y.find(eLn) ??
      y.find((h) => h.kind === "not_offered" || h.kind === "auth_completed") ??
      y[0];
  if (f && (O === void 0 ? !g : !eLn(O))) return { kind: "removed" };
  if (O) return O;
  return g
    ? { kind: "denied", serverName: void 0 }
    : { kind: "not_configured" };
}
function wTi(e, o, n, r) {
  return e.kind === "not_configured" && G(o, n, r).length === 0;
}
function le(e, o) {
  let n = e.find((r) => r.name === ri);
  return (
    n !== void 0 &&
    ji(n) &&
    oD(n.config) &&
    !K0e(n) &&
    !o.some((r) => r.name === Vt) &&
    o.some((r) => r.mcpInfo?.serverName === ri)
  );
}
function Inl(e, o) {
  return G(e, o, void 0)
    .filter(({ row: n }) => n.type === "pending")
    .map(({ row: n }) => n.name);
}
function G(e, o, n) {
  if (n !== void 0) {
    let c = xn(n.toolName);
    return o
      .filter((f) => f.name === n.serverName)
      .map((f) => ({ row: f, upstream: c }));
  }
  let r = o
      .map((c) => ({ row: c, prefix: Rr(c.name) }))
      .filter(({ prefix: c }) => e.startsWith(c)),
    d = Math.max(0, ...r.map(({ prefix: c }) => c.length));
  return r
    .filter(({ prefix: c }) => c.length === d)
    .map(({ row: c, prefix: f }) => ({ row: c, upstream: e.slice(f.length) }));
}
function fe(e, o, n) {
  let r = Bl(e.name);
  if (n) return { kind: "denied", serverName: r };
  if (pe(e, o))
    return {
      kind: "org_blocked",
      serverName: r,
      ...(Pl(e.config) && { byClaudeCode: !0 }),
    };
  switch (e.type) {
    case "pending":
      return { kind: "reconnecting", serverName: r };
    case "needs-auth":
      return { kind: "needs_auth", serverName: r };
    case "failed":
      if (xje(e.error) || Pje(e.error))
        return { kind: "policy_blocked", serverName: r };
      if (Fkt(e.error)) return { kind: "reserved_address", serverName: r };
      if (fre(e)) return { kind: "not_offered", serverName: r };
      return r4(e)
        ? { kind: "not_configured" }
        : { kind: "disconnected", serverName: r };
    case "disabled":
      return {
        kind:
          e.config.type === "sdk" || e.heldBy !== void 0
            ? "switched_off"
            : "disabled",
        serverName: r,
      };
    case "connected":
    case "cached":
      if (K0e(e)) return { kind: "switched_off", serverName: r };
      return o === qfe || o === a$t
        ? { kind: "auth_completed", serverName: r }
        : { kind: "not_offered", serverName: r };
  }
}
var Q = new WeakMap();
function pe(e, o) {
  if (!("toolPermissions" in e.config)) return !1;
  let n = e.config.toolPermissions;
  if (typeof n !== "object" || n === null) return !1;
  let r = Q.get(n);
  if (r === void 0)
    ((r = new Set(
      Object.entries(n)
        .filter(([, d]) => d === "blocked")
        .map(([d]) => xn(d)),
    )),
      Q.set(n, r));
  return r.has(o);
}
function JCe() {
  return Hc();
}
class Gne {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, o = { only: new Map(), order: [] }) {
    ((this.names = o.names ?? [...e.map((n) => n.name), ...o.only.keys()]),
      (this.recordedOnly = o.only),
      (this.recordOrder = o.order),
      (this.#e = new Map(e.map((n) => [n.name, n]))));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== ga;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new Gne(
      [...this.#e.values()].filter((o) => !e.has(o.name)),
      {
        only: new Map([...this.recordedOnly].filter(([o]) => !e.has(o))),
        order: this.recordOrder.filter((o) => !e.has(o)),
        names: this.names.filter((o) => !e.has(o)),
      },
    );
  }
  sourceFor(e) {
    let o = this.#e.get(e),
      n = this.recordedOnly.get(e)?.server;
    if (o !== void 0 || n === void 0) return o;
    return ee(e, n);
  }
}
function kTi(e) {
  return e ?? ao();
}
function LSe(e) {
  let o = e.declaredTools;
  return o instanceof Gne ? o : void 0;
}
function khr(e) {
  let o = e.noChannelTools;
  return o instanceof Gne ? o : void 0;
}
function ETi(e, o, n) {
  if (o) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !JCe()) return;
  let r = n();
  return ((e.noChannelTools = r), r);
}
function vTi(e, o, n) {
  let r = new Set([...o, ...e].map((y) => y.name)),
    d = new Map([...(n ?? [])].filter(([y]) => !r.has(y)));
  if (d.size === 0) return new Gne(e);
  let c = (y) => y.isMcp === !0 || mr(y.name) !== null,
    f = e.findIndex(c),
    p = (y, O) =>
      !c(y) && ((y.name === ga && O === e.length - 1) || (f !== -1 && O > f)),
    g = [...e.filter(c).map((y) => y.name), ...d.keys()].sort((y, O) =>
      gme({ name: y }, { name: O }),
    ),
    T = [
      ...e.filter((y, O) => !c(y) && !p(y, O)).map((y) => y.name),
      ...g,
      ...e.filter(p).map((y) => y.name),
    ];
  return new Gne(e, { only: d, order: T, names: T });
}
var ye = new Set(["name", "description", "input_schema", "type", ...tfs]);
async function Mnl(
  {
    recordedToolDescriptions: e,
    recordedToolServers: o,
    recordedToolEntries: n,
    mcpClients: r = [],
    getToolPermissionContext: d,
  },
  c,
  f,
) {
  if (e === void 0 || e.has(co) || !JCe()) return;
  let p = new Set(c.map((h) => h.name)),
    g = [];
  for (let h of e.keys()) {
    let _ = n?.get(h),
      v = o?.get(h);
    if (
      !p.has(h) &&
      f?.has(h) !== !0 &&
      _ !== void 0 &&
      v !== void 0 &&
      h.startsWith(Rr(v)) &&
      _.name === h &&
      /^[a-zA-Z0-9_-]+$/.test(h) &&
      Object.keys(_).every((C) => ye.has(C))
    )
      g.push({ name: h, entry: _, server: v });
  }
  if (g.length === 0) return;
  let T = await d(),
    y = new Map(),
    O;
  for (let { name: h, entry: _, server: v } of g)
    try {
      O ??= MRe(T);
      let C = Yfe(h, r, T, ee(h, v), O);
      if (C.kind === "reconnecting" || C.kind === "removed")
        y.set(h, { entry: _, server: v });
    } catch (C) {
      i(D(C));
    }
  return y.size === 0 ? void 0 : y;
}
async function TTi(
  e,
  o,
  { mcpClients: n, getPermissionContext: r, byValue: d },
) {
  let c = Ehr(e, o, !0);
  if (c.length === 0) return { kept: e, unread: 0 };
  let f = uo("hipaa"),
    p = (_) => f && !F(_, e.sourceFor(_)?.mcpInfo?.serverName),
    g = (_) => d?.has(_) === !0 || p(_),
    T;
  try {
    T = await r();
  } catch (_) {
    i(D(_));
    let v = new Set(c.filter(g));
    return { kept: v.size === 0 ? e : e.without(v), unread: 0 };
  }
  let y = 0,
    O,
    h = new Set(
      c.filter((_) => {
        if (g(_)) return !0;
        try {
          return ((O ??= MRe(T)), Fds(Yfe(_, n, T, e.sourceFor(_), O)));
        } catch (v) {
          return (i(D(v)), y++, !0);
        }
      }),
    );
  return { kept: h.size === 0 ? e : e.without(h), unread: y };
}
async function Hnl(e, o, n) {
  if (e === void 0 || !uo("hipaa")) return { kept: e, unread: 0 };
  try {
    return await TTi(e, o, n);
  } catch (r) {
    i(D(r));
    let d = dwe(o);
    return {
      kept: e.without(new Set(e.names.filter((c) => !d.has(c)))),
      unread: 0,
    };
  }
}
function CWe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return kTi(e.stickyBetas);
}
function cst(e) {
  let o = CWe(e);
  return o === void 0 ? void 0 : LSe(o);
}
function tLn(e) {
  let o = CWe(e);
  return o === void 0 ? void 0 : khr(o);
}
function Dnl(e, o) {
  if ((xyn(e), e.declaredTools !== void 0 || !JCe())) return !1;
  return (QLr(e, new Gne(o)), !0);
}
function ge(e, o, { servers: n, entries: r } = Te, d) {
  let c = new Map(o.map((R) => [R.name, R])),
    f,
    p = () => ((f ??= OU() ?? null), f ?? void 0),
    g = (R) => {
      let k = p()?.find((E) => gt(E, R))?.underlyingV1ToolName;
      return k === void 0 ? void 0 : c.get(k);
    },
    T = new Map(),
    y = new Map(),
    O = 0,
    h = 0,
    _ = 0,
    v = (R) => (li(R) ? c.get(vo) : void 0),
    C = [...e];
  for (let R of C) {
    let k = c.get(R) ?? v(R) ?? g(R);
    if (k === void 0) {
      let P = r?.get(R),
        x = n?.get(R);
      if (P === void 0 || be(R, x, p())) continue;
      if (he(R, x, p(), o)) {
        if (
          (y.set(R, { entry: P, server: x }),
          x === void 0 && p()?.some((w) => gt(w, R)) === !1)
        )
          s3l(R);
      } else {
        let w = _e(R, p(), d);
        if (w === "launch_omitted") (y.set(R, { entry: P, server: x }), _++);
        else if (w === "gate_off") {
          if ((y.set(R, { entry: P, server: x }), O++, Re(R, p()))) h++;
        } else if (w === "removed") y.set(R, { entry: P, server: x });
      }
      continue;
    }
    T.set(k.name, k);
    let E =
      k.underlyingV1ToolName === void 0
        ? void 0
        : c.get(k.underlyingV1ToolName);
    if (E !== void 0) T.set(E.name, E);
  }
  for (let R of o)
    if (R.underlyingV1ToolName !== void 0 && T.has(R.underlyingV1ToolName))
      T.set(R.name, R);
  for (let R of T.keys()) y.delete(R);
  return T.size === 0 && y.size === 0
    ? void 0
    : {
        held: new Gne(
          o.filter((R) => T.has(R.name)),
          { only: y, order: C },
        ),
        recorded: C.length,
        gateOff: O,
        needsUser: h,
        launchOmitted: _,
      };
}
function nLn(e, o, n, { latch: r, permissionContext: d }) {
  let c = LSe(e);
  if (c !== void 0 || e.declaredToolsDecided) return c;
  if (r) xyn(e);
  if (e.declaredTools !== void 0 || !JCe()) return;
  let f = o(),
    p = f === void 0 ? void 0 : ge(f.names, n, f, d);
  if (p === void 0 || !r) return p?.held;
  return (
    QLr(e, p.held),
    a("tengu_declared_tool_set_from_record", {
      recorded: p.recorded,
      held: p.held.names.length - p.held.recordedOnly.size,
      heldByName: p.held.recordedOnly.size,
      heldGateOff: p.gateOff,
      heldNeedsUser: p.needsUser,
      heldLaunchOmitted: p.launchOmitted,
    }),
    p.held
  );
}
function Ldo(e, o, n, r) {
  if (e.declaredToolsDecided) return;
  let d = nLn(
    e,
    () => ({
      names: o.toolDescriptions.keys(),
      servers: o.toolServers,
      entries: o.toolEntries,
    }),
    n,
    { latch: !1, permissionContext: r },
  );
  if (d !== void 0 && [...o.toolDescriptions.keys()].every((c) => d.has(c)))
    e.declaredTools ??= d;
}
function $ds(e, o) {
  if (o === void 0) return { tools: e, redeclared: [] };
  let n = new Set(e.map((f) => f.name)),
    r = (f) => (n.has(f) || !o.keeps(f) ? void 0 : o.toolFor(f));
  if (o.names.every((f) => r(f) === void 0))
    return { tools: e, redeclared: [] };
  let d = [...e],
    c = [];
  return (
    o.names.forEach((f, p) => {
      let g = r(f);
      if (!g) return;
      let T = -1;
      for (let y = p - 1; y >= 0 && T === -1; y--) {
        let O = o.names[y];
        T = d.findIndex((h) => h.name === O);
      }
      if (T !== -1) d.splice(T + 1, 0, g);
      else {
        let y = d.findIndex((O) => o.has(O.name));
        d.splice(y === -1 ? 0 : y, 0, g);
      }
      (n.add(f), c.push(f));
    }),
    c.length === 0 ? { tools: e, redeclared: c } : { tools: d, redeclared: c }
  );
}
function qrn(e, o) {
  let n = o.turnDeniedTools,
    r = $ds(e, n instanceof Gne ? n : void 0).tools;
  if (r === e) return r;
  let d = uo("hipaa"),
    c = new Set(e),
    f = new Set(gG({ stickyBetas: o }, r)),
    p = r.filter(
      (g) => c.has(g) || (f.has(g) && (!d || (!g.isMcp && g.isEnabled()))),
    );
  return p.length === e.length ? e : p;
}
function Lnl(e, o) {
  let n = LSe(e);
  if (n === void 0 || o.length === 0) return;
  let r = n.without(new Set(o));
  ((e.declaredTools = r.names.length === 0 ? void 0 : r),
    a("tengu_declared_tools_dropped_at_compaction", {
      dropped: o.length,
      noDeferredChannel: !1,
    }));
}
function Nnl(e, o) {
  let n = e === void 0 ? void 0 : khr(e);
  return Ehr(n, o, !0);
}
function Fnl(e, o) {
  let n = khr(e);
  if (n === void 0 || o.length === 0) return;
  ((e.noChannelTools = n.without(new Set(o))),
    a("tengu_declared_tools_dropped_at_compaction", {
      dropped: o.length,
      noDeferredChannel: !0,
    }));
}
function Ehr(e, o, n) {
  if (e === void 0) return [];
  let r = dwe(o);
  return e.names.filter((d) => {
    if (r.has(d) || !e.keeps(d)) return !1;
    let c = e.sourceFor(d)?.mcpInfo;
    return n || !F(d, c?.serverName);
  });
}
var Te = { servers: void 0, entries: void 0 };
function he(e, o, n, r) {
  if (e === ga) return !1;
  if (o !== void 0) return !0;
  if (mr(e) !== null) return !1;
  if (e === VW && !r.some((d) => gt(d, co))) return !0;
  if (e === gAe && r.some((d) => gt(d, e))) return n !== void 0;
  return n !== void 0 && Dh(n, e) === void 0;
}
function _e(e, o, n) {
  if (n === void 0 || o === void 0) return;
  if (e === ga || e === VW || mr(e) !== null) return;
  let r = e === gAe ? q6 : e,
    d = o.find((c) => c.name === r);
  if (d === void 0 || d.isMcp === !0) return;
  if (!Oe() || uo("hipaa")) return;
  if (TWe(n, d)) return Krn(n, d) ? "launch_omitted" : void 0;
  if (Q0n(n, d))
    return n.builtInToolsDisabled === !0 ||
      (n.restricted === !0 && bhr(Hdo([d]), new Set()).includes(d.name))
      ? void 0
      : "launch_omitted";
  if (vae(d)) return "removed";
  if (d.isEnabled()) return;
  return "gate_off";
}
function Re(e, o) {
  return o?.find((n) => n.name === e)?.requiresUserInteraction?.() === !0;
}
var Se = "tengu_gleaming_cupcake";
function Oe() {
  return b(Se, !0);
}
var ve = "tengu_joyful_anchor";
function be(e, o, n) {
  if (F(e, o)) return !1;
  let r = b(ve, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let d = n?.find((c) => gt(c, e));
  return r.some(
    (c) => typeof c === "string" && (c === e || (d !== void 0 && gt(d, c))),
  );
}
function ee(e, o) {
  let n = Rr(o);
  return {
    mcpInfo: {
      serverName: o,
      toolName: e.startsWith(n) ? e.slice(n.length) : e,
    },
  };
}
function F(e, o) {
  return o !== void 0 || mr(e) !== null;
}
function $nl(
  e,
  o,
  {
    pool: n,
    keptDeferred: r,
    keepMcp: d,
    requestCarriesStructuredOutputs: c,
    requestDeclaresSearchCitations: f,
    recordedEntries: p,
  },
) {
  let g = new Set(CTi(o, { pool: n, keptDeferred: r, keepMcp: d }));
  if (g.size === 0) return [];
  let T = new Set(e.map(I)),
    y = o.recordOrder,
    O = { strict: c, eager: kNn(e), citations: f },
    h = [];
  return (
    y.forEach((_, v) => {
      let C = o.recordedOnly.get(_);
      if (C === void 0 || T.has(_) || !g.has(_)) return;
      let R = p?.get(_) ?? C.entry,
        k = -1;
      for (let E = v - 1; E >= 0 && k === -1; E--) {
        let P = y[E];
        if (T.has(P)) k = e.findIndex((x) => I(x) === P) + 1;
      }
      if (k === -1) {
        let E = new Set(y),
          P = e.findIndex((x) => E.has(I(x) ?? ""));
        k = P === -1 ? 0 : P;
      }
      (e.splice(k, 0, Yon(R, O)), T.add(_), h.push(_));
    }),
    h
  );
}
function CTi(e, { pool: o, keptDeferred: n, keepMcp: r }) {
  let d = new Set([...o.map((c) => c.name), ...n]);
  return e.recordOrder.filter((c) => {
    let f = e.recordedOnly.get(c);
    return f !== void 0 && !d.has(c) && (r || !F(c, f.server));
  });
}
function I(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}
function Unl() {
  return S9e();
}
function Bnl(e) {
  let o = new Set();
  for (let n of e) {
    let r = I(n);
    if (r !== void 0) o.add(r);
  }
  return o;
}
function Wnl(e) {
  if (
    e.deferredLate === 0 &&
    e.redeclared === 0 &&
    e.fromRecord === 0 &&
    e.unclassifiedDepartures === 0
  )
    return;
  a("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...(e.queryDepth !== void 0 && { queryDepth: e.queryDepth }),
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures,
  });
}
function rLn(e, o) {
  return l$t(e) && jxe(o);
}
function l$t(e) {
  return UE(e, Jk) && !z(e);
}
function z(e) {
  return zl(e, J_) || uca() || !S9e();
}
function Uq(e, o) {
  return (UE(e, Jk) || (UCo() && !zl(e, Jk))) && !z(e) && jxe(o);
}
function jnl(e, o) {
  return Ndo(e) && rLn(e, o);
}
function Ndo(e) {
  return UE(e, $b) && !qLo() && l$t(e);
}
function oLn(e, o) {
  if (qLo() || zl(e, $b)) return !1;
  if (UE(e, $b)) return Uq(e, o);
  return !UE(e, Jk) && odt() && Uq(e, o);
}
function Uds(
  e,
  o,
  { toolSearchToolFilteredOut: n, toolPoolRefreshes: r, aheadOfRequest: d },
) {
  return n && (d ? Uq(e, o) : rLn(e, o)) && (LSe(e) !== void 0 || (r && JCe()));
}
function Gnl(e, o, n) {
  let r = !UE(e, Jk);
  if (o.includes(Jk) && !z(e)) {
    if ((b$(e, Jk), r && o.includes($b) && !qLo() && !zl(e, $b))) b$(e, $b);
  }
  let d = rLn(e, n),
    c = d && Ndo(e),
    f = o;
  if (d && !f.includes(Jk)) f = [...f, Jk];
  if (!d && f.includes(Jk)) f = f.filter((p) => p !== Jk);
  if (c && !f.includes($b)) f = [...f, $b];
  if (!c && f.includes($b)) f = f.filter((p) => p !== $b);
  return f;
}
function znl(e, o, n, r) {
  if (rLn(e, n) && jxe(r)) {
    let d = o.includes(Jk) ? o : [...o, Jk],
      c = Ndo(e);
    if (c && !d.includes($b)) return [...d, $b];
    return c ? d : d.filter((f) => f !== $b);
  }
  return o.filter((d) => d !== Jk && d !== $b);
}
function Vnl(
  e,
  o,
  {
    mintModel: n,
    retryModel: r,
    advisorEntryMoved: d,
    deferredEntriesMoved: c,
    hasDeferredChannel: f,
  },
) {
  try {
    if (!rLn(e, n) || jxe(r)) return;
    let p = {
      advisor_entry: d,
      deferred_entries: c,
      announcement_blocks: f && o.some((g) => Ce(e, g)),
    };
    return Object.values(p).some(Boolean) ? p : void 0;
  } catch (p) {
    i(D(p));
    return;
  }
}
function Ce(e, o) {
  if (
    o.type !== "attachment" ||
    o.attachment.type !== "deferred_tools_delta" ||
    e.nameOnlyAnnouncements.has(o.uuid)
  )
    return !1;
  let n = o.attachment.surfacedNames;
  return (
    Array.isArray(n) &&
    n.some(
      (r) =>
        typeof r === "string" &&
        (e.surfacedOnWire.has(r) || e.definedByValue.has(r)),
    )
  );
}
function Knl(e, o, n, r, d = new Set()) {
  if (!r) return;
  let c = !l$t(e);
  for (let f of o) {
    if (
      f.type !== "attachment" ||
      f.attachment.type !== "deferred_tools_delta" ||
      e.nameOnlyAnnouncements.has(f.uuid)
    )
      continue;
    let p = f.attachment.surfacedNames;
    if (
      Array.isArray(p) &&
      p.length > 0 &&
      (c || p.some((g) => typeof g !== "string" || (!n.has(g) && !d.has(g))))
    )
      e.nameOnlyAnnouncements.add(f.uuid);
  }
}
function ATi(
  e,
  o,
  n,
  {
    useToolSearch: r,
    toolSearchAbsent: d,
    blocksEligible: c,
    byValueNames: f = new Set(),
    byValueStaysOut: p,
  },
) {
  if (!r && !d) return;
  if (!c) {
    if (!l$t(e)) (e.surfacedOnWire.clear(), e.definedByValue.clear());
    else if (p) e.definedByValue.clear();
    return;
  }
  (e.surfacedOnWire.clear(), e.definedByValue.clear());
  let g = new Set();
  for (let T of n)
    if (T.type === "api_system") {
      for (let y of T.toolRemovals ?? []) e.definedByValue.delete(y);
      for (let y of T.toolAdditions ?? [])
        if (qon(T.toolDefinitions, y) !== void 0)
          (g.add(y), e.definedByValue.add(y));
        else e.surfacedOnWire.add(y);
    }
  if (d) return;
  for (let T of o) {
    if (
      T.type !== "attachment" ||
      T.attachment.type !== "deferred_tools_delta" ||
      e.nameOnlyAnnouncements.has(T.uuid)
    )
      continue;
    let y = T.attachment.surfacedNames;
    if (
      Array.isArray(y) &&
      y.some(
        (O) =>
          typeof O === "string" &&
          !e.surfacedOnWire.has(O) &&
          !g.has(O) &&
          !f.has(O),
      )
    )
      e.nameOnlyAnnouncements.add(T.uuid);
  }
}
function qnl(e, o, n, r) {
  if ((RTi(e), o === "header_rejected" || o === "block_type_unknown")) {
    if ((fca(), o === "header_rejected")) {
      if ((kpt(Jk), r)) (EFs(), kpt($b));
    }
  } else if (o === "model_unsupported") kca(St(n));
  if (
    (t(
      `[late-tool-additions] tool_addition rejected (${o}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`,
      { level: "warn" },
    ),
    l("mcp_late_tool_additions", `rejected_${o}`),
    r)
  )
    a("tengu_inline_tools_refused_retry", { cause: S("header_rejected") });
}
function RTi(e) {
  if (UE(e, Jk)) jh(e, Jk);
  (oe(e), e.surfacedOnWire.clear());
}
function oe(e) {
  if (UE(e, $b)) Rsa(e, $b);
  e.definedByValue.clear();
}
function Ynl(e, o) {
  if ((oe(e), o === "header_rejected" || o === "unsupported_on_platform")) {
    if ((EFs(), o === "header_rejected")) kpt($b);
  }
  (t(
    `[inline-tools] tool_definition rejected (${o}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`,
    { level: "warn" },
  ),
    l("mcp_inline_tools", `rejected_${o}`));
}
function Xnl(e, o, n, r = [], d = {}, c = !1) {
  let f = e ? [{ type: "text", text: e }] : [],
    p = [
      ...r.map((T) => ({
        type: "tool_removal",
        tool: { type: "tool_reference", name: T },
      })),
      ...o.map((T) => {
        let y = qon(d, T);
        return y === void 0
          ? { type: "tool_addition", tool: { type: "tool_reference", name: T } }
          : {
              type: "tool_addition",
              tool: { type: "tool_definition", definition: y },
            };
      }),
    ],
    g = c ? [...p, ...f] : [...f, ...p];
  if (n !== void 0 && g.length > 0) g.push({ ...g.pop(), cache_control: n });
  return g;
}
export {
  Ids,
  cTi,
  Mds,
  Cnl,
  uTi,
  fTi,
  Anl,
  Rnl,
  pTi,
  xnl,
  Pnl,
  bhr,
  Hdo,
  Hds,
  IP,
  mTi,
  Q0n,
  jne,
  TWe,
  Krn,
  Ybt,
  Z0n,
  Dds,
  hTi,
  vae,
  whr,
  $Kl,
  s$t,
  ZI,
  Lds,
  UKl,
  gTi,
  _Ti,
  i$t,
  yTi,
  Ddo,
  Onl,
  BKl,
  Nds,
  qfe,
  a$t,
  VW,
  STi,
  Dh,
  eLn,
  bTi,
  Fds,
  Yfe,
  wTi,
  Inl,
  JCe,
  Gne,
  kTi,
  LSe,
  khr,
  ETi,
  vTi,
  Mnl,
  TTi,
  Hnl,
  CWe,
  cst,
  tLn,
  Dnl,
  nLn,
  Ldo,
  $ds,
  qrn,
  Lnl,
  Nnl,
  Fnl,
  Ehr,
  $nl,
  CTi,
  Unl,
  Bnl,
  Wnl,
  rLn,
  l$t,
  Uq,
  jnl,
  Ndo,
  oLn,
  Uds,
  Gnl,
  znl,
  Vnl,
  Knl,
  ATi,
  qnl,
  RTi,
  Ynl,
  Xnl,
};
