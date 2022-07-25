import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as l,a as e,b as o,w as s,e as n,d as t,r}from"./app.e0bc0234.js";const u={},p=n('<h3 id="_10-webhooks" tabindex="-1"><a class="header-anchor" href="#_10-webhooks" aria-hidden="true">#</a> 10. Webhooks</h3><h4 id="_10-a" tabindex="-1"><a class="header-anchor" href="#_10-a" aria-hidden="true">#</a> 10.A Add subscription</h4><h5 id="_10-a-1" tabindex="-1"><a class="header-anchor" href="#_10-a-1" aria-hidden="true">#</a> 10.A.1 Overview</h5><p>Use this endpoint to subscribe to an event in our API. Upon success an HTTP/1.1 200 OK with subscription ids is returned. You must use HTTPS for callback because it&#39;s secure and tamper-proof. You can only have one webhook of each type at a time for a shop so adding the same webhook overwrites any existing one. We always send the webhook to a URL with lowercase characters. Therefore, it is necessary to use lowercase characters in the URL of the webhook call.</p><p>We currently have two available hooks: <code>shipment_status_change</code> and <code>shipment_label_created</code>:</p>',5),_=e("li",null,"shipment_status_change: Whenever the [status] of a shipment changes this webhook will send you an update with the new value. We will not send an update with a status 1.",-1),b=t("shipment_label_created: When a label is created asynchronously (for example when "),g=t("creating shipments using accept header application/vnd.shipment_label+json;charset=utf-8"),m=t(" ) this webhook will send you a message with the url of the label."),f=t("You can test webhooks with "),y=t("Webhook Tester"),w=t(". You can also use the backoffice to update the webhook url."),E=n(`<h5 id="_10-a-2" tabindex="-1"><a class="header-anchor" href="#_10-a-2" aria-hidden="true">#</a> 10.A.2 Reference</h5><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions</td></tr><tr><td>Methods</td><td>POST</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>None.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>array of Subscription objects.</td></tr><tr><td>Response</td><td>HTTP/1.1 200 OK</td></tr><tr><td>Response body</td><td>SubscriptionIds</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h5 id="_10-a-3" tabindex="-1"><a class="header-anchor" href="#_10-a-3" aria-hidden="true">#</a> 10.A.3 Example</h5><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>POST https://api.myparcel.nl/webhook_subscriptions HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Content-Type:application/json; charset=utf-8
{
  &quot;data&quot;: {
    &quot;webhook_subscriptions&quot;: [
      {
        &quot;hook&quot;: &quot;shipment_status_change&quot;,
        &quot;url&quot;: &quot;https://seoshop.nl/myparcel/notifications&quot;
      }
    ]
  }
}
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/1.1 200 OK Content-Type:application/json; charset=utf-8
{
  &quot;data&quot;: {
    &quot;ids&quot;: [
      {
        &quot;id&quot;: 3
      }
    ]
  }
}
</code></pre></div><h4 id="_10-b" tabindex="-1"><a class="header-anchor" href="#_10-b" aria-hidden="true">#</a> 10.B Get subscriptions</h4><h5 id="_10-b-1" tabindex="-1"><a class="header-anchor" href="#_10-b-1" aria-hidden="true">#</a> 10.B.1 Overview</h5>`,9),A=t("Use this endpoint to fetch your active webhook subscriptions. Upon success an HTTP/1.1 200 OK with an "),T=t("array"),q=t(" of "),x=t("Subscription"),k=t(" objects is returned."),v=n('<h5 id="_10-b-2" tabindex="-1"><a class="header-anchor" href="#_10-b-2" aria-hidden="true">#</a> 10.B.2 Reference</h5><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/</td></tr><tr><td>Methods</td><td>GET</td></tr><tr><td rowspan="2">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Response</td><td>HTTP/1.1 201 OK</td></tr><tr><td>Response body</td><td>array of Subscription objects</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h5 id="_10-b-3" tabindex="-1"><a class="header-anchor" href="#_10-b-3" aria-hidden="true">#</a> 10.B.3 Parameters</h5>',3),C=e("strong",null,"id",-1),R=e("br",null,null,-1),P=t(" Data type: "),j=t("integer"),S=e("br",null,null,-1),U=t(" This is the subscription id. You can specify multiple subscription ids by semicolon separating them on the URI."),H=n(`<h5 id="_10-b-4" tabindex="-1"><a class="header-anchor" href="#_10-b-4" aria-hidden="true">#</a> 10.B.4 Example</h5><p><strong>Request</strong></p><div class="language-text ext-text"><pre class="language-text"><code>GET https://api.myparcel.nl/webhook_subscriptions/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
{
  &quot;data&quot;: {
    &quot;webhook_subscriptions&quot;: [
      {
        &quot;id&quot;: 123,
        &quot;hook&quot;: &quot;shipment_status_change&quot;,
        &quot;url&quot;: &quot;https://seoshop.nl/myparcel/notifications&quot;
      }
    ]
  }
}
</code></pre></div><h4 id="_10-c" tabindex="-1"><a class="header-anchor" href="#_10-c" aria-hidden="true">#</a> 10.C Delete subscription</h4><h5 id="_10-c-1" tabindex="-1"><a class="header-anchor" href="#_10-c-1" aria-hidden="true">#</a> 10.C.1 Overview</h5><p>Use this endpoint to delete webhook subscriptions. You can specify multiple subscription ids by semicolon separating them on the URI. Upon delete an <code>&lt;Http code=204 /&gt;</code> is returned.</p><h5 id="_10-c-2" tabindex="-1"><a class="header-anchor" href="#_10-c-2" aria-hidden="true">#</a> 10.C.2 Reference</h5><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/id[;id]</td></tr><tr><td>Methods</td><td>DELETE</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>id = Subscription.id.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>None.</td></tr><tr><td>Response</td><td>HTTP/1.1 204 No Content</td></tr><tr><td>Response body</td><td>None.</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h5 id="_10-c-3" tabindex="-1"><a class="header-anchor" href="#_10-c-3" aria-hidden="true">#</a> 10.C.3 Parameters</h5>`,11),B=e("strong",null,"id",-1),I=e("br",null,null,-1),N=t(" Data type: "),O=t("integer"),Y=t(" .id"),K=e("br",null,null,-1),D=t(" The id of the subscription to delete. You can specify multiple subscriptions by semicolon separating them."),L=n(`<h5 id="_10-c-4" tabindex="-1"><a class="header-anchor" href="#_10-c-4" aria-hidden="true">#</a> 10.C.4 Example</h5><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>DELETE https://api.myparcel.nl/webhook_subscriptions/1 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/1.1 204 No Content
</code></pre></div>`,5);function M(W,z){const a=r("AutoLink"),d=r("Message"),i=r("ApiLink");return c(),l("div",null,[p,e("ul",null,[_,e("li",null,[b,o(a,{item:"/api-reference/06.shipments#_6-B_2"},{default:s(()=>[g]),_:1}),m])]),o(d,{title:"",type:"tip"},{default:s(()=>[e("p",null,[f,o(a,{item:"https://webhook.site/"},{default:s(()=>[y]),_:1}),w])]),_:1}),E,e("p",null,[A,o(a,{item:"/api-reference/04.data-types#array"},{default:s(()=>[T]),_:1}),q,o(i,{to:"11_A"},{default:s(()=>[x]),_:1}),k]),v,e("p",null,[C,R,P,o(a,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[j]),_:1}),S,U]),H,e("p",null,[B,I,N,o(a,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[O]),_:1}),Y,K,D]),L])}var Q=h(u,[["render",M],["__file","10.webhooks.html.vue"]]);export{Q as default};
