// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{He}from"/$bunfs/root/chunk-avbzeyf3.js";class E7n extends He{why;constructor(e){super(`serving client ${e} while the request was pending`);this.why=e;this.name="ServingInstanceGoneError"}}class v7n extends He{status;constructor(e){super("request event dropped after an upload attempt that may have landed; delivery unknown");this.status=e;this.name="RequestDeliveryUnknownError"}}class Gqs extends He{constructor(){super("request withdrawn before it left this process; not delivered");this.name="RequestWithdrawnUnsentError"}}class T7n extends He{status;constructor(e){super("request event refused by the session service; not delivered");this.status=e;this.name="RequestNotDeliveredError"}}
export{E7n,v7n,Gqs,T7n};
