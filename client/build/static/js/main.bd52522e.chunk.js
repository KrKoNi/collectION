(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){e.exports=a(224)},117:function(e,t,a){},127:function(e,t){},129:function(e,t){},167:function(e,t){},168:function(e,t){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(108),l=a.n(r),s=(a(117),a(118),a(21)),i=a(15),o=a(10),u=a(1),m=a.n(u),d=a(5),p=a(4),E=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),l=Object(p.a)(r,2),s=l[0],i=l[1];return{loading:a,error:s,request:Object(n.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,l,s,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},c(!0),e.prev=4,n&&(n=JSON.stringify(n),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:r});case 8:return l=e.sent,e.next=11,l.json();case 11:if(s=e.sent,l.ok){e.next=14;break}throw new Error(s.message||"Something wrong");case 14:return c(!1),e.abrupt("return",s);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(n.useCallback)((function(){return i(null)}),[])}};function v(){}var b=Object(n.createContext)({token:null,userId:null,login:v,logout:v,isAuthenticated:!1,isAdmin:!1}),f=function(){return c.a.createElement("div",{className:"preloader-wrapper active"},c.a.createElement("div",{className:"spinner-layer spinner-red-only"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},h=function(e){var t=e.item;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"https://materializecss.com/images/sample-1.jpg"}),c.a.createElement("span",{className:"card-title"},t.name)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.description)))},O=function(e){var t=e.items;return t.length?c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(h,{item:e})}))):c.a.createElement("p",{className:"center"},"There is no item")},g=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},w=function(){var e=Object(n.useContext)(b),t=e.token,a=(e.userId,E()),r=a.request,l=a.loading,u=Object(n.useState)(null),v=Object(p.a)(u,2),h=v[0],w=v[1],j=Object(s.h)().id,N=Object(n.useCallback)(Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/item/".concat(j),"GET",null,{Authorization:"Bearer ".concat(t)});case 3:a=e.sent,w(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t,j,r]);Object(n.useEffect)((function(){N()}),[N]);var x=Object(n.useState)({name:"",col:j,description:""}),k=Object(p.a)(x,2),C=k[0],y=k[1],S=g(),T=function(e){y(Object(o.a)({},C,Object(i.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var A=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/item/create","POST",Object(o.a)({},C),{Authorization:"Bearer ".concat(t)});case 3:e.sent&&S("Item added"),window.location="/collection/".concat(j),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l?c.a.createElement(f,null):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m4 l3"},!l&&h&&c.a.createElement(O,{items:h}),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"https://materializecss.com/images/sample-1.jpg"})),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"name",id:"name",type:"text",className:"validate",value:C.name,onChange:T}),c.a.createElement("label",{className:"active",htmlFor:"name"},"Name")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"description",id:"description",type:"text",className:"validate",value:C.description,onChange:T}),c.a.createElement("label",{className:"active",htmlFor:"description"},"Description"))),c.a.createElement("div",null,c.a.createElement("button",{onClick:A,className:"waves-effect waves-light btn"},"Create Item")))))},j=function(e){var t=e.collection,a=Object(n.useContext)(b),r=E().request,l=Object(s.g)(),i=Object(n.useState)(),o=Object(p.a)(i,2),u=o[0],v=o[1],f=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/collection/"+t._id,"DELETE",null,{Authorization:"Bearer ".concat(a.token)});case 3:l.push("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=Object(n.useCallback)(Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/user/"+t.owner,"GET",null,{Authorization:"Bearer ".concat(a.token)});case 3:n=e.sent,v(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a.token,r,t.owner]);return Object(n.useEffect)((function(){h()}),[h]),c.a.createElement("li",{className:"collection-item avatar"},c.a.createElement("img",{src:"images/yuna.jpg",alt:"",className:"circle"}),c.a.createElement("span",{className:"title"},t.name),c.a.createElement("p",null,t.type,c.a.createElement("br",null),"author: ",u&&u.username),c.a.createElement("a",{href:"/collection/"+t._id,className:"waves-effect waves-light btn"},"Open Collection")," ",c.a.createElement("a",{className:"waves-effect waves-light btn",onClick:f},"Delete"))},N=function(e){var t=e.collections;return t.length?c.a.createElement("ul",{className:"collection"},t.map((function(e){return c.a.createElement(j,{collection:e})}))):c.a.createElement("p",{className:"center"},"There is no collection")},x=function(){var e=E(),t=e.request,a=e.loading,r=Object(n.useState)([]),l=Object(p.a)(r,2),s=l[0],i=l[1],o=Object(n.useCallback)(Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/api/collection/all","GET",null);case 3:a=e.sent,i(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(n.useEffect)((function(){o()}),[o]),a?c.a.createElement(f,null):c.a.createElement("div",null,c.a.createElement(N,{collections:s}))},k=function(e){var t=e.user,a=Object(n.useContext)(b),r=E().request,l=Object(s.g)(),i=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/user/"+t._id,"DELETE",null,{Authorization:"Bearer ".concat(a.token)});case 3:l.push("/users"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/user/make_admin/"+t._id,"POST",null,{Authorization:"Bearer ".concat(a.token)});case 3:l.push("/users"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("tr",null,c.a.createElement("td",null,t.email),c.a.createElement("td",null,t.username),c.a.createElement("td",null,t.isAdmin.toString()),c.a.createElement("td",null,t.isAdmin?null:c.a.createElement("button",{className:"waves-effect waves-light btn",onClick:o},"Make Admin")," ",c.a.createElement("button",{className:"waves-effect waves-light btn",onClick:i},"Delete User")))},C=function(e){var t=e.users;return t.length?c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"striped highlight responsive-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"E-mail"),c.a.createElement("th",null,"Username"),c.a.createElement("th",null,"Admin Status"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(k,{user:e})}))))):c.a.createElement("p",{className:"center"},"There is no users")},y=function(){var e=Object(n.useContext)(b).token,t=E(),a=t.request,r=t.loading,l=Object(n.useState)(null),s=Object(p.a)(l,2),i=s[0],o=s[1],u=Object(n.useCallback)(Object(d.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/user","GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]);return Object(n.useEffect)((function(){u()}),[u]),r?c.a.createElement(f,null):c.a.createElement("div",null,!r&&i&&c.a.createElement(C,{users:i}))},S=function(e){var t=e.user;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{class:"card blue-grey darken-1"},c.a.createElement("div",{class:"card-content white-text"},c.a.createElement("span",{class:"card-title"},t.username),c.a.createElement("p",null,"email: ",t.email),c.a.createElement("p",null,"admin status: ",t.isAdmin.toString()),c.a.createElement("p",null,"created at: ",t.createdAt.slice(0,10))))))},T=function(){var e=Object(n.useContext)(b).token,t=E(),a=t.request,r=t.loading,l=Object(n.useState)([]),s=Object(p.a)(l,2),i=s[0],o=s[1],u=Object(n.useCallback)(Object(d.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/collection","GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]),v=Object(n.useState)(),h=Object(p.a)(v,2),O=h[0],g=h[1],w=Object(n.useCallback)(Object(d.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/user/profile","GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,g(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]);return Object(n.useEffect)((function(){u(),w()}),[u,w]),r?c.a.createElement(f,null):c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"box-1"},!r&&O&&c.a.createElement(S,{user:O})),c.a.createElement("div",{className:"box-2"},!r&&c.a.createElement(N,{collections:i})))},A=function(){var e=Object(s.g)(),t=Object(n.useContext)(b),a=E().request,r=Object(n.useState)({type:"",name:""}),l=Object(p.a)(r,2),u=l[0],v=l[1],f=g(),h=function(e){v(Object(o.a)({},u,Object(i.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var O=function(){var n=Object(d.a)(m.a.mark((function n(){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a("/api/collection/create","POST",Object(o.a)({},u),{Authorization:"Bearer ".concat(t.token)});case 3:(c=n.sent)&&f("Collection created"),e.push("/collection/".concat(c.collection._id)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s8 offset-s2"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{className:"browser-default",id:"type",name:"type",value:u.type,onChange:h},c.a.createElement("option",{disabled:!0,value:""},"Choose Collection"),c.a.createElement("option",{value:"Books"},"Books"),c.a.createElement("option",{value:"Coins"},"Coins"),c.a.createElement("option",{value:"Other"},"Smth else")),c.a.createElement("label",{className:"active",htmlFor:"type"},"Type")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"name",id:"name",type:"text",className:"validate",value:u.name,onChange:h}),c.a.createElement("label",{className:"active",htmlFor:"name"},"Name")),c.a.createElement("div",null,c.a.createElement("button",{onClick:O,className:"waves-effect waves-light btn"},"Create Collection"))))},I=function(){Object(n.useContext)(b);var e=g(),t=E(),a=t.loading,r=t.request,l=t.error,s=t.clearError,u=Object(n.useState)({email:"",password:""}),v=Object(p.a)(u,2),f=v[0],h=v[1];Object(n.useEffect)((function(){e(l),s()}),[l,e,s]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var O=function(e){h(Object(o.a)({},f,Object(i.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(d.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r("/api/auth/register","POST",Object(o.a)({},f));case 3:a=t.sent,e(a.message),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 offset-s3"},c.a.createElement("h1",null,"collectION"),c.a.createElement("div",{className:"card blue darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},"Sign Up"),c.a.createElement("div",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"Enter e-mail",id:"email",type:"text",name:"email",value:f.email,onChange:O}),c.a.createElement("label",{htmlFor:"email"},"Email")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"Enter username",id:"username",type:"text",name:"username",value:f.username,onChange:O}),c.a.createElement("label",{htmlFor:"username"},"Username")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",value:f.password,onChange:O}),c.a.createElement("label",{htmlFor:"password"},"Password")))),c.a.createElement("div",{className:"card-action"},c.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:w,disabled:a},"Sign Up")))))},F=function(){var e=Object(n.useContext)(b),t=Object(s.h)().id,a=E().request,r=Object(n.useState)({name:"",col:t,description:""}),l=Object(p.a)(r,2),u=l[0],v=l[1],f=g(),h=function(e){v(Object(o.a)({},u,Object(i.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var O=function(){var t=Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/item/create","POST",Object(o.a)({},u),{Authorization:"Bearer ".concat(e.token)});case 3:t.sent&&f("Item added"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s8 offset-s2"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"name",id:"name",type:"text",className:"validate",value:u.name,onChange:h}),c.a.createElement("label",{className:"active",htmlFor:"name"},"Name")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{name:"description",id:"description",type:"text",className:"validate",value:u.description,onChange:h}),c.a.createElement("label",{className:"active",htmlFor:"description"},"Description")),c.a.createElement("div",null,c.a.createElement("button",{onClick:O,className:"waves-effect waves-light btn"},"Create Item"))))},B=function(){var e=Object(n.useContext)(b),t=g(),a=E(),r=a.loading,l=a.request,s=a.error,u=a.clearError,v=Object(n.useState)({email:"",password:""}),f=Object(p.a)(v,2),h=f[0],O=f[1];Object(n.useEffect)((function(){t(s),u()}),[s,t,u]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var w=function(e){O(Object(o.a)({},h,Object(i.a)({},e.target.name,e.target.value)))},j=function(){var t=Object(d.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("/api/auth/login","POST",Object(o.a)({},h));case 3:a=t.sent,e.login(a.token,a.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 offset-s3"},c.a.createElement("h1",null,"collectION"),c.a.createElement("div",{className:"card blue darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},"Log in"),c.a.createElement("div",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"Enter e-mail or username",id:"username",type:"text",name:"username",value:h.username,onChange:w}),c.a.createElement("label",{htmlFor:"username"},"Email / Username")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input",value:h.password,onChange:w}),c.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c")))),c.a.createElement("div",{className:"card-action"},c.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:r,onClick:j},"\u0412\u043e\u0439\u0442\u0438")))))},z=a(7),_=function(){var e=Object(n.useContext)(b),t=Object(s.g)(),a=function(a){a.preventDefault(),e.logout(),t.push("/")};return e.isAdmin?c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(z.b,{to:"/",className:"brand-logo"},"collectION"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(z.b,{to:"/user"},"My Profile")),c.a.createElement("li",null,c.a.createElement(z.b,{to:"/create_collection"},"Create New Collection")),c.a.createElement("li",null,c.a.createElement(z.b,{to:"/users"},"Users List")),c.a.createElement("li",null,c.a.createElement("a",{href:"/",onClick:a},"Log out")))))):e.isAuthenticated?c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(z.b,{to:"/",className:"brand-logo"},"collectION"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(z.b,{to:"/user"},"My Profile")),c.a.createElement("li",null,c.a.createElement(z.b,{to:"/create_collection"},"Create New Collection")),c.a.createElement("li",null,c.a.createElement("a",{href:"/",onClick:a},"Log out")))))):c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(z.b,{to:"/",className:"brand-logo"},"collectION"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(z.b,{to:"/auth"},"Sign up")),c.a.createElement("li",null,c.a.createElement(z.b,{to:"/login"},"Log in"))))))},q=a(111);var D=function(){var e=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(p.a)(r,2),s=l[0],i=l[1],o=Object(n.useState)(null),u=Object(p.a)(o,2),m=u[0],d=u[1],E=Object(n.useCallback)((function(e,t){c(e),d(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),v=Object(n.useCallback)((function(){c(null),d(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&E(e.token,e.userId),i(!0)}),[E]),{login:E,logout:v,token:a,userId:m,ready:s}}(),t=e.login,a=e.logout,r=e.token,l=e.userId,i=e.ready,o=!!r,u=!(!o||!r)&&Object(q.decode)(r,"uhsduh92hfhwes8hwbdguwrgho213rtrio"),m=!!u&&u.adminStatus,d=function(e,t){return t?c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0},c.a.createElement(x,null)),c.a.createElement(s.b,{path:"/user",exact:!0},c.a.createElement(T,null)),c.a.createElement(s.b,{path:"/users",exact:!0},c.a.createElement(y,null)),c.a.createElement(s.b,{path:"/create_collection",exact:!0},c.a.createElement(A,null)),c.a.createElement(s.b,{path:"/create_item/:id"},c.a.createElement(F,null)),c.a.createElement(s.b,{path:"/collection/:id"},c.a.createElement(w,null)),c.a.createElement(s.a,{to:"/"})):e?c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0},c.a.createElement(x,null)),c.a.createElement(s.b,{path:"/user",exact:!0},c.a.createElement(T,null)),c.a.createElement(s.b,{path:"/create_collection",exact:!0},c.a.createElement(A,null)),c.a.createElement(s.b,{path:"/create_item/:id"},c.a.createElement(F,null)),c.a.createElement(s.b,{path:"/collection/:id"},c.a.createElement(w,null)),c.a.createElement(s.a,{to:"/"})):c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/auth"},c.a.createElement(I,null)),c.a.createElement(s.b,{path:"/login"},c.a.createElement(B,null)),c.a.createElement(s.b,{path:"/"},c.a.createElement(x,null)),c.a.createElement(s.a,{to:"/auth"}))}(o,m);return i?c.a.createElement(b.Provider,{value:{token:r,login:t,logout:a,userId:l,isAuthenticated:o,isAdmin:m}},c.a.createElement(z.a,null,c.a.createElement(_,null),c.a.createElement("div",{className:"container"},d))):c.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.bd52522e.chunk.js.map