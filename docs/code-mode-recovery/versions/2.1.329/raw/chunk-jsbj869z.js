// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var CMl=0.25;function Tc({attempt:o,baseMs:a,capMs:i=1/0,factor:m=2,jitter:n={kind:"symmetric",ratio:0.25},random:t=Math.random}){let r=Math.min(i,a*m**(o-1));switch(n.kind){case"none":return r;case"proportional":return r+t()*n.ratio*r;case"symmetric":return Math.max(0,r+r*n.ratio*(2*t()-1));case"full":{let e=Math.min(n.floorMs,r);return e+t()*(r-e)}}}
export{CMl,Tc};
