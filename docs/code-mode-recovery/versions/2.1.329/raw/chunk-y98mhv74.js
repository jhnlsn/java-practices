// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function r(n){return n}function S(n){return r(n)}function u(n){return r(n)}function fe(n){return n==null?void 0:r(n)}function Ps(n){return r(String(n))}function Kwe(n){return n==null?void 0:r(String(n))}function jh(...n){return r(n.join(""))}function Jxo(n){return r(n.join(","))}function qa(n){return r([...n].sort().join(","))}function vk(n,e){return r(n.join(e??","))}function Ir(n){return r(n)}function C1(n,e){return e?Ir(n):void 0}function nea(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Ir(n):S("none")}function Kme(n,e){return e?Ir(n):S("custom")}function qme(n){return Kme(n.agentType,n.source==="built-in")}function Qxo(n,e){return e?Ir(n):S("third-party")}
export{S,u,fe,Ps,Kwe,jh,Jxo,qa,vk,Ir,C1,nea,Kme,qme,Qxo};
