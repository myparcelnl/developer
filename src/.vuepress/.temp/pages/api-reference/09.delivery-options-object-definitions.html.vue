<template><h1 id="_9-delivery-options-object-definitions" tabindex="-1"><a class="header-anchor" href="#_9-delivery-options-object-definitions" aria-hidden="true">#</a> 9. Delivery options Object Definitions</h1>
<p>If you use the endpoint delivery_options you get two objects. DeliveryOptions
Object and PickupOptions Object. OpeningHours Object contains the opening hours
of pickup locations.</p>
<h2 id="_9-a" tabindex="-1"><a class="header-anchor" href="#_9-a" aria-hidden="true">#</a> 9.A DeliveryOptions Object Definition</h2>
<p>DeliveryOptions Object contains possible delivery options. Besides these options
would also be able to bring the customer has two other choices: <code>only_recipient</code>
and <code>signature</code>. These two options could offer you as long as the address is in
the Netherlands. Morning and Evening delivery types always use <code>only_recipient</code>.</p>
<h3 id="_9-a-1" tabindex="-1"><a class="header-anchor" href="#_9-a-1" aria-hidden="true">#</a> 9.A.1 Overview</h3>
<p><strong>date</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#date">date</AutoLink><br>
Required: n/a.</p>
<p><strong>time</strong><br>
Data type: <ApiLink to="9_D">DeliveryOptionTime</ApiLink><br>
Required: n/a.</p>
<h3 id="_9-a-2" tabindex="-1"><a class="header-anchor" href="#_9-a-2" aria-hidden="true">#</a> 9.A.2 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-01"</span><span class="token punctuation">,</span>
  <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"12:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">1000</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"morning"</span><span class="token punctuation">,</span>
      <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"11:30:00"</span><span class="token punctuation">,</span>
      <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"13:30:00"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
      <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-b" tabindex="-1"><a class="header-anchor" href="#_9-b" aria-hidden="true">#</a> 9.B PickupOptions Object Definition</h2>
<p>PickupOptions Object contains possible PostNL locations.</p>
<h3 id="_9-b-1" tabindex="-1"><a class="header-anchor" href="#_9-b-1" aria-hidden="true">#</a> 9.B.1 Overview</h3>
<p><strong>date</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#date">date</AutoLink><br>
Required: n/a.</p>
<p><strong>time</strong><br>
Data type: <ApiLink to="9_E">PickupOptionTime</ApiLink><br>
Required: n/a.</p>
<p><strong>location</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>street</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>city</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>start_time</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: n/a.</p>
<p><strong>price</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>price_comment</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>comment</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>phone_number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>opening_hours</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>distance</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>latitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: n/a.</p>
<p><strong>longitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: n/a.</p>
<p><strong>location_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<h3 id="_9-b-2" tabindex="-1"><a class="header-anchor" href="#_9-b-2" aria-hidden="true">#</a> 9.B.2 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-01"</span><span class="token punctuation">,</span>
  <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:30:00"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"location"</span><span class="token operator">:</span> <span class="token string">"Staples Office Centre"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Jacobus Spijkerdreef"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132PZ"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
  <span class="token property">"start_time"</span><span class="token operator">:</span> <span class="token string">"08:30:00"</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>
  <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"retailexpress"</span><span class="token punctuation">,</span>
  <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token string">"023-5576310"</span><span class="token punctuation">,</span>
  <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">"Dit is een Business Point. Post en pakketten die u op werkdagen vóór de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag."</span><span class="token punctuation">,</span>
  <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-18:30"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-18:30"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-18:30"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-18:30"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-18:30"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"08:00-17:00"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"1934"</span><span class="token punctuation">,</span>
  <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"52.286582"</span><span class="token punctuation">,</span>
  <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.682377"</span><span class="token punctuation">,</span>
  <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"173187"</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-c" tabindex="-1"><a class="header-anchor" href="#_9-c" aria-hidden="true">#</a> 9.C OpeningHours Object Definition</h2>
<h3 id="_9-c-1" tabindex="-1"><a class="header-anchor" href="#_9-c-1" aria-hidden="true">#</a> 9.C.1 Overview</h3>
<p><strong>monday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>tuesday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>wednesday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>thursday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>friday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>saterday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>sunday</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<h3 id="_9-c-2" tabindex="-1"><a class="header-anchor" href="#_9-c-2" aria-hidden="true">#</a> 9.C.2 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-18:30"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-18:30"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-18:30"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-18:30"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-18:30"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"08:00-17:00"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-d" tabindex="-1"><a class="header-anchor" href="#_9-d" aria-hidden="true">#</a> 9.D DeliveryOptionTime Object Definition</h2>
<h3 id="_9-d-1" tabindex="-1"><a class="header-anchor" href="#_9-d-1" aria-hidden="true">#</a> 9.D.1 Overview</h3>
<p><strong>start</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: n/a.</p>
<p><strong>end</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: n/a.</p>
<p><strong>price</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: n/a.</p>
<p><strong>price_comment</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>comment</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<h3 id="_9-d-2" tabindex="-1"><a class="header-anchor" href="#_9-d-2" aria-hidden="true">#</a> 9.D.2 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"12:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">1000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"morning"</span><span class="token punctuation">,</span>
  <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-e" tabindex="-1"><a class="header-anchor" href="#_9-e" aria-hidden="true">#</a> 9.E PickupOptionTime Object Definition</h2>
<h3 id="_9-e-1" tabindex="-1"><a class="header-anchor" href="#_9-e-1" aria-hidden="true">#</a> 9.E.1 Overview</h3>
<p><strong>start</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: n/a.</p>
<p><strong>type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>price</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: n/a.</p>
<h3 id="_9-e-2" tabindex="-1"><a class="header-anchor" href="#_9-e-2" aria-hidden="true">#</a> 9.E.2 Example</h3>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
