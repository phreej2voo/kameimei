!function(e) {
    function t(o) {
        if (i[o])
            return i[o].exports;
        var s = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, t),
        s.l = !0,
        s.exports
    }
    var i = {};
    t.m = e,
    t.c = i,
    t.d = function(e, i, o) {
        t.o(e, i) || Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(i, "a", i),
        i
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "//m.daxitie.com/",
    t(t.s = 88)
}([function(e, t) {
    e.exports = function(e, t, i, o, s, n) {
        var a, r = e = e || {}, c = typeof e.default;
        "object" !== c && "function" !== c || (a = e,
        r = e.default);
        var l = "function" == typeof r ? r.options : r;
        t && (l.render = t.render,
        l.staticRenderFns = t.staticRenderFns,
        l._compiled = !0),
        i && (l.functional = !0),
        s && (l._scopeId = s);
        var u;
        if (n ? (u = function(e) {
            e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
            e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
            o && o.call(this, e),
            e && e._registeredComponents && e._registeredComponents.add(n)
        }
        ,
        l._ssrRegister = u) : o && (u = o),
        u) {
            var d = l.functional
              , h = d ? l.render : l.beforeCreate;
            d ? (l._injectStyles = u,
            l.render = function(e, t) {
                return u.call(t),
                h(e, t)
            }
            ) : l.beforeCreate = h ? [].concat(h, u) : [u]
        }
        return {
            esModule: a,
            exports: r,
            options: l
        }
    }
}
, function(e, t) {
    function i(e, t) {
        var i = e[1] || ""
          , s = e[3];
        if (!s)
            return i;
        if (t && "function" == typeof btoa) {
            var n = o(s);
            return [i].concat(s.sources.map(function(e) {
                return "/*# sourceURL=" + s.sourceRoot + e + " */"
            })).concat([n]).join("\n")
        }
        return [i].join("\n")
    }
    function o(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var o = i(t, e);
                return t[2] ? "@media " + t[2] + "{" + o + "}" : o
            }).join("")
        }
        ,
        t.i = function(e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var o = {}, s = 0; s < this.length; s++) {
                var n = this[s][0];
                "number" == typeof n && (o[n] = !0)
            }
            for (s = 0; s < e.length; s++) {
                var a = e[s];
                "number" == typeof a[0] && o[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"),
                t.push(a))
            }
        }
        ,
        t
    }
}
, function(e, t, i) {
    function o(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t]
              , o = u[i.id];
            if (o) {
                o.refs++;
                for (var s = 0; s < o.parts.length; s++)
                    o.parts[s](i.parts[s]);
                for (; s < i.parts.length; s++)
                    o.parts.push(n(i.parts[s]));
                o.parts.length > i.parts.length && (o.parts.length = i.parts.length)
            } else {
                for (var a = [], s = 0; s < i.parts.length; s++)
                    a.push(n(i.parts[s]));
                u[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function s() {
        var e = document.createElement("style");
        return e.type = "text/css",
        d.appendChild(e),
        e
    }
    function n(e) {
        var t, i, o = document.querySelector("style[" + g + '~="' + e.id + '"]');
        if (o) {
            if (f)
                return m;
            o.parentNode.removeChild(o)
        }
        if (y) {
            var n = p++;
            o = h || (h = s()),
            t = a.bind(null, o, n, !1),
            i = a.bind(null, o, n, !0)
        } else
            o = s(),
            t = r.bind(null, o),
            i = function() {
                o.parentNode.removeChild(o)
            }
            ;
        return t(e),
        function(o) {
            if (o) {
                if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap)
                    return;
                t(e = o)
            } else
                i()
        }
    }
    function a(e, t, i, o) {
        var s = i ? "" : o.css;
        if (e.styleSheet)
            e.styleSheet.cssText = b(t, s);
        else {
            var n = document.createTextNode(s)
              , a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(n, a[t]) : e.appendChild(n)
        }
    }
    function r(e, t) {
        var i = t.css
          , o = t.media
          , s = t.sourceMap;
        if (o && e.setAttribute("media", o),
        v.ssrId && e.setAttribute(ssridKey, t.id),
        s && (i += "\n/*# sourceURL=" + s.sources[0] + " */",
        i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
        e.styleSheet)
            e.styleSheet.cssText = i;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i))
        }
    }
    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var l = i(95)
      , u = {}
      , d = c && (document.head || document.getElementsByTagName("head")[0])
      , h = null
      , p = 0
      , f = !1
      , m = function() {}
      , v = null
      , g = "data-vue-ssr-id"
      , y = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function(e, t, i, s) {
        f = i,
        v = s || {};
        var n = l(e, t);
        return o(n),
        function(t) {
            for (var i = [], s = 0; s < n.length; s++) {
                var a = n[s]
                  , r = u[a.id];
                r.refs--,
                i.push(r)
            }
            t ? (n = l(e, t),
            o(n)) : n = [];
            for (var s = 0; s < i.length; s++) {
                var r = i[s];
                if (0 === r.refs) {
                    for (var c = 0; c < r.parts.length; c++)
                        r.parts[c]();
                    delete u[r.id]
                }
            }
        }
    }
    ;
    var b = function() {
        var e = [];
        return function(t, i) {
            return e[t] = i,
            e.filter(Boolean).join("\n")
        }
    }()
}
, function(e, t, i) {
    "use strict";
    i.d(t, "c", function() {
        return o
    }),
    i.d(t, "a", function() {
        return s
    }),
    i.d(t, "d", function() {
        return n
    });
    var o = {
        image: 1,
        music: 2,
        sound: 4,
        font: 5,
        shape: 6
    }
      , s = {
        image: 1,
        scene: 2,
        music: 3,
        font: 4,
        sound: 5,
        page: 6,
        printTpl: 7,
        shape: 8
    }
      , n = {
        all: 1,
        recently: 2,
        upload: 4,
        buy: 8,
        love: 16
    };
    t.b = {
        fileType: o,
        attrGroupId: s,
        headTab: n
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++)
                i[t] = e[t];
            return i
        }
        return Array.from(e)
    }
    function s(e) {
        return h[e] || (h[e] = {
            isBusy: !1,
            pageNo: 1,
            pageSize: 30,
            count: -1,
            list: []
        }),
        h[e]
    }
    function n(e, t) {
        var i = s(e);
        t = Object.assign({
            pageNo: i.pageNo,
            pageSize: i.pageSize
        }, JSON.parse(e), t);
        var n = null;
        switch ((i.isBusy || i.list.length === i.count) && (t.tab = "reject"),
        i.isBusy = !0,
        t.tab) {
        case "all":
            n = d.a.api.product.getMyFonts(t);
            break;
        case "buyFont":
            n = d.a.api.product.getBuyFonts(t);
            break;
        case "buy":
            n = d.a.api.product.getBuyFiles(t);
            break;
        case "upload":
            n = d.a.api.file.getUploadFiles(t);
            break;
        case "love":
            n = d.a.api.favorite.getFavorites(t);
            break;
        case "sys":
            n = d.a.api.product.getProducts(t);
            break;
        default:
            n = Promise.reject()
        }
        return n.then(function(e) {
            i.isBusy = !1,
            i.count = e.data.map.count,
            i.pageNo++;
            var t = e.data;
            if (t.obj && t.list.forEach(function(e) {
                return e.cropInfo = t.obj[e.id]
            }),
            i.list.length)
                t.list.forEach(function(e) {
                    a(i.list, e) || i.list.push(e)
                });
            else {
                var s;
                (s = i.list).push.apply(s, o(t.list))
            }
        }).catch(function(e) {
            return i.isBusy = !1,
            Promise.reject(e)
        })
    }
    function a(e, t) {
        for (var i = 0; i < e.length; i++)
            if (e[i].id === t.id)
                return !0;
        return !1
    }
    function r(e) {
        return JSON.stringify(l(e))
    }
    function c(e) {
        delete h[r(e)]
    }
    function l(e) {
        var t = {}
          , i = [];
        for (var o in e)
            i.push(o);
        return i.sort().forEach(function(i) {
            t[i] = e[i]
        }),
        t
    }
    var u = i(5)
      , d = i.n(u)
      , h = {};
    t.a = {
        getInfo: s,
        getMoreItems: n,
        setKey: r,
        clearKey: c
    }
}
, function(e, t) {
    e.exports = Vue
}
, function(e, t) {
    e.exports = axios
}
, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return s
    });
    var o = i(135)
      , s = o.host;
    o.mall;
    for (var n in s)
        s[n] = location.protocol + s[n];
    t.a = o
}
, function(e, t, i) {
    "use strict";
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        var i = a.a.getUser()
          , o = e + "-recently-" + i.id;
        return l[e] ? l[e] : (l[e] = new c(o,t),
        l[e])
    }
    var n = i(37)
      , a = (i(52),
    i(10))
      , r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, i, o) {
            return i && e(t.prototype, i),
            o && e(t, o),
            t
        }
    }()
      , c = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            o(this, e),
            this.name = t,
            this.max = i,
            this.list = n.a.getItem(this.name) || []
        }
        return r(e, [{
            key: "getList",
            value: function() {
                return this.list
            }
        }, {
            key: "addItems",
            value: function() {
                for (var e = this, t = arguments.length, i = Array(t), o = 0; o < t; o++)
                    i[o] = arguments[o];
                i.forEach(function(t) {
                    if (t && t.id) {
                        var i = Object.assign({}, t);
                        e.deleteItem(i),
                        e.list.unshift(i)
                    }
                }),
                this.updateList()
            }
        }, {
            key: "deleteItem",
            value: function(e) {
                if (e && e.id) {
                    var t = this.list.findIndex(function(t) {
                        return t.id === e.id
                    });
                    t > -1 && this.list.splice(t, 1),
                    this.updateList()
                }
            }
        }, {
            key: "updateList",
            value: function() {
                this.list.length >= this.max && (this.list.length = this.max),
                n.a.setItem(this.name, this.list)
            }
        }]),
        e
    }()
      , l = {};
    t.a = {
        get: s
    }
}
, function(e, t, i) {
    "use strict";
    function o() {
        for (var e, t = arguments.length, i = Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
        (e = console).error.apply(e, [r].concat(i))
    }
    function s() {
        for (var e, t = arguments.length, i = Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
        (e = console).debug.apply(e, [c].concat(i))
    }
    function n() {
        for (var e, t = arguments.length, i = Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
        (e = console).info.apply(e, [l].concat(i))
    }
    function a() {
        for (var e, t = arguments.length, i = Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
        (e = console).warn.apply(e, [u].concat(i))
    }
    var r = "[custom error]"
      , c = "[custom debug]"
      , l = "[custom info]"
      , u = "[custom warn]";
    t.a = {
        error: o,
        debug: s,
        info: n,
        warn: a
    }
}
, function(e, t, i) {
    "use strict";
    function o() {
        return new Promise(function(e, t) {
            var i = n();
            i.id ? e(i) : r.a.api.user.getUserInfo().then(function(t) {
                u = t.data.obj,
                e(t.data)
            }).catch(function(e) {
                return e && l.a.error(e)
            })
        }
        )
    }
    function s(e) {
        var t = n()
          , i = "";
        return i = t.memberType ? t.type + "0" + t.memberType : t.type,
        i = parseInt(i),
        c.a[e].indexOf(i) >= 0
    }
    function n() {
        return u
    }
    var a = i(5)
      , r = i.n(a)
      , c = (i(52),
    i(193))
      , l = i(9)
      , u = {};
    t.a = {
        auth: o,
        allow: s,
        getUser: n
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        e.source = "material";
        var t = window.parent
          , i = window.opener;
        t && t.postMessage(e, "*"),
        i && i.postMessage(e, "*")
    }
    function s() {
        o({
            type: "close"
        })
    }
    function n(e) {
        o({
            type: "success",
            data: e
        })
    }
    function a(e) {
        o({
            type: "fail",
            data: e
        })
    }
    t.a = {
        send: o,
        close: s,
        success: n,
        fail: a
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        IMAGE_SIDE_TAB: "IMAGE_SIDE_TAB",
        IMAGE_HEAD_TAB: "IMAGE_HEAD_TAB",
        IMAGE_PREVIEW: "IMAGE_PREVIEW",
        IMAGE_TAG: "IMAGE_TAG",
        IMAGE_TAG_MANAGE: "IMAGE_TAG_MANAGE",
        IMAGE_CATEGORY1: "IMAGE_CATEGORY1",
        IMAGE_CATEGORY2: "IMAGE_CATEGORY2",
        IMAGE_SEARCH: "IMAGE_SEARCH",
        IMAGE_SORT: "IMAGE_SORT",
        IMAGE_PRICE: "IMAGE_PRICE",
        IMAGE_M_UPLOAD: "IMAGE_M_UPLOAD",
        BACKGROUND_SIDE_TAB: "BACKGROUND_SIDE_TAB",
        BACKGROUND_HEAD_TAB: "BACKGROUND_HEAD_TAB",
        BACKGROUND_PREVIEW: "BACKGROUND_PREVIEW",
        BACKGROUND_TAG: "BACKGROUND_TAG",
        BACKGROUND_TAG_MANAGE: "BACKGROUND_TAG_MANAGE",
        BACKGROUND_CATEGORY1: "BACKGROUND_CATEGORY1",
        BACKGROUND_CATEGORY2: "BACKGROUND_CATEGORY2",
        BACKGROUND_SEARCH: "BACKGROUND_SEARCH",
        BACKGROUND_SORT: "BACKGROUND_SORT",
        BACKGROUND_PRICE: "BACKGROUND_PRICE",
        SHAPE_SIDE_TAB: "SHAPE_SIDE_TAB",
        SHAPE_HEAD_TAB: "SHAPE_HEAD_TAB",
        SHAPE_PREVIEW: "SHAPE_PREVIEW",
        SHAPE_TAG: "SHAPE_TAG",
        SHAPE_TAG_MANAGE: "SHAPE_TAG_MANAGE",
        SHAPE_CATEGORY1: "SHAPE_CATEGORY1",
        SHAPE_CATEGORY2: "SHAPE_CATEGORY2",
        SHAPE_SEARCH: "SHAPE_SEARCH",
        SHAPE_SORT: "SHAPE_SORT",
        SHAPE_PRICE: "SHAPE_PRICE",
        MUSIC_SIDE_TAB: "MUSIC_SIDE_TAB",
        MUSIC_HEAD_TAB: "MUSIC_HEAD_TAB",
        MUSIC_SELECTED: "MUSIC_SELECTED",
        MUSIC_DEFAULT: "MUSIC_DEFAULT",
        MUSIC_CATEGORY1: "MUSIC_CATEGORY1",
        MUSIC_CATEGORY2: "MUSIC_CATEGORY2",
        MUSIC_SEARCH: "MUSIC_SEARCH",
        MUSIC_SORT: "MUSIC_SORT",
        MUSIC_PRICE: "MUSIC_PRICE",
        MUSIC_PLAY: "MUSIC_PLAY",
        SOUND_SIDE_TAB: "SOUND_SIDE_TAB",
        SOUND_HEAD_TAB: "SOUND_HEAD_TAB",
        SOUND_SELECTED: "SOUND_SELECTED",
        SOUND_DEFAULT: "SOUND_DEFAULT",
        SOUND_CATEGORY1: "SOUND_CATEGORY1",
        SOUND_CATEGORY2: "SOUND_CATEGORY2",
        SOUND_SEARCH: "SOUND_SEARCH",
        SOUND_SORT: "SOUND_SORT",
        SOUND_PRICE: "SOUND_PRICE",
        FONT_SIDE_TAB: "FONT_SIDE_TAB",
        FONT_HEAD_TAB: "FONT_HEAD_TAB",
        FONT_PREVIEW_TEXT: "FONT_PREVIEW_TEXT",
        FONT_SELECTED: "FONT_SELECTED",
        FONT_CATEGORY1: "FONT_CATEGORY1",
        FONT_CATEGORY2: "FONT_CATEGORY2",
        FONT_SEARCH: "FONT_SEARCH",
        FONT_SORT: "FONT_SORT",
        FONT_PRICE: "FONT_PRICE",
        COMMON_UPLOADER: "COMMON_UPLOADER"
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(136)
      , s = i(137)
      , n = i(36);
    e.exports = {
        formats: n,
        parse: s,
        stringify: o
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        var t = e.method
          , i = e.url
          , o = e.params;
        if ("GET" !== t)
            return u.a.warn("api cache does not support " + t),
            r()(e);
        var n = p + i;
        o && (n += n.indexOf("?") > -1 ? "&" : "?" + l.a.stringify(o));
        var a = d.a.getItem(n);
        if (a && a.value && a.expires) {
            return Date.now() > a.expires ? s(e, n) : Promise.resolve(a.value)
        }
        return s(e, n)
    }
    function s(e, t) {
        return r()(e).then(function(e) {
            return d.a.setItem(t, {
                expires: Date.now() + h,
                value: e
            }),
            e
        }, function(e) {
            return d.a.removeItem(t),
            Promise.reject(e)
        })
    }
    function n() {
        for (var e in window.localStorage)
            if (window.localStorage.hasOwnProperty(e) && 0 === e.indexOf(p)) {
                var t = d.a.getItem(e);
                Date.now() > t.expires && d.a.removeItem(e)
            }
    }
    i.d(t, "a", function() {
        return o
    }),
    i.d(t, "b", function() {
        return n
    });
    var a = i(6)
      , r = i.n(a)
      , c = i(13)
      , l = i.n(c)
      , u = i(9)
      , d = i(37)
      , h = 36e5
      , p = "API-MATERIAL-"
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(166)
    }
    var s = i(41)
      , n = i(168)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(177)
    }
    var s = i(45)
      , n = i(179)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(186)
    }
    var s = i(49)
      , n = i(189)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(197)
    }
    var s = i(54)
      , n = i(203)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t) {
    e.exports = function(e) {
        return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
        /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(125)
    }
    var s = i(127)
      , n = i(0)
      , a = o
      , r = n(null, s.a, !1, a, null, null);
    t.a = r.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        var t = 0;
        if (!e)
            return 0;
        for (var i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            o >= 1 && o <= 126 || o >= 65376 && o <= 65439 ? t++ : t += 2
        }
        return t
    }
    t.a = {
        getUnicodeLength: o
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(173)
    }
    var s = i(43)
      , n = i(175)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(226)
    }
    var s = i(64)
      , n = i(228)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            data: Object,
            params: Object
        },
        data: function() {
            return {
                dialog: "cDialog",
                value: null
            }
        },
        methods: {
            close: function(e) {
                var t = this
                  , i = this.$el;
                i.addEventListener("animationend", function() {
                    document.body.removeChild(i),
                    t.$destroy()
                }),
                i.className = "eqc-dialog-base close",
                e && (this.value = e)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            data: Object,
            close: Function
        },
        data: function() {
            return {
                url: this.env.host.pay + "/pay/purchaseConfirm?t=" + Date.now(),
                style: {
                    height: "420px"
                }
            }
        },
        methods: {
            onMessage: function(e) {
                if ("string" != typeof e.data)
                    return void this.logger.warn("postMessage's e.data is not string of pay");
                try {
                    var t = JSON.parse(e.data);
                    "done" === t.msgType ? this.$el.contentWindow.postMessage(this.data, "*") : "resize" === t.msgType ? this.style.height = t.iframeHeight + "px" : "close" === t.msgType ? this.close() : this.close(t)
                } catch (e) {
                    this.logger.error(e)
                }
            }
        },
        created: function() {
            window.addEventListener("message", this.onMessage)
        },
        destroyed: function() {
            window.removeEventListener("message", this.onMessage)
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            close: Function
        },
        data: function() {
            return {
                url: this.env.host.client + "/auth/login?t=" + Date.now()
            }
        },
        methods: {
            onMessage: function(e) {
                if ("string" == typeof e.data)
                    try {
                        var t = JSON.parse(e.data);
                        "close" === t.type ? this.close() : this.close(t)
                    } catch (e) {
                        this.logger.error(e)
                    }
            }
        },
        created: function() {
            window.addEventListener("message", this.onMessage)
        },
        destroyed: function() {
            window.removeEventListener("message", this.onMessage)
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            data: Object,
            close: Function
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            data: Object,
            close: Function
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(30);
    t.a = {
        components: {
            UiLoading: o.a
        },
        props: {
            data: Object,
            close: Function
        },
        data: function() {
            return {
                startTime: 0,
                endTime: 90,
                currentTime: 0,
                totalTime: 0,
                margin: 16,
                shortLineArr: [],
                distancePerShortLine: 0,
                isPlayed: !1,
                barLeftStyle: {
                    left: 0
                },
                barRightStyle: {
                    left: 0
                },
                barCurrentStyle: {
                    left: 0
                },
                barRangeStyle: {
                    left: 0,
                    width: 0
                },
                maxTimeLine: 904,
                shortLine: 6,
                longLine: 5,
                distancePerSecond: 0,
                isDraggingCurrentBar: !1,
                isLoading: !1
            }
        },
        computed: {
            audio: function() {
                return new Audio
            },
            deferAudio: function() {
                return Defer()
            }
        },
        mounted: function() {
            var e = this
              , t = this.api.audio.getCropInfo(this.data.id).then(function(t) {
                var i = t.data.obj;
                i && (e.audio.currentTime = e.currentTime = e.startTime = i.start,
                e.endTime = i.start + i.duration)
            }).catch(function(t) {
                return t && e.logger.error(t)
            });
            this.audio.addEventListener("loadedmetadata", this.loadedmetadata),
            this.audio.addEventListener("timeupdate", this.timeupdate),
            this.audio.addEventListener("error", this.error),
            this.audio.src = this.env.host.file + this.data.path,
            Promise.all([t, this.deferAudio.promise]).then(function() {
                e.initTimeLine()
            })
        },
        destroyed: function() {
            this.audio.pause(),
            this.audio.removeEventListener("loadedmetadata", this.loadedmetadata),
            this.audio.removeEventListener("timeupdate", this.timeupdate),
            this.audio.removeEventListener("error", this.error)
        },
        methods: {
            loadedmetadata: function() {
                this.totalTime = this.audio.duration,
                this.endTime > this.totalTime && (this.endTime = this.totalTime),
                this.totalTime <= 70 && (this.shortLine = 1),
                this.deferAudio.resolve()
            },
            timeupdate: function() {
                var e = 0;
                this.isDraggingCurrentBar || (this.currentTime = this.audio.currentTime,
                e = this.currentTime * this.distancePerSecond + this.margin,
                this.barCurrentStyle.left = e + "px"),
                (this.audio.currentTime >= this.endTime || this.audio.currentTime === this.audio.duration) && (this.pause(),
                e = this.endTime * this.distancePerSecond + this.margin,
                this.barCurrentStyle.left = e + "px")
            },
            error: function(e) {
                var t = e.target.error;
                switch (t.code) {
                case t.MEDIA_ERR_ABORTED:
                    this.logger.error("You aborted the video playback.");
                    break;
                case t.MEDIA_ERR_NETWORK:
                    this.logger.error("A network error caused the video download to fail part-way.");
                    break;
                case t.MEDIA_ERR_DECODE:
                    this.logger.error("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
                    break;
                case t.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.logger.error("The video could not be loaded, either because the server or network failed or because the format is not supported.");
                    break;
                default:
                    this.logger.error("An unknown error occurred.")
                }
                this.notifier.warn("音频加载失败"),
                this.close()
            },
            initTimeLine: function() {
                var e = this.totalTime / this.shortLine;
                this.distancePerSecond = (this.maxTimeLine - 2 * this.margin) / this.totalTime,
                this.distancePerShortLine = (this.maxTimeLine - 2 * this.margin) / e,
                e = Math.ceil(this.totalTime / this.shortLine);
                for (var t = 0; t < e; t++)
                    this.shortLineArr.push({
                        time: t * this.shortLine,
                        isLong: t % this.longLine == 0
                    });
                var i = this.margin + this.startTime * this.distancePerSecond
                  , o = this.margin + this.endTime * this.distancePerSecond;
                this.barLeftStyle.left = i + "px",
                this.barRightStyle.left = o + "px",
                this.barCurrentStyle.left = i + "px",
                this.barRangeStyle.left = i + "px",
                this.barRangeStyle.width = o - i + "px"
            },
            barLeftMove: function(e) {
                var t = this
                  , i = this.startTime * this.distancePerSecond + this.margin
                  , o = this.endTime * this.distancePerSecond + this.margin
                  , s = this.currentTime * this.distancePerSecond + this.margin
                  , n = 0
                  , a = 0
                  , r = e.clientX;
                this.$el.style.cursor = "ew-resize";
                var c = function(e) {
                    a = e.clientX - r,
                    n = i + a,
                    n <= t.margin && (n = t.margin),
                    n >= o ? (n = o,
                    t.barLeftStyle.zIndex = 1) : t.barLeftStyle.zIndex = "",
                    n >= s && (s = n,
                    t.currentTime = (n - t.margin) / t.distancePerSecond,
                    t.pause(),
                    t.audio.currentTime = t.currentTime,
                    t.barCurrentStyle.left = s + "px"),
                    t.barLeftStyle.left = n + "px",
                    t.barRangeStyle.left = n + "px",
                    t.barRangeStyle.width = o - n + "px",
                    t.startTime = (n - t.margin) / t.distancePerSecond
                }
                  , l = function e() {
                    t.$el.style.cursor = "",
                    document.removeEventListener("mousemove", c),
                    document.removeEventListener("mouseup", e)
                };
                document.addEventListener("mousemove", c),
                document.addEventListener("mouseup", l)
            },
            barRightMove: function(e) {
                var t = this
                  , i = this.startTime * this.distancePerSecond + this.margin
                  , o = this.endTime * this.distancePerSecond + this.margin
                  , s = this.currentTime * this.distancePerSecond + this.margin
                  , n = 0
                  , a = 0
                  , r = e.clientX
                  , c = this.maxTimeLine - this.margin;
                this.$el.style.cursor = "ew-resize";
                var l = function(e) {
                    a = e.clientX - r,
                    n = o + a,
                    n <= i && (n = i),
                    n >= c && (n = c),
                    n <= s && (s = n,
                    t.currentTime = (n - t.margin) / t.distancePerSecond,
                    t.pause(),
                    t.audio.currentTime = t.currentTime,
                    t.barCurrentStyle.left = s + "px"),
                    t.barRightStyle.left = n + "px",
                    t.barRangeStyle.left = i + "px",
                    t.barRangeStyle.width = n - i + "px",
                    t.endTime = (n - t.margin) / t.distancePerSecond
                }
                  , u = function e() {
                    t.$el.style.cursor = "",
                    document.removeEventListener("mousemove", l),
                    document.removeEventListener("mouseup", e)
                };
                document.addEventListener("mousemove", l),
                document.addEventListener("mouseup", u)
            },
            barCurrentMove: function(e) {
                var t = this
                  , i = this.startTime * this.distancePerSecond + this.margin
                  , o = this.endTime * this.distancePerSecond + this.margin
                  , s = this.currentTime * this.distancePerSecond + this.margin
                  , n = 0
                  , a = 0
                  , r = e.clientX;
                this.isDraggingCurrentBar = !0,
                this.$el.style.cursor = "ew-resize";
                var c = function(e) {
                    a = e.clientX - r,
                    n = s + a,
                    n <= i && (n = i),
                    n >= o && (n = o),
                    t.barCurrentStyle.left = n + "px",
                    t.currentTime = (n - t.margin) / t.distancePerSecond
                }
                  , l = function e() {
                    t.$el.style.cursor = "",
                    t.isDraggingCurrentBar = !1,
                    t.audio.currentTime = t.currentTime,
                    t.audio.currentTime >= t.audio.duration && t.pause(),
                    document.removeEventListener("mousemove", c),
                    document.removeEventListener("mouseup", e)
                };
                document.addEventListener("mousemove", c),
                document.addEventListener("mouseup", l)
            },
            play: function() {
                this.isPlayed = !0,
                this.audio.play()
            },
            pause: function() {
                this.isPlayed = !1,
                this.audio.pause()
            },
            ok: function() {
                var e = this
                  , t = Math.round(this.startTime)
                  , i = Math.round(this.endTime - this.startTime);
                if (i <= 0)
                    return void this.notifier.warn("裁切长度不能为0");
                this.isLoading = !0,
                this.api.audio.crop(this.data.path, t, i).then(function(t) {
                    return e.api.audio.pollingStatus(t.data.obj)
                }).then(function(o) {
                    e.isLoading = !1;
                    var s = {
                        cropPath: o,
                        startTime: t,
                        duration: i
                    };
                    e.close(s)
                }).catch(function(t) {
                    e.isLoading = !1,
                    t && e.logger.error(t)
                })
            },
            cancel: function() {
                this.close()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(118)
    }
    var s = i(31)
      , n = i(122)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            msg: {
                type: String,
                default: "加载中…"
            },
            theme: {
                type: String,
                default: "dark"
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(20);
    t.a = {
        props: {
            close: Function
        },
        components: {
            DialogAgreement: o.a
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(20);
    t.a = {
        props: {
            close: Function
        },
        components: {
            DialogAgreement: o.a
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(20);
    t.a = {
        props: {
            close: Function
        },
        components: {
            DialogAgreement: o.a
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = Object.prototype.hasOwnProperty
      , s = function() {
        for (var e = [], t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e
    }()
      , n = function(e) {
        for (var t; e.length; ) {
            var i = e.pop();
            if (t = i.obj[i.prop],
            Array.isArray(t)) {
                for (var o = [], s = 0; s < t.length; ++s)
                    void 0 !== t[s] && o.push(t[s]);
                i.obj[i.prop] = o
            }
        }
        return t
    };
    t.arrayToObject = function(e, t) {
        for (var i = t && t.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o)
            void 0 !== e[o] && (i[o] = e[o]);
        return i
    }
    ,
    t.merge = function(e, i, s) {
        if (!i)
            return e;
        if ("object" != typeof i) {
            if (Array.isArray(e))
                e.push(i);
            else {
                if ("object" != typeof e)
                    return [e, i];
                (s.plainObjects || s.allowPrototypes || !o.call(Object.prototype, i)) && (e[i] = !0)
            }
            return e
        }
        if ("object" != typeof e)
            return [e].concat(i);
        var n = e;
        return Array.isArray(e) && !Array.isArray(i) && (n = t.arrayToObject(e, s)),
        Array.isArray(e) && Array.isArray(i) ? (i.forEach(function(i, n) {
            o.call(e, n) ? e[n] && "object" == typeof e[n] ? e[n] = t.merge(e[n], i, s) : e.push(i) : e[n] = i
        }),
        e) : Object.keys(i).reduce(function(e, n) {
            var a = i[n];
            return o.call(e, n) ? e[n] = t.merge(e[n], a, s) : e[n] = a,
            e
        }, n)
    }
    ,
    t.assign = function(e, t) {
        return Object.keys(t).reduce(function(e, i) {
            return e[i] = t[i],
            e
        }, e)
    }
    ,
    t.decode = function(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch (t) {
            return e
        }
    }
    ,
    t.encode = function(e) {
        if (0 === e.length)
            return e;
        for (var t = "string" == typeof e ? e : String(e), i = "", o = 0; o < t.length; ++o) {
            var n = t.charCodeAt(o);
            45 === n || 46 === n || 95 === n || 126 === n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? i += t.charAt(o) : n < 128 ? i += s[n] : n < 2048 ? i += s[192 | n >> 6] + s[128 | 63 & n] : n < 55296 || n >= 57344 ? i += s[224 | n >> 12] + s[128 | n >> 6 & 63] + s[128 | 63 & n] : (o += 1,
            n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(o)),
            i += s[240 | n >> 18] + s[128 | n >> 12 & 63] + s[128 | n >> 6 & 63] + s[128 | 63 & n])
        }
        return i
    }
    ,
    t.compact = function(e) {
        for (var t = [{
            obj: {
                o: e
            },
            prop: "o"
        }], i = [], o = 0; o < t.length; ++o)
            for (var s = t[o], a = s.obj[s.prop], r = Object.keys(a), c = 0; c < r.length; ++c) {
                var l = r[c]
                  , u = a[l];
                "object" == typeof u && null !== u && -1 === i.indexOf(u) && (t.push({
                    obj: a,
                    prop: l
                }),
                i.push(u))
            }
        return n(t)
    }
    ,
    t.isRegExp = function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }
    ,
    t.isBuffer = function(e) {
        return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    }
}
, function(e, t, i) {
    "use strict";
    var o = String.prototype.replace
      , s = /%20/g;
    e.exports = {
        default: "RFC3986",
        formatters: {
            RFC1738: function(e) {
                return o.call(e, s, "+")
            },
            RFC3986: function(e) {
                return e
            }
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t) {
        localStorage.setItem(e, JSON.stringify(t))
    }
    function s(e) {
        var t = localStorage.getItem(e);
        try {
            return JSON.parse(t)
        } catch (e) {
            return a.a.error(e),
            t
        }
    }
    function n(e) {
        localStorage.removeItem(e)
    }
    var a = i(9);
    t.a = {
        setItem: o,
        getItem: s,
        removeItem: n
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            type: String,
            msg: String
        },
        computed: {
            iconClass: function() {
                switch (this.type) {
                case "success":
                    return "eqf-info-f";
                case "fail":
                    return "eqf-no-f";
                case "info":
                    return "eqf-info-f";
                case "warn":
                    return "eqf-alert-f"
                }
            }
        },
        mounted: function() {
            var e = this;
            setTimeout(function() {
                return e.close()
            }, 2e3)
        },
        methods: {
            close: function() {
                var e = this
                  , t = this.$el;
                t.addEventListener("animationend", function() {
                    document.body.removeChild(t),
                    e.$destroy()
                }),
                t.className = this.type + " eqc-notifier close"
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i, o) {
        return new Promise(function(s, n) {
            var a = null
              , r = null
              , c = null
              , l = 0;
            if (t || (t = e.substr(e.lastIndexOf(".") + 1)),
            "js" === t) {
                var u = document.getElementsByTagName("script");
                for (l = 0; l < u.length; l++)
                    (u[l].src && -1 != u[l].src.indexOf(e) || u[l].title == i) && (r = u[l],
                    s(u[l]));
                r || (a = document.createElement("script"),
                a.type = "text/javascript",
                a.src = e,
                o && o(a),
                i && (a.title = i))
            } else if ("css" === t) {
                var d = document.getElementsByTagName("link");
                for (l = 0; l < d.length; l++)
                    (d[l].href && -1 != d[l].href.indexOf(e) || d[l].title == i) && (c = d[l],
                    s(d[l]));
                c || (a = document.createElement("link"),
                a.rel = "stylesheet",
                a.type = "text/css",
                a.href = e,
                i && (a.title = i),
                a.disabled = !1)
            } else
                s(!1);
            if (a) {
                document.getElementsByTagName("head")[0].appendChild(a),
                a.onload = function() {
                    s(a)
                }
            }
        }
        )
    }
    t.a = {
        delayLoadJSAndCSS: o
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(15)
      , s = i(169)
      , n = i(22)
      , a = i(176)
      , r = i(196)
      , c = i(4)
      , l = i(10)
      , u = i(3);
    t.a = {
        components: {
            BaseNav: o.a,
            NavWord: s.a,
            NavUpload: n.a,
            MusicMy: a.a,
            MusicSys: r.a
        },
        data: function() {
            return {
                coupons: []
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            fileType: function() {
                return "music" === this.mutationName ? u.c.music : u.c.sound
            },
            attrGroupId: function() {
                return "music" === this.mutationName ? u.a.music : u.a.sound
            },
            sideTab: function() {
                return this.$store.state[this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state[this.mutationName].headTab
            },
            search: function() {
                return this.$store.state["" + this.mutationName].search
            },
            showWordToSound: function() {
                return l.a.allow("wordToSound")
            },
            showUploader: function() {
                return this.$store.state.common.uploader.show
            },
            uploadOptions: function() {
                return {
                    tokenType: "audio",
                    extensions: "mp3",
                    maxFileSize: 10,
                    maxCount: 10,
                    tip: "上传音乐",
                    fileType: this.fileType,
                    onComplete: this.onComplete,
                    warning: {
                        wType: ["上传须知", "卡美美为广大用户提供原创音乐上传渠道、信息储存空间、外部链接等网络技术服务，用户可在遵守", "《卡美美音乐版权许可与服务协议》", "的前提下自行上传并对其上传作品承担全部责任，请谨慎使用上传功能。", "通过本地电脑上传音乐，大小不超过3M，支持格式：MP3。"]
                    }
                }
            }
        },
        watch: {
            "$route.query": function() {
                this.init()
            }
        },
        created: function() {
            var e = this;
            this.init(),
            this.chooseSide(this.sideTab),
            this.api.banner.getBanners("pc_audio_coupon").then(function(t) {
                return e.coupons = t.data.list
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            init: function() {
                var e = this.$route.query
                  , t = {};
                e.id && (t = {
                    id: e.id,
                    name: e.name,
                    path: e.path
                }),
                this.$store.commit(this.mutationNameToUpperCase + "_DEFAULT", {
                    item: t
                }),
                this.$store.commit("COMMON_UPLOADER", {
                    show: !0
                }),
                this.search.show && this.$refs.sys.hideSearch()
            },
            chooseSide: function(e) {
                console.log(123)
                this.$store.commit(this.mutationNameToUpperCase + "_SIDE_TAB", {
                    tab: e
                })
            },
            onComplete: function() {
                var e = this
                  , t = "upload"
                  , i = {
                    fileType: this.fileType,
                    tab: t
                }
                  , o = c.a.setKey(i);
                c.a.clearKey(i),
                "sys" === this.sideTab ? (this.$store.commit(this.mutationNameToUpperCase + "_SIDE_TAB", {
                    tab: "my"
                }),
                this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: t
                })) : "upload" === this.headTab ? (this.$refs.my.info = c.a.getInfo(o),
                c.a.getMoreItems(o, {
                    attrGroupId: this.attrGroupId
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })) : this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: t
                })
            },
            openAgreement: function() {
                var e = this;
                this.dialog.openAgreement(u.c.music).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            isTop: Boolean,
            showAgreement: {
                type: Boolean,
                default: !0
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(30);
    t.a = {
        components: {
            UiLoading: o.a
        },
        props: {
            fileType: Number
        },
        data: function() {
            return {
                text: "",
                isShowWordBox: !1,
                isLoading: !1
            }
        },
        methods: {
            showWordBox: function() {
                this.text = "",
                this.isShowWordBox = !this.isShowWordBox,
                this.isLoading = !1,
                document.addEventListener("click", this.hide)
            },
            hide: function() {
                this.isShowWordBox = !1,
                document.removeEventListener("click", this.hide)
            },
            ok: function() {
                var e = this;
                if (!this.text.length)
                    return this.notifier.warn("请输入要转换的内容"),
                    void this.$refs.input.focus();
                this.isLoading = !0,
                this.api.file.wordToSound(this.text, this.fileType).then(function() {
                    e.isShowWordBox = !1,
                    e.notifier.success("转换成功"),
                    e.$emit("complete")
                }).catch(function(t) {
                    e.isLoading = !1,
                    t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    i(3);
    t.a = {
        props: {
            tokenType: String,
            extensions: String,
            tip: String,
            tagId: Number,
            maxFileSize: Number,
            maxCount: Number,
            fileType: Number,
            warning: Object,
            onComplete: Function
        },
        data: function() {
            return {
                uploadOptions: {
                    tokenType: this.tokenType,
                    extensions: this.extensions,
                    tip: this.tip,
                    tagId: 0,
                    maxFileSize: this.maxFileSize,
                    maxCount: this.maxCount,
                    uploadBtn: "upload_btn",
                    uploadCon: "upload_container",
                    onFilesAdded: this.onFilesAdded,
                    onBeforeUpload: this.onBeforeUpload,
                    onUploadProgress: this.onUploadProgress,
                    onFileUploaded: this.onFileUploaded,
                    onUploadComplete: this.onUploadComplete,
                    onError: this.onError,
                    warning: this.warning
                }
            }
        },
        methods: {
            onFilesAdded: function(e, t) {
                e.total.queued > 0 && (this.uploadOptions.tip = "上传中…",
                this.uploadOptions.tagId = this.tagId)
            },
            onBeforeUpload: function(e, t) {},
            onUploadProgress: function(e, t) {
                var i = this.$refs.progress.style;
                i.opacity = 1,
                i.width = e.total.percent + "%"
            },
            onFileUploaded: function(e, t, i) {
                var o = this
                  , s = JSON.parse(i)
                  , n = s.key
                  , a = s.name
                  , r = s.size
                  , c = {
                    path: n,
                    tmbPath: n,
                    name: a,
                    size: parseInt(r / 1024),
                    fileType: this.fileType,
                    bizType: 0,
                    tagId: this.uploadOptions.tagId || 0
                };
                this.api.file.uploadFile(c).then(function(e) {
                    // return o.notifier.success("上传成功: " + a)
                    // o.api.file.getUploadFiles(c)
                    o.onComplete && o.onComplete(o.uploadOptions.tagId)
                    return o.notifier.success("上传成功")
                }).catch(function(e) {
                    return e && o.logger.error(e)
                })
            },
            onUploadComplete: function() {
                var e = this;
                if ("上传中…" === this.uploadOptions.tip) {
                    this.uploadOptions.tip = this.tip;
                    var t = this.$refs.progress.style;
                    t.opacity = 0,
                    setTimeout(function() {
                        t.width = 0,
                        "function" == typeof e.onComplete && e.onComplete(e.uploadOptions.tagId)
                    }, 100)
                }
            },
            onError: function(e, t, i) {
                this.logger.error(e, t, i),
                this.notifier.fail("上传异常，请稍后重试")
            },
            openAgreement: function() {
                var e = this;
                this.dialog.openAgreement(this.fileType).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(16)
      , s = i(46)
      , n = i(50)
      , a = i(4)
      , r = i(8)
      , c = i(3);
    t.a = {
        components: {
            BaseHeadMy: o.a,
            MusicList: s.a,
            MusicFoot: n.a
        },
        data: function() {
            return {
                value: c.d.recently + c.d.upload + c.d.buy + c.d.love,
                key: "",
                info: {},
                emptyListMsg: "还没有我的音乐"
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            fileType: function() {
                return "music" === this.mutationName ? c.c.music : c.c.sound
            },
            attrGroupId: function() {
                return "music" === this.mutationName ? c.a.music : c.a.sound
            },
            headTab: function() {
                return this.$store.state[this.mutationName].headTab
            }
        },
        watch: {
            headTab: {
                handler: function(e) {
                    this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        methods: {
            chooseHead: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: e
                })
            },
            searchWithCondition: function(e) {
                var t = this
                  , i = {
                    recently: "还没有最近使用音乐",
                    upload: "还没有上传音乐",
                    buy: "还没有已购音乐",
                    love: "还没有收藏音乐"
                };
                if (this.emptyListMsg = i[e] || "还没有我的音乐",
                this.key = a.a.setKey({
                    fileType: this.fileType,
                    tab: e
                }),
                this.info = a.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                "recently" === e) {
                    var o = r.a.get(this.mutationName);
                    this.info.list = o.getList()
                }
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                a.a.getMoreItems(this.key, {
                    attrGroupId: this.attrGroupId
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(3);
    t.a = {
        props: {
            type: String,
            value: Number
        },
        data: function() {
            return {
                categories: [{
                    name: "全部",
                    type: "all",
                    value: o.d.all
                }, {
                    name: "最近",
                    type: "recently",
                    value: o.d.recently
                }, {
                    name: "上传",
                    type: "upload",
                    value: o.d.upload
                }, {
                    name: "已购",
                    type: "buy",
                    value: o.d.buy
                }, {
                    name: "收藏",
                    type: "love",
                    value: o.d.love
                }]
            }
        },
        methods: {
            choose: function(e) {
                this.$emit("choose", e.type)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(180)
    }
    var s = i(47)
      , n = i(190)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(182)
      , s = i(17);
    t.a = {
        components: {
            MusicListItem: o.a,
            ListStatus: s.a
        },
        props: {
            isBusy: Boolean,
            list: Array,
            emptyListMsg: String
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            sideTab: function() {
                return this.$store.state[this.mutationName].sideTab
            },
            isSys: function() {
                return "sys" === this.sideTab
            },
            showList: function() {
                return !!this.list.length
            },
            showSearch: function() {
                return this.$store.state[this.mutationName].search.show
            },
            showCondition: function() {
                return this.isSys && !this.showSearch
            },
            showLine: function() {
                return this.isSys && this.list.length
            },
            noSubCategory: function() {
                return this.$store.state[this.mutationName].category2.list.length
            }
        },
        methods: {
            onScrollEnd: function(e, t) {
                t.scrollY + 100 > t.maxScrollY && this.$emit("getNextPage")
            },
            scrollToTop: function() {
                this.$refs.wrap.myScroll.scrollToTop()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(4)
      , s = i(3);
    t.a = {
        props: {
            item: Object,
            list: Array
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            fileType: function() {
                return "music" === this.mutationName ? s.c.music : s.c.sound
            },
            selected: function() {
                return this.$store.state[this.mutationName].selected
            },
            sideTab: function() {
                return this.$store.state[this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state[this.mutationName].headTab
            },
            showlogo: function() {
                return "my" === this.sideTab && "love" === this.headTab || "sys" === this.sideTab
            },
            showPrice: function() {
                return this.showlogo
            },
            showCoupon: function() {
                return this.showlogo
            },
            showLove: function() {
                return "my" === this.sideTab && "love" === this.headTab
            },
            showLoveSys: function() {
                return this.showTwoColumn
            },
            showTime: function() {
                return "my" === this.sideTab && ["buy", "upload"].indexOf(this.headTab) >= 0
            },
            showCrop: function() {
                return "my" === this.sideTab && ["buy", "upload", "recently"].indexOf(this.headTab) >= 0
            },
            showDelete: function() {
                return "my" === this.sideTab && "upload" === this.headTab
            },
            showTwoColumn: function() {
                return "sys" === this.sideTab
            },
            showBuyTime: function() {
                return "my" === this.sideTab && "buy" === this.headTab
            }
        },
        methods: {
            select: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_SELECTED", {
                    item: e
                })
            },
            play: function(e) {
                this.select(e),
                this.$store.commit(this.mutationNameToUpperCase + "_PLAY", {
                    play: !0
                })
            },
            getBrand: function(e) {
                return e || {}
            },
            getCropInfo: function(e) {
                return e || {}
            },
            crop: function(e) {
                var t = this;
                this.dialog.openMusicCrop(e).then(function(i) {
                    i = {
                        id: e.id,
                        url: i.cropPath,
                        start: i.startTime,
                        duration: i.duration,
                        rate: ""
                    },
                    t.api.audio.saveCropInfo(i).then(function() {
                        return t.$set(e, "cropInfo", i)
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            deleteItem: function(e) {
                var t = this;
                this.dialog.openConfirm({
                    msg: "确定删除此音频吗？"
                }).then(function() {
                    return t.api.file.deleteFiles(e.id)
                }).then(function() {
                    var i = t.list.indexOf(e);
                    t.list.splice(i, 1),
                    t.notifier.success("删除成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            addFavorite: function(e) {
                var t = this;
                this.api.favorite.existFavorite(e.id).then(function(i) {
                    1 === i.data.map.collectStatus ? t.notifier.success("已收藏过") : t.api.favorite.addFavorite(e.id).then(function() {
                        o.a.clearKey({
                            fileType: t.fileType,
                            tab: "love"
                        }),
                        t.notifier.success("收藏成功")
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            deleteFavorite: function(e) {
                var t = this;
                this.api.favorite.deleteFavorite([e.favoriteId]).then(function() {
                    var i = t.list.indexOf(e);
                    t.list.splice(i, 1),
                    t.notifier.success("取消收藏成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            isBusy: Boolean,
            list: Array,
            msgLoading: {
                type: String,
                default: "加载中…"
            },
            emptyListMsg: {
                type: String,
                default: "暂无数据"
            }
        },
        computed: {
            hasData: function() {
                return !!this.list.length
            },
            emptyMsg: function() {
                var e = this.emptyListMsg.trim();
                return e || "暂无数据"
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(191)
    }
    var s = i(51)
      , n = i(194)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(11)
      , a = i(4)
      , r = i(8)
      , c = i(3);
    t.a = {
        data: function() {
            return {
                isPlayed: !1,
                progress: 0,
                currentTime: 0,
                totalTime: 0
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            fileType: function() {
                return "music" === this.mutationName ? c.c.music : c.c.sound
            },
            selectedMusic: function() {
                return this.$store.state[this.mutationName].selected
            },
            defaultMusic: function() {
                return this.$store.state[this.mutationName].default
            },
            audio: function() {
                return new Audio
            },
            currentTimeFormat: function() {
                return s.a.filter("formatTime")(this.currentTime)
            },
            showMusic: function() {
                return !this.showNoMusic
            },
            showNoMusic: function() {
                return !this.selectedMusic.id
            },
            showTime: function() {
                return !!this.totalTime
            },
            showDefaultMusic: function() {
                return this.defaultMusic.id === this.selectedMusic.id && this.defaultMusic.id
            },
            showToDefaultMusic: function() {
                return this.defaultMusic.id !== this.selectedMusic.id && this.defaultMusic.id
            },
            showPrice: function() {
                return this.selectedMusic.price >= 0 && !this.showDefaultMusic
            },
            showClear: function() {
                return this.showDefaultMusic
            },
            showUse: function() {
                return !this.showOk && !this.selectedMusic.price
            },
            showBuy: function() {
                return !this.showOk && this.selectedMusic.price
            },
            showOk: function() {
                return this.defaultMusic.id === this.selectedMusic.id || !this.selectedMusic.id
            },
            playAction: function() {
                return this.$store.state[this.mutationName].play
            }
        },
        watch: {
            selectedMusic: function(e) {
                this.stop()
            },
            currentTimeFormat: function(e) {
                this.progress = this.audio.currentTime / this.audio.duration
            },
            playAction: function(e) {
                e && this.selectedMusic && this.play()
            }
        },
        created: function() {
            this.audio.addEventListener("timeupdate", this.timeupdate),
            this.audio.addEventListener("loadedmetadata", this.loadedmetadata),
            this.audio.addEventListener("error", this.error)
        },
        destroyed: function() {
            this.audio.pause(),
            this.audio.removeEventListener("timeupdate", this.timeupdate),
            this.audio.removeEventListener("loadedmetadata", this.loadedmetadata),
            this.audio.removeEventListener("error", this.error)
        },
        methods: {
            loadedmetadata: function() {
                this.totalTime = this.audio.duration
            },
            timeupdate: function() {
                this.currentTime = this.audio.currentTime,
                this.audio.ended && (this.isPlayed = !1)
            },
            error: function(e) {
                var t = e.target.error;
                switch (t.code) {
                case t.MEDIA_ERR_ABORTED:
                    this.logger.error("You aborted the video playback.");
                    break;
                case t.MEDIA_ERR_NETWORK:
                    this.logger.error("A network error caused the video download to fail part-way.");
                    break;
                case t.MEDIA_ERR_DECODE:
                    this.logger.error("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
                    break;
                case t.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.logger.error("The video could not be loaded, either because the server or network failed or because the format is not supported.");
                    break;
                default:
                    this.logger.error("An unknown error occurred.")
                }
                this.notifier.warn("音频加载失败"),
                this.audio.pause(),
                this.isPlayed = !1
            },
            play: function() {
                var e = this.selectedMusic
                  , t = "";
                t = e.cropInfo ? e.cropInfo.url : e.path,
                (this.audio.paused && 0 === this.audio.currentTime || this.audio.ended) && (this.audio.src = this.env.host.file + t,
                this.progress = 0),
                this.audio.play(),
                this.isPlayed = !0
            },
            pause: function() {
                this.audio.pause(),
                this.isPlayed = !1
            },
            stop: function() {
                this.audio.pause(),
                this.audio.currentTime = 0,
                this.isPlayed = !1,
                this.progress = 0,
                this.currentTime = this.totalTime = 0
            },
            toDefault: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_DEFAULT", {
                    item: this.defaultMusic
                })
            },
            clear: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_SELECTED", {
                    item: {}
                })
            },
            use: function() {
                var e = this
                  , t = this.selectedMusic
                  , i = t.id
                  , o = t.name
                  , s = t.path;
                this.api.audio.getCropInfo(i).then(function(t) {
                    e.addRecently(e.selectedMusic);
                    var n = t.data.obj;
                    n && n.url && (s = n.url),
                    e.close({
                        id: i,
                        name: o,
                        path: s
                    })
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            },
            buy: function() {
                var e = this
                  , t = this.selectedMusic;
                this.api.pay.checkPurchased(t.id).then(function(i) {
                    if (i.data.map.isPurchase)
                        e.dialog.openConfirm({
                            msg: "用户已购买，是否立即使用？"
                        }).then(function() {
                            e.api.pay.checkProductExist(e.fileType, {
                                id: t.id,
                                name: t.name,
                                path: t.path,
                                fileType: e.fileType,
                                price: t.price
                            }),
                            e.addRecently(t),
                            e.close(t)
                        }).catch(function(t) {
                            return t && e.logger.error(t)
                        });
                    else {
                        var o = {
                            orderAppId: e.env.mall.buy_id,
                            signUrl: e.env.host.mall + "/api/m/order/sign",
                            buyItems: [{
                                name: "购买音乐",
                                price: t.price,
                                id: t.id,
                                type: 3
                            }]
                        };
                        e.dialog.openPay(o).then(function(i) {
                            if (i.data.success) {
                                var s = {
                                    productId: o.buyItems[0].id,
                                    totalFee: o.buyItems[0].price,
                                    outOrderId: i.data.obj.merchantOrderNo,
                                    channel: "EDITOR"
                                };
                                e.api.pay.saveOrderToBusinessCity(s).then(function(i) {
                                    var o = {
                                        id: t.id,
                                        orderId: i.data.map.orderId,
                                        name: t.name || t.title,
                                        path: t.path,
                                        price: t.price,
                                        source: 2,
                                        prodType: 4,
                                        musicType: c.c.music
                                    };
                                    return e.api.pay.saveToMyResource(o)
                                }).then(function() {
                                    e.notifier.success("购买成功，已保存至“我的购买”"),
                                    a.a.clearKey({
                                        fileType: c.c.music,
                                        tab: "buy"
                                    }),
                                    e.addRecently(t),
                                    e.close(t)
                                }).catch(function(t) {
                                    e.notifier.fail("购买失败，请联系客服处理"),
                                    e.logger.error(t)
                                })
                            } else
                                e.notifier.fail("支付失败，请稍后重试")
                        }).catch(function(t) {
                            return t && e.logger.error(t)
                        })
                    }
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            },
            ok: function() {
                this.selectedMusic.id ? this.use() : this.close({})
            },
            addRecently: function(e) {
                var t = e.id
                  , i = e.name
                  , o = e.path;
                r.a.get(this.mutationName).addItems({
                    id: t,
                    name: i,
                    path: o
                })
            },
            close: function(e) {
                this.stop();
                var t = {};
                e.id && (t = {
                    id: e.id,
                    name: e.name,
                    path: e.path
                }),
                n.a.success(t)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    i(9)
}
, function(e, t, i) {
    "use strict";
    var o = i(18)
      , s = i(46)
      , n = i(50)
      , a = i(4)
      , r = i(3);
    t.a = {
        components: {
            BaseHeadSys: o.a,
            MusicList: s.a,
            MusicFoot: n.a
        },
        data: function() {
            return {
                key: "",
                info: {},
                emptyListMsg: "没有筛选结果<br>换个条件再试试"
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.name
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            fileType: function() {
                return "music" === this.mutationName ? r.c.music : r.c.sound
            },
            topId: function() {
                return this.env.mall[this.mutationName + "_id"]
            },
            defaultId1: function() {
                return this.env.mall[this.mutationName + "_id_default1"]
            },
            defaultId2: function() {
                return this.env.mall[this.mutationName + "_id_default2"]
            },
            category1: function() {
                return this.$store.state[this.mutationName].category1
            },
            category2: function() {
                return this.$store.state[this.mutationName].category2
            },
            category: function() {
                return this.$store.state[this.mutationName].category
            },
            condition: function() {
                return {
                    category: this.category.selected.id || this.defaultId2,
                    sortBy: this.sort.selected.id,
                    priceFloor: this.price.selected.id[0],
                    priceCeiling: this.price.selected.id[1]
                }
            },
            search: function() {
                return this.$store.state[this.mutationName].search
            },
            sort: function() {
                return this.$store.state[this.mutationName].sort
            },
            price: function() {
                return this.$store.state[this.mutationName].price
            }
        },
        watch: {
            condition: {
                handler: function(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        created: function() {
            var e = this;
            this.category1.list.length || this.api.category.getCategoryListByTopId(this.topId).then(function(t) {
                e.$store.commit(e.mutationNameToUpperCase + "_CATEGORY1", {
                    list: t,
                    selected: t.filter(function(t) {
                        return t.id === e.defaultId1
                    })[0]
                }),
                e.$store.commit(e.mutationNameToUpperCase + "_CATEGORY2", {
                    selected: e.category2.list.filter(function(t) {
                        return t.id === e.defaultId2
                    })[0]
                })
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            chooseCategory1: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_CATEGORY1", {
                    selected: e
                }),
                this.$store.commit(this.mutationNameToUpperCase + "_CATEGORY2", {
                    selected: e
                })
            },
            chooseCategory2: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_CATEGORY2", {
                    selected: e
                })
            },
            chooseSort: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_SORT", {
                    selected: e
                })
            },
            choosePrice: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_PRICE", {
                    selected: e
                })
            },
            showSearch: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_SEARCH", {
                    show: !0
                })
            },
            hideSearch: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_SEARCH", {
                    show: !1
                }),
                this.searchWithCondition(this.condition)
            },
            searchWithKeyWords: function(e) {
                var t = {
                    category: this.topId,
                    sortBy: this.sort.list[0].id,
                    priceFloor: this.price.list[0].id[0],
                    priceCeiling: this.price.list[0].id[1],
                    keyWords: e
                };
                this.searchWithCondition(t)
            },
            searchWithCondition: function(e) {
                var t = this;
                this.key = a.a.setKey(Object.assign({
                    fileType: this.fileType,
                    tab: "sys"
                }, e)),
                this.info = a.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                a.a.getMoreItems(this.key).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(199);
    t.a = {
        components: {
            HeadSysSearch: o.a
        },
        props: {
            category1: Object,
            category2: Object,
            sort: Object,
            price: Object,
            search: Object,
            showSearchBtn: {
                type: Boolean,
                default: !0
            }
        },
        methods: {
            chooseCategory1: function(e) {
                this.$emit("chooseCategory1", e)
            },
            chooseCategory2: function(e) {
                this.$emit("chooseCategory2", e)
            },
            chooseSort: function(e) {
                this.$emit("chooseSort", e)
            },
            choosePrice: function(e) {
                this.$emit("choosePrice", e)
            },
            showSearch: function() {
                this.$emit("showSearch")
            },
            hideSearch: function() {
                this.$emit("hideSearch")
            },
            searchWithKeyWords: function(e) {
                this.$emit("search", e)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        data: function() {
            return {
                keyWords: ""
            }
        },
        mounted: function() {
            this.$refs.input.focus()
        },
        methods: {
            search: function() {
                this.$refs.input.focus(),
                this.keyWords.length ? this.$emit("search", this.keyWords) : this.notifier.warn("请输入关键字")
            },
            cancel: function() {
                this.keyWords = "",
                this.$emit("hideSearch")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(15)
      , s = i(22)
      , n = i(207)
      , a = i(211)
      , r = i(241)
      , c = i(4)
      , l = i(3);
    t.a = {
        components: {
            BaseNav: o.a,
            NavUpload: s.a,
            NavMobileUpload: n.a,
            ImageMy: a.a,
            ImageSys: r.a
        },
        data: function() {
            return {
                coupons: []
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            sideTab: function() {
                return this.$store.state["" + this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state["" + this.mutationName].headTab
            },
            category1: function() {
                return this.$store.state["" + this.mutationName].category1
            },
            search: function() {
                return this.$store.state["" + this.mutationName].search
            },
            preview: function() {
                return this.$store.state["" + this.mutationName].preview
            },
            tag: function() {
                return this.$store.state["" + this.mutationName].tag
            },
            tagManage: function() {
                return this.$store.state["" + this.mutationName].tagManage
            },
            mUpload: function() {
                return this.$store.state["" + this.mutationName].mUpload
            },
            showUploader: function() {
                return this.$store.state.common.uploader.show
            },
            uploadOptions: function() {
                return {
                    tokenType: "image",
                    extensions: "jpg,gif,png,jpeg",
                    maxFileSize: 10,
                    maxCount: 20,
                    tip: "本地上传",
                    fileType: l.c.image,
                    tagId: this.tag.selected.id,
                    onComplete: this.onComplete,
                    warning: {
                        wType: ["上传须知", "卡美美为广大用户提供原创图片上传渠道、信息储存空间等网络技术服务，用户可在遵守", "《卡美美图片版权许可与服务协议》", "的前提下自行上传并对其上传作品承担全部责任，请谨慎使用上传功能。", "通过本地电脑上传图片，大小不超过3M，支持格式：JPG、PNG、GIF，一次最多上传20张。"]
                    }
                }
            },
            mobileUploadOptions: function() {
                return {
                    tip: "手机上传",
                    head: '微信"扫一扫"上传手机图片'
                }
            }
        },
        watch: {
            "$route.query": function() {
                if ("deleteCache" === this.$route.query.type) {
                    var e = {
                        fileType: l.c.image,
                        tab: "upload"
                    };
                    c.a.clearKey(e)
                }
                this.init()
            },
            mUpload: function() {
                this.onComplete()
            }
        },
        created: function() {
            var e = this;
            this.init(),
            this.chooseSide(this.sideTab),
            this.api.banner.getBanners("pc_pic_coupon").then(function(t) {
                return e.coupons = t.data.list
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            init: function() {
                var e = this;
                this.$store.commit("COMMON_UPLOADER", {
                    show: !0
                }),
                "background" === this.mutationName && (this.$store.commit("BACKGROUND_SIDE_TAB", {
                    tab: "sys"
                }),
                this.$store.commit("BACKGROUND_CATEGORY1", {
                    selected: this.category1.list.filter(function(t) {
                        return t.id === e.env.mall.background_id_default1
                    })[0]
                })),
                this.search.show && this.$refs.sys.hideSearch(),
                this.preview.show && this.$store.commit(this.mutationNameToUpperCase + "_PREVIEW", {
                    show: !1
                }),
                this.tagManage.show && this.$store.commit(this.mutationNameToUpperCase + "_TAG_MANAGE", {
                    show: !1
                })
            },
            chooseSide: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_SIDE_TAB", {
                    tab: e
                })
            },
            onComplete: function(e, t, i) {
                var o = this
                  , s = "upload"
                  , n = void 0;
                if (t)
                    n = i;
                else {
                    var a = {
                        fileType: l.c.image,
                        tab: s,
                        tagId: e
                    };
                    n = c.a.setKey(a),
                    c.a.clearKey(a),
                    delete a.tagId,
                    c.a.clearKey(a)
                }
                "sys" === this.sideTab ? (this.$store.commit(this.mutationNameToUpperCase + "_SIDE_TAB", {
                    tab: "my"
                }),
                this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: s
                })) : "upload" === this.headTab ? e === this.tag.selected.id && (this.$refs.my.info = c.a.getInfo(n),
                c.a.getMoreItems(n, {
                    attrGroupId: l.a.image
                }).catch(function(e) {
                    return e && o.logger.error(e)
                })) : this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: s
                })
            },
            openAgreement: function() {
                var e = this;
                this.dialog.openAgreement(l.c.image).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(39)
      , s = i(10);
    t.a = {
        props: ["tip", "head"],
        data: function() {
            return {
                qrcodeVisible: !1,
                hasQRCode: !1,
                mobileUploadOptions: {
                    tip: this.tip,
                    head: this.head,
                    onUploadComplete: this.onUploadComplete
                }
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mUpload: function() {
                return this.$store.state["" + this.mutationName].mUpload
            }
        },
        watch: {
            mUpload: function() {
                this.qrcodeVisible = !1
            }
        },
        methods: {
            toggleQRCodeBox: function() {
                var e = this;
                this.qrcodeVisible = !this.qrcodeVisible,
                this.qrcodeVisible && (this.hasQRCode || this.createQRCodeImg().then(function() {
                    e.hasQRCode = !0
                }))
            },
            createQRCodeImg: function() {
                var e = this;
                return this.getQRCodeAPI().then(function() {
                    var t = s.a.getUser().id
                      , i = e.env.host.client + "/h2/upload.html?id=" + t + "&p=h5";
                    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
                    var o = qrcode(5, "M");
                    o.addData(i, "Byte"),
                    o.make(),
                    e.$refs.qrcodeEl.innerHTML = o.createImgTag(4, 4),
                    e.hasQRCode = !0
                })
            },
            getQRCodeAPI: function() {
                return o.a.delayLoadJSAndCSS("//lib.kameimei.cn/qrcode-generator/1.4.0/qrcode.min.js")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++)
                i[t] = e[t];
            return i
        }
        return Array.from(e)
    }
    var s = i(16)
      , n = i(212)
      , a = i(219)
      , r = i(223)
      , c = i(65)
      , l = i(68)
      , u = i(4)
      , d = i(8)
      , h = i(10)
      , p = i(3);
    t.a = {
        components: {
            BaseHeadMy: s.a,
            BaseTag: n.a,
            BaseTagManage: a.a,
            BaseTagManageBar: r.a,
            ImageList: c.a,
            ImagePreview: l.a
        },
        data: function() {
            return {
                value: p.d.recently + p.d.upload + p.d.buy + p.d.love,
                key: "",
                info: {},
                item: {},
                emptyListMsg: "还没有我的字体"
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            headTab: function() {
                return this.$store.state["" + this.mutationName].headTab
            },
            preview: function() {
                return this.$store.state["" + this.mutationName].preview
            },
            tag: function() {
                return this.$store.state["" + this.mutationName].tag
            },
            tagManage: function() {
                return this.$store.state["" + this.mutationName].tagManage
            },
            showTag: function() {
                return "upload" === this.headTab && this.tag.show
            },
            showTagManage: function() {
                return this.tagManage.show
            },
            selectedList: function() {
                return this.$store.state["" + this.mutationName].selectedList
            },
            isTagAll: function() {
                return !this.tag.selected.id
            },
            condition: function() {
                return {
                    tab: this.headTab,
                    tagId: this.tag.selected.id,
                    attrGroupId: p.a.image
                }
            }
        },
        watch: {
            condition: {
                handler: function(e) {
                    this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        methods: {
            chooseHead: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_HEAD_TAB", {
                    tab: e
                }),
                "upload" !== this.headTab && this.tagManage.show && this.completeTag()
            },
            chooseTag: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_TAG", {
                    selected: e
                })
            },
            manageTag: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_TAG_MANAGE", {
                    show: !0
                })
            },
            completeTag: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_TAG_MANAGE", {
                    show: !1
                })
            },
            searchWithCondition: function(e) {
                var t = this;
                if (e = Object.assign({
                    fileType: p.c.image
                }, e),
                delete e.attrGroupId,
                this.key = u.a.setKey(e),
                this.info = u.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                "recently" === e.tab) {
                    var i = d.a.get("image");
                    this.info.list = i.getList()
                }
                if (setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100),
                e.tagId)
                    this.emptyListMsg = "该分类下还没有图片";
                else {
                    var o = {
                        recently: "还没有最近使用图片",
                        buy: "还没有已购图片",
                        love: "还没有收藏图片",
                        upload: "还没有上传图片"
                    };
                    this.emptyListMsg = o[e.tab] || "还没有我的图片"
                }
            },
            getNextPage: function() {
                var e = this;
                u.a.getMoreItems(this.key, {
                    attrGroupId: p.a.image
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            },
            editTag: function(e, t) {
                var i = this;
                e.add ? this.api.tag.addTag(t).then(function(i) {
                    e.id = i.data.obj,
                    e.name = t
                }).catch(function(e) {
                    return e && i.logger.error(e)
                }) : this.api.tag.editTag(e.id, t).then(function() {
                    return e.name = t
                }).catch(function(e) {
                    return e && i.logger.error(e)
                })
            },
            deleteTag: function(e, t) {
                var i = this;
                this.api.tag.deleteTag(e.id).then(function() {
                    i.tag.list.splice(t, 1),
                    i.notifier.success("删除成功")
                }).catch(function(e) {
                    return e && i.logger.error(e)
                })
            },
            deleteFiles: function() {
                var e = this
                  , t = this.info
                  , i = this.headTab
                  , o = ""
                  , s = t.list.filter(function(e) {
                    return e.isChecked
                }).map(function(e) {
                    return e.id
                });
                this.isTagAll ? (o = h.a.allow("deleteImgTips") ? "确定删除图片吗？" : "删除所选图片后，该图片将在回收站中保留15天",
                this.dialog.openConfirm({
                    msg: o
                }).then(function() {
                    return e.api.file.deleteFiles(s)
                }).then(function(o) {
                    e.notifier.success("删除成功"),
                    s.forEach(function(e) {
                        var i = t.list.findIndex(function(t) {
                            return t.id === e
                        });
                        t.list.splice(i, 1)
                    }),
                    e.tag.list.forEach(function(e) {
                        e.id && u.a.clearKey({
                            fileType: p.c.image,
                            tab: i,
                            tagId: e.id
                        })
                    })
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })) : (o = "只在该标签中删除图片，若要真正删除请切换到“全部”中",
                this.dialog.openConfirm({
                    msg: o
                }).then(function() {
                    return e.api.tag.clearTag(e.tag.selected.id, s)
                }).then(function(i) {
                    e.notifier.success("删除成功"),
                    s.forEach(function(e) {
                        var i = t.list.findIndex(function(t) {
                            return t.id === e
                        });
                        t.list.splice(i, 1)
                    })
                }).catch(function(t) {
                    return t && e.logger.error(t)
                }))
            },
            addTo: function(e) {
                var t = this
                  , i = this.headTab
                  , o = this.info
                  , s = o.list.filter(function(e) {
                    return e.isChecked
                }).map(function(e) {
                    return e.id
                });
                this.api.tag.addToTag(e, s).then(function() {
                    t.notifier.success("添加成功"),
                    o.list.forEach(function(e) {
                        return t.$set(e, "isChecked", !1)
                    }),
                    u.a.clearKey({
                        fileType: p.c.image,
                        tab: i,
                        tagId: e
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            }
        },
        created: function() {
            var e = this;
            "upload" !== this.headTab || this.tag.list.length || this.api.tag.getTags().then(function(t) {
                var i = [{
                    name: "全部"
                }];
                i.push.apply(i, o(t.data.list)),
                e.$store.commit(e.mutationNameToUpperCase + "_TAG", {
                    list: i,
                    selected: i[0]
                })
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(60);
    t.a = {
        components: {
            UiDropDown: o.a
        },
        props: {
            list: Array,
            item: Object
        },
        computed: {
            showDropDown: function() {
                return this.list.length > 6
            }
        },
        methods: {
            choose: function(e) {
                this.$emit("choose", e)
            },
            manage: function() {
                this.$emit("manage")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(215)
    }
    var s = i(61)
      , n = i(217)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            scrollBarOptions: Object,
            css: Object,
            list: Array,
            ItemKey: {
                type: String,
                default: "id"
            },
            name: {
                type: String,
                default: "name"
            },
            selectedItem: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        methods: {
            choose: function(e) {
                var t = this;
                this.$emit("choose", e),
                this.$refs.dropDown.style.pointerEvents = "none",
                setTimeout(function() {
                    return t.$refs.dropDown.style.pointerEvents = ""
                }, 100)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            list: Array,
            item: Object
        },
        data: function() {
            return {
                text: ""
            }
        },
        methods: {
            choose: function(e) {
                this.$emit("choose", e)
            },
            add: function() {
                var e = this;
                this.list.push({
                    id: Date.now(),
                    name: "",
                    edit: !0,
                    add: !0
                }),
                setTimeout(function() {
                    e.$refs.wrap.myScroll.scrollToBottom(),
                    e.$refs.list.lastChild.firstChild.focus()
                }, 100)
            },
            edit: function(e, t) {
                this.text = e.name,
                this.$set(e, "edit", !0),
                this.$nextTick(function() {
                    return t.target.previousElementSibling.focus()
                })
            },
            deleteTag: function(e, t) {
                var i = this;
                this.dialog.openConfirm({
                    msg: "确定删除此标签"
                }).then(function() {
                    return i.$emit("deleteTag", e, t)
                }).catch(function(e) {
                    return e && i.logger.error(e)
                })
            },
            blur: function(e, t) {
                "" === this.text && (this.text = "未命名"),
                e.name !== this.text && this.$emit("editTag", e, this.text),
                this.$set(e, "edit", !1),
                this.text = ""
            },
            enter: function(e) {
                this.$set(e, "edit", !1)
            },
            ok: function() {
                this.$emit("ok")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(23)
      , s = i(60);
    t.a = {
        components: {
            UiCheckbox: o.a,
            UiDropDown: s.a
        },
        props: {
            itemList: Array,
            tagList: Array,
            tagSelected: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        data: function() {
            return {
                isSelectedAll: !1,
                isSelectedAny: !1,
                tagListNew: []
            }
        },
        computed: {
            tag: function() {
                return {
                    tagList: this.tagList,
                    tagSelected: this.tagSelected
                }
            }
        },
        watch: {
            itemList: {
                handler: function(e, t) {
                    var i = this;
                    e !== t ? this.setItemChecked(!1) : (this.isSelectedAll = !1,
                    e.length > 0 && (this.isSelectedAll = !0),
                    this.isSelectedAny = !1,
                    e.forEach(function(e) {
                        e.isChecked ? i.isSelectedAny = !0 : i.isSelectedAll = !1
                    }))
                },
                deep: !0
            },
            tag: {
                handler: function(e) {
                    var t = this;
                    this.tagListNew = this.tagList.filter(function(e) {
                        return e.id && e.id !== t.tagSelected.id
                    })
                },
                deep: !0,
                immediate: !0
            }
        },
        destroyed: function() {
            this.setItemChecked(!1)
        },
        methods: {
            setItemChecked: function(e) {
                var t = this;
                this.itemList.forEach(function(i) {
                    return t.$set(i, "isChecked", e)
                })
            },
            selectAll: function() {
                this.setItemChecked(!this.isSelectedAll)
            },
            deleteFiles: function() {
                this.isSelectedAny && this.$emit("delete")
            },
            choose: function(e) {
                this.$emit("addTo", e.id)
            },
            ok: function() {
                this.$emit("ok")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            isChecked: Boolean
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(230)
    }
    var s = i(66)
      , n = i(236)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(232)
      , s = i(17);
    t.a = {
        components: {
            ImageListItem: o.a,
            ListStatus: s.a
        },
        props: {
            isBusy: Boolean,
            list: Array,
            emptyListMsg: String
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            sideTab: function() {
                return this.$store.state["" + this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state["" + this.mutationName].headTab
            },
            isSys: function() {
                return "sys" === this.sideTab
            },
            showList: function() {
                return !!this.list.length
            },
            showSearch: function() {
                return this.$store.state["" + this.mutationName].search.show
            },
            showCondition: function() {
                return this.isSys && !this.showSearch
            },
            noSubCategory: function() {
                return this.$store.state["" + this.mutationName].category2.list.length
            },
            showTag: function() {
                return "my" === this.sideTab && "upload" === this.headTab && this.$store.state["" + this.mutationName].tag.show
            },
            showTagManage: function() {
                return this.$store.state["" + this.mutationName].tagManage.show
            }
        },
        methods: {
            onScrollEnd: function(e, t) {
                t.scrollY + 100 > t.maxScrollY && this.$emit("getNextPage")
            },
            scrollToTop: function() {
                this.$refs.wrap.myScroll.scrollToTop()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(23)
      , a = i(4)
      , r = i(8)
      , c = i(11)
      , l = i(3);
    t.a = {
        components: {
            UiCheckbox: n.a
        },
        props: {
            item: Object,
            list: Array
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            sideTab: function() {
                return this.$store.state["" + this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state["" + this.mutationName].headTab
            },
            showLove: function() {
                return "my" === this.sideTab && "love" === this.headTab
            },
            showLoveSys: function() {
                return "sys" === this.sideTab
            },
            showPrice: function() {
                return "my" === this.sideTab && "love" === this.headTab || "sys" === this.sideTab
            },
            showlogo: function() {
                return this.showPrice
            },
            showPreview: function() {
                return !this.showSelect
            },
            showSelect: function() {
                return this.$store.state["" + this.mutationName].tagManage.show
            },
            canUse: function() {
                return "my" === this.sideTab && ["upload", "buy", "recently"].indexOf(this.headTab) >= 0
            },
            tagManage: function() {
                return this.$store.state["" + this.mutationName].tagManage
            },
            showTagManage: function() {
                return this.tagManage.show
            }
        },
        methods: {
            select: function(e) {
                this.tagManage.show ? this.$set(this.item, "isChecked", !this.item.isChecked) : this.canUse || !this.item.price ? this.use(e) : this.preview(e)
            },
            getPath: function(e) {
                return s.a.filter("qiniuZoom")(e, 136)
            },
            getBrand: function(e) {
                return e || {}
            },
            use: function(e) {
                var t = {
                    id: e.id,
                    path: e.path,
                    tmbPath: e.path
                };
                this.addRecently(t),
                this.close(t)
            },
            addFavorite: function(e) {
                var t = this;
                this.api.favorite.existFavorite(e.id).then(function(i) {
                    1 === i.data.map.collectStatus ? t.notifier.info("已收藏过") : t.api.favorite.addFavorite(e.id).then(function() {
                        a.a.clearKey({
                            fileType: l.c.image,
                            tab: "love"
                        }),
                        t.notifier.success("收藏成功")
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            deleteFavorite: function(e) {
                var t = this;
                this.api.favorite.deleteFavorite([e.favoriteId]).then(function() {
                    var i = t.list.indexOf(e);
                    t.list.splice(i, 1),
                    t.notifier.success("取消收藏成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            preview: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_PREVIEW", {
                    show: !0,
                    selected: e
                })
            },
            addRecently: function(e) {
                r.a.get("image").addItems(e)
            },
            close: function(e) {
                c.a.success([e])
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(237)
    }
    var s = i(69)
      , n = i(239)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(4)
      , s = i(8)
      , n = i(11)
      , a = i(3);
    t.a = {
        props: {
            list: Array
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            sideTab: function() {
                return this.$store.state["" + this.mutationName].sideTab
            },
            headTab: function() {
                return this.$store.state["" + this.mutationName].headTab
            },
            preview: function() {
                return this.$store.state["" + this.mutationName].preview
            },
            item: function() {
                return this.preview.selected
            },
            showPrice: function() {
                return "my" === this.sideTab && "love" === this.headTab || "sys" === this.sideTab
            },
            showLove: function() {
                return "sys" === this.sideTab
            },
            showUse: function() {
                return null == this.item.price || 0 === this.item.price
            },
            showBuy: function() {
                return this.item.price > 0
            }
        },
        methods: {
            use: function(e) {
                var t = {
                    id: e.id,
                    path: e.path,
                    tmbPath: e.path
                };
                this.addRecently(t),
                this.close(t)
            },
            buy: function(e) {
                var t = this;
                this.api.pay.checkPurchased(e.id).then(function(i) {
                    if (i.data.map.isPurchase)
                        return t.dialog.openConfirm({
                            msg: "用户已购买，是否立即使用？"
                        }).then(function() {
                            t.api.pay.checkProductExist(a.c.image, {
                                id: o.id,
                                name: o.name,
                                path: o.path,
                                fileType: a.c.image,
                                price: o.price
                            });
                            var e = i.data.map.product.authedPath
                              , o = {
                                id: o.id,
                                path: e,
                                tmbPath: e
                            };
                            t.addRecently(o),
                            t.close(o)
                        });
                    var s = {
                        orderAppId: t.env.mall.buy_id,
                        signUrl: t.env.host.mall + "/api/m/order/sign",
                        buyItems: [{
                            name: "购买图片",
                            price: e.price,
                            id: e.id,
                            type: 2
                        }]
                    };
                    return t.dialog.openPay(s).then(function(i) {
                        if (i.data.success) {
                            var n = {
                                productId: s.buyItems[0].id,
                                totalFee: s.buyItems[0].price,
                                outOrderId: i.data.obj.merchantOrderNo,
                                channel: "EDITOR"
                            };
                            return t.api.pay.saveOrderToBusinessCity(n).then(function(i) {
                                e.path = i.data.obj.authedPath;
                                var o = {
                                    id: e.id,
                                    orderId: i.data.map.orderId,
                                    name: e.name || e.title,
                                    path: e.path,
                                    price: e.price,
                                    source: 2,
                                    prodType: 1
                                };
                                return t.api.pay.saveToMyResource(o)
                            }).then(function() {
                                t.notifier.success("购买成功，已保存至“我的购买”"),
                                o.a.clearKey({
                                    fileType: a.c.image,
                                    tab: "buy"
                                });
                                var i = {
                                    id: e.id,
                                    path: e.path,
                                    tmbPath: e.path
                                };
                                t.addRecently(i),
                                t.close(i)
                            }).catch(function(e) {
                                return t.notifier.fail("购买失败，请联系客服处理"),
                                Promise.reject(e)
                            })
                        }
                        return t.notifier.fail("支付失败，请稍后重试"),
                        Promise.reject()
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            addRecently: function(e) {
                s.a.get("image").addItems(e)
            },
            close: function(e) {
                n.a.success([e])
            },
            getItem: function(e) {
                var t = this.list.indexOf(this.item);
                1 === e && t >= this.list.length - 5 && this.$emit("getNextPage"),
                -1 === e && 0 === t ? this.notifier.info("已经是第一张图了") : 1 === e && t === this.list.length - 1 ? this.notifier.info("已经是最后一张图了") : this.$store.commit(this.mutationNameToUpperCase + "_PREVIEW", {
                    selected: this.list[t + e]
                })
            },
            hide: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_PREVIEW", {
                    show: !1
                })
            },
            addFavorite: function(e) {
                var t = this;
                this.api.favorite.existFavorite(e.id).then(function(i) {
                    return 1 === i.data.map.collectStatus ? (t.notifier.info("已收藏过"),
                    Promise.reject()) : t.api.favorite.addFavorite(e.id)
                }).then(function() {
                    o.a.clearKey({
                        fileType: a.c.image,
                        tab: "love"
                    }),
                    t.notifier.success("收藏成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(18)
      , s = i(65)
      , n = i(68)
      , a = i(4);
    t.a = {
        components: {
            BaseHeadSys: o.a,
            ImageList: s.a,
            ImagePreview: n.a
        },
        data: function() {
            return {
                key: "",
                info: {},
                item: {},
                emptyListMsg: "没有筛选结果<br>换个条件再试试"
            }
        },
        computed: {
            mutationName: function() {
                return this.$route.path.slice(1)
            },
            mutationNameToUpperCase: function() {
                return this.mutationName.toUpperCase()
            },
            topId: function() {
                return this.env.mall.image_id
            },
            defaultId2: function() {
                return this.env.mall[this.mutationName + "_id_default2"]
            },
            category1: function() {
                return this.$store.state["" + this.mutationName].category1
            },
            category2: function() {
                return this.$store.state["" + this.mutationName].category2
            },
            category: function() {
                return this.$store.state["" + this.mutationName].category
            },
            condition: function() {
                return {
                    category: this.category.selected.id || this.defaultId2,
                    sortBy: this.sort.selected.id,
                    priceFloor: this.price.selected.id[0],
                    priceCeiling: this.price.selected.id[1]
                }
            },
            search: function() {
                return this.$store.state["" + this.mutationName].search
            },
            sort: function() {
                return this.$store.state["" + this.mutationName].sort
            },
            price: function() {
                return this.$store.state["" + this.mutationName].price
            },
            preview: function() {
                return this.$store.state["" + this.mutationName].preview
            }
        },
        watch: {
            condition: {
                handler: function(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        created: function() {
            var e = this;
            this.category1.list.length || this.api.category.getCategoryListByTopId(this.topId).then(function(t) {
                e.$store.commit("IMAGE_CATEGORY1", {
                    list: t,
                    selected: t.filter(function(t) {
                        return t.id === e.env.mall.image_id_default1
                    })[0]
                }),
                e.$store.commit("IMAGE_CATEGORY2", {
                    selected: e.$store.state.image.category2.list.filter(function(t) {
                        return t.id === e.env.mall.image_id_default2
                    })[0]
                }),
                e.$store.commit("BACKGROUND_CATEGORY1", {
                    list: t,
                    selected: t.filter(function(t) {
                        return t.id === e.env.mall.background_id_default1
                    })[0]
                })
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            chooseCategory1: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_CATEGORY1", {
                    selected: e
                }),
                this.$store.commit("IMAGE_CATEGORY2", {
                    selected: e
                })
            },
            chooseCategory2: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_CATEGORY2", {
                    selected: e
                })
            },
            chooseSort: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_SORT", {
                    selected: e
                })
            },
            choosePrice: function(e) {
                this.$store.commit(this.mutationNameToUpperCase + "_PRICE", {
                    selected: e
                })
            },
            showSearch: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_SEARCH", {
                    show: !0
                })
            },
            hideSearch: function() {
                this.$store.commit(this.mutationNameToUpperCase + "_SEARCH", {
                    show: !1
                }),
                this.searchWithCondition(this.condition)
            },
            searchWithKeyWords: function(e) {
                var t = {
                    category: this.topId,
                    sortBy: this.sort.list[0].id,
                    priceFloor: this.price.list[0].id[0],
                    priceCeiling: this.price.list[0].id[1],
                    keyWords: e
                };
                this.searchWithCondition(t)
            },
            searchWithCondition: function(e) {
                var t = this;
                this.key = a.a.setKey(Object.assign({
                    tab: "sys"
                }, e)),
                this.info = a.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                a.a.getMoreItems(this.key).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(15)
      , s = i(22)
      , n = i(245)
      , a = i(257);
    i(4),
    i(3);
    t.a = {
        components: {
            BaseNav: o.a,
            NavUpload: s.a,
            ShapeMy: n.a,
            ShapeSys: a.a
        },
        data: function() {
            return {
                coupons: []
            }
        },
        computed: {
            sideTab: function() {
                return this.$store.state.shape.sideTab
            },
            search: function() {
                return this.$store.state.shape.search
            },
            preview: function() {
                return this.$store.state.shape.preview
            }
        },
        watch: {
            "$route.query": function() {
                this.init()
            }
        },
        created: function() {
            this.init(),
            this.chooseSide(this.sideTab)
        },
        methods: {
            init: function() {
                this.search.show && this.$refs.sys.hideSearch(),
                this.preview.show && this.$store.commit("SHAPE_PREVIEW", {
                    show: !1
                })
            },
            chooseSide: function(e) {
                this.$store.commit("SHAPE_SIDE_TAB", {
                    tab: e
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(16)
      , s = i(73)
      , n = i(76)
      , a = i(4)
      , r = i(8)
      , c = (i(10),
    i(3));
    t.a = {
        components: {
            BaseHeadMy: o.a,
            ShapeList: s.a,
            ShapePreview: n.a
        },
        data: function() {
            return {
                value: c.d.recently + c.d.love,
                key: "",
                info: {},
                item: {},
                emptyListMsg: "还没有我的形状"
            }
        },
        computed: {
            headTab: function() {
                return this.$store.state.shape.headTab
            },
            preview: function() {
                return this.$store.state.shape.preview
            },
            condition: function() {
                return {
                    tab: this.headTab,
                    attrGroupId: c.a.shape
                }
            }
        },
        watch: {
            condition: {
                handler: function(e) {
                    this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        methods: {
            chooseHead: function(e) {
                this.$store.commit("SHAPE_HEAD_TAB", {
                    tab: e
                })
            },
            searchWithCondition: function(e) {
                var t = this;
                if (e = Object.assign({
                    fileType: c.c.shape
                }, e),
                delete e.attrGroupId,
                this.key = a.a.setKey(e),
                this.info = a.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                "recently" === e.tab) {
                    var i = r.a.get("shape");
                    this.info.list = i.getList()
                }
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100);
                var o = {
                    recently: "还没有最近使用形状",
                    love: "还没有收藏形状"
                };
                this.emptyListMsg = o[e.tab] || "还没有收藏形状"
            },
            getNextPage: function() {
                var e = this;
                a.a.getMoreItems(this.key, {
                    attrGroupId: c.a.shape
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(246)
    }
    var s = i(74)
      , n = i(252)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(248)
      , s = i(17);
    t.a = {
        components: {
            ShapeListItem: o.a,
            ListStatus: s.a
        },
        props: {
            isBusy: Boolean,
            list: Array,
            emptyListMsg: String
        },
        computed: {
            sideTab: function() {
                return this.$store.state.shape.sideTab
            },
            isSys: function() {
                return "sys" === this.sideTab
            },
            showList: function() {
                return !!this.list.length
            },
            showSearch: function() {
                return this.$store.state.shape.search.show
            },
            showCondition: function() {
                return this.isSys && !this.showSearch
            },
            noSubCategory: function() {
                return this.$store.state.shape.category2.list.length
            }
        },
        methods: {
            onScrollEnd: function(e, t) {
                t.scrollY + 100 > t.maxScrollY && this.$emit("getNextPage")
            },
            scrollToTop: function() {
                this.$refs.wrap.myScroll.scrollToTop()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = (i.n(o),
    i(23))
      , n = i(4)
      , a = i(8)
      , r = i(11)
      , c = i(3);
    t.a = {
        components: {
            UiCheckbox: s.a
        },
        props: {
            item: Object,
            list: Array
        },
        computed: {
            sideTab: function() {
                return this.$store.state.shape.sideTab
            },
            headTab: function() {
                return this.$store.state.shape.headTab
            },
            showLove: function() {
                return "my" === this.sideTab && "love" === this.headTab
            },
            showLoveSys: function() {
                return "sys" === this.sideTab
            },
            showPreview: function() {
                return !0
            }
        },
        methods: {
            use: function(e) {
                var t = {
                    id: e.id,
                    path: e.path
                };
                this.addRecently(t),
                this.close(t)
            },
            addFavorite: function(e) {
                var t = this;
                this.api.favorite.existFavorite(e.id).then(function(i) {
                    1 === i.data.map.collectStatus ? t.notifier.info("已收藏过") : t.api.favorite.addFavorite(e.id).then(function() {
                        n.a.clearKey({
                            fileType: c.c.shape,
                            tab: "love"
                        }),
                        t.notifier.success("收藏成功")
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            deleteFavorite: function(e) {
                var t = this;
                this.api.favorite.deleteFavorite([e.favoriteId]).then(function() {
                    var i = t.list.indexOf(e);
                    t.list.splice(i, 1),
                    t.notifier.success("取消收藏成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            preview: function(e) {
                this.$store.commit("SHAPE_PREVIEW", {
                    show: !0,
                    selected: e
                })
            },
            addRecently: function(e) {
                a.a.get("shape").addItems(e)
            },
            close: function(e) {
                r.a.success([e])
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(253)
    }
    var s = i(77)
      , n = i(255)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = (i(4),
    i(8))
      , s = i(11);
    i(3);
    t.a = {
        props: {
            list: Array
        },
        computed: {
            preview: function() {
                return this.$store.state.shape.preview
            },
            item: function() {
                return this.preview.selected
            },
            showLove: function() {
                return !1
            },
            showUse: function() {
                return !0
            }
        },
        methods: {
            addFavorite: function() {},
            use: function(e) {
                var t = {
                    id: e.id,
                    path: e.path
                };
                this.addRecently(t),
                this.close(t)
            },
            addRecently: function(e) {
                o.a.get("shape").addItems(e)
            },
            close: function(e) {
                s.a.success([e])
            },
            getItem: function(e) {
                var t = this.list.indexOf(this.item);
                1 === e && t >= this.list.length - 5 && this.$emit("getNextPage"),
                -1 === e && 0 === t ? this.notifier.info("已经是第一张图了") : 1 === e && t === this.list.length - 1 ? this.notifier.info("已经是最后一张图了") : this.$store.commit("SHAPE_PREVIEW", {
                    selected: this.list[t + e]
                })
            },
            hide: function() {
                this.$store.commit("SHAPE_PREVIEW", {
                    show: !1
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(18)
      , s = i(73)
      , n = i(76)
      , a = i(4);
    t.a = {
        components: {
            BaseHeadSys: o.a,
            ShapeList: s.a,
            ShapePreview: n.a
        },
        data: function() {
            return {
                key: "",
                info: {},
                item: {},
                emptyListMsg: "没有筛选结果<br>换个条件再试试"
            }
        },
        computed: {
            topId: function() {
                return this.env.mall.shape_id
            },
            defaultId1: function() {
                return this.env.mall.shape_id_default1
            },
            defaultId2: function() {
                return this.env.mall.shape_id_default2
            },
            category1: function() {
                return this.$store.state.shape.category1
            },
            category2: function() {
                return this.$store.state.shape.category2
            },
            category: function() {
                return this.$store.state.shape.category
            },
            condition: function() {
                return {
                    category: this.category.selected.id || this.defaultId2,
                    sortBy: this.sort.selected.id,
                    priceFloor: this.price.selected.id[0],
                    priceCeiling: this.price.selected.id[1]
                }
            },
            search: function() {
                return this.$store.state.shape.search
            },
            sort: function() {
                return this.$store.state.shape.sort
            },
            price: function() {
                return this.$store.state.shape.price
            },
            preview: function() {
                return this.$store.state.shape.preview
            }
        },
        watch: {
            condition: {
                handler: function(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        created: function() {
            var e = this;
            this.category1.list.length || this.api.category.getCategoryListByTopId(this.topId).then(function(t) {
                e.$store.commit("SHAPE_CATEGORY1", {
                    list: t,
                    selected: t.filter(function(t) {
                        return t.id === e.defaultId1
                    })[0]
                }),
                e.$store.commit("SHAPE_CATEGORY2", {
                    selected: e.category2.list.filter(function(t) {
                        return t.id === e.defaultId2
                    })[0]
                })
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            chooseCategory1: function(e) {
                this.$store.commit("SHAPE_CATEGORY1", {
                    selected: e
                }),
                this.$store.commit("SHAPE_CATEGORY2", {
                    selected: e
                })
            },
            chooseCategory2: function(e) {
                this.$store.commit("SHAPE_CATEGORY2", {
                    selected: e
                })
            },
            chooseSort: function(e) {
                this.$store.commit("SHAPE_SORT", {
                    selected: e
                })
            },
            choosePrice: function(e) {
                this.$store.commit("SHAPE_PRICE", {
                    selected: e
                })
            },
            showSearch: function() {
                this.$store.commit("SHAPE_SEARCH", {
                    show: !0
                })
            },
            hideSearch: function() {
                this.$store.commit("SHAPE_SEARCH", {
                    show: !1
                }),
                this.searchWithCondition(this.condition)
            },
            searchWithKeyWords: function(e) {
                var t = {
                    category: this.topId,
                    sortBy: this.sort.list[0].id,
                    priceFloor: this.price.list[0].id[0],
                    priceCeiling: this.price.list[0].id[1],
                    keyWords: e
                };
                this.searchWithCondition(t)
            },
            searchWithCondition: function(e) {
                var t = this;
                this.key = a.a.setKey(Object.assign({
                    tab: "sys"
                }, e)),
                this.info = a.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                a.a.getMoreItems(this.key).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(15)
      , s = i(261)
      , n = i(265)
      , a = i(278)
      , r = (i(4),
    i(10))
      , c = i(3);
    t.a = {
        components: {
            BaseNav: o.a,
            NavPreview: s.a,
            FontMy: n.a,
            FontSys: a.a
        },
        data: function() {
            return {
                coupons: []
            }
        },
        computed: {
            sideTab: function() {
                return this.$store.state.font.sideTab
            },
            search: function() {
                return this.$store.state.font.search
            },
            tip: function() {
                return r.a.allow("disableBuyPersonalFont") ? "当前账号使用的字体，授权范围内可用于商业用途" : "商用版字体授权范围内可商用，个人版不可商用"
            }
        },
        watch: {
            "$route.query": function() {
                this.init()
            }
        },
        created: function() {
            var e = this;
            this.init(),
            this.chooseSide(this.sideTab),
            this.api.banner.getBanners("pc_font_coupon").then(function(t) {
                return e.coupons = t.data.list
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            init: function() {
                this.search.show && this.$refs.sys.hideSearch()
            },
            chooseSide: function(e) {
                this.$store.commit("FONT_SIDE_TAB", {
                    tab: e
                })
            },
            openAgreement: function() {
                var e = this;
                this.dialog.openAgreement(c.c.font).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        data: function() {
            return {
                isActive: !1,
                previewText: ""
            }
        },
        methods: {
            active: function() {
                this.isActive = !this.isActive
            },
            preview: function() {
                this.$store.commit("FONT_PREVIEW_TEXT", {
                    text: this.previewText
                })
            },
            clearPreviewText: function() {
                this.previewText = "",
                this.$refs.input.focus(),
                this.preview()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(16)
      , s = i(82)
      , n = i(4)
      , a = i(8)
      , r = i(3);
    t.a = {
        components: {
            BaseHeadMy: o.a,
            FontList: s.a
        },
        data: function() {
            return {
                value: r.d.all + r.d.recently + r.d.buy + r.d.love,
                key: "",
                info: {},
                emptyListMsg: "还没有我的字体"
            }
        },
        computed: {
            headTab: function() {
                return this.$store.state.font.headTab
            }
        },
        watch: {
            headTab: {
                handler: function(e) {
                    this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        methods: {
            chooseHead: function(e) {
                this.$store.commit("FONT_HEAD_TAB", {
                    tab: e
                })
            },
            searchWithCondition: function(e) {
                var t = this
                  , i = {
                    recently: "还没有最近使用字体",
                    love: "还没有收藏字体",
                    buy: "还没有已购字体",
                    all: "还没有我的字体"
                };
                if (this.emptyListMsg = i[e] || "还没有我的字体",
                "buy" === e && (e = "buyFont"),
                this.key = n.a.setKey({
                    fileType: r.c.font,
                    tab: e
                }),
                this.info = n.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                "recently" === e) {
                    var o = a.a.get("font");
                    this.info.list = o.getList()
                }
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                n.a.getMoreItems(this.key, {
                    attrGroupId: r.a.font
                }).then(function() {
                    return e.$refs.list.previewFonts()
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(266)
    }
    var s = i(83)
      , n = i(276)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = (i.n(o),
    i(268))
      , n = i(17);
    t.a = {
        components: {
            FontListItem: s.a,
            ListStatus: n.a
        },
        props: {
            isBusy: Boolean,
            list: Array,
            emptyListMsg: String
        },
        computed: {
            previewText: function() {
                return "英文" === this.$store.state.font.category.selected.name ? this.$store.state.font.previewEnText : this.$store.state.font.previewText
            },
            sideTab: function() {
                return this.$store.state.font.sideTab
            },
            isSys: function() {
                return "sys" === this.sideTab
            },
            showList: function() {
                return !!this.list.length
            },
            showSearch: function() {
                return this.$store.state.font.search.show
            },
            showCondition: function() {
                return this.isSys && !this.showSearch
            },
            noSubCategory: function() {
                return this.$store.state.font.category2.list.length
            }
        },
        watch: {
            previewText: function() {
                this.previewFonts()
            }
        },
        methods: {
            onScrollEnd: function(e, t) {
                t.scrollY + 100 > t.maxScrollY && this.$emit("getNextPage"),
                this.previewFonts()
            },
            scrollToTop: function() {
                this.$refs.wrap.myScroll.scrollToTop()
            },
            appendFontStyle: function(e) {
                var t = document.head || document.getElementsByTagName("head")[0]
                  , i = document.createElement("style");
                t.appendChild(i),
                i.appendChild(document.createTextNode(e))
            },
            findVisibleFonts: function() {
                var e = this.$refs.list
                  , t = (e.scrollTop,
                e.children);
                if (!t.length)
                    return [];
                var i = Array.from(t).filter(function(t) {
                    return t.offsetTop + t.offsetHeight - e.scrollTop > e.offsetTop && t.offsetTop - e.scrollTop < e.offsetTop + e.offsetHeight
                });
                if (!i.length)
                    return [];
                var o = Number(i[0].dataset.fontIndex);
                return this.list.slice(o, o + i.length)
            },
            previewFonts: function() {
                var e = this
                  , t = this.findVisibleFonts()
                  , i = ""
                  , o = this.env.host.font + "/store/fonts/";
                t.forEach(function(t) {
                    var s = t.font_family || t.fontFamily
                      , n = e.previewText || t.name;
                    t.previewText !== n && (t.previewText = n,
                    i += '@font-face{font-family:"' + s + '";src:url(' + (o + s) + ".woff?text=" + encodeURIComponent(n) + "&time=" + (new Date).getTime() + ") format('woff');}\r\n")
                }),
                i.length && this.appendFontStyle(i)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(271)
      , s = i(4)
      , n = i(8)
      , a = i(11)
      , r = i(10)
      , c = i(3);
    t.a = {
        components: {
            UiSwitch: o.a
        },
        props: {
            item: Object,
            list: Array
        },
        computed: {
            disableBuyPersonalFont: function() {
                return r.a.allow("disableBuyPersonalFont")
            },
            font: function() {
                return this.$store.state.font
            },
            previewText: function() {
                return "英文" === this.font.category.selected.name ? this.font.previewEnText : this.font.previewText
            },
            sideTab: function() {
                return this.font.sideTab
            },
            headTab: function() {
                return this.font.headTab
            },
            showLove: function() {
                return "my" === this.sideTab && "love" === this.headTab
            },
            showLoveSys: function() {
                return "sys" === this.sideTab
            },
            showPrice: function() {
                return "my" === this.sideTab && "love" === this.headTab || "sys" === this.sideTab
            },
            showCoupon: function() {
                return this.showPrice
            },
            showExpire: function() {
                return "my" === this.sideTab && ["all", "buy"].indexOf(this.headTab) >= 0
            },
            showVersion: function() {
                return this.showExpire
            },
            showSwitch: function() {
                return "my" === this.sideTab && "all" === this.headTab
            }
        },
        methods: {
            inDays: function(e, t) {
                var i = (e - Date.now()) / 864e5;
                return parseInt(i) <= t
            },
            changeFontStatus: function(e) {
                var t = this
                  , i = 1 === e.status ? 0 : 1;
                this.api.product.changeFontStatus(e.id, i).then(function(o) {
                    e.status = i,
                    a.a.send({
                        type: "clearFonts"
                    }),
                    t.notifier.success("操作成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            useFont: function(e) {
                var t = this;
                this.use(e).then(function(i) {
                    i && (s.a.clearKey({
                        fileType: c.c.font,
                        tab: "buyFont"
                    }),
                    s.a.clearKey({
                        fileType: c.c.font,
                        tab: "all"
                    }),
                    a.a.send({
                        type: "clearFonts"
                    })),
                    e = {
                        id: e.productId ? e.id : e.sourceId,
                        productId: e.sourceId ? e.id : e.productId,
                        name: e.name,
                        fontFamily: e.fontFamily || e.font_family,
                        woffPath: e.woffPath || e.woff_path,
                        ttfPath: e.ttfPath || e.ttf_path
                    },
                    t.addRecently(e),
                    t.close(e)
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            use: function(e) {
                var t = this;
                return e = {
                    id: e.productId ? e.id : e.sourceId,
                    productId: e.sourceId ? e.id : e.productId,
                    name: e.name
                },
                this.api.product.getFontStatus(e.id, e.productId).then(function(i) {
                    var o = i.data.map
                      , s = e.license = o.license
                      , n = e.expStatus = o.expStatus
                      , a = e.status = o.status
                      , r = e.price = o.price
                      , c = e.business_price = Number(o.business_price)
                      , l = null;
                    if (0 === a && (null === s || 0 === n))
                        return t.notifier.warn("当前字体已下架，请使用其它字体"),
                        Promise.reject();
                    if (t.disableBuyPersonalFont) {
                        if (null !== s && 0 === n && 1 === a && 0 !== c)
                            l = t.dialog.openConfirm({
                                msg: "当前字体已过期，是否重新购买？"
                            });
                        else {
                            if (1 !== a || null !== s || 0 === c)
                                return 0 === c && 0 === n ? t.buyFree(e).then(function() {
                                    return !0
                                }) : Promise.resolve();
                            l = Promise.resolve()
                        }
                        return l.then(function() {
                            return e.license = 1,
                            t.buy(e).then(function() {
                                return !0
                            })
                        })
                    }
                    if (null === s || 0 !== n || 1 !== a || 0 === r && 0 === c) {
                        if (1 !== a || null !== s && (0 !== s || 1 !== n) || 0 === r && 0 === c)
                            return 0 === r && 0 === n ? t.buyFree(e).then(function() {
                                return !0
                            }) : Promise.resolve();
                        l = Promise.resolve()
                    } else
                        l = t.dialog.openConfirm({
                            msg: "当前字体已过期，是否重新购买？"
                        });
                    return l.then(function() {
                        return t.dialog.openFontVersion(e).then(function(i) {
                            return 0 === i.license && (0 === r || 1 === n && 0 === s) || 1 === i.license && 0 === c ? null === s ? t.buyFree(e).then(function() {
                                return !0
                            }) : Promise.resolve() : (e.license = i.license,
                            t.buy(e).then(function() {
                                return !0
                            }))
                        })
                    })
                })
            },
            buy: function(e) {
                var t = this
                  , i = e.productId
                  , o = e.name
                  , s = e.price
                  , n = e.business_price
                  , a = e.license;
                s = a ? Number(n) : s;
                var r = {
                    orderAppId: this.env.mall.buy_id,
                    signUrl: this.env.host.mall + "/api/m/order/" + (a ? "sign_business" : "sign"),
                    buyItems: [{
                        name: o || "购买字体",
                        price: s,
                        id: i,
                        type: 4
                    }]
                };
                return this.dialog.openPay(r).then(function(e) {
                    if (e.data.success) {
                        var o = {
                            productId: r.buyItems[0].id,
                            totalFee: r.buyItems[0].price,
                            outOrderId: e.data.obj.merchantOrderNo,
                            channel: "EDITOR"
                        };
                        return t.api.pay.saveOrderToBusinessCity(o).then(function(e) {
                            var o = {
                                id: i,
                                license: a,
                                price: s,
                                source: 2,
                                prodType: 3,
                                orderId: e.data.map.orderId
                            };
                            return t.api.pay.saveToMyResource(o)
                        }).then(function() {
                            return t.notifier.success("购买成功，已保存至“我的购买”"),
                            Promise.resolve()
                        }).catch(function(e) {
                            return t.notifier.fail("购买失败，请联系客服处理"),
                            Promise.reject(e)
                        })
                    }
                    return t.notifier.fail(e.data.msg || "支付失败，请稍后重试"),
                    Promise.reject()
                })
            },
            buyFree: function(e) {
                var t = this
                  , i = e.productId
                  , o = {
                    id: i,
                    license: this.disableBuyPersonalFont ? 1 : 0,
                    price: 0,
                    source: 2,
                    prodType: 3,
                    orderId: ""
                };
                return this.api.pay.saveToMyResource(o).then(function() {
                    return t.notifier.success("购买成功，已保存至“我的购买”"),
                    Promise.resolve()
                }).catch(function(e) {
                    return t.notifier.fail("购买失败，请联系客服处理"),
                    Promise.reject(e)
                })
            },
            addFavorite: function(e) {
                var t = this;
                this.api.favorite.existFavorite(e.id).then(function(i) {
                    1 === i.data.map.collectStatus ? t.notifier.info("已收藏过") : t.api.favorite.addFavorite(e.id).then(function() {
                        s.a.clearKey({
                            fileType: c.c.font,
                            tab: "love"
                        }),
                        t.notifier.success("收藏成功")
                    }).catch(function(e) {
                        return e && t.logger.error(e)
                    })
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            deleteFavorite: function(e) {
                var t = this;
                this.api.favorite.deleteFavorite([e.favoriteId]).then(function() {
                    var i = t.list.indexOf(e);
                    t.list.splice(i, 1),
                    t.notifier.success("取消收藏成功")
                }).catch(function(e) {
                    return e && t.logger.error(e)
                })
            },
            addRecently: function(e) {
                n.a.get("font").addItems(e)
            },
            close: function(e) {
                a.a.success(e)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    t.a = {
        props: {
            isOpen: Boolean
        },
        methods: {
            change: function() {
                this.$emit("onChange")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(18)
      , s = i(82)
      , n = i(4);
    t.a = {
        components: {
            BaseHeadSys: o.a,
            FontList: s.a
        },
        data: function() {
            return {
                key: "",
                info: {},
                emptyListMsg: "没有筛选结果<br>换个筛选条件再试试"
            }
        },
        computed: {
            topId: function() {
                return this.env.mall.font_id
            },
            defaultId1: function() {
                return this.env.mall.font_id_default1
            },
            defaultId2: function() {
                return this.env.mall.font_id_default2
            },
            category1: function() {
                return this.$store.state.font.category1
            },
            category2: function() {
                return this.$store.state.font.category2
            },
            category: function() {
                return this.$store.state.font.category
            },
            condition: function() {
                return {
                    category: this.category.selected.id || this.defaultId2,
                    sortBy: this.sort.selected.id,
                    priceFloor: this.price.selected.id[0],
                    priceCeiling: this.price.selected.id[1]
                }
            },
            search: function() {
                return this.$store.state.font.search
            },
            sort: function() {
                return this.$store.state.font.sort
            },
            price: function() {
                return this.$store.state.font.price
            }
        },
        watch: {
            condition: {
                handler: function(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.searchWithCondition(e)
                },
                immediate: !0
            }
        },
        created: function() {
            var e = this;
            this.category1.list.length || this.api.category.getCategoryListByTopId(this.topId).then(function(t) {
                e.$store.commit("FONT_CATEGORY1", {
                    list: t,
                    selected: t.filter(function(t) {
                        return t.id === e.defaultId1
                    })[0]
                }),
                e.$store.commit("FONT_CATEGORY2", {
                    selected: e.category2.list.filter(function(t) {
                        return t.id === e.defaultId2
                    })[0]
                })
            }).catch(function(t) {
                return t && e.logger.error(t)
            })
        },
        methods: {
            chooseCategory1: function(e) {
                this.$store.commit("FONT_CATEGORY1", {
                    selected: e
                }),
                this.$store.commit("FONT_CATEGORY2", {
                    selected: e
                })
            },
            chooseCategory2: function(e) {
                this.$store.commit("FONT_CATEGORY2", {
                    selected: e
                })
            },
            chooseSort: function(e) {
                this.$store.commit("FONT_SORT", {
                    selected: e
                })
            },
            choosePrice: function(e) {
                this.$store.commit("FONT_PRICE", {
                    selected: e
                })
            },
            showSearch: function() {
                this.$store.commit("FONT_SEARCH", {
                    show: !0
                })
            },
            hideSearch: function() {
                this.$store.commit("FONT_SEARCH", {
                    show: !1
                }),
                this.searchWithCondition(this.condition)
            },
            searchWithKeyWords: function(e) {
                var t = {
                    category: this.topId,
                    sortBy: this.sort.list[0].id,
                    priceFloor: this.price.list[0].id[0],
                    priceCeiling: this.price.list[0].id[1],
                    keyWords: e
                };
                this.searchWithCondition(t)
            },
            searchWithCondition: function(e) {
                var t = this;
                this.key = n.a.setKey(Object.assign({
                    tab: "sys"
                }, e)),
                this.info = n.a.getInfo(this.key),
                this.info.list.length || this.getNextPage(),
                setTimeout(function() {
                    return t.$refs.list.scrollToTop()
                }, 100)
            },
            getNextPage: function() {
                var e = this;
                n.a.getMoreItems(this.key).then(function() {
                    return e.$refs.list.previewFonts()
                }).catch(function(t) {
                    return t && e.logger.error(t)
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(294)
      , s = i(4)
      , n = i(14)
      , a = i(3);
    t.a = {
        components: {
            BaseContainer: o.a
        },
        created: function() {
            Object(n.b)(),
            window.addEventListener("message", this.onMessage)
        },
        destroyed: function() {
            window.removeEventListener("message", this.onMessage)
        },
        methods: {
            onMessage: function(e) {
                var t = e.data;
                null != t && "editor" === t.source && this.$router.push(t.data)
            },
            initWebsocket: function() {
                var e = this
                  , t = {
                    connecting: 0,
                    open: 1,
                    closing: 2,
                    closed: 3
                }
                  , i = this.env.host.websocket.replace("http", "ws") + "/m/print/websocket";
                !function i(o) {
                    var s = new WebSocket(o);
                    s.onopen = function(e) {
                        console.log("open:", e),
                        setInterval(function() {
                            s.readyState === t.open && s.send("1")
                        }, 5e4)
                    }
                    ,
                    s.onmessage = function(t) {
                        if (console.log("message:", t),
                        "h5" === JSON.parse(t.data).platform) {
                            var i = e.clearImgTag();
                            e.$store.commit("IMAGE_M_UPLOAD", !0, i)
                        }
                    }
                    ,
                    s.onclose = function(e) {
                        console.log("close:", e),
                        setTimeout(function() {
                            return i(o)
                        }, 2e3)
                    }
                    ,
                    s.onerror = function(e) {
                        console.log("error:", e)
                    }
                }(i)
            },
            clearImgTag: function() {
                var e = {
                    fileType: a.c.image,
                    tab: "upload",
                    tagId: void 0
                }
                  , t = s.a.setKey(e);
                return s.a.clearKey(e),
                delete e.tagId,
                s.a.clearKey(e),
                t
            }
        }
    }
}
, function(e, t, i) {
    e.exports = i(89)
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = i(5)
      , s = i.n(o)
      , n = i(90)
      , a = i(91)
      , r = i(133)
      , c = i(146)
      , l = i(147)
      , u = i(148)
      , d = (i(153),
    i(154),
    i(156),
    i(157),
    i(158),
    i(159),
    i(160),
    i(161),
    i(162),
    i(163))
      , h = (i(281),
    i(282))
      , p = i(291);
    s.a.use(n.a),
    s.a.use(a.a),
    s.a.use(r.a),
    s.a.use(c.a),
    s.a.use(l.a),
    s.a.use(u.a);
    new s.a({
        router: d.a,
        store: h.a,
        el: "#app",
        render: function(e) {
            return e(p.a)
        }
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(9);
    t.a = function(e) {
        e.logger = e.prototype.logger = o.a
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(3)
      , s = i(92)
      , n = i(97)
      , a = i(101)
      , r = i(105)
      , c = i(109)
      , l = i(115)
      , u = i(124)
      , d = i(129)
      , h = i(131);
    t.a = function(e) {
        function t(t) {
            var i = {
                component: null,
                data: null,
                params: {}
            };
            return t = Object.assign(i, t),
            new Promise(function(i, o) {
                var n = e.extend(s.a)
                  , a = new n({
                    components: {
                        cDialog: t.component
                    },
                    propsData: {
                        data: t.data,
                        params: t.params
                    },
                    destroyed: function() {
                        this.value ? i(JSON.parse(JSON.stringify(this.value))) : o()
                    }
                }).$mount();
                document.body.appendChild(a.$el)
            }
            )
        }
        function i(e) {
            return t({
                component: n.a,
                data: e
            })
        }
        function p(e) {
            return t({
                component: a.a,
                data: e
            })
        }
        function f(e) {
            return t({
                component: r.a,
                data: e
            })
        }
        function m(e) {
            return t({
                component: c.a,
                data: e
            })
        }
        function v(e) {
            return t({
                component: l.a,
                data: e,
                params: {
                    maskBackground: "rgba(0,0,0,0)"
                }
            })
        }
        function g(e) {
            var i = null;
            switch (e) {
            case o.c.music:
                i = u.a;
                break;
            case o.c.image:
                i = d.a;
                break;
            case o.c.font:
                i = h.a
            }
            return t({
                component: i
            })
        }
        e.dialog = e.prototype.dialog = {
            open: t,
            openPay: i,
            openLogin: p,
            openConfirm: f,
            openFontVersion: m,
            openMusicCrop: v,
            openAgreement: g
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(93)
    }
    var s = i(24)
      , n = i(96)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(94);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("3a959e9a", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-dialog-base,.eqc-dialog-base .mask{position:fixed;top:0;left:0;bottom:0;right:0}.eqc-dialog-base{z-index:10;animation:fade-in .3s}.eqc-dialog-base .mask{background:rgba(0,0,0,.6)}.eqc-dialog-base .content{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.eqc-dialog-base.close{animation:fade-out .3s}", ""])
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var i = [], o = {}, s = 0; s < t.length; s++) {
            var n = t[s]
              , a = n[0]
              , r = n[1]
              , c = n[2]
              , l = n[3]
              , u = {
                id: e + ":" + s,
                css: r,
                media: c,
                sourceMap: l
            };
            o[a] ? o[a].parts.push(u) : i.push(o[a] = {
                id: a,
                parts: [u]
            })
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-dialog-base"
        }, [i("div", {
            staticClass: "mask",
            style: {
                background: e.params.maskBackground
            },
            on: {
                click: function(t) {
                    e.close()
                }
            }
        }), e._v(" "), i("div", {
            staticClass: "content"
        }, [i(e.dialog, {
            tag: "component",
            attrs: {
                data: e.data,
                close: e.close
            }
        })], 1)])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(98)
    }
    var s = i(25)
      , n = i(100)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(99);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("8691d32e", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-dialog-pay{position:relative;width:600px;max-height:600px;transition:height .3s}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("iframe", {
            staticClass: "eqc-dialog-pay",
            style: e.style,
            attrs: {
                src: e.url,
                frameborder: "0",
                scrolling: "no"
            }
        })
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(102)
    }
    var s = i(26)
      , n = i(104)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(103);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("1d7d94f7", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-dialog-login{position:relative;width:600px;height:536px;background:#fff;transition:height .3s}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("iframe", {
            staticClass: "eqc-dialog-login",
            attrs: {
                src: e.url,
                frameborder: "0",
                scrolling: "no"
            }
        })
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(106)
    }
    var s = i(27)
      , n = i(108)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(107);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("2703ed22", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-dialog-confirm{width:460px;text-align:center}.eqc-dialog-confirm .content{font-size:14px;color:#76838f;margin:40px 0 50px}.eqc-dialog-confirm .foot{margin:20px 0}.eqc-dialog-confirm .foot .eqc-btn{width:90px}.eqc-dialog-confirm .foot .cancel{margin-left:7px;vertical-align:top}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-dialog eqc-dialog-confirm"
        }, [i("div", {
            staticClass: "content"
        }, [e._v(e._s(e.data.msg))]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [i("span", {
            staticClass: "eqc-btn blue h36 ok",
            on: {
                click: function(t) {
                    e.close({})
                }
            }
        }, [e._v(e._s(e.data.confirmName || "确定"))]), e._v(" "), i("span", {
            staticClass: "eqc-btn white h36 cancel",
            on: {
                click: function(t) {
                    e.close()
                }
            }
        }, [e._v(e._s(e.data.cancelName || "取消"))])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(110)
    }
    var s = i(28)
      , n = i(114)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(111);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("1a2146f4", o, !0, {})
}
, function(e, t, i) {
    var o = i(19);
    t = e.exports = i(1)(!1),
    t.push([e.i, ".material-buy-font{width:480px}.material-buy-font .body{padding:28px;display:flex;justify-content:space-between;align-items:center}.material-buy-font .body>div{width:200px;height:224px;box-shadow:0 0 4px 0 rgba(0,0,0,.16);border-radius:4px;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}.material-buy-font .body>div:hover{border:2px solid #1593ff}.material-buy-font .body>div .icon{width:60px;height:60px;margin-bottom:10px}.material-buy-font .body>div .price,.material-buy-font .body>div .title,.material-buy-font .body>div .use-now{font-size:18px;line-height:18px;margin-bottom:10px}.material-buy-font .body>div .tip{font-size:14px;color:#666;line-height:14px;margin-bottom:10px}.material-buy-font .body .person .icon{background-image:url(" + o(i(112)) + ")}.material-buy-font .body .business .icon{background-image:url(" + o(i(113)) + ")}", ""])
}
, function(e, t, i) {
    e.exports = i.p + "images/person.svg"
}
, function(e, t, i) {
    e.exports = i.p + "images/business.svg"
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "material-buy-font eqc-dialog"
        }, [i("div", {
            staticClass: "head"
        }, [i("span", {
            staticClass: "title"
        }, [e._v("请选择要使用的字体版本")]), e._v(" "), i("span", {
            staticClass: "close eqf-no",
            on: {
                click: function(t) {
                    e.close()
                }
            }
        })]), e._v(" "), i("div", {
            staticClass: "body"
        }, [i("div", {
            staticClass: "person btn",
            on: {
                click: function(t) {
                    e.close({
                        license: 0
                    })
                }
            }
        }, [i("div", {
            staticClass: "icon"
        }), e._v(" "), i("div", {
            staticClass: "title"
        }, [e._v("个人版")]), e._v(" "), i("div", {
            staticClass: "tip"
        }, [e._v("不可用于商业用途")]), e._v(" "), 0 === e.data.expStatus ? i("div", {
            staticClass: "price"
        }, [e._v(e._s(e.data.price || 0) + "卡币/年")]) : e._e(), e._v(" "), 1 === e.data.expStatus && 0 === e.data.license ? i("div", {
            staticClass: "use-now"
        }, [e._v("立即使用")]) : e._e()]), e._v(" "), i("div", {
            staticClass: "business btn",
            on: {
                click: function(t) {
                    e.close({
                        license: 1
                    })
                }
            }
        }, [i("div", {
            staticClass: "icon"
        }), e._v(" "), i("div", {
            staticClass: "title"
        }, [e._v("商用版")]), e._v(" "), i("div", {
            staticClass: "tip"
        }, [e._v("授权范围内用于商业用途")]), e._v(" "), i("div", {
            staticClass: "price"
        }, [e._v(e._s(e.data.business_price || 0) + "卡币/年")])])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(116)
    }
    var s = i(29)
      , n = i(123)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(117);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("63c38faa", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-dialog-crop{position:relative;width:960px;color:#fff;background:#212121}.eqc-dialog-crop .head{height:60px;line-height:60px;padding-left:28px;font-size:18px}.eqc-dialog-crop .body{padding:20px 28px 54px}.eqc-dialog-crop .body .name{height:72px;line-height:72px;font-size:24px}.eqc-dialog-crop .body .time{height:36px;line-height:36px;font-size:24px}.eqc-dialog-crop .body .text{height:24px;line-height:24px;font-size:14px}.eqc-dialog-crop .body .time-line{margin:24px 0 54px;background:hsla(0,0%,100%,.1)}.eqc-dialog-crop .body .time-line ul{position:relative;height:48px;border-bottom:1px solid #fff}.eqc-dialog-crop .body .time-line ul li{position:absolute;bottom:0;width:1px;height:4px;background:#fff}.eqc-dialog-crop .body .time-line ul li.long{height:8px}.eqc-dialog-crop .body .time-line ul li .time-flag{position:absolute;top:-20px;left:-15px;font-size:12px}.eqc-dialog-crop .body .time-line .bar-area{position:relative;height:80px}.eqc-dialog-crop .body .time-line .bar-area .bar-range{position:absolute;display:inline-block;height:100%;background:hsla(0,0%,100%,.2)}.eqc-dialog-crop .body .time-line .bar-area .bar{display:inline-block;position:absolute;height:100%;width:3px;border-left:1px solid #fff;cursor:ew-resize}.eqc-dialog-crop .body .time-line .bar-area .bar .slide-rect{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;width:12px;height:16px;background:#fff}.eqc-dialog-crop .body .time-line .bar-area .bar .slide-rect:after{content:"";width:6px;height:6px;border-top:1px solid #3e4858;border-bottom:1px solid #3e4858}.eqc-dialog-crop .body .time-line .bar-area .bar .slide-rect.left{left:-12px}.eqc-dialog-crop .body .time-line .bar-area .bar .slide-rect.right{left:-1px}.eqc-dialog-crop .body .time-line .bar-area .bar .slide-circle{position:absolute;left:-6px;top:-5px;width:11px;height:11px;border-radius:50%;border:2px solid #1593ff;background:#fff}.eqc-dialog-crop .body .time-line .bar-area .bar.current{border-color:#1593ff}.eqc-dialog-crop .body .info{height:36px;line-height:36px}.eqc-dialog-crop .body .info .ctrl{width:36px;height:36px;line-height:36px;font-size:38px;text-align:center;cursor:pointer}.eqc-dialog-crop .body .info .time-play{font-size:24px}.eqc-dialog-crop .body .info .time-play.current{margin-left:12px;color:#1593ff}.eqc-dialog-crop .foot{height:92px;line-height:36px;padding:28px;background:#fff}.eqc-dialog-crop .foot .desc{font-size:14px;color:#000}.eqc-dialog-crop .foot .btn{width:96px}.eqc-dialog-crop .foot .btn.ok{margin-left:16px}', ""])
}
, function(e, t, i) {
    var o = i(119);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("f6115284", o, !0, {})
}
, function(e, t, i) {
    var o = i(19);
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-loading{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;bottom:0}.eqc-loading .info{line-height:40px;text-align:center}.eqc-loading .info .icon{height:50px}.eqc-loading.light{color:#666;background:hsla(0,0%,100%,.9)}.eqc-loading.light .icon{background:url(" + o(i(120)) + ") no-repeat 50%/contain}.eqc-loading.dark{color:#fff;background:rgba(0,0,0,.2)}.eqc-loading.dark .icon{background:url(" + o(i(121)) + ") no-repeat 50%/contain}", ""])
}
, function(e, t, i) {
    e.exports = i.p + "images/puff-dark.svg"
}
, function(e, t, i) {
    e.exports = i.p + "images/puff-light.svg"
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-loading",
            class: e.theme
        }, [i("div", {
            staticClass: "info"
        }, [i("div", {
            staticClass: "icon"
        }), e._v(" "), i("p", [e._v(e._s(e.msg))])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-dialog-crop"
        }, [e._m(0), e._v(" "), i("div", {
            staticClass: "body"
        }, [i("div", {
            staticClass: "name ellipsis",
            attrs: {
                title: e.data.name
            }
        }, [e._v(e._s(e.data.name))]), e._v(" "), i("div", {
            staticClass: "time"
        }, [i("span", [e._v(e._s(e._f("formatTime")(e.startTime)) + " — " + e._s(e._f("formatTime")(e.endTime)))]), e._v(" "), i("span", {
            staticClass: "fr"
        }, [e._v(e._s(e._f("formatTime")(e.endTime - e.startTime)))])]), e._v(" "), e._m(1), e._v(" "), i("div", {
            staticClass: "time-line"
        }, [i("ul", e._l(e.shortLineArr, function(t, o) {
            return i("li", {
                key: t.time,
                class: {
                    long: t.isLong
                },
                style: {
                    left: e.margin + e.distancePerShortLine * o + "px"
                }
            }, [i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLong,
                    expression: "item.isLong"
                }],
                staticClass: "time-flag"
            }, [e._v(e._s(e._f("formatTime")(t.time)))])])
        })), e._v(" "), i("div", {
            staticClass: "bar-area"
        }, [i("div", {
            staticClass: "bar-range",
            style: e.barRangeStyle
        }), e._v(" "), i("div", {
            staticClass: "bar current",
            style: e.barCurrentStyle,
            on: {
                mousedown: function(t) {
                    t.preventDefault(),
                    e.barCurrentMove(t)
                }
            }
        }, [i("span", {
            staticClass: "slide-circle"
        })]), e._v(" "), i("div", {
            staticClass: "bar",
            style: e.barLeftStyle,
            on: {
                mousedown: function(t) {
                    t.preventDefault(),
                    e.barLeftMove(t)
                }
            }
        }, [i("span", {
            staticClass: "slide-rect left"
        })]), e._v(" "), i("div", {
            staticClass: "bar",
            style: e.barRightStyle,
            on: {
                mousedown: function(t) {
                    t.preventDefault(),
                    e.barRightMove(t)
                }
            }
        }, [i("span", {
            staticClass: "slide-rect right"
        })])])]), e._v(" "), i("div", {
            staticClass: "info"
        }, [i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.isPlayed,
                expression: "!isPlayed"
            }],
            staticClass: "ctrl fl eqf-play-f",
            on: {
                click: e.play
            }
        }), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isPlayed,
                expression: "isPlayed"
            }],
            staticClass: "ctrl fl eqf-pause-f",
            on: {
                click: e.pause
            }
        }), e._v(" "), i("span", {
            staticClass: "time-play current fl"
        }, [e._v(e._s(e._f("formatTime")(e.currentTime)))]), e._v(" "), i("span", {
            staticClass: "time-play fl"
        }, [e._v("/" + e._s(e._f("formatTime")(e.totalTime)))])])]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [i("span", {
            staticClass: "desc fl"
        }, [e._v("建议音乐有效时长控制在20秒内，场景浏览会更流畅")]), e._v(" "), i("span", {
            staticClass: "btn eqc-btn blue h36 fr ok",
            on: {
                click: e.ok
            }
        }, [e._v("确定")]), e._v(" "), i("span", {
            staticClass: "btn eqc-btn white h36 fr",
            on: {
                click: e.cancel
            }
        }, [e._v("取消")])]), e._v(" "), e.isLoading ? i("ui-loading", {
            attrs: {
                msg: "裁切中…",
                theme: "dark"
            }
        }) : e._e()], 1)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "head"
        }, [i("span", {
            staticClass: "title"
        }, [e._v("音乐裁切")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "text"
        }, [i("span", [e._v("起始时间到结束时间之外的音频会被剪掉")]), e._v(" "), i("span", {
            staticClass: "fr"
        }, [e._v("音频有效时长")])])
    }
    ]
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(32)
      , s = i(128)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(126);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("7766c92f", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-agreement{width:800px}.eqc-agreement .body{padding:0 100px;height:600px;overflow:scroll}.eqc-agreement .body .title{font-size:24px;text-align:center;line-height:4;color:#333}.eqc-agreement .body .foot{padding-right:10px;text-align:right;line-height:4;font-size:16px;color:#333}.eqc-agreement .body .strong,.eqc-agreement .body h5{line-height:2.5;font-size:16px;text-indent:28px;color:#333}.eqc-agreement .body p{line-height:2;text-indent:28px;color:#666}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            staticClass: "eqc-dialog eqc-agreement"
        }, [e._t("head"), e._v(" "), e._t("body")], 2)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("dialog-agreement", [i("div", {
            staticClass: "head",
            attrs: {
                slot: "head"
            },
            slot: "head"
        }, [i("span", {
            staticClass: "title"
        }, [e._v("卡美美音乐版权许可与服务协议")]), e._v(" "), i("span", {
            staticClass: "close eqf-no",
            on: {
                click: e.close
            }
        })]), e._v(" "), i("div", {
            staticClass: "body",
            attrs: {
                slot: "body"
            },
            slot: "body"
        }, [i("div", {
            staticClass: "title"
        }, [e._v("卡美美音乐版权许可与服务协议")]), e._v(" "), i("h5", [e._v("第一条 音乐版权声明")]), e._v(" "), i("p", [e._v("卡美美平台音乐库中所有收费音乐素材均是经版权方合法授权的素材，其知识产权和所有权归版权方所有。用户须购买后方可享有有限使用权。")]), e._v(" "), i("h5", [e._v("第二条 授权使用方式")]), e._v(" "), i("p", [e._v("卡美美提供的音乐授权方式是有限使用权。用户付费购买前，仅享有在线试听权，用户只有在付费购买后，才享有音乐使用授权；音乐的使用权是非排他性的、全球性的、单用户的使用权，不受使用次数的限制，使用权不可转让。")]), e._v(" "), i("p", [e._v("用户只有完成付款后，才能按照本协议的约定获得音乐的有限使用权，否则，音乐的使用授权不成立。")]), e._v(" "), i("h5", [e._v("第三条 授权使用范围")]), e._v(" "), i("p", [e._v("卡美美平台提供的收费音乐仅供用户付费后在卡美美平台（编辑器）内使用并通过各种途径对在卡美美场景中所创作的设计作品进行传播。用户不得用于卡美美平台以外的其他范围或项目，不得将付费后的音乐用于任何违法场合、包括但不限于违法的宣传品。")]), e._v(" "), i("h5", [e._v("第四条 授权使用期限")]), e._v(" "), i("p", [e._v("音乐的授权使用期限为1年。用户自完成付费之日起算1年内享受本协议第二条和第三条约定的使用权限；授权到期后，用户如需继续使用音乐版权，须重新付费购买。")]), e._v(" "), i("h5", [e._v("第五条 权利与义务")]), e._v(" "), i("p", [e._v("用户有权利按照本协议的约定许可条件，合理的使用音乐素材版权，并遵守《中华人名共和国著作权法》等相关法律法规的规定，未经授权任何单位和个人不得非法复制、转载或以其他任何方式使用，否则产生的一切法律责任和后果均由侵权方承担。")]), e._v(" "), i("h5", [e._v("第六条 法律风险声明")]), e._v(" "), i("p", [e._v("卡美美平台为用户提供自主上传音频素材的通道和入口，允许用户添加合法的音频外链，鼓励用户上传和使用原创优质音频素材，同时鼓励用户使用卡美美平台所提供的素材。如因用户的作品内容或使用的素材被他人投诉或第三方公司向卡美美公司提出异议，卡美美公司有权下架、删除有关作品信息和素材内容且不承担任何责任。")]), e._v(" "), i("p", [e._v("同时，用户对自主上传的音频素材和音频外链侵权风险承担全部责任，即用户因未经版权方授权进行上传和使用第三方平台或版权方的音频素材而引发的任何侵权纠纷事件，以及情节较为严重的经济索赔责任，均由用户全部承担，卡美美公司不承担任何责任。")]), e._v(" "), i("p", {
            staticClass: "strong"
        }, [e._v("故用户须谨慎上传和使用版权来源不明确的任何音频素材和外链。")]), e._v(" "), i("h5", [e._v("第七条 协议生效及其他")]), e._v(" "), i("p", [e._v("本协议是用户与北京中网卡美美科技有限公司之间关于用户在卡美美平台上使用音乐授权等相关服务所签订的一份具有法律效力的协议。用户在购买音乐版权前，须充分阅读和理解、同意并遵守本协议有关条款的内容，否则用户无权购买和使用。")]), e._v(" "), i("p", [e._v("用户完成付费购买的行为视为已经充分理解和同意本协议。在此协议发布之前，已经完成音乐版权购买的用户，须在本协议约定的条件和范围内使用音乐版权等有关服务。")]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [e._v("卡美美公司")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(33)
      , s = i(130)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("dialog-agreement", [i("div", {
            staticClass: "head",
            attrs: {
                slot: "head"
            },
            slot: "head"
        }, [i("span", {
            staticClass: "title"
        }, [e._v("卡美美图片版权许可与服务协议")]), e._v(" "), i("span", {
            staticClass: "close eqf-no",
            on: {
                click: e.close
            }
        })]), e._v(" "), i("div", {
            staticClass: "body",
            attrs: {
                slot: "body"
            },
            slot: "body"
        }, [i("div", {
            staticClass: "title"
        }, [e._v("卡美美图片版权许可与服务协议")]), e._v(" "), i("h5", [e._v("第一条 图片版权声明")]), e._v(" "), i("p", [e._v("卡美美平台图片库中所有收费图片素材均是经版权方合法授权的素材，其知识产权和所有权归版权方所有。用户须购买后方可享有有限使用权。")]), e._v(" "), i("h5", [e._v("第二条 授权使用方式")]), e._v(" "), i("p", [e._v("卡美美提供的图片授权是免版税金（RF, Royalty-Free）使用图片版权的方式。用户购买图片使用授权后，图片的使用权是非排他性的、全球性的、单用户的使用权，不受使用次数的限制，使用权不可转让。")]), e._v(" "), i("p", [e._v("用户只有完成付款后，才能按照本协议的约定获得图片的有限使用权，否则，图片的使用授权不成立。")]), e._v(" "), i("h5", [e._v("第三条 授权使用范围")]), e._v(" "), i("p", [e._v("卡美美平台提供的收费图片仅供用户付费后在卡美美平台（编辑器）内使用并通过各种途径对在卡美美场景中所创作的设计作品进行传播。用户不得用于卡美美平台以外的其他范围或项目，不得将付费后的图片用在需要正式注册的商标或服务标志上，不得将图片用于其他任何违法场合、包括违法的宣传品等。")]), e._v(" "), i("h5", [e._v("第四条 授权使用期限")]), e._v(" "), i("p", [e._v("图片的授权使用期限为1年。用户自完成付费之日起算1年内享受本协议第二条和第三条约定的使用权限；授权到期后，用户如需继续使用图片版权，须重新付费购买。")]), e._v(" "), i("h5", [e._v("第五条 权利与义务")]), e._v(" "), i("p", [e._v("用户有权利按照本协议的约定许可条件，合理的使用图片素材版权，并遵守《中华人名共和国著作权法》等相关法律法规的规定，未经授权任何单位和个人不得非法复制、转载或以其他任何方式使用，否则产生的一切法律责任和后果均由侵权方承担。")]), e._v(" "), i("h5", [e._v("第六条 法律风险声明")]), e._v(" "), i("p", [e._v("卡美美平台为用户提供自主上传图片素材的通道和入口，鼓励用户上传和使用原创优质素材，鼓励用户使用卡美美平台所提供的素材。如因用户的作品内容或使用的素材被他人投诉或第三方公司向卡美美公司提出异议，卡美美公司有权下架、删除有关作品信息和素材内容且不承担任何责任。")]), e._v(" "), i("p", [e._v("同时，用户对自主上传的图片素材侵权风险承担全部责任，即用户因未经版权方授权进行上传和使用第三方平台或版权方的图片素材而引发的任何侵权纠纷事件，以及情节较为严重的经济索赔责任，均由用户全部承担，卡美美公司不承担任何责任。")]), e._v(" "), i("p", {
            staticClass: "strong"
        }, [e._v("故用户须谨慎上传和使用版权来源不明确的任何图片素材。\n        ")]), i("h5", [e._v("第七条 协议生效及其他")]), e._v(" "), i("p", [e._v("本协议是用户与北京中网卡美美科技有限公司之间关于用户在卡美美平台上使用图片授权等相关服务所签订的一份具有法律效力的协议。用户在购买图片版权前，须充分阅读和理解、同意并遵守本协议有关条款的内容，否则用户无权购买和使用。")]), e._v(" "), i("p", [e._v("用户完成付费购买的行为视为已经充分理解和同意本协议。在此协议发布之前，已经完成图片版权购买的用户，须在本协议约定的条件和范围内使用图片版权等有关服务。")]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [e._v("卡美美公司")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(34)
      , s = i(132)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("dialog-agreement", [i("div", {
            staticClass: "head",
            attrs: {
                slot: "head"
            },
            slot: "head"
        }, [i("span", {
            staticClass: "title"
        }, [e._v("卡美美字体版权许可与服务协议")]), e._v(" "), i("span", {
            staticClass: "close eqf-no",
            on: {
                click: e.close
            }
        })]), e._v(" "), i("div", {
            staticClass: "body",
            attrs: {
                slot: "body"
            },
            slot: "body"
        }, [i("div", {
            staticClass: "title"
        }, [e._v("卡美美字体版权许可与服务协议")]), e._v(" "), i("h5", [e._v("第一条 字体版权声明")]), e._v(" "), i("p", [e._v("卡美美平台字体库中所有字体素材（默认字体和公开永久免费的字体除外，下同）均是经版权方合法授权的素材，其知识产权和所有权归版权方所有。用户须购买后方可享有有限使用权。")]), e._v(" "), i("h5", [e._v("第二条 授权使用方式")]), e._v(" "), i("p", [e._v("卡美美提供的字体授权方式是有限使用权。用户付费购买字体使用授权后，对字体的使用权是非独占性的，不受使用次数的限制，字体的使用权不可转让。")]), e._v(" "), i("p", [e._v("用户只有完成付款后，才能按照本协议的约定获得字体的有限使用权，否则，字体的使用授权不成立。")]), e._v(" "), i("p", [e._v("个人用户购买属于非商业授权，适用于个人场景的制作和推广；企业用户购买授权，在本协议的授权范围内允许以直接营利或者间接营利为目的商业行为。")]), e._v(" "), i("h5", [e._v("第三条 授权使用范围")]), e._v(" "), i("p", [e._v("卡美美平台提供的所有字体仅供用户付费后在卡美美平台（编辑器）内使用并通过各种途径对在卡美美场景中所创作的设计作品进行传播。用户不得用于卡美美平台之外的其他范围或项目，不得将付费后的字体用于具有商业目的的复制、发行、展览等。")]), e._v(" "), i("p", [e._v("无论是个人还是企业用户均不得对卡美美平台的字体进行复制、修改、仿制、反编译、反汇编、转换、翻译、拆分，或以其它方式非法获取源代码；不得将字体直接、格式转换或修改后用于网站、企业名称、商标、广告等形式和范围。")]), e._v(" "), i("h5", [e._v("第四条 授权使用期限")]), e._v(" "), i("p", [e._v("字体的授权使用期限为1年。用户自完成付费之日起算1年内享受本协议第二条和第三条约定的使用权限；授权到期后，用户如需继续使用字体版权，须重新付费购买。")]), e._v(" "), i("h5", [e._v("第五条 权利与义务")]), e._v(" "), i("p", [e._v("用户有权利按照本协议的约定许可条件，合理的使用字体素材版权，并遵守《中华人名共和国著作权法》等相关法律法规的规定，未经授权任何单位和个人不得非法复制或以其他任何方式使用，否则产生的一切法律责任和后果均由侵权方承担。")]), e._v(" "), i("h5", [e._v("第六条 协议生效及其他")]), e._v(" "), i("p", [e._v("本协议是用户与北京中网卡美美科技有限公司之间关于用户在卡美美平台上使用字体授权等相关服务所签订的一份具有法律效力的协议。用户在购买字体版权前，须充分阅读和理解、同意并遵守本协议有关条款的内容，否则用户无权购买和使用。")]), e._v(" "), i("p", [e._v("用户完成付费购买的行为视为已经充分理解和同意本协议。在此协议发布之前，已经完成字体版权购买的用户，须在本协议约定的条件和范围内使用字体版权等有关服务。")]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [e._v("卡美美公司")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(134)
      , s = i(138)
      , n = i(139)
      , a = i(140)
      , r = i(141)
      , c = i(142)
      , l = i(143)
      , u = i(144)
      , d = i(145);
    t.a = function(e) {
        var t = {
            category: o.a,
            product: s.a,
            favorite: n.a,
            file: a.a,
            user: r.a,
            audio: c.a,
            pay: l.a,
            banner: u.a,
            tag: d.a
        };
        e.api = e.prototype.api = t
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        return Object(a.a)({
            method: "GET",
            url: n.b.mall + "/api/category/getCategoryListByTopId",
            params: {
                id: e
            }
        }).then(function(t) {
            if (!r[e]) {
                r[e] = [{
                    id: e,
                    name: "全部"
                }];
                var i = {};
                t.data.list.forEach(function(t) {
                    t.parentId === e ? r[e].push(t) : (i[t.parentId] || (i[t.parentId] = []),
                    i[t.parentId].push(t))
                }),
                r[e].forEach(function(e) {
                    e.list = i[e.id] || []
                })
            }
            return r[e]
        })
    }
    var s = i(6)
      , n = (i.n(s),
    i(7))
      , a = i(14)
      , r = {};
    t.a = {
        getCategoryListByTopId: o
    }
}
, function(e, t) {
    e.exports = {
        host: {
            cdn: "//m.daxitie.com",
            client: "//www.eqxiu.com",
            pay: "//www.eqxiu.com",
            server: "//m.daxitie.com",
            passport: "//m.daxitie.com",
            server_1: "//m.daxitie.com",
            mall: "//m.daxitie.com",
            file: "//album.h5.kameimei.cn/",
            font: "//font.eqh5.com",
            websocket: "//p1.kameimei.cn"
        },
        mall: {
            buy_id: 10002,
            font_id: 890726,
            music_id: 890727,
            sound_id: 890728,
            image_id: 890729,
            shape_id: 891072,
            image_id_default1: 890929,
            image_id_default2: 890930,
            shape_id_default1: 891073,
            shape_id_default2: 891076,
            background_id_default1: 890810,
            background_id_default2: 890810,
            music_id_default1: 890767,
            music_id_default2: 890935,
            sound_id_default1: 890932,
            sound_id_default2: 890933,
            font_id_default1: 890732,
            font_id_default2: 890934
        }
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(35)
      , s = i(36)
      , n = {
        brackets: function(e) {
            return e + "[]"
        },
        indices: function(e, t) {
            return e + "[" + t + "]"
        },
        repeat: function(e) {
            return e
        }
    }
      , a = Date.prototype.toISOString
      , r = {
        delimiter: "&",
        encode: !0,
        encoder: o.encode,
        encodeValuesOnly: !1,
        serializeDate: function(e) {
            return a.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    }
      , c = function e(t, i, s, n, a, c, l, u, d, h, p, f) {
        var m = t;
        if ("function" == typeof l)
            m = l(i, m);
        else if (m instanceof Date)
            m = h(m);
        else if (null === m) {
            if (n)
                return c && !f ? c(i, r.encoder) : i;
            m = ""
        }
        if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || o.isBuffer(m)) {
            if (c) {
                return [p(f ? i : c(i, r.encoder)) + "=" + p(c(m, r.encoder))]
            }
            return [p(i) + "=" + p(String(m))]
        }
        var v = [];
        if (void 0 === m)
            return v;
        var g;
        if (Array.isArray(l))
            g = l;
        else {
            var y = Object.keys(m);
            g = u ? y.sort(u) : y
        }
        for (var b = 0; b < g.length; ++b) {
            var x = g[b];
            a && null === m[x] || (v = Array.isArray(m) ? v.concat(e(m[x], s(i, x), s, n, a, c, l, u, d, h, p, f)) : v.concat(e(m[x], i + (d ? "." + x : "[" + x + "]"), s, n, a, c, l, u, d, h, p, f)))
        }
        return v
    };
    e.exports = function(e, t) {
        var i = e
          , a = t ? o.assign({}, t) : {};
        if (null !== a.encoder && void 0 !== a.encoder && "function" != typeof a.encoder)
            throw new TypeError("Encoder has to be a function.");
        var l = void 0 === a.delimiter ? r.delimiter : a.delimiter
          , u = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling : r.strictNullHandling
          , d = "boolean" == typeof a.skipNulls ? a.skipNulls : r.skipNulls
          , h = "boolean" == typeof a.encode ? a.encode : r.encode
          , p = "function" == typeof a.encoder ? a.encoder : r.encoder
          , f = "function" == typeof a.sort ? a.sort : null
          , m = void 0 !== a.allowDots && a.allowDots
          , v = "function" == typeof a.serializeDate ? a.serializeDate : r.serializeDate
          , g = "boolean" == typeof a.encodeValuesOnly ? a.encodeValuesOnly : r.encodeValuesOnly;
        if (void 0 === a.format)
            a.format = s.default;
        else if (!Object.prototype.hasOwnProperty.call(s.formatters, a.format))
            throw new TypeError("Unknown format option provided.");
        var y, b, x = s.formatters[a.format];
        "function" == typeof a.filter ? (b = a.filter,
        i = b("", i)) : Array.isArray(a.filter) && (b = a.filter,
        y = b);
        var w = [];
        if ("object" != typeof i || null === i)
            return "";
        var _;
        _ = a.arrayFormat in n ? a.arrayFormat : "indices"in a ? a.indices ? "indices" : "repeat" : "indices";
        var T = n[_];
        y || (y = Object.keys(i)),
        f && y.sort(f);
        for (var C = 0; C < y.length; ++C) {
            var q = y[C];
            d && null === i[q] || (w = w.concat(c(i[q], q, T, u, d, h ? p : null, b, f, m, v, x, g)))
        }
        var S = w.join(l)
          , E = !0 === a.addQueryPrefix ? "?" : "";
        return S.length > 0 ? E + S : ""
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(35)
      , s = Object.prototype.hasOwnProperty
      , n = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        decoder: o.decode,
        delimiter: "&",
        depth: 5,
        parameterLimit: 1e3,
        plainObjects: !1,
        strictNullHandling: !1
    }
      , a = function(e, t) {
        for (var i = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, r = o.split(t.delimiter, a), c = 0; c < r.length; ++c) {
            var l, u, d = r[c], h = d.indexOf("]="), p = -1 === h ? d.indexOf("=") : h + 1;
            -1 === p ? (l = t.decoder(d, n.decoder),
            u = t.strictNullHandling ? null : "") : (l = t.decoder(d.slice(0, p), n.decoder),
            u = t.decoder(d.slice(p + 1), n.decoder)),
            s.call(i, l) ? i[l] = [].concat(i[l]).concat(u) : i[l] = u
        }
        return i
    }
      , r = function(e, t, i) {
        for (var o = t, s = e.length - 1; s >= 0; --s) {
            var n, a = e[s];
            if ("[]" === a)
                n = [],
                n = n.concat(o);
            else {
                n = i.plainObjects ? Object.create(null) : {};
                var r = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a
                  , c = parseInt(r, 10);
                !isNaN(c) && a !== r && String(c) === r && c >= 0 && i.parseArrays && c <= i.arrayLimit ? (n = [],
                n[c] = o) : n[r] = o
            }
            o = n
        }
        return o
    }
      , c = function(e, t, i) {
        if (e) {
            var o = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
              , n = /(\[[^[\]]*])/
              , a = /(\[[^[\]]*])/g
              , c = n.exec(o)
              , l = c ? o.slice(0, c.index) : o
              , u = [];
            if (l) {
                if (!i.plainObjects && s.call(Object.prototype, l) && !i.allowPrototypes)
                    return;
                u.push(l)
            }
            for (var d = 0; null !== (c = a.exec(o)) && d < i.depth; ) {
                if (d += 1,
                !i.plainObjects && s.call(Object.prototype, c[1].slice(1, -1)) && !i.allowPrototypes)
                    return;
                u.push(c[1])
            }
            return c && u.push("[" + o.slice(c.index) + "]"),
            r(u, t, i)
        }
    };
    e.exports = function(e, t) {
        var i = t ? o.assign({}, t) : {};
        if (null !== i.decoder && void 0 !== i.decoder && "function" != typeof i.decoder)
            throw new TypeError("Decoder has to be a function.");
        if (i.ignoreQueryPrefix = !0 === i.ignoreQueryPrefix,
        i.delimiter = "string" == typeof i.delimiter || o.isRegExp(i.delimiter) ? i.delimiter : n.delimiter,
        i.depth = "number" == typeof i.depth ? i.depth : n.depth,
        i.arrayLimit = "number" == typeof i.arrayLimit ? i.arrayLimit : n.arrayLimit,
        i.parseArrays = !1 !== i.parseArrays,
        i.decoder = "function" == typeof i.decoder ? i.decoder : n.decoder,
        i.allowDots = "boolean" == typeof i.allowDots ? i.allowDots : n.allowDots,
        i.plainObjects = "boolean" == typeof i.plainObjects ? i.plainObjects : n.plainObjects,
        i.allowPrototypes = "boolean" == typeof i.allowPrototypes ? i.allowPrototypes : n.allowPrototypes,
        i.parameterLimit = "number" == typeof i.parameterLimit ? i.parameterLimit : n.parameterLimit,
        i.strictNullHandling = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : n.strictNullHandling,
        "" === e || null === e || void 0 === e)
            return i.plainObjects ? Object.create(null) : {};
        for (var s = "string" == typeof e ? a(e, i) : e, r = i.plainObjects ? Object.create(null) : {}, l = Object.keys(s), u = 0; u < l.length; ++u) {
            var d = l[u]
              , h = c(d, s[d], i);
            r = o.merge(r, h, i)
        }
        return o.compact(r)
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        var t = e.category
          , i = e.sortBy
          , o = e.priceFloor
          , s = e.priceCeiling
          , n = e.keyWords
          , a = e.pageNo
          , r = e.pageSize
          , c = {
            category: t,
            sortBy: i,
            priceFloor: o,
            priceCeiling: s,
            keyWords: n,
            pageNo: a,
            pageSize: r
        };
        return "" === c.keyWords && delete c.keyWords,
        Object(p.a)({
            method: "GET",
            url: h.b.mall + "/api/product/cat/listProdByParam",
            params: c
        })
    }
    function s(e) {
        var t = e.fileType
          , i = e.pageNo
          , o = e.pageSize
          , s = {
            fileType: t,
            pageNo: i,
            pageSize: o
        };
        return u.a.get(h.b.server + "/m/material/user/list/buy", {
            params: s
        })
    }
    function n(e) {
        var t = e.pageNo
          , i = e.pageSize
          , o = {
            pageNo: t,
            pageSize: i
        };
        return u.a.get(h.b.server + "/m/font/my", {
            params: o
        })
    }
    function a(e) {
        var t = e.pageNo
          , i = e.pageSize
          , o = {
            pageNo: t,
            pageSize: i
        };
        return u.a.get(h.b.server + "/m/font/my/buy/list", {
            params: o
        })
    }
    function r(e, t) {
        return u.a.post(h.b.server + "/m/font/update/" + e + "/" + t)
    }
    function c(e, t) {
        return u.a.get(h.b.server + "/m/font/sale/status", {
            params: {
                fontId: e,
                productId: t
            }
        })
    }
    var l = i(6)
      , u = i.n(l)
      , d = i(13)
      , h = (i.n(d),
    i(7))
      , p = i(14);
    t.a = {
        getProducts: o,
        getBuyFiles: s,
        getMyFonts: n,
        getBuyFonts: a,
        changeFontStatus: r,
        getFontStatus: c
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        var t = e.attrGroupId
          , i = e.platform
          , o = void 0 === i ? 0 : i
          , s = e.pageNo
          , n = e.pageSize
          , a = {
            attrGroupId: t,
            platform: o,
            pageNo: s,
            pageSize: n
        };
        return c.a.get(d.b.mall + "/api/m/favorite/get-favorite-list-groupId", {
            params: a
        })
    }
    function s(e) {
        return c.a.post(d.b.mall + "/api/m/favorite/add-favorite", {
            productId: e
        })
    }
    function n(e) {
        return c.a.post(d.b.mall + "/api/m/favorite/delete-favorite", u.a.stringify({
            ids: e
        }, {
            arrayFormat: "brackets"
        }))
    }
    function a(e) {
        return c.a.get(d.b.mall + "/api/m/favorite/check-collect", {
            params: {
                productId: e
            }
        })
    }
    var r = i(6)
      , c = i.n(r)
      , l = i(13)
      , u = i.n(l)
      , d = i(7);
    t.a = {
        getFavorites: o,
        addFavorite: s,
        deleteFavorite: n,
        existFavorite: a
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        var t = e.fileType
          , i = e.tagId
          , o = e.pageNo
          , s = e.pageSize
          , n = {
            fileType: t,
            tagId: i,
            pageNo: o,
            pageSize: s
        };
        return i || delete n.tagId,
        l.a.get(u.b.server + "/m/material/user/list/upload", {
            params: n
        })
    }
    function s(e) {
        return l.a.post(u.b.server + "/m/base/file/uptokens?type=" + e).then(function(e) {
            return e.data.map ? e.data.map.token : Promise.reject()
        })
    }
    function n(e) {
        return l.a.post(u.b.server + "/m/base/file/info/save", e)
    }
    function a(e, t) {
        console.log('e', e,'t', t);
        return l.a.post(u.b.server + "/m/base/file/delete", h.a.stringify({
            id: e,
            backup: t
        }, {
            arrayFormat: "repeat"
        }))
    }
    function r(e, t) {
        return l.a.post(u.b.server + "/m/e/material/word/to/audio", {
            content: e,
            fileType: t
        })
    }
    var c = i(6)
      , l = i.n(c)
      , u = i(7)
      , d = i(13)
      , h = i.n(d);
    t.a = {
        getUploadFiles: o,
        getUploadToken: s,
        uploadFile: n,
        deleteFiles: a,
        wordToSound: r
    }
}
, function(e, t, i) {
    "use strict";
    function o() {
        return n.a.get(a.b.passport + "/account/info")
    }
    var s = i(6)
      , n = i.n(s)
      , a = i(7);
    t.a = {
        getUserInfo: o
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        return c()({
            method: "GET",
            url: l.b.server + "/m/scene/audio/cut/info",
            params: {
                id: e
            }
        })
    }
    function s(e, t, i) {
        return c.a.post(l.b.server + "/m/scene/audio/transfer?path=" + e + "&start=" + t + "&duration=" + i)
    }
    function n(e) {
        return new Promise(function(t, i) {
            var o = 0;
            !function e(s) {
                if (++o > 30)
                    return void i();
                c.a.get(l.b.server + "/m/scene/audio/status?pid=" + s).then(function(o) {
                    switch (o.data.map.code) {
                    case 0:
                        t(o.data.map.path);
                        break;
                    case 1:
                    case 2:
                        setTimeout(function() {
                            e(s)
                        }, 2e3);
                        break;
                    case 3:
                    case 4:
                    default:
                        i()
                    }
                }).catch(function(e) {
                    return i(e)
                })
            }(e)
        }
        )
    }
    function a(e) {
        return c.a.post(l.b.server + "/m/scene/audio/cut/save", e)
    }
    var r = i(6)
      , c = i.n(r)
      , l = i(7);
    t.a = {
        getCropInfo: o,
        crop: s,
        pollingStatus: n,
        saveCropInfo: a
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        return l.a.post(u.b.mall + "/api/m/order/checkPurchase", {
            productId: e
        })
    }
    function s(e, t) {
        return l.a.post(u.b.server + "/m/material/user/buyList/reset", {
            fileType: e,
            fileInfo: JSON.stringify(t)
        })
    }
    function n(e) {
        return l.a.post(u.b.mall + "/api/m/order/save", e, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    function a(e) {
        return l.a.post(u.b.mall + "/api/m/asyncOrderCallback/callback", e).then(function(e) {
            return r(e.data.map.id)
        })
    }
    function r(e) {
        return new Promise(function(t, i) {
            var o = 0;
            !function e(s) {
                if (++o > 15)
                    return void i();
                l.a.post(u.b.mall + "/api/m/asyncOrderCallback/isOrderCallbackSuccessById", {
                    id: s
                }).then(function(o) {
                    switch (o.data.map.status) {
                    case 0:
                        setTimeout(function() {
                            e(s)
                        }, 1e3);
                        break;
                    case 1:
                        t(o);
                        break;
                    case 2:
                    default:
                        i()
                    }
                }).catch(function(e) {
                    return i(e)
                })
            }(e)
        }
        )
    }
    var c = i(6)
      , l = i.n(c)
      , u = i(7);
    t.a = {
        checkPurchased: o,
        checkProductExist: s,
        saveOrderToBusinessCity: n,
        saveToMyResource: a,
        getOrderStatus: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        return Object(a.a)({
            method: "GET",
            url: n.b.server_1 + "/eqs/banners",
            params: {
                pageCode: e
            }
        })
    }
    var s = i(6)
      , n = (i.n(s),
    i(7))
      , a = i(14);
    t.a = {
        getBanners: o
    }
}
, function(e, t, i) {
    "use strict";
    function o() {
        return u()({
            method: "GET",
            url: d.b.server + "/m/base/file/tag/my"
        })
    }
    function s(e) {
        return u.a.post(d.b.server + "/m/base/file/tag/create", {
            tagName: e
        })
    }
    function n(e, t) {
        return u.a.post(d.b.server + "/m/base/file/tag/set", p.a.stringify({
            tagId: e,
            fileIds: t
        }, {
            arrayFormat: "repeat"
        }))
    }
    function a(e, t) {
        return u.a.post(d.b.server + "/m/base/file/tag/modify", {
            tagId: e,
            tagName: t
        })
    }
    function r(e) {
        return u.a.post(d.b.server + "/m/base/file/tag/delete", {
            id: e
        })
    }
    function c(e, t) {
        return u.a.post(d.b.server + "/m/base/file/tag/unset", p.a.stringify({
            tagId: e,
            fileIds: t
        }, {
            arrayFormat: "repeat"
        }))
    }
    var l = i(6)
      , u = i.n(l)
      , d = i(7)
      , h = i(13)
      , p = i.n(h);
    t.a = {
        getTags: o,
        addTag: s,
        addToTag: n,
        editTag: a,
        deleteTag: r,
        clearTag: c
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(7);
    t.a = function(e) {
        e.env = e.prototype.env = o.a
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(3);
    t.a = function(e) {
        e.enum = e.prototype.enum = o.b
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t) {
        var i = Vue.extend(c.a)
          , o = new i({
            propsData: {
                type: e,
                msg: t
            }
        }).$mount();
        document.body.appendChild(o.$el)
    }
    function s(e) {
        o("success", e)
    }
    function n(e) {
        o("fail", e)
    }
    function a(e) {
        o("info", e)
    }
    function r(e) {
        o("warn", e)
    }
    var c = i(149);
    t.a = function(e) {
        e.notifier = e.prototype.notifier = {
            success: s,
            fail: n,
            info: a,
            warn: r
        }
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(150)
    }
    var s = i(38)
      , n = i(152)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(151);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("b3d41ebe", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-notifier{position:fixed;top:50px;left:50%;height:36px;line-height:36px;box-shadow:0 0 16px 0 rgba(0,0,0,.16);border-radius:3px;background:#fff;z-index:11;transform:translateX(-50%);animation:fade-in .3s}.eqc-notifier .icon{margin:10px;font-size:16px}.eqc-notifier .close{margin:8px;font-size:20px;color:#666;transition:all .3s;cursor:pointer}.eqc-notifier .close:hover{color:#ff296a}.eqc-notifier.success{color:#1bc7b1}.eqc-notifier.fail{color:#ff296a}.eqc-notifier.info{color:#1593ff}.eqc-notifier.warn{color:#f89300}.eqc-notifier.close{animation:fade-out .3s}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-notifier",
            class: e.type
        }, [i("i", {
            staticClass: "icon fl",
            class: e.iconClass
        }), e._v(" "), i("span", [e._v(e._s(e.msg))]), e._v(" "), i("span", {
            staticClass: "close fr eqf-no",
            on: {
                click: e.close
            }
        })])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        Qiniu.uploader({
            runtimes: "html5,flash,html4",
            browse_button: e.uploadBtn,
            uptoken_url: a.b.server + "/m/base/file/uptoken?type=image",
            uptoken: e.token,
            unique_names: !0,
            domain: "//qiniu-plupload.qiniudn.com/",
            container: e.uploadCon,
            max_file_size: "10mb",
            max_retries: 3,
            dragdrop: !0,
            chunk_size: "5mb",
            drop_element: e.uploadCon,
            filters: {
                mime_types: [{
                    title: "Image files",
                    extensions: e.extensions
                }]
            },
            auto_start: !0,
            init: {
                FilesAdded: function(t, i) {
                    var o = !1
                      , s = !1;
                    i.forEach(function(i) {
                        c.a.getUnicodeLength(i.name) >= 50 && (t.removeFile(i),
                        o = !0),
                        i.size / 1024 / 1024 > e.maxFileSize && (t.removeFile(i),
                        s = !0)
                    }),
                    o && n.a.notifier.warn("文件名称限制在50个字符内"),
                    s && n.a.notifier.warn("文件大小限制在" + e.maxFileSize + "M内"),
                    e.maxCount && i.length > e.maxCount && (i.forEach(function(e) {
                        t.removeFile(e)
                    }),
                    n.a.notifier.warn("文件个数限制在 " + e.maxCount + "个内")),
                    "function" == typeof e.onFilesAdded && e.onFilesAdded(t, i)
                },
                BeforeUpload: function(t, i) {
                    "function" == typeof e.onBeforeUpload && e.onBeforeUpload(t, i)
                },
                UploadProgress: function(t, i) {
                    "function" == typeof e.onUploadProgress && e.onUploadProgress(t, i)
                },
                UploadComplete: function() {
                    "function" == typeof e.onUploadComplete && e.onUploadComplete()
                },
                FileUploaded: function(t, i, o) {
                    "function" == typeof e.onFileUploaded && e.onFileUploaded(t, i, o)
                },
                Error: function(t, i, o) {
                    i && -600 === i.code && this.notifier.warn("超出文件上传大小最大限制（3mb）"),
                    "function" == typeof e.onError && e.onError(t, i, o)
                },
                Key: function(e, t) {}
            }
        })
    }
    var s = i(5)
      , n = i.n(s)
      , a = i(7)
      , r = i(39)
      , c = i(21)
      , l = i(9)
      , u = function() {
        function e(e, t) {
            var i = []
              , o = !0
              , s = !1
              , n = void 0;
            try {
                for (var a, r = e[Symbol.iterator](); !(o = (a = r.next()).done) && (i.push(a.value),
                !t || i.length !== t); o = !0)
                    ;
            } catch (e) {
                s = !0,
                n = e
            } finally {
                try {
                    !o && r.return && r.return()
                } finally {
                    if (s)
                        throw n
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    n.a.directive("upload", {
        bind: function(e, t) {
            var i = {
                tokenType: "image",
                extensions: "jpg,gif,png,jpeg",
                uploadBtn: "",
                uploadCon: "",
                maxFileSize: 3,
                maxCount: 10
            }
              , s = Object.assign(i, t.value);
            Promise.all([n.a.api.file.getUploadToken(s.tokenType), r.a.delayLoadJSAndCSS("//m.daxitie.com/static/js/qiniu.min.js").then(function() {
                return r.a.delayLoadJSAndCSS("//m.daxitie.com/static/js/plupload/2.1.8/plupload.full.min.js")
            })]).then(function(e) {
                var t = u(e, 1)
                  , i = t[0];
                s.token = i,
                o(s)
            }).catch(function(e) {
                return e && l.a.error(e)
            })
        }
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(155);
    s.a.directive("scrollBar", {
        bind: function(e, t) {
            t.value = t.value || {},
            e.style.overflow = "hidden";
            var i = {};
            "function" == typeof t.value.onScrollEnd && (i.onScrollEnd = t.value.onScrollEnd),
            e.myScroll = new n.a(e,i),
            s.a.nextTick(function() {
                return e.myScroll.refresh()
            })
        },
        componentUpdated: function(e) {
            s.a.nextTick(function() {
                return e.myScroll.refresh()
            })
        },
        unbind: function(e) {
            e.myScroll.destroy(),
            e.myScroll = null,
            delete e.myScroll
        }
    })
}
, function(e, t, i) {
    "use strict";
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var s = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, i, o) {
            return i && e(t.prototype, i),
            o && e(t, o),
            t
        }
    }()
      , n = function() {
        function e(t, i) {
            o(this, e),
            this.options = Object.assign({
                onScrollEnd: function() {}
            }, i),
            this.wrap = t,
            this.ul = t.children[0],
            this.scroll = null,
            this.scrollBarHeight = 0,
            this.scrollY = 0,
            this.maxScrollY = 0,
            this.ratioY = 0,
            this.timeoutId = 0,
            this.inMouseDown = !1,
            this.dragStartY = 0,
            this.initScroll()
        }
        return s(e, [{
            key: "initScroll",
            value: function() {
                var e = this.scroll = document.createElement("div");
                Object.assign(e.style, {
                    position: "absolute",
                    right: "2px",
                    top: "0",
                    width: "8px",
                    background: "rgba(0,0,0,.4)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "4px",
                    transition: "background .3s"
                }),
                this.wrap.appendChild(e),
                this.wrap.onwheel = this.wheelHandler.bind(this),
                this.resizeHandler = this.resizeHandler.bind(this),
                window.addEventListener("resize", this.resizeHandler),
                e.onmouseover = this.mouseoverHandler.bind(this),
                e.onmouseleave = this.mouseleaveHandler.bind(this),
                e.onmousedown = this.mousedownHandler.bind(this),
                this.mousemoveHandler = this.mousemoveHandler.bind(this),
                this.mouseupHandler = this.mouseupHandler.bind(this)
            }
        }, {
            key: "wheelHandler",
            value: function(e) {
                var t = this;
                this.scrollMove(e),
                clearTimeout(this.timeoutId),
                this.timeoutId = setTimeout(function() {
                    t.options.onScrollEnd(e, {
                        maxScrollY: t.maxScrollY,
                        scrollY: t.scrollY
                    })
                }, 300)
            }
        }, {
            key: "resizeHandler",
            value: function() {
                var e = this;
                clearTimeout(this.timeoutId),
                this.timeoutId = setTimeout(function() {
                    e.refresh()
                }, 300)
            }
        }, {
            key: "scrollMove",
            value: function(e) {
                e.preventDefault && e.preventDefault(),
                e.stopPropagation && e.stopPropagation(),
                this.scrollY += e.deltaY,
                this.scrollY >= this.maxScrollY && (this.scrollY = this.maxScrollY),
                this.scrollY <= 0 && (this.scrollY = 0),
                this.ul.style.transform = "translate3d(0," + -this.scrollY + "px,0)",
                this.scroll.style.transform = "translate3d(0," + Math.floor(this.scrollY * this.ratioY) + "px,0)"
            }
        }, {
            key: "refresh",
            value: function() {
                var e = this.wrap.offsetHeight || 1
                  , t = this.ul.offsetHeight || 1;
                this.maxScrollY = t - e,
                this.ratioY = e / t,
                this.ratioY < 1 ? (this.scrollBarHeight = Math.floor(this.ratioY * e),
                Object.assign(this.scroll.style, {
                    height: this.scrollBarHeight + "px",
                    display: "block"
                }),
                this.scrollMove({
                    deltaY: 0
                }),
                this.wrap.onwheel = this.wheelHandler.bind(this)) : (Object.assign(this.scroll.style, {
                    display: "none"
                }),
                this.scrollMove({
                    deltaY: -this.maxScrollY / this.ratioY
                }),
                this.wrap.onwheel = null)
            }
        }, {
            key: "scrollTo",
            value: function(e) {
                var t = (e.x,
                e.y);
                this.refresh(),
                t /= this.ratioY,
                this.scrollMove({
                    deltaY: t
                })
            }
        }, {
            key: "scrollToTop",
            value: function() {
                this.scrollTo({
                    y: -this.maxScrollY
                })
            }
        }, {
            key: "scrollToBottom",
            value: function() {
                this.scrollTo({
                    y: this.maxScrollY
                })
            }
        }, {
            key: "setScrollSelected",
            value: function(e) {
                var t = e ? {
                    background: "rgba(0,0,0,.5)"
                } : {
                    background: "rgba(0,0,0,.4)"
                };
                Object.assign(this.scroll.style, t)
            }
        }, {
            key: "mouseoverHandler",
            value: function() {
                this.setScrollSelected(!0)
            }
        }, {
            key: "mouseleaveHandler",
            value: function() {
                this.inMouseDown || this.setScrollSelected(!1)
            }
        }, {
            key: "mousedownHandler",
            value: function(e) {
                var t = document;
                t.addEventListener("mousemove", this.mousemoveHandler),
                t.addEventListener("mouseup", this.mouseupHandler),
                t.addEventListener("mouseleave", this.mouseupHandler),
                this.dragStartY = e.clientY,
                this.inMouseDown = !0,
                this.setScrollSelected(!0)
            }
        }, {
            key: "mousemoveHandler",
            value: function(e) {
                e.preventDefault();
                var t = e.clientY
                  , i = (t - this.dragStartY) / this.ratioY;
                this.dragStartY = t;
                var o = Object.assign({}, e, {
                    deltaY: i
                });
                this.scrollMove(o)
            }
        }, {
            key: "mouseupHandler",
            value: function(e) {
                var t = this
                  , i = document;
                i.removeEventListener("mousemove", this.mousemoveHandler),
                i.removeEventListener("mouseup", this.mouseupHandler),
                i.removeEventListener("mouseleave", this.mouseupHandler),
                this.inMouseDown = !1,
                this.setScrollSelected(!1),
                clearTimeout(this.timeoutId),
                this.timeoutId = setTimeout(function() {
                    t.options.onScrollEnd(e, {
                        maxScrollY: t.maxScrollY,
                        scrollY: t.scrollY
                    })
                }, 300)
            }
        }, {
            key: "destroy",
            value: function() {
                this.wrap.onwheel = null,
                this.scroll.onmouseover = null,
                this.scroll.onmouseleave = null,
                this.scroll.onmousedown = null,
                window.removeEventListener("resize", this.resizeHandler)
            }
        }]),
        e
    }();
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(21);
    s.a.directive("maxCount", {
        bind: function(e, t) {
            e.addEventListener("input", function(i) {
                var o = t.value;
                if (n.a.getUnicodeLength(e.value) > o) {
                    var s = e.value.replace(/[^\x00-\xff]/g, "ξξ")
                      , a = s.substring(0, o).replace(/ξξ/g, "灪").replace("ξ", "").length;
                    e.value = e.value.substring(0, a)
                }
            })
        }
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(11);
    s.a.directive("close", {
        bind: function(e, t) {
            e.addEventListener("click", function(e) {
                n.a.close(),
                s.a.store.commit("MUSIC_SELECTED", {
                    item: {}
                }),
                s.a.store.commit("SOUND_SELECTED", {
                    item: {}
                }),
                s.a.store.commit("COMMON_UPLOADER", {
                    show: !1
                })
            })
        }
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(21);
    s.a.filter("charCount", function(e) {
        return n.a.getUnicodeLength(e)
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o);
    s.a.filter("formatTime", function(e) {
        if (null == e)
            return "";
        var t = "0" + Math.floor(e / 60)
          , i = "0" + Math.floor(e) % 60;
        return t.slice(-2) + ":" + i.slice(-2)
    }),
    s.a.filter("formatDate", function(e) {
        if ("number" == typeof e) {
            var t = new Date(e)
              , i = t.getFullYear()
              , o = t.getMonth() + 1
              , s = t.getDay();
            return o < 10 && (o = "0" + o),
            s < 10 && (s = "0" + s),
            i + "." + o + "." + s
        }
        return ""
    })
}
, function(e, t, i) {
    "use strict";
    var o = i(5);
    i.n(o).a.filter("price", function(e) {
        return e > 0 ? e + "卡币" : "免费"
    })
}
, function(e, t, i) {
    "use strict";
    function o(e, t) {
        var i = window.devicePixelRatio || 1;
        e = parseInt(e),
        t = parseInt(t),
        e && t ? (e *= i,
        t *= i) : (e *= i,
        t = e);
        return e > t ? e > 9999 && (t *= 1 - (e - 9999) / e,
        e = 9999) : e < t ? t > 9999 && (e *= 1 - (t - 9999) / t,
        t = 9999) : e > 9999 && (e = t = 9999),
        {
            width: e,
            height: t
        }
    }
    var s = i(5);
    i.n(s).a.filter("qiniuZoom", function(e, t, i) {
        i || (i = t);
        var s = o(t, i)
          , n = "imageMogr2/auto-orient/thumbnail/" + Math.round(s.width) + "x" + Math.round(s.height) + ">";
        return encodeURI(e + "?" + n)
    })
}
, function(e, t, i) {
    "use strict";
    window.Defer = function() {
        var e = {};
        return e.promise = new Promise(function(t, i) {
            e.resolve = t,
            e.reject = i
        }
        ),
        e
    }
    ;
    window.Defer
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(164)
      , a = i.n(n)
      , r = i(165)
      , c = i(206)
      , l = i(244)
      , u = i(260)
      , d = i(10)
      , h = i(9);
    s.a.use(a.a);
    var p = new a.a({
        base: "material",
        mode: "history",
        linkActiveClass: "active",
        routes: [{
            name: "music",
            path: "/music",
            component: r.a
        }, {
            name: "sound",
            path: "/sound",
            component: r.a
        }, {
            path: "/image",
            alias: "/background",
            component: c.a
        }, {
            path: "/shape",
            component: l.a
        }, {
            path: "/font",
            component: u.a
        }, {
            path: "*",
            component: {
                created: function() {
                    this.logger.info("not found")
                },
                render: function(e) {
                    return e("div", "not found")
                }
            }
        }]
    });
    p.beforeEach(function(e, t, i) {
        d.a.auth().then(function() {
            return i()
        }).catch(function(e) {
            return e && h.a.error(e)
        })
    }),
    t.a = p
}
, function(e, t) {
    e.exports = VueRouter
}
, function(e, t, i) {
    "use strict";
    var o = i(40)
      , s = i(205)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(167);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("709f5f90", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-nav{position:relative;width:176px;height:100%;color:#fff;background:#212121;float:left}.eqc-nav .head{position:relative;height:60px;line-height:60px;padding-left:28px;z-index:3}.eqc-nav .head .title{font-size:18px;font-weight:700}.eqc-nav .head .tip{display:inline-block;margin-left:10px;line-height:1}.eqc-nav .head .tip .icon{font-size:16px;transition:all .3s}.eqc-nav .head .tip .tip-box{display:inline-block;position:absolute;top:14px;padding-left:30px;z-index:2;opacity:0;pointer-events:none;transition:all .3s}.eqc-nav .head .tip .tip-box .desc{position:relative;width:352px;padding:0 6px;font-size:12px;line-height:34px;color:#fff;background:rgba(0,0,0,.9);box-shadow:0 0 16px 0 rgba(0,0,0,.16);border-radius:3px}.eqc-nav .head .tip .tip-box .desc .agreement{color:#1593ff;cursor:pointer}.eqc-nav .head .tip .tip-box .desc:before{position:absolute;left:-6px;top:10px;content:"";border:6px solid transparent;border-right:6px solid rgba(0,0,0,.7);border-left:0}.eqc-nav .head .tip:hover .icon{color:#1593ff}.eqc-nav .head .tip:hover .tip-box{opacity:1;pointer-events:unset}.eqc-nav .menu{margin-top:8px}.eqc-nav .menu>li{line-height:48px;padding-left:28px;cursor:pointer;transition:all .3s}.eqc-nav .menu>li.active,.eqc-nav .menu>li:hover{font-weight:700;background:#1593ff}.eqc-nav .coupon{margin-top:24px}.eqc-nav .coupon>li{width:152px;height:40px;margin:auto}.eqc-nav .coupon>li:not(:last-child){margin-bottom:8px}.eqc-nav .coupon>li a{display:block;height:100%;background:no-repeat 50%/cover}.eqc-nav>.tip{position:absolute;left:0;bottom:60px;padding:14px 16px;line-height:1.5;font-size:12px;opacity:.6}.eqc-nav .fun{position:absolute;bottom:0;left:0;width:100%}.eqc-nav .fun>li{line-height:60px;text-align:center}', ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-nav"
        }, [i("div", {
            staticClass: "head",
            class: {
                top: e.isTop
            }
        }, [e._t("title"), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showAgreement,
                expression: "showAgreement"
            }],
            staticClass: "tip"
        }, [i("i", {
            staticClass: "icon eqf-info-f"
        }), e._v(" "), i("div", {
            staticClass: "tip-box"
        }, [e._t("agreement")], 2)])], 2), e._v(" "), i("ul", {
            staticClass: "menu"
        }, [e._t("menu")], 2), e._v(" "), i("ul", {
            staticClass: "coupon"
        }, [e._t("coupon")], 2), e._v(" "), e._t("tip"), e._v(" "), i("ul", {
            staticClass: "fun"
        }, [e._t("fun")], 2)], 2)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(170)
    }
    var s = i(42)
      , n = i(172)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(171);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("f1726226", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-nav-word{margin-bottom:10px}.eqc-nav-word .word-btn{position:relative;background:#1bc7b1;cursor:pointer;transition:all .3s;line-height:40px;margin:auto;width:120px;border-radius:20px}.eqc-nav-word .word-btn.active,.eqc-nav-word .word-btn:hover{background:#00b49d}.eqc-nav-word .word-btn .icon{font-size:16px;vertical-align:middle}.eqc-nav-word .word-btn .tip{line-height:16px;vertical-align:middle}.eqc-nav-word .word-box{position:absolute;left:162px;bottom:6px;width:240px;padding:16px;background:#fff;border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,.15);z-index:1;transform-origin:left center}.eqc-nav-word .word-box textarea{display:block;line-height:1.5;padding:0;width:100%;border:none;box-shadow:none;color:#333;resize:none}.eqc-nav-word .word-box .foot{line-height:36px;margin-top:16px;text-align:right}.eqc-nav-word .word-box .foot .count{color:#666}.eqc-nav-word .word-box .arrow{position:absolute;top:70px;left:-5px;background:#fff;width:10px;height:10px;box-shadow:1px 1px 8px 0 rgba(0,0,0,.15);transform:rotate(45deg)}.eqc-nav-word .word-box .arrow:after{content:"";position:relative;top:-8px;left:4px;height:20px;width:10px;background:#fff;display:block;transform:rotate(-45deg)}', ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "eqc-nav-word"
        }, [i("div", {
            staticClass: "word-btn",
            class: {
                active: e.isShowWordBox
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.showWordBox(t)
                }
            }
        }, [i("i", {
            staticClass: "icon eqf-volume-high"
        }), e._v(" "), i("span", {
            staticClass: "tip"
        }, [e._v("字转成音")])]), e._v(" "), i("transition", {
            attrs: {
                name: "drop"
            }
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isShowWordBox,
                expression: "isShowWordBox"
            }],
            staticClass: "word-box",
            on: {
                click: function(e) {
                    e.stopPropagation()
                }
            }
        }, [i("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model.trim",
                value: e.text,
                expression: "text",
                modifiers: {
                    trim: !0
                }
            }],
            ref: "input",
            attrs: {
                placeholder: "请输入要转为音频的内容",
                rows: "3",
                maxlength: "100"
            },
            domProps: {
                value: e.text
            },
            on: {
                input: function(t) {
                    t.target.composing || (e.text = t.target.value.trim())
                },
                blur: function(t) {
                    e.$forceUpdate()
                }
            }
        }), e._v(" "), i("div", {
            staticClass: "foot"
        }, [i("span", {
            staticClass: "count fl"
        }, [e._v(e._s(e.text.length) + "/100")]), e._v(" "), i("span", {
            staticClass: "eqc-btn white h36",
            on: {
                click: e.hide
            }
        }, [e._v("取消")]), e._v(" "), i("span", {
            staticClass: "eqc-btn blue h36",
            on: {
                click: e.ok
            }
        }, [e._v("确定")])]), e._v(" "), e.isLoading ? i("ui-loading", {
            attrs: {
                msg: "转换中…",
                theme: "light"
            }
        }) : e._e(), e._v(" "), i("div", {
            staticClass: "arrow"
        })], 1)])], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(174);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("8cc39da6", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-nav-upload{margin-bottom:10px}.eqc-nav-upload .upload-btn{display:inline-block;margin-left:29px;position:relative;background:#1593ff;cursor:pointer;transition:all .3s;line-height:40px;width:120px;border-radius:20px;margin:auto}.eqc-nav-upload .upload-btn:hover{background:#198ae7}.eqc-nav-upload .upload-btn .progress{position:absolute;left:0;height:100%;background:rgba(0,0,0,.2);width:0;transition:all .3s;border-radius:20px}.eqc-nav-upload .upload-btn .icon,.eqc-nav-upload .upload-btn .tip{position:relative;vertical-align:middle}.eqc-nav-upload .upload-btn .icon{font-size:16px}.eqc-nav-upload .upload-btn .tip{line-height:16px}.eqc-nav-upload .tipIcon{width:28px;height:16px;display:inline-block;position:absolute;margin-top:12px;transition:all .3s;line-height:16px}.eqc-nav-upload .tipIcon .iconW{font-size:16px;transition:all .3s}.eqc-nav-upload .tipIcon .tip-box{display:inline-block;position:absolute;margin-left:11px;bottom:-22px;z-index:2;opacity:0;pointer-events:none;transition:all .3s;text-align:left;background:rgba(0,0,0,.9)}.eqc-nav-upload .tipIcon .tip-box .desc{display:block;width:400px;height:165px;position:relative;padding:16px;font-size:12px;line-height:18px;color:#fff;box-shadow:0 0 16px 0 rgba(0,0,0,.16);border-radius:3px}.eqc-nav-upload .tipIcon .tip-box .desc .agreement{color:#1593ff;cursor:pointer}.eqc-nav-upload .tipIcon .tip-box .desc:before{position:absolute;left:-6px;bottom:22px;content:"";border:6px solid transparent;border-right:6px solid rgba(0,0,0,.9);border-left:0}.eqc-nav-upload .tipIcon:hover .iconW{color:#1593ff}.eqc-nav-upload .tipIcon:hover .tip-box{opacity:1;pointer-events:unset}', ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "upload eqc-nav-upload",
            staticStyle: {
                "line-height": "0px"
            },
            attrs: {
                id: "upload_container"
            }
        }, [i("div", {
            directives: [{
                name: "upload",
                rawName: "v-upload",
                value: e.uploadOptions,
                expression: "uploadOptions"
            }],
            staticClass: "upload-btn",
            attrs: {
                id: "upload_btn"
            }
        }, [i("div", {
            ref: "progress",
            staticClass: "progress"
        }), e._v(" "), i("i", {
            staticClass: "icon eqf-cloudupload-f"
        }), e._v(" "), i("span", {
            staticClass: "tip"
        }, [e._v(e._s(e.uploadOptions.tip))])]), e._v(" "), i("div", {
            staticClass: "tipIcon"
        }, [i("span", {
            staticClass: "iconW eqf-why-f"
        }), e._v(" "), i("div", {
            staticClass: "tip-box"
        }, [i("span", {
            staticClass: "desc"
        }, [i("p", {
            staticStyle: {
                "font-size": "16px",
                "padding-bottom": "12px"
            }
        }, [e._v(e._s(e.uploadOptions.warning.wType[0]))]), e._v(" "), i("p", {
            staticStyle: {
                "padding-bottom": "12px"
            }
        }, [e._v(e._s(e.uploadOptions.warning.wType[1])), i("span", {
            staticClass: "agreement",
            on: {
                click: e.openAgreement
            }
        }, [e._v(e._s(e.uploadOptions.warning.wType[2]))]), e._v(e._s(e.uploadOptions.warning.wType[3]))]), e._v(" "), i("p", [e._v(e._s(e.uploadOptions.warning.wType[4]))])])])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(44)
      , s = i(195)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(178);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("578494ac", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-head-my{position:relative;height:60px;line-height:60px;padding:0 28px;z-index:2;box-shadow:0 6px 6px 0 rgba(0,0,0,.16)}.eqc-head-my .category{display:inline-block}.eqc-head-my .category>.item{display:inline-block;height:60px;color:#000;border-bottom:2px solid #fff;cursor:pointer;transition:all .3s}.eqc-head-my .category>.item:not(:first-child){margin-left:40px}.eqc-head-my .category>.item.active,.eqc-head-my .category>.item:hover{color:#1593ff;border-bottom:2px solid #1593ff}.eqc-head-my .close{width:22px;height:22px;line-height:22px;margin:19px 0 19px 16px;text-align:center;font-size:22px;cursor:pointer;transition:all .3s}.eqc-head-my .close:hover{color:#ff2a6a}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-head-my"
        }, [i("ul", {
            staticClass: "category"
        }, e._l(e.categories, function(t) {
            return (e.value | t.value) === e.value ? i("li", {
                key: t.name,
                staticClass: "item",
                class: {
                    active: e.type === t.type
                },
                on: {
                    click: function(i) {
                        e.choose(t)
                    }
                }
            }, [e._v(e._s(t.name))]) : e._e()
        })), e._v(" "), i("div", {
            directives: [{
                name: "close",
                rawName: "v-close"
            }],
            staticClass: "close fr eqf-no"
        })])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(181);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("243d09db", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-music-list{position:relative;height:calc(100% - 60px - 60px);font-size:12px}.eqc-music-list.sys{height:calc(100% - 60px - 60px - 104px)}.eqc-music-list.sys .wrap .list{padding-top:0}.eqc-music-list.sys.no-sub{height:calc(100% - 60px - 60px - 68px)}.eqc-music-list .wrap{position:relative;height:100%}.eqc-music-list .wrap .list{padding:28px}.eqc-music-list .line{position:absolute;top:0;right:50%;height:100%;width:1px;background:#e6ebed}", ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(183)
    }
    var s = i(48)
      , n = i(185)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(184);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("5c0f3a9b", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-music-item{position:relative;height:40px;line-height:40px}.eqc-music-item.active .bg,.eqc-music-item:hover .bg{background:#f0f3f4}.eqc-music-item.one:not(:first-child){border-top:1px solid #f6f9fa}.eqc-music-item.two{display:inline-block;width:calc(50% - 24px)}.eqc-music-item.two .name{max-width:140px}.eqc-music-item.two:nth-child(odd){margin-right:48px}.eqc-music-item.two:not(:first-child):not(:nth-child(2)){border-top:1px solid #f6f9fa}.eqc-music-item .bg{position:absolute;left:-12px;top:0;height:100%;width:calc(100% + 24px);border-radius:20px;background:#fff;transition:all .3s}.eqc-music-item .icon{width:36px;text-align:center;font-size:16px;color:#666;cursor:pointer;transition:all .3s}.eqc-music-item .icon.crop:hover{color:#1593ff}.eqc-music-item .icon.delete:hover,.eqc-music-item .love.hos,.eqc-music-item .love:hover{color:#ff296a}.eqc-music-item .coupon,.eqc-music-item .logo{margin-left:10px}.eqc-music-item .name{position:relative;max-width:400px}.eqc-music-item .logo{display:inline-block;width:14px;height:14px;line-height:14px;opacity:.5;vertical-align:middle;background:50%/contain no-repeat}.eqc-music-item .price{position:relative;color:#1593ff}.eqc-music-item .time{position:relative;margin:0 16px;color:#666}.eqc-music-item .buy-time{position:absolute;right:112px;color:#999}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "eqc-music-item",
            class: [{
                active: e.item.id === e.selected.id
            }, e.showTwoColumn ? "two" : "one"],
            on: {
                click: function(t) {
                    e.select(e.item)
                },
                dblclick: function(t) {
                    e.play(e.item)
                }
            }
        }, [i("div", {
            staticClass: "bg"
        }), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLoveSys,
                expression: "showLoveSys"
            }],
            staticClass: "icon love fl hint--right hint--rounded",
            attrs: {
                "data-hint": "收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.addFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love-line"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "icon love fl hint--right hint--rounded has",
            attrs: {
                "data-hint": "取消收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.deleteFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love"
        })]), e._v(" "), i("span", {
            staticClass: "name ellipsis fl"
        }, [e._v(e._s(e.item.name))]), e._v(" "), i("a", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showlogo,
                expression: "showlogo"
            }],
            staticClass: "logo hint--right hint--rounded",
            style: {
                backgroundImage: "url(" + e.getBrand(e.item.brand).logo + ")"
            },
            attrs: {
                target: "_blank",
                "data-hint": e.getBrand(e.item.brand).name,
                href: e.getBrand(e.item.brand).url
            }
        }), e._v(" "), i("div", {
            staticClass: "right fr"
        }, [i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice,
                expression: "showPrice"
            }],
            staticClass: "price fl"
        }, [e._v(e._s(e._f("price")(e.item.price)))]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showTime && e.item.cropInfo,
                expression: "showTime && item.cropInfo"
            }],
            staticClass: "time fl"
        }, [e._v(e._s(e._f("formatTime")(e.getCropInfo(e.item.cropInfo).duration)))]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showCrop,
                expression: "showCrop"
            }],
            staticClass: "icon crop fl hint--left hint--rounded",
            attrs: {
                "data-hint": "裁切"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.crop(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-cut"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showDelete,
                expression: "showDelete"
            }],
            staticClass: "icon delete fl hint--left hint--rounded",
            attrs: {
                "data-hint": "删除"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.deleteItem(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-delete-l"
        })])]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showBuyTime,
                expression: "showBuyTime"
            }],
            staticClass: "buy-time"
        }, [e._v("购买时间： " + e._s(e._f("formatDate")(e.item.createTime)))])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(187);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("abf3d126", o, !0, {})
}
, function(e, t, i) {
    var o = i(19);
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-list-status{display:flex;align-items:center;justify-content:center;height:100%;font-size:16px}.eqc-list-status .result{text-align:center}.eqc-list-status .result .box{width:240px;height:240px;margin:auto;background:url(" + o(i(188)) + ")}.eqc-list-status .result .msg{line-height:1.2em}", ""])
}
, function(e, t, i) {
    e.exports = i.p + "static/img/box.svg"
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.hasData,
                expression: "!hasData"
            }],
            staticClass: "eqc-list-status"
        }, [i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isBusy,
                expression: "isBusy"
            }]
        }, [e._v(e._s(e.msgLoading))]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.isBusy && void 0 !== e.isBusy && !e.hasData,
                expression: "!isBusy && isBusy !== undefined && !hasData"
            }],
            staticClass: "result"
        }, [i("div", {
            staticClass: "box"
        }), e._v(" "), i("span", {
            staticClass: "msg",
            domProps: {
                innerHTML: e._s(e.emptyMsg)
            }
        })])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-music-list",
            class: {
                sys: e.showCondition,
                "no-sub": !e.noSubCategory
            }
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showList,
                expression: "showList"
            }, {
                name: "scroll-bar",
                rawName: "v-scroll-bar",
                value: {
                    onScrollEnd: e.onScrollEnd
                },
                expression: "{onScrollEnd}"
            }],
            ref: "wrap",
            staticClass: "wrap"
        }, [i("ul", {
            staticClass: "list"
        }, e._l(e.list, function(t) {
            return i("music-list-item", {
                key: t.id,
                attrs: {
                    item: t,
                    list: e.list
                }
            })
        }))]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLine,
                expression: "showLine"
            }],
            staticClass: "line"
        }), e._v(" "), i("list-status", {
            attrs: {
                isBusy: e.isBusy,
                list: e.list,
                "empty-list-msg": e.emptyListMsg
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(192);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("7573dac7", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-music-foot{position:absolute;left:0;bottom:0;width:100%;height:60px;box-shadow:0 -6px 6px 0 rgba(0,0,0,.16)}.eqc-music-foot .info{display:inline-block;width:calc(100% - 88px);height:60px;line-height:60px;padding-left:28px}.eqc-music-foot .info .ctrl{display:inline-block;width:36px;height:36px;line-height:30px;font-size:22px;text-align:center;color:#1593ff;border:3px solid #1593ff;border-radius:50%;vertical-align:middle;cursor:pointer}.eqc-music-foot .info .ctrl.disable{line-height:36px;color:#ccc;background:#f6f9fa;border:0}.eqc-music-foot .info .detail{display:inline-block;position:relative;width:280px;height:32px;line-height:24px;margin:0 16px 0 12px;border-bottom:2px solid #e6ebed;vertical-align:middle}.eqc-music-foot .info .detail .name{display:inline-block;max-width:200px;font-size:14px;color:#000}.eqc-music-foot .info .detail .time{font-size:12px;color:#999}.eqc-music-foot .info .detail .progress{position:absolute;bottom:-2px;height:2px;background:#1593ff}.eqc-music-foot .info .no-music{margin-left:12px;color:#111}.eqc-music-foot .info .flag{display:inline-block;height:24px;line-height:24px;font-size:12px;text-align:center;border-radius:12px}.eqc-music-foot .info .flag.default{width:72px;color:#999;background:#f6f9fa}.eqc-music-foot .info .flag.to-default{width:96px;line-height:22px;border:1px solid #ccd5db;cursor:pointer;transition:all .3s}.eqc-music-foot .info .flag.to-default:hover{color:#fff;background:#1593ff;border:1px solid #1593ff}.eqc-music-foot .info .price{margin-right:16px;font-size:14px;color:#1593ff}.eqc-music-foot .info .clear{display:flex;margin:21px 16px 21px 0;line-height:18px;opacity:.7;cursor:pointer;transition:all .3s}.eqc-music-foot .info .clear .icon{font-size:18px}.eqc-music-foot .info .clear:hover{opacity:1;color:#1593ff}.eqc-music-foot .submit{display:flex;align-items:center;justify-content:center;width:88px;height:100%;color:#fff;cursor:pointer;transition:all .3s}.eqc-music-foot .submit.use{background:#1593ff}.eqc-music-foot .submit.use:hover{background:#198ae7}.eqc-music-foot .submit.buy{background:#ffb243}.eqc-music-foot .submit.buy:hover{background:#ef8a00}", ""])
}
, function(e, t, i) {
    "use strict";
    t.a = {
        wordToSound: [99],
        deleteImgTips: [1, 2, 21],
        disableBuyPersonalFont: [5, 2, 51, 21, 201, 202, 203, 204, 206, 207, 208, 209, 2101, 2102, 2103, 2104, 2106, 2107, 2108, 2109]
    }
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-music-foot"
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showMusic,
                expression: "showMusic"
            }],
            staticClass: "info"
        }, [i("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.isPlayed,
                expression: "!isPlayed"
            }],
            staticClass: "ctrl eqf-play btn",
            on: {
                click: e.play
            }
        }), e._v(" "), i("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isPlayed,
                expression: "isPlayed"
            }],
            staticClass: "ctrl eqf-pause",
            on: {
                click: e.pause
            }
        }), e._v(" "), i("div", {
            staticClass: "detail"
        }, [i("span", {
            staticClass: "name ellipsis"
        }, [e._v(e._s(e.selectedMusic.name))]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showTime,
                expression: "showTime"
            }],
            staticClass: "time fr"
        }, [e._v(e._s(e._f("formatTime")(e.currentTime)) + "/" + e._s(e._f("formatTime")(e.totalTime)))]), e._v(" "), i("div", {
            staticClass: "progress",
            style: {
                width: 100 * e.progress + "%"
            }
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showDefaultMusic,
                expression: "showDefaultMusic"
            }],
            staticClass: "flag default"
        }, [e._v("默认音乐")]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showToDefaultMusic,
                expression: "showToDefaultMusic"
            }],
            staticClass: "flag to-default",
            on: {
                click: e.toDefault
            }
        }, [e._v("恢复默认音乐")]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice,
                expression: "showPrice"
            }],
            staticClass: "price fr"
        }, [e._v(e._s(e._f("price")(e.selectedMusic.price)))]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showClear,
                expression: "showClear"
            }],
            staticClass: "clear fr",
            on: {
                click: e.clear
            }
        }, [i("i", {
            staticClass: "icon eqf-clear-l"
        }), e._v("删除默认音乐")])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showNoMusic,
                expression: "showNoMusic"
            }],
            staticClass: "info"
        }, [i("i", {
            staticClass: "ctrl eqf-play disable"
        }), e._v(" "), i("span", {
            staticClass: "no-music"
        }, [e._v("无音乐")])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showUse,
                expression: "showUse"
            }],
            staticClass: "submit use fr btn",
            on: {
                click: e.use
            }
        }, [e._v("使用")]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showBuy,
                expression: "showBuy"
            }],
            staticClass: "submit buy fr btn",
            on: {
                click: e.buy
            }
        }, [e._v("购买")]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showOk,
                expression: "showOk"
            }],
            staticClass: "submit use fr",
            on: {
                click: e.ok
            }
        }, [e._v("确定")])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-my", {
            attrs: {
                type: e.headTab,
                value: e.value
            },
            on: {
                choose: e.chooseHead
            }
        }), e._v(" "), i("music-list", {
            ref: "list",
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("music-foot")], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(53)
      , s = i(204)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(198);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("fee52a8c", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-head-sys .head-top{position:relative;height:60px;line-height:60px;padding:0 28px;box-shadow:0 6px 6px 0 rgba(0,0,0,.16);z-index:1}.eqc-head-sys .head-top .list{display:inline-block}.eqc-head-sys .head-top .list>.item{display:inline-block;height:60px;color:#333;border-bottom:2px solid #fff;cursor:pointer;transition:all .3s}.eqc-head-sys .head-top .list>.item:not(:first-child){margin-left:40px}.eqc-head-sys .head-top .list>.item.active,.eqc-head-sys .head-top .list>.item:hover{color:#1593ff;border-bottom:2px solid #1593ff}.eqc-head-sys .head-top .icon{width:22px;height:22px;line-height:22px;margin:19px 16px;text-align:center;font-size:18px;cursor:pointer;transition:all .3s}.eqc-head-sys .head-top .icon.search{width:50px;text-align:justify}.eqc-head-sys .head-top .icon.search span{margin-left:2px;font-size:14px;position:absolute}.eqc-head-sys .head-top .icon.search:hover{color:#1593ff}.eqc-head-sys .head-top .icon.close{margin-right:0;font-size:22px}.eqc-head-sys .head-top .icon.close:hover{color:#ff2a6a}.eqc-head-sys .head-bottom{padding:16px 28px;font-size:13px}.eqc-head-sys .head-bottom .bottom-down,.eqc-head-sys .head-bottom .bottom-up{height:36px;line-height:36px}.eqc-head-sys .head-bottom .name{color:#666;margin-right:6px}.eqc-head-sys .head-bottom .price{margin-left:30px}.eqc-head-sys .head-bottom .list{display:inline-block}.eqc-head-sys .head-bottom .list .item{display:inline-block;position:relative;margin-right:18px;cursor:pointer;transition:all .3s}.eqc-head-sys .head-bottom .list .item.active,.eqc-head-sys .head-bottom .list .item:hover{color:#1593ff}.eqc-head-sys .head-bottom .list .item.active:after,.eqc-head-sys .head-bottom .list .item:hover:after{content:"|";color:#333}.eqc-head-sys .head-bottom .list .item:after{content:"|";position:absolute;right:-10px;bottom:2px;font-weight:700;pointer-events:none}.eqc-head-sys .head-bottom .list .item:last-child:after{content:""}', ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(200)
    }
    var s = i(55)
      , n = i(202)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(201);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("3489f52c", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-sys-search{position:absolute;top:0;width:100%;height:60px;line-height:60px;padding:0 28px;background:#fff;z-index:1}.eqc-sys-search .text{width:calc(100% - 16px - 72px - 40px - 54px - 16px);height:36px;padding:0 26px;color:#111;border-bottom:1px solid #ccd5db}.eqc-sys-search .icon{position:absolute;left:28px;top:21px;font-size:18px;color:#666}.eqc-sys-search .btn.search{width:72px;margin-top:12px}.eqc-sys-search .btn.cancel{width:54px;margin:12px 0 0 16px}.eqc-sys-search .close{width:22px;height:22px;line-height:22px;margin:19px 0 19px 16px;text-align:center;font-size:22px;cursor:pointer;transition:all .3s}.eqc-sys-search .close:hover{color:#ff2a6a}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-sys-search"
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model.trim",
                value: e.keyWords,
                expression: "keyWords",
                modifiers: {
                    trim: !0
                }
            }],
            ref: "input",
            staticClass: "text",
            attrs: {
                type: "text",
                placeholder: "请输入关键字"
            },
            domProps: {
                value: e.keyWords
            },
            on: {
                keyup: function(t) {
                    if (!("button"in t) && e._k(t.keyCode, "enter", 13, t.key))
                        return null;
                    e.search(t)
                },
                input: function(t) {
                    t.target.composing || (e.keyWords = t.target.value.trim())
                },
                blur: function(t) {
                    e.$forceUpdate()
                }
            }
        }), e._v(" "), i("i", {
            staticClass: "icon eqf-search-l"
        }), e._v(" "), i("div", {
            directives: [{
                name: "close",
                rawName: "v-close"
            }],
            staticClass: "close fr eqf-no"
        }), e._v(" "), i("span", {
            staticClass: "btn fr cancel eqc-btn white h36 fr",
            on: {
                click: e.cancel
            }
        }, [e._v("取消")]), e._v(" "), i("span", {
            staticClass: "btn fr search eqc-btn blue h36 fr",
            on: {
                click: e.search
            }
        }, [e._v("搜索")])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-head-sys"
        }, [i("div", {
            staticClass: "head-top"
        }, [i("ul", {
            staticClass: "list"
        }, e._l(e.category1.list, function(t) {
            return i("li", {
                key: t.id,
                staticClass: "item",
                class: {
                    active: t.id === e.category1.selected.id
                },
                on: {
                    click: function(i) {
                        e.chooseCategory1(t)
                    }
                }
            }, [e._v(e._s(t.name))])
        })), e._v(" "), i("div", {
            directives: [{
                name: "close",
                rawName: "v-close"
            }],
            staticClass: "icon close fr eqf-no"
        }), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showSearchBtn,
                expression: "showSearchBtn"
            }],
            staticClass: "icon search fr eqf-search-l",
            on: {
                click: e.showSearch
            }
        }, [i("span", [e._v("搜索")])])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.category1.list.length && !e.search.show,
                expression: "category1.list.length && !search.show"
            }],
            staticClass: "head-bottom"
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.category2.list.length,
                expression: "category2.list.length"
            }],
            staticClass: "bottom-up"
        }, [i("span", {
            staticClass: "name"
        }, [e._v("分类：")]), e._v(" "), i("ul", {
            staticClass: "list"
        }, e._l(e.category2.list, function(t) {
            return i("li", {
                key: t.id,
                staticClass: "item",
                class: {
                    active: t.id === e.category2.selected.id
                },
                on: {
                    click: function(i) {
                        e.chooseCategory2(t)
                    }
                }
            }, [e._v(e._s(t.name))])
        }))]), e._v(" "), i("div", {
            staticClass: "bottom-down"
        }, [i("span", {
            staticClass: "name"
        }, [e._v("排序：")]), e._v(" "), i("ul", {
            staticClass: "list"
        }, e._l(e.sort.list, function(t) {
            return i("li", {
                key: t.id,
                staticClass: "item",
                class: {
                    active: t.id === e.sort.selected.id
                },
                on: {
                    click: function(i) {
                        e.chooseSort(t)
                    }
                }
            }, [e._v(e._s(t.name))])
        })), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.price.list.length,
                expression: "price.list.length"
            }],
            staticClass: "name price"
        }, [e._v("价格：")]), e._v(" "), i("ul", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.price.list.length,
                expression: "price.list.length"
            }],
            staticClass: "list"
        }, e._l(e.price.list, function(t) {
            return i("li", {
                key: t.name,
                staticClass: "item",
                class: {
                    active: t.name === e.price.selected.name
                },
                on: {
                    click: function(i) {
                        e.choosePrice(t)
                    }
                }
            }, [e._v(e._s(t.name))])
        }))])]), e._v(" "), e.search.show ? i("head-sys-search", {
            on: {
                search: e.searchWithKeyWords,
                hideSearch: e.hideSearch
            }
        }) : e._e()], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-sys", {
            attrs: {
                category1: e.category1,
                category2: e.category2,
                sort: e.sort,
                price: e.price,
                search: e.search
            },
            on: {
                chooseCategory1: e.chooseCategory1,
                chooseCategory2: e.chooseCategory2,
                chooseSort: e.chooseSort,
                choosePrice: e.choosePrice,
                showSearch: e.showSearch,
                hideSearch: e.hideSearch,
                search: e.searchWithKeyWords
            }
        }), e._v(" "), i("music-list", {
            ref: "list",
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("music-foot")], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-meterial"
        }, [i("base-nav", [i("span", {
            staticClass: "title",
            attrs: {
                slot: "title"
            },
            slot: "title"
        }, [e._v("音乐库")]), e._v(" "), i("div", {
            staticClass: "desc",
            attrs: {
                slot: "agreement"
            },
            slot: "agreement"
        }, [e._v("\n            使用音乐即代表同意并接受\n            "), i("span", {
            staticClass: "agreement",
            on: {
                click: e.openAgreement
            }
        }, [e._v("《卡美美音乐版权许可与服务协议》")])]), e._v(" "), i("template", {
            slot: "menu"
        }, [i("li", {
            class: {
                active: "my" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("my")
                }
            }
        }, [e._v("我的音乐")]), e._v(" "), i("li", {
            class: {
                active: "sys" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("sys")
                }
            }
        }, [e._v("音乐")])]), e._v(" "), i("template", {
            slot: "coupon"
        }, [i("li", e._l(e.coupons, function(e) {
            return i("a", {
                key: e.id,
                style: {
                    "background-image": "url(" + e.path + ")"
                },
                attrs: {
                    target: "_blank",
                    href: e.url
                }
            })
        }))]), e._v(" "), i("template", {
            slot: "fun"
        }, [e.showWordToSound ? i("nav-word", {
            attrs: {
                fileType: e.fileType
            },
            on: {
                complete: e.onComplete
            }
        }) : e._e(), e._v(" "), e.showUploader ? i("nav-upload", e._b({}, "nav-upload", e.uploadOptions, !1)) : e._e()], 1)], 2), e._v(" "), "my" === e.sideTab ? i("music-my", {
            ref: "my"
        }) : e._e(), e._v(" "), "sys" === e.sideTab ? i("music-sys", {
            ref: "sys"
        }) : e._e()], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(56)
      , s = i(243)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(208)
    }
    var s = i(57)
      , n = i(210)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(209);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("07679181", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-nav-mobile-load{margin-bottom:10px}.eqc-nav-mobile-load .upload-btn{position:relative;background:#1bc7b1;cursor:pointer;transition:all .3s;line-height:40px;margin:auto;width:120px;border-radius:20px}.eqc-nav-mobile-load .upload-btn:hover{background:#00b49d}.eqc-nav-mobile-load .upload-btn .icon{font-size:16px;vertical-align:middle}.eqc-nav-mobile-load .upload-btn .tip{line-height:16px;vertical-align:middle}.eqc-nav-mobile-load .qrcode-container{position:absolute;left:174px;top:-114px;width:200px;height:210px;padding:10px;color:gray;background-color:#fff;border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,.15);z-index:1;transform-origin:left center}.eqc-nav-mobile-load .qrcode-container h5{margin-top:5px;height:20px;line-height:20px}.eqc-nav-mobile-load .qrcode-container .qrcode-el{display:flex;justify-content:center;align-items:center;height:170px;width:180px}.eqc-nav-mobile-load .qrcode-container .triangle{position:absolute;left:-30px;top:120px;width:0;height:0;border-width:15px;border-style:dashed solid dashed dashed;border-color:transparent #fff transparent transparent}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(58)
      , s = i(240)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(213)
    }
    var s = i(59)
      , n = i(218)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(214);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("7541be6b", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-tag{height:68px;padding:16px 28px}.eqc-tag>.list{display:inline-block}.eqc-tag>.list .item{display:inline-block;max-width:80px;height:36px;line-height:36px;padding:0 12px;border-radius:18px;color:#333;background:#eee;vertical-align:top;transition:all .3s;cursor:pointer}.eqc-tag>.list .item:not(:last-child){margin-right:16px}.eqc-tag>.list .item.active,.eqc-tag>.list .item:hover{color:#fff;background:#1593ff}.eqc-tag .drop-down{display:inline-block;position:relative;height:36px;overflow:hidden;vertical-align:top;z-index:2}.eqc-tag .drop-down:hover{overflow:unset}.eqc-tag .drop-down:hover .select{color:#1593ff;background:#fff;border:1px solid #1593ff}.eqc-tag .drop-down:hover .select .icon{transform:rotate(180deg)}.eqc-tag .drop-down .select{width:144px;height:36px;line-height:34px;padding-left:12px;background:#eee;border:1px solid #eee;border-radius:18px;transition:all .3s}.eqc-tag .drop-down .select .text{display:inline-block;max-width:96px}.eqc-tag .drop-down .select .icon{margin:6px;font-size:22px;transition:all .3s}.eqc-tag .manage{width:120px;height:36px;line-height:34px;padding:0 22px;text-align:center;color:#333;border:1px solid #ccd5db;border-radius:18px;transition:all .3s;cursor:pointer}.eqc-tag .manage:hover{color:#fff;background:#1593ff;border:1px solid #1593ff}.eqc-tag .manage:hover .icon{color:#fff}.eqc-tag .manage .icon{font-size:14px;margin:10px 0;color:#666;transition:all .3s}", ""])
}
, function(e, t, i) {
    var o = i(216);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("5ac83905", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-drop-dwon{position:absolute}.eqc-drop-dwon .wrap{position:relative;max-height:180px;box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.eqc-drop-dwon .wrap .list{padding:8px 0;background:#fff}.eqc-drop-dwon .wrap .list .item{width:144px;height:36px;line-height:36px;padding:0 12px;text-align:left;color:#000;cursor:pointer;transition:all .3s}.eqc-drop-dwon .wrap .list .item.active,.eqc-drop-dwon .wrap .list .item:hover{color:#fff;background:#1593ff}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            ref: "dropDown",
            staticClass: "eqc-drop-dwon",
            style: e.css
        }, [i("div", {
            directives: [{
                name: "scroll-bar",
                rawName: "v-scroll-bar",
                value: e.scrollBarOptions,
                expression: "scrollBarOptions"
            }],
            staticClass: "wrap"
        }, [i("ul", {
            staticClass: "list"
        }, e._l(e.list, function(t) {
            return i("li", {
                key: t[e.ItemKey],
                staticClass: "item ellipsis",
                class: {
                    active: t[e.ItemKey] === e.selectedItem[e.ItemKey]
                },
                on: {
                    click: function(i) {
                        e.choose(t)
                    }
                }
            }, [e._v(e._s(t[e.name]))])
        }))])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-tag"
        }, [e.showDropDown ? e._e() : i("ul", {
            staticClass: "list"
        }, e._l(e.list, function(t) {
            return i("li", {
                key: t.id,
                staticClass: "item ellipsis",
                class: {
                    active: t.id === e.item.id
                },
                on: {
                    click: function(i) {
                        e.choose(t)
                    }
                }
            }, [e._v(e._s(t.name))])
        })), e._v(" "), e.showDropDown ? i("div", {
            ref: "dropDown",
            staticClass: "drop-down"
        }, [i("div", {
            staticClass: "select"
        }, [i("span", {
            staticClass: "text ellipsis"
        }, [e._v(e._s(e.item.name))]), e._v(" "), i("i", {
            staticClass: "icon fr eqf-menu-down"
        })]), e._v(" "), i("ui-drop-down", {
            attrs: {
                list: e.list,
                selectedItem: e.item,
                css: {
                    left: 0,
                    top: "36px",
                    paddingTop: "8px"
                }
            },
            on: {
                choose: e.choose
            }
        })], 1) : e._e(), e._v(" "), i("div", {
            staticClass: "manage fr",
            on: {
                click: e.manage
            }
        }, [i("i", {
            staticClass: "icon fl eqf-setting-f"
        }), e._v(" "), i("span", [e._v("标签管理")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(220)
    }
    var s = i(62)
      , n = i(222)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(221);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("6c56a673", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-tag-manage{position:absolute;width:176px;height:calc(100% - 60px);left:-176px;z-index:2;background:#212121}.eqc-tag-manage .add{width:120px;height:40px;position:absolute;line-height:38px;margin:10px 28px;padding:0 22px;border:1px solid #fff;border-radius:60px;color:#fff;text-align:center;transition:all .3s;cursor:pointer}.eqc-tag-manage .add:hover{border:1px solid #1593ff;background:#1593ff}.eqc-tag-manage .add .icon{font-size:16px;margin:11px 0}.eqc-tag-manage .wrap{position:relative;height:calc(100% - 60px)}.eqc-tag-manage .list .item{position:relative;height:40px;line-height:40px;padding:0 28px;color:hsla(0,0%,100%,.6);transition:all .3s}.eqc-tag-manage .list .item.active,.eqc-tag-manage .list .item:hover{color:#fff;background:#1593ff}.eqc-tag-manage .list .item .delete{margin:12px 0;font-size:16px;transition:all .3s;cursor:pointer}.eqc-tag-manage .list .item .delete:hover{color:#ff2a6a}.eqc-tag-manage .list .item .name{display:inline-block;width:calc(100% - 16px);height:100%}.eqc-tag-manage .list .item .text{position:absolute;top:0;left:0;width:100%;height:100%;background:#111;padding:0 28px;z-index:1}.eqc-tag-manage .ok{position:absolute;left:0;bottom:0;height:60px;width:100%;line-height:60px;text-align:center;color:#fff;background:#333;transition:all .3s;cursor:pointer}.eqc-tag-manage .ok:hover{background:#1593ff}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-tag-manage fr"
        }, [i("div", {
            directives: [{
                name: "scrollBar",
                rawName: "v-scrollBar"
            }],
            ref: "wrap",
            staticClass: "wrap"
        }, [i("ul", {
            ref: "list",
            staticClass: "list"
        }, e._l(e.list, function(t, o) {
            return i("li", {
                key: t.id,
                staticClass: "item",
                class: {
                    active: t.id === e.item.id
                },
                on: {
                    click: function(i) {
                        e.choose(t)
                    }
                }
            }, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.text,
                    expression: "text",
                    modifiers: {
                        trim: !0
                    }
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: t.edit,
                    expression: "tag.edit"
                }],
                staticClass: "text",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.text
                },
                on: {
                    blur: [function(i) {
                        e.blur(t, i)
                    }
                    , function(t) {
                        e.$forceUpdate()
                    }
                    ],
                    keyup: function(i) {
                        if (!("button"in i) && e._k(i.keyCode, "enter", 13, i.key))
                            return null;
                        e.enter(t)
                    },
                    input: function(t) {
                        t.target.composing || (e.text = t.target.value.trim())
                    }
                }
            }), e._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.edit,
                    expression: "!tag.edit"
                }],
                staticClass: "name ellipsis",
                on: {
                    dblclick: function(i) {
                        e.edit(t, i)
                    }
                }
            }, [e._v(e._s(t.name))]), e._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.id,
                    expression: "tag.id"
                }],
                staticClass: "delete fr hint--left hint--rounded",
                attrs: {
                    "data-hint": "删除"
                },
                on: {
                    click: function(i) {
                        i.stopPropagation(),
                        e.deleteTag(t, o)
                    }
                }
            }, [i("i", {
                staticClass: "fl eqf-minus-l"
            })])])
        }))]), e._v(" "), i("div", {
            staticClass: "add",
            on: {
                click: e.add
            }
        }, [i("i", {
            staticClass: "icon fl eqf-plus"
        }), e._v(" "), i("span", [e._v("添加标签")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(224)
    }
    var s = i(63)
      , n = i(229)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(225);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("9938f196", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-tag-manage-bar{position:absolute;top:60px;width:100%;height:68px;line-height:36px;padding:16px 28px;background:#fff;z-index:1}.eqc-tag-manage-bar .select{display:inline-block;height:16px;line-height:16px;cursor:pointer}.eqc-tag-manage-bar .select:hover .checkbox{border:1px solid #1593ff}.eqc-tag-manage-bar .select .all{padding-left:10px}.eqc-tag-manage-bar .add{position:relative;margin-left:16px;padding-right:0;overflow:hidden;border-radius:20px}.eqc-tag-manage-bar .add.white:hover{overflow:unset}.eqc-tag-manage-bar .add.white:hover .icon{transform:rotate(180deg)}.eqc-tag-manage-bar .add .icon{margin:6px;font-size:22px;transition:all .3s}.eqc-tag-manage-bar .disradius{border-radius:20px}.eqc-tag-manage-bar .ok{width:120px;margin-left:16px;color:#fff;background:#1593ff;border-radius:20px;transition:all .3s}", ""])
}
, function(e, t, i) {
    var o = i(227);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("3e701248", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-checkbox{display:inline-block;position:relative;width:16px;height:16px;line-height:14px;color:#fff;background:#fff;border:1px solid #ccd5db;border-radius:3px;transition:all .3s;cursor:pointer}.eqc-checkbox.active,.eqc-checkbox:hover{border:1px solid #1593ff}.eqc-checkbox.active{background:#1593ff}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-checkbox",
            class: {
                active: e.isChecked
            }
        }, [i("i", {
            staticClass: "eqf-yes"
        })])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-tag-manage-bar"
        }, [i("div", {
            staticClass: "select",
            on: {
                click: e.selectAll
            }
        }, [i("ui-checkbox", {
            staticClass: "checkbox fl",
            attrs: {
                "is-checked": e.isSelectedAll
            }
        }), e._v(" "), i("span", {
            staticClass: "all"
        }, [e._v("全选")])], 1), e._v(" "), i("span", {
            staticClass: "eqc-btn blue h36 fr ok",
            on: {
                click: e.ok
            }
        }, [e._v("完成管理")]), e._v(" "), i("div", {
            ref: "add",
            staticClass: "add fr eqc-btn h36",
            class: [e.isSelectedAny ? "white" : "disable"]
        }, [e._v("添加到"), i("i", {
            staticClass: "icon fr eqf-menu-down"
        }), e._v(" "), i("ui-drop-down", {
            attrs: {
                list: e.tagListNew,
                css: {
                    left: "-21px",
                    paddingTop: "8px"
                }
            },
            on: {
                choose: e.choose
            }
        })], 1), e._v(" "), i("span", {
            staticClass: "eqc-btn h36 fr disradius",
            class: [e.isSelectedAny ? "red" : "disable"],
            on: {
                click: e.deleteFiles
            }
        }, [e._v("删除")])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(231);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("37b9fea5", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-image-list{height:calc(100% - 60px)}.eqc-image-list.sys{height:calc(100% - 60px - 104px)}.eqc-image-list.sys .wrap .list{padding-top:0}.eqc-image-list.sys.no-sub,.eqc-image-list.tag{height:calc(100% - 60px - 68px)}.eqc-image-list.tag .wrap .list{padding-top:0}.eqc-image-list.tag-manage{position:relative;top:68px;width:100%;height:calc(100% - 60px - 68px);background:#fff;z-index:0}.eqc-image-list .wrap{position:relative;height:100%}.eqc-image-list .wrap .list{padding:28px}.eqc-image-list .wrap .complete{padding:0 28px}", ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(233)
    }
    var s = i(67)
      , n = i(235)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(234);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("3fc0ccaa", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-image-item{display:inline-block;vertical-align:top}.eqc-image-item:not(:nth-child(5n)){margin-right:12px}.eqc-image-item:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(5)){margin-top:12px}.eqc-image-item .cover{position:relative;width:136px;height:136px;background:#eee 50%/contain no-repeat}.eqc-image-item .cover:after{content:"";display:block;position:absolute;bottom:0;width:100%;height:100px;background-image:linear-gradient(-180deg,transparent,rgba(0,0,0,.05) 31%,rgba(0,0,0,.1) 48%,rgba(0,0,0,.2) 66%,rgba(0,0,0,.3) 88%,rgba(0,0,0,.35) 95%,rgba(0,0,0,.4) 99%)}.eqc-image-item .cover:hover .mask{opacity:.3}.eqc-image-item .cover .mask{position:absolute;height:100%;width:100%;opacity:0;transition:all .3s;background:#000;pointer-events:none}.eqc-image-item .cover .select-box-active{position:absolute;height:100%;width:100%;opacity:1;transition:all .3s;border:2px solid #e0e0e0}.eqc-image-item .cover .select-box-active:after{content:"";position:absolute;top:0;left:0;border:18px solid transparent;border-top:18px solid #e0e0e0;border-left:18px solid #e0e0e0;transition:all .3s}.eqc-image-item .cover .select-box-active i{position:relative;font-size:20px;color:#fff;z-index:1}.eqc-image-item .cover .select-box-active.active{transition:all .3s;border:2px solid #1593ff}.eqc-image-item .cover .select-box-active.active:after{content:"";position:absolute;top:0;left:0;border:18px solid transparent;border-top:18px solid #1593ff;border-left:18px solid #1593ff;transition:all .3s}.eqc-image-item .cover .icon{position:absolute;bottom:0;width:20px;height:20px;line-height:20px;margin:8px;text-align:center;color:#fff;cursor:pointer;transition:all .3s;z-index:1}.eqc-image-item .cover .love{left:0;font-size:18px}.eqc-image-item .cover .love.has,.eqc-image-item .cover .love:hover{color:#ff296a}.eqc-image-item .cover .preview{right:0;font-size:20px}.eqc-image-item .cover .preview:hover{color:#1593ff}.eqc-image-item .cover .select{position:absolute;right:10px;bottom:10px;z-index:1}.eqc-image-item .info{height:36px;line-height:36px}.eqc-image-item .info .price{font-size:12px;color:#1593ff}.eqc-image-item .info .logo{float:right;width:14px;height:14px;margin:11px 8px;opacity:.5;background:50%/contain no-repeat}', ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "eqc-image-item"
        }, [i("div", {
            staticClass: "cover",
            style: {
                backgroundImage: "url(" + e.env.host.file + e.getPath(e.item.path) + ")"
            },
            on: {
                click: function(t) {
                    e.select(e.item)
                }
            }
        }, [i("div", {
            staticClass: "mask"
        }), e._v(" "), e.showTagManage ? i("div", {
            staticClass: "select-box-active",
            class: {
                active: e.item.isChecked
            }
        }, [i("i", {
            staticClass: "eqf-yes"
        })]) : e._e(), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLoveSys,
                expression: "showLoveSys"
            }],
            staticClass: "icon love fl hint--top hint--rounded",
            attrs: {
                "data-hint": "收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.addFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love-line"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "icon love fl hint--top hint--rounded has",
            attrs: {
                "data-hint": "取消收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.deleteFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPreview,
                expression: "showPreview"
            }],
            staticClass: "icon preview hint--top hint--rounded",
            attrs: {
                "data-hint": "预览"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.preview(e.item)
                }
            }
        }, [i("i", {
            staticClass: "btn eqf-eye-l"
        })])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice || e.showlogo,
                expression: "showPrice || showlogo"
            }],
            staticClass: "info"
        }, [i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice,
                expression: "showPrice"
            }],
            staticClass: "price"
        }, [e._v(e._s(e._f("price")(e.item.price)))]), e._v(" "), i("a", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showlogo,
                expression: "showlogo"
            }],
            staticClass: "logo",
            style: {
                backgroundImage: "url(" + e.getBrand(e.item.brand).logo + ")"
            },
            attrs: {
                target: "_blank",
                href: e.getBrand(e.item.brand).url
            }
        })])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-image-list",
            class: {
                sys: e.showCondition,
                "no-sub": !e.noSubCategory,
                tag: e.showTag,
                "tag-manage": e.showTagManage
            }
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showList,
                expression: "showList"
            }, {
                name: "scroll-bar",
                rawName: "v-scroll-bar",
                value: {
                    onScrollEnd: e.onScrollEnd
                },
                expression: "{onScrollEnd}"
            }],
            ref: "wrap",
            staticClass: "wrap"
        }, [i("ul", {
            staticClass: "list",
            class: {
                complete: this.showTagManage
            }
        }, e._l(e.list, function(t) {
            return i("image-list-item", {
                key: t.id,
                attrs: {
                    item: t,
                    list: e.list
                }
            })
        }))]), e._v(" "), i("list-status", {
            attrs: {
                isBusy: e.isBusy,
                list: e.list,
                "empty-list-msg": e.emptyListMsg
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(238);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("6c1a203a", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-image-preview{position:absolute;left:0;top:0;bottom:0;right:0;z-index:2}.eqc-image-preview .content{display:flex;align-items:center;justify-content:center;height:calc(100% - 60px);background:rgba(0,0,0,.7)}.eqc-image-preview .content .cover{width:484px;height:484px;background:no-repeat 50%/contain}.eqc-image-preview .content .icon{position:absolute;width:36px;height:36px;line-height:34px;text-align:center;font-size:20px;border:1px solid #fff;border-radius:50%;color:#fff;cursor:pointer;transition:all .3s}.eqc-image-preview .content .icon.ctrl:hover{background:#1593ff;border:1px solid #1593ff}.eqc-image-preview .content .icon.ctrl.pre{left:28px}.eqc-image-preview .content .icon.ctrl.next{right:28px}.eqc-image-preview .content .icon.close{top:28px;right:28px}.eqc-image-preview .content .icon.close:hover{background:#ff2a6a;border:1px solid #ff2a6a}.eqc-image-preview .foot{position:relative;height:60px;box-shadow:0 -6px 6px 0 rgba(0,0,0,.16)}.eqc-image-preview .foot .info{display:inline-block;width:calc(100% - 88px);height:60px;line-height:60px;padding-left:28px;background:#fff}.eqc-image-preview .foot .info .name{font-size:16px;color:#111}.eqc-image-preview .foot .info .love{display:inline-block;width:96px;height:36px;line-height:34px;margin-left:252px;font-size:12px;border:1px solid #666;border-radius:60px;cursor:pointer;transition:all .3s}.eqc-image-preview .foot .info .love .icon{display:inline-block;width:34px;height:34px;line-height:34px;font-size:16px;text-align:center;vertical-align:top}.eqc-image-preview .foot .info .love:hover{color:#fff;background:#ff2a6a;border:1px solid #ff2a6a}.eqc-image-preview .foot .info .icon-love{display:block;margin-right:16px;cursor:pointer}.eqc-image-preview .foot .info .icon-love:hover{color:#ff2a6a}.eqc-image-preview .foot .info .price{margin-right:16px;font-size:14px;color:#1593ff}.eqc-image-preview .foot .submit{display:flex;align-items:center;justify-content:center;width:88px;height:100%;color:#fff;cursor:pointer;transition:all .3s}.eqc-image-preview .foot .submit.use{background:#1593ff}.eqc-image-preview .foot .submit.use:hover{background:#198ae7}.eqc-image-preview .foot .submit.buy{background:#ffb243}.eqc-image-preview .foot .submit.buy:hover{background:#ef8a00}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-image-preview"
        }, [i("div", {
            staticClass: "content"
        }, [i("div", {
            staticClass: "cover",
            style: {
                backgroundImage: "url(" + e.env.host.file + e.item.path + ")"
            }
        }), e._v(" "), i("i", {
            staticClass: "icon ctrl pre eqf-left",
            on: {
                click: function(t) {
                    e.getItem(-1)
                }
            }
        }), e._v(" "), i("i", {
            staticClass: "icon ctrl next eqf-right",
            on: {
                click: function(t) {
                    e.getItem(1)
                }
            }
        }), e._v(" "), i("i", {
            staticClass: "icon close eqf-no",
            on: {
                click: e.hide
            }
        })]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [i("div", {
            staticClass: "info"
        }, [i("span", {
            staticClass: "name"
        }, [e._v("图片预览")]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice,
                expression: "showPrice"
            }],
            staticClass: "price fr"
        }, [e._v(e._s(e._f("price")(e.item.price)))]), e._v(" "), i("span", {
            staticClass: "icon-love fr hint--left hint--rounded",
            attrs: {
                "data-hint": "收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.addFavorite(e.item)
                }
            }
        }, [i("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "icon eqf-love-line"
        })])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showUse,
                expression: "showUse"
            }],
            staticClass: "submit use fr btn",
            on: {
                click: function(t) {
                    e.use(e.item)
                }
            }
        }, [e._v("使用")]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showBuy,
                expression: "showBuy"
            }],
            staticClass: "submit buy fr btn",
            on: {
                click: function(t) {
                    e.buy(e.item)
                }
            }
        }, [e._v("购买")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-my", {
            class: {
                blur: e.preview.show
            },
            attrs: {
                type: e.headTab,
                value: e.value
            },
            on: {
                choose: e.chooseHead
            }
        }), e._v(" "), e.showTagManage ? i("base-tag-manage-bar", {
            attrs: {
                "item-list": e.info.list,
                "tag-list": e.tag.list,
                "tag-selected": e.tag.selected
            },
            on: {
                delete: e.deleteFiles,
                addTo: e.addTo,
                ok: e.completeTag
            }
        }) : e._e(), e._v(" "), e.showTag ? i("base-tag", {
            class: {
                blur: e.preview.show
            },
            attrs: {
                list: e.tag.list,
                item: e.tag.selected
            },
            on: {
                choose: e.chooseTag,
                manage: e.manageTag
            }
        }) : e._e(), e._v(" "), e.showTagManage ? i("base-tag-manage", {
            attrs: {
                list: e.tag.list,
                item: e.tag.selected
            },
            on: {
                choose: e.chooseTag,
                editTag: e.editTag,
                deleteTag: e.deleteTag,
                ok: e.completeTag
            }
        }) : e._e(), e._v(" "), i("image-list", {
            ref: "list",
            class: {
                blur: e.preview.show
            },
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.preview.show ? i("image-preview", {
            attrs: {
                list: e.info.list
            },
            on: {
                getNextPage: e.getNextPage
            }
        }) : e._e()], 1)], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(70)
      , s = i(242)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-sys", {
            class: {
                blur: e.preview.show
            },
            attrs: {
                category1: e.category1,
                category2: e.category2,
                sort: e.sort,
                price: e.price,
                search: e.search
            },
            on: {
                chooseCategory1: e.chooseCategory1,
                chooseCategory2: e.chooseCategory2,
                chooseSort: e.chooseSort,
                choosePrice: e.choosePrice,
                showSearch: e.showSearch,
                hideSearch: e.hideSearch,
                search: e.searchWithKeyWords
            }
        }), e._v(" "), i("image-list", {
            ref: "list",
            class: {
                blur: e.preview.show
            },
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.preview.show ? i("image-preview", {
            attrs: {
                list: e.info.list
            },
            on: {
                getNextPage: e.getNextPage
            }
        }) : e._e()], 1)], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-meterial"
        }, [i("base-nav", {
            attrs: {
                "is-top": e.tagManage.show
            }
        }, [i("span", {
            staticClass: "title",
            attrs: {
                slot: "title"
            },
            slot: "title"
        }, [e._v("图片库")]), e._v(" "), i("div", {
            staticClass: "desc",
            attrs: {
                slot: "agreement"
            },
            slot: "agreement"
        }, [e._v("\n            使用图片即代表同意并接受\n            "), i("span", {
            staticClass: "agreement",
            on: {
                click: e.openAgreement
            }
        }, [e._v("《卡美美图片版权许可与服务协议》")])]), e._v(" "), i("template", {
            slot: "menu"
        }, [i("li", {
            class: {
                active: "my" === e.sideTab
            },
            on: {
                click: function(t) {
                    console.log("我的图片被点击");
                    e.chooseSide("my")
                }
            }
        }, [e._v("我的图片")]), e._v(" "), i("li", {
            class: {
                active: "sys" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("sys")
                }
            }
        }, [e._v("图片")])]), e._v(" "), i("template", {
            slot: "coupon"
        }, [i("li", e._l(e.coupons, function(e) {
            return i("a", {
                key: e.id,
                style: {
                    "background-image": "url(" + e.path + ")"
                },
                attrs: {
                    target: "_blank",
                    href: e.url
                }
            })
        }))]), e._v(" "), i("template", {
            slot: "fun"
        }, [i("nav-mobile-upload", e._b({}, "nav-mobile-upload", e.mobileUploadOptions, !1)), e._v(" "), e.showUploader ? i("nav-upload", e._b({}, "nav-upload", e.uploadOptions, !1)) : e._e()], 1)], 2), e._v(" "), "my" === e.sideTab ? i("image-my", {
            ref: "my"
        }) : e._e(), e._v(" "), "sys" === e.sideTab ? i("image-sys", {
            ref: "sys"
        }) : e._e()], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(71)
      , s = i(259)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = i(72)
      , s = i(256)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(247);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("37d1eecd", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-image-list{height:calc(100% - 60px)}.eqc-image-list.sys{height:calc(100% - 60px - 104px)}.eqc-image-list.sys .wrap .list{padding-top:0}.eqc-image-list.sys.no-sub,.eqc-image-list.tag{height:calc(100% - 60px - 68px)}.eqc-image-list.tag .wrap .list{padding-top:0}.eqc-image-list.tag-manage{position:absolute;left:-176px;width:100%;height:calc(100% - 60px - 60px);background:#fff;z-index:1}.eqc-image-list .wrap{position:relative;height:100%}.eqc-image-list .wrap .list{padding:28px}", ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(249)
    }
    var s = i(75)
      , n = i(251)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(250);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("edf6a080", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '.eqc-image-item{display:inline-block;vertical-align:top}.eqc-image-item:not(:nth-child(5n)){margin-right:12px}.eqc-image-item:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(5)){margin-top:12px}.eqc-image-item .cover{position:relative;width:136px;height:136px;background:#eee 50%/contain no-repeat}.eqc-image-item .cover:after{content:"";display:block;position:absolute;bottom:0;width:100%;height:100px;background-image:linear-gradient(-180deg,transparent,rgba(0,0,0,.05) 31%,rgba(0,0,0,.1) 48%,rgba(0,0,0,.2) 66%,rgba(0,0,0,.3) 88%,rgba(0,0,0,.35) 95%,rgba(0,0,0,.4) 99%)}.eqc-image-item .cover:hover .mask{opacity:.3}.eqc-image-item .cover .mask,.eqc-image-item .cover .select-box{position:absolute;height:100%;width:100%;opacity:0;transition:all .3s}.eqc-image-item .cover .mask{background:#000;pointer-events:none}.eqc-image-item .cover .select-box{border:2px solid #1593ff}.eqc-image-item .cover .select-box:after{content:"";position:absolute;top:0;left:0;border:18px solid transparent;border-top:18px solid #1593ff;border-left:18px solid #1593ff}.eqc-image-item .cover .select-box i{position:relative;font-size:20px;color:#fff;z-index:1}.eqc-image-item .cover .select-box.active{opacity:1}.eqc-image-item .cover .icon{position:absolute;bottom:0;width:20px;height:20px;line-height:20px;margin:8px;text-align:center;color:#fff;cursor:pointer;transition:all .3s;z-index:1}.eqc-image-item .cover .love{left:0;font-size:18px}.eqc-image-item .cover .love.has,.eqc-image-item .cover .love:hover{color:#ff296a}.eqc-image-item .cover .preview{right:0;font-size:20px}.eqc-image-item .cover .preview:hover{color:#1593ff}.eqc-image-item .cover .select{position:absolute;right:10px;bottom:10px;z-index:1}.eqc-image-item .info{height:36px;line-height:36px}.eqc-image-item .info .price{font-size:12px;color:#1593ff}.eqc-image-item .info .logo{float:right;width:20px;height:20px;margin:8px;background:50%/contain no-repeat}', ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "eqc-image-item"
        }, [i("div", {
            staticClass: "cover",
            style: {
                backgroundImage: "url(" + e.env.host.file + e.item.path + ")"
            },
            on: {
                click: function(t) {
                    e.use(e.item)
                }
            }
        }, [i("div", {
            staticClass: "mask"
        }), e._v(" "), i("div", {
            staticClass: "select-box",
            class: {
                active: e.item.isChecked
            }
        }, [i("i", {
            staticClass: "eqf-yes"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLoveSys,
                expression: "showLoveSys"
            }],
            staticClass: "icon love fl hint--top hint--rounded",
            attrs: {
                "data-hint": "收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.addFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love-line"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "icon love fl hint--top hint--rounded has",
            attrs: {
                "data-hint": "取消收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.deleteFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPreview,
                expression: "showPreview"
            }],
            staticClass: "icon preview hint--top hint--rounded",
            attrs: {
                "data-hint": "预览"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.preview(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-eye-l"
        })])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-image-list",
            class: {
                sys: e.showCondition,
                "no-sub": !e.noSubCategory
            }
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showList,
                expression: "showList"
            }, {
                name: "scroll-bar",
                rawName: "v-scroll-bar",
                value: {
                    onScrollEnd: e.onScrollEnd
                },
                expression: "{onScrollEnd}"
            }],
            ref: "wrap",
            staticClass: "wrap"
        }, [i("ul", {
            staticClass: "list"
        }, e._l(e.list, function(t) {
            return i("shape-list-item", {
                key: t.id,
                attrs: {
                    item: t,
                    list: e.list
                }
            })
        }))]), e._v(" "), i("list-status", {
            attrs: {
                isBusy: e.isBusy,
                list: e.list,
                "empty-list-msg": e.emptyListMsg
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    var o = i(254);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("1f3cf3ab", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-image-preview{position:absolute;left:0;top:0;bottom:0;right:0;z-index:2}.eqc-image-preview .content{display:flex;align-items:center;justify-content:center;height:calc(100% - 60px);background:rgba(0,0,0,.7)}.eqc-image-preview .content .cover{width:484px;height:484px;background:no-repeat 50%/contain}.eqc-image-preview .content .icon{position:absolute;width:36px;height:36px;line-height:34px;text-align:center;font-size:20px;border:1px solid #fff;border-radius:50%;color:#fff;cursor:pointer;transition:all .3s}.eqc-image-preview .content .icon.ctrl:hover{background:#1593ff;border:1px solid #1593ff}.eqc-image-preview .content .icon.ctrl.pre{left:28px}.eqc-image-preview .content .icon.ctrl.next{right:28px}.eqc-image-preview .content .icon.close{top:28px;right:28px}.eqc-image-preview .content .icon.close:hover{background:#ff2a6a;border:1px solid #ff2a6a}.eqc-image-preview .foot{position:relative;height:60px;box-shadow:0 -6px 6px 0 rgba(0,0,0,.16)}.eqc-image-preview .foot .info{display:inline-block;width:calc(100% - 88px);height:60px;line-height:60px;padding-left:28px;background:#fff}.eqc-image-preview .foot .info .name{font-size:16px;color:#111}.eqc-image-preview .foot .info .love{display:inline-block;width:96px;height:36px;line-height:34px;margin-left:252px;font-size:12px;border:1px solid #666;border-radius:60px;cursor:pointer;transition:all .3s}.eqc-image-preview .foot .info .love .icon{display:inline-block;width:34px;height:34px;line-height:34px;font-size:16px;text-align:center;vertical-align:top}.eqc-image-preview .foot .info .love:hover{color:#fff;background:#ff2a6a;border:1px solid #ff2a6a}.eqc-image-preview .foot .info .price{margin-right:16px;font-size:14px;color:#1593ff}.eqc-image-preview .foot .submit{display:flex;align-items:center;justify-content:center;width:88px;height:100%;color:#fff;cursor:pointer;transition:all .3s}.eqc-image-preview .foot .submit.use{background:#1593ff}.eqc-image-preview .foot .submit.use:hover{background:#198ae7}.eqc-image-preview .foot .submit.buy{background:#ffb243}.eqc-image-preview .foot .submit.buy:hover{background:#ef8a00}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-image-preview"
        }, [i("div", {
            staticClass: "content"
        }, [i("div", {
            staticClass: "cover",
            style: {
                backgroundImage: "url(" + e.env.host.file + e.item.path + ")"
            }
        }), e._v(" "), i("i", {
            staticClass: "icon ctrl pre eqf-left",
            on: {
                click: function(t) {
                    e.getItem(-1)
                }
            }
        }), e._v(" "), i("i", {
            staticClass: "icon ctrl next eqf-right",
            on: {
                click: function(t) {
                    e.getItem(1)
                }
            }
        }), e._v(" "), i("i", {
            staticClass: "icon close eqf-no",
            on: {
                click: e.hide
            }
        })]), e._v(" "), i("div", {
            staticClass: "foot"
        }, [i("div", {
            staticClass: "info"
        }, [i("span", {
            staticClass: "name"
        }, [e._v("形状预览")]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "love"
        }, [i("i", {
            staticClass: "icon eqf-love-line"
        }), e._v("加入收藏")])]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showUse,
                expression: "showUse"
            }],
            staticClass: "submit use fr",
            on: {
                click: function(t) {
                    e.use(e.item)
                }
            }
        }, [e._v("使用")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-my", {
            class: {
                blur: e.preview.show
            },
            attrs: {
                type: e.headTab,
                value: e.value
            },
            on: {
                choose: e.chooseHead
            }
        }), e._v(" "), i("shape-list", {
            ref: "list",
            class: {
                blur: e.preview.show
            },
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.preview.show ? i("shape-preview", {
            attrs: {
                list: e.info.list
            },
            on: {
                getNextPage: e.getNextPage
            }
        }) : e._e()], 1)], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(78)
      , s = i(258)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-sys", {
            class: {
                blur: e.preview.show
            },
            attrs: {
                category1: e.category1,
                category2: e.category2,
                sort: e.sort,
                price: e.price,
                search: e.search,
                "show-search-btn": !1
            },
            on: {
                chooseCategory1: e.chooseCategory1,
                chooseCategory2: e.chooseCategory2,
                chooseSort: e.chooseSort,
                choosePrice: e.choosePrice,
                showSearch: e.showSearch,
                hideSearch: e.hideSearch,
                search: e.searchWithKeyWords
            }
        }), e._v(" "), i("shape-list", {
            ref: "list",
            class: {
                blur: e.preview.show
            },
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        }), e._v(" "), i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.preview.show ? i("shape-preview", {
            attrs: {
                list: e.info.list
            },
            on: {
                getNextPage: e.getNextPage
            }
        }) : e._e()], 1)], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-meterial"
        }, [i("base-nav", {
            attrs: {
                "show-agreement": !1
            }
        }, [i("span", {
            staticClass: "title",
            attrs: {
                slot: "title"
            },
            slot: "title"
        }, [e._v("形状库")]), e._v(" "), i("template", {
            slot: "menu"
        }, [i("li", {
            class: {
                active: "my" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("my")
                }
            }
        }, [e._v("我的形状")]), e._v(" "), i("li", {
            class: {
                active: "sys" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("sys")
                }
            }
        }, [e._v("形状")])]), e._v(" "), i("template", {
            slot: "coupon"
        }, [i("li", e._l(e.coupons, function(e) {
            return i("a", {
                key: e.id,
                style: {
                    "background-image": "url(" + e.path + ")"
                },
                attrs: {
                    target: "_blank",
                    href: e.url
                }
            })
        }))])], 2), e._v(" "), "my" === e.sideTab ? i("shape-my", {
            ref: "my"
        }) : e._e(), e._v(" "), "sys" === e.sideTab ? i("shape-sys", {
            ref: "sys"
        }) : e._e()], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(79)
      , s = i(280)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(262)
    }
    var s = i(80)
      , n = i(264)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(263);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("74e8be52", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-nav-preview .preivew-btn{position:relative;z-index:2;background:#1593ff;cursor:pointer;transition:all .3s}.eqc-nav-preview .preivew-btn.active,.eqc-nav-preview .preivew-btn:hover{background:#198ae7}.eqc-nav-preview .preivew-btn .icon{font-size:16px;vertical-align:middle}.eqc-nav-preview .preivew-btn .tip{line-height:16px;vertical-align:middle}.eqc-nav-preview .preivew-text{position:absolute;bottom:0;left:176px;height:60px;line-height:60px;width:784px;box-shadow:0 -6px 6px 0 rgba(0,0,0,.16);background:#fff;z-index:1;transition:all .3s;transform:translate3d(-784px,0,0)}.eqc-nav-preview .preivew-text.active{transform:translateZ(0)}.eqc-nav-preview .preivew-text .box{display:inline-block;position:relative;margin-right:16px}.eqc-nav-preview .preivew-text .box .text{width:400px;height:36px;padding:0 70px 0 12px;border:1px solid #ccd5db;border-radius:3px;color:#000}.eqc-nav-preview .preivew-text .box .text::-webkit-input-placeholder{color:#999}.eqc-nav-preview .preivew-text .box .clear,.eqc-nav-preview .preivew-text .box .num{position:absolute;color:#a3afb7}.eqc-nav-preview .preivew-text .box .num{right:12px;top:0}.eqc-nav-preview .preivew-text .box .clear{right:50px;top:23px;cursor:pointer}.eqc-nav-preview .preivew-text .box .clear:hover{color:#76838f}.eqc-nav-preview .preivew-text .preview{width:72px;height:36px;line-height:36px}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "preview eqc-nav-preview"
        }, [i("div", {
            staticClass: "preivew-btn",
            class: {
                active: e.isActive
            },
            on: {
                click: e.active
            }
        }, [i("i", {
            staticClass: "icon eqf-fontmall"
        }), e._v(" "), i("span", {
            staticClass: "tip"
        }, [e._v("实时预览")])]), e._v(" "), i("div", {
            staticClass: "preivew-text",
            class: {
                active: e.isActive
            }
        }, [i("div", {
            staticClass: "box"
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model.trim",
                value: e.previewText,
                expression: "previewText",
                modifiers: {
                    trim: !0
                }
            }],
            ref: "input",
            staticClass: "text",
            attrs: {
                placeholder: "请输入要实时预览的文字",
                maxlength: "10"
            },
            domProps: {
                value: e.previewText
            },
            on: {
                keyup: function(t) {
                    if (!("button"in t) && e._k(t.keyCode, "enter", 13, t.key))
                        return null;
                    e.preview(t)
                },
                input: function(t) {
                    t.target.composing || (e.previewText = t.target.value.trim())
                },
                blur: function(t) {
                    e.$forceUpdate()
                }
            }
        }), e._v(" "), i("span", {
            staticClass: "num"
        }, [e._v(e._s(e.previewText.length) + "/10")]), e._v(" "), i("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.previewText.length,
                expression: "previewText.length"
            }],
            staticClass: "clear eqf-no-f",
            on: {
                click: e.clearPreviewText
            }
        })]), e._v(" "), i("span", {
            staticClass: "preview eqc-btn blue h36",
            on: {
                click: e.preview
            }
        }, [e._v("预览")])])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(81)
      , s = i(277)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    var o = i(267);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("85f53318", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-font-list{height:calc(100% - 60px)}.eqc-font-list.sys{height:calc(100% - 60px - 104px)}.eqc-font-list.sys .wrap .list{padding-top:0}.eqc-font-list.sys.no-sub{height:calc(100% - 60px - 68px)}.eqc-font-list .wrap{position:relative;height:100%}.eqc-font-list .wrap .list{padding:28px}", ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(269)
    }
    var s = i(84)
      , n = i(275)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(270);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("6f518cb0", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-font-item{display:inline-block;position:relative;width:calc((100% - 16px) / 2);vertical-align:top;background:#fafafa;transition:background,box-shadow .3s}.eqc-font-item:not(:nth-child(2n)){margin-right:16px}.eqc-font-item:not(:first-child):not(:nth-child(2)){margin-top:16px}.eqc-font-item:hover{box-shadow:0 0 16px 0 rgba(0,0,0,.16);background:#fff}.eqc-font-item .preview{height:72px;line-height:72px;font-size:44px;text-align:center;border-bottom:1px solid #e6ebed}.eqc-font-item .info{line-height:20px;height:36px;padding:8px 12px;font-size:12px}.eqc-font-item .info .love{margin-right:10px;font-size:14px;color:#666;cursor:pointer;transition:all .3s}.eqc-font-item .info .love.has,.eqc-font-item .info .love:hover{color:#ff296a}.eqc-font-item .info .price{color:#1593ff}.eqc-font-item .info .name{color:#111}.eqc-font-item .info .version{color:#111;margin-left:12px}.eqc-font-item .info>.switch{margin-left:8px}.eqc-font-item .expire{position:absolute;left:0;top:0;height:18px;line-height:18px;padding:0 6px;font-size:12px;color:#fff}.eqc-font-item .expire.will{background:#ff296a}.eqc-font-item .expire.end{opacity:.7;background:#000}", ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(272)
    }
    var s = i(85)
      , n = i(274)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(273);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("29ad3881", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-switch{display:inline-block;width:40px;padding:2px;border-radius:10px;background:#999;cursor:pointer}.eqc-switch .switch{width:16px;height:16px;border-radius:50%;background:#fff;float:left}.eqc-switch.open{background:#1593ff}.eqc-switch.open .switch{float:right}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-switch",
            class: {
                open: e.isOpen
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.change(t)
                }
            }
        }, [i("i", {
            staticClass: "switch"
        })])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("li", {
            staticClass: "eqc-font-item",
            on: {
                click: function(t) {
                    e.useFont(e.item)
                }
            }
        }, [i("div", {
            staticClass: "preview ellipsis",
            style: {
                fontFamily: e.item.fontFamily || e.item.font_family
            }
        }, [e._v(e._s(this.previewText))]), e._v(" "), i("div", {
            staticClass: "info clearfix"
        }, [i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLoveSys,
                expression: "showLoveSys"
            }],
            staticClass: "love fl hint--top hint--rounded",
            attrs: {
                "data-hint": "收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.addFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love-line"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showLove,
                expression: "showLove"
            }],
            staticClass: "love fl hint--top hint--rounded has",
            attrs: {
                "data-hint": "取消收藏"
            },
            on: {
                click: function(t) {
                    t.stopPropagation(),
                    e.deleteFavorite(e.item)
                }
            }
        }, [i("i", {
            staticClass: "eqf-love"
        })]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPrice,
                expression: "showPrice"
            }],
            staticClass: "price"
        }, [e._v(e._s(e._f("price")(e.item.price)))]), e._v(" "), i("ui-switch", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showSwitch,
                expression: "showSwitch"
            }],
            staticClass: "switch fr hint--left hint--rounded",
            attrs: {
                "data-hint": 1 === e.item.status ? "点击后该字体将在文字快捷下拉菜单中隐藏" : "点击后该字体将在文字快捷下拉菜单中显示",
                "is-open": 1 === e.item.status
            },
            on: {
                onChange: function(t) {
                    e.changeFontStatus(e.item)
                }
            }
        }), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showVersion,
                expression: "showVersion"
            }],
            staticClass: "version fr"
        }, [e._v(e._s(1 === e.item.license ? "商用" : "个人"))]), e._v(" "), i("span", {
            staticClass: "name fr"
        }, [e._v(e._s(e.item.name))])], 1), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.item.expiresTime | e.inDays,
                expression: "item.expiresTime | inDays"
            }]
        }), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showExpire && 0 === e.item.expStatus,
                expression: "showExpire && item.expStatus === 0"
            }],
            staticClass: "expire end"
        }, [e._v("已过期")]), e._v(" "), i("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showExpire && 1 === e.item.expStatus && e.inDays(e.item.expiresTime, 30),
                expression: "showExpire && item.expStatus === 1 && inDays(item.expiresTime, 30)"
            }],
            staticClass: "expire will"
        }, [e._v("即将过期")])])
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-font-list",
            class: {
                sys: e.showCondition,
                "no-sub": !e.noSubCategory
            }
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showList,
                expression: "showList"
            }, {
                name: "scroll-bar",
                rawName: "v-scroll-bar",
                value: {
                    onScrollEnd: e.onScrollEnd
                },
                expression: "{onScrollEnd}"
            }],
            ref: "wrap",
            staticClass: "wrap"
        }, [i("ul", {
            ref: "list",
            staticClass: "list"
        }, e._l(e.list, function(t, o) {
            return i("font-list-item", {
                key: t.id,
                attrs: {
                    item: t,
                    list: e.list,
                    "data-font-index": o
                }
            })
        }))]), e._v(" "), i("list-status", {
            attrs: {
                isBusy: e.isBusy,
                list: e.list,
                "empty-list-msg": e.emptyListMsg
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-my", {
            attrs: {
                type: e.headTab,
                value: e.value
            },
            on: {
                choose: e.chooseHead
            }
        }), e._v(" "), i("font-list", {
            ref: "list",
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = i(86)
      , s = i(279)
      , n = i(0)
      , a = n(o.a, s.a, !1, null, null, null);
    t.a = a.exports
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-content"
        }, [i("base-head-sys", {
            attrs: {
                category1: e.category1,
                category2: e.category2,
                sort: e.sort,
                price: e.price,
                search: e.search
            },
            on: {
                chooseCategory1: e.chooseCategory1,
                chooseCategory2: e.chooseCategory2,
                chooseSort: e.chooseSort,
                choosePrice: e.choosePrice,
                showSearch: e.showSearch,
                hideSearch: e.hideSearch,
                search: e.searchWithKeyWords
            }
        }), e._v(" "), i("font-list", {
            ref: "list",
            attrs: {
                "is-busy": e.info.isBusy,
                list: e.info.list,
                "empty-list-msg": e.emptyListMsg
            },
            on: {
                getNextPage: e.getNextPage
            }
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-meterial"
        }, [i("base-nav", [i("span", {
            staticClass: "title",
            attrs: {
                slot: "title"
            },
            slot: "title"
        }, [e._v("字体库")]), e._v(" "), i("div", {
            staticClass: "desc",
            attrs: {
                slot: "agreement"
            },
            slot: "agreement"
        }, [e._v("\n            使用字体即代表同意并接受\n            "), i("span", {
            staticClass: "agreement",
            on: {
                click: e.openAgreement
            }
        }, [e._v("《卡美美字体版权许可与服务协议》")])]), e._v(" "), i("template", {
            slot: "menu"
        }, [i("li", {
            class: {
                active: "my" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("my")
                }
            }
        }, [e._v("我的字体")]), e._v(" "), i("li", {
            class: {
                active: "sys" === e.sideTab
            },
            on: {
                click: function(t) {
                    e.chooseSide("sys")
                }
            }
        }, [e._v("字体")])]), e._v(" "), i("template", {
            slot: "coupon"
        }, [i("li", e._l(e.coupons, function(e) {
            return i("a", {
                key: e.id,
                style: {
                    "background-image": "url(" + e.path + ")"
                },
                attrs: {
                    target: "_blank",
                    href: e.url
                }
            })
        }))]), e._v(" "), i("div", {
            staticClass: "tip",
            attrs: {
                slot: "tip"
            },
            slot: "tip"
        }, [e._v(e._s(e.tip))]), e._v(" "), i("template", {
            slot: "fun"
        }, [i("nav-preview")], 1)], 2), e._v(" "), "my" === e.sideTab ? i("font-my") : e._e(), e._v(" "), "sys" === e.sideTab ? i("font-sys", {
            ref: "sys"
        }) : e._e()], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        return d || (d = n.a.dialog.openLogin().then(function() {
            return r()(e.config)
        }).catch(function(e) {
            return Promise.reject(e)
        }).finally(function() {
            return d = null
        })),
        d
    }
    var s = i(5)
      , n = i.n(s)
      , a = i(6)
      , r = i.n(a)
      , c = i(13)
      , l = i.n(c)
      , u = (i(9),
    "application/x-www-form-urlencoded");
    r.a.defaults.headers["Content-Type"] = u,
    r.a.defaults.withCredentials = !0,
    r.a.interceptors.request.use(function(e) {
        return "post" === e.method && e.headers["Content-Type"] === u && "string" != typeof e.data && (e.data = l.a.stringify(e.data)),
        e
    }, function(e) {
        return Promise.reject(e)
    }),
    r.a.interceptors.response.use(function(e) {
        e.data || (e.data = {});
        var t = e.data;
        return "list"in t && (t.list = t.list || []),
        1001 === t.code ? o(e) : 500 === t.code ? (n.a.notifier.fail(t.msg || "未提供错误信息"),
        Promise.reject()) : e
    }, function(e) {
        if (!e.response)
            return n.a.notifier.fail("网络请求失败，请稍后重试"),
            Promise.reject(e);
        var t = e.response.status;
        return 401 === t ? o(e.response) : (403 === t && n.a.notifier.fail("对不起，您没有查看此内容的权限"),
        Promise.reject(e))
    });
    var d = null
}
, function(e, t, i) {
    "use strict";
    var o = i(5)
      , s = i.n(o)
      , n = i(283)
      , a = i.n(n)
      , r = i(284)
      , c = i(285)
      , l = i(286)
      , u = i(287)
      , d = i(288)
      , h = i(289)
      , p = i(290);
    s.a.use(a.a),
    s.a.store = new a.a.Store({
        modules: {
            image: r.a,
            background: c.a,
            shape: l.a,
            music: u.a,
            sound: d.a,
            font: h.a,
            common: p.a
        }
    }),
    t.a = s.a.store
}
, function(e, t) {
    e.exports = Vuex
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "upload",
        preview: {
            show: !1,
            selected: {}
        },
        tag: {
            show: !0,
            list: [],
            selected: {}
        },
        tagManage: {
            show: !1
        },
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        category: {
            selected: {}
        },
        selectList: [],
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [{
                id: [-1, -1],
                name: "全部"
            }, {
                id: [0, 0],
                name: "免费"
            }, {
                id: [1, 10],
                name: "1-10卡币"
            }, {
                id: [11, 20],
                name: "11-20卡币"
            }, {
                id: [21, 30],
                name: "21-30卡币"
            }],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        },
        mUpload: 0
    }, r = (s = {},
    o(s, n.a.IMAGE_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.IMAGE_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.IMAGE_PREVIEW, function(e, t) {
        var i = t.show
          , o = t.selected;
        void 0 !== i && (e.preview.show = i),
        o && (e.preview.selected = o)
    }),
    o(s, n.a.IMAGE_TAG, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.tag.list = i),
        o && (e.tag.selected = o)
    }),
    o(s, n.a.IMAGE_TAG_MANAGE, function(e, t) {
        var i = t.show;
        void 0 !== i && (e.tag.show = !i,
        e.tagManage.show = i)
    }),
    o(s, n.a.IMAGE_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        if (i && (e.category1.list = i),
        o) {
            if (void 0 === i) {
                var s = {
                    id: e.category1.selected.id,
                    name: e.category1.selected.name,
                    cat2: e.category2.selected,
                    catSort: e.sort.selected,
                    catPrice: e.price.selected
                };
                e.selectList.length <= 0 ? e.selectList.push(s) : (e.selectList.forEach(function(t) {
                    if (t.id === s.id) {
                        var i = e.selectList.indexOf(t);
                        e.selectList.splice(i, 1)
                    }
                }),
                e.selectList.push(s)),
                e.selectList.forEach(function(t) {
                    t.id === o.id && (e.category.selected = t.cat2,
                    e.category2.selected = t.cat2,
                    e.sort.selected = t.catSort,
                    e.price.selected = t.catPrice)
                })
            }
            e.category1.selected = o,
            e.category2.list = o.list,
            "全部" === o.name && (e.sort.selected = e.sort.list[0],
            e.price.selected = e.price.list[0])
        }
    }),
    o(s, n.a.IMAGE_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && e.category.selected.parentId !== i.id && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.IMAGE_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.IMAGE_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.IMAGE_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    o(s, n.a.IMAGE_M_UPLOAD, function(e) {
        e.mUpload = e.mUpload ? 0 : 1
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "upload",
        preview: {
            show: !1,
            selected: {}
        },
        tag: {
            show: !0,
            list: [],
            selected: {}
        },
        tagManage: {
            show: !1
        },
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        category: {
            selected: {}
        },
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [{
                id: [-1, -1],
                name: "全部"
            }, {
                id: [0, 0],
                name: "免费"
            }, {
                id: [1, 10],
                name: "1-10卡币"
            }, {
                id: [11, 20],
                name: "11-20卡币"
            }, {
                id: [21, 30],
                name: "21-30卡币"
            }],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        }
    }, r = (s = {},
    o(s, n.a.BACKGROUND_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.BACKGROUND_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.BACKGROUND_PREVIEW, function(e, t) {
        var i = t.show
          , o = t.selected;
        void 0 !== i && (e.preview.show = i),
        o && (e.preview.selected = o)
    }),
    o(s, n.a.BACKGROUND_TAG, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.tag.list = i),
        o && (e.tag.selected = o)
    }),
    o(s, n.a.BACKGROUND_TAG_MANAGE, function(e, t) {
        var i = t.show;
        void 0 !== i && (e.tag.show = !i,
        e.tagManage.show = i)
    }),
    o(s, n.a.BACKGROUND_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.category1.list = i),
        o && (e.category1.selected = o,
        e.category.selected = o,
        e.category2.list = o.list,
        e.category2.selected = {},
        "全部" === o.name && (e.sort.selected = e.sort.list[0],
        e.price.selected = e.price.list[0]))
    }),
    o(s, n.a.BACKGROUND_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.BACKGROUND_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.BACKGROUND_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.BACKGROUND_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "recently",
        preview: {
            show: !1,
            selected: {}
        },
        tag: {
            show: !0,
            list: [],
            selected: {}
        },
        tagManage: {
            show: !1
        },
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        rewordCategory: {
            selected: {}
        },
        selectList: [],
        category: {
            selected: {}
        },
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        }
    }, r = (s = {},
    o(s, n.a.SHAPE_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.SHAPE_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.SHAPE_PREVIEW, function(e, t) {
        var i = t.show
          , o = t.selected;
        void 0 !== i && (e.preview.show = i),
        o && (e.preview.selected = o)
    }),
    o(s, n.a.SHAPE_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        if (i && (e.category1.list = i),
        o) {
            if (void 0 === i) {
                var s = {
                    id: e.category1.selected.id,
                    name: e.category1.selected.name,
                    cat2: e.category2.selected,
                    catSort: e.sort.selected,
                    catPrice: e.price.selected
                };
                e.selectList.length <= 0 ? e.selectList.push(s) : (e.selectList.forEach(function(t) {
                    if (t.id === s.id) {
                        var i = e.selectList.indexOf(t);
                        e.selectList.splice(i, 1)
                    }
                }),
                e.selectList.push(s)),
                e.selectList.forEach(function(t) {
                    t.id === o.id && (e.category.selected = t.cat2,
                    e.category2.selected = t.cat2,
                    e.sort.selected = t.catSort,
                    e.price.selected = t.catPrice)
                })
            }
            e.category1.selected = o,
            e.category2.list = o.list,
            "全部" === o.name && (e.sort.selected = e.sort.list[0])
        }
    }),
    o(s, n.a.SHAPE_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && e.category.selected.parentId !== i.id && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.SHAPE_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.SHAPE_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.SHAPE_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "upload",
        selected: {},
        default: {},
        play: !1,
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        rewordCategory: {
            selected: {}
        },
        selectList: [],
        category: {
            selected: {}
        },
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [{
                id: [-1, -1],
                name: "全部"
            }, {
                id: [0, 0],
                name: "免费"
            }, {
                id: [1, 10],
                name: "1-10卡币"
            }, {
                id: [11, 20],
                name: "11-20卡币"
            }, {
                id: [21, 30],
                name: "21-30卡币"
            }],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        }
    }, r = (s = {},
    o(s, n.a.MUSIC_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.MUSIC_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.MUSIC_SELECTED, function(e, t) {
        var i = t.item;
        e.selected = i,
        e.play = !1
    }),
    o(s, n.a.MUSIC_DEFAULT, function(e, t) {
        var i = t.item;
        e.default = i,
        e.selected = i
    }),
    o(s, n.a.MUSIC_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        if (i && (e.category1.list = i),
        o) {
            if (void 0 === i) {
                var s = {
                    id: e.category1.selected.id,
                    name: e.category1.selected.name,
                    cat2: e.category2.selected,
                    catSort: e.sort.selected,
                    catPrice: e.price.selected
                };
                e.selectList.length <= 0 ? e.selectList.push(s) : (e.selectList.forEach(function(t) {
                    if (t.id === s.id) {
                        var i = e.selectList.indexOf(t);
                        e.selectList.splice(i, 1)
                    }
                }),
                e.selectList.push(s)),
                e.selectList.forEach(function(t) {
                    t.id === o.id && (e.category.selected = t.cat2,
                    e.category2.selected = t.cat2,
                    e.sort.selected = t.catSort,
                    e.price.selected = t.catPrice)
                })
            }
            e.category1.selected = o,
            e.category2.list = o.list,
            "全部" === o.name && (e.sort.selected = e.sort.list[0],
            e.price.selected = e.price.list[0])
        }
    }),
    o(s, n.a.MUSIC_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && e.category.selected.parentId !== i.id && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.MUSIC_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.MUSIC_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.MUSIC_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    o(s, n.a.MUSIC_PLAY, function(e, t) {
        var i = t.play;
        e.play = i
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "upload",
        selected: {},
        default: {},
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        category: {
            selected: {}
        },
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [{
                id: [-1, -1],
                name: "全部"
            }, {
                id: [0, 0],
                name: "免费"
            }, {
                id: [1, 10],
                name: "1-10卡币"
            }, {
                id: [11, 20],
                name: "11-20卡币"
            }, {
                id: [21, 30],
                name: "21-30卡币"
            }],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        }
    }, r = (s = {},
    o(s, n.a.SOUND_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.SOUND_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.SOUND_SELECTED, function(e, t) {
        var i = t.item;
        e.selected = i
    }),
    o(s, n.a.SOUND_DEFAULT, function(e, t) {
        var i = t.item;
        e.default = i,
        e.selected = i
    }),
    o(s, n.a.SOUND_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.category1.list = i),
        o && (e.category1.selected = o,
        e.category.selected = o,
        e.category2.list = o.list,
        e.category2.selected = {},
        "全部" === o.name && (e.sort.selected = e.sort.list[0],
        e.price.selected = e.price.list[0]))
    }),
    o(s, n.a.SOUND_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.SOUND_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.SOUND_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.SOUND_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var s, n = i(12), a = {
        sideTab: "sys",
        headTab: "buy",
        defaultText: "字体",
        previewText: "字体",
        previewEnText: "Eqxiu font",
        selected: {},
        category1: {
            list: [],
            selected: {}
        },
        category2: {
            list: [],
            selected: {}
        },
        category: {
            selected: {}
        },
        rewordCategory: {
            selected: {}
        },
        selectList: [],
        search: {
            show: !1,
            keyWords: ""
        },
        sort: {
            list: [{
                id: "sort",
                name: "最新"
            }, {
                id: "product_usage",
                name: "最热"
            }],
            selected: {
                id: "sort",
                name: "最新"
            }
        },
        price: {
            list: [{
                id: [-1, -1],
                name: "全部"
            }, {
                id: [0, 0],
                name: "免费"
            }, {
                id: [1, 10],
                name: "1-10卡币"
            }, {
                id: [11, 20],
                name: "11-20卡币"
            }],
            selected: {
                id: [-1, -1],
                name: "全部"
            }
        }
    }, r = (s = {},
    o(s, n.a.FONT_SIDE_TAB, function(e, t) {
        var i = t.tab;
        e.sideTab = i
    }),
    o(s, n.a.FONT_HEAD_TAB, function(e, t) {
        var i = t.tab;
        e.headTab = i
    }),
    o(s, n.a.FONT_PREVIEW_TEXT, function(e, t) {
        var i = t.text;
        null != i && "" !== i ? e.previewEnText = e.previewText = i : (e.previewEnText = "Eqxiu font",
        e.previewText = "字体")
    }),
    o(s, n.a.FONT_SELECTED, function(e, t) {
        var i = t.item;
        e.selected = i
    }),
    o(s, n.a.FONT_CATEGORY1, function(e, t) {
        var i = t.list
          , o = t.selected;
        if (i && (e.category1.list = i),
        o) {
            if (void 0 === i) {
                var s = {
                    id: e.category1.selected.id,
                    name: e.category1.selected.name,
                    cat2: e.category2.selected,
                    catSort: e.sort.selected,
                    catPrice: e.price.selected
                };
                e.selectList.length <= 0 ? e.selectList.push(s) : (e.selectList.forEach(function(t) {
                    if (t.id === s.id) {
                        var i = e.selectList.indexOf(t);
                        e.selectList.splice(i, 1)
                    }
                }),
                e.selectList.push(s)),
                e.selectList.forEach(function(t) {
                    t.id === o.id && (e.category.selected = t.cat2,
                    e.category2.selected = t.cat2,
                    e.sort.selected = t.catSort,
                    e.price.selected = t.catPrice)
                })
            }
            e.category1.selected = o,
            e.category2.list = o.list,
            "全部" === o.name && (e.sort.selected = e.sort.list[0],
            e.price.selected = e.price.list[0])
        }
    }),
    o(s, n.a.FONT_CATEGORY2, function(e, t) {
        var i = t.selected;
        i && e.category.selected.parentId !== i.id && (e.category2.selected = i,
        e.category.selected = i)
    }),
    o(s, n.a.FONT_SEARCH, function(e, t) {
        var i = t.show
          , o = t.keyWords;
        void 0 !== i && (e.search.show = i),
        void 0 !== o && (e.search.keyWords = o)
    }),
    o(s, n.a.FONT_SORT, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.sort.list = i),
        o && (e.sort.selected = o)
    }),
    o(s, n.a.FONT_PRICE, function(e, t) {
        var i = t.list
          , o = t.selected;
        i && (e.price.list = i),
        o && (e.price.selected = o)
    }),
    s);
    t.a = {
        state: a,
        mutations: r
    }
}
, function(e, t, i) {
    "use strict";
    var o = i(12)
      , s = {
        uploader: {
            show: !0
        }
    }
      , n = function(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }({}, o.a.COMMON_UPLOADER, function(e, t) {
        var i = t.show;
        e.uploader.show = i
    });
    t.a = {
        state: s,
        mutations: n
    }
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(292)
    }
    var s = i(87)
      , n = i(298)
      , a = i(0)
      , r = o
      , c = a(s.a, n.a, !1, r, null, null);
    t.a = c.exports
}
, function(e, t, i) {
    var o = i(293);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("059d2c7a", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, '*{margin:0;padding:0;border:0;outline:0}*,:after,:before{box-sizing:border-box}html{font-size:14px;font-family:Helvetica Neue,Microsoft YaHei,arial,sans-serif;line-height:1}body,html{height:100%}a{color:inherit;text-decoration:none;cursor:pointer}li{list-style:none}.transition{transition:all .3s}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.clearfix{zoom:1}.clearfix:after{content:".";display:block;height:0;visibility:hidden;clear:both}.fl{float:left}.fr{float:right}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.fade-enter-active{animation:fade-in .3s}.fade-leave-active{animation:fade-out .3s}@keyframes drop-in{0%{transform:translate3d(-10px,0,0) scale(.9);opacity:0}to{transform:translateZ(0) scale(1);opacity:1}}@keyframes drop-out{0%{transform:translateZ(0) scale(1);opacity:1}to{transform:translate3d(-10px,0,0) scale(.9);opacity:0}}.drop-enter-active{animation:drop-in .3s}.drop-leave-active{animation:drop-out .3s}.eqc-btn{display:inline-block;padding:0 12px;font-size:14px;text-align:center;border-radius:3px;transition:all .3s;cursor:pointer}.eqc-btn.blue{color:#fff;background:#1593ff;border:1px solid #1593ff}.eqc-btn.blue:hover{background:#198ae7;border:1px solid #198ae7}.eqc-btn.red{color:#fff;background:#ff2a6a;border:1px solid #ff2a6a}.eqc-btn.red:hover{background:#ff004d;border:1px solid #ff2a6a}.eqc-btn.white{color:#666;background:#fff;border:1px solid #ccd5db}.eqc-btn.white:hover{color:#1593ff;border:1px solid #1593ff}.eqc-btn.disable{color:#999;background:#eee;border:1px solid #eee;cursor:not-allowed}.eqc-btn.h36{height:36px;line-height:34px}.eqc-dialog{position:relative;background:#fff;overflow:hidden;box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.eqc-dialog>.head{display:flex;align-items:center;height:56px;background:#f7f7f7}.eqc-dialog>.head>.title{line-height:1;margin-left:20px;font-size:16px}.eqc-dialog>.head>.close{position:absolute;top:16px;right:20px;font-size:22px;cursor:pointer;transition:all .3s}.eqc-dialog>.head>.close:hover{color:#ff2a6a}.eqc-meterial{position:relative;width:960px;height:600px;cursor:default;background:#fff;box-shadow:0 0 16px 0 rgba(0,0,0,.16);overflow:hidden}.eqc-meterial .eqc-content{position:relative;width:calc(100% - 176px);height:100%;float:left}.eqc-meterial .eqc-content .blur{filter:blur(5px)}', ""])
}
, function(e, t, i) {
    "use strict";
    function o(e) {
        i(295)
    }
    var s = i(297)
      , n = i(0)
      , a = o
      , r = n(null, s.a, !1, a, null, null);
    t.a = r.exports
}
, function(e, t, i) {
    var o = i(296);
    "string" == typeof o && (o = [[e.i, o, ""]]),
    o.locals && (e.exports = o.locals);
    i(2)("96a7bf6c", o, !0, {})
}
, function(e, t, i) {
    t = e.exports = i(1)(!1),
    t.push([e.i, ".eqc-container{display:flex;align-items:center;justify-content:center;height:100%}.eqc-container .mask{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.6)}", ""])
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "eqc-container"
        }, [i("div", {
            directives: [{
                name: "close",
                rawName: "v-close"
            }],
            staticClass: "mask"
        }), e._v(" "), e._t("default")], 2)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
, function(e, t, i) {
    "use strict";
    var o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("base-container", [i("router-view", {
            key: e.$route.path
        })], 1)
    }
      , s = []
      , n = {
        render: o,
        staticRenderFns: s
    };
    t.a = n
}
]);
