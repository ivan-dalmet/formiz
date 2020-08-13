(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(7),a=(t(0),t(126)),i={id:"formiz-step",title:"<FormizStep> component"},p={id:"core/formiz-step",title:"<FormizStep> component",description:"Import",source:"@site/docs/core/FormizStep-component.mdx",permalink:"/docs/core/formiz-step",editUrl:"https://github.com/ivan-dalmet/formiz/edit/master/documentation/docs/core/FormizStep-component.mdx",sidebar:"docs",previous:{title:"<Formiz> component",permalink:"/docs/core/formiz"},next:{title:"useForm() hook",permalink:"/docs/core/use-form"}},c=[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[{value:"name *",id:"name-",children:[]},{value:"as",id:"as",children:[]},{value:"label",id:"label",children:[]},{value:"isEnabled",id:"isenabled",children:[]},{value:"order",id:"order",children:[]}]}],l={rightToc:c};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { FormizStep } from '@formiz/core'\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"name-"},"name *"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Required")),Object(a.b)("p",null,"The name is required to register the step in the form."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"as"},"as"),Object(a.b)("p",null,"You can pass the tag for the step container. Default is ",Object(a.b)("inlineCode",{parentName:"p"},"'div'"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"label"},"label"),Object(a.b)("p",null,"A label can be passed to the step and then used for display when getting the steps with the ",Object(a.b)("inlineCode",{parentName:"p"},"useForm()")," hook."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" label="First step">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" label="Second step">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"isenabled"},"isEnabled"),Object(a.b)("p",null,"Set if the step should be enabled or not (default is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{/* Display: `step1` > `step3`. */}\n<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" isEnabled={false}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"order"},"order"),Object(a.b)("p",null,"Order is a number to display the steps in the correct order. (default is ",Object(a.b)("inlineCode",{parentName:"p"},"0"),")",Object(a.b)("br",null),"\nIf you use order, all steps should get an order property to prevent unexpected behavior."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{/* Display order: `step2` > `step3` > `step1`. */}\n<Formiz>\n  <FormizStep name="step1" order={3}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" order={1}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3" order={2}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')))}s.isMDXComponent=!0},126:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},m=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=n,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||a;return t?o.a.createElement(d,p(p({ref:r},l),{},{components:t})):o.a.createElement(d,p({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);