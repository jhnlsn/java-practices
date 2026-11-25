// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{T}from"/$bunfs/root/chunk-rhrgztck.js";var Dn="SendMessage",vat="ccd_session_mgmt",GTl="list_sessions",fYe="send_message",ecn=200,aEs=["type","recipient","recipient_kind","content","request_id","approve"];function Vzi(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function mWn(e){if(!T(e)||!Vzi(e)||!aEs.some((n)=>(n in e)))return;let o={...e};for(let n of aEs)delete o[n];return o}
export{Dn,vat,GTl,fYe,ecn,aEs,Vzi,mWn};
