(self.webpackChunk=self.webpackChunk||[]).push([[6485],{2805:(e,t,a)=>{"use strict";a.d(t,{Z:()=>N});var r=a(7294),s=a(5482),n=a(1561),l=a(7385),i=a(5125),o=a(1636),c=a(1267),d=a(9246),u=a(6049),x=a(5893);const m=function(e){var t=e.className;return(0,x.jsxs)("nav",{className:t,children:[(0,x.jsx)(d.Z,{text:"Dashboard",link:"dashboard",Icon:u.tvw}),(0,x.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,x.jsx)(d.Z,{text:"Perangkat Daerah",link:"usulan.peda",Icon:u.Pf7}),(0,x.jsx)(d.Z,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:u.n9J}),(0,x.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,x.jsx)(d.Z,{text:"Tahun",link:"tahun",Icon:u.Que}),(0,x.jsx)(d.Z,{text:"Jenis Pelatihan",link:"jenis",Icon:u.zTD}),(0,x.jsx)(d.Z,{text:"Kabupaten/Kota",link:"kabkot",Icon:u.n9J}),(0,x.jsx)(d.Z,{text:"Perangat Daerah",link:"peda",Icon:u.Pf7}),(0,x.jsx)(d.Z,{text:"Rumpun",link:"rumpun",Icon:u.wZP}),(0,x.jsx)(d.Z,{text:"Pelatihan",link:"pelatihan",Icon:u.fS1}),(0,x.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,x.jsx)(d.Z,{text:"Pengguna",link:"pengguna",Icon:u.oyc})]})};var f=a(3802);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const j=function(e){var t=e.Icon,a=e.label,r=e.name,s=e.className,n=e.errors,l=void 0===n?[]:n,i=y(e,["Icon","label","name","className","errors"]);return(0,x.jsxs)("div",{className:s,children:[a&&(0,x.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:a}),(0,x.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,x.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,x.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,x.jsx)("input",p(p({id:r,name:r},i),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,x.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,s=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){s=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function w(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function N(e){var t=e.title,a=e.children,d=b((0,r.useState)(!1),2),h=d[0],p=d[1],g=(0,o.qt)().props,y=g.auth,v=g.apps,N=(0,x.jsx)(m,{className:"px-3 mt-2"});return N=1==y.user.level?(0,x.jsx)(m,{className:"px-3 mt-2"}):(y.user.level,(0,x.jsx)(c.Z,{className:"px-3 mt-2"})),(0,x.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,x.jsx)(s.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,x.jsx)(n.u.Root,{show:h,as:r.Fragment,children:(0,x.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:p,children:[(0,x.jsx)(n.u.Child,{as:r.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,x.jsx)(n.u.Child,{as:r.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,x.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,x.jsx)(n.u.Child,{as:r.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,x.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return p(!1)},children:[(0,x.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,x.jsx)(u.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,x.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,x.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})}),(0,x.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:N})]})}),(0,x.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,x.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,x.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,x.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,x.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})}),(0,x.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto",children:[(0,x.jsxs)(i.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,x.jsx)("div",{children:(0,x.jsx)(i.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,x.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,x.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,x.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),(0,x.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,x.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:y.user.name}),(0,x.jsx)("span",{className:"text-gray-500 text-sm truncate",children:y.user.username})]})]}),(0,x.jsx)(f.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,x.jsx)(n.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,x.jsxs)(i.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,x.jsx)("div",{className:"py-1",children:(0,x.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,x.jsx)("a",{href:"#",className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,x.jsx)("div",{className:"py-1",children:(0,x.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,x.jsx)(o.ZQ,{as:"button",href:route("logout"),className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,x.jsx)("div",{className:"px-3 mt-5",children:(0,x.jsx)(j,{Icon:f.Que,name:"tahun",type:"text",value:"Tahun: "+v.tahun,placeholder:"Username",disabled:!0})}),N]})]})}),(0,x.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,x.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,x.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return p(!0)},children:[(0,x.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,x.jsx)(u.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,x.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,x.jsx)("div",{className:"flex-1 flex",children:(0,x.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,x.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,x.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,x.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,x.jsx)(f.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,x.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+v.tahun,disabled:!0})]})]})}),(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsxs)(i.v,{as:"div",className:"ml-3 relative",children:[(0,x.jsx)("div",{children:(0,x.jsxs)(i.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,x.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,x.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})}),(0,x.jsx)(n.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,x.jsxs)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,x.jsx)("div",{className:"py-1",children:(0,x.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,x.jsx)("a",{href:"#",className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,x.jsx)("div",{className:"py-1",children:(0,x.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,x.jsx)(o.ZQ,{as:"button",href:route("logout"),className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,x.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:a})]})]})}},1267:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});a(7294);var r=a(9246),s=a(6049),n=a(5893);const l=function(e){var t=e.className;return(0,n.jsxs)("nav",{className:t,children:[(0,n.jsx)(r.Z,{text:"Dashboard",link:"dashboard",Icon:s.tvw}),(0,n.jsx)(r.Z,{text:"Usulan Pelatihan",link:"usulan.index",Icon:s.fS1}),(0,n.jsx)(r.Z,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:s.Qrl}),(0,n.jsx)(r.Z,{text:"Pencarian",link:"pelatihan.search",Icon:s.W1M})]})}},9246:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});a(7294);var r=a(1636),s=a(4184),n=a.n(s),l=a(5893);const i=function(e){var t=e.Icon,a=e.link,s=e.text,i=route().current(a+"*"),o=n()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":i,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!i});return(0,l.jsxs)(r.ZQ,{href:route(a),className:o,children:[(0,l.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(i?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),s]})}},6485:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});a(7294);var r=a(44),s=a(2805),n=a(3802),l=a(5893),i=[{name:"Title",selector:function(e){return e.title}},{name:"Year",selector:function(e){return e.year}}],o=[{id:1,title:"Beetlejuice",year:"1988"},{id:2,title:"Ghostbusters",year:"1984"}],c=[{id:1,title:"GraphQL API",initials:"GA",team:"Engineering",members:[{name:"Dries Vincent",handle:"driesvincent",imageUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Lindsay Walton",handle:"lindsaywalton",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Courtney Henry",handle:"courtneyhenry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Tom Cook",handle:"tomcook",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],totalMembers:12,lastUpdated:"March 17, 2020",pinned:!0,bgColorClass:"bg-pink-600"}];function d(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var u=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,l.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,l.jsx)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:"Reports"})})}),(0,l.jsxs)("div",{className:"mt-10 sm:hidden",children:[(0,l.jsx)("div",{className:"px-4 sm:px-6",children:(0,l.jsx)("h2",{className:"text-gray-500 text-xs font-medium uppercase tracking-wide",children:"Projects"})}),(0,l.jsx)("ul",{role:"list",className:"mt-3 border-t border-gray-200 divide-y divide-gray-100",children:c.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"#",className:"group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6",children:[(0,l.jsxs)("span",{className:"flex items-center truncate space-x-3",children:[(0,l.jsx)("span",{className:d(e.bgColorClass,"w-2.5 h-2.5 flex-shrink-0 rounded-full"),"aria-hidden":"true"}),(0,l.jsxs)("span",{className:"font-medium truncate text-sm leading-6",children:[e.title," ",(0,l.jsxs)("span",{className:"truncate font-normal text-gray-500",children:["in ",e.team]})]})]}),(0,l.jsx)(n.XCv,{className:"ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})},e.id)}))})]}),(0,l.jsx)("div",{className:"hidden mt-8 sm:block",children:(0,l.jsx)("div",{className:"align-middle inline-block min-w-full border-b border-gray-200",children:(0,l.jsx)(r.ZP,{columns:i,data:o,selectableRows:!0})})})]})};u.layout=function(e){return(0,l.jsx)(s.Z,{title:"Reports",children:e})};const x=u}}]);
//# sourceMappingURL=6485.js.map?id=f167f61f128a7c70d0d6