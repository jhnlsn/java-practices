// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Oe,Os}from"/$bunfs/root/chunk-cqahc80t.js";import{hf,N$,at,Czn,PZi}from"/$bunfs/root/chunk-kgzzwvwc.js";import{bc,fl,hn,b,Ht,rRe}from"/$bunfs/root/chunk-aq3ms068.js";import{fh,zme}from"/$bunfs/root/chunk-8wtweva8.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{dCt}from"/$bunfs/root/chunk-k936fbc4.js";import{Qm,XLe}from"/$bunfs/root/chunk-0v6g5ynk.js";import{pTo}from"/$bunfs/root/chunk-t39fw2cy.js";import{CVi,qQ}from"/$bunfs/root/chunk-pxy9yt8m.js";import{kb}from"/$bunfs/root/chunk-92h2y9s9.js";import{Ee}from"/$bunfs/root/chunk-cd3hqxcc.js";import{Vk}from"/$bunfs/root/chunk-w03c3634.js";import{Jje,BEo,WEo}from"/$bunfs/root/chunk-r3ggct44.js";import{ja}from"/$bunfs/root/chunk-p66dv4s7.js";import{fy}from"/$bunfs/root/chunk-59xdgreq.js";import{x5e,Zuo}from"/$bunfs/root/chunk-0vn9q90x.js";import{ir}from"/$bunfs/root/chunk-bpdncsrm.js";var d="force";function Xuo(){try{if(Vk())return!1;if(Ee()!=="firstParty")return!1;let e=qQ("ENABLE_TOOL_SEARCH");if(e===d)return!0;if(CVi()!==d)return!1;if(Oe(qQ("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS")))return!1;return e===void 0||!E(e)}catch(e){return t(`isToolSearchForceOverride: settings read failed: ${e}`,{level:"error"}),!1}}function E(e){if(e.startsWith("auto:")){let o=fh(e.slice(5));return!isNaN(o)&&o>=100}return Os(e)}function SIi(){return!fl()&&x5e()}function bIi(){try{return Vk()&&!s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!Czn()&&Jje("allow_tool_search")===!0&&BEo()&&SIi()&&(fy()==="hosted_worker"?!kb()&&XLe():fy()==="none"&&!s.CLAUDE_CODE_REMOTE)}catch(e){return t(`isToolSearchAllowedUnderCompliance: ${e}`,{level:"error"}),!1}}function Eus(){let e=WEo(),o=Vk()||(Czn()||e&&!pTo())&&Zuo();if(o)PZi();return o}function $gr(){return Eus()?!bIi():s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!Xuo()}var T='ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'.replace(/"$/,',mcp__claude-in-chrome__browser_batch"');function p(e){return e.replace('ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"',T)}var _="Add task-specific tools to the same call when the task obviously needs them: read_console_messages / read_network_requests for debugging, form_input for forms, gif_creator for recordings, javascript_tool for page scripting.",m=`# Claude in Chrome browser automation

You have access to browser automation tools (mcp__claude-in-chrome__*) for interacting with web pages in Chrome. Follow these guidelines for effective browser automation.`,S=`## Loading deferred tools

If the mcp__claude-in-chrome__* tools are deferred (must be loaded via ToolSearch before use), load every tool you expect to need in ONE ToolSearch call \u2014 the select query accepts a comma-separated list \u2014 never one call per tool. Start with the core set:

${'ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'}

${_}`,h=`## GIF recording

When performing multi-step browser interactions that the user may want to review or share, use mcp__claude-in-chrome__gif_creator to record them.

You must ALWAYS:
* Capture extra frames before and after taking actions to ensure smooth playback
* Name the file meaningfully to help the user identify it later (e.g., "login_process.gif")

## Console log debugging

You can use mcp__claude-in-chrome__read_console_messages to read console output. Console output may be verbose. If you are looking for specific log entries, use the 'pattern' parameter with a regex-compatible pattern. This filters results efficiently and avoids overwhelming output. For example, use pattern: "[MyApp]" to filter for application-specific logs rather than reading all console output.

## Alerts and dialogs

IMPORTANT: Do not trigger JavaScript alerts, confirms, prompts, or browser modal dialogs through your actions. These browser dialogs block all further browser events and will prevent the extension from receiving any subsequent commands. Instead, when possible, use console.log for debugging and then use the mcp__claude-in-chrome__read_console_messages tool to read those log messages. If a page has dialog-triggering elements:
1. Avoid clicking buttons or links that may trigger alerts (e.g., "Delete" buttons with confirmation dialogs)
2. If you must interact with such elements, warn the user first that this may interrupt the session
3. Use mcp__claude-in-chrome__javascript_tool to check for and dismiss any existing dialogs before proceeding

If you accidentally trigger a dialog and lose responsiveness, inform the user they need to manually dismiss it in the browser.

## Avoid rabbit holes and loops

When using browser automation tools, stay focused on the specific task. If you encounter any of the following, stop and ask the user for guidance:
- Unexpected complexity or tangential browser exploration
- Browser tool calls failing or returning errors after 2-3 attempts
- No response from the browser extension
- Page elements not responding to clicks or input
- Pages not loading or timing out
- Unable to complete the browser task despite multiple approaches

Explain what you attempted, what went wrong, and ask how the user would like to proceed. Do not keep retrying the same failing browser action or explore unrelated pages without checking in first.

## Tab context and session startup

IMPORTANT: At the start of each browser automation session, call mcp__claude-in-chrome__tabs_context_mcp first to get information about the user's current browser tabs. Use this context to understand what the user might want to work with before creating new tabs.

Never reuse tab IDs from a previous/other session. Follow these guidelines:
1. Only reuse an existing tab if the user explicitly asks to work with it
2. Otherwise, create a new tab with mcp__claude-in-chrome__tabs_create_mcp
3. If a tool returns an error indicating the tab doesn't exist or is invalid, call tabs_context_mcp to get fresh tab IDs
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`,O=`${m}

${S}

${h}`,y=`${m}

${h}`,Jal=`**IMPORTANT: If the Chrome browser tools are deferred (must be loaded via ToolSearch before use), load them with ToolSearch before calling them, and batch every tool you expect to need into ONE ToolSearch call (the select query accepts a comma-separated list). Do NOT load tools one at a time; each separate ToolSearch call wastes a full round-trip.**

Start a browser task whose tools are not yet loaded with a single call loading the core set:

ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"

${_} Only issue a second ToolSearch if the task later needs a tool you did not anticipate.`;function dUt(e){return e?O:y}function vus(e,o){let r=/^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),n=r?.[1],l=r?.[2];if(!n||!l)return!1;let a=o.find(([i])=>i===n)?.[1];if(!a)return!1;let u=l.split("-").map(Number);for(let i=0;i<Math.max(u.length,a.length);i++){let f=(u[i]??0)-(a[i]??0);if(f!==0)return f>0}return!0}function wIi(e){if(!e.startsWith("auto:"))return null;let o=e.slice(5),r=fh(o);if(isNaN(r))return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`),null;return Math.max(0,Math.min(100,r))}function w(e){if(!e)return!1;return e==="auto"||e.startsWith("auto:")}function Die(){if($gr())return"standard";if(Xuo())return"tst";let e=process.env.ENABLE_TOOL_SEARCH,o=e?wIi(e):null;if(o===0)return"tst";if(o===100)return"standard";if(w(e))return"tst-auto";if(Oe(e))return"tst";if(Os(e))return"standard";return"tst"}var A=["claude-3-opus","claude-3-sonnet","claude-3-haiku","claude-3-5-sonnet","claude-3-5-haiku","claude-3-7-sonnet"],C=[["opus",[4,5]],["sonnet",[4,5]],["haiku",[4,5]]];function B0e(e){if(Ee()!=="vertex")return!1;let o=ir(e).replace(/[@-]\d{8}$/,"");if(/^claude-3(-|$)/.test(o))return!0;return/^claude-(opus|sonnet|haiku)-\d/.test(o)&&!vus(o,C)}function R(){try{let e=b("tengu_tool_search_unsupported_models",null);if(Array.isArray(e))return e}catch{}return A}var c=[];function L(e){if(e===null||Array.isArray(e)||typeof e!=="object")return e;let o=e,r=hf(),n=r!==void 0?r:N$();if(typeof n==="string"){let l=n.toLowerCase();for(let a of Object.keys(o))if(a!=="*"&&a.length>0&&l.includes(a.toLowerCase()))return o[a]}return o["*"]}function pI(){let e=new Set;try{let o=L(b("tengu_non_deferrable_builtins",null));if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}try{let o=rRe("non_deferrable_builtins");if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}if(e.size===0)return c;return[...e]}function Qal(){return Ht("tengu_shiny_stardust",!1)}var g=new Map,x=400;function Bgr(){let e=Ht("tengu_snug_nautilus",null);if(typeof e!=="object"||e===null||!("whenToUse"in e)||e.whenToUse!==!0)return{whenToUse:!1,defer:c,sentences:g};return{whenToUse:!0,defer:"defer"in e&&Array.isArray(e.defer)?e.defer.filter((o)=>typeof o==="string"):c,sentences:"sentences"in e&&typeof e.sentences==="object"&&e.sentences!==null?new Map(Object.entries(e.sentences).flatMap(([o,r])=>{let n=dCt(r);return n!==null&&n.length<=x?[[o,n]]:[]})):g}}var v="tengu_drifting_heron";function Zal(){return Ht(v,!0)!==!1}var N="tengu_snazzy_octopus";function ell(e){if(!at()||Ht(N,!1)!==!0)return!1;return e(hf())}var D="tengu_fancy_milner";function Tus(){return bc()&&Ht(D,!0)!==!1}function cUt(e){let o=e.toLowerCase(),r=R();for(let n of r)if(o.includes(n.toLowerCase()))return!1;return!0}function W0e(e){if(cUt(e))return!0;let o=b("tengu_swift_pelican",null);return Ee()==="firstParty"&&Array.isArray(o)&&zme(e,o)}function R5e(e){let o=p(e);return o!==e&&Ht("tengu_tranquil_starlight",!1)?o:e}function __(){let e=Die();if(e==="standard"){if(ja().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${s.ENABLE_TOOL_SEARCH}, result=false`);return!1}if(ja().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${s.ENABLE_TOOL_SEARCH}, result=true`);return!0}function Cus(){return b("tengu_surface_failed_mcp_servers",!0)}function kbt(){let e=s.CLAUDE_CODE_SORTED_OTTER;if(e!==void 0)return e;return b("tengu_sorted_otter",!1)}var M="tengu_fizzy_wren";function tll(){return b(M,!1)===!0}function nll(){let{value:e,source:o}=hn("tengu_precious_koala","off"),r=typeof e==="string"?e.trim().toLowerCase():e,n=Qm();return{inForce:r==="everywhere"||r==="hosted"&&n,flagSource:o,coworkSurface:n}}function rll(){return b("tengu_modular_marble",!1)===!0}
export{Xuo,SIi,bIi,Eus,$gr,Jal,dUt,vus,wIi,Die,B0e,pI,Qal,Bgr,Zal,ell,Tus,cUt,W0e,R5e,__,Cus,kbt,tll,nll,rll};
