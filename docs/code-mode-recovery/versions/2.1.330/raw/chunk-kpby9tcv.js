// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var o=0xffffffffffffffffn;function ia(i){let n=BigInt(i);return n===0n||n===-1n||n===o||n===1n<<64n}function WFs(i,n){return!ia(i.ino)&&i.dev===n.dev&&i.ino===n.ino}function RF(i,n){return!ia(i.ino)&&!ia(n.ino)&&i.ino!==n.ino}
export{ia,WFs,RF};
