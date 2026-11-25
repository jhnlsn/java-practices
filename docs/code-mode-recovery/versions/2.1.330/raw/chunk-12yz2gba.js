// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{wnr}from"/$bunfs/root/chunk-t2eveqgh.js";import{vue,cie}from"/$bunfs/root/chunk-psv74hq2.js";import"/$bunfs/root/chunk-rwh01902.js";import{V}from"/$bunfs/root/chunk-w1d7ygsk.js";var s=V(function(p){Object.defineProperty(p,"__esModule",{value:!0});p.OTLPTraceExporter=void 0;var e=wnr(),t=cie(),o=vue();class c extends o.OTLPExporterBase{constructor(u={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u,"TRACES"),t.ProtobufTraceSerializer,"TraceExportService","/opentelemetry.proto.collector.trace.v1.TraceService/Export"))}}p.OTLPTraceExporter=c});var l=V(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPTraceExporter=void 0;var i=s();Object.defineProperty(r,"OTLPTraceExporter",{enumerable:!0,get:function(){return i.OTLPTraceExporter}})});export default l();
