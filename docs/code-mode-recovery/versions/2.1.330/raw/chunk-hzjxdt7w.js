// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{gre,gN}from"/$bunfs/root/chunk-qf73a9we.js";import{rRe}from"/$bunfs/root/chunk-vce2t55r.js";import{Tc}from"/$bunfs/root/chunk-tjdnrbvx.js";function t(e){return rRe(e)&&Tc(e)}function s(e){return e.mode==="poll-event"&&e.pollEvent?.kind===gre&&Tc(e)}function Vgs(e){e.setPassive?.(t,!0),gN(e.removeByFilter(s),"a stop ended the scripts this status line describes")}export{Vgs};
