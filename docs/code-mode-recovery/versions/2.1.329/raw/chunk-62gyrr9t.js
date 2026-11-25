// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{dg,Hre}from"/$bunfs/root/chunk-kgzzwvwc.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{At}from"/$bunfs/root/chunk-pxy9yt8m.js";import{gt}from"/$bunfs/root/chunk-bxxahqqj.js";import{Mg}from"/$bunfs/root/chunk-b3bkn4gj.js";import{Hr}from"/$bunfs/root/chunk-e45mjesc.js";import{Bz}from"/$bunfs/root/chunk-dyvy28wy.js";import{rae,ane}from"/$bunfs/root/chunk-nrkkfka0.js";function lft(o){return i()&&!ane(Bz)&&(o===void 0||l(o))}function i(){if(!Mg())return!1;if(rae()||dg())return!1;if(s.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=At().skillOverrides?.[Bz];if(o==="off"||o==="user-invocable-only")return!1;let e=Hre();if(e!==void 0&&!e.includes(Bz))return!1;return!0}function l(o){return o.some((e)=>gt(e,Hr))}
export{lft};
