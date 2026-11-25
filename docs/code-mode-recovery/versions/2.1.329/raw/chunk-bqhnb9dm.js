// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hR}from"/$bunfs/root/chunk-ca90c7br.js";import{nt,h1}from"/$bunfs/root/chunk-m55722gg.js";function o(n){return h1(nt(n,".")," ")}function Z0i(n){return/^con(in|out)\$$/i.test(o(n))}var e=/[<>"|?*\\\x00-\x1f]/;function Ful(n){return n.split("/").some((t)=>e.test(t))}function msn(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||hR(o(t))||Z0i(t))}var i=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function r(n){return h1(nt(n,":"),". ")}var s=/:|[. ](?:\/|$)/;function Uul(n){return s.test(n)?[n.split("/").map(r).filter((t)=>t!=="").join("/")]:[]}function lyr(n){return n.split("/").some((t)=>i.test(r(t)))}
export{Z0i,Ful,msn,Uul,lyr};
