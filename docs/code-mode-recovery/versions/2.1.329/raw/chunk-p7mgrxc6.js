// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Te}from"/$bunfs/root/chunk-p2amrmaz.js";import{u6e,pE,eba}from"/$bunfs/root/chunk-4er5a4x4.js";import{w_e}from"/$bunfs/root/chunk-6952j60n.js";import{Rr}from"/$bunfs/root/chunk-74jsynkt.js";var fSn="\x1B]8;;",pSn="\x07";function fE(e,r,t){let n=r===void 0?void 0:Rr(r),o=n===void 0||dzs(e,n);if(!(o&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(u6e()??!0)||(t?.supportsHyperlinks??pE()))){let i=t?.shownUrlStart??"",s=t?.mayWriteHyperlink??eba(e)?`${fSn}${e}${pSn}${e}${fSn}${pSn}`:e;if(r!==void 0&&!o)return`${r}${i} (${s})`;return`${i}${s}`}let p=(((t?.themeName)?w_e(t.themeName):!1)?Te.blue:Te.blueBright)(r??e);return`${fSn}${e}${pSn}${p}${fSn}${pSn}`}function dzs(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{fSn,pSn,fE,dzs};
