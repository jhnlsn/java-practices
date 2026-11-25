// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{bw,fM}from"/$bunfs/root/chunk-hg1yqkjk.js";import{L1}from"/$bunfs/root/chunk-0cw29n2z.js";import{zx}from"/$bunfs/root/chunk-2zwt9sa4.js";function H9(e){let s=bw(),o=!!e.isAutoModeAvailable&&s;if(!o)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${s} reason=${fM()}`);return o}function I8n(e){return!!e.isBypassPermissionsModeAvailable&&!zx()}function M8n(e){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(I8n(e))return"bypassPermissions";if(H9(e))return"auto";return"default";case"bypassPermissions":if(H9(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function p6s(e,s){let o=M8n(e);return{nextMode:o,context:L1(e.mode,o,e,s)}}
export{H9,I8n,M8n,p6s};
