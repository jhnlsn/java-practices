// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { Mc } from "/$bunfs/root/chunk-t39fw2cy.js";
import { Wk, Vt, Skr } from "/$bunfs/root/chunk-aq3ms068.js";
import { ue } from "/$bunfs/root/chunk-ex299d27.js";
import { uye, Cio, GMe } from "/$bunfs/root/chunk-76t3g1yn.js";
import { htr, iht, Uge } from "/$bunfs/root/chunk-hg1yqkjk.js";
import { mtn } from "/$bunfs/root/chunk-rswvkbfd.js";
import { spr } from "/$bunfs/root/chunk-09zj247f.js";
import { Iqt } from "/$bunfs/root/chunk-abjbjs57.js";
import { s5n } from "/$bunfs/root/chunk-rvpxpj01.js";
import { HG } from "/$bunfs/root/chunk-wm04tzdx.js";
import { yo } from "/$bunfs/root/chunk-v4naq341.js";
import { lHr, qoa } from "/$bunfs/root/chunk-qjm149vk.js";
import { IRt } from "/$bunfs/root/chunk-9jd4vzgg.js";
import { $Sa, NBr } from "/$bunfs/root/chunk-6zf0aacf.js";
import { YIr } from "/$bunfs/root/chunk-8p82sbb9.js";
import { j6t } from "/$bunfs/root/chunk-13wc48at.js";
import { nPe } from "/$bunfs/root/chunk-66tzvffa.js";
import { e } from "/$bunfs/root/chunk-9kwtmrrn.js";
import { M1r } from "/$bunfs/root/chunk-ndnhrn7h.js";
import { _e, H, P, y, G } from "/$bunfs/root/chunk-6d7mp9j5.js";
G();
function O6t(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  if ((mtn(t), ue())) {
    let {
      remoteSessionConfig: m,
      directConnectConfig: p,
      sshSession: c,
    } = n[2];
    if (!m && !p && !c) spr(t);
  }
  return $Ml(...n);
}
async function $Ml(n, t, m, p) {
  let { AppRoot: c } = await import("/$bunfs/root/chunk-zjt162gv.js"),
    { REPL: g } = await import("/$bunfs/root/chunk-wcnpr1w7.js");
  function S(s) {
    let a = yo();
    lHr();
    let d = P(s.commands),
      h = _e((r) => {
        d.current = r;
      }, []),
      f = P(() => {
        throw Error(
          "engine: queryParams called before REPL registered builder",
        );
      }),
      A = _e((r) => {
        f.current = r;
      }, []),
      [l] = y(() =>
        Iqt({
          run: HG,
          queryParams: async (r) => f.current(),
          commands: () => Uge(d.current),
          models: () => GMe(uye()),
          unavailableModels: () => GMe(Cio()),
          agents: () => htr(a.getState().agentDefinitions.activeAgents),
          account: Skr(),
          outputStyle: iht(),
          mcpServers: () => M1r(a.getState().mcp.clients),
          ambient: s5n,
          initialModel: () => {
            let r = a.getState();
            return Vt(r.mainLoopModelForSession ?? r.mainLoopModel ?? Wk());
          },
          initialPermissionMode: () =>
            Mc(a.getState().toolPermissionContext.mode),
          hostOwnsPermissionMode: !0,
          hostOwnsModel: !0,
        }),
      );
    return (
      H(() => () => l.close(), [l]),
      e(g, { ...s, engine: l, onCommandsChange: h, onQueryParamsChange: A })
    );
  }
  let {
      session: i,
      storageV5: o,
      credentials: u,
      fleetNudgeStore: R = new IRt({ storageV5: o }),
    } = t,
    C = j6t(o);
  await $Sa({ onHealthy: () => qoa(o), storageV5: o });
  let M = YIr(i, t.initialState, (s) => nPe(s, i, o, u));
  try {
    await p(
      n,
      e(c, {
        session: i,
        storageV5: o,
        messageQueue: C,
        store: M,
        fleetNudgeStore: R,
        sessionHooks: t.sessionHooks,
        writesExitHandoff: !0,
        getFpsMetrics: t.getFpsMetrics,
        stats: t.stats,
        keybindings: !1,
        children: e(S, { ...m }),
      }),
      i,
      o,
      u,
    );
  } catch (s) {
    throw (await NBr().catch(() => !1), s);
  }
}
export { O6t, $Ml };
