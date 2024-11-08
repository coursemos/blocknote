function createSVG(react) {
    var defaultContext = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    }
    var iconContext = react.createContext && react.createContext(defaultContext)
    var attributeKeys = ["attr", "size", "title"];

    // 키를 제외한 새 객체를 반환하는 함수
    function excludeProperties(e, t) {
        if (null == e)
            return {};
        var n, react, o = function (e, t) {
            if (null == e)
                return {};
            var n = {};
            for (var react in e)
                if (Object.prototype.hasOwnProperty.call(e, react)) {
                    if (t.indexOf(react) >= 0)
                        continue;
                    n[react] = e[react]
                }
            return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (react = 0; react < i.length; react++)
                n = i[react],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    // Object.assign을 사용해 객체를 합치는 함수
    function assignProperties() {
        return assignProperties = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var react in n)
                    Object.prototype.hasOwnProperty.call(n, react) && (e[react] = n[react])
            }
            return e
        }
            ,
            assignProperties.apply(this, arguments)
    }

    // 객체 키 반환 함수
    function getObjectKeysWithSymbols(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var react = Object.getOwnPropertySymbols(e);
            t && (react = react.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
                n.push.apply(n, react)
        }
        return n
    }

    // 객체의 프로퍼티를 복사하여 새로운 객체를 반환하는 함수
    function deepMergeObjects(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? getObjectKeysWithSymbols(Object(n), !0).forEach((function (t) {
                defineOrUpdateProperty(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : getObjectKeysWithSymbols(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }

    // 객체 수정 혹은 추가 함수
    function defineOrUpdateProperty(e, t, n) {
        return t = function (e) {
            var t = function (e, t) {
                if ("object" != typeof e || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var react = n.call(e, t || "default");
                    if ("object" != typeof react)
                        return react;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : t + ""
        }(t),
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
    }

    // attr, chil 속성 처리 함수
    function createElementTree(e) {
        return e && e.map(((e, t) => react.createElement(e.tag, deepMergeObjects({
            key: t
        }, e.attr), createElementTree(e.child))))
    }

    function createSVGComponent(e) {
        return t => react.createElement(rednerSVG, assignProperties({
            attr: deepMergeObjects({}, e.attr)
        }, t), createElementTree(e.child))
    }

    // SVG 요소 생성하는 컴포넌트
    function rednerSVG(e) {
        var t = t => {
            var n, { attr: o, size: i, title: s } = e, a = excludeProperties(e, attributeKeys), l = i || t.size || "1em";
            return t.className && (n = t.className),
                e.className && (n = (n ? n + " " : "") + e.className),
                react.createElement("svg", assignProperties({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, o, a, {
                    className: n,
                    style: deepMergeObjects(deepMergeObjects({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: l,
                    width: l,
                    xmlns: "http://www.w3.org/2000/svg"
                }), s && react.createElement("title", null, s), e.children)
        };
        return void 0 !== iconContext ? react.createElement(iconContext.Consumer, null, (e => t(e))) : t(XI)
    }

    return { createSVGComponent }
}
