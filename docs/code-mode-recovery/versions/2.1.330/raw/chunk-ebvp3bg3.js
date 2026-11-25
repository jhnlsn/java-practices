// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{to}from"/$bunfs/root/chunk-865at33z.js";import{Xre,HTt,Jre}from"/$bunfs/root/chunk-5nf47kr4.js";function WIa(o,i,e){to().bundledWorkflows.push({source:"built-in",...i,script:o,disableModelInvocation:e?.disableModelInvocation})}function Ger(){if(Xre())return[];let o=to().bundledWorkflows;if(HTt())return o.filter((i)=>!Jre(i.name));return o}
export{WIa,Ger};
