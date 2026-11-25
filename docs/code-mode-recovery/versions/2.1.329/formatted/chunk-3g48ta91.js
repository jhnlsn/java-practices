// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { uo, Cr } from "/$bunfs/root/chunk-aq3ms068.js";
import { t } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { ee } from "/$bunfs/root/chunk-m55722gg.js";
import { pe } from "/$bunfs/root/chunk-ahqq8jsg.js";
import { kl } from "/$bunfs/root/chunk-jnqtrw4b.js";
import { $r } from "/$bunfs/root/chunk-be81kym3.js";
import { zu, Ev, aRe, Cd, Ly, fi } from "/$bunfs/root/chunk-w03c3634.js";
import { ti, it, Dt } from "/$bunfs/root/chunk-5ghdkswv.js";
import { Wt } from "/$bunfs/root/chunk-e9fhcxkx.js";
import { Ar } from "/$bunfs/root/chunk-6sg2a9df.js";
import { NF } from "/$bunfs/root/chunk-mzf9aybx.js";
import { yH } from "/$bunfs/root/chunk-y3bkspwa.js";
import { gt } from "/$bunfs/root/chunk-bxxahqqj.js";
import { Hr } from "/$bunfs/root/chunk-e45mjesc.js";
import { xU } from "/$bunfs/root/chunk-9zsqaq29.js";
import { Yo } from "/$bunfs/root/chunk-gsktpex7.js";
import { ht } from "/$bunfs/root/chunk-fd03jnvq.js";
import { ho } from "/$bunfs/root/chunk-5m52w82r.js";
import { sv } from "/$bunfs/root/chunk-a4cww0eh.js";
import { MDt } from "/$bunfs/root/chunk-zj1y6tfy.js";
import { tnt } from "/$bunfs/root/chunk-pvz8w9eq.js";
import { A_e } from "/$bunfs/root/chunk-tvht4f5c.js";
import { xc, gL } from "/$bunfs/root/chunk-7b3h6etb.js";
import { Jil } from "/$bunfs/root/chunk-32gs4rex.js";
import { FB } from "/$bunfs/root/chunk-fewk3btv.js";
import { gu } from "/$bunfs/root/chunk-g40a3j75.js";
import { va } from "/$bunfs/root/chunk-qypdkxad.js";
import { mc } from "/$bunfs/root/chunk-v4hzksrd.js";
import { h2 } from "/$bunfs/root/chunk-k3ysfckr.js";
import { O8 } from "/$bunfs/root/chunk-qe4gckzg.js";
import { xm, Mh, ZD, GX } from "/$bunfs/root/chunk-h9yhy093.js";
import { $T } from "/$bunfs/root/chunk-53p9pztc.js";
import { ov } from "/$bunfs/root/chunk-der687bt.js";
import { Of } from "/$bunfs/root/chunk-v16rzw0k.js";
import { Vve, iZt, pro } from "/$bunfs/root/chunk-ds4gmmrb.js";
import { Cz } from "/$bunfs/root/chunk-3n7yr6zt.js";
import { L$e } from "/$bunfs/root/chunk-9834fkwg.js";
import { xS } from "/$bunfs/root/chunk-6qj6pwf8.js";
import { xa } from "/$bunfs/root/chunk-d5s04szg.js";
import { jC } from "/$bunfs/root/chunk-tyzx6vqt.js";
import { rd } from "/$bunfs/root/chunk-z9wq6tma.js";
import { fo } from "/$bunfs/root/chunk-n148d33d.js";
import { jn } from "/$bunfs/root/chunk-rqa74sj5.js";
import { os } from "/$bunfs/root/chunk-z3bt43w4.js";
import { Ne } from "/$bunfs/root/chunk-jh9bnqg2.js";
import { Ce } from "/$bunfs/root/chunk-05v7tzw3.js";
import { Dn } from "/$bunfs/root/chunk-qb0dm7yx.js";
import { B } from "/$bunfs/root/chunk-b8e2yqms.js";
function x() {
  return `
- If this is an existing file, you MUST use the ${Ne} tool first to read the file's contents. This tool will fail if you did not read the file first.`;
}
function x3a(e, o) {
  if (yH({ model: e, leanPrompt: o }))
    return `Writes a file to the local filesystem, overwriting if one exists.

When to use: creating a new file, or fully replacing one you've already ${Ne}. Overwriting an existing file you haven't ${Ne} will fail. For partial changes, use ${it} instead.`;
  return `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.${x()}
- Prefer the Edit tool for modifying existing files \u2014 it only sends the diff. Only use this tool to create new files or for complete rewrites.
- NEVER create documentation files (*.md) or README files unless explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`;
}
var Nve = "ShowOnboardingRolePicker",
  U3a =
    "Render a clickable role-picker chip row during Cowork onboarding so the user can pick their role and get a matching plugin installed.",
  $3a = `Render a clickable role-picker chip row during Cowork onboarding. Call this when asking the user what kind of work they do so they can pick their role and get a matching plugin installed. The role list is hardcoded in the frontend \u2014 call with no args.

The call blocks until the user responds. Three resolution paths all land in the tool result: chip click or free-form typed answer \u2192 {"role": "Legal"} or {"role": "paralegal"}; X button \u2192 {"dismissed": true}. An empty object {} means the user approved without picking a role \u2014 treat it like a dismissal. Free-form roles may not match the chip list \u2014 search the marketplace with whatever string you get.

Do NOT call this in normal conversation. Only call this when explicitly helping the user set up Cowork for their role/job function.`;
var Lve = "OfferChromeSetup",
  P3a =
    "Offer the user Claude in Chrome setup after a Claude in Chrome tool reports the extension is not connected and the task needs their own signed-in browser",
  O3a =
    "Offer the user the one-time setup of Claude in Chrome, so this task can use their own signed-in browser.",
  I3a = `Offer the user the one-time setup of Claude in Chrome so this task can use their own signed-in browser: their accounts, cookies and open tabs. The call shows the user a setup card and blocks until they respond.

Call it only when ALL of these hold: a Claude in Chrome tool call in this task has just reported that the browser extension is not connected; the task genuinely needs a page the user is signed in to, or their existing tabs (for public pages use the built-in browser or web fetch instead); and you have not offered before in this task. Pass a short \`reason\` naming what the task needs their browser for.

The result is one of: connected (Claude in Chrome is now connected: continue the task with the mcp__claude-in-chrome__* tools), or not_now (the user chose not to set it up now, or nobody could answer: carry on with the built-in browser or without a browser, and do not offer again in this task unless the user asks). Treat a rejected call the same way as not_now.`,
  M3a =
    "Claude in Chrome is now connected. Continue the task with the mcp__claude-in-chrome__* tools.",
  H3a =
    "Claude in Chrome was not set up now. Carry on with the built-in browser or without a browser, and do not offer Chrome setup again in this task unless the user asks.",
  D3a =
    "The user is on the Claude mobile app, where Claude in Chrome cannot be set up, so no offer was shown. Carry on with the built-in browser or without a browser; you may tell the user that Claude in Chrome can only be set up on a computer. Do not offer Chrome setup again in this task unless the user asks or says they are at a computer.",
  L3a =
    "Try a Claude in Chrome tool first (for example mcp__claude-in-chrome__tabs_context_mcp); offer setup only if it reports that the browser extension is not connected.";
import { resolve as D } from "path";
var G = 60000,
  U = new Set(["command", "description", "timeout"]),
  T = `${Ce} in the coordinator runs only a command it can verify as read-only and that stays in the working directory (no cd, pushd or popd), with no input besides command, description and timeout (no run_in_background, no sandbox bypass, no other machine) \u2014 run anything else from a worker via the ${ht} tool.`,
  W =
    "A refused compound command does not mean the shell is unavailable: retry the read as a single plain command.",
  j =
    "This refusal does not mean the shell is unavailable: a plain read-only command still runs.",
  F = 80,
  H = 300,
  V = `${Ce} in the coordinator does not read a worker's transcript or a task's output file. A worker's result reaches you in its task notification; ask the worker with ${Dn} for more \u2014 not with the shell.`,
  q = `${Ce} in the coordinator does not run a command with an argument built from \`$(\u2026)\`, a variable, a \`~name\` form, or a \`..\` after a directory name: it cannot be checked against this session's worker transcript and task output folders. Name the path literally.`,
  C = `${Ce} in the coordinator does not run a glob wide enough to reach this session's worker transcript and task output folders. Narrow the glob, or name the directory you mean.`,
  I = new Set(["cd", "pushd", "popd", "chdir"]);
function Alr() {
  return !1;
}
function q3a() {}
function ODt(e, o) {
  return gt(e, Ce) && o.remoteCall === void 0 && o.agentId === void 0 && Alr();
}
function qPn(e, o, r) {
  if (
    e.isMcp === !0 ||
    typeof o.command !== "string" ||
    Object.entries(o).some(([n, i]) => !U.has(n) && i !== void 0 && i !== !1)
  )
    return T;
  try {
    let n = e.isReadOnly(o, r),
      { parseForSecurityFromAst: i } = import.meta.require(
        "/$bunfs/root/chunk-hggdkcpc.js",
      ),
      { getParserModule: c } = import.meta.require(
        "/$bunfs/root/chunk-5csb90m3.js",
      ),
      { SPLIT_MAX_LEN: A } = import.meta.require(
        "/$bunfs/root/chunk-5t27axer.js",
      ),
      O = o.command.length > A ? void 0 : c()?.parse(o.command),
      E = O ? i(o.command, O) : void 0,
      u = E?.kind === "simple" ? E.commands : [],
      _ = u.flatMap((a) => a.argv).filter((a) => I.has(a));
    if (n && u.length > 0 && _.length === 0) return K(u);
    let h,
      d = u.length > 1 ? W : u.length === 0 ? j : void 0;
    if (_.length > 0) h = Y(_, u);
    else if (!n) {
      let a = e.notReadOnlyReason?.(o, r);
      if (a?.part !== void 0)
        h = `The part it could not verify is \`${y(a.part)}\`: the command itself, or a flag, argument, variable prefix or redirect on it, is not on the read-only list.`;
      else if (a !== void 0)
        h = `Reason: ${y(a.message.replace(/\.$/, ""), H)}.`;
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
function Cto(e, o, r) {
  if (r.where === "refused" || !ODt(e, o)) return r;
  if (r.where !== "here") return { where: "refused", message: T };
  let n = e.inputSchema.safeParse(e.coerceInput?.(r.input)?.input ?? r.input),
    i = n.success ? qPn(e, n.data, o) : null;
  return i === null ? r : { where: "refused", message: i };
}
function Ato(e) {
  let o = e.timeout;
  return {
    ...e,
    timeout: Math.min(typeof o === "number" && o > 0 ? o : O8(), G),
  };
}
function K(e) {
  let { containsAnyPlaceholder: o } = import.meta.require(
      "/$bunfs/root/chunk-hggdkcpc.js",
    ),
    { getPathsForPermissionCheck: r } = import.meta.require(
      "/$bunfs/root/chunk-7mdde0zh.js",
    ),
    { expandPath: n } = import.meta.require("/$bunfs/root/chunk-t92nv3nm.js"),
    {
      normalizeCaseForComparison: i,
      pathInWorkingPath: c,
      relativePath: A,
    } = import.meta.require("/$bunfs/root/chunk-rn1hjwr8.js"),
    { getGlobBaseDirectory: O, hasInteriorDotDot: E } = import.meta.require(
      "/$bunfs/root/chunk-daz8wew8.js",
    ),
    { getSessionSubagentsDir: u } = import.meta.require(
      "/$bunfs/root/chunk-g3jwh6z2.js",
    ),
    { peekTaskOutputDir: _ } = import.meta.require(
      "/$bunfs/root/chunk-pa71fgax.js",
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
function y(e, o = F) {
  let r = ee(e, o);
  return r === e ? e : `${r}\u2026`;
}
function S(e) {
  return B(e.split(/[\\/]/), (o) => o !== "" && o !== ".");
}
var ate = "ExitWorktree";
var KPn = "WrapUp",
  N3a = "Offer the user a next step when a turn ends",
  F3a = `Call this before you write your closing message: it fills the next-step box that the app draws under that message, with a two-or-three-sentence recap and, when this turn leaves the user a decision to make or a step to take, one question and buttons that answer it. Without the call the app has nothing to draw.

Call it once in EVERY turn in which you changed files, ran commands or completed multi-step work, and in every turn that you are about to end with a question, a choice or a go-ahead that you need from the user, even one in which you stopped to ask before doing any work: when this turn's work is done, and before you tell the user the outcome. Otherwise skip it: short answers, pure conversation, a brief read-and-explain turn. A turn that ends in another tool's question to the user, such as a plan's approval, needs no call.

The box opens only for a question that comes with answers, so send actions with ask. A turn with nothing pending sends the recap alone, and the app then draws no box. Write recap, ask and labels in the language the user writes in.

Your closing message is ordinary text right after this call, the last thing you say this turn: your answer to the user in full, which the recap never replaces. Write none of it before this call, where it can reach the user cut to a short summary.`;
function X(e) {
  return new Set([
    rd,
    jC,
    ...Jil,
    ho,
    L$e,
    Lve,
    GX,
    KPn,
    FB,
    gL,
    ...(e !== "ant" ? [mc] : []),
    Cd,
    Ly,
    Cz,
    MDt,
    tnt,
    A_e,
    import.meta.require("/$bunfs/root/chunk-xf70zjzk.js")
      .CONTINUE_IN_PROJECTS_TOOL_NAME,
    import.meta.require("/$bunfs/root/chunk-xf70zjzk.js")
      .CONTINUE_IN_PROJECTS_CONTEXT_TOOL_NAME,
    import.meta.require("/$bunfs/root/chunk-tjrk81pe.js")
      .MCP_TASK_RESUME_POLLING_TOOL_NAME,
    h2,
    import.meta.require("/$bunfs/root/chunk-11cnv4wp.js")
      .APPIFACT_REPL_TOOL_NAME,
  ]);
}
var IQt = X("external"),
  B3a = new Set([...IQt]);
function J(e) {
  return new Set([
    Ne,
    xc,
    xS,
    Cr,
    jn,
    uo,
    ...Of,
    it,
    Dt,
    ti,
    Hr,
    va,
    fo,
    $T,
    ate,
    Yo,
    fi,
    sv,
    xU,
    os,
    xa,
    Dn,
    ...(e === "ant" ? [mc] : []),
    Wt,
    ...pro,
  ]);
}
var W3a = new Set([Vve, iZt, NF, Nve]),
  j3a = new Set([]),
  b = null;
function G3a(e, o) {
  return b !== null && e && o === b;
}
var MQt = J("external"),
  z3a = new Set([xm, ZD, ov, Mh, Dn, zu, Ev, aRe]),
  Tto = new Set([ht, xa, Dn, va, Hr, Ly, gu, sv, mc]);
var Q = "subscribe_pr_activity",
  z = "unsubscribe_pr_activity",
  Z = [Q, z],
  Fmi = [kl, "github"];
function V3a(e) {
  return Z.some((o) => e.endsWith(o));
}
function K3a() {
  let [e, ...o] = Fmi.map((r) => `\`${$r(r)}\``);
  return `When your tool list has both a ${e} copy and a ${o.join(" or ")} copy, call the ${e} one.`;
}
export {
  x3a,
  Lve,
  P3a,
  O3a,
  I3a,
  M3a,
  H3a,
  D3a,
  L3a,
  ate,
  KPn,
  N3a,
  F3a,
  Nve,
  U3a,
  $3a,
  IQt,
  B3a,
  W3a,
  j3a,
  G3a,
  MQt,
  z3a,
  Tto,
  Fmi,
  V3a,
  K3a,
  Alr,
  q3a,
  ODt,
  qPn,
  Cto,
  Ato,
};
