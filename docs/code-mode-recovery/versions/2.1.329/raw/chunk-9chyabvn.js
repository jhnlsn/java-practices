// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{n,c,je,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var r=p(()=>je([c({v:v(1),state:n()}),c({v:v(2),engine:v("bridge")})]));function Rna(e,o){if(e===void 0||e===null)return typeof o==="object"&&o!==null?"none":"unstated";let t=r().safeParse(e);if(!t.success)return"unreadable";if(t.data.v===2)return"bridge";switch(t.data.state){case"connected":case"requested":case"detached":return t.data.state;default:return"other_state"}}function DGe(e){return e==="none"||e==="bridge"||e==="this_helper"}
export{Rna,DGe};
