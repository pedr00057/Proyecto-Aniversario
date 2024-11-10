(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [287], {
        4724: function (e, t, r) {
            Promise.resolve().then(r.bind(r, 728))
        },
        728: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return f
                }
            });
            var a = r(7437),
                n = r(3145),
                s = r(2265),
                l = r(3448);
            let o = (0, s.createContext)(void 0),
                c = e => {
                    let {
                        children: t,
                        className: r,
                        containerClassName: n
                    } = e, c = (0, s.useRef)(null), [u, i] = (0, s.useState)(!1);
                    return (0, a.jsx)(o.Provider, {
                        value: [u, i],
                        children: (0, a.jsx)("div", {
                            className: (0, l.cn)("py-20 flex items-center justify-center", n),
                            style: {
                                perspective: "1000px"
                            },
                            children: (0, a.jsx)("div", {
                                ref: c,
                                onMouseEnter: e => {
                                    if (i(!0), !c.current) return
                                },
                                onMouseMove: e => {
                                    if (!c.current) return;
                                    let {
                                        left: t,
                                        top: r,
                                        width: a,
                                        height: n
                                    } = c.current.getBoundingClientRect(), s = (e.clientX - t - a / 2) / 25, l = (e.clientY - r - n / 2) / 25;
                                    c.current.style.transform = "rotateY(".concat(s, "deg) rotateX(").concat(l, "deg)")
                                },
                                onMouseLeave: e => {
                                    c.current && (i(!1), c.current.style.transform = "rotateY(0deg) rotateX(0deg)")
                                },
                                className: (0, l.cn)("flex items-center justify-center relative transition-all duration-200 ease-linear", r),
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                children: t
                            })
                        })
                    })
                },
                u = e => {
                    let {
                        children: t,
                        className: r
                    } = e;
                    return (0, a.jsx)("div", {
                        className: (0, l.cn)("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]", r),
                        children: t
                    })
                },
                i = e => {
                    let {
                        as: t = "div",
                        children: r,
                        className: n,
                        translateX: o = 0,
                        translateY: c = 0,
                        translateZ: u = 0,
                        rotateX: i = 0,
                        rotateY: x = 0,
                        rotateZ: f = 0,
                        ...h
                    } = e, m = (0, s.useRef)(null), [p] = d();
                    (0, s.useEffect)(() => {
                        v()
                    }, [p]);
                    let v = () => {
                        m.current && (p ? m.current.style.transform = "translateX(".concat(o, "px) translateY(").concat(c, "px) translateZ(").concat(u, "px) rotateX(").concat(i, "deg) rotateY(").concat(x, "deg) rotateZ(").concat(f, "deg)") : m.current.style.transform =
                            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")
                    };
                    return (0, a.jsx)(t, {
                        ref: m,
                        className: (0, l.cn)("w-fit transition duration-200 ease-linear", n),
                        ...h,
                        children: r
                    })
                },
                d = () => {
                    let e = (0, s.useContext)(o);
                    if (void 0 === e) throw Error("useMouseEnter must be used within a MouseEnterProvider");
                    return e
                };
            var x = r(7648),
                f = function () {
                    return (0, a.jsx)(c, {
                        className: "inter-var",
                        children: (0, a.jsxs)(u, {
                            className: "bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ",
                            children: [(0, a.jsx)(i, {
                                translateZ: "50",
                                className: "text-xl font-bold text-neutral-600 dark:text-white",
                                children: "Este Item Flota :D"
                            }), (0, a.jsx)(i, {
                                as: "p",
                                translateZ: "60",
                                className: "text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",
                                children: "Pasa el cursor sobre el para que se mueva :3"
                            }), (0, a.jsx)(i, {
                                translateZ: "100",
                                className: "w-full mt-4",
                                children: (0, a.jsx)(n.default, {
                                    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    height: "1000",
                                    width: "1000",
                                    className: "h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",
                                    alt: "thumbnail"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-between items-center mt-20",
                                children: [(0, a.jsx)(i, {
                                    translateZ: 20,
                                    as: x.default,
                                    href: "https://uanl.mx/enlinea/",
                                    target: "__blank",
                                    className: "px-4 py-2 rounded-xl text-xs font-normal dark:text-white",
                                    children: "Link →"
                                }), (0, a.jsx)(i, {
                                    translateZ: 20,
                                    as: "button",
                                    className: "px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",
                                    children: "Bot\xf3n"
                                })]
                            })]
                        })
                    })
                }
        },
        3448: function (e, t, r) {
            "use strict";
            r.d(t, {
                cn: function () {
                    return s
                }
            });
            var a = r(1994),
                n = r(3335);

            function s() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, n.m6)((0, a.W)(t))
            }
        }
    },
    function (e) {
        e.O(0, [137, 145, 648, 971, 117, 744], function () {
            return e(e.s = 4724)
        }), _N_E = e.O()
    }
]);