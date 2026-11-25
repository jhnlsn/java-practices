// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { N, Sl } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { u } from "/$bunfs/root/chunk-y98mhv74.js";
import { a } from "/$bunfs/root/chunk-487kez16.js";
import { Rt, t } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { Ke, me, kEr } from "/$bunfs/root/chunk-aq3ms068.js";
import { s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { LYi } from "/$bunfs/root/chunk-6bq219xw.js";
import { i } from "/$bunfs/root/chunk-ht6e56zb.js";
import { x } from "/$bunfs/root/chunk-kg2zehkt.js";
import { Xo } from "/$bunfs/root/chunk-541wtx57.js";
import { Om } from "/$bunfs/root/chunk-5ghdkswv.js";
import { Iqe, zJt, kf, w8, Jxn } from "/$bunfs/root/chunk-xh5mvvey.js";
import { Kr } from "/$bunfs/root/chunk-hg1yqkjk.js";
import { j } from "/$bunfs/root/chunk-z749tmkd.js";
import { hostname as v } from "os";
var D = 2,
  O = 1e4,
  R = 600000,
  w = 2592000000;
function S() {
  try {
    return v();
  } catch {
    return "unknown";
  }
}
function P(e) {
  return {
    now: e,
    version: {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.329",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-19T16:23:05Z",
      GIT_SHA: "6a49dd29d929a6fe40c060bbccfeb5a7f037c958",
      HOOKS_WORKER_URL:
        "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION,
    host: S(),
    platform: x(),
    ownPid: process.pid,
    isGone: Om,
  };
}
function _(e, n) {
  let o = n.stickyStrikes ?? D,
    l = { ...e.fullscreenBootPending },
    d = e.fullscreenAutoDisabled,
    c =
      e.fullscreenBootStrikes?.version === n.version
        ? e.fullscreenBootStrikes.count
        : 0;
  if (d && d.version !== n.version) d = void 0;
  let r = 0,
    f = !1,
    y = Number.POSITIVE_INFINITY;
  for (let [m, p] of Object.entries(l)) {
    let k = Number(m);
    if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
      delete l[m];
      continue;
    }
    let g = Math.max(0, n.now - p.startedAt);
    if (p.host !== n.host || p.platform !== n.platform) {
      if (g > w) delete l[m];
      continue;
    }
    if (p.died !== void 0 || k === n.ownPid || n.isGone(k)) {
      if ((delete l[m], p.version === n.version))
        ((r += 1), (y = Math.min(y, g)));
    } else if (g > R) delete l[m];
    else f = !0;
  }
  let h = { kind: "none" };
  if (d) h = { kind: "disabled" };
  else if (r > 0) {
    c += r;
    let m = Number.isFinite(y) ? y : 0;
    if (c >= o)
      ((d = { version: n.version, at: n.now, strikes: c }),
        (h = { kind: "tripped", strikes: c, newStrikes: r, pendingAgeMs: m }),
        (c = 0));
    else h = { kind: "strike", strikes: c, newStrikes: r, pendingAgeMs: m };
  } else if (f) h = { kind: "pending_alive" };
  return {
    next: {
      fullscreenBootPending: Object.keys(l).length > 0 ? l : void 0,
      fullscreenBootStrikes: c > 0 ? { count: c, version: n.version } : void 0,
      fullscreenAutoDisabled: d,
    },
    decision: h,
  };
}
function B(e, n) {
  let o = (l) =>
    Object.keys(l.fullscreenBootPending ?? {})
      .sort()
      .join(",");
  return (
    o(e) !== o(n) ||
    (e.fullscreenBootStrikes?.count ?? 0) !==
      (n.fullscreenBootStrikes?.count ?? 0) ||
    e.fullscreenBootStrikes?.version !== n.fullscreenBootStrikes?.version ||
    e.fullscreenAutoDisabled?.version !== n.fullscreenAutoDisabled?.version ||
    e.fullscreenAutoDisabled?.at !== n.fullscreenAutoDisabled?.at
  );
}
function LBr() {
  let e = me();
  return (
    e.fullscreenAutoDisabled?.version ===
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.329",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-19T16:23:05Z",
        GIT_SHA: "6a49dd29d929a6fe40c060bbccfeb5a7f037c958",
        HOOKS_WORKER_URL:
          "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION ||
    (e.fullscreenBootStrikes?.version ===
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.329",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-19T16:23:05Z",
        GIT_SHA: "6a49dd29d929a6fe40c060bbccfeb5a7f037c958",
        HOOKS_WORKER_URL:
          "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION &&
      e.fullscreenBootStrikes.count > 0)
  );
}
var T = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui classic keeps the classic renderer.
`,
  M = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function USa(e) {
  let n = e?.state ?? Iqe,
    o = w8(n);
  if (
    o === "env_on" ||
    o === "bg_forced_on" ||
    s.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER
  )
    return { kind: "none" };
  let l = P(Date.now()),
    d = me(),
    { next: c, decision: r } = _(d, l);
  if (B(d, c))
    Ke((f) => {
      let y = _(f, l).next;
      return B(f, y) ? { ...f, ...y } : f;
    }, e?.storageV5);
  if (r.kind === "strike" || r.kind === "tripped" || r.kind === "disabled") {
    n.crashAutoOff = !0;
    let f = Jxn(o) === "fullscreen";
    if (r.kind !== "disabled") {
      if (
        (a("tengu_fullscreen_crash_auto_off", {
          sticky: r.kind === "tripped",
          strikes: r.strikes,
          new_strikes: r.newStrikes,
          pending_age_ms: r.pendingAgeMs,
          would_be_entry_path: u(o),
          overrides_fullscreen: f,
        }),
        f)
      )
        process.stderr.write(r.kind === "tripped" ? M : T);
    }
    t(
      `fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${r.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`,
    );
  } else if (r.kind !== "none") t(`fullscreen boot canary: ${r.kind}`);
  return r;
}
function XUo(e) {
  return Ke(
    (n) =>
      n.fullscreenAutoDisabled === void 0 && n.fullscreenBootStrikes === void 0
        ? n
        : {
            ...n,
            fullscreenAutoDisabled: void 0,
            fullscreenBootStrikes: void 0,
          },
    e,
  );
}
var F = new Set([
  "settings_on",
  "upsell_trial_on",
  "ant_default",
  "fresh_install_on",
  "gb_on",
]);
class C {
  canary = { status: "idle" };
  recordMaybeOnDisk = void 0;
  exitHook = void 0;
  retire() {
    if (this.canary.status === "armed") {
      if ((this.canary.cleanup(), this.canary.timer !== void 0))
        clearTimeout(this.canary.timer);
    }
    if (
      ((this.canary = { status: "idle" }),
      (this.recordMaybeOnDisk = void 0),
      this.exitHook !== void 0)
    )
      (process.off("exit", this.exitHook), (this.exitHook = void 0));
  }
}
var I = new j(() => new C());
function b() {
  return I.of(N().host);
}
function E(e, n, o) {
  let l = e.fullscreenBootPending?.[String(n)] !== void 0;
  if (!l && !(o && e.fullscreenBootStrikes)) return e;
  let d = e.fullscreenBootPending;
  if (l && d) {
    let { [String(n)]: c, ...r } = d;
    d = Object.keys(r).length > 0 ? r : void 0;
  }
  return {
    ...e,
    fullscreenBootPending: d,
    fullscreenBootStrikes: o ? void 0 : e.fullscreenBootStrikes,
  };
}
function H(e) {
  if (e.exitHook !== void 0) return;
  ((e.exitHook = () => {
    if (e.recordMaybeOnDisk !== void 0 && Kr()) {
      let n = e.recordMaybeOnDisk;
      kEr((o) => E(o, n, !1));
    }
  }),
    process.on("exit", e.exitHook));
}
async function $Sa(e) {
  let n = e?.state ?? Iqe,
    o = b();
  if (o.canary.status !== "idle") return o.canary.status === "armed";
  if (!Sl() || s.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return !1;
  if (!n.crashAutoOff && zJt() && F.has(w8(n)))
    ((n.crashAutoOff = !0),
      t(
        "fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override",
      ));
  if (!kf(n)) return !1;
  if (!F.has(w8(n))) return !1;
  let l = process.pid,
    d = {
      startedAt: Date.now(),
      version: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.329",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-19T16:23:05Z",
        GIT_SHA: "6a49dd29d929a6fe40c060bbccfeb5a7f037c958",
        HOOKS_WORKER_URL:
          "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      host: S(),
      platform: x(),
    },
    c = Rt(() =>
      A(
        o,
        o.canary.status === "armed" &&
          o.canary.firstFrameAt !== void 0 &&
          (process.exitCode === void 0 || process.exitCode === 0) &&
          !LYi()
          ? "healthy"
          : "withdrawn",
      ),
    );
  (H(o),
    (o.canary = {
      status: "armed",
      pid: l,
      cleanup: c,
      onHealthy: e?.onHealthy,
      healthyAfterMs: e?.healthyAfterMs ?? O,
      firstFrameAt: void 0,
      timer: void 0,
      storageV5: e?.storageV5,
    }),
    (o.recordMaybeOnDisk = l),
    Xo("fullscreen_canary_arm_start"));
  try {
    await Ke(
      (r) => ({
        ...r,
        fullscreenBootPending: { ...r.fullscreenBootPending, [String(l)]: d },
      }),
      e?.storageV5,
    );
  } catch (r) {
    i(r);
  } finally {
    Xo("fullscreen_canary_armed");
  }
  return o.canary.status === "armed";
}
function BSa(e = Date.now()) {
  let n = b();
  if (n.canary.status !== "armed" || n.canary.firstFrameAt !== void 0) return;
  ((n.canary.firstFrameAt = e),
    (n.canary.timer = setTimeout(
      (o) => {
        A(o, "healthy").catch(i);
      },
      n.canary.healthyAfterMs,
      n,
    )),
    n.canary.timer.unref?.());
}
async function A(e, n) {
  if (e.canary.status !== "armed") return;
  let { pid: o, cleanup: l, timer: d, onHealthy: c, storageV5: r } = e.canary;
  if (((e.canary = { status: "settled" }), l(), d !== void 0)) clearTimeout(d);
  if ((await Ke((f) => E(f, o, n === "healthy"), r), e.recordMaybeOnDisk === o))
    e.recordMaybeOnDisk = void 0;
  if ((t(`fullscreen boot canary: ${n}`), n === "healthy" && c))
    try {
      await c();
    } catch (f) {
      i(f);
    }
}
async function NBr() {
  let e = b();
  if (e.canary.status !== "armed") return !1;
  let { pid: n, cleanup: o, timer: l, storageV5: d } = e.canary;
  if (((e.canary = { status: "settled" }), o(), l !== void 0)) clearTimeout(l);
  if (e.recordMaybeOnDisk === n) e.recordMaybeOnDisk = void 0;
  let c = !1;
  return (
    await Ke((r) => {
      let f = r.fullscreenBootPending?.[String(n)];
      if (f === void 0 || f.died !== void 0) return r;
      return (
        (c = !0),
        {
          ...r,
          fullscreenBootPending: {
            ...r.fullscreenBootPending,
            [String(n)]: { ...f, died: "render_error" },
          },
        }
      );
    }, d),
    t("fullscreen boot canary: failure recorded"),
    c
  );
}
export { LBr, USa, XUo, $Sa, BSa, NBr };
