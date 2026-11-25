// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";import{gzipSync as r}from"zlib";var i="bot_protected_tengu_sparkling_pike",s=/^[\x20\x22\x23\x25-\x5b\x5d-\x7e]*$/,o=/^\/(?:.*\/)?(?:bash|zsh)$/;function Rii(t){return o.test(t)}function RWa(t,e){let n=`cd ${t} && env ${e}`;return _Xr(n)?`cd ${t} && exec env ${e}`:n}function xWa(t,e=t,n){if(!_Xr(e))return[t];return[n!==void 0&&Rii(n)?n:"/bin/sh","-c",t]}function PWa(t){if(!_Xr(t))return t;return`/bin/sh -c 'eval "\`printf %s ${r(t).toString("base64")} | /usr/bin/base64 --decode| /usr/bin/gunzip\`"'`}function _Xr(t){return!s.test(t)&&Pe(i,{safe:!0})}
export{Rii,RWa,xWa,PWa,_Xr};
