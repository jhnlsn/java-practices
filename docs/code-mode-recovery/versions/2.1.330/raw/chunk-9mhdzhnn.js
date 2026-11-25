// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{gn,b,w6t,km}from"/$bunfs/root/chunk-865at33z.js";import{ON,Jvt,ECr}from"/$bunfs/root/chunk-t9k2xeez.js";var ZZe="tengu_violin_willow";function c2r(){try{let{value:e,source:o}=gn(ZZe,!1);return km(o)?e===!0:void 0}catch{return}}function nMt(){try{return b(ZZe,!1)}catch{return!1}}function OKe(){return ECr()&&c2r()===!0}function qmt({cloudClient:e}){if(Jvt())return"tengu_violin_wood";return e&&c2r()===!1?ZZe:void 0}async function t6s({cloudClient:e}){try{return await ON()&&(!e||await w6t(ZZe))}catch{return!1}}
export{ZZe,c2r,nMt,OKe,qmt,t6s};
