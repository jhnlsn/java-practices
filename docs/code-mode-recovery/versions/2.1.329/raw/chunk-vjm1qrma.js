// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Kn}from"/$bunfs/root/chunk-k936fbc4.js";import{it}from"/$bunfs/root/chunk-5ghdkswv.js";import{HA,ze}from"/$bunfs/root/chunk-f7fdz8jz.js";import{Ne}from"/$bunfs/root/chunk-jh9bnqg2.js";import{stripVTControlCharacters as i}from"util";function wZe(t,e=3){let r=t.map((s)=>Kn(i(s)).trim()),o=r.slice(0,e).join(", "),n=r.length-e;return n>0?`${o} (${n} more)`:o}function M6o(t=Number.POSITIVE_INFINITY){try{if(!ze.isSandboxingEnabled())return;let e=ze.getDeniesDroppedForAnotherHost();if(e.length===0)return;let r=`The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${Ne} rule or an ${it} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;return{issue:`Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${wZe(e,t)}`,fix:e.some((o)=>o.endsWith(" from policySettings"))?`${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`:r}}catch(e){HA(e,"deniesOnAnotherHostNotDescribed");return}}function EJs(){let t=M6o(3);if(t)process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)}
export{wZe,M6o,EJs};
