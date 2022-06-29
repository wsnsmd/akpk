"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{3855:(e,t,a)=>{a.d(t,{Z:()=>P});var r=a(7294),n=a(5482),s=a(9196),l=a(8346),i=a(9706),o=a(1636),c=a(4184),d=a.n(c),u=a(5893);const x=function(e){var t=e.Icon,a=e.link,r=e.text,n=route().current(a+"*"),s=d()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":n,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!n});return(0,u.jsxs)(o.ZQ,{href:route(a),className:s,children:[(0,u.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(n?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),r]})};var m=a(7804);const f=function(e){var t=e.className;return(0,u.jsxs)("nav",{className:t,children:[(0,u.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,u.jsx)(x,{text:"Usulan Pelatihan",link:"usulan.index",Icon:m.fS1}),(0,u.jsx)(x,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:m.Qrl}),(0,u.jsx)(x,{text:"Pencarian",link:"pelatihan.search",Icon:m.W1M})]})},h=function(e){var t=e.className;return(0,u.jsxs)("nav",{className:t,children:[(0,u.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,u.jsx)(x,{text:"Perangkat Daerah",link:"usulan.peda",Icon:m.Pf7}),(0,u.jsx)(x,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:m.n9J}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,u.jsx)(x,{text:"Tahun",link:"tahun",Icon:m.Que}),(0,u.jsx)(x,{text:"Jenis Pelatihan",link:"jenis",Icon:m.zTD}),(0,u.jsx)(x,{text:"Kabupaten/Kota",link:"kabkot",Icon:m.n9J}),(0,u.jsx)(x,{text:"Perangat Daerah",link:"peda",Icon:m.Pf7}),(0,u.jsx)(x,{text:"Rumpun",link:"rumpun",Icon:m.wZP}),(0,u.jsx)(x,{text:"Pelatihan",link:"pelatihan",Icon:m.fS1}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,u.jsx)(x,{text:"Pengguna",link:"pengguna",Icon:m.oyc})]})};var p=a(4653),g=["Icon","label","name","className","errors"];function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){j(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const w=function(e){var t=e.Icon,a=e.label,r=e.name,n=e.className,s=e.errors,l=void 0===s?[]:s,i=v(e,g);return(0,u.jsxs)("div",{className:n,children:[a&&(0,u.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:a}),(0,u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,u.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,u.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,u.jsx)("input",b(b({id:r,name:r},i),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,u.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})},N="/images/logo-gray.png?b5420a5fffa882123fb1b20619c72fde";function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,s=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(s.push(r.value),!t||s.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw n}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function I(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function P(e){var t=e.title,a=e.children,c=k((0,r.useState)(!1),2),d=c[0],x=c[1],g=(0,o.qt)().props,y=g.auth,b=g.apps,j=(0,u.jsx)(h,{className:"px-3 mt-2"});return j=1==y.user.level?(0,u.jsx)(h,{className:"px-3 mt-2"}):(y.user.level,(0,u.jsx)(f,{className:"px-3 mt-2"})),(0,u.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,u.jsx)(n.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,u.jsx)(s.u.Root,{show:d,as:r.Fragment,children:(0,u.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:x,children:[(0,u.jsx)(s.u.Child,{as:r.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,u.jsx)(s.u.Child,{as:r.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,u.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,u.jsx)(s.u.Child,{as:r.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,u.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return x(!1)},children:[(0,u.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,u.jsx)(m.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,u.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,u.jsx)("img",{src:N,className:"h-8 w-auto",alt:"akpk"})}),(0,u.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:j})]})}),(0,u.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,u.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,u.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,u.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,u.jsx)("img",{src:N,className:"w-auto",alt:"akpk"})}),(0,u.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400",children:[(0,u.jsxs)(i.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,u.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,u.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,u.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:y.user.photo,alt:""}),(0,u.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,u.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:y.user.name}),(0,u.jsx)("span",{className:"text-gray-500 text-sm truncate",children:y.user.username})]})]}),(0,u.jsx)(p.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,u.jsx)(s.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(i.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)("a",{href:"#",className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)(o.ZQ,{as:"button",href:route("logout"),className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,u.jsx)("div",{className:"px-3 mt-5",children:(0,u.jsx)(w,{Icon:p.Que,name:"tahun",type:"text",value:"Tahun: "+b.tahun,placeholder:"Username",disabled:!0})}),j]})]})}),(0,u.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,u.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,u.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return x(!0)},children:[(0,u.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,u.jsx)(m.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,u.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,u.jsx)("div",{className:"flex-1 flex",children:(0,u.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,u.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,u.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,u.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,u.jsx)(p.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,u.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+b.tahun,disabled:!0})]})]})}),(0,u.jsx)("div",{className:"flex items-center",children:(0,u.jsxs)(i.v,{as:"div",className:"ml-3 relative",children:[(0,u.jsx)("div",{children:(0,u.jsxs)(i.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,u.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,u.jsx)("img",{className:"h-8 w-8 rounded-full",src:y.user.photo,alt:""})]})}),(0,u.jsx)(s.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)("a",{href:"#",className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)(o.ZQ,{as:"button",href:route("logout"),className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,u.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:a})]})]})}},8553:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(7294),a(1636);var r=a(3855),n=(a(4653),a(5893));[{id:1,title:"GraphQL API",initials:"GA",team:"Engineering",members:[{name:"Dries Vincent",handle:"driesvincent",imageUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Lindsay Walton",handle:"lindsaywalton",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Courtney Henry",handle:"courtneyhenry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Tom Cook",handle:"tomcook",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],totalMembers:12,lastUpdated:"March 17, 2020",pinned:!0,bgColorClass:"bg-pink-600"}].filter((function(e){return e.pinned}));var s=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,n.jsx)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:"Dashboard"})})}),(0,n.jsx)("div",{className:"px-4 mt-6 sm:px-6 lg:px-8",children:(0,n.jsx)("h2",{className:"text-gray-500 text-xs font-medium uppercase tracking-wide",children:"Sedang dibangun"})})]})};s.layout=function(e){return(0,n.jsx)(r.Z,{title:"Dashboard",children:e})};const l=s}}]);
//# sourceMappingURL=553.js.map?id=adb14ba0157c1833