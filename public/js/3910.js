(self.webpackChunk=self.webpackChunk||[]).push([[3910],{6772:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),a=r(8537),s=r(5893);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var t=e.text,r=e.onClick;return(0,s.jsx)("button",{type:"button",className:"px-4 py-1 text-xs font-medium text-white bg-gray-600 rounded-sm focus:outline-none hover:bg-gray-700",onClick:r,children:t})};const c=function(e){var t=e.className,r=e.name,o=e.label,c=e.accept,u=e.errors,d=void 0===u?[]:u,m=e.require,f=void 0!==m&&m,x=e.onChange,h=(0,n.useRef)(),p=l((0,n.useState)(null),2),g=p[0],b=p[1];return(0,s.jsxs)("div",{className:t,children:[o&&(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[o,f&&(0,s.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,s.jsxs)("div",{className:"mt-1",children:[(0,s.jsxs)("div",{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(d.length&&"error"),children:[(0,s.jsx)("input",{id:r,ref:h,accept:c,type:"file",className:"hidden",onChange:function(e){var t=e.target.files[0];b(t),x(t)}}),!g&&(0,s.jsx)("div",{className:"p-0",children:(0,s.jsx)(i,{text:"Browse",onClick:function(){h.current.click()}})}),g&&(0,s.jsxs)("div",{className:"flex items-center justify-between p-0",children:[(0,s.jsxs)("div",{className:"flex-1 pr-1",children:[g.name,(0,s.jsxs)("span",{className:"ml-1 text-xs text-gray-600",children:["(",(0,a.G)(g.size),")"]})]}),(0,s.jsx)(i,{text:"Remove",onClick:function(){b(null),x(null),h.current.value=null}})]})]}),d.length>0&&(0,s.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:d})]})]})}},2805:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(7294),a=r(5482),s=r(1561),l=r(7385),o=r(5125),i=r(1636),c=r(1267),u=r(9246),d=r(6049),m=r(5893);const f=function(e){var t=e.className;return(0,m.jsxs)("nav",{className:t,children:[(0,m.jsx)(u.Z,{text:"Dashboard",link:"dashboard",Icon:d.tvw}),(0,m.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,m.jsx)(u.Z,{text:"Perangkat Daerah",link:"usulan.peda",Icon:d.Pf7}),(0,m.jsx)(u.Z,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:d.n9J}),(0,m.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,m.jsx)(u.Z,{text:"Tahun",link:"tahun",Icon:d.Que}),(0,m.jsx)(u.Z,{text:"Jenis Pelatihan",link:"jenis",Icon:d.zTD}),(0,m.jsx)(u.Z,{text:"Kabupaten/Kota",link:"kabkot",Icon:d.n9J}),(0,m.jsx)(u.Z,{text:"Perangat Daerah",link:"peda",Icon:d.Pf7}),(0,m.jsx)(u.Z,{text:"Rumpun",link:"rumpun",Icon:d.wZP}),(0,m.jsx)(u.Z,{text:"Pelatihan",link:"pelatihan",Icon:d.fS1}),(0,m.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,m.jsx)(u.Z,{text:"Pengguna",link:"pengguna",Icon:d.oyc})]})};var x=r(3802);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const y=function(e){var t=e.Icon,r=e.label,n=e.name,a=e.className,s=e.errors,l=void 0===s?[]:s,o=b(e,["Icon","label","name","className","errors"]);return(0,m.jsxs)("div",{className:a,children:[r&&(0,m.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:n,children:r}),(0,m.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,m.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,m.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,m.jsx)("input",p(p({id:n,name:n},o),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,m.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function N(e){var t=e.title,r=e.children,u=j((0,n.useState)(!1),2),h=u[0],p=u[1],g=(0,i.qt)().props,b=g.auth,v=g.apps,N=(0,m.jsx)(f,{className:"px-3 mt-2"});return N=1==b.user.level?(0,m.jsx)(f,{className:"px-3 mt-2"}):(b.user.level,(0,m.jsx)(c.Z,{className:"px-3 mt-2"})),(0,m.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,m.jsx)(a.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,m.jsx)(s.u.Root,{show:h,as:n.Fragment,children:(0,m.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:p,children:[(0,m.jsx)(s.u.Child,{as:n.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,m.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,m.jsx)(s.u.Child,{as:n.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,m.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,m.jsx)(s.u.Child,{as:n.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,m.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,m.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return p(!1)},children:[(0,m.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,m.jsx)(d.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,m.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,m.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})}),(0,m.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:N})]})}),(0,m.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,m.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,m.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,m.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,m.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg",alt:"Workflow"})}),(0,m.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto",children:[(0,m.jsxs)(o.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,m.jsx)("div",{children:(0,m.jsx)(o.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,m.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,m.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,m.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),(0,m.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,m.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:b.user.name}),(0,m.jsx)("span",{className:"text-gray-500 text-sm truncate",children:b.user.username})]})]}),(0,m.jsx)(x.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,m.jsx)(s.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,m.jsxs)(o.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,m.jsx)("div",{className:"py-1",children:(0,m.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,m.jsx)("a",{href:"#",className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,m.jsx)("div",{className:"py-1",children:(0,m.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,m.jsx)(i.ZQ,{as:"button",href:route("logout"),className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,m.jsx)("div",{className:"px-3 mt-5",children:(0,m.jsx)(y,{Icon:x.Que,name:"tahun",type:"text",value:"Tahun: "+v.tahun,placeholder:"Username",disabled:!0})}),N]})]})}),(0,m.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,m.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,m.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return p(!0)},children:[(0,m.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,m.jsx)(d.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,m.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,m.jsx)("div",{className:"flex-1 flex",children:(0,m.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,m.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,m.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,m.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,m.jsx)(x.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,m.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+v.tahun,disabled:!0})]})]})}),(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsxs)(o.v,{as:"div",className:"ml-3 relative",children:[(0,m.jsx)("div",{children:(0,m.jsxs)(o.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,m.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,m.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})}),(0,m.jsx)(s.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,m.jsxs)(o.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,m.jsx)("div",{className:"py-1",children:(0,m.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,m.jsx)("a",{href:"#",className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,m.jsx)("div",{className:"py-1",children:(0,m.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,m.jsx)(i.ZQ,{as:"button",href:route("logout"),className:w(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,m.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:r})]})]})}},1267:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});r(7294);var n=r(9246),a=r(6049),s=r(5893);const l=function(e){var t=e.className;return(0,s.jsxs)("nav",{className:t,children:[(0,s.jsx)(n.Z,{text:"Dashboard",link:"dashboard",Icon:a.tvw}),(0,s.jsx)(n.Z,{text:"Usulan Pelatihan",link:"usulan.index",Icon:a.fS1}),(0,s.jsx)(n.Z,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:a.Qrl}),(0,s.jsx)(n.Z,{text:"Pencarian",link:"pelatihan.search",Icon:a.W1M})]})}},9246:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(7294);var n=r(1636),a=r(4184),s=r.n(a),l=r(5893);const o=function(e){var t=e.Icon,r=e.link,a=e.text,o=route().current(r+"*"),i=s()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":o,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!o});return(0,l.jsxs)(n.ZQ,{href:route(r),className:i,children:[(0,l.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(o?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),a]})}},3221:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});r(7294);var n=r(5893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i=function(e){var t=e.label,r=e.name,a=e.className,l=e.children,i=e.errors,c=void 0===i?[]:i,u=e.require,d=void 0!==u&&u,m=o(e,["label","name","className","children","errors","require"]);return(0,n.jsxs)("div",{className:a,children:[t&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[t,d&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsx)("select",s(s({id:r,name:r},m),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":""),children:l})),c&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})}},9918:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});r(7294);var n=r(5893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i=function(e){var t=e.label,r=e.name,a=e.className,l=e.errors,i=void 0===l?[]:l,c=e.require,u=void 0!==c&&c,d=o(e,["label","name","className","errors","require"]);return(0,n.jsxs)("div",{className:a,children:[t&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[t,u&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",s(s({id:r,name:r},d),{},{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(i.length?"error":"")})),i&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:i})]})]})}},6400:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});r(7294);var n=r(1636),a=r(2805),s=r(8033),l=r(9918),o=r(3221),i=r(6772),c=r(5893),u=function(){var e=(0,n.qt)().props.user,t=(0,n.cI)({name:e.name||"",username:e.username||"",password:"",singkat:e.singkat||"",level:e.level||"",hp:e.hp||"",photo:"",_method:"PUT"}),r=t.data,a=t.setData,u=t.errors,d=t.post,m=t.processing;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,c.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,c.jsxs)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:[(0,c.jsx)(n.ZQ,{href:route("pengguna"),className:"text-yellow-600 hover:text-yellow-700",children:"Pengguna"}),(0,c.jsx)("span",{className:"mx-2 font-medium text-yellow-600",children:"/"}),e.name]})})}),(0,c.jsx)("div",{className:"overflow-x-auto p-6",children:(0,c.jsx)("div",{className:"max-w-3xl overflow-hidden bg-white rounded shadow",children:(0,c.jsxs)("form",{name:"createForm",onSubmit:function(t){t.preventDefault(),d(route("pengguna.admin.update",e.id))},children:[(0,c.jsxs)("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[(0,c.jsx)(l.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Nama Lengkap",name:"name",errors:u.name,value:r.name,require:!0,onChange:function(e){return a("name",e.target.value)}}),(0,c.jsx)(l.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Nama Singkat",name:"singkat",errors:u.singkat,value:r.singkat,onChange:function(e){return a("singkat",e.target.value)}}),(0,c.jsx)(l.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Username",name:"username",errors:u.username,value:r.username,require:!0,onChange:function(e){return a("username",e.target.value)}}),(0,c.jsx)(l.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Password",name:"password",type:"password",errors:u.password,value:r.password,require:!0,onChange:function(e){return a("password",e.target.value)}}),(0,c.jsx)(l.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"No Handphone",name:"hp",errors:u.hp,value:r.hp,onChange:function(e){return a("hp",e.target.value)}}),(0,c.jsxs)(o.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Level",name:"level",errors:u.level,value:r.level,require:!0,onChange:function(e){return a("level",e.target.value)},children:[(0,c.jsx)("option",{value:"",disabled:!0,selected:!0,children:"-- Pilih Level --"}),(0,c.jsx)("option",{value:"1",children:"Administrator"}),(0,c.jsx)("option",{value:"2",children:"Kabupaten/Kota"}),(0,c.jsx)("option",{value:"3",children:"Perangkat Daerah"})]}),(0,c.jsx)(i.Z,{className:"w-full pb-8 pr-6 lg:w-1/2",label:"Photo",name:"photo",accept:"image/*",errors:u.photo,value:r.photo,onChange:function(e){return a("photo",e)}})]}),(0,c.jsx)("div",{className:"flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200",children:(0,c.jsx)(s.Z,{loading:m,type:"submit",className:"ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Simpan"})})]})})})]})};u.layout=function(e){return(0,c.jsx)(a.Z,{children:e})};const d=u},8033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});r(7294);var n=r(4184),a=r.n(n),s=r(5893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u=function(e){var t=e.loading,r=e.className,n=e.children,l=c(e,["loading","className","children"]),i=a()("flex items-center","focus:outline-none",{"pointer-events-none bg-opacity-75 select-none":t},r);return(0,s.jsxs)("button",o(o({disabled:t,className:i},l),{},{children:[t&&(0,s.jsx)("div",{className:"mr-2 btn-spinner"}),n]}))}},8537:(e,t,r)=>{"use strict";function n(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]}r.d(t,{G:()=>n})}}]);
//# sourceMappingURL=3910.js.map?id=49a519d7d257dbcc95c5