import{f as s,x as n,o as r,c as t,b as l,w as d,T as i,a as u,D as f,O as m,H as g}from"./app.db0a1a4d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const c=s({name:"MPImg",props:{src:{type:String,required:!0},alt:{type:String,required:!0},imageClass:{type:[String,Array,Object],default:null}},setup:()=>{const o=n(!0);return{loading:o,onLoadStart(){console.log("onLoadStart"),o.value=!0},onLoad(){console.log("onLoad"),o.value=!1},onError(){console.log("onError"),o.value=!1}}}}),v={class:"flex relative"},L={key:0,class:"animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full"},S=["src","alt","onDragstart"];function b(o,e,y,C,E,k){return r(),t("div",v,[l(i,{name:"fade"},{default:d(()=>[o.loading?(r(),t("div",L)):g("",!0)]),_:1}),u("img",{src:o.src,class:f(["max-h-full",o.imageClass]),alt:o.alt,onDragstart:m(a=>null,["prevent"]),onLoadstart:e[0]||(e[0]=(...a)=>o.onLoadStart&&o.onLoadStart(...a)),onLoad:e[1]||(e[1]=(...a)=>o.onLoad&&o.onLoad(...a)),onError:e[2]||(e[2]=(...a)=>o.onError&&o.onError(...a))},null,42,S)])}var M=p(c,[["render",b],["__file","MPImg.vue"]]);export{M as default};