"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[307],{9688:(ee,j,d)=>{d.d(j,{DG:()=>q,Zu:()=>J,X4:()=>D,oq:()=>N,l:()=>P,ai:()=>B});var n=d(4858);class h{static store=new Map;static set(a,e){h.has(a)||h.store.set(a,e)}static get(a){if(h.has(a))return h.store.get(a)}static remove(a){h.has(a)&&h.store.delete(a)}static has(a){return h.store.has(a)}static getAllInstances(){return h.store}}const x={overlay:!0,baseClass:"drawer",overlayClass:"drawer-overlay",direction:"end"};let q=(()=>{class o{element;overlayElement=null;toggleElement=null;options;instanceUid;name="";shown=!1;lastWidth=0;closeElement=null;constructor(e,t){this.element=e,this.options=Object.assign(x,t),this.instanceUid=(0,n.xQ)("drawer"),this.overlayElement=null,this.name=this.element.getAttribute("data-kt-drawer-name")||"",this.shown=!1,this.toggleElement=null,this._handlers(),this._update(),h.set(this.element.id,this)}_handlers=()=>{const e=this._getOption("toggle"),t=this._getOption("close");null!==e&&e.length>0&&n.zS.on(document.body,e,"click",s=>{s.preventDefault(),this.toggleElement=document.getElementById(e),this._toggle()}),null!==t&&t.length>0&&n.zS.on(document.body,t,"click",s=>{s.preventDefault(),this.closeElement=document.getElementById(t),this._hide()})};_update=()=>{const e=String(this._getOption("width")),t=String(this._getOption("direction")),s=this.element.classList.contains(`${this.options.baseClass}-on`),i=String(document.body.getAttribute(`data-kt-drawer-${this.name}-`));this.shown=!0===s&&"on"===i,!0===this._getOption("activate")?(this.element.classList.add(this.options.baseClass),this.element.classList.add(`${this.options.baseClass}-${t}`),n.ET.set(this.element,"width",e,!0),this.lastWidth=parseInt(e)):(n.ET.set(this.element,"width",""),this.element.classList.remove(this.options.baseClass),this.element.classList.remove(`${this.options.baseClass}-${t}`),this._hide())};_getOption=e=>{const t=this.element.getAttribute(`data-kt-drawer-${e}`);if(t){let s=(0,n.wV)(t);return null!==s&&"true"===String(s)||(null===s||"false"!==String(s))&&s}{const s=(0,n.Aj)(e),i=(0,n.cY)(this.options,s);return i?(0,n.wV)(i):null}};_toggle=()=>{!1!==n.BM.trigger(this.element,"kt.drawer.toggle")&&(this.shown?this._hide():this._show(),n.BM.trigger(this.element,"kt.drawer.toggled"))};_hide=()=>{!1!==n.BM.trigger(this.element,"kt.drawer.hide")&&(this.shown=!1,this._deleteOverlay(),document.body.removeAttribute(`data-kt-drawer-${this.name}`),document.body.removeAttribute("data-kt-drawer"),this.element.classList.remove(`${this.options.baseClass}-on`),null!=this.toggleElement&&this.toggleElement.classList.remove("active"),n.BM.trigger(this.element,"kt.drawer.after.hidden"))};_show=()=>{!1!==n.BM.trigger(this.element,"kt.drawer.show")&&(this.shown=!0,this._createOverlay(),document.body.setAttribute(`data-kt-drawer-${this.name}`,"on"),document.body.setAttribute("data-kt-drawer","on"),this.element.classList.add(`${this.options.baseClass}-on`),null!==this.toggleElement&&this.toggleElement.classList.add("active"),n.BM.trigger(this.element,"kt.drawer.shown"))};_createOverlay=()=>{if(!0===this._getOption("overlay")){this.overlayElement=document.createElement("DIV");const e=(0,n.qD)(this.element,"z-index");if(e){const s=parseInt(e)-1;n.ET.set(this.overlayElement,"z-index",s)}document.body.append(this.overlayElement);const t=this._getOption("overlay-class");t&&this.overlayElement.classList.add(t.toString()),this.overlayElement.addEventListener("click",s=>{s.preventDefault(),this._hide()})}};_deleteOverlay=()=>{null!==this.overlayElement&&this.overlayElement.parentNode&&this.overlayElement.parentNode.removeChild(this.overlayElement)};_getDirection=()=>"left"===String(this._getOption("direction"))?"left":"right";_getWidth=()=>{let e=this._getOption("width");return e&&"auto"===e&&(e=(0,n.qD)(this.element,"width")),e};toggle=()=>{this._toggle()};show=()=>{this._show()};hide=()=>{this._hide()};isShown=()=>this.shown;update=()=>{this._update()};goElement=()=>this.element;on=(e,t)=>n.BM.on(this.element,e,t);one=(e,t)=>n.BM.one(this.element,e,t);off=(e,t)=>n.BM.off(this.element,e,t);trigger=(e,t)=>n.BM.trigger(this.element,e,t);static hasInstace=e=>h.has(e);static getInstance=e=>h.get(e);static hideAll=()=>{h.getAllInstances().forEach(t=>{t.hide()})};static updateAll=()=>{h.getAllInstances().forEach(t=>{t.update()})};static createInstances(e){document.body.querySelectorAll(e).forEach(s=>{const i=s;let r=o.getInstance(i.id);r||(r=new o(i,x)),r.element=i,r.hide()})}static handleDismiss=()=>{n.zS.on(document.body,'[data-kt-drawer-dismiss="true"]',"click",()=>{const e=this.closest('[data-kt-drawer="true"]');if(e){const t=o.getInstance(e);t&&t.isShown()&&t.hide()}})};static initGlobalHandlers(){window.addEventListener("resize",function(){(0,n.nF)(void 0,()=>{document.body.querySelectorAll('[data-kt-drawer="true"]').forEach(s=>{const i=s,r=o.getInstance(i.id);r&&(r.element=i,r.update())})},200)})}static bootstrap=()=>{o.createInstances('[data-kt-drawer="true"]'),o.initGlobalHandlers(),o.handleDismiss()};static reinitialization=()=>{o.createInstances('[data-kt-drawer="true"]'),o.hideAll(),o.updateAll(),o.handleDismiss()}}return o})();class v{static get(a){let e=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}static set(a,e,t){const s={path:"/",...t};s.expires instanceof Date&&(s.expires=s.expires.toUTCString());let i=encodeURIComponent(a)+"="+encodeURIComponent(e);for(let r in s){i+="; "+r;let l=s[r];!0!==l&&(i+="="+l)}document.cookie=i}static delete(a){v.set(a,"",{"max-age":-1})}}const k={saveState:!0};let D=(()=>{class o{element;options;id;constructor(e,t){this.element=e,this.options=Object.assign(k,t),this.id=this.element.getAttribute("id")||"",this.update(),n.$j.set(this.element,"scroll",this)}getOption=e=>{if(!0===this.element.hasAttribute("data-kt-scroll-"+e)){const t=this.element.getAttribute("data-kt-scroll-"+e)||"";let s=(0,n.wV)(t);return null!==s&&"true"===String(s)?s=!0:null!==s&&"false"===String(s)&&(s=!1),s}{const t=(0,n.Aj)(e),s=(0,n.cY)(this.options,t);return s?(0,n.wV)(s):null}};getHeightType=()=>this.getOption("height")?"height":this.getOption("min-height")?"min-height":this.getOption("max-height")?"max-height":void 0;getAutoHeight=()=>{let e=(0,n.tM)().height;const t=this.getOption("dependencies"),s=this.getOption("wrappers"),i=this.getOption("offset");if(null!==t){const u=document.querySelectorAll(t);if(u&&u.length>0)for(let b=0,m=u.length;b<m;b++){const p=u[b];if(!1===(0,n.Zj)(p))continue;e-=parseInt((0,n.qD)(p,"height")),e-=parseInt((0,n.qD)(p,"margin-top")),e-=parseInt((0,n.qD)(p,"margin-bottom"));const I=(0,n.qD)(p,"border-top");I&&(e-=parseInt(I));const _=(0,n.qD)(p,"border-bottom");_&&(e-=parseInt(_))}}if(null!==s){var r=document.querySelectorAll(s);if(r&&r.length>0)for(let u=0,b=r.length;u<b;u++){const m=r[u];if(!(0,n.Zj)(m))continue;e-=parseInt((0,n.qD)(m,"margin-top")),e-=parseInt((0,n.qD)(m,"margin-bottom")),e-=parseInt((0,n.qD)(m,"padding-top")),e-=parseInt((0,n.qD)(m,"padding-bottom"));const p=(0,n.qD)(m,"border-top");p&&(e-=parseInt(p));const I=(0,n.qD)(m,"border-bottom");I&&(e-=parseInt(I))}}null!==i&&(e-=parseInt(i)),e-=parseInt((0,n.qD)(this.element,"margin-top")),e-=parseInt((0,n.qD)(this.element,"margin-bottom"));const l=(0,n.qD)(this.element,"border-top");l&&(e-=parseInt(l));const c=(0,n.qD)(this.element,"border-bottom");return c&&(e-=parseInt(c)),e=String(e)+"px",e};setupHeight=()=>{let e=this.getHeight(),t=this.getHeightType();n.ET.set(this.element,t,null!==e&&e.length>0?e:"")};setupState=()=>{if(!0===this.getOption("save-state")&&this.id){const t=v.get(this.id+"st");if(t){var e=parseInt(t);e>0&&(this.element.scrollTop=e)}}};setupScrollHandler=()=>{!0===this.getOption("save-state")&&this.id?this.element.addEventListener("scroll",this.scrollHandler):this.element.removeEventListener("scroll",this.scrollHandler)};scrollHandler=()=>{v.set(this.id+"st",this.element.scrollTop,{})};destroyScrollHandler=()=>{this.element.removeEventListener("scroll",this.scrollHandler)};resetHeight=()=>{const e=this.getHeightType();e&&n.ET.set(this.element,e,"")};update=()=>{!0!==this.getOption("activate")&&this.element.hasAttribute("data-kt-scroll-activate")?(this.resetHeight(),this.destroyScrollHandler()):(this.setupHeight(),this.setupScrollHandler(),this.setupState())};getHeight=()=>{const e=this.getHeightType(),t=this.getOption(e||"");return t instanceof Function?t.call(t):null!==t&&"string"==typeof t&&"auto"===t.toLowerCase()?this.getAutoHeight():t};getElement=()=>this.element;static hasInstace(e){return n.$j.has(e,"scroll")}static getInstance(e){if(null!==e&&o.hasInstace(e)){const t=n.$j.get(e,"scroll");if(t)return t}}static createInstances(e){document.body.querySelectorAll(e).forEach(s=>{const i=s;let r=o.getInstance(i);r||(r=new o(i,k))})}static destroyAll(e='[data-kt-scroll="true"]'){}static bootstrap(e='[data-kt-scroll="true"]'){o.createInstances(e),o.resize()}static createInstance=(e,t=k)=>{let s=o.getInstance(e);return s||(s=new o(e,t)),s};static reinitialization(e='[data-kt-scroll="true"]'){o.createInstances(e)}static updateAll(){document.body.querySelectorAll('[data-kt-scroll="true"]').forEach(t=>{const s=o.getInstance(t);s&&s.update()})}static resize(){window.addEventListener("resize",function(){(0,n.nF)(void 0,()=>{o.updateAll()},200)})}}return o})();const w={offset:200,speed:600};let N=(()=>{class o{element;options;instanceUid;constructor(e,t){this.element=e,this.options=Object.assign(w,t),this.instanceUid=(0,n.xQ)("scrolltop"),this._handlers(),n.$j.set(this.element,"scrolltop",this)}_handlers=()=>{window.addEventListener("scroll",()=>{(0,n.nF)(void 0,()=>{this._scroll()})}),this.element.addEventListener("click",t=>{t.preventDefault(),this._go()})};_scroll=()=>{const e=parseInt(this._getOption("offset"));(0,n.hY)()>e?document.body.hasAttribute("data-kt-scrolltop")||document.body.setAttribute("data-kt-scrolltop","on"):document.body.hasAttribute("data-kt-scrolltop")&&document.body.removeAttribute("data-kt-scrolltop")};_go=()=>{const e=parseInt(this._getOption("speed"));n.go.scrollTop(0,e)};_getOption=e=>{const t=this.element.getAttribute(`data-kt-scrolltop-${e}`);if(t){const r=(0,n.wV)(t);return null!==r&&"true"===String(r)}const s=(0,n.Aj)(e),i=(0,n.cY)(this.options,s);return i?(0,n.wV)(i):null};go=()=>this._go();getElement=()=>this.element;static getInstance=e=>{const t=n.$j.get(e,"scrolltop");if(t)return t};static createInstances=e=>{document.body.querySelectorAll(e).forEach(s=>{const i=s;let r=o.getInstance(i);r||(r=new o(i,w))})};static createInsance=(e,t=w)=>{const s=document.body.querySelector(e);if(!s)return;const i=s;let r=o.getInstance(i);return r||(r=new o(i,t)),r};static bootstrap=()=>{o.createInstances('[data-kt-scrolltop="true"]')};static reinitialization=()=>{o.createInstances('[data-kt-scrolltop="true"]')};static goTop=()=>{n.go.scrollTop(0,w.speed)}}return o})();const E={offset:200,reverse:!1,animation:!0,animationSpeed:"0.3s",animationClass:"animation-slide-in-down"};let P=(()=>{class o{element;options;instanceUid;instanceName="";attributeName;attributeName2;eventTriggerState;lastScrollTop;constructor(e,t){this.element=e,this.options=Object.assign(E,t),this.instanceUid=(0,n.xQ)("sticky"),this.instanceName=this.element.getAttribute("data-kt-sticky-name"),this.attributeName="data-kt-sticky-"+this.instanceName,this.attributeName2="data-kt-"+this.instanceName,this.eventTriggerState=!0,this.lastScrollTop=0,window.addEventListener("scroll",this.scroll),this.scroll(),n.$j.set(this.element,"sticky",this)}scroll=()=>{let e=this.getOption("offset"),t=this.getOption("reverse");if(!1===e)return;let s=0;"string"==typeof e&&(s=parseInt(e));const i=(0,n.hY)();if(!0===t)return i>s&&this.lastScrollTop<i?(!1===document.body.hasAttribute(this.attributeName)&&(this.enable(),document.body.setAttribute(this.attributeName,"on"),document.body.setAttribute(this.attributeName2,"on")),!0===this.eventTriggerState&&(n.BM.trigger(this.element,"kt.sticky.on"),n.BM.trigger(this.element,"kt.sticky.change"),this.eventTriggerState=!1)):(document.body.hasAttribute(this.attributeName)&&(this.disable(),document.body.removeAttribute(this.attributeName),document.body.removeAttribute(this.attributeName2)),!1===this.eventTriggerState&&(n.BM.trigger(this.element,"kt.sticky.off"),n.BM.trigger(this.element,"kt.sticky.change"),this.eventTriggerState=!0)),void(this.lastScrollTop=i);i>s?(!1===document.body.hasAttribute(this.attributeName)&&(this.enable(),document.body.setAttribute(this.attributeName,"on"),document.body.setAttribute(this.attributeName2,"on")),!0===this.eventTriggerState&&(n.BM.trigger(this.element,"kt.sticky.on"),n.BM.trigger(this.element,"kt.sticky.change"),this.eventTriggerState=!1)):(!0===document.body.hasAttribute(this.attributeName)&&(this.disable(),document.body.removeAttribute(this.attributeName),document.body.removeAttribute(this.attributeName2)),!1===this.eventTriggerState&&(n.BM.trigger(this.element,"kt.sticky.off"),n.BM.trigger(this.element,"kt.sticky.change"),this.eventTriggerState=!0))};getOption=e=>{const t="data-kt-sticky-"+e;if(!0===this.element.hasAttribute(t)){const s=this.element.getAttribute(t),i=(0,n.wV)(s||"");return null!==i&&"true"===String(i)||(null===i||"false"!==String(i))&&i}{const s=(0,n.Aj)(e),i=(0,n.cY)(this.options,s);if(i)return(0,n.wV)(i)}};disable=()=>{n.ET.remove(this.element,"top"),n.ET.remove(this.element,"width"),n.ET.remove(this.element,"left"),n.ET.remove(this.element,"right"),n.ET.remove(this.element,"z-index"),n.ET.remove(this.element,"position")};enable=(e=!1)=>{const t=this.getOption("top"),s=this.getOption("left");let i=this.getOption("width");const r=this.getOption("zindex");if(!0!==e&&!0===this.getOption("animation")&&(n.ET.set(this.element,"animationDuration",this.getOption("animationSpeed")),n.go.animateClass(this.element,"animation "+this.getOption("animationClass"))),null!==r&&(n.ET.set(this.element,"z-index",r),n.ET.set(this.element,"position","fixed")),null!==t&&n.ET.set(this.element,"top",t),null!=i){const c=(0,n.cY)(i,"target");if(c){const u=document.querySelector(c);u&&(i=(0,n.qD)(u,"width"))}n.ET.set(this.element,"width",i)}if(null!==s&&"auto"===String(s).toLowerCase()){var l=(0,n.Mk)(this.element).left;l>0&&n.ET.set(this.element,"left",String(l)+"px")}};update=()=>{!0===document.body.hasAttribute(this.attributeName)&&(this.disable(),document.body.removeAttribute(this.attributeName),document.body.removeAttribute(this.attributeName2),this.enable(!0),document.body.setAttribute(this.attributeName,"on"),document.body.setAttribute(this.attributeName2,"on"))};on=(e,t)=>n.BM.on(this.element,e,t);one=(e,t)=>n.BM.one(this.element,e,t);off=(e,t)=>n.BM.off(this.element,e,t);trigger=e=>n.BM.trigger(this.element,e);static hasInstace(e){return n.$j.has(e,"sticky")}static getInstance(e){if(null!==e&&o.hasInstace(e)){const t=n.$j.get(e,"sticky");if(t)return t}}static createInstances(e){document.body.querySelectorAll(e).forEach(s=>{const i=s;let r=o.getInstance(i);r||(r=new o(i,E))})}static createInsance=(e,t=E)=>{const s=document.body.querySelector(e);if(!s)return;const i=s;let r=o.getInstance(i);return r||(r=new o(i,t)),r};static bootstrap(e='[data-kt-sticky="true"]'){o.createInstances(e)}static reInitialization(e='[data-kt-sticky="true"]'){o.createInstances(e)}}return o})();const L={saveState:!1};let B=(()=>{class o{element;instanceUid;options;state="";mode="";target=null;attribute="";constructor(e,t){this.options=Object.assign(L,t),this.instanceUid=(0,n.xQ)("toggle"),this.element=e;const s=this.element.getAttribute("data-kt-toggle-target");s&&(this.target=document.querySelector(s));const i=this.element.getAttribute("data-kt-toggle-state");this.state=i||"";const r=this.element.getAttribute("data-kt-toggle-mode");this.mode=r||"",this.attribute="data-kt-"+this.element.getAttribute("data-kt-toggle-name"),this._handlers(),n.$j.set(this.element,"toggle",this)}_handlers=()=>{this.element.addEventListener("click",e=>{e.preventDefault(),(""===this.mode||"off"===this.mode&&!this._isEnabled()||"on"===this.mode&&this._isEnabled())&&this._toggle()})};_toggle=()=>(n.BM.trigger(this.element,"kt.toggle.change"),this._isEnabled()?this._disable():this._enable(),n.BM.trigger(this.element,"kt.toggle.changed"),this);_enable=()=>{if(!this._isEnabled())return n.BM.trigger(this.element,"kt.toggle.enable"),this.target?.setAttribute(this.attribute,"on"),this.state.length>0&&this.element.classList.add(this.state),this.options.saveState&&v.set(this.attribute,"on",{}),n.BM.trigger(this.element,"kt.toggle.enabled"),this};_disable=()=>!!this._isEnabled()&&(n.BM.trigger(this.element,"kt.toggle.disable"),this.target?.removeAttribute(this.attribute),this.state.length>0&&this.element.classList.remove(this.state),this.options.saveState&&v.delete(this.attribute),n.BM.trigger(this.element,"kt.toggle.disabled"),this);_isEnabled=()=>!!this.target&&"on"===String(this.target.getAttribute(this.attribute)).toLowerCase();toggle=()=>this._toggle();enable=()=>this._enable();disable=()=>this._disable();isEnabled=()=>this._isEnabled();goElement=()=>this.element;on=(e,t)=>n.BM.on(this.element,e,t);one=(e,t)=>n.BM.one(this.element,e,t);off=(e,t)=>n.BM.off(this.element,e,t);trigger=(e,t)=>n.BM.trigger(this.element,e,t);static getInstance=e=>n.$j.get(e,"toggle")||null;static createInstances=e=>{document.body.querySelectorAll(e).forEach(s=>{let i=o.getInstance(s);i||(i=new o(s,L),i.on("kt.toggle.change",function(){s.closest("#kt_app_sidebar")?.classList.add("animating"),setTimeout(function(){s.closest("#kt_app_sidebar")?.classList.remove("animating")},300)}))})};static reinitialization=()=>{o.createInstances("[data-kt-toggle]")};static bootstrap=()=>{o.createInstances("[data-kt-toggle]")}}return o})();class g{static store=new Map;static set(a,e){g.has(a)||g.store.set(a,e)}static get(a){if(g.has(a))return g.store.get(a)}static remove(a){g.has(a)&&g.store.delete(a)}static has(a){return g.store.has(a)}static getAllInstances(){return g.store}}const S={mode:"append"},f={componentName:"swapper",instanseQuery:'[data-kt-swapper="true"]',attrQuery:"data-kt-swapper-"};let U=(()=>{class o{element;options;queries;constructor(e,t,s){this.element=e,this.options=Object.assign(S,t),this.queries=s,this.update(),g.set(this.element.id,this)}getOption(e){const t=this.element.getAttribute(`${this.queries.attrQuery}${e}`);if(t){let s=(0,n.wV)(t);return null!=t&&"true"===String(s)||(null===s||"false"!==String(s))&&s}{const s=(0,n.Aj)(e),i=(0,n.cY)(this.options,s);return i?(0,n.wV)(i):null}}update=()=>{const e=this.getOption("parent")?.toString(),t=this.getOption("mode"),s=e?document.querySelector(e):null;s&&this.element.parentNode!==s&&("prepend"===t?s.prepend(this.element):"append"===t&&s.append(this.element))};on=(e,t)=>n.BM.on(this.element,e,t);one=(e,t)=>n.BM.one(this.element,e,t);off=(e,t)=>n.BM.off(this.element,e,t);trigger=(e,t)=>n.BM.trigger(this.element,e,t);static getInstance=(e,t=f.componentName)=>g.get(e.id)||null;static createInstances=(e=f.instanseQuery,t=S,s=f)=>{document.body.querySelectorAll(e).forEach(r=>{const l=r;let c=o.getInstance(l);c||(c=new o(l,t,s))})};static createInsance=(e=f.instanseQuery,t=S,s=f)=>{const i=document.body.querySelector(e);if(!i)return;const r=i;let l=o.getInstance(r);return l||(l=new o(r,t,s)),l};static bootstrap=(e=f.instanseQuery)=>{o.createInstances(e)};static reinitialization=(e=f.instanseQuery)=>{o.createInstances(e)}}return o})();window.addEventListener("resize",function(){(0,n.nF)(void 0,()=>{document.querySelectorAll(f.instanseQuery).forEach(e=>{const t=U.getInstance(e);t&&t.update()})},200)});var H=d(268),C=d(3983),z=d(1554),Q=d(4399),V=d(7314),F=d(9489),R=d(5100),Y=d(9226),Z=d(1829),y=d(6471),T=d(3798);function O(o,a,e){return void 0===e&&(e={x:0,y:0}),{top:o.top-a.height-e.y,right:o.right-a.width+e.x,bottom:o.bottom-a.height+e.y,left:o.left-a.width-e.x}}function M(o){return[y.Mn,y.pG,y.sQ,y.kb].some(function(a){return o[a]>=0})}var X=(0,H.UD)({defaultModifiers:[C.A,z.A,Q.A,V.A,F.A,R.A,Y.A,Z.A,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function G(o){var a=o.state,e=o.name,t=a.rects.reference,s=a.rects.popper,i=a.modifiersData.preventOverflow,r=(0,T.A)(a,{elementContext:"reference"}),l=(0,T.A)(a,{altBoundary:!0}),c=O(r,t),u=O(l,s,i),b=M(c),m=M(u);a.modifiersData[e]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:b,hasPopperEscaped:m},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":m})}}]});const A={dropdown:{hoverTimeout:200,zindex:105},accordion:{slideSpeed:250,expand:!1}};let J=(()=>{class o{element;options;instanceUid;triggerElement=null;constructor(e,t){return this.element=e,this.options=Object.assign(A,t),this.instanceUid=(0,n.xQ)("menu"),this._setTriggerElement(),this._update(),n.$j.set(this.element,"menu",this),this}_setTriggerElement=()=>{const e=document.querySelector(`[data-kt-menu-target="#${this.element.getAttribute("id")}"`);if(e)this.triggerElement=e;else if(this.element.closest("[data-kt-menu-trigger]"))this.triggerElement=this.element.closest("[data-kt-menu-trigger]");else if(this.element.parentNode&&(0,n.tm)(this.element.parentNode,"[data-kt-menu-trigger]")){const t=(0,n.tm)(this.element.parentNode,"[data-kt-menu-trigger]");t&&(this.triggerElement=t)}this.triggerElement&&n.$j.set(this.triggerElement,"menu",this)};_isTriggerElement=e=>this.triggerElement===e;_getItemOption=(e,t)=>{let s=null;if(e&&e.hasAttribute("data-kt-menu-"+t)){const i=e.getAttribute("data-kt-menu-"+t)||"";s=(0,n.wV)(i),null!==s&&"true"===String(s)?s=!0:null!==s&&"false"===String(s)&&(s=!1)}return s};_getItemElement=e=>{if(this._isTriggerElement(e)||e.hasAttribute("data-kt-menu-trigger"))return e;const t=n.$j.get(e,"item");if(t)return t;const s=e.closest(".menu-item[data-kt-menu-trigger]");if(s)return s;const i=e.closest(".menu-sub");if(i){const r=n.$j.get(i,"item");if(r)return r}};_getItemParentElement=e=>{const t=e.closest(".menu-sub");if(!t)return null;const s=n.$j.get(t,"item");if(s)return s;const i=t.closest(".menu-item[data-kt-menu-trigger]");return t&&i?i:null};_getItemParentElements=e=>{const t=[];let s,i=0,r=e;do{s=this._getItemParentElement(r),s&&(t.push(s),r=s),i++}while(null!==s&&i<20);return this.triggerElement&&t.unshift(this.triggerElement),t};_getDropdownPopperConfig=e=>{const t=this._getItemOption(e,"placement");let s="right";t&&(s=t);const i=this._getItemOption(e,"offset"),r=i?i.toString().split(","):[];return{placement:s,strategy:!0===this._getItemOption(e,"overflow")?"absolute":"fixed",modifiers:[{name:"offset",options:{offset:r}},{name:"preventOverflow"},{name:"flip",options:{flipVariations:!1}}]}};_getItemChildElement=e=>{let t=e;const s=n.$j.get(e,"sub");if(s&&(t=s),t){const i=t.querySelector(".menu-item[data-kt-menu-trigger]");if(i)return i}return null};_getItemChildElements=e=>{const t=[];let s,i=0,r=e;do{s=this._getItemChildElement(r),s&&(t.push(s),r=s),i++}while(null!==s&&i<20);return t};_getItemSubElement=e=>e?this._isTriggerElement(e)?this.element:e.classList.contains("menu-sub")?e:n.$j.has(e,"sub")?n.$j.get(e,"sub")||null:(0,n.tm)(e,".menu-sub"):null;_getCss=(e,t)=>{const s=(e.ownerDocument||document).defaultView;return s?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),s.getComputedStyle(e,null).getPropertyValue(t)):""};_getItemSubType=e=>{const t=this._getItemSubElement(e);return t&&parseInt(this._getCss(t,"z-index"))>0?"dropdown":"accordion"};_isItemSubShown=e=>{let t=this._getItemSubElement(e);if(t){if("dropdown"===this._getItemSubType(e)){const s=t;return s.classList.contains("show")&&s.hasAttribute("data-popper-placement")}return e.classList.contains("show")}return!1};_isItemDropdownPermanent=e=>!0===this._getItemOption(e,"permanent");_isItemParentShown=e=>(0,n.ki)(e,".menu-item.show").length>0;_isItemSubElement=e=>e.classList.contains("menu-sub");_hasItemSub=e=>e.classList.contains("menu-item")&&e.hasAttribute("data-kt-menu-trigger");_getItemLinkElement=e=>(0,n.tm)(e,".menu-link");_getItemToggleElement=e=>this.triggerElement?this.triggerElement:this._getItemLinkElement(e);_showDropdown=e=>{if(!1===n.BM.trigger(this.element,"kt.menu.dropdown.show"))return;o.hideDropdowns(e);const t=this._getItemSubElement(e),s=this._getItemOption(e,"width"),i=this._getItemOption(e,"height");let r=this.options.dropdown.zindex;const l=(0,n.pd)(e);null!==l&&l>=r&&(r=l+1),r&&t&&n.ET.set(t,"z-index",r),s&&t&&n.ET.set(t,"width",s),i&&t&&n.ET.set(t,"height",i),this.initDropdownPopper(e,t),e.classList.add("show"),e.classList.add("menu-dropdown"),t?.classList.add("show"),!0===this._getItemOption(e,"overflow")?t&&(document.body.appendChild(t),n.$j.set(e,"sub",t),n.$j.set(t,"item",e),n.$j.set(t,"menu",this)):t&&n.$j.set(t,"item",e),n.BM.trigger(this.element,"kt.menu.dropdown.shown")};initDropdownPopper=(e,t)=>{let s;const i=this._getItemOption(e,"attach");if(s=i?"parent"===i?e.parentNode:document.querySelector(i):e,s){const r=X(s,t,this._getDropdownPopperConfig(e));n.$j.set(e,"popper",r)}};_hideDropdown=e=>{if(!1===n.BM.trigger(this.element,"kt.menu.dropdown.hide"))return;const t=this._getItemSubElement(e);t&&(n.ET.set(t,"z-index",""),n.ET.set(t,"width",""),n.ET.set(t,"height","")),e.classList.remove("show"),e.classList.remove("menu-dropdown"),t&&t.classList.remove("show"),!0===this._getItemOption(e,"overflow")&&(e.classList.contains("menu-item")?t&&e.appendChild(t):(0,n.EO)(this.element,e),t&&(n.$j.remove(e,"sub"),n.$j.remove(t,"item"),n.$j.remove(t,"menu"))),!0===n.$j.has(e,"popper")&&(n.$j.get(e,"popper").destroy(),n.$j.remove(e,"popper")),this.destroyDropdownPopper(e),n.BM.trigger(this.element,"kt.menu.dropdown.hidden")};destroyDropdownPopper=e=>{!0===n.$j.has(e,"popper")&&(n.$j.get(e,"popper").destroy(),n.$j.remove(e,"popper")),n.BM.trigger(this.element,"kt.menu.dropdown.hidden")};_showAccordion=e=>{if(!1===n.BM.trigger(this.element,"kt.menu.accordion.show"))return;!1===this.options.accordion.expand&&this._hideAccordions(e),!0===n.$j.has(e,"popper")&&this._hideDropdown(e),e.classList.add("hover"),e.classList.add("showing");const t=this._getItemSubElement(e);if(t){const s=t;(0,n.C9)(s,this.options.accordion.slideSpeed,()=>{e.classList.remove("showing"),e.classList.add("show"),s.classList.add("show"),n.BM.trigger(this.element,"kt.menu.accordion.shown")})}};_hideAccordion=e=>{if(!1===n.BM.trigger(this.element,"kt.menu.accordion.hide"))return;const t=this._getItemSubElement(e);e.classList.add("hiding"),t&&(0,n.Vd)(t,this.options.accordion.slideSpeed,()=>{e.classList.remove("hiding"),e.classList.remove("show"),t.classList.remove("show"),e.classList.remove("hover"),n.BM.trigger(this.element,"kt.menu.accordion.hidden")})};_hideAccordions=e=>{const t=this.element.querySelectorAll(".hover[data-kt-menu-trigger]");if(t&&t.length>0)for(var s=0,i=t.length;s<i;s++){const r=t[s];"accordion"===this._getItemSubType(r)&&r!==e&&!1===e.contains(r)&&!1===r.contains(e)&&this._hideAccordion(r)}};_reset=e=>{if(!1===this._hasItemSub(e))return;const t=this._getItemSubElement(e);n.$j.has(e,"type")&&n.$j.get(e,"type")!==this._getItemSubType(e)&&(e.classList.remove("hover"),e.classList.remove("show"),e.classList.remove("show"),t&&t.classList.remove("show"))};_destroy=()=>{};_update=()=>{this.element.querySelectorAll(".menu-item[data-kt-menu-trigger]").forEach(t=>this._reset(t))};_hide=e=>{e&&!1!==this._isItemSubShown(e)&&("dropdown"===this._getItemSubType(e)?this._hideDropdown(e):"accordion"===this._getItemSubType(e)&&this._hideAccordion(e))};_show=e=>{e&&!0!==this._isItemSubShown(e)&&("dropdown"===this._getItemSubType(e)?this._showDropdown(e):"accordion"===this._getItemSubType(e)&&this._showAccordion(e),n.$j.set(e,"type",this._getItemSubType(e)))};_toggle=e=>{e&&(!0===this._isItemSubShown(e)?this._hide(e):this._show(e))};_mouseout=(e,t)=>{const s=this._getItemElement(e);if(!s||"hover"!==this._getItemOption(s,"trigger"))return;const i=setTimeout(()=>{"1"===n.$j.get(s,"hover")&&this._hide(s)},this.options.dropdown.hoverTimeout);n.$j.set(s,"hover","1"),n.$j.set(s,"timeout",i)};_mouseover=(e,t)=>{const s=this._getItemElement(e);if(s&&"hover"===this._getItemOption(s,"trigger")){if("1"===n.$j.get(s,"hover")){const i=n.$j.get(s,"timeout");i&&clearTimeout(i),n.$j.remove(s,"hover"),n.$j.remove(s,"timeout")}this._show(s)}};_dismiss=(e,t)=>{const s=this._getItemElement(e);if(!s)return;const i=this._getItemChildElements(s),r=this._getItemSubType(s);if(null!==s&&"dropdown"===r&&(this._hide(s),i.length>0))for(let l=0,c=i.length;l<c;l++)null!==i[l]&&"dropdown"===this._getItemSubType(i[l])&&this._hide(i[l])};_link=(e,t)=>{!1!==n.BM.trigger(this.element,"kt.menu.link.click")&&(this._hideAccordions(e),o.hideDropdowns(void 0),n.BM.trigger(this.element,"kt.menu.link.clicked"))};_click=(e,t)=>{t.preventDefault();const s=this._getItemElement(e);if(s){if("click"!==this._getItemOption(s,"trigger"))return;!1===this._getItemOption(s,"toggle")?this._show(s):this._toggle(s)}};click=(e,t)=>this._click(e,t);link=(e,t)=>this._link(e,t);dismiss=(e,t)=>this._dismiss(e,t);mouseover=(e,t)=>this._mouseover(e,t);mouseout=(e,t)=>this._mouseout(e,t);getItemTriggerType=e=>this._getItemOption(e,"trigger");getItemSubType=e=>this._getItemSubType(e);show=e=>this._show(e);hide=e=>this._hide(e);reset=e=>this._reset(e);update=()=>this._update();getElement=()=>this.element;getItemLinkElement=e=>this._getItemLinkElement(e);getItemToggleElement=e=>this._getItemToggleElement(e);getItemSubElement=e=>this._getItemSubElement(e);getItemParentElements=e=>this._getItemParentElements(e);isItemSubShown=e=>this._isItemSubShown(e);isItemParentShown=e=>this._isItemParentShown(e);getTriggerElement=()=>this.triggerElement;isItemDropdownPermanent=e=>this._isItemDropdownPermanent(e);hideAccordions=e=>this._hideAccordions(e);on=(e,t)=>n.BM.on(this.element,e,t);one=(e,t)=>n.BM.one(this.element,e,t);off=(e,t)=>n.BM.off(this.element,e,t);static getInstance=e=>{const t=n.$j.get(e,"menu");if(t)return t;const s=e.closest(".menu");if(s){const i=n.$j.get(s,"menu");if(i)return i}if(e.classList.contains("menu-link")){const i=e.closest(".menu-sub");if(i){const r=n.$j.get(i,"menu");if(r)return r}}return null};static hideDropdowns=e=>{const t=document.querySelectorAll(".show.menu-dropdown[data-kt-menu-trigger]");if(t&&t.length>0)for(let s=0,i=t.length;s<i;s++){const r=t[s],l=o.getInstance(r);l&&"dropdown"===l.getItemSubType(r)&&(e?!1===l.getItemSubElement(r).contains(e)&&!1===r.contains(e)&&r!==e&&l.hide(r):l.hide(r))}};static updateDropdowns=()=>{const e=document.querySelectorAll(".show.menu-dropdown[data-kt-menu-trigger]");if(e&&e.length>0)for(var t=0,s=e.length;t<s;t++){var i=e[t];n.$j.has(i,"popper")&&n.$j.get(i,"popper").forceUpdate()}};static createInstances=e=>{document.querySelectorAll(e).forEach(t=>{let i=o.getInstance(t);i||(i=new o(t,A))})};static initGlobalHandlers=()=>{document.addEventListener("click",e=>{const t=document.querySelectorAll(".show.menu-dropdown[data-kt-menu-trigger]");if(t&&t.length>0)for(let s=0;s<t.length;s++){const i=t[s],r=o.getInstance(i);if(r&&"dropdown"===r.getItemSubType(i)){r.getElement();const c=r.getItemSubElement(i);if(i===e.target||i.contains(e.target)||c&&(c===e.target||c.contains(e.target)))continue;r.hide(i)}}}),n.zS.on(document.body,'.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])',"click",function(e){const t=o.getInstance(this);if(t)return t.click(this,e)}),n.zS.on(document.body,".menu-item:not([data-kt-menu-trigger]) > .menu-link","click",function(e){e.stopPropagation();const t=o.getInstance(this);if(t&&t.link)return t.link(this,e)}),n.zS.on(document.body,'[data-kt-menu-dismiss="true"]',"click",function(e){const t=o.getInstance(this);if(t)return t.dismiss(this,e)}),n.zS.on(document.body,"[data-kt-menu-trigger], .menu-sub","mouseover",function(e){const t=o.getInstance(this);if(t&&"dropdown"===t.getItemSubType(this))return t.mouseover(this,e)}),n.zS.on(document.body,"[data-kt-menu-trigger], .menu-sub","mouseout",function(e){const t=o.getInstance(this);if(t&&"dropdown"===t.getItemSubType(this))return t.mouseout(this,e)}),window.addEventListener("resize",()=>{(0,n.nF)(void 0,()=>{document.querySelectorAll('[data-kt-menu="true"]').forEach(s=>{const i=o.getInstance(s);i&&i.update()})},200)})};static bootstrap=()=>{o.initGlobalHandlers(),o.createInstances('[data-kt-menu="true"]')};static reinitialization=()=>{o.createInstances('[data-kt-menu="true"]')};static createInsance=(e,t=A)=>{const s=document.body.querySelector(e);if(!s)return;const i=s;let r=o.getInstance(i);return r||(r=new o(i,t)),r}}return o})()}}]);