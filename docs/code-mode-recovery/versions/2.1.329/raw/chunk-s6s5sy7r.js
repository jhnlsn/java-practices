// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee}from"/$bunfs/root/chunk-m55722gg.js";function IVs(n){if(n===null||typeof n!=="object")return;let o=n.protocols;if(!Array.isArray(o))return;let t=o.filter((r)=>typeof r==="string");return t.length>0?t:void 0}function Bwa(n){let o=IVs(n);if(o===void 0)return"";return` (subprotocols: ${o.map((t)=>`"${t}"`).join(", ")})`}var lBo=4,e=48;function SYn(n){let o=n.slice(0,lBo).map((r)=>r.length>e?`${ee(r,e)}\u2026`:r),t=n.length-o.length;return`${o.map((r)=>`"${r}"`).join(", ")}${t>0?` (+${t} more)`:""}`}
export{IVs,Bwa,lBo,SYn};
