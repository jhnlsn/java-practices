// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{basename as t,join as o}from"path";var O0t="bundles",yYo=3600000,Ysr=o("claude.app","Contents","MacOS","claude"),n=String.raw`(\d[A-Za-z0-9._+-]*)@[0-9a-f]{12}\.[0-9a-f]{8}`,Xsr=new RegExp(`^${n}$`),r=new RegExp(String.raw`[\\/]versions[\\/]bundles[\\/]${n}[\\/]claude\.app[\\/]Contents[\\/]MacOS[\\/]claude$`);function sye(e){return r.exec(e)?.[1]}function Jsr(e){return sye(e)??t(e)}function I0t(e){return e.uid===process.getuid?.()&&(e.mode&18)===0}
export{O0t,yYo,Ysr,Xsr,sye,Jsr,I0t};
