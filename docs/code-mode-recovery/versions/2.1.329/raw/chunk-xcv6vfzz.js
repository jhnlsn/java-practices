// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{yn}from"/$bunfs/root/chunk-d1scfh43.js";import{$Ut,t6}from"/$bunfs/root/chunk-9zsqaq29.js";import{Ce}from"/$bunfs/root/chunk-05v7tzw3.js";function VVn(i){if(i.toolName===Ce){if(!i.ruleContent)return{prefix:"Any Bash command"};if(i.ruleContent.endsWith(":*")||i.ruleContent.endsWith(" *"))return{prefix:"Any Bash command starting with ",emphasis:i.ruleContent.slice(0,-2)};return{prefix:"The Bash command ",emphasis:i.ruleContent}}if(t6(i))return{prefix:`This rule ${$Ut(yn(i),i.toolName)}`};if(!i.ruleContent)return{prefix:"Any use of the ",emphasis:i.toolName,suffix:" tool"};return null}
export{VVn};
