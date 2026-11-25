// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { p2, s } from "/$bunfs/root/chunk-c203g5kd.js";
import { N, kr, Te, saa, Y, st } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { t, _, te } from "/$bunfs/root/chunk-w578pjby.js";
import { x } from "/$bunfs/root/chunk-cg8dqz0a.js";
import { ny, hn, Ru, qQi } from "/$bunfs/root/chunk-6e68m1dj.js";
import { i7i } from "/$bunfs/root/chunk-2mwshd9r.js";
import { uo, aNl } from "/$bunfs/root/chunk-2zeyvjwb.js";
import { p } from "/$bunfs/root/chunk-2cbgkbm2.js";
import { FA } from "/$bunfs/root/chunk-9b4aq7fb.js";
import {
  $_n,
  nra,
  $0r,
  rra,
  U_n,
  R0s,
  GUl,
  Kqt,
  qqt,
  sP,
  s4n,
  B0r,
  v6e,
  W0r,
  LDo,
  zUl,
  j0r,
  CB,
  IEe,
} from "/$bunfs/root/chunk-9zdrdv25.js";
import { Tqt } from "/$bunfs/root/chunk-44yfdc64.js";
import { AKt, Cgn, EHs, a1l } from "/$bunfs/root/chunk-ch6jxpf8.js";
import { Hr, a1e, P6e, bra, l1e } from "/$bunfs/root/chunk-gd77dyw4.js";
import { GQi, s1l } from "/$bunfs/root/chunk-y6mqk49g.js";
import { zb } from "/$bunfs/root/chunk-nr0e9cdy.js";
import { Mi } from "/$bunfs/root/chunk-w5s307zm.js";
import { er } from "/$bunfs/root/chunk-khxw3ng0.js";
import { et, Le } from "/$bunfs/root/chunk-0jve1fep.js";
import { bB } from "/$bunfs/root/chunk-6mfepmbb.js";
import { eF, CM, yB, Rp } from "/$bunfs/root/chunk-2yx6c1y2.js";
import { lJe } from "/$bunfs/root/chunk-8nvd6fqx.js";
import { n, L6e, B } from "/$bunfs/root/chunk-adx6804h.js";
import { j } from "/$bunfs/root/chunk-2904xtvq.js";
import { de } from "/$bunfs/root/chunk-t57w17k7.js";
import { ec } from "/$bunfs/root/chunk-j4z7srhg.js";
var jYi = ["shell", "slash", "fleet", "spare", "respawn"];
function W0l(e) {
  return jYi.includes(e);
}
var khn = ["claude-vscode", "claude-desktop", "claude-desktop-3p"];
function GYi(e) {
  return khn.some((r) => r === e);
}
var oRt = "CLAUDE_BG_DISPATCH_ENTRYPOINT";
var Ehn = [
  "CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE",
  "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER",
];
function j0l(e) {
  return {
    ...(e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType,
    }),
    ...(e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier,
    }),
  };
}
function zYi() {
  if (s.CLAUDE_CODE_SESSION_KIND !== "bg")
    return { subscriptionType: void 0, rateLimitTier: void 0 };
  return {
    subscriptionType: s.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: s.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0,
  };
}
function Uy() {
  if (ec()) return "tool_container_daemon";
  if (st()) return "ccs_tenant";
  return (hn() ||
    (s.CLAUDE_CODE_REMOTE === !0 &&
      s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud")) &&
    Boolean(s.CLAUDE_CODE_REMOTE_SESSION_ID)
    ? "hosted_worker"
    : "none";
}
import { homedir as ie } from "os";
import { dirname as y, posix as L } from "path";
import { resolve as q } from "path";
function xVt() {
  if (Y()) return null;
  let e = s.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (e) return q(e);
  let r = FA();
  return r === null ? null : q(r, "credentials", "federation");
}
var BX = "proxy-injected";
function PVt() {
  return Rp()
    .map((e) => e.sandbox?.bwrapPath)
    .find((e) => e != null);
}
function G0l() {
  return Rp()
    .map((e) => e.sandbox?.socatPath)
    .find((e) => e != null);
}
function eIs() {
  let e = PVt();
  if (e) return p2(e);
  return p2("bwrap");
}
var ct = /[ \t\n\v\f\r'"]/;
function tIs(e) {
  let r = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    o = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    i = GQi(e);
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
    d("http.nonProxyHosts", Ot(o));
  return (
    i.push("-Djdk.http.auth.tunneling.disabledSchemes="),
    i.push("-Djdk.http.auth.proxying.disabledSchemes="),
    i.join(" ")
  );
}
function Ot(e) {
  return e
    .split(/[,\s]+/)
    .map((r) => r.trim())
    .filter(Boolean)
    .flatMap((r) => {
      if (r.startsWith(".")) return [`*${r}`];
      return mt(r) ?? [r];
    })
    .join("|");
}
function mt(e) {
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
B();
var z0l = "anthropic/shellMcpServers",
  Dt = 16384,
  At = p(() => n().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/)),
  St = p(() => L6e({ protocol: /^https$/ }).refine((e) => !e.includes("$"))),
  Z = new j(() => ({ said: void 0, text: void 0 }));
function V0l(e) {
  let r = kr(Z);
  if (e === r.said) return;
  let o = typeof e === "string" && e.length <= Dt ? et(e, !1) : void 0,
    i = Hr(
      Le(o) ? o : {},
      (E, l) => At().safeParse(l).success && St().safeParse(E).success,
    ),
    d = er(i, (E) => ({ type: "http", url: E }));
  ((r.said = e),
    (r.text = Object.keys(d).length === 0 ? void 0 : _({ mcpServers: d })));
}
function ee() {
  let { text: e } = kr(Z);
  return e === void 0 ? {} : { CLAUDE_CODE_SHELL_MCP_SERVERS: e };
}
var OVt = [
  "CLAUDE_CODE_SESSION_KIND",
  "CLAUDE_BG_SOURCE",
  oRt,
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
  "CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH",
  "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS",
  "CLAUDE_CODE_RESUME_HINT_COMMAND",
  "CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS",
  "CLAUDE_CODE_CHILD_NOTES_DIR",
  ...Ehn,
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
var O = de(new _e(), (e) => {
  (e.reset(), GUl());
});
class fe {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hybridConnectionForChildren = {};
  gitTokenForChildren = void 0;
  hipaaTierNoticeGiven = !1;
}
var m = new j(() => new fe());
function Np() {
  let e = O.scrubEnabledLatched;
  if (e !== void 0) return e;
  let r = s.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB === !0;
  return (O.setScrubEnabledLatched(r), r);
}
function xOo() {
  if (Np()) return !0;
  if (s.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB === !1) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var M = [
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
    ...M,
  ],
  Ee = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`),
  re = ".";
function le(e) {
  let r = new Set();
  for (let o of [CM, Mi, eF])
    try {
      r.add(`${bB(e, o)}/.claude`);
    } catch {}
  return [...r];
}
function Ude() {
  if (O.scrubSandboxAvailableLatched !== void 0)
    return O.scrubSandboxAvailableLatched;
  return !1;
}
async function VYi() {
  if ((R0s(), !Np())) return;
  let e = ie(),
    r = Te(),
    o = process.env.GITHUB_ENV ? y(process.env.GITHUB_ENV) : void 0,
    i = process.env.GITHUB_WORKSPACE;
  O.setScrubSandboxAvailableLatched(!1);
  let d = (process.env.PATH ?? "")
    .split(":")
    .map((f) => (f ? L.normalize(f).replace(/\/+$/, "") : f))
    .filter((f) => f && Ee.some((C) => f.startsWith(`${C}/`)));
  (O.setScrubPathsLatched({
    home: e,
    originalCwd: r,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: xVt() ?? void 0,
    canonicalClaudeDirs: le(r),
    runnerFileCommandsDir: o,
    workspace: i,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: d,
  }),
    pe());
  return;
}
function pe() {
  if (O.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    O.setScriptCapsLatched(null);
    return;
  }
  try {
    let r = te(e);
    if (r && typeof r === "object" && !Array.isArray(r)) {
      let o = Hr(
        r,
        (i, d) =>
          typeof i === "number" && Number.isFinite(i) && d.trim().length > 0,
      );
      O.setScriptCapsLatched(Object.keys(o).length > 0 ? o : null);
    } else O.setScriptCapsLatched(null);
  } catch {
    O.setScriptCapsLatched(null);
  }
}
function KYi(e) {
  if (!Np()) return;
  if ((pe(), !O.scriptCapsLatched)) return;
  let { scriptCapsLatched: r, scriptCallCounts: o } = O;
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
function und(e) {
  m.of(N().host).getAgentProxyEnv = e;
}
function fnd(e) {
  m.of(N().host).getGhStandinDir = e;
}
function IVt() {
  return m.of(N().host).getAgentProxyEnv?.() ?? {};
}
function qYi() {
  return m.of(N().host).getGhStandinDir?.();
}
function YYi(e) {
  m.of(N().host).settingsEnvForChildren = e;
}
function ZIr(e) {
  m.of(N().host).gitTokenForChildren = e;
}
function XYi(e) {
  m.of(N().host).hybridConnectionForChildren = e;
}
function vhn() {
  if (!a1l()) return ue().map(([e, { own: r }]) => [e, r]);
  return [];
}
function JYi() {
  {
    let e = [...ue().map(([r]) => r), ...Object.keys(AKt())];
    if (e.length > 0) {
      let r = EHs(() => Cgn(() => ({ ...Hs() })));
      return e.map((o) => [o, r[By(r, o)]]);
    }
  }
  return [];
}
function nIs(e, r) {
  if (r.length === 0) return e;
  let o = { ...e };
  for (let [i, d] of r) ce(o, i, d);
  return o;
}
function ue() {
  return Object.entries(m.of(N().host).hybridConnectionForChildren).filter(
    ([e, { held: r }]) => POo(e, r),
  );
}
function POo(e, r) {
  let o = process.env[e];
  return o === r || (r === "" && o === void 0 && x() === "windows");
}
function eJe(e = vhn()) {
  return nIs({ ...process.env }, e);
}
function ce(e, r, o) {
  let i = By(e, r);
  if (o === void 0) delete e[i];
  else e[i] = o;
}
function TVn(e) {
  let { settingsEnvForChildren: r } = m.of(N().host);
  return r[By(r, e)];
}
function QYi() {
  return Tqt().get("PATH") ?? TVn("PATH");
}
function Ce() {
  return Object.fromEntries([...vhn(), ...Tqt()]);
}
function e2(e) {
  let r = Ce(),
    o = By(r, e);
  if (Object.hasOwn(r, o)) return r[o];
  let { settingsEnvForChildren: i } = m.of(N().host);
  return i[By(i, e)] ?? process.env[e];
}
var Rt = "3";
function rIs() {
  return s.CLAUDE_BG_BACKEND === "daemon" && s.FORCE_COLOR === Rt;
}
function oIs() {
  if (!rIs()) return !1;
  let { settingsEnvForChildren: e } = m.of(N().host);
  return !Object.hasOwn(e, By(e, "FORCE_COLOR"));
}
function By(e, r) {
  if (x() !== "windows" || Object.hasOwn(e, r)) return r;
  let o = r.toUpperCase();
  return Object.keys(e).find((i) => i.toUpperCase() === o) ?? r;
}
function sIs(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function iIs(e) {
  let r = e.toUpperCase();
  return !s4n(e) && v6e(e) && !zUl.has(r) && !LDo(r);
}
var oe = new Set(P6e.map((e) => e.toUpperCase()));
function aIs() {
  if (!Thn()) return [];
  let e = m.of(N().host);
  if (!e.hipaaTierNoticeGiven)
    ((e.hipaaTierNoticeGiven = !0),
      t(
        "Withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion: the org is under HIPAA, or its policy verdict has not landed yet",
      ));
  return qqt;
}
function Thn() {
  return (Uy() === "hosted_worker" && aNl()) || uo("hipaa");
}
var ne = new Set(qqt.map((e) => e.toUpperCase()));
function sRt(e) {
  let r = e.startsWith("INPUT_") ? e.slice(6) : e;
  return (
    sIs(r) ||
    a1e(r) ||
    r.startsWith("OTEL_") ||
    r === "CLAUDE_CODE_OTEL_DIAG_STDERR"
  );
}
function P(e, r) {
  return (
    (e === "CLAUDE_CODE_OAUTH_TOKEN" || e === "ANTHROPIC_API_KEY") &&
    r[e] === IEe &&
    r.ANTHROPIC_UNIX_SOCKET !== void 0
  );
}
function Yke() {
  let e = process.env,
    r = (o) =>
      P(o, e) && !Object.keys(e).some((i) => i !== o && i.toUpperCase() === o);
  return [
    ...P6e.filter((o) => !r(o)),
    ...(Ru() ||
    bra(e, {
      CLAUDE_CODE_OAUTH_TOKEN: r("CLAUDE_CODE_OAUTH_TOKEN")
        ? e.CLAUDE_CODE_OAUTH_TOKEN
        : void 0,
      CLAUDE_CODE_OAUTH_REFRESH_TOKEN:
        e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN && !xOo() && !Thn()
          ? e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN
          : void 0,
    })
      ? ["CLAUDE_CODE_OAUTH_SCOPES"]
      : []),
    ...Object.keys(e).filter((o) => sRt(o.toUpperCase())),
    ...l1e(e),
    ...i7i(),
    ...qQi(),
    ...aIs().filter((o) => !r(o)),
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
    ...OVt,
  ];
}
s1l(Yke);
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
    r === "CLAUDE_CODE_PROJECTS_FEATURE_FLAGS" ||
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
    r === "CLAUDE_CODE_RUNNER_START_NOTES" ||
    (r === "CLAUDE_CODE_RETRY_WATCHDOG" && ny())
  );
}
function Oe() {
  let e = m.of(N().host),
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
function Hs(e) {
  let {
      proxyEnv: r,
      settingsEnvForChildren: o,
      personsValues: i,
      ownEnv: d,
    } = Oe(),
    E = Object.keys(r).length > 0,
    l = Object.keys(o).length > 0,
    u = Object.keys(i).length > 0,
    f = d,
    C = l || e !== void 0 || u;
  if (C) {
    f = { ...e, ...d };
    for (let [a, A] of Object.entries(o)) f[By(f, a)] = A;
    for (let [a, A] of Object.entries(i)) ce(f, a, A ?? e?.[a]);
  }
  let T = Object.keys(process.env),
    D = C ? Object.keys(f) : T,
    b = s.CLAUDE_CODE_REMOTE === !0,
    G = b && E,
    w = G ? { ...f, ...r } : f,
    F = b ? tIs(w) : {},
    me = Object.keys(F).length > 0,
    k = xOo(),
    De =
      T.some((a) => oe.has(a.toUpperCase())) ||
      T.some((a) => sRt(a.toUpperCase())) ||
      process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 ||
      process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0 ||
      (Ru() && process.env.CLAUDE_CODE_OAUTH_SCOPES !== void 0),
    Ae = l1e(process.env),
    Se = i7i(),
    Re = qQi(),
    K = Thn() && T.some((a) => ne.has(sP(a))),
    W = !1;
  W = OVt.some((a) => process.env[a] !== void 0);
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
    Ne = s.CLAUDE_CODE_SDK_READS_SESSION_STATE,
    Pe = s.CLAUDE_CODE_SDK_READS_STARTUP_MARKS,
    be = yB(),
    He = s.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED,
    ve = D.some(
      (a) =>
        a.toUpperCase() ===
        "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES",
    ),
    ye = D.some(
      (a) =>
        a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD" ||
        a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST",
    ),
    Be = !1,
    Me =
      s.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS ||
      s.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT ||
      s.CLAUDE_CODE_BRIDGE_CHILD_START_DIR !== void 0,
    Ge = D.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_ALLOW_RESETS_DENIAL_STREAK",
    ),
    we = s.CLAUDE_CODE_CONFIG_PROBE,
    $e = s.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    Fe = s.CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS !== void 0,
    ke = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_SPARE_DEFER_ALL_MCP"),
    Ke = s.CLAUDE_CODE_REMOTE_MCP_CONFIG,
    We = s.CLAUDE_CODE_MCP_APPS_HOST || s.CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE,
    Ye = s.CLAUDE_CODE_NOTIFICATIONS_HOST,
    V = !1;
  V = D.some(
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
    Ze = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"),
    tt = D.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP",
    ),
    rt = D.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT",
    ),
    ot = D.some(
      (a) => a.toUpperCase() === "CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS",
    ),
    nt =
      s.CLAUDE_CODE_WARN_DISK_FREE_GIB !== void 0 ||
      s.CLAUDE_CODE_WARN_MEMORY_FREE_GIB !== void 0 ||
      s.CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY,
    at = s.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0,
    it = D.some(
      (a) =>
        a.toUpperCase() ===
        "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS",
    ),
    _t = s.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD,
    ft =
      zb.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 ||
      zb.CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS !== void 0 ||
      zb.CLAUDE_CODE_MCP_SERVE_MACHINE_PLUGINS !== void 0 ||
      zb.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0,
    Et = s.CLAUDE_CODE_REPLY_GATE_POLICY !== void 0,
    H = !1;
  H = D.some(ae);
  let z = b && D.some(se),
    X =
      s.CLAUDE_CODE_RUNNER_MODEL_SOCKET !== void 0 &&
      s.ANTHROPIC_UNIX_SOCKET === s.CLAUDE_CODE_RUNNER_MODEL_SOCKET,
    dt = !1;
  if (
    e === void 0 &&
    !X &&
    !E &&
    !me &&
    !k &&
    !W &&
    !De &&
    !Ae.length &&
    !Se.length &&
    !Re.length &&
    !K &&
    !he &&
    !l &&
    !u &&
    !xe &&
    !Ue &&
    !Ie &&
    !ge &&
    !Ne &&
    !Pe &&
    !be &&
    !He &&
    !ve &&
    !Ge &&
    !ye &&
    !Be &&
    !Me &&
    !we &&
    !$e &&
    !Fe &&
    !ke &&
    !Ke &&
    !We &&
    !Ye &&
    !V &&
    !Ve &&
    !je &&
    !ze &&
    !Xe &&
    !Je &&
    !qe &&
    !Qe &&
    !nt &&
    !Ze &&
    !tt &&
    !rt &&
    !ot &&
    !at &&
    !it &&
    !_t &&
    !ft &&
    !Et &&
    !H &&
    !z &&
    !dt
  )
    return process.env;
  let J = { ...r, ...F },
    c = (G || C) && x() !== "windows" ? w : { ...f };
  for (let a of Object.keys(J)) {
    let A = By(c, a);
    if (A !== a) delete c[A];
  }
  Object.assign(c, J);
  let lt = new Set(
      [
        ...Yke(),
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
        "CLAUDE_CODE_HOST_ALLOW_RESETS_DENIAL_STREAK",
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
      lt.has(a.toUpperCase()) ||
      sRt(a.toUpperCase()) ||
      (oe.has(a.toUpperCase()) && !P(a, c)) ||
      (K && ne.has(sP(a)) && (a.includes("-") || !P(a, c)))
    )
      delete c[a];
  for (let a of OVt) delete c[a];
  if (oIs()) delete c[By(c, "FORCE_COLOR")];
  for (let a of h) if (a.startsWith("OTEL_")) delete c[a];
  if (
    (delete c.CLAUDE_CODE_OTEL_DIAG_STDERR,
    delete c.CLAUDE_CODE_PLUGIN_ATTRIBUTION,
    delete c.CLAUDE_CODE_SKILL_ATTRIBUTION,
    H)
  ) {
    for (let a of h) if (ae(a)) delete c[a];
  }
  if (z) {
    for (let a of h) if (se(a)) delete c[a];
  }
  if (X) {
    if (
      (delete c.ANTHROPIC_UNIX_SOCKET,
      delete c.CLAUDE_CODE_OAUTH_TOKEN,
      delete c.CLAUDE_CODE_OAUTH_401_WAIT_MS,
      delete c.ANTHROPIC_BASE_URL,
      s.SESSION_INGRESS_URL !== void 0)
    )
      c.ANTHROPIC_BASE_URL = s.SESSION_INGRESS_URL;
  }
  if (!k) return c;
  let pt = xt(),
    ut = U_n().length > 0;
  for (let [a, A] of Object.entries(c)) {
    if (A === BX && Object.hasOwn(r, a)) continue;
    if (P(a, c)) continue;
    if (pt.has(sP(a)) || W0r.test(a) || j0r(a) || (ut && iIs(a))) {
      delete c[a];
      continue;
    }
    if (A === void 0 || s4n(a)) continue;
    let R = typeof A === "string" ? A : String(A);
    if ($_n(a)) {
      let I = $0r(a, R);
      if (I.value !== R) c[a] = I.value;
      if (I.cut) {
        let g = rra(a, I.value);
        if (g !== void 0 && !nra(c, g.name)) c[g.name] = g.value;
      }
      continue;
    }
    let U = B0r(a, R);
    if (U === void 0) {
      if (CB(R)) delete c[a];
    } else if (U !== R)
      if (U === "") delete c[a];
      else c[a] = U;
  }
  return c;
}
function ZYi(e) {
  if (x() === "windows") return !0;
  let r = Object.values(Oe());
  for (let o of e) if (r.some((i) => i[o] !== void 0)) return !0;
  return !1;
}
function e7i() {
  let e = s.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (e !== void 0) return e;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function t7i(e) {
  let r = x() === "windows",
    o = Object.keys(e).filter(
      (i) =>
        i === "AWS_BEARER_TOKEN_BEDROCK" ||
        (r && i.toUpperCase() === "AWS_BEARER_TOKEN_BEDROCK"),
    );
  if (o.some((i) => e[i] === "")) for (let i of o) delete e[i];
}
function n7i() {
  let e = O.scrubPathsLatched,
    r = e?.home ?? ie(),
    o = e?.originalCwd ?? Te(),
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
        e?.federationCacheDir ?? xVt(),
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
        ...M.map((u) => `${o}/${u}`),
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
        ...(e?.canonicalClaudeDirs ?? le(o)),
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
  let e = U_n(),
    r = e.length > 0;
  if (v?.armed !== r)
    v = {
      armed: r,
      names: new Set([...Kqt, ...e].map((o) => o.toUpperCase())),
    };
  return v.names;
}
export {
  jYi,
  W0l,
  khn,
  GYi,
  oRt,
  xVt,
  BX,
  Ehn,
  j0l,
  zYi,
  Uy,
  PVt,
  G0l,
  eIs,
  tIs,
  z0l,
  V0l,
  OVt,
  Np,
  xOo,
  Ude,
  VYi,
  KYi,
  und,
  fnd,
  IVt,
  qYi,
  YYi,
  ZIr,
  XYi,
  vhn,
  JYi,
  nIs,
  POo,
  eJe,
  TVn,
  QYi,
  e2,
  rIs,
  oIs,
  By,
  sIs,
  iIs,
  aIs,
  Thn,
  sRt,
  Yke,
  Hs,
  ZYi,
  e7i,
  t7i,
  n7i,
};
