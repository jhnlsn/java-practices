// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{L7n}from"/$bunfs/root/chunk-fb37em01.js";import{Hde,boe}from"/$bunfs/root/chunk-bm63fq13.js";import"/$bunfs/root/chunk-kkreczz4.js";import{F}from"/$bunfs/root/chunk-x3fg13na.js";var s=F(function(p){Object.defineProperty(p,"__esModule",{value:!0});p.OTLPTraceExporter=void 0;var e=L7n(),t=boe(),o=Hde();class c extends o.OTLPExporterBase{constructor(u={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u,"TRACES"),t.ProtobufTraceSerializer,"TraceExportService","/opentelemetry.proto.collector.trace.v1.TraceService/Export"))}}p.OTLPTraceExporter=c});var l=F(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPTraceExporter=void 0;var i=s();Object.defineProperty(r,"OTLPTraceExporter",{enumerable:!0,get:function(){return i.OTLPTraceExporter}})});export default l();
