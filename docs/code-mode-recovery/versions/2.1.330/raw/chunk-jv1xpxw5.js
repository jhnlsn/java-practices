// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ue}from"/$bunfs/root/chunk-r3kja8v6.js";function qKe(e){if(ue()){let s=new Date().toISOString();return e.flatMap((t)=>(t.pollEvent?.displayRows??[]).map((a)=>({...a,timestamp:s})))}return[]}
export{qKe};
