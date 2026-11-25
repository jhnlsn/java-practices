// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{yn}from"/$bunfs/root/chunk-qebpc5de.js";import{k2t,AV}from"/$bunfs/root/chunk-gbskgz33.js";import{ke}from"/$bunfs/root/chunk-hn3cwwzt.js";function O8n(i){if(i.toolName===ke){if(!i.ruleContent)return{prefix:"Any Bash command"};if(i.ruleContent.endsWith(":*")||i.ruleContent.endsWith(" *"))return{prefix:"Any Bash command starting with ",emphasis:i.ruleContent.slice(0,-2)};return{prefix:"The Bash command ",emphasis:i.ruleContent}}if(AV(i))return{prefix:`This rule ${k2t(yn(i),i.toolName)}`};if(!i.ruleContent)return{prefix:"Any use of the ",emphasis:i.toolName,suffix:" tool"};return null}
export{O8n};
