// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{Yle}from"/$bunfs/root/chunk-jg3mepas.js";import{b}from"/$bunfs/root/chunk-865at33z.js";function ODt(){if(Yle())return!1;if(!s.CLAUDE_CODE_EXPERIMENTAL_OBSERVER_AGENTS)return!1;if(!b("tengu_observer_agents_enabled",!0))return!1;return!0}function sNa(){if(!ODt())return!1;if(!b("tengu_observer_subagent_fanout",!0))return!1;return!0}function iNa(){return b("tengu_keen_umbrella",!1)}
export{ODt,sNa,iNa};
