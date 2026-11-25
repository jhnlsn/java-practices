// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{K}from"/$bunfs/root/chunk-q3pjyhpy.js";import{dbe}from"/$bunfs/root/chunk-aq3ms068.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new j(()=>new r);function a(){return s.of(N().host)}function K$s(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function S5n(){a().detachedSinceLastAttach=!0}function q$s(){return a().detachedSinceLastAttach}function nFe(){return a().stampMs}function b5n(e){return!1}async function eUr(){for(;;){let e=Date.now();if(!b5n(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await K(Math.max(25,c)+25)}}
export{K$s,S5n,q$s,nFe,b5n,eUr};
