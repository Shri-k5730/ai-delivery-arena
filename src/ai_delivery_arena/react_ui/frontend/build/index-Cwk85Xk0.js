var Ss = { exports: {} }, En = {};
var Qo;
function M1() {
  if (Qo) return En;
  Qo = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.fragment");
  function x(d, A, O) {
    var Z = null;
    if (O !== void 0 && (Z = "" + O), A.key !== void 0 && (Z = "" + A.key), "key" in A) {
      O = {};
      for (var H in A)
        H !== "key" && (O[H] = A[H]);
    } else O = A;
    return A = O.ref, {
      $$typeof: r,
      type: d,
      key: Z,
      ref: A !== void 0 ? A : null,
      props: O
    };
  }
  return En.Fragment = p, En.jsx = x, En.jsxs = x, En;
}
var Zo;
function O1() {
  return Zo || (Zo = 1, Ss.exports = M1()), Ss.exports;
}
var u = O1(), zs = { exports: {} }, L = {};
var Lo;
function D1() {
  if (Lo) return L;
  Lo = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), il = Symbol.iterator;
  function dl(h) {
    return h === null || typeof h != "object" ? null : (h = il && h[il] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var _l = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, Ol = {};
  function Bl(h, E, C) {
    this.props = h, this.context = E, this.refs = Ol, this.updater = C || _l;
  }
  Bl.prototype.isReactComponent = {}, Bl.prototype.setState = function(h, E) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, E, "setState");
  }, Bl.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function _e() {
  }
  _e.prototype = Bl.prototype;
  function El(h, E, C) {
    this.props = h, this.context = E, this.refs = Ol, this.updater = C || _l;
  }
  var wl = El.prototype = new _e();
  wl.constructor = El, Q(wl, Bl.prototype), wl.isPureReactComponent = !0;
  var ae = Array.isArray;
  function Hl() {
  }
  var W = { H: null, A: null, T: null, S: null }, bl = Object.prototype.hasOwnProperty;
  function me(h, E, C) {
    var q = C.ref;
    return {
      $$typeof: r,
      type: h,
      key: E,
      ref: q !== void 0 ? q : null,
      props: C
    };
  }
  function T(h, E) {
    return me(h.type, E, h.props);
  }
  function gl(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function Sl(h) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(C) {
      return E[C];
    });
  }
  var At = /\/+/g;
  function qe(h, E) {
    return typeof h == "object" && h !== null && h.key != null ? Sl("" + h.key) : E.toString(36);
  }
  function Ee(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Hl, Hl) : (h.status = "pending", h.then(
          function(E) {
            h.status === "pending" && (h.status = "fulfilled", h.value = E);
          },
          function(E) {
            h.status === "pending" && (h.status = "rejected", h.reason = E);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function S(h, E, C, q, K) {
    var $ = typeof h;
    ($ === "undefined" || $ === "boolean") && (h = null);
    var cl = !1;
    if (h === null) cl = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          cl = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case r:
            case p:
              cl = !0;
              break;
            case V:
              return cl = h._init, S(
                cl(h._payload),
                E,
                C,
                q,
                K
              );
          }
      }
    if (cl)
      return K = K(h), cl = q === "" ? "." + qe(h, 0) : q, ae(K) ? (C = "", cl != null && (C = cl.replace(At, "$&/") + "/"), S(K, E, C, "", function(Ca) {
        return Ca;
      })) : K != null && (gl(K) && (K = T(
        K,
        C + (K.key == null || h && h.key === K.key ? "" : ("" + K.key).replace(
          At,
          "$&/"
        ) + "/") + cl
      )), E.push(K)), 1;
    cl = 0;
    var Jl = q === "" ? "." : q + ":";
    if (ae(h))
      for (var Al = 0; Al < h.length; Al++)
        q = h[Al], $ = Jl + qe(q, Al), cl += S(
          q,
          E,
          C,
          $,
          K
        );
    else if (Al = dl(h), typeof Al == "function")
      for (h = Al.call(h), Al = 0; !(q = h.next()).done; )
        q = q.value, $ = Jl + qe(q, Al++), cl += S(
          q,
          E,
          C,
          $,
          K
        );
    else if ($ === "object") {
      if (typeof h.then == "function")
        return S(
          Ee(h),
          E,
          C,
          q,
          K
        );
      throw E = String(h), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return cl;
  }
  function D(h, E, C) {
    if (h == null) return h;
    var q = [], K = 0;
    return S(h, q, "", "", function($) {
      return E.call(C, $, K++);
    }), q;
  }
  function X(h) {
    if (h._status === -1) {
      var E = h._result;
      E = E(), E.then(
        function(C) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = C);
        },
        function(C) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = C);
        }
      ), h._status === -1 && (h._status = 0, h._result = E);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, vl = {
    map: D,
    forEach: function(h, E, C) {
      D(
        h,
        function() {
          E.apply(this, arguments);
        },
        C
      );
    },
    count: function(h) {
      var E = 0;
      return D(h, function() {
        E++;
      }), E;
    },
    toArray: function(h) {
      return D(h, function(E) {
        return E;
      }) || [];
    },
    only: function(h) {
      if (!gl(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return L.Activity = U, L.Children = vl, L.Component = Bl, L.Fragment = x, L.Profiler = A, L.PureComponent = El, L.StrictMode = d, L.Suspense = M, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, L.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return W.H.useMemoCache(h);
    }
  }, L.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(h, E, C) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var q = Q({}, h.props), K = h.key;
    if (E != null)
      for ($ in E.key !== void 0 && (K = "" + E.key), E)
        !bl.call(E, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && E.ref === void 0 || (q[$] = E[$]);
    var $ = arguments.length - 2;
    if ($ === 1) q.children = C;
    else if (1 < $) {
      for (var cl = Array($), Jl = 0; Jl < $; Jl++)
        cl[Jl] = arguments[Jl + 2];
      q.children = cl;
    }
    return me(h.type, K, q);
  }, L.createContext = function(h) {
    return h = {
      $$typeof: Z,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: O,
      _context: h
    }, h;
  }, L.createElement = function(h, E, C) {
    var q, K = {}, $ = null;
    if (E != null)
      for (q in E.key !== void 0 && ($ = "" + E.key), E)
        bl.call(E, q) && q !== "key" && q !== "__self" && q !== "__source" && (K[q] = E[q]);
    var cl = arguments.length - 2;
    if (cl === 1) K.children = C;
    else if (1 < cl) {
      for (var Jl = Array(cl), Al = 0; Al < cl; Al++)
        Jl[Al] = arguments[Al + 2];
      K.children = Jl;
    }
    if (h && h.defaultProps)
      for (q in cl = h.defaultProps, cl)
        K[q] === void 0 && (K[q] = cl[q]);
    return me(h, $, K);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(h) {
    return { $$typeof: H, render: h };
  }, L.isValidElement = gl, L.lazy = function(h) {
    return {
      $$typeof: V,
      _payload: { _status: -1, _result: h },
      _init: X
    };
  }, L.memo = function(h, E) {
    return {
      $$typeof: z,
      type: h,
      compare: E === void 0 ? null : E
    };
  }, L.startTransition = function(h) {
    var E = W.T, C = {};
    W.T = C;
    try {
      var q = h(), K = W.S;
      K !== null && K(C, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(Hl, rl);
    } catch ($) {
      rl($);
    } finally {
      E !== null && C.types !== null && (E.types = C.types), W.T = E;
    }
  }, L.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, L.use = function(h) {
    return W.H.use(h);
  }, L.useActionState = function(h, E, C) {
    return W.H.useActionState(h, E, C);
  }, L.useCallback = function(h, E) {
    return W.H.useCallback(h, E);
  }, L.useContext = function(h) {
    return W.H.useContext(h);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(h, E) {
    return W.H.useDeferredValue(h, E);
  }, L.useEffect = function(h, E) {
    return W.H.useEffect(h, E);
  }, L.useEffectEvent = function(h) {
    return W.H.useEffectEvent(h);
  }, L.useId = function() {
    return W.H.useId();
  }, L.useImperativeHandle = function(h, E, C) {
    return W.H.useImperativeHandle(h, E, C);
  }, L.useInsertionEffect = function(h, E) {
    return W.H.useInsertionEffect(h, E);
  }, L.useLayoutEffect = function(h, E) {
    return W.H.useLayoutEffect(h, E);
  }, L.useMemo = function(h, E) {
    return W.H.useMemo(h, E);
  }, L.useOptimistic = function(h, E) {
    return W.H.useOptimistic(h, E);
  }, L.useReducer = function(h, E, C) {
    return W.H.useReducer(h, E, C);
  }, L.useRef = function(h) {
    return W.H.useRef(h);
  }, L.useState = function(h) {
    return W.H.useState(h);
  }, L.useSyncExternalStore = function(h, E, C) {
    return W.H.useSyncExternalStore(
      h,
      E,
      C
    );
  }, L.useTransition = function() {
    return W.H.useTransition();
  }, L.version = "19.2.8", L;
}
var Vo;
function Os() {
  return Vo || (Vo = 1, zs.exports = D1()), zs.exports;
}
var J = Os(), Ns = { exports: {} }, An = {}, _s = { exports: {} }, Es = {};
var Ko;
function C1() {
  return Ko || (Ko = 1, (function(r) {
    function p(S, D) {
      var X = S.length;
      S.push(D);
      l: for (; 0 < X; ) {
        var rl = X - 1 >>> 1, vl = S[rl];
        if (0 < A(vl, D))
          S[rl] = D, S[X] = vl, X = rl;
        else break l;
      }
    }
    function x(S) {
      return S.length === 0 ? null : S[0];
    }
    function d(S) {
      if (S.length === 0) return null;
      var D = S[0], X = S.pop();
      if (X !== D) {
        S[0] = X;
        l: for (var rl = 0, vl = S.length, h = vl >>> 1; rl < h; ) {
          var E = 2 * (rl + 1) - 1, C = S[E], q = E + 1, K = S[q];
          if (0 > A(C, X))
            q < vl && 0 > A(K, C) ? (S[rl] = K, S[q] = X, rl = q) : (S[rl] = C, S[E] = X, rl = E);
          else if (q < vl && 0 > A(K, X))
            S[rl] = K, S[q] = X, rl = q;
          else break l;
        }
      }
      return D;
    }
    function A(S, D) {
      var X = S.sortIndex - D.sortIndex;
      return X !== 0 ? X : S.id - D.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      r.unstable_now = function() {
        return O.now();
      };
    } else {
      var Z = Date, H = Z.now();
      r.unstable_now = function() {
        return Z.now() - H;
      };
    }
    var M = [], z = [], V = 1, U = null, il = 3, dl = !1, _l = !1, Q = !1, Ol = !1, Bl = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, El = typeof setImmediate < "u" ? setImmediate : null;
    function wl(S) {
      for (var D = x(z); D !== null; ) {
        if (D.callback === null) d(z);
        else if (D.startTime <= S)
          d(z), D.sortIndex = D.expirationTime, p(M, D);
        else break;
        D = x(z);
      }
    }
    function ae(S) {
      if (Q = !1, wl(S), !_l)
        if (x(M) !== null)
          _l = !0, Hl || (Hl = !0, Sl());
        else {
          var D = x(z);
          D !== null && Ee(ae, D.startTime - S);
        }
    }
    var Hl = !1, W = -1, bl = 5, me = -1;
    function T() {
      return Ol ? !0 : !(r.unstable_now() - me < bl);
    }
    function gl() {
      if (Ol = !1, Hl) {
        var S = r.unstable_now();
        me = S;
        var D = !0;
        try {
          l: {
            _l = !1, Q && (Q = !1, _e(W), W = -1), dl = !0;
            var X = il;
            try {
              e: {
                for (wl(S), U = x(M); U !== null && !(U.expirationTime > S && T()); ) {
                  var rl = U.callback;
                  if (typeof rl == "function") {
                    U.callback = null, il = U.priorityLevel;
                    var vl = rl(
                      U.expirationTime <= S
                    );
                    if (S = r.unstable_now(), typeof vl == "function") {
                      U.callback = vl, wl(S), D = !0;
                      break e;
                    }
                    U === x(M) && d(M), wl(S);
                  } else d(M);
                  U = x(M);
                }
                if (U !== null) D = !0;
                else {
                  var h = x(z);
                  h !== null && Ee(
                    ae,
                    h.startTime - S
                  ), D = !1;
                }
              }
              break l;
            } finally {
              U = null, il = X, dl = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Sl() : Hl = !1;
        }
      }
    }
    var Sl;
    if (typeof El == "function")
      Sl = function() {
        El(gl);
      };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), qe = At.port2;
      At.port1.onmessage = gl, Sl = function() {
        qe.postMessage(null);
      };
    } else
      Sl = function() {
        Bl(gl, 0);
      };
    function Ee(S, D) {
      W = Bl(function() {
        S(r.unstable_now());
      }, D);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, r.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : bl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return il;
    }, r.unstable_next = function(S) {
      switch (il) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = il;
      }
      var X = il;
      il = D;
      try {
        return S();
      } finally {
        il = X;
      }
    }, r.unstable_requestPaint = function() {
      Ol = !0;
    }, r.unstable_runWithPriority = function(S, D) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var X = il;
      il = S;
      try {
        return D();
      } finally {
        il = X;
      }
    }, r.unstable_scheduleCallback = function(S, D, X) {
      var rl = r.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? rl + X : rl) : X = rl, S) {
        case 1:
          var vl = -1;
          break;
        case 2:
          vl = 250;
          break;
        case 5:
          vl = 1073741823;
          break;
        case 4:
          vl = 1e4;
          break;
        default:
          vl = 5e3;
      }
      return vl = X + vl, S = {
        id: V++,
        callback: D,
        priorityLevel: S,
        startTime: X,
        expirationTime: vl,
        sortIndex: -1
      }, X > rl ? (S.sortIndex = X, p(z, S), x(M) === null && S === x(z) && (Q ? (_e(W), W = -1) : Q = !0, Ee(ae, X - rl))) : (S.sortIndex = vl, p(M, S), _l || dl || (_l = !0, Hl || (Hl = !0, Sl()))), S;
    }, r.unstable_shouldYield = T, r.unstable_wrapCallback = function(S) {
      var D = il;
      return function() {
        var X = il;
        il = D;
        try {
          return S.apply(this, arguments);
        } finally {
          il = X;
        }
      };
    };
  })(Es)), Es;
}
var wo;
function U1() {
  return wo || (wo = 1, _s.exports = C1()), _s.exports;
}
var As = { exports: {} }, Kl = {};
var Jo;
function R1() {
  if (Jo) return Kl;
  Jo = 1;
  var r = Os();
  function p(M) {
    var z = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++)
        z += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + M + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function x() {
  }
  var d = {
    d: {
      f: x,
      r: function() {
        throw Error(p(522));
      },
      D: x,
      C: x,
      L: x,
      m: x,
      X: x,
      S: x,
      M: x
    },
    p: 0,
    findDOMNode: null
  }, A = /* @__PURE__ */ Symbol.for("react.portal");
  function O(M, z, V) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: U == null ? null : "" + U,
      children: M,
      containerInfo: z,
      implementation: V
    };
  }
  var Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(M, z) {
    if (M === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Kl.createPortal = function(M, z) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(p(299));
    return O(M, z, null, V);
  }, Kl.flushSync = function(M) {
    var z = Z.T, V = d.p;
    try {
      if (Z.T = null, d.p = 2, M) return M();
    } finally {
      Z.T = z, d.p = V, d.d.f();
    }
  }, Kl.preconnect = function(M, z) {
    typeof M == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, d.d.C(M, z));
  }, Kl.prefetchDNS = function(M) {
    typeof M == "string" && d.d.D(M);
  }, Kl.preinit = function(M, z) {
    if (typeof M == "string" && z && typeof z.as == "string") {
      var V = z.as, U = H(V, z.crossOrigin), il = typeof z.integrity == "string" ? z.integrity : void 0, dl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      V === "style" ? d.d.S(
        M,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: U,
          integrity: il,
          fetchPriority: dl
        }
      ) : V === "script" && d.d.X(M, {
        crossOrigin: U,
        integrity: il,
        fetchPriority: dl,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(M, z) {
    if (typeof M == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var V = H(
            z.as,
            z.crossOrigin
          );
          d.d.M(M, {
            crossOrigin: V,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && d.d.M(M);
  }, Kl.preload = function(M, z) {
    if (typeof M == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var V = z.as, U = H(V, z.crossOrigin);
      d.d.L(M, V, {
        crossOrigin: U,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, Kl.preloadModule = function(M, z) {
    if (typeof M == "string")
      if (z) {
        var V = H(z.as, z.crossOrigin);
        d.d.m(M, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: V,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else d.d.m(M);
  }, Kl.requestFormReset = function(M) {
    d.d.r(M);
  }, Kl.unstable_batchedUpdates = function(M, z) {
    return M(z);
  }, Kl.useFormState = function(M, z, V) {
    return Z.H.useFormState(M, z, V);
  }, Kl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Kl.version = "19.2.8", Kl;
}
var ko;
function H1() {
  if (ko) return As.exports;
  ko = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (p) {
        console.error(p);
      }
  }
  return r(), As.exports = R1(), As.exports;
}
var Wo;
function q1() {
  if (Wo) return An;
  Wo = 1;
  var r = U1(), p = Os(), x = H1();
  function d(l) {
    var e = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function O(l) {
    var e = l, t = l;
    if (l.alternate) for (; e.return; ) e = e.return;
    else {
      l = e;
      do
        e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return;
      while (l);
    }
    return e.tag === 3 ? t : null;
  }
  function Z(l) {
    if (l.tag === 13) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (l.tag === 31) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function M(l) {
    if (O(l) !== l)
      throw Error(d(188));
  }
  function z(l) {
    var e = l.alternate;
    if (!e) {
      if (e = O(l), e === null) throw Error(d(188));
      return e !== l ? null : l;
    }
    for (var t = l, a = e; ; ) {
      var n = t.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          t = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === t) return M(n), l;
          if (i === a) return M(n), e;
          i = i.sibling;
        }
        throw Error(d(188));
      }
      if (t.return !== a.return) t = n, a = i;
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === t) {
            c = !0, t = n, a = i;
            break;
          }
          if (s === a) {
            c = !0, a = n, t = i;
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = i.child; s; ) {
            if (s === t) {
              c = !0, t = i, a = n;
              break;
            }
            if (s === a) {
              c = !0, a = i, t = n;
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(d(189));
        }
      }
      if (t.alternate !== a) throw Error(d(190));
    }
    if (t.tag !== 3) throw Error(d(188));
    return t.stateNode.current === t ? l : e;
  }
  function V(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l;
    for (l = l.child; l !== null; ) {
      if (e = V(l), e !== null) return e;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, il = /* @__PURE__ */ Symbol.for("react.element"), dl = /* @__PURE__ */ Symbol.for("react.transitional.element"), _l = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), Ol = /* @__PURE__ */ Symbol.for("react.strict_mode"), Bl = /* @__PURE__ */ Symbol.for("react.profiler"), _e = /* @__PURE__ */ Symbol.for("react.consumer"), El = /* @__PURE__ */ Symbol.for("react.context"), wl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), Hl = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), bl = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), T = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), gl = Symbol.iterator;
  function Sl(l) {
    return l === null || typeof l != "object" ? null : (l = gl && l[gl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var At = /* @__PURE__ */ Symbol.for("react.client.reference");
  function qe(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === At ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Q:
        return "Fragment";
      case Bl:
        return "Profiler";
      case Ol:
        return "StrictMode";
      case ae:
        return "Suspense";
      case Hl:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case _l:
          return "Portal";
        case El:
          return l.displayName || "Context";
        case _e:
          return (l._context.displayName || "Context") + ".Consumer";
        case wl:
          var e = l.render;
          return l = l.displayName, l || (l = e.displayName || e.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case W:
          return e = l.displayName || null, e !== null ? e : qe(l.type) || "Memo";
        case bl:
          e = l._payload, l = l._init;
          try {
            return qe(l(e));
          } catch {
          }
      }
    return null;
  }
  var Ee = Array.isArray, S = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rl = [], vl = -1;
  function h(l) {
    return { current: l };
  }
  function E(l) {
    0 > vl || (l.current = rl[vl], rl[vl] = null, vl--);
  }
  function C(l, e) {
    vl++, rl[vl] = l.current, l.current = e;
  }
  var q = h(null), K = h(null), $ = h(null), cl = h(null);
  function Jl(l, e) {
    switch (C($, e), C(K, l), C(q, null), e.nodeType) {
      case 9:
      case 11:
        l = (l = e.documentElement) && (l = l.namespaceURI) ? fo(l) : 0;
        break;
      default:
        if (l = e.tagName, e = e.namespaceURI)
          e = fo(e), l = ro(e, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    E(q), C(q, l);
  }
  function Al() {
    E(q), E(K), E($);
  }
  function Ca(l) {
    l.memoizedState !== null && C(cl, l);
    var e = q.current, t = ro(e, l.type);
    e !== t && (C(K, l), C(q, t));
  }
  function Cn(l) {
    K.current === l && (E(q), E(K)), cl.current === l && (E(cl), Sn._currentValue = X);
  }
  var nu, Ys;
  function Tt(l) {
    if (nu === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        nu = e && e[1] || "", Ys = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + nu + l + Ys;
  }
  var iu = !1;
  function uu(l, e) {
    if (!l || iu) return "";
    iu = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (j) {
                  var g = j;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (j) {
                  g = j;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                g = j;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (j) {
            if (j && g && typeof j.stack == "string")
              return [j.stack, g.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), c = i[0], s = i[1];
      if (c && s) {
        var f = c.split(`
`), y = s.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === f.length || n === y.length)
          for (a = f.length - 1, n = y.length - 1; 1 <= a && 0 <= n && f[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || f[a] !== y[n]) {
                  var b = `
` + f[a].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? Tt(t) : "";
  }
  function uh(l, e) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(l.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return l.child !== e && e !== null ? Tt("Suspense Fallback") : Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return uu(l.type, !1);
      case 11:
        return uu(l.type.render, !1);
      case 1:
        return uu(l.type, !0);
      case 31:
        return Tt("Activity");
      default:
        return "";
    }
  }
  function Gs(l) {
    try {
      var e = "", t = null;
      do
        e += uh(l, t), t = l, l = l.return;
      while (l);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var cu = Object.prototype.hasOwnProperty, su = r.unstable_scheduleCallback, fu = r.unstable_cancelCallback, ch = r.unstable_shouldYield, sh = r.unstable_requestPaint, ne = r.unstable_now, fh = r.unstable_getCurrentPriorityLevel, Xs = r.unstable_ImmediatePriority, Qs = r.unstable_UserBlockingPriority, Un = r.unstable_NormalPriority, dh = r.unstable_LowPriority, Zs = r.unstable_IdlePriority, rh = r.log, oh = r.unstable_setDisableYieldValue, Ua = null, ie = null;
  function tt(l) {
    if (typeof rh == "function" && oh(l), ie && typeof ie.setStrictMode == "function")
      try {
        ie.setStrictMode(Ua, l);
      } catch {
      }
  }
  var ue = Math.clz32 ? Math.clz32 : vh, hh = Math.log, mh = Math.LN2;
  function vh(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (hh(l) / mh | 0) | 0;
  }
  var Rn = 256, Hn = 262144, qn = 4194304;
  function Mt(l) {
    var e = l & 42;
    if (e !== 0) return e;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Bn(l, e, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~i, a !== 0 ? n = Mt(a) : (c &= s, c !== 0 ? n = Mt(c) : t || (t = s & ~l, t !== 0 && (n = Mt(t))))) : (s = a & ~i, s !== 0 ? n = Mt(s) : c !== 0 ? n = Mt(c) : t || (t = a & ~l, t !== 0 && (n = Mt(t)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, t = e & -e, i >= t || i === 32 && (t & 4194048) !== 0) ? e : n;
  }
  function Ra(l, e) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0;
  }
  function yh(l, e) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ls() {
    var l = qn;
    return qn <<= 1, (qn & 62914560) === 0 && (qn = 4194304), l;
  }
  function du(l) {
    for (var e = [], t = 0; 31 > t; t++) e.push(l);
    return e;
  }
  function Ha(l, e) {
    l.pendingLanes |= e, e !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function gh(l, e, t, a, n, i) {
    var c = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var s = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var b = 31 - ue(t), _ = 1 << b;
      s[b] = 0, f[b] = -1;
      var g = y[b];
      if (g !== null)
        for (y[b] = null, b = 0; b < g.length; b++) {
          var j = g[b];
          j !== null && (j.lane &= -536870913);
        }
      t &= ~_;
    }
    a !== 0 && Vs(l, a, 0), i !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= i & ~(c & ~e));
  }
  function Vs(l, e, t) {
    l.pendingLanes |= e, l.suspendedLanes &= ~e;
    var a = 31 - ue(e);
    l.entangledLanes |= e, l.entanglements[a] = l.entanglements[a] | 1073741824 | t & 261930;
  }
  function Ks(l, e) {
    var t = l.entangledLanes |= e;
    for (l = l.entanglements; t; ) {
      var a = 31 - ue(t), n = 1 << a;
      n & e | l[a] & e && (l[a] |= e), t &= ~n;
    }
  }
  function ws(l, e) {
    var t = e & -e;
    return t = (t & 42) !== 0 ? 1 : ru(t), (t & (l.suspendedLanes | e)) !== 0 ? 0 : t;
  }
  function ru(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ou(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Js() {
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ro(l.type));
  }
  function ks(l, e) {
    var t = D.p;
    try {
      return D.p = l, e();
    } finally {
      D.p = t;
    }
  }
  var at = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + at, $l = "__reactProps$" + at, Jt = "__reactContainer$" + at, hu = "__reactEvents$" + at, xh = "__reactListeners$" + at, jh = "__reactHandles$" + at, Ws = "__reactResources$" + at, qa = "__reactMarker$" + at;
  function mu(l) {
    delete l[Xl], delete l[$l], delete l[hu], delete l[xh], delete l[jh];
  }
  function kt(l) {
    var e = l[Xl];
    if (e) return e;
    for (var t = l.parentNode; t; ) {
      if (e = t[Jt] || t[Xl]) {
        if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
          for (l = xo(l); l !== null; ) {
            if (t = l[Xl]) return t;
            l = xo(l);
          }
        return e;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function Wt(l) {
    if (l = l[Xl] || l[Jt]) {
      var e = l.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return l;
    }
    return null;
  }
  function Ba(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
    throw Error(d(33));
  }
  function $t(l) {
    var e = l[Ws];
    return e || (e = l[Ws] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Yl(l) {
    l[qa] = !0;
  }
  var $s = /* @__PURE__ */ new Set(), Fs = {};
  function Ot(l, e) {
    Ft(l, e), Ft(l + "Capture", e);
  }
  function Ft(l, e) {
    for (Fs[l] = e, l = 0; l < e.length; l++)
      $s.add(e[l]);
  }
  var ph = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Is = {}, Ps = {};
  function bh(l) {
    return cu.call(Ps, l) ? !0 : cu.call(Is, l) ? !1 : ph.test(l) ? Ps[l] = !0 : (Is[l] = !0, !1);
  }
  function Yn(l, e, t) {
    if (bh(e))
      if (t === null) l.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(e);
              return;
            }
        }
        l.setAttribute(e, "" + t);
      }
  }
  function Gn(l, e, t) {
    if (t === null) l.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttribute(e, "" + t);
    }
  }
  function Be(l, e, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(e, t, "" + a);
    }
  }
  function ve(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function lf(l) {
    var e = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Sh(l, e, t) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      e
    );
    if (!l.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(l, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          t = "" + c, i.call(this, c);
        }
      }), Object.defineProperty(l, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c) {
          t = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[e];
        }
      };
    }
  }
  function vu(l) {
    if (!l._valueTracker) {
      var e = lf(l) ? "checked" : "value";
      l._valueTracker = Sh(
        l,
        e,
        "" + l[e]
      );
    }
  }
  function ef(l) {
    if (!l) return !1;
    var e = l._valueTracker;
    if (!e) return !0;
    var t = e.getValue(), a = "";
    return l && (a = lf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== t ? (e.setValue(l), !0) : !1;
  }
  function Xn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var zh = /[\n"\\]/g;
  function ye(l) {
    return l.replace(
      zh,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yu(l, e, t, a, n, i, c, s) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && l.value === "" || l.value != e) && (l.value = "" + ve(e)) : l.value !== "" + ve(e) && (l.value = "" + ve(e)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), e != null ? gu(l, c, ve(e)) : t != null ? gu(l, c, ve(t)) : a != null && l.removeAttribute("value"), n == null && i != null && (l.defaultChecked = !!i), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? l.name = "" + ve(s) : l.removeAttribute("name");
  }
  function tf(l, e, t, a, n, i, c, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.type = i), e != null || t != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        vu(l);
        return;
      }
      t = t != null ? "" + ve(t) : "", e = e != null ? "" + ve(e) : t, s || e === l.value || (l.value = e), l.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = s ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), vu(l);
  }
  function gu(l, e, t) {
    e === "number" && Xn(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function It(l, e, t, a) {
    if (l = l.options, e) {
      e = {};
      for (var n = 0; n < t.length; n++)
        e["$" + t[n]] = !0;
      for (t = 0; t < l.length; t++)
        n = e.hasOwnProperty("$" + l[t].value), l[t].selected !== n && (l[t].selected = n), n && a && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + ve(t), e = null, n = 0; n < l.length; n++) {
        if (l[n].value === t) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        e !== null || l[n].disabled || (e = l[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function af(l, e, t) {
    if (e != null && (e = "" + ve(e), e !== l.value && (l.value = e), t == null)) {
      l.defaultValue !== e && (l.defaultValue = e);
      return;
    }
    l.defaultValue = t != null ? "" + ve(t) : "";
  }
  function nf(l, e, t, a) {
    if (e == null) {
      if (a != null) {
        if (t != null) throw Error(d(92));
        if (Ee(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), e = t;
    }
    t = ve(e), l.defaultValue = t, a = l.textContent, a === t && a !== "" && a !== null && (l.value = a), vu(l);
  }
  function Pt(l, e) {
    if (e) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    l.textContent = e;
  }
  var Nh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uf(l, e, t) {
    var a = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "" : a ? l.setProperty(e, t) : typeof t != "number" || t === 0 || Nh.has(e) ? e === "float" ? l.cssFloat = t : l[e] = ("" + t).trim() : l[e] = t + "px";
  }
  function cf(l, e, t) {
    if (e != null && typeof e != "object")
      throw Error(d(62));
    if (l = l.style, t != null) {
      for (var a in t)
        !t.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && t[n] !== a && uf(l, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && uf(l, i, e[i]);
  }
  function xu(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _h = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Eh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qn(l) {
    return Eh.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ye() {
  }
  var ju = null;
  function pu(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ea = null;
  function sf(l) {
    var e = Wt(l);
    if (e && (l = e.stateNode)) {
      var t = l[$l] || null;
      l: switch (l = e.stateNode, e.type) {
        case "input":
          if (yu(
            l,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), e = t.name, t.type === "radio" && e != null) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + ye(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < t.length; e++) {
              var a = t[e];
              if (a !== l && a.form === l.form) {
                var n = a[$l] || null;
                if (!n) throw Error(d(90));
                yu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < t.length; e++)
              a = t[e], a.form === l.form && ef(a);
          }
          break l;
        case "textarea":
          af(l, t.value, t.defaultValue);
          break l;
        case "select":
          e = t.value, e != null && It(l, !!t.multiple, e, !1);
      }
    }
  }
  var bu = !1;
  function ff(l, e, t) {
    if (bu) return l(e, t);
    bu = !0;
    try {
      var a = l(e);
      return a;
    } finally {
      if (bu = !1, (la !== null || ea !== null) && (Ti(), la && (e = la, l = ea, ea = la = null, sf(e), l)))
        for (e = 0; e < l.length; e++) sf(l[e]);
    }
  }
  function Ya(l, e) {
    var t = l.stateNode;
    if (t === null) return null;
    var a = t[$l] || null;
    if (a === null) return null;
    t = a[e];
    l: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function")
      throw Error(
        d(231, e, typeof t)
      );
    return t;
  }
  var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Su = !1;
  if (Ge)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          Su = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      Su = !1;
    }
  var nt = null, zu = null, Zn = null;
  function df() {
    if (Zn) return Zn;
    var l, e = zu, t = e.length, a, n = "value" in nt ? nt.value : nt.textContent, i = n.length;
    for (l = 0; l < t && e[l] === n[l]; l++) ;
    var c = t - l;
    for (a = 1; a <= c && e[t - a] === n[i - a]; a++) ;
    return Zn = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ln(l) {
    var e = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && e === 13 && (l = 13)) : l = e, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Vn() {
    return !0;
  }
  function rf() {
    return !1;
  }
  function Fl(l) {
    function e(t, a, n, i, c) {
      this._reactName = t, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var s in l)
        l.hasOwnProperty(s) && (t = l[s], this[s] = t ? t(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vn : rf, this.isPropagationStopped = rf, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Vn);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Vn);
      },
      persist: function() {
      },
      isPersistent: Vn
    }), e;
  }
  var Dt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kn = Fl(Dt), Xa = U({}, Dt, { view: 0, detail: 0 }), Ah = Fl(Xa), Nu, _u, Qa, wn = U({}, Xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Au,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Qa && (Qa && l.type === "mousemove" ? (Nu = l.screenX - Qa.screenX, _u = l.screenY - Qa.screenY) : _u = Nu = 0, Qa = l), Nu);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : _u;
    }
  }), of = Fl(wn), Th = U({}, wn, { dataTransfer: 0 }), Mh = Fl(Th), Oh = U({}, Xa, { relatedTarget: 0 }), Eu = Fl(Oh), Dh = U({}, Dt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = Fl(Dh), Uh = U({}, Dt, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Rh = Fl(Uh), Hh = U({}, Dt, { data: 0 }), hf = Fl(Hh), qh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Bh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Yh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gh(l) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(l) : (l = Yh[l]) ? !!e[l] : !1;
  }
  function Au() {
    return Gh;
  }
  var Xh = U({}, Xa, {
    key: function(l) {
      if (l.key) {
        var e = qh[l.key] || l.key;
        if (e !== "Unidentified") return e;
      }
      return l.type === "keypress" ? (l = Ln(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Bh[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Au,
    charCode: function(l) {
      return l.type === "keypress" ? Ln(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ln(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Qh = Fl(Xh), Zh = U({}, wn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), mf = Fl(Zh), Lh = U({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au
  }), Vh = Fl(Lh), Kh = U({}, Dt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wh = Fl(Kh), Jh = U({}, wn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kh = Fl(Jh), Wh = U({}, Dt, {
    newState: 0,
    oldState: 0
  }), $h = Fl(Wh), Fh = [9, 13, 27, 32], Tu = Ge && "CompositionEvent" in window, Za = null;
  Ge && "documentMode" in document && (Za = document.documentMode);
  var Ih = Ge && "TextEvent" in window && !Za, vf = Ge && (!Tu || Za && 8 < Za && 11 >= Za), yf = " ", gf = !1;
  function xf(l, e) {
    switch (l) {
      case "keyup":
        return Fh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ta = !1;
  function Ph(l, e) {
    switch (l) {
      case "compositionend":
        return jf(e);
      case "keypress":
        return e.which !== 32 ? null : (gf = !0, yf);
      case "textInput":
        return l = e.data, l === yf && gf ? null : l;
      default:
        return null;
    }
  }
  function lm(l, e) {
    if (ta)
      return l === "compositionend" || !Tu && xf(l, e) ? (l = df(), Zn = zu = nt = null, ta = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return vf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var em = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function pf(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e === "input" ? !!em[l.type] : e === "textarea";
  }
  function bf(l, e, t, a) {
    la ? ea ? ea.push(a) : ea = [a] : la = a, e = Hi(e, "onChange"), 0 < e.length && (t = new Kn(
      "onChange",
      "change",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }));
  }
  var La = null, Va = null;
  function tm(l) {
    ao(l, 0);
  }
  function Jn(l) {
    var e = Ba(l);
    if (ef(e)) return l;
  }
  function Sf(l, e) {
    if (l === "change") return e;
  }
  var zf = !1;
  if (Ge) {
    var Mu;
    if (Ge) {
      var Ou = "oninput" in document;
      if (!Ou) {
        var Nf = document.createElement("div");
        Nf.setAttribute("oninput", "return;"), Ou = typeof Nf.oninput == "function";
      }
      Mu = Ou;
    } else Mu = !1;
    zf = Mu && (!document.documentMode || 9 < document.documentMode);
  }
  function _f() {
    La && (La.detachEvent("onpropertychange", Ef), Va = La = null);
  }
  function Ef(l) {
    if (l.propertyName === "value" && Jn(Va)) {
      var e = [];
      bf(
        e,
        Va,
        l,
        pu(l)
      ), ff(tm, e);
    }
  }
  function am(l, e, t) {
    l === "focusin" ? (_f(), La = e, Va = t, La.attachEvent("onpropertychange", Ef)) : l === "focusout" && _f();
  }
  function nm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Jn(Va);
  }
  function im(l, e) {
    if (l === "click") return Jn(e);
  }
  function um(l, e) {
    if (l === "input" || l === "change")
      return Jn(e);
  }
  function cm(l, e) {
    return l === e && (l !== 0 || 1 / l === 1 / e) || l !== l && e !== e;
  }
  var ce = typeof Object.is == "function" ? Object.is : cm;
  function Ka(l, e) {
    if (ce(l, e)) return !0;
    if (typeof l != "object" || l === null || typeof e != "object" || e === null)
      return !1;
    var t = Object.keys(l), a = Object.keys(e);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!cu.call(e, n) || !ce(l[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Af(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Tf(l, e) {
    var t = Af(l);
    l = 0;
    for (var a; t; ) {
      if (t.nodeType === 3) {
        if (a = l + t.textContent.length, l <= e && a >= e)
          return { node: t, offset: e - l };
        l = a;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Af(t);
    }
  }
  function Mf(l, e) {
    return l && e ? l === e ? !0 : l && l.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Mf(l, e.parentNode) : "contains" in l ? l.contains(e) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Of(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var e = Xn(l.document); e instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = e.contentWindow;
      else break;
      e = Xn(l.document);
    }
    return e;
  }
  function Du(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e && (e === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || e === "textarea" || l.contentEditable === "true");
  }
  var sm = Ge && "documentMode" in document && 11 >= document.documentMode, aa = null, Cu = null, wa = null, Uu = !1;
  function Df(l, e, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Uu || aa == null || aa !== Xn(a) || (a = aa, "selectionStart" in a && Du(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), wa && Ka(wa, a) || (wa = a, a = Hi(Cu, "onSelect"), 0 < a.length && (e = new Kn(
      "onSelect",
      "select",
      null,
      e,
      t
    ), l.push({ event: e, listeners: a }), e.target = aa)));
  }
  function Ct(l, e) {
    var t = {};
    return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t;
  }
  var na = {
    animationend: Ct("Animation", "AnimationEnd"),
    animationiteration: Ct("Animation", "AnimationIteration"),
    animationstart: Ct("Animation", "AnimationStart"),
    transitionrun: Ct("Transition", "TransitionRun"),
    transitionstart: Ct("Transition", "TransitionStart"),
    transitioncancel: Ct("Transition", "TransitionCancel"),
    transitionend: Ct("Transition", "TransitionEnd")
  }, Ru = {}, Cf = {};
  Ge && (Cf = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
  function Ut(l) {
    if (Ru[l]) return Ru[l];
    if (!na[l]) return l;
    var e = na[l], t;
    for (t in e)
      if (e.hasOwnProperty(t) && t in Cf)
        return Ru[l] = e[t];
    return l;
  }
  var Uf = Ut("animationend"), Rf = Ut("animationiteration"), Hf = Ut("animationstart"), fm = Ut("transitionrun"), dm = Ut("transitionstart"), rm = Ut("transitioncancel"), qf = Ut("transitionend"), Bf = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hu.push("scrollEnd");
  function Ae(l, e) {
    Bf.set(l, e), Ot(e, [l]);
  }
  var kn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ge = [], ia = 0, qu = 0;
  function Wn() {
    for (var l = ia, e = qu = ia = 0; e < l; ) {
      var t = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var i = ge[e];
      if (ge[e++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      i !== 0 && Yf(t, n, i);
    }
  }
  function $n(l, e, t, a) {
    ge[ia++] = l, ge[ia++] = e, ge[ia++] = t, ge[ia++] = a, qu |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Bu(l, e, t, a) {
    return $n(l, e, t, a), Fn(l);
  }
  function Rt(l, e) {
    return $n(l, null, null, e), Fn(l);
  }
  function Yf(l, e, t) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, i = l.return; i !== null; )
      i.childLanes |= t, a = i.alternate, a !== null && (a.childLanes |= t), i.tag === 22 && (l = i.stateNode, l === null || l._visibility & 1 || (n = !0)), l = i, i = i.return;
    return l.tag === 3 ? (i = l.stateNode, n && e !== null && (n = 31 - ue(t), l = i.hiddenUpdates, a = l[n], a === null ? l[n] = [e] : a.push(e), e.lane = t | 536870912), i) : null;
  }
  function Fn(l) {
    if (50 < vn)
      throw vn = 0, wc = null, Error(d(185));
    for (var e = l.return; e !== null; )
      l = e, e = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ua = {};
  function om(l, e, t, a) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function se(l, e, t, a) {
    return new om(l, e, t, a);
  }
  function Yu(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Xe(l, e) {
    var t = l.alternate;
    return t === null ? (t = se(
      l.tag,
      e,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function Gf(l, e) {
    l.flags &= 65011714;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), l;
  }
  function In(l, e, t, a, n, i) {
    var c = 0;
    if (a = l, typeof l == "function") Yu(l) && (c = 1);
    else if (typeof l == "string")
      c = g1(
        l,
        t,
        q.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case me:
          return l = se(31, t, e, n), l.elementType = me, l.lanes = i, l;
        case Q:
          return Ht(t.children, n, i, e);
        case Ol:
          c = 8, n |= 24;
          break;
        case Bl:
          return l = se(12, t, e, n | 2), l.elementType = Bl, l.lanes = i, l;
        case ae:
          return l = se(13, t, e, n), l.elementType = ae, l.lanes = i, l;
        case Hl:
          return l = se(19, t, e, n), l.elementType = Hl, l.lanes = i, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case El:
                c = 10;
                break l;
              case _e:
                c = 9;
                break l;
              case wl:
                c = 11;
                break l;
              case W:
                c = 14;
                break l;
              case bl:
                c = 16, a = null;
                break l;
            }
          c = 29, t = Error(
            d(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return e = se(c, t, e, n), e.elementType = l, e.type = a, e.lanes = i, e;
  }
  function Ht(l, e, t, a) {
    return l = se(7, l, a, e), l.lanes = t, l;
  }
  function Gu(l, e, t) {
    return l = se(6, l, null, e), l.lanes = t, l;
  }
  function Xf(l) {
    var e = se(18, null, null, 0);
    return e.stateNode = l, e;
  }
  function Xu(l, e, t) {
    return e = se(
      4,
      l.children !== null ? l.children : [],
      l.key,
      e
    ), e.lanes = t, e.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, e;
  }
  var Qf = /* @__PURE__ */ new WeakMap();
  function xe(l, e) {
    if (typeof l == "object" && l !== null) {
      var t = Qf.get(l);
      return t !== void 0 ? t : (e = {
        value: l,
        source: e,
        stack: Gs(e)
      }, Qf.set(l, e), e);
    }
    return {
      value: l,
      source: e,
      stack: Gs(e)
    };
  }
  var ca = [], sa = 0, Pn = null, Ja = 0, je = [], pe = 0, it = null, De = 1, Ce = "";
  function Qe(l, e) {
    ca[sa++] = Ja, ca[sa++] = Pn, Pn = l, Ja = e;
  }
  function Zf(l, e, t) {
    je[pe++] = De, je[pe++] = Ce, je[pe++] = it, it = l;
    var a = De;
    l = Ce;
    var n = 32 - ue(a) - 1;
    a &= ~(1 << n), t += 1;
    var i = 32 - ue(e) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, De = 1 << 32 - ue(e) + n | t << n | a, Ce = i + l;
    } else
      De = 1 << i | t << n | a, Ce = l;
  }
  function Qu(l) {
    l.return !== null && (Qe(l, 1), Zf(l, 1, 0));
  }
  function Zu(l) {
    for (; l === Pn; )
      Pn = ca[--sa], ca[sa] = null, Ja = ca[--sa], ca[sa] = null;
    for (; l === it; )
      it = je[--pe], je[pe] = null, Ce = je[--pe], je[pe] = null, De = je[--pe], je[pe] = null;
  }
  function Lf(l, e) {
    je[pe++] = De, je[pe++] = Ce, je[pe++] = it, De = e.id, Ce = e.overflow, it = l;
  }
  var Ql = null, xl = null, el = !1, ut = null, be = !1, Lu = Error(d(519));
  function ct(l) {
    var e = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ka(xe(e, l)), Lu;
  }
  function Vf(l) {
    var e = l.stateNode, t = l.type, a = l.memoizedProps;
    switch (e[Xl] = l, e[$l] = a, t) {
      case "dialog":
        I("cancel", e), I("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < gn.length; t++)
          I(gn[t], e);
        break;
      case "source":
        I("error", e);
        break;
      case "img":
      case "image":
      case "link":
        I("error", e), I("load", e);
        break;
      case "details":
        I("toggle", e);
        break;
      case "input":
        I("invalid", e), tf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        I("invalid", e);
        break;
      case "textarea":
        I("invalid", e), nf(e, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || a.suppressHydrationWarning === !0 || co(e.textContent, t) ? (a.popover != null && (I("beforetoggle", e), I("toggle", e)), a.onScroll != null && I("scroll", e), a.onScrollEnd != null && I("scrollend", e), a.onClick != null && (e.onclick = Ye), e = !0) : e = !1, e || ct(l, !0);
  }
  function Kf(l) {
    for (Ql = l.return; Ql; )
      switch (Ql.tag) {
        case 5:
        case 31:
        case 13:
          be = !1;
          return;
        case 27:
        case 3:
          be = !0;
          return;
        default:
          Ql = Ql.return;
      }
  }
  function fa(l) {
    if (l !== Ql) return !1;
    if (!el) return Kf(l), el = !0, !1;
    var e = l.tag, t;
    if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || cs(l.type, l.memoizedProps)), t = !t), t && xl && ct(l), Kf(l), e === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      xl = go(l);
    } else if (e === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      xl = go(l);
    } else
      e === 27 ? (e = xl, bt(l.type) ? (l = os, os = null, xl = l) : xl = e) : xl = Ql ? ze(l.stateNode.nextSibling) : null;
    return !0;
  }
  function qt() {
    xl = Ql = null, el = !1;
  }
  function Vu() {
    var l = ut;
    return l !== null && (ee === null ? ee = l : ee.push.apply(
      ee,
      l
    ), ut = null), l;
  }
  function ka(l) {
    ut === null ? ut = [l] : ut.push(l);
  }
  var Ku = h(null), Bt = null, Ze = null;
  function st(l, e, t) {
    C(Ku, e._currentValue), e._currentValue = t;
  }
  function Le(l) {
    l._currentValue = Ku.current, E(Ku);
  }
  function wu(l, e, t) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & e) !== e ? (l.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), l === t) break;
      l = l.return;
    }
  }
  function Ju(l, e, t, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        l: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var f = 0; f < e.length; f++)
            if (s.context === e[f]) {
              i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), wu(
                i.return,
                t,
                l
              ), a || (c = null);
              break l;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(d(341));
        c.lanes |= t, i = c.alternate, i !== null && (i.lanes |= t), wu(c, t, l), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function da(l, e, t, a) {
    l = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(d(387));
        if (c = c.memoizedProps, c !== null) {
          var s = n.type;
          ce(n.pendingProps.value, c.value) || (l !== null ? l.push(s) : l = [s]);
        }
      } else if (n === cl.current) {
        if (c = n.alternate, c === null) throw Error(d(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Sn) : l = [Sn]);
      }
      n = n.return;
    }
    l !== null && Ju(
      e,
      l,
      t,
      a
    ), e.flags |= 262144;
  }
  function li(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ce(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Yt(l) {
    Bt = l, Ze = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return wf(Bt, l);
  }
  function ei(l, e) {
    return Bt === null && Yt(l), wf(l, e);
  }
  function wf(l, e) {
    var t = e._currentValue;
    if (e = { context: e, memoizedValue: t, next: null }, Ze === null) {
      if (l === null) throw Error(d(308));
      Ze = e, l.dependencies = { lanes: 0, firstContext: e }, l.flags |= 524288;
    } else Ze = Ze.next = e;
    return t;
  }
  var hm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(t, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, l.forEach(function(t) {
        return t();
      });
    };
  }, mm = r.unstable_scheduleCallback, vm = r.unstable_NormalPriority, Dl = {
    $$typeof: El,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ku() {
    return {
      controller: new hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wa(l) {
    l.refCount--, l.refCount === 0 && mm(vm, function() {
      l.controller.abort();
    });
  }
  var $a = null, Wu = 0, ra = 0, oa = null;
  function ym(l, e) {
    if ($a === null) {
      var t = $a = [];
      Wu = 0, ra = Ic(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return Wu++, e.then(Jf, Jf), e;
  }
  function Jf() {
    if (--Wu === 0 && $a !== null) {
      oa !== null && (oa.status = "fulfilled");
      var l = $a;
      $a = null, ra = 0, oa = null;
      for (var e = 0; e < l.length; e++) (0, l[e])();
    }
  }
  function gm(l, e) {
    var t = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        t.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < t.length; n++) (0, t[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < t.length; n++)
          (0, t[n])(void 0);
      }
    ), a;
  }
  var kf = S.S;
  S.S = function(l, e) {
    Dr = ne(), typeof e == "object" && e !== null && typeof e.then == "function" && ym(l, e), kf !== null && kf(l, e);
  };
  var Gt = h(null);
  function $u() {
    var l = Gt.current;
    return l !== null ? l : yl.pooledCache;
  }
  function ti(l, e) {
    e === null ? C(Gt, Gt.current) : C(Gt, e.pool);
  }
  function Wf() {
    var l = $u();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var ha = Error(d(460)), Fu = Error(d(474)), ai = Error(d(542)), ni = { then: function() {
  } };
  function $f(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ff(l, e, t) {
    switch (t = l[t], t === void 0 ? l.push(e) : t !== e && (e.then(Ye, Ye), e = t), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw l = e.reason, Pf(l), l;
      default:
        if (typeof e.status == "string") e.then(Ye, Ye);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(d(482));
          l = e, l.status = "pending", l.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw l = e.reason, Pf(l), l;
        }
        throw Qt = e, ha;
    }
  }
  function Xt(l) {
    try {
      var e = l._init;
      return e(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Qt = t, ha) : t;
    }
  }
  var Qt = null;
  function If() {
    if (Qt === null) throw Error(d(459));
    var l = Qt;
    return Qt = null, l;
  }
  function Pf(l) {
    if (l === ha || l === ai)
      throw Error(d(483));
  }
  var ma = null, Fa = 0;
  function ii(l) {
    var e = Fa;
    return Fa += 1, ma === null && (ma = []), Ff(ma, l, e);
  }
  function Ia(l, e) {
    e = e.props.ref, l.ref = e !== void 0 ? e : null;
  }
  function ui(l, e) {
    throw e.$$typeof === il ? Error(d(525)) : (l = Object.prototype.toString.call(e), Error(
      d(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : l
      )
    ));
  }
  function ld(l) {
    function e(m, o) {
      if (l) {
        var v = m.deletions;
        v === null ? (m.deletions = [o], m.flags |= 16) : v.push(o);
      }
    }
    function t(m, o) {
      if (!l) return null;
      for (; o !== null; )
        e(m, o), o = o.sibling;
      return null;
    }
    function a(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function n(m, o) {
      return m = Xe(m, o), m.index = 0, m.sibling = null, m;
    }
    function i(m, o, v) {
      return m.index = v, l ? (v = m.alternate, v !== null ? (v = v.index, v < o ? (m.flags |= 67108866, o) : v) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function c(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function s(m, o, v, N) {
      return o === null || o.tag !== 6 ? (o = Gu(v, m.mode, N), o.return = m, o) : (o = n(o, v), o.return = m, o);
    }
    function f(m, o, v, N) {
      var Y = v.type;
      return Y === Q ? b(
        m,
        o,
        v.props.children,
        N,
        v.key
      ) : o !== null && (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === bl && Xt(Y) === o.type) ? (o = n(o, v.props), Ia(o, v), o.return = m, o) : (o = In(
        v.type,
        v.key,
        v.props,
        null,
        m.mode,
        N
      ), Ia(o, v), o.return = m, o);
    }
    function y(m, o, v, N) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Xu(v, m.mode, N), o.return = m, o) : (o = n(o, v.children || []), o.return = m, o);
    }
    function b(m, o, v, N, Y) {
      return o === null || o.tag !== 7 ? (o = Ht(
        v,
        m.mode,
        N,
        Y
      ), o.return = m, o) : (o = n(o, v), o.return = m, o);
    }
    function _(m, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Gu(
          "" + o,
          m.mode,
          v
        ), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case dl:
            return v = In(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              v
            ), Ia(v, o), v.return = m, v;
          case _l:
            return o = Xu(
              o,
              m.mode,
              v
            ), o.return = m, o;
          case bl:
            return o = Xt(o), _(m, o, v);
        }
        if (Ee(o) || Sl(o))
          return o = Ht(
            o,
            m.mode,
            v,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return _(m, ii(o), v);
        if (o.$$typeof === El)
          return _(
            m,
            ei(m, o),
            v
          );
        ui(m, o);
      }
      return null;
    }
    function g(m, o, v, N) {
      var Y = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return Y !== null ? null : s(m, o, "" + v, N);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case dl:
            return v.key === Y ? f(m, o, v, N) : null;
          case _l:
            return v.key === Y ? y(m, o, v, N) : null;
          case bl:
            return v = Xt(v), g(m, o, v, N);
        }
        if (Ee(v) || Sl(v))
          return Y !== null ? null : b(m, o, v, N, null);
        if (typeof v.then == "function")
          return g(
            m,
            o,
            ii(v),
            N
          );
        if (v.$$typeof === El)
          return g(
            m,
            o,
            ei(m, v),
            N
          );
        ui(m, v);
      }
      return null;
    }
    function j(m, o, v, N, Y) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return m = m.get(v) || null, s(o, m, "" + N, Y);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case dl:
            return m = m.get(
              N.key === null ? v : N.key
            ) || null, f(o, m, N, Y);
          case _l:
            return m = m.get(
              N.key === null ? v : N.key
            ) || null, y(o, m, N, Y);
          case bl:
            return N = Xt(N), j(
              m,
              o,
              v,
              N,
              Y
            );
        }
        if (Ee(N) || Sl(N))
          return m = m.get(v) || null, b(o, m, N, Y, null);
        if (typeof N.then == "function")
          return j(
            m,
            o,
            v,
            ii(N),
            Y
          );
        if (N.$$typeof === El)
          return j(
            m,
            o,
            v,
            ei(o, N),
            Y
          );
        ui(o, N);
      }
      return null;
    }
    function R(m, o, v, N) {
      for (var Y = null, al = null, B = o, k = o = 0, ll = null; B !== null && k < v.length; k++) {
        B.index > k ? (ll = B, B = null) : ll = B.sibling;
        var nl = g(
          m,
          B,
          v[k],
          N
        );
        if (nl === null) {
          B === null && (B = ll);
          break;
        }
        l && B && nl.alternate === null && e(m, B), o = i(nl, o, k), al === null ? Y = nl : al.sibling = nl, al = nl, B = ll;
      }
      if (k === v.length)
        return t(m, B), el && Qe(m, k), Y;
      if (B === null) {
        for (; k < v.length; k++)
          B = _(m, v[k], N), B !== null && (o = i(
            B,
            o,
            k
          ), al === null ? Y = B : al.sibling = B, al = B);
        return el && Qe(m, k), Y;
      }
      for (B = a(B); k < v.length; k++)
        ll = j(
          B,
          m,
          k,
          v[k],
          N
        ), ll !== null && (l && ll.alternate !== null && B.delete(
          ll.key === null ? k : ll.key
        ), o = i(
          ll,
          o,
          k
        ), al === null ? Y = ll : al.sibling = ll, al = ll);
      return l && B.forEach(function(Et) {
        return e(m, Et);
      }), el && Qe(m, k), Y;
    }
    function G(m, o, v, N) {
      if (v == null) throw Error(d(151));
      for (var Y = null, al = null, B = o, k = o = 0, ll = null, nl = v.next(); B !== null && !nl.done; k++, nl = v.next()) {
        B.index > k ? (ll = B, B = null) : ll = B.sibling;
        var Et = g(m, B, nl.value, N);
        if (Et === null) {
          B === null && (B = ll);
          break;
        }
        l && B && Et.alternate === null && e(m, B), o = i(Et, o, k), al === null ? Y = Et : al.sibling = Et, al = Et, B = ll;
      }
      if (nl.done)
        return t(m, B), el && Qe(m, k), Y;
      if (B === null) {
        for (; !nl.done; k++, nl = v.next())
          nl = _(m, nl.value, N), nl !== null && (o = i(nl, o, k), al === null ? Y = nl : al.sibling = nl, al = nl);
        return el && Qe(m, k), Y;
      }
      for (B = a(B); !nl.done; k++, nl = v.next())
        nl = j(B, m, k, nl.value, N), nl !== null && (l && nl.alternate !== null && B.delete(nl.key === null ? k : nl.key), o = i(nl, o, k), al === null ? Y = nl : al.sibling = nl, al = nl);
      return l && B.forEach(function(T1) {
        return e(m, T1);
      }), el && Qe(m, k), Y;
    }
    function ml(m, o, v, N) {
      if (typeof v == "object" && v !== null && v.type === Q && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case dl:
            l: {
              for (var Y = v.key; o !== null; ) {
                if (o.key === Y) {
                  if (Y = v.type, Y === Q) {
                    if (o.tag === 7) {
                      t(
                        m,
                        o.sibling
                      ), N = n(
                        o,
                        v.props.children
                      ), N.return = m, m = N;
                      break l;
                    }
                  } else if (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === bl && Xt(Y) === o.type) {
                    t(
                      m,
                      o.sibling
                    ), N = n(o, v.props), Ia(N, v), N.return = m, m = N;
                    break l;
                  }
                  t(m, o);
                  break;
                } else e(m, o);
                o = o.sibling;
              }
              v.type === Q ? (N = Ht(
                v.props.children,
                m.mode,
                N,
                v.key
              ), N.return = m, m = N) : (N = In(
                v.type,
                v.key,
                v.props,
                null,
                m.mode,
                N
              ), Ia(N, v), N.return = m, m = N);
            }
            return c(m);
          case _l:
            l: {
              for (Y = v.key; o !== null; ) {
                if (o.key === Y)
                  if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    t(
                      m,
                      o.sibling
                    ), N = n(o, v.children || []), N.return = m, m = N;
                    break l;
                  } else {
                    t(m, o);
                    break;
                  }
                else e(m, o);
                o = o.sibling;
              }
              N = Xu(v, m.mode, N), N.return = m, m = N;
            }
            return c(m);
          case bl:
            return v = Xt(v), ml(
              m,
              o,
              v,
              N
            );
        }
        if (Ee(v))
          return R(
            m,
            o,
            v,
            N
          );
        if (Sl(v)) {
          if (Y = Sl(v), typeof Y != "function") throw Error(d(150));
          return v = Y.call(v), G(
            m,
            o,
            v,
            N
          );
        }
        if (typeof v.then == "function")
          return ml(
            m,
            o,
            ii(v),
            N
          );
        if (v.$$typeof === El)
          return ml(
            m,
            o,
            ei(m, v),
            N
          );
        ui(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (t(m, o.sibling), N = n(o, v), N.return = m, m = N) : (t(m, o), N = Gu(v, m.mode, N), N.return = m, m = N), c(m)) : t(m, o);
    }
    return function(m, o, v, N) {
      try {
        Fa = 0;
        var Y = ml(
          m,
          o,
          v,
          N
        );
        return ma = null, Y;
      } catch (B) {
        if (B === ha || B === ai) throw B;
        var al = se(29, B, null, m.mode);
        return al.lanes = N, al.return = m, al;
      }
    };
  }
  var Zt = ld(!0), ed = ld(!1), ft = !1;
  function Iu(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Pu(l, e) {
    l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function dt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function rt(l, e, t) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ul & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Fn(l), Yf(l, null, t), e;
    }
    return $n(l, a, e, t), Fn(l);
  }
  function Pa(l, e, t) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194048) !== 0)) {
      var a = e.lanes;
      a &= l.pendingLanes, t |= a, e.lanes = t, Ks(l, t);
    }
  }
  function lc(l, e) {
    var t = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, t === a)) {
      var n = null, i = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var c = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = c : i = i.next = c, t = t.next;
        } while (t !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      t = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = t;
      return;
    }
    l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = e : l.next = e, t.lastBaseUpdate = e;
  }
  var ec = !1;
  function ln() {
    if (ec) {
      var l = oa;
      if (l !== null) throw l;
    }
  }
  function en(l, e, t, a) {
    ec = !1;
    var n = l.updateQueue;
    ft = !1;
    var i = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var f = s, y = f.next;
      f.next = null, c === null ? i = y : c.next = y, c = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, s = b.lastBaseUpdate, s !== c && (s === null ? b.firstBaseUpdate = y : s.next = y, b.lastBaseUpdate = f));
    }
    if (i !== null) {
      var _ = n.baseState;
      c = 0, b = y = f = null, s = i;
      do {
        var g = s.lane & -536870913, j = g !== s.lane;
        if (j ? (P & g) === g : (a & g) === g) {
          g !== 0 && g === ra && (ec = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          l: {
            var R = l, G = s;
            g = e;
            var ml = t;
            switch (G.tag) {
              case 1:
                if (R = G.payload, typeof R == "function") {
                  _ = R.call(ml, _, g);
                  break l;
                }
                _ = R;
                break l;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = G.payload, g = typeof R == "function" ? R.call(ml, _, g) : R, g == null) break l;
                _ = U({}, _, g);
                break l;
              case 2:
                ft = !0;
            }
          }
          g = s.callback, g !== null && (l.flags |= 64, j && (l.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [g] : j.push(g));
        } else
          j = {
            lane: g,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, b === null ? (y = b = j, f = _) : b = b.next = j, c |= g;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          j = s, s = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (!0);
      b === null && (f = _), n.baseState = f, n.firstBaseUpdate = y, n.lastBaseUpdate = b, i === null && (n.shared.lanes = 0), yt |= c, l.lanes = c, l.memoizedState = _;
    }
  }
  function td(l, e) {
    if (typeof l != "function")
      throw Error(d(191, l));
    l.call(e);
  }
  function ad(l, e) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        td(t[l], e);
  }
  var va = h(null), ci = h(0);
  function nd(l, e) {
    l = Ie, C(ci, l), C(va, e), Ie = l | e.baseLanes;
  }
  function tc() {
    C(ci, Ie), C(va, va.current);
  }
  function ac() {
    Ie = ci.current, E(va), E(ci);
  }
  var fe = h(null), Se = null;
  function ot(l) {
    var e = l.alternate;
    C(Tl, Tl.current & 1), C(fe, l), Se === null && (e === null || va.current !== null || e.memoizedState !== null) && (Se = l);
  }
  function nc(l) {
    C(Tl, Tl.current), C(fe, l), Se === null && (Se = l);
  }
  function id(l) {
    l.tag === 22 ? (C(Tl, Tl.current), C(fe, l), Se === null && (Se = l)) : ht();
  }
  function ht() {
    C(Tl, Tl.current), C(fe, fe.current);
  }
  function de(l) {
    E(fe), Se === l && (Se = null), E(Tl);
  }
  var Tl = h(0);
  function si(l) {
    for (var e = l; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || ds(t) || rs(t)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === l) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === l) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ve = 0, w = null, ol = null, Cl = null, fi = !1, ya = !1, Lt = !1, di = 0, tn = 0, ga = null, xm = 0;
  function zl() {
    throw Error(d(321));
  }
  function ic(l, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < l.length; t++)
      if (!ce(l[t], e[t])) return !1;
    return !0;
  }
  function uc(l, e, t, a, n, i) {
    return Ve = i, w = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, S.H = l === null || l.memoizedState === null ? Zd : bc, Lt = !1, i = t(a, n), Lt = !1, ya && (i = cd(
      e,
      t,
      a,
      n
    )), ud(l), i;
  }
  function ud(l) {
    S.H = un;
    var e = ol !== null && ol.next !== null;
    if (Ve = 0, Cl = ol = w = null, fi = !1, tn = 0, ga = null, e) throw Error(d(300));
    l === null || Ul || (l = l.dependencies, l !== null && li(l) && (Ul = !0));
  }
  function cd(l, e, t, a) {
    w = l;
    var n = 0;
    do {
      if (ya && (ga = null), tn = 0, ya = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Cl = ol = null, l.updateQueue != null) {
        var i = l.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      S.H = Ld, i = e(t, a);
    } while (ya);
    return i;
  }
  function jm() {
    var l = S.H, e = l.useState()[0];
    return e = typeof e.then == "function" ? an(e) : e, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (w.flags |= 1024), e;
  }
  function cc() {
    var l = di !== 0;
    return di = 0, l;
  }
  function sc(l, e, t) {
    e.updateQueue = l.updateQueue, e.flags &= -2053, l.lanes &= ~t;
  }
  function fc(l) {
    if (fi) {
      for (l = l.memoizedState; l !== null; ) {
        var e = l.queue;
        e !== null && (e.pending = null), l = l.next;
      }
      fi = !1;
    }
    Ve = 0, Cl = ol = w = null, ya = !1, tn = di = 0, ga = null;
  }
  function kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Cl === null ? w.memoizedState = Cl = l : Cl = Cl.next = l, Cl;
  }
  function Ml() {
    if (ol === null) {
      var l = w.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var e = Cl === null ? w.memoizedState : Cl.next;
    if (e !== null)
      Cl = e, ol = l;
    else {
      if (l === null)
        throw w.alternate === null ? Error(d(467)) : Error(d(310));
      ol = l, l = {
        memoizedState: ol.memoizedState,
        baseState: ol.baseState,
        baseQueue: ol.baseQueue,
        queue: ol.queue,
        next: null
      }, Cl === null ? w.memoizedState = Cl = l : Cl = Cl.next = l;
    }
    return Cl;
  }
  function ri() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function an(l) {
    var e = tn;
    return tn += 1, ga === null && (ga = []), l = Ff(ga, l, e), e = w, (Cl === null ? e.memoizedState : Cl.next) === null && (e = e.alternate, S.H = e === null || e.memoizedState === null ? Zd : bc), l;
  }
  function oi(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return an(l);
      if (l.$$typeof === El) return Zl(l);
    }
    throw Error(d(438, String(l)));
  }
  function dc(l) {
    var e = null, t = w.updateQueue;
    if (t !== null && (e = t.memoCache), e == null) {
      var a = w.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), t === null && (t = ri(), w.updateQueue = t), t.memoCache = e, t = e.data[e.index], t === void 0)
      for (t = e.data[e.index] = Array(l), a = 0; a < l; a++)
        t[a] = T;
    return e.index++, t;
  }
  function Ke(l, e) {
    return typeof e == "function" ? e(l) : e;
  }
  function hi(l) {
    var e = Ml();
    return rc(e, ol, l);
  }
  function rc(l, e, t) {
    var a = l.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = t;
    var n = l.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = i.next, i.next = c;
      }
      e.baseQueue = n = i, a.pending = null;
    }
    if (i = l.baseState, n === null) l.memoizedState = i;
    else {
      e = n.next;
      var s = c = null, f = null, y = e, b = !1;
      do {
        var _ = y.lane & -536870913;
        if (_ !== y.lane ? (P & _) === _ : (Ve & _) === _) {
          var g = y.revertLane;
          if (g === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), _ === ra && (b = !0);
          else if ((Ve & g) === g) {
            y = y.next, g === ra && (b = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, f === null ? (s = f = _, c = i) : f = f.next = _, w.lanes |= g, yt |= g;
          _ = y.action, Lt && t(i, _), i = y.hasEagerState ? y.eagerState : t(i, _);
        } else
          g = {
            lane: _,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, f === null ? (s = f = g, c = i) : f = f.next = g, w.lanes |= _, yt |= _;
        y = y.next;
      } while (y !== null && y !== e);
      if (f === null ? c = i : f.next = s, !ce(i, l.memoizedState) && (Ul = !0, b && (t = oa, t !== null)))
        throw t;
      l.memoizedState = i, l.baseState = c, l.baseQueue = f, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function oc(l) {
    var e = Ml(), t = e.queue;
    if (t === null) throw Error(d(311));
    t.lastRenderedReducer = l;
    var a = t.dispatch, n = t.pending, i = e.memoizedState;
    if (n !== null) {
      t.pending = null;
      var c = n = n.next;
      do
        i = l(i, c.action), c = c.next;
      while (c !== n);
      ce(i, e.memoizedState) || (Ul = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
    }
    return [i, a];
  }
  function sd(l, e, t) {
    var a = w, n = Ml(), i = el;
    if (i) {
      if (t === void 0) throw Error(d(407));
      t = t();
    } else t = e();
    var c = !ce(
      (ol || n).memoizedState,
      t
    );
    if (c && (n.memoizedState = t, Ul = !0), n = n.queue, vc(rd.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== e || c || Cl !== null && Cl.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        dd.bind(
          null,
          a,
          n,
          t,
          e
        ),
        null
      ), yl === null) throw Error(d(349));
      i || (Ve & 127) !== 0 || fd(a, e, t);
    }
    return t;
  }
  function fd(l, e, t) {
    l.flags |= 16384, l = { getSnapshot: e, value: t }, e = w.updateQueue, e === null ? (e = ri(), w.updateQueue = e, e.stores = [l]) : (t = e.stores, t === null ? e.stores = [l] : t.push(l));
  }
  function dd(l, e, t, a) {
    e.value = t, e.getSnapshot = a, od(e) && hd(l);
  }
  function rd(l, e, t) {
    return t(function() {
      od(e) && hd(l);
    });
  }
  function od(l) {
    var e = l.getSnapshot;
    l = l.value;
    try {
      var t = e();
      return !ce(l, t);
    } catch {
      return !0;
    }
  }
  function hd(l) {
    var e = Rt(l, 2);
    e !== null && te(e, l, 2);
  }
  function hc(l) {
    var e = kl();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), Lt) {
        tt(!0);
        try {
          t();
        } finally {
          tt(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = l, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ke,
      lastRenderedState: l
    }, e;
  }
  function md(l, e, t, a) {
    return l.baseState = t, rc(
      l,
      ol,
      typeof a == "function" ? a : Ke
    );
  }
  function pm(l, e, t, a, n) {
    if (yi(l)) throw Error(d(485));
    if (l = e.action, l !== null) {
      var i = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          i.listeners.push(c);
        }
      };
      S.T !== null ? t(!0) : i.isTransition = !1, a(i), t = e.pending, t === null ? (i.next = e.pending = i, vd(e, i)) : (i.next = t.next, e.pending = t.next = i);
    }
  }
  function vd(l, e) {
    var t = e.action, a = e.payload, n = l.state;
    if (e.isTransition) {
      var i = S.T, c = {};
      S.T = c;
      try {
        var s = t(n, a), f = S.S;
        f !== null && f(c, s), yd(l, e, s);
      } catch (y) {
        mc(l, e, y);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), S.T = i;
      }
    } else
      try {
        i = t(n, a), yd(l, e, i);
      } catch (y) {
        mc(l, e, y);
      }
  }
  function yd(l, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        gd(l, e, a);
      },
      function(a) {
        return mc(l, e, a);
      }
    ) : gd(l, e, t);
  }
  function gd(l, e, t) {
    e.status = "fulfilled", e.value = t, xd(e), l.state = t, e = l.pending, e !== null && (t = e.next, t === e ? l.pending = null : (t = t.next, e.next = t, vd(l, t)));
  }
  function mc(l, e, t) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = t, xd(e), e = e.next;
      while (e !== a);
    }
    l.action = null;
  }
  function xd(l) {
    l = l.listeners;
    for (var e = 0; e < l.length; e++) (0, l[e])();
  }
  function jd(l, e) {
    return e;
  }
  function pd(l, e) {
    if (el) {
      var t = yl.formState;
      if (t !== null) {
        l: {
          var a = w;
          if (el) {
            if (xl) {
              e: {
                for (var n = xl, i = be; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = ze(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                xl = ze(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            ct(a);
          }
          a = !1;
        }
        a && (e = t[0]);
      }
    }
    return t = kl(), t.memoizedState = t.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jd,
      lastRenderedState: e
    }, t.queue = a, t = Gd.bind(
      null,
      w,
      a
    ), a.dispatch = t, a = hc(!1), i = pc.bind(
      null,
      w,
      !1,
      a.queue
    ), a = kl(), n = {
      state: e,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, t = pm.bind(
      null,
      w,
      n,
      i,
      t
    ), n.dispatch = t, a.memoizedState = l, [e, t, !1];
  }
  function bd(l) {
    var e = Ml();
    return Sd(e, ol, l);
  }
  function Sd(l, e, t) {
    if (e = rc(
      l,
      e,
      jd
    )[0], l = hi(Ke)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = an(e);
      } catch (c) {
        throw c === ha ? ai : c;
      }
    else a = e;
    e = Ml();
    var n = e.queue, i = n.dispatch;
    return t !== e.memoizedState && (w.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      bm.bind(null, n, t),
      null
    )), [a, i, l];
  }
  function bm(l, e) {
    l.action = e;
  }
  function zd(l) {
    var e = Ml(), t = ol;
    if (t !== null)
      return Sd(e, t, l);
    Ml(), e = e.memoizedState, t = Ml();
    var a = t.queue.dispatch;
    return t.memoizedState = l, [e, a, !1];
  }
  function xa(l, e, t, a) {
    return l = { tag: l, create: t, deps: a, inst: e, next: null }, e = w.updateQueue, e === null && (e = ri(), w.updateQueue = e), t = e.lastEffect, t === null ? e.lastEffect = l.next = l : (a = t.next, t.next = l, l.next = a, e.lastEffect = l), l;
  }
  function Nd() {
    return Ml().memoizedState;
  }
  function mi(l, e, t, a) {
    var n = kl();
    w.flags |= l, n.memoizedState = xa(
      1 | e,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function vi(l, e, t, a) {
    var n = Ml();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ol !== null && a !== null && ic(a, ol.memoizedState.deps) ? n.memoizedState = xa(e, i, t, a) : (w.flags |= l, n.memoizedState = xa(
      1 | e,
      i,
      t,
      a
    ));
  }
  function _d(l, e) {
    mi(8390656, 8, l, e);
  }
  function vc(l, e) {
    vi(2048, 8, l, e);
  }
  function Sm(l) {
    w.flags |= 4;
    var e = w.updateQueue;
    if (e === null)
      e = ri(), w.updateQueue = e, e.events = [l];
    else {
      var t = e.events;
      t === null ? e.events = [l] : t.push(l);
    }
  }
  function Ed(l) {
    var e = Ml().memoizedState;
    return Sm({ ref: e, nextImpl: l }), function() {
      if ((ul & 2) !== 0) throw Error(d(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ad(l, e) {
    return vi(4, 2, l, e);
  }
  function Td(l, e) {
    return vi(4, 4, l, e);
  }
  function Md(l, e) {
    if (typeof e == "function") {
      l = l();
      var t = e(l);
      return function() {
        typeof t == "function" ? t() : e(null);
      };
    }
    if (e != null)
      return l = l(), e.current = l, function() {
        e.current = null;
      };
  }
  function Od(l, e, t) {
    t = t != null ? t.concat([l]) : null, vi(4, 4, Md.bind(null, e, l), t);
  }
  function yc() {
  }
  function Dd(l, e) {
    var t = Ml();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    return e !== null && ic(e, a[1]) ? a[0] : (t.memoizedState = [l, e], l);
  }
  function Cd(l, e) {
    var t = Ml();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    if (e !== null && ic(e, a[1]))
      return a[0];
    if (a = l(), Lt) {
      tt(!0);
      try {
        l();
      } finally {
        tt(!1);
      }
    }
    return t.memoizedState = [a, e], a;
  }
  function gc(l, e, t) {
    return t === void 0 || (Ve & 1073741824) !== 0 && (P & 261930) === 0 ? l.memoizedState = e : (l.memoizedState = t, l = Ur(), w.lanes |= l, yt |= l, t);
  }
  function Ud(l, e, t, a) {
    return ce(t, e) ? t : va.current !== null ? (l = gc(l, t, a), ce(l, e) || (Ul = !0), l) : (Ve & 42) === 0 || (Ve & 1073741824) !== 0 && (P & 261930) === 0 ? (Ul = !0, l.memoizedState = t) : (l = Ur(), w.lanes |= l, yt |= l, e);
  }
  function Rd(l, e, t, a, n) {
    var i = D.p;
    D.p = i !== 0 && 8 > i ? i : 8;
    var c = S.T, s = {};
    S.T = s, pc(l, !1, e, t);
    try {
      var f = n(), y = S.S;
      if (y !== null && y(s, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var b = gm(
          f,
          a
        );
        nn(
          l,
          e,
          b,
          he(l)
        );
      } else
        nn(
          l,
          e,
          a,
          he(l)
        );
    } catch (_) {
      nn(
        l,
        e,
        { then: function() {
        }, status: "rejected", reason: _ },
        he()
      );
    } finally {
      D.p = i, c !== null && s.types !== null && (c.types = s.types), S.T = c;
    }
  }
  function zm() {
  }
  function xc(l, e, t, a) {
    if (l.tag !== 5) throw Error(d(476));
    var n = Hd(l).queue;
    Rd(
      l,
      n,
      e,
      X,
      t === null ? zm : function() {
        return qd(l), t(a);
      }
    );
  }
  function Hd(l) {
    var e = l.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: X
      },
      next: null
    };
    var t = {};
    return e.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = e, l = l.alternate, l !== null && (l.memoizedState = e), e;
  }
  function qd(l) {
    var e = Hd(l);
    e.next === null && (e = l.alternate.memoizedState), nn(
      l,
      e.next.queue,
      {},
      he()
    );
  }
  function jc() {
    return Zl(Sn);
  }
  function Bd() {
    return Ml().memoizedState;
  }
  function Yd() {
    return Ml().memoizedState;
  }
  function Nm(l) {
    for (var e = l.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = he();
          l = dt(t);
          var a = rt(e, l, t);
          a !== null && (te(a, e, t), Pa(a, e, t)), e = { cache: ku() }, l.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function _m(l, e, t) {
    var a = he();
    t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(l) ? Xd(e, t) : (t = Bu(l, e, t, a), t !== null && (te(t, l, a), Qd(t, e, a)));
  }
  function Gd(l, e, t) {
    var a = he();
    nn(l, e, t, a);
  }
  function nn(l, e, t, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yi(l)) Xd(e, n);
    else {
      var i = l.alternate;
      if (l.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var c = e.lastRenderedState, s = i(c, t);
          if (n.hasEagerState = !0, n.eagerState = s, ce(s, c))
            return $n(l, e, n, 0), yl === null && Wn(), !1;
        } catch {
        }
      if (t = Bu(l, e, n, a), t !== null)
        return te(t, l, a), Qd(t, e, a), !0;
    }
    return !1;
  }
  function pc(l, e, t, a) {
    if (a = {
      lane: 2,
      revertLane: Ic(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(l)) {
      if (e) throw Error(d(479));
    } else
      e = Bu(
        l,
        t,
        a,
        2
      ), e !== null && te(e, l, 2);
  }
  function yi(l) {
    var e = l.alternate;
    return l === w || e !== null && e === w;
  }
  function Xd(l, e) {
    ya = fi = !0;
    var t = l.pending;
    t === null ? e.next = e : (e.next = t.next, t.next = e), l.pending = e;
  }
  function Qd(l, e, t) {
    if ((t & 4194048) !== 0) {
      var a = e.lanes;
      a &= l.pendingLanes, t |= a, e.lanes = t, Ks(l, t);
    }
  }
  var un = {
    readContext: Zl,
    use: oi,
    useCallback: zl,
    useContext: zl,
    useEffect: zl,
    useImperativeHandle: zl,
    useLayoutEffect: zl,
    useInsertionEffect: zl,
    useMemo: zl,
    useReducer: zl,
    useRef: zl,
    useState: zl,
    useDebugValue: zl,
    useDeferredValue: zl,
    useTransition: zl,
    useSyncExternalStore: zl,
    useId: zl,
    useHostTransitionStatus: zl,
    useFormState: zl,
    useActionState: zl,
    useOptimistic: zl,
    useMemoCache: zl,
    useCacheRefresh: zl
  };
  un.useEffectEvent = zl;
  var Zd = {
    readContext: Zl,
    use: oi,
    useCallback: function(l, e) {
      return kl().memoizedState = [
        l,
        e === void 0 ? null : e
      ], l;
    },
    useContext: Zl,
    useEffect: _d,
    useImperativeHandle: function(l, e, t) {
      t = t != null ? t.concat([l]) : null, mi(
        4194308,
        4,
        Md.bind(null, e, l),
        t
      );
    },
    useLayoutEffect: function(l, e) {
      return mi(4194308, 4, l, e);
    },
    useInsertionEffect: function(l, e) {
      mi(4, 2, l, e);
    },
    useMemo: function(l, e) {
      var t = kl();
      e = e === void 0 ? null : e;
      var a = l();
      if (Lt) {
        tt(!0);
        try {
          l();
        } finally {
          tt(!1);
        }
      }
      return t.memoizedState = [a, e], a;
    },
    useReducer: function(l, e, t) {
      var a = kl();
      if (t !== void 0) {
        var n = t(e);
        if (Lt) {
          tt(!0);
          try {
            t(e);
          } finally {
            tt(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = _m.bind(
        null,
        w,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var e = kl();
      return l = { current: l }, e.memoizedState = l;
    },
    useState: function(l) {
      l = hc(l);
      var e = l.queue, t = Gd.bind(null, w, e);
      return e.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: yc,
    useDeferredValue: function(l, e) {
      var t = kl();
      return gc(t, l, e);
    },
    useTransition: function() {
      var l = hc(!1);
      return l = Rd.bind(
        null,
        w,
        l.queue,
        !0,
        !1
      ), kl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, e, t) {
      var a = w, n = kl();
      if (el) {
        if (t === void 0)
          throw Error(d(407));
        t = t();
      } else {
        if (t = e(), yl === null)
          throw Error(d(349));
        (P & 127) !== 0 || fd(a, e, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: e };
      return n.queue = i, _d(rd.bind(null, a, i, l), [
        l
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        dd.bind(
          null,
          a,
          i,
          t,
          e
        ),
        null
      ), t;
    },
    useId: function() {
      var l = kl(), e = yl.identifierPrefix;
      if (el) {
        var t = Ce, a = De;
        t = (a & ~(1 << 32 - ue(a) - 1)).toString(32) + t, e = "_" + e + "R_" + t, t = di++, 0 < t && (e += "H" + t.toString(32)), e += "_";
      } else
        t = xm++, e = "_" + e + "r_" + t.toString(32) + "_";
      return l.memoizedState = e;
    },
    useHostTransitionStatus: jc,
    useFormState: pd,
    useActionState: pd,
    useOptimistic: function(l) {
      var e = kl();
      e.memoizedState = e.baseState = l;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = t, e = pc.bind(
        null,
        w,
        !0,
        t
      ), t.dispatch = e, [l, e];
    },
    useMemoCache: dc,
    useCacheRefresh: function() {
      return kl().memoizedState = Nm.bind(
        null,
        w
      );
    },
    useEffectEvent: function(l) {
      var e = kl(), t = { impl: l };
      return e.memoizedState = t, function() {
        if ((ul & 2) !== 0)
          throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, bc = {
    readContext: Zl,
    use: oi,
    useCallback: Dd,
    useContext: Zl,
    useEffect: vc,
    useImperativeHandle: Od,
    useInsertionEffect: Ad,
    useLayoutEffect: Td,
    useMemo: Cd,
    useReducer: hi,
    useRef: Nd,
    useState: function() {
      return hi(Ke);
    },
    useDebugValue: yc,
    useDeferredValue: function(l, e) {
      var t = Ml();
      return Ud(
        t,
        ol.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = hi(Ke)[0], e = Ml().memoizedState;
      return [
        typeof l == "boolean" ? l : an(l),
        e
      ];
    },
    useSyncExternalStore: sd,
    useId: Bd,
    useHostTransitionStatus: jc,
    useFormState: bd,
    useActionState: bd,
    useOptimistic: function(l, e) {
      var t = Ml();
      return md(t, ol, l, e);
    },
    useMemoCache: dc,
    useCacheRefresh: Yd
  };
  bc.useEffectEvent = Ed;
  var Ld = {
    readContext: Zl,
    use: oi,
    useCallback: Dd,
    useContext: Zl,
    useEffect: vc,
    useImperativeHandle: Od,
    useInsertionEffect: Ad,
    useLayoutEffect: Td,
    useMemo: Cd,
    useReducer: oc,
    useRef: Nd,
    useState: function() {
      return oc(Ke);
    },
    useDebugValue: yc,
    useDeferredValue: function(l, e) {
      var t = Ml();
      return ol === null ? gc(t, l, e) : Ud(
        t,
        ol.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = oc(Ke)[0], e = Ml().memoizedState;
      return [
        typeof l == "boolean" ? l : an(l),
        e
      ];
    },
    useSyncExternalStore: sd,
    useId: Bd,
    useHostTransitionStatus: jc,
    useFormState: zd,
    useActionState: zd,
    useOptimistic: function(l, e) {
      var t = Ml();
      return ol !== null ? md(t, ol, l, e) : (t.baseState = l, [l, t.queue.dispatch]);
    },
    useMemoCache: dc,
    useCacheRefresh: Yd
  };
  Ld.useEffectEvent = Ed;
  function Sc(l, e, t, a) {
    e = l.memoizedState, t = t(a, e), t = t == null ? e : U({}, e, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var zc = {
    enqueueSetState: function(l, e, t) {
      l = l._reactInternals;
      var a = he(), n = dt(a);
      n.payload = e, t != null && (n.callback = t), e = rt(l, n, a), e !== null && (te(e, l, a), Pa(e, l, a));
    },
    enqueueReplaceState: function(l, e, t) {
      l = l._reactInternals;
      var a = he(), n = dt(a);
      n.tag = 1, n.payload = e, t != null && (n.callback = t), e = rt(l, n, a), e !== null && (te(e, l, a), Pa(e, l, a));
    },
    enqueueForceUpdate: function(l, e) {
      l = l._reactInternals;
      var t = he(), a = dt(t);
      a.tag = 2, e != null && (a.callback = e), e = rt(l, a, t), e !== null && (te(e, l, t), Pa(e, l, t));
    }
  };
  function Vd(l, e, t, a, n, i, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, i, c) : e.prototype && e.prototype.isPureReactComponent ? !Ka(t, a) || !Ka(n, i) : !0;
  }
  function Kd(l, e, t, a) {
    l = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, a), e.state !== l && zc.enqueueReplaceState(e, e.state, null);
  }
  function Vt(l, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var a in e)
        a !== "ref" && (t[a] = e[a]);
    }
    if (l = l.defaultProps) {
      t === e && (t = U({}, t));
      for (var n in l)
        t[n] === void 0 && (t[n] = l[n]);
    }
    return t;
  }
  function wd(l) {
    kn(l);
  }
  function Jd(l) {
    console.error(l);
  }
  function kd(l) {
    kn(l);
  }
  function gi(l, e) {
    try {
      var t = l.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wd(l, e, t) {
    try {
      var a = l.onCaughtError;
      a(t.value, {
        componentStack: t.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Nc(l, e, t) {
    return t = dt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      gi(l, e);
    }, t;
  }
  function $d(l) {
    return l = dt(l), l.tag = 3, l;
  }
  function Fd(l, e, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      l.payload = function() {
        return n(i);
      }, l.callback = function() {
        Wd(e, t, a);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      Wd(e, t, a), typeof n != "function" && (gt === null ? gt = /* @__PURE__ */ new Set([this]) : gt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Em(l, e, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = t.alternate, e !== null && da(
        e,
        t,
        n,
        !0
      ), t = fe.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Se === null ? Mi() : t.alternate === null && Nl === 0 && (Nl = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === ni ? t.flags |= 16384 : (e = t.updateQueue, e === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Wc(l, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === ni ? t.flags |= 16384 : (e = t.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = e) : (t = e.retryQueue, t === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), Wc(l, a, n)), !1;
        }
        throw Error(d(435, t.tag));
      }
      return Wc(l, a, n), Mi(), !1;
    }
    if (el)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Lu && (l = Error(d(422), { cause: a }), ka(xe(l, t)))) : (a !== Lu && (e = Error(d(423), {
        cause: a
      }), ka(
        xe(e, t)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = xe(a, t), n = Nc(
        l.stateNode,
        a,
        n
      ), lc(l, n), Nl !== 4 && (Nl = 2)), !1;
    var i = Error(d(520), { cause: a });
    if (i = xe(i, t), mn === null ? mn = [i] : mn.push(i), Nl !== 4 && (Nl = 2), e === null) return !0;
    a = xe(a, t), t = e;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = n & -n, t.lanes |= l, l = Nc(t.stateNode, a, l), lc(t, l), !1;
        case 1:
          if (e = t.type, i = t.stateNode, (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (gt === null || !gt.has(i))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = $d(n), Fd(
              n,
              l,
              t,
              a
            ), lc(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var _c = Error(d(461)), Ul = !1;
  function Ll(l, e, t, a) {
    e.child = l === null ? ed(e, null, t, a) : Zt(
      e,
      l.child,
      t,
      a
    );
  }
  function Id(l, e, t, a, n) {
    t = t.render;
    var i = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return Yt(e), a = uc(
      l,
      e,
      t,
      c,
      i,
      n
    ), s = cc(), l !== null && !Ul ? (sc(l, e, n), we(l, e, n)) : (el && s && Qu(e), e.flags |= 1, Ll(l, e, a, n), e.child);
  }
  function Pd(l, e, t, a, n) {
    if (l === null) {
      var i = t.type;
      return typeof i == "function" && !Yu(i) && i.defaultProps === void 0 && t.compare === null ? (e.tag = 15, e.type = i, lr(
        l,
        e,
        i,
        a,
        n
      )) : (l = In(
        t.type,
        null,
        a,
        e,
        e.mode,
        n
      ), l.ref = e.ref, l.return = e, e.child = l);
    }
    if (i = l.child, !Uc(l, n)) {
      var c = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ka, t(c, a) && l.ref === e.ref)
        return we(l, e, n);
    }
    return e.flags |= 1, l = Xe(i, a), l.ref = e.ref, l.return = e, e.child = l;
  }
  function lr(l, e, t, a, n) {
    if (l !== null) {
      var i = l.memoizedProps;
      if (Ka(i, a) && l.ref === e.ref)
        if (Ul = !1, e.pendingProps = a = i, Uc(l, n))
          (l.flags & 131072) !== 0 && (Ul = !0);
        else
          return e.lanes = l.lanes, we(l, e, n);
    }
    return Ec(
      l,
      e,
      t,
      a,
      n
    );
  }
  function er(l, e, t, a) {
    var n = a.children, i = l !== null ? l.memoizedState : null;
    if (l === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | t : t, l !== null) {
          for (a = e.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, e.child = null;
        return tr(
          l,
          e,
          i,
          t,
          a
        );
      }
      if ((t & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ti(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? nd(e, i) : tc(), id(e);
      else
        return a = e.lanes = 536870912, tr(
          l,
          e,
          i !== null ? i.baseLanes | t : t,
          t,
          a
        );
    } else
      i !== null ? (ti(e, i.cachePool), nd(e, i), ht(), e.memoizedState = null) : (l !== null && ti(e, null), tc(), ht());
    return Ll(l, e, n, t), e.child;
  }
  function cn(l, e) {
    return l !== null && l.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function tr(l, e, t, a, n) {
    var i = $u();
    return i = i === null ? null : { parent: Dl._currentValue, pool: i }, e.memoizedState = {
      baseLanes: t,
      cachePool: i
    }, l !== null && ti(e, null), tc(), id(e), l !== null && da(l, e, a, !0), e.childLanes = n, null;
  }
  function xi(l, e) {
    return e = pi(
      { mode: e.mode, children: e.children },
      l.mode
    ), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function ar(l, e, t) {
    return Zt(e, l.child, null, t), l = xi(e, e.pendingProps), l.flags |= 2, de(e), e.memoizedState = null, l;
  }
  function Am(l, e, t) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, l === null) {
      if (el) {
        if (a.mode === "hidden")
          return l = xi(e, a), e.lanes = 536870912, cn(null, l);
        if (nc(e), (l = xl) ? (l = yo(
          l,
          be
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: it !== null ? { id: De, overflow: Ce } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Xf(l), t.return = e, e.child = t, Ql = e, xl = null)) : l = null, l === null) throw ct(e);
        return e.lanes = 536870912, null;
      }
      return xi(e, a);
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (nc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = ar(
            l,
            e,
            t
          );
        else if (e.memoizedState !== null)
          e.child = l.child, e.flags |= 128, e = null;
        else throw Error(d(558));
      else if (Ul || da(l, e, t, !1), n = (t & l.childLanes) !== 0, Ul || n) {
        if (a = yl, a !== null && (c = ws(a, t), c !== 0 && c !== i.retryLane))
          throw i.retryLane = c, Rt(l, c), te(a, l, c), _c;
        Mi(), e = ar(
          l,
          e,
          t
        );
      } else
        l = i.treeContext, xl = ze(c.nextSibling), Ql = e, el = !0, ut = null, be = !1, l !== null && Lf(e, l), e = xi(e, a), e.flags |= 4096;
      return e;
    }
    return l = Xe(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function ji(l, e) {
    var t = e.ref;
    if (t === null)
      l !== null && l.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(d(284));
      (l === null || l.ref !== t) && (e.flags |= 4194816);
    }
  }
  function Ec(l, e, t, a, n) {
    return Yt(e), t = uc(
      l,
      e,
      t,
      a,
      void 0,
      n
    ), a = cc(), l !== null && !Ul ? (sc(l, e, n), we(l, e, n)) : (el && a && Qu(e), e.flags |= 1, Ll(l, e, t, n), e.child);
  }
  function nr(l, e, t, a, n, i) {
    return Yt(e), e.updateQueue = null, t = cd(
      e,
      a,
      t,
      n
    ), ud(l), a = cc(), l !== null && !Ul ? (sc(l, e, i), we(l, e, i)) : (el && a && Qu(e), e.flags |= 1, Ll(l, e, t, i), e.child);
  }
  function ir(l, e, t, a, n) {
    if (Yt(e), e.stateNode === null) {
      var i = ua, c = t.contextType;
      typeof c == "object" && c !== null && (i = Zl(c)), i = new t(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = zc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, Iu(e), c = t.contextType, i.context = typeof c == "object" && c !== null ? Zl(c) : ua, i.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Sc(
        e,
        t,
        c,
        a
      ), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && zc.enqueueReplaceState(i, i.state, null), en(e, a, i, n), ln(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (l === null) {
      i = e.stateNode;
      var s = e.memoizedProps, f = Vt(t, s);
      i.props = f;
      var y = i.context, b = t.contextType;
      c = ua, typeof b == "object" && b !== null && (c = Zl(b));
      var _ = t.getDerivedStateFromProps;
      b = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, b || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || y !== c) && Kd(
        e,
        i,
        a,
        c
      ), ft = !1;
      var g = e.memoizedState;
      i.state = g, en(e, a, i, n), ln(), y = e.memoizedState, s || g !== y || ft ? (typeof _ == "function" && (Sc(
        e,
        t,
        _,
        a
      ), y = e.memoizedState), (f = ft || Vd(
        e,
        t,
        f,
        a,
        g,
        y,
        c
      )) ? (b || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = y), i.props = a, i.state = y, i.context = c, a = f) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, Pu(l, e), c = e.memoizedProps, b = Vt(t, c), i.props = b, _ = e.pendingProps, g = i.context, y = t.contextType, f = ua, typeof y == "object" && y !== null && (f = Zl(y)), s = t.getDerivedStateFromProps, (y = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== _ || g !== f) && Kd(
        e,
        i,
        a,
        f
      ), ft = !1, g = e.memoizedState, i.state = g, en(e, a, i, n), ln();
      var j = e.memoizedState;
      c !== _ || g !== j || ft || l !== null && l.dependencies !== null && li(l.dependencies) ? (typeof s == "function" && (Sc(
        e,
        t,
        s,
        a
      ), j = e.memoizedState), (b = ft || Vd(
        e,
        t,
        b,
        a,
        g,
        j,
        f
      ) || l !== null && l.dependencies !== null && li(l.dependencies)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, j, f), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        j,
        f
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = j), i.props = a, i.state = j, i.context = f, a = b) : (typeof i.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, ji(l, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, l !== null && a ? (e.child = Zt(
      e,
      l.child,
      null,
      n
    ), e.child = Zt(
      e,
      null,
      t,
      n
    )) : Ll(l, e, t, n), e.memoizedState = i.state, l = e.child) : l = we(
      l,
      e,
      n
    ), l;
  }
  function ur(l, e, t, a) {
    return qt(), e.flags |= 256, Ll(l, e, t, a), e.child;
  }
  var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Tc(l) {
    return { baseLanes: l, cachePool: Wf() };
  }
  function Mc(l, e, t) {
    return l = l !== null ? l.childLanes & ~t : 0, e && (l |= oe), l;
  }
  function cr(l, e, t) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, c;
    if ((c = i) || (c = l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, l === null) {
      if (el) {
        if (n ? ot(e) : ht(), (l = xl) ? (l = yo(
          l,
          be
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: it !== null ? { id: De, overflow: Ce } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Xf(l), t.return = e, e.child = t, Ql = e, xl = null)) : l = null, l === null) throw ct(e);
        return rs(l) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (ht(), n = e.mode, s = pi(
        { mode: "hidden", children: s },
        n
      ), a = Ht(
        a,
        n,
        t,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Tc(t), a.childLanes = Mc(
        l,
        c,
        t
      ), e.memoizedState = Ac, cn(null, a)) : (ot(e), Oc(e, s));
    }
    var f = l.memoizedState;
    if (f !== null && (s = f.dehydrated, s !== null)) {
      if (i)
        e.flags & 256 ? (ot(e), e.flags &= -257, e = Dc(
          l,
          e,
          t
        )) : e.memoizedState !== null ? (ht(), e.child = l.child, e.flags |= 128, e = null) : (ht(), s = a.fallback, n = e.mode, a = pi(
          { mode: "visible", children: a.children },
          n
        ), s = Ht(
          s,
          n,
          t,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, Zt(
          e,
          l.child,
          null,
          t
        ), a = e.child, a.memoizedState = Tc(t), a.childLanes = Mc(
          l,
          c,
          t
        ), e.memoizedState = Ac, e = cn(null, a));
      else if (ot(e), rs(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var y = c.dgst;
        c = y, a = Error(d(419)), a.stack = "", a.digest = c, ka({ value: a, source: null, stack: null }), e = Dc(
          l,
          e,
          t
        );
      } else if (Ul || da(l, e, t, !1), c = (t & l.childLanes) !== 0, Ul || c) {
        if (c = yl, c !== null && (a = ws(c, t), a !== 0 && a !== f.retryLane))
          throw f.retryLane = a, Rt(l, a), te(c, l, a), _c;
        ds(s) || Mi(), e = Dc(
          l,
          e,
          t
        );
      } else
        ds(s) ? (e.flags |= 192, e.child = l.child, e = null) : (l = f.treeContext, xl = ze(
          s.nextSibling
        ), Ql = e, el = !0, ut = null, be = !1, l !== null && Lf(e, l), e = Oc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (ht(), s = a.fallback, n = e.mode, f = l.child, y = f.sibling, a = Xe(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? s = Xe(
      y,
      s
    ) : (s = Ht(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, cn(null, a), a = e.child, s = l.child.memoizedState, s === null ? s = Tc(t) : (n = s.cachePool, n !== null ? (f = Dl._currentValue, n = n.parent !== f ? { parent: f, pool: f } : n) : n = Wf(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Mc(
      l,
      c,
      t
    ), e.memoizedState = Ac, cn(l.child, a)) : (ot(e), t = l.child, l = t.sibling, t = Xe(t, {
      mode: "visible",
      children: a.children
    }), t.return = e, t.sibling = null, l !== null && (c = e.deletions, c === null ? (e.deletions = [l], e.flags |= 16) : c.push(l)), e.child = t, e.memoizedState = null, t);
  }
  function Oc(l, e) {
    return e = pi(
      { mode: "visible", children: e },
      l.mode
    ), e.return = l, l.child = e;
  }
  function pi(l, e) {
    return l = se(22, l, null, e), l.lanes = 0, l;
  }
  function Dc(l, e, t) {
    return Zt(e, l.child, null, t), l = Oc(
      e,
      e.pendingProps.children
    ), l.flags |= 2, e.memoizedState = null, l;
  }
  function sr(l, e, t) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e), wu(l.return, e, t);
  }
  function Cc(l, e, t, a, n, i) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: t,
      tailMode: n,
      treeForkCount: i
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = t, c.tailMode = n, c.treeForkCount = i);
  }
  function fr(l, e, t) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var c = Tl.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, C(Tl, c), Ll(l, e, a, t), a = el ? Ja : 0, !s && l !== null && (l.flags & 128) !== 0)
      l: for (l = e.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && sr(l, t, e);
        else if (l.tag === 19)
          sr(l, t, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          l = t.alternate, l !== null && si(l) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), Cc(
          e,
          !1,
          n,
          t,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && si(l) === null) {
            e.child = n;
            break;
          }
          l = n.sibling, n.sibling = t, t = n, n = l;
        }
        Cc(
          e,
          !0,
          t,
          null,
          i,
          a
        );
        break;
      case "together":
        Cc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function we(l, e, t) {
    if (l !== null && (e.dependencies = l.dependencies), yt |= e.lanes, (t & e.childLanes) === 0)
      if (l !== null) {
        if (da(
          l,
          e,
          t,
          !1
        ), (t & e.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && e.child !== l.child)
      throw Error(d(153));
    if (e.child !== null) {
      for (l = e.child, t = Xe(l, l.pendingProps), e.child = t, t.return = e; l.sibling !== null; )
        l = l.sibling, t = t.sibling = Xe(l, l.pendingProps), t.return = e;
      t.sibling = null;
    }
    return e.child;
  }
  function Uc(l, e) {
    return (l.lanes & e) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && li(l)));
  }
  function Tm(l, e, t) {
    switch (e.tag) {
      case 3:
        Jl(e, e.stateNode.containerInfo), st(e, Dl, l.memoizedState.cache), qt();
        break;
      case 27:
      case 5:
        Ca(e);
        break;
      case 4:
        Jl(e, e.stateNode.containerInfo);
        break;
      case 10:
        st(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, nc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ot(e), e.flags |= 128, null) : (t & e.child.childLanes) !== 0 ? cr(l, e, t) : (ot(e), l = we(
            l,
            e,
            t
          ), l !== null ? l.sibling : null);
        ot(e);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (t & e.childLanes) !== 0, a || (da(
          l,
          e,
          t,
          !1
        ), a = (t & e.childLanes) !== 0), n) {
          if (a)
            return fr(
              l,
              e,
              t
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), C(Tl, Tl.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, er(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        st(e, Dl, l.memoizedState.cache);
    }
    return we(l, e, t);
  }
  function dr(l, e, t) {
    if (l !== null)
      if (l.memoizedProps !== e.pendingProps)
        Ul = !0;
      else {
        if (!Uc(l, t) && (e.flags & 128) === 0)
          return Ul = !1, Tm(
            l,
            e,
            t
          );
        Ul = (l.flags & 131072) !== 0;
      }
    else
      Ul = !1, el && (e.flags & 1048576) !== 0 && Zf(e, Ja, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        l: {
          var a = e.pendingProps;
          if (l = Xt(e.elementType), e.type = l, typeof l == "function")
            Yu(l) ? (a = Vt(l, a), e.tag = 1, e = ir(
              null,
              e,
              l,
              a,
              t
            )) : (e.tag = 0, e = Ec(
              null,
              e,
              l,
              a,
              t
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === wl) {
                e.tag = 11, e = Id(
                  null,
                  e,
                  l,
                  a,
                  t
                );
                break l;
              } else if (n === W) {
                e.tag = 14, e = Pd(
                  null,
                  e,
                  l,
                  a,
                  t
                );
                break l;
              }
            }
            throw e = qe(l) || l, Error(d(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ec(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 1:
        return a = e.type, n = Vt(
          a,
          e.pendingProps
        ), ir(
          l,
          e,
          a,
          n,
          t
        );
      case 3:
        l: {
          if (Jl(
            e,
            e.stateNode.containerInfo
          ), l === null) throw Error(d(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, Pu(l, e), en(e, a, null, t);
          var c = e.memoizedState;
          if (a = c.cache, st(e, Dl, a), a !== i.cache && Ju(
            e,
            [Dl],
            t,
            !0
          ), ln(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = ur(
                l,
                e,
                a,
                t
              );
              break l;
            } else if (a !== n) {
              n = xe(
                Error(d(424)),
                e
              ), ka(n), e = ur(
                l,
                e,
                a,
                t
              );
              break l;
            } else
              for (l = e.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, xl = ze(l.firstChild), Ql = e, el = !0, ut = null, be = !0, t = ed(
                e,
                null,
                a,
                t
              ), e.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (qt(), a === n) {
              e = we(
                l,
                e,
                t
              );
              break l;
            }
            Ll(l, e, a, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ji(l, e), l === null ? (t = So(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = t : el || (t = e.type, l = e.pendingProps, a = qi(
          $.current
        ).createElement(t), a[Xl] = e, a[$l] = l, Vl(a, t, l), Yl(a), e.stateNode = a) : e.memoizedState = So(
          e.type,
          l.memoizedProps,
          e.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ca(e), l === null && el && (a = e.stateNode = jo(
          e.type,
          e.pendingProps,
          $.current
        ), Ql = e, be = !0, n = xl, bt(e.type) ? (os = n, xl = ze(a.firstChild)) : xl = n), Ll(
          l,
          e,
          e.pendingProps.children,
          t
        ), ji(l, e), l === null && (e.flags |= 4194304), e.child;
      case 5:
        return l === null && el && ((n = a = xl) && (a = n1(
          a,
          e.type,
          e.pendingProps,
          be
        ), a !== null ? (e.stateNode = a, Ql = e, xl = ze(a.firstChild), be = !1, n = !0) : n = !1), n || ct(e)), Ca(e), n = e.type, i = e.pendingProps, c = l !== null ? l.memoizedProps : null, a = i.children, cs(n, i) ? a = null : c !== null && cs(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = uc(
          l,
          e,
          jm,
          null,
          null,
          t
        ), Sn._currentValue = n), ji(l, e), Ll(l, e, a, t), e.child;
      case 6:
        return l === null && el && ((l = t = xl) && (t = i1(
          t,
          e.pendingProps,
          be
        ), t !== null ? (e.stateNode = t, Ql = e, xl = null, l = !0) : l = !1), l || ct(e)), null;
      case 13:
        return cr(l, e, t);
      case 4:
        return Jl(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, l === null ? e.child = Zt(
          e,
          null,
          a,
          t
        ) : Ll(l, e, a, t), e.child;
      case 11:
        return Id(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 7:
        return Ll(
          l,
          e,
          e.pendingProps,
          t
        ), e.child;
      case 8:
        return Ll(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 12:
        return Ll(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 10:
        return a = e.pendingProps, st(e, e.type, a.value), Ll(l, e, a.children, t), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Yt(e), n = Zl(n), a = a(n), e.flags |= 1, Ll(l, e, a, t), e.child;
      case 14:
        return Pd(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 15:
        return lr(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 19:
        return fr(l, e, t);
      case 31:
        return Am(l, e, t);
      case 22:
        return er(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        return Yt(e), a = Zl(Dl), l === null ? (n = $u(), n === null && (n = yl, i = ku(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= t), n = i), e.memoizedState = { parent: a, cache: n }, Iu(e), st(e, Dl, n)) : ((l.lanes & t) !== 0 && (Pu(l, e), en(e, null, null, t), ln()), n = l.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), st(e, Dl, a)) : (a = i.cache, st(e, Dl, a), a !== n.cache && Ju(
          e,
          [Dl],
          t,
          !0
        ))), Ll(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(d(156, e.tag));
  }
  function Je(l) {
    l.flags |= 4;
  }
  function Rc(l, e, t, a, n) {
    if ((e = (l.mode & 32) !== 0) && (e = !1), e) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Br()) l.flags |= 8192;
        else
          throw Qt = ni, Fu;
    } else l.flags &= -16777217;
  }
  function rr(l, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ao(e))
      if (Br()) l.flags |= 8192;
      else
        throw Qt = ni, Fu;
  }
  function bi(l, e) {
    e !== null && (l.flags |= 4), l.flags & 16384 && (e = l.tag !== 22 ? Ls() : 536870912, l.lanes |= e, Sa |= e);
  }
  function sn(l, e) {
    if (!el)
      switch (l.tailMode) {
        case "hidden":
          e = l.tail;
          for (var t = null; e !== null; )
            e.alternate !== null && (t = e), e = e.sibling;
          t === null ? l.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function jl(l) {
    var e = l.alternate !== null && l.alternate.child === l.child, t = 0, a = 0;
    if (e)
      for (var n = l.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = t, e;
  }
  function Mm(l, e, t) {
    var a = e.pendingProps;
    switch (Zu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jl(e), null;
      case 1:
        return jl(e), null;
      case 3:
        return t = e.stateNode, a = null, l !== null && (a = l.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Le(Dl), Al(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (fa(e) ? Je(e) : l === null || l.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Vu())), jl(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return l === null ? (Je(e), i !== null ? (jl(e), rr(e, i)) : (jl(e), Rc(
          e,
          n,
          null,
          a,
          t
        ))) : i ? i !== l.memoizedState ? (Je(e), jl(e), rr(e, i)) : (jl(e), e.flags &= -16777217) : (l = l.memoizedProps, l !== a && Je(e), jl(e), Rc(
          e,
          n,
          l,
          a,
          t
        )), null;
      case 27:
        if (Cn(e), t = $.current, n = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== a && Je(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(d(166));
            return jl(e), null;
          }
          l = q.current, fa(e) ? Vf(e) : (l = jo(n, a, t), e.stateNode = l, Je(e));
        }
        return jl(e), null;
      case 5:
        if (Cn(e), n = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== a && Je(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(d(166));
            return jl(e), null;
          }
          if (i = q.current, fa(e))
            Vf(e);
          else {
            var c = qi(
              $.current
            );
            switch (i) {
              case 1:
                i = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? c.createElement(n, { is: a.is }) : c.createElement(n);
                }
            }
            i[Xl] = e, i[$l] = a;
            l: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                i.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = i;
            l: switch (Vl(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Je(e);
          }
        }
        return jl(e), Rc(
          e,
          e.type,
          l === null ? null : l.memoizedProps,
          e.pendingProps,
          t
        ), null;
      case 6:
        if (l && e.stateNode != null)
          l.memoizedProps !== a && Je(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(d(166));
          if (l = $.current, fa(e)) {
            if (l = e.stateNode, t = e.memoizedProps, a = null, n = Ql, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[Xl] = e, l = !!(l.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || co(l.nodeValue, t)), l || ct(e, !0);
          } else
            l = qi(l).createTextNode(
              a
            ), l[Xl] = e, e.stateNode = l;
        }
        return jl(e), null;
      case 31:
        if (t = e.memoizedState, l === null || l.memoizedState !== null) {
          if (a = fa(e), t !== null) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(557));
              l[Xl] = e;
            } else
              qt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jl(e), l = !1;
          } else
            t = Vu(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = t), l = !0;
          if (!l)
            return e.flags & 256 ? (de(e), e) : (de(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(d(558));
        }
        return jl(e), null;
      case 13:
        if (a = e.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = fa(e), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[Xl] = e;
            } else
              qt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jl(e), n = !1;
          } else
            n = Vu(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (de(e), e) : (de(e), null);
        }
        return de(e), (e.flags & 128) !== 0 ? (e.lanes = t, e) : (t = a !== null, l = l !== null && l.memoizedState !== null, t && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), t !== l && t && (e.child.flags |= 8192), bi(e, e.updateQueue), jl(e), null);
      case 4:
        return Al(), l === null && ts(e.stateNode.containerInfo), jl(e), null;
      case 10:
        return Le(e.type), jl(e), null;
      case 19:
        if (E(Tl), a = e.memoizedState, a === null) return jl(e), null;
        if (n = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) sn(a, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = e.child; l !== null; ) {
                if (i = si(l), i !== null) {
                  for (e.flags |= 128, sn(a, !1), l = i.updateQueue, e.updateQueue = l, bi(e, l), e.subtreeFlags = 0, l = t, t = e.child; t !== null; )
                    Gf(t, l), t = t.sibling;
                  return C(
                    Tl,
                    Tl.current & 1 | 2
                  ), el && Qe(e, a.treeForkCount), e.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ne() > Ei && (e.flags |= 128, n = !0, sn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = si(i), l !== null) {
              if (e.flags |= 128, n = !0, l = l.updateQueue, e.updateQueue = l, bi(e, l), sn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !el)
                return jl(e), null;
            } else
              2 * ne() - a.renderingStartTime > Ei && t !== 536870912 && (e.flags |= 128, n = !0, sn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (l = a.last, l !== null ? l.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ne(), l.sibling = null, t = Tl.current, C(
          Tl,
          n ? t & 1 | 2 : t & 1
        ), el && Qe(e, a.treeForkCount), l) : (jl(e), null);
      case 22:
      case 23:
        return de(e), ac(), a = e.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (jl(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : jl(e), t = e.updateQueue, t !== null && bi(e, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== t && (e.flags |= 2048), l !== null && E(Gt), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), e.memoizedState.cache !== t && (e.flags |= 2048), Le(Dl), jl(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, e.tag));
  }
  function Om(l, e) {
    switch (Zu(e), e.tag) {
      case 1:
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 3:
        return Le(Dl), Al(), l = e.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (e.flags = l & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Cn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (de(e), e.alternate === null)
            throw Error(d(340));
          qt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 13:
        if (de(e), l = e.memoizedState, l !== null && l.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(d(340));
          qt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 19:
        return E(Tl), null;
      case 4:
        return Al(), null;
      case 10:
        return Le(e.type), null;
      case 22:
      case 23:
        return de(e), ac(), l !== null && E(Gt), l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 24:
        return Le(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function or(l, e) {
    switch (Zu(e), e.tag) {
      case 3:
        Le(Dl), Al();
        break;
      case 26:
      case 27:
      case 5:
        Cn(e);
        break;
      case 4:
        Al();
        break;
      case 31:
        e.memoizedState !== null && de(e);
        break;
      case 13:
        de(e);
        break;
      case 19:
        E(Tl);
        break;
      case 10:
        Le(e.type);
        break;
      case 22:
      case 23:
        de(e), ac(), l !== null && E(Gt);
        break;
      case 24:
        Le(Dl);
    }
  }
  function fn(l, e) {
    try {
      var t = e.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        t = n;
        do {
          if ((t.tag & l) === l) {
            a = void 0;
            var i = t.create, c = t.inst;
            a = i(), c.destroy = a;
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (s) {
      fl(e, e.return, s);
    }
  }
  function mt(l, e, t) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst, s = c.destroy;
            if (s !== void 0) {
              c.destroy = void 0, n = e;
              var f = t, y = s;
              try {
                y();
              } catch (b) {
                fl(
                  n,
                  f,
                  b
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (b) {
      fl(e, e.return, b);
    }
  }
  function hr(l) {
    var e = l.updateQueue;
    if (e !== null) {
      var t = l.stateNode;
      try {
        ad(e, t);
      } catch (a) {
        fl(l, l.return, a);
      }
    }
  }
  function mr(l, e, t) {
    t.props = Vt(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (a) {
      fl(l, e, a);
    }
  }
  function dn(l, e) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof t == "function" ? l.refCleanup = t(a) : t.current = a;
      }
    } catch (n) {
      fl(l, e, n);
    }
  }
  function Ue(l, e) {
    var t = l.ref, a = l.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          fl(l, e, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          fl(l, e, n);
        }
      else t.current = null;
  }
  function vr(l) {
    var e = l.type, t = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && a.focus();
          break l;
        case "img":
          t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet);
      }
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  function Hc(l, e, t) {
    try {
      var a = l.stateNode;
      Im(a, l.type, t, e), a[$l] = e;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  function yr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && bt(l.type) || l.tag === 4;
  }
  function qc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || yr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && bt(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Bc(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.appendChild(l), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Ye));
    else if (a !== 4 && (a === 27 && bt(l.type) && (t = l.stateNode, e = null), l = l.child, l !== null))
      for (Bc(l, e, t), l = l.sibling; l !== null; )
        Bc(l, e, t), l = l.sibling;
  }
  function Si(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, e ? t.insertBefore(l, e) : t.appendChild(l);
    else if (a !== 4 && (a === 27 && bt(l.type) && (t = l.stateNode), l = l.child, l !== null))
      for (Si(l, e, t), l = l.sibling; l !== null; )
        Si(l, e, t), l = l.sibling;
  }
  function gr(l) {
    var e = l.stateNode, t = l.memoizedProps;
    try {
      for (var a = l.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Vl(e, a, t), e[Xl] = l, e[$l] = t;
    } catch (i) {
      fl(l, l.return, i);
    }
  }
  var ke = !1, Rl = !1, Yc = !1, xr = typeof WeakSet == "function" ? WeakSet : Set, Gl = null;
  function Dm(l, e) {
    if (l = l.containerInfo, is = Li, l = Of(l), Du(l)) {
      if ("selectionStart" in l)
        var t = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          t = (t = l.ownerDocument) && t.defaultView || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break l;
            }
            var c = 0, s = -1, f = -1, y = 0, b = 0, _ = l, g = null;
            e: for (; ; ) {
              for (var j; _ !== t || n !== 0 && _.nodeType !== 3 || (s = c + n), _ !== i || a !== 0 && _.nodeType !== 3 || (f = c + a), _.nodeType === 3 && (c += _.nodeValue.length), (j = _.firstChild) !== null; )
                g = _, _ = j;
              for (; ; ) {
                if (_ === l) break e;
                if (g === t && ++y === n && (s = c), g === i && ++b === a && (f = c), (j = _.nextSibling) !== null) break;
                _ = g, g = _.parentNode;
              }
              _ = j;
            }
            t = s === -1 || f === -1 ? null : { start: s, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (us = { focusedElem: l, selectionRange: t }, Li = !1, Gl = e; Gl !== null; )
      if (e = Gl, l = e.child, (e.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = e, Gl = l;
      else
        for (; Gl !== null; ) {
          switch (e = Gl, i = e.alternate, l = e.flags, e.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (t = 0; t < l.length; t++)
                  n = l[t], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && i !== null) {
                l = void 0, t = e, n = i.memoizedProps, i = i.memoizedState, a = t.stateNode;
                try {
                  var R = Vt(
                    t.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    R,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (G) {
                  fl(
                    t,
                    t.return,
                    G
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = e.stateNode.containerInfo, t = l.nodeType, t === 9)
                  fs(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fs(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (l = e.sibling, l !== null) {
            l.return = e.return, Gl = l;
            break;
          }
          Gl = e.return;
        }
  }
  function jr(l, e, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $e(l, t), a & 4 && fn(5, t);
        break;
      case 1:
        if ($e(l, t), a & 4)
          if (l = t.stateNode, e === null)
            try {
              l.componentDidMount();
            } catch (c) {
              fl(t, t.return, c);
            }
          else {
            var n = Vt(
              t.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                e,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              fl(
                t,
                t.return,
                c
              );
            }
          }
        a & 64 && hr(t), a & 512 && dn(t, t.return);
        break;
      case 3:
        if ($e(l, t), a & 64 && (l = t.updateQueue, l !== null)) {
          if (e = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                e = t.child.stateNode;
                break;
              case 1:
                e = t.child.stateNode;
            }
          try {
            ad(l, e);
          } catch (c) {
            fl(t, t.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && gr(t);
      case 26:
      case 5:
        $e(l, t), e === null && a & 4 && vr(t), a & 512 && dn(t, t.return);
        break;
      case 12:
        $e(l, t);
        break;
      case 31:
        $e(l, t), a & 4 && Sr(l, t);
        break;
      case 13:
        $e(l, t), a & 4 && zr(l, t), a & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = Xm.bind(
          null,
          t
        ), u1(l, t))));
        break;
      case 22:
        if (a = t.memoizedState !== null || ke, !a) {
          e = e !== null && e.memoizedState !== null || Rl, n = ke;
          var i = Rl;
          ke = a, (Rl = e) && !i ? Fe(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : $e(l, t), ke = n, Rl = i;
        }
        break;
      case 30:
        break;
      default:
        $e(l, t);
    }
  }
  function pr(l) {
    var e = l.alternate;
    e !== null && (l.alternate = null, pr(e)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (e = l.stateNode, e !== null && mu(e)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var pl = null, Il = !1;
  function We(l, e, t) {
    for (t = t.child; t !== null; )
      br(l, e, t), t = t.sibling;
  }
  function br(l, e, t) {
    if (ie && typeof ie.onCommitFiberUnmount == "function")
      try {
        ie.onCommitFiberUnmount(Ua, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Rl || Ue(t, e), We(
          l,
          e,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Rl || Ue(t, e);
        var a = pl, n = Il;
        bt(t.type) && (pl = t.stateNode, Il = !1), We(
          l,
          e,
          t
        ), jn(t.stateNode), pl = a, Il = n;
        break;
      case 5:
        Rl || Ue(t, e);
      case 6:
        if (a = pl, n = Il, pl = null, We(
          l,
          e,
          t
        ), pl = a, Il = n, pl !== null)
          if (Il)
            try {
              (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(t.stateNode);
            } catch (i) {
              fl(
                t,
                e,
                i
              );
            }
          else
            try {
              pl.removeChild(t.stateNode);
            } catch (i) {
              fl(
                t,
                e,
                i
              );
            }
        break;
      case 18:
        pl !== null && (Il ? (l = pl, mo(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          t.stateNode
        ), Oa(l)) : mo(pl, t.stateNode));
        break;
      case 4:
        a = pl, n = Il, pl = t.stateNode.containerInfo, Il = !0, We(
          l,
          e,
          t
        ), pl = a, Il = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mt(2, t, e), Rl || mt(4, t, e), We(
          l,
          e,
          t
        );
        break;
      case 1:
        Rl || (Ue(t, e), a = t.stateNode, typeof a.componentWillUnmount == "function" && mr(
          t,
          e,
          a
        )), We(
          l,
          e,
          t
        );
        break;
      case 21:
        We(
          l,
          e,
          t
        );
        break;
      case 22:
        Rl = (a = Rl) || t.memoizedState !== null, We(
          l,
          e,
          t
        ), Rl = a;
        break;
      default:
        We(
          l,
          e,
          t
        );
    }
  }
  function Sr(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Oa(l);
      } catch (t) {
        fl(e, e.return, t);
      }
    }
  }
  function zr(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Oa(l);
      } catch (t) {
        fl(e, e.return, t);
      }
  }
  function Cm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var e = l.stateNode;
        return e === null && (e = l.stateNode = new xr()), e;
      case 22:
        return l = l.stateNode, e = l._retryCache, e === null && (e = l._retryCache = new xr()), e;
      default:
        throw Error(d(435, l.tag));
    }
  }
  function zi(l, e) {
    var t = Cm(l);
    e.forEach(function(a) {
      if (!t.has(a)) {
        t.add(a);
        var n = Qm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Pl(l, e) {
    var t = e.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a], i = l, c = e, s = c;
        l: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (bt(s.type)) {
                pl = s.stateNode, Il = !1;
                break l;
              }
              break;
            case 5:
              pl = s.stateNode, Il = !1;
              break l;
            case 3:
            case 4:
              pl = s.stateNode.containerInfo, Il = !0;
              break l;
          }
          s = s.return;
        }
        if (pl === null) throw Error(d(160));
        br(i, c, n), pl = null, Il = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Nr(e, l), e = e.sibling;
  }
  var Te = null;
  function Nr(l, e) {
    var t = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(e, l), le(l), a & 4 && (mt(3, l, l.return), fn(3, l), mt(5, l, l.return));
        break;
      case 1:
        Pl(e, l), le(l), a & 512 && (Rl || t === null || Ue(t, t.return)), a & 64 && ke && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = Te;
        if (Pl(e, l), le(l), a & 512 && (Rl || t === null || Ue(t, t.return)), a & 4) {
          var i = t !== null ? t.memoizedState : null;
          if (a = l.memoizedState, t === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, t = l.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[qa] || i[Xl] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Vl(i, a, t), i[Xl] = l, Yl(i), a = i;
                      break l;
                    case "link":
                      var c = _o(
                        "link",
                        "href",
                        n
                      ).get(a + (t.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (i = c[s], i.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && i.getAttribute("rel") === (t.rel == null ? null : t.rel) && i.getAttribute("title") === (t.title == null ? null : t.title) && i.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), Vl(i, a, t), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (c = _o(
                        "meta",
                        "content",
                        n
                      ).get(a + (t.content || ""))) {
                        for (s = 0; s < c.length; s++)
                          if (i = c[s], i.getAttribute("content") === (t.content == null ? null : "" + t.content) && i.getAttribute("name") === (t.name == null ? null : t.name) && i.getAttribute("property") === (t.property == null ? null : t.property) && i.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && i.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), Vl(i, a, t), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  i[Xl] = l, Yl(i), a = i;
                }
                l.stateNode = a;
              } else
                Eo(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = No(
                n,
                a,
                l.memoizedProps
              );
          else
            i !== a ? (i === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : i.count--, a === null ? Eo(
              n,
              l.type,
              l.stateNode
            ) : No(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Hc(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        Pl(e, l), le(l), a & 512 && (Rl || t === null || Ue(t, t.return)), t !== null && a & 4 && Hc(
          l,
          l.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (Pl(e, l), le(l), a & 512 && (Rl || t === null || Ue(t, t.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Pt(n, "");
          } catch (R) {
            fl(l, l.return, R);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Hc(
          l,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Yc = !0);
        break;
      case 6:
        if (Pl(e, l), le(l), a & 4) {
          if (l.stateNode === null)
            throw Error(d(162));
          a = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = a;
          } catch (R) {
            fl(l, l.return, R);
          }
        }
        break;
      case 3:
        if (Gi = null, n = Te, Te = Bi(e.containerInfo), Pl(e, l), Te = n, le(l), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Oa(e.containerInfo);
          } catch (R) {
            fl(l, l.return, R);
          }
        Yc && (Yc = !1, _r(l));
        break;
      case 4:
        a = Te, Te = Bi(
          l.stateNode.containerInfo
        ), Pl(e, l), le(l), Te = a;
        break;
      case 12:
        Pl(e, l), le(l);
        break;
      case 31:
        Pl(e, l), le(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zi(l, a)));
        break;
      case 13:
        Pl(e, l), le(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (_i = ne()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zi(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null, y = ke, b = Rl;
        if (ke = y || n, Rl = b || f, Pl(e, l), Rl = b, ke = y, le(l), a & 8192)
          l: for (e = l.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (t === null || f || ke || Rl || Kt(l)), t = null, e = l; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                f = t = e;
                try {
                  if (i = f.stateNode, n)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = f.stateNode;
                    var _ = f.memoizedProps.style, g = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    s.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (R) {
                  fl(f, f.return, R);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                f = e;
                try {
                  f.stateNode.nodeValue = n ? "" : f.memoizedProps;
                } catch (R) {
                  fl(f, f.return, R);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                f = e;
                try {
                  var j = f.stateNode;
                  n ? vo(j, !0) : vo(f.stateNode, !1);
                } catch (R) {
                  fl(f, f.return, R);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === l) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === l) break l;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === l) break l;
              t === e && (t = null), e = e.return;
            }
            t === e && (t = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, zi(l, t))));
        break;
      case 19:
        Pl(e, l), le(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zi(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(e, l), le(l);
    }
  }
  function le(l) {
    var e = l.flags;
    if (e & 2) {
      try {
        for (var t, a = l.return; a !== null; ) {
          if (yr(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(d(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode, i = qc(l);
            Si(l, i, n);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Pt(c, ""), t.flags &= -33);
            var s = qc(l);
            Si(l, s, c);
            break;
          case 3:
          case 4:
            var f = t.stateNode.containerInfo, y = qc(l);
            Bc(
              l,
              y,
              f
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (b) {
        fl(l, l.return, b);
      }
      l.flags &= -3;
    }
    e & 4096 && (l.flags &= -4097);
  }
  function _r(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var e = l;
        _r(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), l = l.sibling;
      }
  }
  function $e(l, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        jr(l, e.alternate, e), e = e.sibling;
  }
  function Kt(l) {
    for (l = l.child; l !== null; ) {
      var e = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          mt(4, e, e.return), Kt(e);
          break;
        case 1:
          Ue(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && mr(
            e,
            e.return,
            t
          ), Kt(e);
          break;
        case 27:
          jn(e.stateNode);
        case 26:
        case 5:
          Ue(e, e.return), Kt(e);
          break;
        case 22:
          e.memoizedState === null && Kt(e);
          break;
        case 30:
          Kt(e);
          break;
        default:
          Kt(e);
      }
      l = l.sibling;
    }
  }
  function Fe(l, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = l, i = e, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Fe(
            n,
            i,
            t
          ), fn(4, i);
          break;
        case 1:
          if (Fe(
            n,
            i,
            t
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              fl(a, a.return, y);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++)
                  td(f[n], s);
            } catch (y) {
              fl(a, a.return, y);
            }
          }
          t && c & 64 && hr(i), dn(i, i.return);
          break;
        case 27:
          gr(i);
        case 26:
        case 5:
          Fe(
            n,
            i,
            t
          ), t && a === null && c & 4 && vr(i), dn(i, i.return);
          break;
        case 12:
          Fe(
            n,
            i,
            t
          );
          break;
        case 31:
          Fe(
            n,
            i,
            t
          ), t && c & 4 && Sr(n, i);
          break;
        case 13:
          Fe(
            n,
            i,
            t
          ), t && c & 4 && zr(n, i);
          break;
        case 22:
          i.memoizedState === null && Fe(
            n,
            i,
            t
          ), dn(i, i.return);
          break;
        case 30:
          break;
        default:
          Fe(
            n,
            i,
            t
          );
      }
      e = e.sibling;
    }
  }
  function Gc(l, e) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && Wa(t));
  }
  function Xc(l, e) {
    l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && Wa(l));
  }
  function Me(l, e, t, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Er(
          l,
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Er(l, e, t, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Me(
          l,
          e,
          t,
          a
        ), n & 2048 && fn(9, e);
        break;
      case 1:
        Me(
          l,
          e,
          t,
          a
        );
        break;
      case 3:
        Me(
          l,
          e,
          t,
          a
        ), n & 2048 && (l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && Wa(l)));
        break;
      case 12:
        if (n & 2048) {
          Me(
            l,
            e,
            t,
            a
          ), l = e.stateNode;
          try {
            var i = e.memoizedProps, c = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              c,
              e.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            fl(e, e.return, f);
          }
        } else
          Me(
            l,
            e,
            t,
            a
          );
        break;
      case 31:
        Me(
          l,
          e,
          t,
          a
        );
        break;
      case 13:
        Me(
          l,
          e,
          t,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, c = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Me(
          l,
          e,
          t,
          a
        ) : rn(l, e) : i._visibility & 2 ? Me(
          l,
          e,
          t,
          a
        ) : (i._visibility |= 2, ja(
          l,
          e,
          t,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Gc(c, e);
        break;
      case 24:
        Me(
          l,
          e,
          t,
          a
        ), n & 2048 && Xc(e.alternate, e);
        break;
      default:
        Me(
          l,
          e,
          t,
          a
        );
    }
  }
  function ja(l, e, t, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = l, c = e, s = t, f = a, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ja(
            i,
            c,
            s,
            f,
            n
          ), fn(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null ? b._visibility & 2 ? ja(
            i,
            c,
            s,
            f,
            n
          ) : rn(
            i,
            c
          ) : (b._visibility |= 2, ja(
            i,
            c,
            s,
            f,
            n
          )), n && y & 2048 && Gc(
            c.alternate,
            c
          );
          break;
        case 24:
          ja(
            i,
            c,
            s,
            f,
            n
          ), n && y & 2048 && Xc(c.alternate, c);
          break;
        default:
          ja(
            i,
            c,
            s,
            f,
            n
          );
      }
      e = e.sibling;
    }
  }
  function rn(l, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = l, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            rn(t, a), n & 2048 && Gc(
              a.alternate,
              a
            );
            break;
          case 24:
            rn(t, a), n & 2048 && Xc(a.alternate, a);
            break;
          default:
            rn(t, a);
        }
        e = e.sibling;
      }
  }
  var on = 8192;
  function pa(l, e, t) {
    if (l.subtreeFlags & on)
      for (l = l.child; l !== null; )
        Ar(
          l,
          e,
          t
        ), l = l.sibling;
  }
  function Ar(l, e, t) {
    switch (l.tag) {
      case 26:
        pa(
          l,
          e,
          t
        ), l.flags & on && l.memoizedState !== null && x1(
          t,
          Te,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        pa(
          l,
          e,
          t
        );
        break;
      case 3:
      case 4:
        var a = Te;
        Te = Bi(l.stateNode.containerInfo), pa(
          l,
          e,
          t
        ), Te = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = on, on = 16777216, pa(
          l,
          e,
          t
        ), on = a) : pa(
          l,
          e,
          t
        ));
        break;
      default:
        pa(
          l,
          e,
          t
        );
    }
  }
  function Tr(l) {
    var e = l.alternate;
    if (e !== null && (l = e.child, l !== null)) {
      e.child = null;
      do
        e = l.sibling, l.sibling = null, l = e;
      while (l !== null);
    }
  }
  function hn(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          Gl = a, Or(
            a,
            l
          );
        }
      Tr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Mr(l), l = l.sibling;
  }
  function Mr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hn(l), l.flags & 2048 && mt(9, l, l.return);
        break;
      case 3:
        hn(l);
        break;
      case 12:
        hn(l);
        break;
      case 22:
        var e = l.stateNode;
        l.memoizedState !== null && e._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (e._visibility &= -3, Ni(l)) : hn(l);
        break;
      default:
        hn(l);
    }
  }
  function Ni(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          Gl = a, Or(
            a,
            l
          );
        }
      Tr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (e = l, e.tag) {
        case 0:
        case 11:
        case 15:
          mt(8, e, e.return), Ni(e);
          break;
        case 22:
          t = e.stateNode, t._visibility & 2 && (t._visibility &= -3, Ni(e));
          break;
        default:
          Ni(e);
      }
      l = l.sibling;
    }
  }
  function Or(l, e) {
    for (; Gl !== null; ) {
      var t = Gl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          mt(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wa(t.memoizedState.cache);
      }
      if (a = t.child, a !== null) a.return = t, Gl = a;
      else
        l: for (t = l; Gl !== null; ) {
          a = Gl;
          var n = a.sibling, i = a.return;
          if (pr(a), a === t) {
            Gl = null;
            break l;
          }
          if (n !== null) {
            n.return = i, Gl = n;
            break l;
          }
          Gl = i;
        }
    }
  }
  var Um = {
    getCacheForType: function(l) {
      var e = Zl(Dl), t = e.data.get(l);
      return t === void 0 && (t = l(), e.data.set(l, t)), t;
    },
    cacheSignal: function() {
      return Zl(Dl).controller.signal;
    }
  }, Rm = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, yl = null, F = null, P = 0, sl = 0, re = null, vt = !1, ba = !1, Qc = !1, Ie = 0, Nl = 0, yt = 0, wt = 0, Zc = 0, oe = 0, Sa = 0, mn = null, ee = null, Lc = !1, _i = 0, Dr = 0, Ei = 1 / 0, Ai = null, gt = null, ql = 0, xt = null, za = null, Pe = 0, Vc = 0, Kc = null, Cr = null, vn = 0, wc = null;
  function he() {
    return (ul & 2) !== 0 && P !== 0 ? P & -P : S.T !== null ? Ic() : Js();
  }
  function Ur() {
    if (oe === 0)
      if ((P & 536870912) === 0 || el) {
        var l = Hn;
        Hn <<= 1, (Hn & 3932160) === 0 && (Hn = 262144), oe = l;
      } else oe = 536870912;
    return l = fe.current, l !== null && (l.flags |= 32), oe;
  }
  function te(l, e, t) {
    (l === yl && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null) && (Na(l, 0), jt(
      l,
      P,
      oe,
      !1
    )), Ha(l, t), ((ul & 2) === 0 || l !== yl) && (l === yl && ((ul & 2) === 0 && (wt |= t), Nl === 4 && jt(
      l,
      P,
      oe,
      !1
    )), Re(l));
  }
  function Rr(l, e, t) {
    if ((ul & 6) !== 0) throw Error(d(327));
    var a = !t && (e & 127) === 0 && (e & l.expiredLanes) === 0 || Ra(l, e), n = a ? Bm(l, e) : kc(l, e, !0), i = a;
    do {
      if (n === 0) {
        ba && !a && jt(l, e, 0, !1);
        break;
      } else {
        if (t = l.current.alternate, i && !Hm(t)) {
          n = kc(l, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, l.errorRecoveryDisabledLanes & i)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            l: {
              var s = l;
              n = mn;
              var f = s.current.memoizedState.isDehydrated;
              if (f && (Na(s, c).flags |= 256), c = kc(
                s,
                c,
                !1
              ), c !== 2) {
                if (Qc && !f) {
                  s.errorRecoveryDisabledLanes |= i, wt |= i, n = 4;
                  break l;
                }
                i = ee, ee = n, i !== null && (ee === null ? ee = i : ee.push.apply(
                  ee,
                  i
                ));
              }
              n = c;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Na(l, 0), jt(l, e, 0, !0);
          break;
        }
        l: {
          switch (a = l, i = n, i) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              jt(
                a,
                e,
                oe,
                !vt
              );
              break l;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((e & 62914560) === e && (n = _i + 300 - ne(), 10 < n)) {
            if (jt(
              a,
              e,
              oe,
              !vt
            ), Bn(a, 0, !0) !== 0) break l;
            Pe = e, a.timeoutHandle = oo(
              Hr.bind(
                null,
                a,
                t,
                ee,
                Ai,
                Lc,
                e,
                oe,
                wt,
                Sa,
                vt,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          Hr(
            a,
            t,
            ee,
            Ai,
            Lc,
            e,
            oe,
            wt,
            Sa,
            vt,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Re(l);
  }
  function Hr(l, e, t, a, n, i, c, s, f, y, b, _, g, j) {
    if (l.timeoutHandle = -1, _ = e.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ye
      }, Ar(
        e,
        i,
        _
      );
      var R = (i & 62914560) === i ? _i - ne() : (i & 4194048) === i ? Dr - ne() : 0;
      if (R = j1(
        _,
        R
      ), R !== null) {
        Pe = i, l.cancelPendingCommit = R(
          Lr.bind(
            null,
            l,
            e,
            i,
            t,
            a,
            n,
            c,
            s,
            f,
            b,
            _,
            null,
            g,
            j
          )
        ), jt(l, i, c, !y);
        return;
      }
    }
    Lr(
      l,
      e,
      i,
      t,
      a,
      n,
      c,
      s,
      f
    );
  }
  function Hm(l) {
    for (var e = l; ; ) {
      var t = e.tag;
      if ((t === 0 || t === 11 || t === 15) && e.flags & 16384 && (t = e.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!ce(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = e.child, e.subtreeFlags & 16384 && t !== null)
        t.return = e, e = t;
      else {
        if (e === l) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function jt(l, e, t, a) {
    e &= ~Zc, e &= ~wt, l.suspendedLanes |= e, l.pingedLanes &= ~e, a && (l.warmLanes |= e), a = l.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - ue(n), c = 1 << i;
      a[i] = -1, n &= ~c;
    }
    t !== 0 && Vs(l, t, e);
  }
  function Ti() {
    return (ul & 6) === 0 ? (yn(0), !1) : !0;
  }
  function Jc() {
    if (F !== null) {
      if (sl === 0)
        var l = F.return;
      else
        l = F, Ze = Bt = null, fc(l), ma = null, Fa = 0, l = F;
      for (; l !== null; )
        or(l.alternate, l), l = l.return;
      F = null;
    }
  }
  function Na(l, e) {
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, e1(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), Pe = 0, Jc(), yl = l, F = t = Xe(l.current, null), P = e, sl = 0, re = null, vt = !1, ba = Ra(l, e), Qc = !1, Sa = oe = Zc = wt = yt = Nl = 0, ee = mn = null, Lc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ue(a), i = 1 << n;
        e |= l[n], a &= ~i;
      }
    return Ie = e, Wn(), t;
  }
  function qr(l, e) {
    w = null, S.H = un, e === ha || e === ai ? (e = If(), sl = 3) : e === Fu ? (e = If(), sl = 4) : sl = e === _c ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, re = e, F === null && (Nl = 1, gi(
      l,
      xe(e, l.current)
    ));
  }
  function Br() {
    var l = fe.current;
    return l === null ? !0 : (P & 4194048) === P ? Se === null : (P & 62914560) === P || (P & 536870912) !== 0 ? l === Se : !1;
  }
  function Yr() {
    var l = S.H;
    return S.H = un, l === null ? un : l;
  }
  function Gr() {
    var l = S.A;
    return S.A = Um, l;
  }
  function Mi() {
    Nl = 4, vt || (P & 4194048) !== P && fe.current !== null || (ba = !0), (yt & 134217727) === 0 && (wt & 134217727) === 0 || yl === null || jt(
      yl,
      P,
      oe,
      !1
    );
  }
  function kc(l, e, t) {
    var a = ul;
    ul |= 2;
    var n = Yr(), i = Gr();
    (yl !== l || P !== e) && (Ai = null, Na(l, e)), e = !1;
    var c = Nl;
    l: do
      try {
        if (sl !== 0 && F !== null) {
          var s = F, f = re;
          switch (sl) {
            case 8:
              Jc(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var y = sl;
              if (sl = 0, re = null, _a(l, s, f, y), t && ba) {
                c = 0;
                break l;
              }
              break;
            default:
              y = sl, sl = 0, re = null, _a(l, s, f, y);
          }
        }
        qm(), c = Nl;
        break;
      } catch (b) {
        qr(l, b);
      }
    while (!0);
    return e && l.shellSuspendCounter++, Ze = Bt = null, ul = a, S.H = n, S.A = i, F === null && (yl = null, P = 0, Wn()), c;
  }
  function qm() {
    for (; F !== null; ) Xr(F);
  }
  function Bm(l, e) {
    var t = ul;
    ul |= 2;
    var a = Yr(), n = Gr();
    yl !== l || P !== e ? (Ai = null, Ei = ne() + 500, Na(l, e)) : ba = Ra(
      l,
      e
    );
    l: do
      try {
        if (sl !== 0 && F !== null) {
          e = F;
          var i = re;
          e: switch (sl) {
            case 1:
              sl = 0, re = null, _a(l, e, i, 1);
              break;
            case 2:
            case 9:
              if ($f(i)) {
                sl = 0, re = null, Qr(e);
                break;
              }
              e = function() {
                sl !== 2 && sl !== 9 || yl !== l || (sl = 7), Re(l);
              }, i.then(e, e);
              break l;
            case 3:
              sl = 7;
              break l;
            case 4:
              sl = 5;
              break l;
            case 7:
              $f(i) ? (sl = 0, re = null, Qr(e)) : (sl = 0, re = null, _a(l, e, i, 7));
              break;
            case 5:
              var c = null;
              switch (F.tag) {
                case 26:
                  c = F.memoizedState;
                case 5:
                case 27:
                  var s = F;
                  if (c ? Ao(c) : s.stateNode.complete) {
                    sl = 0, re = null;
                    var f = s.sibling;
                    if (f !== null) F = f;
                    else {
                      var y = s.return;
                      y !== null ? (F = y, Oi(y)) : F = null;
                    }
                    break e;
                  }
              }
              sl = 0, re = null, _a(l, e, i, 5);
              break;
            case 6:
              sl = 0, re = null, _a(l, e, i, 6);
              break;
            case 8:
              Jc(), Nl = 6;
              break l;
            default:
              throw Error(d(462));
          }
        }
        Ym();
        break;
      } catch (b) {
        qr(l, b);
      }
    while (!0);
    return Ze = Bt = null, S.H = a, S.A = n, ul = t, F !== null ? 0 : (yl = null, P = 0, Wn(), Nl);
  }
  function Ym() {
    for (; F !== null && !ch(); )
      Xr(F);
  }
  function Xr(l) {
    var e = dr(l.alternate, l, Ie);
    l.memoizedProps = l.pendingProps, e === null ? Oi(l) : F = e;
  }
  function Qr(l) {
    var e = l, t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = nr(
          t,
          e,
          e.pendingProps,
          e.type,
          void 0,
          P
        );
        break;
      case 11:
        e = nr(
          t,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          P
        );
        break;
      case 5:
        fc(e);
      default:
        or(t, e), e = F = Gf(e, Ie), e = dr(t, e, Ie);
    }
    l.memoizedProps = l.pendingProps, e === null ? Oi(l) : F = e;
  }
  function _a(l, e, t, a) {
    Ze = Bt = null, fc(e), ma = null, Fa = 0;
    var n = e.return;
    try {
      if (Em(
        l,
        n,
        e,
        t,
        P
      )) {
        Nl = 1, gi(
          l,
          xe(t, l.current)
        ), F = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw F = n, i;
      Nl = 1, gi(
        l,
        xe(t, l.current)
      ), F = null;
      return;
    }
    e.flags & 32768 ? (el || a === 1 ? l = !0 : ba || (P & 536870912) !== 0 ? l = !1 : (vt = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Zr(e, l)) : Oi(e);
  }
  function Oi(l) {
    var e = l;
    do {
      if ((e.flags & 32768) !== 0) {
        Zr(
          e,
          vt
        );
        return;
      }
      l = e.return;
      var t = Mm(
        e.alternate,
        e,
        Ie
      );
      if (t !== null) {
        F = t;
        return;
      }
      if (e = e.sibling, e !== null) {
        F = e;
        return;
      }
      F = e = l;
    } while (e !== null);
    Nl === 0 && (Nl = 5);
  }
  function Zr(l, e) {
    do {
      var t = Om(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, F = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !e && (l = l.sibling, l !== null)) {
        F = l;
        return;
      }
      F = l = t;
    } while (l !== null);
    Nl = 6, F = null;
  }
  function Lr(l, e, t, a, n, i, c, s, f) {
    l.cancelPendingCommit = null;
    do
      Di();
    while (ql !== 0);
    if ((ul & 6) !== 0) throw Error(d(327));
    if (e !== null) {
      if (e === l.current) throw Error(d(177));
      if (i = e.lanes | e.childLanes, i |= qu, gh(
        l,
        t,
        i,
        c,
        s,
        f
      ), l === yl && (F = yl = null, P = 0), za = e, xt = l, Pe = t, Vc = i, Kc = n, Cr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Zm(Un, function() {
        return kr(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, n = D.p, D.p = 2, c = ul, ul |= 4;
        try {
          Dm(l, e, t);
        } finally {
          ul = c, D.p = n, S.T = a;
        }
      }
      ql = 1, Vr(), Kr(), wr();
    }
  }
  function Vr() {
    if (ql === 1) {
      ql = 0;
      var l = xt, e = za, t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        t = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var n = ul;
        ul |= 4;
        try {
          Nr(e, l);
          var i = us, c = Of(l.containerInfo), s = i.focusedElem, f = i.selectionRange;
          if (c !== s && s && s.ownerDocument && Mf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (f !== null && Du(s)) {
              var y = f.start, b = f.end;
              if (b === void 0 && (b = y), "selectionStart" in s)
                s.selectionStart = y, s.selectionEnd = Math.min(
                  b,
                  s.value.length
                );
              else {
                var _ = s.ownerDocument || document, g = _ && _.defaultView || window;
                if (g.getSelection) {
                  var j = g.getSelection(), R = s.textContent.length, G = Math.min(f.start, R), ml = f.end === void 0 ? G : Math.min(f.end, R);
                  !j.extend && G > ml && (c = ml, ml = G, G = c);
                  var m = Tf(
                    s,
                    G
                  ), o = Tf(
                    s,
                    ml
                  );
                  if (m && o && (j.rangeCount !== 1 || j.anchorNode !== m.node || j.anchorOffset !== m.offset || j.focusNode !== o.node || j.focusOffset !== o.offset)) {
                    var v = _.createRange();
                    v.setStart(m.node, m.offset), j.removeAllRanges(), G > ml ? (j.addRange(v), j.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), j.addRange(v));
                  }
                }
              }
            }
            for (_ = [], j = s; j = j.parentNode; )
              j.nodeType === 1 && _.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < _.length; s++) {
              var N = _[s];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Li = !!is, us = is = null;
        } finally {
          ul = n, D.p = a, S.T = t;
        }
      }
      l.current = e, ql = 2;
    }
  }
  function Kr() {
    if (ql === 2) {
      ql = 0;
      var l = xt, e = za, t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        t = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var n = ul;
        ul |= 4;
        try {
          jr(l, e.alternate, e);
        } finally {
          ul = n, D.p = a, S.T = t;
        }
      }
      ql = 3;
    }
  }
  function wr() {
    if (ql === 4 || ql === 3) {
      ql = 0, sh();
      var l = xt, e = za, t = Pe, a = Cr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ql = 5 : (ql = 0, za = xt = null, Jr(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (gt = null), ou(t), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function")
        try {
          ie.onCommitFiberRoot(
            Ua,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = S.T, n = D.p, D.p = 2, S.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          S.T = e, D.p = n;
        }
      }
      (Pe & 3) !== 0 && Di(), Re(l), n = l.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? l === wc ? vn++ : (vn = 0, wc = l) : vn = 0, yn(0);
    }
  }
  function Jr(l, e) {
    (l.pooledCacheLanes &= e) === 0 && (e = l.pooledCache, e != null && (l.pooledCache = null, Wa(e)));
  }
  function Di() {
    return Vr(), Kr(), wr(), kr();
  }
  function kr() {
    if (ql !== 5) return !1;
    var l = xt, e = Vc;
    Vc = 0;
    var t = ou(Pe), a = S.T, n = D.p;
    try {
      D.p = 32 > t ? 32 : t, S.T = null, t = Kc, Kc = null;
      var i = xt, c = Pe;
      if (ql = 0, za = xt = null, Pe = 0, (ul & 6) !== 0) throw Error(d(331));
      var s = ul;
      if (ul |= 4, Mr(i.current), Er(
        i,
        i.current,
        c,
        t
      ), ul = s, yn(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function")
        try {
          ie.onPostCommitFiberRoot(Ua, i);
        } catch {
        }
      return !0;
    } finally {
      D.p = n, S.T = a, Jr(l, e);
    }
  }
  function Wr(l, e, t) {
    e = xe(t, e), e = Nc(l.stateNode, e, 2), l = rt(l, e, 2), l !== null && (Ha(l, 2), Re(l));
  }
  function fl(l, e, t) {
    if (l.tag === 3)
      Wr(l, l, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Wr(
            e,
            l,
            t
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (gt === null || !gt.has(a))) {
            l = xe(t, l), t = $d(2), a = rt(e, t, 2), a !== null && (Fd(
              t,
              a,
              e,
              l
            ), Ha(a, 2), Re(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Wc(l, e, t) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Rm();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(t) || (Qc = !0, n.add(t), l = Gm.bind(null, l, e, t), e.then(l, l));
  }
  function Gm(l, e, t) {
    var a = l.pingCache;
    a !== null && a.delete(e), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, yl === l && (P & t) === t && (Nl === 4 || Nl === 3 && (P & 62914560) === P && 300 > ne() - _i ? (ul & 2) === 0 && Na(l, 0) : Zc |= t, Sa === P && (Sa = 0)), Re(l);
  }
  function $r(l, e) {
    e === 0 && (e = Ls()), l = Rt(l, e), l !== null && (Ha(l, e), Re(l));
  }
  function Xm(l) {
    var e = l.memoizedState, t = 0;
    e !== null && (t = e.retryLane), $r(l, t);
  }
  function Qm(l, e) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(e), $r(l, t);
  }
  function Zm(l, e) {
    return su(l, e);
  }
  var Ci = null, Ea = null, $c = !1, Ui = !1, Fc = !1, pt = 0;
  function Re(l) {
    l !== Ea && l.next === null && (Ea === null ? Ci = Ea = l : Ea = Ea.next = l), Ui = !0, $c || ($c = !0, Vm());
  }
  function yn(l, e) {
    if (!Fc && Ui) {
      Fc = !0;
      do
        for (var t = !1, a = Ci; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              i = (1 << 31 - ue(42 | l) + 1) - 1, i &= n & ~(c & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (t = !0, lo(a, i));
          } else
            i = P, i = Bn(
              a,
              a === yl ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ra(a, i) || (t = !0, lo(a, i));
          a = a.next;
        }
      while (t);
      Fc = !1;
    }
  }
  function Lm() {
    Fr();
  }
  function Fr() {
    Ui = $c = !1;
    var l = 0;
    pt !== 0 && l1() && (l = pt);
    for (var e = ne(), t = null, a = Ci; a !== null; ) {
      var n = a.next, i = Ir(a, e);
      i === 0 ? (a.next = null, t === null ? Ci = n : t.next = n, n === null && (Ea = t)) : (t = a, (l !== 0 || (i & 3) !== 0) && (Ui = !0)), a = n;
    }
    ql !== 0 && ql !== 5 || yn(l), pt !== 0 && (pt = 0);
  }
  function Ir(l, e) {
    for (var t = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, i = l.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - ue(i), s = 1 << c, f = n[c];
      f === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[c] = yh(s, e)) : f <= e && (l.expiredLanes |= s), i &= ~s;
    }
    if (e = yl, t = P, t = Bn(
      l,
      l === e ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, t === 0 || l === e && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && fu(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((t & 3) === 0 || Ra(l, t)) {
      if (e = t & -t, e === l.callbackPriority) return e;
      switch (a !== null && fu(a), ou(t)) {
        case 2:
        case 8:
          t = Qs;
          break;
        case 32:
          t = Un;
          break;
        case 268435456:
          t = Zs;
          break;
        default:
          t = Un;
      }
      return a = Pr.bind(null, l), t = su(t, a), l.callbackPriority = e, l.callbackNode = t, e;
    }
    return a !== null && a !== null && fu(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Pr(l, e) {
    if (ql !== 0 && ql !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var t = l.callbackNode;
    if (Di() && l.callbackNode !== t)
      return null;
    var a = P;
    return a = Bn(
      l,
      l === yl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Rr(l, a, e), Ir(l, ne()), l.callbackNode != null && l.callbackNode === t ? Pr.bind(null, l) : null);
  }
  function lo(l, e) {
    if (Di()) return null;
    Rr(l, e, !0);
  }
  function Vm() {
    t1(function() {
      (ul & 6) !== 0 ? su(
        Xs,
        Lm
      ) : Fr();
    });
  }
  function Ic() {
    if (pt === 0) {
      var l = ra;
      l === 0 && (l = Rn, Rn <<= 1, (Rn & 261888) === 0 && (Rn = 256)), pt = l;
    }
    return pt;
  }
  function eo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qn("" + l);
  }
  function to(l, e) {
    var t = e.ownerDocument.createElement("input");
    return t.name = e.name, t.value = e.value, l.id && t.setAttribute("form", l.id), e.parentNode.insertBefore(t, e), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function Km(l, e, t, a, n) {
    if (e === "submit" && t && t.stateNode === n) {
      var i = eo(
        (n[$l] || null).action
      ), c = a.submitter;
      c && (e = (e = c[$l] || null) ? eo(e.formAction) : c.getAttribute("formAction"), e !== null && (i = e, c = null));
      var s = new Kn(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (pt !== 0) {
                  var f = c ? to(n, c) : new FormData(n);
                  xc(
                    t,
                    {
                      pending: !0,
                      data: f,
                      method: n.method,
                      action: i
                    },
                    null,
                    f
                  );
                }
              } else
                typeof i == "function" && (s.preventDefault(), f = c ? to(n, c) : new FormData(n), xc(
                  t,
                  {
                    pending: !0,
                    data: f,
                    method: n.method,
                    action: i
                  },
                  i,
                  f
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Pc = 0; Pc < Hu.length; Pc++) {
    var ls = Hu[Pc], wm = ls.toLowerCase(), Jm = ls[0].toUpperCase() + ls.slice(1);
    Ae(
      wm,
      "on" + Jm
    );
  }
  Ae(Uf, "onAnimationEnd"), Ae(Rf, "onAnimationIteration"), Ae(Hf, "onAnimationStart"), Ae("dblclick", "onDoubleClick"), Ae("focusin", "onFocus"), Ae("focusout", "onBlur"), Ae(fm, "onTransitionRun"), Ae(dm, "onTransitionStart"), Ae(rm, "onTransitionCancel"), Ae(qf, "onTransitionEnd"), Ft("onMouseEnter", ["mouseout", "mouseover"]), Ft("onMouseLeave", ["mouseout", "mouseover"]), Ft("onPointerEnter", ["pointerout", "pointerover"]), Ft("onPointerLeave", ["pointerout", "pointerover"]), Ot(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ot(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ot("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ot(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ot(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ot(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var gn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), km = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn)
  );
  function ao(l, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var a = l[t], n = a.event;
      a = a.listeners;
      l: {
        var i = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], f = s.instance, y = s.currentTarget;
            if (s = s.listener, f !== i && n.isPropagationStopped())
              break l;
            i = s, n.currentTarget = y;
            try {
              i(n);
            } catch (b) {
              kn(b);
            }
            n.currentTarget = null, i = f;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], f = s.instance, y = s.currentTarget, s = s.listener, f !== i && n.isPropagationStopped())
              break l;
            i = s, n.currentTarget = y;
            try {
              i(n);
            } catch (b) {
              kn(b);
            }
            n.currentTarget = null, i = f;
          }
      }
    }
  }
  function I(l, e) {
    var t = e[hu];
    t === void 0 && (t = e[hu] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    t.has(a) || (no(e, l, 2, !1), t.add(a));
  }
  function es(l, e, t) {
    var a = 0;
    e && (a |= 4), no(
      t,
      l,
      a,
      e
    );
  }
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(l) {
    if (!l[Ri]) {
      l[Ri] = !0, $s.forEach(function(t) {
        t !== "selectionchange" && (km.has(t) || es(t, !1, l), es(t, !0, l));
      });
      var e = l.nodeType === 9 ? l : l.ownerDocument;
      e === null || e[Ri] || (e[Ri] = !0, es("selectionchange", !1, e));
    }
  }
  function no(l, e, t, a) {
    switch (Ro(e)) {
      case 2:
        var n = S1;
        break;
      case 8:
        n = z1;
        break;
      default:
        n = gs;
    }
    t = n.bind(
      null,
      e,
      t,
      l
    ), n = void 0, !Su || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(e, t, {
      capture: !0,
      passive: n
    }) : l.addEventListener(e, t, !0) : n !== void 0 ? l.addEventListener(e, t, {
      passive: n
    }) : l.addEventListener(e, t, !1);
  }
  function as(l, e, t, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = kt(s), c === null) return;
            if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              a = i = c;
              continue l;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ff(function() {
      var y = i, b = pu(t), _ = [];
      l: {
        var g = Bf.get(l);
        if (g !== void 0) {
          var j = Kn, R = l;
          switch (l) {
            case "keypress":
              if (Ln(t) === 0) break l;
            case "keydown":
            case "keyup":
              j = Qh;
              break;
            case "focusin":
              R = "focus", j = Eu;
              break;
            case "focusout":
              R = "blur", j = Eu;
              break;
            case "beforeblur":
            case "afterblur":
              j = Eu;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = of;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Mh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Vh;
              break;
            case Uf:
            case Rf:
            case Hf:
              j = Ch;
              break;
            case qf:
              j = wh;
              break;
            case "scroll":
            case "scrollend":
              j = Ah;
              break;
            case "wheel":
              j = kh;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = mf;
              break;
            case "toggle":
            case "beforetoggle":
              j = $h;
          }
          var G = (e & 4) !== 0, ml = !G && (l === "scroll" || l === "scrollend"), m = G ? g !== null ? g + "Capture" : null : g;
          G = [];
          for (var o = y, v; o !== null; ) {
            var N = o;
            if (v = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || v === null || m === null || (N = Ya(o, m), N != null && G.push(
              xn(o, N, v)
            )), ml) break;
            o = o.return;
          }
          0 < G.length && (g = new j(
            g,
            R,
            null,
            t,
            b
          ), _.push({ event: g, listeners: G }));
        }
      }
      if ((e & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", j = l === "mouseout" || l === "pointerout", g && t !== ju && (R = t.relatedTarget || t.fromElement) && (kt(R) || R[Jt]))
            break l;
          if ((j || g) && (g = b.window === b ? b : (g = b.ownerDocument) ? g.defaultView || g.parentWindow : window, j ? (R = t.relatedTarget || t.toElement, j = y, R = R ? kt(R) : null, R !== null && (ml = O(R), G = R.tag, R !== ml || G !== 5 && G !== 27 && G !== 6) && (R = null)) : (j = null, R = y), j !== R)) {
            if (G = of, N = "onMouseLeave", m = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (G = mf, N = "onPointerLeave", m = "onPointerEnter", o = "pointer"), ml = j == null ? g : Ba(j), v = R == null ? g : Ba(R), g = new G(
              N,
              o + "leave",
              j,
              t,
              b
            ), g.target = ml, g.relatedTarget = v, N = null, kt(b) === y && (G = new G(
              m,
              o + "enter",
              R,
              t,
              b
            ), G.target = v, G.relatedTarget = ml, N = G), ml = N, j && R)
              e: {
                for (G = Wm, m = j, o = R, v = 0, N = m; N; N = G(N))
                  v++;
                N = 0;
                for (var Y = o; Y; Y = G(Y))
                  N++;
                for (; 0 < v - N; )
                  m = G(m), v--;
                for (; 0 < N - v; )
                  o = G(o), N--;
                for (; v--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    G = m;
                    break e;
                  }
                  m = G(m), o = G(o);
                }
                G = null;
              }
            else G = null;
            j !== null && io(
              _,
              g,
              j,
              G,
              !1
            ), R !== null && ml !== null && io(
              _,
              ml,
              R,
              G,
              !0
            );
          }
        }
        l: {
          if (g = y ? Ba(y) : window, j = g.nodeName && g.nodeName.toLowerCase(), j === "select" || j === "input" && g.type === "file")
            var al = Sf;
          else if (pf(g))
            if (zf)
              al = um;
            else {
              al = nm;
              var B = am;
            }
          else
            j = g.nodeName, !j || j.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && xu(y.elementType) && (al = Sf) : al = im;
          if (al && (al = al(l, y))) {
            bf(
              _,
              al,
              t,
              b
            );
            break l;
          }
          B && B(l, g, y), l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && gu(g, "number", g.value);
        }
        switch (B = y ? Ba(y) : window, l) {
          case "focusin":
            (pf(B) || B.contentEditable === "true") && (aa = B, Cu = y, wa = null);
            break;
          case "focusout":
            wa = Cu = aa = null;
            break;
          case "mousedown":
            Uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uu = !1, Df(_, t, b);
            break;
          case "selectionchange":
            if (sm) break;
          case "keydown":
          case "keyup":
            Df(_, t, b);
        }
        var k;
        if (Tu)
          l: {
            switch (l) {
              case "compositionstart":
                var ll = "onCompositionStart";
                break l;
              case "compositionend":
                ll = "onCompositionEnd";
                break l;
              case "compositionupdate":
                ll = "onCompositionUpdate";
                break l;
            }
            ll = void 0;
          }
        else
          ta ? xf(l, t) && (ll = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (ll = "onCompositionStart");
        ll && (vf && t.locale !== "ko" && (ta || ll !== "onCompositionStart" ? ll === "onCompositionEnd" && ta && (k = df()) : (nt = b, zu = "value" in nt ? nt.value : nt.textContent, ta = !0)), B = Hi(y, ll), 0 < B.length && (ll = new hf(
          ll,
          l,
          null,
          t,
          b
        ), _.push({ event: ll, listeners: B }), k ? ll.data = k : (k = jf(t), k !== null && (ll.data = k)))), (k = Ih ? Ph(l, t) : lm(l, t)) && (ll = Hi(y, "onBeforeInput"), 0 < ll.length && (B = new hf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          b
        ), _.push({
          event: B,
          listeners: ll
        }), B.data = k)), Km(
          _,
          l,
          y,
          t,
          b
        );
      }
      ao(_, e);
    });
  }
  function xn(l, e, t) {
    return {
      instance: l,
      listener: e,
      currentTarget: t
    };
  }
  function Hi(l, e) {
    for (var t = e + "Capture", a = []; l !== null; ) {
      var n = l, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ya(l, t), n != null && a.unshift(
        xn(l, n, i)
      ), n = Ya(l, e), n != null && a.push(
        xn(l, n, i)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Wm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function io(l, e, t, a, n) {
    for (var i = e._reactName, c = []; t !== null && t !== a; ) {
      var s = t, f = s.alternate, y = s.stateNode;
      if (s = s.tag, f !== null && f === a) break;
      s !== 5 && s !== 26 && s !== 27 || y === null || (f = y, n ? (y = Ya(t, i), y != null && c.unshift(
        xn(t, y, f)
      )) : n || (y = Ya(t, i), y != null && c.push(
        xn(t, y, f)
      ))), t = t.return;
    }
    c.length !== 0 && l.push({ event: e, listeners: c });
  }
  var $m = /\r\n?/g, Fm = /\u0000|\uFFFD/g;
  function uo(l) {
    return (typeof l == "string" ? l : "" + l).replace($m, `
`).replace(Fm, "");
  }
  function co(l, e) {
    return e = uo(e), uo(l) === e;
  }
  function hl(l, e, t, a, n, i) {
    switch (t) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Pt(l, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Pt(l, "" + a);
        break;
      case "className":
        Gn(l, "class", a);
        break;
      case "tabIndex":
        Gn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gn(l, t, a);
        break;
      case "style":
        cf(l, a, i);
        break;
      case "data":
        if (e !== "object") {
          Gn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(t);
          break;
        }
        a = Qn("" + a), l.setAttribute(t, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (t === "formAction" ? (e !== "input" && hl(l, e, "name", n.name, n, null), hl(
            l,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), hl(
            l,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), hl(
            l,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (hl(l, e, "encType", n.encType, n, null), hl(l, e, "method", n.method, n, null), hl(l, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(t);
          break;
        }
        a = Qn("" + a), l.setAttribute(t, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ye);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        t = Qn("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "" + a) : l.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(t, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, a) : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(t, a) : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(t) : l.setAttribute(t, a);
        break;
      case "popover":
        I("beforetoggle", l), I("toggle", l), Yn(l, "popover", a);
        break;
      case "xlinkActuate":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Be(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Be(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Be(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Be(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Yn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = _h.get(t) || t, Yn(l, t, a));
    }
  }
  function ns(l, e, t, a, n, i) {
    switch (t) {
      case "style":
        cf(l, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pt(l, a) : (typeof a == "number" || typeof a == "bigint") && Pt(l, "" + a);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ye);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Fs.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (n = t.endsWith("Capture"), e = t.slice(2, n ? t.length - 7 : void 0), i = l[$l] || null, i = i != null ? i[t] : null, typeof i == "function" && l.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(e, a, n);
              break l;
            }
            t in l ? l[t] = a : a === !0 ? l.setAttribute(t, "") : Yn(l, t, a);
          }
    }
  }
  function Vl(l, e, t) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", l), I("load", l);
        var a = !1, n = !1, i;
        for (i in t)
          if (t.hasOwnProperty(i)) {
            var c = t[i];
            if (c != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, e));
                default:
                  hl(l, e, i, c, t, null);
              }
          }
        n && hl(l, e, "srcSet", t.srcSet, t, null), a && hl(l, e, "src", t.src, t, null);
        return;
      case "input":
        I("invalid", l);
        var s = i = c = n = null, f = null, y = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var b = t[a];
            if (b != null)
              switch (a) {
                case "name":
                  n = b;
                  break;
                case "type":
                  c = b;
                  break;
                case "checked":
                  f = b;
                  break;
                case "defaultChecked":
                  y = b;
                  break;
                case "value":
                  i = b;
                  break;
                case "defaultValue":
                  s = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(d(137, e));
                  break;
                default:
                  hl(l, e, a, b, t, null);
              }
          }
        tf(
          l,
          i,
          s,
          f,
          y,
          c,
          n,
          !1
        );
        return;
      case "select":
        I("invalid", l), a = c = i = null;
        for (n in t)
          if (t.hasOwnProperty(n) && (s = t[n], s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                hl(l, e, n, s, t, null);
            }
        e = i, t = c, l.multiple = !!a, e != null ? It(l, !!a, e, !1) : t != null && It(l, !!a, t, !0);
        return;
      case "textarea":
        I("invalid", l), i = n = a = null;
        for (c in t)
          if (t.hasOwnProperty(c) && (s = t[c], s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(d(91));
                break;
              default:
                hl(l, e, c, s, t, null);
            }
        nf(l, a, n, i);
        return;
      case "option":
        for (f in t)
          t.hasOwnProperty(f) && (a = t[f], a != null) && (f === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : hl(l, e, f, a, t, null));
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gn.length; a++)
          I(gn[a], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in t)
          if (t.hasOwnProperty(y) && (a = t[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, e));
              default:
                hl(l, e, y, a, t, null);
            }
        return;
      default:
        if (xu(e)) {
          for (b in t)
            t.hasOwnProperty(b) && (a = t[b], a !== void 0 && ns(
              l,
              e,
              b,
              a,
              t,
              void 0
            ));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && (a = t[s], a != null && hl(l, e, s, a, t, null));
  }
  function Im(l, e, t, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, c = null, s = null, f = null, y = null, b = null;
        for (j in t) {
          var _ = t[j];
          if (t.hasOwnProperty(j) && _ != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = _;
              default:
                a.hasOwnProperty(j) || hl(l, e, j, null, a, _);
            }
        }
        for (var g in a) {
          var j = a[g];
          if (_ = t[g], a.hasOwnProperty(g) && (j != null || _ != null))
            switch (g) {
              case "type":
                i = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                y = j;
                break;
              case "defaultChecked":
                b = j;
                break;
              case "value":
                c = j;
                break;
              case "defaultValue":
                s = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(d(137, e));
                break;
              default:
                j !== _ && hl(
                  l,
                  e,
                  g,
                  j,
                  a,
                  _
                );
            }
        }
        yu(
          l,
          c,
          s,
          f,
          y,
          b,
          i,
          n
        );
        return;
      case "select":
        j = c = s = g = null;
        for (i in t)
          if (f = t[i], t.hasOwnProperty(i) && f != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = f;
              default:
                a.hasOwnProperty(i) || hl(
                  l,
                  e,
                  i,
                  null,
                  a,
                  f
                );
            }
        for (n in a)
          if (i = a[n], f = t[n], a.hasOwnProperty(n) && (i != null || f != null))
            switch (n) {
              case "value":
                g = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                c = i;
              default:
                i !== f && hl(
                  l,
                  e,
                  n,
                  i,
                  a,
                  f
                );
            }
        e = s, t = c, a = j, g != null ? It(l, !!t, g, !1) : !!a != !!t && (e != null ? It(l, !!t, e, !0) : It(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        j = g = null;
        for (s in t)
          if (n = t[s], t.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                hl(l, e, s, null, a, n);
            }
        for (c in a)
          if (n = a[c], i = t[c], a.hasOwnProperty(c) && (n != null || i != null))
            switch (c) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== i && hl(l, e, c, n, a, i);
            }
        af(l, g, j);
        return;
      case "option":
        for (var R in t)
          g = t[R], t.hasOwnProperty(R) && g != null && !a.hasOwnProperty(R) && (R === "selected" ? l.selected = !1 : hl(
            l,
            e,
            R,
            null,
            a,
            g
          ));
        for (f in a)
          g = a[f], j = t[f], a.hasOwnProperty(f) && g !== j && (g != null || j != null) && (f === "selected" ? l.selected = g && typeof g != "function" && typeof g != "symbol" : hl(
            l,
            e,
            f,
            g,
            a,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in t)
          g = t[G], t.hasOwnProperty(G) && g != null && !a.hasOwnProperty(G) && hl(l, e, G, null, a, g);
        for (y in a)
          if (g = a[y], j = t[y], a.hasOwnProperty(y) && g !== j && (g != null || j != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(d(137, e));
                break;
              default:
                hl(
                  l,
                  e,
                  y,
                  g,
                  a,
                  j
                );
            }
        return;
      default:
        if (xu(e)) {
          for (var ml in t)
            g = t[ml], t.hasOwnProperty(ml) && g !== void 0 && !a.hasOwnProperty(ml) && ns(
              l,
              e,
              ml,
              void 0,
              a,
              g
            );
          for (b in a)
            g = a[b], j = t[b], !a.hasOwnProperty(b) || g === j || g === void 0 && j === void 0 || ns(
              l,
              e,
              b,
              g,
              a,
              j
            );
          return;
        }
    }
    for (var m in t)
      g = t[m], t.hasOwnProperty(m) && g != null && !a.hasOwnProperty(m) && hl(l, e, m, null, a, g);
    for (_ in a)
      g = a[_], j = t[_], !a.hasOwnProperty(_) || g === j || g == null && j == null || hl(l, e, _, g, a, j);
  }
  function so(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Pm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, e = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
        var n = t[a], i = n.transferSize, c = n.initiatorType, s = n.duration;
        if (i && s && so(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var f = t[a], y = f.startTime;
            if (y > s) break;
            var b = f.transferSize, _ = f.initiatorType;
            b && so(_) && (f = f.responseEnd, c += b * (f < s ? 1 : (s - y) / (f - y)));
          }
          if (--a, e += 8 * (i + c) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return e / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var is = null, us = null;
  function qi(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function fo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ro(l, e) {
    if (l === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && e === "foreignObject" ? 0 : l;
  }
  function cs(l, e) {
    return l === "textarea" || l === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function l1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === ss ? !1 : (ss = l, !0) : (ss = null, !1);
  }
  var oo = typeof setTimeout == "function" ? setTimeout : void 0, e1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ho = typeof Promise == "function" ? Promise : void 0, t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ho < "u" ? function(l) {
    return ho.resolve(null).then(l).catch(a1);
  } : oo;
  function a1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function bt(l) {
    return l === "head";
  }
  function mo(l, e) {
    var t = e, a = 0;
    do {
      var n = t.nextSibling;
      if (l.removeChild(t), n && n.nodeType === 8)
        if (t = n.data, t === "/$" || t === "/&") {
          if (a === 0) {
            l.removeChild(n), Oa(e);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          a++;
        else if (t === "html")
          jn(l.ownerDocument.documentElement);
        else if (t === "head") {
          t = l.ownerDocument.head, jn(t);
          for (var i = t.firstChild; i; ) {
            var c = i.nextSibling, s = i.nodeName;
            i[qa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || t.removeChild(i), i = c;
          }
        } else
          t === "body" && jn(l.ownerDocument.body);
      t = n;
    } while (t);
    Oa(e);
  }
  function vo(l, e) {
    var t = l;
    l = 0;
    do {
      var a = t.nextSibling;
      if (t.nodeType === 1 ? e ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (e ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), a && a.nodeType === 8)
        if (t = a.data, t === "/$") {
          if (l === 0) break;
          l--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || l++;
      t = a;
    } while (t);
  }
  function fs(l) {
    var e = l.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (e = e.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(t), mu(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function n1(l, e, t, a) {
    for (; l.nodeType === 1; ) {
      var n = t;
      if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[qa])
          switch (e) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (i = l.getAttribute("rel"), i === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (i = l.getAttribute("src"), (i !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (e === "input" && l.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === i)
          return l;
      } else return l;
      if (l = ze(l.nextSibling), l === null) break;
    }
    return null;
  }
  function i1(l, e, t) {
    if (e === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ze(l.nextSibling), l === null)) return null;
    return l;
  }
  function yo(l, e) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = ze(l.nextSibling), l === null)) return null;
    return l;
  }
  function ds(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function rs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function u1(l, e) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = e;
    else if (l.data !== "$?" || t.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), t.removeEventListener("DOMContentLoaded", a);
      };
      t.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ze(l) {
    for (; l != null; l = l.nextSibling) {
      var e = l.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = l.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return l;
  }
  var os = null;
  function go(l) {
    l = l.nextSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (e === 0)
            return ze(l.nextSibling);
          e--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || e++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function xo(l) {
    l = l.previousSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (e === 0) return l;
          e--;
        } else t !== "/$" && t !== "/&" || e++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function jo(l, e, t) {
    switch (e = qi(t), l) {
      case "html":
        if (l = e.documentElement, !l) throw Error(d(452));
        return l;
      case "head":
        if (l = e.head, !l) throw Error(d(453));
        return l;
      case "body":
        if (l = e.body, !l) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function jn(l) {
    for (var e = l.attributes; e.length; )
      l.removeAttributeNode(e[0]);
    mu(l);
  }
  var Ne = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Set();
  function Bi(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var lt = D.d;
  D.d = {
    f: c1,
    r: s1,
    D: f1,
    C: d1,
    L: r1,
    m: o1,
    X: m1,
    S: h1,
    M: v1
  };
  function c1() {
    var l = lt.f(), e = Ti();
    return l || e;
  }
  function s1(l) {
    var e = Wt(l);
    e !== null && e.tag === 5 && e.type === "form" ? qd(e) : lt.r(l);
  }
  var Aa = typeof document > "u" ? null : document;
  function bo(l, e, t) {
    var a = Aa;
    if (a && typeof e == "string" && e) {
      var n = ye(e);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), po.has(n) || (po.add(n), l = { rel: l, crossOrigin: t, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Vl(e, "link", l), Yl(e), a.head.appendChild(e)));
    }
  }
  function f1(l) {
    lt.D(l), bo("dns-prefetch", l, null);
  }
  function d1(l, e) {
    lt.C(l, e), bo("preconnect", l, e);
  }
  function r1(l, e, t) {
    lt.L(l, e, t);
    var a = Aa;
    if (a && l && e) {
      var n = 'link[rel="preload"][as="' + ye(e) + '"]';
      e === "image" && t && t.imageSrcSet ? (n += '[imagesrcset="' + ye(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (n += '[imagesizes="' + ye(
        t.imageSizes
      ) + '"]')) : n += '[href="' + ye(l) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = Ta(l);
          break;
        case "script":
          i = Ma(l);
      }
      Ne.has(i) || (l = U(
        {
          rel: "preload",
          href: e === "image" && t && t.imageSrcSet ? void 0 : l,
          as: e
        },
        t
      ), Ne.set(i, l), a.querySelector(n) !== null || e === "style" && a.querySelector(pn(i)) || e === "script" && a.querySelector(bn(i)) || (e = a.createElement("link"), Vl(e, "link", l), Yl(e), a.head.appendChild(e)));
    }
  }
  function o1(l, e) {
    lt.m(l, e);
    var t = Aa;
    if (t && l) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ye(a) + '"][href="' + ye(l) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ma(l);
      }
      if (!Ne.has(i) && (l = U({ rel: "modulepreload", href: l }, e), Ne.set(i, l), t.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(bn(i)))
              return;
        }
        a = t.createElement("link"), Vl(a, "link", l), Yl(a), t.head.appendChild(a);
      }
    }
  }
  function h1(l, e, t) {
    lt.S(l, e, t);
    var a = Aa;
    if (a && l) {
      var n = $t(a).hoistableStyles, i = Ta(l);
      e = e || "default";
      var c = n.get(i);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          pn(i)
        ))
          s.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": e },
            t
          ), (t = Ne.get(i)) && hs(l, t);
          var f = c = a.createElement("link");
          Yl(f), Vl(f, "link", l), f._p = new Promise(function(y, b) {
            f.onload = y, f.onerror = b;
          }), f.addEventListener("load", function() {
            s.loading |= 1;
          }), f.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Yi(c, e, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: s
        }, n.set(i, c);
      }
    }
  }
  function m1(l, e) {
    lt.X(l, e);
    var t = Aa;
    if (t && l) {
      var a = $t(t).hoistableScripts, n = Ma(l), i = a.get(n);
      i || (i = t.querySelector(bn(n)), i || (l = U({ src: l, async: !0 }, e), (e = Ne.get(n)) && ms(l, e), i = t.createElement("script"), Yl(i), Vl(i, "link", l), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function v1(l, e) {
    lt.M(l, e);
    var t = Aa;
    if (t && l) {
      var a = $t(t).hoistableScripts, n = Ma(l), i = a.get(n);
      i || (i = t.querySelector(bn(n)), i || (l = U({ src: l, async: !0, type: "module" }, e), (e = Ne.get(n)) && ms(l, e), i = t.createElement("script"), Yl(i), Vl(i, "link", l), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function So(l, e, t, a) {
    var n = (n = $.current) ? Bi(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (e = Ta(t.href), t = $t(
          n
        ).hoistableStyles, a = t.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = Ta(t.href);
          var i = $t(
            n
          ).hoistableStyles, c = i.get(l);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(l, c), (i = n.querySelector(
            pn(l)
          )) && !i._p && (c.instance = i, c.state.loading = 5), Ne.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Ne.set(l, t), i || y1(
            n,
            l,
            t,
            c.state
          ))), e && a === null)
            throw Error(d(528, ""));
          return c;
        }
        if (e && a !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return e = t.async, t = t.src, typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ma(t), t = $t(
          n
        ).hoistableScripts, a = t.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, l));
    }
  }
  function Ta(l) {
    return 'href="' + ye(l) + '"';
  }
  function pn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function zo(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function y1(l, e, t, a) {
    l.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = l.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vl(e, "link", t), Yl(e), l.head.appendChild(e));
  }
  function Ma(l) {
    return '[src="' + ye(l) + '"]';
  }
  function bn(l) {
    return "script[async]" + l;
  }
  function No(l, e, t) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ye(t.href) + '"]'
          );
          if (a)
            return e.instance = a, Yl(a), a;
          var n = U({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Yl(a), Vl(a, "style", n), Yi(a, t.precedence, l), e.instance = a;
        case "stylesheet":
          n = Ta(t.href);
          var i = l.querySelector(
            pn(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Yl(i), i;
          a = zo(t), (n = Ne.get(n)) && hs(a, n), i = (l.ownerDocument || l).createElement("link"), Yl(i);
          var c = i;
          return c._p = new Promise(function(s, f) {
            c.onload = s, c.onerror = f;
          }), Vl(i, "link", a), e.state.loading |= 4, Yi(i, t.precedence, l), e.instance = i;
        case "script":
          return i = Ma(t.src), (n = l.querySelector(
            bn(i)
          )) ? (e.instance = n, Yl(n), n) : (a = t, (n = Ne.get(i)) && (a = U({}, t), ms(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Yl(n), Vl(n, "link", a), l.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(d(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Yi(a, t.precedence, l));
    return e.instance;
  }
  function Yi(l, e, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === e) i = s;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = t.nodeType === 9 ? t.head : t, e.insertBefore(l, e.firstChild));
  }
  function hs(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.title == null && (l.title = e.title);
  }
  function ms(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.integrity == null && (l.integrity = e.integrity);
  }
  var Gi = null;
  function _o(l, e, t) {
    if (Gi === null) {
      var a = /* @__PURE__ */ new Map(), n = Gi = /* @__PURE__ */ new Map();
      n.set(t, a);
    } else
      n = Gi, a = n.get(t), a || (a = /* @__PURE__ */ new Map(), n.set(t, a));
    if (a.has(l)) return a;
    for (a.set(l, null), t = t.getElementsByTagName(l), n = 0; n < t.length; n++) {
      var i = t[n];
      if (!(i[qa] || i[Xl] || l === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(e) || "";
        c = l + c;
        var s = a.get(c);
        s ? s.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function Eo(l, e, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      e === "title" ? l.querySelector("head > title") : null
    );
  }
  function g1(l, e, t) {
    if (t === 1 || e.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (l = e.disabled, typeof e.precedence == "string" && l == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Ao(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function x1(l, e, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Ta(a.href), i = e.querySelector(
          pn(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Xi.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = i, Yl(i);
          return;
        }
        i = e.ownerDocument || e, a = zo(a), (n = Ne.get(n)) && hs(a, n), i = i.createElement("link"), Yl(i);
        var c = i;
        c._p = new Promise(function(s, f) {
          c.onload = s, c.onerror = f;
        }), Vl(i, "link", a), t.instance = i;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Xi.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  var vs = 0;
  function j1(l, e) {
    return l.stylesheets && l.count === 0 && Zi(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Zi(l, l.stylesheets), l.unsuspend) {
          var i = l.unsuspend;
          l.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < l.imgBytes && vs === 0 && (vs = 62500 * Pm());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zi(l, l.stylesheets), l.unsuspend)) {
            var i = l.unsuspend;
            l.unsuspend = null, i();
          }
        },
        (l.imgBytes > vs ? 50 : 800) + e
      );
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Xi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zi(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Qi = null;
  function Zi(l, e) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Qi = /* @__PURE__ */ new Map(), e.forEach(p1, l), Qi = null, Xi.call(l));
  }
  function p1(l, e) {
    if (!(e.state.loading & 4)) {
      var t = Qi.get(l);
      if (t) var a = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Qi.set(l, t);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), a = c);
        }
        a && t.set(null, a);
      }
      n = e.instance, c = n.getAttribute("data-precedence"), i = t.get(c) || a, i === a && t.set(null, n), t.set(c, n), this.count++, a = Xi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), e.state.loading |= 4;
    }
  }
  var Sn = {
    $$typeof: El,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function b1(l, e, t, a, n, i, c, s, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.hiddenUpdates = du(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function To(l, e, t, a, n, i, c, s, f, y, b, _) {
    return l = new b1(
      l,
      e,
      t,
      c,
      f,
      y,
      b,
      _,
      s
    ), e = 1, i === !0 && (e |= 24), i = se(3, null, null, e), l.current = i, i.stateNode = l, e = ku(), e.refCount++, l.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: e
    }, Iu(i), l;
  }
  function Mo(l) {
    return l ? (l = ua, l) : ua;
  }
  function Oo(l, e, t, a, n, i) {
    n = Mo(n), a.context === null ? a.context = n : a.pendingContext = n, a = dt(e), a.payload = { element: t }, i = i === void 0 ? null : i, i !== null && (a.callback = i), t = rt(l, a, e), t !== null && (te(t, l, e), Pa(t, l, e));
  }
  function Do(l, e) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function ys(l, e) {
    Do(l, e), (l = l.alternate) && Do(l, e);
  }
  function Co(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = Rt(l, 67108864);
      e !== null && te(e, l, 67108864), ys(l, 67108864);
    }
  }
  function Uo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = he();
      e = ru(e);
      var t = Rt(l, e);
      t !== null && te(t, l, e), ys(l, e);
    }
  }
  var Li = !0;
  function S1(l, e, t, a) {
    var n = S.T;
    S.T = null;
    var i = D.p;
    try {
      D.p = 2, gs(l, e, t, a);
    } finally {
      D.p = i, S.T = n;
    }
  }
  function z1(l, e, t, a) {
    var n = S.T;
    S.T = null;
    var i = D.p;
    try {
      D.p = 8, gs(l, e, t, a);
    } finally {
      D.p = i, S.T = n;
    }
  }
  function gs(l, e, t, a) {
    if (Li) {
      var n = xs(a);
      if (n === null)
        as(
          l,
          e,
          a,
          Vi,
          t
        ), Ho(l, a);
      else if (_1(
        n,
        l,
        e,
        t,
        a
      ))
        a.stopPropagation();
      else if (Ho(l, a), e & 4 && -1 < N1.indexOf(l)) {
        for (; n !== null; ) {
          var i = Wt(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Mt(i.pendingLanes);
                  if (c !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var f = 1 << 31 - ue(c);
                      s.entanglements[1] |= f, c &= ~f;
                    }
                    Re(i), (ul & 6) === 0 && (Ei = ne() + 500, yn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Rt(i, 2), s !== null && te(s, i, 2), Ti(), ys(i, 2);
            }
          if (i = xs(a), i === null && as(
            l,
            e,
            a,
            Vi,
            t
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        as(
          l,
          e,
          a,
          null,
          t
        );
    }
  }
  function xs(l) {
    return l = pu(l), js(l);
  }
  var Vi = null;
  function js(l) {
    if (Vi = null, l = kt(l), l !== null) {
      var e = O(l);
      if (e === null) l = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (l = Z(e), l !== null) return l;
          l = null;
        } else if (t === 31) {
          if (l = H(e), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          l = null;
        } else e !== l && (l = null);
      }
    }
    return Vi = l, null;
  }
  function Ro(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (fh()) {
          case Xs:
            return 2;
          case Qs:
            return 8;
          case Un:
          case dh:
            return 32;
          case Zs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ps = !1, St = null, zt = null, Nt = null, zn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), _t = [], N1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ho(l, e) {
    switch (l) {
      case "focusin":
      case "focusout":
        St = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        Nt = null;
        break;
      case "pointerover":
      case "pointerout":
        zn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nn.delete(e.pointerId);
    }
  }
  function _n(l, e, t, a, n, i) {
    return l === null || l.nativeEvent !== i ? (l = {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = Wt(e), e !== null && Co(e)), l) : (l.eventSystemFlags |= a, e = l.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), l);
  }
  function _1(l, e, t, a, n) {
    switch (e) {
      case "focusin":
        return St = _n(
          St,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return zt = _n(
          zt,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return Nt = _n(
          Nt,
          l,
          e,
          t,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return zn.set(
          i,
          _n(
            zn.get(i) || null,
            l,
            e,
            t,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Nn.set(
          i,
          _n(
            Nn.get(i) || null,
            l,
            e,
            t,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function qo(l) {
    var e = kt(l.target);
    if (e !== null) {
      var t = O(e);
      if (t !== null) {
        if (e = t.tag, e === 13) {
          if (e = Z(t), e !== null) {
            l.blockedOn = e, ks(l.priority, function() {
              Uo(t);
            });
            return;
          }
        } else if (e === 31) {
          if (e = H(t), e !== null) {
            l.blockedOn = e, ks(l.priority, function() {
              Uo(t);
            });
            return;
          }
        } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Ki(l) {
    if (l.blockedOn !== null) return !1;
    for (var e = l.targetContainers; 0 < e.length; ) {
      var t = xs(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        ju = a, t.target.dispatchEvent(a), ju = null;
      } else
        return e = Wt(t), e !== null && Co(e), l.blockedOn = t, !1;
      e.shift();
    }
    return !0;
  }
  function Bo(l, e, t) {
    Ki(l) && t.delete(e);
  }
  function E1() {
    ps = !1, St !== null && Ki(St) && (St = null), zt !== null && Ki(zt) && (zt = null), Nt !== null && Ki(Nt) && (Nt = null), zn.forEach(Bo), Nn.forEach(Bo);
  }
  function wi(l, e) {
    l.blockedOn === e && (l.blockedOn = null, ps || (ps = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      E1
    )));
  }
  var Ji = null;
  function Yo(l) {
    Ji !== l && (Ji = l, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ji === l && (Ji = null);
        for (var e = 0; e < l.length; e += 3) {
          var t = l[e], a = l[e + 1], n = l[e + 2];
          if (typeof a != "function") {
            if (js(a || t) === null)
              continue;
            break;
          }
          var i = Wt(t);
          i !== null && (l.splice(e, 3), e -= 3, xc(
            i,
            {
              pending: !0,
              data: n,
              method: t.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Oa(l) {
    function e(f) {
      return wi(f, l);
    }
    St !== null && wi(St, l), zt !== null && wi(zt, l), Nt !== null && wi(Nt, l), zn.forEach(e), Nn.forEach(e);
    for (var t = 0; t < _t.length; t++) {
      var a = _t[t];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < _t.length && (t = _t[0], t.blockedOn === null); )
      qo(t), t.blockedOn === null && _t.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (a = 0; a < t.length; a += 3) {
        var n = t[a], i = t[a + 1], c = n[$l] || null;
        if (typeof i == "function")
          c || Yo(t);
        else if (c) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, c = i[$l] || null)
              s = c.formAction;
            else if (js(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), Yo(t);
        }
      }
  }
  function Go() {
    function l(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(t, 20);
    }
    function t() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(t, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function bs(l) {
    this._internalRoot = l;
  }
  ki.prototype.render = bs.prototype.render = function(l) {
    var e = this._internalRoot;
    if (e === null) throw Error(d(409));
    var t = e.current, a = he();
    Oo(t, a, l, e, null, null);
  }, ki.prototype.unmount = bs.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var e = l.containerInfo;
      Oo(l.current, 2, null, l, null, null), Ti(), e[Jt] = null;
    }
  };
  function ki(l) {
    this._internalRoot = l;
  }
  ki.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var e = Js();
      l = { blockedOn: null, target: l, priority: e };
      for (var t = 0; t < _t.length && e !== 0 && e < _t[t].priority; t++) ;
      _t.splice(t, 0, l), t === 0 && qo(l);
    }
  };
  var Xo = p.version;
  if (Xo !== "19.2.8")
    throw Error(
      d(
        527,
        Xo,
        "19.2.8"
      )
    );
  D.findDOMNode = function(l) {
    var e = l._reactInternals;
    if (e === void 0)
      throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
    return l = z(e), l = l !== null ? V(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var A1 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
      try {
        Ua = Wi.inject(
          A1
        ), ie = Wi;
      } catch {
      }
  }
  return An.createRoot = function(l, e) {
    if (!A(l)) throw Error(d(299));
    var t = !1, a = "", n = wd, i = Jd, c = kd;
    return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = To(
      l,
      1,
      !1,
      null,
      null,
      t,
      a,
      null,
      n,
      i,
      c,
      Go
    ), l[Jt] = e.current, ts(l), new bs(e);
  }, An.hydrateRoot = function(l, e, t) {
    if (!A(l)) throw Error(d(299));
    var a = !1, n = "", i = wd, c = Jd, s = kd, f = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (f = t.formState)), e = To(
      l,
      1,
      !0,
      e,
      t ?? null,
      a,
      n,
      f,
      i,
      c,
      s,
      Go
    ), e.context = Mo(null), t = e.current, a = he(), a = ru(a), n = dt(a), n.callback = null, rt(t, n, a), t = a, e.current.lanes = t, Ha(e, t), Re(e), l[Jt] = e.current, ts(l), new ki(e);
  }, An.version = "19.2.8", An;
}
var $o;
function B1() {
  if ($o) return Ns.exports;
  $o = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (p) {
        console.error(p);
      }
  }
  return r(), Ns.exports = q1(), Ns.exports;
}
var Y1 = B1();
const G1 = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lh = (...r) => r.filter((p, x, d) => !!p && p.trim() !== "" && d.indexOf(p) === x).join(" ").trim();
var X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Q1 = J.forwardRef(
  ({
    color: r = "currentColor",
    size: p = 24,
    strokeWidth: x = 2,
    absoluteStrokeWidth: d,
    className: A = "",
    children: O,
    iconNode: Z,
    ...H
  }, M) => J.createElement(
    "svg",
    {
      ref: M,
      ...X1,
      width: p,
      height: p,
      stroke: r,
      strokeWidth: d ? Number(x) * 24 / Number(p) : x,
      className: lh("lucide", A),
      ...H
    },
    [
      ...Z.map(([z, V]) => J.createElement(z, V)),
      ...Array.isArray(O) ? O : [O]
    ]
  )
);
const tl = (r, p) => {
  const x = J.forwardRef(
    ({ className: d, ...A }, O) => J.createElement(Q1, {
      ref: O,
      iconNode: p,
      className: lh(`lucide-${G1(r)}`, d),
      ...A
    })
  );
  return x.displayName = `${r}`, x;
};
const Mn = tl("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Oe = tl("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Ds = tl("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Z1 = tl("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const et = tl("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Dn = tl("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const L1 = tl("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Cs = tl("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Us = tl("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Tn = tl("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const Fi = tl("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Ts = tl("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const V1 = tl("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const eh = tl("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
const Rs = tl("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Hs = tl("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const qs = tl("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
const th = tl("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const K1 = tl("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Pi = tl("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const w1 = tl("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const J1 = tl("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const lu = tl("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const k1 = tl("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const W1 = tl("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const $1 = tl("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const eu = tl("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const On = tl("ShieldAlert", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
const tu = tl("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const au = tl("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const F1 = tl("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const Bs = tl("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const I1 = tl("WalletCards", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
]);
const ah = tl("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Ii = tl("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), $i = {
  option_id: null,
  rationale: "",
  assumptions: "",
  owner: "",
  acceptance_condition: "",
  risk: "",
  evidence_refs: [],
  terminal_route: "conditional_release"
}, nh = [au, eu, Ii, tu, Ds];
function He(...r) {
  return r.filter(Boolean).join(" ");
}
function Fo(r) {
  const p = new Date(r);
  return Number.isNaN(p.getTime()) ? r : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(p);
}
function Io(r, p) {
  const x = new Blob([JSON.stringify(p, null, 2)], {
    type: "application/json"
  }), d = URL.createObjectURL(x), A = document.createElement("a");
  A.href = d, A.download = r, document.body.appendChild(A), A.click(), A.remove(), URL.revokeObjectURL(d);
}
function P1(r) {
  return [
    [!!r.option_id, "Choose an action."],
    [
      r.rationale.trim().length >= 40,
      "Rationale must contain at least 40 characters."
    ],
    [r.owner.trim().length >= 2, "Name an accountable owner."],
    [
      r.assumptions.trim().length >= 10,
      "State a critical assumption."
    ],
    [
      r.acceptance_condition.trim().length >= 10,
      "State a measurable acceptance or stop condition."
    ],
    [r.risk.trim().length >= 10, "State the material risk."]
  ].filter(([x]) => !x).map(([, x]) => x);
}
function Wl({
  children: r,
  variant: p = "primary",
  className: x,
  disabled: d,
  busy: A,
  type: O = "button",
  onClick: Z
}) {
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      className: He("button", `button-${p}`, x),
      disabled: d || A,
      type: O,
      onClick: Z,
      children: [
        A && /* @__PURE__ */ u.jsx("span", { className: "spinner", "aria-hidden": "true" }),
        r
      ]
    }
  );
}
function ih({
  data: r,
  emit: p,
  transparent: x = !1
}) {
  const [d, A] = J.useState(!1);
  return /* @__PURE__ */ u.jsxs("header", { className: He("product-header", x && "header-transparent"), children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "brand",
        type: "button",
        onClick: () => r.authenticated || r.local_mode ? p("navigate", { view: "centre" }) : window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "AI Delivery Arena home",
        children: [
          /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
          /* @__PURE__ */ u.jsxs("span", { className: "brand-copy", children: [
            /* @__PURE__ */ u.jsx("strong", { children: r.product.name }),
            /* @__PURE__ */ u.jsx("small", { children: r.product.tagline })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("nav", { className: "header-actions", "aria-label": "Product actions", children: [
      /* @__PURE__ */ u.jsxs(
        "a",
        {
          className: "header-link desktop-only",
          href: r.links?.github,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ u.jsx(th, { size: 16 }),
            " Source"
          ]
        }
      ),
      r.authenticated || r.local_mode ? /* @__PURE__ */ u.jsxs("div", { className: "account-menu", children: [
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            className: "account-button",
            type: "button",
            "aria-expanded": d,
            onClick: () => A((O) => !O),
            children: [
              /* @__PURE__ */ u.jsx("span", { className: "account-avatar", children: /* @__PURE__ */ u.jsx(Bs, { size: 16 }) }),
              /* @__PURE__ */ u.jsx("span", { className: "desktop-only", children: r.local_mode ? "Local participant" : r.user?.email }),
              /* @__PURE__ */ u.jsx(Dn, { size: 15 })
            ]
          }
        ),
        d && /* @__PURE__ */ u.jsxs("div", { className: "account-popover", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Signed in as" }),
            /* @__PURE__ */ u.jsx("strong", { children: r.local_mode ? "Local preview" : r.user?.email })
          ] }),
          !r.local_mode && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => p("sign_out"), children: [
            /* @__PURE__ */ u.jsx(k1, { size: 15 }),
            " Sign out"
          ] })
        ] })
      ] }) : /* @__PURE__ */ u.jsx("a", { className: "button button-secondary header-cta", href: "#access", children: "Sign in" }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "mobile-menu",
          type: "button",
          "aria-label": "Open menu",
          onClick: () => A((O) => !O),
          children: /* @__PURE__ */ u.jsx(W1, { size: 20 })
        }
      )
    ] })
  ] });
}
function lv({ notice: r }) {
  const [p, x] = J.useState(!!r);
  if (J.useEffect(() => {
    if (x(!!r), !r) return;
    const A = window.setTimeout(() => x(!1), 6e3);
    return () => window.clearTimeout(A);
  }, [r?.kind, r?.message]), !r || !p) return null;
  const d = r.kind === "error" ? Us : Cs;
  return /* @__PURE__ */ u.jsxs("div", { className: He("toast", `toast-${r.kind}`), role: "status", children: [
    /* @__PURE__ */ u.jsx(d, { size: 18 }),
    /* @__PURE__ */ u.jsx("span", { children: r.message }),
    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => x(!1), "aria-label": "Dismiss", children: /* @__PURE__ */ u.jsx(ah, { size: 16 }) })
  ] });
}
function ev({ data: r, emit: p }) {
  const [x, d] = J.useState("signin"), [A, O] = J.useState(""), [Z, H] = J.useState(""), [M, z] = J.useState(!1), [V, U] = J.useState(!1);
  J.useEffect(() => U(!1), [r.notice, r.authenticated]);
  const il = (dl) => {
    dl.preventDefault(), U(!0), p(x === "signin" ? "sign_in" : "sign_up", {
      email: A,
      password: Z,
      consent: M
    });
  };
  return r.configured ? /* @__PURE__ */ u.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "auth-heading", children: [
      /* @__PURE__ */ u.jsxs("span", { className: "status-pill status-live", children: [
        /* @__PURE__ */ u.jsx("span", {}),
        " Public beta"
      ] }),
      /* @__PURE__ */ u.jsx("h2", { children: "Enter the Arena" }),
      /* @__PURE__ */ u.jsx("p", { children: "Private attempts. Durable cloud save. Resume across devices." })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "segmented-control", role: "tablist", children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: x === "signin" ? "active" : "",
          onClick: () => d("signin"),
          role: "tab",
          "aria-selected": x === "signin",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: x === "create" ? "active" : "",
          onClick: () => d("create"),
          role: "tab",
          "aria-selected": x === "create",
          children: "Create account"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("form", { className: "auth-form", onSubmit: il, children: [
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: x === "signin" ? "Email" : "Work email" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(Bs, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "email",
              autoComplete: "email",
              value: A,
              onChange: (dl) => O(dl.target.value),
              placeholder: "you@company.com",
              required: !0
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: x === "signin" ? "Password" : "Create password" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(w1, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "password",
              autoComplete: x === "signin" ? "current-password" : "new-password",
              value: Z,
              onChange: (dl) => H(dl.target.value),
              minLength: x === "create" ? 8 : void 0,
              placeholder: x === "create" ? "At least 8 characters" : "Your password",
              required: !0
            }
          )
        ] })
      ] }),
      x === "create" && /* @__PURE__ */ u.jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "checkbox",
            checked: M,
            onChange: (dl) => z(dl.target.checked)
          }
        ),
        /* @__PURE__ */ u.jsx("span", { children: "I understand this beta stores my synthetic simulation responses." })
      ] }),
      /* @__PURE__ */ u.jsxs(Wl, { type: "submit", className: "button-full", busy: V, children: [
        x === "signin" ? "Continue" : "Create free account",
        !V && /* @__PURE__ */ u.jsx(Oe, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ u.jsx(lu, { size: 15 }),
      /* @__PURE__ */ u.jsx("span", { children: "Encrypted runs. No service-role key in the application." })
    ] })
  ] }) : /* @__PURE__ */ u.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Local preview" }),
    /* @__PURE__ */ u.jsx("h2", { children: "Cloud access is not configured" }),
    /* @__PURE__ */ u.jsx("p", { children: "Add the Supabase and Arena secrets to enable private cloud accounts. The local edition remains available for development." }),
    /* @__PURE__ */ u.jsxs(Wl, { className: "button-full", onClick: () => p("open_local"), children: [
      "Open local edition ",
      /* @__PURE__ */ u.jsx(Oe, { size: 17 })
    ] })
  ] });
}
function tv({ data: r, emit: p }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "marketing-page", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "marketing-hero-wrap", children: [
      /* @__PURE__ */ u.jsx(ih, { data: r, emit: p, transparent: !0 }),
      /* @__PURE__ */ u.jsxs("main", { className: "marketing-hero", children: [
        /* @__PURE__ */ u.jsxs("section", { className: "hero-copy-block", children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Open-source enterprise simulation" }),
          /* @__PURE__ */ u.jsxs("h1", { children: [
            "Enterprise AI leadership,",
            /* @__PURE__ */ u.jsx("span", { children: "tested under pressure." })
          ] }),
          /* @__PURE__ */ u.jsx("p", { children: "Lead a consequential AI initiative through incomplete evidence, stakeholder pressure, delivery crises and a final release decision. Your choices create consequences. Your debrief shows the evidence." }),
          /* @__PURE__ */ u.jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ u.jsxs("a", { className: "button button-light", href: "#access", children: [
              "Start the public beta ",
              /* @__PURE__ */ u.jsx(Oe, { size: 18 })
            ] }),
            /* @__PURE__ */ u.jsxs(
              "a",
              {
                className: "button button-hero-ghost",
                href: r.links?.github,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ u.jsx(th, { size: 17 }),
                  " View source"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "hero-proof", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "20" }),
              /* @__PURE__ */ u.jsx("span", { children: "decisions" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "6" }),
              /* @__PURE__ */ u.jsx("span", { children: "crises" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "7" }),
              /* @__PURE__ */ u.jsx("span", { children: "dimensions" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "90" }),
              /* @__PURE__ */ u.jsx("span", { children: "minutes" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(ev, { data: r, emit: p })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "hero-grid", "aria-hidden": "true" }),
      /* @__PURE__ */ u.jsx("div", { className: "hero-orb hero-orb-one", "aria-hidden": "true" }),
      /* @__PURE__ */ u.jsx("div", { className: "hero-orb hero-orb-two", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "proof-band", children: [
      /* @__PURE__ */ u.jsx("span", { children: "Designed for decisions across" }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("strong", { children: "Value" }),
        /* @__PURE__ */ u.jsx("i", {}),
        /* @__PURE__ */ u.jsx("strong", { children: "Architecture" }),
        /* @__PURE__ */ u.jsx("i", {}),
        /* @__PURE__ */ u.jsx("strong", { children: "Data" }),
        /* @__PURE__ */ u.jsx("i", {}),
        /* @__PURE__ */ u.jsx("strong", { children: "Governance" }),
        /* @__PURE__ */ u.jsx("i", {}),
        /* @__PURE__ */ u.jsx("strong", { children: "Cost" }),
        /* @__PURE__ */ u.jsx("i", {}),
        /* @__PURE__ */ u.jsx("strong", { children: "Adoption" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-section assessment-gap", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "The assessment gap" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Vocabulary is cheap. Judgment under pressure is not." }),
        /* @__PURE__ */ u.jsx("p", { children: "Courses test recall. Interviews reward storytelling. The Arena records what you actually decide when enterprise constraints compete for attention." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "gap-comparison", children: [
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "comparison-label", children: "Conventional assessment" }),
          /* @__PURE__ */ u.jsx("h3", { children: "What do you know?" }),
          /* @__PURE__ */ u.jsxs("ul", { children: [
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(Tn, { size: 10 }),
              " Definitions and frameworks"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(Tn, { size: 10 }),
              " Self-reported experience"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(Tn, { size: 10 }),
              " Answers without consequences"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(Oe, { className: "comparison-arrow", size: 28 }),
        /* @__PURE__ */ u.jsxs("article", { className: "comparison-primary", children: [
          /* @__PURE__ */ u.jsx("span", { className: "comparison-label", children: "AI Delivery Arena" }),
          /* @__PURE__ */ u.jsx("h3", { children: "What do you do?" }),
          /* @__PURE__ */ u.jsxs("ul", { children: [
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(et, { size: 14 }),
              " Evidence-led commitments"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(et, { size: 14 }),
              " Traceable decision records"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(et, { size: 14 }),
              " Consequences and critical gates"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-section method-section", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-lead centered", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "How the Arena works" }),
        /* @__PURE__ */ u.jsx("h2", { children: "One scenario. A complete executive decision loop." })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "method-grid", children: [
        {
          number: "01",
          icon: au,
          title: "Understand",
          copy: "Enter a synthetic enterprise programme with a fixed mandate, incomplete evidence and explicit constraints."
        },
        {
          number: "02",
          icon: eu,
          title: "Investigate",
          copy: "Spend limited credits on the evidence that can materially improve your next decisions."
        },
        {
          number: "03",
          icon: Hs,
          title: "Commit",
          copy: "Record the action, accountable owner, rationale, assumption, risk and measurable stop condition."
        },
        {
          number: "04",
          icon: Rs,
          title: "Experience",
          copy: "Observe stakeholder reactions, operational signals and deterministic crises caused by prior choices."
        }
      ].map(({ number: x, icon: d, title: A, copy: O }) => /* @__PURE__ */ u.jsxs("article", { className: "method-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: x }),
          /* @__PURE__ */ u.jsx(d, { size: 20 })
        ] }),
        /* @__PURE__ */ u.jsx("h3", { children: A }),
        /* @__PURE__ */ u.jsx("p", { children: O })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-section methodology-band", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Transparent by design" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Inspect the scenario, engine and assessment methodology." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("p", { children: "The deterministic engine and scenario fixtures are public. First-attempt scores remain concealed until D20. Results are simulation assessments, not certification or an independently calibrated benchmark." }),
        /* @__PURE__ */ u.jsxs("a", { href: r.links?.github, target: "_blank", rel: "noreferrer", children: [
          "Explore on GitHub ",
          /* @__PURE__ */ u.jsx(eh, { size: 16 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("footer", { className: "marketing-footer", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
        /* @__PURE__ */ u.jsxs("span", { className: "brand-copy", children: [
          /* @__PURE__ */ u.jsx("strong", { children: "AI Delivery Arena" }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            "Hosted Beta v",
            r.product.version
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("a", { href: r.links?.privacy, target: "_blank", rel: "noreferrer", children: "Privacy" }),
        /* @__PURE__ */ u.jsx("a", { href: r.links?.terms, target: "_blank", rel: "noreferrer", children: "Terms" }),
        /* @__PURE__ */ u.jsx("span", { children: "Synthetic scenario" }),
        /* @__PURE__ */ u.jsx("span", { children: "Apache-2.0" })
      ] })
    ] })
  ] });
}
function Da({
  data: r,
  emit: p,
  children: x,
  compact: d = !1
}) {
  return /* @__PURE__ */ u.jsxs("div", { className: He("product-page", d && "product-page-compact"), children: [
    /* @__PURE__ */ u.jsx(ih, { data: r, emit: p }),
    x,
    /* @__PURE__ */ u.jsxs("footer", { className: "product-footer", children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        "Hosted Beta v",
        r.product.version
      ] }),
      /* @__PURE__ */ u.jsx("span", { children: "Simulation assessment. Not independently calibrated." })
    ] })
  ] });
}
function Ms({ children: r }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "empty-state", children: [
    /* @__PURE__ */ u.jsx(qs, { size: 26 }),
    /* @__PURE__ */ u.jsx("p", { children: r })
  ] });
}
function av({ data: r, emit: p }) {
  const d = (r.centre ?? {}).runs ?? [], A = d.find((Q) => Q.status !== "completed"), O = d.filter((Q) => Q.status === "completed").length, [Z, H] = J.useState(null), [M, z] = J.useState(""), [V, U] = J.useState(!1), il = J.useRef(null);
  J.useEffect(() => U(!1), [r.notice, r.screen]);
  const dl = (Q) => p("navigate", {
    view: Q.status === "completed" ? "debrief" : "decision",
    run_id: Q.run_id
  }), _l = async (Q) => {
    const Ol = Q.target.files?.[0];
    if (Ol) {
      U(!0);
      try {
        const Bl = JSON.parse(await Ol.text());
        p("import_run", { document: Bl });
      } catch {
        U(!1), window.alert("That file is not valid JSON.");
      } finally {
        Q.target.value = "";
      }
    }
  };
  return /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "run-centre page-width", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "page-title-row", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Run centre" }),
        /* @__PURE__ */ u.jsx("h1", { children: "Your leadership evidence." }),
        /* @__PURE__ */ u.jsx("p", { children: "Continue an attempt, review a completed debrief or begin a clean run. Committed decisions remain immutable." })
      ] }),
      /* @__PURE__ */ u.jsxs(Wl, { onClick: () => p("open_briefing"), children: [
        "New attempt ",
        /* @__PURE__ */ u.jsx(Oe, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "summary-grid", children: [
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(J1, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: d.length }),
          /* @__PURE__ */ u.jsx("span", { children: "Total attempts" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Fi, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: A ? 1 : 0 }),
          /* @__PURE__ */ u.jsx("span", { children: "In progress" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Ds, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: O }),
          /* @__PURE__ */ u.jsx("span", { children: "Debriefs ready" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Ts, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: r.local_mode ? "Local" : "Cloud" }),
          /* @__PURE__ */ u.jsx("span", { children: "Save mode" })
        ] })
      ] })
    ] }),
    A ? /* @__PURE__ */ u.jsxs("section", { className: "active-run-card", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "active-run-main", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "active-run-kicker", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "status-pill status-progress", children: [
            /* @__PURE__ */ u.jsx("span", {}),
            " In progress"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Last saved ",
            Fo(A.updated_at)
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("h2", { children: A.display_name }),
        /* @__PURE__ */ u.jsxs("p", { children: [
          "Procurement Under Pressure · ",
          A.completed,
          " of ",
          A.total,
          " decisions committed"
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "progress-track", "aria-label": `${A.completed} of ${A.total}`, children: /* @__PURE__ */ u.jsx("span", { style: { width: `${A.completed / A.total * 100}%` } }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "active-run-meta", children: [
          /* @__PURE__ */ u.jsxs("span", { children: [
            Math.round(A.completed / A.total * 100),
            "% complete"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Next D",
            String(A.completed + 1).padStart(2, "0")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "active-run-action", children: [
        /* @__PURE__ */ u.jsx("div", { className: "progress-ring", style: { "--progress": `${A.completed / A.total * 360}deg` }, children: /* @__PURE__ */ u.jsxs("span", { children: [
          A.completed,
          "/",
          A.total
        ] }) }),
        /* @__PURE__ */ u.jsxs(Wl, { onClick: () => dl(A), children: [
          "Continue at D",
          String(A.completed + 1).padStart(2, "0"),
          /* @__PURE__ */ u.jsx(Oe, { size: 17 })
        ] })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("section", { className: "first-run-banner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Your first attempt" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ u.jsx("p", { children: "Five stages, 20 decisions and approximately 90 minutes." })
      ] }),
      /* @__PURE__ */ u.jsxs(Wl, { onClick: () => p("open_briefing"), children: [
        "Read the briefing ",
        /* @__PURE__ */ u.jsx(Oe, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "run-library", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-toolbar", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Attempt library" }),
          /* @__PURE__ */ u.jsx("h2", { children: "All runs" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx(
            "input",
            {
              ref: il,
              className: "visually-hidden",
              type: "file",
              accept: ".json,application/json",
              onChange: _l
            }
          ),
          /* @__PURE__ */ u.jsxs(
            Wl,
            {
              variant: "secondary",
              busy: V,
              onClick: () => il.current?.click(),
              children: [
                /* @__PURE__ */ u.jsx(F1, { size: 16 }),
                " Import local run"
              ]
            }
          )
        ] })
      ] }),
      d.length === 0 ? /* @__PURE__ */ u.jsx(Ms, { children: "No attempts yet. Start with the mission briefing." }) : /* @__PURE__ */ u.jsxs("div", { className: "run-table", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "run-table-head", children: [
          /* @__PURE__ */ u.jsx("span", { children: "Attempt" }),
          /* @__PURE__ */ u.jsx("span", { children: "Progress" }),
          /* @__PURE__ */ u.jsx("span", { children: "Updated" }),
          /* @__PURE__ */ u.jsx("span", {})
        ] }),
        d.map((Q) => /* @__PURE__ */ u.jsxs("article", { className: "run-table-row", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "run-name-cell", children: [
            /* @__PURE__ */ u.jsx("span", { className: He("run-icon", Q.status === "completed" && "run-icon-complete"), children: Q.status === "completed" ? /* @__PURE__ */ u.jsx(et, { size: 16 }) : /* @__PURE__ */ u.jsx(Fi, { size: 16 }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              Z === Q.run_id ? /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "rename-form",
                  onSubmit: (Ol) => {
                    Ol.preventDefault(), p("rename_run", {
                      run_id: Q.run_id,
                      display_name: M
                    }), H(null);
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        autoFocus: !0,
                        value: M,
                        maxLength: 100,
                        onChange: (Ol) => z(Ol.target.value)
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { type: "submit", children: /* @__PURE__ */ u.jsx(et, { size: 15 }) }),
                    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => H(null), children: /* @__PURE__ */ u.jsx(ah, { size: 15 }) })
                  ]
                }
              ) : /* @__PURE__ */ u.jsx("strong", { children: Q.display_name }),
              /* @__PURE__ */ u.jsx("small", { children: Q.run_id })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: He("status-pill", Q.status === "completed" ? "status-complete" : "status-progress"), children: Q.status === "completed" ? "Complete" : "In progress" }),
            /* @__PURE__ */ u.jsxs("small", { children: [
              Q.completed,
              "/",
              Q.total,
              " decisions"
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: Fo(Q.updated_at) }),
            /* @__PURE__ */ u.jsxs("small", { children: [
              "Revision ",
              Q.revision
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "run-row-actions", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Rename ${Q.display_name}`,
                onClick: () => {
                  H(Q.run_id), z(Q.display_name);
                },
                children: /* @__PURE__ */ u.jsx($1, { size: 15 })
              }
            ),
            /* @__PURE__ */ u.jsxs(Wl, { variant: "secondary", onClick: () => dl(Q), children: [
              Q.status === "completed" ? "Open debrief" : "Resume",
              /* @__PURE__ */ u.jsx(L1, { size: 16 })
            ] })
          ] })
        ] }, Q.run_id))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "import-note", children: [
        /* @__PURE__ */ u.jsx(Pi, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: "Local JSON checkpoints are replay-verified before they enter your account." })
      ] })
    ] })
  ] }) });
}
function nv({ data: r, emit: p }) {
  const x = r.briefing ?? {}, d = x.scenario ?? {}, A = x.stages ?? [], [O, Z] = J.useState(!1);
  return J.useEffect(() => Z(!1), [r.screen, r.notice]), /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "briefing-page page-width", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => p("navigate", { view: "centre" }),
        children: [
          /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
          " Run centre"
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("section", { className: "briefing-hero", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Mission briefing" }),
        /* @__PURE__ */ u.jsx("h1", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ u.jsx("p", { children: "You are the accountable AI delivery lead. The executive team expects a defensible recommendation, not automatic agreement with the sponsor." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "briefing-classification", children: [
        /* @__PURE__ */ u.jsx(tu, { size: 17 }),
        "Synthetic enterprise scenario"
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("section", { className: "briefing-metrics", children: [
      ["16 weeks", "Fixed timeline"],
      ["€1.2m", "Budget envelope"],
      ["12 systems", "Fragmented data"],
      ["10 credits", "Investigation"]
    ].map(([H, M]) => /* @__PURE__ */ u.jsxs("article", { children: [
      /* @__PURE__ */ u.jsx("strong", { children: H }),
      /* @__PURE__ */ u.jsx("span", { children: M })
    ] }, M)) }),
    /* @__PURE__ */ u.jsxs("section", { className: "briefing-body", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "briefing-main", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Your mandate" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Turn ambiguity into a defensible release recommendation." }),
        /* @__PURE__ */ u.jsx("p", { className: "briefing-premise", children: d.premise }),
        /* @__PURE__ */ u.jsx("h3", { children: "Known constraints" }),
        /* @__PURE__ */ u.jsx("div", { className: "constraint-grid", children: [
          ["Commercial pressure", "The sponsor has already announced an aggressive savings ambition."],
          ["Model approval", "The preferred external LLM has not been approved."],
          ["Data sovereignty", "European data-processing constraints apply."],
          ["Decision authority", "Governance ownership and the meaning of business release remain unresolved."]
        ].map(([H, M], z) => /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("span", { children: String(z + 1).padStart(2, "0") }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: H }),
            /* @__PURE__ */ u.jsx("p", { children: M })
          ] })
        ] }, H)) }),
        /* @__PURE__ */ u.jsx("h3", { children: "Programme stages" }),
        /* @__PURE__ */ u.jsx("div", { className: "briefing-stages", children: A.map((H, M) => {
          const z = nh[M] ?? Tn;
          return /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(z, { size: 17 }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsxs("small", { children: [
                "Stage ",
                M + 1
              ] }),
              /* @__PURE__ */ u.jsx("strong", { children: H.label }),
              /* @__PURE__ */ u.jsx("p", { children: H.purpose })
            ] })
          ] }, H.id);
        }) })
      ] }),
      /* @__PURE__ */ u.jsxs("aside", { className: "briefing-rules", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Before you enter" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Commit means permanent." }),
        /* @__PURE__ */ u.jsxs("ul", { children: [
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(eu, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Investigate deliberately" }),
              "Evidence windows can close."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Hs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Make the record complete" }),
              "Owner, rationale, assumption, risk and stop condition."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Rs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "No live coaching" }),
              "Scores and preferred paths stay concealed."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Ds, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Debrief after D20" }),
              "Critical gates and criterion evidence then unlock."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "time-box", children: [
          /* @__PURE__ */ u.jsx(Fi, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "75–90 minutes" }),
            /* @__PURE__ */ u.jsx("span", { children: "Save and resume at any point" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs(
          Wl,
          {
            className: "button-full",
            busy: O,
            onClick: () => {
              Z(!0), p("start_run");
            },
            children: [
              "Enter the Arena ",
              !O && /* @__PURE__ */ u.jsx(Oe, { size: 17 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function iv({ stages: r, run: p }) {
  const x = new Set((p.history ?? []).map((d) => d.decision_id));
  return /* @__PURE__ */ u.jsx("div", { className: "stage-rail", "aria-label": "Programme stages", children: r.map((d, A) => {
    const O = (d.decision_ids ?? []).every((M) => x.has(M)), Z = d.id === p.stage?.id, H = nh[A] ?? Tn;
    return /* @__PURE__ */ u.jsxs("div", { className: He("stage-step", O && "done", Z && "active"), children: [
      /* @__PURE__ */ u.jsx("span", { className: "stage-step-icon", children: O ? /* @__PURE__ */ u.jsx(et, { size: 14 }) : /* @__PURE__ */ u.jsx(H, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Stage ",
          A + 1
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: d.label })
      ] })
    ] }, d.id);
  }) });
}
function uv({ data: r, emit: p }) {
  const x = r.run ?? {}, d = x.current_decision ?? {}, A = `${x.run_id}:${d.id}`, [O, Z] = J.useState(r.draft ?? $i), [H, M] = J.useState("evidence"), [z, V] = J.useState("all"), [U, il] = J.useState(""), [dl, _l] = J.useState(null), [Q, Ol] = J.useState("Draft synchronized"), [Bl, _e] = J.useState([]), El = J.useRef(JSON.stringify(r.draft ?? $i)), wl = J.useRef(A);
  J.useEffect(() => {
    if (wl.current !== A) {
      wl.current = A;
      const T = r.draft ?? $i;
      Z(T), El.current = JSON.stringify(T), _e([]), _l(null);
    }
  }, [A, r.draft]), J.useEffect(() => {
    (r.notice || r.sync) && _l(null), r.sync?.decision_id === d.id && (El.current = JSON.stringify(O), Ol("Draft saved"));
  }, [r.notice, r.sync?.saved_at]), J.useEffect(() => {
    const T = JSON.stringify(O);
    if (T === El.current) return;
    Ol("Unsaved changes");
    const gl = window.setTimeout(() => {
      El.current = T, Ol("Saving…"), p("save_draft", {
        run_id: x.run_id,
        decision_id: d.id,
        expected_revision: x.revision,
        draft: O
      });
    }, 1200);
    return () => window.clearTimeout(gl);
  }, [O, d.id, p, x.revision, x.run_id]);
  const ae = (x.evidence ?? []).filter(
    (T) => ["available", "verified"].includes(T.state)
  ), Hl = (x.crises ?? []).find(
    (T) => T.linked_decision === d.id
  ), W = (x.evidence ?? []).filter((T) => {
    const gl = `${T.id} ${T.title}`.toLowerCase().includes(U.toLowerCase()), Sl = z === "all" || z === "available" && ["available", "verified"].includes(T.state) || z === "requested" && T.state === "requested" || z === "requestable" && T.state === "requestable";
    return gl && Sl;
  }), bl = (T, gl) => Z((Sl) => ({ ...Sl, [T]: gl })), me = () => {
    const T = P1(O);
    if (_e(T), T.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    _l("review"), p("review_decision", {
      run_id: x.run_id,
      draft: O
    });
  };
  return /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "cockpit", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "cockpit-topbar", children: [
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => p("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 15 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ u.jsx(iv, { stages: r.stages ?? [], run: x }),
      /* @__PURE__ */ u.jsxs("div", { className: "save-state", children: [
        /* @__PURE__ */ u.jsx(Ts, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: Q }),
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Rev ",
          x.revision
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "decision-titlebar", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
          x.stage?.label,
          " · Week ",
          d.week
        ] }),
        /* @__PURE__ */ u.jsxs("h1", { children: [
          d.id,
          ". ",
          d.title
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "decision-progress", children: [
        /* @__PURE__ */ u.jsx("strong", { children: Number(x.progress?.completed ?? 0) + 1 }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "of ",
          x.progress?.total
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "cockpit-grid", children: [
      /* @__PURE__ */ u.jsxs("section", { className: "decision-workspace", children: [
        /* @__PURE__ */ u.jsxs("article", { className: "situation-panel", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "panel-label", children: [
            /* @__PURE__ */ u.jsx(au, { size: 15 }),
            " Decision moment"
          ] }),
          /* @__PURE__ */ u.jsx("p", { className: "decision-moment", children: d.moment }),
          /* @__PURE__ */ u.jsxs("div", { className: "known-info", children: [
            /* @__PURE__ */ u.jsx(Pi, { size: 17 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Known information" }),
              /* @__PURE__ */ u.jsx("p", { children: d.information })
            ] })
          ] })
        ] }),
        Hl && /* @__PURE__ */ u.jsxs("article", { className: "crisis-alert", children: [
          /* @__PURE__ */ u.jsx(On, { size: 20 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: Hl.observation })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("section", { className: "action-section", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "step-number", children: "1" }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { children: "Choose your action" }),
              /* @__PURE__ */ u.jsx("p", { children: "Select the stance you are prepared to defend." })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "option-list", role: "radiogroup", "aria-label": "Action choices", children: (d.options ?? []).map((T) => /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": O.option_id === T.id,
              className: He("option-card", O.option_id === T.id && "selected"),
              onClick: () => bl("option_id", T.id),
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "option-letter", children: T.id }),
                /* @__PURE__ */ u.jsx("span", { className: "option-label", children: T.label }),
                /* @__PURE__ */ u.jsx("span", { className: "radio-mark", children: O.option_id === T.id && /* @__PURE__ */ u.jsx(et, { size: 14 }) })
              ]
            },
            T.id
          )) })
        ] }),
        /* @__PURE__ */ u.jsxs("section", { className: "decision-form", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "step-number", children: "2" }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { children: "Build the decision record" }),
              /* @__PURE__ */ u.jsx("p", { children: d.required_response })
            ] })
          ] }),
          Bl.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "validation-summary", role: "alert", children: [
            /* @__PURE__ */ u.jsx(Us, { size: 18 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Complete the record before review" }),
              /* @__PURE__ */ u.jsx("ul", { children: Bl.map((T) => /* @__PURE__ */ u.jsx("li", { children: T }, T)) })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("label", { className: "field field-large", children: [
            /* @__PURE__ */ u.jsxs("span", { children: [
              "Rationale ",
              /* @__PURE__ */ u.jsxs("small", { children: [
                O.rationale.trim().length,
                "/40 minimum"
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(
              "textarea",
              {
                value: O.rationale,
                onChange: (T) => bl("rationale", T.target.value),
                placeholder: "State what you will do, why it is proportionate now, and what evidence supports it."
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "form-grid form-grid-owner", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "Accountable owner" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  value: O.owner,
                  onChange: (T) => bl("owner", T.target.value),
                  placeholder: "Named role or person"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "Acceptance or stop condition" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  value: O.acceptance_condition,
                  onChange: (T) => bl("acceptance_condition", T.target.value),
                  placeholder: "A measurable threshold or condition"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "form-grid", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "Critical assumption" }),
              /* @__PURE__ */ u.jsx(
                "textarea",
                {
                  value: O.assumptions,
                  onChange: (T) => bl("assumptions", T.target.value),
                  placeholder: "What must remain true?"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "Material risk" }),
              /* @__PURE__ */ u.jsx(
                "textarea",
                {
                  value: O.risk,
                  onChange: (T) => bl("risk", T.target.value),
                  placeholder: "What could invalidate this action?"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("fieldset", { className: "citation-field", children: [
            /* @__PURE__ */ u.jsxs("legend", { children: [
              "Evidence cited ",
              /* @__PURE__ */ u.jsx("small", { children: "Optional, but must already be available" })
            ] }),
            ae.length === 0 ? /* @__PURE__ */ u.jsx("p", { children: "No evidence is currently available to cite." }) : /* @__PURE__ */ u.jsx("div", { className: "citation-list", children: ae.map((T) => {
              const gl = O.evidence_refs.includes(T.id);
              return /* @__PURE__ */ u.jsxs("label", { className: gl ? "selected" : "", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: gl,
                    onChange: () => bl(
                      "evidence_refs",
                      gl ? O.evidence_refs.filter((Sl) => Sl !== T.id) : [...O.evidence_refs, T.id]
                    )
                  }
                ),
                /* @__PURE__ */ u.jsxs("span", { children: [
                  /* @__PURE__ */ u.jsx("strong", { children: T.id }),
                  T.title
                ] })
              ] }, T.id);
            }) })
          ] }),
          d.id === "D20" && O.option_id === "F" && /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
            /* @__PURE__ */ u.jsx("span", { children: "Custom final route" }),
            /* @__PURE__ */ u.jsx(
              "select",
              {
                value: O.terminal_route,
                onChange: (T) => bl("terminal_route", T.target.value),
                children: ["conditional_release", "reduced_scope", "extended_pilot", "pause", "full_release"].map((T) => /* @__PURE__ */ u.jsx("option", { value: T, children: T.replaceAll("_", " ").replace(/\b\w/g, (gl) => gl.toUpperCase()) }, T))
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "decision-actions", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(Ts, { size: 15 }),
              /* @__PURE__ */ u.jsx("span", { children: Q })
            ] }),
            /* @__PURE__ */ u.jsxs(Wl, { busy: dl === "review", onClick: me, children: [
              "Review decision ",
              !dl && /* @__PURE__ */ u.jsx(Oe, { size: 17 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("aside", { className: "context-panel", children: [
        /* @__PURE__ */ u.jsx("div", { className: "context-tabs", role: "tablist", children: [
          ["evidence", "Evidence", Z1],
          ["signals", "Signals", Ii],
          ["record", "Record", K1]
        ].map(([T, gl, Sl]) => /* @__PURE__ */ u.jsxs(
          "button",
          {
            type: "button",
            className: H === T ? "active" : "",
            role: "tab",
            "aria-selected": H === T,
            onClick: () => M(T),
            children: [
              /* @__PURE__ */ u.jsx(Sl, { size: 15 }),
              " ",
              gl
            ]
          },
          T
        )) }),
        H === "evidence" && /* @__PURE__ */ u.jsxs("div", { className: "context-content evidence-desk", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "credit-card", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(I1, { size: 18 }),
              /* @__PURE__ */ u.jsx("span", { children: "Investigation credits" })
            ] }),
            /* @__PURE__ */ u.jsxs("strong", { children: [
              x.credits?.remaining,
              /* @__PURE__ */ u.jsxs("small", { children: [
                " / ",
                x.credits?.total
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "credit-track", children: /* @__PURE__ */ u.jsx("span", { style: { width: `${x.credits?.remaining / x.credits?.total * 100}%` } }) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "evidence-tools", children: [
            /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx(eu, { size: 15 }),
              /* @__PURE__ */ u.jsx("input", { value: U, onChange: (T) => il(T.target.value), placeholder: "Search evidence" })
            ] }),
            /* @__PURE__ */ u.jsxs("select", { value: z, onChange: (T) => V(T.target.value), children: [
              /* @__PURE__ */ u.jsx("option", { value: "all", children: "All status" }),
              /* @__PURE__ */ u.jsx("option", { value: "available", children: "Available" }),
              /* @__PURE__ */ u.jsx("option", { value: "requested", children: "In transit" }),
              /* @__PURE__ */ u.jsx("option", { value: "requestable", children: "Not requested" })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "evidence-list", children: W.map((T) => /* @__PURE__ */ u.jsx(
            cv,
            {
              item: T,
              credits: x.credits?.remaining,
              busy: dl === `evidence:${T.id}`,
              onRequest: () => {
                _l(`evidence:${T.id}`), p("request_evidence", {
                  run_id: x.run_id,
                  evidence_id: T.id,
                  expected_revision: x.revision,
                  draft: O
                });
              }
            },
            T.id
          )) })
        ] }),
        H === "signals" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Operational view" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Observable signals" })
          ] }),
          (x.operational_signals ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Ms, { children: "No consequence signals have been observed yet." }) : /* @__PURE__ */ u.jsx("div", { className: "signal-list", children: (x.operational_signals ?? []).slice(-8).reverse().map((T, gl) => /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx(Ii, { size: 15 }),
            /* @__PURE__ */ u.jsx("p", { children: T })
          ] }, `${T}-${gl}`)) }),
          Hl && /* @__PURE__ */ u.jsxs("div", { className: "context-crisis", children: [
            /* @__PURE__ */ u.jsx(On, { size: 16 }),
            /* @__PURE__ */ u.jsx("p", { children: Hl.observation })
          ] })
        ] }),
        H === "record" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Immutable ledger" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Committed record" })
          ] }),
          (x.history ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Ms, { children: "Committed decisions will appear here." }) : /* @__PURE__ */ u.jsx("div", { className: "history-list", children: [...x.history ?? []].reverse().map((T) => /* @__PURE__ */ u.jsxs("details", { children: [
            /* @__PURE__ */ u.jsxs("summary", { children: [
              /* @__PURE__ */ u.jsx("span", { children: T.decision_id }),
              /* @__PURE__ */ u.jsx("strong", { children: T.title }),
              /* @__PURE__ */ u.jsx(Dn, { size: 15 })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("small", { children: "Committed action" }),
              /* @__PURE__ */ u.jsx("p", { children: T.choice_label }),
              /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
              /* @__PURE__ */ u.jsx("p", { children: T.rationale })
            ] })
          ] }, T.decision_id)) }),
          /* @__PURE__ */ u.jsxs("div", { className: "ledger-chip", children: [
            /* @__PURE__ */ u.jsx(lu, { size: 14 }),
            " ",
            x.ledger?.entries,
            " ledger entries"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function cv({
  item: r,
  credits: p,
  busy: x,
  onRequest: d
}) {
  const [A, O] = J.useState(["available", "verified"].includes(r.state)), Z = {
    available: "Available",
    verified: "Verified",
    requested: "In transit",
    requestable: "Not requested",
    unavailable: "Unavailable"
  }, H = r.state === "requestable" && p >= r.cost;
  return /* @__PURE__ */ u.jsxs("article", { className: He("evidence-item", `evidence-${r.state}`), children: [
    /* @__PURE__ */ u.jsxs("button", { className: "evidence-summary", type: "button", onClick: () => O((M) => !M), children: [
      /* @__PURE__ */ u.jsx("span", { className: "evidence-state-icon", children: ["available", "verified"].includes(r.state) ? /* @__PURE__ */ u.jsx(et, { size: 14 }) : r.state === "requested" ? /* @__PURE__ */ u.jsx(Fi, { size: 14 }) : /* @__PURE__ */ u.jsx(qs, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("small", { children: r.id }),
        /* @__PURE__ */ u.jsx("strong", { children: r.title })
      ] }),
      /* @__PURE__ */ u.jsx("span", { className: "evidence-status", children: Z[r.state] ?? r.state }),
      /* @__PURE__ */ u.jsx(Dn, { size: 15, className: A ? "rotated" : "" })
    ] }),
    A && /* @__PURE__ */ u.jsxs("div", { className: "evidence-detail", children: [
      r.reveal ? /* @__PURE__ */ u.jsx("p", { children: r.reveal }) : r.state === "requested" ? /* @__PURE__ */ u.jsxs("p", { children: [
        "Requested week ",
        r.request_week,
        ". Expected week ",
        r.arrival_week,
        "."
      ] }) : /* @__PURE__ */ u.jsx("p", { children: "The finding remains sealed until requested and available." }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { children: r.cost === 0 ? "Included" : `${r.cost} credit` }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          r.lead_time_weeks,
          " week lead"
        ] })
      ] }),
      H && /* @__PURE__ */ u.jsxs(Wl, { variant: "secondary", className: "button-full", busy: x, onClick: d, children: [
        "Request evidence ",
        !x && /* @__PURE__ */ u.jsx(Oe, { size: 15 })
      ] }),
      r.state === "requestable" && !H && /* @__PURE__ */ u.jsx("small", { className: "insufficient-credit", children: "Insufficient investigation credits" })
    ] })
  ] });
}
function sv({ data: r, emit: p }) {
  const x = r.run ?? {}, d = x.current_decision ?? {}, A = r.draft ?? $i, O = (d.options ?? []).find((U) => U.id === A.option_id), Z = (x.evidence ?? []).filter((U) => A.evidence_refs.includes(U.id)), [H, M] = J.useState(!1), [z, V] = J.useState(!1);
  return J.useEffect(() => V(!1), [r.notice, r.screen]), /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "review-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => p("navigate", { view: "decision", run_id: x.run_id }),
        children: [
          /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
          " Back to edit"
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("section", { className: "review-heading", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Review before permanent commitment" }),
      /* @__PURE__ */ u.jsxs("h1", { children: [
        d.id,
        ". ",
        d.title
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: "This is the last editable boundary. Confirm the record reflects the judgment you intend to defend." })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "review-card", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "review-action", children: [
        /* @__PURE__ */ u.jsx("span", { className: "option-letter", children: O?.id }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Selected action" }),
          /* @__PURE__ */ u.jsx("h2", { children: O?.label })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "review-record", children: [
        /* @__PURE__ */ u.jsxs("article", { className: "review-wide", children: [
          /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ u.jsx("p", { children: A.rationale })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Accountable owner" }),
          /* @__PURE__ */ u.jsx("p", { children: A.owner })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Critical assumption" }),
          /* @__PURE__ */ u.jsx("p", { children: A.assumptions })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Acceptance or stop condition" }),
          /* @__PURE__ */ u.jsx("p", { children: A.acceptance_condition })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Material risk" }),
          /* @__PURE__ */ u.jsx("p", { children: A.risk })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { className: "review-wide", children: [
          /* @__PURE__ */ u.jsx("small", { children: "Evidence cited" }),
          Z.length ? /* @__PURE__ */ u.jsx("div", { className: "review-evidence", children: Z.map((U) => /* @__PURE__ */ u.jsxs("span", { children: [
            U.id,
            " · ",
            U.title
          ] }, U.id)) }) : /* @__PURE__ */ u.jsx("p", { children: "None cited" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "commit-boundary", children: [
      /* @__PURE__ */ u.jsx(On, { size: 22 }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h3", { children: "Permanent commitment boundary" }),
        /* @__PURE__ */ u.jsx("p", { children: "After commitment, this decision cannot be edited, replaced or silently rewritten." }),
        /* @__PURE__ */ u.jsxs("label", { children: [
          /* @__PURE__ */ u.jsx("input", { type: "checkbox", checked: H, onChange: (U) => M(U.target.checked) }),
          /* @__PURE__ */ u.jsx("span", { children: "I understand this decision becomes permanent." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "review-actions", children: [
      /* @__PURE__ */ u.jsxs(Wl, { variant: "secondary", onClick: () => p("navigate", { view: "decision", run_id: x.run_id }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
        " Back to edit"
      ] }),
      /* @__PURE__ */ u.jsxs(
        Wl,
        {
          disabled: !H,
          busy: z,
          onClick: () => {
            V(!0), p("commit_decision", { run_id: x.run_id, confirmed: !0 });
          },
          children: [
            /* @__PURE__ */ u.jsx(lu, { size: 16 }),
            " Commit permanently"
          ]
        }
      )
    ] })
  ] }) });
}
function fv({ data: r, emit: p }) {
  const x = r.consequence ?? {}, d = r.run ?? {}, [A, O] = J.useState(!1);
  J.useEffect(() => O(!1), [r.notice, r.screen]);
  const Z = (x.signals ?? []).length || (x.crises ?? []).length || (x.evidence_arrived ?? []).length;
  return /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "consequence-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "commit-success", children: [
      /* @__PURE__ */ u.jsx("span", { className: "success-ring", children: /* @__PURE__ */ u.jsx(et, { size: 28 }) }),
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Decision recorded" }),
      /* @__PURE__ */ u.jsxs("h1", { children: [
        x.decision_id,
        " is now permanent."
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: x.choice }),
      /* @__PURE__ */ u.jsxs("div", { className: "ledger-confirmation", children: [
        /* @__PURE__ */ u.jsx(lu, { size: 14 }),
        " Added to immutable run ledger · revision ",
        d.revision
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "observable-panel", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
        /* @__PURE__ */ u.jsx("span", { className: "step-number", children: /* @__PURE__ */ u.jsx(Rs, { size: 16 }) }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("h2", { children: "Observable consequence" }),
          /* @__PURE__ */ u.jsx("p", { children: "Only legitimate operational signals are shown during a first attempt." })
        ] })
      ] }),
      !Z && /* @__PURE__ */ u.jsxs("article", { className: "neutral-observation", children: [
        /* @__PURE__ */ u.jsx(Pi, { size: 18 }),
        /* @__PURE__ */ u.jsx("p", { children: "No new operational signal was observable at this boundary." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "observation-list", children: [
        (x.signals ?? []).map((H, M) => /* @__PURE__ */ u.jsxs("article", { className: "observation signal-observation", children: [
          /* @__PURE__ */ u.jsx(Ii, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "New signal" }),
            /* @__PURE__ */ u.jsx("p", { children: H })
          ] })
        ] }, `${H}-${M}`)),
        (x.crises ?? []).map((H) => /* @__PURE__ */ u.jsxs("article", { className: "observation crisis-observation", children: [
          /* @__PURE__ */ u.jsx(On, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: H.observation })
          ] })
        ] }, H.id)),
        (x.evidence_arrived ?? []).map((H) => /* @__PURE__ */ u.jsxs("article", { className: "observation evidence-observation", children: [
          /* @__PURE__ */ u.jsx(Hs, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Evidence arrived" }),
            /* @__PURE__ */ u.jsxs("p", { children: [
              H,
              " is now available."
            ] })
          ] })
        ] }, H))
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("aside", { className: "spoiler-note", children: [
      /* @__PURE__ */ u.jsx(tu, { size: 18 }),
      /* @__PURE__ */ u.jsx("p", { children: "No score, critical-gate outcome or preferred-path coaching is exposed during a first attempt." })
    ] }),
    /* @__PURE__ */ u.jsxs(
      Wl,
      {
        className: "button-full consequence-next",
        busy: A,
        onClick: () => {
          O(!0), p("continue_consequence", { run_id: d.run_id });
        },
        children: [
          x.completed ? "Open executive debrief" : `Continue to ${x.next_decision}`,
          !A && /* @__PURE__ */ u.jsx(Oe, { size: 17 })
        ]
      }
    )
  ] }) });
}
function dv({ data: r, emit: p }) {
  const x = r.report ?? {}, d = r.run ?? {}, [A, O] = J.useState("summary"), Z = (x.gates ?? []).filter((H) => H.status === "fail");
  return /* @__PURE__ */ u.jsx(Da, { data: r, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "debrief-page", children: [
    /* @__PURE__ */ u.jsx("section", { className: "debrief-hero", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width debrief-hero-inner", children: [
      /* @__PURE__ */ u.jsxs("button", { className: "text-back text-back-light", type: "button", onClick: () => p("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-heading-grid", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Executive debrief" }),
          /* @__PURE__ */ u.jsx("h1", { children: x.recommendation }),
          /* @__PURE__ */ u.jsx("p", { children: x.scope_assessed })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "score-lockup", children: [
          /* @__PURE__ */ u.jsx("strong", { children: x.reported_overall }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Provisional score" }),
            /* @__PURE__ */ u.jsx("b", { children: x.provisional_label })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-facts", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Release decision" }),
          /* @__PURE__ */ u.jsx("strong", { className: x.release_valid ? "positive" : "negative", children: x.release_valid ? "Valid" : "Invalid" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Critical gates failed" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            Z.length,
            " / ",
            (x.gates ?? []).length
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Decisions recorded" }),
          /* @__PURE__ */ u.jsx("strong", { children: (x.timeline ?? []).length })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Ledger verified" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            /* @__PURE__ */ u.jsx(tu, { size: 15 }),
            " Yes"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx("div", { className: "debrief-nav-wrap", children: /* @__PURE__ */ u.jsx("nav", { className: "debrief-nav page-width", "aria-label": "Debrief sections", children: [
      ["summary", "Executive summary"],
      ["gates", "Critical gates"],
      ["scorecard", "Competency scorecard"],
      ["timeline", "Decision timeline"]
    ].map(([H, M]) => /* @__PURE__ */ u.jsx("button", { className: A === H ? "active" : "", type: "button", onClick: () => O(H), children: M }, H)) }) }),
    /* @__PURE__ */ u.jsxs("section", { className: "debrief-content page-width", children: [
      A === "summary" && /* @__PURE__ */ u.jsx(rv, { report: x }),
      A === "gates" && /* @__PURE__ */ u.jsx(ov, { gates: x.gates ?? [] }),
      A === "scorecard" && /* @__PURE__ */ u.jsx(hv, { dimensions: x.dimensions ?? [] }),
      A === "timeline" && /* @__PURE__ */ u.jsx(mv, { timeline: x.timeline ?? [] })
    ] }),
    /* @__PURE__ */ u.jsx("section", { className: "export-band", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width export-inner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Portable evidence" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Take the complete record with you." }),
        /* @__PURE__ */ u.jsx("p", { children: "Download the executive report or the replay-verifiable completed run." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs(Wl, { variant: "secondary", onClick: () => Io(`${d.run_id}-debrief.json`, x), children: [
          /* @__PURE__ */ u.jsx(V1, { size: 16 }),
          " Evidence pack"
        ] }),
        /* @__PURE__ */ u.jsxs(
          Wl,
          {
            disabled: !r.completed_run_document,
            onClick: () => Io(`${d.run_id}.json`, r.completed_run_document),
            children: [
              /* @__PURE__ */ u.jsx(qs, { size: 16 }),
              " Completed run"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs("div", { className: "page-width calibration-notice", children: [
      /* @__PURE__ */ u.jsx(Pi, { size: 17 }),
      /* @__PURE__ */ u.jsx("p", { children: x.notice })
    ] })
  ] }) });
}
function rv({ report: r }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "summary-view", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "judgment-columns", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ u.jsx(Cs, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Strongest evidence" }),
            /* @__PURE__ */ u.jsx("h2", { children: "Judgments that held" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (r.strengths ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { className: "strength-card", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: p.criterion_id }),
            /* @__PURE__ */ u.jsx("strong", { children: p.score })
          ] }),
          /* @__PURE__ */ u.jsx("h3", { children: p.name }),
          /* @__PURE__ */ u.jsx("p", { children: p.why }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            "Supporting decisions: ",
            (p.evidence ?? []).join(", ") || "Structural evidence"
          ] })
        ] }, p.criterion_id)) })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ u.jsx(au, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Replay priorities" }),
            /* @__PURE__ */ u.jsx("h2", { children: "Where judgment broke" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (r.development_needs ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { className: "priority-card", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: p.criterion_id }),
            /* @__PURE__ */ u.jsx("strong", { children: p.score })
          ] }),
          /* @__PURE__ */ u.jsx("h3", { children: p.name }),
          /* @__PURE__ */ u.jsx("p", { children: p.priority }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            "Contrary evidence: ",
            (p.contrary_evidence ?? []).join(", ") || "Insufficient evidence"
          ] })
        ] }, p.criterion_id)) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "perspective-section", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
        /* @__PURE__ */ u.jsx(Bs, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Executive perspectives" }),
          /* @__PURE__ */ u.jsx("h2", { children: "How the decision reads upstairs" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "perspective-grid", children: (r.perspectives ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: p.role }),
          /* @__PURE__ */ u.jsx("strong", { children: p.score })
        ] }),
        /* @__PURE__ */ u.jsx("p", { children: p.view })
      ] }, p.role)) })
    ] })
  ] });
}
function ov({ gates: r }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "gate-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Non-compensable controls" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Critical gates" }),
      /* @__PURE__ */ u.jsx("p", { children: "A failed critical gate cannot be offset by strength elsewhere." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "gate-grid", children: r.map((p) => /* @__PURE__ */ u.jsxs("article", { className: He("gate-card", p.status === "pass" ? "gate-pass" : "gate-fail"), children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { children: [
          p.status === "pass" ? /* @__PURE__ */ u.jsx(Cs, { size: 18 }) : /* @__PURE__ */ u.jsx(Us, { size: 18 }),
          p.status.toUpperCase()
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: p.gate_id })
      ] }),
      /* @__PURE__ */ u.jsx("h3", { children: p.name }),
      /* @__PURE__ */ u.jsx("p", { children: p.reason })
    ] }, p.gate_id)) })
  ] });
}
function hv({ dimensions: r }) {
  const [p, x] = J.useState(r[0]?.id ?? null);
  return /* @__PURE__ */ u.jsxs("div", { className: "scorecard-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Seven dimensions · 28 criteria" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Competency scorecard" }),
      /* @__PURE__ */ u.jsx("p", { children: "Scores reflect recorded actions, chronology, controls and evidence citations." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "dimension-list", children: r.map((d) => /* @__PURE__ */ u.jsxs("article", { className: "dimension-card", children: [
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => x(p === d.id ? null : d.id), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "dimension-score", children: [
          /* @__PURE__ */ u.jsx("strong", { children: d.reported_score.toFixed(1) }),
          /* @__PURE__ */ u.jsx("span", { children: "/ 100" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "dimension-name", children: [
          /* @__PURE__ */ u.jsx("strong", { children: d.label }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Weight ",
            Math.round(d.weight * 100),
            "%",
            d.cap != null ? ` · capped at ${d.cap}` : ""
          ] }),
          /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("i", { style: { width: `${Math.max(0, Math.min(100, d.reported_score))}%` } }) })
        ] }),
        /* @__PURE__ */ u.jsx(Dn, { size: 18, className: p === d.id ? "rotated" : "" })
      ] }),
      p === d.id && /* @__PURE__ */ u.jsxs("div", { className: "criterion-table", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Criterion" }),
          /* @__PURE__ */ u.jsx("span", { children: "Score" }),
          /* @__PURE__ */ u.jsx("span", { children: "Recorded evidence" })
        ] }),
        (d.criteria ?? []).map((A) => /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: A.id }),
            /* @__PURE__ */ u.jsx("span", { children: A.name })
          ] }),
          /* @__PURE__ */ u.jsx("strong", { children: A.score }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("p", { children: A.reason }),
            /* @__PURE__ */ u.jsx("small", { children: A.stronger_evidence })
          ] })
        ] }, A.id))
      ] })
    ] }, d.id)) })
  ] });
}
function mv({ timeline: r }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "timeline-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Chronological evidence" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Decision timeline" }),
      /* @__PURE__ */ u.jsx("p", { children: "The first-attempt record exactly as it was committed." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "timeline-list", children: r.map((p) => /* @__PURE__ */ u.jsxs("details", { children: [
      /* @__PURE__ */ u.jsxs("summary", { children: [
        /* @__PURE__ */ u.jsx("span", { children: p.decision_id }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: p.title }),
          /* @__PURE__ */ u.jsx("small", { children: p.choice })
        ] }),
        /* @__PURE__ */ u.jsx(Dn, { size: 18 })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "timeline-detail", children: [
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ u.jsx("p", { children: p.rationale })
        ] }),
        (p.signals ?? []).length > 0 && /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Observable signals" }),
          /* @__PURE__ */ u.jsx("p", { children: p.signals.join(" · ") })
        ] }),
        (p.crises ?? []).length > 0 && /* @__PURE__ */ u.jsxs("article", { className: "timeline-crisis", children: [
          /* @__PURE__ */ u.jsx("small", { children: "Material events" }),
          /* @__PURE__ */ u.jsx("p", { children: p.crises.join(" · ") })
        ] })
      ] })
    ] }, p.decision_id)) })
  ] });
}
function vv({ data: r }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "fatal-page", children: [
    /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
    /* @__PURE__ */ u.jsx(On, { size: 30 }),
    /* @__PURE__ */ u.jsx("h1", { children: r.fatal?.title ?? "The Arena could not start" }),
    /* @__PURE__ */ u.jsx("p", { children: r.fatal?.message }),
    /* @__PURE__ */ u.jsxs("a", { className: "button button-primary", href: r.links?.github, target: "_blank", rel: "noreferrer", children: [
      "Open repository ",
      /* @__PURE__ */ u.jsx(eh, { size: 16 })
    ] })
  ] });
}
function yv({ data: r, emit: p }) {
  const x = r.screen;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    x === "marketing" && /* @__PURE__ */ u.jsx(tv, { data: r, emit: p }),
    x === "centre" && /* @__PURE__ */ u.jsx(av, { data: r, emit: p }),
    x === "briefing" && /* @__PURE__ */ u.jsx(nv, { data: r, emit: p }),
    x === "decision" && /* @__PURE__ */ u.jsx(uv, { data: r, emit: p }),
    x === "review" && /* @__PURE__ */ u.jsx(sv, { data: r, emit: p }),
    x === "consequence" && /* @__PURE__ */ u.jsx(fv, { data: r, emit: p }),
    x === "debrief" && /* @__PURE__ */ u.jsx(dv, { data: r, emit: p }),
    x === "fatal" && /* @__PURE__ */ u.jsx(vv, { data: r }),
    /* @__PURE__ */ u.jsx(lv, { notice: r.notice })
  ] });
}
const Po = /* @__PURE__ */ new WeakMap(), gv = (r) => {
  const { data: p, parentElement: x, setTriggerValue: d } = r, A = x.querySelector(".arena-react-root");
  if (!A)
    throw new Error("AI Delivery Arena React root was not found.");
  let O = Po.get(x);
  O || (O = Y1.createRoot(A), Po.set(x, O)), O.render(
    /* @__PURE__ */ u.jsx(J.StrictMode, { children: /* @__PURE__ */ u.jsx(
      yv,
      {
        data: p,
        emit: (Z, H = {}) => {
          d("event", { type: Z, payload: H });
        }
      }
    ) })
  );
};
export {
  gv as default
};
