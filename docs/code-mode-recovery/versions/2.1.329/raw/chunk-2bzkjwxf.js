// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{Tf}from"/$bunfs/root/chunk-t39fw2cy.js";import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{Cn,oa}from"/$bunfs/root/chunk-dt01kn47.js";import{n,C,c,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var o=p(()=>C(c({marketplace:n(),plugin:n()})));function fzo(){let e=b("tengu_harbor_ledger",[]),r=o().safeParse(e);return r.success?r.data:[]}function Y9(){return Cn("allow_channels")&&b("tengu_harbor",!1)}function opt(){if(!b("tengu_harbor",!1))return!0;let e=oa("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function JJn(e){if(!e)return!1;let{name:r,marketplace:t}=Tf(e);if(!t)return!1;return fzo().some((l)=>l.plugin===r&&l.marketplace===t)}
export{fzo,Y9,opt,JJn};
