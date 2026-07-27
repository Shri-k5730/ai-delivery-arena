var Ss = { exports: {} }, En = {};
var Zo;
function Dv() {
  if (Zo) return En;
  Zo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.fragment");
  function g(d, T, O) {
    var V = null;
    if (O !== void 0 && (V = "" + O), T.key !== void 0 && (V = "" + T.key), "key" in T) {
      O = {};
      for (var H in T)
        H !== "key" && (O[H] = T[H]);
    } else O = T;
    return T = O.ref, {
      $$typeof: f,
      type: d,
      key: V,
      ref: T !== void 0 ? T : null,
      props: O
    };
  }
  return En.Fragment = p, En.jsx = g, En.jsxs = g, En;
}
var Lo;
function Cv() {
  return Lo || (Lo = 1, Ss.exports = Dv()), Ss.exports;
}
var u = Cv(), zs = { exports: {} }, w = {};
var Vo;
function Uv() {
  if (Vo) return w;
  Vo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.memo"), K = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), ne = Symbol.iterator;
  function de(o) {
    return o === null || typeof o != "object" ? null : (o = ne && o[ne] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var Se = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, Ae = {};
  function Ue(o, A, C) {
    this.props = o, this.context = A, this.refs = Ae, this.updater = C || Se;
  }
  Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(o, A) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, A, "setState");
  }, Ue.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function Al() {
  }
  Al.prototype = Ue.prototype;
  function ze(o, A, C) {
    this.props = o, this.context = A, this.refs = Ae, this.updater = C || Se;
  }
  var Ve = ze.prototype = new Al();
  Ve.constructor = ze, Z(Ve, Ue.prototype), Ve.isPureReactComponent = !0;
  var we = Array.isArray;
  function Be() {
  }
  var W = { H: null, A: null, T: null, S: null }, Re = Object.prototype.hasOwnProperty;
  function We(o, A, C) {
    var q = C.ref;
    return {
      $$typeof: f,
      type: o,
      key: A,
      ref: q !== void 0 ? q : null,
      props: C
    };
  }
  function Cl(o, A) {
    return We(o.type, A, o.props);
  }
  function Fe(o) {
    return typeof o == "object" && o !== null && o.$$typeof === f;
  }
  function pe(o) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(C) {
      return A[C];
    });
  }
  var Ke = /\/+/g;
  function Ie(o, A) {
    return typeof o == "object" && o !== null && o.key != null ? pe("" + o.key) : A.toString(36);
  }
  function ul(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Be, Be) : (o.status = "pending", o.then(
          function(A) {
            o.status === "pending" && (o.status = "fulfilled", o.value = A);
          },
          function(A) {
            o.status === "pending" && (o.status = "rejected", o.reason = A);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, A, C, q, J) {
    var F = typeof o;
    (F === "undefined" || F === "boolean") && (o = null);
    var se = !1;
    if (o === null) se = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case f:
            case p:
              se = !0;
              break;
            case K:
              return se = o._init, b(
                se(o._payload),
                A,
                C,
                q,
                J
              );
          }
      }
    if (se)
      return J = J(o), se = q === "" ? "." + Ie(o, 0) : q, we(J) ? (C = "", se != null && (C = se.replace(Ke, "$&/") + "/"), b(J, A, C, "", function(Ca) {
        return Ca;
      })) : J != null && (Fe(J) && (J = Cl(
        J,
        C + (J.key == null || o && o.key === J.key ? "" : ("" + J.key).replace(
          Ke,
          "$&/"
        ) + "/") + se
      )), A.push(J)), 1;
    se = 0;
    var Je = q === "" ? "." : q + ":";
    if (we(o))
      for (var Ne = 0; Ne < o.length; Ne++)
        q = o[Ne], F = Je + Ie(q, Ne), se += b(
          q,
          A,
          C,
          F,
          J
        );
    else if (Ne = de(o), typeof Ne == "function")
      for (o = Ne.call(o), Ne = 0; !(q = o.next()).done; )
        q = q.value, F = Je + Ie(q, Ne++), se += b(
          q,
          A,
          C,
          F,
          J
        );
    else if (F === "object") {
      if (typeof o.then == "function")
        return b(
          ul(o),
          A,
          C,
          q,
          J
        );
      throw A = String(o), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function D(o, A, C) {
    if (o == null) return o;
    var q = [], J = 0;
    return b(o, q, "", "", function(F) {
      return A.call(C, F, J++);
    }), q;
  }
  function X(o) {
    if (o._status === -1) {
      var A = o._result;
      A = A(), A.then(
        function(C) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = C);
        },
        function(C) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = C);
        }
      ), o._status === -1 && (o._status = 0, o._result = A);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var z = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, Q = {
    map: D,
    forEach: function(o, A, C) {
      D(
        o,
        function() {
          A.apply(this, arguments);
        },
        C
      );
    },
    count: function(o) {
      var A = 0;
      return D(o, function() {
        A++;
      }), A;
    },
    toArray: function(o) {
      return D(o, function(A) {
        return A;
      }) || [];
    },
    only: function(o) {
      if (!Fe(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return w.Activity = U, w.Children = Q, w.Component = Ue, w.Fragment = g, w.Profiler = T, w.PureComponent = ze, w.StrictMode = d, w.Suspense = M, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, w.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return W.H.useMemoCache(o);
    }
  }, w.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, w.cacheSignal = function() {
    return null;
  }, w.cloneElement = function(o, A, C) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var q = Z({}, o.props), J = o.key;
    if (A != null)
      for (F in A.key !== void 0 && (J = "" + A.key), A)
        !Re.call(A, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && A.ref === void 0 || (q[F] = A[F]);
    var F = arguments.length - 2;
    if (F === 1) q.children = C;
    else if (1 < F) {
      for (var se = Array(F), Je = 0; Je < F; Je++)
        se[Je] = arguments[Je + 2];
      q.children = se;
    }
    return We(o.type, J, q);
  }, w.createContext = function(o) {
    return o = {
      $$typeof: V,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: O,
      _context: o
    }, o;
  }, w.createElement = function(o, A, C) {
    var q, J = {}, F = null;
    if (A != null)
      for (q in A.key !== void 0 && (F = "" + A.key), A)
        Re.call(A, q) && q !== "key" && q !== "__self" && q !== "__source" && (J[q] = A[q]);
    var se = arguments.length - 2;
    if (se === 1) J.children = C;
    else if (1 < se) {
      for (var Je = Array(se), Ne = 0; Ne < se; Ne++)
        Je[Ne] = arguments[Ne + 2];
      J.children = Je;
    }
    if (o && o.defaultProps)
      for (q in se = o.defaultProps, se)
        J[q] === void 0 && (J[q] = se[q]);
    return We(o, F, J);
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(o) {
    return { $$typeof: H, render: o };
  }, w.isValidElement = Fe, w.lazy = function(o) {
    return {
      $$typeof: K,
      _payload: { _status: -1, _result: o },
      _init: X
    };
  }, w.memo = function(o, A) {
    return {
      $$typeof: N,
      type: o,
      compare: A === void 0 ? null : A
    };
  }, w.startTransition = function(o) {
    var A = W.T, C = {};
    W.T = C;
    try {
      var q = o(), J = W.S;
      J !== null && J(C, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(Be, z);
    } catch (F) {
      z(F);
    } finally {
      A !== null && C.types !== null && (A.types = C.types), W.T = A;
    }
  }, w.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, w.use = function(o) {
    return W.H.use(o);
  }, w.useActionState = function(o, A, C) {
    return W.H.useActionState(o, A, C);
  }, w.useCallback = function(o, A) {
    return W.H.useCallback(o, A);
  }, w.useContext = function(o) {
    return W.H.useContext(o);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(o, A) {
    return W.H.useDeferredValue(o, A);
  }, w.useEffect = function(o, A) {
    return W.H.useEffect(o, A);
  }, w.useEffectEvent = function(o) {
    return W.H.useEffectEvent(o);
  }, w.useId = function() {
    return W.H.useId();
  }, w.useImperativeHandle = function(o, A, C) {
    return W.H.useImperativeHandle(o, A, C);
  }, w.useInsertionEffect = function(o, A) {
    return W.H.useInsertionEffect(o, A);
  }, w.useLayoutEffect = function(o, A) {
    return W.H.useLayoutEffect(o, A);
  }, w.useMemo = function(o, A) {
    return W.H.useMemo(o, A);
  }, w.useOptimistic = function(o, A) {
    return W.H.useOptimistic(o, A);
  }, w.useReducer = function(o, A, C) {
    return W.H.useReducer(o, A, C);
  }, w.useRef = function(o) {
    return W.H.useRef(o);
  }, w.useState = function(o) {
    return W.H.useState(o);
  }, w.useSyncExternalStore = function(o, A, C) {
    return W.H.useSyncExternalStore(
      o,
      A,
      C
    );
  }, w.useTransition = function() {
    return W.H.useTransition();
  }, w.version = "19.2.8", w;
}
var wo;
function Ds() {
  return wo || (wo = 1, zs.exports = Uv()), zs.exports;
}
var L = Ds(), Ns = { exports: {} }, An = {}, _s = { exports: {} }, Es = {};
var Ko;
function Rv() {
  return Ko || (Ko = 1, (function(f) {
    function p(b, D) {
      var X = b.length;
      b.push(D);
      e: for (; 0 < X; ) {
        var z = X - 1 >>> 1, Q = b[z];
        if (0 < T(Q, D))
          b[z] = D, b[X] = Q, X = z;
        else break e;
      }
    }
    function g(b) {
      return b.length === 0 ? null : b[0];
    }
    function d(b) {
      if (b.length === 0) return null;
      var D = b[0], X = b.pop();
      if (X !== D) {
        b[0] = X;
        e: for (var z = 0, Q = b.length, o = Q >>> 1; z < o; ) {
          var A = 2 * (z + 1) - 1, C = b[A], q = A + 1, J = b[q];
          if (0 > T(C, X))
            q < Q && 0 > T(J, C) ? (b[z] = J, b[q] = X, z = q) : (b[z] = C, b[A] = X, z = A);
          else if (q < Q && 0 > T(J, X))
            b[z] = J, b[q] = X, z = q;
          else break e;
        }
      }
      return D;
    }
    function T(b, D) {
      var X = b.sortIndex - D.sortIndex;
      return X !== 0 ? X : b.id - D.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      f.unstable_now = function() {
        return O.now();
      };
    } else {
      var V = Date, H = V.now();
      f.unstable_now = function() {
        return V.now() - H;
      };
    }
    var M = [], N = [], K = 1, U = null, ne = 3, de = !1, Se = !1, Z = !1, Ae = !1, Ue = typeof setTimeout == "function" ? setTimeout : null, Al = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
    function Ve(b) {
      for (var D = g(N); D !== null; ) {
        if (D.callback === null) d(N);
        else if (D.startTime <= b)
          d(N), D.sortIndex = D.expirationTime, p(M, D);
        else break;
        D = g(N);
      }
    }
    function we(b) {
      if (Z = !1, Ve(b), !Se)
        if (g(M) !== null)
          Se = !0, Be || (Be = !0, pe());
        else {
          var D = g(N);
          D !== null && ul(we, D.startTime - b);
        }
    }
    var Be = !1, W = -1, Re = 5, We = -1;
    function Cl() {
      return Ae ? !0 : !(f.unstable_now() - We < Re);
    }
    function Fe() {
      if (Ae = !1, Be) {
        var b = f.unstable_now();
        We = b;
        var D = !0;
        try {
          e: {
            Se = !1, Z && (Z = !1, Al(W), W = -1), de = !0;
            var X = ne;
            try {
              l: {
                for (Ve(b), U = g(M); U !== null && !(U.expirationTime > b && Cl()); ) {
                  var z = U.callback;
                  if (typeof z == "function") {
                    U.callback = null, ne = U.priorityLevel;
                    var Q = z(
                      U.expirationTime <= b
                    );
                    if (b = f.unstable_now(), typeof Q == "function") {
                      U.callback = Q, Ve(b), D = !0;
                      break l;
                    }
                    U === g(M) && d(M), Ve(b);
                  } else d(M);
                  U = g(M);
                }
                if (U !== null) D = !0;
                else {
                  var o = g(N);
                  o !== null && ul(
                    we,
                    o.startTime - b
                  ), D = !1;
                }
              }
              break e;
            } finally {
              U = null, ne = X, de = !1;
            }
            D = void 0;
          }
        } finally {
          D ? pe() : Be = !1;
        }
      }
    }
    var pe;
    if (typeof ze == "function")
      pe = function() {
        ze(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), Ie = Ke.port2;
      Ke.port1.onmessage = Fe, pe = function() {
        Ie.postMessage(null);
      };
    } else
      pe = function() {
        Ue(Fe, 0);
      };
    function ul(b, D) {
      W = Ue(function() {
        b(f.unstable_now());
      }, D);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, f.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Re = 0 < b ? Math.floor(1e3 / b) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, f.unstable_next = function(b) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = ne;
      }
      var X = ne;
      ne = D;
      try {
        return b();
      } finally {
        ne = X;
      }
    }, f.unstable_requestPaint = function() {
      Ae = !0;
    }, f.unstable_runWithPriority = function(b, D) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var X = ne;
      ne = b;
      try {
        return D();
      } finally {
        ne = X;
      }
    }, f.unstable_scheduleCallback = function(b, D, X) {
      var z = f.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? z + X : z) : X = z, b) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return Q = X + Q, b = {
        id: K++,
        callback: D,
        priorityLevel: b,
        startTime: X,
        expirationTime: Q,
        sortIndex: -1
      }, X > z ? (b.sortIndex = X, p(N, b), g(M) === null && b === g(N) && (Z ? (Al(W), W = -1) : Z = !0, ul(we, X - z))) : (b.sortIndex = Q, p(M, b), Se || de || (Se = !0, Be || (Be = !0, pe()))), b;
    }, f.unstable_shouldYield = Cl, f.unstable_wrapCallback = function(b) {
      var D = ne;
      return function() {
        var X = ne;
        ne = D;
        try {
          return b.apply(this, arguments);
        } finally {
          ne = X;
        }
      };
    };
  })(Es)), Es;
}
var Jo;
function Hv() {
  return Jo || (Jo = 1, _s.exports = Rv()), _s.exports;
}
var As = { exports: {} }, Le = {};
var ko;
function qv() {
  if (ko) return Le;
  ko = 1;
  var f = Ds();
  function p(M) {
    var N = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++)
        N += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return "Minified React error #" + M + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g() {
  }
  var d = {
    d: {
      f: g,
      r: function() {
        throw Error(p(522));
      },
      D: g,
      C: g,
      L: g,
      m: g,
      X: g,
      S: g,
      M: g
    },
    p: 0,
    findDOMNode: null
  }, T = /* @__PURE__ */ Symbol.for("react.portal");
  function O(M, N, K) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: U == null ? null : "" + U,
      children: M,
      containerInfo: N,
      implementation: K
    };
  }
  var V = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(M, N) {
    if (M === "font") return "";
    if (typeof N == "string")
      return N === "use-credentials" ? N : "";
  }
  return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Le.createPortal = function(M, N) {
    var K = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
      throw Error(p(299));
    return O(M, N, null, K);
  }, Le.flushSync = function(M) {
    var N = V.T, K = d.p;
    try {
      if (V.T = null, d.p = 2, M) return M();
    } finally {
      V.T = N, d.p = K, d.d.f();
    }
  }, Le.preconnect = function(M, N) {
    typeof M == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, d.d.C(M, N));
  }, Le.prefetchDNS = function(M) {
    typeof M == "string" && d.d.D(M);
  }, Le.preinit = function(M, N) {
    if (typeof M == "string" && N && typeof N.as == "string") {
      var K = N.as, U = H(K, N.crossOrigin), ne = typeof N.integrity == "string" ? N.integrity : void 0, de = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
      K === "style" ? d.d.S(
        M,
        typeof N.precedence == "string" ? N.precedence : void 0,
        {
          crossOrigin: U,
          integrity: ne,
          fetchPriority: de
        }
      ) : K === "script" && d.d.X(M, {
        crossOrigin: U,
        integrity: ne,
        fetchPriority: de,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      });
    }
  }, Le.preinitModule = function(M, N) {
    if (typeof M == "string")
      if (typeof N == "object" && N !== null) {
        if (N.as == null || N.as === "script") {
          var K = H(
            N.as,
            N.crossOrigin
          );
          d.d.M(M, {
            crossOrigin: K,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
            nonce: typeof N.nonce == "string" ? N.nonce : void 0
          });
        }
      } else N == null && d.d.M(M);
  }, Le.preload = function(M, N) {
    if (typeof M == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
      var K = N.as, U = H(K, N.crossOrigin);
      d.d.L(M, K, {
        crossOrigin: U,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0,
        type: typeof N.type == "string" ? N.type : void 0,
        fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
        referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
        imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
        imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
        media: typeof N.media == "string" ? N.media : void 0
      });
    }
  }, Le.preloadModule = function(M, N) {
    if (typeof M == "string")
      if (N) {
        var K = H(N.as, N.crossOrigin);
        d.d.m(M, {
          as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
          crossOrigin: K,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0
        });
      } else d.d.m(M);
  }, Le.requestFormReset = function(M) {
    d.d.r(M);
  }, Le.unstable_batchedUpdates = function(M, N) {
    return M(N);
  }, Le.useFormState = function(M, N, K) {
    return V.H.useFormState(M, N, K);
  }, Le.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, Le.version = "19.2.8", Le;
}
var $o;
function Bv() {
  if ($o) return As.exports;
  $o = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return f(), As.exports = qv(), As.exports;
}
var Wo;
function Yv() {
  if (Wo) return An;
  Wo = 1;
  var f = Hv(), p = Ds(), g = Bv();
  function d(e) {
    var l = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function O(e) {
    var l = e, t = e;
    if (e.alternate) for (; l.return; ) l = l.return;
    else {
      e = l;
      do
        l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
      while (e);
    }
    return l.tag === 3 ? t : null;
  }
  function V(e) {
    if (e.tag === 13) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function H(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function M(e) {
    if (O(e) !== e)
      throw Error(d(188));
  }
  function N(e) {
    var l = e.alternate;
    if (!l) {
      if (l = O(e), l === null) throw Error(d(188));
      return l !== e ? null : e;
    }
    for (var t = e, a = l; ; ) {
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
          if (i === t) return M(n), e;
          if (i === a) return M(n), l;
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
    return t.stateNode.current === t ? e : l;
  }
  function K(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = K(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign, ne = /* @__PURE__ */ Symbol.for("react.element"), de = /* @__PURE__ */ Symbol.for("react.transitional.element"), Se = /* @__PURE__ */ Symbol.for("react.portal"), Z = /* @__PURE__ */ Symbol.for("react.fragment"), Ae = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ue = /* @__PURE__ */ Symbol.for("react.profiler"), Al = /* @__PURE__ */ Symbol.for("react.consumer"), ze = /* @__PURE__ */ Symbol.for("react.context"), Ve = /* @__PURE__ */ Symbol.for("react.forward_ref"), we = /* @__PURE__ */ Symbol.for("react.suspense"), Be = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), We = /* @__PURE__ */ Symbol.for("react.activity"), Cl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Fe = Symbol.iterator;
  function pe(e) {
    return e === null || typeof e != "object" ? null : (e = Fe && e[Fe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ke = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Z:
        return "Fragment";
      case Ue:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case we:
        return "Suspense";
      case Be:
        return "SuspenseList";
      case We:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return "Portal";
        case ze:
          return e.displayName || "Context";
        case Al:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ve:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case W:
          return l = e.displayName || null, l !== null ? l : Ie(e.type) || "Memo";
        case Re:
          l = e._payload, e = e._init;
          try {
            return Ie(e(l));
          } catch {
          }
      }
    return null;
  }
  var ul = Array.isArray, b = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, z = [], Q = -1;
  function o(e) {
    return { current: e };
  }
  function A(e) {
    0 > Q || (e.current = z[Q], z[Q] = null, Q--);
  }
  function C(e, l) {
    Q++, z[Q] = e.current, e.current = l;
  }
  var q = o(null), J = o(null), F = o(null), se = o(null);
  function Je(e, l) {
    switch (C(F, l), C(J, e), C(q, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? ro(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = ro(l), e = oo(l, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    A(q), C(q, e);
  }
  function Ne() {
    A(q), A(J), A(F);
  }
  function Ca(e) {
    e.memoizedState !== null && C(se, e);
    var l = q.current, t = oo(l, e.type);
    l !== t && (C(J, e), C(q, t));
  }
  function Cn(e) {
    J.current === e && (A(q), A(J)), se.current === e && (A(se), Sn._currentValue = X);
  }
  var nu, Gs;
  function Tt(e) {
    if (nu === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        nu = l && l[1] || "", Gs = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + nu + e + Gs;
  }
  var iu = !1;
  function uu(e, l) {
    if (!e || iu) return "";
    iu = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (j) {
                  var x = j;
                }
                Reflect.construct(e, [], E);
              } else {
                try {
                  E.call();
                } catch (j) {
                  x = j;
                }
                e.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                x = j;
              }
              (E = e()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (j) {
            if (j && x && typeof j.stack == "string")
              return [j.stack, x.stack];
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
        var r = c.split(`
`), y = s.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === y.length)
          for (a = r.length - 1, n = y.length - 1; 1 <= a && 0 <= n && r[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== y[n]) {
                  var S = `
` + r[a].replace(" at new ", " at ");
                  return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Tt(t) : "";
  }
  function sh(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(e.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return e.child !== l && l !== null ? Tt("Suspense Fallback") : Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return uu(e.type, !1);
      case 11:
        return uu(e.type.render, !1);
      case 1:
        return uu(e.type, !0);
      case 31:
        return Tt("Activity");
      default:
        return "";
    }
  }
  function Xs(e) {
    try {
      var l = "", t = null;
      do
        l += sh(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var cu = Object.prototype.hasOwnProperty, su = f.unstable_scheduleCallback, fu = f.unstable_cancelCallback, fh = f.unstable_shouldYield, rh = f.unstable_requestPaint, cl = f.unstable_now, dh = f.unstable_getCurrentPriorityLevel, Qs = f.unstable_ImmediatePriority, Zs = f.unstable_UserBlockingPriority, Un = f.unstable_NormalPriority, oh = f.unstable_LowPriority, Ls = f.unstable_IdlePriority, hh = f.log, mh = f.unstable_setDisableYieldValue, Ua = null, sl = null;
  function at(e) {
    if (typeof hh == "function" && mh(e), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(Ua, e);
      } catch {
      }
  }
  var fl = Math.clz32 ? Math.clz32 : gh, vh = Math.log, yh = Math.LN2;
  function gh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vh(e) / yh | 0) | 0;
  }
  var Rn = 256, Hn = 262144, qn = 4194304;
  function Mt(e) {
    var l = e & 42;
    if (l !== 0) return l;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Bn(e, l, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~i, a !== 0 ? n = Mt(a) : (c &= s, c !== 0 ? n = Mt(c) : t || (t = s & ~e, t !== 0 && (n = Mt(t))))) : (s = a & ~i, s !== 0 ? n = Mt(s) : c !== 0 ? n = Mt(c) : t || (t = a & ~e, t !== 0 && (n = Mt(t)))), n === 0 ? 0 : l !== 0 && l !== n && (l & i) === 0 && (i = n & -n, t = l & -l, i >= t || i === 32 && (t & 4194048) !== 0) ? l : n;
  }
  function Ra(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function xh(e, l) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function Vs() {
    var e = qn;
    return qn <<= 1, (qn & 62914560) === 0 && (qn = 4194304), e;
  }
  function ru(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function Ha(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function ph(e, l, t, a, n, i) {
    var c = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var s = e.entanglements, r = e.expirationTimes, y = e.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var S = 31 - fl(t), E = 1 << S;
      s[S] = 0, r[S] = -1;
      var x = y[S];
      if (x !== null)
        for (y[S] = null, S = 0; S < x.length; S++) {
          var j = x[S];
          j !== null && (j.lane &= -536870913);
        }
      t &= ~E;
    }
    a !== 0 && ws(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~l));
  }
  function ws(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var a = 31 - fl(l);
    e.entangledLanes |= l, e.entanglements[a] = e.entanglements[a] | 1073741824 | t & 261930;
  }
  function Ks(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var a = 31 - fl(t), n = 1 << a;
      n & l | e[a] & l && (e[a] |= l), t &= ~n;
    }
  }
  function Js(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : du(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function du(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ou(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ks() {
    var e = D.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ho(e.type));
  }
  function $s(e, l) {
    var t = D.p;
    try {
      return D.p = e, l();
    } finally {
      D.p = t;
    }
  }
  var nt = Math.random().toString(36).slice(2), Ye = "__reactFiber$" + nt, Pe = "__reactProps$" + nt, Jt = "__reactContainer$" + nt, hu = "__reactEvents$" + nt, jh = "__reactListeners$" + nt, bh = "__reactHandles$" + nt, Ws = "__reactResources$" + nt, qa = "__reactMarker$" + nt;
  function mu(e) {
    delete e[Ye], delete e[Pe], delete e[hu], delete e[jh], delete e[bh];
  }
  function kt(e) {
    var l = e[Ye];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[Jt] || t[Ye]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = po(e); e !== null; ) {
            if (t = e[Ye]) return t;
            e = po(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function $t(e) {
    if (e = e[Ye] || e[Jt]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function Ba(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Wt(e) {
    var l = e[Ws];
    return l || (l = e[Ws] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function He(e) {
    e[qa] = !0;
  }
  var Fs = /* @__PURE__ */ new Set(), Is = {};
  function Ot(e, l) {
    Ft(e, l), Ft(e + "Capture", l);
  }
  function Ft(e, l) {
    for (Is[e] = l, e = 0; e < l.length; e++)
      Fs.add(l[e]);
  }
  var Sh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ps = {}, ef = {};
  function zh(e) {
    return cu.call(ef, e) ? !0 : cu.call(Ps, e) ? !1 : Sh.test(e) ? ef[e] = !0 : (Ps[e] = !0, !1);
  }
  function Yn(e, l, t) {
    if (zh(l))
      if (t === null) e.removeAttribute(l);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(l);
              return;
            }
        }
        e.setAttribute(l, "" + t);
      }
  }
  function Gn(e, l, t) {
    if (t === null) e.removeAttribute(l);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttribute(l, "" + t);
    }
  }
  function Yl(e, l, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(l, t, "" + a);
    }
  }
  function gl(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function lf(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Nh(e, l, t) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      l
    );
    if (!e.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(e, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          t = "" + c, i.call(this, c);
        }
      }), Object.defineProperty(e, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c) {
          t = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[l];
        }
      };
    }
  }
  function vu(e) {
    if (!e._valueTracker) {
      var l = lf(e) ? "checked" : "value";
      e._valueTracker = Nh(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function tf(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), a = "";
    return e && (a = lf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== t ? (l.setValue(e), !0) : !1;
  }
  function Xn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _h = /[\n"\\]/g;
  function xl(e) {
    return e.replace(
      _h,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yu(e, l, t, a, n, i, c, s) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + gl(l)) : e.value !== "" + gl(l) && (e.value = "" + gl(l)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), l != null ? gu(e, c, gl(l)) : t != null ? gu(e, c, gl(t)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + gl(s) : e.removeAttribute("name");
  }
  function af(e, l, t, a, n, i, c, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), l != null || t != null) {
      if (!(i !== "submit" && i !== "reset" || l != null)) {
        vu(e);
        return;
      }
      t = t != null ? "" + gl(t) : "", l = l != null ? "" + gl(l) : t, s || l === e.value || (e.value = l), e.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), vu(e);
  }
  function gu(e, l, t) {
    l === "number" && Xn(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function It(e, l, t, a) {
    if (e = e.options, l) {
      l = {};
      for (var n = 0; n < t.length; n++)
        l["$" + t[n]] = !0;
      for (t = 0; t < e.length; t++)
        n = l.hasOwnProperty("$" + e[t].value), e[t].selected !== n && (e[t].selected = n), n && a && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + gl(t), l = null, n = 0; n < e.length; n++) {
        if (e[n].value === t) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        l !== null || e[n].disabled || (l = e[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function nf(e, l, t) {
    if (l != null && (l = "" + gl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + gl(t) : "";
  }
  function uf(e, l, t, a) {
    if (l == null) {
      if (a != null) {
        if (t != null) throw Error(d(92));
        if (ul(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), l = t;
    }
    t = gl(l), e.defaultValue = t, a = e.textContent, a === t && a !== "" && a !== null && (e.value = a), vu(e);
  }
  function Pt(e, l) {
    if (l) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    e.textContent = l;
  }
  var Eh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cf(e, l, t) {
    var a = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : a ? e.setProperty(l, t) : typeof t != "number" || t === 0 || Eh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function sf(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(d(62));
    if (e = e.style, t != null) {
      for (var a in t)
        !t.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && t[n] !== a && cf(e, n, a);
    } else
      for (var i in l)
        l.hasOwnProperty(i) && cf(e, i, l[i]);
  }
  function xu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var Ah = /* @__PURE__ */ new Map([
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
  ]), Th = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qn(e) {
    return Th.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gl() {
  }
  var pu = null;
  function ju(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ea = null, la = null;
  function ff(e) {
    var l = $t(e);
    if (l && (e = l.stateNode)) {
      var t = e[Pe] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (yu(
            e,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), l = t.name, t.type === "radio" && l != null) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + xl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var a = t[l];
              if (a !== e && a.form === e.form) {
                var n = a[Pe] || null;
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
            for (l = 0; l < t.length; l++)
              a = t[l], a.form === e.form && tf(a);
          }
          break e;
        case "textarea":
          nf(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && It(e, !!t.multiple, l, !1);
      }
    }
  }
  var bu = !1;
  function rf(e, l, t) {
    if (bu) return e(l, t);
    bu = !0;
    try {
      var a = e(l);
      return a;
    } finally {
      if (bu = !1, (ea !== null || la !== null) && (Ti(), ea && (l = ea, e = la, la = ea = null, ff(l), e)))
        for (l = 0; l < e.length; l++) ff(e[l]);
    }
  }
  function Ya(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var a = t[Pe] || null;
    if (a === null) return null;
    t = a[l];
    e: switch (l) {
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function")
      throw Error(
        d(231, l, typeof t)
      );
    return t;
  }
  var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Su = !1;
  if (Xl)
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
  var it = null, zu = null, Zn = null;
  function df() {
    if (Zn) return Zn;
    var e, l = zu, t = l.length, a, n = "value" in it ? it.value : it.textContent, i = n.length;
    for (e = 0; e < t && l[e] === n[e]; e++) ;
    var c = t - e;
    for (a = 1; a <= c && l[t - a] === n[i - a]; a++) ;
    return Zn = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ln(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Vn() {
    return !0;
  }
  function of() {
    return !1;
  }
  function el(e) {
    function l(t, a, n, i, c) {
      this._reactName = t, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vn : of, this.isPropagationStopped = of, this;
    }
    return U(l.prototype, {
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
    }), l;
  }
  var Dt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, wn = el(Dt), Xa = U({}, Dt, { view: 0, detail: 0 }), Mh = el(Xa), Nu, _u, Qa, Kn = U({}, Xa, {
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
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Qa && (Qa && e.type === "mousemove" ? (Nu = e.screenX - Qa.screenX, _u = e.screenY - Qa.screenY) : _u = Nu = 0, Qa = e), Nu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : _u;
    }
  }), hf = el(Kn), Oh = U({}, Kn, { dataTransfer: 0 }), Dh = el(Oh), Ch = U({}, Xa, { relatedTarget: 0 }), Eu = el(Ch), Uh = U({}, Dt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rh = el(Uh), Hh = U({}, Dt, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), qh = el(Hh), Bh = U({}, Dt, { data: 0 }), mf = el(Bh), Yh = {
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
  }, Gh = {
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
  }, Xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Qh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = Xh[e]) ? !!l[e] : !1;
  }
  function Au() {
    return Qh;
  }
  var Zh = U({}, Xa, {
    key: function(e) {
      if (e.key) {
        var l = Yh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gh[e.keyCode] || "Unidentified" : "";
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
    charCode: function(e) {
      return e.type === "keypress" ? Ln(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Lh = el(Zh), Vh = U({}, Kn, {
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
  }), vf = el(Vh), wh = U({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au
  }), Kh = el(wh), Jh = U({}, Dt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kh = el(Jh), $h = U({}, Kn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wh = el($h), Fh = U({}, Dt, {
    newState: 0,
    oldState: 0
  }), Ih = el(Fh), Ph = [9, 13, 27, 32], Tu = Xl && "CompositionEvent" in window, Za = null;
  Xl && "documentMode" in document && (Za = document.documentMode);
  var em = Xl && "TextEvent" in window && !Za, yf = Xl && (!Tu || Za && 8 < Za && 11 >= Za), gf = " ", xf = !1;
  function pf(e, l) {
    switch (e) {
      case "keyup":
        return Ph.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ta = !1;
  function lm(e, l) {
    switch (e) {
      case "compositionend":
        return jf(l);
      case "keypress":
        return l.which !== 32 ? null : (xf = !0, gf);
      case "textInput":
        return e = l.data, e === gf && xf ? null : e;
      default:
        return null;
    }
  }
  function tm(e, l) {
    if (ta)
      return e === "compositionend" || !Tu && pf(e, l) ? (e = df(), Zn = zu = it = null, ta = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return yf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var am = {
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
  function bf(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!am[e.type] : l === "textarea";
  }
  function Sf(e, l, t, a) {
    ea ? la ? la.push(a) : la = [a] : ea = a, l = Hi(l, "onChange"), 0 < l.length && (t = new wn(
      "onChange",
      "change",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }));
  }
  var La = null, Va = null;
  function nm(e) {
    no(e, 0);
  }
  function Jn(e) {
    var l = Ba(e);
    if (tf(l)) return e;
  }
  function zf(e, l) {
    if (e === "change") return l;
  }
  var Nf = !1;
  if (Xl) {
    var Mu;
    if (Xl) {
      var Ou = "oninput" in document;
      if (!Ou) {
        var _f = document.createElement("div");
        _f.setAttribute("oninput", "return;"), Ou = typeof _f.oninput == "function";
      }
      Mu = Ou;
    } else Mu = !1;
    Nf = Mu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ef() {
    La && (La.detachEvent("onpropertychange", Af), Va = La = null);
  }
  function Af(e) {
    if (e.propertyName === "value" && Jn(Va)) {
      var l = [];
      Sf(
        l,
        Va,
        e,
        ju(e)
      ), rf(nm, l);
    }
  }
  function im(e, l, t) {
    e === "focusin" ? (Ef(), La = l, Va = t, La.attachEvent("onpropertychange", Af)) : e === "focusout" && Ef();
  }
  function um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jn(Va);
  }
  function cm(e, l) {
    if (e === "click") return Jn(l);
  }
  function sm(e, l) {
    if (e === "input" || e === "change")
      return Jn(l);
  }
  function fm(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var rl = typeof Object.is == "function" ? Object.is : fm;
  function wa(e, l) {
    if (rl(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), a = Object.keys(l);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!cu.call(l, n) || !rl(e[n], l[n]))
        return !1;
    }
    return !0;
  }
  function Tf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mf(e, l) {
    var t = Tf(e);
    e = 0;
    for (var a; t; ) {
      if (t.nodeType === 3) {
        if (a = e + t.textContent.length, e <= l && a >= l)
          return { node: t, offset: l - e };
        e = a;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Tf(t);
    }
  }
  function Of(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Of(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Df(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var l = Xn(e.document); l instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = l.contentWindow;
      else break;
      l = Xn(e.document);
    }
    return l;
  }
  function Du(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var rm = Xl && "documentMode" in document && 11 >= document.documentMode, aa = null, Cu = null, Ka = null, Uu = !1;
  function Cf(e, l, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Uu || aa == null || aa !== Xn(a) || (a = aa, "selectionStart" in a && Du(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ka && wa(Ka, a) || (Ka = a, a = Hi(Cu, "onSelect"), 0 < a.length && (l = new wn(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: a }), l.target = aa)));
  }
  function Ct(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var na = {
    animationend: Ct("Animation", "AnimationEnd"),
    animationiteration: Ct("Animation", "AnimationIteration"),
    animationstart: Ct("Animation", "AnimationStart"),
    transitionrun: Ct("Transition", "TransitionRun"),
    transitionstart: Ct("Transition", "TransitionStart"),
    transitioncancel: Ct("Transition", "TransitionCancel"),
    transitionend: Ct("Transition", "TransitionEnd")
  }, Ru = {}, Uf = {};
  Xl && (Uf = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
  function Ut(e) {
    if (Ru[e]) return Ru[e];
    if (!na[e]) return e;
    var l = na[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in Uf)
        return Ru[e] = l[t];
    return e;
  }
  var Rf = Ut("animationend"), Hf = Ut("animationiteration"), qf = Ut("animationstart"), dm = Ut("transitionrun"), om = Ut("transitionstart"), hm = Ut("transitioncancel"), Bf = Ut("transitionend"), Yf = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hu.push("scrollEnd");
  function Tl(e, l) {
    Yf.set(e, l), Ot(l, [e]);
  }
  var kn = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, pl = [], ia = 0, qu = 0;
  function $n() {
    for (var e = ia, l = qu = ia = 0; l < e; ) {
      var t = pl[l];
      pl[l++] = null;
      var a = pl[l];
      pl[l++] = null;
      var n = pl[l];
      pl[l++] = null;
      var i = pl[l];
      if (pl[l++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      i !== 0 && Gf(t, n, i);
    }
  }
  function Wn(e, l, t, a) {
    pl[ia++] = e, pl[ia++] = l, pl[ia++] = t, pl[ia++] = a, qu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Bu(e, l, t, a) {
    return Wn(e, l, t, a), Fn(e);
  }
  function Rt(e, l) {
    return Wn(e, null, null, l), Fn(e);
  }
  function Gf(e, l, t) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= t, a = i.alternate, a !== null && (a.childLanes |= t), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && l !== null && (n = 31 - fl(t), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [l] : a.push(l), l.lane = t | 536870912), i) : null;
  }
  function Fn(e) {
    if (50 < vn)
      throw vn = 0, Kc = null, Error(d(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ua = {};
  function mm(e, l, t, a) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dl(e, l, t, a) {
    return new mm(e, l, t, a);
  }
  function Yu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ql(e, l) {
    var t = e.alternate;
    return t === null ? (t = dl(
      e.tag,
      l,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function Xf(e, l) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), e;
  }
  function In(e, l, t, a, n, i) {
    var c = 0;
    if (a = e, typeof e == "function") Yu(e) && (c = 1);
    else if (typeof e == "string")
      c = pv(
        e,
        t,
        q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case We:
          return e = dl(31, t, l, n), e.elementType = We, e.lanes = i, e;
        case Z:
          return Ht(t.children, n, i, l);
        case Ae:
          c = 8, n |= 24;
          break;
        case Ue:
          return e = dl(12, t, l, n | 2), e.elementType = Ue, e.lanes = i, e;
        case we:
          return e = dl(13, t, l, n), e.elementType = we, e.lanes = i, e;
        case Be:
          return e = dl(19, t, l, n), e.elementType = Be, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ze:
                c = 10;
                break e;
              case Al:
                c = 9;
                break e;
              case Ve:
                c = 11;
                break e;
              case W:
                c = 14;
                break e;
              case Re:
                c = 16, a = null;
                break e;
            }
          c = 29, t = Error(
            d(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return l = dl(c, t, l, n), l.elementType = e, l.type = a, l.lanes = i, l;
  }
  function Ht(e, l, t, a) {
    return e = dl(7, e, a, l), e.lanes = t, e;
  }
  function Gu(e, l, t) {
    return e = dl(6, e, null, l), e.lanes = t, e;
  }
  function Qf(e) {
    var l = dl(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Xu(e, l, t) {
    return l = dl(
      4,
      e.children !== null ? e.children : [],
      e.key,
      l
    ), l.lanes = t, l.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, l;
  }
  var Zf = /* @__PURE__ */ new WeakMap();
  function jl(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = Zf.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: Xs(l)
      }, Zf.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: Xs(l)
    };
  }
  var ca = [], sa = 0, Pn = null, Ja = 0, bl = [], Sl = 0, ut = null, Ul = 1, Rl = "";
  function Zl(e, l) {
    ca[sa++] = Ja, ca[sa++] = Pn, Pn = e, Ja = l;
  }
  function Lf(e, l, t) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ut, ut = e;
    var a = Ul;
    e = Rl;
    var n = 32 - fl(a) - 1;
    a &= ~(1 << n), t += 1;
    var i = 32 - fl(l) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Ul = 1 << 32 - fl(l) + n | t << n | a, Rl = i + e;
    } else
      Ul = 1 << i | t << n | a, Rl = e;
  }
  function Qu(e) {
    e.return !== null && (Zl(e, 1), Lf(e, 1, 0));
  }
  function Zu(e) {
    for (; e === Pn; )
      Pn = ca[--sa], ca[sa] = null, Ja = ca[--sa], ca[sa] = null;
    for (; e === ut; )
      ut = bl[--Sl], bl[Sl] = null, Rl = bl[--Sl], bl[Sl] = null, Ul = bl[--Sl], bl[Sl] = null;
  }
  function Vf(e, l) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ut, Ul = l.id, Rl = l.overflow, ut = e;
  }
  var Ge = null, ye = null, ae = !1, ct = null, zl = !1, Lu = Error(d(519));
  function st(e) {
    var l = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ka(jl(l, e)), Lu;
  }
  function wf(e) {
    var l = e.stateNode, t = e.type, a = e.memoizedProps;
    switch (l[Ye] = e, l[Pe] = a, t) {
      case "dialog":
        P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < gn.length; t++)
          P(gn[t], l);
        break;
      case "source":
        P("error", l);
        break;
      case "img":
      case "image":
      case "link":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "input":
        P("invalid", l), af(
          l,
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
        P("invalid", l);
        break;
      case "textarea":
        P("invalid", l), uf(l, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || a.suppressHydrationWarning === !0 || so(l.textContent, t) ? (a.popover != null && (P("beforetoggle", l), P("toggle", l)), a.onScroll != null && P("scroll", l), a.onScrollEnd != null && P("scrollend", l), a.onClick != null && (l.onclick = Gl), l = !0) : l = !1, l || st(e, !0);
  }
  function Kf(e) {
    for (Ge = e.return; Ge; )
      switch (Ge.tag) {
        case 5:
        case 31:
        case 13:
          zl = !1;
          return;
        case 27:
        case 3:
          zl = !0;
          return;
        default:
          Ge = Ge.return;
      }
  }
  function fa(e) {
    if (e !== Ge) return !1;
    if (!ae) return Kf(e), ae = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || cs(e.type, e.memoizedProps)), t = !t), t && ye && st(e), Kf(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      ye = xo(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      ye = xo(e);
    } else
      l === 27 ? (l = ye, St(e.type) ? (e = os, os = null, ye = e) : ye = l) : ye = Ge ? _l(e.stateNode.nextSibling) : null;
    return !0;
  }
  function qt() {
    ye = Ge = null, ae = !1;
  }
  function Vu() {
    var e = ct;
    return e !== null && (nl === null ? nl = e : nl.push.apply(
      nl,
      e
    ), ct = null), e;
  }
  function ka(e) {
    ct === null ? ct = [e] : ct.push(e);
  }
  var wu = o(null), Bt = null, Ll = null;
  function ft(e, l, t) {
    C(wu, l._currentValue), l._currentValue = t;
  }
  function Vl(e) {
    e._currentValue = wu.current, A(wu);
  }
  function Ku(e, l, t) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function Ju(e, l, t, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var r = 0; r < l.length; r++)
            if (s.context === l[r]) {
              i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Ku(
                i.return,
                t,
                e
              ), a || (c = null);
              break e;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(d(341));
        c.lanes |= t, i = c.alternate, i !== null && (i.lanes |= t), Ku(c, t, e), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
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
  function ra(e, l, t, a) {
    e = null;
    for (var n = l, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(d(387));
        if (c = c.memoizedProps, c !== null) {
          var s = n.type;
          rl(n.pendingProps.value, c.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (n === se.current) {
        if (c = n.alternate, c === null) throw Error(d(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Sn) : e = [Sn]);
      }
      n = n.return;
    }
    e !== null && Ju(
      l,
      e,
      t,
      a
    ), l.flags |= 262144;
  }
  function ei(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rl(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Yt(e) {
    Bt = e, Ll = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Xe(e) {
    return Jf(Bt, e);
  }
  function li(e, l) {
    return Bt === null && Yt(e), Jf(e, l);
  }
  function Jf(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, Ll === null) {
      if (e === null) throw Error(d(308));
      Ll = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else Ll = Ll.next = l;
    return t;
  }
  var vm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(t, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, e.forEach(function(t) {
        return t();
      });
    };
  }, ym = f.unstable_scheduleCallback, gm = f.unstable_NormalPriority, Te = {
    $$typeof: ze,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ku() {
    return {
      controller: new vm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $a(e) {
    e.refCount--, e.refCount === 0 && ym(gm, function() {
      e.controller.abort();
    });
  }
  var Wa = null, $u = 0, da = 0, oa = null;
  function xm(e, l) {
    if (Wa === null) {
      var t = Wa = [];
      $u = 0, da = Ic(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return $u++, l.then(kf, kf), l;
  }
  function kf() {
    if (--$u === 0 && Wa !== null) {
      oa !== null && (oa.status = "fulfilled");
      var e = Wa;
      Wa = null, da = 0, oa = null;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
  }
  function pm(e, l) {
    var t = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        t.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < t.length; n++) (0, t[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < t.length; n++)
          (0, t[n])(void 0);
      }
    ), a;
  }
  var $f = b.S;
  b.S = function(e, l) {
    Cd = cl(), typeof l == "object" && l !== null && typeof l.then == "function" && xm(e, l), $f !== null && $f(e, l);
  };
  var Gt = o(null);
  function Wu() {
    var e = Gt.current;
    return e !== null ? e : ve.pooledCache;
  }
  function ti(e, l) {
    l === null ? C(Gt, Gt.current) : C(Gt, l.pool);
  }
  function Wf() {
    var e = Wu();
    return e === null ? null : { parent: Te._currentValue, pool: e };
  }
  var ha = Error(d(460)), Fu = Error(d(474)), ai = Error(d(542)), ni = { then: function() {
  } };
  function Ff(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function If(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(Gl, Gl), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, er(e), e;
      default:
        if (typeof l.status == "string") l.then(Gl, Gl);
        else {
          if (e = ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(d(482));
          e = l, e.status = "pending", e.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw e = l.reason, er(e), e;
        }
        throw Qt = l, ha;
    }
  }
  function Xt(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Qt = t, ha) : t;
    }
  }
  var Qt = null;
  function Pf() {
    if (Qt === null) throw Error(d(459));
    var e = Qt;
    return Qt = null, e;
  }
  function er(e) {
    if (e === ha || e === ai)
      throw Error(d(483));
  }
  var ma = null, Fa = 0;
  function ii(e) {
    var l = Fa;
    return Fa += 1, ma === null && (ma = []), If(ma, e, l);
  }
  function Ia(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function ui(e, l) {
    throw l.$$typeof === ne ? Error(d(525)) : (e = Object.prototype.toString.call(l), Error(
      d(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function lr(e) {
    function l(m, h) {
      if (e) {
        var v = m.deletions;
        v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
      }
    }
    function t(m, h) {
      if (!e) return null;
      for (; h !== null; )
        l(m, h), h = h.sibling;
      return null;
    }
    function a(m) {
      for (var h = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
      return h;
    }
    function n(m, h) {
      return m = Ql(m, h), m.index = 0, m.sibling = null, m;
    }
    function i(m, h, v) {
      return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 67108866, h) : v) : (m.flags |= 67108866, h)) : (m.flags |= 1048576, h);
    }
    function c(m) {
      return e && m.alternate === null && (m.flags |= 67108866), m;
    }
    function s(m, h, v, _) {
      return h === null || h.tag !== 6 ? (h = Gu(v, m.mode, _), h.return = m, h) : (h = n(h, v), h.return = m, h);
    }
    function r(m, h, v, _) {
      var Y = v.type;
      return Y === Z ? S(
        m,
        h,
        v.props.children,
        _,
        v.key
      ) : h !== null && (h.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Re && Xt(Y) === h.type) ? (h = n(h, v.props), Ia(h, v), h.return = m, h) : (h = In(
        v.type,
        v.key,
        v.props,
        null,
        m.mode,
        _
      ), Ia(h, v), h.return = m, h);
    }
    function y(m, h, v, _) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Xu(v, m.mode, _), h.return = m, h) : (h = n(h, v.children || []), h.return = m, h);
    }
    function S(m, h, v, _, Y) {
      return h === null || h.tag !== 7 ? (h = Ht(
        v,
        m.mode,
        _,
        Y
      ), h.return = m, h) : (h = n(h, v), h.return = m, h);
    }
    function E(m, h, v) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Gu(
          "" + h,
          m.mode,
          v
        ), h.return = m, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case de:
            return v = In(
              h.type,
              h.key,
              h.props,
              null,
              m.mode,
              v
            ), Ia(v, h), v.return = m, v;
          case Se:
            return h = Xu(
              h,
              m.mode,
              v
            ), h.return = m, h;
          case Re:
            return h = Xt(h), E(m, h, v);
        }
        if (ul(h) || pe(h))
          return h = Ht(
            h,
            m.mode,
            v,
            null
          ), h.return = m, h;
        if (typeof h.then == "function")
          return E(m, ii(h), v);
        if (h.$$typeof === ze)
          return E(
            m,
            li(m, h),
            v
          );
        ui(m, h);
      }
      return null;
    }
    function x(m, h, v, _) {
      var Y = h !== null ? h.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return Y !== null ? null : s(m, h, "" + v, _);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case de:
            return v.key === Y ? r(m, h, v, _) : null;
          case Se:
            return v.key === Y ? y(m, h, v, _) : null;
          case Re:
            return v = Xt(v), x(m, h, v, _);
        }
        if (ul(v) || pe(v))
          return Y !== null ? null : S(m, h, v, _, null);
        if (typeof v.then == "function")
          return x(
            m,
            h,
            ii(v),
            _
          );
        if (v.$$typeof === ze)
          return x(
            m,
            h,
            li(m, v),
            _
          );
        ui(m, v);
      }
      return null;
    }
    function j(m, h, v, _, Y) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return m = m.get(v) || null, s(h, m, "" + _, Y);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case de:
            return m = m.get(
              _.key === null ? v : _.key
            ) || null, r(h, m, _, Y);
          case Se:
            return m = m.get(
              _.key === null ? v : _.key
            ) || null, y(h, m, _, Y);
          case Re:
            return _ = Xt(_), j(
              m,
              h,
              v,
              _,
              Y
            );
        }
        if (ul(_) || pe(_))
          return m = m.get(v) || null, S(h, m, _, Y, null);
        if (typeof _.then == "function")
          return j(
            m,
            h,
            v,
            ii(_),
            Y
          );
        if (_.$$typeof === ze)
          return j(
            m,
            h,
            v,
            li(h, _),
            Y
          );
        ui(h, _);
      }
      return null;
    }
    function R(m, h, v, _) {
      for (var Y = null, ie = null, B = h, $ = h = 0, le = null; B !== null && $ < v.length; $++) {
        B.index > $ ? (le = B, B = null) : le = B.sibling;
        var ue = x(
          m,
          B,
          v[$],
          _
        );
        if (ue === null) {
          B === null && (B = le);
          break;
        }
        e && B && ue.alternate === null && l(m, B), h = i(ue, h, $), ie === null ? Y = ue : ie.sibling = ue, ie = ue, B = le;
      }
      if ($ === v.length)
        return t(m, B), ae && Zl(m, $), Y;
      if (B === null) {
        for (; $ < v.length; $++)
          B = E(m, v[$], _), B !== null && (h = i(
            B,
            h,
            $
          ), ie === null ? Y = B : ie.sibling = B, ie = B);
        return ae && Zl(m, $), Y;
      }
      for (B = a(B); $ < v.length; $++)
        le = j(
          B,
          m,
          $,
          v[$],
          _
        ), le !== null && (e && le.alternate !== null && B.delete(
          le.key === null ? $ : le.key
        ), h = i(
          le,
          h,
          $
        ), ie === null ? Y = le : ie.sibling = le, ie = le);
      return e && B.forEach(function(At) {
        return l(m, At);
      }), ae && Zl(m, $), Y;
    }
    function G(m, h, v, _) {
      if (v == null) throw Error(d(151));
      for (var Y = null, ie = null, B = h, $ = h = 0, le = null, ue = v.next(); B !== null && !ue.done; $++, ue = v.next()) {
        B.index > $ ? (le = B, B = null) : le = B.sibling;
        var At = x(m, B, ue.value, _);
        if (At === null) {
          B === null && (B = le);
          break;
        }
        e && B && At.alternate === null && l(m, B), h = i(At, h, $), ie === null ? Y = At : ie.sibling = At, ie = At, B = le;
      }
      if (ue.done)
        return t(m, B), ae && Zl(m, $), Y;
      if (B === null) {
        for (; !ue.done; $++, ue = v.next())
          ue = E(m, ue.value, _), ue !== null && (h = i(ue, h, $), ie === null ? Y = ue : ie.sibling = ue, ie = ue);
        return ae && Zl(m, $), Y;
      }
      for (B = a(B); !ue.done; $++, ue = v.next())
        ue = j(B, m, $, ue.value, _), ue !== null && (e && ue.alternate !== null && B.delete(ue.key === null ? $ : ue.key), h = i(ue, h, $), ie === null ? Y = ue : ie.sibling = ue, ie = ue);
      return e && B.forEach(function(Ov) {
        return l(m, Ov);
      }), ae && Zl(m, $), Y;
    }
    function me(m, h, v, _) {
      if (typeof v == "object" && v !== null && v.type === Z && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case de:
            e: {
              for (var Y = v.key; h !== null; ) {
                if (h.key === Y) {
                  if (Y = v.type, Y === Z) {
                    if (h.tag === 7) {
                      t(
                        m,
                        h.sibling
                      ), _ = n(
                        h,
                        v.props.children
                      ), _.return = m, m = _;
                      break e;
                    }
                  } else if (h.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Re && Xt(Y) === h.type) {
                    t(
                      m,
                      h.sibling
                    ), _ = n(h, v.props), Ia(_, v), _.return = m, m = _;
                    break e;
                  }
                  t(m, h);
                  break;
                } else l(m, h);
                h = h.sibling;
              }
              v.type === Z ? (_ = Ht(
                v.props.children,
                m.mode,
                _,
                v.key
              ), _.return = m, m = _) : (_ = In(
                v.type,
                v.key,
                v.props,
                null,
                m.mode,
                _
              ), Ia(_, v), _.return = m, m = _);
            }
            return c(m);
          case Se:
            e: {
              for (Y = v.key; h !== null; ) {
                if (h.key === Y)
                  if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                    t(
                      m,
                      h.sibling
                    ), _ = n(h, v.children || []), _.return = m, m = _;
                    break e;
                  } else {
                    t(m, h);
                    break;
                  }
                else l(m, h);
                h = h.sibling;
              }
              _ = Xu(v, m.mode, _), _.return = m, m = _;
            }
            return c(m);
          case Re:
            return v = Xt(v), me(
              m,
              h,
              v,
              _
            );
        }
        if (ul(v))
          return R(
            m,
            h,
            v,
            _
          );
        if (pe(v)) {
          if (Y = pe(v), typeof Y != "function") throw Error(d(150));
          return v = Y.call(v), G(
            m,
            h,
            v,
            _
          );
        }
        if (typeof v.then == "function")
          return me(
            m,
            h,
            ii(v),
            _
          );
        if (v.$$typeof === ze)
          return me(
            m,
            h,
            li(m, v),
            _
          );
        ui(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, h !== null && h.tag === 6 ? (t(m, h.sibling), _ = n(h, v), _.return = m, m = _) : (t(m, h), _ = Gu(v, m.mode, _), _.return = m, m = _), c(m)) : t(m, h);
    }
    return function(m, h, v, _) {
      try {
        Fa = 0;
        var Y = me(
          m,
          h,
          v,
          _
        );
        return ma = null, Y;
      } catch (B) {
        if (B === ha || B === ai) throw B;
        var ie = dl(29, B, null, m.mode);
        return ie.lanes = _, ie.return = m, ie;
      }
    };
  }
  var Zt = lr(!0), tr = lr(!1), rt = !1;
  function Iu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Pu(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function dt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ot(e, l, t) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ce & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = Fn(e), Gf(e, null, t), l;
    }
    return Wn(e, a, l, t), Fn(e);
  }
  function Pa(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, Ks(e, t);
    }
  }
  function ec(e, l) {
    var t = e.updateQueue, a = e.alternate;
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
        i === null ? n = i = l : i = i.next = l;
      } else n = i = l;
      t = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = l : e.next = l, t.lastBaseUpdate = l;
  }
  var lc = !1;
  function en() {
    if (lc) {
      var e = oa;
      if (e !== null) throw e;
    }
  }
  function ln(e, l, t, a) {
    lc = !1;
    var n = e.updateQueue;
    rt = !1;
    var i = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var r = s, y = r.next;
      r.next = null, c === null ? i = y : c.next = y, c = r;
      var S = e.alternate;
      S !== null && (S = S.updateQueue, s = S.lastBaseUpdate, s !== c && (s === null ? S.firstBaseUpdate = y : s.next = y, S.lastBaseUpdate = r));
    }
    if (i !== null) {
      var E = n.baseState;
      c = 0, S = y = r = null, s = i;
      do {
        var x = s.lane & -536870913, j = x !== s.lane;
        if (j ? (ee & x) === x : (a & x) === x) {
          x !== 0 && x === da && (lc = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var R = e, G = s;
            x = l;
            var me = t;
            switch (G.tag) {
              case 1:
                if (R = G.payload, typeof R == "function") {
                  E = R.call(me, E, x);
                  break e;
                }
                E = R;
                break e;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = G.payload, x = typeof R == "function" ? R.call(me, E, x) : R, x == null) break e;
                E = U({}, E, x);
                break e;
              case 2:
                rt = !0;
            }
          }
          x = s.callback, x !== null && (e.flags |= 64, j && (e.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [x] : j.push(x));
        } else
          j = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, S === null ? (y = S = j, r = E) : S = S.next = j, c |= x;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          j = s, s = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (!0);
      S === null && (r = E), n.baseState = r, n.firstBaseUpdate = y, n.lastBaseUpdate = S, i === null && (n.shared.lanes = 0), gt |= c, e.lanes = c, e.memoizedState = E;
    }
  }
  function ar(e, l) {
    if (typeof e != "function")
      throw Error(d(191, e));
    e.call(l);
  }
  function nr(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        ar(t[e], l);
  }
  var va = o(null), ci = o(0);
  function ir(e, l) {
    e = Pl, C(ci, e), C(va, l), Pl = e | l.baseLanes;
  }
  function tc() {
    C(ci, Pl), C(va, va.current);
  }
  function ac() {
    Pl = ci.current, A(va), A(ci);
  }
  var ol = o(null), Nl = null;
  function ht(e) {
    var l = e.alternate;
    C(_e, _e.current & 1), C(ol, e), Nl === null && (l === null || va.current !== null || l.memoizedState !== null) && (Nl = e);
  }
  function nc(e) {
    C(_e, _e.current), C(ol, e), Nl === null && (Nl = e);
  }
  function ur(e) {
    e.tag === 22 ? (C(_e, _e.current), C(ol, e), Nl === null && (Nl = e)) : mt();
  }
  function mt() {
    C(_e, _e.current), C(ol, ol.current);
  }
  function hl(e) {
    A(ol), Nl === e && (Nl = null), A(_e);
  }
  var _e = o(0);
  function si(e) {
    for (var l = e; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || rs(t) || ds(t)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === e) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === e) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var wl = 0, k = null, oe = null, Me = null, fi = !1, ya = !1, Lt = !1, ri = 0, tn = 0, ga = null, jm = 0;
  function je() {
    throw Error(d(321));
  }
  function ic(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!rl(e[t], l[t])) return !1;
    return !0;
  }
  function uc(e, l, t, a, n, i) {
    return wl = i, k = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, b.H = e === null || e.memoizedState === null ? Lr : bc, Lt = !1, i = t(a, n), Lt = !1, ya && (i = sr(
      l,
      t,
      a,
      n
    )), cr(e), i;
  }
  function cr(e) {
    b.H = un;
    var l = oe !== null && oe.next !== null;
    if (wl = 0, Me = oe = k = null, fi = !1, tn = 0, ga = null, l) throw Error(d(300));
    e === null || Oe || (e = e.dependencies, e !== null && ei(e) && (Oe = !0));
  }
  function sr(e, l, t, a) {
    k = e;
    var n = 0;
    do {
      if (ya && (ga = null), tn = 0, ya = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Me = oe = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      b.H = Vr, i = l(t, a);
    } while (ya);
    return i;
  }
  function bm() {
    var e = b.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? an(l) : l, e = e.useState()[0], (oe !== null ? oe.memoizedState : null) !== e && (k.flags |= 1024), l;
  }
  function cc() {
    var e = ri !== 0;
    return ri = 0, e;
  }
  function sc(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function fc(e) {
    if (fi) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      fi = !1;
    }
    wl = 0, Me = oe = k = null, ya = !1, tn = ri = 0, ga = null;
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Me === null ? k.memoizedState = Me = e : Me = Me.next = e, Me;
  }
  function Ee() {
    if (oe === null) {
      var e = k.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = oe.next;
    var l = Me === null ? k.memoizedState : Me.next;
    if (l !== null)
      Me = l, oe = e;
    else {
      if (e === null)
        throw k.alternate === null ? Error(d(467)) : Error(d(310));
      oe = e, e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null
      }, Me === null ? k.memoizedState = Me = e : Me = Me.next = e;
    }
    return Me;
  }
  function di() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function an(e) {
    var l = tn;
    return tn += 1, ga === null && (ga = []), e = If(ga, e, l), l = k, (Me === null ? l.memoizedState : Me.next) === null && (l = l.alternate, b.H = l === null || l.memoizedState === null ? Lr : bc), e;
  }
  function oi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return an(e);
      if (e.$$typeof === ze) return Xe(e);
    }
    throw Error(d(438, String(e)));
  }
  function rc(e) {
    var l = null, t = k.updateQueue;
    if (t !== null && (l = t.memoCache), l == null) {
      var a = k.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = di(), k.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), a = 0; a < e; a++)
        t[a] = Cl;
    return l.index++, t;
  }
  function Kl(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function hi(e) {
    var l = Ee();
    return dc(l, oe, e);
  }
  function dc(e, l, t) {
    var a = e.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = t;
    var n = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = i.next, i.next = c;
      }
      l.baseQueue = n = i, a.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      l = n.next;
      var s = c = null, r = null, y = l, S = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? (ee & E) === E : (wl & E) === E) {
          var x = y.revertLane;
          if (x === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === da && (S = !0);
          else if ((wl & x) === x) {
            y = y.next, x === da && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, r === null ? (s = r = E, c = i) : r = r.next = E, k.lanes |= x, gt |= x;
          E = y.action, Lt && t(i, E), i = y.hasEagerState ? y.eagerState : t(i, E);
        } else
          x = {
            lane: E,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, r === null ? (s = r = x, c = i) : r = r.next = x, k.lanes |= E, gt |= E;
        y = y.next;
      } while (y !== null && y !== l);
      if (r === null ? c = i : r.next = s, !rl(i, e.memoizedState) && (Oe = !0, S && (t = oa, t !== null)))
        throw t;
      e.memoizedState = i, e.baseState = c, e.baseQueue = r, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function oc(e) {
    var l = Ee(), t = l.queue;
    if (t === null) throw Error(d(311));
    t.lastRenderedReducer = e;
    var a = t.dispatch, n = t.pending, i = l.memoizedState;
    if (n !== null) {
      t.pending = null;
      var c = n = n.next;
      do
        i = e(i, c.action), c = c.next;
      while (c !== n);
      rl(i, l.memoizedState) || (Oe = !0), l.memoizedState = i, l.baseQueue === null && (l.baseState = i), t.lastRenderedState = i;
    }
    return [i, a];
  }
  function fr(e, l, t) {
    var a = k, n = Ee(), i = ae;
    if (i) {
      if (t === void 0) throw Error(d(407));
      t = t();
    } else t = l();
    var c = !rl(
      (oe || n).memoizedState,
      t
    );
    if (c && (n.memoizedState = t, Oe = !0), n = n.queue, vc(or.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== l || c || Me !== null && Me.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        dr.bind(
          null,
          a,
          n,
          t,
          l
        ),
        null
      ), ve === null) throw Error(d(349));
      i || (wl & 127) !== 0 || rr(a, l, t);
    }
    return t;
  }
  function rr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = k.updateQueue, l === null ? (l = di(), k.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function dr(e, l, t, a) {
    l.value = t, l.getSnapshot = a, hr(l) && mr(e);
  }
  function or(e, l, t) {
    return t(function() {
      hr(l) && mr(e);
    });
  }
  function hr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !rl(e, t);
    } catch {
      return !0;
    }
  }
  function mr(e) {
    var l = Rt(e, 2);
    l !== null && il(l, e, 2);
  }
  function hc(e) {
    var l = ke();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), Lt) {
        at(!0);
        try {
          t();
        } finally {
          at(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = e, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kl,
      lastRenderedState: e
    }, l;
  }
  function vr(e, l, t, a) {
    return e.baseState = t, dc(
      e,
      oe,
      typeof a == "function" ? a : Kl
    );
  }
  function Sm(e, l, t, a, n) {
    if (yi(e)) throw Error(d(485));
    if (e = l.action, e !== null) {
      var i = {
        payload: n,
        action: e,
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
      b.T !== null ? t(!0) : i.isTransition = !1, a(i), t = l.pending, t === null ? (i.next = l.pending = i, yr(l, i)) : (i.next = t.next, l.pending = t.next = i);
    }
  }
  function yr(e, l) {
    var t = l.action, a = l.payload, n = e.state;
    if (l.isTransition) {
      var i = b.T, c = {};
      b.T = c;
      try {
        var s = t(n, a), r = b.S;
        r !== null && r(c, s), gr(e, l, s);
      } catch (y) {
        mc(e, l, y);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), b.T = i;
      }
    } else
      try {
        i = t(n, a), gr(e, l, i);
      } catch (y) {
        mc(e, l, y);
      }
  }
  function gr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        xr(e, l, a);
      },
      function(a) {
        return mc(e, l, a);
      }
    ) : xr(e, l, t);
  }
  function xr(e, l, t) {
    l.status = "fulfilled", l.value = t, pr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, yr(e, t)));
  }
  function mc(e, l, t) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = t, pr(l), l = l.next;
      while (l !== a);
    }
    e.action = null;
  }
  function pr(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function jr(e, l) {
    return l;
  }
  function br(e, l) {
    if (ae) {
      var t = ve.formState;
      if (t !== null) {
        e: {
          var a = k;
          if (ae) {
            if (ye) {
              l: {
                for (var n = ye, i = zl; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break l;
                  }
                  if (n = _l(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                ye = _l(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            st(a);
          }
          a = !1;
        }
        a && (l = t[0]);
      }
    }
    return t = ke(), t.memoizedState = t.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jr,
      lastRenderedState: l
    }, t.queue = a, t = Xr.bind(
      null,
      k,
      a
    ), a.dispatch = t, a = hc(!1), i = jc.bind(
      null,
      k,
      !1,
      a.queue
    ), a = ke(), n = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, t = Sm.bind(
      null,
      k,
      n,
      i,
      t
    ), n.dispatch = t, a.memoizedState = e, [l, t, !1];
  }
  function Sr(e) {
    var l = Ee();
    return zr(l, oe, e);
  }
  function zr(e, l, t) {
    if (l = dc(
      e,
      l,
      jr
    )[0], e = hi(Kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = an(l);
      } catch (c) {
        throw c === ha ? ai : c;
      }
    else a = l;
    l = Ee();
    var n = l.queue, i = n.dispatch;
    return t !== l.memoizedState && (k.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      zm.bind(null, n, t),
      null
    )), [a, i, e];
  }
  function zm(e, l) {
    e.action = l;
  }
  function Nr(e) {
    var l = Ee(), t = oe;
    if (t !== null)
      return zr(l, t, e);
    Ee(), l = l.memoizedState, t = Ee();
    var a = t.queue.dispatch;
    return t.memoizedState = e, [l, a, !1];
  }
  function xa(e, l, t, a) {
    return e = { tag: e, create: t, deps: a, inst: l, next: null }, l = k.updateQueue, l === null && (l = di(), k.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (a = t.next, t.next = e, e.next = a, l.lastEffect = e), e;
  }
  function _r() {
    return Ee().memoizedState;
  }
  function mi(e, l, t, a) {
    var n = ke();
    k.flags |= e, n.memoizedState = xa(
      1 | l,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function vi(e, l, t, a) {
    var n = Ee();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    oe !== null && a !== null && ic(a, oe.memoizedState.deps) ? n.memoizedState = xa(l, i, t, a) : (k.flags |= e, n.memoizedState = xa(
      1 | l,
      i,
      t,
      a
    ));
  }
  function Er(e, l) {
    mi(8390656, 8, e, l);
  }
  function vc(e, l) {
    vi(2048, 8, e, l);
  }
  function Nm(e) {
    k.flags |= 4;
    var l = k.updateQueue;
    if (l === null)
      l = di(), k.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function Ar(e) {
    var l = Ee().memoizedState;
    return Nm({ ref: l, nextImpl: e }), function() {
      if ((ce & 2) !== 0) throw Error(d(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Tr(e, l) {
    return vi(4, 2, e, l);
  }
  function Mr(e, l) {
    return vi(4, 4, e, l);
  }
  function Or(e, l) {
    if (typeof l == "function") {
      e = e();
      var t = l(e);
      return function() {
        typeof t == "function" ? t() : l(null);
      };
    }
    if (l != null)
      return e = e(), l.current = e, function() {
        l.current = null;
      };
  }
  function Dr(e, l, t) {
    t = t != null ? t.concat([e]) : null, vi(4, 4, Or.bind(null, l, e), t);
  }
  function yc() {
  }
  function Cr(e, l) {
    var t = Ee();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    return l !== null && ic(l, a[1]) ? a[0] : (t.memoizedState = [e, l], e);
  }
  function Ur(e, l) {
    var t = Ee();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    if (l !== null && ic(l, a[1]))
      return a[0];
    if (a = e(), Lt) {
      at(!0);
      try {
        e();
      } finally {
        at(!1);
      }
    }
    return t.memoizedState = [a, l], a;
  }
  function gc(e, l, t) {
    return t === void 0 || (wl & 1073741824) !== 0 && (ee & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = Rd(), k.lanes |= e, gt |= e, t);
  }
  function Rr(e, l, t, a) {
    return rl(t, l) ? t : va.current !== null ? (e = gc(e, t, a), rl(e, l) || (Oe = !0), e) : (wl & 42) === 0 || (wl & 1073741824) !== 0 && (ee & 261930) === 0 ? (Oe = !0, e.memoizedState = t) : (e = Rd(), k.lanes |= e, gt |= e, l);
  }
  function Hr(e, l, t, a, n) {
    var i = D.p;
    D.p = i !== 0 && 8 > i ? i : 8;
    var c = b.T, s = {};
    b.T = s, jc(e, !1, l, t);
    try {
      var r = n(), y = b.S;
      if (y !== null && y(s, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var S = pm(
          r,
          a
        );
        nn(
          e,
          l,
          S,
          yl(e)
        );
      } else
        nn(
          e,
          l,
          a,
          yl(e)
        );
    } catch (E) {
      nn(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: E },
        yl()
      );
    } finally {
      D.p = i, c !== null && s.types !== null && (c.types = s.types), b.T = c;
    }
  }
  function _m() {
  }
  function xc(e, l, t, a) {
    if (e.tag !== 5) throw Error(d(476));
    var n = qr(e).queue;
    Hr(
      e,
      n,
      l,
      X,
      t === null ? _m : function() {
        return Br(e), t(a);
      }
    );
  }
  function qr(e) {
    var l = e.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: X
      },
      next: null
    };
    var t = {};
    return l.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: t
      },
      next: null
    }, e.memoizedState = l, e = e.alternate, e !== null && (e.memoizedState = l), l;
  }
  function Br(e) {
    var l = qr(e);
    l.next === null && (l = e.alternate.memoizedState), nn(
      e,
      l.next.queue,
      {},
      yl()
    );
  }
  function pc() {
    return Xe(Sn);
  }
  function Yr() {
    return Ee().memoizedState;
  }
  function Gr() {
    return Ee().memoizedState;
  }
  function Em(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = yl();
          e = dt(t);
          var a = ot(l, e, t);
          a !== null && (il(a, l, t), Pa(a, l, t)), l = { cache: ku() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Am(e, l, t) {
    var a = yl();
    t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(e) ? Qr(l, t) : (t = Bu(e, l, t, a), t !== null && (il(t, e, a), Zr(t, l, a)));
  }
  function Xr(e, l, t) {
    var a = yl();
    nn(e, l, t, a);
  }
  function nn(e, l, t, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yi(e)) Qr(l, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = l.lastRenderedReducer, i !== null))
        try {
          var c = l.lastRenderedState, s = i(c, t);
          if (n.hasEagerState = !0, n.eagerState = s, rl(s, c))
            return Wn(e, l, n, 0), ve === null && $n(), !1;
        } catch {
        }
      if (t = Bu(e, l, n, a), t !== null)
        return il(t, e, a), Zr(t, l, a), !0;
    }
    return !1;
  }
  function jc(e, l, t, a) {
    if (a = {
      lane: 2,
      revertLane: Ic(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(e)) {
      if (l) throw Error(d(479));
    } else
      l = Bu(
        e,
        t,
        a,
        2
      ), l !== null && il(l, e, 2);
  }
  function yi(e) {
    var l = e.alternate;
    return e === k || l !== null && l === k;
  }
  function Qr(e, l) {
    ya = fi = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function Zr(e, l, t) {
    if ((t & 4194048) !== 0) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, Ks(e, t);
    }
  }
  var un = {
    readContext: Xe,
    use: oi,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useLayoutEffect: je,
    useInsertionEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useSyncExternalStore: je,
    useId: je,
    useHostTransitionStatus: je,
    useFormState: je,
    useActionState: je,
    useOptimistic: je,
    useMemoCache: je,
    useCacheRefresh: je
  };
  un.useEffectEvent = je;
  var Lr = {
    readContext: Xe,
    use: oi,
    useCallback: function(e, l) {
      return ke().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: Xe,
    useEffect: Er,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, mi(
        4194308,
        4,
        Or.bind(null, l, e),
        t
      );
    },
    useLayoutEffect: function(e, l) {
      return mi(4194308, 4, e, l);
    },
    useInsertionEffect: function(e, l) {
      mi(4, 2, e, l);
    },
    useMemo: function(e, l) {
      var t = ke();
      l = l === void 0 ? null : l;
      var a = e();
      if (Lt) {
        at(!0);
        try {
          e();
        } finally {
          at(!1);
        }
      }
      return t.memoizedState = [a, l], a;
    },
    useReducer: function(e, l, t) {
      var a = ke();
      if (t !== void 0) {
        var n = t(l);
        if (Lt) {
          at(!0);
          try {
            t(l);
          } finally {
            at(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = Am.bind(
        null,
        k,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var l = ke();
      return e = { current: e }, l.memoizedState = e;
    },
    useState: function(e) {
      e = hc(e);
      var l = e.queue, t = Xr.bind(null, k, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: yc,
    useDeferredValue: function(e, l) {
      var t = ke();
      return gc(t, e, l);
    },
    useTransition: function() {
      var e = hc(!1);
      return e = Hr.bind(
        null,
        k,
        e.queue,
        !0,
        !1
      ), ke().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var a = k, n = ke();
      if (ae) {
        if (t === void 0)
          throw Error(d(407));
        t = t();
      } else {
        if (t = l(), ve === null)
          throw Error(d(349));
        (ee & 127) !== 0 || rr(a, l, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: l };
      return n.queue = i, Er(or.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        dr.bind(
          null,
          a,
          i,
          t,
          l
        ),
        null
      ), t;
    },
    useId: function() {
      var e = ke(), l = ve.identifierPrefix;
      if (ae) {
        var t = Rl, a = Ul;
        t = (a & ~(1 << 32 - fl(a) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = ri++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = jm++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: pc,
    useFormState: br,
    useActionState: br,
    useOptimistic: function(e) {
      var l = ke();
      l.memoizedState = l.baseState = e;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = t, l = jc.bind(
        null,
        k,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: rc,
    useCacheRefresh: function() {
      return ke().memoizedState = Em.bind(
        null,
        k
      );
    },
    useEffectEvent: function(e) {
      var l = ke(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((ce & 2) !== 0)
          throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, bc = {
    readContext: Xe,
    use: oi,
    useCallback: Cr,
    useContext: Xe,
    useEffect: vc,
    useImperativeHandle: Dr,
    useInsertionEffect: Tr,
    useLayoutEffect: Mr,
    useMemo: Ur,
    useReducer: hi,
    useRef: _r,
    useState: function() {
      return hi(Kl);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, l) {
      var t = Ee();
      return Rr(
        t,
        oe.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = hi(Kl)[0], l = Ee().memoizedState;
      return [
        typeof e == "boolean" ? e : an(e),
        l
      ];
    },
    useSyncExternalStore: fr,
    useId: Yr,
    useHostTransitionStatus: pc,
    useFormState: Sr,
    useActionState: Sr,
    useOptimistic: function(e, l) {
      var t = Ee();
      return vr(t, oe, e, l);
    },
    useMemoCache: rc,
    useCacheRefresh: Gr
  };
  bc.useEffectEvent = Ar;
  var Vr = {
    readContext: Xe,
    use: oi,
    useCallback: Cr,
    useContext: Xe,
    useEffect: vc,
    useImperativeHandle: Dr,
    useInsertionEffect: Tr,
    useLayoutEffect: Mr,
    useMemo: Ur,
    useReducer: oc,
    useRef: _r,
    useState: function() {
      return oc(Kl);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, l) {
      var t = Ee();
      return oe === null ? gc(t, e, l) : Rr(
        t,
        oe.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = oc(Kl)[0], l = Ee().memoizedState;
      return [
        typeof e == "boolean" ? e : an(e),
        l
      ];
    },
    useSyncExternalStore: fr,
    useId: Yr,
    useHostTransitionStatus: pc,
    useFormState: Nr,
    useActionState: Nr,
    useOptimistic: function(e, l) {
      var t = Ee();
      return oe !== null ? vr(t, oe, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: rc,
    useCacheRefresh: Gr
  };
  Vr.useEffectEvent = Ar;
  function Sc(e, l, t, a) {
    l = e.memoizedState, t = t(a, l), t = t == null ? l : U({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var zc = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var a = yl(), n = dt(a);
      n.payload = l, t != null && (n.callback = t), l = ot(e, n, a), l !== null && (il(l, e, a), Pa(l, e, a));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var a = yl(), n = dt(a);
      n.tag = 1, n.payload = l, t != null && (n.callback = t), l = ot(e, n, a), l !== null && (il(l, e, a), Pa(l, e, a));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = yl(), a = dt(t);
      a.tag = 2, l != null && (a.callback = l), l = ot(e, a, t), l !== null && (il(l, e, t), Pa(l, e, t));
    }
  };
  function wr(e, l, t, a, n, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : l.prototype && l.prototype.isPureReactComponent ? !wa(t, a) || !wa(n, i) : !0;
  }
  function Kr(e, l, t, a) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, a), l.state !== e && zc.enqueueReplaceState(l, l.state, null);
  }
  function Vt(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var a in l)
        a !== "ref" && (t[a] = l[a]);
    }
    if (e = e.defaultProps) {
      t === l && (t = U({}, t));
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    }
    return t;
  }
  function Jr(e) {
    kn(e);
  }
  function kr(e) {
    console.error(e);
  }
  function $r(e) {
    kn(e);
  }
  function gi(e, l) {
    try {
      var t = e.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wr(e, l, t) {
    try {
      var a = e.onCaughtError;
      a(t.value, {
        componentStack: t.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Nc(e, l, t) {
    return t = dt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      gi(e, l);
    }, t;
  }
  function Fr(e) {
    return e = dt(e), e.tag = 3, e;
  }
  function Ir(e, l, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        Wr(l, t, a);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Wr(l, t, a), typeof n != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Tm(e, l, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = t.alternate, l !== null && ra(
        l,
        t,
        n,
        !0
      ), t = ol.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Nl === null ? Mi() : t.alternate === null && be === 0 && (be = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === ni ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), $c(e, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === ni ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), $c(e, a, n)), !1;
        }
        throw Error(d(435, t.tag));
      }
      return $c(e, a, n), Mi(), !1;
    }
    if (ae)
      return l = ol.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Lu && (e = Error(d(422), { cause: a }), ka(jl(e, t)))) : (a !== Lu && (l = Error(d(423), {
        cause: a
      }), ka(
        jl(l, t)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = jl(a, t), n = Nc(
        e.stateNode,
        a,
        n
      ), ec(e, n), be !== 4 && (be = 2)), !1;
    var i = Error(d(520), { cause: a });
    if (i = jl(i, t), mn === null ? mn = [i] : mn.push(i), be !== 4 && (be = 2), l === null) return !0;
    a = jl(a, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = n & -n, t.lanes |= e, e = Nc(t.stateNode, a, e), ec(t, e), !1;
        case 1:
          if (l = t.type, i = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (xt === null || !xt.has(i))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = Fr(n), Ir(
              n,
              e,
              t,
              a
            ), ec(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var _c = Error(d(461)), Oe = !1;
  function Qe(e, l, t, a) {
    l.child = e === null ? tr(l, null, t, a) : Zt(
      l,
      e.child,
      t,
      a
    );
  }
  function Pr(e, l, t, a, n) {
    t = t.render;
    var i = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return Yt(l), a = uc(
      e,
      l,
      t,
      c,
      i,
      n
    ), s = cc(), e !== null && !Oe ? (sc(e, l, n), Jl(e, l, n)) : (ae && s && Qu(l), l.flags |= 1, Qe(e, l, a, n), l.child);
  }
  function ed(e, l, t, a, n) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" && !Yu(i) && i.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = i, ld(
        e,
        l,
        i,
        a,
        n
      )) : (e = In(
        t.type,
        null,
        a,
        l,
        l.mode,
        n
      ), e.ref = l.ref, e.return = l, l.child = e);
    }
    if (i = e.child, !Uc(e, n)) {
      var c = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : wa, t(c, a) && e.ref === l.ref)
        return Jl(e, l, n);
    }
    return l.flags |= 1, e = Ql(i, a), e.ref = l.ref, e.return = l, l.child = e;
  }
  function ld(e, l, t, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (wa(i, a) && e.ref === l.ref)
        if (Oe = !1, l.pendingProps = a = i, Uc(e, n))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else
          return l.lanes = e.lanes, Jl(e, l, n);
    }
    return Ec(
      e,
      l,
      t,
      a,
      n
    );
  }
  function td(e, l, t, a) {
    var n = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | t : t, e !== null) {
          for (a = l.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, l.child = null;
        return ad(
          e,
          l,
          i,
          t,
          a
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ti(
          l,
          i !== null ? i.cachePool : null
        ), i !== null ? ir(l, i) : tc(), ur(l);
      else
        return a = l.lanes = 536870912, ad(
          e,
          l,
          i !== null ? i.baseLanes | t : t,
          t,
          a
        );
    } else
      i !== null ? (ti(l, i.cachePool), ir(l, i), mt(), l.memoizedState = null) : (e !== null && ti(l, null), tc(), mt());
    return Qe(e, l, n, t), l.child;
  }
  function cn(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function ad(e, l, t, a, n) {
    var i = Wu();
    return i = i === null ? null : { parent: Te._currentValue, pool: i }, l.memoizedState = {
      baseLanes: t,
      cachePool: i
    }, e !== null && ti(l, null), tc(), ur(l), e !== null && ra(e, l, a, !0), l.childLanes = n, null;
  }
  function xi(e, l) {
    return l = ji(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function nd(e, l, t) {
    return Zt(l, e.child, null, t), e = xi(l, l.pendingProps), e.flags |= 2, hl(l), l.memoizedState = null, e;
  }
  function Mm(e, l, t) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (ae) {
        if (a.mode === "hidden")
          return e = xi(l, a), l.lanes = 536870912, cn(null, e);
        if (nc(l), (e = ye) ? (e = go(
          e,
          zl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ut !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Qf(e), t.return = l, l.child = t, Ge = l, ye = null)) : e = null, e === null) throw st(l);
        return l.lanes = 536870912, null;
      }
      return xi(l, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (nc(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = nd(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(d(558));
      else if (Oe || ra(e, l, t, !1), n = (t & e.childLanes) !== 0, Oe || n) {
        if (a = ve, a !== null && (c = Js(a, t), c !== 0 && c !== i.retryLane))
          throw i.retryLane = c, Rt(e, c), il(a, e, c), _c;
        Mi(), l = nd(
          e,
          l,
          t
        );
      } else
        e = i.treeContext, ye = _l(c.nextSibling), Ge = l, ae = !0, ct = null, zl = !1, e !== null && Vf(l, e), l = xi(l, a), l.flags |= 4096;
      return l;
    }
    return e = Ql(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function pi(e, l) {
    var t = l.ref;
    if (t === null)
      e !== null && e.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(d(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function Ec(e, l, t, a, n) {
    return Yt(l), t = uc(
      e,
      l,
      t,
      a,
      void 0,
      n
    ), a = cc(), e !== null && !Oe ? (sc(e, l, n), Jl(e, l, n)) : (ae && a && Qu(l), l.flags |= 1, Qe(e, l, t, n), l.child);
  }
  function id(e, l, t, a, n, i) {
    return Yt(l), l.updateQueue = null, t = sr(
      l,
      a,
      t,
      n
    ), cr(e), a = cc(), e !== null && !Oe ? (sc(e, l, i), Jl(e, l, i)) : (ae && a && Qu(l), l.flags |= 1, Qe(e, l, t, i), l.child);
  }
  function ud(e, l, t, a, n) {
    if (Yt(l), l.stateNode === null) {
      var i = ua, c = t.contextType;
      typeof c == "object" && c !== null && (i = Xe(c)), i = new t(a, i), l.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = zc, l.stateNode = i, i._reactInternals = l, i = l.stateNode, i.props = a, i.state = l.memoizedState, i.refs = {}, Iu(l), c = t.contextType, i.context = typeof c == "object" && c !== null ? Xe(c) : ua, i.state = l.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Sc(
        l,
        t,
        c,
        a
      ), i.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && zc.enqueueReplaceState(i, i.state, null), ln(l, a, i, n), en(), i.state = l.memoizedState), typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = l.stateNode;
      var s = l.memoizedProps, r = Vt(t, s);
      i.props = r;
      var y = i.context, S = t.contextType;
      c = ua, typeof S == "object" && S !== null && (c = Xe(S));
      var E = t.getDerivedStateFromProps;
      S = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, S || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || y !== c) && Kr(
        l,
        i,
        a,
        c
      ), rt = !1;
      var x = l.memoizedState;
      i.state = x, ln(l, a, i, n), en(), y = l.memoizedState, s || x !== y || rt ? (typeof E == "function" && (Sc(
        l,
        t,
        E,
        a
      ), y = l.memoizedState), (r = rt || wr(
        l,
        t,
        r,
        a,
        x,
        y,
        c
      )) ? (S || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = y), i.props = a, i.state = y, i.context = c, a = r) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      i = l.stateNode, Pu(e, l), c = l.memoizedProps, S = Vt(t, c), i.props = S, E = l.pendingProps, x = i.context, y = t.contextType, r = ua, typeof y == "object" && y !== null && (r = Xe(y)), s = t.getDerivedStateFromProps, (y = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== E || x !== r) && Kr(
        l,
        i,
        a,
        r
      ), rt = !1, x = l.memoizedState, i.state = x, ln(l, a, i, n), en();
      var j = l.memoizedState;
      c !== E || x !== j || rt || e !== null && e.dependencies !== null && ei(e.dependencies) ? (typeof s == "function" && (Sc(
        l,
        t,
        s,
        a
      ), j = l.memoizedState), (S = rt || wr(
        l,
        t,
        S,
        a,
        x,
        j,
        r
      ) || e !== null && e.dependencies !== null && ei(e.dependencies)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, j, r), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        j,
        r
      )), typeof i.componentDidUpdate == "function" && (l.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = j), i.props = a, i.state = j, i.context = r, a = S) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), a = !1);
    }
    return i = a, pi(e, l), a = (l.flags & 128) !== 0, i || a ? (i = l.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : i.render(), l.flags |= 1, e !== null && a ? (l.child = Zt(
      l,
      e.child,
      null,
      n
    ), l.child = Zt(
      l,
      null,
      t,
      n
    )) : Qe(e, l, t, n), l.memoizedState = i.state, e = l.child) : e = Jl(
      e,
      l,
      n
    ), e;
  }
  function cd(e, l, t, a) {
    return qt(), l.flags |= 256, Qe(e, l, t, a), l.child;
  }
  var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Tc(e) {
    return { baseLanes: e, cachePool: Wf() };
  }
  function Mc(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= vl), e;
  }
  function sd(e, l, t) {
    var a = l.pendingProps, n = !1, i = (l.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0), c && (n = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (ae) {
        if (n ? ht(l) : mt(), (e = ye) ? (e = go(
          e,
          zl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ut !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Qf(e), t.return = l, l.child = t, Ge = l, ye = null)) : e = null, e === null) throw st(l);
        return ds(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (mt(), n = l.mode, s = ji(
        { mode: "hidden", children: s },
        n
      ), a = Ht(
        a,
        n,
        t,
        null
      ), s.return = l, a.return = l, s.sibling = a, l.child = s, a = l.child, a.memoizedState = Tc(t), a.childLanes = Mc(
        e,
        c,
        t
      ), l.memoizedState = Ac, cn(null, a)) : (ht(l), Oc(l, s));
    }
    var r = e.memoizedState;
    if (r !== null && (s = r.dehydrated, s !== null)) {
      if (i)
        l.flags & 256 ? (ht(l), l.flags &= -257, l = Dc(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (mt(), l.child = e.child, l.flags |= 128, l = null) : (mt(), s = a.fallback, n = l.mode, a = ji(
          { mode: "visible", children: a.children },
          n
        ), s = Ht(
          s,
          n,
          t,
          null
        ), s.flags |= 2, a.return = l, s.return = l, a.sibling = s, l.child = a, Zt(
          l,
          e.child,
          null,
          t
        ), a = l.child, a.memoizedState = Tc(t), a.childLanes = Mc(
          e,
          c,
          t
        ), l.memoizedState = Ac, l = cn(null, a));
      else if (ht(l), ds(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var y = c.dgst;
        c = y, a = Error(d(419)), a.stack = "", a.digest = c, ka({ value: a, source: null, stack: null }), l = Dc(
          e,
          l,
          t
        );
      } else if (Oe || ra(e, l, t, !1), c = (t & e.childLanes) !== 0, Oe || c) {
        if (c = ve, c !== null && (a = Js(c, t), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Rt(e, a), il(c, e, a), _c;
        rs(s) || Mi(), l = Dc(
          e,
          l,
          t
        );
      } else
        rs(s) ? (l.flags |= 192, l.child = e.child, l = null) : (e = r.treeContext, ye = _l(
          s.nextSibling
        ), Ge = l, ae = !0, ct = null, zl = !1, e !== null && Vf(l, e), l = Oc(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (mt(), s = a.fallback, n = l.mode, r = e.child, y = r.sibling, a = Ql(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, y !== null ? s = Ql(
      y,
      s
    ) : (s = Ht(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = l, a.return = l, a.sibling = s, l.child = a, cn(null, a), a = l.child, s = e.child.memoizedState, s === null ? s = Tc(t) : (n = s.cachePool, n !== null ? (r = Te._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = Wf(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Mc(
      e,
      c,
      t
    ), l.memoizedState = Ac, cn(e.child, a)) : (ht(l), t = e.child, e = t.sibling, t = Ql(t, {
      mode: "visible",
      children: a.children
    }), t.return = l, t.sibling = null, e !== null && (c = l.deletions, c === null ? (l.deletions = [e], l.flags |= 16) : c.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function Oc(e, l) {
    return l = ji(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function ji(e, l) {
    return e = dl(22, e, null, l), e.lanes = 0, e;
  }
  function Dc(e, l, t) {
    return Zt(l, e.child, null, t), e = Oc(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function fd(e, l, t) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l), Ku(e.return, l, t);
  }
  function Cc(e, l, t, a, n, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: t,
      tailMode: n,
      treeForkCount: i
    } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = t, c.tailMode = n, c.treeForkCount = i);
  }
  function rd(e, l, t) {
    var a = l.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var c = _e.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, C(_e, c), Qe(e, l, a, t), a = ae ? Ja : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && fd(e, t, l);
        else if (e.tag === 19)
          fd(e, t, l);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === l) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (t = l.child, n = null; t !== null; )
          e = t.alternate, e !== null && si(e) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = l.child, l.child = null) : (n = t.sibling, t.sibling = null), Cc(
          l,
          !1,
          n,
          t,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = l.child, l.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && si(e) === null) {
            l.child = n;
            break;
          }
          e = n.sibling, n.sibling = t, t = n, n = e;
        }
        Cc(
          l,
          !0,
          t,
          null,
          i,
          a
        );
        break;
      case "together":
        Cc(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Jl(e, l, t) {
    if (e !== null && (l.dependencies = e.dependencies), gt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (ra(
          e,
          l,
          t,
          !1
        ), (t & l.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && l.child !== e.child)
      throw Error(d(153));
    if (l.child !== null) {
      for (e = l.child, t = Ql(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Ql(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function Uc(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ei(e)));
  }
  function Om(e, l, t) {
    switch (l.tag) {
      case 3:
        Je(l, l.stateNode.containerInfo), ft(l, Te, e.memoizedState.cache), qt();
        break;
      case 27:
      case 5:
        Ca(l);
        break;
      case 4:
        Je(l, l.stateNode.containerInfo);
        break;
      case 10:
        ft(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, nc(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ht(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? sd(e, l, t) : (ht(l), e = Jl(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        ht(l);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (t & l.childLanes) !== 0, a || (ra(
          e,
          l,
          t,
          !1
        ), a = (t & l.childLanes) !== 0), n) {
          if (a)
            return rd(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), C(_e, _e.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, td(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        ft(l, Te, e.memoizedState.cache);
    }
    return Jl(e, l, t);
  }
  function dd(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        Oe = !0;
      else {
        if (!Uc(e, t) && (l.flags & 128) === 0)
          return Oe = !1, Om(
            e,
            l,
            t
          );
        Oe = (e.flags & 131072) !== 0;
      }
    else
      Oe = !1, ae && (l.flags & 1048576) !== 0 && Lf(l, Ja, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var a = l.pendingProps;
          if (e = Xt(l.elementType), l.type = e, typeof e == "function")
            Yu(e) ? (a = Vt(e, a), l.tag = 1, l = ud(
              null,
              l,
              e,
              a,
              t
            )) : (l.tag = 0, l = Ec(
              null,
              l,
              e,
              a,
              t
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Ve) {
                l.tag = 11, l = Pr(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              } else if (n === W) {
                l.tag = 14, l = ed(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              }
            }
            throw l = Ie(e) || e, Error(d(306, l, ""));
          }
        }
        return l;
      case 0:
        return Ec(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return a = l.type, n = Vt(
          a,
          l.pendingProps
        ), ud(
          e,
          l,
          a,
          n,
          t
        );
      case 3:
        e: {
          if (Je(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(d(387));
          a = l.pendingProps;
          var i = l.memoizedState;
          n = i.element, Pu(e, l), ln(l, a, null, t);
          var c = l.memoizedState;
          if (a = c.cache, ft(l, Te, a), a !== i.cache && Ju(
            l,
            [Te],
            t,
            !0
          ), en(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = i, l.memoizedState = i, l.flags & 256) {
              l = cd(
                e,
                l,
                a,
                t
              );
              break e;
            } else if (a !== n) {
              n = jl(
                Error(d(424)),
                l
              ), ka(n), l = cd(
                e,
                l,
                a,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ye = _l(e.firstChild), Ge = l, ae = !0, ct = null, zl = !0, t = tr(
                l,
                null,
                a,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (qt(), a === n) {
              l = Jl(
                e,
                l,
                t
              );
              break e;
            }
            Qe(e, l, a, t);
          }
          l = l.child;
        }
        return l;
      case 26:
        return pi(e, l), e === null ? (t = zo(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : ae || (t = l.type, e = l.pendingProps, a = qi(
          F.current
        ).createElement(t), a[Ye] = l, a[Pe] = e, Ze(a, t, e), He(a), l.stateNode = a) : l.memoizedState = zo(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ca(l), e === null && ae && (a = l.stateNode = jo(
          l.type,
          l.pendingProps,
          F.current
        ), Ge = l, zl = !0, n = ye, St(l.type) ? (os = n, ye = _l(a.firstChild)) : ye = n), Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), pi(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && ae && ((n = a = ye) && (a = uv(
          a,
          l.type,
          l.pendingProps,
          zl
        ), a !== null ? (l.stateNode = a, Ge = l, ye = _l(a.firstChild), zl = !1, n = !0) : n = !1), n || st(l)), Ca(l), n = l.type, i = l.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, cs(n, i) ? a = null : c !== null && cs(n, c) && (l.flags |= 32), l.memoizedState !== null && (n = uc(
          e,
          l,
          bm,
          null,
          null,
          t
        ), Sn._currentValue = n), pi(e, l), Qe(e, l, a, t), l.child;
      case 6:
        return e === null && ae && ((e = t = ye) && (t = cv(
          t,
          l.pendingProps,
          zl
        ), t !== null ? (l.stateNode = t, Ge = l, ye = null, e = !0) : e = !1), e || st(l)), null;
      case 13:
        return sd(e, l, t);
      case 4:
        return Je(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, e === null ? l.child = Zt(
          l,
          null,
          a,
          t
        ) : Qe(e, l, a, t), l.child;
      case 11:
        return Pr(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 7:
        return Qe(
          e,
          l,
          l.pendingProps,
          t
        ), l.child;
      case 8:
        return Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 12:
        return Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 10:
        return a = l.pendingProps, ft(l, l.type, a.value), Qe(e, l, a.children, t), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Yt(l), n = Xe(n), a = a(n), l.flags |= 1, Qe(e, l, a, t), l.child;
      case 14:
        return ed(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return ld(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return rd(e, l, t);
      case 31:
        return Mm(e, l, t);
      case 22:
        return td(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return Yt(l), a = Xe(Te), e === null ? (n = Wu(), n === null && (n = ve, i = ku(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= t), n = i), l.memoizedState = { parent: a, cache: n }, Iu(l), ft(l, Te, n)) : ((e.lanes & t) !== 0 && (Pu(e, l), ln(l, null, null, t), en()), n = e.memoizedState, i = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), ft(l, Te, a)) : (a = i.cache, ft(l, Te, a), a !== n.cache && Ju(
          l,
          [Te],
          t,
          !0
        ))), Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(d(156, l.tag));
  }
  function kl(e) {
    e.flags |= 4;
  }
  function Rc(e, l, t, a, n) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Yd()) e.flags |= 8192;
        else
          throw Qt = ni, Fu;
    } else e.flags &= -16777217;
  }
  function od(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !To(l))
      if (Yd()) e.flags |= 8192;
      else
        throw Qt = ni, Fu;
  }
  function bi(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? Vs() : 536870912, e.lanes |= l, Sa |= l);
  }
  function sn(e, l) {
    if (!ae)
      switch (e.tailMode) {
        case "hidden":
          l = e.tail;
          for (var t = null; l !== null; )
            l.alternate !== null && (t = l), l = l.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function ge(e) {
    var l = e.alternate !== null && e.alternate.child === e.child, t = 0, a = 0;
    if (l)
      for (var n = e.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = t, l;
  }
  function Dm(e, l, t) {
    var a = l.pendingProps;
    switch (Zu(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ge(l), null;
      case 1:
        return ge(l), null;
      case 3:
        return t = l.stateNode, a = null, e !== null && (a = e.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Vl(Te), Ne(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (fa(l) ? kl(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Vu())), ge(l), null;
      case 26:
        var n = l.type, i = l.memoizedState;
        return e === null ? (kl(l), i !== null ? (ge(l), od(l, i)) : (ge(l), Rc(
          l,
          n,
          null,
          a,
          t
        ))) : i ? i !== e.memoizedState ? (kl(l), ge(l), od(l, i)) : (ge(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== a && kl(l), ge(l), Rc(
          l,
          n,
          e,
          a,
          t
        )), null;
      case 27:
        if (Cn(l), t = F.current, n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(d(166));
            return ge(l), null;
          }
          e = q.current, fa(l) ? wf(l) : (e = jo(n, a, t), l.stateNode = e, kl(l));
        }
        return ge(l), null;
      case 5:
        if (Cn(l), n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(d(166));
            return ge(l), null;
          }
          if (i = q.current, fa(l))
            wf(l);
          else {
            var c = qi(
              F.current
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
            i[Ye] = l, i[Pe] = a;
            e: for (c = l.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                i.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === l) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === l)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            l.stateNode = i;
            e: switch (Ze(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && kl(l);
          }
        }
        return ge(l), Rc(
          l,
          l.type,
          e === null ? null : e.memoizedProps,
          l.pendingProps,
          t
        ), null;
      case 6:
        if (e && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(d(166));
          if (e = F.current, fa(l)) {
            if (e = l.stateNode, t = l.memoizedProps, a = null, n = Ge, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ye] = l, e = !!(e.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || so(e.nodeValue, t)), e || st(l, !0);
          } else
            e = qi(e).createTextNode(
              a
            ), e[Ye] = l, l.stateNode = e;
        }
        return ge(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (a = fa(l), t !== null) {
            if (e === null) {
              if (!a) throw Error(d(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557));
              e[Ye] = l;
            } else
              qt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            ge(l), e = !1;
          } else
            t = Vu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(d(558));
        }
        return ge(l), null;
      case 13:
        if (a = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = fa(l), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(d(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[Ye] = l;
            } else
              qt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            ge(l), n = !1;
          } else
            n = Vu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
        }
        return hl(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = a !== null, e = e !== null && e.memoizedState !== null, t && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), bi(l, l.updateQueue), ge(l), null);
      case 4:
        return Ne(), e === null && ts(l.stateNode.containerInfo), ge(l), null;
      case 10:
        return Vl(l.type), ge(l), null;
      case 19:
        if (A(_e), a = l.memoizedState, a === null) return ge(l), null;
        if (n = (l.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) sn(a, !1);
          else {
            if (be !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (i = si(e), i !== null) {
                  for (l.flags |= 128, sn(a, !1), e = i.updateQueue, l.updateQueue = e, bi(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    Xf(t, e), t = t.sibling;
                  return C(
                    _e,
                    _e.current & 1 | 2
                  ), ae && Zl(l, a.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            a.tail !== null && cl() > Ei && (l.flags |= 128, n = !0, sn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = si(i), e !== null) {
              if (l.flags |= 128, n = !0, e = e.updateQueue, l.updateQueue = e, bi(l, e), sn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ae)
                return ge(l), null;
            } else
              2 * cl() - a.renderingStartTime > Ei && t !== 536870912 && (l.flags |= 128, n = !0, sn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (i.sibling = l.child, l.child = i) : (e = a.last, e !== null ? e.sibling = i : l.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = cl(), e.sibling = null, t = _e.current, C(
          _e,
          n ? t & 1 | 2 : t & 1
        ), ae && Zl(l, a.treeForkCount), e) : (ge(l), null);
      case 22:
      case 23:
        return hl(l), ac(), a = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (ge(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : ge(l), t = l.updateQueue, t !== null && bi(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== t && (l.flags |= 2048), e !== null && A(Gt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), Vl(Te), ge(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, l.tag));
  }
  function Cm(e, l) {
    switch (Zu(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return Vl(Te), Ne(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Cn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (hl(l), l.alternate === null)
            throw Error(d(340));
          qt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (hl(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(d(340));
          qt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return A(_e), null;
      case 4:
        return Ne(), null;
      case 10:
        return Vl(l.type), null;
      case 22:
      case 23:
        return hl(l), ac(), e !== null && A(Gt), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return Vl(Te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hd(e, l) {
    switch (Zu(l), l.tag) {
      case 3:
        Vl(Te), Ne();
        break;
      case 26:
      case 27:
      case 5:
        Cn(l);
        break;
      case 4:
        Ne();
        break;
      case 31:
        l.memoizedState !== null && hl(l);
        break;
      case 13:
        hl(l);
        break;
      case 19:
        A(_e);
        break;
      case 10:
        Vl(l.type);
        break;
      case 22:
      case 23:
        hl(l), ac(), e !== null && A(Gt);
        break;
      case 24:
        Vl(Te);
    }
  }
  function fn(e, l) {
    try {
      var t = l.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        t = n;
        do {
          if ((t.tag & e) === e) {
            a = void 0;
            var i = t.create, c = t.inst;
            a = i(), c.destroy = a;
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (s) {
      re(l, l.return, s);
    }
  }
  function vt(e, l, t) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst, s = c.destroy;
            if (s !== void 0) {
              c.destroy = void 0, n = l;
              var r = t, y = s;
              try {
                y();
              } catch (S) {
                re(
                  n,
                  r,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (S) {
      re(l, l.return, S);
    }
  }
  function md(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        nr(l, t);
      } catch (a) {
        re(e, e.return, a);
      }
    }
  }
  function vd(e, l, t) {
    t.props = Vt(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (a) {
      re(e, l, a);
    }
  }
  function rn(e, l) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof t == "function" ? e.refCleanup = t(a) : t.current = a;
      }
    } catch (n) {
      re(e, l, n);
    }
  }
  function Hl(e, l) {
    var t = e.ref, a = e.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          re(e, l, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          re(e, l, n);
        }
      else t.current = null;
  }
  function yd(e) {
    var l = e.type, t = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && a.focus();
          break e;
        case "img":
          t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet);
      }
    } catch (n) {
      re(e, e.return, n);
    }
  }
  function Hc(e, l, t) {
    try {
      var a = e.stateNode;
      ev(a, e.type, t, l), a[Pe] = l;
    } catch (n) {
      re(e, e.return, n);
    }
  }
  function gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && St(e.type) || e.tag === 4;
  }
  function qc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && St(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bc(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = Gl));
    else if (a !== 4 && (a === 27 && St(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (Bc(e, l, t), e = e.sibling; e !== null; )
        Bc(e, l, t), e = e.sibling;
  }
  function Si(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (a !== 4 && (a === 27 && St(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (Si(e, l, t), e = e.sibling; e !== null; )
        Si(e, l, t), e = e.sibling;
  }
  function xd(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var a = e.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Ze(l, a, t), l[Ye] = e, l[Pe] = t;
    } catch (i) {
      re(e, e.return, i);
    }
  }
  var $l = !1, De = !1, Yc = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, qe = null;
  function Um(e, l) {
    if (e = e.containerInfo, is = Li, e = Df(e), Du(e)) {
      if ("selectionStart" in e)
        var t = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break e;
            }
            var c = 0, s = -1, r = -1, y = 0, S = 0, E = e, x = null;
            l: for (; ; ) {
              for (var j; E !== t || n !== 0 && E.nodeType !== 3 || (s = c + n), E !== i || a !== 0 && E.nodeType !== 3 || (r = c + a), E.nodeType === 3 && (c += E.nodeValue.length), (j = E.firstChild) !== null; )
                x = E, E = j;
              for (; ; ) {
                if (E === e) break l;
                if (x === t && ++y === n && (s = c), x === i && ++S === a && (r = c), (j = E.nextSibling) !== null) break;
                E = x, x = E.parentNode;
              }
              E = j;
            }
            t = s === -1 || r === -1 ? null : { start: s, end: r };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (us = { focusedElem: e, selectionRange: t }, Li = !1, qe = l; qe !== null; )
      if (l = qe, e = l.child, (l.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = l, qe = e;
      else
        for (; qe !== null; ) {
          switch (l = qe, i = l.alternate, e = l.flags, l.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (t = 0; t < e.length; t++)
                  n = e[t], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, t = l, n = i.memoizedProps, i = i.memoizedState, a = t.stateNode;
                try {
                  var R = Vt(
                    t.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    R,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (G) {
                  re(
                    t,
                    t.return,
                    G
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9)
                  fs(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fs(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(d(163));
          }
          if (e = l.sibling, e !== null) {
            e.return = l.return, qe = e;
            break;
          }
          qe = l.return;
        }
  }
  function jd(e, l, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fl(e, t), a & 4 && fn(5, t);
        break;
      case 1:
        if (Fl(e, t), a & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (c) {
              re(t, t.return, c);
            }
          else {
            var n = Vt(
              t.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                l,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              re(
                t,
                t.return,
                c
              );
            }
          }
        a & 64 && md(t), a & 512 && rn(t, t.return);
        break;
      case 3:
        if (Fl(e, t), a & 64 && (e = t.updateQueue, e !== null)) {
          if (l = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                l = t.child.stateNode;
                break;
              case 1:
                l = t.child.stateNode;
            }
          try {
            nr(e, l);
          } catch (c) {
            re(t, t.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && xd(t);
      case 26:
      case 5:
        Fl(e, t), l === null && a & 4 && yd(t), a & 512 && rn(t, t.return);
        break;
      case 12:
        Fl(e, t);
        break;
      case 31:
        Fl(e, t), a & 4 && zd(e, t);
        break;
      case 13:
        Fl(e, t), a & 4 && Nd(e, t), a & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Zm.bind(
          null,
          t
        ), sv(e, t))));
        break;
      case 22:
        if (a = t.memoizedState !== null || $l, !a) {
          l = l !== null && l.memoizedState !== null || De, n = $l;
          var i = De;
          $l = a, (De = l) && !i ? Il(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Fl(e, t), $l = n, De = i;
        }
        break;
      case 30:
        break;
      default:
        Fl(e, t);
    }
  }
  function bd(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, bd(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && mu(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var xe = null, ll = !1;
  function Wl(e, l, t) {
    for (t = t.child; t !== null; )
      Sd(e, l, t), t = t.sibling;
  }
  function Sd(e, l, t) {
    if (sl && typeof sl.onCommitFiberUnmount == "function")
      try {
        sl.onCommitFiberUnmount(Ua, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        De || Hl(t, l), Wl(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        De || Hl(t, l);
        var a = xe, n = ll;
        St(t.type) && (xe = t.stateNode, ll = !1), Wl(
          e,
          l,
          t
        ), pn(t.stateNode), xe = a, ll = n;
        break;
      case 5:
        De || Hl(t, l);
      case 6:
        if (a = xe, n = ll, xe = null, Wl(
          e,
          l,
          t
        ), xe = a, ll = n, xe !== null)
          if (ll)
            try {
              (xe.nodeType === 9 ? xe.body : xe.nodeName === "HTML" ? xe.ownerDocument.body : xe).removeChild(t.stateNode);
            } catch (i) {
              re(
                t,
                l,
                i
              );
            }
          else
            try {
              xe.removeChild(t.stateNode);
            } catch (i) {
              re(
                t,
                l,
                i
              );
            }
        break;
      case 18:
        xe !== null && (ll ? (e = xe, vo(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), Oa(e)) : vo(xe, t.stateNode));
        break;
      case 4:
        a = xe, n = ll, xe = t.stateNode.containerInfo, ll = !0, Wl(
          e,
          l,
          t
        ), xe = a, ll = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt(2, t, l), De || vt(4, t, l), Wl(
          e,
          l,
          t
        );
        break;
      case 1:
        De || (Hl(t, l), a = t.stateNode, typeof a.componentWillUnmount == "function" && vd(
          t,
          l,
          a
        )), Wl(
          e,
          l,
          t
        );
        break;
      case 21:
        Wl(
          e,
          l,
          t
        );
        break;
      case 22:
        De = (a = De) || t.memoizedState !== null, Wl(
          e,
          l,
          t
        ), De = a;
        break;
      default:
        Wl(
          e,
          l,
          t
        );
    }
  }
  function zd(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Oa(e);
      } catch (t) {
        re(l, l.return, t);
      }
    }
  }
  function Nd(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Oa(e);
      } catch (t) {
        re(l, l.return, t);
      }
  }
  function Rm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var l = e.stateNode;
        return l === null && (l = e.stateNode = new pd()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new pd()), l;
      default:
        throw Error(d(435, e.tag));
    }
  }
  function zi(e, l) {
    var t = Rm(e);
    l.forEach(function(a) {
      if (!t.has(a)) {
        t.add(a);
        var n = Lm.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function tl(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a], i = e, c = l, s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (St(s.type)) {
                xe = s.stateNode, ll = !1;
                break e;
              }
              break;
            case 5:
              xe = s.stateNode, ll = !1;
              break e;
            case 3:
            case 4:
              xe = s.stateNode.containerInfo, ll = !0;
              break e;
          }
          s = s.return;
        }
        if (xe === null) throw Error(d(160));
        Sd(i, c, n), xe = null, ll = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        _d(l, e), l = l.sibling;
  }
  var Ml = null;
  function _d(e, l) {
    var t = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tl(l, e), al(e), a & 4 && (vt(3, e, e.return), fn(3, e), vt(5, e, e.return));
        break;
      case 1:
        tl(l, e), al(e), a & 512 && (De || t === null || Hl(t, t.return)), a & 64 && $l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = Ml;
        if (tl(l, e), al(e), a & 512 && (De || t === null || Hl(t, t.return)), a & 4) {
          var i = t !== null ? t.memoizedState : null;
          if (a = e.memoizedState, t === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, t = e.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[qa] || i[Ye] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Ze(i, a, t), i[Ye] = e, He(i), a = i;
                      break e;
                    case "link":
                      var c = Eo(
                        "link",
                        "href",
                        n
                      ).get(a + (t.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (i = c[s], i.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && i.getAttribute("rel") === (t.rel == null ? null : t.rel) && i.getAttribute("title") === (t.title == null ? null : t.title) && i.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            c.splice(s, 1);
                            break l;
                          }
                      }
                      i = n.createElement(a), Ze(i, a, t), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (c = Eo(
                        "meta",
                        "content",
                        n
                      ).get(a + (t.content || ""))) {
                        for (s = 0; s < c.length; s++)
                          if (i = c[s], i.getAttribute("content") === (t.content == null ? null : "" + t.content) && i.getAttribute("name") === (t.name == null ? null : t.name) && i.getAttribute("property") === (t.property == null ? null : t.property) && i.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && i.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            c.splice(s, 1);
                            break l;
                          }
                      }
                      i = n.createElement(a), Ze(i, a, t), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  i[Ye] = e, He(i), a = i;
                }
                e.stateNode = a;
              } else
                Ao(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = _o(
                n,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : i.count--, a === null ? Ao(
              n,
              e.type,
              e.stateNode
            ) : _o(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Hc(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        tl(l, e), al(e), a & 512 && (De || t === null || Hl(t, t.return)), t !== null && a & 4 && Hc(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (tl(l, e), al(e), a & 512 && (De || t === null || Hl(t, t.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Pt(n, "");
          } catch (R) {
            re(e, e.return, R);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Hc(
          e,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Yc = !0);
        break;
      case 6:
        if (tl(l, e), al(e), a & 4) {
          if (e.stateNode === null)
            throw Error(d(162));
          a = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = a;
          } catch (R) {
            re(e, e.return, R);
          }
        }
        break;
      case 3:
        if (Gi = null, n = Ml, Ml = Bi(l.containerInfo), tl(l, e), Ml = n, al(e), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Oa(l.containerInfo);
          } catch (R) {
            re(e, e.return, R);
          }
        Yc && (Yc = !1, Ed(e));
        break;
      case 4:
        a = Ml, Ml = Bi(
          e.stateNode.containerInfo
        ), tl(l, e), al(e), Ml = a;
        break;
      case 12:
        tl(l, e), al(e);
        break;
      case 31:
        tl(l, e), al(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, zi(e, a)));
        break;
      case 13:
        tl(l, e), al(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (_i = cl()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, zi(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var r = t !== null && t.memoizedState !== null, y = $l, S = De;
        if ($l = y || n, De = S || r, tl(l, e), De = S, $l = y, al(e), a & 8192)
          e: for (l = e.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (t === null || r || $l || De || wt(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                r = t = l;
                try {
                  if (i = r.stateNode, n)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = r.stateNode;
                    var E = r.memoizedProps.style, x = E != null && E.hasOwnProperty("display") ? E.display : null;
                    s.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (R) {
                  re(r, r.return, R);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                r = l;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (R) {
                  re(r, r.return, R);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                r = l;
                try {
                  var j = r.stateNode;
                  n ? yo(j, !0) : yo(r.stateNode, !1);
                } catch (R) {
                  re(r, r.return, R);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === e) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === e) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === e) break e;
              t === l && (t = null), l = l.return;
            }
            t === l && (t = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, zi(e, t))));
        break;
      case 19:
        tl(l, e), al(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, zi(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tl(l, e), al(e);
    }
  }
  function al(e) {
    var l = e.flags;
    if (l & 2) {
      try {
        for (var t, a = e.return; a !== null; ) {
          if (gd(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(d(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode, i = qc(e);
            Si(e, i, n);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Pt(c, ""), t.flags &= -33);
            var s = qc(e);
            Si(e, s, c);
            break;
          case 3:
          case 4:
            var r = t.stateNode.containerInfo, y = qc(e);
            Bc(
              e,
              y,
              r
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (S) {
        re(e, e.return, S);
      }
      e.flags &= -3;
    }
    l & 4096 && (e.flags &= -4097);
  }
  function Ed(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        Ed(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function Fl(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        jd(e, l.alternate, l), l = l.sibling;
  }
  function wt(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vt(4, l, l.return), wt(l);
          break;
        case 1:
          Hl(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && vd(
            l,
            l.return,
            t
          ), wt(l);
          break;
        case 27:
          pn(l.stateNode);
        case 26:
        case 5:
          Hl(l, l.return), wt(l);
          break;
        case 22:
          l.memoizedState === null && wt(l);
          break;
        case 30:
          wt(l);
          break;
        default:
          wt(l);
      }
      e = e.sibling;
    }
  }
  function Il(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = e, i = l, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Il(
            n,
            i,
            t
          ), fn(4, i);
          break;
        case 1:
          if (Il(
            n,
            i,
            t
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              re(a, a.return, y);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  ar(r[n], s);
            } catch (y) {
              re(a, a.return, y);
            }
          }
          t && c & 64 && md(i), rn(i, i.return);
          break;
        case 27:
          xd(i);
        case 26:
        case 5:
          Il(
            n,
            i,
            t
          ), t && a === null && c & 4 && yd(i), rn(i, i.return);
          break;
        case 12:
          Il(
            n,
            i,
            t
          );
          break;
        case 31:
          Il(
            n,
            i,
            t
          ), t && c & 4 && zd(n, i);
          break;
        case 13:
          Il(
            n,
            i,
            t
          ), t && c & 4 && Nd(n, i);
          break;
        case 22:
          i.memoizedState === null && Il(
            n,
            i,
            t
          ), rn(i, i.return);
          break;
        case 30:
          break;
        default:
          Il(
            n,
            i,
            t
          );
      }
      l = l.sibling;
    }
  }
  function Gc(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && $a(t));
  }
  function Xc(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && $a(e));
  }
  function Ol(e, l, t, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ad(
          e,
          l,
          t,
          a
        ), l = l.sibling;
  }
  function Ad(e, l, t, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ol(
          e,
          l,
          t,
          a
        ), n & 2048 && fn(9, l);
        break;
      case 1:
        Ol(
          e,
          l,
          t,
          a
        );
        break;
      case 3:
        Ol(
          e,
          l,
          t,
          a
        ), n & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && $a(e)));
        break;
      case 12:
        if (n & 2048) {
          Ol(
            e,
            l,
            t,
            a
          ), e = l.stateNode;
          try {
            var i = l.memoizedProps, c = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              c,
              l.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (r) {
            re(l, l.return, r);
          }
        } else
          Ol(
            e,
            l,
            t,
            a
          );
        break;
      case 31:
        Ol(
          e,
          l,
          t,
          a
        );
        break;
      case 13:
        Ol(
          e,
          l,
          t,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? i._visibility & 2 ? Ol(
          e,
          l,
          t,
          a
        ) : dn(e, l) : i._visibility & 2 ? Ol(
          e,
          l,
          t,
          a
        ) : (i._visibility |= 2, pa(
          e,
          l,
          t,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Gc(c, l);
        break;
      case 24:
        Ol(
          e,
          l,
          t,
          a
        ), n & 2048 && Xc(l.alternate, l);
        break;
      default:
        Ol(
          e,
          l,
          t,
          a
        );
    }
  }
  function pa(e, l, t, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var i = e, c = l, s = t, r = a, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          pa(
            i,
            c,
            s,
            r,
            n
          ), fn(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null ? S._visibility & 2 ? pa(
            i,
            c,
            s,
            r,
            n
          ) : dn(
            i,
            c
          ) : (S._visibility |= 2, pa(
            i,
            c,
            s,
            r,
            n
          )), n && y & 2048 && Gc(
            c.alternate,
            c
          );
          break;
        case 24:
          pa(
            i,
            c,
            s,
            r,
            n
          ), n && y & 2048 && Xc(c.alternate, c);
          break;
        default:
          pa(
            i,
            c,
            s,
            r,
            n
          );
      }
      l = l.sibling;
    }
  }
  function dn(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            dn(t, a), n & 2048 && Gc(
              a.alternate,
              a
            );
            break;
          case 24:
            dn(t, a), n & 2048 && Xc(a.alternate, a);
            break;
          default:
            dn(t, a);
        }
        l = l.sibling;
      }
  }
  var on = 8192;
  function ja(e, l, t) {
    if (e.subtreeFlags & on)
      for (e = e.child; e !== null; )
        Td(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function Td(e, l, t) {
    switch (e.tag) {
      case 26:
        ja(
          e,
          l,
          t
        ), e.flags & on && e.memoizedState !== null && jv(
          t,
          Ml,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ja(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var a = Ml;
        Ml = Bi(e.stateNode.containerInfo), ja(
          e,
          l,
          t
        ), Ml = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = on, on = 16777216, ja(
          e,
          l,
          t
        ), on = a) : ja(
          e,
          l,
          t
        ));
        break;
      default:
        ja(
          e,
          l,
          t
        );
    }
  }
  function Md(e) {
    var l = e.alternate;
    if (l !== null && (e = l.child, e !== null)) {
      l.child = null;
      do
        l = e.sibling, e.sibling = null, e = l;
      while (e !== null);
    }
  }
  function hn(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          qe = a, Dd(
            a,
            e
          );
        }
      Md(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Od(e), e = e.sibling;
  }
  function Od(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        hn(e), e.flags & 2048 && vt(9, e, e.return);
        break;
      case 3:
        hn(e);
        break;
      case 12:
        hn(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, Ni(e)) : hn(e);
        break;
      default:
        hn(e);
    }
  }
  function Ni(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          qe = a, Dd(
            a,
            e
          );
        }
      Md(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          vt(8, l, l.return), Ni(l);
          break;
        case 22:
          t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, Ni(l));
          break;
        default:
          Ni(l);
      }
      e = e.sibling;
    }
  }
  function Dd(e, l) {
    for (; qe !== null; ) {
      var t = qe;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(t.memoizedState.cache);
      }
      if (a = t.child, a !== null) a.return = t, qe = a;
      else
        e: for (t = e; qe !== null; ) {
          a = qe;
          var n = a.sibling, i = a.return;
          if (bd(a), a === t) {
            qe = null;
            break e;
          }
          if (n !== null) {
            n.return = i, qe = n;
            break e;
          }
          qe = i;
        }
    }
  }
  var Hm = {
    getCacheForType: function(e) {
      var l = Xe(Te), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return Xe(Te).controller.signal;
    }
  }, qm = typeof WeakMap == "function" ? WeakMap : Map, ce = 0, ve = null, I = null, ee = 0, fe = 0, ml = null, yt = !1, ba = !1, Qc = !1, Pl = 0, be = 0, gt = 0, Kt = 0, Zc = 0, vl = 0, Sa = 0, mn = null, nl = null, Lc = !1, _i = 0, Cd = 0, Ei = 1 / 0, Ai = null, xt = null, Ce = 0, pt = null, za = null, et = 0, Vc = 0, wc = null, Ud = null, vn = 0, Kc = null;
  function yl() {
    return (ce & 2) !== 0 && ee !== 0 ? ee & -ee : b.T !== null ? Ic() : ks();
  }
  function Rd() {
    if (vl === 0)
      if ((ee & 536870912) === 0 || ae) {
        var e = Hn;
        Hn <<= 1, (Hn & 3932160) === 0 && (Hn = 262144), vl = e;
      } else vl = 536870912;
    return e = ol.current, e !== null && (e.flags |= 32), vl;
  }
  function il(e, l, t) {
    (e === ve && (fe === 2 || fe === 9) || e.cancelPendingCommit !== null) && (Na(e, 0), jt(
      e,
      ee,
      vl,
      !1
    )), Ha(e, t), ((ce & 2) === 0 || e !== ve) && (e === ve && ((ce & 2) === 0 && (Kt |= t), be === 4 && jt(
      e,
      ee,
      vl,
      !1
    )), ql(e));
  }
  function Hd(e, l, t) {
    if ((ce & 6) !== 0) throw Error(d(327));
    var a = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || Ra(e, l), n = a ? Gm(e, l) : kc(e, l, !0), i = a;
    do {
      if (n === 0) {
        ba && !a && jt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, i && !Bm(t)) {
          n = kc(e, l, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = l, e.errorRecoveryDisabledLanes & i)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            e: {
              var s = e;
              n = mn;
              var r = s.current.memoizedState.isDehydrated;
              if (r && (Na(s, c).flags |= 256), c = kc(
                s,
                c,
                !1
              ), c !== 2) {
                if (Qc && !r) {
                  s.errorRecoveryDisabledLanes |= i, Kt |= i, n = 4;
                  break e;
                }
                i = nl, nl = n, i !== null && (nl === null ? nl = i : nl.push.apply(
                  nl,
                  i
                ));
              }
              n = c;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Na(e, 0), jt(e, l, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              jt(
                a,
                l,
                vl,
                !yt
              );
              break e;
            case 2:
              nl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((l & 62914560) === l && (n = _i + 300 - cl(), 10 < n)) {
            if (jt(
              a,
              l,
              vl,
              !yt
            ), Bn(a, 0, !0) !== 0) break e;
            et = l, a.timeoutHandle = ho(
              qd.bind(
                null,
                a,
                t,
                nl,
                Ai,
                Lc,
                l,
                vl,
                Kt,
                Sa,
                yt,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          qd(
            a,
            t,
            nl,
            Ai,
            Lc,
            l,
            vl,
            Kt,
            Sa,
            yt,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ql(e);
  }
  function qd(e, l, t, a, n, i, c, s, r, y, S, E, x, j) {
    if (e.timeoutHandle = -1, E = l.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Gl
      }, Td(
        l,
        i,
        E
      );
      var R = (i & 62914560) === i ? _i - cl() : (i & 4194048) === i ? Cd - cl() : 0;
      if (R = bv(
        E,
        R
      ), R !== null) {
        et = i, e.cancelPendingCommit = R(
          Vd.bind(
            null,
            e,
            l,
            i,
            t,
            a,
            n,
            c,
            s,
            r,
            S,
            E,
            null,
            x,
            j
          )
        ), jt(e, i, c, !y);
        return;
      }
    }
    Vd(
      e,
      l,
      i,
      t,
      a,
      n,
      c,
      s,
      r
    );
  }
  function Bm(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!rl(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = l.child, l.subtreeFlags & 16384 && t !== null)
        t.return = l, l = t;
      else {
        if (l === e) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function jt(e, l, t, a) {
    l &= ~Zc, l &= ~Kt, e.suspendedLanes |= l, e.pingedLanes &= ~l, a && (e.warmLanes |= l), a = e.expirationTimes;
    for (var n = l; 0 < n; ) {
      var i = 31 - fl(n), c = 1 << i;
      a[i] = -1, n &= ~c;
    }
    t !== 0 && ws(e, t, l);
  }
  function Ti() {
    return (ce & 6) === 0 ? (yn(0), !1) : !0;
  }
  function Jc() {
    if (I !== null) {
      if (fe === 0)
        var e = I.return;
      else
        e = I, Ll = Bt = null, fc(e), ma = null, Fa = 0, e = I;
      for (; e !== null; )
        hd(e.alternate, e), e = e.return;
      I = null;
    }
  }
  function Na(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, av(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), et = 0, Jc(), ve = e, I = t = Ql(e.current, null), ee = l, fe = 0, ml = null, yt = !1, ba = Ra(e, l), Qc = !1, Sa = vl = Zc = Kt = gt = be = 0, nl = mn = null, Lc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= l; 0 < a; ) {
        var n = 31 - fl(a), i = 1 << n;
        l |= e[n], a &= ~i;
      }
    return Pl = l, $n(), t;
  }
  function Bd(e, l) {
    k = null, b.H = un, l === ha || l === ai ? (l = Pf(), fe = 3) : l === Fu ? (l = Pf(), fe = 4) : fe = l === _c ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ml = l, I === null && (be = 1, gi(
      e,
      jl(l, e.current)
    ));
  }
  function Yd() {
    var e = ol.current;
    return e === null ? !0 : (ee & 4194048) === ee ? Nl === null : (ee & 62914560) === ee || (ee & 536870912) !== 0 ? e === Nl : !1;
  }
  function Gd() {
    var e = b.H;
    return b.H = un, e === null ? un : e;
  }
  function Xd() {
    var e = b.A;
    return b.A = Hm, e;
  }
  function Mi() {
    be = 4, yt || (ee & 4194048) !== ee && ol.current !== null || (ba = !0), (gt & 134217727) === 0 && (Kt & 134217727) === 0 || ve === null || jt(
      ve,
      ee,
      vl,
      !1
    );
  }
  function kc(e, l, t) {
    var a = ce;
    ce |= 2;
    var n = Gd(), i = Xd();
    (ve !== e || ee !== l) && (Ai = null, Na(e, l)), l = !1;
    var c = be;
    e: do
      try {
        if (fe !== 0 && I !== null) {
          var s = I, r = ml;
          switch (fe) {
            case 8:
              Jc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ol.current === null && (l = !0);
              var y = fe;
              if (fe = 0, ml = null, _a(e, s, r, y), t && ba) {
                c = 0;
                break e;
              }
              break;
            default:
              y = fe, fe = 0, ml = null, _a(e, s, r, y);
          }
        }
        Ym(), c = be;
        break;
      } catch (S) {
        Bd(e, S);
      }
    while (!0);
    return l && e.shellSuspendCounter++, Ll = Bt = null, ce = a, b.H = n, b.A = i, I === null && (ve = null, ee = 0, $n()), c;
  }
  function Ym() {
    for (; I !== null; ) Qd(I);
  }
  function Gm(e, l) {
    var t = ce;
    ce |= 2;
    var a = Gd(), n = Xd();
    ve !== e || ee !== l ? (Ai = null, Ei = cl() + 500, Na(e, l)) : ba = Ra(
      e,
      l
    );
    e: do
      try {
        if (fe !== 0 && I !== null) {
          l = I;
          var i = ml;
          l: switch (fe) {
            case 1:
              fe = 0, ml = null, _a(e, l, i, 1);
              break;
            case 2:
            case 9:
              if (Ff(i)) {
                fe = 0, ml = null, Zd(l);
                break;
              }
              l = function() {
                fe !== 2 && fe !== 9 || ve !== e || (fe = 7), ql(e);
              }, i.then(l, l);
              break e;
            case 3:
              fe = 7;
              break e;
            case 4:
              fe = 5;
              break e;
            case 7:
              Ff(i) ? (fe = 0, ml = null, Zd(l)) : (fe = 0, ml = null, _a(e, l, i, 7));
              break;
            case 5:
              var c = null;
              switch (I.tag) {
                case 26:
                  c = I.memoizedState;
                case 5:
                case 27:
                  var s = I;
                  if (c ? To(c) : s.stateNode.complete) {
                    fe = 0, ml = null;
                    var r = s.sibling;
                    if (r !== null) I = r;
                    else {
                      var y = s.return;
                      y !== null ? (I = y, Oi(y)) : I = null;
                    }
                    break l;
                  }
              }
              fe = 0, ml = null, _a(e, l, i, 5);
              break;
            case 6:
              fe = 0, ml = null, _a(e, l, i, 6);
              break;
            case 8:
              Jc(), be = 6;
              break e;
            default:
              throw Error(d(462));
          }
        }
        Xm();
        break;
      } catch (S) {
        Bd(e, S);
      }
    while (!0);
    return Ll = Bt = null, b.H = a, b.A = n, ce = t, I !== null ? 0 : (ve = null, ee = 0, $n(), be);
  }
  function Xm() {
    for (; I !== null && !fh(); )
      Qd(I);
  }
  function Qd(e) {
    var l = dd(e.alternate, e, Pl);
    e.memoizedProps = e.pendingProps, l === null ? Oi(e) : I = l;
  }
  function Zd(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = id(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ee
        );
        break;
      case 11:
        l = id(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ee
        );
        break;
      case 5:
        fc(l);
      default:
        hd(t, l), l = I = Xf(l, Pl), l = dd(t, l, Pl);
    }
    e.memoizedProps = e.pendingProps, l === null ? Oi(e) : I = l;
  }
  function _a(e, l, t, a) {
    Ll = Bt = null, fc(l), ma = null, Fa = 0;
    var n = l.return;
    try {
      if (Tm(
        e,
        n,
        l,
        t,
        ee
      )) {
        be = 1, gi(
          e,
          jl(t, e.current)
        ), I = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw I = n, i;
      be = 1, gi(
        e,
        jl(t, e.current)
      ), I = null;
      return;
    }
    l.flags & 32768 ? (ae || a === 1 ? e = !0 : ba || (ee & 536870912) !== 0 ? e = !1 : (yt = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ol.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ld(l, e)) : Oi(l);
  }
  function Oi(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        Ld(
          l,
          yt
        );
        return;
      }
      e = l.return;
      var t = Dm(
        l.alternate,
        l,
        Pl
      );
      if (t !== null) {
        I = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        I = l;
        return;
      }
      I = l = e;
    } while (l !== null);
    be === 0 && (be = 5);
  }
  function Ld(e, l) {
    do {
      var t = Cm(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, I = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        I = e;
        return;
      }
      I = e = t;
    } while (e !== null);
    be = 6, I = null;
  }
  function Vd(e, l, t, a, n, i, c, s, r) {
    e.cancelPendingCommit = null;
    do
      Di();
    while (Ce !== 0);
    if ((ce & 6) !== 0) throw Error(d(327));
    if (l !== null) {
      if (l === e.current) throw Error(d(177));
      if (i = l.lanes | l.childLanes, i |= qu, ph(
        e,
        t,
        i,
        c,
        s,
        r
      ), e === ve && (I = ve = null, ee = 0), za = l, pt = e, et = t, Vc = i, wc = n, Ud = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Vm(Un, function() {
        return $d(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, n = D.p, D.p = 2, c = ce, ce |= 4;
        try {
          Um(e, l, t);
        } finally {
          ce = c, D.p = n, b.T = a;
        }
      }
      Ce = 1, wd(), Kd(), Jd();
    }
  }
  function wd() {
    if (Ce === 1) {
      Ce = 0;
      var e = pt, l = za, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = b.T, b.T = null;
        var a = D.p;
        D.p = 2;
        var n = ce;
        ce |= 4;
        try {
          _d(l, e);
          var i = us, c = Df(e.containerInfo), s = i.focusedElem, r = i.selectionRange;
          if (c !== s && s && s.ownerDocument && Of(
            s.ownerDocument.documentElement,
            s
          )) {
            if (r !== null && Du(s)) {
              var y = r.start, S = r.end;
              if (S === void 0 && (S = y), "selectionStart" in s)
                s.selectionStart = y, s.selectionEnd = Math.min(
                  S,
                  s.value.length
                );
              else {
                var E = s.ownerDocument || document, x = E && E.defaultView || window;
                if (x.getSelection) {
                  var j = x.getSelection(), R = s.textContent.length, G = Math.min(r.start, R), me = r.end === void 0 ? G : Math.min(r.end, R);
                  !j.extend && G > me && (c = me, me = G, G = c);
                  var m = Mf(
                    s,
                    G
                  ), h = Mf(
                    s,
                    me
                  );
                  if (m && h && (j.rangeCount !== 1 || j.anchorNode !== m.node || j.anchorOffset !== m.offset || j.focusNode !== h.node || j.focusOffset !== h.offset)) {
                    var v = E.createRange();
                    v.setStart(m.node, m.offset), j.removeAllRanges(), G > me ? (j.addRange(v), j.extend(h.node, h.offset)) : (v.setEnd(h.node, h.offset), j.addRange(v));
                  }
                }
              }
            }
            for (E = [], j = s; j = j.parentNode; )
              j.nodeType === 1 && E.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < E.length; s++) {
              var _ = E[s];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          Li = !!is, us = is = null;
        } finally {
          ce = n, D.p = a, b.T = t;
        }
      }
      e.current = l, Ce = 2;
    }
  }
  function Kd() {
    if (Ce === 2) {
      Ce = 0;
      var e = pt, l = za, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = b.T, b.T = null;
        var a = D.p;
        D.p = 2;
        var n = ce;
        ce |= 4;
        try {
          jd(e, l.alternate, l);
        } finally {
          ce = n, D.p = a, b.T = t;
        }
      }
      Ce = 3;
    }
  }
  function Jd() {
    if (Ce === 4 || Ce === 3) {
      Ce = 0, rh();
      var e = pt, l = za, t = et, a = Ud;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ce = 5 : (Ce = 0, za = pt = null, kd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (xt = null), ou(t), l = l.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
        try {
          sl.onCommitFiberRoot(
            Ua,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = b.T, n = D.p, D.p = 2, b.T = null;
        try {
          for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          b.T = l, D.p = n;
        }
      }
      (et & 3) !== 0 && Di(), ql(e), n = e.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? e === Kc ? vn++ : (vn = 0, Kc = e) : vn = 0, yn(0);
    }
  }
  function kd(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, $a(l)));
  }
  function Di() {
    return wd(), Kd(), Jd(), $d();
  }
  function $d() {
    if (Ce !== 5) return !1;
    var e = pt, l = Vc;
    Vc = 0;
    var t = ou(et), a = b.T, n = D.p;
    try {
      D.p = 32 > t ? 32 : t, b.T = null, t = wc, wc = null;
      var i = pt, c = et;
      if (Ce = 0, za = pt = null, et = 0, (ce & 6) !== 0) throw Error(d(331));
      var s = ce;
      if (ce |= 4, Od(i.current), Ad(
        i,
        i.current,
        c,
        t
      ), ce = s, yn(0, !1), sl && typeof sl.onPostCommitFiberRoot == "function")
        try {
          sl.onPostCommitFiberRoot(Ua, i);
        } catch {
        }
      return !0;
    } finally {
      D.p = n, b.T = a, kd(e, l);
    }
  }
  function Wd(e, l, t) {
    l = jl(t, l), l = Nc(e.stateNode, l, 2), e = ot(e, l, 2), e !== null && (Ha(e, 2), ql(e));
  }
  function re(e, l, t) {
    if (e.tag === 3)
      Wd(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Wd(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xt === null || !xt.has(a))) {
            e = jl(t, e), t = Fr(2), a = ot(l, t, 2), a !== null && (Ir(
              t,
              a,
              l,
              e
            ), Ha(a, 2), ql(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function $c(e, l, t) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new qm();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(t) || (Qc = !0, n.add(t), e = Qm.bind(null, e, l, t), l.then(e, e));
  }
  function Qm(e, l, t) {
    var a = e.pingCache;
    a !== null && a.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, ve === e && (ee & t) === t && (be === 4 || be === 3 && (ee & 62914560) === ee && 300 > cl() - _i ? (ce & 2) === 0 && Na(e, 0) : Zc |= t, Sa === ee && (Sa = 0)), ql(e);
  }
  function Fd(e, l) {
    l === 0 && (l = Vs()), e = Rt(e, l), e !== null && (Ha(e, l), ql(e));
  }
  function Zm(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), Fd(e, t);
  }
  function Lm(e, l) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(l), Fd(e, t);
  }
  function Vm(e, l) {
    return su(e, l);
  }
  var Ci = null, Ea = null, Wc = !1, Ui = !1, Fc = !1, bt = 0;
  function ql(e) {
    e !== Ea && e.next === null && (Ea === null ? Ci = Ea = e : Ea = Ea.next = e), Ui = !0, Wc || (Wc = !0, Km());
  }
  function yn(e, l) {
    if (!Fc && Ui) {
      Fc = !0;
      do
        for (var t = !1, a = Ci; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              i = (1 << 31 - fl(42 | e) + 1) - 1, i &= n & ~(c & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (t = !0, lo(a, i));
          } else
            i = ee, i = Bn(
              a,
              a === ve ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ra(a, i) || (t = !0, lo(a, i));
          a = a.next;
        }
      while (t);
      Fc = !1;
    }
  }
  function wm() {
    Id();
  }
  function Id() {
    Ui = Wc = !1;
    var e = 0;
    bt !== 0 && tv() && (e = bt);
    for (var l = cl(), t = null, a = Ci; a !== null; ) {
      var n = a.next, i = Pd(a, l);
      i === 0 ? (a.next = null, t === null ? Ci = n : t.next = n, n === null && (Ea = t)) : (t = a, (e !== 0 || (i & 3) !== 0) && (Ui = !0)), a = n;
    }
    Ce !== 0 && Ce !== 5 || yn(e), bt !== 0 && (bt = 0);
  }
  function Pd(e, l) {
    for (var t = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - fl(i), s = 1 << c, r = n[c];
      r === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[c] = xh(s, l)) : r <= l && (e.expiredLanes |= s), i &= ~s;
    }
    if (l = ve, t = ee, t = Bn(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, t === 0 || e === l && (fe === 2 || fe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && fu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Ra(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (a !== null && fu(a), ou(t)) {
        case 2:
        case 8:
          t = Zs;
          break;
        case 32:
          t = Un;
          break;
        case 268435456:
          t = Ls;
          break;
        default:
          t = Un;
      }
      return a = eo.bind(null, e), t = su(t, a), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return a !== null && a !== null && fu(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function eo(e, l) {
    if (Ce !== 0 && Ce !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (Di() && e.callbackNode !== t)
      return null;
    var a = ee;
    return a = Bn(
      e,
      e === ve ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Hd(e, a, l), Pd(e, cl()), e.callbackNode != null && e.callbackNode === t ? eo.bind(null, e) : null);
  }
  function lo(e, l) {
    if (Di()) return null;
    Hd(e, l, !0);
  }
  function Km() {
    nv(function() {
      (ce & 6) !== 0 ? su(
        Qs,
        wm
      ) : Id();
    });
  }
  function Ic() {
    if (bt === 0) {
      var e = da;
      e === 0 && (e = Rn, Rn <<= 1, (Rn & 261888) === 0 && (Rn = 256)), bt = e;
    }
    return bt;
  }
  function to(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Qn("" + e);
  }
  function ao(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Jm(e, l, t, a, n) {
    if (l === "submit" && t && t.stateNode === n) {
      var i = to(
        (n[Pe] || null).action
      ), c = a.submitter;
      c && (l = (l = c[Pe] || null) ? to(l.formAction) : c.getAttribute("formAction"), l !== null && (i = l, c = null));
      var s = new wn(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (bt !== 0) {
                  var r = c ? ao(n, c) : new FormData(n);
                  xc(
                    t,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: i
                    },
                    null,
                    r
                  );
                }
              } else
                typeof i == "function" && (s.preventDefault(), r = c ? ao(n, c) : new FormData(n), xc(
                  t,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: i
                  },
                  i,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Pc = 0; Pc < Hu.length; Pc++) {
    var es = Hu[Pc], km = es.toLowerCase(), $m = es[0].toUpperCase() + es.slice(1);
    Tl(
      km,
      "on" + $m
    );
  }
  Tl(Rf, "onAnimationEnd"), Tl(Hf, "onAnimationIteration"), Tl(qf, "onAnimationStart"), Tl("dblclick", "onDoubleClick"), Tl("focusin", "onFocus"), Tl("focusout", "onBlur"), Tl(dm, "onTransitionRun"), Tl(om, "onTransitionStart"), Tl(hm, "onTransitionCancel"), Tl(Bf, "onTransitionEnd"), Ft("onMouseEnter", ["mouseout", "mouseover"]), Ft("onMouseLeave", ["mouseout", "mouseover"]), Ft("onPointerEnter", ["pointerout", "pointerover"]), Ft("onPointerLeave", ["pointerout", "pointerover"]), Ot(
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
  ), Wm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn)
  );
  function no(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var a = e[t], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (l)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], r = s.instance, y = s.currentTarget;
            if (s = s.listener, r !== i && n.isPropagationStopped())
              break e;
            i = s, n.currentTarget = y;
            try {
              i(n);
            } catch (S) {
              kn(S);
            }
            n.currentTarget = null, i = r;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], r = s.instance, y = s.currentTarget, s = s.listener, r !== i && n.isPropagationStopped())
              break e;
            i = s, n.currentTarget = y;
            try {
              i(n);
            } catch (S) {
              kn(S);
            }
            n.currentTarget = null, i = r;
          }
      }
    }
  }
  function P(e, l) {
    var t = l[hu];
    t === void 0 && (t = l[hu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    t.has(a) || (io(l, e, 2, !1), t.add(a));
  }
  function ls(e, l, t) {
    var a = 0;
    l && (a |= 4), io(
      t,
      e,
      a,
      l
    );
  }
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(e) {
    if (!e[Ri]) {
      e[Ri] = !0, Fs.forEach(function(t) {
        t !== "selectionchange" && (Wm.has(t) || ls(t, !1, e), ls(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[Ri] || (l[Ri] = !0, ls("selectionchange", !1, l));
    }
  }
  function io(e, l, t, a) {
    switch (Ho(l)) {
      case 2:
        var n = Nv;
        break;
      case 8:
        n = _v;
        break;
      default:
        n = gs;
    }
    t = n.bind(
      null,
      l,
      t,
      e
    ), n = void 0, !Su || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: n
    }) : e.addEventListener(l, t, !0) : n !== void 0 ? e.addEventListener(l, t, {
      passive: n
    }) : e.addEventListener(l, t, !1);
  }
  function as(e, l, t, a, n) {
    var i = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var r = c.tag;
              if ((r === 3 || r === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = kt(s), c === null) return;
            if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = i = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    rf(function() {
      var y = i, S = ju(t), E = [];
      e: {
        var x = Yf.get(e);
        if (x !== void 0) {
          var j = wn, R = e;
          switch (e) {
            case "keypress":
              if (Ln(t) === 0) break e;
            case "keydown":
            case "keyup":
              j = Lh;
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
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Dh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Kh;
              break;
            case Rf:
            case Hf:
            case qf:
              j = Rh;
              break;
            case Bf:
              j = kh;
              break;
            case "scroll":
            case "scrollend":
              j = Mh;
              break;
            case "wheel":
              j = Wh;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = qh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = vf;
              break;
            case "toggle":
            case "beforetoggle":
              j = Ih;
          }
          var G = (l & 4) !== 0, me = !G && (e === "scroll" || e === "scrollend"), m = G ? x !== null ? x + "Capture" : null : x;
          G = [];
          for (var h = y, v; h !== null; ) {
            var _ = h;
            if (v = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || v === null || m === null || (_ = Ya(h, m), _ != null && G.push(
              xn(h, _, v)
            )), me) break;
            h = h.return;
          }
          0 < G.length && (x = new j(
            x,
            R,
            null,
            t,
            S
          ), E.push({ event: x, listeners: G }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", x && t !== pu && (R = t.relatedTarget || t.fromElement) && (kt(R) || R[Jt]))
            break e;
          if ((j || x) && (x = S.window === S ? S : (x = S.ownerDocument) ? x.defaultView || x.parentWindow : window, j ? (R = t.relatedTarget || t.toElement, j = y, R = R ? kt(R) : null, R !== null && (me = O(R), G = R.tag, R !== me || G !== 5 && G !== 27 && G !== 6) && (R = null)) : (j = null, R = y), j !== R)) {
            if (G = hf, _ = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (G = vf, _ = "onPointerLeave", m = "onPointerEnter", h = "pointer"), me = j == null ? x : Ba(j), v = R == null ? x : Ba(R), x = new G(
              _,
              h + "leave",
              j,
              t,
              S
            ), x.target = me, x.relatedTarget = v, _ = null, kt(S) === y && (G = new G(
              m,
              h + "enter",
              R,
              t,
              S
            ), G.target = v, G.relatedTarget = me, _ = G), me = _, j && R)
              l: {
                for (G = Fm, m = j, h = R, v = 0, _ = m; _; _ = G(_))
                  v++;
                _ = 0;
                for (var Y = h; Y; Y = G(Y))
                  _++;
                for (; 0 < v - _; )
                  m = G(m), v--;
                for (; 0 < _ - v; )
                  h = G(h), _--;
                for (; v--; ) {
                  if (m === h || h !== null && m === h.alternate) {
                    G = m;
                    break l;
                  }
                  m = G(m), h = G(h);
                }
                G = null;
              }
            else G = null;
            j !== null && uo(
              E,
              x,
              j,
              G,
              !1
            ), R !== null && me !== null && uo(
              E,
              me,
              R,
              G,
              !0
            );
          }
        }
        e: {
          if (x = y ? Ba(y) : window, j = x.nodeName && x.nodeName.toLowerCase(), j === "select" || j === "input" && x.type === "file")
            var ie = zf;
          else if (bf(x))
            if (Nf)
              ie = sm;
            else {
              ie = um;
              var B = im;
            }
          else
            j = x.nodeName, !j || j.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? y && xu(y.elementType) && (ie = zf) : ie = cm;
          if (ie && (ie = ie(e, y))) {
            Sf(
              E,
              ie,
              t,
              S
            );
            break e;
          }
          B && B(e, x, y), e === "focusout" && y && x.type === "number" && y.memoizedProps.value != null && gu(x, "number", x.value);
        }
        switch (B = y ? Ba(y) : window, e) {
          case "focusin":
            (bf(B) || B.contentEditable === "true") && (aa = B, Cu = y, Ka = null);
            break;
          case "focusout":
            Ka = Cu = aa = null;
            break;
          case "mousedown":
            Uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uu = !1, Cf(E, t, S);
            break;
          case "selectionchange":
            if (rm) break;
          case "keydown":
          case "keyup":
            Cf(E, t, S);
        }
        var $;
        if (Tu)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          ta ? pf(e, t) && (le = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (le = "onCompositionStart");
        le && (yf && t.locale !== "ko" && (ta || le !== "onCompositionStart" ? le === "onCompositionEnd" && ta && ($ = df()) : (it = S, zu = "value" in it ? it.value : it.textContent, ta = !0)), B = Hi(y, le), 0 < B.length && (le = new mf(
          le,
          e,
          null,
          t,
          S
        ), E.push({ event: le, listeners: B }), $ ? le.data = $ : ($ = jf(t), $ !== null && (le.data = $)))), ($ = em ? lm(e, t) : tm(e, t)) && (le = Hi(y, "onBeforeInput"), 0 < le.length && (B = new mf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          S
        ), E.push({
          event: B,
          listeners: le
        }), B.data = $)), Jm(
          E,
          e,
          y,
          t,
          S
        );
      }
      no(E, l);
    });
  }
  function xn(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function Hi(e, l) {
    for (var t = l + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ya(e, t), n != null && a.unshift(
        xn(e, n, i)
      ), n = Ya(e, l), n != null && a.push(
        xn(e, n, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Fm(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function uo(e, l, t, a, n) {
    for (var i = l._reactName, c = []; t !== null && t !== a; ) {
      var s = t, r = s.alternate, y = s.stateNode;
      if (s = s.tag, r !== null && r === a) break;
      s !== 5 && s !== 26 && s !== 27 || y === null || (r = y, n ? (y = Ya(t, i), y != null && c.unshift(
        xn(t, y, r)
      )) : n || (y = Ya(t, i), y != null && c.push(
        xn(t, y, r)
      ))), t = t.return;
    }
    c.length !== 0 && e.push({ event: l, listeners: c });
  }
  var Im = /\r\n?/g, Pm = /\u0000|\uFFFD/g;
  function co(e) {
    return (typeof e == "string" ? e : "" + e).replace(Im, `
`).replace(Pm, "");
  }
  function so(e, l) {
    return l = co(l), co(e) === l;
  }
  function he(e, l, t, a, n, i) {
    switch (t) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || Pt(e, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && Pt(e, "" + a);
        break;
      case "className":
        Gn(e, "class", a);
        break;
      case "tabIndex":
        Gn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gn(e, t, a);
        break;
      case "style":
        sf(e, a, i);
        break;
      case "data":
        if (l !== "object") {
          Gn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(t);
          break;
        }
        a = Qn("" + a), e.setAttribute(t, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (t === "formAction" ? (l !== "input" && he(e, l, "name", n.name, n, null), he(
            e,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), he(
            e,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), he(
            e,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (he(e, l, "encType", n.encType, n, null), he(e, l, "method", n.method, n, null), he(e, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(t);
          break;
        }
        a = Qn("" + a), e.setAttribute(t, a);
        break;
      case "onClick":
        a != null && (e.onclick = Gl);
        break;
      case "onScroll":
        a != null && P("scroll", e);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          e.removeAttribute("xlink:href");
          break;
        }
        t = Qn("" + a), e.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, "" + a) : e.removeAttribute(t);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(t, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, a) : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(t, a) : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
        break;
      case "popover":
        P("beforetoggle", e), P("toggle", e), Yn(e, "popover", a);
        break;
      case "xlinkActuate":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Yl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Yl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Yl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Yl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Yn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Ah.get(t) || t, Yn(e, t, a));
    }
  }
  function ns(e, l, t, a, n, i) {
    switch (t) {
      case "style":
        sf(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pt(e, a) : (typeof a == "number" || typeof a == "bigint") && Pt(e, "" + a);
        break;
      case "onScroll":
        a != null && P("scroll", e);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Gl);
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
        if (!Is.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (n = t.endsWith("Capture"), l = t.slice(2, n ? t.length - 7 : void 0), i = e[Pe] || null, i = i != null ? i[t] : null, typeof i == "function" && e.removeEventListener(l, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, a, n);
              break e;
            }
            t in e ? e[t] = a : a === !0 ? e.setAttribute(t, "") : Yn(e, t, a);
          }
    }
  }
  function Ze(e, l, t) {
    switch (l) {
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
        P("error", e), P("load", e);
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
                  throw Error(d(137, l));
                default:
                  he(e, l, i, c, t, null);
              }
          }
        n && he(e, l, "srcSet", t.srcSet, t, null), a && he(e, l, "src", t.src, t, null);
        return;
      case "input":
        P("invalid", e);
        var s = i = c = n = null, r = null, y = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var S = t[a];
            if (S != null)
              switch (a) {
                case "name":
                  n = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  r = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  i = S;
                  break;
                case "defaultValue":
                  s = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(d(137, l));
                  break;
                default:
                  he(e, l, a, S, t, null);
              }
          }
        af(
          e,
          i,
          s,
          r,
          y,
          c,
          n,
          !1
        );
        return;
      case "select":
        P("invalid", e), a = c = i = null;
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
                he(e, l, n, s, t, null);
            }
        l = i, t = c, e.multiple = !!a, l != null ? It(e, !!a, l, !1) : t != null && It(e, !!a, t, !0);
        return;
      case "textarea":
        P("invalid", e), i = n = a = null;
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
                he(e, l, c, s, t, null);
            }
        uf(e, a, n, i);
        return;
      case "option":
        for (r in t)
          t.hasOwnProperty(r) && (a = t[r], a != null) && (r === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : he(e, l, r, a, t, null));
        return;
      case "dialog":
        P("beforetoggle", e), P("toggle", e), P("cancel", e), P("close", e);
        break;
      case "iframe":
      case "object":
        P("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gn.length; a++)
          P(gn[a], e);
        break;
      case "image":
        P("error", e), P("load", e);
        break;
      case "details":
        P("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", e), P("load", e);
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
                throw Error(d(137, l));
              default:
                he(e, l, y, a, t, null);
            }
        return;
      default:
        if (xu(l)) {
          for (S in t)
            t.hasOwnProperty(S) && (a = t[S], a !== void 0 && ns(
              e,
              l,
              S,
              a,
              t,
              void 0
            ));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && (a = t[s], a != null && he(e, l, s, a, t, null));
  }
  function ev(e, l, t, a) {
    switch (l) {
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
        var n = null, i = null, c = null, s = null, r = null, y = null, S = null;
        for (j in t) {
          var E = t[j];
          if (t.hasOwnProperty(j) && E != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = E;
              default:
                a.hasOwnProperty(j) || he(e, l, j, null, a, E);
            }
        }
        for (var x in a) {
          var j = a[x];
          if (E = t[x], a.hasOwnProperty(x) && (j != null || E != null))
            switch (x) {
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
                S = j;
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
                  throw Error(d(137, l));
                break;
              default:
                j !== E && he(
                  e,
                  l,
                  x,
                  j,
                  a,
                  E
                );
            }
        }
        yu(
          e,
          c,
          s,
          r,
          y,
          S,
          i,
          n
        );
        return;
      case "select":
        j = c = s = x = null;
        for (i in t)
          if (r = t[i], t.hasOwnProperty(i) && r != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = r;
              default:
                a.hasOwnProperty(i) || he(
                  e,
                  l,
                  i,
                  null,
                  a,
                  r
                );
            }
        for (n in a)
          if (i = a[n], r = t[n], a.hasOwnProperty(n) && (i != null || r != null))
            switch (n) {
              case "value":
                x = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                c = i;
              default:
                i !== r && he(
                  e,
                  l,
                  n,
                  i,
                  a,
                  r
                );
            }
        l = s, t = c, a = j, x != null ? It(e, !!t, x, !1) : !!a != !!t && (l != null ? It(e, !!t, l, !0) : It(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        j = x = null;
        for (s in t)
          if (n = t[s], t.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                he(e, l, s, null, a, n);
            }
        for (c in a)
          if (n = a[c], i = t[c], a.hasOwnProperty(c) && (n != null || i != null))
            switch (c) {
              case "value":
                x = n;
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
                n !== i && he(e, l, c, n, a, i);
            }
        nf(e, x, j);
        return;
      case "option":
        for (var R in t)
          x = t[R], t.hasOwnProperty(R) && x != null && !a.hasOwnProperty(R) && (R === "selected" ? e.selected = !1 : he(
            e,
            l,
            R,
            null,
            a,
            x
          ));
        for (r in a)
          x = a[r], j = t[r], a.hasOwnProperty(r) && x !== j && (x != null || j != null) && (r === "selected" ? e.selected = x && typeof x != "function" && typeof x != "symbol" : he(
            e,
            l,
            r,
            x,
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
          x = t[G], t.hasOwnProperty(G) && x != null && !a.hasOwnProperty(G) && he(e, l, G, null, a, x);
        for (y in a)
          if (x = a[y], j = t[y], a.hasOwnProperty(y) && x !== j && (x != null || j != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(d(137, l));
                break;
              default:
                he(
                  e,
                  l,
                  y,
                  x,
                  a,
                  j
                );
            }
        return;
      default:
        if (xu(l)) {
          for (var me in t)
            x = t[me], t.hasOwnProperty(me) && x !== void 0 && !a.hasOwnProperty(me) && ns(
              e,
              l,
              me,
              void 0,
              a,
              x
            );
          for (S in a)
            x = a[S], j = t[S], !a.hasOwnProperty(S) || x === j || x === void 0 && j === void 0 || ns(
              e,
              l,
              S,
              x,
              a,
              j
            );
          return;
        }
    }
    for (var m in t)
      x = t[m], t.hasOwnProperty(m) && x != null && !a.hasOwnProperty(m) && he(e, l, m, null, a, x);
    for (E in a)
      x = a[E], j = t[E], !a.hasOwnProperty(E) || x === j || x == null && j == null || he(e, l, E, x, a, j);
  }
  function fo(e) {
    switch (e) {
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
  function lv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
        var n = t[a], i = n.transferSize, c = n.initiatorType, s = n.duration;
        if (i && s && fo(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var r = t[a], y = r.startTime;
            if (y > s) break;
            var S = r.transferSize, E = r.initiatorType;
            S && fo(E) && (r = r.responseEnd, c += S * (r < s ? 1 : (s - y) / (r - y)));
          }
          if (--a, l += 8 * (i + c) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var is = null, us = null;
  function qi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ro(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function oo(e, l) {
    if (e === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && l === "foreignObject" ? 0 : e;
  }
  function cs(e, l) {
    return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function tv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ss ? !1 : (ss = e, !0) : (ss = null, !1);
  }
  var ho = typeof setTimeout == "function" ? setTimeout : void 0, av = typeof clearTimeout == "function" ? clearTimeout : void 0, mo = typeof Promise == "function" ? Promise : void 0, nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof mo < "u" ? function(e) {
    return mo.resolve(null).then(e).catch(iv);
  } : ho;
  function iv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function St(e) {
    return e === "head";
  }
  function vo(e, l) {
    var t = l, a = 0;
    do {
      var n = t.nextSibling;
      if (e.removeChild(t), n && n.nodeType === 8)
        if (t = n.data, t === "/$" || t === "/&") {
          if (a === 0) {
            e.removeChild(n), Oa(l);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          a++;
        else if (t === "html")
          pn(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, pn(t);
          for (var i = t.firstChild; i; ) {
            var c = i.nextSibling, s = i.nodeName;
            i[qa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || t.removeChild(i), i = c;
          }
        } else
          t === "body" && pn(e.ownerDocument.body);
      t = n;
    } while (t);
    Oa(l);
  }
  function yo(e, l) {
    var t = e;
    e = 0;
    do {
      var a = t.nextSibling;
      if (t.nodeType === 1 ? l ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (l ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), a && a.nodeType === 8)
        if (t = a.data, t === "/$") {
          if (e === 0) break;
          e--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
      t = a;
    } while (t);
  }
  function fs(e) {
    var l = e.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (l = l.nextSibling, t.nodeName) {
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
      e.removeChild(t);
    }
  }
  function uv(e, l, t, a) {
    for (; e.nodeType === 1; ) {
      var n = t;
      if (e.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[qa])
          switch (l) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (l === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = _l(e.nextSibling), e === null) break;
    }
    return null;
  }
  function cv(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = _l(e.nextSibling), e === null)) return null;
    return e;
  }
  function go(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = _l(e.nextSibling), e === null)) return null;
    return e;
  }
  function rs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function sv(e, l) {
    var t = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = l;
    else if (e.data !== "$?" || t.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), t.removeEventListener("DOMContentLoaded", a);
      };
      t.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function _l(e) {
    for (; e != null; e = e.nextSibling) {
      var l = e.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = e.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return e;
  }
  var os = null;
  function xo(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return _l(e.nextSibling);
          l--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function po(e) {
    e = e.previousSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (l === 0) return e;
          l--;
        } else t !== "/$" && t !== "/&" || l++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jo(e, l, t) {
    switch (l = qi(t), e) {
      case "html":
        if (e = l.documentElement, !e) throw Error(d(452));
        return e;
      case "head":
        if (e = l.head, !e) throw Error(d(453));
        return e;
      case "body":
        if (e = l.body, !e) throw Error(d(454));
        return e;
      default:
        throw Error(d(451));
    }
  }
  function pn(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    mu(e);
  }
  var El = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new Set();
  function Bi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var lt = D.d;
  D.d = {
    f: fv,
    r: rv,
    D: dv,
    C: ov,
    L: hv,
    m: mv,
    X: yv,
    S: vv,
    M: gv
  };
  function fv() {
    var e = lt.f(), l = Ti();
    return e || l;
  }
  function rv(e) {
    var l = $t(e);
    l !== null && l.tag === 5 && l.type === "form" ? Br(l) : lt.r(e);
  }
  var Aa = typeof document > "u" ? null : document;
  function So(e, l, t) {
    var a = Aa;
    if (a && typeof l == "string" && l) {
      var n = xl(l);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), bo.has(n) || (bo.add(n), e = { rel: e, crossOrigin: t, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Ze(l, "link", e), He(l), a.head.appendChild(l)));
    }
  }
  function dv(e) {
    lt.D(e), So("dns-prefetch", e, null);
  }
  function ov(e, l) {
    lt.C(e, l), So("preconnect", e, l);
  }
  function hv(e, l, t) {
    lt.L(e, l, t);
    var a = Aa;
    if (a && e && l) {
      var n = 'link[rel="preload"][as="' + xl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (n += '[imagesrcset="' + xl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (n += '[imagesizes="' + xl(
        t.imageSizes
      ) + '"]')) : n += '[href="' + xl(e) + '"]';
      var i = n;
      switch (l) {
        case "style":
          i = Ta(e);
          break;
        case "script":
          i = Ma(e);
      }
      El.has(i) || (e = U(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), El.set(i, e), a.querySelector(n) !== null || l === "style" && a.querySelector(jn(i)) || l === "script" && a.querySelector(bn(i)) || (l = a.createElement("link"), Ze(l, "link", e), He(l), a.head.appendChild(l)));
    }
  }
  function mv(e, l) {
    lt.m(e, l);
    var t = Aa;
    if (t && e) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + xl(a) + '"][href="' + xl(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ma(e);
      }
      if (!El.has(i) && (e = U({ rel: "modulepreload", href: e }, l), El.set(i, e), t.querySelector(n) === null)) {
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
        a = t.createElement("link"), Ze(a, "link", e), He(a), t.head.appendChild(a);
      }
    }
  }
  function vv(e, l, t) {
    lt.S(e, l, t);
    var a = Aa;
    if (a && e) {
      var n = Wt(a).hoistableStyles, i = Ta(e);
      l = l || "default";
      var c = n.get(i);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          jn(i)
        ))
          s.loading = 5;
        else {
          e = U(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = El.get(i)) && hs(e, t);
          var r = c = a.createElement("link");
          He(r), Ze(r, "link", e), r._p = new Promise(function(y, S) {
            r.onload = y, r.onerror = S;
          }), r.addEventListener("load", function() {
            s.loading |= 1;
          }), r.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Yi(c, l, a);
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
  function yv(e, l) {
    lt.X(e, l);
    var t = Aa;
    if (t && e) {
      var a = Wt(t).hoistableScripts, n = Ma(e), i = a.get(n);
      i || (i = t.querySelector(bn(n)), i || (e = U({ src: e, async: !0 }, l), (l = El.get(n)) && ms(e, l), i = t.createElement("script"), He(i), Ze(i, "link", e), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function gv(e, l) {
    lt.M(e, l);
    var t = Aa;
    if (t && e) {
      var a = Wt(t).hoistableScripts, n = Ma(e), i = a.get(n);
      i || (i = t.querySelector(bn(n)), i || (e = U({ src: e, async: !0, type: "module" }, l), (l = El.get(n)) && ms(e, l), i = t.createElement("script"), He(i), Ze(i, "link", e), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function zo(e, l, t, a) {
    var n = (n = F.current) ? Bi(n) : null;
    if (!n) throw Error(d(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = Ta(t.href), t = Wt(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Ta(t.href);
          var i = Wt(
            n
          ).hoistableStyles, c = i.get(e);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, c), (i = n.querySelector(
            jn(e)
          )) && !i._p && (c.instance = i, c.state.loading = 5), El.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, El.set(e, t), i || xv(
            n,
            e,
            t,
            c.state
          ))), l && a === null)
            throw Error(d(528, ""));
          return c;
        }
        if (l && a !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ma(t), t = Wt(
          n
        ).hoistableScripts, a = t.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, e));
    }
  }
  function Ta(e) {
    return 'href="' + xl(e) + '"';
  }
  function jn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function No(e) {
    return U({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function xv(e, l, t, a) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = e.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ze(l, "link", t), He(l), e.head.appendChild(l));
  }
  function Ma(e) {
    return '[src="' + xl(e) + '"]';
  }
  function bn(e) {
    return "script[async]" + e;
  }
  function _o(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + xl(t.href) + '"]'
          );
          if (a)
            return l.instance = a, He(a), a;
          var n = U({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), He(a), Ze(a, "style", n), Yi(a, t.precedence, e), l.instance = a;
        case "stylesheet":
          n = Ta(t.href);
          var i = e.querySelector(
            jn(n)
          );
          if (i)
            return l.state.loading |= 4, l.instance = i, He(i), i;
          a = No(t), (n = El.get(n)) && hs(a, n), i = (e.ownerDocument || e).createElement("link"), He(i);
          var c = i;
          return c._p = new Promise(function(s, r) {
            c.onload = s, c.onerror = r;
          }), Ze(i, "link", a), l.state.loading |= 4, Yi(i, t.precedence, e), l.instance = i;
        case "script":
          return i = Ma(t.src), (n = e.querySelector(
            bn(i)
          )) ? (l.instance = n, He(n), n) : (a = t, (n = El.get(i)) && (a = U({}, t), ms(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), He(n), Ze(n, "link", a), e.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(d(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Yi(a, t.precedence, e));
    return l.instance;
  }
  function Yi(e, l, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === l) i = s;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function hs(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function ms(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var Gi = null;
  function Eo(e, l, t) {
    if (Gi === null) {
      var a = /* @__PURE__ */ new Map(), n = Gi = /* @__PURE__ */ new Map();
      n.set(t, a);
    } else
      n = Gi, a = n.get(t), a || (a = /* @__PURE__ */ new Map(), n.set(t, a));
    if (a.has(e)) return a;
    for (a.set(e, null), t = t.getElementsByTagName(e), n = 0; n < t.length; n++) {
      var i = t[n];
      if (!(i[qa] || i[Ye] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(l) || "";
        c = e + c;
        var s = a.get(c);
        s ? s.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function Ao(e, l, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      l === "title" ? e.querySelector("head > title") : null
    );
  }
  function pv(e, l, t) {
    if (t === 1 || l.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (e = l.disabled, typeof l.precedence == "string" && e == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function To(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function jv(e, l, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Ta(a.href), i = l.querySelector(
          jn(n)
        );
        if (i) {
          l = i._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = Xi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = i, He(i);
          return;
        }
        i = l.ownerDocument || l, a = No(a), (n = El.get(n)) && hs(a, n), i = i.createElement("link"), He(i);
        var c = i;
        c._p = new Promise(function(s, r) {
          c.onload = s, c.onerror = r;
        }), Ze(i, "link", a), t.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Xi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var vs = 0;
  function bv(e, l) {
    return e.stylesheets && e.count === 0 && Zi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Zi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + l);
      0 < e.imgBytes && vs === 0 && (vs = 62500 * lv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > vs ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Xi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Qi = null;
  function Zi(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Qi = /* @__PURE__ */ new Map(), l.forEach(Sv, e), Qi = null, Xi.call(e));
  }
  function Sv(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Qi.get(e);
      if (t) var a = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Qi.set(e, t);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), a = c);
        }
        a && t.set(null, a);
      }
      n = l.instance, c = n.getAttribute("data-precedence"), i = t.get(c) || a, i === a && t.set(null, n), t.set(c, n), this.count++, a = Xi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), l.state.loading |= 4;
    }
  }
  var Sn = {
    $$typeof: ze,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function zv(e, l, t, a, n, i, c, s, r) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ru(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ru(0), this.hiddenUpdates = ru(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Mo(e, l, t, a, n, i, c, s, r, y, S, E) {
    return e = new zv(
      e,
      l,
      t,
      c,
      r,
      y,
      S,
      E,
      s
    ), l = 1, i === !0 && (l |= 24), i = dl(3, null, null, l), e.current = i, i.stateNode = e, l = ku(), l.refCount++, e.pooledCache = l, l.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: l
    }, Iu(i), e;
  }
  function Oo(e) {
    return e ? (e = ua, e) : ua;
  }
  function Do(e, l, t, a, n, i) {
    n = Oo(n), a.context === null ? a.context = n : a.pendingContext = n, a = dt(l), a.payload = { element: t }, i = i === void 0 ? null : i, i !== null && (a.callback = i), t = ot(e, a, l), t !== null && (il(t, e, l), Pa(t, e, l));
  }
  function Co(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function ys(e, l) {
    Co(e, l), (e = e.alternate) && Co(e, l);
  }
  function Uo(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Rt(e, 67108864);
      l !== null && il(l, e, 67108864), ys(e, 67108864);
    }
  }
  function Ro(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = yl();
      l = du(l);
      var t = Rt(e, l);
      t !== null && il(t, e, l), ys(e, l);
    }
  }
  var Li = !0;
  function Nv(e, l, t, a) {
    var n = b.T;
    b.T = null;
    var i = D.p;
    try {
      D.p = 2, gs(e, l, t, a);
    } finally {
      D.p = i, b.T = n;
    }
  }
  function _v(e, l, t, a) {
    var n = b.T;
    b.T = null;
    var i = D.p;
    try {
      D.p = 8, gs(e, l, t, a);
    } finally {
      D.p = i, b.T = n;
    }
  }
  function gs(e, l, t, a) {
    if (Li) {
      var n = xs(a);
      if (n === null)
        as(
          e,
          l,
          a,
          Vi,
          t
        ), qo(e, a);
      else if (Av(
        n,
        e,
        l,
        t,
        a
      ))
        a.stopPropagation();
      else if (qo(e, a), l & 4 && -1 < Ev.indexOf(e)) {
        for (; n !== null; ) {
          var i = $t(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Mt(i.pendingLanes);
                  if (c !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var r = 1 << 31 - fl(c);
                      s.entanglements[1] |= r, c &= ~r;
                    }
                    ql(i), (ce & 6) === 0 && (Ei = cl() + 500, yn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Rt(i, 2), s !== null && il(s, i, 2), Ti(), ys(i, 2);
            }
          if (i = xs(a), i === null && as(
            e,
            l,
            a,
            Vi,
            t
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        as(
          e,
          l,
          a,
          null,
          t
        );
    }
  }
  function xs(e) {
    return e = ju(e), ps(e);
  }
  var Vi = null;
  function ps(e) {
    if (Vi = null, e = kt(e), e !== null) {
      var l = O(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = V(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = H(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return Vi = e, null;
  }
  function Ho(e) {
    switch (e) {
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
        switch (dh()) {
          case Qs:
            return 2;
          case Zs:
            return 8;
          case Un:
          case oh:
            return 32;
          case Ls:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var js = !1, zt = null, Nt = null, _t = null, zn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), Et = [], Ev = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qo(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Nt = null;
        break;
      case "mouseover":
      case "mouseout":
        _t = null;
        break;
      case "pointerover":
      case "pointerout":
        zn.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nn.delete(l.pointerId);
    }
  }
  function _n(e, l, t, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, l !== null && (l = $t(l), l !== null && Uo(l)), e) : (e.eventSystemFlags |= a, l = e.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), e);
  }
  function Av(e, l, t, a, n) {
    switch (l) {
      case "focusin":
        return zt = _n(
          zt,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return Nt = _n(
          Nt,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return _t = _n(
          _t,
          e,
          l,
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
            e,
            l,
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
            e,
            l,
            t,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Bo(e) {
    var l = kt(e.target);
    if (l !== null) {
      var t = O(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = V(t), l !== null) {
            e.blockedOn = l, $s(e.priority, function() {
              Ro(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = H(t), l !== null) {
            e.blockedOn = l, $s(e.priority, function() {
              Ro(t);
            });
            return;
          }
        } else if (l === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = xs(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        pu = a, t.target.dispatchEvent(a), pu = null;
      } else
        return l = $t(t), l !== null && Uo(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function Yo(e, l, t) {
    wi(e) && t.delete(l);
  }
  function Tv() {
    js = !1, zt !== null && wi(zt) && (zt = null), Nt !== null && wi(Nt) && (Nt = null), _t !== null && wi(_t) && (_t = null), zn.forEach(Yo), Nn.forEach(Yo);
  }
  function Ki(e, l) {
    e.blockedOn === l && (e.blockedOn = null, js || (js = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Tv
    )));
  }
  var Ji = null;
  function Go(e) {
    Ji !== e && (Ji = e, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Ji === e && (Ji = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], a = e[l + 1], n = e[l + 2];
          if (typeof a != "function") {
            if (ps(a || t) === null)
              continue;
            break;
          }
          var i = $t(t);
          i !== null && (e.splice(l, 3), l -= 3, xc(
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
  function Oa(e) {
    function l(r) {
      return Ki(r, e);
    }
    zt !== null && Ki(zt, e), Nt !== null && Ki(Nt, e), _t !== null && Ki(_t, e), zn.forEach(l), Nn.forEach(l);
    for (var t = 0; t < Et.length; t++) {
      var a = Et[t];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Et.length && (t = Et[0], t.blockedOn === null); )
      Bo(t), t.blockedOn === null && Et.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (a = 0; a < t.length; a += 3) {
        var n = t[a], i = t[a + 1], c = n[Pe] || null;
        if (typeof i == "function")
          c || Go(t);
        else if (c) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, c = i[Pe] || null)
              s = c.formAction;
            else if (ps(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), Go(t);
        }
      }
  }
  function Xo() {
    function e(i) {
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
    function l() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(t, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
      };
    }
  }
  function bs(e) {
    this._internalRoot = e;
  }
  ki.prototype.render = bs.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(d(409));
    var t = l.current, a = yl();
    Do(t, a, e, l, null, null);
  }, ki.prototype.unmount = bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      Do(e.current, 2, null, e, null, null), Ti(), l[Jt] = null;
    }
  };
  function ki(e) {
    this._internalRoot = e;
  }
  ki.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = ks();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Et.length && l !== 0 && l < Et[t].priority; t++) ;
      Et.splice(t, 0, e), t === 0 && Bo(e);
    }
  };
  var Qo = p.version;
  if (Qo !== "19.2.8")
    throw Error(
      d(
        527,
        Qo,
        "19.2.8"
      )
    );
  D.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = N(l), e = e !== null ? K(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Mv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$i.isDisabled && $i.supportsFiber)
      try {
        Ua = $i.inject(
          Mv
        ), sl = $i;
      } catch {
      }
  }
  return An.createRoot = function(e, l) {
    if (!T(e)) throw Error(d(299));
    var t = !1, a = "", n = Jr, i = kr, c = $r;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = Mo(
      e,
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
      Xo
    ), e[Jt] = l.current, ts(e), new bs(l);
  }, An.hydrateRoot = function(e, l, t) {
    if (!T(e)) throw Error(d(299));
    var a = !1, n = "", i = Jr, c = kr, s = $r, r = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (r = t.formState)), l = Mo(
      e,
      1,
      !0,
      l,
      t ?? null,
      a,
      n,
      r,
      i,
      c,
      s,
      Xo
    ), l.context = Oo(null), t = l.current, a = yl(), a = du(a), n = dt(a), n.callback = null, ot(t, n, a), t = a, l.current.lanes = t, Ha(l, t), ql(l), e[Jt] = l.current, ts(e), new ki(l);
  }, An.version = "19.2.8", An;
}
var Fo;
function Gv() {
  if (Fo) return Ns.exports;
  Fo = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return f(), Ns.exports = Yv(), Ns.exports;
}
var Xv = Gv();
const Qv = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), th = (...f) => f.filter((p, g, d) => !!p && p.trim() !== "" && d.indexOf(p) === g).join(" ").trim();
var Zv = {
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
const Lv = L.forwardRef(
  ({
    color: f = "currentColor",
    size: p = 24,
    strokeWidth: g = 2,
    absoluteStrokeWidth: d,
    className: T = "",
    children: O,
    iconNode: V,
    ...H
  }, M) => L.createElement(
    "svg",
    {
      ref: M,
      ...Zv,
      width: p,
      height: p,
      stroke: f,
      strokeWidth: d ? Number(g) * 24 / Number(p) : g,
      className: th("lucide", T),
      ...H
    },
    [
      ...V.map(([N, K]) => L.createElement(N, K)),
      ...Array.isArray(O) ? O : [O]
    ]
  )
);
const te = (f, p) => {
  const g = L.forwardRef(
    ({ className: d, ...T }, O) => L.createElement(Lv, {
      ref: O,
      iconNode: p,
      className: th(`lucide-${Qv(f)}`, d),
      ...T
    })
  );
  return g.displayName = `${f}`, g;
};
const Mn = te("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Dl = te("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Cs = te("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Vv = te("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const tt = te("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Dn = te("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Ts = te("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Us = te("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Rs = te("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Tn = te("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const Fi = te("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Ms = te("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const wv = te("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const ah = te("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
const Hs = te("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const qs = te("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const Bs = te("FileJson", [
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
const nh = te("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const Kv = te("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Pi = te("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const Jv = te("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const kv = te("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const eu = te("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const $v = te("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const Wv = te("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const Fv = te("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const lu = te("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const On = te("ShieldAlert", [
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
const tu = te("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Iv = te("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
const au = te("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const Pv = te("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const Ys = te("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const e1 = te("WalletCards", [
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
const ih = te("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Ii = te("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Wi = {
  option_id: null,
  rationale: "",
  assumptions: "",
  owner: "",
  acceptance_condition: "",
  risk: "",
  evidence_refs: [],
  terminal_route: "conditional_release"
}, uh = [au, lu, Ii, tu, Cs];
function Bl(...f) {
  return f.filter(Boolean).join(" ");
}
function Io(f) {
  const p = new Date(f);
  return Number.isNaN(p.getTime()) ? f : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(p);
}
function l1(f, p) {
  return `ai-delivery-arena:seen-activity:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${p}`;
}
function Po(f) {
  if (typeof window > "u")
    return { signalCount: 0, evidenceIds: [] };
  try {
    const p = JSON.parse(window.localStorage.getItem(f) ?? "{}");
    return {
      signalCount: typeof p.signalCount == "number" && p.signalCount >= 0 ? p.signalCount : 0,
      evidenceIds: Array.isArray(p.evidenceIds) ? p.evidenceIds.filter((g) => typeof g == "string") : []
    };
  } catch {
    return { signalCount: 0, evidenceIds: [] };
  }
}
function t1(f, p) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(f, JSON.stringify(p));
    } catch {
    }
}
function eh(f, p) {
  const g = new Blob([JSON.stringify(p, null, 2)], {
    type: "application/json"
  }), d = URL.createObjectURL(g), T = document.createElement("a");
  T.href = d, T.download = f, document.body.appendChild(T), T.click(), T.remove(), URL.revokeObjectURL(d);
}
function a1(f) {
  return [
    [!!f.option_id, "Choose an action."],
    [
      f.rationale.trim().length >= 40,
      "Rationale must contain at least 40 characters."
    ],
    [f.owner.trim().length >= 2, "Name an accountable owner."],
    [
      f.assumptions.trim().length >= 10,
      "State a critical assumption."
    ],
    [
      f.acceptance_condition.trim().length >= 10,
      "State a measurable acceptance or stop condition."
    ],
    [f.risk.trim().length >= 10, "State the material risk."]
  ].filter(([g]) => !g).map(([, g]) => g);
}
function $e({
  children: f,
  variant: p = "primary",
  className: g,
  disabled: d,
  busy: T,
  type: O = "button",
  onClick: V
}) {
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      className: Bl("button", `button-${p}`, g),
      disabled: d || T,
      type: O,
      onClick: V,
      children: [
        T && /* @__PURE__ */ u.jsx("span", { className: "spinner", "aria-hidden": "true" }),
        f
      ]
    }
  );
}
function ch({
  data: f,
  emit: p,
  transparent: g = !1
}) {
  const [d, T] = L.useState(!1);
  return /* @__PURE__ */ u.jsxs("header", { className: Bl("product-header", g && "header-transparent"), children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "brand",
        type: "button",
        onClick: () => f.authenticated || f.local_mode ? p("navigate", { view: "centre" }) : window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "AI Delivery Arena home",
        children: [
          /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
          /* @__PURE__ */ u.jsxs("span", { className: "brand-copy", children: [
            /* @__PURE__ */ u.jsx("strong", { children: f.product.name }),
            /* @__PURE__ */ u.jsx("small", { children: f.product.tagline })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("nav", { className: "header-actions", "aria-label": "Product actions", children: [
      /* @__PURE__ */ u.jsxs(
        "a",
        {
          className: "header-link desktop-only",
          href: f.links?.github,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ u.jsx(nh, { size: 16 }),
            " Source"
          ]
        }
      ),
      f.authenticated || f.local_mode ? /* @__PURE__ */ u.jsxs("div", { className: "account-menu", children: [
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            className: "account-button",
            type: "button",
            "aria-expanded": d,
            onClick: () => T((O) => !O),
            children: [
              /* @__PURE__ */ u.jsx("span", { className: "account-avatar", children: /* @__PURE__ */ u.jsx(Ys, { size: 16 }) }),
              /* @__PURE__ */ u.jsx("span", { className: "desktop-only", children: f.local_mode ? "Local participant" : f.user?.email }),
              /* @__PURE__ */ u.jsx(Dn, { size: 15 })
            ]
          }
        ),
        d && /* @__PURE__ */ u.jsxs("div", { className: "account-popover", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Signed in as" }),
            /* @__PURE__ */ u.jsx("strong", { children: f.local_mode ? "Local preview" : f.user?.email })
          ] }),
          !f.local_mode && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => p("sign_out"), children: [
            /* @__PURE__ */ u.jsx($v, { size: 15 }),
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
          onClick: () => T((O) => !O),
          children: /* @__PURE__ */ u.jsx(Wv, { size: 20 })
        }
      )
    ] })
  ] });
}
function n1({ notice: f }) {
  const [p, g] = L.useState(!!f);
  if (L.useEffect(() => {
    if (g(!!f), !f) return;
    const T = window.setTimeout(() => g(!1), 6e3);
    return () => window.clearTimeout(T);
  }, [f?.kind, f?.message]), !f || !p) return null;
  const d = f.kind === "error" ? Rs : Us;
  return /* @__PURE__ */ u.jsxs("div", { className: Bl("toast", `toast-${f.kind}`), role: "status", children: [
    /* @__PURE__ */ u.jsx(d, { size: 18 }),
    /* @__PURE__ */ u.jsx("span", { children: f.message }),
    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => g(!1), "aria-label": "Dismiss", children: /* @__PURE__ */ u.jsx(ih, { size: 16 }) })
  ] });
}
function i1({ data: f, emit: p }) {
  const [g, d] = L.useState("signin"), [T, O] = L.useState(""), [V, H] = L.useState(""), [M, N] = L.useState(!1), [K, U] = L.useState(!1);
  L.useEffect(() => U(!1), [f.notice, f.authenticated]);
  const ne = (de) => {
    de.preventDefault(), U(!0), p(g === "signin" ? "sign_in" : "sign_up", {
      email: T,
      password: V,
      consent: M
    });
  };
  return f.configured ? /* @__PURE__ */ u.jsxs("aside", { className: "auth-panel", id: "access", children: [
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
          className: g === "signin" ? "active" : "",
          onClick: () => d("signin"),
          role: "tab",
          "aria-selected": g === "signin",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: g === "create" ? "active" : "",
          onClick: () => d("create"),
          role: "tab",
          "aria-selected": g === "create",
          children: "Create account"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("form", { className: "auth-form", onSubmit: ne, children: [
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: g === "signin" ? "Email" : "Work email" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(Ys, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "email",
              autoComplete: "email",
              value: T,
              onChange: (de) => O(de.target.value),
              placeholder: "you@company.com",
              required: !0
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: g === "signin" ? "Password" : "Create password" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(Jv, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "password",
              autoComplete: g === "signin" ? "current-password" : "new-password",
              value: V,
              onChange: (de) => H(de.target.value),
              minLength: g === "create" ? 8 : void 0,
              placeholder: g === "create" ? "At least 8 characters" : "Your password",
              required: !0
            }
          )
        ] })
      ] }),
      g === "create" && /* @__PURE__ */ u.jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "checkbox",
            checked: M,
            onChange: (de) => N(de.target.checked)
          }
        ),
        /* @__PURE__ */ u.jsx("span", { children: "I understand this beta stores my synthetic simulation responses." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { type: "submit", className: "button-full", busy: K, children: [
        g === "signin" ? "Continue" : "Create free account",
        !K && /* @__PURE__ */ u.jsx(Dl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ u.jsx(eu, { size: 15 }),
      /* @__PURE__ */ u.jsx("span", { children: "Encrypted runs. No service-role key in the application." })
    ] })
  ] }) : /* @__PURE__ */ u.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Local preview" }),
    /* @__PURE__ */ u.jsx("h2", { children: "Cloud access is not configured" }),
    /* @__PURE__ */ u.jsx("p", { children: "Add the Supabase and Arena secrets to enable private cloud accounts. The local edition remains available for development." }),
    /* @__PURE__ */ u.jsxs($e, { className: "button-full", onClick: () => p("open_local"), children: [
      "Open local edition ",
      /* @__PURE__ */ u.jsx(Dl, { size: 17 })
    ] })
  ] });
}
function u1({ data: f, emit: p }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "marketing-page", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "marketing-hero-wrap", children: [
      /* @__PURE__ */ u.jsx(ch, { data: f, emit: p, transparent: !0 }),
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
              /* @__PURE__ */ u.jsx(Dl, { size: 18 })
            ] }),
            /* @__PURE__ */ u.jsxs(
              "a",
              {
                className: "button button-hero-ghost",
                href: f.links?.github,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ u.jsx(nh, { size: 17 }),
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
        /* @__PURE__ */ u.jsx(i1, { data: f, emit: p })
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
        /* @__PURE__ */ u.jsx(Dl, { className: "comparison-arrow", size: 28 }),
        /* @__PURE__ */ u.jsxs("article", { className: "comparison-primary", children: [
          /* @__PURE__ */ u.jsx("span", { className: "comparison-label", children: "AI Delivery Arena" }),
          /* @__PURE__ */ u.jsx("h3", { children: "What do you do?" }),
          /* @__PURE__ */ u.jsxs("ul", { children: [
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(tt, { size: 14 }),
              " Evidence-led commitments"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(tt, { size: 14 }),
              " Traceable decision records"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(tt, { size: 14 }),
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
          icon: lu,
          title: "Investigate",
          copy: "Spend limited credits on the evidence that can materially improve your next decisions."
        },
        {
          number: "03",
          icon: qs,
          title: "Commit",
          copy: "Record the action, accountable owner, rationale, assumption, risk and measurable stop condition."
        },
        {
          number: "04",
          icon: Hs,
          title: "Experience",
          copy: "Observe stakeholder reactions, operational signals and deterministic crises caused by prior choices."
        }
      ].map(({ number: g, icon: d, title: T, copy: O }) => /* @__PURE__ */ u.jsxs("article", { className: "method-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: g }),
          /* @__PURE__ */ u.jsx(d, { size: 20 })
        ] }),
        /* @__PURE__ */ u.jsx("h3", { children: T }),
        /* @__PURE__ */ u.jsx("p", { children: O })
      ] }, g)) })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-section methodology-band", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Transparent by design" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Inspect the scenario, engine and assessment methodology." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("p", { children: "The deterministic engine and scenario fixtures are public. First-attempt scores remain concealed until D20. Results are simulation assessments, not certification or an independently calibrated benchmark." }),
        /* @__PURE__ */ u.jsxs("a", { href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
          "Explore on GitHub ",
          /* @__PURE__ */ u.jsx(ah, { size: 16 })
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
            f.product.version
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("a", { href: f.links?.privacy, target: "_blank", rel: "noreferrer", children: "Privacy" }),
        /* @__PURE__ */ u.jsx("a", { href: f.links?.terms, target: "_blank", rel: "noreferrer", children: "Terms" }),
        /* @__PURE__ */ u.jsx("span", { children: "Synthetic scenario" }),
        /* @__PURE__ */ u.jsx("span", { children: "Apache-2.0" })
      ] })
    ] })
  ] });
}
function Da({
  data: f,
  emit: p,
  children: g,
  compact: d = !1
}) {
  return /* @__PURE__ */ u.jsxs("div", { className: Bl("product-page", d && "product-page-compact"), children: [
    /* @__PURE__ */ u.jsx(ch, { data: f, emit: p }),
    g,
    /* @__PURE__ */ u.jsxs("footer", { className: "product-footer", children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        "Hosted Beta v",
        f.product.version
      ] }),
      /* @__PURE__ */ u.jsx("span", { children: "Simulation assessment. Not independently calibrated." })
    ] })
  ] });
}
function Os({ children: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "empty-state", children: [
    /* @__PURE__ */ u.jsx(Bs, { size: 26 }),
    /* @__PURE__ */ u.jsx("p", { children: f })
  ] });
}
function c1({ data: f, emit: p }) {
  const d = (f.centre ?? {}).runs ?? [], T = d.find((Z) => Z.status !== "completed"), O = d.filter((Z) => Z.status === "completed").length, [V, H] = L.useState(null), [M, N] = L.useState(""), [K, U] = L.useState(!1), ne = L.useRef(null);
  L.useEffect(() => U(!1), [f.notice, f.screen]);
  const de = (Z) => p("navigate", {
    view: Z.status === "completed" ? "debrief" : "decision",
    run_id: Z.run_id
  }), Se = async (Z) => {
    const Ae = Z.target.files?.[0];
    if (Ae) {
      U(!0);
      try {
        const Ue = JSON.parse(await Ae.text());
        p("import_run", { document: Ue });
      } catch {
        U(!1), window.alert("That file is not valid JSON.");
      } finally {
        Z.target.value = "";
      }
    }
  };
  return /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "run-centre page-width", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "page-title-row", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Run centre" }),
        /* @__PURE__ */ u.jsx("h1", { children: "Your leadership evidence." }),
        /* @__PURE__ */ u.jsx("p", { children: "Continue an attempt, review a completed debrief or begin a clean run. Committed decisions remain immutable." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { onClick: () => p("open_briefing"), children: [
        "New attempt ",
        /* @__PURE__ */ u.jsx(Dl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "summary-grid", children: [
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(kv, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: d.length }),
          /* @__PURE__ */ u.jsx("span", { children: "Total attempts" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Fi, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: T ? 1 : 0 }),
          /* @__PURE__ */ u.jsx("span", { children: "In progress" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Cs, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: O }),
          /* @__PURE__ */ u.jsx("span", { children: "Debriefs ready" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Ms, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: f.local_mode ? "Local" : "Cloud" }),
          /* @__PURE__ */ u.jsx("span", { children: "Save mode" })
        ] })
      ] })
    ] }),
    T ? /* @__PURE__ */ u.jsxs("section", { className: "active-run-card", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "active-run-main", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "active-run-kicker", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "status-pill status-progress", children: [
            /* @__PURE__ */ u.jsx("span", {}),
            " In progress"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Last saved ",
            Io(T.updated_at)
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("h2", { children: T.display_name }),
        /* @__PURE__ */ u.jsxs("p", { children: [
          "Procurement Under Pressure · ",
          T.completed,
          " of ",
          T.total,
          " decisions committed"
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "progress-track", "aria-label": `${T.completed} of ${T.total}`, children: /* @__PURE__ */ u.jsx("span", { style: { width: `${T.completed / T.total * 100}%` } }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "active-run-meta", children: [
          /* @__PURE__ */ u.jsxs("span", { children: [
            Math.round(T.completed / T.total * 100),
            "% complete"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Next D",
            String(T.completed + 1).padStart(2, "0")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "active-run-action", children: [
        /* @__PURE__ */ u.jsx("div", { className: "progress-ring", style: { "--progress": `${T.completed / T.total * 360}deg` }, children: /* @__PURE__ */ u.jsxs("span", { children: [
          T.completed,
          "/",
          T.total
        ] }) }),
        /* @__PURE__ */ u.jsxs($e, { onClick: () => de(T), children: [
          "Continue at D",
          String(T.completed + 1).padStart(2, "0"),
          /* @__PURE__ */ u.jsx(Dl, { size: 17 })
        ] })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("section", { className: "first-run-banner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Your first attempt" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ u.jsx("p", { children: "Five stages, 20 decisions and approximately 90 minutes." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { onClick: () => p("open_briefing"), children: [
        "Read the briefing ",
        /* @__PURE__ */ u.jsx(Dl, { size: 17 })
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
              ref: ne,
              className: "visually-hidden",
              type: "file",
              accept: ".json,application/json",
              onChange: Se
            }
          ),
          /* @__PURE__ */ u.jsxs(
            $e,
            {
              variant: "secondary",
              busy: K,
              onClick: () => ne.current?.click(),
              children: [
                /* @__PURE__ */ u.jsx(Pv, { size: 16 }),
                " Import local run"
              ]
            }
          )
        ] })
      ] }),
      d.length === 0 ? /* @__PURE__ */ u.jsx(Os, { children: "No attempts yet. Start with the mission briefing." }) : /* @__PURE__ */ u.jsxs("div", { className: "run-table", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "run-table-head", children: [
          /* @__PURE__ */ u.jsx("span", { children: "Attempt" }),
          /* @__PURE__ */ u.jsx("span", { children: "Progress" }),
          /* @__PURE__ */ u.jsx("span", { children: "Updated" }),
          /* @__PURE__ */ u.jsx("span", {})
        ] }),
        d.map((Z) => /* @__PURE__ */ u.jsxs("article", { className: "run-table-row", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "run-name-cell", children: [
            /* @__PURE__ */ u.jsx("span", { className: Bl("run-icon", Z.status === "completed" && "run-icon-complete"), children: Z.status === "completed" ? /* @__PURE__ */ u.jsx(tt, { size: 16 }) : /* @__PURE__ */ u.jsx(Fi, { size: 16 }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              V === Z.run_id ? /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "rename-form",
                  onSubmit: (Ae) => {
                    Ae.preventDefault(), p("rename_run", {
                      run_id: Z.run_id,
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
                        onChange: (Ae) => N(Ae.target.value)
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { type: "submit", children: /* @__PURE__ */ u.jsx(tt, { size: 15 }) }),
                    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => H(null), children: /* @__PURE__ */ u.jsx(ih, { size: 15 }) })
                  ]
                }
              ) : /* @__PURE__ */ u.jsx("strong", { children: Z.display_name }),
              /* @__PURE__ */ u.jsx("small", { children: Z.run_id })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: Bl("status-pill", Z.status === "completed" ? "status-complete" : "status-progress"), children: Z.status === "completed" ? "Complete" : "In progress" }),
            /* @__PURE__ */ u.jsxs("small", { children: [
              Z.completed,
              "/",
              Z.total,
              " decisions"
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: Io(Z.updated_at) }),
            /* @__PURE__ */ u.jsxs("small", { children: [
              "Revision ",
              Z.revision
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "run-row-actions", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Rename ${Z.display_name}`,
                onClick: () => {
                  H(Z.run_id), N(Z.display_name);
                },
                children: /* @__PURE__ */ u.jsx(Fv, { size: 15 })
              }
            ),
            /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => de(Z), children: [
              Z.status === "completed" ? "Open debrief" : "Resume",
              /* @__PURE__ */ u.jsx(Ts, { size: 16 })
            ] })
          ] })
        ] }, Z.run_id))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "import-note", children: [
        /* @__PURE__ */ u.jsx(Pi, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: "Local JSON checkpoints are replay-verified before they enter your account." })
      ] })
    ] })
  ] }) });
}
function s1({ data: f, emit: p }) {
  const g = f.briefing ?? {}, d = g.scenario ?? {}, T = g.stages ?? [], [O, V] = L.useState(!1);
  return L.useEffect(() => V(!1), [f.screen, f.notice]), /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "briefing-page page-width", children: [
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
        ].map(([H, M], N) => /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("span", { children: String(N + 1).padStart(2, "0") }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: H }),
            /* @__PURE__ */ u.jsx("p", { children: M })
          ] })
        ] }, H)) }),
        /* @__PURE__ */ u.jsx("h3", { children: "Programme stages" }),
        /* @__PURE__ */ u.jsx("div", { className: "briefing-stages", children: T.map((H, M) => {
          const N = uh[M] ?? Tn;
          return /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(N, { size: 17 }) }),
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
            /* @__PURE__ */ u.jsx(lu, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Investigate deliberately" }),
              "Evidence windows can close."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(qs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Make the record complete" }),
              "Owner, rationale, assumption, risk and stop condition."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Hs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "No live coaching" }),
              "Scores and preferred paths stay concealed."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Cs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Debrief after D20" }),
              "Critical gates and criterion evidence then unlock."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mechanics-box", children: [
          /* @__PURE__ */ u.jsx("strong", { children: "How evidence and signals work" }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Cite now" }),
            "Available evidence can support the decision you are recording."
          ] }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Order for later" }),
            "Spend a credit now. It cannot support today’s decision."
          ] }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Due Week X" }),
            "The ordered finding becomes citable in that programme week."
          ] }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Signals" }),
            "Observable changes appear after commitment and stay marked until opened."
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
          $e,
          {
            className: "button-full",
            busy: O,
            onClick: () => {
              V(!0), p("start_run");
            },
            children: [
              "Enter the Arena ",
              !O && /* @__PURE__ */ u.jsx(Dl, { size: 17 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function f1({ stages: f, run: p }) {
  const g = new Set((p.history ?? []).map((d) => d.decision_id));
  return /* @__PURE__ */ u.jsx("div", { className: "stage-rail", "aria-label": "Programme stages", children: f.map((d, T) => {
    const O = (d.decision_ids ?? []).every((M) => g.has(M)), V = d.id === p.stage?.id, H = uh[T] ?? Tn;
    return /* @__PURE__ */ u.jsxs("div", { className: Bl("stage-step", O && "done", V && "active"), children: [
      /* @__PURE__ */ u.jsx("span", { className: "stage-step-icon", children: O ? /* @__PURE__ */ u.jsx(tt, { size: 14 }) : /* @__PURE__ */ u.jsx(H, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Stage ",
          T + 1
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: d.label })
      ] })
    ] }, d.id);
  }) });
}
function r1({ data: f, emit: p }) {
  const g = f.run ?? {}, d = g.current_decision ?? {}, T = `${g.run_id}:${d.id}`, [O, V] = L.useState(f.draft ?? Wi), [H, M] = L.useState("evidence"), [N, K] = L.useState("all"), [U, ne] = L.useState(""), [de, Se] = L.useState(null), [Z, Ae] = L.useState("Draft synchronized"), [Ue, Al] = L.useState([]), ze = L.useRef(JSON.stringify(f.draft ?? Wi)), Ve = L.useRef(T), we = L.useMemo(
    () => l1(f, String(g.run_id)),
    [f.local_mode, f.user?.id, g.run_id]
  ), [Be, W] = L.useState(
    () => Po(we)
  );
  L.useEffect(() => {
    if (Ve.current !== T) {
      Ve.current = T;
      const z = f.draft ?? Wi;
      V(z), ze.current = JSON.stringify(z), Al([]), Se(null);
    }
  }, [T, f.draft]), L.useEffect(() => {
    W(Po(we));
  }, [we]), L.useEffect(() => {
    (f.notice || f.sync) && Se(null), f.sync?.decision_id === d.id && (ze.current = JSON.stringify(O), Ae("Draft saved"));
  }, [f.notice, f.sync?.saved_at]), L.useEffect(() => {
    const z = JSON.stringify(O);
    if (z === ze.current) return;
    Ae("Unsaved changes");
    const Q = window.setTimeout(() => {
      ze.current = z, Ae("Saving…"), p("save_draft", {
        run_id: g.run_id,
        decision_id: d.id,
        expected_revision: g.revision,
        draft: O
      });
    }, 1200);
    return () => window.clearTimeout(Q);
  }, [O, d.id, p, g.revision, g.run_id]);
  const Re = (g.evidence ?? []).filter(
    (z) => ["available", "verified"].includes(z.state)
  ), We = g.operational_signals ?? [], Cl = Re.filter(
    (z) => z.request_week !== null && z.request_week !== void 0
  ), Fe = new Set(Cl.map((z) => z.id)), pe = We.slice(
    Math.min(Be.signalCount, We.length)
  ), Ke = Cl.filter(
    (z) => !Be.evidenceIds.includes(z.id)
  ), Ie = (g.crises ?? []).find(
    (z) => z.linked_decision === d.id
  ), ul = (g.evidence ?? []).filter((z) => {
    const Q = `${z.id} ${z.title}`.toLowerCase().includes(U.toLowerCase()), o = N === "all" || N === "available" && ["available", "verified"].includes(z.state) || N === "requested" && z.state === "requested" || N === "requestable" && z.state === "requestable";
    return Q && o;
  }).sort(
    (z, Q) => Number(Fe.has(Q.id)) - Number(Fe.has(z.id))
  ), b = (z, Q) => V((o) => ({ ...o, [z]: Q })), D = (z) => {
    M(z), z !== "record" && (z === "evidence" && (K("available"), ne("")), W((Q) => {
      const o = {
        signalCount: z === "signals" ? We.length : Q.signalCount,
        evidenceIds: z === "evidence" ? Array.from(
          /* @__PURE__ */ new Set([
            ...Q.evidenceIds,
            ...Cl.map((A) => A.id)
          ])
        ) : Q.evidenceIds
      };
      return t1(we, o), o;
    }));
  }, X = () => {
    const z = a1(O);
    if (Al(z), z.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    Se("review"), p("review_decision", {
      run_id: g.run_id,
      draft: O
    });
  };
  return /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "cockpit", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "cockpit-topbar", children: [
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => p("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 15 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ u.jsx(f1, { stages: f.stages ?? [], run: g }),
      /* @__PURE__ */ u.jsxs("div", { className: "save-state", children: [
        /* @__PURE__ */ u.jsx(Ms, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: Z }),
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Rev ",
          g.revision
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "decision-titlebar", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
          g.stage?.label,
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
        /* @__PURE__ */ u.jsx("strong", { children: Number(g.progress?.completed ?? 0) + 1 }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "of ",
          g.progress?.total
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "cockpit-grid", children: [
      /* @__PURE__ */ u.jsxs("section", { className: "decision-workspace", children: [
        (pe.length > 0 || Ke.length > 0) && /* @__PURE__ */ u.jsxs("section", { className: "change-strip", "aria-live": "polite", children: [
          /* @__PURE__ */ u.jsx("span", { className: "change-strip-icon", children: /* @__PURE__ */ u.jsx(Iv, { size: 18 }) }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "Changes since your last decision" }),
            /* @__PURE__ */ u.jsx("p", { children: [
              pe.length > 0 ? `${pe.length} new operational ${pe.length === 1 ? "signal" : "signals"}` : null,
              Ke.length > 0 ? `${Ke.length} evidence ${Ke.length === 1 ? "item has" : "items have"} arrived` : null
            ].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "change-strip-actions", children: [
            pe.length > 0 && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => D("signals"), children: [
              "View signals ",
              /* @__PURE__ */ u.jsx(Ts, { size: 15 })
            ] }),
            Ke.length > 0 && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => D("evidence"), children: [
              "View evidence ",
              /* @__PURE__ */ u.jsx(Ts, { size: 15 })
            ] })
          ] })
        ] }),
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
        Ie && /* @__PURE__ */ u.jsxs("article", { className: "crisis-alert", children: [
          /* @__PURE__ */ u.jsx(On, { size: 20 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: Ie.observation })
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
          /* @__PURE__ */ u.jsx("div", { className: "option-list", role: "radiogroup", "aria-label": "Action choices", children: (d.options ?? []).map((z) => /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": O.option_id === z.id,
              className: Bl("option-card", O.option_id === z.id && "selected"),
              onClick: () => b("option_id", z.id),
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "option-letter", children: z.id }),
                /* @__PURE__ */ u.jsx("span", { className: "option-label", children: z.label }),
                /* @__PURE__ */ u.jsx("span", { className: "radio-mark", children: O.option_id === z.id && /* @__PURE__ */ u.jsx(tt, { size: 14 }) })
              ]
            },
            z.id
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
          Ue.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "validation-summary", role: "alert", children: [
            /* @__PURE__ */ u.jsx(Rs, { size: 18 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Complete the record before review" }),
              /* @__PURE__ */ u.jsx("ul", { children: Ue.map((z) => /* @__PURE__ */ u.jsx("li", { children: z }, z)) })
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
                onChange: (z) => b("rationale", z.target.value),
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
                  onChange: (z) => b("owner", z.target.value),
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
                  onChange: (z) => b("acceptance_condition", z.target.value),
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
                  onChange: (z) => b("assumptions", z.target.value),
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
                  onChange: (z) => b("risk", z.target.value),
                  placeholder: "What could invalidate this action?"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("fieldset", { className: "citation-field", children: [
            /* @__PURE__ */ u.jsxs("legend", { children: [
              "Evidence cited ",
              /* @__PURE__ */ u.jsx("small", { children: "Optional. Select only items marked Cite now." })
            ] }),
            Re.length === 0 ? /* @__PURE__ */ u.jsx("p", { children: "No evidence is currently available to cite." }) : /* @__PURE__ */ u.jsx("div", { className: "citation-list", children: Re.map((z) => {
              const Q = O.evidence_refs.includes(z.id);
              return /* @__PURE__ */ u.jsxs("label", { className: Q ? "selected" : "", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: Q,
                    onChange: () => b(
                      "evidence_refs",
                      Q ? O.evidence_refs.filter((o) => o !== z.id) : [...O.evidence_refs, z.id]
                    )
                  }
                ),
                /* @__PURE__ */ u.jsxs("span", { children: [
                  /* @__PURE__ */ u.jsx("strong", { children: z.id }),
                  z.title
                ] })
              ] }, z.id);
            }) })
          ] }),
          d.id === "D20" && O.option_id === "F" && /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
            /* @__PURE__ */ u.jsx("span", { children: "Custom final route" }),
            /* @__PURE__ */ u.jsx(
              "select",
              {
                value: O.terminal_route,
                onChange: (z) => b("terminal_route", z.target.value),
                children: ["conditional_release", "reduced_scope", "extended_pilot", "pause", "full_release"].map((z) => /* @__PURE__ */ u.jsx("option", { value: z, children: z.replaceAll("_", " ").replace(/\b\w/g, (Q) => Q.toUpperCase()) }, z))
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "decision-actions", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(Ms, { size: 15 }),
              /* @__PURE__ */ u.jsx("span", { children: Z })
            ] }),
            /* @__PURE__ */ u.jsxs($e, { busy: de === "review", onClick: X, children: [
              "Review decision ",
              !de && /* @__PURE__ */ u.jsx(Dl, { size: 17 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("aside", { className: "context-panel", children: [
        /* @__PURE__ */ u.jsx("div", { className: "context-tabs", role: "tablist", children: [
          [
            "evidence",
            Ke.length > 0 ? `Evidence · ${Ke.length} arrived` : "Evidence",
            Vv
          ],
          [
            "signals",
            pe.length > 0 ? `Signals · ${pe.length} new` : "Signals",
            Ii
          ],
          ["record", "Record", Kv]
        ].map(([z, Q, o]) => /* @__PURE__ */ u.jsxs(
          "button",
          {
            type: "button",
            className: H === z ? "active" : "",
            role: "tab",
            "aria-selected": H === z,
            onClick: () => D(z),
            children: [
              /* @__PURE__ */ u.jsx(o, { size: 15 }),
              " ",
              /* @__PURE__ */ u.jsx("span", { children: Q })
            ]
          },
          z
        )) }),
        H === "evidence" && /* @__PURE__ */ u.jsxs("div", { className: "context-content evidence-desk", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "credit-card", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(e1, { size: 18 }),
              /* @__PURE__ */ u.jsx("span", { children: "Investigation credits" })
            ] }),
            /* @__PURE__ */ u.jsxs("strong", { children: [
              g.credits?.remaining,
              /* @__PURE__ */ u.jsxs("small", { children: [
                " / ",
                g.credits?.total
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "credit-track", children: /* @__PURE__ */ u.jsx("span", { style: { width: `${g.credits?.remaining / g.credits?.total * 100}%` } }) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "evidence-tools", children: [
            /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx(lu, { size: 15 }),
              /* @__PURE__ */ u.jsx("input", { value: U, onChange: (z) => ne(z.target.value), placeholder: "Search evidence" })
            ] }),
            /* @__PURE__ */ u.jsxs("select", { value: N, onChange: (z) => K(z.target.value), children: [
              /* @__PURE__ */ u.jsx("option", { value: "all", children: "All states" }),
              /* @__PURE__ */ u.jsx("option", { value: "available", children: "Cite now" }),
              /* @__PURE__ */ u.jsx("option", { value: "requested", children: "Due later" }),
              /* @__PURE__ */ u.jsx("option", { value: "requestable", children: "Order for later" })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "evidence-list", children: ul.map((z) => /* @__PURE__ */ u.jsx(
            d1,
            {
              item: z,
              arrived: Fe.has(z.id),
              credits: g.credits?.remaining,
              busy: de === `evidence:${z.id}`,
              onRequest: () => {
                Se(`evidence:${z.id}`), p("request_evidence", {
                  run_id: g.run_id,
                  evidence_id: z.id,
                  expected_revision: g.revision,
                  draft: O
                });
              }
            },
            z.id
          )) })
        ] }),
        H === "signals" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Operational view" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Observable signals" })
          ] }),
          (g.operational_signals ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Os, { children: "No consequence signals have been observed yet." }) : /* @__PURE__ */ u.jsx("div", { className: "signal-list", children: (g.operational_signals ?? []).slice(-8).reverse().map((z, Q) => /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx(Ii, { size: 15 }),
            /* @__PURE__ */ u.jsx("p", { children: z })
          ] }, `${z}-${Q}`)) }),
          Ie && /* @__PURE__ */ u.jsxs("div", { className: "context-crisis", children: [
            /* @__PURE__ */ u.jsx(On, { size: 16 }),
            /* @__PURE__ */ u.jsx("p", { children: Ie.observation })
          ] })
        ] }),
        H === "record" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Immutable ledger" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Committed record" })
          ] }),
          (g.history ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Os, { children: "Committed decisions will appear here." }) : /* @__PURE__ */ u.jsx("div", { className: "history-list", children: [...g.history ?? []].reverse().map((z) => /* @__PURE__ */ u.jsxs("details", { children: [
            /* @__PURE__ */ u.jsxs("summary", { children: [
              /* @__PURE__ */ u.jsx("span", { children: z.decision_id }),
              /* @__PURE__ */ u.jsx("strong", { children: z.title }),
              /* @__PURE__ */ u.jsx(Dn, { size: 15 })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("small", { children: "Committed action" }),
              /* @__PURE__ */ u.jsx("p", { children: z.choice_label }),
              /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
              /* @__PURE__ */ u.jsx("p", { children: z.rationale })
            ] })
          ] }, z.decision_id)) }),
          /* @__PURE__ */ u.jsxs("div", { className: "ledger-chip", children: [
            /* @__PURE__ */ u.jsx(eu, { size: 14 }),
            " ",
            g.ledger?.entries,
            " ledger entries"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function d1({
  item: f,
  arrived: p,
  credits: g,
  busy: d,
  onRequest: T
}) {
  const [O, V] = L.useState(["available", "verified"].includes(f.state)), H = {
    available: "Cite now",
    verified: "Cite now",
    requested: f.arrival_week !== null && f.arrival_week !== void 0 ? `Due Week ${f.arrival_week}` : "Due later",
    requestable: "Order for later",
    unavailable: "Window closed"
  }, M = f.state === "requestable" && g >= f.cost;
  return /* @__PURE__ */ u.jsxs("article", { className: Bl("evidence-item", `evidence-${f.state}`, p && "evidence-arrived"), children: [
    /* @__PURE__ */ u.jsxs("button", { className: "evidence-summary", type: "button", onClick: () => V((N) => !N), children: [
      /* @__PURE__ */ u.jsx("span", { className: "evidence-state-icon", children: ["available", "verified"].includes(f.state) ? /* @__PURE__ */ u.jsx(tt, { size: 14 }) : f.state === "requested" ? /* @__PURE__ */ u.jsx(Fi, { size: 14 }) : /* @__PURE__ */ u.jsx(Bs, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("small", { children: f.id }),
        /* @__PURE__ */ u.jsx("strong", { children: f.title })
      ] }),
      /* @__PURE__ */ u.jsx("span", { className: "evidence-status", children: H[f.state] ?? f.state }),
      /* @__PURE__ */ u.jsx(Dn, { size: 15, className: O ? "rotated" : "" })
    ] }),
    O && /* @__PURE__ */ u.jsxs("div", { className: "evidence-detail", children: [
      f.reveal ? /* @__PURE__ */ u.jsx("p", { children: f.reveal }) : f.state === "requested" ? /* @__PURE__ */ u.jsxs("p", { children: [
        "Ordered in Week ",
        f.request_week,
        ". It becomes citable in Week ",
        f.arrival_week,
        "."
      ] }) : /* @__PURE__ */ u.jsx("p", { children: "Order this finding now. Its contents remain sealed until the due week." }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { children: f.cost === 0 ? "Included" : `${f.cost} credit` }),
        p ? /* @__PURE__ */ u.jsxs("span", { children: [
          "Arrived Week ",
          f.arrival_week
        ] }) : /* @__PURE__ */ u.jsxs("span", { children: [
          f.lead_time_weeks,
          " week lead"
        ] })
      ] }),
      M && /* @__PURE__ */ u.jsxs($e, { variant: "secondary", className: "button-full", busy: d, onClick: T, children: [
        "Order for later ",
        !d && /* @__PURE__ */ u.jsx(Dl, { size: 15 })
      ] }),
      f.state === "requestable" && !M && /* @__PURE__ */ u.jsx("small", { className: "insufficient-credit", children: "Insufficient investigation credits" })
    ] })
  ] });
}
function o1({ data: f, emit: p }) {
  const g = f.run ?? {}, d = g.current_decision ?? {}, T = f.draft ?? Wi, O = (d.options ?? []).find((U) => U.id === T.option_id), V = (g.evidence ?? []).filter((U) => T.evidence_refs.includes(U.id)), [H, M] = L.useState(!1), [N, K] = L.useState(!1);
  return L.useEffect(() => K(!1), [f.notice, f.screen]), /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "review-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => p("navigate", { view: "decision", run_id: g.run_id }),
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
          /* @__PURE__ */ u.jsx("p", { children: T.rationale })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Accountable owner" }),
          /* @__PURE__ */ u.jsx("p", { children: T.owner })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Critical assumption" }),
          /* @__PURE__ */ u.jsx("p", { children: T.assumptions })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Acceptance or stop condition" }),
          /* @__PURE__ */ u.jsx("p", { children: T.acceptance_condition })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Material risk" }),
          /* @__PURE__ */ u.jsx("p", { children: T.risk })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { className: "review-wide", children: [
          /* @__PURE__ */ u.jsx("small", { children: "Evidence cited" }),
          V.length ? /* @__PURE__ */ u.jsx("div", { className: "review-evidence", children: V.map((U) => /* @__PURE__ */ u.jsxs("span", { children: [
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
      /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => p("navigate", { view: "decision", run_id: g.run_id }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
        " Back to edit"
      ] }),
      /* @__PURE__ */ u.jsxs(
        $e,
        {
          disabled: !H,
          busy: N,
          onClick: () => {
            K(!0), p("commit_decision", { run_id: g.run_id, confirmed: !0 });
          },
          children: [
            /* @__PURE__ */ u.jsx(eu, { size: 16 }),
            " Commit permanently"
          ]
        }
      )
    ] })
  ] }) });
}
function h1({ data: f, emit: p }) {
  const g = f.consequence ?? {}, d = f.run ?? {}, [T, O] = L.useState(!1);
  L.useEffect(() => O(!1), [f.notice, f.screen]);
  const V = (g.signals ?? []).length || (g.crises ?? []).length || (g.evidence_arrived ?? []).length;
  return /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "consequence-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "commit-success", children: [
      /* @__PURE__ */ u.jsx("span", { className: "success-ring", children: /* @__PURE__ */ u.jsx(tt, { size: 28 }) }),
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Decision recorded" }),
      /* @__PURE__ */ u.jsxs("h1", { children: [
        g.decision_id,
        " is now permanent."
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: g.choice }),
      /* @__PURE__ */ u.jsxs("div", { className: "ledger-confirmation", children: [
        /* @__PURE__ */ u.jsx(eu, { size: 14 }),
        " Added to immutable run ledger · revision ",
        d.revision
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "observable-panel", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
        /* @__PURE__ */ u.jsx("span", { className: "step-number", children: /* @__PURE__ */ u.jsx(Hs, { size: 16 }) }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("h2", { children: "Observable consequence" }),
          /* @__PURE__ */ u.jsx("p", { children: "Only legitimate operational signals are shown during a first attempt." })
        ] })
      ] }),
      !V && /* @__PURE__ */ u.jsxs("article", { className: "neutral-observation", children: [
        /* @__PURE__ */ u.jsx(Pi, { size: 18 }),
        /* @__PURE__ */ u.jsx("p", { children: "No new operational signal was observable at this boundary." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "observation-list", children: [
        (g.signals ?? []).map((H, M) => /* @__PURE__ */ u.jsxs("article", { className: "observation signal-observation", children: [
          /* @__PURE__ */ u.jsx(Ii, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "New signal" }),
            /* @__PURE__ */ u.jsx("p", { children: H })
          ] })
        ] }, `${H}-${M}`)),
        (g.crises ?? []).map((H) => /* @__PURE__ */ u.jsxs("article", { className: "observation crisis-observation", children: [
          /* @__PURE__ */ u.jsx(On, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: H.observation })
          ] })
        ] }, H.id)),
        (g.evidence_arrived ?? []).map((H) => /* @__PURE__ */ u.jsxs("article", { className: "observation evidence-observation", children: [
          /* @__PURE__ */ u.jsx(qs, { size: 18 }),
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
      $e,
      {
        className: "button-full consequence-next",
        busy: T,
        onClick: () => {
          O(!0), p("continue_consequence", { run_id: d.run_id });
        },
        children: [
          g.completed ? "Open executive debrief" : `Continue to ${g.next_decision}`,
          !T && /* @__PURE__ */ u.jsx(Dl, { size: 17 })
        ]
      }
    )
  ] }) });
}
function m1({ data: f, emit: p }) {
  const g = f.report ?? {}, d = f.run ?? {}, [T, O] = L.useState("summary"), V = (g.gates ?? []).filter((H) => H.status === "fail");
  return /* @__PURE__ */ u.jsx(Da, { data: f, emit: p, children: /* @__PURE__ */ u.jsxs("main", { className: "debrief-page", children: [
    /* @__PURE__ */ u.jsx("section", { className: "debrief-hero", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width debrief-hero-inner", children: [
      /* @__PURE__ */ u.jsxs("button", { className: "text-back text-back-light", type: "button", onClick: () => p("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ u.jsx(Mn, { size: 16 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-heading-grid", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Executive debrief" }),
          /* @__PURE__ */ u.jsx("h1", { children: g.recommendation }),
          /* @__PURE__ */ u.jsx("p", { children: g.scope_assessed })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "score-lockup", children: [
          /* @__PURE__ */ u.jsx("strong", { children: g.reported_overall }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Provisional score" }),
            /* @__PURE__ */ u.jsx("b", { children: g.provisional_label })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-facts", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Release decision" }),
          /* @__PURE__ */ u.jsx("strong", { className: g.release_valid ? "positive" : "negative", children: g.release_valid ? "Valid" : "Invalid" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Critical gates failed" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            V.length,
            " / ",
            (g.gates ?? []).length
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Decisions recorded" }),
          /* @__PURE__ */ u.jsx("strong", { children: (g.timeline ?? []).length })
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
    ].map(([H, M]) => /* @__PURE__ */ u.jsx("button", { className: T === H ? "active" : "", type: "button", onClick: () => O(H), children: M }, H)) }) }),
    /* @__PURE__ */ u.jsxs("section", { className: "debrief-content page-width", children: [
      T === "summary" && /* @__PURE__ */ u.jsx(v1, { report: g }),
      T === "gates" && /* @__PURE__ */ u.jsx(y1, { gates: g.gates ?? [] }),
      T === "scorecard" && /* @__PURE__ */ u.jsx(g1, { dimensions: g.dimensions ?? [] }),
      T === "timeline" && /* @__PURE__ */ u.jsx(x1, { timeline: g.timeline ?? [] })
    ] }),
    /* @__PURE__ */ u.jsx("section", { className: "export-band", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width export-inner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Portable evidence" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Take the complete record with you." }),
        /* @__PURE__ */ u.jsx("p", { children: "Download the executive report or the replay-verifiable completed run." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => eh(`${d.run_id}-debrief.json`, g), children: [
          /* @__PURE__ */ u.jsx(wv, { size: 16 }),
          " Evidence pack"
        ] }),
        /* @__PURE__ */ u.jsxs(
          $e,
          {
            disabled: !f.completed_run_document,
            onClick: () => eh(`${d.run_id}.json`, f.completed_run_document),
            children: [
              /* @__PURE__ */ u.jsx(Bs, { size: 16 }),
              " Completed run"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs("div", { className: "page-width calibration-notice", children: [
      /* @__PURE__ */ u.jsx(Pi, { size: 17 }),
      /* @__PURE__ */ u.jsx("p", { children: g.notice })
    ] })
  ] }) });
}
function v1({ report: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "summary-view", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "judgment-columns", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ u.jsx(Us, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Strongest evidence" }),
            /* @__PURE__ */ u.jsx("h2", { children: "Judgments that held" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (f.strengths ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { className: "strength-card", children: [
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
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (f.development_needs ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { className: "priority-card", children: [
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
        /* @__PURE__ */ u.jsx(Ys, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Executive perspectives" }),
          /* @__PURE__ */ u.jsx("h2", { children: "How the decision reads upstairs" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "perspective-grid", children: (f.perspectives ?? []).map((p) => /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: p.role }),
          /* @__PURE__ */ u.jsx("strong", { children: p.score })
        ] }),
        /* @__PURE__ */ u.jsx("p", { children: p.view })
      ] }, p.role)) })
    ] })
  ] });
}
function y1({ gates: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "gate-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Non-compensable controls" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Critical gates" }),
      /* @__PURE__ */ u.jsx("p", { children: "A failed critical gate cannot be offset by strength elsewhere." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "gate-grid", children: f.map((p) => /* @__PURE__ */ u.jsxs("article", { className: Bl("gate-card", p.status === "pass" ? "gate-pass" : "gate-fail"), children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { children: [
          p.status === "pass" ? /* @__PURE__ */ u.jsx(Us, { size: 18 }) : /* @__PURE__ */ u.jsx(Rs, { size: 18 }),
          p.status.toUpperCase()
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: p.gate_id })
      ] }),
      /* @__PURE__ */ u.jsx("h3", { children: p.name }),
      /* @__PURE__ */ u.jsx("p", { children: p.reason })
    ] }, p.gate_id)) })
  ] });
}
function g1({ dimensions: f }) {
  const [p, g] = L.useState(f[0]?.id ?? null);
  return /* @__PURE__ */ u.jsxs("div", { className: "scorecard-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Seven dimensions · 28 criteria" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Competency scorecard" }),
      /* @__PURE__ */ u.jsx("p", { children: "Scores reflect recorded actions, chronology, controls and evidence citations." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "dimension-list", children: f.map((d) => /* @__PURE__ */ u.jsxs("article", { className: "dimension-card", children: [
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => g(p === d.id ? null : d.id), children: [
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
        (d.criteria ?? []).map((T) => /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: T.id }),
            /* @__PURE__ */ u.jsx("span", { children: T.name })
          ] }),
          /* @__PURE__ */ u.jsx("strong", { children: T.score }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("p", { children: T.reason }),
            /* @__PURE__ */ u.jsx("small", { children: T.stronger_evidence })
          ] })
        ] }, T.id))
      ] })
    ] }, d.id)) })
  ] });
}
function x1({ timeline: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "timeline-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Chronological evidence" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Decision timeline" }),
      /* @__PURE__ */ u.jsx("p", { children: "The first-attempt record exactly as it was committed." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "timeline-list", children: f.map((p) => /* @__PURE__ */ u.jsxs("details", { children: [
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
function p1({ data: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "fatal-page", children: [
    /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
    /* @__PURE__ */ u.jsx(On, { size: 30 }),
    /* @__PURE__ */ u.jsx("h1", { children: f.fatal?.title ?? "The Arena could not start" }),
    /* @__PURE__ */ u.jsx("p", { children: f.fatal?.message }),
    /* @__PURE__ */ u.jsxs("a", { className: "button button-primary", href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
      "Open repository ",
      /* @__PURE__ */ u.jsx(ah, { size: 16 })
    ] })
  ] });
}
function j1({ data: f, emit: p }) {
  const g = f.screen, d = `${g}:${f.run?.run_id ?? ""}:${f.run?.current_decision?.id ?? ""}`;
  return L.useEffect(() => {
    const T = document.querySelector(
      '[data-testid="stMain"]'
    );
    T && (T.scrollTop = 0), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
  }, [d]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    g === "marketing" && /* @__PURE__ */ u.jsx(u1, { data: f, emit: p }),
    g === "centre" && /* @__PURE__ */ u.jsx(c1, { data: f, emit: p }),
    g === "briefing" && /* @__PURE__ */ u.jsx(s1, { data: f, emit: p }),
    g === "decision" && /* @__PURE__ */ u.jsx(r1, { data: f, emit: p }),
    g === "review" && /* @__PURE__ */ u.jsx(o1, { data: f, emit: p }),
    g === "consequence" && /* @__PURE__ */ u.jsx(h1, { data: f, emit: p }),
    g === "debrief" && /* @__PURE__ */ u.jsx(m1, { data: f, emit: p }),
    g === "fatal" && /* @__PURE__ */ u.jsx(p1, { data: f }),
    /* @__PURE__ */ u.jsx(n1, { notice: f.notice })
  ] });
}
const lh = /* @__PURE__ */ new WeakMap(), b1 = (f) => {
  const { data: p, parentElement: g, setTriggerValue: d } = f, T = g.querySelector(".arena-react-root");
  if (!T)
    throw new Error("AI Delivery Arena React root was not found.");
  let O = lh.get(g);
  O || (O = Xv.createRoot(T), lh.set(g, O)), O.render(
    /* @__PURE__ */ u.jsx(L.StrictMode, { children: /* @__PURE__ */ u.jsx(
      j1,
      {
        data: p,
        emit: (V, H = {}) => {
          d("event", { type: V, payload: H });
        }
      }
    ) })
  );
};
export {
  b1 as default
};
