// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var u7s="error details withheld for this workflow",f7s="This workflow run hides its script, and its record of that could not be read or written, so nothing was run.";function Ber(r){return`Run ${r} hides its script, so its script is not shown here; the resume runs only the script the run was launched with.`}function Wer(r){return r.type!=="workflow_log"}function p7s(r){let{promptPreview:e,phaseTitle:t,...o}=r,s=t!==void 0&&o.phaseIndex!==void 0;return{...o,...s&&{phaseTitle:`phase ${o.phaseIndex}`},...o.error!==void 0&&{error:"error details withheld for this workflow"}}}function $Ia(r){return r.map((e)=>e.type==="workflow_phase"?{...e,title:`phase ${e.index}`}:p7s(e))}
export{u7s,f7s,Ber,Wer,p7s,$Ia};
