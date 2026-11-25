// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Y}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Po}from"/$bunfs/root/chunk-2yx6c1y2.js";import{Xh}from"/$bunfs/root/chunk-p1ewvgeh.js";import{R1n}from"/$bunfs/root/chunk-4f4ysf31.js";import{sep as i}from"path";function qtn(t){if(Y())return null;let e=`${R1n()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function _Ya(t){if(t?.file_path?.startsWith(Xh()))return"Reading Plan";if(t?.file_path&&qtn(t.file_path))return"Read agent output";return"Read"}function Iyi(t){if(!t?.file_path)return null;let e=qtn(t.file_path);if(e)return e;return Po(t.file_path)}
export{qtn,_Ya,Iyi};
