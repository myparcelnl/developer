import{f as s,x as n,o,c as t,H as l,b as i,D as d,N as u}from"./app.89e30d60.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const m=s({name:"MPImg",props:{src:{type:String,required:!0},alt:{type:String,required:!0},imageClass:{type:[String,Array,Object],default:null}},setup:()=>{const r=n(!0);return{loading:r,onLoadStart(){r.value=!0},onLoad(){r.value=!1},onError(){r.value=!1}}}}),p={class:"flex relative"},g={key:0,class:"animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full"},v=["src","alt","onDragstart"];function L(r,e,b,c,y,S){return o(),t("div",p,[r.loading?(o(),t("div",g)):l("",!0),i("img",{src:r.src,class:d(["max-h-full",r.imageClass]),alt:r.alt,onDragstart:u(a=>null,["prevent"]),onLoadstart:e[0]||(e[0]=(...a)=>r.onLoadStart&&r.onLoadStart(...a)),onLoad:e[1]||(e[1]=(...a)=>r.onLoad&&r.onLoad(...a)),onError:e[2]||(e[2]=(...a)=>r.onError&&r.onError(...a))},null,42,v)])}var E=f(m,[["render",L],["__file","MPImg.vue"]]);export{E as default};