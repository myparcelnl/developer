import r from"./Shield.6f28bda6.js";import{t as a}from"./toArray.7df412a1.js";import{a6 as n}from"./app.e0bc0234.js";import"./AutoLink.60105737.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./MPImg.26e7658c.js";const o=[{alt:"pull requets",link:"pulls",name:"issues-pr"},{alt:"issues",link:"issues",name:"issues"},{alt:"releases",link:"releases",name:"v/release"}],b=e=>{var s;return a((s=e.link)!=null?s:"releases").map(l=>{const t=o.find(i=>i.link===l);return t?n(r,{alt:e.repo+" "+t.alt+" on GitHub",href:`https://github.com/${e.repo}/${t.link}`,path:`github/${t.name}/${e.repo}?color=4183C4&logo=github`}):null})};export{b as default};