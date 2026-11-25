// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{R7}from"/$bunfs/root/chunk-92tjbk8v.js";import{Rme,wo,azt,Vo}from"/$bunfs/root/chunk-hvmyx60a.js";import{Ame}from"/$bunfs/root/chunk-v1zrxgrn.js";function zlt(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",YPl={github:wo,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function lD(r){if(r=zlt(r),Vo(r))return"github";let t=azt(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function ULe(r){let t=r.trim();if(Rme(t)||R7(t)||Ame(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function mxr(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!R7(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{zlt,YPl,lD,ULe,mxr};
