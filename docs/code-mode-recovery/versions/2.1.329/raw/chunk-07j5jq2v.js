// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{bSe,Nf}from"/$bunfs/root/chunk-cmxbjfas.js";var t=58000,r=1e4,Qva=["device_stream_closed","device_announce_refused"];class eX{#e=void 0;#t=!1;#n=void 0;#o=Promise.withResolvers();#s=void 0;provide(e){this.#e=e}canAsk(){return this.#e!==void 0}askDesktopApp(e,n=Date.now()){if(this.#e===void 0||!Nf()||!bSe()||this.#n!==void 0&&n-this.#n<r)return!1;this.#n=n;let o=Promise.withResolvers();return this.#o=o,this.#s=void 0,this.#e({subtype:"remote_tools_reannounce",worker_epoch:Math.max(1,e??1),deadline_ms:t},void 0,(s)=>{if(o.resolve(),this.#o===o)this.#s=s}),!0}noAnnounce(){return this.#o.promise}noAnnounceAnswer(){return this.#s}askOnce({workerEpoch:e,deadlineMs:n}){if(this.#e===void 0||this.#t)return!1;return this.#t=!0,this.#e({subtype:"remote_tools_reannounce",worker_epoch:e,deadline_ms:n},AbortSignal.timeout(n)),!0}}
export{Qva,eX};
