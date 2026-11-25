// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{hia}from"/$bunfs/root/chunk-f9x2f6cx.js";import{nd}from"/$bunfs/root/chunk-x7880gvk.js";function iKs(e){if(e)nd.terminalFocusGainedAt=Date.now();if(!e&&nd.terminalFocus==="blurred")return;nd.terminalFocus=e?"focused":"blurred",hia(e),nd.terminalFocusChanged.emit()}function zIe(){return nd.terminalFocus!=="blurred"}function Nve(){return nd.terminalFocus}function YGr(){return nd.terminalFocusGainedAt}function aet(e){return nd.terminalFocusChanged.subscribe(e)}
export{iKs,zIe,Nve,YGr,aet};
