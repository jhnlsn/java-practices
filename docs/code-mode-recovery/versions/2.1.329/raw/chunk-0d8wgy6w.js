// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var YLi="runner-declares";var SSr="diff-finds-nested-repository",XLi="no-repository-checked-out";var JLi="built-in-gh",QLi="built-in-gh-by-default";function ZLi(e){return"--runner-declares="+e.join(",")}async function NKl(e){if(!e.startsWith("--runner-declares="))return;let E=e.slice(18).split(","),t=E.includes("diff-finds-nested-repository"),R=!1,n=E.includes("built-in-gh")||E.includes("built-in-gh-by-default")&&"default";if(!t&&!R&&!n)return;let{setRunnerDeclaredBuiltInGh:_,setRunnerDeclaredFreshMachinePerSession:r,setRunnerDeclaredNestedRepositoryDiff:s,setRunnerDeclaredNoRepositoryCheckedOut:i}=await import("/$bunfs/root/chunk-xsy84ka8.js");if(t){if(s(!0),E.includes("no-repository-checked-out"))i(!0)}if(R)r(!0);if(n)_(n)}
export{YLi,SSr,XLi,JLi,QLi,ZLi,NKl};
