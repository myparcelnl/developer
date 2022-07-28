import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as _,c as l,a as t,b as o,w as n,e as i,d as e,r as d}from"./app.02e2e447.js";const r={},h=i('<h3 id="_11-webhook-object-definitions" tabindex="-1"><a class="header-anchor" href="#_11-webhook-object-definitions" aria-hidden="true">#</a> 11. Webhook Object Definitions</h3><h4 id="_11-a" tabindex="-1"><a class="header-anchor" href="#_11-a" aria-hidden="true">#</a> 11.A Subscription</h4><h5 id="_11-a-1" tabindex="-1"><a class="header-anchor" href="#_11-a-1" aria-hidden="true">#</a> 11.A.1 Overview</h5><p>This object contains an event and a callback URL that will receive notifications.</p>',4),u=t("strong",null,"id",-1),p=t("br",null,null,-1),b=e(" Data type: "),f=e("integer"),q=t("br",null,null,-1),g=e(" Required: No."),m=t("br",null,null,-1),y=e(" The id of the webhook subscription."),j=t("strong",null,"hook",-1),v=t("br",null,null,-1),k=e(" Data type: "),x=e("string"),w=e(" ("),T=t("code",null,"shipment_label_created",-1),D=e(" or "),R=t("code",null,"shipment_status_change",-1),S=e(")"),P=t("br",null,null,-1),A=e(" Required: Yes."),I=t("br",null,null,-1),L=e(" The event from which you want to receive notifications."),U=t("strong",null,"url",-1),C=t("br",null,null,-1),E=e(" Data type: "),N=e("string"),O=t("br",null,null,-1),B=e(" Required: Yes."),M=t("br",null,null,-1),H=e(" The callback URL on which to receive notifications. The URL protocol must be https."),W=t("strong",null,"account_id",-1),X=t("br",null,null,-1),Y=e(" Data type: "),V=e("integer"),z=t("br",null,null,-1),F=e(" Required: No."),G=t("br",null,null,-1),J=e(" The ID of the account to which this subscription belongs."),K=t("strong",null,"shop_id",-1),Q=t("br",null,null,-1),Z=e(" Data type: "),$=e("integer"),tt=t("br",null,null,-1),et=e(" Required: No."),ot=t("br",null,null,-1),nt=e(" The ID of the shop to which this subscription belongs."),st=i(`<h5 id="_11-a-2" tabindex="-1"><a class="header-anchor" href="#_11-a-2" aria-hidden="true">#</a> 11.A.2 Examples</h5><p>POST Example</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;hook&quot;: &quot;shipment_status_change&quot;,
  &quot;url&quot;: &quot;https://seoshop.nl/myparcel/notifications&quot;
}
</code></pre></div><p>GET Example</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;id&quot;: 79798,
  &quot;account_id&quot;: 126594,
  &quot;shop_id&quot;: 39399,
  &quot;hook&quot;: &quot;shipment_status_change&quot;,
  &quot;URL&quot;: &quot;https://seoshop.nl/myparcel/notifications&quot;
}
</code></pre></div><p>The above is an example of the Webhook Object. However, you receive the following content:</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;data&quot;: {
    &quot;webhook_subscriptions&quot;: [
      {
        &quot;id&quot;: 79798,
        &quot;account_id&quot;: 126594,
        &quot;shop_id&quot;: 39399,
        &quot;hook&quot;: &quot;shipment_status_change&quot;,
        &quot;url&quot;: &quot;https://seoshop.nl/myparcel/notifications&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="_11-b" tabindex="-1"><a class="header-anchor" href="#_11-b" aria-hidden="true">#</a> 11.B ShipmentStatusChangeEvent</h4><h5 id="_11-b-1" tabindex="-1"><a class="header-anchor" href="#_11-b-1" aria-hidden="true">#</a> 11.B.1 Overview</h5><p>This object contains the shipment status change event. This object is sent to the callback URL specified in the Subscription object whenever a shipment status changes.</p>`,10),it=t("strong",null,"shipment_id",-1),at=t("br",null,null,-1),dt=e(" Data type: "),ct=e("string"),_t=t("br",null,null,-1),lt=e(" This is the shipment id."),rt=t("strong",null,"account_id",-1),ht=t("br",null,null,-1),ut=e(" Data type: "),pt=e("integer"),bt=t("br",null,null,-1),ft=e(" This is the account id to which the shipment belongs."),qt=t("strong",null,"shop_id",-1),gt=t("br",null,null,-1),mt=e(" Data type: "),yt=e("integer"),jt=t("br",null,null,-1),vt=e(" This is the shop to which the shipment belongs."),kt=t("strong",null,"status",-1),xt=t("br",null,null,-1),wt=e(" Data type: "),Tt=e("shipment_status"),Dt=t("br",null,null,-1),Rt=e(" The shipment status."),St=t("strong",null,"barcode",-1),Pt=t("br",null,null,-1),At=e(" Data type: "),It=e("string"),Lt=t("br",null,null,-1),Ut=e(" This is the shipment barcode."),Ct=i(`<h5 id="_11-b-2" tabindex="-1"><a class="header-anchor" href="#_11-b-2" aria-hidden="true">#</a> 11.B.2 Reference</h5><p>We send the following headers to your environment:</p><table><tbody><tr><td><strong>User-Agent</strong></td><td><code>MyParcel/Webhook-Notifier</code></td></tr><tr><td><strong>Content-Type</strong></td><td><code>application/json; charset=utf-8</code></td></tr><tr><td><strong>X-MyParcel-Hook</strong></td><td><code>shipment_status_change</code></td></tr><tr><td><strong>X-MyParcel-HookId</strong></td><td><code>d91e16cbfbcfec0b17cfafb3a9bf3c1b206a9dd0</code></td></tr><tr><td><strong>X-MyParcel-Authorization</strong></td><td><code>&lt;Base64 of your API key&gt;</code></td></tr></tbody></table><h5 id="_11-b-3" tabindex="-1"><a class="header-anchor" href="#_11-b-3" aria-hidden="true">#</a> 11.B.3 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;shipment_id&quot;: &quot;25482412&quot;,
  &quot;account_id&quot;: 7003,
  &quot;shop_id&quot;: 1897,
  &quot;status&quot;: 2,
  &quot;barcode&quot;: &quot;3SMYPA749883621&quot;
}
</code></pre></div><p>The above is an example of the ShipmentStatusChangeEvent Object. However, the following notification is sent to your callback URL:</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;data&quot;: {
    &quot;hooks&quot;: [
      {
        &quot;shipment_id&quot;: &quot;25482412&quot;,
        &quot;account_id&quot;: 7003,
        &quot;shop_id&quot;: 1897,
        &quot;status&quot;: 2,
        &quot;barcode&quot;: &quot;3SMYPA749883621&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="_11-c" tabindex="-1"><a class="header-anchor" href="#_11-c" aria-hidden="true">#</a> 11.C ShipmentLabelCreated</h4><h5 id="_11-c-1" tabindex="-1"><a class="header-anchor" href="#_11-c-1" aria-hidden="true">#</a> 11.C.1 Overview</h5>`,9),Et=e("This object contains the shipment label created event. This object is sent to the callback URL specified in the Subscription object when a label is created asynchronously (for example when "),Nt=e("creating shipments using accept header application/vnd.shipment_label+json;charset=utf-8"),Ot=e(" )."),Bt=t("strong",null,"status",-1),Mt=t("br",null,null,-1),Ht=e(" Data type: "),Wt=e("webhook status"),Xt=t("strong",null,"shipment_ids",-1),Yt=t("br",null,null,-1),Vt=e(" Data type: "),zt=e("array"),Ft=e(" of "),Gt=e("integer"),Jt=t("strong",null,"printer_identifier",-1),Kt=t("br",null,null,-1),Qt=e(" Data type: "),Zt=e("printer_identifier"),$t=t("strong",null,"pdf",-1),te=t("br",null,null,-1),ee=e(" Data type: "),oe=e("string"),ne=t("br",null,null,-1),se=e(" This field contains a URL that leads to a PDF."),ie=i(`<h5 id="_11-c-2" tabindex="-1"><a class="header-anchor" href="#_11-c-2" aria-hidden="true">#</a> 11.C.2 Reference</h5><p>We send the following headers to your environment:</p><table><tbody><tr><td><strong>User-Agent</strong></td><td><code>MyParcel/Webhook-Notifier</code></td></tr><tr><td><strong>Content-Type</strong></td><td><code>application/json; charset=utf-8</code></td></tr><tr><td><strong>X-MyParcel-Hook</strong></td><td><code>shipment_label_created</code></td></tr><tr><td><strong>X-MyParcel-HookId</strong></td><td><code>d91e16cbfbcfec0b17cfafb3a9bf3c1b206a9dd0</code></td></tr><tr><td><strong>X-MyParcel-Authorization</strong></td><td><code>&lt;Base64 of your API key&gt;</code></td></tr></tbody></table><h5 id="_11-c-3" tabindex="-1"><a class="header-anchor" href="#_11-c-3" aria-hidden="true">#</a> 11.C.3 Example</h5><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;status&quot;: &quot;success&quot;,
  &quot;shipment_ids&quot;: [
    15001826
  ],
  &quot;printer_identifier&quot;: &quot;YOUR_PRINTER_ID&quot;,
  &quot;pdf&quot;: &quot;https://api.myparcel.nl/pdfs/f569bc5a247fcec09d6a8cba16ff7629ca8062f3&quot;

}
</code></pre></div><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;status&quot;: &quot;failed&quot;,
  &quot;shipment_ids&quot;: [
    15001820
  ],
  &quot;printer_identifier&quot;: &quot;&quot;,
  &quot;pdf&quot;: &quot;&quot;,
  &quot;reason&quot;: &quot;payment required&quot;
}
</code></pre></div><p>The above is an example of the ShipmentLabelCreated Object. However, the following notification is sent to your callback URL:</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;data&quot;: {
    &quot;hooks&quot;: [
      {
        &quot;status&quot;: &quot;success&quot;,
        &quot;shipment_ids&quot;: [
          15001826
        ],
        &quot;printer_identifier&quot;: &quot;YOUR_PRINTER_ID&quot;,
        &quot;pdf&quot;: &quot;https://api.myparcel.nl/pdfs/f569bc5a247fcec09d6a8cba16ff7629ca8062f3&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="_11-d" tabindex="-1"><a class="header-anchor" href="#_11-d" aria-hidden="true">#</a> 11.D SubscriptionIds</h4>`,9),ae=e("This object contains an "),de=e("array"),ce=e(" of "),_e=e("SubscriptionId"),le=e(" objects."),re=t("strong",null,"ids",-1),he=t("br",null,null,-1),ue=e(" Data type: "),pe=e("array"),be=e(" of "),fe=e("SubscriptionId"),qe=e(" objects."),ge=t("br",null,null,-1),me=e(" Required: n/a."),ye=t("br",null,null,-1),je=e("array"),ve=e(" of "),ke=e("SubscriptionId"),xe=e(" objects."),we=t("h4",{id:"_11-e",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_11-e","aria-hidden":"true"},"#"),e(" 11.E SubscriptionId")],-1),Te=t("strong",null,"id",-1),De=t("br",null,null,-1),Re=e(" Data type: "),Se=e("integer"),Pe=t("br",null,null,-1),Ae=e(" Required: n/a."),Ie=t("br",null,null,-1),Le=e("Subscription"),Ue=e(" .id");function Ce(Ee,Ne){const s=d("AutoLink"),a=d("ApiLink");return _(),l("div",null,[h,t("p",null,[u,p,b,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[f]),_:1}),q,g,m,y]),t("p",null,[j,v,k,o(s,{item:"/api-reference/04.data-types#string"},{default:n(()=>[x]),_:1}),w,T,D,R,S,P,A,I,L]),t("p",null,[U,C,E,o(s,{item:"/api-reference/04.data-types#string"},{default:n(()=>[N]),_:1}),O,B,M,H]),t("p",null,[W,X,Y,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[V]),_:1}),z,F,G,J]),t("p",null,[K,Q,Z,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[$]),_:1}),tt,et,ot,nt]),st,t("p",null,[it,at,dt,o(s,{item:"/api-reference/04.data-types#string"},{default:n(()=>[ct]),_:1}),_t,lt]),t("p",null,[rt,ht,ut,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[pt]),_:1}),bt,ft]),t("p",null,[qt,gt,mt,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[yt]),_:1}),jt,vt]),t("p",null,[kt,xt,wt,o(s,{item:"/api-reference/04.data-types#shipment_status"},{default:n(()=>[Tt]),_:1}),Dt,Rt]),t("p",null,[St,Pt,At,o(s,{item:"/api-reference/04.data-types#string"},{default:n(()=>[It]),_:1}),Lt,Ut]),Ct,t("p",null,[Et,o(s,{item:"/api-reference/06.shipments#_6-B_2"},{default:n(()=>[Nt]),_:1}),Ot]),t("p",null,[Bt,Mt,Ht,o(s,{item:"#webhook_status"},{default:n(()=>[Wt]),_:1})]),t("p",null,[Xt,Yt,Vt,o(s,{item:"/api-reference/04.data-types#array"},{default:n(()=>[zt]),_:1}),Ft,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[Gt]),_:1})]),t("p",null,[Jt,Kt,Qt,o(s,{item:"#printer_identifier"},{default:n(()=>[Zt]),_:1})]),t("p",null,[$t,te,ee,o(s,{item:"/api-reference/04.data-types#string"},{default:n(()=>[oe]),_:1}),ne,se]),ie,t("p",null,[ae,o(s,{item:"/api-reference/04.data-types#array"},{default:n(()=>[de]),_:1}),ce,o(a,{to:"11_D"},{default:n(()=>[_e]),_:1}),le]),t("p",null,[re,he,ue,o(s,{item:"/api-reference/04.data-types#array"},{default:n(()=>[pe]),_:1}),be,o(a,{to:"11_D"},{default:n(()=>[fe]),_:1}),qe,ge,me,ye,o(s,{item:"/api-reference/04.data-types#array"},{default:n(()=>[je]),_:1}),ve,o(a,{to:"11_D"},{default:n(()=>[ke]),_:1}),xe]),we,t("p",null,[Te,De,Re,o(s,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[Se]),_:1}),Pe,Ae,Ie,o(s,{item:"#_11-a"},{default:n(()=>[Le]),_:1}),Ue])])}var Me=c(r,[["render",Ce],["__file","11.webhook-object-definitions.html.vue"]]);export{Me as default};
