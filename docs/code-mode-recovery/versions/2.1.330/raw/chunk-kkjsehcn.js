// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Be}from"/$bunfs/root/chunk-69qhefwa.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";class e{#e={credentialsPersisted:0,loginCompleted:0};#t=Be();subscribe=(t)=>this.#t.subscribe(t);getSnapshot=()=>this.#e;credentialsPersisted(){this.#e={...this.#e,credentialsPersisted:this.#e.credentialsPersisted+1},this.#t.emit()}loginCompleted(){this.#e={...this.#e,loginCompleted:this.#e.loginCompleted+1},this.#t.emit()}}var xte=new ze(()=>new e);
export{xte};
