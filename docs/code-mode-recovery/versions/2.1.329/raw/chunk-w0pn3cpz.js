// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{V}from"/$bunfs/root/chunk-kgzzwvwc.js";import{o8i}from"/$bunfs/root/chunk-0v6g5ynk.js";import{Tme}from"/$bunfs/root/chunk-k266h4m8.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function E9s(){let e=o8i();if(!e)return"unset";if(!t.test(e))return"malformed";return Tme()?"ignored":"used"}function o(){return E9s()==="used"?o8i():void 0}function v9s(){let e=o();return e===void 0?{key:V(),fromHost:!1}:{key:e,fromHost:!0}}function hJn(){return v9s().key}
export{E9s,v9s,hJn};
