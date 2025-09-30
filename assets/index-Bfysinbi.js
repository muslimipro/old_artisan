import{I as l,b as t,e,V as s,S as i,t as c,k as p,n as v,W as g,l as d,X as u}from"./index-CqrHncwp.js";var m=function(r){var a=r.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    color: `).concat(a("avatar.color"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(a("avatar.icon.size"),`;
    width: `).concat(a("avatar.icon.size"),`;
    height: `).concat(a("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.icon.size"),`;
    width: `).concat(a("avatar.lg.icon.size"),`;
    height: `).concat(a("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.icon.size"),`;
    width: `).concat(a("avatar.xl.icon.size"),`;
    height: `).concat(a("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(a("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(a("avatar.xl.group.offset"),`;
}
`)},h={root:function(r){var a=r.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},f=l.extend({name:"avatar",theme:m,classes:h}),b={name:"BaseAvatar",extends:u,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:f,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},y={name:"Avatar",extends:b,inheritAttrs:!1,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}}},z=["aria-labelledby","aria-label"],w=["src","alt"];function S(n,r,a,k,$,o){return t(),e("div",i({class:n.cx("root"),"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptmi("root")),[s(n.$slots,"default",{},function(){return[n.label?(t(),e("span",i({key:0,class:n.cx("label")},n.ptm("label")),c(n.label),17)):n.$slots.icon?(t(),p(g(n.$slots.icon),{key:1,class:v(n.cx("icon"))},null,8,["class"])):n.icon?(t(),e("span",i({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):n.image?(t(),e("img",i({key:3,src:n.image,alt:n.ariaLabel,onError:r[0]||(r[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},n.ptm("image")),null,16,w)):d("",!0)]})],16,z)}y.render=S;export{y as s};
