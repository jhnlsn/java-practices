// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{K}from"/$bunfs/root/chunk-5appeerh.js";import{yke}from"/$bunfs/root/chunk-865at33z.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new j(()=>new r);function a(){return s.of(N().host)}function QKs(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function GJn(){a().detachedSinceLastAttach=!0}function ZKs(){return a().detachedSinceLastAttach}function E$e(){return a().stampMs}function zJn(e){return!1}async function Izr(){for(;;){let e=Date.now();if(!zJn(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await K(Math.max(25,c)+25)}}
export{QKs,GJn,ZKs,E$e,zJn,Izr};
