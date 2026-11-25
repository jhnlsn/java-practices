// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";function t(){return process.argv.includes("--agent-teams")}function Si(){if(!s.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!b("tengu_amber_flint",!0))return!1;return!0}async function wai(){if(!Si())return;let{captureTeammateModeSnapshot:e}=await import("/$bunfs/root/chunk-z9h19fx3.js");e()}
export{Si,wai};
