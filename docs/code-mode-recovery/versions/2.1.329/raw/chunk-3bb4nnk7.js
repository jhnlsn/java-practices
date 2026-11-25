// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var g7="claude.ai ",L5="claude_ai_";function $n(t){let r=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(t.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var e="claudeai_";function vO(t){return $n(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function VCo(t){return`${vO(t)}_`.startsWith("plugin_")}var wRr="org-connector-",l5i=128;function Mlt(t){if(t.length>l5i)return!1;let r=`${vO(t)}_`;return r.startsWith("org_connector_")||r.startsWith("orgconnector_")}function DGt(t){let r=`${vO(t)}_`;return r.startsWith("claude_ai_")||r.startsWith(e)}
export{g7,L5,$n,vO,VCo,wRr,l5i,Mlt,DGt};
