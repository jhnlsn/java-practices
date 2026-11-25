// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{G7}from"/$bunfs/root/chunk-dpztgy27.js";import{be,P,Pt,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();var FHo=()=>a,a=()=>{},c=()=>{return};function Le(t,i){let n=be(G7),r=P(null);if(r.current===null)r.current={select:i,last:null,source:null,get:c,notifier:n,subscribe:FHo};let e=r.current;if(e.select=i,e.source!==t||e.notifier!==n)e.notifier=n,e.subscribe=t?n?.paced(t.subscribe)??t.subscribe:FHo;if(e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let s=t.getSnapshot(),o=e.select;if(!o)return s;let u=e.last;if(u!==null&&u.snapshot===s&&u.select===o)return u.selected;let l=o(s);return e.last={snapshot:s,select:o,selected:l},l}:c;return Pt(e.subscribe,e.get,e.get)}
export{FHo,Le};
