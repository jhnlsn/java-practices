// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Se,zS,st,iE}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Ko,yp}from"/$bunfs/root/chunk-xzvhvaa2.js";import{_e,kK}from"/$bunfs/root/chunk-2yx6c1y2.js";import{Ere}from"/$bunfs/root/chunk-63s07fe6.js";function W0e(){if(st())return!1;return Ko().some((e)=>!yp.has(e)&&_e(e)?.permissions?.denyInsteadOfPrompting===!0)||kK().some((e)=>e.permissions?.denyInsteadOfPrompting===!0)}function Ayo(e){let o=W0e();if(o===(e.denyInsteadOfPrompting===!0))return e;return{...e,denyInsteadOfPrompting:o,shouldAvoidPermissionPrompts:o||e.avoidsPromptsByNature===!0}}function l1i(){if(iE().length>0&&Se())return!1;if(Se()&&!Ere(zS()))return!1;return!0}function F7(){return!W0e()&&l1i()}
export{W0e,Ayo,l1i,F7};
