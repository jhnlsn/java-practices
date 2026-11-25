// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Een}from"/$bunfs/root/chunk-xpxp0jg6.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{Xk,dl}from"/$bunfs/root/chunk-2jhxnfds.js";import{qu}from"/$bunfs/root/chunk-zryj96fm.js";import{Vjt}from"/$bunfs/root/chunk-59xdgreq.js";import{readFile as c}from"fs/promises";function rIa(r){let e=Een(),o=e?.serves?.(r)?e.answers:void 0;return o&&((n,i)=>o(new Request(n,i)))}async function Bzo(r,e){let o=await IQn(r);return e&&o.tls?{...o,tls:qu(o.tls,"ca")}:o}async function IQn(r){if(Een()?.serves?.(r))return{...dl({url:r}),proxy:!1,redirect:"error"};if(!Xk()){let e=Vjt();if(e.HTTPS_PROXY&&URL.parse(r)?.protocol==="https:"){let o={url:e.HTTPS_PROXY,noProxy:e.NO_PROXY},n=dl({url:r,fallbackProxy:o});if(n.proxy===void 0||!e.SSL_CERT_FILE)return n;let i;try{i=await c(e.SSL_CERT_FILE,"utf8")}catch(s){t(`MCP agent-proxy fallback: failed to read CA bundle: ${s instanceof Error?s.message:String(s)}`,{level:"warn"})}return dl({url:r,fallbackProxy:{...o,ca:i}})}}return dl({url:r})}
export{rIa,Bzo,IQn};
