// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hp}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Zt}from"/$bunfs/root/chunk-aq3ms068.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{el}from"/$bunfs/root/chunk-m55722gg.js";import{w5t}from"/$bunfs/root/chunk-058s3tc0.js";function _ua(o){if(Zt())return!1;if(hp()!==void 0&&o.every((r)=>r.unattendedSafe))return!1;return!0}function fJe(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function kqt(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function Eqt(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${el(w5t(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{_ua,fJe,kqt,Eqt};
