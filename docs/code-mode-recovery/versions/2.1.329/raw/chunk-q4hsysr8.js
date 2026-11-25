// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{A}from"/$bunfs/root/chunk-avbzeyf3.js";class hVr extends A{}function tPa(t,e){if(!t)throw new hVr("redirectUriOnly is set and the request names no redirectUri.","MCP OAuth refused: redirectUriOnly with no redirectUri");if(e.oauth?.clientId||e.oauth?.xaa)throw new hVr("This server's configuration sets oauth.clientId or oauth.xaa, so sign-in may need a callback on this computer, which redirectUriOnly does not allow.","MCP OAuth refused: redirectUriOnly with a configured client")}
export{hVr,tPa};
