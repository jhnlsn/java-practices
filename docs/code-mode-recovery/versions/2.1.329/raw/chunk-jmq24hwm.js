// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{w}from"/$bunfs/root/chunk-avbzeyf3.js";import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{g2e}from"/$bunfs/root/chunk-t39fw2cy.js";import{mr}from"/$bunfs/root/chunk-dnaxttmk.js";import{FY,M1n,Jfe,oae}from"/$bunfs/root/chunk-mf7vnf0k.js";import{dPt}from"/$bunfs/root/chunk-sge4v7pw.js";import{mkdir as u,writeFile as h}from"fs/promises";import{dirname as m,join as i,relative as f,resolve as p,sep as g}from"path";var S="https://anthropic.com/claude-code/plugin.schema.json",o6n=["skills","agents","hooks","mcp","lsp","output-style","channel"];function xea(e){let n=g2e().shape.name.safeParse(e);if(!n.success)return n.error.issues[0]?.message??null;if(e.includes("/")||e.includes("\\")||e.includes("..")||e===".")return'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';if(!M1n(e)||oae(e)||Jfe(e))return`Plugin name cannot be "${FY}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;let s=dPt(e);if(s?.severity==="error")return s.message;return null}function Pea(e){let{name:n,description:a,author:s}=e,r=e.with??[],t=[],o={$schema:S,name:n,version:"0.1.0",description:a??"TODO: describe what this plugin provides"};if(s)o.author=s;if(o.skills=["./"],t.push({relPath:i(".claude-plugin","plugin.json"),contents:_(o,null,2)+`
`}),t.push({relPath:"SKILL.md",contents:d(n)}),r.includes("skills"))t.push({relPath:i("skills","example","SKILL.md"),contents:d("example")});if(r.includes("agents"))t.push({relPath:i("agents","example.md"),contents:y()});if(r.includes("hooks"))t.push({relPath:i("hooks","hooks.json"),contents:v()},{relPath:i("hooks-handlers","on-session-start.ts"),contents:k(),mode:493});if(r.includes("mcp")&&!r.includes("channel"))t.push({relPath:".mcp.json",contents:x()});if(r.includes("lsp"))t.push({relPath:".lsp.json",contents:O()});if(r.includes("output-style"))t.push({relPath:i("output-styles",`${n}.md`),contents:T(n)});if(r.includes("channel"))o.channels=[{server:n,displayName:n}],t.push({relPath:".mcp.json",contents:P(n)},{relPath:"server.ts",contents:N(n)},{relPath:"package.json",contents:b(n)});return t[0].contents=_(o,null,2)+`
`,t}async function Oea(e,n,a){let s=p(e);if(!a.force)try{await u(i(s,".claude-plugin"))}catch(t){if(w(t)==="EEXIST")return{ok:!1,error:`${i(s,".claude-plugin")} already exists. Use --force to overwrite.`};if(w(t)!=="ENOENT")throw t}let r=[];for(let t of n){let o=p(s,t.relPath),l=f(s,o);if(l.startsWith(".."+g)||l==="..")return{ok:!1,error:`Refusing to write outside ${s}: ${t.relPath}`};if(await u(m(o),{recursive:!0}),a.force)await mr(o,t.contents,t.mode);else try{await h(o,t.contents,{flag:"wx",mode:t.mode})}catch(c){if(w(c)!=="EEXIST")throw c;r.push(t.relPath)}}return{ok:!0,skipped:r}}function d(e){return`---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`}function y(){return`---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`}function v(){return _({hooks:{SessionStart:[{hooks:[{type:"command",command:'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'}]}]}},null,2)+`
`}function k(){return`#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`}function x(){return _({mcpServers:{"example-remote":{type:"http",url:"https://example.com/mcp"},"example-local":{command:"npx",args:["<your-mcp-server-package>"]}}},null,2)+`
`}function O(){return _({example:{command:"example-language-server",args:["--stdio"],extensionToLanguage:{".example":"example"}}},null,2)+`
`}function T(e){return`---
name: ${e}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`}function P(e){return _({mcpServers:{[e]:{command:"bun",args:["run","--cwd","${CLAUDE_PLUGIN_ROOT}","--shell=bun","--silent","start"]}}},null,2)+`
`}function b(e){return _({name:`claude-channel-${e}`,version:"0.1.0",type:"module",scripts:{start:"bun install --no-summary && bun server.ts"},dependencies:{"@modelcontextprotocol/sdk":"^1.0.0"}},null,2)+`
`}function N(e){return`#!/usr/bin/env bun
/**
 * ${e} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${e}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${e} arrive as <channel source=\\"${e}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${e} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`}
export{o6n,xea,Pea,Oea};
