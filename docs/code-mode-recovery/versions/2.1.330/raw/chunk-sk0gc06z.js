// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ch}from"/$bunfs/root/chunk-2gtmjt3y.js";var a=120000,s=600000;function p7(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=Ch(e);if(!isNaN(t)&&t>0)return t}return a}function kae(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=Ch(e);if(!isNaN(t)&&t>0)return Math.max(t,p7(n))}return Math.max(s,p7(n))}var nnl=1800000,Eds=7200000;function rnl(n){return Math.min(Math.max(n,kae()),2147483647)}function onl(n,e){return Math.max(n,p7(e))}function Z1t(n,e){return n!==void 0&&n>0?e:void 0}var i=2000;function wdo({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,subagentCapMs:o=0,env:u=process.env}){if(!t)return n;let r=e?Ch(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS):o;if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,i))}
export{p7,kae,nnl,Eds,rnl,onl,Z1t,wdo};
