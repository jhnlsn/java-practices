// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{Nne}from"/$bunfs/root/chunk-vw137skj.js";import{yc}from"/$bunfs/root/chunk-ky5sghtd.js";import{N$}from"/$bunfs/root/chunk-hq807efw.js";function nZs(){return s.terminal==="Apple_Terminal"}function _Dt(){return s.terminal==="Apple_Terminal"}function Iqe(){return N$()}function X0a(e){return e==="iTerm.app"||e==="Apple_Terminal"}function J0a(){return s.terminal==="WezTerm"}function yDt(){return s.terminal==="tmux"}function K4o(){return n()}function q4o(){return r()}function Q0a(){return r()}function r(){return n()&&(s.CLAUDE_BG_BACKEND==="daemon"||yc().versionReply===void 0)}function n(){let e=Nne();return!!s.STY||e==="screen"||e===null&&!!s.TERM?.startsWith("screen")}function Z0a(){return x()==="windows"||!!s.WT_SESSION}
export{nZs,_Dt,Iqe,X0a,J0a,yDt,K4o,q4o,Q0a,Z0a};
