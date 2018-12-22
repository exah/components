(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/box/index.js":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return m});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/pss/esm/styles/system.js"),s=n("./node_modules/react-styled-base/esm/base.js"),m=Object(a.a)(s.a,{target:"e1b964d50"})({name:"roynbj",styles:"box-sizing:border-box;"});m.displayName="BorderBox",m.propTypes=Object.assign({},s.a.propTypes);var r=Object(a.a)(m,{target:"e1b964d51"})(o.a);r.displayName="Box",r.propTypes=Object.assign({},m.propTypes,o.a.propTypes)},"./src/flex-box/index.js":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/pss/esm/styles/flex.js"),s=n("./src/box/index.js"),m=Object(a.a)(s.b,{target:"e11fm24e0"})("display:flex;",o.a,o.b);m.displayName="FlexBox",m.propTypes=Object.assign({},s.b.propTypes,o.a.propTypes),m.Item=s.b},"./src/layout/about.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),m=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),i=n("./node_modules/react/index.js"),l=n.n(i),p=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),d=n("./node_modules/@exah/utils/esm/fns.js"),b=n("./src/utils.js"),y=n("./src/flex-box/index.js"),g=n("./src/box/index.js"),j=Object(b.a)({flexDirection:"column",minHeight:"100%"}),h=Object(b.a)({flex:"1 1 100%"}),L=Object(d.b)(Object(b.b)("Layout"),Object(b.c)(y.a),j)(y.a),E=Object(d.b)(Object(b.b)("Layout.Content"),Object(b.c)(g.b),h)(g.b),f=Object(d.b)(Object(b.b)("Layout.Body"),Object(b.c)(y.a),h)(y.a);Object.assign(L,{Content:E,Item:g.b,Body:f}),n.d(t,"default",function(){return T});var T=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(r.a)(t).call(this,e))).layout=null,n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=Object(a.a)(e,["components"]);return l.a.createElement(p.MDXTag,{name:"wrapper",components:t},l.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"layout"}},"Layout"),l.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"description"}},"Description"),l.a.createElement(p.MDXTag,{name:"p",components:t},"Implements ",l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Holy_grail_(web_design)"}},"Holy Grail Layout")," with ",l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"#/flex-box"}},l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"FlexBox")),"."),l.a.createElement(p.MDXTag,{name:"ul",components:t},l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Header is on top of page"),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},'Footer is stick to "bottom" of page'),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Content expands to take available space"),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Body can be used as container to equal height columns (like navs) and main Content")),l.a.createElement(p.MDXTag,{name:"p",components:t},"Components:"),l.a.createElement(p.MDXTag,{name:"ul",components:t},l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout")," \u2014 Container that takes space of page (add ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"minHt='100vh'")," prop, default to ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"100%"),")"),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout.Content")," \u2014 Main component, that expands to take available space"),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout.Body")," \u2014 Can be used inside ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout")," as main container of vertical columns and content"),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout.Item")," \u2014 Basic component that can be used for horizontal sections inside ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout")," or vertical in ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Layout.Body"))),l.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),l.a.createElement(p.MDXTag,{name:"pre",components:t},l.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { Layout } from 'pss-components'\n")),l.a.createElement(p.MDXTag,{name:"pre",components:t},l.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"<Layout>\n  <Layout.Item>Top</Layout.Item>\n  <Layout.Body>\n    <Layout.Content>Content</Layout.Content>\n    <Layout.Item>Side Nav</Layout.Item>\n  </Layout.Body>\n  <Layout.Item>Bottom</Layout.Item>\n</Layout>\n")),l.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),l.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"basic"}},"Basic"),l.a.createElement(u.e,{__position:0,__code:'<Layout>\n  <Layout.Item as="header">Header</Layout.Item>\n  <Layout.Content as="main">Main</Layout.Content>\n  <Layout.Item as="footer">Footer</Layout.Item>\n</Layout>',__scope:{props:this?this.props:n,Layout:L},style:{height:"500px"}},l.a.createElement(L,null,l.a.createElement(L.Item,{as:"header"},"Header"),l.a.createElement(L.Content,{as:"main"},"Main"),l.a.createElement(L.Item,{as:"footer"},"Footer"))),l.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"all-components"}},"All components"),l.a.createElement(u.e,{__position:1,__code:'<Layout outline="1px solid" pd>\n  <Layout.Item outline="debug" pd mgb>\n    Header\n  </Layout.Item>\n  <Layout.Item outline="debug" pd mgb>\n    Some / Breadcrumbs / Path\n  </Layout.Item>\n  <Layout.Body outline="debug" pd mgb>\n    <Layout.Content outline="debug" pd mgx>\n      Content\n    </Layout.Content>\n    <Layout.Item outline="debug" pd width={1 / 6} order={-1}>\n      Left Nav\n    </Layout.Item>\n    <Layout.Item outline="debug" pd width={1 / 6}>\n      Right Nav\n    </Layout.Item>\n  </Layout.Body>\n  <Layout.Item outline="debug" pd>\n    Footer\n  </Layout.Item>\n</Layout>',__scope:{props:this?this.props:n,Layout:L},style:{height:"500px"}},l.a.createElement(L,{outline:"1px solid",pd:!0},l.a.createElement(L.Item,{outline:"debug",pd:!0,mgb:!0},"Header"),l.a.createElement(L.Item,{outline:"debug",pd:!0,mgb:!0},"Some / Breadcrumbs / Path"),l.a.createElement(L.Body,{outline:"debug",pd:!0,mgb:!0},l.a.createElement(L.Content,{outline:"debug",pd:!0,mgx:!0},"Content"),l.a.createElement(L.Item,{outline:"debug",pd:!0,width:1/6,order:-1},"Left Nav"),l.a.createElement(L.Item,{outline:"debug",pd:!0,width:1/6},"Right Nav")),l.a.createElement(L.Item,{outline:"debug",pd:!0},"Footer"))))}}]),t}(l.a.Component)},"./src/utils.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return i});var a=n("./node_modules/react/index.js"),o=n.n(a),s=n("./node_modules/@exah/utils/esm/checks.js"),m=function(e){return function(t){return function(n){return o.a.createElement(t,e(n))}}},r=function(e){return m(function(t){return Object.assign({},Object(s.c)(e)?e(t):e,t)})},c=function(e){return m(function(t){return Object.assign({},t,Object(s.c)(e)?e(t):e)})},i=function(e){return function(t){return Object.assign(t,{displayName:e})}},l=function(e){return function(t){return Object.assign(t,{propTypes:Object.assign({},e.propTypes)})}}}}]);
//# sourceMappingURL=layout-about.da6e80cfd80938ec3cde.js.map