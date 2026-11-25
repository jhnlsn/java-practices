// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { ue } from "/$bunfs/root/chunk-ex299d27.js";
import { ee, wr } from "/$bunfs/root/chunk-m55722gg.js";
import { va } from "/$bunfs/root/chunk-qypdkxad.js";
import { vi } from "/$bunfs/root/chunk-y9qqzj6v.js";
var PFo = "Inner tool errors (likely root cause):";
function oga(t, e) {
  if (ue()) {
    if (/^TypeError: ".*" is not a function/s.test(t) && e.includes("``"))
      return "Hint: two backticks in a row end one template literal and tag the next, so a string gets called. Text that contains backticks or `${` is safer in a '\u2026' or \"\u2026\" string, or read from a file.";
    let n = /\.(text|json|lines)\(\)\.(\w+) is not a function/.exec(t);
    if (n !== null) {
      let [, o, i] = n;
      return `Hint: \`.${o}()\` returns a promise: \`(await file(p).${o}()).${i}(\u2026)\` \u2014 the await needs its own parentheses before the next method.`;
    }
    if (new RegExp(`^.*${va} (is not defined|is not a function)`).test(t))
      return `Hint: ${va} is not available in code. Call it directly, as a tool call of its own.`;
    if (/^.*EvalError: Code generation from strings disallowed/.test(t))
      return "Hint: `eval` and the `Function` constructors are off in this context by design, so a script cannot run a string as code here. To reload helpers saved in a file, read it, then send its text as the code of its own call: its top-level declarations stay defined for later calls.";
  }
  return "";
}
function OFo(t, e, n) {
  if (ue())
    return `[The ${t} stopped this script's code ${e} ${e === 1 ? "time" : "times"}: a turn took more than ${n}. A turn is the code that runs from the script's start, a tool call's result or a timer's firing until the next tool call's result or timer. If nothing awaited the stopped code (a timer's callback, an async function called without await), it ended partway with no error. Give one turn less to do, or split it with an await of a tool call or a timer.]`;
  return "";
}
var p = 8;
function sga(t) {
  if (ue() && t.length > 0) {
    let e = t.length - p;
    return ` Not set by this script: ${t.slice(0, p).join(", ")}${e > 0 ? ` and ${e} more` : ""} (a name that already had a value keeps it, unless this script has it in a \`let\` with no value).`;
  }
  return "";
}
function iga(t, e = !1) {
  if (ue()) {
    let n = new Map();
    for (let r of t)
      if (r.phase === "complete")
        n.set(r.toolName, (n.get(r.toolName) ?? 0) + 1);
    let o = e
      ? "The script was stopped partway through: statements before the stop ran."
      : "The script threw partway through: statements before the failing one ran.";
    if (n.size === 0) return `${o} No tool call had completed.`;
    let i = [...n].map(([r, l]) => `${r} \xD7${l}`).join(", ");
    return `${o} Tool calls that had completed: ${i}.`;
  }
  return "";
}
var IFo = "Cancelled before it started",
  u = 500,
  O = /\.? \((?:evaluating|In|near) '/,
  N = /^[\w$]+(?:\??\.[\w$]+)*$/,
  _ = /^is not (?:a function|a constructor|an object)$/i,
  w = / (is not (?:a function|a constructor|an object))\.?(?=\n|$)/i,
  T = "describeTool: no tool named",
  y = "describeTool: no tool has that name.";
function nWs(t) {
  return ue() ? m(t) : "";
}
function m(t) {
  let e = t.indexOf(`

${PFo}
- `),
    n = e === -1 ? t : t.slice(0, e),
    o = n.startsWith("TypeError: "),
    i = o ? n.search(O) : -1,
    r = t;
  if (i !== -1) {
    let s = n.slice(11, i),
      a = s.lastIndexOf(" is not "),
      d = s.slice(a + 1);
    r = a === -1 || !_.test(d) ? "TypeError" : E(s.slice(0, a), d);
  } else if (o) {
    let s = w.exec(n),
      a = s?.[1];
    if (s !== null && a !== void 0) r = E(n.slice(11, s.index), a);
  }
  let l = g(r),
    f = l.indexOf(T);
  return (f === -1 ? l : l.slice(0, f) + y) || "Error";
}
function g(t) {
  let e = t.length > u ? `${ee(t, u)}\u2026` : t;
  return wr(vi(e)).trim();
}
function E(t, e) {
  return N.test(t) ? `TypeError: ${t} ${e}` : `TypeError: a value ${e}`;
}
function MFo(t) {
  return ue() ? b(t) : null;
}
function b(t) {
  let { drawsInterruptedRow: e } = import.meta.require(
      "/$bunfs/root/chunk-8z4dyva0.js",
    ),
    { REPL_TOOL_NAME: n } = import.meta.require(
      "/$bunfs/root/chunk-k6ky73kn.js",
    );
  if (e(n, t)) return "Interrupted";
  if (
    typeof t === "object" &&
    t !== null &&
    "neverRan" in t &&
    t.neverRan === "other"
  )
    return IFo;
  let o =
    t === void 0
      ? "Error"
      : typeof t === "object" && t !== null && "error" in t
        ? t.error
        : void 0;
  if (typeof o !== "string" || o === "") return null;
  let i = m(o),
    r =
      typeof t === "object" && t !== null && "plainErrorLine" in t
        ? t.plainErrorLine
        : void 0;
  return typeof r === "object" &&
    r !== null &&
    "text" in r &&
    typeof r.text === "string" &&
    "replaces" in r &&
    r.replaces === i
    ? g(r.text) || i
    : i;
}
function i2l(t) {
  return (
    ue() &&
    typeof t === "object" &&
    t !== null &&
    "shownOnCall" in t &&
    t.shownOnCall === !0
  );
}
export { PFo, oga, OFo, sga, iga, IFo, nWs, MFo, i2l };
