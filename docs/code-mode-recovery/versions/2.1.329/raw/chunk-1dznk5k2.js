// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var edi=["You've hit your","You've reached your","You're out of usage credits","Your org is out of usage \xB7 add funds to continue","Your org is out of usage \xB7 contact your admin","Your seat type doesn't include usage credits","Your seat type doesn't include usage","Your usage allocation has been disabled by your admin","Your group's usage limit is set to $0","Fable 5 requires usage credits","You're out of extra usage","Your seat type doesn't include extra usage"],tdi=[/^(?:Fable|Haiku|Mythos|Opus|Sonnet)(?: [^\u00B7\n]{1,40})? requires usage credits\./];function ndi(o){return edi.some((e)=>o.startsWith(e))||tdi.some((e)=>e.test(o))}var kGa=["This service is disabled for your org"],EGa=["You've used","You're close to"],vGa=["You're now using usage credits","You're now using your usage allocation","Now using your usage allocation","Now using usage credits","Now using credits","You're now using extra usage","Now using extra usage"];
export{edi,tdi,ndi,kGa,EGa,vGa};
