import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as d,a as t,b as n,w as o,e as i,d as e,r as a}from"./app.02e2e447.js";const r={},c=i('<h3 id="_9-delivery-options-object-definitions" tabindex="-1"><a class="header-anchor" href="#_9-delivery-options-object-definitions" aria-hidden="true">#</a> 9. Delivery options Object Definitions</h3><p>If you use the endpoint delivery_options you get two objects. DeliveryOptions Object and PickupOptions Object. OpeningHours Object contains the opening hours of pickup locations.</p><h4 id="_9-a" tabindex="-1"><a class="header-anchor" href="#_9-a" aria-hidden="true">#</a> 9.A DeliveryOptions Object Definition</h4><p>DeliveryOptions Object contains possible delivery options. Besides these options would also be able to bring the customer has two other choices: <code>only_recipient</code> and <code>signature</code>. These two options could offer you as long as the address is in the Netherlands. Morning and Evening delivery types always use <code>only_recipient</code>.</p><h5 id="_9-a-1" tabindex="-1"><a class="header-anchor" href="#_9-a-1" aria-hidden="true">#</a> 9.A.1 Overview</h5>',5),h=t("strong",null,"date",-1),q=t("br",null,null,-1),p=e(" Data type: "),y=e("date"),f=t("br",null,null,-1),g=e(" Required: n/a."),b=t("strong",null,"time",-1),m=t("br",null,null,-1),D=e(" Data type: "),R=e("DeliveryOptionTime"),v=t("br",null,null,-1),j=e(" Required: n/a."),x=i(`<h5 id="_9-a-2" tabindex="-1"><a class="header-anchor" href="#_9-a-2" aria-hidden="true">#</a> 9.A.2 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;date&quot;: &quot;2017-02-01&quot;,
  &quot;time&quot;: [
    {
      &quot;start&quot;: &quot;08:00:00&quot;,
      &quot;end&quot;: &quot;12:00:00&quot;,
      &quot;price&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;amount&quot;: 1000
      },
      &quot;price_comment&quot;: &quot;morning&quot;,
      &quot;comment&quot;: &quot;&quot;,
      &quot;type&quot;: 1
    },
    {
      &quot;start&quot;: &quot;11:30:00&quot;,
      &quot;end&quot;: &quot;13:30:00&quot;,
      &quot;price&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;amount&quot;: 0
      },
      &quot;price_comment&quot;: &quot;standard&quot;,
      &quot;comment&quot;: &quot;&quot;,
      &quot;type&quot;: 2
    }
  ]
}
</code></pre></div><h4 id="_9-b" tabindex="-1"><a class="header-anchor" href="#_9-b" aria-hidden="true">#</a> 9.B PickupOptions Object Definition</h4><p>PickupOptions Object contains possible PostNL locations.</p><h5 id="_9-b-1" tabindex="-1"><a class="header-anchor" href="#_9-b-1" aria-hidden="true">#</a> 9.B.1 Overview</h5>`,5),O=t("strong",null,"date",-1),w=t("br",null,null,-1),E=e(" Data type: "),k=e("date"),P=t("br",null,null,-1),B=e(" Required: n/a."),A=t("strong",null,"time",-1),N=t("br",null,null,-1),C=e(" Data type: "),T=e("PickupOptionTime"),U=t("br",null,null,-1),L=e(" Required: n/a."),V=t("strong",null,"location",-1),H=t("br",null,null,-1),S=e(" Data type: "),z=e("string"),I=t("br",null,null,-1),J=e(" Required: n/a."),M=t("strong",null,"street",-1),Z=t("br",null,null,-1),F=e(" Data type: "),G=e("string"),K=t("br",null,null,-1),Q=e(" Required: n/a."),W=t("strong",null,"number",-1),X=t("br",null,null,-1),Y=e(" Data type: "),$=e("string"),tt=t("br",null,null,-1),et=e(" Required: n/a."),nt=t("strong",null,"postal_code",-1),ot=t("br",null,null,-1),st=e(" Data type: "),it=e("string"),ut=t("br",null,null,-1),at=e(" Required: n/a."),_t=t("strong",null,"city",-1),lt=t("br",null,null,-1),dt=e(" Data type: "),rt=e("string"),ct=t("br",null,null,-1),ht=e(" Required: n/a."),qt=t("strong",null,"start_time",-1),pt=t("br",null,null,-1),yt=e(" Data type: "),ft=e("time"),gt=t("br",null,null,-1),bt=e(" Required: n/a."),mt=t("strong",null,"price",-1),Dt=t("br",null,null,-1),Rt=e(" Data type: "),vt=e("integer"),jt=t("br",null,null,-1),xt=e(" Required: n/a."),Ot=t("strong",null,"price_comment",-1),wt=t("br",null,null,-1),Et=e(" Data type: "),kt=e("string"),Pt=t("br",null,null,-1),Bt=e(" Required: n/a."),At=t("strong",null,"comment",-1),Nt=t("br",null,null,-1),Ct=e(" Data type: "),Tt=e("string"),Ut=t("br",null,null,-1),Lt=e(" Required: n/a."),Vt=t("strong",null,"phone_number",-1),Ht=t("br",null,null,-1),St=e(" Data type: "),zt=e("string"),It=t("br",null,null,-1),Jt=e(" Required: n/a."),Mt=t("strong",null,"opening_hours",-1),Zt=t("br",null,null,-1),Ft=e(" Data type: "),Gt=e("string"),Kt=t("br",null,null,-1),Qt=e(" Required: n/a."),Wt=t("strong",null,"distance",-1),Xt=t("br",null,null,-1),Yt=e(" Data type: "),$t=e("string"),te=t("br",null,null,-1),ee=e(" Required: n/a."),ne=t("strong",null,"latitude",-1),oe=t("br",null,null,-1),se=e(" Data type: "),ie=e("coordinates"),ue=t("br",null,null,-1),ae=e(" Required: n/a."),_e=t("strong",null,"longitude",-1),le=t("br",null,null,-1),de=e(" Data type: "),re=e("coordinates"),ce=t("br",null,null,-1),he=e(" Required: n/a."),qe=t("strong",null,"location_code",-1),pe=t("br",null,null,-1),ye=e(" Data type: "),fe=e("string"),ge=t("br",null,null,-1),be=e(" Required: n/a."),me=i(`<h5 id="_9-b-2" tabindex="-1"><a class="header-anchor" href="#_9-b-2" aria-hidden="true">#</a> 9.B.2 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;date&quot;: &quot;2017-02-01&quot;,
  &quot;time&quot;: [
    {
      &quot;start&quot;: &quot;16:00:00&quot;,
      &quot;type&quot;: 4,
      &quot;price&quot;: {
        &quot;amount&quot;: 0,
        &quot;currency&quot;: &quot;EUR&quot;
      }
    },
    {
      &quot;start&quot;: &quot;08:30:00&quot;,
      &quot;type&quot;: 5,
      &quot;price&quot;: {
        &quot;amount&quot;: 125,
        &quot;currency&quot;: &quot;EUR&quot;
      }
    }
  ],
  &quot;location&quot;: &quot;Staples Office Centre&quot;,
  &quot;street&quot;: &quot;Jacobus Spijkerdreef&quot;,
  &quot;number&quot;: &quot;10&quot;,
  &quot;postal_code&quot;: &quot;2132PZ&quot;,
  &quot;city&quot;: &quot;Hoofddorp&quot;,
  &quot;start_time&quot;: &quot;08:30:00&quot;,
  &quot;price&quot;: 125,
  &quot;price_comment&quot;: &quot;retailexpress&quot;,
  &quot;phone_number&quot;: &quot;023-5576310&quot;,
  &quot;comment&quot;: &quot;Dit is een Business Point. Post en pakketten die u op werkdagen v\xF3\xF3r de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag.&quot;,
  &quot;opening_hours&quot;: {
    &quot;monday&quot;: [
      &quot;08:00-18:30&quot;
    ],
    &quot;tuesday&quot;: [
      &quot;08:00-18:30&quot;
    ],
    &quot;wednesday&quot;: [
      &quot;08:00-18:30&quot;
    ],
    &quot;thursday&quot;: [
      &quot;08:00-18:30&quot;
    ],
    &quot;friday&quot;: [
      &quot;08:00-18:30&quot;
    ],
    &quot;saturday&quot;: [
      &quot;08:00-17:00&quot;
    ],
    &quot;sunday&quot;: [ ]
  },
  &quot;distance&quot;: &quot;1934&quot;,
  &quot;latitude&quot;: &quot;52.286582&quot;,
  &quot;longitude&quot;: &quot;4.682377&quot;,
  &quot;location_code&quot;: &quot;173187&quot;
}
</code></pre></div><h4 id="_9-c" tabindex="-1"><a class="header-anchor" href="#_9-c" aria-hidden="true">#</a> 9.C OpeningHours Object Definition</h4><h5 id="_9-c-1" tabindex="-1"><a class="header-anchor" href="#_9-c-1" aria-hidden="true">#</a> 9.C.1 Overview</h5>`,4),De=t("strong",null,"monday",-1),Re=t("br",null,null,-1),ve=e(" Data type: "),je=e("array"),xe=e(" of "),Oe=e("string"),we=t("br",null,null,-1),Ee=e(" Required: n/a."),ke=t("strong",null,"tuesday",-1),Pe=t("br",null,null,-1),Be=e(" Data type: "),Ae=e("array"),Ne=e(" of "),Ce=e("string"),Te=t("br",null,null,-1),Ue=e(" Required: n/a."),Le=t("strong",null,"wednesday",-1),Ve=t("br",null,null,-1),He=e(" Data type: "),Se=e("array"),ze=e(" of "),Ie=e("string"),Je=t("br",null,null,-1),Me=e(" Required: n/a."),Ze=t("strong",null,"thursday",-1),Fe=t("br",null,null,-1),Ge=e(" Data type: "),Ke=e("array"),Qe=e(" of "),We=e("string"),Xe=t("br",null,null,-1),Ye=e(" Required: n/a."),$e=t("strong",null,"friday",-1),tn=t("br",null,null,-1),en=e(" Data type: "),nn=e("array"),on=e(" of "),sn=e("string"),un=t("br",null,null,-1),an=e(" Required: n/a."),_n=t("strong",null,"saterday",-1),ln=t("br",null,null,-1),dn=e(" Data type: "),rn=e("array"),cn=e(" of "),hn=e("string"),qn=t("br",null,null,-1),pn=e(" Required: n/a."),yn=t("strong",null,"sunday",-1),fn=t("br",null,null,-1),gn=e(" Data type: "),bn=e("array"),mn=e(" of "),Dn=e("string"),Rn=t("br",null,null,-1),vn=e(" Required: n/a."),jn=i(`<h5 id="_9-c-2" tabindex="-1"><a class="header-anchor" href="#_9-c-2" aria-hidden="true">#</a> 9.C.2 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;monday&quot;: [
    &quot;08:00-18:30&quot;
  ],
  &quot;tuesday&quot;: [
    &quot;08:00-18:30&quot;
  ],
  &quot;wednesday&quot;: [
    &quot;08:00-18:30&quot;
  ],
  &quot;thursday&quot;: [
    &quot;08:00-18:30&quot;
  ],
  &quot;friday&quot;: [
    &quot;08:00-18:30&quot;
  ],
  &quot;saturday&quot;: [
    &quot;08:00-17:00&quot;
  ],
  &quot;sunday&quot;: [ ]
}
</code></pre></div><h4 id="_9-d" tabindex="-1"><a class="header-anchor" href="#_9-d" aria-hidden="true">#</a> 9.D DeliveryOptionTime Object Definition</h4><h5 id="_9-d-1" tabindex="-1"><a class="header-anchor" href="#_9-d-1" aria-hidden="true">#</a> 9.D.1 Overview</h5>`,4),xn=t("strong",null,"start",-1),On=t("br",null,null,-1),wn=e(" Data type: "),En=e("time"),kn=t("br",null,null,-1),Pn=e(" Required: n/a."),Bn=t("strong",null,"end",-1),An=t("br",null,null,-1),Nn=e(" Data type: "),Cn=e("time"),Tn=t("br",null,null,-1),Un=e(" Required: n/a."),Ln=t("strong",null,"price",-1),Vn=t("br",null,null,-1),Hn=e(" Data type: "),Sn=e("price"),zn=t("br",null,null,-1),In=e(" Required: n/a."),Jn=t("strong",null,"price_comment",-1),Mn=t("br",null,null,-1),Zn=e(" Data type: "),Fn=e("string"),Gn=t("br",null,null,-1),Kn=e(" Required: n/a."),Qn=t("strong",null,"comment",-1),Wn=t("br",null,null,-1),Xn=e(" Data type: "),Yn=e("string"),$n=t("br",null,null,-1),to=e(" Required: n/a."),eo=t("strong",null,"type",-1),no=t("br",null,null,-1),oo=e(" Data type: "),so=e("integer"),io=t("br",null,null,-1),uo=e(" Required: n/a."),ao=i(`<h5 id="_9-d-2" tabindex="-1"><a class="header-anchor" href="#_9-d-2" aria-hidden="true">#</a> 9.D.2 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;start&quot;: &quot;08:00:00&quot;,
  &quot;end&quot;: &quot;12:00:00&quot;,
  &quot;price&quot;: {
    &quot;currency&quot;: &quot;EUR&quot;,
    &quot;amount&quot;: 1000
  },
  &quot;price_comment&quot;: &quot;morning&quot;,
  &quot;comment&quot;: &quot;&quot;,
  &quot;type&quot;: 1
}
</code></pre></div><h4 id="_9-e" tabindex="-1"><a class="header-anchor" href="#_9-e" aria-hidden="true">#</a> 9.E PickupOptionTime Object Definition</h4><h5 id="_9-e-1" tabindex="-1"><a class="header-anchor" href="#_9-e-1" aria-hidden="true">#</a> 9.E.1 Overview</h5>`,4),_o=t("strong",null,"start",-1),lo=t("br",null,null,-1),ro=e(" Data type: "),co=e("time"),ho=t("br",null,null,-1),qo=e(" Required: n/a."),po=t("strong",null,"type",-1),yo=t("br",null,null,-1),fo=e(" Data type: "),go=e("integer"),bo=t("br",null,null,-1),mo=e(" Required: n/a."),Do=t("strong",null,"price",-1),Ro=t("br",null,null,-1),vo=e(" Data type: "),jo=e("price"),xo=t("br",null,null,-1),Oo=e(" Required: n/a."),wo=t("h5",{id:"_9-e-2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_9-e-2","aria-hidden":"true"},"#"),e(" 9.E.2 Example")],-1),Eo=t("div",{class:"language-json ext-json"},[t("pre",{class:"language-json"},[t("code",null,`{
  "start": "16:00:00",
  "type": 4,
  "price": {
    "amount": 0,
    "currency": "EUR"
  }
}
`)])],-1);function ko(Po,Bo){const s=a("AutoLink"),u=a("ApiLink");return l(),d("div",null,[c,t("p",null,[h,q,p,n(s,{item:"/api-reference/04.data-types#date"},{default:o(()=>[y]),_:1}),f,g]),t("p",null,[b,m,D,n(u,{to:"9_D"},{default:o(()=>[R]),_:1}),v,j]),x,t("p",null,[O,w,E,n(s,{item:"/api-reference/04.data-types#date"},{default:o(()=>[k]),_:1}),P,B]),t("p",null,[A,N,C,n(u,{to:"9_E"},{default:o(()=>[T]),_:1}),U,L]),t("p",null,[V,H,S,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[z]),_:1}),I,J]),t("p",null,[M,Z,F,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[G]),_:1}),K,Q]),t("p",null,[W,X,Y,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[$]),_:1}),tt,et]),t("p",null,[nt,ot,st,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[it]),_:1}),ut,at]),t("p",null,[_t,lt,dt,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[rt]),_:1}),ct,ht]),t("p",null,[qt,pt,yt,n(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[ft]),_:1}),gt,bt]),t("p",null,[mt,Dt,Rt,n(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[vt]),_:1}),jt,xt]),t("p",null,[Ot,wt,Et,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[kt]),_:1}),Pt,Bt]),t("p",null,[At,Nt,Ct,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Tt]),_:1}),Ut,Lt]),t("p",null,[Vt,Ht,St,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[zt]),_:1}),It,Jt]),t("p",null,[Mt,Zt,Ft,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Gt]),_:1}),Kt,Qt]),t("p",null,[Wt,Xt,Yt,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[$t]),_:1}),te,ee]),t("p",null,[ne,oe,se,n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[ie]),_:1}),ue,ae]),t("p",null,[_e,le,de,n(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[re]),_:1}),ce,he]),t("p",null,[qe,pe,ye,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[fe]),_:1}),ge,be]),me,t("p",null,[De,Re,ve,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[je]),_:1}),xe,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Oe]),_:1}),we,Ee]),t("p",null,[ke,Pe,Be,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[Ae]),_:1}),Ne,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Ce]),_:1}),Te,Ue]),t("p",null,[Le,Ve,He,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[Se]),_:1}),ze,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Ie]),_:1}),Je,Me]),t("p",null,[Ze,Fe,Ge,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[Ke]),_:1}),Qe,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[We]),_:1}),Xe,Ye]),t("p",null,[$e,tn,en,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[nn]),_:1}),on,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[sn]),_:1}),un,an]),t("p",null,[_n,ln,dn,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[rn]),_:1}),cn,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[hn]),_:1}),qn,pn]),t("p",null,[yn,fn,gn,n(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[bn]),_:1}),mn,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Dn]),_:1}),Rn,vn]),jn,t("p",null,[xn,On,wn,n(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[En]),_:1}),kn,Pn]),t("p",null,[Bn,An,Nn,n(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[Cn]),_:1}),Tn,Un]),t("p",null,[Ln,Vn,Hn,n(s,{item:"/api-reference/04.data-types#price"},{default:o(()=>[Sn]),_:1}),zn,In]),t("p",null,[Jn,Mn,Zn,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Fn]),_:1}),Gn,Kn]),t("p",null,[Qn,Wn,Xn,n(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Yn]),_:1}),$n,to]),t("p",null,[eo,no,oo,n(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[so]),_:1}),io,uo]),ao,t("p",null,[_o,lo,ro,n(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[co]),_:1}),ho,qo]),t("p",null,[po,yo,fo,n(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[go]),_:1}),bo,mo]),t("p",null,[Do,Ro,vo,n(s,{item:"/api-reference/04.data-types#price"},{default:o(()=>[jo]),_:1}),xo,Oo]),wo,Eo])}var Co=_(r,[["render",ko],["__file","09.delivery-options-object-definitions.html.vue"]]);export{Co as default};
