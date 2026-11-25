// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Aa,$a,NP,Fu,FD}from"/$bunfs/root/chunk-gpm60stp.js";function tpt(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function FJn(r){if(r instanceof FD)return!0;if(tpt(r))return!1;if(r instanceof NP&&(r.status===403||r.status===401))return r.code!==Aa.ClientHttpAuthentication&&r.code!==Aa.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Fu)&&!(r instanceof $a)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{tpt,FJn};
