// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ne}from"/$bunfs/root/chunk-69qhefwa.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";var o=null;function yvl(n){o=n}function fb(){return s.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG===!0||Ne(o?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG)}var t=300;function X2t(){let n=o?.(),e=(n===void 0?s.CLAUDE_CODE_PERSONAL_CONFIG_FIX:n.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();if(e===void 0||e===""||e.length>t||/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return;return e}function Svl(){let n=o?.(),e=(n===void 0?s.CLAUDE_CODE_PERSONAL_HOOKS_OFF:n.CLAUDE_CODE_PERSONAL_HOOKS_OFF)?.trim().toLowerCase();switch(e){case void 0:case"":case"none":case"0":case"false":case"no":case"off":return;case"retry":case"fix":case"launch":return e;default:return"host"}}
export{yvl,fb,X2t,Svl};
