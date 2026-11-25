// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xd}from"/$bunfs/root/chunk-7cfjrnwy.js";import{oe}from"/$bunfs/root/chunk-mgh1y10w.js";var m=2,g=2,S=36,C=30,h=4;function b(t,n){let o=Math.max(n,1),e=[];for(let s of t.split(`
`)){if(/^\s+\S/.test(s)){e.push(s);continue}let r=s.match(/\s*\S+/g);if(!r){e.push("");continue}let i="",a=0,u=!1;for(let p of r){let c=oe(p);if(!u)i=p,a=c,u=!0;else if(a+c<=o)i+=p,a+=c;else{e.push(i);let d=p.replace(/^\s+/,"");i=d,a=oe(d)}}e.push(i)}return e.join(`
`)}function f(t,n,o,e){let s=" ".repeat(m);if(!n)return s+t;let r=oe(t);if(n.includes(`
`)){let c=r<=o?xd(" ",o-r+g):" ".repeat(g);return(s+t+c+n).replace(/\n/g,`
`+s)}let i=e-m-o-g;if(r<=o&&i>=C){let c=xd(" ",o-r+g),d=" ".repeat(m+o+g),D=b(n,i);return s+t+c+D.replace(/\n/g,`
`+d)}let a=" ".repeat(m+h),u=e-m-h,p=b(n,u);return s+t+`
`+a+p.replace(/\n/g,`
`+a)}function l(t,n,o){if(o.length===0)return;t.push(n,...o,"")}function E(t,n){let o=n.helpWidth||80,e=Math.min(n.padWidth(t,n),S),s=[`Usage: ${n.commandUsage(t)}`,""],r=n.commandDescription(t);if(r.length>0)s.push(b(r,o),"");return l(s,"Arguments:",n.visibleArguments(t).map((i)=>f(n.argumentTerm(i),n.argumentDescription(i),e,o))),l(s,"Options:",n.visibleOptions(t).map((i)=>f(n.optionTerm(i),n.optionDescription(i),e,o))),l(s,"Commands:",n.visibleCommands(t).map((i)=>f(n.subcommandTerm(i),n.subcommandDescription(i),e,o))),s.join(`
`)}function tIe(){let t=(n)=>n.long?.replace(/^--/,"")??n.short?.replace(/^-/,"")??"";return{sortSubcommands:!0,formatHelp:E,compareOptions:(n,o)=>t(n).localeCompare(t(o))}}
export{tIe};
