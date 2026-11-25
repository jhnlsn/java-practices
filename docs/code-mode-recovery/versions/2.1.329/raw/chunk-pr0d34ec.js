// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{nQ,rQ,sd,pk,FS,cO}from"/$bunfs/root/chunk-aq3ms068.js";function n(){let e=sd();if(e==="opus"&&nQ()&&!cO(pk()))return{alias:"opus[1m]",name:"Opus 1M",multiplier:5};else if(e==="sonnet"&&rQ()&&!cO(FS()))return{alias:"sonnet[1m]",name:"Sonnet 1M",multiplier:5};return null}function h6e(e){let t=n();if(!t)return null;switch(e){case"warning":return`/model ${t.alias}`;case"tip":return`Tip: You have access to ${t.name} with ${t.multiplier}x more context`;default:return null}}
export{h6e};
