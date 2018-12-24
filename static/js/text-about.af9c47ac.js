(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/box/index.js":function(e,t,s){"use strict";s.d(t,"b",function(){return p}),s.d(t,"a",function(){return r});var n=s("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=s("./node_modules/pss/esm/styles/system.js"),o=s("./node_modules/react-styled-base/esm/base.js"),r=Object(n.a)(o.a,{target:"e1b964d50"})({name:"roynbj",styles:"box-sizing:border-box;"});r.displayName="BorderBox",r.propTypes=Object.assign({},o.a.propTypes);var p=Object(n.a)(r,{target:"e1b964d51"})(a.a);p.displayName="Box",p.propTypes=Object.assign({},r.propTypes,a.a.propTypes)},"./src/props-table.js":function(e,t,s){"use strict";s.d(t,"a",function(){return l});var n=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=s("./node_modules/react/index.js"),o=s.n(a),r=s("./node_modules/@exah/utils/esm/obj.js"),p=s("./node_modules/docz/dist/index.m.js"),m=s("./node_modules/parse-prop-types/dist/index.js"),i=s.n(m),c=function(e){return i()(Object.assign({},e,{defaultProps:Object(r.c)(function(e,t){return Object(n.a)({},e,String(t))},e.defaultProps||{})}))},l=function(e){var t=e.of;return null==t.__docgenInfo&&(t.__docgenInfo={description:t.description||"",props:c(t)}),o.a.createElement(p.f,{of:t})}},"./src/text/about.mdx":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=s("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=s("./node_modules/@babel/runtime/helpers/esm/createClass.js"),r=s("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=s("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=s("./node_modules/@babel/runtime/helpers/esm/inherits.js"),i=s("./node_modules/react/index.js"),c=s.n(i),l=s("./node_modules/@mdx-js/tag/dist/index.js"),d=s("./node_modules/docz/dist/index.m.js"),u=s("./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js"),b=s("./src/props-table.js"),h=s("./src/theme.js"),g=s("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),T=s("./node_modules/pss/esm/core/create-variant.js"),j=s("./node_modules/pss/esm/constants.js"),x=s("./node_modules/pss/esm/styles/base.js"),y=s("./node_modules/pss/esm/styles/typography.js"),f=s("./src/box/index.js"),_=Object(T.a)({themeKey:j.l}),E=Object(g.a)(f.a,{target:"es769ng0"})(_,x.a,y.a);E.displayName="Text",E.propTypes=Object.assign({},f.a.propTypes,x.a.propTypes,y.a.propTypes,_.propTypes),s.d(t,"default",function(){return D});var D=function(e){function t(e){var s;return Object(a.a)(this,t),(s=Object(r.a)(this,Object(p.a)(t).call(this,e))).layout=null,s}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,s=Object(n.a)(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",components:t},c.a.createElement(l.MDXTag,{name:"h1",components:t,props:{id:"text"}},"Text"),c.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"description"}},"Description"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Text component, that renders as ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<div>")," with ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#typography"}},"typography prop styles")," and ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#base"}},"base prop styles"),". Component inside can be changed with ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"as")," prop."),c.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),c.a.createElement(l.MDXTag,{name:"h3",components:t,props:{id:"basic"}},"Basic"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { Text } from 'pss-components'\n")),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"<Text as='p' textAlign='center'>\n  Text\n</Text>\n")),c.a.createElement(l.MDXTag,{name:"h3",components:t,props:{id:"add-text-styles-to-theme"}},"Add Text Styles to theme"),c.a.createElement(l.MDXTag,{name:"p",components:t},"See ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#textstyle"}},"textStyle")," docs."),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const theme = {\n  fontFamily: {\n    default: 'Helvetica, system-ui, sans-serif',\n    serif: 'Times New Roman, serif'\n  },\n  textStyle: {\n    root: {\n      fontFamily: 'Helvetica, system-ui, sans-serif',\n      fontSize: 16,\n      lineHeight: 1.2\n    },\n    default: {\n      fontSize: '1rem'\n    },\n    heading: {\n      fontSize: '1.5rem',\n      fontWeight: 'bold'\n    }\n  }\n}\n")),c.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),c.a.createElement(d.e,{__position:0,__code:'<Text as="p" textAlign="center">\n  Text\n</Text>',__scope:{props:this?this.props:s,ThemeProvider:u.a,PropsTable:b.a,theme:h.b,Text:E}},c.a.createElement(E,{as:"p",textAlign:"center"},"Text")),c.a.createElement(d.e,{__position:1,__code:'<ThemeProvider theme={theme}>\n  <Text as="h1" variant="heading" fontFamily="serif" textAlign="center">\n    Text\n  </Text>\n</ThemeProvider>',__scope:{props:this?this.props:s,ThemeProvider:u.a,PropsTable:b.a,theme:h.b,Text:E}},c.a.createElement(u.a,{theme:h.b},c.a.createElement(E,{as:"h1",variant:"heading",fontFamily:"serif",textAlign:"center"},"Text"))),c.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),c.a.createElement(b.a,{of:E}))}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=text-about.3c20a426c0ac798907dd.js.map