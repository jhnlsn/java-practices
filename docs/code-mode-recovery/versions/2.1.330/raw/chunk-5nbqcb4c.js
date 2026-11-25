// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ke}from"/$bunfs/root/chunk-hn3cwwzt.js";import{yt}from"/$bunfs/root/chunk-rb36kwbn.js";var r=new Set([ke,yt]);function PKe(e){return r.has(e)}function zba(e,n){return PKe(e)?e:n}function tMt(e){return e===yt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function LF(e){return e.isMcp!==!0&&PKe(e.name)}
export{PKe,zba,tMt,LF};
