// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ir,si}from"/$bunfs/root/chunk-8bkqeb5d.js";import{ye,H,mo,I,G}from"/$bunfs/root/chunk-bs4h6795.js";G();var v7n=800;function nue(t,c,u,s=v7n){let n=ir(),o=si(),f=I(0),e=I(void 0),l=mo(()=>t(!1)),r=ye(()=>{if(e.current)e.current(),e.current=void 0},[]);return H(()=>()=>{if(e.current)r(),l()},[r]),ye(()=>{let i=o();if(i-f.current<=s&&e.current!==void 0)r(),t(!1),c();else u?.(),t(!0),r(),e.current=n.setTimeout(()=>{t(!1),e.current=void 0},s);f.current=i},[t,c,u,r,n,o,s])}
export{v7n,nue};
