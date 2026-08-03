var zs = { exports: {} }, En = {};
var Vo;
function Hv() {
  if (Vo) return En;
  Vo = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.fragment");
  function v(r, T, R) {
    var V = null;
    if (R !== void 0 && (V = "" + R), T.key !== void 0 && (V = "" + T.key), "key" in T) {
      R = {};
      for (var O in T)
        O !== "key" && (R[O] = T[O]);
    } else R = T;
    return T = R.ref, {
      $$typeof: f,
      type: r,
      key: V,
      ref: T !== void 0 ? T : null,
      props: R
    };
  }
  return En.Fragment = y, En.jsx = v, En.jsxs = v, En;
}
var wo;
function qv() {
  return wo || (wo = 1, zs.exports = Hv()), zs.exports;
}
var u = qv(), _s = { exports: {} }, K = {};
var Ko;
function Bv() {
  if (Ko) return K;
  Ko = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), ue = Symbol.iterator;
  function ye(o) {
    return o === null || typeof o != "object" ? null : (o = ue && o[ue] || o["@@iterator"], typeof o == "function" ? o : null);
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
  }, Z = Object.assign, _e = {};
  function Re(o, A, C) {
    this.props = o, this.context = A, this.refs = _e, this.updater = C || De;
  }
  Re.prototype.isReactComponent = {}, Re.prototype.setState = function(o, A) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, A, "setState");
  }, Re.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function Be() {
  }
  Be.prototype = Re.prototype;
  function Ce(o, A, C) {
    this.props = o, this.context = A, this.refs = _e, this.updater = C || De;
  }
  var Ke = Ce.prototype = new Be();
  Ke.constructor = Ce, Z(Ke, Re.prototype), Ke.isPureReactComponent = !0;
  var yl = Array.isArray;
  function Ve() {
  }
  var W = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function al(o, A, C) {
    var q = C.ref;
    return {
      $$typeof: f,
      type: o,
      key: A,
      ref: q !== void 0 ? q : null,
      props: C
    };
  }
  function El(o, A) {
    return al(o.type, A, o.props);
  }
  function nl(o) {
    return typeof o == "object" && o !== null && o.$$typeof === f;
  }
  function Ye(o) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(C) {
      return A[C];
    });
  }
  var Tl = /\/+/g;
  function il(o, A) {
    return typeof o == "object" && o !== null && o.key != null ? Ye("" + o.key) : A.toString(36);
  }
  function Je(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Ve, Ve) : (o.status = "pending", o.then(
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
  function S(o, A, C, q, w) {
    var F = typeof o;
    (F === "undefined" || F === "boolean") && (o = null);
    var j = !1;
    if (o === null) j = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case f:
            case y:
              j = !0;
              break;
            case J:
              return j = o._init, S(
                j(o._payload),
                A,
                C,
                q,
                w
              );
          }
      }
    if (j)
      return w = w(o), j = q === "" ? "." + il(o, 0) : q, yl(w) ? (C = "", j != null && (C = j.replace(Tl, "$&/") + "/"), S(w, A, C, "", function(Mt) {
        return Mt;
      })) : w != null && (nl(w) && (w = El(
        w,
        C + (w.key == null || o && o.key === w.key ? "" : ("" + w.key).replace(
          Tl,
          "$&/"
        ) + "/") + j
      )), A.push(w)), 1;
    j = 0;
    var L = q === "" ? "." : q + ":";
    if (yl(o))
      for (var I = 0; I < o.length; I++)
        q = o[I], F = L + il(q, I), j += S(
          q,
          A,
          C,
          F,
          w
        );
    else if (I = ye(o), typeof I == "function")
      for (o = I.call(o), I = 0; !(q = o.next()).done; )
        q = q.value, F = L + il(q, I++), j += S(
          q,
          A,
          C,
          F,
          w
        );
    else if (F === "object") {
      if (typeof o.then == "function")
        return S(
          Je(o),
          A,
          C,
          q,
          w
        );
      throw A = String(o), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function D(o, A, C) {
    if (o == null) return o;
    var q = [], w = 0;
    return S(o, q, "", "", function(F) {
      return A.call(C, F, w++);
    }), q;
  }
  function Y(o) {
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
  var ie = typeof reportError == "function" ? reportError : function(o) {
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
  }, re = {
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
      if (!nl(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return K.Activity = U, K.Children = re, K.Component = Re, K.Fragment = v, K.Profiler = T, K.PureComponent = Ce, K.StrictMode = r, K.Suspense = M, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return W.H.useMemoCache(o);
    }
  }, K.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(o, A, C) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var q = Z({}, o.props), w = o.key;
    if (A != null)
      for (F in A.key !== void 0 && (w = "" + A.key), A)
        !be.call(A, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && A.ref === void 0 || (q[F] = A[F]);
    var F = arguments.length - 2;
    if (F === 1) q.children = C;
    else if (1 < F) {
      for (var j = Array(F), L = 0; L < F; L++)
        j[L] = arguments[L + 2];
      q.children = j;
    }
    return al(o.type, w, q);
  }, K.createContext = function(o) {
    return o = {
      $$typeof: V,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: R,
      _context: o
    }, o;
  }, K.createElement = function(o, A, C) {
    var q, w = {}, F = null;
    if (A != null)
      for (q in A.key !== void 0 && (F = "" + A.key), A)
        be.call(A, q) && q !== "key" && q !== "__self" && q !== "__source" && (w[q] = A[q]);
    var j = arguments.length - 2;
    if (j === 1) w.children = C;
    else if (1 < j) {
      for (var L = Array(j), I = 0; I < j; I++)
        L[I] = arguments[I + 2];
      w.children = L;
    }
    if (o && o.defaultProps)
      for (q in j = o.defaultProps, j)
        w[q] === void 0 && (w[q] = j[q]);
    return al(o, F, w);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(o) {
    return { $$typeof: O, render: o };
  }, K.isValidElement = nl, K.lazy = function(o) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: o },
      _init: Y
    };
  }, K.memo = function(o, A) {
    return {
      $$typeof: _,
      type: o,
      compare: A === void 0 ? null : A
    };
  }, K.startTransition = function(o) {
    var A = W.T, C = {};
    W.T = C;
    try {
      var q = o(), w = W.S;
      w !== null && w(C, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(Ve, ie);
    } catch (F) {
      ie(F);
    } finally {
      A !== null && C.types !== null && (A.types = C.types), W.T = A;
    }
  }, K.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, K.use = function(o) {
    return W.H.use(o);
  }, K.useActionState = function(o, A, C) {
    return W.H.useActionState(o, A, C);
  }, K.useCallback = function(o, A) {
    return W.H.useCallback(o, A);
  }, K.useContext = function(o) {
    return W.H.useContext(o);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(o, A) {
    return W.H.useDeferredValue(o, A);
  }, K.useEffect = function(o, A) {
    return W.H.useEffect(o, A);
  }, K.useEffectEvent = function(o) {
    return W.H.useEffectEvent(o);
  }, K.useId = function() {
    return W.H.useId();
  }, K.useImperativeHandle = function(o, A, C) {
    return W.H.useImperativeHandle(o, A, C);
  }, K.useInsertionEffect = function(o, A) {
    return W.H.useInsertionEffect(o, A);
  }, K.useLayoutEffect = function(o, A) {
    return W.H.useLayoutEffect(o, A);
  }, K.useMemo = function(o, A) {
    return W.H.useMemo(o, A);
  }, K.useOptimistic = function(o, A) {
    return W.H.useOptimistic(o, A);
  }, K.useReducer = function(o, A, C) {
    return W.H.useReducer(o, A, C);
  }, K.useRef = function(o) {
    return W.H.useRef(o);
  }, K.useState = function(o) {
    return W.H.useState(o);
  }, K.useSyncExternalStore = function(o, A, C) {
    return W.H.useSyncExternalStore(
      o,
      A,
      C
    );
  }, K.useTransition = function() {
    return W.H.useTransition();
  }, K.version = "19.2.8", K;
}
var Jo;
function Us() {
  return Jo || (Jo = 1, _s.exports = Bv()), _s.exports;
}
var Q = Us(), Ns = { exports: {} }, Tn = {}, As = { exports: {} }, Es = {};
var ko;
function Yv() {
  return ko || (ko = 1, (function(f) {
    function y(S, D) {
      var Y = S.length;
      S.push(D);
      e: for (; 0 < Y; ) {
        var ie = Y - 1 >>> 1, re = S[ie];
        if (0 < T(re, D))
          S[ie] = D, S[Y] = re, Y = ie;
        else break e;
      }
    }
    function v(S) {
      return S.length === 0 ? null : S[0];
    }
    function r(S) {
      if (S.length === 0) return null;
      var D = S[0], Y = S.pop();
      if (Y !== D) {
        S[0] = Y;
        e: for (var ie = 0, re = S.length, o = re >>> 1; ie < o; ) {
          var A = 2 * (ie + 1) - 1, C = S[A], q = A + 1, w = S[q];
          if (0 > T(C, Y))
            q < re && 0 > T(w, C) ? (S[ie] = w, S[q] = Y, ie = q) : (S[ie] = C, S[A] = Y, ie = A);
          else if (q < re && 0 > T(w, Y))
            S[ie] = w, S[q] = Y, ie = q;
          else break e;
        }
      }
      return D;
    }
    function T(S, D) {
      var Y = S.sortIndex - D.sortIndex;
      return Y !== 0 ? Y : S.id - D.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      f.unstable_now = function() {
        return R.now();
      };
    } else {
      var V = Date, O = V.now();
      f.unstable_now = function() {
        return V.now() - O;
      };
    }
    var M = [], _ = [], J = 1, U = null, ue = 3, ye = !1, De = !1, Z = !1, _e = !1, Re = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
    function Ke(S) {
      for (var D = v(_); D !== null; ) {
        if (D.callback === null) r(_);
        else if (D.startTime <= S)
          r(_), D.sortIndex = D.expirationTime, y(M, D);
        else break;
        D = v(_);
      }
    }
    function yl(S) {
      if (Z = !1, Ke(S), !De)
        if (v(M) !== null)
          De = !0, Ve || (Ve = !0, Ye());
        else {
          var D = v(_);
          D !== null && Je(yl, D.startTime - S);
        }
    }
    var Ve = !1, W = -1, be = 5, al = -1;
    function El() {
      return _e ? !0 : !(f.unstable_now() - al < be);
    }
    function nl() {
      if (_e = !1, Ve) {
        var S = f.unstable_now();
        al = S;
        var D = !0;
        try {
          e: {
            De = !1, Z && (Z = !1, Be(W), W = -1), ye = !0;
            var Y = ue;
            try {
              l: {
                for (Ke(S), U = v(M); U !== null && !(U.expirationTime > S && El()); ) {
                  var ie = U.callback;
                  if (typeof ie == "function") {
                    U.callback = null, ue = U.priorityLevel;
                    var re = ie(
                      U.expirationTime <= S
                    );
                    if (S = f.unstable_now(), typeof re == "function") {
                      U.callback = re, Ke(S), D = !0;
                      break l;
                    }
                    U === v(M) && r(M), Ke(S);
                  } else r(M);
                  U = v(M);
                }
                if (U !== null) D = !0;
                else {
                  var o = v(_);
                  o !== null && Je(
                    yl,
                    o.startTime - S
                  ), D = !1;
                }
              }
              break e;
            } finally {
              U = null, ue = Y, ye = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Ye() : Ve = !1;
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
    function Je(S, D) {
      W = Re(function() {
        S(f.unstable_now());
      }, D);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, f.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : be = 0 < S ? Math.floor(1e3 / S) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return ue;
    }, f.unstable_next = function(S) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = ue;
      }
      var Y = ue;
      ue = D;
      try {
        return S();
      } finally {
        ue = Y;
      }
    }, f.unstable_requestPaint = function() {
      _e = !0;
    }, f.unstable_runWithPriority = function(S, D) {
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
      var Y = ue;
      ue = S;
      try {
        return D();
      } finally {
        ue = Y;
      }
    }, f.unstable_scheduleCallback = function(S, D, Y) {
      var ie = f.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? ie + Y : ie) : Y = ie, S) {
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
      return re = Y + re, S = {
        id: J++,
        callback: D,
        priorityLevel: S,
        startTime: Y,
        expirationTime: re,
        sortIndex: -1
      }, Y > ie ? (S.sortIndex = Y, y(_, S), v(M) === null && S === v(_) && (Z ? (Be(W), W = -1) : Z = !0, Je(yl, Y - ie))) : (S.sortIndex = re, y(M, S), De || ye || (De = !0, Ve || (Ve = !0, Ye()))), S;
    }, f.unstable_shouldYield = El, f.unstable_wrapCallback = function(S) {
      var D = ue;
      return function() {
        var Y = ue;
        ue = D;
        try {
          return S.apply(this, arguments);
        } finally {
          ue = Y;
        }
      };
    };
  })(Es)), Es;
}
var $o;
function Gv() {
  return $o || ($o = 1, As.exports = Yv()), As.exports;
}
var Ts = { exports: {} }, we = {};
var Wo;
function Xv() {
  if (Wo) return we;
  Wo = 1;
  var f = Us();
  function y(M) {
    var _ = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        _ += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + M + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v() {
  }
  var r = {
    d: {
      f: v,
      r: function() {
        throw Error(y(522));
      },
      D: v,
      C: v,
      L: v,
      m: v,
      X: v,
      S: v,
      M: v
    },
    p: 0,
    findDOMNode: null
  }, T = /* @__PURE__ */ Symbol.for("react.portal");
  function R(M, _, J) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: U == null ? null : "" + U,
      children: M,
      containerInfo: _,
      implementation: J
    };
  }
  var V = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(M, _) {
    if (M === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, we.createPortal = function(M, _) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(y(299));
    return R(M, _, null, J);
  }, we.flushSync = function(M) {
    var _ = V.T, J = r.p;
    try {
      if (V.T = null, r.p = 2, M) return M();
    } finally {
      V.T = _, r.p = J, r.d.f();
    }
  }, we.preconnect = function(M, _) {
    typeof M == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, r.d.C(M, _));
  }, we.prefetchDNS = function(M) {
    typeof M == "string" && r.d.D(M);
  }, we.preinit = function(M, _) {
    if (typeof M == "string" && _ && typeof _.as == "string") {
      var J = _.as, U = O(J, _.crossOrigin), ue = typeof _.integrity == "string" ? _.integrity : void 0, ye = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      J === "style" ? r.d.S(
        M,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: U,
          integrity: ue,
          fetchPriority: ye
        }
      ) : J === "script" && r.d.X(M, {
        crossOrigin: U,
        integrity: ue,
        fetchPriority: ye,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, we.preinitModule = function(M, _) {
    if (typeof M == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var J = O(
            _.as,
            _.crossOrigin
          );
          r.d.M(M, {
            crossOrigin: J,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && r.d.M(M);
  }, we.preload = function(M, _) {
    if (typeof M == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var J = _.as, U = O(J, _.crossOrigin);
      r.d.L(M, J, {
        crossOrigin: U,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, we.preloadModule = function(M, _) {
    if (typeof M == "string")
      if (_) {
        var J = O(_.as, _.crossOrigin);
        r.d.m(M, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: J,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else r.d.m(M);
  }, we.requestFormReset = function(M) {
    r.d.r(M);
  }, we.unstable_batchedUpdates = function(M, _) {
    return M(_);
  }, we.useFormState = function(M, _, J) {
    return V.H.useFormState(M, _, J);
  }, we.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, we.version = "19.2.8", we;
}
var Fo;
function Qv() {
  if (Fo) return Ts.exports;
  Fo = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (y) {
        console.error(y);
      }
  }
  return f(), Ts.exports = Xv(), Ts.exports;
}
var Io;
function Zv() {
  if (Io) return Tn;
  Io = 1;
  var f = Gv(), y = Us(), v = Qv();
  function r(e) {
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
  function R(e) {
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
  function O(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function M(e) {
    if (R(e) !== e)
      throw Error(r(188));
  }
  function _(e) {
    var l = e.alternate;
    if (!l) {
      if (l = R(e), l === null) throw Error(r(188));
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
        throw Error(r(188));
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
          if (!c) throw Error(r(189));
        }
      }
      if (t.alternate !== a) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? e : l;
  }
  function J(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = J(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign, ue = /* @__PURE__ */ Symbol.for("react.element"), ye = /* @__PURE__ */ Symbol.for("react.transitional.element"), De = /* @__PURE__ */ Symbol.for("react.portal"), Z = /* @__PURE__ */ Symbol.for("react.fragment"), _e = /* @__PURE__ */ Symbol.for("react.strict_mode"), Re = /* @__PURE__ */ Symbol.for("react.profiler"), Be = /* @__PURE__ */ Symbol.for("react.consumer"), Ce = /* @__PURE__ */ Symbol.for("react.context"), Ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), yl = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), al = /* @__PURE__ */ Symbol.for("react.activity"), El = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), nl = Symbol.iterator;
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
      case Z:
        return "Fragment";
      case Re:
        return "Profiler";
      case _e:
        return "StrictMode";
      case yl:
        return "Suspense";
      case Ve:
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
  var Je = Array.isArray, S = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], re = -1;
  function o(e) {
    return { current: e };
  }
  function A(e) {
    0 > re || (e.current = ie[re], ie[re] = null, re--);
  }
  function C(e, l) {
    re++, ie[re] = e.current, e.current = l;
  }
  var q = o(null), w = o(null), F = o(null), j = o(null);
  function L(e, l) {
    switch (C(F, l), C(w, e), C(q, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? ho(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = ho(l), e = mo(l, e);
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
  function I() {
    A(q), A(w), A(F);
  }
  function Mt(e) {
    e.memoizedState !== null && C(j, e);
    var l = q.current, t = mo(l, e.type);
    l !== t && (C(w, e), C(q, t));
  }
  function Un(e) {
    w.current === e && (A(q), A(w)), j.current === e && (A(j), zn._currentValue = Y);
  }
  var iu, Qs;
  function Ot(e) {
    if (iu === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        iu = l && l[1] || "", Qs = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + iu + e + Qs;
  }
  var uu = !1;
  function cu(e, l) {
    if (!e || uu) return "";
    uu = !0;
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
                } catch (b) {
                  var x = b;
                }
                Reflect.construct(e, [], E);
              } else {
                try {
                  E.call();
                } catch (b) {
                  x = b;
                }
                e.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                x = b;
              }
              (E = e()) && typeof E.catch == "function" && E.catch(function() {
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
      var i = a.DetermineComponentFrameRoot(), c = i[0], s = i[1];
      if (c && s) {
        var d = c.split(`
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
      uu = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Ot(t) : "";
  }
  function oh(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ot(e.type);
      case 16:
        return Ot("Lazy");
      case 13:
        return e.child !== l && l !== null ? Ot("Suspense Fallback") : Ot("Suspense");
      case 19:
        return Ot("SuspenseList");
      case 0:
      case 15:
        return cu(e.type, !1);
      case 11:
        return cu(e.type.render, !1);
      case 1:
        return cu(e.type, !0);
      case 31:
        return Ot("Activity");
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
  var su = Object.prototype.hasOwnProperty, fu = f.unstable_scheduleCallback, ru = f.unstable_cancelCallback, hh = f.unstable_shouldYield, mh = f.unstable_requestPaint, ul = f.unstable_now, vh = f.unstable_getCurrentPriorityLevel, Ls = f.unstable_ImmediatePriority, Vs = f.unstable_UserBlockingPriority, Rn = f.unstable_NormalPriority, yh = f.unstable_LowPriority, ws = f.unstable_IdlePriority, gh = f.log, ph = f.unstable_setDisableYieldValue, Ra = null, cl = null;
  function nt(e) {
    if (typeof gh == "function" && ph(e), cl && typeof cl.setStrictMode == "function")
      try {
        cl.setStrictMode(Ra, e);
      } catch {
      }
  }
  var sl = Math.clz32 ? Math.clz32 : bh, xh = Math.log, jh = Math.LN2;
  function bh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xh(e) / jh | 0) | 0;
  }
  var Hn = 256, qn = 262144, Bn = 4194304;
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
  function Yn(e, l, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~i, a !== 0 ? n = Dt(a) : (c &= s, c !== 0 ? n = Dt(c) : t || (t = s & ~e, t !== 0 && (n = Dt(t))))) : (s = a & ~i, s !== 0 ? n = Dt(s) : c !== 0 ? n = Dt(c) : t || (t = a & ~e, t !== 0 && (n = Dt(t)))), n === 0 ? 0 : l !== 0 && l !== n && (l & i) === 0 && (i = n & -n, t = l & -l, i >= t || i === 32 && (t & 4194048) !== 0) ? l : n;
  }
  function Ha(e, l) {
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
  function Ks() {
    var e = Bn;
    return Bn <<= 1, (Bn & 62914560) === 0 && (Bn = 4194304), e;
  }
  function du(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function qa(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function zh(e, l, t, a, n, i) {
    var c = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var s = e.entanglements, d = e.expirationTimes, p = e.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var z = 31 - sl(t), E = 1 << z;
      s[z] = 0, d[z] = -1;
      var x = p[z];
      if (x !== null)
        for (p[z] = null, z = 0; z < x.length; z++) {
          var b = x[z];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~E;
    }
    a !== 0 && Js(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~l));
  }
  function Js(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var a = 31 - sl(l);
    e.entangledLanes |= l, e.entanglements[a] = e.entanglements[a] | 1073741824 | t & 261930;
  }
  function ks(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var a = 31 - sl(t), n = 1 << a;
      n & l | e[a] & l && (e[a] |= l), t &= ~n;
    }
  }
  function $s(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : ou(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function ou(e) {
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
  function hu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ws() {
    var e = D.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Bo(e.type));
  }
  function Fs(e, l) {
    var t = D.p;
    try {
      return D.p = e, l();
    } finally {
      D.p = t;
    }
  }
  var it = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + it, We = "__reactProps$" + it, $t = "__reactContainer$" + it, mu = "__reactEvents$" + it, _h = "__reactListeners$" + it, Nh = "__reactHandles$" + it, Is = "__reactResources$" + it, Ba = "__reactMarker$" + it;
  function vu(e) {
    delete e[Ge], delete e[We], delete e[mu], delete e[_h], delete e[Nh];
  }
  function Wt(e) {
    var l = e[Ge];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[$t] || t[Ge]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = bo(e); e !== null; ) {
            if (t = e[Ge]) return t;
            e = bo(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Ft(e) {
    if (e = e[Ge] || e[$t]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function Ya(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(r(33));
  }
  function It(e) {
    var l = e[Is];
    return l || (l = e[Is] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function He(e) {
    e[Ba] = !0;
  }
  var Ps = /* @__PURE__ */ new Set(), ef = {};
  function Ct(e, l) {
    Pt(e, l), Pt(e + "Capture", l);
  }
  function Pt(e, l) {
    for (ef[e] = l, e = 0; e < l.length; e++)
      Ps.add(l[e]);
  }
  var Ah = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lf = {}, tf = {};
  function Eh(e) {
    return su.call(tf, e) ? !0 : su.call(lf, e) ? !1 : Ah.test(e) ? tf[e] = !0 : (lf[e] = !0, !1);
  }
  function Gn(e, l, t) {
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
  function Xn(e, l, t) {
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
  function af(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Th(e, l, t) {
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
  function yu(e) {
    if (!e._valueTracker) {
      var l = af(e) ? "checked" : "value";
      e._valueTracker = Th(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function nf(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), a = "";
    return e && (a = af(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== t ? (l.setValue(e), !0) : !1;
  }
  function Qn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mh = /[\n"\\]/g;
  function pl(e) {
    return e.replace(
      Mh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gu(e, l, t, a, n, i, c, s) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + gl(l)) : e.value !== "" + gl(l) && (e.value = "" + gl(l)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), l != null ? pu(e, c, gl(l)) : t != null ? pu(e, c, gl(t)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + gl(s) : e.removeAttribute("name");
  }
  function uf(e, l, t, a, n, i, c, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), l != null || t != null) {
      if (!(i !== "submit" && i !== "reset" || l != null)) {
        yu(e);
        return;
      }
      t = t != null ? "" + gl(t) : "", l = l != null ? "" + gl(l) : t, s || l === e.value || (e.value = l), e.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), yu(e);
  }
  function pu(e, l, t) {
    l === "number" && Qn(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function ea(e, l, t, a) {
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
  function cf(e, l, t) {
    if (l != null && (l = "" + gl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + gl(t) : "";
  }
  function sf(e, l, t, a) {
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
    t = gl(l), e.defaultValue = t, a = e.textContent, a === t && a !== "" && a !== null && (e.value = a), yu(e);
  }
  function la(e, l) {
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
  function ff(e, l, t) {
    var a = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? a ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : a ? e.setProperty(l, t) : typeof t != "number" || t === 0 || Oh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function rf(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (e = e.style, t != null) {
      for (var a in t)
        !t.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && t[n] !== a && ff(e, n, a);
    } else
      for (var i in l)
        l.hasOwnProperty(i) && ff(e, i, l[i]);
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
  function Zn(e) {
    return Ch.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gl() {
  }
  var ju = null;
  function bu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ta = null, aa = null;
  function df(e) {
    var l = Ft(e);
    if (l && (e = l.stateNode)) {
      var t = e[We] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (gu(
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
              'input[name="' + pl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var a = t[l];
              if (a !== e && a.form === e.form) {
                var n = a[We] || null;
                if (!n) throw Error(r(90));
                gu(
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
              a = t[l], a.form === e.form && nf(a);
          }
          break e;
        case "textarea":
          cf(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && ea(e, !!t.multiple, l, !1);
      }
    }
  }
  var Su = !1;
  function of(e, l, t) {
    if (Su) return e(l, t);
    Su = !0;
    try {
      var a = e(l);
      return a;
    } finally {
      if (Su = !1, (ta !== null || aa !== null) && (Mi(), ta && (l = ta, e = aa, aa = ta = null, df(l), e)))
        for (l = 0; l < e.length; l++) df(e[l]);
    }
  }
  function Ga(e, l) {
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
  var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zu = !1;
  if (Xl)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function() {
          zu = !0;
        }
      }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      zu = !1;
    }
  var ut = null, _u = null, Ln = null;
  function hf() {
    if (Ln) return Ln;
    var e, l = _u, t = l.length, a, n = "value" in ut ? ut.value : ut.textContent, i = n.length;
    for (e = 0; e < t && l[e] === n[e]; e++) ;
    var c = t - e;
    for (a = 1; a <= c && l[t - a] === n[i - a]; a++) ;
    return Ln = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Vn(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wn() {
    return !0;
  }
  function mf() {
    return !1;
  }
  function Fe(e) {
    function l(t, a, n, i, c) {
      this._reactName = t, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wn : mf, this.isPropagationStopped = mf, this;
    }
    return U(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = wn);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = wn);
      },
      persist: function() {
      },
      isPersistent: wn
    }), l;
  }
  var Ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kn = Fe(Ut), Qa = U({}, Ut, { view: 0, detail: 0 }), Uh = Fe(Qa), Nu, Au, Za, Jn = U({}, Qa, {
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
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Za && (Za && e.type === "mousemove" ? (Nu = e.screenX - Za.screenX, Au = e.screenY - Za.screenY) : Au = Nu = 0, Za = e), Nu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Au;
    }
  }), vf = Fe(Jn), Rh = U({}, Jn, { dataTransfer: 0 }), Hh = Fe(Rh), qh = U({}, Qa, { relatedTarget: 0 }), Eu = Fe(qh), Bh = U({}, Ut, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yh = Fe(Bh), Gh = U({}, Ut, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xh = Fe(Gh), Qh = U({}, Ut, { data: 0 }), yf = Fe(Qh), Zh = {
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
  function wh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = Vh[e]) ? !!l[e] : !1;
  }
  function Tu() {
    return wh;
  }
  var Kh = U({}, Qa, {
    key: function(e) {
      if (e.key) {
        var l = Zh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Vn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function(e) {
      return e.type === "keypress" ? Vn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Vn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Jh = Fe(Kh), kh = U({}, Jn, {
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
  }), gf = Fe(kh), $h = U({}, Qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu
  }), Wh = Fe($h), Fh = U({}, Ut, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ih = Fe(Fh), Ph = U({}, Jn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), em = Fe(Ph), lm = U({}, Ut, {
    newState: 0,
    oldState: 0
  }), tm = Fe(lm), am = [9, 13, 27, 32], Mu = Xl && "CompositionEvent" in window, La = null;
  Xl && "documentMode" in document && (La = document.documentMode);
  var nm = Xl && "TextEvent" in window && !La, pf = Xl && (!Mu || La && 8 < La && 11 >= La), xf = " ", jf = !1;
  function bf(e, l) {
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
  function Sf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var na = !1;
  function im(e, l) {
    switch (e) {
      case "compositionend":
        return Sf(l);
      case "keypress":
        return l.which !== 32 ? null : (jf = !0, xf);
      case "textInput":
        return e = l.data, e === xf && jf ? null : e;
      default:
        return null;
    }
  }
  function um(e, l) {
    if (na)
      return e === "compositionend" || !Mu && bf(e, l) ? (e = hf(), Ln = _u = ut = null, na = !1, e) : null;
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
        return pf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var cm = {
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
    return l === "input" ? !!cm[e.type] : l === "textarea";
  }
  function _f(e, l, t, a) {
    ta ? aa ? aa.push(a) : aa = [a] : ta = a, l = qi(l, "onChange"), 0 < l.length && (t = new Kn(
      "onChange",
      "change",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }));
  }
  var Va = null, wa = null;
  function sm(e) {
    uo(e, 0);
  }
  function kn(e) {
    var l = Ya(e);
    if (nf(l)) return e;
  }
  function Nf(e, l) {
    if (e === "change") return l;
  }
  var Af = !1;
  if (Xl) {
    var Ou;
    if (Xl) {
      var Du = "oninput" in document;
      if (!Du) {
        var Ef = document.createElement("div");
        Ef.setAttribute("oninput", "return;"), Du = typeof Ef.oninput == "function";
      }
      Ou = Du;
    } else Ou = !1;
    Af = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function Tf() {
    Va && (Va.detachEvent("onpropertychange", Mf), wa = Va = null);
  }
  function Mf(e) {
    if (e.propertyName === "value" && kn(wa)) {
      var l = [];
      _f(
        l,
        wa,
        e,
        bu(e)
      ), of(sm, l);
    }
  }
  function fm(e, l, t) {
    e === "focusin" ? (Tf(), Va = l, wa = t, Va.attachEvent("onpropertychange", Mf)) : e === "focusout" && Tf();
  }
  function rm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return kn(wa);
  }
  function dm(e, l) {
    if (e === "click") return kn(l);
  }
  function om(e, l) {
    if (e === "input" || e === "change")
      return kn(l);
  }
  function hm(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var fl = typeof Object.is == "function" ? Object.is : hm;
  function Ka(e, l) {
    if (fl(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), a = Object.keys(l);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!su.call(l, n) || !fl(e[n], l[n]))
        return !1;
    }
    return !0;
  }
  function Of(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Df(e, l) {
    var t = Of(e);
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
      t = Of(t);
    }
  }
  function Cf(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Cf(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Uf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var l = Qn(e.document); l instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = l.contentWindow;
      else break;
      l = Qn(e.document);
    }
    return l;
  }
  function Cu(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var mm = Xl && "documentMode" in document && 11 >= document.documentMode, ia = null, Uu = null, Ja = null, Ru = !1;
  function Rf(e, l, t) {
    var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Ru || ia == null || ia !== Qn(a) || (a = ia, "selectionStart" in a && Cu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && Ka(Ja, a) || (Ja = a, a = qi(Uu, "onSelect"), 0 < a.length && (l = new Kn(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: a }), l.target = ia)));
  }
  function Rt(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var ua = {
    animationend: Rt("Animation", "AnimationEnd"),
    animationiteration: Rt("Animation", "AnimationIteration"),
    animationstart: Rt("Animation", "AnimationStart"),
    transitionrun: Rt("Transition", "TransitionRun"),
    transitionstart: Rt("Transition", "TransitionStart"),
    transitioncancel: Rt("Transition", "TransitionCancel"),
    transitionend: Rt("Transition", "TransitionEnd")
  }, Hu = {}, Hf = {};
  Xl && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function Ht(e) {
    if (Hu[e]) return Hu[e];
    if (!ua[e]) return e;
    var l = ua[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in Hf)
        return Hu[e] = l[t];
    return e;
  }
  var qf = Ht("animationend"), Bf = Ht("animationiteration"), Yf = Ht("animationstart"), vm = Ht("transitionrun"), ym = Ht("transitionstart"), gm = Ht("transitioncancel"), Gf = Ht("transitionend"), Xf = /* @__PURE__ */ new Map(), qu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  qu.push("scrollEnd");
  function Ml(e, l) {
    Xf.set(e, l), Ct(l, [e]);
  }
  var $n = typeof reportError == "function" ? reportError : function(e) {
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
  }, xl = [], ca = 0, Bu = 0;
  function Wn() {
    for (var e = ca, l = Bu = ca = 0; l < e; ) {
      var t = xl[l];
      xl[l++] = null;
      var a = xl[l];
      xl[l++] = null;
      var n = xl[l];
      xl[l++] = null;
      var i = xl[l];
      if (xl[l++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      i !== 0 && Qf(t, n, i);
    }
  }
  function Fn(e, l, t, a) {
    xl[ca++] = e, xl[ca++] = l, xl[ca++] = t, xl[ca++] = a, Bu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Yu(e, l, t, a) {
    return Fn(e, l, t, a), In(e);
  }
  function qt(e, l) {
    return Fn(e, null, null, l), In(e);
  }
  function Qf(e, l, t) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= t, a = i.alternate, a !== null && (a.childLanes |= t), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && l !== null && (n = 31 - sl(t), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [l] : a.push(l), l.lane = t | 536870912), i) : null;
  }
  function In(e) {
    if (50 < yn)
      throw yn = 0, Jc = null, Error(r(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var sa = {};
  function pm(e, l, t, a) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rl(e, l, t, a) {
    return new pm(e, l, t, a);
  }
  function Gu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ql(e, l) {
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
  function Pn(e, l, t, a, n, i) {
    var c = 0;
    if (a = e, typeof e == "function") Gu(e) && (c = 1);
    else if (typeof e == "string")
      c = zv(
        e,
        t,
        q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case al:
          return e = rl(31, t, l, n), e.elementType = al, e.lanes = i, e;
        case Z:
          return Bt(t.children, n, i, l);
        case _e:
          c = 8, n |= 24;
          break;
        case Re:
          return e = rl(12, t, l, n | 2), e.elementType = Re, e.lanes = i, e;
        case yl:
          return e = rl(13, t, l, n), e.elementType = yl, e.lanes = i, e;
        case Ve:
          return e = rl(19, t, l, n), e.elementType = Ve, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                c = 10;
                break e;
              case Be:
                c = 9;
                break e;
              case Ke:
                c = 11;
                break e;
              case W:
                c = 14;
                break e;
              case be:
                c = 16, a = null;
                break e;
            }
          c = 29, t = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return l = rl(c, t, l, n), l.elementType = e, l.type = a, l.lanes = i, l;
  }
  function Bt(e, l, t, a) {
    return e = rl(7, e, a, l), e.lanes = t, e;
  }
  function Xu(e, l, t) {
    return e = rl(6, e, null, l), e.lanes = t, e;
  }
  function Lf(e) {
    var l = rl(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Qu(e, l, t) {
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
  var fa = [], ra = 0, ei = null, ka = 0, bl = [], Sl = 0, ct = null, Ul = 1, Rl = "";
  function Zl(e, l) {
    fa[ra++] = ka, fa[ra++] = ei, ei = e, ka = l;
  }
  function wf(e, l, t) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ct, ct = e;
    var a = Ul;
    e = Rl;
    var n = 32 - sl(a) - 1;
    a &= ~(1 << n), t += 1;
    var i = 32 - sl(l) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Ul = 1 << 32 - sl(l) + n | t << n | a, Rl = i + e;
    } else
      Ul = 1 << i | t << n | a, Rl = e;
  }
  function Zu(e) {
    e.return !== null && (Zl(e, 1), wf(e, 1, 0));
  }
  function Lu(e) {
    for (; e === ei; )
      ei = fa[--ra], fa[ra] = null, ka = fa[--ra], fa[ra] = null;
    for (; e === ct; )
      ct = bl[--Sl], bl[Sl] = null, Rl = bl[--Sl], bl[Sl] = null, Ul = bl[--Sl], bl[Sl] = null;
  }
  function Kf(e, l) {
    bl[Sl++] = Ul, bl[Sl++] = Rl, bl[Sl++] = ct, Ul = l.id, Rl = l.overflow, ct = e;
  }
  var Xe = null, pe = null, ne = !1, st = null, zl = !1, Vu = Error(r(519));
  function ft(e) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $a(jl(l, e)), Vu;
  }
  function Jf(e) {
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
        for (t = 0; t < pn.length; t++)
          ee(pn[t], l);
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
        ee("invalid", l), sf(l, a.value, a.defaultValue, a.children);
    }
    t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || a.suppressHydrationWarning === !0 || ro(l.textContent, t) ? (a.popover != null && (ee("beforetoggle", l), ee("toggle", l)), a.onScroll != null && ee("scroll", l), a.onScrollEnd != null && ee("scrollend", l), a.onClick != null && (l.onclick = Gl), l = !0) : l = !1, l || ft(e, !0);
  }
  function kf(e) {
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
  function da(e) {
    if (e !== Xe) return !1;
    if (!ne) return kf(e), ne = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || ss(e.type, e.memoizedProps)), t = !t), t && pe && ft(e), kf(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      pe = jo(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      pe = jo(e);
    } else
      l === 27 ? (l = pe, zt(e.type) ? (e = hs, hs = null, pe = e) : pe = l) : pe = Xe ? Nl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yt() {
    pe = Xe = null, ne = !1;
  }
  function wu() {
    var e = st;
    return e !== null && (ll === null ? ll = e : ll.push.apply(
      ll,
      e
    ), st = null), e;
  }
  function $a(e) {
    st === null ? st = [e] : st.push(e);
  }
  var Ku = o(null), Gt = null, Ll = null;
  function rt(e, l, t) {
    C(Ku, l._currentValue), l._currentValue = t;
  }
  function Vl(e) {
    e._currentValue = Ku.current, A(Ku);
  }
  function Ju(e, l, t) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function ku(e, l, t, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var d = 0; d < l.length; d++)
            if (s.context === l[d]) {
              i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Ju(
                i.return,
                t,
                e
              ), a || (c = null);
              break e;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(r(341));
        c.lanes |= t, i = c.alternate, i !== null && (i.lanes |= t), Ju(c, t, e), c = null;
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
  function oa(e, l, t, a) {
    e = null;
    for (var n = l, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var s = n.type;
          fl(n.pendingProps.value, c.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (n === j.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(zn) : e = [zn]);
      }
      n = n.return;
    }
    e !== null && ku(
      l,
      e,
      t,
      a
    ), l.flags |= 262144;
  }
  function li(e) {
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
  function Xt(e) {
    Gt = e, Ll = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Qe(e) {
    return $f(Gt, e);
  }
  function ti(e, l) {
    return Gt === null && Xt(e), $f(e, l);
  }
  function $f(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, Ll === null) {
      if (e === null) throw Error(r(308));
      Ll = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else Ll = Ll.next = l;
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
  function $u() {
    return {
      controller: new xm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wa(e) {
    e.refCount--, e.refCount === 0 && jm(bm, function() {
      e.controller.abort();
    });
  }
  var Fa = null, Wu = 0, ha = 0, ma = null;
  function Sm(e, l) {
    if (Fa === null) {
      var t = Fa = [];
      Wu = 0, ha = Pc(), ma = {
        status: "pending",
        value: void 0,
        then: function(a) {
          t.push(a);
        }
      };
    }
    return Wu++, l.then(Wf, Wf), l;
  }
  function Wf() {
    if (--Wu === 0 && Fa !== null) {
      ma !== null && (ma.status = "fulfilled");
      var e = Fa;
      Fa = null, ha = 0, ma = null;
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
  var Ff = S.S;
  S.S = function(e, l) {
    Rd = ul(), typeof l == "object" && l !== null && typeof l.then == "function" && Sm(e, l), Ff !== null && Ff(e, l);
  };
  var Qt = o(null);
  function Fu() {
    var e = Qt.current;
    return e !== null ? e : ge.pooledCache;
  }
  function ai(e, l) {
    l === null ? C(Qt, Qt.current) : C(Qt, l.pool);
  }
  function If() {
    var e = Fu();
    return e === null ? null : { parent: Ee._currentValue, pool: e };
  }
  var va = Error(r(460)), Iu = Error(r(474)), ni = Error(r(542)), ii = { then: function() {
  } };
  function Pf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function er(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(Gl, Gl), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, tr(e), e;
      default:
        if (typeof l.status == "string") l.then(Gl, Gl);
        else {
          if (e = ge, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = l.reason, tr(e), e;
        }
        throw Lt = l, va;
    }
  }
  function Zt(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Lt = t, va) : t;
    }
  }
  var Lt = null;
  function lr() {
    if (Lt === null) throw Error(r(459));
    var e = Lt;
    return Lt = null, e;
  }
  function tr(e) {
    if (e === va || e === ni)
      throw Error(r(483));
  }
  var ya = null, Ia = 0;
  function ui(e) {
    var l = Ia;
    return Ia += 1, ya === null && (ya = []), er(ya, e, l);
  }
  function Pa(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function ci(e, l) {
    throw l.$$typeof === ue ? Error(r(525)) : (e = Object.prototype.toString.call(l), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function ar(e) {
    function l(m, h) {
      if (e) {
        var g = m.deletions;
        g === null ? (m.deletions = [h], m.flags |= 16) : g.push(h);
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
    function i(m, h, g) {
      return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < h ? (m.flags |= 67108866, h) : g) : (m.flags |= 67108866, h)) : (m.flags |= 1048576, h);
    }
    function c(m) {
      return e && m.alternate === null && (m.flags |= 67108866), m;
    }
    function s(m, h, g, N) {
      return h === null || h.tag !== 6 ? (h = Xu(g, m.mode, N), h.return = m, h) : (h = n(h, g), h.return = m, h);
    }
    function d(m, h, g, N) {
      var G = g.type;
      return G === Z ? z(
        m,
        h,
        g.props.children,
        N,
        g.key
      ) : h !== null && (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === be && Zt(G) === h.type) ? (h = n(h, g.props), Pa(h, g), h.return = m, h) : (h = Pn(
        g.type,
        g.key,
        g.props,
        null,
        m.mode,
        N
      ), Pa(h, g), h.return = m, h);
    }
    function p(m, h, g, N) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Qu(g, m.mode, N), h.return = m, h) : (h = n(h, g.children || []), h.return = m, h);
    }
    function z(m, h, g, N, G) {
      return h === null || h.tag !== 7 ? (h = Bt(
        g,
        m.mode,
        N,
        G
      ), h.return = m, h) : (h = n(h, g), h.return = m, h);
    }
    function E(m, h, g) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Xu(
          "" + h,
          m.mode,
          g
        ), h.return = m, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ye:
            return g = Pn(
              h.type,
              h.key,
              h.props,
              null,
              m.mode,
              g
            ), Pa(g, h), g.return = m, g;
          case De:
            return h = Qu(
              h,
              m.mode,
              g
            ), h.return = m, h;
          case be:
            return h = Zt(h), E(m, h, g);
        }
        if (Je(h) || Ye(h))
          return h = Bt(
            h,
            m.mode,
            g,
            null
          ), h.return = m, h;
        if (typeof h.then == "function")
          return E(m, ui(h), g);
        if (h.$$typeof === Ce)
          return E(
            m,
            ti(m, h),
            g
          );
        ci(m, h);
      }
      return null;
    }
    function x(m, h, g, N) {
      var G = h !== null ? h.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return G !== null ? null : s(m, h, "" + g, N);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ye:
            return g.key === G ? d(m, h, g, N) : null;
          case De:
            return g.key === G ? p(m, h, g, N) : null;
          case be:
            return g = Zt(g), x(m, h, g, N);
        }
        if (Je(g) || Ye(g))
          return G !== null ? null : z(m, h, g, N, null);
        if (typeof g.then == "function")
          return x(
            m,
            h,
            ui(g),
            N
          );
        if (g.$$typeof === Ce)
          return x(
            m,
            h,
            ti(m, g),
            N
          );
        ci(m, g);
      }
      return null;
    }
    function b(m, h, g, N, G) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return m = m.get(g) || null, s(h, m, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ye:
            return m = m.get(
              N.key === null ? g : N.key
            ) || null, d(h, m, N, G);
          case De:
            return m = m.get(
              N.key === null ? g : N.key
            ) || null, p(h, m, N, G);
          case be:
            return N = Zt(N), b(
              m,
              h,
              g,
              N,
              G
            );
        }
        if (Je(N) || Ye(N))
          return m = m.get(g) || null, z(h, m, N, G, null);
        if (typeof N.then == "function")
          return b(
            m,
            h,
            g,
            ui(N),
            G
          );
        if (N.$$typeof === Ce)
          return b(
            m,
            h,
            g,
            ti(h, N),
            G
          );
        ci(h, N);
      }
      return null;
    }
    function H(m, h, g, N) {
      for (var G = null, ce = null, B = h, $ = h = 0, te = null; B !== null && $ < g.length; $++) {
        B.index > $ ? (te = B, B = null) : te = B.sibling;
        var se = x(
          m,
          B,
          g[$],
          N
        );
        if (se === null) {
          B === null && (B = te);
          break;
        }
        e && B && se.alternate === null && l(m, B), h = i(se, h, $), ce === null ? G = se : ce.sibling = se, ce = se, B = te;
      }
      if ($ === g.length)
        return t(m, B), ne && Zl(m, $), G;
      if (B === null) {
        for (; $ < g.length; $++)
          B = E(m, g[$], N), B !== null && (h = i(
            B,
            h,
            $
          ), ce === null ? G = B : ce.sibling = B, ce = B);
        return ne && Zl(m, $), G;
      }
      for (B = a(B); $ < g.length; $++)
        te = b(
          B,
          m,
          $,
          g[$],
          N
        ), te !== null && (e && te.alternate !== null && B.delete(
          te.key === null ? $ : te.key
        ), h = i(
          te,
          h,
          $
        ), ce === null ? G = te : ce.sibling = te, ce = te);
      return e && B.forEach(function(Tt) {
        return l(m, Tt);
      }), ne && Zl(m, $), G;
    }
    function X(m, h, g, N) {
      if (g == null) throw Error(r(151));
      for (var G = null, ce = null, B = h, $ = h = 0, te = null, se = g.next(); B !== null && !se.done; $++, se = g.next()) {
        B.index > $ ? (te = B, B = null) : te = B.sibling;
        var Tt = x(m, B, se.value, N);
        if (Tt === null) {
          B === null && (B = te);
          break;
        }
        e && B && Tt.alternate === null && l(m, B), h = i(Tt, h, $), ce === null ? G = Tt : ce.sibling = Tt, ce = Tt, B = te;
      }
      if (se.done)
        return t(m, B), ne && Zl(m, $), G;
      if (B === null) {
        for (; !se.done; $++, se = g.next())
          se = E(m, se.value, N), se !== null && (h = i(se, h, $), ce === null ? G = se : ce.sibling = se, ce = se);
        return ne && Zl(m, $), G;
      }
      for (B = a(B); !se.done; $++, se = g.next())
        se = b(B, m, $, se.value, N), se !== null && (e && se.alternate !== null && B.delete(se.key === null ? $ : se.key), h = i(se, h, $), ce === null ? G = se : ce.sibling = se, ce = se);
      return e && B.forEach(function(Rv) {
        return l(m, Rv);
      }), ne && Zl(m, $), G;
    }
    function ve(m, h, g, N) {
      if (typeof g == "object" && g !== null && g.type === Z && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ye:
            e: {
              for (var G = g.key; h !== null; ) {
                if (h.key === G) {
                  if (G = g.type, G === Z) {
                    if (h.tag === 7) {
                      t(
                        m,
                        h.sibling
                      ), N = n(
                        h,
                        g.props.children
                      ), N.return = m, m = N;
                      break e;
                    }
                  } else if (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === be && Zt(G) === h.type) {
                    t(
                      m,
                      h.sibling
                    ), N = n(h, g.props), Pa(N, g), N.return = m, m = N;
                    break e;
                  }
                  t(m, h);
                  break;
                } else l(m, h);
                h = h.sibling;
              }
              g.type === Z ? (N = Bt(
                g.props.children,
                m.mode,
                N,
                g.key
              ), N.return = m, m = N) : (N = Pn(
                g.type,
                g.key,
                g.props,
                null,
                m.mode,
                N
              ), Pa(N, g), N.return = m, m = N);
            }
            return c(m);
          case De:
            e: {
              for (G = g.key; h !== null; ) {
                if (h.key === G)
                  if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                    t(
                      m,
                      h.sibling
                    ), N = n(h, g.children || []), N.return = m, m = N;
                    break e;
                  } else {
                    t(m, h);
                    break;
                  }
                else l(m, h);
                h = h.sibling;
              }
              N = Qu(g, m.mode, N), N.return = m, m = N;
            }
            return c(m);
          case be:
            return g = Zt(g), ve(
              m,
              h,
              g,
              N
            );
        }
        if (Je(g))
          return H(
            m,
            h,
            g,
            N
          );
        if (Ye(g)) {
          if (G = Ye(g), typeof G != "function") throw Error(r(150));
          return g = G.call(g), X(
            m,
            h,
            g,
            N
          );
        }
        if (typeof g.then == "function")
          return ve(
            m,
            h,
            ui(g),
            N
          );
        if (g.$$typeof === Ce)
          return ve(
            m,
            h,
            ti(m, g),
            N
          );
        ci(m, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, h !== null && h.tag === 6 ? (t(m, h.sibling), N = n(h, g), N.return = m, m = N) : (t(m, h), N = Xu(g, m.mode, N), N.return = m, m = N), c(m)) : t(m, h);
    }
    return function(m, h, g, N) {
      try {
        Ia = 0;
        var G = ve(
          m,
          h,
          g,
          N
        );
        return ya = null, G;
      } catch (B) {
        if (B === va || B === ni) throw B;
        var ce = rl(29, B, null, m.mode);
        return ce.lanes = N, ce.return = m, ce;
      }
    };
  }
  var Vt = ar(!0), nr = ar(!1), dt = !1;
  function Pu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ec(e, l) {
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
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = In(e), Qf(e, null, t), l;
    }
    return Fn(e, a, l, t), In(e);
  }
  function en(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, ks(e, t);
    }
  }
  function lc(e, l) {
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
  var tc = !1;
  function ln() {
    if (tc) {
      var e = ma;
      if (e !== null) throw e;
    }
  }
  function tn(e, l, t, a) {
    tc = !1;
    var n = e.updateQueue;
    dt = !1;
    var i = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var d = s, p = d.next;
      d.next = null, c === null ? i = p : c.next = p, c = d;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, s = z.lastBaseUpdate, s !== c && (s === null ? z.firstBaseUpdate = p : s.next = p, z.lastBaseUpdate = d));
    }
    if (i !== null) {
      var E = n.baseState;
      c = 0, z = p = d = null, s = i;
      do {
        var x = s.lane & -536870913, b = x !== s.lane;
        if (b ? (le & x) === x : (a & x) === x) {
          x !== 0 && x === ha && (tc = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var H = e, X = s;
            x = l;
            var ve = t;
            switch (X.tag) {
              case 1:
                if (H = X.payload, typeof H == "function") {
                  E = H.call(ve, E, x);
                  break e;
                }
                E = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = X.payload, x = typeof H == "function" ? H.call(ve, E, x) : H, x == null) break e;
                E = U({}, E, x);
                break e;
              case 2:
                dt = !0;
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
          }, z === null ? (p = z = b, d = E) : z = z.next = b, c |= x;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          b = s, s = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      z === null && (d = E), n.baseState = d, n.firstBaseUpdate = p, n.lastBaseUpdate = z, i === null && (n.shared.lanes = 0), pt |= c, e.lanes = c, e.memoizedState = E;
    }
  }
  function ir(e, l) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(l);
  }
  function ur(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        ir(t[e], l);
  }
  var ga = o(null), si = o(0);
  function cr(e, l) {
    e = Pl, C(si, e), C(ga, l), Pl = e | l.baseLanes;
  }
  function ac() {
    C(si, Pl), C(ga, ga.current);
  }
  function nc() {
    Pl = si.current, A(ga), A(si);
  }
  var dl = o(null), _l = null;
  function mt(e) {
    var l = e.alternate;
    C(Ne, Ne.current & 1), C(dl, e), _l === null && (l === null || ga.current !== null || l.memoizedState !== null) && (_l = e);
  }
  function ic(e) {
    C(Ne, Ne.current), C(dl, e), _l === null && (_l = e);
  }
  function sr(e) {
    e.tag === 22 ? (C(Ne, Ne.current), C(dl, e), _l === null && (_l = e)) : vt();
  }
  function vt() {
    C(Ne, Ne.current), C(dl, dl.current);
  }
  function ol(e) {
    A(dl), _l === e && (_l = null), A(Ne);
  }
  var Ne = o(0);
  function fi(e) {
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
  var wl = 0, k = null, he = null, Te = null, ri = !1, pa = !1, wt = !1, di = 0, an = 0, xa = null, _m = 0;
  function Se() {
    throw Error(r(321));
  }
  function uc(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!fl(e[t], l[t])) return !1;
    return !0;
  }
  function cc(e, l, t, a, n, i) {
    return wl = i, k = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, S.H = e === null || e.memoizedState === null ? wr : Sc, wt = !1, i = t(a, n), wt = !1, pa && (i = rr(
      l,
      t,
      a,
      n
    )), fr(e), i;
  }
  function fr(e) {
    S.H = cn;
    var l = he !== null && he.next !== null;
    if (wl = 0, Te = he = k = null, ri = !1, an = 0, xa = null, l) throw Error(r(300));
    e === null || Me || (e = e.dependencies, e !== null && li(e) && (Me = !0));
  }
  function rr(e, l, t, a) {
    k = e;
    var n = 0;
    do {
      if (pa && (xa = null), an = 0, pa = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Te = he = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      S.H = Kr, i = l(t, a);
    } while (pa);
    return i;
  }
  function Nm() {
    var e = S.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? nn(l) : l, e = e.useState()[0], (he !== null ? he.memoizedState : null) !== e && (k.flags |= 1024), l;
  }
  function sc() {
    var e = di !== 0;
    return di = 0, e;
  }
  function fc(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function rc(e) {
    if (ri) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      ri = !1;
    }
    wl = 0, Te = he = k = null, pa = !1, an = di = 0, xa = null;
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
  function oi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nn(e) {
    var l = an;
    return an += 1, xa === null && (xa = []), e = er(xa, e, l), l = k, (Te === null ? l.memoizedState : Te.next) === null && (l = l.alternate, S.H = l === null || l.memoizedState === null ? wr : Sc), e;
  }
  function hi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return nn(e);
      if (e.$$typeof === Ce) return Qe(e);
    }
    throw Error(r(438, String(e)));
  }
  function dc(e) {
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
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = oi(), k.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), a = 0; a < e; a++)
        t[a] = El;
    return l.index++, t;
  }
  function Kl(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function mi(e) {
    var l = Ae();
    return oc(l, he, e);
  }
  function oc(e, l, t) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
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
      var s = c = null, d = null, p = l, z = !1;
      do {
        var E = p.lane & -536870913;
        if (E !== p.lane ? (le & E) === E : (wl & E) === E) {
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
            }), E === ha && (z = !0);
          else if ((wl & x) === x) {
            p = p.next, x === ha && (z = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, d === null ? (s = d = E, c = i) : d = d.next = E, k.lanes |= x, pt |= x;
          E = p.action, wt && t(i, E), i = p.hasEagerState ? p.eagerState : t(i, E);
        } else
          x = {
            lane: E,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, d === null ? (s = d = x, c = i) : d = d.next = x, k.lanes |= E, pt |= E;
        p = p.next;
      } while (p !== null && p !== l);
      if (d === null ? c = i : d.next = s, !fl(i, e.memoizedState) && (Me = !0, z && (t = ma, t !== null)))
        throw t;
      e.memoizedState = i, e.baseState = c, e.baseQueue = d, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function hc(e) {
    var l = Ae(), t = l.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = e;
    var a = t.dispatch, n = t.pending, i = l.memoizedState;
    if (n !== null) {
      t.pending = null;
      var c = n = n.next;
      do
        i = e(i, c.action), c = c.next;
      while (c !== n);
      fl(i, l.memoizedState) || (Me = !0), l.memoizedState = i, l.baseQueue === null && (l.baseState = i), t.lastRenderedState = i;
    }
    return [i, a];
  }
  function dr(e, l, t) {
    var a = k, n = Ae(), i = ne;
    if (i) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = l();
    var c = !fl(
      (he || n).memoizedState,
      t
    );
    if (c && (n.memoizedState = t, Me = !0), n = n.queue, yc(mr.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== l || c || Te !== null && Te.memoizedState.tag & 1) {
      if (a.flags |= 2048, ja(
        9,
        { destroy: void 0 },
        hr.bind(
          null,
          a,
          n,
          t,
          l
        ),
        null
      ), ge === null) throw Error(r(349));
      i || (wl & 127) !== 0 || or(a, l, t);
    }
    return t;
  }
  function or(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = k.updateQueue, l === null ? (l = oi(), k.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function hr(e, l, t, a) {
    l.value = t, l.getSnapshot = a, vr(l) && yr(e);
  }
  function mr(e, l, t) {
    return t(function() {
      vr(l) && yr(e);
    });
  }
  function vr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !fl(e, t);
    } catch {
      return !0;
    }
  }
  function yr(e) {
    var l = qt(e, 2);
    l !== null && tl(l, e, 2);
  }
  function mc(e) {
    var l = ke();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), wt) {
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
    return e.baseState = t, oc(
      e,
      he,
      typeof a == "function" ? a : Kl
    );
  }
  function Am(e, l, t, a, n) {
    if (gi(e)) throw Error(r(485));
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
      S.T !== null ? t(!0) : i.isTransition = !1, a(i), t = l.pending, t === null ? (i.next = l.pending = i, pr(l, i)) : (i.next = t.next, l.pending = t.next = i);
    }
  }
  function pr(e, l) {
    var t = l.action, a = l.payload, n = e.state;
    if (l.isTransition) {
      var i = S.T, c = {};
      S.T = c;
      try {
        var s = t(n, a), d = S.S;
        d !== null && d(c, s), xr(e, l, s);
      } catch (p) {
        vc(e, l, p);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), S.T = i;
      }
    } else
      try {
        i = t(n, a), xr(e, l, i);
      } catch (p) {
        vc(e, l, p);
      }
  }
  function xr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(a) {
        jr(e, l, a);
      },
      function(a) {
        return vc(e, l, a);
      }
    ) : jr(e, l, t);
  }
  function jr(e, l, t) {
    l.status = "fulfilled", l.value = t, br(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, pr(e, t)));
  }
  function vc(e, l, t) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = t, br(l), l = l.next;
      while (l !== a);
    }
    e.action = null;
  }
  function br(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function Sr(e, l) {
    return l;
  }
  function zr(e, l) {
    if (ne) {
      var t = ge.formState;
      if (t !== null) {
        e: {
          var a = k;
          if (ne) {
            if (pe) {
              l: {
                for (var n = pe, i = zl; n.nodeType !== 8; ) {
                  if (!i) {
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
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                pe = Nl(
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
      lastRenderedReducer: Sr,
      lastRenderedState: l
    }, t.queue = a, t = Zr.bind(
      null,
      k,
      a
    ), a.dispatch = t, a = mc(!1), i = bc.bind(
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
      i,
      t
    ), n.dispatch = t, a.memoizedState = e, [l, t, !1];
  }
  function _r(e) {
    var l = Ae();
    return Nr(l, he, e);
  }
  function Nr(e, l, t) {
    if (l = oc(
      e,
      l,
      Sr
    )[0], e = mi(Kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = nn(l);
      } catch (c) {
        throw c === va ? ni : c;
      }
    else a = l;
    l = Ae();
    var n = l.queue, i = n.dispatch;
    return t !== l.memoizedState && (k.flags |= 2048, ja(
      9,
      { destroy: void 0 },
      Em.bind(null, n, t),
      null
    )), [a, i, e];
  }
  function Em(e, l) {
    e.action = l;
  }
  function Ar(e) {
    var l = Ae(), t = he;
    if (t !== null)
      return Nr(l, t, e);
    Ae(), l = l.memoizedState, t = Ae();
    var a = t.queue.dispatch;
    return t.memoizedState = e, [l, a, !1];
  }
  function ja(e, l, t, a) {
    return e = { tag: e, create: t, deps: a, inst: l, next: null }, l = k.updateQueue, l === null && (l = oi(), k.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (a = t.next, t.next = e, e.next = a, l.lastEffect = e), e;
  }
  function Er() {
    return Ae().memoizedState;
  }
  function vi(e, l, t, a) {
    var n = ke();
    k.flags |= e, n.memoizedState = ja(
      1 | l,
      { destroy: void 0 },
      t,
      a === void 0 ? null : a
    );
  }
  function yi(e, l, t, a) {
    var n = Ae();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    he !== null && a !== null && uc(a, he.memoizedState.deps) ? n.memoizedState = ja(l, i, t, a) : (k.flags |= e, n.memoizedState = ja(
      1 | l,
      i,
      t,
      a
    ));
  }
  function Tr(e, l) {
    vi(8390656, 8, e, l);
  }
  function yc(e, l) {
    yi(2048, 8, e, l);
  }
  function Tm(e) {
    k.flags |= 4;
    var l = k.updateQueue;
    if (l === null)
      l = oi(), k.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function Mr(e) {
    var l = Ae().memoizedState;
    return Tm({ ref: l, nextImpl: e }), function() {
      if ((fe & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Or(e, l) {
    return yi(4, 2, e, l);
  }
  function Dr(e, l) {
    return yi(4, 4, e, l);
  }
  function Cr(e, l) {
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
  function Ur(e, l, t) {
    t = t != null ? t.concat([e]) : null, yi(4, 4, Cr.bind(null, l, e), t);
  }
  function gc() {
  }
  function Rr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    return l !== null && uc(l, a[1]) ? a[0] : (t.memoizedState = [e, l], e);
  }
  function Hr(e, l) {
    var t = Ae();
    l = l === void 0 ? null : l;
    var a = t.memoizedState;
    if (l !== null && uc(l, a[1]))
      return a[0];
    if (a = e(), wt) {
      nt(!0);
      try {
        e();
      } finally {
        nt(!1);
      }
    }
    return t.memoizedState = [a, l], a;
  }
  function pc(e, l, t) {
    return t === void 0 || (wl & 1073741824) !== 0 && (le & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = qd(), k.lanes |= e, pt |= e, t);
  }
  function qr(e, l, t, a) {
    return fl(t, l) ? t : ga.current !== null ? (e = pc(e, t, a), fl(e, l) || (Me = !0), e) : (wl & 42) === 0 || (wl & 1073741824) !== 0 && (le & 261930) === 0 ? (Me = !0, e.memoizedState = t) : (e = qd(), k.lanes |= e, pt |= e, l);
  }
  function Br(e, l, t, a, n) {
    var i = D.p;
    D.p = i !== 0 && 8 > i ? i : 8;
    var c = S.T, s = {};
    S.T = s, bc(e, !1, l, t);
    try {
      var d = n(), p = S.S;
      if (p !== null && p(s, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var z = zm(
          d,
          a
        );
        un(
          e,
          l,
          z,
          vl(e)
        );
      } else
        un(
          e,
          l,
          a,
          vl(e)
        );
    } catch (E) {
      un(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: E },
        vl()
      );
    } finally {
      D.p = i, c !== null && s.types !== null && (c.types = s.types), S.T = c;
    }
  }
  function Mm() {
  }
  function xc(e, l, t, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Yr(e).queue;
    Br(
      e,
      n,
      l,
      Y,
      t === null ? Mm : function() {
        return Gr(e), t(a);
      }
    );
  }
  function Yr(e) {
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
  function Gr(e) {
    var l = Yr(e);
    l.next === null && (l = e.alternate.memoizedState), un(
      e,
      l.next.queue,
      {},
      vl()
    );
  }
  function jc() {
    return Qe(zn);
  }
  function Xr() {
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
          a !== null && (tl(a, l, t), en(a, l, t)), l = { cache: $u() }, e.payload = l;
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
    }, gi(e) ? Lr(l, t) : (t = Yu(e, l, t, a), t !== null && (tl(t, e, a), Vr(t, l, a)));
  }
  function Zr(e, l, t) {
    var a = vl();
    un(e, l, t, a);
  }
  function un(e, l, t, a) {
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
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = l.lastRenderedReducer, i !== null))
        try {
          var c = l.lastRenderedState, s = i(c, t);
          if (n.hasEagerState = !0, n.eagerState = s, fl(s, c))
            return Fn(e, l, n, 0), ge === null && Wn(), !1;
        } catch {
        }
      if (t = Yu(e, l, n, a), t !== null)
        return tl(t, e, a), Vr(t, l, a), !0;
    }
    return !1;
  }
  function bc(e, l, t, a) {
    if (a = {
      lane: 2,
      revertLane: Pc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gi(e)) {
      if (l) throw Error(r(479));
    } else
      l = Yu(
        e,
        t,
        a,
        2
      ), l !== null && tl(l, e, 2);
  }
  function gi(e) {
    var l = e.alternate;
    return e === k || l !== null && l === k;
  }
  function Lr(e, l) {
    pa = ri = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function Vr(e, l, t) {
    if ((t & 4194048) !== 0) {
      var a = l.lanes;
      a &= e.pendingLanes, t |= a, l.lanes = t, ks(e, t);
    }
  }
  var cn = {
    readContext: Qe,
    use: hi,
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
  cn.useEffectEvent = Se;
  var wr = {
    readContext: Qe,
    use: hi,
    useCallback: function(e, l) {
      return ke().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: Qe,
    useEffect: Tr,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, vi(
        4194308,
        4,
        Cr.bind(null, l, e),
        t
      );
    },
    useLayoutEffect: function(e, l) {
      return vi(4194308, 4, e, l);
    },
    useInsertionEffect: function(e, l) {
      vi(4, 2, e, l);
    },
    useMemo: function(e, l) {
      var t = ke();
      l = l === void 0 ? null : l;
      var a = e();
      if (wt) {
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
        if (wt) {
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
      e = mc(e);
      var l = e.queue, t = Zr.bind(null, k, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: gc,
    useDeferredValue: function(e, l) {
      var t = ke();
      return pc(t, e, l);
    },
    useTransition: function() {
      var e = mc(!1);
      return e = Br.bind(
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
        if (t = l(), ge === null)
          throw Error(r(349));
        (le & 127) !== 0 || or(a, l, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: l };
      return n.queue = i, Tr(mr.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, ja(
        9,
        { destroy: void 0 },
        hr.bind(
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
      var e = ke(), l = ge.identifierPrefix;
      if (ne) {
        var t = Rl, a = Ul;
        t = (a & ~(1 << 32 - sl(a) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = di++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = _m++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: jc,
    useFormState: zr,
    useActionState: zr,
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
      return l.queue = t, l = bc.bind(
        null,
        k,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: dc,
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
  }, Sc = {
    readContext: Qe,
    use: hi,
    useCallback: Rr,
    useContext: Qe,
    useEffect: yc,
    useImperativeHandle: Ur,
    useInsertionEffect: Or,
    useLayoutEffect: Dr,
    useMemo: Hr,
    useReducer: mi,
    useRef: Er,
    useState: function() {
      return mi(Kl);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, l) {
      var t = Ae();
      return qr(
        t,
        he.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = mi(Kl)[0], l = Ae().memoizedState;
      return [
        typeof e == "boolean" ? e : nn(e),
        l
      ];
    },
    useSyncExternalStore: dr,
    useId: Xr,
    useHostTransitionStatus: jc,
    useFormState: _r,
    useActionState: _r,
    useOptimistic: function(e, l) {
      var t = Ae();
      return gr(t, he, e, l);
    },
    useMemoCache: dc,
    useCacheRefresh: Qr
  };
  Sc.useEffectEvent = Mr;
  var Kr = {
    readContext: Qe,
    use: hi,
    useCallback: Rr,
    useContext: Qe,
    useEffect: yc,
    useImperativeHandle: Ur,
    useInsertionEffect: Or,
    useLayoutEffect: Dr,
    useMemo: Hr,
    useReducer: hc,
    useRef: Er,
    useState: function() {
      return hc(Kl);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, l) {
      var t = Ae();
      return he === null ? pc(t, e, l) : qr(
        t,
        he.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = hc(Kl)[0], l = Ae().memoizedState;
      return [
        typeof e == "boolean" ? e : nn(e),
        l
      ];
    },
    useSyncExternalStore: dr,
    useId: Xr,
    useHostTransitionStatus: jc,
    useFormState: Ar,
    useActionState: Ar,
    useOptimistic: function(e, l) {
      var t = Ae();
      return he !== null ? gr(t, he, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: dc,
    useCacheRefresh: Qr
  };
  Kr.useEffectEvent = Mr;
  function zc(e, l, t, a) {
    l = e.memoizedState, t = t(a, l), t = t == null ? l : U({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var _c = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n = ot(a);
      n.payload = l, t != null && (n.callback = t), l = ht(e, n, a), l !== null && (tl(l, e, a), en(l, e, a));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n = ot(a);
      n.tag = 1, n.payload = l, t != null && (n.callback = t), l = ht(e, n, a), l !== null && (tl(l, e, a), en(l, e, a));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = vl(), a = ot(t);
      a.tag = 2, l != null && (a.callback = l), l = ht(e, a, t), l !== null && (tl(l, e, t), en(l, e, t));
    }
  };
  function Jr(e, l, t, a, n, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : l.prototype && l.prototype.isPureReactComponent ? !Ka(t, a) || !Ka(n, i) : !0;
  }
  function kr(e, l, t, a) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, a), l.state !== e && _c.enqueueReplaceState(l, l.state, null);
  }
  function Kt(e, l) {
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
  function $r(e) {
    $n(e);
  }
  function Wr(e) {
    console.error(e);
  }
  function Fr(e) {
    $n(e);
  }
  function pi(e, l) {
    try {
      var t = e.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ir(e, l, t) {
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
    return t = ot(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      pi(e, l);
    }, t;
  }
  function Pr(e) {
    return e = ot(e), e.tag = 3, e;
  }
  function ed(e, l, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        Ir(l, t, a);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Ir(l, t, a), typeof n != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Cm(e, l, t, a, n) {
    if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = t.alternate, l !== null && oa(
        l,
        t,
        n,
        !0
      ), t = dl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return _l === null ? Oi() : t.alternate === null && ze === 0 && (ze = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n, a === ii ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Wc(e, a, n)), !1;
          case 22:
            return t.flags |= 65536, a === ii ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), Wc(e, a, n)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return Wc(e, a, n), Oi(), !1;
    }
    if (ne)
      return l = dl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Vu && (e = Error(r(422), { cause: a }), $a(jl(e, t)))) : (a !== Vu && (l = Error(r(423), {
        cause: a
      }), $a(
        jl(l, t)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = jl(a, t), n = Nc(
        e.stateNode,
        a,
        n
      ), lc(e, n), ze !== 4 && (ze = 2)), !1;
    var i = Error(r(520), { cause: a });
    if (i = jl(i, t), vn === null ? vn = [i] : vn.push(i), ze !== 4 && (ze = 2), l === null) return !0;
    a = jl(a, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = n & -n, t.lanes |= e, e = Nc(t.stateNode, a, e), lc(t, e), !1;
        case 1:
          if (l = t.type, i = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (xt === null || !xt.has(i))))
            return t.flags |= 65536, n &= -n, t.lanes |= n, n = Pr(n), ed(
              n,
              e,
              t,
              a
            ), lc(t, n), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Ac = Error(r(461)), Me = !1;
  function Ze(e, l, t, a) {
    l.child = e === null ? nr(l, null, t, a) : Vt(
      l,
      e.child,
      t,
      a
    );
  }
  function ld(e, l, t, a, n) {
    t = t.render;
    var i = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return Xt(l), a = cc(
      e,
      l,
      t,
      c,
      i,
      n
    ), s = sc(), e !== null && !Me ? (fc(e, l, n), Jl(e, l, n)) : (ne && s && Zu(l), l.flags |= 1, Ze(e, l, a, n), l.child);
  }
  function td(e, l, t, a, n) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" && !Gu(i) && i.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = i, ad(
        e,
        l,
        i,
        a,
        n
      )) : (e = Pn(
        t.type,
        null,
        a,
        l,
        l.mode,
        n
      ), e.ref = l.ref, e.return = l, l.child = e);
    }
    if (i = e.child, !Rc(e, n)) {
      var c = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ka, t(c, a) && e.ref === l.ref)
        return Jl(e, l, n);
    }
    return l.flags |= 1, e = Ql(i, a), e.ref = l.ref, e.return = l, l.child = e;
  }
  function ad(e, l, t, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ka(i, a) && e.ref === l.ref)
        if (Me = !1, l.pendingProps = a = i, Rc(e, n))
          (e.flags & 131072) !== 0 && (Me = !0);
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
  function nd(e, l, t, a) {
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
        return id(
          e,
          l,
          i,
          t,
          a
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ai(
          l,
          i !== null ? i.cachePool : null
        ), i !== null ? cr(l, i) : ac(), sr(l);
      else
        return a = l.lanes = 536870912, id(
          e,
          l,
          i !== null ? i.baseLanes | t : t,
          t,
          a
        );
    } else
      i !== null ? (ai(l, i.cachePool), cr(l, i), vt(), l.memoizedState = null) : (e !== null && ai(l, null), ac(), vt());
    return Ze(e, l, n, t), l.child;
  }
  function sn(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function id(e, l, t, a, n) {
    var i = Fu();
    return i = i === null ? null : { parent: Ee._currentValue, pool: i }, l.memoizedState = {
      baseLanes: t,
      cachePool: i
    }, e !== null && ai(l, null), ac(), sr(l), e !== null && oa(e, l, a, !0), l.childLanes = n, null;
  }
  function xi(e, l) {
    return l = bi(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function ud(e, l, t) {
    return Vt(l, e.child, null, t), e = xi(l, l.pendingProps), e.flags |= 2, ol(l), l.memoizedState = null, e;
  }
  function Um(e, l, t) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (ne) {
        if (a.mode === "hidden")
          return e = xi(l, a), l.lanes = 536870912, sn(null, e);
        if (ic(l), (e = pe) ? (e = xo(
          e,
          zl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ct !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, Xe = l, pe = null)) : e = null, e === null) throw ft(l);
        return l.lanes = 536870912, null;
      }
      return xi(l, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (ic(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = ud(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Me || oa(e, l, t, !1), n = (t & e.childLanes) !== 0, Me || n) {
        if (a = ge, a !== null && (c = $s(a, t), c !== 0 && c !== i.retryLane))
          throw i.retryLane = c, qt(e, c), tl(a, e, c), Ac;
        Oi(), l = ud(
          e,
          l,
          t
        );
      } else
        e = i.treeContext, pe = Nl(c.nextSibling), Xe = l, ne = !0, st = null, zl = !1, e !== null && Kf(l, e), l = xi(l, a), l.flags |= 4096;
      return l;
    }
    return e = Ql(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function ji(e, l) {
    var t = l.ref;
    if (t === null)
      e !== null && e.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function Ec(e, l, t, a, n) {
    return Xt(l), t = cc(
      e,
      l,
      t,
      a,
      void 0,
      n
    ), a = sc(), e !== null && !Me ? (fc(e, l, n), Jl(e, l, n)) : (ne && a && Zu(l), l.flags |= 1, Ze(e, l, t, n), l.child);
  }
  function cd(e, l, t, a, n, i) {
    return Xt(l), l.updateQueue = null, t = rr(
      l,
      a,
      t,
      n
    ), fr(e), a = sc(), e !== null && !Me ? (fc(e, l, i), Jl(e, l, i)) : (ne && a && Zu(l), l.flags |= 1, Ze(e, l, t, i), l.child);
  }
  function sd(e, l, t, a, n) {
    if (Xt(l), l.stateNode === null) {
      var i = sa, c = t.contextType;
      typeof c == "object" && c !== null && (i = Qe(c)), i = new t(a, i), l.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = _c, l.stateNode = i, i._reactInternals = l, i = l.stateNode, i.props = a, i.state = l.memoizedState, i.refs = {}, Pu(l), c = t.contextType, i.context = typeof c == "object" && c !== null ? Qe(c) : sa, i.state = l.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (zc(
        l,
        t,
        c,
        a
      ), i.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && _c.enqueueReplaceState(i, i.state, null), tn(l, a, i, n), ln(), i.state = l.memoizedState), typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = l.stateNode;
      var s = l.memoizedProps, d = Kt(t, s);
      i.props = d;
      var p = i.context, z = t.contextType;
      c = sa, typeof z == "object" && z !== null && (c = Qe(z));
      var E = t.getDerivedStateFromProps;
      z = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || p !== c) && kr(
        l,
        i,
        a,
        c
      ), dt = !1;
      var x = l.memoizedState;
      i.state = x, tn(l, a, i, n), ln(), p = l.memoizedState, s || x !== p || dt ? (typeof E == "function" && (zc(
        l,
        t,
        E,
        a
      ), p = l.memoizedState), (d = dt || Jr(
        l,
        t,
        d,
        a,
        x,
        p,
        c
      )) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = p), i.props = a, i.state = p, i.context = c, a = d) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      i = l.stateNode, ec(e, l), c = l.memoizedProps, z = Kt(t, c), i.props = z, E = l.pendingProps, x = i.context, p = t.contextType, d = sa, typeof p == "object" && p !== null && (d = Qe(p)), s = t.getDerivedStateFromProps, (p = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== E || x !== d) && kr(
        l,
        i,
        a,
        d
      ), dt = !1, x = l.memoizedState, i.state = x, tn(l, a, i, n), ln();
      var b = l.memoizedState;
      c !== E || x !== b || dt || e !== null && e.dependencies !== null && li(e.dependencies) ? (typeof s == "function" && (zc(
        l,
        t,
        s,
        a
      ), b = l.memoizedState), (z = dt || Jr(
        l,
        t,
        z,
        a,
        x,
        b,
        d
      ) || e !== null && e.dependencies !== null && li(e.dependencies)) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, b, d), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        b,
        d
      )), typeof i.componentDidUpdate == "function" && (l.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), i.props = a, i.state = b, i.context = d, a = z) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (l.flags |= 1024), a = !1);
    }
    return i = a, ji(e, l), a = (l.flags & 128) !== 0, i || a ? (i = l.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : i.render(), l.flags |= 1, e !== null && a ? (l.child = Vt(
      l,
      e.child,
      null,
      n
    ), l.child = Vt(
      l,
      null,
      t,
      n
    )) : Ze(e, l, t, n), l.memoizedState = i.state, e = l.child) : e = Jl(
      e,
      l,
      n
    ), e;
  }
  function fd(e, l, t, a) {
    return Yt(), l.flags |= 256, Ze(e, l, t, a), l.child;
  }
  var Tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: If() };
  }
  function Oc(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= ml), e;
  }
  function rd(e, l, t) {
    var a = l.pendingProps, n = !1, i = (l.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (Ne.current & 2) !== 0), c && (n = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (ne) {
        if (n ? mt(l) : vt(), (e = pe) ? (e = xo(
          e,
          zl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: ct !== null ? { id: Ul, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Lf(e), t.return = l, l.child = t, Xe = l, pe = null)) : e = null, e === null) throw ft(l);
        return os(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (vt(), n = l.mode, s = bi(
        { mode: "hidden", children: s },
        n
      ), a = Bt(
        a,
        n,
        t,
        null
      ), s.return = l, a.return = l, s.sibling = a, l.child = s, a = l.child, a.memoizedState = Mc(t), a.childLanes = Oc(
        e,
        c,
        t
      ), l.memoizedState = Tc, sn(null, a)) : (mt(l), Dc(l, s));
    }
    var d = e.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (i)
        l.flags & 256 ? (mt(l), l.flags &= -257, l = Cc(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (vt(), l.child = e.child, l.flags |= 128, l = null) : (vt(), s = a.fallback, n = l.mode, a = bi(
          { mode: "visible", children: a.children },
          n
        ), s = Bt(
          s,
          n,
          t,
          null
        ), s.flags |= 2, a.return = l, s.return = l, a.sibling = s, l.child = a, Vt(
          l,
          e.child,
          null,
          t
        ), a = l.child, a.memoizedState = Mc(t), a.childLanes = Oc(
          e,
          c,
          t
        ), l.memoizedState = Tc, l = sn(null, a));
      else if (mt(l), os(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var p = c.dgst;
        c = p, a = Error(r(419)), a.stack = "", a.digest = c, $a({ value: a, source: null, stack: null }), l = Cc(
          e,
          l,
          t
        );
      } else if (Me || oa(e, l, t, !1), c = (t & e.childLanes) !== 0, Me || c) {
        if (c = ge, c !== null && (a = $s(c, t), a !== 0 && a !== d.retryLane))
          throw d.retryLane = a, qt(e, a), tl(c, e, a), Ac;
        ds(s) || Oi(), l = Cc(
          e,
          l,
          t
        );
      } else
        ds(s) ? (l.flags |= 192, l.child = e.child, l = null) : (e = d.treeContext, pe = Nl(
          s.nextSibling
        ), Xe = l, ne = !0, st = null, zl = !1, e !== null && Kf(l, e), l = Dc(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (vt(), s = a.fallback, n = l.mode, d = e.child, p = d.sibling, a = Ql(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 65011712, p !== null ? s = Ql(
      p,
      s
    ) : (s = Bt(
      s,
      n,
      t,
      null
    ), s.flags |= 2), s.return = l, a.return = l, a.sibling = s, l.child = a, sn(null, a), a = l.child, s = e.child.memoizedState, s === null ? s = Mc(t) : (n = s.cachePool, n !== null ? (d = Ee._currentValue, n = n.parent !== d ? { parent: d, pool: d } : n) : n = If(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Oc(
      e,
      c,
      t
    ), l.memoizedState = Tc, sn(e.child, a)) : (mt(l), t = e.child, e = t.sibling, t = Ql(t, {
      mode: "visible",
      children: a.children
    }), t.return = l, t.sibling = null, e !== null && (c = l.deletions, c === null ? (l.deletions = [e], l.flags |= 16) : c.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function Dc(e, l) {
    return l = bi(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function bi(e, l) {
    return e = rl(22, e, null, l), e.lanes = 0, e;
  }
  function Cc(e, l, t) {
    return Vt(l, e.child, null, t), e = Dc(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function dd(e, l, t) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l), Ju(e.return, l, t);
  }
  function Uc(e, l, t, a, n, i) {
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
  function od(e, l, t) {
    var a = l.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var c = Ne.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, C(Ne, c), Ze(e, l, a, t), a = ne ? ka : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && dd(e, t, l);
        else if (e.tag === 19)
          dd(e, t, l);
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
          e = t.alternate, e !== null && fi(e) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = l.child, l.child = null) : (n = t.sibling, t.sibling = null), Uc(
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
          if (e = n.alternate, e !== null && fi(e) === null) {
            l.child = n;
            break;
          }
          e = n.sibling, n.sibling = t, t = n, n = e;
        }
        Uc(
          l,
          !0,
          t,
          null,
          i,
          a
        );
        break;
      case "together":
        Uc(
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
    if (e !== null && (l.dependencies = e.dependencies), pt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (oa(
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
      for (e = l.child, t = Ql(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Ql(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function Rc(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && li(e)));
  }
  function Rm(e, l, t) {
    switch (l.tag) {
      case 3:
        L(l, l.stateNode.containerInfo), rt(l, Ee, e.memoizedState.cache), Yt();
        break;
      case 27:
      case 5:
        Mt(l);
        break;
      case 4:
        L(l, l.stateNode.containerInfo);
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
          return l.flags |= 128, ic(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (mt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? rd(e, l, t) : (mt(l), e = Jl(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        mt(l);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (t & l.childLanes) !== 0, a || (oa(
          e,
          l,
          t,
          !1
        ), a = (t & l.childLanes) !== 0), n) {
          if (a)
            return od(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), C(Ne, Ne.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, nd(
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
  function hd(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        Me = !0;
      else {
        if (!Rc(e, t) && (l.flags & 128) === 0)
          return Me = !1, Rm(
            e,
            l,
            t
          );
        Me = (e.flags & 131072) !== 0;
      }
    else
      Me = !1, ne && (l.flags & 1048576) !== 0 && wf(l, ka, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var a = l.pendingProps;
          if (e = Zt(l.elementType), l.type = e, typeof e == "function")
            Gu(e) ? (a = Kt(e, a), l.tag = 1, l = sd(
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
              if (n === Ke) {
                l.tag = 11, l = ld(
                  null,
                  l,
                  e,
                  a,
                  t
                );
                break e;
              } else if (n === W) {
                l.tag = 14, l = td(
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
        return Ec(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return a = l.type, n = Kt(
          a,
          l.pendingProps
        ), sd(
          e,
          l,
          a,
          n,
          t
        );
      case 3:
        e: {
          if (L(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = l.pendingProps;
          var i = l.memoizedState;
          n = i.element, ec(e, l), tn(l, a, null, t);
          var c = l.memoizedState;
          if (a = c.cache, rt(l, Ee, a), a !== i.cache && ku(
            l,
            [Ee],
            t,
            !0
          ), ln(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = i, l.memoizedState = i, l.flags & 256) {
              l = fd(
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
              ), $a(n), l = fd(
                e,
                l,
                a,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, pe = Nl(e.firstChild), Xe = l, ne = !0, st = null, zl = !0, t = nr(
                l,
                null,
                a,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Yt(), a === n) {
              l = Jl(
                e,
                l,
                t
              );
              break e;
            }
            Ze(e, l, a, t);
          }
          l = l.child;
        }
        return l;
      case 26:
        return ji(e, l), e === null ? (t = No(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : ne || (t = l.type, e = l.pendingProps, a = Bi(
          F.current
        ).createElement(t), a[Ge] = l, a[We] = e, Le(a, t, e), He(a), l.stateNode = a) : l.memoizedState = No(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Mt(l), e === null && ne && (a = l.stateNode = So(
          l.type,
          l.pendingProps,
          F.current
        ), Xe = l, zl = !0, n = pe, zt(l.type) ? (hs = n, pe = Nl(a.firstChild)) : pe = n), Ze(
          e,
          l,
          l.pendingProps.children,
          t
        ), ji(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && ne && ((n = a = pe) && (a = rv(
          a,
          l.type,
          l.pendingProps,
          zl
        ), a !== null ? (l.stateNode = a, Xe = l, pe = Nl(a.firstChild), zl = !1, n = !0) : n = !1), n || ft(l)), Mt(l), n = l.type, i = l.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, ss(n, i) ? a = null : c !== null && ss(n, c) && (l.flags |= 32), l.memoizedState !== null && (n = cc(
          e,
          l,
          Nm,
          null,
          null,
          t
        ), zn._currentValue = n), ji(e, l), Ze(e, l, a, t), l.child;
      case 6:
        return e === null && ne && ((e = t = pe) && (t = dv(
          t,
          l.pendingProps,
          zl
        ), t !== null ? (l.stateNode = t, Xe = l, pe = null, e = !0) : e = !1), e || ft(l)), null;
      case 13:
        return rd(e, l, t);
      case 4:
        return L(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, e === null ? l.child = Vt(
          l,
          null,
          a,
          t
        ) : Ze(e, l, a, t), l.child;
      case 11:
        return ld(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 7:
        return Ze(
          e,
          l,
          l.pendingProps,
          t
        ), l.child;
      case 8:
        return Ze(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 12:
        return Ze(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 10:
        return a = l.pendingProps, rt(l, l.type, a.value), Ze(e, l, a.children, t), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Xt(l), n = Qe(n), a = a(n), l.flags |= 1, Ze(e, l, a, t), l.child;
      case 14:
        return td(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return ad(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return od(e, l, t);
      case 31:
        return Um(e, l, t);
      case 22:
        return nd(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return Xt(l), a = Qe(Ee), e === null ? (n = Fu(), n === null && (n = ge, i = $u(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= t), n = i), l.memoizedState = { parent: a, cache: n }, Pu(l), rt(l, Ee, n)) : ((e.lanes & t) !== 0 && (ec(e, l), tn(l, null, null, t), ln()), n = e.memoizedState, i = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), rt(l, Ee, a)) : (a = i.cache, rt(l, Ee, a), a !== n.cache && ku(
          l,
          [Ee],
          t,
          !0
        ))), Ze(
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
  function Hc(e, l, t, a, n) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Xd()) e.flags |= 8192;
        else
          throw Lt = ii, Iu;
    } else e.flags &= -16777217;
  }
  function md(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Oo(l))
      if (Xd()) e.flags |= 8192;
      else
        throw Lt = ii, Iu;
  }
  function Si(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? Ks() : 536870912, e.lanes |= l, _a |= l);
  }
  function fn(e, l) {
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
  function Hm(e, l, t) {
    var a = l.pendingProps;
    switch (Lu(l), l.tag) {
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
        return t = l.stateNode, a = null, e !== null && (a = e.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Vl(Ee), I(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (da(l) ? kl(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, wu())), xe(l), null;
      case 26:
        var n = l.type, i = l.memoizedState;
        return e === null ? (kl(l), i !== null ? (xe(l), md(l, i)) : (xe(l), Hc(
          l,
          n,
          null,
          a,
          t
        ))) : i ? i !== e.memoizedState ? (kl(l), xe(l), md(l, i)) : (xe(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== a && kl(l), xe(l), Hc(
          l,
          n,
          e,
          a,
          t
        )), null;
      case 27:
        if (Un(l), t = F.current, n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xe(l), null;
          }
          e = q.current, da(l) ? Jf(l) : (e = So(n, a, t), l.stateNode = e, kl(l));
        }
        return xe(l), null;
      case 5:
        if (Un(l), n = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xe(l), null;
          }
          if (i = q.current, da(l))
            Jf(l);
          else {
            var c = Bi(
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
            i[Ge] = l, i[We] = a;
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
            e: switch (Le(i, n, a), n) {
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
        return xe(l), Hc(
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
          if (e = F.current, da(l)) {
            if (e = l.stateNode, t = l.memoizedProps, a = null, n = Xe, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ge] = l, e = !!(e.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || ro(e.nodeValue, t)), e || ft(l, !0);
          } else
            e = Bi(e).createTextNode(
              a
            ), e[Ge] = l, l.stateNode = e;
        }
        return xe(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (a = da(l), t !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ge] = l;
            } else
              Yt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xe(l), e = !1;
          } else
            t = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (ol(l), l) : (ol(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return xe(l), null;
      case 13:
        if (a = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = da(l), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ge] = l;
            } else
              Yt(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xe(l), n = !1;
          } else
            n = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (ol(l), l) : (ol(l), null);
        }
        return ol(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = a !== null, e = e !== null && e.memoizedState !== null, t && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), Si(l, l.updateQueue), xe(l), null);
      case 4:
        return I(), e === null && as(l.stateNode.containerInfo), xe(l), null;
      case 10:
        return Vl(l.type), xe(l), null;
      case 19:
        if (A(Ne), a = l.memoizedState, a === null) return xe(l), null;
        if (n = (l.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) fn(a, !1);
          else {
            if (ze !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (i = fi(e), i !== null) {
                  for (l.flags |= 128, fn(a, !1), e = i.updateQueue, l.updateQueue = e, Si(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    Zf(t, e), t = t.sibling;
                  return C(
                    Ne,
                    Ne.current & 1 | 2
                  ), ne && Zl(l, a.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ul() > Ei && (l.flags |= 128, n = !0, fn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = fi(i), e !== null) {
              if (l.flags |= 128, n = !0, e = e.updateQueue, l.updateQueue = e, Si(l, e), fn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ne)
                return xe(l), null;
            } else
              2 * ul() - a.renderingStartTime > Ei && t !== 536870912 && (l.flags |= 128, n = !0, fn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (i.sibling = l.child, l.child = i) : (e = a.last, e !== null ? e.sibling = i : l.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ul(), e.sibling = null, t = Ne.current, C(
          Ne,
          n ? t & 1 | 2 : t & 1
        ), ne && Zl(l, a.treeForkCount), e) : (xe(l), null);
      case 22:
      case 23:
        return ol(l), nc(), a = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (xe(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : xe(l), t = l.updateQueue, t !== null && Si(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== t && (l.flags |= 2048), e !== null && A(Qt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), Vl(Ee), xe(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function qm(e, l) {
    switch (Lu(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return Vl(Ee), I(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Un(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (ol(l), l.alternate === null)
            throw Error(r(340));
          Yt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (ol(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Yt();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return A(Ne), null;
      case 4:
        return I(), null;
      case 10:
        return Vl(l.type), null;
      case 22:
      case 23:
        return ol(l), nc(), e !== null && A(Qt), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return Vl(Ee), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function vd(e, l) {
    switch (Lu(l), l.tag) {
      case 3:
        Vl(Ee), I();
        break;
      case 26:
      case 27:
      case 5:
        Un(l);
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
        A(Ne);
        break;
      case 10:
        Vl(l.type);
        break;
      case 22:
      case 23:
        ol(l), nc(), e !== null && A(Qt);
        break;
      case 24:
        Vl(Ee);
    }
  }
  function rn(e, l) {
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
      oe(l, l.return, s);
    }
  }
  function yt(e, l, t) {
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
        } while (a !== i);
      }
    } catch (z) {
      oe(l, l.return, z);
    }
  }
  function yd(e) {
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
    t.props = Kt(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (a) {
      oe(e, l, a);
    }
  }
  function dn(e, l) {
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
  function pd(e) {
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
  function qc(e, l, t) {
    try {
      var a = e.stateNode;
      nv(a, e.type, t, l), a[We] = l;
    } catch (n) {
      oe(e, e.return, n);
    }
  }
  function xd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zt(e.type) || e.tag === 4;
  }
  function Bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && zt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yc(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = Gl));
    else if (a !== 4 && (a === 27 && zt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (Yc(e, l, t), e = e.sibling; e !== null; )
        Yc(e, l, t), e = e.sibling;
  }
  function zi(e, l, t) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (a !== 4 && (a === 27 && zt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (zi(e, l, t), e = e.sibling; e !== null; )
        zi(e, l, t), e = e.sibling;
  }
  function jd(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var a = e.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Le(l, a, t), l[Ge] = e, l[We] = t;
    } catch (i) {
      oe(e, e.return, i);
    }
  }
  var $l = !1, Oe = !1, Gc = !1, bd = typeof WeakSet == "function" ? WeakSet : Set, qe = null;
  function Bm(e, l) {
    if (e = e.containerInfo, us = Vi, e = Uf(e), Cu(e)) {
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
            var c = 0, s = -1, d = -1, p = 0, z = 0, E = e, x = null;
            l: for (; ; ) {
              for (var b; E !== t || n !== 0 && E.nodeType !== 3 || (s = c + n), E !== i || a !== 0 && E.nodeType !== 3 || (d = c + a), E.nodeType === 3 && (c += E.nodeValue.length), (b = E.firstChild) !== null; )
                x = E, E = b;
              for (; ; ) {
                if (E === e) break l;
                if (x === t && ++p === n && (s = c), x === i && ++z === a && (d = c), (b = E.nextSibling) !== null) break;
                E = x, x = E.parentNode;
              }
              E = b;
            }
            t = s === -1 || d === -1 ? null : { start: s, end: d };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (cs = { focusedElem: e, selectionRange: t }, Vi = !1, qe = l; qe !== null; )
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
                  var H = Kt(
                    t.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    H,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (X) {
                  oe(
                    t,
                    t.return,
                    X
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
            e.return = l.return, qe = e;
            break;
          }
          qe = l.return;
        }
  }
  function Sd(e, l, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fl(e, t), a & 4 && rn(5, t);
        break;
      case 1:
        if (Fl(e, t), a & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (c) {
              oe(t, t.return, c);
            }
          else {
            var n = Kt(
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
              oe(
                t,
                t.return,
                c
              );
            }
          }
        a & 64 && yd(t), a & 512 && dn(t, t.return);
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
          } catch (c) {
            oe(t, t.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && jd(t);
      case 26:
      case 5:
        Fl(e, t), l === null && a & 4 && pd(t), a & 512 && dn(t, t.return);
        break;
      case 12:
        Fl(e, t);
        break;
      case 31:
        Fl(e, t), a & 4 && Nd(e, t);
        break;
      case 13:
        Fl(e, t), a & 4 && Ad(e, t), a & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Km.bind(
          null,
          t
        ), ov(e, t))));
        break;
      case 22:
        if (a = t.memoizedState !== null || $l, !a) {
          l = l !== null && l.memoizedState !== null || Oe, n = $l;
          var i = Oe;
          $l = a, (Oe = l) && !i ? Il(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Fl(e, t), $l = n, Oe = i;
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
    l !== null && (e.alternate = null, zd(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && vu(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Ie = !1;
  function Wl(e, l, t) {
    for (t = t.child; t !== null; )
      _d(e, l, t), t = t.sibling;
  }
  function _d(e, l, t) {
    if (cl && typeof cl.onCommitFiberUnmount == "function")
      try {
        cl.onCommitFiberUnmount(Ra, t);
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
        ), jn(t.stateNode), je = a, Ie = n;
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
            } catch (i) {
              oe(
                t,
                l,
                i
              );
            }
          else
            try {
              je.removeChild(t.stateNode);
            } catch (i) {
              oe(
                t,
                l,
                i
              );
            }
        break;
      case 18:
        je !== null && (Ie ? (e = je, go(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), Ca(e)) : go(je, t.stateNode));
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
        Oe || (Hl(t, l), a = t.stateNode, typeof a.componentWillUnmount == "function" && gd(
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
  function Nd(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ca(e);
      } catch (t) {
        oe(l, l.return, t);
      }
    }
  }
  function Ad(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ca(e);
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
        return l === null && (l = e.stateNode = new bd()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new bd()), l;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function _i(e, l) {
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
        var n = t[a], i = e, c = l, s = c;
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
        _d(i, c, n), je = null, Ie = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Ed(l, e), l = l.sibling;
  }
  var Ol = null;
  function Ed(e, l) {
    var t = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pe(l, e), el(e), a & 4 && (yt(3, e, e.return), rn(3, e), yt(5, e, e.return));
        break;
      case 1:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), a & 64 && $l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
        break;
      case 26:
        var n = Ol;
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), a & 4) {
          var i = t !== null ? t.memoizedState : null;
          if (a = e.memoizedState, t === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, t = e.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Ba] || i[Ge] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Le(i, a, t), i[Ge] = e, He(i), a = i;
                      break e;
                    case "link":
                      var c = To(
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
                      i = n.createElement(a), Le(i, a, t), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (c = To(
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
                      i = n.createElement(a), Le(i, a, t), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  i[Ge] = e, He(i), a = i;
                }
                e.stateNode = a;
              } else
                Mo(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Eo(
                n,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : i.count--, a === null ? Mo(
              n,
              e.type,
              e.stateNode
            ) : Eo(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && qc(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), t !== null && a & 4 && qc(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (Pe(l, e), el(e), a & 512 && (Oe || t === null || Hl(t, t.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            la(n, "");
          } catch (H) {
            oe(e, e.return, H);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, qc(
          e,
          n,
          t !== null ? t.memoizedProps : n
        )), a & 1024 && (Gc = !0);
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
        if (Xi = null, n = Ol, Ol = Yi(l.containerInfo), Pe(l, e), Ol = n, el(e), a & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ca(l.containerInfo);
          } catch (H) {
            oe(e, e.return, H);
          }
        Gc && (Gc = !1, Td(e));
        break;
      case 4:
        a = Ol, Ol = Yi(
          e.stateNode.containerInfo
        ), Pe(l, e), el(e), Ol = a;
        break;
      case 12:
        Pe(l, e), el(e);
        break;
      case 31:
        Pe(l, e), el(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _i(e, a)));
        break;
      case 13:
        Pe(l, e), el(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ai = ul()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _i(e, a)));
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
                  if (i = d.stateNode, n)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = d.stateNode;
                    var E = d.memoizedProps.style, x = E != null && E.hasOwnProperty("display") ? E.display : null;
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
                  n ? po(b, !0) : po(d.stateNode, !1);
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
        a & 4 && (a = e.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, _i(e, t))));
        break;
      case 19:
        Pe(l, e), el(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _i(e, a)));
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
          if (xd(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode, i = Bc(e);
            zi(e, i, n);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (la(c, ""), t.flags &= -33);
            var s = Bc(e);
            zi(e, s, c);
            break;
          case 3:
          case 4:
            var d = t.stateNode.containerInfo, p = Bc(e);
            Yc(
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
  function Td(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        Td(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function Fl(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Sd(e, l.alternate, l), l = l.sibling;
  }
  function Jt(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yt(4, l, l.return), Jt(l);
          break;
        case 1:
          Hl(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && gd(
            l,
            l.return,
            t
          ), Jt(l);
          break;
        case 27:
          jn(l.stateNode);
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
      var a = l.alternate, n = e, i = l, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Il(
            n,
            i,
            t
          ), rn(4, i);
          break;
        case 1:
          if (Il(
            n,
            i,
            t
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (p) {
              oe(a, a.return, p);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  ir(d[n], s);
            } catch (p) {
              oe(a, a.return, p);
            }
          }
          t && c & 64 && yd(i), dn(i, i.return);
          break;
        case 27:
          jd(i);
        case 26:
        case 5:
          Il(
            n,
            i,
            t
          ), t && a === null && c & 4 && pd(i), dn(i, i.return);
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
          ), t && c & 4 && Nd(n, i);
          break;
        case 13:
          Il(
            n,
            i,
            t
          ), t && c & 4 && Ad(n, i);
          break;
        case 22:
          i.memoizedState === null && Il(
            n,
            i,
            t
          ), dn(i, i.return);
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
  function Xc(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Wa(t));
  }
  function Qc(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Wa(e));
  }
  function Dl(e, l, t, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Md(
          e,
          l,
          t,
          a
        ), l = l.sibling;
  }
  function Md(e, l, t, a) {
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
        ), n & 2048 && rn(9, l);
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
        ), n & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Wa(e)));
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
            var i = l.memoizedProps, c = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              c,
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
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? i._visibility & 2 ? Dl(
          e,
          l,
          t,
          a
        ) : on(e, l) : i._visibility & 2 ? Dl(
          e,
          l,
          t,
          a
        ) : (i._visibility |= 2, ba(
          e,
          l,
          t,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Xc(c, l);
        break;
      case 24:
        Dl(
          e,
          l,
          t,
          a
        ), n & 2048 && Qc(l.alternate, l);
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
  function ba(e, l, t, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var i = e, c = l, s = t, d = a, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            i,
            c,
            s,
            d,
            n
          ), rn(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null ? z._visibility & 2 ? ba(
            i,
            c,
            s,
            d,
            n
          ) : on(
            i,
            c
          ) : (z._visibility |= 2, ba(
            i,
            c,
            s,
            d,
            n
          )), n && p & 2048 && Xc(
            c.alternate,
            c
          );
          break;
        case 24:
          ba(
            i,
            c,
            s,
            d,
            n
          ), n && p & 2048 && Qc(c.alternate, c);
          break;
        default:
          ba(
            i,
            c,
            s,
            d,
            n
          );
      }
      l = l.sibling;
    }
  }
  function on(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            on(t, a), n & 2048 && Xc(
              a.alternate,
              a
            );
            break;
          case 24:
            on(t, a), n & 2048 && Qc(a.alternate, a);
            break;
          default:
            on(t, a);
        }
        l = l.sibling;
      }
  }
  var hn = 8192;
  function Sa(e, l, t) {
    if (e.subtreeFlags & hn)
      for (e = e.child; e !== null; )
        Od(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function Od(e, l, t) {
    switch (e.tag) {
      case 26:
        Sa(
          e,
          l,
          t
        ), e.flags & hn && e.memoizedState !== null && _v(
          t,
          Ol,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Sa(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var a = Ol;
        Ol = Yi(e.stateNode.containerInfo), Sa(
          e,
          l,
          t
        ), Ol = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = hn, hn = 16777216, Sa(
          e,
          l,
          t
        ), hn = a) : Sa(
          e,
          l,
          t
        ));
        break;
      default:
        Sa(
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
  function mn(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          qe = a, Ud(
            a,
            e
          );
        }
      Dd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Cd(e), e = e.sibling;
  }
  function Cd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        mn(e), e.flags & 2048 && yt(9, e, e.return);
        break;
      case 3:
        mn(e);
        break;
      case 12:
        mn(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, Ni(e)) : mn(e);
        break;
      default:
        mn(e);
    }
  }
  function Ni(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var a = l[t];
          qe = a, Ud(
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
          yt(8, l, l.return), Ni(l);
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
  function Ud(e, l) {
    for (; qe !== null; ) {
      var t = qe;
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
          Wa(t.memoizedState.cache);
      }
      if (a = t.child, a !== null) a.return = t, qe = a;
      else
        e: for (t = e; qe !== null; ) {
          a = qe;
          var n = a.sibling, i = a.return;
          if (zd(a), a === t) {
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
  var Gm = {
    getCacheForType: function(e) {
      var l = Qe(Ee), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return Qe(Ee).controller.signal;
    }
  }, Xm = typeof WeakMap == "function" ? WeakMap : Map, fe = 0, ge = null, P = null, le = 0, de = 0, hl = null, gt = !1, za = !1, Zc = !1, Pl = 0, ze = 0, pt = 0, kt = 0, Lc = 0, ml = 0, _a = 0, vn = null, ll = null, Vc = !1, Ai = 0, Rd = 0, Ei = 1 / 0, Ti = null, xt = null, Ue = 0, jt = null, Na = null, et = 0, wc = 0, Kc = null, Hd = null, yn = 0, Jc = null;
  function vl() {
    return (fe & 2) !== 0 && le !== 0 ? le & -le : S.T !== null ? Pc() : Ws();
  }
  function qd() {
    if (ml === 0)
      if ((le & 536870912) === 0 || ne) {
        var e = qn;
        qn <<= 1, (qn & 3932160) === 0 && (qn = 262144), ml = e;
      } else ml = 536870912;
    return e = dl.current, e !== null && (e.flags |= 32), ml;
  }
  function tl(e, l, t) {
    (e === ge && (de === 2 || de === 9) || e.cancelPendingCommit !== null) && (Aa(e, 0), bt(
      e,
      le,
      ml,
      !1
    )), qa(e, t), ((fe & 2) === 0 || e !== ge) && (e === ge && ((fe & 2) === 0 && (kt |= t), ze === 4 && bt(
      e,
      le,
      ml,
      !1
    )), ql(e));
  }
  function Bd(e, l, t) {
    if ((fe & 6) !== 0) throw Error(r(327));
    var a = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || Ha(e, l), n = a ? Lm(e, l) : $c(e, l, !0), i = a;
    do {
      if (n === 0) {
        za && !a && bt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, i && !Qm(t)) {
          n = $c(e, l, !1), i = !1;
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
              n = vn;
              var d = s.current.memoizedState.isDehydrated;
              if (d && (Aa(s, c).flags |= 256), c = $c(
                s,
                c,
                !1
              ), c !== 2) {
                if (Zc && !d) {
                  s.errorRecoveryDisabledLanes |= i, kt |= i, n = 4;
                  break e;
                }
                i = ll, ll = n, i !== null && (ll === null ? ll = i : ll.push.apply(
                  ll,
                  i
                ));
              }
              n = c;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Aa(e, 0), bt(e, l, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
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
                !gt
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
          if ((l & 62914560) === l && (n = Ai + 300 - ul(), 10 < n)) {
            if (bt(
              a,
              l,
              ml,
              !gt
            ), Yn(a, 0, !0) !== 0) break e;
            et = l, a.timeoutHandle = vo(
              Yd.bind(
                null,
                a,
                t,
                ll,
                Ti,
                Vc,
                l,
                ml,
                kt,
                _a,
                gt,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Yd(
            a,
            t,
            ll,
            Ti,
            Vc,
            l,
            ml,
            kt,
            _a,
            gt,
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
  function Yd(e, l, t, a, n, i, c, s, d, p, z, E, x, b) {
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
      }, Od(
        l,
        i,
        E
      );
      var H = (i & 62914560) === i ? Ai - ul() : (i & 4194048) === i ? Rd - ul() : 0;
      if (H = Nv(
        E,
        H
      ), H !== null) {
        et = i, e.cancelPendingCommit = H(
          Kd.bind(
            null,
            e,
            l,
            i,
            t,
            a,
            n,
            c,
            s,
            d,
            z,
            E,
            null,
            x,
            b
          )
        ), bt(e, i, c, !p);
        return;
      }
    }
    Kd(
      e,
      l,
      i,
      t,
      a,
      n,
      c,
      s,
      d
    );
  }
  function Qm(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var a = 0; a < t.length; a++) {
          var n = t[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!fl(i(), n)) return !1;
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
    l &= ~Lc, l &= ~kt, e.suspendedLanes |= l, e.pingedLanes &= ~l, a && (e.warmLanes |= l), a = e.expirationTimes;
    for (var n = l; 0 < n; ) {
      var i = 31 - sl(n), c = 1 << i;
      a[i] = -1, n &= ~c;
    }
    t !== 0 && Js(e, t, l);
  }
  function Mi() {
    return (fe & 6) === 0 ? (gn(0), !1) : !0;
  }
  function kc() {
    if (P !== null) {
      if (de === 0)
        var e = P.return;
      else
        e = P, Ll = Gt = null, rc(e), ya = null, Ia = 0, e = P;
      for (; e !== null; )
        vd(e.alternate, e), e = e.return;
      P = null;
    }
  }
  function Aa(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, cv(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), et = 0, kc(), ge = e, P = t = Ql(e.current, null), le = l, de = 0, hl = null, gt = !1, za = Ha(e, l), Zc = !1, _a = ml = Lc = kt = pt = ze = 0, ll = vn = null, Vc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= l; 0 < a; ) {
        var n = 31 - sl(a), i = 1 << n;
        l |= e[n], a &= ~i;
      }
    return Pl = l, Wn(), t;
  }
  function Gd(e, l) {
    k = null, S.H = cn, l === va || l === ni ? (l = lr(), de = 3) : l === Iu ? (l = lr(), de = 4) : de = l === Ac ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, hl = l, P === null && (ze = 1, pi(
      e,
      jl(l, e.current)
    ));
  }
  function Xd() {
    var e = dl.current;
    return e === null ? !0 : (le & 4194048) === le ? _l === null : (le & 62914560) === le || (le & 536870912) !== 0 ? e === _l : !1;
  }
  function Qd() {
    var e = S.H;
    return S.H = cn, e === null ? cn : e;
  }
  function Zd() {
    var e = S.A;
    return S.A = Gm, e;
  }
  function Oi() {
    ze = 4, gt || (le & 4194048) !== le && dl.current !== null || (za = !0), (pt & 134217727) === 0 && (kt & 134217727) === 0 || ge === null || bt(
      ge,
      le,
      ml,
      !1
    );
  }
  function $c(e, l, t) {
    var a = fe;
    fe |= 2;
    var n = Qd(), i = Zd();
    (ge !== e || le !== l) && (Ti = null, Aa(e, l)), l = !1;
    var c = ze;
    e: do
      try {
        if (de !== 0 && P !== null) {
          var s = P, d = hl;
          switch (de) {
            case 8:
              kc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              dl.current === null && (l = !0);
              var p = de;
              if (de = 0, hl = null, Ea(e, s, d, p), t && za) {
                c = 0;
                break e;
              }
              break;
            default:
              p = de, de = 0, hl = null, Ea(e, s, d, p);
          }
        }
        Zm(), c = ze;
        break;
      } catch (z) {
        Gd(e, z);
      }
    while (!0);
    return l && e.shellSuspendCounter++, Ll = Gt = null, fe = a, S.H = n, S.A = i, P === null && (ge = null, le = 0, Wn()), c;
  }
  function Zm() {
    for (; P !== null; ) Ld(P);
  }
  function Lm(e, l) {
    var t = fe;
    fe |= 2;
    var a = Qd(), n = Zd();
    ge !== e || le !== l ? (Ti = null, Ei = ul() + 500, Aa(e, l)) : za = Ha(
      e,
      l
    );
    e: do
      try {
        if (de !== 0 && P !== null) {
          l = P;
          var i = hl;
          l: switch (de) {
            case 1:
              de = 0, hl = null, Ea(e, l, i, 1);
              break;
            case 2:
            case 9:
              if (Pf(i)) {
                de = 0, hl = null, Vd(l);
                break;
              }
              l = function() {
                de !== 2 && de !== 9 || ge !== e || (de = 7), ql(e);
              }, i.then(l, l);
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              Pf(i) ? (de = 0, hl = null, Vd(l)) : (de = 0, hl = null, Ea(e, l, i, 7));
              break;
            case 5:
              var c = null;
              switch (P.tag) {
                case 26:
                  c = P.memoizedState;
                case 5:
                case 27:
                  var s = P;
                  if (c ? Oo(c) : s.stateNode.complete) {
                    de = 0, hl = null;
                    var d = s.sibling;
                    if (d !== null) P = d;
                    else {
                      var p = s.return;
                      p !== null ? (P = p, Di(p)) : P = null;
                    }
                    break l;
                  }
              }
              de = 0, hl = null, Ea(e, l, i, 5);
              break;
            case 6:
              de = 0, hl = null, Ea(e, l, i, 6);
              break;
            case 8:
              kc(), ze = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Vm();
        break;
      } catch (z) {
        Gd(e, z);
      }
    while (!0);
    return Ll = Gt = null, S.H = a, S.A = n, fe = t, P !== null ? 0 : (ge = null, le = 0, Wn(), ze);
  }
  function Vm() {
    for (; P !== null && !hh(); )
      Ld(P);
  }
  function Ld(e) {
    var l = hd(e.alternate, e, Pl);
    e.memoizedProps = e.pendingProps, l === null ? Di(e) : P = l;
  }
  function Vd(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = cd(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          le
        );
        break;
      case 11:
        l = cd(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          le
        );
        break;
      case 5:
        rc(l);
      default:
        vd(t, l), l = P = Zf(l, Pl), l = hd(t, l, Pl);
    }
    e.memoizedProps = e.pendingProps, l === null ? Di(e) : P = l;
  }
  function Ea(e, l, t, a) {
    Ll = Gt = null, rc(l), ya = null, Ia = 0;
    var n = l.return;
    try {
      if (Cm(
        e,
        n,
        l,
        t,
        le
      )) {
        ze = 1, pi(
          e,
          jl(t, e.current)
        ), P = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw P = n, i;
      ze = 1, pi(
        e,
        jl(t, e.current)
      ), P = null;
      return;
    }
    l.flags & 32768 ? (ne || a === 1 ? e = !0 : za || (le & 536870912) !== 0 ? e = !1 : (gt = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = dl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), wd(l, e)) : Di(l);
  }
  function Di(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        wd(
          l,
          gt
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
  function wd(e, l) {
    do {
      var t = qm(e.alternate, e);
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
  function Kd(e, l, t, a, n, i, c, s, d) {
    e.cancelPendingCommit = null;
    do
      Ci();
    while (Ue !== 0);
    if ((fe & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === e.current) throw Error(r(177));
      if (i = l.lanes | l.childLanes, i |= Bu, zh(
        e,
        t,
        i,
        c,
        s,
        d
      ), e === ge && (P = ge = null, le = 0), Na = l, jt = e, et = t, wc = i, Kc = n, Hd = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, km(Rn, function() {
        return Fd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, n = D.p, D.p = 2, c = fe, fe |= 4;
        try {
          Bm(e, l, t);
        } finally {
          fe = c, D.p = n, S.T = a;
        }
      }
      Ue = 1, Jd(), kd(), $d();
    }
  }
  function Jd() {
    if (Ue === 1) {
      Ue = 0;
      var e = jt, l = Na, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Ed(l, e);
          var i = cs, c = Uf(e.containerInfo), s = i.focusedElem, d = i.selectionRange;
          if (c !== s && s && s.ownerDocument && Cf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (d !== null && Cu(s)) {
              var p = d.start, z = d.end;
              if (z === void 0 && (z = p), "selectionStart" in s)
                s.selectionStart = p, s.selectionEnd = Math.min(
                  z,
                  s.value.length
                );
              else {
                var E = s.ownerDocument || document, x = E && E.defaultView || window;
                if (x.getSelection) {
                  var b = x.getSelection(), H = s.textContent.length, X = Math.min(d.start, H), ve = d.end === void 0 ? X : Math.min(d.end, H);
                  !b.extend && X > ve && (c = ve, ve = X, X = c);
                  var m = Df(
                    s,
                    X
                  ), h = Df(
                    s,
                    ve
                  );
                  if (m && h && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== h.node || b.focusOffset !== h.offset)) {
                    var g = E.createRange();
                    g.setStart(m.node, m.offset), b.removeAllRanges(), X > ve ? (b.addRange(g), b.extend(h.node, h.offset)) : (g.setEnd(h.node, h.offset), b.addRange(g));
                  }
                }
              }
            }
            for (E = [], b = s; b = b.parentNode; )
              b.nodeType === 1 && E.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < E.length; s++) {
              var N = E[s];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Vi = !!us, cs = us = null;
        } finally {
          fe = n, D.p = a, S.T = t;
        }
      }
      e.current = l, Ue = 2;
    }
  }
  function kd() {
    if (Ue === 2) {
      Ue = 0;
      var e = jt, l = Na, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Sd(e, l.alternate, l);
        } finally {
          fe = n, D.p = a, S.T = t;
        }
      }
      Ue = 3;
    }
  }
  function $d() {
    if (Ue === 4 || Ue === 3) {
      Ue = 0, mh();
      var e = jt, l = Na, t = et, a = Hd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ue = 5 : (Ue = 0, Na = jt = null, Wd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (xt = null), hu(t), l = l.stateNode, cl && typeof cl.onCommitFiberRoot == "function")
        try {
          cl.onCommitFiberRoot(
            Ra,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = S.T, n = D.p, D.p = 2, S.T = null;
        try {
          for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          S.T = l, D.p = n;
        }
      }
      (et & 3) !== 0 && Ci(), ql(e), n = e.pendingLanes, (t & 261930) !== 0 && (n & 42) !== 0 ? e === Jc ? yn++ : (yn = 0, Jc = e) : yn = 0, gn(0);
    }
  }
  function Wd(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Wa(l)));
  }
  function Ci() {
    return Jd(), kd(), $d(), Fd();
  }
  function Fd() {
    if (Ue !== 5) return !1;
    var e = jt, l = wc;
    wc = 0;
    var t = hu(et), a = S.T, n = D.p;
    try {
      D.p = 32 > t ? 32 : t, S.T = null, t = Kc, Kc = null;
      var i = jt, c = et;
      if (Ue = 0, Na = jt = null, et = 0, (fe & 6) !== 0) throw Error(r(331));
      var s = fe;
      if (fe |= 4, Cd(i.current), Md(
        i,
        i.current,
        c,
        t
      ), fe = s, gn(0, !1), cl && typeof cl.onPostCommitFiberRoot == "function")
        try {
          cl.onPostCommitFiberRoot(Ra, i);
        } catch {
        }
      return !0;
    } finally {
      D.p = n, S.T = a, Wd(e, l);
    }
  }
  function Id(e, l, t) {
    l = jl(t, l), l = Nc(e.stateNode, l, 2), e = ht(e, l, 2), e !== null && (qa(e, 2), ql(e));
  }
  function oe(e, l, t) {
    if (e.tag === 3)
      Id(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Id(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xt === null || !xt.has(a))) {
            e = jl(t, e), t = Pr(2), a = ht(l, t, 2), a !== null && (ed(
              t,
              a,
              l,
              e
            ), qa(a, 2), ql(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Wc(e, l, t) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Xm();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(t) || (Zc = !0, n.add(t), e = wm.bind(null, e, l, t), l.then(e, e));
  }
  function wm(e, l, t) {
    var a = e.pingCache;
    a !== null && a.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, ge === e && (le & t) === t && (ze === 4 || ze === 3 && (le & 62914560) === le && 300 > ul() - Ai ? (fe & 2) === 0 && Aa(e, 0) : Lc |= t, _a === le && (_a = 0)), ql(e);
  }
  function Pd(e, l) {
    l === 0 && (l = Ks()), e = qt(e, l), e !== null && (qa(e, l), ql(e));
  }
  function Km(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), Pd(e, t);
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
    a !== null && a.delete(l), Pd(e, t);
  }
  function km(e, l) {
    return fu(e, l);
  }
  var Ui = null, Ta = null, Fc = !1, Ri = !1, Ic = !1, St = 0;
  function ql(e) {
    e !== Ta && e.next === null && (Ta === null ? Ui = Ta = e : Ta = Ta.next = e), Ri = !0, Fc || (Fc = !0, Wm());
  }
  function gn(e, l) {
    if (!Ic && Ri) {
      Ic = !0;
      do
        for (var t = !1, a = Ui; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              i = (1 << 31 - sl(42 | e) + 1) - 1, i &= n & ~(c & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (t = !0, ao(a, i));
          } else
            i = le, i = Yn(
              a,
              a === ge ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ha(a, i) || (t = !0, ao(a, i));
          a = a.next;
        }
      while (t);
      Ic = !1;
    }
  }
  function $m() {
    eo();
  }
  function eo() {
    Ri = Fc = !1;
    var e = 0;
    St !== 0 && uv() && (e = St);
    for (var l = ul(), t = null, a = Ui; a !== null; ) {
      var n = a.next, i = lo(a, l);
      i === 0 ? (a.next = null, t === null ? Ui = n : t.next = n, n === null && (Ta = t)) : (t = a, (e !== 0 || (i & 3) !== 0) && (Ri = !0)), a = n;
    }
    Ue !== 0 && Ue !== 5 || gn(e), St !== 0 && (St = 0);
  }
  function lo(e, l) {
    for (var t = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - sl(i), s = 1 << c, d = n[c];
      d === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n[c] = Sh(s, l)) : d <= l && (e.expiredLanes |= s), i &= ~s;
    }
    if (l = ge, t = le, t = Yn(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, t === 0 || e === l && (de === 2 || de === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && ru(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Ha(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (a !== null && ru(a), hu(t)) {
        case 2:
        case 8:
          t = Vs;
          break;
        case 32:
          t = Rn;
          break;
        case 268435456:
          t = ws;
          break;
        default:
          t = Rn;
      }
      return a = to.bind(null, e), t = fu(t, a), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return a !== null && a !== null && ru(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function to(e, l) {
    if (Ue !== 0 && Ue !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (Ci() && e.callbackNode !== t)
      return null;
    var a = le;
    return a = Yn(
      e,
      e === ge ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Bd(e, a, l), lo(e, ul()), e.callbackNode != null && e.callbackNode === t ? to.bind(null, e) : null);
  }
  function ao(e, l) {
    if (Ci()) return null;
    Bd(e, l, !0);
  }
  function Wm() {
    sv(function() {
      (fe & 6) !== 0 ? fu(
        Ls,
        $m
      ) : eo();
    });
  }
  function Pc() {
    if (St === 0) {
      var e = ha;
      e === 0 && (e = Hn, Hn <<= 1, (Hn & 261888) === 0 && (Hn = 256)), St = e;
    }
    return St;
  }
  function no(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Zn("" + e);
  }
  function io(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Fm(e, l, t, a, n) {
    if (l === "submit" && t && t.stateNode === n) {
      var i = no(
        (n[We] || null).action
      ), c = a.submitter;
      c && (l = (l = c[We] || null) ? no(l.formAction) : c.getAttribute("formAction"), l !== null && (i = l, c = null));
      var s = new Kn(
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
                  var d = c ? io(n, c) : new FormData(n);
                  xc(
                    t,
                    {
                      pending: !0,
                      data: d,
                      method: n.method,
                      action: i
                    },
                    null,
                    d
                  );
                }
              } else
                typeof i == "function" && (s.preventDefault(), d = c ? io(n, c) : new FormData(n), xc(
                  t,
                  {
                    pending: !0,
                    data: d,
                    method: n.method,
                    action: i
                  },
                  i,
                  d
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var es = 0; es < qu.length; es++) {
    var ls = qu[es], Im = ls.toLowerCase(), Pm = ls[0].toUpperCase() + ls.slice(1);
    Ml(
      Im,
      "on" + Pm
    );
  }
  Ml(qf, "onAnimationEnd"), Ml(Bf, "onAnimationIteration"), Ml(Yf, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(vm, "onTransitionRun"), Ml(ym, "onTransitionStart"), Ml(gm, "onTransitionCancel"), Ml(Gf, "onTransitionEnd"), Pt("onMouseEnter", ["mouseout", "mouseover"]), Pt("onMouseLeave", ["mouseout", "mouseover"]), Pt("onPointerEnter", ["pointerout", "pointerover"]), Pt("onPointerLeave", ["pointerout", "pointerover"]), Ct(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ct(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ct("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ct(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ct(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ct(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ev = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn)
  );
  function uo(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var a = e[t], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (l)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], d = s.instance, p = s.currentTarget;
            if (s = s.listener, d !== i && n.isPropagationStopped())
              break e;
            i = s, n.currentTarget = p;
            try {
              i(n);
            } catch (z) {
              $n(z);
            }
            n.currentTarget = null, i = d;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], d = s.instance, p = s.currentTarget, s = s.listener, d !== i && n.isPropagationStopped())
              break e;
            i = s, n.currentTarget = p;
            try {
              i(n);
            } catch (z) {
              $n(z);
            }
            n.currentTarget = null, i = d;
          }
      }
    }
  }
  function ee(e, l) {
    var t = l[mu];
    t === void 0 && (t = l[mu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    t.has(a) || (co(l, e, 2, !1), t.add(a));
  }
  function ts(e, l, t) {
    var a = 0;
    l && (a |= 4), co(
      t,
      e,
      a,
      l
    );
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function as(e) {
    if (!e[Hi]) {
      e[Hi] = !0, Ps.forEach(function(t) {
        t !== "selectionchange" && (ev.has(t) || ts(t, !1, e), ts(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[Hi] || (l[Hi] = !0, ts("selectionchange", !1, l));
    }
  }
  function co(e, l, t, a) {
    switch (Bo(l)) {
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
    ), n = void 0, !zu || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: n
    }) : e.addEventListener(l, t, !0) : n !== void 0 ? e.addEventListener(l, t, {
      passive: n
    }) : e.addEventListener(l, t, !1);
  }
  function ns(e, l, t, a, n) {
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
              var d = c.tag;
              if ((d === 3 || d === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = Wt(s), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = i = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    of(function() {
      var p = i, z = bu(t), E = [];
      e: {
        var x = Xf.get(e);
        if (x !== void 0) {
          var b = Kn, H = e;
          switch (e) {
            case "keypress":
              if (Vn(t) === 0) break e;
            case "keydown":
            case "keyup":
              b = Jh;
              break;
            case "focusin":
              H = "focus", b = Eu;
              break;
            case "focusout":
              H = "blur", b = Eu;
              break;
            case "beforeblur":
            case "afterblur":
              b = Eu;
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
              b = vf;
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
              b = Wh;
              break;
            case qf:
            case Bf:
            case Yf:
              b = Yh;
              break;
            case Gf:
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
          var X = (l & 4) !== 0, ve = !X && (e === "scroll" || e === "scrollend"), m = X ? x !== null ? x + "Capture" : null : x;
          X = [];
          for (var h = p, g; h !== null; ) {
            var N = h;
            if (g = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || g === null || m === null || (N = Ga(h, m), N != null && X.push(
              xn(h, N, g)
            )), ve) break;
            h = h.return;
          }
          0 < X.length && (x = new b(
            x,
            H,
            null,
            t,
            z
          ), E.push({ event: x, listeners: X }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", x && t !== ju && (H = t.relatedTarget || t.fromElement) && (Wt(H) || H[$t]))
            break e;
          if ((b || x) && (x = z.window === z ? z : (x = z.ownerDocument) ? x.defaultView || x.parentWindow : window, b ? (H = t.relatedTarget || t.toElement, b = p, H = H ? Wt(H) : null, H !== null && (ve = R(H), X = H.tag, H !== ve || X !== 5 && X !== 27 && X !== 6) && (H = null)) : (b = null, H = p), b !== H)) {
            if (X = vf, N = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (X = gf, N = "onPointerLeave", m = "onPointerEnter", h = "pointer"), ve = b == null ? x : Ya(b), g = H == null ? x : Ya(H), x = new X(
              N,
              h + "leave",
              b,
              t,
              z
            ), x.target = ve, x.relatedTarget = g, N = null, Wt(z) === p && (X = new X(
              m,
              h + "enter",
              H,
              t,
              z
            ), X.target = g, X.relatedTarget = ve, N = X), ve = N, b && H)
              l: {
                for (X = lv, m = b, h = H, g = 0, N = m; N; N = X(N))
                  g++;
                N = 0;
                for (var G = h; G; G = X(G))
                  N++;
                for (; 0 < g - N; )
                  m = X(m), g--;
                for (; 0 < N - g; )
                  h = X(h), N--;
                for (; g--; ) {
                  if (m === h || h !== null && m === h.alternate) {
                    X = m;
                    break l;
                  }
                  m = X(m), h = X(h);
                }
                X = null;
              }
            else X = null;
            b !== null && so(
              E,
              x,
              b,
              X,
              !1
            ), H !== null && ve !== null && so(
              E,
              ve,
              H,
              X,
              !0
            );
          }
        }
        e: {
          if (x = p ? Ya(p) : window, b = x.nodeName && x.nodeName.toLowerCase(), b === "select" || b === "input" && x.type === "file")
            var ce = Nf;
          else if (zf(x))
            if (Af)
              ce = om;
            else {
              ce = rm;
              var B = fm;
            }
          else
            b = x.nodeName, !b || b.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? p && xu(p.elementType) && (ce = Nf) : ce = dm;
          if (ce && (ce = ce(e, p))) {
            _f(
              E,
              ce,
              t,
              z
            );
            break e;
          }
          B && B(e, x, p), e === "focusout" && p && x.type === "number" && p.memoizedProps.value != null && pu(x, "number", x.value);
        }
        switch (B = p ? Ya(p) : window, e) {
          case "focusin":
            (zf(B) || B.contentEditable === "true") && (ia = B, Uu = p, Ja = null);
            break;
          case "focusout":
            Ja = Uu = ia = null;
            break;
          case "mousedown":
            Ru = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ru = !1, Rf(E, t, z);
            break;
          case "selectionchange":
            if (mm) break;
          case "keydown":
          case "keyup":
            Rf(E, t, z);
        }
        var $;
        if (Mu)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          na ? bf(e, t) && (te = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (te = "onCompositionStart");
        te && (pf && t.locale !== "ko" && (na || te !== "onCompositionStart" ? te === "onCompositionEnd" && na && ($ = hf()) : (ut = z, _u = "value" in ut ? ut.value : ut.textContent, na = !0)), B = qi(p, te), 0 < B.length && (te = new yf(
          te,
          e,
          null,
          t,
          z
        ), E.push({ event: te, listeners: B }), $ ? te.data = $ : ($ = Sf(t), $ !== null && (te.data = $)))), ($ = nm ? im(e, t) : um(e, t)) && (te = qi(p, "onBeforeInput"), 0 < te.length && (B = new yf(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          z
        ), E.push({
          event: B,
          listeners: te
        }), B.data = $)), Fm(
          E,
          e,
          p,
          t,
          z
        );
      }
      uo(E, l);
    });
  }
  function xn(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function qi(e, l) {
    for (var t = l + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ga(e, t), n != null && a.unshift(
        xn(e, n, i)
      ), n = Ga(e, l), n != null && a.push(
        xn(e, n, i)
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
  function so(e, l, t, a, n) {
    for (var i = l._reactName, c = []; t !== null && t !== a; ) {
      var s = t, d = s.alternate, p = s.stateNode;
      if (s = s.tag, d !== null && d === a) break;
      s !== 5 && s !== 26 && s !== 27 || p === null || (d = p, n ? (p = Ga(t, i), p != null && c.unshift(
        xn(t, p, d)
      )) : n || (p = Ga(t, i), p != null && c.push(
        xn(t, p, d)
      ))), t = t.return;
    }
    c.length !== 0 && e.push({ event: l, listeners: c });
  }
  var tv = /\r\n?/g, av = /\u0000|\uFFFD/g;
  function fo(e) {
    return (typeof e == "string" ? e : "" + e).replace(tv, `
`).replace(av, "");
  }
  function ro(e, l) {
    return l = fo(l), fo(e) === l;
  }
  function me(e, l, t, a, n, i) {
    switch (t) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || la(e, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && la(e, "" + a);
        break;
      case "className":
        Xn(e, "class", a);
        break;
      case "tabIndex":
        Xn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xn(e, t, a);
        break;
      case "style":
        rf(e, a, i);
        break;
      case "data":
        if (l !== "object") {
          Xn(e, "data", a);
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
        a = Zn("" + a), e.setAttribute(t, a);
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
          typeof i == "function" && (t === "formAction" ? (l !== "input" && me(e, l, "name", n.name, n, null), me(
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
        a = Zn("" + a), e.setAttribute(t, a);
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
        t = Zn("" + a), e.setAttributeNS(
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
        ee("beforetoggle", e), ee("toggle", e), Gn(e, "popover", a);
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
        Gn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Dh.get(t) || t, Gn(e, t, a));
    }
  }
  function is(e, l, t, a, n, i) {
    switch (t) {
      case "style":
        rf(e, a, i);
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
        typeof a == "string" ? la(e, a) : (typeof a == "number" || typeof a == "bigint") && la(e, "" + a);
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
        if (!ef.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (n = t.endsWith("Capture"), l = t.slice(2, n ? t.length - 7 : void 0), i = e[We] || null, i = i != null ? i[t] : null, typeof i == "function" && e.removeEventListener(l, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, a, n);
              break e;
            }
            t in e ? e[t] = a : a === !0 ? e.setAttribute(t, "") : Gn(e, t, a);
          }
    }
  }
  function Le(e, l, t) {
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
                  throw Error(r(137, l));
                default:
                  me(e, l, i, c, t, null);
              }
          }
        n && me(e, l, "srcSet", t.srcSet, t, null), a && me(e, l, "src", t.src, t, null);
        return;
      case "input":
        ee("invalid", e);
        var s = i = c = n = null, d = null, p = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var z = t[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  c = z;
                  break;
                case "checked":
                  d = z;
                  break;
                case "defaultChecked":
                  p = z;
                  break;
                case "value":
                  i = z;
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
          i,
          s,
          d,
          p,
          c,
          n,
          !1
        );
        return;
      case "select":
        ee("invalid", e), a = c = i = null;
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
                me(e, l, n, s, t, null);
            }
        l = i, t = c, e.multiple = !!a, l != null ? ea(e, !!a, l, !1) : t != null && ea(e, !!a, t, !0);
        return;
      case "textarea":
        ee("invalid", e), i = n = a = null;
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
                if (s != null) throw Error(r(91));
                break;
              default:
                me(e, l, c, s, t, null);
            }
        sf(e, a, n, i);
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
        for (a = 0; a < pn.length; a++)
          ee(pn[a], e);
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
        if (xu(l)) {
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
        var n = null, i = null, c = null, s = null, d = null, p = null, z = null;
        for (b in t) {
          var E = t[b];
          if (t.hasOwnProperty(b) && E != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = E;
              default:
                a.hasOwnProperty(b) || me(e, l, b, null, a, E);
            }
        }
        for (var x in a) {
          var b = a[x];
          if (E = t[x], a.hasOwnProperty(x) && (b != null || E != null))
            switch (x) {
              case "type":
                i = b;
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
                c = b;
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
                b !== E && me(
                  e,
                  l,
                  x,
                  b,
                  a,
                  E
                );
            }
        }
        gu(
          e,
          c,
          s,
          d,
          p,
          z,
          i,
          n
        );
        return;
      case "select":
        b = c = s = x = null;
        for (i in t)
          if (d = t[i], t.hasOwnProperty(i) && d != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                b = d;
              default:
                a.hasOwnProperty(i) || me(
                  e,
                  l,
                  i,
                  null,
                  a,
                  d
                );
            }
        for (n in a)
          if (i = a[n], d = t[n], a.hasOwnProperty(n) && (i != null || d != null))
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
                i !== d && me(
                  e,
                  l,
                  n,
                  i,
                  a,
                  d
                );
            }
        l = s, t = c, a = b, x != null ? ea(e, !!t, x, !1) : !!a != !!t && (l != null ? ea(e, !!t, l, !0) : ea(e, !!t, t ? [] : "", !1));
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
        for (c in a)
          if (n = a[c], i = t[c], a.hasOwnProperty(c) && (n != null || i != null))
            switch (c) {
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
                n !== i && me(e, l, c, n, a, i);
            }
        cf(e, x, b);
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
        for (var X in t)
          x = t[X], t.hasOwnProperty(X) && x != null && !a.hasOwnProperty(X) && me(e, l, X, null, a, x);
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
        if (xu(l)) {
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
    for (var m in t)
      x = t[m], t.hasOwnProperty(m) && x != null && !a.hasOwnProperty(m) && me(e, l, m, null, a, x);
    for (E in a)
      x = a[E], b = t[E], !a.hasOwnProperty(E) || x === b || x == null && b == null || me(e, l, E, x, a, b);
  }
  function oo(e) {
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
        var n = t[a], i = n.transferSize, c = n.initiatorType, s = n.duration;
        if (i && s && oo(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < t.length; a++) {
            var d = t[a], p = d.startTime;
            if (p > s) break;
            var z = d.transferSize, E = d.initiatorType;
            z && oo(E) && (d = d.responseEnd, c += z * (d < s ? 1 : (s - p) / (d - p)));
          }
          if (--a, l += 8 * (i + c) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var us = null, cs = null;
  function Bi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ho(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function mo(e, l) {
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
  var vo = typeof setTimeout == "function" ? setTimeout : void 0, cv = typeof clearTimeout == "function" ? clearTimeout : void 0, yo = typeof Promise == "function" ? Promise : void 0, sv = typeof queueMicrotask == "function" ? queueMicrotask : typeof yo < "u" ? function(e) {
    return yo.resolve(null).then(e).catch(fv);
  } : vo;
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
            e.removeChild(n), Ca(l);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          a++;
        else if (t === "html")
          jn(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, jn(t);
          for (var i = t.firstChild; i; ) {
            var c = i.nextSibling, s = i.nodeName;
            i[Ba] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || t.removeChild(i), i = c;
          }
        } else
          t === "body" && jn(e.ownerDocument.body);
      t = n;
    } while (t);
    Ca(l);
  }
  function po(e, l) {
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
          rs(t), vu(t);
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
        if (!e[Ba])
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
  function xo(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Nl(e.nextSibling), e === null)) return null;
    return e;
  }
  function ds(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function os(e) {
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
  var hs = null;
  function jo(e) {
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
  function bo(e) {
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
  function So(e, l, t) {
    switch (l = Bi(t), e) {
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
  function jn(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    vu(e);
  }
  var Al = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Set();
  function Yi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var lt = D.d;
  D.d = {
    f: hv,
    r: mv,
    D: vv,
    C: yv,
    L: gv,
    m: pv,
    X: jv,
    S: xv,
    M: bv
  };
  function hv() {
    var e = lt.f(), l = Mi();
    return e || l;
  }
  function mv(e) {
    var l = Ft(e);
    l !== null && l.tag === 5 && l.type === "form" ? Gr(l) : lt.r(e);
  }
  var Ma = typeof document > "u" ? null : document;
  function _o(e, l, t) {
    var a = Ma;
    if (a && typeof l == "string" && l) {
      var n = pl(l);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof t == "string" && (n += '[crossorigin="' + t + '"]'), zo.has(n) || (zo.add(n), e = { rel: e, crossOrigin: t, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Le(l, "link", e), He(l), a.head.appendChild(l)));
    }
  }
  function vv(e) {
    lt.D(e), _o("dns-prefetch", e, null);
  }
  function yv(e, l) {
    lt.C(e, l), _o("preconnect", e, l);
  }
  function gv(e, l, t) {
    lt.L(e, l, t);
    var a = Ma;
    if (a && e && l) {
      var n = 'link[rel="preload"][as="' + pl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (n += '[imagesrcset="' + pl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (n += '[imagesizes="' + pl(
        t.imageSizes
      ) + '"]')) : n += '[href="' + pl(e) + '"]';
      var i = n;
      switch (l) {
        case "style":
          i = Oa(e);
          break;
        case "script":
          i = Da(e);
      }
      Al.has(i) || (e = U(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Al.set(i, e), a.querySelector(n) !== null || l === "style" && a.querySelector(bn(i)) || l === "script" && a.querySelector(Sn(i)) || (l = a.createElement("link"), Le(l, "link", e), He(l), a.head.appendChild(l)));
    }
  }
  function pv(e, l) {
    lt.m(e, l);
    var t = Ma;
    if (t && e) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + pl(a) + '"][href="' + pl(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Da(e);
      }
      if (!Al.has(i) && (e = U({ rel: "modulepreload", href: e }, l), Al.set(i, e), t.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Sn(i)))
              return;
        }
        a = t.createElement("link"), Le(a, "link", e), He(a), t.head.appendChild(a);
      }
    }
  }
  function xv(e, l, t) {
    lt.S(e, l, t);
    var a = Ma;
    if (a && e) {
      var n = It(a).hoistableStyles, i = Oa(e);
      l = l || "default";
      var c = n.get(i);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          bn(i)
        ))
          s.loading = 5;
        else {
          e = U(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Al.get(i)) && ms(e, t);
          var d = c = a.createElement("link");
          He(d), Le(d, "link", e), d._p = new Promise(function(p, z) {
            d.onload = p, d.onerror = z;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Gi(c, l, a);
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
  function jv(e, l) {
    lt.X(e, l);
    var t = Ma;
    if (t && e) {
      var a = It(t).hoistableScripts, n = Da(e), i = a.get(n);
      i || (i = t.querySelector(Sn(n)), i || (e = U({ src: e, async: !0 }, l), (l = Al.get(n)) && vs(e, l), i = t.createElement("script"), He(i), Le(i, "link", e), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function bv(e, l) {
    lt.M(e, l);
    var t = Ma;
    if (t && e) {
      var a = It(t).hoistableScripts, n = Da(e), i = a.get(n);
      i || (i = t.querySelector(Sn(n)), i || (e = U({ src: e, async: !0, type: "module" }, l), (l = Al.get(n)) && vs(e, l), i = t.createElement("script"), He(i), Le(i, "link", e), t.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function No(e, l, t, a) {
    var n = (n = F.current) ? Yi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = Oa(t.href), t = It(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Oa(t.href);
          var i = It(
            n
          ).hoistableStyles, c = i.get(e);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, c), (i = n.querySelector(
            bn(e)
          )) && !i._p && (c.instance = i, c.state.loading = 5), Al.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Al.set(e, t), i || Sv(
            n,
            e,
            t,
            c.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return c;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Da(t), t = It(
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
  function Oa(e) {
    return 'href="' + pl(e) + '"';
  }
  function bn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ao(e) {
    return U({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Sv(e, l, t, a) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = e.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Le(l, "link", t), He(l), e.head.appendChild(l));
  }
  function Da(e) {
    return '[src="' + pl(e) + '"]';
  }
  function Sn(e) {
    return "script[async]" + e;
  }
  function Eo(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + pl(t.href) + '"]'
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
          ), He(a), Le(a, "style", n), Gi(a, t.precedence, e), l.instance = a;
        case "stylesheet":
          n = Oa(t.href);
          var i = e.querySelector(
            bn(n)
          );
          if (i)
            return l.state.loading |= 4, l.instance = i, He(i), i;
          a = Ao(t), (n = Al.get(n)) && ms(a, n), i = (e.ownerDocument || e).createElement("link"), He(i);
          var c = i;
          return c._p = new Promise(function(s, d) {
            c.onload = s, c.onerror = d;
          }), Le(i, "link", a), l.state.loading |= 4, Gi(i, t.precedence, e), l.instance = i;
        case "script":
          return i = Da(t.src), (n = e.querySelector(
            Sn(i)
          )) ? (l.instance = n, He(n), n) : (a = t, (n = Al.get(i)) && (a = U({}, t), vs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), He(n), Le(n, "link", a), e.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Gi(a, t.precedence, e));
    return l.instance;
  }
  function Gi(e, l, t) {
    for (var a = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === l) i = s;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function ms(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function vs(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var Xi = null;
  function To(e, l, t) {
    if (Xi === null) {
      var a = /* @__PURE__ */ new Map(), n = Xi = /* @__PURE__ */ new Map();
      n.set(t, a);
    } else
      n = Xi, a = n.get(t), a || (a = /* @__PURE__ */ new Map(), n.set(t, a));
    if (a.has(e)) return a;
    for (a.set(e, null), t = t.getElementsByTagName(e), n = 0; n < t.length; n++) {
      var i = t[n];
      if (!(i[Ba] || i[Ge] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(l) || "";
        c = e + c;
        var s = a.get(c);
        s ? s.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function Mo(e, l, t) {
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
  function Oo(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _v(e, l, t, a) {
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Oa(a.href), i = l.querySelector(
          bn(n)
        );
        if (i) {
          l = i._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = Qi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = i, He(i);
          return;
        }
        i = l.ownerDocument || l, a = Ao(a), (n = Al.get(n)) && ms(a, n), i = i.createElement("link"), He(i);
        var c = i;
        c._p = new Promise(function(s, d) {
          c.onload = s, c.onerror = d;
        }), Le(i, "link", a), t.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Qi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var ys = 0;
  function Nv(e, l) {
    return e.stylesheets && e.count === 0 && Li(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Li(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + l);
      0 < e.imgBytes && ys === 0 && (ys = 62500 * iv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Li(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > ys ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Qi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Li(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Zi = null;
  function Li(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Zi = /* @__PURE__ */ new Map(), l.forEach(Av, e), Zi = null, Qi.call(e));
  }
  function Av(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Zi.get(e);
      if (t) var a = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Zi.set(e, t);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), a = c);
        }
        a && t.set(null, a);
      }
      n = l.instance, c = n.getAttribute("data-precedence"), i = t.get(c) || a, i === a && t.set(null, n), t.set(c, n), this.count++, a = Qi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), l.state.loading |= 4;
    }
  }
  var zn = {
    $$typeof: Ce,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Ev(e, l, t, a, n, i, c, s, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.hiddenUpdates = du(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Do(e, l, t, a, n, i, c, s, d, p, z, E) {
    return e = new Ev(
      e,
      l,
      t,
      c,
      d,
      p,
      z,
      E,
      s
    ), l = 1, i === !0 && (l |= 24), i = rl(3, null, null, l), e.current = i, i.stateNode = e, l = $u(), l.refCount++, e.pooledCache = l, l.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: t,
      cache: l
    }, Pu(i), e;
  }
  function Co(e) {
    return e ? (e = sa, e) : sa;
  }
  function Uo(e, l, t, a, n, i) {
    n = Co(n), a.context === null ? a.context = n : a.pendingContext = n, a = ot(l), a.payload = { element: t }, i = i === void 0 ? null : i, i !== null && (a.callback = i), t = ht(e, a, l), t !== null && (tl(t, e, l), en(t, e, l));
  }
  function Ro(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function gs(e, l) {
    Ro(e, l), (e = e.alternate) && Ro(e, l);
  }
  function Ho(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = qt(e, 67108864);
      l !== null && tl(l, e, 67108864), gs(e, 67108864);
    }
  }
  function qo(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = vl();
      l = ou(l);
      var t = qt(e, l);
      t !== null && tl(t, e, l), gs(e, l);
    }
  }
  var Vi = !0;
  function Tv(e, l, t, a) {
    var n = S.T;
    S.T = null;
    var i = D.p;
    try {
      D.p = 2, ps(e, l, t, a);
    } finally {
      D.p = i, S.T = n;
    }
  }
  function Mv(e, l, t, a) {
    var n = S.T;
    S.T = null;
    var i = D.p;
    try {
      D.p = 8, ps(e, l, t, a);
    } finally {
      D.p = i, S.T = n;
    }
  }
  function ps(e, l, t, a) {
    if (Vi) {
      var n = xs(a);
      if (n === null)
        ns(
          e,
          l,
          a,
          wi,
          t
        ), Yo(e, a);
      else if (Dv(
        n,
        e,
        l,
        t,
        a
      ))
        a.stopPropagation();
      else if (Yo(e, a), l & 4 && -1 < Ov.indexOf(e)) {
        for (; n !== null; ) {
          var i = Ft(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Dt(i.pendingLanes);
                  if (c !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - sl(c);
                      s.entanglements[1] |= d, c &= ~d;
                    }
                    ql(i), (fe & 6) === 0 && (Ei = ul() + 500, gn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = qt(i, 2), s !== null && tl(s, i, 2), Mi(), gs(i, 2);
            }
          if (i = xs(a), i === null && ns(
            e,
            l,
            a,
            wi,
            t
          ), i === n) break;
          n = i;
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
  function xs(e) {
    return e = bu(e), js(e);
  }
  var wi = null;
  function js(e) {
    if (wi = null, e = Wt(e), e !== null) {
      var l = R(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = V(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = O(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return wi = e, null;
  }
  function Bo(e) {
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
          case Rn:
          case yh:
            return 32;
          case ws:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bs = !1, _t = null, Nt = null, At = null, _n = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), Et = [], Ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Yo(e, l) {
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
        _n.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nn.delete(l.pointerId);
    }
  }
  function An(e, l, t, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, l !== null && (l = Ft(l), l !== null && Ho(l)), e) : (e.eventSystemFlags |= a, l = e.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), e);
  }
  function Dv(e, l, t, a, n) {
    switch (l) {
      case "focusin":
        return _t = An(
          _t,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "dragenter":
        return Nt = An(
          Nt,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "mouseover":
        return At = An(
          At,
          e,
          l,
          t,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return _n.set(
          i,
          An(
            _n.get(i) || null,
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
          An(
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
  function Go(e) {
    var l = Wt(e.target);
    if (l !== null) {
      var t = R(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = V(t), l !== null) {
            e.blockedOn = l, Fs(e.priority, function() {
              qo(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = O(t), l !== null) {
            e.blockedOn = l, Fs(e.priority, function() {
              qo(t);
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
  function Ki(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = xs(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var a = new t.constructor(
          t.type,
          t
        );
        ju = a, t.target.dispatchEvent(a), ju = null;
      } else
        return l = Ft(t), l !== null && Ho(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function Xo(e, l, t) {
    Ki(e) && t.delete(l);
  }
  function Cv() {
    bs = !1, _t !== null && Ki(_t) && (_t = null), Nt !== null && Ki(Nt) && (Nt = null), At !== null && Ki(At) && (At = null), _n.forEach(Xo), Nn.forEach(Xo);
  }
  function Ji(e, l) {
    e.blockedOn === l && (e.blockedOn = null, bs || (bs = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Cv
    )));
  }
  var ki = null;
  function Qo(e) {
    ki !== e && (ki = e, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        ki === e && (ki = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], a = e[l + 1], n = e[l + 2];
          if (typeof a != "function") {
            if (js(a || t) === null)
              continue;
            break;
          }
          var i = Ft(t);
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
  function Ca(e) {
    function l(d) {
      return Ji(d, e);
    }
    _t !== null && Ji(_t, e), Nt !== null && Ji(Nt, e), At !== null && Ji(At, e), _n.forEach(l), Nn.forEach(l);
    for (var t = 0; t < Et.length; t++) {
      var a = Et[t];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Et.length && (t = Et[0], t.blockedOn === null); )
      Go(t), t.blockedOn === null && Et.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (a = 0; a < t.length; a += 3) {
        var n = t[a], i = t[a + 1], c = n[We] || null;
        if (typeof i == "function")
          c || Qo(t);
        else if (c) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, c = i[We] || null)
              s = c.formAction;
            else if (js(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), Qo(t);
        }
      }
  }
  function Zo() {
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
  function Ss(e) {
    this._internalRoot = e;
  }
  $i.prototype.render = Ss.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var t = l.current, a = vl();
    Uo(t, a, e, l, null, null);
  }, $i.prototype.unmount = Ss.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      Uo(e.current, 2, null, e, null, null), Mi(), l[$t] = null;
    }
  };
  function $i(e) {
    this._internalRoot = e;
  }
  $i.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = Ws();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Et.length && l !== 0 && l < Et[t].priority; t++) ;
      Et.splice(t, 0, e), t === 0 && Go(e);
    }
  };
  var Lo = y.version;
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
    return e = _(l), e = e !== null ? J(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Uv = {
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
        Ra = Wi.inject(
          Uv
        ), cl = Wi;
      } catch {
      }
  }
  return Tn.createRoot = function(e, l) {
    if (!T(e)) throw Error(r(299));
    var t = !1, a = "", n = $r, i = Wr, c = Fr;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = Do(
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
      Zo
    ), e[$t] = l.current, as(e), new Ss(l);
  }, Tn.hydrateRoot = function(e, l, t) {
    if (!T(e)) throw Error(r(299));
    var a = !1, n = "", i = $r, c = Wr, s = Fr, d = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (d = t.formState)), l = Do(
      e,
      1,
      !0,
      l,
      t ?? null,
      a,
      n,
      d,
      i,
      c,
      s,
      Zo
    ), l.context = Co(null), t = l.current, a = vl(), a = ou(a), n = ot(a), n.callback = null, ht(t, n, a), t = a, l.current.lanes = t, qa(l, t), ql(l), e[$t] = l.current, as(e), new $i(l);
  }, Tn.version = "19.2.8", Tn;
}
var Po;
function Lv() {
  if (Po) return Ns.exports;
  Po = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (y) {
        console.error(y);
      }
  }
  return f(), Ns.exports = Zv(), Ns.exports;
}
var Vv = Lv();
const wv = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uh = (...f) => f.filter((y, v, r) => !!y && y.trim() !== "" && r.indexOf(y) === v).join(" ").trim();
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
const Jv = Q.forwardRef(
  ({
    color: f = "currentColor",
    size: y = 24,
    strokeWidth: v = 2,
    absoluteStrokeWidth: r,
    className: T = "",
    children: R,
    iconNode: V,
    ...O
  }, M) => Q.createElement(
    "svg",
    {
      ref: M,
      ...Kv,
      width: y,
      height: y,
      stroke: f,
      strokeWidth: r ? Number(v) * 24 / Number(y) : v,
      className: uh("lucide", T),
      ...O
    },
    [
      ...V.map(([_, J]) => Q.createElement(_, J)),
      ...Array.isArray(R) ? R : [R]
    ]
  )
);
const ae = (f, y) => {
  const v = Q.forwardRef(
    ({ className: r, ...T }, R) => Q.createElement(Jv, {
      ref: R,
      iconNode: y,
      className: uh(`lucide-${wv(f)}`, r),
      ...T
    })
  );
  return v.displayName = `${f}`, v;
};
const On = ae("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Cl = ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Rs = ae("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const kv = ae("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const at = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Cn = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Os = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Hs = ae("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const qs = ae("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Mn = ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const Ii = ae("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Ds = ae("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const $v = ae("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const ch = ae("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
const Bs = ae("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ys = ae("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const Gs = ae("FileJson", [
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
const sh = ae("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const Wv = ae("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const eu = ae("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const Fv = ae("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const Iv = ae("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const lu = ae("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const Pv = ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const e1 = ae("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const l1 = ae("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const tu = ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const Dn = ae("ShieldAlert", [
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
const au = ae("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const t1 = ae("Sparkles", [
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
const nu = ae("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const a1 = ae("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const Xs = ae("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const n1 = ae("WalletCards", [
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
const fh = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Pi = ae("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Fi = {
  option_id: null,
  rationale: "",
  assumptions: "",
  owner: "",
  acceptance_condition: "",
  risk: "",
  evidence_refs: [],
  terminal_route: "conditional_release"
}, rh = [nu, tu, Pi, au, Rs];
function Bl(...f) {
  return f.filter(Boolean).join(" ");
}
function eh(f) {
  const y = new Date(f);
  return Number.isNaN(y.getTime()) ? f : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(y);
}
function i1(f, y) {
  return `ai-delivery-arena:seen-activity:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${y}`;
}
function u1(f, y, v, r) {
  return `ai-delivery-arena:draft:${f.user?.id ?? (f.local_mode ? "local" : "participant")}:${y}:${v}:${r}`;
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
function c1(f) {
  if (!f || typeof f != "object") return !1;
  const y = f;
  return (y.option_id === null || typeof y.option_id == "string") && typeof y.rationale == "string" && typeof y.assumptions == "string" && typeof y.owner == "string" && typeof y.acceptance_condition == "string" && typeof y.risk == "string" && Array.isArray(y.evidence_refs) && y.evidence_refs.every((v) => typeof v == "string") && typeof y.terminal_route == "string";
}
function lh(f, y) {
  const v = {
    draft: y,
    updatedAt: (/* @__PURE__ */ new Date(0)).toISOString(),
    synced: tt(y)
  };
  if (typeof window > "u") return v;
  try {
    const r = JSON.parse(window.localStorage.getItem(f) ?? "null");
    if (!r || typeof r != "object" || !c1(r.draft))
      return v;
    const T = tt(r.draft);
    return r.synced === T ? v : {
      draft: r.draft,
      updatedAt: typeof r.updatedAt == "string" ? r.updatedAt : (/* @__PURE__ */ new Date()).toISOString(),
      synced: typeof r.synced == "string" ? r.synced : null
    };
  } catch {
    return v;
  }
}
function Ms(f, y, v) {
  if (!(typeof window > "u"))
    try {
      const r = JSON.parse(window.localStorage.getItem(f) ?? "null"), T = {
        draft: y,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        synced: v !== void 0 ? v : typeof r?.synced == "string" ? r.synced : null
      };
      window.localStorage.setItem(f, JSON.stringify(T));
    } catch {
    }
}
function th() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function ah(f) {
  if (typeof window > "u")
    return { signalCount: 0, evidenceIds: [] };
  try {
    const y = JSON.parse(window.localStorage.getItem(f) ?? "{}");
    return {
      signalCount: typeof y.signalCount == "number" && y.signalCount >= 0 ? y.signalCount : 0,
      evidenceIds: Array.isArray(y.evidenceIds) ? y.evidenceIds.filter((v) => typeof v == "string") : []
    };
  } catch {
    return { signalCount: 0, evidenceIds: [] };
  }
}
function s1(f, y) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(f, JSON.stringify(y));
    } catch {
    }
}
function nh(f, y) {
  const v = new Blob([JSON.stringify(y, null, 2)], {
    type: "application/json"
  }), r = URL.createObjectURL(v), T = document.createElement("a");
  T.href = r, T.download = f, document.body.appendChild(T), T.click(), T.remove(), URL.revokeObjectURL(r);
}
function f1(f) {
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
  ].filter(([v]) => !v).map(([, v]) => v);
}
function $e({
  children: f,
  variant: y = "primary",
  className: v,
  disabled: r,
  busy: T,
  type: R = "button",
  onClick: V
}) {
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      className: Bl("button", `button-${y}`, v),
      disabled: r || T,
      type: R,
      onClick: V,
      children: [
        T && /* @__PURE__ */ u.jsx("span", { className: "spinner", "aria-hidden": "true" }),
        f
      ]
    }
  );
}
function dh({
  data: f,
  emit: y,
  transparent: v = !1
}) {
  const [r, T] = Q.useState(!1);
  return /* @__PURE__ */ u.jsxs("header", { className: Bl("product-header", v && "header-transparent"), children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "brand",
        type: "button",
        onClick: () => f.authenticated || f.local_mode ? y("navigate", { view: "centre" }) : window.scrollTo({ top: 0, behavior: "smooth" }),
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
            /* @__PURE__ */ u.jsx(sh, { size: 16 }),
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
            "aria-expanded": r,
            onClick: () => T((R) => !R),
            children: [
              /* @__PURE__ */ u.jsx("span", { className: "account-avatar", children: /* @__PURE__ */ u.jsx(Xs, { size: 16 }) }),
              /* @__PURE__ */ u.jsx("span", { className: "desktop-only", children: f.local_mode ? "Local participant" : f.user?.email }),
              /* @__PURE__ */ u.jsx(Cn, { size: 15 })
            ]
          }
        ),
        r && /* @__PURE__ */ u.jsxs("div", { className: "account-popover", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Signed in as" }),
            /* @__PURE__ */ u.jsx("strong", { children: f.local_mode ? "Local preview" : f.user?.email })
          ] }),
          !f.local_mode && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => y("sign_out"), children: [
            /* @__PURE__ */ u.jsx(Pv, { size: 15 }),
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
          onClick: () => T((R) => !R),
          children: /* @__PURE__ */ u.jsx(e1, { size: 20 })
        }
      )
    ] })
  ] });
}
function r1({ notice: f }) {
  const [y, v] = Q.useState(!!f);
  if (Q.useEffect(() => {
    if (v(!!f), !f) return;
    const T = window.setTimeout(() => v(!1), 6e3);
    return () => window.clearTimeout(T);
  }, [f?.kind, f?.message]), !f || !y) return null;
  const r = f.kind === "error" ? qs : Hs;
  return /* @__PURE__ */ u.jsxs("div", { className: Bl("toast", `toast-${f.kind}`), role: "status", children: [
    /* @__PURE__ */ u.jsx(r, { size: 18 }),
    /* @__PURE__ */ u.jsx("span", { children: f.message }),
    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => v(!1), "aria-label": "Dismiss", children: /* @__PURE__ */ u.jsx(fh, { size: 16 }) })
  ] });
}
function d1({ data: f, emit: y }) {
  const [v, r] = Q.useState("signin"), [T, R] = Q.useState(""), [V, O] = Q.useState(""), [M, _] = Q.useState(!1), [J, U] = Q.useState(!1);
  Q.useEffect(() => U(!1), [f.notice, f.authenticated]);
  const ue = (ye) => {
    ye.preventDefault(), U(!0), y(v === "signin" ? "sign_in" : "sign_up", {
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
          className: v === "signin" ? "active" : "",
          onClick: () => r("signin"),
          role: "tab",
          "aria-selected": v === "signin",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: v === "create" ? "active" : "",
          onClick: () => r("create"),
          role: "tab",
          "aria-selected": v === "create",
          children: "Create account"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("form", { className: "auth-form", onSubmit: ue, children: [
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: v === "signin" ? "Email" : "Work email" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(Xs, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "email",
              autoComplete: "email",
              value: T,
              onChange: (ye) => R(ye.target.value),
              placeholder: "you@company.com",
              required: !0
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        /* @__PURE__ */ u.jsx("span", { children: v === "signin" ? "Password" : "Create password" }),
        /* @__PURE__ */ u.jsxs("div", { className: "input-with-icon", children: [
          /* @__PURE__ */ u.jsx(Fv, { size: 17 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "password",
              autoComplete: v === "signin" ? "current-password" : "new-password",
              value: V,
              onChange: (ye) => O(ye.target.value),
              minLength: v === "create" ? 8 : void 0,
              placeholder: v === "create" ? "At least 8 characters" : "Your password",
              required: !0
            }
          )
        ] })
      ] }),
      v === "create" && /* @__PURE__ */ u.jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "checkbox",
            checked: M,
            onChange: (ye) => _(ye.target.checked)
          }
        ),
        /* @__PURE__ */ u.jsx("span", { children: "I understand this beta stores my synthetic simulation responses." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { type: "submit", className: "button-full", busy: J, children: [
        v === "signin" ? "Continue" : "Create free account",
        !J && /* @__PURE__ */ u.jsx(Cl, { size: 17 })
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
    /* @__PURE__ */ u.jsxs($e, { className: "button-full", onClick: () => y("open_local"), children: [
      "Open local edition ",
      /* @__PURE__ */ u.jsx(Cl, { size: 17 })
    ] })
  ] });
}
function o1({ data: f, emit: y }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "marketing-page", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "marketing-hero-wrap", children: [
      /* @__PURE__ */ u.jsx(dh, { data: f, emit: y, transparent: !0 }),
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
              /* @__PURE__ */ u.jsx(Cl, { size: 18 })
            ] }),
            /* @__PURE__ */ u.jsxs(
              "a",
              {
                className: "button button-hero-ghost",
                href: f.links?.github,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ u.jsx(sh, { size: 17 }),
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
        /* @__PURE__ */ u.jsx(d1, { data: f, emit: y })
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
              /* @__PURE__ */ u.jsx(Mn, { size: 10 }),
              " Definitions and frameworks"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(Mn, { size: 10 }),
              " Self-reported experience"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(Mn, { size: 10 }),
              " Answers without consequences"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(Cl, { className: "comparison-arrow", size: 28 }),
        /* @__PURE__ */ u.jsxs("article", { className: "comparison-primary", children: [
          /* @__PURE__ */ u.jsx("span", { className: "comparison-label", children: "AI Delivery Arena" }),
          /* @__PURE__ */ u.jsx("h3", { children: "What do you do?" }),
          /* @__PURE__ */ u.jsxs("ul", { children: [
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(at, { size: 14 }),
              " Evidence-led commitments"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(at, { size: 14 }),
              " Traceable decision records"
            ] }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              /* @__PURE__ */ u.jsx(at, { size: 14 }),
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
          icon: nu,
          title: "Understand",
          copy: "Enter a synthetic enterprise programme with a fixed mandate, incomplete evidence and explicit constraints."
        },
        {
          number: "02",
          icon: tu,
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
      ].map(({ number: v, icon: r, title: T, copy: R }) => /* @__PURE__ */ u.jsxs("article", { className: "method-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: v }),
          /* @__PURE__ */ u.jsx(r, { size: 20 })
        ] }),
        /* @__PURE__ */ u.jsx("h3", { children: T }),
        /* @__PURE__ */ u.jsx("p", { children: R })
      ] }, v)) })
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
          /* @__PURE__ */ u.jsx(ch, { size: 16 })
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
function Ua({
  data: f,
  emit: y,
  children: v,
  compact: r = !1
}) {
  return /* @__PURE__ */ u.jsxs("div", { className: Bl("product-page", r && "product-page-compact"), children: [
    /* @__PURE__ */ u.jsx(dh, { data: f, emit: y }),
    v,
    /* @__PURE__ */ u.jsxs("footer", { className: "product-footer", children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        "Hosted Beta v",
        f.product.version
      ] }),
      /* @__PURE__ */ u.jsx("span", { children: "Simulation assessment. Not independently calibrated." })
    ] })
  ] });
}
function Cs({ children: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "empty-state", children: [
    /* @__PURE__ */ u.jsx(Gs, { size: 26 }),
    /* @__PURE__ */ u.jsx("p", { children: f })
  ] });
}
function h1({ data: f, emit: y }) {
  const r = (f.centre ?? {}).runs ?? [], T = r.find((Z) => Z.status !== "completed"), R = r.filter((Z) => Z.status === "completed").length, [V, O] = Q.useState(null), [M, _] = Q.useState(""), [J, U] = Q.useState(!1), ue = Q.useRef(null);
  Q.useEffect(() => U(!1), [f.notice, f.screen]);
  const ye = (Z) => y("navigate", {
    view: Z.status === "completed" ? "debrief" : "decision",
    run_id: Z.run_id
  }), De = async (Z) => {
    const _e = Z.target.files?.[0];
    if (_e) {
      U(!0);
      try {
        const Re = JSON.parse(await _e.text());
        y("import_run", { document: Re });
      } catch {
        U(!1), window.alert("That file is not valid JSON.");
      } finally {
        Z.target.value = "";
      }
    }
  };
  return /* @__PURE__ */ u.jsx(Ua, { data: f, emit: y, children: /* @__PURE__ */ u.jsxs("main", { className: "run-centre page-width", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "page-title-row", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Run centre" }),
        /* @__PURE__ */ u.jsx("h1", { children: "Your leadership evidence." }),
        /* @__PURE__ */ u.jsx("p", { children: "Continue an attempt, review a completed debrief or begin a clean run. Committed decisions remain immutable." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { onClick: () => y("open_briefing"), children: [
        "New attempt ",
        /* @__PURE__ */ u.jsx(Cl, { size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "summary-grid", children: [
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Iv, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: r.length }),
          /* @__PURE__ */ u.jsx("span", { children: "Total attempts" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Ii, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: T ? 1 : 0 }),
          /* @__PURE__ */ u.jsx("span", { children: "In progress" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Rs, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: R }),
          /* @__PURE__ */ u.jsx("span", { children: "Debriefs ready" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsx(Ds, { size: 19 }),
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
            eh(T.updated_at)
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
        /* @__PURE__ */ u.jsxs($e, { onClick: () => ye(T), children: [
          "Continue at D",
          String(T.completed + 1).padStart(2, "0"),
          /* @__PURE__ */ u.jsx(Cl, { size: 17 })
        ] })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("section", { className: "first-run-banner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Your first attempt" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Procurement Under Pressure" }),
        /* @__PURE__ */ u.jsx("p", { children: "Five stages, 20 decisions and approximately 90 minutes." })
      ] }),
      /* @__PURE__ */ u.jsxs($e, { onClick: () => y("open_briefing"), children: [
        "Read the briefing ",
        /* @__PURE__ */ u.jsx(Cl, { size: 17 })
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
              ref: ue,
              className: "visually-hidden",
              type: "file",
              accept: ".json,application/json",
              onChange: De
            }
          ),
          /* @__PURE__ */ u.jsxs(
            $e,
            {
              variant: "secondary",
              busy: J,
              onClick: () => ue.current?.click(),
              children: [
                /* @__PURE__ */ u.jsx(a1, { size: 16 }),
                " Import local run"
              ]
            }
          )
        ] })
      ] }),
      r.length === 0 ? /* @__PURE__ */ u.jsx(Cs, { children: "No attempts yet. Start with the mission briefing." }) : /* @__PURE__ */ u.jsxs("div", { className: "run-table", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "run-table-head", children: [
          /* @__PURE__ */ u.jsx("span", { children: "Attempt" }),
          /* @__PURE__ */ u.jsx("span", { children: "Progress" }),
          /* @__PURE__ */ u.jsx("span", { children: "Updated" }),
          /* @__PURE__ */ u.jsx("span", {})
        ] }),
        r.map((Z) => /* @__PURE__ */ u.jsxs("article", { className: "run-table-row", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "run-name-cell", children: [
            /* @__PURE__ */ u.jsx("span", { className: Bl("run-icon", Z.status === "completed" && "run-icon-complete"), children: Z.status === "completed" ? /* @__PURE__ */ u.jsx(at, { size: 16 }) : /* @__PURE__ */ u.jsx(Ii, { size: 16 }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              V === Z.run_id ? /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "rename-form",
                  onSubmit: (_e) => {
                    _e.preventDefault(), y("rename_run", {
                      run_id: Z.run_id,
                      display_name: M
                    }), O(null);
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        autoFocus: !0,
                        value: M,
                        maxLength: 100,
                        onChange: (_e) => _(_e.target.value)
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { type: "submit", children: /* @__PURE__ */ u.jsx(at, { size: 15 }) }),
                    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => O(null), children: /* @__PURE__ */ u.jsx(fh, { size: 15 }) })
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
            /* @__PURE__ */ u.jsx("span", { children: eh(Z.updated_at) }),
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
                  O(Z.run_id), _(Z.display_name);
                },
                children: /* @__PURE__ */ u.jsx(l1, { size: 15 })
              }
            ),
            /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => ye(Z), children: [
              Z.status === "completed" ? "Open debrief" : "Resume",
              /* @__PURE__ */ u.jsx(Os, { size: 16 })
            ] })
          ] })
        ] }, Z.run_id))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "import-note", children: [
        /* @__PURE__ */ u.jsx(eu, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: "Local JSON checkpoints are replay-verified before they enter your account." })
      ] })
    ] })
  ] }) });
}
function m1({ data: f, emit: y }) {
  const v = f.briefing ?? {}, r = v.scenario ?? {}, T = v.stages ?? [], [R, V] = Q.useState(!1);
  return Q.useEffect(() => V(!1), [f.screen, f.notice]), /* @__PURE__ */ u.jsx(Ua, { data: f, emit: y, children: /* @__PURE__ */ u.jsxs("main", { className: "briefing-page page-width", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => y("navigate", { view: "centre" }),
        children: [
          /* @__PURE__ */ u.jsx(On, { size: 16 }),
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
        /* @__PURE__ */ u.jsx(au, { size: 17 }),
        "Synthetic enterprise scenario"
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("section", { className: "briefing-metrics", children: [
      ["16 weeks", "Fixed timeline"],
      ["€1.2m", "Budget envelope"],
      ["12 systems", "Fragmented data"],
      ["10 credits", "Investigation"]
    ].map(([O, M]) => /* @__PURE__ */ u.jsxs("article", { children: [
      /* @__PURE__ */ u.jsx("strong", { children: O }),
      /* @__PURE__ */ u.jsx("span", { children: M })
    ] }, M)) }),
    /* @__PURE__ */ u.jsxs("section", { className: "briefing-body", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "briefing-main", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Your mandate" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Turn ambiguity into a defensible release recommendation." }),
        /* @__PURE__ */ u.jsx("p", { className: "briefing-premise", children: r.premise }),
        /* @__PURE__ */ u.jsx("h3", { children: "Known constraints" }),
        /* @__PURE__ */ u.jsx("div", { className: "constraint-grid", children: [
          ["Commercial pressure", "The sponsor has already announced an aggressive savings ambition."],
          ["Model approval", "The preferred external LLM has not been approved."],
          ["Data sovereignty", "European data-processing constraints apply."],
          ["Decision authority", "Governance ownership and the meaning of business release remain unresolved."]
        ].map(([O, M], _) => /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("span", { children: String(_ + 1).padStart(2, "0") }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: O }),
            /* @__PURE__ */ u.jsx("p", { children: M })
          ] })
        ] }, O)) }),
        /* @__PURE__ */ u.jsx("h3", { children: "Programme stages" }),
        /* @__PURE__ */ u.jsx("div", { className: "briefing-stages", children: T.map((O, M) => {
          const _ = rh[M] ?? Mn;
          return /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(_, { size: 17 }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsxs("small", { children: [
                "Stage ",
                M + 1
              ] }),
              /* @__PURE__ */ u.jsx("strong", { children: O.label }),
              /* @__PURE__ */ u.jsx("p", { children: O.purpose })
            ] })
          ] }, O.id);
        }) })
      ] }),
      /* @__PURE__ */ u.jsxs("aside", { className: "briefing-rules", children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Before you enter" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Commit means permanent." }),
        /* @__PURE__ */ u.jsxs("ul", { children: [
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(tu, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Investigate deliberately" }),
              "Evidence windows can close."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Ys, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Make the record complete" }),
              "Owner, rationale, assumption, risk and stop condition."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Bs, { size: 17 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "No live coaching" }),
              "Scores and preferred paths stay concealed."
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("li", { children: [
            /* @__PURE__ */ u.jsx(Rs, { size: 17 }),
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
          /* @__PURE__ */ u.jsx(Ii, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "75–90 minutes" }),
            /* @__PURE__ */ u.jsx("span", { children: "Save and resume at any point" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs(
          $e,
          {
            className: "button-full",
            busy: R,
            onClick: () => {
              V(!0), y("start_run");
            },
            children: [
              "Enter the Arena ",
              !R && /* @__PURE__ */ u.jsx(Cl, { size: 17 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function v1({ stages: f, run: y }) {
  const v = new Set((y.history ?? []).map((r) => r.decision_id));
  return /* @__PURE__ */ u.jsx("div", { className: "stage-rail", "aria-label": "Programme stages", children: f.map((r, T) => {
    const R = (r.decision_ids ?? []).every((M) => v.has(M)), V = r.id === y.stage?.id, O = rh[T] ?? Mn;
    return /* @__PURE__ */ u.jsxs("div", { className: Bl("stage-step", R && "done", V && "active"), children: [
      /* @__PURE__ */ u.jsx("span", { className: "stage-step-icon", children: R ? /* @__PURE__ */ u.jsx(at, { size: 14 }) : /* @__PURE__ */ u.jsx(O, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Stage ",
          T + 1
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: r.label })
      ] })
    ] }, r.id);
  }) });
}
function y1({ data: f, emit: y }) {
  const v = f.run ?? {}, r = v.current_decision ?? {}, T = `${v.run_id}:${r.id}`, R = Q.useMemo(
    () => u1(
      f,
      String(v.run_id),
      String(r.id),
      Number(v.revision)
    ),
    [
      f.local_mode,
      f.user?.id,
      r.id,
      v.revision,
      v.run_id
    ]
  ), V = Q.useMemo(
    () => lh(R, f.draft ?? Fi),
    [T, R]
  ), [O, M] = Q.useState(V.draft), [_, J] = Q.useState("evidence"), [U, ue] = Q.useState("all"), [ye, De] = Q.useState(""), [Z, _e] = Q.useState(null), [Re, Be] = Q.useState(
    V.synced === tt(V.draft) ? "Cloud synchronized" : "Recovered on this device"
  ), [Ce, Ke] = Q.useState([]), [yl, Ve] = Q.useState(0), W = Q.useRef(tt(f.draft ?? Fi)), be = Q.useRef(null), al = Q.useRef(T), El = Q.useMemo(
    () => i1(f, String(v.run_id)),
    [f.local_mode, f.user?.id, v.run_id]
  ), [nl, Ye] = Q.useState(
    () => ah(El)
  );
  Q.useEffect(() => {
    if (al.current !== T) {
      al.current = T;
      const j = f.draft ?? Fi, L = lh(R, j);
      M(L.draft), W.current = tt(j), be.current = null, Be(
        L.synced === tt(L.draft) ? "Cloud synchronized" : "Recovered on this device"
      ), Ke([]), _e(null);
    }
  }, [T, f.draft, R]), Q.useEffect(() => {
    Ye(ah(El));
  }, [El]), Q.useEffect(() => {
    (f.notice || f.sync) && _e(null);
    const j = be.current;
    if (j && f.sync?.decision_id === r.id && f.sync?.sync_id === j.id) {
      W.current = j.serialized, Ms(R, O, j.serialized), be.current = null, Be(
        tt(O) === j.serialized ? "Cloud synchronized" : "Saved on this device"
      );
      return;
    }
    f.notice?.kind === "error" && j && (be.current = null, Be("Saved on this device · retry pending"), Ve((L) => L + 1));
  }, [
    f.notice,
    f.sync?.saved_at,
    f.sync?.sync_id,
    r.id,
    O,
    R
  ]), Q.useEffect(() => {
    const j = tt(O);
    if (j === W.current) {
      Ms(R, O, j), Be("Cloud synchronized");
      return;
    }
    Ms(R, O), Be("Saved on this device");
    const L = window.setTimeout(() => {
      if (be.current?.serialized === j) return;
      const I = th();
      be.current = { id: I, serialized: j }, Be("Syncing to cloud…"), y("save_draft", {
        run_id: v.run_id,
        decision_id: r.id,
        expected_revision: v.revision,
        sync_id: I,
        draft: O
      });
    }, 1e4);
    return () => window.clearTimeout(L);
  }, [
    O,
    R,
    r.id,
    y,
    v.revision,
    v.run_id,
    yl
  ]);
  const Tl = (v.evidence ?? []).filter(
    (j) => ["available", "verified"].includes(j.state)
  ), il = v.operational_signals ?? [], Je = Tl.filter(
    (j) => j.request_week !== null && j.request_week !== void 0
  ), S = new Set(Je.map((j) => j.id)), D = il.slice(
    Math.min(nl.signalCount, il.length)
  ), Y = Je.filter(
    (j) => !nl.evidenceIds.includes(j.id)
  ), ie = (v.crises ?? []).find(
    (j) => j.linked_decision === r.id
  ), re = (v.evidence ?? []).filter((j) => {
    const L = `${j.id} ${j.title}`.toLowerCase().includes(ye.toLowerCase()), I = U === "all" || U === "available" && ["available", "verified"].includes(j.state) || U === "requested" && j.state === "requested" || U === "requestable" && j.state === "requestable";
    return L && I;
  }).sort(
    (j, L) => Number(S.has(L.id)) - Number(S.has(j.id))
  ), o = (j, L) => M((I) => ({ ...I, [j]: L })), A = () => ({
    run_id: v.run_id,
    decision_id: r.id,
    expected_revision: v.revision,
    draft: O
  }), C = (j, L = {}) => {
    if (j === "navigate" || j === "sign_out") {
      Be("Syncing before exit…"), y(j, { ...L, ...A() });
      return;
    }
    y(j, L);
  }, q = (j) => {
    const L = tt(O), I = th();
    be.current = { id: I, serialized: L }, _e(`evidence:${j}`), Be("Syncing to cloud…"), y("request_evidence", {
      evidence_id: j,
      sync_id: I,
      ...A()
    });
  }, w = (j) => {
    J(j), j !== "record" && (j === "evidence" && (ue("available"), De("")), Ye((L) => {
      const I = {
        signalCount: j === "signals" ? il.length : L.signalCount,
        evidenceIds: j === "evidence" ? Array.from(
          /* @__PURE__ */ new Set([
            ...L.evidenceIds,
            ...Je.map((Mt) => Mt.id)
          ])
        ) : L.evidenceIds
      };
      return s1(El, I), I;
    }));
  }, F = () => {
    const j = f1(O);
    if (Ke(j), j.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    _e("review"), y("review_decision", {
      ...A()
    });
  };
  return /* @__PURE__ */ u.jsx(Ua, { data: f, emit: C, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "cockpit", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "cockpit-topbar", children: [
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          type: "button",
          onClick: () => C("navigate", {
            view: "centre",
            run_id: v.run_id
          }),
          children: [
            /* @__PURE__ */ u.jsx(On, { size: 15 }),
            " Run centre"
          ]
        }
      ),
      /* @__PURE__ */ u.jsx(v1, { stages: f.stages ?? [], run: v }),
      /* @__PURE__ */ u.jsxs("div", { className: "save-state", children: [
        /* @__PURE__ */ u.jsx(Ds, { size: 15 }),
        /* @__PURE__ */ u.jsx("span", { children: Re }),
        /* @__PURE__ */ u.jsxs("small", { children: [
          "Rev ",
          v.revision
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "decision-titlebar", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
          v.stage?.label,
          " · Week ",
          r.week
        ] }),
        /* @__PURE__ */ u.jsxs("h1", { children: [
          r.id,
          ". ",
          r.title
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "decision-progress", children: [
        /* @__PURE__ */ u.jsx("strong", { children: Number(v.progress?.completed ?? 0) + 1 }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "of ",
          v.progress?.total
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "cockpit-grid", children: [
      /* @__PURE__ */ u.jsxs("section", { className: "decision-workspace", children: [
        (D.length > 0 || Y.length > 0) && /* @__PURE__ */ u.jsxs("section", { className: "change-strip", "aria-live": "polite", children: [
          /* @__PURE__ */ u.jsx("span", { className: "change-strip-icon", children: /* @__PURE__ */ u.jsx(t1, { size: 18 }) }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "Changes since your last decision" }),
            /* @__PURE__ */ u.jsx("p", { children: [
              D.length > 0 ? `${D.length} new operational ${D.length === 1 ? "signal" : "signals"}` : null,
              Y.length > 0 ? `${Y.length} evidence ${Y.length === 1 ? "item has" : "items have"} arrived` : null
            ].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "change-strip-actions", children: [
            D.length > 0 && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => w("signals"), children: [
              "View signals ",
              /* @__PURE__ */ u.jsx(Os, { size: 15 })
            ] }),
            Y.length > 0 && /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => w("evidence"), children: [
              "View evidence ",
              /* @__PURE__ */ u.jsx(Os, { size: 15 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("article", { className: "situation-panel", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "panel-label", children: [
            /* @__PURE__ */ u.jsx(nu, { size: 15 }),
            " Decision moment"
          ] }),
          /* @__PURE__ */ u.jsx("p", { className: "decision-moment", children: r.moment }),
          /* @__PURE__ */ u.jsxs("div", { className: "known-info", children: [
            /* @__PURE__ */ u.jsx(eu, { size: 17 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Known information" }),
              /* @__PURE__ */ u.jsx("p", { children: r.information })
            ] })
          ] })
        ] }),
        ie && /* @__PURE__ */ u.jsxs("article", { className: "crisis-alert", children: [
          /* @__PURE__ */ u.jsx(Dn, { size: 20 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: ie.observation })
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
          /* @__PURE__ */ u.jsx("div", { className: "option-list", role: "radiogroup", "aria-label": "Action choices", children: (r.options ?? []).map((j) => /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": O.option_id === j.id,
              className: Bl("option-card", O.option_id === j.id && "selected"),
              onClick: () => o("option_id", j.id),
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "option-letter", children: j.id }),
                /* @__PURE__ */ u.jsx("span", { className: "option-label", children: j.label }),
                /* @__PURE__ */ u.jsx("span", { className: "radio-mark", children: O.option_id === j.id && /* @__PURE__ */ u.jsx(at, { size: 14 }) })
              ]
            },
            j.id
          )) })
        ] }),
        /* @__PURE__ */ u.jsxs("section", { className: "decision-form", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "step-number", children: "2" }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { children: "Build the decision record" }),
              /* @__PURE__ */ u.jsx("p", { children: r.required_response })
            ] })
          ] }),
          Ce.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "validation-summary", role: "alert", children: [
            /* @__PURE__ */ u.jsx(qs, { size: 18 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("strong", { children: "Complete the record before review" }),
              /* @__PURE__ */ u.jsx("ul", { children: Ce.map((j) => /* @__PURE__ */ u.jsx("li", { children: j }, j)) })
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
                onChange: (j) => o("rationale", j.target.value),
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
                  onChange: (j) => o("owner", j.target.value),
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
                  onChange: (j) => o("acceptance_condition", j.target.value),
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
                  onChange: (j) => o("assumptions", j.target.value),
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
                  onChange: (j) => o("risk", j.target.value),
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
            Tl.length === 0 ? /* @__PURE__ */ u.jsx("p", { children: "No evidence is currently available to cite." }) : /* @__PURE__ */ u.jsx("div", { className: "citation-list", children: Tl.map((j) => {
              const L = O.evidence_refs.includes(j.id);
              return /* @__PURE__ */ u.jsxs("label", { className: L ? "selected" : "", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: L,
                    onChange: () => o(
                      "evidence_refs",
                      L ? O.evidence_refs.filter((I) => I !== j.id) : [...O.evidence_refs, j.id]
                    )
                  }
                ),
                /* @__PURE__ */ u.jsxs("span", { children: [
                  /* @__PURE__ */ u.jsx("strong", { children: j.id }),
                  j.title
                ] })
              ] }, j.id);
            }) })
          ] }),
          r.id === "D20" && O.option_id === "F" && /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
            /* @__PURE__ */ u.jsx("span", { children: "Custom final route" }),
            /* @__PURE__ */ u.jsx(
              "select",
              {
                value: O.terminal_route,
                onChange: (j) => o("terminal_route", j.target.value),
                children: ["conditional_release", "reduced_scope", "extended_pilot", "pause", "full_release"].map((j) => /* @__PURE__ */ u.jsx("option", { value: j, children: j.replaceAll("_", " ").replace(/\b\w/g, (L) => L.toUpperCase()) }, j))
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "decision-actions", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(Ds, { size: 15 }),
              /* @__PURE__ */ u.jsx("span", { children: Re })
            ] }),
            /* @__PURE__ */ u.jsxs($e, { busy: Z === "review", onClick: F, children: [
              "Review decision ",
              !Z && /* @__PURE__ */ u.jsx(Cl, { size: 17 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("aside", { className: "context-panel", children: [
        /* @__PURE__ */ u.jsx("div", { className: "context-tabs", role: "tablist", children: [
          [
            "evidence",
            Y.length > 0 ? `Evidence · ${Y.length} arrived` : "Evidence",
            kv
          ],
          [
            "signals",
            D.length > 0 ? `Signals · ${D.length} new` : "Signals",
            Pi
          ],
          ["record", "Record", Wv]
        ].map(([j, L, I]) => /* @__PURE__ */ u.jsxs(
          "button",
          {
            type: "button",
            className: _ === j ? "active" : "",
            role: "tab",
            "aria-selected": _ === j,
            onClick: () => w(j),
            children: [
              /* @__PURE__ */ u.jsx(I, { size: 15 }),
              " ",
              /* @__PURE__ */ u.jsx("span", { children: L })
            ]
          },
          j
        )) }),
        _ === "evidence" && /* @__PURE__ */ u.jsxs("div", { className: "context-content evidence-desk", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "credit-card", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(n1, { size: 18 }),
              /* @__PURE__ */ u.jsx("span", { children: "Investigation credits" })
            ] }),
            /* @__PURE__ */ u.jsxs("strong", { children: [
              v.credits?.remaining,
              /* @__PURE__ */ u.jsxs("small", { children: [
                " / ",
                v.credits?.total
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "credit-track", children: /* @__PURE__ */ u.jsx("span", { style: { width: `${v.credits?.remaining / v.credits?.total * 100}%` } }) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "evidence-tools", children: [
            /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx(tu, { size: 15 }),
              /* @__PURE__ */ u.jsx("input", { value: ye, onChange: (j) => De(j.target.value), placeholder: "Search evidence" })
            ] }),
            /* @__PURE__ */ u.jsxs("select", { value: U, onChange: (j) => ue(j.target.value), children: [
              /* @__PURE__ */ u.jsx("option", { value: "all", children: "All states" }),
              /* @__PURE__ */ u.jsx("option", { value: "available", children: "Cite now" }),
              /* @__PURE__ */ u.jsx("option", { value: "requested", children: "Due later" }),
              /* @__PURE__ */ u.jsx("option", { value: "requestable", children: "Order for later" })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "evidence-list", children: re.map((j) => /* @__PURE__ */ u.jsx(
            g1,
            {
              item: j,
              arrived: S.has(j.id),
              credits: v.credits?.remaining,
              busy: Z === `evidence:${j.id}`,
              onRequest: () => q(j.id)
            },
            j.id
          )) })
        ] }),
        _ === "signals" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Operational view" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Observable signals" })
          ] }),
          (v.operational_signals ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Cs, { children: "No consequence signals have been observed yet." }) : /* @__PURE__ */ u.jsx("div", { className: "signal-list", children: (v.operational_signals ?? []).slice(-8).reverse().map((j, L) => /* @__PURE__ */ u.jsxs("article", { children: [
            /* @__PURE__ */ u.jsx(Pi, { size: 15 }),
            /* @__PURE__ */ u.jsx("p", { children: j })
          ] }, `${j}-${L}`)) }),
          ie && /* @__PURE__ */ u.jsxs("div", { className: "context-crisis", children: [
            /* @__PURE__ */ u.jsx(Dn, { size: 16 }),
            /* @__PURE__ */ u.jsx("p", { children: ie.observation })
          ] })
        ] }),
        _ === "record" && /* @__PURE__ */ u.jsxs("div", { className: "context-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "context-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Immutable ledger" }),
            /* @__PURE__ */ u.jsx("h3", { children: "Committed record" })
          ] }),
          (v.history ?? []).length === 0 ? /* @__PURE__ */ u.jsx(Cs, { children: "Committed decisions will appear here." }) : /* @__PURE__ */ u.jsx("div", { className: "history-list", children: [...v.history ?? []].reverse().map((j) => /* @__PURE__ */ u.jsxs("details", { children: [
            /* @__PURE__ */ u.jsxs("summary", { children: [
              /* @__PURE__ */ u.jsx("span", { children: j.decision_id }),
              /* @__PURE__ */ u.jsx("strong", { children: j.title }),
              /* @__PURE__ */ u.jsx(Cn, { size: 15 })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("small", { children: "Committed action" }),
              /* @__PURE__ */ u.jsx("p", { children: j.choice_label }),
              /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
              /* @__PURE__ */ u.jsx("p", { children: j.rationale })
            ] })
          ] }, j.decision_id)) }),
          /* @__PURE__ */ u.jsxs("div", { className: "ledger-chip", children: [
            /* @__PURE__ */ u.jsx(lu, { size: 14 }),
            " ",
            v.ledger?.entries,
            " ledger entries"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function g1({
  item: f,
  arrived: y,
  credits: v,
  busy: r,
  onRequest: T
}) {
  const [R, V] = Q.useState(["available", "verified"].includes(f.state)), O = {
    available: "Cite now",
    verified: "Cite now",
    requested: f.arrival_week !== null && f.arrival_week !== void 0 ? `Due Week ${f.arrival_week}` : "Due later",
    requestable: "Order for later",
    unavailable: "Window closed"
  }, M = f.state === "requestable" && v >= f.cost;
  return /* @__PURE__ */ u.jsxs("article", { className: Bl("evidence-item", `evidence-${f.state}`, y && "evidence-arrived"), children: [
    /* @__PURE__ */ u.jsxs("button", { className: "evidence-summary", type: "button", onClick: () => V((_) => !_), children: [
      /* @__PURE__ */ u.jsx("span", { className: "evidence-state-icon", children: ["available", "verified"].includes(f.state) ? /* @__PURE__ */ u.jsx(at, { size: 14 }) : f.state === "requested" ? /* @__PURE__ */ u.jsx(Ii, { size: 14 }) : /* @__PURE__ */ u.jsx(Gs, { size: 14 }) }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("small", { children: f.id }),
        /* @__PURE__ */ u.jsx("strong", { children: f.title })
      ] }),
      /* @__PURE__ */ u.jsx("span", { className: "evidence-status", children: O[f.state] ?? f.state }),
      /* @__PURE__ */ u.jsx(Cn, { size: 15, className: R ? "rotated" : "" })
    ] }),
    R && /* @__PURE__ */ u.jsxs("div", { className: "evidence-detail", children: [
      f.reveal ? /* @__PURE__ */ u.jsx("p", { children: f.reveal }) : f.state === "requested" ? /* @__PURE__ */ u.jsxs("p", { children: [
        "Ordered in Week ",
        f.request_week,
        ". It becomes citable in Week ",
        f.arrival_week,
        "."
      ] }) : /* @__PURE__ */ u.jsx("p", { children: "Order this finding now. Its contents remain sealed until the due week." }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { children: f.cost === 0 ? "Included" : `${f.cost} credit` }),
        y ? /* @__PURE__ */ u.jsxs("span", { children: [
          "Arrived Week ",
          f.arrival_week
        ] }) : /* @__PURE__ */ u.jsxs("span", { children: [
          f.lead_time_weeks,
          " week lead"
        ] })
      ] }),
      M && /* @__PURE__ */ u.jsxs($e, { variant: "secondary", className: "button-full", busy: r, onClick: T, children: [
        "Order for later ",
        !r && /* @__PURE__ */ u.jsx(Cl, { size: 15 })
      ] }),
      f.state === "requestable" && !M && /* @__PURE__ */ u.jsx("small", { className: "insufficient-credit", children: "Insufficient investigation credits" })
    ] })
  ] });
}
function p1({ data: f, emit: y }) {
  const v = f.run ?? {}, r = v.current_decision ?? {}, T = f.draft ?? Fi, R = (r.options ?? []).find((U) => U.id === T.option_id), V = (v.evidence ?? []).filter((U) => T.evidence_refs.includes(U.id)), [O, M] = Q.useState(!1), [_, J] = Q.useState(!1);
  return Q.useEffect(() => J(!1), [f.notice, f.screen]), /* @__PURE__ */ u.jsx(Ua, { data: f, emit: y, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "review-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "text-back",
        type: "button",
        onClick: () => y("navigate", { view: "decision", run_id: v.run_id }),
        children: [
          /* @__PURE__ */ u.jsx(On, { size: 16 }),
          " Back to edit"
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("section", { className: "review-heading", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Review before permanent commitment" }),
      /* @__PURE__ */ u.jsxs("h1", { children: [
        r.id,
        ". ",
        r.title
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: "This is the last editable boundary. Confirm the record reflects the judgment you intend to defend." })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "review-card", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "review-action", children: [
        /* @__PURE__ */ u.jsx("span", { className: "option-letter", children: R?.id }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Selected action" }),
          /* @__PURE__ */ u.jsx("h2", { children: R?.label })
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
      /* @__PURE__ */ u.jsx(Dn, { size: 22 }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h3", { children: "Permanent commitment boundary" }),
        /* @__PURE__ */ u.jsx("p", { children: "After commitment, this decision cannot be edited, replaced or silently rewritten." }),
        /* @__PURE__ */ u.jsxs("label", { children: [
          /* @__PURE__ */ u.jsx("input", { type: "checkbox", checked: O, onChange: (U) => M(U.target.checked) }),
          /* @__PURE__ */ u.jsx("span", { children: "I understand this decision becomes permanent." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "review-actions", children: [
      /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => y("navigate", { view: "decision", run_id: v.run_id }), children: [
        /* @__PURE__ */ u.jsx(On, { size: 16 }),
        " Back to edit"
      ] }),
      /* @__PURE__ */ u.jsxs(
        $e,
        {
          disabled: !O,
          busy: _,
          onClick: () => {
            J(!0), y("commit_decision", { run_id: v.run_id, confirmed: !0 });
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
function x1({ data: f, emit: y }) {
  const v = f.consequence ?? {}, r = f.run ?? {}, [T, R] = Q.useState(!1);
  Q.useEffect(() => R(!1), [f.notice, f.screen]);
  const V = (v.signals ?? []).length || (v.crises ?? []).length || (v.evidence_arrived ?? []).length;
  return /* @__PURE__ */ u.jsx(Ua, { data: f, emit: y, compact: !0, children: /* @__PURE__ */ u.jsxs("main", { className: "consequence-page page-width-narrow", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "commit-success", children: [
      /* @__PURE__ */ u.jsx("span", { className: "success-ring", children: /* @__PURE__ */ u.jsx(at, { size: 28 }) }),
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Decision recorded" }),
      /* @__PURE__ */ u.jsxs("h1", { children: [
        v.decision_id,
        " is now permanent."
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: v.choice }),
      /* @__PURE__ */ u.jsxs("div", { className: "ledger-confirmation", children: [
        /* @__PURE__ */ u.jsx(lu, { size: 14 }),
        " Added to immutable run ledger · revision ",
        r.revision
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "observable-panel", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-title", children: [
        /* @__PURE__ */ u.jsx("span", { className: "step-number", children: /* @__PURE__ */ u.jsx(Bs, { size: 16 }) }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("h2", { children: "Observable consequence" }),
          /* @__PURE__ */ u.jsx("p", { children: "Only legitimate operational signals are shown during a first attempt." })
        ] })
      ] }),
      !V && /* @__PURE__ */ u.jsxs("article", { className: "neutral-observation", children: [
        /* @__PURE__ */ u.jsx(eu, { size: 18 }),
        /* @__PURE__ */ u.jsx("p", { children: "No new operational signal was observable at this boundary." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "observation-list", children: [
        (v.signals ?? []).map((O, M) => /* @__PURE__ */ u.jsxs("article", { className: "observation signal-observation", children: [
          /* @__PURE__ */ u.jsx(Pi, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "New signal" }),
            /* @__PURE__ */ u.jsx("p", { children: O })
          ] })
        ] }, `${O}-${M}`)),
        (v.crises ?? []).map((O) => /* @__PURE__ */ u.jsxs("article", { className: "observation crisis-observation", children: [
          /* @__PURE__ */ u.jsx(Dn, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Material event" }),
            /* @__PURE__ */ u.jsx("p", { children: O.observation })
          ] })
        ] }, O.id)),
        (v.evidence_arrived ?? []).map((O) => /* @__PURE__ */ u.jsxs("article", { className: "observation evidence-observation", children: [
          /* @__PURE__ */ u.jsx(Ys, { size: 18 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("small", { children: "Evidence arrived" }),
            /* @__PURE__ */ u.jsxs("p", { children: [
              O,
              " is now available."
            ] })
          ] })
        ] }, O))
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("aside", { className: "spoiler-note", children: [
      /* @__PURE__ */ u.jsx(au, { size: 18 }),
      /* @__PURE__ */ u.jsx("p", { children: "No score, critical-gate outcome or preferred-path coaching is exposed during a first attempt." })
    ] }),
    /* @__PURE__ */ u.jsxs(
      $e,
      {
        className: "button-full consequence-next",
        busy: T,
        onClick: () => {
          R(!0), y("continue_consequence", { run_id: r.run_id });
        },
        children: [
          v.completed ? "Open executive debrief" : `Continue to ${v.next_decision}`,
          !T && /* @__PURE__ */ u.jsx(Cl, { size: 17 })
        ]
      }
    )
  ] }) });
}
function j1({ data: f, emit: y }) {
  const v = f.report ?? {}, r = f.run ?? {}, [T, R] = Q.useState("summary"), V = (v.gates ?? []).filter((O) => O.status === "fail");
  return /* @__PURE__ */ u.jsx(Ua, { data: f, emit: y, children: /* @__PURE__ */ u.jsxs("main", { className: "debrief-page", children: [
    /* @__PURE__ */ u.jsx("section", { className: "debrief-hero", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width debrief-hero-inner", children: [
      /* @__PURE__ */ u.jsxs("button", { className: "text-back text-back-light", type: "button", onClick: () => y("navigate", { view: "centre" }), children: [
        /* @__PURE__ */ u.jsx(On, { size: 16 }),
        " Run centre"
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-heading-grid", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Executive debrief" }),
          /* @__PURE__ */ u.jsx("h1", { children: v.recommendation }),
          /* @__PURE__ */ u.jsx("p", { children: v.scope_assessed })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "score-lockup", children: [
          /* @__PURE__ */ u.jsx("strong", { children: v.reported_overall }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: "Provisional score" }),
            /* @__PURE__ */ u.jsx("b", { children: v.provisional_label })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "debrief-facts", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Release decision" }),
          /* @__PURE__ */ u.jsx("strong", { className: v.release_valid ? "positive" : "negative", children: v.release_valid ? "Valid" : "Invalid" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Critical gates failed" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            V.length,
            " / ",
            (v.gates ?? []).length
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Decisions recorded" }),
          /* @__PURE__ */ u.jsx("strong", { children: (v.timeline ?? []).length })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Ledger verified" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            /* @__PURE__ */ u.jsx(au, { size: 15 }),
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
    ].map(([O, M]) => /* @__PURE__ */ u.jsx("button", { className: T === O ? "active" : "", type: "button", onClick: () => R(O), children: M }, O)) }) }),
    /* @__PURE__ */ u.jsxs("section", { className: "debrief-content page-width", children: [
      T === "summary" && /* @__PURE__ */ u.jsx(b1, { report: v }),
      T === "gates" && /* @__PURE__ */ u.jsx(S1, { gates: v.gates ?? [] }),
      T === "scorecard" && /* @__PURE__ */ u.jsx(z1, { dimensions: v.dimensions ?? [] }),
      T === "timeline" && /* @__PURE__ */ u.jsx(_1, { timeline: v.timeline ?? [] })
    ] }),
    /* @__PURE__ */ u.jsx("section", { className: "export-band", children: /* @__PURE__ */ u.jsxs("div", { className: "page-width export-inner", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow eyebrow-light", children: "Portable evidence" }),
        /* @__PURE__ */ u.jsx("h2", { children: "Take the complete record with you." }),
        /* @__PURE__ */ u.jsx("p", { children: "Download the executive report or the replay-verifiable completed run." })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs($e, { variant: "secondary", onClick: () => nh(`${r.run_id}-debrief.json`, v), children: [
          /* @__PURE__ */ u.jsx($v, { size: 16 }),
          " Evidence pack"
        ] }),
        /* @__PURE__ */ u.jsxs(
          $e,
          {
            disabled: !f.completed_run_document,
            onClick: () => nh(`${r.run_id}.json`, f.completed_run_document),
            children: [
              /* @__PURE__ */ u.jsx(Gs, { size: 16 }),
              " Completed run"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs("div", { className: "page-width calibration-notice", children: [
      /* @__PURE__ */ u.jsx(eu, { size: 17 }),
      /* @__PURE__ */ u.jsx("p", { children: v.notice })
    ] })
  ] }) });
}
function b1({ report: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "summary-view", children: [
    /* @__PURE__ */ u.jsxs("section", { className: "judgment-columns", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ u.jsx(Hs, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Strongest evidence" }),
            /* @__PURE__ */ u.jsx("h2", { children: "Judgments that held" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (f.strengths ?? []).map((y) => /* @__PURE__ */ u.jsxs("article", { className: "strength-card", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: y.criterion_id }),
            /* @__PURE__ */ u.jsx("strong", { children: y.score })
          ] }),
          /* @__PURE__ */ u.jsx("h3", { children: y.name }),
          /* @__PURE__ */ u.jsx("p", { children: y.why }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            "Supporting decisions: ",
            (y.evidence ?? []).join(", ") || "Structural evidence"
          ] })
        ] }, y.criterion_id)) })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
          /* @__PURE__ */ u.jsx(nu, { size: 19 }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Replay priorities" }),
            /* @__PURE__ */ u.jsx("h2", { children: "Where judgment broke" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "judgment-list", children: (f.development_needs ?? []).map((y) => /* @__PURE__ */ u.jsxs("article", { className: "priority-card", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("span", { children: y.criterion_id }),
            /* @__PURE__ */ u.jsx("strong", { children: y.score })
          ] }),
          /* @__PURE__ */ u.jsx("h3", { children: y.name }),
          /* @__PURE__ */ u.jsx("p", { children: y.priority }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            "Contrary evidence: ",
            (y.contrary_evidence ?? []).join(", ") || "Insufficient evidence"
          ] })
        ] }, y.criterion_id)) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "perspective-section", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "subsection-heading", children: [
        /* @__PURE__ */ u.jsx(Xs, { size: 19 }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Executive perspectives" }),
          /* @__PURE__ */ u.jsx("h2", { children: "How the decision reads upstairs" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "perspective-grid", children: (f.perspectives ?? []).map((y) => /* @__PURE__ */ u.jsxs("article", { children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: y.role }),
          /* @__PURE__ */ u.jsx("strong", { children: y.score })
        ] }),
        /* @__PURE__ */ u.jsx("p", { children: y.view })
      ] }, y.role)) })
    ] })
  ] });
}
function S1({ gates: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "gate-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Non-compensable controls" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Critical gates" }),
      /* @__PURE__ */ u.jsx("p", { children: "A failed critical gate cannot be offset by strength elsewhere." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "gate-grid", children: f.map((y) => /* @__PURE__ */ u.jsxs("article", { className: Bl("gate-card", y.status === "pass" ? "gate-pass" : "gate-fail"), children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("span", { children: [
          y.status === "pass" ? /* @__PURE__ */ u.jsx(Hs, { size: 18 }) : /* @__PURE__ */ u.jsx(qs, { size: 18 }),
          y.status.toUpperCase()
        ] }),
        /* @__PURE__ */ u.jsx("strong", { children: y.gate_id })
      ] }),
      /* @__PURE__ */ u.jsx("h3", { children: y.name }),
      /* @__PURE__ */ u.jsx("p", { children: y.reason })
    ] }, y.gate_id)) })
  ] });
}
function z1({ dimensions: f }) {
  const [y, v] = Q.useState(f[0]?.id ?? null);
  return /* @__PURE__ */ u.jsxs("div", { className: "scorecard-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Seven dimensions · 28 criteria" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Competency scorecard" }),
      /* @__PURE__ */ u.jsx("p", { children: "Scores reflect recorded actions, chronology, controls and evidence citations." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "dimension-list", children: f.map((r) => /* @__PURE__ */ u.jsxs("article", { className: "dimension-card", children: [
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => v(y === r.id ? null : r.id), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "dimension-score", children: [
          /* @__PURE__ */ u.jsx("strong", { children: r.reported_score.toFixed(1) }),
          /* @__PURE__ */ u.jsx("span", { children: "/ 100" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "dimension-name", children: [
          /* @__PURE__ */ u.jsx("strong", { children: r.label }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Weight ",
            Math.round(r.weight * 100),
            "%",
            r.cap != null ? ` · capped at ${r.cap}` : ""
          ] }),
          /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("i", { style: { width: `${Math.max(0, Math.min(100, r.reported_score))}%` } }) })
        ] }),
        /* @__PURE__ */ u.jsx(Cn, { size: 18, className: y === r.id ? "rotated" : "" })
      ] }),
      y === r.id && /* @__PURE__ */ u.jsxs("div", { className: "criterion-table", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { children: "Criterion" }),
          /* @__PURE__ */ u.jsx("span", { children: "Score" }),
          /* @__PURE__ */ u.jsx("span", { children: "Recorded evidence" })
        ] }),
        (r.criteria ?? []).map((T) => /* @__PURE__ */ u.jsxs("article", { children: [
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
    ] }, r.id)) })
  ] });
}
function _1({ timeline: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "timeline-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-lead", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "Chronological evidence" }),
      /* @__PURE__ */ u.jsx("h2", { children: "Decision timeline" }),
      /* @__PURE__ */ u.jsx("p", { children: "The first-attempt record exactly as it was committed." })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "timeline-list", children: f.map((y) => /* @__PURE__ */ u.jsxs("details", { children: [
      /* @__PURE__ */ u.jsxs("summary", { children: [
        /* @__PURE__ */ u.jsx("span", { children: y.decision_id }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: y.title }),
          /* @__PURE__ */ u.jsx("small", { children: y.choice })
        ] }),
        /* @__PURE__ */ u.jsx(Cn, { size: 18 })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "timeline-detail", children: [
        /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Rationale" }),
          /* @__PURE__ */ u.jsx("p", { children: y.rationale })
        ] }),
        (y.signals ?? []).length > 0 && /* @__PURE__ */ u.jsxs("article", { children: [
          /* @__PURE__ */ u.jsx("small", { children: "Observable signals" }),
          /* @__PURE__ */ u.jsx("p", { children: y.signals.join(" · ") })
        ] }),
        (y.crises ?? []).length > 0 && /* @__PURE__ */ u.jsxs("article", { className: "timeline-crisis", children: [
          /* @__PURE__ */ u.jsx("small", { children: "Material events" }),
          /* @__PURE__ */ u.jsx("p", { children: y.crises.join(" · ") })
        ] })
      ] })
    ] }, y.decision_id)) })
  ] });
}
function N1({ data: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "fatal-page", children: [
    /* @__PURE__ */ u.jsx("span", { className: "brand-mark", children: "A" }),
    /* @__PURE__ */ u.jsx(Dn, { size: 30 }),
    /* @__PURE__ */ u.jsx("h1", { children: f.fatal?.title ?? "The Arena could not start" }),
    /* @__PURE__ */ u.jsx("p", { children: f.fatal?.message }),
    /* @__PURE__ */ u.jsxs("a", { className: "button button-primary", href: f.links?.github, target: "_blank", rel: "noreferrer", children: [
      "Open repository ",
      /* @__PURE__ */ u.jsx(ch, { size: 16 })
    ] })
  ] });
}
function A1({ data: f, emit: y }) {
  const v = f.screen, r = `${v}:${f.run?.run_id ?? ""}:${f.run?.current_decision?.id ?? ""}`;
  return Q.useEffect(() => {
    const T = document.querySelector(
      '[data-testid="stMain"]'
    );
    T && (T.scrollTop = 0), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
  }, [r]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    v === "marketing" && /* @__PURE__ */ u.jsx(o1, { data: f, emit: y }),
    v === "centre" && /* @__PURE__ */ u.jsx(h1, { data: f, emit: y }),
    v === "briefing" && /* @__PURE__ */ u.jsx(m1, { data: f, emit: y }),
    v === "decision" && /* @__PURE__ */ u.jsx(y1, { data: f, emit: y }),
    v === "review" && /* @__PURE__ */ u.jsx(p1, { data: f, emit: y }),
    v === "consequence" && /* @__PURE__ */ u.jsx(x1, { data: f, emit: y }),
    v === "debrief" && /* @__PURE__ */ u.jsx(j1, { data: f, emit: y }),
    v === "fatal" && /* @__PURE__ */ u.jsx(N1, { data: f }),
    /* @__PURE__ */ u.jsx(r1, { notice: f.notice })
  ] });
}
const ih = /* @__PURE__ */ new WeakMap(), E1 = (f) => {
  const { data: y, parentElement: v, setTriggerValue: r } = f, T = v.querySelector(".arena-react-root");
  if (!T)
    throw new Error("AI Delivery Arena React root was not found.");
  let R = ih.get(v);
  R || (R = Vv.createRoot(T), ih.set(v, R)), R.render(
    /* @__PURE__ */ u.jsx(Q.StrictMode, { children: /* @__PURE__ */ u.jsx(
      A1,
      {
        data: y,
        emit: (V, O = {}) => {
          r("event", { type: V, payload: O });
        }
      }
    ) })
  );
};
export {
  E1 as default
};
