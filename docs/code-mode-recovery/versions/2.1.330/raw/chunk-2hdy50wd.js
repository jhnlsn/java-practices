// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{$la}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Ar,Aoe}from"/$bunfs/root/chunk-n5qd9b6p.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{bLr}from"/$bunfs/root/chunk-3t7ve0wy.js";function Twe(){return s.CLAUDE_CODE_REMOTE_TOOLS_FORWARD===!0||bLr()}function Xf(){return bLr()||$la()}function O2t(){return Aoe()?.desktopAppTakenAway===!0}function qWi(e=!0){if(e!==O2t())Ar().desktopAppTakenAway=e||void 0}function elt(){return Twe()&&!Xf()}function wj(){return Twe()&&!Xf()&&!Ccn()}function Ccn(){return Aoe()?.takesMachinesMcpToolsAlone===!0}function xV(){return wj()}
export{Twe,Xf,O2t,qWi,elt,wj,Ccn,xV};
