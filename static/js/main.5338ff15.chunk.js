(this.webpackJsonpcode_editor=this.webpackJsonpcode_editor||[]).push([[0],{11:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(5),r=n.n(o),s=(n(11),n(2)),i=(n(12),n(13),n(14),n(15),n(16),n(6)),l=n(0);var u=function(t){var e=t.language,n=t.displayName,c=t.value,o=t.onChange,r=Object(a.useState)(!0),u=Object(s.a)(r,2),j=u[0],d=u[1];return Object(l.jsxs)("div",{className:"editor-container ".concat(j?"":"collapsed"),children:[Object(l.jsxs)("div",{className:"editor-title",children:[n,Object(l.jsx)("button",{onClick:function(){return d((function(t){return!t}))},children:"O/C"})]}),Object(l.jsx)(i.Controlled,{onBeforeChange:function(t,e,n){o(n)},value:c,className:"code-mirroe-wrapper",options:{lineWrapping:!0,lint:!0,mode:e,theme:"material",lineNumbers:!0}})]})};var j=function(t,e){var n="codepen-clone"+t,c=Object(a.useState)((function(){var t=localStorage.getItem(n);return null!=t?JSON.parse(t):"function"===typeof e?e():e})),o=Object(s.a)(c,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,i]};var d=function(){var t=j("html",""),e=Object(s.a)(t,2),n=e[0],c=e[1],o=j("css",""),r=Object(s.a)(o,2),i=r[0],d=r[1],b=j("js",""),p=Object(s.a)(b,2),m=p[0],O=p[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),h=g[0],v=g[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){v("\n\t\t\t<html>\n\t\t\t\t<body>".concat(n,"</body>\n\t\t\t\t<style>").concat(i,"</style>\n\t\t\t\t<script>").concat(m,"<\/script>\n\t\t\t</html>\n\t\t\t"))}),250);return function(){return clearTimeout(t)}}),[n,i,m]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"pane top-pane",children:[Object(l.jsx)(u,{language:"xml",displayName:"HTML",value:n,onChange:c}),Object(l.jsx)(u,{language:"css",displayName:"CSS",value:i,onChange:d}),Object(l.jsx)(u,{language:"javascript",displayName:"Javascript",value:m,onChange:O})]}),Object(l.jsx)("div",{className:"pane bottom-pane",children:Object(l.jsx)("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.5338ff15.chunk.js.map