(window.webpackJsonp=window.webpackJsonp||[]).push([[21,24],{565:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(19),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),l={Prism:a.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var m=void 0,d=t[l],f=n[l][o];if("string"==typeof f?(d=l>0?d:["plain"],m=f):(d=p(d,f.type),f.alias&&(d=p(d,f.alias)),m=f.content),"string"==typeof m){var y=m.split(s),h=y.length;c.push({types:d,content:y[0]});for(var b=1;b<h;b++)u(c),i.push(c=[]),c.push({types:d,content:y[b]})}else l++,t.push(d),n.push(m),a.push(0),r.push(m.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=f},569:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(104);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},640:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},641:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var c=n;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(83),l=n(82),c=n(22),i=n(104),s=n(2),u=n(6),p=n(84),m=n(572),d=n(576),f=n(577),y=n(578),h=n(575),b=n(87),g=n(106),v=n(56),k=n.n(v),j=["item","onItemClick","collapsible","activePath"],O=["item","onItemClick","activePath","collapsible"];var E=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function C(e){var t,n,o,l=e.item,c=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,j),f=l.items,y=l.label,h=E(l,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&l.collapsed)})),v=g[0],O=g[1];Object(a.useEffect)((function(){h&&!b&&v&&O(!1)}),[h,b,v]);var C=Object(a.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===f.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:y},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[k.a.menuLinkText]=!i,t)),onClick:i?C:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list"},f.map((function(e){return r.a.createElement(w,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:m})}))))}function N(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,O)),l=t.href,c=t.label,i=E(t,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function w(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(N,e)}}var x=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,g=Object(a.useState)(!1),v=g[0],j=g[1],O=Object(l.a)(),E=O.siteConfig,C=(E=void 0===E?{}:E).themeConfig,N=(C=void 0===C?{}:C).navbar,x=(N=void 0===N?{}:N).title,P=void 0===x?"":x,_=N.hideOnScroll,T=void 0!==_&&_,S=O.isClient,L=Object(y.a)(),D=L.logoLink,I=L.logoLinkProps,B=L.logoImageUrl,M=L.logoAlt,A=Object(m.a)().isAnnouncementBarClosed,R=Object(h.a)().scrollY;Object(d.a)(v);var F=Object(f.a)();return Object(a.useEffect)((function(){F===f.b.desktop&&j(!1)}),[F]),r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=T,t))},T&&r.a.createElement(b.a,Object(s.a)({tabIndex:-1,className:k.a.sidebarLogo,to:D},I),null!=B&&r.a.createElement("img",{key:S,src:B,alt:M}),null!=P&&r.a.createElement("strong",null,P)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":v},n[k.a.menuWithAnnouncementBar]=!A&&0===R,n))},r.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!v)}},v?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},P=n(565),_=n(640),T=n.n(_),S=n(641),L=n.n(S),D={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},I=n(542),B=function(){var e=Object(l.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(I.a)().isDarkTheme,a=t.theme||D,r=t.darkTheme||a;return n?r:a},M=n(57),A=n.n(M),R=/{([\d,-]+)}/,F=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},W=/title=".*"/,z=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(l.a)().siteConfig.themeConfig.prism,i=void 0===c?{}:c,u=Object(a.useState)(!1),m=u[0],d=u[1],f=Object(a.useState)(!1),y=f[0],h=f[1];Object(a.useEffect)((function(){h(!0)}),[]);var b=Object(a.useRef)(null),g=[],v="",k=B();if(o&&R.test(o)){var j=o.match(R)[1];g=L.a.parse(j).filter((function(e){return e>0}))}o&&W.test(o)&&(v=o.match(W)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);var E=t.replace(/\n$/,"");if(0===g.length&&void 0!==O){for(var C,N="",w=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return F(["js","jsBlock"]);case"jsx":case"tsx":return F(["js","jsBlock","jsx"]);case"html":return F(["js","jsBlock","html"]);case"python":case"py":return F(["python"]);default:return F()}}(O),x=t.replace(/\n$/,"").split("\n"),_=0;_<x.length;){var S=_+1,D=x[_].match(w);if(null!==D){switch(D.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=S+",";break;case"highlight-start":C=S;break;case"highlight-end":N+=C+"-"+(S-1)+","}x.splice(_,1)}else _+=1}g=L.a.parse(N),E=x.join("\n")}var I=function(){T()(E),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(P.a,Object(s.a)({},P.b,{key:String(y),theme:k,code:E,language:O}),(function(e){var t,n,a=e.className,o=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,v&&r.a.createElement("div",{style:o,className:A.a.codeBlockTitle},v),r.a.createElement("div",{className:A.a.codeBlockContent},r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(A.a.copyButton,(t={},t[A.a.copyButtonWithTitle]=v,t)),onClick:I},m?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(p.a)(a,A.a.codeBlock,(n={},n[A.a.codeBlockWithTitle]=v,n))},r.a.createElement("div",{className:A.a.codeBlockLines,style:o},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},i({token:e,key:t})))})))}))))))}))},$=(n(58),n(59)),J=n.n($),U=["id"],H=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,U),c=Object(l.a)().siteConfig,i=(c=void 0===c?{}:c).themeConfig,s=(i=void 0===i?{}:i).navbar,m=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==m&&m;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[J.a.enhancedAnchor]=!d,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},X=n(60),Y=n.n(X),q={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(z,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(b.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:Y.a.mdxCodeBlock},e))},h1:H("h1"),h2:H("h2"),h3:H("h3"),h4:H("h4"),h5:H("h5"),h6:H("h6")},G=n(569),K=n(97),Q=n(100),V=n(61),Z=n.n(V);function ee(e){var t=e.version,n=e.isLast?[t,"latest"]:[t];return r.a.createElement(Q.a,null,r.a.createElement("meta",{name:"docsearch:version",content:n.join(",")}))}function te(e){var t,n,a=e.currentDocRoute,c=e.versionMetadata,s=e.children,u=Object(l.a)(),p=u.siteConfig,m=u.isClient,d=c.permalinkToSidebar,f=c.docsSidebars,y=c.version,h=c.isLast,b=f[d[a.path]];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{version:y,isLast:h}),r.a.createElement(i.a,{key:m},r.a.createElement("div",{className:Z.a.docPage},b&&r.a.createElement("div",{className:Z.a.docSidebarContainer,role:"complementary"},r.a.createElement(x,{sidebar:b,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:Z.a.docMainContainer},r.a.createElement(o.a,{components:q},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(K.matchPath)(a.pathname,e)}));return o?r.a.createElement(te,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(G.default,e)}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);