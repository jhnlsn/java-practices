// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{I4n,Li,Yg,Wu,nx}from"/$bunfs/root/chunk-3t7ve0wy.js";import{hn}from"/$bunfs/root/chunk-6e68m1dj.js";import{wzt}from"/$bunfs/root/chunk-865at33z.js";function r(){if(Yg()||nx())return null;if(hn()){let t=Li();if(t===void 0||!t.startsWith("remote")||I4n.has(t))return null;return wzt()?null:"cloud"}if(s.CLAUDE_CODE_REMOTE)return null;return Wu()?"desktop":null}function Eyo(){return s.CLAUDE_CODE_ARTIFACT_SHARE===!0&&r()!==null}
export{Eyo};
