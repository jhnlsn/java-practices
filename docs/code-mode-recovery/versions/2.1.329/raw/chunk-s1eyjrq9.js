// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{oe}from"/$bunfs/root/chunk-chsxmm1h.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";import{randomUUID as u}from"crypto";var a=256;function Zlo(e=u(),t){if(t!==void 0){let n=oe().laneNoticeSlugs;n.set(e,t),i(n)}return e}function zrl(e){return oe().laneNoticeSlugs.get(e)}function Inn(){return Ie("tengu_woolly_honey",{safe:!0})}function Vrl(e,t,n,r){let o=oe(),s=Date.now();if(e!==void 0)o.commentReads.set(e,{slug:t,ownWordsOnly:n,ownAccount:r}),i(o.commentReads);if(o.commentReadAtBySlug.delete(t),o.commentReadAtBySlug.set(t,s),i(o.commentReadAtBySlug)||!n)o.lastOthersCommentReadAt=s}function edo(e){return oe().commentReads.get(e)}function tdo(e,t){for(let[n,r]of oe().commentReadAtBySlug)if(n!==e&&!(Number.isFinite(t)&&r<t))return!0;return!1}function ndo(){return oe().lastOthersCommentReadAt}function i(e){if(e.size<=a)return!1;let t=e.keys().next().value;if(t!==void 0)e.delete(t);return!0}
export{Zlo,zrl,Inn,Vrl,edo,tdo,ndo};
