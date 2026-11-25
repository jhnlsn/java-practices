// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{mc}from"/$bunfs/root/chunk-v4hzksrd.js";import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{rn}from"/$bunfs/root/chunk-crdtetwv.js";function j6s(e){let r=e.args!==void 0?`, args: ${_(e.args)}`:"";return`${mc}({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}})`}function GWr(e){return e.scriptPath!==void 0&&e.workflowRunId!==void 0?`
<recovery>${rn(`Its finished agent calls are saved. Only if the user asks you to resume it, call: ${j6s(e)}`)}</recovery>`:""}
export{j6s,GWr};
