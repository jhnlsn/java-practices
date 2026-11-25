// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{S}from"/$bunfs/root/chunk-y98mhv74.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{tr,jKt}from"/$bunfs/root/chunk-0b3aev3g.js";import{nn,_e,be,y,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function l(o,n,e){return o.isWindowActivation||c(n,e)}var YXe=nn(null);function QS(){let o=tr(),[n]=y(()=>o.now()),e=be(YXe);return _e((r)=>{if(e!==null)return e(),r.dropAsStray(),!0;let i=o.now();if(!l(r,n,i))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${i-n}ms after mount`})`),a("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n,e])}function wgn(){let o=tr(),[n]=y(()=>o.now()),e=be(YXe)!==null;return _e(()=>e||c(n,o.now()),[o,n,e])}function c(o,n){return n-o<jKt}
export{YXe,QS,wgn};
