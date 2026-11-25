// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{cH}from"/$bunfs/root/chunk-8bkqeb5d.js";import{H,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function Dv(o,c,u=!1){H(()=>{let n=o.current;if(!n)return;let e=cH(n);if(!c){if(u&&e.activeElement===n)e.blur();return}return e.focus(n),e.subscribe(()=>{let t=o.current;if(!t||e.activeElement===t)return;if(!e.activeElement){e.focus(t);return}let r=t.parentNode;while(r){if(r===e.activeElement){e.focus(t);return}r=r.parentNode}})},[c,o,u])}
export{Dv};
