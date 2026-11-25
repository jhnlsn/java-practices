// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ot,Sl,On}from"/$bunfs/root/chunk-kgzzwvwc.js";import{gs}from"/$bunfs/root/chunk-cd3hqxcc.js";import{Ot,wn,dr,tC,Zt}from"/$bunfs/root/chunk-aq3ms068.js";import{TR,BP}from"/$bunfs/root/chunk-hg1yqkjk.js";import{qWr}from"/$bunfs/root/chunk-jctpesem.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function qPe(){return Ot()&&wn()?.billingType!=="usage_based"&&gs()&&Sl()&&!On()&&!Zt()}function TPt(e){return qPe()&&TR(e)&&e.rateLimitType==="five_hour"}var i=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function sYn(e){return qPe()&&TR(e)&&e.rateLimitType!==void 0&&i.includes(e.rateLimitType)}function y6e(){return qWr(dr(),tC())}function h3t(){BP({agentId:ot(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{qPe,TPt,sYn,y6e,h3t};
