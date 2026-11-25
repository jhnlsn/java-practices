// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var r = new Set([
  "update",
  "upgrade",
  "doctor",
  "forward-home-settings",
  ...[],
]);
function s(e) {
  return !1;
}
function i(e) {
  let n = e.indexOf("mcp");
  return n !== -1 && e[n + 1] === "serve";
}
function a(e) {
  let n = e.indexOf("agents");
  return n !== -1 && e.includes("--json", n + 1);
}
function c(e) {
  return e.some(
    (n, o) => (n === "plugin" || n === "plugins") && e[o + 1] === "eval",
  );
}
function l(e) {
  return e.some((n) => n === "remote-control" || n === "rc");
}
export {
  r as NON_REPL_SUBCOMMANDS,
  a as isAgentsJsonInvocation,
  i as isMcpServeInvocation,
  c as isPluginEvalInvocation,
  s as isProjectVerbInvocation,
  l as isRemoteControlInvocation,
};
