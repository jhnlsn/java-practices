// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { Ne, Oi } from "/$bunfs/root/chunk-69qhefwa.js";
import { tpt, hP, Io, FNr, CL, st } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { A, D, d } from "/$bunfs/root/chunk-jv7av99m.js";
import {
  nGn,
  lRl,
  KVi,
  zV,
  Tu,
  jt,
  Sqi,
  xqi,
  CRs,
  Pqi,
  YPl,
  Oqi,
  Gzt,
  Zxe,
  Sdt,
  ZOl,
  mPe,
  ge,
  i6n,
} from "/$bunfs/root/chunk-865at33z.js";
import { Xn } from "/$bunfs/root/chunk-2gtmjt3y.js";
import { s } from "/$bunfs/root/chunk-c203g5kd.js";
import { t, cs } from "/$bunfs/root/chunk-w578pjby.js";
import { OLr, ILr, i } from "/$bunfs/root/chunk-k449cc64.js";
import { x } from "/$bunfs/root/chunk-cg8dqz0a.js";
import { Ol, g0o, IB } from "/$bunfs/root/chunk-3t7ve0wy.js";
import { p } from "/$bunfs/root/chunk-2cbgkbm2.js";
import { ea } from "/$bunfs/root/chunk-8hfdvrr1.js";
import {
  mi,
  cm,
  nc,
  Si,
  Xut,
  Mz,
  hge,
  KFe,
  eqt,
  Qea,
  Yb,
} from "/$bunfs/root/chunk-xcgcdx61.js";
import { u, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { Oee, rut, gJe, bK } from "/$bunfs/root/chunk-fzp6hh55.js";
import { vr, POe, md, jxt } from "/$bunfs/root/chunk-zhr7rpv7.js";
import {
  eA,
  oBl,
  sBl,
  iBl,
  GA,
  y4n,
  rLr,
  zDo,
  Qee,
  oLr,
  VDo,
  a1e,
  D8,
  KDo,
  LEe,
  wra,
  b4n,
  JDo,
  QDo,
  dBl,
  o4t,
  eLs,
  X_n,
  iLr,
  Era,
  ROe,
  lLr,
} from "/$bunfs/root/chunk-gd77dyw4.js";
import { er } from "/$bunfs/root/chunk-khxw3ng0.js";
import {
  eFl,
  aut,
  yB,
  zMr,
  TFl,
  CMs,
  _n,
  QT,
  Doe,
  _e,
  kJe,
  vl,
  dKt,
  Aw,
  SKn,
  _8,
  Rw,
  agn,
  ZPe,
} from "/$bunfs/root/chunk-2yx6c1y2.js";
import { rF } from "/$bunfs/root/chunk-6mfepmbb.js";
import { Ts, Ko, rn } from "/$bunfs/root/chunk-xzvhvaa2.js";
import { zQi, VQi, c1l } from "/$bunfs/root/chunk-nnk8tdzz.js";
import { kHs, i1l, l1l } from "/$bunfs/root/chunk-ch6jxpf8.js";
import {
  eEe,
  rKn,
  Hoe,
  vXi,
  ZIs,
  LXi,
  yRt,
  Xhn,
  Cw,
} from "/$bunfs/root/chunk-3jjr3wje.js";
import {
  Ehn,
  YYi,
  XYi,
  POo,
  rIs,
  By,
  sRt,
} from "/$bunfs/root/chunk-r6r2wdsw.js";
import { k9, Mp } from "/$bunfs/root/chunk-42nfpkzm.js";
import { YP } from "/$bunfs/root/chunk-d2tjaek4.js";
import { dl } from "/$bunfs/root/chunk-c4zg4pwc.js";
import { pvl } from "/$bunfs/root/chunk-98tkmkvx.js";
import { gvl, BTr } from "/$bunfs/root/chunk-zc7mq9x0.js";
import { yvl, fb } from "/$bunfs/root/chunk-wx2mpa0f.js";
import { Lvl, Fvl, $vl } from "/$bunfs/root/chunk-3v09xgvh.js";
import { Pe } from "/$bunfs/root/chunk-sghy0qej.js";
import { pr } from "/$bunfs/root/chunk-r3mm3x33.js";
import { f$ } from "/$bunfs/root/chunk-jk26f2gn.js";
import { Yt, ur, Vy } from "/$bunfs/root/chunk-zmb62hr5.js";
import { f4t, n, P, C, c, he, F, B } from "/$bunfs/root/chunk-adx6804h.js";
import { de } from "/$bunfs/root/chunk-t57w17k7.js";
import { ec } from "/$bunfs/root/chunk-j4z7srhg.js";
function Y(e, o) {
  return iBl.test(e)
    ? "invalid-name"
    : typeof o !== "string"
      ? "non-string-value"
      : o.includes("\x00")
        ? "nul-in-value"
        : void 0;
}
var $Wn = {
  "invalid-name": "it isn't a valid environment variable name",
  "non-string-value": "its value isn't a string",
  "nul-in-value": "its value contains a NUL character",
};
function aEo(e) {
  let o = Object.entries(e),
    r = o.flatMap(([_, g]) => {
      let E = Y(_, g);
      return E === void 0 ? [] : [{ name: _, problem: E }];
    });
  if (r.length === 0) return { kept: e, dropped: r };
  let a = new Set(r.map((_) => _.name));
  return { kept: Object.fromEntries(o.filter(([_]) => !a.has(_))), dropped: r };
}
var ie = 200;
function He(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function eGe(e) {
  return cs(e)
    .slice(1, -1)
    .replace(
      /[^\x20-\x7e]/g,
      (o) => `\\u${o.charCodeAt(0).toString(16).padStart(4, "0")}`,
    );
}
function z2t(e) {
  let o = e.indexOf("="),
    r = o === -1 ? e : e.slice(0, o),
    a = r.length > ie,
    _ = `"${eGe(a ? r.slice(0, ie) : r)}"${a ? "\u2026" : ""}`;
  return o === -1
    ? _
    : `${_} (then '=' and ${He(e.length - o - 1)}, not shown)`;
}
var Ve = null;
function re(e) {
  Ve = e;
}
var Be = new Set([
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
  ]),
  Ge = new Set(Vy);
function ke() {
  let e = Aw();
  return (
    e !== null &&
    (e.forceLoginOrgUUID !== void 0 || e.forceLoginMethod !== void 0) &&
    e.allowNestedModelAccessUnderForceLogin !== !0 &&
    e.policyHelper === void 0 &&
    e.policyHelpers === void 0
  );
}
function z(e, o) {
  let r = s.CLAUDE_CODE_RUNNER_MODEL_SOCKET === void 0 ? void 0 : lRl();
  if (r === void 0) return;
  try {
    let a = SKn(),
      _ = Ko().filter((O) => O !== "policySettings" && !aut(O)),
      g = { ...process.env, ...Object.fromEntries(r) },
      E = [
        ...Object.entries(e() ?? {}),
        ..._.flatMap((O) =>
          Object.entries(_e(O)?.env ?? {}).filter(([S]) => !Qee(O) || !o(S)),
        ),
        ...a.envs.flatMap((O) => Object.entries(O)),
      ].filter(([O]) => g[O] === void 0),
      f = ZOl({
        settingsCredential: E.some(
          ([O, S]) => Be.has(O) && String(S).trim() !== "",
        ),
        settingsApiKeyHelper:
          a.apiKeyHelper || _.some((O) => _e(O)?.apiKeyHelper !== void 0),
        settingsProvider: E.some(([O, S]) => Ge.has(O) && Ne(S)),
        tokenFile: [Oee, rut].some((O) => gJe(O, "credential") !== null),
        storedSignIn: Sqi(),
        machinePolicyUnread: a.unread,
        underCI: Ne(!1),
        isSignInPinned: ke,
      });
    if ((KVi(f), f !== void 0 && r.length > 0)) k9();
  } catch (a) {
    try {
      (KVi("settings_check_threw"), k9());
    } catch {}
    i(
      new A(
        `[runner-model-socket] the settings check threw (${D(a).name})`,
        "[runner-model-socket] the settings check threw",
      ),
    );
  }
}
B();
var se = () =>
    n()
      .trim()
      .min(1)
      .max(100)
      .refine((e) => Yt(e) === e),
  xe = p(() =>
    c({
      lead: se(),
      worker: se(),
      effort: F(ea).optional(),
      coordinator: P().default(!0),
      label: n().trim().min(1).max(60).default("Mix"),
      description: n().trim().min(1).max(200).optional(),
      prompt: n().trim().min(1).max(4000).optional(),
      whenToUse: n().trim().max(4000).optional(),
      removePromptStrings: C(
        n()
          .max(2000)
          .refine((e) => e.trim() !== ""),
      )
        .max(20)
        .optional(),
      agents: he(
        n().regex(/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/),
        c({
          description: n().trim().min(1).max(2000),
          prompt: n().trim().min(1).max(8000),
          effort: F(ea).optional(),
        }),
      )
        .refine((e) => Object.keys(e).length <= 5)
        .optional(),
    }),
  ),
  ae = p(() =>
    xe()
      .omit({ coordinator: !0 })
      .extend({
        lead: n().trim().min(1).max(100),
        label: n().trim().min(1).max(60),
        description: n().trim().max(200).default(""),
      }),
  );
function Ke(e) {
  return (
    s.CLAUDE_CODE_SUBAGENT_MODEL === e.worker &&
    s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE
  );
}
var cvl = 5000;
function mks() {
  let e = vr(),
    o = e.clientDataUrl.document?.entries.find(
      ({ clientData: f }) => f.tengu_zesty_horizon !== void 0,
    ),
    r =
      st() || Xn() || e.providerCache.servedMixRecipe?.accountEpoch !== CL()
        ? void 0
        : e.providerCache.servedMixRecipe,
    a = o !== void 0 ? o.clientData.tengu_zesty_horizon : r?.recipe,
    _ = e.modelMix?.mix;
  if (
    a === void 0 ||
    ((_ === void 0 || !Ke(_)) &&
      (s.CLAUDE_CODE_SUBAGENT_MODEL || s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE))
  )
    return;
  let g = ae().safeParse(a),
    E = !g.success
      ? f4t(g.error)
      : o !== void 0 && !o.pattern.test(Yt(g.data.lead))
        ? "its lead does not match its entry's model_pattern"
        : o === void 0 && ur(g.data.lead) !== r?.model
          ? `its lead model is not "${r?.model}", the model this client data was served for`
          : void 0;
  if (!g.success || E !== void 0) {
    (t(`tengu_zesty_horizon ignored: ${E}`, { level: "warn" }),
      l("document_recipe", "recipe_invalid"));
    return;
  }
  return {
    ...g.data,
    coordinator: !1,
    source: o !== void 0 ? "document" : "served",
  };
}
function uvl() {
  let e = i6n()?.tengu_zesty_horizon;
  if (e === void 0) return;
  return ae().safeParse(e).data;
}
function zre() {
  return vr().modelMix?.mix;
}
function lEo(e) {
  let o = vr(),
    r = o.modelMix?.replaced ?? {
      subagentModel: s.CLAUDE_CODE_SUBAGENT_MODEL,
      subagentModelForce: s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE,
      coordinator: dl(),
    };
  return (
    (o.modelMix = { mix: e, replaced: r }),
    s.set("CLAUDE_CODE_SUBAGENT_MODEL", e.worker),
    s.set("CLAUDE_CODE_SUBAGENT_MODEL_FORCE", !0),
    u("document_recipe"),
    r.coordinator
  );
}
function X() {}
function ITr() {
  let e = vr(),
    o = e.modelMix;
  if (o === void 0) return;
  e.modelMix = void 0;
  let { subagentModel: r, subagentModelForce: a } = o.replaced;
  if (s.CLAUDE_CODE_SUBAGENT_MODEL === o.mix.worker)
    if (r !== void 0) s.set("CLAUDE_CODE_SUBAGENT_MODEL", r);
    else s.unset("CLAUDE_CODE_SUBAGENT_MODEL");
  if (a) s.set("CLAUDE_CODE_SUBAGENT_MODEL_FORCE", !0);
  else s.unset("CLAUDE_CODE_SUBAGENT_MODEL_FORCE");
  return o;
}
function Dji(e) {
  let o = vr().modelMix?.mix;
  if (o?.source !== void 0 && Tu(jt(o.lead)) !== Tu(jt(e))) ITr();
}
var We = new Set([
    ...X_n,
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_SIMPLE",
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
    "SSLKEYLOGFILE",
    "HOSTALIASES",
    "LOCALDOMAIN",
    "RES_OPTIONS",
  ]),
  je = /^(?:BUN|NODE)_/;
function hks(e) {
  let o = e.toUpperCase();
  return (
    s.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER &&
    s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST &&
    (LEe(o) || We.has(o) || je.test(o))
  );
}
var Ye = "tengu_snappy_sutton",
  $e = new Set([
    "CLAUDE_CODE_DISABLE_FEATURE_FLAGS",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
    "DISABLE_GROWTHBOOK",
  ]),
  ze = new Set([
    "CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS",
    "CLAUDE_CODE_SYNC_PLUGIN_INSTALL",
    "CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS",
    "CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS",
    "CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS",
    "CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS",
    "CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS",
    "CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS",
  ]),
  Ee = new Set([...$e, ...ze]);
function gks() {
  return Pe(Ye, { safe: !0 });
}
var Xe = new Set([
  "ANTHROPIC_UNIX_SOCKET",
  "ANTHROPIC_BASE_URL",
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "CLAUDE_CODE_OAUTH_TOKEN",
  ...D8.filter((e) => e.startsWith("CLAUDE_CODE_ARTIFACT") || a1e(e)),
]);
function le(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let o = {};
  for (let [r, a] of Object.entries(e)) if (!Xe.has(r.toUpperCase())) o[r] = a;
  return o;
}
var V = Object.freeze({
  coworkCloud: !1,
  managedByHost: !1,
  managedByHostFlag: !1,
  desktopHost: !1,
  firstPartyCodeTab: !1,
  localThirdPartyDesktop: !1,
  hostOrchestrated: !1,
  storedLoginPinned: !1,
  hybridOrganization: !1,
});
function G() {
  let e = Ne(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
    o = Ol(),
    r = process.env.CLAUDE_CODE_ENVIRONMENT_KIND,
    a = e || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
  return {
    coworkCloud: cm(),
    managedByHost: a,
    managedByHostFlag: e,
    desktopHost: o,
    firstPartyCodeTab:
      process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop" && !a,
    localThirdPartyDesktop: g0o(),
    hostOrchestrated: o || r === "byoc",
    storedLoginPinned: yB(),
    hybridOrganization: ve(),
  };
}
function ve() {
  {
    let e = Si();
    return e !== null && ((Qea() && Xut()) || Mz(e) !== void 0);
  }
  return !1;
}
function MTr() {
  return dEo() !== void 0;
}
function dEo() {
  let e = te();
  return typeof e === "object" ? e.providerSwitch : void 0;
}
function Lji() {
  return typeof te() === "object";
}
function Nji() {
  let e = te();
  return typeof e === "object" && e.providerSwitch === void 0;
}
function te() {
  {
    let e = Si();
    if (e === null) return "none";
    let o = Mz(e);
    if (o === void 0) return "none";
    let r = _e("policySettings")?.env,
      a = eqt(e) === "in_force",
      _ = Vy.find((f) => o[f] === "1" && (r?.[f] === "1" || (a && s[f])));
    if (_ !== void 0) return { providerSwitch: _ };
    let g = o.ANTHROPIC_BASE_URL,
      E = [r?.ANTHROPIC_BASE_URL, a ? s.ANTHROPIC_BASE_URL : void 0];
    return g && E.some((f) => !!f && KFe(f, g))
      ? { providerSwitch: void 0 }
      : "none";
  }
  return "none";
}
var Je = new Set(["policySettings", "projectSettings", "localSettings"]),
  qe = [],
  Ze = [],
  Ie = [],
  _ks = new Set([
    YP,
    "CLAUDE_CODE_STOP_ON_UNUSABLE_PROFILE",
    "CLAUDE_CODE_AUTOMOUNT_ROOTS",
    "CLAUDE_CODE_YOU_SHOULD_KNOW_AUTO_SEND",
    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
    "CLAUDE_CODE_DISABLE_SUBAGENT_HANDBACK",
    "CLAUDE_CODE_DISABLE_EARLY_KEY_GUARD",
    "CLAUDE_CODE_SYNC_SKILLS",
    "CLAUDE_CODE_SYNC_PLUGINS",
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC",
    "CLAUDE_CODE_CCR_SURFACE",
    "CLAUDE_CODE_INCREMENTAL_REQUEST_BODY",
    "CLAUDE_CODE_GZIP_REQUEST_BODY_BLOCKS",
    "CLAUDE_CODE_NORMALIZE_PREFIX_CACHE",
    "CLAUDE_CODE_NORMALIZE_PREFIX_CACHE_VERIFY",
    "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT",
    "CLAUDE_CODE_PLUGIN_REMOTE_MCP_REACHABLE_HOSTS_HINT",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
    "CLAUDE_CODE_DISABLE_PROACTIVITY",
    "CLAUDE_CODE_DISABLE_ATTACHMENTS",
    "CLAUDE_CODE_TETHER_LIVE",
    "CLAUDE_CODE_PROGRAM_USE_CASE_ID",
    "CLAUDE_CODE_PROGRAM_USE_CASE_STAMPED",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
    "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT",
    "CLAUDE_CODE_BRIDGE_CHILD_START_DIR",
    "CLAUDE_CODE_MCP_APPS_HOST",
    "CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE",
    "CLAUDE_CODE_NOTIFICATIONS_HOST",
    "CLAUDE_CODE_COORDINATOR_MODE",
    "CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS",
    "CLAUDE_CODE_UPFRONT_TOOLS",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES",
    "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT",
    "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS",
    "CLAUDE_CODE_TOOL_USE_ID",
    "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO",
    "CLAUDE_CODE_DISABLE_WEB_FETCH",
    "CLAUDE_CODE_DISABLE_RESPONSE_COMPARISON",
    "CLAUDE_CODE_DISABLE_MCP_TASKS",
    "CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES",
    "CLAUDE_CODE_DISABLE_ULTRATHINK",
    "CLAUDE_CODE_DISABLE_FILE_MENTIONS",
    "CCR_SESSION_PROFILE",
    "CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS",
    "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
    "CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS_BY_NAME",
    "CLAUDE_CODE_SORTED_OTTER",
    "CLAUDE_CODE_SPARE_DEFER_ALL_MCP",
    "CLAUDE_CODE_SKILL_PROPOSALS",
    "CLAUDE_CODE_PLUGIN_CACHE_DIR",
    "CLAUDE_CODE_PLUGIN_SEED_DIR",
    "CLAUDE_CODE_PLUGIN_MCPB_DIR",
    "CLAUDE_CODE_PLUGIN_DIRS",
    "CLAUDE_CODE_PLUGIN_DIR_WATCH",
    "FORCE_AUTOUPDATE_PLUGINS",
    "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    "CLAUDE_CODE_MODEL_CATALOG_URL",
    "CLAUDE_CODE_MODEL_CATALOG",
    "CLAUDE_CODE_CLIENT_DATA_URL",
    "CLAUDE_CODE_ALLOW_OTHER_MODELS",
    "CLAUDE_CODE_REMOVE_PROMPT_STRINGS",
    ...Ehn,
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    ...KDo,
    "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN",
    "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE",
    "CLAUDE_CODE_NANKEEN_KESTREL",
    "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT",
    "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_POWERSHELL_ALIAS_SHADOW_CHECK",
    "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_IGNORE_PERSISTED_TRUST",
    "CLAUDE_CODE_DISABLE_MOUNTED_DRIVE_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_EXPORTED_VARIABLE_PROMPT",
    "CLAUDE_CODE_DISABLE_REDIRECT_DENY_RECHECK",
    "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS",
    "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY",
    "CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK",
    "CLAUDE_CODE_FEDERATION_CACHE_DIR",
    "ANTHROPIC_CONFIG_DIR",
    "XDG_CONFIG_HOME",
    "HOME",
    "APPDATA",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "PROGRAMDATA",
    "ALLUSERSPROFILE",
    "SYSTEMROOT",
    "WINDIR",
    "COMSPEC",
    "SYSTEMDRIVE",
    "PROGRAMFILES",
    "PROGRAMFILES(X86)",
    "PROGRAMW6432",
    "LOCALAPPDATA",
    "PATHEXT",
    "COMMONPROGRAMFILES",
    "COMMONPROGRAMFILES(X86)",
    "COMMONPROGRAMW6432",
    "PSMODULEPATH",
    "HOMESHARE",
    "ONEDRIVE",
    "ONEDRIVECONSUMER",
    "ONEDRIVECOMMERCIAL",
    "CDPATH",
    "PWD",
    "XDG_DATA_HOME",
    "XDG_CACHE_HOME",
    "XDG_STATE_HOME",
    "CLAUDE_CODE_SAFE_MODE",
    "CLAUDE_CODE_SIMPLE",
    "CLAUDE_CODE_HARBOR_KITE",
    "CLAUDE_CODE_HARBOR_KITE_CLOUD",
    "CLAUDE_CODE_HARBOR_KITE_PACING_OFF",
    "CLAUDE_CODE_SILENT_TURN_REMINDER",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT",
    "CLAUDE_CODE_MODEL_CAPABILITIES",
    "CLAUDE_CODE_ARTIFACT_ROOM",
    "CLAUDE_CODE_BASH_EDIT_DIFF",
    "CLAUDE_CODE_FORWARD_USER_INTENT",
    "CLAUDE_CODE_WHIMSICAL_ELEPHANT",
    "CLAUDE_CODE_CRYPTIC_HORIZON",
    "CLAUDE_CODE_PARSED_WILLOW",
    "CLAUDE_CODE_DAPPER_CUPCAKE",
    "CLAUDE_CODE_DEEP_TWILIGHT",
    "CLAUDE_CODE_ARTIFACT_PRESENCE",
    "CLAUDE_CODE_ARTIFACT_LIVE_WATCH",
    "CLAUDE_CODE_ARTIFACT_OPEN_ACTION",
    "CLAUDE_CODE_ARTIFACT_REPL",
    "CLAUDE_CODE_RESUME_CACHE_WARM",
    "CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR",
    "USER_TYPE",
    "CLAUDE_CODE_MESSAGING_SOCKET",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_TOASTY_THIMBLE",
    "CLAUDE_CODE_GENTLE_PARASOL",
    "CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT",
    "CLAUDE_CODE_CURRIED_TRINKET",
    "CLAUDE_CODE_LEGACY_BUNDLE",
    "CCR_ENABLE_BUNDLE",
    "CCR_FORCE_BUNDLE",
    ...Ie.flatMap((e) => e.names),
    "GITHUB_ACTIONS",
    "RUNNER_ENVIRONMENT",
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "OTEL_LOG_RAW_API_BODIES",
    ...oLr,
    "CLAUDE_PTY_RECORD",
    "CLAUDE_CODE_DEBUG_LOGS_DIR",
    "CLAUDE_CODE_DIAGNOSTICS_FILE",
    "CLAUDE_CODE_PERFETTO_TRACE",
    "CLAUDE_CODE_FRAME_TIMING_LOG",
    "CLAUDE_CODE_REMOTE_MEMORY_DIR",
    "CLAUDE_COWORK_MEMORY_PATH_OVERRIDE",
    "AUTOMODE_DECISION_LOG",
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_TMPDIR",
    "CLAUDE_TMPDIR",
    "TMPDIR",
    "TMP",
    "TEMP",
    "XDG_RUNTIME_DIR",
    "TERMUX_VERSION",
    "CLAUDE_JOB_DIR",
    "CLAUDE_CODE_DISABLE_BG_STABLE_PATH",
    "CLAUDE_CODE_NATIVE_APP_BUNDLE",
    "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
    "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST",
    "CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS",
    "CLAUDE_AFK_TIMEOUT_MS",
    "CLAUDE_AFK_COUNTDOWN_MS",
    "CLAUDE_AX_SCREEN_READER",
    "INK_SCREEN_READER",
    "CLAUDE_CHROME_CLASSIFIER_FLOOR",
    "CLAUDE_CHROME_PERMISSION_MODE",
    "CLAUDE_CODE_ENABLE_CFC",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    eA,
    oBl,
    sBl,
    ...qe,
  ]),
  Qe = ["CLAUDE_AX_", ...Ie.flatMap((e) => e.prefixes), ...Ze];
function HTr(e) {
  let o = e.toUpperCase();
  return _ks.has(o) || Qe.some((r) => o.startsWith(r));
}
function et() {
  try {
    let e = import.meta.require("/$bunfs/root/chunk-2q2c1b7t.js");
    return e.getHybridSettingsOrganization() !== null;
  } catch {
    return !0;
  }
  return !1;
}
function ce(
  e,
  o,
  r,
  a,
  { onGitKeyDropped: _, onFlagSwitchDropped: g, comparesNoValue: E = !1 } = {},
) {
  let f = ot(e, o, r, a, _, g);
  return E ? f : tt(f, o, r);
}
function tt(e, o, r) {
  if (!e || !Qee(o)) return e;
  let a = new Set(
    Object.keys(e).filter(
      (_) => _.toUpperCase() === "MCP_TIMEOUT" && pvl(e[_]),
    ),
  );
  for (let _ of a)
    if (r?.has(_) === !1)
      (r.add(_),
        t(
          `${_} in ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"} is ignored: a project's settings can give MCP servers more time to connect, not less. A value that isn't a positive number counts as 30 seconds. To shorten the time, use --settings or managed settings. Your user settings also shorten it unless a project's settings file sets a longer time, and your shell environment does if no other settings file's value applies.`,
          { level: "warn" },
        ));
  return a.size === 0 ? e : mi(e, (_, g) => a.has(g));
}
var Ue = de({ keptOut: void 0 }, (e) => {
  e.keptOut = void 0;
});
function DTr() {
  return Ue.keptOut;
}
function nt(e, o) {
  return hP() && !ROe(e, o);
}
function pe(e, o, r) {
  if (!Qee(o) || !hP()) return e;
  let a;
  for (let [_, g] of Object.entries(e)) {
    if (!nt(_, g)) continue;
    if (((a ??= { ...e }), delete a[_], r === void 0)) continue;
    Ue.keptOut ??= _;
    let E = `parked:${_}`;
    if (!r.has(E))
      (r.add(E),
        t(
          `${_} in ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"} is not applied: no host has claimed this pre-started process, and until one does a repository's settings env applies only the names a folder nobody has trusted may set; a claim will be refused and the session started cold.`,
        ));
  }
  return a ?? e;
}
function J(e, o) {
  let r = e.toUpperCase();
  return OLr.has(r) && !ILr({ [r]: o });
}
function ot(e, o, r, a, _, g) {
  if (!e || !Qee(o)) return e;
  let E = !0,
    f,
    O = !1;
  for (let S of Object.keys(e)) {
    if (S.toUpperCase() === "CLAUDE_CODE_USE_GATEWAY" && et()) {
      if (((f ??= { ...e }), delete f[S], r?.has(S) === !1))
        (r.add(S),
          t(
            `${S} in ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"} is ignored: this computer has an organization sign-in or its cached policy. Set CLAUDE_CODE_USE_GATEWAY in your shell environment, ~/.claude/settings.json or --settings instead.`,
            { level: "warn" },
          ));
      continue;
    }
    if ((Ee.has(S.toUpperCase()) || J(S, e[S])) && Zxe() && gks()) {
      (g?.(), (f ??= { ...e }), delete f[S]);
      let T = OLr.has(S.toUpperCase());
      if (((O ||= T && !J(S, e[S])), r?.has(S) === !1)) {
        r.add(S);
        let L =
          o === "localSettings"
            ? ".claude/settings.local.json"
            : ".claude/settings.json";
        t(
          J(S, e[S])
            ? `${S} in ${L} is ignored: in an Anthropic-hosted cloud session, a repository's settings can turn telemetry off but not back on.`
            : `${S} in ${L} is ignored${T ? ", apart from turning telemetry off" : ""}: in an Anthropic-hosted cloud session, a repository's settings can't set it, because it can keep feature flags or required plugins and skills out of the session. Set it in the cloud environment's variables instead.`,
          { level: "warn" },
        );
      }
      continue;
    }
    if (
      !HTr(S) ||
      VDo(S, e[S], a) ||
      (Era.has(S) && Ne(e[S])) ||
      Fe(S.toUpperCase(), e[S])
    )
      continue;
    if (((f ??= { ...e }), delete f[S], r?.has(S) === !1)) {
      r.add(S);
      let T =
          o === "localSettings"
            ? ".claude/settings.local.json"
            : ".claude/settings.json",
        L = CRs.get(S.toUpperCase());
      t(
        L !== void 0
          ? `${S} in ${T} is ignored: a project's settings can only set it to "${L}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.`
          : Sdt(S, e[S])
            ? `${S} in ${T} is ignored: no settings file can set this key, only the environment Claude Code is started with or Claude Code itself.`
            : S.toUpperCase() === "CLAUDE_CODE_MODEL_CATALOG"
              ? `${S} in ${T} is ignored: a project's settings can only turn the model catalog off ("off"). Set any other value in ~/.claude/settings.json or managed settings.`
              : `${S} in ${T} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`,
        { level: "warn" },
      );
    }
  }
  if (f && O) f.DISABLE_TELEMETRY ||= "1";
  return f ?? e;
}
var it = {
  ...$Wn,
  "non-string-value": "its value isn't a string, a number or a boolean",
};
function k(e, o, r) {
  if (!e) return e;
  let a;
  for (let [_, g] of Object.entries(e)) {
    let E = g,
      f =
        typeof E === "string"
          ? E
          : typeof E === "number" || typeof E === "boolean"
            ? String(E)
            : void 0,
      O = Y(_, f);
    if (O === void 0) {
      if (f !== void 0 && f !== E) ((a ??= { ...e }), (a[_] = f));
      continue;
    }
    ((a ??= { ...e }), delete a[_]);
    let S = it[O],
      T = z2t(_),
      L = `${o}:${S}:${T}`;
    if (r !== void 0 && !r.has(L))
      (r.add(L),
        t(`Env key ${T} from ${o} is ignored: ${S}.`, { level: "warn" }));
  }
  return a ?? e;
}
var rt = new Set(["CLAUDE_CODE_TRANSCRIPT_LOCAL_GC"]);
function at(e, o, r) {
  return r === "policySettings" && rt.has(e.toUpperCase()) && Oi(o);
}
var Et = new Set(["CLAUDE_CODE_ATTRIBUTION_HEADER"]);
function dt(e, o, r) {
  return (
    r === "policySettings" &&
    Et.has(e.toUpperCase()) &&
    Oi(o) &&
    IB() &&
    FNr(Io()) &&
    Oi(Yb()?.env?.[e])
  );
}
function H(e, o, r, a = "host routing") {
  if (e === void 0 || e.has(o)) return;
  e.add(o);
  let _ = eGe(o),
    g = {
      "host routing":
        "this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.",
      "repo tier":
        "repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.",
      "desktop start":
        "sessions that Claude Desktop starts don't take this variable from this settings source.",
      "desktop route":
        "the same settings also choose a provider, gateway or non-Anthropic base URL. Claude Desktop ignores that choice, so it ignores this variable too. Remove that choice from these settings to apply it.",
    }[a];
  t(`Ignoring ${_} from ${r} \u2014 ${g}`, { level: "warn" });
}
function ye(e, o, r) {
  return (
    r.localThirdPartyDesktop &&
    o === "policySettings" &&
    e.toUpperCase() === QDo
  );
}
function Me(e, o, r) {
  return (
    r.firstPartyCodeTab && o === "policySettings" && dBl.has(e.toUpperCase())
  );
}
function yks(e) {
  let o = new Set([...Vy, "CLAUDE_CODE_USE_GATEWAY"]),
    r = new Set(
      Object.keys(POe)
        .flatMap((a) => jxt(a))
        .map(({ name: a }) => a)
        .filter((a) => !a.startsWith("AWS_ENDPOINT_URL")),
    );
  return Object.entries(e).some(([a, _]) => {
    let g = a.toUpperCase(),
      E = _.trim();
    if (g === "ANTHROPIC_BASE_URL") return E !== "" && !md(E);
    return o.has(g) ? Ne(_) : r.has(g) && E !== "";
  });
}
function ue(e, o, r, a) {
  if (!e) return {};
  let _ = r.managedByHost || (r.desktopHost && Je.has(o)),
    g = {};
  for (let [E, f] of Object.entries(e)) {
    if (xqi.has(E.toUpperCase()) && !at(E, f, o)) continue;
    if (r.coworkCloud && iLr(E)) {
      H(a, E, o);
      continue;
    }
    if (
      Gzt(E) &&
      (Zxe() || st()) &&
      !(
        o === "policySettings" &&
        E === "CLAUDE_CODE_CUSTOM_OAUTH_URL" &&
        Yb()?.env?.[E] === f
      )
    ) {
      if (a !== void 0 && !a.has(E)) {
        a.add(E);
        let S = `Not setting ${eGe(E)} from ${o}: with CLAUDE_CODE_REMOTE true, no settings file can set it. Set it in the environment that Claude Code is started with.`;
        (t(S, { level: "warn" }),
          process.stderr.write(`${S}
`));
      }
      continue;
    }
    if (
      r.hybridOrganization &&
      Qee(o) &&
      ((LEe(E) && !wra(E)) || b4n(E) || eLs.includes(E.toUpperCase()))
    ) {
      if (a !== void 0 && !a.has(E))
        (a.add(E),
          t(
            `Ignoring ${eGe(E)} from ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"}: your organization's settings apply to this session, so a repository's settings can't set provider, proxy or certificate variables. If you need this value, set it in your shell or your user settings; your organization's connection may still replace it.`,
            { level: "warn" },
          ));
      continue;
    }
    if (hks(E) && !(o === "policySettings" && _8())) {
      if (a !== void 0 && !a.has(E))
        (a.add(E),
          t(
            `Ignoring ${eGe(E)} from ${o}: this session's launcher asked Claude Code to fetch the gateway's token itself, so only managed settings and the launcher can set this variable. Set it in one of those.`,
            { level: "warn" },
          ));
      continue;
    }
    if (!_) {
      g[E] = f;
      continue;
    }
    if (
      r.desktopHost &&
      o === "policySettings" &&
      E.toUpperCase() === "CLAUDE_CODE_CERT_STORE"
    ) {
      g[E] = f;
      continue;
    }
    if (ye(E, o, r)) {
      g[E] = f;
      continue;
    }
    if (Me(E, o, r)) {
      if (yks(e)) H(a, E, o, "desktop route");
      else g[E] = f;
      continue;
    }
    if (LEe(E) && (r.managedByHost || !wra(E))) {
      H(a, E, o, r.managedByHost ? "host routing" : "desktop start");
      continue;
    }
    if (r.managedByHost && E.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
      H(a, E, o);
      continue;
    }
    if (
      r.managedByHostFlag &&
      (!r.desktopHost || Qee(o)) &&
      (b4n(E) || o4t(E))
    ) {
      H(a, E, o, r.desktopHost ? "repo tier" : "host routing");
      continue;
    }
    g[E] = f;
  }
  return g;
}
function Ce(e, o, r, a, _) {
  if (!e || !r) return e || {};
  let g = {},
    E = [];
  for (let [f, O] of Object.entries(e)) {
    if (!r.has(f.toUpperCase()) || dt(f, O, o)) {
      g[f] = O;
      continue;
    }
    let S = process.env[f];
    if (
      ((a.desktopHost &&
        o === "policySettings" &&
        JDo.some((T) => T === f.toUpperCase())) ||
        ye(f, o, a) ||
        Me(f, o, a)) &&
      _8()
    ) {
      if (((g[f] = O), _ && S !== void 0 && S !== O))
        t(
          `Using ${eGe(f)} from managed settings in place of the value this session had.`,
          { level: "warn" },
        );
      continue;
    }
    if (_ && S !== O) E.push(f);
  }
  if (_ && E.length > 0) lt(E, o, _);
  return g;
}
function lt(e, o, r) {
  let a = e.filter((g) => {
    let E = `${o}:${g}`;
    if (r.has(E)) return !1;
    return (r.add(E), !0);
  });
  if (a.length === 0) return;
  let _ = a.map(eGe).join(", ");
  t(
    `Ignoring ${_} from ${o}: the desktop app or runner that started this session supplies ${a.length === 1 ? "it" : "them"}, so the settings ${a.length === 1 ? "value is" : "values are"} not used.`,
    { level: "warn" },
  );
}
var _t = new Set([
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "CLAUDE_CODE_PERFORCE_MODE",
  ]),
  be = new Set(oLr);
function cEo(e, o) {
  let r = e.toUpperCase();
  return (
    ec() &&
    !(ROe(e, o) && !LEe(e) && !sRt(r) && !be.has(r)) &&
    !(_t.has(r) && Ne(o))
  );
}
function ee(e) {
  return e === "NO_COLOR" || e === "FORCE_COLOR";
}
function q(e, o, r, a) {
  if (!e) return {};
  let _ = {};
  for (let [g, E] of Object.entries(e)) {
    let f = g.toUpperCase();
    if (ee(f) || cEo(g, E)) {
      let S = By(o, g);
      if (a === !0) {
        if (r?.has(S) === !1) r.set(S, o[S]);
      } else r?.delete(S);
      o[S] = E;
      continue;
    }
    let O = By(o, g);
    (delete o[O], r?.delete(O), (_[g] = E));
  }
  return _;
}
function ct(e, o) {
  return e === "CLAUDE_CODE_MODEL_CATALOG" && Oi(o);
}
function Fe(e, o) {
  return Pqi(e, o) || ct(e, o);
}
function Fji() {
  for (let e of CRs.keys()) delete process.env[e];
}
var pt = new Set([
  "CLAUDE_CODE_PLUGIN_DIRS",
  "CLAUDE_CODE_PLUGIN_DIR_WATCH",
  "CLAUDE_CODE_PROCESS_WRAPPER",
]);
function ut(e, o) {
  if (e === void 0 || !fb() || (o !== "userSettings" && o !== "globalConfig"))
    return e;
  return mi(e, (r, a) => pt.has(a.toUpperCase()));
}
function fe(e, o) {
  if (
    e === void 0 ||
    (o !== "userSettings" && o !== "globalConfig" && o !== "policySettings") ||
    !(tpt.value || kJe())
  )
    return e;
  return o === "policySettings" && (!Object.keys(e).some(Se) || _8())
    ? e
    : mi(e, (r, a) => Se(a));
}
function Se(e) {
  return nGn.includes(e.toUpperCase());
}
var Ct = new Set(["ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_EXTRA_BODY"]);
function W(e, o) {
  if (!e) return {};
  let r = {};
  for (let [a, _] of Object.entries(e))
    if (!Oqi(a, _)) r[a] = _;
    else if (o) {
      let g = YPl(a);
      if (!o.has(g))
        (o.add(g),
          t(
            Ct.has(g)
              ? `${g} in settings is ignored, all of it: it names a use case, which only the environment Claude Code is started with can do.`
              : `${g} in settings is ignored: no settings file can give it this value, only the environment Claude Code is started with or Claude Code itself.`,
            { level: "warn" },
          ));
    }
  return r;
}
function $ji() {
  return h.envAboveProjectSettings();
}
function n_() {
  return h.getPreSettingsEnvSnapshot();
}
function LTr() {
  let e = { ...n_() };
  for (let o of Object.keys(e)) if (process.env[o] === void 0) delete e[o];
  return e;
}
function gt() {
  let e = h.withoutUserTierNamesInSnapshot(n_());
  for (let o of Object.keys(e))
    if (process.env[o] === void 0 && !QH(o, "")) delete e[o];
  try {
    for (let [o, r] of Object.entries(FTr(Doe(), "policySettings") ?? {}))
      e[By(e, o)] = r;
  } catch (o) {
    t(
      `managed settings' env could not be read for the policy helper: ${d(o)}`,
      { level: "error" },
    );
  }
  return e;
}
function QH(e, o) {
  return h.isSettingsSourcedEnvValue(e, o);
}
function NTr(e, o, r = !1) {
  return h.personsSettingsEnvKeeps(e, o, r);
}
function Uji() {
  h.putBackUnsuppliedAutoCompactEnv();
}
function Bji() {
  return h.isAutoCompactPutBackOwed();
}
function Wji() {
  return h.putBackUnsuppliedTelemetryEnv();
}
function jji(e) {
  h.setToolServerLaunchEnv(e);
}
function Gji(e, o) {
  h.recordPersonsEnvValue(e, o);
}
function Gc() {
  return h.peekPreSettingsEnvSnapshot();
}
function ne() {
  let e = hge();
  return e.length > 0 && POo("AWS_BEARER_TOKEN_BEDROCK", "")
    ? [...e, { AWS_BEARER_TOKEN_BEDROCK: "" }]
    : e;
}
function Oe(e, o) {
  return e[By(e, o)]?.trim() === "";
}
function PV(e) {
  if (e.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER === void 0) return De(e);
  let o = { ...e };
  return (delete o.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER, De(o));
}
function De(e) {
  {
    let o = Gc(),
      r = ne();
    if (o === void 0 || r.length === 0) return e;
    let a = { ...e },
      _ = Doe() ?? {};
    for (let [g, E] of Object.entries(e)) {
      let f = o[By(o, g)];
      if (
        E !== void 0 &&
        E !== f &&
        !(E === "" && Oe(_, g)) &&
        r.some((O) => O[By(O, g)] === E)
      )
        if (f === void 0) delete a[g];
        else a[g] = f;
    }
    if (x() === "windows")
      for (let g of r)
        for (let [E, f] of Object.entries(g)) {
          let O = o[By(o, E)];
          if (f === "" && O && !Oe(_, E) && !Object.hasOwn(e, By(e, E)))
            a[E] = O;
        }
    for (let g of Object.keys(h.organizationAwsValuesForRequests())) {
      if (_[By(_, g)]?.trim()) continue;
      let E = o[By(o, g)];
      if (E === void 0) delete a[By(a, g)];
      else a[By(a, g)] = E;
    }
    return a;
  }
  return e;
}
function Vcn() {
  return h.getLegacyEnvMap();
}
function b9() {
  return h.getAppliedGlobalConfigEnv();
}
TFl(n_, gt);
c1l(() => h.takeChildEnvFromRepository());
yvl(Gc);
l1l(() => _e("policySettings")?.env ?? {});
re(QH);
i1l(() => h.organizationAwsValuesForRequests());
gvl(
  (e) => h.routeAfterVerdict(e),
  (e) => h.launchNamed(e),
);
Lvl({
  env: () => h.getHostLaunchEnv(),
  credential: () => h.getLaunchCredential(),
  road: () => h.getLaunchCredentialRoad(),
});
function zji(e, o) {
  return h.dropPreSettingsEnvSnapshot(e, o);
}
function m(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function uEo(e, o, r) {
  if (e === void 0) return Object.freeze({ ...process.env });
  let a = new Set(o.map(m)),
    _ = new Map(Object.entries(e).map(([E, f]) => [m(E), f])),
    g = {};
  for (let E of Object.keys(process.env))
    if (a.has(m(E))) g[E] = r?.[E] ?? process.env[E];
    else if (_.has(m(E))) g[E] = _.get(m(E));
  return Object.freeze(g);
}
function UWn(e, o) {
  let r = Object.keys(process.env).filter(
    (a) => o(a) && process.env[a] !== e[a],
  );
  for (let a of r)
    if (e[a] === void 0) delete process.env[a];
    else process.env[a] = e[a];
  return r.length > 0;
}
function Gle(e, o = "policySettings", { comparesNoValue: r = !1 } = {}) {
  return h.filterPolicyPredicateEnv(e, o, {
    forPolicyMatch: !1,
    comparesNoValue: r,
  });
}
function BWn(e, o = "policySettings") {
  return h.filterPolicyPredicateEnv(e, o, { forPolicyMatch: !0 });
}
function FTr(e, o) {
  return h.withoutInvalidSettingsEnv(e, o);
}
function $Tr(e, o) {
  let r = e;
  {
    let a = o === "policySettings" ? ne() : [];
    if (e !== void 0 && a.length > 0) {
      let _ = Doe() ?? {};
      r = {};
      for (let [g, E] of Object.entries(e)) {
        let f = _[By(_, g)],
          O = a.some((S) => S[By(S, g)] === E)
            ? f?.trim() || (E === "" ? f : void 0)
            : E;
        if (O !== void 0) r[g] = O;
      }
    }
  }
  return W(FTr(r, o));
}
var ft = ["userSettings", "flagSettings", "policySettings"],
  Z = ["TRACES", "METRICS", "LOGS", "PROFILES"],
  N = y4n,
  Ae = new Set(["HEADERS", "CLIENT_KEY", "CLIENT_CERTIFICATE"]),
  Re = new Set(["OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]),
  Te = "CLAUDE_CODE_ENABLE_TELEMETRY",
  Le = "BETA_TRACING_ENDPOINT";
var Mo = new Set([`${y4n}ENDPOINT`, `${y4n}HEADERS`, `${y4n}PROTOCOL`]);
function Q(e) {
  return e;
}
function St(e) {
  return !e
    .split(",")
    .map((o) => o.trim())
    .includes("otlp");
}
function K(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function M(e, o) {
  let r = {};
  for (let [a, _] of Object.entries(e ?? {}))
    if (o.includes(a.toUpperCase()) && _ !== void 0) r[a] = String(_);
  return r;
}
function me(e, o) {
  return mi(e, (r, a) => o.includes(a.toUpperCase()));
}
class we {
  providerStripContext = V;
  projectScopeDropWarned = new Set();
  optOutOnlySources = [];
  fullPassDroppedGitKey = !1;
  fullPassDroppedFlagSwitch = !1;
  hostManagedDropWarned = new Set();
  invalidEnvKeyWarned = new Set();
  serverOwnedDropWarned = new Set();
  hostSpawnEnvKeys = void 0;
  settingsEnvForChildren = {};
  settingsEnvForChildrenFromRepository = new Map();
  publishedChildEnv = {};
  publishedChildEnvFromRepository = new Map();
  organizationAwsValues = {};
  publishedOrganizationAwsValues = {};
  toolServerLaunchEnv = {};
  materializedProcessWrapper = void 0;
  policyTransportEnv = void 0;
  preSettingsEnvSnapshot = void 0;
  userTierNames = new Set();
  launchNamesBeforeClaim = void 0;
  userTierNamesInSnapshot = new Set();
  claimLaunchEnv = void 0;
  launchCredentialRoad = "none";
  launchCredential = void 0;
  otelDominanceDropWarned = new Set();
  hostSpawnEnvDropWarned = new Set();
  untrustedFolderDropWarned = new Set();
  servedFolderEnvWithheld = !1;
  getPreSettingsEnvSnapshot() {
    if (this.preSettingsEnvSnapshot === void 0)
      ((this.preSettingsEnvSnapshot = this.latchPreSettingsEnvSnapshot({
        ...process.env,
      })),
        s.unset("CLAUDE_CODE_PERSONAL_HOOKS_OFF"));
    return this.preSettingsEnvSnapshot;
  }
  latchPreSettingsEnvSnapshot(e) {
    let o = this.launchNamesBeforeClaim;
    this.userTierNamesInSnapshot = new Set(
      o === void 0
        ? []
        : Object.keys(e)
            .map((a) => a.toUpperCase())
            .filter((a) => this.userTierNames.has(a) && !o.has(a)),
    );
    let r = this.claimLaunchEnv ?? e;
    return (
      (this.launchCredential = cm() ? $vl(r) : null),
      (this.launchCredentialRoad = cm()
        ? Fvl(r, this.launchCredential)
        : "none"),
      Object.freeze(e)
    );
  }
  getLaunchCredentialRoad() {
    return (this.getPreSettingsEnvSnapshot(), this.launchCredentialRoad);
  }
  getLaunchCredential() {
    return (this.getPreSettingsEnvSnapshot(), this.launchCredential ?? null);
  }
  getHostLaunchEnv() {
    let e = this.getPreSettingsEnvSnapshot();
    return this.claimLaunchEnv ?? e;
  }
  envAboveProjectSettings() {
    return {
      ...this.withoutUserTierNamesInSnapshot(this.getPreSettingsEnvSnapshot()),
      ..._e("flagSettings")?.env,
      ..._e("policySettings")?.env,
    };
  }
  withoutUserTierNamesInSnapshot(e) {
    this.getPreSettingsEnvSnapshot();
    let o = { ...e };
    for (let r of Object.keys(o))
      if (this.userTierNamesInSnapshot.has(r.toUpperCase())) delete o[r];
    return o;
  }
  peekPreSettingsEnvSnapshot() {
    return this.preSettingsEnvSnapshot;
  }
  appliedGlobalConfigEnv = void 0;
  legacyEnvMapAtLaunch = void 0;
  settingsOfferedEnvValues = new Map();
  autoCompactSources = new Set();
  autoCompactPutBackOwed = !1;
  personsWrittenEnvValues = new Map();
  otelDominatedAsked = void 0;
  getAppliedGlobalConfigEnv() {
    return this.appliedGlobalConfigEnv;
  }
  getLegacyEnvMap() {
    return this.legacyEnvMapAtLaunch ?? ge().env;
  }
  dropPreSettingsEnvSnapshot(e, o) {
    let r = this.preSettingsEnvSnapshot;
    if (
      ((this.preSettingsEnvSnapshot = void 0),
      (this.launchCredential = void 0),
      (this.claimLaunchEnv = void 0),
      (this.legacyEnvMapAtLaunch = void 0),
      e === void 0)
    )
      return !1;
    let a = [...e];
    if (r)
      this.launchNamesBeforeClaim = new Set(
        [...Object.keys(r), ...a].map((E) => E.toUpperCase()),
      );
    if (!cm()) return !1;
    let _ = uEo(r, a, o);
    this.claimLaunchEnv = _;
    let g = r !== void 0 && UWn(_, iLr);
    return (this.getPreSettingsEnvSnapshot(), g);
  }
  reset() {
    ((this.providerStripContext = V),
      this.projectScopeDropWarned.clear(),
      this.hostManagedDropWarned.clear(),
      this.invalidEnvKeyWarned.clear(),
      this.serverOwnedDropWarned.clear(),
      (this.hostSpawnEnvKeys = void 0),
      (this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      (this.organizationAwsValues = {}),
      (this.publishedOrganizationAwsValues = {}),
      (this.toolServerLaunchEnv = {}),
      (this.materializedProcessWrapper = void 0),
      (this.policyTransportEnv = void 0),
      (this.preSettingsEnvSnapshot = void 0),
      this.userTierNames.clear(),
      (this.launchNamesBeforeClaim = void 0),
      (this.userTierNamesInSnapshot = new Set()),
      (this.claimLaunchEnv = void 0),
      (this.launchCredential = void 0),
      (this.launchCredentialRoad = "none"),
      (this.appliedGlobalConfigEnv = void 0),
      (this.legacyEnvMapAtLaunch = void 0),
      this.settingsOfferedEnvValues.clear(),
      this.autoCompactSources.clear(),
      (this.autoCompactPutBackOwed = !1),
      this.personsWrittenEnvValues.clear(),
      this.otelDominanceDropWarned.clear(),
      this.hostSpawnEnvDropWarned.clear(),
      this.untrustedFolderDropWarned.clear(),
      (this.servedFolderEnvWithheld = !1),
      (this.optOutOnlySources = []),
      (this.fullPassDroppedGitKey = !1),
      (this.fullPassDroppedFlagSwitch = !1));
  }
  lastFullPassDroppedProjectGitKey() {
    return this.fullPassDroppedGitKey;
  }
  lastFullPassDroppedRepositoryFlagSwitch() {
    return this.fullPassDroppedFlagSwitch;
  }
  servedFolderEnvWasWithheld() {
    return this.servedFolderEnvWithheld;
  }
  strippedSettingsEnv(e, o, r, a, _ = !1) {
    let g = pe(
      Ce(
        ue(
          W(
            le(
              ce(
                k(
                  fe(
                    ut(this.asFromAFolderNobodyTrusted(e, o, a !== void 0), o),
                    o,
                  ),
                  o,
                  a && this.invalidEnvKeyWarned,
                ),
                o,
                a && this.projectScopeDropWarned,
                () => this.envAboveProjectSettings(),
                a,
              ),
            ),
            a && this.serverOwnedDropWarned,
          ),
          o,
          r,
          a && this.hostManagedDropWarned,
        ),
        o,
        this.hostSpawnEnvKeys,
        r,
        a && this.hostSpawnEnvDropWarned,
      ),
      o,
      a && this.projectScopeDropWarned,
    );
    if (a)
      return q(
        g,
        this.settingsEnvForChildren,
        this.settingsEnvForChildrenFromRepository,
        Qee(o),
      );
    let E = {},
      f = q(g, E);
    for (let [O, S] of Object.entries(E))
      if (_ || ee(O.toUpperCase())) f[O] = S;
    return f;
  }
  keptSettingsEnv(e, o, r, a, _ = !1) {
    return this.withholdsEnvFrom(o, r)
      ? {}
      : this.strippedSettingsEnv(e, o, r, a, _);
  }
  launchEnvUnlatched() {
    return (
      this.claimLaunchEnv ?? this.peekPreSettingsEnvSnapshot() ?? process.env
    );
  }
  launchNamed(e) {
    let o = new Map(
      Object.entries(M(this.launchEnvUnlatched(), e)).map(([r, a]) => [
        K(r),
        a,
      ]),
    );
    return (r) => o.get(K(r));
  }
  routeAfterVerdict(e, o = !1) {
    let r = this.providerStripContext === V ? G() : this.providerStripContext,
      a = [
        M(this.launchEnvUnlatched(), e),
        this.keptSettingsEnv(
          M(this.getLegacyEnvMap(), e),
          "globalConfig",
          r,
          void 0,
        ),
        ...Ko()
          .filter((g) => g !== "policySettings" && (o || !Qee(g)))
          .map((g) => this.keptSettingsEnv(M(_e(g)?.env, e), g, r, void 0)),
        this.strippedSettingsEnv(M(Doe(), e), "policySettings", r, void 0),
      ],
      _ = new Map(
        a.flatMap((g) => Object.entries(g).map(([E, f]) => [K(E), f])),
      );
    return (g) => _.get(K(g));
  }
  setToolServerLaunchEnv(e) {
    this.toolServerLaunchEnv = e;
  }
  assignFromAboveTheRepository(e) {
    Object.assign(process.env, e);
    for (let o of Object.keys(e)) VQi(o);
  }
  takeChildEnvFromRepository() {
    let e = this.publishedChildEnv,
      o = [];
    for (let [r, a] of this.publishedChildEnvFromRepository) {
      let _ = e[r];
      if (_ === void 0) continue;
      if ((o.push([r, _]), a === void 0)) delete e[r];
      else e[r] = a;
    }
    if (o.length === 0) return;
    return () => {
      for (let [r, a] of o) e[r] = a;
    };
  }
  publishChildEnv(e) {
    ((this.publishedChildEnv = this.settingsEnvForChildren),
      (this.publishedChildEnvFromRepository =
        this.settingsEnvForChildrenFromRepository),
      YYi(this.settingsEnvForChildren));
    {
      let o = new Map();
      for (let _ of ne())
        for (let [g, E] of Object.entries(_)) if (POo(g, E)) o.set(g, E);
      let r = {};
      if (o.size > 0) {
        let _ = this.routeAfterVerdict([...o.keys()], e);
        for (let [g, E] of o) {
          let f = _(g);
          if (f !== E) r[g] = { held: E, own: f };
        }
      }
      let a = this.withholdsEnvFrom("policySettings")
        ? {}
        : (_e("policySettings")?.env ?? {});
      for (let _ of kHs) {
        let g = this.publishedOrganizationAwsValues[_];
        if (
          g !== void 0 &&
          this.organizationAwsValues[_] === void 0 &&
          !a[By(a, _)]?.trim() &&
          hge().some((E) => E[By(E, _)] === g)
        )
          this.organizationAwsValues[_] = g;
      }
      ((this.publishedOrganizationAwsValues = this.organizationAwsValues),
        XYi(r));
    }
  }
  takenFromToolServerLaunchEnv() {
    let e = {};
    for (let [o, r] of Object.entries(
      W(k(this.toolServerLaunchEnv, "globalConfig", this.invalidEnvKeyWarned)),
    ))
      if (!Sdt(o, r)) e[o] = r;
    return this.filterSettingsEnv(
      q(e, this.settingsEnvForChildren),
      "globalConfig",
    );
  }
  filterSettingsEnv(e, o, r = {}) {
    let a = this.keptSettingsEnv(e, o, this.providerStripContext, r),
      _ = o === "policySettings" ? this.withoutOrganizationAwsValues(a) : a;
    for (let [E, f] of Object.entries(_))
      if (
        (this.recordOfferedEnvValue(E, f),
        m(E) === "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE")
      )
        this.autoCompactSources.add(o);
    let g = er(_, (E, f) => LXi(f, E));
    if (o === "globalConfig" || o === "userSettings")
      for (let E of Object.keys(g)) this.userTierNames.add(E.toUpperCase());
    return g;
  }
  withoutOrganizationAwsValues(e) {
    let o = hge();
    if (o.length === 0) return e;
    let r = Doe() ?? {},
      a = { ...e };
    for (let _ of kHs) {
      let g = By(a, _),
        E = a[g],
        f = r[By(r, _)];
      if (E && E !== f && o.some((O) => O[By(O, _)] === E))
        if (((this.organizationAwsValues[_] = E), f?.trim())) a[g] = f;
        else delete a[g];
    }
    return a;
  }
  organizationAwsValuesForRequests() {
    return this.publishedOrganizationAwsValues;
  }
  withoutInvalidSettingsEnv(e, o) {
    return k(e, o, this.invalidEnvKeyWarned);
  }
  putBackUnsuppliedTelemetryEnv() {
    let e = this.preSettingsEnvSnapshot;
    if (e === void 0 || this.appliedGlobalConfigEnv === void 0) return !1;
    let o = !1,
      r = Object.keys(process.env).filter((a) => {
        let _ = a.toUpperCase(),
          g = process.env[a];
        return (
          g !== void 0 &&
          g !== e[a] &&
          (zDo.some((E) => _.startsWith(E)) || rLr.includes(_) || be.has(_)) &&
          this.settingsOfferedEnvValues.get(_)?.has(g.trim()) === !0 &&
          this.personsWrittenEnvValues.get(m(a)) !== g.trim()
        );
      });
    if (r.length > 0) {
      let a = new Map();
      for (let g of [
        this.toolServerLaunchEnv,
        this.appliedGlobalConfigEnv ?? {},
        ...Ko().map((E) =>
          this.keptSettingsEnv(
            _e(E)?.env,
            E,
            this.providerStripContext,
            void 0,
          ),
        ),
      ])
        for (let [E, f] of Object.entries(g)) a.set(m(E), f.trim());
      let _ = r.filter((g) => a.get(m(g)) !== process.env[g]?.trim());
      if (((o = UWn(e, (g) => _.includes(g))), o))
        t(
          `Telemetry environment variables put back to their startup values, or removed, because no settings source still sets their current value: ${_.map(eGe).join(", ")}`,
        );
    }
    return (this.enforceManagedOtelFamilyDominance(), o);
  }
  putBackUnsuppliedAutoCompactEnv() {
    let e = this.preSettingsEnvSnapshot,
      o = "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE",
      r = s.CLAUDE_AUTOCOMPACT_PCT_OVERRIDE;
    if (
      ((this.autoCompactPutBackOwed = !1),
      e === void 0 ||
        this.appliedGlobalConfigEnv === void 0 ||
        r === void 0 ||
        this.settingsOfferedEnvValues
          .get("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE")
          ?.has(r) !== !0 ||
        this.personsWrittenEnvValues.get(
          m("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"),
        ) === r)
    )
      return;
    if (
      [
        this.toolServerLaunchEnv,
        this.appliedGlobalConfigEnv,
        ...Ko().map((_) =>
          this.keptSettingsEnv(
            _e(_)?.env,
            _,
            this.providerStripContext,
            void 0,
          ),
        ),
      ]
        .flatMap((_) => Object.entries(_))
        .findLast(([_]) => m(_) === m("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"))?.[1]
        .trim() === r
    )
      return;
    if (
      Ko().some(
        (_) =>
          this.autoCompactSources.has(_) &&
          (_ === "policySettings" ? Rw() : QT(_)).some(rF),
      )
    ) {
      this.autoCompactPutBackOwed = !0;
      return;
    }
    if (
      UWn(
        this.withoutUserTierNamesInSnapshot(e),
        (_) => m(_) === m("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"),
      )
    )
      t(
        "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE put back to its startup value, or removed, because no settings source still sets its current value",
      );
  }
  isAutoCompactPutBackOwed() {
    return this.autoCompactPutBackOwed;
  }
  isSettingsSourcedEnvValue(e, o) {
    let r = o.trim();
    return (
      this.settingsOfferedEnvValues.get(e.toUpperCase())?.has(r) === !0 ||
      this.personsWrittenEnvValues.get(m(e)) === r
    );
  }
  recordPersonsEnvValue(e, o) {
    if (o === void 0) this.personsWrittenEnvValues.delete(m(e));
    else this.personsWrittenEnvValues.set(m(e), o.trim());
  }
  recordOfferedEnvValue(e, o) {
    let r = e.toUpperCase(),
      a = o.trim(),
      _ = this.settingsOfferedEnvValues.get(r);
    if (_) _.add(a);
    else this.settingsOfferedEnvValues.set(r, new Set([a]));
  }
  personsSettingsEnvKeeps(e, o, r) {
    let a = this.providerStripContext === V ? G() : this.providerStripContext,
      _ = Ko(),
      g = _.slice(_.indexOf("userSettings") + 1),
      E = (f, O) => Object.keys(this.keptSettingsEnv(f, O, a, void 0, r));
    return (
      _.includes("userSettings") &&
      E({ [e]: o }, "userSettings").includes(e) &&
      !g.some((f) => E(_e(f)?.env, f).some((O) => m(O) === m(e))) &&
      !this.otelDominates(e) &&
      !(o === "" && m(e) === m(YP) && this.processWrapperKeyAbove() !== void 0)
    );
  }
  otelDominates(e) {
    let o = new Set();
    this.otelDominatedAsked = o;
    try {
      this.enforceManagedOtelFamilyDominance();
    } finally {
      this.otelDominatedAsked = void 0;
    }
    return o.has(e.toUpperCase());
  }
  otelClaimInForce(e, o) {
    return this.otelDominatedAsked !== void 0 || process.env[e] === o;
  }
  processWrapperKeyAbove() {
    return [
      this.processWrapperKeyFrom("policySettings"),
      this.processWrapperKeyFrom("flagSettings"),
    ].find((e) => typeof e === "string" && e !== "");
  }
  filterPolicyPredicateEnv(
    e,
    o,
    { forPolicyMatch: r, comparesNoValue: a = !1 },
  ) {
    if (!r && this.withholdsEnvFrom(o)) return {};
    let _ = Ce(
        ue(
          W(
            le(
              ce(
                k(
                  fe(r ? e : this.asFromAFolderNobodyTrusted(e, o, !1), o),
                  o,
                  this.invalidEnvKeyWarned,
                ),
                o,
                this.projectScopeDropWarned,
                () => this.envAboveProjectSettings(),
                { comparesNoValue: a },
              ),
            ),
          ),
          o,
          this.providerStripContext,
          this.hostManagedDropWarned,
        ),
        o,
        this.hostSpawnEnvKeys,
        this.providerStripContext,
      ),
      g = {};
    for (let [E, f] of Object.entries(pe(_, o, void 0))) {
      let O = E.toUpperCase();
      if (ee(O)) continue;
      if (!r && cEo(E, f)) continue;
      g[E] = f;
    }
    return g;
  }
  withholdsEnvFrom(e, o = this.providerStripContext) {
    return o.storedLoginPinned && CMs(e);
  }
  asFromAFolderNobodyTrusted(e, o, r) {
    if (e === void 0 || !aut(o)) return e;
    let a = eFl(o),
      _ = {},
      g = [];
    for (let [E, f] of Object.entries(e)) {
      let O = E.toUpperCase();
      if (typeof f === "string" && (lLr(E, f) || (!a && Fe(O, f)))) _[E] = f;
      else if (r && a) this.servedFolderEnvWithheld = !0;
      else if (r && !this.untrustedFolderDropWarned.has(`${o}:${E}`))
        (this.untrustedFolderDropWarned.add(`${o}:${E}`), g.push(z2t(E)));
    }
    if (g.length > 0)
      t(
        `Ignoring ${g.join(", ")} in the env block of ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"}: ${mPe}, and this session cannot show a trust dialog, so this folder's settings files may set only a short list of variables, each to certain values only, such as DISABLE_TELEMETRY=1. The repository's author chose the ignored values, not you. If your setup needs an ignored variable, set it yourself in user or managed settings, or in the environment that Claude Code is started with. On a self-hosted runner, user settings are settings.json in the runner host's config directory (SELF_HOSTED_RUNNER_HOST_CONFIG_DIR): restart the runner afterwards.`,
        { level: "warn" },
      );
    return _;
  }
  processWrapperKeyFrom(e) {
    return this.withholdsEnvFrom(e) || ec() || (e === "userSettings" && fb())
      ? void 0
      : _e(e)?.processWrapper;
  }
  dropDominatedOtelKey(e, o, r, a, _ = "managed settings") {
    let g = this.otelDominatedAsked;
    if (g !== void 0) {
      if (
        !(a.has(e) && a.get(e) === process.env[e]) &&
        !this.hostSpawnEnvKeys?.has(e.toUpperCase())
      )
        g.add(e.toUpperCase());
      return;
    }
    if (a.get(e) === process.env[e]) return;
    if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) return;
    if (process.env[e] === void 0) return;
    if (!this.otelDominanceDropWarned.has(e))
      (this.otelDominanceDropWarned.add(e),
        t(
          `Dropping ${eGe(e)}: ${eGe(r)} is claimed by ${_}, so lower-trust scopes cannot redirect ${o}`,
          { level: "warn" },
        ));
    delete process.env[e];
  }
  dropDominatedAntAlias(e, o, r, a = "managed settings") {
    return;
  }
  dropDominatedBetaTracingEndpoint(e, o, r = "managed settings") {
    this.dropDominatedOtelKey(
      Le,
      "the logs and traces signals through detailed beta tracing",
      e,
      o,
      r,
    );
  }
  hostSpawnOtelClaims() {
    let e = new Map(),
      o = this.hostSpawnEnvKeys;
    if (!o) return e;
    let r = [...o].some((a) => {
      let _ = Q(a);
      return (
        ((_.startsWith(N) && _.endsWith("_ENDPOINT")) || _ === Le) &&
        (process.env[a] ?? "").trim() !== ""
      );
    });
    for (let a of o) {
      let _ = Q(a),
        g = Re.has(_) || _ === Te,
        E = r && _.startsWith(N);
      if (!g && !E) continue;
      let f = process.env[a];
      if (f !== void 0) e.set(a, f);
    }
    return e;
  }
  enforceManagedOtelFamilyDominance() {
    let e = _e("policySettings"),
      o = e?.env,
      r = (e?.otelHeadersHelper ?? "").trim() !== "",
      a = new Map();
    for (let [_, g] of Object.entries(o ?? {})) {
      let E = _.toUpperCase();
      if (!a.has(E) || _ === E) a.set(E, g);
    }
    if (
      (this.applyOtelFamilyClaims(
        this.hostSpawnOtelClaims(),
        a,
        "the host spawn env",
      ),
      !o && !r)
    )
      return;
    if (r) {
      for (let _ of Z)
        this.dropDominatedOtelKey(
          `${N}${_}_ENDPOINT`,
          `the ${_.toLowerCase()} signal`,
          "otelHeadersHelper",
          a,
        );
      (this.dropDominatedOtelKey(
        `${N}ENDPOINT`,
        "telemetry for any signal",
        "otelHeadersHelper",
        a,
      ),
        this.dropDominatedAntAlias(`${N}ENDPOINT`, "otelHeadersHelper", a),
        this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", a));
    }
    this.applyOtelFamilyClaims(a, a, "managed settings");
  }
  applyOtelFamilyClaims(e, o, r) {
    for (let [a, _] of e) {
      let g = Q(a);
      if (g === Te) {
        if (this.otelClaimInForce(a, _) && !Ne(_))
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      if (Re.has(g)) {
        if (this.otelClaimInForce(a, _) && St(_))
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      if (!g.startsWith(N)) continue;
      if (_.trim() === "") continue;
      if (!this.otelClaimInForce(a, _)) continue;
      let E = Z.find((T) => g.startsWith(`${N}${T}_`));
      if (E) {
        let T = g.slice(`${N}${E}_`.length),
          L = E === "TRACES" || E === "LOGS";
        if (Ae.has(T)) {
          if (
            (this.dropDominatedOtelKey(
              `${N}${E}_ENDPOINT`,
              `the ${E.toLowerCase()} signal`,
              a,
              o,
              r,
            ),
            L)
          )
            this.dropDominatedBetaTracingEndpoint(a, o, r);
        } else if (T === "ENDPOINT" && L)
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      let f = g.slice(N.length),
        O = Ae.has(f),
        S = O ? [f, "ENDPOINT"] : [f];
      for (let T of S)
        for (let L of Z)
          this.dropDominatedOtelKey(
            `${N}${L}_${T}`,
            `the ${L.toLowerCase()} signal`,
            a,
            o,
            r,
          );
      if (O)
        (this.dropDominatedOtelKey(
          `${N}ENDPOINT`,
          "telemetry for any signal",
          a,
          o,
          r,
        ),
          this.dropDominatedAntAlias(`${N}ENDPOINT`, a, o, r));
      if (S.includes("ENDPOINT"))
        this.dropDominatedBetaTracingEndpoint(a, o, r);
      this.dropDominatedAntAlias(g, a, o, r);
    }
  }
  resetSettingsIfUserSettingsFileMoved(e) {
    if (_n("userSettings") !== e) pr();
  }
  applySafeConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(), (this.providerStripContext = G()));
    let e = _n("userSettings"),
      o = s.NODE_EXTRA_CA_CERTS,
      r = s.CLAUDE_CODE_CERT_STORE,
      a = s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      _ = s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      g = s.NODE_OPTIONS,
      E = Xhn();
    if (this.hostSpawnEnvKeys === void 0) {
      if (
        ((this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated
          ? new Set(Object.keys(process.env).map((R) => R.toUpperCase()))
          : null),
        this.hostSpawnEnvKeys && bK("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"))
      )
        this.hostSpawnEnvKeys.add("CLAUDE_CODE_OAUTH_TOKEN");
      if (rIs()) this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
    }
    ((this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      (this.organizationAwsValues = {}),
      Object.assign(process.env, this.takenFromToolServerLaunchEnv()),
      (this.appliedGlobalConfigEnv = this.filterSettingsEnv(
        this.getLegacyEnvMap(),
        "globalConfig",
      )),
      this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv));
    for (let R of ft) {
      if (R === "policySettings") continue;
      if (!rn(R)) continue;
      this.assignFromAboveTheRepository(this.filterSettingsEnv(_e(R)?.env, R));
    }
    (Mp(),
      (this.providerStripContext = {
        ...this.providerStripContext,
        hybridOrganization: ve(),
      }));
    let f = _e("policySettings"),
      O = f !== null && agn();
    if (O) {
      let R = M(f.env, X_n);
      this.policyTransportEnv =
        Yb() !== null && !nc() && dKt().composes !== "tier"
          ? {
              ...me(
                this.policyTransportEnv,
                Object.keys(R).map((I) => I.toUpperCase()),
              ),
              ...R,
            }
          : R;
    }
    let T = {
      ...(f !== null && !O && (this.policyTransportEnv !== void 0 || ZPe())
        ? me(f?.env, X_n)
        : f?.env),
      ...this.policyTransportEnv,
    };
    this.assignFromAboveTheRepository(
      this.filterSettingsEnv(T, "policySettings"),
    );
    let L = new Map(),
      U = Ko();
    for (let R of Ts) {
      let I = U.includes(R);
      if (!I && !this.optOutOnlySources.includes(R)) continue;
      let j = this.filterSettingsEnv(
        R === "policySettings" ? T : I ? _e(R)?.env : vl(R)?.env,
        R,
      );
      for (let [w, oe] of Object.entries(j))
        if (I || Dt(w, oe))
          L.set(w.toUpperCase(), { key: w, value: oe, source: R });
    }
    for (let R of Object.keys(this.organizationAwsValues))
      L.delete(R.toUpperCase());
    for (let { key: R, value: I, source: j } of L.values()) {
      if (!ROe(R, I)) continue;
      if (Qee(j)) {
        let w = zQi(R);
        ((process.env[R] = I), w());
      } else ((process.env[R] = I), VQi(R));
    }
    this.publishChildEnv(!1);
    let b = process.env[YP];
    if (!b || b === this.materializedProcessWrapper) {
      let R = rn("userSettings")
          ? this.processWrapperKeyFrom("userSettings")
          : void 0,
        I = this.processWrapperKeyAbove() ?? (R === "" ? void 0 : R);
      if (I !== void 0)
        ((process.env[YP] = I), (this.materializedProcessWrapper = I));
    }
    (this.enforceManagedOtelFamilyDominance(),
      this.resetSettingsIfUserSettingsFileMoved(e));
    let y =
      s.NODE_EXTRA_CA_CERTS !== o ||
      s.CLAUDE_CODE_CERT_STORE !== r ||
      s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== a ||
      s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== _ ||
      s.NODE_OPTIONS !== g;
    if (y) rKn();
    if ((y || Xhn() !== E) && yRt()) Cw();
  }
  applyConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(),
      Mp(),
      (this.providerStripContext = G()),
      (this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      (this.organizationAwsValues = {}));
    let e = s.NODE_EXTRA_CA_CERTS,
      o = s.CLAUDE_CODE_CERT_STORE,
      r = s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      a = s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      _ = s.NODE_OPTIONS,
      g = s.CLAUDE_CODE_CLIENT_CERT,
      E = s.CLAUDE_CODE_CLIENT_KEY;
    ((this.legacyEnvMapAtLaunch ??= { ...ge().env }),
      Object.assign(process.env, this.takenFromToolServerLaunchEnv()),
      (this.appliedGlobalConfigEnv = this.filterSettingsEnv(
        this.getLegacyEnvMap(),
        "globalConfig",
      )),
      this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv),
      (this.fullPassDroppedGitKey = !1),
      (this.fullPassDroppedFlagSwitch = !1),
      (this.policyTransportEnv = void 0));
    for (let L of Ko()) {
      let U = this.filterSettingsEnv(_e(L)?.env, L, {
        onGitKeyDropped: () => {
          this.fullPassDroppedGitKey = !0;
        },
        onFlagSwitchDropped: () => {
          this.fullPassDroppedFlagSwitch = !0;
        },
      });
      if (Qee(L)) {
        let b = Object.keys(U).map((y) => zQi(y));
        Object.assign(process.env, U);
        for (let y of b) y();
      } else this.assignFromAboveTheRepository(U);
    }
    (this.publishChildEnv(!0), this.enforceManagedOtelFamilyDominance());
    let f =
      s.NODE_EXTRA_CA_CERTS !== e ||
      s.CLAUDE_CODE_CLIENT_CERT !== g ||
      s.CLAUDE_CODE_CLIENT_KEY !== E;
    if (
      s.NODE_EXTRA_CA_CERTS !== e ||
      s.CLAUDE_CODE_CERT_STORE !== o ||
      s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== r ||
      s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== a ||
      s.NODE_OPTIONS !== _
    )
      rKn();
    let { certPath: O, keyPath: S } = vXi(),
      T =
        (s.CLAUDE_CODE_CLIENT_CERT !== O || s.CLAUDE_CODE_CLIENT_KEY !== S) &&
        (O !== void 0 || S !== void 0);
    if (!T) ZIs();
    (Cw(),
      Promise.all([eEe(), Hoe()])
        .then(([L, U]) => {
          if (T && U.readFailed) ZIs();
          if (f || T || L || U.changed) Cw();
        })
        .catch(i));
  }
}
var h = new we(),
  bo = f$({ clear: () => h.reset() });
function w9() {
  z(Vcn, HTr);
  try {
    h.applySafeConfigEnvironmentVariables();
  } finally {
    (zMr(), BTr());
  }
  (X(), zV());
}
var Ot = new Set([...GA, "DISABLE_AUTOUPDATER", "DISABLE_UPDATES"]);
function Dt(e, o) {
  return lLr(e, o) || (Ot.has(e.toUpperCase()) && Ne(o));
}
function Vji(e) {
  h.optOutOnlySources = e;
}
function w1() {
  z(Vcn, HTr);
  try {
    h.applyConfigEnvironmentVariables();
  } finally {
    (zMr(), BTr());
  }
  (X(), zV());
}
function Kji() {
  return h.lastFullPassDroppedRepositoryFlagSwitch();
}
function qji() {
  return h.servedFolderEnvWasWithheld();
}
export {
  $Wn,
  aEo,
  eGe,
  z2t,
  cvl,
  mks,
  uvl,
  zre,
  lEo,
  ITr,
  Dji,
  hks,
  gks,
  MTr,
  dEo,
  Lji,
  Nji,
  _ks,
  HTr,
  DTr,
  yks,
  cEo,
  Fji,
  $ji,
  n_,
  LTr,
  QH,
  NTr,
  Uji,
  Bji,
  Wji,
  jji,
  Gji,
  Gc,
  PV,
  Vcn,
  b9,
  zji,
  uEo,
  UWn,
  Gle,
  BWn,
  FTr,
  $Tr,
  w9,
  Vji,
  w1,
  Kji,
  qji,
};
