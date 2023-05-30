"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[683],{3855:(e,r,t)=>{t.d(r,{Z:()=>I});var n=t(7294),a=t(5482),s=t(9196),l=t(8346),o=t(9706),i=t(1636),c=t(4184),u=t.n(c),d=t(5893);const m=function(e){var r=e.Icon,t=e.link,n=e.text,a=route().current(t+"*"),s=u()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":a,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!a});return(0,d.jsxs)(i.ZQ,{href:route(t),className:s,children:[(0,d.jsx)(r,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(a?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),n]})};var f=t(7804);const x=function(e){var r=e.className;return(0,d.jsxs)("nav",{className:r,children:[(0,d.jsx)(m,{text:"Dashboard",link:"dashboard",Icon:f.tvw}),(0,d.jsx)(m,{text:"Usulan Pelatihan",link:"usulan.index",Icon:f.fS1}),(0,d.jsx)(m,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:f.Qrl}),(0,d.jsx)(m,{text:"Pencarian",link:"pelatihan.search",Icon:f.W1M}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Manual"}),(0,d.jsx)(m,{text:"Penggunaan",link:"dashboard",Icon:f.KNL})]})},p=function(e){var r=e.className;return(0,d.jsxs)("nav",{className:r,children:[(0,d.jsx)(m,{text:"Dashboard",link:"dashboard",Icon:f.tvw}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,d.jsx)(m,{text:"Perangkat Daerah",link:"usulan.peda",Icon:f.Pf7}),(0,d.jsx)(m,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:f.n9J}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,d.jsx)(m,{text:"Tahun",link:"tahun",Icon:f.Que}),(0,d.jsx)(m,{text:"Rumpun",link:"jenis",Icon:f.zTD}),(0,d.jsx)(m,{text:"Kabupaten/Kota",link:"kabkot",Icon:f.n9J}),(0,d.jsx)(m,{text:"Perangat Daerah",link:"peda",Icon:f.Pf7}),(0,d.jsx)(m,{text:"Jenis Pelatihan",link:"rumpun",Icon:f.wZP}),(0,d.jsx)(m,{text:"Pelatihan",link:"pelatihan",Icon:f.fS1}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,d.jsx)(m,{text:"Pengguna",link:"pengguna",Icon:f.oyc}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Manual"}),(0,d.jsx)(m,{text:"Penggunaan",link:"dashboard",Icon:f.KNL})]})};var h=t(4653),b=["Icon","label","name","className","errors"];function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const w=function(e){var r=e.Icon,t=e.label,n=e.name,a=e.className,s=e.errors,l=void 0===s?[]:s,o=v(e,b);return(0,d.jsxs)("div",{className:a,children:[t&&(0,d.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:n,children:t}),(0,d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,d.jsx)(r,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,d.jsx)("input",y(y({id:n,name:n},o),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,d.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})},O="/images/logo-gray.png?b5420a5fffa882123fb1b20619c72fde";function N(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,s=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(s.push(n.value),!r||s.length!==r);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(o)throw a}}return s}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function P(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(Boolean).join(" ")}function I(e){var r=e.title,t=e.children,c=N((0,n.useState)(!1),2),u=c[0],m=c[1],b=(0,i.qt)().props,g=b.auth,y=b.apps,j=(0,d.jsx)(p,{className:"px-3 mt-2"});return j=1==g.user.level?(0,d.jsx)(p,{className:"px-3 mt-2"}):(g.user.level,(0,d.jsx)(x,{className:"px-3 mt-2"})),(0,d.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,d.jsx)(a.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:r}),(0,d.jsx)(s.u.Root,{show:u,as:n.Fragment,children:(0,d.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:m,children:[(0,d.jsx)(s.u.Child,{as:n.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,d.jsx)(s.u.Child,{as:n.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,d.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,d.jsx)(s.u.Child,{as:n.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,d.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return m(!1)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,d.jsx)(f.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,d.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,d.jsx)("img",{src:O,className:"h-8 w-auto",alt:"akpk"})}),(0,d.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:j})]})}),(0,d.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,d.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,d.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,d.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,d.jsx)("img",{src:O,className:"w-auto",alt:"akpk"})}),(0,d.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400",children:[(0,d.jsxs)(o.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,d.jsx)("div",{children:(0,d.jsx)(o.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,d.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,d.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,d.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:g.user.photo,alt:""}),(0,d.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,d.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:g.user.name}),(0,d.jsx)("span",{className:"text-gray-500 text-sm truncate",children:g.user.username})]})]}),(0,d.jsx)(h.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,d.jsx)(s.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(o.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(o.v.Item,{children:function(e){var r=e.active;return(0,d.jsx)("a",{href:"#",className:P(r?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(o.v.Item,{children:function(e){var r=e.active;return(0,d.jsx)(i.ZQ,{as:"button",href:route("logout"),className:P(r?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,d.jsx)("div",{className:"px-3 mt-5",children:(0,d.jsx)(w,{Icon:h.Que,name:"tahun",type:"text",value:"Tahun: "+y.tahun,placeholder:"Username",disabled:!0})}),j]})]})}),(0,d.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,d.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,d.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return m(!0)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,d.jsx)(f.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,d.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,d.jsx)("div",{className:"flex-1 flex",children:(0,d.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,d.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,d.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,d.jsx)(h.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,d.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+y.tahun,disabled:!0})]})]})}),(0,d.jsx)("div",{className:"flex items-center",children:(0,d.jsxs)(o.v,{as:"div",className:"ml-3 relative",children:[(0,d.jsx)("div",{children:(0,d.jsxs)(o.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,d.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,d.jsx)("img",{className:"h-8 w-8 rounded-full",src:g.user.photo,alt:""})]})}),(0,d.jsx)(s.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(o.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(o.v.Item,{children:function(e){var r=e.active;return(0,d.jsx)("a",{href:"#",className:P(r?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(o.v.Item,{children:function(e){var r=e.active;return(0,d.jsx)(i.ZQ,{as:"button",href:route("logout"),className:P(r?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,d.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:t})]})]})}},3221:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var n=t(5893),a=["label","name","className","children","errors","require"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c=function(e){var r=e.label,t=e.name,s=e.className,o=e.children,c=e.errors,u=void 0===c?[]:c,d=e.require,m=void 0!==d&&d,f=i(e,a);return(0,n.jsxs)("div",{className:s,children:[r&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:t,children:[r,m&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsx)("select",l(l({id:t,name:t},f),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(u.length?"error":""),children:o})),u&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:u})]})}},4113:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var n=t(5893),a=["label","name","className","errors","require"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c=function(e){var r=e.label,t=e.name,s=e.className,o=e.errors,c=void 0===o?[]:o,u=e.require,d=void 0!==u&&u,m=i(e,a);return(0,n.jsxs)("div",{className:s,children:[r&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:t,children:[r,d&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("textarea",l(l({id:t,name:t},m),{},{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":"")})),c&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})]})}},9918:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var n=t(5893),a=["label","name","className","errors","require"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c=function(e){var r=e.label,t=e.name,s=e.className,o=e.errors,c=void 0===o?[]:o,u=e.require,d=void 0!==u&&u,m=i(e,a);return(0,n.jsxs)("div",{className:s,children:[r&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:t,children:[r,d&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",l(l({id:t,name:t},m),{},{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":"")})),c&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})]})}},5683:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});t(7294);var n=t(1636),a=t(3855),s=t(8033),l=t(9918),o=t(4113),i=t(3221),c=t(5893),u=function(){var e=(0,n.qt)().props.ubar,r=(0,n.cI)({nama:e.nama||"",keterangan:e.keterangan||"",param:e.param||"",_method:"PUT"}),t=r.data,a=r.setData,u=r.errors,d=r.post,m=r.processing;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,c.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,c.jsxs)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:[(0,c.jsx)(n.ZQ,{href:route("ubar.index"),className:"text-yellow-600 hover:text-yellow-700",children:"Usulan Pelatihan Baru"}),(0,c.jsx)("span",{className:"mx-2 font-medium text-yellow-600",children:"/"}),"Tambah"]})})}),(0,c.jsx)("div",{className:"overflow-x-auto p-6",children:(0,c.jsx)("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:(0,c.jsxs)("form",{name:"createForm",onSubmit:function(r){r.preventDefault(),d(route("ubar.update",e.id))},children:[(0,c.jsxs)("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[(0,c.jsxs)(i.Z,{className:"w-full pb-4 pr-6",label:"Jenis Pelatihan",name:"jenis",errors:u.param,value:t.param,onChange:function(e){return a("param",e.target.value)},require:!0,children:[(0,c.jsx)("option",{value:"",disabled:!0,children:"-- Pilih Jenis --"}),(0,c.jsx)("option",{value:"Teknis",children:"Teknis"}),(0,c.jsx)("option",{value:"Fungsional",children:"Fungsional"}),(0,c.jsx)("option",{value:"Lain-lain",children:"Lain-lain"})]}),(0,c.jsx)(l.Z,{className:"w-full pb-4 pr-6",label:"Nama Pelatihan",name:"nama",placeholder:"Nama Pelatihan...",errors:u.nama,value:t.nama,require:!0,onChange:function(e){return a("nama",e.target.value)}}),(0,c.jsx)(o.Z,{className:"w-full pb-8 pr-6",label:"Keterangan",name:"keterangan",placeholder:"Keterangan...",rows:"4",errors:u.keterangan,value:t.keterangan,require:!0,onChange:function(e){return a("keterangan",e.target.value)}})]}),(0,c.jsxs)("div",{className:"flex items-center text-left px-8 py-4 bg-gray-100 border-t border-gray-200",children:[(0,c.jsx)("button",{type:"button",className:"ml-auto justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",onClick:function(){return window.history.back()},children:"Batal"}),(0,c.jsx)(s.Z,{loading:m,type:"submit",className:"ml-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Simpan"})]})]})})})]})};u.layout=function(e){return(0,c.jsx)(a.Z,{children:e})};const d=u},8033:(e,r,t)=>{t.d(r,{Z:()=>d});t(7294);var n=t(4184),a=t.n(n),s=t(5893),l=["loading","className","children"];function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const d=function(e){var r=e.loading,t=e.className,n=e.children,o=u(e,l),c=a()("flex items-center","focus:outline-none",{"pointer-events-none bg-opacity-75 select-none":r},t);return(0,s.jsxs)("button",i(i({disabled:r,className:c},o),{},{children:[r&&(0,s.jsx)("div",{className:"mr-2 btn-spinner"}),n]}))}}}]);
//# sourceMappingURL=683.js.map?id=616cb6337628490b