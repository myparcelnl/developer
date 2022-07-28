import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as p,b as t,w as a,e as r,a as e,d as o,r as s}from"./app.033e6678.js";const u={},l=r(`<p>You can use our webhooks to keep track of changes in shipments, labels and your shop settings in the most efficient way.</p><p>Do note that most of our webhooks do not send a lot of data in the payload. They are more like a notification with a few properties to allow you to decide to proceed to send another request or not. This is for increased security and to reduce unnecessary bandwidth usage.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3><ul><li>Your website must use HTTPS.</li></ul><h3 id="registering-a-webhook" tabindex="-1"><a class="header-anchor" href="#registering-a-webhook" aria-hidden="true">#</a> Registering a webhook</h3><p>Register a webhook by instantiating the <code>WebhookWebService</code> you want, passing your api key and executing <code>subscribe</code> with the URL you want to receive the payloads. You can only have one subscription to each webhook.</p><div class="language-php ext-php"><pre class="language-php"><code>$service = new \\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentStatusChangeWebhookWebService();

$webhookId = $service
    -&gt;setApiKey(&#39;base64-encoded-api-key&#39;)
    -&gt;subscribe(&#39;https://mywebsite.com/path/to/webhook&#39;);

// Save $webhookId somewhere safe.
</code></pre></div>`,7),b=e("code",null,"ShipmentStatusChangeWebhookWebService",-1),_=o(" can be any of the services described in "),g=o("Available Webhooks"),k=o("."),f=e("h3",{id:"deleting-a-webhook",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deleting-a-webhook","aria-hidden":"true"},"#"),o(" Deleting a webhook")],-1),v=e("p",null,"To delete a webhook, you need to pass your API key and the numeric id you've received when registering the webhook.",-1),m=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`$service = new \\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentStatusChangeWebhookWebService();

$service
    ->setApiKey('base64-encoded-api-key')
    ->unsubscribe($webhookId);
`)])],-1),w=e("p",null,[o("In case you lost the ID, you can do an authenticated call to "),e("code",null,"https://api.myparcel.nl/webhook_subscriptions"),o(" to retrieve it. You can also subscribe to the same endpoint again, which will remove the old subscription.")],-1),y=e("h3",{id:"available-webhooks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-webhooks","aria-hidden":"true"},"#"),o(" Available webhooks")],-1),S=e("h4",{id:"shipmentstatuschange",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shipmentstatuschange","aria-hidden":"true"},"#"),o(" ShipmentStatusChange")],-1),q=e("p",null,"Triggered when any shipment's status changes. This is the recommended way to keep track of shipment statuses.",-1),W=e("p",null,[e("code",null,"\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentStatusChangeWebhookWebService")],-1),x=o("More information: "),C=e("h4",{id:"shipmentlabelcreated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shipmentlabelcreated","aria-hidden":"true"},"#"),o(" ShipmentLabelCreated")],-1),L=e("p",null,"Triggered when any label is printed/created.",-1),A=e("p",null,[e("code",null,"\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentLabelCreatedWebhookWebService")],-1),N=o("More information: "),M=r(`<h4 id="shopupdated" tabindex="-1"><a class="header-anchor" href="#shopupdated" aria-hidden="true">#</a> ShopUpdated</h4><p>Triggered when the shop is updated.</p><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopUpdatedWebhookWebService</code></p><h5 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h5><p>Example: After saving the &quot;General Settings&quot; section in the backoffice.</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;data&quot;: {
    &quot;hooks&quot;: [
      {
        &quot;shop_id&quot;: 12345,
        &quot;attributes&quot;: [
          &quot;general_settings&quot;,
          &quot;modified&quot;
        ],
        &quot;event&quot;: &quot;shop_updated&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="shopcarrierconfigurationupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrierconfigurationupdated" aria-hidden="true">#</a> ShopCarrierConfigurationUpdated</h4><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopCarrierConfigurationUpdatedWebhookWebService</code></p><p>Triggered when the carrier configuration in a shop is updated, for example when a different drop-off point is selected.</p><h5 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1" aria-hidden="true">#</a> Response</h5><p>Example: After changing the default drop-off time for PostNL from <code>16:00</code> to <code>16:30</code>.</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;data&quot;: {
    &quot;hooks&quot;: [
      {
        &quot;shop_id&quot;: 58585,
        &quot;event&quot;: &quot;shop_carrier_configuration_updated&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="shopcarrieraccessibilityupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrieraccessibilityupdated" aria-hidden="true">#</a> ShopCarrierAccessibilityUpdated</h4><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopCarrierAccessibilityUpdatedWebhookWebService</code></p><h5 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2" aria-hidden="true">#</a> Response</h5><p>Example: After disabling a carrier in the backoffice.</p><div class="language-php ext-php"><pre class="language-php"><code>{
  &quot;data&quot;: {
    &quot;hooks&quot;: [
      {
        &quot;shop_id&quot;: 12345,
        &quot;event&quot;: &quot;shop_carrier_accessibility_updated&quot;
      }
    ]
  }
}
</code></pre></div>`,17);function P(T,U){const d=s("AutoLink"),n=s("Message"),i=s("ApiLink");return c(),p("div",null,[l,t(n,{title:"",type:"note"},{default:a(()=>[e("p",null,[b,_,t(d,{item:"#available-webhooks"},{default:a(()=>[g]),_:1}),k])]),_:1}),f,v,m,t(n,{title:"",type:"tip"},{default:a(()=>[w]),_:1}),y,S,q,W,t(n,{title:"",type:"tip"},{default:a(()=>[e("p",null,[x,t(i,{to:"11_B"})])]),_:1}),C,L,A,t(n,{title:"",type:"tip"},{default:a(()=>[e("p",null,[N,t(i,{to:"11_C"})])]),_:1}),M])}var I=h(u,[["render",P],["__file","13.webhooks.html.vue"]]);export{I as default};
