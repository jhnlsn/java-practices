// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{JS,gH}from"/$bunfs/root/chunk-bzyb60p0.js";import{zD}from"/$bunfs/root/chunk-awvk50qj.js";import{OC}from"/$bunfs/root/chunk-3b9jqhjk.js";function l6(e){let s=JS(),o=!!e.isAutoModeAvailable&&s;if(!o)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${s} reason=${gH()}`);return o}function ler(e){return!!e.isBypassPermissionsModeAvailable&&!OC()}function EHt(e){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(ler(e))return"bypassPermissions";if(l6(e))return"auto";return"default";case"bypassPermissions":if(l6(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function CYs(e,s){let o=EHt(e);return{nextMode:o,context:zD(e.mode,o,e,s)}}
export{l6,ler,EHt,CYs};
