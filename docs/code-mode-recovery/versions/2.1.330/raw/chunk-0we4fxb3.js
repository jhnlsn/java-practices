// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{vue,cie,iTe}from"/$bunfs/root/chunk-psv74hq2.js";import"/$bunfs/root/chunk-rwh01902.js";import{rt}from"/$bunfs/root/chunk-w1d7ygsk.js";var t=rt(vue()),o=rt(cie()),r=rt(iTe());class e extends t.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/json"}),o.JsonTraceSerializer))}}export{e as OTLPTraceExporter};
