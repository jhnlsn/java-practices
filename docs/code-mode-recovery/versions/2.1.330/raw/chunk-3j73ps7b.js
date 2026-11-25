// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{S}from"/$bunfs/root/chunk-78g0060s.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{ir,W9t}from"/$bunfs/root/chunk-8bkqeb5d.js";import{an,ye,be,y,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function l(o,n,e){return o.isWindowActivation||c(n,e)}var UZe=an(null);function Ab(){let o=ir(),[n]=y(()=>o.now()),e=be(UZe);return ye((r)=>{if(e!==null)return e(),r.dropAsStray(),!0;let i=o.now();if(!l(r,n,i))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${i-n}ms after mount`})`),a("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n,e])}function qwn(){let o=ir(),[n]=y(()=>o.now()),e=be(UZe)!==null;return ye(()=>e||c(n,o.now()),[o,n,e])}function c(o,n){return n-o<W9t}
export{UZe,Ab,qwn};
