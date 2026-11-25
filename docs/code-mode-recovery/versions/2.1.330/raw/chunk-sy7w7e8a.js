// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{VZ,KZ,Ld,RE,Nb,dI}from"/$bunfs/root/chunk-865at33z.js";function n(){let e=Ld();if(e==="opus"&&VZ()&&!dI(RE()))return{alias:"opus[1m]",name:"Opus 1M",multiplier:5};else if(e==="sonnet"&&KZ()&&!dI(Nb()))return{alias:"sonnet[1m]",name:"Sonnet 1M",multiplier:5};return null}function uqe(e){let t=n();if(!t)return null;switch(e){case"warning":return`/model ${t.alias}`;case"tip":return`Tip: You have access to ${t.name} with ${t.multiplier}x more context`;default:return null}}
export{uqe};
