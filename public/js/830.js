"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[830],{5907:(e,t,r)=>{r.d(t,{Z:()=>d});r(7294);var n=r(5340),a=r.n(n),l=r(5893),s=["label","name","className","errors"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d=function(e){var t=e.label,r=e.name,n=e.className,i=e.errors,c=void 0===i?[]:i,d=u(e,s);return(0,l.jsxs)("div",{className:n,children:[t&&(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:t}),(0,l.jsxs)("div",{className:"mt-1",children:[(0,l.jsx)(a(),o(o({thousandSeparator:".",decimalSeparator:",",prefix:"Rp ",id:r,name:r},d),{},{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":"")})),c&&(0,l.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})]})}},8038:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);var a=r(5893);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var t=e.text,r=e.onClick;return(0,a.jsx)("button",{type:"button",className:"px-4 py-1 text-xs font-medium text-white bg-gray-600 rounded-sm focus:outline-none hover:bg-gray-700",onClick:r,children:t})};const o=function(e){var t,r,s=e.className,o=e.name,c=e.label,u=e.accept,d=e.errors,f=void 0===d?[]:d,m=e.require,p=void 0!==m&&m,x=e.onChange,h=(0,n.useRef)(),b=l((0,n.useState)(null),2),y=b[0],g=b[1];return(0,a.jsxs)("div",{className:s,children:[c&&(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:o,children:[c,p&&(0,a.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(f.length&&"error"),children:[(0,a.jsx)("input",{id:o,ref:h,accept:u,type:"file",className:"hidden",onChange:function(e){var t=e.target.files[0];g(t),x(t)}}),!y&&(0,a.jsx)("div",{className:"p-0",children:(0,a.jsx)(i,{text:"Browse",onClick:function(){h.current.click()}})}),y&&(0,a.jsxs)("div",{className:"flex items-center justify-between p-0",children:[(0,a.jsxs)("div",{className:"flex-1 pr-1",children:[y.name,(0,a.jsxs)("span",{className:"ml-1 text-xs text-gray-600",children:["(",(t=y.size,r=Math.floor(Math.log(t)/Math.log(1024)),1*(t/Math.pow(1024,r)).toFixed(2)+" "+["B","kB","MB","GB","TB"][r]),")"]})]}),(0,a.jsx)(i,{text:"Remove",onClick:function(){g(null),x(null),h.current.value=null}})]})]}),f.length>0&&(0,a.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:f})]})]})}},3855:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(7294),a=r(5482),l=r(9196),s=r(8346),i=r(9706),o=r(1636),c=r(4184),u=r.n(c),d=r(5893);const f=function(e){var t=e.Icon,r=e.link,n=e.text,a=route().current(r+"*"),l=u()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":a,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!a});return(0,d.jsxs)(o.ZQ,{href:route(r),className:l,children:[(0,d.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(a?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),n]})};var m=r(7804);const p=function(e){var t=e.className;return(0,d.jsxs)("nav",{className:t,children:[(0,d.jsx)(f,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,d.jsx)(f,{text:"Usulan Pelatihan",link:"usulan.index",Icon:m.fS1}),(0,d.jsx)(f,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:m.Qrl}),(0,d.jsx)(f,{text:"Pencarian",link:"pelatihan.search",Icon:m.W1M}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Manual"}),(0,d.jsx)(f,{text:"Penggunaan",link:"dashboard",Icon:m.KNL})]})},x=function(e){var t=e.className;return(0,d.jsxs)("nav",{className:t,children:[(0,d.jsx)(f,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,d.jsx)(f,{text:"Perangkat Daerah",link:"usulan.peda",Icon:m.Pf7}),(0,d.jsx)(f,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:m.n9J}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,d.jsx)(f,{text:"Tahun",link:"tahun",Icon:m.Que}),(0,d.jsx)(f,{text:"Rumpun",link:"jenis",Icon:m.zTD}),(0,d.jsx)(f,{text:"Kabupaten/Kota",link:"kabkot",Icon:m.n9J}),(0,d.jsx)(f,{text:"Perangat Daerah",link:"peda",Icon:m.Pf7}),(0,d.jsx)(f,{text:"Jenis Pelatihan",link:"rumpun",Icon:m.wZP}),(0,d.jsx)(f,{text:"Pelatihan",link:"pelatihan",Icon:m.fS1}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,d.jsx)(f,{text:"Pengguna",link:"pengguna",Icon:m.oyc}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Manual"}),(0,d.jsx)(f,{text:"Penggunaan",link:"dashboard",Icon:m.KNL})]})};var h=r(4653),b=["Icon","label","name","className","errors"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const w=function(e){var t=e.Icon,r=e.label,n=e.name,a=e.className,l=e.errors,s=void 0===l?[]:l,i=v(e,b);return(0,d.jsxs)("div",{className:a,children:[r&&(0,d.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:n,children:r}),(0,d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,d.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,d.jsx)("input",g(g({id:n,name:n},i),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(s.length?"error":"")}))]}),s&&(0,d.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:s})]})},O="/images/logo-gray.png?b5420a5fffa882123fb1b20619c72fde";function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function S(e){var t=e.title,r=e.children,c=N((0,n.useState)(!1),2),u=c[0],f=c[1],b=(0,o.qt)().props,y=b.auth,g=b.apps,j=(0,d.jsx)(x,{className:"px-3 mt-2"});return j=1==y.user.level?(0,d.jsx)(x,{className:"px-3 mt-2"}):(y.user.level,(0,d.jsx)(p,{className:"px-3 mt-2"})),(0,d.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,d.jsx)(a.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,d.jsx)(l.u.Root,{show:u,as:n.Fragment,children:(0,d.jsxs)(s.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:f,children:[(0,d.jsx)(l.u.Child,{as:n.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)(s.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,d.jsx)(l.u.Child,{as:n.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,d.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,d.jsx)(l.u.Child,{as:n.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,d.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return f(!1)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,d.jsx)(m.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,d.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,d.jsx)("img",{src:O,className:"h-8 w-auto",alt:"akpk"})}),(0,d.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:j})]})}),(0,d.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,d.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,d.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,d.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,d.jsx)("img",{src:O,className:"w-auto",alt:"akpk"})}),(0,d.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400",children:[(0,d.jsxs)(i.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,d.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,d.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,d.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:y.user.photo,alt:""}),(0,d.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,d.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:y.user.name}),(0,d.jsx)("span",{className:"text-gray-500 text-sm truncate",children:y.user.username})]})]}),(0,d.jsx)(h.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,d.jsx)(l.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(i.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)("a",{href:"#",className:k(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)(o.ZQ,{as:"button",href:route("logout"),className:k(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,d.jsx)("div",{className:"px-3 mt-5",children:(0,d.jsx)(w,{Icon:h.Que,name:"tahun",type:"text",value:"Tahun: "+g.tahun,placeholder:"Username",disabled:!0})}),j]})]})}),(0,d.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,d.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,d.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return f(!0)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,d.jsx)(m.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,d.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,d.jsx)("div",{className:"flex-1 flex",children:(0,d.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,d.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,d.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,d.jsx)(h.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,d.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+g.tahun,disabled:!0})]})]})}),(0,d.jsx)("div",{className:"flex items-center",children:(0,d.jsxs)(i.v,{as:"div",className:"ml-3 relative",children:[(0,d.jsx)("div",{children:(0,d.jsxs)(i.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,d.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,d.jsx)("img",{className:"h-8 w-8 rounded-full",src:y.user.photo,alt:""})]})}),(0,d.jsx)(l.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)("a",{href:"#",className:k(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)(o.ZQ,{as:"button",href:route("logout"),className:k(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,d.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:r})]})]})}},3221:(e,t,r)=>{r.d(t,{Z:()=>c});r(7294);var n=r(5893),a=["label","name","className","children","errors","require"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c=function(e){var t=e.label,r=e.name,l=e.className,i=e.children,c=e.errors,u=void 0===c?[]:c,d=e.require,f=void 0!==d&&d,m=o(e,a);return(0,n.jsxs)("div",{className:l,children:[t&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[t,f&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsx)("select",s(s({id:r,name:r},m),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(u.length?"error":""),children:i})),u&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:u})]})}},9918:(e,t,r)=>{r.d(t,{Z:()=>c});r(7294);var n=r(5893),a=["label","name","className","errors","require"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c=function(e){var t=e.label,r=e.name,l=e.className,i=e.errors,c=void 0===i?[]:i,u=e.require,d=void 0!==u&&u,f=o(e,a);return(0,n.jsxs)("div",{className:l,children:[t&&(0,n.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:[t,d&&(0,n.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",s(s({id:r,name:r},f),{},{className:"form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ".concat(c.length?"error":"")})),c&&(0,n.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:c})]})]})}},8830:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(7757),a=r.n(n),l=r(7294),s=r(1636),i=r(3855),o=r(8033),c=r(9918),u=r(3221),d=r(8038),f=r(1071),m=r(9669),p=r.n(m),x=r(5907),h=r(5893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t,r,n,a,l,s){try{var i=e[l](s),o=i.value}catch(e){return void r(e)}i.done?t(o):Promise.resolve(o).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function s(e){j(l,n,a,s,i,"next",e)}function i(e){j(l,n,a,s,i,"throw",e)}s(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=function(){var e,t=(0,s.qt)().props.jenis,r=(0,s.cI)({jenis_id:t[0].id||"",rumpun_id:"",pelatihan_id:"",jumlah:"",biaya:0,hari:0,jp:0,total:0,polabiaya:"",lampiran:""}),n=r.data,i=r.setData,m=r.errors,b=r.post,g=r.processing,j=[],O=w((0,l.useState)(j),2),N=O[0],P=O[1],k=w((0,l.useState)(!1),2),S=(k[0],k[1]),I=(0,l.useRef)();var D=t.map((function(e){return(0,h.jsx)("option",{value:e.id,children:e.nama},e.id)})),_=null===(e=t.find((function(e){return e.id==n.jenis_id})))||void 0===e?void 0:e.rumpun.map((function(e){return(0,h.jsxs)("option",{value:e.id,children:[e.nama," (",e.kode,")"]},e.id)}));function F(){P(j),I.current.setValue("")}var E=function(){var e=v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),F(),p().get(route("component.select.pelatihan"),{params:{jenis_id:n.jenis_id,rumpun_id:n.rumpun_id}}).then((function(e){e&&P(e.data)})),S(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),n.pelatihan_id&&p().get(route("pelatihan.show",n.pelatihan_id)).then((function(e){if(e){var t=e.data;i((function(e){return y(y({},e),{},{hari:t.hari,jp:t.jp,biaya:t.biaya})}))}})),S(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){i("rumpun_id",""),i("pelatihan_id",""),F()}),[n.jenis_id]),(0,l.useEffect)((function(){E()}),[n.rumpun_id]),(0,l.useEffect)((function(){C()}),[n.pelatihan_id]),(0,l.useEffect)((function(){i("total",n.jumlah*n.biaya)}),[n.jumlah,n.biaya]),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,h.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,h.jsxs)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:[(0,h.jsx)(s.ZQ,{href:route("usulan.index"),className:"text-yellow-600 hover:text-yellow-700",children:"Usulan"}),(0,h.jsx)("span",{className:"mx-2 font-medium text-yellow-600",children:"/"}),"Buat Usulan"]})})}),(0,h.jsx)("div",{className:"overflow-x-auto p-6",children:(0,h.jsx)("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:(0,h.jsxs)("form",{name:"createForm",onSubmit:function(e){e.preventDefault(),b(route("usulan.index.kabkot.store"))},children:[(0,h.jsxs)("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[(0,h.jsx)(u.Z,{className:"w-full pb-4 pr-6",label:"Rumpun Pelatihan",name:"jenis_id",errors:m.jenis_id,value:n.jenis_id,onChange:function(e){i("jenis_id",e.target.value)},children:D}),(0,h.jsxs)(u.Z,{className:"w-full pb-4 pr-6",label:"Jenis Pelatihan",name:"rumpun_id",errors:m.rumpun_id,value:n.rumpun_id,onChange:function(e){i("rumpun_id",e.target.value)},children:[(0,h.jsx)("option",{value:"",disabled:!0,children:"-- Pilih Pelatihan --"}),_]}),(0,h.jsxs)("div",{className:"w-full pb-4 pr-6",children:[(0,h.jsxs)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"pelatihan_id",children:["Pelatihan",(0,h.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,h.jsx)(f.ZP,{ref:I,className:"text-sm sm:text-sm",id:"pelatihan_id",name:"pelatihan_id",placeholder:"-- Pelatihan --",defaultValue:n.pelatihan_id,onChange:function(e){i("pelatihan_id",e.value)},options:N,noOptionsMessage:function(){return"Tidak ada data"},theme:function(e){return y(y({},e),{},{colors:y(y({},e.colors),{},{primary:"#F59E0B"})})},styles:{control:function(e){return y(y({},e),{},{border:"1px solid #D1D5DB",boxShadow:"none","&:hover":{border:"1px solid #F59E0B"}})},input:function(e){return y(y({},e),{},{"input:focus":{boxShadow:"none"}})}}}),m.pelatihan_id&&(0,h.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:m.pelatihan_id})]}),(0,h.jsx)(x.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Biaya / Orang",name:"biaya",placeholder:"Biaya...",value:n.biaya,disabled:!0}),(0,h.jsx)(c.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Jumlah Hari",name:"hari",placeholder:"Hari...",value:n.hari,disabled:!0}),(0,h.jsx)(c.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Jam Pelajaran",name:"jp",placeholder:"JP...",value:n.jp,disabled:!0}),(0,h.jsxs)(u.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Pola Biaya",name:"polabiaya",errors:m.polabiaya,value:n.polabiaya,require:!0,onChange:function(e){return i("polabiaya",e.target.value)},children:[(0,h.jsx)("option",{value:"",disabled:!0,children:"-- Pilih Pola Biaya --"}),(0,h.jsx)("option",{value:"1",children:"Fasilitasi"}),(0,h.jsx)("option",{value:"2",children:"Kontribusi"}),(0,h.jsx)("option",{value:"3",children:"Lain-lain"})]}),(0,h.jsx)(c.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Jumlah Orang",name:"jumlah",placeholder:"Jumlah...",errors:m.jumlah,value:n.jumlah,require:!0,onChange:function(e){i("jumlah",e.target.value)}}),(0,h.jsx)(x.Z,{className:"w-full pb-4 pr-6 lg:w-1/3",label:"Total Biaya",name:"total",placeholder:"Total...",value:n.total,disabled:!0}),(0,h.jsx)(d.Z,{className:"w-full pb-8 pr-6",label:"Lampiran",name:"lampiran",accept:"application/pdf",errors:m.lampiran,value:n.lampiran,require:!1,onChange:function(e){return i("lampiran",e)}})]}),(0,h.jsxs)("div",{className:"flex items-center text-left px-8 py-4 bg-gray-100 border-t border-gray-200",children:[(0,h.jsx)("button",{type:"button",className:"ml-auto justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",onClick:function(){return window.history.back()},children:"Batal"}),(0,h.jsx)(o.Z,{loading:g,type:"submit",className:"ml-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Simpan"})]})]})})})]})};N.layout=function(e){return(0,h.jsx)(i.Z,{title:"Buat Usulan",children:e})};const P=N},8033:(e,t,r)=>{r.d(t,{Z:()=>d});r(7294);var n=r(4184),a=r.n(n),l=r(5893),s=["loading","className","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d=function(e){var t=e.loading,r=e.className,n=e.children,i=u(e,s),c=a()("flex items-center","focus:outline-none",{"pointer-events-none bg-opacity-75 select-none":t},r);return(0,l.jsxs)("button",o(o({disabled:t,className:c},i),{},{children:[t&&(0,l.jsx)("div",{className:"mr-2 btn-spinner"}),n]}))}}}]);
//# sourceMappingURL=830.js.map?id=503ec32aff7e814f