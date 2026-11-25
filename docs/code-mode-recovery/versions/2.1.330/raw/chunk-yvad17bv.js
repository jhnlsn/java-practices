// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{b}from"/$bunfs/root/chunk-865at33z.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";function t(){return process.argv.includes("--agent-teams")}function xi(){if(!s.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!b("tengu_amber_flint",!0))return!1;return!0}async function P_i(){if(!xi())return;let{captureTeammateModeSnapshot:e}=await import("/$bunfs/root/chunk-h7ssn1v4.js");e()}
export{xi,P_i};
