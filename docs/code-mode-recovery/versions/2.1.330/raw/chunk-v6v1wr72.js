// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xc}from"/$bunfs/root/chunk-jar84hn9.js";import{_}from"/$bunfs/root/chunk-w578pjby.js";import{sn}from"/$bunfs/root/chunk-hr2stdq7.js";function m7s(e){let r=e.args!==void 0?`, args: ${_(e.args)}`:"";return`${xc}({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}})`}function Nqr(e){return e.scriptPath!==void 0&&e.workflowRunId!==void 0?`
<recovery>${sn(`Its finished agent calls are saved. Only if the user asks you to resume it, call: ${m7s(e)}`)}</recovery>`:""}
export{m7s,Nqr};
