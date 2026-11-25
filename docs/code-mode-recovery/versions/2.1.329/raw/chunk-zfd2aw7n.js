// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var o=0xffffffffffffffffn;function Vi(i){let n=BigInt(i);return n===0n||n===-1n||n===o||n===1n<<64n}function IPs(i,n){return!Vi(i.ino)&&i.dev===n.dev&&i.ino===n.ino}function wN(i,n){return!Vi(i.ino)&&!Vi(n.ino)&&i.ino!==n.ino}
export{Vi,IPs,wN};
