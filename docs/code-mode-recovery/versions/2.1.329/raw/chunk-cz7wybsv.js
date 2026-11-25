// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{O_}from"/$bunfs/root/chunk-2kad367j.js";import{nn,be,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();var ZS=nn(null);function Va(){return be(ZS)!==null}function jo(r){let t=k(3),o=be(ZS),n;if(t[0]!==o||t[1]!==r)n=o?{rows:o.rows,columns:o.columns}:r,t[0]=o,t[1]=r,t[2]=n;else n=t[2];return n}function hA(){return be(ZS)?.scrollViewport??null}function fke(){return be(ZS)?.claimScrollBox??null}G();function Ve(){let r=be(O_);if(!r)throw Error("useTerminalSize must be used within an Ink App component");return r}
export{ZS,Va,jo,hA,fke,Ve};
