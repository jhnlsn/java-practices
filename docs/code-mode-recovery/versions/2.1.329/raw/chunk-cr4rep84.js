// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Hde,boe,Jke}from"/$bunfs/root/chunk-bm63fq13.js";import"/$bunfs/root/chunk-kkreczz4.js";import{Ye}from"/$bunfs/root/chunk-x3fg13na.js";var e=Ye(Hde()),o=Ye(boe()),r=Ye(Jke());class t extends e.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/x-protobuf"}),o.ProtobufTraceSerializer))}}export{t as OTLPTraceExporter};
