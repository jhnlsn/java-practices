// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{X}from"/$bunfs/root/chunk-kgzzwvwc.js";import{vo}from"/$bunfs/root/chunk-pxy9yt8m.js";import{Hh}from"/$bunfs/root/chunk-32gs4rex.js";import{S0n}from"/$bunfs/root/chunk-8nwkwhjf.js";import{sep as i}from"path";function WXt(t){if(X())return null;let e=`${S0n()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function oGa(t){if(t?.file_path?.startsWith(Hh()))return"Reading Plan";if(t?.file_path&&WXt(t.file_path))return"Read agent output";return"Read"}function Tli(t){if(!t?.file_path)return null;let e=WXt(t.file_path);if(e)return e;return vo(t.file_path)}
export{WXt,oGa,Tli};
