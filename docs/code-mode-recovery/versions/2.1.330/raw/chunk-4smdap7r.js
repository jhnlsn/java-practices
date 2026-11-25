// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function v3t(e,n){return e.flatMap((t,r)=>r?[n(r),t]:[t])}function U(e,n){let t=0;for(let r of e)t+=+!!n(r);return t}function Kge(e,n){if(e===n)return!0;if(e===void 0||n===void 0||e.size!==n.size)return!1;for(let t of e)if(!n.has(t))return!1;return!0}function Xy(e,n){if(e===n)return!0;if(e===void 0||n===void 0||e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function M(e){return[...new Set(e)]}function bT(e,n){let t=new Set,r=[];for(let o of e){let i=n(o);if(!t.has(i))t.add(i),r.push(o)}return r}function Qyn(e,n){let t=new Map;for(let r of e){let o=n(r);if(!t.has(o))t.set(o,r)}return t}function Nr(e){if(!Array.isArray(e))return[];return e.every((n)=>typeof n==="string")?e:e.filter((n)=>typeof n==="string")}function Bca(e,n){let t=Math.min(e.length,n.length),r=0;while(r<t&&e[r]===n[r])r++;return r}
export{v3t,U,Kge,Xy,M,bT,Qyn,Nr,Bca};
