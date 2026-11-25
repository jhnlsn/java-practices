// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function IMl({remote:n,isNonInteractiveSession:e,headlessCloud:s,headlessCloudPrint:l=!1,isContinue:i,pendingAssistantChat:o,pendingConnectUrl:r,pendingSSHHost:u}){if(e)return s||l;if(i)return!1;return n!==null||Boolean(o?.sessionId)||Boolean(o?.discover)||Boolean(r)||Boolean(u)}function MMl(n,e){return n?null:e}var t=/^(?:session|cse)_[A-Za-z0-9_]+$/;function Ywe(n){if(t.test(n))return n;if(n.includes("/")&&!/\s/.test(n)){for(let e of n.split(/[/?#]/))if(t.test(e))return e}return null}
export{IMl,MMl,Ywe};
