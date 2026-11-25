// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{fh}from"/$bunfs/root/chunk-8wtweva8.js";var a=120000,s=600000;function O8(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=fh(e);if(!isNaN(t)&&t>0)return t}return a}function Rse(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=fh(e);if(!isNaN(t)&&t>0)return Math.max(t,O8(n))}return Math.max(s,O8(n))}var Y3a=1800000,Kes=7200000;function X3a(n){return Math.min(Math.max(n,Rse()),2147483647)}function J3a(n,e){return Math.max(n,O8(e))}function IDt(n,e){return n!==void 0&&n>0?e:void 0}var i=2000;function Rto({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,subagentCapMs:o=0,env:u=process.env}){if(!t)return n;let r=e?fh(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS):o;if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,i))}
export{O8,Rse,Y3a,Kes,X3a,J3a,IDt,Rto};
