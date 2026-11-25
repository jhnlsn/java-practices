// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var kzi="runner-declares";var NCr="diff-finds-nested-repository",Ezi="no-repository-checked-out";var vzi="built-in-gh",Tzi="built-in-gh-by-default";function Czi(e){return"--runner-declares="+e.join(",")}async function ked(e){if(!e.startsWith("--runner-declares="))return;let E=e.slice(18).split(","),t=E.includes("diff-finds-nested-repository"),R=!1,n=E.includes("built-in-gh")||E.includes("built-in-gh-by-default")&&"default";if(!t&&!R&&!n)return;let{setRunnerDeclaredBuiltInGh:_,setRunnerDeclaredFreshMachinePerSession:r,setRunnerDeclaredNestedRepositoryDiff:s,setRunnerDeclaredNoRepositoryCheckedOut:i}=await import("/$bunfs/root/chunk-r1tgzm8q.js");if(t){if(s(!0),E.includes("no-repository-checked-out"))i(!0)}if(R)r(!0);if(n)_(n)}
export{kzi,NCr,Ezi,vzi,Tzi,Czi,ked};
