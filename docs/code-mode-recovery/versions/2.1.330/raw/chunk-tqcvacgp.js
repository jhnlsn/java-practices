// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Re}from"/$bunfs/root/chunk-d57v19zt.js";import{lqe,XE,sOa}from"/$bunfs/root/chunk-210k8f6q.js";import{ASe}from"/$bunfs/root/chunk-1tyxkk56.js";import{Dr}from"/$bunfs/root/chunk-wbk1hf21.js";var nTn="\x1B]8;;",rTn="\x07";function YE(e,r,t){let n=r===void 0?void 0:Dr(r),o=n===void 0||w8s(e,n);if(!(o&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(lqe()??!0)||(t?.supportsHyperlinks??XE()))){let i=t?.shownUrlStart??"",s=t?.mayWriteHyperlink??sOa(e)?`${nTn}${e}${rTn}${e}${nTn}${rTn}`:e;if(r!==void 0&&!o)return`${r}${i} (${s})`;return`${i}${s}`}let p=(((t?.themeName)?ASe(t.themeName):!1)?Re.blue:Re.blueBright)(r??e);return`${nTn}${e}${rTn}${p}${nTn}${rTn}`}function w8s(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{nTn,rTn,YE,w8s};
