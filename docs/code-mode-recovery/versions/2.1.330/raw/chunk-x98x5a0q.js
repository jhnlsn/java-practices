// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var e=/[\0-\x1f\x7f\\\u201b\u2400-\u2421\uff0e\uff0f\ufffd]/;function uYr(f){return e.test(f)||f.normalize("NFC")!==f.normalize("NFD")}
export{uYr};
