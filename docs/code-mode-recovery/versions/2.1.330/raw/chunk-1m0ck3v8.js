// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_J}from"/$bunfs/root/chunk-sah8dzn4.js";import{Rge,Vr,Qqt,Ro}from"/$bunfs/root/chunk-43nz5n02.js";import{Age}from"/$bunfs/root/chunk-73gwqz1r.js";function _ft(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",tBl={github:Vr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function AI(r){if(r=_ft(r),Ro(r))return"github";let t=Qqt(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function o1e(r){let t=r.trim();if(Rge(t)||_J(t)||Age(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function z0r(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!_J(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{_ft,tBl,AI,o1e,z0r};
