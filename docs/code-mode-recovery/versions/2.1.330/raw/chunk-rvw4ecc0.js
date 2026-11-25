// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ZUt}from"/$bunfs/root/chunk-kvvabk01.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{DE,wl}from"/$bunfs/root/chunk-3jjr3wje.js";import{cf}from"/$bunfs/root/chunk-6mfepmbb.js";import{IVt}from"/$bunfs/root/chunk-r6r2wdsw.js";import{readFile as c}from"fs/promises";function Gsi(r){let e=ZUt(),o=e?.serves?.(r)?e.answers:void 0;return o&&((n,i)=>o(new Request(n,i)))}async function G7r(r,e){let o=await Tsr(r);return e&&o.tls?{...o,tls:cf(o.tls,"ca")}:o}async function Tsr(r){if(ZUt()?.serves?.(r))return{...wl({url:r}),proxy:!1,redirect:"error"};if(!DE()){let e=IVt();if(e.HTTPS_PROXY&&URL.parse(r)?.protocol==="https:"){let o={url:e.HTTPS_PROXY,noProxy:e.NO_PROXY},n=wl({url:r,fallbackProxy:o});if(n.proxy===void 0||!e.SSL_CERT_FILE)return n;let i;try{i=await c(e.SSL_CERT_FILE,"utf8")}catch(s){t(`MCP agent-proxy fallback: failed to read CA bundle: ${s instanceof Error?s.message:String(s)}`,{level:"warn"})}return wl({url:r,fallbackProxy:{...o,ca:i}})}}return wl({url:r})}
export{Gsi,G7r,Tsr};
