(() => {
    var __webpack_modules__ = {
        665: function(module) {
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(0, (function() {
                return (() => {
                    "use strict";
                    var __webpack_modules__ = [ , (__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_545__) => {
                        __nested_webpack_require_545__.r(__webpack_exports__);
                        __nested_webpack_require_545__.d(__webpack_exports__, {
                            default: () => __WEBPACK_DEFAULT_EXPORT__
                        });
                        var Rive = function() {
                            var _scriptDir = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
                            return function(Rive) {
                                Rive = Rive || {};
                                null;
                                var k;
                                k || (k = "undefined" !== typeof Rive ? Rive : {});
                                var aa, ba;
                                k.ready = new Promise((function(b, a) {
                                    aa = b;
                                    ba = a;
                                }));
                                function ca() {
                                    function b(n) {
                                        const g = d;
                                        c = a = 0;
                                        d = new Map;
                                        g.forEach((m => {
                                            try {
                                                m(n);
                                            } catch (h) {
                                                console.error(h);
                                            }
                                        }));
                                        this.Oa();
                                        e && e.hb();
                                    }
                                    let a = 0, c = 0, d = new Map, e = null, f = null;
                                    this.requestAnimationFrame = function(n) {
                                        a || (a = requestAnimationFrame(b.bind(this)));
                                        const g = ++c;
                                        d.set(g, n);
                                        return g;
                                    };
                                    this.cancelAnimationFrame = function(n) {
                                        d.delete(n);
                                        a && 0 == d.size && (cancelAnimationFrame(a), a = 0);
                                    };
                                    this.fb = function(n) {
                                        f && (document.body.remove(f), f = null);
                                        n || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", 
                                        f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", 
                                        f.innerHTML = "RIVE FPS", n = function(g) {
                                            f.innerHTML = "RIVE FPS " + g.toFixed(1);
                                        }, document.body.appendChild(f));
                                        e = new function() {
                                            let g = 0, m = 0;
                                            this.hb = function() {
                                                var h = performance.now();
                                                m ? (++g, h -= m, 1e3 < h && (n(1e3 * g / h), g = m = 0)) : (m = h, g = 0);
                                            };
                                        };
                                    };
                                    this.bb = function() {
                                        f && (document.body.remove(f), f = null);
                                        e = null;
                                    };
                                    this.Oa = function() {};
                                }
                                function da(b) {
                                    console.assert(!0);
                                    const a = new Map;
                                    let c = -1 / 0;
                                    this.push = function(d) {
                                        d = d + ((1 << b) - 1) >> b;
                                        a.has(d) && clearTimeout(a.get(d));
                                        a.set(d, setTimeout((function() {
                                            a.delete(d);
                                            0 == a.length ? c = -1 / 0 : d == c && (c = Math.max(...a.keys()), console.assert(c < d));
                                        }), 1e3));
                                        c = Math.max(d, c);
                                        return c << b;
                                    };
                                }
                                const fa = new function() {
                                    function b() {
                                        if (!a) {
                                            var t = document.createElement("canvas"), x = {
                                                alpha: 1,
                                                depth: 0,
                                                stencil: 0,
                                                antialias: 0,
                                                premultipliedAlpha: 1,
                                                preserveDrawingBuffer: 0,
                                                preferLowPowerToHighPerformance: 0,
                                                failIfMajorPerformanceCaveat: 0,
                                                enableExtensionsByDefault: 1,
                                                explicitSwapControl: 1,
                                                renderViaOffscreenBackBuffer: 1
                                            };
                                            let q = t.getContext("webgl2", x);
                                            if (q) c = 2; else if (q = t.getContext("webgl", x)) c = 1; else return console.log("No WebGL support. Image mesh will not be drawn."), 
                                            !1;
                                            d = Math.min(q.getParameter(q.MAX_RENDERBUFFER_SIZE), q.getParameter(q.MAX_TEXTURE_SIZE));
                                            function F(G, v, A) {
                                                v = q.createShader(v);
                                                q.shaderSource(v, A);
                                                q.compileShader(v);
                                                A = q.getShaderInfoLog(v);
                                                if (0 < A.length) throw A;
                                                q.attachShader(G, v);
                                            }
                                            t = q.createProgram();
                                            F(t, q.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                                            F(t, q.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                                            q.bindAttribLocation(t, 0, "vertex");
                                            q.bindAttribLocation(t, 1, "uv");
                                            q.linkProgram(t);
                                            x = q.getProgramInfoLog(t);
                                            if (0 < x.length) throw x;
                                            e = q.getUniformLocation(t, "mat");
                                            f = q.getUniformLocation(t, "translate");
                                            q.useProgram(t);
                                            q.bindBuffer(q.ARRAY_BUFFER, q.createBuffer());
                                            q.enableVertexAttribArray(0);
                                            q.enableVertexAttribArray(1);
                                            q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, q.createBuffer());
                                            q.uniform1i(q.getUniformLocation(t, "image"), 0);
                                            q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                            a = q;
                                        }
                                        return !0;
                                    }
                                    let a = null, c = 0, d = 0, e = null, f = null, n = 0, g = 0;
                                    this.qb = function() {
                                        b();
                                        return d;
                                    };
                                    this.ab = function(t) {
                                        if (!b()) return null;
                                        const x = a.createTexture();
                                        a.bindTexture(a.TEXTURE_2D, x);
                                        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, t);
                                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
                                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
                                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
                                        2 == c ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_LINEAR), 
                                        a.generateMipmap(a.TEXTURE_2D)) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
                                        return x;
                                    };
                                    const m = new da(8), h = new da(8), p = new da(10), u = new da(10);
                                    this.eb = function(t, x, q, F, G) {
                                        if (b()) {
                                            var v = m.push(t), A = h.push(x);
                                            if (a.canvas.width != v || a.canvas.height != A) a.canvas.width = v, a.canvas.height = A;
                                            a.viewport(0, A - x, t, x);
                                            a.disable(a.SCISSOR_TEST);
                                            a.clearColor(0, 0, 0, 0);
                                            a.clear(a.COLOR_BUFFER_BIT);
                                            a.enable(a.SCISSOR_TEST);
                                            q.sort(((z, ea) => ea.Ra - z.Ra));
                                            v = p.push(F);
                                            n != v && (a.bufferData(a.ARRAY_BUFFER, 8 * v, a.DYNAMIC_DRAW), n = v);
                                            v = 0;
                                            for (var E of q) a.bufferSubData(a.ARRAY_BUFFER, v, E.Da), v += 4 * E.Da.length;
                                            console.assert(v == 4 * F);
                                            for (var N of q) a.bufferSubData(a.ARRAY_BUFFER, v, N.Ua), v += 4 * N.Ua.length;
                                            console.assert(v == 8 * F);
                                            v = u.push(G);
                                            g != v && (a.bufferData(a.ELEMENT_ARRAY_BUFFER, 2 * v, a.DYNAMIC_DRAW), g = v);
                                            E = 0;
                                            for (var Y of q) a.bufferSubData(a.ELEMENT_ARRAY_BUFFER, E, Y.qa), E += 2 * Y.qa.length;
                                            console.assert(E == 2 * G);
                                            Y = 0;
                                            N = !0;
                                            v = E = 0;
                                            for (const z of q) {
                                                z.image.xa != Y && (a.bindTexture(a.TEXTURE_2D, z.image.Ya || null), Y = z.image.xa);
                                                z.tb ? (a.scissor(z.Ha, A - z.Ia - z.Na, z.Ab, z.Na), N = !0) : N && (a.scissor(0, A - x, t, x), 
                                                N = !1);
                                                q = 2 / t;
                                                const ea = -2 / x;
                                                a.uniform4f(e, z.ma[0] * q * z.ta, z.ma[1] * ea * z.ua, z.ma[2] * q * z.ta, z.ma[3] * ea * z.ua);
                                                a.uniform2f(f, z.ma[4] * q * z.ta + q * (z.Ha - z.rb * z.ta) - 1, z.ma[5] * ea * z.ua + ea * (z.Ia - z.sb * z.ua) + 1);
                                                a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, v);
                                                a.vertexAttribPointer(1, 2, a.FLOAT, !1, 0, v + 4 * F);
                                                a.drawElements(a.TRIANGLES, z.qa.length, a.UNSIGNED_SHORT, E);
                                                v += 4 * z.Da.length;
                                                E += 2 * z.qa.length;
                                            }
                                            console.assert(v == 4 * F);
                                            console.assert(E == 2 * G);
                                        }
                                    };
                                    this.canvas = function() {
                                        return b() && a.canvas;
                                    };
                                };
                                Rive.onRuntimeInitialized = function() {
                                    function b(l) {
                                        switch (l) {
                                          case h.srcOver:
                                            return "source-over";

                                          case h.screen:
                                            return "screen";

                                          case h.overlay:
                                            return "overlay";

                                          case h.darken:
                                            return "darken";

                                          case h.lighten:
                                            return "lighten";

                                          case h.colorDodge:
                                            return "color-dodge";

                                          case h.colorBurn:
                                            return "color-burn";

                                          case h.hardLight:
                                            return "hard-light";

                                          case h.softLight:
                                            return "soft-light";

                                          case h.difference:
                                            return "difference";

                                          case h.exclusion:
                                            return "exclusion";

                                          case h.multiply:
                                            return "multiply";

                                          case h.hue:
                                            return "hue";

                                          case h.saturation:
                                            return "saturation";

                                          case h.color:
                                            return "color";

                                          case h.luminosity:
                                            return "luminosity";
                                        }
                                    }
                                    function a(l) {
                                        return "rgba(" + ((16711680 & l) >>> 16) + "," + ((65280 & l) >>> 8) + "," + ((255 & l) >>> 0) + "," + ((4278190080 & l) >>> 24) / 255 + ")";
                                    }
                                    function c() {
                                        0 < E.length && (fa.eb(A.drawWidth(), A.drawHeight(), E, N, Y), E = [], Y = N = 0, 
                                        A.reset(512, 512));
                                        for (const l of v) {
                                            for (const r of l.ea) r();
                                            l.ea = [];
                                        }
                                        v.clear();
                                    }
                                    var d = Rive.RenderPaintStyle;
                                    const e = Rive.RenderPath, f = Rive.RenderPaint, n = Rive.Renderer, g = Rive.StrokeCap, m = Rive.StrokeJoin, h = Rive.BlendMode, p = d.fill, u = d.stroke, t = Rive.FillRule.evenOdd;
                                    let x = 1;
                                    var q = Rive.RenderImage.extend("CanvasRenderImage", {
                                        __construct: function() {
                                            this.__parent.__construct.call(this);
                                            this.xa = x;
                                            x = x + 1 & 2147483647 || 1;
                                        },
                                        decode: function(l) {
                                            let r = bb;
                                            r.total++;
                                            var y = this, C = new Image;
                                            C.src = URL.createObjectURL(new Blob([ l ], {
                                                type: "image/png"
                                            }));
                                            C.onload = function() {
                                                y.Wa = C;
                                                y.Ya = fa.ab(C);
                                                y.size(C.width, C.height);
                                                r.loaded++;
                                                if (r.loaded === r.total) {
                                                    const B = r.ready;
                                                    B && (B(), r.ready = null);
                                                }
                                            };
                                        }
                                    }), F = e.extend("CanvasRenderPath", {
                                        __construct: function() {
                                            this.__parent.__construct.call(this);
                                            this.ha = new Path2D;
                                        },
                                        reset: function() {
                                            this.ha = new Path2D;
                                        },
                                        addPath: function(l, r) {
                                            var y = this.ha, C = y.addPath;
                                            l = l.ha;
                                            const B = new DOMMatrix;
                                            B.a = r.xx;
                                            B.b = r.xy;
                                            B.c = r.yx;
                                            B.d = r.yy;
                                            B.e = r.tx;
                                            B.f = r.ty;
                                            C.call(y, l, B);
                                        },
                                        fillRule: function(l) {
                                            this.Fa = l;
                                        },
                                        moveTo: function(l, r) {
                                            this.ha.moveTo(l, r);
                                        },
                                        lineTo: function(l, r) {
                                            this.ha.lineTo(l, r);
                                        },
                                        cubicTo: function(l, r, y, C, B, I) {
                                            this.ha.bezierCurveTo(l, r, y, C, B, I);
                                        },
                                        close: function() {
                                            this.ha.closePath();
                                        }
                                    }), G = f.extend("CanvasRenderPaint", {
                                        color: function(l) {
                                            this.Ga = a(l);
                                        },
                                        thickness: function(l) {
                                            this.Za = l;
                                        },
                                        join: function(l) {
                                            switch (l) {
                                              case m.miter:
                                                this.wa = "miter";
                                                break;

                                              case m.round:
                                                this.wa = "round";
                                                break;

                                              case m.bevel:
                                                this.wa = "bevel";
                                            }
                                        },
                                        cap: function(l) {
                                            switch (l) {
                                              case g.butt:
                                                this.va = "butt";
                                                break;

                                              case g.round:
                                                this.va = "round";
                                                break;

                                              case g.square:
                                                this.va = "square";
                                            }
                                        },
                                        style: function(l) {
                                            this.Xa = l;
                                        },
                                        blendMode: function(l) {
                                            this.Va = b(l);
                                        },
                                        linearGradient: function(l, r, y, C) {
                                            this.pa = {
                                                Sa: l,
                                                Ta: r,
                                                Ka: y,
                                                La: C,
                                                Ca: []
                                            };
                                        },
                                        radialGradient: function(l, r, y, C) {
                                            this.pa = {
                                                Sa: l,
                                                Ta: r,
                                                Ka: y,
                                                La: C,
                                                Ca: [],
                                                ob: !0
                                            };
                                        },
                                        addStop: function(l, r) {
                                            this.pa.Ca.push({
                                                color: l,
                                                stop: r
                                            });
                                        },
                                        completeGradient: function() {},
                                        draw: function(l, r, y) {
                                            let C = this.Xa;
                                            var B = this.Ga, I = this.pa;
                                            l.globalCompositeOperation = this.Va;
                                            if (null != I) {
                                                B = I.Sa;
                                                var K = I.Ta;
                                                const T = I.Ka;
                                                var R = I.La;
                                                const S = I.Ca;
                                                I.ob ? (I = T - B, R -= K, B = l.createRadialGradient(B, K, 0, B, K, Math.sqrt(I * I + R * R))) : B = l.createLinearGradient(B, K, T, R);
                                                for (let U = 0, H = S.length; U < H; U++) K = S[U], B.addColorStop(K.stop, a(K.color));
                                                this.Ga = B;
                                                this.pa = null;
                                            }
                                            switch (C) {
                                              case u:
                                                l.strokeStyle = B;
                                                l.lineWidth = this.Za;
                                                l.lineCap = this.va;
                                                l.lineJoin = this.wa;
                                                l.stroke(r);
                                                break;

                                              case p:
                                                l.fillStyle = B, l.fill(r, y);
                                            }
                                        }
                                    });
                                    const v = new Set;
                                    let A = null, E = [], N = 0, Y = 0;
                                    var z = Rive.CanvasRenderer = n.extend("Renderer", {
                                        __construct: function(l) {
                                            this.__parent.__construct.call(this);
                                            this.ga = [ 1, 0, 0, 1, 0, 0 ];
                                            this.$ = l.getContext("2d");
                                            this.Ea = l;
                                            this.ea = [];
                                        },
                                        save: function() {
                                            this.ga.push(...this.ga.slice(this.ga.length - 6));
                                            this.ea.push(this.$.save.bind(this.$));
                                        },
                                        restore: function() {
                                            const l = this.ga.length - 6;
                                            if (6 > l) throw "restore() called without matching save().";
                                            this.ga.splice(l);
                                            this.ea.push(this.$.restore.bind(this.$));
                                        },
                                        transform: function(l) {
                                            const r = this.ga, y = r.length - 6;
                                            r.splice(y, 6, r[y] * l.xx + r[y + 2] * l.xy, r[y + 1] * l.xx + r[y + 3] * l.xy, r[y] * l.yx + r[y + 2] * l.yy, r[y + 1] * l.yx + r[y + 3] * l.yy, r[y] * l.tx + r[y + 2] * l.ty + r[y + 4], r[y + 1] * l.tx + r[y + 3] * l.ty + r[y + 5]);
                                            this.ea.push(this.$.transform.bind(this.$, l.xx, l.xy, l.yx, l.yy, l.tx, l.ty));
                                        },
                                        rotate: function(l) {
                                            const r = Math.sin(l);
                                            l = Math.cos(l);
                                            this.transform({
                                                xx: l,
                                                xy: r,
                                                yx: -r,
                                                yy: l,
                                                tx: 0,
                                                ty: 0
                                            });
                                        },
                                        _drawPath: function(l, r) {
                                            this.ea.push(r.draw.bind(r, this.$, l.ha, l.Fa === t ? "evenodd" : "nonzero"));
                                        },
                                        _drawImage: function(l, r, y) {
                                            var C = l.Wa;
                                            if (C) {
                                                var B = this.$, I = b(r);
                                                this.ea.push((function() {
                                                    B.globalCompositeOperation = I;
                                                    B.globalAlpha = y;
                                                    B.drawImage(C, 0, 0);
                                                    B.globalAlpha = 1;
                                                }));
                                            }
                                        },
                                        _getMatrix: function(l) {
                                            const r = this.ga, y = r.length - 6;
                                            for (let C = 0; 6 > C; ++C) l[C] = r[y + C];
                                        },
                                        _drawImageMesh: function(l, r, y, C, B, I, K, R, T, S) {
                                            var U = this.$.canvas.width, H = this.$.canvas.height;
                                            const tb = T - K, ub = S - R;
                                            K = Math.max(K, 0);
                                            R = Math.max(R, 0);
                                            T = Math.min(T, U);
                                            S = Math.min(S, H);
                                            const ta = T - K, ua = S - R;
                                            console.assert(ta <= Math.min(tb, U));
                                            console.assert(ua <= Math.min(ub, H));
                                            if (!(0 >= ta || 0 >= ua)) {
                                                T = ta < tb || ua < ub;
                                                U = S = 1;
                                                var ja = Math.ceil(ta * S), ka = Math.ceil(ua * U);
                                                H = fa.qb();
                                                ja > H && (S *= H / ja, ja = H);
                                                ka > H && (U *= H / ka, ka = H);
                                                A || (A = new k.DynamicRectanizer(H), A.reset(512, 512));
                                                H = A.addRect(ja, ka);
                                                0 > H && (c(), v.add(this), H = A.addRect(ja, ka), console.assert(0 <= H));
                                                var vb = 65535 & H, wb = H >> 16;
                                                E.push({
                                                    ma: this.ga.slice(this.ga.length - 6),
                                                    image: l,
                                                    Ha: vb,
                                                    Ia: wb,
                                                    rb: K,
                                                    sb: R,
                                                    Ab: ja,
                                                    Na: ka,
                                                    ta: S,
                                                    ua: U,
                                                    Da: new Float32Array(C),
                                                    Ua: new Float32Array(B),
                                                    qa: new Uint16Array(I),
                                                    tb: T,
                                                    Ra: l.xa << 1 | (T ? 1 : 0)
                                                });
                                                N += C.length;
                                                Y += I.length;
                                                var oa = this.$, $b = b(r);
                                                this.ea.push((function() {
                                                    oa.save();
                                                    oa.resetTransform();
                                                    oa.globalCompositeOperation = $b;
                                                    oa.globalAlpha = y;
                                                    oa.drawImage(fa.canvas(), vb, wb, ja, ka, K, R, ta, ua);
                                                    oa.restore();
                                                }));
                                            }
                                        },
                                        _clipPath: function(l) {
                                            this.ea.push(this.$.clip.bind(this.$, l.ha, l.Fa === t ? "evenodd" : "nonzero"));
                                        },
                                        clear: function() {
                                            v.add(this);
                                            this.ea.push(this.$.clearRect.bind(this.$, 0, 0, this.Ea.width, this.Ea.height));
                                        },
                                        flush: function() {},
                                        translate: function(l, r) {
                                            this.transform({
                                                xx: 1,
                                                xy: 0,
                                                yx: 0,
                                                yy: 1,
                                                tx: l,
                                                ty: r
                                            });
                                        }
                                    });
                                    Rive.makeRenderer = function(l) {
                                        return new z(l);
                                    };
                                    Rive.renderFactory = {
                                        makeRenderPaint: function() {
                                            return new G;
                                        },
                                        makeRenderPath: function() {
                                            return new F;
                                        },
                                        makeRenderImage: function() {
                                            return new q;
                                        }
                                    };
                                    let ea = Rive.load, bb = null;
                                    Rive.load = function(l) {
                                        return new Promise((function(r) {
                                            let y = null;
                                            bb = {
                                                total: 0,
                                                loaded: 0,
                                                ready: function() {
                                                    r(y);
                                                }
                                            };
                                            y = ea(l);
                                            0 == bb.total && r(y);
                                        }));
                                    };
                                    d = new ca;
                                    Rive.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                                    Rive.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                                    Rive.enableFPSCounter = d.fb.bind(d);
                                    Rive.disableFPSCounter = d.bb;
                                    d.Oa = c;
                                };
                                var ia, ha = {};
                                for (ia in k) k.hasOwnProperty(ia) && (ha[ia] = k[ia]);
                                var na, pa, la = "object" === typeof window, ma = "function" === typeof importScripts, w = "";
                                if (la || ma) ma ? w = self.location.href : "undefined" !== typeof document && document.currentScript && (w = document.currentScript.src), 
                                _scriptDir && (w = _scriptDir), 0 !== w.indexOf("blob:") ? w = w.substr(0, w.replace(/[?#].*/, "").lastIndexOf("/") + 1) : w = "", 
                                ma && (pa = function(b) {
                                    var a = new XMLHttpRequest;
                                    a.open("GET", b, !1);
                                    a.responseType = "arraybuffer";
                                    a.send(null);
                                    return new Uint8Array(a.response);
                                }), na = function(b, a, c) {
                                    var d = new XMLHttpRequest;
                                    d.open("GET", b, !0);
                                    d.responseType = "arraybuffer";
                                    d.onload = function() {
                                        200 == d.status || 0 == d.status && d.response ? a(d.response) : c();
                                    };
                                    d.onerror = c;
                                    d.send(null);
                                };
                                var qa = k.print || console.log.bind(console), ra = k.printErr || console.warn.bind(console);
                                for (ia in ha) ha.hasOwnProperty(ia) && (k[ia] = ha[ia]);
                                ha = null;
                                var sa;
                                k.wasmBinary && (sa = k.wasmBinary);
                                k.noExitRuntime;
                                "object" !== typeof WebAssembly && va("no native wasm support detected");
                                var wa, xa = !1, ya = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                                function za(b, a, c) {
                                    var d = a + c;
                                    for (c = a; b[c] && !(c >= d); ) ++c;
                                    if (16 < c - a && b.subarray && ya) return ya.decode(b.subarray(a, c));
                                    for (d = ""; a < c; ) {
                                        var e = b[a++];
                                        if (128 & e) {
                                            var f = 63 & b[a++];
                                            if (192 == (224 & e)) d += String.fromCharCode((31 & e) << 6 | f); else {
                                                var n = 63 & b[a++];
                                                e = 224 == (240 & e) ? (15 & e) << 12 | f << 6 | n : (7 & e) << 18 | f << 12 | n << 6 | 63 & b[a++];
                                                65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | 1023 & e));
                                            }
                                        } else d += String.fromCharCode(e);
                                    }
                                    return d;
                                }
                                function Aa(b, a, c) {
                                    var d = D;
                                    if (0 < c) {
                                        c = a + c - 1;
                                        for (var e = 0; e < b.length; ++e) {
                                            var f = b.charCodeAt(e);
                                            if (55296 <= f && 57343 >= f) {
                                                var n = b.charCodeAt(++e);
                                                f = 65536 + ((1023 & f) << 10) | 1023 & n;
                                            }
                                            if (127 >= f) {
                                                if (a >= c) break;
                                                d[a++] = f;
                                            } else {
                                                if (2047 >= f) {
                                                    if (a + 1 >= c) break;
                                                    d[a++] = 192 | f >> 6;
                                                } else {
                                                    if (65535 >= f) {
                                                        if (a + 2 >= c) break;
                                                        d[a++] = 224 | f >> 12;
                                                    } else {
                                                        if (a + 3 >= c) break;
                                                        d[a++] = 240 | f >> 18;
                                                        d[a++] = 128 | f >> 12 & 63;
                                                    }
                                                    d[a++] = 128 | f >> 6 & 63;
                                                }
                                                d[a++] = 128 | 63 & f;
                                            }
                                        }
                                        d[a] = 0;
                                    }
                                }
                                var Ba = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
                                function Ca(b, a) {
                                    var c = b >> 1;
                                    for (var d = c + a / 2; !(c >= d) && Da[c]; ) ++c;
                                    c <<= 1;
                                    if (32 < c - b && Ba) return Ba.decode(D.subarray(b, c));
                                    c = "";
                                    for (d = 0; !(d >= a / 2); ++d) {
                                        var e = Ea[b + 2 * d >> 1];
                                        if (0 == e) break;
                                        c += String.fromCharCode(e);
                                    }
                                    return c;
                                }
                                function Fa(b, a, c) {
                                    void 0 === c && (c = 2147483647);
                                    if (2 > c) return 0;
                                    c -= 2;
                                    var d = a;
                                    c = c < 2 * b.length ? c / 2 : b.length;
                                    for (var e = 0; e < c; ++e) Ea[a >> 1] = b.charCodeAt(e), a += 2;
                                    Ea[a >> 1] = 0;
                                    return a - d;
                                }
                                function Ga(b) {
                                    return 2 * b.length;
                                }
                                function Ha(b, a) {
                                    for (var c = 0, d = ""; !(c >= a / 4); ) {
                                        var e = J[b + 4 * c >> 2];
                                        if (0 == e) break;
                                        ++c;
                                        65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | 1023 & e)) : d += String.fromCharCode(e);
                                    }
                                    return d;
                                }
                                function Ia(b, a, c) {
                                    void 0 === c && (c = 2147483647);
                                    if (4 > c) return 0;
                                    var d = a;
                                    c = d + c - 4;
                                    for (var e = 0; e < b.length; ++e) {
                                        var f = b.charCodeAt(e);
                                        if (55296 <= f && 57343 >= f) {
                                            var n = b.charCodeAt(++e);
                                            f = 65536 + ((1023 & f) << 10) | 1023 & n;
                                        }
                                        J[a >> 2] = f;
                                        a += 4;
                                        if (a + 4 > c) break;
                                    }
                                    J[a >> 2] = 0;
                                    return a - d;
                                }
                                function Ja(b) {
                                    for (var a = 0, c = 0; c < b.length; ++c) {
                                        var d = b.charCodeAt(c);
                                        55296 <= d && 57343 >= d && ++c;
                                        a += 4;
                                    }
                                    return a;
                                }
                                var Ka, La, D, Ea, Da, J, L, Ma, Na;
                                function Oa() {
                                    var b = wa.buffer;
                                    Ka = b;
                                    k.HEAP8 = La = new Int8Array(b);
                                    k.HEAP16 = Ea = new Int16Array(b);
                                    k.HEAP32 = J = new Int32Array(b);
                                    k.HEAPU8 = D = new Uint8Array(b);
                                    k.HEAPU16 = Da = new Uint16Array(b);
                                    k.HEAPU32 = L = new Uint32Array(b);
                                    k.HEAPF32 = Ma = new Float32Array(b);
                                    k.HEAPF64 = Na = new Float64Array(b);
                                }
                                var Pa, Qa = [], Ra = [], Sa = [];
                                function Ta() {
                                    var b = k.preRun.shift();
                                    Qa.unshift(b);
                                }
                                var Ua = 0, Va = null, Wa = null;
                                k.preloadedImages = {};
                                k.preloadedAudios = {};
                                function va(b) {
                                    if (k.onAbort) k.onAbort(b);
                                    b = "Aborted(" + b + ")";
                                    ra(b);
                                    xa = !0;
                                    b = new WebAssembly.RuntimeError(b + ". Build with -s ASSERTIONS=1 for more info.");
                                    ba(b);
                                    throw b;
                                }
                                function Xa() {
                                    return M.startsWith("data:application/octet-stream;base64,");
                                }
                                var M;
                                M = "canvas_advanced.wasm";
                                if (!Xa()) {
                                    var Ya = M;
                                    M = k.locateFile ? k.locateFile(Ya, w) : w + Ya;
                                }
                                function Za() {
                                    var b = M;
                                    try {
                                        if (b == M && sa) return new Uint8Array(sa);
                                        if (pa) return pa(b);
                                        throw "both async and sync fetching of the wasm failed";
                                    } catch (a) {
                                        va(a);
                                    }
                                }
                                function $a() {
                                    if (!sa && (la || ma)) {
                                        if ("function" === typeof fetch && !M.startsWith("file://")) return fetch(M, {
                                            credentials: "same-origin"
                                        }).then((function(b) {
                                            if (!b.ok) throw "failed to load wasm binary file at '" + M + "'";
                                            return b.arrayBuffer();
                                        })).catch((function() {
                                            return Za();
                                        }));
                                        if (na) return new Promise((function(b, a) {
                                            na(M, (function(c) {
                                                b(new Uint8Array(c));
                                            }), a);
                                        }));
                                    }
                                    return Promise.resolve().then((function() {
                                        return Za();
                                    }));
                                }
                                function ab(b) {
                                    for (;0 < b.length; ) {
                                        var a = b.shift();
                                        if ("function" == typeof a) a(k); else {
                                            var c = a.Bb;
                                            "number" === typeof c ? void 0 === a.ya ? Pa.get(c)() : Pa.get(c)(a.ya) : c(void 0 === a.ya ? null : a.ya);
                                        }
                                    }
                                }
                                function cb(b) {
                                    if (void 0 === b) return "_unknown";
                                    b = b.replace(/[^a-zA-Z0-9_]/g, "$");
                                    var a = b.charCodeAt(0);
                                    return 48 <= a && 57 >= a ? "_" + b : b;
                                }
                                function db(b, a) {
                                    b = cb(b);
                                    return new Function("body", "return function " + b + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(a);
                                }
                                var O = [ {}, {
                                    value: void 0
                                }, {
                                    value: null
                                }, {
                                    value: !0
                                }, {
                                    value: !1
                                } ], eb = [];
                                function fb(b) {
                                    var a = Error, c = db(b, (function(d) {
                                        this.name = b;
                                        this.message = d;
                                        d = Error(d).stack;
                                        void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                                    }));
                                    c.prototype = Object.create(a.prototype);
                                    c.prototype.constructor = c;
                                    c.prototype.toString = function() {
                                        return void 0 === this.message ? this.name : this.name + ": " + this.message;
                                    };
                                    return c;
                                }
                                var gb = void 0;
                                function P(b) {
                                    throw new gb(b);
                                }
                                function hb(b) {
                                    b || P("Cannot use deleted val. handle = " + b);
                                    return O[b].value;
                                }
                                function Q(b) {
                                    switch (b) {
                                      case void 0:
                                        return 1;

                                      case null:
                                        return 2;

                                      case !0:
                                        return 3;

                                      case !1:
                                        return 4;

                                      default:
                                        var a = eb.length ? eb.pop() : O.length;
                                        O[a] = {
                                            Ba: 1,
                                            value: b
                                        };
                                        return a;
                                    }
                                }
                                var ib = void 0, jb = void 0;
                                function V(b) {
                                    for (var a = ""; D[b]; ) a += jb[D[b++]];
                                    return a;
                                }
                                var kb = [];
                                function lb() {
                                    for (;kb.length; ) {
                                        var b = kb.pop();
                                        b.V.la = !1;
                                        b["delete"]();
                                    }
                                }
                                var mb = void 0, nb = {};
                                function ob(b, a) {
                                    for (void 0 === a && P("ptr should not be undefined"); b.aa; ) a = b.oa(a), b = b.aa;
                                    return a;
                                }
                                var pb = {};
                                function qb(b) {
                                    b = rb(b);
                                    var a = V(b);
                                    sb(b);
                                    return a;
                                }
                                function xb(b, a) {
                                    var c = pb[b];
                                    void 0 === c && P(a + " has unknown type " + qb(b));
                                    return c;
                                }
                                function yb() {}
                                var zb = !1;
                                function Ab(b) {
                                    --b.count.value;
                                    0 === b.count.value && (b.ba ? b.da.ia(b.ba) : b.Y.W.ia(b.X));
                                }
                                function Bb(b) {
                                    if ("undefined" === typeof FinalizationGroup) return Bb = function(a) {
                                        return a;
                                    }, b;
                                    zb = new FinalizationGroup((function(a) {
                                        for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.X ? Ab(c) : console.warn("object already deleted: " + c.X);
                                    }));
                                    Bb = function(a) {
                                        zb.register(a, a.V, a.V);
                                        return a;
                                    };
                                    yb = function(a) {
                                        zb.unregister(a.V);
                                    };
                                    return Bb(b);
                                }
                                var Cb = {};
                                function Db(b) {
                                    for (;b.length; ) {
                                        var a = b.pop();
                                        b.pop()(a);
                                    }
                                }
                                function Eb(b) {
                                    return this.fromWireType(L[b >> 2]);
                                }
                                var Fb = {}, Gb = {}, Hb = void 0;
                                function Ib(b) {
                                    throw new Hb(b);
                                }
                                function W(b, a, c) {
                                    function d(g) {
                                        g = c(g);
                                        g.length !== b.length && Ib("Mismatched type converter count");
                                        for (var m = 0; m < b.length; ++m) X(b[m], g[m]);
                                    }
                                    b.forEach((function(g) {
                                        Gb[g] = a;
                                    }));
                                    var e = Array(a.length), f = [], n = 0;
                                    a.forEach((function(g, m) {
                                        pb.hasOwnProperty(g) ? e[m] = pb[g] : (f.push(g), Fb.hasOwnProperty(g) || (Fb[g] = []), 
                                        Fb[g].push((function() {
                                            e[m] = pb[g];
                                            ++n;
                                            n === f.length && d(e);
                                        })));
                                    }));
                                    0 === f.length && d(e);
                                }
                                function Jb(b) {
                                    switch (b) {
                                      case 1:
                                        return 0;

                                      case 2:
                                        return 1;

                                      case 4:
                                        return 2;

                                      case 8:
                                        return 3;

                                      default:
                                        throw new TypeError("Unknown type size: " + b);
                                    }
                                }
                                function X(b, a, c) {
                                    c = c || {};
                                    if (!("argPackAdvance" in a)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                                    var d = a.name;
                                    b || P('type "' + d + '" must have a positive integer typeid pointer');
                                    if (pb.hasOwnProperty(b)) {
                                        if (c.nb) return;
                                        P("Cannot register type '" + d + "' twice");
                                    }
                                    pb[b] = a;
                                    delete Gb[b];
                                    Fb.hasOwnProperty(b) && (a = Fb[b], delete Fb[b], a.forEach((function(e) {
                                        e();
                                    })));
                                }
                                function Kb(b) {
                                    P(b.V.Y.W.name + " instance already deleted");
                                }
                                function Lb() {}
                                var Mb = {};
                                function Nb(b, a, c) {
                                    if (void 0 === b[a].Z) {
                                        var d = b[a];
                                        b[a] = function() {
                                            b[a].Z.hasOwnProperty(arguments.length) || P("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[a].Z + ")!");
                                            return b[a].Z[arguments.length].apply(this, arguments);
                                        };
                                        b[a].Z = [];
                                        b[a].Z[d.ka] = d;
                                    }
                                }
                                function Ob(b, a, c) {
                                    k.hasOwnProperty(b) ? ((void 0 === c || void 0 !== k[b].Z && void 0 !== k[b].Z[c]) && P("Cannot register public name '" + b + "' twice"), 
                                    Nb(k, b, b), k.hasOwnProperty(c) && P("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), 
                                    k[b].Z[c] = a) : (k[b] = a, void 0 !== c && (k[b].Cb = c));
                                }
                                function Pb(b, a, c, d, e, f, n, g) {
                                    this.name = b;
                                    this.constructor = a;
                                    this.fa = c;
                                    this.ia = d;
                                    this.aa = e;
                                    this.ib = f;
                                    this.oa = n;
                                    this.cb = g;
                                    this.Pa = [];
                                }
                                function Qb(b, a, c) {
                                    for (;a !== c; ) a.oa || P("Expected null or instance of " + c.name + ", got an instance of " + a.name), 
                                    b = a.oa(b), a = a.aa;
                                    return b;
                                }
                                function Rb(b, a) {
                                    if (null === a) return this.za && P("null is not a valid " + this.name), 0;
                                    a.V || P('Cannot pass "' + Sb(a) + '" as a ' + this.name);
                                    a.V.X || P("Cannot pass deleted object as a pointer of type " + this.name);
                                    return Qb(a.V.X, a.V.Y.W, this.W);
                                }
                                function Tb(b, a) {
                                    if (null === a) {
                                        this.za && P("null is not a valid " + this.name);
                                        if (this.sa) {
                                            var c = this.Aa();
                                            null !== b && b.push(this.ia, c);
                                            return c;
                                        }
                                        return 0;
                                    }
                                    a.V || P('Cannot pass "' + Sb(a) + '" as a ' + this.name);
                                    a.V.X || P("Cannot pass deleted object as a pointer of type " + this.name);
                                    !this.ra && a.V.Y.ra && P("Cannot convert argument of type " + (a.V.da ? a.V.da.name : a.V.Y.name) + " to parameter type " + this.name);
                                    c = Qb(a.V.X, a.V.Y.W, this.W);
                                    if (this.sa) switch (void 0 === a.V.ba && P("Passing raw pointer to smart pointer is illegal"), 
                                    this.zb) {
                                      case 0:
                                        a.V.da === this ? c = a.V.ba : P("Cannot convert argument of type " + (a.V.da ? a.V.da.name : a.V.Y.name) + " to parameter type " + this.name);
                                        break;

                                      case 1:
                                        c = a.V.ba;
                                        break;

                                      case 2:
                                        if (a.V.da === this) c = a.V.ba; else {
                                            var d = a.clone();
                                            c = this.vb(c, Q((function() {
                                                d["delete"]();
                                            })));
                                            null !== b && b.push(this.ia, c);
                                        }
                                        break;

                                      default:
                                        P("Unsupporting sharing policy");
                                    }
                                    return c;
                                }
                                function Ub(b, a) {
                                    if (null === a) return this.za && P("null is not a valid " + this.name), 0;
                                    a.V || P('Cannot pass "' + Sb(a) + '" as a ' + this.name);
                                    a.V.X || P("Cannot pass deleted object as a pointer of type " + this.name);
                                    a.V.Y.ra && P("Cannot convert argument of type " + a.V.Y.name + " to parameter type " + this.name);
                                    return Qb(a.V.X, a.V.Y.W, this.W);
                                }
                                function Vb(b, a, c) {
                                    if (a === c) return b;
                                    if (void 0 === c.aa) return null;
                                    b = Vb(b, a, c.aa);
                                    return null === b ? null : c.cb(b);
                                }
                                function Wb(b, a) {
                                    a = ob(b, a);
                                    return nb[a];
                                }
                                function Xb(b, a) {
                                    a.Y && a.X || Ib("makeClassHandle requires ptr and ptrType");
                                    !!a.da !== !!a.ba && Ib("Both smartPtrType and smartPtr must be specified");
                                    a.count = {
                                        value: 1
                                    };
                                    return Bb(Object.create(b, {
                                        V: {
                                            value: a
                                        }
                                    }));
                                }
                                function Yb(b, a, c, d) {
                                    this.name = b;
                                    this.W = a;
                                    this.za = c;
                                    this.ra = d;
                                    this.sa = !1;
                                    this.ia = this.vb = this.Aa = this.Qa = this.zb = this.ub = void 0;
                                    void 0 !== a.aa ? this.toWireType = Tb : (this.toWireType = d ? Rb : Ub, this.ca = null);
                                }
                                function Zb(b, a, c) {
                                    k.hasOwnProperty(b) || Ib("Replacing nonexistant public symbol");
                                    void 0 !== k[b].Z && void 0 !== c ? k[b].Z[c] = a : (k[b] = a, k[b].ka = c);
                                }
                                function ac(b, a) {
                                    var c = [];
                                    return function() {
                                        c.length = arguments.length;
                                        for (var d = 0; d < arguments.length; d++) c[d] = arguments[d];
                                        b.includes("j") ? (d = k["dynCall_" + b], d = c && c.length ? d.apply(null, [ a ].concat(c)) : d.call(null, a)) : d = Pa.get(a).apply(null, c);
                                        return d;
                                    };
                                }
                                function Z(b, a) {
                                    b = V(b);
                                    var c = b.includes("j") ? ac(b, a) : Pa.get(a);
                                    "function" !== typeof c && P("unknown function pointer with signature " + b + ": " + a);
                                    return c;
                                }
                                var bc = void 0;
                                function cc(b, a) {
                                    function c(f) {
                                        e[f] || pb[f] || (Gb[f] ? Gb[f].forEach(c) : (d.push(f), e[f] = !0));
                                    }
                                    var d = [], e = {};
                                    a.forEach(c);
                                    throw new bc(b + ": " + d.map(qb).join([ ", " ]));
                                }
                                function dc(b) {
                                    var a = Function;
                                    if (!(a instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof a + " which is not a function");
                                    var c = db(a.name || "unknownFunctionName", (function() {}));
                                    c.prototype = a.prototype;
                                    c = new c;
                                    b = a.apply(c, b);
                                    return b instanceof Object ? b : c;
                                }
                                function ec(b, a, c, d, e) {
                                    var f = a.length;
                                    2 > f && P("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                    var n = null !== a[1] && null !== c, g = !1;
                                    for (c = 1; c < a.length; ++c) if (null !== a[c] && void 0 === a[c].ca) {
                                        g = !0;
                                        break;
                                    }
                                    var m = "void" !== a[0].name, h = "", p = "";
                                    for (c = 0; c < f - 2; ++c) h += (0 !== c ? ", " : "") + "arg" + c, p += (0 !== c ? ", " : "") + "arg" + c + "Wired";
                                    b = "return function " + cb(b) + "(" + h + ") {\nif (arguments.length !== " + (f - 2) + ") {\nthrowBindingError('function " + b + " called with ' + arguments.length + ' arguments, expected " + (f - 2) + " args!');\n}\n";
                                    g && (b += "var destructors = [];\n");
                                    var u = g ? "destructors" : "null";
                                    h = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
                                    d = [ P, d, e, Db, a[0], a[1] ];
                                    n && (b += "var thisWired = classParam.toWireType(" + u + ", this);\n");
                                    for (c = 0; c < f - 2; ++c) b += "var arg" + c + "Wired = argType" + c + ".toWireType(" + u + ", arg" + c + "); // " + a[c + 2].name + "\n", 
                                    h.push("argType" + c), d.push(a[c + 2]);
                                    n && (p = "thisWired" + (0 < p.length ? ", " : "") + p);
                                    b += (m ? "var rv = " : "") + "invoker(fn" + (0 < p.length ? ", " : "") + p + ");\n";
                                    if (g) b += "runDestructors(destructors);\n"; else for (c = n ? 1 : 2; c < a.length; ++c) f = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired", 
                                    null !== a[c].ca && (b += f + "_dtor(" + f + "); // " + a[c].name + "\n", h.push(f + "_dtor"), 
                                    d.push(a[c].ca));
                                    m && (b += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
                                    h.push(b + "}\n");
                                    return dc(h).apply(null, d);
                                }
                                function fc(b, a) {
                                    for (var c = [], d = 0; d < b; d++) c.push(J[(a >> 2) + d]);
                                    return c;
                                }
                                function gc(b, a, c) {
                                    b instanceof Object || P(c + ' with invalid "this": ' + b);
                                    b instanceof a.W.constructor || P(c + ' incompatible with "this" of type ' + b.constructor.name);
                                    b.V.X || P("cannot call emscripten binding method " + c + " on deleted object");
                                    return Qb(b.V.X, b.V.Y.W, a.W);
                                }
                                function hc(b) {
                                    4 < b && 0 === --O[b].Ba && (O[b] = void 0, eb.push(b));
                                }
                                function ic(b, a, c) {
                                    switch (a) {
                                      case 0:
                                        return function(d) {
                                            return this.fromWireType((c ? La : D)[d]);
                                        };

                                      case 1:
                                        return function(d) {
                                            return this.fromWireType((c ? Ea : Da)[d >> 1]);
                                        };

                                      case 2:
                                        return function(d) {
                                            return this.fromWireType((c ? J : L)[d >> 2]);
                                        };

                                      default:
                                        throw new TypeError("Unknown integer type: " + b);
                                    }
                                }
                                function Sb(b) {
                                    if (null === b) return "null";
                                    var a = typeof b;
                                    return "object" === a || "array" === a || "function" === a ? b.toString() : "" + b;
                                }
                                function jc(b, a) {
                                    switch (a) {
                                      case 2:
                                        return function(c) {
                                            return this.fromWireType(Ma[c >> 2]);
                                        };

                                      case 3:
                                        return function(c) {
                                            return this.fromWireType(Na[c >> 3]);
                                        };

                                      default:
                                        throw new TypeError("Unknown float type: " + b);
                                    }
                                }
                                function kc(b, a, c) {
                                    switch (a) {
                                      case 0:
                                        return c ? function(d) {
                                            return La[d];
                                        } : function(d) {
                                            return D[d];
                                        };

                                      case 1:
                                        return c ? function(d) {
                                            return Ea[d >> 1];
                                        } : function(d) {
                                            return Da[d >> 1];
                                        };

                                      case 2:
                                        return c ? function(d) {
                                            return J[d >> 2];
                                        } : function(d) {
                                            return L[d >> 2];
                                        };

                                      default:
                                        throw new TypeError("Unknown integer type: " + b);
                                    }
                                }
                                var lc = {};
                                function mc(b) {
                                    var a = lc[b];
                                    return void 0 === a ? V(b) : a;
                                }
                                var nc = [];
                                function oc(b) {
                                    var a = nc.length;
                                    nc.push(b);
                                    return a;
                                }
                                function pc(b, a) {
                                    for (var c = Array(b), d = 0; d < b; ++d) c[d] = xb(J[(a >> 2) + d], "parameter " + d);
                                    return c;
                                }
                                var qc = [], rc = [ null, [], [] ];
                                gb = k.BindingError = fb("BindingError");
                                k.count_emval_handles = function() {
                                    for (var b = 0, a = 5; a < O.length; ++a) void 0 !== O[a] && ++b;
                                    return b;
                                };
                                k.get_first_emval = function() {
                                    for (var b = 5; b < O.length; ++b) if (void 0 !== O[b]) return O[b];
                                    return null;
                                };
                                ib = k.PureVirtualError = fb("PureVirtualError");
                                for (var sc = Array(256), tc = 0; 256 > tc; ++tc) sc[tc] = String.fromCharCode(tc);
                                jb = sc;
                                k.getInheritedInstanceCount = function() {
                                    return Object.keys(nb).length;
                                };
                                k.getLiveInheritedInstances = function() {
                                    var a, b = [];
                                    for (a in nb) nb.hasOwnProperty(a) && b.push(nb[a]);
                                    return b;
                                };
                                k.flushPendingDeletes = lb;
                                k.setDelayFunction = function(b) {
                                    mb = b;
                                    kb.length && mb && mb(lb);
                                };
                                Hb = k.InternalError = fb("InternalError");
                                Lb.prototype.isAliasOf = function(b) {
                                    if (!(this instanceof Lb && b instanceof Lb)) return !1;
                                    var a = this.V.Y.W, c = this.V.X, d = b.V.Y.W;
                                    for (b = b.V.X; a.aa; ) c = a.oa(c), a = a.aa;
                                    for (;d.aa; ) b = d.oa(b), d = d.aa;
                                    return a === d && c === b;
                                };
                                Lb.prototype.clone = function() {
                                    this.V.X || Kb(this);
                                    if (this.V.na) return this.V.count.value += 1, this;
                                    var b = Bb, a = Object, c = a.create, d = Object.getPrototypeOf(this), e = this.V;
                                    b = b(c.call(a, d, {
                                        V: {
                                            value: {
                                                count: e.count,
                                                la: e.la,
                                                na: e.na,
                                                X: e.X,
                                                Y: e.Y,
                                                ba: e.ba,
                                                da: e.da
                                            }
                                        }
                                    }));
                                    b.V.count.value += 1;
                                    b.V.la = !1;
                                    return b;
                                };
                                Lb.prototype["delete"] = function() {
                                    this.V.X || Kb(this);
                                    this.V.la && !this.V.na && P("Object already scheduled for deletion");
                                    yb(this);
                                    Ab(this.V);
                                    this.V.na || (this.V.ba = void 0, this.V.X = void 0);
                                };
                                Lb.prototype.isDeleted = function() {
                                    return !this.V.X;
                                };
                                Lb.prototype.deleteLater = function() {
                                    this.V.X || Kb(this);
                                    this.V.la && !this.V.na && P("Object already scheduled for deletion");
                                    kb.push(this);
                                    1 === kb.length && mb && mb(lb);
                                    this.V.la = !0;
                                    return this;
                                };
                                Yb.prototype.jb = function(b) {
                                    this.Qa && (b = this.Qa(b));
                                    return b;
                                };
                                Yb.prototype.Ja = function(b) {
                                    this.ia && this.ia(b);
                                };
                                Yb.prototype.argPackAdvance = 8;
                                Yb.prototype.readValueFromPointer = Eb;
                                Yb.prototype.deleteObject = function(b) {
                                    if (null !== b) b["delete"]();
                                };
                                Yb.prototype.fromWireType = function(b) {
                                    function a() {
                                        return this.sa ? Xb(this.W.fa, {
                                            Y: this.ub,
                                            X: c,
                                            da: this,
                                            ba: b
                                        }) : Xb(this.W.fa, {
                                            Y: this,
                                            X: b
                                        });
                                    }
                                    var c = this.jb(b);
                                    if (!c) return this.Ja(b), null;
                                    var d = Wb(this.W, c);
                                    if (void 0 !== d) {
                                        if (0 === d.V.count.value) return d.V.X = c, d.V.ba = b, d.clone();
                                        d = d.clone();
                                        this.Ja(b);
                                        return d;
                                    }
                                    d = this.W.ib(c);
                                    d = Mb[d];
                                    if (!d) return a.call(this);
                                    d = this.ra ? d.$a : d.pointerType;
                                    var e = Vb(c, this.W, d.W);
                                    return null === e ? a.call(this) : this.sa ? Xb(d.W.fa, {
                                        Y: d,
                                        X: e,
                                        da: this,
                                        ba: b
                                    }) : Xb(d.W.fa, {
                                        Y: d,
                                        X: e
                                    });
                                };
                                bc = k.UnboundTypeError = fb("UnboundTypeError");
                                var vc = {
                                    n: function(b, a, c) {
                                        b = V(b);
                                        a = xb(a, "wrapper");
                                        c = hb(c);
                                        var d = [].slice, e = a.W, f = e.fa, n = e.aa.fa, g = e.aa.constructor;
                                        b = db(b, (function() {
                                            e.aa.Pa.forEach(function(h) {
                                                if (this[h] === n[h]) throw new ib("Pure virtual function " + h + " must be implemented in JavaScript");
                                            }.bind(this));
                                            Object.defineProperty(this, "__parent", {
                                                value: f
                                            });
                                            this.__construct.apply(this, d.call(arguments));
                                        }));
                                        f.__construct = function() {
                                            this === f && P("Pass correct 'this' to __construct");
                                            var h = g.implement.apply(void 0, [ this ].concat(d.call(arguments)));
                                            yb(h);
                                            var p = h.V;
                                            h.notifyOnDestruction();
                                            p.na = !0;
                                            Object.defineProperties(this, {
                                                V: {
                                                    value: p
                                                }
                                            });
                                            Bb(this);
                                            h = p.X;
                                            h = ob(e, h);
                                            nb.hasOwnProperty(h) ? P("Tried to register registered instance: " + h) : nb[h] = this;
                                        };
                                        f.__destruct = function() {
                                            this === f && P("Pass correct 'this' to __destruct");
                                            yb(this);
                                            var h = this.V.X;
                                            h = ob(e, h);
                                            nb.hasOwnProperty(h) ? delete nb[h] : P("Tried to unregister unregistered instance: " + h);
                                        };
                                        b.prototype = Object.create(f);
                                        for (var m in c) b.prototype[m] = c[m];
                                        return Q(b);
                                    },
                                    K: function(b) {
                                        var a = Cb[b];
                                        delete Cb[b];
                                        var c = a.Aa, d = a.ia, e = a.Ma, f = e.map((function(n) {
                                            return n.mb;
                                        })).concat(e.map((function(n) {
                                            return n.xb;
                                        })));
                                        W([ b ], f, (function(n) {
                                            var g = {};
                                            e.forEach((function(m, h) {
                                                var p = n[h], u = m.kb, t = m.lb, x = n[h + e.length], q = m.wb, F = m.yb;
                                                g[m.gb] = {
                                                    read: function(G) {
                                                        return p.fromWireType(u(t, G));
                                                    },
                                                    write: function(G, v) {
                                                        var A = [];
                                                        q(F, G, x.toWireType(A, v));
                                                        Db(A);
                                                    }
                                                };
                                            }));
                                            return [ {
                                                name: a.name,
                                                fromWireType: function(m) {
                                                    var p, h = {};
                                                    for (p in g) h[p] = g[p].read(m);
                                                    d(m);
                                                    return h;
                                                },
                                                toWireType: function(m, h) {
                                                    for (var p in g) if (!(p in h)) throw new TypeError('Missing field:  "' + p + '"');
                                                    var u = c();
                                                    for (p in g) g[p].write(u, h[p]);
                                                    null !== m && m.push(d, u);
                                                    return u;
                                                },
                                                argPackAdvance: 8,
                                                readValueFromPointer: Eb,
                                                ca: d
                                            } ];
                                        }));
                                    },
                                    z: function() {},
                                    F: function(b, a, c, d, e) {
                                        var f = Jb(c);
                                        a = V(a);
                                        X(b, {
                                            name: a,
                                            fromWireType: function(n) {
                                                return !!n;
                                            },
                                            toWireType: function(n, g) {
                                                return g ? d : e;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: function(n) {
                                                if (1 === c) var g = La; else if (2 === c) g = Ea; else if (4 === c) g = J; else throw new TypeError("Unknown boolean type size: " + a);
                                                return this.fromWireType(g[n >> f]);
                                            },
                                            ca: null
                                        });
                                    },
                                    c: function(b, a, c, d, e, f, n, g, m, h, p, u, t) {
                                        p = V(p);
                                        f = Z(e, f);
                                        g && (g = Z(n, g));
                                        h && (h = Z(m, h));
                                        t = Z(u, t);
                                        var x = cb(p);
                                        Ob(x, (function() {
                                            cc("Cannot construct " + p + " due to unbound types", [ d ]);
                                        }));
                                        W([ b, a, c ], d ? [ d ] : [], (function(q) {
                                            q = q[0];
                                            if (d) {
                                                var F = q.W;
                                                var G = F.fa;
                                            } else G = Lb.prototype;
                                            q = db(x, (function() {
                                                if (Object.getPrototypeOf(this) !== v) throw new gb("Use 'new' to construct " + p);
                                                if (void 0 === A.ja) throw new gb(p + " has no accessible constructor");
                                                var N = A.ja[arguments.length];
                                                if (void 0 === N) throw new gb("Tried to invoke ctor of " + p + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(A.ja).toString() + ") parameters instead!");
                                                return N.apply(this, arguments);
                                            }));
                                            var v = Object.create(G, {
                                                constructor: {
                                                    value: q
                                                }
                                            });
                                            q.prototype = v;
                                            var A = new Pb(p, q, v, t, F, f, g, h);
                                            F = new Yb(p, A, !0, !1);
                                            G = new Yb(p + "*", A, !1, !1);
                                            var E = new Yb(p + " const*", A, !1, !0);
                                            Mb[b] = {
                                                pointerType: G,
                                                $a: E
                                            };
                                            Zb(x, q);
                                            return [ F, G, E ];
                                        }));
                                    },
                                    i: function(b, a, c, d, e, f, n) {
                                        var g = fc(c, d);
                                        a = V(a);
                                        f = Z(e, f);
                                        W([], [ b ], (function(m) {
                                            function h() {
                                                cc("Cannot call " + p + " due to unbound types", g);
                                            }
                                            m = m[0];
                                            var p = m.name + "." + a;
                                            a.startsWith("@@") && (a = Symbol[a.substring(2)]);
                                            var u = m.W.constructor;
                                            void 0 === u[a] ? (h.ka = c - 1, u[a] = h) : (Nb(u, a, p), u[a].Z[c - 1] = h);
                                            W([], g, (function(t) {
                                                t = ec(p, [ t[0], null ].concat(t.slice(1)), null, f, n);
                                                void 0 === u[a].Z ? (t.ka = c - 1, u[a] = t) : u[a].Z[c - 1] = t;
                                                return [];
                                            }));
                                            return [];
                                        }));
                                    },
                                    f: function(b, a, c, d, e, f, n, g) {
                                        a = V(a);
                                        f = Z(e, f);
                                        W([], [ b ], (function(m) {
                                            m = m[0];
                                            var h = m.name + "." + a, p = {
                                                get: function() {
                                                    cc("Cannot access " + h + " due to unbound types", [ c ]);
                                                },
                                                enumerable: !0,
                                                configurable: !0
                                            };
                                            p.set = g ? function() {
                                                cc("Cannot access " + h + " due to unbound types", [ c ]);
                                            } : function() {
                                                P(h + " is a read-only property");
                                            };
                                            Object.defineProperty(m.W.constructor, a, p);
                                            W([], [ c ], (function(u) {
                                                u = u[0];
                                                var t = {
                                                    get: function() {
                                                        return u.fromWireType(f(d));
                                                    },
                                                    enumerable: !0
                                                };
                                                g && (g = Z(n, g), t.set = function(x) {
                                                    var q = [];
                                                    g(d, u.toWireType(q, x));
                                                    Db(q);
                                                });
                                                Object.defineProperty(m.W.constructor, a, t);
                                                return [];
                                            }));
                                            return [];
                                        }));
                                    },
                                    l: function(b, a, c, d, e, f) {
                                        0 < a || va("Assertion failed: undefined");
                                        var n = fc(a, c);
                                        e = Z(d, e);
                                        W([], [ b ], (function(g) {
                                            g = g[0];
                                            var m = "constructor " + g.name;
                                            void 0 === g.W.ja && (g.W.ja = []);
                                            if (void 0 !== g.W.ja[a - 1]) throw new gb("Cannot register multiple constructors with identical number of parameters (" + (a - 1) + ") for class '" + g.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                            g.W.ja[a - 1] = function() {
                                                cc("Cannot construct " + g.name + " due to unbound types", n);
                                            };
                                            W([], n, (function(h) {
                                                h.splice(1, 0, null);
                                                g.W.ja[a - 1] = ec(m, h, null, e, f);
                                                return [];
                                            }));
                                            return [];
                                        }));
                                    },
                                    a: function(b, a, c, d, e, f, n, g) {
                                        var m = fc(c, d);
                                        a = V(a);
                                        f = Z(e, f);
                                        W([], [ b ], (function(h) {
                                            function p() {
                                                cc("Cannot call " + u + " due to unbound types", m);
                                            }
                                            h = h[0];
                                            var u = h.name + "." + a;
                                            a.startsWith("@@") && (a = Symbol[a.substring(2)]);
                                            g && h.W.Pa.push(a);
                                            var t = h.W.fa, x = t[a];
                                            void 0 === x || void 0 === x.Z && x.className !== h.name && x.ka === c - 2 ? (p.ka = c - 2, 
                                            p.className = h.name, t[a] = p) : (Nb(t, a, u), t[a].Z[c - 2] = p);
                                            W([], m, (function(q) {
                                                q = ec(u, q, h, f, n);
                                                void 0 === t[a].Z ? (q.ka = c - 2, t[a] = q) : t[a].Z[c - 2] = q;
                                                return [];
                                            }));
                                            return [];
                                        }));
                                    },
                                    b: function(b, a, c, d, e, f, n, g, m, h) {
                                        a = V(a);
                                        e = Z(d, e);
                                        W([], [ b ], (function(p) {
                                            p = p[0];
                                            var u = p.name + "." + a, t = {
                                                get: function() {
                                                    cc("Cannot access " + u + " due to unbound types", [ c, n ]);
                                                },
                                                enumerable: !0,
                                                configurable: !0
                                            };
                                            t.set = m ? function() {
                                                cc("Cannot access " + u + " due to unbound types", [ c, n ]);
                                            } : function() {
                                                P(u + " is a read-only property");
                                            };
                                            Object.defineProperty(p.W.fa, a, t);
                                            W([], m ? [ c, n ] : [ c ], (function(x) {
                                                var q = x[0], F = {
                                                    get: function() {
                                                        var v = gc(this, p, u + " getter");
                                                        return q.fromWireType(e(f, v));
                                                    },
                                                    enumerable: !0
                                                };
                                                if (m) {
                                                    m = Z(g, m);
                                                    var G = x[1];
                                                    F.set = function(v) {
                                                        var A = gc(this, p, u + " setter"), E = [];
                                                        m(h, A, G.toWireType(E, v));
                                                        Db(E);
                                                    };
                                                }
                                                Object.defineProperty(p.W.fa, a, F);
                                                return [];
                                            }));
                                            return [];
                                        }));
                                    },
                                    E: function(b, a) {
                                        a = V(a);
                                        X(b, {
                                            name: a,
                                            fromWireType: function(c) {
                                                var d = hb(c);
                                                hc(c);
                                                return d;
                                            },
                                            toWireType: function(c, d) {
                                                return Q(d);
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: Eb,
                                            ca: null
                                        });
                                    },
                                    k: function(b, a, c, d) {
                                        function e() {}
                                        c = Jb(c);
                                        a = V(a);
                                        e.values = {};
                                        X(b, {
                                            name: a,
                                            constructor: e,
                                            fromWireType: function(f) {
                                                return this.constructor.values[f];
                                            },
                                            toWireType: function(f, n) {
                                                return n.value;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: ic(a, c, d),
                                            ca: null
                                        });
                                        Ob(a, e);
                                    },
                                    j: function(b, a, c) {
                                        var d = xb(b, "enum");
                                        a = V(a);
                                        b = d.constructor;
                                        d = Object.create(d.constructor.prototype, {
                                            value: {
                                                value: c
                                            },
                                            constructor: {
                                                value: db(d.name + "_" + a, (function() {}))
                                            }
                                        });
                                        b.values[c] = d;
                                        b[a] = d;
                                    },
                                    s: function(b, a, c) {
                                        c = Jb(c);
                                        a = V(a);
                                        X(b, {
                                            name: a,
                                            fromWireType: function(d) {
                                                return d;
                                            },
                                            toWireType: function(d, e) {
                                                return e;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: jc(a, c),
                                            ca: null
                                        });
                                    },
                                    r: function(b, a, c, d, e, f) {
                                        var n = fc(a, c);
                                        b = V(b);
                                        e = Z(d, e);
                                        Ob(b, (function() {
                                            cc("Cannot call " + b + " due to unbound types", n);
                                        }), a - 1);
                                        W([], n, (function(g) {
                                            Zb(b, ec(b, [ g[0], null ].concat(g.slice(1)), null, e, f), a - 1);
                                            return [];
                                        }));
                                    },
                                    h: function(b, a, c, d, e) {
                                        function f(h) {
                                            return h;
                                        }
                                        a = V(a);
                                        -1 === e && (e = 4294967295);
                                        var n = Jb(c);
                                        if (0 === d) {
                                            var g = 32 - 8 * c;
                                            f = function(h) {
                                                return h << g >>> g;
                                            };
                                        }
                                        var m = a.includes("unsigned");
                                        X(b, {
                                            name: a,
                                            fromWireType: f,
                                            toWireType: function(h, p) {
                                                if ("number" !== typeof p && "boolean" !== typeof p) throw new TypeError('Cannot convert "' + Sb(p) + '" to ' + this.name);
                                                if (p < d || p > e) throw new TypeError('Passing a number "' + Sb(p) + '" from JS side to C/C++ side to an argument of type "' + a + '", which is outside the valid range [' + d + ", " + e + "]!");
                                                return m ? p >>> 0 : 0 | p;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: kc(a, n, 0 !== d),
                                            ca: null
                                        });
                                    },
                                    g: function(b, a, c) {
                                        function d(f) {
                                            f >>= 2;
                                            var n = L;
                                            return new e(Ka, n[f + 1], n[f]);
                                        }
                                        var e = [ Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array ][a];
                                        c = V(c);
                                        X(b, {
                                            name: c,
                                            fromWireType: d,
                                            argPackAdvance: 8,
                                            readValueFromPointer: d
                                        }, {
                                            nb: !0
                                        });
                                    },
                                    t: function(b, a) {
                                        a = V(a);
                                        var c = "std::string" === a;
                                        X(b, {
                                            name: a,
                                            fromWireType: function(d) {
                                                var e = L[d >> 2];
                                                if (c) for (var f = d + 4, n = 0; n <= e; ++n) {
                                                    var g = d + 4 + n;
                                                    if (n == e || 0 == D[g]) {
                                                        f = f ? za(D, f, g - f) : "";
                                                        if (void 0 === m) var m = f; else m += String.fromCharCode(0), m += f;
                                                        f = g + 1;
                                                    }
                                                } else {
                                                    m = Array(e);
                                                    for (n = 0; n < e; ++n) m[n] = String.fromCharCode(D[d + 4 + n]);
                                                    m = m.join("");
                                                }
                                                sb(d);
                                                return m;
                                            },
                                            toWireType: function(d, e) {
                                                e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                                var f = "string" === typeof e;
                                                f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || P("Cannot pass non-string to std::string");
                                                var n = (c && f ? function() {
                                                    for (var h = 0, p = 0; p < e.length; ++p) {
                                                        var u = e.charCodeAt(p);
                                                        55296 <= u && 57343 >= u && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++p));
                                                        127 >= u ? ++h : h = 2047 >= u ? h + 2 : 65535 >= u ? h + 3 : h + 4;
                                                    }
                                                    return h;
                                                } : function() {
                                                    return e.length;
                                                })(), g = uc(4 + n + 1);
                                                L[g >> 2] = n;
                                                if (c && f) Aa(e, g + 4, n + 1); else if (f) for (f = 0; f < n; ++f) {
                                                    var m = e.charCodeAt(f);
                                                    255 < m && (sb(g), P("String has UTF-16 code units that do not fit in 8 bits"));
                                                    D[g + 4 + f] = m;
                                                } else for (f = 0; f < n; ++f) D[g + 4 + f] = e[f];
                                                null !== d && d.push(sb, g);
                                                return g;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: Eb,
                                            ca: function(d) {
                                                sb(d);
                                            }
                                        });
                                    },
                                    q: function(b, a, c) {
                                        c = V(c);
                                        if (2 === a) {
                                            var d = Ca;
                                            var e = Fa;
                                            var f = Ga;
                                            var n = function() {
                                                return Da;
                                            };
                                            var g = 1;
                                        } else 4 === a && (d = Ha, e = Ia, f = Ja, n = function() {
                                            return L;
                                        }, g = 2);
                                        X(b, {
                                            name: c,
                                            fromWireType: function(m) {
                                                for (var u, h = L[m >> 2], p = n(), t = m + 4, x = 0; x <= h; ++x) {
                                                    var q = m + 4 + x * a;
                                                    if (x == h || 0 == p[q >> g]) t = d(t, q - t), void 0 === u ? u = t : (u += String.fromCharCode(0), 
                                                    u += t), t = q + a;
                                                }
                                                sb(m);
                                                return u;
                                            },
                                            toWireType: function(m, h) {
                                                "string" !== typeof h && P("Cannot pass non-string to C++ string type " + c);
                                                var p = f(h), u = uc(4 + p + a);
                                                L[u >> 2] = p >> g;
                                                e(h, u + 4, p + a);
                                                null !== m && m.push(sb, u);
                                                return u;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: Eb,
                                            ca: function(m) {
                                                sb(m);
                                            }
                                        });
                                    },
                                    L: function(b, a, c, d, e, f) {
                                        Cb[b] = {
                                            name: V(a),
                                            Aa: Z(c, d),
                                            ia: Z(e, f),
                                            Ma: []
                                        };
                                    },
                                    I: function(b, a, c, d, e, f, n, g, m, h) {
                                        Cb[b].Ma.push({
                                            gb: V(a),
                                            mb: c,
                                            kb: Z(d, e),
                                            lb: f,
                                            xb: n,
                                            wb: Z(g, m),
                                            yb: h
                                        });
                                    },
                                    G: function(b, a) {
                                        a = V(a);
                                        X(b, {
                                            pb: !0,
                                            name: a,
                                            argPackAdvance: 0,
                                            fromWireType: function() {},
                                            toWireType: function() {}
                                        });
                                    },
                                    m: function(b, a, c) {
                                        b = hb(b);
                                        a = xb(a, "emval::as");
                                        var d = [], e = Q(d);
                                        J[c >> 2] = e;
                                        return a.toWireType(d, b);
                                    },
                                    u: function(b, a, c, d, e) {
                                        b = nc[b];
                                        a = hb(a);
                                        c = mc(c);
                                        var f = [];
                                        J[d >> 2] = Q(f);
                                        return b(a, c, f, e);
                                    },
                                    e: function(b, a, c, d) {
                                        b = nc[b];
                                        a = hb(a);
                                        c = mc(c);
                                        b(a, c, null, d);
                                    },
                                    M: hc,
                                    d: function(b, a) {
                                        var c = pc(b, a), d = c[0];
                                        a = d.name + "_$" + c.slice(1).map((function(p) {
                                            return p.name;
                                        })).join("_") + "$";
                                        var e = qc[a];
                                        if (void 0 !== e) return e;
                                        e = [ "retType" ];
                                        for (var f = [ d ], n = "", g = 0; g < b - 1; ++g) n += (0 !== g ? ", " : "") + "arg" + g, 
                                        e.push("argType" + g), f.push(c[1 + g]);
                                        var m = "return function " + cb("methodCaller_" + a) + "(handle, name, destructors, args) {\n", h = 0;
                                        for (g = 0; g < b - 1; ++g) m += "    var arg" + g + " = argType" + g + ".readValueFromPointer(args" + (h ? "+" + h : "") + ");\n", 
                                        h += c[g + 1].argPackAdvance;
                                        m += "    var rv = handle[name](" + n + ");\n";
                                        for (g = 0; g < b - 1; ++g) c[g + 1].deleteObject && (m += "    argType" + g + ".deleteObject(arg" + g + ");\n");
                                        d.pb || (m += "    return retType.toWireType(destructors, rv);\n");
                                        e.push(m + "};\n");
                                        b = dc(e).apply(null, f);
                                        e = oc(b);
                                        return qc[a] = e;
                                    },
                                    H: function(b) {
                                        b = mc(b);
                                        return Q(k[b]);
                                    },
                                    J: function(b, a) {
                                        b = hb(b);
                                        a = hb(a);
                                        return Q(b[a]);
                                    },
                                    w: function(b) {
                                        4 < b && (O[b].Ba += 1);
                                    },
                                    D: function(b) {
                                        return Q(mc(b));
                                    },
                                    x: function(b) {
                                        var a = hb(b);
                                        Db(a);
                                        hc(b);
                                    },
                                    o: function(b, a) {
                                        b = xb(b, "_emval_take_value");
                                        b = b.readValueFromPointer(a);
                                        return Q(b);
                                    },
                                    v: function() {
                                        va("");
                                    },
                                    p: function(b) {
                                        var a = D.length;
                                        b >>>= 0;
                                        if (2147483648 < b) return !1;
                                        for (var c = 1; 4 >= c; c *= 2) {
                                            var d = a * (1 + .2 / c);
                                            d = Math.min(d, b + 100663296);
                                            d = Math.max(b, d);
                                            0 < d % 65536 && (d += 65536 - d % 65536);
                                            a: {
                                                try {
                                                    wa.grow(Math.min(2147483648, d) - Ka.byteLength + 65535 >>> 16);
                                                    Oa();
                                                    var e = 1;
                                                    break a;
                                                } catch (f) {}
                                                e = void 0;
                                            }
                                            if (e) return !0;
                                        }
                                        return !1;
                                    },
                                    C: function() {
                                        return 0;
                                    },
                                    y: function() {},
                                    B: function(b, a, c, d) {
                                        for (var e = 0, f = 0; f < c; f++) {
                                            var n = J[a >> 2], g = J[a + 4 >> 2];
                                            a += 8;
                                            for (var m = 0; m < g; m++) {
                                                var h = D[n + m], p = rc[b];
                                                0 === h || 10 === h ? ((1 === b ? qa : ra)(za(p, 0)), p.length = 0) : p.push(h);
                                            }
                                            e += g;
                                        }
                                        J[d >> 2] = e;
                                        return 0;
                                    },
                                    A: function() {}
                                };
                                (function() {
                                    function b(e) {
                                        k.asm = e.exports;
                                        wa = k.asm.N;
                                        Oa();
                                        Pa = k.asm.T;
                                        Ra.unshift(k.asm.O);
                                        Ua--;
                                        k.monitorRunDependencies && k.monitorRunDependencies(Ua);
                                        0 == Ua && (null !== Va && (clearInterval(Va), Va = null), Wa && (e = Wa, Wa = null, 
                                        e()));
                                    }
                                    function a(e) {
                                        b(e.instance);
                                    }
                                    function c(e) {
                                        return $a().then((function(f) {
                                            return WebAssembly.instantiate(f, d);
                                        })).then((function(f) {
                                            return f;
                                        })).then(e, (function(f) {
                                            ra("failed to asynchronously prepare wasm: " + f);
                                            va(f);
                                        }));
                                    }
                                    var d = {
                                        a: vc
                                    };
                                    Ua++;
                                    k.monitorRunDependencies && k.monitorRunDependencies(Ua);
                                    if (k.instantiateWasm) try {
                                        return k.instantiateWasm(d, b);
                                    } catch (e) {
                                        return ra("Module.instantiateWasm callback failed with error: " + e), !1;
                                    }
                                    (function() {
                                        return sa || "function" !== typeof WebAssembly.instantiateStreaming || Xa() || M.startsWith("file://") || "function" !== typeof fetch ? c(a) : fetch(M, {
                                            credentials: "same-origin"
                                        }).then((function(e) {
                                            return WebAssembly.instantiateStreaming(e, d).then(a, (function(f) {
                                                ra("wasm streaming compile failed: " + f);
                                                ra("falling back to ArrayBuffer instantiation");
                                                return c(a);
                                            }));
                                        }));
                                    })().catch(ba);
                                    return {};
                                })();
                                k.___wasm_call_ctors = function() {
                                    return (k.___wasm_call_ctors = k.asm.O).apply(null, arguments);
                                };
                                var sb = k._free = function() {
                                    return (sb = k._free = k.asm.P).apply(null, arguments);
                                }, uc = k._malloc = function() {
                                    return (uc = k._malloc = k.asm.Q).apply(null, arguments);
                                }, rb = k.___getTypeName = function() {
                                    return (rb = k.___getTypeName = k.asm.R).apply(null, arguments);
                                };
                                k.___embind_register_native_and_builtin_types = function() {
                                    return (k.___embind_register_native_and_builtin_types = k.asm.S).apply(null, arguments);
                                };
                                k.dynCall_jiji = function() {
                                    return (k.dynCall_jiji = k.asm.U).apply(null, arguments);
                                };
                                var wc;
                                Wa = function xc() {
                                    wc || yc();
                                    wc || (Wa = xc);
                                };
                                function yc() {
                                    function b() {
                                        if (!wc && (wc = !0, k.calledRun = !0, !xa)) {
                                            ab(Ra);
                                            aa(k);
                                            if (k.onRuntimeInitialized) k.onRuntimeInitialized();
                                            if (k.postRun) for ("function" == typeof k.postRun && (k.postRun = [ k.postRun ]); k.postRun.length; ) {
                                                var a = k.postRun.shift();
                                                Sa.unshift(a);
                                            }
                                            ab(Sa);
                                        }
                                    }
                                    if (!(0 < Ua)) {
                                        if (k.preRun) for ("function" == typeof k.preRun && (k.preRun = [ k.preRun ]); k.preRun.length; ) Ta();
                                        ab(Qa);
                                        0 < Ua || (k.setStatus ? (k.setStatus("Running..."), setTimeout((function() {
                                            setTimeout((function() {
                                                k.setStatus("");
                                            }), 1);
                                            b();
                                        }), 1)) : b());
                                    }
                                }
                                k.run = yc;
                                if (k.preInit) for ("function" == typeof k.preInit && (k.preInit = [ k.preInit ]); 0 < k.preInit.length; ) k.preInit.pop()();
                                yc();
                                return Rive.ready;
                            };
                        }();
                        const __WEBPACK_DEFAULT_EXPORT__ = Rive;
                    }, module => {
                        module.exports = JSON.parse('{"name":"@rive-app/canvas","version":"1.0.84","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');
                    }, (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43563__) => {
                        __nested_webpack_require_43563__.r(__webpack_exports__);
                        __nested_webpack_require_43563__.d(__webpack_exports__, {
                            registerTouchInteractions: () => _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions
                        });
                        var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43563__(4);
                    }, (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44069__) => {
                        __nested_webpack_require_44069__.r(__webpack_exports__);
                        __nested_webpack_require_44069__.d(__webpack_exports__, {
                            registerTouchInteractions: () => registerTouchInteractions
                        });
                        const registerTouchInteractions = ({canvas, artboard, stateMachines = [], renderer, rive, fit, alignment}) => {
                            if (!canvas || !stateMachines.length || !renderer || !rive || !artboard) return null;
                            const mouseCallback = event => {
                                const boundingRect = event.currentTarget.getBoundingClientRect();
                                const canvasX = event.clientX - boundingRect.left;
                                const canvasY = event.clientY - boundingRect.top;
                                const forwardMatrix = rive.computeAlignment(fit, alignment, {
                                    minX: 0,
                                    minY: 0,
                                    maxX: boundingRect.width,
                                    maxY: boundingRect.height
                                }, artboard.bounds);
                                let invertedMatrix = new rive.Mat2D;
                                forwardMatrix.invert(invertedMatrix);
                                const canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
                                const transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
                                const transformedX = transformedVector.x();
                                const transformedY = transformedVector.y();
                                switch (event.type) {
                                  case "mousemove":
                                    for (const stateMachine of stateMachines) stateMachine.pointerMove(transformedX, transformedY);
                                    break;

                                  case "mousedown":
                                    for (const stateMachine of stateMachines) stateMachine.pointerDown(transformedX, transformedY);
                                    break;

                                  case "mouseup":
                                    for (const stateMachine of stateMachines) stateMachine.pointerUp(transformedX, transformedY);
                                    break;

                                  default:
                                }
                            };
                            const callback = mouseCallback.bind(void 0);
                            canvas.addEventListener("mousemove", callback);
                            canvas.addEventListener("mousedown", callback);
                            canvas.addEventListener("mouseup", callback);
                            return () => {
                                canvas.removeEventListener("mousemove", callback);
                                canvas.removeEventListener("mousedown", callback);
                                canvas.removeEventListener("mouseup", callback);
                            };
                        };
                    } ];
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_46891__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (void 0 !== cachedModule) return cachedModule.exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_46891__);
                        return module.exports;
                    }
                    (() => {
                        __nested_webpack_require_46891__.d = (exports, definition) => {
                            for (var key in definition) if (__nested_webpack_require_46891__.o(definition, key) && !__nested_webpack_require_46891__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    })();
                    (() => {
                        __nested_webpack_require_46891__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
                    })();
                    (() => {
                        __nested_webpack_require_46891__.r = exports => {
                            if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        };
                    })();
                    var __webpack_exports__ = {};
                    (() => {
                        __nested_webpack_require_46891__.r(__webpack_exports__);
                        __nested_webpack_require_46891__.d(__webpack_exports__, {
                            Fit: () => Fit,
                            Alignment: () => Alignment,
                            Layout: () => Layout,
                            RuntimeLoader: () => RuntimeLoader,
                            StateMachineInputType: () => StateMachineInputType,
                            StateMachineInput: () => StateMachineInput,
                            EventType: () => EventType,
                            LoopType: () => LoopType,
                            Rive: () => Rive,
                            Testing: () => Testing
                        });
                        var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46891__(1);
                        var package_json__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_46891__(2);
                        var _utils__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_46891__(3);
                        var __awaiter = false || function(thisArg, _arguments, P, generator) {
                            function adopt(value) {
                                return value instanceof P ? value : new P((function(resolve) {
                                    resolve(value);
                                }));
                            }
                            return new (P || (P = Promise))((function(resolve, reject) {
                                function fulfilled(value) {
                                    try {
                                        step(generator.next(value));
                                    } catch (e) {
                                        reject(e);
                                    }
                                }
                                function rejected(value) {
                                    try {
                                        step(generator["throw"](value));
                                    } catch (e) {
                                        reject(e);
                                    }
                                }
                                function step(result) {
                                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                                }
                                step((generator = generator.apply(thisArg, _arguments || [])).next());
                            }));
                        };
                        var __generator = false || function(thisArg, body) {
                            var f, y, t, g, _ = {
                                label: 0,
                                sent: function() {
                                    if (1 & t[0]) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: []
                            };
                            return g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2)
                            }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
                                return this;
                            }), g;
                            function verb(n) {
                                return function(v) {
                                    return step([ n, v ]);
                                };
                            }
                            function step(op) {
                                if (f) throw new TypeError("Generator is already executing.");
                                while (_) try {
                                    if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                                    0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                    if (y = 0, t) op = [ 2 & op[0], t.value ];
                                    switch (op[0]) {
                                      case 0:
                                      case 1:
                                        t = op;
                                        break;

                                      case 4:
                                        _.label++;
                                        return {
                                            value: op[1],
                                            done: false
                                        };

                                      case 5:
                                        _.label++;
                                        y = op[1];
                                        op = [ 0 ];
                                        continue;

                                      case 7:
                                        op = _.ops.pop();
                                        _.trys.pop();
                                        continue;

                                      default:
                                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                            _.label = op[1];
                                            break;
                                        }
                                        if (6 === op[0] && _.label < t[1]) {
                                            _.label = t[1];
                                            t = op;
                                            break;
                                        }
                                        if (t && _.label < t[2]) {
                                            _.label = t[2];
                                            _.ops.push(op);
                                            break;
                                        }
                                        if (t[2]) _.ops.pop();
                                        _.trys.pop();
                                        continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [ 6, e ];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                                if (5 & op[0]) throw op[1];
                                return {
                                    value: op[0] ? op[1] : void 0,
                                    done: true
                                };
                            }
                        };
                        var PlaybackState;
                        (function(PlaybackState) {
                            PlaybackState[PlaybackState["Play"] = 0] = "Play";
                            PlaybackState[PlaybackState["Pause"] = 1] = "Pause";
                            PlaybackState[PlaybackState["Stop"] = 2] = "Stop";
                        })(PlaybackState || (PlaybackState = {}));
                        var Fit;
                        (function(Fit) {
                            Fit["Cover"] = "cover";
                            Fit["Contain"] = "contain";
                            Fit["Fill"] = "fill";
                            Fit["FitWidth"] = "fitWidth";
                            Fit["FitHeight"] = "fitHeight";
                            Fit["None"] = "none";
                            Fit["ScaleDown"] = "scaleDown";
                        })(Fit || (Fit = {}));
                        var Alignment;
                        (function(Alignment) {
                            Alignment["Center"] = "center";
                            Alignment["TopLeft"] = "topLeft";
                            Alignment["TopCenter"] = "topCenter";
                            Alignment["TopRight"] = "topRight";
                            Alignment["CenterLeft"] = "centerLeft";
                            Alignment["CenterRight"] = "centerRight";
                            Alignment["BottomLeft"] = "bottomLeft";
                            Alignment["BottomCenter"] = "bottomCenter";
                            Alignment["BottomRight"] = "bottomRight";
                        })(Alignment || (Alignment = {}));
                        var Layout = function() {
                            function Layout(params) {
                                var _a, _b, _c, _d, _e, _f;
                                this.fit = null !== (_a = null === params || void 0 === params ? void 0 : params.fit) && void 0 !== _a ? _a : Fit.Contain;
                                this.alignment = null !== (_b = null === params || void 0 === params ? void 0 : params.alignment) && void 0 !== _b ? _b : Alignment.Center;
                                this.minX = null !== (_c = null === params || void 0 === params ? void 0 : params.minX) && void 0 !== _c ? _c : 0;
                                this.minY = null !== (_d = null === params || void 0 === params ? void 0 : params.minY) && void 0 !== _d ? _d : 0;
                                this.maxX = null !== (_e = null === params || void 0 === params ? void 0 : params.maxX) && void 0 !== _e ? _e : 0;
                                this.maxY = null !== (_f = null === params || void 0 === params ? void 0 : params.maxY) && void 0 !== _f ? _f : 0;
                            }
                            Layout.new = function(_a) {
                                var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                                console.warn("This function is deprecated: please use `new Layout({})` instead");
                                return new Layout({
                                    fit,
                                    alignment,
                                    minX,
                                    minY,
                                    maxX,
                                    maxY
                                });
                            };
                            Layout.prototype.copyWith = function(_a) {
                                var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                                return new Layout({
                                    fit: null !== fit && void 0 !== fit ? fit : this.fit,
                                    alignment: null !== alignment && void 0 !== alignment ? alignment : this.alignment,
                                    minX: null !== minX && void 0 !== minX ? minX : this.minX,
                                    minY: null !== minY && void 0 !== minY ? minY : this.minY,
                                    maxX: null !== maxX && void 0 !== maxX ? maxX : this.maxX,
                                    maxY: null !== maxY && void 0 !== maxY ? maxY : this.maxY
                                });
                            };
                            Layout.prototype.runtimeFit = function(rive) {
                                if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
                                var fit;
                                if (this.fit === Fit.Cover) fit = rive.Fit.cover; else if (this.fit === Fit.Contain) fit = rive.Fit.contain; else if (this.fit === Fit.Fill) fit = rive.Fit.fill; else if (this.fit === Fit.FitWidth) fit = rive.Fit.fitWidth; else if (this.fit === Fit.FitHeight) fit = rive.Fit.fitHeight; else if (this.fit === Fit.ScaleDown) fit = rive.Fit.scaleDown; else fit = rive.Fit.none;
                                this.cachedRuntimeFit = fit;
                                return fit;
                            };
                            Layout.prototype.runtimeAlignment = function(rive) {
                                if (this.cachedRuntimeAlignment) return this.cachedRuntimeAlignment;
                                var alignment;
                                if (this.alignment === Alignment.TopLeft) alignment = rive.Alignment.topLeft; else if (this.alignment === Alignment.TopCenter) alignment = rive.Alignment.topCenter; else if (this.alignment === Alignment.TopRight) alignment = rive.Alignment.topRight; else if (this.alignment === Alignment.CenterLeft) alignment = rive.Alignment.centerLeft; else if (this.alignment === Alignment.CenterRight) alignment = rive.Alignment.centerRight; else if (this.alignment === Alignment.BottomLeft) alignment = rive.Alignment.bottomLeft; else if (this.alignment === Alignment.BottomCenter) alignment = rive.Alignment.bottomCenter; else if (this.alignment === Alignment.BottomRight) alignment = rive.Alignment.bottomRight; else alignment = rive.Alignment.center;
                                this.cachedRuntimeAlignment = alignment;
                                return alignment;
                            };
                            return Layout;
                        }();
                        var RuntimeLoader = function() {
                            function RuntimeLoader() {}
                            RuntimeLoader.loadRuntime = function() {
                                _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__.default({
                                    locateFile: function(_) {
                                        return RuntimeLoader.wasmURL;
                                    }
                                }).then((function(rive) {
                                    var _a;
                                    RuntimeLoader.runtime = rive;
                                    while (RuntimeLoader.callBackQueue.length > 0) null === (_a = RuntimeLoader.callBackQueue.shift()) || void 0 === _a ? void 0 : _a(RuntimeLoader.runtime);
                                }));
                            };
                            RuntimeLoader.getInstance = function(callback) {
                                if (!RuntimeLoader.isLoading) {
                                    RuntimeLoader.isLoading = true;
                                    RuntimeLoader.loadRuntime();
                                }
                                if (!RuntimeLoader.runtime) RuntimeLoader.callBackQueue.push(callback); else callback(RuntimeLoader.runtime);
                            };
                            RuntimeLoader.awaitInstance = function() {
                                return new Promise((function(resolve, reject) {
                                    return RuntimeLoader.getInstance((function(rive) {
                                        return resolve(rive);
                                    }));
                                }));
                            };
                            RuntimeLoader.setWasmUrl = function(url) {
                                RuntimeLoader.wasmURL = url;
                            };
                            RuntimeLoader.isLoading = false;
                            RuntimeLoader.callBackQueue = [];
                            RuntimeLoader.wasmURL = "https://unpkg.com/" + package_json__WEBPACK_IMPORTED_MODULE_1__.name + "@" + package_json__WEBPACK_IMPORTED_MODULE_1__.version + "/rive.wasm";
                            return RuntimeLoader;
                        }();
                        var Animation = function() {
                            function Animation(animation, artboard, runtime, playing) {
                                this.animation = animation;
                                this.artboard = artboard;
                                this.playing = playing;
                                this.loopCount = 0;
                                this.scrubTo = null;
                                this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                            }
                            Object.defineProperty(Animation.prototype, "name", {
                                get: function() {
                                    return this.animation.name;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Animation.prototype, "time", {
                                get: function() {
                                    return this.instance.time;
                                },
                                set: function(value) {
                                    this.instance.time = value;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Animation.prototype, "loopValue", {
                                get: function() {
                                    return this.animation.loopValue;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Animation.prototype.advance = function(time) {
                                if (null === this.scrubTo) this.instance.advance(time); else {
                                    this.instance.time = 0;
                                    this.instance.advance(this.scrubTo);
                                    this.scrubTo = null;
                                }
                            };
                            Animation.prototype.apply = function(mix) {
                                this.instance.apply(mix);
                            };
                            Object.defineProperty(Animation.prototype, "needsScrub", {
                                get: function() {
                                    return null !== this.scrubTo;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Animation.prototype.cleanup = function() {
                                this.instance.delete();
                            };
                            return Animation;
                        }();
                        var StateMachineInputType;
                        (function(StateMachineInputType) {
                            StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
                            StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
                            StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
                        })(StateMachineInputType || (StateMachineInputType = {}));
                        var StateMachineInput = function() {
                            function StateMachineInput(type, runtimeInput) {
                                this.type = type;
                                this.runtimeInput = runtimeInput;
                            }
                            Object.defineProperty(StateMachineInput.prototype, "name", {
                                get: function() {
                                    return this.runtimeInput.name;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(StateMachineInput.prototype, "value", {
                                get: function() {
                                    return this.runtimeInput.value;
                                },
                                set: function(value) {
                                    this.runtimeInput.value = value;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            StateMachineInput.prototype.fire = function() {
                                if (this.type === StateMachineInputType.Trigger) this.runtimeInput.fire();
                            };
                            return StateMachineInput;
                        }();
                        var StateMachine = function() {
                            function StateMachine(stateMachine, runtime, playing, artboard) {
                                this.stateMachine = stateMachine;
                                this.playing = playing;
                                this.artboard = artboard;
                                this.inputs = [];
                                this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                                this.initInputs(runtime);
                            }
                            Object.defineProperty(StateMachine.prototype, "name", {
                                get: function() {
                                    return this.stateMachine.name;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(StateMachine.prototype, "statesChanged", {
                                get: function() {
                                    var names = [];
                                    for (var i = 0; i < this.instance.stateChangedCount(); i++) names.push(this.instance.stateChangedNameByIndex(i));
                                    return names;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            StateMachine.prototype.advance = function(time) {
                                this.instance.advance(time);
                            };
                            StateMachine.prototype.initInputs = function(runtime) {
                                for (var i = 0; i < this.instance.inputCount(); i++) {
                                    var input = this.instance.input(i);
                                    this.inputs.push(this.mapRuntimeInput(input, runtime));
                                }
                            };
                            StateMachine.prototype.mapRuntimeInput = function(input, runtime) {
                                if (input.type === runtime.SMIInput.bool) return new StateMachineInput(StateMachineInputType.Boolean, input.asBool()); else if (input.type === runtime.SMIInput.number) return new StateMachineInput(StateMachineInputType.Number, input.asNumber()); else if (input.type === runtime.SMIInput.trigger) return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                            };
                            StateMachine.prototype.cleanup = function() {
                                this.instance.delete();
                            };
                            return StateMachine;
                        }();
                        var Animator = function() {
                            function Animator(runtime, artboard, eventManager, animations, stateMachines) {
                                if (void 0 === animations) animations = [];
                                if (void 0 === stateMachines) stateMachines = [];
                                this.runtime = runtime;
                                this.artboard = artboard;
                                this.eventManager = eventManager;
                                this.animations = animations;
                                this.stateMachines = stateMachines;
                            }
                            Animator.prototype.add = function(animatables, playing, fireEvent) {
                                if (void 0 === fireEvent) fireEvent = true;
                                animatables = mapToStringArray(animatables);
                                if (0 === animatables.length) {
                                    this.animations.forEach((function(a) {
                                        return a.playing = playing;
                                    }));
                                    this.stateMachines.forEach((function(m) {
                                        return m.playing = playing;
                                    }));
                                } else {
                                    var instancedAnimationNames = this.animations.map((function(a) {
                                        return a.name;
                                    }));
                                    var instancedMachineNames = this.stateMachines.map((function(m) {
                                        return m.name;
                                    }));
                                    for (var i in animatables) {
                                        var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                                        var mIndex = instancedMachineNames.indexOf(animatables[i]);
                                        if (aIndex >= 0 || mIndex >= 0) if (aIndex >= 0) this.animations[aIndex].playing = playing; else this.stateMachines[mIndex].playing = playing; else {
                                            var anim = this.artboard.animationByName(animatables[i]);
                                            if (anim) {
                                                var newAnimation = new Animation(anim, this.artboard, this.runtime, playing);
                                                newAnimation.advance(0);
                                                newAnimation.apply(1);
                                                this.animations.push(newAnimation);
                                            } else {
                                                var sm = this.artboard.stateMachineByName(animatables[i]);
                                                if (sm) {
                                                    var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                                                    this.stateMachines.push(newStateMachine);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (fireEvent) if (playing) this.eventManager.fire({
                                    type: EventType.Play,
                                    data: this.playing
                                }); else this.eventManager.fire({
                                    type: EventType.Pause,
                                    data: this.paused
                                });
                                return playing ? this.playing : this.paused;
                            };
                            Animator.prototype.play = function(animatables) {
                                return this.add(animatables, true);
                            };
                            Animator.prototype.pause = function(animatables) {
                                return this.add(animatables, false);
                            };
                            Animator.prototype.scrub = function(animatables, value) {
                                var forScrubbing = this.animations.filter((function(a) {
                                    return animatables.includes(a.name);
                                }));
                                forScrubbing.forEach((function(a) {
                                    return a.scrubTo = value;
                                }));
                                return forScrubbing.map((function(a) {
                                    return a.name;
                                }));
                            };
                            Object.defineProperty(Animator.prototype, "playing", {
                                get: function() {
                                    return this.animations.filter((function(a) {
                                        return a.playing;
                                    })).map((function(a) {
                                        return a.name;
                                    })).concat(this.stateMachines.filter((function(m) {
                                        return m.playing;
                                    })).map((function(m) {
                                        return m.name;
                                    })));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Animator.prototype, "paused", {
                                get: function() {
                                    return this.animations.filter((function(a) {
                                        return !a.playing;
                                    })).map((function(a) {
                                        return a.name;
                                    })).concat(this.stateMachines.filter((function(m) {
                                        return !m.playing;
                                    })).map((function(m) {
                                        return m.name;
                                    })));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Animator.prototype.stop = function(animatables) {
                                var _this = this;
                                animatables = mapToStringArray(animatables);
                                var removedNames = [];
                                if (0 === animatables.length) {
                                    removedNames = this.animations.map((function(a) {
                                        return a.name;
                                    })).concat(this.stateMachines.map((function(m) {
                                        return m.name;
                                    })));
                                    this.animations.forEach((function(a) {
                                        return a.cleanup();
                                    }));
                                    this.stateMachines.forEach((function(m) {
                                        return m.cleanup();
                                    }));
                                    this.animations.splice(0, this.animations.length);
                                    this.stateMachines.splice(0, this.stateMachines.length);
                                } else {
                                    var animationsToRemove = this.animations.filter((function(a) {
                                        return animatables.includes(a.name);
                                    }));
                                    animationsToRemove.forEach((function(a) {
                                        a.cleanup();
                                        _this.animations.splice(_this.animations.indexOf(a), 1);
                                    }));
                                    var machinesToRemove = this.stateMachines.filter((function(m) {
                                        return animatables.includes(m.name);
                                    }));
                                    machinesToRemove.forEach((function(m) {
                                        m.cleanup();
                                        _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                                    }));
                                    removedNames = animationsToRemove.map((function(a) {
                                        return a.name;
                                    })).concat(machinesToRemove.map((function(m) {
                                        return m.name;
                                    })));
                                }
                                this.eventManager.fire({
                                    type: EventType.Stop,
                                    data: removedNames
                                });
                                return removedNames;
                            };
                            Object.defineProperty(Animator.prototype, "isPlaying", {
                                get: function() {
                                    return this.animations.reduce((function(acc, curr) {
                                        return acc || curr.playing;
                                    }), false) || this.stateMachines.reduce((function(acc, curr) {
                                        return acc || curr.playing;
                                    }), false);
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Animator.prototype, "isPaused", {
                                get: function() {
                                    return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Animator.prototype, "isStopped", {
                                get: function() {
                                    return 0 === this.animations.length && 0 === this.stateMachines.length;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Animator.prototype.atLeastOne = function(playing, fireEvent) {
                                if (void 0 === fireEvent) fireEvent = true;
                                var instancedName;
                                if (0 === this.animations.length && 0 === this.stateMachines.length) if (this.artboard.animationCount() > 0) this.add([ instancedName = this.artboard.animationByIndex(0).name ], playing, fireEvent); else if (this.artboard.stateMachineCount() > 0) this.add([ instancedName = this.artboard.stateMachineByIndex(0).name ], playing, fireEvent);
                                return instancedName;
                            };
                            Animator.prototype.handleLooping = function() {
                                for (var _i = 0, _a = this.animations.filter((function(a) {
                                    return a.playing;
                                })); _i < _a.length; _i++) {
                                    var animation = _a[_i];
                                    if (0 === animation.loopValue && animation.loopCount) {
                                        animation.loopCount = 0;
                                        this.stop(animation.name);
                                    } else if (1 === animation.loopValue && animation.loopCount) {
                                        this.eventManager.fire({
                                            type: EventType.Loop,
                                            data: {
                                                animation: animation.name,
                                                type: LoopType.Loop
                                            }
                                        });
                                        animation.loopCount = 0;
                                    } else if (2 === animation.loopValue && animation.loopCount > 1) {
                                        this.eventManager.fire({
                                            type: EventType.Loop,
                                            data: {
                                                animation: animation.name,
                                                type: LoopType.PingPong
                                            }
                                        });
                                        animation.loopCount = 0;
                                    }
                                }
                            };
                            Animator.prototype.handleStateChanges = function() {
                                var statesChanged = [];
                                for (var _i = 0, _a = this.stateMachines.filter((function(sm) {
                                    return sm.playing;
                                })); _i < _a.length; _i++) {
                                    var stateMachine = _a[_i];
                                    statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                                }
                                if (statesChanged.length > 0) this.eventManager.fire({
                                    type: EventType.StateChange,
                                    data: statesChanged
                                });
                            };
                            return Animator;
                        }();
                        var EventType;
                        (function(EventType) {
                            EventType["Load"] = "load";
                            EventType["LoadError"] = "loaderror";
                            EventType["Play"] = "play";
                            EventType["Pause"] = "pause";
                            EventType["Stop"] = "stop";
                            EventType["Loop"] = "loop";
                            EventType["Draw"] = "draw";
                            EventType["StateChange"] = "statechange";
                        })(EventType || (EventType = {}));
                        var LoopType;
                        (function(LoopType) {
                            LoopType["OneShot"] = "oneshot";
                            LoopType["Loop"] = "loop";
                            LoopType["PingPong"] = "pingpong";
                        })(LoopType || (LoopType = {}));
                        var EventManager = function() {
                            function EventManager(listeners) {
                                if (void 0 === listeners) listeners = [];
                                this.listeners = listeners;
                            }
                            EventManager.prototype.getListeners = function(type) {
                                return this.listeners.filter((function(e) {
                                    return e.type === type;
                                }));
                            };
                            EventManager.prototype.add = function(listener) {
                                if (!this.listeners.includes(listener)) this.listeners.push(listener);
                            };
                            EventManager.prototype.remove = function(listener) {
                                for (var i = 0; i < this.listeners.length; i++) {
                                    var currentListener = this.listeners[i];
                                    if (currentListener.type === listener.type) if (currentListener.callback === listener.callback) {
                                        this.listeners.splice(i, 1);
                                        break;
                                    }
                                }
                            };
                            EventManager.prototype.removeAll = function(type) {
                                var _this = this;
                                if (!type) this.listeners.splice(0, this.listeners.length); else this.listeners.filter((function(l) {
                                    return l.type === type;
                                })).forEach((function(l) {
                                    return _this.remove(l);
                                }));
                            };
                            EventManager.prototype.fire = function(event) {
                                var eventListeners = this.getListeners(event.type);
                                eventListeners.forEach((function(listener) {
                                    return listener.callback(event);
                                }));
                            };
                            return EventManager;
                        }();
                        var TaskQueueManager = function() {
                            function TaskQueueManager(eventManager) {
                                this.eventManager = eventManager;
                                this.queue = [];
                            }
                            TaskQueueManager.prototype.add = function(task) {
                                this.queue.push(task);
                            };
                            TaskQueueManager.prototype.process = function() {
                                while (this.queue.length > 0) {
                                    var task = this.queue.shift();
                                    null === task || void 0 === task ? void 0 : task.action();
                                    if (null === task || void 0 === task ? void 0 : task.event) this.eventManager.fire(task.event);
                                }
                            };
                            return TaskQueueManager;
                        }();
                        var Rive = function() {
                            function Rive(params) {
                                var _a;
                                this._updateLayout = true;
                                this.isRendererActive = true;
                                this.loaded = false;
                                this.readyForPlaying = false;
                                this.artboard = null;
                                this.eventCleanup = null;
                                this.durations = [];
                                this.frameTimes = [];
                                this.frameCount = 0;
                                this.renderSecondTimer = 0;
                                this.canvas = params.canvas;
                                this.src = params.src;
                                this.buffer = params.buffer;
                                this.layout = null !== (_a = params.layout) && void 0 !== _a ? _a : new Layout;
                                this.eventManager = new EventManager;
                                if (params.onLoad) this.on(EventType.Load, params.onLoad);
                                if (params.onLoadError) this.on(EventType.LoadError, params.onLoadError);
                                if (params.onPlay) this.on(EventType.Play, params.onPlay);
                                if (params.onPause) this.on(EventType.Pause, params.onPause);
                                if (params.onStop) this.on(EventType.Stop, params.onStop);
                                if (params.onLoop) this.on(EventType.Loop, params.onLoop);
                                if (params.onStateChange) this.on(EventType.StateChange, params.onStateChange);
                                if (params.onload && !params.onLoad) this.on(EventType.Load, params.onload);
                                if (params.onloaderror && !params.onLoadError) this.on(EventType.LoadError, params.onloaderror);
                                if (params.onplay && !params.onPlay) this.on(EventType.Play, params.onplay);
                                if (params.onpause && !params.onPause) this.on(EventType.Pause, params.onpause);
                                if (params.onstop && !params.onStop) this.on(EventType.Stop, params.onstop);
                                if (params.onloop && !params.onLoop) this.on(EventType.Loop, params.onloop);
                                if (params.onstatechange && !params.onStateChange) this.on(EventType.StateChange, params.onstatechange);
                                this.taskQueue = new TaskQueueManager(this.eventManager);
                                this.init({
                                    src: this.src,
                                    buffer: this.buffer,
                                    autoplay: params.autoplay,
                                    animations: params.animations,
                                    stateMachines: params.stateMachines,
                                    artboard: params.artboard,
                                    useOffscreenRenderer: params.useOffscreenRenderer
                                });
                            }
                            Rive.new = function(params) {
                                console.warn("This function is deprecated: please use `new Rive({})` instead");
                                return new Rive(params);
                            };
                            Rive.prototype.init = function(_a) {
                                var _this = this;
                                var src = _a.src, buffer = _a.buffer, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = void 0 === _b ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = void 0 === _c ? false : _c;
                                this.src = src;
                                this.buffer = buffer;
                                if (!this.src && !this.buffer) throw new Error(Rive.missingErrorMessage);
                                var startingAnimationNames = mapToStringArray(animations);
                                var startingStateMachineNames = mapToStringArray(stateMachines);
                                this.loaded = false;
                                this.readyForPlaying = false;
                                RuntimeLoader.awaitInstance().then((function(runtime) {
                                    _this.runtime = runtime;
                                    _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                                    if (!(_this.canvas.width || _this.canvas.height)) _this.resizeDrawingSurfaceToCanvas();
                                    _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay).then((function() {
                                        var activeStateMachineInstances = (_this.animator.stateMachines || []).filter((function(sm) {
                                            return sm.playing;
                                        })).map((function(sm) {
                                            return sm.instance;
                                        }));
                                        _this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.registerTouchInteractions)({
                                            canvas: _this.canvas,
                                            artboard: _this.artboard,
                                            stateMachines: activeStateMachineInstances,
                                            renderer: _this.renderer,
                                            rive: _this.runtime,
                                            fit: _this._layout.runtimeFit(_this.runtime),
                                            alignment: _this._layout.runtimeAlignment(_this.runtime)
                                        });
                                    })).catch((function(e) {
                                        console.error(e);
                                    }));
                                })).catch((function(e) {
                                    console.error(e);
                                }));
                            };
                            Rive.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay) {
                                var _a;
                                return __awaiter(this, void 0, void 0, (function() {
                                    var _b, _c, msg;
                                    return __generator(this, (function(_d) {
                                        switch (_d.label) {
                                          case 0:
                                            if (!this.src) return [ 3, 2 ];
                                            _b = this;
                                            return [ 4, loadRiveFile(this.src) ];

                                          case 1:
                                            _b.buffer = _d.sent();
                                            _d.label = 2;

                                          case 2:
                                            _c = this;
                                            return [ 4, this.runtime.load(new Uint8Array(this.buffer)) ];

                                          case 3:
                                            _c.file = _d.sent();
                                            if (this.file) {
                                                this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                                                this.loaded = true;
                                                this.eventManager.fire({
                                                    type: EventType.Load,
                                                    data: null !== (_a = this.src) && void 0 !== _a ? _a : "buffer"
                                                });
                                                this.readyForPlaying = true;
                                                this.taskQueue.process();
                                                this.drawFrame();
                                                return [ 2, Promise.resolve() ];
                                            } else {
                                                msg = "Problem loading file; may be corrupt!";
                                                console.warn(msg);
                                                this.eventManager.fire({
                                                    type: EventType.LoadError,
                                                    data: msg
                                                });
                                                return [ 2, Promise.reject(msg) ];
                                            }
                                            return [ 2 ];
                                        }
                                    }));
                                }));
                            };
                            Rive.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay) {
                                var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                                if (!rootArtboard) {
                                    var msg = "Invalid artboard name or no default artboard";
                                    console.warn(msg);
                                    this.eventManager.fire({
                                        type: EventType.LoadError,
                                        data: msg
                                    });
                                    return;
                                }
                                this.artboard = rootArtboard;
                                if (this.artboard.animationCount() < 1) {
                                    msg = "Artboard has no animations";
                                    this.eventManager.fire({
                                        type: EventType.LoadError,
                                        data: msg
                                    });
                                    throw msg;
                                }
                                this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                                var instanceNames;
                                if (animationNames.length > 0 || stateMachineNames.length > 0) {
                                    instanceNames = animationNames.concat(stateMachineNames);
                                    this.animator.add(instanceNames, autoplay, false);
                                } else instanceNames = [ this.animator.atLeastOne(autoplay, false) ];
                                this.taskQueue.add({
                                    action: function() {},
                                    event: {
                                        type: autoplay ? EventType.Play : EventType.Pause,
                                        data: instanceNames
                                    }
                                });
                            };
                            Rive.prototype.drawFrame = function() {
                                this.startRendering();
                            };
                            Rive.prototype.draw = function(time, onSecond) {
                                var before = performance.now();
                                this.frameRequestId = null;
                                if (!this.lastRenderTime) this.lastRenderTime = time;
                                this.renderSecondTimer += time - this.lastRenderTime;
                                if (this.renderSecondTimer > 5e3) {
                                    this.renderSecondTimer = 0;
                                    null === onSecond || void 0 === onSecond ? void 0 : onSecond();
                                }
                                var elapsedTime = (time - this.lastRenderTime) / 1e3;
                                this.lastRenderTime = time;
                                var activeAnimations = this.animator.animations.filter((function(a) {
                                    return a.playing || a.needsScrub;
                                })).sort((function(first, second) {
                                    return first.needsScrub ? -1 : 1;
                                }));
                                for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
                                    var animation = activeAnimations_1[_i];
                                    animation.advance(elapsedTime);
                                    if (animation.instance.didLoop) animation.loopCount += 1;
                                    animation.apply(1);
                                }
                                var activeStateMachines = this.animator.stateMachines.filter((function(a) {
                                    return a.playing;
                                }));
                                for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
                                    var stateMachine = activeStateMachines_1[_a];
                                    stateMachine.advance(elapsedTime);
                                }
                                this.artboard.advance(elapsedTime);
                                var renderer = this.renderer;
                                renderer.clear();
                                renderer.save();
                                this.alignRenderer();
                                this.artboard.draw(renderer);
                                renderer.restore();
                                renderer.flush();
                                this.animator.handleLooping();
                                this.animator.handleStateChanges();
                                this.frameCount++;
                                var after = performance.now();
                                this.frameTimes.push(after);
                                this.durations.push(after - before);
                                while (this.frameTimes[0] <= after - 1e3) {
                                    this.frameTimes.shift();
                                    this.durations.shift();
                                }
                                if (this.animator.isPlaying) this.startRendering(); else if (this.animator.isPaused) this.lastRenderTime = 0; else if (this.animator.isStopped) this.lastRenderTime = 0;
                            };
                            Rive.prototype.alignRenderer = function() {
                                var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                                renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                                    minX: _layout.minX,
                                    minY: _layout.minY,
                                    maxX: _layout.maxX,
                                    maxY: _layout.maxY
                                }, artboard.bounds);
                            };
                            Object.defineProperty(Rive.prototype, "fps", {
                                get: function() {
                                    return this.durations.length;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "frameTime", {
                                get: function() {
                                    if (0 === this.durations.length) return 0;
                                    return (this.durations.reduce((function(a, b) {
                                        return a + b;
                                    }), 0) / this.durations.length).toFixed(4);
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Rive.prototype.cleanup = function() {
                                if (null !== this.eventCleanup) this.eventCleanup();
                                this.stop();
                                if (this.artboard) {
                                    this.artboard.delete();
                                    this.artboard = null;
                                }
                            };
                            Rive.prototype.play = function(animationNames, autoplay) {
                                var _this = this;
                                animationNames = mapToStringArray(animationNames);
                                if (!this.readyForPlaying) {
                                    this.taskQueue.add({
                                        action: function() {
                                            return _this.play(animationNames, autoplay);
                                        }
                                    });
                                    return;
                                }
                                this.animator.play(animationNames);
                                this.startRendering();
                            };
                            Rive.prototype.pause = function(animationNames) {
                                var _this = this;
                                animationNames = mapToStringArray(animationNames);
                                if (!this.readyForPlaying) {
                                    this.taskQueue.add({
                                        action: function() {
                                            return _this.pause(animationNames);
                                        }
                                    });
                                    return;
                                }
                                this.animator.pause(animationNames);
                            };
                            Rive.prototype.scrub = function(animationNames, value) {
                                var _this = this;
                                animationNames = mapToStringArray(animationNames);
                                if (!this.readyForPlaying) {
                                    this.taskQueue.add({
                                        action: function() {
                                            return _this.scrub(animationNames, value);
                                        }
                                    });
                                    return;
                                }
                                this.animator.scrub(animationNames, value || 0);
                                this.drawFrame();
                            };
                            Rive.prototype.stop = function(animationNames) {
                                var _this = this;
                                animationNames = mapToStringArray(animationNames);
                                if (!this.readyForPlaying) {
                                    this.taskQueue.add({
                                        action: function() {
                                            return _this.stop(animationNames);
                                        }
                                    });
                                    return;
                                }
                                this.animator.stop(animationNames);
                            };
                            Rive.prototype.reset = function(params) {
                                var _a;
                                var artBoardName = null === params || void 0 === params ? void 0 : params.artboard;
                                var animationNames = mapToStringArray(null === params || void 0 === params ? void 0 : params.animations);
                                var stateMachineNames = mapToStringArray(null === params || void 0 === params ? void 0 : params.stateMachines);
                                var autoplay = null !== (_a = null === params || void 0 === params ? void 0 : params.autoplay) && void 0 !== _a ? _a : false;
                                this.cleanup();
                                this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
                                this.taskQueue.process();
                            };
                            Rive.prototype.load = function(params) {
                                this.stop();
                                this.init(params);
                            };
                            Object.defineProperty(Rive.prototype, "layout", {
                                get: function() {
                                    return this._layout;
                                },
                                set: function(layout) {
                                    this._layout = layout;
                                    if (!layout.maxX || !layout.maxY) this.resizeToCanvas();
                                    if (this.loaded && !this.animator.isPlaying) this.drawFrame();
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Rive.prototype.resizeToCanvas = function() {
                                this._layout = this.layout.copyWith({
                                    minX: 0,
                                    minY: 0,
                                    maxX: this.canvas.width,
                                    maxY: this.canvas.height
                                });
                            };
                            Rive.prototype.resizeDrawingSurfaceToCanvas = function() {
                                if (this.canvas instanceof HTMLCanvasElement && !!window) {
                                    var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                                    var dpr = window.devicePixelRatio || 1;
                                    this.canvas.width = dpr * width;
                                    this.canvas.height = dpr * height;
                                    this.startRendering();
                                    this.resizeToCanvas();
                                }
                            };
                            Object.defineProperty(Rive.prototype, "source", {
                                get: function() {
                                    return this.src;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "activeArtboard", {
                                get: function() {
                                    return this.artboard ? this.artboard.name : "";
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "animationNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    var animationNames = [];
                                    for (var i = 0; i < this.artboard.animationCount(); i++) animationNames.push(this.artboard.animationByIndex(i).name);
                                    return animationNames;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "stateMachineNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    var stateMachineNames = [];
                                    for (var i = 0; i < this.artboard.stateMachineCount(); i++) stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                                    return stateMachineNames;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Rive.prototype.stateMachineInputs = function(name) {
                                if (!this.loaded) return;
                                var stateMachine = this.animator.stateMachines.find((function(m) {
                                    return m.name === name;
                                }));
                                return null === stateMachine || void 0 === stateMachine ? void 0 : stateMachine.inputs;
                            };
                            Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    return this.animator.stateMachines.filter((function(m) {
                                        return m.playing;
                                    })).map((function(m) {
                                        return m.name;
                                    }));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "playingAnimationNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    return this.animator.animations.filter((function(a) {
                                        return a.playing;
                                    })).map((function(a) {
                                        return a.name;
                                    }));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    return this.animator.animations.filter((function(a) {
                                        return !a.playing;
                                    })).map((function(a) {
                                        return a.name;
                                    }));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
                                get: function() {
                                    if (!this.loaded) return [];
                                    return this.animator.stateMachines.filter((function(m) {
                                        return !m.playing;
                                    })).map((function(m) {
                                        return m.name;
                                    }));
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "isPlaying", {
                                get: function() {
                                    return this.animator.isPlaying;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "isPaused", {
                                get: function() {
                                    return this.animator.isPaused;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "isStopped", {
                                get: function() {
                                    return this.animator.isStopped;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Object.defineProperty(Rive.prototype, "bounds", {
                                get: function() {
                                    return this.artboard ? this.artboard.bounds : void 0;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Rive.prototype.on = function(type, callback) {
                                this.eventManager.add({
                                    type,
                                    callback
                                });
                            };
                            Rive.prototype.unsubscribe = function(type, callback) {
                                this.eventManager.remove({
                                    type,
                                    callback
                                });
                            };
                            Rive.prototype.unsubscribeAll = function(type) {
                                this.eventManager.removeAll(type);
                            };
                            Rive.prototype.stopRendering = function() {
                                if (this.loaded && this.frameRequestId) {
                                    if (this.runtime.cancelAnimationFrame) this.runtime.cancelAnimationFrame(this.frameRequestId); else cancelAnimationFrame(this.frameRequestId);
                                    this.frameRequestId = null;
                                }
                            };
                            Rive.prototype.startRendering = function() {
                                if (this.loaded && this.artboard && !this.frameRequestId) if (this.runtime.requestAnimationFrame) this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this)); else this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
                            };
                            Rive.prototype.enableFPSCounter = function(fpsCallback) {
                                this.runtime.enableFPSCounter(fpsCallback);
                            };
                            Rive.prototype.disableFPSCounter = function() {
                                this.runtime.disableFPSCounter();
                            };
                            Object.defineProperty(Rive.prototype, "contents", {
                                get: function() {
                                    if (!this.loaded) return;
                                    var riveContents = {
                                        artboards: []
                                    };
                                    for (var i = 0; i < this.file.artboardCount(); i++) {
                                        var artboard = this.file.artboardByIndex(i);
                                        var artboardContents = {
                                            name: artboard.name,
                                            animations: [],
                                            stateMachines: []
                                        };
                                        for (var j = 0; j < artboard.animationCount(); j++) {
                                            var animation = artboard.animationByIndex(j);
                                            artboardContents.animations.push(animation.name);
                                        }
                                        for (var k = 0; k < artboard.stateMachineCount(); k++) {
                                            var stateMachine = artboard.stateMachineByIndex(k);
                                            var name_1 = stateMachine.name;
                                            var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                                            var inputContents = [];
                                            for (var l = 0; l < instance.inputCount(); l++) {
                                                var input = instance.input(l);
                                                inputContents.push({
                                                    name: input.name,
                                                    type: input.type
                                                });
                                            }
                                            artboardContents.stateMachines.push({
                                                name: name_1,
                                                inputs: inputContents
                                            });
                                        }
                                        riveContents.artboards.push(artboardContents);
                                    }
                                    return riveContents;
                                },
                                enumerable: false,
                                configurable: true
                            });
                            Rive.missingErrorMessage = "Rive source file or data buffer required";
                            return Rive;
                        }();
                        var loadRiveFile = function(src) {
                            return __awaiter(void 0, void 0, void 0, (function() {
                                var req, res, buffer;
                                return __generator(this, (function(_a) {
                                    switch (_a.label) {
                                      case 0:
                                        req = new Request(src);
                                        return [ 4, fetch(req) ];

                                      case 1:
                                        res = _a.sent();
                                        return [ 4, res.arrayBuffer() ];

                                      case 2:
                                        buffer = _a.sent();
                                        return [ 2, buffer ];
                                    }
                                }));
                            }));
                        };
                        var mapToStringArray = function(obj) {
                            if ("string" === typeof obj) return [ obj ]; else if (obj instanceof Array) return obj;
                            return [];
                        };
                        var Testing = {
                            EventManager,
                            TaskQueueManager
                        };
                    })();
                    return __webpack_exports__;
                })();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                    document.querySelector(".loader").classList.add("loader_hide");
                }), 500);
                setTimeout((function() {
                    document.querySelector(".loader").remove();
                }), 1e3);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var rive = __webpack_require__(665);
        class GradientAnimation {
            constructor() {
                this.cnv1 = document.querySelector("#canvas1");
                this.cnv2 = document.querySelector("#canvas2");
                this.cnv3 = document.querySelector("#canvas3");
                this.ctx1 = this.cnv1.getContext(`2d`);
                this.ctx2 = this.cnv2.getContext(`2d`);
                this.ctx3 = this.cnv3.getContext(`2d`);
                this.circlesNum = 1;
                this.speed = .02;
                this.largeRadius = 35;
                this.smallRadiys = 25;
                this.setCanvasSize(this.cnv1);
                this.setCanvasSize(this.cnv2);
                this.setCanvasSize(this.cnv3);
                this.createCircles();
                this.drawAnimation();
                window.onresize = () => {
                    this.createCircles();
                };
            }
            setCanvasSize(cnv) {
                this.width = cnv.width = innerWidth;
                this.height = cnv.height = innerHeight + 100;
            }
            createCircles() {
                this.circles = [];
                this.circles.push(new Circle(this.width, 1 * this.height + 600, this.cnv1, this.largeRadius));
                this.circles.push(new Circle(this.width, 2 * this.height + 600, this.cnv2, this.largeRadius));
                this.circles.push(new Circle(this.width, 3 * this.height + 600, this.cnv3, this.smallRadiys));
            }
            drawCircles() {
                this.circles[0].draw(this.ctx1, this.cnv1, this.speed, this.largeRadius);
                this.circles[1].draw(this.ctx2, this.cnv2, this.speed, this.largeRadius);
                this.circles[2].draw(this.ctx3, this.cnv3, this.speed, this.smallRadiys);
            }
            clearCanvas() {
                this.ctx1.clearRect(0, 0, this.width, this.height);
                this.ctx2.clearRect(0, 0, this.width, this.height);
                this.ctx3.clearRect(0, 0, this.width, this.height);
            }
            drawAnimation() {
                this.clearCanvas();
                this.drawCircles();
                window.requestAnimationFrame((() => this.drawAnimation()));
            }
        }
        class Circle {
            constructor(width, height, cnv, radius) {
                this.x = width / 2;
                this.y = height / 2;
                this.radius = radius;
                this.angle = .1 * Math.PI * Math.random() * 20;
            }
            draw(ctx, cnv, speed) {
                let canvas = cnv;
                this.angle += speed;
                this.setSin = function(canvas) {
                    if (Math.sin(this.angle) > 0) return canvas.style.zIndex = 5;
                    if (Math.sin(this.angle) < 0) return canvas.style.zIndex = 1;
                };
                this.setSin(canvas);
                this.size = function() {
                    if (Math.sin(this.angle) > 0) {
                        this.radius += Math.sin(this.angle) / 4;
                        return this.radius;
                    } else if (Math.sin(this.angle) < 0) {
                        this.radius += Math.sin(this.angle) / 4;
                        return this.radius;
                    }
                };
                this.size();
                const x = this.x / 2 + 300 * Math.cos(this.angle);
                const y = this.y / 2 + 50 * Math.sin(this.angle);
                this.setGrad = function(ctx) {
                    let grad = ctx.createRadialGradient(this.radius / 3 + x, -this.radius / 3 + y, 0, 0 + x, 0 + y, 2 * this.radius);
                    grad.addColorStop(.0089, "rgba(222, 249, 250, 1)");
                    grad.addColorStop(.1723, "rgba(190, 243, 245, 1)");
                    grad.addColorStop(.4204, "rgba(157, 237, 240, 1)");
                    grad.addColorStop(.5512, "rgba(125, 231, 235, 1)");
                    grad.addColorStop(.7154, "rgba(92, 225, 230, 1)");
                    grad.addColorStop(1, "rgba(51, 187, 207, 1)");
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
                    ctx.fill();
                };
                this.setGrad(ctx);
            }
        }
        window.onload = () => new GradientAnimation;
        new rive.Rive({
            src: "img/get-started/hoobank.riv",
            canvas: document.getElementById("canvas"),
            autoplay: true
        });
        window["FLS"] = true;
        isWebp();
        addLoadedClass();
        menuInit();
        spollers();
        headerScroll();
    })();
})();