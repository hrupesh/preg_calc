if (!self.define) {
    const s = s => {
            "require" !== s && (s += ".js");
            let e = Promise.resolve();
            return i[s] || (e = new Promise(async e => {
                if ("document" in self) {
                    const i = document.createElement("script");
                    i.src = s, document.head.appendChild(i), i.onload = e
                } else importScripts(s), e()
            })), e.then(() => {
                if (!i[s]) throw new Error(`Module ${s} didn’t register its module`);
                return i[s]
            })
        },
        e = (e, i) => {
            Promise.all(e.map(s)).then(s => i(1 === s.length ? s[0] : s))
        },
        i = {
            require: Promise.resolve(e)
        };
    self.define = (e, c, a) => {
        i[e] || (i[e] = Promise.resolve().then(() => {
            let i = {};
            const r = {
                uri: location.origin + e.slice(1)
            };
            return Promise.all(c.map(e => {
                switch (e) {
                    case "exports":
                        return i;
                    case "module":
                        return r;
                    default:
                        return s(e)
                }
            })).then(s => {
                const e = a(...s);
                return i.default || (i.default = e), i
            })
        }))
    }
}
define("./sw.js", ["./workbox-3f784fd8"], (function (s) {
    "use strict";
    self.addEventListener("message", s => {
        s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting()
    }), s.precacheAndRoute([{
        url: "assets/app.js",
        revision: "cdc4471e6ec320d0e7dc09e9fa9359d2"
    }, {
        url: "assets/bird_with_baby.gif",
        revision: "8185a8b0e1e554882e9d6bcc2b3d9d63"
    }, {
        url: "assets/css/bootstrap.min.css",
        revision: "1f49d95af936665ddd507c188c4e58dd"
    }, {
        url: "assets/css/images/ui-bg_flat_0_888888_40x100.png",
        revision: "708280b72e6fa4c6e1ccb0a20be990bc"
    }, {
        url: "assets/css/images/ui-bg_flat_0_aaaaaa_40x100.png",
        revision: "2a44fbdb7360c60122bcf6dcef0387d8"
    }, {
        url: "assets/css/images/ui-bg_flat_75_ffffff_40x100.png",
        revision: "8692e6efddf882acbff144c38ea7dfdf"
    }, {
        url: "assets/css/images/ui-bg_glass_25_e1f0f5_1x400.png",
        revision: "154b8def7ec87931678dc6a82dc7ad12"
    }, {
        url: "assets/css/images/ui-bg_glass_55_444444_1x400.png",
        revision: "6209a4d10f445e1ac444b34ba0e493f1"
    }, {
        url: "assets/css/images/ui-bg_glass_55_fbf9ee_1x400.png",
        revision: "f8f4558e0b92ff2cd6136781533902ec"
    }, {
        url: "assets/css/images/ui-bg_glass_65_ffffff_1x400.png",
        revision: "e5a8f32e28fd5c27bf0fed33c8a8b9b5"
    }, {
        url: "assets/css/images/ui-bg_glass_75_dadada_1x400.png",
        revision: "c12c6510dad3ebfa64c8a30e959a2469"
    }, {
        url: "assets/css/images/ui-bg_glass_75_e6e6e6_1x400 (1).png",
        revision: "f4254356c2a8c9a383205ef2c4de22c4"
    }, {
        url: "assets/css/images/ui-bg_glass_75_e6e6e6_1x400.png",
        revision: "f4254356c2a8c9a383205ef2c4de22c4"
    }, {
        url: "assets/css/images/ui-bg_highlight-soft_75_cccccc_1x100.png",
        revision: "72c593d16e998952cd8d798fee33c6f3"
    }, {
        url: "assets/css/images/ui-bg_inset-soft_95_fef1ec_1x100.png",
        revision: "61cef242cc2b5e1118607c302b87cbc9"
    }, {
        url: "assets/css/images/ui-icons_222222_256x240.png",
        revision: "ebe6b6902a408fbf9cac6379a1477525"
    }, {
        url: "assets/css/images/ui-icons_309bbf_256x240.png",
        revision: "389b69679dde6b203496bc8a34e0fbbd"
    }, {
        url: "assets/css/images/ui-icons_454545_256x240.png",
        revision: "119dd0c2e94ad689de873ef39fd43e6e"
    }, {
        url: "assets/css/images/ui-icons_bf3030_256x240.png",
        revision: "ce65aa14616a5fc507b867ca698928ec"
    }, {
        url: "assets/css/images/ui-icons_ffffff_256x240.png",
        revision: "342bc03f6264c75d3f1d7f99e34295b9"
    }, {
        url: "assets/css/jquery-ui.css",
        revision: "e06bac1e77c602a5d126ebefe578d519"
    }, {
        url: "assets/css/nunito.css",
        revision: "4e183d25bcd7aa83c3355ba15671bec5"
    }, {
        url: "assets/icon-512.png",
        revision: "8688f46767d7e2b8f819c750d9fd7b4b"
    }, {
        url: "assets/js/jquery-ui.min.js",
        revision: "7380838451f2547c6d1c64b8571444b0"
    }, {
        url: "assets/js/jquery.min.js",
        revision: "6c88233a58927c87d3ab0ab6a199d21d"
    }, {
        url: "assets/js/moment.js",
        revision: "6d62bc178d143c4341d6c2c60910d741"
    }, {
        url: "assets/main.css",
        revision: "2211f2e5638cd728bb74518670c4a06a"
    }, {
        url: "assets/main.scss",
        revision: "0e4e2080a77a7a23341334027eb26bb2"
    }, {
        url: "index.html",
        revision: "6defb21cf320074510ec57cf096ab5f3"
    }, {
        url: "manifest.json",
        revision: "de77c0361533f7cf12c5d2a7887a4b94"
    }, {
        url: "package-lock.json",
        revision: "38a6fee559e25502203be1ecd944f3b4"
    }, {
        url: "package.json",
        revision: "161455641c1348bfdc2f61c4c654a05d"
    }, {
        url: "README.md",
        revision: "4dc4544488bb16f9efaf757ece3b211b"
    }], {})
}));
//# sourceMappingURL=sw.js.map