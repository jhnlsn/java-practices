// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ps}from"/$bunfs/root/chunk-se72nykz.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";class r{working=ps({working:!1});userPrompt=ps({waitingFor:void 0})}var MHt=new ze(()=>new r);function T7t(o,e){MHt.of(o).working.setState((n)=>n.working===e?n:{working:e})}function Zer(o){return MHt.of(o).working.getState().working}function c4r(o,e){return MHt.of(o).working.subscribe(e)}function u4r(o,e){MHt.of(o).userPrompt.setState((n)=>n.waitingFor===e?n:{waitingFor:e})}function f4r(o){return eXs(o)!==void 0}function eXs(o){return MHt.of(o).userPrompt.getState().waitingFor}function sMa(o,e){return MHt.of(o).userPrompt.subscribe(e)}
export{MHt,T7t,Zer,c4r,u4r,f4r,eXs,sMa};
