// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import "/$bunfs/root/chunk-69qhefwa.js";
import "/$bunfs/root/chunk-h3s25p5k.js";
import "/$bunfs/root/chunk-78g0060s.js";
import "/$bunfs/root/chunk-jv7av99m.js";
import "/$bunfs/root/chunk-5appeerh.js";
import "/$bunfs/root/chunk-z6pfqf6e.js";
import "/$bunfs/root/chunk-psw95195.js";
import "/$bunfs/root/chunk-2gtmjt3y.js";
import { L } from "/$bunfs/root/chunk-72r477hv.js";
import { jr } from "/$bunfs/root/chunk-w1d7ygsk.js";
var e = {};
jr(e, {
  CLAUDE_CODE_EXPERIMENTAL_CODE_MODE: () => o,
  CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART: () => E,
  CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTARTED_FROM: () => r,
});
var o = L.rawStr(),
  E = L.enum([
    "retried",
    "admin",
    "admin_unread",
    "credential_changed",
    "compliance",
    "otel",
    "credentials",
    "no_setup",
    "provider",
    "model",
    "gate",
  ]),
  r = L.str();
var d = { ...e };
export { d as codeModeShape };
