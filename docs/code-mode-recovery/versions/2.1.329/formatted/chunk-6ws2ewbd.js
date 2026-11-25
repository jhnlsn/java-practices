// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { a } from "/$bunfs/root/chunk-487kez16.js";
import { _o } from "/$bunfs/root/chunk-t39fw2cy.js";
import { Tp } from "/$bunfs/root/chunk-59xdgreq.js";
import { NBn, NEl, _dn, Fko } from "/$bunfs/root/chunk-bvspfnb6.js";
import { cus, Wuo, juo, XOi, oS } from "/$bunfs/root/chunk-g49h1vq6.js";
import {
  DQ,
  WEt,
  Mko,
  wEl,
  kEl,
  Wvr,
  TEl,
  CEl,
  AEl,
  bks,
} from "/$bunfs/root/chunk-dx8ym8aw.js";
import { B } from "/$bunfs/root/chunk-b8e2yqms.js";
import { homedir as Un } from "os";
import { isDeepStrictEqual as Hn } from "util";
function $M(e) {
  return e.replace(/^.*[\\/]/, "").replace(/\.exe$/i, "");
}
function Rgr(e) {
  for (let t of [$M(e), e]) {
    if (t.includes("zsh")) return "zsh";
    if (t.includes("bash")) return "bash";
  }
  return;
}
import { AsyncLocalStorage as xt } from "async_hooks";
var yt = 5000,
  De = 65536,
  ye = 1e4,
  G = new xt(),
  Ce = new xt();
async function Tal(e) {
  let t = Ce.getStore() ?? { noted: !1 };
  return { result: await Ce.run(t, e), tooLong: t.noted };
}
function Me() {
  let e = Ce.getStore();
  if (e !== void 0) e.noted = !0;
}
class _e extends Error {}
function Jcs(e) {
  return e instanceof _e;
}
var Le = {
  now() {
    let { user: e, system: t } =
      process.threadCpuUsage?.() ?? process.cpuUsage();
    return (e + t) / 1000;
  },
};
function Cal(e) {
  return G.getStore() === void 0 ? G.run({ left: yt }, e) : e();
}
async function Iuo(e) {
  let t = Le.now(),
    n = G.getStore() ?? { left: yt },
    r = n.until !== void 0;
  n.until ??= t + n.left;
  try {
    return { result: await G.run(n, e), outOfTime: n.outOfTime === !0 };
  } catch (i) {
    if (i instanceof _e) return { outOfTime: !0 };
    throw i;
  } finally {
    if (!r) ((n.until = void 0), (n.left -= Le.now() - t));
  }
}
function GOi(e = 0) {
  let t = G.getStore();
  if (t?.until !== void 0 && (e > ye || Le.now() > t.until)) ze();
}
function Aal() {
  let e = G.getStore();
  if (e !== void 0) e.spliced = 0;
  GOi();
}
function _t(e) {
  let t = e.some(
    ({ argv: n, envVars: r, redirects: i }) =>
      n.some((s) => s.length > ye) ||
      r.some(({ value: s }) => s.length > ye) ||
      i.some(({ target: s }) => s.length > ye),
  );
  if (t) (Me(), ze());
  return t;
}
function ze() {
  let e = G.getStore();
  if (e?.until !== void 0) throw ((e.outOfTime = !0), new _e());
}
function bt(e) {
  let t = G.getStore();
  if (t?.until !== void 0) {
    if (((t.spliced = (t.spliced ?? 0) + e), t.spliced > De)) ze();
  }
}
function X1t(e) {
  return /^-[pvV]+$/.test(e) && /[vV]/.test(e);
}
function BBe(e, t) {
  return /^-[a-zA-Z]+$/.test(e) && [...t].some((n) => e.includes(n));
}
function We(e) {
  return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e);
}
function Ral(e, t) {
  return /^-[a-z]+$/.test(e) && [...t].some((n) => e.includes(n));
}
var kt = 1e4,
  Cn = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local",
    "unset",
    "unsetenv",
  ]),
  Ln = new Set(["word", "string", "raw_string", "number"]),
  Fe = new Set(["command_substitution", "process_substitution"]),
  Be = new Set(["command", "declaration_command"]);
async function Qcs(e) {
  if (!e || e.length > kt) return null;
  try {
    let t = oS().parse(e);
    if (!t) return null;
    let n = WBe(t, null),
      r = Dn(n);
    return { rootNode: t, envVars: r, commandNode: n, originalCommand: e };
  } catch {
    return null;
  }
}
var dk = Symbol("parse-aborted");
async function lW(e) {
  if (!e) return null;
  if (e.length > kt)
    return (
      a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !1 }),
      dk
    );
  try {
    let t = oS().parse(e);
    if (t === null)
      return (
        a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !1 }),
        dk
      );
    return t;
  } catch {
    return (
      a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !0 }),
      dk
    );
  }
}
function WBe(e, t) {
  let { type: n, children: r } = e;
  if (Be.has(n)) return e;
  if (n === "variable_assignment" && t)
    return (
      t.children.find((i) => Be.has(i.type) && i.startIndex > e.startIndex) ??
      null
    );
  if (n === "pipeline") {
    for (let i of r) {
      let s = WBe(i, e);
      if (s) return s;
    }
    return null;
  }
  if (n === "redirected_statement")
    return r.find((i) => Be.has(i.type)) ?? null;
  for (let i of r) {
    let s = WBe(i, e);
    if (s) return s;
  }
  return null;
}
function Dn(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let n of e.children)
    if (n.type === "variable_assignment") t.push(n.text);
    else if (n.type === "command_name" || n.type === "word") break;
  return t;
}
function J1t(e) {
  if (e.type === "declaration_command") {
    let r = e.children[0];
    return r && Cn.has(r.text) ? [r.text] : [];
  }
  let t = [],
    n = !1;
  for (let r of e.children) {
    if (r.type === "variable_assignment") continue;
    if (r.type === "command_name" || (!n && r.type === "word")) {
      n = !0;
      let i = r.children[0] ?? r;
      if (i.type === "concatenation")
        t.push(
          i.children.some((s) => Fe.has(s.type))
            ? i.text
            : i.children.map(be).join(""),
        );
      else t.push(be(i));
      continue;
    }
    if (Ln.has(r.type)) t.push(be(r));
    else if (r.type === "concatenation") {
      if (r.children.some((i) => Fe.has(i.type))) break;
      t.push(r.children.map(be).join(""));
    } else if (Fe.has(r.type)) break;
  }
  return t;
}
function be(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return Mn(e.text);
}
function Mn(e) {
  return e.length >= 2 &&
    ((e[0] === '"' && e.at(-1) === '"') || (e[0] === "'" && e.at(-1) === "'"))
    ? e.slice(1, -1)
    : e;
}
function wt(e, t) {
  let n = He(e, t, "line"),
    r = n.search(Wn);
  return (r !== -1 && Et.test(n.slice(r + 2))) || St(e, t, !1);
}
var Ue = "\x03",
  zn = "\x02",
  Wn = /[$<>]\((?!\(?\x03)/,
  Et =
    /(?:^|[ \t\n;&|()<>])(?:#|(?:case|esac)(?=$|[ \t\n;&|()<>]))|(?:^|[^<])(?:<<(?![<\x02])|<<<+[<\x02])|\$(?=$|[ \t\n;&|)<>])/;
function St(e, t, n) {
  let r = e.children[0]?.type;
  if (
    e.type === "process_substitution" ||
    (e.type === "command_substitution" && r === "$(")
  ) {
    let s = He(e, t, "substitution");
    if (n || Et.test(s.slice(2, -1)) || !Rt(s.slice(1))) return !0;
  } else if (r === "$((" && !Rt(He(e, t, "substitution").slice(1))) return !0;
  let i =
    n ||
    e.type === "arithmetic_expansion" ||
    e.type === "c_style_for_statement" ||
    r === "((" ||
    (e.type === "string" &&
      e.children.some(
        (s, o) => s.type === "$" && e.children[o + 1]?.text.startsWith("["),
      ));
  return e.children.some((s) => St(s, t, i));
}
function Rt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    if (e[n] === "(") t++;
    else if (e[n] === ")" && --t === 0) return n === e.length - 1;
  return !1;
}
function He(e, t, n) {
  let r = "",
    i = e.startIndex,
    s = At(e, n).sort((o, l) => o.start - l.start);
  for (let o of s)
    if (o.start >= i)
      ((r += t.toString("latin1", i, o.start) + o.left), (i = o.end));
  return (r + t.toString("latin1", i, e.endIndex)).replace(
    /\\([^])/g,
    (o, l) =>
      l ===
      `
`
        ? ""
        : l === " " || l === "\t"
          ? l
          : "_",
  );
}
function At(e, t) {
  return e.children.flatMap((n) => {
    let r = Fn(n, t);
    return r === null
      ? At(n, t)
      : [{ start: n.startIndex, end: n.endIndex, left: r }];
  });
}
function Fn(e, t) {
  switch (e.type) {
    case "raw_string":
      return "''";
    case "string":
      return '""';
    case "ansi_c_string":
      return "$''";
    case "simple_expansion":
      return "$x";
    case "comment":
      return " #";
    case "heredoc_body":
      return t === "line" ? " " : null;
    case "heredoc_redirect":
      return t === "substitution" && Bn(e) ? "<<" + zn : null;
    case "command_substitution":
      return e.children[0]?.type === "$(" ? "$(" + Ue + ")" : "``";
    case "process_substitution":
      return e.text.charAt(0) + "(" + Ue + ")";
    case "arithmetic_expansion":
      return e.children[0]?.type === "$((" ? "$((" + Ue + "))" : null;
    default:
      return null;
  }
}
function Bn(e) {
  let [t, n, r, i] = e.children;
  if (
    !t ||
    !n ||
    !r ||
    !i ||
    (t.type !== "<<" && t.type !== "<<-") ||
    n.type !== "heredoc_start" ||
    !/^(?:(?!(?:case|esac)$)\w+|'[^'\\\s()]+'|"[^"$`\\\s()]+")$/.test(n.text) ||
    r.type !== "heredoc_body" ||
    r.startIndex !== n.endIndex + 1 ||
    i.type !== "heredoc_end"
  )
    return !1;
  return cus(t.type, r.text, i.text);
}
var Zt = '"(?:\\$PWD|\\$\\(pwd\\))',
  zOi = new RegExp(`${Zt}/`),
  Zcs = new RegExp(`^${Zt}(/[^"$\`\\\\\\n]*)"$`),
  ct = new Set(["program", "list", "pipeline", "redirected_statement"]),
  pe = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`,
  ]),
  Gt = new Set([
    "command",
    "pipeline",
    "list",
    "negated_command",
    "declaration_command",
    "unset_command",
  ]),
  Zn = new Set(["test_command", "redirected_statement"]),
  Gte = "__CMDSUB_OUTPUT__",
  O = "__TRACKED_VAR__",
  Gn = new Set(["file_redirect", "herestring_redirect", "heredoc_redirect"]),
  C = "__UNCERTAIN_VAR__";
function bi(e) {
  return e.includes(Gte) || e.includes(O) || e.includes(C);
}
function eus(e) {
  let t = [Gte, O, C].find((n) => e.startsWith(n));
  return t === void 0 ? void 0 : e.slice(t.length);
}
function xgr(e) {
  let t = [Gte, O, C].map((n) => e.indexOf(n));
  return e.slice(0, Math.min(...t.filter((n) => n !== -1), e.length));
}
function b2(e) {
  return e.replaceAll(Gte, "$(\u2026)").replaceAll(O, "${\u2026}");
}
function jBe(e) {
  return e.replaceAll(Gte, "").replaceAll(O, "");
}
var D = 0,
  Se = 0,
  U = 0,
  Vn = /["`\\]/;
function qn(e, t) {
  return (
    t > 0 &&
    e[t - 1] ===
      `
`
  );
}
function VOi(e) {
  if (e.includes(O) || e.includes(C)) return !0;
  let t = e.indexOf(Gte);
  while (t !== -1) {
    if (!qn(e, t)) return !0;
    t = e.indexOf(Gte, t + Gte.length);
  }
  return !1;
}
function KOi(e) {
  return e.startsWith(Gte) || e.startsWith(O) || e.startsWith(C);
}
var $t = /[ \t\n*?[]/,
  jn = /^-[ioe]$/,
  Yn = /^-[ioe]./,
  Kn = /^--(input|output|error)=/,
  Tt = new Set([
    "BASHOPTS",
    "BASH_VERSINFO",
    "EUID",
    "PPID",
    "SHELLOPTS",
    "UID",
    "FUNCNAME",
    "GROUPS",
    "BASH_ARGC",
    "BASH_ARGV",
    "BASH_LINENO",
    "BASH_SOURCE",
    "BASHPID",
  ]),
  Ye = new Set([
    "HOME",
    "PWD",
    "OLDPWD",
    "USER",
    "LOGNAME",
    "SHELL",
    "PATH",
    "HOSTNAME",
    "UID",
    "EUID",
    "PPID",
    "RANDOM",
    "SECONDS",
    "LINENO",
    "TMPDIR",
    "BASH_VERSION",
    "BASHPID",
    "SHLVL",
    "HISTFILE",
    "IFS",
  ]),
  Xn = new Set(["?", "$", "!", "#", "0", "-"]),
  Qn = new Set([
    "command_substitution",
    "process_substitution",
    "expansion",
    "simple_expansion",
    "brace_expression",
    "subshell",
    "compound_statement",
    "for_statement",
    "while_statement",
    "until_statement",
    "if_statement",
    "case_statement",
    "function_definition",
    "test_command",
    "ansi_c_string",
    "translated_string",
    "herestring_redirect",
    "heredoc_redirect",
  ]),
  Jn = [...Qn];
function tus(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = Jn.indexOf(e);
  return t >= 0 ? t + 1 : 0;
}
var Ke = {
    ">": ">",
    ">>": ">>",
    "<": "<",
    ">&": ">&",
    "<&": "<&",
    ">|": ">|",
    "&>": "&>",
    "&>>": "&>>",
    "<<<": "<<<",
  },
  Ae = {
    test: (e) =>
      e.split(/\s/).some((t) => {
        let n = t.indexOf("{"),
          r = t.lastIndexOf("}"),
          i = n < 0 || r < n ? "" : t.slice(n + 1, r);
        return i.includes(",") || i.includes("..");
      }),
  },
  Xe = /\{[^{]*\\}/,
  Qe = /\{[^}]*\\\{/,
  fot = /[\x00-\x08\x0B-\x1F\x7F]/,
  Q1t =
    /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/,
  Z1t = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/,
  son = /\\[ \t]/,
  Muo = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n|\\[ \t]\\\n/,
  er = new RegExp(`${son.source}|${Muo.source}`),
  Huo = /(?:^|[^\\])(?:\\\\)*(?:[`$]|[<>=]\()/,
  nus = /(?:^|[^\\])(?:\\\\)*['"]/,
  Duo = /~\[/,
  Luo = /(?:^|[\s;&|])=[a-zA-Z_]/,
  rus = /<\d*-\d*>/,
  tr = /\{[^}]*['"]/,
  Je = /[*?[]/;
function GBe(e) {
  if (!Je.test(e)) return !1;
  let t = !1,
    n = !1,
    r = !1,
    i = !0,
    s = 0;
  while (s < e.length) {
    let o = e[s];
    if (r)
      if (
        o === "\\" &&
        (e[s + 1] === "`" || e[s + 1] === "\\" || e[s + 1] === "$")
      )
        s += 2;
      else {
        if (o === "`") r = !1;
        s++;
      }
    else if (t) {
      if (o === "'") t = !1;
      s++;
    } else if (n)
      if (
        o === "\\" &&
        (e[s + 1] === '"' || e[s + 1] === "\\" || e[s + 1] === "`")
      )
        s += 2;
      else if (o === "`") ((r = !0), s++);
      else {
        if (o === '"') n = !1;
        s++;
      }
    else if (o === "\\" && s + 1 < e.length) {
      if (
        e[s + 1] !==
        `
`
      )
        i = !1;
      s += 2;
    } else if (o === "#" && i) {
      while (
        s < e.length &&
        e[s] !==
          `
`
      )
        s++;
      i = !0;
    } else if (o === "`") ((r = !0), (i = !1), s++);
    else {
      if (o === "*" || o === "?" || o === "[") return !0;
      if (o === "'") t = !0;
      else if (o === '"') n = !0;
      ((i =
        o === " " ||
        o === "\t" ||
        o ===
          `
` ||
        o === ";" ||
        o === "|" ||
        o === "&" ||
        o === "(" ||
        o === ")" ||
        o === "<" ||
        o === ">"),
        s++);
    }
  }
  return !1;
}
var nr = /[*?]|\[[^\]]*\]/;
function ke(e) {
  return nr.test(e);
}
function zBe(e) {
  let t = e.argvUnquotedGlob;
  if (e.carveOutMayDesyncQuoteScan === !0 || (t === void 0 && e.argv.some(bi)))
    return (
      e.argv.some(ke) ||
      e.redirects.some((r) => r.op !== "<<" && r.op !== "<<<" && ke(r.target))
    );
  if (t === void 0) return !1;
  if (t.length !== e.argv.length) return e.argv.some(ke);
  return e.argv.some((r, i) => ke(r) && (t[i] === !0 || bi(r)));
}
function Vt(e) {
  if (!e.includes("{")) return e;
  let t = [],
    n = !1,
    r = !1,
    i = !1,
    s = !0,
    o = 0;
  while (o < e.length) {
    let l = e[o];
    if (i)
      if (
        l === "\\" &&
        (e[o + 1] === "`" || e[o + 1] === "\\" || e[o + 1] === "$")
      )
        (t.push(l, e[o + 1]), (o += 2));
      else {
        if (l === "`") i = !1;
        (t.push(l === "{" ? " " : l), o++);
      }
    else if (n) {
      if (l === "'") n = !1;
      (t.push(l === "{" ? " " : l), o++);
    } else if (r)
      if (
        l === "\\" &&
        (e[o + 1] === '"' || e[o + 1] === "\\" || e[o + 1] === "`")
      )
        (t.push(l, e[o + 1]), (o += 2));
      else if (l === "`") ((i = !0), t.push(l), o++);
      else {
        if (l === '"') r = !1;
        (t.push(l === "{" ? " " : l), o++);
      }
    else if (l === "\\" && o + 1 < e.length) {
      if (
        (t.push(l, e[o + 1]),
        e[o + 1] !==
          `
`)
      )
        s = !1;
      o += 2;
    } else if (l === "#" && s) {
      while (
        o < e.length &&
        e[o] !==
          `
`
      )
        (t.push(e[o]), o++);
      s = !0;
    } else if (l === "`") ((i = !0), (s = !1), t.push(l), o++);
    else {
      if (l === "'") n = !0;
      else if (l === '"') r = !0;
      ((s =
        l === " " ||
        l === "\t" ||
        l ===
          `
` ||
        l === ";" ||
        l === "|" ||
        l === "&" ||
        l === "(" ||
        l === ")" ||
        l === "<" ||
        l === ">"),
        t.push(l),
        o++);
    }
  }
  return t.join("");
}
var Pt = String.fromCharCode(36);
function Oe(e, t) {
  if (e.type === t) return !0;
  for (let n of e.children) if (n && Oe(n, t)) return !0;
  return !1;
}
async function yE(e, { readsDivergentShapes: t = !1 } = {}) {
  if (e === "")
    return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let n = await lW(e);
  if (n === null)
    return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let r = jK(e, n, { readsDivergentShapes: t });
  if (n !== dk && (r.kind === "simple" || r.nodeType !== void 0))
    return { ...r, tree: n };
  return r;
}
function Nuo(e, t) {
  let n = (i) => Array.from({ length: e }, (s, o) => i(o));
  if (e <= 3)
    return {
      readings: Array.from({ length: 2 ** e }, (i, s) =>
        n((o) => Math.floor(s / 2 ** o) % 2 === 1),
      ),
      exhaustive: !0,
    };
  let r = [n(() => !1), n(() => !0)];
  for (let i = 0; e <= 8 && i < e; i++) r.push(n((s) => s === i));
  if (t?.length === e && !r.some((i) => i.every((s, o) => s === t[o])))
    r.push([...t]);
  return { readings: r, exhaustive: !1 };
}
function jK(e, t, n = {}) {
  let r = rr(e, t, n);
  if (r.kind !== "simple") Fko(e);
  return r;
}
function rr(e, t, n) {
  let r = Nt(e, t, n, "first");
  if (r.kind === "simple" && _t(r.commands) && t !== dk) return En(t);
  let i = t === dk ? void 0 : _dn(t);
  if (i !== void 0 && r.kind === "simple")
    return { kind: "too-complex", reason: Wuo[i], differential: !0 };
  if (
    r.kind === "simple" &&
    n.readsDivergentShapes !== !0 &&
    t !== dk &&
    qDn(e, t)
  )
    return {
      kind: "too-complex",
      reason:
        "A nested command in this command can't be checked before it runs",
      differential: !0,
      divergentShape: !0,
      keepsRemovalVerdict: !0,
    };
  return r.kind === "simple" &&
    r.hasLoop === !0 &&
    kEl() &&
    !Hn(r, Nt(e, t, n, "later"))
    ? { ...r, laterLoopPassesDiffer: !0 }
    : r;
}
function qDn(e, t) {
  return e.includes("(") && NEl() && wt(t, Buffer.from(e, "utf8"));
}
function Nt(
  e,
  t,
  {
    plainUnquotedHeredocs: n = !1,
    declarationPrefix: r,
    readsDivergentShapes: i = !1,
    passesEscapedBlanks: s = !1,
  },
  o,
) {
  if (Q1t.test(e))
    return {
      kind: "too-complex",
      reason: "Contains lone surrogate",
      differential: !0,
    };
  if (fot.test(e))
    return {
      kind: "too-complex",
      reason: "Contains control characters",
      differential: !0,
    };
  if (Z1t.test(e))
    return {
      kind: "too-complex",
      reason: "Contains Unicode whitespace",
      differential: !0,
    };
  if ((s ? Muo : er).test(e))
    return {
      kind: "too-complex",
      reason: "Contains backslash-escaped whitespace",
      differential: !0,
    };
  if (Duo.test(e))
    return {
      kind: "too-complex",
      reason: "Contains zsh ~[ dynamic directory syntax",
      differential: !0,
    };
  if (Luo.test(e))
    return {
      kind: "too-complex",
      reason: "Contains zsh =cmd equals expansion",
      differential: !0,
    };
  if (rus.test(e))
    return {
      kind: "too-complex",
      reason: "Contains zsh <N-M> numeric-range glob",
      differential: !0,
    };
  if (tr.test(Vt(e)))
    return {
      kind: "too-complex",
      reason: "Contains brace with quote character (expansion obfuscation)",
      differential: !0,
    };
  if (e.trim() === "")
    return { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (t === dk)
    return {
      kind: "too-complex",
      reason: "Parser aborted (timeout, resource limit, or over-length)",
      nodeType: "PARSE_ABORT",
    };
  for (let S of [
    "backtick_body_empty",
    "backtick_body_overrun",
    "backtick_escape_unsupported",
  ])
    if (Oe(t, S))
      return {
        kind: "too-complex",
        reason:
          S === "backtick_body_empty"
            ? "empty backtick substitution \u2014 bash joins the surrounding words, so the parsed command boundaries cannot be trusted"
            : "backtick substitution scan could not be trusted (" +
              S +
              ") \u2014 the parsed bytes may differ from what bash executes",
        differential: !0,
      };
  let c = Buffer.from(e, "utf8");
  {
    let S = Xt(t, c, 0);
    if (S) return S;
  }
  {
    let S = Qt(t);
    if (S) return S;
  }
  let f = (S) =>
      S === 32 || S === 9 || S === 10 || S === 13 || S === 59 || S === 38,
    g = (S, Q) => {
      let F = S;
      while (F < Q) {
        let gt = c[F];
        if (f(gt)) F++;
        else if (
          gt === 92 &&
          (c[F + 1] === 10 || (c[F + 1] === 13 && c[F + 2] === 10))
        )
          F += c[F + 1] === 13 ? 3 : 2;
        else break;
      }
      return F;
    },
    _ = t.children
      .filter((S) => S !== null)
      .map((S) => [S.startIndex, S.endIndex])
      .sort((S, Q) => S[0] - Q[0]),
    h = 0;
  for (let [S, Q] of _) {
    if (g(h, S) < S)
      return {
        kind: "too-complex",
        reason: "Parser skipped input between top-level statements",
      };
    if (Q > h) h = Q;
  }
  if (g(h, c.length) < c.length)
    return {
      kind: "too-complex",
      reason: "Parser did not consume trailing input",
    };
  {
    let S = pn(t, c);
    if (S !== null)
      return {
        kind: "too-complex",
        reason: `Redirect uses ${ft(S)} fd-variable assignment \u2014 modifies shell variable as side effect`,
      };
  }
  {
    let S = hn(t);
    if (S) return S;
  }
  let p = i ? null : qt(t);
  if (p !== null)
    return {
      kind: "too-complex",
      reason: p,
      nodeType: "ERROR",
      differential: !0,
      divergentShape: !0,
    };
  let u = re,
    x = N,
    d = V,
    m = le,
    b = H,
    y = j,
    w = W,
    k = q,
    A = de,
    R = Y,
    P = Z;
  Z = !1;
  let L = ce;
  ce = !1;
  let Nn = ue;
  ue = 0;
  let vn = fe,
    In = X,
    On = K;
  ((fe = o === "later"),
    (X = null),
    (K = 0),
    (re = n),
    (N = i),
    (V = !1),
    (le = e.length * $r),
    (H = r),
    (j = 0),
    (W = new Map()),
    (q = !1),
    (de = new Set()),
    (Y = void 0));
  let v;
  try {
    if (((v = pr(t)), Z && v.kind === "simple"))
      v = { ...v, usesAssignedValue: !0 };
    if (q && v.kind === "simple")
      v = {
        kind: "too-complex",
        reason:
          "A variable set in front of a declaration inside a branch or loop can't be checked before it runs",
      };
    let S = Rr();
    if (r === void 0 && S !== void 0)
      v = {
        ...v,
        declarationPrefixes: S.length,
        declarationPrefixBashKeeps: S,
      };
    if (r !== void 0 && v.kind === "simple" && wr() !== r.length)
      v = {
        kind: "too-complex",
        reason:
          "The variables set in front of declarations in this command can't be checked before it runs",
      };
    if (V) v = { ...v, uncertainWrite: !0 };
  } finally {
    ((re = u),
      (N = x),
      (V = d),
      (le = m),
      (H = b),
      (j = y),
      (W = w),
      (q = k),
      (de = A),
      (Y = R),
      (Z = P),
      (ce = L),
      (ue = Nn),
      (fe = vn),
      (X = In),
      (K = On));
  }
  if (v.kind === "too-complex" && v.nodeType !== "ERROR" && (jt(t) || Yt(t)))
    return { ...v, nodeType: "ERROR" };
  return v;
}
function qt(e) {
  if (e.children.length === 0)
    return e.startIndex === e.endIndex && !e.type.startsWith("heredoc_")
      ? "Parse error"
      : null;
  for (let t of e.children) {
    let n = t === null ? null : qt(t);
    if (n !== null) return n;
  }
  return e.type === "test_command" &&
    e.children[0]?.type === "[" &&
    !/^\[[ \t]/.test(e.text)
    ? "[ glued to the next word names another command"
    : null;
}
function jt(e) {
  if (e.type === "ERROR" && (e.text.startsWith("${") || Kt(e.text))) return !0;
  for (let t of e.children) if (t && jt(t)) return !0;
  return !1;
}
function Yt(e) {
  let t = e.children;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (!r) continue;
    if (
      r.type === "simple_expansion" &&
      r.children.some(
        (i) => i?.type === "special_variable_name" && i.text === "#",
      )
    ) {
      let i = "";
      for (let o = n + 1; o < t.length; o++) {
        let l = t[o]?.text ?? "";
        if (((i += l), !/^[\w\u0080-\uffff]*$/.test(l))) break;
      }
      let s = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(i);
      if (s && /[\u0080-\uffff]/.test(s[0])) return !0;
    }
    if (Yt(r)) return !0;
  }
  return !1;
}
function Kt(e) {
  return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(e) && /[\u0080-\uffff]/.test(e);
}
function Xt(e, t, n) {
  for (let r of e.children) {
    if (!r) continue;
    let i = r.startIndex - 1 - n;
    if (r.type === "comment" && i >= 0 && (t[i] === 41 || t[i] === 40))
      return {
        kind: "too-complex",
        reason:
          "comment glued to a paren \u2014 bash reads `)#\u2026` and `(#\u2026` as a comment, but zsh reads a keyword- or word-glued `(\u2026)` as a glob group whose `#\u2026` text is word content that executes",
        differential: !0,
      };
    let s = Xt(r, t, n);
    if (s) return s;
  }
  for (let r of e.children) {
    if (!r) continue;
    if (
      r.type === "case_item" &&
      !r.children.some((i) => i !== void 0 && i.type === ")") &&
      nn(r)
    )
      return {
        kind: "too-complex",
        reason:
          "`case` pattern group holds a comment \u2014 bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents",
        differential: !0,
      };
    if (
      r.type === "function" &&
      !e.children.some((i) => i !== void 0 && i.type === "(")
    ) {
      let i = e.children[1],
        s = e.children.find(
          (l) => l !== void 0 && l.type === "redirected_statement",
        )?.children[0],
        o =
          e.children.find((l) => l !== void 0 && l.type === "subshell") ??
          (s?.type === "subshell" ? s : void 0);
      if (
        i !== void 0 &&
        o !== void 0 &&
        fr(t, i.endIndex - n, o.startIndex - n)
      )
        return {
          kind: "too-complex",
          reason:
            "`function` with a parenthesised body and no `()` \u2014 bash reads a subshell body, but zsh reads one glob-group word and expands its contents",
          differential: !0,
        };
    }
    if (sr.has(r.type) && t[r.endIndex - n] === 40)
      return {
        kind: "too-complex",
        reason: `\`${r.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`,
        differential: !0,
      };
  }
  return null;
}
var sr = new Set(["if", "elif", "else", "while", "until", "case"]);
function Qt(e) {
  if (e.type === "declaration_command" || e.type === "unset_command") {
    if (
      e.type === "declaration_command" &&
      e.children.some(
        (s) =>
          s !== void 0 &&
          (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "")
            ? or
            : ut
          ).test(M(s.text)),
      ) &&
      !ne(e)
    )
      return {
        kind: "too-complex",
        reason: `${e.children[0]?.text ?? "declare"} with a flag that changes assignment semantics and an operand it would evaluate`,
        differential: !0,
      };
    let t =
        e.type === "unset_command" ||
        /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? ""),
      n = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? ""),
      r = e.children.some(
        (s) => s !== void 0 && /^[-+][A-Za-z]*[fF]/.test(M(s.text)),
      ),
      i;
    for (let [s, o] of e.children.entries()) {
      if (!o) continue;
      if (
        s > 1 &&
        i !== void 0 &&
        o.type !== "variable_assignment" &&
        o.startIndex === i.endIndex
      )
        return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} operand '${i.text}${o.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
          differential: !0,
        };
      if (s > 0 && o.type === "ansi_c_string" && /^\$'[-+]/.test(o.text))
        return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} flag ${o.text} \u2014 a $'\u2026' flag word the shell decodes`,
          differential: !0,
        };
      if (s > 0 && !/^[-+]/.test(M(o.text))) {
        let l =
          o.type === "word" ||
          o.type === "raw_string" ||
          o.type === "concatenation" ||
          o.type === "variable_name" ||
          o.type === "number";
        if (
          o.type === "ansi_c_string" &&
          (t || e.children[0]?.text === "readonly")
        )
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand ${o.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
            differential: !0,
          };
        if (n) {
          if (!Pe(o, r))
            return {
              kind: "too-complex",
              reason: `${e.children[0]?.text ?? "declare"} operand '${o.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0,
            };
          i = o;
          continue;
        }
        let c = ee(o.text),
          f = /^['"]?[A-Za-z_]\w*=/.test(o.text),
          g = l
            ? (t && c.includes("[")) ||
              (f ? c.slice(1).includes("\\") : o.text.slice(1).includes("\\"))
            : o.type === "string" &&
              (f ? c.includes("\\") : o.text.includes("\\")),
          _ = o.type === "variable_assignment" && /['\\]/.test(ee(o.text)),
          h = l && t && /^['"]?\$/.test(c) && /[[`'"]/.test(o.text);
        if (g || _ || h)
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`,
            differential: !0,
          };
        if (
          o.type === "variable_name"
            ? !(ie.test(o.text) || (r && $e.test(o.text)))
            : (o.type === "word" ||
                o.type === "concatenation" ||
                o.type === "raw_string" ||
                (o.type === "string" && ee(o.text) !== o.text)) &&
              !vt(o.text, r, e.children[0]?.text === "readonly")
        )
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`,
            differential: !0,
          };
      }
      i = o;
    }
  }
  if (e.type === "command") {
    let t = e.children.find((i) => i !== void 0 && i.type === "command_name"),
      n = t === void 0 ? -1 : e.children.indexOf(t),
      r = e.children.filter(
        (i, s) => i !== void 0 && s > n && i.type !== "command_name",
      );
    if (t !== void 0) {
      if (Te(t) && r.some((f) => !/^[-+]/.test(M(f.text))))
        return {
          kind: "too-complex",
          reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
          differential: !0,
        };
      let i = Ge(t.text),
        s = r,
        o = !1,
        l = !1;
      while (ous.test(i) && s.length > 0) {
        o = !0;
        while (s.length > 0 && /^-/.test(M(s[0].text))) {
          let f = M(s[0].text);
          if (i === "command" && /^-[pP]*[vV]/.test(f)) l = !0;
          s = s.slice(i === "exec" && /^-[cl]*a$/.test(f) ? 2 : 1);
        }
        if (
          !l &&
          s.length > 0 &&
          Te(s[0]) &&
          s.slice(1).some((f) => !/^[-+]/.test(M(f.text)))
        )
          return {
            kind: "too-complex",
            reason: `command head ${s[0].text} after ${i} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
            differential: !0,
          };
        ((i = s.length > 0 ? Ge(s[0].text) : ""), (s = s.slice(1)));
      }
      let c = o || Ge(t.text) !== t.text || Fuo.test(t.text);
      if (!l && c && Fuo.test(i)) {
        let f = i === "integer" || i === "float",
          g = {
            ...e,
            children: [t, ...(f ? [{ ...t, text: "-i" }] : []), ...s],
          },
          _ = s
            .map((d) => M(d.text))
            .filter((d) => /^[-+]/.test(d))
            .join(""),
          h =
            f ||
            (/^(?:declare|typeset|local|private)$/.test(i) && ir.test(_)) ||
            (/^(?:export|readonly)$/.test(i) && ar.test(_)),
          p = s.filter((d) => !/^[-+]/.test(M(d.text))),
          u = /[fF]/.test(_),
          x =
            (h && !ne(g)) ||
            s.some(
              (d) => d.type === "ansi_c_string" && /^\$'[-+]/.test(d.text),
            );
        if (/^(?:declare|typeset|local|integer|float|private)$/.test(i))
          x ||= p.some((d) => !Pe(d, u));
        else
          x ||= p.some((d) => {
            if (d.type === "ansi_c_string") return !0;
            let m = ee(d.text);
            return (
              /[\\'"]/.test(m.replace(/^['"]/, "").replace(/['"]$/, "")) ||
              (i !== "readonly" && m.includes("[")) ||
              /^['"]?\$/.test(m) ||
              ((d.type === "word" ||
                d.type === "concatenation" ||
                d.type === "raw_string" ||
                (d.type === "string" && ee(d.text) !== d.text)) &&
                !vt(d.text, u, i === "readonly"))
            );
          });
        if (x)
          return {
            kind: "too-complex",
            reason: `${i} spelled '${o ? `${t.text} \u2026` : t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`,
            differential: !0,
          };
      }
    }
  }
  for (let t of e.children) {
    if (!t) continue;
    let n = Qt(t);
    if (n) return n;
  }
  return null;
}
var ous = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/,
  Fuo =
    /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/,
  ut = /^[-+].*[nialuAEFLRZ]/,
  ir = /[nialuAEFLRZ]/,
  or = /^[-+].*[aAiluEFLRZ]/,
  ar = /[aAiluEFLRZ]/,
  Ze = { assigning: /^[-+][rtx]+$/, listing: /^(?:-[fgprtxU]+|\+[grtx]+)$/ },
  lr = new Map([
    ["declare", Ze],
    ["typeset", Ze],
    ["local", { assigning: Ze.assigning, listing: /^-[fprtx]+$/ }],
    ["export", { listing: /^-[aAfnp]+$/ }],
    ["readonly", { listing: /^-[aAfpx]+$/ }],
  ]);
function Jt(e, t) {
  let n = lr.get(e),
    r = new Set(),
    i = e === "readonly",
    s = !1,
    o;
  for (let l of t)
    if (!/^[-+]/.test(l)) {
      if (o !== void 0 && l.includes("="))
        return `${e} ${o} with an assignment \u2014 not every supported bash and zsh assigns under that option, so the value cannot be statically verified`;
      let c = l.replace(/\+?=.*/s, "");
      if (i && l.includes("=") && r.has(c))
        return `${e} names '${b2(c)}' twice \u2014 the first makes it read-only, so bash does not carry out the second`;
      (r.add(c), (s = !0));
    } else if (s)
      return `${e} word '${b2(l)}' comes after the options \u2014 the shell reads it as a name, which it cannot be, and bash and zsh go on from that error differently`;
    else if (l === "--") s = !0;
    else if (n?.assigning?.test(l)) i ||= /^-.*r/.test(l);
    else if (n?.listing.test(l)) o ??= l;
    else
      return `${e} option '${b2(l)}' is not one bash and zsh are both known to accept \u2014 a shell that rejects it assigns nothing, so the names it declares cannot be statically verified`;
  return null;
}
function en(e, t) {
  let n = t.filter((r) => !/^[-+]/.test(r));
  if (e === "local" && n.some((r) => r.includes("=")))
    return "'local' outside a function \u2014 bash refuses that and assigns nothing, so the value cannot be statically verified";
  if ((e === "export" || e === "readonly") && n.length > 0 && t.some(We))
    return `'${e}' gives a name the array attribute \u2014 zsh empties a value it held and bash keeps it, so it cannot be statically verified`;
  return null;
}
var ie = /^[A-Za-z_][A-Za-z0-9_]*$/,
  $e = /^[A-Za-z_][\w.:-]*$/;
function vt(e, t, n = !1) {
  let r = ee(e),
    i = e[0];
  if (i === "'" || i === '"') {
    if (((r = r.slice(1)), r.endsWith(i))) r = r.slice(0, -1);
  } else if (/^\\[A-Za-z_]/.test(r)) r = r.slice(1);
  if (n && (i === "'" || i === '"')) {
    let s = e.indexOf("["),
      o = e.indexOf(i, 1);
    if (s > 0 && o > s) r = r.replace(/\[[\s\S]*$/, "");
  }
  return ((r = r.replace(/\+$/, "")), ie.test(r) || (t && $e.test(r)));
}
function Te(e) {
  return (
    e.type === "ansi_c_string" || e.children.some((t) => t !== void 0 && Te(t))
  );
}
function Ge(e) {
  return e.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "");
}
var cr = new Set([
    "command_substitution",
    "process_substitution",
    "arithmetic_expansion",
    "expansion",
    "simple_expansion",
  ]),
  et = "$_";
function ur(e) {
  let t = [],
    n = (o) => {
      for (let l of o.children) {
        if (!l) continue;
        if (cr.has(l.type))
          t.push([l.startIndex - e.startIndex, l.endIndex - e.startIndex]);
        else n(l);
      }
    };
  if ((n(e), t.length === 0)) return e.text;
  t.sort((o, l) => o[0] - l[0]);
  let r = Buffer.from(e.text, "utf8"),
    i = "",
    s = 0;
  for (let [o, l] of t) {
    if (o < s || l > r.length) return e.text;
    ((i += r.subarray(s, o).toString("utf8") + et), (s = l));
  }
  return i + r.subarray(s).toString("utf8");
}
function tn(e) {
  if (
    e.type === "expansion" &&
    e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")
  )
    return !0;
  return e.children.some((t) => t !== void 0 && tn(t));
}
function Pe(e, t) {
  if (e.type === "number" || /^\d+$/.test(e.text)) return !0;
  let n = ur(e);
  if (e.type !== "raw_string" && e.type !== "string" && Ae.test(Vt(n)))
    return !1;
  let r = /^['"]/.test(n) ? n.slice(1) : n,
    i = r.indexOf("="),
    s = (i < 0 ? r : r.slice(0, i)).replace(/\+$/, "");
  if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(s))
    return !1;
  if (i < 0) return !0;
  if (
    e.children.find(
      (f, g) => f !== void 0 && g >= 2 && f.type !== "=" && f.type !== "+=",
    )?.type === "array"
  )
    return !0;
  if (Te(e) || /\$'./.test(n)) return !1;
  if (tn(e)) return !1;
  let c = r.slice(i + 1);
  for (;;)
    if (/^[\\'"]/.test(c)) c = c.slice(1);
    else if (/^\$['"]/.test(c)) c = c.slice(2);
    else if (c.startsWith(et)) c = c.slice(et.length);
    else break;
  return !c.startsWith("(");
}
function ee(e) {
  let t = 0,
    n = null,
    r = e[0] === "'" || e[0] === '"' ? e[0] : null;
  for (let i = r === null ? 0 : 1; i < e.length; i += 1) {
    let s = e[i];
    if (n !== null) {
      if (s === n) n = null;
    } else if ((s === "'" || s === '"') && s !== r) n = s;
    else if (s === "[") t += 1;
    else if (s === "]" && t > 0) t -= 1;
    else if (s === "=" && t === 0) return e.slice(0, i);
  }
  return e;
}
function nn(e) {
  return e.children.some(
    (t) => t !== void 0 && (t.type === "comment" || nn(t)),
  );
}
function fr(e, t, n) {
  let r = t;
  while (r < n) {
    let i = e[r];
    if (i === 32 || i === 9) r += 1;
    else if (i === 92 && e[r + 1] === 10) r += 2;
    else return !1;
  }
  return !0;
}
function ne(e) {
  let t = e.children
      .map((i) => (i === void 0 ? "" : M(i.text)))
      .filter((i) => /^[-+]/.test(i))
      .join(""),
    r = /[iEF]/.test(t)
      ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/
      : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
  return e.children.every((i, s) => {
    if (!i || s === 0 || /^[-+]/.test(M(i.text))) return !0;
    return r.test(i.text);
  });
}
function M(e) {
  let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(e);
  if (t) return t[2];
  return /^\\[-+]/.test(e) ? e.slice(1) : e;
}
var rn = new Set(["for_statement", "while_statement"]),
  dr = 5;
function It(e) {
  return rn.has(e.type) && Tp();
}
function pr(e) {
  let t = Uuo(e);
  if (t) return t;
  let n = [],
    r = new Map(),
    i = [],
    s = I(e, n, r, i, !1, !0);
  if (s) return s;
  let o = [...rn].some((c) => Oe(e, c)),
    l = o ? void 0 : n.at(-1);
  for (let c of N ? [] : n) {
    let [f = "", ...g] = c.argv,
      _ = An(f, g) ?? (c === l ? null : en(f, g));
    if (_ !== null)
      return {
        kind: "too-complex",
        reason: _,
        divergentShape: !0,
        ...(c.argvUnquotedGlob === void 0 && {
          nodeType: "declaration_command",
        }),
      };
  }
  return { kind: "simple", commands: n, bareAssignmentNames: i, hasLoop: o };
}
function hr(e, t, n) {
  return !Buffer.from(e.text, "utf8")
    .subarray(t.endIndex - e.startIndex, n.startIndex - e.startIndex)
    .toString("utf8")
    .replace(/\\\r?\n/g, "").includes(`
`);
}
var mr = new Set([
    "command",
    "variable_assignment",
    "variable_assignments",
    "list",
    "pipeline",
    "redirected_statement",
    "negated_command",
    "declaration_command",
    "unset_command",
    "test_command",
    "subshell",
    "compound_statement",
    "if_statement",
    "while_statement",
    "for_statement",
    "case_statement",
    "function_definition",
    "ERROR",
  ]),
  gr = new Set([
    "negated_command",
    "if_statement",
    "while_statement",
    "for_statement",
    "subshell",
  ]);
function Uuo(e) {
  let t = null;
  for (let n of e.children) {
    if (!n) continue;
    if (mr.has(n.type)) {
      if (t !== null) {
        let i = n;
        while (ct.has(i.type)) {
          let s = i.children.find((o) => o != null);
          if (!s) break;
          i = s;
        }
        if (gr.has(i.type) && hr(e, t, i))
          return {
            kind: "too-complex",
            reason:
              i.type === "subshell"
                ? "`(\u2026)` group directly follows a statement or word on the same line \u2014 bash rejects the line, but zsh reads the glued `(\u2026)` as a glob-group word and expands what follows it"
                : "statement directly follows another statement on the same line \u2014 bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements",
            differential: !0,
          };
      }
      t = n;
    } else t = null;
    let r = Uuo(n);
    if (r) return r;
  }
  return null;
}
function I(e, t, n, r, i = !1, s = !1) {
  if (e.type === "command") {
    let o = Tr(e, [], t, n, r);
    if (o.kind !== "simple") return o;
    if (s) for (let l of o.commands) l.andChainOperand = !0;
    return (t.push(...o.commands), null);
  }
  if (e.type === "redirected_statement") return br(e, t, n, r, i, s);
  if (e.type === "comment") return null;
  if (ct.has(e.type)) {
    let o = e.type === "pipeline",
      l = t.length,
      c = !1;
    if (!o) {
      for (let p of e.children)
        if (p && (p.type === "||" || p.type === "&")) {
          c = !0;
          break;
        }
    }
    let f = c ? new Map(n) : null,
      g = o ? new Map(n) : n,
      _ = null,
      h =
        s &&
        (e.type === "program"
          ? B(e.children, (p) => p && p.type !== "comment") === 1
          : e.type === "list" &&
            !e.children.some((p) => p && pe.has(p.type) && p.type !== "&&"));
    for (let p of e.children) {
      if (!p) continue;
      if (pe.has(p.type)) {
        if (
          ((ce ||= p.type === "&"),
          p.type === "||" ||
            p.type === "|" ||
            p.type === "|&" ||
            p.type === "&")
        )
          if (p.type === "||") {
            if (((_ ??= new Set()), K === 0)) for (let d of n.keys()) _.add(d);
            let x = f ?? n;
            g = new Map(x);
            for (let [d, m] of n) if (x.get(d) !== m) T(g, d);
            for (let d of x.keys()) if (!n.has(d)) T(g, d);
          } else g = new Map(f ?? n);
        else if (_ !== null) {
          for (let x of _) T(n, x);
          ((_ = null), (g = n));
        }
        continue;
      }
      let u = I(p, t, g, r, e.type === "program", h);
      if (u) return u;
      if (_ !== null && K > 0) J(n, g);
    }
    if (_ !== null) for (let p of _) T(n, p);
    if (o) {
      if ((J(n, g), t.length === l)) te(t, e);
    }
    return null;
  }
  if (e.type === "negated_command") {
    let o = t.length;
    for (let l of e.children) {
      if (!l) continue;
      if (l.type === "!") continue;
      let c = I(l, t, n, r);
      if (c) return c;
    }
    if (t.length === o) te(t, e);
    return null;
  }
  if (e.type === "declaration_command") {
    let o = t.length,
      l = e.children.some((m) => m !== null && se(m)),
      c = (m, b) => {
        if (!l) return null;
        let y = n.get(m),
          w = o === 0 && !bi(b),
          k = y !== void 0 && !bi(y);
        return w || k
          ? ge(
              `'${m}' is assigned by a declaration carrying an expansion that can fail at runtime, which assigns nothing when it fails \u2014 its value cannot be statically verified`,
            )
          : null;
      },
      f = U,
      g = new Map(n),
      _ = !1,
      h = !1,
      p = !1,
      u = [],
      x = -1;
    for (let m of e.children) {
      if (!m) continue;
      let b = m.startIndex === x;
      switch (((x = m.endIndex), m.type)) {
        case "export":
        case "local":
        case "readonly":
        case "declare":
        case "typeset":
          u.push(m.text);
          break;
        case "word":
        case "number":
        case "raw_string":
        case "string":
        case "concatenation": {
          if (b)
            return {
              kind: "too-complex",
              reason: `${u[0] ?? "declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
              differential: !0,
            };
          let y = z(m, t, g, r);
          if (typeof y !== "string") return y;
          if (/^[+-].*m/.test(y))
            return {
              kind: "too-complex",
              reason: `${u[0]} flag ${y} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
              nodeType: "declaration_command",
            };
          if (
            u[0] === "declare" ||
            u[0] === "typeset" ||
            u[0] === "local" ||
            u[0] === "readonly"
          ) {
            if (/^[+-].*f/.test(y)) _ = !0;
            if (/^[+-].*[uU]/.test(y)) h = !0;
            if (_ && h)
              return {
                kind: "too-complex",
                reason: `${u[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`,
                nodeType: "declaration_command",
              };
          }
          if (
            (u[0] === "declare" || u[0] === "typeset" || u[0] === "local") &&
            ut.test(y)
          )
            return {
              kind: "too-complex",
              reason: `declare flag ${y} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`,
              ...(ne(e)
                ? { nodeType: "declaration_command" }
                : { differential: !0 }),
            };
          if ((u[0] === "export" || u[0] === "readonly") && We(y) && !ne(e))
            return {
              kind: "too-complex",
              reason: `${u[0]} flag ${y} with an operand bash would evaluate as a compound array assignment`,
              differential: !0,
            };
          if (
            (u[0] === "export" || u[0] === "readonly") &&
            /^[+-].*[iluEFLRZ]/.test(y)
          )
            return {
              kind: "too-complex",
              reason: `${u[0]} flag ${y} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`,
              ...(ne(e)
                ? { nodeType: "declaration_command" }
                : { differential: !0 }),
            };
          if (/^[+-].*T/.test(y))
            return {
              kind: "too-complex",
              reason: `${u[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
              nodeType: "declaration_command",
            };
          if (
            (u[0] === "declare" ||
              u[0] === "typeset" ||
              u[0] === "local" ||
              u[0] === "export") &&
            y[0] !== "-" &&
            /^[^=]*\[/.test(y)
          )
            return {
              kind: "too-complex",
              reason: `${u[0]} positional '${y}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
              differential: !0,
            };
          if (
            (u[0] === "declare" || u[0] === "typeset" || u[0] === "local") &&
            !/^[-+]/.test(y) &&
            !Pe(
              m,
              u.some((w) => /^[-+][A-Za-z]*[fF]/.test(w)),
            )
          )
            return {
              kind: "too-complex",
              reason: `${u[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0,
            };
          if (y[0] !== "-") {
            let w = y.indexOf("=");
            if (w > 0) {
              let k = y.slice(0, w);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(k)) {
                let A = k.endsWith("+");
                p ||= A;
                let R = A ? k.slice(0, -1) : k,
                  P = c(R, y.slice(w + 1));
                if (P) return P;
                (je(n, { name: R, value: y.slice(w + 1), isAppend: A }, o > 0),
                  r.push(R));
              }
            }
          }
          u.push(y);
          break;
        }
        case "variable_assignment": {
          if (
            (u[0] === "declare" || u[0] === "typeset" || u[0] === "local") &&
            !Pe(
              m,
              u.some((k) => /^[-+][A-Za-z]*[fF]/.test(k)),
            )
          )
            return {
              kind: "too-complex",
              reason: `${u[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0,
            };
          let y = ot(m, t, g, r);
          if ("kind" in y) return y;
          let w = c(y.name, y.value);
          if (w) return w;
          (je(n, y, o > 0),
            (p ||= y.isAppend),
            r.push(y.name),
            u.push(`${y.name}=${y.value}`));
          break;
        }
        case "variable_name": {
          let y = m.text;
          if (
            (u[0] === "declare" ||
              u[0] === "typeset" ||
              u[0] === "local" ||
              u[0] === "export") &&
            y[0] !== "-" &&
            /^[^=]*\[/.test(y)
          )
            return {
              kind: "too-complex",
              reason: `${u[0]} positional '${y}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
              differential: !0,
            };
          let w = u.some((k) => /^-[A-Za-z]*[fF]/.test(k));
          if (!ie.test(y) && !(w && $e.test(y)))
            return {
              kind: "too-complex",
              reason: `${u[0]} operand '${y}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`,
              differential: !0,
            };
          u.push(y);
          break;
        }
        case "ansi_c_string":
          return {
            kind: "too-complex",
            reason: `${u[0] ?? "declaration"} operand ${m.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
            differential: !0,
          };
        default:
          return E(m);
      }
    }
    let d = Jt(u[0] ?? "", u.slice(1));
    if (d !== null && !N)
      return {
        kind: "too-complex",
        reason: d,
        divergentShape: !0,
        ...(ne(e) && { nodeType: "declaration_command" }),
      };
    return (
      t.push({
        argv: u,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: GBe(e.text),
        carveOutMayDesyncQuoteScan: U !== f,
        ...(p && { operandAppends: p }),
      }),
      null
    );
  }
  if (e.type === "variable_assignment") {
    let o = t.length,
      l = ot(e, t, n, r);
    if ("kind" in l) return l;
    if (Igr(l.name))
      return {
        kind: "too-complex",
        reason: `${l.name} assignment alters command lookup/execution for subsequent commands`,
        nodeType: "variable_assignment",
      };
    if (Pn(l.name, l.value))
      return {
        kind: "too-complex",
        reason: `${l.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`,
        nodeType: "variable_assignment",
      };
    if (
      (je(n, l, o > 0),
      r.push(l.name),
      t.length === o && (se(e) || Tt.has(l.name)))
    )
      te(t, e);
    return null;
  }
  if (e.type === "for_statement") {
    if (It(e)) return E(e);
    let o = zt(e, t, n, r);
    if ("kind" in o) return o;
    let l = null,
      c = null,
      f = t.length,
      g = !1;
    for (let p of e.children) {
      if (!p) continue;
      if (p.type === "variable_name") l = p.text;
      else if (p.type === "do_group") c = p;
      else if (p.type === "select")
        return {
          kind: "too-complex",
          reason:
            "select statement reads stdin into $REPLY; cannot statically model",
          nodeType: "for_statement",
        };
      else if (p.type === "for" || p.type === "in" || p.type === ";") continue;
      else if (p.type === "command_substitution") {
        let u = pt(p, t, n, r);
        if (u) return u;
      } else {
        let u = z(p, t, n, r);
        if (typeof u !== "string") return u;
        if (se(p)) g = !0;
        else if ((GBe(p.text) || ve(p)) && wEl()) g = !0;
      }
    }
    if (l === null || c === null) return E(e);
    if (
      l === "PS4" ||
      l === "IFS" ||
      Tt.has(l) ||
      l === "BASH_ARGV0" ||
      Igr(l) ||
      mt.has(l) ||
      Ye.has(l) ||
      kn.has(l)
    )
      return {
        kind: "too-complex",
        reason: `${l} as loop variable bypasses assignment validation`,
        nodeType: "for_statement",
      };
    let _ = n.get(l);
    if (_ !== void 0 && !bi(_))
      return {
        kind: "too-complex",
        reason: `for-loop variable '${l}' would overwrite tracked literal ${JSON.stringify(_.slice(0, 40))}; post-loop value cannot be statically determined`,
        nodeType: "for_statement",
      };
    (n.delete(l), r.push(l));
    let h = new Map(n);
    qe(h, c);
    for (let p of o) T(h, p);
    h.delete(l);
    for (let p of c.children) {
      if (!p) continue;
      if (p.type === "do" || p.type === "done" || p.type === ";") continue;
      let u = I(p, t, h, r);
      if (u) return u;
    }
    if ((J(n, h), g && t.length === f)) te(t, e);
    return null;
  }
  if (e.type === "if_statement" || e.type === "while_statement") {
    if (It(e)) return E(e);
    let o = null,
      l = null;
    if (e.type === "while_statement") {
      let f = zt(e, t, n, r);
      if ("kind" in f) return f;
      ((o = new Set(n.keys())), (l = new Map(n)), qe(n, e));
      for (let g of f) (T(n, g), T(l, g));
    }
    let c = !1;
    for (let f of e.children) {
      if (!f) continue;
      if (
        f.type === "if" ||
        f.type === "fi" ||
        f.type === "else" ||
        f.type === "elif" ||
        f.type === "while" ||
        f.type === "until" ||
        f.type === ";"
      )
        continue;
      if (f.type === "then") {
        c = !0;
        continue;
      }
      if (f.type === "do_group") {
        let p = new Map(n);
        qe(p, f);
        for (let u of f.children) {
          if (!u) continue;
          if (u.type === "do" || u.type === "done" || u.type === ";") continue;
          let x = I(u, t, p, r);
          if (x) return x;
        }
        J(n, p);
        continue;
      }
      if (f.type === "elif_clause" || f.type === "else_clause") {
        let p = new Map(n);
        for (let u of f.children) {
          if (!u) continue;
          if (
            u.type === "elif" ||
            u.type === "else" ||
            u.type === "then" ||
            u.type === ";"
          )
            continue;
          let x = I(u, t, p, r);
          if (x) return x;
        }
        J(n, p);
        continue;
      }
      let g = new Map(n),
        _ = t.length,
        h = I(f, t, g, r);
      if (h) return h;
      if (!c) {
        for (let [p, u] of g) {
          let x = (l ?? n).get(p);
          if (x !== void 0 && !bi(x) && u !== x)
            return {
              kind: "too-complex",
              reason: `'${p}' was tracked as literal '${x}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
              nodeType: e.type,
            };
          if (x?.includes(C) === !0 && u !== x) {
            n.set(p, x);
            continue;
          }
          n.set(p, u);
        }
        for (let p of n.keys())
          if (!g.has(p)) {
            let u = (l ?? n).get(p);
            if (u !== void 0 && !bi(u))
              return {
                kind: "too-complex",
                reason: `'${p}' was tracked as literal '${u}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
                nodeType: e.type,
              };
            T(n, p);
          }
        for (let p = _; p < t.length; p++) {
          let u = t[p];
          if (u?.argv[0] === "read" && !bks()) {
            for (let d of u.argv.slice(1))
              if (!d.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) {
                let m = n.get(d);
                if (m !== void 0 && !bi(m))
                  return {
                    kind: "too-complex",
                    reason: `'read ${d}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${m}'`,
                    nodeType: e.type,
                  };
                T(n, d);
              }
            let x = n.get("REPLY");
            if (x !== void 0 && !bi(x))
              return {
                kind: "too-complex",
                reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${x}'`,
                nodeType: e.type,
              };
            T(n, "REPLY");
          }
        }
      } else J(n, g);
    }
    if (o !== null) {
      for (let f of [...n.keys()]) if (!o.has(f)) n.delete(f);
    }
    return null;
  }
  if (e.type === "subshell") {
    let o = new Map(n),
      l = t.length,
      c = !1;
    for (let f of e.children) {
      if (!f) continue;
      if (f.type === "(" || f.type === ")") continue;
      if (f.type !== "comment") c = !0;
      let g = I(f, t, o, r);
      if (g) return g;
    }
    if (c && t.length === l) te(t, e);
    return null;
  }
  if (e.type === "test_command") {
    let o = e.children.some((g) => g?.type === "[["),
      l = on(e, o);
    if (l) return l;
    let c = ["[["],
      f = U;
    for (let g of e.children) {
      if (!g) continue;
      if (
        g.type === "[[" ||
        g.type === "]]" ||
        g.type === "[" ||
        g.type === "]"
      )
        continue;
      let _ = an(g, c, t, n, r, o);
      if (_) return _;
    }
    return (
      t.push({
        argv: c,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: GBe(e.text),
        carveOutMayDesyncQuoteScan: U !== f,
      }),
      null
    );
  }
  if (e.type === "unset_command") {
    let o = [],
      l = U,
      c = t.length > 0,
      f = !1,
      g = !1,
      _ = !1;
    for (let h of e.children) {
      if (!h) continue;
      switch (h.type) {
        case "unset":
          (o.push(h.text), (_ = h.text === "unsetenv"));
          break;
        case "variable_name":
          if (!ie.test(h.text) && !(f && $e.test(h.text)))
            return {
              kind: "too-complex",
              reason: `${o[0] ?? "unset"} operand '${h.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`,
              differential: !0,
            };
          if ((o.push(h.text), (g = !0), f || _)) {
            let p = tt(
              n.get(h.text),
              `'${h.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
              "unset_command",
            );
            if (p !== null) return p;
            break;
          }
          if (Qye(h.text))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${h.text} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command",
            };
          nt(n, h.text, c);
          break;
        case "word": {
          let p = z(h, t, n, r);
          if (typeof p !== "string") return p;
          if (p.startsWith("-")) {
            if (g) return E(h);
            if (p !== "-f" && p !== "-v") return E(h);
            if (p === "-f") f = !0;
            o.push(p);
            break;
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(p)) return E(h);
          if ((o.push(p), (g = !0), f || _)) {
            let u = tt(
              n.get(p),
              `'${p}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
              "unset_command",
            );
            if (u !== null) return u;
            break;
          }
          if (Qye(p))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${p} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command",
            };
          nt(n, p, c);
          break;
        }
        case "ansi_c_string":
        case "raw_string":
        case "string":
        case "concatenation":
          if (/\[/.test(h.text) || h.type === "ansi_c_string")
            return {
              kind: "too-complex",
              reason: `${o[0] ?? "unset"} operand ${h.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`,
              differential: !0,
            };
          return E(h);
        default:
          return E(h);
      }
    }
    return (
      t.push({
        argv: o,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: GBe(e.text),
        carveOutMayDesyncQuoteScan: U !== l,
      }),
      null
    );
  }
  return E(e);
}
var sn = new Set([
  "unary_expression",
  "binary_expression",
  "negated_expression",
  "parenthesized_expression",
]);
function Ot(e, t) {
  let n = 0;
  while (n < e.length) {
    let r = e[n];
    if (r === " " || r === "\t") {
      n++;
      continue;
    }
    if (
      r === "\\" &&
      e[n + 1] ===
        `
`
    ) {
      n += 2;
      continue;
    }
    if (
      t &&
      r ===
        `
`
    ) {
      n++;
      continue;
    }
    if (t && r === "#") {
      n++;
      while (
        n < e.length &&
        e[n] !==
          `
`
      )
        n++;
      continue;
    }
    return !1;
  }
  return !0;
}
function on(e, t) {
  let n = Buffer.from(e.text, "utf8"),
    r = e.startIndex;
  for (let i of e.children) {
    if (!i) continue;
    if (i.startIndex > r) {
      let s = n
        .subarray(r - e.startIndex, i.startIndex - e.startIndex)
        .toString("utf8");
      if (!Ot(s, t))
        return {
          kind: "too-complex",
          reason:
            "Test command has unparsed bytes between children \u2014 parser dropped content that shell will see",
        };
    }
    if (((r = Math.max(r, i.endIndex)), sn.has(i.type))) {
      let s = on(i, t);
      if (s) return s;
    }
  }
  if (r < e.endIndex) {
    let i = n.subarray(r - e.startIndex).toString("utf8");
    if (!Ot(i, t))
      return {
        kind: "too-complex",
        reason:
          "Test command has unparsed bytes after its last child \u2014 parser dropped content that shell will see",
      };
  }
  return null;
}
function xr(e) {
  let t = !1,
    n = !1,
    r = !1,
    i = 0,
    s;
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    if (!t && l === "\\") {
      o++;
      continue;
    }
    if (!n && l === "'") {
      t = !t;
      continue;
    }
    if (!t && l === '"') {
      n = !n;
      continue;
    }
    if (!t && !n) {
      if (l === "=" && e[o + 1] === "(" && (r || o === 0 || s === "|"))
        return !0;
      if (l === "(") i++;
      else if (l === ")") i = Math.max(0, i - 1);
      else if (i === 0 && (l === "|" || l === "&") && s === l) r = !0;
      s = l;
    }
  }
  return !1;
}
function Ve(e) {
  let t = e.replace(
      /\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g,
      "\x00",
    ),
    n = /[A-Za-z0-9_]/,
    r = t.indexOf("]]");
  while (r !== -1) {
    let i = r > 0 ? t[r - 1] : "",
      s = r + 2 < t.length ? t[r + 2] : "";
    if (!(n.test(i) && n.test(s))) return !0;
    r = t.indexOf("]]", r + 1);
  }
  return !1;
}
var yr = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/,
  _r = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;
function an(e, t, n, r, i, s) {
  if (sn.has(e.type)) {
    for (let o = 0; o < e.children.length; o++) {
      let l = e.children[o];
      if (!l) continue;
      if (
        (l.type === "simple_expansion" || l.type === "expansion") &&
        (e.children[o + 1]?.text.startsWith("[") ||
          /^:[a-zA-Z&]/.test(e.children[o + 1]?.text ?? "") ||
          (l.children.some((f) => f?.type === "special_variable_name") &&
            _r.test(e.children[o + 1]?.text ?? "")))
      )
        return {
          kind: "too-complex",
          reason:
            "zsh $name[expr] / $name:mod in [[ ]] operand \u2014 recursive eval",
          differential: !0,
        };
      if (s && l.type === "!" && e.children[o + 1]?.startIndex === l.endIndex)
        return {
          kind: "too-complex",
          reason: "zsh reads !( in [[ ]] as part of a word",
          differential: !0,
        };
      let c = an(l, t, n, r, i, s);
      if (c) return c;
    }
    return null;
  }
  switch (e.type) {
    case "test_operator":
    case "!":
    case "(":
    case ")":
    case "&&":
    case "||":
    case "==":
    case "=":
    case "!=":
    case "<":
    case ">":
    case "=~":
      return (t.push(e.text), null);
    case "regex":
    case "extglob_pattern":
      if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains expansion / command / process substitution`,
          differential: !0,
        };
      if (e.text.startsWith("=("))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains zsh =(CMD) process substitution`,
          differential: !0,
        };
      if (e.type === "regex" && xr(e.text))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`,
          differential: !0,
        };
      if (e.type === "extglob_pattern") {
        let o = e.text,
          l = 0;
        while (l < o.length) {
          if (o[l] === "\\" && l + 1 < o.length) {
            l += 2;
            continue;
          }
          if (o[l] === "&")
            return {
              kind: "too-complex",
              reason:
                "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)",
              differential: !0,
            };
          l++;
        }
      }
      if (e.type === "regex") {
        let o = e.text,
          l = 0,
          c = 0;
        while (c < o.length) {
          let f = o[c];
          if (f === "\\" && c + 1 < o.length) {
            c += 2;
            continue;
          }
          if (l === 0 && f === "|" && o[c + 1] === f)
            return {
              kind: "too-complex",
              reason:
                "[[ ]] regex contains glued || (zsh splits it as a cond operator)",
              differential: !0,
            };
          if (f === "&")
            return {
              kind: "too-complex",
              reason:
                "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)",
              differential: !0,
            };
          if (f === '"' || f === "'") {
            let g = f;
            c++;
            while (c < o.length && o[c] !== g) {
              if (g === '"' && o[c] === "\\" && c + 1 < o.length) c++;
              c++;
            }
            if (c < o.length) c++;
            continue;
          }
          if (f === "(") l++;
          else if (f === ")") {
            if ((l--, l < 0))
              return {
                kind: "too-complex",
                reason:
                  "[[ ]] regex has unbalanced parentheses (parser desync)",
                differential: !0,
              };
          }
          c++;
        }
        if (l !== 0)
          return {
            kind: "too-complex",
            reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
            differential: !0,
          };
      }
      if (e.text.includes("&&"))
        return {
          kind: "too-complex",
          reason:
            "[[ ]] pattern leaf contains `&&` \u2014 shell cond-lexer divergence (zsh splits the word there)",
          differential: !0,
        };
      if (Ve(e.text))
        return {
          kind: "too-complex",
          reason:
            "[[ ]] pattern leaf contains a potential standalone `]]` closer \u2014 shell cond-lexer divergence (zsh may close the conditional early)",
          differential: !0,
        };
      return (t.push(e.text), null);
    case "test_rhs_missing":
      return {
        kind: "too-complex",
        reason:
          "Test command comparison is missing its right-hand side \u2014 parser dropped consumed bytes",
      };
    default: {
      let o = z(e, n, r, i);
      if (typeof o !== "string") {
        if (s && o.kind === "too-complex") {
          let { nodeType: l, ...c } = o;
          return { ...c, differential: !0 };
        }
        return o;
      }
      if ((s && (Ve(o) || Ve(e.text))) || /]].*[;\n&|<>]/s.test(o))
        return {
          kind: "too-complex",
          reason: s
            ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes \u2014 possible parser quote-state desync"
            : "test command quoted operand contains `]]`+separator bytes \u2014 possible parser quote-state desync",
          differential: !0,
        };
      return (t.push(o), null);
    }
  }
}
function ln(e) {
  let t = null;
  for (let n of e.children) {
    if (!n || n.type === "!" || n.type === "comment" || pe.has(n.type))
      continue;
    t = n;
  }
  if (!t) return null;
  if (t.type === "list" || t.type === "negated_command") return ln(t);
  if (!Gt.has(t.type) && !Zn.has(t.type)) return t;
  return null;
}
function T(e, t) {
  if (e.get(t)?.includes(C)) return;
  e.set(t, O);
}
var he = `${C}\x00`;
function me(e) {
  return N && e.startsWith(he) ? e.slice(he.length) : e;
}
function tt(e, t, n) {
  if (e === void 0) return null;
  if (!bi(me(e))) return null;
  return !N && e.includes(C)
    ? { kind: "too-complex", reason: t, nodeType: n, divergentShape: !0 }
    : { kind: "too-complex", reason: t, nodeType: n };
}
function nt(e, t, n) {
  if ((de.add(t), n && N)) V = !0;
  e.set(t, !n ? "" : N ? he : C);
}
function cn(e, t) {
  for (let [n, r] of e)
    if (t.get(n) !== r) {
      if (!N && W.get(n) === r) q = !0;
      ((V ||= N), e.set(n, !N ? C : r.includes(C) ? r : he + r));
    }
  for (let n of t.keys()) if (!e.has(n)) e.set(n, C);
}
function br(e, t, n, r, i, s) {
  let o = [],
    l = null,
    c = [],
    f = [];
  for (let d of e.children) {
    if (!d) continue;
    if (d.type === "file_redirect") c.push(d);
    else if (d.type === "heredoc_redirect") f.push(d);
    else if (Gt.has(d.type)) {
      if (d.type === "list" || d.type === "negated_command") {
        let m = ln(d);
        if (m) return E(m);
      }
      l = d;
    } else return E(d);
  }
  if (!l) {
    for (let d of c) {
      let m = Ne(d, t, n, r);
      if ("kind" in m) return m;
      o.push(m);
    }
    for (let d of f) {
      let m = rt(d, n);
      if (m) return m;
    }
    return (
      t.push({
        argv: [],
        envVars: [],
        redirects: o,
        text: e.text,
        hasUnquotedGlob: GBe(e.text),
      }),
      null
    );
  }
  let g = t.length,
    _ =
      re && i && l.type === "command" && c.length === 0 && f.length === 1
        ? f[0]?.children.find((d) => d?.type === "pipeline")
        : void 0,
    h,
    p = !1;
  if (l.type === "list") {
    let d = l.children;
    if (d.length === 3 && d[0] && d[1]?.type === "&&" && d[2]) {
      let m = I(d[0], t, n, r, !1, s);
      if (m) return m;
      ((h = new Map(n)), (p = !0));
      let b = I(d[2], t, n, r, !1, s);
      if (b) return b;
    } else {
      let m = I(l, t, n, r, !1, s);
      if (m) return m;
      h = n;
    }
  } else if (ct.has(l.type)) {
    let d = I(l, t, n, r, !1, s);
    if (d) return d;
    h = n;
  } else {
    ((h = new Map(n)), (p = !0));
    let d = I(l, t, _ ? new Map(n) : n, r, !1, s && !_);
    if (d) return d;
  }
  if (p) cn(n, h);
  let u = t.length > g ? t.at(-1) : void 0,
    x = u?.envVars[0]?.name;
  if (x !== void 0 && c.some((d) => se(d))) {
    let d = we(x);
    if (d) return d;
  }
  for (let d of c) {
    let m = Ne(d, t, h, r);
    if ("kind" in m) return m;
    o.push(m);
  }
  if (u) {
    let d = _n(c, u, o, t, h, r);
    if (d) return d;
  }
  for (let d of f) {
    let m = rt(d, h, _);
    if (m) return m;
  }
  if (_) {
    let d = I(_, t, n, r);
    if (d) return d;
  }
  if (f.length > 0)
    for (let d = g; d < t.length; d++) {
      let m = t[d];
      if (m) m.argvSourceLiteral = !1;
    }
  if (o.length > 0)
    if (t.length > g) {
      let d = t.at(-1);
      if (d) d.redirects.push(...o);
    } else
      t.push({
        argv: [],
        envVars: [],
        redirects: o,
        text: e.text,
        hasUnquotedGlob: GBe(e.text),
      });
  return null;
}
function un(e) {
  {
    let r = e.startIndex;
    for (let i of e.children) {
      if (!i) continue;
      if (i.startIndex > r) {
        let s = Buffer.from(e.text, "utf8")
          .subarray(r - e.startIndex, i.startIndex - e.startIndex)
          .toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(s))
          return {
            kind: "too-complex",
            reason:
              "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see",
          };
      }
      r = i.endIndex;
    }
    if (r < e.endIndex) {
      let i = Buffer.from(e.text, "utf8")
        .subarray(r - e.startIndex)
        .toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(i))
        return {
          kind: "too-complex",
          reason:
            "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see",
        };
    }
  }
  let t = null,
    n = 0;
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${r.text} fd-variable assignment \u2014 modifies shell variable as side effect`,
      };
    if (r.type === "file_descriptor") continue;
    if (r.type === ">&-" || r.type === "<&-") {
      t = r.type;
      continue;
    }
    if (r.type in Ke) {
      t = r.type;
      continue;
    }
    if ((t === ">&" || t === "<&") && r.text.startsWith("-"))
      return {
        kind: "too-complex",
        reason:
          "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument",
      };
    if (t === ">&-" || t === "<&-")
      return {
        kind: "too-complex",
        reason:
          "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument",
      };
    (n++, (t = null));
  }
  if (n > 1)
    return {
      kind: "too-complex",
      reason:
        "Redirect has multiple targets \u2014 post-redirect args swallowed",
    };
  return null;
}
var fn = new Set([
    "heredoc_start",
    "heredoc_body",
    "<<",
    "<<-",
    "heredoc_end",
    "file_descriptor",
  ]),
  dn = new Set(["file_redirect", "pipeline"]),
  kr = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;
function ft(e) {
  let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
  if (t === void 0) return "{\u2026}";
  let n = /^\w{1,64}$/.test(t) ? t : "\u2026";
  return e[t.length + 1] === "[" ? `{${n}[\u2026]}` : `{${n}}`;
}
function pn(e, t) {
  let n = t[e.startIndex] === 123 ? kr.exec(e.text) : null;
  if (n) {
    let r = e.endIndex,
      i = !1;
    for (;;) {
      let c = t[r];
      if (c === 32 || c === 9) ((i = !0), r++);
      else if (c === 92 && t[r + 1] === 10) r += 2;
      else break;
    }
    let s = t[r],
      o = t[r + 1];
    if (
      (((s === 62 || s === 60) && o !== 40) || (s === 38 && o === 62)) &&
      !(i && n[1] !== void 0)
    )
      return e.text;
  }
  for (let r of e.children)
    if (r) {
      let i = pn(r, t);
      if (i !== null) return i;
    }
  return null;
}
function hn(e) {
  if (e.type === "file_redirect") {
    let t = un(e);
    if (t) return t;
  }
  if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
    for (let t of e.children)
      if (t?.type === "variable_name")
        return {
          kind: "too-complex",
          reason: `Redirect uses ${ft(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect`,
        };
    if (e.type === "heredoc_redirect") {
      for (let t of e.children)
        if (t && !fn.has(t.type) && !dn.has(t.type))
          return {
            kind: "too-complex",
            reason:
              "Text after the heredoc start on the same line cannot be statically analyzed",
          };
    }
  }
  for (let t of e.children)
    if (t) {
      let n = hn(t);
      if (n) return n;
    }
  return null;
}
function Ne(e, t, n, r) {
  let i = D,
    s = Se,
    o = null,
    l = null,
    c;
  {
    let f = un(e);
    if (f) return f;
  }
  for (let f of e.children) {
    if (!f) continue;
    if (f.type === "file_descriptor") c = Number(f.text);
    else if (f.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${f.text} fd-variable assignment \u2014 modifies shell variable as side effect`,
      };
    else if (f.type in Ke) o = Ke[f.type] ?? null;
    else if (f.type === ">&-" || f.type === "<&-") {
      if (e.children.some((g) => g !== f && g?.type !== "file_descriptor"))
        return {
          kind: "too-complex",
          reason:
            "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument",
        };
      return E(f);
    } else if (l !== null)
      return {
        kind: "too-complex",
        reason:
          "Redirect has multiple targets \u2014 post-redirect args swallowed",
      };
    else if ((o === ">&" || o === "<&") && f.text.startsWith("-"))
      return {
        kind: "too-complex",
        reason:
          "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument",
      };
    else if (f.type === "word" || f.type === "number") {
      if (f.children.length > 0) return E(f);
      if (Ae.test(f.text)) return E(f);
      if (Xe.test(f.text)) return E(f);
      if (Qe.test(f.text)) return E(f);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return E(f);
      l = f.text.replace(/\\([\s\S])/g, (g, _) =>
        _ ===
        `
`
          ? ""
          : _,
      );
    } else if (f.type === "raw_string") l = Rn(f.text);
    else if (f.type === "string") {
      let g = bn(f, t, n, r);
      if (typeof g !== "string") return g;
      l = g;
    } else if (f.type === "concatenation") {
      let g = z(f, t, n, r);
      if (typeof g !== "string") return g;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text))
        return {
          kind: "too-complex",
          reason:
            "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution",
          nodeType: "concatenation",
        };
      l = g;
    } else return E(f);
  }
  if (!o || l === null)
    return { kind: "too-complex", reason: "Unrecognized redirect shape" };
  if (bi(l))
    return {
      kind: "too-complex",
      reason:
        "Redirect target contains $(cmd) output \u2014 path is runtime-determined",
      nodeType: e.type,
    };
  if (
    l.includes(`
`)
  )
    return {
      kind: "too-complex",
      reason:
        "Redirect target contains newline \u2014 potential path traversal",
      nodeType: e.type,
    };
  if (l.startsWith("!"))
    return {
      kind: "too-complex",
      reason:
        "Redirect target starts with ! \u2014 zsh clobber or history expansion",
      nodeType: e.type,
    };
  if (l.startsWith("="))
    return {
      kind: "too-complex",
      reason: "Redirect target starts with = \u2014 zsh expands to PATH binary",
      nodeType: e.type,
    };
  if ((o === ">&" || o === "<&") && l.startsWith("-"))
    return {
      kind: "too-complex",
      reason:
        "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument",
    };
  if (o === ">&" && !/^[A-Za-z0-9./_-]+$/.test(l))
    return {
      kind: "too-complex",
      reason:
        "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated",
      nodeType: e.type,
    };
  return { op: o, target: l, fd: c, targetSourceLiteral: D === i && Se === s };
}
var re = !1,
  N = !1,
  V = !1,
  le = 0,
  mn = new WeakMap(),
  H,
  j = 0,
  Y,
  W = new Map(),
  q = !1,
  Z = !1,
  ce = !1,
  ue = 0,
  fe = !1,
  X = null,
  K = 0,
  de = new Set();
function ge(e) {
  return N ? null : { kind: "too-complex", reason: e, divergentShape: !0 };
}
function we(e) {
  return ge(
    `'${e}' is set for one command that carries an expansion which can fail at runtime \u2014 whether the assignment stands for later commands cannot be statically verified`,
  );
}
function Rr() {
  return Y;
}
function wr() {
  return j;
}
var Er = /`|\\[$`\\\n]/,
  Ct = ie.source.slice(1, -1),
  Sr = new RegExp(
    `\\$(?:${Ct}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${Ct}\\})(?!\\[|:[A-Za-z&])`,
    "g",
  );
function rt(e, t, n) {
  let r = null,
    i = null,
    s = null,
    o = !1;
  for (let c of e.children) {
    if (!c) continue;
    if (fn.has(c.type)) {
      if (c.type === "heredoc_start") r = c.text;
      else if (c.type === "heredoc_body") s = c;
      else if (c.type === "<<-") o = !0;
      else if (c.type === "heredoc_end") i = c.text;
    } else if (
      c === n &&
      c.children.at(-1)?.type === "command" &&
      c.children.every(
        (f) =>
          f?.type === "|" ||
          (f?.type === "command" &&
            !f.children.some((g) => g?.type.endsWith("_redirect"))),
      )
    );
    else if (dn.has(c.type)) {
      let f = E(c);
      return f.kind === "too-complex" ? { ...f, afterHeredocDelimiter: !0 } : f;
    } else
      return {
        kind: "too-complex",
        reason:
          "Text after the heredoc start on the same line cannot be statically analyzed",
      };
  }
  if (s === null)
    return {
      kind: "too-complex",
      reason: "Heredoc body was not scanned by the parser",
      nodeType: "heredoc_redirect",
    };
  if (n) {
    let c = Buffer.from(e.text, "utf8")
        .subarray(0, s.startIndex - e.startIndex)
        .toString("utf8"),
      f = e.children
        .slice(0, e.children.indexOf(s))
        .map((g) => (g === n ? "|" : "") + (g?.text ?? ""))
        .join("");
    if (
      c.indexOf(`
`) !==
        c.length - 1 ||
      c.includes("\\") ||
      c.replace(/[ \t\n]/g, "") !== f.replace(/[ \t]/g, "")
    )
      return {
        kind: "too-complex",
        reason:
          "More than a pipeline follows the heredoc delimiter on its line",
      };
  }
  let l =
    r !== null &&
    ((r.startsWith("'") && r.endsWith("'")) ||
      (r.startsWith('"') && r.endsWith('"')) ||
      r.startsWith("\\"));
  if (!l) {
    let c = s.children.filter((g) => g?.type !== "heredoc_content");
    if (!(
      re &&
      t !== void 0 &&
      r !== null &&
      ie.test(r) &&
      i === r &&
      !Er.test(s.text) &&
      (s.text.match(/\$/g)?.length ?? 0) === c.length &&
      (s.text.match(Sr)?.length ?? 0) === c.length &&
      c.every(
        (g) => (
          D++,
          (g?.type === "simple_expansion" || g?.type === "expansion") &&
            typeof xe(g, t, !0) === "string"
        ),
      )
    ))
      return {
        kind: "too-complex",
        reason: "Heredoc with unquoted delimiter undergoes shell expansion",
        nodeType: "heredoc_redirect",
        differential: !0,
      };
  }
  if (
    r !== null &&
    (r.startsWith("'") || r.startsWith('"')) &&
    r.slice(1, -1).includes("\\")
  )
    return {
      kind: "too-complex",
      reason: "Quoted heredoc delimiter contains backslash",
      nodeType: "heredoc_redirect",
    };
  if (l)
    for (let c of s.children) {
      if (!c) continue;
      if (c.type !== "heredoc_content") return E(c);
    }
  if (r !== null && s !== null) {
    let c = !l ? r : r.startsWith("\\") ? r.slice(1) : r.slice(1, -1);
    if (c.length > 0) {
      if (o && c.startsWith("\t"))
        return {
          kind: "too-complex",
          reason: "Heredoc uses <<- with a tab-prefixed delimiter",
          nodeType: "heredoc_redirect",
        };
      for (let f of s.text.split(`
`)) {
        let g = o ? f.replace(/^\t+/, "") : f;
        if (!g.startsWith(c)) continue;
        let _ = g.slice(c.length);
        if (/[)`}]/.test(_))
          return {
            kind: "too-complex",
            reason:
              "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
            nodeType: "heredoc_redirect",
          };
      }
    }
  }
  return null;
}
function gn(e, t, n, r) {
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "<<<") continue;
    if (i.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${ft(i.text)} fd-variable assignment \u2014 modifies shell variable as side effect`,
      };
    let s = z(i, t, n, r);
    if (typeof s !== "string") return s;
    if (Ee.test(s)) return E(i);
  }
  return null;
}
var st = new Set(["command", "builtin", "noglob", "nocorrect", "time"]),
  xn = /^[A-Za-z_][A-Za-z0-9_]*\+?=[A-Za-z0-9_.,:/@%+=-]*$/,
  it = new Set(["builtin", "command", "noglob"]),
  dt = new Set(["declare", "typeset", "local", "export", "readonly"]),
  yn = new Set([...dt, "integer", "float", "private"]),
  $uo = new Set([
    ":",
    "break",
    "continue",
    "return",
    "exit",
    "shift",
    "times",
    "set",
    "export",
    "readonly",
    "unset",
  ]);
function Re(e, t, n, r, i) {
  if (e === void 0) return null;
  let [, s = "", o = ""] = /^([A-Za-z_][A-Za-z0-9_]*)([\s\S]*)$/.exec(e) ?? [];
  if (s === "" || (n ? o === "" : o !== "" && !/^[[?]/.test(o))) return null;
  let l = r.get(s);
  if (!i.includes(s) && !de.has(s) && !W.has(s) && (l === void 0 || bi(l)))
    return null;
  if (!TEl() || AEl()) return null;
  let c = o,
    f = s;
  if (c.startsWith("[")) {
    let h = 0,
      p = c.length;
    for (let u = 0; u < c.length; u++)
      if (c[u] === "[") h++;
      else if (c[u] === "]" && --h === 0) {
        p = u + 1;
        break;
      }
    ((f += "[\u2026]"), (c = c.slice(p)));
  }
  if (c !== "") f += c.startsWith("?") ? "?\u2026" : "\u2026";
  let _ = `In zsh, 'read ${b2(t === null ? f : `${t} ${f}`)}' can set ${s} differently from bash or leave it unchanged, and this command set or unset ${s} earlier, so ${s}'s value after the read can't be checked before the command runs`;
  if (!fe) CEl(_);
  return { kind: "too-complex", reason: _, differential: !0 };
}
function Ar(e, t, n, r, i, s) {
  let o = [],
    l = [],
    c = (d, m = !0) => {
      let b = d.match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (b) {
        if ((o.push(b[0]), m)) l.push(b[0]);
      }
    },
    f = e,
    g = !1,
    _,
    h = [];
  for (;;) {
    let d = f[0];
    if (d === void 0) break;
    if (st.has(d)) {
      if (
        (_ === "builtin" || _ === "command") &&
        d !== "builtin" &&
        d !== "command"
      ) {
        if (d === "noglob" && !g)
          return {
            kind: "too-complex",
            reason: `'${_} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`,
            nodeType: "command",
          };
        g = !0;
      }
      let m = 1;
      while (m < f.length && /^-[-pvV]*$/.test(f[m])) {
        if (/[vV]/.test(f[m]) || (d === "builtin" && /p/.test(f[m]) && Wvr()))
          g = !0;
        m++;
      }
      ((f = f.slice(m)), (_ = d));
    } else if (d === "!") {
      if (_ === "builtin" || _ === "command") g = !0;
      ((f = f.slice(1)), (_ = void 0));
    } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(d)) {
      if (_ !== void 0 && it.has(_) && Wvr()) {
        if (!(xn.test(d) && !bi(d)) && !g) {
          let y = Lt(_, d);
          if (y) return y;
        }
        g = !0;
      }
      let m = o.length;
      (c(d),
        h.push({ word: d, target: o.length > m ? m : void 0 }),
        (f = f.slice(1)),
        (_ = void 0));
    } else {
      if (
        _ !== void 0 &&
        it.has(_) &&
        !g &&
        d !== "[" &&
        /[*?[]/.test(d) &&
        Wvr()
      ) {
        let m = Lt(_, d);
        if (m) return m;
      }
      break;
    }
  }
  let p = f[0];
  if (p === void 0) for (let d of t) c(d.name);
  else if (dt.has(p)) {
    let d = !1;
    for (let m = 1; m < f.length; m++) {
      let b = f[m];
      if (!d && b === "--") {
        d = !0;
        continue;
      }
      if (!d && /^[+-].*m/.test(b))
        return {
          kind: "too-complex",
          reason: `'${p} ${b}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
          nodeType: "command",
        };
      if (!d && b.startsWith("-")) continue;
      if (b.includes("=")) c(b);
    }
  } else if (p === "read" && bks());
  else if (p === "read") {
    let d = 1,
      m = !1,
      b = !1;
    while (d < f.length) {
      let y = f[d];
      if (!m && y === "--") {
        ((m = !0), d++);
        continue;
      }
      if (!m && y.startsWith("-")) {
        if (oe.has(y)) {
          if (Bt.has(y)) {
            let A = Re(f[d + 1], y, !1, n, r);
            if (A) return A;
          }
          d += 2;
          continue;
        }
        let k = !1;
        for (let A = 1; A < y.length; A++) {
          let R = y[A];
          if (R === "a" || R === "A") {
            let P = A < y.length - 1 ? y.slice(A + 1) : f[d + 1];
            if (P) {
              let L = Re(P, y.slice(0, A + 1), !0, n, r);
              if (L) return L;
              (c(P), (b = !0));
            }
            k = A === y.length - 1;
            break;
          }
          if (oe.has("-" + R)) {
            if (((k = A === y.length - 1), k && Bt.has("-" + R))) {
              let P = Re(f[d + 1], y, !1, n, r);
              if (P) return P;
            }
            break;
          }
        }
        d += k ? 2 : 1;
        continue;
      }
      let w = Re(y, null, !0, n, r);
      if (w) return w;
      (c(y), (b = !0), d++);
    }
    if (!b) o.push("REPLY");
  } else if (p === "printf")
    for (let d = 1; d < f.length; d++) {
      let m = f[d];
      if (m === "--" || !m.startsWith("-")) break;
      if (m === "-v") {
        if (f[d + 1]) c(f[d + 1]);
        d++;
        continue;
      }
      if (m.startsWith("-v")) c(m.slice(2));
    }
  else if (p === "getopts") {
    let d = f[1] === "--" ? 1 : 0;
    if (f[2 + d]) c(f[2 + d]);
    (o.push("OPTARG"), T(n, "OPTIND"));
  } else if (p === "wait")
    for (let d = 1; d < f.length; d++) {
      let m = f[d];
      if (m === "--" || !m.startsWith("-")) break;
      for (let b = 1; b < m.length; b++)
        if (m[b] === "p") {
          if (b < m.length - 1) c(m.slice(b + 1));
          else if (f[d + 1]) (c(f[d + 1]), d++);
          break;
        }
    }
  else if (!g && (p === "unset" || p === "unsetenv")) {
    let d = !1,
      m = !1;
    for (let b = 1; b < f.length; b++) {
      let y = f[b];
      if (y.startsWith("-")) {
        if (m)
          return {
            kind: "too-complex",
            reason: `'unset \u2026 ${y}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
            nodeType: "command",
          };
        if (y !== "-f" && y !== "-v")
          return {
            kind: "too-complex",
            reason: `'unset ${y}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
            nodeType: "command",
          };
        if (y === "-f") d = !0;
        continue;
      }
      if (((m = !0), !/^[A-Za-z_][A-Za-z0-9_]*$/.test(y)))
        return {
          kind: "too-complex",
          reason: `'unset ${y}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
          nodeType: "command",
        };
      if (d || p === "unsetenv") {
        let w = tt(
          n.get(y),
          `'${y}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`,
          "command",
        );
        if (w !== null) return w;
        continue;
      }
      if (Qye(y))
        return {
          kind: "too-complex",
          reason: `'unset' targets shell variable ${y} (exec-influencing / integer-attr / IFS / PS4)`,
          nodeType: "command",
        };
      if (s) {
        let w = ge(
          `'unset ${y}' is in a command carrying an expansion that can fail at runtime \u2014 whether the name is cleared cannot be statically verified`,
        );
        if (w) return w;
      }
      nt(n, y, i);
    }
  } else if (p === "print")
    for (let d = 1; d < f.length; d++) {
      let m = f[d];
      if (m === "--" || m === "-" || !m.startsWith("-")) break;
      let b = !1;
      for (let y = 1; y < m.length; y++) {
        let w = m[y];
        if (w === "v") {
          let k = y < m.length - 1 ? m.slice(y + 1) : f[d + 1];
          if (k) c(k);
          b = y === m.length - 1;
          break;
        }
        if (Br.has("-" + w)) {
          b = y === m.length - 1;
          break;
        }
      }
      if (b) d++;
    }
  else if (p === "set")
    for (let d = 1; d < f.length; d++) {
      let m = f[d];
      if (m === "--" || !/^[-+]/.test(m)) break;
      let b = m.indexOf("A", 1);
      if (b === -1) {
        if (m.endsWith("o")) d++;
        continue;
      }
      if (b < m.length - 1) c(m.slice(b + 1));
      else if (f[d + 1]) c(f[d + 1]);
      break;
    }
  else if (p === "mapfile" || p === "readarray") {
    let d = !1;
    for (let m = 1; m < f.length; m++) {
      let b = f[m];
      if (b.startsWith("-")) {
        if (/^-[dnOsuCc]$/.test(b)) m++;
        continue;
      }
      (c(b), (d = !0));
    }
    if (!d) o.push("MAPFILE");
  } else if (
    !g &&
    (p === "cd" || p === "chdir" || p === "pushd" || p === "popd")
  ) {
    let d = !1;
    if (p === "pushd" || p === "popd")
      for (let m = 1; m < f.length; m++) {
        let b = f[m];
        if (b === "--") break;
        if (BBe(b, "n")) {
          d = !0;
          break;
        }
        if (p === "popd" && (/^\+0*[1-9]/.test(b) || /^-0+$/.test(b))) {
          d = !0;
          break;
        }
      }
    if (!d) (T(n, "PWD"), T(n, "OLDPWD"));
    if (p === "pushd" || p === "popd") (T(n, "DIRSTACK"), T(n, "dirstack"));
  }
  let u = p !== void 0 && yn.has(p) ? t.length + h.length : 0,
    x = j;
  if (((j += u), u > 0 && H === void 0)) {
    let d =
        p === "export" ||
        p === "readonly" ||
        f.some((b) => /^-[A-Za-z]*[xr]/.test(b)),
      m = new Set();
    for (let b of d ? f.slice(1) : []) {
      let y = /^[A-Za-z_]\w*/.exec(b);
      if (y !== null) m.add(y[0]);
    }
    Y = [
      ...(Y ?? []),
      ...t.map((b) => m.has(b.name)),
      ...h.map(({ word: b }) => m.has(/^[A-Za-z_]\w*/.exec(b)?.[0] ?? "")),
    ];
  }
  if (u > 0 && H !== void 0) {
    let d = {
        kind: "too-complex",
        reason: `A variable set in front of ${p} in this command can't be checked before it runs`,
      },
      m = [...t];
    for (let { word: b } of h) {
      let y = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(b);
      if (y === null) return d;
      let [, w = "", k, A = ""] = y;
      m.push(
        k === "+" ? { name: w, value: A, isAppend: !0 } : { name: w, value: A },
      );
    }
    if (H.length < x + m.length || (h.length > 0 && m.length > 1)) return d;
    for (let b = h.length - 1; b >= 0; b--) {
      let y = h[b]?.target;
      if (y !== void 0) o.splice(y, 1);
    }
    for (let [b, y] of m.entries()) {
      if (H[x + b] !== !0) continue;
      let w = y.isAppend ? n.get(y.name) : "",
        k = w === void 0 ? void 0 : me(w);
      if (bi(y.value) || Qye(y.name)) return d;
      if (k === void 0 || bi(k))
        return d.kind === "too-complex" && !N && w?.includes(C) === !0
          ? { ...d, divergentShape: !0 }
          : d;
      if (s) {
        let R = ge(
          `'${y.name}' is appended to by a command carrying an expansion that can fail at runtime \u2014 whether the append happens cannot be statically verified`,
        );
        if (R) return R;
      }
      let A = (k === w ? "" : he) + k + y.value;
      (n.set(y.name, A), W.set(y.name, k + y.value));
    }
  }
  if (p !== void 0 && t.length > 0 && !(u > 0 && H !== void 0) && $uo.has(p))
    for (let d of t) c(d.name);
  for (let d of o) {
    if (Qye(d))
      return {
        kind: "too-complex",
        reason: `'${p ?? t[0]?.name}' writes shell variable ${d} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
        nodeType: "command",
      };
    T(n, d);
  }
  return (r.push(...l), null);
}
function Lt(e, t) {
  return N
    ? null
    : {
        kind: "too-complex",
        reason: `'${e} ${b2(t)}' has a pattern the shell may expand, so this command can't be checked before it runs`,
        nodeType: "command",
        divergentShape: !0,
        keepsRemovalVerdict: !0,
      };
}
var Dt = /^([A-Za-z_]\w*)(?:\[[\s\S]*?\])?(\+?)=([\s\S]*)$/,
  $r = 16;
function _n(e, t, n, r, i, s) {
  let o = [...t.envVars],
    l = mn.get(t.argv),
    c = !1;
  for (let [u, x] of t.argv.entries()) {
    let [, d, m, b] = Dt.exec(x) ?? [],
      [, y] = /^([A-Za-z_]\w*)\[/.exec(x) ?? [];
    if (d !== void 0 && b !== void 0)
      o.push({
        name: d,
        value: b,
        isAppend: m === "+",
        word: l?.[u],
        isOtherElement: /^\w+\[[1-9]\d*\]/.test(x),
      });
    else if (y !== void 0) (o.push({ name: y, value: O }), (c = !0));
    else if (
      !c &&
      (o.length > t.envVars.length || !/^(?:time|coproc|!|-p|--)$/.test(x))
    )
      return null;
  }
  let f = new Set(o.map((u) => u.name)),
    g = e.filter(
      (u) =>
        (u?.type === "file_redirect" || u?.type === "herestring_redirect") &&
        Ie(u, f) !== null,
    );
  if (g.length === 0) return null;
  let _ = ge(
    "A redirect in this command may read a variable the same command sets, and shells can differ on which value it gets",
  );
  if (_)
    return _.kind === "too-complex" ? { ..._, keepsRemovalVerdict: !0 } : _;
  let h = new Map(i),
    p = new Set();
  for (let {
    name: u,
    value: x,
    isAppend: d,
    word: m,
    isOtherElement: b,
  } of o) {
    let y = x;
    if (m !== void 0 && Ie(m, p) !== null) {
      let k = [],
        A = Mt(m) ? z(m, k, h, s) : void 0;
      if (
        ((y = typeof A === "string" ? Dt.exec(A)?.[3] : void 0), y !== void 0)
      ) {
        let R = r.findIndex((P) => P.argv === t.argv);
        r.splice(R === -1 ? r.length : R, 0, ...k);
      }
    }
    if (b) continue;
    let w = d ? h.get(u) : "";
    if (w === void 0 || y === void 0) T(h, u);
    else h.set(u, w + y);
    p.add(u);
  }
  for (let u of g) {
    if (!Mt(u)) continue;
    let x = r.length;
    if (u.type === "file_redirect") {
      let m = Ne(u, r, h, s);
      if (((r.length = x), !("kind" in m))) n.push(m);
      continue;
    }
    if (gn(u, r, h, s)) r.length = x;
  }
  return null;
}
function Mt(e) {
  if (e.text.length > le) return !1;
  return ((le -= e.text.length), !0);
}
function Tr(e, t, n, r, i) {
  let s = D,
    o = U,
    l = n.length,
    c = [],
    f = [];
  if (N) mn.set(c, f);
  let g = [],
    _ = [],
    h = [],
    p = [...t],
    u = e.children.some((k) => k && Gn.has(k.type)) ? new Map(r) : null,
    x = 0,
    d = !1;
  for (let k of e.children) {
    if (!k) continue;
    let A = se(k);
    switch (((d ||= A), k.type)) {
      case "variable_assignment": {
        if (h.length > 0) {
          let P = Ie(k, new Set(h.map((L) => L.name)));
          if (P !== null)
            return {
              kind: "too-complex",
              reason: `Env-prefix value references \`$${P}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
              nodeType: "variable_assignment",
            };
        }
        let R = ot(k, n, r, i);
        if ("kind" in R) return R;
        if (Pn(R.name, R.value))
          return {
            kind: "too-complex",
            reason: `${R.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`,
            nodeType: "variable_assignment",
          };
        if (
          (h.push(
            R.isAppend
              ? { name: R.name, value: R.value, isAppend: !0 }
              : { name: R.name, value: R.value },
          ),
          A)
        )
          x = h.length - 1;
        break;
      }
      case "command_name": {
        let R = k.children[0] ?? k;
        if (Tp()) {
          if (R.type === "simple_expansion" || R.type === "expansion")
            return E(R);
          if ((R.type === "string" || R.type === "concatenation") && wn(R))
            return E(R);
        }
        let P = z(R, n, r, i);
        if (typeof P !== "string") return P;
        (c.push(P), f.push(R), g.push(GBe(R.text) || ve(R)));
        break;
      }
      case "word":
      case "number":
      case "raw_string":
      case "string":
      case "concatenation":
      case "arithmetic_expansion": {
        let R = z(k, n, r, i);
        if (typeof R !== "string") return R;
        if (/^--?[\nA-Za-z0-9_]/.test(R) && bi(R))
          return {
            kind: "too-complex",
            reason:
              "Argument starting with `-` contains runtime-determined content",
            nodeType: k.type,
          };
        if (
          (c.push(R),
          f.push(k),
          g.push(GBe(k.text) || ve(k)),
          k.type === "string" && !r.has("PWD") && Zcs.test(k.text))
        )
          _.push({ start: k.startIndex, end: k.endIndex });
        break;
      }
      case "simple_expansion": {
        D++;
        let R = xe(k, r, !1);
        if (typeof R !== "string") return R;
        (c.push(R), f.push(k), g.push(!0));
        break;
      }
      case "file_redirect": {
        let R = h[0]?.name;
        if (R !== void 0 && A) {
          let L = we(R);
          if (L) return L;
        }
        let P = Ne(k, n, r, i);
        if ("kind" in P) return P;
        p.push(P);
        break;
      }
      case "herestring_redirect": {
        D++;
        let R = h[0]?.name;
        if (R !== void 0 && A) {
          let L = we(R);
          if (L) return L;
        }
        let P = gn(k, n, r, i);
        if (P) return P;
        break;
      }
      default:
        return E(k);
    }
  }
  if (u) {
    let k = _n(e.children, { argv: c, envVars: h }, p, n, r, i);
    if (k) return k;
  }
  let m = h[0]?.name;
  if (x > 0 && m !== void 0) {
    let k = we(m);
    if (k) return k;
  }
  {
    let k = Ar(c, h, r, i, l > 0, d);
    if (k) return k;
  }
  if (u) cn(r, u);
  let b = (k, A) =>
      k === "" ||
      /["'\\ \t\n$`;|&<>(){}#]/.test(k) ||
      (A === 0 && k.includes("="))
        ? `'${k.replaceAll("'", "'\\''")}'`
        : k,
    y =
      /\$[A-Za-z_]/.test(e.text) ||
      e.text.includes(`
`)
        ? [
            ...h.map(
              (k) => `${k.name}${k.isAppend && WEt() ? "+" : ""}=${b(k.value)}`,
            ),
            ...c.map((k, A) => b(k, A)),
          ].join(" ")
        : e.text,
    w = GBe(e.text);
  return {
    kind: "simple",
    commands: [
      {
        argv: c,
        envVars: h,
        redirects: p,
        text: y,
        hasUnquotedGlob: w,
        argvSourceLiteral: D === s,
        carveOutMayDesyncQuoteScan: U !== o,
        argvUnquotedGlob: g,
        ...(_.length > 0 && {
          atShellCwd: { start: e.startIndex, end: e.endIndex, words: _ },
        }),
      },
    ],
    bareAssignmentNames: [],
  };
}
function ve(e) {
  switch (e.type) {
    case "word":
    case "number":
      if (!Je.test(e.text)) return !1;
      for (let t = 0; t < e.text.length; t++)
        if (e.text[t] === "\\") t++;
        else if (Je.test(e.text[t])) return !0;
      return !1;
    case "string":
    case "raw_string":
    case "simple_expansion":
    case "arithmetic_expansion":
      return !1;
    case "concatenation":
      return e.children.some((t) => t !== null && ve(t));
    default:
      return !0;
  }
}
function pt(e, t, n, r) {
  if (re && Oe(e, "heredoc_redirect")) return E(e);
  let i = new Map(n),
    s = t.length,
    o = !1;
  {
    let l = Buffer.from(e.text, "utf8"),
      c = (_) =>
        _ === 32 || _ === 9 || _ === 10 || _ === 13 || _ === 59 || _ === 38,
      f = (_, h) => {
        let p = _;
        while (p < h) {
          let u = l[p];
          if (c(u)) p++;
          else if (
            u === 92 &&
            (l[p + 1] === 10 || (l[p + 1] === 13 && l[p + 2] === 10))
          )
            p += l[p + 1] === 13 ? 3 : 2;
          else return !1;
        }
        return !0;
      },
      g = 0;
    for (let _ of e.children) {
      if (!_) continue;
      let h = _.startIndex - e.startIndex;
      if (!f(g, h))
        return {
          kind: "too-complex",
          reason:
            "command substitution contains bytes no parsed node accounts for",
        };
      g = _.endIndex - e.startIndex;
    }
    if (!f(g, l.length))
      return {
        kind: "too-complex",
        reason:
          "command substitution contains bytes no parsed node accounts for",
      };
  }
  for (let l of e.children) {
    if (!l) continue;
    if (l.type === "$(" || l.type === "`" || l.type === ")") continue;
    if (l.type !== "comment") o = !0;
    let c = I(l, t, i, r);
    if (c) return c;
  }
  if (o && t.length === s) te(t, e);
  return null;
}
function z(e, t, n, r) {
  if (!e) return { kind: "too-complex", reason: "Null argument node" };
  switch (e.type) {
    case "word": {
      if (Ae.test(e.text))
        return {
          kind: "too-complex",
          reason: "Word contains brace expansion syntax",
          nodeType: "word",
          differential: !0,
        };
      if (Xe.test(e.text) || Qe.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "word",
          differential: !0,
        };
      if (Huo.test(e.text))
        return {
          kind: "too-complex",
          reason:
            "Word contains unescaped ` or $ \u2014 parser missed expansion",
          nodeType: "word",
          differential: !0,
        };
      if (nus.test(e.text))
        return {
          kind: "too-complex",
          reason:
            "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word",
          nodeType: "word",
        };
      return e.text.replace(/\\(.)/g, "$1");
    }
    case "number":
      if (e.children.length > 0)
        return {
          kind: "too-complex",
          reason: "Number node contains expansion (NN# arithmetic base syntax)",
          nodeType: e.children[0]?.type,
        };
      return e.text;
    case "raw_string":
      return Rn(e.text);
    case "string":
      return bn(e, t, n, r);
    case "concatenation": {
      if (Ae.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace expansion",
          nodeType: "concatenation",
          differential: !0,
        };
      if (Xe.test(e.text) || Qe.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "concatenation",
          differential: !0,
        };
      let i = "",
        s = !1,
        o = e.startIndex;
      for (let l = 0; l < e.children.length; l++) {
        let c = e.children[l];
        if (!c) continue;
        if (c.startIndex > o)
          return {
            kind: "too-complex",
            reason:
              "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see",
            nodeType: "concatenation",
          };
        if (((o = c.endIndex), c.type === "word" && c.text.includes("{")))
          s = !0;
        if (
          (c.type === "simple_expansion" || c.type === "expansion") &&
          (e.children[l + 1]?.text.startsWith("[") ||
            /^:[a-zA-Z&]/.test(e.children[l + 1]?.text ?? ""))
        )
          return {
            kind: "too-complex",
            reason:
              "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval",
            nodeType: "concatenation",
            differential: !0,
          };
        let f = z(c, t, n, r);
        if (typeof f !== "string") return f;
        i += f;
      }
      if (s && (i.includes(",") || i.includes("..")))
        return {
          kind: "too-complex",
          reason:
            "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
          nodeType: "concatenation",
        };
      if (Duo.test(i))
        return {
          kind: "too-complex",
          reason: "zsh ~[ dynamic directory syntax (post-collapse)",
          nodeType: "concatenation",
          differential: !0,
        };
      if (Luo.test(i))
        return {
          kind: "too-complex",
          reason: "zsh =cmd expansion (post-collapse)",
          nodeType: "concatenation",
          differential: !0,
        };
      return i;
    }
    case "arithmetic_expansion": {
      D++;
      let i = ht(e);
      if (i) return i;
      return O;
    }
    case "simple_expansion":
      return (D++, xe(e, n, !1));
    default:
      return E(e);
  }
}
function bn(e, t, n, r) {
  let i = "",
    s = -1,
    o = !1,
    l = !1,
    c = !1;
  for (let f of e.children) {
    if (!f) continue;
    if (s !== -1 && f.startIndex > s) {
      let g = Buffer.from(e.text, "utf8")
        .subarray(s - e.startIndex, f.startIndex - e.startIndex)
        .toString("utf8");
      if (g.includes("`"))
        return {
          kind: "too-complex",
          reason:
            "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown",
          nodeType: "string",
          differential: !0,
        };
      if (g.length > 0) ((i += g), (l = !0));
    }
    switch (((s = f.endIndex), f.type)) {
      case '"':
        s = f.endIndex;
        break;
      case "string_content":
        ((i += f.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1")),
          (l = !0));
        break;
      case Pt: {
        let g = e.children.indexOf(f),
          _ = e.children[g + 1];
        if (_?.type === "string_content") {
          if (_.text.startsWith("["))
            return {
              kind: "too-complex",
              reason:
                "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval",
              nodeType: "string",
              differential: !0,
            };
          if (/^[+^=~]/.test(_.text))
            return {
              kind: "too-complex",
              reason:
                "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks",
              nodeType: "string",
              differential: !0,
            };
          let h = e.children[g - 1];
          if (
            /^:[a-zA-Z&]/.test(_.text) &&
            h?.type === "simple_expansion" &&
            h.endIndex === f.startIndex &&
            h.children.some((p) => p?.type === "special_variable_name")
          )
            return {
              kind: "too-complex",
              reason:
                'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
              nodeType: "string",
              differential: !0,
            };
        }
        ((i += Pt), (l = !0));
        break;
      }
      case "command_substitution": {
        let g = Nr(f);
        if (g === "DANGEROUS") return E(f);
        if (g !== null) {
          let h = g.replace(/\n+$/, "");
          if (Vn.test(f.text)) U++;
          if (
            h.includes(`
`)
          ) {
            if (/^--?[A-Za-z0-9]/.test(i + h))
              return {
                kind: "too-complex",
                reason:
                  "cat-heredoc body would make the argument start with option syntax",
                nodeType: "command_substitution",
              };
            (Se++,
              (i +=
                `
` + Gte),
              (l = !0));
            break;
          }
          (Se++, (i += h), (l = !0));
          break;
        }
        let _ = pt(f, t, n, r);
        if (_) return _;
        (D++, (i += Gte), (o = !0));
        break;
      }
      case "simple_expansion": {
        D++;
        let g = xe(f, n, !0);
        if (typeof g !== "string") return g;
        {
          let _ = e.children[e.children.indexOf(f) + 1],
            h = f.children.some((p) => p?.type === "special_variable_name");
          if (
            _?.type === "string_content" &&
            (_.text.startsWith("[") ||
              /^:[a-zA-Z&]/.test(_.text) ||
              (h && yr.test(_.text)))
          )
            return {
              kind: "too-complex",
              reason:
                'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
              nodeType: "string",
              differential: !0,
            };
        }
        if (bi(g)) o = !0;
        else if (g !== "") l = !0;
        else c = !0;
        i += g;
        break;
      }
      case "arithmetic_expansion": {
        let g = ht(f);
        if (g) return g;
        (D++, (i += O), (o = !0));
        break;
      }
      default:
        return E(f);
    }
  }
  if (o) {
    if ([...i.replaceAll(Gte, "").replaceAll(O, "")].length <= 1) return E(e);
  }
  if (!l && !o && !c && e.text.length > 2) {
    let f = e.text.slice(1, -1);
    if (f.includes("`") || f.includes("$("))
      return {
        kind: "too-complex",
        reason:
          "Delimiters-only string node contains unparsed command substitution",
        nodeType: "string",
        differential: !0,
      };
    return f;
  }
  return i;
}
var Pr =
  /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;
function ht(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!Pr.test(t.text))
        return {
          kind: "too-complex",
          reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
          nodeType: "arithmetic_expansion",
        };
      continue;
    }
    switch (t.type) {
      case "binary_expression":
      case "unary_expression":
      case "ternary_expression":
      case "parenthesized_expression": {
        let n = ht(t);
        if (n) return n;
        break;
      }
      default:
        return E(t);
    }
  }
  return null;
}
function te(e, t) {
  e.push({
    argv: ["true"],
    envVars: [],
    redirects: [],
    text: t.text,
    hasUnquotedGlob: GBe(t.text),
  });
}
function se(e) {
  if (e.type === "arithmetic_expansion") return !0;
  for (let t of e.children) if (t && se(t)) return !0;
  return !1;
}
function Nr(e) {
  let t = null;
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "$(" || i.type === ")") continue;
    if (i.type === "redirected_statement" && t === null) t = i;
    else return null;
  }
  if (!t) return null;
  let n = !1,
    r = null;
  for (let i of t.children) {
    if (!i) continue;
    if (i.type === "command") {
      let s = i.children.filter((l) => l);
      if (s.length !== 1) return null;
      let o = s[0];
      if (o?.type !== "command_name" || o.text !== "cat") return null;
      n = !0;
    } else if (i.type === "heredoc_redirect") {
      if (rt(i) !== null) return null;
      for (let s of i.children) {
        if (s?.type === "<<-") return null;
        if (s?.type === "heredoc_body") r = s.text;
      }
    } else return null;
  }
  if (!n || r === null) return null;
  if (lt.test(r)) return "DANGEROUS";
  if (XDn(r) !== !1) return "DANGEROUS";
  return r;
}
function ot(e, t, n, r) {
  let i = null,
    s = "",
    o = !1;
  for (let l of e.children) {
    if (!l) continue;
    if (l.type === "variable_name") i = l.text;
    else if (l.type === "=" || l.type === "+=") {
      o = l.type === "+=";
      continue;
    } else if (l.type === "command_substitution") {
      let c = pt(l, t, n, r);
      if (c) return c;
      s = Gte;
    } else if (l.type === "simple_expansion") {
      let c = xe(l, n, !0);
      if (typeof c !== "string") return c;
      s = c;
    } else {
      let c = z(l, t, n, r);
      if (typeof c !== "string") return c;
      s = c;
    }
  }
  if (i === null)
    return {
      kind: "too-complex",
      reason: "Variable assignment without name",
      nodeType: "variable_assignment",
    };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(i))
    return {
      kind: "too-complex",
      reason: `Invalid variable name (bash treats as command): ${i}`,
      nodeType: "variable_assignment",
    };
  if (i === "IFS")
    return {
      kind: "too-complex",
      reason:
        "IFS assignment changes word-splitting \u2014 cannot model statically",
      nodeType: "variable_assignment",
    };
  if (i === "PS4" || i === "PROMPT4") {
    if (o)
      return {
        kind: "too-complex",
        reason:
          "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment",
        nodeType: "variable_assignment",
      };
    if (bi(s))
      return {
        kind: "too-complex",
        reason:
          "PS4 value derived from cmdsub/variable \u2014 runtime unknowable",
        nodeType: "variable_assignment",
      };
    if (
      !/^[A-Za-z0-9 _+:./=[\]-]*$/.test(
        s.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, ""),
      )
    )
      return {
        kind: "too-complex",
        reason:
          "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
        nodeType: "variable_assignment",
      };
  }
  if (s.includes("~") && !N)
    return {
      kind: "too-complex",
      reason:
        "Tilde in assignment value \u2014 bash may expand at assignment time",
      nodeType: "variable_assignment",
    };
  return { name: i, value: s, isAppend: o };
}
var kn = new Set([
  "_",
  "RANDOM",
  "SECONDS",
  "LINENO",
  "BASH_COMMAND",
  "FUNCNAME",
  "EPOCHSECONDS",
  "EPOCHREALTIME",
  "SRANDOM",
  "BASHPID",
  "BASH_MONOSECONDS",
  "BASH_TRAPSIG",
  "HISTCMD",
  "ERRNO",
  "REPLY",
  "reply",
  "PIPESTATUS",
  "pipestatus",
  "BASH_SOURCE",
  "DIRSTACK",
  "GROUPS",
  "BASH_ARGV",
  "BASH_ARGC",
  "BASH_SUBSHELL",
  "BASH_LINENO",
  "BASH_ARGV0",
  "BASH_REMATCH",
  "MATCH",
  "match",
  "MBEGIN",
  "MEND",
  "mbegin",
  "mend",
  "OPTARG",
  "OPTIND",
  "argv",
  "FIGNORE",
  "fignore",
  "PSVAR",
  "psvar",
  "WATCH",
  "watch",
  "HISTCHARS",
  "histchars",
  "PS1",
  "PROMPT",
  "prompt",
  "PS2",
  "PROMPT2",
  "PS3",
  "PROMPT3",
  "PS4",
  "PROMPT4",
  "RPS1",
  "RPROMPT",
  "RPS2",
  "RPROMPT2",
]);
function xe(e, t, n) {
  let r = null,
    i = !1;
  for (let c of e.children) {
    if (c?.type === "variable_name") {
      r = c.text;
      break;
    }
    if (c?.type === "special_variable_name") {
      ((r = c.text), (i = !0));
      break;
    }
  }
  if (r === null) return E(e);
  let s = t.get(r);
  ue += s?.length ?? 0;
  let o = ue > De ? En(e) : void 0;
  if ((bt(s?.length ?? 0), o !== void 0)) return o;
  let l = s === void 0 ? void 0 : me(s);
  if (l !== void 0) {
    if (l.includes(C)) {
      let c = E(e);
      return c.kind === "too-complex" && !N ? { ...c, divergentShape: !0 } : c;
    }
    if (kn.has(r)) return n && Ye.has(r) && r !== "BASHPID" ? O : E(e);
    if (bi(l)) {
      if (!n) return E(e);
      return ((Z ||= l !== O && l !== Gte), l);
    }
    if (!n) {
      if (l === "") return E(e);
      if ($t.test(l)) return E(e);
    }
    return ((Z = !0), l);
  }
  if (r === "HOME") {
    let c = Un();
    if (!n && (c === "" || $t.test(c))) return E(e);
    return c;
  }
  if (n) {
    if (Ye.has(r)) return O;
    if (i && (Xn.has(r) || /^[0-9]+$/.test(r))) {
      if (r === "!" && !ce && NBn()) Z = !0;
      return O;
    }
  }
  return E(e);
}
function qe(e, t) {
  ae(t, e);
}
function zt(e, t, n, r) {
  if (!fe || e === X) return [];
  if (K >= dr)
    return {
      kind: "too-complex",
      reason: "Loops nested too deeply to follow the variables they change",
      nodeType: e.type,
    };
  let i = new Map(n),
    s = X,
    o = Z,
    l = V,
    c = j,
    f = Y,
    g = W,
    _ = q;
  ((W = new Map(g)), (X = e), K++);
  let h = I(e, [...t], i, [...r]);
  return (
    K--,
    (X = s),
    (Z = o),
    (V = l),
    (j = c),
    (Y = f),
    (W = g),
    (q = _),
    h ?? [...n.keys()].filter((p) => i.get(p) !== n.get(p))
  );
}
function Wt(e, t) {
  let n = () => {
    for (let r of t.keys()) T(t, r);
  };
  for (let r of e) {
    if (r?.type === "unset" && r.text === "unsetenv") return;
    if (
      !r ||
      r.type === "unset" ||
      r.type === "file_redirect" ||
      r.type === "heredoc_redirect" ||
      r.type === "herestring_redirect"
    )
      continue;
    if (r.type === "variable_name") {
      T(t, r.text.replace(/\\/g, ""));
      continue;
    }
    if (r.type === "word") {
      if (r.text.startsWith("-")) {
        if (r.text === "--" || /^-[fvn]+$/.test(r.text)) continue;
        n();
        continue;
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(r.text)) {
        T(t, r.text.replace(/^\\/, ""));
        continue;
      }
    }
    n();
  }
}
function at(e) {
  if (!e) return null;
  switch (e.type) {
    case "word":
    case "number":
      return e.text.replace(/\\(.)/g, "$1");
    case "raw_string":
      return e.text.slice(1, -1);
    case "string": {
      let t = e.children.filter((n) => n && n.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null;
    }
    case "concatenation": {
      let t = "";
      for (let n of e.children) {
        let r = at(n);
        if (r === null) return null;
        t += r;
      }
      return t;
    }
    default:
      return null;
  }
}
function ae(e, t) {
  if (
    e.type === "function_definition" ||
    e.type === "subshell" ||
    e.type === "command_substitution" ||
    e.type === "process_substitution"
  )
    return;
  if (e.type === "pipeline") {
    let n = null;
    for (let r of e.children) if (r && !pe.has(r.type)) n = r;
    if (n) ae(n, t);
    return;
  }
  if (e.type === "list" || e.type === "program") {
    let n = e.children;
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      if (!i || pe.has(i.type)) continue;
      let s = r + 1;
      while (s < n.length && !n[s]) s++;
      if (n[s]?.type === "&") continue;
      ae(i, t);
    }
    return;
  }
  if (e.type === "variable_assignment") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        T(t, n.text);
        break;
      }
  }
  if (e.type === "for_statement") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        T(t, n.text);
        break;
      }
  }
  if (e.type === "unset_command") Wt(e.children, t);
  if (e.type === "command") {
    let n,
      r,
      i = [],
      s = [],
      o = !1;
    for (let u of e.children) {
      if (!u) continue;
      if (u.type === "command_name")
        ((r = u), (n = at(u.children[0] ?? u) ?? void 0), (o = !0));
      else if (
        !o ||
        u.type === "file_redirect" ||
        u.type === "herestring_redirect" ||
        u.type === "heredoc_redirect"
      );
      else (i.push(at(u) ?? ""), s.push(u));
    }
    let l = !1,
      c;
    while (n !== void 0 && (st.has(n) || n === "!")) {
      if (
        (c === "builtin" || c === "command") &&
        n !== "builtin" &&
        n !== "command" &&
        n !== "noglob"
      )
        l = !0;
      let u = n === "!" ? void 0 : n;
      while (i.length > 0) {
        let x = i[0];
        if (/^-[-pvV]*$/.test(x)) {
          if (/[vV]/.test(x) || (u === "builtin" && /p/.test(x) && Wvr()))
            l = !0;
          (i.shift(), s.shift());
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(x)) {
          if (
            u !== void 0 &&
            it.has(u) &&
            ((xn.test(x) && !bi(x)) || N) &&
            Wvr()
          )
            l = !0;
          let d = x.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          (T(t, d), i.shift(), s.shift(), (u = void 0));
        } else break;
      }
      ((c = u), (n = i.shift()), s.shift());
    }
    let f = i,
      g = (u) => {
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(u)) T(t, u);
      };
    if (n === "read" && !bks()) {
      T(t, "REPLY");
      let u = 0,
        x = !1;
      while (u < f.length) {
        let d = f[u];
        if (!x && d === "--") {
          ((x = !0), u++);
          continue;
        }
        if (!x && d.startsWith("-")) {
          if (oe.has(d)) {
            u += 2;
            continue;
          }
          let m = !1;
          for (let b = 1; b < d.length; b++) {
            let y = d[b];
            if (y === "a" || y === "A") {
              (g(b < d.length - 1 ? d.slice(b + 1) : (f[u + 1] ?? "")),
                (m = b === d.length - 1));
              break;
            }
            if (oe.has("-" + y)) {
              m = b === d.length - 1;
              break;
            }
          }
          u += m ? 2 : 1;
          continue;
        }
        (g(d), u++);
      }
    } else if (n === "mapfile" || n === "readarray") {
      T(t, "MAPFILE");
      for (let u = 0; u < f.length; u++) {
        let x = f[u];
        if (x.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(x)) u++;
          continue;
        }
        g(x);
      }
    } else if (n === "unset" && !l) Wt(s, t);
    let _ = r?.children[0],
      h = _?.type === "word" ? _.text.replace(/\\(.)/g, "$1") : void 0,
      p =
        h !== void 0 &&
        !$uo.has(h) &&
        !st.has(h) &&
        !(H === void 0 ? dt : yn).has(h);
    for (let u of e.children)
      if (u && (u.type !== "variable_assignment" || !p)) ae(u, t);
    return;
  }
  if (e.type === "declaration_command") {
    for (let n of e.children)
      if (
        n?.type === "string" ||
        n?.type === "raw_string" ||
        n?.type === "word" ||
        n?.type === "number" ||
        n?.type === "concatenation" ||
        n?.type === "variable_name"
      ) {
        let r = n.text.replace(/['"\\]/g, ""),
          i = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(r);
        if (i) T(t, i[1]);
        else {
          let s = r.indexOf("=");
          if (s > 0 && r.lastIndexOf("$", s - 1) !== -1)
            for (let o of [...t.keys()]) T(t, o);
        }
      }
  }
  for (let n of e.children) if (n) ae(n, t);
}
function J(e, t) {
  for (let [n, r] of t) {
    let i = e.get(n);
    if (i !== void 0 && i !== r) {
      let s = me(r);
      if (W.get(n) === s && me(i) !== s) q = !0;
      T(e, n);
    }
  }
  for (let n of e.keys()) if (!t.has(n)) T(e, n);
}
function je(e, t, n = !1) {
  if (n) {
    T(e, t.name);
    return;
  }
  if (t.isAppend && !e.has(t.name)) return;
  let r = e.get(t.name);
  if (r !== void 0 && r !== t.value && !t.isAppend && !bi(t.value)) {
    T(e, t.name);
    return;
  }
  let i = t.isAppend ? (r ?? "") + t.value : t.value;
  e.set(t.name, i);
}
function Rn(e) {
  return e.slice(1, -1);
}
function wn(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return !0;
    if (wn(t)) return !0;
  }
  return !1;
}
function vr(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null;
}
function Ie(e, t) {
  let n = e.type === "variable_assignment";
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "variable_name") {
      if (n) continue;
      if (t.has(r.text)) return r.text;
    }
    if (r.type === "word") {
      let s = vr(r.text);
      if (s !== null && t.has(s)) return s;
    }
    let i = Ie(r, t);
    if (i !== null) return i;
  }
  return null;
}
function En(e) {
  return (Me(), E(e));
}
function E(e) {
  if (e.type === "ERROR")
    return {
      kind: "too-complex",
      reason:
        Kt(e.text) || (e.text.startsWith("${") && XOi(e.text))
          ? "A $ followed by non-ASCII text in this command can't be checked before it runs"
          : "Parse error",
      nodeType: e.type,
    };
  let t = Ir.get(e.type);
  return {
    kind: "too-complex",
    reason: `${t === void 0 ? "This command" : `${t} in this command`} can't be checked before it runs`,
    nodeType: e.type,
  };
}
var Ir = new Map([
  ["simple_expansion", "A variable"],
  ["expansion", "A variable in braces"],
  ["command_substitution", "A nested command"],
  ["process_substitution", "A command used as a file"],
  ["brace_expression", "A brace pattern"],
  ["ansi_c_string", "Text with escape codes"],
  ["translated_string", "Translatable text"],
  ["test_command", "A test in brackets"],
  ["herestring_redirect", "A here-string"],
  ["heredoc_redirect", "A here-document"],
  ["subshell", "A group in parentheses"],
  ["compound_statement", "A group in braces or double parentheses"],
  ["for_statement", "A for or select loop"],
  ["c_style_for_statement", "A counting for loop"],
  ["while_statement", "A while or until loop"],
  ["until_statement", "An until loop"],
  ["if_statement", "An if statement"],
  ["case_statement", "A case statement"],
  ["function_definition", "A function definition"],
  ["array", "A list of values"],
  ["string", "Quoted text"],
  ["file_redirect", "A file redirect"],
  ["pipeline", "A pipeline"],
  ["concatenation", "Joined pieces of text"],
  ["variable_assignment", "A variable assignment"],
  ["variable_assignments", "Variable assignments"],
]);
function qOi(e) {
  let t = [],
    n = 0,
    r = !1,
    i = !1;
  while (n < e.length) {
    let s = e[n];
    if (s === "\\" && !r) {
      n += 2;
      continue;
    }
    if (s === "'" && !i) {
      ((r = !r), n++);
      continue;
    }
    if (s === '"' && !r) {
      ((i = !i), n++);
      continue;
    }
    if (!r && s === "$" && e[n + 1] === "{") {
      let o = 1,
        l = n + 2,
        c = !1,
        f = !1;
      while (l < e.length && o > 0) {
        let g = e[l];
        if (g === "\\" && !c) {
          l += 2;
          continue;
        }
        if (g === "'" && !f) c = !c;
        else if (g === '"' && !c) f = !f;
        else if (!c && !f) {
          if (g === "{") o++;
          else if (g === "}") o--;
        }
        l++;
      }
      (t.push(e.slice(n + 2, o === 0 ? l - 1 : l)), (n = l));
      continue;
    }
    n++;
  }
  return t;
}
function pot(e) {
  let t = "",
    n = !1,
    r = !1;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (n) {
      if (s === "'") ((n = !1), (t += s));
      continue;
    }
    if (s === "\\" && !n) {
      let o = e[i + 1];
      if ((i++, o !== void 0 && !"$'\"`\\".includes(o))) t += o;
      continue;
    }
    if (s === '"') {
      ((r = !r), (t += s));
      continue;
    }
    if (s === "'" && !r) {
      ((n = !0), (t += s));
      continue;
    }
    t += s;
  }
  return t;
}
function _bt(e) {
  let t = "",
    n;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (n === "'") {
      if (i === "'") n = void 0;
      continue;
    }
    if (n === '"') {
      if (i === "\\") r++;
      else if (i === '"') n = void 0;
      continue;
    }
    if (i === "\\") {
      r++;
      continue;
    }
    if (i === "'" || i === '"') {
      n = i;
      continue;
    }
    t += i;
  }
  return t;
}
var Buo = [
    "strftime",
    "pcre_match",
    "zstat",
    "zselect",
    "zgetattr",
    "zlistattr",
    "ztie",
    "zuntie",
    "syserror",
    "zsystem",
    "zftp",
    "zcurses",
  ],
  Sn = new Set([
    "zformat",
    "zparseopts",
    "zstyle",
    "zregexparse",
    "getln",
    "vared",
    ...Buo,
  ]);
function An(e, t) {
  return e === "stat" && t.some((n) => /^-[gnNolLtTrs]*[AH]/.test(n)) && DQ()
    ? "'stat' with -A or -H \u2014 zsh's stat builtin stores its result in the variable that option names, so a tracked value cannot be statically verified"
    : null;
}
var ybt = new Set([
    "zmodload",
    "emulate",
    "sysopen",
    "sysread",
    "syswrite",
    "sysseek",
    "zpty",
    "ztcp",
    "zsocket",
    "zf_rm",
    "zf_mv",
    "zf_ln",
    "zf_chmod",
    "zf_chown",
    "zf_mkdir",
    "zf_rmdir",
    "zf_chgrp",
    "repeat",
    "foreach",
    "zcompile",
    "setopt",
    "unsetopt",
    "disable",
    "shopt",
    "autoload",
    "functions",
    ...Sn,
  ]),
  Or = new Set([
    "-exec",
    "-execdir",
    "-ok",
    "-okdir",
    "-delete",
    "-rm",
    "-fprint",
    "-fprint0",
    "-fprintf",
    "-fls",
    "-files0-from",
  ]);
function ion(e) {
  return Or.has(e) && Mko(e);
}
var Cr = new Set([
    "-name",
    "-iname",
    "-path",
    "-ipath",
    "-lname",
    "-ilname",
    "-regex",
    "-iregex",
    "-wholename",
    "-iwholename",
    "-samefile",
    "-newer",
    "-anewer",
    "-cnewer",
    "-mnewer",
    "-perm",
    "-user",
    "-group",
    "-uid",
    "-gid",
    "-size",
    "-type",
    "-xtype",
    "-fstype",
    "-inum",
    "-links",
    "-used",
    "-context",
    "-amin",
    "-cmin",
    "-mmin",
    "-atime",
    "-ctime",
    "-mtime",
    "-mindepth",
    "-maxdepth",
    "-printf",
    "-regextype",
    "-D",
    "-f",
    "-flags",
    "-Bnewer",
    "-Btime",
    "-Bmin",
    "-files0-from",
    "-xattrname",
  ]),
  Lr = /^-newer[aBcm][aBcmt]$/,
  $n = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/,
  Dr = /^-[dsx]+f$/;
function YDn(e) {
  return Cr.has(e) || Lr.test(e) || $n.test(e);
}
function Pgr(e) {
  return $n.test(e);
}
function Ogr(e) {
  return Dr.test(e);
}
var VBe = new Set([
    "eval",
    "source",
    ".",
    "exec",
    "nocorrect",
    "fc",
    "coproc",
    "trap",
    "enable",
    "mapfile",
    "readarray",
    "hash",
    "bind",
    "complete",
    "compgen",
    "alias",
    "let",
  ]),
  mot = new Set(["awk", "gawk", "mawk", "nawk"]),
  Mr = /^(?:-[FvW]$|--(?:fie|a$|as))/;
function XDn(e) {
  if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e))
    return "awk program contains system() which executes arbitrary commands";
  if (
    /(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) ||
    /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e)
  )
    return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
  if (
    /@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(
      e,
    )
  )
    return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
  if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e))
    return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
  if (/"\/inet[46]?\//.test(e))
    return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
  return !1;
}
var E5e = new Set([
    "bash",
    "sh",
    "zsh",
    "dash",
    "ksh",
    "mksh",
    "ash",
    "hush",
    "rbash",
  ]),
  zr = new Set(["busybox", "toybox", "wsl", "su", "runuser"]),
  pY = new Set([
    ...E5e,
    "fish",
    "csh",
    "tcsh",
    "rsh",
    ...zr,
    "cmd",
    "powershell",
    "pwsh",
  ]),
  KBe = new Set([
    "time",
    "command",
    "builtin",
    "noglob",
    "env",
    "nice",
    "nohup",
    "sudo",
    "doas",
    "stdbuf",
    "timeout",
  ]),
  dfe = new Set([
    "watch",
    "ionice",
    "chrt",
    "setsid",
    "taskset",
    "strace",
    "ltrace",
    "script",
    "flock",
    "unshare",
    "nsenter",
    "sandbox-exec",
  ]);
function Tn(e) {
  return ybt.has(e) && (!Sn.has(e) || DQ());
}
function YOi(e) {
  let t = $M(e);
  return (
    VBe.has(e) ||
    Tn(e) ||
    dfe.has(e) ||
    dfe.has(t) ||
    t === "rm" ||
    t === "rmdir"
  );
}
var sus = {
    test: new Set(["-v", "-R", "-t"]),
    "[": new Set(["-v", "-R", "-t"]),
    "[[": new Set(["-v", "-R", "-t"]),
    printf: new Set(["-v"]),
    read: new Set(["-a"]),
    unset: new Set(["-v"]),
    wait: new Set(["-p"]),
  },
  JDn = new Set(["-eq", "-ne", "-lt", "-le", "-gt", "-ge"]),
  aon = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/,
  ius = new Set(["read", "unset"]),
  Ft = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "private",
    "float",
    "integer",
  ]),
  aus = /^[+-][-+\w:]*P/,
  eUt = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "print",
    "getopts",
    "set",
    "zparseopts",
    "zformat",
    "zstyle",
    ...Buo,
    "autoload",
    "shift",
    "exit",
    "return",
    "break",
    "continue",
    "bye",
    "logout",
    "vared",
    "private",
    "getln",
    "zregexparse",
    "float",
    "integer",
  ]),
  lus = new Set([
    "pipefail",
    "errexit",
    "nounset",
    "xtrace",
    "noglob",
    "noclobber",
    "verbose",
    "monitor",
    "notify",
    "vi",
    "emacs",
    "errtrace",
    "functrace",
    "hashall",
    "physical",
    "ignoreeof",
  ]),
  dus = new Set([
    "e",
    "u",
    "x",
    "f",
    "C",
    "v",
    "m",
    "b",
    "E",
    "T",
    "h",
    "P",
    "n",
  ]),
  Wr = new Set([
    "path",
    "home",
    "dirstack",
    "tmpprefix",
    "bash_env",
    "env",
    "cdpath",
    "globignore",
    "shell",
    "fpath",
    "bash_loadables_path",
    "module_path",
    "manpath",
    "mailpath",
    "readnullcmd",
    "nullcmd",
    "histfile",
    "zdotdir",
    "functions",
    "commands",
    "aliases",
    "galiases",
    "saliases",
    "bash_cmds",
    "bash_aliases",
    "execignore",
    "bash_source_path",
    "lang",
    "language",
    "lc_all",
    "lc_ctype",
    "lc_collate",
    "lc_messages",
    "lc_numeric",
    "lc_time",
    "histchars",
    "textdomain",
    "textdomaindir",
  ]),
  mt = new Set([
    "RANDOM",
    "SECONDS",
    "LINENO",
    "OPTIND",
    "MAILCHECK",
    "HISTCMD",
    "SRANDOM",
    "EPOCHSECONDS",
    "EPOCHREALTIME",
    "BASHPID",
    "BASH_MONOSECONDS",
    "BASH_TRAPSIG",
    "COLUMNS",
    "LINES",
    "SHLVL",
    "ERRNO",
    "TMOUT",
    "HISTSIZE",
    "SAVEHIST",
    "TRY_BLOCK_ERROR",
    "TRY_BLOCK_INTERRUPT",
    "KEYTIMEOUT",
    "LISTMAX",
    "LOGCHECK",
    "PERIOD",
    "FUNCNEST",
    "UID",
    "EUID",
    "GID",
    "EGID",
    "REPORTTIME",
    "REPORTMEMORY",
    "DIRSTACKSIZE",
    "BAUD",
    "ZLE_RPROMPT_INDENT",
    "MBEGIN",
    "MEND",
    "PPID",
    "ARGC",
    "ZSH_SUBSHELL",
    "TTYIDLE",
    "status",
  ]);
function Pn(e, t) {
  if (!mt.has(e)) return !1;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || bi(t)) return !0;
  if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) return !0;
  return !1;
}
function Igr(e) {
  let t = e.toLowerCase();
  return (
    Wr.has(t) ||
    t.startsWith("ld_") ||
    t.startsWith("dyld_") ||
    t.startsWith("bash_func_")
  );
}
function Qye(e) {
  return Igr(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || mt.has(e);
}
var oe = new Set(["-p", "-d", "-n", "-N", "-t", "-u", "-i"]),
  Bt = new Set(["-p", "-t", "-n"]),
  Ut = new Set(["-t", "-n", "-N"]),
  Ht = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/,
  Fr = /^[A-Za-z_][A-Za-z0-9_]*\[/,
  Br = new Set(["-f", "-C", "-x", "-X", "-u"]),
  lt = /\/proc\/.*\/environ/,
  Ee = /\n\s*#/;
function gCe(e, t) {
  let n = t?.sourceGlobRecord !== !1,
    r = null;
  for (let i of e) {
    let s = i.argv,
      o = !1;
    for (;;) {
      let h = s[0] === void 0 ? void 0 : $M(s[0]),
        p =
          h === "time" ||
          h === "nohup" ||
          h === "timeout" ||
          h === "nice" ||
          h === "stdbuf" ||
          h === "env" ||
          h === "command" ||
          h === "xargs"
            ? h
            : s[0];
      if (p === "time" || p === "nohup") {
        if (((s = s.slice(1)), s[0] !== void 0 && !/^[\w./~+-]+$/.test(s[0])))
          return {
            ok: !1,
            reason: `'${p} ${s[0]}' can't be checked before it runs`,
          };
      } else if (p === "timeout") {
        let u = 1;
        while (u < s.length) {
          let x = s[u];
          if (
            x === "--foreground" ||
            x === "--preserve-status" ||
            x === "--verbose"
          )
            u++;
          else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(x)) u++;
          else if (
            (x === "--kill-after" || x === "--signal") &&
            s[u + 1] &&
            /^[A-Za-z0-9_.+-]+$/.test(s[u + 1])
          )
            u += 2;
          else if (x.startsWith("--"))
            return {
              ok: !1,
              reason: `'timeout ${x}' can't be checked before it runs`,
            };
          else if (x === "-v") u++;
          else if (
            (x === "-k" || x === "-s") &&
            s[u + 1] &&
            /^[A-Za-z0-9_.+-]+$/.test(s[u + 1])
          )
            u += 2;
          else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(x)) u++;
          else if (x.startsWith("-"))
            return {
              ok: !1,
              reason: `'timeout ${x}' can't be checked before it runs`,
            };
          else break;
        }
        if (s[u] && /^\d+(?:\.\d+)?[smhd]?$/.test(s[u])) s = s.slice(u + 1);
        else if (s[u])
          return {
            ok: !1,
            reason: `timeout duration '${s[u]}' can't be checked before it runs`,
          };
        else break;
      } else if (p === "nice")
        if (s[1] === "-n" && s[2] && /^-?\d+$/.test(s[2])) s = s.slice(3);
        else if (s[1] && /^-\d+$/.test(s[1])) s = s.slice(2);
        else if (s[1] && (/[$(`]/.test(s[1]) || bi(s[1])))
          return {
            ok: !1,
            reason: `nice argument '${s[1]}' contains expansion \u2014 cannot statically determine wrapped command`,
          };
        else s = s.slice(1);
      else if (p === "env") {
        let u = 1;
        while (u < s.length) {
          let x = s[u];
          if (x.includes("=") && !x.startsWith("-")) u++;
          else if (x === "-i" || x === "-0" || x === "-v") u++;
          else if (x === "-u" && s[u + 1]) u += 2;
          else if (x.startsWith("-"))
            return {
              ok: !1,
              reason: `'env ${x}' can't be checked before it runs`,
            };
          else break;
        }
        if (u < s.length) s = s.slice(u);
        else break;
      } else if (p === "stdbuf") {
        let u = 1;
        while (u < s.length) {
          let x = s[u];
          if (jn.test(x) && s[u + 1]) u += 2;
          else if (Yn.test(x)) u++;
          else if (Kn.test(x)) u++;
          else if (x.startsWith("-"))
            return {
              ok: !1,
              reason: `'stdbuf ${x}' can't be checked before it runs`,
            };
          else break;
        }
        if (u > 1 && u < s.length) s = s.slice(u);
        else break;
      } else if (p === "command") {
        let u = 1,
          x = !1;
        while (u < s.length && s[u].startsWith("-") && s[u] !== "--") {
          let d = s[u];
          if (!/^-[pvV]+$/.test(d))
            return {
              ok: !1,
              reason: `'command ${d}' can't be checked before it runs`,
            };
          if (d.includes("v") || d.includes("V")) x = !0;
          u++;
        }
        if (s[u] === "--") u++;
        if (x || u >= s.length) break;
        s = s.slice(u);
      } else if (s[0] === "builtin" || s[0] === "noglob") {
        let u = s[0] === "builtin" && s[1] === "--" ? 2 : 1;
        if (u < s.length) s = s.slice(u);
        else break;
      } else if (p === "xargs")
        if (s.length >= 2 && !s[1].startsWith("-"))
          ((s = s.slice(1)), (o = !0));
        else break;
      else break;
    }
    let l = s[0];
    if (l === void 0) continue;
    let c = $M(l);
    if (l === "")
      return {
        ok: !1,
        reason:
          "Empty command name \u2014 argv[0] may not reflect what bash runs",
      };
    if (bi(l))
      return {
        ok: !1,
        reason: "Command name is runtime-determined (placeholder argv[0])",
      };
    if (l.startsWith("-") || l.startsWith("|") || l.startsWith("&"))
      return { ok: !1, reason: "Command appears to be an incomplete fragment" };
    let f = _o(sus, c),
      g = c === "test" || c === "[" || c === "[[";
    if (f !== void 0)
      for (let h = 1; h < s.length; h++) {
        let p = s[h],
          u = s[h + 1];
        if (f.has(p) && u !== void 0 && (u.includes("[") || bi(u)))
          return {
            ok: !1,
            reason: `'${c} ${p}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`,
          };
        if (g) {
          if (p === "-t" && u !== void 0 && !aon.test(u))
            return {
              ok: !1,
              reason: `'${c} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`,
            };
          continue;
        }
        if (p.length > 2 && p[0] === "-" && p[1] !== "-" && !p.includes("[")) {
          for (let x of f)
            if (x.length === 2 && p.includes(x[1])) {
              let d = s[h + 1];
              if (d !== void 0 && (d.includes("[") || bi(d)))
                return {
                  ok: !1,
                  reason: `'${c} ${x}' (combined in '${p}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`,
                };
            }
        }
        if (p.length > 2 && p[0] === "-" && c !== "read")
          for (let x of f) {
            if (x.length !== 2) continue;
            let d = p.indexOf(x[1], 1);
            if (d === -1 || d === p.length - 1) continue;
            let m = p.slice(d + 1);
            if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(m) || bi(m))
              return {
                ok: !1,
                reason: `'${c} ${x}' (fused in '${p}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`,
              };
          }
      }
    if (g)
      for (let h = 2; h < s.length; h++) {
        if (!JDn.has(s[h])) continue;
        for (let p of [s[h - 1], s[h + 1]]) {
          if (p === void 0) continue;
          if (p.includes("[") || !aon.test(p))
            return {
              ok: !1,
              reason: `'${c} ... ${s[h]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`,
            };
        }
      }
    if (ius.has(c)) {
      let h = !1;
      for (let p = 1; p < s.length; p++) {
        let u = s[p];
        if (h !== !1) {
          let x = h;
          if (((h = !1), x === "numeric" && !Ht.test(u)))
            return {
              ok: !1,
              reason: `'read ${s[p - 1]}' operand '${u}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`,
            };
          if (
            x === "prompt" &&
            (Fr.test(u) ||
              (u[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(u)) ||
              u.includes(Gte))
          )
            return {
              ok: !1,
              reason: `'read ${s[p - 1]}' operand '${u}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`,
            };
          continue;
        }
        if (u[0] === "-") {
          if (c === "read") {
            if (Ut.has(u)) h = "numeric";
            else if (u === "-p") h = "prompt";
            else if (oe.has(u)) h = "string";
            else if (u.length > 2)
              for (let x = 1; x < u.length; x++) {
                let d = "-" + u[x],
                  m = Ut.has(d);
                if (m || oe.has(d)) {
                  if (x === u.length - 1)
                    h = m ? "numeric" : d === "-p" ? "prompt" : "string";
                  else if (m && !Ht.test(u.slice(x + 1)))
                    return {
                      ok: !1,
                      reason: `'read ${d}' (fused in '${u}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`,
                    };
                  else if (d === "-p") {
                    let b = u.slice(x + 1);
                    if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(b) || b.includes(Gte))
                      return {
                        ok: !1,
                        reason: `'read -p' fused remainder '${b}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`,
                      };
                  }
                  break;
                }
              }
          }
          continue;
        }
        if (u.includes("[") || bi(u))
          return {
            ok: !1,
            reason: `'${c}' positional NAME '${u}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`,
          };
      }
    }
    if (eUt.has(c)) {
      let h = c === "declare" || c === "typeset" || c === "local",
        p = h || c === "export" || c === "readonly",
        u = h || c === "readonly",
        x = !1,
        d = !1;
      for (let y = 1; y < s.length; y++) {
        let w = s[y];
        if (u) {
          if (/^[+-].*f/.test(w)) x = !0;
          if (/^[+-].*[uU]/.test(w)) d = !0;
          if (x && d)
            return {
              ok: !1,
              reason: `'${c}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')`,
            };
        }
        if (h && ut.test(w))
          return {
            ok: !1,
            reason: `'${c}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics`,
          };
        if (Ft.has(c) && /^[+-].*[iluEFLRZ]/.test(w))
          return {
            ok: !1,
            reason: `'${c}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value`,
          };
        if ((p || c === "private") && /^[+-].*m/.test(w))
          return {
            ok: !1,
            reason: `'${c}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`,
          };
        if (Ft.has(c) && /^[+-].*T/.test(w))
          return {
            ok: !1,
            reason: `'${c} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
          };
        let k = w.includes("[") && /[$`]/.test(w);
        if (k || bi(w))
          return {
            ok: !1,
            reason: k
              ? `'${c}' operand '${b2(w)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts`
              : `'${c}' operand '${b2(w)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`,
          };
        if ((c === "float" || c === "integer") && !/^[+-]/.test(w))
          return {
            ok: !1,
            reason: `zsh '${c}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`,
          };
      }
      let m = p && l === c ? Jt(c, s.slice(1)) : null;
      if (m !== null) return { ok: !1, reason: m };
      let b =
        l === c && (t?.hasLoop !== !1 || i !== e.at(-1))
          ? en(c, s.slice(1))
          : null;
      if (b !== null) return { ok: !1, reason: b };
    }
    if (c === "printf")
      for (let h = 1; h < s.length; h++) {
        let p = s[h],
          u = p.includes("[") && /[$`]/.test(p);
        if (u || bi(p))
          return {
            ok: !1,
            reason: u
              ? `printf operand '${b2(p)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
              : `printf operand '${b2(p)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`,
          };
      }
    if (c === "set")
      for (let h = 1; h < s.length; h++) {
        let p = s[h];
        if (p === "--") break;
        if (!/^[-+]/.test(p)) continue;
        for (let u = 1; u < p.length; u++) {
          let x = p[u];
          if (x === "o") {
            let d = u < p.length - 1 ? p.slice(u + 1) : s[h + 1];
            if (
              d !== void 0 &&
              d !== "" &&
              !lus.has(d.toLowerCase().replace(/[_-]/g, ""))
            )
              return {
                ok: !1,
                reason: `'set -o/+o ${d}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`,
              };
            if (u === p.length - 1) h++;
            break;
          }
          if (x === "A") break;
          if (!dus.has(x))
            return {
              ok: !1,
              reason: `'set ${p[0]}${x}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`,
            };
        }
      }
    if (c === "print" && s.some((h) => aus.test(h)))
      return {
        ok: !1,
        reason: "What 'print -P' expands can't be checked before it runs",
      };
    if (c === "jobs")
      for (let h = 1; h < s.length; h++) {
        let p = s[h];
        if (/^[+-].*x/.test(p))
          return {
            ok: !1,
            reason: "What 'jobs -x' starts can't be checked before it runs",
          };
      }
    if (juo.has(l))
      return {
        ok: !1,
        reason: `Shell keyword '${c}' as command name \u2014 tree-sitter mis-parse`,
      };
    if (o) {
      if (c === "find" || c === "jq")
        return {
          ok: !1,
          reason: `What xargs adds to ${c} can't be checked before it runs`,
        };
      if (mot.has(c)) {
        let h = !1;
        for (let p = 1; p < s.length; p++) {
          let u = s[p];
          if (u === "--") {
            h = p + 1 < s.length;
            break;
          }
          if (u === "-" || !u.startsWith("-")) {
            h = !0;
            break;
          }
          if (!u.includes("=") && Mr.test(u)) p++;
        }
        if (!h)
          return {
            ok: !1,
            reason: `The program xargs gives ${c} can't be checked before it runs`,
          };
      }
    }
    if (c === "jq") {
      for (let h of s) {
        if (/\bsystem\s*\(/.test(h))
          return {
            ok: !1,
            reason:
              "jq command contains system() function which executes arbitrary commands",
          };
        if (/\b(?:include|import)\b/.test(h))
          return {
            ok: !1,
            reason:
              'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins',
          };
      }
      if (
        s.some((h) =>
          /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(
            h,
          ),
        )
      )
        return {
          ok: !1,
          reason:
            "jq command contains dangerous flags that could execute code or read arbitrary files",
        };
    }
    if (mot.has(c)) {
      if (i.hasUnquotedGlob || (n && zBe(i)))
        return {
          ok: !1,
          reason:
            "awk command contains unquoted glob characters \u2014 could glob-expand to a planted program or flag before awk runs",
        };
      for (let h of s) {
        let p = XDn(h);
        if (p !== !1) return { ok: !1, reason: p };
        if (bi(h))
          return {
            ok: !1,
            reason: "awk is given text that can't be checked before it runs",
          };
      }
      if (
        s.some(
          (h) =>
            /^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(h) ||
            /^--(?:fil|e|i|lo|s|de)/.test(h),
        )
      )
        return {
          ok: !1,
          reason: "awk has an option that can't be checked before it runs",
        };
    }
    if (c === "find") {
      if (i.hasUnquotedGlob || (n && zBe(i)))
        return {
          ok: !1,
          reason:
            "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs",
        };
      let h = !1;
      for (let p = 1; p < s.length; p++) {
        let u = s[p],
          x = h;
        if (((h = !1), ion(u)))
          return {
            ok: !1,
            reason: `find with '${u}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`,
          };
        if (Ogr(u))
          return {
            ok: !1,
            reason: `find option '${u}' is read differently by different versions of find \u2014 could hide a following action`,
          };
        if (!x && Pgr(u)) {
          h = !0;
          continue;
        }
        if (!x && YDn(u)) {
          p++;
          continue;
        }
        if (bi(u))
          return {
            ok: !1,
            reason:
              "find argument is runtime-determined \u2014 could resolve to a dangerous action",
          };
        if (/[[\]*?]/.test(u))
          return {
            ok: !1,
            reason: `find argument '${u}' contains glob characters \u2014 could glob-expand to a dangerous action`,
          };
      }
    }
    if (Tn(l))
      return {
        ok: !1,
        reason: `Zsh builtin '${c}' can bypass security checks`,
      };
    let _ = An(l, s.slice(1));
    if (_ !== null) return { ok: !1, reason: _ };
    if (VBe.has(l))
      if (c === "fc" && !s.slice(1).some((h) => /^[+-].*[es]/.test(h)));
      else if (
        c === "compgen" &&
        !s.slice(1).some((h) => /^[+-].*[CFW]/.test(h))
      );
      else
        return { ok: !1, reason: `'${c}' evaluates arguments as shell code` };
    if (dfe.has(c) && s.length > 1)
      return {
        ok: !1,
        reason: `What '${c}' starts can't be checked before it runs`,
      };
    for (let h of i.argv)
      if (h.includes("/proc/") && lt.test(h))
        return {
          ok: !1,
          reason: "Accesses /proc/*/environ which may expose secrets",
        };
    for (let h of i.redirects)
      if (h.target.includes("/proc/") && lt.test(h.target))
        return {
          ok: !1,
          reason: "Accesses /proc/*/environ which may expose secrets",
        };
    for (let h of i.argv)
      if (
        h.includes(`
`) &&
        Ee.test(h)
      )
        r ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a quoted argument can hide arguments from path validation",
        };
    for (let h of i.envVars)
      if (
        h.value.includes(`
`) &&
        Ee.test(h.value)
      )
        r ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside an env var value can hide arguments from path validation",
        };
    for (let h of i.redirects)
      if (
        h.target.includes(`
`) &&
        Ee.test(h.target)
      )
        r ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a redirect target can hide arguments from path validation",
        };
  }
  if (r) return r;
  return { ok: !0 };
}
export {
  $M,
  Rgr,
  Tal,
  Jcs,
  Cal,
  Iuo,
  GOi,
  Aal,
  X1t,
  BBe,
  Ral,
  Qcs,
  dk,
  lW,
  WBe,
  J1t,
  zOi,
  Zcs,
  Gte,
  bi,
  eus,
  xgr,
  b2,
  jBe,
  VOi,
  KOi,
  tus,
  fot,
  Q1t,
  Z1t,
  son,
  Muo,
  Huo,
  nus,
  Duo,
  Luo,
  rus,
  GBe,
  zBe,
  yE,
  Nuo,
  jK,
  qDn,
  ous,
  Fuo,
  Uuo,
  $uo,
  qOi,
  pot,
  _bt,
  Buo,
  ybt,
  ion,
  YDn,
  Pgr,
  Ogr,
  VBe,
  mot,
  XDn,
  E5e,
  pY,
  KBe,
  dfe,
  YOi,
  sus,
  JDn,
  aon,
  ius,
  aus,
  eUt,
  lus,
  dus,
  Igr,
  Qye,
  gCe,
};
