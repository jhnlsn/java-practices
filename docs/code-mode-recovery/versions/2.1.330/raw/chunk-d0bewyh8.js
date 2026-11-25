// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var duo="https://claude.com/claude-code",cuo="https://claude.ai";function i(t,e){return t?.includes("_staging_")===!0||e?.includes("staging")===!0}function ius(t,e){return t?.includes("_local_")===!0||e?.includes("localhost")===!0}function zQ(t,e){if(ius(t,e))return"http://localhost:4000";if(i(t,e))return"https://claude-ai.staging.ant.dev";return"https://claude.ai"}function Vu(t,e,n){let{toCompatSessionId:s}=import.meta.require("/$bunfs/root/chunk-qy28wzmz.js"),o=s(t),r=`${zQ(o,e)}/code/${o}`;return n?`${r}?${new URLSearchParams(n)}`:r}
export{duo,cuo,ius,zQ,Vu};
