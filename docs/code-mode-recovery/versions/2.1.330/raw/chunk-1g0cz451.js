// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ke}from"/$bunfs/root/chunk-865at33z.js";import{IGr}from"/$bunfs/root/chunk-5f9jkxad.js";function hIe({newState:e,oldState:t},n,s,p){if(IGr({newState:e,oldState:t},n,void 0,s,p),e.expandedView!==t.expandedView){let a=e.expandedView==="tasks";Ke((o)=>{if(o.showExpandedTodos===a)return o;return{...o,showExpandedTodos:a}},s)}}
export{hIe};
