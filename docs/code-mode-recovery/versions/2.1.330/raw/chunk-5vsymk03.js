// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{f1t,Nne}from"/$bunfs/root/chunk-vw137skj.js";import{wae,zCe,EWe}from"/$bunfs/root/chunk-y8kqnbqt.js";var c=["shift+up","shift+down","ctrl+="].map(wae);function jYt(s,o){let t=zCe(s,"Chat",o),e=t.at(-1)??null,r=f1t()??"",n=Nne()!==null||/^(tmux|screen|ssh-session)/.test(r);if(!n&&r!=="Apple_Terminal")return e;return t.findLast((i)=>!i.some((f)=>c.some((a)=>EWe(a,f))))??(n?e:null)}
export{jYt};
