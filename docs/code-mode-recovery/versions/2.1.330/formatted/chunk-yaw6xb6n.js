// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { K } from "/$bunfs/root/chunk-5appeerh.js";
import { _r, hl } from "/$bunfs/root/chunk-cbnm4p23.js";
import { Be } from "/$bunfs/root/chunk-69qhefwa.js";
import { A } from "/$bunfs/root/chunk-jv7av99m.js";
import { i } from "/$bunfs/root/chunk-k449cc64.js";
import { nn, Ga } from "/$bunfs/root/chunk-xfj2cwfv.js";
import { Bje } from "/$bunfs/root/chunk-xv4nm9fz.js";
import { ue } from "/$bunfs/root/chunk-r3kja8v6.js";
import { u$n } from "/$bunfs/root/chunk-s07wk09v.js";
import { Vgs } from "/$bunfs/root/chunk-hzjxdt7w.js";
import { Kgs } from "/$bunfs/root/chunk-hp8nm0bk.js";
import { uj } from "/$bunfs/root/chunk-5412tm8t.js";
var Ggs = 8;
class q {
  context = void 0;
  running = new Set();
  attached = void 0;
  deliveryChain = Promise.resolve();
  depth = 0;
  pending = new Map();
  ranEvals = !1;
  epoch = 0;
  conversation = 0;
  reportHolds = 0;
  declined = void 0;
  rewoundToolUses = new Set();
  kept = void 0;
  evalIdByToolUseId = new Map();
  ticks = Be();
  unwaited = new Set();
  undelivered = new Set();
  reportsDue = 0;
  statusLineGiven = !1;
  settling = new Map();
  onRunningChange = () => {};
  runningCache = { at: -1, value: new Map() };
  runningChanges = 0;
  tickBatches = 0;
  tickBatchOpen = !1;
  scriptTicksCache = void 0;
}
var z = 100,
  j = 50,
  F = 10,
  X = 200,
  Q = 256,
  zgs = { list: () => [], abort: () => (ue() ? "no such eval" : "") };
class Lbe {
  #e = new Map();
  #u = 1;
  #t = 0;
  #n = 0;
  #r = Be();
  #o = Be();
  #c = Be();
  #f = new WeakMap();
  takeScriptNumber() {
    return this.#u++;
  }
  dispatch(n, t, r, s = "") {
    if (!ue()) throw Error("unreachable");
    let e = this.#i(n);
    if (e.depth >= Ggs)
      throw new A(
        `async REPL dispatch rejected: ${e.depth} evals already waiting or running on this context \u2014 wait for their settles (Poll) before dispatching more`,
        "async REPL dispatch rejected: unsettled evals cap",
      );
    let o = this.#u++,
      { epoch: a, conversation: p } = e,
      h = () =>
        (e.conversation !== p && e.kept?.(o) !== !0) ||
        (r.toolUseId !== void 0 && e.rewoundToolUses.has(r.toolUseId)),
      g = e.reportHolds,
      b = () => e.reportHolds > g;
    if (r.toolUseId !== void 0) {
      if (
        (e.evalIdByToolUseId.set(r.toolUseId, o), e.evalIdByToolUseId.size > Q)
      ) {
        for (let [u, f] of e.evalIdByToolUseId)
          if (!e.pending.has(f) && !e.settling.has(f)) {
            e.evalIdByToolUseId.delete(u);
            break;
          }
      }
    }
    ((e.ranEvals = !0), e.depth++);
    let T = 2,
      I = () => {},
      Y = new Promise((u) => {
        I = u;
      }),
      k = () => {
        if ((T--, T === 0)) I();
      },
      D = () => {
        if (e.pending.get(o)?.late === void 0) e.unwaited.delete(o);
        (e.undelivered.delete(o), e.settling.delete(o), c(e), k());
      },
      l = {
        startedAt: void 0,
        detached: !1,
        description: r.description,
        replyId: r.replyId,
        snippet: s.replace(/\s+/g, " ").trim().slice(0, z),
        controller: void 0,
        abortRequested: void 0,
        epoch: e.epoch,
        late: void 0,
        ticks: new Map(),
        finished: new Set(),
        callReturned: !1,
        readNotYetStarted: void 0,
        left: () => {
          (r.signal.removeEventListener("abort", y), k());
        },
        retired: h,
        stopped: new AbortController(),
      };
    function y() {
      if (!u$n(r.signal.reason)) l.stopped.abort();
    }
    if (r.signal.aborted) y();
    else r.signal.addEventListener("abort", y, { once: !0 });
    if (e.declined !== void 0)
      if (r.replyId !== void 0 && e.declined.replyIds.has(r.replyId))
        (l.stopped.abort(e.declined.reason), (l.abortRequested = "declined"));
      else e.declined = void 0;
    (e.pending.set(o, l),
      e.unwaited.add(o),
      e.undelivered.add(o),
      (e.statusLineGiven = !1),
      c(e),
      this.#a(this.#t + 1));
    let G = e.attached ?? Promise.resolve(),
      m = () => {},
      R = new Promise((u) => {
        m = u;
      });
    ((e.attached = R),
      R.then(() => {
        if (e.attached === R) e.attached = void 0;
      }));
    let w = !1,
      W = async () => {
        let u,
          f = !1,
          E,
          M = () => r.signal.aborted && !u$n(r.signal.reason);
        if (M())
          ((f = !0),
            (E = "person"),
            (u =
              "cancelled before start \u2014 the dispatching turn was aborted while this eval waited for its turn; the script never ran"));
        else if (e.epoch !== a)
          ((f = !0),
            (E = "person"),
            (u =
              "cancelled before start \u2014 the session was interrupted while this eval waited for its turn; the script never ran"));
        else if (l.abortRequested !== void 0)
          ((f = !0),
            (E = l.abortRequested === "person" ? "person" : "other"),
            (u =
              l.abortRequested === "person"
                ? "cancelled before start \u2014 the user stopped this eval while it waited for its turn; the script never ran"
                : l.abortRequested === "declined"
                  ? "cancelled before start \u2014 the user declined the permission dialog for an earlier script's call (a No or an Esc), which also cancels the scripts behind that one; the script never ran"
                  : l.abortRequested === "taskStop"
                    ? "cancelled before start \u2014 a TaskStop call stopped this eval while it waited for its turn; the script never ran"
                    : l.abortRequested === "session"
                      ? "cancelled before start \u2014 Claude Code stopped this eval while it waited for its turn; the script never ran"
                      : "cancelled before start \u2014 a script aborted this eval (self.running().abort()) while it waited for its turn; it never ran"));
        else {
          if (nn()) await Ga();
          let v = _r(),
            C,
            _ = !1,
            P = () => {
              if (_) return;
              (clearTimeout(C), (l.detached = !0), m());
            },
            L = () => {
              if (M()) v.abort(r.signal.reason);
              else if (r.staysAttachedOnTurnAbort !== !0) P();
            };
          if (r.signal.aborted) L();
          else r.signal.addEventListener("abort", L, { once: !0 });
          if (
            (e.running.add(v),
            (l.startedAt = Date.now()),
            c(e),
            (l.controller = v),
            !l.detached)
          )
            C = setTimeout(P, r.detachAfterMs);
          try {
            u = await t(v, {
              reportNotYetStarted: (S) => {
                l.readNotYetStarted = S;
              },
            });
          } catch (S) {
            ((f = !0),
              (u = uj(S)
                ? S.message
                : "host-side failure before settling (non-Error rejection; detail withheld from coercion)"));
          } finally {
            ((_ = !0), clearTimeout(C), e.running.delete(v));
          }
        }
        ((w = !0), this.#h(n, o, u, f, r, m, h, D, b, E));
      },
      O = G.then(async () => {
        try {
          await W();
        } finally {
          if (!w) (this.#a(this.#t - 1), m(), D());
        }
      });
    O.catch(i);
    let V = O.then(
      () => {},
      () => {},
    ).then(() => {
      if ((e.depth--, l.late === void 0)) B(e, o, l);
      c(e);
    });
    return {
      evalId: o,
      finished: V,
      retired: h,
      ended: Y,
      stopped: l.stopped.signal,
    };
  }
  pending(n) {
    if (!ue()) return [];
    return this.ledger(n).filter((t) => t.state !== "late");
  }
  ledger(n) {
    if (!ue()) return [];
    let t = this.#e.get(n);
    if (t === void 0) return [];
    let r = Date.now();
    return [...t.pending].map(([s, e]) => ({
      id: s,
      state:
        e.late !== void 0
          ? "late"
          : e.startedAt === void 0
            ? "waiting"
            : e.detached
              ? "detached"
              : "running",
      runningMs: e.startedAt === void 0 ? 0 : r - e.startedAt,
      snippet: e.snippet,
      notYetStarted: e.readNotYetStarted?.() ?? [],
    }));
  }
  holdLate(n, t, r) {
    if (!ue()) {
      r.abort();
      return;
    }
    let s = this.#e.get(n),
      e = s?.pending.get(t);
    if (s === void 0 || e === void 0 || e.late !== void 0) {
      r.abort();
      return;
    }
    ((e.late = r),
      e.ticks.clear(),
      e.finished.clear(),
      c(s),
      this.#s(this.#n + 1));
    let o = () => this.#d(s, t, e);
    r.idle.then(o, o);
  }
  isLateReportDue(n) {
    let t = this.#e.get(n);
    return (
      t !== void 0 &&
      (t.reportsDue > 0 ||
        [...t.pending.values()].some((r) => r.late?.callsEnded?.() === !0))
    );
  }
  #d(n, t, r) {
    if (n.pending.get(t) !== r) return;
    (B(n, t, r), c(n), this.#s(this.#n - 1));
  }
  stopAskerOf(n) {
    return this.#f.get(n);
  }
  recordTick(n, t, r) {
    if (!ue()) return;
    let s = this.#e.get(n),
      e = s?.pending.get(t);
    if (s === void 0 || e === void 0) return;
    let o;
    try {
      o = Kgs({
        ...r,
        toolInput: e.ticks.get(r.toolUseId)?.toolInput ?? r.toolInput,
        scriptStartedAt: e.startedAt,
      });
    } catch {
      return;
    }
    if ((e.ticks.set(o.toolUseId, o), J(o))) {
      if ((e.finished.add(o.toolUseId), e.finished.size > j)) {
        let a = e.finished.values().next().value;
        if (a !== void 0) (e.finished.delete(a), e.ticks.delete(a));
      }
    } else e.finished.delete(o.toolUseId);
    if (!s.tickBatchOpen)
      ((s.tickBatchOpen = !0),
        K(X, void 0, { unref: !0 })
          .then(() => {
            ((s.tickBatchOpen = !1), s.tickBatches++, this.#c.emit());
          })
          .catch(i));
    if (e.callReturned && e.startedAt !== void 0)
      H(s, { evalId: t, startedAt: e.startedAt, tick: o });
  }
  callReturned(n, t) {
    if (!ue()) return;
    let r = this.#e.get(n),
      s = r?.pending.get(t);
    if (r === void 0 || s === void 0 || s.callReturned) return;
    if (((s.callReturned = !0), s.startedAt === void 0)) return;
    for (let e of s.ticks.values())
      H(r, { evalId: t, startedAt: s.startedAt, tick: e });
  }
  ticks(n) {
    if (!ue()) return [];
    let t = this.#e.get(n);
    if (t === void 0) return [];
    let r = [];
    for (let [s, e] of t.pending) {
      if (!e.callReturned || e.startedAt === void 0) continue;
      for (let o of e.ticks.values())
        r.push({ evalId: s, startedAt: e.startedAt, tick: o });
    }
    return r;
  }
  takeUnwaited(n, t) {
    if (!ue()) return [];
    let r = this.#e.get(n);
    if (r === void 0) return [];
    let s = [...r.unwaited].filter((e) => t?.has(e) ?? !0);
    for (let e of s) r.unwaited.delete(e);
    return s;
  }
  noteStatusLine(n) {
    if (!ue()) return;
    this.#i(n).statusLineGiven = !0;
  }
  takeStatusLineGiven(n) {
    if (!ue()) return !1;
    let t = this.#e.get(n);
    if (t === void 0) return !1;
    let r = t.statusLineGiven;
    return ((t.statusLineGiven = !1), r);
  }
  undelivered(n) {
    if (!ue()) return U;
    return this.#e.get(n)?.undelivered ?? U;
  }
  runningScripts(n) {
    if (!ue()) return N;
    let t = this.#e.get(n);
    if (t === void 0) return N;
    if (t.runningCache.at === t.runningChanges) return t.runningCache.value;
    let r = new Map();
    for (let [s, e] of t.evalIdByToolUseId) {
      let o = t.pending.get(e),
        a = o ?? t.settling.get(e);
      if (
        a === void 0 ||
        (o !== void 0 && (o.epoch !== t.epoch || o.retired()))
      )
        continue;
      r.set(s, {
        evalId: e,
        description: a.description,
        startedAt: a.startedAt,
        late: o?.late !== void 0 && !t.undelivered.has(e),
      });
    }
    return ((t.runningCache = { at: t.runningChanges, value: r }), r);
  }
  onRunningScriptsChange(n) {
    if (!ue()) return () => {};
    return this.#o.subscribe(n);
  }
  scriptTicks(n) {
    if (!ue()) return x;
    let t = this.#e.get(n);
    if (t === void 0) return x;
    let r = this.runningScripts(n),
      s = t.scriptTicksCache;
    if (s?.running === r && s.tickBatches === t.tickBatches) return s.value;
    let e = new Map();
    for (let [o, { evalId: a }] of r) {
      let p = [],
        h = 0;
      for (let g of t.pending.get(a)?.ticks.values() ?? [])
        if (g.scriptHelper !== !0 && (g.phase !== "start" || ++h <= F))
          p.push({ data: g });
      if (p.length > 0) e.set(o, p);
    }
    return (
      (t.scriptTicksCache = {
        running: r,
        tickBatches: t.tickBatches,
        value: e,
      }),
      e
    );
  }
  onScriptTicksChange(n) {
    if (!ue()) return () => {};
    let t = this.#c.subscribe(n),
      r = this.#o.subscribe(n);
    return () => {
      (t(), r());
    };
  }
  onTick(n, t) {
    if (!ue()) return () => {};
    return this.#i(n).ticks.subscribe(t);
  }
  abort(n, t, r = "script") {
    if (!ue()) return "";
    let s = this.#e.get(n),
      e = s?.pending.get(t);
    if (s === void 0 || e === void 0)
      return "no such eval (it may have settled already)";
    if ((e.stopped.abort(), e.late !== void 0)) {
      let o = r === "script" || r === "taskStop";
      if ((e.late.abort(o), o && e.late.callsEnded?.() === !0)) {
        (s.reportsDue++, this.#s(this.#n + 1));
        let a = () => {
          (s.reportsDue--, this.#s(this.#n - 1));
        };
        e.late.idle.then(a, a);
      }
      this.#d(s, t, e);
    } else if (e.controller !== void 0) {
      if (r !== "person" && !e.controller.signal.aborted)
        this.#f.set(e.controller.signal, r);
      e.controller.abort(hl("user-cancel"));
    } else e.abortRequested = r;
    return "";
  }
  cancelWaiting(n, t, r) {
    if (!ue()) return;
    let s = this.#e.get(n);
    if (s === void 0) return;
    let e = s.declined?.replyIds ?? new Set();
    (e.add(r), (s.declined = { reason: t, replyIds: e }));
    for (let o of s.pending.values())
      if (o.controller === void 0 && o.abortRequested === void 0) {
        if (
          (o.stopped.abort(t),
          (o.abortRequested = "declined"),
          o.replyId !== void 0)
        )
          e.add(o.replyId);
      }
  }
  access(n, t) {
    if (!ue()) return zgs;
    return {
      list: () => {
        let r = t();
        return this.ledger(n).map((s) => ({ ...s, self: s.id === r }));
      },
      abort: (r) => this.abort(n, r),
    };
  }
  outstanding(n) {
    if (n === void 0) return this.#t + this.#n;
    let t = this.#e.get(n);
    if (t === void 0) return 0;
    let r = 0;
    for (let s of t.pending.values()) if (s.late !== void 0) r++;
    return t.undelivered.size + r + t.reportsDue;
  }
  unsettled(n) {
    if (n === void 0) return this.#t;
    return this.#e.get(n)?.undelivered.size ?? 0;
  }
  #p;
  mainThreadStoppableWork() {
    return (
      (this.#p ??= {
        outstanding: () => this.outstanding(Bje),
        stoppable: () => this.stoppable([Bje]),
        onOutstandingChange: (n) => this.onOutstandingChange(n),
        interrupt: () => {
          this.interrupt([Bje]);
        },
      }),
      this.#p
    );
  }
  stoppable(n) {
    if (!ue()) return 0;
    let t = n === void 0 ? void 0 : new Set(n),
      r = 0;
    for (let [s, e] of this.#e) {
      if (t !== void 0 && !t.has(s)) continue;
      for (let o of e.pending.values())
        if (
          o.epoch === e.epoch &&
          !o.abortRequested &&
          o.controller?.signal.aborted !== !0
        )
          r++;
    }
    return r;
  }
  onOutstandingChange(n) {
    return this.#r.subscribe(n);
  }
  #a(n) {
    ((this.#t = n), this.#r.emit());
  }
  #s(n) {
    ((this.#n = n), this.#r.emit());
  }
  depth(n) {
    return this.#e.get(n)?.depth ?? 0;
  }
  attached(n) {
    return this.#e.get(n)?.attached;
  }
  #h(n, t, r, s, e, o, a, p, h, g) {
    if (!ue()) return;
    let b = this.#i(n);
    b.deliveryChain = b.deliveryChain
      .then(() => e.deliver(t, r, s, a(), h, g))
      .catch(i)
      .finally(() => {
        (o(), this.#a(this.#t - 1), p());
      });
  }
  clear(n, t) {
    let r = n === void 0 ? void 0 : Array.from(n);
    for (let s of this.#l(r))
      if ((s.conversation++, (s.kept = t), ue()))
        for (let e of s.pending.values()) e.late?.discard();
    this.interrupt(r, { keepsNamed: t });
  }
  dropRewound(n, t) {
    let r = this.#e.get(n);
    if (r === void 0) return;
    for (let s of t) {
      r.rewoundToolUses.add(s);
      let e = r.evalIdByToolUseId.get(s);
      if (e !== void 0) r.settling.delete(e);
    }
    c(r);
  }
  bringBackRewound(n, t) {
    let r = this.#e.get(n);
    if (r === void 0) return;
    for (let s of t) r.rewoundToolUses.delete(s);
    c(r);
  }
  tracks(n, t) {
    let r = this.#e.get(n);
    return (
      r !== void 0 &&
      (r.pending.has(t) || r.undelivered.has(t) || r.settling.has(t))
    );
  }
  evalIdsOf(n, t) {
    let r = this.#e.get(n)?.evalIdByToolUseId,
      s = new Set();
    if (r === void 0) return s;
    for (let e of t) {
      let o = r.get(e);
      if (o !== void 0) s.add(o);
    }
    return s;
  }
  interrupt(n, { holdReportsIn: t, keepsNamed: r } = {}) {
    let s = n === void 0 ? void 0 : Array.from(n);
    for (let e of this.#l(s)) {
      if ((e.epoch++, (e.statusLineGiven = !1), t !== void 0)) e.reportHolds++;
      for (let o of e.running) o.abort(hl("user-cancel"));
      for (let o of e.settling.keys()) if (r?.(o) !== !0) e.settling.delete(o);
      if ((c(e), ue())) {
        for (let [o, a] of e.pending)
          if ((a.stopped.abort(), a.late !== void 0))
            (a.late.abort(), this.#d(e, o, a));
      }
      (e.context?.clearAllTimers(), (e.declined = void 0));
    }
    if (ue() && t !== void 0 && (s === void 0 || s.includes(Bje))) Vgs(t);
    this.#r.emit();
  }
  holdReports(n) {
    if (ue()) {
      for (let t of this.#l([Bje])) ((t.statusLineGiven = !1), t.reportHolds++);
      Vgs(n);
    }
  }
  hostedTurn = void 0;
  #l(n) {
    return n === void 0
      ? this.#e.values()
      : Array.from(n, (t) => this.#e.get(t)).filter((t) => t !== void 0);
  }
  get(n) {
    return this.#e.get(n)?.context;
  }
  has(n) {
    return this.#e.get(n)?.context !== void 0;
  }
  set(n, t) {
    this.#i(n).context = t;
  }
  release(n) {
    let t = this.#e.get(n);
    if (t?.context === void 0) return !1;
    if ((t.context.clearAllTimers(), (t.context = void 0), !t.ranEvals))
      this.#e.delete(n);
    return !0;
  }
  forget(n) {
    let t = this.#e.get(n);
    if (t === void 0) return;
    let r = () =>
        t.depth === 0 &&
        t.pending.size === 0 &&
        t.undelivered.size === 0 &&
        t.settling.size === 0,
      s = () => this.#e.get(n) === t && t.context === void 0,
      e = t.onRunningChange,
      o = () => {
        if (!s() || r()) t.onRunningChange = e;
        if (s() && r())
          t.deliveryChain.finally(() => {
            if (s() && r()) this.#e.delete(n);
          });
      };
    ((t.onRunningChange = () => {
      (e(), o());
    }),
      o());
  }
  #i(n) {
    let t = this.#e.get(n);
    if (t === void 0)
      ((t = new q()),
        (t.onRunningChange = () => this.#o.emit()),
        this.#e.set(n, t));
    return t;
  }
}
function vZl(n) {
  return n.mainThreadStoppableWork();
}
function nRe(n) {
  return n.toolState.get(Lbe);
}
function J(n) {
  return n.phase === "complete" || n.phase === "error";
}
var N = new Map(),
  x = new Map(),
  U = new Set();
function B(n, t, r) {
  if ((n.pending.delete(t), !n.undelivered.has(t))) n.unwaited.delete(t);
  if (
    (r.left(),
    r.startedAt !== void 0 &&
      !r.stopped.signal.aborted &&
      !r.retired() &&
      n.undelivered.has(t))
  )
    n.settling.set(t, { description: r.description, startedAt: r.startedAt });
}
function c(n) {
  (n.runningChanges++, n.onRunningChange());
}
function H(n, t) {
  try {
    n.ticks.emit(t);
  } catch (r) {
    i(r);
  }
}
export { Ggs, zgs, Lbe, vZl, nRe };
