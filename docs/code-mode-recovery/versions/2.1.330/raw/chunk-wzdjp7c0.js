// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function f_(){return!0}function dg(){return typeof Bun<"u"&&Bun.isStandaloneExecutable===!0}function cLo(){if(!f_()||dg())return!1;let n=Bun.main;if(Ssa(n))return!1;return/\.[cm]?tsx?$/.test(n)}function Ssa(n){return/^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n)}
export{f_,dg,cLo,Ssa};
