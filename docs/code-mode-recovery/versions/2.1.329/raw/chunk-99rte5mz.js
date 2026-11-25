// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function ESe(o){let{status:e,data:r}=o;return e>=400&&e<500&&typeof r==="object"&&r!==null&&"error"in r&&typeof r.error==="object"&&r.error!==null&&"reason"in r.error&&r.error.reason==="sessions_v1_retired"}
export{ESe};
