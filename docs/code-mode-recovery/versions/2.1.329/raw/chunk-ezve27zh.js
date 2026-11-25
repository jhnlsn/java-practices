// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{qG}from"/$bunfs/root/chunk-n1bv3p79.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var d=["take_in"];class r{visitors=new Map}var l=new qe(()=>new r);function a(o){try{return o.pending()===!0}catch{return!1}}function ppa(o){let e=l.peek(o)?.visitors;return e!==void 0&&[...e.values()].some(a)}async function mpa(o,e){let n=l.peek(o)?.visitors;if(n===void 0)return;let p=(async()=>{for(let s of d){let i=n.get(s);if(i!==void 0&&!qG(e)&&a(i))try{await i.visit(e)}catch{}}})();if(qG(e))return;let t=()=>{},c=new Promise((s)=>{t=()=>s()});e.addEventListener("abort",t,{once:!0});try{await Promise.race([p,c])}finally{e.removeEventListener("abort",t)}}
export{ppa,mpa};
