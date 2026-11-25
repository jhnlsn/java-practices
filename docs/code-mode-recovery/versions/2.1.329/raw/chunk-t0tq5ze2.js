// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{OF}from"/$bunfs/root/chunk-aq3ms068.js";import{yt}from"/$bunfs/root/chunk-agyyqm1q.js";import{Cn,oa}from"/$bunfs/root/chunk-dt01kn47.js";import{prt}from"/$bunfs/root/chunk-p9p5bfcv.js";import{OQn}from"/$bunfs/root/chunk-0zqeskbz.js";import{del,K8}from"/$bunfs/root/chunk-3k154sad.js";import{JOt}from"/$bunfs/root/chunk-1nk8gtvb.js";import{MZt,_oo}from"/$bunfs/root/chunk-22m075cp.js";import{Ig}from"/$bunfs/root/chunk-15e5qt5d.js";function n(e){return K8()&&d9t(e)!==void 0}function mOa(e,r){try{if(!n(e))return!1;let o=oa("allow_connector_file_downloads");return o===null||JOt(o)==="policy_unread"&&!r}catch{return!1}}function oKr(e){return Ig(e.config)!==void 0&&prt(e.capabilities)&&K8()}function Ezo(e){return n(e.config)||K8()&&OQn(e)!==void 0}function d9t(e){let r=del(e);if(r!==void 0)return r;let o=_oo(e);return o===void 0||!MZt()||!OF()||!Cn("allow_connector_file_downloads")?void 0:{via:"direct",mcpUrl:o.href,redirectedTo:yt().redirectedMcpAddresses.get(o.href)}}
export{mOa,oKr,Ezo,d9t};
