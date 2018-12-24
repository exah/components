(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/base/about.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g});var s=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),r=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),c=n("./node_modules/react/index.js"),l=n.n(c),i=n("./node_modules/@mdx-js/tag/dist/index.js"),d=n("./node_modules/docz/dist/index.m.js"),u=n("./node_modules/react-styled-base/esm/base.js"),g=function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(r.a)(this,Object(p.a)(a).call(this,e))).layout=null,n}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.components,n=Object(s.a)(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",components:a},l.a.createElement(i.MDXTag,{name:"h1",components:a,props:{id:"base-createbase"}},"Base, createBase"),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"description"}},"Description"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Component without any styles, that filters unkown props. Underlying component can be changed with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"as")," prop. By default renders ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<div>"),"."),l.a.createElement(i.MDXTag,{name:"p",components:a},"For more info see ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/exah/react-styled-base"}},"react-styled-base")," docs."),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"usage"}},"Usage"),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import { Base, createBase } from 'pss-components'\n")),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"<Base>\n  {/* children */}\n</Base>\n")),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const Heading = createBase('h1')\n")),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"<Heading>\n  {/* children */}\n</Heading>\n<Heading as='h2'>\n  {/* children */}\n</Heading>\n")),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"examples"}},"Examples"),l.a.createElement(d.e,{__position:0,__code:"<Base>Base</Base>",__scope:{props:this?this.props:n,Base:u.a}},l.a.createElement(u.a,null,"Base")),l.a.createElement(i.MDXTag,{name:"p",components:a},"Filters any none-valid prop."),l.a.createElement(d.e,{__position:1,__code:'<Base filter_any_weird_prop="value">Base</Base>',__scope:{props:this?this.props:n,Base:u.a}},l.a.createElement(u.a,{filter_any_weird_prop:"value"},"Base")),l.a.createElement(i.MDXTag,{name:"p",components:a},"Change underlying component with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"as")," prop."),l.a.createElement(d.e,{__position:2,__code:'<Base as="span">Span</Base>',__scope:{props:this?this.props:n,Base:u.a}},l.a.createElement(u.a,{as:"span"},"Span")))}}]),a}(l.a.Component)}}]);
//# sourceMappingURL=base-about.3c20a426c0ac798907dd.js.map