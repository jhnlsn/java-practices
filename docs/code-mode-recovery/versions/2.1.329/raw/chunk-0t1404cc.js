// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{KHt,nte}from"/$bunfs/root/chunk-cnnwpgh2.js";import{Ase,Mve,r$e}from"/$bunfs/root/chunk-x22z2cw5.js";var c=["shift+up","shift+down","ctrl+="].map(Ase);function B4t(s,o){let t=Mve(s,"Chat",o),e=t.at(-1)??null,r=KHt()??"",n=nte()!==null||/^(tmux|screen|ssh-session)/.test(r);if(!n&&r!=="Apple_Terminal")return e;return t.findLast((i)=>!i.some((f)=>c.some((a)=>r$e(a,f))))??(n?e:null)}
export{B4t};
