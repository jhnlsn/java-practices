// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{yon}from"/$bunfs/root/chunk-a62n9qnb.js";import{randomBytes as o}from"crypto";import{hostname as s}from"os";var i=/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,a=/^[A-Za-z]{1,64}$/,c=/^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/\d{1,4}$/,m=8,I=64,p=9999,r={hostname:s,randomHex:(t)=>o(t).toString("hex")};function Psa(t=r){return`dev-${t.randomHex(m)}`}function Zmn(t=r){let[e=""]=t.hostname().split(".");return yon(e,I)}function Osa(t,e,n){if(!i.test(t)||!a.test(e)||!Number.isInteger(n)||n<0||n>p)throw Error("cannot form a device hook id from these inputs");return`${t}/${e}/${n}`}function qGe(t){let e=c.exec(t);return e?{instanceId:e[1],event:e[2]}:null}
export{Psa,Zmn,Osa,qGe};
