// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ane}from"/$bunfs/root/chunk-aq3ms068.js";import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{xse}from"/$bunfs/root/chunk-44sty588.js";import{E,c,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var o=60000,r=1800000,t=2592000000,i=p(()=>c({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(xse.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(xse.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function rX(){let n=Ane("tengu_kairos_cron_config",xse,o),e=i().safeParse(n);return e.success?e.data:xse}
export{rX};
