// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ee}from"/$bunfs/root/chunk-7cfjrnwy.js";import{Jve}from"/$bunfs/root/chunk-7ft50mzy.js";import{OT,tb}from"/$bunfs/root/chunk-ed372ykp.js";var l=200,c="started by Claude";function q5s(e,{description:r,toolUseId:a,abortController:s,shownToHost:t=!1}){let o=Jve(r,l)||c,i=ee(o,l),n=OT("local_script"),p={...tb(n,"local_script",i.length<o.length?`${i}\u2026`:o,a),type:"local_script",status:"running",outputFile:"",abortController:s,...t&&{shownToHost:t}};return e.register(p),n}var VYl={async kill(e,r,a,s){let t=r.get(e);if(t?.type!=="local_script"||t.status!=="running")return;t.abortController?.abort(s)}};
export{q5s,VYl};
