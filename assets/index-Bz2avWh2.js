import{I as p,X as a,b as t,e as o,S as e,h as c}from"./index-CqrHncwp.js";var l=function(s){var r=s.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(r("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(r("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(r("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(r("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(r("progressspinner.color.4"),`;
    }
}
`)},d={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},g=p.extend({name:"progressspinner",theme:l,classes:d}),f={name:"BaseProgressSpinner",extends:a,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:g,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},h={name:"ProgressSpinner",extends:f,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},m=["fill","stroke-width"];function k(n,s,r,u,y,i){return t(),o("div",e({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(t(),o("svg",e({class:n.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},n.ptm("spin")),[c("circle",e({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,m)],16))],16)}h.render=k;export{h as s};
