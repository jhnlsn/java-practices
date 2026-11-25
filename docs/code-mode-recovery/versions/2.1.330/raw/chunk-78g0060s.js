// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function r(n){return n}function S(n){return r(n)}function f(n){return r(n)}function fe(n){return n==null?void 0:r(n)}function Gs(n){return r(String(n))}function ove(n){return n==null?void 0:r(String(n))}function Rh(...n){return r(n.join(""))}function fNo(n){return r(n.join(","))}function sl(n){return r([...n].sort().join(","))}function lE(n,e){return r(n.join(e??","))}function Fr(n){return r(n)}function R$(n,e){return e?Fr(n):void 0}function Kca(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Fr(n):S("none")}function Yge(n,e){return e?Fr(n):S("custom")}function Xge(n){return Yge(n.agentType,n.source==="built-in")}function pNo(n,e){return e?Fr(n):S("third-party")}
export{S,f,fe,Gs,ove,Rh,fNo,sl,lE,Fr,R$,Kca,Yge,Xge,pNo};
