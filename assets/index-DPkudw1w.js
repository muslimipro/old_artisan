import{I as g,S as r,b as i,k as s,w as p,U as C,W as u,h as D,V as h,ah as B,l as v,T as N,n as f,X as A,a9 as F,a8 as $,K as _,ab as E,R as U,ai as T,Q as P,e as y,F as j,j as L,f as k,t as O}from"./index-CqrHncwp.js";import{s as z}from"./index-BuNCOrFM.js";import{s as I}from"./index-Q-Y0xawK.js";import{s as V}from"./index-CWqhTR1L.js";var R={root:"p-accordioncontent",content:"p-accordioncontent-content"},q=g.extend({name:"accordioncontent",classes:R}),M={name:"BaseAccordionContent",extends:A,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:q,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},w={name:"AccordionContent",extends:M,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Q(e,n,o,t,d,a){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs}):(i(),s(N,r({key:0,name:"p-toggleable-content"},e.ptm("transition",a.ptParams)),{default:p(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?C((i(),s(u(e.as),r({key:0,class:e.cx("root")},a.attrs),{default:p(function(){return[D("div",r({class:e.cx("content")},e.ptm("content",a.ptParams)),[h(e.$slots,"default")],16)]}),_:3},16,["class"])),[[B,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):v("",!0)]}),_:3},16))}w.render=Q;var W={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},X=g.extend({name:"accordionheader",classes:W}),G={name:"BaseAccordionHeader",extends:A,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:X,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},K={name:"AccordionHeader",extends:G,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var o=this.findNextPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var o=this.findPrevPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var o=this.findFirstPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEndKey:function(n){var o=this.findLastPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return F(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=o?n:n.nextElementSibling;return t?$(t,"data-p-disabled")?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=o?n:n.previousElementSibling;return t?$(t,"data-p-disabled")?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,o){_(this.findHeader(o))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:I,ChevronDownIcon:V},directives:{ripple:E}};function J(e,n,o,t,d,a){var b=U("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):C((i(),s(u(e.as),r({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:p(function(){return[h(e.$slots,"default",{active:a.$pcAccordionPanel.active}),h(e.$slots,"toggleicon",{active:a.$pcAccordionPanel.active,class:f(e.cx("toggleicon"))},function(){return[a.$pcAccordionPanel.active?(i(),s(u(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[a.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"])):(i(),s(u(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[a.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[b]])}K.render=J;var Y={root:function(n){var o=n.instance,t=n.props;return["p-accordionpanel",{"p-accordionpanel-active":o.active,"p-disabled":t.disabled}]}},Z=g.extend({name:"accordionpanel",classes:Y}),ee={name:"BaseAccordionPanel",extends:A,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Z,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},x={name:"AccordionPanel",extends:ee,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ne(e,n,o,t,d,a){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(i(),s(u(e.as),r({key:0,class:e.cx("root")},a.attrs),{default:p(function(){return[h(e.$slots,"default")]}),_:3},16,["class"]))}x.render=ne;var oe=function(n){var o=n.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(o("accordion.panel.border.width"),`;
    border-color: `).concat(o("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(o("accordion.header.padding"),`;
    color: `).concat(o("accordion.header.color"),`;
    background: `).concat(o("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(o("accordion.header.border.width"),`;
    border-color: `).concat(o("accordion.header.border.color"),`;
    font-weight: `).concat(o("accordion.header.font.weight"),`;
    border-radius: `).concat(o("accordion.header.border.radius"),`;
    transition: background `).concat(o("accordion.transition.duration"),"; color ").concat(o("accordion.transition.duration"),"color ").concat(o("accordion.transition.duration"),", outline-color ").concat(o("accordion.transition.duration"),", box-shadow ").concat(o("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(o("accordion.header.first.border.width"),`;
    border-start-start-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
    border-start-end-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
    border-end-end-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: `).concat(o("accordion.header.last.active.bottom.border.radius"),`;
    border-end-end-radius: `).concat(o("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(o("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(o("accordion.header.focus.ring.width")," ").concat(o("accordion.header.focus.ring.style")," ").concat(o("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(o("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(o("accordion.header.hover.background"),`;
    color: `).concat(o("accordion.header.hover.color"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(o("accordion.header.active.background"),`;
    color: `).concat(o("accordion.header.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: `).concat(o("accordion.header.active.hover.background"),`;
    color: `).concat(o("accordion.header.active.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(o("accordion.content.border.width"),`;
    border-color: `).concat(o("accordion.content.border.color"),`;
    background-color: `).concat(o("accordion.content.background"),`;
    color: `).concat(o("accordion.content.color"),`;
    padding: `).concat(o("accordion.content.padding"),`;
}
`)},ae={root:"p-accordion p-component"},te=g.extend({name:"accordion",theme:oe,classes:ae}),ce={name:"BaseAccordion",extends:A,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:te,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},re={name:"Accordion",extends:ce,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||T()},value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},mounted:function(){this.id=this.id||T()},methods:{isItemActive:function(n){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(n):this.d_value===n},updateValue:function(n){var o,t=this.isItemActive(n);this.multiple?t?this.d_value=this.d_value.filter(function(d){return d!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=t?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(t?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,o){return n.props?n.props[o]:void 0},getKey:function(n,o){return this.getTabProp(n,"header")||o},getHeaderPT:function(n,o){var t=this;return{root:r({onClick:function(a){return t.onTabClick(a,o)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",o)),toggleicon:r(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",o))}},getContentPT:function(n,o){return{root:r(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",o)),transition:this.getTabPT(n,"transition",o),content:this.getTabPT(n,"content",o)}},getTabPT:function(n,o,t){var d=this.tabs.length,a={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:t,count:d,first:t===0,last:t===d-1,active:this.isItemActive("".concat(t))}};return r(this.ptm("accordiontab.".concat(o),a),this.ptmo(this.getTabProp(n,"pt"),o,a))},onTabClick:function(n,o){this.$emit("tab-click",{originalEvent:n,index:o})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(o,t){return n.isAccordionTab(t)?o.push(t):t.children&&t.children instanceof Array&&t.children.forEach(function(d){n.isAccordionTab(d)&&o.push(d)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:x,AccordionHeader:K,AccordionContent:w,ChevronUpIcon:I,ChevronRightIcon:z}};function ie(e,n,o,t,d,a){var b=P("AccordionHeader"),S=P("AccordionContent"),H=P("AccordionPanel");return i(),y("div",r({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(i(!0),y(j,{key:0},L(a.tabs,function(c,l){return i(),s(H,{key:a.getKey(c,l),value:"".concat(l),pt:{root:a.getTabPT(c,"root",l)},disabled:a.getTabProp(c,"disabled")},{default:p(function(){return[k(b,{class:f(a.getTabProp(c,"headerClass")),pt:a.getHeaderPT(c,l)},{toggleicon:p(function(m){return[m.active?(i(),s(u(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[e.collapseIcon,m.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(c,"headericon",l)),null,16,["class"])):(i(),s(u(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[e.expandIcon,m.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(c,"headericon",l)),null,16,["class"]))]}),default:p(function(){return[c.children&&c.children.headericon?(i(),s(u(c.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(l)),active:a.isItemActive("".concat(l)),index:l},null,8,["isTabActive","active","index"])):v("",!0),c.props&&c.props.header?(i(),y("span",r({key:1,ref_for:!0},a.getTabPT(c,"headertitle",l)),O(c.props.header),17)):v("",!0),c.children&&c.children.header?(i(),s(u(c.children.header),{key:2})):v("",!0)]}),_:2},1032,["class","pt"]),k(S,{pt:a.getContentPT(c,l)},{default:p(function(){return[(i(),s(u(c)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):h(e.$slots,"default",{key:1})],16)}re.render=ie;export{w as a,x as b,re as c,K as s};
