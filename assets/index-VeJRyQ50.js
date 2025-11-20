import{s as q}from"./index-CLRItcQh.js";import{B as E,s as H,o as t,c as o,m as O,d as W,u as G,a as J,r as w,U as N,b as K,e as V,f as Q,g as Y,h as C,i as e,j as s,t as u,k as Z,F as I,l as j,n as ee,p as m,q as M,v as te,w as se}from"./index-CnKe9SRm.js";import{_ as ne}from"./MainHeader.vue_vue_type_script_setup_true_lang-DibA2tTq.js";import{R as oe,m as ae}from"./mapRouteFromDto-PSN50FDR.js";import{L as re}from"./lessonApi-xOU5J9_F.js";import{m as le}from"./mapLessonFromDto-De7FAIVI.js";import"./index-BZd1lmey.js";import"./index-D6P5SBNN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CQkEe7f2.js";import"./logo-D1-3uCnC.js";import"./mapUnitFromDto-DVWJHO4f.js";import"./transformUnitDtosToPages-hsgZNhAG.js";var ie=function(g){var r=g.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(r("skeleton.background"),`;
    border-radius: `).concat(r("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(r("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},ce={root:{position:"relative"}},de={root:function(g){var r=g.props;return["p-skeleton p-component",{"p-skeleton-circle":r.shape==="circle","p-skeleton-animation-none":r.animation==="none"}]}},ue=E.extend({name:"skeleton",theme:ie,classes:de,inlineStyles:ce}),me={name:"BaseSkeleton",extends:H,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ue,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},p={name:"Skeleton",extends:me,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function pe(c,g,r,S,b,f){return t(),o("div",O({class:c.cx("root"),style:[c.sx("root"),f.containerStyle],"aria-hidden":"true"},c.ptmi("root")),null,16)}p.render=pe;const fe=W("home-store",()=>{const c=G(),{t:g}=J();let r={};const S=w(0),b=w(!1);async function f(){try{b.value=!0;const{data:a}=await N.getUserProgress();S.value=a.xp,r=a.attempts.reduce((i,n)=>(i[n.date]={date:n.date,count:n.count,success:n.success},i),{})}catch(a){c.add({severity:"error",summary:a,life:2e3})}finally{b.value=!1}}const y=new Date,D=y.toISOString().slice(0,10),T=(y.getDay()+6)%7,B=new Date(y);B.setDate(y.getDate()-T-14);const R=B;function z(a,i){const n=(a-1)*7+(i-1),l=new Date(R);return l.setDate(R.getDate()+n),l.toISOString().slice(0,10)}function U(a,i){const n=z(a,i);if(n>D)return"bg-white";const l=r[n];return l?l.success?"bg-green-400":"bg-green-100":"bg-gray-200"}function x(a,i){const n=z(a,i);if(n>D)return"";const l=r[n];return l?`${n}
attempts: ${l.count}
success: ${l.success}`:`${n}: no attempts`}const d=w({lesson_id:0,lesson_level_name:"",lesson_name:"",lesson_type:"learn",route_id:0,route_name:""}),_=w(""),v=w(""),h=w(!1);async function P(){try{h.value=!0;const{data:a}=await N.getUserLastLesson();d.value=a,_.value=g("continue")}catch(a){const{data:i}=await re.getLessonById(5,"1",void 0),n=le(i),{data:l}=await oe.getRouteById(1),L=ae(l);d.value.lesson_id=n.id,d.value.lesson_level_name=L.levels[0].name,d.value.lesson_name=n.name,d.value.route_id=1,d.value.route_name=L.name,_.value=g("start"),c.add({severity:"error",summary:a,life:2e3})}finally{h.value=!1,v.value="/v2/lesson/"+d.value.lesson_id+"?route_id="+d.value.route_id}}return{isProgressLoading:b,loadProgress:f,getDayClass:U,getDayTooltip:x,xp:S,isLastLessonLoading:h,lastLesson:d,lastButtonLabel:_,lastButtonURL:v,loadLastLesson:P}}),he={class:"flex flex-col items-center"},ge={class:"w-full max-w-[1280px] px-8 py-10"},_e={class:"flex flex-col gap-8"},ye={class:"flex gap-8"},xe={class:"flex flex-col gap-8"},ve={class:"flex flex-col w-[400px] h-[286px] bg-white border border-gray-100 rounded-3xl p-8"},be={key:0,class:"text-4xl font-sans font-light text-gray-500 mb-4"},ke={key:1,class:"text-4xl font-sans font-light text-gray-500 mb-4"},we={class:"font-normal text-5xl text-black"},Se={class:"flex"},Le={class:"flex-grow flex gap-2 justify-between items-end text-gray-500"},$e={class:"grid grid-rows-6 grid-cols-7 gap-0.5 w-full h-full"},De=["title"],Be={class:"w-[400px] h-[180px] bg-purple-50 border border-gray-100 rounded-3xl p-8"},Re={key:0},ze={key:1,class:"flex flex-col justify-between gap-5"},Pe={class:"flex items-center justify-center gap-4"},Ce={class:"flex flex-col"},Ie={class:"text-lg"},Te={class:"text-gray-500"},Ue={class:"flex flex-col gap-8 w-full"},je={class:"relative flex items-center bg-slate-50 border border-gray-100 rounded-3xl p-5"},Ae={key:1},Fe={class:"flex flex-col"},Xe={class:"italic text-gray-500"},Ne={key:1,class:"text-2xl"},Ve={class:"flex flex-col absolute right-5 top-3 items-end"},Me={key:1,class:"text-gray-400"},qe={key:3,class:"text-gray-500"},Ee={class:"flex-grow flex flex-col justify-between items-center bg-white border border-gray-100 rounded-3xl px-8 pb-4 pt-10"},He={class:"flex flex-col items-center"},Oe={key:1,class:"text-2xl font-semibold mb-2"},We={key:3,class:"text-blue-400 font-sans"},Ge={key:1,class:"text-[100px]"},Je={class:"flex flex-col items-center w-full min-w-full"},Ke={key:1,class:"text-gray-500 font-sans mb-4"},dt=K({__name:"HomePage",setup(c){const g=te(),r=fe(),{isProgressLoading:S,xp:b,isLastLessonLoading:f,lastLesson:y,lastButtonLabel:D,lastButtonURL:A}=V(r),{loadProgress:T,getDayClass:B,getDayTooltip:R,loadLastLesson:z}=r,U=Q(),{userInfo:x,userLabel:d,isUserInfoLoading:_}=V(U);return Y(()=>{T(),z()}),(v,h)=>{var i,n,l,L,F,X;const P=se,a=q;return t(),o("div",he,[C(e(ne)),s("div",ge,[s("div",_e,[s("div",ye,[s("div",xe,[s("div",ve,[e(S)?(t(),o("div",be,[C(e(p),{width:"11rem",height:"49px"})])):(t(),o("div",ke,[s("span",we,u(e(b)),1),h[1]||(h[1]=Z(" xp "))])),s("div",Se,[(t(),o(I,null,j(["Mo","Tu","We","Th","Fr","Sa","Su"],(k,$)=>s("div",{key:`day-${$}`,class:"w-full h-full flex items-center justify-center rounded text-xs text-gray-500 font-medium"},u(k),1)),64))]),s("div",Le,[s("div",$e,[(t(),o(I,null,j(3,k=>(t(),o(I,null,[(t(),o(I,null,j(7,$=>s("div",{key:`cell-${k}-${$}`,class:ee(["aspect-square flex items-center justify-center rounded m-1",e(B)(k,$)]),title:e(R)(k,$)},null,10,De)),64))],64))),64))])])]),s("div",Be,[e(_)?(t(),o("div",Re,[e(f)?(t(),m(e(p),{key:0,height:"115px",class:"w-full mb-2"})):M("",!0)])):(t(),o("div",ze,[s("div",Pe,[h[2]||(h[2]=s("i",{class:"pi pi-crown text-orange-300",style:{"font-size":"28px"}},null,-1)),s("div",Ce,[s("div",Ie,u(v.$t("unlockPremium")),1),s("div",Te,u(v.$t("getExclusiveContent")),1)])]),C(P,{label:v.$t("explorePremium"),severity:"help",class:"rounded-full"},null,8,["label"])]))])]),s("div",Ue,[s("div",je,[e(_)?(t(),m(e(p),{key:0,class:"mr-6",shape:"circle",size:"4rem"})):e(x)?(t(),o("div",Ae,[e(x).small_avatar_url?(t(),m(a,{key:0,class:"mr-6",size:"xlarge",shape:"circle",image:e(x).small_avatar_url},null,8,["image"])):(t(),m(a,{key:1,label:e(d),class:"mr-6",size:"xlarge",shape:"circle"},null,8,["label"]))])):M("",!0),s("div",Fe,[s("span",Xe,u(v.$t("welcomeBack")),1),e(_)?(t(),m(e(p),{key:0,width:"15rem",height:"33px"})):(t(),o("div",Ne,u((i=e(x))==null?void 0:i.name),1))]),s("div",Ve,[e(_)?(t(),m(e(p),{key:0,width:"12rem",height:"25px",class:"mb-1"})):(t(),o("div",Me,u((n=e(x))==null?void 0:n.school_name),1)),e(_)?(t(),m(e(p),{key:2,width:"3rem",height:"25px"})):(t(),o("div",qe,u((l=e(x))==null?void 0:l.class_name),1))])]),s("div",Ee,[s("div",He,[e(f)?(t(),m(e(p),{key:0,width:"15rem",height:"30px",class:"mb-2"})):(t(),o("div",Oe,u((L=e(y))==null?void 0:L.lesson_name),1)),e(f)?(t(),m(e(p),{key:2,width:"10rem",height:"20px",class:"mb-2"})):(t(),o("div",We,u((F=e(y))==null?void 0:F.lesson_level_name),1))]),e(f)?(t(),m(e(p),{key:0,width:"10rem",height:"9rem",class:"mb-2"})):(t(),o("div",Ge,"🚀")),s("div",Je,[e(f)?(t(),m(e(p),{key:0,width:"10rem",height:"20px",class:"mb-4"})):(t(),o("div",Ke,u((X=e(y))==null?void 0:X.route_name),1)),C(P,{label:e(D),class:"rounded-full h-12 min-w-full",disabled:e(f),onClick:h[0]||(h[0]=k=>e(g).push(e(A)))},null,8,["label","disabled"])])])])])])])])}}});export{dt as default};
