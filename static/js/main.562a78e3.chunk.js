(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(74),a(28)),m=a(6),s=(a(75),a(18)),u=(a(46),a(76),a(59)),i=a.n(u);function E(e){var t=e.user,a=e.modalVisible,n=e.toggler;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-body"},l.a.createElement(i.a,{style:{cursor:"pointer",marginLeft:490,marginTop:-20},onClick:n}),l.a.createElement("p",{className:"modal-text"},l.a.createElement("strong",null,"First Name: ")," ",t.first_name),l.a.createElement("p",{className:"modal-text"},l.a.createElement("strong",null,"Last Name: ")," ",t.last_name),l.a.createElement("p",{className:"modal-text"},l.a.createElement("strong",null,"Email: ")," ",t.email))))}function f(e){var t=e.user,a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1],m=function(){o((function(e){return!e}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card",onClick:m},l.a.createElement("p",{className:"card-text"},l.a.createElement("strong",null,"First Name: ")," ",t.first_name),l.a.createElement("p",{className:"card-text"},l.a.createElement("strong",null,"Last Name: ")," ",t.last_name),l.a.createElement("img",{className:"card-img",src:t.avatar,alt:"avatar"})),l.a.createElement(E,{user:t,modalVisible:c,toggler:m}))}var p=a(40),d=a.n(p),v=a(60),b=a(61),g=a.n(b);function h(){return(h=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://reqres.in/api/users?page=2");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){r(e)})).catch((function(e){console.log(e)}))}),[r]),a.map((function(e){return l.a.createElement(f,{user:e,key:e.id})}))}a(99);var y=function(){return l.a.createElement("div",{className:"home"},l.a.createElement(N,null))},k=a(66),j=(a(100),a(101),a(136));function x(e){var t=e.todos,a=e.deleteTodo;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"list-group"},t.map((function(e,t){return l.a.createElement("li",{className:"list-group-item",key:t},l.a.createElement("div",null,l.a.createElement(j.a,{inputProps:{"aria-label":"uncontrolled-checkbox"}}),l.a.createElement("strong",{style:{paddingRight:20}},e),l.a.createElement("small",null,(new Date).toLocaleString())),l.a.createElement("button",{type:"button",className:"btn",onClick:function(){return a(t)}},"\xd7"))}))))}function O(e){var t=e.saveTodo,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(c),o("")}},l.a.createElement("input",{type:"text",className:"form-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",value:c,onChange:function(e){o(e.target.value)}}))}var w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todos"},l.a.createElement(O,{saveTodo:function(e){var t=e.trim();t.length>0&&function(e){r([].concat(Object(k.a)(a),[e]))}(t)}}),l.a.createElement(x,{todos:a,deleteTodo:function(e){var t=a.filter((function(t,a){return a!==e}));r(t)}})))},S=(a(102),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),l.a.createElement("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0440\u0435\u0430\u043a\u0442-\u0445\u0443\u043a\u043e\u0432"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React-router"),l.a.createElement("li",null,"React hooks"),l.a.createElement("li",null,"axios"),l.a.createElement("li",null,"Material-UI"),l.a.createElement("li",null,l.a.createElement("a",{className:"about-list",href:"https://reqres.in"},"REQ RES")),l.a.createElement("li",null,l.a.createElement("a",{className:"about-list",href:"http://numbersapi.com"},"NUMBERS API")))))}),C=(a(58),function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("div",{className:"navbar"}))}),F=a(34),R=a(41),T=a(3),L=a(133),_=a(135),B=a(65),D=a.n(B),I=a(62),M=a.n(I),q=a(64),J=a.n(q),P=a(63),U=a.n(P),V=a(137),W=a(134),A=Object(L.a)({list:{width:250},fullList:{width:"auto"}});function K(){var e=A(),t=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(s.a)(t,2),n=a[0],r=a[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&r(Object(R.a)(Object(R.a)({},n),{},Object(F.a)({},e,t)))}};return l.a.createElement("div",null,["left"].map((function(t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(D.a,{style:{margin:20,cursor:"pointer",color:"white"},onClick:c(t,!0)},t),l.a.createElement(_.a,{anchor:t,open:n[t],onClose:c(t,!1)},function(t){return l.a.createElement("div",{className:Object(T.a)(e.list,Object(F.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:c(t,!1),onKeyDown:c(t,!1)},l.a.createElement(V.a,{style:{margin:20}},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"nav-link"},l.a.createElement(o.b,{exact:!0,to:"/react-test/",className:"nav-text"},l.a.createElement(M.a,null),"\xa0\xa0\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),l.a.createElement("li",{className:"nav-link"},l.a.createElement(o.b,{to:"/react-test/todos",className:"nav-text"},l.a.createElement(U.a,null),"\xa0\xa0Todos")),l.a.createElement("li",{className:"nav-link"},l.a.createElement(o.b,{to:"/react-test/about",className:"nav-text"},l.a.createElement(J.a,null),"\xa0\xa0\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")))),l.a.createElement(W.a,null))}(t)))})))}var Q=function(){return l.a.createElement(o.a,null,l.a.createElement(C,null),l.a.createElement(K,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/react-test",exact:!0,component:y}),l.a.createElement(m.a,{path:"/react-test/todos",component:w}),l.a.createElement(m.a,{path:"/react-test/about",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},58:function(e,t,a){},69:function(e,t,a){e.exports=a(105)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},99:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.562a78e3.chunk.js.map