(this["webpackJsonpdog-app"]=this["webpackJsonpdog-app"]||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(21),o=t.n(s),r=(t(29),t(8)),i=(t(30),t(31),t(61)),l=(t(32),t(4));var j=function(){return Object(l.jsxs)("div",{className:"p-home-page",children:[Object(l.jsx)("h1",{children:"Dog Book"}),Object(l.jsx)("h2",{children:"Man's Best Friend"}),Object(l.jsx)(i.a,{variant:"outline-info",children:"woof!"})," ",Object(l.jsx)("img",{src:"/my-app/dog.png"})]})},d=t(7),u=t.n(d),h=t(22),b=function e(n,t){Object(h.a)(this,e),1===arguments.length&&"object"===typeof n?(this.name=n.name,this.url=n.url):(this.name=n,this.url=t)},g=t(58),m=t(60),p=t(59),f=t(23);t(52);var O=function(e){var n=e.name,t=e.img;return console.log(t),console.log(n),Object(l.jsxs)("div",{className:"c-profile",children:[Object(l.jsx)("p",{className:"h5",children:n}),Object(l.jsx)("img",{className:"profile-img",src:"/"===t?"/my-app/dog.png":t,alt:"Dog URL"})]})};t(53);var x=function(e){var n=e.breeds,t=e.onUpdateImage,a=Object(c.useState)(""),s=Object(r.a)(a,2),o=s[0],j=s[1],d=void 0===n.name?[]:n.name.filter((function(e){return e.toLowerCase().includes(o.toLowerCase())}));return Object(l.jsx)("div",{className:"p-breed-page",children:Object(l.jsxs)(g.a,{children:[Object(l.jsxs)(m.a,{children:[Object(l.jsxs)(m.a.Group,{as:p.a,controlId:"formPlaintext",children:[Object(l.jsx)(m.a.Label,{column:!0,sm:"3",children:"Search"}),Object(l.jsx)(f.a,{sm:"9",children:Object(l.jsx)(m.a.Control,{type:"text",placeholder:"Search Dog Breed...",value:o,onChange:function(e){return j(e.target.value)}})})]}),Object(l.jsx)(i.a,{variant:"outline-secondary",onClick:function(){return t(n.name)},children:"Secondary"})]}),Object(l.jsx)(p.a,{children:d.map((function(e){return Object(l.jsx)(f.a,{lg:3,md:6,children:Object(l.jsx)(O,{name:e.name,img:e.url})})}))})]})})};var v=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1];function s(e){e.forEach((function(e,n){return u.a.get("https://dog.ceo/api/breed/"+e+"/images/random").then((function(c){a(t.push(new b(e,c.data.message))),e.length===n&&(console.log("this is:  "),console.log(t))}))}))}return Object(c.useEffect)((function(){u.a.get("https://dog.ceo/api/breeds/list/all").then((function(e){s(Object.keys(e.data.message))}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),t.url>=93?Object(l.jsx)(x,{breeds:t,onUpdateImage:s}):Object(l.jsx)("p",{children:"loding..."})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),y()}},[[57,1,2]]]);
//# sourceMappingURL=main.530dabc8.chunk.js.map