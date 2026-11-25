// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Oo}from"/$bunfs/root/chunk-f9x2f6cx.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{pm}from"/$bunfs/root/chunk-w5s307zm.js";import{basename as r}from"path";var n=["MCP","symlink","grep","regex","localhost","codebase","TypeScript","JSON","OAuth","webhook","gRPC","dotfiles","subagent","worktree"],i=["VS Code","IDE","webview","IntelliSense"];function c(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[-_./\s]+/).map((t)=>t.trim()).filter((t)=>t.length>2&&t.length<=20)}var a=50;async function AUr(){let e=new Set([...s.CLAUDE_CODE_ENTRYPOINT==="claude-vscode"?i:[],...n]);try{let t=Oo();if(t){let o=r(t);if(o.length>2&&o.length<=50)e.add(o)}}catch{}try{let t=await pm();if(t)for(let o of c(t))e.add(o)}catch{}return[...e].slice(0,a)}
export{AUr};
