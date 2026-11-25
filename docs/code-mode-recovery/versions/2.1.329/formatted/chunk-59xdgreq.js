// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Oe, Os } from "/$bunfs/root/chunk-cqahc80t.js";
import { oj, s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { N, Br, Ae, X, at } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { t, _, te } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { x } from "/$bunfs/root/chunk-kg2zehkt.js";
import { kb, pn, Du, aqi } from "/$bunfs/root/chunk-92h2y9s9.js";
import { Czi } from "/$bunfs/root/chunk-73rzabst.js";
import { po, nCl } from "/$bunfs/root/chunk-r3ggct44.js";
import { p } from "/$bunfs/root/chunk-3kmy2srk.js";
import { EI } from "/$bunfs/root/chunk-0zgmgt5h.js";
import {
  rfn,
  m9i,
  lxr,
  h9i,
  ofn,
  SAs,
  FPl,
  nzt,
  rzt,
  ox,
  G2n,
  cxr,
  D2e,
  uxr,
  wAo,
  UPl,
  fxr,
  k$,
  ywe,
} from "/$bunfs/root/chunk-rjw4t165.js";
import { UGt } from "/$bunfs/root/chunk-1305kzj2.js";
import { j2t, jcn, pTs, eRl } from "/$bunfs/root/chunk-v5qt1dvw.js";
import { Pr, BLe, N2e, M9i, WLe } from "/$bunfs/root/chunk-rqs3939j.js";
import { rqi, QAl } from "/$bunfs/root/chunk-1frwn5ry.js";
import { _b } from "/$bunfs/root/chunk-bz2w43h6.js";
import { ma } from "/$bunfs/root/chunk-pt7yf14c.js";
import { Yn } from "/$bunfs/root/chunk-4t09bv92.js";
import { rt, Me } from "/$bunfs/root/chunk-pwxp2pn6.js";
import { m$ } from "/$bunfs/root/chunk-zryj96fm.js";
import { zW, CI, u$, hm } from "/$bunfs/root/chunk-pxy9yt8m.js";
import { nYe } from "/$bunfs/root/chunk-mkb20618.js";
import { n, V2e, W } from "/$bunfs/root/chunk-8s3h5g9z.js";
import { j } from "/$bunfs/root/chunk-z749tmkd.js";
import { de } from "/$bunfs/root/chunk-pb0k2vmd.js";
import { fc } from "/$bunfs/root/chunk-d9b4fyhh.js";
var lzi = ["shell", "slash", "fleet", "spare", "respawn"];
function jvl(e) {
  return lzi.includes(e);
}
var Ddn = ["claude-vscode", "claude-desktop", "claude-desktop-3p"];
function dzi(e) {
  return Ddn.some((r) => r === e);
}
var rvt = "CLAUDE_BG_DISPATCH_ENTRYPOINT";
var Ldn = [
  "CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE",
  "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER",
];
function Gvl(e) {
  return {
    ...(e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType,
    }),
    ...(e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier,
    }),
  };
}
function czi() {
  if (s.CLAUDE_CODE_SESSION_KIND !== "bg")
    return { subscriptionType: void 0, rateLimitTier: void 0 };
  return {
    subscriptionType: s.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: s.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0,
  };
}
function fy() {
  if (fc()) return "tool_container_daemon";
  if (at()) return "ccs_tenant";
  return (pn() ||
    (s.CLAUDE_CODE_REMOTE === !0 &&
      s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud")) &&
    Boolean(s.CLAUDE_CODE_REMOTE_SESSION_ID)
    ? "hosted_worker"
    : "none";
}
import { homedir as ie } from "os";
import { dirname as y, posix as L } from "path";
import { resolve as q } from "path";
function Gjt() {
  if (X()) return null;
  let e = s.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (e) return q(e);
  let r = EI();
  return r === null ? null : q(r, "credentials", "federation");
}
var r7 = "proxy-injected";
function Ndn() {
  return hm()
    .map((e) => e.sandbox?.bwrapPath)
    .find((e) => e != null);
}
function zvl() {
  return hm()
    .map((e) => e.sandbox?.socatPath)
    .find((e) => e != null);
}
function jks() {
  let e = Ndn();
  if (e) return oj(e);
  return oj("bwrap");
}
var ct = /[ \t\n\v\f\r'"]/;
function Gks(e) {
  let r = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    o = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    i = rqi(e);
  if (!r && !o) return {};
  let d = Q(r),
    E = Q(o);
  if (!E.host) E = d;
  let l = {},
    u = (f, C) => {
      if (C && e[f] === void 0) l[f] = C;
    };
  if (
    (u("YARN_HTTP_PROXY", r),
    u("YARN_HTTPS_PROXY", o),
    u("npm_config_proxy", r),
    u("npm_config_https_proxy", o),
    u("npm_config_noproxy", i),
    u("GLOBAL_AGENT_HTTP_PROXY", r),
    u("GLOBAL_AGENT_HTTPS_PROXY", o),
    u("GLOBAL_AGENT_NO_PROXY", i),
    u("ELECTRON_GET_USE_PROXY", "1"),
    u("DOCKER_HTTP_PROXY", r),
    u("DOCKER_HTTPS_PROXY", o),
    E.host)
  )
    (u("CLOUDSDK_PROXY_TYPE", "http"),
      u("CLOUDSDK_PROXY_ADDRESS", E.host),
      u("CLOUDSDK_PROXY_PORT", E.port),
      u("CLOUDSDK_PROXY_USERNAME", E.user),
      u("CLOUDSDK_PROXY_PASSWORD", E.pass));
  if ((u("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), E.host)) {
    let f = e.JAVA_TOOL_OPTIONS;
    if (!f?.includes("-Dhttps.proxyHost=")) {
      let C = Ct(d, E, i);
      l.JAVA_TOOL_OPTIONS = f ? `${f} ${C}` : C;
    }
  }
  return l;
}
function Q(e) {
  if (!e) return { host: "", port: "", user: "", pass: "" };
  try {
    let r = new URL(e);
    if (!r.hostname) return { host: "", port: "", user: "", pass: "" };
    return {
      host:
        r.hostname.startsWith("[") && r.hostname.endsWith("]")
          ? r.hostname.slice(1, -1)
          : r.hostname,
      port: r.port || (r.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(r.username),
      pass: decodeURIComponent(r.password),
    };
  } catch {
    return { host: "", port: "", user: "", pass: "" };
  }
}
function Ct(e, r, o) {
  let i = [],
    d = (E, l) => {
      if (l && !ct.test(l)) i.push(`-D${E}=${l}`);
    };
  if (
    (d("http.proxyHost", e.host),
    d("http.proxyPort", e.port),
    d("https.proxyHost", r.host),
    d("https.proxyPort", r.port),
    d("http.proxyUser", e.user),
    d("http.proxyPassword", e.pass),
    d("https.proxyUser", r.user),
    d("https.proxyPassword", r.pass),
    o)
  )
    d("http.nonProxyHosts", mt(o));
  return (
    i.push("-Djdk.http.auth.tunneling.disabledSchemes="),
    i.push("-Djdk.http.auth.proxying.disabledSchemes="),
    i.join(" ")
  );
}
function mt(e) {
  return e
    .split(/[,\s]+/)
    .map((r) => r.trim())
    .filter(Boolean)
    .flatMap((r) => {
      if (r.startsWith(".")) return [`*${r}`];
      return Ot(r) ?? [r];
    })
    .join("|");
}
function Ot(e) {
  let r = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!r) return;
  let o = [Number(r[1]), Number(r[2]), Number(r[3]), Number(r[4])],
    i = Number(r[5]);
  if (o.some((C) => C > 255) || i < 8 || i > 24) return [e];
  let d = Math.floor(i / 8),
    E = i % 8;
  if (E === 0) return [`${o.slice(0, d).join(".")}.*`];
  let l = 2 ** (8 - E);
  if (l > 16) return [e];
  let u = o[d] - (o[d] % l),
    f = [];
  for (let C = u; C < u + l; C++)
    f.push(`${[...o.slice(0, d), C].join(".")}.*`);
  return f;
}
W();
var Vvl = "anthropic/shellMcpServers",
  Dt = 16384,
  At = p(() => n().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/)),
  St = p(() => V2e({ protocol: /^https$/ }).refine((e) => !e.includes("$"))),
  Z = new j(() => ({ said: void 0, text: void 0 }));
function Kvl(e) {
  let r = Br(Z);
  if (e === r.said) return;
  let o = typeof e === "string" && e.length <= Dt ? rt(e, !1) : void 0,
    i = Pr(
      Me(o) ? o : {},
      (E, l) => At().safeParse(l).success && St().safeParse(E).success,
    ),
    d = Yn(i, (E) => ({ type: "http", url: E }));
  ((r.said = e),
    (r.text = Object.keys(d).length === 0 ? void 0 : _({ mcpServers: d })));
}
function ee() {
  let { text: e } = Br(Z);
  return e === void 0 ? {} : { CLAUDE_CODE_SHELL_MCP_SERVERS: e };
}
var zjt = [
  "CLAUDE_CODE_SESSION_KIND",
  "CLAUDE_BG_SOURCE",
  rvt,
  "CLAUDE_BG_ISOLATION",
  "CLAUDE_BG_BACKEND",
  "CLAUDE_CODE_SESSION_NAME",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS",
  "CLAUDE_CODE_RESUME_PROMPT",
  "CLAUDE_CODE_RESUME_SHOWS_CUT_OFF_CALLS",
  "CLAUDE_CODE_RESUME_REASON",
  "CLAUDE_CODE_RESUME_SOURCE_ALIVE",
  "CLAUDE_CODE_SESSION_BEGAN_AS_COPY",
  "CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME",
  "CLAUDE_BG_POST_CLEAR_RESPAWN",
  "CLAUDE_BG_SESSION_PERMISSION_RULES",
  "CLAUDE_BG_MEMORY_TOGGLED_OFF",
  "CLAUDE_BG_AUTO_MEMORY_OFF",
  "CLAUDE_BG_GATEWAY_ROUTED",
  "CLAUDE_BG_WORKSPACE_TRUSTED",
  "CLAUDE_BG_CARRIED_PROMPTS_SHA256",
  "CLAUDE_BG_GATEWAY_WITHHELD",
  "CLAUDE_BG_SESSION_CREDENTIAL",
  "CLAUDE_CODE_RELAUNCH_HOME_TRUST",
  "CLAUDE_CODE_RELAUNCH_SANDBOX_HOLD",
  "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS",
  "CLAUDE_CODE_RESUME_HINT_COMMAND",
  "CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS",
  "CLAUDE_CODE_CHILD_NOTES_DIR",
  ...Ldn,
];
class _e {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    ((this.scrubEnabledLatched = void 0),
      (this.scrubSandboxAvailableLatched = void 0),
      (this.scrubPathsLatched = void 0),
      this.scriptCallCounts.clear(),
      (this.scriptCapsLatched = void 0));
  }
}
var m = de(new _e(), (e) => {
  (e.reset(), FPl());
});
class fe {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hybridConnectionForChildren = {};
  gitTokenForChildren = void 0;
  hipaaTierNoticeGiven = !1;
}
var O = new j(() => new fe());
function Tp() {
  let e = m.scrubEnabledLatched;
  if (e !== void 0) return e;
  let r = Oe(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return (m.setScrubEnabledLatched(r), r);
}
function cEo() {
  if (Tp()) return !0;
  if (Os(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var B = [
    ".env",
    ".env.local",
    ".env.development",
    ".env.development.local",
    ".env.test",
    ".env.test.local",
    ".env.production",
    ".env.production.local",
  ],
  Tt = [
    "bunfig.toml",
    "package.json",
    ".npmrc",
    ".yarnrc",
    ".yarnrc.yml",
    ".gitmodules",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    ...B,
  ],
  Ee = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`),
  re = ".";
function pe(e) {
  let r = new Set();
  for (let o of [CI, ma, zW])
    try {
      r.add(`${m$(e, o)}/.claude`);
    } catch {}
  return [...r];
}
function qae() {
  if (m.scrubSandboxAvailableLatched !== void 0)
    return m.scrubSandboxAvailableLatched;
  return !1;
}
async function uzi() {
  if ((SAs(), !Tp())) return;
  let e = ie(),
    r = Ae(),
    o = process.env.GITHUB_ENV ? y(process.env.GITHUB_ENV) : void 0,
    i = process.env.GITHUB_WORKSPACE;
  m.setScrubSandboxAvailableLatched(!1);
  let d = (process.env.PATH ?? "")
    .split(":")
    .map((f) => (f ? L.normalize(f).replace(/\/+$/, "") : f))
    .filter((f) => f && Ee.some((C) => f.startsWith(`${C}/`)));
  (m.setScrubPathsLatched({
    home: e,
    originalCwd: r,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: Gjt() ?? void 0,
    canonicalClaudeDirs: pe(r),
    runnerFileCommandsDir: o,
    workspace: i,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: d,
  }),
    le());
  return;
}
function le() {
  if (m.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    m.setScriptCapsLatched(null);
    return;
  }
  try {
    let r = te(e);
    if (r && typeof r === "object" && !Array.isArray(r)) {
      let o = Pr(
        r,
        (i, d) =>
          typeof i === "number" && Number.isFinite(i) && d.trim().length > 0,
      );
      m.setScriptCapsLatched(Object.keys(o).length > 0 ? o : null);
    } else m.setScriptCapsLatched(null);
  } catch {
    m.setScriptCapsLatched(null);
  }
}
function fzi(e) {
  if (!Tp()) return;
  if ((le(), !m.scriptCapsLatched)) return;
  let { scriptCapsLatched: r, scriptCallCounts: o } = m;
  for (let [i, d] of Object.entries(r)) {
    let E = e.split(i).length - 1;
    if (E > 0) {
      let l = (o.get(i) ?? 0) + E;
      if ((o.set(i, l), l > d))
        throw Error(
          `Script call limit exceeded: ${i} has been called ${l} times (cap: ${d}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`,
        );
    }
  }
}
function v4l(e) {
  O.of(N().host).getAgentProxyEnv = e;
}
function T4l(e) {
  O.of(N().host).getGhStandinDir = e;
}
function Vjt() {
  return O.of(N().host).getAgentProxyEnv?.() ?? {};
}
function pzi() {
  return O.of(N().host).getGhStandinDir?.();
}
function mzi(e) {
  O.of(N().host).settingsEnvForChildren = e;
}
function wTr(e) {
  O.of(N().host).gitTokenForChildren = e;
}
function hzi(e) {
  O.of(N().host).hybridConnectionForChildren = e;
}
function Fdn() {
  if (!eRl()) return ue().map(([e, { own: r }]) => [e, r]);
  return [];
}
function gzi() {
  {
    let e = [...ue().map(([r]) => r), ...Object.keys(j2t())];
    if (e.length > 0) {
      let r = pTs(() => jcn(() => ({ ...Vs() })));
      return e.map((o) => [o, r[py(r, o)]]);
    }
  }
  return [];
}
function zks(e, r) {
  if (r.length === 0) return e;
  let o = { ...e };
  for (let [i, d] of r) ce(o, i, d);
  return o;
}
function ue() {
  return Object.entries(O.of(N().host).hybridConnectionForChildren).filter(
    ([e, { held: r }]) => uEo(e, r),
  );
}
function uEo(e, r) {
  let o = process.env[e];
  return o === r || (r === "" && o === void 0 && x() === "windows");
}
function tYe(e = Fdn()) {
  return zks({ ...process.env }, e);
}
function ce(e, r, o) {
  let i = py(e, r);
  if (o === void 0) delete e[i];
  else e[i] = o;
}
function oWn(e) {
  let { settingsEnvForChildren: r } = O.of(N().host);
  return r[py(r, e)];
}
function _zi() {
  return UGt().get("PATH") ?? oWn("PATH");
}
function Ce() {
  return Object.fromEntries([...Fdn(), ...UGt()]);
}
function Bpe(e) {
  let r = Ce(),
    o = py(r, e);
  if (Object.hasOwn(r, o)) return r[o];
  let { settingsEnvForChildren: i } = O.of(N().host);
  return i[py(i, e)] ?? process.env[e];
}
var Rt = "3";
function Vks() {
  return s.CLAUDE_BG_BACKEND === "daemon" && s.FORCE_COLOR === Rt;
}
function Kks() {
  if (!Vks()) return !1;
  let { settingsEnvForChildren: e } = O.of(N().host);
  return !Object.hasOwn(e, py(e, "FORCE_COLOR"));
}
function py(e, r) {
  if (x() !== "windows" || Object.hasOwn(e, r)) return r;
  let o = r.toUpperCase();
  return Object.keys(e).find((i) => i.toUpperCase() === o) ?? r;
}
function qks(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function Yks(e) {
  let r = e.toUpperCase();
  return !G2n(e) && D2e(e) && !UPl.has(r) && !wAo(r);
}
var oe = new Set(N2e.map((e) => e.toUpperCase()));
function Xks() {
  if (!Udn()) return [];
  let e = O.of(N().host);
  if (!e.hipaaTierNoticeGiven)
    ((e.hipaaTierNoticeGiven = !0),
      t(
        "Withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion: the org is under HIPAA, or its policy verdict has not landed yet",
      ));
  return rzt;
}
function Udn() {
  return (fy() === "hosted_worker" && nCl()) || po("hipaa");
}
var ne = new Set(rzt.map((e) => e.toUpperCase()));
function ovt(e) {
  let r = e.startsWith("INPUT_") ? e.slice(6) : e;
  return (
    qks(r) ||
    BLe(r) ||
    r.startsWith("OTEL_") ||
    r === "CLAUDE_CODE_OTEL_DIAG_STDERR"
  );
}
function P(e, r) {
  return (
    (e === "CLAUDE_CODE_OAUTH_TOKEN" || e === "ANTHROPIC_API_KEY") &&
    r[e] === ywe &&
    r.ANTHROPIC_UNIX_SOCKET !== void 0
  );
}
function mat() {
  let e = process.env,
    r = (o) =>
      P(o, e) && !Object.keys(e).some((i) => i !== o && i.toUpperCase() === o);
  return [
    ...N2e.filter((o) => !r(o)),
    ...(Du() ||
    M9i(e, {
      CLAUDE_CODE_OAUTH_TOKEN: r("CLAUDE_CODE_OAUTH_TOKEN")
        ? e.CLAUDE_CODE_OAUTH_TOKEN
        : void 0,
      CLAUDE_CODE_OAUTH_REFRESH_TOKEN:
        e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN && !cEo() && !Udn()
          ? e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN
          : void 0,
    })
      ? ["CLAUDE_CODE_OAUTH_SCOPES"]
      : []),
    ...Object.keys(e).filter((o) => ovt(o.toUpperCase())),
    ...WLe(e),
    ...Czi(),
    ...aqi(),
    ...Xks().filter((o) => !r(o)),
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
    "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT",
    "CLAUDE_CODE_BRIDGE_CHILD_START_DIR",
    "CLAUDE_CODE_CONFIG_PROBE",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_MCP_SERVE_SETTINGS",
    "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS",
    "CLAUDE_CODE_MCP_SERVE_MACHINE_PLUGINS",
    "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
    "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST",
    "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT",
    ...[],
    ...zjt,
  ];
}
QAl(mat);
var Lt = new Set([
    "BUN_GC_TIMER_INTERVAL",
    "BUN_GC_TIMER_DISABLE",
    "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS",
    "BUN_IDLE_GC_SECONDS",
  ]),
  ht = new Set([
    "MIMALLOC_PURGE_HOLES_MIN_INTERVAL",
    "MIMALLOC_PURGE_DELAY",
    "MIMALLOC_PURGE_HOLES",
    "MIMALLOC_PURGE_HOLES_LARGE_FLOOR",
    "MIMALLOC_PURGE_HOLES_LARGE_FLOOR_EPOCHS",
  ]);
function se(e) {
  let r = e.toUpperCase();
  return (
    r.startsWith("BUN_JSC_") ||
    r.startsWith("BUN_AOT_") ||
    Lt.has(r) ||
    ht.has(r) ||
    r === "BUN_FEATURE_FLAG_HOT_CODE_HUGE_PAGES" ||
    r === "CLAUDE_CODE_COUNT_GARBAGE_COLLECTIONS" ||
    r === "CLAUDE_CODE_THREAD_CPU_ONE_IN" ||
    r === "CLAUDE_CODE_STREAM_EVENT_HOLD_MS" ||
    r === "CLAUDE_CODE_STREAM_EVENT_MAX_LINE_BYTES" ||
    r === "CLAUDE_CODE_STREAM_EVENT_NO_SUBSCRIBER_HOLD_MS" ||
    r === "CLAUDE_CODE_INCREMENTAL_REQUEST_BODY" ||
    r === "CLAUDE_CODE_PLAIN_DELTA_FAST_PATH" ||
    r === "CLAUDE_CODE_PLAIN_DELTA_DIRECT_WRITE" ||
    r === "CLAUDE_CODE_UNWATCHED_REPLY_HOLD_MS" ||
    r === "CLAUDE_CODE_MAIN_REPLY_HOLD_MS" ||
    r === "CLAUDE_CODE_FIRST_CALL_THINKING_TITLES" ||
    r === "CLAUDE_CODE_THINKING_RESUMPTION" ||
    r === "CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS" ||
    r === "CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD" ||
    r === "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN" ||
    r === "CLAUDE_CODE_CCR_SLOW_SKILLS_WATCH" ||
    r === "CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES" ||
    r === "CLAUDE_CODE_MCP_SERVE_GARBAGE_COLLECTIONS" ||
    !1 ||
    r === "CLAUDE_CODE_CCR_REQUESTS_BY_FETCH" ||
    r === "CLAUDE_CODE_STREAM_TIMER_SLACK_MS" ||
    r === "CLAUDE_CODE_PLAIN_DELTA_TAKE_AT_SOURCE" ||
    (r === "CLAUDE_CODE_RETRY_WATCHDOG" && kb())
  );
}
function me() {
  let e = O.of(N().host),
    r =
      e.gitTokenForChildren === void 0
        ? e.settingsEnvForChildren
        : {
            ...e.settingsEnvForChildren,
            CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.gitTokenForChildren,
          };
  return {
    proxyEnv: e.getAgentProxyEnv?.() ?? {},
    settingsEnvForChildren: { ...r, ...ee() },
    personsValues: Ce(),
    ownEnv: process.env,
  };
}
function Vs(e) {
  let {
      proxyEnv: r,
      settingsEnvForChildren: o,
      personsValues: i,
      ownEnv: d,
    } = me(),
    E = Object.keys(r).length > 0,
    l = Object.keys(o).length > 0,
    u = Object.keys(i).length > 0,
    f = d,
    C = l || e !== void 0 || u;
  if (C) {
    f = { ...e, ...d };
    for (let [a, D] of Object.entries(o)) f[py(f, a)] = D;
    for (let [a, D] of Object.entries(i)) ce(f, a, D ?? e?.[a]);
  }
  let T = Object.keys(process.env),
    A = C ? Object.keys(f) : T,
    b = s.CLAUDE_CODE_REMOTE === !0,
    M = b && E,
    G = M ? { ...f, ...r } : f,
    w = b ? Gks(G) : {},
    De = Object.keys(w).length > 0,
    F = cEo(),
    Se =
      T.some((a) => oe.has(a.toUpperCase())) ||
      T.some((a) => ovt(a.toUpperCase())) ||
      process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 ||
      process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0 ||
      (Du() && process.env.CLAUDE_CODE_OAUTH_SCOPES !== void 0),
    Te = WLe(process.env),
    Re = Czi(),
    Le = aqi(),
    k = Udn() && T.some((a) => ne.has(ox(a))),
    K = !1;
  K = zjt.some((a) => process.env[a] !== void 0);
  let he = T.some((a) =>
      /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(a),
    ),
    xe =
      s.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 ||
      s.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    Ue =
      s.CLAUDE_CODE_QUESTION_EXTENDED ||
      s.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS,
    Ie = s.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES,
    ge =
      s.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH ||
      s.CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH ||
      s.CLAUDE_CODE_HOST_AUTH_ASK_AT_START,
    Pe = s.CLAUDE_CODE_SDK_READS_SESSION_STATE,
    Ne = s.CLAUDE_CODE_SDK_READS_STARTUP_MARKS,
    be = u$(),
    He = s.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED,
    ve = A.some(
      (a) =>
        a.toUpperCase() ===
        "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES",
    ),
    ye = A.some(
      (a) =>
        a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD" ||
        a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST",
    ),
    Be = !1,
    Ge =
      s.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS ||
      s.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_START_DIR !== void 0,
    we = s.CLAUDE_CODE_CONFIG_PROBE,
    $e = s.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    Fe = s.CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS !== void 0,
    ke = A.some((a) => a.toUpperCase() === "CLAUDE_CODE_SPARE_DEFER_ALL_MCP"),
    Ke = s.CLAUDE_CODE_REMOTE_MCP_CONFIG,
    We = s.CLAUDE_CODE_MCP_APPS_HOST || s.CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE,
    Ye = s.CLAUDE_CODE_NOTIFICATIONS_HOST,
    Y = !1;
  Y = A.some(
    (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_SHOWS_CONNECTION_NOTICE",
  );
  let Ve = s.CLAUDE_CODE_UPFRONT_TOOLS !== void 0,
    je = s.CLAUDE_CODE_ATTACHMENTS_BY_PATH,
    ze = s.CLAUDE_CODE_PROGRAM_USE_CASE_ID !== void 0,
    Xe =
      s.CLAUDE_CODE_SLEEP_COMPACT ||
      s.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0,
    Je = s.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0,
    qe = s.CLAUDE_CODE_ARTIFACT_SHARE !== void 0,
    Qe = s.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST !== void 0,
    Ze = A.some((a) => a.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"),
    et = A.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP",
    ),
    tt = A.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT",
    ),
    ot = A.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS",
    ),
    nt =
      s.CLAUDE_CODE_WARN_DISK_FREE_GIB !== void 0 ||
      s.CLAUDE_CODE_WARN_MEMORY_FREE_GIB !== void 0 ||
      s.CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY,
    st = s.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0,
    it = A.some(
      (a) =>
        a.toUpperCase() ===
        "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS",
    ),
    _t = s.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD,
    ft =
      _b.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 ||
      _b.CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS !== void 0 ||
      _b.CLAUDE_CODE_MCP_SERVE_MACHINE_PLUGINS !== void 0 ||
      _b.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0,
    Et = s.CLAUDE_CODE_REPLY_GATE_POLICY !== void 0,
    H = !1;
  H = A.some(ae);
  let V = b && A.some(se),
    z =
      s.CLAUDE_CODE_RUNNER_MODEL_SOCKET !== void 0 &&
      s.ANTHROPIC_UNIX_SOCKET === s.CLAUDE_CODE_RUNNER_MODEL_SOCKET,
    dt = !1;
  if (
    e === void 0 &&
    !z &&
    !E &&
    !De &&
    !F &&
    !K &&
    !Se &&
    !Te.length &&
    !Re.length &&
    !Le.length &&
    !k &&
    !he &&
    !l &&
    !u &&
    !xe &&
    !Ue &&
    !Ie &&
    !ge &&
    !Pe &&
    !Ne &&
    !be &&
    !He &&
    !ve &&
    !ye &&
    !Be &&
    !Ge &&
    !we &&
    !$e &&
    !Fe &&
    !ke &&
    !Ke &&
    !We &&
    !Ye &&
    !Y &&
    !Ve &&
    !je &&
    !ze &&
    !Xe &&
    !Je &&
    !qe &&
    !Qe &&
    !nt &&
    !Ze &&
    !et &&
    !tt &&
    !ot &&
    !st &&
    !it &&
    !_t &&
    !ft &&
    !Et &&
    !H &&
    !V &&
    !dt
  )
    return process.env;
  let J = { ...r, ...w },
    c = (M || C) && x() !== "windows" ? G : { ...f };
  for (let a of Object.keys(J)) {
    let D = py(c, a);
    if (D !== a) delete c[D];
  }
  Object.assign(c, J);
  let pt = new Set(
      [
        ...mat(),
        "CLAUDE_CODE_SUBSCRIPTION_TYPE",
        "CLAUDE_CODE_RATE_LIMIT_TIER",
        "CLAUDE_CODE_QUESTION_EXTENDED",
        "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS",
        "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES",
        "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH",
        "CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH",
        "CLAUDE_CODE_HOST_AUTH_ASK_AT_START",
        "CLAUDE_CODE_SDK_READS_SESSION_STATE",
        "CLAUDE_CODE_SDK_READS_STARTUP_MARKS",
        "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
        "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
        "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES",
        "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
        "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
        "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
        "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
        "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT",
        "CLAUDE_CODE_BRIDGE_CHILD_START_DIR",
        "CLAUDE_CODE_CONFIG_PROBE",
        "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
        "CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS",
        "CLAUDE_CODE_SPARE_DEFER_ALL_MCP",
        "CLAUDE_CODE_REMOTE_MCP_CONFIG",
        "CLAUDE_CODE_REPLY_GATE_POLICY",
        "CLAUDE_CODE_MCP_APPS_HOST",
        "CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE",
        "CLAUDE_CODE_NOTIFICATIONS_HOST",
        "CLAUDE_CODE_HOST_SHOWS_CONNECTION_NOTICE",
        "CLAUDE_CODE_UPFRONT_TOOLS",
        "CLAUDE_CODE_ATTACHMENTS_BY_PATH",
        "CLAUDE_CODE_PROGRAM_USE_CASE_ID",
        "CLAUDE_CODE_SLEEP_COMPACT",
        "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS",
        "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS",
        "CLAUDE_CODE_ARTIFACT_SHARE",
        "CLAUDE_CODE_ARTIFACT_VERSIONS",
        "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP",
        "CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS",
        "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST",
        "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT",
        "CLAUDE_CODE_WARN_DISK_FREE_GIB",
        "CLAUDE_CODE_WARN_MEMORY_FREE_GIB",
        "CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY",
        "CLAUDE_CHROME_TAB_GROUP_KEY",
        "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS",
      ].map((a) => a.toUpperCase()),
    ),
    h = Object.keys(c);
  for (let a of h)
    if (
      pt.has(a.toUpperCase()) ||
      ovt(a.toUpperCase()) ||
      (oe.has(a.toUpperCase()) && !P(a, c)) ||
      (k && ne.has(ox(a)) && (a.includes("-") || !P(a, c)))
    )
      delete c[a];
  for (let a of zjt) delete c[a];
  if (Kks()) delete c[py(c, "FORCE_COLOR")];
  for (let a of h) if (a.startsWith("OTEL_")) delete c[a];
  if (
    (delete c.CLAUDE_CODE_OTEL_DIAG_STDERR,
    delete c.CLAUDE_CODE_PLUGIN_ATTRIBUTION,
    delete c.CLAUDE_CODE_SKILL_ATTRIBUTION,
    H)
  ) {
    for (let a of h) if (ae(a)) delete c[a];
  }
  if (V) {
    for (let a of h) if (se(a)) delete c[a];
  }
  if (z) {
    if (
      (delete c.ANTHROPIC_UNIX_SOCKET,
      delete c.CLAUDE_CODE_OAUTH_TOKEN,
      delete c.CLAUDE_CODE_OAUTH_401_WAIT_MS,
      delete c.ANTHROPIC_BASE_URL,
      s.SESSION_INGRESS_URL !== void 0)
    )
      c.ANTHROPIC_BASE_URL = s.SESSION_INGRESS_URL;
  }
  if (!F) return c;
  let lt = xt(),
    ut = ofn().length > 0;
  for (let [a, D] of Object.entries(c)) {
    if (D === r7 && Object.hasOwn(r, a)) continue;
    if (P(a, c)) continue;
    if (lt.has(ox(a)) || uxr.test(a) || fxr(a) || (ut && Yks(a))) {
      delete c[a];
      continue;
    }
    if (D === void 0 || G2n(a)) continue;
    let R = typeof D === "string" ? D : String(D);
    if (rfn(a)) {
      let I = lxr(a, R);
      if (I.value !== R) c[a] = I.value;
      if (I.cut) {
        let g = h9i(a, I.value);
        if (g !== void 0 && !m9i(c, g.name)) c[g.name] = g.value;
      }
      continue;
    }
    let U = cxr(a, R);
    if (U === void 0) {
      if (k$(R)) delete c[a];
    } else if (U !== R)
      if (U === "") delete c[a];
      else c[a] = U;
  }
  return c;
}
function yzi(e) {
  if (x() === "windows") return !0;
  let r = Object.values(me());
  for (let o of e) if (r.some((i) => i[o] !== void 0)) return !0;
  return !1;
}
function Szi() {
  let e = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Oe(e)) return !0;
  if (Os(e)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function bzi(e) {
  let r = x() === "windows",
    o = Object.keys(e).filter(
      (i) =>
        i === "AWS_BEARER_TOKEN_BEDROCK" ||
        (r && i.toUpperCase() === "AWS_BEARER_TOKEN_BEDROCK"),
    );
  if (o.some((i) => e[i] === "")) for (let i of o) delete e[i];
}
function wzi() {
  let e = m.scrubPathsLatched,
    r = e?.home ?? ie(),
    o = e?.originalCwd ?? Ae(),
    i = e?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    d =
      e?.runnerFileCommandsDir ??
      (process.env.GITHUB_ENV ? y(process.env.GITHUB_ENV) : void 0),
    E = e?.workspace ?? process.env.GITHUB_WORKSPACE,
    l =
      E && L.resolve(E) !== L.resolve(o)
        ? [
            `${E}/.git/hooks`,
            `${E}/.git/config`,
            `${E}/.git/config.lock`,
            `${E}/.git/config.worktree`,
            `${E}/.git/config.worktree.lock`,
            `${E}/.git/commondir`,
            `${E}/.git/worktrees`,
            `${E}/.git/modules`,
            `${E}/.git/info/exclude`,
            `${E}/.git/glab-cli`,
            `${E}/.gitmodules`,
            `${E}/.github`,
            `${E}/.claude`,
          ]
        : [];
  return {
    filesystem: {
      allowWrite: Ee,
      denyRead: [
        "/run/docker.sock",
        "/run/containerd/containerd.sock",
        "/run/podman/podman.sock",
        "/run/buildkit/buildkitd.sock",
        "/run/dbus",
        "/run/user",
        e?.federationCacheDir ?? Gjt(),
      ].filter((u) => !!u),
      denyWrite: [
        `${r}/.bash_profile`,
        `${r}/.bashrc`,
        `${r}/.bash_aliases`,
        `${r}/.bash_login`,
        `${r}/.bash_logout`,
        `${r}/.profile`,
        `${r}/.zshrc`,
        `${r}/.zprofile`,
        `${r}/.zshenv`,
        `${r}/.zlogin`,
        `${r}/.zlogout`,
        `${r}/.claude`,
        `${r}/.claude.json`,
        e?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR,
        `${r}/.gitconfig`,
        `${r}/.config/git`,
        `${r}/.bunfig.toml`,
        `${o}/bunfig.toml`,
        `${o}/package.json`,
        ...B.map((u) => `${o}/${u}`),
        `${r}/.npmrc`,
        `${o}/.npmrc`,
        `${r}/.yarnrc`,
        `${r}/.yarnrc.yml`,
        `${o}/.yarnrc`,
        `${o}/.yarnrc.yml`,
        `${r}/.config/pip`,
        `${r}/.pip`,
        `${o}/package-lock.json`,
        `${o}/yarn.lock`,
        `${o}/pnpm-lock.yaml`,
        `${o}/node_modules/.bin`,
        `${o}/.git/modules`,
        `${o}/scripts`,
        `${o}/.claude`,
        ...(e?.canonicalClaudeDirs ?? pe(o)),
        `${o}/.github`,
        `${r}/.local/bin`,
        `${r}/runners`,
        `${r}/actions-runner`,
        "/tmp/inline-comments-buffer.jsonl",
        ...(e?.pathDirs ?? []),
        d,
        i,
        i && i.includes("/_actions/")
          ? i.slice(0, i.indexOf("/_actions/") + 9)
          : void 0,
        e?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH,
        `${r}/.config/gh`,
        `${r}/.config/glab-cli`,
        `${r}/.netrc`,
        `${r}/.ssh`,
        `${o}/.git/hooks`,
        `${o}/.git/config`,
        `${o}/.git/config.lock`,
        `${o}/.git/config.worktree`,
        `${o}/.git/config.worktree.lock`,
        `${o}/.git/commondir`,
        `${o}/.git/worktrees`,
        `${o}/.gitmodules`,
        `${o}/.git/info/exclude`,
        `${o}/.git/glab-cli`,
        ...l,
      ].filter((u) => !!u),
    },
  };
}
function ae(e) {
  return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
var v;
function xt() {
  let e = ofn(),
    r = e.length > 0;
  if (v?.armed !== r)
    v = {
      armed: r,
      names: new Set([...nzt, ...e].map((o) => o.toUpperCase())),
    };
  return v.names;
}
export {
  lzi,
  jvl,
  Ddn,
  dzi,
  rvt,
  Gjt,
  r7,
  Ldn,
  Gvl,
  czi,
  fy,
  Ndn,
  zvl,
  jks,
  Gks,
  Vvl,
  Kvl,
  zjt,
  Tp,
  cEo,
  qae,
  uzi,
  fzi,
  v4l,
  T4l,
  Vjt,
  pzi,
  mzi,
  wTr,
  hzi,
  Fdn,
  gzi,
  zks,
  uEo,
  tYe,
  oWn,
  _zi,
  Bpe,
  Vks,
  Kks,
  py,
  qks,
  Yks,
  Xks,
  Udn,
  ovt,
  mat,
  Vs,
  yzi,
  Szi,
  bzi,
  wzi,
};
