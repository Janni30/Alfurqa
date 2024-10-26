exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 4224:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__8gXeZ",
	"footerContainer": "Footer_footerContainer__QKoYs",
	"footerSection": "Footer_footerSection__dZUJg",
	"footerLogo": "Footer_footerLogo__2lnie",
	"logoImage": "Footer_logoImage__Yo4kf",
	"sectionHeading": "Footer_sectionHeading__Srben",
	"list": "Footer_list__FMq5D",
	"listItem": "Footer_listItem__i0RL_",
	"socialIcons": "Footer_socialIcons__aaGQz",
	"socialIcon": "Footer_socialIcon__qAj4r",
	"footerBottom": "Footer_footerBottom__BOBZF",
	"whiteBorder": "Footer_whiteBorder__7KyNQ",
	"buttonWrapper": "Footer_buttonWrapper__hu_kD",
	"loginButton": "Footer_loginButton__i9Z0G",
	"loginPopup": "Footer_loginPopup__muDL7",
	"loginPopupContent": "Footer_loginPopupContent__QO6GM"
};


/***/ }),

/***/ 8083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);



const ImgViews = ({ close , src  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imgValue, setImgValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageView);


/***/ }),

/***/ 7172:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _studio_freight_react_lenis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_react_lenis__WEBPACK_IMPORTED_MODULE_1__]);
_studio_freight_react_lenis__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";


function SmoothScrolling({ children  }) {
    return /*#__PURE__*/ _jsx(ReactLenis, {
        root: true,
        options: {
            lerp: 0.1,
            duration: 1.5,
            smoothTouch: true
        },
        children: children
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SmoothScrolling)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        width: 960,
                                        height: 720,
                                        src: "https://www.youtube.com/embed/BS4TUd7FJSg",
                                        title: "Fantastic surfing the Best. Very nice video.",
                                        frameBorder: 0,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        allowFullScreen: ""
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [videoValue, setVideoValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://youtu.be")) {
                    console.log("hi");
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPopup);


/***/ }),

/***/ 6606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8083);
/* harmony import */ var _components_VideoPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9961);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8603);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9357);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var _header_MobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(507);
/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1411);
/* harmony import */ var _components_SmoothScrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SmoothScrolling__WEBPACK_IMPORTED_MODULE_8__]);
_components_SmoothScrolling__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Layout = ({ children , header , footer  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .animation */ .oQ)();
        (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .stickyNav */ .h4)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPopup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                header: header
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_MobileMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                footer: footer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollTop__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8603);



const ScrollTop = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .scrollTopFun */ .h1)();
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "scroll-area",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "top-wrap",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "go-top-btn-wraper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "go-top go-top-button",
                    onClick: ()=>scrollTop(),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-arrow-up"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-arrow-up"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);


/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/layout/footer/Footer.module.css
var Footer_module = __webpack_require__(4224);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/layout/footer/DefaultFooter.js



 // Import the CSS module
const Footer = ()=>{
    const [isLoginOpen, setIsLoginOpen] = (0,external_react_.useState)(false);
    const toggleLoginPopup = ()=>{
        setIsLoginOpen(!isLoginOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footerContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footerSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_module_default()).sectionHeading,
                                children: "EXPLORE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Footer_module_default()).list,
                                children: [
                                    "About",
                                    "Blog",
                                    "Teachers",
                                    "Career",
                                    "Testimonials",
                                    "Contact Us",
                                    "FAQs"
                                ].map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (Footer_module_default()).listItem,
                                        children: item
                                    }, item))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footerSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_module_default()).sectionHeading,
                                children: "COURSES"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Footer_module_default()).list,
                                children: [
                                    "Tajweed Course",
                                    "Online Quran",
                                    "Memorization",
                                    "Arabic"
                                ].map((course)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (Footer_module_default()).listItem,
                                        children: course
                                    }, course))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            title: "AlFurqan Academy",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/img/logo-white.png",
                                alt: "logo",
                                className: (Footer_module_default()).logoImage
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footerSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_module_default()).sectionHeading,
                                children: "CONTACT US"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "Help Center:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "UK +44 20 4577 1227"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "USA +1 85 5442 3380"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "Email:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "contact@alfurqan.academy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footerSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_module_default()).sectionHeading,
                                children: "FOLLOW US"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_module_default()).socialIcons,
                                children: [
                                    "facebook",
                                    "instagram",
                                    "twitter",
                                    "linkedin",
                                    "youtube"
                                ].map((platform)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: `fab fa-${platform} ${(Footer_module_default()).socialIcon}`
                                    }, platform))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).buttonWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `btn btn-primary ${(Footer_module_default()).loginButton}`,
                    onClick: toggleLoginPopup,
                    children: "Open Login"
                })
            }),
            isLoginOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).loginPopup,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).loginPopupContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Login"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Email:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            className: "form-control",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Password:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "password",
                                            className: "form-control",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-actions",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "btn btn-success",
                                            children: "Login"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "btn btn-danger",
                                            onClick: toggleLoginPopup,
                                            children: "Cancel"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).footerBottom,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Footer_module_default()).whiteBorder,
                    children: "\xa9 AlFurqanAcademy Network Inc. | Privacy Policy | Terms of Service"
                })
            })
        ]
    });
};
/* harmony default export */ const DefaultFooter = (Footer);

;// CONCATENATED MODULE: ./src/layout/footer/Footer1.js


const Footer1 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "footer-middle",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "subscribe-area",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "row ",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-6 col-md-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "subscribe-title",
                                            children: /*#__PURE__*/ _jsx("h1", {
                                                children: "Subscribe to our Newsletter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "col-lg-6 col-md-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                action: "https://formspree.io/f/myyleorq",
                                                method: "POST",
                                                id: "dreamit-form",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "subscribe_form",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "email",
                                                                id: "email",
                                                                className: "form-control",
                                                                required: "",
                                                                "data-error": "Please enter your email",
                                                                placeholder: "Enter Your Email"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "submit",
                                                                className: "btn",
                                                                children: "Subscribe"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "subscribe_form_send"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                id: "status"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "subscribe-shape",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "subscribe-thumb bounce-animate5",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/small-dot.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "subscribe-thumb1",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/big-dot.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "footer-bg",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-4 col-sm-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widgets-company-info mb-4 mb-lg-0",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "company-info-desc pr-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "widget-title",
                                                            children: " About Us "
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: "Busines Consulting is optimize standing manufactured products and installation synergy. Professionally predominat why professional business"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "follow-company-icon",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-facebook"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color2",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-instagram",
                                                                    children: " "
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color1",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-twitter"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color3",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-youtube"
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-2 col-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widget-nav-menu",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: "Company"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "menu-quick-link-content",
                                                    children: /*#__PURE__*/ _jsxs("ul", {
                                                        className: "footer-menu",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Home "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Pricing "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Career "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: "  Contact "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-3 col-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widget-nav-menu",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: " Services "
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "menu-quick-link-content",
                                                    children: /*#__PURE__*/ _jsxs("ul", {
                                                        className: "footer-menu",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Strategy & Planing "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Consumer Market "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Data Analysis "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Corporate Finance "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Market Research "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-3 col-sm-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "em-recent-post-widget",
                                            className: "mt-5 mt-sm-0",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "single-widget-item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "widget-title",
                                                        children: "Popular Posts"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "recent-post-item active",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "recent-post-image",
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        width: 80,
                                                                        height: 80,
                                                                        src: "assets/images/resource/footer1.png",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "recent-post-text",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h6", {
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            href: "#",
                                                                            children: "How To Plugin Install WP server?"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "rcomment",
                                                                        children: "Dec 12, 2023"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "recent-post-item",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "recent-post-image",
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        width: 80,
                                                                        height: 80,
                                                                        src: "assets/images/resource/footer2.png",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "recent-post-text",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h6", {
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            href: "#",
                                                                            children: "Top 10 Most Usefull Google Extansion"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "rcomment",
                                                                        children: "Dec 15, 2023"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "foorer-shape",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "footer-thumb",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/red-dot.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "footer-thumb1 bounce-animate2",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/all-shape.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-bottom-area d-flex align-items-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "consen-logo",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        legacyBehavior: true,
                                        href: "/",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            className: "logo_thumb",
                                            title: "consen",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "assets/images/logo.png",
                                                alt: "logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-8",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-content",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "footer-bottom-content-copy",
                                        children: /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                "\xa9 2023 ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "Consen"
                                                }),
                                                " all rights reserved. Design By Dream-IT."
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer1 = ((/* unused pure expression or super */ null && (Footer1)));

;// CONCATENATED MODULE: ./src/layout/footer/Footer3.js

const Footer3 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "footer-middle new-style",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "footer-bg",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widgets-company-info mb-4 mb-lg-0",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "footer-new-logo",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "assets/images/logo.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "company-info-desc",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                children: "Energistically repurpose standards services into whereas productivate Rapidiously morph best"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "follow-company-icon",
                                            children: [
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-facebook"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color2",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-instagram",
                                                            children: " "
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color1",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-twitter"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color3",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-youtube"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widget-nav-menu one",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title",
                                            children: "Explor"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "menu-quick-link-content",
                                            children: /*#__PURE__*/ _jsxs("ul", {
                                                className: "footer-menu",
                                                children: [
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " About Us "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Our Service"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Portfolio "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Contact Us "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Career "
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widget-nav-menu",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title",
                                            children: " Userful Links "
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "menu-quick-link-content",
                                            children: /*#__PURE__*/ _jsxs("ul", {
                                                className: "footer-menu",
                                                children: [
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Partners "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Testimonials "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Word Process "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Insights "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " FAQ "
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    id: "em-recent-post-widget",
                                    className: "mt-5 mt-sm-0",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "single-widget-item",
                                            children: /*#__PURE__*/ _jsx("h4", {
                                                className: "widget-title",
                                                children: "Get In Touch"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "widget-location",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    children: "Contacts"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "+880 392 (4560) 290"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "example@gmail.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "widget-location",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    children: "Locations"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "602/B, Uttara, Sandigo-USA"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-bottom-area d-flex align-items-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-7",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-content",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "footer-bottom-content-copy",
                                        children: /*#__PURE__*/ _jsx("p", {
                                            children: "Copyright \xa9 Consen all rights reserved."
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-menu",
                                    children: /*#__PURE__*/ _jsxs("ul", {
                                        children: [
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Privacy Policy "
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Services"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer3 = ((/* unused pure expression or super */ null && (Footer3)));

;// CONCATENATED MODULE: ./src/layout/footer/Footer.js




const Footer_Footer = ({ footer  })=>{
    switch(footer){
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
    }
};
/* harmony default export */ const footer_Footer = (Footer_Footer);


/***/ }),

/***/ 4563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layout/header/Menus.js



const Menus_DaskTopMenusMenus = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = (0,external_react_.useState)(false);
    const handleMouseEnter = ()=>{
        setIsDropdownOpen(true);
    };
    const handleMouseLeave = ()=>{
        setIsDropdownOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "nav_scroll text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Search..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-search"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/course",
                    children: "Courses"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: "/pricing",
                    children: "Pricing"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: [
                            "Discover",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-angle-down"
                                })
                            })
                        ]
                    }),
                    isDropdownOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "about",
                                    children: "About us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "Teachers"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "Testimonials"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "Career"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/contact",
                                    children: "Contact Us"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layout/header/DefaultHeader.js



const DefaultHeader = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        id: "sticky-header",
        className: "consen_nav_manu header____",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "logo",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "logo_img",
                                        title: "Al",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/logo.png",
                                            alt: "logo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "main_sticky",
                                        title: "consen",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/logo.png",
                                            alt: "logo",
                                            width: 180
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-9 pl-0 pr-0",
                        children: /*#__PURE__*/ _jsxs("nav", {
                            className: "consen_menu",
                            children: [
                                /*#__PURE__*/ _jsx(DaskTopMenusMenus, {}),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "header-button",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        legacyBehavior: true,
                                        href: "/contact",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            children: "Students Trial"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_DefaultHeader = ((/* unused pure expression or super */ null && (DefaultHeader)));

;// CONCATENATED MODULE: ./src/layout/header/Header2.js




const Header2 = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header_top_menu d-flex align-items-center mt-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row d-flex align-items-cente",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 col-sm-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header_top_menu_address"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-sm-4 pr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header_top_menu_icon text-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "FOLLOW US"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header_top_menu_icon_inner",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-dribbble"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "sticky-header",
                className: "consen_nav_manu style-two header____",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row header-bg align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "logo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "logo_img",
                                                title: "consen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: "logo",
                                                    width: 200
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main_sticky",
                                                title: "consen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: "logo",
                                                    width: 200
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-9 pl-0 pr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "consen_menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Menus_DaskTopMenusMenus, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "",
                                                children: "Book Free Sessions"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `xs-sidebar-group info-group ${toggle ? "isActive" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "xs-overlay xs-bg-black",
                        onClick: ()=>setToggle(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "xs-sidebar-widget",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sidebar-widget-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "widget-heading",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "close-side-widget",
                                        onClick: ()=>setToggle(false),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-times-circle"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sidebar-textwidget",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sidebar-info-contents",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content-inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "nav-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo.png",
                                                            alt: "logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "About Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text",
                                                            children: "The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            className: "theme-btn btn-style-two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Consultation"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-heart"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "contact-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "Contact Info"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "list-style-one",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon flaticon-email"
                                                                        }),
                                                                        "Chicago 12, Melborne City, USA"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "bi bi-telephone-inbound"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        "(+001) 123-456-7890"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-geo-alt"
                                                                            })
                                                                        }),
                                                                        "Example @gmail.com"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-clock"
                                                                            })
                                                                        }),
                                                                        "Week Days: 09.00 to 18.00 Sunday: Closed"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "linkedin",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "youtube",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layout/header/Header.js



const Header = ({ header  })=>{
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {});
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(LandingHeader, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {});
    }
};
/* harmony default export */ const header_Header = (Header);


/***/ }),

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MobileToggleMenu */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const MobileToggleMenu = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // For Discover dropdown
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // For mobile menu toggle
    const handleMouseEnter = ()=>{
        setIsDropdownOpen(true);
    };
    const handleMouseLeave = ()=>{
        setIsDropdownOpen(false);
    };
    const handleMenuToggle = ()=>{
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-de56f8de7c92256a" + " " + "mobile-menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: handleMenuToggle,
                className: "jsx-de56f8de7c92256a" + " " + "menu-toggle",
                children: isMenuOpen ? "X" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "jsx-de56f8de7c92256a" + " " + "menu-bars",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-de56f8de7c92256a"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-de56f8de7c92256a"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-de56f8de7c92256a"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                style: {
                    display: isMenuOpen ? "block" : "none"
                },
                className: "jsx-de56f8de7c92256a" + " " + "nav_scroll text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-de56f8de7c92256a" + " " + "logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            legacyBehavior: true,
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                title: "Al",
                                className: "jsx-de56f8de7c92256a" + " " + "logo_img",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "assets/images/logo.png",
                                    alt: "logo",
                                    height: 50,
                                    className: "jsx-de56f8de7c92256a"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-de56f8de7c92256a" + " " + "search-bar",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "jsx-de56f8de7c92256a",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: "Search...",
                                    style: {
                                        height: "20px"
                                    },
                                    className: "jsx-de56f8de7c92256a"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "jsx-de56f8de7c92256a",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "jsx-de56f8de7c92256a" + " " + "fas fa-search"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "jsx-de56f8de7c92256a" + " " + "menu-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            className: "jsx-de56f8de7c92256a",
                            children: "Courses"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "jsx-de56f8de7c92256a" + " " + "menu-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            legacyBehavior: true,
                            href: "/pricing",
                            children: "Pricing"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        className: "jsx-de56f8de7c92256a" + " " + "menu-item dropdown",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "#",
                                className: "jsx-de56f8de7c92256a",
                                children: [
                                    "Discover",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "jsx-de56f8de7c92256a" + " " + "fas fa-angle-down"
                                        })
                                    })
                                ]
                            }),
                            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "jsx-de56f8de7c92256a" + " " + "dropdown-menu",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "Teachers"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "Testimonials"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "Career"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "FAQ"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-de56f8de7c92256a",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "jsx-de56f8de7c92256a",
                                            children: "Contact Us"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "de56f8de7c92256a",
                children: '.menu-toggle.jsx-de56f8de7c92256a{cursor:pointer;font-size:24px;display:none}.menu-item.jsx-de56f8de7c92256a{border:1px solid#ccc;-webkit-border-radius:0px;-moz-border-radius:0px;border-radius:0px;padding:10px 20px;margin:5px 0;width:auto;background-color:#f8f8f8;-webkit-transition:background-color.3s ease,box-shadow.3s ease;-moz-transition:background-color.3s ease,box-shadow.3s ease;-o-transition:background-color.3s ease,box-shadow.3s ease;transition:background-color.3s ease,box-shadow.3s ease}.menu-item.jsx-de56f8de7c92256a a.jsx-de56f8de7c92256a{text-decoration:none;color:#333;font-weight:500;font-size:16px}.menu-item.jsx-de56f8de7c92256a:hover{background-color:#eaeaea;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.1);-moz-box-shadow:0 4px 8px rgba(0,0,0,.1);box-shadow:0 4px 8px rgba(0,0,0,.1)}.menu-item.jsx-de56f8de7c92256a a.jsx-de56f8de7c92256a:hover{color:#007bff}.menu-bars.jsx-de56f8de7c92256a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.menu-bars.jsx-de56f8de7c92256a span.jsx-de56f8de7c92256a{width:30px;height:3px;background-color:#333}@media(max-width:767px){.menu-toggle.jsx-de56f8de7c92256a{display:block}.nav_scroll.jsx-de56f8de7c92256a{display:none}.nav_scroll.text-center[style*="block"].jsx-de56f8de7c92256a{display:block!important}}@media(min-width:768px){.menu-toggle.jsx-de56f8de7c92256a{display:none}.nav_scroll.jsx-de56f8de7c92256a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}.dropdown-menu.jsx-de56f8de7c92256a{display:none;position:absolute;background-color:#fff;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.1);-moz-box-shadow:0 4px 8px rgba(0,0,0,.1);box-shadow:0 4px 8px rgba(0,0,0,.1);padding:10px;list-style:none}.dropdown.jsx-de56f8de7c92256a:hover .dropdown-menu.jsx-de56f8de7c92256a{display:block}.dropdown-menu.jsx-de56f8de7c92256a li.jsx-de56f8de7c92256a{padding:5px 10px}.dropdown-menu.jsx-de56f8de7c92256a li.jsx-de56f8de7c92256a a.jsx-de56f8de7c92256a{color:#333}.dropdown-menu.jsx-de56f8de7c92256a li.jsx-de56f8de7c92256a a.jsx-de56f8de7c92256a:hover{color:#007bff}'
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileToggleMenu);


/***/ }),

/***/ 348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let useClickOutside = (handler)=>{
    let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickOutside);


/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JV": () => (/* binding */ calender),
/* harmony export */   "h1": () => (/* binding */ scrollTopFun),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".header____");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("sticky");
                } else {
                    stick.classList.remove("sticky");
                }
            }
        }
    });
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
const scrollTopFun = ()=>{
    let scrollUp = document.querySelector(".go-top-button"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.classList.add("active");
        } else {
            scrollUp.classList.remove("active");
        }
    });
};
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const calender = ()=>{
    var curDate = new Date().getDate();
    var curMonth = new Date().getMonth();
    var curYear = new Date().getFullYear();
    var startDay = new Date(curYear, curMonth, 1).getDay();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var noofdays = [
        "31",
        "29",
        "31",
        "30",
        "31",
        "30",
        "31",
        "31",
        "30",
        "31",
        "30",
        "31"
    ];
    var prevMonth = noofdays[curMonth - 1];
    if (curMonth == 11) {
        prevMonth = noofdays[0];
    } else if (curMonth == 0) {
        prevMonth = noofdays[11];
    }
    var totalDays = noofdays[curMonth];
    var counter = 0;
    var precounter = prevMonth - (startDay - 1);
    var rightbox = 6;
    var flag = true;
    if (document.querySelector(".curr-month")) {
        document.querySelector(".curr-month b").innerHTML = months[curMonth];
        if (!document.querySelector(".all-date ul li")) {
            for(var i = 0; i < 42; i++){
                if (i >= startDay) {
                    counter++;
                    if (counter > totalDays) {
                        counter = 1;
                        flag = false;
                    }
                    if (flag === true) {
                        document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li class="monthdate">' + counter + "</li>");
                    } else {
                        document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li style="opacity:.8">' + counter + "</li>");
                    }
                } else {
                    document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li style="opacity:.8">' + precounter + "</li>");
                    precounter++;
                }
                if (i == rightbox) {
                    console.log(document.querySelectorAll(".all-date ul li")[rightbox]);
                    document.querySelectorAll(".all-date ul li")[rightbox].classList.add("b-right");
                    rightbox = rightbox + 7;
                }
                if (i > 34) {
                    document.querySelectorAll(".all-date ul li")[i].classList.add("b-bottom");
                }
                if (curDate) {
                    setTimeout(()=>{
                        document.querySelectorAll(".all-date ul li")[curDate + 2].classList.add("current_date");
                    }, 500);
                }
            }
        }
    }
};


/***/ })

};
;