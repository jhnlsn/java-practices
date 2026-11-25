// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { dhl } from "/$bunfs/root/chunk-3b216adx.js";
import {
  db,
  UWe,
  bbr,
  Tst,
  m1n,
  T_o,
  hBt,
} from "/$bunfs/root/chunk-p0t1g47r.js";
import { ao } from "/$bunfs/root/chunk-megeryme.js";
import * as o from "vm";
var p = `(() => {
    Object.defineProperty(Error, 'prepareStackTrace', {
      value: (err) => { const s = err.stack; return typeof s === 'string' ? s : '' },
      writable: false, configurable: false,
    });
    for (const g of ['ShadowRealm', 'WebAssembly', 'FinalizationRegistry',
                     'WeakRef', 'Atomics', 'SharedArrayBuffer',
                     'queueMicrotask',
                     // JSC debug/shell globals \u2014 present only if
                     // JSC_useDollarVM=1 or similar, but $vm is a full
                     // escape (createGlobalObject, addressOf, runScript).
                     '$vm', 'gc', 'edenGC', 'fullGC', 'print', 'readFile',
                     'Loader']) {
      delete globalThis[g];
    }
    // SES-style enable-property-override: convert common shadowed data props
    // to accessors whose setter defineProperty's onto the receiver. Otherwise
    // freezing makes them non-writable, and [[Set]] on an instance (e.g.
    // "this.name='X'" in an Error subclass ctor) throws in strict / no-ops in
    // sloppy \u2014 the TC39 "override mistake".
    function enableOverride(proto, key) {
      const d = Object.getOwnPropertyDescriptor(proto, key);
      if (!d || 'get' in d) return;
      const v = d.value;
      Object.defineProperty(proto, key, {
        get() { return v },
        set(nv) {
          if (this === proto) return;
          Object.defineProperty(this, key, { value: nv, writable: true, enumerable: true, configurable: true });
        },
        enumerable: d.enumerable, configurable: true,
      });
    }
    const errorCtors = [Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError, globalThis.SuppressedError].filter(Boolean);
    const errorProtos = errorCtors.map(C => C.prototype);
    for (const [proto, keys] of [
      // All Object.prototype data props \u2014 Object.assign({}, {propertyIsEnumerable:x})
      // and friends would otherwise throw post-freeze. Accessor props (__proto__,
      // __define/lookupGetter__) are skipped by the 'get' in d guard above.
      [Object.prototype, Object.getOwnPropertyNames(Object.prototype)],
      [Function.prototype, ['toString', 'constructor', 'name', 'length']],
      [Array.prototype, ['toString', 'constructor']],
      [Date.prototype, ['toString', 'toLocaleString', 'valueOf', 'constructor']],
      ...errorProtos.map(p => [p, ['name', 'message', 'toString', 'constructor']]),
    ]) for (const k of keys) enableOverride(proto, k);
    // Error subclasses each have their own .prototype; freezing only Error
    // leaves TypeError.prototype.then etc. writable. SuppressedError is
    // from the explicit-resource-management proposal (bun/JSC ship it).
    for (const C of [Promise, Object, Array, Function, globalThis.Iterator,
                     Map, Set, WeakMap, WeakSet,
                     String, Number, Boolean, Symbol, BigInt,
                     Date, RegExp, ArrayBuffer, DataView,
                     ...errorCtors,
                     typeof URL !== 'undefined' ? URL : undefined,
                    ].filter(Boolean)) {
      Object.freeze(C);
      Object.freeze(C.prototype);
    }
    // %TypedArray% (shared prototype of all typed arrays) + each concrete.
    for (const C of [Object.getPrototypeOf(Int8Array),
                     Int8Array, Uint8Array, Uint8ClampedArray,
                     Int16Array, Uint16Array, Int32Array, Uint32Array,
                     globalThis.Float16Array, Float32Array, Float64Array,
                     BigInt64Array, BigUint64Array].filter(Boolean)) {
      Object.freeze(C);
      Object.freeze(C.prototype);
    }
    // %AsyncFunction%, %GeneratorFunction%, %AsyncGeneratorFunction% and
    // their .prototype are not reachable as globals \u2014 walk from instances.
    for (const f of [async()=>{}, function*(){}, async function*(){}]) {
      Object.freeze(f.constructor);
      Object.freeze(f.constructor.prototype);
    }
    for (const C of [globalThis.DisposableStack, globalThis.AsyncDisposableStack,
                     globalThis.Intl].filter(Boolean)) {
      Object.freeze(C);
      if (C.prototype) Object.freeze(C.prototype);
    }
    // Namespace objects (no .prototype) \u2014 VM code could otherwise set
    // JSON.then/Math.then/Reflect.then and any host await on the namespace
    // object (or on a VM value that aliases it) becomes a thenable escape.
    // Proxy has no .prototype but freeze closes Proxy.revocable tampering.
    for (const ns of [JSON, Math, Reflect, Proxy]) Object.freeze(ns);
    Object.defineProperty(globalThis, 'then', {
      value: undefined, writable: false, configurable: false,
    });
    Object.defineProperty(globalThis, 'Error', {
      value: Error, writable: false, enumerable: false, configurable: false,
    });
    // Intl.* sub-constructors each have their own .prototype \u2014 freezing the
    // Intl namespace above does NOT freeze Intl.Collator.prototype etc.
    // Same own-property-.then escape shape as Promise.prototype.then if any
    // host code ever awaits an Intl.* instance.
    if (typeof Intl !== 'undefined') {
      for (const k of Object.getOwnPropertyNames(Intl)) {
        const C = Intl[k];
        if (typeof C === 'function') {
          Object.freeze(C);
          if (C.prototype) Object.freeze(C.prototype);
        }
      }
    }
    for (const it of [
      [][Symbol.iterator](),
      ''[Symbol.iterator](),
      new Map()[Symbol.iterator](),
      new Set()[Symbol.iterator](),
      'a'.matchAll(/a/g),
      // Iterator helpers (map/from) are stage-4 but guard for older runtimes.
      ...(typeof Iterator !== 'undefined' && Iterator.from ? [
        [].values().map(x=>x),
        // %WrapForValidIteratorPrototype% \u2014 Iterator.from(non-Iterator) wraps
        // via a distinct intrinsic prototype not reachable from any other path.
        Iterator.from({next:()=>({done:true})}),
      ] : []),
      (function*(){})(),
      (async function*(){})(),
      // %SegmentsPrototype% + %SegmentIteratorPrototype% \u2014 host for..of on a
      // VM Segments object would otherwise see a writable .then on the chain.
      ...(typeof Intl !== 'undefined' && Intl.Segmenter ? (s => [s, s[Symbol.iterator]()])(new Intl.Segmenter().segment('a')) : []),
    ]) {
      for (let p = Object.getPrototypeOf(it); p; p = Object.getPrototypeOf(p)) {
        Object.freeze(p);
      }
    }
    })()`,
  f = `(e => {
      let name = 'Error', message = '', stack = ''
      try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
      try {
        const v = e?.message
        if (typeof v === 'string') message = v
        else if (typeof e === 'string') message = e
        else if (typeof e === 'number' || typeof e === 'boolean' || typeof e === 'bigint') {
          const s = \`\${e}\`
          if (typeof s === 'string') message = s
        }
      } catch {}
      try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
      return { __proto__: null, name, message, stack }
    })`,
  y = `(e) => {
  let name = 'Error', message = '', stack
  try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
  try {
    const v = e?.message
    if (typeof v === 'string') message = v
    else if (typeof e === 'string') message = e
  } catch {}
  try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
  const toStr = () => name + ': ' + message
  _setProto(toStr, null)
  _freeze(toStr)
  return _freeze({
    __proto__: null,
    name,
    message,
    stack: stack === undefined ? name + ': ' + message : stack,
    toString: toStr,
  })
}`,
  m = `(() => {
      const _freeze = Object.freeze
      const _setProto = Object.setPrototypeOf
      const _getProto = Object.getPrototypeOf
      const _ObjectProto = Object.prototype
      const reseal = (e) => {
  let name = 'Error', message = '', stack
  try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
  try {
    const v = e?.message
    if (typeof v === 'string') message = v
    else if (typeof e === 'string') message = e
  } catch {}
  try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
  const toStr = () => name + ': ' + message
  _setProto(toStr, null)
  _freeze(toStr)
  return _freeze({
    __proto__: null,
    name,
    message,
    stack: stack === undefined ? name + ': ' + message : stack,
    toString: toStr,
  })
}
      // Prebuilt at build time (full stack headroom): the last-resort reason
      // when laundering itself throws at the stack ceiling. Throwing it
      // allocates nothing and calls nothing.
      const SENTINEL = reseal({
        name: 'Error',
        message: 'host call failed at the VM boundary (details unavailable)',
      })
      // true only for an object whose prototype chain reaches this realm's
      // Object.prototype within 64 hops (far beyond any real chain; the cap
      // stops a Proxy whose getPrototypeOf trap returns a fresh object each
      // hop from spinning this microtask forever). A null-terminated, foreign,
      // throwing or over-long chain is not this realm's.
      const ownRealm = e => {
        let p = e
        for (let i = 0; i < 64; i++) {
          p = _getProto(p)
          if (p === _ObjectProto) return true
          if (p === null) return false
        }
        return false
      }
      const launder = e => {
        if (e === null || (typeof e !== 'object' && typeof e !== 'function')) return e
        try { if (ownRealm(e)) return e } catch {}
        return reseal(e)
      }
      return (hostFn) => async (...a) => {
        try {
          return await hostFn(...a)
        } catch (e) {
          // No call or allocation between a failed launder and the throw.
          let reason = SENTINEL
          try { reason = launder(e) } catch {}
          throw reason
        }
      }
    })()`;
var h = o.runInContext,
  w = EvalError;
function ine(e, t) {
  let n = o.createContext(e, t),
    r;
  try {
    r = h("this", n);
  } catch (a) {
    if (!(a instanceof w)) throw a;
    r = void 0;
  }
  return (dhl(n, r), n);
}
var d = Symbol("compile with no import() hook"),
  b9e = Object.freeze({ importModuleDynamically: d });
function g(e) {
  let t = e?.importModuleDynamically;
  if (t === d) return;
  if (typeof t !== "function")
    throw TypeError(
      "The options argument of hardenVMIntrinsics and createVMIntakeWalkers must be either { importModuleDynamically: <function> } or COMPILE_WITHOUT_IMPORT_HOOK, which src/utils/vmHardening.ts exports",
    );
  return { importModuleDynamically: t };
}
function c1n(e, t) {
  if (t != null) return { timeout: t };
  return { timeout: e };
}
function MHe(e, t) {
  o.runInContext(p, e, g(t));
}
function k_o(e) {
  o.runInContext("'use strict'; delete Error.captureStackTrace", e);
}
function _br(e) {
  return o.runInContext("(async v => ({__proto__: null, v: await v}))", e);
}
function E_o(e) {
  return o.runInContext("((fn, ...args) => fn(...args))", e);
}
function Bwt(e) {
  return o.runInContext(f, e);
}
function u1n(
  e,
  { arrayLengthCap: t, protoKey: n } = {
    arrayLengthCap: db,
    protoKey: "left-out",
  },
) {
  return o.runInContext(
    `(() => {
      'use strict';
      ${l({ arrayLengthCap: t, isLeaving: !1, isListSeenFirst: !1, protoKey: n })}
      return copy
    })()`,
    e,
  );
}
function zgs(e) {
  return o.runInContext(
    `(() => {
      const _freeze = Object.freeze
      const _setProto = Object.setPrototypeOf
      const reseal = ${y}
      return (hostFn) => (...args) => {
        try {
          return hostFn(...args)
        } catch (e) {
          throw reseal(e)
        }
      }
    })()`,
    e,
  );
}
function v_o(e) {
  return o.runInContext(m, e);
}
function lhl(e, t) {
  return o.runInContext(
    `((onRejection) => {
      const _apply = Reflect.apply
      const _then = Promise.prototype.then
      const rejected = (e) => { try { onRejection(e) } catch {} }
      return (fn) => (...a) => {
        const p = _apply(fn, undefined, a)
        try { _apply(_then, p, [undefined, rejected]) } catch {}
        return p
      }
    })`,
    e,
  )(FWe(t));
}
function ybr(e, t = "Error", n) {
  let r = () => `${t}: ${e}`;
  return (
    Object.setPrototypeOf(r, null),
    Object.freeze(r),
    Object.freeze({
      __proto__: null,
      name: t,
      message: e,
      stack: n ?? `${t}: ${e}`,
      toString: r,
    })
  );
}
var c;
function k() {
  if (!c) {
    let e = ine(
      { __proto__: null },
      { codeGeneration: { strings: !1, wasm: !1 } },
    );
    (k_o(e),
      MHe(e, b9e),
      (c = o.runInContext(
        `(e => {
        // Independent try blocks \u2014 a throwing .name getter must not discard
        // an already-validated .message (and vice versa).
        let msg, name = 'Error', stack
        try {
          const m = e?.message
          msg = typeof m === 'string' ? m : typeof e === 'string' ? e : '<non-string error>'
        } catch { msg = '<unprintable thrown value>' }
        try {
          const n = e?.name
          if (typeof n === 'string') name = n
        } catch {}
        try {
          const s = e?.stack
          if (typeof s === 'string') stack = s
        } catch {}
        return { __proto__: null, msg, name, stack }
      })`,
        e,
      )));
  }
  return c;
}
function vst(e) {
  try {
    let t = k()(e);
    return {
      msg: typeof t.msg === "string" ? t.msg : "<unprintable thrown value>",
      name: typeof t.name === "string" ? t.name : "Error",
      stack: typeof t.stack === "string" ? t.stack : void 0,
    };
  } catch {
    return { msg: "<unprintable thrown value>", name: "Error" };
  }
}
function Wwt(e) {
  if (e == null || (typeof e !== "object" && typeof e !== "function"))
    return String(e);
  return `[${typeof e}]`;
}
function FWe(e) {
  let t = (...n) => {
    try {
      return e(...n);
    } catch (r) {
      let { msg: a, name: s, stack: i } = vst(r);
      throw ybr(a, s, i);
    }
  };
  return (Object.setPrototypeOf(t, null), t);
}
function Vgs(e) {
  let t = async (...n) => {
    try {
      return await e(...n);
    } catch (r) {
      let { msg: a, name: s, stack: i } = vst(r);
      throw ybr(a, s, i);
    }
  };
  return (Object.setPrototypeOf(t, null), t);
}
function b(e) {
  let t;
  try {
    t = e.length;
  } catch (n) {
    throw (
      u().lost(n),
      Error("unable to read array length across the workflow VM boundary")
    );
  }
  if (typeof t !== "number" || !Number.isSafeInteger(t))
    throw Error(
      "array length is not a safe integer across the workflow VM boundary",
    );
  if (t > db)
    throw Error(
      `array length ${t} exceeds the maximum of ${db} supported across the workflow VM boundary`,
    );
  return t;
}
function f1n(e) {
  return u().copy(e);
}
var u = ao(() =>
  o.runInThisContext(
    `(() => {
        'use strict';
        ${l({ arrayLengthCap: db, isLeaving: !0, isListSeenFirst: !0, protoKey: "left-out" })}
        return { __proto__: null, copy, lost }
      })()`,
    { filename: "primitivizeDeep" },
  ),
);
function Kgs(e) {
  if (e === null || typeof e !== "object") return [];
  let t = b(e),
    n = [];
  for (let r = 0; r < t; r++)
    try {
      n[r] = e[r];
    } catch (a) {
      (u().lost(a), (n[r] = void 0));
    }
  return n;
}
function qgs(e) {
  return o.runInContext(
    `((S, JS) => ({
      vmToStr: v => { try { return S(v) } catch { return '<unprintable>' } },
      vmStringify: v => JS(v),
      vmOwnString: (o, k) => {
        try { const v = o == null ? undefined : o[k]; return typeof v === 'string' ? v : undefined }
        catch { return undefined }
      },
    }))(String, JSON.stringify)`,
    e,
  );
}
function p1n(e, t) {
  return o.runInContext(
    `(() => {
      'use strict';
      ${l({ arrayLengthCap: db, isLeaving: !0, isListSeenFirst: !0, protoKey: "left-out" })}
      return { __proto__: null,
        sanitize: copy,
        snapshot: (v) => {
          if (v === null || typeof v !== 'object') return []
          const len = checkedLength(v)
          const out = []
          for (let i = 0; i < len; i++) {
            try { out[i] = v[i] } catch (e) { lost(e); out[i] = undefined }
          }
          return out
        },
        getProp: (o, k) => {
          try { return o === null || o === undefined ? undefined : o[k] } catch (e) { lost(e); return undefined }
        },
      }
    })()`,
    e,
    g(t),
  );
}
function Sbr(e) {
  if (typeof e === "string") return e;
  if (e === null || (typeof e !== "object" && typeof e !== "function"))
    return String(e);
  return typeof e === "function" ? "[function]" : "[object]";
}
var v = `
      const _capSet = new _WeakSet()
      function capErr(msg) {
        const e = new _Error(msg)
        _capSet.add(e)
        return e
      }
      function isCap(e) {
        try { return _capSet.has(e) } catch { return false }
      }`,
  _ = `
      function isStackEnd(e) {
        if (_isError === null || !_isError(e)) return false
        const said = _ownDescriptor(e, 'message')
        return said !== undefined && (said.value === '${hBt[0]}' || said.value === '${hBt[1]}')
      }
      function lost(e) {
        if (isCap(e)) throw e
        if (isStackEnd(e)) throw capErr('${T_o}')
      }`;
function l({
  arrayLengthCap: e,
  isLeaving: t,
  isListSeenFirst: n,
  protoKey: r,
}) {
  let a =
      e === void 0
        ? ""
        : `if (len > ${e}) {
          throw capErr('array length ' + len + ' exceeds the maximum of ${e} supported across the workflow VM boundary')
        }`,
    s = "const out = []; seen.set(v, out)";
  return `
      const _WeakMap = WeakMap, _WeakSet = WeakSet, _isArray = Array.isArray,
            _keys = Object.keys, _defineProperty = Object.defineProperty,
            _Error = Error, _isSafeInteger = Number.isSafeInteger,
            _isError = typeof Error.isError === 'function' ? Error.isError : null,
            _ownDescriptor = Object.getOwnPropertyDescriptor
      ${v}
      ${_}
      function checkedLength(v) {
        let len
        try { len = v.length } catch (e) {
          lost(e)
          throw new _Error('unable to read array length across the workflow VM boundary')
        }
        if (typeof len !== 'number' || !_isSafeInteger(len)) {
          throw capErr('array length is not a safe integer across the workflow VM boundary')
        }
        ${a}
        return len
      }
      const copy = (rootVal) => {
        if (typeof rootVal === 'function') return undefined
        if (rootVal === null || typeof rootVal !== 'object') return rootVal
        const seen = new _WeakMap()
        let childKeys = null, childLength = 0
        function make(v, depth) {
          if (depth > ${t ? bbr : UWe}) {
            throw capErr('${t ? m1n : Tst}')
          }
          if (_isArray(v)) {
            ${n ? "const out = []; seen.set(v, out)" : ""}
            const len = checkedLength(v)
            ${n ? "" : "const out = []; seen.set(v, out)"}
            childKeys = null; childLength = len
            return out
          }
          const out = {}; seen.set(v, out)
          childLength = 0
          let ks; try { ks = _keys(v) } catch (e) { lost(e); return out }
          childKeys = ks; childLength = ks.length
          return out
        }
        const root = make(rootVal, 1)
        let src = rootVal, out = root, keys = childKeys, len = childLength, i = 0, depth = 1
        let own = null, below = null
        for (;;) {
          if (i >= len) {
            if (below === null) return root
            own = below; below = own.below
            src = own.src; out = own.out; keys = own.keys; len = own.len; i = own.i; depth = own.depth
            continue
          }
          const at = i++
          let down = null, made
          if (keys === null) {
            try {
              const vi = src[at]
              if (vi === null || typeof vi !== 'object') { out[at] = typeof vi === 'function' ? undefined : vi; continue }
              const hit = seen.get(vi)
              if (hit !== undefined) { out[at] = hit; continue }
              made = out[at] = make(vi, depth + 1)
              down = vi
            } catch (e) { lost(e); out[at] = undefined; continue }
          } else {
            const k = keys[at]
            ${r === "carried" ? "" : "if (k === '__proto__') continue"}
            try {
              const vk = src[k]
              if (typeof vk === 'function') continue
              made = vk
              if (vk !== null && typeof vk === 'object') {
                const hit = seen.get(vk)
                if (hit !== undefined) made = hit
                else { made = make(vk, depth + 1); down = vk }
              }
              _defineProperty(out, k, { value: made, writable: true, enumerable: true, configurable: true })
            } catch (e) { lost(e); continue }
          }
          if (down === null || childLength === 0) continue
          if (own === null) own = { src, out, keys, len, i, depth, below }
          else own.i = i
          below = own; own = null
          src = down; out = made; keys = childKeys; len = childLength; i = 0; depth = depth + 1
        }
      }`;
}
export {
  ine,
  b9e,
  c1n,
  MHe,
  k_o,
  _br,
  E_o,
  Bwt,
  u1n,
  zgs,
  v_o,
  lhl,
  ybr,
  vst,
  Wwt,
  FWe,
  Vgs,
  f1n,
  Kgs,
  qgs,
  p1n,
  Sbr,
};
