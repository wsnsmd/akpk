"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[186],{3855:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(7294),a=n(5482),s=n(9196),l=n(8346),i=n(9706),o=n(1636),c=n(4184),u=n.n(c),d=n(5893);const x=function(e){var t=e.Icon,n=e.link,r=e.text,a=route().current(n+"*"),s=u()("group flex items-center px-2 py-2 text-sm font-medium rounded-md",{"bg-gray-200 text-gray-900":a,"text-gray-700 hover:text-gray-900 hover:bg-gray-50":!a});return(0,d.jsxs)(o.ZQ,{href:route(n),className:s,children:[(0,d.jsx)(t,{className:"mr-3 flex-shrink-0 h-6 w-6 ".concat(a?"text-gray-500":"text-gray-400 group-hover:text-gray-500")}),r]})};var m=n(7804);const f=function(e){var t=e.className;return(0,d.jsxs)("nav",{className:t,children:[(0,d.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,d.jsx)(x,{text:"Usulan Pelatihan",link:"usulan.index",Icon:m.fS1}),(0,d.jsx)(x,{text:"Usulan Pelatihan Baru",link:"ubar.index",Icon:m.Qrl}),(0,d.jsx)(x,{text:"Pencarian",link:"pelatihan.search",Icon:m.W1M})]})},h=function(e){var t=e.className;return(0,d.jsxs)("nav",{className:t,children:[(0,d.jsx)(x,{text:"Dashboard",link:"dashboard",Icon:m.tvw}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Usulan"}),(0,d.jsx)(x,{text:"Perangkat Daerah",link:"usulan.peda",Icon:m.Pf7}),(0,d.jsx)(x,{text:"Kabupaten/Kota",link:"usulan.kabkot",Icon:m.n9J}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Master"}),(0,d.jsx)(x,{text:"Tahun",link:"tahun",Icon:m.Que}),(0,d.jsx)(x,{text:"Jenis Pelatihan",link:"jenis",Icon:m.zTD}),(0,d.jsx)(x,{text:"Kabupaten/Kota",link:"kabkot",Icon:m.n9J}),(0,d.jsx)(x,{text:"Perangat Daerah",link:"peda",Icon:m.Pf7}),(0,d.jsx)(x,{text:"Rumpun",link:"rumpun",Icon:m.wZP}),(0,d.jsx)(x,{text:"Pelatihan",link:"pelatihan",Icon:m.fS1}),(0,d.jsx)("h3",{className:"px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Admin"}),(0,d.jsx)(x,{text:"Pengguna",link:"pengguna",Icon:m.oyc})]})};var p=n(4653),g=["Icon","label","name","className","errors"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const w=function(e){var t=e.Icon,n=e.label,r=e.name,a=e.className,s=e.errors,l=void 0===s?[]:s,i=v(e,g);return(0,d.jsxs)("div",{className:a,children:[n&&(0,d.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:r,children:n}),(0,d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,d.jsx)(t,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,d.jsx)("input",b(b({id:r,name:r},i),{},{className:"font-semibold focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ".concat(l.length?"error":"")}))]}),l&&(0,d.jsx)("div",{className:"flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1",children:l})]})},N="/images/logo-gray.png?b5420a5fffa882123fb1b20619c72fde";function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,s=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function I(e){var t=e.title,n=e.children,c=k((0,r.useState)(!1),2),u=c[0],x=c[1],g=(0,o.qt)().props,y=g.auth,b=g.apps,j=(0,d.jsx)(h,{className:"px-3 mt-2"});return j=1==y.user.level?(0,d.jsx)(h,{className:"px-3 mt-2"}):(y.user.level,(0,d.jsx)(f,{className:"px-3 mt-2"})),(0,d.jsxs)("div",{className:"relative h-screen flex overflow-hidden bg-white",children:[(0,d.jsx)(a.ZP,{titleTemplate:"%s | BPSDM Prov. Kaltim",title:t}),(0,d.jsx)(s.u.Root,{show:u,as:r.Fragment,children:(0,d.jsxs)(l.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:x,children:[(0,d.jsx)(s.u.Child,{as:r.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,d.jsx)(s.u.Child,{as:r.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,d.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",children:[(0,d.jsx)(s.u.Child,{as:r.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,d.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:function(){return x(!1)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,d.jsx)(m.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,d.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,d.jsx)("img",{src:N,className:"h-8 w-auto",alt:"akpk"})}),(0,d.jsx)("div",{className:"mt-5 flex-1 h-0 overflow-y-auto",children:j})]})}),(0,d.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,d.jsx)("div",{className:"hidden lg:flex lg:flex-shrink-0",children:(0,d.jsxs)("div",{className:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100",children:[(0,d.jsx)("div",{className:"flex items-center flex-shrink-0 px-6",children:(0,d.jsx)("img",{src:N,className:"w-auto",alt:"akpk"})}),(0,d.jsxs)("div",{className:"h-0 flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400",children:[(0,d.jsxs)(i.v,{as:"div",className:"px-3 mt-6 relative inline-block text-left",children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.v.Button,{className:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500",children:(0,d.jsxs)("span",{className:"flex w-full justify-between items-center",children:[(0,d.jsxs)("span",{className:"flex min-w-0 items-center justify-between space-x-3",children:[(0,d.jsx)("img",{className:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",src:y.user.photo,alt:""}),(0,d.jsxs)("span",{className:"flex-1 flex flex-col min-w-0",children:[(0,d.jsx)("span",{className:"text-gray-900 text-sm font-medium truncate",children:y.user.name}),(0,d.jsx)("span",{className:"text-gray-500 text-sm truncate",children:y.user.username})]})]}),(0,d.jsx)(p.Ta4,{className:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})})}),(0,d.jsx)(s.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(i.v.Items,{className:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)("a",{href:"#",className:P(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)(o.ZQ,{as:"button",href:route("logout"),className:P(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]}),(0,d.jsx)("div",{className:"px-3 mt-5",children:(0,d.jsx)(w,{Icon:p.Que,name:"tahun",type:"text",value:"Tahun: "+b.tahun,placeholder:"Username",disabled:!0})}),j]})]})}),(0,d.jsxs)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:[(0,d.jsxs)("div",{className:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",children:[(0,d.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden",onClick:function(){return x(!0)},children:[(0,d.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,d.jsx)(m.crV,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,d.jsxs)("div",{className:"flex-1 flex justify-between px-4 sm:px-6 lg:px-8",children:[(0,d.jsx)("div",{className:"flex-1 flex",children:(0,d.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,d.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,d.jsxs)("div",{className:"relative w-full text-gray-700 focus-within:text-gray-600",children:[(0,d.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,d.jsx)(p.Que,{className:"h-5 w-5","aria-hidden":"true"})}),(0,d.jsx)("input",{id:"tahun-field",name:"tahun-field",className:"block w-full h-full pl-8 pr-3 py-2 font-semibold border-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",placeholder:"Tahun",type:"text",value:"Tahun: "+b.tahun,disabled:!0})]})]})}),(0,d.jsx)("div",{className:"flex items-center",children:(0,d.jsxs)(i.v,{as:"div",className:"ml-3 relative",children:[(0,d.jsx)("div",{children:(0,d.jsxs)(i.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[(0,d.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,d.jsx)("img",{className:"h-8 w-8 rounded-full",src:y.user.photo,alt:""})]})}),(0,d.jsx)(s.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsxs)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",children:[(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)("a",{href:"#",className:P(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Lihat Profile"})}})}),(0,d.jsx)("div",{className:"py-1",children:(0,d.jsx)(i.v.Item,{children:function(e){var t=e.active;return(0,d.jsx)(o.ZQ,{as:"button",href:route("logout"),className:P(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),method:"post",children:"Logout"})}})})]})})]})})]})]}),(0,d.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50",children:n})]})]})}},7527:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(5893);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=function(e){a({},e);return(0,r.jsx)("span",{className:"py-4 px-6 w-full",children:"Tidak ada data."})}},186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(7294),a=n(9680),s=n(1636),l=n(3855),i=n(3910),o=n(44),c=n(7527),u=n(4653),d=n(5893),x={noRowsPerPage:!0},m=function(){var e=(0,s.qt)().props.usulan,t=1,n=(0,r.useMemo)((function(){return[{name:"#",cell:function(e){return(0,d.jsx)("span",{children:f()})},width:"70px"},{name:"Pelatihan",selector:function(e){return e.pnama}},{name:"Jumlah (Orang)",selector:function(e){return e.jumlah}},{name:"Verifikasi",cell:function(e){return e.is_verify?(0,d.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:"Sudah"}):(0,d.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",children:"Belum"})}},{cell:function(e){return e.is_verify?"":(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"flex items-center focus:outline-none",title:"Edit",onClick:function(){return l(e.id)},children:(0,d.jsx)(u.sCx,{className:"mr-2 h-5 w-5 text-green-500 hover:text-green-600","aria-hidden":"true"})}),(0,d.jsx)("button",{className:"flex items-center focus:outline-none",title:"Delete",onClick:function(){return m(e.id)},children:(0,d.jsx)(u.XHJ,{className:"mr-2 h-5 w-5 text-red-500 hover:text-red-600","aria-hidden":"true"})})]})},ignoreRowClick:!0,allowOverflow:!0,button:!0}]})),l=function(e){a.Inertia.get(route("usulan.index.peda.edit",e))},m=function(e){(0,i.I)().then((function(t){t.isConfirmed&&a.Inertia.delete(route("usulan.index.peda.destroy",e))}))},f=function(){return t>e.length&&(t=1),t++};return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",children:(0,d.jsx)("div",{className:"flex-1 min-w-0 py-2",children:(0,d.jsx)("h1",{className:"text-lg font-medium leading-6 text-gray-900 sm:truncate",children:"Usulan Pelatihan"})})}),(0,d.jsx)("div",{className:"flex items-center justify-between m-6",children:(0,d.jsx)(s.ZQ,{className:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3",href:route("usulan.index.peda.create"),children:(0,d.jsx)("span",{children:"Tambah"})})}),(0,d.jsx)("div",{className:"overflow-x-auto bg-white rounded shadow",children:(0,d.jsx)(o.ZP,{persistTableHead:!0,columns:n,data:e,paginationComponentOptions:x,paginationPerPage:10,pagination:!0,highlightOnHover:!0,pointerOnHover:!0,noDataComponent:(0,d.jsx)(c.Z,{})})})]})};m.layout=function(e){return(0,d.jsx)(l.Z,{title:"Usulan Pelatihan",children:e})};const f=m},3910:(e,t,n)=>{n.d(t,{I:()=>s});var r=n(6455),a=n.n(r);function s(){return a().mixin({customClass:{confirmButton:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3",cancelButton:"order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"},buttonsStyling:!1}).fire({title:"Apakah anda yakin??",text:"Anda tidak akan dapat mengembalikannya!",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, hapus!",cancelButtonText:"Batal",reverseButtons:!1})}}}]);
//# sourceMappingURL=186.js.map?id=70da9c6fc4a78444