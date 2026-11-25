// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{w,kn}from"/$bunfs/root/chunk-jv7av99m.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{statfs as n}from"fs/promises";var f=[26985,4283649346,4266872130,12805120,198183888,1196443219,428016422,1397113167,1799439955,1952539503];async function x_r(r){return Number((await n(r)).type)>>>0}async function Val(r){let o=x();if(o!=="linux"&&o!=="wsl")return!1;try{return f.includes(await x_r(r))}catch(e){if(kn(e)||w(e)==="ERR_INVALID_ARG_VALUE")return!1;return t(`Could not ask for the file system of ${r}: ${e}`),!0}}
export{x_r,Val};
