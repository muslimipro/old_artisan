import{ak as U,b as d,e as v,h as $,S as p,I as z,az as L,a$ as E,b0 as G,Q as W,f as _,n as H,$ as Z,V as b,k as B,W as D,b1 as S,l as k}from"./index-CqrHncwp.js";import{s as Q,b as q}from"./index-CSdd1Zyi.js";var O={name:"AngleDownIcon",extends:U};function J(t,e,n,i,r,u){return d(),v("svg",p({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[$("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1)]),16)}O.render=J;var R={name:"AngleUpIcon",extends:U};function X(t,e,n,i,r,u){return d(),v("svg",p({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[$("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"},null,-1)]),16)}R.render=X;var Y=function(e){var n=e.dt;return`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: `.concat(n("inputnumber.button.background"),`;
    color: `).concat(n("inputnumber.button.color"),`;
    width: `).concat(n("inputnumber.button.width"),`;
    transition: background `).concat(n("inputnumber.transition.duration"),", color ").concat(n("inputnumber.transition.duration"),", border-color ").concat(n("inputnumber.transition.duration"),", outline-color ").concat(n("inputnumber.transition.duration"),`;
}

.p-inputnumber-button:hover {
    background: `).concat(n("inputnumber.button.hover.background"),`;
    color: `).concat(n("inputnumber.button.hover.color"),`;
}

.p-inputnumber-button:active {
    background: `).concat(n("inputnumber.button.active.background"),`;
    color: `).concat(n("inputnumber.button.active.color"),`;
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(`).concat(n("inputnumber.button.border.radius"),` - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(`).concat(n("inputnumber.button.border.radius"),` - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid `).concat(n("inputnumber.button.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: `).concat(n("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: `).concat(n("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-end-end-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-end-start-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: `).concat(n("inputnumber.button.width"),`;
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid `).concat(n("inputnumber.button.border.color"),`;
    padding: `).concat(n("inputnumber.button.vertical.padding"),`;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: `).concat(n("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: `).concat(n("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-start-end-radius: `).concat(n("inputnumber.button.border.radius"),`;
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: `).concat(n("inputnumber.button.border.radius"),`;
    border-end-end-radius: `).concat(n("inputnumber.button.border.radius"),`;
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
}
`)},ee={root:function(e){var n=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":n.$filled||i.allowEmpty===!1,"p-inputwrapper-focus":n.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":n.$fluid}]},pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max!==null&&n.maxBoundry()}]},decrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min!==null&&n.minBoundry()}]}},ne=z.extend({name:"inputnumber",theme:Y,classes:ee}),te={name:"BaseInputNumber",extends:q,props:{format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},incrementIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},decrementIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},roundingMode:{type:String,default:"halfExpand",validator:function(e){return["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"].includes(e)}},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ne,provide:function(){return{$pcInputNumber:this,$parentInstance:this}}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N(Object(n),!0).forEach(function(i){ie(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ie(t,e,n){return(e=re(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t){var e=ue(t,"string");return I(e)=="symbol"?e:e+""}function ue(t,e){if(I(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function se(t){return ce(t)||le(t)||oe(t)||ae()}function ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return M(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}function le(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ce(t){if(Array.isArray(t))return M(t)}function M(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var pe={name:"InputNumber",extends:te,inheritAttrs:!1,emits:["input","focus","blur"],inject:{$pcFluid:{default:null}},numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.d_value,focused:!1}},watch:{d_value:function(e){this.d_modelValue=e},locale:function(e,n){this.updateConstructParser(e,n)},localeMatcher:function(e,n){this.updateConstructParser(e,n)},mode:function(e,n){this.updateConstructParser(e,n)},currency:function(e,n){this.updateConstructParser(e,n)},currencyDisplay:function(e,n){this.updateConstructParser(e,n)},useGrouping:function(e,n){this.updateConstructParser(e,n)},minFractionDigits:function(e,n){this.updateConstructParser(e,n)},maxFractionDigits:function(e,n){this.updateConstructParser(e,n)},suffix:function(e,n){this.updateConstructParser(e,n)},prefix:function(e,n){this.updateConstructParser(e,n)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits,roundingMode:this.roundingMode}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=se(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),n=new Map(e.map(function(i,r){return[i,r]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return n.get(i)}},updateConstructParser:function(e,n){e!==n&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,A(A({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var n=new Intl.NumberFormat(this.locale,this.getOptions()),i=n.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var n=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(n){if(n==="-")return n;var i=+n;return isNaN(i)?null:i}return null},repeat:function(e,n,i){var r=this;if(!this.readonly){var u=n||500;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,40,i)},u),this.spin(e,i)}},spin:function(e,n){if(this.$refs.input){var i=this.step*n,r=this.parseValue(this.$refs.input.$el.value)||0,u=this.validateValue(r+i);this.updateInput(u,null,"spin"),this.updateModel(e,u),this.handleOnInput(e,r,u)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(e.altKey||e.ctrlKey||e.metaKey){this.isSpecialChar=!0,this.lastValue=this.$refs.input.$el.value;return}this.lastValue=e.target.value;var n=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,u=null,s=e.code||e.key;switch(s){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(r.charAt(n-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(r.charAt(n))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":u=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(u),this.$refs.input.$el.setAttribute("aria-valuenow",u),this.updateModel(e,u);break;case"Backspace":{if(e.preventDefault(),n===i){var a=r.charAt(n-1),h=this.getDecimalCharIndexes(r),c=h.decimalCharIndex,w=h.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(a)){var o=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,u=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,o?this.$refs.input.$el.setSelectionRange(n-1,n-1):u=r.slice(0,n-1)+r.slice(n);else if(c>0&&n>c){var m=this.isDecimalMode()&&(this.minFractionDigits||0)<o?"":"0";u=r.slice(0,n-1)+m+r.slice(n)}else w===1?(u=r.slice(0,n-1)+"0"+r.slice(n),u=this.parseValue(u)>0?u:""):u=r.slice(0,n-1)+r.slice(n)}this.updateValue(e,u,null,"delete-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===i){var l=r.charAt(n),y=this.getDecimalCharIndexes(r),g=y.decimalCharIndex,f=y.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(l)){var x=this.getDecimalLength(r);if(this._group.test(l))this._group.lastIndex=0,u=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(l))this._decimal.lastIndex=0,x?this.$refs.input.$el.setSelectionRange(n+1,n+1):u=r.slice(0,n)+r.slice(n+1);else if(g>0&&n>g){var C=this.isDecimalMode()&&(this.minFractionDigits||0)<x?"":"0";u=r.slice(0,n)+C+r.slice(n+1)}else f===1?(u=r.slice(0,n)+"0"+r.slice(n+1),u=this.parseValue(u)>0?u:""):u=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,u,null,"delete-back-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break;case"Home":e.preventDefault(),L(this.min)&&this.updateModel(e,this.min);break;case"End":e.preventDefault(),L(this.max)&&this.updateModel(e,this.max);break}}},onInputKeyPress:function(e){if(!this.readonly){var n=e.key,i=this.isDecimalSign(n),r=this.isMinusSign(n);e.code!=="Enter"&&e.preventDefault(),(Number(n)>=0&&Number(n)<=9||r||i)&&this.insert(e,n,{isDecimalSign:i,isMinusSign:r})}},onPaste:function(e){e.preventDefault();var n=(e.clipboardData||window.clipboardData).getData("Text");if(n){var i=this.parseValue(n);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),r=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}},getCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var r=e.search(this._suffix);this._suffix.lastIndex=0;var u=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:u}},insert:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&r!==-1)){var u=this.$refs.input.$el.selectionStart,s=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),h=this.getCharIndexes(a),c=h.decimalCharIndex,w=h.minusCharIndex,o=h.suffixCharIndex,m=h.currencyCharIndex,l;if(i.isMinusSign)u===0&&(l=a,(w===-1||s!==0)&&(l=this.insertText(a,n,0,s)),this.updateValue(e,l,n,"insert"));else if(i.isDecimalSign)c>0&&u===c?this.updateValue(e,a,n,"insert"):c>u&&c<s?(l=this.insertText(a,n,u,s),this.updateValue(e,l,n,"insert")):c===-1&&this.maxFractionDigits&&(l=this.insertText(a,n,u,s),this.updateValue(e,l,n,"insert"));else{var y=this.numberFormat.resolvedOptions().maximumFractionDigits,g=u!==s?"range-insert":"insert";if(c>0&&u>c){if(u+n.length-(c+1)<=y){var f=m>=u?m-1:o>=u?o:a.length;l=a.slice(0,u)+n+a.slice(u+n.length,f)+a.slice(f),this.updateValue(e,l,n,g)}}else l=this.insertText(a,n,u,s),this.updateValue(e,l,n,g)}}},insertText:function(e,n,i,r){var u=n==="."?n:n.split(".");if(u.length===2){var s=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(n)+e.slice(r):this.formatValue(n)||e}else return r-i===e.length?this.formatValue(n):i===0?n+e.slice(r):r===e.length?e.slice(0,i)+n:e.slice(0,i)+n+e.slice(r)},deleteRange:function(e,n,i){var r;return i-n===e.length?r="":n===0?r=e.slice(i):i===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(i),r},initCursor:function(){var e=this.$refs.input.$el.selectionStart,n=this.$refs.input.$el.value,i=n.length,r=null,u=(this.prefixChar||"").length;n=n.replace(this._prefix,""),e=e-u;var s=n.charAt(e);if(this.isNumeralChar(s))return e+u;for(var a=e-1;a>=0;)if(s=n.charAt(a),this.isNumeralChar(s)){r=a+u;break}else a--;if(r!==null)this.$refs.input.$el.setSelectionRange(r+1,r+1);else{for(a=e;a<i;)if(s=n.charAt(a),this.isNumeralChar(s)){r=a+u;break}else a++;r!==null&&this.$refs.input.$el.setSelectionRange(r,r)}return r||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==E()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,n,i,r){var u=this.$refs.input.$el.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,r,n),this.handleOnInput(e,u,s))},handleOnInput:function(e,n,i){if(this.isValueChanged(n,i)){var r,u;this.$emit("input",{originalEvent:e,value:i,formattedValue:n}),(r=(u=this.formField).onInput)===null||r===void 0||r.call(u,{originalEvent:e,value:i})}},isValueChanged:function(e,n){if(n===null&&e!==null)return!0;if(n!=null){var i=typeof e=="string"?this.parseValue(e):e;return n!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,n,i,r){n=n||"";var u=this.$refs.input.$el.value,s=this.formatValue(e),a=u.length;if(s!==r&&(s=this.concatValues(s,r)),a===0){this.$refs.input.$el.value=s,this.$refs.input.$el.setSelectionRange(0,0);var h=this.initCursor(),c=h+n.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var w=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=s;var m=s.length;if(i==="range-insert"){var l=this.parseValue((u||"").slice(0,w)),y=l!==null?l.toString():"",g=y.split("").join("(".concat(this.groupChar,")?")),f=new RegExp(g,"g");f.test(s);var x=n.split("").join("(".concat(this.groupChar,")?")),C=new RegExp(x,"g");C.test(s.slice(f.lastIndex)),o=f.lastIndex+C.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(m===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(o+1,o+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var T=u.charAt(o-1),K=u.charAt(o),V=a-m,P=this._group.test(K);P&&V===1?o+=1:!P&&this.isNumeralChar(T)&&(o+=-1*V+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(u==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var j=this.initCursor(),F=j+n.length+1;this.$refs.input.$el.setSelectionRange(F,F)}else o=o+(m-a),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,n){if(e&&n){var i=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+n.slice(i):e}return e},getDecimalLength:function(e){if(e){var n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,n){this.writeValue(n,e)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==E()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){var n,i;this.focused=!1;var r=e.target,u=this.validateValue(this.parseValue(r.value));this.$emit("blur",{originalEvent:e,value:r.value}),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i,e),r.value=this.formatValue(u),r.setAttribute("aria-valuenow",u),this.updateModel(e,u),!this.disabled&&!this.readonly&&this.highlightOnFocus&&G()},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_value>=this.max},minBoundry:function(){return this.d_value<=this.min}},computed:{upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.d_value&&!this.allowEmpty?0:this.d_value;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{InputText:Q,AngleUpIcon:R,AngleDownIcon:O}},de=["disabled"],he=["disabled"],me=["disabled"],fe=["disabled"];function be(t,e,n,i,r,u){var s=W("InputText");return d(),v("span",p({class:t.cx("root")},t.ptmi("root")),[_(s,{ref:"input",id:t.inputId,role:"spinbutton",class:H([t.cx("pcInputText"),t.inputClass]),style:Z(t.inputStyle),value:u.formattedValue,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.d_value,inputmode:t.mode==="decimal"&&!t.minFractionDigits?"numeric":"decimal",disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,size:t.size,invalid:t.invalid,variant:t.variant,onInput:u.onUserInput,onKeydown:u.onInputKeyDown,onKeypress:u.onInputKeyPress,onPaste:u.onPaste,onClick:u.onInputClick,onFocus:u.onInputFocus,onBlur:u.onInputBlur,pt:t.ptm("pcInputText"),unstyled:t.unstyled},null,8,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","inputmode","disabled","readonly","placeholder","aria-labelledby","aria-label","size","invalid","variant","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","pt","unstyled"]),t.showButtons&&t.buttonLayout==="stacked"?(d(),v("span",p({key:0,class:t.cx("buttonGroup")},t.ptm("buttonGroup")),[b(t.$slots,"incrementbutton",{listeners:u.upButtonListeners},function(){return[$("button",p({class:[t.cx("incrementButton"),t.incrementButtonClass]},S(u.upButtonListeners,!0),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton")),[b(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(d(),B(D(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),p({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,de)]}),b(t.$slots,"decrementbutton",{listeners:u.downButtonListeners},function(){return[$("button",p({class:[t.cx("decrementButton"),t.decrementButtonClass]},S(u.downButtonListeners,!0),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton")),[b(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(d(),B(D(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),p({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,he)]})],16)):k("",!0),b(t.$slots,"incrementbutton",{listeners:u.upButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(d(),v("button",p({key:0,class:[t.cx("incrementButton"),t.incrementButtonClass]},S(u.upButtonListeners,!0),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton")),[b(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(d(),B(D(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),p({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,me)):k("",!0)]}),b(t.$slots,"decrementbutton",{listeners:u.downButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(d(),v("button",p({key:0,class:[t.cx("decrementButton"),t.decrementButtonClass]},S(u.downButtonListeners,!0),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton")),[b(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(d(),B(D(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),p({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,fe)):k("",!0)]})],16)}pe.render=be;export{pe as s};
