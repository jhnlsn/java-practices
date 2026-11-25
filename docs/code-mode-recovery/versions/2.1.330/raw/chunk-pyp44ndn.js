// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{yre}from"/$bunfs/root/chunk-hnffg7ty.js";import{WLi}from"/$bunfs/root/chunk-j71v4knm.js";var g=yre("ADDRESS ARTICLE ASIDE AUDIO BLOCKQUOTE BODY CANVAS CENTER DD DIR DIV DL DT FIELDSET FIGCAPTION FIGURE FOOTER FORM FRAMESET H1 H2 H3 H4 H5 H6 HEADER HGROUP HR HTML ISINDEX LI MAIN MENU NAV NOFRAMES NOSCRIPT OL OUTPUT P PRE SECTION TABLE TBODY TD TFOOT TH THEAD TR UL"),D="AREA BASE BR COL COMMAND EMBED HR IMG INPUT KEYGEN LINK META PARAM SOURCE TRACK WBR",L=yre(D),M=yre(`${D} A AUDIO IFRAME SCRIPT TABLE TBODY TD TFOOT TH THEAD VIDEO`),C=[`
`.repeat(256),`
`],B=200000000,N=1e4;function x(t,n,s){let e=WLi(t),r=new T;r.walk(e),r.endLine();let o=[];return O(e,0,o),new R(n,s,o.join("")).contentOf(e,!1,!1).replace(/^[\t\r\n]+/,"").trimEnd()}class T{#t;#e=!1;walk(t){let n=[];for(let s of t.childNodes)if(s.namespace){if(n.push(s),this.#n(s),s.childNodes.length>0&&s.nodeName!=="PRE")this.walk(s),this.#n(s)}else if(s.nodeName==="#text"){let e=s.data.replace(/[ \t\r\n]{2,}|[\t\r\n]/g," ");if(e[0]===" "&&!this.#e&&(this.#t?.data.endsWith(" ")??!0))e=e.slice(1);if(e)s.data=e,n.push(this.#t=s)}t.childNodes=n}#n({nodeName:t}){if(g.has(t)||t==="BR")this.endLine();else if(L.has(t))this.#t=void 0,this.#e=!0;else if(this.#t)this.#e=!1}endLine(){if(this.#t?.data.endsWith(" "))this.#t.data=this.#t.data.slice(0,-1);this.#t=void 0,this.#e=!1}}function O(t,n,s){if(t.start=t.end=n,t.spaceAtStart=t.plainAtStart=t.spaceAtEnd=t.plainAtEnd=0,!t.namespace){let{data:e}=t;s.push(e),t.end+=e.length,t.spaceAtStart=e.length-e.trimStart().length,t.spaceAtEnd=e.length-e.trimEnd().length,t.plainAtStart=e.search(/[^ \t\r\n]|$/);while(` 	\r
`.includes(e.at(-t.plainAtEnd-1)??"_"))t.plainAtEnd++;return}t.hasSubstance=M.has(t.nodeName);for(let e of t.childNodes){O(e,t.end,s);let r=t.end-n,o=e.end-e.start;if(t.hasSubstance||=e.hasSubstance,t.spaceAtStart===r)t.spaceAtStart+=e.spaceAtStart;if(t.plainAtStart===r)t.plainAtStart+=e.plainAtStart;if(t.spaceAtEnd=e.spaceAtEnd+(e.spaceAtEnd===o?t.spaceAtEnd:0),t.plainAtEnd=e.plainAtEnd+(e.plainAtEnd===o?t.plainAtEnd:0),t.end=e.end,e.namespace)t.lastElement=e}}class R{rules;removed;text;#t=performance.now()+N;#e=process.cpuUsage();constructor(t,n,s){this.rules=t;this.removed=n;this.text=s}contentOf(t,n,s){let e="",r=0,o=0;for(let d=0;d<t.childNodes.length;d++){let a=t.childNodes[d],i=a.namespace?this.#n(a,d,o++,n,s):n?a.data:H(a.data);if(a.namespace&&performance.now()>this.#t){let{user:l,system:u}=process.cpuUsage(this.#e);if(l+u>N*1000)throw RangeError("The Markdown takes too long to write")}let h=0,c=i.length;for(let l of C){while(i.startsWith(l,h))h+=l.length;while(c-h>=l.length&&i.endsWith(l,c))c-=l.length}if(r=Math.min(2,Math.max(r,h)),c>h){if(e+=`
`.repeat(r)+i.slice(h,c),r=i.length-c,e.length>B)throw RangeError("The Markdown is too long")}}return e+`
`.repeat(r)}#n(t,n,s,e,r){let o=g.has(t.nodeName),d=t.isAllSpace&&!(t.hasSubstance&&t.namespace==="html"),a=d?void 0:this.rules.find((p)=>p.filter(t)),i=t.childNodes[0],h=!a&&t.nodeName==="PRE"&&i?.nodeName==="CODE",c=this.contentOf(t,e||t.nodeName==="CODE",r||h);if(h&&!d)return r?"":`

    ${this.text.slice(i.start,i.end).replaceAll(`
`,`
    `)}

`;let l="",u="";if(!o){let p=t.parentNode.childNodes,{start:f,end:A}=t,b=m(p[n-1]),w=m(p[n+1]);if(l=this.text.slice(b?.plainAtEnd&&this.text[f-1]===" "?f+t.plainAtStart:f,f+t.spaceAtStart),u=this.text.slice(A-t.spaceAtEnd,w?.plainAtStart&&this.text[A]===" "?A-t.plainAtEnd:A),t.isAllSpace)u=""}if(d)return o?`

`:l;if(l||u)c=c.trim();let I=a?a.replacement(c,t):y(c,t,n,s)??(this.removed.includes(t.nodeName.toLowerCase())?"":o?`

${c}

`:c);return l+I+u}}function m(t){return t&&!g.has(t.nodeName)?t:void 0}function y(t,n,s,e){let r=n.parentNode,o=n.nodeName.toLowerCase();switch(o){case"p":return`

${t}

`;case"br":return`  
`;case"hr":return`

* * *

`;case"h1":case"h2":return`

${t}
${(o==="h1"?"=":"-").repeat(t.length)}

`;case"h3":case"h4":case"h5":case"h6":return`

${"#".repeat(Number(o[1]))} ${t}

`;case"blockquote":return`

${S(t).replace(/^/gm,"> ")}

`;case"ul":case"ol":return r.nodeName==="LI"&&r.lastElement===n?`
${t}`:`

${t}

`;case"li":{let a="*   ";if(r.nodeName==="OL")a=`${Number(r.getAttribute("start")||1)+e}.  `;let i=S(t),h=(i&&t.endsWith(`
`)?`${i}
`:i).replaceAll(`
`,`
    `);return`${a}${h}${s+1<r.childNodes.length?`
`:""}`}case"em":case"i":return/\S/.test(t)?`_${t}_`:"";case"strong":case"b":return/\S/.test(t)?`**${t}**`:"";case"img":{let a=n.getAttribute("src"),i=E(n,"title");return a?`![${E(n,"alt")}](${a}${i&&` "${i}"`})`:""}}if(n.nodeName==="CODE"&&(r.nodeName!=="PRE"||r.childNodes.length>1))return k(t);let d=n.nodeName==="A"&&n.getAttribute("href");if(d){let a=E(n,"title").replaceAll('"',"\\\"");return`[${t}](${d.replace(/[()]/g,"\\$&")}${a&&` "${a}"`})`}return}function k(t){let n=t.replace(/\r\n?|\n/g," ");if(!n)return"";let s=new Set(n.match(/`+/g)),e="`";while(s.has(e))e+="`";return n.startsWith("`")||n.endsWith("`")||n.startsWith(" ")&&n.endsWith(" ")&&/[^ ]/.test(n)&&!/[\u2028\u2029][^]*[\u2028\u2029]/.test(n)?`${e} ${n} ${e}`:e+n+e}function H(t){return t.replace(/[\\*`[\]_]/g,"\\$&").replace(/^(?:[-=>]|\+ |#{1,6} |~~~)/,"\\$&").replace(/^(\d+)\. /,"$1\\. ")}function E(t,n){return t.getAttribute(n)?.replace(/\n\s*/g,`
`)??""}function S(t){let n=t.length;while(t[n-1]===`
`)n--;return t.slice(0,n).replace(/^\n+/,"")}export{x as turndown};
