// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Je,$s}from"/$bunfs/root/chunk-0b3aev3g.js";import{Egn,m4,Ea,hNs}from"/$bunfs/root/chunk-wz8vy3bj.js";import{lko}from"/$bunfs/root/chunk-050v0fjh.js";import{Nu,bo}from"/$bunfs/root/chunk-4hvh0e00.js";import{TN}from"/$bunfs/root/chunk-8fw1yms5.js";import{P,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function h9(s=()=>!0,u=!0){TN(u);let i=Nu(),e=P(Date.now()+lko()),t=$s(),a=Je(),{refusedWithin:f,noteRefused:c}=bo(),{refusedWithin:m,noteRefused:p}=bo();function d(n=!1,l=!1,R=Egn){let r=Date.now()<e.current;if(r)e.current=Date.now();let I=Math.max(i(),e.current),o=r&&(n||a)||hNs(t,Egn)||Ea(t,I,R);if(o||l||!s()||f()||m(m4)){if(c(),o||n)p();return!0}return!1}return{refuseInput:d}}
export{h9};
