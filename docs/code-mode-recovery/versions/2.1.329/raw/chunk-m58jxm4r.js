// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b0}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Uf}from"/$bunfs/root/chunk-aq3ms068.js";import{W$s,j$s}from"/$bunfs/root/chunk-f5fw37j8.js";import{mu}from"/$bunfs/root/chunk-yzxvzrvh.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";class i{activePark=null}var d=new j(()=>new i);async function IVt(r,e,n,a){if(!Uf())return!1;let o=d.of(r),t=await W$s(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)s(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return s(o,e,t.prior,a),!0}}function s(r,e,n,a){r.activePark?.unsubscribe();let o=b0(()=>{if(Uf())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),j$s(e,t.prior,t.storageV5).catch(mu)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{IVt};
