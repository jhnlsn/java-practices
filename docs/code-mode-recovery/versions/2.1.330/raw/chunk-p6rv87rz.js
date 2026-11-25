// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{lx}from"/$bunfs/root/chunk-z6pfqf6e.js";import{nt,pP}from"/$bunfs/root/chunk-7cfjrnwy.js";function o(n){return pP(nt(n,".")," ")}function Aji(n){return/^con(in|out)\$$/i.test(o(n))}var r=/[<>"|?*\\\x00-\x1f]/;function AEl(n){return n.split("/").some((t)=>r.test(t))}function Gcn(n){return n.split("/").some((t)=>t.includes(":")||t.endsWith(".")||t.endsWith(" ")||lx(o(t))||Aji(t))}var e=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function tks(n){return pP(nt(n,":"),". ")}var i=/:|[. ](?:\/|$)/;function REl(n){return i.test(n)?[n.split("/").map(tks).filter((t)=>t!=="").join("/")]:[]}function TTr(n){return n.split("/").some((t)=>e.test(tks(t)))}
export{Aji,AEl,Gcn,tks,REl,TTr};
