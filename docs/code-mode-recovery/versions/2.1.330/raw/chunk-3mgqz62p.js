// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{W}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Gra}from"/$bunfs/root/chunk-3t7ve0wy.js";import{Tge}from"/$bunfs/root/chunk-42tcgre6.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function uni(){let e=Gra();if(!e)return"unset";if(!t.test(e))return"malformed";return Tge()?"ignored":"used"}function o(){return uni()==="used"?Gra():void 0}function fni(){let e=o();return e===void 0?{key:W(),fromHost:!1}:{key:e,fromHost:!0}}function oor(){return fni().key}
export{uni,fni,oor};
