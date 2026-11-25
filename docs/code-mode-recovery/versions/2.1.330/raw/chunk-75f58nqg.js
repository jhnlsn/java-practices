// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{se}from"/$bunfs/root/chunk-0rkwgmhx.js";function Qml(e){let n={...e,consumed:!1};return se().pipelineReplyOrigins.set(e.expectedToolUseId,n),n}function Zml(e,n,t){let i=t===void 0?void 0:se().pipelineReplyOrigins.get(t);if(i===void 0||i.consumed||i.slug!==e||i.threadId!==n)return!1;return i.consumed=!0,!0}function ehl(e){return e!==void 0&&se().pipelineReplyOrigins.has(e)}function r_o(e,n){return se().autoReact.chainToolUseIds.set(e,n),e}function o_o(e){let n=se();n.autoReact.chainToolUseIds.delete(e),n.askClassFirstWords.delete(e),n.publishCommentCards.delete(e)}function thl(e,n){return e!==void 0&&se().autoReact.chainToolUseIds.get(e)===n}function nhl(e){let n=se().pipelineReplyOrigins;if(n.get(e.expectedToolUseId)===e)n.delete(e.expectedToolUseId)}
export{Qml,Zml,ehl,r_o,o_o,thl,nhl};
