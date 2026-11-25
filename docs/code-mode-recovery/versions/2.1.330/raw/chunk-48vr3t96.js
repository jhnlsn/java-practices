// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{W}from"/$bunfs/root/chunk-f9x2f6cx.js";import{createHash as e}from"crypto";function boo(){return e("sha256").update(`${W()} ${process.hrtime.bigint()}`).digest().readUInt32BE(0)/4294967296}
export{boo};
