import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as _,a as t,b as n,w as o,e as c,d as e,r as d}from"./app.02e2e447.js";const u={},h=c('<h3 id="_12-drop-off-points" tabindex="-1"><a class="header-anchor" href="#_12-drop-off-points" aria-hidden="true">#</a> 12. Drop off points</h3><h4 id="_12-a" tabindex="-1"><a class="header-anchor" href="#_12-a" aria-hidden="true">#</a> 12.A Get drop off points</h4><h5 id="_12-a-1" tabindex="-1"><a class="header-anchor" href="#_12-a-1" aria-hidden="true">#</a> 12.A.1 Overview</h5><p>Use this endpoint to receive a list of nearby drop off points, where shipments can be dropped off upon shipping. Results are ordered by distance from the provided postal code or coordinates.<br> When creating Instabox shipments, it is required to provide a drop-off point.</p><h5 id="_12-a-2" tabindex="-1"><a class="header-anchor" href="#_12-a-2" aria-hidden="true">#</a> 12.A.2 Reference</h5>',5),p=t("tr",null,[t("td",null,[t("strong",null,"URI")]),t("td",{colspan:"2"},"https://api.myparcel.nl/drop_off_points")],-1),f=t("tr",null,[t("td",null,[t("strong",null,"Methods")]),t("td",{colspan:"2"},"GET")],-1),b=t("tr",null,[t("td",null,[t("strong",null,"Required request headers")]),t("td",{colspan:"2"},"User-Agent: CustomApiCall/2")],-1),y=t("tr",null,[t("td",null,[t("strong",null,"URI parameters")]),t("td",{colspan:"2"},"None.")],-1),g=t("td",{rowspan:"6"},[t("strong",null,"Query parameters")],-1),m=t("td",null,"postal_code",-1),x=e("string"),v=t("td",null,"cc",-1),R=e("country_code"),T=t("td",null,"carrier_id",-1),w=e("carrier"),D=t("td",null,"distance",-1),q=e("integer"),A=t("td",null,"latitude",-1),N=e("coordinates"),E=t("td",null,"longitude",-1),C=e("coordinates"),j=t("tr",null,[t("td",null,[t("strong",null,"Request body")]),t("td",{colspan:"2"},"None.")],-1),k=t("tr",null,[t("td",{rowspan:"2"},[t("strong",null,"Response")]),t("td",{colspan:"2"},"HTTP/1.1 200 OK")],-1),I=t("tr",null,[t("td",{colspan:"2"},"Content-Type: application/json;charset=utf-8")],-1),P=t("tr",null,[t("td",null,[t("strong",null,"Response body")]),t("td",{colspan:"2"},"array of drop off point objects")],-1),U=t("h5",{id:"_12-a-3",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_12-a-3","aria-hidden":"true"},"#"),e(" 12.A.3 Parameters")],-1),V=t("strong",null,"postal_code",-1),G=t("br",null,null,-1),L=e(" Data type: "),B=e("string"),H=t("br",null,null,-1),O=e(" Required: yes, unless longitude and latitude are used"),S=t("br",null,null,-1),J=e(" The postal code for which to fetch drop off points in the area."),W=t("strong",null,"cc",-1),K=t("br",null,null,-1),M=e(" Data type: "),Q=e("country_code"),z=t("br",null,null,-1),F=e(" Required: no"),X=t("br",null,null,-1),Y=e(" The country code for which to fetch the drop-off points. This endpoint can only be used in the Netherlands (cc=NL)."),Z=t("strong",null,"carrier_id",-1),$=t("br",null,null,-1),tt=e(" Data type: "),et=e("carrier"),nt=t("br",null,null,-1),ot=e(" Required: no"),st=e(" , "),lt=e(", and "),dt=e(" are available. "),at=t("strong",null,"distance",-1),it=t("br",null,null,-1),rt=e(" Data type: "),_t=e("integer"),ct=t("br",null,null,-1),ut=e(" Required: no"),ht=t("br",null,null,-1),pt=e(" Provide the radius in kilometers for which you want to find drop off points. The default distance differs by carrier."),ft=t("strong",null,"latitude",-1),bt=t("br",null,null,-1),yt=e(" Data type: "),gt=e("coordinates"),mt=t("br",null,null,-1),xt=e(" Required: no"),vt=t("br",null,null,-1),Rt=e(" This provides the ability to find drop off points by coordinates. Should be used together with longitude."),Tt=t("strong",null,"longitude",-1),wt=t("br",null,null,-1),Dt=e(" Data type: "),qt=e("coordinates"),At=t("br",null,null,-1),Nt=e(" Required: no"),Et=t("br",null,null,-1),Ct=e(" This provides the ability to find drop off points by coordinates. Should be used together with latitude."),jt=t("h5",{id:"_12-a-4",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_12-a-4","aria-hidden":"true"},"#"),e(" 12.A.4 Examples")],-1),kt=t("p",null,[t("strong",null,"Request")],-1),It=t("div",{class:"language-text ext-text"},[t("pre",{class:"language-text"},[t("code",null,`GET https://api.myparcel.nl/delivery_options?carrier_id=5&postal_code=2132JE HTTP/1.1
User-Agent: CustomApiCall/2
accept: application/json;charset=utf-8
`)])],-1),Pt=t("p",null,[t("strong",null,"Response")],-1),Ut=t("div",{class:"language-json ext-json"},[t("pre",{class:"language-json"},[t("code",null,`{
  "data": {
    "drop_off_points": [
      {
        "location_code": "e9149b66-7bee-439b-bab0-7a5d92ddc519",
        "location_name": "Instabox",
        "cc": "NL",
        "state": null,
        "city": "Hoofddorp",
        "postal_code": "2132WV",
        "street": "Diamantlaan",
        "number": "77",
        "number_suffix": null,
        "phone": null,
        "reference": null,
        "longitude": 4.68156004,
        "latitude": 52.29063034,
        "available_days": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "cut_off_time": "10:00",
        "carrier_id": 5,
        "distance": 2076,
        "occupancy": null,
        "occupancy_today": null,
        "default_drop_off_point": null,
        "opening_hours": null
      }
    ]
  }
}
`)])],-1);function Vt(Gt,Lt){const s=d("AutoLink"),l=d("DataType"),a=d("DetailsExpand");return r(),_("div",null,[h,t("table",null,[t("tbody",null,[p,f,b,y,t("tr",null,[g,m,t("td",null,[n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[x]),_:1})])]),t("tr",null,[v,t("td",null,[n(s,{item:"/api-reference/04.data-types#country_code"},{default:o(()=>[R]),_:1})])]),t("tr",null,[T,t("td",null,[n(s,{item:"/api-reference/04.data-types#carrier"},{default:o(()=>[w]),_:1})])]),t("tr",null,[D,t("td",null,[n(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[q]),_:1})])]),t("tr",null,[A,t("td",null,[n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[N]),_:1})])]),t("tr",null,[E,t("td",null,[n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[C]),_:1})])]),j,k,I,P])]),U,t("p",null,[V,G,L,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[B]),_:1}),H,O,S,J]),t("p",null,[W,K,M,n(s,{item:"/api-reference/04.data-types#country_code"},{default:o(()=>[Q]),_:1}),z,F,X,Y]),t("p",null,[Z,$,tt,n(s,{item:"/api-reference/04.data-types#carrier"},{default:o(()=>[et]),_:1}),nt,ot]),n(l,{type:"carrier",name:"postnl"}),st,n(l,{type:"carrier",name:"instabox"}),lt,n(l,{type:"carrier",name:"ups"}),dt,t("p",null,[at,it,rt,n(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[_t]),_:1}),ct,ut,ht,pt]),t("p",null,[ft,bt,yt,n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[gt]),_:1}),mt,xt,vt,Rt]),t("p",null,[Tt,wt,Dt,n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[qt]),_:1}),At,Nt,Et,Ct]),jt,n(a,{tag:"h4",title:"Get drop off points for 2132JE for Instabox"},{default:o(()=>[kt,It,Pt,Ut]),_:1})])}var Ot=i(u,[["render",Vt],["__file","12.drop-off-points.html.vue"]]);export{Ot as default};
