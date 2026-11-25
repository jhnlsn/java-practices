// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{po,QR}from"/$bunfs/root/chunk-r3ggct44.js";import{Tu}from"/$bunfs/root/chunk-0v6g5ynk.js";import{Bn}from"/$bunfs/root/chunk-cd3hqxcc.js";import{DQe}from"/$bunfs/root/chunk-b3533ry3.js";import{pro}from"/$bunfs/root/chunk-ds4gmmrb.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function N5s(e){o.register(e)}function xOt(){let e=QR("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&po("hipaa"))return!1;if(DQe())return!0;return Tu()&&Bn()&&o.read()}function $Gl(e){if(!pro.includes(e))return!0;return xOt()}
export{N5s,xOt,$Gl};
