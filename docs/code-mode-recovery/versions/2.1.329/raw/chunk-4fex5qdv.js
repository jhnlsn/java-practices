// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{$e}from"/$bunfs/root/chunk-cqahc80t.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";class FJe{#e=!1;#t=$e();get settled(){return this.#e}settle(){if(this.#e)return;this.#e=!0;try{this.#t.emit()}catch(e){t(`CountedAsk: a listener threw while the request settled: ${String(e)}`,{level:"error"})}this.#t.clear()}settleWhen(e){e.then(()=>this.settle(),()=>this.settle())}onSettle(e){return this.#t.subscribe(e)}}class x2s{#e=new Map;#t=0;#i=$e();subscribe=(e)=>this.#i.subscribe(e);join(e){if(e.settled||this.#e.has(e))return;this.#e.set(e,e.onSettle(()=>this.#s(e))),this.#i.emit()}positionLabel(e){if(!this.#e.has(e))return null;let i=this.#t+this.#e.size;return i<2?null:`${this.#t+1} of ${i}`}#s(e){let i=this.#e.get(e);if(i===void 0)return;i(),this.#e.delete(e),this.#t=this.#e.size===0?0:this.#t+1,this.#i.emit()}}
export{FJe,x2s};
