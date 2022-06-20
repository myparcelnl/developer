import{r as t,f as e,h as s,z as o,w as r,F as l,K as a,e as n,o as c}from"./app.fff2c476.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={},u=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>MyParcelConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">&#39;belgie&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Use this object to enable carriers and override settings per carrier.</span>
    <span class="token literal-property property">carrierSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bpost</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">deliveryDaysWindow</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dpd</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// All settings below can be overridden per carrier via the carrierSettings object</span>

    <span class="token comment">// The price for each option</span>
    <span class="token literal-property property">priceMorningDelivery</span><span class="token operator">:</span> <span class="token number">7.95</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceStandardDelivery</span><span class="token operator">:</span> <span class="token number">5.85</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceSameDayDelivery</span><span class="token operator">:</span> <span class="token number">7.65</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceEveningDelivery</span><span class="token operator">:</span> <span class="token number">6.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceSignature</span><span class="token operator">:</span> <span class="token number">0.35</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceOnlyRecipient</span><span class="token operator">:</span> <span class="token number">0.30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pricePickup</span><span class="token operator">:</span> <span class="token number">5.85</span><span class="token punctuation">,</span>

    <span class="token comment">// Shipment options</span>
    <span class="token literal-property property">allowSaturdayDelivery</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowSignature</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// Other settings</span>
    <span class="token literal-property property">dropOffDays</span><span class="token operator">:</span> <span class="token string">&#39;1;2;3;4;5;6&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cutoffTime</span><span class="token operator">:</span> <span class="token string">&#39;15:00&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deliveryDaysWindow</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dropOffDelay</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">strings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">saturdayDeliveryTitle</span><span class="token operator">:</span> <span class="token string">&#39;Zaterdaglevering&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrongPostalCodeCity</span><span class="token operator">:</span> <span class="token string">&#39;Combinatie postcode/plaats onbekend&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Address strings</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Plaats&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postcode</span><span class="token operator">:</span> <span class="token string">&#39;Postcode&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">houseNumber</span><span class="token operator">:</span> <span class="token string">&#39;Huisnummer&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">addressNotFound</span><span class="token operator">:</span> <span class="token string">&#39;Adresgegevens niet ingevuld&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Delivery moment titles.</span>
    <span class="token comment">// If any of these is not set, the delivery time will be visible instead.</span>
    <span class="token literal-property property">deliveryEveningTitle</span><span class="token operator">:</span> <span class="token string">&#39;Avondlevering&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deliveryMorningTitle</span><span class="token operator">:</span> <span class="token string">&#39;Ochtendlevering&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deliveryStandardTitle</span><span class="token operator">:</span> <span class="token string">&#39;Standaardlevering&#39;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">deliveryTitle</span><span class="token operator">:</span> <span class="token string">&#39;Bezorgen op&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pickupTitle</span><span class="token operator">:</span> <span class="token string">&#39;Afhalen op locatie&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Shipment options</span>
    <span class="token literal-property property">onlyRecipientTitle</span><span class="token operator">:</span> <span class="token string">&#39;Home address only&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">signatureTitle</span><span class="token operator">:</span> <span class="token string">&#39;Handtekening&#39;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">pickUpFrom</span><span class="token operator">:</span> <span class="token string">&#39;Afhalen vanaf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">openingHours</span><span class="token operator">:</span> <span class="token string">&#39;Openingstijden&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Other strings</span>
    <span class="token literal-property property">closed</span><span class="token operator">:</span> <span class="token string">&#39;Gesloten&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;Vanaf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loadMore</span><span class="token operator">:</span> <span class="token string">&#39;Laad meer&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token string">&#39;Opnieuw&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cc</span><span class="token operator">:</span> <span class="token string">&#39;BE&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Antwerpen&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postalCode</span><span class="token operator">:</span> <span class="token string">&#39;2000&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1),y=n("When there is no title set for "),d=s("code",null,"deliveryMorningTitle",-1),m=n(", "),g=s("code",null,"deliveryStandardTitle",-1),v=n(" or "),h=s("code",null,"deliveryEveningTitle",-1),_=n(" , the delivery time will automatically be visible. For more in-depth explanation of each config item and string and an interactive demo please see our "),b=n("sandbox"),f=a(`<p>To get the object with the selected options from the delivery options do the following:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#mypa-input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \`obj\` will be something like this:</span>
<span class="token comment">// {</span>
<span class="token comment">//   &quot;delivery&quot;: &quot;deliver&quot;,</span>
<span class="token comment">//   &quot;deliveryDate&quot;: &quot;8-8-2019&quot;,</span>
<span class="token comment">//   &quot;deliveryMoment&quot;: &quot;standard&quot;,</span>
<span class="token comment">//   &quot;shipmentOptions&quot;: {signature: true, only_recipient: false}</span>
<span class="token comment">// }</span>
</code></pre></div>`,2);function w(q,D){const p=t("AutoLink");return c(),e(l,null,[u,s("p",null,[y,d,m,g,v,h,_,o(p,{item:"https://myparcelnl.github.io/delivery-options/"},{default:r(()=>[b]),_:1})]),f],64)}var j=i(k,[["render",w],["__file","09.options.html.vue"]]);export{j as default};
