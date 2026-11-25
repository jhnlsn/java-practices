// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{b}from"/$bunfs/root/chunk-865at33z.js";import{wt}from"/$bunfs/root/chunk-k449cc64.js";import{Lee}from"/$bunfs/root/chunk-2yx6c1y2.js";function v0t(){return b("tengu_toasty_phoenix",!1)}function Tii(){return Lee("remoteMessageReceipts").find(({source:e,value:t})=>e!=="flagSettings"||t==="off")}function Isr(){return Tii()?.value??"on"}function zRn(){return v0t()&&!wt()&&Isr()!=="off"}
export{v0t,Tii,Isr,zRn};
