import l from"./Layout.bd47f040.js";import{M as c}from"./MPButton.cbf611fe.js";import{f as p,u,g as m,o as _,h as d,w as f,i as x,r as a,a as e,t as s,b as P}from"./app.db0a1a4d.js";import{u as g}from"./useTranslate.443b946c.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.53c9d70d.js";import"./defineVariant.6257c1c1.js";import"./toArray.7df412a1.js";import"./AutoLink.b0563b21.js";import"./ToggleChevron.2a8ea23e.js";import"./Icon.ab49fc9e.js";const k=p({name:"404Page",components:{MPButton:c,Layout:l},setup:()=>{const t=u(),o=g(),n=m(()=>({...x(t.value),text:o("404Page.backToHome")}));return{translate:o,link:n}}}),v={class:"flex py-8"},C={class:"m-auto text-center"},y=["textContent"],B=["textContent"];function L(t,o,n,b,M,$){const r=a("MPButton"),i=a("Layout");return _(),d(i,{"disable-sidebar":""},{default:f(()=>[e("div",v,[e("div",C,[e("h1",{class:"text-6xl",textContent:s(t.translate("404Page.title"))},null,8,y),e("p",{class:"font-display pb-4 text-xl",textContent:s(t.translate("404Page.notFound"))},null,8,B),P(r,{link:t.link},null,8,["link"])])])]),_:1})}var z=h(k,[["render",L],["__file","404Page.vue"]]);export{z as default};