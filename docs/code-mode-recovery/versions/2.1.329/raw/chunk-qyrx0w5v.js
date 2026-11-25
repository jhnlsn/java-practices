// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{tr,$s}from"/$bunfs/root/chunk-0b3aev3g.js";import{_e,H,so,P,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();var c4n=800;function _de(t,c,u,s=c4n){let n=tr(),o=$s(),f=P(0),e=P(void 0),l=so(()=>t(!1)),r=_e(()=>{if(e.current)e.current(),e.current=void 0},[]);return H(()=>()=>{if(e.current)r(),l()},[r]),_e(()=>{let i=o();if(i-f.current<=s&&e.current!==void 0)r(),t(!1),c();else u?.(),t(!0),r(),e.current=n.setTimeout(()=>{t(!1),e.current=void 0},s);f.current=i},[t,c,u,r,n,o,s])}
export{c4n,_de};
