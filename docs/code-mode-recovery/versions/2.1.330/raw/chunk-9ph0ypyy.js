// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{np}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Qt}from"/$bunfs/root/chunk-865at33z.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{el}from"/$bunfs/root/chunk-7cfjrnwy.js";import{TXt}from"/$bunfs/root/chunk-dgdc791t.js";function wka(o){if(Qt())return!1;if(np()!==void 0&&o.every((r)=>r.unattendedSafe))return!1;return!0}function ret(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function y8t(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function S8t(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${el(TXt(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{wka,ret,y8t,S8t};
