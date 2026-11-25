// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Pae}from"/$bunfs/root/chunk-31sz6df3.js";import{jq}from"/$bunfs/root/chunk-07kqypdk.js";var Trr="ListConnectors",Yei="List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.",Xei=`List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false means the connector's tools are not loaded in this session; the field does not say why. The user can check a connector, and its tool permissions, in their claude.ai connector settings. Do not name a setting for this chat alone; there may be none. To recommend connectors the user does NOT have yet, use ${jq} \u2192 ${Pae} instead; this tool does not itself connect anything.`;
export{Trr,Yei,Xei};
