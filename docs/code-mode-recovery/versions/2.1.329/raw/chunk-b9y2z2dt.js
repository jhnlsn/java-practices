// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ue}from"/$bunfs/root/chunk-ex299d27.js";function n4t(e){if(ue()){let s=new Date().toISOString();return e.flatMap((t)=>(t.pollEvent?.displayRows??[]).map((a)=>({...a,timestamp:s})))}return[]}
export{n4t};
