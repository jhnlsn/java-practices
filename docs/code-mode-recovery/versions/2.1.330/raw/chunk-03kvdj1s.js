// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var JDs=/[\p{Pi}\p{Pf}\u201a\u201e\u201f\u2e32\u2e34\u2e41\u2e49\u2e42\u3003\u300c-\u300f\ufe41-\ufe44\u301d-\u301f\u275b-\u2760\u276e\u276f\u{1f676}-\u{1f678}\u2032-\u2037\u2057\u02b9\u02ba\u0374\u02bd-\u02bf\u02c8\u02d2\u02d3\u02ca\u02ce\u02cf\u02dd\u02f4-\u02f6\u02ee\u00b4\u0384\u0385\u1fbd\u1fbf\u1fcd-\u1fcf\u1fdd-\u1fdf\u1ffd\u1ffe\u05f3\u05f4\u0559-\u055b\u07f4\u07f5\ua67f\ua78b\ua78c\uff02\uff07\uff62\uff63]/gu,fDo=/(?<![^\s\p{P}])\p{M}+/gu,Sxt=/[\p{Quotation_Mark}\u02BA\u02DD\u02EE\u02F5\u02F6\u05F2\u05F4\u1425\u1CD3\u2033\u2034\u2036\u2037\u2057\u275B-\u2760\u3003\u309B\uFF9E\u{1F676}-\u{1F678}]/gu,rUl=new RegExp(`${JDs.source}|${Sxt.source}`,"gu"),pDo=/[\u2216\u244A\u2572\u27CD\u29F5\u29F9\u2CF9\u2F02\u31D4\uFE68\uFF3C\u{1D20F}\u{1D23B}]/gu,bxt=/(?<![\p{L}\p{N}\p{M}])\p{M}+/gu,mDo=/[\u0334-\u0338\u1CD4\u1CE2-\u1CE8\u20D2\u20D3\u20D8-\u20DA\u20E5\u20E6\u20EA\u20EB\u{10A39}\u{16AF0}-\u{16AF4}\u{1BC9E}\u{1D167}-\u{1D169}]/gu;
export{JDs,fDo,Sxt,rUl,pDo,bxt,mDo};
