// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function bre(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n)|0;return e}function g0(t){return Bun.hash(t).toString()}function Lfn(t,e){return Bun.hash(e,Bun.hash(t)).toString()}var HGn="pasted_content",rPr=4,Lzt='<pasted_content id="',Z8i=`">
`,ORo='</pasted_content id="';function mdt(t){return`<pasted_content id="${t}">
`}function Nzt(t){return`</pasted_content id="${t}">
`}function eYi(t){if(t.length!==4)return!1;for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(!(n>=48&&n<=57||n>=97&&n<=102))return!1}return!0}var tYi=/[([{"'`]/,nYi=/[)\]}"'`.,;:!?]/;function rYi(t,e=0,n=t.length){let s=e;while(s<n&&nYi.test(t[s]))s++;return s>=n||/\s/.test(t[s])}function hdt(t){let e=[],n=0,s=0;for(;;){let c=t.indexOf('<pasted_content id="',s);if(c===-1)break;let r=c+20,o=t.slice(r,r+4);if(!eYi(o)||!t.startsWith(`">
`,r+4)){s=r;continue}let i=r+4+3,f=Nzt(o).slice(0,-1),l=t.indexOf(`
${f}`,i-1)+1;if(l===0)break;let d=c;for(let a=0;a<2&&d>n&&t[d-1]===`
`;a++)d--;if(d>n)e.push({kind:"text",text:t.slice(n,d)});n=l+f.length;for(let a=0;a<2&&t[n]===`
`;a++)n++;e.push({kind:"block",id:o,body:t.slice(i,l-1),raw:t.slice(d,n)}),s=n}if(n<t.length)e.push({kind:"text",text:t.slice(n)});return e}function sIl(t){let e=hdt(t);if(!e.some((n)=>n.kind==="block"))return t;return e.map((n)=>n.kind==="text"?n.text:n.body).join(`

`).trim()}function vxe(t){let e=hdt(t);if(e.length===1&&e[0].kind==="text")return t;return e.map((n)=>n.kind==="text"?n.text:n.body).join("")}function iIl(t,e){let n=hdt(t);if(!n.some((r)=>r.kind==="block"&&r.id===e))return t;let s="",c=!1;for(let[r,o]of n.entries()){let i=n[r+1],u=i?.kind==="block"&&i.id===e;if(o.kind==="text"||o.id!==e){let E=o.kind==="text"?o.text:o.raw;if(c)E=E.replace(/^\s+/,"");if(u&&i.body.includes(`
`))E=E.replace(/\s+$/,"");if(E==="")continue;if(c&&s!=="")s+=`
`;s+=E,c=!1;continue}let f=o.body.includes(`
`),l=s.length;while(l>0&&tYi.test(s[l-1]))l--;let d=l===0||/\s/.test(s[l-1]);if((f||c||!d)&&s!=="")s+=`
`;s+=o.body;let a=i===void 0?"":i.kind==="text"?i.text:i.raw;c=f||u||/^\s\s/.test(a)||!rYi(a)}return s}
export{bre,g0,Lfn,HGn,rPr,Lzt,Z8i,ORo,mdt,Nzt,eYi,tYi,nYi,rYi,hdt,sIl,vxe,iIl};
