<template><p>You can use our webhooks to keep track of changes in shipments, labels and your
shop settings in the most efficient way.</p>
<p>Do note that most of our webhooks do not send a lot of data in the payload. They
are more like a notification with a few properties to allow you to decide to
proceed to send another request or not. This is for increased security and to
reduce unnecessary bandwidth usage.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li>Your website must use HTTPS.</li>
</ul>
<h2 id="registering-a-webhook" tabindex="-1"><a class="header-anchor" href="#registering-a-webhook" aria-hidden="true">#</a> Registering a webhook</h2>
<p>Register a webhook by instantiating the <code>WebhookWebService</code> you want, passing
your api key and executing <code>subscribe</code> with the URL you want to receive the
payloads. You can only have one subscription to each webhook.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$service</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>MyParcelNL<span class="token punctuation">\</span>Sdk<span class="token punctuation">\</span>src<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>Web<span class="token punctuation">\</span>Webhook<span class="token punctuation">\</span>ShipmentStatusChangeWebhookWebService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$webhookId</span> <span class="token operator">=</span> <span class="token variable">$service</span>
    <span class="token operator">-></span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'base64-encoded-api-key'</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'https://mywebsite.com/path/to/webhook'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Save $webhookId somewhere safe.</span>
</code></pre></div><Message title="" type="note"><p><code>ShipmentStatusChangeWebhookWebService</code> can be any of the services described
in <AutoLink item="#available-webhooks">Available Webhooks</AutoLink>.</p>
</Message><h2 id="deleting-a-webhook" tabindex="-1"><a class="header-anchor" href="#deleting-a-webhook" aria-hidden="true">#</a> Deleting a webhook</h2>
<p>To delete a webhook, you need to pass your API key and the numeric id you've
received when registering the webhook.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$service</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>MyParcelNL<span class="token punctuation">\</span>Sdk<span class="token punctuation">\</span>src<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>Web<span class="token punctuation">\</span>Webhook<span class="token punctuation">\</span>ShipmentStatusChangeWebhookWebService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$service</span>
    <span class="token operator">-></span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'base64-encoded-api-key'</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token variable">$webhookId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><Message title="" type="tip"><p>In case you lost the ID, you can do an authenticated call
to <code>https://api.myparcel.nl/webhook_subscriptions</code> to retrieve it. You can also
subscribe to the same endpoint again, which will remove the old subscription.</p>
</Message><h2 id="available-webhooks" tabindex="-1"><a class="header-anchor" href="#available-webhooks" aria-hidden="true">#</a> Available webhooks</h2>
<h3 id="shipmentstatuschange" tabindex="-1"><a class="header-anchor" href="#shipmentstatuschange" aria-hidden="true">#</a> ShipmentStatusChange</h3>
<p>Triggered when any shipment's status changes. This is the recommended way to
keep track of shipment statuses.</p>
<p><code>\MyParcelNL\Sdk\src\Services\Web\Webhook\ShipmentStatusChangeWebhookWebService</code></p>
<Message title="" type="tip"><p>More information: <ApiLink to="11_B" /></p>
</Message><h3 id="shipmentlabelcreated" tabindex="-1"><a class="header-anchor" href="#shipmentlabelcreated" aria-hidden="true">#</a> ShipmentLabelCreated</h3>
<p>Triggered when any label is printed/created.</p>
<p><code>\MyParcelNL\Sdk\src\Services\Web\Webhook\ShipmentLabelCreatedWebhookWebService</code></p>
<Message title="" type="tip"><p>More information: <ApiLink to="11_C" /></p>
</Message><h3 id="shopupdated" tabindex="-1"><a class="header-anchor" href="#shopupdated" aria-hidden="true">#</a> ShopUpdated</h3>
<p>Triggered when the shop is updated.</p>
<p><code>\MyParcelNL\Sdk\src\Services\Web\Webhook\ShopUpdatedWebhookWebService</code></p>
<h4 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h4>
<p>Example: After saving the &quot;General Settings&quot; section in the backoffice.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"hooks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"general_settings"</span><span class="token punctuation">,</span>
          <span class="token string">"modified"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"event"</span><span class="token operator">:</span> <span class="token string">"shop_updated"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="shopcarrierconfigurationupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrierconfigurationupdated" aria-hidden="true">#</a> ShopCarrierConfigurationUpdated</h3>
<p><code>\MyParcelNL\Sdk\src\Services\Web\Webhook\ShopCarrierConfigurationUpdatedWebhookWebService</code></p>
<p>Triggered when the carrier configuration in a shop is updated, for example when
a different drop-off point is selected.</p>
<h4 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1" aria-hidden="true">#</a> Response</h4>
<p>Example: After changing the default drop-off time for PostNL from <code>16:00</code>
to <code>16:30</code>.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"hooks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">58585</span><span class="token punctuation">,</span>
        <span class="token property">"event"</span><span class="token operator">:</span> <span class="token string">"shop_carrier_configuration_updated"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="shopcarrieraccessibilityupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrieraccessibilityupdated" aria-hidden="true">#</a> ShopCarrierAccessibilityUpdated</h3>
<p><code>\MyParcelNL\Sdk\src\Services\Web\Webhook\ShopCarrierAccessibilityUpdatedWebhookWebService</code></p>
<h4 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2" aria-hidden="true">#</a> Response</h4>
<p>Example: After disabling a carrier in the backoffice.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
  <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"hooks"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string double-quoted-string">"shop_id"</span><span class="token punctuation">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">"event"</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">"shop_carrier_accessibility_updated"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
