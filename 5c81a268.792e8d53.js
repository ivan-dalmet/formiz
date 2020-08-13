(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return s})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return u}));var t=a(2),l=a(7),r=(a(0),a(126)),i={id:"use-field",title:"useField() hook"},s={id:"core/use-field",title:"useField() hook",description:"Concept",source:"@site/docs/core/useField-hook.mdx",permalink:"/docs/core/use-field",editUrl:"https://github.com/ivan-dalmet/formiz/edit/master/documentation/docs/core/useField-hook.mdx",sidebar:"docs",previous:{title:"useForm() hook",permalink:"/docs/core/use-form"},next:{title:"Validation Rules",permalink:"/docs/validations/rules"}},o=[{value:"Concept",id:"concept",children:[]},{value:"Hook values",id:"hook-values",children:[{value:"value",id:"value",children:[]},{value:"valueDebounced",id:"valuedebounced",children:[]},{value:"setValue()",id:"setvalue",children:[]},{value:"id",id:"id",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"isValidating",id:"isvalidating",children:[]},{value:"isPristine",id:"ispristine",children:[]},{value:"isSubmitted",id:"issubmitted",children:[]},{value:"errorMessage",id:"errormessage",children:[]},{value:"errorMessages",id:"errormessages",children:[]},{value:"resetKey",id:"resetkey",children:[]}]},{value:"Field props",id:"field-props",children:[{value:"name *",id:"name-",children:[]},{value:"debounce",id:"debounce",children:[]},{value:"defaultValue",id:"defaultvalue",children:[]},{value:"keepValue",id:"keepvalue",children:[]},{value:"formatValue(fieldValue)",id:"formatvaluefieldvalue",children:[]},{value:"onChange(fieldValue)",id:"onchangefieldvalue",children:[]},{value:"required",id:"required",children:[]},{value:"validations",id:"validations",children:[]},{value:"asyncValidations",id:"asyncvalidations",children:[]}]},{value:"PropTypes validations",id:"proptypes-validations",children:[]}],c={rightToc:o};function u(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"concept"},"Concept"),Object(r.b)("p",null,"When using the ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," hook, you need to pass your component ",Object(r.b)("inlineCode",{parentName:"p"},"props")," to the hook."),Object(r.b)("p",null,"Then the hook gives you access to the field state."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nconst MyField = (props) => {\n  const {\n    value,\n    setValue,\n    isValid,\n    errorMessage,\n  } = useField(props)\n\n  return (\n    ...\n  )\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"hook-values"},"Hook values"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," return an object with the following properties:"),Object(r.b)("h3",{id:"value"},"value"),Object(r.b)("p",null,"Get the current value of the field."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const MyField = (props) => {\n  const { value } = useField(props)\n\n  return <input value={value ?? ''} />\n}\n")),Object(r.b)("h3",{id:"valuedebounced"},"valueDebounced"),Object(r.b)("p",null,"Get the current value of the field, but sync with the debouncing.\nIt can be useful to determinate when to show error messages."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { valueDebounced } = useField(props)\n")),Object(r.b)("h3",{id:"setvalue"},"setValue()"),Object(r.b)("p",null,"Set the value of the field."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const MyField = (props) => {\n  const { setValue } = useField(props)\n\n  return <input onChange={(e) => setValue(e.target.value)} />\n}\n")),Object(r.b)("h3",{id:"id"},"id"),Object(r.b)("p",null,"Return a unique id. This id will be created based on the ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/core/formiz#id"}),"form id")," and the ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"#name-"}),"field name"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const MyField = (props) => {\n  const { id } = useField(props)\n\n  return (\n    <label htmlFor={id}>...</label>\n    <input id={id} />\n  )\n}\n")),Object(r.b)("h3",{id:"isvalid"},"isValid"),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the field is valid."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { isValid } = useField(props)\n")),Object(r.b)("h3",{id:"isvalidating"},"isValidating"),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the field is running async validation."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { isValidating } = useField(props)\n")),Object(r.b)("h3",{id:"ispristine"},"isPristine"),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the field has not been changed."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { isPristine } = useField(props)\n")),Object(r.b)("h3",{id:"issubmitted"},"isSubmitted"),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," either if the current step or the form is submitted."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { isSubmitted } = useField(props)\n")),Object(r.b)("h3",{id:"errormessage"},"errorMessage"),Object(r.b)("p",null,"Returns the first error message."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { errorMessage } = useField(props)\n")),Object(r.b)("h3",{id:"errormessages"},"errorMessages"),Object(r.b)("p",null,"Returns all error messages."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const { errorMessages } = useField(props)\n")),Object(r.b)("h3",{id:"resetkey"},"resetKey"),Object(r.b)("p",null,"Allows you to put a key on elements that you want to be reinitialize when the from is reset.",Object(r.b)("br",null),"\nCan be useful for element like ",Object(r.b)("inlineCode",{parentName:"p"},"<input>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<select>"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const MyField = (props) => {\n  const { resetKey } = useField(props)\n\n  useEffect(() => {\n    /* Do something on reset */\n  }, [resetKey])\n\n  return <input key={resetKey} />\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"field-props"},"Field props"),Object(r.b)("p",null,"When a component is created with the ",Object(r.b)("inlineCode",{parentName:"p"},"useField()")," hook,\nyou can pass the following props to the component."),Object(r.b)("h3",{id:"name-"},"name *"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Required")),Object(r.b)("p",null,"The name is required to register the field in the form."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" />\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Nested objects")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"name")," props can use lodash-like dot paths to reference nested values."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Field name=\"fieldA\" />\n<Field name=\"fieldB\" />\n<Field name=\"myGroup.fieldA\" />\n<Field name=\"myGroup.fieldB\" />\n\n/* Form values\n{\n  fieldA: 'value',\n  fieldB: 'value',\n  myGroup: {\n    fieldA: 'value',\n    fieldB: 'value',\n  },\n}\n*/\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arrays")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"name")," props allow also arrays and arrays of objects out of the box.\nUsing lodash-like bracket syntax for ",Object(r.b)("inlineCode",{parentName:"p"},"name")," allow you to handle fields in a list."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Field name=\"myArray[0]\" />\n<Field name=\"myArray[1]\" />\n<Field name=\"myArrayOfObjects[0].fieldA\" />\n<Field name=\"myArrayOfObjects[0].fieldB\" />\n<Field name=\"myArrayOfObjects[1].fieldA\" />\n<Field name=\"myArrayOfObjects[1].fieldB\" />\n\n/* Form values\n{\n  myArray: ['value', 'value'],\n  myArrayOfObjects: [\n    { fieldA: 'value', fieldB: 'value' },\n    { fieldA: 'value', fieldB: 'value' },\n  ],\n}\n*/\n")),Object(r.b)("h3",{id:"debounce"},"debounce"),Object(r.b)("p",null,"Number of milliseconds for debouncing validations. (default is ",Object(r.b)("inlineCode",{parentName:"p"},"100"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" debounce={200} />\n')),Object(r.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(r.b)("p",null,"Pass an initial value to the field."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" defaultValue="My initial value" />\n')),Object(r.b)("h3",{id:"keepvalue"},"keepValue"),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to keep the value when the field is unmounted from the DOM. (default is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" keepValue />\n')),Object(r.b)("h3",{id:"formatvaluefieldvalue"},"formatValue(fieldValue)"),Object(r.b)("p",null,"Format the value before saving it into the internal state."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Field name=\"myFieldName\" formatValue={val => (val || '').trim()} />\n")),Object(r.b)("h3",{id:"onchangefieldvalue"},"onChange(fieldValue)"),Object(r.b)("p",null,"Triggered everytime that setValue() is called inside the field."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" onChange={(val) => console.log(val)} />\n')),Object(r.b)("h3",{id:"required"},"required"),Object(r.b)("p",null,"Shortcut for isRequired() validation"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Field name="myFieldName" required="Field is required" />\n')),Object(r.b)("h3",{id:"validations"},"validations"),Object(r.b)("p",null,"Accept an array of object with the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rule(fieldValue, formValues)"),": Built in validation rule or custom validation function (must returns ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the rule is valid)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deps"),": Array of external values used in the rule function (like array of dependencies in useEffect)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"message"),": The message if the rule is invalid.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Field\n  name=\"myFieldName\"\n  validations={[\n    {\n      rule: isRequired(),\n      message: 'Field is required',\n    },\n    {\n      rule: isNotEmptyString(),\n      message: 'Field can\\'t be empty',\n    },\n    {\n      rule: (value) => value.toLowerCase() !== 'john',\n      message: 'Field can\\'t be john',\n    },\n    {\n      rule: (value) => value !== externalValue,\n      deps: [externalValue],\n      message: 'Field can\\'t be the same as external value',\n    },\n  ]}\n/>\n")),Object(r.b)("h3",{id:"asyncvalidations"},"asyncValidations"),Object(r.b)("p",null,"Async validations allows you to run asynchronous code for validate a field, such as an API call.\n",Object(r.b)("inlineCode",{parentName:"p"},"asyncValidations")," will only be triggered if all the other ",Object(r.b)("inlineCode",{parentName:"p"},"validations")," rules are valid."),Object(r.b)("p",null,"Accept an array of object with the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rule(fieldValue, formValues)"),": Must returns a ",Object(r.b)("strong",{parentName:"li"},"Promise")," that returns ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the rule is valid."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deps"),": Array of external values used in the rule function (like array of dependencies in useEffect)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"message"),": The message if the rule is invalid.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Field\n  name=\"myFieldName\"\n  asyncValidations={[\n    {\n      rule: async(value) => {\n        const isAlreadyUsed = await validateUsername(value)\n        return isAlreadyUsed;\n      },\n      message: 'Username already used, please select another one.',\n    }\n  ]}\n/>\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"proptypes-validations"},"PropTypes validations"),Object(r.b)("p",null,"If you are using ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/prop-types"}),"prop-types")," to document props in your project,\nyou can get ",Object(r.b)("inlineCode",{parentName:"p"},"fieldPropTypes")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fieldDefaultProps")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@formiz/core")," to pass to your custom fields for PropTypes validations."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"// MyField.js\nimport React from 'react'\nimport { useField, fieldPropTypes, fieldDefaultProps } from '@formiz/core'\n\nconst MyField = (props) => {\n  // ...\n}\n\nMyField.propTypes = {\n  ...fieldPropTypes,\n  // Your custom props\n}\n\nMyField.defaultProps = {\n  ...fieldDefaultProps,\n  // Your custom props\n}\n")))}u.isMDXComponent=!0},126:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return m}));var t=a(0),l=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),u=function(e){var n=l.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=u(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},p=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),p=t,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return a?l.a.createElement(m,s(s({ref:n},c),{},{components:a})):l.a.createElement(m,s({ref:n},c))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);