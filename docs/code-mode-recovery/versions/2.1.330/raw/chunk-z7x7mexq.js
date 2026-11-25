// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ve}from"/$bunfs/root/chunk-zhr7rpv7.js";import{OAo,wa,tr}from"/$bunfs/root/chunk-865at33z.js";var r=86400000,n=3*r;function EBr(){if(ve()!=="firstParty"||!wa())return null;let e=tr();if(!e?.refreshToken||!OAo(e.refreshTokenExpiresAt))return null;let t=e.refreshTokenExpiresAt;if(typeof e.expiresAt==="number"&&e.expiresAt>t+n)return null;return new Date(t)}function zbn(){let e=EBr();if(e===null)return null;let t=e.getTime()-Date.now();if(t>n||t<=0)return null;return{daysLeft:Math.ceil(t/r)}}
export{EBr,zbn};
