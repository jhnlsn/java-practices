// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{jhe}from"/$bunfs/root/chunk-rb36kwbn.js";var $Ys="CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH";async function yIa(e){if(e?.isBypassPermissionsModeAvailable===!1&&!e.isBypassHeldForAutoSwitch)return{};let i=e?.isBypassHeldForAutoSwitch?await jhe(process.pid):void 0;return{[$Ys]:i===void 0?"seen":`held:${process.pid}:${i}`}}async function SIa(){let e=s.CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH;if(s.unset("CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH"),!e)return;let i=/^held:(\d{1,10}):(.{1,64})$/.exec(e),n=Number(i?.[1]);if(i===null||n!==process.pid&&n!==process.ppid)return"seen";return await jhe(n)===i[2]?"held":"seen"}
export{$Ys,yIa,SIa};
