// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{oe}from"/$bunfs/root/chunk-chsxmm1h.js";function uol(e){let n={...e,consumed:!1};return oe().pipelineReplyOrigins.set(e.expectedToolUseId,n),n}function fol(e,n,t){let i=t===void 0?void 0:oe().pipelineReplyOrigins.get(t);if(i===void 0||i.consumed||i.slug!==e||i.threadId!==n)return!1;return i.consumed=!0,!0}function pol(e){return e!==void 0&&oe().pipelineReplyOrigins.has(e)}function Odo(e,n){return oe().autoReact.chainToolUseIds.set(e,n),e}function Ido(e){let n=oe();n.autoReact.chainToolUseIds.delete(e),n.askClassFirstWords.delete(e),n.publishCommentCards.delete(e)}function mol(e,n){return e!==void 0&&oe().autoReact.chainToolUseIds.get(e)===n}function hol(e){let n=oe().pipelineReplyOrigins;if(n.get(e.expectedToolUseId)===e)n.delete(e.expectedToolUseId)}
export{uol,fol,pol,Odo,Ido,mol,hol};
