// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{yoe}from"/$bunfs/root/chunk-865at33z.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{Eae}from"/$bunfs/root/chunk-0kyr8hth.js";import{E,c,B}from"/$bunfs/root/chunk-adx6804h.js";B();var o=60000,r=1800000,t=2592000000,i=p(()=>c({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(Eae.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(Eae.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function yW(){let n=yoe("tengu_kairos_cron_config",Eae,o),e=i().safeParse(n);return e.success?e.data:Eae}
export{yW};
