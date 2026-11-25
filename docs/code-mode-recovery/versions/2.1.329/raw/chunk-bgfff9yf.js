// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{wt}from"/$bunfs/root/chunk-ht6e56zb.js";import{XQ}from"/$bunfs/root/chunk-pxy9yt8m.js";function fIt(){return b("tengu_toasty_phoenix",!1)}function TXs(){return XQ("remoteMessageReceipts").find(({source:e,value:t})=>e!=="flagSettings"||t==="off")}function jQn(){return TXs()?.value??"on"}function rEn(){return fIt()&&!wt()&&jQn()!=="off"}
export{fIt,TXs,jQn,rEn};
