// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Le}from"/$bunfs/root/chunk-19evhxxm.js";import{nn,be,ne,G}from"/$bunfs/root/chunk-6d7mp9j5.js";import{iTr}from"/$bunfs/root/chunk-j3mc0yng.js";G();var rB=nn(null),DHo=nn(null),LHo=nn(null);function URt(){let e=be(LHo);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var NHo=nn(null);function Qre(){let e=be(NHo);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function hw(){let e=be(DHo);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function yo(){let e=be(rB);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function Y(e){let t=yo();return Le(t,e)}function Wr(){return yo().setState}function yNs(){let e=yo();return ne(()=>iTr(e.setState),[e])}function vs(e){return Le(be(rB),e)}
export{rB,DHo,LHo,URt,NHo,Qre,hw,yo,Y,Wr,yNs,vs};
