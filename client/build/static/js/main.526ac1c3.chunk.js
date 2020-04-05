(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),s=(a(28),a(29),a(11)),o=a(1),i=a.n(o),u=a(3),m=a(2),d=a(5),p=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),l=Object(m.a)(r,2),s=l[0],o=l[1];return{loading:a,error:s,request:Object(n.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,l,s,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,r=u.length>3&&void 0!==u[3]?u[3]:{},c(!0),e.prev=4,n&&(n=JSON.stringify(n),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:r});case 8:return l=e.sent,e.next=11,l.json();case 11:if(s=e.sent,l.ok){e.next=14;break}throw new Error(s.message||"Something wrong");case 14:return c(!1),e.abrupt("return",s);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),o(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(n.useCallback)((function(){return o(null)}),[])}};function E(){}var v=Object(n.createContext)({token:null,userId:null,login:E,logout:E,isAuthenticated:!1}),b=function(){return c.a.createElement("div",{className:"preloader-wrapper active"},c.a.createElement("div",{className:"spinner-layer spinner-red-only"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},f=function(e){var t=e.item;return c.a.createElement("div",{className:"col s6 m4 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"https://materializecss.com/images/sample-1.jpg"}),c.a.createElement("span",{className:"card-title"},t.name)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.description))))},h=function(e){var t=e.items;return t.length?c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement(f,{item:e})}))):c.a.createElement("p",{className:"center"},"There is no items")},O=function(){var e=Object(n.useContext)(v).token,t=p(),a=t.request,r=t.loading,l=Object(n.useState)(null),o=Object(m.a)(l,2),E=o[0],f=o[1],O=Object(s.h)().id,j=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/item/".concat(O),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,f(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,O,a]);return Object(n.useEffect)((function(){j()}),[j]),r?c.a.createElement(b,null):c.a.createElement("div",null,!r&&E&&c.a.createElement(h,{items:E}),c.a.createElement("div",null,c.a.createElement(d.b,{to:"/create_item/".concat(O)},"ADD ITEM")))},j=function(e){var t=e.collection,a=Object(n.useContext)(v),r=p().request,l=Object(s.g)(),o=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/collection/"+t._id,"DELETE",null,{Authorization:"Bearer ".concat(a.token)});case 3:l.push("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},t.name),c.a.createElement("p",null,t.type)),c.a.createElement("div",{className:"card-actions"},c.a.createElement("a",{href:"/collection/"+t._id,className:"waves-effect waves-light btn"},"Open Collection"),c.a.createElement("a",{className:"waves-effect waves-light btn",onClick:o},"Delete"))))},g=function(e){var t=e.collections;return t.length?c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement(j,{collection:e})}))):c.a.createElement("p",{className:"center"},"There is no collections")},N=function(){var e=p(),t=e.request,a=e.loading,r=Object(n.useState)([]),l=Object(m.a)(r,2),s=l[0],o=l[1],d=Object(n.useCallback)(Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/api/collection/all","GET",null);case 3:a=e.sent,o(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(n.useEffect)((function(){d()}),[d]),a?c.a.createElement(b,null):c.a.createElement("div",null,!a&&c.a.createElement(g,{collections:s}))},w=function(e){var t=e.user;return c.a.createElement("div",{className:"col s6 m4 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.email)),c.a.createElement("div",{className:"card-actions"},c.a.createElement("button",null,"Make Admin"),c.a.createElement("button",null,"Delete User"))))},k=function(e){var t=e.users;return t.length?c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement(w,{user:e})}))):c.a.createElement("p",{className:"center"},"There is no users")},x=function(){var e=Object(n.useContext)(v).token,t=p(),a=t.request,r=t.loading,l=Object(n.useState)(null),s=Object(m.a)(l,2),o=s[0],d=s[1],E=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/user","GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,d(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]);return Object(n.useEffect)((function(){E()}),[E]),r?c.a.createElement(b,null):c.a.createElement("div",null,!r&&o&&c.a.createElement(k,{users:o}))},C=function(){var e=Object(n.useContext)(v).token,t=p(),a=t.request,r=t.loading,l=Object(n.useState)([]),s=Object(m.a)(l,2),o=s[0],d=s[1],E=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/collection","GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,d(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]);return Object(n.useEffect)((function(){E()}),[E]),r?c.a.createElement(b,null):c.a.createElement("div",null,!r&&c.a.createElement(g,{collections:o}))},y=a(10),S=a(8),T=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},I=function(){var e=Object(s.g)(),t=Object(n.useContext)(v),a=p().request,r=Object(n.useState)({type:"",name:""}),l=Object(m.a)(r,2),o=l[0],d=l[1],E=T(),b=function(e){d(Object(S.a)({},o,Object(y.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var f=function(){var n=Object(u.a)(i.a.mark((function n(){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a("/api/collection/create","POST",Object(S.a)({},o),{Authorization:"Bearer ".concat(t.token)});case 3:(c=n.sent)&&E("Collection created"),e.push("/collection/".concat(c.collection._id)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s8 offset-s2"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{className:"browser-default",id:"type",name:"type",value:o.type,onChange:b},c.a.createElement("option",{disabled:!0,value:""},"Choose Collection"),c.a.createElement("option",{value:"Books"},"Books"),c.a.createElement("option",{value:"Coins"},"Coins"),c.a.createElement("option",{value:"Other"},"Smth else")),c.a.createElement("label",{className:"active",htmlFor:"type"},"Type")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"name",id:"name",type:"text",className:"validate",value:o.name,onChange:b}),c.a.createElement("label",{className:"active",htmlFor:"name"},"Name")),c.a.createElement("div",null,c.a.createElement("button",{onClick:f,className:"waves-effect waves-light btn"},"Create Collection"))))},A=function(){var e=Object(n.useContext)(v),t=T(),a=p(),r=a.loading,l=a.request,s=a.error,o=a.clearError,d=Object(n.useState)({email:"",password:""}),E=Object(m.a)(d,2),b=E[0],f=E[1];Object(n.useEffect)((function(){t(s),o()}),[s,t,o]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var h=function(e){f(Object(S.a)({},b,Object(y.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/register","POST",Object(S.a)({},b));case 3:a=e.sent,t(a.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("/api/auth/login","POST",Object(S.a)({},b));case 3:a=t.sent,e.login(a.token,a.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 offset-s3"},c.a.createElement("h1",null,"collectION"),c.a.createElement("div",{className:"card blue darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),c.a.createElement("div",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input",value:b.email,onChange:h}),c.a.createElement("label",{htmlFor:"email"},"Email")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input",value:b.password,onChange:h}),c.a.createElement("label",{htmlFor:"email"},"\u041f\u0430\u0440\u043e\u043b\u044c")))),c.a.createElement("div",{className:"card-action"},c.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:r,onClick:j},"\u0412\u043e\u0439\u0442\u0438"),c.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:O,disabled:r},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))},B=function(){var e=Object(n.useContext)(v),t=Object(s.h)().id,a=p().request,r=Object(n.useState)({name:"",col:t,description:""}),l=Object(m.a)(r,2),o=l[0],d=l[1],E=T(),b=function(e){d(Object(S.a)({},o,Object(y.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var f=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/item/create","POST",Object(S.a)({},o),{Authorization:"Bearer ".concat(e.token)});case 3:t.sent&&E("Item added"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s8 offset-s2"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"name",id:"name",type:"text",className:"validate",value:o.name,onChange:b}),c.a.createElement("label",{className:"active",htmlFor:"name"},"Name")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"description",id:"description",type:"text",className:"validate",value:o.description,onChange:b}),c.a.createElement("label",{className:"active",htmlFor:"description"},"Description")),c.a.createElement("div",null,c.a.createElement("button",{onClick:f,className:"waves-effect waves-light btn"},"Create Item"))))},D=function(e){var t=Object(n.useContext)(v),a=Object(s.g)();return e.value?c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.c,{to:"/",className:"brand-logo"},"collectION"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/user"},"My Profile")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/create_collection"},"Create New Collection")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/users"},"Users List")),c.a.createElement("li",null,c.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),t.logout(),a.push("/")}},"Log out")))))):c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.c,{to:"/",className:"brand-logo"},"collectION"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/auth"},"Log in/Sign up"))))))};var q=function(){var e=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(m.a)(r,2),s=l[0],o=l[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),d=u[0],p=u[1],E=Object(n.useCallback)((function(e,t){c(e),p(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),v=Object(n.useCallback)((function(){c(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&E(e.token,e.userId),o(!0)}),[E]),{login:E,logout:v,token:a,userId:d,ready:s}}(),t=e.login,a=e.logout,r=e.token,l=e.userId,o=e.ready,i=!!r,u=function(e,t){return t?c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(s.b,{path:"/user",exact:!0},c.a.createElement(C,null)),c.a.createElement(s.b,{path:"/create_collection",exact:!0},c.a.createElement(I,null)),c.a.createElement(s.b,{path:"/create_item/:id"},c.a.createElement(B,null)),c.a.createElement(s.b,{path:"/users",exact:!0},c.a.createElement(x,null)),c.a.createElement(s.b,{path:"/collection/:id"},c.a.createElement(O,null)),c.a.createElement(s.a,{to:"/"})):e?c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(s.b,{path:"/user",exact:!0},c.a.createElement(C,null)),c.a.createElement(s.b,{path:"/users",exact:!0},c.a.createElement(x,null)),c.a.createElement(s.b,{path:"/create_collection",exact:!0},c.a.createElement(I,null)),c.a.createElement(s.b,{path:"/create_item/:id"},c.a.createElement(B,null)),c.a.createElement(s.b,{path:"/collection/:id"},c.a.createElement(O,null)),c.a.createElement(s.a,{to:"/"})):c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/auth"},c.a.createElement(A,null)),c.a.createElement(s.b,{path:"/"},c.a.createElement(N,null)),c.a.createElement(s.a,{to:"/auth"}))}(i);return o?c.a.createElement(v.Provider,{value:{token:r,login:t,logout:a,userId:l,isAuthenticated:i}},c.a.createElement(d.a,null,c.a.createElement(D,{value:i}),c.a.createElement("div",{className:"container"},u))):c.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.526ac1c3.chunk.js.map