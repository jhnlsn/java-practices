// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Oe, Os } from "/$bunfs/root/chunk-cqahc80t.js";
import { NTt, Y2n } from "/$bunfs/root/chunk-qbra5kd9.js";
import { ix } from "/$bunfs/root/chunk-d51503hw.js";
import { UTt, yxe, GLe, Hle, $2e } from "/$bunfs/root/chunk-9gzkzjvt.js";
import { cR } from "/$bunfs/root/chunk-rw48vt4g.js";
import { b7 } from "/$bunfs/root/chunk-52dn4cyt.js";
import { M } from "/$bunfs/root/chunk-b8e2yqms.js";
function u(_) {
  return function (E, O, A) {
    var T = -1,
      R = Object(E),
      D = A(E),
      C = D.length;
    while (C--) {
      var L = D[_ ? C : ++T];
      if (O(R[L], L, R) === !1) break;
    }
    return E;
  };
}
var P = u;
var f = P(),
  RAs = f;
function K(_, E) {
  return _ && RAs(_, E, yxe);
}
var cfn = K;
function g(_, E, O, A) {
  if (!cR(_)) return _;
  E = GLe(E, _);
  var T = -1,
    R = E.length,
    D = R - 1,
    C = _;
  while (C != null && ++T < R) {
    var L = Hle(E[T]),
      e = O;
    if (L === "__proto__" || L === "constructor" || L === "prototype") return _;
    if (T != D) {
      var I = C[L];
      if (((e = A ? A(I, L, C) : void 0), e === void 0))
        e = cR(I) ? I : UTt(E[T + 1]) ? [] : {};
    }
    (NTt(C, L, e), (C = C[L]));
  }
  return _;
}
var CAs = g;
function x(_, E, O) {
  var A = -1,
    T = E.length,
    R = {};
  while (++A < T) {
    var D = E[A],
      C = $2e(_, D);
    if (O(C, D)) CAs(R, GLe(D, _), C);
  }
  return R;
}
var AAs = x;
function X(_, E) {
  if (_ == null) return {};
  var O = b7(Y2n(_), function (A) {
    return [A];
  });
  return (
    (E = ix(E)),
    AAs(_, O, function (A, T) {
      return E(A, T[0]);
    })
  );
}
var Pr = X;
var CAo = [
    "SSL_CERT_FILE",
    "NODE_EXTRA_CA_CERTS",
    "REQUESTS_CA_BUNDLE",
    "CURL_CA_BUNDLE",
    "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE",
    "HTTPLIB2_CA_CERTS",
  ],
  AAo = [
    "AWS_CA_BUNDLE",
    "DENO_CERT",
    "CARGO_HTTP_CAINFO",
    "PIP_CERT",
    "GIT_SSL_CAINFO",
    "GRPC_DEFAULT_SSL_ROOTS_FILE_PATH",
    "NIX_SSL_CERT_FILE",
    "HEX_CACERTS_PATH",
  ],
  mxe = [...CAo, ...AAo],
  L2e = { UV_NATIVE_TLS: "true", DENO_TLS_CA_STORE: "system,mozilla" };
var Un = Object.freeze([
    "-c",
    "core.hooksPath=/dev/null",
    "-c",
    "core.fsmonitor=",
  ]),
  Vw = "--ignore-submodules=dirty",
  O9i = "--no-optional-locks",
  xme = Object.freeze([
    "--no-optional-locks",
    "status",
    "--porcelain",
    "--untracked-files=normal",
    "--ignore-submodules=dirty",
  ]),
  qlt = Object.freeze({ GIT_LFS_SKIP_SMUDGE: "1" }),
  f7e = "/",
  s = [
    "'alias.remote-none=version'",
    "'alias.remote-none.command=version'",
    "'alias.remote-/.command=version'",
    "'fetch.bundleURI='",
    "'help.autocorrect=0'",
  ],
  i = s.join(" "),
  Y = Object.freeze({
    GIT_ALLOW_PROTOCOL: "/",
    GIT_CONFIG_PARAMETERS: i,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...qlt,
  }),
  m = Object.freeze({ LC_ALL: "C", LANGUAGE: "C" }),
  W = Object.freeze({ GIT_SSH_COMMAND: "false" }),
  p7e = 2000,
  V5 = Object.freeze([
    ...Un,
    "-c",
    "safe.bareRepository=explicit",
    "-c",
    "protocol.file.allow=never",
  ]),
  ufn = [
    "GIT_DIR",
    "GIT_WORK_TREE",
    "GIT_COMMON_DIR",
    "GIT_INDEX_FILE",
    "GIT_CEILING_DIRECTORIES",
    "GIT_DISCOVERY_ACROSS_FILESYSTEM",
    "GIT_OBJECT_DIRECTORY",
    "GIT_ALTERNATE_OBJECT_DIRECTORIES",
    "GIT_SHALLOW_FILE",
    "GIT_NAMESPACE",
    "GIT_IMPLICIT_WORK_TREE",
    "GIT_REFERENCE_BACKEND",
  ],
  hxe = [
    ...ufn,
    "GIT_CONFIG_COUNT",
    "GIT_CONFIG_PARAMETERS",
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "GIT_CONFIG",
  ],
  h = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  Ylt = new RegExp(h.source, "i"),
  xAs = /^GIT_(?:SSL|PROXY)_/i,
  y = new Set(hxe);
function li(_, E = {}) {
  let O = _?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return c(a({ ...Y, ...(E.userLocale !== !0 && m), ...(!O && W) }, _, E));
}
function ffn(_, E = {}) {
  let O = a({ GIT_NO_REPLACE_OBJECTS: "1" }, _, E);
  for (let A of b) if (!(A in O)) O[A] = void 0;
  return E.keepUserPath === !0 ? O : c(O);
}
var b = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH"];
function a(_, E, { base: O = process.env, repository: A }) {
  let T = w({
      ..._,
      ...(A !== void 0 && { GIT_DIR: A.gitDir, GIT_COMMON_DIR: A.commonDir }),
      ...(A !== void 0 &&
        (A.workTree !== null
          ? { GIT_WORK_TREE: A.workTree }
          : { GIT_IMPLICIT_WORK_TREE: "0" })),
      ...E,
    }),
    R = {};
  for (let C of hxe) R[C] = void 0;
  let D = new Set(Object.keys(T).map((C) => C.toUpperCase()));
  for (let C of Object.keys(O)) {
    let L = C.toUpperCase();
    if (y.has(L) || Ylt.test(C) || (D.has(L) && !(C in T))) R[C] = void 0;
  }
  return { ...O, ...R, ...T };
}
function w(_) {
  let E = _.GIT_ALLOW_PROTOCOL;
  if (E === void 0) return { ..._ };
  let O = E.split(":").filter((C) => C !== "/");
  if (O.find((C) => !/^[A-Za-z0-9-]*$/.test(C)) !== void 0)
    throw Error(
      'GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"',
    );
  let T = [
      ...new Set([
        ...s,
        ...O.flatMap((C) => [
          `'alias.remote-${C}=version'`,
          `'alias.remote-${C}.command=version'`,
        ]),
      ]),
    ],
    R = _.GIT_CONFIG_PARAMETERS;
  return {
    ..._,
    GIT_CONFIG_PARAMETERS: [
      ...(R === void 0 || R === "" || R === i ? [] : [R]),
      ...T,
    ].join(" "),
  };
}
function c(_) {
  let A = (C) => C,
    T = (C) => C.startsWith("/"),
    R = (C) => {
      if (C === void 0) return;
      let L = C.split(":")
        .map(A)
        .filter((e) => e !== "" && T(e));
      return L.length > 0 ? L.join(":") : "/dev/null";
    },
    D = Object.keys(_).filter((C) => C === "PATH");
  return { ..._, ...Object.fromEntries(D.map((C) => [C, R(_[C])])) };
}
function ZPl(_, { maxLength: E }) {
  let O = G(_);
  if (O !== -1) return { kind: "line_break", index: S(_, O) };
  for (let T = 0; T < _.length; T++) {
    let R = _.charCodeAt(T);
    if (R === 0) return { kind: "nul", index: S(_, T) };
    if (R === 32 || R === 9) return { kind: "whitespace", index: S(_, T) };
    if (R < 32 || R === 127)
      return { kind: "control_character", index: S(_, T), codePoint: R };
    if (R > 126)
      return { kind: "non_ascii", index: S(_, T), codePoint: d(_, T) };
  }
  let A = p(_);
  if (A > E) return { kind: "too_long", length: A, maxLength: E };
  return null;
}
function X2n(_) {
  let E = 0,
    O = _.length;
  while (E < O && H(_.charCodeAt(E))) E++;
  while (O > E && H(_.charCodeAt(O - 1))) O--;
  let A = G(_.slice(E, O));
  if (A !== -1) return { kind: "line_break", index: S(_, E + A) };
  for (let T = E; T < O; T++) {
    let R = _.charCodeAt(T);
    if (R === 0) return { kind: "nul", index: S(_, T) };
    if (R > 255)
      return { kind: "non_ascii", index: S(_, T), codePoint: d(_, T) };
  }
  return null;
}
function PAs(_) {
  let E = 1;
  for (let O = 0; O < _.length; O++) {
    let A = _.charCodeAt(O);
    if (A === 10) E++;
    else if (A === 13) {
      if ((E++, _.charCodeAt(O + 1) === 10)) O++;
    }
  }
  return { length: p(_), lineCount: E };
}
function OAs(_, { length: E, lineCount: O }) {
  let A = E === 1 ? "1 character" : `${E} characters`,
    T = O > 1 ? `${A} on ${O} lines` : A;
  switch (_.kind) {
    case "line_break":
      return `it contains a line break at character ${_.index + 1} (${T})`;
    case "nul":
      return `it contains a NUL byte at character ${_.index + 1} (${T})`;
    case "control_character":
      return `it contains a control character at character ${_.index + 1} (${T})`;
    case "whitespace":
      return `it contains whitespace at character ${_.index + 1} (${T})`;
    case "non_ascii":
      return `it contains ${k(_.codePoint) ?? "a non-ASCII character"} at character ${_.index + 1} (${T})`;
    case "too_long":
      return `it is ${_.length} characters long (limit ${_.maxLength})`;
  }
}
function k(_) {
  switch (_) {
    case 65279:
      return "a byte-order mark (U+FEFF)";
    case 8203:
    case 8204:
    case 8205:
    case 8288:
      return `a zero-width character (${n(_)})`;
    case 160:
    case 8239:
      return `a no-break space (${n(_)})`;
    case 8216:
    case 8217:
    case 8220:
    case 8221:
      return `a typographic quote (${n(_)})`;
    case 8211:
    case 8212:
      return `a typographic dash (${n(_)})`;
    case 8230:
      return "an ellipsis character (U+2026)";
    case 8232:
    case 8233:
      return `a line or paragraph separator (${n(_)})`;
    case 65533:
      return "a replacement character (U+FFFD)";
    default:
      return _ >= 55296 && _ <= 57343 ? "an unpaired UTF-16 surrogate" : null;
  }
}
function n(_) {
  return `U+${_.toString(16).toUpperCase().padStart(4, "0")}`;
}
function G(_) {
  let E = _.indexOf(`
`),
    O = _.indexOf("\r");
  if (E === -1) return O;
  return O === -1 ? E : Math.min(E, O);
}
function H(_) {
  return _ === 9 || _ === 32 || _ === 10 || _ === 13;
}
function d(_, E) {
  return _.codePointAt(E) ?? _.charCodeAt(E);
}
function S(_, E) {
  let O = 0;
  for (let A = 0; A < E; A++) {
    let T = _.charCodeAt(A);
    if (
      T >= 55296 &&
      T <= 56319 &&
      A + 1 < _.length &&
      (_.charCodeAt(A + 1) & 64512) === 56320
    )
      A++;
    O++;
  }
  return O;
}
function p(_) {
  return S(_, _.length);
}
var Bg = "Code Mode",
  Mv = "Code Mode (experimental)",
  lN = "CLAUDE_CODE_EXPERIMENTAL_CODE_MODE",
  eOl = "CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART",
  tOl = "CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTARTED_FROM";
var Mle = ["NODE_TLS_REJECT_UNAUTHORIZED", "BUN_TLS_REFUSE_DISTRUSTED_KEYS"];
var RAo = [
  "YARN_HTTP_PROXY",
  "YARN_HTTPS_PROXY",
  "npm_config_proxy",
  "npm_config_https_proxy",
  "npm_config_noproxy",
  "GLOBAL_AGENT_HTTP_PROXY",
  "GLOBAL_AGENT_HTTPS_PROXY",
  "GLOBAL_AGENT_NO_PROXY",
  "DOCKER_HTTP_PROXY",
  "DOCKER_HTTPS_PROXY",
  "ELECTRON_GET_USE_PROXY",
  "CLOUDSDK_PROXY_TYPE",
  "CLOUDSDK_PROXY_ADDRESS",
  "CLOUDSDK_PROXY_PORT",
  "CLOUDSDK_PROXY_USERNAME",
  "CLOUDSDK_PROXY_PASSWORD",
  "FSSPEC_GCS",
  "JAVA_TOOL_OPTIONS",
];
var nOl = /^$|[=\x00-\x1f\x7f-\x9f]/,
  sA = [
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_VERTEX",
    "CLAUDE_CODE_USE_FOUNDRY",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    "CLAUDE_CODE_USE_MANTLE",
    "CLAUDE_CODE_USE_GATEWAY",
    "ANTHROPIC_FOUNDRY_RESOURCE",
    "ANTHROPIC_VERTEX_PROJECT_ID",
    "ANTHROPIC_AWS_WORKSPACE_ID",
    "ANTHROPIC_GOOGLE_CLOUD_PROJECT",
    "ANTHROPIC_GOOGLE_CLOUD_LOCATION",
    "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID",
    "CLOUD_ML_REGION",
  ],
  N = [
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_MANTLE",
  ],
  z = ["AWS_BEARER_TOKEN_BEDROCK", "ANTHROPIC_AWS_API_KEY"],
  J2n = "OTEL_EXPORTER_OTLP_",
  wxr = [
    "OTEL_LOG_RAW_API_BODIES",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_MANAGED_SETTINGS",
    "OTEL_LOGS_EXPORTER",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "ANT_OTEL_LOGS_EXPORTER",
  ],
  xAo = [J2n, `ANT_${J2n}`],
  j = new Set(["projectSettings", "localSettings"]);
function mZ(_) {
  return j.has(_);
}
var kxr = [
    "OTEL_EXPORTER_OTLP_ENDPOINT",
    "OTEL_EXPORTER_OTLP_HEADERS",
    "OTEL_EXPORTER_OTLP_PROTOCOL",
    "OTEL_EXPORTER_OTLP_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_INSECURE",
    "OTEL_EXPORTER_OTLP_TRACES_ENDPOINT",
    "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
    "OTEL_EXPORTER_OTLP_TRACES_PROTOCOL",
    "OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_TRACES_INSECURE",
    "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT",
    "OTEL_EXPORTER_OTLP_METRICS_HEADERS",
    "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_METRICS_INSECURE",
    "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT",
    "OTEL_EXPORTER_OTLP_LOGS_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_LOGS_INSECURE",
    "OTEL_EXPORTER_OTLP_PROFILES_ENDPOINT",
    "OTEL_EXPORTER_OTLP_PROFILES_HEADERS",
    "OTEL_EXPORTER_OTLP_PROFILES_PROTOCOL",
    "OTEL_EXPORTER_OTLP_PROFILES_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_PROFILES_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_PROFILES_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_PROFILES_INSECURE",
    "OTEL_EXPORTER_PROMETHEUS_HOST",
    "OTEL_EXPORTER_PROMETHEUS_PORT",
    "CLAUDE_CODE_ENABLE_TELEMETRY",
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRICS_EXPORTER",
    "OTEL_TRACES_EXPORTER",
    "CLAUDE_CODE_ENHANCED_TELEMETRY_BETA",
    "ENABLE_ENHANCED_TELEMETRY_BETA",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_MANAGED_SETTINGS",
    "OTEL_RESOURCE_INCLUDE_HOST",
  ],
  Z = new Set([
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
  ]),
  v = new Set([
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRICS_EXPORTER",
    "OTEL_TRACES_EXPORTER",
  ]);
function PAo(_, E, O) {
  if (
    _ !== _.toUpperCase() ||
    (typeof E !== "string" && typeof E !== "number" && typeof E !== "boolean")
  )
    return !1;
  if (
    !(Z.has(_)
      ? Os(typeof E === "boolean" ? E : String(E))
      : v.has(_) && String(E).trim() === "none")
  )
    return !1;
  return !Object.keys(O()).some((T) => T.toUpperCase() === _);
}
var rOl = {
    apiKeyHelper: [
      "ANTHROPIC_BASE_URL",
      "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
    ],
    awsAuthRefresh: [
      ...N,
      "ANTHROPIC_BEDROCK_BASE_URL",
      "ANTHROPIC_AWS_BASE_URL",
      "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
    ],
    awsCredentialExport: [
      ...N,
      "ANTHROPIC_BEDROCK_BASE_URL",
      "ANTHROPIC_AWS_BASE_URL",
      "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
    ],
    gcpAuthRefresh: [
      "CLAUDE_CODE_USE_VERTEX",
      "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
      "ANTHROPIC_VERTEX_BASE_URL",
      "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
    ],
  },
  o = ["CLAUDE_CODE_MEMORY_API_BASE_URL", "CLAUDE_CODE_MEMORY_API_TOKEN"];
function BLe(_) {
  return o.includes(_);
}
var IAs = [
    "CLAUDE_CODE_ARTIFACTS_API_BASE_URL",
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_ARTIFACT_ASSET_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_LIVE_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_SYNC_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_VIEWER_BASE_URL",
  ],
  K5 = [
    "ANTHROPIC_BASE_URL",
    "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
    "ANTHROPIC_BEDROCK_BASE_URL",
    "ANTHROPIC_VERTEX_BASE_URL",
    "ANTHROPIC_FOUNDRY_BASE_URL",
    "ANTHROPIC_AWS_BASE_URL",
    "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
    "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
    ...IAs,
    ...o,
  ],
  gxe = [
    {
      endpoint: "ANTHROPIC_BASE_URL",
      companions: [
        "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
        "ANTHROPIC_CUSTOM_HEADERS",
      ],
    },
    {
      endpoint: "ANTHROPIC_BEDROCK_BASE_URL",
      selection: "CLAUDE_CODE_USE_BEDROCK",
      companions: ["CLAUDE_CODE_SKIP_BEDROCK_AUTH", "ANTHROPIC_CUSTOM_HEADERS"],
    },
    {
      endpoint: "ANTHROPIC_VERTEX_BASE_URL",
      selection: "CLAUDE_CODE_USE_VERTEX",
      companions: ["CLAUDE_CODE_SKIP_VERTEX_AUTH", "ANTHROPIC_CUSTOM_HEADERS"],
    },
    {
      endpoint: "ANTHROPIC_FOUNDRY_BASE_URL",
      selection: "CLAUDE_CODE_USE_FOUNDRY",
      companions: ["CLAUDE_CODE_SKIP_FOUNDRY_AUTH", "ANTHROPIC_CUSTOM_HEADERS"],
    },
    {
      endpoint: "ANTHROPIC_AWS_BASE_URL",
      selection: "CLAUDE_CODE_USE_ANTHROPIC_AWS",
      companions: [
        "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
        "ANTHROPIC_CUSTOM_HEADERS",
      ],
    },
    {
      endpoint: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
      selection: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
      companions: [
        "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
        "ANTHROPIC_CUSTOM_HEADERS",
      ],
    },
    {
      endpoint: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
      selection: "CLAUDE_CODE_USE_MANTLE",
      companions: ["CLAUDE_CODE_SKIP_MANTLE_AUTH", "ANTHROPIC_CUSTOM_HEADERS"],
    },
  ],
  m7e = "CLAUDE_BG_GATEWAY_ROUTED",
  FTt = M(gxe.flatMap((_) => [_.endpoint, ..._.companions])),
  nj = [
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "AWS_BEARER_TOKEN_BEDROCK",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_FOUNDRY_AUTH_TOKEN",
    "ANTHROPIC_AWS_API_KEY",
  ],
  oOl = [
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "ANTHROPIC_FEDERATION_RULE_ID",
    "ANTHROPIC_PROFILE",
  ],
  hZ = [...nj, "ANTHROPIC_CUSTOM_HEADERS"],
  OAo = [
    "CLAUDE_CODE_OAUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_REFRESH_TOKEN",
    "CLAUDE_CODE_OAUTH_SCOPES",
    "CLAUDE_CODE_OAUTH_CLIENT_ID",
  ],
  Pme = [
    "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH",
    "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
    "CLAUDE_CODE_SKIP_MANTLE_AUTH",
  ],
  lzt = [
    "ANTHROPIC_MODEL",
    "ANTHROPIC_DEFAULT_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_OPUS_MODEL",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_SONNET_MODEL",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_SMALL_FAST_MODEL",
    "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
    "CLAUDE_CODE_SUBAGENT_MODEL",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT",
  ],
  Exr = [
    "ANTHROPIC_CUSTOM_MODEL_OPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
  ],
  Ome = [
    "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    "CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR",
    "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    "CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR",
  ],
  I9i = [
    ...IAs,
    ...o,
    "CLAUDE_CODE_API_BASE_URL",
    "CLAUDE_BRIDGE_BASE_URL",
    "CLAUDE_BRIDGE_SESSION_INGRESS_URL",
    "CLAUDE_REMOTE_TOOLS_BRIDGE_URL",
    "CLAUDE_CODE_GB_BASE_URL",
    "VOICE_STREAM_BASE_URL",
  ],
  N2e = [
    "CLAUDE_CODE_OAUTH_TOKEN",
    "CLAUDE_CODE_SESSIONS_OAUTH_TOKEN",
    ...Ome,
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_SLACK_TAG_TOKEN",
    "CLAUDE_CODE_HFI_BEARER_TOKEN",
    "CLAUDE_BRIDGE_OAUTH_TOKEN",
    "CLAUDE_TRUSTED_DEVICE_TOKEN",
    "AGENT_PROXY_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN",
    "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
    "CLAUDE_BG_SOCKET_TOKENS_PATH",
    "CLAUDE_BG_RV_AUTH",
    "CLAUDE_BG_PTY_AUTH",
    "CLAUDE_BG_CLAIM_AUTH",
  ];
function r(_, E) {
  return Object.entries(_).some(
    ([O, A]) => Boolean(A) && O.toUpperCase() === E,
  );
}
function M9i(_, E) {
  return (
    r(_, "CLAUDE_CODE_OAUTH_TOKEN") &&
    !r(E, "CLAUDE_CODE_OAUTH_TOKEN") &&
    !r(E, "CLAUDE_CODE_OAUTH_REFRESH_TOKEN")
  );
}
function IAo(_, E) {
  if (!M9i(_, E)) return;
  for (let O of Object.keys(E))
    if (O.toUpperCase() === "CLAUDE_CODE_OAUTH_SCOPES") delete E[O];
}
var MAo = [
    "CLAUDE_CODE_OAUTH_REFRESH_TOKEN",
    "CLAUDE_SESSION_INGRESS_TOKEN_FILE",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "MCP_CLIENT_SECRET",
    "MCP_XAA_IDP_CLIENT_SECRET",
    "ENVIRONMENT_SERVICE_KEY",
    "SELF_HOSTED_RUNNER_POOL_SECRET",
    "SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET",
  ],
  U = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"],
  pfn = [
    ...U,
    "AWS_PROFILE",
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_CLOUD_PROJECT",
  ];
function Q2n(_, E) {
  for (let O of U) delete _[O];
  for (let O of pfn) if (!E?.[O]) delete _[O];
}
var dzt = [
    "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
    "AWS_EC2_METADATA_SERVICE_ENDPOINT",
    "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
    "AWS_WEB_IDENTITY_TOKEN_FILE",
    "AWS_ROLE_ARN",
  ],
  czt = [
    "GCE_METADATA_HOST",
    "GCE_METADATA_ROOT",
    "GCE_METADATA_IP",
    "METADATA_SERVER_DETECTION",
  ],
  q = new Set([
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    ...sA,
    ...K5,
    ...nj,
    ...Pme,
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
    "CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH",
    "CLAUDE_CODE_HOST_AUTH_ASK_AT_START",
    "CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    ...pfn,
    "GCLOUD_PROJECT",
    "GOOGLE_CLOUD_QUOTA_PROJECT",
    ...czt,
    ...dzt,
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    ...lzt,
    "ANTHROPIC_BEDROCK_SERVICE_TIER",
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "CLAUDE_CODE_CERT_STORE",
    "CLAUDE_CODE_DISABLE_FEATURE_FLAGS",
    "DISABLE_GROWTHBOOK",
    "CLAUDE_CODE_AUTO_MODE_MODEL",
    "CLAUDE_CODE_BG_CLASSIFIER_MODEL",
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
    ...Exr,
  ]),
  HAo = ["VERTEX_REGION_CLAUDE_"],
  Q = ["AWS_ENDPOINT_URL"];
function kwe(_) {
  let E = _.toUpperCase();
  return (
    q.has(E) ||
    HAo.some((O) => E.startsWith(O)) ||
    Q.some((O) => E.startsWith(O))
  );
}
var __ = new Set(["AWS_PROFILE"]);
function H9i(_) {
  return __.has(_.toUpperCase());
}
var l = ["SSL_CERT_FILE", "SSL_CERT_DIR", "ALL_PROXY"],
  E_ = ["NPM_CONFIG_HTTPS_PROXY", "NPM_CONFIG_HTTP_PROXY", "NPM_CONFIG_PROXY"],
  O_ = new Set(ufn),
  B = new Set([
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "ALL_PROXY",
    "NO_PROXY",
    "CLAUDE_CODE_PROXY_RESOLVES_HOSTS",
    "CLAUDE_CODE_HTTP_PROXY",
    "CLAUDE_CODE_HTTPS_PROXY",
    "NPM_CONFIG_PROXY",
    "NPM_CONFIG_HTTP_PROXY",
    "NPM_CONFIG_HTTPS_PROXY",
  ]);
function Z2n(_) {
  return B.has(_.toUpperCase());
}
var F = M([
  ...mxe,
  ...Object.keys(L2e),
  ...RAo.map((_) => _.toUpperCase()),
  ...l,
  ...hxe.filter((_) => !O_.has(_)),
]).filter(
  (_) => _ !== "NODE_EXTRA_CA_CERTS" && _ !== "JAVA_TOOL_OPTIONS" && !B.has(_),
);
function MAs(_) {
  return F.includes(_.toUpperCase()) || xAs.test(_) || Ylt.test(_);
}
var T_ = new Set([
    "CLAUDE_CODE_CLIENT_CERT",
    "CLAUDE_CODE_CLIENT_KEY",
    "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE",
    "NODE_EXTRA_CA_CERTS",
    "CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP",
    "CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP",
    ...Mle,
    "CLAUDE_CODE_OAUTH_SCOPES",
    ...F,
  ]),
  DAo = [
    "CLAUDE_CODE_CERT_STORE",
    "CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP",
    "CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP",
    "NODE_EXTRA_CA_CERTS",
    "NODE_TLS_REJECT_UNAUTHORIZED",
  ],
  LAo = "CLAUDE_CODE_AUTO_MODE_MODEL",
  sOl = new Set([
    "CLAUDE_CODE_SUBAGENT_MODEL",
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
  ]);
function uzt(_) {
  return T_.has(_.toUpperCase()) || MAs(_);
}
var HAs = [
    "HTTPS_PROXY",
    "HTTP_PROXY",
    "NO_PROXY",
    ...l,
    ...E_,
    "NODE_EXTRA_CA_CERTS",
    "CLAUDE_CODE_CERT_STORE",
    "CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP",
    "CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP",
    "CLAUDE_CODE_CLIENT_CERT",
    "CLAUDE_CODE_CLIENT_KEY",
    "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE",
    ...Mle,
  ],
  mfn = [
    ...HAs,
    "CLAUDE_CODE_PROXY_RESOLVES_HOSTS",
    "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER",
    "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS",
    "CLAUDE_CODE_DISABLE_PROXY_SCHEME_REPAIR",
    "API_FORCE_IDLE_TIMEOUT",
    "ANTHROPIC_UNIX_SOCKET",
    "CLAUDE_CODE_RUNNER_MODEL_SOCKET",
    "CLAUDE_CODE_DISABLE_HTTPS_AGENT_KEEPING",
    "NODE_OPTIONS",
  ];
function vxr(_) {
  return Z2n(_) || uzt(_) || HAs.includes(_.toUpperCase());
}
var fzt = [
  "ANTHROPIC_UNIX_SOCKET",
  "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
];
function Xlt(_) {
  return (
    !!_.ANTHROPIC_UNIX_SOCKET ||
    Oe(_.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) ||
    !!_.CLAUDE_CODE_HOST_AUTH_ENV_VAR
  );
}
function WLe(_) {
  if (!Oe(_.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return [];
  let E = N.some((T) => Oe(_[T])),
    O =
      !!_.CLAUDE_CODE_HOST_AUTH_ENV_VAR ||
      z.some((T) => !!_[T]) ||
      !!_.AWS_PROFILE ||
      !!_.AWS_CONFIG_FILE ||
      !!_.AWS_SHARED_CREDENTIALS_FILE,
    A = pfn.filter((T) => _[T] === "");
  return [
    ...hZ,
    ...(E && O ? U : []),
    ...A,
    q5(_),
    "CLAUDE_CODE_HOST_CREDS_FILE",
    "CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER",
  ].filter((T) => !!T);
}
function q5(_) {
  let E = _.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
  if (!E || fzt.includes(E) || sA.includes(E)) return;
  return E;
}
var iOl = [
    "apiKeyHelper",
    "awsAuthRefresh",
    "awsCredentialExport",
    "fileSuggestion",
    "gcpAuthRefresh",
    "otelHeadersHelper",
    "processWrapper",
    "policyHelpers",
    "proxyAuthHelper",
    "statusLine",
    "subagentStatusLine",
  ],
  D9i = ["bwrapPath", "ripgrep", "socatPath"],
  aOl = [
    "allowAppleEvents",
    "allowNestedUserNamespaces",
    "credentials",
    "enableWeakerNestedSandbox",
    "enableWeakerNetworkIsolation",
    "filesystem.disabled",
    "network.allowAllUnixSockets",
    "network.allowMachLookup",
    "network.allowUnixSockets",
    "network.httpProxyPort",
    "network.socksProxyPort",
    "network.tlsTerminate",
  ],
  lOl = ["required", "egress"],
  A_ = new Set([
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "ANTHROPIC_BEDROCK_SERVICE_TIER",
    "ANTHROPIC_CUSTOM_MODEL_OPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_FABLE_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_OPUS_MODEL",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_SONNET_MODEL",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_MODEL",
    "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
    "ANTHROPIC_SMALL_FAST_MODEL",
    "AWS_DEFAULT_REGION",
    "AWS_PROFILE",
    "AWS_REGION",
    "BASH_DEFAULT_TIMEOUT_MS",
    "BASH_MAX_OUTPUT_LENGTH",
    "BASH_MAX_TIMEOUT_MS",
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR",
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS",
    "CLAUDE_CODE_DISABLE_FEATURE_FLAGS",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE",
    "CLAUDE_CODE_ENABLE_AUTO_MODE",
    "CLAUDE_CODE_ENABLE_DESIGN_SYNC",
    "CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL",
    "CLAUDE_CODE_ENABLE_TELEMETRY",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS",
    "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL",
    "CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
    "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
    "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
    "CLAUDE_CODE_SKIP_MANTLE_AUTH",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH",
    "CLAUDE_CODE_SUBAGENT_MODEL",
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_FOUNDRY",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    "CLAUDE_CODE_USE_GATEWAY",
    "CLAUDE_CODE_USE_MANTLE",
    "CLAUDE_CODE_USE_POWERSHELL_TOOL",
    "CLAUDE_CODE_USE_VERTEX",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    "DISABLE_AUTOUPDATER",
    "DISABLE_BUG_COMMAND",
    "DISABLE_COST_WARNINGS",
    "DISABLE_FEEDBACK_COMMAND",
    "DISABLE_GROWTHBOOK",
    "DISABLE_INSTALLATION_CHECKS",
    "DISABLE_UPDATES",
    "ENABLE_TOOL_SEARCH",
    "MAX_MCP_OUTPUT_TOKENS",
    "MAX_THINKING_TOKENS",
    "MCP_CONNECT_TIMEOUT_MS",
    "MCP_TIMEOUT",
    "MCP_TOOL_TIMEOUT",
    "OTEL_EXPORTER_OTLP_COMPRESSION",
    "OTEL_EXPORTER_OTLP_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_COMPRESSION",
    "OTEL_EXPORTER_OTLP_LOGS_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_COMPRESSION",
    "OTEL_EXPORTER_OTLP_METRICS_HEADERS",
    "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE",
    "OTEL_EXPORTER_OTLP_PROTOCOL",
    "OTEL_EXPORTER_OTLP_TRACES_COMPRESSION",
    "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
    "OTEL_EXPORTER_OTLP_TRACES_PROTOCOL",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOGS_EXPORT_INTERVAL",
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRIC_EXPORT_INTERVAL",
    "OTEL_METRICS_EXPORTER",
    "OTEL_METRICS_INCLUDE_ACCOUNT_UUID",
    "OTEL_METRICS_INCLUDE_ENTRYPOINT",
    "OTEL_METRICS_INCLUDE_REPOSITORY",
    "OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES",
    "OTEL_METRICS_INCLUDE_SESSION_ID",
    "OTEL_METRICS_INCLUDE_VERSION",
    "OTEL_RESOURCE_ATTRIBUTES",
    "OTEL_RESOURCE_INCLUDE_HOST",
    "OTEL_SERVICE_NAME",
    "OTEL_TRACES_EXPORT_INTERVAL",
    "OTEL_TRACES_EXPORTER",
    "USE_BUILTIN_RIPGREP",
    "VERTEX_REGION_CLAUDE_3_5_HAIKU",
    "VERTEX_REGION_CLAUDE_3_5_SONNET",
    "VERTEX_REGION_CLAUDE_3_7_SONNET",
    "VERTEX_REGION_CLAUDE_4_0_OPUS",
    "VERTEX_REGION_CLAUDE_4_0_SONNET",
    "VERTEX_REGION_CLAUDE_4_1_OPUS",
    "VERTEX_REGION_CLAUDE_4_5_OPUS",
    "VERTEX_REGION_CLAUDE_4_6_OPUS",
    "VERTEX_REGION_CLAUDE_4_7_OPUS",
    "VERTEX_REGION_CLAUDE_4_8_OPUS",
    "VERTEX_REGION_CLAUDE_5_OPUS",
    "VERTEX_REGION_CLAUDE_5_5_OPUS",
    "VERTEX_REGION_CLAUDE_FABLE_5",
    "VERTEX_REGION_CLAUDE_FABLE_5_1",
    "VERTEX_REGION_CLAUDE_FABLE_5_2",
    "VERTEX_REGION_CLAUDE_4_5_SONNET",
    "VERTEX_REGION_CLAUDE_4_6_SONNET",
    "VERTEX_REGION_CLAUDE_5_SONNET",
    "VERTEX_REGION_CLAUDE_5_5_SONNET",
    "VERTEX_REGION_CLAUDE_HAIKU_4_5",
    "VERTEX_REGION_CLAUDE_HAIKU_5_5",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE",
    "CLAUDE_CODE_AUTO_COMPACT_WINDOW",
    "CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT",
    "CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS",
    "CLAUDE_CODE_MAX_CONTEXT_TOKENS",
    "DISABLE_AUTO_COMPACT",
    "DISABLE_COMPACT",
    "CLAUDE_CODE_ALWAYS_ENABLE_EFFORT",
    "CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING",
    "CLAUDE_CODE_DISABLE_FAST_MODE",
    "CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP",
    "CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK",
    "CLAUDE_CODE_DISABLE_THINKING",
    "CLAUDE_CODE_EFFORT_LEVEL",
    "CLAUDE_CODE_MAX_EFFORT_REMINDER",
    "CLAUDE_CODE_SUBAGENT_EFFORT",
    "CLAUDE_CODE_MESSAGES_PROMPT_CACHE_TTL",
    "CLAUDE_CODE_PROMPT_CACHE_TTL",
    "CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL",
    "DISABLE_INTERLEAVED_THINKING",
    "DISABLE_PROMPT_CACHING",
    "DISABLE_PROMPT_CACHING_FABLE",
    "DISABLE_PROMPT_CACHING_HAIKU",
    "DISABLE_PROMPT_CACHING_OPUS",
    "DISABLE_PROMPT_CACHING_SONNET",
    "ENABLE_PROMPT_CACHING_1H",
    "ENABLE_PROMPT_CACHING_1H_BEDROCK",
    "FALLBACK_FOR_ALL_PRIMARY_MODELS",
    "FORCE_PROMPT_CACHING_5M",
    "CLAUDE_AUTO_BACKGROUND_TASKS",
    "CLAUDE_CODE_DISABLE_ADVISOR_TOOL",
    "CLAUDE_CODE_DISABLE_AGENT_VIEW",
    "CLAUDE_CODE_DISABLE_ARTIFACT",
    "CLAUDE_CODE_DISABLE_BACKGROUND_TASKS",
    "CLAUDE_CODE_DISABLE_BUNDLED_SKILLS",
    "CLAUDE_CODE_DISABLE_CRON",
    "CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS",
    "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY",
    "CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING",
    "CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND",
    "CLAUDE_CODE_DISABLE_MEMORY_RO_UNSAVED_NOTICE",
    "CLAUDE_CODE_DISABLE_WORKFLOWS",
    "CLAUDE_CODE_ENABLE_AWAY_SUMMARY",
    "CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING",
    "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS",
    "CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION",
    "CLAUDE_CODE_ENABLE_TASKS",
    "CLAUDE_CODE_FORK_SUBAGENT",
    "CLAUDE_CODE_PLAN_MODE_REQUIRED",
    "DISABLE_DOCTOR_COMMAND",
    "DISABLE_EXTRA_USAGE_COMMAND",
    "DISABLE_INSTALL_GITHUB_APP_COMMAND",
    "DISABLE_LOGIN_COMMAND",
    "DISABLE_LOGOUT_COMMAND",
    "DISABLE_UPGRADE_COMMAND",
    "CLAUDE_AX_SCREEN_READER",
    "CLAUDE_CODE_ACCESSIBILITY",
    "CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN",
    "CLAUDE_CODE_DISABLE_MOUSE",
    "CLAUDE_CODE_DISABLE_MOUSE_CLICKS",
    "CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL",
    "CLAUDE_CODE_FORCE_STRIKETHROUGH",
    "CLAUDE_CODE_FORCE_TERMINAL_IMAGES",
    "CLAUDE_CODE_HIDE_CWD",
    "CLAUDE_CODE_NATIVE_CURSOR",
    "CLAUDE_CODE_NO_FLICKER",
    "CLAUDE_CODE_SCROLL_SPEED",
    "CLAUDE_CODE_SYNTAX_HIGHLIGHT",
    "API_TIMEOUT_MS",
    "CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS",
    "CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS",
    "CLAUDE_CODE_GLOB_TIMEOUT_SECONDS",
    "CLAUDE_CODE_MAX_RETRIES",
    "CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION",
    "CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY",
    "CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION",
    "CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS",
    "CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT",
    "CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS",
    "CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR",
    "CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS",
    "CLAUDE_STREAM_IDLE_TIMEOUT_MS",
    "MAX_STRUCTURED_OUTPUT_RETRIES",
    "MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE",
    "MCP_SERVER_CONNECTION_BATCH_SIZE",
    "SLASH_COMMAND_TOOL_CHAR_BUDGET",
    "TASK_MAX_OUTPUT_LENGTH",
    "MCP_CONNECTION_NONBLOCKING",
    "CLAUDE_ENABLE_BYTE_WATCHDOG",
    "CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK",
    "CLAUDE_ENABLE_STREAM_WATCHDOG",
  ]),
  L9i = new Set([
    "API_FORCE_IDLE_TIMEOUT",
    "CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES",
    "CLAUDE_CODE_DISABLE_MCP_TASKS",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
    "CLAUDE_CODE_DISABLE_RESPONSE_COMPARISON",
    "CLAUDE_CODE_DISABLE_ULTRATHINK",
    "CLAUDE_CODE_DISABLE_WEB_FETCH",
    "DISABLE_ERROR_REPORTING",
    "DISABLE_TELEMETRY",
    "DO_NOT_TRACK",
  ]),
  C_ = new Set([lN, "ENABLE_BETA_TRACING_DETAILED", "OTEL_LOG_RAW_API_BODIES"]),
  R_ =
    /auth|key|token|cookie|secret|credential|session|signature|passw|jwt|assertion|cert|oidc|org|tenant|account|project|workspace|user|email|identity|principal|consumer|client|host|url|base|target|upstream|endpoint|proxy|forward|route|fallback|override|apigw|x-goog-|l5d-|bypass|guardrail|amz|x-ms-|azureml|extra-parameters|envoy|helicone|litellm|cf-aig|cf-access|beta|version|^anthropic-routing-/;
function L_(_) {
  if (/\r(?!\n)/.test(_)) return !0;
  return _.split(/\n|\r\n/).some((E) => {
    let O = E.indexOf(":");
    if (O === -1) return !1;
    let A = E.slice(0, O).trim();
    return (
      !Txr.test(A) || X2n(E.slice(O + 1)) !== null || R_.test(A.toLowerCase())
    );
  });
}
var Txr = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function _xe(_, E) {
  let O = _.toUpperCase();
  return A_.has(O) || V(O, E) || (O === "ANTHROPIC_CUSTOM_HEADERS" && !L_(E));
}
function Cxr(_, E) {
  return V(_.toUpperCase(), E);
}
function V(_, E) {
  return (L9i.has(_) && Oe(E)) || (C_.has(_) && Os(E));
}
export {
  CAs,
  AAs,
  Pr,
  RAs,
  cfn,
  CAo,
  AAo,
  mxe,
  L2e,
  Un,
  Vw,
  O9i,
  xme,
  qlt,
  f7e,
  p7e,
  V5,
  ufn,
  hxe,
  Ylt,
  xAs,
  li,
  ffn,
  ZPl,
  X2n,
  PAs,
  OAs,
  Bg,
  Mv,
  lN,
  eOl,
  tOl,
  Mle,
  RAo,
  nOl,
  sA,
  J2n,
  wxr,
  xAo,
  mZ,
  kxr,
  PAo,
  rOl,
  BLe,
  IAs,
  K5,
  gxe,
  m7e,
  FTt,
  nj,
  oOl,
  hZ,
  OAo,
  Pme,
  lzt,
  Exr,
  Ome,
  I9i,
  N2e,
  M9i,
  IAo,
  MAo,
  pfn,
  Q2n,
  dzt,
  czt,
  HAo,
  kwe,
  H9i,
  Z2n,
  MAs,
  DAo,
  LAo,
  sOl,
  uzt,
  HAs,
  mfn,
  vxr,
  fzt,
  Xlt,
  WLe,
  q5,
  iOl,
  D9i,
  aOl,
  lOl,
  L9i,
  Txr,
  _xe,
  Cxr,
};
