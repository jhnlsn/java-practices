// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ua,Xa,PO,ef,YL}from"/$bunfs/root/chunk-racn22qq.js";function Lgt(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function xor(r){if(r instanceof YL)return!0;if(Lgt(r))return!1;if(r instanceof PO&&(r.status===403||r.status===401))return r.code!==Ua.ClientHttpAuthentication&&r.code!==Ua.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof ef)&&!(r instanceof Xa)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{Lgt,xor};
