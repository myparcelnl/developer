import p from"./AutoLink.60105737.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{f as c,g as m,o as i,h as d,w as k,c as f,t as a,r as _,C as L,d as $,R as h}from"./app.e0bc0234.js";const A=c({name:"ApiLink",components:{AutoLink:p},props:{to:{type:String,required:!0}},setup:t=>{const o=t.to.split("_"),s=()=>h().getRoutes().find(e=>{const r=o[0].padStart(2,"0");return e.path.startsWith(`/api-reference/${r}`)});return{linkItem:m(()=>{const e=s();return e?{link:`${e.path}#_${o.map(n=>n.toLowerCase()).join("-")}`,text:t.to}:(console.warn(`ApiLink to ${t.to} could not be resolved.`),null)})}}}),C=["textContent"];function v(t,o,s,l,e,n){const r=_("AutoLink");return t.linkItem?(i(),d(r,{key:0,item:t.linkItem},{default:k(()=>[L(t.$slots,"default",{},()=>[$(a(t.to),1)])]),_:3},8,["item"])):(i(),f("span",{key:1,textContent:a(t.to)},null,8,C))}var g=u(A,[["render",v],["__file","ApiLink.vue"]]);export{g as default};