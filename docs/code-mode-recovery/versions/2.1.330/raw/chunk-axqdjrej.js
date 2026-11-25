// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Fr}from"/$bunfs/root/chunk-78g0060s.js";var n=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function Qse(e){if(e===void 0)return;return Fr(n.has(e)?e:"other")}var t=new Set(["cold","spare","adopted"]);function BEn(e){return typeof e==="string"&&t.has(e)?e:void 0}
export{Qse,BEn};
