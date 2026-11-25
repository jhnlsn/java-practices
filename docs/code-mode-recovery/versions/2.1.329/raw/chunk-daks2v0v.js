// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{hGn,Xi,zS,Tu,ux}from"/$bunfs/root/chunk-0v6g5ynk.js";import{pn}from"/$bunfs/root/chunk-92h2y9s9.js";import{BBt}from"/$bunfs/root/chunk-aq3ms068.js";function r(){if(zS()||ux())return null;if(pn()){let t=Xi();if(t===void 0||!t.startsWith("remote")||hGn.has(t))return null;return BBt()?null:"cloud"}if(s.CLAUDE_CODE_REMOTE)return null;return Tu()?"desktop":null}function xlo(){return s.CLAUDE_CODE_ARTIFACT_SHARE===!0&&r()!==null}
export{xlo};
