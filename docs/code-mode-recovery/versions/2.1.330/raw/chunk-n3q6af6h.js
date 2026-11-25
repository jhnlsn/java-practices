// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{T}from"/$bunfs/root/chunk-ma3kja9f.js";function kSa(e,l){let t=new Map,o=[];if(e===void 0||e===null)return{manifests:t,malformedField:!1,malformedServerNames:o};if(!T(e))return{manifests:t,malformedField:!0,malformedServerNames:o};for(let r of l){if(!Object.hasOwn(e,r))continue;let n=e[r],s=T(n)?n.initializeResult:void 0,i=T(n)&&n.toolsListResult!==null?n.toolsListResult:void 0;if(T(s)&&(i===void 0||T(i)))t.set(r,i===void 0?{initializeResult:s}:{initializeResult:s,toolsListResult:i});else o.push(r)}return{manifests:t,malformedField:!1,malformedServerNames:o}}var d="notifications/tools/list_changed";function Pjr(e){return T(e)&&!("id"in e)&&e.method===d}
export{kSa,Pjr};
