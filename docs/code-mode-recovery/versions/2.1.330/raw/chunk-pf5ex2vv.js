// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{GOs}from"/$bunfs/root/chunk-7e1w6rv3.js";import{gut}from"/$bunfs/root/chunk-6mfepmbb.js";import{Rut}from"/$bunfs/root/chunk-qwbhh2k3.js";var{ceil:i,max:a}=Math;function m(t,e,r){if(r?gut(t,e,r):e===void 0)e=1;else e=a(GOs(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];var l=0,f=0,o=Array(i(n/e));while(l<n)o[f++]=Rut(t,l,l+=e);return o}var fnt=m;
export{fnt};
