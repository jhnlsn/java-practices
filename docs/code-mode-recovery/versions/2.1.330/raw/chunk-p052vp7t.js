// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{de}from"/$bunfs/root/chunk-t57w17k7.js";var s=["boot_process","boot_session","boot_load","boot_init","boot_mcp","boot_hydrate","boot_connect","open","attachments","prepare","schemas","normalize","build"],o=["stream","permission","tool","send"],i=["uploads","telemetry"];var a=["rest","after_stream",...s,...o,...i];function r(){}var t=de({clock:void 0},(e)=>{e.clock=void 0});function rdl(e){t.clock?.setPhase(e)}function odl(e,n){t.clock?.setPhaseWithin(e,n)}function sdl(e,n){t.clock?.endPhaseWithin(e,n)}function nFn(e){return t.clock?.openWindow(e)??r}function iOi(e){return t.clock?.enterSpan(e)??"not_clocked"}function aOi(e){t.clock?.leaveSpan(e)}
export{rdl,odl,sdl,nFn,iOi,aOi};
