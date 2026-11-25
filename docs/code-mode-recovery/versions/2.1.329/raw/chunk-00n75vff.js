// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ce}from"/$bunfs/root/chunk-05v7tzw3.js";import{St}from"/$bunfs/root/chunk-5ghdkswv.js";var r=new Set([Ce,St]);function Ize(e){return r.has(e)}function Sda(e,n){return Ize(e)?e:n}function QRt(e){return e===St?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function PN(e){return e.isMcp!==!0&&Ize(e.name)}
export{Ize,Sda,QRt,PN};
