// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{SGr}from"/$bunfs/root/chunk-vmwc2xd5.js";import{boe,Jke}from"/$bunfs/root/chunk-bm63fq13.js";import"/$bunfs/root/chunk-kkreczz4.js";import{Ye}from"/$bunfs/root/chunk-x3fg13na.js";var o=Ye(SGr()),p=Ye(boe()),r=Ye(Jke());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
