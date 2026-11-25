// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{de}from"/$bunfs/root/chunk-pb0k2vmd.js";var s=["boot_process","boot_session","boot_load","boot_init","boot_mcp","boot_hydrate","boot_connect","open","attachments","prepare","schemas","normalize","build"],o=["stream","permission","tool","send"],i=["uploads","telemetry"];var a=["rest","after_stream",...s,...o,...i];function r(){}var t=de({clock:void 0},(e)=>{e.clock=void 0});function pJa(e){t.clock?.setPhase(e)}function mJa(e,n){t.clock?.setPhaseWithin(e,n)}function hJa(e,n){t.clock?.endPhaseWithin(e,n)}function jIn(e){return t.clock?.openWindow(e)??r}function Pbi(e){return t.clock?.enterSpan(e)??"not_clocked"}function Obi(e){t.clock?.leaveSpan(e)}
export{pJa,mJa,hJa,jIn,Pbi,Obi};
