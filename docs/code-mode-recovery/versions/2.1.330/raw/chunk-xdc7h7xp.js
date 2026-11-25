// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{se}from"/$bunfs/root/chunk-0rkwgmhx.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";import{randomUUID as u}from"crypto";var a=256;function Tgo(e=u(),t){if(t!==void 0){let n=se().laneNoticeSlugs;n.set(e,t),i(n)}return e}function Iml(e){return se().laneNoticeSlugs.get(e)}function Dan(){return Pe("tengu_woolly_honey",{safe:!0})}function Mml(e,t,n,r){let o=se(),s=Date.now();if(e!==void 0)o.commentReads.set(e,{slug:t,ownWordsOnly:n,ownAccount:r}),i(o.commentReads);if(o.commentReadAtBySlug.delete(t),o.commentReadAtBySlug.set(t,s),i(o.commentReadAtBySlug)||!n)o.lastOthersCommentReadAt=s}function Cgo(e){return se().commentReads.get(e)}function Ago(e,t){for(let[n,r]of se().commentReadAtBySlug)if(n!==e&&!(Number.isFinite(t)&&r<t))return!0;return!1}function Rgo(){return se().lastOthersCommentReadAt}function i(e){if(e.size<=a)return!1;let t=e.keys().next().value;if(t!==void 0)e.delete(t);return!0}
export{Tgo,Iml,Dan,Mml,Cgo,Ago,Rgo};
