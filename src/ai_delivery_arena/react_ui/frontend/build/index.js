var _s = { exports: {} }, Mn = {};
var Vo;
function Hv() {
  if (Vo) return Mn;
  Vo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, N, M) {
    var X = null;
    if (M !== void 0 && (X = "" + M), N.key !== void 0 && (X = "" + N.key), "key" in N) {
      M = {};
      for (var C in N)
        C !== "key" && (M[C] = N[C]);
    } else M = N;
    return N = M.ref, {
      $$typeof: f,
      type: r,
      key: X,
      ref: N !== void 0 ? N : null,
      props: M
    };
  }
  return Mn.Fragment = g, Mn.jsx = o, Mn.jsxs = o, Mn;
}
var Ko;
function Bv() {
  return Ko || (Ko = 1, _s.exports = Hv()), _s.exports;
}
var i = Bv(), zs = { exports: {} }, k = {};
var ko;
function Yv() {
  if (ko) return k;
  ko = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), X = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), J = Symbol.iterator;
  function ye(h) {
    return h === null || typeof h != "object" ? null : (h = J && h[J] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var Ce = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, ze = {};
  function Re(h, E, R) {
    this.props = h, this.context = E, this.refs = ze, this.updater = R || Ce;
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
  function De(h, E, R) {
    this.props = h, this.context = E, this.refs = ze, this.updater = R || Ce;
  }
  var ke = De.prototype = new Be();
  ke.constructor = De, Q(ke, Re.prototype), ke.isPureReactComponent = !0;
  var pl = Array.isArray;
  function Le() {
  }
  var F = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function nl(h, E, R) {
    var B = R.ref;
    return {
      $$typeof: f,
      type: h,
      key: E,
      ref: B !== void 0 ? B : null,
      props: R
    };
  }
  function Tl(h, E) {
    return nl(h.type, E, h.props);
  }
  function il(h) {
    return typeof h == "object" && h !== null && h.$$typeof === f;
  }
  function Ye(h) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(R) {
      return E[R];
    });
  }
  var Ml = /\/+/g;
  function cl(h, E) {
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
  function _(h, E, R, B, K) {
    var I = typeof h;
    (I === "undefined" || I === "boolean") && (h = null);
    var j = !1;
    if (h === null) j = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case g:
              j = !0;
              break;
            case q:
              return j = h._init, _(
                j(h._payload),
                E,
                R,
                B,
                K
              );
          }
      }
    if (j)
      return K = K(h), j = B === "" ? "." + cl(h, 0) : B, pl(K) ? (R = "", j != null && (R = j.replace(Ml, "$&/") + "/"), _(K, E, R, "", function(Ot) {
        return Ot;
      })) : K != null && (il(K) && (K = Tl(
        K,
        R + (K.key == null || h && h.key === K.key ? "" : ("" + K.key).replace(
          Ml,
          "$&/"
        ) + "/") + j
      )), E.push(K)), 1;
    j = 0;
    var V = B === "" ? "." : B + ":";
    if (pl(h))
      for (var P = 0; P < h.length; P++)
        B = h[P], I = V + cl(B, P), j += _(
          B,
          E,
          R,
          I,
          K
        );
    else if (P = ye(h), typeof P == "function")
      for (h = P.call(h), P = 0; !(B = h.next()).done; )
        B = B.value, I = V + cl(B, P++), j += _(
          B,
          E,
          R,
          I,
          K
        );
    else if (I === "object") {
      if (typeof h.then == "function")
        return _(
          Je(h),
          E,
          R,
          B,
          K
        );
      throw E = String(h), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function U(h, E, R) {
    if (h == null) return h;
    var B = [], K = 0;
    return _(h, B, "", "", function(I) {
      return E.call(R, I, K++);
    }), B;
  }
  function G(h) {
    if (h._status === -1) {
      var E = h._result;
      E = E(), E.then(
        function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = R);
        },
        function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = R);
        }
      ), h._status === -1 && (h._status = 0, h._result = E);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(h) {
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
    map: U,
    forEach: function(h, E, R) {
      U(
        h,
        function() {
          E.apply(this, arguments);
        },
        R
      );
    },
    count: function(h) {
      var E = 0;
      return U(h, function() {
        E++;
      }), E;
    },
    toArray: function(h) {
      return U(h, function(E) {
        return E;
      }) || [];
    },
    only: function(h) {
      if (!il(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return k.Activity = D, k.Children = re, k.Component = Re, k.Fragment = o, k.Profiler = N, k.PureComponent = De, k.StrictMode = r, k.Suspense = O, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, k.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return F.H.useMemoCache(h);
    }
  }, k.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, k.cacheSignal = function() {
    return null;
  }, k.cloneElement = function(h, E, R) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var B = Q({}, h.props), K = h.key;
    if (E != null)
      for (I in E.key !== void 0 && (K = "" + E.key), E)
        !be.call(E, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && E.ref === void 0 || (B[I] = E[I]);
    var I = arguments.length - 2;
    if (I === 1) B.children = R;
    else if (1 < I) {
      for (var j = Array(I), V = 0; V < I; V++)
        j[V] = arguments[V + 2];
      B.children = j;
    }
    return nl(h.type, K, B);
  }, k.createContext = function(h) {
    return h = {
      $$typeof: X,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: M,
      _context: h
    }, h;
  }, k.createElement = function(h, E, R) {
    var B, K = {}, I = null;
    if (E != null)
      for (B in E.key !== void 0 && (I = "" + E.key), E)
        be.call(E, B) && B !== "key" && B !== "__self" && B !== "__source" && (K[B] = E[B]);
    var j = arguments.length - 2;
    if (j === 1) K.children = R;
    else if (1 < j) {
      for (var V = Array(j), P = 0; P < j; P++)
        V[P] = arguments[P + 2];
      K.children = V;
    }
    if (h && h.defaultProps)
      for (B in j = h.defaultProps, j)
        K[B] === void 0 && (K[B] = j[B]);
    return nl(h, I, K);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(h) {
    return { $$typeof: C, render: h };
  }, k.isValidElement = il, k.lazy = function(h) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: h },
      _init: G
    };
  }, k.memo = function(h, E) {
    return {
      $$typeof: S,
      type: h,
      compare: E === void 0 ? null : E
    };
  }, k.startTransition = function(h) {
    var E = F.T, R = {};
    F.T = R;
    try {
      var B = h(), K = F.S;
      K !== null && K(R, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(Le, ce);
    } catch (I) {
      ce(I);
    } finally {
      E !== null && R.types !== null && (E.types = R.types), F.T = E;
    }
  }, k.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, k.use = function(h) {
    return F.H.use(h);
  }, k.useActionState = function(h, E, R) {
    return F.H.useActionState(h, E, R);
  }, k.useCallback = function(h, E) {
    return F.H.useCallback(h, E);
  }, k.useContext = function(h) {
    return F.H.useContext(h);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(h, E) {
    return F.H.useDeferredValue(h, E);
  }, k.useEffect = function(h, E) {
    return F.H.useEffect(h, E);
  }, k.useEffectEvent = function(h) {
    return F.H.useEffectEvent(h);
  }, k.useId = function() {
    return F.H.useId();
  }, k.useImperativeHandle = function(h, E, R) {
    return F.H.useImperativeHandle(h, E, R);
  }, k.useInsertionEffect = function(h, E) {
    return F.H.useInsertionEffect(h, E);
  }, k.useLayoutEffect = function(h, E) {
    return F.H.useLayoutEffect(h, E);
  }, k.useMemo = function(h, E) {
    return F.H.useMemo(h, E);
  }, k.useOptimistic = function(h, E) {
    return F.H.useOptimistic(h, E);
  }, k.useReducer = function(h, E, R) {
    return F.H.useReducer(h, E, R);
  }, k.useRef = function(h) {
    return F.H.useRef(h);
  }, k.useState = function(h) {
    return F.H.useState(h);
  }, k.useSyncExternalStore = function(h, E, R) {
    return F.H.useSyncExternalStore(
      h,
      E,
      R
    );
  }, k.useTransition = function() {
    return F.H.useTransition();
  }, k.version = "19.2.8", k;
}
var Jo;
function Us() {
  return Jo || (Jo = 1, zs.exports = Yv()), zs.exports;
}
var L = Us(), Ns = { exports: {} }, On = {}, As = { exports: {} }, Es = {};
var $o;
function Gv() {
  return $o || ($o = 1, (function(f) {
    function g(_, U) {
      var G = _.length;
      _.push(U);
      e: for (; 0 < G; ) {
        var ce = G - 1 >>> 1, re = _[ce];
        if (0 < N(re, U))
          _[ce] = U, _[G] = re, G = ce;
        else break e;
      }
    }
    function o(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var U = _[0], G = _.pop();
      if (G !== U) {
        _[0] = G;
        e: for (var ce = 0, re = _.length, h = re >>> 1; ce < h; ) {
          var E = 2 * (ce + 1) - 1, R = _[E], B = E + 1, K = _[B];
          if (0 > N(R, G))
            B < re && 0 > N(K, R) ? (_[ce] = K, _[B] = G, ce = B) : (_[ce] = R, _[E] = G, ce = E);
          else if (B < re && 0 > N(K, G))
            _[ce] = K, _[B] = G, ce = B;
          else break e;
        }
      }
      return U;
    }
    function N(_, U) {
      var G = _.sortIndex - U.sortIndex;
      return G !== 0 ? G : _.id - U.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      f.unstable_now = function() {
        return M.now();
      };
    } else {
      var X = Date, C = X.now();
      f.unstable_now = function() {
        return X.now() - C;
      };
    }
    var O = [], S = [], q = 1, D = null, J = 3, ye = !1, Ce = !1, Q = !1, ze = !1, Re = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, De = typeof setImmediate < "u" ? setImmediate : null;
    function ke(_) {
      for (var U = o(S); U !== null; ) {
        if (U.callback === null) r(S);
        else if (U.startTime <= _)
          r(S), U.sortIndex = U.expirationTime, g(O, U);
        else break;
        U = o(S);
      }
    }
    function pl(_) {
      if (Q = !1, ke(_), !Ce)
        if (o(O) !== null)
          Ce = !0, Le || (Le = !0, Ye());
        else {
          var U = o(S);
          U !== null && Je(pl, U.startTime - _);
        }
    }
    var Le = !1, F = -1, be = 5, nl = -1;
    function Tl() {
      return ze ? !0 : !(f.unstable_now() - nl < be);
    }
    function il() {
      if (ze = !1, Le) {
        var _ = f.unstable_now();
        nl = _;
        var U = !0;
        try {
          e: {
            Ce = !1, Q && (Q = !1, Be(F), F = -1), ye = !0;
            var G = J;
            try {
              l: {
                for (ke(_), D = o(O); D !== null && !(D.expirationTime > _ && Tl()); ) {
                  var ce = D.callback;
                  if (typeof ce == "function") {
                    D.callback = null, J = D.priorityLevel;
                    var re = ce(
                      D.expirationTime <= _
                    );
                    if (_ = f.unstable_now(), typeof re == "function") {
                      D.callback = re, ke(_), U = !0;
                      break l;
                    }
                    D === o(O) && r(O), ke(_);
                  } else r(O);
                  D = o(O);
                }
                if (D !== null) U = !0;
                else {
                  var h = o(S);
                  h !== null && Je(
                    pl,
                    h.startTime - _
                  ), U = !1;
                }
              }
              break e;
            } finally {
              D = null, J = G, ye = !1;
            }
            U = void 0;
          }
        } finally {
          U ? Ye() : Le = !1;
        }
      }
    }
    var Ye;
    if (typeof De == "function")
      Ye = function() {
        De(il);
      };
    else if (typeof MessageChannel < "u") {
      var Ml = new MessageChannel(), cl = Ml.port2;
      Ml.port1.onmessage = il, Ye = function() {
        cl.postMessage(null);
      };
    } else
      Ye = function() {
        Re(il, 0);
      };
    function Je(_, U) {
      F = Re(function() {
        _(f.unstable_now());
      }, U);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, f.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : be = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, f.unstable_next = function(_) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = J;
      }
      var G = J;
      J = U;
      try {
        return _();
      } finally {
        J = G;
      }
    }, f.unstable_requestPaint = function() {
      ze = !0;
    }, f.unstable_runWithPriority = function(_, U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var G = J;
      J = _;
      try {
        return U();
      } finally {
        J = G;
      }
    }, f.unstable_scheduleCallback = function(_, U, G) {
      var ce = f.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ce + G : ce) : G = ce, _) {
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
      return re = G + re, _ = {
        id: q++,
        callback: U,
        priorityLevel: _,
        startTime: G,
        expirationTime: re,
        sortIndex: -1
      }, G > ce ? (_.sortIndex = G, g(S, _), o(O) === null && _ === o(S) && (Q ? (Be(F), F = -1) : Q = !0, Je(pl, G - ce))) : (_.sortIndex = re, g(O, _), Ce || ye || (Ce = !0, Le || (Le = !0, Ye()))), _;
    }, f.unstable_shouldYield = Tl, f.unstable_wrapCallback = function(_) {
      var U = J;
      return function() {
        var G = J;
        J = U;
        try {
          return _.apply(this, arguments);
        } finally {
          J = G;
        }
      };
    };
  })(Es)), Es;
}
var Wo;
function wv() {
  return Wo || (Wo = 1, As.exports = Gv()), As.exports;
}
var Ts = { exports: {} }, Ve = {};
var Fo;
function Xv() {
  if (Fo) return Ve;
  Fo = 1;
  var f = Us();
  function g(O) {
    var S = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        S += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + O + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(g(522));
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
  function M(O, S, q) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: D == null ? null : "" + D,
      children: O,
      containerInfo: S,
      implementation: q
    };
  }
  var X = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(O, S) {
    if (O === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ve.createPortal = function(O, S) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(g(299));
    return M(O, S, null, q);
  }, Ve.flushSync = function(O) {
    var S = X.T, q = r.p;
    try {
      if (X.T = null, r.p = 2, O) return O();
    } finally {
      X.T = S, r.p = q, r.d.f();
    }
  }, Ve.preconnect = function(O, S) {
    typeof O == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(O, S));
  }, Ve.prefetchDNS = function(O) {
    typeof O == "string" && r.d.D(O);
  }, Ve.preinit = function(O, S) {
    if (typeof O == "string" && S && typeof S.as == "string") {
      var q = S.as, D = C(q, S.crossOrigin), J = typeof S.integrity == "string" ? S.integrity : void 0, ye = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      q === "style" ? r.d.S(
        O,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: D,
          integrity: J,
          fetchPriority: ye
        }
      ) : q === "script" && r.d.X(O, {
        crossOrigin: D,
        integrity: J,
        fetchPriority: ye,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Ve.preinitModule = function(O, S) {
    if (typeof O == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var q = C(
            S.as,
            S.crossOrigin
          );
          r.d.M(O, {
            crossOrigin: q,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && r.d.M(O);
  }, Ve.preload = function(O, S) {
    if (typeof O == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var q = S.as, D = C(q, S.crossOrigin);
      r.d.L(O, q, {
        crossOrigin: D,
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
        var q = C(S.as, S.crossOrigin);
        r.d.m(O, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: q,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else r.d.m(O);
  }, Ve.requestFormReset = function(O) {
    r.d.r(O);
  }, Ve.unstable_batchedUpdates = function(O, S) {
    return O(S);
  }, Ve.useFormState = function(O, S, q) {
    return X.H.useFormState(O, S, q);
  }, Ve.useFormStatus = function() {
    return X.H.useHostTransitionStatus();
  }, Ve.version = "19.2.8", Ve;
}
var Io;
function Qv() {
  if (Io) return Ts.exports;
  Io = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (g) {
        console.error(g);
      }
  }
  return f(), Ts.exports = Xv(), Ts.exports;
}
var Po;
function Zv() {
  if (Po) return On;
  Po = 1;
  var f = wv(), g = Us(), o = Qv();
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
  function X(e) {
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
  function q(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = q(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, J = /* @__PURE__ */ Symbol.for("react.element"), ye = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), ze = /* @__PURE__ */ Symbol.for("react.strict_mode"), Re = /* @__PURE__ */ Symbol.for("react.profiler"), Be = /* @__PURE__ */ Symbol.for("react.consumer"), De = /* @__PURE__ */ Symbol.for("react.context"), ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), pl = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), nl = /* @__PURE__ */ Symbol.for("react.activity"), Tl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), il = Symbol.iterator;
  function Ye(e) {
    return e === null || typeof e != "object" ? null : (e = il && e[il] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ml = /* @__PURE__ */ Symbol.for("react.client.reference");
  function cl(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ml ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case Re:
        return "Profiler";
      case ze:
        return "StrictMode";
      case pl:
        return "Suspense";
      case Le:
        return "SuspenseList";
      case nl:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ce:
          return "Portal";
        case De:
          return e.displayName || "Context";
        case Be:
          return (e._context.displayName || "Context") + ".Consumer";
        case ke:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return l = e.displayName || null, l !== null ? l : cl(e.type) || "Memo";
        case be:
          l = e._payload, e = e._init;
          try {
            return cl(e(l));
          } catch {
          }
      }
    return null;
  }
  var Je = Array.isArray, _ = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], re = -1;
  function h(e) {
    return { current: e };
  }
  function E(e) {
    0 > re || (e.current = ce[re], ce[re] = null, re--);
  }
  function R(e, l) {
    re++, ce[re] = e.current, e.current = l;
  }
  var B = h(null), K = h(null), I = h(null), j = h(null);
  function V(e, l) {
    switch (R(I, l), R(K, e), R(B, null), l.nodeType) {
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
    E(B), R(B, e);
  }
  function P() {
    E(B), E(K), E(I);
  }
  function Ot(e) {
    e.memoizedState !== null && R(j, e);
    var l = B.current, t = vo(l, e.type);
    l !== t && (R(K, e), R(B, t));
  }
  function qn(e) {
    K.current === e && (E(B), E(K)), j.current === e && (E(j), Nn._currentValue = G);
  }
  var ic, Qs;
  function Ct(e) {
    if (ic === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        ic = l && l[1] || "", Qs = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ic + e + Qs;
  }
  var cc = !1;
  function uc(e, l) {
    if (!e || cc) return "";
    cc = !0;
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
                  var x = b;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (b) {
                  x = b;
                }
                e.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                x = b;
              }
              (T = e()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (b) {
            if (b && x && typeof b.stack == "string")
              return [b.stack, x.stack];
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
                  var z = `
` + d[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      cc = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Ct(t) : "";
  }
  function hh(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ct(e.type);
      case 16:
        return Ct("Lazy");
      case 13:
        return e.child !== l && l !== null ? Ct("Suspense Fallback") : Ct("Suspense");
      case 19:
        return Ct("SuspenseList");
      case 0:
      case 15:
        return uc(e.type, !1);
      case 11:
        return uc(e.type.render, !1);
      case 1:
        return uc(e.type, !0);
      case 31:
        return Ct("Activity");
      default:
        return "";
    }
  }
  function Zs(e) {
    try {
      var l = "", t = null;
      do
        l += hh(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var sc = Object.prototype.hasOwnProperty, fc = f.unstable_scheduleCallback, rc = f.unstable_cancelCallback, mh = f.unstable_shouldYield, vh = f.unstable_requestPaint, ul = f.unstable_now, yh = f.unstable_getCurrentPriorityLevel, Ls = f.unstable_ImmediatePriority, Vs = f.unstable_UserBlockingPriority, Hn = f.unstable_NormalPriority, ph = f.unstable_LowPriority, Ks = f.unstable_IdlePriority, xh = f.log, gh = f.unstable_setDisableYieldValue, Ha = null, sl = null;
  function it(e) {
    if (typeof xh == "function" && gh(e), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(Ha, e);
      } catch {
      }
  }
  var fl = Math.clz32 ? Math.clz32 : Sh, jh = Math.log, bh = Math.LN2;
  function Sh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jh(e) / bh | 0) | 0;
  }
  var Bn = 256, Yn = 262144, Gn = 4194304;
  function Dt(e) {
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
  function wn(e, l, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, c = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~c, a !== 0 ? n = Dt(a) : (u &= s, u !== 0 ? n = Dt(u) : t || (t = s & ~e, t !== 0 && (n = Dt(t))))) : (s = a & ~c, s !== 0 ? n = Dt(s) : u !== 0 ? n = Dt(u) : t || (t = a & ~e, t !== 0 && (n = Dt(t)))), n === 0 ? 0 : l !== 0 && l !== n && (l & c) === 0 && (c = n & -n, t = l & -l, c >= t || c === 32 && (t & 4194048) !== 0) ? l : n;
  }
  function Ba(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function _h(e, l) {
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
  function ks() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function dc(e) {
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
      var z = 31 - fl(t), T = 1 << z;
      s[z] = 0, d[z] = -1;
      var x = p[z];
      if (x !== null)
        for (p[z] = null, z = 0; z < x.length; z++) {
          var b = x[z];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~T;
    }
    a !== 0 && Js(e, a, 0), c !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(u & ~l));
  }
  function Js(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var a = 31 - fl(l);
    e.entangledLanes |= l, e.entanglements[a] = e.entanglements[a] | 1073741824 | t & 261930;
  }
  function $s(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var a = 31 - fl(t), n = 1 << a;
      n & l | e[a] & l && (e[a] |= l), t &= ~n;
    }
  }
  function Ws(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : oc(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function oc(e) {
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
  function hc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fs() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yo(e.type));
  }
  function Is(e, l) {
    var t = U.p;
    try {
      return U.p = e, l();
    } finally {
      U.p = t;
    }
  }
  var ct = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + ct, We = "__reactProps$" + ct, Wt = "__reactContainer$" + ct, mc = "__reactEvents$" + ct, Nh = "__reactListeners$" + ct, Ah = "__reactHandles$" + ct, Ps = "__reactResources$" + ct, Ga = "__reactMarker$" + ct;
  function vc(e) {
    delete e[Ge], delete e[We], delete e[mc], delete e[Nh], delete e[Ah];
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
  function wa(e) {
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
  var Eh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, af = {};
  function Th(e) {
    return sc.call(af, e) ? !0 : sc.call(tf, e) ? !1 : Eh.test(e) ? af[e] = !0 : (tf[e] = !0, !1);
  }
  function Xn(e, l, t) {
    if (Th(l))
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
  function xl(e) {
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
  function Mh(e, l, t) {
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
  function yc(e) {
    if (!e._valueTracker) {
      var l = nf(e) ? "checked" : "value";
      e._valueTracker = Mh(
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
  var Oh = /[\n"\\]/g;
  function gl(e) {
    return e.replace(
      Oh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function pc(e, l, t, a, n, c, u, s) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), l != null ? u === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + xl(l)) : e.value !== "" + xl(l) && (e.value = "" + xl(l)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), l != null ? xc(e, u, xl(l)) : t != null ? xc(e, u, xl(t)) : a != null && e.removeAttribute("value"), n == null && c != null && (e.defaultChecked = !!c), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + xl(s) : e.removeAttribute("name");
  }
  function uf(e, l, t, a, n, c, u, s) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), l != null || t != null) {
      if (!(c !== "submit" && c !== "reset" || l != null)) {
        yc(e);
        return;
      }
      t = t != null ? "" + xl(t) : "", l = l != null ? "" + xl(l) : t, s || l === e.value || (e.value = l), e.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), yc(e);
  }
  function xc(e, l, t) {
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
      for (t = "" + xl(t), l = null, n = 0; n < e.length; n++) {
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
    if (l != null && (l = "" + xl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + xl(t) : "";
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
    t = xl(l), e.defaultValue = t, a = e.textContent, a === t && a !== "" && a !== null && (e.value = a), yc(e);
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
  var Ch = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function rf(e, l, t) {
    var a = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : a ? e.setProperty(l, t) : typeof t != "number" || t === 0 || Ch.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
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
  ]), Uh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ln(e) {
    return Uh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gl() {
  }
  var jc = null;
  function bc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var aa = null, na = null;
  function of(e) {
    var l = It(e);
    if (l && (e = l.stateNode)) {
      var t = e[We] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (pc(
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
                pc(
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
  var Sc = !1;
  function hf(e, l, t) {
    if (Sc) return e(l, t);
    Sc = !0;
    try {
      var a = e(l);
      return a;
    } finally {
      if (Sc = !1, (aa !== null || na !== null) && (Ci(), aa && (l = aa, e = na, na = aa = null, of(l), e)))
        for (l = 0; l < e.length; l++) of(e[l]);
    }
  }
  function Xa(e, l) {
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
  var wl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = !1;
  if (wl)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function() {
          _c = !0;
        }
      }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      _c = !1;
    }
  var ut = null, zc = null, Vn = null;
  function mf() {
    if (Vn) return Vn;
    var e, l = zc, t = l.length, a, n = "value" in ut ? ut.value : ut.textContent, c = n.length;
    for (e = 0; e < t && l[e] === n[e]; e++) ;
    var u = t - e;
    for (a = 1; a <= u && l[t - a] === n[c - a]; a++) ;
    return Vn = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Kn(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function kn() {
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
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? kn : vf, this.isPropagationStopped = vf, this;
    }
    return D(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = kn);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = kn);
      },
      persist: function() {
      },
      isPersistent: kn
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
  }, Jn = Fe(Rt), Za = D({}, Rt, { view: 0, detail: 0 }), Rh = Fe(Za), Nc, Ac, La, $n = D({}, Za, {
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
    getModifierState: Tc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== La && (La && e.type === "mousemove" ? (Nc = e.screenX - La.screenX, Ac = e.screenY - La.screenY) : Ac = Nc = 0, La = e), Nc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ac;
    }
  }), yf = Fe($n), qh = D({}, $n, { dataTransfer: 0 }), Hh = Fe(qh), Bh = D({}, Za, { relatedTarget: 0 }), Ec = Fe(Bh), Yh = D({}, Rt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gh = Fe(Yh), wh = D({}, Rt, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xh = Fe(wh), Qh = D({}, Rt, { data: 0 }), pf = Fe(Qh), Zh = {
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
  }, Lh = {
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
  }, Vh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Kh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = Vh[e]) ? !!l[e] : !1;
  }
  function Tc() {
    return Kh;
  }
  var kh = D({}, Za, {
    key: function(e) {
      if (e.key) {
        var l = Zh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Kn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tc,
    charCode: function(e) {
      return e.type === "keypress" ? Kn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Kn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Jh = Fe(kh), $h = D({}, $n, {
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
  }), xf = Fe($h), Wh = D({}, Za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tc
  }), Fh = Fe(Wh), Ih = D({}, Rt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ph = Fe(Ih), em = D({}, $n, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lm = Fe(em), tm = D({}, Rt, {
    newState: 0,
    oldState: 0
  }), am = Fe(tm), nm = [9, 13, 27, 32], Mc = wl && "CompositionEvent" in window, Va = null;
  wl && "documentMode" in document && (Va = document.documentMode);
  var im = wl && "TextEvent" in window && !Va, gf = wl && (!Mc || Va && 8 < Va && 11 >= Va), jf = " ", bf = !1;
  function Sf(e, l) {
    switch (e) {
      case "keyup":
        return nm.indexOf(l.keyCode) !== -1;
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
  function _f(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ia = !1;
  function cm(e, l) {
    switch (e) {
      case "compositionend":
        return _f(l);
      case "keypress":
        return l.which !== 32 ? null : (bf = !0, jf);
      case "textInput":
        return e = l.data, e === jf && bf ? null : e;
      default:
        return null;
    }
  }
  function um(e, l) {
    if (ia)
      return e === "compositionend" || !Mc && Sf(e, l) ? (e = mf(), Vn = zc = ut = null, ia = !1, e) : null;
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
        return gf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var sm = {
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
  function zf(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!sm[e.type] : l === "textarea";
  }
  function Nf(e, l, t, a) {
    aa ? na ? na.push(a) : na = [a] : aa = a, l = Yi(l, "onChange"), 0 < l.length && (t = new Jn(
      "onChange",
      "change",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }));
  }
  var Ka = null, ka = null;
  function fm(e) {
    uo(e, 0);
  }
  function Wn(e) {
    var l = wa(e);
    if (cf(l)) return e;
  }
  function Af(e, l) {
    if (e === "change") return l;
  }
  var Ef = !1;
  if (wl) {
    var Oc;
    if (wl) {
      var Cc = "oninput" in document;
      if (!Cc) {
        var Tf = document.createElement("div");
        Tf.setAttribute("oninput", "return;"), Cc = typeof Tf.oninput == "function";
      }
      Oc = Cc;
    } else Oc = !1;
    Ef = Oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Mf() {
    Ka && (Ka.detachEvent("onpropertychange", Of), ka = Ka = null);
  }
  function Of(e) {
    if (e.propertyName === "value" && Wn(ka)) {
      var l = [];
      Nf(
        l,
        ka,
        e,
        bc(e)
      ), hf(fm, l);
    }
  }
  function rm(e, l, t) {
    e === "focusin" ? (Mf(), Ka = l, ka = t, Ka.attachEvent("onpropertychange", Of)) : e === "focusout" && Mf();
  }
  function dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wn(ka);
  }
  function om(e, l) {
    if (e === "click") return Wn(l);
  }
  function hm(e, l) {
    if (e === "input" || e === "change")
      return Wn(l);
  }
  function mm(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var rl = typeof Object.is == "function" ? Object.is : mm;
  function Ja(e, l) {
    if (rl(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), a = Object.keys(l);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!sc.call(l, n) || !rl(e[n], l[n]))
        return !1;
    }
    return !0;
  }
  function Cf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Df(e, l) {
    var t = Cf(e);
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
      t = Cf(t);
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
  var vm = wl && "documentMode" in document && 11 >= document.documentMode, ca = null, Uc = null, $a = null, Rc = !1;
  function qf(e, l, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Rc || ca == null || ca !== Zn(a) || (a = ca, "selectionStart" in a && Dc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), $a && Ja($a, a) || ($a = a, a = Yi(Uc, "onSelect"), 0 < a.length && (l = new Jn(
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
  }, qc = {}, Hf = {};
  wl && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function Ht(e) {
    if (qc[e]) return qc[e];
    if (!ua[e]) return e;
    var l = ua[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in Hf)
        return qc[e] = l[t];
    return e;
  }
  var Bf = Ht("animationend"), Yf = Ht("animationiteration"), Gf = Ht("animationstart"), ym = Ht("transitionrun"), pm = Ht("transitionstart"), xm = Ht("transitioncancel"), wf = Ht("transitionend"), Xf = /* @__PURE__ */ new Map(), Hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hc.push("scrollEnd");
  function Ol(e, l) {
    Xf.set(e, l), Ut(l, [e]);
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
  }, jl = [], sa = 0, Bc = 0;
  function In() {
    for (var e = sa, l = Bc = sa = 0; l < e; ) {
      var t = jl[l];
      jl[l++] = null;
      var a = jl[l];
      jl[l++] = null;
      var n = jl[l];
      jl[l++] = null;
      var c = jl[l];
      if (jl[l++] = null, a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), a.pending = n;
      }
      c !== 0 && Qf(t, n, c);
    }
  }
  function Pn(e, l, t, a) {
    jl[sa++] = e, jl[sa++] = l, jl[sa++] = t, jl[sa++] = a, Bc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Yc(e, l, t, a) {
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
    return e.tag === 3 ? (c = e.stateNode, n && l !== null && (n = 31 - fl(t), e = c.hiddenUpdates, a = e[n], a === null ? e[n] = [l] : a.push(l), l.lane = t | 536870912), c) : null;
  }
  function ei(e) {
    if (50 < xn)
      throw xn = 0, ku = null, Error(r(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function gm(e, l, t, a) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dl(e, l, t, a) {
    return new gm(e, l, t, a);
  }
  function Gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Xl(e, l) {
    var t = e.alternate;
    return t === null ? (t = dl(
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
    if (a = e, typeof e == "function") Gc(e) && (u = 1);
    else if (typeof e == "string")
      u = zv(
        e,
        t,
        B.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case nl:
          return e = dl(31, t, l, n), e.elementType = nl, e.lanes = c, e;
        case Q:
          return Yt(t.children, n, c, l);
        case ze:
          u = 8, n |= 24;
          break;
        case Re:
          return e = dl(12, t, l, n | 2), e.elementType = Re, e.lanes = c, e;
        case pl:
          return e = dl(13, t, l, n), e.elementType = pl, e.lanes = c, e;
        case Le:
          return e = dl(19, t, l, n), e.elementType = Le, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case De:
                u = 10;
                break e;
              case Be:
                u = 9;
                break e;
              case ke:
                u = 11;
                break e;
              case F:
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
    return l = dl(u, t, l, n), l.elementType = e, l.type = a, l.lanes = c, l;
  }
  function Yt(e, l, t, a) {
    return e = dl(7, e, a, l), e.lanes = t, e;
  }
  function wc(e, l, t) {
    return e = dl(6, e, null, l), e.lanes = t, e;
  }
  function Lf(e) {
    var l = dl(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Xc(e, l, t) {
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
  var Vf = /* @__PURE__ */ new WeakMap();
  function bl(e, l) {
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
  var ra = [], da = 0, ti = null, Wa = 0, Sl = [], _l = 0, st = null, Rl = 1, ql = "";
  function Ql(e, l) {
    ra[da++] = Wa, ra[da++] = ti, ti = e, Wa = l;
  }
  function Kf(e, l, t) {
    Sl[_l++] = Rl, Sl[_l++] = ql, Sl[_l++] = st, st = e;
    var a = Rl;
    e = ql;
    var n = 32 - fl(a) - 1;
    a &= ~(1 << n), t += 1;
    var c = 32 - fl(l) + n;
    if (30 < c) {
      var u = n - n % 5;
      c = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, Rl = 1 << 32 - fl(l) + n | t << n | a, ql = c + e;
    } else
      Rl = 1 << c | t << n | a, ql = e;
  }
  function Qc(e) {
    e.return !== null && (Ql(e, 1), Kf(e, 1, 0));
  }
  function Zc(e) {
    for (; e === ti; )
      ti = ra[--da], ra[da] = null, Wa = ra[--da], ra[da] = null;
    for (; e === st; )
      st = Sl[--_l], Sl[_l] = null, ql = Sl[--_l], Sl[_l] = null, Rl = Sl[--_l], Sl[_l] = null;
  }
  function kf(e, l) {
    Sl[_l++] = Rl, Sl[_l++] = ql, Sl[_l++] = st, Rl = l.id, ql = l.overflow, st = e;
  }
  var we = null, xe = null, ie = !1, ft = null, zl = !1, Lc = Error(r(519));
  function rt(e) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fa(bl(l, e)), Lc;
  }
  function Jf(e) {
    var l = e.stateNode, t = e.type, a = e.memoizedProps;
    switch (l[Ge] = e, l[We] = a, t) {
      case "dialog":
        te("cancel", l), te("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        te("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < jn.length; t++)
          te(jn[t], l);
        break;
      case "source":
        te("error", l);
        break;
      case "img":
      case "image":
      case "link":
        te("error", l), te("load", l);
        break;
      case "details":
        te("toggle", l);
        break;
      case "input":
        te("invalid", l), uf(
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
        te("invalid", l);
        break;
      case "textarea":
        te("invalid", l), ff(l, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || a.suppressHydrationWarning === !0 || oo(l.textContent, t) ? (a.popover != null && (te("beforetoggle", l), te("toggle", l)), a.onScroll != null && te("scroll", l), a.onScrollEnd != null && te("scrollend", l), a.onClick != null && (l.onclick = Gl), l = !0) : l = !1, l || rt(e, !0);
  }
  function $f(e) {
    for (we = e.return; we; )
      switch (we.tag) {
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
          we = we.return;
      }
  }
  function oa(e) {
    if (e !== we) return !1;
    if (!ie) return $f(e), ie = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || ss(e.type, e.memoizedProps)), t = !t), t && xe && rt(e), $f(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = bo(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = bo(e);
    } else
      l === 27 ? (l = xe, zt(e.type) ? (e = hs, hs = null, xe = e) : xe = l) : xe = we ? Al(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gt() {
    xe = we = null, ie = !1;
  }
  function Vc() {
    var e = ft;
    return e !== null && (ll === null ? ll = e : ll.push.apply(
      ll,
      e
    ), ft = null), e;
  }
  function Fa(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var Kc = h(null), wt = null, Zl = null;
  function dt(e, l, t) {
    R(Kc, l._currentValue), l._currentValue = t;
  }
  function Ll(e) {
    e._currentValue = Kc.current, E(Kc);
  }
  function kc(e, l, t) {
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
              c.lanes |= t, s = c.alternate, s !== null && (s.lanes |= t), kc(
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
        u.lanes |= t, c = u.alternate, c !== null && (c.lanes |= t), kc(u, t, e), u = null;
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
          rl(n.pendingProps.value, u.value) || (e !== null ? e.push(s) : e = [s]);
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
      if (!rl(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Xt(e) {
    wt = e, Zl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Xe(e) {
    return Wf(wt, e);
  }
  function ni(e, l) {
    return wt === null && Xt(e), Wf(e, l);
  }
  function Wf(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, Zl === null) {
      if (e === null) throw Error(r(308));
      Zl = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else Zl = Zl.next = l;
    return t;
  }
  var jm = typeof AbortController < "u" ? AbortController : function() {
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
  }, bm = f.unstable_scheduleCallback, Sm = f.unstable_NormalPriority, Ee = {
    $$typeof: De,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $c() {
    return {
      controller: new jm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(e) {
    e.refCount--, e.refCount === 0 && bm(Sm, function() {
      e.controller.abort();
    });
  }
  var Pa = null, Wc = 0, ma = 0, va = null;
  function _m(e, l) {
    if (Pa === null) {
      var t = Pa = [];
      Wc = 0, ma = Pu(), va = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return Wc++, l.then(Ff, Ff), l;
  }
  function Ff() {
    if (--Wc === 0 && Pa !== null) {
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
  var If = _.S;
  _.S = function(e, l) {
    qd = ul(), typeof l == "object" && l !== null && typeof l.then == "function" && _m(e, l), If !== null && If(e, l);
  };
  var Qt = h(null);
  function Fc() {
    var e = Qt.current;
    return e !== null ? e : pe.pooledCache;
  }
  function ii(e, l) {
    l === null ? R(Qt, Qt.current) : R(Qt, l.pool);
  }
  function Pf() {
    var e = Fc();
    return e === null ? null : { parent: Ee._currentValue, pool: e };
  }
  var ya = Error(r(460)), Ic = Error(r(474)), ci = Error(r(542)), ui = { then: function() {
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
    throw l.$$typeof === J ? Error(r(525)) : (e = Object.prototype.toString.call(l), Error(
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
      return v = Xl(v, m), v.index = 0, v.sibling = null, v;
    }
    function c(v, m, y) {
      return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 67108866, m) : y) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function s(v, m, y, A) {
      return m === null || m.tag !== 6 ? (m = wc(y, v.mode, A), m.return = v, m) : (m = n(m, y), m.return = v, m);
    }
    function d(v, m, y, A) {
      var w = y.type;
      return w === Q ? z(
        v,
        m,
        y.props.children,
        A,
        y.key
      ) : m !== null && (m.elementType === w || typeof w == "object" && w !== null && w.$$typeof === be && Zt(w) === m.type) ? (m = n(m, y.props), ln(m, y), m.return = v, m) : (m = li(
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
    function z(v, m, y, A, w) {
      return m === null || m.tag !== 7 ? (m = Yt(
        y,
        v.mode,
        A,
        w
      ), m.return = v, m) : (m = n(m, y), m.return = v, m);
    }
    function T(v, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = wc(
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
          case Ce:
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
        if (m.$$typeof === De)
          return T(
            v,
            ni(v, m),
            y
          );
        fi(v, m);
      }
      return null;
    }
    function x(v, m, y, A) {
      var w = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return w !== null ? null : s(v, m, "" + y, A);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ye:
            return y.key === w ? d(v, m, y, A) : null;
          case Ce:
            return y.key === w ? p(v, m, y, A) : null;
          case be:
            return y = Zt(y), x(v, m, y, A);
        }
        if (Je(y) || Ye(y))
          return w !== null ? null : z(v, m, y, A, null);
        if (typeof y.then == "function")
          return x(
            v,
            m,
            si(y),
            A
          );
        if (y.$$typeof === De)
          return x(
            v,
            m,
            ni(v, y),
            A
          );
        fi(v, y);
      }
      return null;
    }
    function b(v, m, y, A, w) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return v = v.get(y) || null, s(m, v, "" + A, w);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ye:
            return v = v.get(
              A.key === null ? y : A.key
            ) || null, d(m, v, A, w);
          case Ce:
            return v = v.get(
              A.key === null ? y : A.key
            ) || null, p(m, v, A, w);
          case be:
            return A = Zt(A), b(
              v,
              m,
              y,
              A,
              w
            );
        }
        if (Je(A) || Ye(A))
          return v = v.get(y) || null, z(m, v, A, w, null);
        if (typeof A.then == "function")
          return b(
            v,
            m,
            y,
            si(A),
            w
          );
        if (A.$$typeof === De)
          return b(
            v,
            m,
            y,
            ni(m, A),
            w
          );
        fi(m, A);
      }
      return null;
    }
    function H(v, m, y, A) {
      for (var w = null, ue = null, Y = m, W = m = 0, ne = null; Y !== null && W < y.length; W++) {
        Y.index > W ? (ne = Y, Y = null) : ne = Y.sibling;
        var se = x(
          v,
          Y,
          y[W],
          A
        );
        if (se === null) {
          Y === null && (Y = ne);
          break;
        }
        e && Y && se.alternate === null && l(v, Y), m = c(se, m, W), ue === null ? w = se : ue.sibling = se, ue = se, Y = ne;
      }
      if (W === y.length)
        return t(v, Y), ie && Ql(v, W), w;
      if (Y === null) {
        for (; W < y.length; W++)
          Y = T(v, y[W], A), Y !== null && (m = c(
            Y,
            m,
            W
          ), ue === null ? w = Y : ue.sibling = Y, ue = Y);
        return ie && Ql(v, W), w;
      }
      for (Y = a(Y); W < y.length; W++)
        ne = b(
          Y,
          v,
          W,
          y[W],
          A
        ), ne !== null && (e && ne.alternate !== null && Y.delete(
          ne.key === null ? W : ne.key
        ), m = c(
          ne,
          m,
          W
        ), ue === null ? w = ne : ue.sibling = ne, ue = ne);
      return e && Y.forEach(function(Mt) {
        return l(v, Mt);
      }), ie && Ql(v, W), w;
    }
    function Z(v, m, y, A) {
      if (y == null) throw Error(r(151));
      for (var w = null, ue = null, Y = m, W = m = 0, ne = null, se = y.next(); Y !== null && !se.done; W++, se = y.next()) {
        Y.index > W ? (ne = Y, Y = null) : ne = Y.sibling;
        var Mt = x(v, Y, se.value, A);
        if (Mt === null) {
          Y === null && (Y = ne);
          break;
        }
        e && Y && Mt.alternate === null && l(v, Y), m = c(Mt, m, W), ue === null ? w = Mt : ue.sibling = Mt, ue = Mt, Y = ne;
      }
      if (se.done)
        return t(v, Y), ie && Ql(v, W), w;
      if (Y === null) {
        for (; !se.done; W++, se = y.next())
          se = T(v, se.value, A), se !== null && (m = c(se, m, W), ue === null ? w = se : ue.sibling = se, ue = se);
        return ie && Ql(v, W), w;
      }
      for (Y = a(Y); !se.done; W++, se = y.next())
        se = b(Y, v, W, se.value, A), se !== null && (e && se.alternate !== null && Y.delete(se.key === null ? W : se.key), m = c(se, m, W), ue === null ? w = se : ue.sibling = se, ue = se);
      return e && Y.forEach(function(qv) {
        return l(v, qv);
      }), ie && Ql(v, W), w;
    }
    function ve(v, m, y, A) {
      if (typeof y == "object" && y !== null && y.type === Q && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ye:
            e: {
              for (var w = y.key; m !== null; ) {
                if (m.key === w) {
                  if (w = y.type, w === Q) {
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
                  } else if (m.elementType === w || typeof w == "object" && w !== null && w.$$typeof === be && Zt(w) === m.type) {
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
              y.type === Q ? (A = Yt(
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
          case Ce:
            e: {
              for (w = y.key; m !== null; ) {
                if (m.key === w)
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
          return H(
            v,
            m,
            y,
            A
          );
        if (Ye(y)) {
          if (w = Ye(y), typeof w != "function") throw Error(r(150));
          return y = w.call(y), Z(
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
        if (y.$$typeof === De)
          return ve(
            v,
            m,
            ni(v, y),
            A
          );
        fi(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (t(v, m.sibling), A = n(m, y), A.return = v, v = A) : (t(v, m), A = wc(y, v.mode, A), A.return = v, v = A), u(v)) : t(v, m);
    }
    return function(v, m, y, A) {
      try {
        en = 0;
        var w = ve(
          v,
          m,
          y,
          A
        );
        return pa = null, w;
      } catch (Y) {
        if (Y === ya || Y === ci) throw Y;
        var ue = dl(29, Y, null, v.mode);
        return ue.lanes = A, ue.return = v, ue;
      }
    };
  }
  var Vt = nr(!0), ir = nr(!1), ot = !1;
  function Pc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function eu(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ht(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function mt(e, l, t) {
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
  function lu(e, l) {
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
  var tu = !1;
  function an() {
    if (tu) {
      var e = va;
      if (e !== null) throw e;
    }
  }
  function nn(e, l, t, a) {
    tu = !1;
    var n = e.updateQueue;
    ot = !1;
    var c = n.firstBaseUpdate, u = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var d = s, p = d.next;
      d.next = null, u === null ? c = p : u.next = p, u = d;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, s = z.lastBaseUpdate, s !== u && (s === null ? z.firstBaseUpdate = p : s.next = p, z.lastBaseUpdate = d));
    }
    if (c !== null) {
      var T = n.baseState;
      u = 0, z = p = d = null, s = c;
      do {
        var x = s.lane & -536870913, b = x !== s.lane;
        if (b ? (ae & x) === x : (a & x) === x) {
          x !== 0 && x === ma && (tu = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var H = e, Z = s;
            x = l;
            var ve = t;
            switch (Z.tag) {
              case 1:
                if (H = Z.payload, typeof H == "function") {
                  T = H.call(ve, T, x);
                  break e;
                }
                T = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = Z.payload, x = typeof H == "function" ? H.call(ve, T, x) : H, x == null) break e;
                T = D({}, T, x);
                break e;
              case 2:
                ot = !0;
            }
          }
          x = s.callback, x !== null && (e.flags |= 64, b && (e.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [x] : b.push(x));
        } else
          b = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, z === null ? (p = z = b, d = T) : z = z.next = b, u |= x;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          b = s, s = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      z === null && (d = T), n.baseState = d, n.firstBaseUpdate = p, n.lastBaseUpdate = z, c === null && (n.shared.lanes = 0), gt |= u, e.lanes = u, e.memoizedState = T;
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
  var xa = h(null), ri = h(0);
  function sr(e, l) {
    e = Pl, R(ri, e), R(xa, l), Pl = e | l.baseLanes;
  }
  function au() {
    R(ri, Pl), R(xa, xa.current);
  }
  function nu() {
    Pl = ri.current, E(xa), E(ri);
  }
  var ol = h(null), Nl = null;
  function vt(e) {
    var l = e.alternate;
    R(Ne, Ne.current & 1), R(ol, e), Nl === null && (l === null || xa.current !== null || l.memoizedState !== null) && (Nl = e);
  }
  function iu(e) {
    R(Ne, Ne.current), R(ol, e), Nl === null && (Nl = e);
  }
  function fr(e) {
    e.tag === 22 ? (R(Ne, Ne.current), R(ol, e), Nl === null && (Nl = e)) : yt();
  }
  function yt() {
    R(Ne, Ne.current), R(ol, ol.current);
  }
  function hl(e) {
    E(ol), Nl === e && (Nl = null), E(Ne);
  }
  var Ne = h(0);
  function di(e) {
    for (var l = e; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || ds(t) || os(t)))
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
  var Vl = 0, $ = null, he = null, Te = null, oi = !1, ga = !1, Kt = !1, hi = 0, cn = 0, ja = null, Nm = 0;
  function Se() {
    throw Error(r(321));
  }
  function cu(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!rl(e[t], l[t])) return !1;
    return !0;
  }
  function uu(e, l, t, a, n, c) {
    return Vl = c, $ = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = e === null || e.memoizedState === null ? Kr : Su, Kt = !1, c = t(a, n), Kt = !1, ga && (c = dr(
      l,
      t,
      a,
      n
    )), rr(e), c;
  }
  function rr(e) {
    _.H = fn;
    var l = he !== null && he.next !== null;
    if (Vl = 0, Te = he = $ = null, oi = !1, cn = 0, ja = null, l) throw Error(r(300));
    e === null || Me || (e = e.dependencies, e !== null && ai(e) && (Me = !0));
  }
  function dr(e, l, t, a) {
    $ = e;
    var n = 0;
    do {
      if (ga && (ja = null), cn = 0, ga = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Te = he = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      _.H = kr, c = l(t, a);
    } while (ga);
    return c;
  }
  function Am() {
    var e = _.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? un(l) : l, e = e.useState()[0], (he !== null ? he.memoizedState : null) !== e && ($.flags |= 1024), l;
  }
  function su() {
    var e = hi !== 0;
    return hi = 0, e;
  }
  function fu(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function ru(e) {
    if (oi) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      oi = !1;
    }
    Vl = 0, Te = he = $ = null, ga = !1, cn = hi = 0, ja = null;
  }
  function $e() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Te === null ? $.memoizedState = Te = e : Te = Te.next = e, Te;
  }
  function Ae() {
    if (he === null) {
      var e = $.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var l = Te === null ? $.memoizedState : Te.next;
    if (l !== null)
      Te = l, he = e;
    else {
      if (e === null)
        throw $.alternate === null ? Error(r(467)) : Error(r(310));
      he = e, e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null
      }, Te === null ? $.memoizedState = Te = e : Te = Te.next = e;
    }
    return Te;
  }
  function mi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function un(e) {
    var l = cn;
    return cn += 1, ja === null && (ja = []), e = lr(ja, e, l), l = $, (Te === null ? l.memoizedState : Te.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? Kr : Su), e;
  }
  function vi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return un(e);
      if (e.$$typeof === De) return Xe(e);
    }
    throw Error(r(438, String(e)));
  }
  function du(e) {
    var l = null, t = $.updateQueue;
    if (t !== null && (l = t.memoCache), l == null) {
      var a = $.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = mi(), $.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), a = 0; a < e; a++)
        t[a] = Tl;
    return l.index++, t;
  }
  function Kl(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function yi(e) {
    var l = Ae();
    return ou(l, he, e);
  }
  function ou(e, l, t) {
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
      var s = u = null, d = null, p = l, z = !1;
      do {
        var T = p.lane & -536870913;
        if (T !== p.lane ? (ae & T) === T : (Vl & T) === T) {
          var x = p.revertLane;
          if (x === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), T === ma && (z = !0);
          else if ((Vl & x) === x) {
            p = p.next, x === ma && (z = !0);
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
            }, d === null ? (s = d = T, u = c) : d = d.next = T, $.lanes |= x, gt |= x;
          T = p.action, Kt && t(c, T), c = p.hasEagerState ? p.eagerState : t(c, T);
        } else
          x = {
            lane: T,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, d === null ? (s = d = x, u = c) : d = d.next = x, $.lanes |= T, gt |= T;
        p = p.next;
      } while (p !== null && p !== l);
      if (d === null ? u = c : d.next = s, !rl(c, e.memoizedState) && (Me = !0, z && (t = va, t !== null)))
        throw t;
      e.memoizedState = c, e.baseState = u, e.baseQueue = d, a.lastRenderedState = c;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function hu(e) {
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
      rl(c, l.memoizedState) || (Me = !0), l.memoizedState = c, l.baseQueue === null && (l.baseState = c), t.lastRenderedState = c;
    }
    return [c, a];
  }
  function or(e, l, t) {
    var a = $, n = Ae(), c = ie;
    if (c) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = l();
    var u = !rl(
      (he || n).memoizedState,
      t
    );
    if (u && (n.memoizedState = t, Me = !0), n = n.queue, yu(vr.bind(null, a, n, e), [
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
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = $.updateQueue, l === null ? (l = mi(), $.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
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
      return !rl(e, t);
    } catch {
      return !0;
    }
  }
  function pr(e) {
    var l = Bt(e, 2);
    l !== null && tl(l, e, 2);
  }
  function mu(e) {
    var l = $e();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), Kt) {
        it(!0);
        try {
          t();
        } finally {
          it(!1);
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
  function xr(e, l, t, a) {
    return e.baseState = t, ou(
      e,
      he,
      typeof a == "function" ? a : Kl
    );
  }
  function Em(e, l, t, a, n) {
    if (gi(e)) throw Error(r(485));
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
      _.T !== null ? t(!0) : c.isTransition = !1, a(c), t = l.pending, t === null ? (c.next = l.pending = c, gr(l, c)) : (c.next = t.next, l.pending = t.next = c);
    }
  }
  function gr(e, l) {
    var t = l.action, a = l.payload, n = e.state;
    if (l.isTransition) {
      var c = _.T, u = {};
      _.T = u;
      try {
        var s = t(n, a), d = _.S;
        d !== null && d(u, s), jr(e, l, s);
      } catch (p) {
        vu(e, l, p);
      } finally {
        c !== null && u.types !== null && (c.types = u.types), _.T = c;
      }
    } else
      try {
        c = t(n, a), jr(e, l, c);
      } catch (p) {
        vu(e, l, p);
      }
  }
  function jr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        br(e, l, a);
      },
      function(a) {
        return vu(e, l, a);
      }
    ) : br(e, l, t);
  }
  function br(e, l, t) {
    l.status = "fulfilled", l.value = t, Sr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, gr(e, t)));
  }
  function vu(e, l, t) {
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
  function _r(e, l) {
    return l;
  }
  function zr(e, l) {
    if (ie) {
      var t = pe.formState;
      if (t !== null) {
        e: {
          var a = $;
          if (ie) {
            if (xe) {
              l: {
                for (var n = xe, c = zl; n.nodeType !== 8; ) {
                  if (!c) {
                    n = null;
                    break l;
                  }
                  if (n = Al(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                c = n.data, n = c === "F!" || c === "F" ? n : null;
              }
              if (n) {
                xe = Al(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            rt(a);
          }
          a = !1;
        }
        a && (l = t[0]);
      }
    }
    return t = $e(), t.memoizedState = t.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _r,
      lastRenderedState: l
    }, t.queue = a, t = Zr.bind(
      null,
      $,
      a
    ), a.dispatch = t, a = mu(!1), c = bu.bind(
      null,
      $,
      !1,
      a.queue
    ), a = $e(), n = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, t = Em.bind(
      null,
      $,
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
    if (l = ou(
      e,
      l,
      _r
    )[0], e = yi(Kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = un(l);
      } catch (u) {
        throw u === ya ? ci : u;
      }
    else a = l;
    l = Ae();
    var n = l.queue, c = n.dispatch;
    return t !== l.memoizedState && ($.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      Tm.bind(null, n, t),
      null
    )), [a, c, e];
  }
  function Tm(e, l) {
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
    return e = { tag: e, create: t, deps: a, inst: l, next: null }, l = $.updateQueue, l === null && (l = mi(), $.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (a = t.next, t.next = e, e.next = a, l.lastEffect = e), e;
  }
  function Tr() {
    return Ae().memoizedState;
  }
  function pi(e, l, t, a) {
    var n = $e();
    $.flags |= e, n.memoizedState = ba(
      1 | l,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function xi(e, l, t, a) {
    var n = Ae();
    a = a === void 0 ? null : a;
    var c = n.memoizedState.inst;
    he !== null && a !== null && cu(a, he.memoizedState.deps) ? n.memoizedState = ba(l, c, t, a) : ($.flags |= e, n.memoizedState = ba(
      1 | l,
      c,
      t,
      a
    ));
  }
  function Mr(e, l) {
    pi(8390656, 8, e, l);
  }
  function yu(e, l) {
    xi(2048, 8, e, l);
  }
  function Mm(e) {
    $.flags |= 4;
    var l = $.updateQueue;
    if (l === null)
      l = mi(), $.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function Or(e) {
    var l = Ae().memoizedState;
    return Mm({ ref: l, nextImpl: e }), function() {
      if ((fe & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Cr(e, l) {
    return xi(4, 2, e, l);
  }
  function Dr(e, l) {
    return xi(4, 4, e, l);
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
    t = t != null ? t.concat([e]) : null, xi(4, 4, Ur.bind(null, l, e), t);
  }
  function pu() {
  }
  function qr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    return l !== null && cu(l, a[1]) ? a[0] : (t.memoizedState = [e, l], e);
  }
  function Hr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    if (l !== null && cu(l, a[1]))
      return a[0];
    if (a = e(), Kt) {
      it(!0);
      try {
        e();
      } finally {
        it(!1);
      }
    }
    return t.memoizedState = [a, l], a;
  }
  function xu(e, l, t) {
    return t === void 0 || (Vl & 1073741824) !== 0 && (ae & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = Bd(), $.lanes |= e, gt |= e, t);
  }
  function Br(e, l, t, a) {
    return rl(t, l) ? t : xa.current !== null ? (e = xu(e, t, a), rl(e, l) || (Me = !0), e) : (Vl & 42) === 0 || (Vl & 1073741824) !== 0 && (ae & 261930) === 0 ? (Me = !0, e.memoizedState = t) : (e = Bd(), $.lanes |= e, gt |= e, l);
  }
  function Yr(e, l, t, a, n) {
    var c = U.p;
    U.p = c !== 0 && 8 > c ? c : 8;
    var u = _.T, s = {};
    _.T = s, bu(e, !1, l, t);
    try {
      var d = n(), p = _.S;
      if (p !== null && p(s, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var z = zm(
          d,
          a
        );
        sn(
          e,
          l,
          z,
          yl(e)
        );
      } else
        sn(
          e,
          l,
          a,
          yl(e)
        );
    } catch (T) {
      sn(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: T },
        yl()
      );
    } finally {
      U.p = c, u !== null && s.types !== null && (u.types = s.types), _.T = u;
    }
  }
  function Om() {
  }
  function gu(e, l, t, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Gr(e).queue;
    Yr(
      e,
      n,
      l,
      G,
      t === null ? Om : function() {
        return wr(e), t(a);
      }
    );
  }
  function Gr(e) {
    var l = e.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: G
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
  function wr(e) {
    var l = Gr(e);
    l.next === null && (l = e.alternate.memoizedState), sn(
      e,
      l.next.queue,
      {},
      yl()
    );
  }
  function ju() {
    return Xe(Nn);
  }
  function Xr() {
    return Ae().memoizedState;
  }
  function Qr() {
    return Ae().memoizedState;
  }
  function Cm(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = yl();
          e = ht(t);
          var a = mt(l, e, t);
          a !== null && (tl(a, l, t), tn(a, l, t)), l = { cache: $c() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Dm(e, l, t) {
    var a = yl();
    t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gi(e) ? Lr(l, t) : (t = Yc(e, l, t, a), t !== null && (tl(t, e, a), Vr(t, l, a)));
  }
  function Zr(e, l, t) {
    var a = yl();
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
    if (gi(e)) Lr(l, n);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = l.lastRenderedReducer, c !== null))
        try {
          var u = l.lastRenderedState, s = c(u, t);
          if (n.hasEagerState = !0, n.eagerState = s, rl(s, u))
            return Pn(e, l, n, 0), pe === null && In(), !1;
        } catch {
        }
      if (t = Yc(e, l, n, a), t !== null)
        return tl(t, e, a), Vr(t, l, a), !0;
    }
    return !1;
  }
  function bu(e, l, t, a) {
    if (a = {
      lane: 2,
      revertLane: Pu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gi(e)) {
      if (l) throw Error(r(479));
    } else
      l = Yc(
        e,
        t,
        a,
        2
      ), l !== null && tl(l, e, 2);
  }
  function gi(e) {
    var l = e.alternate;
    return e === $ || l !== null && l === $;
  }
  function Lr(e, l) {
    ga = oi = !0;
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
    readContext: Xe,
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
    readContext: Xe,
    use: vi,
    useCallback: function(e, l) {
      return $e().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: Xe,
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
      var t = $e();
      l = l === void 0 ? null : l;
      var a = e();
      if (Kt) {
        it(!0);
        try {
          e();
        } finally {
          it(!1);
        }
      }
      return t.memoizedState = [a, l], a;
    },
    useReducer: function(e, l, t) {
      var a = $e();
      if (t !== void 0) {
        var n = t(l);
        if (Kt) {
          it(!0);
          try {
            t(l);
          } finally {
            it(!1);
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
        $,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var l = $e();
      return e = { current: e }, l.memoizedState = e;
    },
    useState: function(e) {
      e = mu(e);
      var l = e.queue, t = Zr.bind(null, $, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: pu,
    useDeferredValue: function(e, l) {
      var t = $e();
      return xu(t, e, l);
    },
    useTransition: function() {
      var e = mu(!1);
      return e = Yr.bind(
        null,
        $,
        e.queue,
        !0,
        !1
      ), $e().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var a = $, n = $e();
      if (ie) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = l(), pe === null)
          throw Error(r(349));
        (ae & 127) !== 0 || hr(a, l, t);
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
      var e = $e(), l = pe.identifierPrefix;
      if (ie) {
        var t = ql, a = Rl;
        t = (a & ~(1 << 32 - fl(a) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = hi++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = Nm++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: ju,
    useFormState: zr,
    useActionState: zr,
    useOptimistic: function(e) {
      var l = $e();
      l.memoizedState = l.baseState = e;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = t, l = bu.bind(
        null,
        $,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: du,
    useCacheRefresh: function() {
      return $e().memoizedState = Cm.bind(
        null,
        $
      );
    },
    useEffectEvent: function(e) {
      var l = $e(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((fe & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, Su = {
    readContext: Xe,
    use: vi,
    useCallback: qr,
    useContext: Xe,
    useEffect: yu,
    useImperativeHandle: Rr,
    useInsertionEffect: Cr,
    useLayoutEffect: Dr,
    useMemo: Hr,
    useReducer: yi,
    useRef: Tr,
    useState: function() {
      return yi(Kl);
    },
    useDebugValue: pu,
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
    useId: Xr,
    useHostTransitionStatus: ju,
    useFormState: Nr,
    useActionState: Nr,
    useOptimistic: function(e, l) {
      var t = Ae();
      return xr(t, he, e, l);
    },
    useMemoCache: du,
    useCacheRefresh: Qr
  };
  Su.useEffectEvent = Or;
  var kr = {
    readContext: Xe,
    use: vi,
    useCallback: qr,
    useContext: Xe,
    useEffect: yu,
    useImperativeHandle: Rr,
    useInsertionEffect: Cr,
    useLayoutEffect: Dr,
    useMemo: Hr,
    useReducer: hu,
    useRef: Tr,
    useState: function() {
      return hu(Kl);
    },
    useDebugValue: pu,
    useDeferredValue: function(e, l) {
      var t = Ae();
      return he === null ? xu(t, e, l) : Br(
        t,
        he.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = hu(Kl)[0], l = Ae().memoizedState;
      return [
        typeof e == "boolean" ? e : un(e),
        l
      ];
    },
    useSyncExternalStore: or,
    useId: Xr,
    useHostTransitionStatus: ju,
    useFormState: Er,
    useActionState: Er,
    useOptimistic: function(e, l) {
      var t = Ae();
      return he !== null ? xr(t, he, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: du,
    useCacheRefresh: Qr
  };
  kr.useEffectEvent = Or;
  function _u(e, l, t, a) {
    l = e.memoizedState, t = t(a, l), t = t == null ? l : D({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var zu = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var a = yl(), n = ht(a);
      n.payload = l, t != null && (n.callback = t), l = mt(e, n, a), l !== null && (tl(l, e, a), tn(l, e, a));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var a = yl(), n = ht(a);
      n.tag = 1, n.payload = l, t != null && (n.callback = t), l = mt(e, n, a), l !== null && (tl(l, e, a), tn(l, e, a));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = yl(), a = ht(t);
      a.tag = 2, l != null && (a.callback = l), l = mt(e, a, t), l !== null && (tl(l, e, t), tn(l, e, t));
    }
  };
  function Jr(e, l, t, a, n, c, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, u) : l.prototype && l.prototype.isPureReactComponent ? !Ja(t, a) || !Ja(n, c) : !0;
  }
  function $r(e, l, t, a) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, a), l.state !== e && zu.enqueueReplaceState(l, l.state, null);
  }
  function kt(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var a in l)
        a !== "ref" && (t[a] = l[a]);
    }
    if (e = e.defaultProps) {
      t === l && (t = D({}, t));
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
  function Nu(e, l, t) {
    return t = ht(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      ji(e, l);
    }, t;
  }
  function ed(e) {
    return e = ht(e), e.tag = 3, e;
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
      Pr(l, t, a), typeof n != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Um(e, l, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = t.alternate, l !== null && ha(
        l,
        t,
        n,
        !0
      ), t = ol.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Nl === null ? Di() : t.alternate === null && _e === 0 && (_e = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === ui ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Wu(e, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === ui ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), Wu(e, a, n)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return Wu(e, a, n), Di(), !1;
    }
    if (ie)
      return l = ol.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Lc && (e = Error(r(422), { cause: a }), Fa(bl(e, t)))) : (a !== Lc && (l = Error(r(423), {
        cause: a
      }), Fa(
        bl(l, t)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = bl(a, t), n = Nu(
        e.stateNode,
        a,
        n
      ), lu(e, n), _e !== 4 && (_e = 2)), !1;
    var c = Error(r(520), { cause: a });
    if (c = bl(c, t), pn === null ? pn = [c] : pn.push(c), _e !== 4 && (_e = 2), l === null) return !0;
    a = bl(a, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = n & -n, t.lanes |= e, e = Nu(t.stateNode, a, e), lu(t, e), !1;
        case 1:
          if (l = t.type, c = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (jt === null || !jt.has(c))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = ed(n), ld(
              n,
              e,
              t,
              a
            ), lu(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Au = Error(r(461)), Me = !1;
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
    return Xt(l), a = uu(
      e,
      l,
      t,
      u,
      c,
      n
    ), s = su(), e !== null && !Me ? (fu(e, l, n), kl(e, l, n)) : (ie && s && Qc(l), l.flags |= 1, Qe(e, l, a, n), l.child);
  }
  function ad(e, l, t, a, n) {
    if (e === null) {
      var c = t.type;
      return typeof c == "function" && !Gc(c) && c.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = c, nd(
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
    if (c = e.child, !Ru(e, n)) {
      var u = c.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ja, t(u, a) && e.ref === l.ref)
        return kl(e, l, n);
    }
    return l.flags |= 1, e = Xl(c, a), e.ref = l.ref, e.return = l, l.child = e;
  }
  function nd(e, l, t, a, n) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ja(c, a) && e.ref === l.ref)
        if (Me = !1, l.pendingProps = a = c, Ru(e, n))
          (e.flags & 131072) !== 0 && (Me = !0);
        else
          return l.lanes = e.lanes, kl(e, l, n);
    }
    return Eu(
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
        ), c !== null ? sr(l, c) : au(), fr(l);
      else
        return a = l.lanes = 536870912, cd(
          e,
          l,
          c !== null ? c.baseLanes | t : t,
          t,
          a
        );
    } else
      c !== null ? (ii(l, c.cachePool), sr(l, c), yt(), l.memoizedState = null) : (e !== null && ii(l, null), au(), yt());
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
    var c = Fc();
    return c = c === null ? null : { parent: Ee._currentValue, pool: c }, l.memoizedState = {
      baseLanes: t,
      cachePool: c
    }, e !== null && ii(l, null), au(), fr(l), e !== null && ha(e, l, a, !0), l.childLanes = n, null;
  }
  function bi(e, l) {
    return l = _i(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function ud(e, l, t) {
    return Vt(l, e.child, null, t), e = bi(l, l.pendingProps), e.flags |= 2, hl(l), l.memoizedState = null, e;
  }
  function Rm(e, l, t) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (ie) {
        if (a.mode === "hidden")
          return e = bi(l, a), l.lanes = 536870912, rn(null, e);
        if (iu(l), (e = xe) ? (e = jo(
          e,
          zl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: st !== null ? { id: Rl, overflow: ql } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, we = l, xe = null)) : e = null, e === null) throw rt(l);
        return l.lanes = 536870912, null;
      }
      return bi(l, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var u = c.dehydrated;
      if (iu(l), n)
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
          throw c.retryLane = u, Bt(e, u), tl(a, e, u), Au;
        Di(), l = ud(
          e,
          l,
          t
        );
      } else
        e = c.treeContext, xe = Al(u.nextSibling), we = l, ie = !0, ft = null, zl = !1, e !== null && kf(l, e), l = bi(l, a), l.flags |= 4096;
      return l;
    }
    return e = Xl(e.child, {
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
  function Eu(e, l, t, a, n) {
    return Xt(l), t = uu(
      e,
      l,
      t,
      a,
      void 0,
      n
    ), a = su(), e !== null && !Me ? (fu(e, l, n), kl(e, l, n)) : (ie && a && Qc(l), l.flags |= 1, Qe(e, l, t, n), l.child);
  }
  function sd(e, l, t, a, n, c) {
    return Xt(l), l.updateQueue = null, t = dr(
      l,
      a,
      t,
      n
    ), rr(e), a = su(), e !== null && !Me ? (fu(e, l, c), kl(e, l, c)) : (ie && a && Qc(l), l.flags |= 1, Qe(e, l, t, c), l.child);
  }
  function fd(e, l, t, a, n) {
    if (Xt(l), l.stateNode === null) {
      var c = fa, u = t.contextType;
      typeof u == "object" && u !== null && (c = Xe(u)), c = new t(a, c), l.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = zu, l.stateNode = c, c._reactInternals = l, c = l.stateNode, c.props = a, c.state = l.memoizedState, c.refs = {}, Pc(l), u = t.contextType, c.context = typeof u == "object" && u !== null ? Xe(u) : fa, c.state = l.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (_u(
        l,
        t,
        u,
        a
      ), c.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (u = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), u !== c.state && zu.enqueueReplaceState(c, c.state, null), nn(l, a, c, n), an(), c.state = l.memoizedState), typeof c.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (e === null) {
      c = l.stateNode;
      var s = l.memoizedProps, d = kt(t, s);
      c.props = d;
      var p = c.context, z = t.contextType;
      u = fa, typeof z == "object" && z !== null && (u = Xe(z));
      var T = t.getDerivedStateFromProps;
      z = typeof T == "function" || typeof c.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, z || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (s || p !== u) && $r(
        l,
        c,
        a,
        u
      ), ot = !1;
      var x = l.memoizedState;
      c.state = x, nn(l, a, c, n), an(), p = l.memoizedState, s || x !== p || ot ? (typeof T == "function" && (_u(
        l,
        t,
        T,
        a
      ), p = l.memoizedState), (d = ot || Jr(
        l,
        t,
        d,
        a,
        x,
        p,
        u
      )) ? (z || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = p), c.props = a, c.state = p, c.context = u, a = d) : (typeof c.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      c = l.stateNode, eu(e, l), u = l.memoizedProps, z = kt(t, u), c.props = z, T = l.pendingProps, x = c.context, p = t.contextType, d = fa, typeof p == "object" && p !== null && (d = Xe(p)), s = t.getDerivedStateFromProps, (p = typeof s == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (u !== T || x !== d) && $r(
        l,
        c,
        a,
        d
      ), ot = !1, x = l.memoizedState, c.state = x, nn(l, a, c, n), an();
      var b = l.memoizedState;
      u !== T || x !== b || ot || e !== null && e.dependencies !== null && ai(e.dependencies) ? (typeof s == "function" && (_u(
        l,
        t,
        s,
        a
      ), b = l.memoizedState), (z = ot || Jr(
        l,
        t,
        z,
        a,
        x,
        b,
        d
      ) || e !== null && e.dependencies !== null && ai(e.dependencies)) ? (p || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, b, d), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        a,
        b,
        d
      )), typeof c.componentDidUpdate == "function" && (l.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), c.props = a, c.state = b, c.context = d, a = z) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), a = !1);
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
    )) : Qe(e, l, t, n), l.memoizedState = c.state, e = l.child) : e = kl(
      e,
      l,
      n
    ), e;
  }
  function rd(e, l, t, a) {
    return Gt(), l.flags |= 256, Qe(e, l, t, a), l.child;
  }
  var Tu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mu(e) {
    return { baseLanes: e, cachePool: Pf() };
  }
  function Ou(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= vl), e;
  }
  function dd(e, l, t) {
    var a = l.pendingProps, n = !1, c = (l.flags & 128) !== 0, u;
    if ((u = c) || (u = e !== null && e.memoizedState === null ? !1 : (Ne.current & 2) !== 0), u && (n = !0, l.flags &= -129), u = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (ie) {
        if (n ? vt(l) : yt(), (e = xe) ? (e = jo(
          e,
          zl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: st !== null ? { id: Rl, overflow: ql } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, we = l, xe = null)) : e = null, e === null) throw rt(l);
        return os(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (yt(), n = l.mode, s = _i(
        { mode: "hidden", children: s },
        n
      ), a = Yt(
        a,
        n,
        t,
        null
      ), s.return = l, a.return = l, s.sibling = a, l.child = s, a = l.child, a.memoizedState = Mu(t), a.childLanes = Ou(
        e,
        u,
        t
      ), l.memoizedState = Tu, rn(null, a)) : (vt(l), Cu(l, s));
    }
    var d = e.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (c)
        l.flags & 256 ? (vt(l), l.flags &= -257, l = Du(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (yt(), l.child = e.child, l.flags |= 128, l = null) : (yt(), s = a.fallback, n = l.mode, a = _i(
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
        ), a = l.child, a.memoizedState = Mu(t), a.childLanes = Ou(
          e,
          u,
          t
        ), l.memoizedState = Tu, l = rn(null, a));
      else if (vt(l), os(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset, u) var p = u.dgst;
        u = p, a = Error(r(419)), a.stack = "", a.digest = u, Fa({ value: a, source: null, stack: null }), l = Du(
          e,
          l,
          t
        );
      } else if (Me || ha(e, l, t, !1), u = (t & e.childLanes) !== 0, Me || u) {
        if (u = pe, u !== null && (a = Ws(u, t), a !== 0 && a !== d.retryLane))
          throw d.retryLane = a, Bt(e, a), tl(u, e, a), Au;
        ds(s) || Di(), l = Du(
          e,
          l,
          t
        );
      } else
        ds(s) ? (l.flags |= 192, l.child = e.child, l = null) : (e = d.treeContext, xe = Al(
          s.nextSibling
        ), we = l, ie = !0, ft = null, zl = !1, e !== null && kf(l, e), l = Cu(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (yt(), s = a.fallback, n = l.mode, d = e.child, p = d.sibling, a = Xl(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 65011712, p !== null ? s = Xl(
      p,
      s
    ) : (s = Yt(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = l, a.return = l, a.sibling = s, l.child = a, rn(null, a), a = l.child, s = e.child.memoizedState, s === null ? s = Mu(t) : (n = s.cachePool, n !== null ? (d = Ee._currentValue, n = n.parent !== d ? { parent: d, pool: d } : n) : n = Pf(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Ou(
      e,
      u,
      t
    ), l.memoizedState = Tu, rn(e.child, a)) : (vt(l), t = e.child, e = t.sibling, t = Xl(t, {
      mode: "visible",
      children: a.children
    }), t.return = l, t.sibling = null, e !== null && (u = l.deletions, u === null ? (l.deletions = [e], l.flags |= 16) : u.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function Cu(e, l) {
    return l = _i(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function _i(e, l) {
    return e = dl(22, e, null, l), e.lanes = 0, e;
  }
  function Du(e, l, t) {
    return Vt(l, e.child, null, t), e = Cu(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function od(e, l, t) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l), kc(e.return, l, t);
  }
  function Uu(e, l, t, a, n, c) {
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
    if (s ? (u = u & 1 | 2, l.flags |= 128) : u &= 1, R(Ne, u), Qe(e, l, a, t), a = ie ? Wa : 0, !s && e !== null && (e.flags & 128) !== 0)
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
        t = n, t === null ? (n = l.child, l.child = null) : (n = t.sibling, t.sibling = null), Uu(
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
        Uu(
          l,
          !0,
          t,
          null,
          c,
          a
        );
        break;
      case "together":
        Uu(
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
  function kl(e, l, t) {
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
      for (e = l.child, t = Xl(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Xl(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function Ru(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ai(e)));
  }
  function qm(e, l, t) {
    switch (l.tag) {
      case 3:
        V(l, l.stateNode.containerInfo), dt(l, Ee, e.memoizedState.cache), Gt();
        break;
      case 27:
      case 5:
        Ot(l);
        break;
      case 4:
        V(l, l.stateNode.containerInfo);
        break;
      case 10:
        dt(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, iu(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (vt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? dd(e, l, t) : (vt(l), e = kl(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        vt(l);
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
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Ne, Ne.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, id(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        dt(l, Ee, e.memoizedState.cache);
    }
    return kl(e, l, t);
  }
  function md(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        Me = !0;
      else {
        if (!Ru(e, t) && (l.flags & 128) === 0)
          return Me = !1, qm(
            e,
            l,
            t
          );
        Me = (e.flags & 131072) !== 0;
      }
    else
      Me = !1, ie && (l.flags & 1048576) !== 0 && Kf(l, Wa, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var a = l.pendingProps;
          if (e = Zt(l.elementType), l.type = e, typeof e == "function")
            Gc(e) ? (a = kt(e, a), l.tag = 1, l = fd(
              null,
              l,
              e,
              a,
              t
            )) : (l.tag = 0, l = Eu(
              null,
              l,
              e,
              a,
              t
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ke) {
                l.tag = 11, l = td(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              } else if (n === F) {
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
            throw l = cl(e) || e, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return Eu(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return a = l.type, n = kt(
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
          n = c.element, eu(e, l), nn(l, a, null, t);
          var u = l.memoizedState;
          if (a = u.cache, dt(l, Ee, a), a !== c.cache && Jc(
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
              n = bl(
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
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, xe = Al(e.firstChild), we = l, ie = !0, ft = null, zl = !0, t = ir(
                l,
                null,
                a,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Gt(), a === n) {
              l = kl(
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
        )) ? l.memoizedState = t : ie || (t = l.type, e = l.pendingProps, a = Gi(
          I.current
        ).createElement(t), a[Ge] = l, a[We] = e, Ze(a, t, e), qe(a), l.stateNode = a) : l.memoizedState = Ao(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ot(l), e === null && ie && (a = l.stateNode = _o(
          l.type,
          l.pendingProps,
          I.current
        ), we = l, zl = !0, n = xe, zt(l.type) ? (hs = n, xe = Al(a.firstChild)) : xe = n), Qe(
          e,
          l,
          l.pendingProps.children,
          t
        ), Si(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && ie && ((n = a = xe) && (a = dv(
          a,
          l.type,
          l.pendingProps,
          zl
        ), a !== null ? (l.stateNode = a, we = l, xe = Al(a.firstChild), zl = !1, n = !0) : n = !1), n || rt(l)), Ot(l), n = l.type, c = l.pendingProps, u = e !== null ? e.memoizedProps : null, a = c.children, ss(n, c) ? a = null : u !== null && ss(n, u) && (l.flags |= 32), l.memoizedState !== null && (n = uu(
          e,
          l,
          Am,
          null,
          null,
          t
        ), Nn._currentValue = n), Si(e, l), Qe(e, l, a, t), l.child;
      case 6:
        return e === null && ie && ((e = t = xe) && (t = ov(
          t,
          l.pendingProps,
          zl
        ), t !== null ? (l.stateNode = t, we = l, xe = null, e = !0) : e = !1), e || rt(l)), null;
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
        return a = l.pendingProps, dt(l, l.type, a.value), Qe(e, l, a.children, t), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Xt(l), n = Xe(n), a = a(n), l.flags |= 1, Qe(e, l, a, t), l.child;
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
        return Rm(e, l, t);
      case 22:
        return id(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return Xt(l), a = Xe(Ee), e === null ? (n = Fc(), n === null && (n = pe, c = $c(), n.pooledCache = c, c.refCount++, c !== null && (n.pooledCacheLanes |= t), n = c), l.memoizedState = { parent: a, cache: n }, Pc(l), dt(l, Ee, n)) : ((e.lanes & t) !== 0 && (eu(e, l), nn(l, null, null, t), an()), n = e.memoizedState, c = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), dt(l, Ee, a)) : (a = c.cache, dt(l, Ee, a), a !== n.cache && Jc(
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
  function Jl(e) {
    e.flags |= 4;
  }
  function qu(e, l, t, a, n) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Xd()) e.flags |= 8192;
        else
          throw Lt = ui, Ic;
    } else e.flags &= -16777217;
  }
  function vd(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Co(l))
      if (Xd()) e.flags |= 8192;
      else
        throw Lt = ui, Ic;
  }
  function zi(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? ks() : 536870912, e.lanes |= l, Na |= l);
  }
  function dn(e, l) {
    if (!ie)
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
  function Hm(e, l, t) {
    var a = l.pendingProps;
    switch (Zc(l), l.tag) {
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
        return t = l.stateNode, a = null, e !== null && (a = e.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Ll(Ee), P(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (oa(l) ? Jl(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Vc())), ge(l), null;
      case 26:
        var n = l.type, c = l.memoizedState;
        return e === null ? (Jl(l), c !== null ? (ge(l), vd(l, c)) : (ge(l), qu(
          l,
          n,
          null,
          a,
          t
        ))) : c ? c !== e.memoizedState ? (Jl(l), ge(l), vd(l, c)) : (ge(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== a && Jl(l), ge(l), qu(
          l,
          n,
          e,
          a,
          t
        )), null;
      case 27:
        if (qn(l), t = I.current, n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return ge(l), null;
          }
          e = B.current, oa(l) ? Jf(l) : (e = _o(n, a, t), l.stateNode = e, Jl(l));
        }
        return ge(l), null;
      case 5:
        if (qn(l), n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return ge(l), null;
          }
          if (c = B.current, oa(l))
            Jf(l);
          else {
            var u = Gi(
              I.current
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
            a && Jl(l);
          }
        }
        return ge(l), qu(
          l,
          l.type,
          e === null ? null : e.memoizedProps,
          l.pendingProps,
          t
        ), null;
      case 6:
        if (e && l.stateNode != null)
          e.memoizedProps !== a && Jl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (e = I.current, oa(l)) {
            if (e = l.stateNode, t = l.memoizedProps, a = null, n = we, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ge] = l, e = !!(e.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || oo(e.nodeValue, t)), e || rt(l, !0);
          } else
            e = Gi(e).createTextNode(
              a
            ), e[Ge] = l, l.stateNode = e;
        }
        return ge(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (a = oa(l), t !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ge] = l;
            } else
              Gt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            ge(l), e = !1;
          } else
            t = Vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return ge(l), null;
      case 13:
        if (a = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = oa(l), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ge] = l;
            } else
              Gt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            ge(l), n = !1;
          } else
            n = Vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
        }
        return hl(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = a !== null, e = e !== null && e.memoizedState !== null, t && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== n && (a.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), zi(l, l.updateQueue), ge(l), null);
      case 4:
        return P(), e === null && as(l.stateNode.containerInfo), ge(l), null;
      case 10:
        return Ll(l.type), ge(l), null;
      case 19:
        if (E(Ne), a = l.memoizedState, a === null) return ge(l), null;
        if (n = (l.flags & 128) !== 0, c = a.rendering, c === null)
          if (n) dn(a, !1);
          else {
            if (_e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (c = di(e), c !== null) {
                  for (l.flags |= 128, dn(a, !1), e = c.updateQueue, l.updateQueue = e, zi(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    Zf(t, e), t = t.sibling;
                  return R(
                    Ne,
                    Ne.current & 1 | 2
                  ), ie && Ql(l, a.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ul() > Mi && (l.flags |= 128, n = !0, dn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = di(c), e !== null) {
              if (l.flags |= 128, n = !0, e = e.updateQueue, l.updateQueue = e, zi(l, e), dn(a, !0), a.tail === null && a.tailMode === "hidden" && !c.alternate && !ie)
                return ge(l), null;
            } else
              2 * ul() - a.renderingStartTime > Mi && t !== 536870912 && (l.flags |= 128, n = !0, dn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (c.sibling = l.child, l.child = c) : (e = a.last, e !== null ? e.sibling = c : l.child = c, a.last = c);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ul(), e.sibling = null, t = Ne.current, R(
          Ne,
          n ? t & 1 | 2 : t & 1
        ), ie && Ql(l, a.treeForkCount), e) : (ge(l), null);
      case 22:
      case 23:
        return hl(l), nu(), a = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (ge(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : ge(l), t = l.updateQueue, t !== null && zi(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== t && (l.flags |= 2048), e !== null && E(Qt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), Ll(Ee), ge(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function Bm(e, l) {
    switch (Zc(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return Ll(Ee), P(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return qn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (hl(l), l.alternate === null)
            throw Error(r(340));
          Gt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (hl(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Gt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return E(Ne), null;
      case 4:
        return P(), null;
      case 10:
        return Ll(l.type), null;
      case 22:
      case 23:
        return hl(l), nu(), e !== null && E(Qt), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return Ll(Ee), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yd(e, l) {
    switch (Zc(l), l.tag) {
      case 3:
        Ll(Ee), P();
        break;
      case 26:
      case 27:
      case 5:
        qn(l);
        break;
      case 4:
        P();
        break;
      case 31:
        l.memoizedState !== null && hl(l);
        break;
      case 13:
        hl(l);
        break;
      case 19:
        E(Ne);
        break;
      case 10:
        Ll(l.type);
        break;
      case 22:
      case 23:
        hl(l), nu(), e !== null && E(Qt);
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
  function pt(e, l, t) {
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
              } catch (z) {
                oe(
                  n,
                  d,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (z) {
      oe(l, l.return, z);
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
  function xd(e, l, t) {
    t.props = kt(
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
  function Hl(e, l) {
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
  function gd(e) {
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
  function Hu(e, l, t) {
    try {
      var a = e.stateNode;
      iv(a, e.type, t, l), a[We] = l;
    } catch (n) {
      oe(e, e.return, n);
    }
  }
  function jd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zt(e.type) || e.tag === 4;
  }
  function Bu(e) {
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
  function Yu(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = Gl));
    else if (a !== 4 && (a === 27 && zt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (Yu(e, l, t), e = e.sibling; e !== null; )
        Yu(e, l, t), e = e.sibling;
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
  var $l = !1, Oe = !1, Gu = !1, Sd = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function Ym(e, l) {
    if (e = e.containerInfo, cs = Ki, e = Rf(e), Dc(e)) {
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
            var u = 0, s = -1, d = -1, p = 0, z = 0, T = e, x = null;
            l: for (; ; ) {
              for (var b; T !== t || n !== 0 && T.nodeType !== 3 || (s = u + n), T !== c || a !== 0 && T.nodeType !== 3 || (d = u + a), T.nodeType === 3 && (u += T.nodeValue.length), (b = T.firstChild) !== null; )
                x = T, T = b;
              for (; ; ) {
                if (T === e) break l;
                if (x === t && ++p === n && (s = u), x === c && ++z === a && (d = u), (b = T.nextSibling) !== null) break;
                T = x, x = T.parentNode;
              }
              T = b;
            }
            t = s === -1 || d === -1 ? null : { start: s, end: d };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (us = { focusedElem: e, selectionRange: t }, Ki = !1, He = l; He !== null; )
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
                  var H = kt(
                    t.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    H,
                    c
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Z) {
                  oe(
                    t,
                    t.return,
                    Z
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9)
                  rs(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rs(e);
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
  function _d(e, l, t) {
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
            var n = kt(
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
        Fl(e, t), l === null && a & 4 && gd(t), a & 512 && hn(t, t.return);
        break;
      case 12:
        Fl(e, t);
        break;
      case 31:
        Fl(e, t), a & 4 && Ad(e, t);
        break;
      case 13:
        Fl(e, t), a & 4 && Ed(e, t), a & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = km.bind(
          null,
          t
        ), hv(e, t))));
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
  function zd(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, zd(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && vc(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Ie = !1;
  function Wl(e, l, t) {
    for (t = t.child; t !== null; )
      Nd(e, l, t), t = t.sibling;
  }
  function Nd(e, l, t) {
    if (sl && typeof sl.onCommitFiberUnmount == "function")
      try {
        sl.onCommitFiberUnmount(Ha, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Oe || Hl(t, l), Wl(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Oe || Hl(t, l);
        var a = je, n = Ie;
        zt(t.type) && (je = t.stateNode, Ie = !1), Wl(
          e,
          l,
          t
        ), Sn(t.stateNode), je = a, Ie = n;
        break;
      case 5:
        Oe || Hl(t, l);
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
        je !== null && (Ie ? (e = je, xo(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), Ua(e)) : xo(je, t.stateNode));
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
        pt(2, t, l), Oe || pt(4, t, l), Wl(
          e,
          l,
          t
        );
        break;
      case 1:
        Oe || (Hl(t, l), a = t.stateNode, typeof a.componentWillUnmount == "function" && xd(
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
  function Gm(e) {
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
    var t = Gm(e);
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
  var Cl = null;
  function Td(e, l) {
    var t = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pe(l, e), el(e), a & 4 && (pt(3, e, e.return), on(3, e), pt(5, e, e.return));
        break;
      case 1:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), a & 64 && $l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = Cl;
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), a & 4) {
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
            )) : a === null && e.stateNode !== null && Hu(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), t !== null && a & 4 && Hu(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ta(n, "");
          } catch (H) {
            oe(e, e.return, H);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Hu(
          e,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Gu = !0);
        break;
      case 6:
        if (Pe(l, e), el(e), a & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          a = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = a;
          } catch (H) {
            oe(e, e.return, H);
          }
        }
        break;
      case 3:
        if (Qi = null, n = Cl, Cl = wi(l.containerInfo), Pe(l, e), Cl = n, el(e), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ua(l.containerInfo);
          } catch (H) {
            oe(e, e.return, H);
          }
        Gu && (Gu = !1, Md(e));
        break;
      case 4:
        a = Cl, Cl = wi(
          e.stateNode.containerInfo
        ), Pe(l, e), el(e), Cl = a;
        break;
      case 12:
        Pe(l, e), el(e);
        break;
      case 31:
        Pe(l, e), el(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ai(e, a)));
        break;
      case 13:
        Pe(l, e), el(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ti = ul()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ai(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var d = t !== null && t.memoizedState !== null, p = $l, z = Oe;
        if ($l = p || n, Oe = z || d, Pe(l, e), Oe = z, $l = p, el(e), a & 8192)
          e: for (l = e.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (t === null || d || $l || Oe || Jt(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                d = t = l;
                try {
                  if (c = d.stateNode, n)
                    u = c.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = d.stateNode;
                    var T = d.memoizedProps.style, x = T != null && T.hasOwnProperty("display") ? T.display : null;
                    s.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (H) {
                  oe(d, d.return, H);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = n ? "" : d.memoizedProps;
                } catch (H) {
                  oe(d, d.return, H);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                d = l;
                try {
                  var b = d.stateNode;
                  n ? go(b, !0) : go(d.stateNode, !1);
                } catch (H) {
                  oe(d, d.return, H);
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
            var n = t.stateNode, c = Bu(e);
            Ni(e, c, n);
            break;
          case 5:
            var u = t.stateNode;
            t.flags & 32 && (ta(u, ""), t.flags &= -33);
            var s = Bu(e);
            Ni(e, s, u);
            break;
          case 3:
          case 4:
            var d = t.stateNode.containerInfo, p = Bu(e);
            Yu(
              e,
              p,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (z) {
        oe(e, e.return, z);
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
        _d(e, l.alternate, l), l = l.sibling;
  }
  function Jt(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pt(4, l, l.return), Jt(l);
          break;
        case 1:
          Hl(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && xd(
            l,
            l.return,
            t
          ), Jt(l);
          break;
        case 27:
          Sn(l.stateNode);
        case 26:
        case 5:
          Hl(l, l.return), Jt(l);
          break;
        case 22:
          l.memoizedState === null && Jt(l);
          break;
        case 30:
          Jt(l);
          break;
        default:
          Jt(l);
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
          ), t && a === null && u & 4 && gd(c), hn(c, c.return);
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
  function wu(e, l) {
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
        )), n & 2048 && wu(u, l);
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
          var z = u.stateNode;
          u.memoizedState !== null ? z._visibility & 2 ? Sa(
            c,
            u,
            s,
            d,
            n
          ) : mn(
            c,
            u
          ) : (z._visibility |= 2, Sa(
            c,
            u,
            s,
            d,
            n
          )), n && p & 2048 && wu(
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
            mn(t, a), n & 2048 && wu(
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
  function _a(e, l, t) {
    if (e.subtreeFlags & vn)
      for (e = e.child; e !== null; )
        Cd(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function Cd(e, l, t) {
    switch (e.tag) {
      case 26:
        _a(
          e,
          l,
          t
        ), e.flags & vn && e.memoizedState !== null && Nv(
          t,
          Cl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        _a(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var a = Cl;
        Cl = wi(e.stateNode.containerInfo), _a(
          e,
          l,
          t
        ), Cl = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = vn, vn = 16777216, _a(
          e,
          l,
          t
        ), vn = a) : _a(
          e,
          l,
          t
        ));
        break;
      default:
        _a(
          e,
          l,
          t
        );
    }
  }
  function Dd(e) {
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
      Dd(e);
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
        yn(e), e.flags & 2048 && pt(9, e, e.return);
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
      Dd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          pt(8, l, l.return), Ei(l);
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
          pt(8, t, l);
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
          if (zd(a), a === t) {
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
  var wm = {
    getCacheForType: function(e) {
      var l = Xe(Ee), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return Xe(Ee).controller.signal;
    }
  }, Xm = typeof WeakMap == "function" ? WeakMap : Map, fe = 0, pe = null, le = null, ae = 0, de = 0, ml = null, xt = !1, za = !1, Qu = !1, Pl = 0, _e = 0, gt = 0, $t = 0, Zu = 0, vl = 0, Na = 0, pn = null, ll = null, Lu = !1, Ti = 0, qd = 0, Mi = 1 / 0, Oi = null, jt = null, Ue = 0, bt = null, Aa = null, et = 0, Vu = 0, Ku = null, Hd = null, xn = 0, ku = null;
  function yl() {
    return (fe & 2) !== 0 && ae !== 0 ? ae & -ae : _.T !== null ? Pu() : Fs();
  }
  function Bd() {
    if (vl === 0)
      if ((ae & 536870912) === 0 || ie) {
        var e = Yn;
        Yn <<= 1, (Yn & 3932160) === 0 && (Yn = 262144), vl = e;
      } else vl = 536870912;
    return e = ol.current, e !== null && (e.flags |= 32), vl;
  }
  function tl(e, l, t) {
    (e === pe && (de === 2 || de === 9) || e.cancelPendingCommit !== null) && (Ea(e, 0), St(
      e,
      ae,
      vl,
      !1
    )), Ya(e, t), ((fe & 2) === 0 || e !== pe) && (e === pe && ((fe & 2) === 0 && ($t |= t), _e === 4 && St(
      e,
      ae,
      vl,
      !1
    )), Bl(e));
  }
  function Yd(e, l, t) {
    if ((fe & 6) !== 0) throw Error(r(327));
    var a = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || Ba(e, l), n = a ? Lm(e, l) : $u(e, l, !0), c = a;
    do {
      if (n === 0) {
        za && !a && St(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, c && !Qm(t)) {
          n = $u(e, l, !1), c = !1;
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
              if (d && (Ea(s, u).flags |= 256), u = $u(
                s,
                u,
                !1
              ), u !== 2) {
                if (Qu && !d) {
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
          Ea(e, 0), St(e, l, 0, !0);
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
              St(
                a,
                l,
                vl,
                !xt
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
          if ((l & 62914560) === l && (n = Ti + 300 - ul(), 10 < n)) {
            if (St(
              a,
              l,
              vl,
              !xt
            ), wn(a, 0, !0) !== 0) break e;
            et = l, a.timeoutHandle = yo(
              Gd.bind(
                null,
                a,
                t,
                ll,
                Oi,
                Lu,
                l,
                vl,
                $t,
                Na,
                xt,
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
            Lu,
            l,
            vl,
            $t,
            Na,
            xt,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bl(e);
  }
  function Gd(e, l, t, a, n, c, u, s, d, p, z, T, x, b) {
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
      }, Cd(
        l,
        c,
        T
      );
      var H = (c & 62914560) === c ? Ti - ul() : (c & 4194048) === c ? qd - ul() : 0;
      if (H = Av(
        T,
        H
      ), H !== null) {
        et = c, e.cancelPendingCommit = H(
          kd.bind(
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
            z,
            T,
            null,
            x,
            b
          )
        ), St(e, c, u, !p);
        return;
      }
    }
    kd(
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
  function Qm(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], c = n.getSnapshot;
          n = n.value;
          try {
            if (!rl(c(), n)) return !1;
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
  function St(e, l, t, a) {
    l &= ~Zu, l &= ~$t, e.suspendedLanes |= l, e.pingedLanes &= ~l, a && (e.warmLanes |= l), a = e.expirationTimes;
    for (var n = l; 0 < n; ) {
      var c = 31 - fl(n), u = 1 << c;
      a[c] = -1, n &= ~u;
    }
    t !== 0 && Js(e, t, l);
  }
  function Ci() {
    return (fe & 6) === 0 ? (gn(0), !1) : !0;
  }
  function Ju() {
    if (le !== null) {
      if (de === 0)
        var e = le.return;
      else
        e = le, Zl = wt = null, ru(e), pa = null, en = 0, e = le;
      for (; e !== null; )
        yd(e.alternate, e), e = e.return;
      le = null;
    }
  }
  function Ea(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, sv(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), et = 0, Ju(), pe = e, le = t = Xl(e.current, null), ae = l, de = 0, ml = null, xt = !1, za = Ba(e, l), Qu = !1, Na = vl = Zu = $t = gt = _e = 0, ll = pn = null, Lu = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= l; 0 < a; ) {
        var n = 31 - fl(a), c = 1 << n;
        l |= e[n], a &= ~c;
      }
    return Pl = l, In(), t;
  }
  function wd(e, l) {
    $ = null, _.H = fn, l === ya || l === ci ? (l = tr(), de = 3) : l === Ic ? (l = tr(), de = 4) : de = l === Au ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ml = l, le === null && (_e = 1, ji(
      e,
      bl(l, e.current)
    ));
  }
  function Xd() {
    var e = ol.current;
    return e === null ? !0 : (ae & 4194048) === ae ? Nl === null : (ae & 62914560) === ae || (ae & 536870912) !== 0 ? e === Nl : !1;
  }
  function Qd() {
    var e = _.H;
    return _.H = fn, e === null ? fn : e;
  }
  function Zd() {
    var e = _.A;
    return _.A = wm, e;
  }
  function Di() {
    _e = 4, xt || (ae & 4194048) !== ae && ol.current !== null || (za = !0), (gt & 134217727) === 0 && ($t & 134217727) === 0 || pe === null || St(
      pe,
      ae,
      vl,
      !1
    );
  }
  function $u(e, l, t) {
    var a = fe;
    fe |= 2;
    var n = Qd(), c = Zd();
    (pe !== e || ae !== l) && (Oi = null, Ea(e, l)), l = !1;
    var u = _e;
    e: do
      try {
        if (de !== 0 && le !== null) {
          var s = le, d = ml;
          switch (de) {
            case 8:
              Ju(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ol.current === null && (l = !0);
              var p = de;
              if (de = 0, ml = null, Ta(e, s, d, p), t && za) {
                u = 0;
                break e;
              }
              break;
            default:
              p = de, de = 0, ml = null, Ta(e, s, d, p);
          }
        }
        Zm(), u = _e;
        break;
      } catch (z) {
        wd(e, z);
      }
    while (!0);
    return l && e.shellSuspendCounter++, Zl = wt = null, fe = a, _.H = n, _.A = c, le === null && (pe = null, ae = 0, In()), u;
  }
  function Zm() {
    for (; le !== null; ) Ld(le);
  }
  function Lm(e, l) {
    var t = fe;
    fe |= 2;
    var a = Qd(), n = Zd();
    pe !== e || ae !== l ? (Oi = null, Mi = ul() + 500, Ea(e, l)) : za = Ba(
      e,
      l
    );
    e: do
      try {
        if (de !== 0 && le !== null) {
          l = le;
          var c = ml;
          l: switch (de) {
            case 1:
              de = 0, ml = null, Ta(e, l, c, 1);
              break;
            case 2:
            case 9:
              if (er(c)) {
                de = 0, ml = null, Vd(l);
                break;
              }
              l = function() {
                de !== 2 && de !== 9 || pe !== e || (de = 7), Bl(e);
              }, c.then(l, l);
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              er(c) ? (de = 0, ml = null, Vd(l)) : (de = 0, ml = null, Ta(e, l, c, 7));
              break;
            case 5:
              var u = null;
              switch (le.tag) {
                case 26:
                  u = le.memoizedState;
                case 5:
                case 27:
                  var s = le;
                  if (u ? Co(u) : s.stateNode.complete) {
                    de = 0, ml = null;
                    var d = s.sibling;
                    if (d !== null) le = d;
                    else {
                      var p = s.return;
                      p !== null ? (le = p, Ui(p)) : le = null;
                    }
                    break l;
                  }
              }
              de = 0, ml = null, Ta(e, l, c, 5);
              break;
            case 6:
              de = 0, ml = null, Ta(e, l, c, 6);
              break;
            case 8:
              Ju(), _e = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Vm();
        break;
      } catch (z) {
        wd(e, z);
      }
    while (!0);
    return Zl = wt = null, _.H = a, _.A = n, fe = t, le !== null ? 0 : (pe = null, ae = 0, In(), _e);
  }
  function Vm() {
    for (; le !== null && !mh(); )
      Ld(le);
  }
  function Ld(e) {
    var l = md(e.alternate, e, Pl);
    e.memoizedProps = e.pendingProps, l === null ? Ui(e) : le = l;
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
          ae
        );
        break;
      case 11:
        l = sd(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ae
        );
        break;
      case 5:
        ru(l);
      default:
        yd(t, l), l = le = Zf(l, Pl), l = md(t, l, Pl);
    }
    e.memoizedProps = e.pendingProps, l === null ? Ui(e) : le = l;
  }
  function Ta(e, l, t, a) {
    Zl = wt = null, ru(l), pa = null, en = 0;
    var n = l.return;
    try {
      if (Um(
        e,
        n,
        l,
        t,
        ae
      )) {
        _e = 1, ji(
          e,
          bl(t, e.current)
        ), le = null;
        return;
      }
    } catch (c) {
      if (n !== null) throw le = n, c;
      _e = 1, ji(
        e,
        bl(t, e.current)
      ), le = null;
      return;
    }
    l.flags & 32768 ? (ie || a === 1 ? e = !0 : za || (ae & 536870912) !== 0 ? e = !1 : (xt = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ol.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Kd(l, e)) : Ui(l);
  }
  function Ui(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        Kd(
          l,
          xt
        );
        return;
      }
      e = l.return;
      var t = Hm(
        l.alternate,
        l,
        Pl
      );
      if (t !== null) {
        le = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        le = l;
        return;
      }
      le = l = e;
    } while (l !== null);
    _e === 0 && (_e = 5);
  }
  function Kd(e, l) {
    do {
      var t = Bm(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, le = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        le = e;
        return;
      }
      le = e = t;
    } while (e !== null);
    _e = 6, le = null;
  }
  function kd(e, l, t, a, n, c, u, s, d) {
    e.cancelPendingCommit = null;
    do
      Ri();
    while (Ue !== 0);
    if ((fe & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === e.current) throw Error(r(177));
      if (c = l.lanes | l.childLanes, c |= Bc, zh(
        e,
        t,
        c,
        u,
        s,
        d
      ), e === pe && (le = pe = null, ae = 0), Aa = l, bt = e, et = t, Vu = c, Ku = n, Hd = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $m(Hn, function() {
        return Id(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, n = U.p, U.p = 2, u = fe, fe |= 4;
        try {
          Ym(e, l, t);
        } finally {
          fe = u, U.p = n, _.T = a;
        }
      }
      Ue = 1, Jd(), $d(), Wd();
    }
  }
  function Jd() {
    if (Ue === 1) {
      Ue = 0;
      var e = bt, l = Aa, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = _.T, _.T = null;
        var a = U.p;
        U.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Td(l, e);
          var c = us, u = Rf(e.containerInfo), s = c.focusedElem, d = c.selectionRange;
          if (u !== s && s && s.ownerDocument && Uf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (d !== null && Dc(s)) {
              var p = d.start, z = d.end;
              if (z === void 0 && (z = p), "selectionStart" in s)
                s.selectionStart = p, s.selectionEnd = Math.min(
                  z,
                  s.value.length
                );
              else {
                var T = s.ownerDocument || document, x = T && T.defaultView || window;
                if (x.getSelection) {
                  var b = x.getSelection(), H = s.textContent.length, Z = Math.min(d.start, H), ve = d.end === void 0 ? Z : Math.min(d.end, H);
                  !b.extend && Z > ve && (u = ve, ve = Z, Z = u);
                  var v = Df(
                    s,
                    Z
                  ), m = Df(
                    s,
                    ve
                  );
                  if (v && m && (b.rangeCount !== 1 || b.anchorNode !== v.node || b.anchorOffset !== v.offset || b.focusNode !== m.node || b.focusOffset !== m.offset)) {
                    var y = T.createRange();
                    y.setStart(v.node, v.offset), b.removeAllRanges(), Z > ve ? (b.addRange(y), b.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), b.addRange(y));
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
          Ki = !!cs, us = cs = null;
        } finally {
          fe = n, U.p = a, _.T = t;
        }
      }
      e.current = l, Ue = 2;
    }
  }
  function $d() {
    if (Ue === 2) {
      Ue = 0;
      var e = bt, l = Aa, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = _.T, _.T = null;
        var a = U.p;
        U.p = 2;
        var n = fe;
        fe |= 4;
        try {
          _d(e, l.alternate, l);
        } finally {
          fe = n, U.p = a, _.T = t;
        }
      }
      Ue = 3;
    }
  }
  function Wd() {
    if (Ue === 4 || Ue === 3) {
      Ue = 0, vh();
      var e = bt, l = Aa, t = et, a = Hd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ue = 5 : (Ue = 0, Aa = bt = null, Fd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (jt = null), hc(t), l = l.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
        try {
          sl.onCommitFiberRoot(
            Ha,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = _.T, n = U.p, U.p = 2, _.T = null;
        try {
          for (var c = e.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            c(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          _.T = l, U.p = n;
        }
      }
      (et & 3) !== 0 && Ri(), Bl(e), n = e.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? e === ku ? xn++ : (xn = 0, ku = e) : xn = 0, gn(0);
    }
  }
  function Fd(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Ia(l)));
  }
  function Ri() {
    return Jd(), $d(), Wd(), Id();
  }
  function Id() {
    if (Ue !== 5) return !1;
    var e = bt, l = Vu;
    Vu = 0;
    var t = hc(et), a = _.T, n = U.p;
    try {
      U.p = 32 > t ? 32 : t, _.T = null, t = Ku, Ku = null;
      var c = bt, u = et;
      if (Ue = 0, Aa = bt = null, et = 0, (fe & 6) !== 0) throw Error(r(331));
      var s = fe;
      if (fe |= 4, Ud(c.current), Od(
        c,
        c.current,
        u,
        t
      ), fe = s, gn(0, !1), sl && typeof sl.onPostCommitFiberRoot == "function")
        try {
          sl.onPostCommitFiberRoot(Ha, c);
        } catch {
        }
      return !0;
    } finally {
      U.p = n, _.T = a, Fd(e, l);
    }
  }
  function Pd(e, l, t) {
    l = bl(t, l), l = Nu(e.stateNode, l, 2), e = mt(e, l, 2), e !== null && (Ya(e, 2), Bl(e));
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
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (jt === null || !jt.has(a))) {
            e = bl(t, e), t = ed(2), a = mt(l, t, 2), a !== null && (ld(
              t,
              a,
              l,
              e
            ), Ya(a, 2), Bl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Wu(e, l, t) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Xm();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(t) || (Qu = !0, n.add(t), e = Km.bind(null, e, l, t), l.then(e, e));
  }
  function Km(e, l, t) {
    var a = e.pingCache;
    a !== null && a.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, pe === e && (ae & t) === t && (_e === 4 || _e === 3 && (ae & 62914560) === ae && 300 > ul() - Ti ? (fe & 2) === 0 && Ea(e, 0) : Zu |= t, Na === ae && (Na = 0)), Bl(e);
  }
  function eo(e, l) {
    l === 0 && (l = ks()), e = Bt(e, l), e !== null && (Ya(e, l), Bl(e));
  }
  function km(e) {
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
  function $m(e, l) {
    return fc(e, l);
  }
  var qi = null, Ma = null, Fu = !1, Hi = !1, Iu = !1, _t = 0;
  function Bl(e) {
    e !== Ma && e.next === null && (Ma === null ? qi = Ma = e : Ma = Ma.next = e), Hi = !0, Fu || (Fu = !0, Fm());
  }
  function gn(e, l) {
    if (!Iu && Hi) {
      Iu = !0;
      do
        for (var t = !1, a = qi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var c = 0;
            else {
              var u = a.suspendedLanes, s = a.pingedLanes;
              c = (1 << 31 - fl(42 | e) + 1) - 1, c &= n & ~(u & ~s), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (t = !0, no(a, c));
          } else
            c = ae, c = wn(
              a,
              a === pe ? c : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (c & 3) === 0 || Ba(a, c) || (t = !0, no(a, c));
          a = a.next;
        }
      while (t);
      Iu = !1;
    }
  }
  function Wm() {
    lo();
  }
  function lo() {
    Hi = Fu = !1;
    var e = 0;
    _t !== 0 && uv() && (e = _t);
    for (var l = ul(), t = null, a = qi; a !== null; ) {
      var n = a.next, c = to(a, l);
      c === 0 ? (a.next = null, t === null ? qi = n : t.next = n, n === null && (Ma = t)) : (t = a, (e !== 0 || (c & 3) !== 0) && (Hi = !0)), a = n;
    }
    Ue !== 0 && Ue !== 5 || gn(e), _t !== 0 && (_t = 0);
  }
  function to(e, l) {
    for (var t = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var u = 31 - fl(c), s = 1 << u, d = n[u];
      d === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[u] = _h(s, l)) : d <= l && (e.expiredLanes |= s), c &= ~s;
    }
    if (l = pe, t = ae, t = wn(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, t === 0 || e === l && (de === 2 || de === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && rc(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Ba(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (a !== null && rc(a), hc(t)) {
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
      return a = ao.bind(null, e), t = fc(t, a), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return a !== null && a !== null && rc(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ao(e, l) {
    if (Ue !== 0 && Ue !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (Ri() && e.callbackNode !== t)
      return null;
    var a = ae;
    return a = wn(
      e,
      e === pe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Yd(e, a, l), to(e, ul()), e.callbackNode != null && e.callbackNode === t ? ao.bind(null, e) : null);
  }
  function no(e, l) {
    if (Ri()) return null;
    Yd(e, l, !0);
  }
  function Fm() {
    fv(function() {
      (fe & 6) !== 0 ? fc(
        Ls,
        Wm
      ) : lo();
    });
  }
  function Pu() {
    if (_t === 0) {
      var e = ma;
      e === 0 && (e = Bn, Bn <<= 1, (Bn & 261888) === 0 && (Bn = 256)), _t = e;
    }
    return _t;
  }
  function io(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ln("" + e);
  }
  function co(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Im(e, l, t, a, n) {
    if (l === "submit" && t && t.stateNode === n) {
      var c = io(
        (n[We] || null).action
      ), u = a.submitter;
      u && (l = (l = u[We] || null) ? io(l.formAction) : u.getAttribute("formAction"), l !== null && (c = l, u = null));
      var s = new Jn(
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
                if (_t !== 0) {
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
  for (var es = 0; es < Hc.length; es++) {
    var ls = Hc[es], Pm = ls.toLowerCase(), ev = ls[0].toUpperCase() + ls.slice(1);
    Ol(
      Pm,
      "on" + ev
    );
  }
  Ol(Bf, "onAnimationEnd"), Ol(Yf, "onAnimationIteration"), Ol(Gf, "onAnimationStart"), Ol("dblclick", "onDoubleClick"), Ol("focusin", "onFocus"), Ol("focusout", "onBlur"), Ol(ym, "onTransitionRun"), Ol(pm, "onTransitionStart"), Ol(xm, "onTransitionCancel"), Ol(wf, "onTransitionEnd"), ea("onMouseEnter", ["mouseout", "mouseover"]), ea("onMouseLeave", ["mouseout", "mouseover"]), ea("onPointerEnter", ["pointerout", "pointerover"]), ea("onPointerLeave", ["pointerout", "pointerover"]), Ut(
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
  ), lv = new Set(
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
            } catch (z) {
              Fn(z);
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
            } catch (z) {
              Fn(z);
            }
            n.currentTarget = null, c = d;
          }
      }
    }
  }
  function te(e, l) {
    var t = l[mc];
    t === void 0 && (t = l[mc] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    t.has(a) || (so(l, e, 2, !1), t.add(a));
  }
  function ts(e, l, t) {
    var a = 0;
    l && (a |= 4), so(
      t,
      e,
      a,
      l
    );
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function as(e) {
    if (!e[Bi]) {
      e[Bi] = !0, ef.forEach(function(t) {
        t !== "selectionchange" && (lv.has(t) || ts(t, !1, e), ts(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[Bi] || (l[Bi] = !0, ts("selectionchange", !1, l));
    }
  }
  function so(e, l, t, a) {
    switch (Yo(l)) {
      case 2:
        var n = Mv;
        break;
      case 8:
        n = Ov;
        break;
      default:
        n = xs;
    }
    t = n.bind(
      null,
      l,
      t,
      e
    ), n = void 0, !_c || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: n
    }) : e.addEventListener(l, t, !0) : n !== void 0 ? e.addEventListener(l, t, {
      passive: n
    }) : e.addEventListener(l, t, !1);
  }
  function ns(e, l, t, a, n) {
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
      var p = c, z = bc(t), T = [];
      e: {
        var x = Xf.get(e);
        if (x !== void 0) {
          var b = Jn, H = e;
          switch (e) {
            case "keypress":
              if (Kn(t) === 0) break e;
            case "keydown":
            case "keyup":
              b = Jh;
              break;
            case "focusin":
              H = "focus", b = Ec;
              break;
            case "focusout":
              H = "blur", b = Ec;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ec;
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
              b = Hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Fh;
              break;
            case Bf:
            case Yf:
            case Gf:
              b = Gh;
              break;
            case wf:
              b = Ph;
              break;
            case "scroll":
            case "scrollend":
              b = Rh;
              break;
            case "wheel":
              b = lm;
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
              b = xf;
              break;
            case "toggle":
            case "beforetoggle":
              b = am;
          }
          var Z = (l & 4) !== 0, ve = !Z && (e === "scroll" || e === "scrollend"), v = Z ? x !== null ? x + "Capture" : null : x;
          Z = [];
          for (var m = p, y; m !== null; ) {
            var A = m;
            if (y = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || y === null || v === null || (A = Xa(m, v), A != null && Z.push(
              bn(m, A, y)
            )), ve) break;
            m = m.return;
          }
          0 < Z.length && (x = new b(
            x,
            H,
            null,
            t,
            z
          ), T.push({ event: x, listeners: Z }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", x && t !== jc && (H = t.relatedTarget || t.fromElement) && (Ft(H) || H[Wt]))
            break e;
          if ((b || x) && (x = z.window === z ? z : (x = z.ownerDocument) ? x.defaultView || x.parentWindow : window, b ? (H = t.relatedTarget || t.toElement, b = p, H = H ? Ft(H) : null, H !== null && (ve = M(H), Z = H.tag, H !== ve || Z !== 5 && Z !== 27 && Z !== 6) && (H = null)) : (b = null, H = p), b !== H)) {
            if (Z = yf, A = "onMouseLeave", v = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (Z = xf, A = "onPointerLeave", v = "onPointerEnter", m = "pointer"), ve = b == null ? x : wa(b), y = H == null ? x : wa(H), x = new Z(
              A,
              m + "leave",
              b,
              t,
              z
            ), x.target = ve, x.relatedTarget = y, A = null, Ft(z) === p && (Z = new Z(
              v,
              m + "enter",
              H,
              t,
              z
            ), Z.target = y, Z.relatedTarget = ve, A = Z), ve = A, b && H)
              l: {
                for (Z = tv, v = b, m = H, y = 0, A = v; A; A = Z(A))
                  y++;
                A = 0;
                for (var w = m; w; w = Z(w))
                  A++;
                for (; 0 < y - A; )
                  v = Z(v), y--;
                for (; 0 < A - y; )
                  m = Z(m), A--;
                for (; y--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    Z = v;
                    break l;
                  }
                  v = Z(v), m = Z(m);
                }
                Z = null;
              }
            else Z = null;
            b !== null && fo(
              T,
              x,
              b,
              Z,
              !1
            ), H !== null && ve !== null && fo(
              T,
              ve,
              H,
              Z,
              !0
            );
          }
        }
        e: {
          if (x = p ? wa(p) : window, b = x.nodeName && x.nodeName.toLowerCase(), b === "select" || b === "input" && x.type === "file")
            var ue = Af;
          else if (zf(x))
            if (Ef)
              ue = hm;
            else {
              ue = dm;
              var Y = rm;
            }
          else
            b = x.nodeName, !b || b.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? p && gc(p.elementType) && (ue = Af) : ue = om;
          if (ue && (ue = ue(e, p))) {
            Nf(
              T,
              ue,
              t,
              z
            );
            break e;
          }
          Y && Y(e, x, p), e === "focusout" && p && x.type === "number" && p.memoizedProps.value != null && xc(x, "number", x.value);
        }
        switch (Y = p ? wa(p) : window, e) {
          case "focusin":
            (zf(Y) || Y.contentEditable === "true") && (ca = Y, Uc = p, $a = null);
            break;
          case "focusout":
            $a = Uc = ca = null;
            break;
          case "mousedown":
            Rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rc = !1, qf(T, t, z);
            break;
          case "selectionchange":
            if (vm) break;
          case "keydown":
          case "keyup":
            qf(T, t, z);
        }
        var W;
        if (Mc)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          ia ? Sf(e, t) && (ne = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (ne = "onCompositionStart");
        ne && (gf && t.locale !== "ko" && (ia || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && ia && (W = mf()) : (ut = z, zc = "value" in ut ? ut.value : ut.textContent, ia = !0)), Y = Yi(p, ne), 0 < Y.length && (ne = new pf(
          ne,
          e,
          null,
          t,
          z
        ), T.push({ event: ne, listeners: Y }), W ? ne.data = W : (W = _f(t), W !== null && (ne.data = W)))), (W = im ? cm(e, t) : um(e, t)) && (ne = Yi(p, "onBeforeInput"), 0 < ne.length && (Y = new pf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          z
        ), T.push({
          event: Y,
          listeners: ne
        }), Y.data = W)), Im(
          T,
          e,
          p,
          t,
          z
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
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || c === null || (n = Xa(e, t), n != null && a.unshift(
        bn(e, n, c)
      ), n = Xa(e, l), n != null && a.push(
        bn(e, n, c)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function tv(e) {
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
      s !== 5 && s !== 26 && s !== 27 || p === null || (d = p, n ? (p = Xa(t, c), p != null && u.unshift(
        bn(t, p, d)
      )) : n || (p = Xa(t, c), p != null && u.push(
        bn(t, p, d)
      ))), t = t.return;
    }
    u.length !== 0 && e.push({ event: l, listeners: u });
  }
  var av = /\r\n?/g, nv = /\u0000|\uFFFD/g;
  function ro(e) {
    return (typeof e == "string" ? e : "" + e).replace(av, `
`).replace(nv, "");
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
        a != null && te("scroll", e);
        break;
      case "onScrollEnd":
        a != null && te("scrollend", e);
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
        te("beforetoggle", e), te("toggle", e), Xn(e, "popover", a);
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
        Xn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Dh.get(t) || t, Xn(e, t, a));
    }
  }
  function is(e, l, t, a, n, c) {
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
        a != null && te("scroll", e);
        break;
      case "onScrollEnd":
        a != null && te("scrollend", e);
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
            t in e ? e[t] = a : a === !0 ? e.setAttribute(t, "") : Xn(e, t, a);
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
        te("error", e), te("load", e);
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
        te("invalid", e);
        var s = c = u = n = null, d = null, p = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var z = t[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  u = z;
                  break;
                case "checked":
                  d = z;
                  break;
                case "defaultChecked":
                  p = z;
                  break;
                case "value":
                  c = z;
                  break;
                case "defaultValue":
                  s = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(r(137, l));
                  break;
                default:
                  me(e, l, a, z, t, null);
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
        te("invalid", e), a = u = c = null;
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
        te("invalid", e), c = n = a = null;
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
        te("beforetoggle", e), te("toggle", e), te("cancel", e), te("close", e);
        break;
      case "iframe":
      case "object":
        te("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < jn.length; a++)
          te(jn[a], e);
        break;
      case "image":
        te("error", e), te("load", e);
        break;
      case "details":
        te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        te("error", e), te("load", e);
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
          for (z in t)
            t.hasOwnProperty(z) && (a = t[z], a !== void 0 && is(
              e,
              l,
              z,
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
  function iv(e, l, t, a) {
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
        var n = null, c = null, u = null, s = null, d = null, p = null, z = null;
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
        for (var x in a) {
          var b = a[x];
          if (T = t[x], a.hasOwnProperty(x) && (b != null || T != null))
            switch (x) {
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
                z = b;
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
                  x,
                  b,
                  a,
                  T
                );
            }
        }
        pc(
          e,
          u,
          s,
          d,
          p,
          z,
          c,
          n
        );
        return;
      case "select":
        b = u = s = x = null;
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
                x = c;
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
        l = s, t = u, a = b, x != null ? la(e, !!t, x, !1) : !!a != !!t && (l != null ? la(e, !!t, l, !0) : la(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        b = x = null;
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
                x = n;
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
        sf(e, x, b);
        return;
      case "option":
        for (var H in t)
          x = t[H], t.hasOwnProperty(H) && x != null && !a.hasOwnProperty(H) && (H === "selected" ? e.selected = !1 : me(
            e,
            l,
            H,
            null,
            a,
            x
          ));
        for (d in a)
          x = a[d], b = t[d], a.hasOwnProperty(d) && x !== b && (x != null || b != null) && (d === "selected" ? e.selected = x && typeof x != "function" && typeof x != "symbol" : me(
            e,
            l,
            d,
            x,
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
        for (var Z in t)
          x = t[Z], t.hasOwnProperty(Z) && x != null && !a.hasOwnProperty(Z) && me(e, l, Z, null, a, x);
        for (p in a)
          if (x = a[p], b = t[p], a.hasOwnProperty(p) && x !== b && (x != null || b != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(137, l));
                break;
              default:
                me(
                  e,
                  l,
                  p,
                  x,
                  a,
                  b
                );
            }
        return;
      default:
        if (gc(l)) {
          for (var ve in t)
            x = t[ve], t.hasOwnProperty(ve) && x !== void 0 && !a.hasOwnProperty(ve) && is(
              e,
              l,
              ve,
              void 0,
              a,
              x
            );
          for (z in a)
            x = a[z], b = t[z], !a.hasOwnProperty(z) || x === b || x === void 0 && b === void 0 || is(
              e,
              l,
              z,
              x,
              a,
              b
            );
          return;
        }
    }
    for (var v in t)
      x = t[v], t.hasOwnProperty(v) && x != null && !a.hasOwnProperty(v) && me(e, l, v, null, a, x);
    for (T in a)
      x = a[T], b = t[T], !a.hasOwnProperty(T) || x === b || x == null && b == null || me(e, l, T, x, a, b);
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
  function cv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
        var n = t[a], c = n.transferSize, u = n.initiatorType, s = n.duration;
        if (c && s && ho(u)) {
          for (u = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var d = t[a], p = d.startTime;
            if (p > s) break;
            var z = d.transferSize, T = d.initiatorType;
            z && ho(T) && (d = d.responseEnd, u += z * (d < s ? 1 : (s - p) / (d - p)));
          }
          if (--a, l += 8 * (c + u) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var cs = null, us = null;
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
  function ss(e, l) {
    return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var fs = null;
  function uv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === fs ? !1 : (fs = e, !0) : (fs = null, !1);
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, sv = typeof clearTimeout == "function" ? clearTimeout : void 0, po = typeof Promise == "function" ? Promise : void 0, fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof po < "u" ? function(e) {
    return po.resolve(null).then(e).catch(rv);
  } : yo;
  function rv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zt(e) {
    return e === "head";
  }
  function xo(e, l) {
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
  function go(e, l) {
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
  function rs(e) {
    var l = e.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (l = l.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rs(t), vc(t);
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
  function dv(e, l, t, a) {
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
      if (e = Al(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ov(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Al(e.nextSibling), e === null)) return null;
    return e;
  }
  function jo(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Al(e.nextSibling), e === null)) return null;
    return e;
  }
  function ds(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function os(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function hv(e, l) {
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
  function Al(e) {
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
  var hs = null;
  function bo(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return Al(e.nextSibling);
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
  function _o(e, l, t) {
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
    vc(e);
  }
  var El = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Set();
  function wi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var lt = U.d;
  U.d = {
    f: mv,
    r: vv,
    D: yv,
    C: pv,
    L: xv,
    m: gv,
    X: bv,
    S: jv,
    M: Sv
  };
  function mv() {
    var e = lt.f(), l = Ci();
    return e || l;
  }
  function vv(e) {
    var l = It(e);
    l !== null && l.tag === 5 && l.type === "form" ? wr(l) : lt.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function No(e, l, t) {
    var a = Oa;
    if (a && typeof l == "string" && l) {
      var n = gl(l);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), zo.has(n) || (zo.add(n), e = { rel: e, crossOrigin: t, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Ze(l, "link", e), qe(l), a.head.appendChild(l)));
    }
  }
  function yv(e) {
    lt.D(e), No("dns-prefetch", e, null);
  }
  function pv(e, l) {
    lt.C(e, l), No("preconnect", e, l);
  }
  function xv(e, l, t) {
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
          c = Ca(e);
          break;
        case "script":
          c = Da(e);
      }
      El.has(c) || (e = D(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), El.set(c, e), a.querySelector(n) !== null || l === "style" && a.querySelector(_n(c)) || l === "script" && a.querySelector(zn(c)) || (l = a.createElement("link"), Ze(l, "link", e), qe(l), a.head.appendChild(l)));
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
          c = Da(e);
      }
      if (!El.has(c) && (e = D({ rel: "modulepreload", href: e }, l), El.set(c, e), t.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(zn(c)))
              return;
        }
        a = t.createElement("link"), Ze(a, "link", e), qe(a), t.head.appendChild(a);
      }
    }
  }
  function jv(e, l, t) {
    lt.S(e, l, t);
    var a = Oa;
    if (a && e) {
      var n = Pt(a).hoistableStyles, c = Ca(e);
      l = l || "default";
      var u = n.get(c);
      if (!u) {
        var s = { loading: 0, preload: null };
        if (u = a.querySelector(
          _n(c)
        ))
          s.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = El.get(c)) && ms(e, t);
          var d = u = a.createElement("link");
          qe(d), Ze(d, "link", e), d._p = new Promise(function(p, z) {
            d.onload = p, d.onerror = z;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Xi(u, l, a);
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
  function bv(e, l) {
    lt.X(e, l);
    var t = Oa;
    if (t && e) {
      var a = Pt(t).hoistableScripts, n = Da(e), c = a.get(n);
      c || (c = t.querySelector(zn(n)), c || (e = D({ src: e, async: !0 }, l), (l = El.get(n)) && vs(e, l), c = t.createElement("script"), qe(c), Ze(c, "link", e), t.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(n, c));
    }
  }
  function Sv(e, l) {
    lt.M(e, l);
    var t = Oa;
    if (t && e) {
      var a = Pt(t).hoistableScripts, n = Da(e), c = a.get(n);
      c || (c = t.querySelector(zn(n)), c || (e = D({ src: e, async: !0, type: "module" }, l), (l = El.get(n)) && vs(e, l), c = t.createElement("script"), qe(c), Ze(c, "link", e), t.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(n, c));
    }
  }
  function Ao(e, l, t, a) {
    var n = (n = I.current) ? wi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = Ca(t.href), t = Pt(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Ca(t.href);
          var c = Pt(
            n
          ).hoistableStyles, u = c.get(e);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, u), (c = n.querySelector(
            _n(e)
          )) && !c._p && (u.instance = c, u.state.loading = 5), El.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, El.set(e, t), c || _v(
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
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Da(t), t = Pt(
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
  function Ca(e) {
    return 'href="' + gl(e) + '"';
  }
  function _n(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Eo(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function _v(e, l, t, a) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = e.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ze(l, "link", t), qe(l), e.head.appendChild(l));
  }
  function Da(e) {
    return '[src="' + gl(e) + '"]';
  }
  function zn(e) {
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
          var n = D({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), qe(a), Ze(a, "style", n), Xi(a, t.precedence, e), l.instance = a;
        case "stylesheet":
          n = Ca(t.href);
          var c = e.querySelector(
            _n(n)
          );
          if (c)
            return l.state.loading |= 4, l.instance = c, qe(c), c;
          a = Eo(t), (n = El.get(n)) && ms(a, n), c = (e.ownerDocument || e).createElement("link"), qe(c);
          var u = c;
          return u._p = new Promise(function(s, d) {
            u.onload = s, u.onerror = d;
          }), Ze(c, "link", a), l.state.loading |= 4, Xi(c, t.precedence, e), l.instance = c;
        case "script":
          return c = Da(t.src), (n = e.querySelector(
            zn(c)
          )) ? (l.instance = n, qe(n), n) : (a = t, (n = El.get(c)) && (a = D({}, t), vs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), qe(n), Ze(n, "link", a), e.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Xi(a, t.precedence, e));
    return l.instance;
  }
  function Xi(e, l, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, c = n, u = 0; u < a.length; u++) {
      var s = a[u];
      if (s.dataset.precedence === l) c = s;
      else if (c !== n) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function ms(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function vs(e, l) {
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
  function Co(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Nv(e, l, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Ca(a.href), c = l.querySelector(
          _n(n)
        );
        if (c) {
          l = c._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = Zi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = c, qe(c);
          return;
        }
        c = l.ownerDocument || l, a = Eo(a), (n = El.get(n)) && ms(a, n), c = c.createElement("link"), qe(c);
        var u = c;
        u._p = new Promise(function(s, d) {
          u.onload = s, u.onerror = d;
        }), Ze(c, "link", a), t.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Zi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var ys = 0;
  function Av(e, l) {
    return e.stylesheets && e.count === 0 && Vi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Vi(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + l);
      0 < e.imgBytes && ys === 0 && (ys = 62500 * cv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Vi(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > ys ? 50 : 800) + l
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Li = /* @__PURE__ */ new Map(), l.forEach(Ev, e), Li = null, Zi.call(e));
  }
  function Ev(e, l) {
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
    $$typeof: De,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Tv(e, l, t, a, n, c, u, s, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dc(0), this.hiddenUpdates = dc(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = c, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Do(e, l, t, a, n, c, u, s, d, p, z, T) {
    return e = new Tv(
      e,
      l,
      t,
      u,
      d,
      p,
      z,
      T,
      s
    ), l = 1, c === !0 && (l |= 24), c = dl(3, null, null, l), e.current = c, c.stateNode = e, l = $c(), l.refCount++, e.pooledCache = l, l.refCount++, c.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: l
    }, Pc(c), e;
  }
  function Uo(e) {
    return e ? (e = fa, e) : fa;
  }
  function Ro(e, l, t, a, n, c) {
    n = Uo(n), a.context === null ? a.context = n : a.pendingContext = n, a = ht(l), a.payload = { element: t }, c = c === void 0 ? null : c, c !== null && (a.callback = c), t = mt(e, a, l), t !== null && (tl(t, e, l), tn(t, e, l));
  }
  function qo(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function ps(e, l) {
    qo(e, l), (e = e.alternate) && qo(e, l);
  }
  function Ho(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Bt(e, 67108864);
      l !== null && tl(l, e, 67108864), ps(e, 67108864);
    }
  }
  function Bo(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = yl();
      l = oc(l);
      var t = Bt(e, l);
      t !== null && tl(t, e, l), ps(e, l);
    }
  }
  var Ki = !0;
  function Mv(e, l, t, a) {
    var n = _.T;
    _.T = null;
    var c = U.p;
    try {
      U.p = 2, xs(e, l, t, a);
    } finally {
      U.p = c, _.T = n;
    }
  }
  function Ov(e, l, t, a) {
    var n = _.T;
    _.T = null;
    var c = U.p;
    try {
      U.p = 8, xs(e, l, t, a);
    } finally {
      U.p = c, _.T = n;
    }
  }
  function xs(e, l, t, a) {
    if (Ki) {
      var n = gs(a);
      if (n === null)
        ns(
          e,
          l,
          a,
          ki,
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
      else if (Go(e, a), l & 4 && -1 < Cv.indexOf(e)) {
        for (; n !== null; ) {
          var c = It(n);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var u = Dt(c.pendingLanes);
                  if (u !== 0) {
                    var s = c;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var d = 1 << 31 - fl(u);
                      s.entanglements[1] |= d, u &= ~d;
                    }
                    Bl(c), (fe & 6) === 0 && (Mi = ul() + 500, gn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Bt(c, 2), s !== null && tl(s, c, 2), Ci(), ps(c, 2);
            }
          if (c = gs(a), c === null && ns(
            e,
            l,
            a,
            ki,
            t
          ), c === n) break;
          n = c;
        }
        n !== null && a.stopPropagation();
      } else
        ns(
          e,
          l,
          a,
          null,
          t
        );
    }
  }
  function gs(e) {
    return e = bc(e), js(e);
  }
  var ki = null;
  function js(e) {
    if (ki = null, e = Ft(e), e !== null) {
      var l = M(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = X(l), e !== null) return e;
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
    return ki = e, null;
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
        switch (yh()) {
          case Ls:
            return 2;
          case Vs:
            return 8;
          case Hn:
          case ph:
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
  var bs = !1, Nt = null, At = null, Et = null, An = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), Tt = [], Cv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Go(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Et = null;
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
        return Nt = Tn(
          Nt,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return At = Tn(
          At,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return Et = Tn(
          Et,
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
  function wo(e) {
    var l = Ft(e.target);
    if (l !== null) {
      var t = M(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = X(t), l !== null) {
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
  function Ji(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = gs(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        jc = a, t.target.dispatchEvent(a), jc = null;
      } else
        return l = It(t), l !== null && Ho(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function Xo(e, l, t) {
    Ji(e) && t.delete(l);
  }
  function Uv() {
    bs = !1, Nt !== null && Ji(Nt) && (Nt = null), At !== null && Ji(At) && (At = null), Et !== null && Ji(Et) && (Et = null), An.forEach(Xo), En.forEach(Xo);
  }
  function $i(e, l) {
    e.blockedOn === l && (e.blockedOn = null, bs || (bs = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Uv
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
            if (js(a || t) === null)
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
    Nt !== null && $i(Nt, e), At !== null && $i(At, e), Et !== null && $i(Et, e), An.forEach(l), En.forEach(l);
    for (var t = 0; t < Tt.length; t++) {
      var a = Tt[t];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Tt.length && (t = Tt[0], t.blockedOn === null); )
      wo(t), t.blockedOn === null && Tt.shift();
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
            else if (js(n) !== null) continue;
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
  function Ss(e) {
    this._internalRoot = e;
  }
  Fi.prototype.render = Ss.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var t = l.current, a = yl();
    Ro(t, a, e, l, null, null);
  }, Fi.prototype.unmount = Ss.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      Ro(e.current, 2, null, e, null, null), Ci(), l[Wt] = null;
    }
  };
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = Fs();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Tt.length && l !== 0 && l < Tt[t].priority; t++) ;
      Tt.splice(t, 0, e), t === 0 && wo(e);
    }
  };
  var Lo = g.version;
  if (Lo !== "19.2.8")
    throw Error(
      r(
        527,
        Lo,
        "19.2.8"
      )
    );
  U.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = S(l), e = e !== null ? q(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Rv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ii.isDisabled && Ii.supportsFiber)
      try {
        Ha = Ii.inject(
          Rv
        ), sl = Ii;
      } catch {
      }
  }
  return On.createRoot = function(e, l) {
    if (!N(e)) throw Error(r(299));
    var t = !1, a = "", n = Wr, c = Fr, u = Ir;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError)), l = Do(
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
    ), e[Wt] = l.current, as(e), new Ss(l);
  }, On.hydrateRoot = function(e, l, t) {
    if (!N(e)) throw Error(r(299));
    var a = !1, n = "", c = Wr, u = Fr, s = Ir, d = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (d = t.formState)), l = Do(
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
    ), l.context = Uo(null), t = l.current, a = yl(), a = oc(a), n = ht(a), n.callback = null, mt(t, n, a), t = a, l.current.lanes = t, Ya(l, t), Bl(l), e[Wt] = l.current, as(e), new Fi(l);
  }, On.version = "19.2.8", On;
}
var eh;
function Lv() {
  if (eh) return Ns.exports;
  eh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (g) {
        console.error(g);
      }
  }
  return f(), Ns.exports = Zv(), Ns.exports;
}
var Vv = Lv();
const Kv = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sh = (...f) => f.filter((g, o, r) => !!g && g.trim() !== "" && r.indexOf(g) === o).join(" ").trim();
var kv = {
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
    size: g = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: N = "",
    children: M,
    iconNode: X,
    ...C
  }, O) => L.createElement(
    "svg",
    {
      ref: O,
      ...kv,
      width: g,
      height: g,
      stroke: f,
      strokeWidth: r ? Number(o) * 24 / Number(g) : o,
      className: sh("lucide", N),
      ...C
    },
    [
      ...X.map(([S, q]) => L.createElement(S, q)),
      ...Array.isArray(M) ? M : [M]
    ]
  )
);
const ee = (f, g) => {
  const o = L.forwardRef(
    ({ className: r, ...N }, M) => L.createElement(Jv, {
      ref: M,
      iconNode: g,
      className: sh(`lucide-${Kv(f)}`, r),
      ...N
    })
  );
  return o.displayName = `${f}`, o;
};
const Cn = ee("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Ul = ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Rs = ee("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const $v = ee("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const at = ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Un = ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Os = ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const qs = ee("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Hs = ee("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Ra = ee("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const ec = ee("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Cs = ee("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const Wv = ee("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const Bs = ee("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
const Ys = ee("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const tc = ee("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const Gs = ee("FileJson", [
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
const fh = ee("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const Fv = ee("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Rn = ee("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const Iv = ee("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const Pv = ee("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const Dn = ee("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const e1 = ee("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const l1 = ee("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const t1 = ee("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const lh = ee("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
const ac = ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const nt = ee("ShieldAlert", [
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
const ws = ee("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const a1 = ee("Sparkles", [
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
const nc = ee("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const n1 = ee("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const i1 = ee("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const Xs = ee("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const c1 = ee("WalletCards", [
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
const rh = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const lc = ee("Zap", [
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
}, dh = [nc, ac, lc, ws, Rs], u1 = [
  ["G1", "Commercial authority", "Binding supplier or commercial actions require an authorized human."],
  ["G2", "Data and model permission", "Released data flows and model routes must be explicitly permitted."],
  ["G3", "Evaluation sufficiency", "Acceptance needs segmented thresholds, severity, abstention and an authorized acceptor."],
  ["G4", "Severe cohort failure", "A known materially failing cohort must be blocked, excluded or safely routed."],
  ["G5", "Accountable ownership", "A material risk needs an owner who has authority to accept it."],
  ["G6", "Claim integrity", "Material value, accuracy, cost and readiness claims must follow the evidence."],
  ["G7", "Operational control", "Action-capable AI needs usable monitoring, incident ownership, containment and rollback."]
];
function al(...f) {
  return f.filter(Boolean).join(" ");
}
function th(f) {
  const g = new Date(f);
  return Number.isNaN(g.getTime()) ? f : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(g);
}
function s1(f, g) {
  return `ai-delivery-arena:seen-activity:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${g}`;
}
function f1(f, g, o, r) {
  return `ai-delivery-arena:draft:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${g}:${o}:${r}`;
}
function r1(f, g) {
  if (typeof window > "u") return;
  const o = f.user?.id ?? (f.local_mode ? "local" : "participant"), r = [
    `ai-delivery-arena:draft:${o}:${g}:`,
    `ai-delivery-arena:seen-activity:${o}:${g}`
  ];
  Array.from(
    { length: window.localStorage.length },
    (M, X) => window.localStorage.key(X)
  ).filter((M) => !!M).forEach((M) => {
    r.some((X) => M.startsWith(X)) && window.localStorage.removeItem(M);
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
function d1(f) {
  if (!f || typeof f != "object") return !1;
  const g = f;
  return (g.option_id === null || typeof g.option_id == "string") && typeof g.rationale == "string" && typeof g.assumptions == "string" && typeof g.owner == "string" && typeof g.acceptance_condition == "string" && typeof g.risk == "string" && Array.isArray(g.evidence_refs) && g.evidence_refs.every((o) => typeof o == "string") && typeof g.terminal_route == "string";
}
function ah(f, g) {
  const o = {
    draft: g,
    updatedAt: (/* @__PURE__ */ new Date(0)).toISOString(),
    synced: tt(g)
  };
  if (typeof window > "u") return o;
  try {
    const r = JSON.parse(window.localStorage.getItem(f) ?? "null");
    if (!r || typeof r != "object" || !d1(r.draft))
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
function Ms(f, g, o) {
  if (!(typeof window > "u"))
    try {
      const r = JSON.parse(window.localStorage.getItem(f) ?? "null"), N = {
        draft: g,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        synced: o !== void 0 ? o : typeof r?.synced == "string" ? r.synced : null
      };
      window.localStorage.setItem(f, JSON.stringify(N));
    } catch {
    }
}
function nh() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function ih(f) {
  if (typeof window > "u")
    return { signalCount: 0, evidenceIds: [] };
  try {
    const g = JSON.parse(window.localStorage.getItem(f) ?? "{}");
    return {
      signalCount: typeof g.signalCount == "number" && g.signalCount >= 0 ? g.signalCount : 0,
      evidenceIds: Array.isArray(g.evidenceIds) ? g.evidenceIds.filter((o) => typeof o == "string") : []
    };
  } catch {
    return { signalCount: 0, evidenceIds: [] };
  }
}
function o1(f, g) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(f, JSON.stringify(g));
    } catch {
    }
}
function ch(f, g) {
  const o = new Blob([JSON.stringify(g, null, 2)], {
    type: "application/json"
  }), r = URL.createObjectURL(o), N = document.createElement("a");
  N.href = r, N.download = f, document.body.appendChild(N), N.click(), N.remove(), URL.revokeObjectURL(r);
}
function h1(f) {
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
function Ke({
  children: f,
  variant: g = "primary",
  className: o,
  disabled: r,
  busy: N,
  type: M = "button",
  onClick: X
}) {
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      className: al("button", `button-${g}`, o),
      disabled: r || N,
      type: M,
      onClick: X,
      children: [
        N && /* @__PURE__ */ i.jsx("span", { className: "spinner", "aria-hidden": "true" }),
        f
      ]
    }
  );
}
function oh({
  data: f,
  emit: g,
  transparent: o = !1
}) {
  const [r, N] = L.useState(!1);
  return /* @__PURE__ */ i.jsxs("header", { className: al("product-header", o && "header-transparent"), children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "brand",
        type: "button",
        onClick: () => f.authenticated || f.local_mode ? g("navigate", { view: "centre" }) : window.scrollTo({ top: 0, behavior: "smooth" }),
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
            /* @__PURE__ */ i.jsx(fh, { size: 16 }),
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
              /* @__PURE__ */ i.jsx("span", { className: "account-avatar", children: /* @__PURE__ */ i.jsx(Xs, { size: 16 }) }),
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
          !f.local_mode && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => g("sign_out"), children: [
            /* @__PURE__ */ i.jsx(e1, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(l1, { size: 20 })
        }
      )
    ] })
  ] });
}
function m1({ notice: f }) {
  const [g, o] = L.useState(!!f);
  if (L.useEffect(() => {
    if (o(!!f), !f) return;
    const N = window.setTimeout(() => o(!1), 6e3);
    return () => window.clearTimeout(N);
  }, [f?.kind, f?.message]), !f || !g) return null;
  const r = f.kind === "error" ? Hs : qs;
  return /* @__PURE__ */ i.jsxs("div", { className: al("toast", `toast-${f.kind}`), role: "status", children: [
    /* @__PURE__ */ i.jsx(r, { size: 18 }),
    /* @__PURE__ */ i.jsx("span", { children: f.message }),
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => o(!1), "aria-label": "Dismiss", children: /* @__PURE__ */ i.jsx(rh, { size: 16 }) })
  ] });
}
function v1({ data: f, emit: g }) {
  const [o, r] = L.useState("signin"), [N, M] = L.useState(""), [X, C] = L.useState(""), [O, S] = L.useState(!1), [q, D] = L.useState(!1);
  L.useEffect(() => D(!1), [f.notice, f.authenticated]);
  const J = (ye) => {
    ye.preventDefault(), D(!0), g(o === "signin" ? "sign_in" : "sign_up", {
      email: N,
      password: X,
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
    /* @__PURE__ */ i.jsxs("form", { className: "auth-form", onSubmit: J, children: [
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx("span", { children: o === "signin" ? "Email" : "Work email" }),
        /* @__PURE__ */ i.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ i.jsx(Xs, { size: 17 }),
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
          /* @__PURE__ */ i.jsx(Iv, { size: 17 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "password",
              autoComplete: o === "signin" ? "current-password" : "new-password",
              value: X,
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
      /* @__PURE__ */ i.jsxs(Ke, { type: "submit", className: "button-full", busy: q, children: [
        o === "signin" ? "Continue" : "Create invited account",
        !q && /* @__PURE__ */ i.jsx(Ul, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ i.jsx(Dn, { size: 15 }),
      /* @__PURE__ */ i.jsx("span", { children: "Encrypted runs. No service-role key in the application." })
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Private canary" }),
    /* @__PURE__ */ i.jsx("h2", { children: "Canary access is closed" }),
    /* @__PURE__ */ i.jsx("p", { children: "Account access stays closed until invitation admission, participant feedback, and incident reporting are all configured. This prevents an unfinished canary from becoming an accidental public beta." }),
    /* @__PURE__ */ i.jsxs("div", { className: "auth-trust", children: [
      /* @__PURE__ */ i.jsx(Dn, { size: 15 }),
      /* @__PURE__ */ i.jsx("span", { children: "No participant access is available yet." })
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("aside", { className: "auth-panel", id: "access", children: [
    /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Local preview" }),
    /* @__PURE__ */ i.jsx("h2", { children: "Cloud access is not configured" }),
    /* @__PURE__ */ i.jsx("p", { children: "Add the Supabase and Arena secrets to enable private cloud accounts. The local edition remains available for development." }),
    f.canary?.allow_local_mode && /* @__PURE__ */ i.jsxs(Ke, { className: "button-full", onClick: () => g("open_local"), children: [
      "Open local edition ",
      /* @__PURE__ */ i.jsx(Ul, { size: 17 })
    ] })
  ] });
}
function y1({ data: f, emit: g }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "marketing-page", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "marketing-hero-wrap", children: [
      /* @__PURE__ */ i.jsx(oh, { data: f, emit: g, transparent: !0 }),
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
              /* @__PURE__ */ i.jsx(Ul, { size: 18 })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "a",
              {
                className: "button button-hero-ghost",
                href: f.links?.github,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ i.jsx(fh, { size: 17 }),
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
        /* @__PURE__ */ i.jsx(v1, { data: f, emit: g })
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
        /* @__PURE__ */ i.jsx(Ul, { className: "comparison-arrow", size: 28 }),
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
          icon: nc,
          title: "Understand",
          copy: "Enter a synthetic enterprise programme with a fixed mandate, incomplete evidence and explicit constraints."
        },
        {
          number: "02",
          icon: ac,
          title: "Investigate",
          copy: "Spend limited credits on the evidence that can materially improve your next decisions."
        },
        {
          number: "03",
          icon: tc,
          title: "Commit",
          copy: "Record the action, accountable owner, rationale, assumption, risk and measurable stop condition."
        },
        {
          number: "04",
          icon: Ys,
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
          /* @__PURE__ */ i.jsx(Bs, { size: 16 })
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
  emit: g,
  children: o,
  compact: r = !1
}) {
  return /* @__PURE__ */ i.jsxs("div", { className: al("product-page", r && "product-page-compact"), children: [
    /* @__PURE__ */ i.jsx(oh, { data: f, emit: g }),
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
function p1({ data: f, emit: g }) {
  const r = (f.centre ?? {}).runs ?? [], N = r.find((Q) => Q.status !== "completed"), M = r.filter((Q) => Q.status === "completed").length, [X, C] = L.useState(null), [O, S] = L.useState(""), [q, D] = L.useState(!1), J = L.useRef(null);
  L.useEffect(() => D(!1), [f.notice, f.screen]);
  const ye = (Q) => g("navigate", {
    view: Q.status === "completed" ? "debrief" : "decision",
    run_id: Q.run_id
  }), Ce = async (Q) => {
    const ze = Q.target.files?.[0];
    if (ze) {
      D(!0);
      try {
        const Re = JSON.parse(await ze.text());
        g("import_run", { document: Re });
      } catch {
        D(!1), window.alert("That file is not valid JSON.");
      } finally {
        Q.target.value = "";
      }
    }
  };
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: g, children: /* @__PURE__ */ i.jsxs("main", { className: "run-centre page-width", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "page-title-row", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Run centre" }),
        /* @__PURE__ */ i.jsx("h1", { children: "Your leadership evidence." }),
        /* @__PURE__ */ i.jsx("p", { children: "Continue an attempt, review a completed debrief or begin a clean run. Committed decisions remain immutable." })
      ] }),
      /* @__PURE__ */ i.jsxs(Ke, { onClick: () => g("open_briefing"), children: [
        "New attempt ",
        /* @__PURE__ */ i.jsx(Ul, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "summary-grid", children: [
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(Pv, { size: 19 }),
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
        /* @__PURE__ */ i.jsx(Rs, { size: 19 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: M }),
          /* @__PURE__ */ i.jsx("span", { children: "Debriefs ready" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("article", { children: [
        /* @__PURE__ */ i.jsx(Cs, { size: 19 }),
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
          N.attempt_kind === "practice_replay" && /* @__PURE__ */ i.jsx("span", { className: "attempt-kind-pill", children: "Practice replay" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Last saved ",
            th(N.updated_at)
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
        /* @__PURE__ */ i.jsxs(Ke, { onClick: () => ye(N), children: [
          "Continue at D",
          String(N.completed + 1).padStart(2, "0"),
          /* @__PURE__ */ i.jsx(Ul, { size: 17 })
        ] })
      ] })
    ] }) : /* @__PURE__ */ i.jsxs("section", { className: "first-run-banner", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Your first attempt" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ i.jsx("p", { children: "Five stages, 20 decisions and approximately 90 minutes." })
      ] }),
      /* @__PURE__ */ i.jsxs(Ke, { onClick: () => g("open_briefing"), children: [
        "Read the briefing ",
        /* @__PURE__ */ i.jsx(Ul, { size: 17 })
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
              ref: J,
              className: "visually-hidden",
              type: "file",
              accept: ".json,application/json",
              onChange: Ce
            }
          ),
          /* @__PURE__ */ i.jsxs(
            Ke,
            {
              variant: "secondary",
              busy: q,
              onClick: () => J.current?.click(),
              children: [
                /* @__PURE__ */ i.jsx(i1, { size: 16 }),
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
        r.map((Q) => /* @__PURE__ */ i.jsxs("article", { className: "run-table-row", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "run-name-cell", children: [
            /* @__PURE__ */ i.jsx("span", { className: al("run-icon", Q.status === "completed" && "run-icon-complete"), children: Q.status === "completed" ? /* @__PURE__ */ i.jsx(at, { size: 16 }) : /* @__PURE__ */ i.jsx(ec, { size: 16 }) }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              X === Q.run_id ? /* @__PURE__ */ i.jsxs(
                "form",
                {
                  className: "rename-form",
                  onSubmit: (ze) => {
                    ze.preventDefault(), g("rename_run", {
                      run_id: Q.run_id,
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
                        onChange: (ze) => S(ze.target.value)
                      }
                    ),
                    /* @__PURE__ */ i.jsx("button", { type: "submit", children: /* @__PURE__ */ i.jsx(at, { size: 15 }) }),
                    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => C(null), children: /* @__PURE__ */ i.jsx(rh, { size: 15 }) })
                  ]
                }
              ) : /* @__PURE__ */ i.jsx("strong", { children: Q.display_name }),
              /* @__PURE__ */ i.jsxs("small", { children: [
                Q.attempt_kind === "practice_replay" ? "Practice replay" : "First attempt",
                Q.source_run_id ? ` · source ${Q.source_run_id}` : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { className: al("status-pill", Q.status === "completed" ? "status-complete" : "status-progress"), children: Q.status === "completed" ? "Complete" : "In progress" }),
            /* @__PURE__ */ i.jsxs("small", { children: [
              Q.completed,
              "/",
              Q.total,
              " decisions"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("span", { children: th(Q.updated_at) }),
            /* @__PURE__ */ i.jsxs("small", { children: [
              "Revision ",
              Q.revision
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "run-row-actions", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Rename ${Q.display_name}`,
                onClick: () => {
                  C(Q.run_id), S(Q.display_name);
                },
                children: /* @__PURE__ */ i.jsx(t1, { size: 15 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "run-delete-action",
                type: "button",
                "aria-label": `Delete ${Q.display_name}`,
                onClick: () => {
                  window.confirm(
                    `Delete ${Q.display_name}? This removes the run and cannot be undone. Download any completed evidence first.`
                  ) && (r1(f, Q.run_id), g("delete_run", { run_id: Q.run_id }));
                },
                children: /* @__PURE__ */ i.jsx(n1, { size: 15 })
              }
            ),
            /* @__PURE__ */ i.jsxs(Ke, { variant: "secondary", onClick: () => ye(Q), children: [
              Q.status === "completed" ? "Open debrief" : "Resume",
              /* @__PURE__ */ i.jsx(Os, { size: 16 })
            ] })
          ] })
        ] }, Q.run_id))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "import-note", children: [
        /* @__PURE__ */ i.jsx(Rn, { size: 15 }),
        /* @__PURE__ */ i.jsx("span", { children: "Local JSON checkpoints are replay-verified before they enter your account." })
      ] })
    ] })
  ] }) });
}
function x1({ data: f, emit: g }) {
  const o = f.briefing ?? {}, r = o.scenario ?? {}, N = o.stages ?? [], [M, X] = L.useState(!1);
  return L.useEffect(() => X(!1), [f.screen, f.notice]), /* @__PURE__ */ i.jsx(qa, { data: f, emit: g, children: /* @__PURE__ */ i.jsxs("main", { className: "briefing-page page-width", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => g("navigate", { view: "centre" }),
        children: [
          /* @__PURE__ */ i.jsx(Cn, { size: 16 }),
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
        /* @__PURE__ */ i.jsx(ws, { size: 17 }),
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
          /* @__PURE__ */ i.jsx("div", { children: u1.map(([C, O, S]) => /* @__PURE__ */ i.jsxs("article", { children: [
            /* @__PURE__ */ i.jsx("span", { children: C }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: O }),
              /* @__PURE__ */ i.jsx("p", { children: S })
            ] })
          ] }, C)) })
        ] }),
        /* @__PURE__ */ i.jsx("h3", { children: "Programme stages" }),
        /* @__PURE__ */ i.jsx("div", { className: "briefing-stages", children: N.map((C, O) => {
          const S = dh[O] ?? Ra;
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
            /* @__PURE__ */ i.jsx(ac, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Investigate deliberately" }),
              "Evidence windows can close."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(tc, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Make the record complete" }),
              "Owner, rationale, assumption, risk and stop condition."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(Ys, { size: 17 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "No live coaching" }),
              "Scores and preferred paths stay concealed."
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx(Rs, { size: 17 }),
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
          Ke,
          {
            className: "button-full",
            busy: M,
            onClick: () => {
              X(!0), g("start_run");
            },
            children: [
              "Enter the Arena ",
              !M && /* @__PURE__ */ i.jsx(Ul, { size: 17 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function g1({ stages: f, run: g }) {
  const o = new Set((g.history ?? []).map((r) => r.decision_id));
  return /* @__PURE__ */ i.jsx("div", { className: "stage-rail", "aria-label": "Programme stages", children: f.map((r, N) => {
    const M = (r.decision_ids ?? []).every((O) => o.has(O)), X = r.id === g.stage?.id, C = dh[N] ?? Ra;
    return /* @__PURE__ */ i.jsxs("div", { className: al("stage-step", M && "done", X && "active"), children: [
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
function j1({ data: f, emit: g }) {
  const o = f.run ?? {}, r = o.current_decision ?? {}, N = `${o.run_id}:${r.id}`, M = L.useMemo(
    () => f1(
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
  ), X = L.useMemo(
    () => ah(M, f.draft ?? Pi),
    [N, M]
  ), [C, O] = L.useState(X.draft), [S, q] = L.useState("evidence"), [D, J] = L.useState("all"), [ye, Ce] = L.useState(""), [Q, ze] = L.useState(null), [Re, Be] = L.useState(
    X.synced === tt(X.draft) ? "Cloud synchronized" : "Recovered on this device"
  ), [De, ke] = L.useState([]), [pl, Le] = L.useState(0), F = L.useRef(tt(f.draft ?? Pi)), be = L.useRef(null), nl = L.useRef(N), Tl = L.useMemo(
    () => s1(f, String(o.run_id)),
    [f.local_mode, f.user?.id, o.run_id]
  ), [il, Ye] = L.useState(
    () => ih(Tl)
  );
  L.useEffect(() => {
    if (nl.current !== N) {
      nl.current = N;
      const j = f.draft ?? Pi, V = ah(M, j);
      O(V.draft), F.current = tt(j), be.current = null, Be(
        V.synced === tt(V.draft) ? "Cloud synchronized" : "Recovered on this device"
      ), ke([]), ze(null);
    }
  }, [N, f.draft, M]), L.useEffect(() => {
    Ye(ih(Tl));
  }, [Tl]), L.useEffect(() => {
    (f.notice || f.sync) && ze(null);
    const j = be.current;
    if (j && f.sync?.decision_id === r.id && f.sync?.sync_id === j.id) {
      F.current = j.serialized, Ms(M, C, j.serialized), be.current = null, Be(
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
    if (j === F.current) {
      Ms(M, C, j), Be("Cloud synchronized");
      return;
    }
    Ms(M, C), Be("Saved on this device");
    const V = window.setTimeout(() => {
      if (be.current?.serialized === j) return;
      const P = nh();
      be.current = { id: P, serialized: j }, Be("Syncing to cloud…"), g("save_draft", {
        run_id: o.run_id,
        decision_id: r.id,
        expected_revision: o.revision,
        sync_id: P,
        draft: C
      });
    }, 1e4);
    return () => window.clearTimeout(V);
  }, [
    C,
    M,
    r.id,
    g,
    o.revision,
    o.run_id,
    pl
  ]);
  const Ml = (o.evidence ?? []).filter(
    (j) => ["available", "verified"].includes(j.state)
  ), cl = o.operational_signals ?? [], Je = Ml.filter(
    (j) => j.request_week !== null && j.request_week !== void 0
  ), _ = new Set(Je.map((j) => j.id)), U = cl.slice(
    Math.min(il.signalCount, cl.length)
  ), G = Je.filter(
    (j) => !il.evidenceIds.includes(j.id)
  ), ce = (o.crises ?? []).find(
    (j) => j.linked_decision === r.id
  ), re = (o.evidence ?? []).filter((j) => {
    const V = `${j.id} ${j.title}`.toLowerCase().includes(ye.toLowerCase()), P = D === "all" || D === "available" && ["available", "verified"].includes(j.state) || D === "requested" && j.state === "requested" || D === "requestable" && j.state === "requestable";
    return V && P;
  }).sort(
    (j, V) => Number(_.has(V.id)) - Number(_.has(j.id))
  ), h = (j, V) => O((P) => ({ ...P, [j]: V })), E = () => ({
    run_id: o.run_id,
    decision_id: r.id,
    expected_revision: o.revision,
    draft: C
  }), R = (j, V = {}) => {
    if (j === "navigate" || j === "sign_out") {
      Be("Syncing before exit…"), g(j, { ...V, ...E() });
      return;
    }
    g(j, V);
  }, B = (j) => {
    const V = tt(C), P = nh();
    be.current = { id: P, serialized: V }, ze(`evidence:${j}`), Be("Syncing to cloud…"), g("request_evidence", {
      evidence_id: j,
      sync_id: P,
      ...E()
    });
  }, K = (j) => {
    q(j), j !== "record" && (j === "evidence" && (J("available"), Ce("")), Ye((V) => {
      const P = {
        signalCount: j === "signals" ? cl.length : V.signalCount,
        evidenceIds: j === "evidence" ? Array.from(
          /* @__PURE__ */ new Set([
            ...V.evidenceIds,
            ...Je.map((Ot) => Ot.id)
          ])
        ) : V.evidenceIds
      };
      return o1(Tl, P), P;
    }));
  }, I = () => {
    const j = h1(C);
    if (ke(j), j.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    ze("review"), g("review_decision", {
      ...E()
    });
  };
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: R, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "cockpit", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "cockpit-topbar", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => R("navigate", {
            view: "centre",
            run_id: o.run_id
          }),
          children: [
            /* @__PURE__ */ i.jsx(Cn, { size: 15 }),
            " Run centre"
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(g1, { stages: f.stages ?? [], run: o }),
      /* @__PURE__ */ i.jsxs("div", { className: "save-state", children: [
        /* @__PURE__ */ i.jsx(Cs, { size: 15 }),
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
        (U.length > 0 || G.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: "change-strip", "aria-live": "polite", children: [
          /* @__PURE__ */ i.jsx("span", { className: "change-strip-icon", children: /* @__PURE__ */ i.jsx(a1, { size: 18 }) }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Changes since your last decision" }),
            /* @__PURE__ */ i.jsx("p", { children: [
              U.length > 0 ? `${U.length} new operational ${U.length === 1 ? "signal" : "signals"}` : null,
              G.length > 0 ? `${G.length} evidence ${G.length === 1 ? "item has" : "items have"} arrived` : null
            ].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "change-strip-actions", children: [
            U.length > 0 && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => K("signals"), children: [
              "View signals ",
              /* @__PURE__ */ i.jsx(Os, { size: 15 })
            ] }),
            G.length > 0 && /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => K("evidence"), children: [
              "View evidence ",
              /* @__PURE__ */ i.jsx(Os, { size: 15 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { className: "situation-panel", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "panel-label", children: [
            /* @__PURE__ */ i.jsx(nc, { size: 15 }),
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
        ce && /* @__PURE__ */ i.jsxs("article", { className: "crisis-alert", children: [
          /* @__PURE__ */ i.jsx(nt, { size: 20 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Material event" }),
            /* @__PURE__ */ i.jsx("p", { children: ce.observation })
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
              className: al("option-card", C.option_id === j.id && "selected"),
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
          De.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "validation-summary", role: "alert", children: [
            /* @__PURE__ */ i.jsx(Hs, { size: 18 }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Complete the record before review" }),
              /* @__PURE__ */ i.jsx("ul", { children: De.map((j) => /* @__PURE__ */ i.jsx("li", { children: j }, j)) })
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
            Ml.length === 0 ? /* @__PURE__ */ i.jsx("p", { children: "No evidence is currently available to cite." }) : /* @__PURE__ */ i.jsx("div", { className: "citation-list", children: Ml.map((j) => {
              const V = C.evidence_refs.includes(j.id);
              return /* @__PURE__ */ i.jsxs("label", { className: V ? "selected" : "", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: V,
                    onChange: () => h(
                      "evidence_refs",
                      V ? C.evidence_refs.filter((P) => P !== j.id) : [...C.evidence_refs, j.id]
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
              /* @__PURE__ */ i.jsx(Cs, { size: 15 }),
              /* @__PURE__ */ i.jsx("span", { children: Re })
            ] }),
            /* @__PURE__ */ i.jsxs(Ke, { busy: Q === "review", onClick: I, children: [
              "Review decision ",
              !Q && /* @__PURE__ */ i.jsx(Ul, { size: 17 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("aside", { className: "context-panel", children: [
        /* @__PURE__ */ i.jsx("div", { className: "context-tabs", role: "tablist", children: [
          [
            "evidence",
            G.length > 0 ? `Evidence · ${G.length} arrived` : "Evidence",
            $v
          ],
          [
            "signals",
            U.length > 0 ? `Signals · ${U.length} new` : "Signals",
            lc
          ],
          ["record", "Record", Fv]
        ].map(([j, V, P]) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            className: S === j ? "active" : "",
            role: "tab",
            "aria-selected": S === j,
            onClick: () => K(j),
            children: [
              /* @__PURE__ */ i.jsx(P, { size: 15 }),
              " ",
              /* @__PURE__ */ i.jsx("span", { children: V })
            ]
          },
          j
        )) }),
        S === "evidence" && /* @__PURE__ */ i.jsxs("div", { className: "context-content evidence-desk", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "credit-card", children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx(c1, { size: 18 }),
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
              /* @__PURE__ */ i.jsx(ac, { size: 15 }),
              /* @__PURE__ */ i.jsx("input", { value: ye, onChange: (j) => Ce(j.target.value), placeholder: "Search evidence" })
            ] }),
            /* @__PURE__ */ i.jsxs("select", { value: D, onChange: (j) => J(j.target.value), children: [
              /* @__PURE__ */ i.jsx("option", { value: "all", children: "All states" }),
              /* @__PURE__ */ i.jsx("option", { value: "available", children: "Cite now" }),
              /* @__PURE__ */ i.jsx("option", { value: "requested", children: "Due later" }),
              /* @__PURE__ */ i.jsx("option", { value: "requestable", children: "Order for later" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "evidence-list", children: re.map((j) => /* @__PURE__ */ i.jsx(
            b1,
            {
              item: j,
              arrived: _.has(j.id),
              credits: o.credits?.remaining,
              busy: Q === `evidence:${j.id}`,
              onRequest: () => B(j.id)
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
          ce && /* @__PURE__ */ i.jsxs("div", { className: "context-crisis", children: [
            /* @__PURE__ */ i.jsx(nt, { size: 16 }),
            /* @__PURE__ */ i.jsx("p", { children: ce.observation })
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
            /* @__PURE__ */ i.jsx(Dn, { size: 14 }),
            " ",
            o.ledger?.entries,
            " ledger entries"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function b1({
  item: f,
  arrived: g,
  credits: o,
  busy: r,
  onRequest: N
}) {
  const [M, X] = L.useState(["available", "verified"].includes(f.state)), C = {
    available: "Cite now",
    verified: "Cite now",
    requested: f.arrival_week !== null && f.arrival_week !== void 0 ? `Due Week ${f.arrival_week}` : "Due later",
    requestable: "Order for later",
    unavailable: "Window closed"
  }, O = f.state === "requestable" && o >= f.cost;
  return /* @__PURE__ */ i.jsxs("article", { className: al("evidence-item", `evidence-${f.state}`, g && "evidence-arrived"), children: [
    /* @__PURE__ */ i.jsxs("button", { className: "evidence-summary", type: "button", onClick: () => X((S) => !S), children: [
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
        g ? /* @__PURE__ */ i.jsxs("span", { children: [
          "Arrived Week ",
          f.arrival_week
        ] }) : /* @__PURE__ */ i.jsxs("span", { children: [
          f.lead_time_weeks,
          " week lead"
        ] })
      ] }),
      O && /* @__PURE__ */ i.jsxs(Ke, { variant: "secondary", className: "button-full", busy: r, onClick: N, children: [
        "Order for later ",
        !r && /* @__PURE__ */ i.jsx(Ul, { size: 15 })
      ] }),
      f.state === "requestable" && !O && /* @__PURE__ */ i.jsx("small", { className: "insufficient-credit", children: "Insufficient investigation credits" })
    ] })
  ] });
}
function S1({ data: f, emit: g }) {
  const o = f.run ?? {}, r = o.current_decision ?? {}, N = f.draft ?? Pi, M = (r.options ?? []).find((D) => D.id === N.option_id), X = (o.evidence ?? []).filter((D) => N.evidence_refs.includes(D.id)), [C, O] = L.useState(!1), [S, q] = L.useState(!1);
  return L.useEffect(() => q(!1), [f.notice, f.screen]), /* @__PURE__ */ i.jsx(qa, { data: f, emit: g, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "review-page page-width-narrow", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => g("navigate", { view: "decision", run_id: o.run_id }),
        children: [
          /* @__PURE__ */ i.jsx(Cn, { size: 16 }),
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
          X.length ? /* @__PURE__ */ i.jsx("div", { className: "review-evidence", children: X.map((D) => /* @__PURE__ */ i.jsxs("span", { children: [
            D.id,
            " · ",
            D.title
          ] }, D.id)) }) : /* @__PURE__ */ i.jsx("p", { children: "None cited" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "commit-boundary", children: [
      /* @__PURE__ */ i.jsx(nt, { size: 22 }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Permanent commitment boundary" }),
        /* @__PURE__ */ i.jsx("p", { children: "After commitment, this decision cannot be edited, replaced or silently rewritten." }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: C, onChange: (D) => O(D.target.checked) }),
          /* @__PURE__ */ i.jsx("span", { children: "I understand this decision becomes permanent." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "review-actions", children: [
      /* @__PURE__ */ i.jsxs(Ke, { variant: "secondary", onClick: () => g("navigate", { view: "decision", run_id: o.run_id }), children: [
        /* @__PURE__ */ i.jsx(Cn, { size: 16 }),
        " Back to edit"
      ] }),
      /* @__PURE__ */ i.jsxs(
        Ke,
        {
          disabled: !C,
          busy: S,
          onClick: () => {
            q(!0), g("commit_decision", { run_id: o.run_id, confirmed: !0 });
          },
          children: [
            /* @__PURE__ */ i.jsx(Dn, { size: 16 }),
            " Commit permanently"
          ]
        }
      )
    ] })
  ] }) });
}
function _1({ data: f, emit: g }) {
  const o = f.consequence ?? {}, r = f.run ?? {}, [N, M] = L.useState(!1);
  L.useEffect(() => M(!1), [f.notice, f.screen]);
  const X = (o.signals ?? []).length || (o.crises ?? []).length || (o.evidence_arrived ?? []).length;
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: g, compact: !0, children: /* @__PURE__ */ i.jsxs("main", { className: "consequence-page page-width-narrow", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "commit-success", children: [
      /* @__PURE__ */ i.jsx("span", { className: "success-ring", children: /* @__PURE__ */ i.jsx(at, { size: 28 }) }),
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Decision recorded" }),
      /* @__PURE__ */ i.jsxs("h1", { children: [
        o.decision_id,
        " is now permanent."
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: o.choice }),
      /* @__PURE__ */ i.jsxs("div", { className: "ledger-confirmation", children: [
        /* @__PURE__ */ i.jsx(Dn, { size: 14 }),
        " Added to immutable run ledger · revision ",
        r.revision
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "observable-panel", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-title", children: [
        /* @__PURE__ */ i.jsx("span", { className: "step-number", children: /* @__PURE__ */ i.jsx(Ys, { size: 16 }) }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("h2", { children: "Observable consequence" }),
          /* @__PURE__ */ i.jsx("p", { children: "Only legitimate operational signals are shown during a first attempt." })
        ] })
      ] }),
      !X && /* @__PURE__ */ i.jsxs("article", { className: "neutral-observation", children: [
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
          /* @__PURE__ */ i.jsx(nt, { size: 18 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("small", { children: "Material event" }),
            /* @__PURE__ */ i.jsx("p", { children: C.observation })
          ] })
        ] }, C.id)),
        (o.evidence_arrived ?? []).map((C) => /* @__PURE__ */ i.jsxs("article", { className: "observation evidence-observation", children: [
          /* @__PURE__ */ i.jsx(tc, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(ws, { size: 18 }),
      /* @__PURE__ */ i.jsx("p", { children: "No score, critical-gate outcome or preferred-path coaching is exposed during a first attempt." })
    ] }),
    /* @__PURE__ */ i.jsxs(
      Ke,
      {
        className: "button-full consequence-next",
        busy: N,
        onClick: () => {
          M(!0), g("continue_consequence", { run_id: r.run_id });
        },
        children: [
          o.completed ? "Open executive debrief" : `Continue to ${o.next_decision}`,
          !N && /* @__PURE__ */ i.jsx(Ul, { size: 17 })
        ]
      }
    )
  ] }) });
}
function z1({ data: f, emit: g }) {
  const o = f.report ?? {}, r = f.run ?? {}, N = o.outcome ?? {}, [M, X] = L.useState("summary"), C = (o.gates ?? []).filter((q) => q.status === "fail"), O = (o.gates ?? []).filter((q) => q.status === "unresolved"), S = N.gate_standing === "blocked" ? "Blocked" : N.gate_standing === "review_required" ? "Review required" : "Cleared";
  return /* @__PURE__ */ i.jsx(qa, { data: f, emit: g, children: /* @__PURE__ */ i.jsxs("main", { className: "debrief-page", children: [
    /* @__PURE__ */ i.jsx("section", { className: "debrief-hero", children: /* @__PURE__ */ i.jsxs("div", { className: "page-width debrief-hero-inner", children: [
      /* @__PURE__ */ i.jsxs("button", { className: "text-back text-back-light", type: "button", onClick: () => g("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ i.jsx(Cn, { size: 16 }),
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
      ["development", "Development plan"],
      ["timeline", "Decision timeline"]
    ].map(([q, D]) => /* @__PURE__ */ i.jsx("button", { className: M === q ? "active" : "", type: "button", onClick: () => X(q), children: D }, q)) }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "debrief-content page-width", children: [
      M === "summary" && /* @__PURE__ */ i.jsx(N1, { report: o }),
      M === "gates" && /* @__PURE__ */ i.jsx(A1, { gates: o.gates ?? [] }),
      M === "scorecard" && /* @__PURE__ */ i.jsx(E1, { report: o }),
      M === "development" && /* @__PURE__ */ i.jsx(
        T1,
        {
          report: o,
          run: r,
          runContext: f.run_context ?? { attempt_kind: "first_attempt" },
          comparison: f.comparison,
          emit: g
        }
      ),
      M === "timeline" && /* @__PURE__ */ i.jsx(M1, { timeline: o.timeline ?? [] })
    ] }),
    /* @__PURE__ */ i.jsx("section", { className: "export-band", children: /* @__PURE__ */ i.jsxs("div", { className: "page-width export-inner", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow eyebrow-light", children: "Portable evidence" }),
        /* @__PURE__ */ i.jsx("h2", { children: "Take the complete record with you." }),
        /* @__PURE__ */ i.jsx("p", { children: "Download the executive report or the replay-verifiable completed run." })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs(Ke, { variant: "secondary", onClick: () => ch(`${r.run_id}-debrief.json`, o), children: [
          /* @__PURE__ */ i.jsx(Wv, { size: 16 }),
          " Evidence pack"
        ] }),
        /* @__PURE__ */ i.jsxs(
          Ke,
          {
            disabled: !f.completed_run_document,
            onClick: () => ch(`${r.run_id}.json`, f.completed_run_document),
            children: [
              /* @__PURE__ */ i.jsx(Gs, { size: 16 }),
              " Completed run"
            ]
          }
        ),
        f.links?.feedback && /* @__PURE__ */ i.jsxs("a", { className: "button button-light", href: f.links.feedback, target: "_blank", rel: "noreferrer", children: [
          "Share canary feedback ",
          /* @__PURE__ */ i.jsx(Bs, { size: 16 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "page-width calibration-notice", children: [
      /* @__PURE__ */ i.jsx(Rn, { size: 17 }),
      /* @__PURE__ */ i.jsx("p", { children: o.notice })
    ] })
  ] }) });
}
function N1({ report: f }) {
  const g = f.outcome ?? {}, o = f.assessment_contract ?? {};
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
          g.overall_cap != null && /* @__PURE__ */ i.jsxs("small", { children: [
            "Overall score capped at ",
            g.overall_cap,
            " by a failed critical gate."
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Simulated programme" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            g.program_health_average,
            " / 100"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: o.program_state })
        ] }),
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("span", { children: "Release controls" }),
          /* @__PURE__ */ i.jsx("strong", { children: g.gate_standing === "blocked" ? "Blocked" : g.gate_standing === "review_required" ? "Review" : "Cleared" }),
          /* @__PURE__ */ i.jsx("p", { children: o.critical_gates })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "assessment-disclosure", children: [
        /* @__PURE__ */ i.jsx(nt, { size: 16 }),
        o.free_text_boundary
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "judgment-columns", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ i.jsx(qs, { size: 19 }),
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
          /* @__PURE__ */ i.jsx(nc, { size: 19 }),
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
        /* @__PURE__ */ i.jsx(Xs, { size: 19 }),
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
function A1({ gates: f }) {
  const g = f.reduce((o, r) => (o[r.status] = (o[r.status] ?? 0) + 1, o), {});
  return /* @__PURE__ */ i.jsxs("div", { className: "gate-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Non-compensable controls" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Critical gates" }),
      /* @__PURE__ */ i.jsx("p", { children: "A failed critical gate cannot be offset by strength elsewhere. Unresolved is not a pass." }),
      /* @__PURE__ */ i.jsxs("div", { className: "gate-counts", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          g.pass ?? 0,
          " passed"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          g.fail ?? 0,
          " failed"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          g.unresolved ?? 0,
          " unresolved"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "gate-grid", children: f.map((o) => {
      const r = o.status === "pass" ? qs : o.status === "unresolved" ? nt : o.status === "not_applicable" ? Ra : Hs, N = (o.basis_decisions ?? []).length > 0 ? o.basis_decisions : o.relevant_decisions;
      return /* @__PURE__ */ i.jsxs("article", { className: al("gate-card", `gate-${o.status.replace("_", "-")}`), children: [
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
function E1({ report: f }) {
  const g = f.dimensions ?? [], [o, r] = L.useState(g[0]?.id ?? null);
  return /* @__PURE__ */ i.jsxs("div", { className: "scorecard-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Seven dimensions · 28 criteria" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Competency scorecard" }),
      /* @__PURE__ */ i.jsx("p", { children: "Scores reflect selected actions, normalized evidence, chronology, corrections and response completeness." }),
      f.overall_cap != null && /* @__PURE__ */ i.jsxs("div", { className: "score-cap-callout", children: [
        /* @__PURE__ */ i.jsx(nt, { size: 18 }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "The criterion-weighted score was ",
          f.raw_overall,
          ". A critical gate capped the reported result at ",
          f.overall_cap,
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "dimension-list", children: g.map((N) => /* @__PURE__ */ i.jsxs("article", { className: "dimension-card", children: [
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
function T1({
  report: f,
  run: g,
  runContext: o,
  comparison: r,
  emit: N
}) {
  const M = r?.source_learning_outcome ?? f.learning_outcome ?? {}, X = r?.source_development_actions ?? f.development_actions ?? [], C = r?.actions ?? [], O = Object.fromEntries(
    C.map((q) => [q.id, q])
  ), S = o.attempt_kind === "practice_replay";
  return /* @__PURE__ */ i.jsxs("div", { className: "development-view", children: [
    /* @__PURE__ */ i.jsxs("section", { className: "learning-hero", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Primary learning" }),
        /* @__PURE__ */ i.jsx("h2", { children: M.primary_learning }),
        /* @__PURE__ */ i.jsx("p", { children: M.closure_standard })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "learning-status", children: [
        /* @__PURE__ */ i.jsx("span", { children: "Development status" }),
        /* @__PURE__ */ i.jsx("strong", { children: r?.practice_status === "corrected" ? "Practice corrected" : X.length ? "Diagnosed" : "Practice ready" }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          "Transfer ",
          r?.transfer_status === "verified" ? "verified" : "not yet verified"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("section", { className: "closure-path", "aria-label": "Gap closure path", children: (M.stages ?? []).map((q, D) => {
      let J = q.status;
      return r && (D <= 1 && (J = "complete"), D === 2 && (J = r.practice_status === "corrected" ? "complete" : "next"), D === 3 && (J = "locked")), /* @__PURE__ */ i.jsxs("article", { className: al("closure-stage", `closure-${J}`), children: [
        /* @__PURE__ */ i.jsx("span", { children: D + 1 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: q.label }),
          /* @__PURE__ */ i.jsx("small", { children: J === "complete" ? "Complete" : J === "next" ? "Next" : "Not verified" })
        ] })
      ] }, q.id);
    }) }),
    /* @__PURE__ */ i.jsxs("p", { className: "artifact-boundary", children: [
      /* @__PURE__ */ i.jsx(nt, { size: 16 }),
      M.artifact_boundary
    ] }),
    r && /* @__PURE__ */ i.jsxs("section", { className: al("replay-comparison", r.practice_status === "corrected" && "replay-corrected"), children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx(lh, { size: 20 }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Corrective replay result" }),
          /* @__PURE__ */ i.jsxs("h2", { children: [
            r.corrected_actions,
            " of ",
            r.total_actions,
            " actions practice-corrected"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("dl", { children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("dt", { children: "Competency change" }),
          /* @__PURE__ */ i.jsxs("dd", { children: [
            r.score_change > 0 ? "+" : "",
            r.score_change,
            " points"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("dt", { children: "Gate standing" }),
          /* @__PURE__ */ i.jsxs("dd", { children: [
            r.gate_standing_before,
            " → ",
            r.gate_standing_after
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("dt", { children: "Transfer" }),
          /* @__PURE__ */ i.jsx("dd", { children: "Not verified" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: r.transfer_note })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "development-actions", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "From diagnosis to observable proof" }),
        /* @__PURE__ */ i.jsxs("h2", { children: [
          X.length,
          " corrective assignments"
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: "Each assignment identifies the control and artefact required before the decision is tested again." })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "development-action-list", children: X.map((q) => {
        const D = O[q.id], J = D?.status ?? q.status;
        return /* @__PURE__ */ i.jsxs("article", { className: al("development-action-card", `development-${q.severity}`), children: [
          /* @__PURE__ */ i.jsxs("header", { children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsxs("span", { children: [
                "Priority ",
                q.priority
              ] }),
              /* @__PURE__ */ i.jsx("strong", { children: q.id })
            ] }),
            /* @__PURE__ */ i.jsx("span", { className: al("development-status", J === "practice_corrected" && "development-status-corrected"), children: J === "practice_corrected" ? "Practice corrected" : J === "still_open" ? "Still open" : q.severity })
          ] }),
          /* @__PURE__ */ i.jsx("h3", { children: q.title }),
          /* @__PURE__ */ i.jsx("p", { className: "action-diagnosis", children: q.diagnosis }),
          /* @__PURE__ */ i.jsxs("dl", { children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Pattern to interrupt" }),
              /* @__PURE__ */ i.jsx("dd", { children: q.failure_pattern })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Corrective control" }),
              /* @__PURE__ */ i.jsx("dd", { children: q.corrective_control })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Artefact to build" }),
              /* @__PURE__ */ i.jsxs("dd", { children: [
                /* @__PURE__ */ i.jsx(tc, { size: 15 }),
                q.required_artifact
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Replay assignment" }),
              /* @__PURE__ */ i.jsx("dd", { children: q.practice_assignment })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Proof required" }),
              /* @__PURE__ */ i.jsx("dd", { children: q.closure_test })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("footer", { children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Source: ",
              (q.source_decisions ?? []).join(", ") || "Assessment evidence"
            ] }),
            D && /* @__PURE__ */ i.jsx("strong", { children: D.evidence })
          ] })
        ] }, q.id);
      }) })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "development-next-step", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Next evidence boundary" }),
        /* @__PURE__ */ i.jsx("h2", { children: S ? "Carry the corrected controls into the next transformation." : "Test the controls without changing the first attempt." }),
        /* @__PURE__ */ i.jsx("p", { children: S ? "A replay shows whether you can correct the same situation after feedback. The next scenario must test whether the judgment transfers when the facts and pressure pattern change." : "The replay uses the same scenario and remains uncoached. It creates a separate record and never replaces this benchmark result." })
      ] }),
      !S && /* @__PURE__ */ i.jsxs(Ke, { onClick: () => N("start_replay", { source_run_id: g.run_id }), children: [
        "Start corrective replay ",
        /* @__PURE__ */ i.jsx(lh, { size: 16 })
      ] })
    ] })
  ] });
}
function M1({ timeline: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "timeline-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ i.jsx("span", { className: "eyebrow", children: "Chronological evidence" }),
      /* @__PURE__ */ i.jsx("h2", { children: "Decision timeline" }),
      /* @__PURE__ */ i.jsx("p", { children: "The first-attempt record exactly as it was committed." })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "timeline-list", children: f.map((g) => /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("span", { children: g.decision_id }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: g.title }),
          /* @__PURE__ */ i.jsx("small", { children: g.choice })
        ] }),
        /* @__PURE__ */ i.jsx(Un, { size: 18 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "timeline-detail", children: [
        /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ i.jsx("p", { children: g.rationale })
        ] }),
        (g.signals ?? []).length > 0 && /* @__PURE__ */ i.jsxs("article", { children: [
          /* @__PURE__ */ i.jsx("small", { children: "Observable signals" }),
          /* @__PURE__ */ i.jsx("p", { children: g.signals.join(" · ") })
        ] }),
        (g.crises ?? []).length > 0 && /* @__PURE__ */ i.jsxs("article", { className: "timeline-crisis", children: [
          /* @__PURE__ */ i.jsx("small", { children: "Material events" }),
          /* @__PURE__ */ i.jsx("p", { children: g.crises.join(" · ") })
        ] })
      ] })
    ] }, g.decision_id)) })
  ] });
}
function O1({ data: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "fatal-page", children: [
    /* @__PURE__ */ i.jsx("span", { className: "brand-mark", children: "A" }),
    /* @__PURE__ */ i.jsx(nt, { size: 30 }),
    /* @__PURE__ */ i.jsx("h1", { children: f.fatal?.title ?? "The Arena could not start" }),
    /* @__PURE__ */ i.jsx("p", { children: f.fatal?.message }),
    /* @__PURE__ */ i.jsxs("a", { className: "button button-primary", href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
      "Open repository ",
      /* @__PURE__ */ i.jsx(Bs, { size: 16 })
    ] })
  ] });
}
function C1({ data: f, emit: g }) {
  const o = f.screen, r = `${o}:${f.run?.run_id ?? ""}:${f.run?.current_decision?.id ?? ""}`;
  return L.useEffect(() => {
    const N = document.querySelector(
      '[data-testid="stMain"]'
    );
    N && (N.scrollTop = 0), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
  }, [r]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    o === "marketing" && /* @__PURE__ */ i.jsx(y1, { data: f, emit: g }),
    o === "centre" && /* @__PURE__ */ i.jsx(p1, { data: f, emit: g }),
    o === "briefing" && /* @__PURE__ */ i.jsx(x1, { data: f, emit: g }),
    o === "decision" && /* @__PURE__ */ i.jsx(j1, { data: f, emit: g }),
    o === "review" && /* @__PURE__ */ i.jsx(S1, { data: f, emit: g }),
    o === "consequence" && /* @__PURE__ */ i.jsx(_1, { data: f, emit: g }),
    o === "debrief" && /* @__PURE__ */ i.jsx(z1, { data: f, emit: g }),
    o === "fatal" && /* @__PURE__ */ i.jsx(O1, { data: f }),
    /* @__PURE__ */ i.jsx(m1, { notice: f.notice })
  ] });
}
const uh = /* @__PURE__ */ new WeakMap(), D1 = (f) => {
  const { data: g, parentElement: o, setTriggerValue: r } = f, N = o.querySelector(".arena-react-root");
  if (!N)
    throw new Error("AI Delivery Arena React root was not found.");
  let M = uh.get(o);
  M || (M = Vv.createRoot(N), uh.set(o, M)), M.render(
    /* @__PURE__ */ i.jsx(L.StrictMode, { children: /* @__PURE__ */ i.jsx(
      C1,
      {
        data: g,
        emit: (X, C = {}) => {
          r("event", { type: X, payload: C });
        }
      }
    ) })
  );
};
export {
  D1 as default
};
