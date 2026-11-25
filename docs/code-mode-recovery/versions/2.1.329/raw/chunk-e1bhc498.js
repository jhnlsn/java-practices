// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ee}from"/$bunfs/root/chunk-cd3hqxcc.js";import{kSo,Sa,Zn}from"/$bunfs/root/chunk-aq3ms068.js";var r=86400000,n=3*r;function QHr(){if(Ee()!=="firstParty"||!Sa())return null;let e=Zn();if(!e?.refreshToken||!kSo(e.refreshTokenExpiresAt))return null;let t=e.refreshTokenExpiresAt;if(typeof e.expiresAt==="number"&&e.expiresAt>t+n)return null;return new Date(t)}function ohn(){let e=QHr();if(e===null)return null;let t=e.getTime()-Date.now();if(t>n||t<=0)return null;return{daysLeft:Math.ceil(t/r)}}
export{QHr,ohn};
