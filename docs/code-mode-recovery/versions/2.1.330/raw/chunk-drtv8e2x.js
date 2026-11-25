// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ia}from"/$bunfs/root/chunk-kpby9tcv.js";import{kt}from"/$bunfs/root/chunk-7fsmgfxx.js";var ipo=(t,r)=>!ia(t.ino)&&t.dev===r.dev&&t.ino===r.ino;function hsn(t){let r=t.match(/^([A-Z]):(.*)$/i);if(!r)return null;return`/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\","/")}`}class pUt{wslDistroName;constructor(t){this.wslDistroName=t}async toLocalPath(t){if(!t)return t;if(this.wslDistroName){let o=t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);if(o&&o[1]!==this.wslDistroName)return t}let{stdout:r,code:e}=await kt("wslpath",["-u",t],{useCwd:!1}),n=r.trim();if(e===0&&n)return n;return hsn(t)??t.replaceAll("\\","/")}async toIDEPath(t){if(!t)return t;let{stdout:r,code:e}=await kt("wslpath",["-w",t],{useCwd:!1}),n=r.trim();if(e===0&&n)return n;return t}}function Wal(t,r){let e=t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);if(e)return e[1]===r;return!0}
export{hsn,pUt,Wal,ipo};
