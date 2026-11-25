// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_Yr,eJt}from"/$bunfs/root/chunk-apmh0yjy.js";var l=/^[CDG][A-Z0-9]{6,}$/;function Ari(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),Rri="mcp-slack-send";function s$a(e){return t.has(e)}function i$a(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=_Yr(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Ari(n)}}function a$a(){return{uiTableKey:Rri,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?eJt(e,n):""}}}
export{Ari,Rri,s$a,i$a,a$a};
