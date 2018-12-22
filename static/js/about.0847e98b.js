(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/about.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),m=t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),r=t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),p=t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),c=t("./node_modules/react/index.js"),i=t.n(c),d=t("./node_modules/@mdx-js/tag/dist/index.js"),l=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(r.a)(this,Object(s.a)(n).call(this,e))).layout=null,t}return Object(p.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(a.a)(e,["components"]);return i.a.createElement(d.MDXTag,{name:"wrapper",components:n},i.a.createElement(d.MDXTag,{name:"h1",components:n,props:{id:"getting-started"}},"Getting Started"),i.a.createElement(d.MDXTag,{name:"h2",components:n,props:{id:"install"}},"Install"),i.a.createElement(d.MDXTag,{name:"pre",components:n},i.a.createElement(d.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"$ yarn add pss-components\n")),i.a.createElement(d.MDXTag,{name:"p",components:n},"This package is based on ",i.a.createElement(d.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/exah/pss"}},i.a.createElement(d.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"pss"))," and ",i.a.createElement(d.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://emotion.sh"}},i.a.createElement(d.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"emotion")),"."),i.a.createElement(d.MDXTag,{name:"h2",components:n,props:{id:"import-components"}},"Import components"),i.a.createElement(d.MDXTag,{name:"pre",components:n},i.a.createElement(d.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import React from 'react'\nimport { Layout } from 'pss-components'\n\nconst MyApp = () => (\n  <Layout>\n    <Layout.Item>\n      Header\n    </Layout.Item>\n    <Layout.Content>\n      Content\n    </Layout.Content>\n    <Layout.Item>\n      Footer\n    </Layout.Item>\n  </Layout>\n)\n")),i.a.createElement(d.MDXTag,{name:"h2",components:n,props:{id:"provide-custom-theme"}},"Provide custom theme"),i.a.createElement(d.MDXTag,{name:"pre",components:n},i.a.createElement(d.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import React from 'react'\nimport { ThemeProvider } from 'emotion-theming'\n\nconst myTheme = {\n  grid: 12,\n  media: {\n    M: '(max-width: 600px)',\n    T: '(min-width: 601px) and (max-width: 1024px)',\n    D: '(min-width: 1025px)'\n  },\n  space: {\n    default: [ 0, 8, 16, 32, 64 ]\n  },\n  color: {\n    black: '#000',\n    gray: [ '#eee', '#ddd', '#ccc', '#bbb', '#aaa' ],\n    white: '#fff'\n  },\n  palette: {\n    default: {\n      bg: '#fff',\n      fg: '#000'\n    },\n    gray: {\n      bg: '#eee',\n      fg: '#000'\n    },\n    inverted: {\n      bg: '#000',\n      fg: '#fff'\n    }\n  }\n}\n\nconst MyApp = () => (\n  <ThemeProvider theme={myTheme}>\n    <Layout>\n      <Layout.Item>\n        Header\n      </Layout.Item>\n      <Layout.Content>\n        Content\n      </Layout.Content>\n      <Layout.Item>\n        Footer\n      </Layout.Item>\n    </Layout>\n  </ThemeProvider>\n)\n")))}}]),n}(i.a.Component)}}]);
//# sourceMappingURL=about.da6e80cfd80938ec3cde.js.map