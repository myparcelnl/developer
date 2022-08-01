import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as a,b as t,a as n,w as s,d as e,r}from"./app.89e30d60.js";const c={},d=t("h2",{id:"endpoints",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#endpoints","aria-hidden":"true",tabindex:"-1"},"#"),e(" Endpoints")],-1),u=t("h3",{id:"public",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#public","aria-hidden":"true",tabindex:"-1"},"#"),e(" Public")],-1),h=t("p",null,"Public endpoints do not require authorization and are safe to use in a browser.",-1),p=e("Delivery options "),_=e("GetDeliveryOptions"),m=e("Pickup locations "),b=e("GetPickupLocations"),f=e("Carriers "),k=e("GetCarriers"),v=e("GetCarrier"),y=t("h3",{id:"private",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#private","aria-hidden":"true",tabindex:"-1"},"#"),e(" Private")],-1),G=t("p",null,"Private endpoints require an Authorization header. This should be a base64 encoded MyParcel API key. You can create one in the shop settings in our [backoffice]. See [Authorization] in the API documentation for more information.",-1),P=e("Shipments "),x=e("GetShipment"),g=e("GetShipments"),S=e("PostShipments");function j(C,A){const i=r("AutoLink");return l(),a("div",null,[d,u,h,t("ul",null,[t("li",null,[p,t("ul",null,[t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/public/delivery-options/GetDeliveryOptions.ts"},{default:s(()=>[_]),_:1})])])]),t("li",null,[m,t("ul",null,[t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/public/pickup-locations/GetPickupLocations.ts"},{default:s(()=>[b]),_:1})])])]),t("li",null,[f,t("ul",null,[t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/public/carriers/GetCarriers.ts"},{default:s(()=>[k]),_:1})]),t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/public/carriers/GetCarrier.ts"},{default:s(()=>[v]),_:1})])])])]),y,G,t("ul",null,[t("li",null,[P,t("ul",null,[t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/private/shipments/GetShipment.ts"},{default:s(()=>[x]),_:1})]),t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/private/shipments/GetShipments.ts"},{default:s(()=>[g]),_:1})]),t("li",null,[n(i,{item:"https://github.com/myparcelnl/js-sdk/blob/main/src/endpoints/private/shipments/PostShipments.ts"},{default:s(()=>[S]),_:1})])])])])])}var z=o(c,[["render",j],["__file","20.endpoints.html.vue"]]);export{z as default};