// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{sVr,V5t}from"/$bunfs/root/chunk-eqbbd4b9.js";var l=/^[CDG][A-Z0-9]{6,}$/;function b8s(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),w8s="mcp-slack-send";function wxa(e){return t.has(e)}function kxa(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=sVr(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:b8s(n)}}function Exa(){return{uiTableKey:w8s,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?V5t(e,n):""}}}
export{b8s,w8s,wxa,kxa,Exa};
