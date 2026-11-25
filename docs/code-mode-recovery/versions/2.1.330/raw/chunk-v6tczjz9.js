// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{oEe,ece,e$}from"/$bunfs/root/chunk-2yx6c1y2.js";import{sQi}from"/$bunfs/root/chunk-6mfepmbb.js";function iGe(){if(!oEe())throw Error("the MDM settings have not been read yet");if(e$())throw Error("an admin-owned settings document could not be read");if(sQi()!==void 0)throw Error("the managed-settings path was overridden");let e=ece()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{iGe};
