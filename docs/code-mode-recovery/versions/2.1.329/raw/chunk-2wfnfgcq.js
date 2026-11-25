// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Hde,boe,Jke}from"/$bunfs/root/chunk-bm63fq13.js";import"/$bunfs/root/chunk-kkreczz4.js";import{Ye}from"/$bunfs/root/chunk-x3fg13na.js";var t=Ye(Hde()),e=Ye(boe()),o=Ye(Jke());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/x-protobuf"}),e.ProtobufLogsSerializer))}}export{r as OTLPLogExporter};
