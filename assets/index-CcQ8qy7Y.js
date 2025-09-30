import{I as m,az as y,ab as k,R as T,U as V,b as d,e as b,h as f,V as h,n as I,S as s,l as A,t as S,ap as g,aa as p,Q as z,F as C,j as $,k as K,aG as D,w as x}from"./index-CqrHncwp.js";import{a as B}from"./index-CSdd1Zyi.js";var P=function(e){var t=e.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(t("togglebutton.content.left"),`;
    inset-block-start: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(t("togglebutton.sm.padding"),`;
    font-size: `).concat(t("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(t("togglebutton.lg.padding"),`;
    font-size: `).concat(t("togglebutton.lg.font.size"),`;
}
`)},F={root:function(e){var t=e.instance,l=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":l.size==="small","p-togglebutton-lg p-inputfield-lg":l.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},j=m.extend({name:"togglebutton",theme:P,classes:F}),q={name:"BaseToggleButton",extends:B,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:j,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},L={name:"ToggleButton",extends:q,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var t,l;(t=(l=this.formField).onBlur)===null||t===void 0||t.call(l,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return y(this.onLabel)&&y(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:k}},E=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function N(n,e,t,l,i,o){var r=T("ripple");return V((d(),b("button",s({type:"button",class:n.cx("root"),tabindex:n.tabindex,disabled:n.disabled,"aria-pressed":n.d_value,onClick:e[0]||(e[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":n.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":n.disabled}),[f("span",s({class:n.cx("content")},o.getPTOptions("content")),[h(n.$slots,"default",{},function(){return[h(n.$slots,"icon",{value:n.d_value,class:I(n.cx("icon"))},function(){return[n.onIcon||n.offIcon?(d(),b("span",s({key:0,class:[n.cx("icon"),n.d_value?n.onIcon:n.offIcon]},o.getPTOptions("icon")),null,16)):A("",!0)]}),f("span",s({class:n.cx("label")},o.getPTOptions("label")),S(o.label),17)]})],16)],16,E)),[[r]])}L.render=N;var R=function(e){var t=e.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},H={root:function(e){var t=e.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},U=m.extend({name:"selectbutton",theme:R,classes:H}),G={name:"BaseSelectButton",extends:B,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:U,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function M(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=O(n))||e){t&&(n=t);var l=0,i=function(){};return{s:i,n:function(){return l>=n.length?{done:!0}:{done:!1,value:n[l++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,r=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return r=c.done,c},e:function(c){a=!0,o=c},f:function(){try{r||t.return==null||t.return()}finally{if(a)throw o}}}}function Q(n){return J(n)||Y(n)||O(n)||W()}function W(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(n,e){if(n){if(typeof n=="string")return v(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(n,e):void 0}}function Y(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function J(n){if(Array.isArray(n))return v(n)}function v(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,l=Array(e);t<e;t++)l[t]=n[t];return l}var X={name:"SelectButton",extends:G,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(e){return this.optionLabel?g(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?g(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?g(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?g(e,this.optionDisabled):!1},onOptionSelect:function(e,t,l){var i=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var r=this.getOptionValue(t),a;this.multiple?o?a=this.d_value.filter(function(u){return!p(u,r,i.equalityKey)}):a=this.d_value?[].concat(Q(this.d_value),[r]):[r]:a=o?null:r,this.writeValue(a,e),this.$emit("change",{event:e,value:a})}}},isSelected:function(e){var t=!1,l=this.getOptionValue(e);if(this.multiple){if(this.d_value){var i=M(this.d_value),o;try{for(i.s();!(o=i.n()).done;){var r=o.value;if(p(r,l,this.equalityKey)){t=!0;break}}}catch(a){i.e(a)}finally{i.f()}}}else t=p(this.d_value,l,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:k},components:{ToggleButton:L}},Z=["aria-labelledby"];function _(n,e,t,l,i,o){var r=z("ToggleButton");return d(),b("div",s({class:n.cx("root"),role:"group","aria-labelledby":n.ariaLabelledby},n.ptmi("root")),[(d(!0),b(C,null,$(n.options,function(a,u){return d(),K(r,{key:o.getOptionRenderKey(a),modelValue:o.isSelected(a),onLabel:o.getOptionLabel(a),offLabel:o.getOptionLabel(a),disabled:n.disabled||o.isOptionDisabled(a),unstyled:n.unstyled,size:n.size,onChange:function(w){return o.onOptionSelect(w,a,u)},pt:n.ptm("pcToggleButton")},D({_:2},[n.$slots.option?{name:"default",fn:x(function(){return[h(n.$slots,"option",{option:a,index:u},function(){return[f("span",s({ref_for:!0},n.ptm("pcToggleButton").label),S(o.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","onChange","pt"])}),128))],16,Z)}X.render=_;export{X as s};
