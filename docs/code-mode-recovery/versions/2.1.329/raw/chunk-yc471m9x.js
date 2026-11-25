// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function O9(n,t){return Object.keys(n).filter((e)=>!t.includes(e)&&Reflect.get(n,e)!==void 0)}function GPe(n,t,e){let s=O9(t,e);if(s.length===0)return;let i=e.filter((r)=>r!=="action").map((r)=>`\`${r}\``).join(", ");return{result:!1,message:`action "${n}" takes only ${i} \u2014 remove ${s.join(", ")}.`,errorCode:8}}
export{O9,GPe};
