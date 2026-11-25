// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{basename as t,join as o}from"path";var SIt="bundles",H6o=3600000,lZn=o("claude.app","Contents","MacOS","claude"),n=String.raw`(\d[A-Za-z0-9._+-]*)@[0-9a-f]{12}\.[0-9a-f]{8}`,dZn=new RegExp(`^${n}$`),r=new RegExp(String.raw`[\\/]versions[\\/]bundles[\\/]${n}[\\/]claude\.app[\\/]Contents[\\/]MacOS[\\/]claude$`);function nge(e){return r.exec(e)?.[1]}function cZn(e){return nge(e)??t(e)}function bIt(e){return e.uid===process.getuid?.()&&(e.mode&18)===0}
export{SIt,H6o,lZn,dZn,nge,cZn,bIt};
