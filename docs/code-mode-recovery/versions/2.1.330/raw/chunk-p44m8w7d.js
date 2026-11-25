// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ne,Oi}from"/$bunfs/root/chunk-69qhefwa.js";import{ju,BB,st,G3n,Sca}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Hc,cl,gn,b,Lt,R6t}from"/$bunfs/root/chunk-865at33z.js";import{Ch,zge}from"/$bunfs/root/chunk-2gtmjt3y.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{aPt}from"/$bunfs/root/chunk-kx2fp6pc.js";import{ph,Hge}from"/$bunfs/root/chunk-3t7ve0wy.js";import{PMo}from"/$bunfs/root/chunk-xcgcdx61.js";import{kJi,Hee}from"/$bunfs/root/chunk-2yx6c1y2.js";import{ny}from"/$bunfs/root/chunk-6e68m1dj.js";import{ve}from"/$bunfs/root/chunk-zhr7rpv7.js";import{fk}from"/$bunfs/root/chunk-xfj2cwfv.js";import{Oze,lIo,dIo}from"/$bunfs/root/chunk-2zeyvjwb.js";import{Wa}from"/$bunfs/root/chunk-szvrpg0x.js";import{Uy}from"/$bunfs/root/chunk-r6r2wdsw.js";import{kYe,_bo}from"/$bunfs/root/chunk-vyzg3yfa.js";import{ur}from"/$bunfs/root/chunk-zmb62hr5.js";var d="force";function mbo(){try{if(fk())return!1;if(ve()!=="firstParty")return!1;let e=Hee("ENABLE_TOOL_SEARCH");if(e===d)return!0;if(kJi()!==d)return!1;if(Ne(Hee("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS")))return!1;return e===void 0||!E(e)}catch(e){return t(`isToolSearchForceOverride: settings read failed: ${e}`,{level:"error"}),!1}}function E(e){if(e.startsWith("auto:")){let o=Ch(e.slice(5));return!isNaN(o)&&o>=100}return Oi(e)}function zUi(){return!cl()&&kYe()}function VUi(){try{return fk()&&!s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!G3n()&&Oze("allow_tool_search")===!0&&lIo()&&zUi()&&(Uy()==="hosted_worker"?!ny()&&Hge():Uy()==="none"&&!s.CLAUDE_CODE_REMOTE)}catch(e){return t(`isToolSearchAllowedUnderCompliance: ${e}`,{level:"error"}),!1}}function gbs(){let e=dIo(),o=fk()||(G3n()||e&&!PMo())&&_bo();if(o)Sca();return o}function ZEr(){return gbs()?!VUi():s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!mbo()}var T='ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'.replace(/"$/,',mcp__claude-in-chrome__browser_batch"');function p(e){return e.replace('ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"',T)}var _="Add task-specific tools to the same call when the task obviously needs them: read_console_messages / read_network_requests for debugging, form_input for forms, gif_creator for recordings, javascript_tool for page scripting.",m=`# Claude in Chrome browser automation

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
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`,y=`${m}

${S}

${h}`,O=`${m}

${h}`,FSl=`**IMPORTANT: If the Chrome browser tools are deferred (must be loaded via ToolSearch before use), load them with ToolSearch before calling them, and batch every tool you expect to need into ONE ToolSearch call (the select query accepts a comma-separated list). Do NOT load tools one at a time; each separate ToolSearch call wastes a full round-trip.**

Start a browser task whose tools are not yet loaded with a single call loading the core set:

ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"

${_} Only issue a second ToolSearch if the task later needs a tool you did not anticipate.`;function Wjt(e){return e?y:O}function _bs(e,o){let r=/^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),n=r?.[1],l=r?.[2];if(!n||!l)return!1;let a=o.find(([i])=>i===n)?.[1];if(!a)return!1;let u=l.split("-").map(Number);for(let i=0;i<Math.max(u.length,a.length);i++){let f=(u[i]??0)-(a[i]??0);if(f!==0)return f>0}return!0}function KUi(e){if(!e.startsWith("auto:"))return null;let o=e.slice(5),r=Ch(o);if(isNaN(r))return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`),null;return Math.max(0,Math.min(100,r))}function w(e){if(!e)return!1;return e==="auto"||e.startsWith("auto:")}function Rle(){if(ZEr())return"standard";if(mbo())return"tst";let e=process.env.ENABLE_TOOL_SEARCH,o=e?KUi(e):null;if(o===0)return"tst";if(o===100)return"standard";if(w(e))return"tst-auto";if(Ne(e))return"tst";if(Oi(e))return"standard";return"tst"}var A=["claude-3-opus","claude-3-sonnet","claude-3-haiku","claude-3-5-sonnet","claude-3-5-haiku","claude-3-7-sonnet"],C=[["opus",[4,5]],["sonnet",[4,5]],["haiku",[4,5]]];function iLe(e){if(ve()!=="vertex")return!1;let o=ur(e).replace(/[@-]\d{8}$/,"");if(/^claude-3(-|$)/.test(o))return!0;return/^claude-(opus|sonnet|haiku)-\d/.test(o)&&!_bs(o,C)}function R(){try{let e=b("tengu_tool_search_unsupported_models",null);if(Array.isArray(e))return e}catch{}return A}var c=[];function L(e){if(e===null||Array.isArray(e)||typeof e!=="object")return e;let o=e,r=ju(),n=r!==void 0?r:BB();if(typeof n==="string"){let l=n.toLowerCase();for(let a of Object.keys(o))if(a!=="*"&&a.length>0&&l.includes(a.toLowerCase()))return o[a]}return o["*"]}function cM(){let e=new Set;try{let o=L(b("tengu_non_deferrable_builtins",null));if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}try{let o=R6t("non_deferrable_builtins");if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}if(e.size===0)return c;return[...e]}function $Sl(){return Lt("tengu_shiny_stardust",!1)}var g=new Map,x=400;function evr(){let e=Lt("tengu_snug_nautilus",null);if(typeof e!=="object"||e===null||!("whenToUse"in e)||e.whenToUse!==!0)return{whenToUse:!1,defer:c,sentences:g};return{whenToUse:!0,defer:"defer"in e&&Array.isArray(e.defer)?e.defer.filter((o)=>typeof o==="string"):c,sentences:"sentences"in e&&typeof e.sentences==="object"&&e.sentences!==null?new Map(Object.entries(e.sentences).flatMap(([o,r])=>{let n=aPt(r);return n!==null&&n.length<=x?[[o,n]]:[]})):g}}var v="tengu_drifting_heron";function USl(){return Lt(v,!0)!==!1}function BSl(e){return st()&&e(ju())}var N="tengu_fancy_milner";function ybs(){return Hc()&&Lt(N,!0)!==!1}function jjt(e){let o=e.toLowerCase(),r=R();for(let n of r)if(o.includes(n.toLowerCase()))return!1;return!0}function aLe(e){if(jjt(e))return!0;let o=b("tengu_swift_pelican",null);return ve()==="firstParty"&&Array.isArray(o)&&zge(e,o)}function wYe(e){let o=p(e);return o!==e&&Lt("tengu_tranquil_starlight",!1)?o:e}function j_(){let e=Rle();if(e==="standard"){if(Wa().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${s.ENABLE_TOOL_SEARCH}, result=false`);return!1}if(Wa().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${s.ENABLE_TOOL_SEARCH}, result=true`);return!0}function Sbs(){return b("tengu_surface_failed_mcp_servers",!0)}function avt(){let e=s.CLAUDE_CODE_SORTED_OTTER;if(e!==void 0)return e;return b("tengu_sorted_otter",!1)}var D="tengu_fizzy_wren";function WSl(){return b(D,!1)===!0}function jSl(){let{value:e,source:o}=gn("tengu_precious_koala","off"),r=typeof e==="string"?e.trim().toLowerCase():e,n=ph();return{inForce:r==="everywhere"||r==="hosted"&&n,flagSource:o,coworkSurface:n}}function GSl(){return b("tengu_modular_marble",!1)===!0}
export{mbo,zUi,VUi,gbs,ZEr,FSl,Wjt,_bs,KUi,Rle,iLe,cM,$Sl,evr,USl,BSl,ybs,jjt,aLe,wYe,j_,Sbs,avt,WSl,jSl,GSl};
