// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var Pro="https://claude.com/claude-code",Oro="https://claude.ai";function i(t,e){return t?.includes("_staging_")===!0||e?.includes("staging")===!0}function Dns(t,e){return t?.includes("_local_")===!0||e?.includes("localhost")===!0}function wMe(t,e){if(Dns(t,e))return"http://localhost:4000";if(i(t,e))return"https://claude-ai.staging.ant.dev";return"https://claude.ai"}function xu(t,e,n){let{toCompatSessionId:s}=import.meta.require("/$bunfs/root/chunk-xp61z15s.js"),o=s(t),r=`${wMe(o,e)}/code/${o}`;return n?`${r}?${new URLSearchParams(n)}`:r}
export{Pro,Oro,Dns,wMe,xu};
