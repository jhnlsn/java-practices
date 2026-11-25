// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Se,_S,at,Fv}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Wo,tp}from"/$bunfs/root/chunk-jngxzq9c.js";import{ye,c7}from"/$bunfs/root/chunk-pxy9yt8m.js";import{Pte}from"/$bunfs/root/chunk-fazeggk5.js";function l0e(){if(at())return!1;return Wo().some((e)=>!tp.has(e)&&ye(e)?.permissions?.denyInsteadOfPrompting===!0)||c7().some((e)=>e.permissions?.denyInsteadOfPrompting===!0)}function Mlo(e){let o=l0e();if(o===(e.denyInsteadOfPrompting===!0))return e;return{...e,denyInsteadOfPrompting:o,shouldAvoidPermissionPrompts:o||e.avoidsPromptsByNature===!0}}function sAi(){if(Fv().length>0&&Se())return!1;if(Se()&&!Pte(_S()))return!1;return!0}function Z8(){return!l0e()&&sAi()}
export{l0e,Mlo,sAi,Z8};
