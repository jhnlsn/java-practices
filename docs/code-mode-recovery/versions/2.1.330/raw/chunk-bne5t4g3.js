// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{T}from"/$bunfs/root/chunk-ma3kja9f.js";var Ln="SendMessage",Xct="ccd_session_mgmt",qLl="list_sessions",cJe="send_message",Fhn=200,bIs=["type","recipient","recipient_kind","content","request_id","approve"];function O7i(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function NVn(e){if(!T(e)||!O7i(e)||!bIs.some((n)=>(n in e)))return;let o={...e};for(let n of bIs)delete o[n];return o}
export{Ln,Xct,qLl,cJe,Fhn,bIs,O7i,NVn};
