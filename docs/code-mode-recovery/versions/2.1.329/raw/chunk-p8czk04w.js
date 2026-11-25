// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Dpe,DH}from"/$bunfs/root/chunk-w03c3634.js";function lQe(e,o){if(Dpe(e))return;return{uuid:typeof e.source_uuid==="string"&&e.source_uuid?e.source_uuid:o,content:e.prompt,isMeta:Boolean(e.isMeta),origin:DH(e.origin,e.commandMode,e.runId)}}
export{lQe};
