// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_hs}from"/$bunfs/root/chunk-qsd8sbe8.js";var K7n=2,i={width:43,height:33},o=1024;function q7n(d,t){if(d!=="kitty"||t===void 0)return;let e=K7n*t.height,n=Math.ceil(i.width*Math.floor(e/i.height)/t.width),h=n*t.width;return e>=i.height&&Math.max(h,e)<=o&&n<=_hs?{columns:n,width:h,height:e}:void 0}
export{K7n,q7n};
