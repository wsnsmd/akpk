(self.webpackChunk=self.webpackChunk||[]).push([[316],{9182:(e,t,r)=>{"use strict";r.d(t,{Z:()=>z});var s=r(7294),n=r(5482),a=r(1561),l=r(7385),i=r(5125),o=r(1636),c=r(4184),d=r.n(c),u=r(5893);const x=function(e){var t=e.Icon,r=e.link,s=e.text,n=route().current(r+"*"),a=d()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":n,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!n});return(0,u.jsxs)(o.ZQ,{href:route(r),className:a,children:[(0,u.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(n?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),s]})};var m=r(6049);const h=function(e){var t=e.className;return(0,u.jsxs)("nav",{className:t,children:[(0,u.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,u.jsx)(x,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:m.Qrl})]})},f=function(e){var t=e.className;return(0,u.jsxs)("nav",{className:t,children:[(0,u.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,u.jsx)(x,{text:"Perangkat Daerah",link:"usulan.peda",Icon:m.Pf7}),(0,u.jsx)(x,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:m.n9J}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,u.jsx)(x,{text:"Tahun",link:"tahun",Icon:m.Que}),(0,u.jsx)(x,{text:"Jenis Pelatihan",link:"jenis",Icon:m.zTD}),(0,u.jsx)(x,{text:"Kabupaten/Kota",link:"kabkot",Icon:m.n9J}),(0,u.jsx)(x,{text:"Perangat Daerah",link:"peda",Icon:m.Pf7}),(0,u.jsx)(x,{text:"Rumpun",link:"rumpun",Icon:m.wZP}),(0,u.jsx)(x,{text:"Pelatihan",link:"pelatihan",Icon:m.fS1}),(0,u.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,u.jsx)(x,{text:"Pengguna",link:"pengguna",Icon:m.oyc})]})};var p=r(3802);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const j=function(e){var t=e.Icon,r=e.label,s=e.name,n=e.className,a=e.errors,l=void 0===a?[]:a,i=b(e,["Icon","label","name","className","errors"]);return(0,u.jsxs)("div",{className:n,children:[r&&(0,u.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:s,children:r}),(0,u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,u.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,u.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,u.jsx)("input",v(v({id:s,name:s},i),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,u.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})},w="/images/logo-gray.png?b5420a5fffa882123fb1b20619c72fde";function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],s=!0,n=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(s=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);s=!0);}catch(e){n=!0,a=e}finally{try{s||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function z(e){var t=e.title,r=e.children,c=N((0,s.useState)(!1),2),d=c[0],x=c[1],g=(0,o.qt)().props,v=g.auth,y=g.apps,b=(0,u.jsx)(f,{className:"px-3 mt-2"});return b=1==v.user.level?(0,u.jsx)(f,{className:"px-3 mt-2"}):(v.user.level,(0,u.jsx)(h,{className:"px-3 mt-2"})),(0,u.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,u.jsx)(n.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,u.jsx)(a.u.Root,{show:d,as:s.Fragment,children:(0,u.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:x,children:[(0,u.jsx)(a.u.Child,{as:s.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,u.jsx)(a.u.Child,{as:s.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,u.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,u.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,u.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return x(!1)},children:[(0,u.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,u.jsx)(m.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,u.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,u.jsx)("img",{src:w,className:"h-8 w-auto",alt:"akpk"})}),(0,u.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:b})]})}),(0,u.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,u.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,u.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,u.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,u.jsx)("img",{src:w,className:"w-auto",alt:"akpk"})}),(0,u.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400",children:[(0,u.jsxs)(i.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,u.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,u.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,u.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:v.user.photo,alt:""}),(0,u.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,u.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:v.user.name}),(0,u.jsx)("span",{className:"text-gray-500 text-sm truncate",children:v.user.username})]})]}),(0,u.jsx)(p.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,u.jsx)(a.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(i.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)("a",{href:"#",className:O(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)(o.ZQ,{as:"button",href:route("logout"),className:O(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,u.jsx)("div",{className:"px-3 mt-5",children:(0,u.jsx)(j,{Icon:p.Que,name:"tahun",type:"text",value:"Tahun: "+y.tahun,placeholder:"Username",disabled:!0})}),b]})]})}),(0,u.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,u.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,u.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return x(!0)},children:[(0,u.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,u.jsx)(m.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,u.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,u.jsx)("div",{className:"flex-1 flex",children:(0,u.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,u.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,u.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,u.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,u.jsx)(p.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,u.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+y.tahun,disabled:!0})]})]})}),(0,u.jsx)("div",{className:"flex items-center",children:(0,u.jsxs)(i.v,{as:"div",className:"ml-3 relative",children:[(0,u.jsx)("div",{children:(0,u.jsxs)(i.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,u.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,u.jsx)("img",{className:"h-8 w-8 rounded-full",src:v.user.photo,alt:""})]})}),(0,u.jsx)(a.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)("a",{href:"#",className:O(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)(o.ZQ,{as:"button",href:route("logout"),className:O(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,u.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:r})]})]})}},1822:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});r(7294);var s=r(1636),n=r(4184),a=r.n(n),l=r(3802),i=r(5893),o=function(e){var t=e.active,r=e.label,n=e.url,o=a()(["bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"],{"z-10 bg-yellow-50 border-yellow-500 text-yellow-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":t});return r.includes("Previous")?(0,i.jsxs)(s.ZQ,{className:o,href:n,children:[(0,i.jsx)("span",{className:"sr-only",children:"Next"}),(0,i.jsx)(l.wyc,{className:"h-5 w-5","aria-hidden":"true"})]}):r.includes("Next")?(0,i.jsxs)(s.ZQ,{className:o,href:n,children:[(0,i.jsx)("span",{className:"sr-only",children:"Next"}),(0,i.jsx)(l.XCv,{className:"h-5 w-5","aria-hidden":"true"})]}):(0,i.jsx)(s.ZQ,{className:o,href:n,children:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:r}})})},c=function(e){var t=e.label,r=a()("bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium");return t.includes("Previous")?(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("span",{className:"sr-only",children:"Next"}),(0,i.jsx)(l.wyc,{className:"h-5 w-5","aria-hidden":"false"})]}):t.includes("Next")?(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("span",{className:"sr-only",children:"Next"}),(0,i.jsx)(l.XCv,{className:"h-5 w-5","aria-hidden":"true"})]}):(0,i.jsx)("div",{className:r,dangerouslySetInnerHTML:{__html:t}})},d=function(e){var t=e.link,r=void 0===t?[]:t;return null===r.url?(0,i.jsx)(c,{label:r.label},r.label):(0,i.jsx)(o,{label:r.label,active:r.active,url:r.url},r.label)};const u=function(e){var t=e.links,r=void 0===t?[]:t;if(3===r.length)return null;var s=r[0],n=r[r.length-1];return(0,i.jsxs)("div",{className:"px-4 py-3 flex items-center justify-between sm:px-0",children:[(0,i.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[(0,i.jsx)(d,{link:s}),(0,i.jsx)(d,{link:n})]}),(0,i.jsx)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:(0,i.jsx)("div",{children:(0,i.jsx)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:r.map((function(e){var t=e.active,r=e.label,s=e.url;return null===s?(0,i.jsx)(c,{label:r},r):(0,i.jsx)(o,{label:r,active:t,url:s},r)}))})})})]})}},1434:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(7294),n=r(9680),a=r(1636),l=r(7176),i=r(3221),o=r(5937),c=r.n(o),d=r(5893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],s=!0,n=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(s=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);s=!0);}catch(e){n=!0,a=e}finally{try{s||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}const p=function(){var e,t=(0,a.qt)().props.filters,r=h((0,s.useState)(!1),2),o=r[0],u=r[1],f=h((0,s.useState)({role:t.role||"",search:t.search||"",trashed:t.trashed||""}),2),p=f[0],g=f[1],v=(0,l.Z)(p);function y(e){var t=e.target.name,r=e.target.value;g((function(e){return x(x({},e),{},m({},t,r))})),o&&u(!1)}return(0,s.useEffect)((function(){if(v){var e=Object.keys(c()(p)).length?c()(p):{remember:"forget"};n.Inertia.get(route(route().current()),e,{replace:!0,preserveState:!0})}}),[p]),(0,d.jsxs)("div",{className:"flex items-center w-full max-w-md mr-4",children:[(0,d.jsxs)("div",{className:"relative flex w-full bg-white rounded shadow",children:[(0,d.jsxs)("div",{style:{top:"100%"},className:"absolute ".concat(o?"":"hidden"),children:[(0,d.jsx)("div",{onClick:function(){return u(!1)},className:"fixed inset-0 z-20 bg-black opacity-25"}),(0,d.jsxs)("div",{className:"relative z-30 w-64 px-4 py-6 mt-2 bg-white rounded shadow-lg",children:[t.hasOwnProperty("role")&&(0,d.jsxs)(i.Z,{className:"mb-4",label:"Role",name:"role",value:p.role,onChange:y,children:[(0,d.jsx)("option",{value:""}),(0,d.jsx)("option",{value:"user",children:"User"}),(0,d.jsx)("option",{value:"owner",children:"Owner"})]}),(0,d.jsxs)(i.Z,{label:"Trashed",name:"trashed",value:p.trashed,onChange:y,children:[(0,d.jsx)("option",{value:""}),(0,d.jsx)("option",{value:"with",children:"With Trashed"}),(0,d.jsx)("option",{value:"only",children:"Only Trashed"})]})]})]}),(0,d.jsx)("button",{onClick:function(){return u(!0)},className:"px-4 border-r rounded-l md:px-6 hover:bg-gray-100 focus:outline-none focus:border-white focus:ring-2 focus:ring-yellow-400 focus:z-10",children:(0,d.jsxs)("div",{className:"flex items-baseline",children:[(0,d.jsx)("span",{className:"hidden text-gray-700 md:inline text-sm",children:"Filter"}),(0,d.jsx)("svg",{className:"w-2 h-2 text-gray-700 fill-current md:ml-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 961.243 599.998",children:(0,d.jsx)("path",{d:"M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"})})]})}),(0,d.jsx)("input",(e={className:"relative w-full text-sm px-3 py-2 rounded-r focus:ring-yellow-500 focus:border-yellow-500",autoComplete:"off",type:"text",name:"search"},m(e,"name","search"),m(e,"value",p.search),m(e,"onChange",y),m(e,"placeholder","Cari…"),e))]}),(0,d.jsx)("button",{onClick:function(){g({role:"",search:"",trashed:""})},className:"ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-yellow-700 focus:outline-none",type:"button",children:"Reset"})]})}},3221:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(7294);var s=r(5893);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o=function(e){var t=e.label,r=e.name,n=e.className,l=e.children,o=e.errors,c=void 0===o?[]:o,d=e.require,u=void 0!==d&&d,x=i(e,["label","name","className","children","errors","require"]);return(0,s.jsxs)("div",{className:n,children:[t&&(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[t,u&&(0,s.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,s.jsx)("select",a(a({id:r,name:r},x),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":""),children:l})),c&&(0,s.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})}},5316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});r(7294);var s=r(9680),n=r(1636),a=r(9182),l=r(9356),i=r(1434),o=r(1822),c=(r(6455),r(7630),r(3910)),d=r(3802),u=r(5893),x=function(){var e=(0,n.qt)().props.admin,t=e.data,r=e.meta.links,a=1;function x(e){var t;switch(e){case 1:t="Admin";break;case 2:t="Kabupaten/Kota";break;case 3:t="Perangkat Daerah"}return t}return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:[(0,u.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,u.jsx)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:"Pengguna"})}),(0,u.jsx)("div",{className:"mt-4 flex sm:mt-0 sm:ml-4",children:(0,u.jsx)(n.ZQ,{className:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3",href:route("pengguna.admin.create"),children:(0,u.jsx)("span",{children:"Tambah"})})})]}),(0,u.jsx)("div",{className:"flex items-center justify-between m-6",children:(0,u.jsx)(i.Z,{})}),(0,u.jsx)("div",{className:"overflow-x-auto bg-white rounded shadow",children:(0,u.jsxs)("table",{className:"min-w-full whitespace-nowrap",children:[(0,u.jsx)("thead",{className:"bg-gray-50",children:(0,u.jsxs)("tr",{className:"border-t border-gray-200",children:[(0,u.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"70",children:"#"}),(0,u.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nama"}),(0,u.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Username"}),(0,u.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",colSpan:"2",children:"Role"})]})}),(0,u.jsxs)("tbody",{children:[t.map((function(e){var t=e.id,r=e.name,i=e.username,o=e.level,m=(e.photo,e.deleted_at);return(0,u.jsxs)("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[(0,u.jsx)("td",{className:"border-t text-sm",children:(0,u.jsxs)("span",{className:"flex items-center px-6 py-3 focus:text-yellow-700 focus:outline-none",children:[a++,m&&(0,u.jsx)(l.Z,{name:"trash",className:"flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"})]})}),(0,u.jsx)("td",{className:"border-t text-sm",children:(0,u.jsx)("span",{tabIndex:"-1",className:"flex items-center px-6 py-3 focus:text-yellow focus:outline-none",children:r})}),(0,u.jsx)("td",{className:"border-t text-sm",children:(0,u.jsx)("span",{tabIndex:"-1",className:"flex items-center px-6 py-3 focus:text-yellow focus:outline-none",children:i})}),(0,u.jsx)("td",{className:"border-t text-sm",children:(0,u.jsx)("span",{tabIndex:"-1",className:"flex items-center px-6 py-3 focus:text-yellow focus:outline-none",children:x(o)})}),(0,u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right font-medium w-px border-t text-sm",children:(0,u.jsxs)("div",{className:"flex flex-row",children:[(0,u.jsx)(n.ZQ,{tabIndex:"-1",href:route("pengguna.admin.edit",t),className:"flex items-center focus:outline-none whitespace-nowrap",title:"Edit",children:(0,u.jsx)(d.sCx,{className:"mr-2 h-5 w-5 text-green-500 hover:text-green-600","aria-hidden":"true"})}),(0,u.jsx)("button",{tabIndex:"-1",className:"flex items-center focus:outline-none",title:"Delete",onClick:function(){return function(e){(0,c.I)().then((function(t){t.isConfirmed&&s.Inertia.delete(route("pengguna.admin.destroy",e))}))}(t)},children:(0,u.jsx)(d.XHJ,{className:"mr-2 h-5 w-5 text-red-500 hover:text-red-600","aria-hidden":"true"})})]})})]},t)})),0===t.length&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{className:"px-6 py-4 border-t",colSpan:"4",children:"Tidak ada data."})})]})]})}),(0,u.jsx)("div",{className:"flex items-center md:justify-center",children:(0,u.jsx)(o.Z,{links:r})})]})};x.layout=function(e){return(0,u.jsx)(a.Z,{title:"Pengguna",children:e})};const m=x},9356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});r(7294);var s=r(5893);const n=function(e){var t=e.name,r=e.className;return"apple"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:(0,s.jsxs)("g",{fillRule:"nonzero",children:[(0,s.jsx)("path",{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}),(0,s.jsx)("path",{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"})]})}):"book"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"})}):"cheveron-down"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})}):"cheveron-right"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("polygon",{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"})}):"dashboard"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"})}):"location"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})}):"office"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"})}):"printer"==t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"})}):"shopping-cart"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})}):"store-front"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"})}):"trash"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"})}):"users"===t?(0,s.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"})}):null}},3910:(e,t,r)=>{"use strict";r.d(t,{I:()=>a});var s=r(6455),n=r.n(s);function a(){return n().mixin({customClass:{confirmButton:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3",cancelButton:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"},buttonsStyling:!1}).fire({title:"Apakah anda yakin??",text:"Anda tidak akan dapat mengembalikannya!",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, hapus!",cancelButtonText:"Batal",reverseButtons:!1})}}}]);
//# sourceMappingURL=316.js.map?id=a792e19d8853f66de827