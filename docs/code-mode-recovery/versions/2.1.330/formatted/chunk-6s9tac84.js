// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { N, tu } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { f, fe } from "/$bunfs/root/chunk-78g0060s.js";
import { d, w } from "/$bunfs/root/chunk-jv7av99m.js";
import { pg, rp, fa, Z8, uC } from "/$bunfs/root/chunk-z6pfqf6e.js";
import { t, _ } from "/$bunfs/root/chunk-w578pjby.js";
import { Ze } from "/$bunfs/root/chunk-2gtmjt3y.js";
import { ia, RF } from "/$bunfs/root/chunk-kpby9tcv.js";
import { qa, nt, Ir, ed, I_ } from "/$bunfs/root/chunk-7cfjrnwy.js";
import { Yn } from "/$bunfs/root/chunk-kx2fp6pc.js";
import { Jv, BH } from "/$bunfs/root/chunk-1ag56sne.js";
import { JXe, Ef, lt } from "/$bunfs/root/chunk-rb36kwbn.js";
import { x, Qxt } from "/$bunfs/root/chunk-cg8dqz0a.js";
import { rx, dse, S4t, s } from "/$bunfs/root/chunk-c203g5kd.js";
import { Zxt } from "/$bunfs/root/chunk-ds5wjsjg.js";
import { xt } from "/$bunfs/root/chunk-n2dbhmj2.js";
import {
  Xin,
  cHi,
  Lfl,
  PSr,
  Pho,
  Eit,
  phs,
  Nfl,
  uHi,
  OSr,
  fHi,
  IBt,
  ZFn,
  pHi,
  _0e,
  Jin,
  vit,
  Ffl,
  ISr,
  Oho,
  S8e,
  Hb,
  Rkt,
  mHi,
  MSr,
  Iho,
  gHi,
  y0e,
} from "/$bunfs/root/chunk-1z1bgjzv.js";
import { yOe, Rg, Hqt, Gy } from "/$bunfs/root/chunk-w5s307zm.js";
import { a } from "/$bunfs/root/chunk-y53wbr8a.js";
import {
  Hr,
  vOe,
  Nn,
  aQe,
  COe,
  wft,
  Y0s,
  ms,
  L8,
} from "/$bunfs/root/chunk-gd77dyw4.js";
import { v0s, T0s, ut } from "/$bunfs/root/chunk-7fsmgfxx.js";
import { Ro } from "/$bunfs/root/chunk-43nz5n02.js";
import { vl, XMr } from "/$bunfs/root/chunk-2yx6c1y2.js";
import { yDo } from "/$bunfs/root/chunk-8hfdvrr1.js";
import { Zi } from "/$bunfs/root/chunk-khxw3ng0.js";
import { Xu } from "/$bunfs/root/chunk-6mfepmbb.js";
import { Ts, WA } from "/$bunfs/root/chunk-xzvhvaa2.js";
import { ihn } from "/$bunfs/root/chunk-kypvvv9j.js";
import { hna, Ext } from "/$bunfs/root/chunk-3hr8g93j.js";
import { Hs } from "/$bunfs/root/chunk-r6r2wdsw.js";
import { Uae, fsn, bAe, rpo } from "/$bunfs/root/chunk-ha393e1n.js";
import { Gc } from "/$bunfs/root/chunk-5e3gtsn9.js";
import { XGi, HTl, wGt, fxe } from "/$bunfs/root/chunk-d70fgf5t.js";
import { OWe, zrl, zhr } from "/$bunfs/root/chunk-dkc86g0t.js";
import { lV } from "/$bunfs/root/chunk-1p0ddgd7.js";
import { EAe, ull } from "/$bunfs/root/chunk-hvfkrhr2.js";
import { Ug, I2e } from "/$bunfs/root/chunk-zsz02y6d.js";
import { j2t } from "/$bunfs/root/chunk-y2bpkgdh.js";
import { Bo } from "/$bunfs/root/chunk-cd75h1kz.js";
import { Pn } from "/$bunfs/root/chunk-qwbhh2k3.js";
import { cr, mO } from "/$bunfs/root/chunk-jxja0v0z.js";
import { j } from "/$bunfs/root/chunk-2904xtvq.js";
import { U, M } from "/$bunfs/root/chunk-4smdap7r.js";
import { realpathSync as sr } from "fs";
import { isAbsolute as qe, parse as ar, resolve as dr } from "path";
var lr = /[*?[\]{}]/;
function Zds(e) {
  if (!qe(e)) return null;
  let n = x() === "windows",
    r = e.split(n ? /[\\/]/ : "/"),
    i = r.findIndex((l) => lr.test(l)),
    c = (i === -1 ? r : r.slice(0, i))
      .join(n ? "\\" : "/")
      .replace(n ? /[\\/]+$/ : /\/+$/, "");
  if (c === "") return ar(e).root || "/";
  return n && /^[A-Za-z]:$/.test(c) ? `${c}\\` : c;
}
function ur(e) {
  let n = x() === "windows" ? /^\/([A-Za-z])(?=\/|$)/.exec(e) : null;
  return n === null ? e : `${n[1].toUpperCase()}:${e.slice(2) || "\\"}`;
}
function Fn(e, n) {
  let r = ur(e);
  if (r !== e) return M([...Xe(r, n), ...Xe(e, n)]);
  return Xe(e, n);
}
function Xe(e, n) {
  let r = e.startsWith("~") || qe(e) ? e : dr(n, e),
    i = Pho(ZFn(r, n, { pattern: !0 }), n, y0e(), { pattern: !0 }),
    { spelling: o, verdict: c } = i;
  if (c !== "local")
    return (
      t(
        `[sandboxReach] write root ${r} cannot be vouched for (${c}): counted as every volume`,
        { level: "warn" },
      ),
      [...vit(c === "foreign" ? { ...i, verdict: "opaque" } : i, n)]
    );
  let l = Zds(o),
    u;
  try {
    u = Zds(Jv(o));
  } catch {
    u = null;
  }
  let g = [l, u].filter((h) => h !== null),
    m = g.flatMap((h) => {
      try {
        let p = sr(h);
        return qe(p) ? [p] : [];
      } catch {
        return [];
      }
    });
  return M([...g, ...m]);
}
function RWe(e, n, r) {
  let i;
  try {
    i = r === void 0 ? vl(e) : r;
  } catch {
    return [];
  }
  let o = [];
  for (let c of i?.permissions?.allow ?? [])
    try {
      let l = Uae(c);
      if (l.toolName === lt && l.ruleContent && !yDo(l.ruleContent))
        o.push(fsn(l.ruleContent, e));
    } catch {}
  for (let c of i?.sandbox?.filesystem?.allowWrite ?? [])
    try {
      o.push(bAe(c, e));
    } catch {}
  for (let c of i?.permissions?.additionalDirectories ?? [])
    try {
      o.push(xt(c, n));
    } catch {}
  return o;
}
function pst(e) {
  let n = [Ug(), I2e()];
  try {
    n.push(...BH());
  } catch {}
  try {
    let r = rpo(e);
    if (r) n.push(r);
  } catch {}
  for (let r of tu())
    try {
      n.push(xt(r, e));
    } catch {}
  return M(n.flatMap((r) => Fn(r, e)));
}
function xWe(e, n, r) {
  return M((r ?? RWe(n, e)).flatMap((i) => Fn(i, e)));
}
function Lhr(e) {
  return M([...pst(e), ...Ts.flatMap((n) => xWe(e, n, null))]);
}
var fr = WA;
function ze(e) {
  let n = fr.map((r) => ({ source: r, read: gr(r) }));
  return n.some(({ read: r }) => r === "unreadable")
    ? "unreadable"
    : M(
        n.flatMap(({ source: r, read: i }) =>
          i === "unreadable"
            ? []
            : xWe(
                e,
                r,
                i.flatMap((o) => RWe(r, e, o)),
              ),
        ),
      );
}
function gr(e) {
  try {
    let n = XMr(e);
    if (n.kind === "unreadable" || n.kind === "unreadable_for_now")
      return "unreadable";
    if (n.kind === "in_effect") return [n.settings];
    return "unreadable";
  } catch {
    return "unreadable";
  }
}
import {
  access as _r,
  lstat as X,
  mkdir as sn,
  mkdtemp as wr,
  open as Re,
  readdir as ye,
  readFile as ot,
  realpath as he,
  rm as hn,
  stat as yr,
  symlink as Er,
  writeFile as en,
} from "fs/promises";
import {
  closeSync as br,
  constants as Pe,
  lstatSync as pn,
  openSync as kr,
  readdirSync as st,
  readlinkSync as at,
  readSync as Sr,
  realpathSync as dt,
  statfsSync as Tr,
} from "fs";
import {
  devNull as Rr,
  homedir as Ee,
  release as Or,
  tmpdir as Cr,
  userInfo as Pr,
} from "os";
import {
  basename as ke,
  delimiter as we,
  dirname as V,
  isAbsolute as Y,
  join as E,
  parse as $e,
  relative as an,
  resolve as Le,
  sep as Z,
} from "path";
var Mrl = "git's own message is not shown, because it can quote private files";
function PWe(e) {
  return e.withheldStderr?.() ?? e.stderr;
}
function Qe(e) {
  let n = e.stderr;
  return n === ""
    ? e
    : {
        ...e,
        stderr:
          "git's own message is not shown, because it can quote private files",
        withheldStderr: () => n,
      };
}
var mr = [
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "GIT_CONFIG_NOSYSTEM",
    "HOME",
    "XDG_CONFIG_HOME",
    "HOMEDRIVE",
    "HOMEPATH",
    "USERPROFILE",
    "PROGRAMDATA",
    "PATH",
  ],
  hr = new Set(
    [
      ...mr,
      ...Xin,
      ...XGi,
      ...vOe,
      "NO_PROXY",
      "GNUPGHOME",
      "SSH_AUTH_SOCK",
      "NoDefaultCurrentDirectoryInExePath",
    ].map((e) => e.toUpperCase()),
  ),
  pr = /^INPUT_|-/i;
function $n(e) {
  let n = Hs(),
    r = [
      e,
      { CLAUDE_CODE_HOST_AUTH_ENV_VAR: s.CLAUDE_CODE_HOST_AUTH_ENV_VAR },
    ].map((i) => L8(i)?.toUpperCase());
  return Hr(
    e,
    (i, o) =>
      (hr.has(o.toUpperCase()) && !r.includes(o.toUpperCase())) ||
      (!pr.test(o) && Zi(n, o) === i),
  );
}
function xe(e) {
  return e;
}
var Nr = [
  [
    "fatal: detected dubious ownership in repository at ",
    "git_refused_dubious_ownership",
  ],
  ["fatal: unsafe repository (", "git_refused_dubious_ownership"],
  ["fatal: not a git repository", "git_refused_not_a_repository"],
  ["fatal: bad config ", "git_refused_bad_config"],
  ["fatal: bad numeric config value ", "git_refused_bad_config"],
  ["fatal: bad boolean config value ", "git_refused_bad_config"],
  ["fatal: unable to access ", "git_refused_config_unreadable"],
  ["fatal: unknown repository extension", "git_refused_unknown_extension"],
  ["fatal: Expected git repo version ", "git_refused_unknown_extension"],
];
function ZTi(e) {
  return Nr.find(([n]) => e.startsWith(n))?.[1];
}
function cw(e, n, r) {
  let i = r.input === void 0 ? {} : { input: r.input };
  if (!r.hardened)
    return mLn([...Nn, ...n], {
      cwd: e,
      abortSignal: r.signal,
      ...i,
      ...ecs(r.env),
      ...(r.maxBuffer !== void 0 && { maxBuffer: r.maxBuffer }),
    });
  let o =
    r.reach ??
    (r.reachRoots !== void 0
      ? Ae(r.reachRoots)
      : r.layout === void 0
        ? void 0
        : It(r.layout));
  if (o === re) return Promise.resolve({ stdout: "", stderr: Be, code: 126 });
  let c = r.probes ?? ADe(),
    l = r.screenMemo ?? c.screenMemo,
    u = m$t(o, l),
    g = be(u, c);
  if (g === null)
    return Promise.resolve({
      stdout: "",
      stderr:
        o === void 0 || be(G6(void 0), c) === null
          ? Ne
          : `${ho}${mo(r.layout?.workTree ?? e)}. ${tCi}`,
      code: 127,
    });
  let m = [];
  if (m === void 0)
    return Promise.resolve({ stdout: "", stderr: Ii, code: 126 });
  let h = [
    {
      file: g,
      startsOutside:
        o !== void 0 &&
        !(
          r.startsInProject ||
          r.reachRoots?.startsInProject ||
          r.layout?.startsInProject
        ),
    },
    [...Nn, ...Ko, ...m, ...n],
    {
      dir: r.layout?.workTree ?? e,
      abortSignal: r.signal,
      maxBuffer: Math.min(r.hardenedMaxBuffer ?? it, it),
      ...i,
      ...(r.stripFinalNewline === !1 && { stripFinalNewline: !1 }),
      ...(r.encoding !== void 0 && { encoding: r.encoding }),
      ...(r.stdoutFd !== void 0 && { stdout: r.stdoutFd }),
      env: {
        ...Fr(
          ms(
            {
              ...bn(u),
              ...En(u),
              ...Uo,
              ...(n[0] === "for-each-ref" && jo),
              ...(r.layout && $o(r.layout)),
              ...(r.layout?.borrowedObjects !== void 0 && {
                GIT_ALTERNATE_OBJECT_DIRECTORIES: zrl(r.layout.borrowedObjects),
              }),
              ...r.layout?.configPins,
              ...r.env,
            },
            { base: u },
          ),
        ),
        ...(r.layout && OWe),
      },
    },
  ];
  return gLn(...h).then(Qe);
}
var Ar = new Set([
    ...COe,
    "GIT_CONFIG_NOSYSTEM",
    "GIT_REFERENCE_BACKEND",
    "GIT_EXEC_PATH",
    "GIT_ATTR_SOURCE",
    "GIT_SSH",
    "GIT_SSH_COMMAND",
    "GIT_ASKPASS",
    "SSH_ASKPASS",
    "HOME",
    "XDG_CONFIG_HOME",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "PROGRAMDATA",
    "PATH",
    "GIT_EXTERNAL_DIFF",
    "GIT_DIFF_OPTS",
    "GIT_PAGER",
    "GIT_TEMPLATE_DIR",
    "GIT_SSH_VARIANT",
    "SSH_ASKPASS_REQUIRE",
    "GIT_HTTP_PROXY_AUTHMETHOD",
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "ALL_PROXY",
    "NO_PROXY",
    "CURL_CA_BUNDLE",
    "SSL_CERT_FILE",
    "SSL_CERT_DIR",
    "NIX_SSL_CERT_FILE",
    "SSLKEYLOGFILE",
    "GIT_ALLOW_PROTOCOL",
    ...Xin,
    ...Object.keys(T0s),
  ]),
  vr = /^GIT_(?:CURL_|LFS_|TRACE|TRANSFER_TRACE$|REDIRECT_STD)/i,
  xr = (e) =>
    Ar.has(e.toUpperCase()) ||
    wft.test(e) ||
    vr.test(e) ||
    Y0s.test(e) ||
    fxe(e) ||
    wGt(e);
function ecs(e) {
  let n = { ...ct(), ...e },
    r = Ot({ ...process.env, ...n }),
    i = { ...n, ...r };
  return Object.keys(i).length > 0 ? { env: i } : {};
}
function Gr() {
  return be(hLn());
}
function mLn(e, n) {
  let r = Gr(),
    i = { ...n, encoding: n.encoding ?? hna };
  return r === null
    ? Promise.resolve({ stdout: "", stderr: `${Ne}${To()}`, code: 127 })
    : ut(r, e, i).then(Qe);
}
function hLn() {
  return Rt({ ...process.env, ...ct() });
}
function ct() {
  if (Gc() === void 0) return {};
  let e = Se(),
    n = process.env,
    r = x() === "windows" ? (c) => c.toUpperCase() : (c) => c,
    i = new Map(Object.keys(n).map((c) => [r(c), c])),
    o = new Map(Object.keys(e).map((c) => [r(c), c]));
  return Object.fromEntries(
    M([...i.keys(), ...o.keys()]).flatMap((c) => {
      let l = i.get(c),
        u = o.get(c),
        g = l ?? u ?? c,
        m = u === void 0 ? void 0 : e[u];
      if (!xr(g) || (l === void 0 ? void 0 : n[l]) === m) return [];
      return [[g, m ?? Lr(g)]];
    }),
  );
}
var Dr = T0s,
  Lr = (e) => Dr[e.toUpperCase()],
  Nhr = { GIT_REFERENCE_BACKEND: void 0 };
function Fr(e) {
  let n = new Set(["GIT_CONFIG", "GIT_ATTR_SOURCE", ...Object.keys(Nhr)]),
    r = Object.keys(e).filter((i) => n.has(i.toUpperCase()));
  return {
    ...e,
    ...Object.fromEntries(r.map((i) => [i, void 0])),
    GIT_CONFIG: void 0,
    GIT_ATTR_SOURCE: void 0,
    ...Nhr,
  };
}
function ft(e) {
  return e !== void 0 && e !== "files" && e !== "reftable";
}
function $r(e, n, r) {
  return {
    path: e,
    kind: n.includes(e)
      ? "user_level"
      : r.fixed.includes(e)
        ? "repository"
        : "included",
    ground: e.includes("\uFFFD")
      ? "not_text"
      : !r.fixed.includes(e) && r.roots.some((i) => Hb(i, e))
        ? "inside"
        : "indirect",
  };
}
var Mr = ["user_level", "system", "condition", "unknown", "repository"];
function Hrl(e) {
  if (e === "ignored_setting")
    return "a git configuration file other than this repository\u2019s own config sets extensions.refStorage. git ignores that key there, but this upload does not start while git lists it with a location. The file is one of these: the system-wide git configuration, ~/.gitconfig, ~/.config/git/config (or $XDG_CONFIG_HOME/git/config), what GIT_CONFIG_GLOBAL or GIT_CONFIG_SYSTEM names, the repository\u2019s config.worktree, or a file that one of them or the repository\u2019s config includes. Remove the key from that file and retry";
  return e === "variable"
    ? "the variable GIT_REFERENCE_BACKEND tells git to keep branches and tags in another place, which this upload does not read; start claude without that variable (a Claude Code settings file may also set it, in its env block)"
    : "this repository\u2019s own git configuration (extensions.refStorage) keeps its branches and tags in another place, which this upload does not read; work from an ordinary clone of the repository";
}
async function tcs(
  e,
  n,
  {
    linkedTrees: r = !1,
    bound: i = r,
    startsInProject: o = !1,
    perWorktreeConfig: c = "refuse",
    notesBareRepository: l = !1,
    probes: u = ADe(),
    holder: g,
    namedCommonDirs: m = [],
    findKeyedFolder: h = Gy,
  } = {},
) {
  if (m.some((R) => !Y(R)))
    return {
      kind: "failed",
      detail: "a common directory named for this tree is not an absolute path",
    };
  let p = u.screenMemo === void 0 ? new lon("operation") : u,
    b = rp(e) ? null : await he(e).catch(() => null);
  if (b === null)
    return {
      kind: "failed",
      detail: "the launch directory could not be resolved",
      cause: "launch_folder_unresolved",
    };
  if (i) {
    if ((await pco(b)).some((H) => Hb(H, b) || Hb(H, e)))
      return {
        kind: "tampered",
        misplaced: "temp_root",
        gitDir: "",
        commonDir: "",
      };
  }
  if ([G6(void 0), process.env].some((R) => ft(Zi(R, "GIT_REFERENCE_BACKEND"))))
    return {
      kind: "tampered",
      misplaced: "ref_storage",
      keptBy: "variable",
      gitDir: "",
      commonDir: "",
    };
  let y = await Io(b);
  if (y.kind === "refuse" || (y.kind === "chain" && !r))
    return {
      kind: "tampered",
      misplaced:
        y.kind === "refuse" && y.why !== "git_file"
          ? "linked_worktree"
          : "git_file",
      gitDir: y.adminDir ?? "",
      commonDir: y.kind === "chain" ? y.commonDir : "",
      ...(y.kind === "refuse" && { detail: y.why }),
    };
  if (y.kind === "chain" && m.some((R) => R !== y.commonDir))
    return {
      kind: "tampered",
      misplaced: "common_dir",
      gitDir: y.adminDir,
      commonDir: y.commonDir,
    };
  let C = async (R) => {
    let H = await Promise.all(M([e, b]).map((J) => Po(R, b, h(J))));
    return H.includes(!1) ? !1 : H.includes("unresolved") ? "unresolved" : !0;
  };
  if (y.kind === "chain") {
    let R = await C({ resolved: y.commonDir });
    if (R !== !0)
      a("tengu_git_layout_keyed_elsewhere", {
        bound: i,
        unresolved: R === "unresolved",
      });
    if (R === "unresolved" && i)
      return {
        kind: "failed",
        detail:
          "the folder that keeps this tree\u2019s trust could not be resolved",
        cause: "keyed_folder_unresolved",
      };
    if (R === !1 && i)
      return {
        kind: "tampered",
        misplaced: "linked_worktree",
        gitDir: y.adminDir,
        commonDir: y.commonDir,
        detail: "keyed_elsewhere",
      };
  }
  if (y.kind === "not_file" && m.length > 0) {
    let R = E(b, ".git"),
      H = await Bn(b);
    if (H.kind === "unreadable") return { kind: "failed", detail: H.detail };
    return H.kind === "directory"
      ? { kind: "tampered", misplaced: "git_dir", gitDir: R, commonDir: R }
      : {
          kind: "failed",
          detail: "this linked working tree's .git file is missing",
        };
  }
  let [T = "not_held", I = "not_held"] =
      g === void 0
        ? []
        : await Promise.all(
            (y.kind === "chain"
              ? [y.adminDir, y.commonDir]
              : [E(b, ".git")]
            ).map((R) => g.hold(R)),
          ),
    G = i
      ? Hi(b, [...Uhr(b), ...(y.kind === "chain" ? [aon(y.commonDir)] : [])])
      : void 0,
    W = (R) =>
      cw(e, ["rev-parse", ...R], {
        hardened: !0,
        signal: n,
        probes: p,
        stripFinalNewline: !1,
        env: { GIT_CEILING_DIRECTORIES: Fo(b, e) },
        ...(G !== void 0 && { reach: G, startsInProject: o }),
      }),
    [k, O, v] = await Promise.all([
      W(["--absolute-git-dir"]),
      W(["--path-format=absolute", "--git-common-dir"]),
      W(["--show-toplevel"]),
    ]),
    D = on(k.stdout),
    L = on(O.stdout),
    te = on(v.stdout);
  if (
    [k, O, v].some(({ code: R }) => R !== 0) ||
    D === null ||
    L === null ||
    te === null ||
    !Y(D) ||
    !Y(te)
  ) {
    let R = [k, O, v].find(({ stderr: J }) => J !== ""),
      H =
        k.exitCode === 126 || k.exitCode === 127
          ? G !== void 0 && !o
            ? "git_did_not_run_from_outside"
            : "git_did_not_run"
          : R && ZTi(PWe(R));
    return {
      kind: "failed",
      detail: Ir((R?.stderr ?? k.stdout).trim()),
      ...(H !== void 0 && { cause: H }),
      ...(k.code === 127 &&
        k.stderr.startsWith(Ne) && {
          why: "git_not_found",
          ...(k.stderr !== Ne && { withinReach: !0 }),
        }),
      ...(k.stderr === Be && { why: "settings_unreadable" }),
    };
  }
  if (Ir(L) === "--path-format=absolute")
    return { kind: "tampered", misplaced: "old_git", gitDir: D, commonDir: L };
  if (!Y(L))
    return {
      kind: "tampered",
      misplaced: "common_dir",
      gitDir: D,
      commonDir: L,
    };
  let S = await Bn(e);
  if (S.kind === "unreadable") return { kind: "failed", detail: S.detail };
  if (S.kind === "directory") {
    if (!rn(T, S.id)) return et(T);
    if (S.id !== (await Aae(D)))
      return {
        kind: "tampered",
        misplaced: "git_dir",
        gitDir: D,
        commonDir: L,
      };
    if (L !== D)
      return {
        kind: "tampered",
        misplaced: "common_dir",
        gitDir: D,
        commonDir: L,
      };
  }
  let P = await cco(L);
  if (P !== null)
    return { kind: "tampered", misplaced: P, gitDir: D, commonDir: L };
  if (S.kind === "not_a_directory") {
    if (!r || y.kind !== "chain")
      return {
        kind: "tampered",
        misplaced: "git_file",
        gitDir: D,
        commonDir: L,
        detail: "git_file",
      };
    let R = await Co(b, D, L, y);
    if (R.kind !== "vouched")
      return R.kind === "unread"
        ? { kind: "failed", detail: R.detail, why: "changed_under_read" }
        : {
            kind: "tampered",
            misplaced: R.kind,
            gitDir: D,
            commonDir: L,
            detail: R.kind === "linked_worktree" ? R.detail : "git_file",
          };
    let H = { resolved: R.commonDir, id: R.commonDirId };
    if (
      i &&
      !(
        Ht(H, { id: await Aae(y.commonDir), resolved: y.commonDir }) &&
        (await C(H)) === !0
      )
    )
      return {
        kind: "failed",
        detail: "the git directory changed while it was read",
        why: "changed_under_read",
      };
    if (!rn(T, R.gitDirId) || !rn(I, R.commonDirId)) return et(T, I);
    return Mn(
      e,
      {
        gitDir: R.gitDir,
        gitDirId: R.gitDirId,
        ...(R.gitDirBorn !== void 0 && { gitDirBorn: R.gitDirBorn }),
        commonDir: R.commonDir,
        commonDirId: R.commonDirId,
        ...(R.commonDirBorn !== void 0 && { commonDirBorn: R.commonDirBorn }),
        workTree: te,
        checkout: "linked",
        bound: i,
        ...(o && { startsInProject: o }),
      },
      b,
      n,
      p,
      { perWorktreeConfig: c, notesBareRepository: l },
    );
  }
  return Mn(
    e,
    {
      gitDir: D,
      gitDirId: S.id,
      ...(S.born !== void 0 && { gitDirBorn: S.born }),
      commonDir: L,
      workTree: te,
      checkout: "main",
      bound: i,
      ...(o && { startsInProject: o }),
    },
    b,
    n,
    p,
  );
}
async function Mn(
  e,
  n,
  r,
  i,
  o,
  { perWorktreeConfig: c = "refuse", notesBareRepository: l = !1 } = {},
) {
  let { gitDir: u, commonDir: g, workTree: m } = n,
    [h, p] = await (m === h$t(r)
      ? Aae(r).then((G) => [G, G])
      : Promise.all([Aae(m), Aae(r)]));
  if (p === null || h !== p)
    return {
      kind: "tampered",
      misplaced: "work_tree",
      gitDir: u,
      commonDir: g,
      ...(p === null && { unexamined: !0 }),
    };
  let b = {
      ...n,
      workTree: h$t(r),
      workTreeId: p,
      ...(m !== h$t(r) && { workTreeRespelled: !0 }),
    },
    y = await mt(g);
  if (y.info === "absent" || y.pack === "absent")
    return {
      kind: "failed",
      detail:
        "objects/info or objects/pack is missing from the git directory (running git init again in the checkout puts them back)",
      cause: "git_dir_objects_folder_missing",
    };
  let C = b.checkout === "linked" ? await Ao(e, b, i, o) : "absent";
  if (C === "unread")
    return {
      kind: "failed",
      detail: "could not read extensions.worktreeConfig",
    };
  if (C === "file" || (C !== "absent" && c === "refuse"))
    return {
      kind: "tampered",
      misplaced: "linked_worktree",
      gitDir: u,
      commonDir: g,
      detail: "worktree_config",
    };
  let T = C === "absent" ? b : { ...b, worktreeConfig: C },
    I = await Yr(e, T, i, o);
  switch (I.kind) {
    case "unlistable":
      return { kind: "failed", detail: I.detail };
    case "many_includes":
      return {
        kind: "tampered",
        misplaced: "many_includes",
        gitDir: u,
        commonDir: g,
      };
    case "ref_storage":
      return {
        kind: "tampered",
        misplaced: "ref_storage",
        keptBy: I.keptBy,
        gitDir: u,
        commonDir: g,
      };
    case "reftable":
      return {
        kind: "tampered",
        misplaced: "reftable",
        gitDir: u,
        commonDir: g,
      };
    case "included":
      return {
        kind: "tampered",
        misplaced: "included_config",
        writable: `${I.configFile.kind}_${I.configFile.ground}`,
        configFile: I.configFile,
        ...(I.includedBy !== void 0 && { includedBy: I.includedBy }),
        gitDir: u,
        commonDir: g,
      };
    case "pins":
      return {
        kind: "read",
        layout: { ...T, storeStamps: y, ...I.pins, ...{} },
      };
  }
}
function Br(e, { commonDir: n, workTree: r }) {
  let i = Te(e, r);
  return i !== null && ke(i) === "config" && Hb(n, i) && Hb(V(i), n);
}
var Ur = /^hook\.(?:(.*)\.)?(?:command|event|enabled)$/s,
  jr = new Set(v0s.map(([e]) => e));
function Wr(e) {
  return jr.has(e);
}
function Kr(e) {
  let n = Wr(e) ? null : Ur.exec(e);
  return n === null ? void 0 : (n[1] ?? "");
}
async function Yr(e, n, r, i) {
  let o = {
      kind: "unlistable",
      detail: "could not list the configuration in force",
    },
    c = ion(n),
    l = i.screenMemo ?? ocs(),
    u = (A) =>
      cw(e, A, {
        hardened: !0,
        layout: n,
        signal: r,
        probes: i,
        ...(c !== void 0 && { reachRoots: c, screenMemo: l }),
      }),
    g = async (A) => {
      let [F, B] = await Promise.all([
          u(["config", "-z", "--show-origin", ...A, "--list"]),
          u([
            "config",
            "-z",
            "--show-origin",
            "--type=path",
            ...A,
            "--get-regexp",
            Wt,
          ]),
        ]),
        Q = A.length > 0 && F.exitCode === 128 && !Ai(F);
      if ((F.code !== 0 && !Q) || (B.code !== 0 && B.exitCode === void 0))
        return null;
      let ie = Q ? [] : Fe(F.stdout),
        de = [
          ...ie.filter(({ key: K }) => Mo.test(K)),
          ...(B.code === 0 ? Fe(B.stdout) : []),
        ].flatMap(({ origin: K, key: me, value: ue }) =>
          gt(ue, K, n.workTree).map((_e) => ({
            holder: K,
            key: me,
            target: _e,
          })),
        );
      return {
        keys: ie,
        targets: de.map(({ target: K }) => K),
        directives: de,
      };
    },
    [m, h, p] = await Promise.all([
      g([]),
      u(["var", "GIT_CONFIG_GLOBAL"]),
      u(["var", "GIT_CONFIG_SYSTEM"]),
    ]);
  if (m === null) return o;
  let b = m.keys.filter(({ key: A }) => A === "extensions.refstorage"),
    y = (A) => Te(A, n.workTree) === null || Br(A, n),
    C = b.filter(({ value: A }) => ft(A));
  if (C.length > 0)
    return {
      kind: "ref_storage",
      keptBy: C.some(({ origin: A }) => y(A)) ? "setting" : "ignored_setting",
    };
  if (ii(b, y)) return { kind: "reftable" };
  let T = await Nfl(
    n.workTree,
    { GIT_DIR: n.gitDir, GIT_COMMON_DIR: n.commonDir },
    n.workTree,
  );
  if (T === null) return o;
  let I =
      p.code === 0
        ? p.stdout.split(`
`)
        : [],
    G = null,
    W = G6(void 0),
    k = [n.workTree, G, W],
    O = cHi(
      [
        ...(h.code === 0
          ? h.stdout.split(`
`)
          : []),
        ...I,
      ],
      ...k,
    ),
    v = Lfl(I, ...k),
    D = [...m.keys.map(({ origin: A }) => Te(A, n.workTree)), ...O],
    L = (A) => ({
      kind: "included",
      configFile: $r(A, O, T),
      ...(!O.includes(A) &&
        !T.fixed.includes(A) && {
          includedBy: Xr(A, m.directives, {
            workTree: n.workTree,
            userFiles: O,
            systemFiles: v,
            fromOwnConfig: y,
          }),
        }),
    }),
    te = D.find((A) => A?.includes("\uFFFD"));
  if (te !== void 0 && te !== null) return L(te);
  let S = await fHi(T, D);
  if (S !== void 0) return S === null ? o : L(S);
  let P = await qr(
    m.targets,
    (A) => g(["--file", A]),
    (A) => fHi(T, A),
  );
  if (P === null) return o;
  if ("tooMany" in P) return { kind: "many_includes" };
  if ("contributes" in P) return L(P.contributes);
  let R = [...m.keys, ...P.keys],
    J = ((A) =>
      M(
        R.flatMap(({ key: F }) => {
          let B = A.exec(F)?.[1];
          return B === void 0 ? [] : [B];
        }),
      ))(/^filter\.(.*)\.(?:clean|smudge|process|required)$/s),
    q = M(R.flatMap(({ key: A }) => Kr(A) ?? []));
  if ([...J, ...q].some((A) => A.includes("\uFFFD")))
    return { kind: "unlistable", detail: Zr };
  let oe = [
    ...J.flatMap((A) => [
      [`filter.${A}.clean`, ""],
      [`filter.${A}.smudge`, ""],
      [`filter.${A}.process`, ""],
      [`filter.${A}.required`, "false"],
    ]),
    ...q.flatMap((A) => [
      [`hook.${A}.enabled`, "false"],
      [`hook.${A}.event`, ""],
    ]),
  ];
  return {
    kind: "pins",
    listed: m.keys,
    pins: {
      filterDrivers: J,
      attributeSetting: gi(m.keys, P.keys, O, n),
      configPins: Object.fromEntries([
        ["GIT_CONFIG_COUNT", String(oe.length)],
        ...oe.flatMap(([A, F], B) => [
          [`GIT_CONFIG_KEY_${B}`, A],
          [`GIT_CONFIG_VALUE_${B}`, F],
        ]),
      ]),
    },
  };
}
var Vr = 8,
  lco = 32,
  Jr = 4096;
function Xr(
  e,
  n,
  { workTree: r, userFiles: i, systemFiles: o, fromOwnConfig: c },
) {
  let l = Le(e),
    u = n.some(({ target: m }) => c(`file:${m}`)) ? "unknown" : "repository",
    g = new Set(
      n
        .filter(({ target: m }) => Le(m) === l)
        .map(({ holder: m, key: h }) => {
          let p = Te(m, r);
          if (p === null) return "unknown";
          if (!i.includes(p)) return c(m) ? u : "unknown";
          if (Ho.test(h)) return "condition";
          return o.includes(p) ? "system" : "user_level";
        }),
    );
  return Mr.find((m) => g.has(m)) ?? "unknown";
}
async function qr(e, n, r) {
  let i = (g) => g !== null,
    o = new Set(e.filter(i)),
    c = [],
    l = [...o],
    u = 0;
  for (let g = 0; l.length > 0; g += 1) {
    if (g === Vr || o.size > Jr) return { tooMany: !0 };
    let m = l.find((y) => y.includes("\uFFFD"));
    if (m !== void 0) return { contributes: m };
    let h = await r(l);
    if (h !== void 0) return h === null ? null : { contributes: h };
    let p = await Promise.all(
      l.map(async (y) =>
        !IBt(y) && (await yr(y).catch(() => null))?.isFile() ? y : null,
      ),
    );
    if (((u += U(p, i)), u > lco)) return { tooMany: !0 };
    let b = await Promise.all(p.filter(i).map(n));
    if (b.some((y) => y === null)) return null;
    (c.push(...b.flatMap((y) => y?.keys ?? [])),
      (l = M(b.flatMap((y) => y?.targets ?? []).filter(i)).filter(
        (y) => !o.has(y),
      )),
      l.forEach((y) => o.add(y)));
  }
  return { files: [...o], keys: c };
}
function Fe(e) {
  let n = e.split("\x00");
  return Array.from({ length: Math.floor(n.length / 2) }, (r, i) => {
    let o = n[2 * i + 1],
      c = o.indexOf(`
`);
    return {
      origin: n[2 * i],
      key: c < 0 ? o : o.slice(0, c),
      value: c < 0 ? "" : o.slice(c + 1),
      valueless: c < 0,
    };
  });
}
function gt(e, n, r) {
  let i = /^~[^/]*\//.exec(e);
  if (i !== null)
    return phs(G6(void 0)).map((c) =>
      S8e(r, `${c}${Z}${e.slice(i[0].length)}`),
    );
  let o = zr(e, n, r);
  return Y(o) ? [o] : [];
}
function Te(e, n) {
  return e.startsWith("file:") ? S8e(n, e.slice(5)) : null;
}
function zr(e, n, r) {
  let i = /^~([^/]*)\//.exec(e);
  if (i !== null)
    return i[1] === "" || i[1] === ei()
      ? `${Ee()}${Z}${e.slice(i[0].length)}`
      : e;
  if (Y(e) || e.startsWith("%(prefix)/")) return e;
  return `${n.startsWith("file:") ? V(S8e(r, n.slice(5))) : r}${Z}${e}`;
}
var Zr =
  "a configured filter driver or hook has a name that is not valid UTF-8";
var Qr = new Set(["unset", "unspecified"]);
function Drl(e, n = G6(void 0)) {
  let r = Rn(n);
  return (
    e.filterDrivers !== void 0 &&
    r !== null &&
    ![
      ...e.filterDrivers,
      ...r.flatMap(
        ({ key: i }) => /^filter\.(.+)\.[^.]*$/is.exec(i.trim())?.[1] ?? [],
      ),
    ].some((i) => Qr.has(i))
  );
}
function ei() {
  try {
    return Pr().username;
  } catch {
    return null;
  }
}
async function ni(e) {
  return e.workTreeId !== void 0 && e.workTreeId !== (await Aae(e.workTree));
}
async function mst(e, n) {
  return (await Fhr(e, n)) === null;
}
async function Fhr(e, n) {
  return (await ti(e, n)).fault;
}
async function ti(e, n, r = () => () => {}) {
  let i = { "git-dir-look-objects": 0, "git-dir-look-refs": 0 },
    o = async (O, v) => {
      let D = r(O);
      try {
        return await v((L) => {
          i[O] += L;
        });
      } finally {
        D();
      }
    },
    { gitDir: c, commonDir: l } = e,
    [u, g, m, h, p, b, y, C, T, ...I] = await Promise.all([
      Cn(c),
      ae(E(l, "refs")),
      ae(E(l, "objects")),
      ae(E(l, "reftable")),
      Jfe(l, ["packed-refs"]),
      o("git-dir-look-objects", (O) => ri(l, O)),
      o("git-dir-look-refs", (O) => oi(l, O)),
      ae(E(c, "HEAD")),
      Promise.all([
        Jfe(c, ["logs", "HEAD"]),
        ...n.map((O) => Jfe(l, ["logs", ...O.split("/")])),
      ]),
      ...["info", "pack"].map((O) =>
        ae(E(l, "objects", O)).then((v) =>
          v === "directory" ? "absent" : "other",
        ),
      ),
      ht(l).then((O) => (O ? "other" : "absent")),
      ...n.map((O) => Jfe(l, O.split("/"))),
    ]),
    G = e.storeStamps === void 0 ? void 0 : await mt(l),
    W = (O) => O === "absent" || O === "file";
  return {
    fault:
      [
        ["work_tree_replaced", !(await ni(e))],
        [
          "git_dir_replaced",
          (e.gitDirId === void 0 || e.gitDirId === (await Aae(c))) &&
            (e.commonDirId === void 0 || e.commonDirId === (await Aae(l))) &&
            (G === void 0 || G.objects === e.storeStamps?.objects),
        ],
        ["git_dir_head_not_plain", C === "file"],
        ["git_dir_packed_refs_not_plain", W(p)],
        ["git_dir_refs_not_plain", y],
        ["git_dir_logs_not_plain", T.every(W)],
        [
          "git_dir_tampered",
          An(u, c) === l &&
            g === "directory" &&
            m === "directory" &&
            h === "absent" &&
            I.every(W),
        ],
        ["git_dir_objects_not_plain", b],
        [
          "git_dir_objects_changed",
          G === void 0 ||
            (G.info === e.storeStamps?.info &&
              G.pack === e.storeStamps?.pack &&
              G.alternates === e.storeStamps?.alternates &&
              G.httpAlternates === e.storeStamps?.httpAlternates),
        ],
      ].find(([, O]) => !O)?.[0] ?? null,
    objectEntries: i["git-dir-look-objects"],
    refEntries: i["git-dir-look-refs"],
  };
}
var $hr = 4096;
function dco(e) {
  return e.includes("\uFFFD");
}
async function ri(e, n) {
  let r = async (i, o) => {
    let c = await ye(i).catch((u) => (w(u) === "ENOENT" ? [] : null));
    if (c === null || c.some(dco)) return !1;
    return (
      n(c.length),
      (
        await Promise.all(
          c.map((u) =>
            X(E(i, u)).then(
              (g) =>
                g.isFile() ||
                (g.isDirectory() && (o || u === "multi-pack-index.d"))
                  ? "file"
                  : "other",
              (g) => (w(g) === "ENOENT" ? "absent" : "other"),
            ),
          ),
        )
      ).every((u) => u !== "other")
    );
  };
  try {
    let i = await ye(E(e, "objects"));
    n(i.length);
    let o = await Promise.all(i.map((u) => ae(E(e, "objects", u))));
    if (
      i.some(dco) ||
      !o.every((u) => u === "directory" || u === "file" || u === "absent")
    )
      return !1;
    let c = i.filter((u, g) => o[g] === "directory");
    if (c.length > $hr) return !1;
    return (
      await Promise.all(
        c.map((u) => r(E(e, "objects", u), !/^(?:pack|[0-9a-f]{2})$/i.test(u))),
      )
    ).every(Boolean);
  } catch {
    return !1;
  }
}
async function mt(e) {
  let n = (...g) => X(E(e, "objects", ...g), { bigint: !0 }),
    r = (...g) =>
      n(...g).then(
        (m) => `${m.dev}:${m.ino}:${m.ctimeNs}:${m.mtimeNs}:${m.size}`,
        () => "absent",
      ),
    [i, o, c, l, u] = await Promise.all([
      n().then(
        (g) => `${g.dev}:${g.ino}`,
        () => "absent",
      ),
      r("info"),
      r("pack"),
      r("info", cn[0]),
      r("info", cn[1]),
    ]);
  return { objects: i, info: o, pack: c, alternates: l, httpAlternates: u };
}
var dn = {
  relative_config_home:
    "the configuration home (CLAUDE_CONFIG_DIR) is not an absolute path",
  settings_moved:
    "where your own settings are found (CLAUDE_CONFIG_DIR, the HOME it defaults from, or the cowork settings switch) changed after Claude Code started: set it in the shell, not a settings file, and restart",
  inside_tree:
    "~/.claude/seed-admin lies inside this working tree or its repository",
};
function ii(e, n) {
  return e.some(({ value: r, origin: i }) => r === "reftable" && n(i));
}
var cn = ["alternates", "http-alternates"];
async function cco(e) {
  if ((await ae(E(e, "reftable"))) !== "absent") return "reftable";
  return (await ht(e)) ? "borrowed_objects" : null;
}
async function ht(e) {
  return (
    await Promise.all(
      cn.map(async (r) => {
        let i = await Jfe(e, ["objects", "info", r]);
        if (i !== "file") return i !== "absent";
        let o = await X(E(e, "objects", "info", r)).catch(() => null);
        return !(o !== null && o.isFile() && o.nlink === 1 && o.size === 0);
      }),
    )
  ).some(Boolean);
}
async function oi(e, n) {
  return (
    await Promise.all(
      ["heads", "tags", "remotes"].map(async (i) => {
        let o = await ae(E(e, "refs", i));
        return (
          o === "absent" ||
          o === "file" ||
          (o === "directory" && (await pt(E(e, "refs", i), n)))
        );
      }),
    )
  ).every(Boolean);
}
async function pt(e, n) {
  let r = await si(e);
  if (r === null) return !1;
  return (
    n(r.length),
    (
      await Promise.all(
        r.map(async (o) => {
          let c = await ae(o);
          return c === "file" || (c === "absent" && typeof o === "string")
            ? !0
            : c === "directory"
              ? pt(o, n)
              : !1;
        }),
      )
    ).every(Boolean)
  );
}
async function si(e) {
  try {
    if (typeof e === "string") {
      let r = await ye(e).catch((i) => (w(i) === "ENOENT" ? [] : null));
      if (r === null || !r.some(dco)) return r?.map((i) => E(e, i)) ?? null;
    }
    let n = Buffer.concat([Buffer.from(e), Buffer.from(Z)]);
    return (await ye(e, { encoding: "buffer" })).map((r) =>
      Buffer.concat([n, r]),
    );
  } catch {
    return null;
  }
}
async function ae(e) {
  try {
    let n = await X(e);
    return n.isDirectory()
      ? "directory"
      : n.isFile() && n.nlink === 1
        ? "file"
        : "other";
  } catch (n) {
    let r = w(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "other";
  }
}
async function Bn(e) {
  try {
    let n = await X(E(e, ".git"), { bigint: !0 });
    return n.isDirectory()
      ? { kind: "directory", id: `${n.dev}:${n.ino}`, born: j2t(n) }
      : { kind: "not_a_directory" };
  } catch (n) {
    let r = w(n);
    return r === "ENOENT" || r === "ENOTDIR"
      ? { kind: "not_a_directory" }
      : { kind: "unreadable", detail: d(n) };
  }
}
var ai = new Set([
  "core.autocrlf",
  "core.eol",
  "core.safecrlf",
  "core.symlinks",
  "core.filemode",
  "core.ignorecase",
  "core.precomposeunicode",
  "core.checkstat",
  "core.trustctime",
]);
function di(e) {
  return `"${e
    .replace(/[\\"]/g, (n) => `\\${n}`)
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")
    .replace(/\x08/g, "\\b")}"`;
}
var Hn = ["core.excludesfile", "core.attributesfile"];
function ci(e) {
  let n = e.split("\x00"),
    r = Array.from({ length: Math.floor((n.length - 1) / 3) }, (c, l) =>
      n.slice(3 * l, 3 * l + 3),
    ),
    i = ([c]) => c === "global" || c === "system",
    o = r.findLast(i);
  return { origin: o?.[1], value: o?.[2], passedOver: r.some((c) => !i(c)) };
}
var li = /^[^\u0000-\u001f\u007f]{1,4096}$/,
  Me = 268435456,
  _n = 64,
  Un = 1073741824;
async function ncs(e, n) {
  let r = await _t();
  if ("unusable" in r)
    return { kind: "failed", reason: "placement", detail: dn[r.unusable] };
  let { configHome: i, root: o } = r;
  if (
    [o, E(i, "seed-admin")].some(
      (l) => Hb(e.workTree, l) || Hb(e.enclosingTree, l) || Hb(e.gitDir, l),
    )
  )
    return { kind: "failed", reason: "placement", detail: dn.inside_tree };
  try {
    let l = await X(o).catch(() => null),
      u;
    if (
      l !== null &&
      l.isFile() &&
      l.size === 0 &&
      l.nlink === 1 &&
      (x() === "windows" || l.uid === process.getuid?.())
    )
      await hn(o, { force: !0 }).catch((h) => {
        u = h;
      });
    await sn(o, { recursive: !0, mode: 448 }).catch((h) => {
      throw w(h) === "EEXIST" ? (u ?? h) : h;
    });
    let g = await Aae(o);
    if (!wn(await X(o)))
      return {
        kind: "failed",
        reason: "home",
        home: i,
        detail: `${E(i, "seed-admin")} is not a plain directory of this user`,
      };
    return (
      await St(o, g, n),
      {
        kind: "made",
        dir: await wr(
          E(o, `claude-seed-admin-${process.pid}-${await Tt(process.pid, n)}-`),
        ),
        root: o,
        configHome: i,
      }
    );
  } catch (l) {
    let u = w(l);
    return Et(l, i, o)
      ? {
          kind: "failed",
          reason: "home",
          home: i,
          detail: d(l),
          ...(u !== void 0 && { errno: u }),
          thrown: l,
        }
      : {
          kind: "failed",
          reason: "other",
          detail: d(l),
          ...(u !== void 0 && { errno: u }),
          thrown: l,
        };
  }
}
async function _t() {
  let e = Ze();
  if (!Y(e)) return { unusable: "relative_config_home" };
  if (Iho(Rkt) !== void 0) return { unusable: "settings_moved" };
  return { configHome: e, root: E(await he(e).catch(() => e), "seed-admin") };
}
function wn(e) {
  return (
    e.isDirectory() &&
    (x() === "windows" ||
      ((e.uid === process.getuid?.() || e.uid === 0) && (e.mode & 18) === 0))
  );
}
async function Lrl() {
  let e = { removed: 0, errors: 0, held: 0, refused: "no" },
    n = (l, u) => (
      t(`[builderGit] seed-admin is not swept: ${u}`, { level: "warn" }),
      { ...e, refused: l }
    ),
    r = await _t();
  if ("unusable" in r) return n(r.unusable, dn[r.unusable]);
  let i = await Aae(r.root),
    o = await X(r.root).catch((l) => ({ error: l }));
  if ("error" in o) {
    let l = w(o.error);
    if (l === "ENOENT" || l === "ENOTDIR") return e;
    return (
      t(
        `[builderGit] sweeping ${r.root}: could not examine it (${l ?? d(o.error)})`,
        { level: "warn" },
      ),
      { ...e, errors: 1 }
    );
  }
  if (o.isFile()) return e;
  let c = ji(E(r.configHome, "seed-admin"), r.configHome);
  if (c !== null)
    return n("inside_tree", `a git checkout (${c}) holds ${r.root}`);
  return wn(o)
    ? { ...(await St(r.root, i, () => m$t(void 0, void 0))), refused: "no" }
    : n(
        "shared_directory",
        `${r.root} is a link, or another user owns it or can write to it`,
      );
}
async function Nrl(e, n, r, i = ADe(), o = "linked") {
  let c = (B) => cw(e, B, { hardened: !0, layout: n, signal: r, probes: i }),
    l = (await ye(n.gitDir).catch(() => [])).filter((B) => yi.test(B)),
    u = bi(n, l),
    [g] = await ki(n, u);
  if (g !== void 0) return ne(g.why, g.cause);
  if (n.attributeSetting === void 0)
    return ne("the layout records no attribute settings", "other");
  let m = eCi(G6(void 0)) ?? n.attributeSetting;
  if (m !== null)
    return {
      kind: "failed",
      reason: "placement",
      cause: "attribute_source",
      source: m,
      detail: hi(m),
      [Symbol.asyncDispose]: async () => {},
    };
  let h = async () =>
      Oho(
        await RDe(E(n.gitDir, "HEAD")).catch(() => {
          return;
        }),
      ),
    p = await h(),
    [b, y, C, ...T] = await Promise.all([
      c(["rev-parse", "--show-object-format"]),
      c([
        "config",
        "-z",
        "--show-origin",
        "--no-includes",
        "--file",
        E(n.commonDir, "config"),
        "--list",
      ]),
      c([
        "for-each-ref",
        "--format=%(objectname) %(refname) %(symref)",
        "refs/heads/",
        "refs/tags/",
        "refs/remotes/",
      ]),
      ...Hn.map((B) =>
        c([
          "config",
          "-z",
          "--includes",
          "--show-scope",
          "--show-origin",
          "--type=path",
          "--get-all",
          B,
        ]),
      ),
    ]),
    I = b.code === 0 ? b.stdout.trim() : "";
  if (I !== "sha1" && I !== "sha256")
    return ne("could not read the object format", "config");
  if (C.code !== 0)
    return ne(
      `could not list the refs (${le(n, E(n.commonDir, "packed-refs"))} or a file under ${le(n, E(n.commonDir, "refs"))} is unreadable or broken)`,
      "refs",
    );
  let { carried: G, symbolic: W } = wi(C.stdout);
  if (G.includes("\uFFFD"))
    return ne(
      `a branch or tag name in ${le(n, E(n.commonDir, "packed-refs"))} or under ${le(n, E(n.commonDir, "refs"))} is not valid UTF-8`,
      "refs",
    );
  let k = (await ae(E(n.commonDir, "config"))) !== "absent";
  if (y.code !== 0 && k)
    return ne("could not read the repository configuration", "config");
  let O = n.checkout === "linked" ? !1 : await No(e, n, r, i);
  if (O === null)
    return ne("could not read extensions.worktreeConfig", "config");
  let v = O
    ? await c([
        "config",
        "-z",
        "--show-origin",
        "--no-includes",
        "--file",
        E(n.gitDir, "config.worktree"),
        "--list",
      ])
    : null;
  if (
    v !== null &&
    v.code !== 0 &&
    (await ae(E(n.gitDir, "config.worktree"))) !== "absent"
  )
    return ne("could not read the per-worktree configuration", "config");
  let D = [
    ...(y.code === 0 ? Fe(y.stdout) : []),
    ...(v?.code === 0 ? Fe(v.stdout) : []),
  ].filter(({ key: B }) => ai.has(B));
  if (T.some((B) => B.code !== 0 && B.exitCode !== 1))
    return ne(
      "could not read the core.excludesFile or core.attributesFile setting from this checkout's git configuration",
      "config",
    );
  let L = Hn.flatMap((B, Q) => {
    let ie = T[Q];
    if (ie === void 0 || ie.code !== 0) return [];
    let { origin: de, value: K, passedOver: me } = ci(ie.stdout);
    if (me)
      t(
        `[builderGit] ${B} from the repository, a worktree or the command line is ignored under the private git directory: only the user's or the system's own value applies there`,
      );
    return de?.startsWith("file:") === !0 &&
      K !== void 0 &&
      Y(K) &&
      li.test(K) &&
      !K.includes("\uFFFD")
      ? [{ key: B, value: K }]
      : [];
  });
  if (
    p === null ||
    !(
      /^ref: refs\/heads\/[^\u0000-\u0020\u007f]+$/.test(p) ||
      /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(p)
    )
  )
    return ne(Si(n), "head");
  if (W.has(p.replace(/^ref: /, ""))) return ne(Ti, "symbolic_head");
  if (
    p.startsWith("ref: ") &&
    !G.includes(` ${p.slice(5)}
`) &&
    (await h()) !== p
  )
    return ne(
      `${le(n, E(n.gitDir, "HEAD"))} changed while the branches were being read: most likely a branch was switched, renamed or deleted meanwhile`,
      "other",
    );
  if (l.length > _n) return ne(Ei(n), "shared_index");
  if (
    (
      await Promise.all(
        l.map((B) =>
          X(E(n.gitDir, B)).then(
            (Q) => (Q.isFile() ? Q.size : 0),
            () => 0,
          ),
        ),
      )
    ).reduce((B, Q) => B + Q, 0) > Un
  )
    return ne(
      `the split-index files (sharedindex.*) in ${le(n, n.gitDir)} are too large to copy`,
      "shared_index",
    );
  let P = x() === "windows" ? "junction" : void 0,
    R = V(n.commonDir),
    H = ion(n),
    J = () => m$t(H === void 0 ? void 0 : Ae(H), i.screenMemo),
    q = await ncs(
      { workTree: n.workTree, gitDir: n.gitDir, enclosingTree: R },
      J,
    );
  if (q.kind === "failed")
    return q.reason === "home" ? qn(q.detail, q.home) : ne(q.detail, q.reason);
  let { root: oe, configHome: A } = q,
    F = q.dir;
  try {
    let B = { left: Un + 2 * Me },
      Q = Promise.allSettled(
        u.map(([z, ee, ge]) => rcs(E(z, ee), E(F, ee), B, le(n, E(z, ee)), ge)),
      ),
      ie = Promise.allSettled([
        en(
          E(F, "config"),
          [
            "[core]",
            `	repositoryformatversion = ${I === "sha256" ? 1 : 0}`,
            "\tbare = false",
            "\tlogallrefupdates = false",
            "[gc]",
            "\tauto = 0",
            "\tautodetach = false",
            "\tpruneexpire = never",
            "[maintenance]",
            "\tauto = false",
            "[core]",
            ...D.map(
              ({ key: z, value: ee, valueless: ge }) =>
                `	${z.slice(5)}${ge ? "" : ` = ${di(ee)}`}`,
            ),
            ...L.map(
              ({ key: z, value: ee }) =>
                `	${z.slice(5)} = "${ee.replace(/[\\"]/g, (ge) => `\\${ge}`)}"`,
            ),
            "\tlongpaths = true",
            ...(I === "sha256"
              ? ["[extensions]", "\tobjectformat = sha256"]
              : []),
            "",
          ].join(`
`),
          { flag: "wx", mode: 384 },
        ),
        en(
          E(F, "HEAD"),
          p +
            `
`,
          { flag: "wx", mode: 384 },
        ),
        yn
          .filter((z) => z !== "objects" || o !== "own")
          .reduce(
            (z, ee) => z.then(() => Er(E(n.commonDir, ee), E(F, ee), P)),
            Promise.resolve(),
          ),
        ...(o === "own" ? [sn(E(F, "objects"), { mode: 448 })] : []),
        sn(E(F, "refs"), { mode: 448 }),
        en(E(F, "packed-refs"), G, { flag: "wx", mode: 384 }),
      ]).then((z) => {
        let ee = z.find((ge) => ge.status === "rejected");
        return ee === void 0 ? null : { error: ee.reason };
      }),
      de = await Q,
      K = de.flatMap((z) =>
        z.status === "fulfilled" && z.value !== null ? [z.value] : [],
      )[0];
    if (K !== void 0) return (await ie, await Ie(F), ne(K.why, K.cause));
    let me = de.find((z) => z.status === "rejected");
    if (me !== void 0) throw (await ie, me.reason);
    let ue = await ie;
    if (ue !== null) {
      if (!_i.includes(w(ue.error) ?? "") || !Et(ue.error, A, oe))
        throw ue.error;
      return (await Ie(F), qn(d(ue.error), A));
    }
    if (r?.aborted) throw Error("aborted");
    let _e = F,
      Oe = async () => {
        await Ie(_e);
      };
    return {
      kind: "made",
      path: _e,
      ...(o === "own" && { borrowedObjects: E(n.commonDir, "objects") }),
      dispose: Oe,
      [Symbol.asyncDispose]: Oe,
    };
  } catch (B) {
    if (F !== null) await Ie(F);
    return ne(
      `${Ir(d(B))} \u2014 while writing under ${E(A, "seed-admin")}, where the copies take up to 1.5 GiB`,
      "other",
    );
  }
}
var ui = ["core.attributesfile", "attr.tree"];
function ln({ key: e }) {
  return ui.includes(e.toLowerCase());
}
function wt({ key: e }) {
  return e.toLowerCase() === "core.ignorecase";
}
var fi = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "XDG_CONFIG_HOME", "HOME"];
function gi(e, n, r, i) {
  let o = (h) =>
      x() === "windows" ? h.replaceAll("\\", "/").toLowerCase() : h,
    c = (h) => r.map(o).includes(o(Te(h.origin, i.workTree) ?? "")),
    l = (h) =>
      h.key.toLowerCase() === "core.attributesfile" && c(h) && mi(h.value),
    u = n.find((h) => ln(h) || wt(h)),
    g = u ?? e.find((h) => ln(h) && !l(h));
  if (g === void 0) return null;
  let m = g.key.toLowerCase();
  return {
    ...(u === void 0 &&
      m === "core.attributesfile" &&
      c(g) && { relative: !0 }),
    ...(m === "attr.tree"
      ? { kind: "attr_tree", setting: "attr.tree" }
      : m === "core.ignorecase"
        ? { kind: "ignore_case", setting: "core.ignoreCase" }
        : { kind: "attributes_file", setting: "core.attributesFile" }),
    where: le(i, Te(g.origin, i.workTree) ?? g.origin),
  };
}
function eCi(e) {
  if (Zi(e, "GIT_ATTR_SOURCE") !== void 0)
    return { kind: "attr_source_env", setting: "GIT_ATTR_SOURCE" };
  let n = ["GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS"].find((m) => {
    let h = Rn({
      ...e,
      [m === "GIT_CONFIG_COUNT" ? "GIT_CONFIG_PARAMETERS" : "GIT_CONFIG_COUNT"]:
        void 0,
    });
    return (
      h === null ||
      h.some(
        ({ key: p }) => Gt(p.toLowerCase()) || ln({ key: p }) || wt({ key: p }),
      )
    );
  });
  if (n !== void 0) return { kind: "env_config", setting: n };
  let r = x() === "windows",
    i = (m) => m !== void 0 && m !== "" && !yt(m, r),
    o = fi.find((m) => i(Zi(e, m))),
    c = Zi(e, "HOME") ? void 0 : phs(e).find(i),
    l =
      c === void 0
        ? void 0
        : c === `${Zi(e, "HOMEDRIVE")}${Zi(e, "HOMEPATH")}`
          ? "HOMEPATH"
          : "USERPROFILE",
    u = r && i(Zi(e, "PROGRAMDATA")) ? "PROGRAMDATA" : void 0,
    g = o ?? l ?? u;
  return g === void 0 ? null : { kind: "config_location", setting: g };
}
function yt(e, n) {
  return n ? /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e) : Y(e);
}
function mi(e) {
  return e === "" || /^~[^/]*\//.test(e) || yt(e, x() === "windows");
}
function hi({ kind: e, setting: n, where: r }) {
  return e === "config_location"
    ? `${n} is a relative path, which git under the private git directory resolves from another directory`
    : `${n} is set in ${r ?? "Claude Code\u2019s environment"}, which git does not read the same way under the private git directory`;
}
function hst(e) {
  return e === void 0 ? {} : { GIT_INDEX_FILE: e };
}
function gst(e) {
  return e === void 0
    ? []
    : ["-c", "core.splitIndex=false", "-c", "diff.autoRefreshIndex=true"];
}
async function Frl(e, n, r = ADe()) {
  let i = await cw(e, ["rev-parse", "--absolute-git-dir", "--git-common-dir"], {
      hardened: !1,
      signal: n,
    }),
    [o, c] = i.stdout.split(`
`);
  if (i.code !== 0 || o === void 0 || !Y(o) || c === void 0)
    return {
      kind: "failed",
      cause: "git_dir",
      detail: "git could not say where its directory is",
    };
  let l = Le(e, c),
    u = await ncs({ workTree: e, gitDir: o, enclosingTree: V(l) }, () =>
      m$t(void 0, r.screenMemo),
    );
  if (u.kind === "failed")
    return u.reason === "home"
      ? { kind: "failed", cause: "home", detail: u.detail, home: u.home }
      : { kind: "failed", cause: u.reason, detail: u.detail };
  let g = () => hn(u.dir, { recursive: !0, force: !0 }).catch(() => {});
  try {
    let m = await rcs(
      E(o, "index"),
      E(u.dir, "index"),
      { left: Me },
      E(o, "index"),
      "index",
    );
    if (m !== null)
      return (await g(), { kind: "failed", cause: "index", detail: m.why });
    let h = E(u.dir, "index"),
      p = await cw(
        e,
        ["-c", "core.splitIndex=false", "update-index", "--no-split-index"],
        { hardened: !1, signal: n, env: { GIT_INDEX_FILE: h } },
      );
    if (p.code !== 0)
      return (
        await g(),
        {
          kind: "failed",
          cause: "index",
          detail: `git could not rewrite the copy as one file: ${Ir(p.stderr)}`,
        }
      );
    return { kind: "made", indexFile: h, dispose: g };
  } catch (m) {
    return (await g(), { kind: "failed", cause: "index", detail: Ir(d(m)) });
  }
}
async function $rl(e, n, r) {
  let i = (g) =>
      cw(e, [...gst(n), "write-tree", "--missing-ok", ...g], {
        hardened: !1,
        signal: r,
        env: hst(n),
      }),
    o = await X(n, { bigint: !0 }).catch((g) =>
      w(g) === "ENOENT" ? "absent" : { unexamined: w(g) ?? d(g) },
    );
  if (o !== "absent" && "unexamined" in o)
    return {
      kind: "failed",
      detail: `that copy could not be examined before its cached tree was rebuilt (${Ir(o.unexamined)})`,
    };
  let c = await i(["--ignore-cache-tree"]);
  if (c.code !== 0)
    return {
      kind: "failed",
      detail: `git could not build a tree from it (${Ir(c.stderr.trim())}) \u2014 an unfinished merge, with unmerged entries, does that: finish or abort it first`,
    };
  let l = await X(n, { bigint: !0 }).catch(() => null);
  if (l === null || (o !== "absent" && l.ino === o.ino))
    return {
      kind: "failed",
      detail:
        "its cached tree, rebuilt from its entries, could not be written back into the copy",
    };
  let u = await i([]);
  return u.code === 0 && u.stdout.trim() === c.stdout.trim()
    ? { kind: "honest", tree: c.stdout.trim() }
    : {
        kind: "failed",
        detail:
          "its cached tree could not be replaced by the one its entries give",
      };
}
var pi = [
    "EACCES",
    "EPERM",
    "EROFS",
    "EEXIST",
    "ENOTDIR",
    "ELOOP",
    "ENAMETOOLONG",
    "EOPNOTSUPP",
    "ENOTSUP",
  ],
  _i = ["EACCES", "EPERM", "EROFS", "EOPNOTSUPP", "ENOTSUP"];
function Et(e, n, r) {
  let i = w(e),
    o =
      typeof e !== "object" || e === null
        ? void 0
        : "dest" in e && typeof e.dest === "string"
          ? e.dest
          : "path" in e
            ? e.path
            : void 0;
  return (
    i !== void 0 &&
    pi.includes(i) &&
    typeof o === "string" &&
    (Hb(n, o) || Hb(V(r), o))
  );
}
function le(e, n) {
  let r = Hb(e.workTree, n) ? an(e.workTree, n) : n;
  return r.length > 160 ? `\u2026${qa(r, 159)}` : r;
}
function wi(e) {
  let n = e
    .split(
      `
`,
    )
    .flatMap((r) => {
      let [, i, o, c] =
        /^([0-9a-f]{40}(?:[0-9a-f]{24})?) (refs\/[^\u0000-\u0020\u007f]+) (.*)$/s.exec(
          r,
        ) ?? [];
      return i === void 0 || o === void 0
        ? []
        : [{ id: i, name: o, target: c }];
    });
  return {
    carried: n
      .filter(({ target: r }) => r === "")
      .map(
        ({ id: r, name: i }) => `${r} ${i}
`,
      )
      .join(""),
    symbolic: new Set(
      n.filter(({ target: r }) => r !== "").map(({ name: r }) => r),
    ),
  };
}
var bt = (e, n) => Re(E(e, n), Xu());
async function kt(e, n, r, i, o = Me) {
  let c = (m, h) => ({
    why: `${n} ${m}`,
    cause:
      h === "replaced"
        ? "other"
        : r === "index"
          ? `index_${h}`
          : r === "shared_index"
            ? h === "too_large"
              ? "shared_index_too_large"
              : r
            : h === "link" || h === "second_name"
              ? `shallow_${h}`
              : "shallow_other",
  });
  if (x() === "windows") {
    let m = await X(e).catch(() => null);
    if (m !== null && !m.isFile())
      return m.isSymbolicLink()
        ? c("is a symbolic link", "link")
        : c("is not a regular file", "other");
  }
  let l;
  try {
    l = await i(V(e), ke(e));
  } catch (m) {
    let h = w(m);
    if (h === "ENOENT") return null;
    return h === "ELOOP" || h === "EMLINK"
      ? c("is a symbolic link", "link")
      : c(`cannot be opened (${h ?? "no error code"})`, "other");
  }
  let u = await l.stat().catch(() => null),
    g =
      u === null || !u.isFile()
        ? c("is not a regular file", "other")
        : u.nlink > 1
          ? c("has a second name (a hard link)", "second_name")
          : u.nlink !== 1
            ? c("changed while it was read", "replaced")
            : u.size > o
              ? c(
                  `is larger than ${Math.floor(o / 1048576)} MiB, the most that is copied`,
                  "too_large",
                )
              : null;
  if (g !== null || u === null) return (await l.close(), g);
  return { source: l, entry: u };
}
var yi = /^sharedindex\.[0-9a-f]{40,64}$/;
function Ei(e) {
  return `more than ${_n} split-index files (sharedindex.*) stand in ${le(e, e.gitDir)}`;
}
function bi(e, n) {
  return [
    [e.gitDir, "index", "index"],
    [e.commonDir, "shallow", "shallow"],
    ...n.slice(0, _n).map((r) => [e.gitDir, r, "shared_index"]),
  ];
}
async function ki(e, n, r = bt) {
  return (
    await Promise.all(
      n.map(async ([o, c, l]) => {
        let u = await kt(E(o, c), le(e, E(o, c)), l, r);
        if (u !== null && "source" in u) return (await u.source.close(), null);
        return u;
      }),
    )
  ).filter((o) => o !== null);
}
function Si(e) {
  return `${le(e, E(e.gitDir, "HEAD"))} is not a branch or an object id`;
}
var Ti =
  "it is checked out under a symbolic ref (a second name for another ref), and a branch is taken by its own name only";
async function rcs(e, n, r, i, o, c = Me) {
  let l = await kt(e, i, o, bt, c);
  if (l === null || !("source" in l)) return l;
  let { source: u, entry: g } = l;
  try {
    if (((r.left -= g.size), r.left < 0))
      return {
        why: `${i} and the other files to copy grew past 1.5 GiB`,
        cause:
          o === "index"
            ? "index_too_large"
            : o === "shared_index"
              ? o
              : "shallow_other",
      };
    let m = await Re(n, "wx", 384);
    try {
      let h = Buffer.allocUnsafe(1048576),
        p = 0;
      while (p < g.size) {
        let { bytesRead: T } = await u.read(
          h,
          0,
          Math.min(h.length, g.size - p),
          p,
        );
        if (T === 0) break;
        (await m.write(h, 0, T), (p += T));
      }
      let b = new Date(),
        y = g.mtime.getTime(),
        C = y >= 1000 && y <= b.getTime() ? g.mtime : b;
      await m.utimes(C, C);
    } finally {
      await m.close();
    }
    return null;
  } finally {
    await u.close();
  }
}
var yn = ["info", "objects"];
async function jn(e) {
  try {
    return await rx(e);
  } catch (n) {
    if (
      x() === "windows" ||
      !(await X(e).then(
        (r) => r.isDirectory(),
        () => !1,
      ))
    )
      throw n;
    return "directory";
  }
}
async function Ie(e, n = yn) {
  try {
    if ((await jn(e)) !== "directory") return !0;
    let r = await n
      .toReversed()
      .reduce(
        (i, o) =>
          i.then(async () => {
            if (o === "objects") await jn(E(e, o));
            else if ((await rx(E(e, o))) === "directory")
              throw Error("info is a non-empty directory, not a link");
          }),
        Promise.resolve(),
      )
      .then(
        () => null,
        (i) => ({ reason: i }),
      );
    if (r !== null)
      throw (
        await Promise.allSettled(
          (await ye(e))
            .filter((i) => !n.some((o) => o === i))
            .map((i) => rx(E(e, i))),
        ),
        r.reason
      );
    return (await hn(e, { recursive: !0, force: !0 }), !0);
  } catch (r) {
    return (
      t(
        `[builderGit] a private git directory is left in place (${w(r) ?? d(r)}): ${e}`,
        { level: "warn" },
      ),
      !1
    );
  }
}
var Ri = 3600000;
async function St(e, n, r) {
  let i = Date.now(),
    o = async () => n !== null && (await Aae(e)) === n && wn(await X(e)),
    c = async (h) => {
      let p = /^claude-seed-admin-([0-9]+)-([0-9a-z]*)-/.exec(h);
      if (p === null && !h.startsWith("claude-seed-stage-")) return "kept";
      let b = E(e, h);
      if (i - (await X(b)).mtimeMs < Ri) return "kept";
      if (p !== null && Oi(Number(p[1]))) {
        let y = p[2] ?? "",
          C = y === "" ? "" : await Tt(Number(p[1]), r);
        if (C === "" || JXe(y, C)) return "held";
      }
      if (!(await o()))
        throw Error("seed-admin is no longer the directory that was checked");
      return (await Ie(b, p === null ? [] : yn)) ? "removed" : "failed";
    },
    l = (h, p) => (
      t(
        `[builderGit] sweeping ${e}: could not examine ${h} (${w(p) ?? d(p)})`,
        { level: "warn" },
      ),
      "failed"
    ),
    u = await ye(e).catch((h) => l("the list of its entries", h));
  if (u === "failed") return { removed: 0, errors: 1, held: 0 };
  let g = await Promise.all(
      u.map((h) => c(h).catch((p) => (w(p) === "ENOENT" ? "kept" : l(h, p)))),
    ),
    m = U(g, (h) => h === "removed");
  if (m > 0)
    t(`[builderGit] removed ${m} folder(s) that killed builds left under ${e}`);
  return {
    removed: m,
    errors: U(g, (h) => h === "failed"),
    held: U(g, (h) => h === "held"),
  };
}
function Oi(e) {
  try {
    return (process.kill(e, 0), !0);
  } catch (n) {
    return w(n) === "EPERM";
  }
}
async function Tt(e, n) {
  return ((await Ef(e, { env: n() })) ?? "")
    .replace(/[^0-9a-z]/gi, "")
    .toLowerCase()
    .slice(0, 24);
}
var re = Symbol("in-tree settings unreadable"),
  Ii = "",
  Be =
    "this checkout's .claude/settings.json or .claude/settings.local.json cannot be read or parsed: fix or remove it (see /status), then retry \u2014 what it may grant a bound session is unknown, so no git runs";
function Ae(e) {
  let n = ze(e.tree);
  return n === "unreadable" ? re : Mi([...e.roots, ...n], e.tree);
}
function m$t(e, n, r = xe(Se())) {
  return G6(e === void 0 || e === re || n === void 0 ? e : $i(n, e), n, r);
}
function Rt(e) {
  let n = Ot(e);
  return n.OPENSSL_CONF_INCLUDE === void 0 ? e : { ...e, ...n };
}
function Ot(e) {
  let n = Zi(e, "OPENSSL_CONF");
  return n === void 0 || !Y(n) || Zi(e, "OPENSSL_CONF_INCLUDE") !== void 0
    ? {}
    : { OPENSSL_CONF_INCLUDE: V(n) };
}
function Ci(e) {
  let n = Object.keys(e).filter((r) =>
    x() === "windows" ? r.toUpperCase() === "PATH" : r === "PATH",
  );
  return {
    ...e,
    ...Object.fromEntries(
      n.map((r) => [r, e[r] === void 0 ? void 0 : S4t(e[r])]),
    ),
  };
}
function G6(e, n, r = Se()) {
  let i = Ci(Rt(r));
  if (e === void 0) return i;
  let o = Object.keys(i).filter((S) =>
      x() === "windows" ? S.toUpperCase() === "PATH" : S === "PATH",
    ),
    c = Object.keys(i).flatMap((S) => {
      let P =
        x() === "windows"
          ? Xin.find((R) => R === S.toUpperCase())
          : Xin.find((R) => R === S);
      return P === void 0 ? [] : [[S, P]];
    }),
    l = new Set(c.map(([S]) => S)),
    u = Object.keys(i).filter(
      (S) => !l.has(S) && fxe(S) && S.toUpperCase() !== "GIT_CONFIG_NOSYSTEM",
    ),
    g = u.map((S) => [S, HTl(S)]),
    m = g.flatMap(([S, P]) => (P === null ? [] : [[S, P]])),
    h = g.flatMap(([S, P]) => (P === null ? [S] : [])),
    p = new Set(u),
    b = Object.keys(i).filter(
      (S) =>
        !l.has(S) &&
        !p.has(S) &&
        (x() === "windows" ? S.toUpperCase() !== "PATH" : S !== "PATH") &&
        wGt(S),
    );
  if (e === re)
    return {
      ...Pn(i, [...c.map(([S]) => S), ...b, ...u]),
      PATH: "",
      ...Object.fromEntries(o.map((S) => [S, ""])),
      ...Wn(i),
    };
  let y = _(e),
    C = (S, P, R, H) => {
      if (S === void 0) return H();
      let J = _([P, R]) + y,
        q = S.get(J);
      if (q !== void 0) return q;
      let oe = H();
      return (S.set(J, oe), oe);
    },
    T = Lt(e),
    I = Eo(Zi(i, "PATHEXT")),
    G = new Map(),
    W = (S, P) =>
      !Y(S) ||
      Li(P, S) ||
      C(n?.loaders, `loader:${P}`, S, () =>
        P === "GIT_EXEC_PATH"
          ? Mt(S, T, G)
          : P === "DEVELOPER_DIR"
            ? ko(S, T, G)
            : Di.includes(P)
              ? pe(S, T, G)
              : mn(S, T, [], G),
      ),
    k = c.flatMap(([S, P]) => {
      let R = i[S];
      if (R === void 0 || R === "") return [];
      let H = xi(P, R).map((q) => Zxt(q)),
        J = H.filter((q) => !W(q, P));
      if (J.length === H.length) return [];
      return Gi.includes(P)
        ? [[S, null]]
        : [[S, J.length === 0 ? null : J.join(Pi)]];
    }),
    O = m.flatMap(([S, P]) => {
      let R = i[S];
      if (R === void 0) return [];
      let H = Zxt(R);
      return !(
        (x() !== "windows" &&
          H === "/dev/null" &&
          !T("/dev") &&
          je(H)?.isCharacterDevice() === !0) ||
        (R === "" &&
          ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"].includes(S.toUpperCase()))
      ) &&
        (!Y(H) ||
          C(n?.loaders, `codepath:${S}`, H, () =>
            P === "file" ? pe(H, T, G) : mn(H, T, [], G),
          ))
        ? [S]
        : [];
    }),
    v = k.flatMap(([S, P]) => (P === null ? [S] : [])),
    D = v.some((S) => S.toUpperCase() === "OPENSSL_CONF_INCLUDE")
      ? Object.keys(i).filter((S) => S.toUpperCase() === "OPENSSL_CONF")
      : [],
    L = [...v, ...b, ...h, ...O, ...D];
  return {
    ...(L.length === 0 ? i : Pn(i, L)),
    ...Object.fromEntries(k.filter((S) => S[1] !== null)),
    ...Wn(i),
    ...Object.fromEntries(
      o.map((S) => [
        S,
        C(n?.paths, `path:${I.join(";")}`, i[S] ?? "", () =>
          _o(i[S] ?? "", e, I),
        ),
      ]),
    ),
  };
}
var Pi = we;
function Ni() {
  let e = x() === "windows" ? Zi(G6(void 0), "SystemRoot") : void 0;
  return e !== void 0 && /^[A-Za-z]:[\\/]/.test(e)
    ? `${e.slice(0, 2)}${Z}`
    : $e(process.execPath).root || Z;
}
function He({ file: e, startsOutside: n }, r, { dir: i, env: o }) {
  if (!n) return { file: e, args: [...r], cwd: i, env: o };
  let c = Object.keys(o).filter((l) => /^(?:OLD)?PWD$/i.test(l));
  return { file: e, args: ["-C", Le(i), ...r], cwd: Ni(), env: Pn(o, c) };
}
function gLn(e, n, { dir: r, env: i, ...o }) {
  return Ext(He(e, n, { dir: r, env: i }), o);
}
function Ai(e) {
  return e.exitCode === 128 && /^fatal: cannot change to '/m.test(PWe(e));
}
var vi = E(Rr, "no-classpath");
function Wn(e) {
  let n = Object.keys(e).filter((i) => i.toUpperCase() === "CLASSPATH"),
    r = x() === "windows" && n.length > 0 ? n : M(["CLASSPATH", ...n]);
  return Object.fromEntries(r.map((i) => [i, vi]));
}
function xi(e, n) {
  if (e === "GIT_EXEC_PATH") return n.includes(we) ? [n, ...n.split(we)] : [n];
  if (
    e === "DEVELOPER_DIR" ||
    e === "GIT_TEXTDOMAINDIR" ||
    e === "OPENSSL_CONF" ||
    e === "OPENSSL_CONF_INCLUDE" ||
    e === "OPENSSL_MODULES" ||
    e === "OPENSSL_ENGINES"
  )
    return [n];
  if (x() === "windows") return n.split(we);
  if (e === "LD_PRELOAD") return n.split(/[\s:]+/).filter((r) => r !== "");
  if (e === "LD_LIBRARY_PATH") return n.split(/[:;]/);
  return n.split(":");
}
var Gi = [
    "GIT_EXEC_PATH",
    "DEVELOPER_DIR",
    "GIT_TEXTDOMAINDIR",
    "OPENSSL_CONF_INCLUDE",
    "OPENSSL_MODULES",
    "OPENSSL_ENGINES",
  ],
  Di = [
    "LD_PRELOAD",
    "LD_AUDIT",
    "DYLD_INSERT_LIBRARIES",
    "NLSPATH",
    "OPENSSL_CONF",
  ];
function Li(e, n) {
  return (
    (Fi.includes(e) && n.includes("$")) || (e === "NLSPATH" && n.includes("%"))
  );
}
var Fi = ["LD_PRELOAD", "LD_LIBRARY_PATH", "LD_AUDIT"];
function En(e) {
  let n = (r, i) => {
    let o = Zi(e, r);
    return o !== void 0 && o !== "" ? o : i;
  };
  return {
    GIT_TRACE2: n("GIT_TRACE2", "0"),
    GIT_TRACE2_EVENT: n("GIT_TRACE2_EVENT", "0"),
    GIT_TRACE2_PERF: n("GIT_TRACE2_PERF", "0"),
    GIT_TRACE2_ENV_VARS: n("GIT_TRACE2_ENV_VARS", Kn),
    GIT_TRACE2_CONFIG_PARAMS: n("GIT_TRACE2_CONFIG_PARAMS", Kn),
    GIT_TRACE2_MAX_FILES: n("GIT_TRACE2_MAX_FILES", "0"),
  };
}
var Kn = "-";
function bn(e) {
  let n = Zi(e, "GIT_CONFIG_GLOBAL"),
    r = Zi(e, "GIT_CONFIG_SYSTEM");
  return {
    ...(n !== void 0 && { GIT_CONFIG_GLOBAL: n }),
    ...(r !== void 0 && { GIT_CONFIG_SYSTEM: r }),
  };
}
function Xfe() {
  let e = Se(),
    n = Zi(e, "CLAUDE_CODE_TMPDIR");
  if (n !== void 0 && n !== "") return n;
  let r = x();
  if (r === "windows") {
    let o = Zi(e, "TEMP") ?? Zi(e, "TMP");
    return o !== void 0 && o !== "" ? o : Cr();
  }
  let i =
    r === "macos" ? void 0 : (Zi(e, "TMPDIR") ?? Zi(e, "TMP") ?? Zi(e, "TEMP"));
  return i !== void 0 && i !== ""
    ? i.length > 1 && i.endsWith("/")
      ? i.slice(0, -1)
      : i
    : "/tmp";
}
function Se() {
  let e = Gc();
  if (e === void 0) return process.env;
  let n = MSr();
  if (x() !== "windows") return { ...e, ...n };
  let r = new Set(Object.keys(n).map((i) => i.toUpperCase()));
  return { ...Hr(e, (i, o) => !r.has(o.toUpperCase())), ...n };
}
function It(e) {
  let n = ion(e);
  return n === void 0 ? void 0 : Ae(n);
}
function Url(e, n) {
  let r = It(e);
  if (r === void 0) return;
  let i = G6(void 0),
    o = m$t(r === re ? [] : r, n);
  return mHi.find(
    (c) =>
      Zi(i, c) !== void 0 &&
      Zi(o, c) !== Zi(i, c) &&
      !(c === "GIT_CONFIG_SYSTEM" && PSr(Zi(i, "GIT_CONFIG_NOSYSTEM"))),
  );
}
function ion(e) {
  return e.bound === !0
    ? {
        ...Ct(e.workTree, e),
        ...(e.startsInProject && { startsInProject: !0 }),
      }
    : void 0;
}
function kn(e, n) {
  return Ae(Ct(e, n));
}
function ocs(e = !0) {
  return {
    roots: new Set(),
    keepsVolumes: e,
    paths: new Map(),
    loaders: new Map(),
  };
}
function $i(e, n) {
  let r = Pt.get(n) ?? new Set(),
    i = n.filter((o) => r.has(o) || (!e.keepsVolumes && Sn(o)));
  for (let o of n) if (!i.includes(o)) e.roots.add(o);
  return M([...e.roots, ...i]);
}
function Sn(e) {
  return e === $e(e).root;
}
function Ct(e, n) {
  let r = n?.workTree ?? e;
  return {
    tree: r,
    roots: Nt(r, [...Uhr(r), ...(n === void 0 ? [] : [aon(n.commonDir)])]),
  };
}
function Mi(e, n) {
  let r = new Set(),
    i = new Set(),
    o = (u, g) => {
      let m = Bi(u, g, n);
      for (let h of m) r.add(h);
      return m;
    },
    c = M([
      ...e.filter((u) => !OSr(u, 0)),
      ...M(e).flatMap((u) => {
        if (OSr(u, 0)) return o(u, { spelling: u, verdict: "opaque" });
        let g = Pho(ZFn(u, n), n, y0e());
        if (g.verdict !== "local") return o(u, g);
        let m = ce(g.spelling, n);
        if (m === null) return o(u, { ...g, verdict: "opaque" });
        return (i.add(m), [m]);
      }),
    ]),
    l = [...r].filter((u) => !e.includes(u) && !i.has(u));
  if (l.length > 0) Pt.set(c, new Set(l));
  return c;
}
var Pt = new WeakMap();
function Bi(e, n, r) {
  return (
    t(
      `[builderGit] reach root ${ed(e, 256)} cannot be vouched for (${n.verdict}): counted as every volume`,
      { level: "warn" },
    ),
    vit(n.verdict === "foreign" ? { ...n, verdict: "opaque" } : n, r)
  );
}
function Hi(e, n) {
  return Ae({ tree: e, roots: Nt(e, n) });
}
function Nt(e, n) {
  return M([e, ...n, ...Ui(e), ...gHi(), ...Lhr(e)]);
}
function Ui(e) {
  let n = Ue(e);
  return n.length === 0 ? [] : M([...n, Ee()].filter(Y));
}
function aon(e) {
  return ke(e).toLowerCase() === ".git" ? V(e) : e;
}
function Uhr(e) {
  let n = ce(Ee(), e) ?? Ee(),
    r = (i) => {
      let o = V(i);
      return o === i || Hb(o, n) ? [] : [o, ...r(o)];
    };
  return r(e).filter(Tn);
}
function scs(e) {
  return Ue(e).find((n) => Hb(n, e) && !Hb(e, n)) ?? null;
}
function Ue(e) {
  let n = Ee();
  return n === "" ? [] : At(n, e);
}
function uco(e) {
  return Ue(e)[0] ?? null;
}
function fco(e, n) {
  let r = Ee();
  if (r === "") return "elsewhere";
  let i = ce(r, n) ?? r;
  return i === e || r === e
    ? "home"
    : Hb(e, i) || Hb(e, r)
      ? "above_home"
      : "elsewhere";
}
function At(e, n) {
  let r = ce(e, n) ?? e;
  return M([...(Y(r) ? un(r) : []), ...(Y(e) ? un(e) : [])])
    .filter(vt)
    .filter(Tn)
    .sort((o, c) => o.split(Z).length - c.split(Z).length);
}
function ji(e, n) {
  return At(e, n).at(-1) ?? null;
}
function un(e, n = Wi) {
  let r = V(e);
  return r === e || n === 0 ? [e] : [e, ...un(r, n - 1)];
}
var Wi = uHi;
async function Ki(e, n) {
  if (pg(e) || !Y(e)) return null;
  let r = Vi(e, n),
    i = M(r.nodes)
      .filter((c) => !r.links.has(c) && !r.cutAt.has(c) && vt(c))
      .filter(Tn)
      .sort((c, l) => l.split(Z).length - c.split(Z).length);
  for (let c of i) if (await Yi(r, c)) return { kind: "held", checkout: c };
  let [o] = r.cutAt;
  return o === void 0 ? null : { kind: "unvouched", at: o };
}
async function Yi(e, n) {
  let r = M(e.nodes).filter((c) => Hb(n, c));
  if (r.some((c) => e.cutAt.has(c))) return !0;
  let i = r.filter((c) => !e.links.has(c)),
    o = await Promise.all(i.map(Ji));
  return i.length === 0 || o.some((c) => c === !0);
}
function Vi(e, n) {
  let r = new Set(),
    i = new Set(),
    o = 0,
    c = (u, g) => {
      let { root: m } = $e(u),
        h = u
          .slice(m.length)
          .split(Z === "/" ? /\/+/ : /[\\/]+/)
          .filter((p) => p !== "");
      return [m, ...l(m, [...h, ...g])];
    },
    l = (u, g) => {
      let [m, ...h] = g;
      if (m === void 0) return [];
      let p = E(u, m),
        b = On(p);
      if (b === "missing")
        return [p, ...h.map((C, T) => E(p, ...h.slice(0, T + 1)))];
      if (b === "opaque") return (i.add(p), [p]);
      if (b.link === null) return [p, ...l(p, h)];
      r.add(p);
      let y = ++o > Ft ? null : Pho(pHi(b.link, u, n), n, y0e());
      if (y === null || y.verdict !== "local") return (i.add(p), [p]);
      return [p, ...c(y.spelling, h)];
    };
  return { nodes: c(e, []), links: r, cutAt: i };
}
async function Ji(e) {
  try {
    return (await _r(e, Pe.W_OK), !0);
  } catch (n) {
    let r = w(n);
    if (r === "ENOENT" || r === "ENOTDIR") return "absent";
    if (!(r === "EACCES" || r === "EPERM" || r === "EROFS")) return !0;
  }
  try {
    let n = process.getuid?.();
    return n === void 0 || (await X(e)).uid === n;
  } catch (n) {
    let r = w(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : !0;
  }
}
function vt(e) {
  return !Z8(e) && !Xi(e);
}
function Xi(e) {
  return !1;
}
var qi = 391;
function Tn(e) {
  return eo(E(e, ".git")) || zi(e);
}
function zi(e) {
  return (
    ke(e).toLowerCase() !== ".git" &&
    (["HEAD", "objects", "refs"].every((n) => Qi(E(e, n))) ||
      (je(E(e, "worktrees"))?.isDirectory() === !0 && to(E(e, "config"))))
  );
}
function Qi(e) {
  return je(e) !== void 0;
}
function eo(e) {
  try {
    return pn(e, { throwIfNoEntry: !1 }) !== void 0;
  } catch (n) {
    let r = w(n);
    return !(r === "ENOTDIR" || r === "ELOOP" || r === "ENAMETOOLONG");
  }
}
var Vn = 4096,
  no = /^[ \t]*\[core\]/im;
function to(e) {
  if (je(e)?.isFile() !== !0) return !1;
  try {
    let n = kr(e, Xu());
    try {
      let r = Buffer.alloc(Vn),
        i = Sr(n, r, 0, Vn, 0),
        o = r.toString("latin1", 0, i).replace(/^\xEF\xBB\xBF/, "");
      return no.test(o);
    } finally {
      br(n);
    }
  } catch {
    return !1;
  }
}
var ro = 1048576;
async function Brl(e, n, r) {
  for (let k of ["config", "config.worktree"]) {
    let O = E(e, k),
      v = await Ge(O, !1);
    if (v.kind === "unread") return { kind: "unread", file: O };
    if (v.kind === "shared") return { kind: "second_name", file: O };
    if (v.kind === "read" && v.hasInclude) return { kind: "includes", file: O };
    if (v.kind === "read" && v.coreWorktree)
      return { kind: "work_tree", file: O };
    if (v.kind === "read" && r && v.worktreeConfigOn)
      return { kind: "worktree_config", file: O };
  }
  let i = Ue(n),
    o = i.length === 0 ? [] : M([Ee(), ...i].flatMap((k) => [k, ...tn(k, n)])),
    c = ze(n);
  if (c === "unreadable")
    return { kind: "settings_unreadable", file: E(n, ".claude") };
  let l = (
      await Promise.all(
        M([...Lhr(n), ...c]).map(async (k) => {
          let O = await Eit(await _0e(k, n), n, y0e());
          return O.verdict === "local"
            ? await Dt(M([k, O.spelling, ...tn(O.spelling, n)]))
            : vit(O.verdict === "foreign" ? { ...O, verdict: "opaque" } : O, n);
        }),
      )
    ).flat(),
    u = M([
      ...[n, e, aon(e)].flatMap((k) => [k, ...tn(k, n)]),
      ...l,
      ...(await oo(await pco(n), n)),
      ...o,
    ]),
    g = async (k, O) => {
      if (pg(O)) return !0;
      let v = await Eit(await _0e(O, n), n, y0e());
      if (v.verdict !== "local") return !0;
      let D = ce(v.spelling, n);
      return D === null || k.some((L) => Hb(L, O) || Hb(L, D));
    },
    m = (k) => g(u, k),
    h = (k) => Ki(k, n),
    p = async (k) => {
      for (let O of k) if (await m(O)) return O;
      return;
    },
    b = G6(void 0),
    y = 0,
    C = async (k, O, v) => {
      for (let D of k) {
        let L = /^%\(prefix\)\/(.*)$/s.exec(D);
        if (L !== null && !Y(L[1] ?? "") && D.split(/[/\\]/).includes(".."))
          return "includes";
        let te = L !== null && Y(L[1] ?? "") ? (L[1] ?? D) : D,
          S = gt(te, O, n);
        if (S.some((P) => P.includes("\uFFFD") || IBt(P))) return "unread";
        if ((await p(S)) !== void 0) return "includes";
        for (let P of S) {
          let R = await h(P);
          if (R?.kind === "unvouched") return "unread";
          if (R !== null)
            return { kind: "config_in_checkout", checkout: R.checkout };
        }
        for (let P of S) {
          if ((y++, v >= io || y > lco)) return "unread";
          let R = await Ge(P, !0);
          if (R.kind === "unread") return "unread";
          if (R.kind === "shared") return "second_name";
          if (R.kind === "read") {
            let H = I(R);
            if (H !== "clear") return H;
            let J = await C(R.includes, `file:${P}`, v + 1);
            if (J !== "clear") return J;
          }
        }
      }
      return "clear";
    },
    T = (k, O) =>
      typeof k === "string"
        ? { kind: k, file: O }
        : { kind: "config_in_checkout", file: O, checkout: k.checkout },
    I = (k) =>
      k.coreWorktree
        ? "work_tree"
        : r && k.worktreeConfigOn
          ? "worktree_config"
          : "clear",
    G = Rn(b);
  if (G === null) return { kind: "unread", file: Bhr };
  for (let { key: k, value: O } of G) {
    let v = k.toLowerCase();
    if (v === "core.worktree") return { kind: "work_tree", file: Bhr };
    if (r && v === "extensions.worktreeconfig" && (O === void 0 || fn(O)))
      return { kind: "worktree_config", file: Bhr };
    if (Gt(v) && O !== void 0) {
      let D = await C([O], "command line:", 0);
      if (D !== "clear") return T(D, Bhr);
    }
  }
  let W = M(cHi([], n, null, b));
  for (let k of W) {
    if (k.includes("\uFFFD") || IBt(k)) return { kind: "unread", file: k };
    if (i.length > 0 && (await g(o, k)))
      return { kind: "home_checkout", file: k, checkout: i[0] };
    if (await m(k)) return { kind: "includes", file: k };
    let O = await h(k);
    if (O?.kind === "unvouched") return { kind: "unread", file: k };
    if (O !== null)
      return { kind: "config_in_checkout", file: k, checkout: O.checkout };
    if (ce(k, n) === k && (await ao(k))) continue;
    let v = await Ge(k, !0);
    if (v.kind === "device") continue;
    if (v.kind === "unread") return { kind: "unread", file: k };
    if (v.kind === "shared") return { kind: "second_name", file: k };
    if (v.kind === "read") {
      let D = I(v);
      if (D !== "clear") return { kind: D, file: k };
      let L = await C(v.includes, `file:${k}`, 0);
      if (L !== "clear") return T(L, k);
    }
  }
  return { kind: "clear" };
}
var Bhr = "the launch environment (GIT_CONFIG_*)",
  io = 4;
function Gt(e) {
  return (
    e === "include.path" || (e.startsWith("includeif.") && e.endsWith(".path"))
  );
}
function Rn(e) {
  let n = [],
    r = Zi(e, "GIT_CONFIG_COUNT");
  if (r !== void 0 && r !== "") {
    if (!/^\d+$/.test(r.trim())) return null;
    for (let o = 0; o < Number(r); o++) {
      let c = Zi(e, `GIT_CONFIG_KEY_${o}`),
        l = Zi(e, `GIT_CONFIG_VALUE_${o}`);
      if (c === void 0 || l === void 0) return null;
      n.push({ key: c, value: l });
    }
  }
  let i = Zi(e, "GIT_CONFIG_PARAMETERS");
  if (i !== void 0 && i.trim() !== "") {
    let o = so(i);
    if (o === null) return null;
    n.push(...o);
  }
  return n;
}
async function oo(e, n) {
  let r = await Promise.all(
    e.map(async (i) => ({
      root: i,
      local: (await Eit(await _0e(i, n), n, y0e())).verdict === "local",
    })),
  );
  return [
    ...(await Dt(r.filter(({ local: i }) => i).map(({ root: i }) => i))),
    ...r.filter(({ local: i }) => !i).map(({ root: i }) => i),
  ];
}
async function Dt(e) {
  return (
    await Promise.all(
      e.map(async (r) => {
        if (!Y(r)) return null;
        try {
          let i = await X(r);
          return i.isCharacterDevice() || i.isFIFO() || i.isSocket() ? null : r;
        } catch {
          return r;
        }
      }),
    )
  ).filter((r) => r !== null);
}
var nn = /[ \t\n\r]/;
function so(e) {
  let n = [],
    r = 0,
    i = () => {
      if (e[r] !== "'") return null;
      let o = "";
      r++;
      for (;;) {
        let c = e.indexOf("'", r);
        if (c === -1) return null;
        if (
          ((o += e.slice(r, c)),
          (r = c + 1),
          e[r] === "\\" && r + 2 < e.length && e[r + 2] === "'")
        ) {
          ((o += e[r + 1]), (r += 3));
          continue;
        }
        return o;
      }
    };
  while (r < e.length) {
    while (r < e.length && nn.test(e[r] ?? "")) r++;
    if (r >= e.length) break;
    let o = i();
    if (o === null) return null;
    if (e[r] === "=") {
      if ((r++, r >= e.length || nn.test(e[r] ?? ""))) {
        n.push({ key: o, value: void 0 });
        continue;
      }
      let c = i();
      if (c === null) return null;
      n.push({ key: o, value: c });
    } else {
      let c = o.indexOf("=");
      n.push(
        c === -1
          ? { key: o, value: void 0 }
          : { key: o.slice(0, c).trim(), value: o.slice(c + 1) },
      );
    }
    if (r < e.length && !nn.test(e[r] ?? "")) return null;
  }
  return n;
}
async function ao(e) {
  try {
    return (await X(e)).isCharacterDevice();
  } catch {
    return !1;
  }
}
async function Ge(e, n) {
  let r;
  try {
    if (!n && x() === "windows" && !(await X(e)).isFile())
      return { kind: "unread" };
    r = await Re(e, n ? Pe.O_RDONLY | co() : Xu());
  } catch (i) {
    let o = w(i);
    return o === "ENOENT" || o === "ENOTDIR"
      ? { kind: "absent" }
      : { kind: "unread" };
  }
  try {
    let i = await r.stat();
    if (i.isCharacterDevice()) return { kind: "device" };
    if (!i.isFile() || i.size > ro) return { kind: "unread" };
    if (await Ffl(e, i)) return { kind: "shared" };
    let o = Buffer.alloc(i.size),
      { bytesRead: c } = await r.read(o, 0, i.size, 0);
    if (c !== i.size) return { kind: "unread" };
    let l = o.toString("utf8");
    return yOe(l) ? { kind: "unread" } : lo(l);
  } catch {
    return { kind: "unread" };
  } finally {
    await r.close().catch(() => {});
  }
}
function co() {
  return x() === "windows" ? 0 : Pe.O_NONBLOCK;
}
function lo(e) {
  let n = [],
    r = !1,
    i = !1,
    o = !1,
    c = !1,
    l = !0,
    u = !1;
  return (
    ihn(
      e,
      {
        header(g) {
          ((r ||= Jn(g.name)), (l &&= g.name === "core" && !g.quoted));
        },
        entry(g, m, h) {
          if (
            ((l &&= g?.name === "core" && !g.quoted && uo.has(m)), g === null)
          )
            return;
          if (Jn(g.name) && m === "path")
            if (h === void 0) u = !0;
            else n.push(h);
          if (g.name === "core" && !g.quoted && m === "worktree") i = !0;
          if (g.name === "extensions" && !g.quoted && m === "worktreeconfig")
            o = h === void 0 || fn(h);
          if (g.name === "core" && !g.quoted && m === "bare")
            c ||= h === void 0 || fn(h);
        },
        malformed() {
          u = !0;
        },
      },
      { maxLines: 1 / 0 },
    ),
    u
      ? { kind: "unread" }
      : {
          kind: "read",
          includes: n,
          hasInclude: r,
          coreWorktree: i,
          worktreeConfigOn: o,
          saysBare: c,
          inertWorktreeKeysOnly: l,
        }
  );
}
var uo = new Set(["hookspath", "untrackedcache", "longpaths"]);
function fn(e) {
  let n = e.trim().toLowerCase();
  return !(
    ["false", "no", "off", ""].includes(n) || /^[-+]?(0x)?0+[kmg]?$/.test(n)
  );
}
function Jn(e) {
  let n = nt(e, ".");
  return n === "include" || n === "includeif";
}
function je(e) {
  try {
    return pn(e, { throwIfNoEntry: !1 });
  } catch {
    return;
  }
}
function ce(e, n) {
  if (OSr(e, 0)) return null;
  let [r, i] = fo(e),
    o = gn(r, n);
  return o === null ? null : E(o, i);
}
function fo(e) {
  let n = x() === "windows" ? null : x() === "macos" ? 1024 : 4096;
  if (n === null || Buffer.byteLength(e) < n) return [e, ""];
  let r = e.lastIndexOf(Z, n - 1);
  while (r > 0 && Buffer.byteLength(e.slice(0, r)) >= n)
    r = e.lastIndexOf(Z, r - 1);
  return r > 0 ? [e.slice(0, r), e.slice(r + 1)] : [e, ""];
}
function gn(e, n, r = [], i = 0) {
  if (OSr(e, r.length)) return null;
  try {
    return E(uC(dt.native(e)), ...r);
  } catch {
    let o = i < go ? po(e) : null;
    if (o !== null) {
      let { spelling: l, verdict: u } = pHi(o.text, o.dir, n);
      return u === "local" ? gn(l, n, r, i + 1) : null;
    }
    let c = V(e);
    return c === e ? E(e, ...r) : gn(c, n, [ke(e), ...r], i);
  }
}
function tn(e, n) {
  let r = ce(e, n);
  return r === null ? vit({ spelling: e, verdict: "opaque" }, n) : [r];
}
var go = 8,
  Ne = "git was not found on the PATH this process was started with";
function mo(e) {
  let n = uco(e);
  return n === null
    ? ""
    : `; the home directory counts here because it ${fco(n, e) === "home" ? "is itself" : "lies inside"} a git checkout (${n})`;
}
var ho = `${Ne} (directories a cloud session bound here can write \u2014 inside this checkout or a checkout enclosing it, such as a worktree\u2019s main checkout; below your home directory when it is, or lies inside, a git checkout; a session temp directory; one whose git links into those \u2014 and directories that name or lead to another host are not searched)`,
  tCi =
    "If one of the directories that a cloud session can write cannot be examined, or is too deep or too long to resolve, every directory is left out; the debug log names the one to fix.";
function Whr(e, n, r = n) {
  return fa(e, r) || Rg(e, n, r);
}
function po(e) {
  try {
    let n = at(e),
      r = Y(n) ? V(e) : dt(V(e));
    return { text: n, dir: r };
  } catch {
    return null;
  }
}
function _o(e, n, r) {
  let i = Lt(n),
    o = new Map();
  return e
    .split(we)
    .map((c) => Zxt(c))
    .filter((c) => c !== "" && Y(c) && Ce(c, i, r, o))
    .join(we);
}
function Ce(e, n, r, i = new Map()) {
  if (pe(e, n, i)) return !1;
  let o = ce(e, n.anchor);
  if (o === null) return !1;
  return r.every((c) => {
    let l = `${e}${Z}${c}`;
    if (Jin(l, n.anchor)) return !1;
    let u = i.get(l) ?? On(l);
    if ((i.set(l, u), u === "missing")) return !n(l) && !n(E(o, c));
    if (u !== "opaque" && u.link === null) {
      let g = ce(l, n.anchor);
      return g !== null && !n(l) && !n(g);
    }
    return !pe(l, n, i);
  });
}
function Lt(e) {
  return Object.assign((n) => e.some((r) => Hb(r, n)), {
    beneath: (n) => e.some((r) => Hb(n, r) && !Hb(r, n)),
    anchor: e[0] ?? Z,
  });
}
function pe(e, n, r, i = Ft) {
  if (
    !Y(e) ||
    IBt(e) ||
    e.startsWith("\\\\?\\") ||
    Jin(e, n.anchor) ||
    n(e) ||
    n.beneath(e)
  )
    return !0;
  let { root: o } = $e(e),
    c = e
      .slice(o.length)
      .split(Z === "/" ? /\/+/ : /[\\/]+/)
      .filter((g) => g !== "" && g !== "."),
    l = o;
  for (let [g, m] of c.entries()) {
    l = m === ".." ? V(l) : E(l, m);
    let h = r.get(l);
    if (h === void 0 && (n(l) || Jin(l, n.anchor))) return !0;
    let p = h ?? On(l);
    if ((r.set(l, p), p === "opaque")) return !0;
    if (p === "missing") {
      let b = ce(e, n.anchor);
      return (
        b === null ||
        n(b) ||
        n.beneath(b) ||
        c.slice(g + 1).some((y, C) => n(E(l, ...c.slice(g + 1, g + 2 + C))))
      );
    }
    if (p.link !== null) {
      if (i === 0) return !0;
      let b = Y(p.link) ? p.link : `${V(l)}${Z}${p.link}`;
      return pe([b, ...c.slice(g + 1)].join(Z), n, r, i - 1);
    }
  }
  let u = ce(e, n.anchor);
  return u === null || n(u) || n.beneath(u);
}
var Ft = 40;
function On(e) {
  try {
    let n = pn(e, { throwIfNoEntry: !1 });
    if (n === void 0) return "missing";
    if (!n.isSymbolicLink()) return { link: null };
    let r = at(e);
    return { link: uC(r.replace(/^\\\?\?\\/, "\\\\?\\")) };
  } catch (n) {
    return w(n) === "ENOTDIR" ? "missing" : "opaque";
  }
}
var $t = x() === "windows" ? ["git", "powershell.exe"] : ["git", "ps"],
  wo = [
    ".exe",
    ".com",
    ".cmd",
    ".bat",
    ".vbs",
    ".vbe",
    ".js",
    ".jse",
    ".wsf",
    ".wsh",
    ".msc",
  ],
  yo = 32;
function Eo(e) {
  let n =
    x() === "windows"
      ? M([
          ...wo,
          ...(e ?? "")
            .split(";")
            .map((r) => r.trim().toLowerCase())
            .filter((r) => /^\.[^.\\/]+$/.test(r))
            .slice(0, yo),
        ])
      : [];
  return $t.flatMap((r) =>
    x() === "windows" && !r.includes(".") ? [r, ...n.map((i) => r + i)] : [r],
  );
}
function Mt(e, n, r) {
  return mn(e, n, $t, r);
}
function mn(e, n, r, i) {
  if (pe(e, n, i)) return !0;
  let o = bo(e);
  return o === null || !Ce(e, n, [...o, ...r], i);
}
function bo(e) {
  try {
    let n = st(e, { withFileTypes: !0 })
      .filter((r) => x() === "windows" || !r.isFile())
      .map((r) => r.name);
    return n.length > Bt ? null : n;
  } catch (n) {
    let r = w(n);
    return r === "ENOENT" || r === "ENOTDIR" ? [] : null;
  }
}
function ko(e, n, r) {
  return [e, E(e, "Contents", "Developer")].some((i) => {
    if (pe(i, n, r)) return !0;
    let o = pe(E(i, "Toolchains"), n, r) ? null : So(E(i, "Toolchains")),
      c = o === null ? null : [i, ...o.map((l) => E(i, "Toolchains", l))];
    return (
      c === null ||
      !Ce(E(i, "usr", "lib"), n, ["libxcrun.dylib"], r) ||
      !Ce(E(i, "usr", "bin"), n, ["xcrun", "xcodebuild"], r) ||
      c.some(
        (l) =>
          !Ce(E(l, "usr", "bin"), n, ["git"], r) ||
          Mt(E(l, "usr", "libexec", "git-core"), n, r),
      )
    );
  });
}
function So(e) {
  try {
    let n = st(e);
    return n.length > Bt ? null : n;
  } catch (n) {
    let r = w(n);
    return r === "ENOENT" || r === "ENOTDIR" ? [] : null;
  }
}
var Bt = 1024;
class lon {
  #e = new Map();
  screenMemo;
  constructor(e = "host") {
    this.screenMemo = e === "host" ? void 0 : ocs(e === "operation");
  }
  gitExeOnPath(e) {
    let n = Zi(e, "PATH") ?? "",
      r = this.#e.get(n);
    if (r !== void 0) return r;
    let i = In(n);
    if (i !== null) this.#e.set(n, i);
    return i;
  }
}
var Xn = /\.(?:exe|com)$/i;
function In(e, n = "darwin") {
  let r = dse("git", e);
  if (n !== "win32" || r === null || Xn.test(r)) return r;
  let i = dse("git.exe", e);
  return i !== null && Xn.test(i) ? i : null;
}
function nCi() {
  let e = Zi(hLn(), "PATH") ?? "";
  return In(e) === null && dse("git", e) !== null;
}
function To() {
  return x() === "windows"
    ? " (only git.exe counts; git.cmd and git.bat wrappers are skipped)"
    : "";
}
function rCi() {
  return x() === "windows"
    ? " On Windows, that directory must hold git.exe itself, since git.cmd and git.bat wrappers are skipped."
    : "";
}
var Oo = new j(() => new lon());
function ADe() {
  return Oo.of(N().host);
}
function be(e, n = ADe()) {
  return n.gitExeOnPath(e);
}
function qn(e, n) {
  return {
    kind: "failed",
    reason: "setup",
    cause: "home",
    home: n,
    detail: e,
    [Symbol.asyncDispose]: async () => {},
  };
}
function ne(e, n) {
  return {
    kind: "failed",
    reason: n === "placement" ? "placement" : "setup",
    cause: n,
    detail: e,
    [Symbol.asyncDispose]: async () => {},
  };
}
async function pco(e) {
  let n = gHi(),
    r = await Promise.all(
      n.map(async (i) => {
        let o = await Eit(await _0e(i, e), e, y0e());
        if (o.verdict === "local") {
          let c = await he(o.spelling).catch(() => ce(o.spelling, e));
          return c === null ? vit({ ...o, verdict: "opaque" }, e) : [c];
        }
        return (
          t(
            `[builderGit] session temp root ${ed(i, 256)} cannot be vouched for (${o.verdict}): nothing under any volume is`,
            { level: "warn" },
          ),
          vit(o.verdict === "foreign" ? { ...o, verdict: "opaque" } : o, e)
        );
      }),
    );
  return M([...n, ...r.flat()]);
}
async function Io(e) {
  let n = E(e, ".git"),
    r = await X(n).catch(() => null);
  if (r === null || r.isDirectory()) return { kind: "not_file" };
  if (!r.isFile()) return { kind: "refuse", why: "git_file" };
  let i = ISr(
    await RDe(n, { oneName: !0 }).catch(() => {
      return;
    }),
  );
  if (i === void 0 || Whr(i, e) || rp(S8e(e, i)))
    return { kind: "refuse", why: "git_file" };
  let o = await he(S8e(e, i)).catch(() => null);
  if (o === null) return { kind: "refuse", why: "admin_dir" };
  if (rp(o)) return { kind: "refuse", why: "admin_dir" };
  if (ke(V(o)) !== "worktrees")
    return { kind: "refuse", why: "git_file", adminDir: o };
  let c = V(V(o));
  if (An(await Cn(o), o) !== c)
    return { kind: "refuse", why: "common_dir", adminDir: o };
  let l = Oho(
    await RDe(E(o, "gitdir")).catch(() => {
      return;
    }),
  );
  if (
    (l === null || Whr(l, o, e) || rp(S8e(o, l))
      ? null
      : await he(S8e(o, l)).catch(() => null)) !== n
  )
    return { kind: "refuse", why: "back_link", adminDir: o };
  if (!(await Ut(c, e)))
    return { kind: "refuse", why: "placement", adminDir: o };
  return { kind: "chain", adminDir: o, commonDir: c };
}
async function Co(e, n, r, i) {
  let o = (W) => ({ kind: "linked_worktree", detail: W });
  if (Whr(n, e) || Whr(r, e) || rp(n) || rp(r)) return o("admin_dir");
  let [c, l] = await Promise.all([
    he(n).catch(() => null),
    he(r).catch(() => null),
  ]);
  if (c === null || l === null)
    return {
      kind: "unread",
      detail: "the git directory could not be resolved",
    };
  if (rp(c) || rp(l)) return o("admin_dir");
  let [u, g, m, h] = await Promise.all([
      zn(c),
      Aae(i.adminDir),
      zn(l),
      Aae(V(V(c))),
    ]),
    p = u?.id ?? null,
    b = m?.id ?? null;
  if (p !== null && p === b) return { kind: "git_file" };
  if (
    p === null ||
    g !== p ||
    ke(V(c)) !== "worktrees" ||
    b === null ||
    h !== b
  )
    return o("admin_dir");
  let [y, C] = await Promise.all([Qn(c), Qn(l)]),
    T = y !== null && C !== null && "id" in y && "id" in C;
  if (Do([y, C]) || (T && (y.identity !== p || C.identity !== b)))
    return {
      kind: "unread",
      detail: "the git directory changed while it was read",
    };
  if (!T && y !== null) {
    let W = [y, C]
      .flatMap((k) => (k !== null && "unread" in k ? [k.unread] : []))
      .join(", ");
    t(
      `[builderGit] ${c}: mount ids unread (${W}); the admin dir is compared with the common dir by device alone`,
    );
  }
  if (
    !Zn(
      { id: p, mountId: T ? y.id : null },
      { id: b, mountId: T ? C.id : null },
    ) &&
    !(
      T &&
      Zn({ id: p, mountId: null }, { id: b, mountId: null }) &&
      (await xo({ dir: c, mountId: y.id }, { dir: l, mountId: C.id }))
    )
  )
    return o("foreign_mount");
  if (An(await Cn(c), c) !== l) return o("common_dir");
  if (!(await Ut(l, e))) return o("placement");
  let I = u?.born,
    G = m?.born;
  return {
    kind: "vouched",
    gitDir: c,
    gitDirId: p,
    ...(I !== void 0 && { gitDirBorn: I }),
    commonDir: l,
    commonDirId: b,
    ...(G !== void 0 && { commonDirBorn: G }),
  };
}
async function Po(e, n, r) {
  if (r === null || rp(r)) return !1;
  let i = await he(r).catch(() => null);
  if (i === null) return "unresolved";
  if (i === n) return !0;
  let o = E(r, ".git"),
    c = await Aae(r),
    l = await Aae(o),
    u = await he(o).catch((h) =>
      ["ENOENT", "ENOTDIR"].includes(w(h) ?? "") ? null : "unresolved",
    ),
    g = { id: e.id ?? (await Aae(e.resolved)), resolved: e.resolved };
  return (
    [
      { id: c, resolved: i },
      { id: l, resolved: u === "unresolved" ? null : u },
    ].some((h) => Ht(h, g)) || (u === "unresolved" ? "unresolved" : !1)
  );
}
function Ht(e, n) {
  return e.id !== null &&
    n.id !== null &&
    _Ln(e.id) === "an_object" &&
    _Ln(n.id) === "an_object"
    ? e.id === n.id
    : e.resolved !== null && e.resolved === n.resolved;
}
async function Ut(e, n) {
  let r = e.split(Z).filter((l) => l !== ""),
    i = r.at(-1) ?? "",
    o = (l) => l.toLowerCase() === ".git" || l.toLowerCase().endsWith(".git");
  if (!o(i) || r.slice(0, -1).some(o)) return !1;
  if (Hb(n, e) || Hb(e, n)) return !1;
  return !(await pco(n)).some((l) => Hb(l, e));
}
async function No(e, n, r, i) {
  let o = await cw(
    e,
    [
      "config",
      "--file",
      E(n.commonDir, "config"),
      "--bool",
      "--default=false",
      "extensions.worktreeConfig",
    ],
    { hardened: !0, layout: n, signal: r, probes: i },
  );
  return o.code !== 0 ? null : o.stdout.trim() === "true";
}
async function Ao(e, n, r, i) {
  let [o, c] = await Promise.all([
    cw(
      e,
      [
        "config",
        "--file",
        E(n.commonDir, "config"),
        "--bool",
        "--default=false",
        "extensions.worktreeConfig",
      ],
      { hardened: !0, layout: n, signal: r, probes: i },
    ),
    oCi(n.gitDir),
  ]);
  if (o.code !== 0 || c === "unread") return "unread";
  if (c !== "absent") return (await vo(n.gitDir)) ? "inert" : "file";
  return o.stdout.trim() === "false" ? "absent" : "extension";
}
async function vo(e) {
  let n = await Ge(E(e, "config.worktree"), !1);
  return n.kind === "read" && n.inertWorktreeKeysOnly;
}
function oCi(e) {
  return X(E(e, "config.worktree")).then(
    (n) =>
      n.isFile() && n.nlink === 1 && n.size === 0 ? "absent" : "standing",
    (n) => {
      let r = w(n);
      return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "unread";
    },
  );
}
async function zn(e) {
  try {
    let n = await X(e, { bigint: !0 });
    return n.isDirectory() ? { id: `${n.dev}:${n.ino}`, born: j2t(n) } : null;
  } catch {
    return null;
  }
}
function Zn(e, n) {
  let r = (i) => i.slice(0, i.indexOf(":"));
  return r(e.id) === r(n.id) && e.mountId === n.mountId;
}
async function xo(e, n) {
  let r;
  try {
    r = await ot("/proc/self/mountinfo", "utf8");
  } catch {
    return !1;
  }
  let i = (p) =>
      p.replace(/\\([0-7]{3})/g, (b, y) => String.fromCharCode(parseInt(y, 8))),
    o = new Map();
  for (let p of r.split(`
`)) {
    let b = p.split(" ");
    if (b.length >= 5 && (b[0] === e.mountId || b[0] === n.mountId))
      o.set(b[0], { device: b[2], root: i(b[3]), point: i(b[4]) });
  }
  let c = o.get(e.mountId),
    l = o.get(n.mountId);
  if (c === void 0 || l === void 0) return !1;
  let u = (p, b) => {
      let y = an(b.point, p);
      return y.startsWith("..") || Y(y) ? null : E(b.root, y);
    },
    g = u(e.dir, c),
    m = u(n.dir, l),
    h = an(n.dir, e.dir);
  return (
    c.device === l.device &&
    g !== null &&
    m !== null &&
    !h.startsWith("..") &&
    !Y(h) &&
    g === E(m, h)
  );
}
var Go = new Set(["ENOENT", "ENOTDIR", "ELOOP", "ENAMETOOLONG"]);
function Do(e) {
  return e.some(
    (n) =>
      n !== null && "unread" in n && n.stage === "open" && Go.has(n.unread),
  );
}
var jt = mO | Pe.O_DIRECTORY | Pe.O_NOFOLLOW | cr;
async function Qn(e) {
  return null;
}
function rn(e, n) {
  return e === "not_held" || (e !== "gone" && e.id === n);
}
function et(...e) {
  return {
    kind: "failed",
    detail:
      "a git directory was replaced after the read opened it, or could not be opened",
    why: "changed_under_hold",
    unopened: e.includes("gone"),
  };
}
function Lo() {
  return Qxt() === "1" && !Or().toLowerCase().includes("microsoft-standard");
}
function sCi() {
  let e = [];
  return {
    hold: async (n) => {
      if (mO === 0 || Lo()) return "not_held";
      try {
        let r = await Re(n, jt);
        e.push(r);
        let i = await r.stat({ bigint: !0 });
        return { id: `${i.dev}:${i.ino}` };
      } catch (r) {
        return (
          t(
            `[builderGit] could not open a directory to hold it: ${w(r) ?? d(r)}`,
          ),
          "gone"
        );
      }
    },
    [Symbol.asyncDispose]: async () => {
      await Promise.all(e.splice(0).map((n) => n.close().catch(() => {})));
    },
  };
}
async function Aae(e) {
  try {
    let n = await X(e, { bigint: !0 });
    return n.isDirectory() ? `${n.dev}:${n.ino}` : null;
  } catch {
    return null;
  }
}
function _Ln(e) {
  let [, n, r] = /^(-?\d+):(-?\d+)$/.exec(e) ?? [];
  return n === void 0 || r === void 0
    ? "unreadable"
    : BigInt(n) === 0n || ia(BigInt(r))
      ? "none"
      : "an_object";
}
function Wrl(e, n, r) {
  if (
    r === null ||
    e.workTreeId === void 0 ||
    _Ln(r) === "unreadable" ||
    _Ln(e.workTreeId) === "unreadable"
  )
    return "not_known";
  let i = e.workTree === h$t(n);
  return e.workTreeId === r && (i || _Ln(r) === "an_object")
    ? "the_same"
    : i
      ? "another_at_the_path"
      : "another_elsewhere";
}
function h$t(e) {
  return x() === "windows" ? e.replaceAll("\\", "/") : e;
}
function Fo(e, n) {
  return M([e, n].flatMap((r) => [V(r), h$t(V(r))])).join(we);
}
async function Jfe(e, n) {
  let r = e;
  for (let i of n.slice(0, -1)) {
    r = E(r, i);
    let o = await ae(r);
    if (o !== "directory") return o === "absent" ? "absent" : "other";
  }
  return ae(E(r, n.at(-1)));
}
var tt = 4096;
async function Cn(e) {
  try {
    let n = await RDe(E(e, "commondir"));
    return Oho(n) ?? void 0;
  } catch (n) {
    return w(n) === "ENOENT" ? null : void 0;
  }
}
async function RDe(e, n = {}) {
  return ((await rt(e, n)) ?? (await rt(e, n)))?.text;
}
async function rt(e, { tail: n, oneName: r = !1 }) {
  let i = x() === "windows" ? await X(e, { bigint: !0 }) : null;
  if (i !== null && !i.isFile()) return { text: void 0 };
  let o = await Re(e, Xu());
  try {
    let c = await o.stat({ bigint: !0 });
    if (i !== null && RF(i, c))
      return (
        t(
          `[builderGit] ${e}, once opened, had file number ${c.ino}, not the ${i.ino} that the lstat before it saw; nothing of it was read`,
        ),
        null
      );
    let l = Number(c.size);
    if (!c.isFile() || (r && c.nlink !== 1n) || (n === void 0 && l > tt))
      return { text: void 0 };
    let u = Math.min(l, n ?? tt),
      g = Buffer.alloc(u),
      { bytesRead: m } = await o.read(g, 0, u, l - u);
    if (m !== u) return { text: void 0 };
    let h = r ? await o.stat({ bigint: !0 }) : c;
    return {
      text:
        h.nlink === c.nlink && h.ctimeNs === c.ctimeNs
          ? g.toString("utf8")
          : void 0,
    };
  } finally {
    await o.close();
  }
}
function An(e, n) {
  if (e === void 0) return;
  let r =
    e === null ? "." : e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
  return r === "." ? n : r === "../.." ? V(V(n)) : r;
}
function on(e) {
  let n = x() === "windows" ? /\r?\n$/ : /\n$/;
  return n.test(e) ? e.replace(n, "") : null;
}
function $o({
  gitDir: e,
  commonDir: n,
  workTree: r,
  adminDir: i,
  pinnedIndexFile: o,
}) {
  return i === void 0
    ? {
        GIT_DIR: e,
        GIT_COMMON_DIR: n,
        GIT_WORK_TREE: r,
        ...(o !== void 0 && { GIT_INDEX_FILE: o }),
      }
    : { GIT_DIR: i, GIT_WORK_TREE: r, GIT_INDEX_FILE: E(i, "index") };
}
var Wt = String.raw`^(include|includeif\..*)\.path$`,
  Mo = new RegExp(Wt, "s");
var Ho = /^includeif\.(?:gitdir(?:\/i)?|hasconfig):/s,
  yLn = { LC_ALL: "C", LANGUAGE: "C" },
  Kt = { GIT_TEST_COMMIT_GRAPH: "0", GIT_TEST_MULTI_PACK_INDEX: "0" },
  Uo = {
    ...Kt,
    GIT_ALLOW_PROTOCOL: aQe,
    GIT_TERMINAL_PROMPT: "0",
    ...yLn,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_GRAFT_FILE:
      x() === "windows" ? "\\\\.\\NUL\\no-grafts" : "/dev/null/no-grafts",
  },
  jo = { GIT_REF_PARANOIA: "1" },
  rwt = {
    ...Kt,
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_GRAFT_FILE:
      x() === "windows" ? "\\\\.\\NUL\\no-grafts" : "/dev/null/no-grafts",
  },
  Yt = ["core.useReplaceRefs", "false"],
  Wo = [
    ["core.commitGraph", "false"],
    ["core.multiPackIndex", "false"],
    ["pack.useBitmaps", "false"],
    ["pack.readReverseIndex", "false"],
    Yt,
  ],
  Vt = (e) => e.flatMap(([n, r]) => ["-c", `${n}=${r}`]),
  Vne = Vt(Wo),
  g$t = Vt([Yt]),
  iCi = ["-c", "core.safecrlf=false"],
  Ko = ["-c", "submodule.recurse=false", ...iCi, ...Vne],
  it = 67108864;
var don =
  "If this project is not on GitHub yet, you can create a repository at https://github.com/new and push to it.";
import {
  basename as Xt,
  delimiter as ad,
  dirname as We,
  isAbsolute as Yo,
  join as Vo,
} from "path";
var Jo = new j(() => new Map()),
  Xo = new j(() => new Map()),
  qo = 15000;
function zo(e) {
  return new lon("operation");
}
function qt(e) {
  let n = e[0] ?? "",
    r = Jo.of(N().host),
    i = r.get(n);
  if (i !== void 0) return i;
  let o = new lon("checkout");
  return (r.set(n, o), o);
}
function xn(e, n = Ln()) {
  return e === void 0 || e === re
    ? G6(e, void 0, n)
    : m$t(e, qt(e).screenMemo, n);
}
function jhr(e) {
  return { file: Zo(e), startsOutside: e !== void 0 };
}
function Zo(e) {
  let n = e === void 0 || e === re ? be(G6(e)) : be(xn(e), qt(e));
  if (n !== null) return n;
  let r = e === re,
    i = typeof e === "object" ? e : [],
    o = typeof e === "object" ? be(G6(void 0)) : null,
    c = i.filter(Sn),
    l = o !== null && c.some((m) => Hb(m, o)),
    u = typeof e === "object" && !l && o !== null,
    g = r
      ? "settings_unreadable"
      : l
        ? "volume_in_reach"
        : u
          ? "only_inside_reach"
          : "not_on_path";
  if (lV().sayGitNotOnStartPath(g)) {
    let m = i[0] ?? "",
      h = g === "only_inside_reach" ? uco(m) : null;
    (t(
      `[screenedGit] ${Ye({ cause: g, tree: m, found: o, volumes: c, homeCheckout: h })}`,
      { level: "warn" },
    ),
      Ke({
        only_inside_reach: u,
        settings_unreadable: r,
        volume_in_reach: l,
        home_checkout: h !== null,
      }));
  }
  return Dn(e);
}
async function Gn(e, n) {
  let { dir: r, env: i, signal: o, startsInProject: c = !1 } = n,
    l = !c,
    u = { ...jhr(e), startsOutside: l },
    g = u.file,
    m = { file: Dn(e), startsOutside: l };
  if (g === m.file) return m;
  let h = await ns(
    async () => {
      let p = await gLn(u, ["version"], {
        dir: r,
        env: { ...i, ...yLn },
        abortSignal: o,
        timeout: qo,
        stdin: "ignore",
        preserveOutputOnError: !1,
      });
      return p.code === 0 ? p.stdout : null;
    },
    es(u, r),
  );
  if (ull(h === null ? null : EAe(h))) return u;
  if (h === null && o?.aborted) return m;
  if (lV().sayGitNotOnStartPath("old_git"))
    (t(
      `[screenedGit] ${Ye({ cause: "old_git", tree: r, found: g, volumes: [], homeCheckout: null })}`,
      { level: "warn" },
    ),
      Ke({ old_git: !0 }));
  return m;
}
var Qo = {
  only_inside_reach: !1,
  reach_unplaced: !1,
  settings_unreadable: !1,
  volume_in_reach: !1,
  home_checkout: !1,
  old_git: !1,
  did_not_run_from_outside: !1,
};
function Ke(e) {
  a("tengu_dir_sync_git_not_on_start_path", { ...Qo, ...e });
}
function Ye({ cause: e, tree: n, found: r, volumes: i, homeCheckout: o }) {
  let c = n === "" ? "" : ` (${n})`,
    l = r ?? "git";
  switch (e) {
    case "settings_unreadable":
      return Be;
    case "volume_in_reach":
      return `no screened git runs here${c} this time: a whole volume (${i.filter((u) => Hb(u, l)).join(", ")}) counts as writable by the bound cloud session for now, so ${l} is not vouched for. If it persists, either a grant names a whole volume, or a directory the session can write could not be examined (the \xABcannot be vouched for\xBB line above names that directory)`;
    case "only_inside_reach":
      return o === null
        ? `no screened git runs here${c}: ${l}, the git on the PATH this process was started with, stands where the bound cloud session can write (this checkout, one enclosing it, a directory granted to the session, a linked tree's main checkout), links into such a place, or is on another host \u2014 and nothing there is searched. Install or link git elsewhere on that PATH and restart Claude Code`
        : `no screened git runs here${c}: your home directory is a git checkout, or lies in one (${o}), so a cloud session bound there could write everything beneath it, and ${l} stands there or somewhere else a session can write; nothing there is searched. Install or link git outside your home (the system's or a package manager's directory) and restart Claude Code, or move the .git directory out of ${o} (kept elsewhere, it keeps its history)`;
    case "not_on_path":
      return "git is not on the absolute entries of the PATH this process was started with; no screened git runs";
    case "did_not_run_from_outside":
      return "";
    case "old_git":
      return `git reads made before a cloud session starts (such as which remote this checkout uses, or which pushed commit to start from) were skipped here${c}: ${l} is older than 2.32, or its version could not be read, and only git 2.32 or newer can be told to ignore your personal git configuration file \u2014 a file a cloud session could change when your home directory is itself a git checkout. Update git to 2.32 or newer and restart Claude Code`;
    case "reach_unplaced":
      return `git reads made before a cloud session starts (such as which remote this checkout uses, or which pushed commit to start from) were skipped here${c} this time: what a bound cloud session can write could not be worked out from this checkout\u2019s git layout, or there is no usable git on the PATH to read it with (the \xABcould not work out\xBB line above, at debug level, says which)`;
  }
}
function Dn(e) {
  if (x() !== "windows")
    return "/nonexistent/git-not-on-the-PATH-this-process-was-started-with";
  let n = Zi(G6(void 0), "SystemRoot");
  return Vo(
    n !== void 0 &&
      /^[A-Za-z]:[\\/]/.test(n) &&
      e !== re &&
      !(e ?? []).some((r) => Hb(r, n) || Hb(n, r))
      ? n
      : "C:\\Windows",
    "System32",
    "git-not-on-the-PATH-this-process-was-started-with.exe",
  );
}
function es({ file: e, startsOutside: n }, r) {
  return `${e}\x00${r}\x00${n}`;
}
function ns(e, n) {
  let r = Xo.of(N().host),
    i = r.get(n);
  if (i !== void 0) return i;
  let o = () => (r.delete(n), null),
    c = e().then((l) => {
      if (l === null) return o();
      let u = EAe(l);
      try {
        a("tengu_dir_sync_git_version", {
          release: u !== null,
          major: u?.major ?? 0,
          minor: u?.minor ?? 0,
          in_shims_folder: Xt(We(nt(n, "\x00"))) === "shims",
        });
      } catch {}
      return l;
    }, o);
  return (r.set(n, c), c);
}
function ts(e = Ln()) {
  return bn(xn(void 0, e));
}
function Jt(e, n, r) {
  let i = r ?? Ln(),
    o = xn(n, i);
  return {
    ...ms({ ...ts(i), ...os, ...{}, ...En(o), ...e }, { base: o }),
    GIT_CONFIG: void 0,
    ...Nhr,
  };
}
var ve = Symbol("reach unplaced");
async function ics(e, n, r = !1) {
  let i = performance.now(),
    o = await tcs(e, n, {
      linkedTrees: !0,
      bound: !0,
      startsInProject: r,
      probes: zo(e),
    }),
    c = is(e, o),
    l = n?.aborted === !0;
  try {
    a("tengu_cloud_launch_git_layout_read", {
      outcome: f(
        c === ve
          ? "unplaced"
          : c === re
            ? "nothing_vouched"
            : o.kind === "read"
              ? "placed"
              : "widened",
      ),
      reason: l ? void 0 : fe(rs(o)),
      cut_short: l,
      git_within_reach:
        o.kind === "failed" &&
        o.why !== "changed_under_hold" &&
        o.withinReach === !0,
      duration_ms: Math.round(performance.now() - i),
    });
  } catch {}
  return c;
}
function rs(e) {
  if (e.kind === "read") return;
  if (e.kind === "tampered") return e.misplaced;
  return e.why === "changed_under_hold" ? e.why : (e.why ?? e.cause);
}
function is(e, n) {
  if (n.kind === "read") return kn(e, n.layout);
  let r =
    n.kind === "tampered" && n.misplaced !== "temp_root"
      ? [n.commonDir, n.gitDir].find((o) => Yo(o))
      : void 0;
  if (r === void 0) {
    if (n.kind === "failed" && n.why === "settings_unreadable") return re;
    if (
      n.kind === "failed" &&
      n.why !== "changed_under_hold" &&
      n.cause === "git_did_not_run_from_outside" &&
      lV().sayGitNotOnStartPath("did_not_run_from_outside")
    )
      (t(
        `[screenedGit] ${Ye({ cause: "did_not_run_from_outside", tree: e, found: null, volumes: [], homeCheckout: null })}`,
        { level: "warn" },
      ),
        Ke({ did_not_run_from_outside: !0 }));
    let o =
      n.kind === "tampered"
        ? n.misplaced
        : n.detail.slice(0, 200) || "no message";
    return (
      t(
        Yn(
          `[screenedGit] could not work out what a bound cloud session can write in ${e} (${n.kind}: ${o})`,
        ),
      ),
      ve
    );
  }
  let i = Xt(We(r)).toLowerCase() === "worktrees" ? We(We(r)) : r;
  return kn(e, { workTree: e, commonDir: i });
}
async function jrl(e, n, r, i = !1) {
  if (e === ve) {
    if (!r?.aborted && lV().sayGitNotOnStartPath("reach_unplaced"))
      (t(
        `[screenedGit] ${Ye({ cause: "reach_unplaced", tree: n, found: null, volumes: [], homeCheckout: null })}`,
        { level: "warn" },
      ),
        Ke({ reach_unplaced: !0 }));
    let l = Ghr({}, re),
      u = { file: Dn(re), startsOutside: !i };
    return (g) => He(u, g, { dir: n, env: l });
  }
  let o = Ghr({}, e),
    c = await Gn(e, { dir: n, env: o, signal: r, startsInProject: i });
  return (l) => He(c, l, { dir: n, env: o });
}
function Ghr(e, n) {
  let r = xe(Se());
  if (n === void 0)
    return {
      ...Jt(e, void 0, r),
      GIT_REFERENCE_BACKEND: Zi(r, "GIT_REFERENCE_BACKEND"),
    };
  return {
    ...Jt({ ...e, GIT_CONFIG_GLOBAL: zhr }, n, r),
    GIT_CONFIG_SYSTEM: void 0,
  };
}
var os = {
  GIT_ALLOW_PROTOCOL: aQe,
  GIT_NO_LAZY_FETCH: "1",
  GIT_TERMINAL_PROMPT: "0",
};
function Ln() {
  return $n(Se());
}
var Qfe = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  ss = /^0+$/;
var zt = [
    "-z",
    "-m",
    "--raw",
    "--no-abbrev",
    "--no-renames",
    "--no-ext-diff",
    "--diff-filter=AMT",
    "--ignore-submodules=none",
  ],
  Od = [
    "-c",
    "log.showRoot=true",
    "-c",
    "log.diffMerges=separate",
    "-c",
    "log.follow=false",
    "-c",
    "log.showSignature=false",
    "log",
    "--format=",
    ...zt,
  ],
  Id = ["diff-tree", "--stdin", "--always", "--parents", "--root", "-r", ...zt];
function Grl(e) {
  return !ss.test(e);
}
var as = 30000,
  ds = 1e4,
  Zt = 1e4,
  cs = 8,
  ls = 4194304;
async function mco({
  gitRoot: e,
  remoteName: n,
  branch: r,
  headCommit: i,
  nameContaining: o = !1,
  countAhead: c = !1,
  sessionRoot: l,
  sessionReach: u,
  startsInProject: g = !1,
  gitEnvPins: m = {},
  unsetInGitChildren: h = [],
  staleBranch: p,
  signal: b,
  deadlineMs: y,
  onSearchAmongAllRefs: C,
  withRefsAtHead: T = !0,
  onCreation: I,
}) {
  try {
    let G = l === void 0 ? void 0 : (u ?? (await ics(l, b, g)));
    if (G === re || G === ve)
      return { kind: "unknown", cause: "nothing_vouched" };
    if (i !== void 0 && !Qfe.test(i))
      return { kind: "unknown", cause: "not_a_commit_id" };
    let W = i ?? "HEAD",
      k = {
        ...Ghr(
          { ...m, GIT_GRAFT_FILE: "/dev/null", GIT_NO_REPLACE_OBJECTS: "1" },
          G,
        ),
        ...Object.fromEntries(h.map((F) => [F, void 0])),
      },
      O =
        G === void 0
          ? jhr(void 0)
          : await Gn(G, { dir: e, env: k, signal: b, startsInProject: g }),
      v = async (F, B) => {
        let Q = Math.max(1, Math.floor(y ?? F)),
          ie = Bo(b, { timeoutMs: Q, refTimer: !0 });
        try {
          return await B((de, K) =>
            gLn(O, [...Nn, ...g$t, ...de], {
              dir: e,
              env: k,
              abortSignal: ie.signal,
              timeout: Q,
              maxBuffer: ls,
              preserveOutputOnError: !1,
              ...(K === void 0 ? { stdin: "ignore" } : { input: K }),
            }),
          );
        } finally {
          ie.cleanup();
        }
      },
      D = `refs/remotes/${n}/`,
      L = p === void 0 ? null : `${D}${p}`,
      te = p !== void 0 && p === r,
      S = (F, B) =>
        _s(F, {
          remoteName: n,
          pushed: B,
          staleRef: L,
          head: W,
          headCommit: i,
          nameContaining: o,
        }),
      P = await v(ds, async (F) => {
        if (r !== "HEAD" && !te) {
          let se = await F(["show-ref", "--verify", "--quiet", `${D}${r}`]);
          if (se.exitCode === 0) {
            if (!c) return { kind: "on_remote" };
            let Je = await ir(F, `${D}${r}`, W);
            if (
              Je === null ||
              (Je > 0 &&
                (
                  await F(["rev-parse", "--is-shallow-repository"])
                ).stdout.trim() !== "false")
            )
              return { kind: "on_remote" };
            return { kind: "on_remote", aheadCount: Je };
          }
          if (se.exitCode !== 1)
            return { kind: "unknown", cause: "git_failed" };
        }
        let B = te ? !0 : await ws(F, n);
        if (B !== !0)
          return {
            kind: "unknown",
            cause: B === null ? "git_failed" : "refspec_not_covering",
          };
        if (r === "HEAD")
          return { kind: "search_all_refs", defaultBranch: null };
        let [Q, ie, { creationRead: de, creation: K, refsAt: me }] =
            await Promise.all([
              ks(F, D).catch(() => null),
              gs(F, D).catch(() => []),
              us(F, r)
                .catch(() => "read_failed")
                .then(async (se) => ({
                  creationRead: se,
                  creation: typeof se === "object" ? se : null,
                  refsAt: T
                    ? await hs(
                        F,
                        D,
                        W,
                        typeof se === "object" ? se.commit : null,
                      ).catch(() => ({ atHead: [], atCreation: [] }))
                    : { atHead: [], atCreation: [] },
                })),
            ]),
          ue = Q?.name === p ? null : (Q?.name ?? null),
          _e = K === null ? null : fs(K.from, n),
          Oe = await ps(
            F,
            M([
              ...(Q?.refs ?? []),
              ...ie,
              ...me.atHead.filter((se) => se !== L).slice(0, 1),
              ...me.atCreation.filter((se) => se !== L).slice(0, 1),
              ...(_e === null ? [] : [_e]),
            ]).filter((se) => se !== L),
          ).catch(() => []),
          z = Oe.length === 0 ? null : await S(F, { kind: "own", present: Oe });
        if (z?.kind !== "pushed_ancestor")
          return (
            Qt(I, K === null ? er(de) : "no_first_answer"),
            { kind: "search_all_refs", defaultBranch: ue }
          );
        let ee = { ...z, fromOwnRefs: !0 },
          ge =
            K !== null &&
            (K.commit === ee.commit ||
              (await F(["merge-base", "--is-ancestor", K.commit, ee.commit]))
                .exitCode === 0);
        return (
          Qt(I, K === null ? er(de) : ge ? "below_start" : "not_below_start"),
          ge ? ee : { kind: "search_all_refs", defaultBranch: ue, orElse: ee }
        );
      });
    if (P.kind !== "search_all_refs") return P;
    let R = () => b?.aborted === !0;
    if (R()) {
      if (P.orElse !== void 0) return P.orElse;
      return r === "HEAD"
        ? { kind: "unknown", cause: "git_failed" }
        : {
            kind: "not_on_remote",
            searchFailure: "git_failed",
            defaultBranch: P.defaultBranch,
          };
    }
    let H = () => v(as, (F) => S(F, { kind: "all" })),
      J = await H(),
      q = J.kind === "unknown" && J.cause === "git_failed" && !R(),
      oe = q ? await H() : J;
    try {
      C?.(q ? 2 : 1);
    } catch {}
    let A = P.orElse;
    if (A !== void 0) return oe.kind === "pushed_ancestor" ? oe : A;
    if (te && oe.kind === "none")
      return {
        kind: "not_on_remote",
        searchFailure: "nothing_beneath",
        defaultBranch: P.defaultBranch,
      };
    return oe.kind === "unknown" && r !== "HEAD"
      ? {
          kind: "not_on_remote",
          searchFailure: oe.cause,
          defaultBranch: P.defaultBranch,
        }
      : oe;
  } catch {
    return { kind: "unknown", cause: "threw" };
  }
}
function Qt(e, n) {
  try {
    e?.(n);
  } catch {}
}
async function us(e, n) {
  let r = await e([
    "-c",
    "log.showSignature=false",
    "log",
    "-g",
    "--format=%H%x00%gs",
    `refs/heads/${n}`,
    "--",
  ]);
  if (r.exitCode !== 0) return "read_failed";
  let i = r.stdout
      .split(
        `
`,
      )
      .filter((u) => u.trim() !== "")
      .at(-1),
    [o = "", c = ""] = (i ?? "").split("\x00"),
    l = "branch: Created from ";
  return Qfe.test(o) && c.startsWith(l)
    ? { commit: o, from: c.slice(l.length).trim() }
    : "none";
}
function er(e) {
  return e === "read_failed" ? "read_failed" : "no_creation_entry";
}
function fs(e, n) {
  let r = `refs/remotes/${n}/`,
    i = `${n}/`,
    o = e.startsWith(r)
      ? e.slice(r.length)
      : e.startsWith(i)
        ? e.slice(i.length)
        : null;
  return o === null ||
    o === "" ||
    o === "HEAD" ||
    /[\s~^:?*[\\]|\.\.|@\{/.test(o)
    ? null
    : `${r}${o}`;
}
async function gs(e, n) {
  let r = await e([
    "for-each-ref",
    "--format=%(refname)%00%(upstream)",
    "refs/heads/",
  ]);
  if (r.exitCode !== 0) return [];
  return r.stdout
    .split(
      `
`,
    )
    .filter(Boolean)
    .flatMap((i) => {
      let [o = "", c = ""] = i.split("\x00");
      return [`${n}${o.slice(11)}`, c];
    })
    .filter((i) => i.startsWith(n) && i.length > n.length && i !== `${n}HEAD`);
}
async function hs(e, n, r, i) {
  let o = await e([
    "for-each-ref",
    `--points-at=${r}`,
    ...(i === null ? [] : [`--points-at=${i}`]),
    "--format=%(objectname) %(refname)",
    n,
  ]);
  if (o.exitCode !== 0) return { atHead: [], atCreation: [] };
  let c = o.stdout
    .split(
      `
`,
    )
    .flatMap((l) => {
      let [u = "", g = ""] = l.trim().split(" ");
      return g.startsWith(n) && g !== `${n}HEAD` ? [{ commit: u, ref: g }] : [];
    });
  return {
    atHead: c.filter((l) => l.commit !== i).map((l) => l.ref),
    atCreation: c.filter((l) => l.commit === i).map((l) => l.ref),
  };
}
async function ps(e, n) {
  let r = await rr(n, tr).reduce(async (o, c) => {
      let l = await o,
        u = await e([
          "for-each-ref",
          "--format=%(objectname) %(refname)",
          ...c,
        ]);
      if (u.exitCode !== 0) throw Error("for-each-ref failed");
      let g = u.stdout
        .split(
          `
`,
        )
        .flatMap((m) => {
          let [h = "", p = ""] = m.trim().split(" ");
          return Qfe.test(h) && c.includes(p) ? [{ ref: p, commit: h }] : [];
        });
      return (l.push(g), l);
    }, Promise.resolve([])),
    i = new Map(r.flat().map(({ ref: o, commit: c }) => [o, c]));
  return n.flatMap((o) => {
    let c = i.get(o);
    return c === void 0 ? [] : [{ ref: o, commit: c }];
  });
}
var tr = 64;
function rr(e, n) {
  return Array.from({ length: Math.ceil(e.length / n) }, (r, i) =>
    e.slice(i * n, (i + 1) * n),
  );
}
async function _s(
  e,
  {
    remoteName: n,
    pushed: r,
    staleRef: i,
    head: o,
    headCommit: c,
    nameContaining: l,
  },
) {
  let u = `refs/remotes/${n}/`;
  try {
    if (r.kind === "all") {
      let T = await e(["for-each-ref", "--count=3", "--format=%(refname)", u]);
      if (T.exitCode !== 0) return { kind: "unknown", cause: "git_failed" };
      if (
        T.stdout
          .split(
            `
`,
          )
          .every(
            (I) =>
              I.trim() === "" ||
              (i !== null && (I.trim() === i || I.trim() === `${u}HEAD`)),
          )
      )
        return { kind: "none", defaultBranch: null };
    }
    let g = await e(
      [
        "--no-replace-objects",
        "rev-list",
        `--max-count=${Zt + 1}`,
        "--parents",
        o,
        ...(r.kind === "all"
          ? [
              "--not",
              ...(i === null
                ? []
                : [`--exclude=${i.slice(13)}`, `--exclude=${n}/HEAD`]),
              `--remotes=${n}`,
            ]
          : ["--stdin"]),
        "--",
      ],
      r.kind === "all"
        ? void 0
        : r.present.map(({ commit: T }) => `^${T}`).join(`
`),
    );
    if (g.exitCode !== 0) return { kind: "unknown", cause: "git_failed" };
    let m = g.stdout
      .split(
        `
`,
      )
      .map((T) => T.trim().split(" ").filter(Boolean))
      .filter((T) => T.length > 0);
    if (m.length > Zt) return { kind: "none", defaultBranch: await Ve(e, u) };
    if (m.some((T) => T.some((I) => !Qfe.test(I))))
      return { kind: "unknown", cause: "git_failed" };
    if (m.length > 0) {
      let T = await e(
        [
          ...Vne,
          "--no-replace-objects",
          "rev-list",
          "--no-walk=unsorted",
          "--parents",
          "--stdin",
        ],
        m.map(([I]) => I).join(`
`),
      );
      if (T.exitCode !== 0) return { kind: "unknown", cause: "git_failed" };
      if (T.stdout.trim() !== g.stdout.trim())
        return { kind: "unknown", cause: "parents_misstated" };
    }
    let h, p;
    if (m.length === 0 && c !== void 0) ((h = c), (p = 0));
    else if (m.length === 0) {
      let T = await e(["rev-parse", "-q", "--verify", "HEAD^{commit}"]),
        I = T.stdout.trim();
      if (T.exitCode !== 0 || !Qfe.test(I))
        return { kind: "unknown", cause: "git_failed" };
      ((h = I), (p = 0));
    } else {
      let T = new Set(m.map(([k]) => k)),
        I = M(m.flatMap(([, ...k]) => k.filter((O) => !T.has(O)))).slice(0, cs),
        [G, ...W] = I;
      if (G === void 0) return { kind: "none", defaultBranch: await Ve(e, u) };
      if (W.length === 0) ((h = G), (p = m.length));
      else {
        let k = await Es(e, I, o);
        if (k === null) return { kind: "unknown", cause: "git_failed" };
        ((h = k.candidate), (p = Math.max(k.beyond, m.length)));
      }
    }
    if (r.kind === "all") {
      let T = await bs(e, u, [u], h, i),
        I = l && T === null ? await nr(e, u, [u], h, i) : null;
      return {
        kind: "pushed_ancestor",
        commit: h,
        aheadCount: p,
        branch: T,
        ...(I !== null && { containedIn: I }),
      };
    }
    let b = r.present.find(({ commit: T }) => T === h),
      y = b === void 0 ? null : b.ref.slice(u.length),
      C =
        y ??
        (await rr(
          r.present.map(({ ref: T }) => T),
          tr,
        ).reduce(
          async (T, I) => (await T) ?? nr(e, u, I, h, i),
          Promise.resolve(null),
        ));
    return {
      kind: "pushed_ancestor",
      commit: h,
      aheadCount: p,
      branch: y,
      ...(l && y === null && C !== null && { containedIn: C }),
      ...(C !== null && { foundOn: C }),
    };
  } catch {
    return { kind: "unknown", cause: "threw" };
  }
}
async function ir(e, n, r) {
  let i = await e(["rev-list", "--count", `${n}..${r}`, "--"]),
    o = Number.parseInt(i.stdout.trim(), 10);
  return i.exitCode === 0 && Number.isSafeInteger(o) && o >= 0 ? o : null;
}
async function ws(e, n) {
  let r = await e(["config", "--get-all", `remote.${n}.fetch`]);
  if (r.exitCode === 1) return !1;
  if (r.exitCode !== 0) return null;
  return ys(
    r.stdout
      .split(
        `
`,
      )
      .map((i) => i.trim())
      .filter(Boolean),
    n,
  );
}
function ys(e, n) {
  if (e.some((r) => r.startsWith("^"))) return !1;
  return e.some((r) => {
    let [i, o] = r.replace(/^\+/, "").split(":");
    return i === "refs/heads/*" && o === `refs/remotes/${n}/*`;
  });
}
async function Es(e, n, r) {
  let i = await Promise.all(
      n.map(async (c) => ({ candidate: c, beyond: await ir(e, c, r) })),
    ),
    o = null;
  for (let { candidate: c, beyond: l } of i) {
    if (l === null) return null;
    if (o === null || l < o.beyond) o = { candidate: c, beyond: l };
  }
  return o;
}
async function bs(e, n, r, i, o) {
  return or(e, n, r, ["--points-at", i], o);
}
async function nr(e, n, r, i, o) {
  return or(e, n, r, ["--contains", i], o);
}
async function or(e, n, r, i, o) {
  let [c, l] = await Promise.all([
    e(["for-each-ref", ...i, "--format=%(refname)", ...r]),
    Ve(e, n),
  ]);
  if (c.exitCode !== 0) return null;
  let u = (m) => (r.length === 1 && r[0] === n ? !0 : r.includes(m)),
    g = c.stdout
      .split(
        `
`,
      )
      .map((m) => m.trim())
      .filter((m) => m.startsWith(n) && m !== `${n}HEAD` && m !== o && u(m))
      .map((m) => m.slice(n.length));
  return (l !== null && g.includes(l) ? l : null) ?? g[0] ?? null;
}
async function Ve(e, n) {
  let r = await e(["symbolic-ref", "-q", `${n}HEAD`]),
    i = r.stdout.trim();
  if (r.exitCode !== 0 || !i.startsWith(n) || i.length <= n.length) return null;
  return (await e(["show-ref", "--verify", "--quiet", i])).exitCode === 0
    ? i.slice(n.length)
    : null;
}
async function ks(e, n) {
  let r = await Ve(e, n),
    i = M([...(r === null ? [] : [r]), ...Hqt]),
    o = await e([
      "for-each-ref",
      "--format=%(refname)",
      ...i.map((g) => `${n}${g}`),
    ]);
  if (o.exitCode !== 0) return null;
  let c = o.stdout
      .split(
        `
`,
      )
      .map((g) => g.trim()),
    l = i.filter((g) => c.includes(`${n}${g}`)),
    [u] = l;
  return u === void 0 ? null : { name: u, refs: l.map((g) => `${n}${g}`) };
}
function hco(e) {
  let r = `${{ no_git: "This folder is not a git repository, so", trust_unconfirmed: "This folder's trust has not been confirmed, so its git remote was not read and", no_github_repository: "No GitHub repository was found for this folder, so" }[e]} the cloud session starts empty: nothing from this folder is copied into it.`;
  return e === "no_github_repository" ? `${r} ${don}` : r;
}
function aCi({
  branch: e,
  host: n,
  revision: r,
  advisesPush: i = !0,
  goneFromGithub: o = !1,
}) {
  let c = I_(r);
  return `Branch ${I_(e)} ${o ? "is not on GitHub" : `is not on ${Ro(n) ? "GitHub" : n} as of the last fetch`}, so the cloud session starts from the default branch, ${c}, instead, without the commits that ${c} lacks or any uncommitted changes.${i ? " Push the branch, then start a new session to use it." : ""}`;
}
function lCi({ branch: e, aheadCount: n, remoteName: r, advisesPush: i }) {
  let o = I_(e),
    c = n === 1;
  return `Branch ${o} is ${c ? "1 commit" : `${n.toLocaleString("en-US")} commits`} ahead of ${r}/${o} (as last fetched), so the cloud session starts without ${c ? "it" : "them"} and without any uncommitted changes.${i ? ` Push the branch and start a new session to have ${c ? "that commit" : "those commits"}.` : ""}`;
}
function dCi({
  branch: e,
  start: n,
  remoteName: r,
  host: i,
  byName: o,
  carried: c,
  isAheadOfRemote: l = !1,
  advisesPush: u = !0,
}) {
  let g = I_(e),
    m = n.branch === null ? null : I_(n.branch),
    h = o === null ? null : I_(o),
    p =
      e === "HEAD"
        ? "This checkout is on a detached HEAD"
        : l
          ? `Branch ${g} is too far ahead of ${r}/${g} to start from there`
          : `Branch ${g} is not on ${Ro(i) ? "GitHub" : i}`,
    b = n.commit.slice(0, 12),
    y = m === null ? `commit ${b}` : `${r}/${m} (${b})`,
    C = n.aheadCount === 1 ? "1 commit" : `${n.aheadCount} commits`,
    T =
      n.fromOwnRefs === !0 && n.foundOn !== void 0 && n.aheadCount > 0
        ? `${r}/${I_(n.foundOn)}`
        : null,
    I = n.fromOwnRefs === !0 && T === null && n.aheadCount > 0,
    G =
      n.aheadCount === 0
        ? `its own commit, which ${m === null ? "the remote has" : `${r}/${m} has`} (${b})`
        : T !== null
          ? `the newest commit beneath it that ${T} has (${b}), ${C} back`
          : I
            ? `a pushed commit beneath it, ${y}, ${C} back`
            : `the newest pushed commit beneath it, ${y}, ${C} back`,
    W =
      h === null
        ? `the cloud session starts from ${G}`
        : `the cloud session starts from the tip of ${h} on ${i} instead (a host other than github.com is not asked for a commit by id)`,
    k =
      c || (n.aheadCount === 0 && o === null)
        ? ""
        : `${T !== null ? ` Commits that ${T} lacks, and any uncommitted changes, stay on this machine` : I ? " Later commits and any uncommitted changes stay on this machine" : ` ${n.aheadCount === 0 ? "Uncommitted changes" : n.aheadCount === 1 ? "That commit and any uncommitted changes" : `Those ${n.aheadCount} commits and any uncommitted changes`} stay on this machine`}${u || n.aheadCount === 0 ? "; push the branch to start from it" : ""}.`;
  return `${p}, so ${W}.${k}`;
}
export {
  Zds,
  RWe,
  pst,
  xWe,
  Lhr,
  Mrl,
  PWe,
  ZTi,
  cw,
  ecs,
  mLn,
  hLn,
  Nhr,
  Hrl,
  tcs,
  lco,
  Drl,
  mst,
  Fhr,
  $hr,
  dco,
  cco,
  ncs,
  Lrl,
  Nrl,
  eCi,
  hst,
  gst,
  Frl,
  $rl,
  rcs,
  m$t,
  G6,
  gLn,
  Xfe,
  Url,
  ion,
  ocs,
  aon,
  Uhr,
  scs,
  uco,
  fco,
  Brl,
  Bhr,
  tCi,
  Whr,
  lon,
  nCi,
  rCi,
  ADe,
  pco,
  oCi,
  sCi,
  Aae,
  _Ln,
  Wrl,
  h$t,
  Jfe,
  RDe,
  yLn,
  rwt,
  Vne,
  g$t,
  iCi,
  don,
  jhr,
  ics,
  jrl,
  Ghr,
  Qfe,
  Grl,
  mco,
  hco,
  aCi,
  lCi,
  dCi,
};
