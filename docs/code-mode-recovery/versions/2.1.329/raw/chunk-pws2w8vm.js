// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hn,b,BWt,Cm}from"/$bunfs/root/chunk-aq3ms068.js";import{vL,lwt,sSr}from"/$bunfs/root/chunk-fgc0k4tn.js";var aJe="tengu_violin_willow";function bNr(){try{let{value:e,source:o}=hn(aJe,!1);return Cm(o)?e===!0:void 0}catch{return}}function ZRt(){try{return b(aJe,!1)}catch{return!1}}function Mze(){return sSr()&&bNr()===!0}function Sut({cloudClient:e}){if(lwt())return"tengu_violin_wood";return e&&bNr()===!1?aJe:void 0}async function gFs({cloudClient:e}){try{return await vL()&&(!e||await BWt(aJe))}catch{return!1}}
export{aJe,bNr,ZRt,Mze,Sut,gFs};
