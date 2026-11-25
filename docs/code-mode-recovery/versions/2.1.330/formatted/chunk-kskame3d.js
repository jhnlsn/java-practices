// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { S, f } from "/$bunfs/root/chunk-78g0060s.js";
import { d } from "/$bunfs/root/chunk-jv7av99m.js";
import { K } from "/$bunfs/root/chunk-5appeerh.js";
import { Te, cC } from "/$bunfs/root/chunk-f9x2f6cx.js";
import { t } from "/$bunfs/root/chunk-w578pjby.js";
import { wt, i } from "/$bunfs/root/chunk-k449cc64.js";
import { a } from "/$bunfs/root/chunk-y53wbr8a.js";
import { u, m, l } from "/$bunfs/root/chunk-cqa9hrgx.js";
import { p } from "/$bunfs/root/chunk-2cbgkbm2.js";
import { Ro } from "/$bunfs/root/chunk-43nz5n02.js";
import { pe } from "/$bunfs/root/chunk-18rsj2ts.js";
import { y6e, dr, pm } from "/$bunfs/root/chunk-w5s307zm.js";
import { TI, Un } from "/$bunfs/root/chunk-t39bs2jr.js";
import { bn } from "/$bunfs/root/chunk-3jjr3wje.js";
import { r6t, $Ct, cxs, b } from "/$bunfs/root/chunk-865at33z.js";
import { JN } from "/$bunfs/root/chunk-702cfzzh.js";
import { gT } from "/$bunfs/root/chunk-3hr8g93j.js";
import { z9e, V9e, lyr, sj } from "/$bunfs/root/chunk-mw2v4wks.js";
import { Cpe } from "/$bunfs/root/chunk-7d2qr9z5.js";
import { vks } from "/$bunfs/root/chunk-vbjta162.js";
import { Pc } from "/$bunfs/root/chunk-r60bafc1.js";
import { tT } from "/$bunfs/root/chunk-sg5zbskk.js";
import { I8o, oii } from "/$bunfs/root/chunk-39davzmt.js";
import { Vu } from "/$bunfs/root/chunk-d0bewyh8.js";
import { k1, E1 } from "/$bunfs/root/chunk-qesvcmqe.js";
import { pFn } from "/$bunfs/root/chunk-6qsjjx4s.js";
import { Bbt } from "/$bunfs/root/chunk-zh47ka3v.js";
import { lje, G9e, oyr, wps } from "/$bunfs/root/chunk-p3d6wgn7.js";
import {
  Uci,
  HZr,
  DZr,
  ulr,
  VQo,
  nSe,
  _Q,
  Pt,
} from "/$bunfs/root/chunk-bzyb60p0.js";
import { eTa } from "/$bunfs/root/chunk-yw8k626q.js";
import { KWn, alt } from "/$bunfs/root/chunk-stxr0bw4.js";
import { r9r, o9r, Egt } from "/$bunfs/root/chunk-0tkterak.js";
import { jte } from "/$bunfs/root/chunk-4wtfvxk7.js";
import { rTa } from "/$bunfs/root/chunk-6535dt17.js";
import { uHt } from "/$bunfs/root/chunk-vd3pj026.js";
import { Bte } from "/$bunfs/root/chunk-vcq8ssd5.js";
import { n, E, P, c, We, zn, v, B } from "/$bunfs/root/chunk-adx6804h.js";
import { ne } from "/$bunfs/root/chunk-m15w38ag.js";
function re(e) {
  return {};
}
function ie(e) {
  return [];
}
B();
var de = "Anything you haven\u2019t pushed stays on this computer.",
  be = ["rebase", "merge", "cherry-pick", "revert", "bisect"],
  Re = p(() => {
    let e = n().catch(""),
      o = zn("type", [
        c({
          type: v("source_revision_not_on_remote_error"),
          result: e,
          revision: e,
          default_branch: e,
        }),
        c({
          type: v("source_revision_stale_on_remote_error"),
          revision: e,
          unpushed_commit_count: E().int().nonnegative().catch(0),
          is_dirty: P().catch(!1),
          mid_operation: e,
        }),
      ]);
    return We([c({ error: o }).transform((r) => r.error), o]);
  });
function le(e) {
  let o = Re().safeParse(e);
  if (!o.success) return;
  let r = o.data,
    g = q(r.revision);
  switch (r.type) {
    case "source_revision_not_on_remote_error":
      return se(r.result) === "not_on_remote"
        ? {
            kind: "not_on_remote",
            revision: g,
            defaultBranch: q(r.default_branch),
          }
        : { kind: "inconclusive", revision: g };
    case "source_revision_stale_on_remote_error":
      return {
        kind: "stale",
        revision: g,
        unpushedCount: r.unpushed_commit_count,
        isDirty: r.is_dirty,
        midOperation: be.find((s) => s === se(r.mid_operation)) ?? null,
      };
  }
}
function ue(e) {
  switch (e.kind) {
    case "not_on_remote":
      return {
        notice: [
          `${e.revision || "This branch"} isn\u2019t on the remote yet. The cloud session starts from the default branch${e.defaultBranch && `, ${e.defaultBranch},`} instead.`,
          `Staying on this computer: your work on ${e.revision || "this branch"}.`,
        ],
        fallback: "default_branch",
      };
    case "stale":
      return {
        notice: Q(
          me(e.revision || "this branch"),
          fe(e.unpushedCount || null, e.isDirty, e.midOperation),
        ),
        fallback: "proceed_as_is",
      };
    case "inconclusive":
      return {
        notice: [
          `Couldn\u2019t confirm ${e.revision || "this branch"} is on the remote. If it isn\u2019t, the cloud session may not start.`,
          "The cloud session starts from what the remote has. Anything you haven\u2019t pushed stays on this computer.",
        ],
        fallback: "proceed_as_is",
      };
  }
}
function ce(e) {
  if (e === null || e.submodules_unverified)
    return {
      notice: [`Couldn\u2019t check your git state. ${ae("this branch")}`, de],
      covers: ["proceed_as_is", "default_branch"],
    };
  let o = e.branch === null ? "this commit" : q(e.branch) || "this branch",
    r = fe(e.unpushed_count, e.is_dirty, e.mid_operation);
  if (e.unpushed_count === null)
    return { notice: Q(ae(o), r), covers: ["proceed_as_is", "default_branch"] };
  return r.length > 0
    ? { notice: Q(me(o), r), covers: ["proceed_as_is"] }
    : void 0;
}
function se(e) {
  return e.replace(/^REVISION_PREFLIGHT_RESULT_/, "").toLowerCase();
}
function q(e) {
  let o = e.replace(/^refs\/heads\//, "");
  return /\s/u.test(o) ? "" : $Ct(o, "");
}
function me(e) {
  return `The cloud session starts from ${e} as it was last pushed.`;
}
function ae(e) {
  return `The cloud session starts from ${e} as it was last pushed, or from the default branch if it isn\u2019t on the remote.`;
}
function fe(e, o, r) {
  let g = [
    ...(e ? [`${e} unpushed ${e === 1 ? "commit" : "commits"}`] : []),
    ...(o ? ["uncommitted changes"] : []),
    ...(r ? [`a ${r} in progress`] : []),
  ];
  return e === null && g.length > 0
    ? [...g, "anything else you haven\u2019t pushed"]
    : g;
}
function Q(e, o) {
  return o.length > 0
    ? [
        `Some changes won\u2019t come with you. ${e}`,
        `Staying on this computer: ${new Intl.ListFormat("en", { type: "conjunction" }).format(o)}.`,
      ]
    : [e, de];
}
var Ee = "tengu_teleport_permission_mode_refused";
async function j(e) {
  let {
      sessionId: o,
      baseUrl: r,
      accessToken: g,
      environmentId: s,
      trustedDeviceToken: h,
      outcomeBranch: R,
      permissionMode: w,
    } = e,
    H = `${r}/v1/code/sessions/${o}/move-to-cloud`,
    C = KWn(g);
  if (h) C["X-Trusted-Device-Token"] = h;
  let y;
  try {
    y = await bn.post(
      H,
      {
        environment_id: s,
        ...(R && { outcome_branch: R }),
        ...(w && { permission_mode: w }),
        ...Ae(e.sourceRevision),
        ...Ne(e.memoryMode),
        ...(e.revisionFallback && { revision_fallback: e.revisionFallback }),
      },
      { headers: C, timeout: 15000, validateStatus: (k) => k < 600 },
    );
  } catch (k) {
    let F =
        k !== null && typeof k === "object" && "code" in k
          ? String(k.code)
          : "",
      _ = F === "ENOTFOUND" || F === "ECONNREFUSED",
      O = `Couldn't reach the server: ${d(k)}${_ ? "" : ". The move may still have gone through. Check the session at claude.ai/code."}`;
    if (!_) e.onMayHaveMoved?.(O);
    return { ok: !1, message: O, mayHaveCommitted: !_ };
  }
  if (y.status === 200 || y.status === 201) {
    e.onMoved?.();
    let k = Fe(y.data),
      F = k?.environment_kind ?? "cloud",
      _ = k?.environment_id ?? s;
    return (
      t(`[code-session] move-to-cloud ${o} \u2192 ${F} (env ${_})`),
      {
        ok: !0,
        environmentKind: F,
        sessionId: o,
        ...He(e.sourceRevision, y.data),
        ...Oe(e.memoryMode, y.data),
        ...re(y.data),
      }
    );
  }
  if (y.status === 401 && e.onAuth401 !== void 0) {
    let k = e.onAuth401,
      F = JN(y.config),
      _;
    try {
      _ = await k(g, F);
    } catch (O) {
      t(
        `[code-session] move-to-cloud ${o}: the 401 handler failed, not resending: ${d(O)}`,
      );
    }
    if (_ !== void 0 && (F || _ !== g))
      return j({
        ...e,
        accessToken: _,
        onAuth401: (O, x) => (k(O, x).catch(() => {}), Promise.resolve(void 0)),
      });
  }
  let T =
    y.status >= 500
      ? `The server responded with ${y.status}. The move may still have gone through. Check the session at claude.ai/code.`
      : void 0;
  if (T !== void 0) e.onMayHaveMoved?.(T);
  let I = k1(y.data) ?? "",
    A = pFn(y.data);
  if (T === void 0 && w && A === "move_permission_mode_refused") {
    t(
      `[code-session] move-to-cloud ${o} refused for its permission mode (${y.status})${I ? `: ${I}` : ""}; moving without one`,
    );
    let k = await j({ ...e, permissionMode: void 0 });
    try {
      a(Ee, {
        retry_without_mode: S(
          k.ok ? "success" : k.mayHaveCommitted ? "maybe_committed" : "failed",
        ),
      });
    } catch {}
    return k;
  }
  let N =
    y.status === 400 && A === "session_not_bridge"
      ? "This session is already in the cloud. Refresh claude.ai/code to see it."
      : void 0;
  if (N !== void 0) e.onMayHaveMoved?.(N);
  if (
    (t(
      `[code-session] move-to-cloud ${o} failed ${y.status}${A ? ` [${A}]` : ""}${I ? `: ${I}` : ""}`,
    ),
    T !== void 0)
  )
    return { ok: !1, message: T, mayHaveCommitted: !0 };
  if (N !== void 0) return { ok: !1, message: N, mayHaveCommitted: !0 };
  let D = E1(y.data),
    U = /^the request was invalid\.?$/i.test(D ?? "") ? void 0 : D;
  return (
    e.onRefusal?.({ status: y.status, codes: alt(y.data), message: U }),
    {
      ok: !1,
      message:
        U ??
        `The server couldn\u2019t move this session (HTTP ${y.status}). Run with --debug to see the raw response.`,
      mayHaveCommitted: !1,
      reason: A,
      revisionConflict: y.status === 409 ? le(y.data) : void 0,
    }
  );
}
function Fe(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    !("session" in e) ||
    e.session === null ||
    typeof e.session !== "object"
  )
    return;
  let o = e.session;
  return {
    environment_kind:
      typeof o.environment_kind === "string" ? o.environment_kind : void 0,
    environment_id:
      typeof o.environment_id === "string" ? o.environment_id : void 0,
  };
}
function Ae(e) {
  return {};
}
function Ne(e) {
  return {};
}
function Oe(e, o) {
  return {};
}
function He(e, o) {
  return {};
}
function X(e) {
  return;
}
async function Ie(e) {
  if (!dr(pe())) return { kind: "no-git" };
  let o = Te(),
    r = await pm(o),
    [g, s] = await Promise.all([Ce(r), oii(o, r === "HEAD" ? null : r)]);
  return {
    kind: "ready",
    outcomeBranch: `claude/teleport-${e.slice(-8)}`,
    checkout: g,
    localWork: s,
  };
}
var ve =
  "Couldn\u2019t confirm this session\u2019s Remote Control connection and git branch are unchanged, so nothing moved. Run /teleport again.";
async function _e(e) {
  if (cC())
    return (
      m("teleport_to_cloud", "restricted_session"),
      { kind: "precondition", message: VQo }
    );
  {
    let M = eTa();
    if (M !== void 0)
      return (
        m("teleport_to_cloud", "repl_mode_not_carried"),
        { kind: "precondition", message: M }
      );
  }
  let o = G(Pc()),
    r = o?.bridgeSessionId;
  if (!o || !r)
    return (
      m("teleport_to_cloud", "no_bridge"),
      {
        kind: "precondition",
        message:
          "This session isn\u2019t connected to Remote Control. Run /remote-control first, then try again.",
      }
    );
  let g = ne() && e.credentials !== void 0 ? await V9e(e.credentials) : z9e();
  if (!g)
    return (
      m("teleport_to_cloud", "no_auth"),
      {
        kind: "precondition",
        message:
          "Not signed in to claude.ai. Run /login with your claude.ai account and try again.",
      }
    );
  let s = await Ie(r);
  switch (s.kind) {
    case "no-git":
      return (
        m("teleport_to_cloud", "no_git"),
        {
          kind: "precondition",
          message: `${pe()} isn\u2019t a git repository, so the cloud has nothing to clone. Try again from one that has a remote.`,
        }
      );
    case "ready":
      break;
    default:
      return s;
  }
  if (o.gitRepoUrl === null)
    return (
      m("teleport_to_cloud", "no_git_remote"),
      {
        kind: "precondition",
        message:
          "Can\u2019t move. Moving to the cloud needs a remote named origin, in a repository that isn\u2019t your home directory. A new session started from one can move.",
      }
    );
  let { checkout: h, outcomeBranch: R } = s,
    w = ce(s.localWork),
    H = w === void 0 ? o.publishGitStateBeforeHandoff?.() : void 0,
    C = wt() ? null : await Be(o),
    y =
      C && Ro(C.host) && b("tengu_teleport_github_access_precheck", !0)
        ? ulr(C.owner, C.name).catch(() => null)
        : null,
    T;
  try {
    T = await uHt(e.storageV5, e.credentials);
  } catch (M) {
    return (
      m("teleport_to_cloud", "env_lookup_failed"),
      {
        kind: "precondition",
        message: `Couldn\u2019t look up cloud environments: ${d(M)}`,
      }
    );
  }
  let I = (M) => M.kind !== "bridge" && !lje(M),
    A =
      T.selectedTarget && I(T.selectedTarget)
        ? T.selectedTarget
        : G9e(T.availableTargets, I);
  if (!A || lje(A)) {
    if (T.environmentsError)
      return (
        m("teleport_to_cloud", "env_lookup_failed"),
        {
          kind: "precondition",
          message: `Couldn\u2019t look up cloud environments: ${T.environmentsError}`,
        }
      );
    return (
      m("teleport_to_cloud", "no_environment"),
      {
        kind: "precondition",
        message:
          "No cloud environment available. Create one at claude.ai/code (or run /web-setup), then try again." +
          (lje(T.selectedTarget)
            ? " Your default environment is self-hosted. Continuing in the cloud needs an Anthropic-hosted one."
            : ""),
      }
    );
  }
  let N = await y;
  if (
    C &&
    (N?.verdict === "github_not_connected" ||
      N?.verdict === "github_repo_not_found")
  )
    return (
      m("teleport_to_cloud", N.verdict),
      {
        kind: "precondition",
        message:
          N.verdict === "github_not_connected"
            ? HZr({
                subject: `Cloud sessions clone ${C.owner}/${C.name}`,
                ...J(),
              })
            : DZr({
                owner: C.owner,
                name: C.name,
                ...J(),
                apostrophe: "\u2019",
              }),
      }
    );
  await H;
  let D,
    U = o;
  if (w !== void 0) {
    D = X();
    let M = await ge(e, w.notice, r, h);
    if (M.kind !== "confirmed") return M;
    ((U = M.handle), await U.publishGitStateBeforeHandoff?.());
  }
  a("tengu_teleport_to_cloud", { action: S("start") });
  let k = Vu(r, U.sessionIngressUrl, { from: "cli" }),
    F = {
      sessionUrl: k,
      accessToken: g,
      environmentId: A.environment_id,
      outcomeBranch: R,
      checkout: h,
    },
    { result: _, memoryMode: O } = await he(e, U, {
      ...F,
      memoryModeAtNotice: D,
      isAfterYes: w !== void 0,
    }),
    x = new Set(w?.covers),
    W;
  while (!_.ok && _.revisionConflict !== void 0 && W === void 0) {
    wps(r);
    let { notice: M, fallback: L } = ue(_.revisionConflict),
      te = !x.has(L),
      Y = await ge(e, te ? M : void 0, r, h);
    if (Y.kind !== "confirmed") return Y;
    if ((x.add(L), te && L === "default_branch"))
      await Y.handle.publishGitStateBeforeHandoff?.();
    else W = L;
    ({ result: _, memoryMode: O } = await he(e, Y.handle, {
      ...F,
      memoryModeAtNotice: O,
      isAfterYes: !0,
      revisionFallback: W,
    }));
  }
  if (!_.ok) {
    let M = !_.mayHaveCommitted && _.reason === "github_token_missing";
    if (_.mayHaveCommitted) l("teleport_to_cloud", "maybe_committed");
    else
      (m(
        "teleport_to_cloud",
        M
          ? "github_not_connected"
          : _.reason === "unconfirmed_before_move"
            ? "unconfirmed_before_move"
            : "request_failed",
      ),
        wps(r));
    return (
      a("tengu_teleport_to_cloud", {
        action: S(_.mayHaveCommitted ? "maybe_committed" : "failed"),
      }),
      {
        kind: "server-error",
        failure: M
          ? {
              ..._,
              message: `No GitHub account is connected to your Claude account (or the connection expired). ${Uci(J())}`,
            }
          : _,
        sessionId: r,
      }
    );
  }
  let xe = !1;
  if (W !== void 0) l("teleport_to_cloud", `revision_${W}`);
  else u("teleport_to_cloud");
  let { environmentKind: V } = _;
  a("tengu_teleport_to_cloud", {
    action: S("success"),
    environment_kind: r6t(V) ? f(V) : S(V === "cloud" ? "cloud" : "other"),
  });
  let oe = ie(_);
  return {
    kind: "ok",
    success: _,
    sessionUrl: k,
    ...(oe.length > 0 && {
      afterMove: oe.join(`
`),
    }),
  };
}
async function ge(e, o, r, g) {
  if (o !== void 0) {
    let h = await e.confirmMove?.(o);
    if (h !== !0) {
      if (h === !1) a("tengu_teleport_to_cloud", { action: S("declined") });
      return { kind: "precondition", message: "Teleport cancelled" };
    }
  }
  let s = await ke(r, g);
  if (s === null)
    return (
      m("teleport_to_cloud", "unconfirmed_before_move"),
      a("tengu_teleport_to_cloud", { action: S("failed") }),
      { kind: "precondition", message: ve }
    );
  return { kind: "confirmed", handle: s };
}
async function ke(e, o) {
  let r = await I8o(pm(Te()).then(Ce)).catch((s) => {
      t(`[teleport] the checkout could not be read again: ${d(s)}`);
      return;
    }),
    g = G(Pc());
  return g?.bridgeSessionId === e && r === o ? g : null;
}
async function Ce(e) {
  return e === "HEAD" ? y6e(Te()) : e;
}
async function he(e, o, r) {
  oyr(o.bridgeSessionId);
  let g = !1;
  try {
    (o.stopLocalPreview?.(), await o.settleUploadsBeforeHandoff?.());
    let s = (await V9e(e.credentials)) ?? r.accessToken,
      h = await tT();
    if (r.isAfterYes && (await ke(o.bridgeSessionId, r.checkout)) === null)
      return {
        result: {
          ok: !1,
          message: ve,
          mayHaveCommitted: !1,
          reason: "unconfirmed_before_move",
        },
        memoryMode: r.memoryModeAtNotice,
      };
    let R = rTa(),
      w = X(r.memoryModeAtNotice);
    return (
      (g = !0),
      {
        result: await j({
          onMoved: () => {
            (e.onMoved?.(r.sessionUrl), ye(e));
          },
          onMayHaveMoved: (C) => {
            (e.onMayHaveMoved?.(C), ye(e));
          },
          sessionId: o.bridgeSessionId,
          baseUrl: sj(),
          accessToken: s,
          onAuth401: (C, y) => lyr(C, e.credentials, y),
          environmentId: r.environmentId,
          trustedDeviceToken: h,
          outcomeBranch: r.outcomeBranch,
          permissionMode: R,
          memoryMode: w,
          revisionFallback: r.revisionFallback,
        }),
        memoryMode: w,
      }
    );
  } catch (s) {
    if (!g) wps(o.bridgeSessionId);
    throw s;
  }
}
function ye(e) {
  try {
    e.beforeMove?.();
  } catch (o) {
    t(`[teleport] the step at the move's commit point failed: ${d(o)}`, {
      level: "error",
    });
  }
}
function Me(e) {
  return Cpe()
    ? { kind: "reconnect", oldSessionId: e }
    : { kind: "disconnect" };
}
var z =
  "/remote-control is no longer active. Run /remote-control to start a new session.";
function Z(e, o) {
  let r = `Session now in the cloud: ${e}`;
  switch (o.kind) {
    case "disconnected":
      return `${r}
${z}`;
    case "reconnected":
      return `${r}
New /remote-control session is active \xB7 Continue here, on your phone, or at ${o.newUrl}`;
    case "reconnect-pending":
      return `${r}
Starting a new /remote-control session. It\u2019ll show as /rc shortly.`;
  }
}
function G(e) {
  return e && !e.outboundOnly ? e : null;
}
function Be(e) {
  if (e.gitRepoUrl === void 0) return gT();
  return e.gitRepoUrl ? vks(e.gitRepoUrl) : Promise.resolve(null);
}
function J() {
  return {
    webSetupHint: Bbt() ? "run /web-setup to reuse your GitHub CLI login" : "",
    rerun: "then run /teleport again",
  };
}
var Pe = 1e4,
  $e = 100,
  we = 250;
function ee(e, o = !1) {
  e.setAppState((r) => {
    if (!r.replBridgeEnabled) return r;
    return {
      ...r,
      replBridgeSkipNextArchive: !0,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      ...(o && { replBridgeSessionGroupingId: void 0 }),
    };
  });
}
function Ue(e) {
  e.setAppState((o) => {
    if (o.replBridgeEnabled) return o;
    return { ...o, replBridgeEnabled: !0 };
  });
}
async function De(e, o, r = Pe) {
  let g = Date.now() + r;
  while (Date.now() < g) {
    if (o.aborted) return null;
    let s = Pc()?.bridgeSessionId;
    if (s && s !== e) return s;
    await K($e, o);
  }
  return null;
}
async function VBs(e, o) {
  let r, g, s;
  try {
    return await Le(e, o, {
      onMoved: (h) => {
        r = h;
      },
      onAfterMove: (h) => {
        g = h;
      },
      onMayHaveMoved: (h) => {
        s = h;
      },
    });
  } catch (h) {
    if (r !== void 0)
      return (
        i(h),
        `Session now in the cloud: ${r}
Claude Code didn\u2019t finish updating Remote Control in this terminal after the move (${d(h)}).${
          g === void 0
            ? ""
            : `
${g}`
        }`
      );
    if (s !== void 0)
      return (
        i(h),
        `${s}
Claude Code didn\u2019t finish updating Remote Control in this terminal (${d(h)}).`
      );
    throw h;
  }
}
async function A9l(e) {
  let o = G(Pc()),
    r = o?.bridgeSessionId ?? _Q()?.id;
  if (!r || !TI(r)) return;
  let g = await cxs(r, void 0, e.credentials).catch((w) => {
    t(
      `[teleport] Couldn't read Remote Control session ${r} to see whether it was moved elsewhere, so the move goes on: ${d(w)}`,
      { level: "error" },
    );
    return;
  });
  if (g === void 0 || Un(String(g.session.id)) !== Un(r)) return;
  let s = g.session.environment_kind;
  if (typeof s !== "string" || s === "" || s === "bridge" || s === "chat")
    return;
  let R = `Can't move this session to the cloud: it was already moved there from another device or app. Continue it at ${Vu(r, o?.sessionIngressUrl, { from: "cli" })}`;
  if (o === null) return (oyr(r), nSe(void 0, void 0, void 0, e.storageV5), R);
  return (
    Se(e, r),
    `${R}
${z}`
  );
}
async function Le(e, o, r) {
  if (Bte())
    return "Couldn\u2019t teleport: this conversation or this Claude Code process ran under an organization sign-in (not a claude.ai login), or Claude Code could not check that. A cloud session runs under a claude.ai login, outside the organization of that sign-in. You can continue this conversation here. To teleport a new conversation, start Claude Code again. If you use an organization sign-in, run `claude auth logout` before you start Claude Code again.";
  let g = !1,
    s;
  try {
    s = await _e({
      beforeMove: () => {
        if (((g = o9r("cloud_handoff")), g))
          e.applyMessageOp({
            type: "append",
            messages: [Pt(r9r.cloud_handoff, "warning")],
          });
      },
      onMoved: r.onMoved,
      onMayHaveMoved: (h) => r.onMayHaveMoved(`Couldn\u2019t teleport: ${h}`),
      credentials: e.credentials,
      storageV5: e.storageV5,
      confirmMove: o,
    });
  } finally {
    Egt();
  }
  switch (s.kind) {
    case "precondition":
      return s.message;
    case "server-error": {
      if (s.failure.mayHaveCommitted)
        return (
          r.onMayHaveMoved(
            jte(`Couldn\u2019t teleport: ${s.failure.message}`, g),
          ),
          Se(e, s.sessionId),
          jte(
            `Couldn\u2019t teleport: ${s.failure.message}
${z}`,
            g,
          )
        );
      return jte(`Couldn\u2019t teleport: ${s.failure.message}`, g);
    }
    case "ok": {
      (r.onAfterMove(s.afterMove),
        oyr(s.success.sessionId),
        nSe(void 0, void 0, void 0, e.storageV5));
      let h = s.sessionUrl,
        { afterMove: R } = s,
        w = (y) =>
          R === void 0
            ? y
            : `${y}
${R}`,
        H = Me(s.success.sessionId);
      if (H.kind === "disconnect")
        return (setTimeout(ee, we, e, !0), w(Z(h, { kind: "disconnected" })));
      (ee(e), await K(0), Ue(e));
      let C = await De(H.oldSessionId, e.abortController.signal);
      return w(
        Z(
          h,
          C
            ? { kind: "reconnected", newUrl: Vu(C, void 0, { from: "cli" }) }
            : { kind: "reconnect-pending" },
        ),
      );
    }
  }
}
function Se(e, o) {
  (oyr(o), nSe(void 0, void 0, void 0, e.storageV5), setTimeout(ee, we, e, !0));
}
export { VBs, A9l };
