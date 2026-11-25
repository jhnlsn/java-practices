// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var oJ="claude.ai ",A8="claude_ai_";function xn(t){let r=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(t.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var e="claudeai_";function mT(t){return xn(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function dDo(t){return`${mT(t)}_`.startsWith("plugin_")}var ZDr="org-connector-",Qta=128;function ZFe(t){if(t.length>Qta)return!1;let r=`${mT(t)}_`;return r.startsWith("org_connector_")||r.startsWith("orgconnector_")}function kqt(t){let r=`${mT(t)}_`;return r.startsWith("claude_ai_")||r.startsWith(e)}
export{oJ,A8,xn,mT,dDo,ZDr,Qta,ZFe,kqt};
