(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(5),i=n(6),a=n(9),u=n(7),l=n(8),b=n(1),h=n.n(b),d=(n(14),n(15),n(2)),p=n.n(d),j=n(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function f(t,e){var n=e.sortType,r=e.isReversed,c=Object(l.a)(t).sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;case s.NONE:return 0;default:throw new Error("Unknown value of sort type - ".concat(n))}}));return r?c.reverse():c}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var O=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":r!==s.ALPHABET}),onClick:function(){return t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":r!==s.LENGTH}),onClick:function(){return t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!n}),onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(r!==s.NONE||n)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({isReversed:!1,sortType:s.NONE})},children:"Reset"})]}),Object(j.jsx)("ul",{children:f(N,this.state).map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(h.a.Component);c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7fe591d6.chunk.js.map