import{x as b,f as w,g as k,o as t,c as a,b as s,D as d,a as n,h as f,H as o,t as _,w as u,r as l,d as h}from"./app.89e30d60.js";import x from"./AutoLink.95c6dfa0.js";import{I as j}from"./Icon.d0ce5ccb.js";import C from"./MPImg.fa8551ad.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";var S=[{name:"google-chrome-extension",title:"Google Chrome Extension",type:"utility",internal:!0,documentation:"https://www.myparcel.nl/en/integrations/google-chrome-extensie/",image:"chrome.svg"},{name:"delivery-options",title:"Delivery Options",type:"utility",internal:!0,repository:"myparcelnl/delivery-options",documentation:"/documentation/60.delivery-options/",classes:"bg-goldfish-500",image:"delivery-options.svg"},{name:"woocommerce",title:"WooCommerce",type:"plugin",internal:!0,repository:"myparcelnl/woocommerce",documentation:"/documentation/10.woocommerce/",image:"woocommerce.svg"},{name:"prestashop",title:"Prestashop",type:"plugin",internal:!0,repository:"myparcelnl/prestashop",documentation:"/documentation/11.prestashop/",image:"prestashop.svg"},{name:"magento-1",title:"Magento 1",type:"plugin",internal:!0,repository:"myparcelnl/magento1",documentation:"https://myparcelnl.github.io/magento1",image:"magento.svg",classes:"bg-zinc-100"},{name:"magento-2",title:"Magento 2",type:"plugin",internal:!0,repository:"myparcelnl/magento",documentation:"/documentation/13.magento2/",image:"magento.svg"},{name:"shopify",title:"Shopify",type:"plugin",documentation:"/documentation/14.shopify/",image:"shopify.svg"},{name:"shopware",title:"Shopware",type:"plugin",documentation:"/documentation/15.shopware/",image:"shopware-light.svg",classes:"bg-[#189EFF]"},{name:"lightspeed",title:"Lightspeed",type:"plugin",documentation:"https://myparcelnl.github.io/lightspeed",image:"lightspeed.svg"},{name:"cs-cart",title:"CS-Cart",type:"plugin",documentation:"https://myparcelnl.github.io/cs-cart",image:"cart.png"},{name:"opencart-2-2-x \u2013 2-3-x",title:"Opencart 2.2.x \u2013 2.3.x",type:"plugin",documentation:"https://myparcelnl.github.io/opencart2_3",image:"opencart.svg",classes:"bg-sky-100"},{name:"opencart-3",title:"Opencart 3",type:"plugin",documentation:"https://mypar,celnl.github.io/opencart3",image:"opencart.svg",classes:"bg-sky-50"},{name:"shoppagina",title:"Shoppagina",type:"plugin",documentation:"https://myparcelnl.github.io/shoppagina",image:"shoppagina.svg"},{name:"virtuemart-2",title:"Virtuemart 2",type:"plugin",documentation:"https://myparcelnl.github.io/virtuemart",image:"virtuemart.svg",classes:"bg-zinc-100"},{name:"virtuemart-3",title:"Virtuemart 3",type:"plugin",documentation:"https://myparcelnl.github.io/virtuemart3",image:"virtuemart.svg"},{name:"ccv",title:"CCV",type:"plugin",documentation:"https://myparcelnl.github.io/ccv-shop",image:"ccv.svg"},{name:"mijnwebwinkel",title:"Mijnwebwinkel",type:"plugin",documentation:"https://www.mijnwebwinkel.nl/support-resources/vraag-antwoord/hoe-gebruik-ik-myparcel-mijnwebwinkel",image:"mijnwebwinkel.svg"},{name:"os-commerce",title:"osCommerce",type:"plugin",documentation:"https://www.myparcel.nl/integrations/oscommerce/",image:"oscommerce.png",classes:"bg-[#263559]"},{name:"bigcommerce",title:"bigcommerce",type:"plugin",documentation:"https://www.myparcel.nl/integrations/bigcommerce/",image:"bigcommerce.svg"},{name:"gratis-webshop-beginnen",title:"Gratis Webshop Beginnen",type:"plugin",documentation:"https://www.gratiswebshopbeginnen.nl/help/webshop-apps/hoe-werkt-de-myparcel-koppeling/",image:"gratis-webshop-beginnen.png"},{name:"logi-vert",title:"LogiVert",type:"plugin",documentation:"https://www.logivert.com/nl/",image:"logivert.svg"},{name:"my-shop",title:"myShop",type:"plugin",documentation:"https://myparcelnl.github.io/myshop/",image:"myshop.svg"},{name:"sherpaan",title:"Sherpaan",type:"plugin",documentation:"https://sherpaan.nl/project/myparcel/",image:"sherpaan-light.svg",classes:"bg-[#001452]"},{name:"shoptrader",title:"Shoptrader",type:"plugin",documentation:"https://support.shoptrader.com/support/home",image:"shoptrader.png"},{name:"php-sdk",internal:!0,title:"PHP",type:"sdk",repository:"myparcelnl/sdk",documentation:"/documentation/50.php-sdk",image:"php.svg",classes:"bg-[#787CB5]"},{name:"js-sdk",internal:!0,title:"JavaScript/Node.js",type:"sdk",repository:"myparcelnl/js-sdk",documentation:"/documentation/51.js-sdk",image:"js.svg",classes:"bg-[#F7DF1E]"},{name:"c-sharp-sdk",title:"C#/.net",type:"sdk",repository:"janssenr/MyParcelApi.Net",image:"c-sharp.svg"},{name:"ruby-sdk",title:"Ruby",type:"sdk",repository:"paypronl/myparcel",image:"ruby.svg",classes:"bg-[#F44336]"},{name:"amazon",title:"Amazon",type:"api",internal:!0,documentation:"https://myparcelnl.github.io/amazon",image:"amazon.svg"},{name:"wix",title:"Wix",type:"api",internal:!0,documentation:"/documentation/20.wix/",image:"wix.svg"},{name:"bol-com",title:"bol.com",type:"api",internal:!0,documentation:"https://myparcelnl.github.io/bol.com",image:"bol-com.svg"},{name:"exact-online",title:"Exact Online",type:"api",internal:!0,documentation:"https://myparcelnl.github.io/exact-online",image:"exact-online.svg"},{name:"picqer",title:"Picqer",type:"api",documentation:"https://picqer.com/nl/help/artikelen/myparcel-koppelen",image:"picqer.svg"},{name:"channel-dock",title:"ChannelDock",type:"api",documentation:"https://intercom.help/channeldock/nl/articles/6043422-myparcel-koppelen-aan-channeldock",image:"channel-dock.svg"},{name:"goedgepickt",title:"Goedgepickt",type:"api",documentation:"https://help.goedgepickt.nl/article/srujx2j0ln-my-parcel",image:"goedgepickt.svg"},{name:"fulfilment-software",title:"Fulfilment software",type:"api",documentation:"https://fulfilment-software.com/",image:"fulfilment.svg"},{name:"iPacky",title:"iPacky",type:"api",documentation:"https://ipacky.com/shipping-connectors-overview/",image:"iPacky.png"},{name:"e-tailize",title:"e-tailize",type:"api",documentation:"https://help.e-tailize.com/en/articles/186674-connecting-myparcel",image:"e-tailize.png"},{name:"stockitup",title:"Stockitup",type:"api",image:"stockitup.png",classes:"bg-[#05386b]"}];const z={classes:void 0,documentation:void 0,image:void 0,internal:!1,repository:void 0,title:"",type:"other"};let i;const P=()=>S.map(e=>({...z,...e})),M=()=>(i!=null||(i=b(P())),i),V=w({name:"Integration",components:{AutoLink:x,Icon:j,MPImg:C},props:{name:{type:String,default:null},integration:{type:Object,default:null}},setup:e=>{if(!e.name&&!e.integration)throw new Error("Either a name or integration prop must be provided to use <Integration />.");const m=M();return{data:k(()=>{var r;return(r=e.integration)!=null?r:m.value.find(({name:c})=>c===e.name)})}}}),D={class:d(["border","flex","flex-col","group","hover:outline-amber-500","outline","outline-2","outline-offset-2","outline-transparent","overflow-hidden","rounded-lg","transition-all"])},E={class:"border-t dark:bg-zinc-800 p-3"},$=["textContent"],F=s("br",null,null,-1),O={key:0},A=h(" View on GitHub "),B={key:1},L=h(" Documentation ");function N(e,m,y,r,c,G){const v=l("MPImg"),p=l("Icon"),g=l("AutoLink");return t(),a("div",null,[s("div",D,[e.data.image?(t(),a("div",{key:0,class:d(["flex grow px-3 py-5 relative",[e.data.classes,{"bg-white":!e.data.classes}]])},[n(v,{class:"grow h-24",src:`/integrations/${e.data.image}`,role:"none","image-class":"m-auto",alt:`${e.data.title} logo`},null,8,["src","alt"]),e.data.internal?(t(),f(p,{key:0,title:"Maintained by MyParcel",icon:"myparcel",class:"absolute right-2 text-xl top-1"})):o("",!0)],2)):o("",!0),s("div",E,[s("span",{class:"font-bold",textContent:_(e.data.title)},null,8,$),F,e.data.repository?(t(),a("div",O,[n(p,{icon:"github",class:"mr-2"}),n(g,{item:`https://github.com/${e.data.repository}`},{default:u(()=>[A]),_:1},8,["item"])])):o("",!0),e.data.documentation?(t(),a("div",B,[n(p,{icon:"documentation",class:"mr-2"}),n(g,{item:e.data.documentation},{default:u(()=>[L]),_:1},8,["item"])])):o("",!0)])])])}var q=I(V,[["render",N],["__file","Integration.vue"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{q as I,U as a,M as u};