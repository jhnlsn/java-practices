// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { vi, QC } from "/$bunfs/root/chunk-r3kja8v6.js";
import { vo } from "/$bunfs/root/chunk-h4t4qfaq.js";
import { Vo } from "/$bunfs/root/chunk-3grsnd7a.js";
import {
  dt,
  cI,
  GGn,
  nO,
  Qr,
  Sr,
  zN,
  b,
  dee,
  w3i,
} from "/$bunfs/root/chunk-865at33z.js";
import { Ne } from "/$bunfs/root/chunk-69qhefwa.js";
import {
  ns,
  Se,
  $aa,
  Baa,
  jaa,
  st,
  GK,
  pVe,
  zB,
  tFr,
  Hn,
} from "/$bunfs/root/chunk-f9x2f6cx.js";
import { S, f, fe, sl } from "/$bunfs/root/chunk-78g0060s.js";
import { s } from "/$bunfs/root/chunk-c203g5kd.js";
import { t, no, le } from "/$bunfs/root/chunk-w578pjby.js";
import { wi } from "/$bunfs/root/chunk-7cfjrnwy.js";
import { x } from "/$bunfs/root/chunk-cg8dqz0a.js";
import { Ts, Ko, tp } from "/$bunfs/root/chunk-xzvhvaa2.js";
import { a } from "/$bunfs/root/chunk-y53wbr8a.js";
import { u, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { oa } from "/$bunfs/root/chunk-18rsj2ts.js";
import { fh } from "/$bunfs/root/chunk-3t7ve0wy.js";
import { Qc, aqn, BFe } from "/$bunfs/root/chunk-xcgcdx61.js";
import { NE, a_, l6e } from "/$bunfs/root/chunk-pbteexar.js";
import {
  vv,
  Gl,
  vEe,
  Ur,
  yn,
  rJ,
  $f,
  QDr,
} from "/$bunfs/root/chunk-qebpc5de.js";
import { mr } from "/$bunfs/root/chunk-px0hhsq7.js";
import { Nee, xt } from "/$bunfs/root/chunk-n2dbhmj2.js";
import {
  _n,
  _e,
  PRt,
  zr,
  Kb,
  Loe,
  KJi,
  dgn,
} from "/$bunfs/root/chunk-2yx6c1y2.js";
import { jKn } from "/$bunfs/root/chunk-6e68m1dj.js";
import {
  qc,
  lD,
  gu,
  sOr,
  T5i,
  A5i,
  iOr,
  Phe,
  R5i,
  S6n,
  Pde,
  CPs,
  bAt,
  rct,
  Mxo,
  bXe,
  aOr,
  Ohe,
} from "/$bunfs/root/chunk-xfj2cwfv.js";
import { Ks, lt, Dt, yt } from "/$bunfs/root/chunk-rb36kwbn.js";
import { Np } from "/$bunfs/root/chunk-r6r2wdsw.js";
import { vN } from "/$bunfs/root/chunk-4vsz8a99.js";
import { N2e, UBn, Wat, u2t, JBi, Pvr } from "/$bunfs/root/chunk-k67pwqya.js";
import { Ybs, _wo, Xbs, Jbs, ywo, Lle } from "/$bunfs/root/chunk-bz1f2qnq.js";
import { pcn, m9, EWi, Zwl, qwo, b2t } from "/$bunfs/root/chunk-trq47kfh.js";
import { k2t, AV, Um, fp, eI, Wvr, Tvt } from "/$bunfs/root/chunk-gbskgz33.js";
import { Jh, PEr } from "/$bunfs/root/chunk-p1ewvgeh.js";
import { wV, Aat, Vs, al } from "/$bunfs/root/chunk-ht27b0vz.js";
import { EMe, rUe } from "/$bunfs/root/chunk-hnh569cb.js";
import {
  B_t,
  qXo,
  $nt,
  IQr,
  bdi,
  JS,
  gH,
  rfe,
  jQr,
  Knt,
  ZPn,
  iQ,
  PW,
  OW,
} from "/$bunfs/root/chunk-bzyb60p0.js";
import { exe } from "/$bunfs/root/chunk-xfr8663h.js";
import { Vv } from "/$bunfs/root/chunk-6dfy8crz.js";
import { pTi, Pnl, bhr, Hdo, Hds, Ybt } from "/$bunfs/root/chunk-b83x8d52.js";
import { Fk } from "/$bunfs/root/chunk-37zqqqnw.js";
import { Bne } from "/$bunfs/root/chunk-qnq7dhb5.js";
import { Wnr } from "/$bunfs/root/chunk-20aqzht5.js";
import { yLa, X5r } from "/$bunfs/root/chunk-hjheyj7y.js";
import { IT } from "/$bunfs/root/chunk-59xxesz9.js";
import { dp, vR } from "/$bunfs/root/chunk-wwft95x8.js";
import { Ayo } from "/$bunfs/root/chunk-pyt5z6an.js";
import { OC } from "/$bunfs/root/chunk-3b9jqhjk.js";
import { Pe } from "/$bunfs/root/chunk-sghy0qej.js";
import { De } from "/$bunfs/root/chunk-k883m4fq.js";
import { ke } from "/$bunfs/root/chunk-hn3cwwzt.js";
import { T } from "/$bunfs/root/chunk-ma3kja9f.js";
import { M } from "/$bunfs/root/chunk-4smdap7r.js";
import { ne } from "/$bunfs/root/chunk-m15w38ag.js";
import { relative as Fe, resolve as he } from "path";
import { createHash as xe } from "crypto";
function me(e) {
  return xe("sha256")
    .update(
      e.join(`
`),
    )
    .digest("hex");
}
function pe(e, i) {
  let { cli: o, env: r, settings: n, agentFrontmatter: c } = e;
  if (o.dangerouslySkipPermissions) return "skip_flag";
  if (o.permissionMode) return "mode_flag";
  let d = o.inheritPermissionMode;
  if (
    c?.permissionMode === "bypassPermissions" &&
    (!d || d === "bypassPermissions")
  )
    return "agent";
  let p = i("bypassPermissions");
  if (
    d === "bypassPermissions" &&
    (p === void 0 ||
      n.permissions?.defaultMode !== "bypassPermissions" ||
      Ne(r.CLAUDE_CODE_REMOTE))
  )
    return "inherited";
  switch (p) {
    case "policySettings":
      return "policy_settings";
    case "flagSettings":
      return "flag_settings";
    case "userSettings":
      return "user_settings";
    default:
      return "other";
  }
}
function G(e) {
  if (Ts.includes(e)) {
    let i = _n(e);
    if (i) {
      let o = oa(),
        r = o === null ? i : Fe(o, i);
      return r.length < i.length ? r : i;
    }
  }
  return e;
}
function dLa(e, i) {
  let o = [];
  for (let r of e)
    if (
      r.ruleBehavior === "allow" &&
      Lle(r.ruleValue.toolName, r.ruleValue.ruleContent)
    ) {
      let n = r.ruleValue.ruleContent
        ? `${r.ruleValue.toolName}(${r.ruleValue.ruleContent})`
        : `${r.ruleValue.toolName}(*)`;
      o.push({
        ruleValue: r.ruleValue,
        source: r.source,
        ruleDisplay: n,
        sourceDisplay: G(r.source),
      });
    }
  for (let r of i) {
    let n = Ur(r);
    if (Lle(n.toolName, n.ruleContent))
      o.push({
        ruleValue: n,
        source: "cliArg",
        ruleDisplay: n.ruleContent
          ? `${n.toolName}(${n.ruleContent})`
          : `${n.toolName}(*)`,
        sourceDisplay: "--allowed-tools",
      });
  }
  return o;
}
var j5r = `--allow-dangerously-skip-permissions ignored: ${JBi}`,
  Ie = [..._wo, ...Xbs, ...Jbs];
function j(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function $e(e) {
  return !1;
}
function Ue(e) {
  if (e.toolName === yt) return "powershell";
  let i = e.ruleContent;
  if (i === void 0 || j(i)) return "bare";
  if (ywo(i, Jbs)) return "cluster";
  if (ywo(i, Xbs)) return "network";
  return "ace";
}
function cLa(e, i = !1) {
  {
    let { APPIFACT_REPL_TOOL_NAME: r } = import.meta.require(
      "/$bunfs/root/chunk-q36cvre2.js",
    );
    if (e.toolName === r) return j(e.ruleContent);
  }
  if (e.toolName !== ke) return !1;
  let o = e.ruleContent;
  if (o === void 0 || j(o) || $e(o)) return !0;
  return i && ywo(o, Ie);
}
function ge(e) {
  return e.toolName === ke && e.ruleContent === void 0;
}
function uLa(e) {
  return e.toolName === yt && j(e.ruleContent);
}
function YGl() {
  let e = b("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let i = s.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(i);
  return !(e.excludeEntrypoints ?? []).includes(i);
}
function fLa(e, i, o = !1) {
  let r = [];
  for (let n of e)
    if (n.ruleBehavior === "allow" && cLa(n.ruleValue, o))
      r.push({
        ruleValue: n.ruleValue,
        source: n.source,
        ruleDisplay: n.ruleValue.ruleContent
          ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})`
          : `${n.ruleValue.toolName}(*)`,
        sourceDisplay: G(n.source),
      });
  for (let n of i) {
    let c = Ur(n);
    if (cLa(c, o))
      r.push({
        ruleValue: c,
        source: "cliArg",
        ruleDisplay: c.ruleContent
          ? `${c.toolName}(${c.ruleContent})`
          : `${c.toolName}(*)`,
        sourceDisplay: "--allowed-tools",
      });
  }
  return r;
}
function pLa(e, i) {
  let o = [];
  for (let r of e)
    if (r.ruleBehavior === "allow" && uLa(r.ruleValue))
      o.push({
        ruleValue: r.ruleValue,
        source: r.source,
        ruleDisplay: `${yt}(*)`,
        sourceDisplay: G(r.source),
      });
  for (let r of i) {
    let n = Ur(r);
    if (uLa(n))
      o.push({
        ruleValue: n,
        source: "cliArg",
        ruleDisplay: `${yt}(*)`,
        sourceDisplay: "--allowed-tools",
      });
  }
  return o;
}
function f3o(e) {
  return [];
}
function Ve(e) {
  return tp.includes(e) || e === "session" || e === "cliArg";
}
function XGl(e, i, o = !1) {
  let r = new Map();
  for (let c of i) {
    if (!o && !Ve(c.source)) continue;
    let d = c.source,
      p = r.get(d) || [];
    (p.push(c.ruleValue), r.set(d, p));
  }
  let n = e;
  for (let [c, d] of r)
    n = Jh(n, {
      type: "removeRules",
      rules: d,
      behavior: "allow",
      destination: c,
    });
  return n;
}
function pie(e) {
  let i = Aat(e.alwaysAllowRules, "allow"),
    o = dLa(i, []);
  if (o.length === 0)
    return e.strippedDangerousRules !== void 0
      ? e
      : { ...e, strippedDangerousRules: {} };
  for (let n of o)
    t(
      `Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`,
    );
  let r = {};
  for (let [n, c] of Object.entries(e.strippedDangerousRules ?? {}))
    if (c) r[n] = [...c];
  for (let n of o) {
    let c = yn(n.ruleValue),
      d = (r[n.source] ??= []);
    if (!d.includes(c)) d.push(c);
  }
  return { ...XGl(e, o, !0), strippedDangerousRules: r };
}
function uZs(e, i, o = []) {
  let r = { ...e, toolAliases: i };
  if (!b("tengu_sorted_zebra", !1)) return r;
  for (let [n, c] of Object.entries(i ?? {})) {
    if (n.startsWith("mcp__") || !Lle(n, void 0)) continue;
    let d = typeof c === "string" ? mr(c) : null;
    if (d?.toolName) {
      (Ybs(d.serverName, [d.toolName]), u("auto_mode_tool_alias"));
      continue;
    }
    let p =
      s.CLAUDE_AGENT_SDK_MCP_NO_PREFIX &&
      typeof c === "string" &&
      c !== "" &&
      d === null;
    if (p && o.length > 0) {
      for (let P of o) Ybs(P, [c]);
      u("auto_mode_tool_alias");
      continue;
    }
    (l("auto_mode_tool_alias", p ? "no_sdk_server" : "target_not_mcp_tool"),
      t(
        `Auto mode: toolAliases maps ${n} to ${typeof c === "string" ? c : `a value of type ${typeof c}`}, ${p ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`,
        { level: "warn" },
      ));
  }
  return p3o(r);
}
function fZs(e) {
  let i = T(e),
    o = new Map(),
    r = i ? 0 : 1;
  for (let [n, c] of i ? Object.entries(e) : []) {
    if (n === "" || n.startsWith("mcp__") || !Array.isArray(c)) {
      r++;
      continue;
    }
    for (let d of c)
      if (typeof d === "string" && d !== "" && !d.startsWith("mcp__")) {
        Ybs(n, [d]);
        let p = o.get(n) ?? [];
        if (!p.includes(d)) p.push(d);
        o.set(n, p);
      } else r++;
  }
  if (o.size > 0) u("auto_mode_code_running_mcp_tools");
  if (r > 0)
    (l("auto_mode_code_running_mcp_tools", "malformed_entry"),
      t(
        `Auto mode: ignored ${r} malformed ${r === 1 ? "part" : "parts"} of codeRunningMcpTools, which should map each MCP server name to a list of tool names, e.g. {"workspace": ["bash"]}. In auto mode, allow rules and hooks can still approve calls to the tools meant there without the classifier.`,
        { level: "warn" },
      ));
  return Object.fromEntries(o);
}
function p3o(e) {
  return e.strippedDangerousRules === void 0 ? e : pie(e);
}
function Mqe(e) {
  let i = e.strippedDangerousRules;
  if (!i) return e;
  let o = e;
  for (let [r, n] of Object.entries(i)) {
    if (!n || n.length === 0) continue;
    let c = r === "command" ? n.filter((d) => !ZPn(d)) : [...n];
    if (c.length === 0) continue;
    o = Jh(o, {
      type: "addRules",
      rules: c.map((d) => Um(d, "allow")),
      behavior: "allow",
      destination: r,
    });
  }
  return { ...o, strippedDangerousRules: void 0 };
}
function pZs(e, i) {
  return {
    ...i,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel:
      e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: ye(e.alwaysAllowRules, i),
    strippedDangerousRules:
      e.strippedDangerousRules && ye(e.strippedDangerousRules, i),
  };
}
function ye(e, i) {
  let o = Object.keys(e).reduce(
    (r, n) => {
      let c = i.strippedDangerousRules?.[n] ?? [],
        d = new Set([
          ...(i.alwaysAllowRules[n] ?? []),
          ...(n === "command" ? c.filter((y) => !ZPn(y)) : c),
        ]),
        p = e[n] ?? [],
        P = p.filter((y) => d.has(y));
      return ((r.rules[n] = P), (r.dropped ||= P.length !== p.length), r);
    },
    { rules: {}, dropped: !1 },
  );
  return o.dropped ? o.rules : e;
}
function Stt(e) {
  return e.planEnteredBy === void 0 ? e : { ...e, planEnteredBy: void 0 };
}
function zD(e, i, o, r, n) {
  if (((o = Stt(o)), e === i)) return o;
  if (o.startupModeDecidedByProactivityLevel !== void 0)
    o = { ...o, startupModeDecidedByProactivityLevel: void 0 };
  if (
    (rct(void 0),
    bXe(!1),
    exe({ from: e, to: i, trigger: r }),
    pVe(e, i),
    tFr(e, i),
    e === "plan" && i !== "plan")
  )
    GK(!0);
  if (i === "plan" && e !== "plan") return uXt(o, n);
  let c = e === "auto" || (e === "plan" && gu()),
    d = i === "auto";
  if (d && !c) {
    if (!JS())
      throw Error("Cannot transition to auto mode: gate is not enabled");
    (lD(!0), (o = pie(o)));
  } else if (c && !d) (lD(!1), zB(!0), (o = Mqe(o)));
  if (e === "plan" && i !== "plan" && o.prePlanMode)
    return { ...o, prePlanMode: void 0 };
  return o;
}
async function mZs() {
  return !1;
}
var We = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model",
};
function mie(e, i) {
  let o = a_(e);
  if (o === void 0) return { ok: !1, error: l6e, code: "invalid_mode" };
  if (o === "bypassPermissions") {
    if (i.restricted) return { ok: !1, error: pTi, code: "bypass_restricted" };
    if (OC())
      return {
        ok: !1,
        error:
          "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
        code: "bypass_disabled",
      };
    if (!i.isBypassPermissionsModeAvailable)
      return {
        ok: !1,
        error: i.isBypassHeldForAutoSwitch
          ? "Bypass permissions is on hold in this session and can't be turned on from here."
          : "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
        code: "bypass_not_launched",
      };
  }
  if (o === "auto" && !JS()) return m3o(gH());
  return { ok: !0, mode: o };
}
function m3o(e) {
  return {
    ok: !1,
    error: e
      ? `Cannot set permission mode to auto: ${rfe(e)}`
      : "Cannot set permission mode to auto",
    code: e ? We[e] : "auto_mode_unavailable",
  };
}
function iR(e, i, o, r) {
  let n = mie(e, i);
  if (!n.ok) return n;
  let c = n.mode,
    d;
  if (
    (o((p) => {
      if (p.mode === c) return Stt(p);
      if (p !== i) {
        let y = mie(c, p);
        if (!y.ok) return ((d = y), p);
      }
      return { ...zD(p.mode, c, p, r), mode: c };
    }),
    d !== void 0)
  )
    return d;
  return (
    setImmediate(() => {
      PW.emit();
    }),
    { ok: !0, mode: c }
  );
}
function hZs(e, i) {
  let o = i.context.mode;
  if (!mie(o, e).ok) return i.context;
  zD(e.mode, o, e);
  let r = i.autoModeActive && JS() && (o === "auto" || (o === "plan" && EZs()));
  if (gu() !== r) (lD(r), zB(!r));
  return (
    setImmediate(() => {
      PW.emit();
    }),
    i.autoModeActive && !r ? Mqe(i.context) : i.context
  );
}
function G5r(e) {
  let i = [],
    o = new Set(),
    r = !1,
    n = [],
    c = [],
    d = Pe("tengu_tools_exclusion_killswitch", { safe: !1 });
  for (let p = 0; p < e.length; p++) {
    let P = e[p];
    if (P === void 0) continue;
    if (!P.startsWith(rJ)) {
      i.push(P);
      continue;
    }
    let y = P.slice(rJ.length);
    if (y === "") {
      let E = e[p + 1];
      if (E === void 0 || E.startsWith(rJ) || E.startsWith("(")) {
        r = !0;
        continue;
      }
      if ((p++, !d)) n.push(E);
      ((P = rJ + E), (y = E));
    }
    let v = y.indexOf("(");
    if (v === 0) {
      r = !0;
      continue;
    }
    if (v > 0) {
      if (((y = y.slice(0, v)), !d)) c.push(P);
    }
    if (!d) o.add(Gl(y));
  }
  return { kept: i, excluded: o, bare: r, detached: n, scoped: c };
}
function JGl(e, i) {
  let o = e.join(" ").trim();
  if (Wnr(o)) return Hds(i());
  let { kept: n, excluded: c } = G5r($f(e)),
    d = n.includes("preset:default")
      ? i()
          .map((p) => p.name)
          .concat(n.filter((p) => p !== "preset:default"))
      : n;
  if (c.size === 0) return d;
  return d.filter((p) => !c.has(Gl(p)));
}
var Ae = [ke, yt, Qr, Sr];
function QGl({
  baseToolsCli: e,
  baseToolsIsPreset: i,
  parsedBaseTools: o,
  getAllBaseTools: r,
  disallowedToolsCli: n = [],
}) {
  let c = [],
    d = [],
    p = JGl(e, r),
    P = new Set(p.map(Gl)),
    y = r(),
    v = i ? null : y,
    E = v === null ? Hds(y) : v.map((g) => g.name),
    { excluded: w } = o;
  for (let g of v ?? r())
    if (g.familyParentToolName !== void 0 && w.has(g.familyParentToolName))
      P.delete(g.name);
  for (let g of y)
    if (g.familyParentToolName !== void 0 && P.has(g.familyParentToolName))
      P.add(g.name);
  if (dp.some((g) => P.has(g))) P.add(Fk);
  if (vi() && Se()) (P.add(vo), P.add(Vo));
  for (let g of w) P.delete(g);
  if (w.has(ke)) for (let g of Ybt) P.delete(g);
  let B = new Set(
    $f(n)
      .map((g) => Ur(g))
      .filter((g) => g.ruleContent === void 0)
      .map((g) => g.toolName),
  );
  if (!w.has(Vv) && [...P].some((g) => jQr(g) && !B.has(g))) P.add(Vv);
  let _ = E.filter((g) => !P.has(g));
  for (let g of w) {
    if (E.includes(g)) continue;
    if (Knt.has(g)) {
      t(`--tools exclusion names a removed tool: ${g}`);
      continue;
    }
    if ((_.push(g), Ae.includes(g))) continue;
    (c.push(
      `--tools entry "${rJ}${g}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`,
    ),
      d.push(`--tools "${rJ}${g}" matches no tool \xB7 check for typos`));
  }
  for (let g of o.scoped)
    c.push(
      `--tools entry "${g}" names a rule, not a tool; the whole tool is withheld. Write "${rJ}${g.slice(rJ.length, g.indexOf("("))}" to say so.`,
    );
  for (let g of o.detached)
    c.push(
      `--tools entry "${rJ} ${g}" was read as "${rJ}${g}" and ${g} is withheld; write it without the space.`,
    );
  if (o.bare)
    (c.push(
      `--tools has a "${rJ}" with no tool name after it; write the name right after it, as in "${rJ}Bash".`,
    ),
      d.push(`--tools has a "${rJ}" with no tool name \xB7 write "${rJ}Bash"`));
  if (!i) {
    for (let g of [...(x() === "windows" ? [yt] : []), Qr, Sr])
      if (!P.has(g) && !_.includes(g)) _.push(g);
  }
  return {
    toolsToDisallow: _,
    toolsKept: i || o.kept.includes("preset:default") ? void 0 : P,
    warnings: c,
    securityWarnings: d,
  };
}
function je({ processPwd: e, originalCwd: i }) {
  let { resolvedPath: o, isSymlink: r } = no(le(), e);
  return r ? o === he(i) : !1;
}
function gZs(e) {
  return {
    relaunchedBaseline: yLa(Boolean(e)),
    relaunchedStartupModeDecided: X5r(),
  };
}
function h3o({
  permissionModeCli: e,
  inheritPermissionModeCli: i,
  dangerouslySkipPermissions: o,
  allowDangerouslySkipPermissions: r,
  bypassPermissionsBlockedByHost: n,
  agentPermissionMode: c,
  proactivityLevel: d,
  ignoreProjectModePick: p,
  relaunchedBaseline: P,
  relaunchedStartupModeDecided: y,
}) {
  let v = NE(e),
    E = NE(i);
  if (Np()) {
    let h =
        o ||
        (v && v !== "default") ||
        (E && E !== "default") ||
        (c && c !== "default"),
      D =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (h)
      process.stderr.write(`\u26A0 ${D}
`);
    return {
      mode: "default",
      notification: h ? D : void 0,
      modeSuppliedOnInvocation: !0,
    };
  }
  let B = {
      cli: {
        permissionMode:
          y === !0 &&
          d !== void 0 &&
          v !== void 0 &&
          Wat(d, v, void 0) !== void 0
            ? void 0
            : v,
        inheritPermissionMode: E,
        dangerouslySkipPermissions: o,
        allowDangerouslySkipPermissions: r,
        bypassPermissionsBlockedByHost: n,
        isNonInteractiveSession: Se(),
      },
      env: { ...process.env, CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0 },
      settings: zr() || {},
      agentFrontmatter: c ? { permissionMode: c } : void 0,
      proactivityLevel: y === !1 ? void 0 : d,
      ignoreProjectModePick: p,
    },
    _ = UBn(B);
  (S6n(_.fromAutoFallback),
    bXe(_.fromAutoFallback || _.projectModePick !== void 0),
    CPs(_.projectModePick));
  let g = !Se() && zN(),
    R =
      _.levelPickHeldForPendingVerdict ||
      _.projectModePickHeldForPendingVerdict;
  rct(
    !_.modeSuppliedOnInvocation && (g || R)
      ? { mode: _.mode, inputs: B, awaitsGrowthBook: g, awaitsPolicyVerdict: R }
      : void 0,
  );
  let O;
  {
    let h = _.decidedByProactivityLevel || (y === !0 && d !== void 0);
    O = {
      proactivityBaseline: {
        mode: P ?? _.baselineMode,
        fromRelaunchHandoff: P !== void 0,
      },
      startupModeDecidedByProactivityLevel: h ? d : void 0,
    };
  }
  if (_.mode === "auto") lD(!0);
  return {
    mode: _.mode,
    notification: _.notification,
    proactivity: O,
    modeSuppliedOnInvocation: _.modeSuppliedOnInvocation,
    bypassRequestSource: _.mode === "bypassPermissions" ? pe(B, u2t) : void 0,
  };
}
function g3o() {
  return s.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function ZGl(e) {
  return e === "cliArg" && g3o();
}
function _3o() {
  return (
    s.CLAUDE_CHROME_CLASSIFIER_FLOOR ??
    (s.CLAUDE_CODE_REMOTE
      ? Pe("tengu_cowork_chrome_automode_default", { safe: !0 })
      : b("tengu_cowork_chrome_automode_default", !1))
  );
}
function y3o(e) {
  if (
    e.blockFileToolReadsOutsideWorkingDirectories === !0 &&
    Se() &&
    !PRt().some(
      (i) => i.permissions?.blockWritesOutsideWorkingDirectories === !0,
    )
  )
    return { ...e, blockWritesOutsideWorkingDirectories: !0 };
  return {
    ...e,
    blockWritesOutsideWorkingDirectories: !0,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      toolsNarrowing: M([...(e.alwaysDenyRules.toolsNarrowing ?? []), IT, Bne]),
    },
  };
}
async function _Zs({
  allowedToolsCli: e,
  disallowedToolsCli: i,
  baseToolsCli: o,
  getAllBaseTools: r,
  restricted: n = !1,
  permissionMode: c,
  allowDangerouslySkipPermissions: d,
  addDirs: p,
  backgroundSessionPermissionRules: P,
  relaunchSessionAddDirs: y,
  storageV5: v,
}) {
  let E = [],
    w = [],
    B = null,
    _ = c === "bypassPermissions" || d,
    g = $f(e)
      .map((m) => yn(Um(m, "allow")))
      .filter((m) => {
        let A = aqn(Ur(m).toolName);
        if (A)
          return (
            E.push(
              `Ignoring --allowedTools rule "${m}": ${A.error}. ${A.suggestion}.`,
            ),
            !1
          );
        return !0;
      }),
    R = M([...QDr(i), ...iQ()]),
    O = !!o && o.length > 0 && Wnr(o.join(" ").trim()) !== null,
    h =
      o && !O
        ? G5r($f(o))
        : { kept: [], excluded: new Set(), bare: !1, detached: [], scoped: [] },
    D = h.kept.map(Gl).filter((m) => !h.excluded.has(m)),
    H = !!o?.length && !O && D.length === 0,
    ee = (m) => D.includes(m) || g.some((A) => Ur(A).toolName === m);
  ($aa([Qr, Sr].some(ee)), Baa(B_t.some(ee)));
  let U = [],
    oe = [],
    Y,
    te = new Set();
  if (o && o.length > 0) {
    let m = QGl({
      baseToolsCli: o,
      baseToolsIsPreset: O,
      parsedBaseTools: h,
      getAllBaseTools: r,
      disallowedToolsCli: i,
    });
    (E.push(...m.warnings),
      w.push(...m.securityWarnings.map((A) => ({ text: A }))),
      (U = m.toolsToDisallow),
      (oe = H ? [] : m.toolsToDisallow),
      (Y = m.toolsKept));
  }
  if (n) {
    let m = bhr(Hdo(r()), Pnl(D));
    for (let A of m) te.add(A);
    U = M([...U, ...m]);
  }
  jaa(oe.filter((m) => !te.has(m)));
  let se = new Map(),
    L = s.PWD,
    q = L ? ns() : null;
  if (L && q !== null && L !== q && je({ originalCwd: q, processPwd: L }))
    (se.set(L, { path: L, source: "session" }), Zwl(L));
  let ie = (zr() || {}).permissions?.disableBypassPermissionsMode === "disable",
    K = d && c !== "bypassPermissions" && !ie && !n && Pvr("bypassPermissions");
  if (K) (a("tengu_bg_allow_bypass_unconsented_ignored", {}), E.push(j5r));
  let ve = (c === "bypassPermissions" || (d && !K)) && !ie && !n && !0,
    re =
      ne() && v !== void 0 && v.hostFiles.serving("workspace") === "host"
        ? { strictPersistedTrust: await w3i(v) }
        : {},
    F = eI(re),
    z = [...R, ...U].map(Ur),
    Ce = z.some(ge),
    we =
      z.some((m) => m.toolName === ke) ||
      F.some((m) => m.ruleBehavior === "deny" && m.ruleValue.toolName === ke),
    Re =
      s.CLAUDE_CODE_USE_POWERSHELL_TOOL ||
      $f(o ?? [])
        .map(Gl)
        .includes(yt) ||
      g.some((m) => Ur(m).toolName === yt) ||
      z.some((m) => m.toolName === yt) ||
      F.some((m) => m.ruleValue.toolName === yt);
  if (x() === "windows" && Nee() !== null && we && !Re) {
    R = [...R, yt];
    let m = F.filter((A) => A.ruleBehavior === "deny" && ge(A.ruleValue));
    if (
      vR() &&
      (Ce || m.length > 0) &&
      !m.some((A) => A.source === "policySettings")
    )
      E.push(
        `Denying ${ke} also turns off the ${yt} tool, so Claude has neither. To use ${yt}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`,
      );
  }
  let ae = [];
  if (!s.CLAUDE_CODE_REMOTE && s.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let m = [...fLa(F, g, !0), ...pLa(F, g)];
    if (m.length > 0) {
      let A = m.map((I) => Ue(I.ruleValue)),
        k = !1,
        W = !1;
      a("tengu_ant_overly_broad_bash_detected", {
        count: m.length,
        categories: sl(M(A)),
        yoloEquivEnabled: k,
        willStrip: ae.length,
        entrypoint: fe(fh()) ?? S("other"),
        ...!1,
      });
    }
  }
  let ue = [];
  if (c === "auto") ue = dLa(F, g);
  let X = fp(),
    de = qwo();
  if ((PEr(), X && g.length > 0))
    E.push(
      `Ignoring --allowedTools ${g.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`,
    );
  let C = OW(
    {
      mode: c,
      additionalWorkingDirectories: se,
      alwaysAllowRules: {
        cliArg: X ? [] : g,
        ...(P && { session: X ? [] : P.allow }),
      },
      alwaysDenyRules: {
        cliArg: R,
        ...(P && { session: P.deny }),
        ...(U.length > 0 && { toolsNarrowing: U }),
      },
      alwaysAskRules: {},
      mcpPermissionModeOverrides: {},
      ...(n && { restricted: n }),
      ...(H && { builtInToolsDisabled: H }),
      ...(Y !== void 0 && { toolsKeptByLaunchList: Object.freeze([...Y]) }),
      ...(b2t() && { blockReadsOutsideWorkingDirectories: !0 }),
      ...(m9() && { blockFileToolReadsOutsideWorkingDirectories: !0 }),
      ...(de.length > 0 && { readBlockExemptPaths: de }),
      isBypassPermissionsModeAvailable: ve,
      ...((m) => ({
        isAutoModeAvailable: m,
        canAutoClassifierRun: m,
        chromeClassifierFloorEnabled: _3o(),
        chromeNavigationClassifierEnabled:
          b("tengu_auto_mode_config", {})?.chromeNavigation === !0,
        chromeClickClassifierEnabled:
          b("tengu_auto_mode_config", {})?.classifyChromeClicks === !0 ||
          qXo("browserClicks"),
        chromeHostToolAsksEnabled: b("tengu_cozy_eagle", !0) !== !1,
      }))(JS()),
      isRemoteMode: s.CLAUDE_CODE_REMOTE || Hn(),
    },
    F,
  );
  if (pcn()) C = y3o(C);
  C = Ayo(C);
  for (let m of M([
    ...$f(e),
    ...Ko().flatMap((A) => _e(A)?.permissions?.allow ?? []),
  ])) {
    let A = Um(m, "allow");
    if (AV(A) && Object.values(C.alwaysAllowRules).flat().includes(yn(A))) {
      let { toolName: k } = A;
      (E.push(`Permission allow rule "${m}" ${k2t(m, k)}`),
        w.push({ text: `Allow rule "${m}" ${k2t(m, k)}` }));
    }
  }
  for (let m of ezl([...wV(C), ...Vs(C), ...al(C)], r))
    if ((E.push(m.line), m.securityWarning !== void 0))
      w.push(m.securityWarning);
  let { repoOnly: Oe } = Wvr((m) => {
      try {
        return [he(xt(m))];
      } catch {
        return [];
      }
    }, v),
    Be = [
      ...Tvt(re).map((m) => ({ dir: m, destination: "localSettings" })),
      ...[...(P?.addDirs ?? []), ...(y ?? [])].map((m) => ({
        dir: m,
        destination: "session",
      })),
      ...p.map((m) => ({ dir: m, destination: "cliArg" })),
    ],
    Le = await Promise.all(
      Be.map(async ({ dir: m, destination: A }) => ({
        destination: A,
        result: await EMe(m, C),
      })),
    ),
    Z = new Map(),
    ce = [];
  for (let { result: m, destination: A } of Le)
    if (m.resultType === "success") {
      if (A === "session") ce.push(m.absolutePath);
      if (
        ((C = Jh(C, {
          type: "addDirectories",
          directories: [m.absolutePath],
          destination:
            A === "localSettings" && Oe.has(m.absolutePath)
              ? "projectSettings"
              : A,
        })),
        ZGl(A))
      ) {
        EWi(m.absolutePath);
        let k = jKn(m.absolutePath);
        if (k.length > 0) {
          Z.set(m.absolutePath, k);
          let W = k.filter((I) => I !== m.absolutePath);
          if (W.length > 0) {
            for (let I of W) EWi(I);
            C = Jh(C, {
              type: "addDirectories",
              directories: W,
              destination: A,
            });
          }
        }
      }
    } else if (
      m.resultType !== "alreadyInWorkingDirectory" &&
      m.resultType !== "pathNotFound"
    )
      E.push(rUe(m));
  if (Z.size > 0) C = { ...C, trustedNetworkDirectories: Z };
  return {
    toolPermissionContext: C,
    warnings: E,
    securityWarnings: w,
    dangerousPermissions: ue,
    overlyBroadBashPermissions: ae,
    ...(K && { bypassCapabilityNotification: j5r }),
    inheritedSessionDirectories: ce,
  };
}
function ezl(e, i) {
  let o = [],
    r = i(),
    n = new Set([...r.map((d) => d.name), ...Ae]),
    c = new Map([
      [ke, "command"],
      [yt, "command"],
      [Qr, "path"],
      [Sr, "path"],
      ...r
        .filter((d) => d.ruleContentField)
        .map((d) => [d.name, d.ruleContentField]),
    ]);
  for (let d of [...V(e, "deny"), ...V(e, "ask")]) {
    if (d.source === "toolsNarrowing" || d.source === "session") continue;
    let { toolName: p, ruleContent: P } = d.ruleValue;
    if (Knt.has(p)) {
      t(`Permission ${d.ruleBehavior} rule names a removed tool: ${p}`);
      continue;
    }
    if (vv(p) || p.includes("_") || vEe(p).length > 0 || n.has(p)) {
      let y = c.get(p);
      if (y && P !== void 0) {
        let v = P.indexOf(":");
        if (v > 0 && P.slice(0, v).trim() === y) {
          let E = `Permission ${d.ruleBehavior} rule "${yn(d.ruleValue)}" targets ${y} as a raw string and will not match`,
            w =
              p === Sr
                ? "."
                : p === Qr
                  ? ` \u2014 use ${De}(${"\u2026"}) to match file-read paths.`
                  : p === Dt || p === Ks
                    ? ` \u2014 use ${lt}(${"\u2026"}) to match file-write paths.`
                    : ` \u2014 use ${p}(${"\u2026"}) for ${p}'s own matcher.`;
          o.push(
            Q(
              d,
              E + w,
              `${wi(d.ruleBehavior)} rule ${yn(d.ruleValue)} never matches${p === Sr ? "" : ` \xB7 use ${p === Qr ? De : p === Dt || p === Ks ? lt : p}(${"\u2026"})`}`,
            ),
          );
        }
      }
      continue;
    }
    o.push(
      Q(
        d,
        `Permission ${d.ruleBehavior} rule "${yn(d.ruleValue)}" matches no known tool \u2014 check for typos.`,
        `${wi(d.ruleBehavior)} rule ${yn(d.ruleValue)} matches no tool \xB7 check for typos`,
      ),
    );
  }
  for (let d of [...V(e, "allow"), ...V(e, "deny"), ...V(e, "ask")]) {
    if (d.source === "session" || d.source === "toolsNarrowing") continue;
    if (
      d.source === "cliArg" &&
      d.ruleBehavior === "allow" &&
      d.ruleValue.toolName === Qr
    )
      continue;
    let { ruleContent: p } = d.ruleValue;
    if (p !== void 0) {
      let y = p.indexOf(":");
      if (
        y > 0 &&
        /^[A-Za-z_][A-Za-z0-9_]*$/.test(p.slice(0, y).trim()) &&
        !/^[A-Za-z]:[\\/]/.test(p.trim())
      )
        continue;
    }
    let P = BFe(yn(d.ruleValue), d.ruleBehavior);
    if (P.valid && P.warning) {
      let y =
        d.source === "cliArg"
          ? d.ruleBehavior === "allow"
            ? "--allowed-tools"
            : "--disallowed-tools"
          : d.source === "flagSettings" && !_n("flagSettings")
            ? "--settings"
            : d.source === "policySettings"
              ? "managed policy settings"
              : G(d.source);
      o.push(
        Q(
          d,
          `Permission ${d.ruleBehavior} rule (${y}): ${P.warning}`,
          P.securityNotice === void 0
            ? void 0
            : `${wi(d.ruleBehavior)} rule ${P.securityNotice}`,
        ),
      );
    }
  }
  return o;
}
function Q(e, i, o) {
  if (o === void 0) return { line: i };
  let r = Ts.find((c) => c === e.source && c !== "flagSettings"),
    n = r === void 0 ? void 0 : _n(r);
  return {
    line: i,
    securityWarning:
      n === void 0 ? { text: o } : { text: o, seenKey: me([e.source, n, o]) },
  };
}
function V(e, i) {
  return e.filter((o) => o.ruleBehavior === i);
}
function yZs(e, i) {
  if (fp()) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      cliArg: [...(e.alwaysAllowRules.cliArg ?? []), ...i],
    },
  };
}
function z5r(e, i = {}) {
  let o = Mxo();
  if (!o) return e;
  let r = o.awaitsGrowthBook && zN();
  if (r && !o.awaitsPolicyVerdict) return e;
  if (e.mode !== o.mode) return (rct(void 0), e);
  let n = UBn(o.inputs);
  if (n.levelPickHeldForPendingVerdict) return e;
  let c = bAt();
  if (c !== void 0 && n.projectModePick === void 0) return (rct(void 0), e);
  let d =
    r || n.projectModePickHeldForPendingVerdict
      ? {
          mode: n.mode,
          inputs: o.inputs,
          awaitsGrowthBook: r,
          awaitsPolicyVerdict: n.projectModePickHeldForPendingVerdict,
        }
      : void 0;
  if (
    (rct(d),
    CPs(n.projectModePick),
    c === void 0 && n.projectModePick !== void 0 && e.mode !== "auto")
  )
    bXe(!0);
  if (n.notification !== void 0) i.onNotification?.(n.notification);
  if (
    n.mode === e.mode ||
    (n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable) ||
    (n.mode === "auto" && !JS())
  )
    return e;
  (t(
    `[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`,
  ),
    S6n(n.fromAutoFallback));
  let p = n.projectModePick !== void 0 && aOr(),
    P = {
      ...zD(e.mode, n.mode, e, "startup_reresolve"),
      mode: n.mode,
      ...(o.awaitsPolicyVerdict &&
        n.decidedByProactivityLevel && {
          startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel,
        }),
    };
  return (rct(d), bXe(p), P);
}
function S3o() {
  let e = Mxo();
  return e?.awaitsPolicyVerdict && UBn(e.inputs).levelPickHeldForPendingVerdict
    ? "Accept edits didn't start: your organization's policy hasn't loaded \xB7 Shift+Tab to switch"
    : void 0;
}
function b3o() {
  let e = Mxo();
  if (!e?.awaitsPolicyVerdict) return;
  rct(e.awaitsGrowthBook && zN() ? { ...e, awaitsPolicyVerdict: !1 } : void 0);
}
async function wgt(e, i, o = !1) {
  let r = await dee("tengu_auto_mode_config", {}),
    n = Me(r?.enabled),
    c = IQr();
  if (!Phe()) iOr(n === "disabled");
  let d = dt(),
    { supported: p, disableFastModeBreakerFires: P } = GGn({
      model: d,
      fastMode: !!i,
      disableFastMode: !!r?.disableFastMode,
    });
  R5i(P ? (i ? "fast-mode" : "model") : null);
  let y = n !== "disabled" && !c && p,
    v = y,
    E = c && n !== "disabled" && p;
  t(
    `[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${c} model=${d} modelSupported=${p} disableFastModeBreakerFires=${P} carouselAvailable=${v} canEnterAuto=${y}`,
  );
  let w = A5i();
  if (!y) rct(void 0);
  let B = (h, D) => {
    if (h.isAutoModeAvailable !== D)
      t(
        `[auto-mode] verifyAutoModeGateAccess setAvailable: ${h.isAutoModeAvailable} -> ${D}`,
      );
    return h.isAutoModeAvailable === D && h.canAutoClassifierRun === y
      ? h
      : { ...h, isAutoModeAvailable: D, canAutoClassifierRun: y };
  };
  if (y)
    return {
      canEnterAuto: y,
      refusedForSettingsAlone: E,
      updateContext: (h) => {
        if (
          (b3o(),
          (h = z5r(h)),
          rct(void 0),
          h.mode === "plan" && !h.prePlanMode)
        ) {
          let D = K5r(h);
          if (D) return B({ ...D, prePlanMode: "default" }, v);
        }
        return B(h, v);
      },
    };
  let _;
  if (c)
    ((_ = "settings"),
      t("auto mode disabled: disableAutoMode in settings", { level: "warn" }));
  else if (n === "disabled")
    ((_ = "circuit-breaker"),
      t(
        'auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)',
        { level: "warn" },
      ));
  else if (i && P && cI(d))
    ((_ = "fast-mode"),
      t(
        "auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on",
        { level: "warn" },
      ));
  else
    ((_ = "model"),
      t(`auto mode disabled: model ${dt()} does not support auto mode`, {
        level: "warn",
      }));
  let g = rfe(_),
    R = (h) => {
      if (
        (t(
          `[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${h.mode} ctx.prePlanMode=${h.prePlanMode} reason=${_}`,
        ),
        !Hqe(h))
      )
        return B(h, !1);
      return w3o(h);
    },
    O = Hqe(e);
  if (!O && !w)
    return { updateContext: R, canEnterAuto: y, refusedForSettingsAlone: E };
  if (O) {
    let h = o && _ === "model" && Pde();
    return {
      updateContext: R,
      canEnterAuto: y,
      refusedForSettingsAlone: E,
      notification: h ? void 0 : g,
    };
  }
  return {
    updateContext: R,
    canEnterAuto: y,
    refusedForSettingsAlone: E,
    notification: e.isAutoModeAvailable ? g : void 0,
  };
}
function LCn() {
  return Phe() || IQr();
}
function Ge() {
  return Ko().findLast((e) => $nt(_e(e) || {}));
}
function SZs() {
  return Ko().filter((e) => $nt(_e(e) || {}));
}
function V5r() {
  let e = Ge(),
    i = mLa();
  return {
    autoModeAvailable: JS(),
    autoModeUnavailableReason: fe(gH()),
    autoModeDisabledBySettingsSource: fe(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? fe(Kb()) : void 0,
    autoModeDisabledByTrustedPolicy: btt(),
    autoModeEnabledState: f(i.value),
    autoModeEnabledStateSource: f(i.src),
    autoModeCircuitBroken: Phe(),
    defaultModeSetting: fe((zr() || {}).permissions?.defaultMode),
    autoModeFromFallback: Pde(),
  };
}
function btt() {
  return $nt(_e("policySettings") || {}) && Loe().some($nt);
}
var He = "enabled";
function Me(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return He;
}
function bZs() {
  return mLa().value;
}
function mLa() {
  let i = b("tengu_auto_mode_config", {})?.enabled,
    o = Me(i);
  return { value: o, src: i === o ? "gb" : "default" };
}
function wZs(e) {
  let i = e;
  if (e.mode === "bypassPermissions")
    i = Jh(e, { type: "setMode", mode: "default", destination: "session" });
  return (
    qc().noteBypassAutoSwitch({ isHeld: void 0 }),
    {
      ...i,
      prePlanMode:
        i.prePlanMode === "bypassPermissions" ? "default" : i.prePlanMode,
      isBypassPermissionsModeAvailable: !1,
      isBypassHeldForAutoSwitch: void 0,
    }
  );
}
function Hqe(e) {
  return (
    e.mode === "auto" ||
    (e.mode === "plan" &&
      (e.prePlanMode === "auto" || !!e.strippedDangerousRules))
  );
}
function w3o(e) {
  let i = "default";
  {
    let o = e.startupModeDecidedByProactivityLevel;
    if ((e.mode === "auto" || e.prePlanMode === "auto") && o !== void 0) {
      if (vN()) {
        let r = Qc(
            N2e(
              o,
              { isAutoModeAvailable: !1, isBypassPermissionsModeAvailable: !1 },
              e.proactivityBaseline?.mode,
            ),
          ),
          n = Wat(o, r, e.proactivityBaseline?.mode) !== void 0;
        i = r === "plan" || n ? "default" : r;
      }
      e = { ...e, startupModeDecidedByProactivityLevel: void 0 };
    }
  }
  if ((lD(!1), zB(!0), e.mode === "auto"))
    return (
      exe({ from: "auto", to: i, trigger: "auto_gate_denied" }),
      {
        ...Jh(Mqe(e), { type: "setMode", mode: i, destination: "session" }),
        isAutoModeAvailable: !1,
        canAutoClassifierRun: !1,
      }
    );
  return {
    ...Mqe(e),
    prePlanMode: e.prePlanMode === "auto" ? i : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1,
  };
}
function kZs() {
  return (zr() || {}).permissions?.defaultMode === "auto";
}
function EZs() {
  return JS() && dgn();
}
function be() {
  return gu() && bdi() && !btt() && !$nt(_e("flagSettings") || {});
}
function Unr() {
  if (!st()) return !0;
  let e = Ohe();
  return e === "auto" || e === "plan";
}
function Ee(e) {
  if (QC() && e?.chosenByHost !== !0) return !1;
  if (qc().endOfferChoice === "switch") return !1;
  return Unr() && EZs();
}
function Bnr(e) {
  return JS() || (e === "auto" && be());
}
function k3o() {
  sOr(!dgn());
}
function E3o(e) {
  return (k3o(), J(e, () => Unr() && EZs()));
}
function Te() {
  return (
    Unr() &&
    (JS() || be()) &&
    (!T5i() || dgn()) &&
    !KJi("useAutoModeDuringPlan")
  );
}
function K5r(e, i) {
  if (!Ee(i)) return null;
  return (lD(!0), pie(e));
}
function uXt(e, i) {
  let o = e.mode;
  if (o === "plan") return e;
  if (e.planDoc !== void 0) return uXt({ ...e, planDoc: void 0 }, i);
  if (o === "auto") {
    if (Te()) return { ...e, prePlanMode: "auto" };
    return (lD(!1), zB(!0), { ...Mqe(e), prePlanMode: "auto" });
  }
  if (o !== "bypassPermissions") {
    let r = K5r(e, i);
    if (r) return { ...r, prePlanMode: o };
  }
  return (
    t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${o}`, {
      level: "info",
    }),
    { ...e, prePlanMode: o }
  );
}
function vZs(e, i) {
  let o = e;
  if (o.startupModeDecidedByProactivityLevel !== void 0)
    o = { ...o, startupModeDecidedByProactivityLevel: void 0 };
  if (
    o.mode !== "bypassPermissions" &&
    o.isBypassPermissionsModeAvailable &&
    !i.bypassAvailableByFlag
  )
    o = { ...o, isBypassPermissionsModeAvailable: !1 };
  if (o.mode === "plan" && o.prePlanMode !== void 0) {
    let r = Dqe({ ...o, prePlanMode: "default" });
    o = gu() ? r : { ...r, prePlanMode: void 0 };
  }
  return o;
}
function Dqe(e) {
  return J(e, Te);
}
function TZs(e, i) {
  let o = e.prePlanMode === i ? e : { ...e, prePlanMode: i };
  return i === "auto" || gu() ? Dqe(o) : o;
}
function CZs(e) {
  return gu() ? J(e, () => !1) : e;
}
function AZs(e, i, o, r) {
  try {
    e();
  } catch (n) {
    (lD(!1), zB(!0));
    try {
      if (i().mode === "auto")
        (o((c) => ({
          ...c,
          mode: "default",
          startupModeDecidedByProactivityLevel: void 0,
        })),
          exe({ from: "auto", to: "default", trigger: "auto_gate_denied" }));
    } catch (c) {
      r(c);
    }
    r(n);
  }
}
function J(e, i) {
  if (e.mode === "auto") return pie(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let o = gu(),
    r = o ? i() : Ee();
  if (r && o) return pie(e);
  if (!r && !o) return e;
  if (r) return (lD(!0), zB(!1), pie(e));
  return (lD(!1), zB(!0), Mqe(e));
}
export {
  dLa,
  j5r,
  cLa,
  uLa,
  YGl,
  fLa,
  pLa,
  f3o,
  XGl,
  pie,
  uZs,
  fZs,
  p3o,
  Mqe,
  pZs,
  Stt,
  zD,
  mZs,
  mie,
  m3o,
  iR,
  hZs,
  G5r,
  JGl,
  QGl,
  gZs,
  h3o,
  g3o,
  ZGl,
  _3o,
  y3o,
  _Zs,
  ezl,
  yZs,
  z5r,
  S3o,
  b3o,
  wgt,
  LCn,
  SZs,
  V5r,
  btt,
  bZs,
  mLa,
  wZs,
  Hqe,
  w3o,
  kZs,
  EZs,
  Unr,
  Bnr,
  k3o,
  E3o,
  K5r,
  uXt,
  vZs,
  Dqe,
  TZs,
  CZs,
  AZs,
};
