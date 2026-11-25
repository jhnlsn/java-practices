// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{HJ}from"/$bunfs/root/chunk-aw136kab.js";import{be,I,Ot,G}from"/$bunfs/root/chunk-bs4h6795.js";G();var tWo=()=>a,a=()=>{},c=()=>{return};function $e(t,i){let n=be(HJ),r=I(null);if(r.current===null)r.current={select:i,last:null,source:null,get:c,notifier:n,subscribe:tWo};let e=r.current;if(e.select=i,e.source!==t||e.notifier!==n)e.notifier=n,e.subscribe=t?n?.paced(t.subscribe)??t.subscribe:tWo;if(e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let s=t.getSnapshot(),o=e.select;if(!o)return s;let u=e.last;if(u!==null&&u.snapshot===s&&u.select===o)return u.selected;let l=o(s);return e.last={snapshot:s,select:o,selected:l},l}:c;return Ot(e.subscribe,e.get,e.get)}
export{tWo,$e};
