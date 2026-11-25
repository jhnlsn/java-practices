// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { Qc } from "/$bunfs/root/chunk-xcgcdx61.js";
import { xE, jt, Uxr } from "/$bunfs/root/chunk-865at33z.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { wbe, Fmo, l0e } from "/$bunfs/root/chunk-gq1dr8pm.js";
import { Qar, $yt, jye } from "/$bunfs/root/chunk-bzyb60p0.js";
import { Win } from "/$bunfs/root/chunk-t9fn978c.js";
import { Vbr } from "/$bunfs/root/chunk-w50zedgp.js";
import { C8t } from "/$bunfs/root/chunk-08bv0y93.js";
import { PJn } from "/$bunfs/root/chunk-zd24r3fj.js";
import { t6 } from "/$bunfs/root/chunk-k5r71ad2.js";
import { lo } from "/$bunfs/root/chunk-74h6kcya.js";
import { FUr, zha } from "/$bunfs/root/chunk-96p3dgap.js";
import { LIt } from "/$bunfs/root/chunk-f0sbddj1.js";
import { zPa, bKr } from "/$bunfs/root/chunk-wtre73q2.js";
import { w1r } from "/$bunfs/root/chunk-n224j7gb.js";
import { N3t } from "/$bunfs/root/chunk-d0aj71bz.js";
import { hIe } from "/$bunfs/root/chunk-1g0cz451.js";
import { e } from "/$bunfs/root/chunk-a46xeenj.js";
import { uzr } from "/$bunfs/root/chunk-fwhva0e1.js";
import { ye, H, I, y, G } from "/$bunfs/root/chunk-bs4h6795.js";
G();
function T3t(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  if ((Win(t), ue())) {
    let {
      remoteSessionConfig: m,
      directConnectConfig: p,
      sshSession: c,
    } = n[2];
    if (!m && !p && !c) Vbr(t);
  }
  return Vjl(...n);
}
async function Vjl(n, t, m, p) {
  let { AppRoot: c } = await import("/$bunfs/root/chunk-q5vbvm42.js"),
    { REPL: g } = await import("/$bunfs/root/chunk-cv0f26fa.js");
  function S(s) {
    let a = lo();
    FUr();
    let d = I(s.commands),
      M = ye((r) => {
        d.current = r;
      }, []),
      f = I(() => {
        throw Error(
          "engine: queryParams called before REPL registered builder",
        );
      }),
      h = ye((r) => {
        f.current = r;
      }, []),
      [l] = y(() =>
        C8t({
          run: t6,
          queryParams: async (r) => f.current(),
          commands: () => jye(d.current),
          models: () => l0e(wbe()),
          unavailableModels: () => l0e(Fmo()),
          agents: () => Qar(a.getState().agentDefinitions.activeAgents),
          account: Uxr(),
          outputStyle: $yt(),
          mcpServers: () => uzr(a.getState().mcp.clients),
          ambient: PJn,
          initialModel: () => {
            let r = a.getState();
            return jt(r.mainLoopModelForSession ?? r.mainLoopModel ?? xE());
          },
          initialPermissionMode: () =>
            Qc(a.getState().toolPermissionContext.mode),
          hostOwnsPermissionMode: !0,
          hostOwnsModel: !0,
        }),
      );
    return (
      H(() => () => l.close(), [l]),
      e(g, { ...s, engine: l, onCommandsChange: M, onQueryParamsChange: h })
    );
  }
  let {
      session: i,
      storageV5: o,
      credentials: u,
      fleetNudgeStore: P = new LIt({ storageV5: o }),
    } = t,
    R = N3t(o);
  await zPa({ onHealthy: () => zha(o), storageV5: o });
  let C = w1r(i, t.initialState, (s) => hIe(s, i, o, u));
  try {
    await p(
      n,
      e(c, {
        session: i,
        storageV5: o,
        messageQueue: R,
        store: C,
        fleetNudgeStore: P,
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
    throw (await bKr().catch(() => !1), s);
  }
}
export { T3t, Vjl };
