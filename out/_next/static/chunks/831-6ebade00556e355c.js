"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{9108:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(843).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7805:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(843).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7501:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(843).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},2235:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(843).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3685:function(e,n,t){t.d(n,{oC:function(){return nt},VY:function(){return e5},ZA:function(){return e9},ck:function(){return nn},wU:function(){return nu},__:function(){return ne},Uv:function(){return e4},Ee:function(){return nr},Rk:function(){return no},fC:function(){return e3},Z0:function(){return na},Tr:function(){return nl},tu:function(){return ni},fF:function(){return nc},xz:function(){return e7}});var r=t(2110),o=t(2265),u=t(4991),a=t(1266),l=t(4104),c=t(9310),i=t(9586),d=t(7533),s=t(3876),f=t(1260),p=t(6007),m=t(8082),v=t(8687),g=t(4671),w=t(7881),h=t(2642),E=t(9830);let M="rovingFocusGroup.onEntryFocus",_={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[C,y,R]=(0,d.B)(b),[D,k]=(0,l.b)(b,[R]),[I,T]=D(b),O=(0,o.forwardRef)((e,n)=>(0,o.createElement)(C.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(C.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(P,(0,r.Z)({},e,{ref:n}))))),P=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:l,loop:d=!1,dir:f,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:g,...w}=e,h=(0,o.useRef)(null),b=(0,a.e)(n,h),C=(0,s.gm)(f),[R=null,D]=(0,c.T)({prop:p,defaultProp:m,onChange:v}),[k,T]=(0,o.useState)(!1),O=(0,E.W)(g),P=y(t),Z=(0,o.useRef)(!1),[x,A]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=h.current;if(e)return e.addEventListener(M,O),()=>e.removeEventListener(M,O)},[O]),(0,o.createElement)(I,{scope:t,orientation:l,dir:C,loop:d,currentTabStopId:R,onItemFocus:(0,o.useCallback)(e=>D(e),[D]),onItemShiftTab:(0,o.useCallback)(()=>T(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>A(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>A(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,r.Z)({tabIndex:k||0===x?-1:0,"data-orientation":l},w,{ref:b,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{Z.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let n=!Z.current;if(e.target===e.currentTarget&&n&&!k){let n=new CustomEvent(M,_);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=P().filter(e=>e.focusable);F([e.find(e=>e.active),e.find(e=>e.id===R),...e].filter(Boolean).map(e=>e.ref.current))}}Z.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>T(!1))})))}),Z=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:a=!0,active:l=!1,tabStopId:c,...d}=e,s=(0,v.M)(),f=c||s,p=T("RovingFocusGroupItem",t),m=p.currentTabStopId===f,g=y(t),{onFocusableItemAdd:w,onFocusableItemRemove:h}=p;return(0,o.useEffect)(()=>{if(a)return w(),()=>h()},[a,w,h]),(0,o.createElement)(C.ItemSlot,{scope:t,id:f,focusable:a,active:l},(0,o.createElement)(i.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},d,{ref:n,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,p.orientation,p.dir);if(void 0!==n){e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)o.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&o.reverse();let u=o.indexOf(e.currentTarget);o=p.loop?(t=o,r=u+1,t.map((e,n)=>t[(r+n)%t.length])):o.slice(u+1)}setTimeout(()=>F(o))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}var A=t(9143),S=t(6674),L=t(7225);let N=["Enter"," "],K=["ArrowUp","PageDown","End"],U=["ArrowDown","PageUp","Home",...K],V={ltr:[...N,"ArrowRight"],rtl:[...N,"ArrowLeft"]},G={ltr:["ArrowLeft"],rtl:["ArrowRight"]},W="Menu",[B,z,X]=(0,d.B)(W),[Y,H]=(0,l.b)(W,[X,g.D7,k]),j=(0,g.D7)(),q=k(),[J,Q]=Y(W),[$,ee]=Y(W),en=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e,a=j(t);return(0,o.createElement)(g.ee,(0,r.Z)({},a,u,{ref:n}))}),et="MenuPortal",[er,eo]=Y(et,{forceMount:void 0}),eu="MenuContent",[ea,el]=Y(eu),ec=(0,o.forwardRef)((e,n)=>{let t=eo(eu,e.__scopeMenu),{forceMount:u=t.forceMount,...a}=e,l=Q(eu,e.__scopeMenu),c=ee(eu,e.__scopeMenu);return(0,o.createElement)(B.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:u||l.open},(0,o.createElement)(B.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(ei,(0,r.Z)({},a,{ref:n})):(0,o.createElement)(ed,(0,r.Z)({},a,{ref:n})))))}),ei=(0,o.forwardRef)((e,n)=>{let t=Q(eu,e.__scopeMenu),l=(0,o.useRef)(null),c=(0,a.e)(n,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,S.Ry)(e)},[]),(0,o.createElement)(es,(0,r.Z)({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),ed=(0,o.forwardRef)((e,n)=>{let t=Q(eu,e.__scopeMenu);return(0,o.createElement)(es,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),es=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,loop:l=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:M,onDismiss:_,disableOutsideScroll:b,...C}=e,y=Q(eu,t),R=ee(eu,t),D=j(t),k=q(t),I=z(t),[T,P]=(0,o.useState)(null),Z=(0,o.useRef)(null),x=(0,a.e)(n,Z,y.onContentChange),F=(0,o.useRef)(0),S=(0,o.useRef)(""),N=(0,o.useRef)(0),V=(0,o.useRef)(null),G=(0,o.useRef)("right"),W=(0,o.useRef)(0),B=b?L.Z:o.Fragment,X=b?{as:A.g7,allowPinchZoom:!0}:void 0,Y=e=>{var n,t;let r=S.current+e,o=I().filter(e=>!e.disabled),u=document.activeElement,a=null===(n=o.find(e=>e.ref.current===u))||void 0===n?void 0:n.textValue,l=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,u=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(u=u.filter(e=>e!==t));let a=u.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return a!==t?a:void 0}(o.map(e=>e.textValue),r,a),c=null===(t=o.find(e=>e.textValue===l))||void 0===t?void 0:t.ref.current;!function e(n){S.current=n,window.clearTimeout(F.current),""!==n&&(F.current=window.setTimeout(()=>e(""),1e3))}(r),c&&setTimeout(()=>c.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(F.current),[]),(0,p.EW)();let H=(0,o.useCallback)(e=>{var n,t,r;return G.current===(null===(n=V.current)||void 0===n?void 0:n.side)&&!!(r=null===(t=V.current)||void 0===t?void 0:t.area)&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,u=n.length-1;e<n.length;u=e++){let a=n[e].x,l=n[e].y,c=n[u].x,i=n[u].y;l>r!=i>r&&t<(c-a)*(r-l)/(i-l)+a&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(ea,{scope:t,searchRef:S,onItemEnter:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),onItemLeave:(0,o.useCallback)(e=>{var n;H(e)||(null===(n=Z.current)||void 0===n||n.focus(),P(null))},[H]),onTriggerLeave:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),pointerGraceTimerRef:N,onPointerGraceIntentChange:(0,o.useCallback)(e=>{V.current=e},[])},(0,o.createElement)(B,X,(0,o.createElement)(m.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,u.M)(i,e=>{var n;e.preventDefault(),null===(n=Z.current)||void 0===n||n.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:M,onDismiss:_},(0,o.createElement)(O,(0,r.Z)({asChild:!0},k,{dir:R.dir,orientation:"vertical",loop:l,currentTabStopId:T,onCurrentTabStopIdChange:P,onEntryFocus:(0,u.M)(v,e=>{R.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(g.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eF(y.open),"data-radix-menu-content":"",dir:R.dir},D,C,{ref:x,style:{outline:"none",...C.style},onKeyDown:(0,u.M)(C.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&Y(e.key));let o=Z.current;if(e.target!==o||!U.includes(e.key))return;e.preventDefault();let u=I().filter(e=>!e.disabled).map(e=>e.ref.current);K.includes(e.key)&&u.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(u)}),onBlur:(0,u.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(F.current),S.current="")}),onPointerMove:(0,u.M)(e.onPointerMove,eL(e=>{let n=e.target,t=W.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>W.current?"right":"left";G.current=n,W.current=e.clientX}}))})))))))}),ef=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},u,{ref:n}))}),ep=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},u,{ref:n}))}),em="MenuItem",ev="menu.itemSelect",eg=(0,o.forwardRef)((e,n)=>{let{disabled:t=!1,onSelect:l,...c}=e,d=(0,o.useRef)(null),s=ee(em,e.__scopeMenu),f=el(em,e.__scopeMenu),p=(0,a.e)(n,d),m=(0,o.useRef)(!1);return(0,o.createElement)(ew,(0,r.Z)({},c,{ref:p,disabled:t,onClick:(0,u.M)(e.onClick,()=>{let e=d.current;if(!t&&e){let n=new CustomEvent(ev,{bubbles:!0,cancelable:!0});e.addEventListener(ev,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,n),n.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),m.current=!0},onPointerUp:(0,u.M)(e.onPointerUp,e=>{var n;m.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let n=""!==f.searchRef.current;!t&&(!n||" "!==e.key)&&N.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),ew=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,disabled:l=!1,textValue:c,...d}=e,s=el(em,t),f=q(t),p=(0,o.useRef)(null),m=(0,a.e)(n,p),[v,g]=(0,o.useState)(!1),[w,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var n;h((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[d.children]),(0,o.createElement)(B.ItemSlot,{scope:t,disabled:l,textValue:null!=c?c:w},(0,o.createElement)(Z,(0,r.Z)({asChild:!0},f,{focusable:!l}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0},d,{ref:m,onPointerMove:(0,u.M)(e.onPointerMove,eL(e=>{l?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,u.M)(e.onPointerLeave,eL(e=>s.onItemLeave(e))),onFocus:(0,u.M)(e.onFocus,()=>g(!0)),onBlur:(0,u.M)(e.onBlur,()=>g(!1))}))))}),eh=(0,o.forwardRef)((e,n)=>{let{checked:t=!1,onCheckedChange:a,...l}=e;return(0,o.createElement)(ey,{scope:e.__scopeMenu,checked:t},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eA(t)?"mixed":t},l,{ref:n,"data-state":eS(t),onSelect:(0,u.M)(l.onSelect,()=>null==a?void 0:a(!!eA(t)||!t),{checkForDefaultPrevented:!1})})))}),[eE,eM]=Y("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),e_=(0,o.forwardRef)((e,n)=>{let{value:t,onValueChange:u,...a}=e,l=(0,E.W)(u);return(0,o.createElement)(eE,{scope:e.__scopeMenu,value:t,onValueChange:l},(0,o.createElement)(ef,(0,r.Z)({},a,{ref:n})))}),eb=(0,o.forwardRef)((e,n)=>{let{value:t,...a}=e,l=eM("MenuRadioItem",e.__scopeMenu),c=t===l.value;return(0,o.createElement)(ey,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemradio","aria-checked":c},a,{ref:n,"data-state":eS(c),onSelect:(0,u.M)(a.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,t)},{checkForDefaultPrevented:!1})})))}),eC="MenuItemIndicator",[ey,eR]=Y(eC,{checked:!1}),eD=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,forceMount:u,...a}=e,l=eR(eC,t);return(0,o.createElement)(h.z,{present:u||eA(l.checked)||!0===l.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},a,{ref:n,"data-state":eS(l.checked)})))}),ek=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},u,{ref:n}))}),eI=((e,n)=>{let{__scopeMenu:t,...u}=e,a=j(t);return(0,o.createElement)(g.Eh,(0,r.Z)({},a,u,{ref:n}))},"MenuSub"),[eT,eO]=Y(eI),eP="MenuSubTrigger",eZ=(0,o.forwardRef)((e,n)=>{let t=Q(eP,e.__scopeMenu),l=ee(eP,e.__scopeMenu),c=eO(eP,e.__scopeMenu),i=el(eP,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(en,(0,r.Z)({asChild:!0},p),(0,o.createElement)(ew,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":c.contentId,"data-state":eF(t.open)},e,{ref:(0,a.F)(n,c.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,u.M)(e.onPointerMove,eL(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:(0,u.M)(e.onPointerLeave,eL(e=>{var n,r;m();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,u="right"===n,a=o[u?"left":"right"],l=o[u?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(u?-5:5),y:e.clientY},{x:a,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:a,y:o.bottom}],side:n}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,u.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&V[l.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})))}),ex=(0,o.forwardRef)((e,n)=>{let t=eo(eu,e.__scopeMenu),{forceMount:l=t.forceMount,...c}=e,i=Q(eu,e.__scopeMenu),d=ee(eu,e.__scopeMenu),s=eO("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,a.e)(n,f);return(0,o.createElement)(B.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:l||i.open},(0,o.createElement)(B.Slot,{scope:e.__scopeMenu},(0,o.createElement)(es,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=f.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=G[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eF(e){return e?"open":"closed"}function eA(e){return"indeterminate"===e}function eS(e){return eA(e)?"indeterminate":e?"checked":"unchecked"}function eL(e){return n=>"mouse"===n.pointerType?e(n):void 0}let eN=e=>{let{__scopeMenu:n,open:t=!1,children:r,dir:u,onOpenChange:a,modal:l=!0}=e,c=j(n),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,E.W)(a),m=(0,s.gm)(u);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,o.createElement)(g.fC,c,(0,o.createElement)(J,{scope:n,open:t,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)($,{scope:n,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:l},r)))},eK=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:u}=e,a=Q(et,n);return(0,o.createElement)(er,{scope:n,forceMount:t},(0,o.createElement)(h.z,{present:t||a.open},(0,o.createElement)(w.h,{asChild:!0,container:u},r)))},eU=e=>{let{__scopeMenu:n,children:t,open:r=!1,onOpenChange:u}=e,a=Q(eI,n),l=j(n),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,E.W)(u);return(0,o.useEffect)(()=>(!1===a.open&&f(!1),()=>f(!1)),[a.open,f]),(0,o.createElement)(g.fC,l,(0,o.createElement)(J,{scope:n,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(eT,{scope:n,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:c,onTriggerChange:i},t)))},eV="DropdownMenu",[eG,eW]=(0,l.b)(eV,[H]),eB=H(),[ez,eX]=eG(eV),eY=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,disabled:l=!1,...c}=e,d=eX("DropdownMenuTrigger",t),s=eB(t);return(0,o.createElement)(en,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},c,{ref:(0,a.F)(n,d.triggerRef),onPointerDown:(0,u.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eH=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,l=eX("DropdownMenuContent",t),c=eB(t),i=(0,o.useRef)(!1);return(0,o.createElement)(ec,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},c,a,{ref:n,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=l.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,u.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ej=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(ef,(0,r.Z)({},a,u,{ref:n}))}),eq=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(ep,(0,r.Z)({},a,u,{ref:n}))}),eJ=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(eg,(0,r.Z)({},a,u,{ref:n}))}),eQ=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(eh,(0,r.Z)({},a,u,{ref:n}))}),e$=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(e_,(0,r.Z)({},a,u,{ref:n}))}),e0=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(eb,(0,r.Z)({},a,u,{ref:n}))}),e1=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(eD,(0,r.Z)({},a,u,{ref:n}))}),e6=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(ek,(0,r.Z)({},a,u,{ref:n}))}),e8=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(eZ,(0,r.Z)({},a,u,{ref:n}))}),e2=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=eB(t);return(0,o.createElement)(ex,(0,r.Z)({},a,u,{ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e3=e=>{let{__scopeDropdownMenu:n,children:t,dir:u,open:a,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,s=eB(n),f=(0,o.useRef)(null),[p=!1,m]=(0,c.T)({prop:a,defaultProp:l,onChange:i});return(0,o.createElement)(ez,{scope:n,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eN,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:u,modal:d}),t))},e7=eY,e4=e=>{let{__scopeDropdownMenu:n,...t}=e,u=eB(n);return(0,o.createElement)(eK,(0,r.Z)({},u,t))},e5=eH,e9=ej,ne=eq,nn=eJ,nt=eQ,nr=e$,no=e0,nu=e1,na=e6,nl=e=>{let{__scopeDropdownMenu:n,children:t,open:u,onOpenChange:a,defaultOpen:l}=e,i=eB(n),[d=!1,s]=(0,c.T)({prop:u,defaultProp:l,onChange:a});return(0,o.createElement)(eU,(0,r.Z)({},i,{open:d,onOpenChange:s}),t)},nc=e8,ni=e2},2642:function(e,n,t){t.d(n,{z:function(){return l}});var r=t(2265),o=t(4887),u=t(1266),a=t(2618);let l=e=>{let{present:n,children:t}=e,l=function(e){var n,t;let[u,l]=(0,r.useState)(),i=(0,r.useRef)({}),d=(0,r.useRef)(e),s=(0,r.useRef)("none"),[f,p]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return(0,r.useEffect)(()=>{let e=c(i.current);s.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let n=i.current,t=d.current;if(t!==e){let r=s.current,o=c(n);e?p("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?p("UNMOUNT"):t&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,a.b)(()=>{if(u){let e=e=>{let n=c(i.current).includes(e.animationName);e.target===u&&n&&(0,o.flushSync)(()=>p("ANIMATION_END"))},n=e=>{e.target===u&&(s.current=c(i.current))};return u.addEventListener("animationstart",n),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",n),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}p("ANIMATION_END")},[u,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),l(e)},[])}}(n),i="function"==typeof t?t({present:l.isPresent}):r.Children.only(t),d=(0,u.e)(l.ref,i.ref);return"function"==typeof t||l.isPresent?(0,r.cloneElement)(i,{ref:d}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"}}]);