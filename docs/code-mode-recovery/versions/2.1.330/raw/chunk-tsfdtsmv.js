// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ZB,ht}from"/$bunfs/root/chunk-mzmcvr6c.js";import{l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{nC}from"/$bunfs/root/chunk-px0hhsq7.js";function Lit(e){if(!ZB(e))return!1;if(ht(e))return!0;return/^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e)&&nC(e)!==void 0}function lgo(e,o={}){return o.acceptCustomIds?ZB(e):Lit(e)}function Bkt(e,o,n={}){if(o)return{adoptedSessionId:null,effectiveFork:!0};if(e===void 0)return{adoptedSessionId:null,effectiveFork:!1};if(lgo(e,n))return{adoptedSessionId:e,effectiveFork:!1};return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`),l("session_resume","unadoptable_session_id"),{adoptedSessionId:null,effectiveFork:!0}}
export{Lit,lgo,Bkt};
