// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xv}from"/$bunfs/root/chunk-z6pfqf6e.js";import{gJ,osa}from"/$bunfs/root/chunk-w578pjby.js";import{nLe,y2e,QUn}from"/$bunfs/root/chunk-p1ewvgeh.js";function Nq(n,e,t,r){return u(n,e,t)??c(gJ(e),t,r)}async function elo(n,e,t){return u(n,e,t)??c(await osa(e),t)}function u(n,e,t){let r=n.trim(),s=r===e?[e]:[r,e];for(let i of s){let o=a(i,t);if(o!==void 0)return o}return}function c({paths:n,vetted:e,linkTextClimbs:t},r,s){if(!e)return{ok:!1,reason:"unvettable_chain"};for(let i of n){let o=a(i,r);if(o!==void 0)return o}if(t&&!s?.allowLinkTextClimbs)return{ok:!1,reason:"link_text_climbs"};return{ok:!0,pathsToCheck:n}}function r0(n,e){return a(n,e)?.reason}function a(n,e){if(xv(n))return{ok:!1,reason:"nt_namespace"};if(nLe(n,e))return{ok:!1,reason:"untrusted_unc"};if(y2e(n,e))return{ok:!1,reason:"untrusted_automount"};let t=QUn(n,e);if(t!==void 0)return{ok:!1,reason:"suspicious_windows_spelling",spelling:t};return}
export{Nq,elo,r0};
