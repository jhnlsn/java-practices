// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ot,Cl,Hn}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Ss}from"/$bunfs/root/chunk-zhr7rpv7.js";import{Rt,Sn,or,LC,Qt}from"/$bunfs/root/chunk-865at33z.js";import{wx,HO}from"/$bunfs/root/chunk-bzyb60p0.js";import{oqr}from"/$bunfs/root/chunk-jaq5v1tn.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function aMe(){return Rt()&&Sn()?.billingType!=="usage_based"&&Ss()&&Cl()&&!Hn()&&!Qt()}function vHt(e){return aMe()&&wx(e)&&e.rateLimitType==="five_hour"}var i=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function her(e){return aMe()&&wx(e)&&e.rateLimitType!==void 0&&i.includes(e.rateLimitType)}function pqe(){return oqr(or(),LC())}function a7t(){HO({agentId:ot(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{aMe,vHt,her,pqe,a7t};
