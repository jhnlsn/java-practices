// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{K}from"/$bunfs/root/chunk-5appeerh.js";import{u}from"/$bunfs/root/chunk-cqa9hrgx.js";var o=5000,n=new WeakSet;function FUa(e){n.add(e)}function $Ua(e){return n.has(e)}var esr=Object.freeze({action:"cancel"});class Noi{#s;#i=0;#t=!1;#e=!1;#o=new Set;#n=new AbortController;#a;constructor(e){this.#a=e}set(e){if(e!==this.#s)this.#s=e,this.#a(e&&this.open,e)}open=()=>{if(this.#s==="off_screen"&&!this.#t)this.#t=!0,this.#n.abort(),u("mcp_task_question_reopen")};takeOpen(){let e=this.#t;if(this.#t=!1,e)this.#e=!1,this.#o.clear();return e}putAside(e){this.#e=!0,this.#o.add(e),this.set("off_screen")}updateHold(e){return this.#e=e.length>0&&(this.#e||e.some((t)=>this.#o.has(t))),this.#e}answered(){this.#i=Date.now()}graceLeftMs(){return this.#i+o-Date.now()}async sleep(e,t,s){if(await K(e,AbortSignal.any([t,this.#n.signal]),s),this.#n.signal.aborted)this.#n=new AbortController}}
export{FUa,$Ua,esr,Noi};
