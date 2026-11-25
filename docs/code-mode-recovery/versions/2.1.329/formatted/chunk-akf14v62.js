// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { CC } from "/$bunfs/root/chunk-cqahc80t.js";
import { ee, ol } from "/$bunfs/root/chunk-m55722gg.js";
import { o9 } from "/$bunfs/root/chunk-k936fbc4.js";
import { Od } from "/$bunfs/root/chunk-rj29h1w6.js";
import { A, w, An } from "/$bunfs/root/chunk-avbzeyf3.js";
import { K } from "/$bunfs/root/chunk-q3pjyhpy.js";
import { f, m } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { s, lo } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { _ } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { Fp } from "/$bunfs/root/chunk-rjw4t165.js";
import { nxr, _we } from "/$bunfs/root/chunk-921fq3rt.js";
import { rqe, j0t, TXt, Cja, Aja, Zet } from "/$bunfs/root/chunk-n0xef476.js";
import { Ui } from "/$bunfs/root/chunk-n447hzba.js";
import { fvt } from "/$bunfs/root/chunk-qgghjkta.js";
import { lLe } from "/$bunfs/root/chunk-s62pzgeb.js";
import { Qe } from "/$bunfs/root/chunk-2xdvqr6d.js";
function HQe(e, t) {
  return Object.assign(e, { ownWords: t });
}
function Twn(e) {
  return e instanceof Error && "ownWords" in e && typeof e.ownWords === "string"
    ? e.ownWords
    : "";
}
import { spawn as Ft } from "child_process";
import { randomUUID as dt } from "crypto";
import {
  lstat as Mt,
  mkdir as Ut,
  readdir as Ht,
  realpath as Ve,
  rename as xt,
  unlink as Be,
  writeFile as qe,
} from "fs/promises";
import {
  basename as Ge,
  dirname as ae,
  join as C,
  relative as Ze,
  resolve as _e,
  sep as me,
} from "path";
var Pe = 50;
function CAa(e, t) {
  return {
    certificateFile: ze(e, "GIT_SSL_CAINFO", t),
    skipVerification: ze(e, "GIT_SSL_NO_VERIFY", t),
  };
}
function ze(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(e)) {
    if (o === void 0) continue;
    if (i === t) r.unshift({ name: i, value: o });
    else if (n && i.toUpperCase() === t) r.push({ name: i, value: o });
  }
  return r;
}
function vwn(e) {
  return e.flatMap(([t, n]) => ["-c", `${t}=${n}`]);
}
var Ce = { envOverrides: {}, commandScopeEntries: [], fileSeedLines: "" };
function KXn(e) {
  let t = e.operator.certificateFile.length > 0,
    n =
      e.operator.skipVerification.length > 0 ||
      (e.role === "child" && e.serverSetsSkipVerification);
  if (!e.routing)
    return {
      ...Ce,
      decision: {
        role: e.role,
        certificateFile: t ? "left_no_routing" : "left_unset",
        skipVerification: n ? "left" : "unset",
        mountEntries: !1,
        mountVerificationPinned: !1,
      },
    };
  switch (e.role) {
    case "prep":
    case "resume":
    case "outcome":
      return Lt(e, t, n);
    case "child":
      return Nt(e, e.routing, n);
    case "hook":
      return Ot(e, e.routing, t, n);
  }
}
function Ot(e, t, n, r) {
  let i = n ? "left_operators_hook" : "left_unset";
  if (!e.reachesGitMount)
    return {
      ...Ce,
      decision: {
        role: "hook",
        certificateFile: i,
        skipVerification: r ? "left" : "unset",
        mountEntries: !1,
        mountVerificationPinned: !1,
      },
    };
  let o = URL.canParse(t.mountBaseUrl) ? Je(t) : [],
    a = Xe(o, []),
    d = r && o.length > 0;
  return {
    ...Ce,
    envOverrides: r ? ge(e.operator.skipVerification) : {},
    commandScopeEntries: d ? [["http.sslVerify", "false"], ...a] : a,
    decision: {
      role: "hook",
      certificateFile: i,
      skipVerification: !r ? "unset" : d ? "moved" : "pinned_off",
      mountEntries: !1,
      mountVerificationPinned: o.length > 0,
    },
  };
}
function $t(e, t) {
  return ["", `${new URL(e).origin}.`, `${e}.`].map((r) => [
    `http.${r}sslCAInfo`,
    t,
  ]);
}
function ge(e) {
  let t = {};
  for (let { name: n } of e) t[n] = void 0;
  return t;
}
function Lt(e, t, n) {
  if (!e.target.mountRouted)
    return {
      ...Ce,
      decision: {
        role: e.role,
        certificateFile: t ? "left_direct_target" : "left_unset",
        skipVerification: n ? "left" : "unset",
        mountEntries: !1,
        mountVerificationPinned: !1,
      },
    };
  let r = ge(e.operator.skipVerification),
    i = n ? "pinned_off" : "unset";
  if (!t)
    return {
      envOverrides: r,
      commandScopeEntries: [],
      fileSeedLines: "",
      decision: {
        role: e.role,
        certificateFile: "left_unset",
        skipVerification: i,
        mountEntries: !1,
        mountVerificationPinned: !1,
      },
    };
  if (e.trustBundle.status !== "built" || !URL.canParse(e.target.url))
    return {
      envOverrides: r,
      commandScopeEntries: [],
      fileSeedLines: "",
      decision: {
        role: e.role,
        certificateFile:
          e.trustBundle.status !== "built"
            ? "left_no_trust_bundle"
            : "left_unparseable_target",
        skipVerification: i,
        mountEntries: !1,
        mountVerificationPinned: !1,
      },
    };
  return {
    envOverrides: { ...ge(e.operator.certificateFile), ...r },
    commandScopeEntries: $t(e.target.url, e.trustBundle.path),
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: "moved",
      skipVerification: i,
      mountEntries: !0,
      mountVerificationPinned: !1,
    },
  };
}
function Dt(e) {
  let n = (
    e.serverCertificateFile ?? e.operator.certificateFile[0]?.value
  )?.trim();
  if (!n || /[\n\r\0]/.test(n)) return;
  return n;
}
function Ae(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Je(e) {
  let t = new Set();
  for (let n of [e.mountBaseUrl, e.pushBaseUrl])
    if (n && URL.canParse(n)) {
      for (let r of [new URL(n).origin, n]) if (!r.includes("=")) t.add(r);
    }
  return [...t];
}
function Xe(e, t) {
  return [...e, ...t.map((n) => `https://${n}/`)].map((n) => [
    `http.${n}.sslVerify`,
    "true",
  ]);
}
function It(e) {
  return e
    .map(([t, n]) => {
      let r = t.slice(5, t.length - 10);
      return `[http ${Ae(r)}]
	sslVerify = ${n}
`;
    })
    .join("");
}
function Nt(e, t, n) {
  let r =
      e.serverCertificateFile !== void 0 ||
      e.operator.certificateFile.length > 0,
    i = Dt(e),
    o = !r
      ? "left_unset"
      : !e.gitConfigArm
        ? "left_git_config_arm_off"
        : i === void 0
          ? "left_unusable_value"
          : !e.gitReadsEnvironmentConfig
            ? "left_old_git"
            : "moved",
    a = Je(t),
    d = !n
      ? "unset"
      : e.gitConfigArm && e.gitReadsEnvironmentConfig && a.length > 0
        ? "moved"
        : "left",
    l = [],
    c = "",
    u = {};
  if (o === "moved" && i !== void 0) {
    if (
      (l.push(["http.sslCAInfo", i]),
      (c += `
[http]
	sslCAInfo = ${Ae(i)}
`),
      e.trustBundle.status === "built")
    )
      for (let T of a)
        (l.push([`http.${T}.sslCAInfo`, e.trustBundle.path]),
          (c += `[http ${Ae(T)}]
	sslCAInfo = ${Ae(e.trustBundle.path)}
`));
    u = { GIT_SSL_CAINFO: void 0, ...ge(e.operator.certificateFile) };
  }
  if (d === "moved")
    (l.push(["http.sslVerify", "false"]),
      (c += `${
        c === ""
          ? `
`
          : ""
      }[http]
	sslVerify = false
`),
      (u = {
        ...u,
        GIT_SSL_NO_VERIFY: void 0,
        ...ge(e.operator.skipVerification),
      }));
  let R = Xe(a, e.gitConfigArm ? t.governedHosts : []);
  if ((l.push(...R), R.length > 0))
    c += `${
      c === ""
        ? `
`
        : ""
    }${It(R)}`;
  return {
    envOverrides: u,
    commandScopeEntries: l,
    fileSeedLines: c,
    decision: {
      role: "child",
      certificateFile: o,
      skipVerification: d,
      mountEntries:
        o === "moved" && e.trustBundle.status === "built" && a.length > 0,
      mountVerificationPinned: a.length > 0,
    },
  };
}
var Kzr = "+refs/heads/*:refs/remotes/origin/*";
function M2o(e) {
  return e.upstreamUrl;
}
function ct(e) {
  if (e) return [];
  let { depth: t } = lt();
  return t === void 0 ? [] : ["--depth", String(t)];
}
function lt() {
  let e = s.CLAUDE_RUNNER_FETCH_DEPTH;
  if (e === void 0) return { depth: Pe, invalid: void 0 };
  if (e === "full" || e === "0") return { depth: void 0, invalid: void 0 };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) return { depth: t, invalid: void 0 };
  return { depth: Pe, invalid: e };
}
var ut = 120000,
  Ue = 600000,
  et = 300000;
var Wt = 300000,
  be = 1800000;
function ft() {
  return be;
}
function gt() {
  let e = s.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
  if (e === void 0) return { capMs: Ue, invalid: void 0, clamped: void 0 };
  if (e === "0" || e.toLowerCase() === "off")
    return { capMs: 0, invalid: void 0, clamped: void 0 };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) {
    let n = Math.min(Math.max(t, ut), be);
    return { capMs: n, invalid: void 0, clamped: n === t ? void 0 : e };
  }
  return { capMs: Ue, invalid: e, clamped: void 0 };
}
function Vt() {
  return Math.round((gt().capMs * ft()) / be);
}
var Ne = 5000,
  pt =
    /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/,
  ht = /^(Enumerating objects): (\d{1,15})\b/,
  Bt = /^[\d:.]+ \S+ +packet: +sideband< \\1$/,
  Yt = "Receiving objects",
  jt = { KiB: 1024, MiB: 1048576, GiB: 1073741824 },
  Kt = 5000,
  zt = 500,
  qzr = 600000,
  Jt = new Set(["worktree"]);
function Xt(e, t = !1) {
  let n,
    r,
    i,
    o = 0,
    a,
    d = e.split(/\r|\n/);
  if (t) d = d.slice(1);
  for (let l of d) {
    if (l.length === 0) continue;
    let c = l.startsWith("remote: ");
    if (c) o++;
    else if (Bt.test(l)) a = !0;
    let u = c ? l.slice(8) : l,
      R = pt.exec(u);
    if (R === null) {
      if (c) {
        let h = ht.exec(u);
        if (h !== null) {
          let O = Number(h[2]);
          i = {
            sideband: c,
            label: h[1],
            pct: 0,
            done: O,
            raw: `remote: ${h[1]}: ${O}`,
          };
        }
      }
      continue;
    }
    let [, T, G, b, P, g, k] = R,
      v = {
        sideband: c,
        label: T,
        pct: Math.min(100, Number(G)),
        done: b !== void 0 ? Number(b) : void 0,
        total: P !== void 0 ? Number(P) : void 0,
        bytes:
          g !== void 0 && k !== void 0 ? Math.round(Number(g) * jt[k]) : void 0,
        raw: `${c ? "remote: " : ""}${T}: ${G}%${b !== void 0 ? ` (${b}/${P})` : ""}`,
      };
    if (((n = v), c)) i = v;
    else r = v;
  }
  return { display: n, client: r, server: i, remoteLines: o, keepAlive: a };
}
var qt = 1000;
function Zt(e, t, n) {
  if (e.active) return;
  if (t.display?.sideband) {
    e.active = !0;
    return;
  }
  if (t.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = n;
  else if (n - e.firstRemoteLineAt >= qt) e.active = !0;
}
function Qt(e, t) {
  if (e === void 0) return !0;
  if (t.label !== e.label) return !0;
  if (t.done !== void 0 && e.done !== void 0)
    return t.done > e.done || (t.bytes ?? 0) > (e.bytes ?? 0);
  return t.pct > e.pct;
}
function en(e, t, n) {
  if (e === void 0 || n.label !== e.label) return !t.has(n.label);
  if (n.done !== void 0 && e.done !== void 0) return n.done > e.done;
  if ((n.done === void 0) !== (e.done === void 0)) return !1;
  return n.pct > e.pct;
}
function tn(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}
function nn(e) {
  let t = e.startsWith("remote: "),
    n = t ? e.slice(8) : e;
  return pt.test(n) || (t && ht.test(n));
}
var Ee = 2000;
function rn(e, t, n, r) {
  let i = t ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e,
    o = Zzr(i, n, r)
      .split(/\r|\n/)
      .filter((d) => d.length > 0 && !nn(d)).join(`
`),
    a = Gt(o);
  return Ct.test(a) ? a.slice(0, Ee) : a.slice(-Ee);
}
var te = 1e4,
  on = 30000,
  He = 3,
  sn = 6,
  pe = 5,
  tt = 300,
  nt = 150,
  xe = 2,
  he = 3,
  an = 1000,
  dn = 15;
function cn() {
  return Boolean(lo.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function ln() {
  return Boolean(lo.CLAUDE_RUNNER_STALL_GIVEUP);
}
function un(e) {
  return e
    .split(
      `
`,
    )
    .some((t) => {
      let n = t.indexOf("Operation too slow");
      if (n === -1) return !1;
      let r = t.slice(0, n);
      return (
        !/\bremote(?: error)?: /.test(r) &&
        /curl 28\b|unable to access '[^']*': $/.test(r)
      );
    });
}
function fn() {
  return Boolean(lo.CCR_DELTA_RESET);
}
var mt = ["couldn't find remote ref"];
function Yzr(e) {
  let t = e.toLowerCase();
  return mt.some((n) => t.includes(n));
}
var gn = new RegExp(mt[0].replaceAll("i", "[i\\u0130]"), "gi");
function qXn(e) {
  return e.replace(gn, (t) => `could not${t.slice(8)}`);
}
class Cwn extends A {
  constructor(e) {
    super(
      `git fetch failed (permanent): ${e}`,
      "git fetch failed (permanent): ref not found on the remote",
    );
    this.name = "FetchRefNotFoundError";
  }
}
var Fe = new Set();
class Xzr extends A {
  constructor(e) {
    super(e, "a left-over checkout of another clone could not be moved aside");
    this.name = "CheckoutNotMovedError";
  }
}
var AAa = {
    refused_by_git_wrapper: "a wrapper installed as git exited with 75",
    http_429: "the host answered HTTP 429",
  },
  pn = /^fatal: unable to access '.*': the requested url returned error: 429$/;
function Ye(e, t, n) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  if (t === lLe) return "refused_by_git_wrapper";
  if (!/^https?:/i.test(n)) return;
  let r = e.replace(/^git \S+ failed: /, "");
  if (r.length >= Ee) return;
  let i = r
    .toLowerCase()
    .split(/\r|\n/)
    .map((o) => o.trim())
    .filter((o) => o !== "" && !o.startsWith("remote:"));
  return i.length > 0 && i.every((o) => pn.test(o)) ? "http_429" : void 0;
}
class H2o extends A {
  throttle;
  constructor(e, t) {
    super(e, "git fetch failed: throttled on its last attempt");
    ((this.name = "FetchThrottledError"), (this.throttle = t));
  }
}
var V9 = [
    "-c",
    `core.hooksPath=${nxr()}`,
    "-c",
    "core.fsmonitor=",
    "-c",
    "core.askPass=",
    "-c",
    "gc.auto=0",
    "-c",
    "maintenance.auto=false",
  ],
  K6e = {
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    GIT_ALLOW_PROTOCOL: "https:http:ssh",
  },
  z = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_ALLOW_PROTOCOL: "none",
    GIT_SSH_COMMAND: "false",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
  },
  hn = ["-c", "alias.remote-none=", "-c", "fetch.bundleURI="];
async function RAa(e) {
  let {
      baseDir: t,
      sources: n,
      repositoryPath: r,
      outcomes: i,
      skipValidation: o,
      alwaysFetch: a,
      skipReset: d,
      initWithoutTemplate: l,
      onDebug: c,
      onPhase: u,
      onProgress: R,
      signal: T,
    } = e,
    G = Wn(i ?? []);
  for (let b of n) {
    if (!YXn(b.type)) {
      c(`[byoc:git] Skipping unsupported source type: ${b.type}`);
      continue;
    }
    await mn({
      baseDir: t,
      source: b,
      repositoryPath: r,
      targetBranch: G.get(b.repo),
      skipValidation: o ?? !1,
      alwaysFetch: a ?? !1,
      skipReset: d ?? !0,
      initWithoutTemplate: l ?? !1,
      onDebug: c,
      onPhase: u,
      onProgress: R,
      signal: T,
    });
  }
}
function YXn(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}
async function mn(e) {
  let t = Date.now();
  try {
    let { repoExisted: n } = await _n(e);
    f("byoc_git_prepare_repo", {
      repo_existed: n,
      duration_ms: Date.now() - t,
    });
  } catch (n) {
    throw (
      m("byoc_git_prepare_repo", "error", { duration_ms: Date.now() - t }),
      n
    );
  }
}
async function _n(e) {
  let {
      baseDir: t,
      source: n,
      repositoryPath: r,
      targetBranch: i,
      skipValidation: o,
      alwaysFetch: a,
      skipReset: d,
      initWithoutTemplate: l,
      onDebug: c,
      onPhase: u,
      onProgress: R,
      signal: T,
    } = e,
    G = Un(n),
    b = n.getAuthToken ? G : L5s(G, n.token),
    P = r ?? C5t(t, n);
  if (!P)
    throw Error(`Could not determine repository directory for: ${n.repo}`);
  if (n.ref && !CC(n.ref)) throw Error(`Invalid ref: ${n.ref}`);
  if (i && !CC(i)) throw Error(`Invalid target branch: ${i}`);
  let g = Date.now();
  c(
    `[byoc:git] Preparing ${n.repo} at ${P} (ref=${n.ref ?? "HEAD"}, auth=${n.getAuthToken ? "git-proxy" : b !== G})`,
  );
  let { invalid: k } = lt();
  if (k !== void 0)
    c(
      `[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${k}' \u2014 expected 'full', '0', or a positive integer; using default ${Pe}`,
    );
  let v = gt();
  if (v.invalid !== void 0)
    c(
      `[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${v.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${Ue}`,
    );
  else if (v.clamped !== void 0)
    c(
      `[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${v.clamped}' is ${v.capMs === be ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${v.capMs} ms`,
    );
  let h = {
      repoPath: P,
      gitURL: G,
      authURL: b,
      originURL: M2o(n) ?? b,
      token: n.token,
      getAuthToken: n.getAuthToken,
      governedMount: n.governedMount,
      gitEnvironment: n.gitEnvironment,
      sanitized: n.sanitized,
      initWithoutTemplate: l,
      onDebug: c,
      onPhase: u,
      onProgress: R,
      signal: T,
    },
    O = void 0;
  if (n.staleGitLocks) await st(h);
  else if (n.staleGitDirLocks) await st(h, !0);
  if (!o)
    await We(h, "validateAccess", () =>
      Tn(h, n.repo, n.skippedIfThrottled === !0),
    );
  let y = await We(h, "ensureRepository", () => Pn(h, t, O !== void 0)),
    D = await n.claim?.();
  if (a) {
    if (
      (await Me(h, n.ref, d, y, O).catch(async (E) => {
        if (E instanceof Cwn) await D?.();
        throw E;
      }),
      h.isEmpty)
    )
      n.onEmpty?.();
  } else if (y && !n.ref)
    c("[byoc:git] Using prefetched repo as-is (no ref requested)");
  else if (y && n.ref) {
    if (i && (await yt(h, i)))
      return (
        c(`[byoc:git] Task branch ${i} exists on remote, fetching it`),
        await Tt(h, i, y),
        c(`[byoc:git] Ready: ${n.repo} (${Date.now() - g}ms)`),
        { repoExisted: y }
      );
    if (await Dn(h, n.ref))
      (c(`[byoc:git] Ref ${n.ref} resolves locally, skipping fetch`),
        await p(h, h.repoPath, ["checkout", "--progress", "--force", n.ref]));
    else await Me(h, n.ref, !1, y);
  } else await Me(h, n.ref, !1, y);
  if (i) await Ln(h, i, y);
  return (
    c(`[byoc:git] Ready: ${n.repo} (${Date.now() - g}ms)`),
    { repoExisted: y }
  );
}
function se(e, t, n, r) {
  e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? " " + _(r) : ""}`);
  try {
    e.onPhase?.(t, n, r);
  } catch (i) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${L(i)}`);
  }
}
async function We(e, t, n, r) {
  let i = Date.now(),
    o = await n();
  return (se(e, t, Date.now() - i, r), o);
}
var xAa = {
    repo_not_found_or_no_permission: "repository not found or no permission",
    no_credentials: "no credentials for the repository's git host",
    authentication_failed: "authentication failed",
    blocked_by_git_proxy: "blocked by the git proxy",
  },
  En = [
    [/^fatal: repository '.*' not found$/, "repo_not_found_or_no_permission"],
    [
      /^fatal: unable to access '.*': the requested url returned error: 404$/,
      "repo_not_found_or_no_permission",
    ],
    [/^error: repository not found\.?$/, "repo_not_found_or_no_permission"],
    [/^fatal: could not read (username|password) for /, "no_credentials"],
    [/^fatal: authentication failed for /, "authentication_failed"],
    [
      /^fatal: unable to access '.*': the requested url returned error: 401$/,
      "authentication_failed",
    ],
    [
      /^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/,
      "authentication_failed",
    ],
  ],
  bn =
    /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;
function wn(e, t) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  let n = e.replace(/^git \S+ failed: /, "");
  if (n.length >= Ee) return;
  let r = n
    .toLowerCase()
    .split(
      `
`,
    )
    .map((i) => i.trim());
  if (t)
    return r.some((i) => i.startsWith("remote: access denied by the git proxy"))
      ? "blocked_by_git_proxy"
      : void 0;
  if (r.some((i) => bn.test(i))) return;
  for (let [i, o] of En) if (r.some((a) => i.test(a))) return o;
  return;
}
class Awn extends A {
  denial;
  throttle;
  repository;
  constructor(e, t, n) {
    let r = `Repository access validation failed after ${He} attempts: `;
    super(r + L(e), "Repository access validation failed");
    (HQe(this, r + Twn(e)), (this.name = "RepositoryAccessError"));
    let i = URL.canParse(n.gitURL) ? new URL(n.gitURL) : void 0;
    ((this.repository = {
      repo: n.repo,
      address:
        i !== void 0 &&
        (i.protocol === "https:" || i.protocol === "http:") &&
        i.hostname !== ""
          ? {
              scheme: i.protocol.slice(0, -1),
              host: i.hostname,
              port: i.port || void 0,
            }
          : void 0,
    }),
      (this.denial = wn(L(e), t)),
      (this.throttle =
        this.denial === void 0
          ? Ye(L(e), n.lastAttemptExitCode, n.gitURL)
          : void 0));
  }
}
async function Tn(e, t, n) {
  let r = 2000 + Math.random() * 2000,
    i,
    o = {};
  for (let a = 0; a < He; a++) {
    if (a > 0) {
      let d = n && Ye(L(i), o.exitCode, e.gitURL) !== void 0,
        l = r * (1 << (a - 1)) * (d ? sn : 1);
      (e.onDebug(
        `[byoc:git] Validation retry ${a + 1}/${He}, backing off ${Math.round(l)}ms`,
      ),
        await K(l, e.signal, { throwOnAbort: !0 }));
    }
    o = {};
    try {
      if (
        (await p(
          e,
          "",
          ["ls-remote", "--heads", e.authURL, "HEAD"],
          void 0,
          void 0,
          o,
        ),
        a > 0)
      )
        e.onDebug(`[byoc:git] Validation succeeded on attempt ${a + 1}`);
      return;
    } catch (d) {
      i = d;
    }
  }
  throw new Awn(i, e.getAuthToken !== void 0, {
    repo: t,
    gitURL: e.gitURL,
    lastAttemptExitCode: o.exitCode,
  });
}
function yn(e) {
  let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
  if (!t) return;
  let [, n, r, i] = t,
    o = i.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1],
    a;
  try {
    a = new URL(r).pathname;
  } catch {
    return;
  }
  if (o === void 0 || !a.endsWith(`/${o}`)) return;
  return n;
}
var Rn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";
function vn(e) {
  let t = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
  if (!t) return;
  let [, n, r, i] = t;
  return i === Qzr(Rn) ? { key: n, base: r.replace(/\/+$/, "") } : void 0;
}
function Sn(e, t) {
  let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
  if (!n) return;
  let [, r, i, o] = n,
    a = o
      .replace(/\.git$/i, "")
      .match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
  if (a === void 0) return;
  return t.some((d) => i === `${d}/${a}`) ? r : void 0;
}
async function Pn(e, t, n) {
  let r = {};
  if (
    e.originURL === e.authURL
      ? await p(
          e,
          e.repoPath,
          [
            "--git-dir",
            C(e.repoPath, ".git"),
            "remote",
            "set-url",
            "origin",
            e.authURL,
          ],
          void 0,
          void 0,
          r,
        ).then(
          () => !0,
          () => !1,
        )
      : await kn(e)
  ) {
    await p(e, e.repoPath, [
      "--git-dir",
      C(e.repoPath, ".git"),
      "config",
      "--unset-all",
      "remote.origin.pushurl",
    ]).catch(() => {});
    let o = await p(e, e.repoPath, [
      "--git-dir",
      C(e.repoPath, ".git"),
      "config",
      "--local",
      "--get-regexp",
      "^url\\..*\\.pushinsteadof$",
    ]).catch(() => "");
    for (let c of o.split(`
`)) {
      let u = yn(c);
      if (u === void 0) continue;
      (await p(e, e.repoPath, [
        "--git-dir",
        C(e.repoPath, ".git"),
        "config",
        "--local",
        "--unset-all",
        u,
      ]).catch(() => {}),
        e.onDebug(
          `[byoc:git] Dropped a stale git-mount push rewrite (${de(u)}) from ${e.repoPath}`,
        ));
    }
    let a = await p(e, e.repoPath, [
        "--git-dir",
        C(e.repoPath, ".git"),
        "config",
        "--local",
        "--get-regexp",
        "^credential\\..*\\.helper$",
      ]).catch(() => ""),
      d = new Set(),
      l = [];
    for (let c of a.split(`
`)) {
      let u = vn(c);
      if (u !== void 0 && !d.has(u.key)) (d.add(u.key), l.push(u.base));
    }
    if (l.length > 0) {
      let c = await p(e, e.repoPath, [
          "--git-dir",
          C(e.repoPath, ".git"),
          "config",
          "--local",
          "--get-regexp",
          "^url\\..*\\.insteadof$",
        ]).catch(() => ""),
        u = new Set();
      for (let R of c.split(`
`)) {
        let T = Sn(R, l);
        if (T === void 0 || u.has(T)) continue;
        (u.add(T),
          await p(e, e.repoPath, [
            "--git-dir",
            C(e.repoPath, ".git"),
            "config",
            "--local",
            "--unset-all",
            T,
          ]).catch(() => {}),
          e.onDebug(
            `[byoc:git] Dropped a stale git-mount fetch rewrite (${de(T)}) from ${e.repoPath}`,
          ));
      }
    }
    for (let c of d)
      (await p(e, e.repoPath, [
        "--git-dir",
        C(e.repoPath, ".git"),
        "config",
        "--local",
        "--unset-all",
        c,
      ]).catch(() => {}),
        e.onDebug(
          `[byoc:git] Dropped a stale git-mount credential helper (${de(c)}) from ${e.repoPath}`,
        ));
    return (
      await ot(e),
      e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`),
      !0
    );
  }
  return (
    e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`),
    await Ui(
      Ut(t, { recursive: !0 }),
      te,
      `[runner:stuck] mkdir ${t} (check NFS/CSI mount health)`,
    ),
    await p(e, "", [
      "init",
      ...(e.initWithoutTemplate ? ["--template="] : []),
      e.repoPath,
    ]),
    await p(e, e.repoPath, ["config", "gc.auto", "0"]).catch(() => {}),
    await p(e, e.repoPath, ["remote", "add", "origin", e.originURL]).catch(() =>
      p(e, e.repoPath, ["remote", "set-url", "origin", e.originURL]),
    ),
    await ot(e),
    !1
  );
}
var rt = 7,
  Cn = 100,
  _t = {
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_COUNT: "0",
    GIT_CONFIG_PARAMETERS: "",
  },
  Rwn = { GIT_CONFIG_GLOBAL: "/dev/null", HOME: nxr(), XDG_CONFIG_HOME: nxr() },
  Gn = { ..._t, ...Rwn };
async function it(e, t, n, r) {
  let i = {};
  return p(e, "", ["--git-dir", t, "config", ...n], r, void 0, i).catch((o) => {
    if (i.exitCode === 1) return;
    if (e.signal?.aborted) throw o;
    throw new A(
      `Could not read remote.origin.url from ${t}/config (${L(o)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`,
      "Could not read remote.origin.url of the repository's clone",
    );
  });
}
async function kn(e) {
  let t = C(e.repoPath, ".git"),
    n = await it(e, t, ["--get-all", "remote.origin.url"]);
  if (n === void 0) {
    if (
      (await it(e, t, ["--get-regexp", "^remote\\.origin\\."], _t)) === void 0
    )
      return !1;
    let o = {};
    if (
      !(await p(
        e,
        "",
        ["--git-dir", t, "config", "--get-regexp", "^remote\\.origin\\."],
        Gn,
        void 0,
        o,
      ).then(
        () => !0,
        (d) => {
          if (e.signal?.aborted) throw d;
          return o.exitCode !== 1 || o.wroteStderr !== !1;
        },
      ))
    )
      return !1;
  }
  let r = (n ?? "")
    .split(
      `
`,
    )
    .filter((i) => i.length > 0);
  if (r.length === 1 && r[0] === e.originURL) return !0;
  for (let i = 1; ; i++) {
    let o = await p(e, e.repoPath, [
      "--git-dir",
      t,
      "config",
      "--replace-all",
      "remote.origin.url",
      e.originURL,
    ]).then(
      () => {
        return;
      },
      (a) => a ?? Error("git config failed"),
    );
    if (o === void 0)
      return (
        e.onDebug(
          `[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`,
        ),
        !0
      );
    if (e.signal?.aborted) throw o;
    if (i === rt)
      throw new A(
        `Could not correct remote.origin.url in ${t}/config after ${rt} tries over about six seconds (${L(o)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${t}/config.lock.`,
        "Could not write remote.origin.url of the repository's clone",
      );
    await K(Cn * 2 ** (i - 1), e.signal, { throwOnAbort: !0 });
  }
}
async function ot(e) {
  if (e.originURL !== e.authURL) {
    let t = (
      await p(e, e.repoPath, [
        "--git-dir",
        C(e.repoPath, ".git"),
        "config",
        "--get-all",
        "remote.origin.fetch",
      ]).catch(() => "")
    )
      .split(
        `
`,
      )
      .filter((n) => /^\+?refs\/heads\//.test(n));
    if (t.length > 0 && t.every((n) => n === Kzr)) return;
  }
  await p(e, e.repoPath, [
    "--git-dir",
    C(e.repoPath, ".git"),
    "config",
    "--replace-all",
    "remote.origin.fetch",
    Kzr,
    "^\\+?refs/heads/",
  ]).catch((t) =>
    e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${L(t)}`),
  );
}
function Et(e) {
  if (e.originURL === e.authURL) return { configArgs: [], remote: "origin" };
  let t = `claude-runner-prep-${dt()}`,
    n = vt();
  return {
    configArgs: [
      "-c",
      `remote.${t}.url=${e.authURL}`,
      "-c",
      `remote.${t}.fetch=${Kzr}`,
      ...(n ? ["-c", `remote.${t}.proxy=${n}`] : []),
    ],
    remote: t,
  };
}
async function bt(e, t, n, r) {
  let i = [],
    o,
    a = new AbortController();
  try {
    return await $n(e, n, r, t && cn(), wt, o);
  } finally {
    if ((a.abort(), o !== void 0)) await Be(o).catch(() => {});
  }
}
async function Me(e, t, n, r, i) {
  let o = t || "HEAD",
    a = () => {
      let b = Et(e);
      return [
        ...b.configArgs,
        "fetch",
        ...ct(r),
        "--progress",
        "--no-tags",
        ...[],
        b.remote,
        o,
      ];
    },
    d = !n && fn(),
    l = !1,
    c =
      d &&
      !l &&
      (await p(
        e,
        e.repoPath,
        ["rev-parse", "--verify", "--quiet", "HEAD^{commit}"],
        { ...z },
      ).then(
        () => !0,
        () => !1,
      )),
    u = !1,
    R = await bt(e, r, a, async () => ((u = await In(e)), !u));
  if (u) {
    if (
      ((e.isEmpty = !0),
      e.onDebug("[byoc:git] Repository is empty, skipping checkout"),
      e.sanitized)
    ) {
      let b = C(e.repoPath, ".git"),
        P = {};
      await p(
        e,
        e.repoPath,
        ["--git-dir", b, "read-tree", "HEAD"],
        { ...z },
        on,
        P,
      ).then(e.sanitized.onIndexFromHead, async (g) => {
        if (
          (e.signal?.throwIfAborted(),
          e.onDebug(`[byoc:git] Could not read HEAD into the index: ${L(g)}`),
          typeof P.exitCode !== "number" || P.exitCode > 128)
        )
          await Be(C(b, "index.lock")).catch(() => {});
      });
    }
    return;
  }
  if (!R) throw Error(`git fetch failed for ${e.gitURL}`);
  if (
    (await p(
      e,
      e.repoPath,
      ["update-ref", "refs/remotes/origin/HEAD", "FETCH_HEAD^{commit}"],
      { ...z },
    ).catch((b) => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${L(b)}`)),
    n)
  ) {
    e.onDebug(
      "[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)",
    );
    return;
  }
  let T = () =>
      p(e, e.repoPath, ["update-ref", "--no-deref", "HEAD", "HEAD"], {
        ...z,
      }).catch(() => {}),
    G = () =>
      p(e, e.repoPath, [
        "-c",
        "core.checkStat=minimal",
        "-c",
        "core.trustctime=false",
        "reset",
        "--hard",
        "FETCH_HEAD^{commit}",
      ]);
  if (!c) await T();
  await We(
    e,
    "reset",
    async () => {
      if (c)
        try {
          await p(e, e.repoPath, [
            "-c",
            "core.checkStat=minimal",
            "-c",
            "core.trustctime=false",
            "checkout",
            "-q",
            "--progress",
            "--detach",
            "FETCH_HEAD^{commit}",
          ]);
          return;
        } catch (b) {
          if (e.signal?.aborted) throw b;
          (e.onDebug(
            `[byoc:git] Delta reset failed, falling back to reset --hard: ${L(b)}`,
          ),
            await T());
        }
      await G();
    },
    l ? { delta_reset: "withheld" } : void 0,
  );
}
async function st(e, t = !1) {
  try {
    let n = C(e.repoPath, ".git"),
      r = [n];
    for (let i = r.pop(); i !== void 0; i = r.pop()) {
      e.signal?.throwIfAborted();
      let o = await Ht(i, { withFileTypes: !0 }).catch(
        (a) => (
          e.onDebug(
            `[byoc:git] Could not look for stale git lock files in ${Ze(n, i) || ".git"}: ${L(a)}`,
          ),
          []
        ),
      );
      for (let a of o) {
        let d = C(i, a.name);
        if (a.isDirectory()) {
          if (
            !t &&
            (i !== n ||
              ["refs", "logs", "worktrees", "reftable"].includes(a.name))
          )
            r.push(d);
          continue;
        }
        if (!a.name.endsWith(".lock") || !a.isFile()) continue;
        let l = Ze(n, d);
        try {
          (await Be(d),
            e.onDebug(
              `[byoc:git] Removed stale ${l} left by a git that was cut short`,
            ));
        } catch (c) {
          if (w(c) !== "ENOENT")
            e.onDebug(`[byoc:git] Could not remove a stale ${l}: ${L(c)}`);
        }
      }
    }
  } catch (n) {
    e.onDebug(`[byoc:git] Could not look for stale git lock files: ${L(n)}`);
  }
}
function On(e, t) {
  let n = [];
  if (t && e < xe)
    n.push("-c", `http.lowSpeedLimit=${an}`, "-c", `http.lowSpeedTime=${dn}`);
  if (e >= 3) n.push("-c", "http.version=HTTP/1.1");
  return n;
}
function wt(e, t, n, r, i) {
  return p(e, e.repoPath, t, n, r, i);
}
async function $n(e, t, n, r = !1, i = wt, o) {
  let a = Date.now(),
    d = ft(),
    l = 4000 + Math.random() * 4000,
    c = r && ln(),
    u = 0,
    R,
    T,
    G = [],
    b = (E) => (E.length <= tt ? E : ee(E, nt) + "\u2026" + ol(E, tt - nt - 1)),
    P = () => (G.length > 0 ? { attempt_errors: _(G) } : {}),
    g = 0,
    k = 0,
    v = 0,
    h = (E) => ({
      failfast_aborts: String(g),
      client_aborts: String(k),
      ...(E?.transferBytes !== void 0 && {
        pack_bytes: String(E.transferBytes),
      }),
      ...(E?.sawServerProgress === !0 && { server_progress: "true" }),
      ...!1,
    });
  for (let E = 0; E < pe; E++) {
    if (E > 0) {
      let U = l * (1 << (E - 1));
      (e.onDebug(
        `[byoc:git] Fetch retry ${E + 1}/${pe}, backing off ${Math.round(U)}ms`,
      ),
        await K(U, e.signal, { throwOnAbort: !0 }));
    }
    let B = [...On(E, r), ...(typeof t === "function" ? t() : t)],
      ce =
        E === pe - 1 || (c && E === he - 1 && u === he - 1)
          ? { GIT_TRACE_PACKET: "1" }
          : o === void 0 || E >= xe
            ? void 0
            : { GIT_SHALLOW_FILE: o };
    if (ce?.GIT_SHALLOW_FILE !== void 0) v++;
    let M = {};
    try {
      let U = d - (Date.now() - a);
      if ((await i(e, B, ce, Math.max(1, U), M), E > 0))
        e.onDebug(`[byoc:git] Fetch succeeded on attempt ${E + 1}`);
      return (
        se(e, "fetch", Date.now() - a, {
          attempts: String(E + 1),
          ...h(M),
          ...P(),
        }),
        !0
      );
    } catch (U) {
      ((R = U), (T = M.exitCode));
      let I = L(U);
      (e.onDebug(`[byoc:git] Fetch attempt ${E + 1} failed: ${I}`),
        G.push(b(Od(I))));
      let le = r && E < xe && un(I);
      if (M.killReason !== void 0) k++;
      else if (le) g++;
      if (
        ((u =
          (le || M.killReason === "silence" || M.killReason === "escalated") &&
          !M.sawClientProgress &&
          !M.sawRemoteActivity
            ? u + 1
            : 0),
        Date.now() - a >= d)
      ) {
        if (
          (e.onDebug(
            `[byoc:git] Fetch cumulative wall-clock ${Date.now() - a}ms \u2265 hard cap \u2014 not retrying`,
          ),
          se(e, "fetch", Date.now() - a, {
            attempts: String(E + 1),
            hard_cap: "true",
            ...h(),
            ...P(),
          }),
          Yzr(I))
        )
          throw new Cwn(I);
        let H = `git fetch failed (cumulative hard cap after ${E + 1} attempts): `;
        throw HQe(Error(H + I), H + Twn(U));
      }
      if (n && Yzr(I) && !(await n())) return !1;
      if (Yzr(I))
        throw (
          e.onDebug(
            "[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries",
          ),
          se(e, "fetch", Date.now() - a, {
            attempts: String(E + 1),
            permanent: "true",
            ...h(),
            ...P(),
          }),
          new Cwn(I)
        );
      if (c && E === he - 1 && u === he) {
        (e.onDebug(
          `[byoc:git] Fetch remote mute on all ${he} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`,
        ),
          se(e, "fetch", Date.now() - a, {
            attempts: String(E + 1),
            exhausted: "true",
            giveup: "mute",
            ...h(),
            ...P(),
          }));
        let H = `git fetch failed after ${E + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): `;
        throw HQe(Error(H + I), H + Twn(U));
      }
    }
  }
  se(e, "fetch", Date.now() - a, {
    attempts: String(pe),
    exhausted: "true",
    ...h(),
    ...P(),
  });
  let O = `git fetch failed after ${pe} attempts: `,
    y = O + L(R),
    D = Ye(L(R), T, e.gitURL);
  throw HQe(D !== void 0 ? new H2o(y, D) : Error(y), O + Twn(R));
}
async function Ln(e, t, n) {
  if (
    (
      await p(e, e.repoPath, ["branch", "--show-current"]).catch(() => "")
    ).trim() === t
  ) {
    e.onDebug(`[byoc:git] Already on target branch ${t}`);
    return;
  }
  if (await yt(e, t))
    (e.onDebug("[byoc:git] Target branch exists on remote, fetching"),
      await Tt(e, t, n));
  else
    (e.onDebug(`[byoc:git] Creating local branch ${t} from HEAD`),
      await p(e, e.repoPath, ["checkout", "-B", t]),
      await p(
        e,
        e.repoPath,
        ["update-ref", `refs/remotes/origin/${t}`, "HEAD"],
        { ...z },
      ).catch(() => {}));
}
async function Tt(e, t, n) {
  (await bt(e, n, () => {
    let r = Et(e);
    return [...r.configArgs, "fetch", ...ct(n), "--progress", r.remote, t];
  }),
    await p(e, e.repoPath, [
      "checkout",
      "--progress",
      "--force",
      "-B",
      t,
      "FETCH_HEAD",
    ]));
}
async function yt(e, t) {
  try {
    return (
      (
        await p(e, e.repoPath, [
          "ls-remote",
          "--heads",
          e.authURL,
          `refs/heads/${t}`,
        ])
      ).trim().length > 0
    );
  } catch {
    return !1;
  }
}
async function Dn(e, t) {
  try {
    return (
      await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", t], { ...z }),
      !0
    );
  } catch {
    return !1;
  }
}
async function In(e) {
  try {
    return (
      (
        await p(e, e.repoPath, ["ls-remote", "--symref", e.authURL, "HEAD"])
      ).trim() === ""
    );
  } catch {
    return !1;
  }
}
var Jzr = "SHR_GIT_PROXY_TOKEN",
  H5s = ["-c", "lfs.locksverify=false"];
function D5s(e) {
  return Rt("unused", e);
}
function Rt(e, t) {
  return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${t}"; fi; }; f`;
}
function Qzr(e) {
  return Rt("x-access-token", e);
}
function D2o(e) {
  let t = new URL(e).origin;
  return [
    "-c",
    "credential.helper=",
    "-c",
    `credential.${t}.helper=`,
    "-c",
    `credential.${t}.helper=${D5s(Jzr)}`,
  ];
}
function vt() {
  return (
    process.env.HTTPS_PROXY ||
    process.env.https_proxy ||
    process.env.ALL_PROXY ||
    process.env.all_proxy ||
    ""
  );
}
function L2o(e) {
  let n = ["", `${new URL(e).origin}.`, `${e}.`],
    r = vt(),
    i = r ? ["-c", `remote.origin.proxy=${r}`] : [];
  for (let o of n) {
    if (r) i.push("-c", `http.${o}proxy=${r}`);
    i.push("-c", `http.${o}sslVerify=true`);
  }
  return i;
}
var Nn = new Set(["fetch", "ls-remote"]);
function Fn(e) {
  for (let t = 0; t < e.length; t++) {
    if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
      t++;
      continue;
    }
    return e[t];
  }
  return;
}
async function p(e, t, n, r, i = be, o) {
  let a = e.getAuthToken !== void 0,
    d = Fn(n),
    l = d !== void 0 && Nn.has(d),
    c = a && l ? e.getAuthToken() : void 0,
    u = r?.GIT_ALLOW_PROTOCOL === "none",
    R = [
      ...V9,
      ...vwn(e.gitEnvironment?.commandScopeEntries ?? []),
      ...(u ? hn : []),
      "-c",
      "http.proxyAuthMethod=basic",
      ...(a && l ? L2o(e.gitURL) : []),
      ...(c ? D2o(e.gitURL) : []),
      ...(e.governedMount && l ? H5s : []),
      ...n,
    ],
    T = c ?? e.token,
    G = R.map((J) => Vn(J, e.authURL, e.gitURL, T));
  e.onDebug(`[byoc:git] git ${G.join(" ")} (dir=${t || "."})`);
  let b = !l || a || Boolean(e.token),
    P = {
      ...process.env,
      ...e.gitEnvironment?.envOverrides,
      ...r,
      ...(c ? { [Jzr]: c } : void 0),
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
      ...(a ? { GIT_CONFIG_GLOBAL: "/dev/null" } : void 0),
      ...(b ? { GIT_CONFIG: void 0 } : void 0),
      GIT_TERMINAL_PROMPT: "0",
      GCM_INTERACTIVE: _we.GCM_INTERACTIVE,
      LC_ALL: "C",
      GIT_PROGRESS_DELAY: "0",
      ...K6e,
      ...(e.authURL.startsWith("file://") && {
        GIT_ALLOW_PROTOCOL: `file:${K6e.GIT_ALLOW_PROTOCOL}`,
      }),
      GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
      ...(u && { GIT_ALLOW_PROTOCOL: "none", GIT_SSH_COMMAND: "false" }),
    };
  if (b) {
    for (let J of Object.keys(P))
      if (J.toUpperCase() === "GIT_CONFIG") P[J] = void 0;
  }
  let { signal: g, dispose: k } = Mn(e.signal, i),
    v = d !== void 0 && Jt.has(d) ? qzr : (e.watchdog?.silenceMs ?? ut),
    h = v,
    O = h,
    y,
    D,
    E = Date.now(),
    B = e.watchdog?.preTransferCapMs ?? Vt(),
    ne,
    ce = new Set(),
    M,
    U = Math.min(B, Wt),
    I,
    le = !1,
    ke = { active: !1 },
    H = Date.now();
  try {
    return await new Promise((X, q) => {
      let W = Ft("git", R, {
          cwd: t || void 0,
          windowsHide: !0,
          ...Fp("helper"),
          env: P,
          stdio: ["ignore", "pipe", "pipe"],
        }),
        Oe = 10485760,
        we = 8192,
        Y = 0,
        re = [],
        N = "",
        ie = !1,
        Te = 0,
        F = -1,
        ye,
        $e = (S) => {
          if (typeof S === "object" && "unref" in S) S.unref();
          return S;
        },
        oe = !1,
        Le,
        je = (S) => {
          if (y === void 0) y = S;
          (W.kill("SIGTERM"),
            (Le ??= $e(
              setTimeout(() => {
                if (oe) return;
                (W.kill("SIGKILL"),
                  (y = "escalated"),
                  (oe = !0),
                  q(
                    Object.assign(Error("git did not exit after SIGTERM"), {
                      stdout: Buffer.concat(re).toString("utf8"),
                      stderr: N,
                    }),
                  ));
              }, Ne),
            )));
        },
        kt = 0,
        Re = (S = v) => (
          (kt = Date.now() + S),
          $e(setTimeout((x) => x("silence"), S, je))
        ),
        Z = Re(h);
      (W.stdout.on("data", (S) => {
        if (Y < 10485760) (re.push(S), (Y += S.length));
        else if (o) o.stdoutTruncated = !0;
      }),
        W.stderr.on("data", (S) => {
          let x = S.toString("utf8"),
            Q = N + x;
          if (Q.length > 8192) le = !0;
          N = Q.slice(-8192);
          let ve = Xt(x, ie),
            { display: V, client: j, server: Se } = ve;
          if (x.length > 0) ie = !/[\r\n]$/.test(x);
          if (o !== void 0) {
            if ((Zt(ke, ve, Date.now()), ke.active)) o.sawRemoteActivity = !0;
          }
          if (j) {
            if (o !== void 0) o.sawClientProgress = !0;
            if (v < et && tn(j))
              ((v = et), (O = v), clearTimeout(Z), (Z = Re()));
            if (Qt(D, j))
              ((E = Date.now()), clearTimeout(Z), (O = v), (Z = Re()));
            if (
              ((D = j),
              o !== void 0 &&
                j.bytes !== void 0 &&
                j.label === Yt &&
                j.bytes > (o.transferBytes ?? -1))
            )
              o.transferBytes = j.bytes;
          } else if (Se !== void 0 && D === void 0) {
            if (en(ne, ce, Se)) {
              ne = Se;
              let ue = H + B - Date.now();
              if (B > 0 && ue > 0) {
                ((M = Date.now()), clearTimeout(Z));
                let fe = Math.min(v, ue),
                  Ke = H + h - Date.now();
                if (
                  ((O = fe > Ke ? v : h),
                  (Z = Re(Math.max(fe, Ke))),
                  o !== void 0)
                )
                  o.sawServerProgress = !0;
              }
            }
            ce.add(Se.label);
          }
          if (V) {
            if (V.label !== ye) ((ye = V.label), (F = -1));
            let ue = Math.floor(V.pct / 10),
              fe = Date.now() - Te;
            if (fe >= zt && (fe >= Kt || ue > Math.floor(F / 10))) {
              ((Te = Date.now()), (F = V.pct));
              try {
                (e.onDebug(`[byoc:git] ${d ?? "git"}: ${V.raw}`),
                  e.onProgress?.(d ?? "git", V));
              } catch {}
            }
          }
        }));
      let De = () => {
        if (e.signal?.aborted)
          (W.kill("SIGTERM"),
            (Le ??= $e(
              setTimeout(() => {
                if (oe) return;
                (W.kill("SIGKILL"), (oe = !0));
                let S = Error("The operation was aborted");
                ((S.name = "AbortError"), q(Object.assign(S, { stderr: N })));
              }, Ne),
            )));
        else je("hard-cap");
      };
      if (g.aborted) De();
      else g.addEventListener("abort", De, { once: !0 });
      let Ie;
      (W.on("error", (S) => {
        Ie = S;
      }),
        W.on("close", (S, x) => {
          if (oe) return;
          if (
            ((oe = !0),
            clearTimeout(Z),
            clearTimeout(Le),
            g.removeEventListener("abort", De),
            o !== void 0)
          )
            ((o.exitCode = S), (o.wroteStderr = N.length > 0));
          let Q = Buffer.concat(re).toString("utf8");
          if (e.signal?.aborted && y === void 0) {
            let V = Error("The operation was aborted");
            return (
              (V.name = "AbortError"),
              q(Object.assign(V, { stdout: Q, stderr: N, code: S, signal: x }))
            );
          }
          if (Ie) return q(Object.assign(Ie, { stdout: Q, stderr: N }));
          if (S === 0) return X(Q);
          let ve = Error(
            x !== null
              ? `git exited on signal ${x}`
              : `git exited with code ${S}`,
          );
          q(Object.assign(ve, { stdout: Q, stderr: N, code: S, signal: x }));
        }));
    });
  } catch (J) {
    let X = J;
    if (y !== void 0) {
      let we = D
          ? ` at ${D.label} ${D.pct}%${D.total ? ` (${D.done}/${D.total})` : ""}`
          : "",
        Y = Date.now(),
        re = Y - E,
        N = "",
        ie = `no forward progress for ${re}ms (budget ${O}ms)${we}`;
      if (D === void 0 && ne !== void 0 && M !== void 0) {
        let F = ne,
          ye =
            F.done !== void 0
              ? F.pct > 0
                ? ` ${F.pct}% (${F.done}${F.total !== void 0 ? `/${F.total}` : ""})`
                : ` ${F.done}`
              : ` ${F.pct}%`;
        ((N = ` \u2014 no pack data received; server-side progress last advanced ${Y - M}ms ago at ${F.label}${ye}`),
          (ie =
            B >= h && Y - H >= B
              ? `pre-transfer cap ${B}ms reached with no client-side progress${N}`
              : `no client-side progress for ${Y - H}ms and server-side progress stopped advancing (budget ${O}ms)${N}`));
      }
      if (D === void 0 && I !== void 0)
        ie += ` \u2014 the server's last keep-alive came ${Y - I}ms ago (keep-alives can hold an attempt open for ${U}ms at most)`;
      let Te =
        y === "silence"
          ? ie
          : y === "hard-cap"
            ? `hard cap ${i}ms after ${Y - H}ms${we}${N}`
            : `did not exit within ${Ne}ms of SIGTERM (D-state? \u2014 last forward ${re}ms ago)${we}`;
      e.onDebug(
        `[runner:stuck] git ${G.join(" ")} (dir=${t || "."}) \u2014 ${Te} \u2014 killing subprocess`,
      );
    }
    let q =
        X.stderr !== void 0 && X.stderr.length > 0
          ? rn(X.stderr, le, e.authURL, T)
          : Gt(Zzr(X.stdout || X.message || "", e.authURL, T)).slice(0, Ee),
      W = y !== void 0 ? ` (watchdog: ${y})` : "",
      Oe = `git ${d ?? "?"} failed${W}: `;
    throw HQe(Error(Oe + q), Oe);
  } finally {
    if (o !== void 0 && y !== void 0) o.killReason = y;
    k();
  }
}
function XXn(e) {
  return (
    e.startsWith("https://") ||
    e.startsWith("http://") ||
    e.startsWith("ssh://") ||
    (!e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e))
  );
}
function Mn(e, t) {
  let n = new AbortController(),
    r = setTimeout((a) => a.abort(), t, n);
  if (typeof r === "object" && "unref" in r) r.unref();
  let i;
  if (e) {
    if (e.aborted) {
      (clearTimeout(r), n.abort());
      let a = () => {};
      return { signal: n.signal, dispose: a, [Symbol.dispose]: a };
    }
    ((i = () => {
      (clearTimeout(r), n.abort());
    }),
      e.addEventListener("abort", i, { once: !0 }));
  }
  n.signal.addEventListener("abort", () => clearTimeout(r));
  let o = () => {
    if ((clearTimeout(r), e && i)) e.removeEventListener("abort", i);
  };
  return { signal: n.signal, dispose: o, [Symbol.dispose]: o };
}
function Un(e) {
  if (e.url) {
    if (!XXn(e.url))
      throw Error(
        `Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${e.url}`,
      );
    return e.url;
  }
  switch (e.type) {
    case "github":
      return `https://github.com/${e.repo}`;
    case "github-ssh":
      throw Error(
        `github-ssh source for '${e.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`,
      );
    case "test-file":
      return `file://${e.repo}`;
    default:
      throw Error(`Unsupported git source type: ${e.type}`);
  }
}
function L5s(e, t) {
  if (!t) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let n;
  try {
    n = new URL(e);
  } catch {
    return e;
  }
  if (n.protocol !== "https:") return e;
  if (t.startsWith("sk-ant-ccsr-")) ((n.username = "unused"), (n.password = t));
  else n.username = t;
  return n.toString();
}
function C5t(e, t) {
  if (t.type === "test-file") {
    let r = Ge(t.repo);
    if (!r || r === "." || r === "..") return "";
    return C(e, r);
  }
  let n = t.repo.split("/").filter((r) => r.length > 0);
  if (n.length === 0) return "";
  for (let r of n) if (r === "." || r === "..") return "";
  return C(e, ...St(n));
}
function N2o(e) {
  let t = e.repo.split("/").filter((n) => n.length > 0);
  for (let n of t) if (n === "." || n === "..") return "";
  return St(t).join("-");
}
var at = /[:*?[\\]|^address-[0-9a-f]{16}$/iu;
function St(e) {
  let t = e.findIndex((i) => at.test(i));
  if (t === -1) return e;
  let n = e.findLastIndex((i) => i.includes("@") || at.test(i)),
    r = Qe(e.slice(t, n + 1).join("/")).slice(0, 16);
  return [...e.slice(0, t), `address-${r}`, ...e.slice(n + 1)];
}
function Pt(e, t) {
  let n = ae(ae(_e(t)));
  return Ge(n) === "_sessions" && _e(e).startsWith(ae(n) + me) ? n : Hn(e, t);
}
function Hn(e, t) {
  let n = _e(e).split(me),
    r = _e(t).split(me),
    i = 0;
  while (i < n.length && i < r.length && n[i] === r[i]) i++;
  return i >= 2 ? n.slice(0, i).join(me) : void 0;
}
async function PAa(e) {
  let {
    canonicalRepoPath: t,
    secondClones: n,
    worktreePath: r,
    ref: i,
    onDebug: o,
    signal: a,
    gitEnvironment: d,
  } = e;
  if (r === t)
    throw Error(
      "addSessionWorktree: worktreePath must not equal canonicalRepoPath",
    );
  if (Fe.has(r))
    throw new Xzr(
      `The session did not start: an earlier start on this runner has not finished moving ${r} aside. Ask whoever runs this runner to check that disk and, once it answers, to restart the runner.`,
    );
  let l = {
      repoPath: t,
      gitURL: "",
      authURL: "",
      originURL: "",
      gitEnvironment: d,
      onDebug: o,
      signal: a,
    },
    c = (
      await p(l, t, ["rev-parse", "--verify", "FETCH_HEAD^{commit}"], { ...z })
    ).trim(),
    u;
  try {
    u = (
      await p(l, r, ["--git-dir", C(r, ".git"), "rev-parse", "HEAD"], { ...z })
    ).trim();
  } catch (g) {
    if (a?.aborted) throw g;
  }
  let R = (g) =>
      Ui(
        Ve(g),
        te,
        `[runner:stuck] realpath ${g} (check NFS/CSI mount health)`,
      ),
    T = async (g) =>
      R(_e(g, (await p(l, g, ["rev-parse", "--git-common-dir"])).trim())),
    G = async (g) => {
      if (
        !(await R(g).then(
          () => !0,
          (O) => t.startsWith(g + me) || (An(O) ? !1 : Promise.reject(O)),
        ))
      )
        return;
      let v = await T(r);
      return [C(await R(ae(r)), Ge(r), ".git"), await T(t)].includes(v)
        ? void 0
        : v;
    };
  if (u === c && n !== void 0) {
    let g = await G(n.folder).catch((k) => {
      (a?.throwIfAborted(),
        o(`[byoc:git] look at ${r} failed: ${o9(_(L(k)))}`),
        n.onWarning(
          `could not tell which clone ${r} belongs to, so it is used as it is. If its .git file names a clone other than ${t}, its git push and fetch can go to another git server: copy its changes, then stop the session and start it again.`,
        ));
      return;
    });
    if (g !== void 0) {
      let k = `${r}.left-${dt().slice(0, 8)}`,
        v = o9(_(g)),
        h = (y) =>
          Ui(
            y,
            te,
            `[runner:stuck] move ${r} aside (check NFS/CSI mount health)`,
          ),
        O = !1;
      (Fe.add(r),
        await h(
          xt(r, k)
            .finally(() => Fe.delete(r))
            .then(() =>
              n.onWarning(
                O
                  ? `the move of ${r} to ${k} ended after the start had failed. Its .git is not renamed, so do not run git there. If another runner has started the session on this disk since, these are its live files: stop the session before you touch them.`
                  : `the checkout that an earlier start left at ${r} belongs to another clone (${v}), which may be another git server's. It is now at ${k}, and the session starts in a new checkout without its uncommitted changes. Copy the files that you need (do not run git there), then delete it: until then a server-supplied idle limit does not release the session. With --remove-session-state it is deleted when this session stops.`,
              ),
            ),
        ).catch((y) => {
          throw (
            (O = !0),
            new Xzr(
              `The session did not start: the checkout that an earlier start left at ${r} belongs to another clone (${v}), which may be another git server's, and could not be renamed to ${k} (${w(y) ?? "the disk gave no answer, so it may be there by now"}). With --remove-session-state its uncommitted changes are deleted now. Otherwise ask whoever runs this runner to copy them out of ${ae(r)}, close what holds that folder or move it away (once the disk answers), and restart the runner.`,
            )
          );
        }),
        (u = void 0),
        await h(Aja(k, ".git", ".git.left")).catch(() =>
          n.onWarning(
            `could not rename the .git in ${k}, so a git push from there can still go to another git server. Do not run git there.`,
          ),
        ));
    }
  }
  if (u === c) {
    let g = (await p(l, r, ["rev-parse", "--absolute-git-dir"])).trim();
    (await qe(
      C(g, "FETCH_HEAD"),
      `${c}
`,
    ).catch(() => {}),
      o(
        `[byoc:git] Worktree ${r} already at ${c.slice(0, 12)} \u2014 keeping`,
      ));
    return;
  }
  (o(
    u
      ? `[byoc:git] Worktree ${r} at wrong commit ${u.slice(0, 12)}, clearing before re-add`
      : `[byoc:git] Clearing ${r} before worktree add`,
  ),
    await Ui(
      Cja(r, Pt(t, r)),
      qzr,
      `[runner:stuck] rm ${r} (check NFS/CSI mount health)`,
    ).catch((g) => {
      o(`[byoc:git] rm ${r} failed (continuing): ${g}`);
    }));
  let b = await Ui(
    At(r).then((g) => j0t(t, g)),
    te,
    `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`,
  ).then(
    (g) => {
      if (g.outcome === "kept")
        o(
          `[byoc:git] left the worktree registration of ${r} in place: ${g.reason}`,
        );
      return !0;
    },
    (g) => (o(`[byoc:git] worktree deregister did not finish: ${g}`), !1),
  );
  await xn(l, t, r, c, b);
  let P = (await p(l, r, ["rev-parse", "--absolute-git-dir"])).trim();
  (await qe(
    C(P, "FETCH_HEAD"),
    `${c}
`,
  ),
    o(`[byoc:git] Added worktree ${r} at ${c.slice(0, 12)} (detached)`));
}
async function xn(e, t, n, r, i) {
  let o = () => p(e, t, ["worktree", "add", "--detach", n, r]);
  try {
    await o();
    return;
  } catch (a) {
    if (!i || !L(a).includes("is a missing but already registered worktree"))
      throw a;
    let d = await Ui(
      Promise.all([Ve(t), At(n)]).then(([l, c]) =>
        rqe(
          C(l, ".git"),
          { worktreePath: c, repoSpelled: t },
          { locked: "keep" },
        ),
      ),
      te,
      `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`,
    ).catch((l) => ({ outcome: "kept", reason: L(l) }));
    if (d.outcome !== "dropped")
      throw (
        e.onDebug(
          `[byoc:git] git still registers ${n} with its folder gone, and the registration could not be dropped${d.outcome === "kept" ? `: ${d.reason}` : ""}; not retrying`,
        ),
        a
      );
    e.onDebug(
      `[byoc:git] dropped the registration git still had for ${n} with its folder gone; retrying worktree add`,
    );
  }
  await o();
}
async function At(e) {
  let t = await Ve(ae(e)).catch(() => null),
    n = t === null ? null : C(t, Ge(e));
  return n === null || n === e ? [e] : [e, n];
}
async function OAa(e) {
  let { worktrees: t, onDebug: n } = e;
  for (let { canonicalRepoPath: r, worktreePath: i } of t) {
    let o = { repoPath: r, gitURL: "", authURL: "", originURL: "", onDebug: n };
    if (
      await Ui(
        Mt(i).then(
          () => !1,
          (d) => An(d),
        ),
        te,
        `[runner:stuck] worktree probe ${i} (check NFS/CSI mount health)`,
      ).catch(() => !1)
    )
      continue;
    try {
      if (!(await fvt(i))) {
        n(`[byoc:git] kept worktree ${i} \u2014 unremovable reparse point`);
        continue;
      }
      let d = await Ui(
        TXt(r, i, {
          trustedRoot: Pt(r, i),
          deregisterIfStopped: !0,
          pointerFirst: !0,
        }),
        qzr,
        `[runner:stuck] remove ${i} (check NFS/CSI mount health)`,
      );
      if (d.outcome === "unanchored")
        await p(o, r, ["worktree", "remove", "--force", i]);
      else if (d.outcome !== "removed") {
        n(`[byoc:git] worktree remove ${i} failed: ${Zet(d)}`);
        continue;
      }
      n(`[byoc:git] Removed worktree ${i}`);
    } catch (d) {
      n(`[byoc:git] worktree remove ${i} failed: ${d}`);
    }
  }
  for (let { canonicalRepoPath: r, worktreePath: i } of t)
    await Ui(
      j0t(r, i),
      te,
      `[runner:stuck] worktree deregister ${r} (check NFS/CSI mount health)`,
    ).then(
      (o) => {
        if (o.outcome === "kept")
          n(
            `[byoc:git] left the worktree registration of ${i} in place: ${o.reason}`,
          );
      },
      (o) => {
        n(`[byoc:git] worktree deregister did not finish: ${o}`);
      },
    );
}
function Wn(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.branches ?? [],
      [i, ...o] = r;
    if (o.length > 0)
      throw Error(
        `Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`,
      );
    if (i) t.set(n.repo, i);
  }
  return t;
}
function Vn(e, t, n, r) {
  if (e === t && e !== n) return de(e);
  if (e.includes("://") && e.includes("@")) return de(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}
function Zzr(e, t, n) {
  if (t && /:\/\/[^/]*@/.test(t)) e = e.split(t).join(de(t));
  if (n) e = e.split(n).join("<token>");
  return e
    .replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>")
    .replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>")
    .replace(/github_pat_[A-Za-z0-9_]+/g, "<token>")
    .replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>")
    .replace(
      /gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g,
      "<token>",
    );
}
function de(e) {
  let t;
  try {
    t = new URL(e);
  } catch {}
  if (t && (t.username || t.password)) {
    let i = t.search || "",
      o = t.hash || "";
    return `${t.protocol}//<token>@${t.host}${t.pathname}${i}${o}`;
  }
  if (t) return e;
  let n = e.indexOf("@"),
    r = e.indexOf("://");
  if (r >= 0 && n > r) return e.slice(0, r + 3) + "<token>" + e.slice(n);
  return e;
}
function L(e) {
  return e instanceof Error ? e.message : String(e);
}
var Ct = /^(remote:\s+)?(fatal|error):/i;
function Gt(e) {
  if (!e) return "";
  let t = [];
  for (let r of e.split(`
`))
    if (Ct.test(r)) t.push(r);
  if (t.length === 0) return e;
  let n = t.join(`
`);
  if (e.startsWith(n)) return e;
  return (
    n +
    `
` +
    e
  );
}
export {
  CAa,
  vwn,
  KXn,
  HQe,
  Twn,
  Kzr,
  M2o,
  qzr,
  Yzr,
  qXn,
  Cwn,
  Xzr,
  AAa,
  H2o,
  V9,
  K6e,
  RAa,
  YXn,
  xAa,
  Awn,
  Rwn,
  Jzr,
  H5s,
  D5s,
  Qzr,
  D2o,
  L2o,
  XXn,
  L5s,
  C5t,
  N2o,
  PAa,
  OAa,
  Zzr,
};
