// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Hi}from"/$bunfs/root/chunk-h0d9e7j8.js";import{$e}from"/$bunfs/root/chunk-cqahc80t.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var t="repl-ask-declined",jBs=new DOMException(t,"AbortError");function myn(e){return e.aborted&&Hi(e.reason)===t}class o{#e=0;#t=$e();subscribe=(e)=>this.#t.subscribe(e);getSnapshot=()=>this.#e>0;hold(){if(this.#e++,this.#e===1)this.#t.emit();let e=!1;return()=>{if(e)return;if(e=!0,this.#e--,this.#e===0)this.#t.emit()}}}var GBs=new qe(()=>new o);
export{jBs,myn,GBs};
