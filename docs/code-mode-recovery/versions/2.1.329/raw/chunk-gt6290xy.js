// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ir}from"/$bunfs/root/chunk-y98mhv74.js";var n=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function aoe(e){if(e===void 0)return;return Ir(n.has(e)?e:"other")}var t=new Set(["cold","spare","adopted"]);function eyn(e){return typeof e==="string"&&t.has(e)?e:void 0}
export{aoe,eyn};
