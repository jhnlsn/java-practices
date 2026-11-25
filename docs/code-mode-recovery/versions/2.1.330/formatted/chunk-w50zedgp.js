// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { dC, HNs, DNs, Hn } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { fe } from "/$bunfs/root/chunk-78g0060s.js";
import { A } from "/$bunfs/root/chunk-jv7av99m.js";
import { B9, Qr, Sr } from "/$bunfs/root/chunk-865at33z.js";
import { t } from "/$bunfs/root/chunk-w578pjby.js";
import { i } from "/$bunfs/root/chunk-k449cc64.js";
import { u, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { M8, Tge } from "/$bunfs/root/chunk-42tcgre6.js";
import { d_, Qb, eA } from "/$bunfs/root/chunk-gd77dyw4.js";
import { ue, vi } from "/$bunfs/root/chunk-r3kja8v6.js";
import { Ks, lt, Dt, yt } from "/$bunfs/root/chunk-rb36kwbn.js";
import { Vo } from "/$bunfs/root/chunk-3grsnd7a.js";
import { Ar } from "/$bunfs/root/chunk-n5qd9b6p.js";
import { R0 } from "/$bunfs/root/chunk-ge3qft6b.js";
import { _t } from "/$bunfs/root/chunk-060xwhvh.js";
import { Fi } from "/$bunfs/root/chunk-929j4hj9.js";
import { vo } from "/$bunfs/root/chunk-h4t4qfaq.js";
import { Mx } from "/$bunfs/root/chunk-qf73a9we.js";
import { gt } from "/$bunfs/root/chunk-4vsz8a99.js";
import { ga } from "/$bunfs/root/chunk-2b1wcpvk.js";
import { sRe, IG } from "/$bunfs/root/chunk-qwcebyxc.js";
import { De } from "/$bunfs/root/chunk-k883m4fq.js";
import { ke } from "/$bunfs/root/chunk-hn3cwwzt.js";
import { f_ } from "/$bunfs/root/chunk-wzdjp7c0.js";
import { de } from "/$bunfs/root/chunk-t57w17k7.js";
function K0i(e, n) {
  if (R0({ model: e, leanPrompt: n }))
    return `Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${ke} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;
  return `A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${Sr} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${ke} command. The ${Sr} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${
  B9() === "default"
    ? `  - Use ${_t} tool (if available) for open-ended searches requiring multiple rounds
`
    : ""
}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`;
}
import { totalmem as w } from "os";
var Bk = "main";
function Fbr(e, n) {
  if (ue()) {
    let { ReplSessions: r } = import.meta.require(
      "/$bunfs/root/chunk-sprssgrr.js",
    );
    return e
      .get(r)
      .get(n ?? Bk)
      ?.scriptGlobalNames();
  }
  return;
}
function q0i() {
  if (ue())
    return "\u26A0 This REPL context is new: variables, functions and timers from earlier scripts in this conversation don't exist in it, even those a compaction summary lists as still defined.";
  return "";
}
function b() {
  return { newName: void 0, oldName: void 0 };
}
function h(e) {}
function T() {
  return;
}
var a,
  d,
  c,
  p = de({ made: !1 }, (e) => {
    e.made = !1;
  });
function C() {
  return IG().state === "on";
}
function a_o() {
  return ue() && !M8() && Hn();
}
function Oa() {
  if (ue()) {
    if (!f_() || !E()) return !1;
    let { isEngineCheckDone: e } = import.meta.require(
        "/$bunfs/root/chunk-e4acfyq7.js",
      ),
      n = e();
    if (!Y0i()) return !1;
    return n || E();
  }
  return !1;
}
function E() {
  return ue() && !a_o() && (a ?? C()) && !Gbr();
}
var m = de({ logged: !1 }, (e) => {
  e.logged = !1;
});
function O(e, n, r) {
  if (ue()) {
    if (m.logged || (e === "passed" && !r)) return;
    if (((m.logged = !0), e === "passed")) {
      u("repl_engine_check");
      return;
    }
    let s = `REPL mode's engine check failed (${e}); REPL mode is ${n ? "kept off" : "still allowed"}`;
    (t(s, { level: "error" }),
      l("repl_engine_check", e, { held: n }),
      i(new A(s, "REPL mode's engine check failed", e)));
  }
}
function Y0i() {
  if (ue()) {
    let {
      doesEngineResultHold: e,
      engineCheckResult: n,
      isEngineCheckDone: r,
    } = import.meta.require("/$bunfs/root/chunk-e4acfyq7.js");
    if (!r())
      t(
        "REPL mode: the engine check ran late, at the first read of the mode, because no start-up call (primeReplEngineCheck) had made it",
      );
    let s = n(),
      f = e(s);
    return (O(s, f, !0), !f);
  }
  return !1;
}
function X0i() {
  if (ue()) {
    if (f_() && T() !== !1) {
      let { doesEngineResultHold: e, engineCheckResult: n } =
          import.meta.require("/$bunfs/root/chunk-e4acfyq7.js"),
        r = n();
      O(r, e(r), !1);
    }
  }
}
function rEt() {
  return vi() ? H7() : Oa();
}
function pV(e) {
  if (ue()) {
    if (!rEt()) return !1;
    try {
      let { willListHiddenToolNames: n } = import.meta.require(
        "/$bunfs/root/chunk-tjag6qd1.js",
      );
      return !n(e);
    } catch (n) {
      return (i(n), !0);
    }
  }
  return !1;
}
function _() {
  return vi() && !Oa();
}
function g() {
  return `To use them, exit and start a new session with ${d_} off: ${sRe(0)} (add --chrome, if you started with it). This conversation can only be continued in ${d_}.`;
}
function $br() {
  return _()
    ? `No Chrome or computer use: exit and ${sRe(0, "--resume", "step")} \xB7 ${Qb} was on earlier in this run`
    : `No Chrome or computer use: exit and ${sRe(0, void 0, "step")} for a new session without ${Qb}`;
}
function J0i() {
  return _()
    ? `Claude in Chrome and computer use stay off until you quit Claude Code: ${Qb} was on earlier in this run, and a background agent may still be working in it. To use them, exit, ${sRe(0, "--resume", "step")} (add --chrome, if you started with it) and choose this conversation.`
    : `Claude in Chrome and computer use are off, because this session is in ${Qb}, which doesn't yet have the safety rules that they need. ${g()}`;
}
function Ubr() {
  return `Claude in Chrome and computer use are off in ${Qb}, where the API doesn't yet add its safety rules for them. To use this server, start the session without ${eA}.`;
}
function Nbe() {
  return _()
    ? `Claude in Chrome and computer use are not available until the user quits Claude Code: ${Qb} was on earlier in this run, and a background agent may still be working in it. If the user asks for either, tell them why, and to exit, ${sRe(0, "--resume", "step")} (adding --chrome if they started with it) and choose this conversation.`
    : `Claude in Chrome and computer use are not available while this session is in ${Qb}, where the API does not yet add its safety rules for them. If the user asks for either, tell them why, and this: ${g()}`;
}
function Bbr() {
  return Nbe();
}
function Q0i() {
  return Nbe();
}
function Wbr() {
  let e = Fi().systemPromptSection;
  if (ue() && e !== "")
    try {
      if (pV()) return Nbe();
    } catch (n) {
      i(n);
    }
  return e;
}
function Z0i() {
  if (ue()) p.made = !0;
}
function eLi() {
  return p.made;
}
function H7() {
  return ue() && (p.made || Oa());
}
function yWt(e) {
  {
    let n = IG();
    if (n.state === "not_asked")
      return n.turnedOffIn === "shell" || n.turnedOffIn === "settings"
        ? { repl_mode_decision: fe(`opt_in_off_${n.turnedOffIn}`) }
        : {};
    return {
      ...(e !== !1 && Oa() && { is_repl_mode: !0 }),
      repl_mode_decision: fe(
        n.state === "on"
          ? `opt_in_${n.source === "shell" ? "shell" : "settings"}`
          : `opt_in_refused_${n.why}`,
      ),
    };
  }
  return {};
}
function jbr(e) {}
function Gbr() {
  return ue() && (Tge() || !M8()) && Ar().commandNetworkListsOffered === !0;
}
function tLi() {
  return ue() && f_() && !a_o() && (a ?? C()) && Gbr() && Y0i();
}
function nLi(e) {
  if (ue()) {
    if (e) return;
    if (e && (Gbr() || !Y0i() || dql() === !1)) return;
    if (a === void 0) ((d = b()), (c = Oa()));
    ((a = e), h({ newName: void 0, oldName: e }), HNs(!H7()));
  }
}
function zbr() {
  if (ue()) {
    if (a === void 0 || d === void 0) return;
    ((a = void 0), h(d), (d = void 0), (c = void 0), HNs(!H7()));
  }
}
function rLi() {
  if (ue()) return c ?? Oa();
  return !1;
}
function dql() {
  return;
}
function IZl() {
  return "";
}
function MZl(e) {
  return "";
}
function HZl() {
  return !1;
}
function DZl() {
  return !1;
}
function Hy() {
  return ue() && Oa();
}
function Ng() {
  return vi() && dC() !== null;
}
function cZ() {
  if (S()) return !1;
  return ue() && Hy() && Mx();
}
function S() {
  return !1;
}
function M(e) {
  return ue() && oRe(e) && Hy();
}
function Vbr(e) {
  if (ue() && !Hn()) DNs({ entrypoint: "terminal", ownEventsRequested: M(e) });
}
function qgs(e) {
  let r = vi();
  DNs({
    entrypoint: "print",
    hasStreamingInput: e.hasStreamingInput,
    sdkUrl: e.sdkUrl,
    ownEventsRequested: M(e.permissionMode),
    ownEventsOnly: r || !1,
  });
}
function oRe(e) {
  return ue() && (e === "auto" || e === "bypassPermissions");
}
function uZ() {
  return ue() && Hy();
}
function hre(e) {
  if (ue() && $h(e)) {
    let n = e.filter((r) => !D(r));
    return n.length === e.length ? e : n;
  }
  return e;
}
function D(e) {
  if (e.isMcp === !0) return !0;
  return !gt(e, vo) && !gt(e, Vo) && !gt(e, ga);
}
function Kit(e, n) {
  return ue() && D(e) && $h(n);
}
function $h(e) {
  return ue() && uZ() && D7(e);
}
function D7(e) {
  return ue() && e.some((n) => n.isMcp !== !0 && gt(n, vo));
}
function l_o(e) {
  return vi() && D7(e);
}
function Ygs(e, n) {
  if (ue() && e !== null && $h(n))
    return e.replaceAll(
      "with the Write tool",
      "with `write(path, content)` in a REPL script",
    );
  return e;
}
var jje = new Set([De, Qr, Sr, ke, yt, Ks]),
  oLi = new Set([...jje, Dt, lt]),
  d_o = "repl-tool-code.js",
  c_o = 600000,
  y = 30000;
function Kbr() {
  return y;
}
function qbr() {
  let n = Math.min(w(), process.constrainedMemory() || 1 / 0);
  return Math.min(4294967296, Math.max(1073741824, n / 4));
}
var sLi = 100,
  x = 1000;
function iLi() {
  return x;
}
var u_o = 1000,
  Xan = 5000,
  R = 30000,
  L = R;
function Jan() {
  return L;
}
function f_o() {
  return R;
}
var qit = 7200000;
function p$n(e) {
  return e || S() || Ng() ? qit : c_o;
}
var aLi = 30000,
  Qan = 30000;
function SWt() {
  if (ue() && Hy()) return Ybr;
  return;
}
var Ybr = 30000,
  v = 50000;
function lLi() {
  return v;
}
var Xbr = 20,
  Xgs = 20,
  dLi = 1000,
  P = 250;
function cLi() {
  return P;
}
export {
  K0i,
  Bk,
  Fbr,
  q0i,
  a_o,
  Oa,
  Y0i,
  X0i,
  rEt,
  pV,
  $br,
  J0i,
  Ubr,
  Nbe,
  Bbr,
  Q0i,
  Wbr,
  Z0i,
  eLi,
  H7,
  yWt,
  jbr,
  Gbr,
  tLi,
  nLi,
  zbr,
  rLi,
  dql,
  IZl,
  MZl,
  HZl,
  DZl,
  Hy,
  Ng,
  cZ,
  Vbr,
  qgs,
  oRe,
  uZ,
  hre,
  Kit,
  $h,
  D7,
  l_o,
  Ygs,
  jje,
  oLi,
  d_o,
  c_o,
  Kbr,
  qbr,
  sLi,
  iLi,
  u_o,
  Xan,
  Jan,
  f_o,
  qit,
  p$n,
  aLi,
  Qan,
  SWt,
  Ybr,
  lLi,
  Xbr,
  Xgs,
  dLi,
  cLi,
};
