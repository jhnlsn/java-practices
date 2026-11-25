// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{wnr}from"/$bunfs/root/chunk-t2eveqgh.js";import{vue,cie}from"/$bunfs/root/chunk-psv74hq2.js";import"/$bunfs/root/chunk-rwh01902.js";import{V}from"/$bunfs/root/chunk-w1d7ygsk.js";var u=V(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.OTLPLogExporter=void 0;var e=wnr(),t=cie(),o=vue();class p extends o.OTLPExporterBase{constructor(L={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L,"LOGS"),t.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}s.OTLPLogExporter=p});var n=V(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPLogExporter=void 0;var i=u();Object.defineProperty(r,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
