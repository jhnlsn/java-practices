// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{vue,cie,iTe}from"/$bunfs/root/chunk-psv74hq2.js";import"/$bunfs/root/chunk-rwh01902.js";import{rt}from"/$bunfs/root/chunk-w1d7ygsk.js";var t=rt(vue()),e=rt(cie()),o=rt(iTe());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/x-protobuf"}),e.ProtobufLogsSerializer))}}export{r as OTLPLogExporter};
