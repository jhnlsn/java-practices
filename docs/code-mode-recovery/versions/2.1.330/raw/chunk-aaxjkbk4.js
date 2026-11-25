// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ie}from"/$bunfs/root/chunk-jv7av99m.js";class inr extends Ie{why;constructor(e){super(`serving client ${e} while the request was pending`);this.why=e;this.name="ServingInstanceGoneError"}}class anr extends Ie{status;constructor(e){super("request event dropped after an upload attempt that may have landed; delivery unknown");this.status=e;this.name="RequestDeliveryUnknownError"}}class gQs extends Ie{constructor(){super("request withdrawn before it left this process; not delivered");this.name="RequestWithdrawnUnsentError"}}class lnr extends Ie{status;constructor(e){super("request event refused by the session service; not delivered");this.status=e;this.name="RequestNotDeliveredError"}}
export{inr,anr,gQs,lnr};
