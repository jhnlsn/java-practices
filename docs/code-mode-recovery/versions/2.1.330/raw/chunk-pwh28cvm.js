// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{MI}from"/$bunfs/root/chunk-f9x2f6cx.js";import{sf}from"/$bunfs/root/chunk-865at33z.js";import{KKs,qKs}from"/$bunfs/root/chunk-3bgaher8.js";import{Lu}from"/$bunfs/root/chunk-9e5mdyfk.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";class i{activePark=null}var d=new j(()=>new i);async function I5t(r,e,n,a){if(!sf())return!1;let o=d.of(r),t=await KKs(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)s(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return s(o,e,t.prior,a),!0}}function s(r,e,n,a){r.activePark?.unsubscribe();let o=MI(()=>{if(sf())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),qKs(e,t.prior,t.storageV5).catch(Lu)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{I5t};
