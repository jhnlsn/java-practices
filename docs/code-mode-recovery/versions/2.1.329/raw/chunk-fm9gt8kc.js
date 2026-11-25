// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{nte}from"/$bunfs/root/chunk-cnnwpgh2.js";import{pc}from"/$bunfs/root/chunk-qgx0rrv2.js";import{D1}from"/$bunfs/root/chunk-7m6qh9tg.js";function O4s(){return s.terminal==="Apple_Terminal"}function cOt(){return s.terminal==="Apple_Terminal"}function L6e(){return D1()}function DTa(e){return e==="iTerm.app"||e==="Apple_Terminal"}function LTa(){return s.terminal==="WezTerm"}function uOt(){return s.terminal==="tmux"}function bjo(){return n()}function wjo(){return r()}function NTa(){return r()}function r(){return n()&&(s.CLAUDE_BG_BACKEND==="daemon"||pc().versionReply===void 0)}function n(){let e=nte();return!!s.STY||e==="screen"||e===null&&!!s.TERM?.startsWith("screen")}function FTa(){return x()==="windows"||!!s.WT_SESSION}
export{O4s,cOt,L6e,DTa,LTa,uOt,bjo,wjo,NTa,FTa};
