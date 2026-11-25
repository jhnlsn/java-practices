// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p5r}from"/$bunfs/root/chunk-49v4znp9.js";import{cie,iTe}from"/$bunfs/root/chunk-psv74hq2.js";import"/$bunfs/root/chunk-rwh01902.js";import{rt}from"/$bunfs/root/chunk-w1d7ygsk.js";var o=rt(p5r()),p=rt(cie()),r=rt(iTe());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
