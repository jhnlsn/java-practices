// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{V}from"/$bunfs/root/chunk-kgzzwvwc.js";import{createHash as e}from"crypto";function PXr(){return e("sha256").update(`${V()} ${process.hrtime.bigint()}`).digest().readUInt32BE(0)/4294967296}
export{PXr};
