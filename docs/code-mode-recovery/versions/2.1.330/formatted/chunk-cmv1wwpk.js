// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { ft } from "/$bunfs/root/chunk-w1d7ygsk.js";
var e = ft("/$bunfs/root/design-6m4nsdef.md");
var t = ft("/$bunfs/root/designHowTo-p8zjfw0e.md");
var s = ft("/$bunfs/root/designTwoSteps-g0bev2xr.md");
var i = ft("/$bunfs/root/slides-fp2m3cps.md");
var a = ft("/$bunfs/root/slidesHowTo-t4kr5d65.md");
var r = ft("/$bunfs/root/slidesTwoSteps-sen5xrbt.md");
var x = new Map([
    ["design", e.trim()],
    ["slides", i.trim()],
  ]),
  O = new Map([
    ["design", s.trim()],
    ["slides", r.trim()],
  ]),
  T = "<the new Artifact's url>",
  _ = '"<the tokens.json path above>"',
  E = "   // only with a design system",
  F =
    " With a design system, the colours, type and spacing are the ones in the files you printed.",
  A = new Map([
    ["design", { text: t.trim(), whole: "design", parts: "boards" }],
    ["slides", { text: a.trim(), whole: "deck", parts: "slides" }],
  ]);
export {
  A as REPL_ROUTE_HOW_TO_BY_TYPE_KEY,
  E as REPL_ROUTE_HOW_TO_SYSTEM_ROW_END,
  F as REPL_ROUTE_HOW_TO_SYSTEM_SENTENCE,
  _ as REPL_ROUTE_HOW_TO_TOKENS_WORDS,
  T as REPL_ROUTE_HOW_TO_URL_WORDS,
  x as REPL_ROUTE_SECTION_BY_TYPE_KEY,
  O as REPL_ROUTE_TWO_STEPS_BY_TYPE_KEY,
};
