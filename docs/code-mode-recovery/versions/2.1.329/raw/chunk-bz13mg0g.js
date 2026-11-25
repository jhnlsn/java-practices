// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{$e}from"/$bunfs/root/chunk-cqahc80t.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";class e{#e={credentialsPersisted:0,loginCompleted:0};#t=$e();subscribe=(t)=>this.#t.subscribe(t);getSnapshot=()=>this.#e;credentialsPersisted(){this.#e={...this.#e,credentialsPersisted:this.#e.credentialsPersisted+1},this.#t.emit()}loginCompleted(){this.#e={...this.#e,loginCompleted:this.#e.loginCompleted+1},this.#t.emit()}}var YZ=new qe(()=>new e);
export{YZ};
