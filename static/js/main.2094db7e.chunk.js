(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),o=n.n(a),s=(n(27),n(8)),i=n(11),l=n(21),j=n.n(l),d=function(){return j.a.get("https://randomuser.me/api/?results=100")},u=c.a.createContext(),b=(n(46),n(52)),h=n(53),m=n(55),O=n(0);var x=function(){var e=Object(r.useContext)(u).filteredEmployees,t=Object(r.useContext)(u),n=t.sortData,c=t.searchName;return Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",placeholder:"Enter a name",onChange:function(e){return c(e)}}),Object(O.jsx)("p",{className:"text-center mt-2",children:"Enter name to filter the results"})]}),Object(O.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("p",{className:"p-2 m-2 font-weight-bold",children:"Picture"})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{variant:"outline-primary",className:"mt-2",onClick:function(){return n("name")},children:"Name"})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{variant:"outline-primary",className:"mt-2",onClick:function(){return n("location")},children:"Location"})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{variant:"outline-primary",className:"mt-2",onClick:function(){return n("email")},children:"Email"})}),Object(O.jsx)("td",{children:Object(O.jsx)("p",{className:"p-2 m-2 font-weight-bold",children:"Phone"})})]})}),Object(O.jsx)("tbody",{children:e.map((function(e){var t=e.login,n=e.picture,r=e.name,c=e.location,a=e.email,o=e.phone;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:n.large,alt:r.first+" "+r.last})}),Object(O.jsx)("td",{children:r.first+" "+r.last}),Object(O.jsx)("td",{children:"".concat(c.state,", ").concat(c.country)}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:o})]},t.uuid)}))})]})]})};var f=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(i.a)(a,2),l=o[0],j=o[1];return Object(r.useEffect)((function(){d().then((function(e){c(e.data.results),j(e.data.results)}))}),[]),Object(O.jsx)(u.Provider,{value:{employeeList:n,filteredEmployees:l,searchName:function(e){var t=e.target.value,r=n.filter((function(e){var n=e.name;if(-1!==(n.first.toLowerCase()+" "+n.last.toLowerCase()).indexOf(t.toLowerCase()))return n}));j(Object(s.a)(r))},sortData:function(e){switch(e){case"name":n.sort((function(e,t){return e.name.last.toLowerCase()<t.name.last.toLowerCase()?-1:1})),j(Object(s.a)(n));break;case"location":n.sort((function(e,t){return e.location.state.toLowerCase()<t.location.state.toLowerCase()?-1:1})),j(Object(s.a)(n));break;case"email":n.sort((function(e,t){return e.email.toLowerCase()<t.email.toLowerCase()?-1:1})),j(Object(s.a)(n))}}},children:Object(O.jsx)(x,{})})},p=(n(48),n(54));n(49);var v=function(){return Object(O.jsxs)(p.a,{className:"bg-primary",children:[Object(O.jsx)("h1",{className:"font-weight-bold",children:"Employee Directory"}),Object(O.jsx)("p",{children:"Sort the data by clicking the buttons above each column or entering letters into the search box"})]})};var w=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("p",{children:"Jordan Stuckman - Employee Directory - 2021"})})};n(50);var y=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{}),Object(O.jsx)(f,{}),Object(O.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.2094db7e.chunk.js.map