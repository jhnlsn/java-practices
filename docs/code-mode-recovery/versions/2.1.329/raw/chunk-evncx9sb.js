// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{UE}from"/$bunfs/root/chunk-ca90c7br.js";import{A7,_Yi}from"/$bunfs/root/chunk-c2c9kwmh.js";import{N0e,LBe,$Dn}from"/$bunfs/root/chunk-32gs4rex.js";function fK(n,e,t,r){return u(n,e,t)??c(A7(e),t,r)}async function Seo(n,e,t){return u(n,e,t)??c(await _Yi(e),t)}function u(n,e,t){let r=n.trim(),s=r===e?[e]:[r,e];for(let i of s){let o=a(i,t);if(o!==void 0)return o}return}function c({paths:n,vetted:e,linkTextClimbs:t},r,s){if(!e)return{ok:!1,reason:"unvettable_chain"};for(let i of n){let o=a(i,r);if(o!==void 0)return o}if(t&&!s?.allowLinkTextClimbs)return{ok:!1,reason:"link_text_climbs"};return{ok:!0,pathsToCheck:n}}function z0(n,e){return a(n,e)?.reason}function a(n,e){if(UE(n))return{ok:!1,reason:"nt_namespace"};if(N0e(n,e))return{ok:!1,reason:"untrusted_unc"};if(LBe(n,e))return{ok:!1,reason:"untrusted_automount"};let t=$Dn(n,e);if(t!==void 0)return{ok:!1,reason:"suspicious_windows_spelling",spelling:t};return}
export{fK,Seo,z0};
