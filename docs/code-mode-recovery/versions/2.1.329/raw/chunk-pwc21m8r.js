// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{I,S0}from"/$bunfs/root/chunk-m55722gg.js";import"/$bunfs/root/chunk-t4zrtehh.js";import"/$bunfs/root/chunk-hwa9etb0.js";import{vn}from"/$bunfs/root/chunk-r3zpj4t6.js";import{Sqe}from"/$bunfs/root/chunk-g4jweshk.js";import"/$bunfs/root/chunk-y98mhv74.js";import"/$bunfs/root/chunk-avbzeyf3.js";import"/$bunfs/root/chunk-hwcsndx4.js";import"/$bunfs/root/chunk-k936fbc4.js";import{Lt}from"/$bunfs/root/chunk-tyy049k4.js";import"/$bunfs/root/chunk-cqahc80t.js";import"/$bunfs/root/chunk-5w3q3ks2.js";import"/$bunfs/root/chunk-ex77tta5.js";import"/$bunfs/root/chunk-kgzzwvwc.js";import"/$bunfs/root/chunk-a1e4jb01.js";import"/$bunfs/root/chunk-q3pjyhpy.js";import"/$bunfs/root/chunk-ca90c7br.js";import"/$bunfs/root/chunk-c84xzna8.js";import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import"/$bunfs/root/chunk-g0pe678c.js";import"/$bunfs/root/chunk-8wtweva8.js";import"/$bunfs/root/chunk-zfd2aw7n.js";import"/$bunfs/root/chunk-6bq219xw.js";import"/$bunfs/root/chunk-92tjbk8v.js";import{Vu,kdn}from"/$bunfs/root/chunk-crdtetwv.js";import{EIr,Rpn}from"/$bunfs/root/chunk-kx88wbx1.js";import"/$bunfs/root/chunk-smtr7kyx.js";import"/$bunfs/root/chunk-74jsynkt.js";import"/$bunfs/root/chunk-gn0dtfqq.js";import{B}from"/$bunfs/root/chunk-b8e2yqms.js";import{relative as ee}from"path";var Y=/&(?!(?:#\d{1,7}|#[Xx][0-9a-fA-F]{1,6}|\w+);)/g,Q=/^<input (?:checked="" )?disabled="" type="checkbox"> ?/;function w(e){return e.replace(Y,"&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function N(e){let s=e.renderImage??((a,n)=>w(a||n));return new Sqe({gfm:!0,renderer:{html(a){return w(a.text)},text(a){if("tokens"in a&&a.tokens)return this.parser.parseInline(a.tokens);if(a.type==="text"&&a.escaped){let n=a.text.match(Q);if(n)return n[0]+w(a.text.slice(n[0].length))}return w(a.text)},link(a){let n=this.parser.parseInline(a.tokens);return e.renderLink(a.href,n,a.title)},image(a){return s(a.text,a.href)}}})}var ae=N({renderLink(e,s,a){let n=e.trim();if(!/^(?:https?:|mailto:|#)/i.test(n))return s;let r=a?` title="${o(a)}"`:"";return`<a href="${o(n)}"${r} rel="noopener">${s}</a>`},renderImage(e,s){return`<code>[image: ${w(e||s)}]</code>`}});function se(){let e=new Map;return(s)=>{let a=e.get(s);if(a!==void 0)return a;let n;try{n=ae.parse(F(s))}catch{n=`<pre>${o(s)}</pre>`}let r=`<div class="md">${n}</div>`;return e.set(s,r),r}}function u(e){let s=Math.round(e*1000)/10;if(e<1&&s>=100)s=99.9;return Number.isInteger(s)?`${s}%`:`${s.toFixed(1)}%`}function H(e){return`$${e.toFixed(2)}`}function ne(e){let s=e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);return s?`${s[1]} ${s[2]} UTC`:e}function z(e,s,a){let n=Number.isFinite(e)?e:0,r=Math.max(0,Math.min(100,n*100)),d=a!==void 0&&Number.isFinite(a)?`<i class="tick" style="left:${Math.max(0,Math.min(100,a*100)).toFixed(1)}%"></i>`:"";return`<span class="meter ${s}" aria-hidden="true"><span style="width:${r.toFixed(1)}%"></span>${d}</span>`}function C(e){if(e>0)return{cls:"delta-pos",arrow:"\u2191",sign:"+"};if(e<0)return{cls:"delta-neg",arrow:"\u2193",sign:""};return{cls:"delta-zero",arrow:"\xB7",sign:""}}function te(e){let{cls:s,arrow:a,sign:n}=C(e);return`<span class="delta ${s}">${a} ${n}${(e*100).toFixed(1)} pts</span>`}var U='<span class="star" title="Includes runs that errored or hit the cost ceiling \u2014 see \u201CHow to read this report\u201D">*</span>',re=20000,O=4000,oe={manifest_invalid:!0,disabled_by_default:!0,will_not_load:!0,identity_unverified:!1,archive_not_probed:!1},ie={manifest_invalid:"manifest is invalid \u2014 ran without it",disabled_by_default:"defaultEnabled: false \u2014 ran without it",identity_unverified:"identity not verified",archive_not_probed:"archive \u2014 identity not probed",will_not_load:"will not load"};function G(e){return e.suite.plugins.length>0?e.suite.plugins.map((s)=>{let a=le.test(s.name)?s.name:_(Lt(F(s.name),80));return s.version!==void 0&&de.test(s.version)?`${a} v${s.version}`:a}).join(", "):"Eval suite"}var le=/^[0-9A-Za-z._@/-]{1,80}$/,de=/^[0-9A-Za-z._+-]{1,40}$/;function pe(e){let s=e.passed?'<span class="chip chip-pass">\u2713 pass</span>':'<span class="chip chip-fail">\u2717 fail</span>',a=e.weight!==1?`<span class="muted">\xD7${o(String(e.weight))}</span>`:"",n=e.withOnly?'<span class="badge">plugin-fired indicator</span>':"",r=e.judgeVotes&&e.judgeVotes.length>1?`<div class="kv"><span>Judge votes</span><span class="votes">${e.judgeVotes.map((g)=>g?"\u2713":"\u2717").join(" ")}</span></div>`:"",d=e.evidence?`<div class="kv"><span>Evidence (what the judge was shown; for an image, a description of what was sent)</span></div><pre class="evidence">${o(xe(e.evidence))}</pre>`:"";return`<details class="grader"${e.passed?"":" open"}>
<summary>${s} <span class="grader-name">${o(e.name)}</span> ${a} ${n}</summary>
<div class="grader-body">
<p class="explanation">${o(e.explanation)}</p>
${r}${d}
</div>
</details>`}function ce(e,s,a){let n=e.error?`<div class="run-error"><span class="chip chip-fail">\u2717 run error</span> <span class="explanation">${o(e.error)}</span></div>`:"",r=e.skippedPaidGraders?'<div class="note">\u26A0 Cost ceiling hit during this run \u2014 LLM/baseline graders were marked fail without judging; the run still counts toward the averages with the score shown.</div>':"",d=e.aborted?`<div class="run-error"><span class="chip chip-fail">\u2717 aborted by mock</span> <span class="explanation">${o(e.aborted.server)}/${o(e.aborted.tool)}: ${o(e.aborted.reason)}</span></div>`:"",g=e.pluginHookApprovals?EIr(e.pluginHookApprovals).map((l)=>`<div class="run-error"><span class="chip chip-warn">\u26A0 plugin hook</span> <span class="explanation">${o(l)}</span></div>`).join(""):"",h=e.mocks?`<details class="mocks"><summary>Mocked: ${e.mocks.servers.map((l)=>`${o(l.server)}${l.kind==="standalone"?" (standalone)":""} \u2014 ${l.tools.map((p)=>`${o(p.tool)}=${p.responder}`).join(", ")}`).join("; ")} \xB7 ${e.mocks.calls.total} ${I(e.mocks.calls.total,"call")}${e.mocks.calls.errors?`, ${e.mocks.calls.errors} ${I(e.mocks.calls.errors,"tool error")}`:""}${e.mocks.calls.replay&&e.mocks.calls.replay.hits+e.mocks.calls.replay.misses>0?` \xB7 replay ${e.mocks.calls.replay.hits} hit / ${e.mocks.calls.replay.misses} live`:""}</summary>${e.mocks.calls.unmocked.length?`<div class="note">Called but not mocked: ${e.mocks.calls.unmocked.map((l)=>`${o(l.tool)} \xD7${l.count}`).join(", ")}</div>`:""}${e.mocks.warnings.map((l)=>`<div class="note">${o(l)}</div>`).join("")}</details>`:"";return`<div class="run">
<div class="run-head">
<span class="run-title">Run ${s+1}</span>
${z(e.score,a)}
<span class="num">${u(e.score)}</span>
<span class="muted num">${e.turns} turns \xB7 ${H(e.costUsd)}${e.startedAt?` \xB7 ${o(e.startedAt.slice(11,19))} UTC`:""}</span>
</div>
${n}${d}${r}${g}${h}
<div class="graders">${e.graders.map(pe).join(`
`)}</div>
</div>`}function j(e,s,a,n,r){let d=a!==void 0?`${z(a,s)}
<span class="num">${u(a)}</span>
<span class="muted num">${u(n??0)} of runs perfect</span>`:'<span class="muted">aggregate not comparable \u2014 a run in one of the arms was not fully graded</span>';return`<section class="arm">
<div class="arm-head">
<span class="arm-label">${o(e)}</span>
${d}
</div>
${r.map((g,h)=>ce(g,h,s)).join(`
`)}
</section>`}function ue(e){let s=Object.entries(e);if(s.length===0)return"";return`<div class="config">${s.map(([a,n])=>`<div class="kv"><span>${o(a)}</span><code>${o(_(n)??"")}</code></div>`).join("")}</div>`}function ge(e,s){return`<div class="grader-def">
<div class="grader-def-head"><span class="grader-name">${o(e.name)}</span><span class="badge">${o(e.type)}</span>${e.weight!==1?`<span class="muted">weight \xD7${o(String(e.weight))}</span>`:""}</div>
${e.graderMarkdown?s(e.graderMarkdown):ue(e.config)}
</div>`}function me(e,s,a,n){let r=(e.arms.without?.length??0)>0,d=`<details class="section" open>
<summary>Prompt</summary>
${a(e.promptMarkdown)}
</details>`,g=`<details class="section" open>
<summary>Graders \u2014 what "good" means for this case</summary>
${e.graders.map((i)=>ge(i,a)).join(`
`)}
</details>`,h=`<details class="section" open>
<summary>Results</summary>
${r?j("With plugin","m-accent",e.aggregates.score,e.aggregates.passRate,e.arms.with)+j("Baseline (no plugin)","m-base",e.aggregates.scoreWithout,e.aggregates.passRateWithout,e.arms.without??[]):j("Runs","m-accent",e.aggregates.score,e.aggregates.passRate,e.arms.with)}
</details>`,l=B(e.arms.with,(i)=>i.error!==null),p=B(e.arms.with,(i)=>i.skippedPaidGraders&&i.error===null),y=e.aggregates.delta!==void 0?e.arms.without??[]:[],c=l+B(y,(i)=>i.error!==null),v=B(e.arms.with.concat(e.arms.without??[]),(i)=>i.pluginHookApprovals!==void 0),x=p+B(y,(i)=>i.skippedPaidGraders&&i.error===null),b=[c>0?`<span class="flag">\u26A0 ${c} ${I(c,"run")} errored</span>`:"",x>0?`<span class="flag">\u26A0 ${x} ${I(x,"run")} unjudged (cost ceiling)</span>`:"",v>0?`<span class="flag">\u26A0 ${v} ${I(v,"run")} where a plugin's hook allowed, or tried to allow, calls the eval itself would not allow</span>`:""].join("");return`<article class="case${(e.aggregates.delta??0)<0?" case-regressed":""}" id="case-${s+1}">
<div class="case-head">
<h2>${o(e.name)}</h2>
<span class="muted mono">${o(e.dir)}</span>
<span class="spacer"></span>
${b}
${e.aggregates.delta!==void 0?te(e.aggregates.delta):""}
${r?'<span class="muted">with plugin</span>':""}
${z(e.aggregates.score,"m-accent",n)}
<span class="num case-score">${u(e.aggregates.score)}${l+p>0?U:""}</span>
</div>
${(e.advisories??[]).map((i)=>`<div class="note">\u26A0 ${o(i)}</div>`).join(`
`)}
${h}
${d}
${g}
</article>`}var A="--plane:#f9f9f7;--surface:#fcfcfb;--ink:#0b0b0b;--ink-2:#52514e;--ink-3:#6b6a64;--hairline:rgba(11,11,11,.10);--grid:#e1e0d9;--inset:rgba(11,11,11,.04);--accent:#2a78d6;--base-fill:#6b6a64;--delta-good:#006300;--good:#067d06;--warning:#8a6100;--critical:#d03b3b;",D="--plane:#0d0d0d;--surface:#1a1a19;--ink:#ffffff;--ink-2:#c3c2b7;--ink-3:#898781;--hairline:rgba(255,255,255,.10);--grid:#2c2c2a;--inset:rgba(255,255,255,.05);--accent:#3987e5;--base-fill:#898781;--delta-good:#0ca30c;--good:#0ca30c;--warning:#fab219;--critical:#e06c6c;",he=`<style>
:root{${A}
  color-scheme:light dark;
}
@media (prefers-color-scheme:dark){:root{${D}color-scheme:dark}}
:root[data-theme="dark"]{${D}color-scheme:dark}
:root[data-theme="light"]{${A}color-scheme:light}
*{box-sizing:border-box}
body{margin:0;background:var(--plane);color:var(--ink);
  font:14px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;
  -webkit-text-size-adjust:100%}
.wrap{max-width:880px;margin:0 auto;padding:40px 24px 64px;display:flex;flex-direction:column;gap:20px}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}
header h1{margin:2px 0 0;font-size:24px;font-weight:600;line-height:1.25;text-wrap:balance}
.meta{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px;color:var(--ink-2);font-size:13px}
.meta .num{font-variant-numeric:tabular-nums lining-nums}
.banner{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;
  border:1px solid var(--hairline);background:var(--surface);font-size:13px}
.banner .chip-warn{color:var(--warning);font-weight:600}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.tile{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:14px 16px;
  display:flex;flex-direction:column;gap:4px}
.tile .label{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)}
.tile .value{font-size:26px;font-weight:600;font-variant-numeric:tabular-nums lining-nums;line-height:1.1}
.tile.hero .value{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:48px}
.tile .sub{font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.tile .value.delta-pos{color:var(--delta-good)}
.tile .value.delta-neg{color:var(--critical)}
.toolbar{display:flex;gap:8px;justify-content:flex-end}
.toolbar button{font:12px system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink-2);
  background:var(--surface);border:1px solid var(--hairline);border-radius:6px;padding:4px 10px;cursor:pointer}
.toolbar button:hover{color:var(--ink)}
.toolbar button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.case{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:18px 20px;
  display:flex;flex-direction:column;gap:10px}
.case-regressed{border-left:3px solid var(--critical)}
.verdict{margin:6px 0 0;font-size:15px}
.verdict .delta{font-size:15px}
.flag{font-size:11px;font-weight:600;color:var(--warning);white-space:nowrap}
.star{color:var(--warning);font-size:.45em;vertical-align:super;line-height:0;cursor:help}
.legend summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.legend-list{margin:8px 0 0;padding-left:20px;display:flex;flex-direction:column;gap:5px;font-size:13px;color:var(--ink-2)}
.case-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.case-head h2{margin:0;font-size:16px;font-weight:600}
.case-head .spacer{flex:1}
.case-score{font-size:15px;font-weight:600}
.mono{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.num{font-variant-numeric:tabular-nums lining-nums}
.muted{color:var(--ink-3);font-size:12px}
.meter{display:inline-block;position:relative;width:120px;height:6px;border-radius:4px;background:var(--grid);
  vertical-align:middle}
.meter>span{display:block;height:100%;border-radius:4px;max-width:100%}
.meter .tick{position:absolute;top:-2px;bottom:-2px;width:2px;background:var(--ink-3);border-radius:1px}
.m-accent>span{background:var(--accent)}
.m-base>span{background:var(--base-fill)}
.delta{font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.delta-pos{color:var(--delta-good)}
.delta-neg{color:var(--critical)}
.delta-zero{color:var(--ink-3)}
details.section{border-top:1px solid var(--grid);padding-top:10px}
details.section>summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;
  text-transform:uppercase;color:var(--ink-2);list-style-position:outside;margin-left:2px}
details.section>summary:hover{color:var(--ink)}
details.section[open]>summary{margin-bottom:8px}
.md{display:flex;flex-direction:column;gap:8px;background:var(--inset);border-radius:8px;
  padding:12px 14px;overflow-wrap:break-word}
.md>:first-child{margin-top:0}
.md h1,.md h2,.md h3,.md h4,.md h5,.md h6{margin:4px 0 0;font-size:1em;font-weight:600;line-height:1.3}
.md p,.md ul,.md ol,.md blockquote,.md table,.md pre,.md hr{margin:0}
.md ul,.md ol{display:flex;flex-direction:column;gap:4px;padding-left:20px}
.md blockquote{border-left:2px solid var(--hairline);padding-left:10px;color:var(--ink-2)}
.md :not(pre)>code{background:var(--inset);padding:1px 4px;border-radius:4px;
  font:.92em "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.md pre{background:var(--inset);border:1px solid var(--hairline);padding:10px 12px;border-radius:6px;
  overflow-x:auto;font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace}
.md pre code{background:none;padding:0;font:inherit}
.md table{width:100%;border-collapse:collapse}
.md th,.md td{padding:5px 8px;text-align:left;vertical-align:top;border-bottom:1px solid var(--grid)}
.md th{font-weight:600;color:var(--ink-2)}
.md a{color:var(--accent);text-decoration:none}
.md a:hover{text-decoration:underline}
.grader-def{display:flex;flex-direction:column;gap:6px;padding:8px 0}
.grader-def+.grader-def{border-top:1px solid var(--grid)}
.grader-def-head{display:flex;align-items:baseline;gap:8px}
.grader-name{font:13px "SF Mono",ui-monospace,Menlo,Consolas,monospace;font-weight:600}
.badge{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2);
  border:1px solid var(--hairline);border-radius:999px;padding:1px 8px}
.config{display:flex;flex-direction:column;gap:2px;background:var(--inset);border-radius:8px;padding:10px 14px}
.config code{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace;overflow-wrap:anywhere}
.arm{display:flex;flex-direction:column;gap:8px;padding:6px 0}
.arm+.arm{border-top:1px dashed var(--grid);margin-top:4px;padding-top:12px}
.arm-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.arm-label{font-size:13px;font-weight:600}
.run{border:1px solid var(--grid);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:8px}
.run-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.run-title{font-size:12px;font-weight:600;color:var(--ink-2)}
.run-error .explanation{color:var(--ink-2)}
.note{font-size:12px;color:var(--ink-2)}
.graders{display:flex;flex-direction:column;gap:4px}
details.grader{border-radius:6px}
details.grader>summary{cursor:pointer;display:flex;align-items:baseline;gap:8px;padding:3px 4px;
  border-radius:6px;list-style:none}
details.grader>summary::-webkit-details-marker{display:none}
details.grader>summary::before{content:'\u25B8';font-size:10px;color:var(--ink-3);flex:none;
  transition:transform .12s ease}
details.grader[open]>summary::before{transform:rotate(90deg)}
details.grader>summary:hover{background:var(--inset)}
details.grader>summary:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.grader-body{padding:6px 8px 8px 24px;display:flex;flex-direction:column;gap:6px}
.chip{font-size:11px;font-weight:600;border-radius:999px;padding:1px 8px;white-space:nowrap}
.chip-pass{color:var(--good);border:1px solid currentColor}
.chip-fail{color:var(--critical);border:1px solid currentColor}
.chip.chip-warn{color:var(--warning);border:1px solid currentColor}
.explanation{margin:0;font-size:13px;color:var(--ink-2);white-space:pre-wrap;overflow-wrap:break-word}
.kv{display:flex;gap:8px;font-size:12px;color:var(--ink-3)}
.votes{font-variant-numeric:tabular-nums;letter-spacing:.1em}
pre.evidence{margin:0;background:var(--inset);border:1px solid var(--hairline);border-radius:6px;
  padding:8px 10px;overflow-x:auto;max-height:320px;
  font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;overflow-wrap:break-word}
footer{color:var(--ink-3);font-size:12px;text-align:center;padding-top:8px}
@media (prefers-reduced-motion:no-preference){
  details.grader>summary,.toolbar button{transition:background .12s ease,color .12s ease}
}
@media (prefers-reduced-motion:reduce){
  details.grader>summary::before{transition:none}
}
@media print{
  :root,:root[data-theme="dark"],:root[data-theme="light"]{${A}color-scheme:light}
  body{background:#fff}
  .toolbar{display:none}
  .case,.run,.grader-def{break-inside:avoid}
  pre.evidence{max-height:none}
}
</style>`,fe=`<script>
document.addEventListener('DOMContentLoaded',function(){
  var bar=document.querySelector('.toolbar');
  if(!bar)return;
  bar.addEventListener('click',function(e){
    var b=e.target&&e.target.closest('button');
    if(!b)return;
    var open=b.dataset.act==='expand';
    document.querySelectorAll('details.section, details.grader').forEach(function(d){d.open=open});
  });
});
// Collapsed details vanish from print/PDF; these pages are share artifacts.
window.addEventListener('beforeprint',function(){
  document.querySelectorAll('details').forEach(function(d){
    if(!d.open){d.dataset.printOpened='1';d.open=true}
  });
});
window.addEventListener('afterprint',function(){
  document.querySelectorAll('details[data-print-opened]').forEach(function(d){
    d.open=false;delete d.dataset.printOpened;
  });
});
</script>`;function Ie(e){let s=se(),{cases:a,aggregates:n,suite:r}=e,d=a.filter((t)=>t.aggregates.scoreWithout!==void 0),g=G(e),h=a.reduce((t,m)=>t+m.arms.with.length+(m.arms.without?.length??0),0),l=e.partial?`<div class="banner"><span class="chip-warn">\u26A0 Partial results</span><span>${e.partialReason==="cost_ceiling"?"The --max-cost-usd ceiling was hit before every case finished.":e.partialReason==="auth_failed"?"A run could not authenticate (or the credential was rejected before any run), so the suite stopped before every case finished.":"The run was interrupted before every case finished."}</span></div>`:"",p=n.pluginHookApprovalRuns,y=p?`<div class="banner"><span class="chip-warn">\u26A0 Plugin hook permissions</span><span>${[p.refused>0?`In ${p.refused} ${I(p.refused,"run")} the hook tried to allow calls that a deny rule blocks or that could not be checked against the deny rules, and the eval refused them.`:"",p.approved>0?`In ${p.approved} ${I(p.approved,"run")} the hook approved calls that would not otherwise have run, so ${I(p.approved,"that run's result","those runs' results")} may depend on what the calls did.`:""].filter(Boolean).join(" ")} The runs below name the tools. Check that the hook is meant to allow them.</span></div>`:"",c=n.meanDelta,v=r.ablation==="with-without",x=a.flatMap((t)=>t.arms.with),b=B(x,(t)=>t.error!==null),k=B(x,(t)=>t.skippedPaidGraders&&t.error===null),i=b+k>0,L=a.filter((t)=>t.aggregates.delta!==void 0).flatMap((t)=>t.arms.without??[]),R=b+B(L,(t)=>t.error!==null),E=k+B(L,(t)=>t.skippedPaidGraders&&t.error===null),V=R+E>0?`<div class="banner"><span class="chip-warn">\u26A0 Averages include non-judgments</span><span>${[R>0?`${R} ${I(R,"run")} errored`:"",E>0?`${E} ${I(E,"run")} force-failed at the cost ceiling`:""].filter(Boolean).join("; ")} \u2014 their scores count toward the averages shown without a complete judgment.</span></div>`:"",f=a.filter((t)=>t.aggregates.delta!==void 0),q=c!==void 0&&f.length>0?(()=>{let{cls:t,arrow:m,sign:M}=C(c),T=B(f,(S)=>(S.aggregates.delta??0)>0),P=B(f,(S)=>(S.aggregates.delta??0)<0),J=f.length-T-P;return`<p class="verdict">Plugin effect: <span class="delta ${t}">${m} ${M}${(c*100).toFixed(1)} pts</span> vs baseline \u2014 improved ${T} \xB7 flat ${J} \xB7 regressed ${P} of ${f.length} ${I(f.length,"case")}.</p>`})():"",W=c!==void 0?(()=>{let{cls:t,arrow:m,sign:M}=C(c);return`<div class="tile"><span class="label">Ablation \u0394</span><span class="value num ${t}">${m==="\xB7"?"":`${m} `}${M}${(c*100).toFixed(1)}</span><span class="sub">score points vs baseline, ${f.length} of ${a.length} ${I(a.length,"case")}</span></div>`})():"",K=d.length>0?`${W}
<div class="tile"><span class="label">Baseline score</span><span class="value num">${u(Rpn(d.map((t)=>t.aggregates.scoreWithout??0)))}</span><span class="sub">without the plugin</span></div>`:"",X=`<details class="section legend">
<summary>How to read this report</summary>
<ul class="legend-list">
<li>A run's score is the weighted fraction of its graders that passed; a "perfect" run passed every grader.</li>
<li>A case's score is the mean of its runs; a case passes when its score is at or above the ${u(r.threshold)} threshold (the tick on each case bar).</li>
<li>The suite score is the mean of the per-case scores.</li>
<li>Judge votes are independent samples of the LLM judge; the majority decides pass or fail.</li>
${v?`<li>"With plugin" and "Baseline" runs are identical except for the plugin being loaded; \u0394 is the with-plugin score minus the baseline score.${e.cases.some((t)=>(t.arms.without?.length??0)===0)?" Cases that show no baseline ran a single arm (nothing to strip, or a replay case) \u2014 their scores are absolute.":""}</li>`:"<li><strong>No baseline arm was run</strong> (ablation off) \u2014 this report shows absolute scores only and cannot say whether the plugin caused them. Re-run with <code>--ablation with-without</code> to measure the plugin\u2019s effect.</li>"}
${i?"<li>Scores marked with * include runs that errored or hit the cost ceiling (LLM graders force-failed); those runs count toward the means without a complete judgment.</li>":""}
</ul>
</details>`,Z=`<div class="wrap">
<header>
<div class="eyebrow">Plugin eval report</div>
<h1>${o(g)}</h1>
${q}
<div class="meta">
${r.plugins.map((t)=>`<span class="mono">${o(ee(r.root,t.path)||".")}${t.problem===void 0?"":` <span class="chip ${oe[t.problem]?"chip-fail":"chip-warn"}">${o(ie[t.problem])}</span>`}</span>`).join(`
`)}
<span>Claude Code v${o(e.claudeVersion)}</span>
<span class="num">${o(ne(e.startedAt))}</span>
<span class="num">${vn(e.durationSeconds*1000,{hideTrailingZeros:!0})}</span>
<span class="num">${H(e.costUsd)}</span>
<span class="num">${h} runs</span>
${(r.concurrency??1)>1?`<span class="num">${r.concurrency} in flight</span>`:""}
${r.pluginId?`<span class="mono">${o(r.pluginId)}</span>`:""}
${r.modelOverride?`<span>model ${o(r.modelOverride)}</span>`:""}
<span>judge ${o(r.judgeModel??"default")}</span>
<span class="num">threshold ${u(r.threshold)}</span>
${r.caseFilter||r.tagFilters?.length?`<span>filtered: ${[r.caseFilter?`--case ${o(r.caseFilter)}`:"",...(r.tagFilters??[]).map((t)=>`--tag ${o(t)}`)].filter(Boolean).join(" ")}</span>`:""}
</div>
</header>
${l}${V}${y}
<section class="tiles">
<div class="tile hero"><span class="label">Suite score${v?" \xB7 with plugin":""}</span><span class="value">${u(n.overallScore)}${i?U:""}</span><span class="sub">mean of per-case scores${i?` \xB7 * includes ${b+k} ${I(b+k,"run")} without a complete judgment`:""}</span></div>
${K}
<div class="tile"><span class="label">Cases</span><span class="value num">${n.casesTotal}</span><span class="sub">${n.casesPassed} of ${n.casesTotal} \u2265 ${u(r.threshold)} threshold</span></div>
<div class="tile"><span class="label">Perfect runs</span><span class="value num">${u(n.overallPassRate)}</span><span class="sub">runs where every grader passed</span></div>
</section>
${X}
${a.length>0?`<div class="toolbar"><button type="button" data-act="expand">Expand all</button><button type="button" data-act="collapse">Collapse all</button></div>
${a.map((t,m)=>me(t,m,s,r.threshold)).join(`
`)}`:'<p class="muted">No cases in this result file.</p>'}
<footer>Generated by <code>claude plugin eval</code> \xB7 schema v${e.schemaVersion} \xB7 scores are not comparable across different suites${ve(e)}</footer>
</div>`;return`${he}
${Z}
${fe}`}function ve(e){let s=e.cases.some((n)=>{let r=Rpn(n.arms.with.map((d)=>d.score));return Math.abs(r-n.aggregates.score)>0.005}),a=e.cases.length>0&&Math.abs(Rpn(e.cases.map((n)=>n.aggregates.score))-e.aggregates.overallScore)>0.005;return s||a?' \xB7 <span class="flag">\u26A0 aggregates in this file do not match values recomputed from its runs</span>':""}function Fe(e,s){return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Eval report \u2014 ${o(G(e))}</title>
</head>
<body>
${s}
</body>
</html>
`}function xe(e){return S0(e,re-O,O,(s)=>`
[\u2026${s} more chars \u2014 full text in aggregate-result.json\u2026]
`)}function o(e){return Vu(F(e))}var be=new RegExp(`[${kdn}\u2028\u2029]|[^\\P{Cc}\\n\\t]`,"gu");function F(e){return e.replace(be," ")}export{G as evalReportTitle,Ie as renderEvalReportFragment,Fe as wrapReportDocument};
