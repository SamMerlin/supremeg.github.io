/* Phaser Box2D Plugin by Photon Storm. Built: 2015-07-07 */
var COMPILED = !1,
    goog = goog || {};
goog.global = this, goog.global.CLOSURE_UNCOMPILED_DEFINES, goog.global.CLOSURE_DEFINES, goog.isDef = function(a) {
    return void 0 !== a
}, goog.exportPath_ = function(a, b, c) {
    var d = a.split("."),
        e = c || goog.global;
    d[0] in e || !e.execScript || e.execScript("var " + d[0]);
    for (var f; d.length && (f = d.shift());) !d.length && goog.isDef(b) ? e[f] = b : e = e[f] ? e[f] : e[f] = {}
}, goog.define = function(a, b) {
    var c = b;
    COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a])), goog.exportPath_(a, c)
}, goog.DEBUG = !0, goog.define("goog.LOCALE", "en"), goog.define("goog.TRUSTED_SITE", !0), goog.define("goog.STRICT_MODE_COMPATIBLE", !1), goog.provide = function(a) {
    if (!COMPILED) {
        if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
        delete goog.implicitNamespaces_[a];
        for (var b = a;
            (b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) goog.implicitNamespaces_[b] = !0
    }
    goog.exportPath_(a)
}, goog.setTestOnly = function(a) {
    if (COMPILED && !goog.DEBUG) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."))
}, goog.forwardDeclare = function() {}, COMPILED || (goog.isProvided_ = function(a) {
    return !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a))
}, goog.implicitNamespaces_ = {}), goog.getObjectByName = function(a, b) {
    for (var c, d = a.split("."), e = b || goog.global; c = d.shift();) {
        if (!goog.isDefAndNotNull(e[c])) return null;
        e = e[c]
    }
    return e
}, goog.globalize = function(a, b) {
    var c = b || goog.global;
    for (var d in a) c[d] = a[d]
}, goog.addDependency = function(a, b, c) {
    if (goog.DEPENDENCIES_ENABLED) {
        for (var d, e, f = a.replace(/\\/g, "/"), g = goog.dependencies_, h = 0; d = b[h]; h++) g.nameToPath[d] = f, f in g.pathToNames || (g.pathToNames[f] = {}), g.pathToNames[f][d] = !0;
        for (var i = 0; e = c[i]; i++) f in g.requires || (g.requires[f] = {}), g.requires[f][e] = !0
    }
}, goog.define("goog.ENABLE_DEBUG_LOADER", !0), goog.require = function(a) {
    if (!COMPILED) {
        if (goog.isProvided_(a)) return;
        if (goog.ENABLE_DEBUG_LOADER) {
            var b = goog.getPathFromDeps_(a);
            if (b) return goog.included_[b] = !0, void goog.writeScripts_()
        }
        var c = "goog.require could not find: " + a;
        throw goog.global.console && goog.global.console.error(c), Error(c)
    }
}, goog.basePath = "", goog.global.CLOSURE_BASE_PATH, goog.global.CLOSURE_NO_DEPS, goog.global.CLOSURE_IMPORT_SCRIPT, goog.nullFunction = function() {}, goog.identityFunction = function(a) {
    return a
}, goog.abstractMethod = function() {
    throw Error("unimplemented abstract method")
}, goog.addSingletonGetter = function(a) {
    a.getInstance = function() {
        return a.instance_ ? a.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a), a.instance_ = new a)
    }
}, goog.instantiatedSingletons_ = [], goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {
    pathToNames: {},
    nameToPath: {},
    requires: {},
    visited: {},
    written: {}
}, goog.inHtmlDocument_ = function() {
    var a = goog.global.document;
    return "undefined" != typeof a && "write" in a
}, goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH) return void(goog.basePath = goog.global.CLOSURE_BASE_PATH);
    if (goog.inHtmlDocument_())
        for (var a = goog.global.document, b = a.getElementsByTagName("script"), c = b.length - 1; c >= 0; --c) {
            var d = b[c].src,
                e = d.lastIndexOf("?"),
                f = -1 == e ? d.length : e;
            if ("base.js" == d.substr(f - 7, 7)) return void(goog.basePath = d.substr(0, f - 7))
        }
}, goog.importScript_ = function(a) {
    var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0)
}, goog.writeScriptTag_ = function(a) {
    if (goog.inHtmlDocument_()) {
        var b = goog.global.document;
        if ("complete" == b.readyState) {
            var c = /\bdeps.js$/.test(a);
            if (c) return !1;
            throw Error('Cannot write "' + a + '" after document load')
        }
        return b.write('<script type="text/javascript" src="' + a + '"></script>'), !0
    }
    return !1
}, goog.writeScripts_ = function() {
    function a(e) {
        if (!(e in d.written)) {
            if (e in d.visited) return void(e in c || (c[e] = !0, b.push(e)));
            if (d.visited[e] = !0, e in d.requires)
                for (var f in d.requires[e])
                    if (!goog.isProvided_(f)) {
                        if (!(f in d.nameToPath)) throw Error("Undefined nameToPath for " + f);
                        a(d.nameToPath[f])
                    }
            e in c || (c[e] = !0, b.push(e))
        }
    }
    var b = [],
        c = {},
        d = goog.dependencies_;
    for (var e in goog.included_) d.written[e] || a(e);
    for (var f = 0; f < b.length; f++) {
        if (!b[f]) throw Error("Undefined script input");
        goog.importScript_(goog.basePath + b[f])
    }
}, goog.getPathFromDeps_ = function(a) {
    return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
}, goog.findBasePath_()), goog.typeOf = function(a) {
    var b = typeof a;
    if ("object" == b) {
        if (!a) return "null";
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}, goog.isNull = function(a) {
    return null === a
}, goog.isDefAndNotNull = function(a) {
    return null != a
}, goog.isArray = function(a) {
    return "array" == goog.typeOf(a)
}, goog.isArrayLike = function(a) {
    var b = goog.typeOf(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, goog.isDateLike = function(a) {
    return goog.isObject(a) && "function" == typeof a.getFullYear
}, goog.isString = function(a) {
    return "string" == typeof a
}, goog.isBoolean = function(a) {
    return "boolean" == typeof a
}, goog.isNumber = function(a) {
    return "number" == typeof a
}, goog.isFunction = function(a) {
    return "function" == goog.typeOf(a)
}, goog.isObject = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, goog.getUid = function(a) {
    return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
}, goog.hasUid = function(a) {
    return !!a[goog.UID_PROPERTY_]
}, goog.removeUid = function(a) {
    "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete a[goog.UID_PROPERTY_]
    } catch (b) {}
}, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(a) {
    var b = goog.typeOf(a);
    if ("object" == b || "array" == b) {
        if (a.clone) return a.clone();
        var c = "array" == b ? [] : {};
        for (var d in a) c[d] = goog.cloneObject(a[d]);
        return c
    }
    return a
}, goog.bindNative_ = function(a) {
    return a.call.apply(a.bind, arguments)
}, goog.bindJs_ = function(a, b) {
    if (!a) throw new Error;
    if (arguments.length > 2) {
        var c = Array.prototype.slice.call(arguments, 2);
        return function() {
            var d = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(d, c), a.apply(b, d)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, goog.bind = function() {
    return goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_, goog.bind.apply(null, arguments)
}, goog.partial = function(a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return function() {
        var c = b.slice();
        return c.push.apply(c, arguments), a.apply(this, c)
    }
}, goog.mixin = function(a, b) {
    for (var c in b) a[c] = b[c]
}, goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date
}, goog.globalEval = function(a) {
    if (goog.global.execScript) goog.global.execScript(a, "JavaScript");
    else {
        if (!goog.global.eval) throw Error("goog.globalEval not available");
        if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(a);
        else {
            var b = goog.global.document,
                c = b.createElement("script");
            c.type = "text/javascript", c.defer = !1, c.appendChild(b.createTextNode(a)), b.body.appendChild(c), b.body.removeChild(c)
        }
    }
}, goog.evalWorksForGlobals_ = null, goog.cssNameMapping_, goog.cssNameMappingStyle_, goog.getCssName = function(a, b) {
    var c, d = function(a) {
            return goog.cssNameMapping_[a] || a
        },
        e = function(a) {
            for (var b = a.split("-"), c = [], e = 0; e < b.length; e++) c.push(d(b[e]));
            return c.join("-")
        };
    return c = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? d : e : function(a) {
        return a
    }, b ? a + "-" + c(b) : c(a)
}, goog.setCssNameMapping = function(a, b) {
    goog.cssNameMapping_ = a, goog.cssNameMappingStyle_ = b
}, goog.global.CLOSURE_CSS_NAME_MAPPING, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(a, b) {
    return b && (a = a.replace(/\{\$([^}]+)}/g, function(a, c) {
        return c in b ? b[c] : a
    })), a
}, goog.getMsgWithFallback = function(a) {
    return a
}, goog.exportSymbol = function(a, b, c) {
    goog.exportPath_(a, b, c)
}, goog.exportProperty = function(a, b, c) {
    a[b] = c
}, goog.inherits = function(a, b) {
    function c() {}
    c.prototype = b.prototype, a.superClass_ = b.prototype, a.prototype = new c, a.prototype.constructor = a, a.base = function(a, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return b.prototype[c].apply(a, d)
    }
}, goog.base = function(a, b) {
    var c = arguments.callee.caller;
    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !c) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (c.superClass_) return c.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var d = Array.prototype.slice.call(arguments, 2), e = !1, f = a.constructor; f; f = f.superClass_ && f.superClass_.constructor)
        if (f.prototype[b] === c) e = !0;
        else if (e) return f.prototype[b].apply(a, d);
    if (a[b] === c) return a.constructor.prototype[b].apply(a, d);
    throw Error("goog.base called from a method of one name to a method of a different name")
}, goog.scope = function(a) {
    a.call(goog.global)
}, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(a, b) {
    var c = b.constructor,
        d = b.statics;
    c && c != Object.prototype.constructor || (c = function() {
        throw Error("cannot instantiate an interface (no constructor defined).")
    });
    var e = goog.defineClass.createSealingConstructor_(c, a);
    return a && goog.inherits(e, a), delete b.constructor, delete b.statics, goog.defineClass.applyProperties_(e.prototype, b), null != d && (d instanceof Function ? d(e) : goog.defineClass.applyProperties_(e, d)), e
}, goog.defineClass.ClassDescriptor, goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG), goog.defineClass.createSealingConstructor_ = function(a, b) {
    if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
        if (b && b.prototype && b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) return a;
        var c = function() {
            var b = a.apply(this, arguments) || this;
            return this.constructor === c && Object.seal(b), b
        };
        return c
    }
    return a
}, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], goog.defineClass.applyProperties_ = function(a, b) {
    var c;
    for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
    for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
}, goog.tagUnsealableClass = function(a) {
    !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
}, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", goog.provide("box2d.b2Settings"), Object.defineProperty || (Object.defineProperty = function(a, b, c) {
    Object.__defineGetter__ && ("get" in c ? a.__defineGetter__(b, c.get) : "value" in c && a.__defineGetter__(b, c.value)), Object.__defineSetter__ && ("set" in c ? a.__defineSetter__(b, c.set) : "value" in c && a.__defineSetter__(b, c.value))
}), box2d.DEBUG = !1, box2d.ENABLE_ASSERTS = box2d.DEBUG, box2d.b2Assert = function(a) {
    box2d.DEBUG
}, box2d.b2_maxFloat = 1e37, box2d.b2_epsilon = 1e-5, box2d.b2_epsilon_sq = box2d.b2_epsilon * box2d.b2_epsilon, box2d.b2_pi = Math.PI, box2d.b2_maxManifoldPoints = 2, box2d.b2_maxPolygonVertices = 8, box2d.b2_aabbExtension = .1, box2d.b2_aabbMultiplier = 2, box2d.b2_linearSlop = .008, box2d.b2_angularSlop = 2 / 180 * box2d.b2_pi, box2d.b2_polygonRadius = 2 * box2d.b2_linearSlop, box2d.b2_maxSubSteps = 8, box2d.b2_maxTOIContacts = 32, box2d.b2_velocityThreshold = 1, box2d.b2_maxLinearCorrection = .2, box2d.b2_maxAngularCorrection = 8 / 180 * box2d.b2_pi, box2d.b2_maxTranslation = 2, box2d.b2_maxTranslationSquared = box2d.b2_maxTranslation * box2d.b2_maxTranslation, box2d.b2_maxRotation = .5 * box2d.b2_pi, box2d.b2_maxRotationSquared = box2d.b2_maxRotation * box2d.b2_maxRotation, box2d.b2_baumgarte = .2, box2d.b2_toiBaumgarte = .75, box2d.b2_timeToSleep = .5, box2d.b2_linearSleepTolerance = .01, box2d.b2_angularSleepTolerance = 2 / 180 * box2d.b2_pi, box2d.b2Alloc = function() {
    return null
}, box2d.b2Free = function() {}, box2d.b2Log = function() {
    goog.global.console.log.apply(null, arguments)
}, box2d.b2Version = function(a, b, c) {
    this.major = a || 0, this.minor = b || 0, this.revision = c || 0
}, box2d.b2Version.prototype.major = 0, box2d.b2Version.prototype.minor = 0, box2d.b2Version.prototype.revision = 0, box2d.b2Version.prototype.toString = function() {
    return this.major + "." + this.minor + "." + this.revision
}, box2d.b2_version = new box2d.b2Version(2, 3, 0), box2d.b2_changelist = 278, box2d.b2ParseInt = function(a) {
    return parseInt(a, 10)
}, box2d.b2ParseUInt = function(a) {
    return box2d.b2Abs(parseInt(a, 10))
}, box2d.b2MakeArray = function(a, b) {
    void 0 === a && (a = 0);
    var c = new Array(a);
    if (void 0 !== b)
        for (var d = 0; a > d; ++d) c[d] = b(d);
    return c
}, box2d.b2MakeNumberArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return 0
    })
}, goog.provide("box2d.b2Math"), goog.require("box2d.b2Settings"), box2d.b2_pi_over_180 = box2d.b2_pi / 180, box2d.b2_180_over_pi = 180 / box2d.b2_pi, box2d.b2_two_pi = 2 * box2d.b2_pi, box2d.b2Abs = function(a) {
    return 0 > a ? -a : a
}, box2d.b2Min = function(a, b) {
    return b > a ? a : b
}, box2d.b2Max = function(a, b) {
    return a > b ? a : b
}, box2d.b2Clamp = function(a, b, c) {
    return b > a ? b : a > c ? c : a
}, box2d.b2Swap = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
    var c = a[0];
    a[0] = b[0], b[0] = c
}, box2d.b2IsValid = function(a) {
    return isFinite(a)
}, box2d.b2Sq = function(a) {
    return a * a
}, box2d.b2InvSqrt = function(a) {
    return 1 / Math.sqrt(a)
}, box2d.b2Sqrt = function(a) {
    return Math.sqrt(a)
}, box2d.b2Pow = function(a, b) {
    return Math.pow(a, b)
}, box2d.b2DegToRad = function(a) {
    return a * box2d.b2_pi_over_180
}, box2d.b2RadToDeg = function(a) {
    return a * box2d.b2_180_over_pi
}, box2d.b2Cos = function(a) {
    return Math.cos(a)
}, box2d.b2Sin = function(a) {
    return Math.sin(a)
}, box2d.b2Acos = function(a) {
    return Math.acos(a)
}, box2d.b2Asin = function(a) {
    return Math.asin(a)
}, box2d.b2Atan2 = function(a, b) {
    return Math.atan2(a, b)
}, box2d.b2NextPowerOfTwo = function(a) {
    return a |= a >> 1 & 2147483647, a |= a >> 2 & 1073741823, a |= a >> 4 & 268435455, a |= a >> 8 & 16777215, a |= a >> 16 & 65535, a + 1
}, box2d.b2IsPowerOfTwo = function(a) {
    return a > 0 && 0 === (a & a - 1)
}, box2d.b2Random = function() {
    return 2 * Math.random() - 1
}, box2d.b2RandomRange = function(a, b) {
    return (b - a) * Math.random() + a
}, box2d.b2Vec2 = function(a, b) {
    this.x = a || 0, this.y = b || 0
}, box2d.b2Vec2.prototype.x = 0, box2d.b2Vec2.prototype.y = 0, box2d.b2Vec2_zero = new box2d.b2Vec2, box2d.b2Vec2.ZERO = new box2d.b2Vec2, box2d.b2Vec2.UNITX = new box2d.b2Vec2(1, 0), box2d.b2Vec2.UNITY = new box2d.b2Vec2(0, 1), box2d.b2Vec2.s_t0 = new box2d.b2Vec2, box2d.b2Vec2.s_t1 = new box2d.b2Vec2, box2d.b2Vec2.s_t2 = new box2d.b2Vec2, box2d.b2Vec2.s_t3 = new box2d.b2Vec2, box2d.b2Vec2.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2Vec2
    })
}, box2d.b2Vec2.prototype.Clone = function() {
    return new box2d.b2Vec2(this.x, this.y)
}, box2d.b2Vec2.prototype.SetZero = function() {
    return this.x = 0, this.y = 0, this
}, box2d.b2Vec2.prototype.SetXY = function(a, b) {
    return this.x = a, this.y = b, this
}, box2d.b2Vec2.prototype.Copy = function(a) {
    return this.x = a.x, this.y = a.y, this
}, box2d.b2Vec2.prototype.SelfAdd = function(a) {
    return this.x += a.x, this.y += a.y, this
}, box2d.b2Vec2.prototype.SelfAddXY = function(a, b) {
    return this.x += a, this.y += b, this
}, box2d.b2Vec2.prototype.SelfSub = function(a) {
    return this.x -= a.x, this.y -= a.y, this
}, box2d.b2Vec2.prototype.SelfSubXY = function(a, b) {
    return this.x -= a, this.y -= b, this
}, box2d.b2Vec2.prototype.SelfMul = function(a) {
    return this.x *= a, this.y *= a, this
}, box2d.b2Vec2.prototype.SelfMulAdd = function(a, b) {
    return this.x += a * b.x, this.y += a * b.y, this
}, box2d.b2Vec2.prototype.SelfMulSub = function(a, b) {
    return this.x -= a * b.x, this.y -= a * b.y, this
}, box2d.b2Vec2.prototype.Dot = function(a) {
    return this.x * a.x + this.y * a.y
}, box2d.b2Vec2.prototype.Cross = function(a) {
    return this.x * a.y - this.y * a.x
}, box2d.b2Vec2.prototype.Length = function() {
    var a = this.x,
        b = this.y;
    return Math.sqrt(a * a + b * b)
}, box2d.b2Vec2.prototype.GetLength = box2d.b2Vec2.prototype.Length, box2d.b2Vec2.prototype.LengthSquared = function() {
    var a = this.x,
        b = this.y;
    return a * a + b * b
}, box2d.b2Vec2.prototype.GetLengthSquared = box2d.b2Vec2.prototype.LengthSquared, box2d.b2Vec2.prototype.Normalize = function() {
    var a = this.GetLength();
    if (a >= box2d.b2_epsilon) {
        var b = 1 / a;
        this.x *= b, this.y *= b
    }
    return a
}, box2d.b2Vec2.prototype.SelfNormalize = function() {
    var a = this.GetLength();
    if (a >= box2d.b2_epsilon) {
        var b = 1 / a;
        this.x *= b, this.y *= b
    }
    return this
}, box2d.b2Vec2.prototype.SelfRotate = function(a, b) {
    var c = this.x,
        d = this.y;
    return this.x = a * c - b * d, this.y = b * c + a * d, this
}, box2d.b2Vec2.prototype.SelfRotateRadians = function(a) {
    return this.SelfRotate(Math.cos(a), Math.sin(a))
}, box2d.b2Vec2.prototype.SelfRotateDegrees = function(a) {
    return this.SelfRotateRadians(box2d.b2DegToRad(a))
}, box2d.b2Vec2.prototype.IsValid = function() {
    return isFinite(this.x) && isFinite(this.y)
}, box2d.b2Vec2.prototype.SelfCrossVS = function(a) {
    var b = this.x;
    return this.x = a * this.y, this.y = -a * b, this
}, box2d.b2Vec2.prototype.SelfCrossSV = function(a) {
    var b = this.x;
    return this.x = -a * this.y, this.y = a * b, this
}, box2d.b2Vec2.prototype.SelfMinV = function(a) {
    return this.x = box2d.b2Min(this.x, a.x), this.y = box2d.b2Min(this.y, a.y), this
}, box2d.b2Vec2.prototype.SelfMaxV = function(a) {
    return this.x = box2d.b2Max(this.x, a.x), this.y = box2d.b2Max(this.y, a.y), this
}, box2d.b2Vec2.prototype.SelfAbs = function() {
    return this.x = box2d.b2Abs(this.x), this.y = box2d.b2Abs(this.y), this
}, box2d.b2Vec2.prototype.SelfNeg = function() {
    return this.x = -this.x, this.y = -this.y, this
}, box2d.b2Vec2.prototype.SelfSkew = function() {
    var a = this.x;
    return this.x = -this.y, this.y = a, this
}, box2d.b2AbsV = function(a, b) {
    return b.x = box2d.b2Abs(a.x), b.y = box2d.b2Abs(a.y), b
}, box2d.b2MinV = function(a, b, c) {
    return c.x = box2d.b2Min(a.x, b.x), c.y = box2d.b2Min(a.y, b.y), c
}, box2d.b2MaxV = function(a, b, c) {
    return c.x = box2d.b2Max(a.x, b.x), c.y = box2d.b2Max(a.y, b.y), c
}, box2d.b2ClampV = function(a, b, c, d) {
    return d.x = box2d.b2Clamp(a.x, b.x, c.x), d.y = box2d.b2Clamp(a.y, b.y, c.y), d
}, box2d.b2RotateV = function(a, b, c, d) {
    var e = a.x,
        f = a.y;
    return d.x = b * e - c * f, d.y = c * e + b * f, d
}, box2d.b2RotateRadiansV = function(a, b, c) {
    return box2d.b2RotateV(a, Math.cos(b), Math.sin(b), c)
}, box2d.b2RotateDegreesV = function(a, b, c) {
    return box2d.b2RotateRadiansV(a, box2d.b2DegToRad(b), c)
}, box2d.b2DotVV = function(a, b) {
    return a.x * b.x + a.y * b.y
}, box2d.b2CrossVV = function(a, b) {
    return a.x * b.y - a.y * b.x
}, box2d.b2CrossVS = function(a, b, c) {
    var d = a.x;
    return c.x = b * a.y, c.y = -b * d, c
}, box2d.b2CrossVOne = function(a, b) {
    var c = a.x;
    return b.x = a.y, b.y = -c, b
}, box2d.b2CrossSV = function(a, b, c) {
    var d = b.x;
    return c.x = -a * b.y, c.y = a * d, c
}, box2d.b2CrossOneV = function(a, b) {
    var c = a.x;
    return b.x = -a.y, b.y = c, b
}, box2d.b2AddVV = function(a, b, c) {
    return c.x = a.x + b.x, c.y = a.y + b.y, c
}, box2d.b2SubVV = function(a, b, c) {
    return c.x = a.x - b.x, c.y = a.y - b.y, c
}, box2d.b2MulSV = function(a, b, c) {
    return c.x = b.x * a, c.y = b.y * a, c
}, box2d.b2AddVMulSV = function(a, b, c, d) {
    return d.x = a.x + b * c.x, d.y = a.y + b * c.y, d
}, box2d.b2SubVMulSV = function(a, b, c, d) {
    return d.x = a.x - b * c.x, d.y = a.y - b * c.y, d
}, box2d.b2AddVCrossSV = function(a, b, c, d) {
    var e = c.x;
    return d.x = a.x - b * c.y, d.y = a.y + b * e, d
}, box2d.b2MidVV = function(a, b, c) {
    return c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y), c
}, box2d.b2ExtVV = function(a, b, c) {
    return c.x = .5 * (b.x - a.x), c.y = .5 * (b.y - a.y), c
}, box2d.b2IsEqualToV = function(a, b) {
    return a.x === b.x && a.y === b.y
}, box2d.b2DistanceVV = function(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return Math.sqrt(c * c + d * d)
}, box2d.b2DistanceSquaredVV = function(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return c * c + d * d
}, box2d.b2NegV = function(a, b) {
    return b.x = -a.x, b.y = -a.y, b
}, box2d.b2Vec3 = function(a, b, c) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0
}, box2d.b2Vec3.prototype.x = 0, box2d.b2Vec3.prototype.y = 0, box2d.b2Vec3.prototype.z = 0, box2d.b2Vec3.ZERO = new box2d.b2Vec3, box2d.b2Vec3.s_t0 = new box2d.b2Vec3, box2d.b2Vec3.prototype.Clone = function() {
    return new box2d.b2Vec3(this.x, this.y, this.z)
}, box2d.b2Vec3.prototype.SetZero = function() {
    return this.x = 0, this.y = 0, this.z = 0, this
}, box2d.b2Vec3.prototype.SetXYZ = function(a, b, c) {
    return this.x = a, this.y = b, this.z = c, this
}, box2d.b2Vec3.prototype.Copy = function(a) {
    return this.x = a.x, this.y = a.y, this.z = a.z, this
}, box2d.b2Vec3.prototype.SelfNeg = function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
}, box2d.b2Vec3.prototype.SelfAdd = function(a) {
    return this.x += a.x, this.y += a.y, this.z += a.z, this
}, box2d.b2Vec3.prototype.SelfAddXYZ = function(a, b, c) {
    return this.x += a, this.y += b, this.z += c, this
}, box2d.b2Vec3.prototype.SelfSub = function(a) {
    return this.x -= a.x, this.y -= a.y, this.z -= a.z, this
}, box2d.b2Vec3.prototype.SelfSubXYZ = function(a, b, c) {
    return this.x -= a, this.y -= b, this.z -= c, this
}, box2d.b2Vec3.prototype.SelfMul = function(a) {
    return this.x *= a, this.y *= a, this.z *= a, this
}, box2d.b2DotV3V3 = function(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z
}, box2d.b2CrossV3V3 = function(a, b, c) {
    var d = a.x,
        e = a.y,
        f = a.z,
        g = b.x,
        h = b.y,
        i = b.z;
    return c.x = e * i - f * h, c.y = f * g - d * i, c.z = d * h - e * g, c
}, box2d.b2Mat22 = function() {
    this.ex = new box2d.b2Vec2(1, 0), this.ey = new box2d.b2Vec2(0, 1)
}, box2d.b2Mat22.prototype.ex = null, box2d.b2Mat22.prototype.ey = null, box2d.b2Mat22.IDENTITY = new box2d.b2Mat22, box2d.b2Mat22.prototype.Clone = function() {
    return (new box2d.b2Mat22).Copy(this)
}, box2d.b2Mat22.FromVV = function(a, b) {
    return (new box2d.b2Mat22).SetVV(a, b)
}, box2d.b2Mat22.FromSSSS = function(a, b, c, d) {
    return (new box2d.b2Mat22).SetSSSS(a, b, c, d)
}, box2d.b2Mat22.FromAngleRadians = function(a) {
    return (new box2d.b2Mat22).SetAngleRadians(a)
}, box2d.b2Mat22.prototype.SetSSSS = function(a, b, c, d) {
    return this.ex.SetXY(a, c), this.ey.SetXY(b, d), this
}, box2d.b2Mat22.prototype.SetVV = function(a, b) {
    return this.ex.Copy(a), this.ey.Copy(b), this
}, box2d.b2Mat22.prototype.SetAngle = function(a) {
    var b = Math.cos(a),
        c = Math.sin(a);
    return this.ex.SetXY(b, c), this.ey.SetXY(-c, b), this
}, box2d.b2Mat22.prototype.SetAngleRadians = box2d.b2Mat22.prototype.SetAngle, box2d.b2Mat22.prototype.SetAngleDegrees = function(a) {
    return this.SetAngle(box2d.b2DegToRad(a))
}, box2d.b2Mat22.prototype.Copy = function(a) {
    return this.ex.Copy(a.ex), this.ey.Copy(a.ey), this
}, box2d.b2Mat22.prototype.SetIdentity = function() {
    return this.ex.SetXY(1, 0), this.ey.SetXY(0, 1), this
}, box2d.b2Mat22.prototype.SetZero = function() {
    return this.ex.SetZero(), this.ey.SetZero(), this
}, box2d.b2Mat22.prototype.GetAngle = function() {
    return Math.atan2(this.ex.y, this.ex.x)
}, box2d.b2Mat22.prototype.GetAngleRadians = box2d.b2Mat22.prototype.GetAngle, box2d.b2Mat22.prototype.GetInverse = function(a) {
    var b = this.ex.x,
        c = this.ey.x,
        d = this.ex.y,
        e = this.ey.y,
        f = b * e - c * d;
    return 0 !== f && (f = 1 / f), a.ex.x = f * e, a.ey.x = -f * c, a.ex.y = -f * d, a.ey.y = f * b, a
}, box2d.b2Mat22.prototype.Solve = function(a, b, c) {
    var d = this.ex.x,
        e = this.ey.x,
        f = this.ex.y,
        g = this.ey.y,
        h = d * g - e * f;
    return 0 !== h && (h = 1 / h), c.x = h * (g * a - e * b), c.y = h * (d * b - f * a), c
}, box2d.b2Mat22.prototype.SelfAbs = function() {
    return this.ex.SelfAbs(), this.ey.SelfAbs(), this
}, box2d.b2Mat22.prototype.SelfInv = function() {
    return this.GetInverse(this)
}, box2d.b2Mat22.prototype.SelfAddM = function(a) {
    return this.ex.SelfAdd(a.ex), this.ey.SelfAdd(a.ey), this
}, box2d.b2Mat22.prototype.SelfSubM = function(a) {
    return this.ex.SelfSub(a.ex), this.ey.SelfSub(a.ey), this
}, box2d.b2AbsM = function(a, b) {
    var c = a.ex,
        d = a.ey;
    return b.ex.x = box2d.b2Abs(c.x), b.ex.y = box2d.b2Abs(c.y), b.ey.x = box2d.b2Abs(d.x), b.ey.y = box2d.b2Abs(d.y), b
}, box2d.b2MulMV = function(a, b, c) {
    var d = a.ex,
        e = a.ey,
        f = b.x,
        g = b.y;
    return c.x = d.x * f + e.x * g, c.y = d.y * f + e.y * g, c
}, box2d.b2MulTMV = function(a, b, c) {
    var d = a.ex,
        e = a.ey,
        f = b.x,
        g = b.y;
    return c.x = d.x * f + d.y * g, c.y = e.x * f + e.y * g, c
}, box2d.b2AddMM = function(a, b, c) {
    var d = a.ex,
        e = a.ey,
        f = b.ex,
        g = b.ey;
    return c.ex.x = d.x + f.x, c.ex.y = d.y + f.y, c.ey.x = e.x + g.x, c.ey.y = e.y + g.y, c
}, box2d.b2MulMM = function(a, b, c) {
    var d = a.ex.x,
        e = a.ex.y,
        f = a.ey.x,
        g = a.ey.y,
        h = b.ex.x,
        i = b.ex.y,
        j = b.ey.x,
        k = b.ey.y;
    return c.ex.x = d * h + f * i, c.ex.y = e * h + g * i, c.ey.x = d * j + f * k, c.ey.y = e * j + g * k, c
}, box2d.b2MulTMM = function(a, b, c) {
    var d = a.ex.x,
        e = a.ex.y,
        f = a.ey.x,
        g = a.ey.y,
        h = b.ex.x,
        i = b.ex.y,
        j = b.ey.x,
        k = b.ey.y;
    return c.ex.x = d * h + e * i, c.ex.y = f * h + g * i, c.ey.x = d * j + e * k, c.ey.y = f * j + g * k, c
}, box2d.b2Mat33 = function() {
    this.ex = new box2d.b2Vec3(1, 0, 0), this.ey = new box2d.b2Vec3(0, 1, 0), this.ez = new box2d.b2Vec3(0, 0, 1)
}, box2d.b2Mat33.prototype.ex = null, box2d.b2Mat33.prototype.ey = null, box2d.b2Mat33.prototype.ez = null, box2d.b2Mat33.IDENTITY = new box2d.b2Mat33, box2d.b2Mat33.prototype.Clone = function() {
    return (new box2d.b2Mat33).Copy(this)
}, box2d.b2Mat33.prototype.SetVVV = function(a, b, c) {
    return this.ex.Copy(a), this.ey.Copy(b), this.ez.Copy(c), this
}, box2d.b2Mat33.prototype.Copy = function(a) {
    return this.ex.Copy(a.ex), this.ey.Copy(a.ey), this.ez.Copy(a.ez), this
}, box2d.b2Mat33.prototype.SetIdentity = function() {
    return this.ex.SetXYZ(1, 0, 0), this.ey.SetXYZ(0, 1, 0), this.ez.SetXYZ(0, 0, 1), this
}, box2d.b2Mat33.prototype.SetZero = function() {
    return this.ex.SetZero(), this.ey.SetZero(), this.ez.SetZero(), this
}, box2d.b2Mat33.prototype.SelfAddM = function(a) {
    return this.ex.SelfAdd(a.ex), this.ey.SelfAdd(a.ey), this.ez.SelfAdd(a.ez), this
}, box2d.b2Mat33.prototype.Solve33 = function(a, b, c, d) {
    var e = this.ex.x,
        f = this.ex.y,
        g = this.ex.z,
        h = this.ey.x,
        i = this.ey.y,
        j = this.ey.z,
        k = this.ez.x,
        l = this.ez.y,
        m = this.ez.z,
        n = e * (i * m - j * l) + f * (j * k - h * m) + g * (h * l - i * k);
    return 0 !== n && (n = 1 / n), d.x = n * (a * (i * m - j * l) + b * (j * k - h * m) + c * (h * l - i * k)), d.y = n * (e * (b * m - c * l) + f * (c * k - a * m) + g * (a * l - b * k)), d.z = n * (e * (i * c - j * b) + f * (j * a - h * c) + g * (h * b - i * a)), d
}, box2d.b2Mat33.prototype.Solve22 = function(a, b, c) {
    var d = this.ex.x,
        e = this.ey.x,
        f = this.ex.y,
        g = this.ey.y,
        h = d * g - e * f;
    return 0 !== h && (h = 1 / h), c.x = h * (g * a - e * b), c.y = h * (d * b - f * a), c
}, box2d.b2Mat33.prototype.GetInverse22 = function(a) {
    var b = this.ex.x,
        c = this.ey.x,
        d = this.ex.y,
        e = this.ey.y,
        f = b * e - c * d;
    0 !== f && (f = 1 / f), a.ex.x = f * e, a.ey.x = -f * c, a.ex.z = 0, a.ex.y = -f * d, a.ey.y = f * b, a.ey.z = 0, a.ez.x = 0, a.ez.y = 0, a.ez.z = 0
}, box2d.b2Mat33.prototype.GetSymInverse33 = function(a) {
    var b = box2d.b2DotV3V3(this.ex, box2d.b2CrossV3V3(this.ey, this.ez, box2d.b2Vec3.s_t0));
    0 !== b && (b = 1 / b);
    var c = this.ex.x,
        d = this.ey.x,
        e = this.ez.x,
        f = this.ey.y,
        g = this.ez.y,
        h = this.ez.z;
    a.ex.x = b * (f * h - g * g), a.ex.y = b * (e * g - d * h), a.ex.z = b * (d * g - e * f), a.ey.x = a.ex.y, a.ey.y = b * (c * h - e * e), a.ey.z = b * (e * d - c * g), a.ez.x = a.ex.z, a.ez.y = a.ey.z, a.ez.z = b * (c * f - d * d)
}, box2d.b2MulM33V3 = function(a, b, c) {
    var d = b.x,
        e = b.y,
        f = b.z;
    return c.x = a.ex.x * d + a.ey.x * e + a.ez.x * f, c.y = a.ex.y * d + a.ey.y * e + a.ez.y * f, c.z = a.ex.z * d + a.ey.z * e + a.ez.z * f, c
}, box2d.b2MulM33XYZ = function(a, b, c, d, e) {
    return e.x = a.ex.x * b + a.ey.x * c + a.ez.x * d, e.y = a.ex.y * b + a.ey.y * c + a.ez.y * d, e.z = a.ex.z * b + a.ey.z * c + a.ez.z * d, e
}, box2d.b2MulM33V2 = function(a, b, c) {
    var d = b.x,
        e = b.y;
    return c.x = a.ex.x * d + a.ey.x * e, c.y = a.ex.y * d + a.ey.y * e, c
}, box2d.b2MulM33XY = function(a, b, c, d) {
    return d.x = a.ex.x * b + a.ey.x * c, d.y = a.ex.y * b + a.ey.y * c, d
}, box2d.b2Rot = function(a) {
    a && (this.angle = a, this.s = Math.sin(a), this.c = Math.cos(a))
}, box2d.b2Rot.prototype.angle = 0, box2d.b2Rot.prototype.s = 0, box2d.b2Rot.prototype.c = 1, box2d.b2Rot.IDENTITY = new box2d.b2Rot, box2d.b2Rot.prototype.Clone = function() {
    return (new box2d.b2Rot).Copy(this)
}, box2d.b2Rot.prototype.Copy = function(a) {
    return this.angle = a.angle, this.s = a.s, this.c = a.c, this
}, box2d.b2Rot.prototype.SetAngle = function(a) {
    return this.angle !== a && (this.angle = a, this.s = Math.sin(a), this.c = Math.cos(a)), this
}, box2d.b2Rot.prototype.SetAngleRadians = box2d.b2Rot.prototype.SetAngle, box2d.b2Rot.prototype.SetAngleDegrees = function(a) {
    return this.SetAngle(box2d.b2DegToRad(a))
}, box2d.b2Rot.prototype.SetIdentity = function() {
    return this.angle = 0, this.s = 0, this.c = 1, this
}, box2d.b2Rot.prototype.GetAngle = function() {
    return this.angle
}, box2d.b2Rot.prototype.GetAngleRadians = box2d.b2Rot.prototype.GetAngle, box2d.b2Rot.prototype.GetAngleDegrees = function() {
    return box2d.b2RadToDeg(this.GetAngle())
}, box2d.b2Rot.prototype.GetXAxis = function(a) {
    return a.x = this.c, a.y = this.s, a
}, box2d.b2Rot.prototype.GetYAxis = function(a) {
    return a.x = -this.s, a.y = this.c, a
}, box2d.b2MulRR = function(a, b, c) {
    var d = a.c,
        e = a.s,
        f = b.c,
        g = b.s;
    for (c.s = e * f + d * g, c.c = d * f - e * g, c.angle = a.angle + b.angle; c.angle < -box2d.b2_pi;) c.angle += box2d.b2_two_pi;
    for (; c.angle >= box2d.b2_pi;) c.angle -= box2d.b2_two_pi;
    return c
}, box2d.b2MulTRR = function(a, b, c) {
    var d = a.c,
        e = a.s,
        f = b.c,
        g = b.s;
    for (c.s = d * g - e * f, c.c = d * f + e * g, c.angle = a.angle - b.angle; c.angle < -box2d.b2_pi;) c.angle += box2d.b2_two_pi;
    for (; c.angle >= box2d.b2_pi;) c.angle -= box2d.b2_two_pi;
    return c
}, box2d.b2MulRV = function(a, b, c) {
    var d = a.c,
        e = a.s,
        f = b.x,
        g = b.y;
    return c.x = d * f - e * g, c.y = e * f + d * g, c
}, box2d.b2MulTRV = function(a, b, c) {
    var d = a.c,
        e = a.s,
        f = b.x,
        g = b.y;
    return c.x = d * f + e * g, c.y = -e * f + d * g, c
}, box2d.b2Transform = function() {
    this.p = new box2d.b2Vec2, this.q = new box2d.b2Rot
}, box2d.b2Transform.prototype.p = null, box2d.b2Transform.prototype.q = null, box2d.b2Transform.IDENTITY = new box2d.b2Transform, box2d.b2Transform.prototype.Clone = function() {
    return (new box2d.b2Transform).Copy(this)
}, box2d.b2Transform.prototype.Copy = function(a) {
    return this.p.Copy(a.p), this.q.Copy(a.q), this
}, box2d.b2Transform.prototype.SetIdentity = function() {
    return this.p.SetZero(), this.q.SetIdentity(), this
}, box2d.b2Transform.prototype.SetPositionRotation = function(a, b) {
    return this.p.Copy(a), this.q.Copy(b), this
}, box2d.b2Transform.prototype.SetPositionAngleRadians = function(a, b) {
    return this.p.Copy(a), this.q.SetAngleRadians(b), this
}, box2d.b2Transform.prototype.SetPosition = function(a) {
    return this.p.Copy(a), this
}, box2d.b2Transform.prototype.SetPositionXY = function(a, b) {
    return this.p.SetXY(a, b), this
}, box2d.b2Transform.prototype.SetRotation = function(a) {
    return this.q.Copy(a), this
}, box2d.b2Transform.prototype.SetRotationAngleRadians = function(a) {
    return this.q.SetAngleRadians(a), this
}, box2d.b2Transform.prototype.GetPosition = function() {
    return this.p
}, box2d.b2Transform.prototype.GetRotation = function() {
    return this.q
}, box2d.b2Transform.prototype.GetRotationAngle = function() {
    return this.q.GetAngle()
}, box2d.b2Transform.prototype.GetRotationAngleRadians = box2d.b2Transform.prototype.GetRotationAngle, box2d.b2Transform.prototype.GetAngle = function() {
    return this.q.GetAngle()
}, box2d.b2Transform.prototype.GetAngleRadians = box2d.b2Transform.prototype.GetAngle, box2d.b2MulXV = function(a, b, c) {
    var d = a.q.c,
        e = a.q.s,
        f = b.x,
        g = b.y;
    return c.x = d * f - e * g + a.p.x, c.y = e * f + d * g + a.p.y, c
}, box2d.b2MulTXV = function(a, b, c) {
    var d = a.q.c,
        e = a.q.s,
        f = b.x - a.p.x,
        g = b.y - a.p.y;
    return c.x = d * f + e * g, c.y = -e * f + d * g, c
}, box2d.b2MulXX = function(a, b, c) {
    return box2d.b2MulRR(a.q, b.q, c.q), box2d.b2AddVV(box2d.b2MulRV(a.q, b.p, c.p), a.p, c.p), c
}, box2d.b2MulTXX = function(a, b, c) {
    return box2d.b2MulTRR(a.q, b.q, c.q), box2d.b2MulTRV(a.q, box2d.b2SubVV(b.p, a.p, c.p), c.p), c
}, box2d.b2Sweep = function() {
    this.localCenter = new box2d.b2Vec2, this.c0 = new box2d.b2Vec2, this.c = new box2d.b2Vec2
}, box2d.b2Sweep.prototype.localCenter = null, box2d.b2Sweep.prototype.c0 = null, box2d.b2Sweep.prototype.c = null, box2d.b2Sweep.prototype.a0 = 0, box2d.b2Sweep.prototype.a = 0, box2d.b2Sweep.prototype.alpha0 = 0, box2d.b2Sweep.prototype.Clone = function() {
    return (new box2d.b2Sweep).Copy(this)
}, box2d.b2Sweep.prototype.Copy = function(a) {
    return this.localCenter.Copy(a.localCenter), this.c0.Copy(a.c0), this.c.Copy(a.c), this.a0 = a.a0, this.a = a.a, this.alpha0 = a.alpha0, this
}, box2d.b2Sweep.prototype.GetTransform = function(a, b) {
    var c = 1 - b;
    a.p.x = c * this.c0.x + b * this.c.x, a.p.y = c * this.c0.y + b * this.c.y;
    var d = c * this.a0 + b * this.a;
    return a.q.SetAngleRadians(d), a.p.SelfSub(box2d.b2MulRV(a.q, this.localCenter, box2d.b2Vec2.s_t0)), a
}, box2d.b2Sweep.prototype.Advance = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.alpha0 < 1);
    var b = (a - this.alpha0) / (1 - this.alpha0);
    this.c0.x += b * (this.c.x - this.c0.x), this.c0.y += b * (this.c.y - this.c0.y), this.a0 += b * (this.a - this.a0), this.alpha0 = a
}, box2d.b2Sweep.prototype.Normalize = function() {
    var a = box2d.b2_two_pi * Math.floor(this.a0 / box2d.b2_two_pi);
    this.a0 -= a, this.a -= a
}, goog.provide("box2d.b2Controller"), goog.require("box2d.b2Settings"), box2d.b2ControllerEdge = function() {}, box2d.b2ControllerEdge.prototype.controller = null, box2d.b2ControllerEdge.prototype.body = null, box2d.b2ControllerEdge.prototype.prevBody = null, box2d.b2ControllerEdge.prototype.nextBody = null, box2d.b2ControllerEdge.prototype.prevController = null, box2d.b2ControllerEdge.prototype.nextController = null, box2d.b2Controller = function() {}, box2d.b2Controller.prototype.m_world = null, box2d.b2Controller.prototype.m_bodyList = null, box2d.b2Controller.prototype.m_bodyCount = 0, box2d.b2Controller.prototype.m_prev = null, box2d.b2Controller.prototype.m_next = null, box2d.b2Controller.prototype.Step = function() {}, box2d.b2Controller.prototype.Draw = function() {}, box2d.b2Controller.prototype.GetNext = function() {
    return this.m_next
}, box2d.b2Controller.prototype.GetPrev = function() {
    return this.m_prev
}, box2d.b2Controller.prototype.GetWorld = function() {
    return this.m_world
}, box2d.b2Controller.prototype.GetBodyList = function() {
    return this.m_bodyList
}, box2d.b2Controller.prototype.AddBody = function(a) {
    var b = new box2d.b2ControllerEdge;
    b.body = a, b.controller = this, b.nextBody = this.m_bodyList, b.prevBody = null, this.m_bodyList && (this.m_bodyList.prevBody = b), this.m_bodyList = b, ++this.m_bodyCount, b.nextController = a.m_controllerList, b.prevController = null, a.m_controllerList && (a.m_controllerList.prevController = b), a.m_controllerList = b, ++a.m_controllerCount
}, box2d.b2Controller.prototype.RemoveBody = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_bodyCount > 0);
    for (var b = this.m_bodyList; b && b.body !== a;) b = b.nextBody;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== b), b.prevBody && (b.prevBody.nextBody = b.nextBody), b.nextBody && (b.nextBody.prevBody = b.prevBody), this.m_bodyList === b && (this.m_bodyList = b.nextBody), --this.m_bodyCount, b.nextController && (b.nextController.prevController = b.prevController), b.prevController && (b.prevController.nextController = b.nextController), a.m_controllerList === b && (a.m_controllerList = b.nextController), --a.m_controllerCount
}, box2d.b2Controller.prototype.Clear = function() {
    for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body);
    this.m_bodyCount = 0
}, goog.provide("box2d.b2ConstantAccelController"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Controller"), goog.require("box2d.b2Math"), box2d.b2ConstantAccelController = function() {
    goog.base(this), this.A = new box2d.b2Vec2(0, 0)
}, goog.inherits(box2d.b2ConstantAccelController, box2d.b2Controller), box2d.b2ConstantAccelController.prototype.A = null, box2d.b2ConstantAccelController.prototype.Step = function(a) {
    for (var b = box2d.b2MulSV(a.dt, this.A, box2d.b2ConstantAccelController.prototype.Step.s_dtA), c = this.m_bodyList; c; c = c.nextBody) {
        var d = c.body;
        d.IsAwake() && d.SetLinearVelocity(box2d.b2AddVV(d.GetLinearVelocity(), b, box2d.b2Vec2.s_t0))
    }
}, box2d.b2ConstantAccelController.prototype.Step.s_dtA = new box2d.b2Vec2, goog.provide("box2d.b2Joint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), box2d.b2JointType = {
    e_unknownJoint: 0,
    e_revoluteJoint: 1,
    e_prismaticJoint: 2,
    e_distanceJoint: 3,
    e_pulleyJoint: 4,
    e_mouseJoint: 5,
    e_gearJoint: 6,
    e_wheelJoint: 7,
    e_weldJoint: 8,
    e_frictionJoint: 9,
    e_ropeJoint: 10,
    e_motorJoint: 11,
    e_areaJoint: 12
}, goog.exportProperty(box2d.b2JointType, "e_unknownJoint", box2d.b2JointType.e_unknownJoint), goog.exportProperty(box2d.b2JointType, "e_revoluteJoint", box2d.b2JointType.e_revoluteJoint), goog.exportProperty(box2d.b2JointType, "e_prismaticJoint", box2d.b2JointType.e_prismaticJoint), goog.exportProperty(box2d.b2JointType, "e_distanceJoint", box2d.b2JointType.e_distanceJoint), goog.exportProperty(box2d.b2JointType, "e_pulleyJoint", box2d.b2JointType.e_pulleyJoint), goog.exportProperty(box2d.b2JointType, "e_mouseJoint", box2d.b2JointType.e_mouseJoint), goog.exportProperty(box2d.b2JointType, "e_gearJoint", box2d.b2JointType.e_gearJoint), goog.exportProperty(box2d.b2JointType, "e_wheelJoint", box2d.b2JointType.e_wheelJoint), goog.exportProperty(box2d.b2JointType, "e_weldJoint", box2d.b2JointType.e_weldJoint), goog.exportProperty(box2d.b2JointType, "e_frictionJoint", box2d.b2JointType.e_frictionJoint), goog.exportProperty(box2d.b2JointType, "e_ropeJoint", box2d.b2JointType.e_ropeJoint), goog.exportProperty(box2d.b2JointType, "e_motorJoint", box2d.b2JointType.e_motorJoint), goog.exportProperty(box2d.b2JointType, "e_areaJoint", box2d.b2JointType.e_areaJoint), box2d.b2LimitState = {
    e_inactiveLimit: 0,
    e_atLowerLimit: 1,
    e_atUpperLimit: 2,
    e_equalLimits: 3
}, goog.exportProperty(box2d.b2LimitState, "e_inactiveLimit", box2d.b2LimitState.e_inactiveLimit), goog.exportProperty(box2d.b2LimitState, "e_atLowerLimit", box2d.b2LimitState.e_atLowerLimit), goog.exportProperty(box2d.b2LimitState, "e_atUpperLimit", box2d.b2LimitState.e_atUpperLimit), goog.exportProperty(box2d.b2LimitState, "e_equalLimits", box2d.b2LimitState.e_equalLimits), box2d.b2Jacobian = function() {
    this.linear = new box2d.b2Vec2
}, box2d.b2Jacobian.prototype.linear = null, box2d.b2Jacobian.prototype.angularA = 0, box2d.b2Jacobian.prototype.angularB = 0, box2d.b2Jacobian.prototype.SetZero = function() {
    return this.linear.SetZero(), this.angularA = 0, this.angularB = 0, this
}, box2d.b2Jacobian.prototype.Set = function(a, b, c) {
    return this.linear.Copy(a), this.angularA = b, this.angularB = c, this
}, box2d.b2JointEdge = function() {}, box2d.b2JointEdge.prototype.other = null, box2d.b2JointEdge.prototype.joint = null, box2d.b2JointEdge.prototype.prev = null, box2d.b2JointEdge.prototype.next = null, box2d.b2JointDef = function(a) {
    this.type = a
}, box2d.b2JointDef.prototype.type = box2d.b2JointType.e_unknownJoint, box2d.b2JointDef.prototype.userData = null, box2d.b2JointDef.prototype.bodyA = null, box2d.b2JointDef.prototype.bodyB = null, box2d.b2JointDef.prototype.collideConnected = !1, box2d.b2Joint = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(a.bodyA !== a.bodyB), this.m_type = a.type, this.m_edgeA = new box2d.b2JointEdge, this.m_edgeB = new box2d.b2JointEdge, this.m_bodyA = a.bodyA, this.m_bodyB = a.bodyB, this.m_collideConnected = a.collideConnected, this.m_userData = a.userData
}, box2d.b2Joint.prototype.m_type = box2d.b2JointType.e_unknownJoint, box2d.b2Joint.prototype.m_prev = null, box2d.b2Joint.prototype.m_next = null, box2d.b2Joint.prototype.m_edgeA = null, box2d.b2Joint.prototype.m_edgeB = null, box2d.b2Joint.prototype.m_bodyA = null, box2d.b2Joint.prototype.m_bodyB = null, box2d.b2Joint.prototype.m_index = 0, box2d.b2Joint.prototype.m_islandFlag = !1, box2d.b2Joint.prototype.m_collideConnected = !1, box2d.b2Joint.prototype.m_userData = null, box2d.b2Joint.prototype.GetAnchorA = function(a) {
    return a.SetZero()
}, box2d.b2Joint.prototype.GetAnchorB = function(a) {
    return a.SetZero()
}, box2d.b2Joint.prototype.GetReactionForce = function(a, b) {
    return b.SetZero()
}, box2d.b2Joint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2Joint.prototype.InitVelocityConstraints = function() {}, box2d.b2Joint.prototype.SolveVelocityConstraints = function() {}, box2d.b2Joint.prototype.SolvePositionConstraints = function() {
    return !1
}, box2d.b2Joint.prototype.GetType = function() {
    return this.m_type
}, box2d.b2Joint.prototype.GetBodyA = function() {
    return this.m_bodyA
}, box2d.b2Joint.prototype.GetBodyB = function() {
    return this.m_bodyB
}, box2d.b2Joint.prototype.GetNext = function() {
    return this.m_next
}, box2d.b2Joint.prototype.GetUserData = function() {
    return this.m_userData
}, box2d.b2Joint.prototype.SetUserData = function(a) {
    this.m_userData = a
}, box2d.b2Joint.prototype.GetCollideConnected = function() {
    return this.m_collideConnected
}, box2d.b2Joint.prototype.Dump = function() {
    box2d.DEBUG && box2d.b2Log("// Dump is not supported for this joint type.\n")
}, box2d.b2Joint.prototype.IsActive = function() {
    return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
}, box2d.b2Joint.prototype.ShiftOrigin = function() {}, goog.provide("box2d.b2RevoluteJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2RevoluteJointDef = function() {
    goog.base(this, box2d.b2JointType.e_revoluteJoint), this.localAnchorA = new box2d.b2Vec2(0, 0), this.localAnchorB = new box2d.b2Vec2(0, 0)
}, goog.inherits(box2d.b2RevoluteJointDef, box2d.b2JointDef), box2d.b2RevoluteJointDef.prototype.localAnchorA = null, box2d.b2RevoluteJointDef.prototype.localAnchorB = null, box2d.b2RevoluteJointDef.prototype.referenceAngle = 0, box2d.b2RevoluteJointDef.prototype.enableLimit = !1, box2d.b2RevoluteJointDef.prototype.lowerAngle = 0, box2d.b2RevoluteJointDef.prototype.upperAngle = 0, box2d.b2RevoluteJointDef.prototype.enableMotor = !1, box2d.b2RevoluteJointDef.prototype.motorSpeed = 0, box2d.b2RevoluteJointDef.prototype.maxMotorTorque = 0, box2d.b2RevoluteJointDef.prototype.Initialize = function(a, b, c) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(c, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngleRadians() - this.bodyA.GetAngleRadians()
}, box2d.b2RevoluteJoint = function(a) {
    goog.base(this, a), this.m_localAnchorA = new box2d.b2Vec2, this.m_localAnchorB = new box2d.b2Vec2, this.m_impulse = new box2d.b2Vec3, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_mass = new box2d.b2Mat33, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_K = new box2d.b2Mat22, this.m_localAnchorA.Copy(a.localAnchorA), this.m_localAnchorB.Copy(a.localAnchorB), this.m_referenceAngle = a.referenceAngle, this.m_impulse.SetZero(), this.m_motorImpulse = 0, this.m_lowerAngle = a.lowerAngle, this.m_upperAngle = a.upperAngle, this.m_maxMotorTorque = a.maxMotorTorque, this.m_motorSpeed = a.motorSpeed, this.m_enableLimit = a.enableLimit, this.m_enableMotor = a.enableMotor, this.m_limitState = box2d.b2LimitState.e_inactiveLimit
}, goog.inherits(box2d.b2RevoluteJoint, box2d.b2Joint), box2d.b2RevoluteJoint.prototype.m_localAnchorA = null, box2d.b2RevoluteJoint.prototype.m_localAnchorB = null, box2d.b2RevoluteJoint.prototype.m_impulse = null, box2d.b2RevoluteJoint.prototype.m_motorImpulse = 0, box2d.b2RevoluteJoint.prototype.m_enableMotor = !1, box2d.b2RevoluteJoint.prototype.m_maxMotorTorque = 0, box2d.b2RevoluteJoint.prototype.m_motorSpeed = 0, box2d.b2RevoluteJoint.prototype.m_enableLimit = !1, box2d.b2RevoluteJoint.prototype.m_referenceAngle = 0, box2d.b2RevoluteJoint.prototype.m_lowerAngle = 0, box2d.b2RevoluteJoint.prototype.m_upperAngle = 0, box2d.b2RevoluteJoint.prototype.m_indexA = 0, box2d.b2RevoluteJoint.prototype.m_indexB = 0, box2d.b2RevoluteJoint.prototype.m_rA = null, box2d.b2RevoluteJoint.prototype.m_rB = null, box2d.b2RevoluteJoint.prototype.m_localCenterA = null, box2d.b2RevoluteJoint.prototype.m_localCenterB = null, box2d.b2RevoluteJoint.prototype.m_invMassA = 0, box2d.b2RevoluteJoint.prototype.m_invMassB = 0, box2d.b2RevoluteJoint.prototype.m_invIA = 0, box2d.b2RevoluteJoint.prototype.m_invIB = 0, box2d.b2RevoluteJoint.prototype.m_mass = null, box2d.b2RevoluteJoint.prototype.m_motorMass = 0, box2d.b2RevoluteJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit, box2d.b2RevoluteJoint.prototype.m_qA = null, box2d.b2RevoluteJoint.prototype.m_qB = null, box2d.b2RevoluteJoint.prototype.m_lalcA = null, box2d.b2RevoluteJoint.prototype.m_lalcB = null, box2d.b2RevoluteJoint.prototype.m_K = null, box2d.b2RevoluteJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].a,
        c = a.velocities[this.m_indexA].v,
        d = a.velocities[this.m_indexA].w,
        e = a.positions[this.m_indexB].a,
        f = a.velocities[this.m_indexB].v,
        g = a.velocities[this.m_indexB].w,
        h = this.m_qA.SetAngleRadians(b),
        i = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2MulRV(h, this.m_lalcA, this.m_rA), box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(i, this.m_lalcB, this.m_rB);
    var j = this.m_invMassA,
        k = this.m_invMassB,
        l = this.m_invIA,
        m = this.m_invIB,
        n = l + m === 0;
    if (this.m_mass.ex.x = j + k + this.m_rA.y * this.m_rA.y * l + this.m_rB.y * this.m_rB.y * m, this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * l - this.m_rB.y * this.m_rB.x * m, this.m_mass.ez.x = -this.m_rA.y * l - this.m_rB.y * m, this.m_mass.ex.y = this.m_mass.ey.x, this.m_mass.ey.y = j + k + this.m_rA.x * this.m_rA.x * l + this.m_rB.x * this.m_rB.x * m, this.m_mass.ez.y = this.m_rA.x * l + this.m_rB.x * m, this.m_mass.ex.z = this.m_mass.ez.x, this.m_mass.ey.z = this.m_mass.ez.y, this.m_mass.ez.z = l + m, this.m_motorMass = l + m, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), (this.m_enableMotor === !1 || n) && (this.m_motorImpulse = 0), this.m_enableLimit && n === !1) {
        var o = e - b - this.m_referenceAngle;
        box2d.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * box2d.b2_angularSlop ? this.m_limitState = box2d.b2LimitState.e_equalLimits : o <= this.m_lowerAngle ? (this.m_limitState !== box2d.b2LimitState.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = box2d.b2LimitState.e_atLowerLimit) : o >= this.m_upperAngle ? (this.m_limitState !== box2d.b2LimitState.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = box2d.b2LimitState.e_atUpperLimit) : (this.m_limitState = box2d.b2LimitState.e_inactiveLimit, this.m_impulse.z = 0)
    } else this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
    if (a.step.warmStarting) {
        this.m_impulse.SelfMul(a.step.dtRatio), this.m_motorImpulse *= a.step.dtRatio;
        var p = box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P.SetXY(this.m_impulse.x, this.m_impulse.y);
        c.SelfMulSub(j, p), d -= l * (box2d.b2CrossVV(this.m_rA, p) + this.m_motorImpulse + this.m_impulse.z), f.SelfMulAdd(k, p), g += m * (box2d.b2CrossVV(this.m_rB, p) + this.m_motorImpulse + this.m_impulse.z)
    } else this.m_impulse.SetZero(), this.m_motorImpulse = 0;
    a.velocities[this.m_indexA].w = d, a.velocities[this.m_indexB].w = g
}, box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_invMassA,
        g = this.m_invMassB,
        h = this.m_invIA,
        i = this.m_invIB,
        j = h + i === 0;
    if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits && j === !1) {
        var k = e - c - this.m_motorSpeed,
            l = -this.m_motorMass * k,
            m = this.m_motorImpulse,
            n = a.step.dt * this.m_maxMotorTorque;
        this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + l, -n, n), l = this.m_motorImpulse - m, c -= h * l, e += i * l
    }
    if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && j === !1) {
        var o = box2d.b2SubVV(box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1),
            p = e - c,
            l = this.m_mass.Solve33(o.x, o.y, p, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3).SelfNeg();
        if (this.m_limitState === box2d.b2LimitState.e_equalLimits) this.m_impulse.SelfAdd(l);
        else if (this.m_limitState === box2d.b2LimitState.e_atLowerLimit) {
            var q = this.m_impulse.z + l.z;
            if (0 > q) {
                var r = -o.x + this.m_impulse.z * this.m_mass.ez.x,
                    s = -o.y + this.m_impulse.z * this.m_mass.ez.y,
                    t = this.m_mass.Solve22(r, s, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
                l.x = t.x, l.y = t.y, l.z = -this.m_impulse.z, this.m_impulse.x += t.x, this.m_impulse.y += t.y, this.m_impulse.z = 0
            } else this.m_impulse.SelfAdd(l)
        } else if (this.m_limitState === box2d.b2LimitState.e_atUpperLimit) {
            var q = this.m_impulse.z + l.z;
            if (q > 0) {
                var r = -o.x + this.m_impulse.z * this.m_mass.ez.x,
                    s = -o.y + this.m_impulse.z * this.m_mass.ez.y,
                    t = this.m_mass.Solve22(r, s, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
                l.x = t.x, l.y = t.y, l.z = -this.m_impulse.z, this.m_impulse.x += t.x, this.m_impulse.y += t.y, this.m_impulse.z = 0
            } else this.m_impulse.SelfAdd(l)
        }
        var u = box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P.SetXY(l.x, l.y);
        b.SelfMulSub(f, u), c -= h * (box2d.b2CrossVV(this.m_rA, u) + l.z), d.SelfMulAdd(g, u), e += i * (box2d.b2CrossVV(this.m_rB, u) + l.z)
    } else {
        var k = box2d.b2SubVV(box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot),
            l = this.m_mass.Solve22(-k.x, -k.y, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2);
        this.m_impulse.x += l.x, this.m_impulse.y += l.y, b.SelfMulSub(f, l), c -= h * box2d.b2CrossVV(this.m_rA, l), d.SelfMulAdd(g, l), e += i * box2d.b2CrossVV(this.m_rB, l)
    }
    a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3 = new box2d.b2Vec3, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2 = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e),
        h = 0,
        i = 0,
        j = this.m_invIA + this.m_invIB === 0;
    if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && j === !1) {
        var k = e - c - this.m_referenceAngle,
            l = 0;
        if (this.m_limitState === box2d.b2LimitState.e_equalLimits) {
            var m = box2d.b2Clamp(k - this.m_lowerAngle, -box2d.b2_maxAngularCorrection, box2d.b2_maxAngularCorrection);
            l = -this.m_motorMass * m, h = box2d.b2Abs(m)
        } else if (this.m_limitState === box2d.b2LimitState.e_atLowerLimit) {
            var m = k - this.m_lowerAngle;
            h = -m, m = box2d.b2Clamp(m + box2d.b2_angularSlop, -box2d.b2_maxAngularCorrection, 0), l = -this.m_motorMass * m
        } else if (this.m_limitState === box2d.b2LimitState.e_atUpperLimit) {
            var m = k - this.m_upperAngle;
            h = m, m = box2d.b2Clamp(m - box2d.b2_angularSlop, 0, box2d.b2_maxAngularCorrection), l = -this.m_motorMass * m
        }
        c -= this.m_invIA * l, e += this.m_invIB * l
    }
    f.SetAngleRadians(c), g.SetAngleRadians(e), box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var n = box2d.b2MulRV(f, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var o = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        m = box2d.b2SubVV(box2d.b2AddVV(d, o, box2d.b2Vec2.s_t0), box2d.b2AddVV(b, n, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C);
    i = m.GetLength();
    var p = this.m_invMassA,
        q = this.m_invMassB,
        r = this.m_invIA,
        s = this.m_invIB,
        t = this.m_K;
    t.ex.x = p + q + r * n.y * n.y + s * o.y * o.y, t.ex.y = -r * n.x * n.y - s * o.x * o.y, t.ey.x = t.ex.y, t.ey.y = p + q + r * n.x * n.x + s * o.x * o.x;
    var u = t.Solve(m.x, m.y, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse).SelfNeg();
    return b.SelfMulSub(p, u), c -= r * box2d.b2CrossVV(n, u), d.SelfMulAdd(q, u), e += s * box2d.b2CrossVV(o, u), a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, i <= box2d.b2_linearSlop && h <= box2d.b2_angularSlop
}, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec2, box2d.b2RevoluteJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2RevoluteJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2RevoluteJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * this.m_impulse.x, a * this.m_impulse.y)
}, box2d.b2RevoluteJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_impulse.z
}, box2d.b2RevoluteJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2RevoluteJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2RevoluteJoint.prototype.GetReferenceAngle = function() {
    return this.m_referenceAngle
}, box2d.b2RevoluteJoint.prototype.GetJointAngleRadians = function() {
    return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
}, box2d.b2RevoluteJoint.prototype.GetJointSpeed = function() {
    return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
}, box2d.b2RevoluteJoint.prototype.IsMotorEnabled = function() {
    return this.m_enableMotor
}, box2d.b2RevoluteJoint.prototype.EnableMotor = function(a) {
    this.m_enableMotor !== a && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = a)
}, box2d.b2RevoluteJoint.prototype.GetMotorTorque = function(a) {
    return a * this.m_motorImpulse
}, box2d.b2RevoluteJoint.prototype.GetMotorSpeed = function() {
    return this.m_motorSpeed
}, box2d.b2RevoluteJoint.prototype.SetMaxMotorTorque = function(a) {
    this.m_maxMotorTorque = a
}, box2d.b2RevoluteJoint.prototype.GetMaxMotorTorque = function() {
    return this.m_maxMotorTorque
}, box2d.b2RevoluteJoint.prototype.IsLimitEnabled = function() {
    return this.m_enableLimit
}, box2d.b2RevoluteJoint.prototype.EnableLimit = function(a) {
    a !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = a, this.m_impulse.z = 0)
}, box2d.b2RevoluteJoint.prototype.GetLowerLimit = function() {
    return this.m_lowerAngle
}, box2d.b2RevoluteJoint.prototype.GetUpperLimit = function() {
    return this.m_upperAngle
}, box2d.b2RevoluteJoint.prototype.SetLimits = function(a, b) {
    (a !== this.m_lowerAngle || b !== this.m_upperAngle) && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_impulse.z = 0, this.m_lowerAngle = a, this.m_upperAngle = b)
}, box2d.b2RevoluteJoint.prototype.SetMotorSpeed = function(a) {
    this.m_motorSpeed !== a && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = a)
}, box2d.b2RevoluteJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"), box2d.b2Log("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle), box2d.b2Log("  jd.upperAngle = %.15f;\n", this.m_upperAngle), box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2PrismaticJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2PrismaticJointDef = function() {
    goog.base(this, box2d.b2JointType.e_prismaticJoint), this.localAnchorA = new box2d.b2Vec2, this.localAnchorB = new box2d.b2Vec2, this.localAxisA = new box2d.b2Vec2(1, 0)
}, goog.inherits(box2d.b2PrismaticJointDef, box2d.b2JointDef), box2d.b2PrismaticJointDef.prototype.localAnchorA = null, box2d.b2PrismaticJointDef.prototype.localAnchorB = null, box2d.b2PrismaticJointDef.prototype.localAxisA = null, box2d.b2PrismaticJointDef.prototype.referenceAngle = 0, box2d.b2PrismaticJointDef.prototype.enableLimit = !1, box2d.b2PrismaticJointDef.prototype.lowerTranslation = 0, box2d.b2PrismaticJointDef.prototype.upperTranslation = 0, box2d.b2PrismaticJointDef.prototype.enableMotor = !1, box2d.b2PrismaticJointDef.prototype.maxMotorForce = 0, box2d.b2PrismaticJointDef.prototype.motorSpeed = 0, box2d.b2PrismaticJointDef.prototype.Initialize = function(a, b, c, d) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(c, this.localAnchorB), this.bodyA.GetLocalVector(d, this.localAxisA), this.referenceAngle = this.bodyB.GetAngleRadians() - this.bodyA.GetAngleRadians()
}, box2d.b2PrismaticJoint = function(a) {
    goog.base(this, a), this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_localXAxisA = a.localAxisA.Clone().SelfNormalize(), this.m_localYAxisA = box2d.b2CrossOneV(this.m_localXAxisA, new box2d.b2Vec2), this.m_referenceAngle = a.referenceAngle, this.m_impulse = new box2d.b2Vec3(0, 0, 0), this.m_lowerTranslation = a.lowerTranslation, this.m_upperTranslation = a.upperTranslation, this.m_maxMotorForce = a.maxMotorForce, this.m_motorSpeed = a.motorSpeed, this.m_enableLimit = a.enableLimit, this.m_enableMotor = a.enableMotor, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_axis = new box2d.b2Vec2(0, 0), this.m_perp = new box2d.b2Vec2(0, 0), this.m_K = new box2d.b2Mat33, this.m_K3 = new box2d.b2Mat33, this.m_K2 = new box2d.b2Mat22, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2
}, goog.inherits(box2d.b2PrismaticJoint, box2d.b2Joint), box2d.b2PrismaticJoint.prototype.m_localAnchorA = null, box2d.b2PrismaticJoint.prototype.m_localAnchorB = null, box2d.b2PrismaticJoint.prototype.m_localXAxisA = null, box2d.b2PrismaticJoint.prototype.m_localYAxisA = null, box2d.b2PrismaticJoint.prototype.m_referenceAngle = 0, box2d.b2PrismaticJoint.prototype.m_impulse = null, box2d.b2PrismaticJoint.prototype.m_motorImpulse = 0, box2d.b2PrismaticJoint.prototype.m_lowerTranslation = 0, box2d.b2PrismaticJoint.prototype.m_upperTranslation = 0, box2d.b2PrismaticJoint.prototype.m_maxMotorForce = 0, box2d.b2PrismaticJoint.prototype.m_motorSpeed = 0, box2d.b2PrismaticJoint.prototype.m_enableLimit = !1, box2d.b2PrismaticJoint.prototype.m_enableMotor = !1, box2d.b2PrismaticJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit, box2d.b2PrismaticJoint.prototype.m_indexA = 0, box2d.b2PrismaticJoint.prototype.m_indexB = 0, box2d.b2PrismaticJoint.prototype.m_localCenterA = null, box2d.b2PrismaticJoint.prototype.m_localCenterB = null, box2d.b2PrismaticJoint.prototype.m_invMassA = 0, box2d.b2PrismaticJoint.prototype.m_invMassB = 0, box2d.b2PrismaticJoint.prototype.m_invIA = 0, box2d.b2PrismaticJoint.prototype.m_invIB = 0, box2d.b2PrismaticJoint.prototype.m_axis = null, box2d.b2PrismaticJoint.prototype.m_perp = null, box2d.b2PrismaticJoint.prototype.m_s1 = 0, box2d.b2PrismaticJoint.prototype.m_s2 = 0, box2d.b2PrismaticJoint.prototype.m_a1 = 0, box2d.b2PrismaticJoint.prototype.m_a2 = 0, box2d.b2PrismaticJoint.prototype.m_K = null, box2d.b2PrismaticJoint.prototype.m_K3 = null, box2d.b2PrismaticJoint.prototype.m_K2 = null, box2d.b2PrismaticJoint.prototype.m_motorMass = 0, box2d.b2PrismaticJoint.prototype.m_qA = null, box2d.b2PrismaticJoint.prototype.m_qB = null, box2d.b2PrismaticJoint.prototype.m_lalcA = null, box2d.b2PrismaticJoint.prototype.m_lalcB = null, box2d.b2PrismaticJoint.prototype.m_rA = null, box2d.b2PrismaticJoint.prototype.m_rB = null, box2d.b2PrismaticJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.velocities[this.m_indexA].v,
        e = a.velocities[this.m_indexA].w,
        f = a.positions[this.m_indexB].c,
        g = a.positions[this.m_indexB].a,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = this.m_qA.SetAngleRadians(c),
        k = this.m_qB.SetAngleRadians(g);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var l = box2d.b2MulRV(j, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var m = box2d.b2MulRV(k, this.m_lalcB, this.m_rB),
        n = box2d.b2AddVV(box2d.b2SubVV(f, b, box2d.b2Vec2.s_t0), box2d.b2SubVV(m, l, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d),
        o = this.m_invMassA,
        p = this.m_invMassB,
        q = this.m_invIA,
        r = this.m_invIB;
    if (box2d.b2MulRV(j, this.m_localXAxisA, this.m_axis), this.m_a1 = box2d.b2CrossVV(box2d.b2AddVV(n, l, box2d.b2Vec2.s_t0), this.m_axis), this.m_a2 = box2d.b2CrossVV(m, this.m_axis), this.m_motorMass = o + p + q * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), box2d.b2MulRV(j, this.m_localYAxisA, this.m_perp), this.m_s1 = box2d.b2CrossVV(box2d.b2AddVV(n, l, box2d.b2Vec2.s_t0), this.m_perp), this.m_s2 = box2d.b2CrossVV(m, this.m_perp), this.m_K.ex.x = o + p + q * this.m_s1 * this.m_s1 + r * this.m_s2 * this.m_s2, this.m_K.ex.y = q * this.m_s1 + r * this.m_s2, this.m_K.ex.z = q * this.m_s1 * this.m_a1 + r * this.m_s2 * this.m_a2, this.m_K.ey.x = this.m_K.ex.y, this.m_K.ey.y = q + r, 0 === this.m_K.ey.y && (this.m_K.ey.y = 1), this.m_K.ey.z = q * this.m_a1 + r * this.m_a2, this.m_K.ez.x = this.m_K.ex.z, this.m_K.ez.y = this.m_K.ey.z, this.m_K.ez.z = o + p + q * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2, this.m_enableLimit) {
        var s = box2d.b2DotVV(this.m_axis, n);
        box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop ? this.m_limitState = box2d.b2LimitState.e_equalLimits : s <= this.m_lowerTranslation ? this.m_limitState !== box2d.b2LimitState.e_atLowerLimit && (this.m_limitState = box2d.b2LimitState.e_atLowerLimit, this.m_impulse.z = 0) : s >= this.m_upperTranslation ? this.m_limitState !== box2d.b2LimitState.e_atUpperLimit && (this.m_limitState = box2d.b2LimitState.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = box2d.b2LimitState.e_inactiveLimit, this.m_impulse.z = 0)
    } else this.m_limitState = box2d.b2LimitState.e_inactiveLimit, this.m_impulse.z = 0;
    if (this.m_enableMotor === !1 && (this.m_motorImpulse = 0), a.step.warmStarting) {
        this.m_impulse.SelfMul(a.step.dtRatio), this.m_motorImpulse *= a.step.dtRatio;
        var t = box2d.b2AddVV(box2d.b2MulSV(this.m_impulse.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2MulSV(this.m_motorImpulse + this.m_impulse.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P),
            u = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
            v = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
        d.SelfMulSub(o, t), e -= q * u, h.SelfMulAdd(p, t), i += r * v
    } else this.m_impulse.SetZero(), this.m_motorImpulse = 0;
    a.velocities[this.m_indexA].w = e, a.velocities[this.m_indexB].w = i
}, box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_invMassA,
        g = this.m_invMassB,
        h = this.m_invIA,
        i = this.m_invIB;
    if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits) {
        var j = box2d.b2DotVV(this.m_axis, box2d.b2SubVV(d, b, box2d.b2Vec2.s_t0)) + this.m_a2 * e - this.m_a1 * c,
            k = this.m_motorMass * (this.m_motorSpeed - j),
            l = this.m_motorImpulse,
            m = a.step.dt * this.m_maxMotorForce;
        this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + k, -m, m), k = this.m_motorImpulse - l;
        var n = box2d.b2MulSV(k, this.m_axis, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
            o = k * this.m_a1,
            p = k * this.m_a2;
        b.SelfMulSub(f, n), c -= h * o, d.SelfMulAdd(g, n), e += i * p
    }
    var q = box2d.b2DotVV(this.m_perp, box2d.b2SubVV(d, b, box2d.b2Vec2.s_t0)) + this.m_s2 * e - this.m_s1 * c,
        r = e - c;
    if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit) {
        var s = box2d.b2DotVV(this.m_axis, box2d.b2SubVV(d, b, box2d.b2Vec2.s_t0)) + this.m_a2 * e - this.m_a1 * c,
            t = box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1.Copy(this.m_impulse),
            u = this.m_K.Solve33(-q, -r, -s, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3);
        this.m_impulse.SelfAdd(u), this.m_limitState === box2d.b2LimitState.e_atLowerLimit ? this.m_impulse.z = box2d.b2Max(this.m_impulse.z, 0) : this.m_limitState === box2d.b2LimitState.e_atUpperLimit && (this.m_impulse.z = box2d.b2Min(this.m_impulse.z, 0));
        var v = -q - (this.m_impulse.z - t.z) * this.m_K.ez.x,
            w = -r - (this.m_impulse.z - t.z) * this.m_K.ez.y,
            x = this.m_K.Solve22(v, w, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r);
        x.x += t.x, x.y += t.y, this.m_impulse.x = x.x, this.m_impulse.y = x.y, u.x = this.m_impulse.x - t.x, u.y = this.m_impulse.y - t.y, u.z = this.m_impulse.z - t.z;
        var n = box2d.b2AddVV(box2d.b2MulSV(u.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2MulSV(u.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
            o = u.x * this.m_s1 + u.y + u.z * this.m_a1,
            p = u.x * this.m_s2 + u.y + u.z * this.m_a2;
        b.SelfMulSub(f, n), c -= h * o, d.SelfMulAdd(g, n), e += i * p
    } else {
        var u = this.m_K.Solve22(-q, -r, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2);
        this.m_impulse.x += u.x, this.m_impulse.y += u.y;
        var n = box2d.b2MulSV(u.x, this.m_perp, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
            o = u.x * this.m_s1 + u.y,
            p = u.x * this.m_s2 + u.y;
        b.SelfMulSub(f, n), c -= h * o, d.SelfMulAdd(g, n), e += i * p
    }
    a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1 = new box2d.b2Vec3, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3 = new box2d.b2Vec3, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2 = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e),
        h = this.m_invMassA,
        i = this.m_invMassB,
        j = this.m_invIA,
        k = this.m_invIB,
        l = box2d.b2MulRV(f, this.m_lalcA, this.m_rA),
        m = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        n = box2d.b2SubVV(box2d.b2AddVV(d, m, box2d.b2Vec2.s_t0), box2d.b2AddVV(b, l, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d),
        o = box2d.b2MulRV(f, this.m_localXAxisA, this.m_axis),
        p = box2d.b2CrossVV(box2d.b2AddVV(n, l, box2d.b2Vec2.s_t0), o),
        q = box2d.b2CrossVV(m, o),
        r = box2d.b2MulRV(f, this.m_localYAxisA, this.m_perp),
        s = box2d.b2CrossVV(box2d.b2AddVV(n, l, box2d.b2Vec2.s_t0), r),
        t = box2d.b2CrossVV(m, r),
        u = box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse,
        v = box2d.b2DotVV(r, n),
        w = e - c - this.m_referenceAngle,
        x = box2d.b2Abs(v),
        y = box2d.b2Abs(w),
        z = !1,
        A = 0;
    if (this.m_enableLimit) {
        var B = box2d.b2DotVV(o, n);
        box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop ? (A = box2d.b2Clamp(B, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection), x = box2d.b2Max(x, box2d.b2Abs(B)), z = !0) : B <= this.m_lowerTranslation ? (A = box2d.b2Clamp(B - this.m_lowerTranslation + box2d.b2_linearSlop, -box2d.b2_maxLinearCorrection, 0), x = box2d.b2Max(x, this.m_lowerTranslation - B), z = !0) : B >= this.m_upperTranslation && (A = box2d.b2Clamp(B - this.m_upperTranslation - box2d.b2_linearSlop, 0, box2d.b2_maxLinearCorrection), x = box2d.b2Max(x, B - this.m_upperTranslation), z = !0)
    }
    if (z) {
        var C = h + i + j * s * s + k * t * t,
            D = j * s + k * t,
            E = j * s * p + k * t * q,
            F = j + k;
        0 === F && (F = 1);
        var G = j * p + k * q,
            H = h + i + j * p * p + k * q * q,
            I = this.m_K3;
        I.ex.SetXYZ(C, D, E), I.ey.SetXYZ(D, F, G), I.ez.SetXYZ(E, G, H), u = I.Solve33(-v, -w, -A, u)
    } else {
        var C = h + i + j * s * s + k * t * t,
            D = j * s + k * t,
            F = j + k;
        0 === F && (F = 1);
        var J = this.m_K2;
        J.ex.SetXY(C, D), J.ey.SetXY(D, F);
        var K = J.Solve(-v, -w, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1);
        u.x = K.x, u.y = K.y, u.z = 0
    }
    var L = box2d.b2AddVV(box2d.b2MulSV(u.x, r, box2d.b2Vec2.s_t0), box2d.b2MulSV(u.z, o, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P),
        M = u.x * s + u.y + u.z * p,
        N = u.x * t + u.y + u.z * q;
    return b.SelfMulSub(h, L), c -= j * M, d.SelfMulAdd(i, L), e += k * N, a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, x <= box2d.b2_linearSlop && y <= box2d.b2_angularSlop
}, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1 = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2PrismaticJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2PrismaticJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
}, box2d.b2PrismaticJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_impulse.y
}, box2d.b2PrismaticJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2PrismaticJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2PrismaticJoint.prototype.GetLocalAxisA = function(a) {
    return a.Copy(this.m_localXAxisA)
}, box2d.b2PrismaticJoint.prototype.GetReferenceAngle = function() {
    return this.m_referenceAngle
}, box2d.b2PrismaticJoint.prototype.GetJointTranslation = function() {
    var a = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA),
        b = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB),
        c = box2d.b2SubVV(b, a, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d),
        d = this.m_bodyA.GetWorldVector(this.m_localXAxisA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis),
        e = box2d.b2DotVV(c, d);
    return e
}, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis = new box2d.b2Vec2, box2d.b2PrismaticJoint.prototype.GetJointSpeed = function() {
    var a = this.m_bodyA,
        b = this.m_bodyB;
    box2d.b2SubVV(this.m_localAnchorA, a.m_sweep.localCenter, this.m_lalcA);
    var c = box2d.b2MulRV(a.m_xf.q, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, b.m_sweep.localCenter, this.m_lalcB);
    var d = box2d.b2MulRV(b.m_xf.q, this.m_lalcB, this.m_rB),
        e = box2d.b2AddVV(a.m_sweep.c, c, box2d.b2Vec2.s_t0),
        f = box2d.b2AddVV(b.m_sweep.c, d, box2d.b2Vec2.s_t1),
        g = box2d.b2SubVV(f, e, box2d.b2Vec2.s_t2),
        h = a.GetWorldVector(this.m_localXAxisA, this.m_axis),
        i = a.m_linearVelocity,
        j = b.m_linearVelocity,
        k = a.m_angularVelocity,
        l = b.m_angularVelocity,
        m = box2d.b2DotVV(g, box2d.b2CrossSV(k, h, box2d.b2Vec2.s_t0)) + box2d.b2DotVV(h, box2d.b2SubVV(box2d.b2AddVCrossSV(j, l, d, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(i, k, c, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
    return m
}, box2d.b2PrismaticJoint.prototype.IsLimitEnabled = function() {
    return this.m_enableLimit
}, box2d.b2PrismaticJoint.prototype.EnableLimit = function(a) {
    a !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = a, this.m_impulse.z = 0)
}, box2d.b2PrismaticJoint.prototype.GetLowerLimit = function() {
    return this.m_lowerTranslation
}, box2d.b2PrismaticJoint.prototype.GetUpperLimit = function() {
    return this.m_upperTranslation
}, box2d.b2PrismaticJoint.prototype.SetLimits = function(a, b) {
    (a !== this.m_lowerTranslation || b !== this.m_upperTranslation) && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = a, this.m_upperTranslation = b, this.m_impulse.z = 0)
}, box2d.b2PrismaticJoint.prototype.IsMotorEnabled = function() {
    return this.m_enableMotor
}, box2d.b2PrismaticJoint.prototype.EnableMotor = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = a
}, box2d.b2PrismaticJoint.prototype.SetMotorSpeed = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = a
}, box2d.b2PrismaticJoint.prototype.GetMotorSpeed = function() {
    return this.m_motorSpeed
}, box2d.b2PrismaticJoint.prototype.SetMaxMotorForce = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = a
}, box2d.b2PrismaticJoint.prototype.GetMaxMotorForce = function() {
    return this.m_maxMotorForce
}, box2d.b2PrismaticJoint.prototype.GetMotorForce = function(a) {
    return a * this.m_motorImpulse
}, box2d.b2PrismaticJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2PrismaticJointDef*/ var jd = new box2d.b2PrismaticJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.localAxisA.SetXY(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y), box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"), box2d.b2Log("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation), box2d.b2Log("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation), box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2GearJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), goog.require("box2d.b2RevoluteJoint"), goog.require("box2d.b2PrismaticJoint"), box2d.b2GearJointDef = function() {
    goog.base(this, box2d.b2JointType.e_gearJoint)
}, goog.inherits(box2d.b2GearJointDef, box2d.b2JointDef), box2d.b2GearJointDef.prototype.joint1 = null, box2d.b2GearJointDef.prototype.joint2 = null, box2d.b2GearJointDef.prototype.ratio = 1, box2d.b2GearJoint = function(a) {
    goog.base(this, a), this.m_joint1 = a.joint1, this.m_joint2 = a.joint2, this.m_localAnchorA = new box2d.b2Vec2, this.m_localAnchorB = new box2d.b2Vec2, this.m_localAnchorC = new box2d.b2Vec2, this.m_localAnchorD = new box2d.b2Vec2, this.m_localAxisC = new box2d.b2Vec2, this.m_localAxisD = new box2d.b2Vec2, this.m_lcA = new box2d.b2Vec2, this.m_lcB = new box2d.b2Vec2, this.m_lcC = new box2d.b2Vec2, this.m_lcD = new box2d.b2Vec2, this.m_JvAC = new box2d.b2Vec2, this.m_JvBD = new box2d.b2Vec2, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_qC = new box2d.b2Rot, this.m_qD = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_lalcC = new box2d.b2Vec2, this.m_lalcD = new box2d.b2Vec2, this.m_typeA = this.m_joint1.GetType(), this.m_typeB = this.m_joint2.GetType(), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_typeA === box2d.b2JointType.e_revoluteJoint || this.m_typeA === box2d.b2JointType.e_prismaticJoint), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_typeB === box2d.b2JointType.e_revoluteJoint || this.m_typeB === box2d.b2JointType.e_prismaticJoint);
    var b, c;
    this.m_bodyC = this.m_joint1.GetBodyA(), this.m_bodyA = this.m_joint1.GetBodyB();
    var d = this.m_bodyA.m_xf,
        e = this.m_bodyA.m_sweep.a,
        f = this.m_bodyC.m_xf,
        g = this.m_bodyC.m_sweep.a;
    if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) {
        var h = a.joint1;
        this.m_localAnchorC.Copy(h.m_localAnchorA), this.m_localAnchorA.Copy(h.m_localAnchorB), this.m_referenceAngleA = h.m_referenceAngle, this.m_localAxisC.SetZero(), b = e - g - this.m_referenceAngleA
    } else {
        var i = a.joint1;
        this.m_localAnchorC.Copy(i.m_localAnchorA), this.m_localAnchorA.Copy(i.m_localAnchorB), this.m_referenceAngleA = i.m_referenceAngle, this.m_localAxisC.Copy(i.m_localXAxisA);
        var j = this.m_localAnchorC,
            k = box2d.b2MulTRV(f.q, box2d.b2AddVV(box2d.b2MulRV(d.q, this.m_localAnchorA, box2d.b2Vec2.s_t0), box2d.b2SubVV(d.p, f.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0);
        b = box2d.b2DotVV(box2d.b2SubVV(k, j, box2d.b2Vec2.s_t0), this.m_localAxisC)
    }
    this.m_bodyD = this.m_joint2.GetBodyA(), this.m_bodyB = this.m_joint2.GetBodyB();
    var l = this.m_bodyB.m_xf,
        m = this.m_bodyB.m_sweep.a,
        n = this.m_bodyD.m_xf,
        o = this.m_bodyD.m_sweep.a;
    if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) {
        var h = a.joint2;
        this.m_localAnchorD.Copy(h.m_localAnchorA), this.m_localAnchorB.Copy(h.m_localAnchorB), this.m_referenceAngleB = h.m_referenceAngle, this.m_localAxisD.SetZero(), c = m - o - this.m_referenceAngleB
    } else {
        var i = a.joint2;
        this.m_localAnchorD.Copy(i.m_localAnchorA), this.m_localAnchorB.Copy(i.m_localAnchorB), this.m_referenceAngleB = i.m_referenceAngle, this.m_localAxisD.Copy(i.m_localXAxisA);
        var p = this.m_localAnchorD,
            q = box2d.b2MulTRV(n.q, box2d.b2AddVV(box2d.b2MulRV(l.q, this.m_localAnchorB, box2d.b2Vec2.s_t0), box2d.b2SubVV(l.p, n.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0);
        c = box2d.b2DotVV(box2d.b2SubVV(q, p, box2d.b2Vec2.s_t0), this.m_localAxisD)
    }
    this.m_ratio = a.ratio, this.m_constant = b + this.m_ratio * c, this.m_impulse = 0
}, goog.inherits(box2d.b2GearJoint, box2d.b2Joint), box2d.b2GearJoint.prototype.m_joint1 = null, box2d.b2GearJoint.prototype.m_joint2 = null, box2d.b2GearJoint.prototype.m_typeA = box2d.b2JointType.e_unknownJoint, box2d.b2GearJoint.prototype.m_typeB = box2d.b2JointType.e_unknownJoint, box2d.b2GearJoint.prototype.m_bodyC = null, box2d.b2GearJoint.prototype.m_bodyD = null, box2d.b2GearJoint.prototype.m_localAnchorA = null, box2d.b2GearJoint.prototype.m_localAnchorB = null, box2d.b2GearJoint.prototype.m_localAnchorC = null, box2d.b2GearJoint.prototype.m_localAnchorD = null, box2d.b2GearJoint.prototype.m_localAxisC = null, box2d.b2GearJoint.prototype.m_localAxisD = null, box2d.b2GearJoint.prototype.m_referenceAngleA = 0, box2d.b2GearJoint.prototype.m_referenceAngleB = 0, box2d.b2GearJoint.prototype.m_constant = 0, box2d.b2GearJoint.prototype.m_ratio = 0, box2d.b2GearJoint.prototype.m_impulse = 0, box2d.b2GearJoint.prototype.m_indexA = 0, box2d.b2GearJoint.prototype.m_indexB = 0, box2d.b2GearJoint.prototype.m_indexC = 0, box2d.b2GearJoint.prototype.m_indexD = 0, box2d.b2GearJoint.prototype.m_lcA = null, box2d.b2GearJoint.prototype.m_lcB = null, box2d.b2GearJoint.prototype.m_lcC = null, box2d.b2GearJoint.prototype.m_lcD = null, box2d.b2GearJoint.prototype.m_mA = 0, box2d.b2GearJoint.prototype.m_mB = 0, box2d.b2GearJoint.prototype.m_mC = 0, box2d.b2GearJoint.prototype.m_mD = 0, box2d.b2GearJoint.prototype.m_iA = 0, box2d.b2GearJoint.prototype.m_iB = 0, box2d.b2GearJoint.prototype.m_iC = 0, box2d.b2GearJoint.prototype.m_iD = 0, box2d.b2GearJoint.prototype.m_JvAC = null, box2d.b2GearJoint.prototype.m_JvBD = null, box2d.b2GearJoint.prototype.m_JwA = 0, box2d.b2GearJoint.prototype.m_JwB = 0, box2d.b2GearJoint.prototype.m_JwC = 0, box2d.b2GearJoint.prototype.m_JwD = 0, box2d.b2GearJoint.prototype.m_mass = 0, box2d.b2GearJoint.prototype.m_qA = null, box2d.b2GearJoint.prototype.m_qB = null, box2d.b2GearJoint.prototype.m_qC = null, box2d.b2GearJoint.prototype.m_qD = null, box2d.b2GearJoint.prototype.m_lalcA = null, box2d.b2GearJoint.prototype.m_lalcB = null, box2d.b2GearJoint.prototype.m_lalcC = null, box2d.b2GearJoint.prototype.m_lalcD = null, box2d.b2GearJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_indexC = this.m_bodyC.m_islandIndex, this.m_indexD = this.m_bodyD.m_islandIndex, this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter), this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter), this.m_mA = this.m_bodyA.m_invMass, this.m_mB = this.m_bodyB.m_invMass, this.m_mC = this.m_bodyC.m_invMass, this.m_mD = this.m_bodyD.m_invMass, this.m_iA = this.m_bodyA.m_invI, this.m_iB = this.m_bodyB.m_invI, this.m_iC = this.m_bodyC.m_invI, this.m_iD = this.m_bodyD.m_invI;
    var b = a.positions[this.m_indexA].a,
        c = a.velocities[this.m_indexA].v,
        d = a.velocities[this.m_indexA].w,
        e = a.positions[this.m_indexB].a,
        f = a.velocities[this.m_indexB].v,
        g = a.velocities[this.m_indexB].w,
        h = a.positions[this.m_indexC].a,
        i = a.velocities[this.m_indexC].v,
        j = a.velocities[this.m_indexC].w,
        k = a.positions[this.m_indexD].a,
        l = a.velocities[this.m_indexD].v,
        m = a.velocities[this.m_indexD].w,
        n = this.m_qA.SetAngleRadians(b),
        o = this.m_qB.SetAngleRadians(e),
        p = this.m_qC.SetAngleRadians(h),
        q = this.m_qD.SetAngleRadians(k);
    if (this.m_mass = 0, this.m_typeA === box2d.b2JointType.e_revoluteJoint) this.m_JvAC.SetZero(), this.m_JwA = 1, this.m_JwC = 1, this.m_mass += this.m_iA + this.m_iC;
    else {
        var r = box2d.b2MulRV(p, this.m_localAxisC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
        box2d.b2SubVV(this.m_localAnchorC, this.m_lcC, this.m_lalcC);
        var s = box2d.b2MulRV(p, this.m_lalcC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC);
        box2d.b2SubVV(this.m_localAnchorA, this.m_lcA, this.m_lalcA);
        var t = box2d.b2MulRV(n, this.m_lalcA, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA);
        this.m_JvAC.Copy(r), this.m_JwC = box2d.b2CrossVV(s, r), this.m_JwA = box2d.b2CrossVV(t, r), this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA
    }
    if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) this.m_JvBD.SetZero(), this.m_JwB = this.m_ratio, this.m_JwD = this.m_ratio, this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
    else {
        var r = box2d.b2MulRV(q, this.m_localAxisD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
        box2d.b2SubVV(this.m_localAnchorD, this.m_lcD, this.m_lalcD);
        var u = box2d.b2MulRV(q, this.m_lalcD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD);
        box2d.b2SubVV(this.m_localAnchorB, this.m_lcB, this.m_lalcB);
        var v = box2d.b2MulRV(o, this.m_lalcB, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB);
        box2d.b2MulSV(this.m_ratio, r, this.m_JvBD), this.m_JwD = this.m_ratio * box2d.b2CrossVV(u, r), this.m_JwB = this.m_ratio * box2d.b2CrossVV(v, r), this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB
    }
    this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0, a.step.warmStarting ? (c.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC), d += this.m_iA * this.m_impulse * this.m_JwA, f.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD), g += this.m_iB * this.m_impulse * this.m_JwB, i.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC), j -= this.m_iC * this.m_impulse * this.m_JwC, l.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD), m -= this.m_iD * this.m_impulse * this.m_JwD) : this.m_impulse = 0, a.velocities[this.m_indexA].w = d, a.velocities[this.m_indexB].w = g, a.velocities[this.m_indexC].w = j, a.velocities[this.m_indexD].w = m
}, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u = new box2d.b2Vec2, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA = new box2d.b2Vec2, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB = new box2d.b2Vec2, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC = new box2d.b2Vec2, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD = new box2d.b2Vec2, box2d.b2GearJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = a.velocities[this.m_indexC].v,
        g = a.velocities[this.m_indexC].w,
        h = a.velocities[this.m_indexD].v,
        i = a.velocities[this.m_indexD].w,
        j = box2d.b2DotVV(this.m_JvAC, box2d.b2SubVV(b, f, box2d.b2Vec2.s_t0)) + box2d.b2DotVV(this.m_JvBD, box2d.b2SubVV(d, h, box2d.b2Vec2.s_t0));
    j += this.m_JwA * c - this.m_JwC * g + (this.m_JwB * e - this.m_JwD * i);
    var k = -this.m_mass * j;
    this.m_impulse += k, b.SelfMulAdd(this.m_mA * k, this.m_JvAC), c += this.m_iA * k * this.m_JwA, d.SelfMulAdd(this.m_mB * k, this.m_JvBD), e += this.m_iB * k * this.m_JwB, f.SelfMulSub(this.m_mC * k, this.m_JvAC), g -= this.m_iC * k * this.m_JwC, h.SelfMulSub(this.m_mD * k, this.m_JvBD), i -= this.m_iD * k * this.m_JwD, a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e, a.velocities[this.m_indexC].w = g, a.velocities[this.m_indexD].w = i
}, box2d.b2GearJoint.prototype.SolvePositionConstraints = function(a) {
    var b, c, d, e, f, g, h = a.positions[this.m_indexA].c,
        i = a.positions[this.m_indexA].a,
        j = a.positions[this.m_indexB].c,
        k = a.positions[this.m_indexB].a,
        l = a.positions[this.m_indexC].c,
        m = a.positions[this.m_indexC].a,
        n = a.positions[this.m_indexD].c,
        o = a.positions[this.m_indexD].a,
        p = this.m_qA.SetAngleRadians(i),
        q = this.m_qB.SetAngleRadians(k),
        r = this.m_qC.SetAngleRadians(m),
        s = this.m_qD.SetAngleRadians(o),
        t = 0,
        u = this.m_JvAC,
        v = this.m_JvBD,
        w = 0;
    if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) u.SetZero(), d = 1, f = 1, w += this.m_iA + this.m_iC, b = i - m - this.m_referenceAngleA;
    else {
        var x = box2d.b2MulRV(r, this.m_localAxisC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u),
            y = box2d.b2MulRV(r, this.m_lalcC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC),
            z = box2d.b2MulRV(p, this.m_lalcA, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA);
        u.Copy(x), f = box2d.b2CrossVV(y, x), d = box2d.b2CrossVV(z, x), w += this.m_mC + this.m_mA + this.m_iC * f * f + this.m_iA * d * d;
        var A = this.m_lalcC,
            B = box2d.b2MulTRV(r, box2d.b2AddVV(z, box2d.b2SubVV(h, l, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0);
        b = box2d.b2DotVV(box2d.b2SubVV(B, A, box2d.b2Vec2.s_t0), this.m_localAxisC)
    }
    if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) v.SetZero(), e = this.m_ratio, g = this.m_ratio, w += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD), c = k - o - this.m_referenceAngleB;
    else {
        var x = box2d.b2MulRV(s, this.m_localAxisD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u),
            C = box2d.b2MulRV(s, this.m_lalcD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD),
            D = box2d.b2MulRV(q, this.m_lalcB, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB);
        box2d.b2MulSV(this.m_ratio, x, v), g = this.m_ratio * box2d.b2CrossVV(C, x), e = this.m_ratio * box2d.b2CrossVV(D, x), w += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * g * g + this.m_iB * e * e;
        var E = this.m_lalcD,
            F = box2d.b2MulTRV(s, box2d.b2AddVV(D, box2d.b2SubVV(j, n, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0);
        c = box2d.b2DotVV(box2d.b2SubVV(F, E, box2d.b2Vec2.s_t0), this.m_localAxisD)
    }
    var G = b + this.m_ratio * c - this.m_constant,
        H = 0;
    return w > 0 && (H = -G / w), h.SelfMulAdd(this.m_mA * H, u), i += this.m_iA * H * d, j.SelfMulAdd(this.m_mB * H, v), k += this.m_iB * H * e, l.SelfMulSub(this.m_mC * H, u), m -= this.m_iC * H * f, n.SelfMulSub(this.m_mD * H, v), o -= this.m_iD * H * g, a.positions[this.m_indexA].a = i, a.positions[this.m_indexB].a = k, a.positions[this.m_indexC].a = m, a.positions[this.m_indexD].a = o, t < box2d.b2_linearSlop
}, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u = new box2d.b2Vec2, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC = new box2d.b2Vec2, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD = new box2d.b2Vec2, box2d.b2GearJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2GearJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2GearJoint.prototype.GetReactionForce = function(a, b) {
    return box2d.b2MulSV(a * this.m_impulse, this.m_JvAC, b)
}, box2d.b2GearJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_impulse * this.m_JwA
}, box2d.b2GearJoint.prototype.GetJoint1 = function() {
    return this.m_joint1
}, box2d.b2GearJoint.prototype.GetJoint2 = function() {
    return this.m_joint2
}, box2d.b2GearJoint.prototype.GetRatio = function() {
    return this.m_ratio
}, box2d.b2GearJoint.prototype.SetRatio = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a)), this.m_ratio = a
}, box2d.b2GearJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex,
            c = this.m_joint1.m_index,
            d = this.m_joint2.m_index;
        box2d.b2Log("  /*box2d.b2GearJointDef*/ var jd = new box2d.b2GearJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.joint1 = joints[%d];\n", c), box2d.b2Log("  jd.joint2 = joints[%d];\n", d), box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2Distance"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), box2d.b2DistanceProxy = function() {
    this.m_buffer = box2d.b2Vec2.MakeArray(2)
}, box2d.b2DistanceProxy.prototype.m_buffer = null, box2d.b2DistanceProxy.prototype.m_vertices = null, box2d.b2DistanceProxy.prototype.m_count = 0, box2d.b2DistanceProxy.prototype.m_radius = 0, box2d.b2DistanceProxy.prototype.Reset = function() {
    return this.m_vertices = null, this.m_count = 0, this.m_radius = 0, this
}, box2d.b2DistanceProxy.prototype.SetShape = function(a, b) {
    a.SetupDistanceProxy(this, b)
}, box2d.b2DistanceProxy.prototype.GetSupport = function(a) {
    for (var b = 0, c = box2d.b2DotVV(this.m_vertices[0], a), d = 1; d < this.m_count; ++d) {
        var e = box2d.b2DotVV(this.m_vertices[d], a);
        e > c && (b = d, c = e)
    }
    return b
}, box2d.b2DistanceProxy.prototype.GetSupportVertex = function(a, b) {
    for (var c = 0, d = box2d.b2DotVV(this.m_vertices[0], a), e = 1; e < this.m_count; ++e) {
        var f = box2d.b2DotVV(this.m_vertices[e], a);
        f > d && (c = e, d = f)
    }
    return b.Copy(this.m_vertices[c])
}, box2d.b2DistanceProxy.prototype.GetVertexCount = function() {
    return this.m_count
}, box2d.b2DistanceProxy.prototype.GetVertex = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(a >= 0 && a < this.m_count), this.m_vertices[a]
}, box2d.b2SimplexCache = function() {
    this.indexA = box2d.b2MakeNumberArray(3), this.indexB = box2d.b2MakeNumberArray(3)
}, box2d.b2SimplexCache.prototype.metric = 0, box2d.b2SimplexCache.prototype.count = 0, box2d.b2SimplexCache.prototype.indexA = null, box2d.b2SimplexCache.prototype.indexB = null, box2d.b2SimplexCache.prototype.Reset = function() {
    return this.metric = 0, this.count = 0, this
}, box2d.b2DistanceInput = function() {
    this.proxyA = new box2d.b2DistanceProxy, this.proxyB = new box2d.b2DistanceProxy, this.transformA = new box2d.b2Transform, this.transformB = new box2d.b2Transform
}, box2d.b2DistanceInput.prototype.proxyA = null, box2d.b2DistanceInput.prototype.proxyB = null, box2d.b2DistanceInput.prototype.transformA = null, box2d.b2DistanceInput.prototype.transformB = null, box2d.b2DistanceInput.prototype.useRadii = !1, box2d.b2DistanceInput.prototype.Reset = function() {
    return this.proxyA.Reset(), this.proxyB.Reset(), this.transformA.SetIdentity(), this.transformB.SetIdentity(), this.useRadii = !1, this
}, box2d.b2DistanceOutput = function() {
    this.pointA = new box2d.b2Vec2, this.pointB = new box2d.b2Vec2
}, box2d.b2DistanceOutput.prototype.pointA = null, box2d.b2DistanceOutput.prototype.pointB = null, box2d.b2DistanceOutput.prototype.distance = 0, box2d.b2DistanceOutput.prototype.iterations = 0, box2d.b2DistanceOutput.prototype.Reset = function() {
    return this.pointA.SetZero(), this.pointB.SetZero(), this.distance = 0, this.iterations = 0, this
}, box2d.b2_gjkCalls = 0, box2d.b2_gjkIters = 0, box2d.b2_gjkMaxIters = 0, box2d.b2SimplexVertex = function() {
    this.wA = new box2d.b2Vec2, this.wB = new box2d.b2Vec2, this.w = new box2d.b2Vec2
}, box2d.b2SimplexVertex.prototype.wA = null, box2d.b2SimplexVertex.prototype.wB = null, box2d.b2SimplexVertex.prototype.w = null, box2d.b2SimplexVertex.prototype.a = 0, box2d.b2SimplexVertex.prototype.indexA = 0, box2d.b2SimplexVertex.prototype.indexB = 0, box2d.b2SimplexVertex.prototype.Copy = function(a) {
    return this.wA.Copy(a.wA), this.wB.Copy(a.wB), this.w.Copy(a.w), this.a = a.a, this.indexA = a.indexA, this.indexB = a.indexB, this
}, box2d.b2Simplex = function() {
    this.m_v1 = new box2d.b2SimplexVertex, this.m_v2 = new box2d.b2SimplexVertex, this.m_v3 = new box2d.b2SimplexVertex, this.m_vertices = new Array(3), this.m_vertices[0] = this.m_v1, this.m_vertices[1] = this.m_v2, this.m_vertices[2] = this.m_v3
}, box2d.b2Simplex.prototype.m_v1 = null, box2d.b2Simplex.prototype.m_v2 = null, box2d.b2Simplex.prototype.m_v3 = null, box2d.b2Simplex.prototype.m_vertices = null, box2d.b2Simplex.prototype.m_count = 0, box2d.b2Simplex.prototype.ReadCache = function(a, b, c, d, e) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= a.count && a.count <= 3), this.m_count = a.count;
    for (var f = this.m_vertices, g = 0; g < this.m_count; ++g) {
        var h = f[g];
        h.indexA = a.indexA[g], h.indexB = a.indexB[g];
        var i = b.GetVertex(h.indexA),
            j = d.GetVertex(h.indexB);
        box2d.b2MulXV(c, i, h.wA), box2d.b2MulXV(e, j, h.wB), box2d.b2SubVV(h.wB, h.wA, h.w), h.a = 0
    }
    if (this.m_count > 1) {
        var k = a.metric,
            l = this.GetMetric();
        (.5 * k > l || l > 2 * k || l < box2d.b2_epsilon) && (this.m_count = 0)
    }
    if (0 === this.m_count) {
        var h = f[0];
        h.indexA = 0, h.indexB = 0;
        var i = b.GetVertex(0),
            j = d.GetVertex(0);
        box2d.b2MulXV(c, i, h.wA), box2d.b2MulXV(e, j, h.wB), box2d.b2SubVV(h.wB, h.wA, h.w), h.a = 1, this.m_count = 1
    }
}, box2d.b2Simplex.prototype.WriteCache = function(a) {
    a.metric = this.GetMetric(), a.count = this.m_count;
    for (var b = this.m_vertices, c = 0; c < this.m_count; ++c) a.indexA[c] = b[c].indexA, a.indexB[c] = b[c].indexB
}, box2d.b2Simplex.prototype.GetSearchDirection = function(a) {
    switch (this.m_count) {
        case 1:
            return box2d.b2NegV(this.m_v1.w, a);
        case 2:
            var b = box2d.b2SubVV(this.m_v2.w, this.m_v1.w, a),
                c = box2d.b2CrossVV(b, box2d.b2NegV(this.m_v1.w, box2d.b2Vec2.s_t0));
            return c > 0 ? box2d.b2CrossOneV(b, a) : box2d.b2CrossVOne(b, a);
        default:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), a.SetZero()
    }
}, box2d.b2Simplex.prototype.GetClosestPoint = function(a) {
    switch (this.m_count) {
        case 0:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), a.SetZero();
        case 1:
            return a.Copy(this.m_v1.w);
        case 2:
            return a.SetXY(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
        case 3:
            return a.SetZero();
        default:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), a.SetZero()
    }
}, box2d.b2Simplex.prototype.GetWitnessPoints = function(a, b) {
    switch (this.m_count) {
        case 0:
            box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
            break;
        case 1:
            a.Copy(this.m_v1.wA), b.Copy(this.m_v1.wB);
            break;
        case 2:
            a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y, b.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, b.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
            break;
        case 3:
            b.x = a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x, b.y = a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
            break;
        default:
            box2d.ENABLE_ASSERTS && box2d.b2Assert(!1)
    }
}, box2d.b2Simplex.prototype.GetMetric = function() {
    switch (this.m_count) {
        case 0:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0;
        case 1:
            return 0;
        case 2:
            return box2d.b2DistanceVV(this.m_v1.w, this.m_v2.w);
        case 3:
            return box2d.b2CrossVV(box2d.b2SubVV(this.m_v2.w, this.m_v1.w, box2d.b2Vec2.s_t0), box2d.b2SubVV(this.m_v3.w, this.m_v1.w, box2d.b2Vec2.s_t1));
        default:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0
    }
}, box2d.b2Simplex.prototype.Solve2 = function() {
    var a = this.m_v1.w,
        b = this.m_v2.w,
        c = box2d.b2SubVV(b, a, box2d.b2Simplex.s_e12),
        d = -box2d.b2DotVV(a, c);
    if (0 >= d) return this.m_v1.a = 1, void(this.m_count = 1);
    var e = box2d.b2DotVV(b, c);
    if (0 >= e) return this.m_v2.a = 1, this.m_count = 1, void this.m_v1.Copy(this.m_v2);
    var f = 1 / (e + d);
    this.m_v1.a = e * f, this.m_v2.a = d * f, this.m_count = 2
}, box2d.b2Simplex.prototype.Solve3 = function() {
    var a = this.m_v1.w,
        b = this.m_v2.w,
        c = this.m_v3.w,
        d = box2d.b2SubVV(b, a, box2d.b2Simplex.s_e12),
        e = box2d.b2DotVV(a, d),
        f = box2d.b2DotVV(b, d),
        g = f,
        h = -e,
        i = box2d.b2SubVV(c, a, box2d.b2Simplex.s_e13),
        j = box2d.b2DotVV(a, i),
        k = box2d.b2DotVV(c, i),
        l = k,
        m = -j,
        n = box2d.b2SubVV(c, b, box2d.b2Simplex.s_e23),
        o = box2d.b2DotVV(b, n),
        p = box2d.b2DotVV(c, n),
        q = p,
        r = -o,
        s = box2d.b2CrossVV(d, i),
        t = s * box2d.b2CrossVV(b, c),
        u = s * box2d.b2CrossVV(c, a),
        v = s * box2d.b2CrossVV(a, b);
    if (0 >= h && 0 >= m) return this.m_v1.a = 1, void(this.m_count = 1);
    if (g > 0 && h > 0 && 0 >= v) {
        var w = 1 / (g + h);
        return this.m_v1.a = g * w, this.m_v2.a = h * w, void(this.m_count = 2)
    }
    if (l > 0 && m > 0 && 0 >= u) {
        var x = 1 / (l + m);
        return this.m_v1.a = l * x, this.m_v3.a = m * x, this.m_count = 2, void this.m_v2.Copy(this.m_v3)
    }
    if (0 >= g && 0 >= r) return this.m_v2.a = 1, this.m_count = 1, void this.m_v1.Copy(this.m_v2);
    if (0 >= l && 0 >= q) return this.m_v3.a = 1, this.m_count = 1, void this.m_v1.Copy(this.m_v3);
    if (q > 0 && r > 0 && 0 >= t) {
        var y = 1 / (q + r);
        return this.m_v2.a = q * y, this.m_v3.a = r * y, this.m_count = 2, void this.m_v1.Copy(this.m_v3)
    }
    var z = 1 / (t + u + v);
    this.m_v1.a = t * z, this.m_v2.a = u * z, this.m_v3.a = v * z, this.m_count = 3
}, box2d.b2Simplex.s_e12 = new box2d.b2Vec2, box2d.b2Simplex.s_e13 = new box2d.b2Vec2, box2d.b2Simplex.s_e23 = new box2d.b2Vec2, box2d.b2Distance = function(a, b, c) {
    ++box2d.b2_gjkCalls;
    var d = c.proxyA,
        e = c.proxyB,
        f = c.transformA,
        g = c.transformB,
        h = box2d.b2Distance.s_simplex;
    h.ReadCache(b, d, f, e, g);
    for (var i = h.m_vertices, j = 20, k = box2d.b2Distance.s_saveA, l = box2d.b2Distance.s_saveB, m = 0, n = box2d.b2_maxFloat, o = n, p = 0; j > p;) {
        m = h.m_count;
        for (var q = 0; m > q; ++q) k[q] = i[q].indexA, l[q] = i[q].indexB;
        switch (h.m_count) {
            case 1:
                break;
            case 2:
                h.Solve2();
                break;
            case 3:
                h.Solve3();
                break;
            default:
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!1)
        }
        if (3 === h.m_count) break;
        var r = h.GetClosestPoint(box2d.b2Distance.s_p);
        o = r.GetLengthSquared(), n = o;
        var s = h.GetSearchDirection(box2d.b2Distance.s_d);
        if (s.GetLengthSquared() < box2d.b2_epsilon_sq) break;
        var t = i[h.m_count];
        t.indexA = d.GetSupport(box2d.b2MulTRV(f.q, box2d.b2NegV(s, box2d.b2Vec2.s_t0), box2d.b2Distance.s_supportA)), box2d.b2MulXV(f, d.GetVertex(t.indexA), t.wA), t.indexB = e.GetSupport(box2d.b2MulTRV(g.q, s, box2d.b2Distance.s_supportB)), box2d.b2MulXV(g, e.GetVertex(t.indexB), t.wB), box2d.b2SubVV(t.wB, t.wA, t.w), ++p, ++box2d.b2_gjkIters;
        for (var u = !1, q = 0; m > q; ++q)
            if (t.indexA === k[q] && t.indexB === l[q]) {
                u = !0;
                break
            }
        if (u) break;
        ++h.m_count
    }
    if (box2d.b2_gjkMaxIters = box2d.b2Max(box2d.b2_gjkMaxIters, p), h.GetWitnessPoints(a.pointA, a.pointB), a.distance = box2d.b2DistanceVV(a.pointA, a.pointB), a.iterations = p, h.WriteCache(b), c.useRadii) {
        var v = d.m_radius,
            w = e.m_radius;
        if (a.distance > v + w && a.distance > box2d.b2_epsilon) {
            a.distance -= v + w;
            var x = box2d.b2SubVV(a.pointB, a.pointA, box2d.b2Distance.s_normal);
            x.Normalize(), a.pointA.SelfMulAdd(v, x), a.pointB.SelfMulSub(w, x)
        } else {
            var r = box2d.b2MidVV(a.pointA, a.pointB, box2d.b2Distance.s_p);
            a.pointA.Copy(r), a.pointB.Copy(r), a.distance = 0
        }
    }
}, box2d.b2Distance.s_simplex = new box2d.b2Simplex, box2d.b2Distance.s_saveA = box2d.b2MakeNumberArray(3), box2d.b2Distance.s_saveB = box2d.b2MakeNumberArray(3), box2d.b2Distance.s_p = new box2d.b2Vec2, box2d.b2Distance.s_d = new box2d.b2Vec2, box2d.b2Distance.s_normal = new box2d.b2Vec2, box2d.b2Distance.s_supportA = new box2d.b2Vec2, box2d.b2Distance.s_supportB = new box2d.b2Vec2, goog.provide("box2d.b2WeldJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2WeldJointDef = function() {
    goog.base(this, box2d.b2JointType.e_weldJoint), this.localAnchorA = new box2d.b2Vec2, this.localAnchorB = new box2d.b2Vec2
}, goog.inherits(box2d.b2WeldJointDef, box2d.b2JointDef), box2d.b2WeldJointDef.prototype.localAnchorA = null, box2d.b2WeldJointDef.prototype.localAnchorB = null, box2d.b2WeldJointDef.prototype.referenceAngle = 0, box2d.b2WeldJointDef.prototype.frequencyHz = 0, box2d.b2WeldJointDef.prototype.dampingRatio = 0, box2d.b2WeldJointDef.prototype.Initialize = function(a, b, c) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(c, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngleRadians() - this.bodyA.GetAngleRadians()
}, box2d.b2WeldJoint = function(a) {
    goog.base(this, a), this.m_frequencyHz = a.frequencyHz, this.m_dampingRatio = a.dampingRatio, this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_referenceAngle = a.referenceAngle, this.m_impulse = new box2d.b2Vec3(0, 0, 0), this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_mass = new box2d.b2Mat33, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_K = new box2d.b2Mat33
}, goog.inherits(box2d.b2WeldJoint, box2d.b2Joint), box2d.b2WeldJoint.prototype.m_frequencyHz = 0, box2d.b2WeldJoint.prototype.m_dampingRatio = 0, box2d.b2WeldJoint.prototype.m_bias = 0, box2d.b2WeldJoint.prototype.m_localAnchorA = null, box2d.b2WeldJoint.prototype.m_localAnchorB = null, box2d.b2WeldJoint.prototype.m_referenceAngle = 0, box2d.b2WeldJoint.prototype.m_gamma = 0, box2d.b2WeldJoint.prototype.m_impulse = null, box2d.b2WeldJoint.prototype.m_indexA = 0, box2d.b2WeldJoint.prototype.m_indexB = 0, box2d.b2WeldJoint.prototype.m_rA = null, box2d.b2WeldJoint.prototype.m_rB = null, box2d.b2WeldJoint.prototype.m_localCenterA = null, box2d.b2WeldJoint.prototype.m_localCenterB = null, box2d.b2WeldJoint.prototype.m_invMassA = 0, box2d.b2WeldJoint.prototype.m_invMassB = 0, box2d.b2WeldJoint.prototype.m_invIA = 0, box2d.b2WeldJoint.prototype.m_invIB = 0, box2d.b2WeldJoint.prototype.m_mass = null, box2d.b2WeldJoint.prototype.m_qA = null, box2d.b2WeldJoint.prototype.m_qB = null, box2d.b2WeldJoint.prototype.m_lalcA = null, box2d.b2WeldJoint.prototype.m_lalcB = null, box2d.b2WeldJoint.prototype.m_K = null, box2d.b2WeldJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].a,
        c = a.velocities[this.m_indexA].v,
        d = a.velocities[this.m_indexA].w,
        e = a.positions[this.m_indexB].a,
        f = a.velocities[this.m_indexB].v,
        g = a.velocities[this.m_indexB].w,
        h = this.m_qA.SetAngleRadians(b),
        i = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2MulRV(h, this.m_lalcA, this.m_rA), box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(i, this.m_lalcB, this.m_rB);
    var j = this.m_invMassA,
        k = this.m_invMassB,
        l = this.m_invIA,
        m = this.m_invIB,
        n = this.m_K;
    if (n.ex.x = j + k + this.m_rA.y * this.m_rA.y * l + this.m_rB.y * this.m_rB.y * m, n.ey.x = -this.m_rA.y * this.m_rA.x * l - this.m_rB.y * this.m_rB.x * m, n.ez.x = -this.m_rA.y * l - this.m_rB.y * m, n.ex.y = n.ey.x, n.ey.y = j + k + this.m_rA.x * this.m_rA.x * l + this.m_rB.x * this.m_rB.x * m, n.ez.y = this.m_rA.x * l + this.m_rB.x * m, n.ex.z = n.ez.x, n.ey.z = n.ez.y, n.ez.z = l + m, this.m_frequencyHz > 0) {
        n.GetInverse22(this.m_mass);
        var o = l + m,
            p = o > 0 ? 1 / o : 0,
            q = e - b - this.m_referenceAngle,
            r = 2 * box2d.b2_pi * this.m_frequencyHz,
            s = 2 * p * this.m_dampingRatio * r,
            t = p * r * r,
            u = a.step.dt;
        this.m_gamma = u * (s + u * t), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0, this.m_bias = q * u * t * this.m_gamma, o += this.m_gamma, this.m_mass.ez.z = 0 !== o ? 1 / o : 0
    } else n.GetSymInverse33(this.m_mass), this.m_gamma = 0, this.m_bias = 0;
    if (a.step.warmStarting) {
        this.m_impulse.SelfMul(a.step.dtRatio);
        var v = box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P.SetXY(this.m_impulse.x, this.m_impulse.y);
        c.SelfMulSub(j, v), d -= l * (box2d.b2CrossVV(this.m_rA, v) + this.m_impulse.z), f.SelfMulAdd(k, v), g += m * (box2d.b2CrossVV(this.m_rB, v) + this.m_impulse.z)
    } else this.m_impulse.SetZero();
    a.velocities[this.m_indexA].w = d, a.velocities[this.m_indexB].w = g
}, box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_invMassA,
        g = this.m_invMassB,
        h = this.m_invIA,
        i = this.m_invIB;
    if (this.m_frequencyHz > 0) {
        var j = e - c,
            k = -this.m_mass.ez.z * (j + this.m_bias + this.m_gamma * this.m_impulse.z);
        this.m_impulse.z += k, c -= h * k, e += i * k;
        var l = box2d.b2SubVV(box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1),
            m = box2d.b2MulM33XY(this.m_mass, l.x, l.y, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1).SelfNeg();
        this.m_impulse.x += m.x, this.m_impulse.y += m.y;
        var n = m;
        b.SelfMulSub(f, n), c -= h * box2d.b2CrossVV(this.m_rA, n), d.SelfMulAdd(g, n), e += i * box2d.b2CrossVV(this.m_rB, n)
    } else {
        var l = box2d.b2SubVV(box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1),
            j = e - c,
            o = box2d.b2MulM33XYZ(this.m_mass, l.x, l.y, j, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg();
        this.m_impulse.SelfAdd(o);
        var n = box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P.SetXY(o.x, o.y);
        b.SelfMulSub(f, n), c -= h * (box2d.b2CrossVV(this.m_rA, n) + o.z), d.SelfMulAdd(g, n), e += i * (box2d.b2CrossVV(this.m_rB, n) + o.z)
    }
    a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1 = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec3, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e),
        h = this.m_invMassA,
        i = this.m_invMassB,
        j = this.m_invIA,
        k = this.m_invIB;
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var l = box2d.b2MulRV(f, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var m, n, o = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        p = this.m_K;
    if (p.ex.x = h + i + l.y * l.y * j + o.y * o.y * k, p.ey.x = -l.y * l.x * j - o.y * o.x * k, p.ez.x = -l.y * j - o.y * k, p.ex.y = p.ey.x, p.ey.y = h + i + l.x * l.x * j + o.x * o.x * k, p.ez.y = l.x * j + o.x * k, p.ex.z = p.ez.x, p.ey.z = p.ez.y, p.ez.z = j + k, this.m_frequencyHz > 0) {
        var q = box2d.b2SubVV(box2d.b2AddVV(d, o, box2d.b2Vec2.s_t0), box2d.b2AddVV(b, l, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1);
        m = q.GetLength(), n = 0;
        var r = p.Solve22(q.x, q.y, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P).SelfNeg();
        b.SelfMulSub(h, r), c -= j * box2d.b2CrossVV(l, r), d.SelfMulAdd(i, r), e += k * box2d.b2CrossVV(o, r)
    } else {
        var q = box2d.b2SubVV(box2d.b2AddVV(d, o, box2d.b2Vec2.s_t0), box2d.b2AddVV(b, l, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1),
            s = e - c - this.m_referenceAngle;
        m = q.GetLength(), n = box2d.b2Abs(s);
        var t = p.Solve33(q.x, q.y, s, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse).SelfNeg(),
            r = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P.SetXY(t.x, t.y);
        b.SelfMulSub(h, r), c -= j * (box2d.b2CrossVV(this.m_rA, r) + t.z), d.SelfMulAdd(i, r), e += k * (box2d.b2CrossVV(this.m_rB, r) + t.z)
    }
    return a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, m <= box2d.b2_linearSlop && n <= box2d.b2_angularSlop
}, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1 = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3, box2d.b2WeldJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2WeldJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2WeldJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * this.m_impulse.x, a * this.m_impulse.y)
}, box2d.b2WeldJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_impulse.z
}, box2d.b2WeldJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2WeldJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2WeldJoint.prototype.GetReferenceAngle = function() {
    return this.m_referenceAngle
}, box2d.b2WeldJoint.prototype.SetFrequency = function(a) {
    this.m_frequencyHz = a
}, box2d.b2WeldJoint.prototype.GetFrequency = function() {
    return this.m_frequencyHz
}, box2d.b2WeldJoint.prototype.SetDampingRatio = function(a) {
    this.m_dampingRatio = a
}, box2d.b2WeldJoint.prototype.GetDampingRatio = function() {
    return this.m_dampingRatio
}, box2d.b2WeldJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2WeldJointDef*/ var jd = new box2d.b2WeldJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2RopeJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2RopeJointDef = function() {
    goog.base(this, box2d.b2JointType.e_ropeJoint), this.localAnchorA = new box2d.b2Vec2(-1, 0), this.localAnchorB = new box2d.b2Vec2(1, 0)
}, goog.inherits(box2d.b2RopeJointDef, box2d.b2JointDef), box2d.b2RopeJointDef.prototype.localAnchorA = null, box2d.b2RopeJointDef.prototype.localAnchorB = null, box2d.b2RopeJointDef.prototype.maxLength = 0, box2d.b2RopeJoint = function(a) {
    goog.base(this, a), this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_maxLength = a.maxLength, this.m_u = new box2d.b2Vec2, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2
}, goog.inherits(box2d.b2RopeJoint, box2d.b2Joint), box2d.b2RopeJoint.prototype.m_localAnchorA = null, box2d.b2RopeJoint.prototype.m_localAnchorB = null, box2d.b2RopeJoint.prototype.m_maxLength = 0, box2d.b2RopeJoint.prototype.m_length = 0, box2d.b2RopeJoint.prototype.m_impulse = 0, box2d.b2RopeJoint.prototype.m_indexA = 0, box2d.b2RopeJoint.prototype.m_indexB = 0, box2d.b2RopeJoint.prototype.m_u = null, box2d.b2RopeJoint.prototype.m_rA = null, box2d.b2RopeJoint.prototype.m_rB = null, box2d.b2RopeJoint.prototype.m_localCenterA = null, box2d.b2RopeJoint.prototype.m_localCenterB = null, box2d.b2RopeJoint.prototype.m_invMassA = 0, box2d.b2RopeJoint.prototype.m_invMassB = 0, box2d.b2RopeJoint.prototype.m_invIA = 0, box2d.b2RopeJoint.prototype.m_invIB = 0, box2d.b2RopeJoint.prototype.m_mass = 0, box2d.b2RopeJoint.prototype.m_state = box2d.b2LimitState.e_inactiveLimit, box2d.b2RopeJoint.prototype.m_qA = null, box2d.b2RopeJoint.prototype.m_qB = null, box2d.b2RopeJoint.prototype.m_lalcA = null, box2d.b2RopeJoint.prototype.m_lalcB = null, box2d.b2RopeJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.velocities[this.m_indexA].v,
        e = a.velocities[this.m_indexA].w,
        f = a.positions[this.m_indexB].c,
        g = a.positions[this.m_indexB].a,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = this.m_qA.SetAngleRadians(c),
        k = this.m_qB.SetAngleRadians(g);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2MulRV(j, this.m_lalcA, this.m_rA), box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(k, this.m_lalcB, this.m_rB), this.m_u.Copy(f).SelfAdd(this.m_rB).SelfSub(b).SelfSub(this.m_rA), this.m_length = this.m_u.GetLength();
    var l = this.m_length - this.m_maxLength;
    if (this.m_state = l > 0 ? box2d.b2LimitState.e_atUpperLimit : box2d.b2LimitState.e_inactiveLimit, !(this.m_length > box2d.b2_linearSlop)) return this.m_u.SetZero(), this.m_mass = 0, void(this.m_impulse = 0);
    this.m_u.SelfMul(1 / this.m_length);
    var m = box2d.b2CrossVV(this.m_rA, this.m_u),
        n = box2d.b2CrossVV(this.m_rB, this.m_u),
        o = this.m_invMassA + this.m_invIA * m * m + this.m_invMassB + this.m_invIB * n * n;
    if (this.m_mass = 0 !== o ? 1 / o : 0, a.step.warmStarting) {
        this.m_impulse *= a.step.dtRatio;
        var p = box2d.b2MulSV(this.m_impulse, this.m_u, box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P);
        d.SelfMulSub(this.m_invMassA, p), e -= this.m_invIA * box2d.b2CrossVV(this.m_rA, p), h.SelfMulAdd(this.m_invMassB, p), i += this.m_invIB * box2d.b2CrossVV(this.m_rB, p)
    } else this.m_impulse = 0;
    a.velocities[this.m_indexA].w = e, a.velocities[this.m_indexB].w = i
}, box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2RopeJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA),
        g = box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB),
        h = this.m_length - this.m_maxLength,
        i = box2d.b2DotVV(this.m_u, box2d.b2SubVV(g, f, box2d.b2Vec2.s_t0));
    0 > h && (i += a.step.inv_dt * h);
    var j = -this.m_mass * i,
        k = this.m_impulse;
    this.m_impulse = box2d.b2Min(0, this.m_impulse + j), j = this.m_impulse - k;
    var l = box2d.b2MulSV(j, this.m_u, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P);
    b.SelfMulSub(this.m_invMassA, l), c -= this.m_invIA * box2d.b2CrossVV(this.m_rA, l), d.SelfMulAdd(this.m_invMassB, l), e += this.m_invIB * box2d.b2CrossVV(this.m_rB, l), a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2RopeJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var h = box2d.b2MulRV(f, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var i = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        j = this.m_u.Copy(d).SelfAdd(i).SelfSub(b).SelfSub(h),
        k = j.Normalize(),
        l = k - this.m_maxLength;
    l = box2d.b2Clamp(l, 0, box2d.b2_maxLinearCorrection);
    var m = -this.m_mass * l,
        n = box2d.b2MulSV(m, j, box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P);
    return b.SelfMulSub(this.m_invMassA, n), c -= this.m_invIA * box2d.b2CrossVV(h, n), d.SelfMulAdd(this.m_invMassB, n), e += this.m_invIB * box2d.b2CrossVV(i, n), a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, k - this.m_maxLength < box2d.b2_linearSlop
}, box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, box2d.b2RopeJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2RopeJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2RopeJoint.prototype.GetReactionForce = function(a, b) {
    var c = box2d.b2MulSV(a * this.m_impulse, this.m_u, b);
    return c
}, box2d.b2RopeJoint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2RopeJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2RopeJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2RopeJoint.prototype.SetMaxLength = function(a) {
    this.m_maxLength = a
}, box2d.b2RopeJoint.prototype.GetMaxLength = function() {
    return this.m_maxLength
}, box2d.b2RopeJoint.prototype.GetLimitState = function() {
    return this.m_state
}, box2d.b2RopeJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2RopeJointDef*/ var jd = new box2d.b2RopeJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.maxLength = %.15f;\n", this.m_maxLength), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2GravityController"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Controller"), goog.require("box2d.b2Math"), box2d.b2GravityController = function() {
    goog.base(this)
}, goog.inherits(box2d.b2GravityController, box2d.b2Controller), box2d.b2GravityController.prototype.G = 1, box2d.b2GravityController.prototype.invSqr = !0, box2d.b2GravityController.prototype.Step = function() {
    if (this.invSqr)
        for (var a = this.m_bodyList; a; a = a.nextBody)
            for (var b = a.body, c = b.GetWorldCenter(), d = b.GetMass(), e = this.m_bodyList; e !== a; e = e.nextBody) {
                var f = e.body,
                    g = f.GetWorldCenter(),
                    h = f.GetMass(),
                    i = g.x - c.x,
                    j = g.y - c.y,
                    k = i * i + j * j;
                if (!(k < box2d.b2_epsilon)) {
                    var l = box2d.b2GravityController.prototype.Step.s_f.SetXY(i, j);
                    l.SelfMul(this.G / k / box2d.b2Sqrt(k) * d * h), b.IsAwake() && b.ApplyForce(l, c), f.IsAwake() && f.ApplyForce(l.SelfMul(-1), g)
                }
            } else
                for (var a = this.m_bodyList; a; a = a.nextBody)
                    for (var b = a.body, c = b.GetWorldCenter(), d = b.GetMass(), e = this.m_bodyList; e !== a; e = e.nextBody) {
                        var f = e.body,
                            g = f.GetWorldCenter(),
                            h = f.GetMass(),
                            i = g.x - c.x,
                            j = g.y - c.y,
                            k = i * i + j * j;
                        if (!(k < box2d.b2_epsilon)) {
                            var l = box2d.b2GravityController.prototype.Step.s_f.SetXY(i, j);
                            l.SelfMul(this.G / k * d * h), b.IsAwake() && b.ApplyForce(l, c), f.IsAwake() && f.ApplyForce(l.SelfMul(-1), g)
                        }
                    }
}, box2d.b2GravityController.prototype.Step.s_f = new box2d.b2Vec2, goog.provide("box2d.b2TimeStep"), goog.require("box2d.b2Settings"), box2d.b2Profile = function() {}, box2d.b2Profile.prototype.step = 0, box2d.b2Profile.prototype.collide = 0, box2d.b2Profile.prototype.solve = 0, box2d.b2Profile.prototype.solveInit = 0, box2d.b2Profile.prototype.solveVelocity = 0, box2d.b2Profile.prototype.solvePosition = 0, box2d.b2Profile.prototype.broadphase = 0, box2d.b2Profile.prototype.solveTOI = 0, box2d.b2Profile.prototype.Reset = function() {
    return this.step = 0, this.collide = 0, this.solve = 0, this.solveInit = 0, this.solveVelocity = 0, this.solvePosition = 0, this.broadphase = 0, this.solveTOI = 0, this
}, box2d.b2TimeStep = function() {}, box2d.b2TimeStep.prototype.dt = 0, box2d.b2TimeStep.prototype.inv_dt = 0, box2d.b2TimeStep.prototype.dtRatio = 0, box2d.b2TimeStep.prototype.velocityIterations = 0, box2d.b2TimeStep.prototype.positionIterations = 0, box2d.b2TimeStep.prototype.warmStarting = !1, box2d.b2TimeStep.prototype.Copy = function(a) {
    return this.dt = a.dt, this.inv_dt = a.inv_dt, this.dtRatio = a.dtRatio, this.positionIterations = a.positionIterations, this.velocityIterations = a.velocityIterations, this.warmStarting = a.warmStarting, this
}, box2d.b2Position = function() {
    this.c = new box2d.b2Vec2
}, box2d.b2Position.prototype.c = null, box2d.b2Position.prototype.a = 0, box2d.b2Position.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2Position
    })
}, box2d.b2Velocity = function() {
    this.v = new box2d.b2Vec2
}, box2d.b2Velocity.prototype.v = null, box2d.b2Velocity.prototype.w = 0, box2d.b2Velocity.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2Velocity
    })
}, box2d.b2SolverData = function() {
    this.step = new box2d.b2TimeStep
}, box2d.b2SolverData.prototype.step = null, box2d.b2SolverData.prototype.positions = null, box2d.b2SolverData.prototype.velocities = null, goog.provide("box2d.b2Collision"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Distance"), box2d.b2ContactFeatureType = {
    e_vertex: 0,
    e_face: 1
}, goog.exportProperty(box2d.b2ContactFeatureType, "e_vertex", box2d.b2ContactFeatureType.e_vertex), goog.exportProperty(box2d.b2ContactFeatureType, "e_face", box2d.b2ContactFeatureType.e_face), box2d.b2ContactFeature = function(a) {
    this._id = a
}, box2d.b2ContactFeature.prototype._id = null, box2d.b2ContactFeature.prototype._indexA = 0, box2d.b2ContactFeature.prototype._indexB = 0, box2d.b2ContactFeature.prototype._typeA = 0, box2d.b2ContactFeature.prototype._typeB = 0, Object.defineProperty(box2d.b2ContactFeature.prototype, "indexA", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this._indexA
    },
    set: function(a) {
        this._indexA = a, this._id._key = 4294967040 & this._id._key | 255 & this._indexA
    }
}), Object.defineProperty(box2d.b2ContactFeature.prototype, "indexB", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this._indexB
    },
    set: function(a) {
        this._indexB = a, this._id._key = 4294902015 & this._id._key | this._indexB << 8 & 65280
    }
}), Object.defineProperty(box2d.b2ContactFeature.prototype, "typeA", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this._typeA
    },
    set: function(a) {
        this._typeA = a, this._id._key = 4278255615 & this._id._key | this._typeA << 16 & 16711680
    }
}), Object.defineProperty(box2d.b2ContactFeature.prototype, "typeB", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this._typeB
    },
    set: function(a) {
        this._typeB = a, this._id._key = 16777215 & this._id._key | this._typeB << 24 & 4278190080
    }
}), box2d.b2ContactID = function() {
    this.cf = new box2d.b2ContactFeature(this)
}, box2d.b2ContactID.prototype.cf = null, box2d.b2ContactID.prototype.key = 0, box2d.b2ContactID.prototype.Copy = function(a) {
    return this.key = a.key, this
}, box2d.b2ContactID.prototype.Clone = function() {
    return (new box2d.b2ContactID).Copy(this)
}, Object.defineProperty(box2d.b2ContactID.prototype, "key", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this._key
    },
    set: function(a) {
        this._key = a, this.cf._indexA = 255 & this._key, this.cf._indexB = this._key >> 8 & 255, this.cf._typeA = this._key >> 16 & 255, this.cf._typeB = this._key >> 24 & 255
    }
}), box2d.b2ManifoldPoint = function() {
    this.localPoint = new box2d.b2Vec2, this.id = new box2d.b2ContactID
}, box2d.b2ManifoldPoint.prototype.localPoint = null, box2d.b2ManifoldPoint.prototype.normalImpulse = 0, box2d.b2ManifoldPoint.prototype.tangentImpulse = 0, box2d.b2ManifoldPoint.prototype.id = null, box2d.b2ManifoldPoint.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2ManifoldPoint
    })
}, box2d.b2ManifoldPoint.prototype.Reset = function() {
    this.localPoint.SetZero(), this.normalImpulse = 0, this.tangentImpulse = 0, this.id.key = 0
}, box2d.b2ManifoldPoint.prototype.Copy = function(a) {
    return this.localPoint.Copy(a.localPoint), this.normalImpulse = a.normalImpulse, this.tangentImpulse = a.tangentImpulse, this.id.Copy(a.id), this
}, box2d.b2ManifoldType = {
    e_unknown: -1,
    e_circles: 0,
    e_faceA: 1,
    e_faceB: 2
}, goog.exportProperty(box2d.b2ManifoldType, "e_unknown", box2d.b2ManifoldType.e_unknown), goog.exportProperty(box2d.b2ManifoldType, "e_circles", box2d.b2ManifoldType.e_circles), goog.exportProperty(box2d.b2ManifoldType, "e_faceA", box2d.b2ManifoldType.e_faceA), goog.exportProperty(box2d.b2ManifoldType, "e_faceB", box2d.b2ManifoldType.e_faceB), box2d.b2Manifold = function() {
    this.points = box2d.b2ManifoldPoint.MakeArray(box2d.b2_maxManifoldPoints), this.localNormal = new box2d.b2Vec2, this.localPoint = new box2d.b2Vec2, this.type = box2d.b2ManifoldType.e_unknown, this.pointCount = 0
}, box2d.b2Manifold.prototype.points = null, box2d.b2Manifold.prototype.localNormal = null, box2d.b2Manifold.prototype.localPoint = null, box2d.b2Manifold.prototype.type = box2d.b2ManifoldType.e_unknown, box2d.b2Manifold.prototype.pointCount = 0, box2d.b2Manifold.prototype.Reset = function() {
    for (var a = 0, b = box2d.b2_maxManifoldPoints; b > a; ++a) this.points[a].Reset();
    this.localNormal.SetZero(), this.localPoint.SetZero(), this.type = box2d.b2ManifoldType.e_unknown, this.pointCount = 0
}, box2d.b2Manifold.prototype.Copy = function(a) {
    this.pointCount = a.pointCount;
    for (var b = 0, c = box2d.b2_maxManifoldPoints; c > b; ++b) this.points[b].Copy(a.points[b]);
    return this.localNormal.Copy(a.localNormal), this.localPoint.Copy(a.localPoint), this.type = a.type, this
}, box2d.b2Manifold.prototype.Clone = function() {
    return (new box2d.b2Manifold).Copy(this)
}, box2d.b2WorldManifold = function() {
    this.normal = new box2d.b2Vec2, this.points = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints), this.separations = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints)
}, box2d.b2WorldManifold.prototype.normal = null, box2d.b2WorldManifold.prototype.points = null, box2d.b2WorldManifold.prototype.separations = null, box2d.b2WorldManifold.prototype.Initialize = function(a, b, c, d, e) {
    if (0 !== a.pointCount) switch (a.type) {
        case box2d.b2ManifoldType.e_circles:
            this.normal.SetXY(1, 0);
            var f = box2d.b2MulXV(b, a.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointA),
                g = box2d.b2MulXV(d, a.points[0].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointB);
            box2d.b2DistanceSquaredVV(f, g) > box2d.b2_epsilon_sq && box2d.b2SubVV(g, f, this.normal).SelfNormalize();
            var h = box2d.b2AddVMulSV(f, c, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA),
                i = box2d.b2SubVMulSV(g, e, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
            box2d.b2MidVV(h, i, this.points[0]), this.separations[0] = box2d.b2DotVV(box2d.b2SubVV(i, h, box2d.b2Vec2.s_t0), this.normal);
            break;
        case box2d.b2ManifoldType.e_faceA:
            box2d.b2MulRV(b.q, a.localNormal, this.normal);
            for (var j = box2d.b2MulXV(b, a.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint), k = 0, l = a.pointCount; l > k; ++k) {
                var m = box2d.b2MulXV(d, a.points[k].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint),
                    n = c - box2d.b2DotVV(box2d.b2SubVV(m, j, box2d.b2Vec2.s_t0), this.normal),
                    h = box2d.b2AddVMulSV(m, n, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA),
                    i = box2d.b2SubVMulSV(m, e, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
                box2d.b2MidVV(h, i, this.points[k]), this.separations[k] = box2d.b2DotVV(box2d.b2SubVV(i, h, box2d.b2Vec2.s_t0), this.normal)
            }
            break;
        case box2d.b2ManifoldType.e_faceB:
            box2d.b2MulRV(d.q, a.localNormal, this.normal);
            for (var j = box2d.b2MulXV(d, a.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint), k = 0, l = a.pointCount; l > k; ++k) {
                var m = box2d.b2MulXV(b, a.points[k].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint),
                    n = e - box2d.b2DotVV(box2d.b2SubVV(m, j, box2d.b2Vec2.s_t0), this.normal),
                    i = box2d.b2AddVMulSV(m, n, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB),
                    h = box2d.b2SubVMulSV(m, c, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA);
                box2d.b2MidVV(h, i, this.points[k]), this.separations[k] = box2d.b2DotVV(box2d.b2SubVV(h, i, box2d.b2Vec2.s_t0), this.normal)
            }
            this.normal.SelfNeg()
    }
}, box2d.b2WorldManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2, box2d.b2WorldManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2, box2d.b2WorldManifold.prototype.Initialize.s_cA = new box2d.b2Vec2, box2d.b2WorldManifold.prototype.Initialize.s_cB = new box2d.b2Vec2, box2d.b2WorldManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2, box2d.b2PointState = {
    b2_nullState: 0,
    b2_addState: 1,
    b2_persistState: 2,
    b2_removeState: 3
}, goog.exportProperty(box2d.b2PointState, "b2_nullState   ", box2d.b2PointState.b2_nullState), goog.exportProperty(box2d.b2PointState, "b2_addState    ", box2d.b2PointState.b2_addState), goog.exportProperty(box2d.b2PointState, "b2_persistState", box2d.b2PointState.b2_persistState), goog.exportProperty(box2d.b2PointState, "b2_removeState ", box2d.b2PointState.b2_removeState), box2d.b2GetPointStates = function(a, b, c, d) {
    for (var e = 0, f = c.pointCount; f > e; ++e) {
        var g = c.points[e].id,
            h = g.key;
        a[e] = box2d.b2PointState.b2_removeState;
        for (var i = 0, j = d.pointCount; j > i; ++i)
            if (d.points[i].id.key === h) {
                a[e] = box2d.b2PointState.b2_persistState;
                break
            }
    }
    for (var f = box2d.b2_maxManifoldPoints; f > e; ++e) a[e] = box2d.b2PointState.b2_nullState;
    for (var e = 0, f = d.pointCount; f > e; ++e) {
        var g = d.points[e].id,
            h = g.key;
        b[e] = box2d.b2PointState.b2_addState;
        for (var i = 0, j = c.pointCount; j > i; ++i)
            if (c.points[i].id.key === h) {
                b[e] = box2d.b2PointState.b2_persistState;
                break
            }
    }
    for (var f = box2d.b2_maxManifoldPoints; f > e; ++e) b[e] = box2d.b2PointState.b2_nullState
}, box2d.b2ClipVertex = function() {
    this.v = new box2d.b2Vec2, this.id = new box2d.b2ContactID
}, box2d.b2ClipVertex.prototype.v = null, box2d.b2ClipVertex.prototype.id = null, box2d.b2ClipVertex.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2ClipVertex
    })
}, box2d.b2ClipVertex.prototype.Copy = function(a) {
    return this.v.Copy(a.v), this.id.Copy(a.id), this
}, box2d.b2RayCastInput = function() {
    this.p1 = new box2d.b2Vec2, this.p2 = new box2d.b2Vec2, this.maxFraction = 1
}, box2d.b2RayCastInput.prototype.p1 = null, box2d.b2RayCastInput.prototype.p2 = null, box2d.b2RayCastInput.prototype.maxFraction = 1, box2d.b2RayCastInput.prototype.Copy = function(a) {
    return this.p1.Copy(a.p1), this.p2.Copy(a.p2), this.maxFraction = a.maxFraction, this
}, box2d.b2RayCastOutput = function() {
    this.normal = new box2d.b2Vec2, this.fraction = 0
}, box2d.b2RayCastOutput.prototype.normal = null, box2d.b2RayCastOutput.prototype.fraction = 0, box2d.b2RayCastOutput.prototype.Copy = function(a) {
    return this.normal.Copy(a.normal), this.fraction = a.fraction, this
}, box2d.b2AABB = function() {
    this.lowerBound = new box2d.b2Vec2, this.upperBound = new box2d.b2Vec2, this.m_out_center = new box2d.b2Vec2, this.m_out_extent = new box2d.b2Vec2
}, box2d.b2AABB.prototype.lowerBound = null, box2d.b2AABB.prototype.upperBound = null, box2d.b2AABB.prototype.m_out_center = null, box2d.b2AABB.prototype.m_out_extent = null, box2d.b2AABB.prototype.Copy = function(a) {
    return this.lowerBound.Copy(a.lowerBound), this.upperBound.Copy(a.upperBound), this
}, box2d.b2AABB.prototype.IsValid = function() {
    var a = this.upperBound.x - this.lowerBound.x,
        b = this.upperBound.y - this.lowerBound.y,
        c = a >= 0 && b >= 0;
    return c = c && this.lowerBound.IsValid() && this.upperBound.IsValid()
}, box2d.b2AABB.prototype.GetCenter = function() {
    return box2d.b2MidVV(this.lowerBound, this.upperBound, this.m_out_center)
}, box2d.b2AABB.prototype.GetExtents = function() {
    return box2d.b2ExtVV(this.lowerBound, this.upperBound, this.m_out_extent)
}, box2d.b2AABB.prototype.GetPerimeter = function() {
    var a = this.upperBound.x - this.lowerBound.x,
        b = this.upperBound.y - this.lowerBound.y;
    return 2 * (a + b)
}, box2d.b2AABB.prototype.Combine1 = function(a) {
    return this.lowerBound.x = box2d.b2Min(this.lowerBound.x, a.lowerBound.x), this.lowerBound.y = box2d.b2Min(this.lowerBound.y, a.lowerBound.y), this.upperBound.x = box2d.b2Max(this.upperBound.x, a.upperBound.x), this.upperBound.y = box2d.b2Max(this.upperBound.y, a.upperBound.y), this
}, box2d.b2AABB.prototype.Combine2 = function(a, b) {
    return this.lowerBound.x = box2d.b2Min(a.lowerBound.x, b.lowerBound.x), this.lowerBound.y = box2d.b2Min(a.lowerBound.y, b.lowerBound.y), this.upperBound.x = box2d.b2Max(a.upperBound.x, b.upperBound.x), this.upperBound.y = box2d.b2Max(a.upperBound.y, b.upperBound.y), this
}, box2d.b2AABB.Combine = function(a, b, c) {
    return c.Combine2(a, b), c
}, box2d.b2AABB.prototype.Contains = function(a) {
    var b = !0;
    return b = b && this.lowerBound.x <= a.lowerBound.x, b = b && this.lowerBound.y <= a.lowerBound.y, b = b && a.upperBound.x <= this.upperBound.x, b = b && a.upperBound.y <= this.upperBound.y
}, box2d.b2AABB.prototype.RayCast = function(a, b) {
    var c = -box2d.b2_maxFloat,
        d = box2d.b2_maxFloat,
        e = b.p1.x,
        f = b.p1.y,
        g = b.p2.x - b.p1.x,
        h = b.p2.y - b.p1.y,
        i = box2d.b2Abs(g),
        j = box2d.b2Abs(h),
        k = a.normal;
    if (i < box2d.b2_epsilon) {
        if (e < this.lowerBound.x || this.upperBound.x < e) return !1
    } else {
        var l = 1 / g,
            m = (this.lowerBound.x - e) * l,
            n = (this.upperBound.x - e) * l,
            o = -1;
        if (m > n) {
            var p = m;
            m = n, n = p, o = 1
        }
        if (m > c && (k.x = o, k.y = 0, c = m), d = box2d.b2Min(d, n), c > d) return !1
    }
    if (j < box2d.b2_epsilon) {
        if (f < this.lowerBound.y || this.upperBound.y < f) return !1
    } else {
        var l = 1 / h,
            m = (this.lowerBound.y - f) * l,
            n = (this.upperBound.y - f) * l,
            o = -1;
        if (m > n) {
            var p = m;
            m = n, n = p, o = 1
        }
        if (m > c && (k.x = 0, k.y = o, c = m), d = box2d.b2Min(d, n), c > d) return !1
    }
    return 0 > c || b.maxFraction < c ? !1 : (a.fraction = c, !0)
}, box2d.b2AABB.prototype.TestOverlap = function(a) {
    var b = a.lowerBound.x - this.upperBound.x,
        c = a.lowerBound.y - this.upperBound.y,
        d = this.lowerBound.x - a.upperBound.x,
        e = this.lowerBound.y - a.upperBound.y;
    return b > 0 || c > 0 ? !1 : d > 0 || e > 0 ? !1 : !0
}, box2d.b2TestOverlapAABB = function(a, b) {
    var c = b.lowerBound.x - a.upperBound.x,
        d = b.lowerBound.y - a.upperBound.y,
        e = a.lowerBound.x - b.upperBound.x,
        f = a.lowerBound.y - b.upperBound.y;
    return c > 0 || d > 0 ? !1 : e > 0 || f > 0 ? !1 : !0
}, box2d.b2ClipSegmentToLine = function(a, b, c, d, e) {
    var f = 0,
        g = b[0],
        h = b[1],
        i = box2d.b2DotVV(c, g.v) - d,
        j = box2d.b2DotVV(c, h.v) - d;
    if (0 >= i && a[f++].Copy(g), 0 >= j && a[f++].Copy(h), 0 > i * j) {
        var k = i / (i - j),
            l = a[f].v;
        l.x = g.v.x + k * (h.v.x - g.v.x), l.y = g.v.y + k * (h.v.y - g.v.y);
        var m = a[f].id;
        m.cf.indexA = e, m.cf.indexB = g.id.cf.indexB, m.cf.typeA = box2d.b2ContactFeatureType.e_vertex, m.cf.typeB = box2d.b2ContactFeatureType.e_face, ++f
    }
    return f
}, box2d.b2TestOverlapShape = function(a, b, c, d, e, f) {
    var g = box2d.b2TestOverlapShape.s_input.Reset();
    g.proxyA.SetShape(a, b), g.proxyB.SetShape(c, d), g.transformA.Copy(e), g.transformB.Copy(f), g.useRadii = !0;
    var h = box2d.b2TestOverlapShape.s_simplexCache.Reset();
    h.count = 0;
    var i = box2d.b2TestOverlapShape.s_output.Reset();
    return box2d.b2Distance(i, h, g), i.distance < 10 * box2d.b2_epsilon
}, box2d.b2TestOverlapShape.s_input = new box2d.b2DistanceInput, box2d.b2TestOverlapShape.s_simplexCache = new box2d.b2SimplexCache, box2d.b2TestOverlapShape.s_output = new box2d.b2DistanceOutput, goog.provide("box2d.b2Timer"), goog.require("box2d.b2Settings"), box2d.b2Timer = function() {
    this.m_start = (new Date).getTime()
}, box2d.b2Timer.prototype.m_start = 0, box2d.b2Timer.prototype.Reset = function() {
    return this.m_start = (new Date).getTime(), this
}, box2d.b2Timer.prototype.GetMilliseconds = function() {
    return (new Date).getTime() - this.m_start
}, box2d.b2Counter = function() {}, box2d.b2Counter.prototype.m_count = 0, box2d.b2Counter.prototype.m_min_count = 0, box2d.b2Counter.prototype.m_max_count = 0, box2d.b2Counter.prototype.GetCount = function() {
    return this.m_count
}, box2d.b2Counter.prototype.GetMinCount = function() {
    return this.m_min_count
}, box2d.b2Counter.prototype.GetMaxCount = function() {
    return this.m_max_count
}, box2d.b2Counter.prototype.ResetCount = function() {
    var a = this.m_count;
    return this.m_count = 0, a
}, box2d.b2Counter.prototype.ResetMinCount = function() {
    this.m_min_count = 0
}, box2d.b2Counter.prototype.ResetMaxCount = function() {
    this.m_max_count = 0
}, box2d.b2Counter.prototype.Increment = function() {
    this.m_count++, this.m_max_count < this.m_count && (this.m_max_count = this.m_count)
}, box2d.b2Counter.prototype.Decrement = function() {
    this.m_count--, this.m_min_count > this.m_count && (this.m_min_count = this.m_count)
}, goog.provide("box2d.b2TimeOfImpact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Distance"), goog.require("box2d.b2Math"), goog.require("box2d.b2Timer"), box2d.b2_toiTime = 0, box2d.b2_toiMaxTime = 0, box2d.b2_toiCalls = 0, box2d.b2_toiIters = 0, box2d.b2_toiMaxIters = 0, box2d.b2_toiRootIters = 0, box2d.b2_toiMaxRootIters = 0, box2d.b2TOIInput = function() {
    this.proxyA = new box2d.b2DistanceProxy, this.proxyB = new box2d.b2DistanceProxy, this.sweepA = new box2d.b2Sweep, this.sweepB = new box2d.b2Sweep
}, box2d.b2TOIInput.prototype.proxyA = null, box2d.b2TOIInput.prototype.proxyB = null, box2d.b2TOIInput.prototype.sweepA = null, box2d.b2TOIInput.prototype.sweepB = null, box2d.b2TOIInput.prototype.tMax = 0, box2d.b2TOIOutputState = {
    e_unknown: 0,
    e_failed: 1,
    e_overlapped: 2,
    e_touching: 3,
    e_separated: 4
}, goog.exportProperty(box2d.b2TOIOutputState, "e_unknown", box2d.b2TOIOutputState.e_unknown), goog.exportProperty(box2d.b2TOIOutputState, "e_failed", box2d.b2TOIOutputState.e_failed), goog.exportProperty(box2d.b2TOIOutputState, "e_overlapped", box2d.b2TOIOutputState.e_overlapped), goog.exportProperty(box2d.b2TOIOutputState, "e_touching", box2d.b2TOIOutputState.e_touching), goog.exportProperty(box2d.b2TOIOutputState, "e_separated", box2d.b2TOIOutputState.e_separated), box2d.b2TOIOutput = function() {}, box2d.b2TOIOutput.prototype.state = box2d.b2TOIOutputState.e_unknown, box2d.b2TOIOutput.prototype.t = 0, box2d.b2SeparationFunctionType = {
    e_unknown: -1,
    e_points: 0,
    e_faceA: 1,
    e_faceB: 2
}, goog.exportProperty(box2d.b2SeparationFunctionType, "e_unknown", box2d.b2SeparationFunctionType.e_unknown), goog.exportProperty(box2d.b2SeparationFunctionType, "e_points", box2d.b2SeparationFunctionType.e_points), goog.exportProperty(box2d.b2SeparationFunctionType, "e_faceA", box2d.b2SeparationFunctionType.e_faceA), goog.exportProperty(box2d.b2SeparationFunctionType, "e_faceB", box2d.b2SeparationFunctionType.e_faceB), box2d.b2SeparationFunction = function() {
    this.m_sweepA = new box2d.b2Sweep, this.m_sweepB = new box2d.b2Sweep, this.m_localPoint = new box2d.b2Vec2, this.m_axis = new box2d.b2Vec2
}, box2d.b2SeparationFunction.prototype.m_proxyA = null, box2d.b2SeparationFunction.prototype.m_proxyB = null, box2d.b2SeparationFunction.prototype.m_sweepA = null, box2d.b2SeparationFunction.prototype.m_sweepB = null, box2d.b2SeparationFunction.prototype.m_type = box2d.b2SeparationFunctionType.e_unknown, box2d.b2SeparationFunction.prototype.m_localPoint = null, box2d.b2SeparationFunction.prototype.m_axis = null, box2d.b2SeparationFunction.prototype.Initialize = function(a, b, c, d, e, f) {
    this.m_proxyA = b, this.m_proxyB = d;
    var g = a.count;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(g > 0 && 3 > g), this.m_sweepA.Copy(c), this.m_sweepB.Copy(e);
    var h = box2d.b2TimeOfImpact.s_xfA,
        i = box2d.b2TimeOfImpact.s_xfB;
    if (this.m_sweepA.GetTransform(h, f), this.m_sweepB.GetTransform(i, f), 1 === g) {
        this.m_type = box2d.b2SeparationFunctionType.e_points;
        var j = this.m_proxyA.GetVertex(a.indexA[0]),
            k = this.m_proxyB.GetVertex(a.indexB[0]),
            l = box2d.b2MulXV(h, j, box2d.b2TimeOfImpact.s_pointA),
            m = box2d.b2MulXV(i, k, box2d.b2TimeOfImpact.s_pointB);
        box2d.b2SubVV(m, l, this.m_axis);
        var n = this.m_axis.Normalize();
        return n
    }
    if (a.indexA[0] === a.indexA[1]) {
        this.m_type = box2d.b2SeparationFunctionType.e_faceB;
        var o = this.m_proxyB.GetVertex(a.indexB[0]),
            p = this.m_proxyB.GetVertex(a.indexB[1]);
        box2d.b2CrossVOne(box2d.b2SubVV(p, o, box2d.b2Vec2.s_t0), this.m_axis).SelfNormalize();
        var q = box2d.b2MulRV(i.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
        box2d.b2MidVV(o, p, this.m_localPoint);
        var m = box2d.b2MulXV(i, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB),
            j = this.m_proxyA.GetVertex(a.indexA[0]),
            l = box2d.b2MulXV(h, j, box2d.b2TimeOfImpact.s_pointA),
            n = box2d.b2DotVV(box2d.b2SubVV(l, m, box2d.b2Vec2.s_t0), q);
        return 0 > n && (this.m_axis.SelfNeg(), n = -n), n
    }
    this.m_type = box2d.b2SeparationFunctionType.e_faceA;
    var r = this.m_proxyA.GetVertex(a.indexA[0]),
        s = this.m_proxyA.GetVertex(a.indexA[1]);
    box2d.b2CrossVOne(box2d.b2SubVV(s, r, box2d.b2Vec2.s_t0), this.m_axis).SelfNormalize();
    var q = box2d.b2MulRV(h.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
    box2d.b2MidVV(r, s, this.m_localPoint);
    var l = box2d.b2MulXV(h, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA),
        k = this.m_proxyB.GetVertex(a.indexB[0]),
        m = box2d.b2MulXV(i, k, box2d.b2TimeOfImpact.s_pointB),
        n = box2d.b2DotVV(box2d.b2SubVV(m, l, box2d.b2Vec2.s_t0), q);
    return 0 > n && (this.m_axis.SelfNeg(), n = -n), n
}, box2d.b2SeparationFunction.prototype.FindMinSeparation = function(a, b, c) {
    var d = box2d.b2TimeOfImpact.s_xfA,
        e = box2d.b2TimeOfImpact.s_xfB;
    switch (this.m_sweepA.GetTransform(d, c), this.m_sweepB.GetTransform(e, c), this.m_type) {
        case box2d.b2SeparationFunctionType.e_points:
            var f = box2d.b2MulTRV(d.q, this.m_axis, box2d.b2TimeOfImpact.s_axisA),
                g = box2d.b2MulTRV(e.q, box2d.b2NegV(this.m_axis, box2d.b2Vec2.s_t0), box2d.b2TimeOfImpact.s_axisB);
            a[0] = this.m_proxyA.GetSupport(f), b[0] = this.m_proxyB.GetSupport(g);
            var h = this.m_proxyA.GetVertex(a[0]),
                i = this.m_proxyB.GetVertex(b[0]),
                j = box2d.b2MulXV(d, h, box2d.b2TimeOfImpact.s_pointA),
                k = box2d.b2MulXV(e, i, box2d.b2TimeOfImpact.s_pointB),
                l = box2d.b2DotVV(box2d.b2SubVV(k, j, box2d.b2Vec2.s_t0), this.m_axis);
            return l;
        case box2d.b2SeparationFunctionType.e_faceA:
            var m = box2d.b2MulRV(d.q, this.m_axis, box2d.b2TimeOfImpact.s_normal),
                j = box2d.b2MulXV(d, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA),
                g = box2d.b2MulTRV(e.q, box2d.b2NegV(m, box2d.b2Vec2.s_t0), box2d.b2TimeOfImpact.s_axisB);
            a[0] = -1, b[0] = this.m_proxyB.GetSupport(g);
            var i = this.m_proxyB.GetVertex(b[0]),
                k = box2d.b2MulXV(e, i, box2d.b2TimeOfImpact.s_pointB),
                l = box2d.b2DotVV(box2d.b2SubVV(k, j, box2d.b2Vec2.s_t0), m);
            return l;
        case box2d.b2SeparationFunctionType.e_faceB:
            var m = box2d.b2MulRV(e.q, this.m_axis, box2d.b2TimeOfImpact.s_normal),
                k = box2d.b2MulXV(e, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB),
                f = box2d.b2MulTRV(d.q, box2d.b2NegV(m, box2d.b2Vec2.s_t0), box2d.b2TimeOfImpact.s_axisA);
            b[0] = -1, a[0] = this.m_proxyA.GetSupport(f);
            var h = this.m_proxyA.GetVertex(a[0]),
                j = box2d.b2MulXV(d, h, box2d.b2TimeOfImpact.s_pointA),
                l = box2d.b2DotVV(box2d.b2SubVV(j, k, box2d.b2Vec2.s_t0), m);
            return l;
        default:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), a[0] = -1, b[0] = -1, 0
    }
}, box2d.b2SeparationFunction.prototype.Evaluate = function(a, b, c) {
    var d = box2d.b2TimeOfImpact.s_xfA,
        e = box2d.b2TimeOfImpact.s_xfB;
    switch (this.m_sweepA.GetTransform(d, c), this.m_sweepB.GetTransform(e, c), this.m_type) {
        case box2d.b2SeparationFunctionType.e_points:
            var f = this.m_proxyA.GetVertex(a),
                g = this.m_proxyB.GetVertex(b),
                h = box2d.b2MulXV(d, f, box2d.b2TimeOfImpact.s_pointA),
                i = box2d.b2MulXV(e, g, box2d.b2TimeOfImpact.s_pointB),
                j = box2d.b2DotVV(box2d.b2SubVV(i, h, box2d.b2Vec2.s_t0), this.m_axis);
            return j;
        case box2d.b2SeparationFunctionType.e_faceA:
            var k = box2d.b2MulRV(d.q, this.m_axis, box2d.b2TimeOfImpact.s_normal),
                h = box2d.b2MulXV(d, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA),
                g = this.m_proxyB.GetVertex(b),
                i = box2d.b2MulXV(e, g, box2d.b2TimeOfImpact.s_pointB),
                j = box2d.b2DotVV(box2d.b2SubVV(i, h, box2d.b2Vec2.s_t0), k);
            return j;
        case box2d.b2SeparationFunctionType.e_faceB:
            var k = box2d.b2MulRV(e.q, this.m_axis, box2d.b2TimeOfImpact.s_normal),
                i = box2d.b2MulXV(e, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB),
                f = this.m_proxyA.GetVertex(a),
                h = box2d.b2MulXV(d, f, box2d.b2TimeOfImpact.s_pointA),
                j = box2d.b2DotVV(box2d.b2SubVV(h, i, box2d.b2Vec2.s_t0), k);
            return j;
        default:
            return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0
    }
}, box2d.b2TimeOfImpact = function(a, b) {
    var c = box2d.b2TimeOfImpact.s_timer.Reset();
    ++box2d.b2_toiCalls, a.state = box2d.b2TOIOutputState.e_unknown, a.t = b.tMax;
    var d = b.proxyA,
        e = b.proxyB,
        f = box2d.b2TimeOfImpact.s_sweepA.Copy(b.sweepA),
        g = box2d.b2TimeOfImpact.s_sweepB.Copy(b.sweepB);
    f.Normalize(), g.Normalize();
    var h = b.tMax,
        i = d.m_radius + e.m_radius,
        j = box2d.b2Max(box2d.b2_linearSlop, i - 3 * box2d.b2_linearSlop),
        k = .25 * box2d.b2_linearSlop;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(j > k);
    var l = 0,
        m = 20,
        n = 0,
        o = box2d.b2TimeOfImpact.s_cache;
    o.count = 0;
    var p = box2d.b2TimeOfImpact.s_distanceInput;
    for (p.proxyA = b.proxyA, p.proxyB = b.proxyB, p.useRadii = !1;;) {
        var q = box2d.b2TimeOfImpact.s_xfA,
            r = box2d.b2TimeOfImpact.s_xfB;
        f.GetTransform(q, l), g.GetTransform(r, l), p.transformA.Copy(q), p.transformB.Copy(r);
        var s = box2d.b2TimeOfImpact.s_distanceOutput;
        if (box2d.b2Distance(s, o, p), s.distance <= 0) {
            a.state = box2d.b2TOIOutputState.e_overlapped, a.t = 0;
            break
        }
        if (s.distance < j + k) {
            a.state = box2d.b2TOIOutputState.e_touching, a.t = l;
            break
        }
        var t = box2d.b2TimeOfImpact.s_fcn;
        t.Initialize(o, d, f, e, g, l);
        for (var u = !1, v = h, w = 0;;) {
            var x = box2d.b2TimeOfImpact.s_indexA,
                y = box2d.b2TimeOfImpact.s_indexB,
                z = t.FindMinSeparation(x, y, v);
            if (z > j + k) {
                a.state = box2d.b2TOIOutputState.e_separated, a.t = h, u = !0;
                break
            }
            if (z > j - k) {
                l = v;
                break
            }
            var A = t.Evaluate(x[0], y[0], l);
            if (j - k > A) {
                a.state = box2d.b2TOIOutputState.e_failed, a.t = l, u = !0;
                break
            }
            if (j + k >= A) {
                a.state = box2d.b2TOIOutputState.e_touching, a.t = l, u = !0;
                break
            }
            for (var B = 0, C = l, D = v;;) {
                var E = 0;
                E = 1 & B ? C + (j - A) * (D - C) / (z - A) : .5 * (C + D), ++B, ++box2d.b2_toiRootIters;
                var F = t.Evaluate(x[0], y[0], E);
                if (box2d.b2Abs(F - j) < k) {
                    v = E;
                    break
                }
                if (F > j ? (C = E, A = F) : (D = E, z = F), 50 === B) break
            }
            if (box2d.b2_toiMaxRootIters = box2d.b2Max(box2d.b2_toiMaxRootIters, B), ++w, w === box2d.b2_maxPolygonVertices) break
        }
        if (++n, ++box2d.b2_toiIters, u) break;
        if (n === m) {
            a.state = box2d.b2TOIOutputState.e_failed, a.t = l;
            break
        }
    }
    box2d.b2_toiMaxIters = box2d.b2Max(box2d.b2_toiMaxIters, n);
    var G = c.GetMilliseconds();
    box2d.b2_toiMaxTime = box2d.b2Max(box2d.b2_toiMaxTime, G), box2d.b2_toiTime += G
}, box2d.b2TimeOfImpact.s_timer = new box2d.b2Timer, box2d.b2TimeOfImpact.s_cache = new box2d.b2SimplexCache, box2d.b2TimeOfImpact.s_distanceInput = new box2d.b2DistanceInput, box2d.b2TimeOfImpact.s_distanceOutput = new box2d.b2DistanceOutput, box2d.b2TimeOfImpact.s_xfA = new box2d.b2Transform, box2d.b2TimeOfImpact.s_xfB = new box2d.b2Transform, box2d.b2TimeOfImpact.s_indexA = box2d.b2MakeNumberArray(1), box2d.b2TimeOfImpact.s_indexB = box2d.b2MakeNumberArray(1), box2d.b2TimeOfImpact.s_fcn = new box2d.b2SeparationFunction, box2d.b2TimeOfImpact.s_sweepA = new box2d.b2Sweep, box2d.b2TimeOfImpact.s_sweepB = new box2d.b2Sweep, box2d.b2TimeOfImpact.s_pointA = new box2d.b2Vec2, box2d.b2TimeOfImpact.s_pointB = new box2d.b2Vec2, box2d.b2TimeOfImpact.s_normal = new box2d.b2Vec2, box2d.b2TimeOfImpact.s_axisA = new box2d.b2Vec2, box2d.b2TimeOfImpact.s_axisB = new box2d.b2Vec2, goog.provide("box2d.b2Contact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Collision"), goog.require("box2d.b2TimeOfImpact"), box2d.b2MixFriction = function(a, b) {
    return box2d.b2Sqrt(a * b)
}, box2d.b2MixRestitution = function(a, b) {
    return a > b ? a : b
}, box2d.b2ContactEdge = function() {}, box2d.b2ContactEdge.prototype.other = null, box2d.b2ContactEdge.prototype.contact = null, box2d.b2ContactEdge.prototype.prev = null, box2d.b2ContactEdge.prototype.next = null, box2d.b2ContactFlag = {
    e_none: 0,
    e_islandFlag: 1,
    e_touchingFlag: 2,
    e_enabledFlag: 4,
    e_filterFlag: 8,
    e_bulletHitFlag: 16,
    e_toiFlag: 32
}, goog.exportProperty(box2d.b2ContactFlag, "e_none", box2d.b2ContactFlag.e_none), goog.exportProperty(box2d.b2ContactFlag, "e_islandFlag", box2d.b2ContactFlag.e_islandFlag), goog.exportProperty(box2d.b2ContactFlag, "e_touchingFlag", box2d.b2ContactFlag.e_touchingFlag), goog.exportProperty(box2d.b2ContactFlag, "e_enabledFlag", box2d.b2ContactFlag.e_enabledFlag), goog.exportProperty(box2d.b2ContactFlag, "e_filterFlag", box2d.b2ContactFlag.e_filterFlag), goog.exportProperty(box2d.b2ContactFlag, "e_bulletHitFlag", box2d.b2ContactFlag.e_bulletHitFlag), goog.exportProperty(box2d.b2ContactFlag, "e_toiFlag", box2d.b2ContactFlag.e_toiFlag), box2d.b2Contact = function() {
    this.m_nodeA = new box2d.b2ContactEdge, this.m_nodeB = new box2d.b2ContactEdge, this.m_manifold = new box2d.b2Manifold, this.m_oldManifold = new box2d.b2Manifold
}, box2d.b2Contact.prototype.m_flags = box2d.b2ContactFlag.e_none, box2d.b2Contact.prototype.m_prev = null, box2d.b2Contact.prototype.m_next = null, box2d.b2Contact.prototype.m_nodeA = null, box2d.b2Contact.prototype.m_nodeB = null, box2d.b2Contact.prototype.m_fixtureA = null, box2d.b2Contact.prototype.m_fixtureB = null, box2d.b2Contact.prototype.m_indexA = 0, box2d.b2Contact.prototype.m_indexB = 0, box2d.b2Contact.prototype.m_manifold = null, box2d.b2Contact.prototype.m_toiCount = 0, box2d.b2Contact.prototype.m_toi = 0, box2d.b2Contact.prototype.m_friction = 0, box2d.b2Contact.prototype.m_restitution = 0, box2d.b2Contact.prototype.m_tangentSpeed = 0, box2d.b2Contact.prototype.m_oldManifold = null, box2d.b2Contact.prototype.GetManifold = function() {
    return this.m_manifold
}, box2d.b2Contact.prototype.GetWorldManifold = function(a) {
    var b = this.m_fixtureA.GetBody(),
        c = this.m_fixtureB.GetBody(),
        d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    a.Initialize(this.m_manifold, b.GetTransform(), d.m_radius, c.GetTransform(), e.m_radius)
}, box2d.b2Contact.prototype.IsTouching = function() {
    return (this.m_flags & box2d.b2ContactFlag.e_touchingFlag) === box2d.b2ContactFlag.e_touchingFlag
}, box2d.b2Contact.prototype.SetEnabled = function(a) {
    a ? this.m_flags |= box2d.b2ContactFlag.e_enabledFlag : this.m_flags &= ~box2d.b2ContactFlag.e_enabledFlag
}, box2d.b2Contact.prototype.IsEnabled = function() {
    return (this.m_flags & box2d.b2ContactFlag.e_enabledFlag) === box2d.b2ContactFlag.e_enabledFlag
}, box2d.b2Contact.prototype.GetNext = function() {
    return this.m_next
}, box2d.b2Contact.prototype.GetFixtureA = function() {
    return this.m_fixtureA
}, box2d.b2Contact.prototype.GetChildIndexA = function() {
    return this.m_indexA
}, box2d.b2Contact.prototype.GetFixtureB = function() {
    return this.m_fixtureB
}, box2d.b2Contact.prototype.GetChildIndexB = function() {
    return this.m_indexB
}, box2d.b2Contact.prototype.Evaluate = function() {}, box2d.b2Contact.prototype.FlagForFiltering = function() {
    this.m_flags |= box2d.b2ContactFlag.e_filterFlag
}, box2d.b2Contact.prototype.SetFriction = function(a) {
    this.m_friction = a
}, box2d.b2Contact.prototype.GetFriction = function() {
    return this.m_friction
}, box2d.b2Contact.prototype.ResetFriction = function() {
    this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction)
}, box2d.b2Contact.prototype.SetRestitution = function(a) {
    this.m_restitution = a
}, box2d.b2Contact.prototype.GetRestitution = function() {
    return this.m_restitution
}, box2d.b2Contact.prototype.ResetRestitution = function() {
    this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution)
}, box2d.b2Contact.prototype.SetTangentSpeed = function(a) {
    this.m_tangentSpeed = a
}, box2d.b2Contact.prototype.GetTangentSpeed = function() {
    return this.m_tangentSpeed
}, box2d.b2Contact.prototype.Reset = function(a, b, c, d) {
    this.m_flags = box2d.b2ContactFlag.e_enabledFlag, this.m_fixtureA = a, this.m_fixtureB = c, this.m_indexA = b, this.m_indexB = d, this.m_manifold.pointCount = 0, this.m_prev = null, this.m_next = null, this.m_nodeA.contact = null, this.m_nodeA.prev = null, this.m_nodeA.next = null, this.m_nodeA.other = null, this.m_nodeB.contact = null, this.m_nodeB.prev = null, this.m_nodeB.next = null, this.m_nodeB.other = null, this.m_toiCount = 0, this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction), this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution)
}, box2d.b2Contact.prototype.Update = function(a) {
    var b = this.m_oldManifold;
    this.m_oldManifold = this.m_manifold, this.m_manifold = b, this.m_flags |= box2d.b2ContactFlag.e_enabledFlag;
    var c = !1,
        d = (this.m_flags & box2d.b2ContactFlag.e_touchingFlag) === box2d.b2ContactFlag.e_touchingFlag,
        e = this.m_fixtureA.IsSensor(),
        f = this.m_fixtureB.IsSensor(),
        g = e || f,
        h = this.m_fixtureA.GetBody(),
        i = this.m_fixtureB.GetBody(),
        j = h.GetTransform(),
        k = i.GetTransform();
    if (g) {
        var l = this.m_fixtureA.GetShape(),
            m = this.m_fixtureB.GetShape();
        c = box2d.b2TestOverlapShape(l, this.m_indexA, m, this.m_indexB, j, k), this.m_manifold.pointCount = 0
    } else {
        this.Evaluate(this.m_manifold, j, k), c = this.m_manifold.pointCount > 0;
        for (var n = 0; n < this.m_manifold.pointCount; ++n) {
            var o = this.m_manifold.points[n];
            o.normalImpulse = 0, o.tangentImpulse = 0;
            for (var p = o.id, q = 0; q < this.m_oldManifold.pointCount; ++q) {
                var r = this.m_oldManifold.points[q];
                if (r.id.key === p.key) {
                    o.normalImpulse = r.normalImpulse, o.tangentImpulse = r.tangentImpulse;
                    break
                }
            }
        }
        c !== d && (h.SetAwake(!0), i.SetAwake(!0))
    }
    c ? this.m_flags |= box2d.b2ContactFlag.e_touchingFlag : this.m_flags &= ~box2d.b2ContactFlag.e_touchingFlag, d === !1 && c === !0 && a && a.BeginContact(this), d === !0 && c === !1 && a && a.EndContact(this), g === !1 && c && a && a.PreSolve(this, this.m_oldManifold)
}, box2d.b2Contact.prototype.ComputeTOI = function(a, b) {
    var c = box2d.b2Contact.prototype.ComputeTOI.s_input;
    c.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA), c.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB), c.sweepA.Copy(a), c.sweepB.Copy(b), c.tMax = box2d.b2_linearSlop;
    var d = box2d.b2Contact.prototype.ComputeTOI.s_output;
    return box2d.b2TimeOfImpact(d, c), d.t
}, box2d.b2Contact.prototype.ComputeTOI.s_input = new box2d.b2TOIInput, box2d.b2Contact.prototype.ComputeTOI.s_output = new box2d.b2TOIOutput, goog.provide("box2d.b2PolygonAndCircleContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), box2d.b2PolygonAndCircleContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2PolygonAndCircleContact, box2d.b2Contact), box2d.b2PolygonAndCircleContact.Create = function() {
    return new box2d.b2PolygonAndCircleContact
}, box2d.b2PolygonAndCircleContact.Destroy = function() {}, box2d.b2PolygonAndCircleContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.GetType() === box2d.b2ShapeType.e_polygonShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(c.GetType() === box2d.b2ShapeType.e_circleShape)
}, box2d.b2PolygonAndCircleContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2PolygonShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2CircleShape), box2d.b2CollidePolygonAndCircle(a, d instanceof box2d.b2PolygonShape ? d : null, b, e instanceof box2d.b2CircleShape ? e : null, c)
}, goog.provide("box2d.b2EdgeAndPolygonContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), box2d.b2EdgeAndPolygonContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2EdgeAndPolygonContact, box2d.b2Contact), box2d.b2EdgeAndPolygonContact.Create = function() {
    return new box2d.b2EdgeAndPolygonContact
}, box2d.b2EdgeAndPolygonContact.Destroy = function() {}, box2d.b2EdgeAndPolygonContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.GetType() === box2d.b2ShapeType.e_edgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(c.GetType() === box2d.b2ShapeType.e_polygonShape)
}, box2d.b2EdgeAndPolygonContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2EdgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2PolygonShape), box2d.b2CollideEdgeAndPolygon(a, d instanceof box2d.b2EdgeShape ? d : null, b, e instanceof box2d.b2PolygonShape ? e : null, c)
}, goog.provide("box2d.b2Shape"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Distance"), box2d.b2MassData = function() {
    this.center = new box2d.b2Vec2(0, 0)
}, box2d.b2MassData.prototype.mass = 0, box2d.b2MassData.prototype.center = null, box2d.b2MassData.prototype.I = 0, box2d.b2ShapeType = {
    e_unknown: -1,
    e_circleShape: 0,
    e_edgeShape: 1,
    e_polygonShape: 2,
    e_chainShape: 3,
    e_shapeTypeCount: 4
}, goog.exportProperty(box2d.b2ShapeType, "e_unknown", box2d.b2ShapeType.e_unknown), goog.exportProperty(box2d.b2ShapeType, "e_circleShape", box2d.b2ShapeType.e_circleShape), goog.exportProperty(box2d.b2ShapeType, "e_edgeShape", box2d.b2ShapeType.e_edgeShape), goog.exportProperty(box2d.b2ShapeType, "e_polygonShape", box2d.b2ShapeType.e_polygonShape), goog.exportProperty(box2d.b2ShapeType, "e_chainShape", box2d.b2ShapeType.e_chainShape), goog.exportProperty(box2d.b2ShapeType, "e_shapeTypeCount", box2d.b2ShapeType.e_shapeTypeCount), box2d.b2Shape = function(a, b) {
    this.m_type = a, this.m_radius = b
}, box2d.b2Shape.prototype.m_type = box2d.b2ShapeType.e_unknown, box2d.b2Shape.prototype.m_radius = 0, box2d.b2Shape.prototype.Clone = function() {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), null
}, box2d.b2Shape.prototype.Copy = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_type === a.m_type), this.m_radius = a.m_radius, this
}, box2d.b2Shape.prototype.GetType = function() {
    return this.m_type
}, box2d.b2Shape.prototype.GetChildCount = function() {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), 0
}, box2d.b2Shape.prototype.TestPoint = function() {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), !1
}, box2d.b2Shape.prototype.RayCast = function() {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), !1
}, box2d.b2Shape.prototype.ComputeAABB = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual")
}, box2d.b2Shape.prototype.ComputeMass = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual")
}, box2d.b2Shape.prototype.SetupDistanceProxy = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual")
}, box2d.b2Shape.prototype.ComputeSubmergedArea = function() {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), 0
}, box2d.b2Shape.prototype.Dump = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual")
}, goog.provide("box2d.b2PolygonShape"), goog.require("box2d.b2Shape"), box2d.b2PolygonShape = function() {
    goog.base(this, box2d.b2ShapeType.e_polygonShape, box2d.b2_polygonRadius), this.m_centroid = new box2d.b2Vec2(0, 0), this.m_vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices), this.m_normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices)
}, goog.inherits(box2d.b2PolygonShape, box2d.b2Shape), box2d.b2PolygonShape.prototype.m_centroid = null, box2d.b2PolygonShape.prototype.m_vertices = null, box2d.b2PolygonShape.prototype.m_normals = null, box2d.b2PolygonShape.prototype.m_count = 0, box2d.b2PolygonShape.prototype.Clone = function() {
    return (new box2d.b2PolygonShape).Copy(this)
}, box2d.b2PolygonShape.prototype.Copy = function(a) {
    goog.base(this, "Copy", a), box2d.ENABLE_ASSERTS && box2d.b2Assert(a instanceof box2d.b2PolygonShape), this.m_centroid.Copy(a.m_centroid), this.m_count = a.m_count;
    for (var b = 0, c = this.m_count; c > b; ++b) this.m_vertices[b].Copy(a.m_vertices[b]), this.m_normals[b].Copy(a.m_normals[b]);
    return this
}, box2d.b2PolygonShape.prototype.SetAsBox = function(a, b) {
    return this.m_count = 4, this.m_vertices[0].SetXY(-a, -b), this.m_vertices[1].SetXY(a, -b), this.m_vertices[2].SetXY(a, b), this.m_vertices[3].SetXY(-a, b), this.m_normals[0].SetXY(0, -1), this.m_normals[1].SetXY(1, 0), this.m_normals[2].SetXY(0, 1), this.m_normals[3].SetXY(-1, 0), this.m_centroid.SetZero(), this
}, box2d.b2PolygonShape.prototype.SetAsOrientedBox = function(a, b, c, d) {
    this.m_count = 4, this.m_vertices[0].SetXY(-a, -b), this.m_vertices[1].SetXY(a, -b), this.m_vertices[2].SetXY(a, b), this.m_vertices[3].SetXY(-a, b), this.m_normals[0].SetXY(0, -1), this.m_normals[1].SetXY(1, 0), this.m_normals[2].SetXY(0, 1), this.m_normals[3].SetXY(-1, 0), this.m_centroid.Copy(c);
    var e = new box2d.b2Transform;
    e.SetPosition(c), e.SetRotationAngleRadians(d);
    for (var f = 0, g = this.m_count; g > f; ++f) box2d.b2MulXV(e, this.m_vertices[f], this.m_vertices[f]), box2d.b2MulRV(e.q, this.m_normals[f], this.m_normals[f]);
    return this
}, box2d.b2PolygonShape.prototype.Set = function(a, b) {
    if (void 0 === b && (b = a.length), box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 3 && b <= box2d.b2_maxPolygonVertices), 3 > b) return this.SetAsBox(1, 1);
    for (var c = box2d.b2Min(b, box2d.b2_maxPolygonVertices), d = box2d.b2PolygonShape.prototype.Set.s_ps, e = 0, f = 0; c > f; ++f) {
        for (var g = a[f], h = !0, i = 0; e > i; ++i)
            if (box2d.b2DistanceSquaredVV(g, d[i]) < .5 * box2d.b2_linearSlop) {
                h = !1;
                break
            }
        h && d[e++].Copy(g)
    }
    if (c = e, 3 > c) return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), this.SetAsBox(1, 1);
    for (var j = 0, k = d[0].x, f = 1; c > f; ++f) {
        var l = d[f].x;
        (l > k || l === k && d[f].y < d[j].y) && (j = f, k = l)
    }
    for (var m = box2d.b2PolygonShape.prototype.Set.s_hull, n = 0, o = j;;) {
        m[n] = o;
        for (var p = 0, i = 1; c > i; ++i)
            if (p !== o) {
                var q = box2d.b2SubVV(d[p], d[m[n]], box2d.b2PolygonShape.prototype.Set.s_r),
                    g = box2d.b2SubVV(d[i], d[m[n]], box2d.b2PolygonShape.prototype.Set.s_v),
                    r = box2d.b2CrossVV(q, g);
                0 > r && (p = i), 0 === r && g.GetLengthSquared() > q.GetLengthSquared() && (p = i)
            } else p = i;
        if (++n, o = p, p === j) break
    }
    this.m_count = n;
    for (var f = 0; n > f; ++f) this.m_vertices[f].Copy(d[m[f]]);
    for (var f = 0, s = n; s > f; ++f) {
        var t = this.m_vertices[f],
            u = this.m_vertices[(f + 1) % s],
            v = box2d.b2SubVV(u, t, box2d.b2Vec2.s_t0);
        box2d.ENABLE_ASSERTS && box2d.b2Assert(v.GetLengthSquared() > box2d.b2_epsilon_sq), box2d.b2CrossVOne(v, this.m_normals[f]).SelfNormalize()
    }
    return box2d.b2PolygonShape.ComputeCentroid(this.m_vertices, n, this.m_centroid), this
}, box2d.b2PolygonShape.prototype.Set.s_ps = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices), box2d.b2PolygonShape.prototype.Set.s_hull = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices), box2d.b2PolygonShape.prototype.Set.s_r = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.Set.s_v = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.SetAsVector = function(a, b) {
    return this.Set(a, b), this
}, box2d.b2PolygonShape.prototype.SetAsArray = function(a, b) {
    return this.Set(a, b), this
}, box2d.b2PolygonShape.prototype.GetChildCount = function() {
    return 1
}, box2d.b2PolygonShape.prototype.TestPoint = function(a, b) {
    for (var c = box2d.b2MulTXV(a, b, box2d.b2PolygonShape.prototype.TestPoint.s_pLocal), d = 0, e = this.m_count; e > d; ++d) {
        var f = box2d.b2DotVV(this.m_normals[d], box2d.b2SubVV(c, this.m_vertices[d], box2d.b2Vec2.s_t0));
        if (f > 0) return !1
    }
    return !0
}, box2d.b2PolygonShape.prototype.TestPoint.s_pLocal = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.RayCast = function(a, b, c) {
    for (var d = box2d.b2MulTXV(c, b.p1, box2d.b2PolygonShape.prototype.RayCast.s_p1), e = box2d.b2MulTXV(c, b.p2, box2d.b2PolygonShape.prototype.RayCast.s_p2), f = box2d.b2SubVV(e, d, box2d.b2PolygonShape.prototype.RayCast.s_d), g = 0, h = b.maxFraction, i = -1, j = 0, k = this.m_count; k > j; ++j) {
        var l = box2d.b2DotVV(this.m_normals[j], box2d.b2SubVV(this.m_vertices[j], d, box2d.b2Vec2.s_t0)),
            m = box2d.b2DotVV(this.m_normals[j], f);
        if (0 === m) {
            if (0 > l) return !1
        } else 0 > m && g * m > l ? (g = l / m, i = j) : m > 0 && h * m > l && (h = l / m);
        if (g > h) return !1
    }
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(g >= 0 && g <= b.maxFraction), i >= 0 ? (a.fraction = g, box2d.b2MulRV(c.q, this.m_normals[i], a.normal), !0) : !1
}, box2d.b2PolygonShape.prototype.RayCast.s_p1 = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.RayCast.s_p2 = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.RayCast.s_d = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeAABB = function(a, b) {
    for (var c = box2d.b2MulXV(b, this.m_vertices[0], a.lowerBound), d = a.upperBound.Copy(c), e = 0, f = this.m_count; f > e; ++e) {
        var g = box2d.b2MulXV(b, this.m_vertices[e], box2d.b2PolygonShape.prototype.ComputeAABB.s_v);
        box2d.b2MinV(g, c, c), box2d.b2MaxV(g, d, d)
    }
    var h = this.m_radius;
    c.SelfSubXY(h, h), d.SelfAddXY(h, h)
}, box2d.b2PolygonShape.prototype.ComputeAABB.s_v = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeMass = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_count >= 3);
    for (var c = box2d.b2PolygonShape.prototype.ComputeMass.s_center.SetZero(), d = 0, e = 0, f = box2d.b2PolygonShape.prototype.ComputeMass.s_s.SetZero(), g = 0, h = this.m_count; h > g; ++g) f.SelfAdd(this.m_vertices[g]);
    f.SelfMul(1 / this.m_count);
    for (var i = 1 / 3, g = 0, h = this.m_count; h > g; ++g) {
        var j = box2d.b2SubVV(this.m_vertices[g], f, box2d.b2PolygonShape.prototype.ComputeMass.s_e1),
            k = box2d.b2SubVV(this.m_vertices[(g + 1) % h], f, box2d.b2PolygonShape.prototype.ComputeMass.s_e2),
            l = box2d.b2CrossVV(j, k),
            m = .5 * l;
        d += m, c.SelfAdd(box2d.b2MulSV(m * i, box2d.b2AddVV(j, k, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1));
        var n = j.x,
            o = j.y,
            p = k.x,
            q = k.y,
            r = n * n + p * n + p * p,
            s = o * o + q * o + q * q;
        e += .25 * i * l * (r + s)
    }
    a.mass = b * d, box2d.ENABLE_ASSERTS && box2d.b2Assert(d > box2d.b2_epsilon), c.SelfMul(1 / d), box2d.b2AddVV(c, f, a.center), a.I = b * e, a.I += a.mass * (box2d.b2DotVV(a.center, a.center) - box2d.b2DotVV(c, c))
}, box2d.b2PolygonShape.prototype.ComputeMass.s_center = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeMass.s_s = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeMass.s_e1 = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeMass.s_e2 = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.Validate = function() {
    for (var a = 0; a < this.m_count; ++a)
        for (var b = a, c = (a + 1) % this.m_count, d = this.m_vertices[b], e = box2d.b2SubVV(this.m_vertices[c], d, box2d.b2PolygonShape.prototype.Validate.s_e), f = 0; f < this.m_count; ++f)
            if (f !== b && f !== c) {
                var g = box2d.b2SubVV(this.m_vertices[f], d, box2d.b2PolygonShape.prototype.Validate.s_v),
                    h = box2d.b2CrossVV(e, g);
                if (0 > h) return !1
            }
    return !0
}, box2d.b2PolygonShape.prototype.Validate.s_e = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.Validate.s_v = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.SetupDistanceProxy = function(a) {
    a.m_vertices = this.m_vertices, a.m_count = this.m_count, a.m_radius = this.m_radius
}, box2d.b2PolygonShape.prototype.ComputeSubmergedArea = function(a, b, c, d) {
    for (var e = box2d.b2MulTRV(c.q, a, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL), f = b - box2d.b2DotVV(a, c.p), g = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths, h = 0, i = -1, j = -1, k = !1, l = 0, m = this.m_count; m > l; ++l) {
        g[l] = box2d.b2DotVV(e, this.m_vertices[l]) - f;
        var n = g[l] < -box2d.b2_epsilon;
        l > 0 && (n ? k || (i = l - 1, h++) : k && (j = l - 1, h++)), k = n
    }
    switch (h) {
        case 0:
            if (k) {
                var o = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md;
                return this.ComputeMass(o, 1), box2d.b2MulXV(c, o.center, d), o.mass
            }
            return 0;
        case 1:
            -1 === i ? i = this.m_count - 1 : j = this.m_count - 1
    }
    for (var p = (i + 1) % this.m_count, q = (j + 1) % this.m_count, r = (0 - g[i]) / (g[p] - g[i]), s = (0 - g[j]) / (g[q] - g[j]), t = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec.SetXY(this.m_vertices[i].x * (1 - r) + this.m_vertices[p].x * r, this.m_vertices[i].y * (1 - r) + this.m_vertices[p].y * r), u = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec.SetXY(this.m_vertices[j].x * (1 - s) + this.m_vertices[q].x * s, this.m_vertices[j].y * (1 - s) + this.m_vertices[q].y * s), v = 0, w = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center.SetZero(), x = this.m_vertices[p], y = null, l = p; l !== q;) {
        l = (l + 1) % this.m_count, y = l === q ? u : this.m_vertices[l];
        var z = .5 * ((x.x - t.x) * (y.y - t.y) - (x.y - t.y) * (y.x - t.x));
        v += z, w.x += z * (t.x + x.x + y.x) / 3, w.y += z * (t.y + x.y + y.y) / 3, x = y
    }
    return w.SelfMul(1 / v), box2d.b2MulXV(c, w, d), v
}, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices), box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md = new box2d.b2MassData, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center = new box2d.b2Vec2, box2d.b2PolygonShape.prototype.Dump = function() {
    box2d.b2Log("    /*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();\n"), box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
    for (var a = 0; a < this.m_count; ++a) box2d.b2Log("    vs[%d].SetXY(%.15f, %.15f);\n", a, this.m_vertices[a].x, this.m_vertices[a].y);
    box2d.b2Log("    shape.Set(vs, %d);\n", this.m_count)
}, box2d.b2PolygonShape.ComputeCentroid = function(a, b, c) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 3);
    var d = c;
    d.SetZero();
    for (var e = 0, f = box2d.b2PolygonShape.ComputeCentroid.s_pRef.SetZero(), g = 1 / 3, h = 0; b > h; ++h) {
        var i = f,
            j = a[h],
            k = a[(h + 1) % b],
            l = box2d.b2SubVV(j, i, box2d.b2PolygonShape.ComputeCentroid.s_e1),
            m = box2d.b2SubVV(k, i, box2d.b2PolygonShape.ComputeCentroid.s_e2),
            n = box2d.b2CrossVV(l, m),
            o = .5 * n;
        e += o, d.x += o * g * (i.x + j.x + k.x), d.y += o * g * (i.y + j.y + k.y)
    }
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(e > box2d.b2_epsilon), d.SelfMul(1 / e), d
}, box2d.b2PolygonShape.ComputeCentroid.s_pRef = new box2d.b2Vec2, box2d.b2PolygonShape.ComputeCentroid.s_e1 = new box2d.b2Vec2, box2d.b2PolygonShape.ComputeCentroid.s_e2 = new box2d.b2Vec2, goog.provide("box2d.b2CollideEdge"), goog.require("box2d.b2Collision"), box2d.b2CollideEdgeAndCircle = function(a, b, c, d, e) {
    a.pointCount = 0;
    var f = box2d.b2MulTXV(c, box2d.b2MulXV(e, d.m_p, box2d.b2Vec2.s_t0), box2d.b2CollideEdgeAndCircle.s_Q),
        g = b.m_vertex1,
        h = b.m_vertex2,
        i = box2d.b2SubVV(h, g, box2d.b2CollideEdgeAndCircle.s_e),
        j = box2d.b2DotVV(i, box2d.b2SubVV(h, f, box2d.b2Vec2.s_t0)),
        k = box2d.b2DotVV(i, box2d.b2SubVV(f, g, box2d.b2Vec2.s_t0)),
        l = b.m_radius + d.m_radius,
        m = box2d.b2CollideEdgeAndCircle.s_id;
    if (m.cf.indexB = 0, m.cf.typeB = box2d.b2ContactFeatureType.e_vertex, 0 >= k) {
        var n = g,
            o = box2d.b2SubVV(f, n, box2d.b2CollideEdgeAndCircle.s_d),
            p = box2d.b2DotVV(o, o);
        if (p > l * l) return;
        if (b.m_hasVertex0) {
            var q = b.m_vertex0,
                r = g,
                s = box2d.b2SubVV(r, q, box2d.b2CollideEdgeAndCircle.s_e1),
                t = box2d.b2DotVV(s, box2d.b2SubVV(r, f, box2d.b2Vec2.s_t0));
            if (t > 0) return
        }
        return m.cf.indexA = 0, m.cf.typeA = box2d.b2ContactFeatureType.e_vertex, a.pointCount = 1, a.type = box2d.b2ManifoldType.e_circles, a.localNormal.SetZero(), a.localPoint.Copy(n), a.points[0].id.Copy(m), void a.points[0].localPoint.Copy(d.m_p)
    }
    if (0 >= j) {
        var n = h,
            o = box2d.b2SubVV(f, n, box2d.b2CollideEdgeAndCircle.s_d),
            p = box2d.b2DotVV(o, o);
        if (p > l * l) return;
        if (b.m_hasVertex3) {
            var u = b.m_vertex3,
                v = h,
                w = box2d.b2SubVV(u, v, box2d.b2CollideEdgeAndCircle.s_e2),
                x = box2d.b2DotVV(w, box2d.b2SubVV(f, v, box2d.b2Vec2.s_t0));
            if (x > 0) return
        }
        return m.cf.indexA = 1, m.cf.typeA = box2d.b2ContactFeatureType.e_vertex, a.pointCount = 1, a.type = box2d.b2ManifoldType.e_circles, a.localNormal.SetZero(), a.localPoint.Copy(n), a.points[0].id.Copy(m), void a.points[0].localPoint.Copy(d.m_p)
    }
    var y = box2d.b2DotVV(i, i);
    box2d.ENABLE_ASSERTS && box2d.b2Assert(y > 0);
    var n = box2d.b2CollideEdgeAndCircle.s_P;
    n.x = 1 / y * (j * g.x + k * h.x), n.y = 1 / y * (j * g.y + k * h.y);
    var o = box2d.b2SubVV(f, n, box2d.b2CollideEdgeAndCircle.s_d),
        p = box2d.b2DotVV(o, o);
    if (!(p > l * l)) {
        var z = box2d.b2CollideEdgeAndCircle.s_n.SetXY(-i.y, i.x);
        box2d.b2DotVV(z, box2d.b2SubVV(f, g, box2d.b2Vec2.s_t0)) < 0 && z.SetXY(-z.x, -z.y), z.Normalize(), m.cf.indexA = 0, m.cf.typeA = box2d.b2ContactFeatureType.e_face, a.pointCount = 1, a.type = box2d.b2ManifoldType.e_faceA, a.localNormal.Copy(z), a.localPoint.Copy(g), a.points[0].id.Copy(m), a.points[0].localPoint.Copy(d.m_p)
    }
}, box2d.b2CollideEdgeAndCircle.s_Q = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_e = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_d = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_e1 = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_e2 = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_P = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_n = new box2d.b2Vec2, box2d.b2CollideEdgeAndCircle.s_id = new box2d.b2ContactID, box2d.b2EPAxisType = {
    e_unknown: 0,
    e_edgeA: 1,
    e_edgeB: 2
}, goog.exportProperty(box2d.b2EPAxisType, "e_unknown", box2d.b2EPAxisType.e_unknown), goog.exportProperty(box2d.b2EPAxisType, "e_edgeA", box2d.b2EPAxisType.e_edgeA), goog.exportProperty(box2d.b2EPAxisType, "e_edgeB", box2d.b2EPAxisType.e_edgeB), box2d.b2EPAxis = function() {}, box2d.b2EPAxis.prototype.type = box2d.b2EPAxisType.e_unknown, box2d.b2EPAxis.prototype.index = 0, box2d.b2EPAxis.prototype.separation = 0, box2d.b2TempPolygon = function() {
    this.vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices), this.normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices), this.count = 0
}, box2d.b2TempPolygon.prototype.vertices = null, box2d.b2TempPolygon.prototype.normals = null, box2d.b2TempPolygon.prototype.count = 0, box2d.b2ReferenceFace = function() {
    this.i1 = 0, this.i2 = 0, this.v1 = new box2d.b2Vec2, this.v2 = new box2d.b2Vec2, this.normal = new box2d.b2Vec2, this.sideNormal1 = new box2d.b2Vec2, this.sideOffset1 = 0, this.sideNormal2 = new box2d.b2Vec2, this.sideOffset2 = 0
}, box2d.b2ReferenceFace.prototype.i1 = 0, box2d.b2ReferenceFace.prototype.i2 = 0, box2d.b2ReferenceFace.prototype.v1 = null, box2d.b2ReferenceFace.prototype.v2 = null, box2d.b2ReferenceFace.prototype.normal = null, box2d.b2ReferenceFace.prototype.sideNormal1 = null, box2d.b2ReferenceFace.prototype.sideOffset1 = 0, box2d.b2ReferenceFace.prototype.sideNormal2 = null, box2d.b2ReferenceFace.prototype.sideOffset2 = 0, box2d.b2EPColliderVertexType = {
    e_isolated: 0,
    e_concave: 1,
    e_convex: 2
}, goog.exportProperty(box2d.b2EPColliderVertexType, "e_isolated", box2d.b2EPColliderVertexType.e_isolated), goog.exportProperty(box2d.b2EPColliderVertexType, "e_concave", box2d.b2EPColliderVertexType.e_concave), goog.exportProperty(box2d.b2EPColliderVertexType, "e_convex", box2d.b2EPColliderVertexType.e_convex), box2d.b2EPCollider = function() {
    this.m_polygonB = new box2d.b2TempPolygon, this.m_xf = new box2d.b2Transform, this.m_centroidB = new box2d.b2Vec2, this.m_v0 = new box2d.b2Vec2, this.m_v1 = new box2d.b2Vec2, this.m_v2 = new box2d.b2Vec2, this.m_v3 = new box2d.b2Vec2, this.m_normal0 = new box2d.b2Vec2, this.m_normal1 = new box2d.b2Vec2, this.m_normal2 = new box2d.b2Vec2, this.m_normal = new box2d.b2Vec2, this.m_type1 = box2d.b2EPColliderVertexType.e_isolated, this.m_type2 = box2d.b2EPColliderVertexType.e_isolated, this.m_lowerLimit = new box2d.b2Vec2, this.m_upperLimit = new box2d.b2Vec2, this.m_radius = 0, this.m_front = !1
}, box2d.b2EPCollider.prototype.m_polygonB = null, box2d.b2EPCollider.prototype.m_xf = null, box2d.b2EPCollider.prototype.m_centroidB = null, box2d.b2EPCollider.prototype.m_v0 = null, box2d.b2EPCollider.prototype.m_v1 = null, box2d.b2EPCollider.prototype.m_v2 = null, box2d.b2EPCollider.prototype.m_v3 = null, box2d.b2EPCollider.prototype.m_normal0 = null, box2d.b2EPCollider.prototype.m_normal1 = null, box2d.b2EPCollider.prototype.m_normal2 = null, box2d.b2EPCollider.prototype.m_normal = null, box2d.b2EPCollider.prototype.m_type1 = box2d.b2EPColliderVertexType.e_isolated, box2d.b2EPCollider.prototype.m_type2 = box2d.b2EPColliderVertexType.e_isolated, box2d.b2EPCollider.prototype.m_lowerLimit = null, box2d.b2EPCollider.prototype.m_upperLimit = null, box2d.b2EPCollider.prototype.m_radius = 0, box2d.b2EPCollider.prototype.m_front = !1, box2d.b2EPCollider.prototype.Collide = function(a, b, c, d, e) {
    box2d.b2MulTXX(c, e, this.m_xf), box2d.b2MulXV(this.m_xf, d.m_centroid, this.m_centroidB), this.m_v0.Copy(b.m_vertex0), this.m_v1.Copy(b.m_vertex1), this.m_v2.Copy(b.m_vertex2), this.m_v3.Copy(b.m_vertex3);
    var f = b.m_hasVertex0,
        g = b.m_hasVertex3,
        h = box2d.b2SubVV(this.m_v2, this.m_v1, box2d.b2EPCollider.s_edge1);
    h.Normalize(), this.m_normal1.SetXY(h.y, -h.x);
    var i = box2d.b2DotVV(this.m_normal1, box2d.b2SubVV(this.m_centroidB, this.m_v1, box2d.b2Vec2.s_t0)),
        j = 0,
        k = 0,
        l = !1,
        m = !1;
    if (f) {
        var n = box2d.b2SubVV(this.m_v1, this.m_v0, box2d.b2EPCollider.s_edge0);
        n.Normalize(), this.m_normal0.SetXY(n.y, -n.x), l = box2d.b2CrossVV(n, h) >= 0, j = box2d.b2DotVV(this.m_normal0, box2d.b2SubVV(this.m_centroidB, this.m_v0, box2d.b2Vec2.s_t0))
    }
    if (g) {
        var o = box2d.b2SubVV(this.m_v3, this.m_v2, box2d.b2EPCollider.s_edge2);
        o.Normalize(), this.m_normal2.SetXY(o.y, -o.x), m = box2d.b2CrossVV(h, o) > 0, k = box2d.b2DotVV(this.m_normal2, box2d.b2SubVV(this.m_centroidB, this.m_v2, box2d.b2Vec2.s_t0))
    }
    f && g ? l && m ? (this.m_front = j >= 0 || i >= 0 || k >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg())) : l ? (this.m_front = j >= 0 || i >= 0 && k >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg())) : m ? (this.m_front = k >= 0 || j >= 0 && i >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg())) : (this.m_front = j >= 0 && i >= 0 && k >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg())) : f ? l ? (this.m_front = j >= 0 || i >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1).SelfNeg())) : (this.m_front = j >= 0 && i >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal0).SelfNeg())) : g ? m ? (this.m_front = i >= 0 || k >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1))) : (this.m_front = i >= 0 && k >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1))) : (this.m_front = i >= 0, this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1))), this.m_polygonB.count = d.m_count;
    for (var p = 0, q = d.m_count; q > p; ++p) box2d.b2MulXV(this.m_xf, d.m_vertices[p], this.m_polygonB.vertices[p]), box2d.b2MulRV(this.m_xf.q, d.m_normals[p], this.m_polygonB.normals[p]);
    this.m_radius = 2 * box2d.b2_polygonRadius, a.pointCount = 0;
    var r = this.ComputeEdgeSeparation(box2d.b2EPCollider.s_edgeAxis);
    if (r.type !== box2d.b2EPAxisType.e_unknown && !(r.separation > this.m_radius)) {
        var s = this.ComputePolygonSeparation(box2d.b2EPCollider.s_polygonAxis);
        if (!(s.type !== box2d.b2EPAxisType.e_unknown && s.separation > this.m_radius)) {
            var t, u = .98,
                v = .001;
            t = s.type === box2d.b2EPAxisType.e_unknown ? r : s.separation > u * r.separation + v ? s : r;
            var w = box2d.b2EPCollider.s_ie,
                x = box2d.b2EPCollider.s_rf;
            if (t.type === box2d.b2EPAxisType.e_edgeA) {
                a.type = box2d.b2ManifoldType.e_faceA;
                for (var y = 0, z = box2d.b2DotVV(this.m_normal, this.m_polygonB.normals[0]), p = 1, q = this.m_polygonB.count; q > p; ++p) {
                    var A = box2d.b2DotVV(this.m_normal, this.m_polygonB.normals[p]);
                    z > A && (z = A, y = p)
                }
                var B = y,
                    C = (B + 1) % this.m_polygonB.count,
                    D = w[0];
                D.v.Copy(this.m_polygonB.vertices[B]), D.id.cf.indexA = 0, D.id.cf.indexB = B, D.id.cf.typeA = box2d.b2ContactFeatureType.e_face, D.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex;
                var E = w[1];
                E.v.Copy(this.m_polygonB.vertices[C]), E.id.cf.indexA = 0, E.id.cf.indexB = C, E.id.cf.typeA = box2d.b2ContactFeatureType.e_face, E.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex, this.m_front ? (x.i1 = 0, x.i2 = 1, x.v1.Copy(this.m_v1), x.v2.Copy(this.m_v2), x.normal.Copy(this.m_normal1)) : (x.i1 = 1, x.i2 = 0, x.v1.Copy(this.m_v2), x.v2.Copy(this.m_v1), x.normal.Copy(this.m_normal1).SelfNeg())
            } else {
                a.type = box2d.b2ManifoldType.e_faceB;
                var D = w[0];
                D.v.Copy(this.m_v1), D.id.cf.indexA = 0, D.id.cf.indexB = t.index, D.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex, D.id.cf.typeB = box2d.b2ContactFeatureType.e_face;
                var E = w[1];
                E.v.Copy(this.m_v2), E.id.cf.indexA = 0, E.id.cf.indexB = t.index, E.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex, E.id.cf.typeB = box2d.b2ContactFeatureType.e_face, x.i1 = t.index, x.i2 = (x.i1 + 1) % this.m_polygonB.count, x.v1.Copy(this.m_polygonB.vertices[x.i1]), x.v2.Copy(this.m_polygonB.vertices[x.i2]), x.normal.Copy(this.m_polygonB.normals[x.i1])
            }
            x.sideNormal1.SetXY(x.normal.y, -x.normal.x), x.sideNormal2.Copy(x.sideNormal1).SelfNeg(), x.sideOffset1 = box2d.b2DotVV(x.sideNormal1, x.v1), x.sideOffset2 = box2d.b2DotVV(x.sideNormal2, x.v2);
            var F = box2d.b2EPCollider.s_clipPoints1,
                G = box2d.b2EPCollider.s_clipPoints2,
                H = 0;
            if (H = box2d.b2ClipSegmentToLine(F, w, x.sideNormal1, x.sideOffset1, x.i1), !(H < box2d.b2_maxManifoldPoints || (H = box2d.b2ClipSegmentToLine(G, F, x.sideNormal2, x.sideOffset2, x.i2), H < box2d.b2_maxManifoldPoints))) {
                t.type === box2d.b2EPAxisType.e_edgeA ? (a.localNormal.Copy(x.normal), a.localPoint.Copy(x.v1)) : (a.localNormal.Copy(d.m_normals[x.i1]), a.localPoint.Copy(d.m_vertices[x.i1]));
                for (var I = 0, p = 0, q = box2d.b2_maxManifoldPoints; q > p; ++p) {
                    var J;
                    if (J = box2d.b2DotVV(x.normal, box2d.b2SubVV(G[p].v, x.v1, box2d.b2Vec2.s_t0)), J <= this.m_radius) {
                        var K = a.points[I];
                        t.type === box2d.b2EPAxisType.e_edgeA ? (box2d.b2MulTXV(this.m_xf, G[p].v, K.localPoint), K.id = G[p].id) : (K.localPoint.Copy(G[p].v), K.id.cf.typeA = G[p].id.cf.typeB, K.id.cf.typeB = G[p].id.cf.typeA, K.id.cf.indexA = G[p].id.cf.indexB, K.id.cf.indexB = G[p].id.cf.indexA), ++I
                    }
                }
                a.pointCount = I
            }
        }
    }
}, box2d.b2EPCollider.s_edge1 = new box2d.b2Vec2, box2d.b2EPCollider.s_edge0 = new box2d.b2Vec2, box2d.b2EPCollider.s_edge2 = new box2d.b2Vec2, box2d.b2EPCollider.s_ie = box2d.b2ClipVertex.MakeArray(2), box2d.b2EPCollider.s_rf = new box2d.b2ReferenceFace, box2d.b2EPCollider.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2), box2d.b2EPCollider.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2), box2d.b2EPCollider.s_edgeAxis = new box2d.b2EPAxis, box2d.b2EPCollider.s_polygonAxis = new box2d.b2EPAxis, box2d.b2EPCollider.prototype.ComputeEdgeSeparation = function(a) {
    var b = a;
    b.type = box2d.b2EPAxisType.e_edgeA, b.index = this.m_front ? 0 : 1, b.separation = box2d.b2_maxFloat;
    for (var c = 0, d = this.m_polygonB.count; d > c; ++c) {
        var e = box2d.b2DotVV(this.m_normal, box2d.b2SubVV(this.m_polygonB.vertices[c], this.m_v1, box2d.b2Vec2.s_t0));
        e < b.separation && (b.separation = e)
    }
    return b
}, box2d.b2EPCollider.prototype.ComputePolygonSeparation = function(a) {
    var b = a;
    b.type = box2d.b2EPAxisType.e_unknown, b.index = -1, b.separation = -box2d.b2_maxFloat;
    for (var c = box2d.b2EPCollider.s_perp.SetXY(-this.m_normal.y, this.m_normal.x), d = 0, e = this.m_polygonB.count; e > d; ++d) {
        var f = box2d.b2NegV(this.m_polygonB.normals[d], box2d.b2EPCollider.s_n),
            g = box2d.b2DotVV(f, box2d.b2SubVV(this.m_polygonB.vertices[d], this.m_v1, box2d.b2Vec2.s_t0)),
            h = box2d.b2DotVV(f, box2d.b2SubVV(this.m_polygonB.vertices[d], this.m_v2, box2d.b2Vec2.s_t0)),
            i = box2d.b2Min(g, h);
        if (i > this.m_radius) return b.type = box2d.b2EPAxisType.e_edgeB, b.index = d, b.separation = i, b;
        if (box2d.b2DotVV(f, c) >= 0) {
            if (box2d.b2DotVV(box2d.b2SubVV(f, this.m_upperLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) continue
        } else if (box2d.b2DotVV(box2d.b2SubVV(f, this.m_lowerLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) continue;
        i > b.separation && (b.type = box2d.b2EPAxisType.e_edgeB, b.index = d, b.separation = i)
    }
    return b
}, box2d.b2EPCollider.s_n = new box2d.b2Vec2, box2d.b2EPCollider.s_perp = new box2d.b2Vec2, box2d.b2CollideEdgeAndPolygon = function(a, b, c, d, e) {
    var f = box2d.b2CollideEdgeAndPolygon.s_collider;
    f.Collide(a, b, c, d, e)
}, box2d.b2CollideEdgeAndPolygon.s_collider = new box2d.b2EPCollider, goog.provide("box2d.b2EdgeShape"), goog.require("box2d.b2Shape"), box2d.b2EdgeShape = function() {
    goog.base(this, box2d.b2ShapeType.e_edgeShape, box2d.b2_polygonRadius), this.m_vertex1 = new box2d.b2Vec2, this.m_vertex2 = new box2d.b2Vec2, this.m_vertex0 = new box2d.b2Vec2, this.m_vertex3 = new box2d.b2Vec2
}, goog.inherits(box2d.b2EdgeShape, box2d.b2Shape), box2d.b2EdgeShape.prototype.m_vertex1 = null, box2d.b2EdgeShape.prototype.m_vertex2 = null, box2d.b2EdgeShape.prototype.m_vertex0 = null, box2d.b2EdgeShape.prototype.m_vertex3 = null, box2d.b2EdgeShape.prototype.m_hasVertex0 = !1, box2d.b2EdgeShape.prototype.m_hasVertex3 = !1, box2d.b2EdgeShape.prototype.Set = function(a, b) {
    return this.m_vertex1.Copy(a), this.m_vertex2.Copy(b), this.m_hasVertex0 = !1, this.m_hasVertex3 = !1, this
}, box2d.b2EdgeShape.prototype.SetAsEdge = box2d.b2EdgeShape.prototype.Set, box2d.b2EdgeShape.prototype.Clone = function() {
    return (new box2d.b2EdgeShape).Copy(this)
}, box2d.b2EdgeShape.prototype.Copy = function(a) {
    return goog.base(this, "Copy", a), box2d.ENABLE_ASSERTS && box2d.b2Assert(a instanceof box2d.b2EdgeShape), this.m_vertex1.Copy(a.m_vertex1), this.m_vertex2.Copy(a.m_vertex2), this.m_vertex0.Copy(a.m_vertex0), this.m_vertex3.Copy(a.m_vertex3), this.m_hasVertex0 = a.m_hasVertex0, this.m_hasVertex3 = a.m_hasVertex3, this
}, box2d.b2EdgeShape.prototype.GetChildCount = function() {
    return 1
}, box2d.b2EdgeShape.prototype.TestPoint = function() {
    return !1
}, box2d.b2EdgeShape.prototype.RayCast = function(a, b, c) {
    var d = box2d.b2MulTXV(c, b.p1, box2d.b2EdgeShape.prototype.RayCast.s_p1),
        e = box2d.b2MulTXV(c, b.p2, box2d.b2EdgeShape.prototype.RayCast.s_p2),
        f = box2d.b2SubVV(e, d, box2d.b2EdgeShape.prototype.RayCast.s_d),
        g = this.m_vertex1,
        h = this.m_vertex2,
        i = box2d.b2SubVV(h, g, box2d.b2EdgeShape.prototype.RayCast.s_e),
        j = a.normal.SetXY(i.y, -i.x).SelfNormalize(),
        k = box2d.b2DotVV(j, box2d.b2SubVV(g, d, box2d.b2Vec2.s_t0)),
        l = box2d.b2DotVV(j, f);
    if (0 === l) return !1;
    var m = k / l;
    if (0 > m || b.maxFraction < m) return !1;
    var n = box2d.b2AddVMulSV(d, m, f, box2d.b2EdgeShape.prototype.RayCast.s_q),
        o = box2d.b2SubVV(h, g, box2d.b2EdgeShape.prototype.RayCast.s_r),
        p = box2d.b2DotVV(o, o);
    if (0 === p) return !1;
    var q = box2d.b2DotVV(box2d.b2SubVV(n, g, box2d.b2Vec2.s_t0), o) / p;
    return 0 > q || q > 1 ? !1 : (a.fraction = m, box2d.b2MulRV(c.q, a.normal, a.normal), k > 0 && a.normal.SelfNeg(), !0)
}, box2d.b2EdgeShape.prototype.RayCast.s_p1 = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.RayCast.s_p2 = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.RayCast.s_d = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.RayCast.s_e = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.RayCast.s_q = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.RayCast.s_r = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.ComputeAABB = function(a, b) {
    var c = box2d.b2MulXV(b, this.m_vertex1, box2d.b2EdgeShape.prototype.ComputeAABB.s_v1),
        d = box2d.b2MulXV(b, this.m_vertex2, box2d.b2EdgeShape.prototype.ComputeAABB.s_v2);
    box2d.b2MinV(c, d, a.lowerBound), box2d.b2MaxV(c, d, a.upperBound);
    var e = this.m_radius;
    a.lowerBound.SelfSubXY(e, e), a.upperBound.SelfAddXY(e, e)
}, box2d.b2EdgeShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2, box2d.b2EdgeShape.prototype.ComputeMass = function(a) {
    a.mass = 0, box2d.b2MidVV(this.m_vertex1, this.m_vertex2, a.center), a.I = 0
}, box2d.b2EdgeShape.prototype.SetupDistanceProxy = function(a) {
    a.m_vertices = new Array(2), a.m_vertices[0] = this.m_vertex1, a.m_vertices[1] = this.m_vertex2, a.m_count = 2, a.m_radius = this.m_radius
}, box2d.b2EdgeShape.prototype.ComputeSubmergedArea = function(a, b, c, d) {
    return d.SetZero(), 0
}, box2d.b2EdgeShape.prototype.Dump = function() {
    box2d.b2Log("    /*box2d.b2EdgeShape*/ var shape = new box2d.b2EdgeShape();\n"), box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius), box2d.b2Log("    shape.m_vertex0.SetXY(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y), box2d.b2Log("    shape.m_vertex1.SetXY(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y), box2d.b2Log("    shape.m_vertex2.SetXY(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y), box2d.b2Log("    shape.m_vertex3.SetXY(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y), box2d.b2Log("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0), box2d.b2Log("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3)
}, goog.provide("box2d.b2ChainShape"), goog.require("box2d.b2Shape"), goog.require("box2d.b2EdgeShape"), box2d.b2ChainShape = function() {
    goog.base(this, box2d.b2ShapeType.e_chainShape, box2d.b2_polygonRadius), this.m_prevVertex = new box2d.b2Vec2, this.m_nextVertex = new box2d.b2Vec2
}, goog.inherits(box2d.b2ChainShape, box2d.b2Shape), box2d.b2ChainShape.prototype.m_vertices = null, box2d.b2ChainShape.prototype.m_count = 0, box2d.b2ChainShape.prototype.m_prevVertex = null, box2d.b2ChainShape.prototype.m_nextVertex = null, box2d.b2ChainShape.prototype.m_hasPrevVertex = !1, box2d.b2ChainShape.prototype.m_hasNextVertex = !1, box2d.b2ChainShape.prototype.CreateLoop = function(a, b) {
    if (b = b || a.length, box2d.ENABLE_ASSERTS && box2d.b2Assert(null === this.m_vertices && 0 === this.m_count), box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 3), box2d.ENABLE_ASSERTS)
        for (var c = 1; b > c; ++c) {
            var d = a[c - 1],
                e = a[c];
            box2d.b2Assert(box2d.b2DistanceSquaredVV(d, e) > box2d.b2_linearSlop * box2d.b2_linearSlop)
        }
    this.m_count = b + 1, this.m_vertices = box2d.b2Vec2.MakeArray(this.m_count);
    for (var c = 0; b > c; ++c) this.m_vertices[c].Copy(a[c]);
    return this.m_vertices[b].Copy(this.m_vertices[0]), this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]), this.m_nextVertex.Copy(this.m_vertices[1]), this.m_hasPrevVertex = !0, this.m_hasNextVertex = !0, this
}, box2d.b2ChainShape.prototype.CreateChain = function(a, b) {
    if (b = b || a.length, box2d.ENABLE_ASSERTS && box2d.b2Assert(null === this.m_vertices && 0 === this.m_count), box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 2), box2d.ENABLE_ASSERTS)
        for (var c = 1; b > c; ++c) {
            var d = a[c - 1],
                e = a[c];
            box2d.b2Assert(box2d.b2DistanceSquaredVV(d, e) > box2d.b2_linearSlop * box2d.b2_linearSlop)
        }
    this.m_count = b, this.m_vertices = box2d.b2Vec2.MakeArray(b);
    for (var c = 0; b > c; ++c) this.m_vertices[c].Copy(a[c]);
    return this.m_hasPrevVertex = !1, this.m_hasNextVertex = !1, this.m_prevVertex.SetZero(), this.m_nextVertex.SetZero(), this
}, box2d.b2ChainShape.prototype.SetPrevVertex = function(a) {
    return this.m_prevVertex.Copy(a), this.m_hasPrevVertex = !0, this
}, box2d.b2ChainShape.prototype.SetNextVertex = function(a) {
    return this.m_nextVertex.Copy(a), this.m_hasNextVertex = !0, this
}, box2d.b2ChainShape.prototype.Clone = function() {
    return (new box2d.b2ChainShape).Copy(this)
}, box2d.b2ChainShape.prototype.Copy = function(a) {
    return goog.base(this, "Copy", a), box2d.ENABLE_ASSERTS && box2d.b2Assert(a instanceof box2d.b2ChainShape), this.CreateChain(a.m_vertices, a.m_count), this.m_prevVertex.Copy(a.m_prevVertex), this.m_nextVertex.Copy(a.m_nextVertex), this.m_hasPrevVertex = a.m_hasPrevVertex, this.m_hasNextVertex = a.m_hasNextVertex, this
}, box2d.b2ChainShape.prototype.GetChildCount = function() {
    return this.m_count - 1
}, box2d.b2ChainShape.prototype.GetChildEdge = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 0 && b < this.m_count - 1), a.m_type = box2d.b2ShapeType.e_edgeShape, a.m_radius = this.m_radius, a.m_vertex1.Copy(this.m_vertices[b]), a.m_vertex2.Copy(this.m_vertices[b + 1]), b > 0 ? (a.m_vertex0.Copy(this.m_vertices[b - 1]), a.m_hasVertex0 = !0) : (a.m_vertex0.Copy(this.m_prevVertex), a.m_hasVertex0 = this.m_hasPrevVertex), b < this.m_count - 2 ? (a.m_vertex3.Copy(this.m_vertices[b + 2]), a.m_hasVertex3 = !0) : (a.m_vertex3.Copy(this.m_nextVertex), a.m_hasVertex3 = this.m_hasNextVertex)
}, box2d.b2ChainShape.prototype.TestPoint = function() {
    return !1
}, box2d.b2ChainShape.prototype.RayCast = function(a, b, c, d) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d < this.m_count);
    var e = box2d.b2ChainShape.s_edgeShape;
    return e.m_vertex1.Copy(this.m_vertices[d]), e.m_vertex2.Copy(this.m_vertices[(d + 1) % this.m_count]), e.RayCast(a, b, c, 0)
}, box2d.b2ChainShape.s_edgeShape = new box2d.b2EdgeShape, box2d.b2ChainShape.prototype.ComputeAABB = function(a, b, c) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(c < this.m_count);
    var d = this.m_vertices[c],
        e = this.m_vertices[(c + 1) % this.m_count],
        f = box2d.b2MulXV(b, d, box2d.b2ChainShape.prototype.ComputeAABB.s_v1),
        g = box2d.b2MulXV(b, e, box2d.b2ChainShape.prototype.ComputeAABB.s_v2);
    box2d.b2MinV(f, g, a.lowerBound), box2d.b2MaxV(f, g, a.upperBound)
}, box2d.b2ChainShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2, box2d.b2ChainShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2, box2d.b2ChainShape.prototype.ComputeMass = function(a) {
    a.mass = 0, a.center.SetZero(), a.I = 0
}, box2d.b2ChainShape.prototype.SetupDistanceProxy = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(b >= 0 && b < this.m_count), a.m_buffer[0].Copy(this.m_vertices[b]), a.m_buffer[1].Copy(b + 1 < this.m_count ? this.m_vertices[b + 1] : this.m_vertices[0]), a.m_vertices = a.m_buffer, a.m_count = 2, a.m_radius = this.m_radius
}, box2d.b2ChainShape.prototype.ComputeSubmergedArea = function(a, b, c, d) {
    return d.SetZero(), 0
}, box2d.b2ChainShape.prototype.Dump = function() {
    box2d.b2Log("    /*box2d.b2ChainShape*/ var shape = new box2d.b2ChainShape();\n"), box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
    for (var a = 0; a < this.m_count; ++a) box2d.b2Log("    vs[%d].SetXY(%.15f, %.15f);\n", a, this.m_vertices[a].x, this.m_vertices[a].y);
    box2d.b2Log("    shape.CreateChain(vs, %d);\n", this.m_count), box2d.b2Log("    shape.m_prevVertex.SetXY(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y), box2d.b2Log("    shape.m_nextVertex.SetXY(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y), box2d.b2Log("    shape.m_hasPrevVertex = %s;\n", this.m_hasPrevVertex ? "true" : "false"), box2d.b2Log("    shape.m_hasNextVertex = %s;\n", this.m_hasNextVertex ? "true" : "false")
}, goog.provide("box2d.b2ChainAndPolygonContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), goog.require("box2d.b2CollideEdge"), goog.require("box2d.b2ChainShape"), goog.require("box2d.b2PolygonShape"), box2d.b2ChainAndPolygonContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2ChainAndPolygonContact, box2d.b2Contact), box2d.b2ChainAndPolygonContact.Create = function() {
    return new box2d.b2ChainAndPolygonContact
}, box2d.b2ChainAndPolygonContact.Destroy = function() {}, box2d.b2ChainAndPolygonContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.GetType() === box2d.b2ShapeType.e_chainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(c.GetType() === box2d.b2ShapeType.e_polygonShape)
}, box2d.b2ChainAndPolygonContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2ChainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2PolygonShape);
    var f = d instanceof box2d.b2ChainShape ? d : null,
        g = box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge;
    f.GetChildEdge(g, this.m_indexA), box2d.b2CollideEdgeAndPolygon(a, g, b, e instanceof box2d.b2PolygonShape ? e : null, c)
}, box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape, goog.provide("box2d.b2CollidePolygon"), goog.require("box2d.b2Collision"), box2d.b2FindMaxSeparation = function(a, b, c, d, e) {
    for (var f = b.m_count, g = d.m_count, h = b.m_normals, i = b.m_vertices, j = d.m_vertices, k = box2d.b2MulTXX(e, c, box2d.b2FindMaxSeparation.s_xf), l = 0, m = -box2d.b2_maxFloat, n = 0; f > n; ++n) {
        for (var o = box2d.b2MulRV(k.q, h[n], box2d.b2FindMaxSeparation.s_n), p = box2d.b2MulXV(k, i[n], box2d.b2FindMaxSeparation.s_v1), q = box2d.b2_maxFloat, r = 0; g > r; ++r) {
            var s = box2d.b2DotVV(o, box2d.b2SubVV(j[r], p, box2d.b2Vec2.s_t0));
            q > s && (q = s)
        }
        q > m && (m = q, l = n)
    }
    return a[0] = l, m
}, box2d.b2FindMaxSeparation.s_xf = new box2d.b2Transform, box2d.b2FindMaxSeparation.s_n = new box2d.b2Vec2, box2d.b2FindMaxSeparation.s_v1 = new box2d.b2Vec2, box2d.b2FindIncidentEdge = function(a, b, c, d, e, f) {
    var g = b.m_count,
        h = b.m_normals,
        i = e.m_count,
        j = e.m_vertices,
        k = e.m_normals;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d >= 0 && g > d);
    for (var l = box2d.b2MulTRV(f.q, box2d.b2MulRV(c.q, h[d], box2d.b2Vec2.s_t0), box2d.b2FindIncidentEdge.s_normal1), m = 0, n = box2d.b2_maxFloat, o = 0; i > o; ++o) {
        var p = box2d.b2DotVV(l, k[o]);
        n > p && (n = p, m = o)
    }
    var q = m,
        r = (q + 1) % i,
        s = a[0];
    box2d.b2MulXV(f, j[q], s.v);
    var t = s.id.cf;
    t.indexA = d, t.indexB = q, t.typeA = box2d.b2ContactFeatureType.e_face, t.typeB = box2d.b2ContactFeatureType.e_vertex;
    var u = a[1];
    box2d.b2MulXV(f, j[r], u.v);
    var v = u.id.cf;
    v.indexA = d, v.indexB = r, v.typeA = box2d.b2ContactFeatureType.e_face, v.typeB = box2d.b2ContactFeatureType.e_vertex
}, box2d.b2FindIncidentEdge.s_normal1 = new box2d.b2Vec2, box2d.b2CollidePolygons = function(a, b, c, d, e) {
    a.pointCount = 0;
    var f = b.m_radius + d.m_radius,
        g = box2d.b2CollidePolygons.s_edgeA;
    g[0] = 0;
    var h = box2d.b2FindMaxSeparation(g, b, c, d, e);
    if (!(h > f)) {
        var i = box2d.b2CollidePolygons.s_edgeB;
        i[0] = 0;
        var j = box2d.b2FindMaxSeparation(i, d, e, b, c);
        if (!(j > f)) {
            var k, l, m, n, o = 0,
                p = 0,
                q = .98,
                r = .001;
            j > q * h + r ? (k = d, l = b, m = e, n = c, o = i[0], a.type = box2d.b2ManifoldType.e_faceB, p = 1) : (k = b, l = d, m = c, n = e, o = g[0], a.type = box2d.b2ManifoldType.e_faceA, p = 0);
            var s = box2d.b2CollidePolygons.s_incidentEdge;
            box2d.b2FindIncidentEdge(s, k, m, o, l, n);
            var t = k.m_count,
                u = k.m_vertices,
                v = o,
                w = (o + 1) % t,
                x = u[v],
                y = u[w],
                z = box2d.b2SubVV(y, x, box2d.b2CollidePolygons.s_localTangent);
            z.Normalize();
            var A, B = box2d.b2CrossVOne(z, box2d.b2CollidePolygons.s_localNormal),
                C = box2d.b2MidVV(x, y, box2d.b2CollidePolygons.s_planePoint),
                D = box2d.b2MulRV(m.q, z, box2d.b2CollidePolygons.s_tangent),
                E = box2d.b2CrossVOne(D, box2d.b2CollidePolygons.s_normal),
                F = box2d.b2MulXV(m, x, box2d.b2CollidePolygons.s_v11),
                G = box2d.b2MulXV(m, y, box2d.b2CollidePolygons.s_v12),
                H = box2d.b2DotVV(E, F),
                I = -box2d.b2DotVV(D, F) + f,
                J = box2d.b2DotVV(D, G) + f,
                K = box2d.b2CollidePolygons.s_clipPoints1,
                L = box2d.b2CollidePolygons.s_clipPoints2,
                M = box2d.b2NegV(D, box2d.b2CollidePolygons.s_ntangent);
            if (A = box2d.b2ClipSegmentToLine(K, s, M, I, v), !(2 > A || (A = box2d.b2ClipSegmentToLine(L, K, D, J, w), 2 > A))) {
                a.localNormal.Copy(B), a.localPoint.Copy(C);
                for (var N = 0, O = 0; O < box2d.b2_maxManifoldPoints; ++O) {
                    var P = L[O],
                        Q = box2d.b2DotVV(E, P.v) - H;
                    if (f >= Q) {
                        var R = a.points[N];
                        if (box2d.b2MulTXV(n, P.v, R.localPoint), R.id.Copy(P.id), p) {
                            var S = R.id.cf;
                            R.id.cf.indexA = S.indexB, R.id.cf.indexB = S.indexA, R.id.cf.typeA = S.typeB, R.id.cf.typeB = S.typeA
                        }++N
                    }
                }
                a.pointCount = N
            }
        }
    }
}, box2d.b2CollidePolygons.s_incidentEdge = box2d.b2ClipVertex.MakeArray(2), box2d.b2CollidePolygons.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2), box2d.b2CollidePolygons.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2), box2d.b2CollidePolygons.s_edgeA = box2d.b2MakeNumberArray(1), box2d.b2CollidePolygons.s_edgeB = box2d.b2MakeNumberArray(1), box2d.b2CollidePolygons.s_localTangent = new box2d.b2Vec2, box2d.b2CollidePolygons.s_localNormal = new box2d.b2Vec2, box2d.b2CollidePolygons.s_planePoint = new box2d.b2Vec2, box2d.b2CollidePolygons.s_normal = new box2d.b2Vec2, box2d.b2CollidePolygons.s_tangent = new box2d.b2Vec2, box2d.b2CollidePolygons.s_ntangent = new box2d.b2Vec2, box2d.b2CollidePolygons.s_v11 = new box2d.b2Vec2, box2d.b2CollidePolygons.s_v12 = new box2d.b2Vec2, goog.provide("box2d.b2PolygonContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), goog.require("box2d.b2CollidePolygon"), box2d.b2PolygonContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2PolygonContact, box2d.b2Contact), box2d.b2PolygonContact.Create = function() {
    return new box2d.b2PolygonContact
}, box2d.b2PolygonContact.Destroy = function() {}, box2d.b2PolygonContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d)
}, box2d.b2PolygonContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2PolygonShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2PolygonShape), box2d.b2CollidePolygons(a, d instanceof box2d.b2PolygonShape ? d : null, b, e instanceof box2d.b2PolygonShape ? e : null, c)
}, goog.provide("box2d.b2CollideCircle"), goog.require("box2d.b2Collision"), box2d.b2CollideCircles = function(a, b, c, d, e) {
    a.pointCount = 0;
    var f = box2d.b2MulXV(c, b.m_p, box2d.b2CollideCircles.s_pA),
        g = box2d.b2MulXV(e, d.m_p, box2d.b2CollideCircles.s_pB),
        h = box2d.b2DistanceSquaredVV(f, g),
        i = b.m_radius + d.m_radius;
    h > i * i || (a.type = box2d.b2ManifoldType.e_circles, a.localPoint.Copy(b.m_p), a.localNormal.SetZero(), a.pointCount = 1, a.points[0].localPoint.Copy(d.m_p), a.points[0].id.key = 0)
}, box2d.b2CollideCircles.s_pA = new box2d.b2Vec2, box2d.b2CollideCircles.s_pB = new box2d.b2Vec2, box2d.b2CollidePolygonAndCircle = function(a, b, c, d, e) {
    a.pointCount = 0;
    for (var f = box2d.b2MulXV(e, d.m_p, box2d.b2CollidePolygonAndCircle.s_c), g = box2d.b2MulTXV(c, f, box2d.b2CollidePolygonAndCircle.s_cLocal), h = 0, i = -box2d.b2_maxFloat, j = b.m_radius + d.m_radius, k = b.m_count, l = b.m_vertices, m = b.m_normals, n = 0; k > n; ++n) {
        var o = box2d.b2DotVV(m[n], box2d.b2SubVV(g, l[n], box2d.b2Vec2.s_t0));
        if (o > j) return;
        o > i && (i = o, h = n)
    }
    var p = h,
        q = (p + 1) % k,
        r = l[p],
        s = l[q];
    if (i < box2d.b2_epsilon) return a.pointCount = 1, a.type = box2d.b2ManifoldType.e_faceA, a.localNormal.Copy(m[h]), box2d.b2MidVV(r, s, a.localPoint), a.points[0].localPoint.Copy(d.m_p), void(a.points[0].id.key = 0);
    var t = box2d.b2DotVV(box2d.b2SubVV(g, r, box2d.b2Vec2.s_t0), box2d.b2SubVV(s, r, box2d.b2Vec2.s_t1)),
        u = box2d.b2DotVV(box2d.b2SubVV(g, s, box2d.b2Vec2.s_t0), box2d.b2SubVV(r, s, box2d.b2Vec2.s_t1));
    if (0 >= t) {
        if (box2d.b2DistanceSquaredVV(g, r) > j * j) return;
        a.pointCount = 1, a.type = box2d.b2ManifoldType.e_faceA, box2d.b2SubVV(g, r, a.localNormal).SelfNormalize(), a.localPoint.Copy(r), a.points[0].localPoint.Copy(d.m_p), a.points[0].id.key = 0
    } else if (0 >= u) {
        if (box2d.b2DistanceSquaredVV(g, s) > j * j) return;
        a.pointCount = 1, a.type = box2d.b2ManifoldType.e_faceA, box2d.b2SubVV(g, s, a.localNormal).SelfNormalize(), a.localPoint.Copy(s), a.points[0].localPoint.Copy(d.m_p), a.points[0].id.key = 0
    } else {
        var v = box2d.b2MidVV(r, s, box2d.b2CollidePolygonAndCircle.s_faceCenter);
        if (i = box2d.b2DotVV(box2d.b2SubVV(g, v, box2d.b2Vec2.s_t1), m[p]), i > j) return;
        a.pointCount = 1, a.type = box2d.b2ManifoldType.e_faceA, a.localNormal.Copy(m[p]).SelfNormalize(), a.localPoint.Copy(v), a.points[0].localPoint.Copy(d.m_p), a.points[0].id.key = 0
    }
}, box2d.b2CollidePolygonAndCircle.s_c = new box2d.b2Vec2, box2d.b2CollidePolygonAndCircle.s_cLocal = new box2d.b2Vec2, box2d.b2CollidePolygonAndCircle.s_faceCenter = new box2d.b2Vec2, goog.provide("box2d.b2CircleContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), goog.require("box2d.b2CollideCircle"), box2d.b2CircleContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2CircleContact, box2d.b2Contact), box2d.b2CircleContact.Create = function() {
    return new box2d.b2CircleContact
}, box2d.b2CircleContact.Destroy = function() {}, box2d.b2CircleContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d)
}, box2d.b2CircleContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2CircleShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2CircleShape), box2d.b2CollideCircles(a, d instanceof box2d.b2CircleShape ? d : null, b, e instanceof box2d.b2CircleShape ? e : null, c)
}, goog.provide("box2d.b2ChainAndCircleContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), goog.require("box2d.b2CollideEdge"), box2d.b2ChainAndCircleContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2ChainAndCircleContact, box2d.b2Contact), box2d.b2ChainAndCircleContact.Create = function() {
    return new box2d.b2ChainAndCircleContact
}, box2d.b2ChainAndCircleContact.Destroy = function() {}, box2d.b2ChainAndCircleContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.GetType() === box2d.b2ShapeType.e_chainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(c.GetType() === box2d.b2ShapeType.e_circleShape)
}, box2d.b2ChainAndCircleContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2ChainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2CircleShape);
    var f = d instanceof box2d.b2ChainShape ? d : null,
        g = box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge;
    f.GetChildEdge(g, this.m_indexA), box2d.b2CollideEdgeAndCircle(a, g, b, e instanceof box2d.b2CircleShape ? e : null, c)
}, box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape, goog.provide("box2d.b2EdgeAndCircleContact"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), goog.require("box2d.b2CollideEdge"), box2d.b2EdgeAndCircleContact = function() {
    goog.base(this)
}, goog.inherits(box2d.b2EdgeAndCircleContact, box2d.b2Contact), box2d.b2EdgeAndCircleContact.Create = function() {
    return new box2d.b2EdgeAndCircleContact
}, box2d.b2EdgeAndCircleContact.Destroy = function() {}, box2d.b2EdgeAndCircleContact.prototype.Reset = function(a, b, c, d) {
    goog.base(this, "Reset", a, b, c, d), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.GetType() === box2d.b2ShapeType.e_edgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(c.GetType() === box2d.b2ShapeType.e_circleShape)
}, box2d.b2EdgeAndCircleContact.prototype.Evaluate = function(a, b, c) {
    var d = this.m_fixtureA.GetShape(),
        e = this.m_fixtureB.GetShape();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2EdgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2CircleShape), box2d.b2CollideEdgeAndCircle(a, d instanceof box2d.b2EdgeShape ? d : null, b, e instanceof box2d.b2CircleShape ? e : null, c)
}, goog.provide("box2d.b2ContactSolver"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Collision"), goog.require("box2d.b2CircleContact"), goog.require("box2d.b2PolygonAndCircleContact"), goog.require("box2d.b2PolygonContact"), goog.require("box2d.b2EdgeAndCircleContact"), goog.require("box2d.b2EdgeAndPolygonContact"), goog.require("box2d.b2ChainAndCircleContact"), goog.require("box2d.b2ChainAndPolygonContact"), box2d.b2VelocityConstraintPoint = function() {
    this.rA = new box2d.b2Vec2, this.rB = new box2d.b2Vec2
}, box2d.b2VelocityConstraintPoint.prototype.rA = null, box2d.b2VelocityConstraintPoint.prototype.rB = null, box2d.b2VelocityConstraintPoint.prototype.normalImpulse = 0, box2d.b2VelocityConstraintPoint.prototype.tangentImpulse = 0, box2d.b2VelocityConstraintPoint.prototype.normalMass = 0, box2d.b2VelocityConstraintPoint.prototype.tangentMass = 0, box2d.b2VelocityConstraintPoint.prototype.velocityBias = 0, box2d.b2VelocityConstraintPoint.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2VelocityConstraintPoint
    })
}, box2d.b2ContactVelocityConstraint = function() {
    this.points = box2d.b2VelocityConstraintPoint.MakeArray(box2d.b2_maxManifoldPoints), this.normal = new box2d.b2Vec2, this.tangent = new box2d.b2Vec2, this.normalMass = new box2d.b2Mat22, this.K = new box2d.b2Mat22
}, box2d.b2ContactVelocityConstraint.prototype.points = null, box2d.b2ContactVelocityConstraint.prototype.normal = null, box2d.b2ContactVelocityConstraint.prototype.tangent = null, box2d.b2ContactVelocityConstraint.prototype.normalMass = null, box2d.b2ContactVelocityConstraint.prototype.K = null, box2d.b2ContactVelocityConstraint.prototype.indexA = 0, box2d.b2ContactVelocityConstraint.prototype.indexB = 0, box2d.b2ContactVelocityConstraint.prototype.invMassA = 0, box2d.b2ContactVelocityConstraint.prototype.invMassB = 0, box2d.b2ContactVelocityConstraint.prototype.invIA = 0, box2d.b2ContactVelocityConstraint.prototype.invIB = 0, box2d.b2ContactVelocityConstraint.prototype.friction = 0, box2d.b2ContactVelocityConstraint.prototype.restitution = 0, box2d.b2ContactVelocityConstraint.prototype.tangentSpeed = 0, box2d.b2ContactVelocityConstraint.prototype.pointCount = 0, box2d.b2ContactVelocityConstraint.prototype.contactIndex = 0, box2d.b2ContactVelocityConstraint.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2ContactVelocityConstraint
    })
}, box2d.b2ContactPositionConstraint = function() {
    this.localPoints = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints), this.localNormal = new box2d.b2Vec2, this.localPoint = new box2d.b2Vec2, this.localCenterA = new box2d.b2Vec2, this.localCenterB = new box2d.b2Vec2
}, box2d.b2ContactPositionConstraint.prototype.localPoints = null, box2d.b2ContactPositionConstraint.prototype.localNormal = null, box2d.b2ContactPositionConstraint.prototype.localPoint = null, box2d.b2ContactPositionConstraint.prototype.indexA = 0, box2d.b2ContactPositionConstraint.prototype.indexB = 0, box2d.b2ContactPositionConstraint.prototype.invMassA = 0, box2d.b2ContactPositionConstraint.prototype.invMassB = 0, box2d.b2ContactPositionConstraint.prototype.localCenterA = null, box2d.b2ContactPositionConstraint.prototype.localCenterB = null, box2d.b2ContactPositionConstraint.prototype.invIA = 0, box2d.b2ContactPositionConstraint.prototype.invIB = 0, box2d.b2ContactPositionConstraint.prototype.type = box2d.b2ManifoldType.e_unknown, box2d.b2ContactPositionConstraint.prototype.radiusA = 0, box2d.b2ContactPositionConstraint.prototype.radiusB = 0, box2d.b2ContactPositionConstraint.prototype.pointCount = 0, box2d.b2ContactPositionConstraint.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2ContactPositionConstraint
    })
}, box2d.b2ContactSolverDef = function() {
    this.step = new box2d.b2TimeStep
}, box2d.b2ContactSolverDef.prototype.step = null, box2d.b2ContactSolverDef.prototype.contacts = null, box2d.b2ContactSolverDef.prototype.count = 0, box2d.b2ContactSolverDef.prototype.positions = null, box2d.b2ContactSolverDef.prototype.velocities = null, box2d.b2ContactSolverDef.prototype.allocator = null, box2d.b2ContactSolver = function() {
    this.m_step = new box2d.b2TimeStep, this.m_positionConstraints = box2d.b2ContactPositionConstraint.MakeArray(1024), this.m_velocityConstraints = box2d.b2ContactVelocityConstraint.MakeArray(1024)
}, box2d.b2ContactSolver.prototype.m_step = null, box2d.b2ContactSolver.prototype.m_positions = null, box2d.b2ContactSolver.prototype.m_velocities = null, box2d.b2ContactSolver.prototype.m_allocator = null, box2d.b2ContactSolver.prototype.m_positionConstraints = null, box2d.b2ContactSolver.prototype.m_velocityConstraints = null, box2d.b2ContactSolver.prototype.m_contacts = null, box2d.b2ContactSolver.prototype.m_count = 0, box2d.b2ContactSolver.prototype.Initialize = function(a) {
    if (this.m_step.Copy(a.step), this.m_allocator = a.allocator, this.m_count = a.count, this.m_positionConstraints.length < this.m_count) {
        var b = box2d.b2Max(2 * this.m_positionConstraints.length, this.m_count);
        for (box2d.DEBUG && window.console.log("box2d.b2ContactSolver.m_positionConstraints: " + b); this.m_positionConstraints.length < b;) this.m_positionConstraints[this.m_positionConstraints.length] = new box2d.b2ContactPositionConstraint
    }
    if (this.m_velocityConstraints.length < this.m_count) {
        var b = box2d.b2Max(2 * this.m_velocityConstraints.length, this.m_count);
        for (box2d.DEBUG && window.console.log("box2d.b2ContactSolver.m_velocityConstraints: " + b); this.m_velocityConstraints.length < b;) this.m_velocityConstraints[this.m_velocityConstraints.length] = new box2d.b2ContactVelocityConstraint
    }
    this.m_positions = a.positions, this.m_velocities = a.velocities, this.m_contacts = a.contacts;
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
    for (c = 0, d = this.m_count; d > c; ++c)
        for (g = this.m_contacts[c], h = g.m_fixtureA, i = g.m_fixtureB, j = h.GetShape(), k = i.GetShape(), l = j.m_radius, m = k.m_radius, n = h.GetBody(), o = i.GetBody(), p = g.GetManifold(), q = p.pointCount, box2d.ENABLE_ASSERTS && box2d.b2Assert(q > 0), r = this.m_velocityConstraints[c], r.friction = g.m_friction, r.restitution = g.m_restitution, r.tangentSpeed = g.m_tangentSpeed, r.indexA = n.m_islandIndex, r.indexB = o.m_islandIndex, r.invMassA = n.m_invMass, r.invMassB = o.m_invMass, r.invIA = n.m_invI, r.invIB = o.m_invI, r.contactIndex = c, r.pointCount = q, r.K.SetZero(), r.normalMass.SetZero(), s = this.m_positionConstraints[c], s.indexA = n.m_islandIndex, s.indexB = o.m_islandIndex, s.invMassA = n.m_invMass, s.invMassB = o.m_invMass, s.localCenterA.Copy(n.m_sweep.localCenter), s.localCenterB.Copy(o.m_sweep.localCenter), s.invIA = n.m_invI, s.invIB = o.m_invI, s.localNormal.Copy(p.localNormal), s.localPoint.Copy(p.localPoint), s.pointCount = q, s.radiusA = l, s.radiusB = m, s.type = p.type, e = 0, f = q; f > e; ++e) t = p.points[e], u = r.points[e], this.m_step.warmStarting ? (u.normalImpulse = this.m_step.dtRatio * t.normalImpulse, u.tangentImpulse = this.m_step.dtRatio * t.tangentImpulse) : (u.normalImpulse = 0, u.tangentImpulse = 0), u.rA.SetZero(), u.rB.SetZero(), u.normalMass = 0, u.tangentMass = 0, u.velocityBias = 0, s.localPoints[e].Copy(t.localPoint);
    return this
}, box2d.b2ContactSolver.prototype.InitializeVelocityConstraints = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA,
        T = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB,
        U = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold,
        V = 1e3;
    for (a = 0, b = this.m_count; b > a; ++a) {
        for (e = this.m_velocityConstraints[a], f = this.m_positionConstraints[a], g = f.radiusA, h = f.radiusB, i = this.m_contacts[e.contactIndex].GetManifold(), j = e.indexA, k = e.indexB, l = e.invMassA, m = e.invMassB, n = e.invIA, o = e.invIB, p = f.localCenterA, q = f.localCenterB, r = this.m_positions[j].c, s = this.m_positions[j].a, t = this.m_velocities[j].v, u = this.m_velocities[j].w, v = this.m_positions[k].c, w = this.m_positions[k].a, x = this.m_velocities[k].v, y = this.m_velocities[k].w, box2d.ENABLE_ASSERTS && box2d.b2Assert(i.pointCount > 0), S.q.SetAngleRadians(s), T.q.SetAngleRadians(w), box2d.b2SubVV(r, box2d.b2MulRV(S.q, p, box2d.b2Vec2.s_t0), S.p), box2d.b2SubVV(v, box2d.b2MulRV(T.q, q, box2d.b2Vec2.s_t0), T.p), U.Initialize(i, S, g, T, h), e.normal.Copy(U.normal), box2d.b2CrossVOne(e.normal, e.tangent), z = e.pointCount, c = 0, d = z; d > c; ++c) A = e.points[c], box2d.b2SubVV(U.points[c], r, A.rA), box2d.b2SubVV(U.points[c], v, A.rB), B = box2d.b2CrossVV(A.rA, e.normal), C = box2d.b2CrossVV(A.rB, e.normal), D = l + m + n * B * B + o * C * C, A.normalMass = D > 0 ? 1 / D : 0, E = e.tangent, F = box2d.b2CrossVV(A.rA, E), G = box2d.b2CrossVV(A.rB, E), H = l + m + n * F * F + o * G * G, A.tangentMass = H > 0 ? 1 / H : 0, A.velocityBias = 0, I = box2d.b2DotVV(e.normal, box2d.b2SubVV(box2d.b2AddVCrossSV(x, y, A.rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(t, u, A.rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0)), I < -box2d.b2_velocityThreshold && (A.velocityBias += -e.restitution * I);
        2 === e.pointCount && (J = e.points[0], K = e.points[1], L = box2d.b2CrossVV(J.rA, e.normal), M = box2d.b2CrossVV(J.rB, e.normal), N = box2d.b2CrossVV(K.rA, e.normal), O = box2d.b2CrossVV(K.rB, e.normal), P = l + m + n * L * L + o * M * M, Q = l + m + n * N * N + o * O * O, R = l + m + n * L * N + o * M * O, V * (P * Q - R * R) > P * P ? (e.K.ex.SetXY(P, R), e.K.ey.SetXY(R, Q), e.K.GetInverse(e.normalMass)) : e.pointCount = 1)
    }
}, box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA = new box2d.b2Transform, box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB = new box2d.b2Transform, box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold = new box2d.b2WorldManifold, box2d.b2ContactSolver.prototype.WarmStart = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = box2d.b2ContactSolver.prototype.WarmStart.s_P;
    for (a = 0, b = this.m_count; b > a; ++a) {
        for (e = this.m_velocityConstraints[a], f = e.indexA, g = e.indexB, h = e.invMassA, i = e.invIA, j = e.invMassB, k = e.invIB, l = e.pointCount, m = this.m_velocities[f].v, n = this.m_velocities[f].w, o = this.m_velocities[g].v, p = this.m_velocities[g].w, q = e.normal, r = e.tangent, c = 0, d = l; d > c; ++c) s = e.points[c], box2d.b2AddVV(box2d.b2MulSV(s.normalImpulse, q, box2d.b2Vec2.s_t0), box2d.b2MulSV(s.tangentImpulse, r, box2d.b2Vec2.s_t1), t), n -= i * box2d.b2CrossVV(s.rA, t), m.SelfMulSub(h, t), p += k * box2d.b2CrossVV(s.rB, t), o.SelfMulAdd(j, t);
        this.m_velocities[f].w = n, this.m_velocities[g].w = p
    }
}, box2d.b2ContactSolver.prototype.WarmStart.s_P = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv,
        E = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1,
        F = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2,
        G = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P,
        H = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a,
        I = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b,
        J = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x,
        K = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d,
        L = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1,
        M = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2,
        N = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2;
    for (a = 0, b = this.m_count; b > a; ++a) {
        for (e = this.m_velocityConstraints[a], f = e.indexA, g = e.indexB, h = e.invMassA, i = e.invIA, j = e.invMassB, k = e.invIB, l = e.pointCount, m = this.m_velocities[f].v, n = this.m_velocities[f].w, o = this.m_velocities[g].v, p = this.m_velocities[g].w, q = e.normal, r = e.tangent, s = e.friction, box2d.ENABLE_ASSERTS && box2d.b2Assert(1 === l || 2 === l), c = 0, d = l; d > c; ++c) t = e.points[c], box2d.b2SubVV(box2d.b2AddVCrossSV(o, p, t.rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(m, n, t.rA, box2d.b2Vec2.s_t1), D), u = box2d.b2DotVV(D, r) - e.tangentSpeed, w = t.tangentMass * -u, x = s * t.normalImpulse, y = box2d.b2Clamp(t.tangentImpulse + w, -x, x), w = y - t.tangentImpulse, t.tangentImpulse = y, box2d.b2MulSV(w, r, G), m.SelfMulSub(h, G), n -= i * box2d.b2CrossVV(t.rA, G), o.SelfMulAdd(j, G), p += k * box2d.b2CrossVV(t.rB, G);
        if (1 === e.pointCount) t = e.points[0], box2d.b2SubVV(box2d.b2AddVCrossSV(o, p, t.rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(m, n, t.rA, box2d.b2Vec2.s_t1), D), v = box2d.b2DotVV(D, q), w = -t.normalMass * (v - t.velocityBias), y = box2d.b2Max(t.normalImpulse + w, 0), w = y - t.normalImpulse, t.normalImpulse = y, box2d.b2MulSV(w, q, G), m.SelfMulSub(h, G), n -= i * box2d.b2CrossVV(t.rA, G), o.SelfMulAdd(j, G), p += k * box2d.b2CrossVV(t.rB, G);
        else
            for (z = e.points[0], A = e.points[1], H.SetXY(z.normalImpulse, A.normalImpulse), box2d.ENABLE_ASSERTS && box2d.b2Assert(H.x >= 0 && H.y >= 0), box2d.b2SubVV(box2d.b2AddVCrossSV(o, p, z.rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(m, n, z.rA, box2d.b2Vec2.s_t1), E), box2d.b2SubVV(box2d.b2AddVCrossSV(o, p, A.rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(m, n, A.rA, box2d.b2Vec2.s_t1), F), B = box2d.b2DotVV(E, q), C = box2d.b2DotVV(F, q), I.x = B - z.velocityBias, I.y = C - A.velocityBias, I.SelfSub(box2d.b2MulMV(e.K, H, box2d.b2Vec2.s_t0));;) {
                if (box2d.b2MulMV(e.normalMass, I, J).SelfNeg(), J.x >= 0 && J.y >= 0) {
                    box2d.b2SubVV(J, H, K), box2d.b2MulSV(K.x, q, L), box2d.b2MulSV(K.y, q, M), box2d.b2AddVV(L, M, N), m.SelfMulSub(h, N), n -= i * (box2d.b2CrossVV(z.rA, L) + box2d.b2CrossVV(A.rA, M)), o.SelfMulAdd(j, N), p += k * (box2d.b2CrossVV(z.rB, L) + box2d.b2CrossVV(A.rB, M)), z.normalImpulse = J.x, A.normalImpulse = J.y;
                    break
                }
                if (J.x = -z.normalMass * I.x, J.y = 0, B = 0, C = e.K.ex.y * J.x + I.y, J.x >= 0 && C >= 0) {
                    box2d.b2SubVV(J, H, K), box2d.b2MulSV(K.x, q, L), box2d.b2MulSV(K.y, q, M), box2d.b2AddVV(L, M, N), m.SelfMulSub(h, N), n -= i * (box2d.b2CrossVV(z.rA, L) + box2d.b2CrossVV(A.rA, M)), o.SelfMulAdd(j, N), p += k * (box2d.b2CrossVV(z.rB, L) + box2d.b2CrossVV(A.rB, M)), z.normalImpulse = J.x, A.normalImpulse = J.y;
                    break
                }
                if (J.x = 0, J.y = -A.normalMass * I.y, B = e.K.ey.x * J.y + I.x, C = 0, J.y >= 0 && B >= 0) {
                    box2d.b2SubVV(J, H, K), box2d.b2MulSV(K.x, q, L), box2d.b2MulSV(K.y, q, M), box2d.b2AddVV(L, M, N), m.SelfMulSub(h, N), n -= i * (box2d.b2CrossVV(z.rA, L) + box2d.b2CrossVV(A.rA, M)), o.SelfMulAdd(j, N), p += k * (box2d.b2CrossVV(z.rB, L) + box2d.b2CrossVV(A.rB, M)), z.normalImpulse = J.x, A.normalImpulse = J.y;
                    break
                }
                if (J.x = 0, J.y = 0, B = I.x, C = I.y, B >= 0 && C >= 0) {
                    box2d.b2SubVV(J, H, K), box2d.b2MulSV(K.x, q, L), box2d.b2MulSV(K.y, q, M), box2d.b2AddVV(L, M, N), m.SelfMulSub(h, N), n -= i * (box2d.b2CrossVV(z.rA, L) + box2d.b2CrossVV(A.rA, M)), o.SelfMulAdd(j, N), p += k * (box2d.b2CrossVV(z.rB, L) + box2d.b2CrossVV(A.rB, M)), z.normalImpulse = J.x, A.normalImpulse = J.y;
                    break
                }
                break
            }
        this.m_velocities[f].w = n, this.m_velocities[g].w = p
    }
}, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1 = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2 = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1 = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2 = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2 = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.StoreImpulses = function() {
    var a, b, c, d, e, f;
    for (a = 0, b = this.m_count; b > a; ++a)
        for (e = this.m_velocityConstraints[a], f = this.m_contacts[e.contactIndex].GetManifold(), c = 0, d = e.pointCount; d > c; ++c) f.points[c].normalImpulse = e.points[c].normalImpulse, f.points[c].tangentImpulse = e.points[c].tangentImpulse
}, box2d.b2PositionSolverManifold = function() {
    this.normal = new box2d.b2Vec2, this.point = new box2d.b2Vec2
}, box2d.b2PositionSolverManifold.prototype.normal = null, box2d.b2PositionSolverManifold.prototype.point = null, box2d.b2PositionSolverManifold.prototype.separation = 0, box2d.b2PositionSolverManifold.prototype.Initialize = function(a, b, c, d) {
    var e = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA,
        f = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB,
        g = box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint,
        h = box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint;
    switch (box2d.ENABLE_ASSERTS && box2d.b2Assert(a.pointCount > 0), a.type) {
        case box2d.b2ManifoldType.e_circles:
            box2d.b2MulXV(b, a.localPoint, e), box2d.b2MulXV(c, a.localPoints[0], f), box2d.b2SubVV(f, e, this.normal).SelfNormalize(), box2d.b2MidVV(e, f, this.point), this.separation = box2d.b2DotVV(box2d.b2SubVV(f, e, box2d.b2Vec2.s_t0), this.normal) - a.radiusA - a.radiusB;
            break;
        case box2d.b2ManifoldType.e_faceA:
            box2d.b2MulRV(b.q, a.localNormal, this.normal), box2d.b2MulXV(b, a.localPoint, g), box2d.b2MulXV(c, a.localPoints[d], h), this.separation = box2d.b2DotVV(box2d.b2SubVV(h, g, box2d.b2Vec2.s_t0), this.normal) - a.radiusA - a.radiusB, this.point.Copy(h);
            break;
        case box2d.b2ManifoldType.e_faceB:
            box2d.b2MulRV(c.q, a.localNormal, this.normal), box2d.b2MulXV(c, a.localPoint, g), box2d.b2MulXV(b, a.localPoints[d], h), this.separation = box2d.b2DotVV(box2d.b2SubVV(h, g, box2d.b2Vec2.s_t0), this.normal) - a.radiusA - a.radiusB, this.point.Copy(h), this.normal.SelfNeg()
    }
}, box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2, box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2, box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2, box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolvePositionConstraints = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA,
        B = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB,
        C = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm,
        D = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA,
        E = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB,
        F = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P,
        G = 0;
    for (a = 0, b = this.m_count; b > a; ++a) {
        for (e = this.m_positionConstraints[a], f = e.indexA, g = e.indexB, h = e.localCenterA, i = e.invMassA, j = e.invIA, k = e.localCenterB, l = e.invMassB, m = e.invIB, n = e.pointCount, o = this.m_positions[f].c, p = this.m_positions[f].a, q = this.m_positions[g].c, r = this.m_positions[g].a, c = 0, d = n; d > c; ++c) A.q.SetAngleRadians(p), B.q.SetAngleRadians(r), box2d.b2SubVV(o, box2d.b2MulRV(A.q, h, box2d.b2Vec2.s_t0), A.p), box2d.b2SubVV(q, box2d.b2MulRV(B.q, k, box2d.b2Vec2.s_t0), B.p), C.Initialize(e, A, B, c), s = C.normal, t = C.point, u = C.separation, box2d.b2SubVV(t, o, D), box2d.b2SubVV(t, q, E), G = box2d.b2Min(G, u), v = box2d.b2Clamp(box2d.b2_baumgarte * (u + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0), w = box2d.b2CrossVV(D, s), x = box2d.b2CrossVV(E, s), y = i + l + j * w * w + m * x * x, z = y > 0 ? -v / y : 0, box2d.b2MulSV(z, s, F), o.SelfMulSub(i, F), p -= j * box2d.b2CrossVV(D, F), q.SelfMulAdd(l, F), r += m * box2d.b2CrossVV(E, F);
        this.m_positions[f].a = p, this.m_positions[g].a = r
    }
    return G > -3 * box2d.b2_linearSlop
}, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA = new box2d.b2Transform, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB = new box2d.b2Transform, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm = new box2d.b2PositionSolverManifold, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints = function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA,
        D = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB,
        E = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm,
        F = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA,
        G = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB,
        H = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P,
        I = 0;
    for (c = 0, d = this.m_count; d > c; ++c) {
        for (g = this.m_positionConstraints[c], h = g.indexA, i = g.indexB, j = g.localCenterA, k = g.localCenterB, l = g.pointCount, m = 0, n = 0, (h === a || h === b) && (m = g.invMassA, n = g.invIA), o = 0, p = 0, (i === a || i === b) && (o = g.invMassB, p = g.invIB), q = this.m_positions[h].c, r = this.m_positions[h].a, s = this.m_positions[i].c, t = this.m_positions[i].a, e = 0, f = l; f > e; ++e) C.q.SetAngleRadians(r), D.q.SetAngleRadians(t), box2d.b2SubVV(q, box2d.b2MulRV(C.q, j, box2d.b2Vec2.s_t0), C.p), box2d.b2SubVV(s, box2d.b2MulRV(D.q, k, box2d.b2Vec2.s_t0), D.p), E.Initialize(g, C, D, e), u = E.normal, v = E.point, w = E.separation, box2d.b2SubVV(v, q, F), box2d.b2SubVV(v, s, G), I = box2d.b2Min(I, w), x = box2d.b2Clamp(box2d.b2_toiBaumgarte * (w + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0), y = box2d.b2CrossVV(F, u), z = box2d.b2CrossVV(G, u), A = m + o + n * y * y + p * z * z, B = A > 0 ? -x / A : 0, box2d.b2MulSV(B, u, H), q.SelfMulSub(m, H), r -= n * box2d.b2CrossVV(F, H), s.SelfMulAdd(o, H), t += p * box2d.b2CrossVV(G, H);
        this.m_positions[h].a = r, this.m_positions[i].a = t
    }
    return I >= -1.5 * box2d.b2_linearSlop
}, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA = new box2d.b2Transform, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB = new box2d.b2Transform, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm = new box2d.b2PositionSolverManifold, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB = new box2d.b2Vec2, box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P = new box2d.b2Vec2, goog.provide("box2d.b2WorldCallbacks"), goog.require("box2d.b2Settings"), box2d.b2DestructionListener = function() {}, box2d.b2DestructionListener.prototype.SayGoodbyeJoint = function() {}, box2d.b2DestructionListener.prototype.SayGoodbyeFixture = function() {}, box2d.b2ContactFilter = function() {}, box2d.b2ContactFilter.prototype.ShouldCollide = function(a, b) {
    var c = a.GetFilterData(),
        d = b.GetFilterData();
    if (c.groupIndex === d.groupIndex && 0 !== c.groupIndex) return c.groupIndex > 0;
    var e = 0 !== (c.maskBits & d.categoryBits) && 0 !== (c.categoryBits & d.maskBits);
    return e
}, box2d.b2ContactFilter.b2_defaultFilter = new box2d.b2ContactFilter, box2d.b2ContactImpulse = function() {
    this.normalImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints), this.tangentImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints)
}, box2d.b2ContactImpulse.prototype.normalImpulses = null, box2d.b2ContactImpulse.prototype.tangentImpulses = null, box2d.b2ContactImpulse.prototype.count = 0, box2d.b2ContactListener = function() {}, box2d.b2ContactListener.prototype.BeginContact = function() {}, box2d.b2ContactListener.prototype.EndContact = function() {}, box2d.b2ContactListener.prototype.PreSolve = function() {}, box2d.b2ContactListener.prototype.PostSolve = function() {}, box2d.b2ContactListener.b2_defaultListener = new box2d.b2ContactListener, box2d.b2QueryCallback = function() {}, box2d.b2QueryCallback.prototype.ReportFixture = function() {
    return !0
}, box2d.b2RayCastCallback = function() {}, box2d.b2RayCastCallback.prototype.ReportFixture = function(a, b, c, d) {
    return d
}, goog.provide("box2d.b2Island"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Timer"), goog.require("box2d.b2TimeStep"), goog.require("box2d.b2WorldCallbacks"), goog.require("box2d.b2ContactSolver"), box2d.b2Island = function() {
    this.m_bodies = new Array(1024), this.m_contacts = new Array(1024), this.m_joints = new Array(1024), this.m_positions = box2d.b2Position.MakeArray(1024), this.m_velocities = box2d.b2Velocity.MakeArray(1024)
}, box2d.b2Island.prototype.m_allocator = null, box2d.b2Island.prototype.m_listener = null, box2d.b2Island.prototype.m_bodies = null, box2d.b2Island.prototype.m_contacts = null, box2d.b2Island.prototype.m_joints = null, box2d.b2Island.prototype.m_positions = null, box2d.b2Island.prototype.m_velocities = null, box2d.b2Island.prototype.m_bodyCount = 0, box2d.b2Island.prototype.m_jointCount = 0, box2d.b2Island.prototype.m_contactCount = 0, box2d.b2Island.prototype.m_bodyCapacity = 0, box2d.b2Island.prototype.m_contactCapacity = 0, box2d.b2Island.prototype.m_jointCapacity = 0, box2d.b2Island.prototype.Initialize = function(a, b, c, d, e) {
    for (this.m_bodyCapacity = a, this.m_contactCapacity = b, this.m_jointCapacity = c, this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0, this.m_allocator = d, this.m_listener = e; this.m_bodies.length < a;) this.m_bodies[this.m_bodies.length] = null;
    for (; this.m_contacts.length < b;) this.m_contacts[this.m_contacts.length] = null;
    for (; this.m_joints.length < c;) this.m_joints[this.m_joints.length] = null;
    if (this.m_positions.length < a) {
        var f = box2d.b2Max(2 * this.m_positions.length, a);
        for (box2d.DEBUG && window.console.log("box2d.b2Island.m_positions: " + f); this.m_positions.length < f;) this.m_positions[this.m_positions.length] = new box2d.b2Position
    }
    if (this.m_velocities.length < a) {
        var f = box2d.b2Max(2 * this.m_velocities.length, a);
        for (box2d.DEBUG && window.console.log("box2d.b2Island.m_velocities: " + f); this.m_velocities.length < f;) this.m_velocities[this.m_velocities.length] = new box2d.b2Velocity
    }
}, box2d.b2Island.prototype.Clear = function() {
    this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0
}, box2d.b2Island.prototype.AddBody = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_bodyCount < this.m_bodyCapacity), a.m_islandIndex = this.m_bodyCount, this.m_bodies[this.m_bodyCount++] = a
}, box2d.b2Island.prototype.AddContact = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_contactCount < this.m_contactCapacity), this.m_contacts[this.m_contactCount++] = a
}, box2d.b2Island.prototype.AddJoint = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_jointCount < this.m_jointCapacity), this.m_joints[this.m_jointCount++] = a
}, box2d.b2Island.prototype.Solve = function(a, b, c, d) {
    for (var e = box2d.b2Island.s_timer.Reset(), f = b.dt, g = 0; g < this.m_bodyCount; ++g) {
        var h = this.m_bodies[g],
            i = this.m_positions[g].c.Copy(h.m_sweep.c),
            j = h.m_sweep.a,
            k = this.m_velocities[g].v.Copy(h.m_linearVelocity),
            l = h.m_angularVelocity;
        h.m_sweep.c0.Copy(h.m_sweep.c), h.m_sweep.a0 = h.m_sweep.a, h.m_type === box2d.b2BodyType.b2_dynamicBody && (k.x += f * (h.m_gravityScale * c.x + h.m_invMass * h.m_force.x), k.y += f * (h.m_gravityScale * c.y + h.m_invMass * h.m_force.y), l += f * h.m_invI * h.m_torque, k.SelfMul(1 / (1 + f * h.m_linearDamping)), l *= 1 / (1 + f * h.m_angularDamping)), this.m_positions[g].a = j, this.m_velocities[g].w = l
    }
    e.Reset();
    var m = box2d.b2Island.s_solverData;
    m.step.Copy(b), m.positions = this.m_positions, m.velocities = this.m_velocities;
    var n = box2d.b2Island.s_contactSolverDef;
    n.step.Copy(b), n.contacts = this.m_contacts, n.count = this.m_contactCount, n.positions = this.m_positions, n.velocities = this.m_velocities, n.allocator = this.m_allocator;
    var o = box2d.b2Island.s_contactSolver.Initialize(n);
    o.InitializeVelocityConstraints(), b.warmStarting && o.WarmStart();
    for (var g = 0; g < this.m_jointCount; ++g) this.m_joints[g].InitVelocityConstraints(m);
    a.solveInit = e.GetMilliseconds(), e.Reset();
    for (var g = 0; g < b.velocityIterations; ++g) {
        for (var p = 0; p < this.m_jointCount; ++p) this.m_joints[p].SolveVelocityConstraints(m);
        o.SolveVelocityConstraints()
    }
    o.StoreImpulses(), a.solveVelocity = e.GetMilliseconds();
    for (var g = 0; g < this.m_bodyCount; ++g) {
        var i = this.m_positions[g].c,
            j = this.m_positions[g].a,
            k = this.m_velocities[g].v,
            l = this.m_velocities[g].w,
            q = box2d.b2MulSV(f, k, box2d.b2Island.s_translation);
        if (box2d.b2DotVV(q, q) > box2d.b2_maxTranslationSquared) {
            var r = box2d.b2_maxTranslation / q.GetLength();
            k.SelfMul(r)
        }
        var s = f * l;
        if (s * s > box2d.b2_maxRotationSquared) {
            var r = box2d.b2_maxRotation / box2d.b2Abs(s);
            l *= r
        }
        i.x += f * k.x, i.y += f * k.y, j += f * l, this.m_positions[g].a = j, this.m_velocities[g].w = l
    }
    e.Reset();
    for (var t = !1, g = 0; g < b.positionIterations; ++g) {
        for (var u = o.SolvePositionConstraints(), v = !0, p = 0; p < this.m_jointCount; ++p) {
            var w = this.m_joints[p].SolvePositionConstraints(m);
            v = v && w
        }
        if (u && v) {
            t = !0;
            break
        }
    }
    for (var g = 0; g < this.m_bodyCount; ++g) {
        var x = this.m_bodies[g];
        x.m_sweep.c.Copy(this.m_positions[g].c), x.m_sweep.a = this.m_positions[g].a, x.m_linearVelocity.Copy(this.m_velocities[g].v), x.m_angularVelocity = this.m_velocities[g].w, x.SynchronizeTransform()
    }
    if (a.solvePosition = e.GetMilliseconds(), this.Report(o.m_velocityConstraints), d) {
        for (var y = box2d.b2_maxFloat, z = box2d.b2_linearSleepTolerance * box2d.b2_linearSleepTolerance, A = box2d.b2_angularSleepTolerance * box2d.b2_angularSleepTolerance, g = 0; g < this.m_bodyCount; ++g) {
            var h = this.m_bodies[g];
            h.GetType() !== box2d.b2BodyType.b2_staticBody && (0 === (h.m_flags & box2d.b2BodyFlag.e_autoSleepFlag) || h.m_angularVelocity * h.m_angularVelocity > A || box2d.b2DotVV(h.m_linearVelocity, h.m_linearVelocity) > z ? (h.m_sleepTime = 0, y = 0) : (h.m_sleepTime += f, y = box2d.b2Min(y, h.m_sleepTime)))
        }
        if (y >= box2d.b2_timeToSleep && t)
            for (var g = 0; g < this.m_bodyCount; ++g) {
                var h = this.m_bodies[g];
                h.SetAwake(!1)
            }
    }
}, box2d.b2Island.prototype.SolveTOI = function(a, b, c) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(b < this.m_bodyCount), box2d.ENABLE_ASSERTS && box2d.b2Assert(c < this.m_bodyCount);
    for (var d = 0; d < this.m_bodyCount; ++d) {
        var e = this.m_bodies[d];
        this.m_positions[d].c.Copy(e.m_sweep.c), this.m_positions[d].a = e.m_sweep.a, this.m_velocities[d].v.Copy(e.m_linearVelocity), this.m_velocities[d].w = e.m_angularVelocity
    }
    var f = box2d.b2Island.s_contactSolverDef;
    f.contacts = this.m_contacts, f.count = this.m_contactCount, f.allocator = this.m_allocator, f.step.Copy(a), f.positions = this.m_positions, f.velocities = this.m_velocities;
    for (var g = box2d.b2Island.s_contactSolver.Initialize(f), d = 0; d < a.positionIterations; ++d) {
        var h = g.SolveTOIPositionConstraints(b, c);
        if (h) break
    }
    this.m_bodies[b].m_sweep.c0.Copy(this.m_positions[b].c), this.m_bodies[b].m_sweep.a0 = this.m_positions[b].a, this.m_bodies[c].m_sweep.c0.Copy(this.m_positions[c].c), this.m_bodies[c].m_sweep.a0 = this.m_positions[c].a, g.InitializeVelocityConstraints();
    for (var d = 0; d < a.velocityIterations; ++d) g.SolveVelocityConstraints();
    for (var i = a.dt, d = 0; d < this.m_bodyCount; ++d) {
        var j = this.m_positions[d].c,
            k = this.m_positions[d].a,
            l = this.m_velocities[d].v,
            m = this.m_velocities[d].w,
            n = box2d.b2MulSV(i, l, box2d.b2Island.s_translation);
        if (box2d.b2DotVV(n, n) > box2d.b2_maxTranslationSquared) {
            var o = box2d.b2_maxTranslation / n.GetLength();
            l.SelfMul(o)
        }
        var p = i * m;
        if (p * p > box2d.b2_maxRotationSquared) {
            var o = box2d.b2_maxRotation / box2d.b2Abs(p);
            m *= o
        }
        j.SelfMulAdd(i, l), k += i * m, this.m_positions[d].a = k, this.m_velocities[d].w = m;
        var q = this.m_bodies[d];
        q.m_sweep.c.Copy(j), q.m_sweep.a = k, q.m_linearVelocity.Copy(l), q.m_angularVelocity = m, q.SynchronizeTransform()
    }
    this.Report(g.m_velocityConstraints)
}, box2d.b2Island.prototype.Report = function(a) {
    if (null !== this.m_listener)
        for (var b = 0; b < this.m_contactCount; ++b) {
            var c = this.m_contacts[b];
            if (c) {
                var d = a[b],
                    e = box2d.b2Island.s_impulse;
                e.count = d.pointCount;
                for (var f = 0; f < d.pointCount; ++f) e.normalImpulses[f] = d.points[f].normalImpulse, e.tangentImpulses[f] = d.points[f].tangentImpulse;
                this.m_listener.PostSolve(c, e)
            }
        }
}, box2d.b2Island.s_timer = new box2d.b2Timer, box2d.b2Island.s_solverData = new box2d.b2SolverData, box2d.b2Island.s_contactSolverDef = new box2d.b2ContactSolverDef, box2d.b2Island.s_contactSolver = new box2d.b2ContactSolver, box2d.b2Island.s_translation = new box2d.b2Vec2, box2d.b2Island.s_impulse = new box2d.b2ContactImpulse, goog.provide("box2d.b2ContactFactory"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Contact"), box2d.b2ContactRegister = function() {}, box2d.b2ContactRegister.prototype.createFcn = null, box2d.b2ContactRegister.prototype.destroyFcn = null, box2d.b2ContactRegister.prototype.primary = !1, box2d.b2ContactFactory = function(a) {
    this.m_allocator = a, this.InitializeRegisters()
}, box2d.b2ContactFactory.prototype.m_allocator = null, box2d.b2ContactFactory.prototype.AddType = function(a, b, c, d) {
    var e = box2d.b2MakeArray(256, function() {
            return a()
        }),
        f = function(b) {
            return e.length > 0 ? e.pop() : a(b)
        },
        g = function(a) {
            e.push(a)
        };
    this.m_registers[c][d].pool = e, this.m_registers[c][d].createFcn = f, this.m_registers[c][d].destroyFcn = g, this.m_registers[c][d].primary = !0, c !== d && (this.m_registers[d][c].pool = e, this.m_registers[d][c].createFcn = f, this.m_registers[d][c].destroyFcn = g, this.m_registers[d][c].primary = !1)
}, box2d.b2ContactFactory.prototype.InitializeRegisters = function() {
    this.m_registers = new Array(box2d.b2ShapeType.e_shapeTypeCount);
    for (var a = 0; a < box2d.b2ShapeType.e_shapeTypeCount; a++) {
        this.m_registers[a] = new Array(box2d.b2ShapeType.e_shapeTypeCount);
        for (var b = 0; b < box2d.b2ShapeType.e_shapeTypeCount; b++) this.m_registers[a][b] = new box2d.b2ContactRegister
    }
    this.AddType(box2d.b2CircleContact.Create, box2d.b2CircleContact.Destroy, box2d.b2ShapeType.e_circleShape, box2d.b2ShapeType.e_circleShape), this.AddType(box2d.b2PolygonAndCircleContact.Create, box2d.b2PolygonAndCircleContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_circleShape), this.AddType(box2d.b2PolygonContact.Create, box2d.b2PolygonContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_polygonShape), this.AddType(box2d.b2EdgeAndCircleContact.Create, box2d.b2EdgeAndCircleContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_circleShape), this.AddType(box2d.b2EdgeAndPolygonContact.Create, box2d.b2EdgeAndPolygonContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_polygonShape), this.AddType(box2d.b2ChainAndCircleContact.Create, box2d.b2ChainAndCircleContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_circleShape), this.AddType(box2d.b2ChainAndPolygonContact.Create, box2d.b2ChainAndPolygonContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_polygonShape)
}, box2d.b2ContactFactory.prototype.Create = function(a, b, c, d) {
    var e = a.GetType(),
        f = c.GetType();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(e >= 0 && e < box2d.b2ShapeType.e_shapeTypeCount), box2d.ENABLE_ASSERTS && box2d.b2Assert(f >= 0 && f < box2d.b2ShapeType.e_shapeTypeCount);
    var g = this.m_registers[e][f],
        h = g.createFcn;
    if (null !== h) {
        if (g.primary) {
            var i = h(this.m_allocator);
            return i.Reset(a, b, c, d), i
        }
        var i = h(this.m_allocator);
        return i.Reset(c, d, a, b), i
    }
    return null
}, box2d.b2ContactFactory.prototype.Destroy = function(a) {
    var b = a.m_fixtureA,
        c = a.m_fixtureB;
    a.m_manifold.pointCount > 0 && b.IsSensor() === !1 && c.IsSensor() === !1 && (b.GetBody().SetAwake(!0), c.GetBody().SetAwake(!0));
    var d = b.GetType(),
        e = c.GetType();
    box2d.ENABLE_ASSERTS && box2d.b2Assert(d >= 0 && e < box2d.b2ShapeType.e_shapeTypeCount), box2d.ENABLE_ASSERTS && box2d.b2Assert(d >= 0 && e < box2d.b2ShapeType.e_shapeTypeCount);
    var f = this.m_registers[d][e],
        g = f.destroyFcn;
    g(a, this.m_allocator)
}, goog.provide("box2d.b2GrowableStack"), goog.require("box2d.b2Settings"), box2d.b2GrowableStack = function(a) {
    this.m_stack = new Array(a)
}, box2d.b2GrowableStack.prototype.m_stack = null, box2d.b2GrowableStack.prototype.m_count = 0, box2d.b2GrowableStack.prototype.Reset = function() {
    return this.m_count = 0, this
}, box2d.b2GrowableStack.prototype.Push = function(a) {
    this.m_stack[this.m_count] = a, ++this.m_count
}, box2d.b2GrowableStack.prototype.Pop = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_count > 0), --this.m_count;
    var a = this.m_stack[this.m_count];
    return this.m_stack[this.m_count] = null, a
}, box2d.b2GrowableStack.prototype.GetCount = function() {
    return this.m_count
}, goog.provide("box2d.b2DynamicTree"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Collision"), goog.require("box2d.b2GrowableStack"), box2d.b2TreeNode = function(a) {
    this.m_id = a || 0, this.aabb = new box2d.b2AABB
}, box2d.b2TreeNode.prototype.m_id = 0, box2d.b2TreeNode.prototype.aabb = null, box2d.b2TreeNode.prototype.userData = null, box2d.b2TreeNode.prototype.parent = null, box2d.b2TreeNode.prototype.child1 = null, box2d.b2TreeNode.prototype.child2 = null, box2d.b2TreeNode.prototype.height = 0, box2d.b2TreeNode.prototype.IsLeaf = function() {
    return null === this.child1
}, box2d.b2DynamicTree = function() {}, box2d.b2DynamicTree.prototype.m_root = null, box2d.b2DynamicTree.prototype.m_freeList = null, box2d.b2DynamicTree.prototype.m_path = 0, box2d.b2DynamicTree.prototype.m_insertionCount = 0, box2d.b2DynamicTree.s_stack = new box2d.b2GrowableStack(256), box2d.b2DynamicTree.s_r = new box2d.b2Vec2, box2d.b2DynamicTree.s_v = new box2d.b2Vec2, box2d.b2DynamicTree.s_abs_v = new box2d.b2Vec2, box2d.b2DynamicTree.s_segmentAABB = new box2d.b2AABB, box2d.b2DynamicTree.s_subInput = new box2d.b2RayCastInput, box2d.b2DynamicTree.s_combinedAABB = new box2d.b2AABB, box2d.b2DynamicTree.s_aabb = new box2d.b2AABB, box2d.b2DynamicTree.prototype.GetUserData = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== a), a.userData
}, box2d.b2DynamicTree.prototype.GetFatAABB = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== a), a.aabb
}, box2d.b2DynamicTree.prototype.Query = function(a, b) {
    if (null !== this.m_root) {
        var c = box2d.b2DynamicTree.s_stack.Reset();
        for (c.Push(this.m_root); c.GetCount() > 0;) {
            var d = c.Pop();
            if (null !== d && d.aabb.TestOverlap(b))
                if (d.IsLeaf()) {
                    var e = a(d);
                    if (e === !1) return
                } else c.Push(d.child1), c.Push(d.child2)
        }
    }
}, box2d.b2DynamicTree.prototype.RayCast = function(a, b) {
    if (null !== this.m_root) {
        var c = b.p1,
            d = b.p2,
            e = box2d.b2SubVV(d, c, box2d.b2DynamicTree.s_r);
        box2d.ENABLE_ASSERTS && box2d.b2Assert(e.GetLengthSquared() > 0), e.Normalize();
        var f = box2d.b2CrossOneV(e, box2d.b2DynamicTree.s_v),
            g = box2d.b2AbsV(f, box2d.b2DynamicTree.s_abs_v),
            h = b.maxFraction,
            i = box2d.b2DynamicTree.s_segmentAABB,
            j = c.x + h * (d.x - c.x),
            k = c.y + h * (d.y - c.y);
        i.lowerBound.x = box2d.b2Min(c.x, j), i.lowerBound.y = box2d.b2Min(c.y, k), i.upperBound.x = box2d.b2Max(c.x, j), i.upperBound.y = box2d.b2Max(c.y, k);
        var l = box2d.b2DynamicTree.s_stack.Reset();
        for (l.Push(this.m_root); l.GetCount() > 0;) {
            var m = l.Pop();
            if (null !== m && box2d.b2TestOverlapAABB(m.aabb, i) !== !1) {
                var n = m.aabb.GetCenter(),
                    o = m.aabb.GetExtents(),
                    p = box2d.b2Abs(box2d.b2DotVV(f, box2d.b2SubVV(c, n, box2d.b2Vec2.s_t0))) - box2d.b2DotVV(g, o);
                if (!(p > 0))
                    if (m.IsLeaf()) {
                        var q = box2d.b2DynamicTree.s_subInput;
                        q.p1.Copy(b.p1), q.p2.Copy(b.p2), q.maxFraction = h;
                        var r = a(q, m);
                        if (0 === r) return;
                        r > 0 && (h = r, j = c.x + h * (d.x - c.x), k = c.y + h * (d.y - c.y), i.lowerBound.x = box2d.b2Min(c.x, j), i.lowerBound.y = box2d.b2Min(c.y, k), i.upperBound.x = box2d.b2Max(c.x, j), i.upperBound.y = box2d.b2Max(c.y, k))
                    } else l.Push(m.child1), l.Push(m.child2)
            }
        }
    }
}, box2d.b2DynamicTree.prototype.AllocateNode = function() {
    if (this.m_freeList) {
        var a = this.m_freeList;
        return this.m_freeList = a.parent, a.parent = null, a.child1 = null, a.child2 = null, a.height = 0, a.userData = null, a
    }
    return new box2d.b2TreeNode(box2d.b2DynamicTree.prototype.s_node_id++)
}, box2d.b2DynamicTree.prototype.s_node_id = 0, box2d.b2DynamicTree.prototype.FreeNode = function(a) {
    a.parent = this.m_freeList, a.height = -1, this.m_freeList = a
}, box2d.b2DynamicTree.prototype.CreateProxy = function(a, b) {
    var c = this.AllocateNode(),
        d = box2d.b2_aabbExtension,
        e = box2d.b2_aabbExtension;
    return c.aabb.lowerBound.x = a.lowerBound.x - d, c.aabb.lowerBound.y = a.lowerBound.y - e, c.aabb.upperBound.x = a.upperBound.x + d, c.aabb.upperBound.y = a.upperBound.y + e, c.userData = b, c.height = 0, this.InsertLeaf(c), c
}, box2d.b2DynamicTree.prototype.DestroyProxy = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(a.IsLeaf()), this.RemoveLeaf(a), this.FreeNode(a)
}, box2d.b2DynamicTree.prototype.MoveProxy = function(a, b, c) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(a.IsLeaf()), a.aabb.Contains(b)) return !1;
    this.RemoveLeaf(a);
    var d = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (c.x > 0 ? c.x : -c.x),
        e = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (c.y > 0 ? c.y : -c.y);
    return a.aabb.lowerBound.x = b.lowerBound.x - d, a.aabb.lowerBound.y = b.lowerBound.y - e, a.aabb.upperBound.x = b.upperBound.x + d, a.aabb.upperBound.y = b.upperBound.y + e, this.InsertLeaf(a), !0
}, box2d.b2DynamicTree.prototype.InsertLeaf = function(a) {
    if (++this.m_insertionCount, null === this.m_root) return this.m_root = a, void(this.m_root.parent = null);
    for (var b, c, d = a.aabb, e = (d.GetCenter(), this.m_root); e.IsLeaf() === !1;) {
        b = e.child1, c = e.child2;
        var f = e.aabb.GetPerimeter(),
            g = box2d.b2DynamicTree.s_combinedAABB;
        g.Combine2(e.aabb, d);
        var h, i, j, k = g.GetPerimeter(),
            l = 2 * k,
            m = 2 * (k - f),
            n = box2d.b2DynamicTree.s_aabb;
        b.IsLeaf() ? (n.Combine2(d, b.aabb), h = n.GetPerimeter() + m) : (n.Combine2(d, b.aabb), i = b.aabb.GetPerimeter(), j = n.GetPerimeter(), h = j - i + m);
        var o;
        if (c.IsLeaf() ? (n.Combine2(d, c.aabb), o = n.GetPerimeter() + m) : (n.Combine2(d, c.aabb), i = c.aabb.GetPerimeter(), j = n.GetPerimeter(), o = j - i + m), h > l && o > l) break;
        e = o > h ? b : c
    }
    var p = e,
        q = p.parent,
        r = this.AllocateNode();
    for (r.parent = q, r.userData = null, r.aabb.Combine2(d, p.aabb), r.height = p.height + 1, q ? (q.child1 === p ? q.child1 = r : q.child2 = r, r.child1 = p, r.child2 = a, p.parent = r, a.parent = r) : (r.child1 = p, r.child2 = a, p.parent = r, a.parent = r, this.m_root = r), e = a.parent; null !== e;) e = this.Balance(e), b = e.child1, c = e.child2, box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== b), box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== c), e.height = 1 + box2d.b2Max(b.height, c.height), e.aabb.Combine2(b.aabb, c.aabb), e = e.parent
}, box2d.b2DynamicTree.prototype.RemoveLeaf = function(a) {
    if (a === this.m_root) return void(this.m_root = null);
    var b, c = a.parent,
        d = c.parent;
    if (b = c.child1 === a ? c.child2 : c.child1, d) {
        d.child1 === c ? d.child1 = b : d.child2 = b, b.parent = d, this.FreeNode(c);
        for (var e = d; e;) {
            e = this.Balance(e);
            var f = e.child1,
                g = e.child2;
            e.aabb.Combine2(f.aabb, g.aabb), e.height = 1 + box2d.b2Max(f.height, g.height), e = e.parent
        }
    } else this.m_root = b, b.parent = null, this.FreeNode(c)
}, box2d.b2DynamicTree.prototype.Balance = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== a), a.IsLeaf() || a.height < 2) return a;
    var b = a.child1,
        c = a.child2,
        d = c.height - b.height;
    if (d > 1) {
        var e = c.child1,
            f = c.child2;
        return c.child1 = a, c.parent = a.parent, a.parent = c, null !== c.parent ? c.parent.child1 === a ? c.parent.child1 = c : (box2d.ENABLE_ASSERTS && box2d.b2Assert(c.parent.child2 === a), c.parent.child2 = c) : this.m_root = c, e.height > f.height ? (c.child2 = e, a.child2 = f, f.parent = a, a.aabb.Combine2(b.aabb, f.aabb), c.aabb.Combine2(a.aabb, e.aabb), a.height = 1 + box2d.b2Max(b.height, f.height), c.height = 1 + box2d.b2Max(a.height, e.height)) : (c.child2 = f, a.child2 = e, e.parent = a, a.aabb.Combine2(b.aabb, e.aabb), c.aabb.Combine2(a.aabb, f.aabb), a.height = 1 + box2d.b2Max(b.height, e.height), c.height = 1 + box2d.b2Max(a.height, f.height)), c
    }
    if (-1 > d) {
        var g = b.child1,
            h = b.child2;
        return b.child1 = a, b.parent = a.parent, a.parent = b, null !== b.parent ? b.parent.child1 === a ? b.parent.child1 = b : (box2d.ENABLE_ASSERTS && box2d.b2Assert(b.parent.child2 === a), b.parent.child2 = b) : this.m_root = b, g.height > h.height ? (b.child2 = g, a.child1 = h, h.parent = a, a.aabb.Combine2(c.aabb, h.aabb), b.aabb.Combine2(a.aabb, g.aabb), a.height = 1 + box2d.b2Max(c.height, h.height), b.height = 1 + box2d.b2Max(a.height, g.height)) : (b.child2 = h, a.child1 = g, g.parent = a, a.aabb.Combine2(c.aabb, g.aabb), b.aabb.Combine2(a.aabb, h.aabb), a.height = 1 + box2d.b2Max(c.height, g.height), b.height = 1 + box2d.b2Max(a.height, h.height)), b
    }
    return a
}, box2d.b2DynamicTree.prototype.GetHeight = function() {
    return null === this.m_root ? 0 : this.m_root.height
}, box2d.b2DynamicTree.prototype.GetAreaRatio = function() {
    if (null === this.m_root) return 0;
    var a = this.m_root,
        b = a.aabb.GetPerimeter(),
        c = function(a) {
            if (null === a) return 0;
            if (a.IsLeaf()) return 0;
            var b = a.aabb.GetPerimeter();
            return b += c(a.child1), b += c(a.child2)
        },
        d = c(this.m_root);
    return d / b
}, box2d.b2DynamicTree.prototype.ComputeHeightNode = function(a) {
    if (a.IsLeaf()) return 0;
    var b = this.ComputeHeightNode(a.child1),
        c = this.ComputeHeightNode(a.child2);
    return 1 + box2d.b2Max(b, c)
}, box2d.b2DynamicTree.prototype.ComputeHeight = function() {
    var a = this.ComputeHeightNode(this.m_root);
    return a
}, box2d.b2DynamicTree.prototype.ValidateStructure = function(a) {
    if (null !== a) {
        a === this.m_root && box2d.ENABLE_ASSERTS && box2d.b2Assert(null === a.parent);
        var b = a,
            c = b.child1,
            d = b.child2;
        if (b.IsLeaf()) return box2d.ENABLE_ASSERTS && box2d.b2Assert(null === c), box2d.ENABLE_ASSERTS && box2d.b2Assert(null === d), void(box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === b.height));
        box2d.ENABLE_ASSERTS && box2d.b2Assert(c.parent === a), box2d.ENABLE_ASSERTS && box2d.b2Assert(d.parent === a), this.ValidateStructure(c), this.ValidateStructure(d)
    }
}, box2d.b2DynamicTree.prototype.ValidateMetrics = function(a) {
    if (null !== a) {
        var b = a,
            c = b.child1,
            d = b.child2;
        if (b.IsLeaf()) return box2d.ENABLE_ASSERTS && box2d.b2Assert(null === c), box2d.ENABLE_ASSERTS && box2d.b2Assert(null === d), void(box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === b.height));
        var e, f = c.height,
            g = d.height;
        e = 1 + box2d.b2Max(f, g), box2d.ENABLE_ASSERTS && box2d.b2Assert(b.height === e);
        var h = box2d.b2DynamicTree.s_aabb;
        h.Combine2(c.aabb, d.aabb), box2d.ENABLE_ASSERTS && box2d.b2Assert(h.lowerBound === b.aabb.lowerBound), box2d.ENABLE_ASSERTS && box2d.b2Assert(h.upperBound === b.aabb.upperBound), this.ValidateMetrics(c), this.ValidateMetrics(d)
    }
}, box2d.b2DynamicTree.prototype.Validate = function() {
    this.ValidateStructure(this.m_root), this.ValidateMetrics(this.m_root);
    for (var a = 0, b = this.m_freeList; null !== b;) b = b.parent, ++a;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.GetHeight() === this.ComputeHeight())
}, box2d.b2DynamicTree.prototype.GetMaxBalance = function() {
    var a = function(a, b) {
            if (null === a) return b;
            if (a.height <= 1) return b;
            box2d.ENABLE_ASSERTS && box2d.b2Assert(a.IsLeaf() === !1);
            var c = a.child1,
                d = a.child2,
                e = box2d.b2Abs(d.height - c.height);
            return box2d.b2Max(b, e)
        },
        b = a(this.m_root, 0);
    return b
}, box2d.b2DynamicTree.prototype.RebuildBottomUp = function() {
    this.Validate()
}, box2d.b2DynamicTree.prototype.ShiftOrigin = function(a) {
    var b = function(a, c) {
        if (null !== a && !(a.height <= 1)) {
            box2d.ENABLE_ASSERTS && box2d.b2Assert(a.IsLeaf() === !1);
            var d = a.child1,
                e = a.child2;
            b(d, c), b(e, c), a.aabb.lowerBound.SelfSub(c), a.aabb.upperBound.SelfSub(c)
        }
    };
    b(this.m_root, a)
}, goog.provide("box2d.b2BroadPhase"), goog.require("box2d.b2Settings"), goog.require("box2d.b2DynamicTree"), box2d.b2Pair = function() {}, box2d.b2Pair.prototype.proxyA = null, box2d.b2Pair.prototype.proxyB = null, box2d.b2BroadPhase = function() {
    this.m_tree = new box2d.b2DynamicTree, this.m_moveBuffer = new Array, this.m_pairBuffer = new Array
}, box2d.b2BroadPhase.prototype.m_tree = null, box2d.b2BroadPhase.prototype.m_proxyCount = 0, box2d.b2BroadPhase.prototype.m_moveCount = 0, box2d.b2BroadPhase.prototype.m_moveBuffer = null, box2d.b2BroadPhase.prototype.m_pairCount = 0, box2d.b2BroadPhase.prototype.m_pairBuffer = null, box2d.b2BroadPhase.prototype.CreateProxy = function(a, b) {
    var c = this.m_tree.CreateProxy(a, b);
    return ++this.m_proxyCount, this.BufferMove(c), c
}, box2d.b2BroadPhase.prototype.DestroyProxy = function(a) {
    this.UnBufferMove(a), --this.m_proxyCount, this.m_tree.DestroyProxy(a)
}, box2d.b2BroadPhase.prototype.MoveProxy = function(a, b, c) {
    var d = this.m_tree.MoveProxy(a, b, c);
    d && this.BufferMove(a)
}, box2d.b2BroadPhase.prototype.TouchProxy = function(a) {
    this.BufferMove(a)
}, box2d.b2BroadPhase.prototype.GetFatAABB = function(a) {
    return this.m_tree.GetFatAABB(a)
}, box2d.b2BroadPhase.prototype.GetUserData = function(a) {
    return this.m_tree.GetUserData(a)
}, box2d.b2BroadPhase.prototype.TestOverlap = function(a, b) {
    var c = this.m_tree.GetFatAABB(a),
        d = this.m_tree.GetFatAABB(b);
    return box2d.b2TestOverlapAABB(c, d)
}, box2d.b2BroadPhase.prototype.GetProxyCount = function() {
    return this.m_proxyCount
}, box2d.b2BroadPhase.prototype.GetTreeHeight = function() {
    return this.m_tree.GetHeight()
}, box2d.b2BroadPhase.prototype.GetTreeBalance = function() {
    return this.m_tree.GetMaxBalance()
}, box2d.b2BroadPhase.prototype.GetTreeQuality = function() {
    return this.m_tree.GetAreaRatio()
}, box2d.b2BroadPhase.prototype.ShiftOrigin = function(a) {
    this.m_tree.ShiftOrigin(a)
}, box2d.b2BroadPhase.prototype.UpdatePairs = function(a) {
    this.m_pairCount = 0;
    for (var b = 0; b < this.m_moveCount; ++b) {
        var c = this.m_moveBuffer[b];
        if (null !== c) {
            var d = this,
                e = function(a) {
                    if (a.m_id === c.m_id) return !0;
                    d.m_pairCount === d.m_pairBuffer.length && (d.m_pairBuffer[d.m_pairCount] = new box2d.b2Pair);
                    var b = d.m_pairBuffer[d.m_pairCount];
                    return a.m_id < c.m_id ? (b.proxyA = a, b.proxyB = c) : (b.proxyA = c, b.proxyB = a), ++d.m_pairCount, !0
                },
                f = this.m_tree.GetFatAABB(c);
            this.m_tree.Query(e, f)
        }
    }
    this.m_moveCount = 0, this.m_pairBuffer.length = this.m_pairCount, this.m_pairBuffer.sort(box2d.b2PairLessThan);
    for (var b = 0; b < this.m_pairCount;) {
        var g = this.m_pairBuffer[b],
            h = this.m_tree.GetUserData(g.proxyA),
            i = this.m_tree.GetUserData(g.proxyB);
        for (a.AddPair(h, i), ++b; b < this.m_pairCount;) {
            var j = this.m_pairBuffer[b];
            if (j.proxyA.m_id !== g.proxyA.m_id || j.proxyB.m_id !== g.proxyB.m_id) break;
            ++b
        }
    }
}, box2d.b2BroadPhase.prototype.Query = function(a, b) {
    this.m_tree.Query(a, b)
}, box2d.b2BroadPhase.prototype.RayCast = function(a, b) {
    this.m_tree.RayCast(a, b)
}, box2d.b2BroadPhase.prototype.BufferMove = function(a) {
    this.m_moveBuffer[this.m_moveCount] = a, ++this.m_moveCount
}, box2d.b2BroadPhase.prototype.UnBufferMove = function(a) {
    var b = this.m_moveBuffer.indexOf(a);
    this.m_moveBuffer[b] = null
}, box2d.b2PairLessThan = function(a, b) {
    return a.proxyA.m_id === b.proxyA.m_id ? a.proxyB.m_id - b.proxyB.m_id : a.proxyA.m_id - b.proxyA.m_id
}, goog.provide("box2d.b2ContactManager"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Collision"), goog.require("box2d.b2BroadPhase"), goog.require("box2d.b2ContactFactory"), box2d.b2ContactManager = function() {
    this.m_broadPhase = new box2d.b2BroadPhase, this.m_contactFactory = new box2d.b2ContactFactory(this.m_allocator)
}, box2d.b2ContactManager.prototype.m_broadPhase = null, box2d.b2ContactManager.prototype.m_contactList = null, box2d.b2ContactManager.prototype.m_contactCount = 0, box2d.b2ContactManager.prototype.m_contactFilter = box2d.b2ContactFilter.b2_defaultFilter, box2d.b2ContactManager.prototype.m_contactListener = box2d.b2ContactListener.b2_defaultListener, box2d.b2ContactManager.prototype.m_allocator = null, box2d.b2ContactManager.prototype.m_contactFactory = null, box2d.b2ContactManager.prototype.Destroy = function(a) {
    var b = a.GetFixtureA(),
        c = a.GetFixtureB(),
        d = b.GetBody(),
        e = c.GetBody();
    this.m_contactListener && a.IsTouching() && this.m_contactListener.EndContact(a), a.m_prev && (a.m_prev.m_next = a.m_next), a.m_next && (a.m_next.m_prev = a.m_prev), a === this.m_contactList && (this.m_contactList = a.m_next), a.m_nodeA.prev && (a.m_nodeA.prev.next = a.m_nodeA.next), a.m_nodeA.next && (a.m_nodeA.next.prev = a.m_nodeA.prev), a.m_nodeA === d.m_contactList && (d.m_contactList = a.m_nodeA.next), a.m_nodeB.prev && (a.m_nodeB.prev.next = a.m_nodeB.next), a.m_nodeB.next && (a.m_nodeB.next.prev = a.m_nodeB.prev), a.m_nodeB === e.m_contactList && (e.m_contactList = a.m_nodeB.next), this.m_contactFactory.Destroy(a), --this.m_contactCount
}, box2d.b2ContactManager.prototype.Collide = function() {
    for (var a = this.m_contactList; a;) {
        var b = a.GetFixtureA(),
            c = a.GetFixtureB(),
            d = a.GetChildIndexA(),
            e = a.GetChildIndexB(),
            f = b.GetBody(),
            g = c.GetBody();
        if (a.m_flags & box2d.b2ContactFlag.e_filterFlag) {
            if (g.ShouldCollide(f) === !1) {
                var h = a;
                a = h.m_next, this.Destroy(h);
                continue
            }
            if (this.m_contactFilter && this.m_contactFilter.ShouldCollide(b, c) === !1) {
                h = a, a = h.m_next, this.Destroy(h);
                continue
            }
            a.m_flags &= ~box2d.b2ContactFlag.e_filterFlag
        }
        var i = f.IsAwake() && f.m_type !== box2d.b2BodyType.b2_staticBody,
            j = g.IsAwake() && g.m_type !== box2d.b2BodyType.b2_staticBody;
        if (i !== !1 || j !== !1) {
            var k = b.m_proxies[d].proxy,
                l = c.m_proxies[e].proxy,
                m = this.m_broadPhase.TestOverlap(k, l);
            m !== !1 ? (a.Update(this.m_contactListener), a = a.m_next) : (h = a, a = h.m_next, this.Destroy(h))
        } else a = a.m_next
    }
}, box2d.b2ContactManager.prototype.FindNewContacts = function() {
    this.m_broadPhase.UpdatePairs(this)
}, box2d.b2ContactManager.prototype.AddPair = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(a instanceof box2d.b2FixtureProxy), box2d.ENABLE_ASSERTS && box2d.b2Assert(b instanceof box2d.b2FixtureProxy);
    var c = a,
        d = b,
        e = c.fixture,
        f = d.fixture,
        g = c.childIndex,
        h = d.childIndex,
        i = e.GetBody(),
        j = f.GetBody();
    if (i !== j) {
        for (var k = j.GetContactList(); k;) {
            if (k.other === i) {
                var l = k.contact.GetFixtureA(),
                    m = k.contact.GetFixtureB(),
                    n = k.contact.GetChildIndexA(),
                    o = k.contact.GetChildIndexB();
                if (l === e && m === f && n === g && o === h) return;
                if (l === f && m === e && n === h && o === g) return
            }
            k = k.next
        }
        if (j.ShouldCollide(i) !== !1 && (!this.m_contactFilter || this.m_contactFilter.ShouldCollide(e, f) !== !1)) {
            var p = this.m_contactFactory.Create(e, g, f, h);
            null !== p && (e = p.GetFixtureA(), f = p.GetFixtureB(), g = p.GetChildIndexA(), h = p.GetChildIndexB(), i = e.m_body, j = f.m_body, p.m_prev = null, p.m_next = this.m_contactList, null !== this.m_contactList && (this.m_contactList.m_prev = p), this.m_contactList = p, p.m_nodeA.contact = p, p.m_nodeA.other = j, p.m_nodeA.prev = null, p.m_nodeA.next = i.m_contactList, null !== i.m_contactList && (i.m_contactList.prev = p.m_nodeA), i.m_contactList = p.m_nodeA, p.m_nodeB.contact = p, p.m_nodeB.other = i, p.m_nodeB.prev = null, p.m_nodeB.next = j.m_contactList, null !== j.m_contactList && (j.m_contactList.prev = p.m_nodeB), j.m_contactList = p.m_nodeB, e.IsSensor() === !1 && f.IsSensor() === !1 && (i.SetAwake(!0), j.SetAwake(!0)), ++this.m_contactCount)
        }
    }
}, goog.provide("box2d.b2JointFactory"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Joint"), box2d.b2JointFactory.Create = function(a) {
    var b = null;
    switch (a.type) {
        case box2d.b2JointType.e_distanceJoint:
            b = new box2d.b2DistanceJoint(a instanceof box2d.b2DistanceJointDef ? a : null);
            break;
        case box2d.b2JointType.e_mouseJoint:
            b = new box2d.b2MouseJoint(a instanceof box2d.b2MouseJointDef ? a : null);
            break;
        case box2d.b2JointType.e_prismaticJoint:
            b = new box2d.b2PrismaticJoint(a instanceof box2d.b2PrismaticJointDef ? a : null);
            break;
        case box2d.b2JointType.e_revoluteJoint:
            b = new box2d.b2RevoluteJoint(a instanceof box2d.b2RevoluteJointDef ? a : null);
            break;
        case box2d.b2JointType.e_pulleyJoint:
            b = new box2d.b2PulleyJoint(a instanceof box2d.b2PulleyJointDef ? a : null);
            break;
        case box2d.b2JointType.e_gearJoint:
            b = new box2d.b2GearJoint(a instanceof box2d.b2GearJointDef ? a : null);
            break;
        case box2d.b2JointType.e_wheelJoint:
            b = new box2d.b2WheelJoint(a instanceof box2d.b2WheelJointDef ? a : null);
            break;
        case box2d.b2JointType.e_weldJoint:
            b = new box2d.b2WeldJoint(a instanceof box2d.b2WeldJointDef ? a : null);
            break;
        case box2d.b2JointType.e_frictionJoint:
            b = new box2d.b2FrictionJoint(a instanceof box2d.b2FrictionJointDef ? a : null);
            break;
        case box2d.b2JointType.e_ropeJoint:
            b = new box2d.b2RopeJoint(a instanceof box2d.b2RopeJointDef ? a : null);
            break;
        case box2d.b2JointType.e_motorJoint:
            b = new box2d.b2MotorJoint(a instanceof box2d.b2MotorJointDef ? a : null);
            break;
        case box2d.b2JointType.e_areaJoint:
            b = new box2d.b2AreaJoint(a instanceof box2d.b2AreaJointDef ? a : null);
            break;
        default:
            box2d.ENABLE_ASSERTS && box2d.b2Assert(!1)
    }
    return b
}, box2d.b2JointFactory.Destroy = function() {}, goog.provide("box2d.b2Draw"), goog.require("box2d.b2Settings"), box2d.b2Color = function(a, b, c) {
    this.r = a, this.g = b, this.b = c
}, box2d.b2Color.prototype.r = .5, box2d.b2Color.prototype.g = .5, box2d.b2Color.prototype.b = .5, box2d.b2Color.prototype.SetRGB = function(a, b, c) {
    return this.r = a, this.g = b, this.b = c, this
}, box2d.b2Color.prototype.MakeStyleString = function(a) {
    var b = Math.round(Math.max(0, Math.min(255, 255 * this.r))),
        c = Math.round(Math.max(0, Math.min(255, 255 * this.g))),
        d = Math.round(Math.max(0, Math.min(255, 255 * this.b))),
        e = "undefined" == typeof a ? 1 : Math.max(0, Math.min(1, a));
    return box2d.b2Color.MakeStyleString(b, c, d, e)
}, box2d.b2Color.MakeStyleString = function(a, b, c, d) {
    return 1 > d ? "rgba(" + a + "," + b + "," + c + "," + d + ")" : "rgb(" + a + "," + b + "," + c + ")"
}, box2d.b2Color.RED = new box2d.b2Color(1, 0, 0), box2d.b2Color.GREEN = new box2d.b2Color(0, 1, 0), box2d.b2Color.BLUE = new box2d.b2Color(0, 0, 1), box2d.b2DrawFlags = {
    e_none: 0,
    e_shapeBit: 1,
    e_jointBit: 2,
    e_aabbBit: 4,
    e_pairBit: 8,
    e_centerOfMassBit: 16,
    e_controllerBit: 32,
    e_all: 63
}, goog.exportProperty(box2d.b2DrawFlags, "e_none", box2d.b2DrawFlags.e_none), goog.exportProperty(box2d.b2DrawFlags, "e_shapeBit", box2d.b2DrawFlags.e_shapeBit), goog.exportProperty(box2d.b2DrawFlags, "e_jointBit", box2d.b2DrawFlags.e_jointBit), goog.exportProperty(box2d.b2DrawFlags, "e_aabbBit", box2d.b2DrawFlags.e_aabbBit), goog.exportProperty(box2d.b2DrawFlags, "e_pairBit", box2d.b2DrawFlags.e_pairBit), goog.exportProperty(box2d.b2DrawFlags, "e_centerOfMassBit", box2d.b2DrawFlags.e_centerOfMassBit), goog.exportProperty(box2d.b2DrawFlags, "e_controllerBit", box2d.b2DrawFlags.e_controllerBit), goog.exportProperty(box2d.b2DrawFlags, "e_all", box2d.b2DrawFlags.e_all), box2d.b2Draw = function() {}, box2d.b2Draw.prototype.m_drawFlags = box2d.b2DrawFlags.e_none, box2d.b2Draw.prototype.SetFlags = function(a) {
    this.m_drawFlags = a
}, box2d.b2Draw.prototype.GetFlags = function() {
    return this.m_drawFlags
}, box2d.b2Draw.prototype.AppendFlags = function(a) {
    this.m_drawFlags |= a
}, box2d.b2Draw.prototype.ClearFlags = function(a) {
    this.m_drawFlags &= ~a
}, box2d.b2Draw.prototype.PushTransform = function() {}, box2d.b2Draw.prototype.PopTransform = function() {}, box2d.b2Draw.prototype.DrawPolygon = function() {}, box2d.b2Draw.prototype.DrawSolidPolygon = function() {}, box2d.b2Draw.prototype.DrawCircle = function() {}, box2d.b2Draw.prototype.DrawSolidCircle = function() {}, box2d.b2Draw.prototype.DrawSegment = function() {}, box2d.b2Draw.prototype.DrawTransform = function() {}, goog.provide("box2d.b2Fixture"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Collision"), goog.require("box2d.b2Shape"), box2d.b2Filter = function() {}, box2d.b2Filter.prototype.categoryBits = 1, box2d.b2Filter.prototype.maskBits = 65535, box2d.b2Filter.prototype.groupIndex = 0, box2d.b2Filter.prototype.Clone = function() {
    return (new box2d.b2Filter).Copy(this)
}, box2d.b2Filter.prototype.Copy = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(this !== a), this.categoryBits = a.categoryBits, this.maskBits = a.maskBits, this.groupIndex = a.groupIndex, this
}, box2d.b2FixtureDef = function() {
    this.filter = new box2d.b2Filter
}, box2d.b2FixtureDef.prototype.shape = null, box2d.b2FixtureDef.prototype.userData = null, box2d.b2FixtureDef.prototype.friction = .2, box2d.b2FixtureDef.prototype.restitution = 0, box2d.b2FixtureDef.prototype.density = 0, box2d.b2FixtureDef.prototype.isSensor = !1, box2d.b2FixtureDef.prototype.filter = null, box2d.b2FixtureProxy = function() {
    this.aabb = new box2d.b2AABB
}, box2d.b2FixtureProxy.prototype.aabb = null, box2d.b2FixtureProxy.prototype.fixture = null, box2d.b2FixtureProxy.prototype.childIndex = 0, box2d.b2FixtureProxy.prototype.proxy = null, box2d.b2FixtureProxy.MakeArray = function(a) {
    return box2d.b2MakeArray(a, function() {
        return new box2d.b2FixtureProxy
    })
}, box2d.b2Fixture = function() {
    this.m_proxyCount = 0, this.m_filter = new box2d.b2Filter
}, box2d.b2Fixture.prototype.m_density = 0, box2d.b2Fixture.prototype.m_next = null, box2d.b2Fixture.prototype.m_body = null, box2d.b2Fixture.prototype.m_shape = null, box2d.b2Fixture.prototype.m_friction = 0, box2d.b2Fixture.prototype.m_restitution = 0, box2d.b2Fixture.prototype.m_proxies = null, box2d.b2Fixture.prototype.m_proxyCount = 0, box2d.b2Fixture.prototype.m_filter = null, box2d.b2Fixture.prototype.m_isSensor = !1, box2d.b2Fixture.prototype.m_userData = null, box2d.b2Fixture.prototype.GetType = function() {
    return this.m_shape.GetType()
}, box2d.b2Fixture.prototype.GetShape = function() {
    return this.m_shape
}, box2d.b2Fixture.prototype.IsSensor = function() {
    return this.m_isSensor
}, box2d.b2Fixture.prototype.GetFilterData = function() {
    return this.m_filter
}, box2d.b2Fixture.prototype.GetUserData = function() {
    return this.m_userData
}, box2d.b2Fixture.prototype.SetUserData = function(a) {
    this.m_userData = a
}, box2d.b2Fixture.prototype.GetBody = function() {
    return this.m_body
}, box2d.b2Fixture.prototype.GetNext = function() {
    return this.m_next
}, box2d.b2Fixture.prototype.SetDensity = function(a) {
    this.m_density = a
}, box2d.b2Fixture.prototype.GetDensity = function() {
    return this.m_density
}, box2d.b2Fixture.prototype.GetFriction = function() {
    return this.m_friction
}, box2d.b2Fixture.prototype.SetFriction = function(a) {
    this.m_friction = a
}, box2d.b2Fixture.prototype.GetRestitution = function() {
    return this.m_restitution
}, box2d.b2Fixture.prototype.SetRestitution = function(a) {
    this.m_restitution = a
}, box2d.b2Fixture.prototype.TestPoint = function(a) {
    return this.m_shape.TestPoint(this.m_body.GetTransform(), a)
}, box2d.b2Fixture.prototype.RayCast = function(a, b, c) {
    return this.m_shape.RayCast(a, b, this.m_body.GetTransform(), c)
}, box2d.b2Fixture.prototype.GetMassData = function(a) {
    return a = a || new box2d.b2MassData, this.m_shape.ComputeMass(a, this.m_density), a
}, box2d.b2Fixture.prototype.GetAABB = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(a >= 0 && a < this.m_proxyCount), this.m_proxies[a].aabb
}, box2d.b2Fixture.prototype.Create = function(a, b) {
    this.m_userData = b.userData, this.m_friction = b.friction, this.m_restitution = b.restitution, this.m_body = a, this.m_next = null, this.m_filter.Copy(b.filter), this.m_isSensor = b.isSensor, this.m_shape = b.shape.Clone(), this.m_proxies = box2d.b2FixtureProxy.MakeArray(this.m_shape.GetChildCount()), this.m_proxyCount = 0, this.m_density = b.density
}, box2d.b2Fixture.prototype.Destroy = function() {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === this.m_proxyCount), this.m_shape = null
}, box2d.b2Fixture.prototype.CreateProxies = function(a, b) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === this.m_proxyCount), this.m_proxyCount = this.m_shape.GetChildCount();
    for (var c = 0; c < this.m_proxyCount; ++c) {
        var d = this.m_proxies[c];
        this.m_shape.ComputeAABB(d.aabb, b, c), d.proxy = a.CreateProxy(d.aabb, d), d.fixture = this, d.childIndex = c
    }
}, box2d.b2Fixture.prototype.DestroyProxies = function(a) {
    for (var b = 0; b < this.m_proxyCount; ++b) {
        var c = this.m_proxies[b];
        a.DestroyProxy(c.proxy), c.proxy = null
    }
    this.m_proxyCount = 0
}, box2d.b2Fixture.prototype.Synchronize = function(a, b, c) {
    if (0 !== this.m_proxyCount)
        for (var d = 0; d < this.m_proxyCount; ++d) {
            var e = this.m_proxies[d],
                f = box2d.b2Fixture.prototype.Synchronize.s_aabb1,
                g = box2d.b2Fixture.prototype.Synchronize.s_aabb2;
            this.m_shape.ComputeAABB(f, b, d), this.m_shape.ComputeAABB(g, c, d), e.aabb.Combine2(f, g);
            var h = box2d.b2SubVV(c.p, b.p, box2d.b2Fixture.prototype.Synchronize.s_displacement);
            a.MoveProxy(e.proxy, e.aabb, h)
        }
}, box2d.b2Fixture.prototype.Synchronize.s_aabb1 = new box2d.b2AABB, box2d.b2Fixture.prototype.Synchronize.s_aabb2 = new box2d.b2AABB, box2d.b2Fixture.prototype.Synchronize.s_displacement = new box2d.b2Vec2, box2d.b2Fixture.prototype.SetFilterData = function(a) {
    this.m_filter.Copy(a), this.Refilter()
}, box2d.b2Fixture.prototype.Refilter = function() {
    if (!this.m_body) {
        for (var a = this.m_body.GetContactList(); a;) {
            var b = a.contact,
                c = b.GetFixtureA(),
                d = b.GetFixtureB();
            (c === this || d === this) && b.FlagForFiltering(), a = a.next
        }
        var e = this.m_body.GetWorld();
        if (null !== e)
            for (var f = e.m_contactManager.m_broadPhase, g = 0; g < this.m_proxyCount; ++g) f.TouchProxy(this.m_proxies[g].proxy)
    }
}, box2d.b2Fixture.prototype.SetSensor = function(a) {
    a !== this.m_isSensor && (this.m_body.SetAwake(!0), this.m_isSensor = a)
}, box2d.b2Fixture.prototype.Dump = function(a) {
    box2d.DEBUG && (box2d.b2Log("    /*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();\n"), box2d.b2Log("    fd.friction = %.15f;\n", this.m_friction), box2d.b2Log("    fd.restitution = %.15f;\n", this.m_restitution), box2d.b2Log("    fd.density = %.15f;\n", this.m_density), box2d.b2Log("    fd.isSensor = %s;\n", this.m_isSensor ? "true" : "false"), box2d.b2Log("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits), box2d.b2Log("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits), box2d.b2Log("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex), this.m_shape.Dump(), box2d.b2Log("\n"), box2d.b2Log("    fd.shape = shape;\n"), box2d.b2Log("\n"), box2d.b2Log("    bodies[%d].CreateFixture(fd);\n", a))
}, goog.provide("box2d.b2Body"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), goog.require("box2d.b2Fixture"), box2d.b2BodyType = {
    b2_unknown: -1,
    b2_staticBody: 0,
    b2_kinematicBody: 1,
    b2_dynamicBody: 2,
    b2_bulletBody: 3
}, goog.exportProperty(box2d.b2BodyType, "b2_unknown", box2d.b2BodyType.b2_unknown), goog.exportProperty(box2d.b2BodyType, "b2_staticBody", box2d.b2BodyType.b2_staticBody), goog.exportProperty(box2d.b2BodyType, "b2_kinematicBody", box2d.b2BodyType.b2_kinematicBody), goog.exportProperty(box2d.b2BodyType, "b2_dynamicBody", box2d.b2BodyType.b2_dynamicBody), goog.exportProperty(box2d.b2BodyType, "b2_bulletBody", box2d.b2BodyType.b2_bulletBody), box2d.b2BodyDef = function() {
    this.position = new box2d.b2Vec2(0, 0), this.linearVelocity = new box2d.b2Vec2(0, 0)
}, box2d.b2BodyDef.prototype.type = box2d.b2BodyType.b2_staticBody, box2d.b2BodyDef.prototype.position = null, box2d.b2BodyDef.prototype.angle = 0, box2d.b2BodyDef.prototype.linearVelocity = null, box2d.b2BodyDef.prototype.angularVelocity = 0, box2d.b2BodyDef.prototype.linearDamping = 0, box2d.b2BodyDef.prototype.angularDamping = 0, box2d.b2BodyDef.prototype.allowSleep = !0, box2d.b2BodyDef.prototype.awake = !0, box2d.b2BodyDef.prototype.fixedRotation = !1, box2d.b2BodyDef.prototype.bullet = !1, box2d.b2BodyDef.prototype.active = !0, box2d.b2BodyDef.prototype.userData = null, box2d.b2BodyDef.prototype.gravityScale = 1, box2d.b2BodyFlag = {
    e_none: 0,
    e_islandFlag: 1,
    e_awakeFlag: 2,
    e_autoSleepFlag: 4,
    e_bulletFlag: 8,
    e_fixedRotationFlag: 16,
    e_activeFlag: 32,
    e_toiFlag: 64
}, goog.exportProperty(box2d.b2BodyFlag, "e_none", box2d.b2BodyFlag.e_none), goog.exportProperty(box2d.b2BodyFlag, "e_islandFlag", box2d.b2BodyFlag.e_islandFlag), goog.exportProperty(box2d.b2BodyFlag, "e_awakeFlag", box2d.b2BodyFlag.e_awakeFlag), goog.exportProperty(box2d.b2BodyFlag, "e_autoSleepFlag", box2d.b2BodyFlag.e_autoSleepFlag), goog.exportProperty(box2d.b2BodyFlag, "e_bulletFlag", box2d.b2BodyFlag.e_bulletFlag), goog.exportProperty(box2d.b2BodyFlag, "e_fixedRotationFlag", box2d.b2BodyFlag.e_fixedRotationFlag), goog.exportProperty(box2d.b2BodyFlag, "e_activeFlag", box2d.b2BodyFlag.e_activeFlag), goog.exportProperty(box2d.b2BodyFlag, "e_toiFlag", box2d.b2BodyFlag.e_toiFlag), box2d.b2Body = function(a, b) {
    this.m_xf = new box2d.b2Transform, this.m_out_xf = new box2d.b2Transform, this.m_sweep = new box2d.b2Sweep, this.m_out_sweep = new box2d.b2Sweep, this.m_linearVelocity = new box2d.b2Vec2, this.m_out_linearVelocity = new box2d.b2Vec2, this.m_force = new box2d.b2Vec2, box2d.ENABLE_ASSERTS && box2d.b2Assert(a.position.IsValid()), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.linearVelocity.IsValid()), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.angle)), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.angularVelocity)), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.gravityScale) && a.gravityScale >= 0), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.angularDamping) && a.angularDamping >= 0), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.linearDamping) && a.linearDamping >= 0), this.m_flags = box2d.b2BodyFlag.e_none, a.bullet && (this.m_flags |= box2d.b2BodyFlag.e_bulletFlag), a.fixedRotation && (this.m_flags |= box2d.b2BodyFlag.e_fixedRotationFlag), a.allowSleep && (this.m_flags |= box2d.b2BodyFlag.e_autoSleepFlag), a.awake && (this.m_flags |= box2d.b2BodyFlag.e_awakeFlag), a.active && (this.m_flags |= box2d.b2BodyFlag.e_activeFlag), this.m_world = b, this.m_xf.p.Copy(a.position), this.m_xf.q.SetAngleRadians(a.angle), this.m_sweep.localCenter.SetZero(), this.m_sweep.c0.Copy(this.m_xf.p), this.m_sweep.c.Copy(this.m_xf.p), this.m_sweep.a0 = a.angle, this.m_sweep.a = a.angle, this.m_sweep.alpha0 = 0, this.m_linearVelocity.Copy(a.linearVelocity), this.m_angularVelocity = a.angularVelocity, this.m_linearDamping = a.linearDamping, this.m_angularDamping = a.angularDamping, this.m_gravityScale = a.gravityScale, this.m_force.SetZero(), this.m_torque = 0, this.m_sleepTime = 0, this.m_type = a.type, a.type === box2d.b2BodyType.b2_dynamicBody ? (this.m_mass = 1, this.m_invMass = 1) : (this.m_mass = 0, this.m_invMass = 0), this.m_I = 0, this.m_invI = 0, this.m_userData = a.userData, this.m_fixtureList = null, this.m_fixtureCount = 0, this.m_controllerList = null, this.m_controllerCount = 0
}, box2d.b2Body.prototype.m_flags = box2d.b2BodyFlag.e_none, box2d.b2Body.prototype.m_islandIndex = 0, box2d.b2Body.prototype.m_world = null, box2d.b2Body.prototype.m_xf = null, box2d.b2Body.prototype.m_out_xf = null, box2d.b2Body.prototype.m_sweep = null, box2d.b2Body.prototype.m_out_sweep = null, box2d.b2Body.prototype.m_jointList = null, box2d.b2Body.prototype.m_contactList = null, box2d.b2Body.prototype.m_prev = null, box2d.b2Body.prototype.m_next = null, box2d.b2Body.prototype.m_linearVelocity = null, box2d.b2Body.prototype.m_out_linearVelocity = null, box2d.b2Body.prototype.m_angularVelocity = 0, box2d.b2Body.prototype.m_linearDamping = 0, box2d.b2Body.prototype.m_angularDamping = 0, box2d.b2Body.prototype.m_gravityScale = 1, box2d.b2Body.prototype.m_force = null, box2d.b2Body.prototype.m_torque = 0, box2d.b2Body.prototype.m_sleepTime = 0, box2d.b2Body.prototype.m_type = box2d.b2BodyType.b2_staticBody, box2d.b2Body.prototype.m_mass = 1, box2d.b2Body.prototype.m_invMass = 1, box2d.b2Body.prototype.m_I = 0, box2d.b2Body.prototype.m_invI = 0, box2d.b2Body.prototype.m_userData = null, box2d.b2Body.prototype.m_fixtureList = null, box2d.b2Body.prototype.m_fixtureCount = 0, box2d.b2Body.prototype.m_controllerList = null, box2d.b2Body.prototype.m_controllerCount = 0, box2d.b2Body.prototype.CreateFixture = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), this.m_world.IsLocked() === !0) return null;
    var b = new box2d.b2Fixture;
    if (b.Create(this, a), this.m_flags & box2d.b2BodyFlag.e_activeFlag) {
        var c = this.m_world.m_contactManager.m_broadPhase;
        b.CreateProxies(c, this.m_xf)
    }
    return b.m_next = this.m_fixtureList, this.m_fixtureList = b, ++this.m_fixtureCount, b.m_body = this, b.m_density > 0 && this.ResetMassData(), this.m_world.m_flags |= box2d.b2WorldFlag.e_newFixture, b
}, box2d.b2Body.prototype.CreateFixture2 = function(a, b) {
    void 0 === b && (b = 0);
    var c = box2d.b2Body.prototype.CreateFixture2.s_def;
    return c.shape = a, c.density = b, this.CreateFixture(c)
}, box2d.b2Body.prototype.CreateFixture2.s_def = new box2d.b2FixtureDef, box2d.b2Body.prototype.DestroyFixture = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), this.m_world.IsLocked() !== !0) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(a.m_body === this), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_fixtureCount > 0);
        for (var b = this.m_fixtureList, c = null, d = !1; null !== b;) {
            if (b === a) {
                c ? c.m_next = a.m_next : this.m_fixtureList = a.m_next, d = !0;
                break
            }
            c = b, b = b.m_next
        }
        box2d.ENABLE_ASSERTS && box2d.b2Assert(d);
        for (var e = this.m_contactList; e;) {
            var f = e.contact;
            e = e.next;
            var g = f.GetFixtureA(),
                h = f.GetFixtureB();
            (a === g || a === h) && this.m_world.m_contactManager.Destroy(f)
        }
        if (this.m_flags & box2d.b2BodyFlag.e_activeFlag) {
            var i = this.m_world.m_contactManager.m_broadPhase;
            a.DestroyProxies(i)
        }
        a.Destroy(), a.m_body = null, a.m_next = null, --this.m_fixtureCount, this.ResetMassData()
    }
}, box2d.b2Body.prototype.SetTransformVecRadians = function(a, b) {
    this.SetTransformXYRadians(a.x, a.y, b)
}, box2d.b2Body.prototype.SetTransformXYRadians = function(a, b, c) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), this.m_world.IsLocked() !== !0 && (this.m_xf.p.x !== a || this.m_xf.p.y !== b || this.m_xf.q.GetAngleRadians() !== c)) {
        this.m_xf.q.SetAngleRadians(c), this.m_xf.p.SetXY(a, b), box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), this.m_sweep.a = c, this.m_sweep.c0.Copy(this.m_sweep.c), this.m_sweep.a0 = c;
        for (var d = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.Synchronize(d, this.m_xf, this.m_xf)
    }
}, box2d.b2Body.prototype.SetTransform = function(a) {
    this.SetTransformVecRadians(a.p, a.GetAngleRadians())
}, box2d.b2Body.prototype.GetTransform = function(a) {
    return a = a || this.m_out_xf, a.Copy(this.m_xf)
}, box2d.b2Body.prototype.GetPosition = function(a) {
    return a = a || this.m_out_xf.p, a.Copy(this.m_xf.p)
}, box2d.b2Body.prototype.SetPosition = function(a) {
    this.SetTransformVecRadians(a, this.GetAngleRadians())
}, box2d.b2Body.prototype.SetPositionXY = function(a, b) {
    this.SetTransformXYRadians(a, b, this.GetAngleRadians())
}, box2d.b2Body.prototype.GetAngle = function() {
    return this.m_sweep.a
}, box2d.b2Body.prototype.GetAngleRadians = box2d.b2Body.prototype.GetAngle, box2d.b2Body.prototype.GetAngleDegrees = function() {
    return box2d.b2RadToDeg(this.GetAngle())
}, box2d.b2Body.prototype.SetAngle = function(a) {
    this.SetTransformVecRadians(this.GetPosition(), a)
}, box2d.b2Body.prototype.SetAngleRadians = box2d.b2Body.prototype.SetAngle, box2d.b2Body.prototype.SetAngleDegrees = function(a) {
    this.SetAngle(box2d.b2DegToRad(a))
}, box2d.b2Body.prototype.GetWorldCenter = function(a) {
    return a = a || this.m_out_sweep.c, a.Copy(this.m_sweep.c)
}, box2d.b2Body.prototype.GetLocalCenter = function(a) {
    return a = a || this.m_out_sweep.localCenter, a.Copy(this.m_sweep.localCenter)
}, box2d.b2Body.prototype.SetLinearVelocity = function(a) {
    this.m_type !== box2d.b2BodyType.b2_staticBody && (box2d.b2DotVV(a, a) > 0 && this.SetAwake(!0), this.m_linearVelocity.Copy(a))
}, box2d.b2Body.prototype.GetLinearVelocity = function(a) {
    return a = a || this.m_out_linearVelocity, a.Copy(this.m_linearVelocity)
}, box2d.b2Body.prototype.SetAngularVelocity = function(a) {
    this.m_type !== box2d.b2BodyType.b2_staticBody && (a * a > 0 && this.SetAwake(!0), this.m_angularVelocity = a)
}, box2d.b2Body.prototype.GetAngularVelocity = function() {
    return this.m_angularVelocity
}, box2d.b2Body.prototype.GetDefinition = function(a) {
    return a.type = this.GetType(), a.allowSleep = (this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag) === box2d.b2BodyFlag.e_autoSleepFlag, a.angle = this.GetAngleRadians(), a.angularDamping = this.m_angularDamping, a.gravityScale = this.m_gravityScale, a.angularVelocity = this.m_angularVelocity, a.fixedRotation = (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) === box2d.b2BodyFlag.e_fixedRotationFlag, a.bullet = (this.m_flags & box2d.b2BodyFlag.e_bulletFlag) === box2d.b2BodyFlag.e_bulletFlag, a.awake = (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) === box2d.b2BodyFlag.e_awakeFlag, a.linearDamping = this.m_linearDamping, a.linearVelocity.Copy(this.GetLinearVelocity()), a.position.Copy(this.GetPosition()), a.userData = this.GetUserData(), a
}, box2d.b2Body.prototype.ApplyForce = function(a, b, c) {
    c = c || !0, this.m_type === box2d.b2BodyType.b2_dynamicBody && (c && 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && this.SetAwake(!0), this.m_flags & box2d.b2BodyFlag.e_awakeFlag && (this.m_force.x += a.x, this.m_force.y += a.y, this.m_torque += (b.x - this.m_sweep.c.x) * a.y - (b.y - this.m_sweep.c.y) * a.x))
}, box2d.b2Body.prototype.ApplyForceToCenter = function(a, b) {
    b = b || !0, this.m_type === box2d.b2BodyType.b2_dynamicBody && (b && 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && this.SetAwake(!0), this.m_flags & box2d.b2BodyFlag.e_awakeFlag && (this.m_force.x += a.x, this.m_force.y += a.y))
}, box2d.b2Body.prototype.ApplyTorque = function(a, b) {
    b = b || !0, this.m_type === box2d.b2BodyType.b2_dynamicBody && (b && 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && this.SetAwake(!0), this.m_flags & box2d.b2BodyFlag.e_awakeFlag && (this.m_torque += a))
}, box2d.b2Body.prototype.ApplyLinearImpulse = function(a, b, c) {
    c = c || !0, this.m_type === box2d.b2BodyType.b2_dynamicBody && (c && 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && this.SetAwake(!0), this.m_flags & box2d.b2BodyFlag.e_awakeFlag && (this.m_linearVelocity.x += this.m_invMass * a.x, this.m_linearVelocity.y += this.m_invMass * a.y, this.m_angularVelocity += this.m_invI * ((b.x - this.m_sweep.c.x) * a.y - (b.y - this.m_sweep.c.y) * a.x)))
}, box2d.b2Body.prototype.ApplyAngularImpulse = function(a, b) {
    b = b || !0, this.m_type === box2d.b2BodyType.b2_dynamicBody && (b && 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && this.SetAwake(!0), this.m_flags & box2d.b2BodyFlag.e_awakeFlag && (this.m_angularVelocity += this.m_invI * a))
}, box2d.b2Body.prototype.GetMass = function() {
    return this.m_mass
}, box2d.b2Body.prototype.GetInertia = function() {
    return this.m_I + this.m_mass * box2d.b2DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter)
}, box2d.b2Body.prototype.GetMassData = function(a) {
    return a.mass = this.m_mass, a.I = this.m_I + this.m_mass * box2d.b2DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter), a.center.Copy(this.m_sweep.localCenter), a
}, box2d.b2Body.prototype.SetMassData = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), this.m_world.IsLocked() !== !0 && this.m_type === box2d.b2BodyType.b2_dynamicBody) {
        this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_mass = a.mass, this.m_mass <= 0 && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, a.I > 0 && 0 === (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) && (this.m_I = a.I - this.m_mass * box2d.b2DotVV(a.center, a.center), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_I > 0), this.m_invI = 1 / this.m_I);
        var b = box2d.b2Body.prototype.SetMassData.s_oldCenter.Copy(this.m_sweep.c);
        this.m_sweep.localCenter.Copy(a.center), box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), this.m_sweep.c0.Copy(this.m_sweep.c), box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(this.m_sweep.c, b, box2d.b2Vec2.s_t0), this.m_linearVelocity)
    }
}, box2d.b2Body.prototype.SetMassData.s_oldCenter = new box2d.b2Vec2, box2d.b2Body.prototype.ResetMassData = function() {
    if (this.m_mass = 0, this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_sweep.localCenter.SetZero(), this.m_type === box2d.b2BodyType.b2_staticBody || this.m_type === box2d.b2BodyType.b2_kinematicBody) return this.m_sweep.c0.Copy(this.m_xf.p), this.m_sweep.c.Copy(this.m_xf.p), void(this.m_sweep.a0 = this.m_sweep.a);
    box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_type === box2d.b2BodyType.b2_dynamicBody);
    for (var a = box2d.b2Body.prototype.ResetMassData.s_localCenter.SetZero(), b = this.m_fixtureList; b; b = b.m_next)
        if (0 !== b.m_density) {
            var c = b.GetMassData(box2d.b2Body.prototype.ResetMassData.s_massData);
            this.m_mass += c.mass, a.x += c.center.x * c.mass, a.y += c.center.y * c.mass, this.m_I += c.I
        }
    this.m_mass > 0 ? (this.m_invMass = 1 / this.m_mass, a.x *= this.m_invMass, a.y *= this.m_invMass) : (this.m_mass = 1, this.m_invMass = 1), this.m_I > 0 && 0 === (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * box2d.b2DotVV(a, a), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_I > 0), this.m_invI = 1 / this.m_I) : (this.m_I = 0, this.m_invI = 0);
    var d = box2d.b2Body.prototype.ResetMassData.s_oldCenter.Copy(this.m_sweep.c);
    this.m_sweep.localCenter.Copy(a), box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), this.m_sweep.c0.Copy(this.m_sweep.c), box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(this.m_sweep.c, d, box2d.b2Vec2.s_t0), this.m_linearVelocity)
}, box2d.b2Body.prototype.ResetMassData.s_localCenter = new box2d.b2Vec2, box2d.b2Body.prototype.ResetMassData.s_oldCenter = new box2d.b2Vec2, box2d.b2Body.prototype.ResetMassData.s_massData = new box2d.b2MassData, box2d.b2Body.prototype.GetWorldPoint = function(a, b) {
    return box2d.b2MulXV(this.m_xf, a, b)
}, box2d.b2Body.prototype.GetWorldVector = function(a, b) {
    return box2d.b2MulRV(this.m_xf.q, a, b)
}, box2d.b2Body.prototype.GetLocalPoint = function(a, b) {
    return box2d.b2MulTXV(this.m_xf, a, b)
}, box2d.b2Body.prototype.GetLocalVector = function(a, b) {
    return box2d.b2MulTRV(this.m_xf.q, a, b)
}, box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint = function(a, b) {
    return box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(a, this.m_sweep.c, box2d.b2Vec2.s_t0), b)
}, box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint = function(a, b) {
    return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(a, b), b)
}, box2d.b2Body.prototype.GetLinearDamping = function() {
    return this.m_linearDamping
}, box2d.b2Body.prototype.SetLinearDamping = function(a) {
    this.m_linearDamping = a
}, box2d.b2Body.prototype.GetAngularDamping = function() {
    return this.m_angularDamping
}, box2d.b2Body.prototype.SetAngularDamping = function(a) {
    this.m_angularDamping = a
}, box2d.b2Body.prototype.GetGravityScale = function() {
    return this.m_gravityScale
}, box2d.b2Body.prototype.SetGravityScale = function(a) {
    this.m_gravityScale = a
}, box2d.b2Body.prototype.SetType = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), this.m_world.IsLocked() !== !0 && this.m_type !== a) {
        this.m_type = a, this.ResetMassData(), this.m_type === box2d.b2BodyType.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_sweep.a0 = this.m_sweep.a, this.m_sweep.c0.Copy(this.m_sweep.c), this.SynchronizeFixtures()), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0;
        for (var b = this.m_contactList; b;) {
            var c = b;
            b = b.next, this.m_world.m_contactManager.Destroy(c.contact)
        }
        this.m_contactList = null;
        for (var d = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next)
            for (var f = e.m_proxyCount, g = 0; f > g; ++g) d.TouchProxy(e.m_proxies[g].proxy)
    }
}, box2d.b2Body.prototype.GetType = function() {
    return this.m_type
}, box2d.b2Body.prototype.SetBullet = function(a) {
    a ? this.m_flags |= box2d.b2BodyFlag.e_bulletFlag : this.m_flags &= ~box2d.b2BodyFlag.e_bulletFlag
}, box2d.b2Body.prototype.IsBullet = function() {
    return (this.m_flags & box2d.b2BodyFlag.e_bulletFlag) === box2d.b2BodyFlag.e_bulletFlag
}, box2d.b2Body.prototype.SetSleepingAllowed = function(a) {
    a ? this.m_flags |= box2d.b2BodyFlag.e_autoSleepFlag : (this.m_flags &= ~box2d.b2BodyFlag.e_autoSleepFlag, this.SetAwake(!0))
}, box2d.b2Body.prototype.IsSleepingAllowed = function() {
    return (this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag) === box2d.b2BodyFlag.e_autoSleepFlag
}, box2d.b2Body.prototype.SetAwake = function(a) {
    a ? 0 === (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) && (this.m_flags |= box2d.b2BodyFlag.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~box2d.b2BodyFlag.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
}, box2d.b2Body.prototype.IsAwake = function() {
    return (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) === box2d.b2BodyFlag.e_awakeFlag
}, box2d.b2Body.prototype.SetActive = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_world.IsLocked() === !1), a !== this.IsActive())
        if (a) {
            this.m_flags |= box2d.b2BodyFlag.e_activeFlag;
            for (var b = this.m_world.m_contactManager.m_broadPhase, c = this.m_fixtureList; c; c = c.m_next) c.CreateProxies(b, this.m_xf)
        } else {
            this.m_flags &= ~box2d.b2BodyFlag.e_activeFlag;
            for (var b = this.m_world.m_contactManager.m_broadPhase, c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxies(b);
            for (var d = this.m_contactList; d;) {
                var e = d;
                d = d.next, this.m_world.m_contactManager.Destroy(e.contact)
            }
            this.m_contactList = null
        }
}, box2d.b2Body.prototype.IsActive = function() {
    return (this.m_flags & box2d.b2BodyFlag.e_activeFlag) === box2d.b2BodyFlag.e_activeFlag
}, box2d.b2Body.prototype.SetFixedRotation = function(a) {
    var b = (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) === box2d.b2BodyFlag.e_fixedRotationFlag;
    b !== a && (a ? this.m_flags |= box2d.b2BodyFlag.e_fixedRotationFlag : this.m_flags &= ~box2d.b2BodyFlag.e_fixedRotationFlag, this.m_angularVelocity = 0, this.ResetMassData())
}, box2d.b2Body.prototype.IsFixedRotation = function() {
    return (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) === box2d.b2BodyFlag.e_fixedRotationFlag
}, box2d.b2Body.prototype.GetFixtureList = function() {
    return this.m_fixtureList
}, box2d.b2Body.prototype.GetJointList = function() {
    return this.m_jointList
}, box2d.b2Body.prototype.GetContactList = function() {
    return this.m_contactList
}, box2d.b2Body.prototype.GetNext = function() {
    return this.m_next
}, box2d.b2Body.prototype.GetUserData = function() {
    return this.m_userData
}, box2d.b2Body.prototype.SetUserData = function(a) {
    this.m_userData = a
}, box2d.b2Body.prototype.GetWorld = function() {
    return this.m_world
}, box2d.b2Body.prototype.SynchronizeFixtures = function() {
    var a = box2d.b2Body.prototype.SynchronizeFixtures.s_xf1;
    a.q.SetAngleRadians(this.m_sweep.a0), box2d.b2MulRV(a.q, this.m_sweep.localCenter, a.p), box2d.b2SubVV(this.m_sweep.c0, a.p, a.p);
    for (var b = this.m_world.m_contactManager.m_broadPhase, c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(b, a, this.m_xf)
}, box2d.b2Body.prototype.SynchronizeFixtures.s_xf1 = new box2d.b2Transform, box2d.b2Body.prototype.SynchronizeTransform = function() {
    this.m_xf.q.SetAngleRadians(this.m_sweep.a), box2d.b2MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p), box2d.b2SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p)
}, box2d.b2Body.prototype.ShouldCollide = function(a) {
    if (this.m_type !== box2d.b2BodyType.b2_dynamicBody && a.m_type !== box2d.b2BodyType.b2_dynamicBody) return !1;
    for (var b = this.m_jointList; b; b = b.next)
        if (b.other === a && b.joint.m_collideConnected === !1) return !1;
    return !0
}, box2d.b2Body.prototype.Advance = function(a) {
    this.m_sweep.Advance(a), this.m_sweep.c.Copy(this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, this.m_xf.q.SetAngleRadians(this.m_sweep.a), box2d.b2MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p), box2d.b2SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p)
}, box2d.b2Body.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_islandIndex;
        box2d.b2Log("if (true)\n"), box2d.b2Log("{\n"), box2d.b2Log("  /*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();\n");
        var b = "";
        switch (this.m_type) {
            case box2d.b2BodyType.b2_staticBody:
                b = "box2d.b2BodyType.b2_staticBody";
                break;
            case box2d.b2BodyType.b2_kinematicBody:
                b = "box2d.b2BodyType.b2_kinematicBody";
                break;
            case box2d.b2BodyType.b2_dynamicBody:
                b = "box2d.b2BodyType.b2_dynamicBody";
                break;
            default:
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!1)
        }
        box2d.b2Log("  bd.type = %s;\n", b), box2d.b2Log("  bd.position.SetXY(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y), box2d.b2Log("  bd.angle = %.15f;\n", this.m_sweep.a), box2d.b2Log("  bd.linearVelocity.SetXY(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y), box2d.b2Log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity), box2d.b2Log("  bd.linearDamping = %.15f;\n", this.m_linearDamping), box2d.b2Log("  bd.angularDamping = %.15f;\n", this.m_angularDamping), box2d.b2Log("  bd.allowSleep = %s;\n", this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag ? "true" : "false"), box2d.b2Log("  bd.awake = %s;\n", this.m_flags & box2d.b2BodyFlag.e_awakeFlag ? "true" : "false"), box2d.b2Log("  bd.fixedRotation = %s;\n", this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag ? "true" : "false"), box2d.b2Log("  bd.bullet = %s;\n", this.m_flags & box2d.b2BodyFlag.e_bulletFlag ? "true" : "false"), box2d.b2Log("  bd.active = %s;\n", this.m_flags & box2d.b2BodyFlag.e_activeFlag ? "true" : "false"), box2d.b2Log("  bd.gravityScale = %.15f;\n", this.m_gravityScale), box2d.b2Log("\n"), box2d.b2Log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex), box2d.b2Log("\n");
        for (var c = this.m_fixtureList; c; c = c.m_next) box2d.b2Log("  if (true)\n"), box2d.b2Log("  {\n"), c.Dump(a), box2d.b2Log("  }\n");
        box2d.b2Log("}\n")
    }
}, box2d.b2Body.prototype.GetControllerList = function() {
    return this.m_controllerList
}, box2d.b2Body.prototype.GetControllerCount = function() {
    return this.m_controllerCount
}, goog.provide("box2d.b2World"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Draw"), goog.require("box2d.b2ContactManager"), goog.require("box2d.b2ContactSolver"), goog.require("box2d.b2Island"), goog.require("box2d.b2Body"), goog.require("box2d.b2Math"), goog.require("box2d.b2Collision"), goog.require("box2d.b2TimeStep"), goog.require("box2d.b2WorldCallbacks"), goog.require("box2d.b2JointFactory"), box2d.b2WorldFlag = {
    e_none: 0,
    e_newFixture: 1,
    e_locked: 2,
    e_clearForces: 4
}, goog.exportProperty(box2d.b2WorldFlag, "e_none", box2d.b2WorldFlag.e_none), goog.exportProperty(box2d.b2WorldFlag, "e_newFixture", box2d.b2WorldFlag.e_newFixture), goog.exportProperty(box2d.b2WorldFlag, "e_locked", box2d.b2WorldFlag.e_locked), goog.exportProperty(box2d.b2WorldFlag, "e_clearForces", box2d.b2WorldFlag.e_clearForces), box2d.b2World = function(a) {
    this.m_flags = box2d.b2WorldFlag.e_clearForces, this.m_contactManager = new box2d.b2ContactManager, this.m_gravity = a.Clone(), this.m_out_gravity = new box2d.b2Vec2, this.m_allowSleep = !0, this.m_destructionListener = null, this.m_debugDraw = null, this.m_warmStarting = !0, this.m_continuousPhysics = !0, this.m_subStepping = !1, this.m_stepComplete = !0, this.m_profile = new box2d.b2Profile, this.m_island = new box2d.b2Island, this.s_stack = new Array
}, box2d.b2World.prototype.m_flags = box2d.b2WorldFlag.e_none, box2d.b2World.prototype.m_contactManager = null, box2d.b2World.prototype.m_bodyList = null, box2d.b2World.prototype.m_jointList = null, box2d.b2World.prototype.m_bodyCount = 0, box2d.b2World.prototype.m_jointCount = 0, box2d.b2World.prototype.m_gravity = null, box2d.b2World.prototype.m_out_gravity = null, box2d.b2World.prototype.m_allowSleep = !0, box2d.b2World.prototype.m_destructionListener = null, box2d.b2World.prototype.m_debugDraw = null, box2d.b2World.prototype.m_inv_dt0 = 0, box2d.b2World.prototype.m_warmStarting = !0, box2d.b2World.prototype.m_continuousPhysics = !0, box2d.b2World.prototype.m_subStepping = !1, box2d.b2World.prototype.m_stepComplete = !0, box2d.b2World.prototype.m_profile = null, box2d.b2World.prototype.m_island = null, box2d.b2World.prototype.s_stack = null, box2d.b2World.prototype.m_controllerList = null, box2d.b2World.prototype.m_controllerCount = 0, box2d.b2World.prototype.SetAllowSleeping = function(a) {
    if (a !== this.m_allowSleep && (this.m_allowSleep = a, this.m_allowSleep === !1))
        for (var b = this.m_bodyList; b; b = b.m_next) b.SetAwake(!0)
}, box2d.b2World.prototype.GetAllowSleeping = function() {
    return this.m_allowSleep
}, box2d.b2World.prototype.SetWarmStarting = function(a) {
    this.m_warmStarting = a
}, box2d.b2World.prototype.GetWarmStarting = function() {
    return this.m_warmStarting
}, box2d.b2World.prototype.SetContinuousPhysics = function(a) {
    this.m_continuousPhysics = a
}, box2d.b2World.prototype.GetContinuousPhysics = function() {
    return this.m_continuousPhysics
}, box2d.b2World.prototype.SetSubStepping = function(a) {
    this.m_subStepping = a
}, box2d.b2World.prototype.GetSubStepping = function() {
    return this.m_subStepping
}, box2d.b2World.prototype.GetBodyList = function() {
    return this.m_bodyList
}, box2d.b2World.prototype.GetJointList = function() {
    return this.m_jointList
}, box2d.b2World.prototype.GetContactList = function() {
    return this.m_contactManager.m_contactList
}, box2d.b2World.prototype.GetBodyCount = function() {
    return this.m_bodyCount
}, box2d.b2World.prototype.GetJointCount = function() {
    return this.m_jointCount
}, box2d.b2World.prototype.GetContactCount = function() {
    return this.m_contactManager.m_contactCount
}, box2d.b2World.prototype.SetGravity = function(a, b) {
    if (b = b || !0, (this.m_gravity.x !== a.x || this.m_gravity.y !== a.y) && (this.m_gravity.Copy(a), b))
        for (var c = this.m_bodyList; c; c = c.m_next) c.SetAwake(!0)
}, box2d.b2World.prototype.GetGravity = function(a) {
    return a = a || this.m_out_gravity, a.Copy(this.m_gravity)
}, box2d.b2World.prototype.IsLocked = function() {
    return (this.m_flags & box2d.b2WorldFlag.e_locked) > 0
}, box2d.b2World.prototype.SetAutoClearForces = function(a) {
    a ? this.m_flags |= box2d.b2WorldFlag.e_clearForces : this.m_flags &= ~box2d.b2WorldFlag.e_clearForces
}, box2d.b2World.prototype.GetAutoClearForces = function() {
    return (this.m_flags & box2d.b2WorldFlag.e_clearForces) === box2d.b2WorldFlag.e_clearForces
}, box2d.b2World.prototype.GetContactManager = function() {
    return this.m_contactManager
}, box2d.b2World.prototype.GetProfile = function() {
    return this.m_profile
}, box2d.b2World.prototype.SetDestructionListener = function(a) {
    this.m_destructionListener = a
}, box2d.b2World.prototype.SetContactFilter = function(a) {
    this.m_contactManager.m_contactFilter = a
}, box2d.b2World.prototype.SetContactListener = function(a) {
    this.m_contactManager.m_contactListener = a
}, box2d.b2World.prototype.SetDebugDraw = function(a) {
    this.m_debugDraw = a
}, box2d.b2World.prototype.CreateBody = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.IsLocked() === !1), this.IsLocked()) return null;
    var b = new box2d.b2Body(a, this);
    return b.m_prev = null, b.m_next = this.m_bodyList, this.m_bodyList && (this.m_bodyList.m_prev = b), this.m_bodyList = b, ++this.m_bodyCount, b
}, box2d.b2World.prototype.DestroyBody = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_bodyCount > 0), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.IsLocked() === !1), !this.IsLocked()) {
        for (var b = a.m_jointList; b;) {
            var c = b;
            b = b.next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(c.joint), this.DestroyJoint(c.joint), a.m_jointList = b
        }
        a.m_jointList = null;
        for (var d = a.m_controllerList; d;) {
            var e = d;
            d = d.nextController, e.controller.RemoveBody(a)
        }
        for (var f = a.m_contactList; f;) {
            var g = f;
            f = f.next, this.m_contactManager.Destroy(g.contact)
        }
        a.m_contactList = null;
        for (var h = a.m_fixtureList; h;) {
            var i = h;
            h = h.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(i), i.DestroyProxies(this.m_contactManager.m_broadPhase), i.Destroy(), a.m_fixtureList = h, a.m_fixtureCount -= 1
        }
        a.m_fixtureList = null, a.m_fixtureCount = 0, a.m_prev && (a.m_prev.m_next = a.m_next), a.m_next && (a.m_next.m_prev = a.m_prev), a === this.m_bodyList && (this.m_bodyList = a.m_next), --this.m_bodyCount
    }
}, box2d.b2World.prototype.CreateJoint = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.IsLocked() === !1), this.IsLocked()) return null;
    var b = box2d.b2JointFactory.Create(a, null);
    b.m_prev = null, b.m_next = this.m_jointList, this.m_jointList && (this.m_jointList.m_prev = b), this.m_jointList = b, ++this.m_jointCount, b.m_edgeA.joint = b, b.m_edgeA.other = b.m_bodyB, b.m_edgeA.prev = null, b.m_edgeA.next = b.m_bodyA.m_jointList, b.m_bodyA.m_jointList && (b.m_bodyA.m_jointList.prev = b.m_edgeA), b.m_bodyA.m_jointList = b.m_edgeA, b.m_edgeB.joint = b, b.m_edgeB.other = b.m_bodyA, b.m_edgeB.prev = null, b.m_edgeB.next = b.m_bodyB.m_jointList, b.m_bodyB.m_jointList && (b.m_bodyB.m_jointList.prev = b.m_edgeB), b.m_bodyB.m_jointList = b.m_edgeB;
    var c = a.bodyA,
        d = a.bodyB;
    if (a.collideConnected === !1)
        for (var e = d.GetContactList(); e;) e.other === c && e.contact.FlagForFiltering(), e = e.next;
    return b
}, box2d.b2World.prototype.DestroyJoint = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.IsLocked() === !1), !this.IsLocked()) {
        var b = a.m_collideConnected;
        a.m_prev && (a.m_prev.m_next = a.m_next), a.m_next && (a.m_next.m_prev = a.m_prev), a === this.m_jointList && (this.m_jointList = a.m_next);
        var c = a.m_bodyA,
            d = a.m_bodyB;
        if (c.SetAwake(!0), d.SetAwake(!0), a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next), a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev), a.m_edgeA === c.m_jointList && (c.m_jointList = a.m_edgeA.next), a.m_edgeA.prev = null, a.m_edgeA.next = null, a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next), a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev), a.m_edgeB === d.m_jointList && (d.m_jointList = a.m_edgeB.next), a.m_edgeB.prev = null, a.m_edgeB.next = null, box2d.b2JointFactory.Destroy(a, null), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_jointCount > 0), --this.m_jointCount, b === !1)
            for (var e = d.GetContactList(); e;) e.other === c && e.contact.FlagForFiltering(), e = e.next
    }
}, box2d.b2World.prototype.Solve = function(a) {
    for (var b = this.m_controllerList; b; b = b.m_next) b.Step(a);
    this.m_profile.solveInit = 0, this.m_profile.solveVelocity = 0, this.m_profile.solvePosition = 0;
    var c = this.m_island;
    c.Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener);
    for (var d = this.m_bodyList; d; d = d.m_next) d.m_flags &= ~box2d.b2BodyFlag.e_islandFlag;
    for (var e = this.m_contactManager.m_contactList; e; e = e.m_next) e.m_flags &= ~box2d.b2ContactFlag.e_islandFlag;
    for (var f = this.m_jointList; f; f = f.m_next) f.m_islandFlag = !1;
    for (var g = this.m_bodyCount, h = this.s_stack, i = this.m_bodyList; i; i = i.m_next)
        if (!(i.m_flags & box2d.b2BodyFlag.e_islandFlag) && i.IsAwake() !== !1 && i.IsActive() !== !1 && i.GetType() !== box2d.b2BodyType.b2_staticBody) {
            c.Clear();
            var j = 0;
            for (h[j++] = i, i.m_flags |= box2d.b2BodyFlag.e_islandFlag; j > 0;) {
                var d = h[--j];
                if (box2d.ENABLE_ASSERTS && box2d.b2Assert(d.IsActive() === !0), c.AddBody(d), d.SetAwake(!0), d.GetType() !== box2d.b2BodyType.b2_staticBody) {
                    for (var k = d.m_contactList; k; k = k.next) {
                        var l = k.contact;
                        if (!(l.m_flags & box2d.b2ContactFlag.e_islandFlag) && l.IsEnabled() !== !1 && l.IsTouching() !== !1) {
                            var m = l.m_fixtureA.m_isSensor,
                                n = l.m_fixtureB.m_isSensor;
                            if (!m && !n) {
                                c.AddContact(l), l.m_flags |= box2d.b2ContactFlag.e_islandFlag;
                                var o = k.other;
                                o.m_flags & box2d.b2BodyFlag.e_islandFlag || (box2d.ENABLE_ASSERTS && box2d.b2Assert(g > j), h[j++] = o, o.m_flags |= box2d.b2BodyFlag.e_islandFlag)
                            }
                        }
                    }
                    for (var p = d.m_jointList; p; p = p.next)
                        if (p.joint.m_islandFlag !== !0) {
                            var o = p.other;
                            o.IsActive() !== !1 && (c.AddJoint(p.joint), p.joint.m_islandFlag = !0, o.m_flags & box2d.b2BodyFlag.e_islandFlag || (box2d.ENABLE_ASSERTS && box2d.b2Assert(g > j), h[j++] = o, o.m_flags |= box2d.b2BodyFlag.e_islandFlag))
                        }
                }
            }
            var q = new box2d.b2Profile;
            c.Solve(q, a, this.m_gravity, this.m_allowSleep), this.m_profile.solveInit += q.solveInit, this.m_profile.solveVelocity += q.solveVelocity, this.m_profile.solvePosition += q.solvePosition;
            for (var r = 0; r < c.m_bodyCount; ++r) {
                var d = c.m_bodies[r];
                d.GetType() === box2d.b2BodyType.b2_staticBody && (d.m_flags &= ~box2d.b2BodyFlag.e_islandFlag)
            }
        }
    for (var r = 0; r < h.length && h[r]; ++r) h[r] = null;
    for (var s = new box2d.b2Timer, d = this.m_bodyList; d; d = d.m_next) 0 !== (d.m_flags & box2d.b2BodyFlag.e_islandFlag) && d.GetType() !== box2d.b2BodyType.b2_staticBody && d.SynchronizeFixtures();
    this.m_contactManager.FindNewContacts(), this.m_profile.broadphase = s.GetMilliseconds()
}, box2d.b2World.prototype.SolveTOI = function(a) {
    var b = this.m_island;
    if (b.Initialize(2 * box2d.b2_maxTOIContacts, box2d.b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener), this.m_stepComplete) {
        for (var c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~box2d.b2BodyFlag.e_islandFlag, c.m_sweep.alpha0 = 0;
        for (var d = this.m_contactManager.m_contactList; d; d = d.m_next) d.m_flags &= ~(box2d.b2ContactFlag.e_toiFlag | box2d.b2ContactFlag.e_islandFlag), d.m_toiCount = 0, d.m_toi = 1
    }
    for (;;) {
        for (var e = null, f = 1, d = this.m_contactManager.m_contactList; d; d = d.m_next)
            if (d.IsEnabled() !== !1 && !(d.m_toiCount > box2d.b2_maxSubSteps)) {
                var g = 1;
                if (d.m_flags & box2d.b2ContactFlag.e_toiFlag) g = d.m_toi;
                else {
                    var h = d.GetFixtureA(),
                        i = d.GetFixtureB();
                    if (h.IsSensor() || i.IsSensor()) continue;
                    var j = h.GetBody(),
                        k = i.GetBody(),
                        l = j.m_type,
                        m = k.m_type;
                    box2d.ENABLE_ASSERTS && box2d.b2Assert(l === box2d.b2BodyType.b2_dynamicBody || m === box2d.b2BodyType.b2_dynamicBody);
                    var n = j.IsAwake() && l !== box2d.b2BodyType.b2_staticBody,
                        o = k.IsAwake() && m !== box2d.b2BodyType.b2_staticBody;
                    if (n === !1 && o === !1) continue;
                    var p = j.IsBullet() || l !== box2d.b2BodyType.b2_dynamicBody,
                        q = k.IsBullet() || m !== box2d.b2BodyType.b2_dynamicBody;
                    if (p === !1 && q === !1) continue;
                    var r = j.m_sweep.alpha0;
                    j.m_sweep.alpha0 < k.m_sweep.alpha0 ? (r = k.m_sweep.alpha0, j.m_sweep.Advance(r)) : k.m_sweep.alpha0 < j.m_sweep.alpha0 && (r = j.m_sweep.alpha0, k.m_sweep.Advance(r)), box2d.ENABLE_ASSERTS && box2d.b2Assert(1 > r);
                    var s = d.GetChildIndexA(),
                        t = d.GetChildIndexB(),
                        u = box2d.b2World.prototype.SolveTOI.s_toi_input;
                    u.proxyA.SetShape(h.GetShape(), s), u.proxyB.SetShape(i.GetShape(), t), u.sweepA.Copy(j.m_sweep), u.sweepB.Copy(k.m_sweep), u.tMax = 1;
                    var v = box2d.b2World.prototype.SolveTOI.s_toi_output;
                    box2d.b2TimeOfImpact(v, u);
                    var w = v.t;
                    g = v.state === box2d.b2TOIOutputState.e_touching ? box2d.b2Min(r + (1 - r) * w, 1) : 1, d.m_toi = g, d.m_flags |= box2d.b2ContactFlag.e_toiFlag
                }
                f > g && (e = d, f = g)
            }
        if (null === e || 1 - 10 * box2d.b2_epsilon < f) {
            this.m_stepComplete = !0;
            break
        }
        var h = e.GetFixtureA(),
            i = e.GetFixtureB(),
            j = h.GetBody(),
            k = i.GetBody(),
            x = box2d.b2World.prototype.SolveTOI.s_backup1.Copy(j.m_sweep),
            y = box2d.b2World.prototype.SolveTOI.s_backup2.Copy(k.m_sweep);
        if (j.Advance(f), k.Advance(f), e.Update(this.m_contactManager.m_contactListener), e.m_flags &= ~box2d.b2ContactFlag.e_toiFlag, ++e.m_toiCount, e.IsEnabled() !== !1 && e.IsTouching() !== !1) {
            j.SetAwake(!0), k.SetAwake(!0), b.Clear(), b.AddBody(j), b.AddBody(k), b.AddContact(e), j.m_flags |= box2d.b2BodyFlag.e_islandFlag, k.m_flags |= box2d.b2BodyFlag.e_islandFlag, e.m_flags |= box2d.b2ContactFlag.e_islandFlag;
            for (var z = 0; 2 > z; ++z) {
                var A = 0 === z ? j : k;
                if (A.m_type === box2d.b2BodyType.b2_dynamicBody)
                    for (var B = A.m_contactList; B && b.m_bodyCount !== b.m_bodyCapacity && b.m_contactCount !== b.m_contactCapacity; B = B.next) {
                        var C = B.contact;
                        if (!(C.m_flags & box2d.b2ContactFlag.e_islandFlag)) {
                            var D = B.other;
                            if (D.m_type !== box2d.b2BodyType.b2_dynamicBody || A.IsBullet() !== !1 || D.IsBullet() !== !1) {
                                var E = C.m_fixtureA.m_isSensor,
                                    F = C.m_fixtureB.m_isSensor;
                                if (!E && !F) {
                                    var G = box2d.b2World.prototype.SolveTOI.s_backup.Copy(D.m_sweep);
                                    0 === (D.m_flags & box2d.b2BodyFlag.e_islandFlag) && D.Advance(f), C.Update(this.m_contactManager.m_contactListener), C.IsEnabled() !== !1 && C.IsTouching() !== !1 ? (C.m_flags |= box2d.b2ContactFlag.e_islandFlag, b.AddContact(C), D.m_flags & box2d.b2BodyFlag.e_islandFlag || (D.m_flags |= box2d.b2BodyFlag.e_islandFlag, D.m_type !== box2d.b2BodyType.b2_staticBody && D.SetAwake(!0), b.AddBody(D))) : (D.m_sweep.Copy(G), D.SynchronizeTransform())
                                }
                            }
                        }
                    }
            }
            var H = box2d.b2World.prototype.SolveTOI.s_subStep;
            H.dt = (1 - f) * a.dt, H.inv_dt = 1 / H.dt, H.dtRatio = 1, H.positionIterations = 20, H.velocityIterations = a.velocityIterations, H.warmStarting = !1, b.SolveTOI(H, j.m_islandIndex, k.m_islandIndex);
            for (var z = 0; z < b.m_bodyCount; ++z) {
                var A = b.m_bodies[z];
                if (A.m_flags &= ~box2d.b2BodyFlag.e_islandFlag, A.m_type === box2d.b2BodyType.b2_dynamicBody) {
                    A.SynchronizeFixtures();
                    for (var B = A.m_contactList; B; B = B.next) B.contact.m_flags &= ~(box2d.b2ContactFlag.e_toiFlag | box2d.b2ContactFlag.e_islandFlag)
                }
            }
            if (this.m_contactManager.FindNewContacts(), this.m_subStepping) {
                this.m_stepComplete = !1;
                break
            }
        } else e.SetEnabled(!1), j.m_sweep.Copy(x), k.m_sweep.Copy(y), j.SynchronizeTransform(), k.SynchronizeTransform()
    }
}, box2d.b2World.prototype.SolveTOI.s_subStep = new box2d.b2TimeStep, box2d.b2World.prototype.SolveTOI.s_backup = new box2d.b2Sweep, box2d.b2World.prototype.SolveTOI.s_backup1 = new box2d.b2Sweep, box2d.b2World.prototype.SolveTOI.s_backup2 = new box2d.b2Sweep, box2d.b2World.prototype.SolveTOI.s_toi_input = new box2d.b2TOIInput, box2d.b2World.prototype.SolveTOI.s_toi_output = new box2d.b2TOIOutput, box2d.b2World.prototype.Step = function(a, b, c) {
    var d = new box2d.b2Timer;
    this.m_flags & box2d.b2WorldFlag.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~box2d.b2WorldFlag.e_newFixture), this.m_flags |= box2d.b2WorldFlag.e_locked;
    var e = box2d.b2World.prototype.Step.s_step;
    e.dt = a, e.velocityIterations = b, e.positionIterations = c, e.inv_dt = a > 0 ? 1 / a : 0, e.dtRatio = this.m_inv_dt0 * a, e.warmStarting = this.m_warmStarting;
    var f = new box2d.b2Timer;
    if (this.m_contactManager.Collide(), this.m_profile.collide = f.GetMilliseconds(), this.m_stepComplete && e.dt > 0) {
        var f = new box2d.b2Timer;
        this.Solve(e), this.m_profile.solve = f.GetMilliseconds()
    }
    if (this.m_continuousPhysics && e.dt > 0) {
        var f = new box2d.b2Timer;
        this.SolveTOI(e), this.m_profile.solveTOI = f.GetMilliseconds()
    }
    e.dt > 0 && (this.m_inv_dt0 = e.inv_dt), this.m_flags & box2d.b2WorldFlag.e_clearForces && this.ClearForces(), this.m_flags &= ~box2d.b2WorldFlag.e_locked, this.m_profile.step = d.GetMilliseconds()
}, box2d.b2World.prototype.Step.s_step = new box2d.b2TimeStep, box2d.b2World.prototype.ClearForces = function() {
    for (var a = this.m_bodyList; a; a = a.m_next) a.m_force.SetZero(), a.m_torque = 0
}, box2d.b2World.prototype.QueryAABB = function(a, b) {
    var c = this.m_contactManager.m_broadPhase,
        d = function(b) {
            var d = c.GetUserData(b);
            box2d.ENABLE_ASSERTS && box2d.b2Assert(d instanceof box2d.b2FixtureProxy); {
                var e = d.fixture;
                d.childIndex
            }
            return a instanceof box2d.b2QueryCallback ? a.ReportFixture(e) : a(e)
        };
    c.Query(d, b)
}, box2d.b2World.prototype.QueryShape = function(a, b, c) {
    var d = this.m_contactManager.m_broadPhase,
        e = function(e) {
            var f = d.GetUserData(e);
            box2d.ENABLE_ASSERTS && box2d.b2Assert(f instanceof box2d.b2FixtureProxy); {
                var g = f.fixture;
                f.childIndex
            }
            return box2d.b2TestOverlapShape(b, 0, g.GetShape(), 0, c, g.GetBody().GetTransform()) ? a instanceof box2d.b2QueryCallback ? a.ReportFixture(g) : a(g) : !0
        },
        f = box2d.b2World.prototype.QueryShape.s_aabb;
    b.ComputeAABB(f, c, 0), d.Query(e, f)
}, box2d.b2World.prototype.QueryShape.s_aabb = new box2d.b2AABB, box2d.b2World.prototype.QueryPoint = function(a, b) {
    var c = this.m_contactManager.m_broadPhase,
        d = function(d) {
            var e = c.GetUserData(d);
            box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2FixtureProxy); {
                var f = e.fixture;
                e.childIndex
            }
            return f.TestPoint(b) ? a instanceof box2d.b2QueryCallback ? a.ReportFixture(f) : a(f) : !0
        },
        e = box2d.b2World.prototype.QueryPoint.s_aabb;
    e.lowerBound.SetXY(b.x - box2d.b2_linearSlop, b.y - box2d.b2_linearSlop), e.upperBound.SetXY(b.x + box2d.b2_linearSlop, b.y + box2d.b2_linearSlop), c.Query(d, e)
}, box2d.b2World.prototype.QueryPoint.s_aabb = new box2d.b2AABB, box2d.b2World.prototype.RayCast = function(a, b, c) {
    var d = this.m_contactManager.m_broadPhase,
        e = function(e, f) {
            var g = d.GetUserData(f);
            box2d.ENABLE_ASSERTS && box2d.b2Assert(g instanceof box2d.b2FixtureProxy);
            var h = g.fixture,
                i = g.childIndex,
                j = box2d.b2World.prototype.RayCast.s_output,
                k = h.RayCast(j, e, i);
            if (k) {
                var l = j.fraction,
                    m = box2d.b2World.prototype.RayCast.s_point;
                return m.SetXY((1 - l) * b.x + l * c.x, (1 - l) * b.y + l * c.y), a instanceof box2d.b2RayCastCallback ? a.ReportFixture(h, m, j.normal, l) : a(h, m, j.normal, l)
            }
            return e.maxFraction
        },
        f = box2d.b2World.prototype.RayCast.s_input;
    f.maxFraction = 1, f.p1.Copy(b), f.p2.Copy(c), d.RayCast(e, f)
}, box2d.b2World.prototype.RayCast.s_input = new box2d.b2RayCastInput, box2d.b2World.prototype.RayCast.s_output = new box2d.b2RayCastOutput, box2d.b2World.prototype.RayCast.s_point = new box2d.b2Vec2, box2d.b2World.prototype.RayCastOne = function(a, b) {
    function c(a, b, c, f) {
        return e > f && (e = f, d = a), e
    }
    var d = null,
        e = 1;
    return this.RayCast(c, a, b), d
}, box2d.b2World.prototype.RayCastAll = function(a, b, c) {
    function d(a) {
        return c.push(a), 1
    }
    return c.length = 0, this.RayCast(d, a, b), c
}, box2d.b2World.prototype.DrawShape = function(a, b) {
    var c = a.GetShape();
    switch (c.m_type) {
        case box2d.b2ShapeType.e_circleShape:
            var d = c instanceof box2d.b2CircleShape ? c : null,
                e = d.m_p,
                f = d.m_radius,
                g = box2d.b2Vec2.UNITX;
            this.m_debugDraw.DrawSolidCircle(e, f, g, b);
            break;
        case box2d.b2ShapeType.e_edgeShape:
            var h = c instanceof box2d.b2EdgeShape ? c : null,
                i = h.m_vertex1,
                j = h.m_vertex2;
            this.m_debugDraw.DrawSegment(i, j, b);
            break;
        case box2d.b2ShapeType.e_chainShape:
            for (var k = c instanceof box2d.b2ChainShape ? c : null, l = k.m_count, m = k.m_vertices, i = m[0], n = 0; l > n; ++n) {
                var j = m[n];
                this.m_debugDraw.DrawSegment(i, j, b), this.m_debugDraw.DrawCircle(j, .05, b), i = j
            }
            break;
        case box2d.b2ShapeType.e_polygonShape:
            var o = c instanceof box2d.b2PolygonShape ? c : null,
                p = o.m_count,
                m = o.m_vertices;
            this.m_debugDraw.DrawSolidPolygon(m, p, b)
    }
}, box2d.b2World.prototype.DrawJoint = function(a) {
    var b = a.GetBodyA(),
        c = a.GetBodyB(),
        d = b.m_xf,
        e = c.m_xf,
        f = d.p,
        g = e.p,
        h = a.GetAnchorA(box2d.b2World.prototype.DrawJoint.s_p1),
        i = a.GetAnchorB(box2d.b2World.prototype.DrawJoint.s_p2),
        j = box2d.b2World.prototype.DrawJoint.s_color.SetRGB(.5, .8, .8);
    switch (a.m_type) {
        case box2d.b2JointType.e_distanceJoint:
            this.m_debugDraw.DrawSegment(h, i, j);
            break;
        case box2d.b2JointType.e_pulleyJoint:
            var k = a instanceof box2d.b2PulleyJoint ? a : null,
                l = k.GetGroundAnchorA(box2d.b2World.prototype.DrawJoint.s_s1),
                m = k.GetGroundAnchorB(box2d.b2World.prototype.DrawJoint.s_s2);
            this.m_debugDraw.DrawSegment(l, h, j), this.m_debugDraw.DrawSegment(m, i, j), this.m_debugDraw.DrawSegment(l, m, j);
            break;
        case box2d.b2JointType.e_mouseJoint:
            this.m_debugDraw.DrawSegment(h, i, j);
            break;
        default:
            this.m_debugDraw.DrawSegment(f, h, j), this.m_debugDraw.DrawSegment(h, i, j), this.m_debugDraw.DrawSegment(g, i, j)
    }
}, box2d.b2World.prototype.DrawJoint.s_p1 = new box2d.b2Vec2, box2d.b2World.prototype.DrawJoint.s_p2 = new box2d.b2Vec2, box2d.b2World.prototype.DrawJoint.s_color = new box2d.b2Color(.5, .8, .8), box2d.b2World.prototype.DrawJoint.s_s1 = new box2d.b2Vec2, box2d.b2World.prototype.DrawJoint.s_s2 = new box2d.b2Vec2, box2d.b2World.prototype.DrawDebugData = function() {
    if (null !== this.m_debugDraw) {
        var a = this.m_debugDraw.GetFlags(),
            b = box2d.b2World.prototype.DrawDebugData.s_color.SetRGB(0, 0, 0);
        if (a & box2d.b2DrawFlags.e_shapeBit)
            for (var c = this.m_bodyList; c; c = c.m_next) {
                var d = c.m_xf;
                this.m_debugDraw.PushTransform(d);
                for (var e = c.GetFixtureList(); e; e = e.m_next) c.IsActive() === !1 ? (b.SetRGB(.5, .5, .3), this.DrawShape(e, b)) : c.GetType() === box2d.b2BodyType.b2_staticBody ? (b.SetRGB(.5, .9, .5), this.DrawShape(e, b)) : c.GetType() === box2d.b2BodyType.b2_kinematicBody ? (b.SetRGB(.5, .5, .9), this.DrawShape(e, b)) : c.IsAwake() === !1 ? (b.SetRGB(.6, .6, .6), this.DrawShape(e, b)) : (b.SetRGB(.9, .7, .7), this.DrawShape(e, b));
                this.m_debugDraw.PopTransform(d)
            }
        if (a & box2d.b2DrawFlags.e_jointBit)
            for (var f = this.m_jointList; f; f = f.m_next) this.DrawJoint(f);
        if (a & box2d.b2DrawFlags.e_aabbBit) {
            b.SetRGB(.9, .3, .9);
            for (var g = this.m_contactManager.m_broadPhase, h = box2d.b2World.prototype.DrawDebugData.s_vs, c = this.m_bodyList; c; c = c.m_next)
                if (c.IsActive() !== !1)
                    for (var e = c.GetFixtureList(); e; e = e.m_next)
                        for (var i = 0; i < e.m_proxyCount; ++i) {
                            var j = e.m_proxies[i],
                                k = g.GetFatAABB(j.proxy);
                            h[0].SetXY(k.lowerBound.x, k.lowerBound.y), h[1].SetXY(k.upperBound.x, k.lowerBound.y), h[2].SetXY(k.upperBound.x, k.upperBound.y), h[3].SetXY(k.lowerBound.x, k.upperBound.y), this.m_debugDraw.DrawPolygon(h, 4, b)
                        }
        }
        if (a & box2d.b2DrawFlags.e_centerOfMassBit)
            for (var c = this.m_bodyList; c; c = c.m_next) {
                var d = box2d.b2World.prototype.DrawDebugData.s_xf;
                d.q.Copy(c.m_xf.q), d.p.Copy(c.GetWorldCenter()), this.m_debugDraw.DrawTransform(d)
            }
        if (a & box2d.b2DrawFlags.e_controllerBit)
            for (var l = this.m_controllerList; l; l = l.m_next) l.Draw(this.m_debugDraw)
    }
}, box2d.b2World.prototype.DrawDebugData.s_color = new box2d.b2Color(0, 0, 0), box2d.b2World.prototype.DrawDebugData.s_vs = box2d.b2Vec2.MakeArray(4), box2d.b2World.prototype.DrawDebugData.s_xf = new box2d.b2Transform, box2d.b2World.prototype.SetBroadPhase = function(a) {
    var b = this.m_contactManager.m_broadPhase;
    this.m_contactManager.m_broadPhase = a;
    for (var c = this.m_bodyList; c; c = c.m_next)
        for (var d = c.m_fixtureList; d; d = d.m_next) d.m_proxy = a.CreateProxy(b.GetFatAABB(d.m_proxy), d)
}, box2d.b2World.prototype.GetProxyCount = function() {
    return this.m_contactManager.m_broadPhase.GetProxyCount()
}, box2d.b2World.prototype.GetTreeHeight = function() {
    return this.m_contactManager.m_broadPhase.GetTreeHeight()
}, box2d.b2World.prototype.GetTreeBalance = function() {
    return this.m_contactManager.m_broadPhase.GetTreeBalance()
}, box2d.b2World.prototype.GetTreeQuality = function() {
    return this.m_contactManager.m_broadPhase.GetTreeQuality()
}, box2d.b2World.prototype.ShiftOrigin = function(a) {
    if (box2d.ENABLE_ASSERTS && box2d.b2Assert(this.IsLocked() === !1), !this.IsLocked()) {
        for (var b = this.m_bodyList; b; b = b.m_next) b.m_xf.p.SelfSub(a), b.m_sweep.c0.SelfSub(a), b.m_sweep.c.SelfSub(a);
        for (var c = this.m_jointList; c; c = c.m_next) c.ShiftOrigin(a);
        this.m_contactManager.m_broadPhase.ShiftOrigin(a)
    }
}, box2d.b2World.prototype.Dump = function() {
    if (box2d.DEBUG) {
        if ((this.m_flags & box2d.b2WorldFlag.e_locked) === box2d.b2WorldFlag.e_locked) return;
        box2d.b2Log("/** @type {box2d.b2Vec2} */ var g = new box2d.b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y), box2d.b2Log("this.m_world.SetGravity(g);\n"), box2d.b2Log("/** @type {Array.<box2d.b2Body>} */ var bodies = new Array(%d);\n", this.m_bodyCount), box2d.b2Log("/** @type {Array.<box2d.b2Joint>} */ var joints = new Array(%d);\n", this.m_jointCount);
        for (var a = 0, b = this.m_bodyList; b; b = b.m_next) b.m_islandIndex = a, b.Dump(), ++a;
        a = 0;
        for (var c = this.m_jointList; c; c = c.m_next) c.m_index = a, ++a;
        for (var c = this.m_jointList; c; c = c.m_next) c.m_type !== box2d.b2JointType.e_gearJoint && (box2d.b2Log("if (true)\n"), box2d.b2Log("{\n"), c.Dump(), box2d.b2Log("}\n"));
        for (var c = this.m_jointList; c; c = c.m_next) c.m_type === box2d.b2JointType.e_gearJoint && (box2d.b2Log("if (true)\n"), box2d.b2Log("{\n"), c.Dump(), box2d.b2Log("}\n"))
    }
}, box2d.b2World.prototype.AddController = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(null === a.m_world, "Controller can only be a member of one world"), a.m_world = this, a.m_next = this.m_controllerList, a.m_prev = null, this.m_controllerList && (this.m_controllerList.m_prev = a), this.m_controllerList = a, ++this.m_controllerCount, a
}, box2d.b2World.prototype.RemoveController = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(a.m_world === this, "Controller is not a member of this world"), a.m_prev && (a.m_prev.m_next = a.m_next), a.m_next && (a.m_next.m_prev = a.m_prev), this.m_controllerList === a && (this.m_controllerList = a.m_next), --this.m_controllerCount, a.m_prev = null, a.m_next = null, a.m_world = null
}, goog.provide("box2d.b2AreaJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2AreaJointDef = function() {
    goog.base(this, box2d.b2JointType.e_areaJoint), this.bodies = new Array
}, goog.inherits(box2d.b2AreaJointDef, box2d.b2JointDef), box2d.b2AreaJointDef.prototype.world = null, box2d.b2AreaJointDef.prototype.bodies = null, box2d.b2AreaJointDef.prototype.frequencyHz = 0, box2d.b2AreaJointDef.prototype.dampingRatio = 0, box2d.b2AreaJointDef.prototype.AddBody = function(a) {
    this.bodies.push(a), 1 === this.bodies.length ? this.bodyA = a : 2 === this.bodies.length && (this.bodyB = a)
}, box2d.b2AreaJoint = function(a) {
    goog.base(this, a), box2d.ENABLE_ASSERTS && box2d.b2Assert(a.bodies.length >= 3, "You cannot create an area joint with less than three bodies."), this.m_bodies = a.bodies, this.m_frequencyHz = a.frequencyHz, this.m_dampingRatio = a.dampingRatio, this.m_targetLengths = box2d.b2MakeNumberArray(a.bodies.length), this.m_normals = box2d.b2Vec2.MakeArray(a.bodies.length), this.m_joints = new Array(a.bodies.length), this.m_deltas = box2d.b2Vec2.MakeArray(a.bodies.length), this.m_delta = new box2d.b2Vec2;
    var b = new box2d.b2DistanceJointDef;
    b.frequencyHz = a.frequencyHz, b.dampingRatio = a.dampingRatio, this.m_targetArea = 0;
    for (var c = 0, d = this.m_bodies.length; d > c; ++c) {
        var e = this.m_bodies[c],
            f = this.m_bodies[(c + 1) % d],
            g = e.GetWorldCenter(),
            h = f.GetWorldCenter();
        this.m_targetLengths[c] = box2d.b2DistanceVV(g, h), this.m_targetArea += box2d.b2CrossVV(g, h), b.Initialize(e, f, g, h), this.m_joints[c] = a.world.CreateJoint(b)
    }
    this.m_targetArea *= .5
}, goog.inherits(box2d.b2AreaJoint, box2d.b2Joint), box2d.b2AreaJoint.prototype.m_bodies = null, box2d.b2AreaJoint.prototype.m_frequencyHz = 0, box2d.b2AreaJoint.prototype.m_dampingRatio = 0, box2d.b2AreaJoint.prototype.m_impulse = 0, box2d.b2AreaJoint.prototype.m_targetLengths = null, box2d.b2AreaJoint.prototype.m_targetArea = 0, box2d.b2AreaJoint.prototype.m_normals = null, box2d.b2AreaJoint.prototype.m_joints = null, box2d.b2AreaJoint.prototype.m_deltas = null, box2d.b2AreaJoint.prototype.m_delta = null, box2d.b2AreaJoint.prototype.GetAnchorA = function(a) {
    return a.SetZero()
}, box2d.b2AreaJoint.prototype.GetAnchorB = function(a) {
    return a.SetZero()
}, box2d.b2AreaJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetZero()
}, box2d.b2AreaJoint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2AreaJoint.prototype.SetFrequency = function(a) {
    this.m_frequencyHz = a;
    for (var b = 0, c = this.m_joints.length; c > b; ++b) this.m_joints[b].SetFrequency(a)
}, box2d.b2AreaJoint.prototype.GetFrequency = function() {
    return this.m_frequencyHz
}, box2d.b2AreaJoint.prototype.SetDampingRatio = function(a) {
    this.m_dampingRatio = a;
    for (var b = 0, c = this.m_joints.length; c > b; ++b) this.m_joints[b].SetDampingRatio(a)
}, box2d.b2AreaJoint.prototype.GetDampingRatio = function() {
    return this.m_dampingRatio
}, box2d.b2AreaJoint.prototype.Dump = function() {
    box2d.DEBUG && box2d.b2Log("Area joint dumping is not supported.\n")
}, box2d.b2AreaJoint.prototype.InitVelocityConstraints = function(a) {
    for (var b = 0, c = this.m_bodies.length; c > b; ++b) {
        var d = this.m_bodies[(b + c - 1) % c],
            e = this.m_bodies[(b + 1) % c],
            f = a.positions[d.m_islandIndex].c,
            g = a.positions[e.m_islandIndex].c,
            h = this.m_deltas[b];
        box2d.b2SubVV(g, f, h)
    }
    if (a.step.warmStarting) {
        this.m_impulse *= a.step.dtRatio;
        for (var b = 0, c = this.m_bodies.length; c > b; ++b) {
            var i = this.m_bodies[b],
                j = a.velocities[i.m_islandIndex].v,
                h = this.m_deltas[b];
            j.x += i.m_invMass * h.y * .5 * this.m_impulse, j.y += i.m_invMass * -h.x * .5 * this.m_impulse
        }
    } else this.m_impulse = 0
}, box2d.b2AreaJoint.prototype.SolveVelocityConstraints = function(a) {
    for (var b = 0, c = 0, d = 0, e = this.m_bodies.length; e > d; ++d) {
        var f = this.m_bodies[d],
            g = a.velocities[f.m_islandIndex].v,
            h = this.m_deltas[d];
        b += h.GetLengthSquared() / f.GetMass(), c += box2d.b2CrossVV(g, h)
    }
    var i = -2 * c / b;
    this.m_impulse += i;
    for (var d = 0, e = this.m_bodies.length; e > d; ++d) {
        var f = this.m_bodies[d],
            g = a.velocities[f.m_islandIndex].v,
            h = this.m_deltas[d];
        g.x += f.m_invMass * h.y * .5 * i, g.y += f.m_invMass * -h.x * .5 * i
    }
}, box2d.b2AreaJoint.prototype.SolvePositionConstraints = function(a) {
    for (var b = 0, c = 0, d = 0, e = this.m_bodies.length; e > d; ++d) {
        var f = this.m_bodies[d],
            g = this.m_bodies[(d + 1) % e],
            h = a.positions[f.m_islandIndex].c,
            i = a.positions[g.m_islandIndex].c,
            j = box2d.b2SubVV(i, h, this.m_delta),
            k = j.GetLength();
        k < box2d.b2_epsilon && (k = 1), this.m_normals[d].x = j.y / k, this.m_normals[d].y = -j.x / k, b += k, c += box2d.b2CrossVV(h, i)
    }
    c *= .5;
    for (var l = this.m_targetArea - c, m = .5 * l / b, n = !0, d = 0, e = this.m_bodies.length; e > d; ++d) {
        var f = this.m_bodies[d],
            h = a.positions[f.m_islandIndex].c,
            o = (d + 1) % e,
            j = box2d.b2AddVV(this.m_normals[d], this.m_normals[o], this.m_delta);
        j.SelfMul(m);
        var p = j.GetLengthSquared();
        p > box2d.b2Sq(box2d.b2_maxLinearCorrection) && j.SelfMul(box2d.b2_maxLinearCorrection / box2d.b2Sqrt(p)), p > box2d.b2Sq(box2d.b2_linearSlop) && (n = !1), h.x += j.x, h.y += j.y
    }
    return n
}, goog.provide("box2d.b2BuoyancyController"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Controller"), goog.require("box2d.b2Math"), goog.require("box2d.b2WorldCallbacks"), box2d.b2BuoyancyController = function() {
    goog.base(this), this.normal = new box2d.b2Vec2(0, 1), this.velocity = new box2d.b2Vec2(0, 0), this.gravity = new box2d.b2Vec2(0, 0)
}, goog.inherits(box2d.b2BuoyancyController, box2d.b2Controller), box2d.b2BuoyancyController.prototype.normal = null, box2d.b2BuoyancyController.prototype.offset = 0, box2d.b2BuoyancyController.prototype.density = 0, box2d.b2BuoyancyController.prototype.velocity = null, box2d.b2BuoyancyController.prototype.linearDrag = 0, box2d.b2BuoyancyController.prototype.angularDrag = 0, box2d.b2BuoyancyController.prototype.useDensity = !1, box2d.b2BuoyancyController.prototype.useWorldGravity = !0, box2d.b2BuoyancyController.prototype.gravity = null, box2d.b2BuoyancyController.prototype.Step = function() {
    if (this.m_bodyList) {
        this.useWorldGravity && this.gravity.Copy(this.GetWorld().GetGravity());
        for (var a = this.m_bodyList; a; a = a.nextBody) {
            var b = a.body;
            if (b.IsAwake() !== !1) {
                for (var c = new box2d.b2Vec2, d = new box2d.b2Vec2, e = 0, f = 0, g = b.GetFixtureList(); g; g = g.m_next) {
                    var h = new box2d.b2Vec2,
                        i = g.GetShape().ComputeSubmergedArea(this.normal, this.offset, b.GetTransform(), h);
                    e += i, c.x += i * h.x, c.y += i * h.y;
                    var j = 0;
                    j = this.useDensity ? g.GetDensity() : 1, f += i * j, d.x += i * h.x * j, d.y += i * h.y * j
                }
                if (c.x /= e, c.y /= e, d.x /= f, d.y /= f, !(e < box2d.b2_epsilon)) {
                    var k = box2d.b2NegV(this.gravity, new box2d.b2Vec2);
                    k.SelfMul(this.density * e), b.ApplyForce(k, d);
                    var l = b.GetLinearVelocityFromWorldPoint(c, new box2d.b2Vec2);
                    l.SelfSub(this.velocity), l.SelfMul(-this.linearDrag * e), b.ApplyForce(l, c), b.ApplyTorque(-b.GetInertia() / b.GetMass() * e * b.GetAngularVelocity() * this.angularDrag)
                }
            }
        }
    }
}, box2d.b2BuoyancyController.prototype.Draw = function(a) {
    var b = 100,
        c = new box2d.b2Vec2,
        d = new box2d.b2Vec2;
    c.x = this.normal.x * this.offset + this.normal.y * b, c.y = this.normal.y * this.offset - this.normal.x * b, d.x = this.normal.x * this.offset - this.normal.y * b, d.y = this.normal.y * this.offset + this.normal.x * b;
    var e = new box2d.b2Color(0, 0, .8);
    a.DrawSegment(c, d, e)
}, goog.provide("box2d.b2TensorDampingController"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Controller"), goog.require("box2d.b2Math"), box2d.b2TensorDampingController = function() {
    goog.base(this), this.T = new box2d.b2Mat22, this.maxTimestep = 0
}, goog.inherits(box2d.b2TensorDampingController, box2d.b2Controller), box2d.b2TensorDampingController.prototype.T = new box2d.b2Mat22, box2d.b2TensorDampingController.prototype.maxTimestep = 0, box2d.b2TensorDampingController.prototype.Step = function(a) {
    var b = a.dt;
    if (!(b <= box2d.b2_epsilon)) {
        b > this.maxTimestep && this.maxTimestep > 0 && (b = this.maxTimestep);
        for (var c = this.m_bodyList; c; c = c.nextBody) {
            var d = c.body;
            if (d.IsAwake()) {
                var e = d.GetWorldVector(box2d.b2MulMV(this.T, d.GetLocalVector(d.GetLinearVelocity(), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1), box2d.b2TensorDampingController.prototype.Step.s_damping);
                d.SetLinearVelocity(box2d.b2AddVV(d.GetLinearVelocity(), box2d.b2MulSV(b, e, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1))
            }
        }
    }
}, box2d.b2TensorDampingController.prototype.Step.s_damping = new box2d.b2Vec2, box2d.b2TensorDampingController.prototype.SetAxisAligned = function(a, b) {
    this.T.ex.x = -a, this.T.ex.y = 0, this.T.ey.x = 0, this.T.ey.y = -b, this.maxTimestep = a > 0 || b > 0 ? 1 / box2d.b2Max(a, b) : 0
}, goog.provide("box2d.b2DistanceJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2DistanceJointDef = function() {
    goog.base(this, box2d.b2JointType.e_distanceJoint), this.localAnchorA = new box2d.b2Vec2, this.localAnchorB = new box2d.b2Vec2
}, goog.inherits(box2d.b2DistanceJointDef, box2d.b2JointDef), box2d.b2DistanceJointDef.prototype.localAnchorA = null, box2d.b2DistanceJointDef.prototype.localAnchorB = null, box2d.b2DistanceJointDef.prototype.length = 1, box2d.b2DistanceJointDef.prototype.frequencyHz = 0, box2d.b2DistanceJointDef.prototype.dampingRatio = 0, box2d.b2DistanceJointDef.prototype.Initialize = function(a, b, c, d) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(d, this.localAnchorB), this.length = box2d.b2DistanceVV(c, d), this.frequencyHz = 0, this.dampingRatio = 0
}, box2d.b2DistanceJoint = function(a) {
    goog.base(this, a), this.m_u = new box2d.b2Vec2, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_frequencyHz = a.frequencyHz, this.m_dampingRatio = a.dampingRatio, this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_length = a.length
}, goog.inherits(box2d.b2DistanceJoint, box2d.b2Joint), box2d.b2DistanceJoint.prototype.m_frequencyHz = 0, box2d.b2DistanceJoint.prototype.m_dampingRatio = 0, box2d.b2DistanceJoint.prototype.m_bias = 0, box2d.b2DistanceJoint.prototype.m_localAnchorA = null, box2d.b2DistanceJoint.prototype.m_localAnchorB = null, box2d.b2DistanceJoint.prototype.m_gamma = 0, box2d.b2DistanceJoint.prototype.m_impulse = 0, box2d.b2DistanceJoint.prototype.m_length = 0, box2d.b2DistanceJoint.prototype.m_indexA = 0, box2d.b2DistanceJoint.prototype.m_indexB = 0, box2d.b2DistanceJoint.prototype.m_u = null, box2d.b2DistanceJoint.prototype.m_rA = null, box2d.b2DistanceJoint.prototype.m_rB = null, box2d.b2DistanceJoint.prototype.m_localCenterA = null, box2d.b2DistanceJoint.prototype.m_localCenterB = null, box2d.b2DistanceJoint.prototype.m_invMassA = 0, box2d.b2DistanceJoint.prototype.m_invMassB = 0, box2d.b2DistanceJoint.prototype.m_invIA = 0, box2d.b2DistanceJoint.prototype.m_invIB = 0, box2d.b2DistanceJoint.prototype.m_mass = 0, box2d.b2DistanceJoint.prototype.m_qA = null, box2d.b2DistanceJoint.prototype.m_qB = null, box2d.b2DistanceJoint.prototype.m_lalcA = null, box2d.b2DistanceJoint.prototype.m_lalcB = null, box2d.b2DistanceJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2DistanceJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2DistanceJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * this.m_impulse * this.m_u.x, a * this.m_impulse * this.m_u.y)
}, box2d.b2DistanceJoint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2DistanceJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2DistanceJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2DistanceJoint.prototype.SetLength = function(a) {
    this.m_length = a
}, box2d.b2DistanceJoint.prototype.GetLength = function() {
    return this.m_length
}, box2d.b2DistanceJoint.prototype.SetFrequency = function(a) {
    this.m_frequencyHz = a
}, box2d.b2DistanceJoint.prototype.GetFrequency = function() {
    return this.m_frequencyHz
}, box2d.b2DistanceJoint.prototype.SetDampingRatio = function(a) {
    this.m_dampingRatio = a
}, box2d.b2DistanceJoint.prototype.GetDampingRatio = function() {
    return this.m_dampingRatio
}, box2d.b2DistanceJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2DistanceJointDef*/ var jd = new box2d.b2DistanceJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.length = %.15f;\n", this.m_length), box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, box2d.b2DistanceJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.velocities[this.m_indexA].v,
        e = a.velocities[this.m_indexA].w,
        f = a.positions[this.m_indexB].c,
        g = a.positions[this.m_indexB].a,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = this.m_qA.SetAngleRadians(c),
        k = this.m_qB.SetAngleRadians(g);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2MulRV(j, this.m_lalcA, this.m_rA), box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(k, this.m_lalcB, this.m_rB), this.m_u.x = f.x + this.m_rB.x - b.x - this.m_rA.x, this.m_u.y = f.y + this.m_rB.y - b.y - this.m_rA.y;
    var l = this.m_u.GetLength();
    l > box2d.b2_linearSlop ? this.m_u.SelfMul(1 / l) : this.m_u.SetZero();
    var m = box2d.b2CrossVV(this.m_rA, this.m_u),
        n = box2d.b2CrossVV(this.m_rB, this.m_u),
        o = this.m_invMassA + this.m_invIA * m * m + this.m_invMassB + this.m_invIB * n * n;
    if (this.m_mass = 0 !== o ? 1 / o : 0, this.m_frequencyHz > 0) {
        var p = l - this.m_length,
            q = 2 * box2d.b2_pi * this.m_frequencyHz,
            r = 2 * this.m_mass * this.m_dampingRatio * q,
            s = this.m_mass * q * q,
            t = a.step.dt;
        this.m_gamma = t * (r + t * s), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0, this.m_bias = p * t * s * this.m_gamma, o += this.m_gamma, this.m_mass = 0 !== o ? 1 / o : 0
    } else this.m_gamma = 0, this.m_bias = 0;
    if (a.step.warmStarting) {
        this.m_impulse *= a.step.dtRatio;
        var u = box2d.b2MulSV(this.m_impulse, this.m_u, box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P);
        d.SelfMulSub(this.m_invMassA, u), e -= this.m_invIA * box2d.b2CrossVV(this.m_rA, u), h.SelfMulAdd(this.m_invMassB, u), i += this.m_invIB * box2d.b2CrossVV(this.m_rB, u)
    } else this.m_impulse = 0;
    a.velocities[this.m_indexA].w = e, a.velocities[this.m_indexB].w = i
}, box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA),
        g = box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB),
        h = box2d.b2DotVV(this.m_u, box2d.b2SubVV(g, f, box2d.b2Vec2.s_t0)),
        i = -this.m_mass * (h + this.m_bias + this.m_gamma * this.m_impulse);
    this.m_impulse += i;
    var j = box2d.b2MulSV(i, this.m_u, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P);
    b.SelfMulSub(this.m_invMassA, j), c -= this.m_invIA * box2d.b2CrossVV(this.m_rA, j), d.SelfMulAdd(this.m_invMassB, j), e += this.m_invIB * box2d.b2CrossVV(this.m_rB, j), a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2DistanceJoint.prototype.SolvePositionConstraints = function(a) {
    if (this.m_frequencyHz > 0) return !0;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = (this.m_qA.SetAngleRadians(c), this.m_qB.SetAngleRadians(e), box2d.b2MulRV(this.m_qA, this.m_lalcA, this.m_rA)),
        g = box2d.b2MulRV(this.m_qB, this.m_lalcB, this.m_rB),
        h = this.m_u;
    h.x = d.x + g.x - b.x - f.x, h.y = d.y + g.y - b.y - f.y;
    var i = this.m_u.Normalize(),
        j = i - this.m_length;
    j = box2d.b2Clamp(j, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection);
    var k = -this.m_mass * j,
        l = box2d.b2MulSV(k, h, box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P);
    return b.SelfMulSub(this.m_invMassA, l), c -= this.m_invIA * box2d.b2CrossVV(f, l), d.SelfMulAdd(this.m_invMassB, l), e += this.m_invIB * box2d.b2CrossVV(g, l), a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, box2d.b2Abs(j) < box2d.b2_linearSlop
}, box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, goog.provide("box2d.b2FrictionJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2FrictionJointDef = function() {
    goog.base(this, box2d.b2JointType.e_frictionJoint), this.localAnchorA = new box2d.b2Vec2, this.localAnchorB = new box2d.b2Vec2
}, goog.inherits(box2d.b2FrictionJointDef, box2d.b2JointDef), box2d.b2FrictionJointDef.prototype.localAnchorA = null, box2d.b2FrictionJointDef.prototype.localAnchorB = null, box2d.b2FrictionJointDef.prototype.maxForce = 0, box2d.b2FrictionJointDef.prototype.maxTorque = 0, box2d.b2FrictionJointDef.prototype.Initialize = function(a, b, c) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(c, this.localAnchorB)
}, box2d.b2FrictionJoint = function(a) {
    goog.base(this, a), this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_linearImpulse = (new box2d.b2Vec2).SetZero(), this.m_maxForce = a.maxForce, this.m_maxTorque = a.maxTorque, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_linearMass = (new box2d.b2Mat22).SetZero(), this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_K = new box2d.b2Mat22
}, goog.inherits(box2d.b2FrictionJoint, box2d.b2Joint), box2d.b2FrictionJoint.prototype.m_localAnchorA = null, box2d.b2FrictionJoint.prototype.m_localAnchorB = null, box2d.b2FrictionJoint.prototype.m_linearImpulse = null, box2d.b2FrictionJoint.prototype.m_angularImpulse = 0, box2d.b2FrictionJoint.prototype.m_maxForce = 0, box2d.b2FrictionJoint.prototype.m_maxTorque = 0, box2d.b2FrictionJoint.prototype.m_indexA = 0, box2d.b2FrictionJoint.prototype.m_indexB = 0, box2d.b2FrictionJoint.prototype.m_rA = null, box2d.b2FrictionJoint.prototype.m_rB = null, box2d.b2FrictionJoint.prototype.m_localCenterA = null, box2d.b2FrictionJoint.prototype.m_localCenterB = null, box2d.b2FrictionJoint.prototype.m_invMassA = 0, box2d.b2FrictionJoint.prototype.m_invMassB = 0, box2d.b2FrictionJoint.prototype.m_invIA = 0, box2d.b2FrictionJoint.prototype.m_invIB = 0, box2d.b2FrictionJoint.prototype.m_linearMass = null, box2d.b2FrictionJoint.prototype.m_angularMass = 0, box2d.b2FrictionJoint.prototype.m_qA = null, box2d.b2FrictionJoint.prototype.m_qB = null, box2d.b2FrictionJoint.prototype.m_lalcA = null, box2d.b2FrictionJoint.prototype.m_lalcB = null, box2d.b2FrictionJoint.prototype.m_K = null, box2d.b2FrictionJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].a,
        c = a.velocities[this.m_indexA].v,
        d = a.velocities[this.m_indexA].w,
        e = a.positions[this.m_indexB].a,
        f = a.velocities[this.m_indexB].v,
        g = a.velocities[this.m_indexB].w,
        h = this.m_qA.SetAngleRadians(b),
        i = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var j = box2d.b2MulRV(h, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var k = box2d.b2MulRV(i, this.m_lalcB, this.m_rB),
        l = this.m_invMassA,
        m = this.m_invMassB,
        n = this.m_invIA,
        o = this.m_invIB,
        p = this.m_K;
    if (p.ex.x = l + m + n * j.y * j.y + o * k.y * k.y, p.ex.y = -n * j.x * j.y - o * k.x * k.y, p.ey.x = p.ex.y, p.ey.y = l + m + n * j.x * j.x + o * k.x * k.x, p.GetInverse(this.m_linearMass), this.m_angularMass = n + o, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), a.step.warmStarting) {
        this.m_linearImpulse.SelfMul(a.step.dtRatio), this.m_angularImpulse *= a.step.dtRatio;
        var q = this.m_linearImpulse;
        c.SelfMulSub(l, q), d -= n * (box2d.b2CrossVV(this.m_rA, q) + this.m_angularImpulse), f.SelfMulAdd(m, q), g += o * (box2d.b2CrossVV(this.m_rB, q) + this.m_angularImpulse)
    } else this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0;
    a.velocities[this.m_indexA].w = d, a.velocities[this.m_indexB].w = g
}, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_invMassA,
        g = this.m_invMassB,
        h = this.m_invIA,
        i = this.m_invIB,
        j = a.step.dt,
        k = e - c,
        l = -this.m_angularMass * k,
        m = this.m_angularImpulse,
        n = j * this.m_maxTorque;
    this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + l, -n, n), l = this.m_angularImpulse - m, c -= h * l, e += i * l;
    var k = box2d.b2SubVV(box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot),
        o = box2d.b2MulMV(this.m_linearMass, k, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV).SelfNeg(),
        p = box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV.Copy(this.m_linearImpulse);
    this.m_linearImpulse.SelfAdd(o);
    var n = j * this.m_maxForce;
    this.m_linearImpulse.GetLengthSquared() > n * n && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.SelfMul(n)), box2d.b2SubVV(this.m_linearImpulse, p, o), b.SelfMulSub(f, o), c -= h * box2d.b2CrossVV(this.m_rA, o), d.SelfMulAdd(g, o), e += i * box2d.b2CrossVV(this.m_rB, o), a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV = new box2d.b2Vec2, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV = new box2d.b2Vec2, box2d.b2FrictionJoint.prototype.SolvePositionConstraints = function() {
    return !0
}, box2d.b2FrictionJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2FrictionJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2FrictionJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * this.m_linearImpulse.x, a * this.m_linearImpulse.y)
}, box2d.b2FrictionJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_angularImpulse
}, box2d.b2FrictionJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2FrictionJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2FrictionJoint.prototype.SetMaxForce = function(a) {
    this.m_maxForce = a
}, box2d.b2FrictionJoint.prototype.GetMaxForce = function() {
    return this.m_maxForce
}, box2d.b2FrictionJoint.prototype.SetMaxTorque = function(a) {
    this.m_maxTorque = a
}, box2d.b2FrictionJoint.prototype.GetMaxTorque = function() {
    return this.m_maxTorque
}, box2d.b2FrictionJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2FrictionJointDef*/ var jd = new box2d.b2FrictionJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce), box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2MouseJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2MouseJointDef = function() {
    goog.base(this, box2d.b2JointType.e_mouseJoint), this.target = new box2d.b2Vec2
}, goog.inherits(box2d.b2MouseJointDef, box2d.b2JointDef), box2d.b2MouseJointDef.prototype.target = null, box2d.b2MouseJointDef.prototype.maxForce = 0, box2d.b2MouseJointDef.prototype.frequencyHz = 5, box2d.b2MouseJointDef.prototype.dampingRatio = .7, box2d.b2MouseJoint = function(a) {
    goog.base(this, a), this.m_localAnchorB = new box2d.b2Vec2, this.m_targetA = new box2d.b2Vec2, this.m_impulse = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_mass = new box2d.b2Mat22, this.m_C = new box2d.b2Vec2, this.m_qB = new box2d.b2Rot, this.m_lalcB = new box2d.b2Vec2, this.m_K = new box2d.b2Mat22, box2d.ENABLE_ASSERTS && box2d.b2Assert(a.target.IsValid()), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.maxForce) && a.maxForce >= 0), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.frequencyHz) && a.frequencyHz >= 0), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a.dampingRatio) && a.dampingRatio >= 0), this.m_targetA.Copy(a.target), box2d.b2MulTXV(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB), this.m_maxForce = a.maxForce, this.m_impulse.SetZero(), this.m_frequencyHz = a.frequencyHz, this.m_dampingRatio = a.dampingRatio, this.m_beta = 0, this.m_gamma = 0
}, goog.inherits(box2d.b2MouseJoint, box2d.b2Joint), box2d.b2MouseJoint.prototype.m_localAnchorB = null, box2d.b2MouseJoint.prototype.m_targetA = null, box2d.b2MouseJoint.prototype.m_frequencyHz = 0, box2d.b2MouseJoint.prototype.m_dampingRatio = 0, box2d.b2MouseJoint.prototype.m_beta = 0, box2d.b2MouseJoint.prototype.m_impulse = null, box2d.b2MouseJoint.prototype.m_maxForce = 0, box2d.b2MouseJoint.prototype.m_gamma = 0, box2d.b2MouseJoint.prototype.m_indexA = 0, box2d.b2MouseJoint.prototype.m_indexB = 0, box2d.b2MouseJoint.prototype.m_rB = null, box2d.b2MouseJoint.prototype.m_localCenterB = null, box2d.b2MouseJoint.prototype.m_invMassB = 0, box2d.b2MouseJoint.prototype.m_invIB = 0, box2d.b2MouseJoint.prototype.m_mass = null, box2d.b2MouseJoint.prototype.m_C = null, box2d.b2MouseJoint.prototype.m_qB = null, box2d.b2MouseJoint.prototype.m_lalcB = null, box2d.b2MouseJoint.prototype.m_K = null, box2d.b2MouseJoint.prototype.SetTarget = function(a) {
    this.m_bodyB.IsAwake() === !1 && this.m_bodyB.SetAwake(!0), this.m_targetA.Copy(a)
}, box2d.b2MouseJoint.prototype.GetTarget = function(a) {
    return a.Copy(this.m_targetA)
}, box2d.b2MouseJoint.prototype.SetMaxForce = function(a) {
    this.m_maxForce = a
}, box2d.b2MouseJoint.prototype.GetMaxForce = function() {
    return this.m_maxForce
}, box2d.b2MouseJoint.prototype.SetFrequency = function(a) {
    this.m_frequencyHz = a
}, box2d.b2MouseJoint.prototype.GetFrequency = function() {
    return this.m_frequencyHz
}, box2d.b2MouseJoint.prototype.SetDampingRatio = function(a) {
    this.m_dampingRatio = a
}, box2d.b2MouseJoint.prototype.GetDampingRatio = function() {
    return this.m_dampingRatio
}, box2d.b2MouseJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexB].c,
        c = a.positions[this.m_indexB].a,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_qB.SetAngleRadians(c),
        g = this.m_bodyB.GetMass(),
        h = 2 * box2d.b2_pi * this.m_frequencyHz,
        i = 2 * g * this.m_dampingRatio * h,
        j = g * h * h,
        k = a.step.dt;
    box2d.ENABLE_ASSERTS && box2d.b2Assert(i + k * j > box2d.b2_epsilon), this.m_gamma = k * (i + k * j), 0 !== this.m_gamma && (this.m_gamma = 1 / this.m_gamma), this.m_beta = k * j * this.m_gamma, box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(f, this.m_lalcB, this.m_rB);
    var l = this.m_K;
    l.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma, l.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y, l.ey.x = l.ex.y, l.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma, l.GetInverse(this.m_mass), this.m_C.x = b.x + this.m_rB.x - this.m_targetA.x, this.m_C.y = b.y + this.m_rB.y - this.m_targetA.y, this.m_C.SelfMul(this.m_beta), e *= .98, a.step.warmStarting ? (this.m_impulse.SelfMul(a.step.dtRatio), d.x += this.m_invMassB * this.m_impulse.x, d.y += this.m_invMassB * this.m_impulse.y, e += this.m_invIB * box2d.b2CrossVV(this.m_rB, this.m_impulse)) : this.m_impulse.SetZero(), a.velocities[this.m_indexB].w = e
}, box2d.b2MouseJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexB].v,
        c = a.velocities[this.m_indexB].w,
        d = box2d.b2AddVCrossSV(b, c, this.m_rB, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot),
        e = box2d.b2MulMV(this.m_mass, box2d.b2AddVV(d, box2d.b2AddVV(this.m_C, box2d.b2MulSV(this.m_gamma, this.m_impulse, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0).SelfNeg(), box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse),
        f = box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_impulse);
    this.m_impulse.SelfAdd(e);
    var g = a.step.dt * this.m_maxForce;
    this.m_impulse.GetLengthSquared() > g * g && this.m_impulse.SelfMul(g / this.m_impulse.GetLength()), box2d.b2SubVV(this.m_impulse, f, e), b.SelfMulAdd(this.m_invMassB, e), c += this.m_invIB * box2d.b2CrossVV(this.m_rB, e), a.velocities[this.m_indexB].w = c
}, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2, box2d.b2MouseJoint.prototype.SolvePositionConstraints = function() {
    return !0
}, box2d.b2MouseJoint.prototype.GetAnchorA = function(a) {
    return a.Copy(this.m_targetA)
}, box2d.b2MouseJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2MouseJoint.prototype.GetReactionForce = function(a, b) {
    return box2d.b2MulSV(a, this.m_impulse, b)
}, box2d.b2MouseJoint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2MouseJoint.prototype.Dump = function() {
    box2d.DEBUG && box2d.b2Log("Mouse joint dumping is not supported.\n")
}, box2d.b2MouseJoint.prototype.ShiftOrigin = function(a) {
    this.m_targetA.SelfSub(a)
}, goog.provide("box2d.b2ConstantForceController"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Controller"), goog.require("box2d.b2Math"), box2d.b2ConstantForceController = function() {
    goog.base(this), this.F = new box2d.b2Vec2(0, 0)
}, goog.inherits(box2d.b2ConstantForceController, box2d.b2Controller), box2d.b2ConstantAccelController.prototype.F = null, box2d.b2ConstantForceController.prototype.Step = function() {
    for (var a = this.m_bodyList; a; a = a.nextBody) {
        var b = a.body;
        b.IsAwake() && b.ApplyForce(this.F, b.GetWorldCenter())
    }
}, goog.provide("box2d.b2PulleyJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Joint"), goog.require("box2d.b2Math"), box2d.b2_minPulleyLength = 2, box2d.b2PulleyJointDef = function() {
    goog.base(this, box2d.b2JointType.e_pulleyJoint), this.collideConnected = !0, this.groundAnchorA = new box2d.b2Vec2(-1, 1), this.groundAnchorB = new box2d.b2Vec2(1, 1), this.localAnchorA = new box2d.b2Vec2(-1, 0), this.localAnchorB = new box2d.b2Vec2(1, 0)
}, goog.inherits(box2d.b2PulleyJointDef, box2d.b2JointDef), box2d.b2PulleyJointDef.prototype.groundAnchorA = null, box2d.b2PulleyJointDef.prototype.groundAnchorB = null, box2d.b2PulleyJointDef.prototype.localAnchorA = null, box2d.b2PulleyJointDef.prototype.localAnchorB = null, box2d.b2PulleyJointDef.prototype.lengthA = 0, box2d.b2PulleyJointDef.prototype.lengthB = 0, box2d.b2PulleyJointDef.prototype.ratio = 1, box2d.b2PulleyJointDef.prototype.Initialize = function(a, b, c, d, e, f, g) {
    this.bodyA = a, this.bodyB = b, this.groundAnchorA.Copy(c), this.groundAnchorB.Copy(d), this.bodyA.GetLocalPoint(e, this.localAnchorA), this.bodyB.GetLocalPoint(f, this.localAnchorB), this.lengthA = box2d.b2DistanceVV(e, c), this.lengthB = box2d.b2DistanceVV(f, d), this.ratio = g, box2d.ENABLE_ASSERTS && box2d.b2Assert(this.ratio > box2d.b2_epsilon)
}, box2d.b2PulleyJoint = function(a) {
    goog.base(this, a), this.m_groundAnchorA = new box2d.b2Vec2, this.m_groundAnchorB = new box2d.b2Vec2, this.m_localAnchorA = new box2d.b2Vec2, this.m_localAnchorB = new box2d.b2Vec2, this.m_uA = new box2d.b2Vec2, this.m_uB = new box2d.b2Vec2, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_groundAnchorA.Copy(a.groundAnchorA), this.m_groundAnchorB.Copy(a.groundAnchorB), this.m_localAnchorA.Copy(a.localAnchorA), this.m_localAnchorB.Copy(a.localAnchorB), this.m_lengthA = a.lengthA, this.m_lengthB = a.lengthB, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 !== a.ratio), this.m_ratio = a.ratio, this.m_constant = a.lengthA + this.m_ratio * a.lengthB, this.m_impulse = 0
}, goog.inherits(box2d.b2PulleyJoint, box2d.b2Joint), box2d.b2PulleyJoint.prototype.m_groundAnchorA = null, box2d.b2PulleyJoint.prototype.m_groundAnchorB = null, box2d.b2PulleyJoint.prototype.m_lengthA = 0, box2d.b2PulleyJoint.prototype.m_lengthB = 0, box2d.b2PulleyJoint.prototype.m_localAnchorA = null, box2d.b2PulleyJoint.prototype.m_localAnchorB = null, box2d.b2PulleyJoint.prototype.m_constant = 0, box2d.b2PulleyJoint.prototype.m_ratio = 0, box2d.b2PulleyJoint.prototype.m_impulse = 0, box2d.b2PulleyJoint.prototype.m_indexA = 0, box2d.b2PulleyJoint.prototype.m_indexB = 0, box2d.b2PulleyJoint.prototype.m_uA = null, box2d.b2PulleyJoint.prototype.m_uB = null, box2d.b2PulleyJoint.prototype.m_rA = null, box2d.b2PulleyJoint.prototype.m_rB = null, box2d.b2PulleyJoint.prototype.m_localCenterA = null, box2d.b2PulleyJoint.prototype.m_localCenterB = null, box2d.b2PulleyJoint.prototype.m_invMassA = 0, box2d.b2PulleyJoint.prototype.m_invMassB = 0, box2d.b2PulleyJoint.prototype.m_invIA = 0, box2d.b2PulleyJoint.prototype.m_invIB = 0, box2d.b2PulleyJoint.prototype.m_mass = 0, box2d.b2PulleyJoint.prototype.m_qA = null, box2d.b2PulleyJoint.prototype.m_qB = null, box2d.b2PulleyJoint.prototype.m_lalcA = null, box2d.b2PulleyJoint.prototype.m_lalcB = null, box2d.b2PulleyJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.velocities[this.m_indexA].v,
        e = a.velocities[this.m_indexA].w,
        f = a.positions[this.m_indexB].c,
        g = a.positions[this.m_indexB].a,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = this.m_qA.SetAngleRadians(c),
        k = this.m_qB.SetAngleRadians(g);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2MulRV(j, this.m_lalcA, this.m_rA), box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2MulRV(k, this.m_lalcB, this.m_rB), this.m_uA.Copy(b).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA), this.m_uB.Copy(f).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB);
    var l = this.m_uA.GetLength(),
        m = this.m_uB.GetLength();
    l > 10 * box2d.b2_linearSlop ? this.m_uA.SelfMul(1 / l) : this.m_uA.SetZero(), m > 10 * box2d.b2_linearSlop ? this.m_uB.SelfMul(1 / m) : this.m_uB.SetZero();
    var n = box2d.b2CrossVV(this.m_rA, this.m_uA),
        o = box2d.b2CrossVV(this.m_rB, this.m_uB),
        p = this.m_invMassA + this.m_invIA * n * n,
        q = this.m_invMassB + this.m_invIB * o * o;
    if (this.m_mass = p + this.m_ratio * this.m_ratio * q, this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), a.step.warmStarting) {
        this.m_impulse *= a.step.dtRatio;
        var r = box2d.b2MulSV(-this.m_impulse, this.m_uA, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA),
            s = box2d.b2MulSV(-this.m_ratio * this.m_impulse, this.m_uB, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB);
        d.SelfMulAdd(this.m_invMassA, r), e += this.m_invIA * box2d.b2CrossVV(this.m_rA, r), h.SelfMulAdd(this.m_invMassB, s), i += this.m_invIB * box2d.b2CrossVV(this.m_rB, s)
    } else this.m_impulse = 0;
    a.velocities[this.m_indexA].w = e, a.velocities[this.m_indexB].w = i
}, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = box2d.b2AddVCrossSV(b, c, this.m_rA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA),
        g = box2d.b2AddVCrossSV(d, e, this.m_rB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB),
        h = -box2d.b2DotVV(this.m_uA, f) - this.m_ratio * box2d.b2DotVV(this.m_uB, g),
        i = -this.m_mass * h;
    this.m_impulse += i;
    var j = box2d.b2MulSV(-i, this.m_uA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA),
        k = box2d.b2MulSV(-this.m_ratio * i, this.m_uB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB);
    b.SelfMulAdd(this.m_invMassA, j), c += this.m_invIA * box2d.b2CrossVV(this.m_rA, j), d.SelfMulAdd(this.m_invMassB, k), e += this.m_invIB * box2d.b2CrossVV(this.m_rB, k), a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var h = box2d.b2MulRV(f, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var i = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        j = this.m_uA.Copy(b).SelfAdd(h).SelfSub(this.m_groundAnchorA),
        k = this.m_uB.Copy(d).SelfAdd(i).SelfSub(this.m_groundAnchorB),
        l = j.GetLength(),
        m = k.GetLength();
    l > 10 * box2d.b2_linearSlop ? j.SelfMul(1 / l) : j.SetZero(), m > 10 * box2d.b2_linearSlop ? k.SelfMul(1 / m) : k.SetZero();
    var n = box2d.b2CrossVV(h, j),
        o = box2d.b2CrossVV(i, k),
        p = this.m_invMassA + this.m_invIA * n * n,
        q = this.m_invMassB + this.m_invIB * o * o,
        r = p + this.m_ratio * this.m_ratio * q;
    r > 0 && (r = 1 / r);
    var s = this.m_constant - l - this.m_ratio * m,
        t = box2d.b2Abs(s),
        u = -r * s,
        v = box2d.b2MulSV(-u, j, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA),
        w = box2d.b2MulSV(-this.m_ratio * u, k, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB);
    return b.SelfMulAdd(this.m_invMassA, v), c += this.m_invIA * box2d.b2CrossVV(h, v), d.SelfMulAdd(this.m_invMassB, w), e += this.m_invIB * box2d.b2CrossVV(i, w), a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, t < box2d.b2_linearSlop
}, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2PulleyJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2PulleyJoint.prototype.GetReactionForce = function(a, b) {
    return b.SetXY(a * this.m_impulse * this.m_uB.x, a * this.m_impulse * this.m_uB.y)
}, box2d.b2PulleyJoint.prototype.GetReactionTorque = function() {
    return 0
}, box2d.b2PulleyJoint.prototype.GetGroundAnchorA = function(a) {
    return a.Copy(this.m_groundAnchorA)
}, box2d.b2PulleyJoint.prototype.GetGroundAnchorB = function(a) {
    return a.Copy(this.m_groundAnchorB)
}, box2d.b2PulleyJoint.prototype.GetLengthA = function() {
    return this.m_lengthA
}, box2d.b2PulleyJoint.prototype.GetLengthB = function() {
    return this.m_lengthB
}, box2d.b2PulleyJoint.prototype.GetRatio = function() {
    return this.m_ratio
}, box2d.b2PulleyJoint.prototype.GetCurrentLengthA = function() {
    var a = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p),
        b = this.m_groundAnchorA;
    return box2d.b2DistanceVV(a, b)
}, box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.GetCurrentLengthB = function() {
    var a = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p),
        b = this.m_groundAnchorB;
    return box2d.b2DistanceVV(a, b)
}, box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p = new box2d.b2Vec2, box2d.b2PulleyJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2PulleyJointDef*/ var jd = new box2d.b2PulleyJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.groundAnchorA.SetXY(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y), box2d.b2Log("  jd.groundAnchorB.SetXY(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.lengthA = %.15f;\n", this.m_lengthA), box2d.b2Log("  jd.lengthB = %.15f;\n", this.m_lengthB), box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, box2d.b2PulleyJoint.prototype.ShiftOrigin = function(a) {
    this.m_groundAnchorA.SelfSub(a), this.m_groundAnchorB.SelfSub(a)
}, goog.provide("box2d.b2CircleShape"), goog.require("box2d.b2Shape"), box2d.b2CircleShape = function(a) {
    goog.base(this, box2d.b2ShapeType.e_circleShape, a || 0), this.m_p = new box2d.b2Vec2
}, goog.inherits(box2d.b2CircleShape, box2d.b2Shape), box2d.b2CircleShape.prototype.m_p = null, box2d.b2CircleShape.prototype.Clone = function() {
    return (new box2d.b2CircleShape).Copy(this)
}, box2d.b2CircleShape.prototype.Copy = function(a) {
    return goog.base(this, "Copy", a), box2d.ENABLE_ASSERTS && box2d.b2Assert(a instanceof box2d.b2CircleShape), this.m_p.Copy(a.m_p), this
}, box2d.b2CircleShape.prototype.GetChildCount = function() {
    return 1
}, box2d.b2CircleShape.prototype.TestPoint = function(a, b) {
    var c = box2d.b2MulXV(a, this.m_p, box2d.b2CircleShape.prototype.TestPoint.s_center),
        d = box2d.b2SubVV(b, c, box2d.b2CircleShape.prototype.TestPoint.s_d);
    return box2d.b2DotVV(d, d) <= box2d.b2Sq(this.m_radius)
}, box2d.b2CircleShape.prototype.TestPoint.s_center = new box2d.b2Vec2, box2d.b2CircleShape.prototype.TestPoint.s_d = new box2d.b2Vec2, box2d.b2CircleShape.prototype.RayCast = function(a, b, c) {
    var d = box2d.b2MulXV(c, this.m_p, box2d.b2CircleShape.prototype.RayCast.s_position),
        e = box2d.b2SubVV(b.p1, d, box2d.b2CircleShape.prototype.RayCast.s_s),
        f = box2d.b2DotVV(e, e) - box2d.b2Sq(this.m_radius),
        g = box2d.b2SubVV(b.p2, b.p1, box2d.b2CircleShape.prototype.RayCast.s_r),
        h = box2d.b2DotVV(e, g),
        i = box2d.b2DotVV(g, g),
        j = h * h - i * f;
    if (0 > j || i < box2d.b2_epsilon) return !1;
    var k = -(h + box2d.b2Sqrt(j));
    return k >= 0 && k <= b.maxFraction * i ? (k /= i, a.fraction = k, box2d.b2AddVMulSV(e, k, g, a.normal).SelfNormalize(), !0) : !1
}, box2d.b2CircleShape.prototype.RayCast.s_position = new box2d.b2Vec2, box2d.b2CircleShape.prototype.RayCast.s_s = new box2d.b2Vec2, box2d.b2CircleShape.prototype.RayCast.s_r = new box2d.b2Vec2, box2d.b2CircleShape.prototype.ComputeAABB = function(a, b) {
    var c = box2d.b2MulXV(b, this.m_p, box2d.b2CircleShape.prototype.ComputeAABB.s_p);
    a.lowerBound.SetXY(c.x - this.m_radius, c.y - this.m_radius), a.upperBound.SetXY(c.x + this.m_radius, c.y + this.m_radius)
}, box2d.b2CircleShape.prototype.ComputeAABB.s_p = new box2d.b2Vec2, box2d.b2CircleShape.prototype.ComputeMass = function(a, b) {
    var c = box2d.b2Sq(this.m_radius);
    a.mass = b * box2d.b2_pi * c, a.center.Copy(this.m_p), a.I = a.mass * (.5 * c + box2d.b2DotVV(this.m_p, this.m_p))
}, box2d.b2CircleShape.prototype.SetupDistanceProxy = function(a) {
    a.m_vertices = new Array(1, !0), a.m_vertices[0] = this.m_p, a.m_count = 1, a.m_radius = this.m_radius
}, box2d.b2CircleShape.prototype.ComputeSubmergedArea = function(a, b, c, d) {
    var e = box2d.b2MulXV(c, this.m_p, new box2d.b2Vec2),
        f = -(box2d.b2DotVV(a, e) - b);
    if (f < -this.m_radius + box2d.b2_epsilon) return 0;
    if (f > this.m_radius) return d.Copy(e), box2d.b2_pi * this.m_radius * this.m_radius;
    var g = this.m_radius * this.m_radius,
        h = f * f,
        i = g * (box2d.b2Asin(f / this.m_radius) + box2d.b2_pi / 2) + f * box2d.b2Sqrt(g - h),
        j = -2 / 3 * box2d.b2Pow(g - h, 1.5) / i;
    return d.x = e.x + a.x * j, d.y = e.y + a.y * j, i
}, box2d.b2CircleShape.prototype.Dump = function() {
    box2d.b2Log("    /*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();\n"), box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius), box2d.b2Log("    shape.m_p.SetXY(%.15f, %.15f);\n", this.m_p.x, this.m_p.y)
}, goog.provide("box2d.b2Rope"), goog.require("box2d.b2Math"), goog.require("box2d.b2Draw"), box2d.b2RopeDef = function() {
    this.vertices = new Array, this.masses = new Array, this.gravity = new box2d.b2Vec2
}, box2d.b2RopeDef.prototype.vertices = null, box2d.b2RopeDef.prototype.count = 0, box2d.b2RopeDef.prototype.masses = null, box2d.b2RopeDef.prototype.gravity = null, box2d.b2RopeDef.prototype.damping = .1, box2d.b2RopeDef.prototype.k2 = .9, box2d.b2RopeDef.prototype.k3 = .1, box2d.b2Rope = function() {
    this.m_gravity = new box2d.b2Vec2
}, box2d.b2Rope.prototype.m_count = 0, box2d.b2Rope.prototype.m_ps = null, box2d.b2Rope.prototype.m_p0s = null, box2d.b2Rope.prototype.m_vs = null, box2d.b2Rope.prototype.m_ims = null, box2d.b2Rope.prototype.m_Ls = null, box2d.b2Rope.prototype.m_as = null, box2d.b2Rope.prototype.m_gravity = null, box2d.b2Rope.prototype.m_damping = 0, box2d.b2Rope.prototype.m_k2 = 1, box2d.b2Rope.prototype.m_k3 = .1, box2d.b2Rope.prototype.GetVertexCount = function() {
    return this.m_count
}, box2d.b2Rope.prototype.GetVertices = function() {
    return this.m_ps
}, box2d.b2Rope.prototype.Initialize = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(a.count >= 3), this.m_count = a.count, this.m_ps = box2d.b2Vec2.MakeArray(this.m_count), this.m_p0s = box2d.b2Vec2.MakeArray(this.m_count), this.m_vs = box2d.b2Vec2.MakeArray(this.m_count), this.m_ims = box2d.b2MakeNumberArray(this.m_count);
    for (var b = 0; b < this.m_count; ++b) {
        this.m_ps[b].Copy(a.vertices[b]), this.m_p0s[b].Copy(a.vertices[b]), this.m_vs[b].SetZero();
        var c = a.masses[b];
        this.m_ims[b] = c > 0 ? 1 / c : 0
    }
    var d = this.m_count - 1,
        e = this.m_count - 2;
    this.m_Ls = box2d.b2MakeNumberArray(d), this.m_as = box2d.b2MakeNumberArray(e);
    for (var b = 0; d > b; ++b) {
        var f = this.m_ps[b],
            g = this.m_ps[b + 1];
        this.m_Ls[b] = box2d.b2DistanceVV(f, g)
    }
    for (var b = 0; e > b; ++b) {
        var f = this.m_ps[b],
            g = this.m_ps[b + 1],
            h = this.m_ps[b + 2],
            i = box2d.b2SubVV(g, f, box2d.b2Vec2.s_t0),
            j = box2d.b2SubVV(h, g, box2d.b2Vec2.s_t1),
            k = box2d.b2CrossVV(i, j),
            l = box2d.b2DotVV(i, j);
        this.m_as[b] = box2d.b2Atan2(k, l)
    }
    this.m_gravity.Copy(a.gravity), this.m_damping = a.damping, this.m_k2 = a.k2, this.m_k3 = a.k3
}, box2d.b2Rope.prototype.Step = function(a, b) {
    if (0 !== a) {
        for (var c = Math.exp(-a * this.m_damping), d = 0; d < this.m_count; ++d) this.m_p0s[d].Copy(this.m_ps[d]), this.m_ims[d] > 0 && this.m_vs[d].SelfMulAdd(a, this.m_gravity), this.m_vs[d].SelfMul(c), this.m_ps[d].SelfMulAdd(a, this.m_vs[d]);
        for (var d = 0; b > d; ++d) this.SolveC2(), this.SolveC3(), this.SolveC2();
        for (var e = 1 / a, d = 0; d < this.m_count; ++d) box2d.b2MulSV(e, box2d.b2SubVV(this.m_ps[d], this.m_p0s[d], box2d.b2Vec2.s_t0), this.m_vs[d])
    }
}, box2d.b2Rope.prototype.SolveC2 = function() {
    for (var a = this.m_count - 1, b = 0; a > b; ++b) {
        var c = this.m_ps[b],
            d = this.m_ps[b + 1],
            e = box2d.b2SubVV(d, c, box2d.b2Rope.s_d),
            f = e.Normalize(),
            g = this.m_ims[b],
            h = this.m_ims[b + 1];
        if (g + h !== 0) {
            var i = g / (g + h),
                j = h / (g + h);
            c.SelfMulSub(this.m_k2 * i * (this.m_Ls[b] - f), e), d.SelfMulAdd(this.m_k2 * j * (this.m_Ls[b] - f), e)
        }
    }
}, box2d.b2Rope.s_d = new box2d.b2Vec2, box2d.b2Rope.prototype.SetAngleRadians = function(a) {
    for (var b = this.m_count - 2, c = 0; b > c; ++c) this.m_as[c] = a
}, box2d.b2Rope.prototype.SolveC3 = function() {
    for (var a = this.m_count - 2, b = 0; a > b; ++b) {
        var c = this.m_ps[b],
            d = this.m_ps[b + 1],
            e = this.m_ps[b + 2],
            f = this.m_ims[b],
            g = this.m_ims[b + 1],
            h = this.m_ims[b + 2],
            i = box2d.b2SubVV(d, c, box2d.b2Rope.s_d1),
            j = box2d.b2SubVV(e, d, box2d.b2Rope.s_d2),
            k = i.GetLengthSquared(),
            l = j.GetLengthSquared();
        if (k * l !== 0) {
            var m = box2d.b2CrossVV(i, j),
                n = box2d.b2DotVV(i, j),
                o = box2d.b2Atan2(m, n),
                p = box2d.b2MulSV(-1 / k, i.SelfSkew(), box2d.b2Rope.s_Jd1),
                q = box2d.b2MulSV(1 / l, j.SelfSkew(), box2d.b2Rope.s_Jd2),
                r = box2d.b2NegV(p, box2d.b2Rope.s_J1),
                s = box2d.b2SubVV(p, q, box2d.b2Rope.s_J2),
                t = q,
                u = f * box2d.b2DotVV(r, r) + g * box2d.b2DotVV(s, s) + h * box2d.b2DotVV(t, t);
            if (0 !== u) {
                u = 1 / u;
                for (var v = o - this.m_as[b]; v > box2d.b2_pi;) o -= 2 * box2d.b2_pi, v = o - this.m_as[b];
                for (; v < -box2d.b2_pi;) o += 2 * box2d.b2_pi, v = o - this.m_as[b];
                var w = -this.m_k3 * u * v;
                c.SelfMulAdd(f * w, r), d.SelfMulAdd(g * w, s), e.SelfMulAdd(h * w, t)
            }
        }
    }
}, box2d.b2Rope.s_d1 = new box2d.b2Vec2, box2d.b2Rope.s_d2 = new box2d.b2Vec2, box2d.b2Rope.s_Jd1 = new box2d.b2Vec2, box2d.b2Rope.s_Jd2 = new box2d.b2Vec2, box2d.b2Rope.s_J1 = new box2d.b2Vec2, box2d.b2Rope.s_J2 = new box2d.b2Vec2, box2d.b2Rope.prototype.Draw = function(a) {
    for (var b = new box2d.b2Color(.4, .5, .7), c = 0; c < this.m_count - 1; ++c) a.DrawSegment(this.m_ps[c], this.m_ps[c + 1], b)
}, goog.provide("box2d.b2WheelJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), box2d.b2WheelJointDef = function() {
    goog.base(this, box2d.b2JointType.e_wheelJoint), this.localAnchorA = new box2d.b2Vec2(0, 0), this.localAnchorB = new box2d.b2Vec2(0, 0), this.localAxisA = new box2d.b2Vec2(1, 0)
}, goog.inherits(box2d.b2WheelJointDef, box2d.b2JointDef), box2d.b2WheelJointDef.prototype.localAnchorA = null, box2d.b2WheelJointDef.prototype.localAnchorB = null, box2d.b2WheelJointDef.prototype.localAxisA = null, box2d.b2WheelJointDef.prototype.enableMotor = !1, box2d.b2WheelJointDef.prototype.maxMotorTorque = 0, box2d.b2WheelJointDef.prototype.motorSpeed = 0, box2d.b2WheelJointDef.prototype.frequencyHz = 2, box2d.b2WheelJointDef.prototype.dampingRatio = .7, box2d.b2WheelJointDef.prototype.Initialize = function(a, b, c, d) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(c, this.localAnchorA), this.bodyB.GetLocalPoint(c, this.localAnchorB), this.bodyA.GetLocalVector(d, this.localAxisA)
}, box2d.b2WheelJoint = function(a) {
    goog.base(this, a), this.m_frequencyHz = a.frequencyHz, this.m_dampingRatio = a.dampingRatio, this.m_localAnchorA = a.localAnchorA.Clone(), this.m_localAnchorB = a.localAnchorB.Clone(), this.m_localXAxisA = a.localAxisA.Clone(), this.m_localYAxisA = box2d.b2CrossOneV(this.m_localXAxisA, new box2d.b2Vec2), this.m_maxMotorTorque = a.maxMotorTorque, this.m_motorSpeed = a.motorSpeed, this.m_enableMotor = a.enableMotor, this.m_localCenterA = new box2d.b2Vec2, this.m_localCenterB = new box2d.b2Vec2, this.m_ax = new box2d.b2Vec2, this.m_ay = new box2d.b2Vec2, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_lalcA = new box2d.b2Vec2, this.m_lalcB = new box2d.b2Vec2, this.m_rA = new box2d.b2Vec2, this.m_rB = new box2d.b2Vec2, this.m_ax.SetZero(), this.m_ay.SetZero()
}, goog.inherits(box2d.b2WheelJoint, box2d.b2Joint), box2d.b2WheelJoint.prototype.m_frequencyHz = 0, box2d.b2WheelJoint.prototype.m_dampingRatio = 0, box2d.b2WheelJoint.prototype.m_localAnchorA = null, box2d.b2WheelJoint.prototype.m_localAnchorB = null, box2d.b2WheelJoint.prototype.m_localXAxisA = null, box2d.b2WheelJoint.prototype.m_localYAxisA = null, box2d.b2WheelJoint.prototype.m_impulse = 0, box2d.b2WheelJoint.prototype.m_motorImpulse = 0, box2d.b2WheelJoint.prototype.m_springImpulse = 0, box2d.b2WheelJoint.prototype.m_maxMotorTorque = 0, box2d.b2WheelJoint.prototype.m_motorSpeed = 0, box2d.b2WheelJoint.prototype.m_enableMotor = !1, box2d.b2WheelJoint.prototype.m_indexA = 0, box2d.b2WheelJoint.prototype.m_indexB = 0, box2d.b2WheelJoint.prototype.m_localCenterA = null, box2d.b2WheelJoint.prototype.m_localCenterB = null, box2d.b2WheelJoint.prototype.m_invMassA = 0, box2d.b2WheelJoint.prototype.m_invMassB = 0, box2d.b2WheelJoint.prototype.m_invIA = 0, box2d.b2WheelJoint.prototype.m_invIB = 0, box2d.b2WheelJoint.prototype.m_ax = null, box2d.b2WheelJoint.prototype.m_ay = null, box2d.b2WheelJoint.prototype.m_sAx = 0, box2d.b2WheelJoint.prototype.m_sBx = 0, box2d.b2WheelJoint.prototype.m_sAy = 0, box2d.b2WheelJoint.prototype.m_sBy = 0, box2d.b2WheelJoint.prototype.m_mass = 0, box2d.b2WheelJoint.prototype.m_motorMass = 0, box2d.b2WheelJoint.prototype.m_springMass = 0, box2d.b2WheelJoint.prototype.m_bias = 0, box2d.b2WheelJoint.prototype.m_gamma = 0, box2d.b2WheelJoint.prototype.m_qA = null, box2d.b2WheelJoint.prototype.m_qB = null, box2d.b2WheelJoint.prototype.m_lalcA = null, box2d.b2WheelJoint.prototype.m_lalcB = null, box2d.b2WheelJoint.prototype.m_rA = null, box2d.b2WheelJoint.prototype.m_rB = null, box2d.b2WheelJoint.prototype.GetMotorSpeed = function() {
    return this.m_motorSpeed
}, box2d.b2WheelJoint.prototype.GetMaxMotorTorque = function() {
    return this.m_maxMotorTorque
}, box2d.b2WheelJoint.prototype.SetSpringFrequencyHz = function(a) {
    this.m_frequencyHz = a
}, box2d.b2WheelJoint.prototype.GetSpringFrequencyHz = function() {
    return this.m_frequencyHz
}, box2d.b2WheelJoint.prototype.SetSpringDampingRatio = function(a) {
    this.m_dampingRatio = a
}, box2d.b2WheelJoint.prototype.GetSpringDampingRatio = function() {
    return this.m_dampingRatio
}, box2d.b2WheelJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = this.m_invMassA,
        c = this.m_invMassB,
        d = this.m_invIA,
        e = this.m_invIB,
        f = a.positions[this.m_indexA].c,
        g = a.positions[this.m_indexA].a,
        h = a.velocities[this.m_indexA].v,
        i = a.velocities[this.m_indexA].w,
        j = a.positions[this.m_indexB].c,
        k = a.positions[this.m_indexB].a,
        l = a.velocities[this.m_indexB].v,
        m = a.velocities[this.m_indexB].w,
        n = this.m_qA.SetAngleRadians(g),
        o = this.m_qB.SetAngleRadians(k);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var p = box2d.b2MulRV(n, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var q = box2d.b2MulRV(o, this.m_lalcB, this.m_rB),
        r = box2d.b2SubVV(box2d.b2AddVV(j, q, box2d.b2Vec2.s_t0), box2d.b2AddVV(f, p, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d);
    if (box2d.b2MulRV(n, this.m_localYAxisA, this.m_ay), this.m_sAy = box2d.b2CrossVV(box2d.b2AddVV(r, p, box2d.b2Vec2.s_t0), this.m_ay), this.m_sBy = box2d.b2CrossVV(q, this.m_ay), this.m_mass = b + c + d * this.m_sAy * this.m_sAy + e * this.m_sBy * this.m_sBy, this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), this.m_springMass = 0, this.m_bias = 0, this.m_gamma = 0, this.m_frequencyHz > 0) {
        box2d.b2MulRV(n, this.m_localXAxisA, this.m_ax), this.m_sAx = box2d.b2CrossVV(box2d.b2AddVV(r, p, box2d.b2Vec2.s_t0), this.m_ax), this.m_sBx = box2d.b2CrossVV(q, this.m_ax);
        var s = b + c + d * this.m_sAx * this.m_sAx + e * this.m_sBx * this.m_sBx;
        if (s > 0) {
            this.m_springMass = 1 / s;
            var t = box2d.b2DotVV(r, this.m_ax),
                u = 2 * box2d.b2_pi * this.m_frequencyHz,
                v = 2 * this.m_springMass * this.m_dampingRatio * u,
                w = this.m_springMass * u * u,
                x = a.step.dt;
            this.m_gamma = x * (v + x * w), this.m_gamma > 0 && (this.m_gamma = 1 / this.m_gamma), this.m_bias = t * x * w * this.m_gamma, this.m_springMass = s + this.m_gamma, this.m_springMass > 0 && (this.m_springMass = 1 / this.m_springMass)
        }
    } else this.m_springImpulse = 0;
    if (this.m_enableMotor ? (this.m_motorMass = d + e, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass)) : (this.m_motorMass = 0, this.m_motorImpulse = 0), a.step.warmStarting) {
        this.m_impulse *= a.step.dtRatio, this.m_springImpulse *= a.step.dtRatio, this.m_motorImpulse *= a.step.dtRatio;
        var y = box2d.b2AddVV(box2d.b2MulSV(this.m_impulse, this.m_ay, box2d.b2Vec2.s_t0), box2d.b2MulSV(this.m_springImpulse, this.m_ax, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P),
            z = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse,
            A = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
        h.SelfMulSub(this.m_invMassA, y), i -= this.m_invIA * z, l.SelfMulAdd(this.m_invMassB, y), m += this.m_invIB * A
    } else this.m_impulse = 0, this.m_springImpulse = 0, this.m_motorImpulse = 0;
    a.velocities[this.m_indexA].w = i, a.velocities[this.m_indexB].w = m
}, box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2, box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2WheelJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = this.m_invMassA,
        c = this.m_invMassB,
        d = this.m_invIA,
        e = this.m_invIB,
        f = a.velocities[this.m_indexA].v,
        g = a.velocities[this.m_indexA].w,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = box2d.b2DotVV(this.m_ax, box2d.b2SubVV(h, f, box2d.b2Vec2.s_t0)) + this.m_sBx * i - this.m_sAx * g,
        k = -this.m_springMass * (j + this.m_bias + this.m_gamma * this.m_springImpulse);
    this.m_springImpulse += k;
    var l = box2d.b2MulSV(k, this.m_ax, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
        m = k * this.m_sAx,
        n = k * this.m_sBx;
    f.SelfMulSub(b, l), g -= d * m, h.SelfMulAdd(c, l), i += e * n;
    var j = i - g - this.m_motorSpeed,
        k = -this.m_motorMass * j,
        o = this.m_motorImpulse,
        p = a.step.dt * this.m_maxMotorTorque;
    this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + k, -p, p), k = this.m_motorImpulse - o, g -= d * k, i += e * k;
    var j = box2d.b2DotVV(this.m_ay, box2d.b2SubVV(h, f, box2d.b2Vec2.s_t0)) + this.m_sBy * i - this.m_sAy * g,
        k = -this.m_mass * j;
    this.m_impulse += k;
    var l = box2d.b2MulSV(k, this.m_ay, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
        m = k * this.m_sAy,
        n = k * this.m_sBy;
    f.SelfMulSub(b, l), g -= d * m, h.SelfMulAdd(c, l), i += e * n, a.velocities[this.m_indexA].w = g, a.velocities[this.m_indexB].w = i
}, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2, box2d.b2WheelJoint.prototype.SolvePositionConstraints = function(a) {
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.positions[this.m_indexB].c,
        e = a.positions[this.m_indexB].a,
        f = this.m_qA.SetAngleRadians(c),
        g = this.m_qB.SetAngleRadians(e);
    box2d.b2SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    var h = box2d.b2MulRV(f, this.m_lalcA, this.m_rA);
    box2d.b2SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    var i, j = box2d.b2MulRV(g, this.m_lalcB, this.m_rB),
        k = box2d.b2AddVV(box2d.b2SubVV(d, b, box2d.b2Vec2.s_t0), box2d.b2SubVV(j, h, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d),
        l = box2d.b2MulRV(f, this.m_localYAxisA, this.m_ay),
        m = box2d.b2CrossVV(box2d.b2AddVV(k, h, box2d.b2Vec2.s_t0), l),
        n = box2d.b2CrossVV(j, l),
        o = box2d.b2DotVV(k, this.m_ay),
        p = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;
    i = 0 !== p ? -o / p : 0;
    var q = box2d.b2MulSV(i, l, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P),
        r = i * m,
        s = i * n;
    return b.SelfMulSub(this.m_invMassA, q), c -= this.m_invIA * r, d.SelfMulAdd(this.m_invMassB, q), e += this.m_invIB * s, a.positions[this.m_indexA].a = c, a.positions[this.m_indexB].a = e, box2d.b2Abs(o) <= box2d.b2_linearSlop
}, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2, box2d.b2WheelJoint.prototype.GetDefinition = function(a) {
    return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), a
}, box2d.b2WheelJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, a)
}, box2d.b2WheelJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, a)
}, box2d.b2WheelJoint.prototype.GetReactionForce = function(a, b) {
    return b.x = a * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x), b.y = a * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y), b
}, box2d.b2WheelJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_motorImpulse
}, box2d.b2WheelJoint.prototype.GetLocalAnchorA = function(a) {
    return a.Copy(this.m_localAnchorA)
}, box2d.b2WheelJoint.prototype.GetLocalAnchorB = function(a) {
    return a.Copy(this.m_localAnchorB)
}, box2d.b2WheelJoint.prototype.GetLocalAxisA = function(a) {
    return a.Copy(this.m_localXAxisA)
}, box2d.b2WheelJoint.prototype.GetJointTranslation = function() {
    var a = this.m_bodyA,
        b = this.m_bodyB,
        c = a.GetWorldPoint(this.m_localAnchorA, new box2d.b2Vec2),
        d = b.GetWorldPoint(this.m_localAnchorB, new box2d.b2Vec2),
        e = box2d.b2SubVV(d, c, new box2d.b2Vec2),
        f = a.GetWorldVector(this.m_localXAxisA, new box2d.b2Vec2),
        g = box2d.b2DotVV(e, f);
    return g
}, box2d.b2WheelJoint.prototype.GetJointSpeed = function() {
    var a = this.m_bodyA.m_angularVelocity,
        b = this.m_bodyB.m_angularVelocity;
    return b - a
}, box2d.b2WheelJoint.prototype.IsMotorEnabled = function() {
    return this.m_enableMotor
}, box2d.b2WheelJoint.prototype.EnableMotor = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = a
}, box2d.b2WheelJoint.prototype.SetMotorSpeed = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = a
}, box2d.b2WheelJoint.prototype.SetMaxMotorTorque = function(a) {
    this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorTorque = a
}, box2d.b2WheelJoint.prototype.GetMotorTorque = function(a) {
    return a * this.m_motorImpulse
}, box2d.b2WheelJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2WheelJointDef*/ var jd = new box2d.b2WheelJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.localAnchorA.SetXY(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), box2d.b2Log("  jd.localAnchorB.SetXY(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), box2d.b2Log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y), box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque), box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d.b2MotorJoint"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Math"), box2d.b2MotorJointDef = function() {
    goog.base(this, box2d.b2JointType.e_motorJoint), this.linearOffset = new box2d.b2Vec2(0, 0)
}, goog.inherits(box2d.b2MotorJointDef, box2d.b2JointDef), box2d.b2MotorJointDef.prototype.linearOffset = null, box2d.b2MotorJointDef.prototype.angularOffset = 0, box2d.b2MotorJointDef.prototype.maxForce = 1, box2d.b2MotorJointDef.prototype.maxTorque = 1, box2d.b2MotorJointDef.prototype.correctionFactor = .3, box2d.b2MotorJointDef.prototype.Initialize = function(a, b) {
    this.bodyA = a, this.bodyB = b, this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);
    var c = this.bodyA.GetAngleRadians(),
        d = this.bodyB.GetAngleRadians();
    this.angularOffset = d - c
}, box2d.b2MotorJoint = function(a) {
    goog.base(this, a), this.m_linearOffset = a.linearOffset.Clone(), this.m_linearImpulse = new box2d.b2Vec2(0, 0), this.m_maxForce = a.maxForce, this.m_maxTorque = a.maxTorque, this.m_correctionFactor = a.correctionFactor, this.m_rA = new box2d.b2Vec2(0, 0), this.m_rB = new box2d.b2Vec2(0, 0), this.m_localCenterA = new box2d.b2Vec2(0, 0), this.m_localCenterB = new box2d.b2Vec2(0, 0), this.m_linearError = new box2d.b2Vec2(0, 0), this.m_linearMass = new box2d.b2Mat22, this.m_qA = new box2d.b2Rot, this.m_qB = new box2d.b2Rot, this.m_K = new box2d.b2Mat22
}, goog.inherits(box2d.b2MotorJoint, box2d.b2Joint), box2d.b2MotorJoint.prototype.m_linearOffset = null, box2d.b2MotorJoint.prototype.m_angularOffset = 0, box2d.b2MotorJoint.prototype.m_linearImpulse = null, box2d.b2MotorJoint.prototype.m_angularImpulse = 0, box2d.b2MotorJoint.prototype.m_maxForce = 0, box2d.b2MotorJoint.prototype.m_maxTorque = 0, box2d.b2MotorJoint.prototype.m_correctionFactor = .3, box2d.b2MotorJoint.prototype.m_indexA = 0, box2d.b2MotorJoint.prototype.m_indexB = 0, box2d.b2MotorJoint.prototype.m_rA = null, box2d.b2MotorJoint.prototype.m_rB = null, box2d.b2MotorJoint.prototype.m_localCenterA = null, box2d.b2MotorJoint.prototype.m_localCenterB = null, box2d.b2MotorJoint.prototype.m_linearError = null, box2d.b2MotorJoint.prototype.m_angularError = 0, box2d.b2MotorJoint.prototype.m_invMassA = 0, box2d.b2MotorJoint.prototype.m_invMassB = 0, box2d.b2MotorJoint.prototype.m_invIA = 0, box2d.b2MotorJoint.prototype.m_invIB = 0, box2d.b2MotorJoint.prototype.m_linearMass = null, box2d.b2MotorJoint.prototype.m_angularMass = 0, box2d.b2MotorJoint.prototype.m_qA = null, box2d.b2MotorJoint.prototype.m_qB = null, box2d.b2MotorJoint.prototype.m_K = null, box2d.b2MotorJoint.prototype.GetAnchorA = function(a) {
    return this.m_bodyA.GetPosition(a)
}, box2d.b2MotorJoint.prototype.GetAnchorB = function(a) {
    return this.m_bodyB.GetPosition(a)
}, box2d.b2MotorJoint.prototype.GetReactionForce = function(a, b) {
    return box2d.b2MulSV(a, this.m_linearImpulse, b)
}, box2d.b2MotorJoint.prototype.GetReactionTorque = function(a) {
    return a * this.m_angularImpulse
}, box2d.b2MotorJoint.prototype.SetCorrectionFactor = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a) && a >= 0 && 1 >= a), this._correctionFactor = a
}, box2d.b2MotorJoint.prototype.GetCorrectionFactor = function() {
    return this.m_correctionFactor
}, box2d.b2MotorJoint.prototype.SetLinearOffset = function(a) {
    box2d.b2IsEqualToV(a, this.m_linearOffset) || (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_linearOffset.Copy(a))
}, box2d.b2MotorJoint.prototype.GetLinearOffset = function(a) {
    return a.Copy(this.m_linearOffset)
}, box2d.b2MotorJoint.prototype.SetAngularOffset = function(a) {
    a !== this.m_angularOffset && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_angularOffset = a)
}, box2d.b2MotorJoint.prototype.GetAngularOffset = function() {
    return this.m_angularOffset
}, box2d.b2MotorJoint.prototype.SetMaxForce = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a) && a >= 0), this.m_maxForce = a
}, box2d.b2MotorJoint.prototype.GetMaxForce = function() {
    return this.m_maxForce
}, box2d.b2MotorJoint.prototype.SetMaxTorque = function(a) {
    box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(a) && a >= 0), this.m_maxTorque = a
}, box2d.b2MotorJoint.prototype.GetMaxTorque = function() {
    return this.m_maxTorque
}, box2d.b2MotorJoint.prototype.InitVelocityConstraints = function(a) {
    this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
    var b = a.positions[this.m_indexA].c,
        c = a.positions[this.m_indexA].a,
        d = a.velocities[this.m_indexA].v,
        e = a.velocities[this.m_indexA].w,
        f = a.positions[this.m_indexB].c,
        g = a.positions[this.m_indexB].a,
        h = a.velocities[this.m_indexB].v,
        i = a.velocities[this.m_indexB].w,
        j = this.m_qA.SetAngleRadians(c),
        k = this.m_qB.SetAngleRadians(g),
        l = box2d.b2MulRV(j, box2d.b2NegV(this.m_localCenterA, box2d.b2Vec2.s_t0), this.m_rA),
        m = box2d.b2MulRV(k, box2d.b2NegV(this.m_localCenterB, box2d.b2Vec2.s_t0), this.m_rB),
        n = this.m_invMassA,
        o = this.m_invMassB,
        p = this.m_invIA,
        q = this.m_invIB,
        r = this.m_K;
    if (r.ex.x = n + o + p * l.y * l.y + q * m.y * m.y, r.ex.y = -p * l.x * l.y - q * m.x * m.y, r.ey.x = r.ex.y, r.ey.y = n + o + p * l.x * l.x + q * m.x * m.x, r.GetInverse(this.m_linearMass), this.m_angularMass = p + q, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), box2d.b2SubVV(box2d.b2SubVV(box2d.b2AddVV(f, m, box2d.b2Vec2.s_t0), box2d.b2AddVV(b, l, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2MulRV(j, this.m_linearOffset, box2d.b2Vec2.s_t3), this.m_linearError), this.m_angularError = g - c - this.m_angularOffset, a.step.warmStarting) {
        this.m_linearImpulse.SelfMul(a.step.dtRatio), this.m_angularImpulse *= a.step.dtRatio;
        var s = this.m_linearImpulse;
        d.SelfMulSub(n, s), e -= p * (box2d.b2CrossVV(l, s) + this.m_angularImpulse), h.SelfMulAdd(o, s), i += q * (box2d.b2CrossVV(m, s) + this.m_angularImpulse)
    } else this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0;
    a.velocities[this.m_indexA].w = e, a.velocities[this.m_indexB].w = i
}, box2d.b2MotorJoint.prototype.SolveVelocityConstraints = function(a) {
    var b = a.velocities[this.m_indexA].v,
        c = a.velocities[this.m_indexA].w,
        d = a.velocities[this.m_indexB].v,
        e = a.velocities[this.m_indexB].w,
        f = this.m_invMassA,
        g = this.m_invMassB,
        h = this.m_invIA,
        i = this.m_invIB,
        j = a.step.dt,
        k = a.step.inv_dt,
        l = e - c + k * this.m_correctionFactor * this.m_angularError,
        m = -this.m_angularMass * l,
        n = this.m_angularImpulse,
        o = j * this.m_maxTorque;
    this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + m, -o, o), m = this.m_angularImpulse - n, c -= h * m, e += i * m;
    var p = this.m_rA,
        q = this.m_rB,
        l = box2d.b2AddVV(box2d.b2SubVV(box2d.b2AddVV(d, box2d.b2CrossSV(e, q, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2AddVV(b, box2d.b2CrossSV(c, p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2MulSV(k * this.m_correctionFactor, this.m_linearError, box2d.b2Vec2.s_t3), box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot),
        m = box2d.b2MulMV(this.m_linearMass, l, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg(),
        n = box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_linearImpulse);
    this.m_linearImpulse.SelfAdd(m);
    var o = j * this.m_maxForce;
    this.m_linearImpulse.GetLengthSquared() > o * o && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.SelfMul(o)), box2d.b2SubVV(this.m_linearImpulse, n, m), b.SelfMulSub(f, m), c -= h * box2d.b2CrossVV(p, m), d.SelfMulAdd(g, m), e += i * box2d.b2CrossVV(q, m), a.velocities[this.m_indexA].w = c, a.velocities[this.m_indexB].w = e
}, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2, box2d.b2MotorJoint.prototype.SolvePositionConstraints = function() {
    return !0
}, box2d.b2MotorJoint.prototype.Dump = function() {
    if (box2d.DEBUG) {
        var a = this.m_bodyA.m_islandIndex,
            b = this.m_bodyB.m_islandIndex;
        box2d.b2Log("  /*box2d.b2MotorJointDef*/ var jd = new box2d.b2MotorJointDef();\n"), box2d.b2Log("  jd.bodyA = bodies[%d];\n", a), box2d.b2Log("  jd.bodyB = bodies[%d];\n", b), box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), box2d.b2Log("  jd.linearOffset.SetXY(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y), box2d.b2Log("  jd.angularOffset = %.15f;\n", this.m_angularOffset), box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce), box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque), box2d.b2Log("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
    }
}, goog.provide("box2d"), goog.require("box2d.b2Settings"), goog.require("box2d.b2Draw"), goog.require("box2d.b2Timer"), goog.require("box2d.b2CircleShape"), goog.require("box2d.b2EdgeShape"), goog.require("box2d.b2ChainShape"), goog.require("box2d.b2PolygonShape"), goog.require("box2d.b2BroadPhase"), goog.require("box2d.b2Distance"), goog.require("box2d.b2DynamicTree"), goog.require("box2d.b2TimeOfImpact"), goog.require("box2d.b2Body"), goog.require("box2d.b2Fixture"), goog.require("box2d.b2WorldCallbacks"), goog.require("box2d.b2TimeStep"), goog.require("box2d.b2World"), goog.require("box2d.b2Contact"), goog.require("box2d.b2AreaJoint"), goog.require("box2d.b2DistanceJoint"), goog.require("box2d.b2FrictionJoint"), goog.require("box2d.b2GearJoint"), goog.require("box2d.b2MotorJoint"), goog.require("box2d.b2MouseJoint"), goog.require("box2d.b2PrismaticJoint"), goog.require("box2d.b2PulleyJoint"), goog.require("box2d.b2RevoluteJoint"), goog.require("box2d.b2RopeJoint"), goog.require("box2d.b2WeldJoint"), goog.require("box2d.b2WheelJoint"), goog.require("box2d.b2Rope"), goog.require("box2d.b2BuoyancyController"), goog.require("box2d.b2ConstantAccelController"), goog.require("box2d.b2ConstantForceController"), goog.require("box2d.b2GravityController"), goog.require("box2d.b2TensorDampingController"), Phaser.Physics.Box2D = function(a, b) {
    this.game = a, this.version = "1.0.2", this.ptmRatio = 50, this.world = new box2d.b2World(new box2d.b2Vec2(0, 0)), this.debugDraw = new Phaser.Physics.Box2D.DefaultDebugDraw(this.mpx(1)), this.world.SetDebugDraw(this.debugDraw), this.contactListener = new Phaser.Physics.Box2D.DefaultContactListener, this.world.SetContactListener(this.contactListener), this.nextBodyId = 0, this.nextFixtureId = 0, this.gravity = new Phaser.Physics.Box2D.PointProxy(this, this.world, this.world.GetGravity, this.world.SetGravity), this.friction = .2, this.restitution = 0, this.density = 1, this.frameRate = 1 / 60, this.velocityIterations = 8, this.positionIterations = 3, this.useElapsedTime = !1, this.paused = !1, this.particleSystem = null;
    var c = new box2d.b2BodyDef;
    this.mouseJointBody = this.world.CreateBody(c), this.mouseJoint = null, b.hasOwnProperty("mpx") && b.hasOwnProperty("pxm") && (this.mpx = b.mpx, this.pxm = b.pxm), this.walls = {
        left: null,
        right: null,
        top: null,
        bottom: null
    }, this.onBodyAdded = new Phaser.Signal, this.onBodyRemoved = new Phaser.Signal, this._toRemove = []
}, Phaser.Physics.Box2D.worldBoundsFilterCategory = 32768, Phaser.Physics.Box2D.prototype = {
    getNextBodyId: function() {
        var a = this.nextBodyId;
        return this.nextBodyId += 1, a
    },
    getNextFixtureId: function() {
        var a = this.nextFixtureId;
        return this.nextFixtureId += 1, a
    },
    removeBodyNextStep: function(a) {
        this._toRemove.push(a)
    },
    preUpdate: function() {
        for (var a = this._toRemove.length; a--;) this.removeBody(this._toRemove[a]);
        this._toRemove.length = 0
    },
    enable: function(a, b) {
        "undefined" == typeof b && (b = !0);
        var c = 1;
        if (Array.isArray(a))
            for (c = a.length; c--;) a[c] instanceof Phaser.Group ? this.enable(a[c].children, b) : (this.enableBody(a[c]), b && a[c].hasOwnProperty("children") && a[c].children.length > 0 && this.enable(a[c], !0));
        else a instanceof Phaser.Group ? this.enable(a.children, b) : (this.enableBody(a), b && a.hasOwnProperty("children") && a.children.length > 0 && this.enable(a.children, !0))
    },
    enableBody: function(a) {
        a.hasOwnProperty("body") && null === a.body && (a.body = new Phaser.Physics.Box2D.Body(this.game, a, a.x, a.y, 2), a.anchor.set(.5))
    },
    setBoundsToWorld: function(a, b, c, d, e, f) {
        "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0), "undefined" == typeof c && (c = !0), "undefined" == typeof d && (d = !0), "undefined" == typeof e && (e = 1), "undefined" == typeof f && (e = 4294967295), this.setBounds(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, a, b, c, d, e, f)
    },
    setBounds: function(a, b, c, d, e, f, g, h, i, j) {
        "undefined" == typeof e && (e = !0), "undefined" == typeof f && (f = !0), "undefined" == typeof g && (g = !0), "undefined" == typeof h && (h = !0), "undefined" == typeof i && (i = 1), "undefined" == typeof j && (j = 4294967295), this.walls.left && this.removeBody(this.walls.left), this.walls.right && this.removeBody(this.walls.right), this.walls.top && this.removeBody(this.walls.top), this.walls.bottom && this.removeBody(this.walls.bottom);
        var k = new box2d.b2PolygonShape,
            l = new box2d.b2FixtureDef;
        l.shape = k, l.filter.categoryBits = Phaser.Physics.Box2D.worldBoundsFilterCategory, l.filter.maskBits = 65535;
        var m = this.pxm(100),
            n = this.game.world.bounds;
        if (e) {
            this.walls.left = this.createBody(0, 0, 0), k.SetAsOrientedBox(m, this.pxm(n.height) + m, new box2d.b2Vec2(m, 0), 0);
            var o = this.walls.left.data.CreateFixture(l);
            o.id = this.getNextFixtureId()
        }
        if (f) {
            this.walls.right = this.createBody(0, 0, 0), k.SetAsOrientedBox(m, this.pxm(n.height) + m, new box2d.b2Vec2(this.pxm(-n.width) - m, 0), 0);
            var o = this.walls.right.data.CreateFixture(l);
            o.id = this.getNextFixtureId()
        }
        if (g) {
            this.walls.top = this.createBody(0, 0, 0), k.SetAsOrientedBox(this.pxm(n.width) + m, m, new box2d.b2Vec2(0, m), 0);
            var o = this.walls.top.data.CreateFixture(l);
            o.id = this.getNextFixtureId()
        }
        if (h) {
            this.walls.bottom = this.createBody(0, 0, 0), k.SetAsOrientedBox(this.pxm(n.width) + m, m, new box2d.b2Vec2(0, this.pxm(-n.height) - m), 0);
            var o = this.walls.bottom.data.CreateFixture(l);
            o.id = this.getNextFixtureId()
        }
    },
    pause: function() {
        this.paused = !0
    },
    resume: function() {
        this.paused = !1
    },
    update: function() {
        this.paused || (this.useElapsedTime ? this.world.Step(this.game.time.physicsElapsed, this.velocityIterations, this.positionIterations) : this.world.Step(this.frameRate, this.velocityIterations, this.positionIterations))
    },
    reset: function() {
        this.clear()
    },
    clear: function() {
        var a = this.world.GetGravity().Clone();
        this.world = new box2d.b2World(a), this.world.SetDebugDraw(this.debugDraw), this.world.SetContactListener(this.contactListener), this._toRemove = []
    },
    destroy: function() {
        this.clear(), this.gravity = null, this.world = null, this.game = null
    },
    createBody: function(a, b, c) {
        var d = new Phaser.Physics.Box2D.Body(this.game, null, a, b, c, this);
        return d
    },
    createCircle: function(a, b, c, d, e) {
        var f = this.createBody(a, b, 2);
        return f.setCircle(c, d, e)
    },
    createRectangle: function(a, b, c, d, e, f, g) {
        var h = this.createBody(a, b, 2);
        return h.setRectangle(c, d, e, f, g)
    },
    createPolygon: function(a, b, c, d, e) {
        var f = this.createBody(a, b, 2);
        return f.setPolygon(c, d, e)
    },
    addBody: function(a) {
        return a.data.world ? !1 : (a.data = this.world.CreateBody(a.bodyDef), a.data.world = this.world, a.data.parent = a, this.onBodyAdded.dispatch(a), !0)
    },
    removeBody: function(a) {
        return a.data.world == this.world && (this.world.DestroyBody(a.data), this.onBodyRemoved.dispatch(a)), a
    },
    getBodies: function() {
        for (var a = [], b = this.world.GetBodyList(); b; b = b.GetNext()) a.push(b);
        return a
    },
    getBody: function(a) {
        return a instanceof box2d.b2Body ? a : a instanceof Phaser.Physics.Box2D.Body ? a.data : a.body && a.body.type === Phaser.Physics.BOX2D ? a.body.data : null
    },
    toJSON: function() {
        return this.world.toJSON()
    },
    mpx: function(a) {
        return a *= this.ptmRatio
    },
    pxm: function(a) {
        return a / this.ptmRatio
    },
    renderDebugDraw: function(a) {
        if (this.game.physics.box2d) {
            var b = this.game.physics.box2d;
            b.debugDraw.start(a), b.world.DrawDebugData(), b.debugDraw.stop()
        }
    },
    renderBodyInfo: function(a, b) {
        a.line("Position: x: " + b.x.toFixed(3) + " y: " + b.y.toFixed(3)), a.line("Rotation: " + b.rotation.toFixed(3) + " degrees"), a.line("Velocity: x: " + b.velocity.x.toFixed(3) + " y: " + b.velocity.y.toFixed(3)), a.line("Angular velocity: " + b.angularVelocity.toFixed(3) + " degrees/sec")
    },
    getFixturesAtPoint: function(a, b, c, d) {
        "undefined" == typeof c && (c = !1), "undefined" == typeof d && (d = !1);
        var e = this.pxm(-a),
            f = this.pxm(-b),
            g = new box2d.b2Vec2(e, f),
            h = new box2d.b2AABB,
            i = new box2d.b2Vec2;
        i.SetXY(.001, .001), box2d.b2SubVV(g, i, h.lowerBound), box2d.b2AddVV(g, i, h.upperBound);
        var j = [],
            k = function(a) {
                return d && a.GetBody().GetType() !== box2d.b2BodyType.b2_dynamicBody ? !0 : a.TestPoint(g) ? (j.push(a), !c) : !0
            };
        return this.world.QueryAABB(k, h), j
    },
    getBodiesAtPoint: function(a, b, c, d) {
        "undefined" == typeof c && (c = !1), "undefined" == typeof d && (d = !1);
        var e = this.getFixturesAtPoint(a, b, c, d);
        if (e.length < 1) return e;
        for (var f = [], g = 0; g < e.length; g++) f.push(e[g].GetBody().parent);
        return f.filter(function(a, b) {
            return f.indexOf(a) === b
        }), f
    },
    mouseDragStart: function(a) {
        this.mouseDragEnd();
        var b = this.getFixturesAtPoint(a.x, a.y, !0, !0);
        if (!(b.length < 1)) {
            var c = this.pxm(-a.x),
                d = this.pxm(-a.y),
                e = new box2d.b2Vec2(c, d),
                f = new box2d.b2MouseJointDef;
            f.bodyA = this.mouseJointBody, f.bodyB = b[0].GetBody(), f.target.Copy(e), f.maxForce = 1e3 * f.bodyB.GetMass(), this.mouseJoint = this.world.CreateJoint(f), f.bodyB.SetAwake(!0)
        }
    },
    mouseDragMove: function(a) {
        if (this.mouseJoint) {
            var b = this.pxm(-a.x),
                c = this.pxm(-a.y),
                d = new box2d.b2Vec2(b, c);
            this.mouseJoint.SetTarget(d)
        }
    },
    mouseDragEnd: function() {
        this.mouseJoint && (this.world.DestroyJoint(this.mouseJoint), this.mouseJoint = null)
    },
    distanceJoint: function(a, b, c, d, e, f, g, h, i) {
        "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof i && (i = 0), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), g = this.pxm(-g), a.body && (a = a.body), b.body && (b = b.body);
        var j = new box2d.b2DistanceJointDef;
        if (j.bodyA = a.data, j.bodyB = b.data, j.localAnchorA.SetXY(d, e), j.localAnchorB.SetXY(f, g), null === c || "undefined" == typeof c) {
            var k = new box2d.b2Vec2,
                l = new box2d.b2Vec2;
            j.bodyA.GetWorldPoint(j.localAnchorA, k), j.bodyB.GetWorldPoint(j.localAnchorB, l), k.SelfSub(l), c = k.Length()
        } else c = this.pxm(c);
        return j.length = c, j.frequencyHz = h, j.dampingRatio = i, this.world.CreateJoint(j)
    },
    ropeJoint: function(a, b, c, d, e, f, g) {
        "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), g = this.pxm(-g), a.body && (a = a.body), b.body && (b = b.body);
        var h = new box2d.b2RopeJointDef;
        if (h.bodyA = a.data, h.bodyB = b.data, h.localAnchorA.SetXY(d, e), h.localAnchorB.SetXY(f, g), null === c || "undefined" == typeof c) {
            var i = new box2d.b2Vec2,
                j = new box2d.b2Vec2;
            h.bodyA.GetWorldPoint(h.localAnchorA, i), h.bodyB.GetWorldPoint(h.localAnchorB, j), i.SelfSub(j), c = i.Length()
        } else c = this.pxm(c);
        return h.maxLength = c, this.world.CreateJoint(h)
    },
    revoluteJoint: function(a, b, c, d, e, f, g, h, i, j, k, l) {
        "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof i && (i = !1), "undefined" == typeof j && (j = 0), "undefined" == typeof k && (k = 0), "undefined" == typeof l && (l = !1), c = this.pxm(-c), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), a.body && (a = a.body), b.body && (b = b.body);
        var m = new box2d.b2RevoluteJointDef;
        return m.bodyA = a.data, m.bodyB = b.data, m.localAnchorA.SetXY(c, d), m.localAnchorB.SetXY(e, f), m.motorSpeed = Phaser.Math.degToRad(-g), m.maxMotorTorque = h, m.enableMotor = i, m.lowerAngle = Phaser.Math.degToRad(j), m.upperAngle = Phaser.Math.degToRad(k), m.enableLimit = l, this.world.CreateJoint(m)
    },
    prismaticJoint: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        "undefined" == typeof c && (c = 1), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof i && (i = 0), "undefined" == typeof j && (j = 0), "undefined" == typeof l && (l = 0), "undefined" == typeof m && (m = 0), "undefined" == typeof n && (n = !1), "undefined" == typeof k && (k = !1), "undefined" == typeof o && (o = 0), c *= -1, d *= -1, e = this.pxm(-e), f = this.pxm(-f), g = this.pxm(-g), h = this.pxm(-h), i = this.pxm(i), l = this.pxm(l), m = this.pxm(m), a.body && (a = a.body), b.body && (b = b.body);
        var p = new box2d.b2PrismaticJointDef;
        return p.bodyA = a.data, p.bodyB = b.data, p.localAxisA.SetXY(c, d), p.localAnchorA.SetXY(e, f), p.localAnchorB.SetXY(g, h), p.motorSpeed = i, p.maxMotorForce = j, p.enableMotor = k, p.lowerTranslation = l, p.upperTranslation = m, p.enableLimit = n, p.referenceAngle = Phaser.Math.degToRad(-o), this.world.CreateJoint(p)
    },
    frictionJoint: function(a, b, c, d, e, f, g, h) {
        "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), e = this.pxm(-e), f = this.pxm(-f), g = this.pxm(-g), h = this.pxm(-h), a.body && (a = a.body), b.body && (b = b.body);
        var i = new box2d.b2FrictionJointDef;
        return i.bodyA = a.data, i.bodyB = b.data, i.localAnchorA.SetXY(e, f), i.localAnchorB.SetXY(g, h), i.maxForce = c, i.maxTorque = d, this.world.CreateJoint(i)
    },
    weldJoint: function(a, b, c, d, e, f, g, h) {
        "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), c = this.pxm(-c), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), a.body && (a = a.body), b.body && (b = b.body);
        var i = new box2d.b2WeldJointDef;
        return i.bodyA = a.data, i.bodyB = b.data, i.localAnchorA.SetXY(c, d), i.localAnchorB.SetXY(e, f), i.frequencyHz = g, i.dampingRatio = h, this.world.CreateJoint(i)
    },
    motorJoint: function(a, b, c, d, e, f, g, h) {
        "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 1), f = this.pxm(-f), g = this.pxm(-g), a.body && (a = a.body), b.body && (b = b.body);
        var i = new box2d.b2MotorJointDef;
        return i.bodyA = a.data, i.bodyB = b.data, i.linearOffset.SetXY(f, g), i.maxForce = c, i.maxTorque = d, i.angularOffset = Phaser.Math.degToRad(-h), i.correctionFactor = e, this.world.CreateJoint(i)
    },
    wheelJoint: function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 1), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof k && (k = 0), "undefined" == typeof l && (l = 0), "undefined" == typeof m && (m = !1), "undefined" == typeof i && (i = 0), "undefined" == typeof j && (j = 0), g *= -1, h *= -1, c = this.pxm(-c), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), a.body && (a = a.body), b.body && (b = b.body);
        var n = new box2d.b2WheelJointDef;
        return n.bodyA = a.data, n.bodyB = b.data, n.localAxisA.SetXY(g, h), n.localAnchorA.SetXY(c, d), n.localAnchorB.SetXY(e, f), n.motorSpeed = Phaser.Math.degToRad(-k), n.maxMotorTorque = l, n.enableMotor = m, n.frequencyHz = i, n.dampingRatio = j, this.world.CreateJoint(n)
    },
    pulleyJoint: function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), "undefined" == typeof i && (i = 0), "undefined" == typeof j && (j = 0), "undefined" == typeof k && (k = 1), "undefined" == typeof l && (l = 100), "undefined" == typeof m && (m = 100), c = this.pxm(-c), d = this.pxm(-d), e = this.pxm(-e), f = this.pxm(-f), g = this.pxm(-g), h = this.pxm(-h), i = this.pxm(-i), j = this.pxm(-j), l = this.pxm(l), m = this.pxm(m), a.body && (a = a.body), b.body && (b = b.body);
        var n = new box2d.b2PulleyJointDef;
        return n.bodyA = a.data, n.bodyB = b.data, n.localAnchorA.SetXY(c, d), n.localAnchorB.SetXY(e, f), n.groundAnchorA.SetXY(g, h), n.groundAnchorB.SetXY(i, j), n.lengthA = l, n.lengthB = m, n.ratio = k, this.world.CreateJoint(n)
    },
    gearJoint: function(a, b, c) {
        "undefined" == typeof c && (c = 1);
        var d = new box2d.b2GearJointDef;
        return d.joint1 = a, d.joint2 = b, d.ratio = -c, d.bodyA = a.GetBodyA(), d.bodyB = b.GetBodyB(), this.world.CreateJoint(d)
    },
    clearTilemapLayerBodies: function(a, b) {
        b = a.getLayer(b);
        for (var c = a.layers[b].bodies.length; c--;) a.layers[b].bodies[c].destroy();
        a.layers[b].bodies.length = 0
    },
    convertTilemap: function(a, b, c, d) {
        b = a.getLayer(b), "undefined" == typeof c && (c = !0), "undefined" == typeof d && (d = !0), this.clearTilemapLayerBodies(a, b);
        for (var e = 0, f = 0, g = 0, h = 0, i = a.layers[b].height; i > h; h++) {
            e = 0;
            for (var j = 0, k = a.layers[b].width; k > j; j++) {
                var l = a.layers[b].data[h][j];
                if (l && l.index > -1 && l.collides)
                    if (d) {
                        var m = a.getTileRight(b, j, h);
                        if (0 === e && (f = l.x * l.width, g = l.y * l.height, e = l.width), m && m.collides) e += l.width;
                        else {
                            var n = new Phaser.Physics.Box2D.Body(this.game, null, f, g, 0);
                            n.addRectangle(e, l.height, e / 2, l.height / 2, 0), c && this.addBody(n), a.layers[b].bodies.push(n), e = 0
                        }
                    } else {
                        var n = this.createBody(l.x * l.width, l.y * l.height, 0, !1);
                        n.addRectangle(l.width, l.height, l.width / 2, l.height / 2, 0), c && this.addBody(n), a.layers[b].bodies.push(n)
                    }
            }
        }
        return a.layers[b].bodies
    },
    raycast: function(a, b, c, d, e, f) {
        "undefined" == typeof e && (e = !0), "undefined" == typeof f && (f = null), a = this.pxm(-a), b = this.pxm(-b), c = this.pxm(-c), d = this.pxm(-d);
        var g = new box2d.b2Vec2(a, b),
            h = new box2d.b2Vec2(c, d),
            i = [],
            j = new Phaser.Physics.Box2D.RayCastCallback(this, e, f);
        this.world.RayCast(j, g, h);
        for (var k = 0; k < j.hits.length; k++) {
            var l = j.hits[k];
            l.point = {
                x: this.mpx(-l.point.x),
                y: this.mpx(-l.point.y)
            }, l.normal = {
                x: -l.normal.x,
                y: -l.normal.y
            }, i.push(l)
        }
        return i
    },
    queryAABB: function(a, b, c, d) {
        a = this.pxm(-a), b = this.pxm(-b), c = this.pxm(c), d = this.pxm(d);
        var e = new box2d.b2AABB;
        e.lowerBound.SetXY(a - c, b - d), e.upperBound.SetXY(a, b);
        var f = new Phaser.Physics.Box2D.QueryCallback(this);
        return this.world.QueryAABB(f, e), f.hits
    },
    queryFixture: function(a) {
        var b = new Phaser.Physics.Box2D.QueryCallback(this);
        return this.world.QueryShape(b, a.GetShape(), a.GetBody().GetTransform()), b.hits
    },
    setPTMRatio: function(a) {
        this.ptmRatio = a, this.debugDraw = new Phaser.Physics.Box2D.DefaultDebugDraw(this.ptmRatio), this.world.SetDebugDraw(this.debugDraw)
    }
}, Phaser.Physics.Box2D.RayCastCallback = function(a, b, c) {
    this.world = a, this.closestHitOnly = b, this.filterFunction = c, this.hits = []
}, goog.inherits(Phaser.Physics.Box2D.RayCastCallback, box2d.b2RayCastCallback), Phaser.Physics.Box2D.RayCastCallback.prototype.ReportFixture = function(a, b, c, d) {
    if (null !== this.filterFunction) {
        var e = {
                x: this.world.mpx(-b.x),
                y: this.world.mpx(-b.y)
            },
            f = {
                x: -c.x,
                y: -c.y
            },
            g = a.GetBody().parent;
        if (!this.filterFunction.call(this, g, a, e, f)) return -1
    }
    this.closestHitOnly && (this.hits = []);
    var h = {};
    return h.body = a.GetBody().parent, h.fixture = a, h.point = {
        x: b.x,
        y: b.y
    }, h.normal = {
        x: c.x,
        y: c.y
    }, this.hits.push(h), this.closestHitOnly ? d : 1
}, Phaser.Physics.Box2D.QueryCallback = function(a) {
    this.world = a, this.hits = []
}, goog.inherits(Phaser.Physics.Box2D.QueryCallback, box2d.b2QueryCallback), Phaser.Physics.Box2D.QueryCallback.prototype.ReportFixture = function(a) {
    var b = {};
    return b.body = a.GetBody().parent, b.fixture = a, this.hits.push(b), !0
}, Phaser.Physics.Box2D.renderBody = function(a, b, c, d) {
    c = c || "rgb(255,255,255)", "undefined" == typeof d && (d = !0);
    var e = b.data,
        f = e.GetTransform(),
        g = b.world;
    f.p.x += -b.game.camera.x / g.ptmRatio, f.p.y -= -b.game.camera.y / g.ptmRatio, g.debugDraw.start(a), g.debugDraw.PushTransform(f);
    var h = Phaser.Color.webToColor(c),
        i = g.debugDraw.color;
    i.r = h.r / 255, i.g = h.g / 255, i.b = h.b / 255;
    for (var j = e.GetFixtureList(); j; j = j.GetNext()) g.world.DrawShape(j, i);
    g.debugDraw.PopTransform(), g.debugDraw.stop()
}, Phaser.Physics.Box2D.Body = function(a, b, c, d, e, f) {
    "undefined" == typeof b && (b = null), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 2), "undefined" == typeof f && (f = a.physics.box2d), this.game = a, this.world = f, this.id = this.world.getNextBodyId(), this.sprite = b, this.type = Phaser.Physics.BOX2D, this.offset = new Phaser.Point, this.bodyDef = new box2d.b2BodyDef, this.bodyDef.position.SetXY(-this.world.pxm(c), -this.world.pxm(d)), 0 === e ? this.bodyDef.type = box2d.b2BodyType.b2_staticBody : 1 === e ? this.bodyDef.type = box2d.b2BodyType.b2_kinematicBody : 2 === e ? this.bodyDef.type = box2d.b2BodyType.b2_dynamicBody : 3 === e && (this.bodyDef.type = box2d.b2BodyType.b2_bulletBody), this.data = this.world.world.CreateBody(this.bodyDef), this.data.world = this.world.world, this.data.parent = this, this.velocity = new Phaser.Physics.Box2D.PointProxy(this.world, this.data, this.data.GetLinearVelocity, this.data.SetLinearVelocity), this.removeNextStep = !1, this._fixtureContactCallbacks = {}, this._fixtureContactCallbackContext = {}, this._bodyContactCallbacks = {}, this._bodyContactCallbackContext = {}, this._categoryContactCallbacks = {}, this._categoryContactCallbackContext = {}, this._fixturePresolveCallbacks = {}, this._fixturePresolveCallbackContext = {}, this._bodyPresolveCallbacks = {}, this._bodyPresolveCallbackContext = {}, this._categoryPresolveCallbacks = {}, this._categoryPresolveCallbackContext = {}, this._fixturePostsolveCallbacks = {}, this._fixturePostsolveCallbackContext = {}, this._bodyPostsolveCallbacks = {}, this._bodyPostsolveCallbackContext = {}, this._categoryPostsolveCallbacks = {}, this._categoryPostsolveCallbackContext = {}, b && this.setRectangleFromSprite(b)
}, Phaser.Physics.Box2D.Body.prototype = {
    setBodyContactCallback: function(a, b, c) {
        var d = -1;
        a.id ? d = a.id : a.body && (d = a.body.id), d > -1 && (null === b ? (delete this._bodyContactCallbacks[d], delete this._bodyContactCallbackContext[d]) : (this._bodyContactCallbacks[d] = b, this._bodyContactCallbackContext[d] = c))
    },
    setFixtureContactCallback: function(a, b, c) {
        var d = a.id;
        d > -1 && (null === b ? (delete this._fixtureContactCallbacks[d], delete this._fixtureContactCallbackContext[d]) : (this._fixtureContactCallbacks[d] = b, this._fixtureContactCallbackContext[d] = c))
    },
    setCategoryContactCallback: function(a, b, c) {
        null === b ? (delete this._categoryContactCallbacks[a], delete this._categoryContactCallbacksContext[a]) : (this._categoryContactCallbacks[a] = b, this._categoryContactCallbackContext[a] = c)
    },
    setBodyPresolveCallback: function(a, b, c) {
        var d = -1;
        a.id ? d = a.id : a.body && (d = a.body.id), d > -1 && (null === b ? (delete this._bodyPresolveCallbacks[d], delete this._bodyPresolveCallbackContext[d]) : (this._bodyPresolveCallbacks[d] = b, this._bodyPresolveCallbackContext[d] = c))
    },
    setFixturePresolveCallback: function(a, b, c) {
        var d = a.id;
        d > -1 && (null === b ? (delete this._fixturePresolveCallbacks[d], delete this._fixturePresolveCallbackContext[d]) : (this._fixturePresolveCallbacks[d] = b, this._fixturePresolveCallbackContext[d] = c))
    },
    setCategoryPresolveCallback: function(a, b, c) {
        null === b ? (delete this._categoryPresolveCallbacks[a], delete this._categoryPresolveCallbacksContext[a]) : (this._categoryPresolveCallbacks[a] = b, this._categoryPresolveCallbackContext[a] = c)
    },
    setBodyPostsolveCallback: function(a, b, c) {
        var d = -1;
        a.id ? d = a.id : a.body && (d = a.body.id), d > -1 && (null === b ? (delete this._bodyPostsolveCallbacks[d], delete this._bodyPostsolveCallbackContext[d]) : (this._bodyPostsolveCallbacks[d] = b, this._bodyPostsolveCallbackContext[d] = c))
    },
    setFixturePostsolveCallback: function(a, b, c) {
        var d = a.id;
        d > -1 && (null === b ? (delete this._fixturePostsolveCallbacks[d], delete this._fixturePostsolveCallbackContext[d]) : (this._fixturePostsolveCallbacks[d] = b, this._fixturePostsolveCallbackContext[d] = c))
    },
    setCategoryPostsolveCallback: function(a, b, c) {
        null === b ? (delete this._categoryPostsolveCallbacks[a], delete this._categoryPostsolveCallbacksContext[a]) : (this._categoryPostsolveCallbacks[a] = b, this._categoryPostsolveCallbackContext[a] = c)
    },
    setCollisionCategory: function(a, b) {
        if ("undefined" == typeof b)
            for (var c = this.data.GetFixtureList(); c; c = c.GetNext()) {
                var d = c.GetFilterData();
                d.categoryBits = a
            } else {
                var d = b.GetFilterData();
                d.categoryBits = a
            }
    },
    setCollisionMask: function(a, b) {
        if ("undefined" == typeof b)
            for (var c = this.data.GetFixtureList(); c; c = c.GetNext()) {
                var d = c.GetFilterData();
                d.maskBits = a
            } else {
                var d = b.GetFilterData();
                d.maskBits = a
            }
    },
    applyForce: function(a, b) {
        this.data.ApplyForce(new box2d.b2Vec2(-a, -b), this.data.GetWorldCenter(), !0)
    },
    setZeroRotation: function() {
        this.data.SetAngularVelocity(0)
    },
    setZeroVelocity: function() {
        this.data.SetLinearVelocity(box2d.b2Vec2.ZERO)
    },
    setZeroDamping: function() {
        this.data.SetLinearDamping(0), this.data.SetAngularDamping(0)
    },
    toLocalPoint: function(a, b) {
        return a.x = this.world.pxm(-b.x), a.y = this.world.pxm(-b.y), this.data.GetLocalPoint(a, a), a.x = this.world.mpx(-a.x), a.y = this.world.mpx(-a.y), a
    },
    toWorldPoint: function(a, b) {
        return a.x = this.world.pxm(-b.x), a.y = this.world.pxm(-b.y), this.data.GetWorldPoint(a, a), a.x = this.world.mpx(-a.x), a.y = this.world.mpx(-a.y), a
    },
    toLocalVector: function(a, b) {
        return a.x = this.world.pxm(-b.x), a.y = this.world.pxm(-b.y), this.data.GetLocalVector(a, a), a.x = this.world.mpx(-a.x), a.y = this.world.mpx(-a.y), a
    },
    toWorldVector: function(a, b) {
        a.x = this.world.pxm(-b.x), a.y = this.world.pxm(-b.y), this.data.GetWorldVector(a, a), a.x = this.world.mpx(-a.x), a.y = this.world.mpx(-a.y)
    },
    rotateLeft: function(a) {
        this.data.SetAngularVelocity(this.world.pxm(-a))
    },
    rotateRight: function(a) {
        this.data.SetAngularVelocity(this.world.pxm(a))
    },
    moveForward: function(a) {
        var b = this.world.pxm(a),
            c = new box2d.b2Vec2;
        this.toWorldVector(c, {
            x: 0,
            y: b
        }), this.data.SetLinearVelocity(c)
    },
    moveBackward: function(a) {
        var b = this.world.pxm(-a),
            c = new box2d.b2Vec2;
        this.toWorldVector(c, {
            x: 0,
            y: b
        }), this.data.SetLinearVelocity(c)
    },
    thrust: function(a) {
        var b = this.world.pxm(a) * this.data.GetMass(),
            c = new box2d.b2Vec2;
        this.toWorldVector(c, {
            x: 0,
            y: b
        }), this.data.ApplyForce(c, this.data.GetWorldCenter(), !0)
    },
    reverse: function(a) {
        var b = -this.world.pxm(a) * this.data.GetMass(),
            c = new box2d.b2Vec2;
        this.toWorldVector(c, {
            x: 0,
            y: b
        }), this.data.ApplyForce(c, this.data.GetWorldCenter(), !0)
    },
    moveLeft: function(a) {
        this.velocity.x = -a
    },
    moveRight: function(a) {
        this.velocity.x = a
    },
    moveUp: function(a) {
        this.velocity.y = -a
    },
    moveDown: function(a) {
        this.velocity.y = a
    },
    preUpdate: function() {
        this.removeNextStep && (this.removeFromWorld(), this.removeNextStep = !1)
    },
    postUpdate: function() {
        this.sprite && (this.sprite.x = this.world.mpx(-this.data.GetPosition().x), this.sprite.y = this.world.mpx(-this.data.GetPosition().y), this.sprite.rotation = this.data.GetAngle())
    },
    kill: function() {
        this.data.SetActive(!1)
    },
    reset: function(a, b) {
        this.data.SetPositionXY(this.world.pxm(-a), this.world.pxm(-b)), this.data.SetActive(!0)
    },
    removeFromWorld: function() {
        this.data.world === this.game.physics.box2d.world && this.game.physics.box2d.removeBodyNextStep(this)
    },
    destroy: function() {
        this.removeFromWorld(), this._bodyCallbacks = {}, this._bodyCallbackContext = {}, this._categoryCallbacks = {}, this._categoryCallbackContext = {}, this.sprite = null
    },
    clearFixtures: function() {
        for (var a = [], b = this.data.GetFixtureList(); b; b = b.GetNext()) a.push(b);
        for (var c = a.length; c--;) this.data.DestroyFixture(a[c])
    },
    addCircle: function(a, b, c) {
        var d = new box2d.b2CircleShape(this.world.pxm(a));
        d.m_p.SetXY(this.world.pxm(-b), this.world.pxm(-c));
        var e = new box2d.b2FixtureDef;
        e.shape = d, e.friction = this.world.friction, e.restitution = this.world.restitution, e.density = this.world.density;
        var f = this.data.CreateFixture(e);
        return f.id = this.world.getNextFixtureId(), f
    },
    addRectangle: function(a, b, c, d, e) {
        "undefined" == typeof a && (a = 16), "undefined" == typeof b && (b = 16), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), a = this.world.pxm(a), b = this.world.pxm(b);
        var f = new box2d.b2PolygonShape;
        f.SetAsOrientedBox(.5 * a, .5 * b, new box2d.b2Vec2(this.world.pxm(-c), this.world.pxm(-d)), e);
        var g = new box2d.b2FixtureDef;
        g.shape = f, g.friction = this.world.friction, g.restitution = this.world.restitution, g.density = this.world.density;
        var h = this.data.CreateFixture(g);
        return h.id = this.world.getNextFixtureId(), h
    },
    addEdge: function(a, b, c, d) {
        var e = new box2d.b2EdgeShape;
        e.Set(new box2d.b2Vec2(this.world.pxm(-a), this.world.pxm(-b)), new box2d.b2Vec2(this.world.pxm(-c), this.world.pxm(-d)));
        var f = new box2d.b2FixtureDef;
        f.shape = e, f.friction = this.world.friction, f.restitution = this.world.restitution, f.density = this.world.density;
        var g = this.data.CreateFixture(f);
        return g.id = this.world.getNextFixtureId(), g
    },
    addChain: function(a, b, c, d) {
        if ("undefined" == typeof a) return null;
        if (a.length < 4) return null;
        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = (a.length - b) / 2);
        for (var e = [], f = b; b + c > f; f++) e.push(new box2d.b2Vec2(this.world.pxm(-a[2 * f]), this.world.pxm(-a[2 * f + 1])));
        var g = new box2d.b2ChainShape;
        d ? g.CreateLoop(e, e.length) : g.CreateChain(e, e.length);
        var h = new box2d.b2FixtureDef;
        h.shape = g, h.friction = this.world.friction, h.restitution = this.world.restitution, h.density = this.world.density;
        var i = this.data.CreateFixture(h);
        return i.id = this.world.getNextFixtureId(), i
    },
    addLoop: function(a, b, c) {
        return this.addChain(a, b, c, !0)
    },
    addPolygon: function(a, b, c) {
        if ("undefined" == typeof a) return null;
        if (a.length < 6) return null;
        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = (a.length - b) / 2);
        for (var d = [], e = b; b + c > e; e++) d.push({
            x: this.world.pxm(-a[2 * e]),
            y: this.world.pxm(-a[2 * e + 1])
        });
        var f = new Phaser.Physics.Box2D.Polygon;
        f.setFromXYObjects(d);
        for (var g = f.decompose(d), h = null, e = 0; e < g.length; e++) {
            var i = new box2d.b2PolygonShape;
            i.Set(g[e], g[e].length);
            var j = new box2d.b2FixtureDef;
            j.shape = i, j.friction = this.world.friction, j.restitution = this.world.restitution, j.density = this.world.density, h = this.data.CreateFixture(j), h.id = this.world.getNextFixtureId()
        }
        return h
    },
    removeFixture: function(a) {
        return a.GetBody() != this.data ? !1 : (this.data.DestroyFixture(a), !0)
    },
    setCircle: function(a, b, c) {
        return "undefined" == typeof a && (a = 32), "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 0), this.clearFixtures(), this.addCircle(a, b, c)
    },
    setRectangle: function(a, b, c, d, e) {
        return this.clearFixtures(), this.addRectangle(a, b, c, d, e)
    },
    setRectangleFromSprite: function(a) {
        return "undefined" == typeof a && (a = this.sprite), this.clearFixtures(), this.addRectangle(a.width, a.height, 0, 0, a.rotation)
    },
    setEdge: function(a, b, c, d) {
        return "undefined" == typeof a && (a = 0), "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), this.clearFixtures(), this.addEdge(a, b, c, d)
    },
    setChain: function(a, b, c, d) {
        return "undefined" == typeof a ? null : a.length < 4 ? null : ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = (a.length - b) / 2), this.clearFixtures(), this.addChain(a, b, c, d))
    },
    setLoop: function(a, b, c) {
        return this.setChain(a, b, c, !0)
    },
    setPolygon: function(a, b, c) {
        return "undefined" == typeof a ? null : a.length < 4 ? null : ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = (a.length - b) / 2), this.clearFixtures(), this.addPolygon(a, b, c))
    },
    loadPolygon: function(a, b, c) {
        "undefined" == typeof c && (c = null);
        for (var d = this.game.cache.getPhysicsData(a, b), e = 0; e < d.length; e++) {
            for (var f = [], g = 0; g < d[e].shape.length; g += 2) f.push(new box2d.b2Vec2(this.world.pxm(-d[e].shape[g]), this.world.pxm(-d[e].shape[g + 1])));
            if (c)
                for (var h = this.world.pxm(-.5 * c.width), i = this.world.pxm(-.5 * c.height), j = 0; j < f.length; j++) f[j].x -= h, f[j].y -= i;
            var k = new box2d.b2PolygonShape;
            k.Set(f, f.length);
            var l = new box2d.b2FixtureDef;
            l.shape = k, l.friction = d[e].friction, l.restitution = d[e].bounce, l.density = d[e].density, l.filter.categoryBits = d[e].filter.categoryBits, l.filter.maskBits = d[e].filter.maskBits;
            var m = this.data.CreateFixture(l);
            m.id = this.world.getNextFixtureId()
        }
        return !0
    },
    containsPoint: function(a) {
        for (var b = this.world.pxm(-a.x), c = this.world.pxm(-a.y), d = new box2d.b2Vec2(b, c), e = this.data.GetFixtureList(); e; e = e.GetNext())
            if (e.TestPoint(d)) return !0;
        return !1
    }
}, Phaser.Physics.Box2D.Body.prototype.constructor = Phaser.Physics.Box2D.Body, Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "static", {
    get: function() {
        return this.data.GetType() === box2d.b2BodyType.b2_staticBody
    },
    set: function(a) {
        a && this.data.GetType() !== box2d.b2BodyType.b2_staticBody ? this.data.SetType(box2d.b2BodyType.b2_staticBody) : a || this.data.GetType() !== box2d.b2BodyType.b2_staticBody || this.data.SetType(box2d.b2BodyType.b2_dynamicBody)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "dynamic", {
    get: function() {
        return this.data.GetType() === box2d.b2BodyType.b2_dynamicBody
    },
    set: function(a) {
        a && this.data.GetType() !== box2d.b2BodyType.b2_dynamicBody ? this.data.SetType(box2d.b2BodyType.b2_dynamicBody) : a || this.data.GetType() !== box2d.b2BodyType.b2_dynamicBody || this.data.SetType(box2d.b2BodyType.b2_staticBody)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "kinematic", {
    get: function() {
        return this.data.GetType() === box2d.b2BodyType.b2_kinematicBody
    },
    set: function(a) {
        a && this.data.GetType() !== box2d.b2BodyType.b2_kinematicBody ? this.data.SetType(box2d.b2BodyType.b2_kinematicBody) : a || this.data.GetType() !== box2d.b2BodyType.b2_kinematicBody || this.data.SetType(box2d.b2BodyType.b2_staticBody)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "angle", {
    get: function() {
        return Phaser.Math.wrapAngle(Phaser.Math.radToDeg(this.data.GetAngle()))
    },
    set: function(a) {
        this.data.SetAngle(Phaser.Math.degToRad(Phaser.Math.wrapAngle(a)))
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "linearDamping", {
    get: function() {
        return this.data.GetLinearDamping()
    },
    set: function(a) {
        this.data.SetLinearDamping(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "angularDamping", {
    get: function() {
        return this.data.GetAngularDamping()
    },
    set: function(a) {
        this.data.SetAngularDamping(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "angularVelocity", {
    get: function() {
        return this.data.GetAngularVelocity()
    },
    set: function(a) {
        this.data.SetAngularVelocity(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "fixedRotation", {
    get: function() {
        return this.data.IsFixedRotation()
    },
    set: function(a) {
        this.data.SetFixedRotation(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "gravityScale", {
    get: function() {
        return this.data.GetGravityScale()
    },
    set: function(a) {
        this.data.SetGravityScale(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "friction", {
    get: function() {
        var a = this.data.GetFixtureList();
        return a ? a.GetFriction() : 0
    },
    set: function(a) {
        for (var b = this.data.GetFixtureList(); b; b = b.GetNext()) b.SetFriction(a), b.Refilter()
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "restitution", {
    get: function() {
        var a = this.data.GetFixtureList();
        return a ? a.GetRestitution() : 0
    },
    set: function(a) {
        for (var b = this.data.GetFixtureList(); b; b = b.GetNext()) b.SetRestitution(a), b.Refilter()
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "sensor", {
    get: function() {
        var a = this.data.GetFixtureList();
        return a ? a.IsSensor() : 0
    },
    set: function(a) {
        for (var b = this.data.GetFixtureList(); b; b = b.GetNext()) b.SetSensor(a), b.Refilter()
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "bullet", {
    get: function() {
        return this.data.IsBullet()
    },
    set: function(a) {
        this.data.SetBullet(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "mass", {
    get: function() {
        return this.data.GetMass()
    },
    set: function(a) {
        if (0 === a) this.data.SetType(box2d.b2BodyType.b2_staticBody);
        else {
            this.data.GetType() !== box2d.b2BodyType.b2_dynamicBody && this.data.SetType(box2d.b2BodyType.b2_dynamicBody);
            for (var b = this.data.GetMass(), c = a / b, d = this.data.GetFixtureList(); d; d = d.GetNext()) {
                var e = d.GetDensity();
                d.SetDensity(e * c)
            }
            this.data.ResetMassData()
        }
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "rotation", {
    get: function() {
        return this.data.GetAngle()
    },
    set: function(a) {
        this.data.SetAngle(a)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "x", {
    get: function() {
        return this.world.mpx(-this.data.GetPosition().x)
    },
    set: function(a) {
        this.data.SetPositionXY(this.world.pxm(-a), this.data.GetPosition().y)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "y", {
    get: function() {
        return this.world.mpx(-this.data.GetPosition().y)
    },
    set: function(a) {
        this.data.SetPositionXY(this.data.GetPosition().x, this.world.pxm(-a))
    }
}), Object.defineProperty(Phaser.Physics.Box2D.Body.prototype, "collideWorldBounds", {
    get: function() {
        for (var a = this.data.GetFixtureList(); a; a = a.GetNext()) {
            var b = a.GetFilterData();
            if (b.maskBits & Phaser.Physics.Box2D.worldBoundsFilterCategory) return !0
        }
        return !1
    },
    set: function(a) {
        for (var b = this.data.GetFixtureList(); b; b = b.GetNext()) {
            var c = b.GetFilterData();
            a ? c.maskBits |= Phaser.Physics.Box2D.worldBoundsFilterCategory : c.maskBits &= ~Phaser.Physics.Box2D.worldBoundsFilterCategory
        }
    }
}), Phaser.Physics.Box2D.PointProxy = function(a, b, c, d) {
    this.world = a, this.object = b, this.gettor = c, this.settor = d
}, Phaser.Physics.Box2D.PointProxy.prototype.constructor = Phaser.Physics.Box2D.PointProxy, Object.defineProperty(Phaser.Physics.Box2D.PointProxy.prototype, "x", {
    get: function() {
        return this.world.mpx(-this.gettor.call(this.object).x)
    },
    set: function(a) {
        var b = this.gettor.call(this.object);
        b.x = this.world.pxm(-a), this.settor.call(this.object, b)
    }
}), Object.defineProperty(Phaser.Physics.Box2D.PointProxy.prototype, "y", {
    get: function() {
        return this.world.mpx(-this.gettor.call(this.object).y)
    },
    set: function(a) {
        var b = this.gettor.call(this.object);
        b.y = this.world.pxm(-a), this.settor.call(this.object, b)
    }
}), Phaser.Physics.Box2D.DefaultDebugDraw = function(a) {
    this.context = null, this.pixelsPerMeter = a, this.flags = box2d.b2DrawFlags.e_shapeBit
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.color = new box2d.b2Color(1, 1, 1), Phaser.Physics.Box2D.DefaultDebugDraw.prototype.SetFlags = function(a) {
    this.flags = a
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.GetFlags = function() {
    return this.flags
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.start = function(a) {
    this.context = a, this.context.save(), this.context.scale(-1, -1), this.context.scale(this.pixelsPerMeter, this.pixelsPerMeter)
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.stop = function() {
    this.context.restore()
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.PushTransform = function(a) {
    var b = this.context;
    b.save(), b.translate(a.p.x, a.p.y), b.rotate(a.q.GetAngleRadians())
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.PopTransform = function() {
    var a = this.context;
    a.restore()
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawPolygon = function(a, b, c) {
    if (b) {
        var d = this.context;
        d.lineWidth = 1 / this.pixelsPerMeter, d.beginPath(), d.moveTo(a[0].x, a[0].y);
        for (var e = 1; b > e; e++) d.lineTo(a[e].x, a[e].y);
        d.closePath(), d.strokeStyle = c.MakeStyleString(1), d.stroke()
    }
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSolidPolygon = function(a, b, c) {
    if (b) {
        var d = this.context;
        d.lineWidth = 1 / this.pixelsPerMeter, d.beginPath(), d.moveTo(a[0].x, a[0].y);
        for (var e = 1; b > e; e++) d.lineTo(a[e].x, a[e].y);
        d.closePath(), d.fillStyle = c.MakeStyleString(.5), d.fill(), d.strokeStyle = c.MakeStyleString(1), d.stroke()
    }
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawCircle = function(a, b, c) {
    if (b) {
        var d = this.context;
        d.beginPath(), d.arc(a.x, a.y, b, 0, 2 * Math.PI, !0), d.strokeStyle = c.MakeStyleString(1), d.stroke()
    }
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSolidCircle = function(a, b, c, d) {
    if (b) {
        var e = this.context;
        e.lineWidth = 1 / this.pixelsPerMeter;
        var f = a.x,
            g = a.y;
        e.beginPath(), e.arc(f, g, b, 0, 2 * Math.PI, !0), e.moveTo(f, g), e.lineTo(f + c.x * b, g + c.y * b), e.fillStyle = d.MakeStyleString(.5), e.fill(), e.strokeStyle = d.MakeStyleString(1), e.stroke()
    }
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSegment = function(a, b, c) {
    var d = this.context;
    d.lineWidth = 1 / this.pixelsPerMeter, d.beginPath(), d.moveTo(a.x, a.y), d.lineTo(b.x, b.y), d.strokeStyle = c.MakeStyleString(1), d.stroke()
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawTransform = function(a) {
    var b = this.context;
    b.lineWidth = 1 / this.pixelsPerMeter, this.PushTransform(a), b.beginPath(), b.moveTo(0, 0), b.lineTo(1, 0), b.strokeStyle = box2d.b2Color.RED.MakeStyleString(1), b.stroke(), b.beginPath(), b.moveTo(0, 0), b.lineTo(0, 1), b.strokeStyle = box2d.b2Color.GREEN.MakeStyleString(1), b.stroke(), this.PopTransform(a)
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawPoint = function(a, b, c) {
    var d = this.context;
    d.fillStyle = c.MakeStyleString();
    var e = b / 2;
    d.fillRect(a.x - e, a.y - e, b, b)
}, Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawAABB = function(a, b) {
    var c = this.context;
    c.strokeStyle = b.MakeStyleString();
    var d = a.lowerBound.x,
        e = a.lowerBound.y,
        f = a.upperBound.x - a.lowerBound.x,
        g = a.upperBound.y - a.lowerBound.y;
    c.strokeRect(d, e, f, g)
}, Object.defineProperty(Phaser.Physics.Box2D.DefaultDebugDraw.prototype, "shapes", {
    get: function() {
        return this.flags & box2d.b2DrawFlags.e_shapeBit
    },
    set: function(a) {
        a ? this.flags |= box2d.b2DrawFlags.e_shapeBit : this.flags &= ~box2d.b2DrawFlags.e_shapeBit
    }
}), Object.defineProperty(Phaser.Physics.Box2D.DefaultDebugDraw.prototype, "joints", {
    get: function() {
        return this.flags & box2d.b2DrawFlags.e_jointBit
    },
    set: function(a) {
        a ? this.flags |= box2d.b2DrawFlags.e_jointBit : this.flags &= ~box2d.b2DrawFlags.e_jointBit
    }
}), Object.defineProperty(Phaser.Physics.Box2D.DefaultDebugDraw.prototype, "aabbs", {
    get: function() {
        return this.flags & box2d.b2DrawFlags.e_aabbBit
    },
    set: function(a) {
        a ? this.flags |= box2d.b2DrawFlags.e_aabbBit : this.flags &= ~box2d.b2DrawFlags.e_aabbBit
    }
}), Object.defineProperty(Phaser.Physics.Box2D.DefaultDebugDraw.prototype, "pairs", {
    get: function() {
        return this.flags & box2d.b2DrawFlags.e_pairBit
    },
    set: function(a) {
        a ? this.flags |= box2d.b2DrawFlags.e_pairBit : this.flags &= ~box2d.b2DrawFlags.e_pairBit
    }
}), Object.defineProperty(Phaser.Physics.Box2D.DefaultDebugDraw.prototype, "centerOfMass", {
    get: function() {
        return this.flags & box2d.b2DrawFlags.e_centerOfMassBit
    },
    set: function(a) {
        a ? this.flags |= box2d.b2DrawFlags.e_centerOfMassBit : this.flags &= ~box2d.b2DrawFlags.e_centerOfMassBit
    }
}), Phaser.Physics.Box2D.DefaultContactListener = function() {}, Phaser.Physics.Box2D.DefaultContactListener.prototype.BeginContact = function(a) {
    this.handleContactBeginOrEnd(a, !0)
}, Phaser.Physics.Box2D.DefaultContactListener.prototype.EndContact = function(a) {
    this.handleContactBeginOrEnd(a, !1)
}, Phaser.Physics.Box2D.DefaultContactListener.prototype.handleContactBeginOrEnd = function(a, b) {
    var c = a.GetFixtureA(),
        d = a.GetFixtureB(),
        e = c.GetBody(),
        f = d.GetBody(),
        g = c.GetFilterData().categoryBits,
        h = d.GetFilterData().categoryBits,
        i = e.parent,
        j = f.parent;
    if (void 0 !== i && void 0 !== j) {
        var k = i.id,
            l = j.id;
        i._bodyContactCallbacks[l] && i._bodyContactCallbacks[l].call(i._bodyContactCallbackContext[l], i, j, c, d, b, a), j._bodyContactCallbacks[k] && j._bodyContactCallbacks[k].call(j._bodyContactCallbackContext[k], j, i, d, c, b, a), i._fixtureContactCallbacks[d.id] && i._fixtureContactCallbacks[d.id].call(i._fixtureContactCallbackContext[d.id], i, j, c, d, b, a), j._fixtureContactCallbacks[c.id] && j._fixtureContactCallbacks[c.id].call(j._fixtureContactCallbackContext[c.id], j, i, d, c, b, a), i._fixtureContactCallbacks[c.id] && i._fixtureContactCallbacks[c.id].call(i._fixtureContactCallbackContext[c.id], i, j, c, d, b, a), j._fixtureContactCallbacks[d.id] && j._fixtureContactCallbacks[d.id].call(j._fixtureContactCallbackContext[d.id], j, i, d, c, b, a), i._categoryContactCallbacks[h] && i._categoryContactCallbacks[h].call(i._categoryContactCallbackContext[h], i, j, c, d, b, a), j._categoryContactCallbacks[g] && j._categoryContactCallbacks[g].call(j._categoryContactCallbackContext[g], j, i, d, c, b, a), i._categoryContactCallbacks[g] && i._categoryContactCallbacks[g].call(i._categoryContactCallbackContext[g], i, j, c, d, b, a), j._categoryContactCallbacks[h] && j._categoryContactCallbacks[h].call(j._categoryContactCallbackContext[h], j, i, d, c, b, a)
    }
}, Phaser.Physics.Box2D.DefaultContactListener.prototype.PreSolve = function(a, b) {
    var c = a.GetFixtureA(),
        d = a.GetFixtureB(),
        e = c.GetBody(),
        f = d.GetBody(),
        g = c.GetFilterData().categoryBits,
        h = d.GetFilterData().categoryBits,
        i = e.parent,
        j = f.parent;
    if (void 0 !== i && void 0 !== j) {
        var k = i.id,
            l = j.id;
        i._bodyPresolveCallbacks[l] && i._bodyPresolveCallbacks[l].call(i._bodyPresolveCallbackContext[l], i, j, c, d, a, b), j._bodyPresolveCallbacks[k] && j._bodyPresolveCallbacks[k].call(j._bodyPresolveCallbackContext[k], j, i, d, c, a, b), i._fixturePresolveCallbacks[d.id] && i._fixturePresolveCallbacks[d.id].call(i._fixturePresolveCallbackContext[d.id], i, j, c, d, a, b), j._fixturePresolveCallbacks[c.id] && j._fixturePresolveCallbacks[c.id].call(j._fixturePresolveCallbackContext[c.id], j, i, d, c, a, b), i._categoryPresolveCallbacks[h] && i._categoryPresolveCallbacks[h].call(i._categoryPresolveCallbackContext[h], i, j, c, d, a, b), j._categoryPresolveCallbacks[g] && j._categoryPresolveCallbacks[g].call(j._categoryPresolveCallbackContext[g], j, i, d, c, a, b)
    }
}, Phaser.Physics.Box2D.DefaultContactListener.prototype.PostSolve = function(a, b) {
    var c = a.GetFixtureA(),
        d = a.GetFixtureB(),
        e = c.GetBody(),
        f = d.GetBody(),
        g = c.GetFilterData().categoryBits,
        h = d.GetFilterData().categoryBits,
        i = e.parent,
        j = f.parent;
    if (void 0 !== i && void 0 !== j) {
        var k = i.id,
            l = j.id;
        i._bodyPostsolveCallbacks[l] && i._bodyPostsolveCallbacks[l].call(i._bodyPostsolveCallbackContext[l], i, j, c, d, a, b), j._bodyPostsolveCallbacks[k] && j._bodyPostsolveCallbacks[k].call(j._bodyPostsolveCallbackContext[k], j, i, d, c, a, b), i._fixturePostsolveCallbacks[d.id] && i._fixturePostsolveCallbacks[d.id].call(i._fixturePostsolveCallbackContext[d.id], i, j, c, d, a, b), j._fixturePostsolveCallbacks[c.id] && j._fixturePostsolveCallbacks[c.id].call(j._fixturePostsolveCallbackContext[c.id], j, i, d, c, a, b), i._categoryPostsolveCallbacks[h] && i._categoryPostsolveCallbacks[h].call(i._categoryPostsolveCallbackContext[h], i, j, c, d, a, b), j._categoryPostsolveCallbacks[g] && j._categoryPostsolveCallbacks[g].call(j._categoryPostsolveCallbackContext[g], j, i, d, c, a, b)
    }
}, Phaser.Physics.Box2D.Polygon = function() {
    this.vertices = []
}, Phaser.Physics.Box2D.Polygon.prototype.setFromFlatXYCoords = function(a) {
    this.vertices = [];
    for (var b = 0; b < a.length / 2; b++) this.vertices.push({
        x: a[2 * b],
        y: a[2 * b + 1]
    })
}, Phaser.Physics.Box2D.Polygon.prototype.setFromXYObjects = function(a) {
    this.vertices = a.concat()
}, Phaser.Physics.Box2D.Polygon.prototype.addVertex = function(a) {
    this.vertices.push(a)
}, Phaser.Physics.Box2D.Polygon.prototype.at = function(a) {
    var b = this.vertices.length;
    return this.vertices[0 > a ? a % b + b : a % b]
}, Phaser.Physics.Box2D.Polygon.prototype.indicesAreAdjacent = function(a, b) {
    if (a %= this.vertices.length, b %= this.vertices.length, a == b) return !0;
    var c = Math.abs(a - b);
    return 2 > c ? !0 : c == this.vertices.length - 1 ? !0 : !1
}, Phaser.Physics.Box2D.Polygon.prototype.areaInTriangle = function(a, b, c) {
    return a = this.at(a), b = this.at(b), c = this.at(c), .5 * ((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y))
}, Phaser.Physics.Box2D.Polygon.prototype.left = function(a, b, c) {
    return this.areaInTriangle(a, b, c) > 0
}, Phaser.Physics.Box2D.Polygon.prototype.leftOn = function(a, b, c) {
    return this.areaInTriangle(a, b, c) >= 0
}, Phaser.Physics.Box2D.Polygon.prototype.right = function(a, b, c) {
    return this.areaInTriangle(a, b, c) < 0
}, Phaser.Physics.Box2D.Polygon.prototype.rightOn = function(a, b, c) {
    return this.areaInTriangle(a, b, c) <= 0
}, Phaser.Physics.Box2D.Polygon.sqdist = function(a, b) {
    var c = b.x - a.x,
        d = b.y - a.y;
    return c * c + d * d
}, Phaser.Physics.Box2D.Polygon.prototype.makeCCW = function() {
    for (var a = 0, b = 1, c = this.vertices.length; c > b; b++)(this.at(b).y < this.at(a).y || this.at(b).y === this.at(a).y && this.at(b).x > this.at(a).x) && (a = b);
    return this.left(a - 1, a, a + 1) ? !1 : (this.vertices.reverse(), !0)
}, Phaser.Physics.Box2D.Polygon.prototype.isConvex = function() {
    for (var a = !1, b = !1, c = 0, d = this.vertices.length; d > c; c++) {
        var e = c,
            f = (c + 1) % d,
            g = (c + 2) % d;
        this.areaInTriangle(this.vertices[e], this.vertices[f], this.vertices[g]) > 0 ? a = !0 : b = !0
    }
    return b ^ a
}, Phaser.Physics.Box2D.Polygon.prototype.isReflex = function(a) {
    return this.right(a - 1, a, a + 1)
}, Phaser.Physics.Box2D.Polygon.areVecsEqual = function(a, b) {
    return a.x == b.x && a.y == b.y
}, Phaser.Physics.Box2D.Polygon.linesCross = function(a, b, c, d) {
    if (Phaser.Physics.Box2D.Polygon.areVecsEqual(b, c) || Phaser.Physics.Box2D.Polygon.areVecsEqual(a, c) || Phaser.Physics.Box2D.Polygon.areVecsEqual(b, d) || Phaser.Physics.Box2D.Polygon.areVecsEqual(a, d)) return null;
    var e = {};
    box2d.b2SubVV(b, a, e), box2d.b2CrossVS(e, 1, e);
    var f = box2d.b2DotVV(e, a),
        g = box2d.b2DotVV(e, c),
        h = box2d.b2DotVV(e, d);
    if (g > f && h > f) return null;
    if (f > g && f > h) return null;
    var i = {};
    box2d.b2SubVV(d, c, i), box2d.b2CrossVS(i, 1, i);
    var g = box2d.b2DotVV(i, c),
        f = box2d.b2DotVV(i, a),
        j = box2d.b2DotVV(i, b);
    if (f > g && j > g) return null;
    if (g > f && g > j) return null;
    var k = (g - f) / (j - f),
        l = {
            x: a.x + k * (b.x - a.x),
            y: a.y + k * (b.y - a.y)
        };
    return l
}, Phaser.Physics.Box2D.Polygon.prototype.canSee = function(a, b) {
    if (this.indicesAreAdjacent(a, b)) return !1;
    if (this.leftOn(a + 1, a, b) && this.rightOn(a - 1, a, b)) return !1;
    for (var c = 0; c < this.vertices.length; ++c)
        if ((c + 1) % this.vertices.length != a && c != a && this.leftOn(a, b, c + 1) && this.rightOn(a, b, c) && Phaser.Physics.Box2D.Polygon.linesCross(this.at(a), this.at(b), this.at(c), this.at(c + 1))) return !1;
    return !0
}, Phaser.Physics.Box2D.Polygon.prototype.subPolygon = function(a, b) {
    var c = new Phaser.Physics.Box2D.Polygon;
    if (b > a)
        for (var d = a; b + 1 > d; d++) c.addVertex(this.at(d));
    else {
        for (var d = a; d < this.vertices.length; d++) c.addVertex(this.at(d));
        for (var d = 0; b + 1 > d; d++) c.addVertex(this.at(d))
    }
    return c
}, Phaser.Physics.Box2D.Polygon.prototype.decomposeOptimal = function(a) {
    if ("undefined" == typeof a && (a = 0), a > 1) return this.vertices;
    this.makeCCW();
    for (var b = [], c = [], d = [], e = Number.MAX_VALUE, f = 0; f < this.vertices.length; f++)
        if (this.isReflex(f))
            for (var g = 0; g < this.vertices.length; g++) this.canSee(f, g) && (c = this.subPolygon(f, g).decompose(a + 1), d = this.subPolygon(g, f).decompose(a + 1), c.length + d.length < e && (b = c.concat(d), e = b.length));
    return 0 === b.length && b.push(this.vertices), b
}, Phaser.Physics.Box2D.Polygon.prototype.decompose = function(a) {
    "undefined" == typeof a && (a = 0), this.makeCCW();
    for (var b, c, d = [], e = Number.MAX_VALUE, f = !1, g = 0; g < this.vertices.length; g++)
        if (this.isReflex(g)) {
            f = !0;
            for (var h = this.at(g), i = 0; i < this.vertices.length; i++)
                if (this.canSee(g, i)) {
                    var j = this.at(i),
                        k = j.x - h.x,
                        l = j.y - h.y,
                        m = k * k * l * l;
                    e > m && (b = g, c = i, e = m)
                }
        }
    if (!f && this.vertices.length > 8 && (b = 0, c = Math.floor(this.vertices.length / 2), f = !0), f) {
        var n = this.subPolygon(b, c).decompose(a + 1),
            o = this.subPolygon(c, b).decompose(a + 1);
        d = n.concat(o)
    }
    return 0 === d.length && d.push(this.vertices), d
};