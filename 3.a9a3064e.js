/*! For license information please see 3.a9a3064e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(100),c=n(82),i=n(88),l=n(8),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},m=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,r=(n=void 0===n?{}:n).disableSwitch,o=void 0!==r&&r,i=Object(a.useState)(f),l=i[0],h=i[1],v=Object(a.useCallback)((function(){h(s),m(s)}),[]),b=Object(a.useCallback)((function(){h(u),m(u)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(a.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(a.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=n(570);var b=function(e){var t=h(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},p=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},g=function(){var e=Object(c.a)().siteConfig.themeConfig.announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],o=Object(a.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},k=n(571);var E=function(e){var t=p(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=g(),c=o.isAnnouncementBarClosed,i=o.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)},O=n(84),j=n(572),y=n(49),C=n.n(y);var w=function(){var e,t=Object(c.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,o=void 0===a?{}:a,i=o.content,l=o.backgroundColor,s=o.textColor,u=o.isCloseable,d=Object(j.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!i||u&&f?null:r.a.createElement("div",{className:C.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:Object(O.a)(C.a.announcementBarContent,(e={},e[C.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:i}}),u?r.a.createElement("button",{type:"button",className:C.a.announcementBarClose,onClick:m,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},_=n(2),N=n(87),S=n(21),T=n(97),L=n(573);function I(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var B=n(574);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var n=P(Object(a.useState)((function(){return x()?"\u2318":"Ctrl"})),2),o=n[0],c=n[1];return Object(a.useEffect)((function(){x()&&c("\u2318")}),[]),r.a.createElement("button",M({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(B.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===o?r.a.createElement(I,null):o),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),R=null;function U(e){var t=e.hit,n=e.children;return r.a.createElement(N.a,{to:t.url},n)}function V(e){var t=e.state,n=e.onClose,a=Object(L.a)().generateSearchPageLink;return r.a.createElement(N.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function X(e){var t=Object(c.a)().siteMetadata,l=Object(i.b)().withBaseUrl,s=Object(T.useHistory)(),u=Object(a.useRef)(null),d=Object(a.useState)(!1),f=d[0],m=d[1],h=Object(a.useState)(null),v=h[0],b=h[1],p=Object(a.useCallback)((function(){return R?Promise.resolve():Promise.all([n.e(22).then(n.bind(null,712)),Promise.all([n.e(0),n.e(23)]).then(n.bind(null,711)),n.e(0).then(n.t.bind(null,80,7))]).then((function(e){var t=e[0].DocSearchModal;R=t}))}),[]),g=Object(a.useCallback)((function(){p().then((function(){m(!0)}))}),[p,m]),k=Object(a.useCallback)((function(){m(!1)}),[m]),E=Object(a.useCallback)((function(e){p().then((function(){m(!0),b(e.key)}))}),[p,m,b]),O=Object(a.useRef)({navigate:function(e){var t=e.suggestionUrl;s.push(t)}}).current,j=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:l(""+t.pathname+t.hash)})}))})).current,y=Object(a.useMemo)((function(){return function(e){return r.a.createElement(V,Object(_.a)({},e,{onClose:k}))}}),[k]),C=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,c=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,c])}({isOpen:f,onOpen:g,onClose:k,onInput:E,searchButtonRef:u}),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),r.a.createElement(A,{onTouchStart:p,onFocus:p,onMouseOver:p,onClick:g,ref:u}),f&&Object(S.createPortal)(r.a.createElement(R,Object(_.a)({onClose:k,initialScrollY:window.scrollY,initialQuery:v,navigator:O,transformItems:j,hitComponent:U,resultsFooterComponent:y,transformSearchClient:C},e)),document.body))}var F=function(){var e=Object(c.a)().siteConfig;return r.a.createElement(X,e.themeConfig.algolia)},H=n(630),K=n.n(H),Y=n(50),q=n.n(Y),G=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(q.a.toggle,q.a.dark),style:n},t)},W=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(q.a.toggle,q.a.light),style:n},t)},z=function(e){var t=Object(c.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,a=n.darkIcon,o=n.darkIconStyle,i=n.lightIcon,l=n.lightIconStyle,s=t.isClient;return r.a.createElement(K.a,Object(_.a)({disabled:!s,icons:{checked:r.a.createElement(G,{icon:a,style:o}),unchecked:r.a.createElement(W,{icon:i,style:l})}},e))},J=n(542);var Q=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},Z=n(575),$=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],o=Object(a.useState)(!1),c=o[0],i=o[1],l=Object(a.useState)(0),s=l[0],u=l[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(T.useLocation)(),b=Q(v.hash),p=b[0],g=b[1];return Object(Z.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(c)return i(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,o=window.innerHeight;s&&n>=s?r(!1):n+o<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(a.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:n}},ee=n(576),te=n(577),ne=n(578),ae=n(51),re=n.n(ae),oe=n(6),ce=n(564),ie=["type"],le={default:function(){return ce.a},docsVersion:function(){return n(635).default},docsVersionDropdown:function(){return n(639).default}};function se(e){var t=e.type,n=Object(oe.a)(e,ie),a=function(e){void 0===e&&(e="default");var t=le[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var ue=function(){var e,t,n=Object(c.a)(),o=n.siteConfig.themeConfig,i=o.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,f=i.hideOnScroll,m=void 0!==f&&f,h=o.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,p=n.isClient,g=Object(a.useState)(!1),k=g[0],E=g[1],j=Object(a.useState)(!1),y=j[0],C=j[1],w=Object(J.a)(),S=w.isDarkTheme,T=w.setLightTheme,L=w.setDarkTheme,I=$(m),B=I.navbarRef,M=I.isNavbarVisible,P=Object(ne.a)(),D=P.logoLink,x=P.logoLinkProps,A=P.logoImageUrl,R=P.logoAlt;Object(ee.a)(k);var U=Object(a.useCallback)((function(){E(!0)}),[E]),V=Object(a.useCallback)((function(){E(!1)}),[E]),X=Object(a.useCallback)((function(e){return e.target.checked?L():T()}),[T,L]),H=Object(te.a)();Object(a.useEffect)((function(){H===te.b.desktop&&E(!1)}),[H]);var K=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Y=K.leftItems,q=K.rightItems;return r.a.createElement("nav",{ref:B,className:Object(O.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[re.a.navbarHideable]=m,e[re.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(_.a)({className:"navbar__brand",to:D},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:Object(O.a)("navbar__title",(t={},t[re.a.hideLogoText]=y,t))},s)),Y.map((function(e,t){return r.a.createElement(se,Object(_.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,t){return r.a.createElement(se,Object(_.a)({},e,{key:t}))})),!b&&r.a.createElement(z,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:S,onChange:X}),r.a.createElement(F,{handleSearchBarToggle:C,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(_.a)({className:"navbar__brand",onClick:V,to:D},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(z,{"aria-label":"Dark mode toggle in sidebar",checked:S,onChange:X})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(se,Object(_.a)({mobile:!0},e,{onClick:V,key:t}))})))))))},de=n(52),fe=n.n(de),me=["to","href","label","prependBaseUrlToHref"];function he(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,c=Object(oe.a)(e,me),l=Object(i.a)(t),s=Object(i.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(_.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:o?s:n}:{to:l},c),a)}var ve=function(e){var t=e.url,n=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:n,src:t})};var be=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,a=n||{},o=a.copyright,l=a.links,s=void 0===l?[]:l,u=a.logo,d=void 0===u?{}:u,f=Object(i.a)(d.src);return n?r.a.createElement("footer",{className:Object(O.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(he,e))}))):null)}))),(d||o)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:fe.a.footerLogoLink},r.a.createElement(ve,{alt:d.alt,url:f})):r.a.createElement(ve,{alt:d.alt,url:f})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};n(53);function pe(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(c.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,l=n.title,s=n.themeConfig.image,u=n.url,d=e.children,f=e.title,m=e.noFooter,h=e.description,v=e.image,b=e.keywords,p=e.permalink,g=f?f+" | "+l:l,k=v||s,E=Object(i.a)(k,{absolute:!0}),O=Object(i.a)(a);return r.a.createElement(pe,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(w,null),r.a.createElement(ue,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(be,null))}},542:function(e,t,n){"use strict";var a=n(0),r=n(570);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},564:function(e,t,n){"use strict";var a,r=n(2),o=n(6),c=n(0),i=n.n(c),l=n(84),s=n(87),u=n(88);var d=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},f=c.useLayoutEffect,m=function(e){var t=Object(c.useRef)(e);return f((function(){t.current=e})),t},h=["mousedown","touchstart"],v=function(e){if("touchstart"===e)return d()?{passive:!0}:void 0};var b=function(e,t){var n=m(t);Object(c.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return h.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){h.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])},p=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],g=["items","position","className"],k=["className"],E=["items","position","className"],O=["className"],j=["mobile"];function y(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,c=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(o.a)(e,p),v=Object(u.a)(a),b=Object(u.a)(t),g=Object(u.a)(c,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?g:c}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function C(e){var t=e.items,n=e.position,a=e.className,s=Object(o.a)(e,g),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(c.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,n,a=null==d||null===(t=d.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}h(e)}b(u,(function(){return v(!1)}));var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},i.a.createElement(y,Object(r.a)({className:p(a)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,c=Object(o.a)(e,k);return i.a.createElement("li",{key:n},i.a.createElement(y,Object(r.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:p(a,!0)},c)))})))):i.a.createElement(y,Object(r.a)({className:p(a)},s))}function w(e){var t=e.items,n=(e.position,e.className),a=Object(o.a)(e,E),c=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(y,Object(r.a)({className:c(n,!0)},a),a.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,l=Object(o.a)(e,O);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(y,Object(r.a)({activeClassName:"menu__link--active",className:c(n)},l,{onClick:a.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(y,Object(r.a)({className:c(n)},a)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(o.a)(e,j),r=n?w:C;return i.a.createElement(r,a)}},570:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},571:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},572:function(e,t,n){"use strict";var a=n(0),r=n(571);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},573:function(e,t,n){"use strict";var a=n(97),r=n(8),o=n(82);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(o.a)().siteConfig,c=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},575:function(e,t,n){"use strict";var a=n(0),r=n(8),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(o()),r=n[0],c=n[1],i=function(){var t=o();c(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},576:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},577:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),o=n[0],c=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},578:function(e,t,n){"use strict";var a=n(82),r=n(542),o=n(88),c=n(106);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(o.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(f),logoAlt:l.alt}}},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=f(o),i=f(n(631)),l=f(n(7)),s=f(n(632)),u=f(n(633)),d=n(634);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},631:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&e.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},635:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=n(0),c=n.n(o),i=n(564),l=n(107),s=["label","to","docsPluginId"];function u(e){var t=e.label,n=e.to,o=e.docsPluginId,u=Object(r.a)(e,s),d=Object(l.useActiveVersion)(o),f=Object(l.useLatestVersion)(o),m=null!=d?d:f,h=null!=t?t:m.label,v=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(m).path;return c.a.createElement(i.a,Object(a.a)({},u,{label:h,to:v}))}},639:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=n(0),c=n.n(o),i=n(564),l=n(107),s=["mobile","docsPluginId"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n=e.mobile,o=e.docsPluginId,d=Object(r.a)(e,s),f=Object(l.useActiveDocContext)(o),m=Object(l.useVersions)(o),h=Object(l.useLatestVersion)(o);var v=null!==(t=f.activeVersion)&&void 0!==t?t:h,b=n?"Versions":v.label,p=n?void 0:u(v).path;return c.a.createElement(i.a,Object(a.a)({},d,{mobile:n,label:b,to:p,items:function(){if(!(m.length<=2))return m.map((function(e){var t=(null==f?void 0:f.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==f?void 0:f.activeVersion)}}}))}()}))}}}]);