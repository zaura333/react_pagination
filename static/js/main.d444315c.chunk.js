(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{28:function(e,a,c){},31:function(e,a,c){"use strict";c.r(a);var t=c(16),n=c.n(t),i=c(4),r=c(0),l=c(2),s=c(23);c(28);var o=c(22),j=c.n(o),d=c(5),u=function(e){for(var a=e.total,c=e.perPage,t=e.currentPage,n=void 0===t?1:t,i=e.onPageChange,r=Math.ceil(a/c),l=[],s=1;s<=r;s+=1)l.push(String(s));var o=1===n,u=n===Number(l.at(-1));return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:j()("page-item",{disabled:o}),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:function(){o||i(n-1)},children:"\xab"})}),l.map((function(e){return Object(d.jsx)("li",{className:"page-item ".concat(Number(e)===n?"active":""),children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return i(+e)},children:e})},e)})),Object(d.jsx)("li",{className:j()("page-item",{disabled:u}),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":u,onClick:function(){u||i(n+1)},children:"\xbb"})})]})},h=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)([]),o=Object(i.a)(n,2),j=o[0],b=o[1],g=Object(l.k)(),p=Object(l.m)(),m=new URLSearchParams(g.search),O=Number(m.get("page"))||1;Object(r.useEffect)((function(){var e=c*(O-1),a=e+c;b(h.slice(e,a))}),[c,O]);var f=h.indexOf(j[0])+1,x=h.indexOf(j[j.length-1])+1;return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(O," (items ").concat(f," - ").concat(x," of ").concat(h.length,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(+e.target.value),m.set("page","1")},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(u,{total:h.length,perPage:c,currentPage:O,onPageChange:function(e){m.set("page",String(e)),p({search:m.toString()})}}),Object(d.jsx)("ul",{children:j.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})})};n.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d444315c.chunk.js.map