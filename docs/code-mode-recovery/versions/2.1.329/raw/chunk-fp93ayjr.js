// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ie}from"/$bunfs/root/chunk-b03afx74.js";import{gzipSync as r}from"zlib";var i="bot_protected_tengu_sparkling_pike",s=/^[\x20\x22\x23\x25-\x5b\x5d-\x7e]*$/,o=/^\/(?:.*\/)?(?:bash|zsh)$/;function RXs(t){return o.test(t)}function nMa(t,e){let n=`cd ${t} && env ${e}`;return yqr(n)?`cd ${t} && exec env ${e}`:n}function rMa(t,e=t,n){if(!yqr(e))return[t];return[n!==void 0&&RXs(n)?n:"/bin/sh","-c",t]}function oMa(t){if(!yqr(t))return t;return`/bin/sh -c 'eval "\`printf %s ${r(t).toString("base64")} | /usr/bin/base64 --decode| /usr/bin/gunzip\`"'`}function yqr(t){return!s.test(t)&&Ie(i,{safe:!0})}
export{RXs,nMa,rMa,oMa,yqr};
