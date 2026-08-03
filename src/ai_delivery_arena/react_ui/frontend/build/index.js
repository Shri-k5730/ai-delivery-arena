var Ss = { exports: {} }, Mn = {};
var Vo;
function qv() {
  if (Vo) return Mn;
  Vo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, N, M) {
    var Q = null;
    if (M !== void 0 && (Q = "" + M), N.key !== void 0 && (Q = "" + N.key), "key" in N) {
      M = {};
      for (var C in N)
        C !== "key" && (M[C] = N[C]);
    } else M = N;
    return N = M.ref, {
      $$typeof: f,
      type: r,
      key: Q,
      ref: N !== void 0 ? N : null,
      props: M
    };
  }
  return Mn.Fragment = x, Mn.jsx = o, Mn.jsxs = o, Mn;
}
var Ko;
function Hv() {
  return Ko || (Ko = 1, Ss.exports = qv()), Ss.exports;
}
var i = Hv(), zs = { exports: {} }, J = {};
var Jo;
function Bv() {
  if (Jo) return J;
  Jo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), Z = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), ce = Symbol.iterator;
  function ye(h) {
    return h === null || typeof h != "object" ? null : (h = ce && h[ce] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var De = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, _e = {};
  function Re(h, E, U) {
    this.props = h, this.context = E, this.refs = _e, this.updater = U || De;
  }
  Re.prototype.isReactComponent = {}, Re.prototype.setState = function(h, E) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, E, "setState");
  }, Re.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function Be() {
  }
  Be.prototype = Re.prototype;
  function Ce(h, E, U) {
    this.props = h, this.context = E, this.refs = _e, this.updater = U || De;
  }
  var Ke = Ce.prototype = new Be();
  Ke.constructor = Ce, X(Ke, Re.prototype), Ke.isPureReactComponent = !0;
  var yl = Array.isArray;
  function Le() {
  }
  var W = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function al(h, E, U) {
    var H = U.ref;
    return {
      $$typeof: f,
      type: h,
      key: E,
      ref: H !== void 0 ? H : null,
      props: U
    };
  }
  function El(h, E) {
    return al(h.type, E, h.props);
  }
  function nl(h) {
    return typeof h == "object" && h !== null && h.$$typeof === f;
  }
  function Ye(h) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(U) {
      return E[U];
    });
  }
  var Tl = /\/+/g;
  function il(h, E) {
    return typeof h == "object" && h !== null && h.key != null ? Ye("" + h.key) : E.toString(36);
  }
  function Je(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Le, Le) : (h.status = "pending", h.then(
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
  function z(h, E, U, H, K) {
    var F = typeof h;
    (F === "undefined" || F === "boolean") && (h = null);
    var j = !1;
    if (h === null) j = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case x:
              j = !0;
              break;
            case Z:
              return j = h._init, z(
                j(h._payload),
                E,
                U,
                H,
                K
              );
          }
      }
    if (j)
      return K = K(h), j = H === "" ? "." + il(h, 0) : H, yl(K) ? (U = "", j != null && (U = j.replace(Tl, "$&/") + "/"), z(K, E, U, "", function(Ot) {
        return Ot;
      })) : K != null && (nl(K) && (K = El(
        K,
        U + (K.key == null || h && h.key === K.key ? "" : ("" + K.key).replace(
          Tl,
          "$&/"
        ) + "/") + j
      )), E.push(K)), 1;
    j = 0;
    var V = H === "" ? "." : H + ":";
    if (yl(h))
      for (var I = 0; I < h.length; I++)
        H = h[I], F = V + il(H, I), j += z(
          H,
          E,
          U,
          F,
          K
        );
    else if (I = ye(h), typeof I == "function")
      for (h = I.call(h), I = 0; !(H = h.next()).done; )
        H = H.value, F = V + il(H, I++), j += z(
          H,
          E,
          U,
          F,
          K
        );
    else if (F === "object") {
      if (typeof h.then == "function")
        return z(
          Je(h),
          E,
          U,
          H,
          K
        );
      throw E = String(h), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function D(h, E, U) {
    if (h == null) return h;
    var H = [], K = 0;
    return z(h, H, "", "", function(F) {
      return E.call(U, F, K++);
    }), H;
  }
  function Y(h) {
    if (h._status === -1) {
      var E = h._result;
      E = E(), E.then(
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = U);
        },
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = U);
        }
      ), h._status === -1 && (h._status = 0, h._result = E);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ie = typeof reportError == "function" ? reportError : function(h) {
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
  }, re = {
    map: D,
    forEach: function(h, E, U) {
      D(
        h,
        function() {
          E.apply(this, arguments);
        },
        U
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
      if (!nl(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return J.Activity = R, J.Children = re, J.Component = Re, J.Fragment = o, J.Profiler = N, J.PureComponent = Ce, J.StrictMode = r, J.Suspense = O, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return W.H.useMemoCache(h);
    }
  }, J.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(h, E, U) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var H = X({}, h.props), K = h.key;
    if (E != null)
      for (F in E.key !== void 0 && (K = "" + E.key), E)
        !be.call(E, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && E.ref === void 0 || (H[F] = E[F]);
    var F = arguments.length - 2;
    if (F === 1) H.children = U;
    else if (1 < F) {
      for (var j = Array(F), V = 0; V < F; V++)
        j[V] = arguments[V + 2];
      H.children = j;
    }
    return al(h.type, K, H);
  }, J.createContext = function(h) {
    return h = {
      $$typeof: Q,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: M,
      _context: h
    }, h;
  }, J.createElement = function(h, E, U) {
    var H, K = {}, F = null;
    if (E != null)
      for (H in E.key !== void 0 && (F = "" + E.key), E)
        be.call(E, H) && H !== "key" && H !== "__self" && H !== "__source" && (K[H] = E[H]);
    var j = arguments.length - 2;
    if (j === 1) K.children = U;
    else if (1 < j) {
      for (var V = Array(j), I = 0; I < j; I++)
        V[I] = arguments[I + 2];
      K.children = V;
    }
    if (h && h.defaultProps)
      for (H in j = h.defaultProps, j)
        K[H] === void 0 && (K[H] = j[H]);
    return al(h, F, K);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(h) {
    return { $$typeof: C, render: h };
  }, J.isValidElement = nl, J.lazy = function(h) {
    return {
      $$typeof: Z,
      _payload: { _status: -1, _result: h },
      _init: Y
    };
  }, J.memo = function(h, E) {
    return {
      $$typeof: S,
      type: h,
      compare: E === void 0 ? null : E
    };
  }, J.startTransition = function(h) {
    var E = W.T, U = {};
    W.T = U;
    try {
      var H = h(), K = W.S;
      K !== null && K(U, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Le, ie);
    } catch (F) {
      ie(F);
    } finally {
      E !== null && U.types !== null && (E.types = U.types), W.T = E;
    }
  }, J.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, J.use = function(h) {
    return W.H.use(h);
  }, J.useActionState = function(h, E, U) {
    return W.H.useActionState(h, E, U);
  }, J.useCallback = function(h, E) {
    return W.H.useCallback(h, E);
  }, J.useContext = function(h) {
    return W.H.useContext(h);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(h, E) {
    return W.H.useDeferredValue(h, E);
  }, J.useEffect = function(h, E) {
    return W.H.useEffect(h, E);
  }, J.useEffectEvent = function(h) {
    return W.H.useEffectEvent(h);
  }, J.useId = function() {
    return W.H.useId();
  }, J.useImperativeHandle = function(h, E, U) {
    return W.H.useImperativeHandle(h, E, U);
  }, J.useInsertionEffect = function(h, E) {
    return W.H.useInsertionEffect(h, E);
  }, J.useLayoutEffect = function(h, E) {
    return W.H.useLayoutEffect(h, E);
  }, J.useMemo = function(h, E) {
    return W.H.useMemo(h, E);
  }, J.useOptimistic = function(h, E) {
    return W.H.useOptimistic(h, E);
  }, J.useReducer = function(h, E, U) {
    return W.H.useReducer(h, E, U);
  }, J.useRef = function(h) {
    return W.H.useRef(h);
  }, J.useState = function(h) {
    return W.H.useState(h);
  }, J.useSyncExternalStore = function(h, E, U) {
    return W.H.useSyncExternalStore(
      h,
      E,
      U
    );
  }, J.useTransition = function() {
    return W.H.useTransition();
  }, J.version = "19.2.8", J;
}
var ko;
function Cs() {
  return ko || (ko = 1, zs.exports = Bv()), zs.exports;
}
var L = Cs(), _s = { exports: {} }, On = {}, Ns = { exports: {} }, As = {};
var $o;
function Yv() {
  return $o || ($o = 1, (function(f) {
    function x(z, D) {
      var Y = z.length;
      z.push(D);
      e: for (; 0 < Y; ) {
        var ie = Y - 1 >>> 1, re = z[ie];
        if (0 < N(re, D))
          z[ie] = D, z[Y] = re, Y = ie;
        else break e;
      }
    }
    function o(z) {
      return z.length === 0 ? null : z[0];
    }
    function r(z) {
      if (z.length === 0) return null;
      var D = z[0], Y = z.pop();
      if (Y !== D) {
        z[0] = Y;
        e: for (var ie = 0, re = z.length, h = re >>> 1; ie < h; ) {
          var E = 2 * (ie + 1) - 1, U = z[E], H = E + 1, K = z[H];
          if (0 > N(U, Y))
            H < re && 0 > N(K, U) ? (z[ie] = K, z[H] = Y, ie = H) : (z[ie] = U, z[E] = Y, ie = E);
          else if (H < re && 0 > N(K, Y))
            z[ie] = K, z[H] = Y, ie = H;
          else break e;
        }
      }
      return D;
    }
    function N(z, D) {
      var Y = z.sortIndex - D.sortIndex;
      return Y !== 0 ? Y : z.id - D.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      f.unstable_now = function() {
        return M.now();
      };
    } else {
      var Q = Date, C = Q.now();
      f.unstable_now = function() {
        return Q.now() - C;
      };
    }
    var O = [], S = [], Z = 1, R = null, ce = 3, ye = !1, De = !1, X = !1, _e = !1, Re = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
    function Ke(z) {
      for (var D = o(S); D !== null; ) {
        if (D.callback === null) r(S);
        else if (D.startTime <= z)
          r(S), D.sortIndex = D.expirationTime, x(O, D);
        else break;
        D = o(S);
      }
    }
    function yl(z) {
      if (X = !1, Ke(z), !De)
        if (o(O) !== null)
          De = !0, Le || (Le = !0, Ye());
        else {
          var D = o(S);
          D !== null && Je(yl, D.startTime - z);
        }
    }
    var Le = !1, W = -1, be = 5, al = -1;
    function El() {
      return _e ? !0 : !(f.unstable_now() - al < be);
    }
    function nl() {
      if (_e = !1, Le) {
        var z = f.unstable_now();
        al = z;
        var D = !0;
        try {
          e: {
            De = !1, X && (X = !1, Be(W), W = -1), ye = !0;
            var Y = ce;
            try {
              l: {
                for (Ke(z), R = o(O); R !== null && !(R.expirationTime > z && El()); ) {
                  var ie = R.callback;
                  if (typeof ie == "function") {
                    R.callback = null, ce = R.priorityLevel;
                    var re = ie(
                      R.expirationTime <= z
                    );
                    if (z = f.unstable_now(), typeof re == "function") {
                      R.callback = re, Ke(z), D = !0;
                      break l;
                    }
                    R === o(O) && r(O), Ke(z);
                  } else r(O);
                  R = o(O);
                }
                if (R !== null) D = !0;
                else {
                  var h = o(S);
                  h !== null && Je(
                    yl,
                    h.startTime - z
                  ), D = !1;
                }
              }
              break e;
            } finally {
              R = null, ce = Y, ye = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Ye() : Le = !1;
        }
      }
    }
    var Ye;
    if (typeof Ce == "function")
      Ye = function() {
        Ce(nl);
      };
    else if (typeof MessageChannel < "u") {
      var Tl = new MessageChannel(), il = Tl.port2;
      Tl.port1.onmessage = nl, Ye = function() {
        il.postMessage(null);
      };
    } else
      Ye = function() {
        Re(nl, 0);
      };
    function Je(z, D) {
      W = Re(function() {
        z(f.unstable_now());
      }, D);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, f.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : be = 0 < z ? Math.floor(1e3 / z) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, f.unstable_next = function(z) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = ce;
      }
      var Y = ce;
      ce = D;
      try {
        return z();
      } finally {
        ce = Y;
      }
    }, f.unstable_requestPaint = function() {
      _e = !0;
    }, f.unstable_runWithPriority = function(z, D) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Y = ce;
      ce = z;
      try {
        return D();
      } finally {
        ce = Y;
      }
    }, f.unstable_scheduleCallback = function(z, D, Y) {
      var ie = f.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? ie + Y : ie) : Y = ie, z) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = Y + re, z = {
        id: Z++,
        callback: D,
        priorityLevel: z,
        startTime: Y,
        expirationTime: re,
        sortIndex: -1
      }, Y > ie ? (z.sortIndex = Y, x(S, z), o(O) === null && z === o(S) && (X ? (Be(W), W = -1) : X = !0, Je(yl, Y - ie))) : (z.sortIndex = re, x(O, z), De || ye || (De = !0, Le || (Le = !0, Ye()))), z;
    }, f.unstable_shouldYield = El, f.unstable_wrapCallback = function(z) {
      var D = ce;
      return function() {
        var Y = ce;
        ce = D;
        try {
          return z.apply(this, arguments);
        } finally {
          ce = Y;
        }
      };
    };
  })(As)), As;
}
var Wo;
function Gv() {
  return Wo || (Wo = 1, Ns.exports = Yv()), Ns.exports;
}
var Es = { exports: {} }, Ve = {};
var Fo;
function Xv() {
  if (Fo) return Ve;
  Fo = 1;
  var f = Cs();
  function x(O) {
    var S = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Z = 2; Z < arguments.length; Z++)
        S += "&args[]=" + encodeURIComponent(arguments[Z]);
    }
    return "Minified React error #" + O + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(x(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, N = /* @__PURE__ */ Symbol.for("react.portal");
  function M(O, S, Z) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: R == null ? null : "" + R,
      children: O,
      containerInfo: S,
      implementation: Z
    };
  }
  var Q = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(O, S) {
    if (O === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ve.createPortal = function(O, S) {
    var Z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(x(299));
    return M(O, S, null, Z);
  }, Ve.flushSync = function(O) {
    var S = Q.T, Z = r.p;
    try {
      if (Q.T = null, r.p = 2, O) return O();
    } finally {
      Q.T = S, r.p = Z, r.d.f();
    }
  }, Ve.preconnect = function(O, S) {
    typeof O == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(O, S));
  }, Ve.prefetchDNS = function(O) {
    typeof O == "string" && r.d.D(O);
  }, Ve.preinit = function(O, S) {
    if (typeof O == "string" && S && typeof S.as == "string") {
      var Z = S.as, R = C(Z, S.crossOrigin), ce = typeof S.integrity == "string" ? S.integrity : void 0, ye = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      Z === "style" ? r.d.S(
        O,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: R,
          integrity: ce,
          fetchPriority: ye
        }
      ) : Z === "script" && r.d.X(O, {
        crossOrigin: R,
        integrity: ce,
        fetchPriority: ye,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Ve.preinitModule = function(O, S) {
    if (typeof O == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var Z = C(
            S.as,
            S.crossOrigin
          );
          r.d.M(O, {
            crossOrigin: Z,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && r.d.M(O);
  }, Ve.preload = function(O, S) {
    if (typeof O == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var Z = S.as, R = C(Z, S.crossOrigin);
      r.d.L(O, Z, {
        crossOrigin: R,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Ve.preloadModule = function(O, S) {
    if (typeof O == "string")
      if (S) {
        var Z = C(S.as, S.crossOrigin);
        r.d.m(O, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: Z,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else r.d.m(O);
  }, Ve.requestFormReset = function(O) {
    r.d.r(O);
  }, Ve.unstable_batchedUpdates = function(O, S) {
    return O(S);
  }, Ve.useFormState = function(O, S, Z) {
    return Q.H.useFormState(O, S, Z);
  }, Ve.useFormStatus = function() {
    return Q.H.useHostTransitionStatus();
  }, Ve.version = "19.2.8", Ve;
}
var Io;
function wv() {
  if (Io) return Es.exports;
  Io = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), Es.exports = Xv(), Es.exports;
}
var Po;
function Qv() {
  if (Po) return On;
  Po = 1;
  var f = Gv(), x = Cs(), o = wv();
  function r(e) {
    var l = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function M(e) {
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
  function Q(e) {
    if (e.tag === 13) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (M(e) !== e)
      throw Error(r(188));
  }
  function S(e) {
    var l = e.alternate;
    if (!l) {
      if (l = M(e), l === null) throw Error(r(188));
      return l !== e ? null : e;
    }
    for (var t = e, a = l; ; ) {
      var n = t.return;
      if (n === null) break;
      var c = n.alternate;
      if (c === null) {
        if (a = n.return, a !== null) {
          t = a;
          continue;
        }
        break;
      }
      if (n.child === c.child) {
        for (c = n.child; c; ) {
          if (c === t) return O(n), e;
          if (c === a) return O(n), l;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (t.return !== a.return) t = n, a = c;
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === t) {
            u = !0, t = n, a = c;
            break;
          }
          if (s === a) {
            u = !0, a = n, t = c;
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = c.child; s; ) {
            if (s === t) {
              u = !0, t = c, a = n;
              break;
            }
            if (s === a) {
              u = !0, a = c, t = n;
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (t.alternate !== a) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? e : l;
  }
  function Z(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = Z(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, ce = /* @__PURE__ */ Symbol.for("react.element"), ye = /* @__PURE__ */ Symbol.for("react.transitional.element"), De = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), _e = /* @__PURE__ */ Symbol.for("react.strict_mode"), Re = /* @__PURE__ */ Symbol.for("react.profiler"), Be = /* @__PURE__ */ Symbol.for("react.consumer"), Ce = /* @__PURE__ */ Symbol.for("react.context"), Ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), yl = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), al = /* @__PURE__ */ Symbol.for("react.activity"), El = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), nl = Symbol.iterator;
  function Ye(e) {
    return e === null || typeof e != "object" ? null : (e = nl && e[nl] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Tl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function il(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Tl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case Re:
        return "Profiler";
      case _e:
        return "StrictMode";
      case yl:
        return "Suspense";
      case Le:
        return "SuspenseList";
      case al:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case De:
          return "Portal";
        case Ce:
          return e.displayName || "Context";
        case Be:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ke:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case W:
          return l = e.displayName || null, l !== null ? l : il(e.type) || "Memo";
        case be:
          l = e._payload, e = e._init;
          try {
            return il(e(l));
          } catch {
          }
      }
    return null;
  }
  var Je = Array.isArray, z = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], re = -1;
  function h(e) {
    return { current: e };
  }
  function E(e) {
    0 > re || (e.current = ie[re], ie[re] = null, re--);
  }
  function U(e, l) {
    re++, ie[re] = e.current, e.current = l;
  }
  var H = h(null), K = h(null), F = h(null), j = h(null);
  function V(e, l) {
    switch (U(F, l), U(K, e), U(H, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? mo(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = mo(l), e = vo(l, e);
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
    E(H), U(H, e);
  }
  function I() {
    E(H), E(K), E(F);
  }
  function Ot(e) {
    e.memoizedState !== null && U(j, e);
    var l = H.current, t = vo(l, e.type);
    l !== t && (U(K, e), U(H, t));
  }
  function qn(e) {
    K.current === e && (E(H), E(K)), j.current === e && (E(j), Nn._currentValue = Y);
  }
  var nc, Qs;
  function Dt(e) {
    if (nc === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        nc = l && l[1] || "", Qs = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + nc + e + Qs;
  }
  var ic = !1;
  function cc(e, l) {
    if (!e || ic) return "";
    ic = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (b) {
                  var g = b;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (b) {
                  g = b;
                }
                e.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                g = b;
              }
              (T = e()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (b) {
            if (b && g && typeof b.stack == "string")
              return [b.stack, g.stack];
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
      var c = a.DetermineComponentFrameRoot(), u = c[0], s = c[1];
      if (u && s) {
        var d = u.split(`
`), p = s.split(`
`);
        for (n = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < p.length && !p[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === d.length || n === p.length)
          for (a = d.length - 1, n = p.length - 1; 1 <= a && 0 <= n && d[a] !== p[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (d[a] !== p[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || d[a] !== p[n]) {
                  var _ = `
` + d[a].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ic = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Dt(t) : "";
  }
  function oh(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dt(e.type);
      case 16:
        return Dt("Lazy");
      case 13:
        return e.child !== l && l !== null ? Dt("Suspense Fallback") : Dt("Suspense");
      case 19:
        return Dt("SuspenseList");
      case 0:
      case 15:
        return cc(e.type, !1);
      case 11:
        return cc(e.type.render, !1);
      case 1:
        return cc(e.type, !0);
      case 31:
        return Dt("Activity");
      default:
        return "";
    }
  }
  function Zs(e) {
    try {
      var l = "", t = null;
      do
        l += oh(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var uc = Object.prototype.hasOwnProperty, sc = f.unstable_scheduleCallback, fc = f.unstable_cancelCallback, hh = f.unstable_shouldYield, mh = f.unstable_requestPaint, cl = f.unstable_now, vh = f.unstable_getCurrentPriorityLevel, Ls = f.unstable_ImmediatePriority, Vs = f.unstable_UserBlockingPriority, Hn = f.unstable_NormalPriority, yh = f.unstable_LowPriority, Ks = f.unstable_IdlePriority, ph = f.log, gh = f.unstable_setDisableYieldValue, Ha = null, ul = null;
  function nt(e) {
    if (typeof ph == "function" && gh(e), ul && typeof ul.setStrictMode == "function")
      try {
        ul.setStrictMode(Ha, e);
      } catch {
      }
  }
  var sl = Math.clz32 ? Math.clz32 : bh, xh = Math.log, jh = Math.LN2;
  function bh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xh(e) / jh | 0) | 0;
  }
  var Bn = 256, Yn = 262144, Gn = 4194304;
  function Ct(e) {
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
  function Xn(e, l, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, c = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~c, a !== 0 ? n = Ct(a) : (u &= s, u !== 0 ? n = Ct(u) : t || (t = s & ~e, t !== 0 && (n = Ct(t))))) : (s = a & ~c, s !== 0 ? n = Ct(s) : u !== 0 ? n = Ct(u) : t || (t = a & ~e, t !== 0 && (n = Ct(t)))), n === 0 ? 0 : l !== 0 && l !== n && (l & c) === 0 && (c = n & -n, t = l & -l, c >= t || c === 32 && (t & 4194048) !== 0) ? l : n;
  }
  function Ba(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function Sh(e, l) {
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
  function Js() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function rc(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function Ya(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function zh(e, l, t, a, n, c) {
    var u = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var s = e.entanglements, d = e.expirationTimes, p = e.hiddenUpdates;
    for (t = u & ~t; 0 < t; ) {
      var _ = 31 - sl(t), T = 1 << _;
      s[_] = 0, d[_] = -1;
      var g = p[_];
      if (g !== null)
        for (p[_] = null, _ = 0; _ < g.length; _++) {
          var b = g[_];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~T;
    }
    a !== 0 && ks(e, a, 0), c !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(u & ~l));
  }
  function ks(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var a = 31 - sl(l);
    e.entangledLanes |= l, e.entanglements[a] = e.entanglements[a] | 1073741824 | t & 261930;
  }
  function $s(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var a = 31 - sl(t), n = 1 << a;
      n & l | e[a] & l && (e[a] |= l), t &= ~n;
    }
  }
  function Ws(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : dc(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function dc(e) {
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
  function oc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fs() {
    var e = D.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yo(e.type));
  }
  function Is(e, l) {
    var t = D.p;
    try {
      return D.p = e, l();
    } finally {
      D.p = t;
    }
  }
  var it = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + it, We = "__reactProps$" + it, Wt = "__reactContainer$" + it, hc = "__reactEvents$" + it, _h = "__reactListeners$" + it, Nh = "__reactHandles$" + it, Ps = "__reactResources$" + it, Ga = "__reactMarker$" + it;
  function mc(e) {
    delete e[Ge], delete e[We], delete e[hc], delete e[_h], delete e[Nh];
  }
  function Ft(e) {
    var l = e[Ge];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[Wt] || t[Ge]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = So(e); e !== null; ) {
            if (t = e[Ge]) return t;
            e = So(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function It(e) {
    if (e = e[Ge] || e[Wt]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function Xa(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Pt(e) {
    var l = e[Ps];
    return l || (l = e[Ps] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function qe(e) {
    e[Ga] = !0;
  }
  var ef = /* @__PURE__ */ new Set(), lf = {};
  function Ut(e, l) {
    ea(e, l), ea(e + "Capture", l);
  }
  function ea(e, l) {
    for (lf[e] = l, e = 0; e < l.length; e++)
      ef.add(l[e]);
  }
  var Ah = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, af = {};
  function Eh(e) {
    return uc.call(af, e) ? !0 : uc.call(tf, e) ? !1 : Ah.test(e) ? af[e] = !0 : (tf[e] = !0, !1);
  }
  function wn(e, l, t) {
    if (Eh(l))
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
  function Qn(e, l, t) {
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
  function pl(e) {
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
  function nf(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Th(e, l, t) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      l
    );
    if (!e.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, c = a.set;
      return Object.defineProperty(e, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(u) {
          t = "" + u, c.call(this, u);
        }
      }), Object.defineProperty(e, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(u) {
          t = "" + u;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[l];
        }
      };
    }
  }
  function vc(e) {
    if (!e._valueTracker) {
      var l = nf(e) ? "checked" : "value";
      e._valueTracker = Th(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function cf(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), a = "";
    return e && (a = nf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== t ? (l.setValue(e), !0) : !1;
  }
  function Zn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mh = /[\n"\\]/g;
  function gl(e) {
    return e.replace(
      Mh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yc(e, l, t, a, n, c, u, s) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), l != null ? u === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + pl(l)) : e.value !== "" + pl(l) && (e.value = "" + pl(l)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), l != null ? pc(e, u, pl(l)) : t != null ? pc(e, u, pl(t)) : a != null && e.removeAttribute("value"), n == null && c != null && (e.defaultChecked = !!c), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + pl(s) : e.removeAttribute("name");
  }
  function uf(e, l, t, a, n, c, u, s) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), l != null || t != null) {
      if (!(c !== "submit" && c !== "reset" || l != null)) {
        vc(e);
        return;
      }
      t = t != null ? "" + pl(t) : "", l = l != null ? "" + pl(l) : t, s || l === e.value || (e.value = l), e.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), vc(e);
  }
  function pc(e, l, t) {
    l === "number" && Zn(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function la(e, l, t, a) {
    if (e = e.options, l) {
      l = {};
      for (var n = 0; n < t.length; n++)
        l["$" + t[n]] = !0;
      for (t = 0; t < e.length; t++)
        n = l.hasOwnProperty("$" + e[t].value), e[t].selected !== n && (e[t].selected = n), n && a && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + pl(t), l = null, n = 0; n < e.length; n++) {
        if (e[n].value === t) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        l !== null || e[n].disabled || (l = e[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function sf(e, l, t) {
    if (l != null && (l = "" + pl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + pl(t) : "";
  }
  function ff(e, l, t, a) {
    if (l == null) {
      if (a != null) {
        if (t != null) throw Error(r(92));
        if (Je(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), l = t;
    }
    t = pl(l), e.defaultValue = t, a = e.textContent, a === t && a !== "" && a !== null && (e.value = a), vc(e);
  }
  function ta(e, l) {
    if (l) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    e.textContent = l;
  }
  var Oh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function rf(e, l, t) {
    var a = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : a ? e.setProperty(l, t) : typeof t != "number" || t === 0 || Oh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function df(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (e = e.style, t != null) {
      for (var a in t)
        !t.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && t[n] !== a && rf(e, n, a);
    } else
      for (var c in l)
        l.hasOwnProperty(c) && rf(e, c, l[c]);
  }
  function gc(e) {
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
  var Dh = /* @__PURE__ */ new Map([
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
  ]), Ch = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ln(e) {
    return Ch.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gl() {
  }
  var xc = null;
  function jc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var aa = null, na = null;
  function of(e) {
    var l = It(e);
    if (l && (e = l.stateNode)) {
      var t = e[We] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (yc(
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
              'input[name="' + gl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var a = t[l];
              if (a !== e && a.form === e.form) {
                var n = a[We] || null;
                if (!n) throw Error(r(90));
                yc(
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
              a = t[l], a.form === e.form && cf(a);
          }
          break e;
        case "textarea":
          sf(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && la(e, !!t.multiple, l, !1);
      }
    }
  }
  var bc = !1;
  function hf(e, l, t) {
    if (bc) return e(l, t);
    bc = !0;
    try {
      var a = e(l);
      return a;
    } finally {
      if (bc = !1, (aa !== null || na !== null) && (Di(), aa && (l = aa, e = na, na = aa = null, of(l), e)))
        for (l = 0; l < e.length; l++) of(e[l]);
    }
  }
  function wa(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var a = t[We] || null;
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
        r(231, l, typeof t)
      );
    return t;
  }
  var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Sc = !1;
  if (Xl)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function() {
          Sc = !0;
        }
      }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      Sc = !1;
    }
  var ct = null, zc = null, Vn = null;
  function mf() {
    if (Vn) return Vn;
    var e, l = zc, t = l.length, a, n = "value" in ct ? ct.value : ct.textContent, c = n.length;
    for (e = 0; e < t && l[e] === n[e]; e++) ;
    var u = t - e;
    for (a = 1; a <= u && l[t - a] === n[c - a]; a++) ;
    return Vn = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Kn(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Jn() {
    return !0;
  }
  function vf() {
    return !1;
  }
  function Fe(e) {
    function l(t, a, n, c, u) {
      this._reactName = t, this._targetInst = n, this.type = a, this.nativeEvent = c, this.target = u, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(c) : c[s]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Jn : vf, this.isPropagationStopped = vf, this;
    }
    return R(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function() {
      },
      isPersistent: Jn
    }), l;
  }
  var Rt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = Fe(Rt), Za = R({}, Rt, { view: 0, detail: 0 }), Uh = Fe(Za), _c, Nc, La, $n = R({}, Za, {
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
    getModifierState: Ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== La && (La && e.type === "mousemove" ? (_c = e.screenX - La.screenX, Nc = e.screenY - La.screenY) : Nc = _c = 0, La = e), _c);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Nc;
    }
  }), yf = Fe($n), Rh = R({}, $n, { dataTransfer: 0 }), qh = Fe(Rh), Hh = R({}, Za, { relatedTarget: 0 }), Ac = Fe(Hh), Bh = R({}, Rt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yh = Fe(Bh), Gh = R({}, Rt, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xh = Fe(Gh), wh = R({}, Rt, { data: 0 }), pf = Fe(wh), Qh = {
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
  }, Zh = {
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
  }, Lh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = Lh[e]) ? !!l[e] : !1;
  }
  function Ec() {
    return Vh;
  }
  var Kh = R({}, Za, {
    key: function(e) {
      if (e.key) {
        var l = Qh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Kn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ec,
    charCode: function(e) {
      return e.type === "keypress" ? Kn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Kn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Jh = Fe(Kh), kh = R({}, $n, {
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
  }), gf = Fe(kh), $h = R({}, Za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec
  }), Wh = Fe($h), Fh = R({}, Rt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ih = Fe(Fh), Ph = R({}, $n, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), em = Fe(Ph), lm = R({}, Rt, {
    newState: 0,
    oldState: 0
  }), tm = Fe(lm), am = [9, 13, 27, 32], Tc = Xl && "CompositionEvent" in window, Va = null;
  Xl && "documentMode" in document && (Va = document.documentMode);
  var nm = Xl && "TextEvent" in window && !Va, xf = Xl && (!Tc || Va && 8 < Va && 11 >= Va), jf = " ", bf = !1;
  function Sf(e, l) {
    switch (e) {
      case "keyup":
        return am.indexOf(l.keyCode) !== -1;
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
  function zf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ia = !1;
  function im(e, l) {
    switch (e) {
      case "compositionend":
        return zf(l);
      case "keypress":
        return l.which !== 32 ? null : (bf = !0, jf);
      case "textInput":
        return e = l.data, e === jf && bf ? null : e;
      default:
        return null;
    }
  }
  function cm(e, l) {
    if (ia)
      return e === "compositionend" || !Tc && Sf(e, l) ? (e = mf(), Vn = zc = ct = null, ia = !1, e) : null;
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
        return xf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var um = {
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
  function _f(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!um[e.type] : l === "textarea";
  }
  function Nf(e, l, t, a) {
    aa ? na ? na.push(a) : na = [a] : aa = a, l = Yi(l, "onChange"), 0 < l.length && (t = new kn(
      "onChange",
      "change",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }));
  }
  var Ka = null, Ja = null;
  function sm(e) {
    uo(e, 0);
  }
  function Wn(e) {
    var l = Xa(e);
    if (cf(l)) return e;
  }
  function Af(e, l) {
    if (e === "change") return l;
  }
  var Ef = !1;
  if (Xl) {
    var Mc;
    if (Xl) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var Tf = document.createElement("div");
        Tf.setAttribute("oninput", "return;"), Oc = typeof Tf.oninput == "function";
      }
      Mc = Oc;
    } else Mc = !1;
    Ef = Mc && (!document.documentMode || 9 < document.documentMode);
  }
  function Mf() {
    Ka && (Ka.detachEvent("onpropertychange", Of), Ja = Ka = null);
  }
  function Of(e) {
    if (e.propertyName === "value" && Wn(Ja)) {
      var l = [];
      Nf(
        l,
        Ja,
        e,
        jc(e)
      ), hf(sm, l);
    }
  }
  function fm(e, l, t) {
    e === "focusin" ? (Mf(), Ka = l, Ja = t, Ka.attachEvent("onpropertychange", Of)) : e === "focusout" && Mf();
  }
  function rm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wn(Ja);
  }
  function dm(e, l) {
    if (e === "click") return Wn(l);
  }
  function om(e, l) {
    if (e === "input" || e === "change")
      return Wn(l);
  }
  function hm(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var fl = typeof Object.is == "function" ? Object.is : hm;
  function ka(e, l) {
    if (fl(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), a = Object.keys(l);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!uc.call(l, n) || !fl(e[n], l[n]))
        return !1;
    }
    return !0;
  }
  function Df(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Cf(e, l) {
    var t = Df(e);
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
      t = Df(t);
    }
  }
  function Uf(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Uf(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Rf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var l = Zn(e.document); l instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = l.contentWindow;
      else break;
      l = Zn(e.document);
    }
    return l;
  }
  function Dc(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var mm = Xl && "documentMode" in document && 11 >= document.documentMode, ca = null, Cc = null, $a = null, Uc = !1;
  function qf(e, l, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Uc || ca == null || ca !== Zn(a) || (a = ca, "selectionStart" in a && Dc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), $a && ka($a, a) || ($a = a, a = Yi(Cc, "onSelect"), 0 < a.length && (l = new kn(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: a }), l.target = ca)));
  }
  function qt(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var ua = {
    animationend: qt("Animation", "AnimationEnd"),
    animationiteration: qt("Animation", "AnimationIteration"),
    animationstart: qt("Animation", "AnimationStart"),
    transitionrun: qt("Transition", "TransitionRun"),
    transitionstart: qt("Transition", "TransitionStart"),
    transitioncancel: qt("Transition", "TransitionCancel"),
    transitionend: qt("Transition", "TransitionEnd")
  }, Rc = {}, Hf = {};
  Xl && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function Ht(e) {
    if (Rc[e]) return Rc[e];
    if (!ua[e]) return e;
    var l = ua[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in Hf)
        return Rc[e] = l[t];
    return e;
  }
  var Bf = Ht("animationend"), Yf = Ht("animationiteration"), Gf = Ht("animationstart"), vm = Ht("transitionrun"), ym = Ht("transitionstart"), pm = Ht("transitioncancel"), Xf = Ht("transitionend"), wf = /* @__PURE__ */ new Map(), qc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  qc.push("scrollEnd");
  function Ml(e, l) {
    wf.set(e, l), Ut(l, [e]);
  }
  var Fn = typeof reportError == "function" ? reportError : function(e) {
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
  }, xl = [], sa = 0, Hc = 0;
  function In() {
    for (var e = sa, l = Hc = sa = 0; l < e; ) {
      var t = xl[l];
      xl[l++] = null;
      var a = xl[l];
      xl[l++] = null;
      var n = xl[l];
      xl[l++] = null;
      var c = xl[l];
      if (xl[l++] = null, a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), a.pending = n;
      }
      c !== 0 && Qf(t, n, c);
    }
  }
  function Pn(e, l, t, a) {
    xl[sa++] = e, xl[sa++] = l, xl[sa++] = t, xl[sa++] = a, Hc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Bc(e, l, t, a) {
    return Pn(e, l, t, a), ei(e);
  }
  function Bt(e, l) {
    return Pn(e, null, null, l), ei(e);
  }
  function Qf(e, l, t) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, c = e.return; c !== null; )
      c.childLanes |= t, a = c.alternate, a !== null && (a.childLanes |= t), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (n = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, n && l !== null && (n = 31 - sl(t), e = c.hiddenUpdates, a = e[n], a === null ? e[n] = [l] : a.push(l), l.lane = t | 536870912), c) : null;
  }
  function ei(e) {
    if (50 < gn)
      throw gn = 0, Ku = null, Error(r(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function gm(e, l, t, a) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rl(e, l, t, a) {
    return new gm(e, l, t, a);
  }
  function Yc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function wl(e, l) {
    var t = e.alternate;
    return t === null ? (t = rl(
      e.tag,
      l,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function Zf(e, l) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), e;
  }
  function li(e, l, t, a, n, c) {
    var u = 0;
    if (a = e, typeof e == "function") Yc(e) && (u = 1);
    else if (typeof e == "string")
      u = zv(
        e,
        t,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case al:
          return e = rl(31, t, l, n), e.elementType = al, e.lanes = c, e;
        case X:
          return Yt(t.children, n, c, l);
        case _e:
          u = 8, n |= 24;
          break;
        case Re:
          return e = rl(12, t, l, n | 2), e.elementType = Re, e.lanes = c, e;
        case yl:
          return e = rl(13, t, l, n), e.elementType = yl, e.lanes = c, e;
        case Le:
          return e = rl(19, t, l, n), e.elementType = Le, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                u = 10;
                break e;
              case Be:
                u = 9;
                break e;
              case Ke:
                u = 11;
                break e;
              case W:
                u = 14;
                break e;
              case be:
                u = 16, a = null;
                break e;
            }
          u = 29, t = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return l = rl(u, t, l, n), l.elementType = e, l.type = a, l.lanes = c, l;
  }
  function Yt(e, l, t, a) {
    return e = rl(7, e, a, l), e.lanes = t, e;
  }
  function Gc(e, l, t) {
    return e = rl(6, e, null, l), e.lanes = t, e;
  }
  function Lf(e) {
    var l = rl(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Xc(e, l, t) {
    return l = rl(
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
  var Vf = /* @__PURE__ */ new WeakMap();
  function jl(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = Vf.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: Zs(l)
      }, Vf.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: Zs(l)
    };
  }
  var ra = [], da = 0, ti = null, Wa = 0, bl = [], Sl = 0, ut = null, Ul = 1, Rl = "";
  function Ql(e, l) {
    ra[da++] = Wa, ra[da++] = ti, ti = e, Wa = l;
  }
  function Kf(e, l, t) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ut, ut = e;
    var a = Ul;
    e = Rl;
    var n = 32 - sl(a) - 1;
    a &= ~(1 << n), t += 1;
    var c = 32 - sl(l) + n;
    if (30 < c) {
      var u = n - n % 5;
      c = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, Ul = 1 << 32 - sl(l) + n | t << n | a, Rl = c + e;
    } else
      Ul = 1 << c | t << n | a, Rl = e;
  }
  function wc(e) {
    e.return !== null && (Ql(e, 1), Kf(e, 1, 0));
  }
  function Qc(e) {
    for (; e === ti; )
      ti = ra[--da], ra[da] = null, Wa = ra[--da], ra[da] = null;
    for (; e === ut; )
      ut = bl[--Sl], bl[Sl] = null, Rl = bl[--Sl], bl[Sl] = null, Ul = bl[--Sl], bl[Sl] = null;
  }
  function Jf(e, l) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ut, Ul = l.id, Rl = l.overflow, ut = e;
  }
  var Xe = null, ge = null, ne = !1, st = null, zl = !1, Zc = Error(r(519));
  function ft(e) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fa(jl(l, e)), Zc;
  }
  function kf(e) {
    var l = e.stateNode, t = e.type, a = e.memoizedProps;
    switch (l[Ge] = e, l[We] = a, t) {
      case "dialog":
        ee("cancel", l), ee("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        ee("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < jn.length; t++)
          ee(jn[t], l);
        break;
      case "source":
        ee("error", l);
        break;
      case "img":
      case "image":
      case "link":
        ee("error", l), ee("load", l);
        break;
      case "details":
        ee("toggle", l);
        break;
      case "input":
        ee("invalid", l), uf(
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
        ee("invalid", l);
        break;
      case "textarea":
        ee("invalid", l), ff(l, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || a.suppressHydrationWarning === !0 || oo(l.textContent, t) ? (a.popover != null && (ee("beforetoggle", l), ee("toggle", l)), a.onScroll != null && ee("scroll", l), a.onScrollEnd != null && ee("scrollend", l), a.onClick != null && (l.onclick = Gl), l = !0) : l = !1, l || ft(e, !0);
  }
  function $f(e) {
    for (Xe = e.return; Xe; )
      switch (Xe.tag) {
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
          Xe = Xe.return;
      }
  }
  function oa(e) {
    if (e !== Xe) return !1;
    if (!ne) return $f(e), ne = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || us(e.type, e.memoizedProps)), t = !t), t && ge && ft(e), $f(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      ge = bo(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      ge = bo(e);
    } else
      l === 27 ? (l = ge, zt(e.type) ? (e = os, os = null, ge = e) : ge = l) : ge = Xe ? Nl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gt() {
    ge = Xe = null, ne = !1;
  }
  function Lc() {
    var e = st;
    return e !== null && (ll === null ? ll = e : ll.push.apply(
      ll,
      e
    ), st = null), e;
  }
  function Fa(e) {
    st === null ? st = [e] : st.push(e);
  }
  var Vc = h(null), Xt = null, Zl = null;
  function rt(e, l, t) {
    U(Vc, l._currentValue), l._currentValue = t;
  }
  function Ll(e) {
    e._currentValue = Vc.current, E(Vc);
  }
  function Kc(e, l, t) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function Jc(e, l, t, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var c = n.dependencies;
      if (c !== null) {
        var u = n.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var s = c;
          c = n;
          for (var d = 0; d < l.length; d++)
            if (s.context === l[d]) {
              c.lanes |= t, s = c.alternate, s !== null && (s.lanes |= t), Kc(
                c.return,
                t,
                e
              ), a || (u = null);
              break e;
            }
          c = s.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(r(341));
        u.lanes |= t, c = u.alternate, c !== null && (c.lanes |= t), Kc(u, t, e), u = null;
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (n = u.sibling, n !== null) {
            n.return = u.return, u = n;
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function ha(e, l, t, a) {
    e = null;
    for (var n = l, c = !1; n !== null; ) {
      if (!c) {
        if ((n.flags & 524288) !== 0) c = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(r(387));
        if (u = u.memoizedProps, u !== null) {
          var s = n.type;
          fl(n.pendingProps.value, u.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (n === j.current) {
        if (u = n.alternate, u === null) throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Nn) : e = [Nn]);
      }
      n = n.return;
    }
    e !== null && Jc(
      l,
      e,
      t,
      a
    ), l.flags |= 262144;
  }
  function ai(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!fl(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function wt(e) {
    Xt = e, Zl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function we(e) {
    return Wf(Xt, e);
  }
  function ni(e, l) {
    return Xt === null && wt(e), Wf(e, l);
  }
  function Wf(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, Zl === null) {
      if (e === null) throw Error(r(308));
      Zl = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else Zl = Zl.next = l;
    return t;
  }
  var xm = typeof AbortController < "u" ? AbortController : function() {
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
  }, jm = f.unstable_scheduleCallback, bm = f.unstable_NormalPriority, Ee = {
    $$typeof: Ce,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function kc() {
    return {
      controller: new xm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(e) {
    e.refCount--, e.refCount === 0 && jm(bm, function() {
      e.controller.abort();
    });
  }
  var Pa = null, $c = 0, ma = 0, va = null;
  function Sm(e, l) {
    if (Pa === null) {
      var t = Pa = [];
      $c = 0, ma = Iu(), va = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return $c++, l.then(Ff, Ff), l;
  }
  function Ff() {
    if (--$c === 0 && Pa !== null) {
      va !== null && (va.status = "fulfilled");
      var e = Pa;
      Pa = null, ma = 0, va = null;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
  }
  function zm(e, l) {
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
  var If = z.S;
  z.S = function(e, l) {
    qd = cl(), typeof l == "object" && l !== null && typeof l.then == "function" && Sm(e, l), If !== null && If(e, l);
  };
  var Qt = h(null);
  function Wc() {
    var e = Qt.current;
    return e !== null ? e : pe.pooledCache;
  }
  function ii(e, l) {
    l === null ? U(Qt, Qt.current) : U(Qt, l.pool);
  }
  function Pf() {
    var e = Wc();
    return e === null ? null : { parent: Ee._currentValue, pool: e };
  }
  var ya = Error(r(460)), Fc = Error(r(474)), ci = Error(r(542)), ui = { then: function() {
  } };
  function er(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lr(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(Gl, Gl), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, ar(e), e;
      default:
        if (typeof l.status == "string") l.then(Gl, Gl);
        else {
          if (e = pe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
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
            throw e = l.reason, ar(e), e;
        }
        throw Lt = l, ya;
    }
  }
  function Zt(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Lt = t, ya) : t;
    }
  }
  var Lt = null;
  function tr() {
    if (Lt === null) throw Error(r(459));
    var e = Lt;
    return Lt = null, e;
  }
  function ar(e) {
    if (e === ya || e === ci)
      throw Error(r(483));
  }
  var pa = null, en = 0;
  function si(e) {
    var l = en;
    return en += 1, pa === null && (pa = []), lr(pa, e, l);
  }
  function ln(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function fi(e, l) {
    throw l.$$typeof === ce ? Error(r(525)) : (e = Object.prototype.toString.call(l), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function nr(e) {
    function l(v, m) {
      if (e) {
        var y = v.deletions;
        y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
      }
    }
    function t(v, m) {
      if (!e) return null;
      for (; m !== null; )
        l(v, m), m = m.sibling;
      return null;
    }
    function a(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function n(v, m) {
      return v = wl(v, m), v.index = 0, v.sibling = null, v;
    }
    function c(v, m, y) {
      return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 67108866, m) : y) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function s(v, m, y, A) {
      return m === null || m.tag !== 6 ? (m = Gc(y, v.mode, A), m.return = v, m) : (m = n(m, y), m.return = v, m);
    }
    function d(v, m, y, A) {
      var G = y.type;
      return G === X ? _(
        v,
        m,
        y.props.children,
        A,
        y.key
      ) : m !== null && (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === be && Zt(G) === m.type) ? (m = n(m, y.props), ln(m, y), m.return = v, m) : (m = li(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        A
      ), ln(m, y), m.return = v, m);
    }
    function p(v, m, y, A) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Xc(y, v.mode, A), m.return = v, m) : (m = n(m, y.children || []), m.return = v, m);
    }
    function _(v, m, y, A, G) {
      return m === null || m.tag !== 7 ? (m = Yt(
        y,
        v.mode,
        A,
        G
      ), m.return = v, m) : (m = n(m, y), m.return = v, m);
    }
    function T(v, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Gc(
          "" + m,
          v.mode,
          y
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ye:
            return y = li(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              y
            ), ln(y, m), y.return = v, y;
          case De:
            return m = Xc(
              m,
              v.mode,
              y
            ), m.return = v, m;
          case be:
            return m = Zt(m), T(v, m, y);
        }
        if (Je(m) || Ye(m))
          return m = Yt(
            m,
            v.mode,
            y,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return T(v, si(m), y);
        if (m.$$typeof === Ce)
          return T(
            v,
            ni(v, m),
            y
          );
        fi(v, m);
      }
      return null;
    }
    function g(v, m, y, A) {
      var G = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return G !== null ? null : s(v, m, "" + y, A);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ye:
            return y.key === G ? d(v, m, y, A) : null;
          case De:
            return y.key === G ? p(v, m, y, A) : null;
          case be:
            return y = Zt(y), g(v, m, y, A);
        }
        if (Je(y) || Ye(y))
          return G !== null ? null : _(v, m, y, A, null);
        if (typeof y.then == "function")
          return g(
            v,
            m,
            si(y),
            A
          );
        if (y.$$typeof === Ce)
          return g(
            v,
            m,
            ni(v, y),
            A
          );
        fi(v, y);
      }
      return null;
    }
    function b(v, m, y, A, G) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return v = v.get(y) || null, s(m, v, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ye:
            return v = v.get(
              A.key === null ? y : A.key
            ) || null, d(m, v, A, G);
          case De:
            return v = v.get(
              A.key === null ? y : A.key
            ) || null, p(m, v, A, G);
          case be:
            return A = Zt(A), b(
              v,
              m,
              y,
              A,
              G
            );
        }
        if (Je(A) || Ye(A))
          return v = v.get(y) || null, _(m, v, A, G, null);
        if (typeof A.then == "function")
          return b(
            v,
            m,
            y,
            si(A),
            G
          );
        if (A.$$typeof === Ce)
          return b(
            v,
            m,
            y,
            ni(m, A),
            G
          );
        fi(m, A);
      }
      return null;
    }
    function q(v, m, y, A) {
      for (var G = null, ue = null, B = m, $ = m = 0, ae = null; B !== null && $ < y.length; $++) {
        B.index > $ ? (ae = B, B = null) : ae = B.sibling;
        var se = g(
          v,
          B,
          y[$],
          A
        );
        if (se === null) {
          B === null && (B = ae);
          break;
        }
        e && B && se.alternate === null && l(v, B), m = c(se, m, $), ue === null ? G = se : ue.sibling = se, ue = se, B = ae;
      }
      if ($ === y.length)
        return t(v, B), ne && Ql(v, $), G;
      if (B === null) {
        for (; $ < y.length; $++)
          B = T(v, y[$], A), B !== null && (m = c(
            B,
            m,
            $
          ), ue === null ? G = B : ue.sibling = B, ue = B);
        return ne && Ql(v, $), G;
      }
      for (B = a(B); $ < y.length; $++)
        ae = b(
          B,
          v,
          $,
          y[$],
          A
        ), ae !== null && (e && ae.alternate !== null && B.delete(
          ae.key === null ? $ : ae.key
        ), m = c(
          ae,
          m,
          $
        ), ue === null ? G = ae : ue.sibling = ae, ue = ae);
      return e && B.forEach(function(Tt) {
        return l(v, Tt);
      }), ne && Ql(v, $), G;
    }
    function w(v, m, y, A) {
      if (y == null) throw Error(r(151));
      for (var G = null, ue = null, B = m, $ = m = 0, ae = null, se = y.next(); B !== null && !se.done; $++, se = y.next()) {
        B.index > $ ? (ae = B, B = null) : ae = B.sibling;
        var Tt = g(v, B, se.value, A);
        if (Tt === null) {
          B === null && (B = ae);
          break;
        }
        e && B && Tt.alternate === null && l(v, B), m = c(Tt, m, $), ue === null ? G = Tt : ue.sibling = Tt, ue = Tt, B = ae;
      }
      if (se.done)
        return t(v, B), ne && Ql(v, $), G;
      if (B === null) {
        for (; !se.done; $++, se = y.next())
          se = T(v, se.value, A), se !== null && (m = c(se, m, $), ue === null ? G = se : ue.sibling = se, ue = se);
        return ne && Ql(v, $), G;
      }
      for (B = a(B); !se.done; $++, se = y.next())
        se = b(B, v, $, se.value, A), se !== null && (e && se.alternate !== null && B.delete(se.key === null ? $ : se.key), m = c(se, m, $), ue === null ? G = se : ue.sibling = se, ue = se);
      return e && B.forEach(function(Rv) {
        return l(v, Rv);
      }), ne && Ql(v, $), G;
    }
    function ve(v, m, y, A) {
      if (typeof y == "object" && y !== null && y.type === X && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ye:
            e: {
              for (var G = y.key; m !== null; ) {
                if (m.key === G) {
                  if (G = y.type, G === X) {
                    if (m.tag === 7) {
                      t(
                        v,
                        m.sibling
                      ), A = n(
                        m,
                        y.props.children
                      ), A.return = v, v = A;
                      break e;
                    }
                  } else if (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === be && Zt(G) === m.type) {
                    t(
                      v,
                      m.sibling
                    ), A = n(m, y.props), ln(A, y), A.return = v, v = A;
                    break e;
                  }
                  t(v, m);
                  break;
                } else l(v, m);
                m = m.sibling;
              }
              y.type === X ? (A = Yt(
                y.props.children,
                v.mode,
                A,
                y.key
              ), A.return = v, v = A) : (A = li(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                A
              ), ln(A, y), A.return = v, v = A);
            }
            return u(v);
          case De:
            e: {
              for (G = y.key; m !== null; ) {
                if (m.key === G)
                  if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    t(
                      v,
                      m.sibling
                    ), A = n(m, y.children || []), A.return = v, v = A;
                    break e;
                  } else {
                    t(v, m);
                    break;
                  }
                else l(v, m);
                m = m.sibling;
              }
              A = Xc(y, v.mode, A), A.return = v, v = A;
            }
            return u(v);
          case be:
            return y = Zt(y), ve(
              v,
              m,
              y,
              A
            );
        }
        if (Je(y))
          return q(
            v,
            m,
            y,
            A
          );
        if (Ye(y)) {
          if (G = Ye(y), typeof G != "function") throw Error(r(150));
          return y = G.call(y), w(
            v,
            m,
            y,
            A
          );
        }
        if (typeof y.then == "function")
          return ve(
            v,
            m,
            si(y),
            A
          );
        if (y.$$typeof === Ce)
          return ve(
            v,
            m,
            ni(v, y),
            A
          );
        fi(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (t(v, m.sibling), A = n(m, y), A.return = v, v = A) : (t(v, m), A = Gc(y, v.mode, A), A.return = v, v = A), u(v)) : t(v, m);
    }
    return function(v, m, y, A) {
      try {
        en = 0;
        var G = ve(
          v,
          m,
          y,
          A
        );
        return pa = null, G;
      } catch (B) {
        if (B === ya || B === ci) throw B;
        var ue = rl(29, B, null, v.mode);
        return ue.lanes = A, ue.return = v, ue;
      }
    };
  }
  var Vt = nr(!0), ir = nr(!1), dt = !1;
  function Ic(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Pc(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ot(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ht(e, l, t) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (fe & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = ei(e), Qf(e, null, t), l;
    }
    return Pn(e, a, l, t), ei(e);
  }
  function tn(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, $s(e, t);
    }
  }
  function eu(e, l) {
    var t = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, t === a)) {
      var n = null, c = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          c === null ? n = c = u : c = c.next = u, t = t.next;
        } while (t !== null);
        c === null ? n = c = l : c = c.next = l;
      } else n = c = l;
      t = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = l : e.next = l, t.lastBaseUpdate = l;
  }
  var lu = !1;
  function an() {
    if (lu) {
      var e = va;
      if (e !== null) throw e;
    }
  }
  function nn(e, l, t, a) {
    lu = !1;
    var n = e.updateQueue;
    dt = !1;
    var c = n.firstBaseUpdate, u = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var d = s, p = d.next;
      d.next = null, u === null ? c = p : u.next = p, u = d;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, s = _.lastBaseUpdate, s !== u && (s === null ? _.firstBaseUpdate = p : s.next = p, _.lastBaseUpdate = d));
    }
    if (c !== null) {
      var T = n.baseState;
      u = 0, _ = p = d = null, s = c;
      do {
        var g = s.lane & -536870913, b = g !== s.lane;
        if (b ? (te & g) === g : (a & g) === g) {
          g !== 0 && g === ma && (lu = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var q = e, w = s;
            g = l;
            var ve = t;
            switch (w.tag) {
              case 1:
                if (q = w.payload, typeof q == "function") {
                  T = q.call(ve, T, g);
                  break e;
                }
                T = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = w.payload, g = typeof q == "function" ? q.call(ve, T, g) : q, g == null) break e;
                T = R({}, T, g);
                break e;
              case 2:
                dt = !0;
            }
          }
          g = s.callback, g !== null && (e.flags |= 64, b && (e.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [g] : b.push(g));
        } else
          b = {
            lane: g,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, _ === null ? (p = _ = b, d = T) : _ = _.next = b, u |= g;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          b = s, s = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      _ === null && (d = T), n.baseState = d, n.firstBaseUpdate = p, n.lastBaseUpdate = _, c === null && (n.shared.lanes = 0), gt |= u, e.lanes = u, e.memoizedState = T;
    }
  }
  function cr(e, l) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(l);
  }
  function ur(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        cr(t[e], l);
  }
  var ga = h(null), ri = h(0);
  function sr(e, l) {
    e = Pl, U(ri, e), U(ga, l), Pl = e | l.baseLanes;
  }
  function tu() {
    U(ri, Pl), U(ga, ga.current);
  }
  function au() {
    Pl = ri.current, E(ga), E(ri);
  }
  var dl = h(null), _l = null;
  function mt(e) {
    var l = e.alternate;
    U(Ne, Ne.current & 1), U(dl, e), _l === null && (l === null || ga.current !== null || l.memoizedState !== null) && (_l = e);
  }
  function nu(e) {
    U(Ne, Ne.current), U(dl, e), _l === null && (_l = e);
  }
  function fr(e) {
    e.tag === 22 ? (U(Ne, Ne.current), U(dl, e), _l === null && (_l = e)) : vt();
  }
  function vt() {
    U(Ne, Ne.current), U(dl, dl.current);
  }
  function ol(e) {
    E(dl), _l === e && (_l = null), E(Ne);
  }
  var Ne = h(0);
  function di(e) {
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
  var Vl = 0, k = null, he = null, Te = null, oi = !1, xa = !1, Kt = !1, hi = 0, cn = 0, ja = null, _m = 0;
  function Se() {
    throw Error(r(321));
  }
  function iu(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!fl(e[t], l[t])) return !1;
    return !0;
  }
  function cu(e, l, t, a, n, c) {
    return Vl = c, k = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, z.H = e === null || e.memoizedState === null ? Kr : bu, Kt = !1, c = t(a, n), Kt = !1, xa && (c = dr(
      l,
      t,
      a,
      n
    )), rr(e), c;
  }
  function rr(e) {
    z.H = fn;
    var l = he !== null && he.next !== null;
    if (Vl = 0, Te = he = k = null, oi = !1, cn = 0, ja = null, l) throw Error(r(300));
    e === null || Me || (e = e.dependencies, e !== null && ai(e) && (Me = !0));
  }
  function dr(e, l, t, a) {
    k = e;
    var n = 0;
    do {
      if (xa && (ja = null), cn = 0, xa = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Te = he = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      z.H = Jr, c = l(t, a);
    } while (xa);
    return c;
  }
  function Nm() {
    var e = z.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? un(l) : l, e = e.useState()[0], (he !== null ? he.memoizedState : null) !== e && (k.flags |= 1024), l;
  }
  function uu() {
    var e = hi !== 0;
    return hi = 0, e;
  }
  function su(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function fu(e) {
    if (oi) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      oi = !1;
    }
    Vl = 0, Te = he = k = null, xa = !1, cn = hi = 0, ja = null;
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Te === null ? k.memoizedState = Te = e : Te = Te.next = e, Te;
  }
  function Ae() {
    if (he === null) {
      var e = k.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var l = Te === null ? k.memoizedState : Te.next;
    if (l !== null)
      Te = l, he = e;
    else {
      if (e === null)
        throw k.alternate === null ? Error(r(467)) : Error(r(310));
      he = e, e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null
      }, Te === null ? k.memoizedState = Te = e : Te = Te.next = e;
    }
    return Te;
  }
  function mi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function un(e) {
    var l = cn;
    return cn += 1, ja === null && (ja = []), e = lr(ja, e, l), l = k, (Te === null ? l.memoizedState : Te.next) === null && (l = l.alternate, z.H = l === null || l.memoizedState === null ? Kr : bu), e;
  }
  function vi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return un(e);
      if (e.$$typeof === Ce) return we(e);
    }
    throw Error(r(438, String(e)));
  }
  function ru(e) {
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
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = mi(), k.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), a = 0; a < e; a++)
        t[a] = El;
    return l.index++, t;
  }
  function Kl(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function yi(e) {
    var l = Ae();
    return du(l, he, e);
  }
  function du(e, l, t) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var n = e.baseQueue, c = a.pending;
    if (c !== null) {
      if (n !== null) {
        var u = n.next;
        n.next = c.next, c.next = u;
      }
      l.baseQueue = n = c, a.pending = null;
    }
    if (c = e.baseState, n === null) e.memoizedState = c;
    else {
      l = n.next;
      var s = u = null, d = null, p = l, _ = !1;
      do {
        var T = p.lane & -536870913;
        if (T !== p.lane ? (te & T) === T : (Vl & T) === T) {
          var g = p.revertLane;
          if (g === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), T === ma && (_ = !0);
          else if ((Vl & g) === g) {
            p = p.next, g === ma && (_ = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, d === null ? (s = d = T, u = c) : d = d.next = T, k.lanes |= g, gt |= g;
          T = p.action, Kt && t(c, T), c = p.hasEagerState ? p.eagerState : t(c, T);
        } else
          g = {
            lane: T,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, d === null ? (s = d = g, u = c) : d = d.next = g, k.lanes |= T, gt |= T;
        p = p.next;
      } while (p !== null && p !== l);
      if (d === null ? u = c : d.next = s, !fl(c, e.memoizedState) && (Me = !0, _ && (t = va, t !== null)))
        throw t;
      e.memoizedState = c, e.baseState = u, e.baseQueue = d, a.lastRenderedState = c;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ou(e) {
    var l = Ae(), t = l.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = e;
    var a = t.dispatch, n = t.pending, c = l.memoizedState;
    if (n !== null) {
      t.pending = null;
      var u = n = n.next;
      do
        c = e(c, u.action), u = u.next;
      while (u !== n);
      fl(c, l.memoizedState) || (Me = !0), l.memoizedState = c, l.baseQueue === null && (l.baseState = c), t.lastRenderedState = c;
    }
    return [c, a];
  }
  function or(e, l, t) {
    var a = k, n = Ae(), c = ne;
    if (c) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = l();
    var u = !fl(
      (he || n).memoizedState,
      t
    );
    if (u && (n.memoizedState = t, Me = !0), n = n.queue, vu(vr.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== l || u || Te !== null && Te.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        mr.bind(
          null,
          a,
          n,
          t,
          l
        ),
        null
      ), pe === null) throw Error(r(349));
      c || (Vl & 127) !== 0 || hr(a, l, t);
    }
    return t;
  }
  function hr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = k.updateQueue, l === null ? (l = mi(), k.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function mr(e, l, t, a) {
    l.value = t, l.getSnapshot = a, yr(l) && pr(e);
  }
  function vr(e, l, t) {
    return t(function() {
      yr(l) && pr(e);
    });
  }
  function yr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !fl(e, t);
    } catch {
      return !0;
    }
  }
  function pr(e) {
    var l = Bt(e, 2);
    l !== null && tl(l, e, 2);
  }
  function hu(e) {
    var l = ke();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), Kt) {
        nt(!0);
        try {
          t();
        } finally {
          nt(!1);
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
  function gr(e, l, t, a) {
    return e.baseState = t, du(
      e,
      he,
      typeof a == "function" ? a : Kl
    );
  }
  function Am(e, l, t, a, n) {
    if (xi(e)) throw Error(r(485));
    if (e = l.action, e !== null) {
      var c = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          c.listeners.push(u);
        }
      };
      z.T !== null ? t(!0) : c.isTransition = !1, a(c), t = l.pending, t === null ? (c.next = l.pending = c, xr(l, c)) : (c.next = t.next, l.pending = t.next = c);
    }
  }
  function xr(e, l) {
    var t = l.action, a = l.payload, n = e.state;
    if (l.isTransition) {
      var c = z.T, u = {};
      z.T = u;
      try {
        var s = t(n, a), d = z.S;
        d !== null && d(u, s), jr(e, l, s);
      } catch (p) {
        mu(e, l, p);
      } finally {
        c !== null && u.types !== null && (c.types = u.types), z.T = c;
      }
    } else
      try {
        c = t(n, a), jr(e, l, c);
      } catch (p) {
        mu(e, l, p);
      }
  }
  function jr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        br(e, l, a);
      },
      function(a) {
        return mu(e, l, a);
      }
    ) : br(e, l, t);
  }
  function br(e, l, t) {
    l.status = "fulfilled", l.value = t, Sr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, xr(e, t)));
  }
  function mu(e, l, t) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = t, Sr(l), l = l.next;
      while (l !== a);
    }
    e.action = null;
  }
  function Sr(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function zr(e, l) {
    return l;
  }
  function _r(e, l) {
    if (ne) {
      var t = pe.formState;
      if (t !== null) {
        e: {
          var a = k;
          if (ne) {
            if (ge) {
              l: {
                for (var n = ge, c = zl; n.nodeType !== 8; ) {
                  if (!c) {
                    n = null;
                    break l;
                  }
                  if (n = Nl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                c = n.data, n = c === "F!" || c === "F" ? n : null;
              }
              if (n) {
                ge = Nl(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            ft(a);
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
      lastRenderedReducer: zr,
      lastRenderedState: l
    }, t.queue = a, t = Zr.bind(
      null,
      k,
      a
    ), a.dispatch = t, a = hu(!1), c = ju.bind(
      null,
      k,
      !1,
      a.queue
    ), a = ke(), n = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, t = Am.bind(
      null,
      k,
      n,
      c,
      t
    ), n.dispatch = t, a.memoizedState = e, [l, t, !1];
  }
  function Nr(e) {
    var l = Ae();
    return Ar(l, he, e);
  }
  function Ar(e, l, t) {
    if (l = du(
      e,
      l,
      zr
    )[0], e = yi(Kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = un(l);
      } catch (u) {
        throw u === ya ? ci : u;
      }
    else a = l;
    l = Ae();
    var n = l.queue, c = n.dispatch;
    return t !== l.memoizedState && (k.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      Em.bind(null, n, t),
      null
    )), [a, c, e];
  }
  function Em(e, l) {
    e.action = l;
  }
  function Er(e) {
    var l = Ae(), t = he;
    if (t !== null)
      return Ar(l, t, e);
    Ae(), l = l.memoizedState, t = Ae();
    var a = t.queue.dispatch;
    return t.memoizedState = e, [l, a, !1];
  }
  function ba(e, l, t, a) {
    return e = { tag: e, create: t, deps: a, inst: l, next: null }, l = k.updateQueue, l === null && (l = mi(), k.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (a = t.next, t.next = e, e.next = a, l.lastEffect = e), e;
  }
  function Tr() {
    return Ae().memoizedState;
  }
  function pi(e, l, t, a) {
    var n = ke();
    k.flags |= e, n.memoizedState = ba(
      1 | l,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function gi(e, l, t, a) {
    var n = Ae();
    a = a === void 0 ? null : a;
    var c = n.memoizedState.inst;
    he !== null && a !== null && iu(a, he.memoizedState.deps) ? n.memoizedState = ba(l, c, t, a) : (k.flags |= e, n.memoizedState = ba(
      1 | l,
      c,
      t,
      a
    ));
  }
  function Mr(e, l) {
    pi(8390656, 8, e, l);
  }
  function vu(e, l) {
    gi(2048, 8, e, l);
  }
  function Tm(e) {
    k.flags |= 4;
    var l = k.updateQueue;
    if (l === null)
      l = mi(), k.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function Or(e) {
    var l = Ae().memoizedState;
    return Tm({ ref: l, nextImpl: e }), function() {
      if ((fe & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Dr(e, l) {
    return gi(4, 2, e, l);
  }
  function Cr(e, l) {
    return gi(4, 4, e, l);
  }
  function Ur(e, l) {
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
  function Rr(e, l, t) {
    t = t != null ? t.concat([e]) : null, gi(4, 4, Ur.bind(null, l, e), t);
  }
  function yu() {
  }
  function qr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    return l !== null && iu(l, a[1]) ? a[0] : (t.memoizedState = [e, l], e);
  }
  function Hr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    if (l !== null && iu(l, a[1]))
      return a[0];
    if (a = e(), Kt) {
      nt(!0);
      try {
        e();
      } finally {
        nt(!1);
      }
    }
    return t.memoizedState = [a, l], a;
  }
  function pu(e, l, t) {
    return t === void 0 || (Vl & 1073741824) !== 0 && (te & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = Bd(), k.lanes |= e, gt |= e, t);
  }
  function Br(e, l, t, a) {
    return fl(t, l) ? t : ga.current !== null ? (e = pu(e, t, a), fl(e, l) || (Me = !0), e) : (Vl & 42) === 0 || (Vl & 1073741824) !== 0 && (te & 261930) === 0 ? (Me = !0, e.memoizedState = t) : (e = Bd(), k.lanes |= e, gt |= e, l);
  }
  function Yr(e, l, t, a, n) {
    var c = D.p;
    D.p = c !== 0 && 8 > c ? c : 8;
    var u = z.T, s = {};
    z.T = s, ju(e, !1, l, t);
    try {
      var d = n(), p = z.S;
      if (p !== null && p(s, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var _ = zm(
          d,
          a
        );
        sn(
          e,
          l,
          _,
          vl(e)
        );
      } else
        sn(
          e,
          l,
          a,
          vl(e)
        );
    } catch (T) {
      sn(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: T },
        vl()
      );
    } finally {
      D.p = c, u !== null && s.types !== null && (u.types = s.types), z.T = u;
    }
  }
  function Mm() {
  }
  function gu(e, l, t, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Gr(e).queue;
    Yr(
      e,
      n,
      l,
      Y,
      t === null ? Mm : function() {
        return Xr(e), t(a);
      }
    );
  }
  function Gr(e) {
    var l = e.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: Y
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
  function Xr(e) {
    var l = Gr(e);
    l.next === null && (l = e.alternate.memoizedState), sn(
      e,
      l.next.queue,
      {},
      vl()
    );
  }
  function xu() {
    return we(Nn);
  }
  function wr() {
    return Ae().memoizedState;
  }
  function Qr() {
    return Ae().memoizedState;
  }
  function Om(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = vl();
          e = ot(t);
          var a = ht(l, e, t);
          a !== null && (tl(a, l, t), tn(a, l, t)), l = { cache: kc() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Dm(e, l, t) {
    var a = vl();
    t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xi(e) ? Lr(l, t) : (t = Bc(e, l, t, a), t !== null && (tl(t, e, a), Vr(t, l, a)));
  }
  function Zr(e, l, t) {
    var a = vl();
    sn(e, l, t, a);
  }
  function sn(e, l, t, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xi(e)) Lr(l, n);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = l.lastRenderedReducer, c !== null))
        try {
          var u = l.lastRenderedState, s = c(u, t);
          if (n.hasEagerState = !0, n.eagerState = s, fl(s, u))
            return Pn(e, l, n, 0), pe === null && In(), !1;
        } catch {
        }
      if (t = Bc(e, l, n, a), t !== null)
        return tl(t, e, a), Vr(t, l, a), !0;
    }
    return !1;
  }
  function ju(e, l, t, a) {
    if (a = {
      lane: 2,
      revertLane: Iu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xi(e)) {
      if (l) throw Error(r(479));
    } else
      l = Bc(
        e,
        t,
        a,
        2
      ), l !== null && tl(l, e, 2);
  }
  function xi(e) {
    var l = e.alternate;
    return e === k || l !== null && l === k;
  }
  function Lr(e, l) {
    xa = oi = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function Vr(e, l, t) {
    if ((t & 4194048) !== 0) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, $s(e, t);
    }
  }
  var fn = {
    readContext: we,
    use: vi,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useLayoutEffect: Se,
    useInsertionEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useSyncExternalStore: Se,
    useId: Se,
    useHostTransitionStatus: Se,
    useFormState: Se,
    useActionState: Se,
    useOptimistic: Se,
    useMemoCache: Se,
    useCacheRefresh: Se
  };
  fn.useEffectEvent = Se;
  var Kr = {
    readContext: we,
    use: vi,
    useCallback: function(e, l) {
      return ke().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: we,
    useEffect: Mr,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, pi(
        4194308,
        4,
        Ur.bind(null, l, e),
        t
      );
    },
    useLayoutEffect: function(e, l) {
      return pi(4194308, 4, e, l);
    },
    useInsertionEffect: function(e, l) {
      pi(4, 2, e, l);
    },
    useMemo: function(e, l) {
      var t = ke();
      l = l === void 0 ? null : l;
      var a = e();
      if (Kt) {
        nt(!0);
        try {
          e();
        } finally {
          nt(!1);
        }
      }
      return t.memoizedState = [a, l], a;
    },
    useReducer: function(e, l, t) {
      var a = ke();
      if (t !== void 0) {
        var n = t(l);
        if (Kt) {
          nt(!0);
          try {
            t(l);
          } finally {
            nt(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = Dm.bind(
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
      e = hu(e);
      var l = e.queue, t = Zr.bind(null, k, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: yu,
    useDeferredValue: function(e, l) {
      var t = ke();
      return pu(t, e, l);
    },
    useTransition: function() {
      var e = hu(!1);
      return e = Yr.bind(
        null,
        k,
        e.queue,
        !0,
        !1
      ), ke().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var a = k, n = ke();
      if (ne) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = l(), pe === null)
          throw Error(r(349));
        (te & 127) !== 0 || hr(a, l, t);
      }
      n.memoizedState = t;
      var c = { value: t, getSnapshot: l };
      return n.queue = c, Mr(vr.bind(null, a, c, e), [
        e
      ]), a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        mr.bind(
          null,
          a,
          c,
          t,
          l
        ),
        null
      ), t;
    },
    useId: function() {
      var e = ke(), l = pe.identifierPrefix;
      if (ne) {
        var t = Rl, a = Ul;
        t = (a & ~(1 << 32 - sl(a) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = hi++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = _m++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: xu,
    useFormState: _r,
    useActionState: _r,
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
      return l.queue = t, l = ju.bind(
        null,
        k,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: ru,
    useCacheRefresh: function() {
      return ke().memoizedState = Om.bind(
        null,
        k
      );
    },
    useEffectEvent: function(e) {
      var l = ke(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((fe & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, bu = {
    readContext: we,
    use: vi,
    useCallback: qr,
    useContext: we,
    useEffect: vu,
    useImperativeHandle: Rr,
    useInsertionEffect: Dr,
    useLayoutEffect: Cr,
    useMemo: Hr,
    useReducer: yi,
    useRef: Tr,
    useState: function() {
      return yi(Kl);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, l) {
      var t = Ae();
      return Br(
        t,
        he.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = yi(Kl)[0], l = Ae().memoizedState;
      return [
        typeof e == "boolean" ? e : un(e),
        l
      ];
    },
    useSyncExternalStore: or,
    useId: wr,
    useHostTransitionStatus: xu,
    useFormState: Nr,
    useActionState: Nr,
    useOptimistic: function(e, l) {
      var t = Ae();
      return gr(t, he, e, l);
    },
    useMemoCache: ru,
    useCacheRefresh: Qr
  };
  bu.useEffectEvent = Or;
  var Jr = {
    readContext: we,
    use: vi,
    useCallback: qr,
    useContext: we,
    useEffect: vu,
    useImperativeHandle: Rr,
    useInsertionEffect: Dr,
    useLayoutEffect: Cr,
    useMemo: Hr,
    useReducer: ou,
    useRef: Tr,
    useState: function() {
      return ou(Kl);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, l) {
      var t = Ae();
      return he === null ? pu(t, e, l) : Br(
        t,
        he.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = ou(Kl)[0], l = Ae().memoizedState;
      return [
        typeof e == "boolean" ? e : un(e),
        l
      ];
    },
    useSyncExternalStore: or,
    useId: wr,
    useHostTransitionStatus: xu,
    useFormState: Er,
    useActionState: Er,
    useOptimistic: function(e, l) {
      var t = Ae();
      return he !== null ? gr(t, he, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: ru,
    useCacheRefresh: Qr
  };
  Jr.useEffectEvent = Or;
  function Su(e, l, t, a) {
    l = e.memoizedState, t = t(a, l), t = t == null ? l : R({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var zu = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n = ot(a);
      n.payload = l, t != null && (n.callback = t), l = ht(e, n, a), l !== null && (tl(l, e, a), tn(l, e, a));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n = ot(a);
      n.tag = 1, n.payload = l, t != null && (n.callback = t), l = ht(e, n, a), l !== null && (tl(l, e, a), tn(l, e, a));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = vl(), a = ot(t);
      a.tag = 2, l != null && (a.callback = l), l = ht(e, a, t), l !== null && (tl(l, e, t), tn(l, e, t));
    }
  };
  function kr(e, l, t, a, n, c, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, u) : l.prototype && l.prototype.isPureReactComponent ? !ka(t, a) || !ka(n, c) : !0;
  }
  function $r(e, l, t, a) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, a), l.state !== e && zu.enqueueReplaceState(l, l.state, null);
  }
  function Jt(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var a in l)
        a !== "ref" && (t[a] = l[a]);
    }
    if (e = e.defaultProps) {
      t === l && (t = R({}, t));
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    }
    return t;
  }
  function Wr(e) {
    Fn(e);
  }
  function Fr(e) {
    console.error(e);
  }
  function Ir(e) {
    Fn(e);
  }
  function ji(e, l) {
    try {
      var t = e.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Pr(e, l, t) {
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
  function _u(e, l, t) {
    return t = ot(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      ji(e, l);
    }, t;
  }
  function ed(e) {
    return e = ot(e), e.tag = 3, e;
  }
  function ld(e, l, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var c = a.value;
      e.payload = function() {
        return n(c);
      }, e.callback = function() {
        Pr(l, t, a);
      };
    }
    var u = t.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Pr(l, t, a), typeof n != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Cm(e, l, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = t.alternate, l !== null && ha(
        l,
        t,
        n,
        !0
      ), t = dl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return _l === null ? Ci() : t.alternate === null && ze === 0 && (ze = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === ui ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), $u(e, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === ui ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), $u(e, a, n)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return $u(e, a, n), Ci(), !1;
    }
    if (ne)
      return l = dl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Zc && (e = Error(r(422), { cause: a }), Fa(jl(e, t)))) : (a !== Zc && (l = Error(r(423), {
        cause: a
      }), Fa(
        jl(l, t)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = jl(a, t), n = _u(
        e.stateNode,
        a,
        n
      ), eu(e, n), ze !== 4 && (ze = 2)), !1;
    var c = Error(r(520), { cause: a });
    if (c = jl(c, t), pn === null ? pn = [c] : pn.push(c), ze !== 4 && (ze = 2), l === null) return !0;
    a = jl(a, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = n & -n, t.lanes |= e, e = _u(t.stateNode, a, e), eu(t, e), !1;
        case 1:
          if (l = t.type, c = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (xt === null || !xt.has(c))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = ed(n), ld(
              n,
              e,
              t,
              a
            ), eu(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Nu = Error(r(461)), Me = !1;
  function Qe(e, l, t, a) {
    l.child = e === null ? ir(l, null, t, a) : Vt(
      l,
      e.child,
      t,
      a
    );
  }
  function td(e, l, t, a, n) {
    t = t.render;
    var c = l.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a)
        s !== "ref" && (u[s] = a[s]);
    } else u = a;
    return wt(l), a = cu(
      e,
      l,
      t,
      u,
      c,
      n
    ), s = uu(), e !== null && !Me ? (su(e, l, n), Jl(e, l, n)) : (ne && s && wc(l), l.flags |= 1, Qe(e, l, a, n), l.child);
  }
  function ad(e, l, t, a, n) {
    if (e === null) {
      var c = t.type;
      return typeof c == "function" && !Yc(c) && c.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = c, nd(
        e,
        l,
        c,
        a,
        n
      )) : (e = li(
        t.type,
        null,
        a,
        l,
        l.mode,
        n
      ), e.ref = l.ref, e.return = l, l.child = e);
    }
    if (c = e.child, !Uu(e, n)) {
      var u = c.memoizedProps;
      if (t = t.compare, t = t !== null ? t : ka, t(u, a) && e.ref === l.ref)
        return Jl(e, l, n);
    }
    return l.flags |= 1, e = wl(c, a), e.ref = l.ref, e.return = l, l.child = e;
  }
  function nd(e, l, t, a, n) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ka(c, a) && e.ref === l.ref)
        if (Me = !1, l.pendingProps = a = c, Uu(e, n))
          (e.flags & 131072) !== 0 && (Me = !0);
        else
          return l.lanes = e.lanes, Jl(e, l, n);
    }
    return Au(
      e,
      l,
      t,
      a,
      n
    );
  }
  function id(e, l, t, a) {
    var n = a.children, c = e !== null ? e.memoizedState : null;
    if (e === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | t : t, e !== null) {
          for (a = l.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~c;
        } else a = 0, l.child = null;
        return cd(
          e,
          l,
          c,
          t,
          a
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ii(
          l,
          c !== null ? c.cachePool : null
        ), c !== null ? sr(l, c) : tu(), fr(l);
      else
        return a = l.lanes = 536870912, cd(
          e,
          l,
          c !== null ? c.baseLanes | t : t,
          t,
          a
        );
    } else
      c !== null ? (ii(l, c.cachePool), sr(l, c), vt(), l.memoizedState = null) : (e !== null && ii(l, null), tu(), vt());
    return Qe(e, l, n, t), l.child;
  }
  function rn(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function cd(e, l, t, a, n) {
    var c = Wc();
    return c = c === null ? null : { parent: Ee._currentValue, pool: c }, l.memoizedState = {
      baseLanes: t,
      cachePool: c
    }, e !== null && ii(l, null), tu(), fr(l), e !== null && ha(e, l, a, !0), l.childLanes = n, null;
  }
  function bi(e, l) {
    return l = zi(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function ud(e, l, t) {
    return Vt(l, e.child, null, t), e = bi(l, l.pendingProps), e.flags |= 2, ol(l), l.memoizedState = null, e;
  }
  function Um(e, l, t) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (ne) {
        if (a.mode === "hidden")
          return e = bi(l, a), l.lanes = 536870912, rn(null, e);
        if (nu(l), (e = ge) ? (e = jo(
          e,
          zl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ut !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, Xe = l, ge = null)) : e = null, e === null) throw ft(l);
        return l.lanes = 536870912, null;
      }
      return bi(l, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var u = c.dehydrated;
      if (nu(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = ud(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Me || ha(e, l, t, !1), n = (t & e.childLanes) !== 0, Me || n) {
        if (a = pe, a !== null && (u = Ws(a, t), u !== 0 && u !== c.retryLane))
          throw c.retryLane = u, Bt(e, u), tl(a, e, u), Nu;
        Ci(), l = ud(
          e,
          l,
          t
        );
      } else
        e = c.treeContext, ge = Nl(u.nextSibling), Xe = l, ne = !0, st = null, zl = !1, e !== null && Jf(l, e), l = bi(l, a), l.flags |= 4096;
      return l;
    }
    return e = wl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function Si(e, l) {
    var t = l.ref;
    if (t === null)
      e !== null && e.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function Au(e, l, t, a, n) {
    return wt(l), t = cu(
      e,
      l,
      t,
      a,
      void 0,
      n
    ), a = uu(), e !== null && !Me ? (su(e, l, n), Jl(e, l, n)) : (ne && a && wc(l), l.flags |= 1, Qe(e, l, t, n), l.child);
  }
  function sd(e, l, t, a, n, c) {
    return wt(l), l.updateQueue = null, t = dr(
      l,
      a,
      t,
      n
    ), rr(e), a = uu(), e !== null && !Me ? (su(e, l, c), Jl(e, l, c)) : (ne && a && wc(l), l.flags |= 1, Qe(e, l, t, c), l.child);
  }
  function fd(e, l, t, a, n) {
    if (wt(l), l.stateNode === null) {
      var c = fa, u = t.contextType;
      typeof u == "object" && u !== null && (c = we(u)), c = new t(a, c), l.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = zu, l.stateNode = c, c._reactInternals = l, c = l.stateNode, c.props = a, c.state = l.memoizedState, c.refs = {}, Ic(l), u = t.contextType, c.context = typeof u == "object" && u !== null ? we(u) : fa, c.state = l.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Su(
        l,
        t,
        u,
        a
      ), c.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (u = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), u !== c.state && zu.enqueueReplaceState(c, c.state, null), nn(l, a, c, n), an(), c.state = l.memoizedState), typeof c.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (e === null) {
      c = l.stateNode;
      var s = l.memoizedProps, d = Jt(t, s);
      c.props = d;
      var p = c.context, _ = t.contextType;
      u = fa, typeof _ == "object" && _ !== null && (u = we(_));
      var T = t.getDerivedStateFromProps;
      _ = typeof T == "function" || typeof c.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, _ || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (s || p !== u) && $r(
        l,
        c,
        a,
        u
      ), dt = !1;
      var g = l.memoizedState;
      c.state = g, nn(l, a, c, n), an(), p = l.memoizedState, s || g !== p || dt ? (typeof T == "function" && (Su(
        l,
        t,
        T,
        a
      ), p = l.memoizedState), (d = dt || kr(
        l,
        t,
        d,
        a,
        g,
        p,
        u
      )) ? (_ || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = p), c.props = a, c.state = p, c.context = u, a = d) : (typeof c.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      c = l.stateNode, Pc(e, l), u = l.memoizedProps, _ = Jt(t, u), c.props = _, T = l.pendingProps, g = c.context, p = t.contextType, d = fa, typeof p == "object" && p !== null && (d = we(p)), s = t.getDerivedStateFromProps, (p = typeof s == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (u !== T || g !== d) && $r(
        l,
        c,
        a,
        d
      ), dt = !1, g = l.memoizedState, c.state = g, nn(l, a, c, n), an();
      var b = l.memoizedState;
      u !== T || g !== b || dt || e !== null && e.dependencies !== null && ai(e.dependencies) ? (typeof s == "function" && (Su(
        l,
        t,
        s,
        a
      ), b = l.memoizedState), (_ = dt || kr(
        l,
        t,
        _,
        a,
        g,
        b,
        d
      ) || e !== null && e.dependencies !== null && ai(e.dependencies)) ? (p || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, b, d), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        a,
        b,
        d
      )), typeof c.componentDidUpdate == "function" && (l.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (l.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), c.props = a, c.state = b, c.context = d, a = _) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (l.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (l.flags |= 1024), a = !1);
    }
    return c = a, Si(e, l), a = (l.flags & 128) !== 0, c || a ? (c = l.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : c.render(), l.flags |= 1, e !== null && a ? (l.child = Vt(
      l,
      e.child,
      null,
      n
    ), l.child = Vt(
      l,
      null,
      t,
      n
    )) : Qe(e, l, t, n), l.memoizedState = c.state, e = l.child) : e = Jl(
      e,
      l,
      n
    ), e;
  }
  function rd(e, l, t, a) {
    return Gt(), l.flags |= 256, Qe(e, l, t, a), l.child;
  }
  var Eu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Tu(e) {
    return { baseLanes: e, cachePool: Pf() };
  }
  function Mu(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= ml), e;
  }
  function dd(e, l, t) {
    var a = l.pendingProps, n = !1, c = (l.flags & 128) !== 0, u;
    if ((u = c) || (u = e !== null && e.memoizedState === null ? !1 : (Ne.current & 2) !== 0), u && (n = !0, l.flags &= -129), u = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (ne) {
        if (n ? mt(l) : vt(), (e = ge) ? (e = jo(
          e,
          zl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ut !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, Xe = l, ge = null)) : e = null, e === null) throw ft(l);
        return ds(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (vt(), n = l.mode, s = zi(
        { mode: "hidden", children: s },
        n
      ), a = Yt(
        a,
        n,
        t,
        null
      ), s.return = l, a.return = l, s.sibling = a, l.child = s, a = l.child, a.memoizedState = Tu(t), a.childLanes = Mu(
        e,
        u,
        t
      ), l.memoizedState = Eu, rn(null, a)) : (mt(l), Ou(l, s));
    }
    var d = e.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (c)
        l.flags & 256 ? (mt(l), l.flags &= -257, l = Du(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (vt(), l.child = e.child, l.flags |= 128, l = null) : (vt(), s = a.fallback, n = l.mode, a = zi(
          { mode: "visible", children: a.children },
          n
        ), s = Yt(
          s,
          n,
          t,
          null
        ), s.flags |= 2, a.return = l, s.return = l, a.sibling = s, l.child = a, Vt(
          l,
          e.child,
          null,
          t
        ), a = l.child, a.memoizedState = Tu(t), a.childLanes = Mu(
          e,
          u,
          t
        ), l.memoizedState = Eu, l = rn(null, a));
      else if (mt(l), ds(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset, u) var p = u.dgst;
        u = p, a = Error(r(419)), a.stack = "", a.digest = u, Fa({ value: a, source: null, stack: null }), l = Du(
          e,
          l,
          t
        );
      } else if (Me || ha(e, l, t, !1), u = (t & e.childLanes) !== 0, Me || u) {
        if (u = pe, u !== null && (a = Ws(u, t), a !== 0 && a !== d.retryLane))
          throw d.retryLane = a, Bt(e, a), tl(u, e, a), Nu;
        rs(s) || Ci(), l = Du(
          e,
          l,
          t
        );
      } else
        rs(s) ? (l.flags |= 192, l.child = e.child, l = null) : (e = d.treeContext, ge = Nl(
          s.nextSibling
        ), Xe = l, ne = !0, st = null, zl = !1, e !== null && Jf(l, e), l = Ou(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (vt(), s = a.fallback, n = l.mode, d = e.child, p = d.sibling, a = wl(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 65011712, p !== null ? s = wl(
      p,
      s
    ) : (s = Yt(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = l, a.return = l, a.sibling = s, l.child = a, rn(null, a), a = l.child, s = e.child.memoizedState, s === null ? s = Tu(t) : (n = s.cachePool, n !== null ? (d = Ee._currentValue, n = n.parent !== d ? { parent: d, pool: d } : n) : n = Pf(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Mu(
      e,
      u,
      t
    ), l.memoizedState = Eu, rn(e.child, a)) : (mt(l), t = e.child, e = t.sibling, t = wl(t, {
      mode: "visible",
      children: a.children
    }), t.return = l, t.sibling = null, e !== null && (u = l.deletions, u === null ? (l.deletions = [e], l.flags |= 16) : u.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function Ou(e, l) {
    return l = zi(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function zi(e, l) {
    return e = rl(22, e, null, l), e.lanes = 0, e;
  }
  function Du(e, l, t) {
    return Vt(l, e.child, null, t), e = Ou(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function od(e, l, t) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l), Kc(e.return, l, t);
  }
  function Cu(e, l, t, a, n, c) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: t,
      tailMode: n,
      treeForkCount: c
    } : (u.isBackwards = l, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = t, u.tailMode = n, u.treeForkCount = c);
  }
  function hd(e, l, t) {
    var a = l.pendingProps, n = a.revealOrder, c = a.tail;
    a = a.children;
    var u = Ne.current, s = (u & 2) !== 0;
    if (s ? (u = u & 1 | 2, l.flags |= 128) : u &= 1, U(Ne, u), Qe(e, l, a, t), a = ne ? Wa : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && od(e, t, l);
        else if (e.tag === 19)
          od(e, t, l);
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
          e = t.alternate, e !== null && di(e) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = l.child, l.child = null) : (n = t.sibling, t.sibling = null), Cu(
          l,
          !1,
          n,
          t,
          c,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = l.child, l.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && di(e) === null) {
            l.child = n;
            break;
          }
          e = n.sibling, n.sibling = t, t = n, n = e;
        }
        Cu(
          l,
          !0,
          t,
          null,
          c,
          a
        );
        break;
      case "together":
        Cu(
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
        if (ha(
          e,
          l,
          t,
          !1
        ), (t & l.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && l.child !== e.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (e = l.child, t = wl(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = wl(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function Uu(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ai(e)));
  }
  function Rm(e, l, t) {
    switch (l.tag) {
      case 3:
        V(l, l.stateNode.containerInfo), rt(l, Ee, e.memoizedState.cache), Gt();
        break;
      case 27:
      case 5:
        Ot(l);
        break;
      case 4:
        V(l, l.stateNode.containerInfo);
        break;
      case 10:
        rt(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, nu(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (mt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? dd(e, l, t) : (mt(l), e = Jl(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        mt(l);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (t & l.childLanes) !== 0, a || (ha(
          e,
          l,
          t,
          !1
        ), a = (t & l.childLanes) !== 0), n) {
          if (a)
            return hd(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(Ne, Ne.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, id(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        rt(l, Ee, e.memoizedState.cache);
    }
    return Jl(e, l, t);
  }
  function md(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        Me = !0;
      else {
        if (!Uu(e, t) && (l.flags & 128) === 0)
          return Me = !1, Rm(
            e,
            l,
            t
          );
        Me = (e.flags & 131072) !== 0;
      }
    else
      Me = !1, ne && (l.flags & 1048576) !== 0 && Kf(l, Wa, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var a = l.pendingProps;
          if (e = Zt(l.elementType), l.type = e, typeof e == "function")
            Yc(e) ? (a = Jt(e, a), l.tag = 1, l = fd(
              null,
              l,
              e,
              a,
              t
            )) : (l.tag = 0, l = Au(
              null,
              l,
              e,
              a,
              t
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Ke) {
                l.tag = 11, l = td(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              } else if (n === W) {
                l.tag = 14, l = ad(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              }
            }
            throw l = il(e) || e, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return Au(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return a = l.type, n = Jt(
          a,
          l.pendingProps
        ), fd(
          e,
          l,
          a,
          n,
          t
        );
      case 3:
        e: {
          if (V(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = l.pendingProps;
          var c = l.memoizedState;
          n = c.element, Pc(e, l), nn(l, a, null, t);
          var u = l.memoizedState;
          if (a = u.cache, rt(l, Ee, a), a !== c.cache && Jc(
            l,
            [Ee],
            t,
            !0
          ), an(), a = u.element, c.isDehydrated)
            if (c = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, l.updateQueue.baseState = c, l.memoizedState = c, l.flags & 256) {
              l = rd(
                e,
                l,
                a,
                t
              );
              break e;
            } else if (a !== n) {
              n = jl(
                Error(r(424)),
                l
              ), Fa(n), l = rd(
                e,
                l,
                a,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ge = Nl(e.firstChild), Xe = l, ne = !0, st = null, zl = !0, t = ir(
                l,
                null,
                a,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Gt(), a === n) {
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
        return Si(e, l), e === null ? (t = Ao(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : ne || (t = l.type, e = l.pendingProps, a = Gi(
          F.current
        ).createElement(t), a[Ge] = l, a[We] = e, Ze(a, t, e), qe(a), l.stateNode = a) : l.memoizedState = Ao(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ot(l), e === null && ne && (a = l.stateNode = zo(
          l.type,
          l.pendingProps,
          F.current
        ), Xe = l, zl = !0, n = ge, zt(l.type) ? (os = n, ge = Nl(a.firstChild)) : ge = n), Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), Si(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && ne && ((n = a = ge) && (a = rv(
          a,
          l.type,
          l.pendingProps,
          zl
        ), a !== null ? (l.stateNode = a, Xe = l, ge = Nl(a.firstChild), zl = !1, n = !0) : n = !1), n || ft(l)), Ot(l), n = l.type, c = l.pendingProps, u = e !== null ? e.memoizedProps : null, a = c.children, us(n, c) ? a = null : u !== null && us(n, u) && (l.flags |= 32), l.memoizedState !== null && (n = cu(
          e,
          l,
          Nm,
          null,
          null,
          t
        ), Nn._currentValue = n), Si(e, l), Qe(e, l, a, t), l.child;
      case 6:
        return e === null && ne && ((e = t = ge) && (t = dv(
          t,
          l.pendingProps,
          zl
        ), t !== null ? (l.stateNode = t, Xe = l, ge = null, e = !0) : e = !1), e || ft(l)), null;
      case 13:
        return dd(e, l, t);
      case 4:
        return V(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, e === null ? l.child = Vt(
          l,
          null,
          a,
          t
        ) : Qe(e, l, a, t), l.child;
      case 11:
        return td(
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
        return a = l.pendingProps, rt(l, l.type, a.value), Qe(e, l, a.children, t), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, wt(l), n = we(n), a = a(n), l.flags |= 1, Qe(e, l, a, t), l.child;
      case 14:
        return ad(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return nd(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return hd(e, l, t);
      case 31:
        return Um(e, l, t);
      case 22:
        return id(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return wt(l), a = we(Ee), e === null ? (n = Wc(), n === null && (n = pe, c = kc(), n.pooledCache = c, c.refCount++, c !== null && (n.pooledCacheLanes |= t), n = c), l.memoizedState = { parent: a, cache: n }, Ic(l), rt(l, Ee, n)) : ((e.lanes & t) !== 0 && (Pc(e, l), nn(l, null, null, t), an()), n = e.memoizedState, c = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), rt(l, Ee, a)) : (a = c.cache, rt(l, Ee, a), a !== n.cache && Jc(
          l,
          [Ee],
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
    throw Error(r(156, l.tag));
  }
  function kl(e) {
    e.flags |= 4;
  }
  function Ru(e, l, t, a, n) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (wd()) e.flags |= 8192;
        else
          throw Lt = ui, Fc;
    } else e.flags &= -16777217;
  }
  function vd(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Do(l))
      if (wd()) e.flags |= 8192;
      else
        throw Lt = ui, Fc;
  }
  function _i(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? Js() : 536870912, e.lanes |= l, Na |= l);
  }
  function dn(e, l) {
    if (!ne)
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
  function xe(e) {
    var l = e.alternate !== null && e.alternate.child === e.child, t = 0, a = 0;
    if (l)
      for (var n = e.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        t |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = t, l;
  }
  function qm(e, l, t) {
    var a = l.pendingProps;
    switch (Qc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xe(l), null;
      case 1:
        return xe(l), null;
      case 3:
        return t = l.stateNode, a = null, e !== null && (a = e.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Ll(Ee), I(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (oa(l) ? kl(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Lc())), xe(l), null;
      case 26:
        var n = l.type, c = l.memoizedState;
        return e === null ? (kl(l), c !== null ? (xe(l), vd(l, c)) : (xe(l), Ru(
          l,
          n,
          null,
          a,
          t
        ))) : c ? c !== e.memoizedState ? (kl(l), xe(l), vd(l, c)) : (xe(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== a && kl(l), xe(l), Ru(
          l,
          n,
          e,
          a,
          t
        )), null;
      case 27:
        if (qn(l), t = F.current, n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xe(l), null;
          }
          e = H.current, oa(l) ? kf(l) : (e = zo(n, a, t), l.stateNode = e, kl(l));
        }
        return xe(l), null;
      case 5:
        if (qn(l), n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xe(l), null;
          }
          if (c = H.current, oa(l))
            kf(l);
          else {
            var u = Gi(
              F.current
            );
            switch (c) {
              case 1:
                c = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                c = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    c = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    c = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    c = u.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof a.is == "string" ? u.createElement("select", {
                      is: a.is
                    }) : u.createElement("select"), a.multiple ? c.multiple = !0 : a.size && (c.size = a.size);
                    break;
                  default:
                    c = typeof a.is == "string" ? u.createElement(n, { is: a.is }) : u.createElement(n);
                }
            }
            c[Ge] = l, c[We] = a;
            e: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                c.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === l) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            l.stateNode = c;
            e: switch (Ze(c, n, a), n) {
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
        return xe(l), Ru(
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
            throw Error(r(166));
          if (e = F.current, oa(l)) {
            if (e = l.stateNode, t = l.memoizedProps, a = null, n = Xe, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ge] = l, e = !!(e.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || oo(e.nodeValue, t)), e || ft(l, !0);
          } else
            e = Gi(e).createTextNode(
              a
            ), e[Ge] = l, l.stateNode = e;
        }
        return xe(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (a = oa(l), t !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ge] = l;
            } else
              Gt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xe(l), e = !1;
          } else
            t = Lc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (ol(l), l) : (ol(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return xe(l), null;
      case 13:
        if (a = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = oa(l), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ge] = l;
            } else
              Gt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xe(l), n = !1;
          } else
            n = Lc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (ol(l), l) : (ol(l), null);
        }
        return ol(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = a !== null, e = e !== null && e.memoizedState !== null, t && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== n && (a.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), _i(l, l.updateQueue), xe(l), null);
      case 4:
        return I(), e === null && ts(l.stateNode.containerInfo), xe(l), null;
      case 10:
        return Ll(l.type), xe(l), null;
      case 19:
        if (E(Ne), a = l.memoizedState, a === null) return xe(l), null;
        if (n = (l.flags & 128) !== 0, c = a.rendering, c === null)
          if (n) dn(a, !1);
          else {
            if (ze !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (c = di(e), c !== null) {
                  for (l.flags |= 128, dn(a, !1), e = c.updateQueue, l.updateQueue = e, _i(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    Zf(t, e), t = t.sibling;
                  return U(
                    Ne,
                    Ne.current & 1 | 2
                  ), ne && Ql(l, a.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            a.tail !== null && cl() > Mi && (l.flags |= 128, n = !0, dn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = di(c), e !== null) {
              if (l.flags |= 128, n = !0, e = e.updateQueue, l.updateQueue = e, _i(l, e), dn(a, !0), a.tail === null && a.tailMode === "hidden" && !c.alternate && !ne)
                return xe(l), null;
            } else
              2 * cl() - a.renderingStartTime > Mi && t !== 536870912 && (l.flags |= 128, n = !0, dn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (c.sibling = l.child, l.child = c) : (e = a.last, e !== null ? e.sibling = c : l.child = c, a.last = c);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = cl(), e.sibling = null, t = Ne.current, U(
          Ne,
          n ? t & 1 | 2 : t & 1
        ), ne && Ql(l, a.treeForkCount), e) : (xe(l), null);
      case 22:
      case 23:
        return ol(l), au(), a = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (xe(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : xe(l), t = l.updateQueue, t !== null && _i(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== t && (l.flags |= 2048), e !== null && E(Qt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), Ll(Ee), xe(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function Hm(e, l) {
    switch (Qc(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return Ll(Ee), I(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return qn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (ol(l), l.alternate === null)
            throw Error(r(340));
          Gt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (ol(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Gt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return E(Ne), null;
      case 4:
        return I(), null;
      case 10:
        return Ll(l.type), null;
      case 22:
      case 23:
        return ol(l), au(), e !== null && E(Qt), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return Ll(Ee), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yd(e, l) {
    switch (Qc(l), l.tag) {
      case 3:
        Ll(Ee), I();
        break;
      case 26:
      case 27:
      case 5:
        qn(l);
        break;
      case 4:
        I();
        break;
      case 31:
        l.memoizedState !== null && ol(l);
        break;
      case 13:
        ol(l);
        break;
      case 19:
        E(Ne);
        break;
      case 10:
        Ll(l.type);
        break;
      case 22:
      case 23:
        ol(l), au(), e !== null && E(Qt);
        break;
      case 24:
        Ll(Ee);
    }
  }
  function on(e, l) {
    try {
      var t = l.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        t = n;
        do {
          if ((t.tag & e) === e) {
            a = void 0;
            var c = t.create, u = t.inst;
            a = c(), u.destroy = a;
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (s) {
      oe(l, l.return, s);
    }
  }
  function yt(e, l, t) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var c = n.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst, s = u.destroy;
            if (s !== void 0) {
              u.destroy = void 0, n = l;
              var d = t, p = s;
              try {
                p();
              } catch (_) {
                oe(
                  n,
                  d,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (_) {
      oe(l, l.return, _);
    }
  }
  function pd(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        ur(l, t);
      } catch (a) {
        oe(e, e.return, a);
      }
    }
  }
  function gd(e, l, t) {
    t.props = Jt(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (a) {
      oe(e, l, a);
    }
  }
  function hn(e, l) {
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
      oe(e, l, n);
    }
  }
  function ql(e, l) {
    var t = e.ref, a = e.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          oe(e, l, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          oe(e, l, n);
        }
      else t.current = null;
  }
  function xd(e) {
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
      oe(e, e.return, n);
    }
  }
  function qu(e, l, t) {
    try {
      var a = e.stateNode;
      nv(a, e.type, t, l), a[We] = l;
    } catch (n) {
      oe(e, e.return, n);
    }
  }
  function jd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zt(e.type) || e.tag === 4;
  }
  function Hu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && zt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bu(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = Gl));
    else if (a !== 4 && (a === 27 && zt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (Bu(e, l, t), e = e.sibling; e !== null; )
        Bu(e, l, t), e = e.sibling;
  }
  function Ni(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (a !== 4 && (a === 27 && zt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (Ni(e, l, t), e = e.sibling; e !== null; )
        Ni(e, l, t), e = e.sibling;
  }
  function bd(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var a = e.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Ze(l, a, t), l[Ge] = e, l[We] = t;
    } catch (c) {
      oe(e, e.return, c);
    }
  }
  var $l = !1, Oe = !1, Yu = !1, Sd = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function Bm(e, l) {
    if (e = e.containerInfo, is = Ki, e = Rf(e), Dc(e)) {
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
            var n = a.anchorOffset, c = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, c.nodeType;
            } catch {
              t = null;
              break e;
            }
            var u = 0, s = -1, d = -1, p = 0, _ = 0, T = e, g = null;
            l: for (; ; ) {
              for (var b; T !== t || n !== 0 && T.nodeType !== 3 || (s = u + n), T !== c || a !== 0 && T.nodeType !== 3 || (d = u + a), T.nodeType === 3 && (u += T.nodeValue.length), (b = T.firstChild) !== null; )
                g = T, T = b;
              for (; ; ) {
                if (T === e) break l;
                if (g === t && ++p === n && (s = u), g === c && ++_ === a && (d = u), (b = T.nextSibling) !== null) break;
                T = g, g = T.parentNode;
              }
              T = b;
            }
            t = s === -1 || d === -1 ? null : { start: s, end: d };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (cs = { focusedElem: e, selectionRange: t }, Ki = !1, He = l; He !== null; )
      if (l = He, e = l.child, (l.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = l, He = e;
      else
        for (; He !== null; ) {
          switch (l = He, c = l.alternate, e = l.flags, l.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (t = 0; t < e.length; t++)
                  n = e[t], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, t = l, n = c.memoizedProps, c = c.memoizedState, a = t.stateNode;
                try {
                  var q = Jt(
                    t.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    q,
                    c
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (w) {
                  oe(
                    t,
                    t.return,
                    w
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
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = l.sibling, e !== null) {
            e.return = l.return, He = e;
            break;
          }
          He = l.return;
        }
  }
  function zd(e, l, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fl(e, t), a & 4 && on(5, t);
        break;
      case 1:
        if (Fl(e, t), a & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (u) {
              oe(t, t.return, u);
            }
          else {
            var n = Jt(
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
            } catch (u) {
              oe(
                t,
                t.return,
                u
              );
            }
          }
        a & 64 && pd(t), a & 512 && hn(t, t.return);
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
            ur(e, l);
          } catch (u) {
            oe(t, t.return, u);
          }
        }
        break;
      case 27:
        l === null && a & 4 && bd(t);
      case 26:
      case 5:
        Fl(e, t), l === null && a & 4 && xd(t), a & 512 && hn(t, t.return);
        break;
      case 12:
        Fl(e, t);
        break;
      case 31:
        Fl(e, t), a & 4 && Ad(e, t);
        break;
      case 13:
        Fl(e, t), a & 4 && Ed(e, t), a & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Km.bind(
          null,
          t
        ), ov(e, t))));
        break;
      case 22:
        if (a = t.memoizedState !== null || $l, !a) {
          l = l !== null && l.memoizedState !== null || Oe, n = $l;
          var c = Oe;
          $l = a, (Oe = l) && !c ? Il(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Fl(e, t), $l = n, Oe = c;
        }
        break;
      case 30:
        break;
      default:
        Fl(e, t);
    }
  }
  function _d(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, _d(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && mc(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Ie = !1;
  function Wl(e, l, t) {
    for (t = t.child; t !== null; )
      Nd(e, l, t), t = t.sibling;
  }
  function Nd(e, l, t) {
    if (ul && typeof ul.onCommitFiberUnmount == "function")
      try {
        ul.onCommitFiberUnmount(Ha, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Oe || ql(t, l), Wl(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Oe || ql(t, l);
        var a = je, n = Ie;
        zt(t.type) && (je = t.stateNode, Ie = !1), Wl(
          e,
          l,
          t
        ), Sn(t.stateNode), je = a, Ie = n;
        break;
      case 5:
        Oe || ql(t, l);
      case 6:
        if (a = je, n = Ie, je = null, Wl(
          e,
          l,
          t
        ), je = a, Ie = n, je !== null)
          if (Ie)
            try {
              (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(t.stateNode);
            } catch (c) {
              oe(
                t,
                l,
                c
              );
            }
          else
            try {
              je.removeChild(t.stateNode);
            } catch (c) {
              oe(
                t,
                l,
                c
              );
            }
        break;
      case 18:
        je !== null && (Ie ? (e = je, go(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), Ua(e)) : go(je, t.stateNode));
        break;
      case 4:
        a = je, n = Ie, je = t.stateNode.containerInfo, Ie = !0, Wl(
          e,
          l,
          t
        ), je = a, Ie = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt(2, t, l), Oe || yt(4, t, l), Wl(
          e,
          l,
          t
        );
        break;
      case 1:
        Oe || (ql(t, l), a = t.stateNode, typeof a.componentWillUnmount == "function" && gd(
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
        Oe = (a = Oe) || t.memoizedState !== null, Wl(
          e,
          l,
          t
        ), Oe = a;
        break;
      default:
        Wl(
          e,
          l,
          t
        );
    }
  }
  function Ad(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ua(e);
      } catch (t) {
        oe(l, l.return, t);
      }
    }
  }
  function Ed(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ua(e);
      } catch (t) {
        oe(l, l.return, t);
      }
  }
  function Ym(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var l = e.stateNode;
        return l === null && (l = e.stateNode = new Sd()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new Sd()), l;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ai(e, l) {
    var t = Ym(e);
    l.forEach(function(a) {
      if (!t.has(a)) {
        t.add(a);
        var n = Jm.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Pe(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a], c = e, u = l, s = u;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (zt(s.type)) {
                je = s.stateNode, Ie = !1;
                break e;
              }
              break;
            case 5:
              je = s.stateNode, Ie = !1;
              break e;
            case 3:
            case 4:
              je = s.stateNode.containerInfo, Ie = !0;
              break e;
          }
          s = s.return;
        }
        if (je === null) throw Error(r(160));
        Nd(c, u, n), je = null, Ie = !1, c = n.alternate, c !== null && (c.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Td(l, e), l = l.sibling;
  }
  var Ol = null;
  function Td(e, l) {
    var t = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pe(l, e), el(e), a & 4 && (yt(3, e, e.return), on(3, e), yt(5, e, e.return));
        break;
      case 1:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || ql(t, t.return)), a & 64 && $l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = Ol;
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || ql(t, t.return)), a & 4) {
          var c = t !== null ? t.memoizedState : null;
          if (a = e.memoizedState, t === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, t = e.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      c = n.getElementsByTagName("title")[0], (!c || c[Ga] || c[Ge] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = n.createElement(a), n.head.insertBefore(
                        c,
                        n.querySelector("head > title")
                      )), Ze(c, a, t), c[Ge] = e, qe(c), a = c;
                      break e;
                    case "link":
                      var u = Mo(
                        "link",
                        "href",
                        n
                      ).get(a + (t.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (c = u[s], c.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && c.getAttribute("rel") === (t.rel == null ? null : t.rel) && c.getAttribute("title") === (t.title == null ? null : t.title) && c.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            u.splice(s, 1);
                            break l;
                          }
                      }
                      c = n.createElement(a), Ze(c, a, t), n.head.appendChild(c);
                      break;
                    case "meta":
                      if (u = Mo(
                        "meta",
                        "content",
                        n
                      ).get(a + (t.content || ""))) {
                        for (s = 0; s < u.length; s++)
                          if (c = u[s], c.getAttribute("content") === (t.content == null ? null : "" + t.content) && c.getAttribute("name") === (t.name == null ? null : t.name) && c.getAttribute("property") === (t.property == null ? null : t.property) && c.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && c.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            u.splice(s, 1);
                            break l;
                          }
                      }
                      c = n.createElement(a), Ze(c, a, t), n.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  c[Ge] = e, qe(c), a = c;
                }
                e.stateNode = a;
              } else
                Oo(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = To(
                n,
                a,
                e.memoizedProps
              );
          else
            c !== a ? (c === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : c.count--, a === null ? Oo(
              n,
              e.type,
              e.stateNode
            ) : To(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && qu(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || ql(t, t.return)), t !== null && a & 4 && qu(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || ql(t, t.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ta(n, "");
          } catch (q) {
            oe(e, e.return, q);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, qu(
          e,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Yu = !0);
        break;
      case 6:
        if (Pe(l, e), el(e), a & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          a = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = a;
          } catch (q) {
            oe(e, e.return, q);
          }
        }
        break;
      case 3:
        if (Qi = null, n = Ol, Ol = Xi(l.containerInfo), Pe(l, e), Ol = n, el(e), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ua(l.containerInfo);
          } catch (q) {
            oe(e, e.return, q);
          }
        Yu && (Yu = !1, Md(e));
        break;
      case 4:
        a = Ol, Ol = Xi(
          e.stateNode.containerInfo
        ), Pe(l, e), el(e), Ol = a;
        break;
      case 12:
        Pe(l, e), el(e);
        break;
      case 31:
        Pe(l, e), el(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ai(e, a)));
        break;
      case 13:
        Pe(l, e), el(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ti = cl()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ai(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var d = t !== null && t.memoizedState !== null, p = $l, _ = Oe;
        if ($l = p || n, Oe = _ || d, Pe(l, e), Oe = _, $l = p, el(e), a & 8192)
          e: for (l = e.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (t === null || d || $l || Oe || kt(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                d = t = l;
                try {
                  if (c = d.stateNode, n)
                    u = c.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = d.stateNode;
                    var T = d.memoizedProps.style, g = T != null && T.hasOwnProperty("display") ? T.display : null;
                    s.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (q) {
                  oe(d, d.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = n ? "" : d.memoizedProps;
                } catch (q) {
                  oe(d, d.return, q);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                d = l;
                try {
                  var b = d.stateNode;
                  n ? xo(b, !0) : xo(d.stateNode, !1);
                } catch (q) {
                  oe(d, d.return, q);
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
        a & 4 && (a = e.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, Ai(e, t))));
        break;
      case 19:
        Pe(l, e), el(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ai(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pe(l, e), el(e);
    }
  }
  function el(e) {
    var l = e.flags;
    if (l & 2) {
      try {
        for (var t, a = e.return; a !== null; ) {
          if (jd(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode, c = Hu(e);
            Ni(e, c, n);
            break;
          case 5:
            var u = t.stateNode;
            t.flags & 32 && (ta(u, ""), t.flags &= -33);
            var s = Hu(e);
            Ni(e, s, u);
            break;
          case 3:
          case 4:
            var d = t.stateNode.containerInfo, p = Hu(e);
            Bu(
              e,
              p,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        oe(e, e.return, _);
      }
      e.flags &= -3;
    }
    l & 4096 && (e.flags &= -4097);
  }
  function Md(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        Md(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function Fl(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        zd(e, l.alternate, l), l = l.sibling;
  }
  function kt(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yt(4, l, l.return), kt(l);
          break;
        case 1:
          ql(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && gd(
            l,
            l.return,
            t
          ), kt(l);
          break;
        case 27:
          Sn(l.stateNode);
        case 26:
        case 5:
          ql(l, l.return), kt(l);
          break;
        case 22:
          l.memoizedState === null && kt(l);
          break;
        case 30:
          kt(l);
          break;
        default:
          kt(l);
      }
      e = e.sibling;
    }
  }
  function Il(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = e, c = l, u = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Il(
            n,
            c,
            t
          ), on(4, c);
          break;
        case 1:
          if (Il(
            n,
            c,
            t
          ), a = c, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (p) {
              oe(a, a.return, p);
            }
          if (a = c, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  cr(d[n], s);
            } catch (p) {
              oe(a, a.return, p);
            }
          }
          t && u & 64 && pd(c), hn(c, c.return);
          break;
        case 27:
          bd(c);
        case 26:
        case 5:
          Il(
            n,
            c,
            t
          ), t && a === null && u & 4 && xd(c), hn(c, c.return);
          break;
        case 12:
          Il(
            n,
            c,
            t
          );
          break;
        case 31:
          Il(
            n,
            c,
            t
          ), t && u & 4 && Ad(n, c);
          break;
        case 13:
          Il(
            n,
            c,
            t
          ), t && u & 4 && Ed(n, c);
          break;
        case 22:
          c.memoizedState === null && Il(
            n,
            c,
            t
          ), hn(c, c.return);
          break;
        case 30:
          break;
        default:
          Il(
            n,
            c,
            t
          );
      }
      l = l.sibling;
    }
  }
  function Gu(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Ia(t));
  }
  function Xu(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ia(e));
  }
  function Dl(e, l, t, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Od(
          e,
          l,
          t,
          a
        ), l = l.sibling;
  }
  function Od(e, l, t, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Dl(
          e,
          l,
          t,
          a
        ), n & 2048 && on(9, l);
        break;
      case 1:
        Dl(
          e,
          l,
          t,
          a
        );
        break;
      case 3:
        Dl(
          e,
          l,
          t,
          a
        ), n & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ia(e)));
        break;
      case 12:
        if (n & 2048) {
          Dl(
            e,
            l,
            t,
            a
          ), e = l.stateNode;
          try {
            var c = l.memoizedProps, u = c.id, s = c.onPostCommit;
            typeof s == "function" && s(
              u,
              l.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (d) {
            oe(l, l.return, d);
          }
        } else
          Dl(
            e,
            l,
            t,
            a
          );
        break;
      case 31:
        Dl(
          e,
          l,
          t,
          a
        );
        break;
      case 13:
        Dl(
          e,
          l,
          t,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = l.stateNode, u = l.alternate, l.memoizedState !== null ? c._visibility & 2 ? Dl(
          e,
          l,
          t,
          a
        ) : mn(e, l) : c._visibility & 2 ? Dl(
          e,
          l,
          t,
          a
        ) : (c._visibility |= 2, Sa(
          e,
          l,
          t,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Gu(u, l);
        break;
      case 24:
        Dl(
          e,
          l,
          t,
          a
        ), n & 2048 && Xu(l.alternate, l);
        break;
      default:
        Dl(
          e,
          l,
          t,
          a
        );
    }
  }
  function Sa(e, l, t, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var c = e, u = l, s = t, d = a, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            c,
            u,
            s,
            d,
            n
          ), on(8, u);
          break;
        case 23:
          break;
        case 22:
          var _ = u.stateNode;
          u.memoizedState !== null ? _._visibility & 2 ? Sa(
            c,
            u,
            s,
            d,
            n
          ) : mn(
            c,
            u
          ) : (_._visibility |= 2, Sa(
            c,
            u,
            s,
            d,
            n
          )), n && p & 2048 && Gu(
            u.alternate,
            u
          );
          break;
        case 24:
          Sa(
            c,
            u,
            s,
            d,
            n
          ), n && p & 2048 && Xu(u.alternate, u);
          break;
        default:
          Sa(
            c,
            u,
            s,
            d,
            n
          );
      }
      l = l.sibling;
    }
  }
  function mn(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            mn(t, a), n & 2048 && Gu(
              a.alternate,
              a
            );
            break;
          case 24:
            mn(t, a), n & 2048 && Xu(a.alternate, a);
            break;
          default:
            mn(t, a);
        }
        l = l.sibling;
      }
  }
  var vn = 8192;
  function za(e, l, t) {
    if (e.subtreeFlags & vn)
      for (e = e.child; e !== null; )
        Dd(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function Dd(e, l, t) {
    switch (e.tag) {
      case 26:
        za(
          e,
          l,
          t
        ), e.flags & vn && e.memoizedState !== null && _v(
          t,
          Ol,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        za(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var a = Ol;
        Ol = Xi(e.stateNode.containerInfo), za(
          e,
          l,
          t
        ), Ol = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = vn, vn = 16777216, za(
          e,
          l,
          t
        ), vn = a) : za(
          e,
          l,
          t
        ));
        break;
      default:
        za(
          e,
          l,
          t
        );
    }
  }
  function Cd(e) {
    var l = e.alternate;
    if (l !== null && (e = l.child, e !== null)) {
      l.child = null;
      do
        l = e.sibling, e.sibling = null, e = l;
      while (e !== null);
    }
  }
  function yn(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          He = a, Rd(
            a,
            e
          );
        }
      Cd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ud(e), e = e.sibling;
  }
  function Ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yn(e), e.flags & 2048 && yt(9, e, e.return);
        break;
      case 3:
        yn(e);
        break;
      case 12:
        yn(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, Ei(e)) : yn(e);
        break;
      default:
        yn(e);
    }
  }
  function Ei(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          He = a, Rd(
            a,
            e
          );
        }
      Cd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          yt(8, l, l.return), Ei(l);
          break;
        case 22:
          t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, Ei(l));
          break;
        default:
          Ei(l);
      }
      e = e.sibling;
    }
  }
  function Rd(e, l) {
    for (; He !== null; ) {
      var t = He;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          yt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(t.memoizedState.cache);
      }
      if (a = t.child, a !== null) a.return = t, He = a;
      else
        e: for (t = e; He !== null; ) {
          a = He;
          var n = a.sibling, c = a.return;
          if (_d(a), a === t) {
            He = null;
            break e;
          }
          if (n !== null) {
            n.return = c, He = n;
            break e;
          }
          He = c;
        }
    }
  }
  var Gm = {
    getCacheForType: function(e) {
      var l = we(Ee), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return we(Ee).controller.signal;
    }
  }, Xm = typeof WeakMap == "function" ? WeakMap : Map, fe = 0, pe = null, P = null, te = 0, de = 0, hl = null, pt = !1, _a = !1, wu = !1, Pl = 0, ze = 0, gt = 0, $t = 0, Qu = 0, ml = 0, Na = 0, pn = null, ll = null, Zu = !1, Ti = 0, qd = 0, Mi = 1 / 0, Oi = null, xt = null, Ue = 0, jt = null, Aa = null, et = 0, Lu = 0, Vu = null, Hd = null, gn = 0, Ku = null;
  function vl() {
    return (fe & 2) !== 0 && te !== 0 ? te & -te : z.T !== null ? Iu() : Fs();
  }
  function Bd() {
    if (ml === 0)
      if ((te & 536870912) === 0 || ne) {
        var e = Yn;
        Yn <<= 1, (Yn & 3932160) === 0 && (Yn = 262144), ml = e;
      } else ml = 536870912;
    return e = dl.current, e !== null && (e.flags |= 32), ml;
  }
  function tl(e, l, t) {
    (e === pe && (de === 2 || de === 9) || e.cancelPendingCommit !== null) && (Ea(e, 0), bt(
      e,
      te,
      ml,
      !1
    )), Ya(e, t), ((fe & 2) === 0 || e !== pe) && (e === pe && ((fe & 2) === 0 && ($t |= t), ze === 4 && bt(
      e,
      te,
      ml,
      !1
    )), Hl(e));
  }
  function Yd(e, l, t) {
    if ((fe & 6) !== 0) throw Error(r(327));
    var a = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || Ba(e, l), n = a ? Zm(e, l) : ku(e, l, !0), c = a;
    do {
      if (n === 0) {
        _a && !a && bt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, c && !wm(t)) {
          n = ku(e, l, !1), c = !1;
          continue;
        }
        if (n === 2) {
          if (c = l, e.errorRecoveryDisabledLanes & c)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            l = u;
            e: {
              var s = e;
              n = pn;
              var d = s.current.memoizedState.isDehydrated;
              if (d && (Ea(s, u).flags |= 256), u = ku(
                s,
                u,
                !1
              ), u !== 2) {
                if (wu && !d) {
                  s.errorRecoveryDisabledLanes |= c, $t |= c, n = 4;
                  break e;
                }
                c = ll, ll = n, c !== null && (ll === null ? ll = c : ll.push.apply(
                  ll,
                  c
                ));
              }
              n = u;
            }
            if (c = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ea(e, 0), bt(e, l, 0, !0);
          break;
        }
        e: {
          switch (a = e, c = n, c) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              bt(
                a,
                l,
                ml,
                !pt
              );
              break e;
            case 2:
              ll = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (n = Ti + 300 - cl(), 10 < n)) {
            if (bt(
              a,
              l,
              ml,
              !pt
            ), Xn(a, 0, !0) !== 0) break e;
            et = l, a.timeoutHandle = yo(
              Gd.bind(
                null,
                a,
                t,
                ll,
                Oi,
                Zu,
                l,
                ml,
                $t,
                Na,
                pt,
                c,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Gd(
            a,
            t,
            ll,
            Oi,
            Zu,
            l,
            ml,
            $t,
            Na,
            pt,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hl(e);
  }
  function Gd(e, l, t, a, n, c, u, s, d, p, _, T, g, b) {
    if (e.timeoutHandle = -1, T = l.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Gl
      }, Dd(
        l,
        c,
        T
      );
      var q = (c & 62914560) === c ? Ti - cl() : (c & 4194048) === c ? qd - cl() : 0;
      if (q = Nv(
        T,
        q
      ), q !== null) {
        et = c, e.cancelPendingCommit = q(
          Jd.bind(
            null,
            e,
            l,
            c,
            t,
            a,
            n,
            u,
            s,
            d,
            _,
            T,
            null,
            g,
            b
          )
        ), bt(e, c, u, !p);
        return;
      }
    }
    Jd(
      e,
      l,
      c,
      t,
      a,
      n,
      u,
      s,
      d
    );
  }
  function wm(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], c = n.getSnapshot;
          n = n.value;
          try {
            if (!fl(c(), n)) return !1;
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
  function bt(e, l, t, a) {
    l &= ~Qu, l &= ~$t, e.suspendedLanes |= l, e.pingedLanes &= ~l, a && (e.warmLanes |= l), a = e.expirationTimes;
    for (var n = l; 0 < n; ) {
      var c = 31 - sl(n), u = 1 << c;
      a[c] = -1, n &= ~u;
    }
    t !== 0 && ks(e, t, l);
  }
  function Di() {
    return (fe & 6) === 0 ? (xn(0), !1) : !0;
  }
  function Ju() {
    if (P !== null) {
      if (de === 0)
        var e = P.return;
      else
        e = P, Zl = Xt = null, fu(e), pa = null, en = 0, e = P;
      for (; e !== null; )
        yd(e.alternate, e), e = e.return;
      P = null;
    }
  }
  function Ea(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, uv(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), et = 0, Ju(), pe = e, P = t = wl(e.current, null), te = l, de = 0, hl = null, pt = !1, _a = Ba(e, l), wu = !1, Na = ml = Qu = $t = gt = ze = 0, ll = pn = null, Zu = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= l; 0 < a; ) {
        var n = 31 - sl(a), c = 1 << n;
        l |= e[n], a &= ~c;
      }
    return Pl = l, In(), t;
  }
  function Xd(e, l) {
    k = null, z.H = fn, l === ya || l === ci ? (l = tr(), de = 3) : l === Fc ? (l = tr(), de = 4) : de = l === Nu ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, hl = l, P === null && (ze = 1, ji(
      e,
      jl(l, e.current)
    ));
  }
  function wd() {
    var e = dl.current;
    return e === null ? !0 : (te & 4194048) === te ? _l === null : (te & 62914560) === te || (te & 536870912) !== 0 ? e === _l : !1;
  }
  function Qd() {
    var e = z.H;
    return z.H = fn, e === null ? fn : e;
  }
  function Zd() {
    var e = z.A;
    return z.A = Gm, e;
  }
  function Ci() {
    ze = 4, pt || (te & 4194048) !== te && dl.current !== null || (_a = !0), (gt & 134217727) === 0 && ($t & 134217727) === 0 || pe === null || bt(
      pe,
      te,
      ml,
      !1
    );
  }
  function ku(e, l, t) {
    var a = fe;
    fe |= 2;
    var n = Qd(), c = Zd();
    (pe !== e || te !== l) && (Oi = null, Ea(e, l)), l = !1;
    var u = ze;
    e: do
      try {
        if (de !== 0 && P !== null) {
          var s = P, d = hl;
          switch (de) {
            case 8:
              Ju(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              dl.current === null && (l = !0);
              var p = de;
              if (de = 0, hl = null, Ta(e, s, d, p), t && _a) {
                u = 0;
                break e;
              }
              break;
            default:
              p = de, de = 0, hl = null, Ta(e, s, d, p);
          }
        }
        Qm(), u = ze;
        break;
      } catch (_) {
        Xd(e, _);
      }
    while (!0);
    return l && e.shellSuspendCounter++, Zl = Xt = null, fe = a, z.H = n, z.A = c, P === null && (pe = null, te = 0, In()), u;
  }
  function Qm() {
    for (; P !== null; ) Ld(P);
  }
  function Zm(e, l) {
    var t = fe;
    fe |= 2;
    var a = Qd(), n = Zd();
    pe !== e || te !== l ? (Oi = null, Mi = cl() + 500, Ea(e, l)) : _a = Ba(
      e,
      l
    );
    e: do
      try {
        if (de !== 0 && P !== null) {
          l = P;
          var c = hl;
          l: switch (de) {
            case 1:
              de = 0, hl = null, Ta(e, l, c, 1);
              break;
            case 2:
            case 9:
              if (er(c)) {
                de = 0, hl = null, Vd(l);
                break;
              }
              l = function() {
                de !== 2 && de !== 9 || pe !== e || (de = 7), Hl(e);
              }, c.then(l, l);
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              er(c) ? (de = 0, hl = null, Vd(l)) : (de = 0, hl = null, Ta(e, l, c, 7));
              break;
            case 5:
              var u = null;
              switch (P.tag) {
                case 26:
                  u = P.memoizedState;
                case 5:
                case 27:
                  var s = P;
                  if (u ? Do(u) : s.stateNode.complete) {
                    de = 0, hl = null;
                    var d = s.sibling;
                    if (d !== null) P = d;
                    else {
                      var p = s.return;
                      p !== null ? (P = p, Ui(p)) : P = null;
                    }
                    break l;
                  }
              }
              de = 0, hl = null, Ta(e, l, c, 5);
              break;
            case 6:
              de = 0, hl = null, Ta(e, l, c, 6);
              break;
            case 8:
              Ju(), ze = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Lm();
        break;
      } catch (_) {
        Xd(e, _);
      }
    while (!0);
    return Zl = Xt = null, z.H = a, z.A = n, fe = t, P !== null ? 0 : (pe = null, te = 0, In(), ze);
  }
  function Lm() {
    for (; P !== null && !hh(); )
      Ld(P);
  }
  function Ld(e) {
    var l = md(e.alternate, e, Pl);
    e.memoizedProps = e.pendingProps, l === null ? Ui(e) : P = l;
  }
  function Vd(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = sd(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          te
        );
        break;
      case 11:
        l = sd(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          te
        );
        break;
      case 5:
        fu(l);
      default:
        yd(t, l), l = P = Zf(l, Pl), l = md(t, l, Pl);
    }
    e.memoizedProps = e.pendingProps, l === null ? Ui(e) : P = l;
  }
  function Ta(e, l, t, a) {
    Zl = Xt = null, fu(l), pa = null, en = 0;
    var n = l.return;
    try {
      if (Cm(
        e,
        n,
        l,
        t,
        te
      )) {
        ze = 1, ji(
          e,
          jl(t, e.current)
        ), P = null;
        return;
      }
    } catch (c) {
      if (n !== null) throw P = n, c;
      ze = 1, ji(
        e,
        jl(t, e.current)
      ), P = null;
      return;
    }
    l.flags & 32768 ? (ne || a === 1 ? e = !0 : _a || (te & 536870912) !== 0 ? e = !1 : (pt = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = dl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Kd(l, e)) : Ui(l);
  }
  function Ui(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        Kd(
          l,
          pt
        );
        return;
      }
      e = l.return;
      var t = qm(
        l.alternate,
        l,
        Pl
      );
      if (t !== null) {
        P = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        P = l;
        return;
      }
      P = l = e;
    } while (l !== null);
    ze === 0 && (ze = 5);
  }
  function Kd(e, l) {
    do {
      var t = Hm(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, P = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        P = e;
        return;
      }
      P = e = t;
    } while (e !== null);
    ze = 6, P = null;
  }
  function Jd(e, l, t, a, n, c, u, s, d) {
    e.cancelPendingCommit = null;
    do
      Ri();
    while (Ue !== 0);
    if ((fe & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === e.current) throw Error(r(177));
      if (c = l.lanes | l.childLanes, c |= Hc, zh(
        e,
        t,
        c,
        u,
        s,
        d
      ), e === pe && (P = pe = null, te = 0), Aa = l, jt = e, et = t, Lu = c, Vu = n, Hd = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, km(Hn, function() {
        return Id(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, n = D.p, D.p = 2, u = fe, fe |= 4;
        try {
          Bm(e, l, t);
        } finally {
          fe = u, D.p = n, z.T = a;
        }
      }
      Ue = 1, kd(), $d(), Wd();
    }
  }
  function kd() {
    if (Ue === 1) {
      Ue = 0;
      var e = jt, l = Aa, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = z.T, z.T = null;
        var a = D.p;
        D.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Td(l, e);
          var c = cs, u = Rf(e.containerInfo), s = c.focusedElem, d = c.selectionRange;
          if (u !== s && s && s.ownerDocument && Uf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (d !== null && Dc(s)) {
              var p = d.start, _ = d.end;
              if (_ === void 0 && (_ = p), "selectionStart" in s)
                s.selectionStart = p, s.selectionEnd = Math.min(
                  _,
                  s.value.length
                );
              else {
                var T = s.ownerDocument || document, g = T && T.defaultView || window;
                if (g.getSelection) {
                  var b = g.getSelection(), q = s.textContent.length, w = Math.min(d.start, q), ve = d.end === void 0 ? w : Math.min(d.end, q);
                  !b.extend && w > ve && (u = ve, ve = w, w = u);
                  var v = Cf(
                    s,
                    w
                  ), m = Cf(
                    s,
                    ve
                  );
                  if (v && m && (b.rangeCount !== 1 || b.anchorNode !== v.node || b.anchorOffset !== v.offset || b.focusNode !== m.node || b.focusOffset !== m.offset)) {
                    var y = T.createRange();
                    y.setStart(v.node, v.offset), b.removeAllRanges(), w > ve ? (b.addRange(y), b.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), b.addRange(y));
                  }
                }
              }
            }
            for (T = [], b = s; b = b.parentNode; )
              b.nodeType === 1 && T.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < T.length; s++) {
              var A = T[s];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Ki = !!is, cs = is = null;
        } finally {
          fe = n, D.p = a, z.T = t;
        }
      }
      e.current = l, Ue = 2;
    }
  }
  function $d() {
    if (Ue === 2) {
      Ue = 0;
      var e = jt, l = Aa, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = z.T, z.T = null;
        var a = D.p;
        D.p = 2;
        var n = fe;
        fe |= 4;
        try {
          zd(e, l.alternate, l);
        } finally {
          fe = n, D.p = a, z.T = t;
        }
      }
      Ue = 3;
    }
  }
  function Wd() {
    if (Ue === 4 || Ue === 3) {
      Ue = 0, mh();
      var e = jt, l = Aa, t = et, a = Hd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ue = 5 : (Ue = 0, Aa = jt = null, Fd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (xt = null), oc(t), l = l.stateNode, ul && typeof ul.onCommitFiberRoot == "function")
        try {
          ul.onCommitFiberRoot(
            Ha,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = z.T, n = D.p, D.p = 2, z.T = null;
        try {
          for (var c = e.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            c(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          z.T = l, D.p = n;
        }
      }
      (et & 3) !== 0 && Ri(), Hl(e), n = e.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? e === Ku ? gn++ : (gn = 0, Ku = e) : gn = 0, xn(0);
    }
  }
  function Fd(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Ia(l)));
  }
  function Ri() {
    return kd(), $d(), Wd(), Id();
  }
  function Id() {
    if (Ue !== 5) return !1;
    var e = jt, l = Lu;
    Lu = 0;
    var t = oc(et), a = z.T, n = D.p;
    try {
      D.p = 32 > t ? 32 : t, z.T = null, t = Vu, Vu = null;
      var c = jt, u = et;
      if (Ue = 0, Aa = jt = null, et = 0, (fe & 6) !== 0) throw Error(r(331));
      var s = fe;
      if (fe |= 4, Ud(c.current), Od(
        c,
        c.current,
        u,
        t
      ), fe = s, xn(0, !1), ul && typeof ul.onPostCommitFiberRoot == "function")
        try {
          ul.onPostCommitFiberRoot(Ha, c);
        } catch {
        }
      return !0;
    } finally {
      D.p = n, z.T = a, Fd(e, l);
    }
  }
  function Pd(e, l, t) {
    l = jl(t, l), l = _u(e.stateNode, l, 2), e = ht(e, l, 2), e !== null && (Ya(e, 2), Hl(e));
  }
  function oe(e, l, t) {
    if (e.tag === 3)
      Pd(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Pd(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xt === null || !xt.has(a))) {
            e = jl(t, e), t = ed(2), a = ht(l, t, 2), a !== null && (ld(
              t,
              a,
              l,
              e
            ), Ya(a, 2), Hl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function $u(e, l, t) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Xm();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(t) || (wu = !0, n.add(t), e = Vm.bind(null, e, l, t), l.then(e, e));
  }
  function Vm(e, l, t) {
    var a = e.pingCache;
    a !== null && a.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, pe === e && (te & t) === t && (ze === 4 || ze === 3 && (te & 62914560) === te && 300 > cl() - Ti ? (fe & 2) === 0 && Ea(e, 0) : Qu |= t, Na === te && (Na = 0)), Hl(e);
  }
  function eo(e, l) {
    l === 0 && (l = Js()), e = Bt(e, l), e !== null && (Ya(e, l), Hl(e));
  }
  function Km(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), eo(e, t);
  }
  function Jm(e, l) {
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
        throw Error(r(314));
    }
    a !== null && a.delete(l), eo(e, t);
  }
  function km(e, l) {
    return sc(e, l);
  }
  var qi = null, Ma = null, Wu = !1, Hi = !1, Fu = !1, St = 0;
  function Hl(e) {
    e !== Ma && e.next === null && (Ma === null ? qi = Ma = e : Ma = Ma.next = e), Hi = !0, Wu || (Wu = !0, Wm());
  }
  function xn(e, l) {
    if (!Fu && Hi) {
      Fu = !0;
      do
        for (var t = !1, a = qi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var c = 0;
            else {
              var u = a.suspendedLanes, s = a.pingedLanes;
              c = (1 << 31 - sl(42 | e) + 1) - 1, c &= n & ~(u & ~s), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (t = !0, no(a, c));
          } else
            c = te, c = Xn(
              a,
              a === pe ? c : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (c & 3) === 0 || Ba(a, c) || (t = !0, no(a, c));
          a = a.next;
        }
      while (t);
      Fu = !1;
    }
  }
  function $m() {
    lo();
  }
  function lo() {
    Hi = Wu = !1;
    var e = 0;
    St !== 0 && cv() && (e = St);
    for (var l = cl(), t = null, a = qi; a !== null; ) {
      var n = a.next, c = to(a, l);
      c === 0 ? (a.next = null, t === null ? qi = n : t.next = n, n === null && (Ma = t)) : (t = a, (e !== 0 || (c & 3) !== 0) && (Hi = !0)), a = n;
    }
    Ue !== 0 && Ue !== 5 || xn(e), St !== 0 && (St = 0);
  }
  function to(e, l) {
    for (var t = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var u = 31 - sl(c), s = 1 << u, d = n[u];
      d === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[u] = Sh(s, l)) : d <= l && (e.expiredLanes |= s), c &= ~s;
    }
    if (l = pe, t = te, t = Xn(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, t === 0 || e === l && (de === 2 || de === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && fc(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Ba(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (a !== null && fc(a), oc(t)) {
        case 2:
        case 8:
          t = Vs;
          break;
        case 32:
          t = Hn;
          break;
        case 268435456:
          t = Ks;
          break;
        default:
          t = Hn;
      }
      return a = ao.bind(null, e), t = sc(t, a), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return a !== null && a !== null && fc(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ao(e, l) {
    if (Ue !== 0 && Ue !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (Ri() && e.callbackNode !== t)
      return null;
    var a = te;
    return a = Xn(
      e,
      e === pe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Yd(e, a, l), to(e, cl()), e.callbackNode != null && e.callbackNode === t ? ao.bind(null, e) : null);
  }
  function no(e, l) {
    if (Ri()) return null;
    Yd(e, l, !0);
  }
  function Wm() {
    sv(function() {
      (fe & 6) !== 0 ? sc(
        Ls,
        $m
      ) : lo();
    });
  }
  function Iu() {
    if (St === 0) {
      var e = ma;
      e === 0 && (e = Bn, Bn <<= 1, (Bn & 261888) === 0 && (Bn = 256)), St = e;
    }
    return St;
  }
  function io(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ln("" + e);
  }
  function co(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Fm(e, l, t, a, n) {
    if (l === "submit" && t && t.stateNode === n) {
      var c = io(
        (n[We] || null).action
      ), u = a.submitter;
      u && (l = (l = u[We] || null) ? io(l.formAction) : u.getAttribute("formAction"), l !== null && (c = l, u = null));
      var s = new kn(
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
                if (St !== 0) {
                  var d = u ? co(n, u) : new FormData(n);
                  gu(
                    t,
                    {
                      pending: !0,
                      data: d,
                      method: n.method,
                      action: c
                    },
                    null,
                    d
                  );
                }
              } else
                typeof c == "function" && (s.preventDefault(), d = u ? co(n, u) : new FormData(n), gu(
                  t,
                  {
                    pending: !0,
                    data: d,
                    method: n.method,
                    action: c
                  },
                  c,
                  d
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Pu = 0; Pu < qc.length; Pu++) {
    var es = qc[Pu], Im = es.toLowerCase(), Pm = es[0].toUpperCase() + es.slice(1);
    Ml(
      Im,
      "on" + Pm
    );
  }
  Ml(Bf, "onAnimationEnd"), Ml(Yf, "onAnimationIteration"), Ml(Gf, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(vm, "onTransitionRun"), Ml(ym, "onTransitionStart"), Ml(pm, "onTransitionCancel"), Ml(Xf, "onTransitionEnd"), ea("onMouseEnter", ["mouseout", "mouseover"]), ea("onMouseLeave", ["mouseout", "mouseover"]), ea("onPointerEnter", ["pointerout", "pointerover"]), ea("onPointerLeave", ["pointerout", "pointerover"]), Ut(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ut(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ut("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ut(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ut(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ut(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ev = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn)
  );
  function uo(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var a = e[t], n = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (l)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u], d = s.instance, p = s.currentTarget;
            if (s = s.listener, d !== c && n.isPropagationStopped())
              break e;
            c = s, n.currentTarget = p;
            try {
              c(n);
            } catch (_) {
              Fn(_);
            }
            n.currentTarget = null, c = d;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (s = a[u], d = s.instance, p = s.currentTarget, s = s.listener, d !== c && n.isPropagationStopped())
              break e;
            c = s, n.currentTarget = p;
            try {
              c(n);
            } catch (_) {
              Fn(_);
            }
            n.currentTarget = null, c = d;
          }
      }
    }
  }
  function ee(e, l) {
    var t = l[hc];
    t === void 0 && (t = l[hc] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    t.has(a) || (so(l, e, 2, !1), t.add(a));
  }
  function ls(e, l, t) {
    var a = 0;
    l && (a |= 4), so(
      t,
      e,
      a,
      l
    );
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(e) {
    if (!e[Bi]) {
      e[Bi] = !0, ef.forEach(function(t) {
        t !== "selectionchange" && (ev.has(t) || ls(t, !1, e), ls(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[Bi] || (l[Bi] = !0, ls("selectionchange", !1, l));
    }
  }
  function so(e, l, t, a) {
    switch (Yo(l)) {
      case 2:
        var n = Tv;
        break;
      case 8:
        n = Mv;
        break;
      default:
        n = ps;
    }
    t = n.bind(
      null,
      l,
      t,
      e
    ), n = void 0, !Sc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: n
    }) : e.addEventListener(l, t, !0) : n !== void 0 ? e.addEventListener(l, t, {
      passive: n
    }) : e.addEventListener(l, t, !1);
  }
  function as(e, l, t, a, n) {
    var c = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var d = u.tag;
              if ((d === 3 || d === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (u = Ft(s), u === null) return;
            if (d = u.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = c = u;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    hf(function() {
      var p = c, _ = jc(t), T = [];
      e: {
        var g = wf.get(e);
        if (g !== void 0) {
          var b = kn, q = e;
          switch (e) {
            case "keypress":
              if (Kn(t) === 0) break e;
            case "keydown":
            case "keyup":
              b = Jh;
              break;
            case "focusin":
              q = "focus", b = Ac;
              break;
            case "focusout":
              q = "blur", b = Ac;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ac;
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
              b = yf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = qh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Wh;
              break;
            case Bf:
            case Yf:
            case Gf:
              b = Yh;
              break;
            case Xf:
              b = Ih;
              break;
            case "scroll":
            case "scrollend":
              b = Uh;
              break;
            case "wheel":
              b = em;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Xh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = gf;
              break;
            case "toggle":
            case "beforetoggle":
              b = tm;
          }
          var w = (l & 4) !== 0, ve = !w && (e === "scroll" || e === "scrollend"), v = w ? g !== null ? g + "Capture" : null : g;
          w = [];
          for (var m = p, y; m !== null; ) {
            var A = m;
            if (y = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || y === null || v === null || (A = wa(m, v), A != null && w.push(
              bn(m, A, y)
            )), ve) break;
            m = m.return;
          }
          0 < w.length && (g = new b(
            g,
            q,
            null,
            t,
            _
          ), T.push({ event: g, listeners: w }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (g = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", g && t !== xc && (q = t.relatedTarget || t.fromElement) && (Ft(q) || q[Wt]))
            break e;
          if ((b || g) && (g = _.window === _ ? _ : (g = _.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (q = t.relatedTarget || t.toElement, b = p, q = q ? Ft(q) : null, q !== null && (ve = M(q), w = q.tag, q !== ve || w !== 5 && w !== 27 && w !== 6) && (q = null)) : (b = null, q = p), b !== q)) {
            if (w = yf, A = "onMouseLeave", v = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (w = gf, A = "onPointerLeave", v = "onPointerEnter", m = "pointer"), ve = b == null ? g : Xa(b), y = q == null ? g : Xa(q), g = new w(
              A,
              m + "leave",
              b,
              t,
              _
            ), g.target = ve, g.relatedTarget = y, A = null, Ft(_) === p && (w = new w(
              v,
              m + "enter",
              q,
              t,
              _
            ), w.target = y, w.relatedTarget = ve, A = w), ve = A, b && q)
              l: {
                for (w = lv, v = b, m = q, y = 0, A = v; A; A = w(A))
                  y++;
                A = 0;
                for (var G = m; G; G = w(G))
                  A++;
                for (; 0 < y - A; )
                  v = w(v), y--;
                for (; 0 < A - y; )
                  m = w(m), A--;
                for (; y--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    w = v;
                    break l;
                  }
                  v = w(v), m = w(m);
                }
                w = null;
              }
            else w = null;
            b !== null && fo(
              T,
              g,
              b,
              w,
              !1
            ), q !== null && ve !== null && fo(
              T,
              ve,
              q,
              w,
              !0
            );
          }
        }
        e: {
          if (g = p ? Xa(p) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file")
            var ue = Af;
          else if (_f(g))
            if (Ef)
              ue = om;
            else {
              ue = rm;
              var B = fm;
            }
          else
            b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? p && gc(p.elementType) && (ue = Af) : ue = dm;
          if (ue && (ue = ue(e, p))) {
            Nf(
              T,
              ue,
              t,
              _
            );
            break e;
          }
          B && B(e, g, p), e === "focusout" && p && g.type === "number" && p.memoizedProps.value != null && pc(g, "number", g.value);
        }
        switch (B = p ? Xa(p) : window, e) {
          case "focusin":
            (_f(B) || B.contentEditable === "true") && (ca = B, Cc = p, $a = null);
            break;
          case "focusout":
            $a = Cc = ca = null;
            break;
          case "mousedown":
            Uc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uc = !1, qf(T, t, _);
            break;
          case "selectionchange":
            if (mm) break;
          case "keydown":
          case "keyup":
            qf(T, t, _);
        }
        var $;
        if (Tc)
          e: {
            switch (e) {
              case "compositionstart":
                var ae = "onCompositionStart";
                break e;
              case "compositionend":
                ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ae = "onCompositionUpdate";
                break e;
            }
            ae = void 0;
          }
        else
          ia ? Sf(e, t) && (ae = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (ae = "onCompositionStart");
        ae && (xf && t.locale !== "ko" && (ia || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && ia && ($ = mf()) : (ct = _, zc = "value" in ct ? ct.value : ct.textContent, ia = !0)), B = Yi(p, ae), 0 < B.length && (ae = new pf(
          ae,
          e,
          null,
          t,
          _
        ), T.push({ event: ae, listeners: B }), $ ? ae.data = $ : ($ = zf(t), $ !== null && (ae.data = $)))), ($ = nm ? im(e, t) : cm(e, t)) && (ae = Yi(p, "onBeforeInput"), 0 < ae.length && (B = new pf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          _
        ), T.push({
          event: B,
          listeners: ae
        }), B.data = $)), Fm(
          T,
          e,
          p,
          t,
          _
        );
      }
      uo(T, l);
    });
  }
  function bn(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function Yi(e, l) {
    for (var t = l + "Capture", a = []; e !== null; ) {
      var n = e, c = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || c === null || (n = wa(e, t), n != null && a.unshift(
        bn(e, n, c)
      ), n = wa(e, l), n != null && a.push(
        bn(e, n, c)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function lv(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fo(e, l, t, a, n) {
    for (var c = l._reactName, u = []; t !== null && t !== a; ) {
      var s = t, d = s.alternate, p = s.stateNode;
      if (s = s.tag, d !== null && d === a) break;
      s !== 5 && s !== 26 && s !== 27 || p === null || (d = p, n ? (p = wa(t, c), p != null && u.unshift(
        bn(t, p, d)
      )) : n || (p = wa(t, c), p != null && u.push(
        bn(t, p, d)
      ))), t = t.return;
    }
    u.length !== 0 && e.push({ event: l, listeners: u });
  }
  var tv = /\r\n?/g, av = /\u0000|\uFFFD/g;
  function ro(e) {
    return (typeof e == "string" ? e : "" + e).replace(tv, `
`).replace(av, "");
  }
  function oo(e, l) {
    return l = ro(l), ro(e) === l;
  }
  function me(e, l, t, a, n, c) {
    switch (t) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ta(e, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ta(e, "" + a);
        break;
      case "className":
        Qn(e, "class", a);
        break;
      case "tabIndex":
        Qn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qn(e, t, a);
        break;
      case "style":
        df(e, a, c);
        break;
      case "data":
        if (l !== "object") {
          Qn(e, "data", a);
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
        a = Ln("" + a), e.setAttribute(t, a);
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
          typeof c == "function" && (t === "formAction" ? (l !== "input" && me(e, l, "name", n.name, n, null), me(
            e,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), me(
            e,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), me(
            e,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (me(e, l, "encType", n.encType, n, null), me(e, l, "method", n.method, n, null), me(e, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(t);
          break;
        }
        a = Ln("" + a), e.setAttribute(t, a);
        break;
      case "onClick":
        a != null && (e.onclick = Gl);
        break;
      case "onScroll":
        a != null && ee("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ee("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(r(60));
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
        t = Ln("" + a), e.setAttributeNS(
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
        ee("beforetoggle", e), ee("toggle", e), wn(e, "popover", a);
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
        wn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Dh.get(t) || t, wn(e, t, a));
    }
  }
  function ns(e, l, t, a, n, c) {
    switch (t) {
      case "style":
        df(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (t = a.__html, t != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ta(e, a) : (typeof a == "number" || typeof a == "bigint") && ta(e, "" + a);
        break;
      case "onScroll":
        a != null && ee("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ee("scrollend", e);
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
        if (!lf.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (n = t.endsWith("Capture"), l = t.slice(2, n ? t.length - 7 : void 0), c = e[We] || null, c = c != null ? c[t] : null, typeof c == "function" && e.removeEventListener(l, c, n), typeof a == "function")) {
              typeof c != "function" && c !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, a, n);
              break e;
            }
            t in e ? e[t] = a : a === !0 ? e.setAttribute(t, "") : wn(e, t, a);
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
        ee("error", e), ee("load", e);
        var a = !1, n = !1, c;
        for (c in t)
          if (t.hasOwnProperty(c)) {
            var u = t[c];
            if (u != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  me(e, l, c, u, t, null);
              }
          }
        n && me(e, l, "srcSet", t.srcSet, t, null), a && me(e, l, "src", t.src, t, null);
        return;
      case "input":
        ee("invalid", e);
        var s = c = u = n = null, d = null, p = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var _ = t[a];
            if (_ != null)
              switch (a) {
                case "name":
                  n = _;
                  break;
                case "type":
                  u = _;
                  break;
                case "checked":
                  d = _;
                  break;
                case "defaultChecked":
                  p = _;
                  break;
                case "value":
                  c = _;
                  break;
                case "defaultValue":
                  s = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(r(137, l));
                  break;
                default:
                  me(e, l, a, _, t, null);
              }
          }
        uf(
          e,
          c,
          s,
          d,
          p,
          u,
          n,
          !1
        );
        return;
      case "select":
        ee("invalid", e), a = u = c = null;
        for (n in t)
          if (t.hasOwnProperty(n) && (s = t[n], s != null))
            switch (n) {
              case "value":
                c = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                me(e, l, n, s, t, null);
            }
        l = c, t = u, e.multiple = !!a, l != null ? la(e, !!a, l, !1) : t != null && la(e, !!a, t, !0);
        return;
      case "textarea":
        ee("invalid", e), c = n = a = null;
        for (u in t)
          if (t.hasOwnProperty(u) && (s = t[u], s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                c = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                me(e, l, u, s, t, null);
            }
        ff(e, a, n, c);
        return;
      case "option":
        for (d in t)
          t.hasOwnProperty(d) && (a = t[d], a != null) && (d === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : me(e, l, d, a, t, null));
        return;
      case "dialog":
        ee("beforetoggle", e), ee("toggle", e), ee("cancel", e), ee("close", e);
        break;
      case "iframe":
      case "object":
        ee("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < jn.length; a++)
          ee(jn[a], e);
        break;
      case "image":
        ee("error", e), ee("load", e);
        break;
      case "details":
        ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ee("error", e), ee("load", e);
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
        for (p in t)
          if (t.hasOwnProperty(p) && (a = t[p], a != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                me(e, l, p, a, t, null);
            }
        return;
      default:
        if (gc(l)) {
          for (_ in t)
            t.hasOwnProperty(_) && (a = t[_], a !== void 0 && ns(
              e,
              l,
              _,
              a,
              t,
              void 0
            ));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && (a = t[s], a != null && me(e, l, s, a, t, null));
  }
  function nv(e, l, t, a) {
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
        var n = null, c = null, u = null, s = null, d = null, p = null, _ = null;
        for (b in t) {
          var T = t[b];
          if (t.hasOwnProperty(b) && T != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = T;
              default:
                a.hasOwnProperty(b) || me(e, l, b, null, a, T);
            }
        }
        for (var g in a) {
          var b = a[g];
          if (T = t[g], a.hasOwnProperty(g) && (b != null || T != null))
            switch (g) {
              case "type":
                c = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                p = b;
                break;
              case "defaultChecked":
                _ = b;
                break;
              case "value":
                u = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(r(137, l));
                break;
              default:
                b !== T && me(
                  e,
                  l,
                  g,
                  b,
                  a,
                  T
                );
            }
        }
        yc(
          e,
          u,
          s,
          d,
          p,
          _,
          c,
          n
        );
        return;
      case "select":
        b = u = s = g = null;
        for (c in t)
          if (d = t[c], t.hasOwnProperty(c) && d != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                b = d;
              default:
                a.hasOwnProperty(c) || me(
                  e,
                  l,
                  c,
                  null,
                  a,
                  d
                );
            }
        for (n in a)
          if (c = a[n], d = t[n], a.hasOwnProperty(n) && (c != null || d != null))
            switch (n) {
              case "value":
                g = c;
                break;
              case "defaultValue":
                s = c;
                break;
              case "multiple":
                u = c;
              default:
                c !== d && me(
                  e,
                  l,
                  n,
                  c,
                  a,
                  d
                );
            }
        l = s, t = u, a = b, g != null ? la(e, !!t, g, !1) : !!a != !!t && (l != null ? la(e, !!t, l, !0) : la(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        b = g = null;
        for (s in t)
          if (n = t[s], t.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                me(e, l, s, null, a, n);
            }
        for (u in a)
          if (n = a[u], c = t[u], a.hasOwnProperty(u) && (n != null || c != null))
            switch (u) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== c && me(e, l, u, n, a, c);
            }
        sf(e, g, b);
        return;
      case "option":
        for (var q in t)
          g = t[q], t.hasOwnProperty(q) && g != null && !a.hasOwnProperty(q) && (q === "selected" ? e.selected = !1 : me(
            e,
            l,
            q,
            null,
            a,
            g
          ));
        for (d in a)
          g = a[d], b = t[d], a.hasOwnProperty(d) && g !== b && (g != null || b != null) && (d === "selected" ? e.selected = g && typeof g != "function" && typeof g != "symbol" : me(
            e,
            l,
            d,
            g,
            a,
            b
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
        for (var w in t)
          g = t[w], t.hasOwnProperty(w) && g != null && !a.hasOwnProperty(w) && me(e, l, w, null, a, g);
        for (p in a)
          if (g = a[p], b = t[p], a.hasOwnProperty(p) && g !== b && (g != null || b != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(r(137, l));
                break;
              default:
                me(
                  e,
                  l,
                  p,
                  g,
                  a,
                  b
                );
            }
        return;
      default:
        if (gc(l)) {
          for (var ve in t)
            g = t[ve], t.hasOwnProperty(ve) && g !== void 0 && !a.hasOwnProperty(ve) && ns(
              e,
              l,
              ve,
              void 0,
              a,
              g
            );
          for (_ in a)
            g = a[_], b = t[_], !a.hasOwnProperty(_) || g === b || g === void 0 && b === void 0 || ns(
              e,
              l,
              _,
              g,
              a,
              b
            );
          return;
        }
    }
    for (var v in t)
      g = t[v], t.hasOwnProperty(v) && g != null && !a.hasOwnProperty(v) && me(e, l, v, null, a, g);
    for (T in a)
      g = a[T], b = t[T], !a.hasOwnProperty(T) || g === b || g == null && b == null || me(e, l, T, g, a, b);
  }
  function ho(e) {
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
  function iv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
        var n = t[a], c = n.transferSize, u = n.initiatorType, s = n.duration;
        if (c && s && ho(u)) {
          for (u = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var d = t[a], p = d.startTime;
            if (p > s) break;
            var _ = d.transferSize, T = d.initiatorType;
            _ && ho(T) && (d = d.responseEnd, u += _ * (d < s ? 1 : (s - p) / (d - p)));
          }
          if (--a, l += 8 * (c + u) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var is = null, cs = null;
  function Gi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function mo(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vo(e, l) {
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
  function us(e, l) {
    return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function cv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ss ? !1 : (ss = e, !0) : (ss = null, !1);
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, uv = typeof clearTimeout == "function" ? clearTimeout : void 0, po = typeof Promise == "function" ? Promise : void 0, sv = typeof queueMicrotask == "function" ? queueMicrotask : typeof po < "u" ? function(e) {
    return po.resolve(null).then(e).catch(fv);
  } : yo;
  function fv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zt(e) {
    return e === "head";
  }
  function go(e, l) {
    var t = l, a = 0;
    do {
      var n = t.nextSibling;
      if (e.removeChild(t), n && n.nodeType === 8)
        if (t = n.data, t === "/$" || t === "/&") {
          if (a === 0) {
            e.removeChild(n), Ua(l);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          a++;
        else if (t === "html")
          Sn(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, Sn(t);
          for (var c = t.firstChild; c; ) {
            var u = c.nextSibling, s = c.nodeName;
            c[Ga] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && c.rel.toLowerCase() === "stylesheet" || t.removeChild(c), c = u;
          }
        } else
          t === "body" && Sn(e.ownerDocument.body);
      t = n;
    } while (t);
    Ua(l);
  }
  function xo(e, l) {
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
          fs(t), mc(t);
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
  function rv(e, l, t, a) {
    for (; e.nodeType === 1; ) {
      var n = t;
      if (e.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Ga])
          switch (l) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (l === "input" && e.type === "hidden") {
        var c = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Nl(e.nextSibling), e === null) break;
    }
    return null;
  }
  function dv(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Nl(e.nextSibling), e === null)) return null;
    return e;
  }
  function jo(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Nl(e.nextSibling), e === null)) return null;
    return e;
  }
  function rs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ov(e, l) {
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
  function Nl(e) {
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
  function bo(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return Nl(e.nextSibling);
          l--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function So(e) {
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
  function zo(e, l, t) {
    switch (l = Gi(t), e) {
      case "html":
        if (e = l.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = l.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = l.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Sn(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    mc(e);
  }
  var Al = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Set();
  function Xi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var lt = D.d;
  D.d = {
    f: hv,
    r: mv,
    D: vv,
    C: yv,
    L: pv,
    m: gv,
    X: jv,
    S: xv,
    M: bv
  };
  function hv() {
    var e = lt.f(), l = Di();
    return e || l;
  }
  function mv(e) {
    var l = It(e);
    l !== null && l.tag === 5 && l.type === "form" ? Xr(l) : lt.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function No(e, l, t) {
    var a = Oa;
    if (a && typeof l == "string" && l) {
      var n = gl(l);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), _o.has(n) || (_o.add(n), e = { rel: e, crossOrigin: t, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Ze(l, "link", e), qe(l), a.head.appendChild(l)));
    }
  }
  function vv(e) {
    lt.D(e), No("dns-prefetch", e, null);
  }
  function yv(e, l) {
    lt.C(e, l), No("preconnect", e, l);
  }
  function pv(e, l, t) {
    lt.L(e, l, t);
    var a = Oa;
    if (a && e && l) {
      var n = 'link[rel="preload"][as="' + gl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (n += '[imagesrcset="' + gl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (n += '[imagesizes="' + gl(
        t.imageSizes
      ) + '"]')) : n += '[href="' + gl(e) + '"]';
      var c = n;
      switch (l) {
        case "style":
          c = Da(e);
          break;
        case "script":
          c = Ca(e);
      }
      Al.has(c) || (e = R(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Al.set(c, e), a.querySelector(n) !== null || l === "style" && a.querySelector(zn(c)) || l === "script" && a.querySelector(_n(c)) || (l = a.createElement("link"), Ze(l, "link", e), qe(l), a.head.appendChild(l)));
    }
  }
  function gv(e, l) {
    lt.m(e, l);
    var t = Oa;
    if (t && e) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + gl(a) + '"][href="' + gl(e) + '"]', c = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ca(e);
      }
      if (!Al.has(c) && (e = R({ rel: "modulepreload", href: e }, l), Al.set(c, e), t.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(_n(c)))
              return;
        }
        a = t.createElement("link"), Ze(a, "link", e), qe(a), t.head.appendChild(a);
      }
    }
  }
  function xv(e, l, t) {
    lt.S(e, l, t);
    var a = Oa;
    if (a && e) {
      var n = Pt(a).hoistableStyles, c = Da(e);
      l = l || "default";
      var u = n.get(c);
      if (!u) {
        var s = { loading: 0, preload: null };
        if (u = a.querySelector(
          zn(c)
        ))
          s.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Al.get(c)) && hs(e, t);
          var d = u = a.createElement("link");
          qe(d), Ze(d, "link", e), d._p = new Promise(function(p, _) {
            d.onload = p, d.onerror = _;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, wi(u, l, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: s
        }, n.set(c, u);
      }
    }
  }
  function jv(e, l) {
    lt.X(e, l);
    var t = Oa;
    if (t && e) {
      var a = Pt(t).hoistableScripts, n = Ca(e), c = a.get(n);
      c || (c = t.querySelector(_n(n)), c || (e = R({ src: e, async: !0 }, l), (l = Al.get(n)) && ms(e, l), c = t.createElement("script"), qe(c), Ze(c, "link", e), t.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(n, c));
    }
  }
  function bv(e, l) {
    lt.M(e, l);
    var t = Oa;
    if (t && e) {
      var a = Pt(t).hoistableScripts, n = Ca(e), c = a.get(n);
      c || (c = t.querySelector(_n(n)), c || (e = R({ src: e, async: !0, type: "module" }, l), (l = Al.get(n)) && ms(e, l), c = t.createElement("script"), qe(c), Ze(c, "link", e), t.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(n, c));
    }
  }
  function Ao(e, l, t, a) {
    var n = (n = F.current) ? Xi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = Da(t.href), t = Pt(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Da(t.href);
          var c = Pt(
            n
          ).hoistableStyles, u = c.get(e);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, u), (c = n.querySelector(
            zn(e)
          )) && !c._p && (u.instance = c, u.state.loading = 5), Al.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Al.set(e, t), c || Sv(
            n,
            e,
            t,
            u.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return u;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ca(t), t = Pt(
          n
        ).hoistableScripts, a = t.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Da(e) {
    return 'href="' + gl(e) + '"';
  }
  function zn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Eo(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Sv(e, l, t, a) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = e.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ze(l, "link", t), qe(l), e.head.appendChild(l));
  }
  function Ca(e) {
    return '[src="' + gl(e) + '"]';
  }
  function _n(e) {
    return "script[async]" + e;
  }
  function To(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + gl(t.href) + '"]'
          );
          if (a)
            return l.instance = a, qe(a), a;
          var n = R({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), qe(a), Ze(a, "style", n), wi(a, t.precedence, e), l.instance = a;
        case "stylesheet":
          n = Da(t.href);
          var c = e.querySelector(
            zn(n)
          );
          if (c)
            return l.state.loading |= 4, l.instance = c, qe(c), c;
          a = Eo(t), (n = Al.get(n)) && hs(a, n), c = (e.ownerDocument || e).createElement("link"), qe(c);
          var u = c;
          return u._p = new Promise(function(s, d) {
            u.onload = s, u.onerror = d;
          }), Ze(c, "link", a), l.state.loading |= 4, wi(c, t.precedence, e), l.instance = c;
        case "script":
          return c = Ca(t.src), (n = e.querySelector(
            _n(c)
          )) ? (l.instance = n, qe(n), n) : (a = t, (n = Al.get(c)) && (a = R({}, t), ms(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), qe(n), Ze(n, "link", a), e.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, wi(a, t.precedence, e));
    return l.instance;
  }
  function wi(e, l, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, c = n, u = 0; u < a.length; u++) {
      var s = a[u];
      if (s.dataset.precedence === l) c = s;
      else if (c !== n) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function hs(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function ms(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var Qi = null;
  function Mo(e, l, t) {
    if (Qi === null) {
      var a = /* @__PURE__ */ new Map(), n = Qi = /* @__PURE__ */ new Map();
      n.set(t, a);
    } else
      n = Qi, a = n.get(t), a || (a = /* @__PURE__ */ new Map(), n.set(t, a));
    if (a.has(e)) return a;
    for (a.set(e, null), t = t.getElementsByTagName(e), n = 0; n < t.length; n++) {
      var c = t[n];
      if (!(c[Ga] || c[Ge] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = c.getAttribute(l) || "";
        u = e + u;
        var s = a.get(u);
        s ? s.push(c) : a.set(u, [c]);
      }
    }
    return a;
  }
  function Oo(e, l, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      l === "title" ? e.querySelector("head > title") : null
    );
  }
  function zv(e, l, t) {
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
  function Do(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _v(e, l, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Da(a.href), c = l.querySelector(
          zn(n)
        );
        if (c) {
          l = c._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = Zi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = c, qe(c);
          return;
        }
        c = l.ownerDocument || l, a = Eo(a), (n = Al.get(n)) && hs(a, n), c = c.createElement("link"), qe(c);
        var u = c;
        u._p = new Promise(function(s, d) {
          u.onload = s, u.onerror = d;
        }), Ze(c, "link", a), t.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Zi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var vs = 0;
  function Nv(e, l) {
    return e.stylesheets && e.count === 0 && Vi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Vi(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + l);
      0 < e.imgBytes && vs === 0 && (vs = 62500 * iv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Vi(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > vs ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Zi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Vi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Li = null;
  function Vi(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Li = /* @__PURE__ */ new Map(), l.forEach(Av, e), Li = null, Zi.call(e));
  }
  function Av(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Li.get(e);
      if (t) var a = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Li.set(e, t);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < n.length; c++) {
          var u = n[c];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (t.set(u.dataset.precedence, u), a = u);
        }
        a && t.set(null, a);
      }
      n = l.instance, u = n.getAttribute("data-precedence"), c = t.get(u) || a, c === a && t.set(null, n), t.set(u, n), this.count++, a = Zi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), c ? c.parentNode.insertBefore(n, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), l.state.loading |= 4;
    }
  }
  var Nn = {
    $$typeof: Ce,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Ev(e, l, t, a, n, c, u, s, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = rc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rc(0), this.hiddenUpdates = rc(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = c, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Co(e, l, t, a, n, c, u, s, d, p, _, T) {
    return e = new Ev(
      e,
      l,
      t,
      u,
      d,
      p,
      _,
      T,
      s
    ), l = 1, c === !0 && (l |= 24), c = rl(3, null, null, l), e.current = c, c.stateNode = e, l = kc(), l.refCount++, e.pooledCache = l, l.refCount++, c.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: l
    }, Ic(c), e;
  }
  function Uo(e) {
    return e ? (e = fa, e) : fa;
  }
  function Ro(e, l, t, a, n, c) {
    n = Uo(n), a.context === null ? a.context = n : a.pendingContext = n, a = ot(l), a.payload = { element: t }, c = c === void 0 ? null : c, c !== null && (a.callback = c), t = ht(e, a, l), t !== null && (tl(t, e, l), tn(t, e, l));
  }
  function qo(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function ys(e, l) {
    qo(e, l), (e = e.alternate) && qo(e, l);
  }
  function Ho(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Bt(e, 67108864);
      l !== null && tl(l, e, 67108864), ys(e, 67108864);
    }
  }
  function Bo(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = vl();
      l = dc(l);
      var t = Bt(e, l);
      t !== null && tl(t, e, l), ys(e, l);
    }
  }
  var Ki = !0;
  function Tv(e, l, t, a) {
    var n = z.T;
    z.T = null;
    var c = D.p;
    try {
      D.p = 2, ps(e, l, t, a);
    } finally {
      D.p = c, z.T = n;
    }
  }
  function Mv(e, l, t, a) {
    var n = z.T;
    z.T = null;
    var c = D.p;
    try {
      D.p = 8, ps(e, l, t, a);
    } finally {
      D.p = c, z.T = n;
    }
  }
  function ps(e, l, t, a) {
    if (Ki) {
      var n = gs(a);
      if (n === null)
        as(
          e,
          l,
          a,
          Ji,
          t
        ), Go(e, a);
      else if (Dv(
        n,
        e,
        l,
        t,
        a
      ))
        a.stopPropagation();
      else if (Go(e, a), l & 4 && -1 < Ov.indexOf(e)) {
        for (; n !== null; ) {
          var c = It(n);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var u = Ct(c.pendingLanes);
                  if (u !== 0) {
                    var s = c;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var d = 1 << 31 - sl(u);
                      s.entanglements[1] |= d, u &= ~d;
                    }
                    Hl(c), (fe & 6) === 0 && (Mi = cl() + 500, xn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Bt(c, 2), s !== null && tl(s, c, 2), Di(), ys(c, 2);
            }
          if (c = gs(a), c === null && as(
            e,
            l,
            a,
            Ji,
            t
          ), c === n) break;
          n = c;
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
  function gs(e) {
    return e = jc(e), xs(e);
  }
  var Ji = null;
  function xs(e) {
    if (Ji = null, e = Ft(e), e !== null) {
      var l = M(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = Q(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = C(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return Ji = e, null;
  }
  function Yo(e) {
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
        switch (vh()) {
          case Ls:
            return 2;
          case Vs:
            return 8;
          case Hn:
          case yh:
            return 32;
          case Ks:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var js = !1, _t = null, Nt = null, At = null, An = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), Et = [], Ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Go(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        _t = null;
        break;
      case "dragenter":
      case "dragleave":
        Nt = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        An.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        En.delete(l.pointerId);
    }
  }
  function Tn(e, l, t, a, n, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: a,
      nativeEvent: c,
      targetContainers: [n]
    }, l !== null && (l = It(l), l !== null && Ho(l)), e) : (e.eventSystemFlags |= a, l = e.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), e);
  }
  function Dv(e, l, t, a, n) {
    switch (l) {
      case "focusin":
        return _t = Tn(
          _t,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return Nt = Tn(
          Nt,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return At = Tn(
          At,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "pointerover":
        var c = n.pointerId;
        return An.set(
          c,
          Tn(
            An.get(c) || null,
            e,
            l,
            t,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return c = n.pointerId, En.set(
          c,
          Tn(
            En.get(c) || null,
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
  function Xo(e) {
    var l = Ft(e.target);
    if (l !== null) {
      var t = M(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = Q(t), l !== null) {
            e.blockedOn = l, Is(e.priority, function() {
              Bo(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = C(t), l !== null) {
            e.blockedOn = l, Is(e.priority, function() {
              Bo(t);
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
  function ki(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = gs(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        xc = a, t.target.dispatchEvent(a), xc = null;
      } else
        return l = It(t), l !== null && Ho(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function wo(e, l, t) {
    ki(e) && t.delete(l);
  }
  function Cv() {
    js = !1, _t !== null && ki(_t) && (_t = null), Nt !== null && ki(Nt) && (Nt = null), At !== null && ki(At) && (At = null), An.forEach(wo), En.forEach(wo);
  }
  function $i(e, l) {
    e.blockedOn === l && (e.blockedOn = null, js || (js = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Cv
    )));
  }
  var Wi = null;
  function Qo(e) {
    Wi !== e && (Wi = e, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Wi === e && (Wi = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], a = e[l + 1], n = e[l + 2];
          if (typeof a != "function") {
            if (xs(a || t) === null)
              continue;
            break;
          }
          var c = It(t);
          c !== null && (e.splice(l, 3), l -= 3, gu(
            c,
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
  function Ua(e) {
    function l(d) {
      return $i(d, e);
    }
    _t !== null && $i(_t, e), Nt !== null && $i(Nt, e), At !== null && $i(At, e), An.forEach(l), En.forEach(l);
    for (var t = 0; t < Et.length; t++) {
      var a = Et[t];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Et.length && (t = Et[0], t.blockedOn === null); )
      Xo(t), t.blockedOn === null && Et.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (a = 0; a < t.length; a += 3) {
        var n = t[a], c = t[a + 1], u = n[We] || null;
        if (typeof c == "function")
          u || Qo(t);
        else if (u) {
          var s = null;
          if (c && c.hasAttribute("formAction")) {
            if (n = c, u = c[We] || null)
              s = u.formAction;
            else if (xs(n) !== null) continue;
          } else s = u.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), Qo(t);
        }
      }
  }
  function Zo() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(u) {
            return n = u;
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
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
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
  Fi.prototype.render = bs.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var t = l.current, a = vl();
    Ro(t, a, e, l, null, null);
  }, Fi.prototype.unmount = bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      Ro(e.current, 2, null, e, null, null), Di(), l[Wt] = null;
    }
  };
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = Fs();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Et.length && l !== 0 && l < Et[t].priority; t++) ;
      Et.splice(t, 0, e), t === 0 && Xo(e);
    }
  };
  var Lo = x.version;
  if (Lo !== "19.2.8")
    throw Error(
      r(
        527,
        Lo,
        "19.2.8"
      )
    );
  D.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = S(l), e = e !== null ? Z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Uv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ii.isDisabled && Ii.supportsFiber)
      try {
        Ha = Ii.inject(
          Uv
        ), ul = Ii;
      } catch {
      }
  }
  return On.createRoot = function(e, l) {
    if (!N(e)) throw Error(r(299));
    var t = !1, a = "", n = Wr, c = Fr, u = Ir;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError)), l = Co(
      e,
      1,
      !1,
      null,
      null,
      t,
      a,
      null,
      n,
      c,
      u,
      Zo
    ), e[Wt] = l.current, ts(e), new bs(l);
  }, On.hydrateRoot = function(e, l, t) {
    if (!N(e)) throw Error(r(299));
    var a = !1, n = "", c = Wr, u = Fr, s = Ir, d = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (d = t.formState)), l = Co(
      e,
      1,
      !0,
      l,
      t ?? null,
      a,
      n,
      d,
      c,
      u,
      s,
      Zo
    ), l.context = Uo(null), t = l.current, a = vl(), a = dc(a), n = ot(a), n.callback = null, ht(t, n, a), t = a, l.current.lanes = t, Ya(l, t), Hl(l), e[Wt] = l.current, ts(e), new Fi(l);
  }, On.version = "19.2.8", On;
}
var eh;
function Zv() {
  if (eh) return _s.exports;
  eh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), _s.exports = Qv(), _s.exports;
}
var Lv = Zv();
const Vv = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uh = (...f) => f.filter((x, o, r) => !!x && x.trim() !== "" && r.indexOf(x) === o).join(" ").trim();
var Kv = {
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
const Jv = L.forwardRef(
  ({
    color: f = "currentColor",
    size: x = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: N = "",
    children: M,
    iconNode: Q,
    ...C
  }, O) => L.createElement(
    "svg",
    {
      ref: O,
      ...Kv,
      width: x,
      height: x,
      stroke: f,
      strokeWidth: r ? Number(o) * 24 / Number(x) : o,
      className: uh("lucide", N),
      ...C
    },
    [
      ...Q.map(([S, Z]) => L.createElement(S, Z)),
      ...Array.isArray(M) ? M : [M]
    ]
  )
);
const le = (f, x) => {
  const o = L.forwardRef(
    ({ className: r, ...N }, M) => L.createElement(Jv, {
      ref: M,
      iconNode: x,
      className: uh(`lucide-${Vv(f)}`, r),
      ...N
    })
  );
  return o.displayName = `${f}`, o;
};
const Dn = le("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Cl = le("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Us = le("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const kv = le("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const at = le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Un = le("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Ms = le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Rs = le("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const qs = le("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Ra = le("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const ec = le("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Os = le("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const $v = le("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const Hs = le("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
const Bs = le("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ys = le("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const Gs = le("FileJson", [
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
const sh = le("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const Wv = le("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Rn = le("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const Fv = le("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const Iv = le("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const Cn = le("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const Pv = le("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const e1 = le("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const l1 = le("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const tc = le("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const Mt = le("ShieldAlert", [
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
const Xs = le("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const t1 = le("Sparkles", [
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
const ac = le("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const a1 = le("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const n1 = le("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const ws = le("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const i1 = le("WalletCards", [
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
const fh = le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const lc = le("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Pi = {
  option_id: null,
  rationale: "",
  assumptions: "",
  owner: "",
  acceptance_condition: "",
  risk: "",
  evidence_refs: [],
  terminal_route: "conditional_release"
}, rh = [ac, tc, lc, Xs, Us], c1 = [
  ["G1", "Commercial authority", "Binding supplier or commercial actions require an authorized human."],
  ["G2", "Data and model permission", "Released data flows and model routes must be explicitly permitted."],
  ["G3", "Evaluation sufficiency", "Acceptance needs segmented thresholds, severity, abstention and an authorized acceptor."],
  ["G4", "Severe cohort failure", "A known materially failing cohort must be blocked, excluded or safely routed."],
  ["G5", "Accountable ownership", "A material risk needs an owner who has authority to accept it."],
  ["G6", "Claim integrity", "Material value, accuracy, cost and readiness claims must follow the evidence."],
  ["G7", "Operational control", "Action-capable AI needs usable monitoring, incident ownership, containment and rollback."]
];
function Bl(...f) {
  return f.filter(Boolean).join(" ");
}
function lh(f) {
  const x = new Date(f);
  return Number.isNaN(x.getTime()) ? f : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(x);
}
function u1(f, x) {
  return `ai-delivery-arena:seen-activity:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${x}`;
}
function s1(f, x, o, r) {
  return `ai-delivery-arena:draft:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${x}:${o}:${r}`;
}
function f1(f, x) {
  if (typeof window > "u") return;
  const o = f.user?.id ?? (f.local_mode ? "local" : "participant"), r = [
    `ai-delivery-arena:draft:${o}:${x}:`,
    `ai-delivery-arena:seen-activity:${o}:${x}`
  ];
  Array.from(
    { length: window.localStorage.length },
    (M, Q) => window.localStorage.key(Q)
  ).filter((M) => !!M).forEach((M) => {
    r.some((Q) => M.startsWith(Q)) && window.localStorage.removeItem(M);
  });
}
function tt(f) {
  return JSON.stringify({
    acceptance_condition: f.acceptance_condition,
    assumptions: f.assumptions,
    evidence_refs: [...f.evidence_refs],
    option_id: f.option_id,
    owner: f.owner,
    rationale: f.rationale,
    risk: f.risk,
    terminal_route: f.terminal_route
  });
}
function r1(f) {
  if (!f || typeof f != "object") return !1;
  const x = f;
  return (x.option_id === null || typeof x.option_id == "string") && typeof x.rationale == "string" && typeof x.assumptions == "string" && typeof x.owner == "string" && typeof x.acceptance_condition == "string" && typeof x.risk == "string" && Array.isArray(x.evidence_refs) && x.evidence_refs.every((o) => typeof o == "string") && typeof x.terminal_route == "string";
}
function th(f, x) {
  const o = {
    draft: x,
    updatedAt: (/* @__PURE__ */ new Date(0)).toISOString(),
    synced: tt(x)
  };
  if (typeof window > "u") return o;
  try {
    const r = JSON.parse(window.localStorage.getItem(f) ?? "null");
    if (!r || typeof r != "object" || !r1(r.draft))
      return o;
    const N = tt(r.draft);
    return r.synced === N ? o : {
      draft: r.draft,
      updatedAt: typeof r.updatedAt == "string" ? r.updatedAt : (/* @__PURE__ */ new Date()).toISOString(),
      synced: typeof r.synced == "string" ? r.synced : null
    };
  } catch {
    return o;
  }
}
function Ts(f, x, o) {
  if (!(typeof window > "u"))
    try {
      const r = JSON.parse(window.localStorage.getItem(f) ?? "null"), N = {
        draft: x,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        synced: o !== void 0 ? o : typeof r?.synced == "string" ? r.synced : null
      };
      window.localStorage.setItem(f, JSON.stringify(N));
    } catch {
    }
}
function ah() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function nh(f) {
  if (typeof window > "u")
    return { signalCount: 0, evidenceIds: [] };
  try {
    const x = JSON.parse(window.localStorage.getItem(f) ?? "{}");
    return {
      signalCount: typeof x.signalCount == "number" && x.signalCount >= 0 ? x.signalCount : 0,
      evidenceIds: Array.isArray(x.evidenceIds) ? x.evidenceIds.filter((o) => typeof o == "string") : []
    };
  } catch {
    return { signalCount: 0, evidenceIds: [] };
  }
}
function d1(f, x) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(f, JSON.stringify(x));
    } catch {
    }
}
function ih(f, x) {
  const o = new Blob([JSON.stringify(x, null, 2)], {
    type: "application/json"
  }), r = URL.createObjectURL(o), N = document.createElement("a");
  N.href = r, N.download = f, document.body.appendChild(N), N.click(), N.remove(), URL.revokeObjectURL(r);
}
function o1(f) {
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
  ].filter(([o]) => !o).map(([, o]) => o);
}
function $e({
  children: f,
  variant: x = "primary",
  className: o,
  disabled: r,
  busy: N,
  type: M = "button",
  onClick: Q
}) {
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      className: Bl("button", `button-${x}`, o),
      disabled: r || N,
      type: M,
      onClick: Q,
      children: [
        N && /* @__PURE__ */ i.jsx("span", { className: "spinner", "aria-hidden": "true" }),
        f
      ]
    }
  );
}
function dh({
  data: f,
  emit: x,
  transparent: o = !1
}) {
  const [r, N] = L.useState(!1);
  return /* @__PURE__ */ i.jsxs("header", { className: Bl("product-header", o && "header-transparent"), children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "brand",
        type: "button",
        onClick: () => f.authenticated || f.local_mode ? x("navigate", { view: "centre" }) : window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "AI Delivery Arena home",
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "brand-mark", children: "A" }),
          /* @__PURE__ */ i.jsxs("span", { className: "brand-copy", children: [
            /* @__PURE__ */ i.jsx("strong", { children: f.product.name }),
            /* @__PURE__ */ i.jsx("small", { children: f.product.tagline })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("nav", { className: "header-actions", "aria-label": "Product actions", children: [
      /* @__PURE__ */ i.jsxs(
        "a",
        {
          className: "header-link desktop-only",
          href: f.links?.github,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ i.jsx(sh, { size: 16 }),
            " Source"
          ]
        }
      ),
      f.authenticated || f.local_mode ? /* @__PURE__ */ i.jsxs("div", { className: "account-menu", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "account-button",
            type: "button",
            "aria-expanded": r,
            onClick: () => N((M) => !M),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "account-avatar", children: /* @__PURE__ */ i.jsx(ws, { size: 16 }) }),
              /* @__PURE__ */ i.jsx("span", { className: "desktop-only", children: f.local_mode ? "Local participant" : f.user?.email }),
              /* @__PURE__ */ i.jsx(Un, { size: 15 })
            ]
          }
        ),
        r && /* @__PURE__ */ i.jsxs("div", { className: "account-popover", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("small", { children: "Signed in as" }),
            /* @__PURE__ */ i.jsx("strong", { children: f.local_mode ? "Local preview" : f.user?.email })
          ] }),
          !f.local_mode && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => x("sign_out"), children: [
            /* @__PURE__ */ i.jsx(Pv, { size: 15 }),
            " Sign out"
          ] })
        ] })
      ] }) : /* @__PURE__ */ i.jsx("a", { className: "button button-secondary header-cta", href: "#access", children: "Sign in" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "mobile-menu",
          type: "button",
          "aria-label": "Open menu",
          onClick: () => N((M) => !M),
          children: /* @__PURE__ */ i.jsx(e1, { size: 20 })
        }
      )
    ] })
  ] });
}
function h1({ notice: f }) {
  const [x, o] = L.useState(!!f);
  if (L.useEffect(() => {
    if (o(!!f), !f) return;
    const N = window.setTimeout(() => o(!1), 6e3);
    return () => window.clearTimeout(N);
  }, [f?.kind, f?.message]), !f || !x) return null;
  const r = f.kind === "error" ? qs : Rs;
  return /* @__PURE__ */ i.jsxs("div", { className: Bl("toast", `toast-${f.kind}`), role: "status", children: [
    /* @__PURE__ */ i.jsx(r, { size: 18 }),
    /* @__PURE__ */ i.jsx("span", { children: f.message }),
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => o(!1), "aria-label": "Dismiss", children: /* @__PURE__ */ i.jsx(fh, { size: 16 }) })
  ] });
}
function m1({ data: f, emit: x }) {
  const [o, r] = L.useState("signin"), [N, M] = L.useState(""), [Q, C] = L.useState(""), [O, S] = L.useState(!1), [Z, R] = L.useState(!1);
  L.useEffect(() => R(!1), [f.notice, f.authenticated]);
  const ce = (ye) => {
    ye.preventDefault(), R(!0), x(o === "signin" ? "sign_in" : "sign_up", {
      email: N,
      password: Q,
      consent: O
    });
  };
  return f.configured ? f.canary?.ready ? /* @__PURE__ */ i.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "auth-heading", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "status-pill status-live", children: [
        /* @__PURE__ */ i.jsx("span", {}),
        " Private canary"
      ] }),
      /* @__PURE__ */ i.jsx("h2", { children: "Enter the Arena" }),
      /* @__PURE__ */ i.jsx("p", { children: "Invited participants only. Durable cloud save. Resume across devices." })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "segmented-control", role: "tablist", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: o === "signin" ? "active" : "",
          onClick: () => r("signin"),
          role: "tab",
          "aria-selected": o === "signin",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: o === "create" ? "active" : "",
          onClick: () => r("create"),
          role: "tab",
          "aria-selected": o === "create",
          children: "Create account"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("form", { className: "auth-form", onSubmit: ce, children: [
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx("span", { children: o === "signin" ? "Email" : "Work email" }),
        /* @__PURE__ */ i.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ i.jsx(ws, { size: 17 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "email",
              autoComplete: "email",
              value: N,
              onChange: (ye) => M(ye.target.value),
              placeholder: "you@company.com",
              required: !0
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx("span", { children: o === "signin" ? "Password" : "Create password" }),
        /* @__PURE__ */ i.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ i.jsx(Fv, { size: 17 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "password",
              autoComplete: o === "signin" ? "current-password" : "new-password",
              value: Q,
              onChange: (ye) => C(ye.target.value),
              minLength: o === "create" ? 8 : void 0,
              placeholder: o === "create" ? "At least 8 characters" : "Your password",
              required: !0
            }
          )
        ] })
      ] }),
      o === "create" && /* @__PURE__ */ i.jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: O,
            onChange: (ye) => S(ye.target.checked)
          }
        ),
        /* @__PURE__ */ i.jsx("span", { children: "I understand this beta stores my synthetic simulation responses." })
      ] }),
      /* @__PURE__ */ i.jsxs($e, { type: "submit", className: "button-full", busy: Z, children: [
        o === "signin" ? "Continue" : "Create invited account",
        !Z && /* @__PURE__ */ i.jsx(Cl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ i.jsx(Cn, { size: 15 }),
      /* @__PURE__ */ i.jsx("span", { children: "Encrypted runs. No service-role key in the application." })
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Private canary" }),
    /* @__PURE__ */ i.jsx("h2", { children: "Canary access is closed" }),
    /* @__PURE__ */ i.jsx("p", { children: "Account access stays closed until invitation admission, participant feedback, and incident reporting are all configured. This prevents an unfinished canary from becoming an accidental public beta." }),
    /* @__PURE__ */ i.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ i.jsx(Cn, { size: 15 }),
      /* @__PURE__ */ i.jsx("span", { children: "No participant access is available yet." })
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Local preview" }),
    /* @__PURE__ */ i.jsx("h2", { children: "Cloud access is not configured" }),
    /* @__PURE__ */ i.jsx("p", { children: "Add the Supabase and Arena secrets to enable private cloud accounts. The local edition remains available for development." }),
    f.canary?.allow_local_mode && /* @__PURE__ */ i.jsxs($e, { className: "button-full", onClick: () => x("open_local"), children: [
      "Open local edition ",
      /* @__PURE__ */ i.jsx(Cl, { size: 17 })
    ] })
  ] });
}
function v1({ data: f, emit: x }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "marketing-page", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "marketing-hero-wrap", children: [
      /* @__PURE__ */ i.jsx(dh, { data: f, emit: x, transparent: !0 }),
      /* @__PURE__ */ i.jsxs("main", { className: "marketing-hero", children: [
        /* @__PURE__ */ i.jsxs("section", { className: "hero-copy-block", children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Open-source enterprise simulation" }),
          /* @__PURE__ */ i.jsxs("h1", { children: [
            "Enterprise AI leadership,",
            /* @__PURE__ */ i.jsx("span", { children: "tested under pressure." })
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "Lead a consequential AI initiative through incomplete evidence, stakeholder pressure, delivery crises and a final release decision. Your choices create consequences. Your debrief shows the evidence." }),
          /* @__PURE__ */ i.jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ i.jsxs("a", { className: "button button-light", href: "#access", children: [
              "Enter the private canary ",
              /* @__PURE__ */ i.jsx(Cl, { size: 18 })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "a",
              {
                className: "button button-hero-ghost",
                href: f.links?.github,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ i.jsx(sh, { size: 17 }),
                  " View source"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "hero-proof", children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "20" }),
              /* @__PURE__ */ i.jsx("span", { children: "decisions" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "6" }),
              /* @__PURE__ */ i.jsx("span", { children: "crises" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "7" }),
              /* @__PURE__ */ i.jsx("span", { children: "dimensions" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "90" }),
              /* @__PURE__ */ i.jsx("span", { children: "minutes" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(m1, { data: f, emit: x })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "hero-grid", "aria-hidden": "true" }),
      /* @__PURE__ */ i.jsx("div", { className: "hero-orb hero-orb-one", "aria-hidden": "true" }),
      /* @__PURE__ */ i.jsx("div", { className: "hero-orb hero-orb-two", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "proof-band", children: [
      /* @__PURE__ */ i.jsx("span", { children: "Designed for decisions across" }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "Value" }),
        /* @__PURE__ */ i.jsx("i", {}),
        /* @__PURE__ */ i.jsx("strong", { children: "Architecture" }),
        /* @__PURE__ */ i.jsx("i", {}),
        /* @__PURE__ */ i.jsx("strong", { children: "Data" }),
        /* @__PURE__ */ i.jsx("i", {}),
        /* @__PURE__ */ i.jsx("strong", { children: "Governance" }),
        /* @__PURE__ */ i.jsx("i", {}),
        /* @__PURE__ */ i.jsx("strong", { children: "Cost" }),
        /* @__PURE__ */ i.jsx("i", {}),
        /* @__PURE__ */ i.jsx("strong", { children: "Adoption" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-section assessment-gap", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "The assessment gap" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Vocabulary is cheap. Judgment under pressure is not." }),
        /* @__PURE__ */ i.jsx("p", { children: "Courses test recall. Interviews reward storytelling. The Arena records what you actually decide when enterprise constraints compete for attention." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "gap-comparison", children: [
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "comparison-label", children: "Conventional assessment" }),
          /* @__PURE__ */ i.jsx("h3", { children: "What do you know?" }),
          /* @__PURE__ */ i.jsxs("ul", { children: [
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(Ra, { size: 10 }),
              " Definitions and frameworks"
            ] }),
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(Ra, { size: 10 }),
              " Self-reported experience"
            ] }),
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(Ra, { size: 10 }),
              " Answers without consequences"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(Cl, { className: "comparison-arrow", size: 28 }),
        /* @__PURE__ */ i.jsxs("article", { className: "comparison-primary", children: [
          /* @__PURE__ */ i.jsx("span", { className: "comparison-label", children: "AI Delivery Arena" }),
          /* @__PURE__ */ i.jsx("h3", { children: "What do you do?" }),
          /* @__PURE__ */ i.jsxs("ul", { children: [
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(at, { size: 14 }),
              " Evidence-led commitments"
            ] }),
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(at, { size: 14 }),
              " Traceable decision records"
            ] }),
            /* @__PURE__ */ i.jsxs("li", { children: [
              /* @__PURE__ */ i.jsx(at, { size: 14 }),
              " Consequences and critical gates"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-section method-section", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-lead centered", children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "How the Arena works" }),
        /* @__PURE__ */ i.jsx("h2", { children: "One scenario. A complete executive decision loop." })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "method-grid", children: [
        {
          number: "01",
          icon: ac,
          title: "Understand",
          copy: "Enter a synthetic enterprise programme with a fixed mandate, incomplete evidence and explicit constraints."
        },
        {
          number: "02",
          icon: tc,
          title: "Investigate",
          copy: "Spend limited credits on the evidence that can materially improve your next decisions."
        },
        {
          number: "03",
          icon: Ys,
          title: "Commit",
          copy: "Record the action, accountable owner, rationale, assumption, risk and measurable stop condition."
        },
        {
          number: "04",
          icon: Bs,
          title: "Experience",
          copy: "Observe stakeholder reactions, operational signals and deterministic crises caused by prior choices."
        }
      ].map(({ number: o, icon: r, title: N, copy: M }) => /* @__PURE__ */ i.jsxs("article", { className: "method-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: o }),
          /* @__PURE__ */ i.jsx(r, { size: 20 })
        ] }),
        /* @__PURE__ */ i.jsx("h3", { children: N }),
        /* @__PURE__ */ i.jsx("p", { children: M })
      ] }, o)) })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-section methodology-band", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Transparent by design" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Inspect the scenario, engine and assessment methodology." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { children: "The deterministic engine and scenario fixtures are public. First-attempt scores remain concealed until D20. Results are simulation assessments, not certification or an independently calibrated benchmark." }),
        /* @__PURE__ */ i.jsxs("a", { href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
          "Explore on GitHub ",
          /* @__PURE__ */ i.jsx(Hs, { size: 16 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("footer", { className: "marketing-footer", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ i.jsx("span", { className: "brand-mark", children: "A" }),
        /* @__PURE__ */ i.jsxs("span", { className: "brand-copy", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "AI Delivery Arena" }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            "Private Canary v",
            f.product.version
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("a", { href: f.links?.privacy, target: "_blank", rel: "noreferrer", children: "Privacy" }),
        /* @__PURE__ */ i.jsx("a", { href: f.links?.terms, target: "_blank", rel: "noreferrer", children: "Terms" }),
        f.links?.incident && /* @__PURE__ */ i.jsx("a", { href: f.links.incident, children: "Report an incident" }),
        /* @__PURE__ */ i.jsx("span", { children: "Synthetic scenario" }),
        /* @__PURE__ */ i.jsx("span", { children: "Apache-2.0" })
      ] })
    ] })
  ] });
}
function qa({
  data: f,
  emit: x,
  children: o,
  compact: r = !1
}) {
  return /* @__PURE__ */ i.jsxs("div", { className: Bl("product-page", r && "product-page-compact"), children: [
    /* @__PURE__ */ i.jsx(dh, { data: f, emit: x }),
    o,
    /* @__PURE__ */ i.jsxs("footer", { className: "product-footer", children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        "Private Canary v",
        f.product.version
      ] }),
      /* @__PURE__ */ i.jsx("span", { children: "Simulation assessment. Not independently calibrated." }),
      f.links?.incident && /* @__PURE__ */ i.jsx("a", { href: f.links.incident, children: "Report an incident" })
    ] })
  ] });
}
function Ds({ children: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "empty-state", children: [
    /* @__PURE__ */ i.jsx(Gs, { size: 26 }),
    /* @__PURE__ */ i.jsx("p", { children: f })
  ] });
}
function y1({ data: f, emit: x }) {
  const r = (f.centre ?? {}).runs ?? [], N = r.find((X) => X.status !== "completed"), M = r.filter((X) => X.status === "completed").length, [Q, C] = L.useState(null), [O, S] = L.useState(""), [Z, R] = L.useState(!1), ce = L.useRef(null);
  L.useEffect(() => R(!1), [f.notice, f.screen]);
  const ye = (X) => x("navigate", {
    view: X.status === "completed" ? "debrief" : "decision",
    run_id: X.run_id
  }), De = async (X) => {
    const _e = X.target.files?.[0];
    if (_e) {
      R(!0);
      try {
        const Re = JSON.parse(await _e.text());
        x("import_run", { document: Re });
      } catch {
        R(!1), window.alert("That file is not valid JSON.");
      } finally {
        X.target.value = "";
      }
    }
  };
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: x, children: /* @__PURE__ */ i.jsxs("main", { className: "run-centre page-width", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "page-title-row", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Run centre" }),
        /* @__PURE__ */ i.jsx("h1", { children: "Your leadership evidence." }),
        /* @__PURE__ */ i.jsx("p", { children: "Continue an attempt, review a completed debrief or begin a clean run. Committed decisions remain immutable." })
      ] }),
      /* @__PURE__ */ i.jsxs($e, { onClick: () => x("open_briefing"), children: [
        "New attempt ",
        /* @__PURE__ */ i.jsx(Cl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "summary-grid", children: [
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(Iv, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: r.length }),
          /* @__PURE__ */ i.jsx("span", { children: "Total attempts" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(ec, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: N ? 1 : 0 }),
          /* @__PURE__ */ i.jsx("span", { children: "In progress" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(Us, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: M }),
          /* @__PURE__ */ i.jsx("span", { children: "Debriefs ready" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(Os, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: f.local_mode ? "Local" : "Cloud" }),
          /* @__PURE__ */ i.jsx("span", { children: "Save mode" })
        ] })
      ] })
    ] }),
    N ? /* @__PURE__ */ i.jsxs("section", { className: "active-run-card", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "active-run-main", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "active-run-kicker", children: [
          /* @__PURE__ */ i.jsxs("span", { className: "status-pill status-progress", children: [
            /* @__PURE__ */ i.jsx("span", {}),
            " In progress"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Last saved ",
            lh(N.updated_at)
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("h2", { children: N.display_name }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Procurement Under Pressure · ",
          N.completed,
          " of ",
          N.total,
          " decisions committed"
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "progress-track", "aria-label": `${N.completed} of ${N.total}`, children: /* @__PURE__ */ i.jsx("span", { style: { width: `${N.completed / N.total * 100}%` } }) }),
        /* @__PURE__ */ i.jsxs("div", { className: "active-run-meta", children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            Math.round(N.completed / N.total * 100),
            "% complete"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Next D",
            String(N.completed + 1).padStart(2, "0")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "active-run-action", children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress-ring", style: { "--progress": `${N.completed / N.total * 360}deg` }, children: /* @__PURE__ */ i.jsxs("span", { children: [
          N.completed,
          "/",
          N.total
        ] }) }),
        /* @__PURE__ */ i.jsxs($e, { onClick: () => ye(N), children: [
          "Continue at D",
          String(N.completed + 1).padStart(2, "0"),
          /* @__PURE__ */ i.jsx(Cl, { size: 17 })
        ] })
      ] })
    ] }) : /* @__PURE__ */ i.jsxs("section", { className: "first-run-banner", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Your first attempt" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ i.jsx("p", { children: "Five stages, 20 decisions and approximately 90 minutes." })
      ] }),
      /* @__PURE__ */ i.jsxs($e, { onClick: () => x("open_briefing"), children: [
        "Read the briefing ",
        /* @__PURE__ */ i.jsx(Cl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "run-library", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-toolbar", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Attempt library" }),
          /* @__PURE__ */ i.jsx("h2", { children: "All runs" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: ce,
              className: "visually-hidden",
              type: "file",
              accept: ".json,application/json",
              onChange: De
            }
          ),
          /* @__PURE__ */ i.jsxs(
            $e,
            {
              variant: "secondary",
              busy: Z,
              onClick: () => ce.current?.click(),
              children: [
                /* @__PURE__ */ i.jsx(n1, { size: 16 }),
                " Import local run"
              ]
            }
          )
        ] })
      ] }),
      r.length === 0 ? /* @__PURE__ */ i.jsx(Ds, { children: "No attempts yet. Start with the mission briefing." }) : /* @__PURE__ */ i.jsxs("div", { className: "run-table", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "run-table-head", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Attempt" }),
          /* @__PURE__ */ i.jsx("span", { children: "Progress" }),
          /* @__PURE__ */ i.jsx("span", { children: "Updated" }),
          /* @__PURE__ */ i.jsx("span", {})
        ] }),
        r.map((X) => /* @__PURE__ */ i.jsxs("article", { className: "run-table-row", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "run-name-cell", children: [
            /* @__PURE__ */ i.jsx("span", { className: Bl("run-icon", X.status === "completed" && "run-icon-complete"), children: X.status === "completed" ? /* @__PURE__ */ i.jsx(at, { size: 16 }) : /* @__PURE__ */ i.jsx(ec, { size: 16 }) }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              Q === X.run_id ? /* @__PURE__ */ i.jsxs(
                "form",
                {
                  className: "rename-form",
                  onSubmit: (_e) => {
                    _e.preventDefault(), x("rename_run", {
                      run_id: X.run_id,
                      display_name: O
                    }), C(null);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        autoFocus: !0,
                        value: O,
                        maxLength: 100,
                        onChange: (_e) => S(_e.target.value)
                      }
                    ),
                    /* @__PURE__ */ i.jsx("button", { type: "submit", children: /* @__PURE__ */ i.jsx(at, { size: 15 }) }),
                    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => C(null), children: /* @__PURE__ */ i.jsx(fh, { size: 15 }) })
                  ]
                }
              ) : /* @__PURE__ */ i.jsx("strong", { children: X.display_name }),
              /* @__PURE__ */ i.jsx("small", { children: X.run_id })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { className: Bl("status-pill", X.status === "completed" ? "status-complete" : "status-progress"), children: X.status === "completed" ? "Complete" : "In progress" }),
            /* @__PURE__ */ i.jsxs("small", { children: [
              X.completed,
              "/",
              X.total,
              " decisions"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { children: lh(X.updated_at) }),
            /* @__PURE__ */ i.jsxs("small", { children: [
              "Revision ",
              X.revision
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "run-row-actions", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Rename ${X.display_name}`,
                onClick: () => {
                  C(X.run_id), S(X.display_name);
                },
                children: /* @__PURE__ */ i.jsx(l1, { size: 15 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "run-delete-action",
                type: "button",
                "aria-label": `Delete ${X.display_name}`,
                onClick: () => {
                  window.confirm(
                    `Delete ${X.display_name}? This removes the run and cannot be undone. Download any completed evidence first.`
                  ) && (f1(f, X.run_id), x("delete_run", { run_id: X.run_id }));
                },
                children: /* @__PURE__ */ i.jsx(a1, { size: 15 })
              }
            ),
            /* @__PURE__ */ i.jsxs($e, { variant: "secondary", onClick: () => ye(X), children: [
              X.status === "completed" ? "Open debrief" : "Resume",
              /* @__PURE__ */ i.jsx(Ms, { size: 16 })
            ] })
          ] })
        ] }, X.run_id))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "import-note", children: [
        /* @__PURE__ */ i.jsx(Rn, { size: 15 }),
        /* @__PURE__ */ i.jsx("span", { children: "Local JSON checkpoints are replay-verified before they enter your account." })
      ] })
    ] })
  ] }) });
}
function p1({ data: f, emit: x }) {
  const o = f.briefing ?? {}, r = o.scenario ?? {}, N = o.stages ?? [], [M, Q] = L.useState(!1);
  return L.useEffect(() => Q(!1), [f.screen, f.notice]), /* @__PURE__ */ i.jsx(qa, { data: f, emit: x, children: /* @__PURE__ */ i.jsxs("main", { className: "briefing-page page-width", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => x("navigate", { view: "centre" }),
        children: [
          /* @__PURE__ */ i.jsx(Dn, { size: 16 }),
          " Run centre"
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("section", { className: "briefing-hero", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Mission briefing" }),
        /* @__PURE__ */ i.jsx("h1", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ i.jsx("p", { children: "You are the accountable AI delivery lead. The executive team expects a defensible recommendation, not automatic agreement with the sponsor." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "briefing-classification", children: [
        /* @__PURE__ */ i.jsx(Xs, { size: 17 }),
        "Synthetic enterprise scenario"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("section", { className: "briefing-metrics", children: [
      ["16 weeks", "Fixed timeline"],
      ["€1.2m", "Budget envelope"],
      ["12 systems", "Fragmented data"],
      ["10 credits", "Investigation"]
    ].map(([C, O]) => /* @__PURE__ */ i.jsxs("article", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: C }),
      /* @__PURE__ */ i.jsx("span", { children: O })
    ] }, O)) }),
    /* @__PURE__ */ i.jsxs("section", { className: "briefing-body", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "briefing-main", children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Your mandate" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Turn ambiguity into a defensible release recommendation." }),
        /* @__PURE__ */ i.jsx("p", { className: "briefing-premise", children: r.premise }),
        /* @__PURE__ */ i.jsx("h3", { children: "Known constraints" }),
        /* @__PURE__ */ i.jsx("div", { className: "constraint-grid", children: [
          ["Commercial pressure", "The sponsor has already announced an aggressive savings ambition."],
          ["Model approval", "The preferred external LLM has not been approved."],
          ["Data sovereignty", "European data-processing constraints apply."],
          ["Decision authority", "Governance ownership and the meaning of business release remain unresolved."]
        ].map(([C, O], S) => /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: String(S + 1).padStart(2, "0") }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: C }),
            /* @__PURE__ */ i.jsx("p", { children: O })
          ] })
        ] }, C)) }),
        /* @__PURE__ */ i.jsxs("section", { className: "assessment-contract-preview", children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "What this exercise measures" }),
          /* @__PURE__ */ i.jsx("h3", { children: "Three results. Do not confuse them." }),
          /* @__PURE__ */ i.jsxs("div", { className: "assessment-layer-grid", children: [
            /* @__PURE__ */ i.jsxs("article", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "1. Your competency" }),
              /* @__PURE__ */ i.jsx("p", { children: "Selected actions, evidence use, response completeness, chronology and later corrections produce a seven-dimension score." })
            ] }),
            /* @__PURE__ */ i.jsxs("article", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "2. Programme health" }),
              /* @__PURE__ */ i.jsx("p", { children: "Your choices change the simulated initiative. This state shows consequences; it is not your competency score." })
            ] }),
            /* @__PURE__ */ i.jsxs("article", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "3. Critical gates" }),
              /* @__PURE__ */ i.jsx("p", { children: "Seven non-compensable release controls can cap the result. Strength elsewhere cannot cancel a material breach." })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "assessment-boundary-note", children: "Your written rationale is retained for traceability and must be complete. This release does not semantically judge prose. Substantive deterministic scoring follows the action selected and the evidence recorded." })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "gate-handbook", children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "The seven release controls" }),
          /* @__PURE__ */ i.jsx("h3", { children: "What every final recommendation must establish." }),
          /* @__PURE__ */ i.jsx("p", { children: "These are control expectations, not an answer key. You still decide how to satisfy them as evidence and pressure change." }),
          /* @__PURE__ */ i.jsx("div", { children: c1.map(([C, O, S]) => /* @__PURE__ */ i.jsxs("article", { children: [
            /* @__PURE__ */ i.jsx("span", { children: C }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: O }),
              /* @__PURE__ */ i.jsx("p", { children: S })
            ] })
          ] }, C)) })
        ] }),
        /* @__PURE__ */ i.jsx("h3", { children: "Programme stages" }),
        /* @__PURE__ */ i.jsx("div", { className: "briefing-stages", children: N.map((C, O) => {
          const S = rh[O] ?? Ra;
          return /* @__PURE__ */ i.jsxs("article", { children: [
            /* @__PURE__ */ i.jsx("span", { children: /* @__PURE__ */ i.jsx(S, { size: 17 }) }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsxs("small", { children: [
                "Stage ",
                O + 1
              ] }),
              /* @__PURE__ */ i.jsx("strong", { children: C.label }),
              /* @__PURE__ */ i.jsx("p", { children: C.purpose })
            ] })
          ] }, C.id);
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("aside", { className: "briefing-rules", children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Before you enter" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Commit means permanent." }),
        /* @__PURE__ */ i.jsxs("ul", { children: [
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(tc, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Investigate deliberately" }),
              "Evidence windows can close."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(Ys, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Make the record complete" }),
              "Owner, rationale, assumption, risk and stop condition."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(Bs, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "No live coaching" }),
              "Scores and preferred paths stay concealed."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(Us, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Debrief after D20" }),
              "Critical gates and criterion evidence then unlock."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "mechanics-box", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "How evidence and signals work" }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("span", { children: "Cite now" }),
            "Available evidence can support the decision you are recording."
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("span", { children: "Order for later" }),
            "Spend a credit now. It cannot support today’s decision."
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("span", { children: "Due Week X" }),
            "The ordered finding becomes citable in that programme week."
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("span", { children: "Signals" }),
            "Observable changes appear after commitment and stay marked until opened."
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "time-box", children: [
          /* @__PURE__ */ i.jsx(ec, { size: 19 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "75–90 minutes" }),
            /* @__PURE__ */ i.jsx("span", { children: "Save and resume at any point" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs(
          $e,
          {
            className: "button-full",
            busy: M,
            onClick: () => {
              Q(!0), x("start_run");
            },
            children: [
              "Enter the Arena ",
              !M && /* @__PURE__ */ i.jsx(Cl, { size: 17 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function g1({ stages: f, run: x }) {
  const o = new Set((x.history ?? []).map((r) => r.decision_id));
  return /* @__PURE__ */ i.jsx("div", { className: "stage-rail", "aria-label": "Programme stages", children: f.map((r, N) => {
    const M = (r.decision_ids ?? []).every((O) => o.has(O)), Q = r.id === x.stage?.id, C = rh[N] ?? Ra;
    return /* @__PURE__ */ i.jsxs("div", { className: Bl("stage-step", M && "done", Q && "active"), children: [
      /* @__PURE__ */ i.jsx("span", { className: "stage-step-icon", children: M ? /* @__PURE__ */ i.jsx(at, { size: 14 }) : /* @__PURE__ */ i.jsx(C, { size: 14 }) }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsxs("small", { children: [
          "Stage ",
          N + 1
        ] }),
        /* @__PURE__ */ i.jsx("strong", { children: r.label })
      ] })
    ] }, r.id);
  }) });
}
function x1({ data: f, emit: x }) {
  const o = f.run ?? {}, r = o.current_decision ?? {}, N = `${o.run_id}:${r.id}`, M = L.useMemo(
    () => s1(
      f,
      String(o.run_id),
      String(r.id),
      Number(o.revision)
    ),
    [
      f.local_mode,
      f.user?.id,
      r.id,
      o.revision,
      o.run_id
    ]
  ), Q = L.useMemo(
    () => th(M, f.draft ?? Pi),
    [N, M]
  ), [C, O] = L.useState(Q.draft), [S, Z] = L.useState("evidence"), [R, ce] = L.useState("all"), [ye, De] = L.useState(""), [X, _e] = L.useState(null), [Re, Be] = L.useState(
    Q.synced === tt(Q.draft) ? "Cloud synchronized" : "Recovered on this device"
  ), [Ce, Ke] = L.useState([]), [yl, Le] = L.useState(0), W = L.useRef(tt(f.draft ?? Pi)), be = L.useRef(null), al = L.useRef(N), El = L.useMemo(
    () => u1(f, String(o.run_id)),
    [f.local_mode, f.user?.id, o.run_id]
  ), [nl, Ye] = L.useState(
    () => nh(El)
  );
  L.useEffect(() => {
    if (al.current !== N) {
      al.current = N;
      const j = f.draft ?? Pi, V = th(M, j);
      O(V.draft), W.current = tt(j), be.current = null, Be(
        V.synced === tt(V.draft) ? "Cloud synchronized" : "Recovered on this device"
      ), Ke([]), _e(null);
    }
  }, [N, f.draft, M]), L.useEffect(() => {
    Ye(nh(El));
  }, [El]), L.useEffect(() => {
    (f.notice || f.sync) && _e(null);
    const j = be.current;
    if (j && f.sync?.decision_id === r.id && f.sync?.sync_id === j.id) {
      W.current = j.serialized, Ts(M, C, j.serialized), be.current = null, Be(
        tt(C) === j.serialized ? "Cloud synchronized" : "Saved on this device"
      );
      return;
    }
    f.notice?.kind === "error" && j && (be.current = null, Be("Saved on this device · retry pending"), Le((V) => V + 1));
  }, [
    f.notice,
    f.sync?.saved_at,
    f.sync?.sync_id,
    r.id,
    C,
    M
  ]), L.useEffect(() => {
    const j = tt(C);
    if (j === W.current) {
      Ts(M, C, j), Be("Cloud synchronized");
      return;
    }
    Ts(M, C), Be("Saved on this device");
    const V = window.setTimeout(() => {
      if (be.current?.serialized === j) return;
      const I = ah();
      be.current = { id: I, serialized: j }, Be("Syncing to cloud…"), x("save_draft", {
        run_id: o.run_id,
        decision_id: r.id,
        expected_revision: o.revision,
        sync_id: I,
        draft: C
      });
    }, 1e4);
    return () => window.clearTimeout(V);
  }, [
    C,
    M,
    r.id,
    x,
    o.revision,
    o.run_id,
    yl
  ]);
  const Tl = (o.evidence ?? []).filter(
    (j) => ["available", "verified"].includes(j.state)
  ), il = o.operational_signals ?? [], Je = Tl.filter(
    (j) => j.request_week !== null && j.request_week !== void 0
  ), z = new Set(Je.map((j) => j.id)), D = il.slice(
    Math.min(nl.signalCount, il.length)
  ), Y = Je.filter(
    (j) => !nl.evidenceIds.includes(j.id)
  ), ie = (o.crises ?? []).find(
    (j) => j.linked_decision === r.id
  ), re = (o.evidence ?? []).filter((j) => {
    const V = `${j.id} ${j.title}`.toLowerCase().includes(ye.toLowerCase()), I = R === "all" || R === "available" && ["available", "verified"].includes(j.state) || R === "requested" && j.state === "requested" || R === "requestable" && j.state === "requestable";
    return V && I;
  }).sort(
    (j, V) => Number(z.has(V.id)) - Number(z.has(j.id))
  ), h = (j, V) => O((I) => ({ ...I, [j]: V })), E = () => ({
    run_id: o.run_id,
    decision_id: r.id,
    expected_revision: o.revision,
    draft: C
  }), U = (j, V = {}) => {
    if (j === "navigate" || j === "sign_out") {
      Be("Syncing before exit…"), x(j, { ...V, ...E() });
      return;
    }
    x(j, V);
  }, H = (j) => {
    const V = tt(C), I = ah();
    be.current = { id: I, serialized: V }, _e(`evidence:${j}`), Be("Syncing to cloud…"), x("request_evidence", {
      evidence_id: j,
      sync_id: I,
      ...E()
    });
  }, K = (j) => {
    Z(j), j !== "record" && (j === "evidence" && (ce("available"), De("")), Ye((V) => {
      const I = {
        signalCount: j === "signals" ? il.length : V.signalCount,
        evidenceIds: j === "evidence" ? Array.from(
          /* @__PURE__ */ new Set([
            ...V.evidenceIds,
            ...Je.map((Ot) => Ot.id)
          ])
        ) : V.evidenceIds
      };
      return d1(El, I), I;
    }));
  }, F = () => {
    const j = o1(C);
    if (Ke(j), j.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    _e("review"), x("review_decision", {
      ...E()
    });
  };
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: U, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "cockpit", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "cockpit-topbar", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => U("navigate", {
            view: "centre",
            run_id: o.run_id
          }),
          children: [
            /* @__PURE__ */ i.jsx(Dn, { size: 15 }),
            " Run centre"
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(g1, { stages: f.stages ?? [], run: o }),
      /* @__PURE__ */ i.jsxs("div", { className: "save-state", children: [
        /* @__PURE__ */ i.jsx(Os, { size: 15 }),
        /* @__PURE__ */ i.jsx("span", { children: Re }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          "Rev ",
          o.revision
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "decision-titlebar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs("span", { className: "eyebrow", children: [
          o.stage?.label,
          " · Week ",
          r.week
        ] }),
        /* @__PURE__ */ i.jsxs("h1", { children: [
          r.id,
          ". ",
          r.title
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "decision-progress", children: [
        /* @__PURE__ */ i.jsx("strong", { children: Number(o.progress?.completed ?? 0) + 1 }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "of ",
          o.progress?.total
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-grid", children: [
      /* @__PURE__ */ i.jsxs("section", { className: "decision-workspace", children: [
        (D.length > 0 || Y.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: "change-strip", "aria-live": "polite", children: [
          /* @__PURE__ */ i.jsx("span", { className: "change-strip-icon", children: /* @__PURE__ */ i.jsx(t1, { size: 18 }) }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Changes since your last decision" }),
            /* @__PURE__ */ i.jsx("p", { children: [
              D.length > 0 ? `${D.length} new operational ${D.length === 1 ? "signal" : "signals"}` : null,
              Y.length > 0 ? `${Y.length} evidence ${Y.length === 1 ? "item has" : "items have"} arrived` : null
            ].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "change-strip-actions", children: [
            D.length > 0 && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => K("signals"), children: [
              "View signals ",
              /* @__PURE__ */ i.jsx(Ms, { size: 15 })
            ] }),
            Y.length > 0 && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => K("evidence"), children: [
              "View evidence ",
              /* @__PURE__ */ i.jsx(Ms, { size: 15 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { className: "situation-panel", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "panel-label", children: [
            /* @__PURE__ */ i.jsx(ac, { size: 15 }),
            " Decision moment"
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "decision-moment", children: r.moment }),
          /* @__PURE__ */ i.jsxs("div", { className: "known-info", children: [
            /* @__PURE__ */ i.jsx(Rn, { size: 17 }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Known information" }),
              /* @__PURE__ */ i.jsx("p", { children: r.information })
            ] })
          ] })
        ] }),
        ie && /* @__PURE__ */ i.jsxs("article", { className: "crisis-alert", children: [
          /* @__PURE__ */ i.jsx(Mt, { size: 20 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Material event" }),
            /* @__PURE__ */ i.jsx("p", { children: ie.observation })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "action-section", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "section-title", children: [
            /* @__PURE__ */ i.jsx("span", { className: "step-number", children: "1" }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("h2", { children: "Choose your action" }),
              /* @__PURE__ */ i.jsx("p", { children: "Select the stance you are prepared to defend." })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "option-list", role: "radiogroup", "aria-label": "Action choices", children: (r.options ?? []).map((j) => /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": C.option_id === j.id,
              className: Bl("option-card", C.option_id === j.id && "selected"),
              onClick: () => h("option_id", j.id),
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "option-letter", children: j.id }),
                /* @__PURE__ */ i.jsx("span", { className: "option-label", children: j.label }),
                /* @__PURE__ */ i.jsx("span", { className: "radio-mark", children: C.option_id === j.id && /* @__PURE__ */ i.jsx(at, { size: 14 }) })
              ]
            },
            j.id
          )) })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "decision-form", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "section-title", children: [
            /* @__PURE__ */ i.jsx("span", { className: "step-number", children: "2" }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("h2", { children: "Build the decision record" }),
              /* @__PURE__ */ i.jsx("p", { children: r.required_response })
            ] })
          ] }),
          Ce.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "validation-summary", role: "alert", children: [
            /* @__PURE__ */ i.jsx(qs, { size: 18 }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Complete the record before review" }),
              /* @__PURE__ */ i.jsx("ul", { children: Ce.map((j) => /* @__PURE__ */ i.jsx("li", { children: j }, j)) })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("label", { className: "field field-large", children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Rationale ",
              /* @__PURE__ */ i.jsxs("small", { children: [
                C.rationale.trim().length,
                "/40 minimum"
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(
              "textarea",
              {
                value: C.rationale,
                onChange: (j) => h("rationale", j.target.value),
                placeholder: "State what you will do, why it is proportionate now, and what evidence supports it."
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-grid form-grid-owner", children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "Accountable owner" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  value: C.owner,
                  onChange: (j) => h("owner", j.target.value),
                  placeholder: "Named role or person"
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "Acceptance or stop condition" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  value: C.acceptance_condition,
                  onChange: (j) => h("acceptance_condition", j.target.value),
                  placeholder: "A measurable threshold or condition"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-grid", children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "Critical assumption" }),
              /* @__PURE__ */ i.jsx(
                "textarea",
                {
                  value: C.assumptions,
                  onChange: (j) => h("assumptions", j.target.value),
                  placeholder: "What must remain true?"
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "Material risk" }),
              /* @__PURE__ */ i.jsx(
                "textarea",
                {
                  value: C.risk,
                  onChange: (j) => h("risk", j.target.value),
                  placeholder: "What could invalidate this action?"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("fieldset", { className: "citation-field", children: [
            /* @__PURE__ */ i.jsxs("legend", { children: [
              "Evidence cited ",
              /* @__PURE__ */ i.jsx("small", { children: "Optional. Select only items marked Cite now." })
            ] }),
            Tl.length === 0 ? /* @__PURE__ */ i.jsx("p", { children: "No evidence is currently available to cite." }) : /* @__PURE__ */ i.jsx("div", { className: "citation-list", children: Tl.map((j) => {
              const V = C.evidence_refs.includes(j.id);
              return /* @__PURE__ */ i.jsxs("label", { className: V ? "selected" : "", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: V,
                    onChange: () => h(
                      "evidence_refs",
                      V ? C.evidence_refs.filter((I) => I !== j.id) : [...C.evidence_refs, j.id]
                    )
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { children: [
                  /* @__PURE__ */ i.jsx("strong", { children: j.id }),
                  j.title
                ] })
              ] }, j.id);
            }) })
          ] }),
          r.id === "D20" && C.option_id === "F" && /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
            /* @__PURE__ */ i.jsx("span", { children: "Custom final route" }),
            /* @__PURE__ */ i.jsx(
              "select",
              {
                value: C.terminal_route,
                onChange: (j) => h("terminal_route", j.target.value),
                children: ["conditional_release", "reduced_scope", "extended_pilot", "pause", "full_release"].map((j) => /* @__PURE__ */ i.jsx("option", { value: j, children: j.replaceAll("_", " ").replace(/\b\w/g, (V) => V.toUpperCase()) }, j))
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "decision-actions", children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx(Os, { size: 15 }),
              /* @__PURE__ */ i.jsx("span", { children: Re })
            ] }),
            /* @__PURE__ */ i.jsxs($e, { busy: X === "review", onClick: F, children: [
              "Review decision ",
              !X && /* @__PURE__ */ i.jsx(Cl, { size: 17 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("aside", { className: "context-panel", children: [
        /* @__PURE__ */ i.jsx("div", { className: "context-tabs", role: "tablist", children: [
          [
            "evidence",
            Y.length > 0 ? `Evidence · ${Y.length} arrived` : "Evidence",
            kv
          ],
          [
            "signals",
            D.length > 0 ? `Signals · ${D.length} new` : "Signals",
            lc
          ],
          ["record", "Record", Wv]
        ].map(([j, V, I]) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            className: S === j ? "active" : "",
            role: "tab",
            "aria-selected": S === j,
            onClick: () => K(j),
            children: [
              /* @__PURE__ */ i.jsx(I, { size: 15 }),
              " ",
              /* @__PURE__ */ i.jsx("span", { children: V })
            ]
          },
          j
        )) }),
        S === "evidence" && /* @__PURE__ */ i.jsxs("div", { className: "context-content evidence-desk", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "credit-card", children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx(i1, { size: 18 }),
              /* @__PURE__ */ i.jsx("span", { children: "Investigation credits" })
            ] }),
            /* @__PURE__ */ i.jsxs("strong", { children: [
              o.credits?.remaining,
              /* @__PURE__ */ i.jsxs("small", { children: [
                " / ",
                o.credits?.total
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "credit-track", children: /* @__PURE__ */ i.jsx("span", { style: { width: `${o.credits?.remaining / o.credits?.total * 100}%` } }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "evidence-tools", children: [
            /* @__PURE__ */ i.jsxs("label", { children: [
              /* @__PURE__ */ i.jsx(tc, { size: 15 }),
              /* @__PURE__ */ i.jsx("input", { value: ye, onChange: (j) => De(j.target.value), placeholder: "Search evidence" })
            ] }),
            /* @__PURE__ */ i.jsxs("select", { value: R, onChange: (j) => ce(j.target.value), children: [
              /* @__PURE__ */ i.jsx("option", { value: "all", children: "All states" }),
              /* @__PURE__ */ i.jsx("option", { value: "available", children: "Cite now" }),
              /* @__PURE__ */ i.jsx("option", { value: "requested", children: "Due later" }),
              /* @__PURE__ */ i.jsx("option", { value: "requestable", children: "Order for later" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "evidence-list", children: re.map((j) => /* @__PURE__ */ i.jsx(
            j1,
            {
              item: j,
              arrived: z.has(j.id),
              credits: o.credits?.remaining,
              busy: X === `evidence:${j.id}`,
              onRequest: () => H(j.id)
            },
            j.id
          )) })
        ] }),
        S === "signals" && /* @__PURE__ */ i.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Operational view" }),
            /* @__PURE__ */ i.jsx("h3", { children: "Observable signals" })
          ] }),
          (o.operational_signals ?? []).length === 0 ? /* @__PURE__ */ i.jsx(Ds, { children: "No consequence signals have been observed yet." }) : /* @__PURE__ */ i.jsx("div", { className: "signal-list", children: (o.operational_signals ?? []).slice(-8).reverse().map((j, V) => /* @__PURE__ */ i.jsxs("article", { children: [
            /* @__PURE__ */ i.jsx(lc, { size: 15 }),
            /* @__PURE__ */ i.jsx("p", { children: j })
          ] }, `${j}-${V}`)) }),
          ie && /* @__PURE__ */ i.jsxs("div", { className: "context-crisis", children: [
            /* @__PURE__ */ i.jsx(Mt, { size: 16 }),
            /* @__PURE__ */ i.jsx("p", { children: ie.observation })
          ] })
        ] }),
        S === "record" && /* @__PURE__ */ i.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Immutable ledger" }),
            /* @__PURE__ */ i.jsx("h3", { children: "Committed record" })
          ] }),
          (o.history ?? []).length === 0 ? /* @__PURE__ */ i.jsx(Ds, { children: "Committed decisions will appear here." }) : /* @__PURE__ */ i.jsx("div", { className: "history-list", children: [...o.history ?? []].reverse().map((j) => /* @__PURE__ */ i.jsxs("details", { children: [
            /* @__PURE__ */ i.jsxs("summary", { children: [
              /* @__PURE__ */ i.jsx("span", { children: j.decision_id }),
              /* @__PURE__ */ i.jsx("strong", { children: j.title }),
              /* @__PURE__ */ i.jsx(Un, { size: 15 })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("small", { children: "Committed action" }),
              /* @__PURE__ */ i.jsx("p", { children: j.choice_label }),
              /* @__PURE__ */ i.jsx("small", { children: "Rationale" }),
              /* @__PURE__ */ i.jsx("p", { children: j.rationale })
            ] })
          ] }, j.decision_id)) }),
          /* @__PURE__ */ i.jsxs("div", { className: "ledger-chip", children: [
            /* @__PURE__ */ i.jsx(Cn, { size: 14 }),
            " ",
            o.ledger?.entries,
            " ledger entries"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function j1({
  item: f,
  arrived: x,
  credits: o,
  busy: r,
  onRequest: N
}) {
  const [M, Q] = L.useState(["available", "verified"].includes(f.state)), C = {
    available: "Cite now",
    verified: "Cite now",
    requested: f.arrival_week !== null && f.arrival_week !== void 0 ? `Due Week ${f.arrival_week}` : "Due later",
    requestable: "Order for later",
    unavailable: "Window closed"
  }, O = f.state === "requestable" && o >= f.cost;
  return /* @__PURE__ */ i.jsxs("article", { className: Bl("evidence-item", `evidence-${f.state}`, x && "evidence-arrived"), children: [
    /* @__PURE__ */ i.jsxs("button", { className: "evidence-summary", type: "button", onClick: () => Q((S) => !S), children: [
      /* @__PURE__ */ i.jsx("span", { className: "evidence-state-icon", children: ["available", "verified"].includes(f.state) ? /* @__PURE__ */ i.jsx(at, { size: 14 }) : f.state === "requested" ? /* @__PURE__ */ i.jsx(ec, { size: 14 }) : /* @__PURE__ */ i.jsx(Gs, { size: 14 }) }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("small", { children: f.id }),
        /* @__PURE__ */ i.jsx("strong", { children: f.title })
      ] }),
      /* @__PURE__ */ i.jsx("span", { className: "evidence-status", children: C[f.state] ?? f.state }),
      /* @__PURE__ */ i.jsx(Un, { size: 15, className: M ? "rotated" : "" })
    ] }),
    M && /* @__PURE__ */ i.jsxs("div", { className: "evidence-detail", children: [
      f.reveal ? /* @__PURE__ */ i.jsx("p", { children: f.reveal }) : f.state === "requested" ? /* @__PURE__ */ i.jsxs("p", { children: [
        "Ordered in Week ",
        f.request_week,
        ". It becomes citable in Week ",
        f.arrival_week,
        "."
      ] }) : /* @__PURE__ */ i.jsx("p", { children: "Order this finding now. Its contents remain sealed until the due week." }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: f.cost === 0 ? "Included" : `${f.cost} credit` }),
        x ? /* @__PURE__ */ i.jsxs("span", { children: [
          "Arrived Week ",
          f.arrival_week
        ] }) : /* @__PURE__ */ i.jsxs("span", { children: [
          f.lead_time_weeks,
          " week lead"
        ] })
      ] }),
      O && /* @__PURE__ */ i.jsxs($e, { variant: "secondary", className: "button-full", busy: r, onClick: N, children: [
        "Order for later ",
        !r && /* @__PURE__ */ i.jsx(Cl, { size: 15 })
      ] }),
      f.state === "requestable" && !O && /* @__PURE__ */ i.jsx("small", { className: "insufficient-credit", children: "Insufficient investigation credits" })
    ] })
  ] });
}
function b1({ data: f, emit: x }) {
  const o = f.run ?? {}, r = o.current_decision ?? {}, N = f.draft ?? Pi, M = (r.options ?? []).find((R) => R.id === N.option_id), Q = (o.evidence ?? []).filter((R) => N.evidence_refs.includes(R.id)), [C, O] = L.useState(!1), [S, Z] = L.useState(!1);
  return L.useEffect(() => Z(!1), [f.notice, f.screen]), /* @__PURE__ */ i.jsx(qa, { data: f, emit: x, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "review-page page-width-narrow", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => x("navigate", { view: "decision", run_id: o.run_id }),
        children: [
          /* @__PURE__ */ i.jsx(Dn, { size: 16 }),
          " Back to edit"
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("section", { className: "review-heading", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Review before permanent commitment" }),
      /* @__PURE__ */ i.jsxs("h1", { children: [
        r.id,
        ". ",
        r.title
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: "This is the last editable boundary. Confirm the record reflects the judgment you intend to defend." })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "review-card", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "review-action", children: [
        /* @__PURE__ */ i.jsx("span", { className: "option-letter", children: M?.id }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Selected action" }),
          /* @__PURE__ */ i.jsx("h2", { children: M?.label })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "review-record", children: [
        /* @__PURE__ */ i.jsxs("article", { className: "review-wide", children: [
          /* @__PURE__ */ i.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ i.jsx("p", { children: N.rationale })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Accountable owner" }),
          /* @__PURE__ */ i.jsx("p", { children: N.owner })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Critical assumption" }),
          /* @__PURE__ */ i.jsx("p", { children: N.assumptions })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Acceptance or stop condition" }),
          /* @__PURE__ */ i.jsx("p", { children: N.acceptance_condition })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Material risk" }),
          /* @__PURE__ */ i.jsx("p", { children: N.risk })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { className: "review-wide", children: [
          /* @__PURE__ */ i.jsx("small", { children: "Evidence cited" }),
          Q.length ? /* @__PURE__ */ i.jsx("div", { className: "review-evidence", children: Q.map((R) => /* @__PURE__ */ i.jsxs("span", { children: [
            R.id,
            " · ",
            R.title
          ] }, R.id)) }) : /* @__PURE__ */ i.jsx("p", { children: "None cited" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "commit-boundary", children: [
      /* @__PURE__ */ i.jsx(Mt, { size: 22 }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Permanent commitment boundary" }),
        /* @__PURE__ */ i.jsx("p", { children: "After commitment, this decision cannot be edited, replaced or silently rewritten." }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: C, onChange: (R) => O(R.target.checked) }),
          /* @__PURE__ */ i.jsx("span", { children: "I understand this decision becomes permanent." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "review-actions", children: [
      /* @__PURE__ */ i.jsxs($e, { variant: "secondary", onClick: () => x("navigate", { view: "decision", run_id: o.run_id }), children: [
        /* @__PURE__ */ i.jsx(Dn, { size: 16 }),
        " Back to edit"
      ] }),
      /* @__PURE__ */ i.jsxs(
        $e,
        {
          disabled: !C,
          busy: S,
          onClick: () => {
            Z(!0), x("commit_decision", { run_id: o.run_id, confirmed: !0 });
          },
          children: [
            /* @__PURE__ */ i.jsx(Cn, { size: 16 }),
            " Commit permanently"
          ]
        }
      )
    ] })
  ] }) });
}
function S1({ data: f, emit: x }) {
  const o = f.consequence ?? {}, r = f.run ?? {}, [N, M] = L.useState(!1);
  L.useEffect(() => M(!1), [f.notice, f.screen]);
  const Q = (o.signals ?? []).length || (o.crises ?? []).length || (o.evidence_arrived ?? []).length;
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: x, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "consequence-page page-width-narrow", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "commit-success", children: [
      /* @__PURE__ */ i.jsx("span", { className: "success-ring", children: /* @__PURE__ */ i.jsx(at, { size: 28 }) }),
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Decision recorded" }),
      /* @__PURE__ */ i.jsxs("h1", { children: [
        o.decision_id,
        " is now permanent."
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: o.choice }),
      /* @__PURE__ */ i.jsxs("div", { className: "ledger-confirmation", children: [
        /* @__PURE__ */ i.jsx(Cn, { size: 14 }),
        " Added to immutable run ledger · revision ",
        r.revision
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "observable-panel", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-title", children: [
        /* @__PURE__ */ i.jsx("span", { className: "step-number", children: /* @__PURE__ */ i.jsx(Bs, { size: 16 }) }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("h2", { children: "Observable consequence" }),
          /* @__PURE__ */ i.jsx("p", { children: "Only legitimate operational signals are shown during a first attempt." })
        ] })
      ] }),
      !Q && /* @__PURE__ */ i.jsxs("article", { className: "neutral-observation", children: [
        /* @__PURE__ */ i.jsx(Rn, { size: 18 }),
        /* @__PURE__ */ i.jsx("p", { children: "No new operational signal was observable at this boundary." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "observation-list", children: [
        (o.signals ?? []).map((C, O) => /* @__PURE__ */ i.jsxs("article", { className: "observation signal-observation", children: [
          /* @__PURE__ */ i.jsx(lc, { size: 18 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("small", { children: "New signal" }),
            /* @__PURE__ */ i.jsx("p", { children: C })
          ] })
        ] }, `${C}-${O}`)),
        (o.crises ?? []).map((C) => /* @__PURE__ */ i.jsxs("article", { className: "observation crisis-observation", children: [
          /* @__PURE__ */ i.jsx(Mt, { size: 18 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("small", { children: "Material event" }),
            /* @__PURE__ */ i.jsx("p", { children: C.observation })
          ] })
        ] }, C.id)),
        (o.evidence_arrived ?? []).map((C) => /* @__PURE__ */ i.jsxs("article", { className: "observation evidence-observation", children: [
          /* @__PURE__ */ i.jsx(Ys, { size: 18 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("small", { children: "Evidence arrived" }),
            /* @__PURE__ */ i.jsxs("p", { children: [
              C,
              " is now available."
            ] })
          ] })
        ] }, C))
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("aside", { className: "spoiler-note", children: [
      /* @__PURE__ */ i.jsx(Xs, { size: 18 }),
      /* @__PURE__ */ i.jsx("p", { children: "No score, critical-gate outcome or preferred-path coaching is exposed during a first attempt." })
    ] }),
    /* @__PURE__ */ i.jsxs(
      $e,
      {
        className: "button-full consequence-next",
        busy: N,
        onClick: () => {
          M(!0), x("continue_consequence", { run_id: r.run_id });
        },
        children: [
          o.completed ? "Open executive debrief" : `Continue to ${o.next_decision}`,
          !N && /* @__PURE__ */ i.jsx(Cl, { size: 17 })
        ]
      }
    )
  ] }) });
}
function z1({ data: f, emit: x }) {
  const o = f.report ?? {}, r = f.run ?? {}, N = o.outcome ?? {}, [M, Q] = L.useState("summary"), C = (o.gates ?? []).filter((Z) => Z.status === "fail"), O = (o.gates ?? []).filter((Z) => Z.status === "unresolved"), S = N.gate_standing === "blocked" ? "Blocked" : N.gate_standing === "review_required" ? "Review required" : "Cleared";
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: x, children: /* @__PURE__ */ i.jsxs("main", { className: "debrief-page", children: [
    /* @__PURE__ */ i.jsx("section", { className: "debrief-hero", children: /* @__PURE__ */ i.jsxs("div", { className: "page-width debrief-hero-inner", children: [
      /* @__PURE__ */ i.jsxs("button", { className: "text-back text-back-light", type: "button", onClick: () => x("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ i.jsx(Dn, { size: 16 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "debrief-heading-grid", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Executive debrief" }),
          /* @__PURE__ */ i.jsx("h1", { children: N.label ?? o.recommendation }),
          /* @__PURE__ */ i.jsx("p", { className: "debrief-verdict", children: N.verdict }),
          /* @__PURE__ */ i.jsxs("p", { className: "debrief-recommendation", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Your D20 recommendation:" }),
            " ",
            o.recommendation
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "score-lockup", children: [
          /* @__PURE__ */ i.jsx("strong", { children: o.reported_overall }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { children: "Gate-adjusted competency" }),
            /* @__PURE__ */ i.jsx("b", { children: o.provisional_label })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "debrief-facts", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Gate standing" }),
          /* @__PURE__ */ i.jsx("strong", { className: S === "Cleared" ? "positive" : "negative", children: S })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Critical controls" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            C.length,
            " failed · ",
            O.length,
            " unresolved"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Programme health" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            N.program_health_average ?? "–",
            " / 100"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Score before overall cap" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            N.score_before_overall_cap ?? o.raw_overall,
            " / 100"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "debrief-nav-wrap", children: /* @__PURE__ */ i.jsx("nav", { className: "debrief-nav page-width", "aria-label": "Debrief sections", children: [
      ["summary", "Executive summary"],
      ["gates", "Critical gates"],
      ["scorecard", "Competency scorecard"],
      ["timeline", "Decision timeline"]
    ].map(([Z, R]) => /* @__PURE__ */ i.jsx("button", { className: M === Z ? "active" : "", type: "button", onClick: () => Q(Z), children: R }, Z)) }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "debrief-content page-width", children: [
      M === "summary" && /* @__PURE__ */ i.jsx(_1, { report: o }),
      M === "gates" && /* @__PURE__ */ i.jsx(N1, { gates: o.gates ?? [] }),
      M === "scorecard" && /* @__PURE__ */ i.jsx(A1, { report: o }),
      M === "timeline" && /* @__PURE__ */ i.jsx(E1, { timeline: o.timeline ?? [] })
    ] }),
    /* @__PURE__ */ i.jsx("section", { className: "export-band", children: /* @__PURE__ */ i.jsxs("div", { className: "page-width export-inner", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Portable evidence" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Take the complete record with you." }),
        /* @__PURE__ */ i.jsx("p", { children: "Download the executive report or the replay-verifiable completed run." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs($e, { variant: "secondary", onClick: () => ih(`${r.run_id}-debrief.json`, o), children: [
          /* @__PURE__ */ i.jsx($v, { size: 16 }),
          " Evidence pack"
        ] }),
        /* @__PURE__ */ i.jsxs(
          $e,
          {
            disabled: !f.completed_run_document,
            onClick: () => ih(`${r.run_id}.json`, f.completed_run_document),
            children: [
              /* @__PURE__ */ i.jsx(Gs, { size: 16 }),
              " Completed run"
            ]
          }
        ),
        f.links?.feedback && /* @__PURE__ */ i.jsxs("a", { className: "button button-light", href: f.links.feedback, target: "_blank", rel: "noreferrer", children: [
          "Share canary feedback ",
          /* @__PURE__ */ i.jsx(Hs, { size: 16 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "page-width calibration-notice", children: [
      /* @__PURE__ */ i.jsx(Rn, { size: 17 }),
      /* @__PURE__ */ i.jsx("p", { children: o.notice })
    ] })
  ] }) });
}
function _1({ report: f }) {
  const x = f.outcome ?? {}, o = f.assessment_contract ?? {};
  return /* @__PURE__ */ i.jsxs("div", { className: "summary-view", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "result-explainer", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "subsection-heading", children: [
        /* @__PURE__ */ i.jsx(Rn, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "How to read this result" }),
          /* @__PURE__ */ i.jsx("h2", { children: "One run produced three different judgments." })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "result-layer-grid", children: [
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Participant competency" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            f.reported_overall,
            " / 100"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: o.participant_score }),
          x.overall_cap != null && /* @__PURE__ */ i.jsxs("small", { children: [
            "Overall score capped at ",
            x.overall_cap,
            " by a failed critical gate."
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Simulated programme" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            x.program_health_average,
            " / 100"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: o.program_state })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Release controls" }),
          /* @__PURE__ */ i.jsx("strong", { children: x.gate_standing === "blocked" ? "Blocked" : x.gate_standing === "review_required" ? "Review" : "Cleared" }),
          /* @__PURE__ */ i.jsx("p", { children: o.critical_gates })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "assessment-disclosure", children: [
        /* @__PURE__ */ i.jsx(Mt, { size: 16 }),
        o.free_text_boundary
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "judgment-columns", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ i.jsx(Rs, { size: 19 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Strongest evidence" }),
            /* @__PURE__ */ i.jsx("h2", { children: "Judgments that held" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "judgment-list", children: (f.strengths ?? []).map((r) => /* @__PURE__ */ i.jsxs("article", { className: "strength-card", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { children: r.criterion_id }),
            /* @__PURE__ */ i.jsx("strong", { children: r.score })
          ] }),
          /* @__PURE__ */ i.jsx("h3", { children: r.name }),
          /* @__PURE__ */ i.jsx("p", { children: r.why }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            "Supporting decisions: ",
            (r.evidence ?? []).join(", ") || "Structural evidence"
          ] })
        ] }, r.criterion_id)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ i.jsx(ac, { size: 19 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Replay priorities" }),
            /* @__PURE__ */ i.jsx("h2", { children: "Where judgment broke" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "judgment-list", children: (f.development_needs ?? []).map((r) => /* @__PURE__ */ i.jsxs("article", { className: "priority-card", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { children: r.criterion_id }),
            /* @__PURE__ */ i.jsx("strong", { children: r.score })
          ] }),
          /* @__PURE__ */ i.jsx("h3", { children: r.name }),
          /* @__PURE__ */ i.jsx("p", { children: r.priority }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            "Contrary evidence: ",
            (r.contrary_evidence ?? []).join(", ") || "Insufficient evidence"
          ] })
        ] }, r.criterion_id)) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "perspective-section", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "subsection-heading", children: [
        /* @__PURE__ */ i.jsx(ws, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Executive perspectives" }),
          /* @__PURE__ */ i.jsx("h2", { children: "How the decision reads upstairs" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "perspective-grid", children: (f.perspectives ?? []).map((r) => /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: r.role }),
          /* @__PURE__ */ i.jsx("strong", { children: r.score })
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: r.view })
      ] }, r.role)) })
    ] })
  ] });
}
function N1({ gates: f }) {
  const x = f.reduce((o, r) => (o[r.status] = (o[r.status] ?? 0) + 1, o), {});
  return /* @__PURE__ */ i.jsxs("div", { className: "gate-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Non-compensable controls" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Critical gates" }),
      /* @__PURE__ */ i.jsx("p", { children: "A failed critical gate cannot be offset by strength elsewhere. Unresolved is not a pass." }),
      /* @__PURE__ */ i.jsxs("div", { className: "gate-counts", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          x.pass ?? 0,
          " passed"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          x.fail ?? 0,
          " failed"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          x.unresolved ?? 0,
          " unresolved"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "gate-grid", children: f.map((o) => {
      const r = o.status === "pass" ? Rs : o.status === "unresolved" ? Mt : o.status === "not_applicable" ? Ra : qs, N = (o.basis_decisions ?? []).length > 0 ? o.basis_decisions : o.relevant_decisions;
      return /* @__PURE__ */ i.jsxs("article", { className: Bl("gate-card", `gate-${o.status.replace("_", "-")}`), children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            /* @__PURE__ */ i.jsx(r, { size: 18 }),
            o.status.replace("_", " ").toUpperCase()
          ] }),
          /* @__PURE__ */ i.jsx("strong", { children: o.gate_id })
        ] }),
        /* @__PURE__ */ i.jsx("h3", { children: o.title }),
        /* @__PURE__ */ i.jsxs("dl", { children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("dt", { children: "Control expected" }),
            /* @__PURE__ */ i.jsx("dd", { children: o.expected_control })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("dt", { children: "What your run established" }),
            /* @__PURE__ */ i.jsx("dd", { children: o.reason })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("dt", { children: o.status === "pass" ? "Keep it passed" : "Required recovery" }),
            /* @__PURE__ */ i.jsx("dd", { children: o.required_next_step })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("footer", { children: [
          /* @__PURE__ */ i.jsx("span", { children: o.effect }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            "Trace: ",
            (N ?? []).join(", ") || "Final scope evidence"
          ] })
        ] })
      ] }, o.gate_id);
    }) })
  ] });
}
function A1({ report: f }) {
  const x = f.dimensions ?? [], [o, r] = L.useState(x[0]?.id ?? null);
  return /* @__PURE__ */ i.jsxs("div", { className: "scorecard-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Seven dimensions · 28 criteria" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Competency scorecard" }),
      /* @__PURE__ */ i.jsx("p", { children: "Scores reflect selected actions, normalized evidence, chronology, corrections and response completeness." }),
      f.overall_cap != null && /* @__PURE__ */ i.jsxs("div", { className: "score-cap-callout", children: [
        /* @__PURE__ */ i.jsx(Mt, { size: 18 }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "The criterion-weighted score was ",
          f.raw_overall,
          ". A critical gate capped the reported result at ",
          f.overall_cap,
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "dimension-list", children: x.map((N) => /* @__PURE__ */ i.jsxs("article", { className: "dimension-card", children: [
      /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => r(o === N.id ? null : N.id), children: [
        /* @__PURE__ */ i.jsxs("div", { className: "dimension-score", children: [
          /* @__PURE__ */ i.jsx("strong", { children: N.reported_score.toFixed(1) }),
          /* @__PURE__ */ i.jsx("span", { children: "/ 100" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "dimension-name", children: [
          /* @__PURE__ */ i.jsx("strong", { children: N.label }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Weight ",
            Math.round(N.weight * 100),
            "%",
            N.cap != null ? ` · capped at ${N.cap}` : ""
          ] }),
          /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("i", { style: { width: `${Math.max(0, Math.min(100, N.reported_score))}%` } }) })
        ] }),
        /* @__PURE__ */ i.jsx(Un, { size: 18, className: o === N.id ? "rotated" : "" })
      ] }),
      o === N.id && /* @__PURE__ */ i.jsxs("div", { className: "criterion-table", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Criterion" }),
          /* @__PURE__ */ i.jsx("span", { children: "Score" }),
          /* @__PURE__ */ i.jsx("span", { children: "Recorded evidence" })
        ] }),
        (N.criteria ?? []).map((M) => /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: M.id }),
            /* @__PURE__ */ i.jsx("span", { children: M.name })
          ] }),
          /* @__PURE__ */ i.jsx("strong", { children: M.score }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("p", { children: M.reason }),
            /* @__PURE__ */ i.jsx("small", { children: M.stronger_evidence })
          ] })
        ] }, M.id))
      ] })
    ] }, N.id)) })
  ] });
}
function E1({ timeline: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "timeline-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Chronological evidence" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Decision timeline" }),
      /* @__PURE__ */ i.jsx("p", { children: "The first-attempt record exactly as it was committed." })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "timeline-list", children: f.map((x) => /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("span", { children: x.decision_id }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: x.title }),
          /* @__PURE__ */ i.jsx("small", { children: x.choice })
        ] }),
        /* @__PURE__ */ i.jsx(Un, { size: 18 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "timeline-detail", children: [
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ i.jsx("p", { children: x.rationale })
        ] }),
        (x.signals ?? []).length > 0 && /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Observable signals" }),
          /* @__PURE__ */ i.jsx("p", { children: x.signals.join(" · ") })
        ] }),
        (x.crises ?? []).length > 0 && /* @__PURE__ */ i.jsxs("article", { className: "timeline-crisis", children: [
          /* @__PURE__ */ i.jsx("small", { children: "Material events" }),
          /* @__PURE__ */ i.jsx("p", { children: x.crises.join(" · ") })
        ] })
      ] })
    ] }, x.decision_id)) })
  ] });
}
function T1({ data: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "fatal-page", children: [
    /* @__PURE__ */ i.jsx("span", { className: "brand-mark", children: "A" }),
    /* @__PURE__ */ i.jsx(Mt, { size: 30 }),
    /* @__PURE__ */ i.jsx("h1", { children: f.fatal?.title ?? "The Arena could not start" }),
    /* @__PURE__ */ i.jsx("p", { children: f.fatal?.message }),
    /* @__PURE__ */ i.jsxs("a", { className: "button button-primary", href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
      "Open repository ",
      /* @__PURE__ */ i.jsx(Hs, { size: 16 })
    ] })
  ] });
}
function M1({ data: f, emit: x }) {
  const o = f.screen, r = `${o}:${f.run?.run_id ?? ""}:${f.run?.current_decision?.id ?? ""}`;
  return L.useEffect(() => {
    const N = document.querySelector(
      '[data-testid="stMain"]'
    );
    N && (N.scrollTop = 0), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
  }, [r]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    o === "marketing" && /* @__PURE__ */ i.jsx(v1, { data: f, emit: x }),
    o === "centre" && /* @__PURE__ */ i.jsx(y1, { data: f, emit: x }),
    o === "briefing" && /* @__PURE__ */ i.jsx(p1, { data: f, emit: x }),
    o === "decision" && /* @__PURE__ */ i.jsx(x1, { data: f, emit: x }),
    o === "review" && /* @__PURE__ */ i.jsx(b1, { data: f, emit: x }),
    o === "consequence" && /* @__PURE__ */ i.jsx(S1, { data: f, emit: x }),
    o === "debrief" && /* @__PURE__ */ i.jsx(z1, { data: f, emit: x }),
    o === "fatal" && /* @__PURE__ */ i.jsx(T1, { data: f }),
    /* @__PURE__ */ i.jsx(h1, { notice: f.notice })
  ] });
}
const ch = /* @__PURE__ */ new WeakMap(), O1 = (f) => {
  const { data: x, parentElement: o, setTriggerValue: r } = f, N = o.querySelector(".arena-react-root");
  if (!N)
    throw new Error("AI Delivery Arena React root was not found.");
  let M = ch.get(o);
  M || (M = Lv.createRoot(N), ch.set(o, M)), M.render(
    /* @__PURE__ */ i.jsx(L.StrictMode, { children: /* @__PURE__ */ i.jsx(
      M1,
      {
        data: x,
        emit: (Q, C = {}) => {
          r("event", { type: Q, payload: C });
        }
      }
    ) })
  );
};
export {
  O1 as default
};
