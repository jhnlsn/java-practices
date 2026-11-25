// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{lvs}from"/$bunfs/root/chunk-0w2wb7gk.js";var Mnr=2,i={width:43,height:33},o=1024;function Hnr(d,t){if(d!=="kitty"||t===void 0)return;let e=Mnr*t.height,n=Math.ceil(i.width*Math.floor(e/i.height)/t.width),h=n*t.width;return e>=i.height&&Math.max(h,e)<=o&&n<=lvs?{columns:n,width:h,height:e}:void 0}
export{Mnr,Hnr};
