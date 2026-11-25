// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{P7i}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Ll}from"/$bunfs/root/chunk-rs1ryynt.js";function YUs(e){if(e)Ll.terminalFocusGainedAt=Date.now();if(!e&&Ll.terminalFocus==="blurred")return;Ll.terminalFocus=e?"focused":"blurred",P7i(e),Ll.terminalFocusChanged.emit()}function HPe(){return Ll.terminalFocus!=="blurred"}function Ake(){return Ll.terminalFocus}function y1r(){return Ll.terminalFocusGainedAt}function gJe(e){return Ll.terminalFocusChanged.subscribe(e)}
export{YUs,HPe,Ake,y1r,gJe};
