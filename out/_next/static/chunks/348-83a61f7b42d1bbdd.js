"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{2235:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},7907:function(e,t,n){var r=n(5313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},2936:function(e,t,n){n.d(t,{Dx:function(){return q},VY:function(){return j},aV:function(){return Y},dk:function(){return G},fC:function(){return X},h_:function(){return K},x8:function(){return H},xz:function(){return B}});var r=n(2110),o=n(2265),u=n(4991),l=n(1266),a=n(4104),i=n(8687),c=n(9310),s=n(1260),d=n(8082),f=n(7881),p=n(2642),m=n(9586),g=n(6007),v=n(7225),E=n(6674),_=n(9143);let D="Dialog",[R,O]=(0,a.b)(D),[M,N]=R(D),h=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,i=N("DialogTrigger",n),c=(0,l.e)(t,i.triggerRef);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":L(i.open)},a,{ref:c,onClick:(0,u.M)(e.onClick,i.onOpenToggle)}))}),C="DialogPortal",[b,I]=R(C,{forceMount:void 0}),y="DialogOverlay",T=(0,o.forwardRef)((e,t)=>{let n=I(y,e.__scopeDialog),{forceMount:u=n.forceMount,...l}=e,a=N(y,e.__scopeDialog);return a.modal?(0,o.createElement)(p.z,{present:u||a.open},(0,o.createElement)(A,(0,r.Z)({},l,{ref:t}))):null}),A=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,l=N(y,n);return(0,o.createElement)(v.Z,{as:_.g7,allowPinchZoom:!0,shards:[l.contentRef]},(0,o.createElement)(m.WV.div,(0,r.Z)({"data-state":L(l.open)},u,{ref:t,style:{pointerEvents:"auto",...u.style}})))}),w="DialogContent",P=(0,o.forwardRef)((e,t)=>{let n=I(w,e.__scopeDialog),{forceMount:u=n.forceMount,...l}=e,a=N(w,e.__scopeDialog);return(0,o.createElement)(p.z,{present:u||a.open},a.modal?(0,o.createElement)(k,(0,r.Z)({},l,{ref:t})):(0,o.createElement)(Z,(0,r.Z)({},l,{ref:t})))}),k=(0,o.forwardRef)((e,t)=>{let n=N(w,e.__scopeDialog),a=(0,o.useRef)(null),i=(0,l.e)(t,n.contentRef,a);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,E.Ry)(e)},[]),(0,o.createElement)(F,(0,r.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault())}))}),Z=(0,o.forwardRef)((e,t)=>{let n=N(w,e.__scopeDialog),u=(0,o.useRef)(!1),l=(0,o.useRef)(!1);return(0,o.createElement)(F,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(u.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),u.current=!1,l.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(u.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let a=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}}))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:u,onOpenAutoFocus:a,onCloseAutoFocus:i,...c}=e,f=N(w,n),p=(0,o.useRef)(null),m=(0,l.e)(t,p);return(0,g.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d.M,{asChild:!0,loop:!0,trapped:u,onMountAutoFocus:a,onUnmountAutoFocus:i},(0,o.createElement)(s.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":L(f.open)},c,{ref:m,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),U="DialogTitle",S=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,l=N(U,n);return(0,o.createElement)(m.WV.h2,(0,r.Z)({id:l.titleId},u,{ref:t}))}),V=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,l=N("DialogDescription",n);return(0,o.createElement)(m.WV.p,(0,r.Z)({id:l.descriptionId},u,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=N("DialogClose",n);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button"},l,{ref:t,onClick:(0,u.M)(e.onClick,()=>a.onOpenChange(!1))}))});function L(e){return e?"open":"closed"}let[z,x]=(0,a.k)("DialogTitleWarning",{contentName:w,titleName:U,docsSlug:"dialog"}),X=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:u,onOpenChange:l,modal:a=!0}=e,s=(0,o.useRef)(null),d=(0,o.useRef)(null),[f=!1,p]=(0,c.T)({prop:r,defaultProp:u,onChange:l});return(0,o.createElement)(M,{scope:t,triggerRef:s,contentRef:d,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:f,onOpenChange:p,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p]),modal:a},n)},B=h,K=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:u}=e,l=N(C,t);return(0,o.createElement)(b,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(p.z,{present:n||l.open},(0,o.createElement)(f.h,{asChild:!0,container:u},e))))},Y=T,j=P,q=S,G=V,H=W},2642:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(4887),u=n(1266),l=n(2618);let a=e=>{let{present:t,children:n}=e,a=function(e){var t,n;let[u,a]=(0,r.useState)(),c=(0,r.useRef)({}),s=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=i(c.current);d.current="mounted"===f?e:"none"},[f]),(0,l.b)(()=>{let t=c.current,n=s.current;if(n!==e){let r=d.current,o=i(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),s.current=e}},[e,p]),(0,l.b)(()=>{if(u){let e=e=>{let t=i(c.current).includes(e.animationName);e.target===u&&t&&(0,o.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===u&&(d.current=i(c.current))};return u.addEventListener("animationstart",t),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",t),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}p("ANIMATION_END")},[u,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),a(e)},[])}}(t),c="function"==typeof n?n({present:a.isPresent}):r.Children.only(n),s=(0,u.e)(a.ref,c.ref);return"function"==typeof n||a.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function i(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"}}]);