// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function zg(){return!0}function Uh(){return typeof Bun<"u"&&Bun.isStandaloneExecutable===!0}function YRo(){if(!zg()||Uh())return!1;let n=Bun.main;if(IYi(n))return!1;return/\.[cm]?tsx?$/.test(n)}function IYi(n){return/^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n)}
export{zg,Uh,YRo,IYi};
