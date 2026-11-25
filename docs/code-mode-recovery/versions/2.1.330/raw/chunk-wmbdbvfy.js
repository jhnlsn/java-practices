// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{X}from"/$bunfs/root/chunk-74h6kcya.js";import{pPl,xE,jt}from"/$bunfs/root/chunk-865at33z.js";import{Jz}from"/$bunfs/root/chunk-fdqz9r50.js";import{Gu}from"/$bunfs/root/chunk-px0bhkvr.js";import{mdr,Fyt}from"/$bunfs/root/chunk-bzyb60p0.js";import{H,re,nb,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function t(){let[o,e]=nb((i)=>i+1,0);return H(()=>pPl(e),[]),o}function qUo(o,e){return mdr(o)??mdr(e)??xE()}function PF(o){return jt(qUo(o.mainLoopModelForSession,o.mainLoopModel))}function wIt(){let o=X((n)=>n.mainLoopModel),e=X((n)=>n.mainLoopModelForSession),i=Jz(),s=t(),r=Gu();return re(()=>Fyt(e,o),[e,o,i,r,s])}function xmt(){let o=X((n)=>n.mainLoopModel),e=X((n)=>n.mainLoopModelForSession),i=Jz(),s=t(),r=Gu();return re(()=>qUo(e,o),[e,o,i,r,s])}function Rf(){let o=X((n)=>n.mainLoopModel),e=X((n)=>n.mainLoopModelForSession),i=Jz(),s=t(),r=Gu();return re(()=>PF({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,i,r,s])}
export{qUo,PF,wIt,xmt,Rf};
