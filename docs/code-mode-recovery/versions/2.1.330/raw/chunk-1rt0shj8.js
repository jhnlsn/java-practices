// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";function Ip(e,o,r={},u="debug"){let n=e===void 0?"[remote-tools]":`[remote-tools call=${e}]`,g=Object.entries(r).flatMap(([l,i])=>i===void 0?[]:[`${l}=${i}`]).join(" ");t(g===""?`${n} ${o}`:`${n} ${o} ${g}`,{level:u})}function snr(e){return e==="outcome_of"?"verbose":"debug"}
export{Ip,snr};
