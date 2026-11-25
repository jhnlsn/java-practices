// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ke,ge}from"/$bunfs/root/chunk-865at33z.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{GYa}from"/$bunfs/root/chunk-sjqze7qg.js";function _Ht(e=ge()){let n=e.firstWeek?.marks;return Array.isArray(n)?GYa.filter((t)=>n.includes(t)):[]}function qKr(e=ge()){return e.firstWeek?.over===!0}function X8s(){let e=_Ht();return e.includes("in")&&!e.includes("off")&&!qKr()}function LOa(e,n,t){Ke((o)=>{let r=_Ht(o),a=e.filter((f)=>!r.includes(f));return s(o,n)&&!qKr(o)&&a.length>0&&(a.includes("in")||r.includes("in"))?{...o,firstWeek:{marks:[...r,...a]}}:o},t).catch(i)}function J8s({accountUuid:e,hasEntered:n},t){Ke((o)=>s(o,e)&&_Ht(o).includes("in")===n?{...o,firstWeek:{marks:_Ht(o).filter((r)=>!/^q\d-/.test(r)),over:!0}}:o,t).catch(i)}function YKr(e){if(ge().firstWeek!==void 0)Ke((n)=>({...n,firstWeek:void 0}),e).catch(i)}function s(e,n){return e.oauthAccount?.accountUuid===n}
export{_Ht,qKr,X8s,LOa,J8s,YKr};
