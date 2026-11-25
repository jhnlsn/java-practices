// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Kbe,dle,qF}from"/$bunfs/root/chunk-pxy9yt8m.js";import{yKi}from"/$bunfs/root/chunk-zryj96fm.js";function kWe(){if(!Kbe())throw Error("the MDM settings have not been read yet");if(qF())throw Error("an admin-owned settings document could not be read");if(yKi()!==void 0)throw Error("the managed-settings path was overridden");let e=dle()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{kWe};
