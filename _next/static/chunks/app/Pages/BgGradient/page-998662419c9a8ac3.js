(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [855], {
        4057: function (e, r, t) {
            Promise.resolve().then(t.bind(t, 1180))
        },
        1180: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function () {
                    return l
                }
            });
            var a = t(7437),
                n = t(2265),
                o = t(3448);
            let c = e => {
                let {
                    gradientBackgroundStart: r = "rgb(108, 0, 162)",
                    gradientBackgroundEnd: t = "rgb(0, 17, 82)",
                    firstColor: c = "18, 113, 255",
                    secondColor: l = "221, 74, 255",
                    thirdColor: i = "100, 220, 255",
                    fourthColor: s = "200, 50, 50",
                    fifthColor: d = "180, 180, 50",
                    pointerColor: u = "140, 100, 255",
                    size: v = "80%",
                    blendingValue: b = "hard-light",
                    children: f,
                    className: g,
                    interactive: _ = !0,
                    containerClassName: m
                } = e, p = (0, n.useRef)(null), [x, h] = (0, n.useState)(0), [y, z] = (0, n.useState)(0), [j, w] = (0, n.useState)(0), [N, k] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    document.body.style.setProperty("--gradient-background-start", r), document.body.style.setProperty("--gradient-background-end", t), document.body.style.setProperty("--first-color", c), document.body.style.setProperty("--second-color", l),
                        document.body.style.setProperty("--third-color", i), document.body.style.setProperty("--fourth-color", s), document.body.style.setProperty("--fifth-color", d), document.body.style.setProperty("--pointer-color", u), document.body.style.setProperty(
                            "--size", v), document.body.style.setProperty("--blending-value", b)
                }, []), (0, n.useEffect)(() => {
                    p.current && (h(x + (j - x) / 20), z(y + (N - y) / 20), p.current.style.transform = "translate(".concat(Math.round(x), "px, ").concat(Math.round(y), "px)"))
                }, [j, N]);
                let [P, E] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    E(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
                }, []), (0, a.jsxs)("div", {
                    className: (0, o.cn)("h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", m),
                    children: [(0, a.jsx)("svg", {
                        className: "hidden",
                        children: (0, a.jsx)("defs", {
                            children: (0, a.jsxs)("filter", {
                                id: "blurMe",
                                children: [(0, a.jsx)("feGaussianBlur", {
                                    in: "SourceGraphic",
                                    stdDeviation: "10",
                                    result: "blur"
                                }), (0, a.jsx)("feColorMatrix", {
                                    in: "blur",
                                    mode: "matrix",
                                    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",
                                    result: "goo"
                                }), (0, a.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "goo"
                                })]
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: (0, o.cn)("", g),
                        children: f
                    }), (0, a.jsxs)("div", {
                        className: (0, o.cn)("gradients-container h-full w-full blur-lg", P ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"),
                        children: [(0, a.jsx)("div", {
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:center_center]", "animate-first", "opacity-100")
                        }), (0, a.jsx)("div", {
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-400px)]", "animate-second", "opacity-100")
                        }), (0, a.jsx)("div", {
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%+400px)]", "animate-third", "opacity-100")
                        }), (0, a.jsx)("div", {
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-200px)]", "animate-fourth", "opacity-70")
                        }), (0, a.jsx)("div", {
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-800px)_calc(50%+800px)]", "animate-fifth", "opacity-100")
                        }), _ && (0, a.jsx)("div", {
                            ref: p,
                            onMouseMove: e => {
                                if (p.current) {
                                    let r = p.current.getBoundingClientRect();
                                    w(e.clientX - r.left), k(e.clientY - r.top)
                                }
                            },
                            className: (0, o.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
                                "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2", "opacity-70")
                        })]
                    })]
                })
            };
            var l = () => (0, a.jsx)(c, {
                children: (0, a.jsx)("div", {
                    className: "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl",
                    children: (0, a.jsx)("p", {
                        className: "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20",
                        children: "94 EIAO"
                    })
                })
            })
        },
        3448: function (e, r, t) {
            "use strict";
            t.d(r, {
                cn: function () {
                    return o
                }
            });
            var a = t(1994),
                n = t(3335);

            function o() {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return (0, n.m6)((0, a.W)(r))
            }
        }
    },
    function (e) {
        e.O(0, [137, 971, 117, 744], function () {
            return e(e.s = 4057)
        }), _N_E = e.O()
    }
]);