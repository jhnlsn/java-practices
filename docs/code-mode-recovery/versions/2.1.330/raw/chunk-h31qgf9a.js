// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{w,Cr}from"/$bunfs/root/chunk-jv7av99m.js";import{u,m}from"/$bunfs/root/chunk-cqa9hrgx.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{Ze}from"/$bunfs/root/chunk-2gtmjt3y.js";import{at}from"/$bunfs/root/chunk-hkvzj051.js";import{Bf}from"/$bunfs/root/chunk-c203g5kd.js";import{kt}from"/$bunfs/root/chunk-7fsmgfxx.js";import{vt}from"/$bunfs/root/chunk-2yx6c1y2.js";import{MLe}from"/$bunfs/root/chunk-jmm1stqj.js";import{kAe}from"/$bunfs/root/chunk-66srb2mf.js";import{Bvt}from"/$bunfs/root/chunk-thchq5z2.js";import{ne}from"/$bunfs/root/chunk-m15w38ag.js";import{promises as n}from"fs";import*as h from"os";import*as o from"path";var zUs="com.anthropic.claude-code-url-handler",f="Claude Code URL Handler",k="claude-code-url-handler.desktop",D="Claude Code URL Handler.app",c=o.join(h.homedir(),"Applications",D),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Bvt(),"applications",k)}var p=`HKEY_CURRENT_USER\\Software\\Classes\\${MLe}`,y=`${p}\\shell\\open\\command`,g=86400000;function C(e){return`Exec="${e}" --handle-uri %u`}function E(e){return`"${e}" --handle-uri "%1"`}async function _(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(w(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${zUs}</string>
  <key>CFBundleName</key>
  <string>${f}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${MLe}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await kt("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${MLe}:// protocol handler at ${c}`)}async function F(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${f}
Comment=Handle ${MLe}:// deep links for Claude Code
${C(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${MLe};
`;await n.writeFile(d(),r);let i=await Bf("xdg-mime");if(i){let{code:a}=await kt(i,["default",k,`x-scheme-handler/${MLe}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${MLe}:// protocol handler at ${d()}`)}async function L(e){for(let r of[["add",p,"/ve","/d",`URL:${f}`,"/f"],["add",p,"/v","URL Protocol","/d","","/f"],["add",y,"/ve","/d",E(e),"/f"]]){let{code:i}=await kt("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${MLe}:// protocol handler in Windows registry`)}async function S(e){let r=e??await P();switch("darwin"){case"darwin":await _(r);break;case"linux":await F(r);break;case"win32":await L(r);break;default:throw Error("Unsupported platform: darwin")}}async function P(){let e=kAe();try{return await n.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(C(e));case"win32":{let{stdout:r,code:i}=await kt("reg",["query",y,"/ve"],{useCwd:!1});return i===0&&r.includes(E(e))}default:return!1}}catch{return!1}}async function xma(e){if(vt().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await P();if(await x(r))return;let i=o.join(Ze(),".deep-link-register-failed");if(ne()&&e!==void 0){let a=await e.stat(at.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<g)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<g)return}catch{}try{if(await S(r),u("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),ne()&&e!==void 0)await e.delete(at.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=Cr(a);if(m("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(ne()&&e!==void 0)await e.write(at.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{zUs,xma};
