// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{uo,zR}from"/$bunfs/root/chunk-2zeyvjwb.js";import{Wu}from"/$bunfs/root/chunk-3t7ve0wy.js";import{jn}from"/$bunfs/root/chunk-zhr7rpv7.js";import{Ott}from"/$bunfs/root/chunk-t8bqgjer.js";import{zco}from"/$bunfs/root/chunk-wwhjj2yk.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function ati(e){o.register(e)}function UDt(){let e=zR("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&uo("hipaa"))return!1;if(Ott())return!0;return Wu()&&jn()&&o.read()}function kXl(e){if(!zco.includes(e))return!0;return UDt()}
export{ati,UDt,kXl};
