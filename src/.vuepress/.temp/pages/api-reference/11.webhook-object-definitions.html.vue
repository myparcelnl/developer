<template><h1 id="_11-webhook-object-definitions" tabindex="-1"><a class="header-anchor" href="#_11-webhook-object-definitions" aria-hidden="true">#</a> 11. Webhook Object Definitions</h1>
<h2 id="_11-a" tabindex="-1"><a class="header-anchor" href="#_11-a" aria-hidden="true">#</a> 11.A Subscription</h2>
<h3 id="_11-a-1" tabindex="-1"><a class="header-anchor" href="#_11-a-1" aria-hidden="true">#</a> 11.A.1 Overview</h3>
<p>This object contains an event and a callback URL that will receive notifications.</p>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: No.<br>
The id of the webhook subscription.</p>
<p><strong>hook</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink> (<code>shipment_label_created</code> or <code>shipment_status_change</code>)<br>
Required: Yes.<br>
The event from which you want to receive notifications.</p>
<p><strong>url</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The callback URL on which to receive notifications. The URL protocol must be https.</p>
<p><strong>account_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: No.<br>
The ID of the account to which this subscription belongs.</p>
<p><strong>shop_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: No.<br>
The ID of the shop to which this subscription belongs.</p>
<h3 id="_11-a-2" tabindex="-1"><a class="header-anchor" href="#_11-a-2" aria-hidden="true">#</a> 11.A.2 Examples</h3>
<p>POST Example</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"shipment_status_change"</span><span class="token punctuation">,</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://seoshop.nl/myparcel/notifications"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>GET Example</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">79798</span><span class="token punctuation">,</span>
  <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">126594</span><span class="token punctuation">,</span>
  <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">39399</span><span class="token punctuation">,</span>
  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"shipment_status_change"</span><span class="token punctuation">,</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://seoshop.nl/myparcel/notifications"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above is an example of the Webhook Object. However, you receive the following content:</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"webhook_subscriptions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">79798</span><span class="token punctuation">,</span>
        <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">126594</span><span class="token punctuation">,</span>
        <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">39399</span><span class="token punctuation">,</span>
        <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"shipment_status_change"</span><span class="token punctuation">,</span>
        <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://seoshop.nl/myparcel/notifications"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_11-b" tabindex="-1"><a class="header-anchor" href="#_11-b" aria-hidden="true">#</a> 11.B ShipmentStatusChangeEvent</h2>
<h3 id="_11-b-1" tabindex="-1"><a class="header-anchor" href="#_11-b-1" aria-hidden="true">#</a> 11.B.1 Overview</h3>
<p>This object contains the shipment status change event. This object is sent to the callback URL specified in the Subscription object whenever a shipment status changes.</p>
<p><strong>shipment_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
This is the shipment id.</p>
<p><strong>account_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
This is the account id to which the shipment belongs.</p>
<p><strong>shop_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
This is the shop to which the shipment belongs.</p>
<p><strong>status</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink><br>
The shipment status.</p>
<p><strong>barcode</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
This is the shipment barcode.</p>
<h3 id="_11-b-2" tabindex="-1"><a class="header-anchor" href="#_11-b-2" aria-hidden="true">#</a> 11.B.2 Reference</h3>
<p>We send the following headers to your environment:</p>
<table>
<tbody>
<tr>
<td><strong>User-Agent</strong></td>
<td><code>MyParcel/Webhook-Notifier</code></td>
</tr>
<tr>
<td><strong>Content-Type</strong></td>
<td><code>application/json; charset=utf-8</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-Hook</strong></td>
<td><code>shipment_status_change</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-HookId</strong></td>
<td><code>d91e16cbfbcfec0b17cfafb3a9bf3c1b206a9dd0</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-Authorization</strong></td>
<td><code>&lt;Base64 of your api key&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="_11-b-3" tabindex="-1"><a class="header-anchor" href="#_11-b-3" aria-hidden="true">#</a> 11.B.3 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"shipment_id"</span><span class="token operator">:</span> <span class="token string">"25482412"</span><span class="token punctuation">,</span>
  <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">7003</span><span class="token punctuation">,</span>
  <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">1897</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">"3SMYPA749883621"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above is an example of the ShipmentStatusChangeEvent Object. However, the following notification is sent to your callback URL:</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"hooks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"shipment_id"</span><span class="token operator">:</span> <span class="token string">"25482412"</span><span class="token punctuation">,</span>
        <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">7003</span><span class="token punctuation">,</span>
        <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">1897</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">"3SMYPA749883621"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_11-c" tabindex="-1"><a class="header-anchor" href="#_11-c" aria-hidden="true">#</a> 11.C ShipmentLabelCreated</h2>
<h3 id="_11-c-1" tabindex="-1"><a class="header-anchor" href="#_11-c-1" aria-hidden="true">#</a> 11.C.1 Overview</h3>
<p>This object contains the shipment label created event. This object is sent to the callback URL specified in the Subscription object when a label is created asynchronously (for example when <AutoLink item="/api-reference/06.shipments#_6-B_2">creating shipments using accept header application/vnd.shipment_label+json;charset=utf-8</AutoLink> ).</p>
<p><strong>status</strong><br>
Data type: <AutoLink item="#webhook_status">webhook status</AutoLink></p>
<p><strong>shipment_ids</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></p>
<p><strong>printer_identifier</strong><br>
Data type: <AutoLink item="#printer_identifier">printer_identifier</AutoLink></p>
<p><strong>pdf</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
This field contains a URL that leads to a PDF.</p>
<h3 id="_11-c-2" tabindex="-1"><a class="header-anchor" href="#_11-c-2" aria-hidden="true">#</a> 11.C.2 Reference</h3>
<p>We send the following headers to your environment:</p>
<table>
<tbody>
<tr>
<td><strong>User-Agent</strong></td>
<td><code>MyParcel/Webhook-Notifier</code></td>
</tr>
<tr>
<td><strong>Content-Type</strong></td>
<td><code>application/json; charset=utf-8</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-Hook</strong></td>
<td><code>shipment_label_created</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-HookId</strong></td>
<td><code>d91e16cbfbcfec0b17cfafb3a9bf3c1b206a9dd0</code></td>
</tr>
<tr>
<td><strong>X-MyParcel-Authorization</strong></td>
<td><code>&lt;Base64 of your api key&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="_11-c-3" tabindex="-1"><a class="header-anchor" href="#_11-c-3" aria-hidden="true">#</a> 11.C.3 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
  <span class="token property">"shipment_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">15001826</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"YOUR_PRINTER_ID"</span><span class="token punctuation">,</span>
  <span class="token property">"pdf"</span><span class="token operator">:</span> <span class="token string">"https://api.myparcel.nl/pdfs/f569bc5a247fcec09d6a8cba16ff7629ca8062f3"</span>

<span class="token punctuation">}</span>
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"failed"</span><span class="token punctuation">,</span>
  <span class="token property">"shipment_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">15001820</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"pdf"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"reason"</span><span class="token operator">:</span> <span class="token string">"payment required"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above is an example of the ShipmentLabelCreated Object. However, the following notification is sent to your callback URL:</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"hooks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">15001826</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"YOUR_PRINTER_ID"</span><span class="token punctuation">,</span>
        <span class="token property">"pdf"</span><span class="token operator">:</span> <span class="token string">"https://api.myparcel.nl/pdfs/f569bc5a247fcec09d6a8cba16ff7629ca8062f3"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_11-d" tabindex="-1"><a class="header-anchor" href="#_11-d" aria-hidden="true">#</a> 11.D SubscriptionIds</h2>
<p>This object contains an <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="11_D">SubscriptionId</ApiLink> objects.</p>
<p><strong>ids</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="11_D">SubscriptionId</ApiLink> objects.<br>
Required: n/a.<br>
<AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="11_D">SubscriptionId</ApiLink> objects.</p>
<h2 id="_11-e" tabindex="-1"><a class="header-anchor" href="#_11-e" aria-hidden="true">#</a> 11.E SubscriptionId</h2>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.<br>
<AutoLink item="#_11-a">Subscription</AutoLink> .id</p>
</template>
