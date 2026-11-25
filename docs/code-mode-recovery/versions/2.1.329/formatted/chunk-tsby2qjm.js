// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Oe, Os } from "/$bunfs/root/chunk-cqahc80t.js";
import { Tdt, gx, Po, mOr, _D, at } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { A, D, d } from "/$bunfs/root/chunk-avbzeyf3.js";
import {
  L1n,
  ygl,
  T1i,
  y6,
  iu,
  Vt,
  XUi,
  i$i,
  xSs,
  a$i,
  oSl,
  l$i,
  uWt,
  $Ae,
  tit,
  ibl,
  tRe,
  me,
  qWt,
} from "/$bunfs/root/chunk-aq3ms068.js";
import { or } from "/$bunfs/root/chunk-8wtweva8.js";
import { s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { t, ts } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { tPr, nPr, i } from "/$bunfs/root/chunk-ht6e56zb.js";
import { x } from "/$bunfs/root/chunk-kg2zehkt.js";
import { yl, nRo, x$ } from "/$bunfs/root/chunk-0v6g5ynk.js";
import { p } from "/$bunfs/root/chunk-3kmy2srk.js";
import { Gi } from "/$bunfs/root/chunk-wb0pe3gv.js";
import {
  Ks,
  Jp,
  ku,
  ni,
  vlt,
  dG,
  hme,
  OLe,
  hGt,
  c3i,
  vb,
} from "/$bunfs/root/chunk-t39fw2cy.js";
import { f, l } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { zQ, Pat, yYe, q6 } from "/$bunfs/root/chunk-wvqv27vf.js";
import { vr, bxe, Zl, WTt } from "/$bunfs/root/chunk-cd3hqxcc.js";
import {
  lN,
  eOl,
  tOl,
  nOl,
  sA,
  J2n,
  wxr,
  xAo,
  mZ,
  kxr,
  PAo,
  BLe,
  K5,
  OAo,
  kwe,
  H9i,
  Z2n,
  DAo,
  LAo,
  sOl,
  uzt,
  HAs,
  mfn,
  vxr,
  L9i,
  _xe,
  Cxr,
} from "/$bunfs/root/chunk-rqs3939j.js";
import { Yn } from "/$bunfs/root/chunk-4t09bv92.js";
import {
  BCl,
  Hat,
  u$,
  lCr,
  fAl,
  uvs,
  gn,
  pT,
  jne,
  ye,
  TYe,
  pl,
  w2t,
  tw,
  YWn,
  x5,
  nw,
  kcn,
  $Re,
} from "/$bunfs/root/chunk-pxy9yt8m.js";
import { XL } from "/$bunfs/root/chunk-zryj96fm.js";
import { ws, Wo, en } from "/$bunfs/root/chunk-jngxzq9c.js";
import { oqi, sqi, rRl } from "/$bunfs/root/chunk-g9qwcm48.js";
import { fTs, ZAl, tRl } from "/$bunfs/root/chunk-v5qt1dvw.js";
import {
  Wbe,
  MWn,
  Wne,
  N6i,
  FEs,
  q6i,
  _vt,
  fcn,
  ew,
} from "/$bunfs/root/chunk-2jhxnfds.js";
import {
  Ldn,
  mzi,
  hzi,
  uEo,
  Vks,
  py,
  ovt,
} from "/$bunfs/root/chunk-59xdgreq.js";
import { $3, um } from "/$bunfs/root/chunk-hjygr1qe.js";
import { qx } from "/$bunfs/root/chunk-mrvxnfcf.js";
import { rl } from "/$bunfs/root/chunk-mxsnk3xz.js";
import { Efl } from "/$bunfs/root/chunk-czax1965.js";
import { Cfl, Eyr } from "/$bunfs/root/chunk-d9k578ss.js";
import { Rfl, NS } from "/$bunfs/root/chunk-vshss2nx.js";
import { Vfl, qfl, Yfl } from "/$bunfs/root/chunk-r3p0xky0.js";
import { Ie } from "/$bunfs/root/chunk-b03afx74.js";
import { gr } from "/$bunfs/root/chunk-b8jbx83a.js";
import { T$ } from "/$bunfs/root/chunk-bf44ctbd.js";
import { jt, ir, By } from "/$bunfs/root/chunk-bpdncsrm.js";
import { Szt, n, O, C, c, U, W } from "/$bunfs/root/chunk-8s3h5g9z.js";
import { de } from "/$bunfs/root/chunk-pb0k2vmd.js";
import { fc } from "/$bunfs/root/chunk-d9b4fyhh.js";
function Y(e, o) {
  return nOl.test(e)
    ? "invalid-name"
    : typeof o !== "string"
      ? "non-string-value"
      : o.includes("\x00")
        ? "nul-in-value"
        : void 0;
}
var bNn = {
  "invalid-name": "it isn't a valid environment variable name",
  "non-string-value": "its value isn't a string",
  "nul-in-value": "its value contains a NUL character",
};
function Vmo(e) {
  let o = Object.entries(e),
    r = o.flatMap(([_, u]) => {
      let E = Y(_, u);
      return E === void 0 ? [] : [{ name: _, problem: E }];
    });
  if (r.length === 0) return { kept: e, dropped: r };
  let a = new Set(r.map((_) => _.name));
  return { kept: Object.fromEntries(o.filter(([_]) => !a.has(_))), dropped: r };
}
var ie = 200;
function we(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function hWe(e) {
  return ts(e)
    .slice(1, -1)
    .replace(
      /[^\x20-\x7e]/g,
      (o) => `\\u${o.charCodeAt(0).toString(16).padStart(4, "0")}`,
    );
}
function l$t(e) {
  let o = e.indexOf("="),
    r = o === -1 ? e : e.slice(0, o),
    a = r.length > ie,
    _ = `"${hWe(a ? r.slice(0, ie) : r)}"${a ? "\u2026" : ""}`;
  return o === -1
    ? _
    : `${_} (then '=' and ${we(e.length - o - 1)}, not shown)`;
}
var He = null;
function re(e) {
  He = e;
}
var Ve = new Set([
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
  ]),
  Be = new Set(By);
function Ge() {
  let e = tw();
  return (
    e !== null &&
    (e.forceLoginOrgUUID !== void 0 || e.forceLoginMethod !== void 0) &&
    e.allowNestedModelAccessUnderForceLogin !== !0 &&
    e.policyHelper === void 0 &&
    e.policyHelpers === void 0
  );
}
function z(e, o) {
  let r = s.CLAUDE_CODE_RUNNER_MODEL_SOCKET === void 0 ? void 0 : ygl();
  if (r === void 0) return;
  try {
    let a = YWn(),
      _ = Wo().filter((h) => h !== "policySettings" && !Hat(h)),
      u = { ...process.env, ...Object.fromEntries(r) },
      E = [
        ...Object.entries(e() ?? {}),
        ..._.flatMap((h) =>
          Object.entries(ye(h)?.env ?? {}).filter(([S]) => !mZ(h) || !o(S)),
        ),
        ...a.envs.flatMap((h) => Object.entries(h)),
      ].filter(([h]) => u[h] === void 0),
      g = ibl({
        settingsCredential: E.some(
          ([h, S]) => Ve.has(h) && String(S).trim() !== "",
        ),
        settingsApiKeyHelper:
          a.apiKeyHelper || _.some((h) => ye(h)?.apiKeyHelper !== void 0),
        settingsProvider: E.some(([h, S]) => Be.has(h) && Oe(S)),
        tokenFile: [zQ, Pat].some((h) => yYe(h, "credential") !== null),
        storedSignIn: XUi(),
        machinePolicyUnread: a.unread,
        underCI: Oe(!1),
        isSignInPinned: Ge,
      });
    if ((T1i(g), g !== void 0 && r.length > 0)) $3();
  } catch (a) {
    try {
      (T1i("settings_check_threw"), $3());
    } catch {}
    i(
      new A(
        `[runner-model-socket] the settings check threw (${D(a).name})`,
        "[runner-model-socket] the settings check threw",
      ),
    );
  }
}
W();
var se = () =>
    n()
      .trim()
      .min(1)
      .max(100)
      .refine((e) => jt(e) === e),
  ke = p(() =>
    c({
      lead: se(),
      worker: se(),
      effort: U(Gi).optional(),
      coordinator: O().default(!0),
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
    }),
  ),
  ae = p(() =>
    ke()
      .omit({ coordinator: !0 })
      .extend({
        lead: n().trim().min(1).max(100),
        label: n().trim().min(1).max(60),
        description: n().trim().max(200).default(""),
      }),
  );
function xe(e) {
  return (
    s.CLAUDE_CODE_SUBAGENT_MODEL === e.worker &&
    s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE
  );
}
var bfl = 5000;
function bps() {
  let e = vr(),
    o = e.clientDataUrl.document?.entries.find(
      ({ clientData: g }) => g.tengu_zesty_horizon !== void 0,
    ),
    r =
      at() || or() || e.providerCache.servedMixRecipe?.accountEpoch !== _D()
        ? void 0
        : e.providerCache.servedMixRecipe,
    a = o !== void 0 ? o.clientData.tengu_zesty_horizon : r?.recipe,
    _ = e.modelMix?.mix;
  if (
    a === void 0 ||
    ((_ === void 0 || !xe(_)) &&
      (s.CLAUDE_CODE_SUBAGENT_MODEL || s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE))
  )
    return;
  let u = ae().safeParse(a),
    E = !u.success
      ? Szt(u.error)
      : o !== void 0 && !o.pattern.test(jt(u.data.lead))
        ? "its lead does not match its entry's model_pattern"
        : o === void 0 && ir(u.data.lead) !== r?.model
          ? `its lead model is not "${r?.model}", the model this client data was served for`
          : void 0;
  if (!u.success || E !== void 0) {
    (t(`tengu_zesty_horizon ignored: ${E}`, { level: "warn" }),
      l("document_recipe", "recipe_invalid"));
    return;
  }
  return {
    ...u.data,
    coordinator: !1,
    source: o !== void 0 ? "document" : "served",
  };
}
function wfl() {
  let e = qWt()?.tengu_zesty_horizon;
  if (e === void 0) return;
  return ae().safeParse(e).data;
}
function jCe() {
  return vr().modelMix?.mix;
}
function Kmo(e) {
  let o = vr(),
    r = o.modelMix?.replaced ?? {
      subagentModel: s.CLAUDE_CODE_SUBAGENT_MODEL,
      subagentModelForce: s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE,
      coordinator: rl(),
    };
  return (
    (o.modelMix = { mix: e, replaced: r }),
    s.set("CLAUDE_CODE_SUBAGENT_MODEL", e.worker),
    s.set("CLAUDE_CODE_SUBAGENT_MODEL_FORCE", !0),
    f("document_recipe"),
    r.coordinator
  );
}
function X() {}
function myr() {
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
function dHi(e) {
  let o = vr().modelMix?.mix;
  if (o?.source !== void 0 && iu(Vt(o.lead)) !== iu(Vt(e))) myr();
}
var Ke = new Set([
    ...mfn,
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_SIMPLE",
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
    "SSLKEYLOGFILE",
    "HOSTALIASES",
    "LOCALDOMAIN",
    "RES_OPTIONS",
  ]),
  We = /^(?:BUN|NODE)_/;
function wps(e) {
  let o = e.toUpperCase();
  return (
    s.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER &&
    s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST &&
    (kwe(o) || Ke.has(o) || We.test(o))
  );
}
var je = "tengu_snappy_sutton",
  Ye = new Set([
    "CLAUDE_CODE_DISABLE_FEATURE_FLAGS",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
    "DISABLE_GROWTHBOOK",
  ]),
  $e = new Set([
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
  Ee = new Set([...Ye, ...$e]);
function kps() {
  return Ie(je, { safe: !0 });
}
var ze = new Set([
  "ANTHROPIC_UNIX_SOCKET",
  "ANTHROPIC_BASE_URL",
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "CLAUDE_CODE_OAUTH_TOKEN",
  ...K5.filter((e) => e.startsWith("CLAUDE_CODE_ARTIFACT") || BLe(e)),
]);
function le(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let o = {};
  for (let [r, a] of Object.entries(e)) if (!ze.has(r.toUpperCase())) o[r] = a;
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
function B() {
  let e = Oe(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
    o = yl(),
    r = process.env.CLAUDE_CODE_ENVIRONMENT_KIND,
    a = e || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
  return {
    coworkCloud: Jp(),
    managedByHost: a,
    managedByHostFlag: e,
    desktopHost: o,
    firstPartyCodeTab:
      process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop" && !a,
    localThirdPartyDesktop: nRo(),
    hostOrchestrated: o || r === "byoc",
    storedLoginPinned: u$(),
    hybridOrganization: Le(),
  };
}
function Le() {
  {
    let e = ni();
    return e !== null && ((c3i() && vlt()) || dG(e) !== void 0);
  }
  return !1;
}
function hyr() {
  return qmo() !== void 0;
}
function qmo() {
  let e = te();
  return typeof e === "object" ? e.providerSwitch : void 0;
}
function cHi() {
  return typeof te() === "object";
}
function uHi() {
  let e = te();
  return typeof e === "object" && e.providerSwitch === void 0;
}
function te() {
  {
    let e = ni();
    if (e === null) return "none";
    let o = dG(e);
    if (o === void 0) return "none";
    let r = ye("policySettings")?.env,
      a = hGt(e) === "in_force",
      _ = By.find((g) => o[g] === "1" && (r?.[g] === "1" || (a && s[g])));
    if (_ !== void 0) return { providerSwitch: _ };
    let u = o.ANTHROPIC_BASE_URL,
      E = [r?.ANTHROPIC_BASE_URL, a ? s.ANTHROPIC_BASE_URL : void 0];
    return u && E.some((g) => !!g && OLe(g, u))
      ? { providerSwitch: void 0 }
      : "none";
  }
  return "none";
}
var Xe = new Set(["policySettings", "projectSettings", "localSettings"]),
  Je = [],
  qe = [],
  ve = [],
  Eps = new Set([
    qx,
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
    ...Ldn,
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    ...OAo,
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
    ...ve.flatMap((e) => e.names),
    "GITHUB_ACTIONS",
    "RUNNER_ENVIRONMENT",
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "OTEL_LOG_RAW_API_BODIES",
    ...kxr,
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
    lN,
    eOl,
    tOl,
    ...Je,
  ]),
  Ze = ["CLAUDE_AX_", ...ve.flatMap((e) => e.prefixes), ...qe];
function gyr(e) {
  let o = e.toUpperCase();
  return Eps.has(o) || Ze.some((r) => o.startsWith(r));
}
function Qe() {
  try {
    let e = import.meta.require("/$bunfs/root/chunk-3s9h5k34.js");
    return e.getHybridSettingsOrganization() !== null;
  } catch {
    return !0;
  }
  return !1;
}
function _e(
  e,
  o,
  r,
  a,
  { onGitKeyDropped: _, onFlagSwitchDropped: u, comparesNoValue: E = !1 } = {},
) {
  let g = nt(e, o, r, a, _, u);
  return E ? g : et(g, o, r);
}
function et(e, o, r) {
  if (!e || !mZ(o)) return e;
  let a = new Set(
    Object.keys(e).filter(
      (_) => _.toUpperCase() === "MCP_TIMEOUT" && Efl(e[_]),
    ),
  );
  for (let _ of a)
    if (r?.has(_) === !1)
      (r.add(_),
        t(
          `${_} in ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"} is ignored: a project's settings can give MCP servers more time to connect, not less. A value that isn't a positive number counts as 30 seconds. To shorten the time, use --settings or managed settings. Your user settings also shorten it unless a project's settings file sets a longer time, and your shell environment does if no other settings file's value applies.`,
          { level: "warn" },
        ));
  return a.size === 0 ? e : Ks(e, (_, u) => a.has(u));
}
var Ne = de({ keptOut: void 0 }, (e) => {
  e.keptOut = void 0;
});
function _yr() {
  return Ne.keptOut;
}
function tt(e, o) {
  return gx() && !_xe(e, o);
}
function ce(e, o, r) {
  if (!mZ(o) || !gx()) return e;
  let a;
  for (let [_, u] of Object.entries(e)) {
    if (!tt(_, u)) continue;
    if (((a ??= { ...e }), delete a[_], r === void 0)) continue;
    Ne.keptOut ??= _;
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
  return tPr.has(r) && !nPr({ [r]: o });
}
function nt(e, o, r, a, _, u) {
  if (!e || !mZ(o)) return e;
  let E = !0,
    g,
    h = !1;
  for (let S of Object.keys(e)) {
    if (S.toUpperCase() === "CLAUDE_CODE_USE_GATEWAY" && Qe()) {
      if (((g ??= { ...e }), delete g[S], r?.has(S) === !1))
        (r.add(S),
          t(
            `${S} in ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"} is ignored: this computer has an organization sign-in or its cached policy. Set CLAUDE_CODE_USE_GATEWAY in your shell environment, ~/.claude/settings.json or --settings instead.`,
            { level: "warn" },
          ));
      continue;
    }
    if ((Ee.has(S.toUpperCase()) || J(S, e[S])) && $Ae() && kps()) {
      (u?.(), (g ??= { ...e }), delete g[S]);
      let L = tPr.has(S.toUpperCase());
      if (((h ||= L && !J(S, e[S])), r?.has(S) === !1)) {
        r.add(S);
        let m =
          o === "localSettings"
            ? ".claude/settings.local.json"
            : ".claude/settings.json";
        t(
          J(S, e[S])
            ? `${S} in ${m} is ignored: in an Anthropic-hosted cloud session, a repository's settings can turn telemetry off but not back on.`
            : `${S} in ${m} is ignored${L ? ", apart from turning telemetry off" : ""}: in an Anthropic-hosted cloud session, a repository's settings can't set it, because it can keep feature flags or required plugins and skills out of the session. Set it in the cloud environment's variables instead.`,
          { level: "warn" },
        );
      }
      continue;
    }
    if (
      !gyr(S) ||
      PAo(S, e[S], a) ||
      (L9i.has(S) && Oe(e[S])) ||
      be(S.toUpperCase(), e[S])
    )
      continue;
    if (((g ??= { ...e }), delete g[S], r?.has(S) === !1)) {
      r.add(S);
      let L =
          o === "localSettings"
            ? ".claude/settings.local.json"
            : ".claude/settings.json",
        m = xSs.get(S.toUpperCase());
      t(
        m !== void 0
          ? `${S} in ${L} is ignored: a project's settings can only set it to "${m}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.`
          : tit(S, e[S])
            ? `${S} in ${L} is ignored: no settings file can set this key, only the environment Claude Code is started with or Claude Code itself.`
            : S.toUpperCase() === "CLAUDE_CODE_MODEL_CATALOG"
              ? `${S} in ${L} is ignored: a project's settings can only turn the model catalog off ("off"). Set any other value in ~/.claude/settings.json or managed settings.`
              : `${S} in ${L} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`,
        { level: "warn" },
      );
    }
  }
  if (g && h) g.DISABLE_TELEMETRY ||= "1";
  return g ?? e;
}
var ot = {
  ...bNn,
  "non-string-value": "its value isn't a string, a number or a boolean",
};
function G(e, o, r) {
  if (!e) return e;
  let a;
  for (let [_, u] of Object.entries(e)) {
    let E = u,
      g =
        typeof E === "string"
          ? E
          : typeof E === "number" || typeof E === "boolean"
            ? String(E)
            : void 0,
      h = Y(_, g);
    if (h === void 0) {
      if (g !== void 0 && g !== E) ((a ??= { ...e }), (a[_] = g));
      continue;
    }
    ((a ??= { ...e }), delete a[_]);
    let S = ot[h],
      L = l$t(_),
      m = `${o}:${S}:${L}`;
    if (r !== void 0 && !r.has(m))
      (r.add(m),
        t(`Env key ${L} from ${o} is ignored: ${S}.`, { level: "warn" }));
  }
  return a ?? e;
}
var it = new Set(["CLAUDE_CODE_TRANSCRIPT_LOCAL_GC"]);
function rt(e, o, r) {
  return r === "policySettings" && it.has(e.toUpperCase()) && Os(o);
}
var st = new Set(["CLAUDE_CODE_ATTRIBUTION_HEADER"]);
function Et(e, o, r) {
  return (
    r === "policySettings" &&
    st.has(e.toUpperCase()) &&
    Os(o) &&
    x$() &&
    mOr(Po()) &&
    Os(vb()?.env?.[e])
  );
}
function H(e, o, r, a = "host routing") {
  if (e === void 0 || e.has(o)) return;
  e.add(o);
  let _ = hWe(o),
    u = {
      "host routing":
        "this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.",
      "repo tier":
        "repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.",
      "desktop start":
        "sessions that Claude Desktop starts don't take this variable from this settings source.",
      "desktop route":
        "the same settings also choose a provider, gateway or non-Anthropic base URL. Claude Desktop ignores that choice, so it ignores this variable too. Remove that choice from these settings to apply it.",
    }[a];
  t(`Ignoring ${_} from ${r} \u2014 ${u}`, { level: "warn" });
}
function Pe(e, o, r) {
  return (
    r.localThirdPartyDesktop &&
    o === "policySettings" &&
    e.toUpperCase() === LAo
  );
}
function Ue(e, o, r) {
  return (
    r.firstPartyCodeTab && o === "policySettings" && sOl.has(e.toUpperCase())
  );
}
function vps(e) {
  let o = new Set([...By, "CLAUDE_CODE_USE_GATEWAY"]),
    r = new Set(
      Object.keys(bxe)
        .flatMap((a) => WTt(a))
        .map(({ name: a }) => a)
        .filter((a) => !a.startsWith("AWS_ENDPOINT_URL")),
    );
  return Object.entries(e).some(([a, _]) => {
    let u = a.toUpperCase(),
      E = _.trim();
    if (u === "ANTHROPIC_BASE_URL") return E !== "" && !Zl(E);
    return o.has(u) ? Oe(_) : r.has(u) && E !== "";
  });
}
function pe(e, o, r, a) {
  if (!e) return {};
  let _ = r.managedByHost || (r.desktopHost && Xe.has(o)),
    u = {};
  for (let [E, g] of Object.entries(e)) {
    if (i$i.has(E.toUpperCase()) && !rt(E, g, o)) continue;
    if (r.coworkCloud && vxr(E)) {
      H(a, E, o);
      continue;
    }
    if (
      uWt(E) &&
      ($Ae() || at()) &&
      !(
        o === "policySettings" &&
        E === "CLAUDE_CODE_CUSTOM_OAUTH_URL" &&
        vb()?.env?.[E] === g
      )
    ) {
      if (a !== void 0 && !a.has(E)) {
        a.add(E);
        let S = `Not setting ${hWe(E)} from ${o}: with CLAUDE_CODE_REMOTE true, no settings file can set it. Set it in the environment that Claude Code is started with.`;
        (t(S, { level: "warn" }),
          process.stderr.write(`${S}
`));
      }
      continue;
    }
    if (
      r.hybridOrganization &&
      mZ(o) &&
      ((kwe(E) && !H9i(E)) || Z2n(E) || HAs.includes(E.toUpperCase()))
    ) {
      if (a !== void 0 && !a.has(E))
        (a.add(E),
          t(
            `Ignoring ${hWe(E)} from ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"}: your organization's settings apply to this session, so a repository's settings can't set provider, proxy or certificate variables. If you need this value, set it in your shell or your user settings; your organization's connection may still replace it.`,
            { level: "warn" },
          ));
      continue;
    }
    if (wps(E) && !(o === "policySettings" && x5())) {
      if (a !== void 0 && !a.has(E))
        (a.add(E),
          t(
            `Ignoring ${hWe(E)} from ${o}: this session's launcher asked Claude Code to fetch the gateway's token itself, so only managed settings and the launcher can set this variable. Set it in one of those.`,
            { level: "warn" },
          ));
      continue;
    }
    if (!_) {
      u[E] = g;
      continue;
    }
    if (
      r.desktopHost &&
      o === "policySettings" &&
      E.toUpperCase() === "CLAUDE_CODE_CERT_STORE"
    ) {
      u[E] = g;
      continue;
    }
    if (Pe(E, o, r)) {
      u[E] = g;
      continue;
    }
    if (Ue(E, o, r)) {
      if (vps(e)) H(a, E, o, "desktop route");
      else u[E] = g;
      continue;
    }
    if (kwe(E) && (r.managedByHost || !H9i(E))) {
      H(a, E, o, r.managedByHost ? "host routing" : "desktop start");
      continue;
    }
    if (r.managedByHost && E.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
      H(a, E, o);
      continue;
    }
    if (
      r.managedByHostFlag &&
      (!r.desktopHost || mZ(o)) &&
      (Z2n(E) || uzt(E))
    ) {
      H(a, E, o, r.desktopHost ? "repo tier" : "host routing");
      continue;
    }
    u[E] = g;
  }
  return u;
}
function ue(e, o, r, a, _) {
  if (!e || !r) return e || {};
  let u = {},
    E = [];
  for (let [g, h] of Object.entries(e)) {
    if (!r.has(g.toUpperCase()) || Et(g, h, o)) {
      u[g] = h;
      continue;
    }
    let S = process.env[g];
    if (
      ((a.desktopHost &&
        o === "policySettings" &&
        DAo.some((L) => L === g.toUpperCase())) ||
        Pe(g, o, a) ||
        Ue(g, o, a)) &&
      x5()
    ) {
      if (((u[g] = h), _ && S !== void 0 && S !== h))
        t(
          `Using ${hWe(g)} from managed settings in place of the value this session had.`,
          { level: "warn" },
        );
      continue;
    }
    if (_ && S !== h) E.push(g);
  }
  if (_ && E.length > 0) dt(E, o, _);
  return u;
}
function dt(e, o, r) {
  let a = e.filter((u) => {
    let E = `${o}:${u}`;
    if (r.has(E)) return !1;
    return (r.add(E), !0);
  });
  if (a.length === 0) return;
  let _ = a.map(hWe).join(", ");
  t(
    `Ignoring ${_} from ${o}: the desktop app or runner that started this session supplies ${a.length === 1 ? "it" : "them"}, so the settings ${a.length === 1 ? "value is" : "values are"} not used.`,
    { level: "warn" },
  );
}
var lt = new Set([
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "CLAUDE_CODE_PERFORCE_MODE",
  ]),
  Me = new Set(kxr);
function Ymo(e, o) {
  let r = e.toUpperCase();
  return (
    fc() &&
    !(_xe(e, o) && !kwe(e) && !ovt(r) && !Me.has(r)) &&
    !(lt.has(r) && Oe(o))
  );
}
function ee(e) {
  return e === "NO_COLOR" || e === "FORCE_COLOR";
}
function q(e, o, r, a) {
  if (!e) return {};
  let _ = {};
  for (let [u, E] of Object.entries(e)) {
    let g = u.toUpperCase();
    if (ee(g) || Ymo(u, E)) {
      let S = py(o, u);
      if (a === !0) {
        if (r?.has(S) === !1) r.set(S, o[S]);
      } else r?.delete(S);
      o[S] = E;
      continue;
    }
    let h = py(o, u);
    (delete o[h], r?.delete(h), (_[u] = E));
  }
  return _;
}
function _t(e, o) {
  return e === "CLAUDE_CODE_MODEL_CATALOG" && Os(o);
}
function be(e, o) {
  return a$i(e, o) || _t(e, o);
}
function fHi() {
  for (let e of xSs.keys()) delete process.env[e];
}
var ct = new Set([
  "CLAUDE_CODE_PLUGIN_DIRS",
  "CLAUDE_CODE_PLUGIN_DIR_WATCH",
  "CLAUDE_CODE_PROCESS_WRAPPER",
]);
function pt(e, o) {
  if (e === void 0 || !NS() || (o !== "userSettings" && o !== "globalConfig"))
    return e;
  return Ks(e, (r, a) => ct.has(a.toUpperCase()));
}
function Ce(e, o) {
  if (
    e === void 0 ||
    (o !== "userSettings" && o !== "globalConfig" && o !== "policySettings") ||
    !(Tdt.value || TYe())
  )
    return e;
  return o === "policySettings" && (!Object.keys(e).some(ge) || x5())
    ? e
    : Ks(e, (r, a) => ge(a));
}
function ge(e) {
  return L1n.includes(e.toUpperCase());
}
var ut = new Set(["ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_EXTRA_BODY"]);
function K(e, o) {
  if (!e) return {};
  let r = {};
  for (let [a, _] of Object.entries(e))
    if (!l$i(a, _)) r[a] = _;
    else if (o) {
      let u = oSl(a);
      if (!o.has(u))
        (o.add(u),
          t(
            ut.has(u)
              ? `${u} in settings is ignored, all of it: it names a use case, which only the environment Claude Code is started with can do.`
              : `${u} in settings is ignored: no settings file can give it this value, only the environment Claude Code is started with or Claude Code itself.`,
            { level: "warn" },
          ));
    }
  return r;
}
function pHi() {
  return R.envAboveProjectSettings();
}
function S_() {
  return R.getPreSettingsEnvSnapshot();
}
function yyr() {
  let e = { ...S_() };
  for (let o of Object.keys(e)) if (process.env[o] === void 0) delete e[o];
  return e;
}
function Ct() {
  let e = R.withoutUserTierNamesInSnapshot(S_());
  for (let o of Object.keys(e))
    if (process.env[o] === void 0 && !jM(o, "")) delete e[o];
  try {
    for (let [o, r] of Object.entries(byr(jne(), "policySettings") ?? {}))
      e[py(e, o)] = r;
  } catch (o) {
    t(
      `managed settings' env could not be read for the policy helper: ${d(o)}`,
      { level: "error" },
    );
  }
  return e;
}
function jM(e, o) {
  return R.isSettingsSourcedEnvValue(e, o);
}
function Syr(e, o, r = !1) {
  return R.personsSettingsEnvKeeps(e, o, r);
}
function mHi() {
  R.putBackUnsuppliedAutoCompactEnv();
}
function hHi() {
  return R.isAutoCompactPutBackOwed();
}
function gHi() {
  return R.putBackUnsuppliedTelemetryEnv();
}
function _Hi(e) {
  R.setToolServerLaunchEnv(e);
}
function yHi(e, o) {
  R.recordPersonsEnvValue(e, o);
}
function Fc() {
  return R.peekPreSettingsEnvSnapshot();
}
function ne() {
  let e = hme();
  return e.length > 0 && uEo("AWS_BEARER_TOKEN_BEDROCK", "")
    ? [...e, { AWS_BEARER_TOKEN_BEDROCK: "" }]
    : e;
}
function fe(e, o) {
  return e[py(e, o)]?.trim() === "";
}
function s6(e) {
  if (e.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER === void 0) return Se(e);
  let o = { ...e };
  return (delete o.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER, Se(o));
}
function Se(e) {
  {
    let o = Fc(),
      r = ne();
    if (o === void 0 || r.length === 0) return e;
    let a = { ...e },
      _ = jne() ?? {};
    for (let [u, E] of Object.entries(e)) {
      let g = o[py(o, u)];
      if (
        E !== void 0 &&
        E !== g &&
        !(E === "" && fe(_, u)) &&
        r.some((h) => h[py(h, u)] === E)
      )
        if (g === void 0) delete a[u];
        else a[u] = g;
    }
    if (x() === "windows")
      for (let u of r)
        for (let [E, g] of Object.entries(u)) {
          let h = o[py(o, E)];
          if (g === "" && h && !fe(_, E) && !Object.hasOwn(e, py(e, E)))
            a[E] = h;
        }
    for (let u of Object.keys(R.organizationAwsValuesForRequests())) {
      if (_[py(_, u)]?.trim()) continue;
      let E = o[py(o, u)];
      if (E === void 0) delete a[py(a, u)];
      else a[py(a, u)] = E;
    }
    return a;
  }
  return e;
}
function gsn() {
  return R.getLegacyEnvMap();
}
function F3() {
  return R.getAppliedGlobalConfigEnv();
}
fAl(S_, Ct);
rRl(() => R.takeChildEnvFromRepository());
Rfl(Fc);
tRl(() => ye("policySettings")?.env ?? {});
re(jM);
ZAl(() => R.organizationAwsValuesForRequests());
Cfl(
  (e) => R.routeAfterVerdict(e),
  (e) => R.launchNamed(e),
);
Vfl({
  env: () => R.getHostLaunchEnv(),
  credential: () => R.getLaunchCredential(),
  road: () => R.getLaunchCredentialRoad(),
});
function SHi(e, o) {
  return R.dropPreSettingsEnvSnapshot(e, o);
}
function v(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function Xmo(e, o, r) {
  if (e === void 0) return Object.freeze({ ...process.env });
  let a = new Set(o.map(v)),
    _ = new Map(Object.entries(e).map(([E, g]) => [v(E), g])),
    u = {};
  for (let E of Object.keys(process.env))
    if (a.has(v(E))) u[E] = r?.[E] ?? process.env[E];
    else if (_.has(v(E))) u[E] = _.get(v(E));
  return Object.freeze(u);
}
function wNn(e, o) {
  let r = Object.keys(process.env).filter(
    (a) => o(a) && process.env[a] !== e[a],
  );
  for (let a of r)
    if (e[a] === void 0) delete process.env[a];
    else process.env[a] = e[a];
  return r.length > 0;
}
function qie(e, o = "policySettings", { comparesNoValue: r = !1 } = {}) {
  return R.filterPolicyPredicateEnv(e, o, {
    forPolicyMatch: !1,
    comparesNoValue: r,
  });
}
function kNn(e, o = "policySettings") {
  return R.filterPolicyPredicateEnv(e, o, { forPolicyMatch: !0 });
}
function byr(e, o) {
  return R.withoutInvalidSettingsEnv(e, o);
}
function wyr(e, o) {
  let r = e;
  {
    let a = o === "policySettings" ? ne() : [];
    if (e !== void 0 && a.length > 0) {
      let _ = jne() ?? {};
      r = {};
      for (let [u, E] of Object.entries(e)) {
        let g = _[py(_, u)],
          h = a.some((S) => S[py(S, u)] === E)
            ? g?.trim() || (E === "" ? g : void 0)
            : E;
        if (h !== void 0) r[u] = h;
      }
    }
  }
  return K(byr(r, o));
}
var gt = ["userSettings", "flagSettings", "policySettings"],
  Z = ["TRACES", "METRICS", "LOGS", "PROFILES"],
  P = J2n,
  De = new Set(["HEADERS", "CLIENT_KEY", "CLIENT_CERTIFICATE"]),
  he = new Set(["OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]),
  Ae = "CLAUDE_CODE_ENABLE_TELEMETRY",
  Re = "BETA_TRACING_ENDPOINT";
var yo = new Set([`${J2n}ENDPOINT`, `${J2n}HEADERS`, `${J2n}PROTOCOL`]);
function Q(e) {
  return e;
}
function ft(e) {
  return !e
    .split(",")
    .map((o) => o.trim())
    .includes("otlp");
}
function k(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function b(e, o) {
  let r = {};
  for (let [a, _] of Object.entries(e ?? {}))
    if (o.includes(a.toUpperCase()) && _ !== void 0) r[a] = String(_);
  return r;
}
function Te(e, o) {
  return Ks(e, (r, a) => o.includes(a.toUpperCase()));
}
class Fe {
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
      (this.launchCredential = Jp() ? Yfl(r) : null),
      (this.launchCredentialRoad = Jp()
        ? qfl(r, this.launchCredential)
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
      ...ye("flagSettings")?.env,
      ...ye("policySettings")?.env,
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
    return this.legacyEnvMapAtLaunch ?? me().env;
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
    if (!Jp()) return !1;
    let _ = Xmo(r, a, o);
    this.claimLaunchEnv = _;
    let u = r !== void 0 && wNn(_, vxr);
    return (this.getPreSettingsEnvSnapshot(), u);
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
    let u = ce(
      ue(
        pe(
          K(
            le(
              _e(
                G(
                  Ce(
                    pt(this.asFromAFolderNobodyTrusted(e, o, a !== void 0), o),
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
        u,
        this.settingsEnvForChildren,
        this.settingsEnvForChildrenFromRepository,
        mZ(o),
      );
    let E = {},
      g = q(u, E);
    for (let [h, S] of Object.entries(E))
      if (_ || ee(h.toUpperCase())) g[h] = S;
    return g;
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
      Object.entries(b(this.launchEnvUnlatched(), e)).map(([r, a]) => [
        k(r),
        a,
      ]),
    );
    return (r) => o.get(k(r));
  }
  routeAfterVerdict(e, o = !1) {
    let r = this.providerStripContext === V ? B() : this.providerStripContext,
      a = [
        b(this.launchEnvUnlatched(), e),
        this.keptSettingsEnv(
          b(this.getLegacyEnvMap(), e),
          "globalConfig",
          r,
          void 0,
        ),
        ...Wo()
          .filter((u) => u !== "policySettings" && (o || !mZ(u)))
          .map((u) => this.keptSettingsEnv(b(ye(u)?.env, e), u, r, void 0)),
        this.strippedSettingsEnv(b(jne(), e), "policySettings", r, void 0),
      ],
      _ = new Map(
        a.flatMap((u) => Object.entries(u).map(([E, g]) => [k(E), g])),
      );
    return (u) => _.get(k(u));
  }
  setToolServerLaunchEnv(e) {
    this.toolServerLaunchEnv = e;
  }
  assignFromAboveTheRepository(e) {
    Object.assign(process.env, e);
    for (let o of Object.keys(e)) sqi(o);
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
      mzi(this.settingsEnvForChildren));
    {
      let o = new Map();
      for (let _ of ne())
        for (let [u, E] of Object.entries(_)) if (uEo(u, E)) o.set(u, E);
      let r = {};
      if (o.size > 0) {
        let _ = this.routeAfterVerdict([...o.keys()], e);
        for (let [u, E] of o) {
          let g = _(u);
          if (g !== E) r[u] = { held: E, own: g };
        }
      }
      let a = this.withholdsEnvFrom("policySettings")
        ? {}
        : (ye("policySettings")?.env ?? {});
      for (let _ of fTs) {
        let u = this.publishedOrganizationAwsValues[_];
        if (
          u !== void 0 &&
          this.organizationAwsValues[_] === void 0 &&
          !a[py(a, _)]?.trim() &&
          hme().some((E) => E[py(E, _)] === u)
        )
          this.organizationAwsValues[_] = u;
      }
      ((this.publishedOrganizationAwsValues = this.organizationAwsValues),
        hzi(r));
    }
  }
  takenFromToolServerLaunchEnv() {
    let e = {};
    for (let [o, r] of Object.entries(
      K(G(this.toolServerLaunchEnv, "globalConfig", this.invalidEnvKeyWarned)),
    ))
      if (!tit(o, r)) e[o] = r;
    return this.filterSettingsEnv(
      q(e, this.settingsEnvForChildren),
      "globalConfig",
    );
  }
  filterSettingsEnv(e, o, r = {}) {
    let a = this.keptSettingsEnv(e, o, this.providerStripContext, r),
      _ = o === "policySettings" ? this.withoutOrganizationAwsValues(a) : a;
    for (let [E, g] of Object.entries(_))
      if (
        (this.recordOfferedEnvValue(E, g),
        v(E) === "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE")
      )
        this.autoCompactSources.add(o);
    let u = Yn(_, (E, g) => q6i(g, E));
    if (o === "globalConfig" || o === "userSettings")
      for (let E of Object.keys(u)) this.userTierNames.add(E.toUpperCase());
    return u;
  }
  withoutOrganizationAwsValues(e) {
    let o = hme();
    if (o.length === 0) return e;
    let r = jne() ?? {},
      a = { ...e };
    for (let _ of fTs) {
      let u = py(a, _),
        E = a[u],
        g = r[py(r, _)];
      if (E && E !== g && o.some((h) => h[py(h, _)] === E))
        if (((this.organizationAwsValues[_] = E), g?.trim())) a[u] = g;
        else delete a[u];
    }
    return a;
  }
  organizationAwsValuesForRequests() {
    return this.publishedOrganizationAwsValues;
  }
  withoutInvalidSettingsEnv(e, o) {
    return G(e, o, this.invalidEnvKeyWarned);
  }
  putBackUnsuppliedTelemetryEnv() {
    let e = this.preSettingsEnvSnapshot;
    if (e === void 0 || this.appliedGlobalConfigEnv === void 0) return !1;
    let o = !1,
      r = Object.keys(process.env).filter((a) => {
        let _ = a.toUpperCase(),
          u = process.env[a];
        return (
          u !== void 0 &&
          u !== e[a] &&
          (xAo.some((E) => _.startsWith(E)) || wxr.includes(_) || Me.has(_)) &&
          this.settingsOfferedEnvValues.get(_)?.has(u.trim()) === !0 &&
          this.personsWrittenEnvValues.get(v(a)) !== u.trim()
        );
      });
    if (r.length > 0) {
      let a = new Map();
      for (let u of [
        this.toolServerLaunchEnv,
        this.appliedGlobalConfigEnv ?? {},
        ...Wo().map((E) =>
          this.keptSettingsEnv(
            ye(E)?.env,
            E,
            this.providerStripContext,
            void 0,
          ),
        ),
      ])
        for (let [E, g] of Object.entries(u)) a.set(v(E), g.trim());
      let _ = r.filter((u) => a.get(v(u)) !== process.env[u]?.trim());
      if (((o = wNn(e, (u) => _.includes(u))), o))
        t(
          `Telemetry environment variables put back to their startup values, or removed, because no settings source still sets their current value: ${_.map(hWe).join(", ")}`,
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
          v("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"),
        ) === r)
    )
      return;
    if (
      [
        this.toolServerLaunchEnv,
        this.appliedGlobalConfigEnv,
        ...Wo().map((_) =>
          this.keptSettingsEnv(
            ye(_)?.env,
            _,
            this.providerStripContext,
            void 0,
          ),
        ),
      ]
        .flatMap((_) => Object.entries(_))
        .findLast(([_]) => v(_) === v("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"))?.[1]
        .trim() === r
    )
      return;
    if (
      Wo().some(
        (_) =>
          this.autoCompactSources.has(_) &&
          (_ === "policySettings" ? nw() : pT(_)).some(XL),
      )
    ) {
      this.autoCompactPutBackOwed = !0;
      return;
    }
    if (
      wNn(
        this.withoutUserTierNamesInSnapshot(e),
        (_) => v(_) === v("CLAUDE_AUTOCOMPACT_PCT_OVERRIDE"),
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
      this.personsWrittenEnvValues.get(v(e)) === r
    );
  }
  recordPersonsEnvValue(e, o) {
    if (o === void 0) this.personsWrittenEnvValues.delete(v(e));
    else this.personsWrittenEnvValues.set(v(e), o.trim());
  }
  recordOfferedEnvValue(e, o) {
    let r = e.toUpperCase(),
      a = o.trim(),
      _ = this.settingsOfferedEnvValues.get(r);
    if (_) _.add(a);
    else this.settingsOfferedEnvValues.set(r, new Set([a]));
  }
  personsSettingsEnvKeeps(e, o, r) {
    let a = this.providerStripContext === V ? B() : this.providerStripContext,
      _ = Wo(),
      u = _.slice(_.indexOf("userSettings") + 1),
      E = (g, h) => Object.keys(this.keptSettingsEnv(g, h, a, void 0, r));
    return (
      _.includes("userSettings") &&
      E({ [e]: o }, "userSettings").includes(e) &&
      !u.some((g) => E(ye(g)?.env, g).some((h) => v(h) === v(e))) &&
      !this.otelDominates(e) &&
      !(o === "" && v(e) === v(qx) && this.processWrapperKeyAbove() !== void 0)
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
    let _ = ue(
        pe(
          K(
            le(
              _e(
                G(
                  Ce(r ? e : this.asFromAFolderNobodyTrusted(e, o, !1), o),
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
      u = {};
    for (let [E, g] of Object.entries(ce(_, o, void 0))) {
      let h = E.toUpperCase();
      if (ee(h)) continue;
      if (!r && Ymo(E, g)) continue;
      u[E] = g;
    }
    return u;
  }
  withholdsEnvFrom(e, o = this.providerStripContext) {
    return o.storedLoginPinned && uvs(e);
  }
  asFromAFolderNobodyTrusted(e, o, r) {
    if (e === void 0 || !Hat(o)) return e;
    let a = BCl(o),
      _ = {},
      u = [];
    for (let [E, g] of Object.entries(e)) {
      let h = E.toUpperCase();
      if (typeof g === "string" && (Cxr(E, g) || (!a && be(h, g)))) _[E] = g;
      else if (r && a) this.servedFolderEnvWithheld = !0;
      else if (r && !this.untrustedFolderDropWarned.has(`${o}:${E}`))
        (this.untrustedFolderDropWarned.add(`${o}:${E}`), u.push(l$t(E)));
    }
    if (u.length > 0)
      t(
        `Ignoring ${u.join(", ")} in the env block of ${o === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"}: ${tRe}, and this session cannot show a trust dialog, so this folder's settings files may set only a short list of variables, each to certain values only, such as DISABLE_TELEMETRY=1. The repository's author chose the ignored values, not you. If your setup needs an ignored variable, set it yourself in user or managed settings, or in the environment that Claude Code is started with. On a self-hosted runner, user settings are settings.json in the runner host's config directory (SELF_HOSTED_RUNNER_HOST_CONFIG_DIR): restart the runner afterwards.`,
        { level: "warn" },
      );
    return _;
  }
  processWrapperKeyFrom(e) {
    return this.withholdsEnvFrom(e) || fc() || (e === "userSettings" && NS())
      ? void 0
      : ye(e)?.processWrapper;
  }
  dropDominatedOtelKey(e, o, r, a, _ = "managed settings") {
    let u = this.otelDominatedAsked;
    if (u !== void 0) {
      if (
        !(a.has(e) && a.get(e) === process.env[e]) &&
        !this.hostSpawnEnvKeys?.has(e.toUpperCase())
      )
        u.add(e.toUpperCase());
      return;
    }
    if (a.get(e) === process.env[e]) return;
    if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) return;
    if (process.env[e] === void 0) return;
    if (!this.otelDominanceDropWarned.has(e))
      (this.otelDominanceDropWarned.add(e),
        t(
          `Dropping ${hWe(e)}: ${hWe(r)} is claimed by ${_}, so lower-trust scopes cannot redirect ${o}`,
          { level: "warn" },
        ));
    delete process.env[e];
  }
  dropDominatedAntAlias(e, o, r, a = "managed settings") {
    return;
  }
  dropDominatedBetaTracingEndpoint(e, o, r = "managed settings") {
    this.dropDominatedOtelKey(
      Re,
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
        ((_.startsWith(P) && _.endsWith("_ENDPOINT")) || _ === Re) &&
        (process.env[a] ?? "").trim() !== ""
      );
    });
    for (let a of o) {
      let _ = Q(a),
        u = he.has(_) || _ === Ae,
        E = r && _.startsWith(P);
      if (!u && !E) continue;
      let g = process.env[a];
      if (g !== void 0) e.set(a, g);
    }
    return e;
  }
  enforceManagedOtelFamilyDominance() {
    let e = ye("policySettings"),
      o = e?.env,
      r = (e?.otelHeadersHelper ?? "").trim() !== "",
      a = new Map();
    for (let [_, u] of Object.entries(o ?? {})) {
      let E = _.toUpperCase();
      if (!a.has(E) || _ === E) a.set(E, u);
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
          `${P}${_}_ENDPOINT`,
          `the ${_.toLowerCase()} signal`,
          "otelHeadersHelper",
          a,
        );
      (this.dropDominatedOtelKey(
        `${P}ENDPOINT`,
        "telemetry for any signal",
        "otelHeadersHelper",
        a,
      ),
        this.dropDominatedAntAlias(`${P}ENDPOINT`, "otelHeadersHelper", a),
        this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", a));
    }
    this.applyOtelFamilyClaims(a, a, "managed settings");
  }
  applyOtelFamilyClaims(e, o, r) {
    for (let [a, _] of e) {
      let u = Q(a);
      if (u === Ae) {
        if (this.otelClaimInForce(a, _) && !Oe(_))
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      if (he.has(u)) {
        if (this.otelClaimInForce(a, _) && ft(_))
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      if (!u.startsWith(P)) continue;
      if (_.trim() === "") continue;
      if (!this.otelClaimInForce(a, _)) continue;
      let E = Z.find((L) => u.startsWith(`${P}${L}_`));
      if (E) {
        let L = u.slice(`${P}${E}_`.length),
          m = E === "TRACES" || E === "LOGS";
        if (De.has(L)) {
          if (
            (this.dropDominatedOtelKey(
              `${P}${E}_ENDPOINT`,
              `the ${E.toLowerCase()} signal`,
              a,
              o,
              r,
            ),
            m)
          )
            this.dropDominatedBetaTracingEndpoint(a, o, r);
        } else if (L === "ENDPOINT" && m)
          this.dropDominatedBetaTracingEndpoint(a, o, r);
        continue;
      }
      let g = u.slice(P.length),
        h = De.has(g),
        S = h ? [g, "ENDPOINT"] : [g];
      for (let L of S)
        for (let m of Z)
          this.dropDominatedOtelKey(
            `${P}${m}_${L}`,
            `the ${m.toLowerCase()} signal`,
            a,
            o,
            r,
          );
      if (h)
        (this.dropDominatedOtelKey(
          `${P}ENDPOINT`,
          "telemetry for any signal",
          a,
          o,
          r,
        ),
          this.dropDominatedAntAlias(`${P}ENDPOINT`, a, o, r));
      if (S.includes("ENDPOINT"))
        this.dropDominatedBetaTracingEndpoint(a, o, r);
      this.dropDominatedAntAlias(u, a, o, r);
    }
  }
  resetSettingsIfUserSettingsFileMoved(e) {
    if (gn("userSettings") !== e) gr();
  }
  applySafeConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(), (this.providerStripContext = B()));
    let e = gn("userSettings"),
      o = s.NODE_EXTRA_CA_CERTS,
      r = s.CLAUDE_CODE_CERT_STORE,
      a = s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      _ = s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      u = s.NODE_OPTIONS,
      E = fcn();
    if (this.hostSpawnEnvKeys === void 0) {
      if (
        ((this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated
          ? new Set(Object.keys(process.env).map((T) => T.toUpperCase()))
          : null),
        this.hostSpawnEnvKeys && q6("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"))
      )
        this.hostSpawnEnvKeys.add("CLAUDE_CODE_OAUTH_TOKEN");
      if (Vks()) this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
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
    for (let T of gt) {
      if (T === "policySettings") continue;
      if (!en(T)) continue;
      this.assignFromAboveTheRepository(this.filterSettingsEnv(ye(T)?.env, T));
    }
    (um(),
      (this.providerStripContext = {
        ...this.providerStripContext,
        hybridOrganization: Le(),
      }));
    let g = ye("policySettings"),
      h = g !== null && kcn();
    if (h) {
      let T = b(g.env, mfn);
      this.policyTransportEnv =
        vb() !== null && !ku() && w2t().composes !== "tier"
          ? {
              ...Te(
                this.policyTransportEnv,
                Object.keys(T).map((N) => N.toUpperCase()),
              ),
              ...T,
            }
          : T;
    }
    let L = {
      ...(g !== null && !h && (this.policyTransportEnv !== void 0 || $Re())
        ? Te(g?.env, mfn)
        : g?.env),
      ...this.policyTransportEnv,
    };
    this.assignFromAboveTheRepository(
      this.filterSettingsEnv(L, "policySettings"),
    );
    let m = new Map(),
      y = Wo();
    for (let T of ws) {
      let N = y.includes(T);
      if (!N && !this.optOutOnlySources.includes(T)) continue;
      let j = this.filterSettingsEnv(
        T === "policySettings" ? L : N ? ye(T)?.env : pl(T)?.env,
        T,
      );
      for (let [w, oe] of Object.entries(j))
        if (N || Ot(w, oe))
          m.set(w.toUpperCase(), { key: w, value: oe, source: T });
    }
    for (let T of Object.keys(this.organizationAwsValues))
      m.delete(T.toUpperCase());
    for (let { key: T, value: N, source: j } of m.values()) {
      if (!_xe(T, N)) continue;
      if (mZ(j)) {
        let w = oqi(T);
        ((process.env[T] = N), w());
      } else ((process.env[T] = N), sqi(T));
    }
    this.publishChildEnv(!1);
    let F = process.env[qx];
    if (!F || F === this.materializedProcessWrapper) {
      let T = en("userSettings")
          ? this.processWrapperKeyFrom("userSettings")
          : void 0,
        N = this.processWrapperKeyAbove() ?? (T === "" ? void 0 : T);
      if (N !== void 0)
        ((process.env[qx] = N), (this.materializedProcessWrapper = N));
    }
    (this.enforceManagedOtelFamilyDominance(),
      this.resetSettingsIfUserSettingsFileMoved(e));
    let M =
      s.NODE_EXTRA_CA_CERTS !== o ||
      s.CLAUDE_CODE_CERT_STORE !== r ||
      s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== a ||
      s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== _ ||
      s.NODE_OPTIONS !== u;
    if (M) MWn();
    if ((M || fcn() !== E) && _vt()) ew();
  }
  applyConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(),
      um(),
      (this.providerStripContext = B()),
      (this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      (this.organizationAwsValues = {}));
    let e = s.NODE_EXTRA_CA_CERTS,
      o = s.CLAUDE_CODE_CERT_STORE,
      r = s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      a = s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      _ = s.NODE_OPTIONS,
      u = s.CLAUDE_CODE_CLIENT_CERT,
      E = s.CLAUDE_CODE_CLIENT_KEY;
    ((this.legacyEnvMapAtLaunch ??= { ...me().env }),
      Object.assign(process.env, this.takenFromToolServerLaunchEnv()),
      (this.appliedGlobalConfigEnv = this.filterSettingsEnv(
        this.getLegacyEnvMap(),
        "globalConfig",
      )),
      this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv),
      (this.fullPassDroppedGitKey = !1),
      (this.fullPassDroppedFlagSwitch = !1),
      (this.policyTransportEnv = void 0));
    for (let m of Wo()) {
      let y = this.filterSettingsEnv(ye(m)?.env, m, {
        onGitKeyDropped: () => {
          this.fullPassDroppedGitKey = !0;
        },
        onFlagSwitchDropped: () => {
          this.fullPassDroppedFlagSwitch = !0;
        },
      });
      if (mZ(m)) {
        let F = Object.keys(y).map((M) => oqi(M));
        Object.assign(process.env, y);
        for (let M of F) M();
      } else this.assignFromAboveTheRepository(y);
    }
    (this.publishChildEnv(!0), this.enforceManagedOtelFamilyDominance());
    let g =
      s.NODE_EXTRA_CA_CERTS !== e ||
      s.CLAUDE_CODE_CLIENT_CERT !== u ||
      s.CLAUDE_CODE_CLIENT_KEY !== E;
    if (
      s.NODE_EXTRA_CA_CERTS !== e ||
      s.CLAUDE_CODE_CERT_STORE !== o ||
      s.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== r ||
      s.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== a ||
      s.NODE_OPTIONS !== _
    )
      MWn();
    let { certPath: h, keyPath: S } = N6i(),
      L =
        (s.CLAUDE_CODE_CLIENT_CERT !== h || s.CLAUDE_CODE_CLIENT_KEY !== S) &&
        (h !== void 0 || S !== void 0);
    if (!L) FEs();
    (ew(),
      Promise.all([Wbe(), Wne()])
        .then(([m, y]) => {
          if (L && y.readFailed) FEs();
          if (g || L || m || y.changed) ew();
        })
        .catch(i));
  }
}
var R = new Fe(),
  Mo = T$({ clear: () => R.reset() });
function U3() {
  z(gsn, gyr);
  try {
    R.applySafeConfigEnvironmentVariables();
  } finally {
    (lCr(), Eyr());
  }
  (X(), y6());
}
var St = new Set([...sA, "DISABLE_AUTOUPDATER", "DISABLE_UPDATES"]);
function Ot(e, o) {
  return Cxr(e, o) || (St.has(e.toUpperCase()) && Oe(o));
}
function bHi(e) {
  R.optOutOnlySources = e;
}
function gF() {
  z(gsn, gyr);
  try {
    R.applyConfigEnvironmentVariables();
  } finally {
    (lCr(), Eyr());
  }
  (X(), y6());
}
function wHi() {
  return R.lastFullPassDroppedRepositoryFlagSwitch();
}
function kHi() {
  return R.servedFolderEnvWasWithheld();
}
export {
  bNn,
  Vmo,
  hWe,
  l$t,
  bfl,
  bps,
  wfl,
  jCe,
  Kmo,
  myr,
  dHi,
  wps,
  kps,
  hyr,
  qmo,
  cHi,
  uHi,
  Eps,
  gyr,
  _yr,
  vps,
  Ymo,
  fHi,
  pHi,
  S_,
  yyr,
  jM,
  Syr,
  mHi,
  hHi,
  gHi,
  _Hi,
  yHi,
  Fc,
  s6,
  gsn,
  F3,
  SHi,
  Xmo,
  wNn,
  qie,
  kNn,
  byr,
  wyr,
  U3,
  bHi,
  gF,
  wHi,
  kHi,
};
