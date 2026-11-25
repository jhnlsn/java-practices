// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Yn}from"/$bunfs/root/chunk-kx2fp6pc.js";import{lt}from"/$bunfs/root/chunk-rb36kwbn.js";import{TR,Ue}from"/$bunfs/root/chunk-ha393e1n.js";import{De}from"/$bunfs/root/chunk-k883m4fq.js";import{stripVTControlCharacters as i}from"util";function ynt(t,e=3){let r=t.map((s)=>Yn(i(s)).trim()),o=r.slice(0,e).join(", "),n=r.length-e;return n>0?`${o} (${n} more)`:o}function _Yo(t=Number.POSITIVE_INFINITY){try{if(!Ue.isSandboxingEnabled())return;let e=Ue.getDeniesDroppedForAnotherHost();if(e.length===0)return;let r=`The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${De} rule or an ${lt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;return{issue:`Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${ynt(e,t)}`,fix:e.some((o)=>o.endsWith(" from policySettings"))?`${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`:r}}catch(e){TR(e,"deniesOnAnotherHostNotDescribed");return}}function hai(){let t=_Yo(3);if(t)process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)}
export{ynt,_Yo,hai};
