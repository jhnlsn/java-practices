// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ai}from"/$bunfs/root/chunk-cbnm4p23.js";import{Be}from"/$bunfs/root/chunk-69qhefwa.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var t="repl-ask-declined",qGo=new DOMException(t,"AbortError");function nYt(e){return e.aborted&&Ai(e.reason)===t}class o{#e=0;#t=Be();subscribe=(e)=>this.#t.subscribe(e);getSnapshot=()=>this.#e>0;hold(){if(this.#e++,this.#e===1)this.#t.emit();let e=!1;return()=>{if(e)return;if(e=!0,this.#e--,this.#e===0)this.#t.emit()}}}var u4s=new ze(()=>new o);
export{qGo,nYt,u4s};
