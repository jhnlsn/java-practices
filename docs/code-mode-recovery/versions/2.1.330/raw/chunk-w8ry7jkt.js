// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Y}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Yu}from"/$bunfs/root/chunk-2mwshd9r.js";import{kme}from"/$bunfs/root/chunk-ts09sys6.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var o="/v1/claudeai-agents/mcp",t="f688f3fc-1d05-5bd1-9c48-9854ec083044",DBa=new ze(()=>({})),LBa=new ze(()=>({}));function hsr(e,r){let s=e.servers.get(r.name);return s!==void 0&&r.config.type==="http"&&r.config.url===s&&e.heldSinceBoot(r.name)}var kUe=/^file_[A-Za-z0-9_-]{1,128}$/,gsr="get_task";function P7r(e){return e==="start_task"||e==="update_task"}function ant(e){return kme(e,{path:o,serverId:t})}function NBa(e){if(e.config.type!=="http"||!Yu(e.config.url))return!1;return Y()?b8o(e):ant(e)}function b8o(e){if(e.config.type!=="http"||!Yu(e.config.url))return!1;try{return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((r)=>r.toLowerCase()===t)}catch{return!1}}function psi(e){return ant(e)||Y()&&b8o(e)}
export{DBa,LBa,hsr,kUe,gsr,P7r,ant,NBa,b8o,psi};
