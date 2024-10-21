(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{337:function(e,t,a){Promise.resolve().then(a.bind(a,8750))},8750:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var s=a(7437),l=a(7815),r=a(2265);a(5578);var n=a(1795);a(1342);var o=a(1478),i=a(5754),c=a(585);let d=[{accessorKey:"project_name",header:e=>{let{column:t}=e;return(0,s.jsxs)(i.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Project Name",(0,s.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)("p",{className:"max-w-[375px] words-break font-medium",children:t.getValue("project_name")})})}},{accessorKey:"professor",header:e=>{let{column:t}=e;return(0,s.jsxs)(i.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Professor",(0,s.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"tags",header:"Project Tags",cell:e=>{let{row:t}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)("span",{className:"max-w-[500px] truncate  flex flex-row gap-2 flex-wrap",children:t.getValue("tags").map(e=>(0,s.jsx)(o.C,{variant:"secondary",children:e.length>40?e.slice(0,40)+"...":e}))})})}},{accessorKey:"status",header:"Status"}];var u=a(1006),f=a(3280),m=a(9160),h=a(5179),x=a(8792);function g(e){var t,a,l,n,o;let{columns:c,data:d}=e,[g,p]=(0,r.useState)([]),[j,v]=(0,r.useState)([]),w=(0,u.b7)({data:d,columns:c,getCoreRowModel:(0,f.sC)(),getPaginationRowModel:(0,f.G_)(),onColumnFiltersChange:v,getFilteredRowModel:(0,f.vL)(),onSortingChange:p,getSortedRowModel:(0,f.tj)(),state:{columnFilters:j,sorting:g}});return(0,r.useEffect)(()=>{w.setPageSize(5)},[]),(0,s.jsxs)("div",{className:"flex flex-col pt-4",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center py-4 gap-10",children:[(0,s.jsx)(h.I,{placeholder:"Search by Projects...",value:null!==(n=null===(t=w.getColumn("project_name"))||void 0===t?void 0:t.getFilterValue())&&void 0!==n?n:"",onChange:e=>{var t;console.log(e.target.value),null===(t=w.getColumn("project_name"))||void 0===t||t.setFilterValue(e.target.value)},className:"max-w-sm"}),(0,s.jsx)(h.I,{placeholder:"Search by Professor...",value:null!==(o=null===(a=w.getColumn("professor"))||void 0===a?void 0:a.getFilterValue())&&void 0!==o?o:"",onChange:e=>{var t;console.log(e.target.value),null===(t=w.getColumn("professor"))||void 0===t||t.setFilterValue(e.target.value)},className:"max-w-sm"})]}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(m.iA,{children:[(0,s.jsx)(m.xD,{children:w.getHeaderGroups().map(e=>(0,s.jsx)(m.SC,{children:e.headers.map(e=>(0,s.jsx)(m.ss,{children:e.isPlaceholder?null:(0,u.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(m.RM,{children:(null===(l=w.getRowModel().rows)||void 0===l?void 0:l.length)?w.getRowModel().rows.map(e=>(0,s.jsxs)(m.SC,{"data-state":e.getIsSelected()&&"selected",children:[e.getVisibleCells().map(e=>(0,s.jsx)(m.pj,{children:(0,u.ie)(e.column.columnDef.cell,e.getContext())},e.id)),(0,s.jsx)(m.pj,{onClick:()=>console.log(e.original),children:(0,s.jsx)(i.z,{asChild:!0,children:(0,s.jsx)(x.default,{href:"/student-project?projectId=".concat(e.original.id),children:"View Details"})})})]},e.id)):(0,s.jsx)(m.SC,{children:(0,s.jsx)(m.pj,{colSpan:c.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,s.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>w.previousPage(),disabled:!w.getCanPreviousPage(),children:"Previous"}),(0,s.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>w.nextPage(),disabled:!w.getCanNextPage(),children:"Next"})]})]})}var p=a(553),j=a(9259),v=a(4830),w=a(1657),N=a(9323),b=a(5216);let y=v.Z.map(e=>({value:e,label:e}));function C(e){let t=0;for(;t<e.tags.length;){if("Open"==e.status)return!0;t++}return!1}async function S(e){let t=await fetch("".concat("","/api/student/getallprojects"),{method:"GET",withCredentials:!0});return 200===t.status?e(await t.json()):console.log("Error in fetching data"),!0}function Z(){let[e,t]=(0,r.useState)([]),[a,l]=(0,r.useState)([]),[n,o]=(0,r.useState)([]),[c,u]=(0,r.useState)("indeterminate"),[f,m]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1),[v,Z]=(0,r.useState)("All Tags");return(0,r.useEffect)(()=>{S(l)},[]),(0,r.useEffect)(()=>{console.log("mai hi hu bhai bahar se"),a.length>0&&(console.log("mai hi hu bhai andar se"),function(e,t,a,s,l){if("All Tags"===s){e(a);return}e(a.filter(e=>{for(let t of e.tags)if(t===s&&(!l||"Open"===e.status))return!0;return!1}))}(t,0,a,v,h))},[a,v]),console.log("hello"),(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-4 md:gap-8",children:[(0,s.jsx)(i.z,{onClick:()=>{x(!0),t(e.filter(C))},children:"Show Open Projects"}),(0,s.jsxs)(b.J2,{open:f,onOpenChange:m,children:[(0,s.jsx)(b.xo,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",role:"combobox","aria-expanded":f,className:"w-[200px] justify-between",children:["Filter by Domains",(0,s.jsx)(p.Z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),(0,s.jsx)(b.yk,{className:"w-[80vw] p-8",children:(0,s.jsxs)(N.mY,{children:[(0,s.jsx)(N.sZ,{placeholder:"Search Domains"}),(0,s.jsx)(N.rb,{children:"No tag found."}),(0,s.jsx)(N.e8,{children:y.map(e=>(0,s.jsxs)(N.di,{value:e.value,onSelect:e=>{Z(e===v?"":e),m(!1)},children:[(0,s.jsx)(j.Z,{className:(0,w.cn)("mr-2 h-4 w-4",v===e.value?"opacity-100":"opacity-0")}),e.label]},e.value))})]})})]}),(0,s.jsx)(i.z,{variant:"secondary",onClick:()=>{x(!1),t(a),Z("All Tags")},children:"Reset Filters"})]}),(0,s.jsx)(g,{columns:d,data:e})]})}a(2706),a(9842);var k=a(7390),R=a(9269);a(6288);var z=(0,k.Z)(e=>{let[t,a]=(0,r.useState)([]);(0,r.useEffect)(()=>{fetch("".concat("","/api/student/getstudentprojects"),{method:"GET",withCredentials:!0}).then(e=>{200===e.status&&e.json().then(e=>{a(e),console.log(e)})})},[]);let[i,c]=(0,r.useState)(),[d,u]=(0,r.useState)("");return(0,s.jsxs)("div",{className:"container flex h-[90vh] w-screen flex-row py-8 md:gap-4 lg:gap-6",children:[(0,s.jsxs)("div",{className:"student-data-section basis-1/4  flex flex-col gap-10",children:[(0,s.jsx)("div",{className:"flex flex-col gap-4",children:(0,s.jsxs)(l.Zb,{className:"student-card flex flex-row items-center justify-center",children:[(0,s.jsxs)(n.qE,{className:"ml-6",children:[(0,s.jsx)(n.F$,{src:e.user.image,alt:"@shadcn"}),(0,s.jsx)(n.Q5,{children:"CN"})]}),(0,s.jsxs)(l.Ol,{className:"m-auto mr-4",children:[(0,s.jsx)(l.ll,{children:e.user.name}),(0,s.jsx)(l.SZ,{className:"font-bold",children:e.user.email}),(0,s.jsx)(R.Z,{})]})]})}),(0,s.jsxs)(l.Zb,{className:"projects-applied-card flex flex-col",children:[(0,s.jsx)(l.Ol,{children:(0,s.jsx)(l.ll,{children:"Projects Applied"})}),(0,s.jsx)(l.aY,{className:"flex flex-col gap-4 overflow-y-auto max-h-96",children:t.map(e=>{let t="Accepted"===e.status?"default":"Rejected"===e.status?"destructive":"outine";return(0,s.jsxs)("div",{className:"flex flex-row items-center justify-start ",children:[(0,s.jsx)(l.SZ,{className:"basis-1/2",children:e.title}),(0,s.jsxs)(o.C,{variant:t,children:[" ",e.status]})]})})})]})]}),(0,s.jsx)("div",{className:"projects-section basis-3/4 ",children:(0,s.jsx)(Z,{})})]})},"student")},5578:function(e,t,a){"use strict";a.d(t,{P:function(){return k}});var s=a(7437),l=a(4200),r=a(2235),n=a(9580),o=a(9108),i=a(7805),c=a(6806),d=a(9475),u=a(3428),f=a(5561),m=a(9910),h=a(527),x=a(9039),g=a(94),p=a(9724),j=a(1213),v=a(8025),w=a(7252),N=a(7197),b=a(1203),y=a(2891),C=a(5227),S=a(2364),Z=a(9259);let k={logo:l.Z,close:r.Z,spinner:n.Z,chevronLeft:o.Z,chevronRight:i.Z,trash:c.Z,post:d.Z,page:u.Z,media:f.Z,settings:m.Z,billing:h.Z,ellipsis:x.Z,add:g.Z,warning:p.Z,user:j.Z,arrowRight:v.Z,help:w.Z,pizza:N.Z,sun:b.Z,moon:y.Z,laptop:C.Z,upload:S.Z,gitHub:e=>{let{...t}=e;return(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,s.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},check:Z.Z}},9269:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var s=a(7437),l=a(5754);function r(){return(0,s.jsxs)(l.z,{variant:"destructive",size:"sm",onClick:()=>fetch("".concat("","/api/auth/logout"),{method:"GET",credentials:"same-origin",withCredentials:!0}).then(e=>e.json()).then(e=>{e.redirectUrl?window.location.href=e.redirectUrl:window.location.href="/"}),children:["Logout",(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-log-out mx-1",children:[(0,s.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,s.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,s.jsx)("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})]})}},1342:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var s=a(7437);a(2265);var l=a(4848),r=a(5754),n=a(3930),o=a(5578);function i(){let{setTheme:e}=(0,l.F)();return(0,s.jsxs)(n.h_,{children:[(0,s.jsx)(n.$F,{asChild:!0,children:(0,s.jsxs)(r.z,{variant:"ghost",size:"sm",className:"h-8 w-8 px-0",children:[(0,s.jsx)(o.P.sun,{className:"rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(o.P.moon,{className:"absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(n.AW,{align:"end",children:[(0,s.jsxs)(n.Xi,{onClick:()=>e("light"),children:[(0,s.jsx)(o.P.sun,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Light"})]}),(0,s.jsxs)(n.Xi,{onClick:()=>e("dark"),children:[(0,s.jsx)(o.P.moon,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Dark"})]}),(0,s.jsxs)(n.Xi,{onClick:()=>e("system"),children:[(0,s.jsx)(o.P.laptop,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"System"})]})]})]})}},1795:function(e,t,a){"use strict";a.d(t,{qE:function(){return v},Q5:function(){return N},F$:function(){return w}});var s=a(7437),l=a(2265),r=a(2110),n=a(4104),o=a(9830),i=a(2618),c=a(9586);let d="Avatar",[u,f]=(0,n.b)(d),[m,h]=u(d),x=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,...s}=e,[n,o]=(0,l.useState)("idle");return(0,l.createElement)(m,{scope:a,imageLoadingStatus:n,onImageLoadingStatusChange:o},(0,l.createElement)(c.WV.span,(0,r.Z)({},s,{ref:t})))}),g=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,src:s,onLoadingStatusChange:n=()=>{},...d}=e,u=h("AvatarImage",a),f=function(e){let[t,a]=(0,l.useState)("idle");return(0,i.b)(()=>{if(!e){a("error");return}let t=!0,s=new window.Image,l=e=>()=>{t&&a(e)};return a("loading"),s.onload=l("loaded"),s.onerror=l("error"),s.src=e,()=>{t=!1}},[e]),t}(s),m=(0,o.W)(e=>{n(e),u.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,l.createElement)(c.WV.img,(0,r.Z)({},d,{ref:t,src:s})):null}),p=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,delayMs:s,...n}=e,o=h("AvatarFallback",a),[i,d]=(0,l.useState)(void 0===s);return(0,l.useEffect)(()=>{if(void 0!==s){let e=window.setTimeout(()=>d(!0),s);return()=>window.clearTimeout(e)}},[s]),i&&"loaded"!==o.imageLoadingStatus?(0,l.createElement)(c.WV.span,(0,r.Z)({},n,{ref:t})):null});var j=a(1657);let v=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(x,{ref:t,className:(0,j.cn)("relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full",a),...l})});v.displayName=x.displayName;let w=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(g,{ref:t,className:(0,j.cn)("aspect-square h-full w-full",a),...l})});w.displayName=g.displayName;let N=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(p,{ref:t,className:(0,j.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...l})});N.displayName=p.displayName},9842:function(e,t,a){"use strict";a.d(t,{_:function(){return c}});var s=a(7437),l=a(2265),r=a(4602),n=a(7742),o=a(1657);let i=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.f,{ref:t,className:(0,o.cn)(i(),a),...l})});c.displayName=r.f.displayName},9160:function(e,t,a){"use strict";a.d(t,{RM:function(){return i},SC:function(){return c},iA:function(){return n},pj:function(){return u},ss:function(){return d},xD:function(){return o}});var s=a(7437),l=a(2265),r=a(1657);let n=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,r.cn)("w-full caption-bottom text-sm",a),...l})})});n.displayName="Table";let o=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("thead",{ref:t,className:(0,r.cn)("[&_tr]:border-b",a),...l})});o.displayName="TableHeader";let i=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,r.cn)("[&_tr:last-child]:border-0",a),...l})});i.displayName="TableBody",l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...l})}).displayName="TableFooter";let c=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("tr",{ref:t,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...l})});c.displayName="TableRow";let d=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("th",{ref:t,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...l})});d.displayName="TableHead";let u=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("td",{ref:t,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...l})});u.displayName="TableCell",l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("caption",{ref:t,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",a),...l})}).displayName="TableCaption"},585:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(843).Z)("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]])},4602:function(e,t,a){"use strict";a.d(t,{f:function(){return n}});var s=a(2110),l=a(2265),r=a(9586);let n=(0,l.forwardRef)((e,t)=>(0,l.createElement)(r.WV.label,(0,s.Z)({},e,{ref:t,onMouseDown:t=>{var a;null===(a=e.onMouseDown)||void 0===a||a.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))}},function(e){e.O(0,[363,49,794,831,288,830,6,873,137,241,971,69,744],function(){return e(e.s=337)}),_N_E=e.O()}]);