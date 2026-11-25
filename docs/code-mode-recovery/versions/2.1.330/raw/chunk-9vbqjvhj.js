// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{uf}from"/$bunfs/root/chunk-xcgcdx61.js";import{b}from"/$bunfs/root/chunk-865at33z.js";import{Rn,ba}from"/$bunfs/root/chunk-2nv4wrez.js";import{n,C,c,B}from"/$bunfs/root/chunk-adx6804h.js";B();var o=p(()=>C(c({marketplace:n(),plugin:n()})));function e8o(){let e=b("tengu_harbor_ledger",[]),r=o().safeParse(e);return r.success?r.data:[]}function LY(){return Rn("allow_channels")&&b("tengu_harbor",!1)}function $gt(){if(!b("tengu_harbor",!1))return!0;let e=ba("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function Wor(e){if(!e)return!1;let{name:r,marketplace:t}=uf(e);if(!t)return!1;return e8o().some((l)=>l.plugin===r&&l.marketplace===t)}
export{e8o,LY,$gt,Wor};
