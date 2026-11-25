// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ms}from"/$bunfs/root/chunk-j3mc0yng.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";class r{working=ms({working:!1});userPrompt=ms({waitingFor:void 0})}var PPt=new qe(()=>new r);function b3t(o,e){PPt.of(o).working.setState((n)=>n.working===e?n:{working:e})}function _Yn(o){return PPt.of(o).working.getState().working}function _jr(o,e){return PPt.of(o).working.subscribe(e)}function yjr(o,e){PPt.of(o).userPrompt.setState((n)=>n.waitingFor===e?n:{waitingFor:e})}function Sjr(o){return OVs(o)!==void 0}function OVs(o){return PPt.of(o).userPrompt.getState().waitingFor}function $wa(o,e){return PPt.of(o).userPrompt.subscribe(e)}
export{PPt,b3t,_Yn,_jr,yjr,Sjr,OVs,$wa};
