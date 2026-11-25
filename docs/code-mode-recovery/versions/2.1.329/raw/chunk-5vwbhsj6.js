// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Dks}from"/$bunfs/root/chunk-0dbf4486.js";import{Kat}from"/$bunfs/root/chunk-zryj96fm.js";import{olt}from"/$bunfs/root/chunk-pvk49ays.js";var{ceil:i,max:a}=Math;function m(t,e,r){if(r?Kat(t,e,r):e===void 0)e=1;else e=a(Dks(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];var l=0,f=0,o=Array(i(n/e));while(l<n)o[f++]=olt(t,l,l+=e);return o}var _Ze=m;
export{_Ze};
