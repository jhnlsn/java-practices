// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var c=typeof global=="object"&&global&&global.Object===Object&&global,KAs=c;var g=typeof self=="object"&&self&&self.Object===Object&&self,p=KAs||g||Function("return this")(),Y5=p;var d=Y5.Symbol,gZ=d;var e=Object.prototype,{hasOwnProperty:m,toString:j}=e,r=gZ?gZ.toStringTag:void 0;function u(t){var f=m.call(t,r),i=t[r];try{t[r]=void 0;var l=!0}catch(x){}var b=j.call(t);if(l)if(f)t[r]=i;else delete t[r];return b}var o=u;var S=Object.prototype,T=S.toString;function s(t){return T.call(t)}var n=s;var y="[object Null]",O="[object Undefined]",a=gZ?gZ.toStringTag:void 0;function v(t){if(t==null)return t===void 0?O:y;return a&&a in Object(t)?o(t):n(t)}var fre=v;
export{KAs,Y5,gZ,fre};
