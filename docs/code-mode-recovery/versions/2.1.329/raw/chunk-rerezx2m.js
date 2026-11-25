// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import"/$bunfs/root/chunk-0q5cbhww.js";import{$ds,aPi}from"/$bunfs/root/chunk-6f39wkwn.js";var r=/<\/(?:body|html)[\t\n\f\r />]/i;function o(n){if(!r.test(n))return n.length;let t=-1;if(!aPi(n,{startTag({lowerName:e}){if(e!=="html")t=-1;return $ds.get(e)??"markup"},endTag({lowerName:e,start:i}){if(e!=="body"&&e!=="html")t=-1;else if(t<0)t=i},text(e){if(/[^\t\n\f ]/.test(e))t=-1},comment(){},doctype(){},readsCdata:()=>!1}))return;return t>=0?t:n.length}export{o as runtimeBlockInsertionIndex};
