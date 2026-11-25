// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{X}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Tfe}from"/$bunfs/root/chunk-d1pd8gzf.js";import{uf}from"/$bunfs/root/chunk-73rzabst.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var o="/v1/claudeai-agents/mcp",t="f688f3fc-1d05-5bd1-9c48-9854ec083044",XOa=new qe(()=>({})),JOa=new qe(()=>({}));function AQn(e,r){let s=e.servers.get(r.name);return s!==void 0&&r.config.type==="http"&&r.config.url===s&&e.heldSinceBoot(r.name)}var XFe=/^file_[A-Za-z0-9_-]{1,128}$/,RQn="get_task";function PKr(e){return e==="start_task"||e==="update_task"}function lZe(e){return Tfe(e,{path:o,serverId:t})}function QOa(e){if(e.config.type!=="http"||!uf(e.config.url))return!1;return X()?Hzo(e):lZe(e)}function Hzo(e){if(e.config.type!=="http"||!uf(e.config.url))return!1;try{return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((r)=>r.toLowerCase()===t)}catch{return!1}}function d7s(e){return lZe(e)||X()&&Hzo(e)}
export{XOa,JOa,AQn,XFe,RQn,PKr,lZe,QOa,Hzo,d7s};
