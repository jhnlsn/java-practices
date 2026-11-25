// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Nte}from"/$bunfs/root/chunk-0q5cbhww.js";import{JTi}from"/$bunfs/root/chunk-51ew2vra.js";var N=Nte("ADDRESS ARTICLE ASIDE AUDIO BLOCKQUOTE BODY CANVAS CENTER DD DIR DIV DL DT FIELDSET FIGCAPTION FIGURE FOOTER FORM FRAMESET H1 H2 H3 H4 H5 H6 HEADER HGROUP HR HTML ISINDEX LI MAIN MENU NAV NOFRAMES NOSCRIPT OL OUTPUT P PRE SECTION TABLE TBODY TD TFOOT TH THEAD TR UL"),S="AREA BASE BR COL COMMAND EMBED HR IMG INPUT KEYGEN LINK META PARAM SOURCE TRACK WBR",L=Nte(S),w=Nte(`${S} A AUDIO IFRAME SCRIPT TABLE TBODY TD TFOOT TH THEAD VIDEO`),C=[`
`.repeat(256),`
`],M=200000000;function y(t,n,s){let e=JTi(t),a=new D;a.walk(e),a.endLine();let c=[];return T(e,0,c),new O(n,s,c.join("")).contentOf(e,!1,!1).replace(/^[\t\r\n]+/,"").trimEnd()}class D{#t;#e=!1;walk(t){let n=[];for(let s of t.childNodes)if(s.namespace){if(n.push(s),this.#n(s),s.childNodes.length>0&&s.nodeName!=="PRE")this.walk(s),this.#n(s)}else if(s.nodeName==="#text"){let e=s.data.replace(/[ \t\r\n]{2,}|[\t\r\n]/g," ");if(e[0]===" "&&!this.#e&&(this.#t?.data.endsWith(" ")??!0))e=e.slice(1);if(e)s.data=e,n.push(this.#t=s)}t.childNodes=n}#n({nodeName:t}){if(N.has(t)||t==="BR")this.endLine();else if(L.has(t))this.#t=void 0,this.#e=!0;else if(this.#t)this.#e=!1}endLine(){if(this.#t?.data.endsWith(" "))this.#t.data=this.#t.data.slice(0,-1);this.#t=void 0,this.#e=!1}}function T(t,n,s){if(t.start=t.end=n,t.spaceAtStart=t.plainAtStart=t.spaceAtEnd=t.plainAtEnd=0,!t.namespace){let{data:e}=t;s.push(e),t.end+=e.length,t.spaceAtStart=e.length-e.trimStart().length,t.spaceAtEnd=e.length-e.trimEnd().length,t.plainAtStart=e.search(/[^ \t\r\n]|$/);while(` 	\r
`.includes(e.at(-t.plainAtEnd-1)??"_"))t.plainAtEnd++;return}t.hasSubstance=w.has(t.nodeName);for(let e of t.childNodes){T(e,t.end,s);let a=t.end-n,c=e.end-e.start;if(t.hasSubstance||=e.hasSubstance,t.spaceAtStart===a)t.spaceAtStart+=e.spaceAtStart;if(t.plainAtStart===a)t.plainAtStart+=e.plainAtStart;if(t.spaceAtEnd=e.spaceAtEnd+(e.spaceAtEnd===c?t.spaceAtEnd:0),t.plainAtEnd=e.plainAtEnd+(e.plainAtEnd===c?t.plainAtEnd:0),t.end=e.end,e.namespace)t.lastElement=e}}class O{rules;removed;text;constructor(t,n,s){this.rules=t;this.removed=n;this.text=s}contentOf(t,n,s){let e="",a=0,c=0;for(let o=0;o<t.childNodes.length;o++){let r=t.childNodes[o],i=r.namespace?this.#t(r,o,c++,n,s):n?r.data:P(r.data),d=0,l=i.length;for(let h of C){while(i.startsWith(h,d))d+=h.length;while(l-d>=h.length&&i.endsWith(h,l))l-=h.length}if(a=Math.min(2,Math.max(a,d)),l>d){if(e+=`
`.repeat(a)+i.slice(d,l),a=i.length-l,e.length>M)throw RangeError("The Markdown is too long")}}return e+`
`.repeat(a)}#t(t,n,s,e,a){let c=N.has(t.nodeName),o=t.isAllSpace&&!(t.hasSubstance&&t.namespace==="html"),r=o?void 0:this.rules.find((p)=>p.filter(t)),i=t.childNodes[0],d=!r&&t.nodeName==="PRE"&&i?.nodeName==="CODE",l=this.contentOf(t,e||t.nodeName==="CODE",a||d);if(d&&!o)return a?"":`

    ${this.text.slice(i.start,i.end).replaceAll(`
`,`
    `)}

`;let h="",u="";if(!c){let p=t.parentNode.childNodes,{start:A,end:f}=t,I=g(p[n-1]),b=g(p[n+1]);if(h=this.text.slice(I?.plainAtEnd&&this.text[A-1]===" "?A+t.plainAtStart:A,A+t.spaceAtStart),u=this.text.slice(f-t.spaceAtEnd,b?.plainAtStart&&this.text[f]===" "?f-t.plainAtEnd:f),t.isAllSpace)u=""}if(o)return c?`

`:h;if(h||u)l=l.trim();let R=r?r.replacement(l,t):B(l,t,n,s)??(this.removed.includes(t.nodeName.toLowerCase())?"":c?`

${l}

`:l);return h+R+u}}function g(t){return t&&!N.has(t.nodeName)?t:void 0}function B(t,n,s,e){let a=n.parentNode,c=n.nodeName.toLowerCase();switch(c){case"p":return`

${t}

`;case"br":return`  
`;case"hr":return`

* * *

`;case"h1":case"h2":return`

${t}
${(c==="h1"?"=":"-").repeat(t.length)}

`;case"h3":case"h4":case"h5":case"h6":return`

${"#".repeat(Number(c[1]))} ${t}

`;case"blockquote":return`

${m(t).replace(/^/gm,"> ")}

`;case"ul":case"ol":return a.nodeName==="LI"&&a.lastElement===n?`
${t}`:`

${t}

`;case"li":{let r="*   ";if(a.nodeName==="OL")r=`${Number(a.getAttribute("start")||1)+e}.  `;let i=m(t),d=(i&&t.endsWith(`
`)?`${i}
`:i).replaceAll(`
`,`
    `);return`${r}${d}${s+1<a.childNodes.length?`
`:""}`}case"em":case"i":return/\S/.test(t)?`_${t}_`:"";case"strong":case"b":return/\S/.test(t)?`**${t}**`:"";case"img":{let r=n.getAttribute("src"),i=E(n,"title");return r?`![${E(n,"alt")}](${r}${i&&` "${i}"`})`:""}}if(n.nodeName==="CODE"&&(a.nodeName!=="PRE"||a.childNodes.length>1))return H(t);let o=n.nodeName==="A"&&n.getAttribute("href");if(o){let r=E(n,"title").replaceAll('"',"\\\"");return`[${t}](${o.replace(/[()]/g,"\\$&")}${r&&` "${r}"`})`}return}function H(t){let n=t.replace(/\r\n?|\n/g," ");if(!n)return"";let s=new Set(n.match(/`+/g)),e="`";while(s.has(e))e+="`";return n.startsWith("`")||n.endsWith("`")||n.startsWith(" ")&&n.endsWith(" ")&&/[^ ]/.test(n)&&!/[\u2028\u2029][^]*[\u2028\u2029]/.test(n)?`${e} ${n} ${e}`:e+n+e}function P(t){return t.replace(/[\\*`[\]_]/g,"\\$&").replace(/^(?:[-=>]|\+ |#{1,6} |~~~)/,"\\$&").replace(/^(\d+)\. /,"$1\\. ")}function E(t,n){return t.getAttribute(n)?.replace(/\n\s*/g,`
`)??""}function m(t){let n=t.length;while(t[n-1]===`
`)n--;return t.slice(0,n).replace(/^\n+/,"")}export{y as turndown};
