// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { Qr, Sr } from "/$bunfs/root/chunk-865at33z.js";
import { t } from "/$bunfs/root/chunk-w578pjby.js";
import { ee } from "/$bunfs/root/chunk-7cfjrnwy.js";
import { pe } from "/$bunfs/root/chunk-18rsj2ts.js";
import { Ll } from "/$bunfs/root/chunk-epy4sc29.js";
import { Rr } from "/$bunfs/root/chunk-px0hhsq7.js";
import { af, sT, yPe, bl, fS } from "/$bunfs/root/chunk-xfj2cwfv.js";
import { Ks, lt, Dt } from "/$bunfs/root/chunk-rb36kwbn.js";
import { Vo } from "/$bunfs/root/chunk-3grsnd7a.js";
import { Ar } from "/$bunfs/root/chunk-n5qd9b6p.js";
import { Vt } from "/$bunfs/root/chunk-r8478wtb.js";
import { qx } from "/$bunfs/root/chunk-cee6q0wn.js";
import { R0 } from "/$bunfs/root/chunk-ge3qft6b.js";
import { gt } from "/$bunfs/root/chunk-4vsz8a99.js";
import { Fn } from "/$bunfs/root/chunk-pmryp5f3.js";
import { _t } from "/$bunfs/root/chunk-060xwhvh.js";
import { vo } from "/$bunfs/root/chunk-h4t4qfaq.js";
import { HU } from "/$bunfs/root/chunk-gbskgz33.js";
import { so } from "/$bunfs/root/chunk-e5q83yb8.js";
import { Vv } from "/$bunfs/root/chunk-6dfy8crz.js";
import { e$t } from "/$bunfs/root/chunk-f6abynt8.js";
import { ast } from "/$bunfs/root/chunk-0ty8qx28.js";
import { HSe } from "/$bunfs/root/chunk-0c92mmpr.js";
import { Wc, A0 } from "/$bunfs/root/chunk-ht27b0vz.js";
import { Gyl } from "/$bunfs/root/chunk-p1ewvgeh.js";
import { VW } from "/$bunfs/root/chunk-b83x8d52.js";
import { Fu } from "/$bunfs/root/chunk-pzj67pdt.js";
import { ga } from "/$bunfs/root/chunk-2b1wcpvk.js";
import { xc } from "/$bunfs/root/chunk-jar84hn9.js";
import { HG } from "/$bunfs/root/chunk-q0pdqy04.js";
import { p7 } from "/$bunfs/root/chunk-sk0gc06z.js";
import { Gp, $m, QI, $Q } from "/$bunfs/root/chunk-mahb4v28.js";
import { IT } from "/$bunfs/root/chunk-59xxesz9.js";
import { Nk } from "/$bunfs/root/chunk-6qaevejb.js";
import { nAe, _on, zco } from "/$bunfs/root/chunk-wwhjj2yk.js";
import { dp } from "/$bunfs/root/chunk-wwft95x8.js";
import { q6 } from "/$bunfs/root/chunk-x1z3yh1m.js";
import { cje } from "/$bunfs/root/chunk-j8jktvtq.js";
import { My } from "/$bunfs/root/chunk-6eq0mqyj.js";
import { Ra } from "/$bunfs/root/chunk-s1btam0h.js";
import { OA } from "/$bunfs/root/chunk-kemkq7qp.js";
import { _d } from "/$bunfs/root/chunk-bkfd2ttj.js";
import { co } from "/$bunfs/root/chunk-t99xdws4.js";
import { Gn } from "/$bunfs/root/chunk-ww0784kh.js";
import { Xo } from "/$bunfs/root/chunk-9xt9z453.js";
import { De } from "/$bunfs/root/chunk-k883m4fq.js";
import { ke } from "/$bunfs/root/chunk-hn3cwwzt.js";
import { Ln } from "/$bunfs/root/chunk-bne5t4g3.js";
import { U } from "/$bunfs/root/chunk-4smdap7r.js";
function x() {
  return `
- If this is an existing file, you MUST use the ${De} tool first to read the file's contents. This tool will fail if you did not read the file first.`;
}
function Htl(e, o) {
  if (R0({ model: e, leanPrompt: o }))
    return `Writes a file to the local filesystem, overwriting if one exists.

When to use: creating a new file, or fully replacing one you've already ${De}. Overwriting an existing file you haven't ${De} will fail. For partial changes, use ${lt} instead.`;
  return `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.${x()}
- Prefer the Edit tool for modifying existing files \u2014 it only sends the diff. Only use this tool to create new files or for complete rewrites.
- NEVER create documentation files (*.md) or README files unless explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`;
}
var YCe = "ShowOnboardingRolePicker",
  Gtl =
    "Render a clickable role-picker chip row during Cowork onboarding so the user can pick their role and get a matching plugin installed.",
  ztl = `Render a clickable role-picker chip row during Cowork onboarding. Call this when asking the user what kind of work they do so they can pick their role and get a matching plugin installed. The role list is hardcoded in the frontend \u2014 call with no args.

The call blocks until the user responds. Three resolution paths all land in the tool result: chip click or free-form typed answer \u2192 {"role": "Legal"} or {"role": "paralegal"}; X button \u2192 {"dismissed": true}. An empty object {} means the user approved without picking a role \u2014 treat it like a dismissal. Free-form roles may not match the chip list \u2014 search the marketplace with whatever string you get.

Do NOT call this in normal conversation. Only call this when explicitly helping the user set up Cowork for their role/job function.`;
var qCe = "OfferChromeSetup",
  Dtl =
    "Offer the user Claude in Chrome setup after a Claude in Chrome tool reports the extension is not connected and the task needs their own signed-in browser",
  Ltl =
    "Offer the user the one-time setup of Claude in Chrome, so this task can use their own signed-in browser.",
  Ntl = `Offer the user the one-time setup of Claude in Chrome so this task can use their own signed-in browser: their accounts, cookies and open tabs. The call shows the user a setup card and blocks until they respond.

Call it only when ALL of these hold: a Claude in Chrome tool call in this task has just reported that the browser extension is not connected; the task genuinely needs a page the user is signed in to, or their existing tabs (for public pages use the built-in browser or web fetch instead); and you have not offered before in this task. Pass a short \`reason\` naming what the task needs their browser for.

The result is one of: connected (Claude in Chrome is now connected: continue the task with the mcp__claude-in-chrome__* tools), or not_now (the user chose not to set it up now, or nobody could answer: carry on with the built-in browser or without a browser, and do not offer again in this task unless the user asks). Treat a rejected call the same way as not_now.`,
  Ftl =
    "Claude in Chrome is now connected. Continue the task with the mcp__claude-in-chrome__* tools.",
  $tl =
    "Claude in Chrome was not set up now. Carry on with the built-in browser or without a browser, and do not offer Chrome setup again in this task unless the user asks.",
  Utl =
    "The user is on the Claude mobile app, where Claude in Chrome cannot be set up, so no offer was shown. Carry on with the built-in browser or without a browser; you may tell the user that Claude in Chrome can only be set up on a computer. Do not offer Chrome setup again in this task unless the user asks or says they are at a computer.",
  Btl =
    "Try a Claude in Chrome tool first (for example mcp__claude-in-chrome__tabs_context_mcp); offer setup only if it reports that the browser extension is not connected.";
import { resolve as D } from "path";
var G = 60000,
  W = new Set(["command", "description", "timeout"]),
  T = `${ke} in the coordinator runs only a command it can verify as read-only and that stays in the working directory (no cd, pushd or popd), with no input besides command, description and timeout (no run_in_background, no sandbox bypass, no other machine) \u2014 run anything else from a worker via the ${_t} tool.`,
  j =
    "A refused compound command does not mean the shell is unavailable: retry the read as a single plain command.",
  F =
    "This refusal does not mean the shell is unavailable: a plain read-only command still runs.",
  H = 80,
  B = 300,
  V = `${ke} in the coordinator does not read a worker's transcript or a task's output file. A worker's result reaches you in its task notification; ask the worker with ${Ln} for more \u2014 not with the shell.`,
  q = `${ke} in the coordinator does not run a command with an argument built from \`$(\u2026)\`, a variable, a \`~name\` form, or a \`..\` after a directory name: it cannot be checked against this session's worker transcript and task output folders. Name the path literally.`,
  C = `${ke} in the coordinator does not run a glob wide enough to reach this session's worker transcript and task output folders. Narrow the glob, or name the directory you mean.`,
  I = new Set(["cd", "pushd", "popd", "chdir"]);
function hhr() {
  return !1;
}
function tnl() {}
function Q1t(e, o) {
  return gt(e, ke) && o.remoteCall === void 0 && o.agentId === void 0 && hhr();
}
function V0n(e, o, r) {
  if (
    e.isMcp === !0 ||
    typeof o.command !== "string" ||
    Object.entries(o).some(([n, i]) => !W.has(n) && i !== void 0 && i !== !1)
  )
    return T;
  try {
    let n = e.isReadOnly(o, r),
      { parseForSecurityFromAst: i } = import.meta.require(
        "/$bunfs/root/chunk-jtm8nwws.js",
      ),
      { getParserModule: c } = import.meta.require(
        "/$bunfs/root/chunk-09chmpft.js",
      ),
      { SPLIT_MAX_LEN: A } = import.meta.require(
        "/$bunfs/root/chunk-sc7f1yfn.js",
      ),
      O = o.command.length > A ? void 0 : c()?.parse(o.command),
      E = O ? i(o.command, O) : void 0,
      u = E?.kind === "simple" ? E.commands : [],
      _ = u.flatMap((a) => a.argv).filter((a) => I.has(a));
    if (n && u.length > 0 && _.length === 0) return K(u);
    let h,
      d = u.length > 1 ? j : u.length === 0 ? F : void 0;
    if (_.length > 0) h = Y(_, u);
    else if (!n) {
      let a = e.notReadOnlyReason?.(o, r);
      if (a?.part !== void 0)
        h = `The part it could not verify is \`${y(a.part)}\`: the command itself, or a flag, argument, variable prefix or redirect on it, is not on the read-only list.`;
      else if (a !== void 0)
        h = `Reason: ${y(a.message.replace(/\.$/, ""), B)}.`;
      if (a?.everyInput === !0) d = void 0;
    }
    return [T, h, d].filter((a) => a !== void 0).join(" ");
  } catch (n) {
    return (
      t(
        `coordinator Bash read-only check threw ${n instanceof Error ? n.name : typeof n}; refusing`,
        { level: "error" },
      ),
      T
    );
  }
}
function Sdo(e, o, r) {
  if (r.where === "refused" || !Q1t(e, o)) return r;
  if (r.where !== "here") return { where: "refused", message: T };
  let n = e.inputSchema.safeParse(e.coerceInput?.(r.input)?.input ?? r.input),
    i = n.success ? V0n(e, n.data, o) : null;
  return i === null ? r : { where: "refused", message: i };
}
function bdo(e) {
  let o = e.timeout;
  return {
    ...e,
    timeout: Math.min(typeof o === "number" && o > 0 ? o : p7(), G),
  };
}
function K(e) {
  let { containsAnyPlaceholder: o } = import.meta.require(
      "/$bunfs/root/chunk-jtm8nwws.js",
    ),
    { getPathsForPermissionCheck: r } = import.meta.require(
      "/$bunfs/root/chunk-vv4dew6q.js",
    ),
    { expandPath: n } = import.meta.require("/$bunfs/root/chunk-fvz25pf9.js"),
    {
      normalizeCaseForComparison: i,
      pathInWorkingPath: c,
      relativePath: A,
    } = import.meta.require("/$bunfs/root/chunk-fskaw0ab.js"),
    { getGlobBaseDirectory: O, hasInteriorDotDot: E } = import.meta.require(
      "/$bunfs/root/chunk-7d1m2rq4.js",
    ),
    { getSessionSubagentsDir: u } = import.meta.require(
      "/$bunfs/root/chunk-g2eg7y0m.js",
    ),
    { peekTaskOutputDir: _ } = import.meta.require(
      "/$bunfs/root/chunk-db60zjvh.js",
    ),
    h = [u(), _()],
    d = Ar();
  if (d.coordinatorWorkerOutputTrees?.from !== h.join("\x00"))
    d.coordinatorWorkerOutputTrees = {
      from: h.join("\x00"),
      spellings: h.flatMap(r),
    };
  let a = d.coordinatorWorkerOutputTrees.spellings;
  for (let f of e) {
    let P =
        f.argvUnquotedGlob?.length === f.argv.length ? f.argvUnquotedGlob : [],
      g = f.redirects.map((l) => [l.target, !0]);
    for (let [l, p] of f.argv.entries())
      if (l > 0 && !(p.startsWith("-") && !p.includes("="))) {
        let m = P[l] ?? !0;
        if ((g.push([p, m]), p.includes("=")))
          g.push([p.slice(p.indexOf("=") + 1), m]);
      }
    for (let [l, p] of g) {
      if (o(l) || /^~[^/]/.test(l) || E(l)) return q;
      let m = p ? O(l) : l,
        k = /\*\*|\{/.test(l) ? 1 / 0 : S(l) - S(m),
        v = r(n(m)),
        w = !1,
        R = !1;
      for (let N of a)
        for (let L of v) {
          if (c(L, N)) return V;
          if (m !== l && c(N, L)) {
            w = !0;
            let M = A(i(L), i(N));
            if (!M.startsWith("..")) {
              if (((R = !0), k >= S(M))) return C;
            }
          }
        }
      if (w && !R) return C;
    }
  }
  return null;
}
function Y(e, o) {
  let r = pe(),
    n =
      e.length === 1
        ? o.find((c) => c.argv.length === 2 && c.argv[0] === "cd")?.argv[1]
        : void 0;
  if (n !== void 0 && D(r, n) === r)
    return `The \`cd ${y(n)}\` is unnecessary: ${r} is already the working directory. Run the rest without it.`;
  let i = o.map((c) => c.argv[0]).find((c) => c !== void 0 && I.has(c));
  return i !== void 0
    ? `It contains \`${i}\`, and the working directory stays ${r} for the whole session: run the command with absolute paths instead of cd.`
    : `It contains the word \`${e[0]}\`, which is refused wherever it sits in a command, as an argument too: the working directory stays ${r} for the whole session.`;
}
function y(e, o = H) {
  let r = ee(e, o);
  return r === e ? e : `${r}\u2026`;
}
function S(e) {
  return U(e.split(/[\\/]/), (o) => o !== "" && o !== ".");
}
var Bne = "ExitWorktree";
var z0n = "WrapUp",
  Wtl = "Offer the user a next step when a turn ends",
  jtl = `Call this before you write your closing message: it fills the next-step box that the app draws under that message, with a two-or-three-sentence recap and, when this turn leaves the user a decision to make or a step to take, one question and buttons that answer it. Without the call the app has nothing to draw.

Call it once in EVERY turn in which you changed files, ran commands or completed multi-step work, and in every turn that you are about to end with a question, a choice or a go-ahead that you need from the user, even one in which you stopped to ask before doing any work: when this turn's work is done, and before you tell the user the outcome. Otherwise skip it: short answers, pure conversation, a brief read-and-explain turn. A turn that ends in another tool's question to the user, such as a plan's approval, needs no call.

The box opens only for a question that comes with answers, so send actions with ask. A turn with nothing pending sends the recap alone, and the app then draws no box. Write recap, ask and labels in the language the user writes in.

Your closing message is ordinary text right after this call, the last thing you say this turn: your answer to the user in full, which the recap never replaces. Write none of it before this call, where it can reach the user cut to a short summary.`;
function X(e) {
  return new Set([
    _d,
    OA,
    ...Gyl,
    so,
    cje,
    qCe,
    $Q,
    z0n,
    VW,
    A0,
    ...(e !== "ant" ? [xc] : []),
    bl,
    fS,
    q6,
    e$t,
    ast,
    HSe,
    import.meta.require("/$bunfs/root/chunk-xc04hevw.js")
      .CONTINUE_IN_PROJECTS_TOOL_NAME,
    import.meta.require("/$bunfs/root/chunk-xc04hevw.js")
      .CONTINUE_IN_PROJECTS_CONTEXT_TOOL_NAME,
    import.meta.require("/$bunfs/root/chunk-0vxndc02.js")
      .MCP_TASK_RESUME_POLLING_TOOL_NAME,
    HG,
    import.meta.require("/$bunfs/root/chunk-q36cvre2.js")
      .APPIFACT_REPL_TOOL_NAME,
  ]);
}
var jrn = X("external"),
  Vtl = new Set([...jrn]);
function z(e) {
  return new Set([
    De,
    Wc,
    My,
    Sr,
    Gn,
    Qr,
    ...dp,
    lt,
    Dt,
    Ks,
    Fn,
    ga,
    co,
    IT,
    Bne,
    vo,
    Vo,
    Vv,
    HU,
    Xo,
    Ra,
    Ln,
    ...(e === "ant" ? [xc] : []),
    Vt,
    ...zco,
  ]);
}
var Ktl = new Set([nAe, _on, qx, YCe]),
  qtl =
    /^mcp__(?:widgets__(?:\w+_display|message_compose)_v\d+|visualize__\w+|claude_ai__show_recommendation_cards)$/,
  Ytl = "tengu_humming_moth",
  Xtl = new Set([]),
  b = null;
function Jtl(e, o) {
  return b !== null && e && o === b;
}
var Grn = z("external"),
  Qtl = new Set([Gp, QI, Nk, $m, Ln, af, sT, yPe]),
  ydo = new Set([_t, Ra, Ln, ga, Fn, fS, Fu, Vv, xc]);
var J = "subscribe_pr_activity",
  Q = "unsubscribe_pr_activity",
  Z = [J, Q],
  Gvi = [Ll, "github"];
function Ztl(e) {
  return Z.some((o) => e.endsWith(o));
}
function enl() {
  let [e, ...o] = Gvi.map((r) => `\`${Rr(r)}\``);
  return `When your tool list has both a ${e} copy and a ${o.join(" or ")} copy, call the ${e} one.`;
}
export {
  Htl,
  qCe,
  Dtl,
  Ltl,
  Ntl,
  Ftl,
  $tl,
  Utl,
  Btl,
  Bne,
  z0n,
  Wtl,
  jtl,
  YCe,
  Gtl,
  ztl,
  jrn,
  Vtl,
  Ktl,
  qtl,
  Ytl,
  Xtl,
  Jtl,
  Grn,
  Qtl,
  ydo,
  Gvi,
  Ztl,
  enl,
  hhr,
  tnl,
  Q1t,
  V0n,
  Sdo,
  bdo,
};
