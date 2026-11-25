// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import"/$bunfs/root/chunk-hnffg7ty.js";import{l_s,BLi}from"/$bunfs/root/chunk-e6xyp9a5.js";var r=/<\/(?:body|html)[\t\n\f\r />]/i;function o(n){if(!r.test(n))return n.length;let t=-1;if(!BLi(n,{startTag({lowerName:e}){if(e!=="html")t=-1;return l_s.get(e)??"markup"},endTag({lowerName:e,start:i}){if(e!=="body"&&e!=="html")t=-1;else if(t<0)t=i},text(e){if(/[^\t\n\f ]/.test(e))t=-1},comment(){},doctype(){},readsCdata:()=>!1}))return;return t>=0?t:n.length}export{o as runtimeBlockInsertionIndex};
