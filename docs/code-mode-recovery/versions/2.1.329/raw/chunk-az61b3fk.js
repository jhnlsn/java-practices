// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{V$,pt}from"/$bunfs/root/chunk-5w3q3ks2.js";import{l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{yT}from"/$bunfs/root/chunk-be81kym3.js";function krt(e){if(!V$(e))return!1;if(pt(e))return!0;return/^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e)&&yT(e)!==void 0}function Vao(e,o={}){return o.acceptCustomIds?V$(e):krt(e)}function oSt(e,o,n={}){if(o)return{adoptedSessionId:null,effectiveFork:!0};if(e===void 0)return{adoptedSessionId:null,effectiveFork:!1};if(Vao(e,n))return{adoptedSessionId:e,effectiveFork:!1};return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`),l("session_resume","unadoptable_session_id"),{adoptedSessionId:null,effectiveFork:!0}}
export{krt,Vao,oSt};
