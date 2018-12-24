(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/box/index.js":function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=n("./node_modules/pss/esm/styles/system.js"),o=n("./node_modules/react-styled-base/esm/base.js"),i=Object(a.a)(o.a,{target:"e1b964d50"})({name:"roynbj",styles:"box-sizing:border-box;"});i.displayName="BorderBox",i.propTypes=Object.assign({},o.a.propTypes);var c=Object(a.a)(i,{target:"e1b964d51"})(s.a);c.displayName="Box",c.propTypes=Object.assign({},i.propTypes,s.a.propTypes)},"./src/flex-box/index.js":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=n("./node_modules/pss/esm/styles/flex.js"),o=n("./src/box/index.js"),i=Object(a.a)(o.b,{target:"e11fm24e0"})("display:flex;",s.a,s.b);i.displayName="FlexBox",i.propTypes=Object.assign({},o.b.propTypes,s.a.propTypes),i.Item=o.b},"./src/image/index.js":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=n("./node_modules/react-styled-base/esm/base.js"),o=n("./node_modules/pss/esm/core/combine-styles.js"),i=n("./node_modules/pss/esm/styles/cursor.js"),c=n("./node_modules/pss/esm/styles/display.js"),r=n("./node_modules/pss/esm/styles/flex.js"),l=n("./node_modules/pss/esm/styles/float.js"),m=n("./node_modules/pss/esm/styles/space.js"),d=n("./node_modules/pss/esm/styles/opacity.js"),u=n("./node_modules/pss/esm/styles/position.js"),p=n("./node_modules/pss/esm/styles/radius.js"),b=n("./node_modules/pss/esm/styles/sizes.js"),j=n("./node_modules/pss/esm/styles/transform.js"),g=Object(o.a)(i.a,c.a,r.b,l.a,m.a,d.a,u.a,p.a,b.a,j.a),f=Object(a.a)(Object(s.b)("img",{blacklist:["width","height"]}),{target:"eikuqkw0"})("display:block;max-width:100%;height:auto;",g);f.displayName="Image",f.propTypes=Object.assign({},g.propTypes)},"./src/media-object/about.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),i=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),l=n("./node_modules/react/index.js"),m=n.n(l),d=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),p=n("./node_modules/react-feather/dist/index.js"),b=n("./src/image/index.js"),j=n("./node_modules/@exah/utils/esm/fns.js"),g=n("./src/utils.js"),f=n("./src/flex-box/index.js"),O=n("./src/box/index.js"),M=Object(j.b)(Object(g.b)("MediaObject"),Object(g.c)(f.a),Object(g.a)({alignItems:"flex-start"}))(f.a),h=Object(j.b)(Object(g.b)("MediaObject.Side"),Object(g.c)(O.b),Object(g.a)({flex:"0 0 auto"}))(O.b),E=Object(j.b)(Object(g.b)("MediaObject.Content"),Object(g.c)(O.b),Object(g.a)({flex:"1",minWidth:0}))(O.b);Object.assign(M,{Side:h,Content:E}),n.d(t,"default",function(){return _});var _=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).layout=null,n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=Object(a.a)(e,["components"]);return m.a.createElement(d.MDXTag,{name:"wrapper",components:t},m.a.createElement(d.MDXTag,{name:"h1",components:t,props:{id:"mediaobject"}},"MediaObject"),m.a.createElement(d.MDXTag,{name:"h2",components:t,props:{id:"description"}},"Description"),m.a.createElement(d.MDXTag,{name:"p",components:t},"Implements ",m.a.createElement(d.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code"}},"Media Object")," with ",m.a.createElement(d.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"#/flex-box"}},m.a.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"FlexBox"))," - one of most useful layout components."),m.a.createElement(d.MDXTag,{name:"p",components:t},"Components:"),m.a.createElement(d.MDXTag,{name:"ul",components:t},m.a.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"MediaObject")," \u2014 Container"),m.a.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"MediaObject.Content")," \u2014 Expands to take available space"),m.a.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"MediaObject.Side")," \u2014 Can be placed on left or right and take content size")),m.a.createElement(d.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),m.a.createElement(d.MDXTag,{name:"pre",components:t},m.a.createElement(d.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { MediaObject } from 'pss-components'\n")),m.a.createElement(d.MDXTag,{name:"pre",components:t},m.a.createElement(d.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"<MediaObject>\n  <MediaObject.Side>\n    Side\n  </MediaObject.Side>\n  <MediaObject.Content>\n    Content\n  </MediaObject.Content>\n</MediaObject>\n")),m.a.createElement(d.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),m.a.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"basic"}},"Basic"),m.a.createElement(u.e,{__position:0,__code:'<MediaObject outline="debug" pd={1}>\n  <MediaObject.Side outline="debug" pd={1} mgr={1}>\n    Side\n  </MediaObject.Side>\n  <MediaObject.Content outline="debug" pd={1}>\n    Content\n  </MediaObject.Content>\n</MediaObject>',__scope:{props:this?this.props:n,InfoIcon:p.Info,Image:b.a,MediaObject:M}},m.a.createElement(M,{outline:"debug",pd:1},m.a.createElement(M.Side,{outline:"debug",pd:1,mgr:1},"Side"),m.a.createElement(M.Content,{outline:"debug",pd:1},"Content"))),m.a.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"center-items-with-flex-props"}},"Center items with 'flex' props"),m.a.createElement(u.e,{__position:1,__code:"<MediaObject alignItems=\"center\">\n  <MediaObject.Side mgr>\n    <InfoIcon style={{ display: 'block' }} />\n  </MediaObject.Side>\n  <MediaObject.Content>\n    <div>Centered icon and content</div>\n  </MediaObject.Content>\n</MediaObject>",__scope:{props:this?this.props:n,InfoIcon:p.Info,Image:b.a,MediaObject:M}},m.a.createElement(M,{alignItems:"center"},m.a.createElement(M.Side,{mgr:!0},m.a.createElement(p.Info,{style:{display:"block"}})),m.a.createElement(M.Content,null,m.a.createElement("div",null,"Centered icon and content")))),m.a.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"comment-box"}},"Comment box"),m.a.createElement(u.e,{__position:2,__code:'<MediaObject outline="1px solid" pd={2}>\n  <MediaObject.Side mgr={2}>\n    <Image src="http://placekitten.com/80" alt="" />\n  </MediaObject.Side>\n  <MediaObject.Content>\n    <div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero\n      libero, sit amet commodo sem. Proin a quam vulputate enim consequat\n      sollicitudin. Etiam vitae nunc augue. Sed ac arcu nibh. Suspendisse a\n      lobortis nulla. Maecenas nunc erat, consectetur quis sagittis et,\n      sodales ac nisl. Proin vitae nibh sed massa blandit commodo. Sed ornare\n      tincidunt nibh, vel malesuada orci pellentesque sit amet. Pellentesque\n      velit urna, porttitor a eleifend sit amet, feugiat ac velit. Nulla ut\n      nunc sit amet lorem dictum suscipit. Maecenas ullamcorper feugiat erat\n      nec ornare.\n    </div>\n  </MediaObject.Content>\n</MediaObject>',__scope:{props:this?this.props:n,InfoIcon:p.Info,Image:b.a,MediaObject:M}},m.a.createElement(M,{outline:"1px solid",pd:2},m.a.createElement(M.Side,{mgr:2},m.a.createElement(b.a,{src:"http://placekitten.com/80",alt:""})),m.a.createElement(M.Content,null,m.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero libero, sit amet commodo sem. Proin a quam vulputate enim consequat sollicitudin. Etiam vitae nunc augue. Sed ac arcu nibh. Suspendisse a lobortis nulla. Maecenas nunc erat, consectetur quis sagittis et, sodales ac nisl. Proin vitae nibh sed massa blandit commodo. Sed ornare tincidunt nibh, vel malesuada orci pellentesque sit amet. Pellentesque velit urna, porttitor a eleifend sit amet, feugiat ac velit. Nulla ut nunc sit amet lorem dictum suscipit. Maecenas ullamcorper feugiat erat nec ornare.")))),m.a.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"side-can-be-placed-before-and-after-content"}},"Side can be placed before and after Content"),m.a.createElement(u.e,{__position:3,__code:'<MediaObject outline="1px solid" pd={2}>\n  <MediaObject.Content>\n    <div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero\n      libero, sit amet commodo sem. Proin a quam vulputate enim consequat\n      sollicitudin. Etiam vitae nunc augue. Sed ac arcu nibh. Suspendisse a\n      lobortis nulla. Maecenas nunc erat, consectetur quis sagittis et,\n      sodales ac nisl. Proin vitae nibh sed massa blandit commodo. Sed ornare\n      tincidunt nibh, vel malesuada orci pellentesque sit amet. Pellentesque\n      velit urna, porttitor a eleifend sit amet, feugiat ac velit. Nulla ut\n      nunc sit amet lorem dictum suscipit. Maecenas ullamcorper feugiat erat\n      nec ornare.\n    </div>\n  </MediaObject.Content>\n  <MediaObject.Side mgl={2}>\n    <Image src="http://placekitten.com/80" alt="" />\n  </MediaObject.Side>\n</MediaObject>',__scope:{props:this?this.props:n,InfoIcon:p.Info,Image:b.a,MediaObject:M}},m.a.createElement(M,{outline:"1px solid",pd:2},m.a.createElement(M.Content,null,m.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero libero, sit amet commodo sem. Proin a quam vulputate enim consequat sollicitudin. Etiam vitae nunc augue. Sed ac arcu nibh. Suspendisse a lobortis nulla. Maecenas nunc erat, consectetur quis sagittis et, sodales ac nisl. Proin vitae nibh sed massa blandit commodo. Sed ornare tincidunt nibh, vel malesuada orci pellentesque sit amet. Pellentesque velit urna, porttitor a eleifend sit amet, feugiat ac velit. Nulla ut nunc sit amet lorem dictum suscipit. Maecenas ullamcorper feugiat erat nec ornare.")),m.a.createElement(M.Side,{mgl:2},m.a.createElement(b.a,{src:"http://placekitten.com/80",alt:""})))))}}]),t}(m.a.Component)},"./src/utils.js":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return l});var a=n("./node_modules/react/index.js"),s=n.n(a),o=n("./node_modules/@exah/utils/esm/checks.js"),i=function(e){return function(t){return function(n){return s.a.createElement(t,e(n))}}},c=function(e){return i(function(t){return Object.assign({},Object(o.c)(e)?e(t):e,t)})},r=function(e){return i(function(t){return Object.assign({},t,Object(o.c)(e)?e(t):e)})},l=function(e){return function(t){return Object.assign(t,{displayName:e})}},m=function(e){return function(t){return Object.assign(t,{propTypes:Object.assign({},e.propTypes)})}}}}]);
//# sourceMappingURL=media-object-about.3c20a426c0ac798907dd.js.map