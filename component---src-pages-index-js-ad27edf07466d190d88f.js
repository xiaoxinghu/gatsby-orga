webpackJsonp([35783957827783],{188:function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,i=c&&c(Object);e.exports=function e(t,p,f){if("string"!=typeof p){if(i){var s=c(p);s&&s!==i&&e(t,s,f)}var d=a(p);l&&(d=d.concat(l(p)));for(var y=0;y<d.length;++y){var m=d[y];if(!(r[m]||n[m]||f&&f[m])){var g=u(p,m);try{o(t,m,g)}catch(e){}}}return t}return t}},254:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(4),c=n(u),i=r(184),p=n(i),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.allOrga.edges,t=e.map(function(e){var t=e.node,r=t.meta.title||t.fields.slug,n=t.meta.date||"no date";return c.default.createElement("div",null,c.default.createElement("h3",{style:{marginBottom:"0.2em"}},c.default.createElement(p.default,{to:t.fields.slug},r)),c.default.createElement("small",null,n))});return c.default.createElement("div",null,c.default.createElement("h1",null,"Hi org-mode people"),c.default.createElement("p",null,"Welcome to your new org-mode based Gatsby site."),t)},t}(c.default.Component);t.default=f;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-ad27edf07466d190d88f.js.map