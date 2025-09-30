import{I as S,ac as b,ag as P,af as c,ad as d,aH as g,aI as E,b as h,e as p,F as v,j as x,k as L,W as T,S as f,h as w,l as M,X as y,V as A}from"./index-CqrHncwp.js";var I=function(e){var t=e.dt;return`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid `.concat(t("splitter.border.color"),`;
    background: `).concat(t("splitter.background"),`;
    border-radius: `).concat(t("border.radius.md"),`;
    color: `).concat(t("splitter.color"),`;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: `).concat(t("splitter.gutter.background"),`;
}

.p-splitter-gutter-handle {
    border-radius: `).concat(t("splitter.handle.border.radius"),`;
    background: `).concat(t("splitter.handle.background"),`;
    transition: outline-color `).concat(t("splitter.transition.duration"),", box-shadow ").concat(t("splitter.transition.duration"),`;
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: `).concat(t("splitter.handle.focus.ring.shadow"),`;
    outline: `).concat(t("splitter.handle.focus.ring.width")," ").concat(t("splitter.handle.focus.ring.style")," ").concat(t("splitter.handle.focus.ring.color"),`;
    outline-offset: `).concat(t("splitter.handle.focus.ring.offset"),`;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: `).concat(t("splitter.handle.size"),`;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: `).concat(t("splitter.handle.size"),`;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`)},$={root:function(e){var t=e.props;return["p-splitter p-component","p-splitter-"+t.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},R={root:function(e){var t=e.props;return[{display:"flex","flex-wrap":"nowrap"},t.layout==="vertical"?{"flex-direction":"column"}:""]}},D=S.extend({name:"splitter",theme:I,classes:$,inlineStyles:R}),G={name:"BaseSplitter",extends:y,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:D,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function z(n){return K(n)||U(n)||O(n)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(n,e){if(n){if(typeof n=="string")return m(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(n,e):void 0}}function U(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function K(n){if(Array.isArray(n))return m(n)}function m(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var N={name:"Splitter",extends:G,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,mutationObserver:null,data:function(){return{prevSize:null,isRTL:!1}},mounted:function(){this.initializePanels(),this.updateDirection(),this.observeDirectionChanges()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners(),this.mutationObserver&&this.mutationObserver.disconnect()},methods:{updateDirection:function(){this.isRTL=!!this.$el.closest('[dir="rtl"]')},observeDirectionChanges:function(){var e=this,t=document.documentElement,r={attributes:!0,attributeFilter:["dir"]};this.mutationObserver=new MutationObserver(function(){e.updateDirection()}),this.mutationObserver.observe(t,r)},isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){var r=z(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"}),s=[];this.panels.map(function(i,o){var a=i.props&&i.props.size?i.props.size:null,u=a||100/e.panels.length;s[o]=u,r[o].style.flexBasis="calc("+u+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=s,this.prevSize=parseFloat(s[0]).toFixed(4)}}},onResizeStart:function(e,t,r){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?b(this.$el):P(this.$el),r||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,r?(this.prevPanelSize=this.horizontal?c(this.prevPanelElement,!0):d(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?c(this.nextPanelElement,!0):d(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?c(this.prevPanelElement,!0):d(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?c(this.nextPanelElement,!0):d(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[t].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,t,r){var s,i,o;r?this.horizontal?(i=100*(this.prevPanelSize+t)/this.size,o=100*(this.nextPanelSize-t)/this.size):(i=100*(this.prevPanelSize-t)/this.size,o=100*(this.nextPanelSize+t)/this.size):(this.horizontal?this.isRTL?s=(this.startPos-e.pageX)*100/this.size:s=(e.pageX-this.startPos)*100/this.size:s=(e.pageY-this.startPos)*100/this.size,i=this.prevPanelSize+s,o=this.nextPanelSize-s),this.validateResize(i,o)&&(this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=o,this.prevSize=parseFloat(i).toFixed(4)),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(t){return t.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,t,r){this.onResizeStart(e,t,!0),this.onResize(e,r,!0)},setTimer:function(e,t,r){var s=this;this.timer||(this.timer=setInterval(function(){s.repeat(e,t,r)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,t){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,t,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,t,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,t){this.onResizeStart(e,t),this.bindMouseListeners()},onGutterTouchStart:function(e,t){this.onResizeStart(e,t),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(t){return e.onResize(t)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(t){e.onResizeEnd(t),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(t){return e.onResize(t.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(t){e.resizeEnd(t),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,t){if(e>100||e<0||t>100||t<0)return!1;var r=g(this.panels[this.prevPanelIndex],"minSize");if(this.panels[this.prevPanelIndex].props&&r&&r>e)return!1;var s=g(this.panels[this.prevPanelIndex+1],"minSize");return!(this.panels[this.prevPanelIndex+1].props&&s&&s>t)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){E(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,t=this.getStorage(),r=t.getItem(this.stateKey);if(r){this.panelSizes=JSON.parse(r);var s=z(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"});return s.forEach(function(i,o){i.style.flexBasis="calc("+e.panelSizes[o]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,t=[];return this.$slots.default().forEach(function(r){e.isSplitterPanel(r)?t.push(r):r.children instanceof Array&&r.children.forEach(function(s){e.isSplitterPanel(s)&&t.push(s)})}),t},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}}}},B=["onMousedown","onTouchstart","onTouchmove","onTouchend"],_=["aria-orientation","aria-valuenow","onKeydown"];function F(n,e,t,r,s,i){return h(),p("div",f({class:n.cx("root"),style:n.sx("root"),"data-p-resizing":!1},n.ptmi("root",i.getPTOptions)),[(h(!0),p(v,null,x(i.panels,function(o,a){return h(),p(v,{key:a},[(h(),L(T(o),{tabindex:"-1"})),a!==i.panels.length-1?(h(),p("div",f({key:0,ref_for:!0,ref:"gutter",class:n.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(l){return i.onGutterMouseDown(l,a)},onTouchstart:function(l){return i.onGutterTouchStart(l,a)},onTouchmove:function(l){return i.onGutterTouchMove(l,a)},onTouchend:function(l){return i.onGutterTouchEnd(l,a)},"data-p-gutter-resizing":!1},n.ptm("gutter")),[w("div",f({class:n.cx("gutterHandle"),tabindex:"0",style:[i.gutterStyle],"aria-orientation":n.layout,"aria-valuenow":s.prevSize,onKeyup:e[0]||(e[0]=function(){return i.onGutterKeyUp&&i.onGutterKeyUp.apply(i,arguments)}),onKeydown:function(l){return i.onGutterKeyDown(l,a)},ref_for:!0},n.ptm("gutterHandle")),null,16,_)],16,B)):M("",!0)],64)}),128))],16)}N.render=F;var H={root:function(e){var t=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":t.isNested}]}},C=S.extend({name:"splitterpanel",classes:H}),X={name:"BaseSplitterPanel",extends:y,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:C,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},j={name:"SplitterPanel",extends:X,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(t){return e.nestedState=t.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function V(n,e,t,r,s,i){return h(),p("div",f({ref:"container",class:n.cx("root")},n.ptmi("root",i.getPTOptions)),[A(n.$slots,"default")],16)}j.render=V;export{N as a,j as s};
