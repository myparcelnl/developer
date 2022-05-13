<template><h1 id="_7-shipment-related-object-definitions" tabindex="-1"><a class="header-anchor" href="#_7-shipment-related-object-definitions" aria-hidden="true">#</a> 7. Shipment related Object Definitions</h1>
<h2 id="_7-a" tabindex="-1"><a class="header-anchor" href="#_7-a" aria-hidden="true">#</a> 7.A Shipment Object Definition</h2>
<h3 id="_7-a-1" tabindex="-1"><a class="header-anchor" href="#_7-a-1" aria-hidden="true">#</a> 7.A.1 Overview</h3>
<p>You can create shipments with this object. You can specify multiple address ids in the recipients column to create multiple shipments. If you want to create a return shipment you have to use the <ApiLink to="7_I">ReturnShipment</ApiLink> object.</p>
<p><strong>barcode</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.<br>
Shipment barcode.</p>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.<br>
Shipment id.</p>
<p><strong>parent_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: no<br>
The parent shipment. This is used for related return shipment.</p>
<p><strong>account_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.<br>
The account id to which this shipment belongs.</p>
<p><strong>shop_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.<br>
The shop id to which this shipment belongs.</p>
<p><strong>reference_identifier</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: No.<br>
Arbitrary reference indentifier to identify this shipment.</p>
<p><strong>shipment_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>recipient</strong><br>
Data type: <ApiLink to="7_B">Address</ApiLink><br>
Required: Yes for application/vnd.shipment+json<br>
The recipient address. Use this field when you want to create a shipment for one address.</p>
<p><strong>recipients</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="7_B">Address</ApiLink> objects<br>
Required: Yes for application/vnd.shipment_recipients+json Use this field when you want to create multiple shipments for multiple addresses.</p>
<p><strong>sender</strong><br>
Data type: <ApiLink to="7_B">Address</ApiLink><br>
Required: n/a.<br>
The sender of the package. This field is never set.</p>
<p><strong>status</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink><br>
Required: no<br>
This is the internal shipment status. What we do is filter and translate the shipment status provided by the carrier in order to reduce the number of statuses.</p>
<p><strong>options</strong><br>
Data type: <ApiLink to="7_C">ShipmentOptions</ApiLink><br>
Required: Yes.<br>
The shipment options.</p>
<p><strong>pickup</strong><br>
Data type: <ApiLink to="7_O">PickupLocation</ApiLink><br>
Required: Yes for options.delivery_type 4.<br>
The pickup location for this shipment.</p>
<p><strong>customs_declaration</strong><br>
Data type: <ApiLink to="7_E">CustomsDeclaration</ApiLink><br>
Required: yes for non-EU shipments.<br>
The customs declaration information.</p>
<p><strong>physical_properties</strong><br>
Data type: <ApiLink to="7_N">PhysicalProperties</ApiLink><br>
Required: yes for non-EU and digital stamp <ApiLink to="6-A_1">shipment types</ApiLink> .<br>
Shipment physical properties such as dimension, weight etc. This object may be updated when fetching shipment status update from the carrier.</p>
<p><strong>carrier</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink><br>
Required: yes.<br>
The carrier that will deliver the package.</p>
<p><strong>general_settings</strong><br>
Data type: <ApiLink to="7_D">ShipmentGeneralSettings</ApiLink><br>
Required: no<br>
You can specify general settings for the shipment with this object.</p>
<p><strong>price</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: n/a.<br>
The shipment price.</p>
<p><strong>secondary_shipments</strong> Data type: an array of <ApiLink to="7_A">shipment</ApiLink><br>
Required: no<br>
You can specify secondary shipments for the shipment with this object. This property is used to create a multi collo shipment: multiple packages to be delivered to the same address at the same time. Secondary shipment can be passed as empty json objects as all required data will be copied from the main shipment. When data is passed with the secondary shipment this data will be used in favor of the main shipment data.</p>
<p><strong>multi_collo_main_shipment_id</strong> Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
In case of a multi collo shipment this field contains the id of the main shipment.</p>
<p><strong>created</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink><br>
Required: n/a.<br>
Date of creation.</p>
<p><strong>modified</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink><br>
Required: n/a.<br>
Date of modification.</p>
<h3 id="_7-a-2" tabindex="-1"><a class="header-anchor" href="#_7-a-2" aria-hidden="true">#</a> 7.A.2 Examples</h3>
<DetailsExpand tag="h4" title="POST example national shipment"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-333-BAR-42"</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
      <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>POST example national shipment b</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-333-BAR-42"</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Amsterdam"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Dorpstraat"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"1020BC"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mrs. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"02012343546"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"info@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"general_settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"save_recipient_address"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"disable_auto_detect_pickup"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"delivery_notification"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"delivery_notification_email"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"printer_id_12"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example national multi collo shipment"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example international shipment"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"さいた-ᚱᚾᛟ/42"</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"JP"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"埼玉県"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"さいたま市"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"埼玉県さいたま市浦和区 常盤9－21－21"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Tanaka san"</span><span class="token punctuation">,</span>
    <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"さいたま国際キリスト教会"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"saitamakyokai@gmail.com"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0081-48-825-6637"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"customs_declaration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"invoice"</span><span class="token operator">:</span> <span class="token string">"1231235345345"</span><span class="token punctuation">,</span>
    <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample Product"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">7000</span><span class="token punctuation">,</span>
          <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
        <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"NL"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample Product 2"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
          <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
        <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"BE"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"physical_properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example pickup location"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
          <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
          <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_date"</span><span class="token operator">:</span> <span class="token string">"2015-07-12 00:00:00"</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BH"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Burgemeester van Stamplein"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"270"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Albert Heijn"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="GET example national shipment A"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
      <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Amsterdam"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Dorpstraat"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"1020BC"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mrs. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"02012343546"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"info@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">535</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">"3SMYPA77773333"</span><span class="token punctuation">,</span>
  <span class="token property">"created"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 08:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"modified"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 09:00:00"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="GET example national shipment B"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Amsterdam"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Dorpstraat"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"1020BC"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mrs. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"02012343546"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"info@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">535</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">"563716278632716817283"</span><span class="token punctuation">,</span>
  <span class="token property">"created"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 08:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"modified"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 09:00:00"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="GET example national multi collo shipment"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"shipment_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mrs. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"MyParcel"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345678"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span><span class="token punctuation">,</span>
  <span class="token property">"transaction_status"</span><span class="token operator">:</span> <span class="token string">"unpaid"</span><span class="token punctuation">,</span>
  <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">595</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
  <span class="token property">"payment_status"</span><span class="token operator">:</span> <span class="token string">"unpaid"</span><span class="token punctuation">,</span>
  <span class="token property">"carrier_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12346</span><span class="token punctuation">,</span>
      <span class="token property">"account_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"shop_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"shipment_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
        <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
        <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
        <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
        <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
        <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Frisby Test"</span><span class="token punctuation">,</span>
        <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"Test1"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"test1@test.nl"</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345678"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">"transaction_status"</span><span class="token operator">:</span> <span class="token string">"unpaid"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">595</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
      <span class="token property">"payment_status"</span><span class="token operator">:</span> <span class="token string">"unpaid"</span><span class="token punctuation">,</span>
      <span class="token property">"carrier_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token number">12345</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-b" tabindex="-1"><a class="header-anchor" href="#_7-b" aria-hidden="true">#</a> 7.B Address Object Definition</h2>
<h3 id="_7-b-1" tabindex="-1"><a class="header-anchor" href="#_7-b-1" aria-hidden="true">#</a> 7.B.1 Overview</h3>
<p>This is the adress object</p>
<p><strong>cc</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink><br>
Required: yes.<br>
The address country code.</p>
<p><strong>region</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no.<br>
The region, department, state or province of the address.</p>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes for NL and EU destinations except for IE.<br>
The address postal code.</p>
<p><strong>city</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes.<br>
The address city.</p>
<p><strong>street</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes.<br>
The address street name. When shipping to an international destination, you may include street number in this field.</p>
<p><strong>street_additional_info</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no.<br>
Additional information for the street that should not be included in the street field.</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes for domestic shipments in NL and BE.<br>
Street number.</p>
<p><strong>number_suffix</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no<br>
Street number suffix.</p>
<p><strong>person</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes.<br>
The person at this address. Up to 40 characters long.</p>
<p><strong>company</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no.<br>
Company name.</p>
<p><strong>email</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no<br>
The address email.</p>
<p><strong>phone</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no.<br>
The address phone.</p>
<h3 id="_7-b-2" tabindex="-1"><a class="header-anchor" href="#_7-b-2" aria-hidden="true">#</a> 7.B.2 Examples</h3>
<DetailsExpand tag="h4" title="Dutch recipient"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Zoetermeer"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Louiarmstrongrode"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"18"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2717NH"</span><span class="token punctuation">,</span>
  <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Pato otap"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0790880808"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"pato@otap.nl"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Street and number in one field"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan 31"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132JE"</span><span class="token punctuation">,</span>
  <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"parcel@myparcel.nl"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="With company"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Zuid-Holland"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
  <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Jan Peter"</span><span class="token punctuation">,</span>
  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"MyParcel B.V."</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"janpeter@bedrijven.nl"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0233030315"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="French recipient"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"FR"</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"Seine"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Paris"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"rue du Grenier-Saint-Lazare 22"</span><span class="token punctuation">,</span>
  <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Claus Stuter"</span><span class="token punctuation">,</span>
  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"Renault"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"claus@paris.nl"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"75008"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0033142723122"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Japanese recipient"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"JP"</span><span class="token punctuation">,</span>
  <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"埼玉県"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"さいたま市"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"埼玉県さいたま市浦和区 常盤9－21－21"</span><span class="token punctuation">,</span>
  <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Tanaka san"</span><span class="token punctuation">,</span>
  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"さいたま国際キリスト教会"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"saitamakyokai@gmail.com"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0081-48-825-6637"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-c" tabindex="-1"><a class="header-anchor" href="#_7-c" aria-hidden="true">#</a> 7.C ShipmentOptions Object Definition</h2>
<h3 id="_7-c-1" tabindex="-1"><a class="header-anchor" href="#_7-c-1" aria-hidden="true">#</a> 7.C.1 Overview</h3>
<p>This object contains the shipment options and is embedded in <ApiLink to="7_A">Shipment</ApiLink> .options and <AutoLink item="#7_I">ReturnShipment</AutoLink> .options.</p>
<p><strong>package_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#package_type">package_type</AutoLink><br>
Required: yes<br>
The package type. For international shipment only <DataType type="package_type" id="1" /> (package) is allowed.</p>
<p><strong>delivery_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#delivery_type">delivery_type</AutoLink><br>
Required: Yes if delivery_date has been specified.<br>
The delivery name for the package.</p>
<p><strong>delivery_date</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink><br>
Required: Yes if delivery name has been specified.<br>
The delivery date time for this shipment.</p>
<p><strong>only_recipient</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
Deliver the package to the recipient only.</p>
<p><strong>signature</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
Package must be signed for.</p>
<p><strong>return</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
Return the package if the recipient is not home.</p>
<p><strong>insurance</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: No.<br>
Insurance price for the package.</p>
<p><strong>large_format</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
Large format package.</p>
<p><strong>cooled_delivery</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
Cooled_delivery is only valid for cc=NL and with shipment_type 1 or 3.</p>
<p><strong>label_description</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: No.<br>
This description will appear on the shipment label. <strong>Note: This will be overridden for return shipment by the following: Retour – 3SMYPAMYPAXXXXXX</strong></p>
<p><strong>age_check</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
The recipient must sign for the package and must be at least 18 years old.</p>
<h3 id="_7-c-2" tabindex="-1"><a class="header-anchor" href="#_7-c-2" aria-hidden="true">#</a> 7.C.2 Example</h3>
<DetailsExpand tag="h4" title="Parcel with only_recipient, signature, return, age_check and €100,– insurance"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
  <span class="token property">"age_check"</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Package with signature and €100,– insurance"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Package with only_recipient, signature, return and €500,– insurance"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Package with only_recipient, signature, and return"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Package with pickup and signature"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">"delivery_date"</span><span class="token operator">:</span> <span class="token string">"2017-01-12 16:30:00"</span><span class="token punctuation">,</span>
  <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-d" tabindex="-1"><a class="header-anchor" href="#_7-d" aria-hidden="true">#</a> 7.D ShipmentGeneralSettings Object Definition</h2>
<h3 id="_7-d-1" tabindex="-1"><a class="header-anchor" href="#_7-d-1" aria-hidden="true">#</a> 7.D.1 Overview</h3>
<p>You can specify shipment general settings with this object. It is embedded in the <ApiLink to="7_A">Shipment</ApiLink> .general_settings column.</p>
<p><strong>save_recipient_address</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No<br>
When this setting is true the recipient address will be saved in the address book. <strong>Only for valid for POST request.</strong></p>
<p><strong>delivery_notification</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
When this setting is true the Merchant will receive an email notification when the package has been delivered.</p>
<p><strong>disable_auto_detect_pickup</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: No.<br>
When this setting is true MyParcel do not auto detect pickup addresses.</p>
<p><strong>delivery_notification_email</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: No.<br>
This email addresses that will receive a delivery notification.</p>
<p><strong>printer_identifier</strong><br>
Data type: <AutoLink item="#printer_identifier">printer_identifier</AutoLink> of <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: No.<br>
In this field you can enter your printer identifier. This field is also sent with the webhook shipment_label_created. You are responsible for controlling your own printer based on a printer identifier.</p>
<h3 id="_7-d-2" tabindex="-1"><a class="header-anchor" href="#_7-d-2" aria-hidden="true">#</a> 7.D.2 Example</h3>
<DetailsExpand tag="h4" title="All options used"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"save_recipient_address"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"disable_auto_detect_pickup"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"delivery_notification"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"delivery_notification_email"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"printer_id_12"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-e" tabindex="-1"><a class="header-anchor" href="#_7-e" aria-hidden="true">#</a> 7.E CustomsDeclaration Object Definition</h2>
<h3 id="_7-e-1" tabindex="-1"><a class="header-anchor" href="#_7-e-1" aria-hidden="true">#</a> 7.E.1 Overview</h3>
<p>This object is embedded in the <ApiLink to="7_A">Shipment</ApiLink> object for global shipments and is mandatory for non-EU shipments.</p>
<p><strong>contents</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#package_contents">package_contents</AutoLink><br>
Required: Yes.<br>
The name of contents in the package.</p>
<p><strong>invoice</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes for <strong>commercial goods, commercial samples</strong> and <strong>return shipment</strong> package contents.<br>
The invoice number for the commercial goods or samples of <strong>package contents</strong> .</p>
<p><strong>weight</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: Yes.<br>
The total weight for all items in whole grams.</p>
<p><strong>items</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="7_F">CustomsItem</ApiLink> objects<br>
Required: Yes.<br>
An <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> containing <ApiLink to="7_F">CustomsItem</ApiLink> objects with description for each item in the package.</p>
<h3 id="_7-e-2" tabindex="-1"><a class="header-anchor" href="#_7-e-2" aria-hidden="true">#</a> 7.E.2 Example</h3>
<DetailsExpand tag="h4" title="POST example A"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"invoice"</span><span class="token operator">:</span> <span class="token string">"1231235345345"</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample Product"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">7000</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
      <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"NL"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample NBG Product"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
      <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"BE"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example B"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">"invoice"</span><span class="token operator">:</span> <span class="token string">"4567789004"</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"NIV Product Audio CD"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
      <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"US"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample JP Product"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">800000</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"YEN"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
      <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"JP"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-f" tabindex="-1"><a class="header-anchor" href="#_7-f" aria-hidden="true">#</a> 7.F CustomsItem Object Definition</h2>
<h3 id="_7-f-1" tabindex="-1"><a class="header-anchor" href="#_7-f-1" aria-hidden="true">#</a> 7.F.1 Overview</h3>
<p>This object contains a declaration for an item in the <ApiLink to="7_E">CustomsDeclaration</ApiLink> object.</p>
<p><strong>description</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The description of the item.</p>
<p><strong>amount</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: Yes.<br>
The amount of this item in the package. The minimum amount is 1.</p>
<p><strong>weight</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: Yes.<br>
The total weight for these items in whole grams. Between 0 and 20000 grams.</p>
<p><strong>item_value</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: Yes.<br>
Item value</p>
<p><strong>classification</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#isic_code">isic_code</AutoLink><br>
Required: Yes.<br>
The International Standard Industry Classification code for this item.</p>
<p><strong>country</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink><br>
Required: Yes.<br>
The country of origin for this item.</p>
<h3 id="_7-f-2" tabindex="-1"><a class="header-anchor" href="#_7-f-2" aria-hidden="true">#</a> 7.F.2 Example</h3>
<DetailsExpand tag="h4" title="POST example A"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample NIV Product"</span><span class="token punctuation">,</span>
  <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">7000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
  <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"NL"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example B"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample NBG Product"</span><span class="token punctuation">,</span>
  <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
  <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"BE"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example C"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"NIV Product Audio CD"</span><span class="token punctuation">,</span>
  <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
  <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"US"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example D"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sample JP Product"</span><span class="token punctuation">,</span>
  <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">"item_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">800000</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"YEN"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"classification"</span><span class="token operator">:</span> <span class="token string">"0181"</span><span class="token punctuation">,</span>
  <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"JP"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-g" tabindex="-1"><a class="header-anchor" href="#_7-g" aria-hidden="true">#</a> 7.G ShipmentIds Object Definition</h2>
<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3>
<p>This object contains an <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="7_H">ShipmentId</ApiLink> objects.</p>
<p><strong>ids</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="7_H">ShipmentId</ApiLink> objects.<br>
Required: n/a.<br>
<AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of <ApiLink to="7_H">ShipmentId</ApiLink> objects.</p>
<h2 id="_7-h" tabindex="-1"><a class="header-anchor" href="#_7-h" aria-hidden="true">#</a> 7.H ShipmentId Object Definition</h2>
<h3 id="overview-1" tabindex="-1"><a class="header-anchor" href="#overview-1" aria-hidden="true">#</a> Overview</h3>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<ApiLink to="7_A">Shipment</ApiLink> .id
<h2 id="_7-i" tabindex="-1"><a class="header-anchor" href="#_7-i" aria-hidden="true">#</a> 7.I ReturnShipment Object Definition</h2>
<h3 id="_7-i-1" tabindex="-1"><a class="header-anchor" href="#_7-i-1" aria-hidden="true">#</a> 7.I.1 Overview</h3>
<p>You can create a return shipment with this object.</p>
<p><strong>shop_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: no.<br>
The shop id to which this shipment belongs.</p>
<p><strong>parent</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: Yes.<br>
The parent shipment that was initially sent to the consumer.</p>
<p><strong>carrier</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink><br>
Required: Yes.<br>
The carrier that will deliver the package.</p>
<p><strong>email</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no.<br>
The email address to send the return shipment email to.</p>
<p><strong>name</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The name to include in the email.</p>
<p><strong>options</strong><br>
Data type: <ApiLink to="7_C">ShipmentOptions</ApiLink><br>
Required: no.<br>
The shipment options. If this is not provided then the default shop return shipment options are used.</p>
<p><strong>general_settings</strong><br>
Data type: <ApiLink to="7_D">ShipmentGeneralSettings</ApiLink><br>
Required: no<br>
You can specify general settings for the shipment with this object. For return shipments only the <AutoLink item="#printer_identifier">printer_identifier</AutoLink> property is accepted.</p>
<h3 id="_7-i-2" tabindex="-1"><a class="header-anchor" href="#_7-i-2" aria-hidden="true">#</a> 7.I.2 Example</h3>
<DetailsExpand tag="h4" title="POST example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
      <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"general_settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"printer_id_12"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-j" tabindex="-1"><a class="header-anchor" href="#_7-j" aria-hidden="true">#</a> 7.J UnrelatedReturnShipment Object Definition</h2>
<h3 id="_7-j-1" tabindex="-1"><a class="header-anchor" href="#_7-j-1" aria-hidden="true">#</a> 7.J.1 Overview</h3>
<p>You can create an unrelated return shipment with this object.</p>
<p><strong>shop_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: No.<br>
The shop id to which this shipment belongs.</p>
<p><strong>carrier</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink><br>
Required: Yes.<br>
The carrier that will deliver the package.</p>
<p><strong>email</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The email to send the return shipment email to.</p>
<p><strong>name</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The name to include in the email.</p>
<p><strong>sender</strong><br>
Data type: <ApiLink to="7_B">Address</ApiLink><br>
Required: No.<br>
The sender where the package comes from.</p>
<p><strong>options</strong><br>
Data type: <ApiLink to="7_C">ShipmentOptions</ApiLink><br>
Required: No.<br>
The shipment options. If this is not provided then the default shop returnshipment options are used.</p>
<p><strong>general_settings</strong><br>
Data type: <ApiLink to="7_D">ShipmentGeneralSettings</ApiLink><br>
Required: no<br>
You can specify general settings for the shipment with this object. For return shipments only the <AutoLink item="#printer_identifier">printer_identifier</AutoLink> property is accepted.</p>
<h3 id="_7-j-2" tabindex="-1"><a class="header-anchor" href="#_7-j-2" aria-hidden="true">#</a> 7.J.2 Example</h3>
<DetailsExpand tag="h4" title="POST example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
  <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Antareslaan"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"31"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132 JE"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"parcel@myparcel.nl"</span><span class="token punctuation">,</span>
    <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span><span class="token punctuation">,</span>
    <span class="token property">"street_additional_info"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"MyParcel B.V."</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0118418888"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
      <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"general_settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"printer_identifier"</span><span class="token operator">:</span> <span class="token string">"printer_id_12"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-k" tabindex="-1"><a class="header-anchor" href="#_7-k" aria-hidden="true">#</a> 7.K DownloadUrl Object Definition</h2>
<h3 id="_7-k-1" tabindex="-1"><a class="header-anchor" href="#_7-k-1" aria-hidden="true">#</a> 7.K.1 Overview</h3>
<p>This is the download url object.</p>
<p><strong>link</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: Yes.<br>
The url to generate an unrelated return shipment</p>
<h3 id="_7-k-2" tabindex="-1"><a class="header-anchor" href="#_7-k-2" aria-hidden="true">#</a> 7.K.2 Example</h3>
<DetailsExpand tag="h4" title="POST example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"link"</span><span class="token operator">:</span> <span class="token string">"https://backoffice.myparcel.nl/retour/8005ebb27d55425c5eaf2dff2fa41147"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-l" tabindex="-1"><a class="header-anchor" href="#_7-l" aria-hidden="true">#</a> 7.L TrackTrace Object Definition</h2>
<h3 id="_7-l-1" tabindex="-1"><a class="header-anchor" href="#_7-l-1" aria-hidden="true">#</a> 7.L.1 Overview</h3>
<p>This is the track &amp; trace object.</p>
<p><strong>shipment_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></p>
<p><strong>code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink></p>
<p><strong>description</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#description">description</AutoLink></p>
<p><strong>time</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink></p>
<p><strong>link_consumer_portal</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
URL for custom track and trace page. More information about this service is found <AutoLink item="https://blog.myparcel.nl/jouw-track-en-trace-pagina">here</AutoLink> . If the consumer portal is turned off, the carrier tracking page is used. You can also pass a language parameter: ?lang=en_GB .</p>
<p><strong>link_tracktrace</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Carrier tracking page</p>
<p><strong>recipient</strong><br>
Data type: <ApiLink to="7_B">Address</ApiLink></p>
<p><strong>sender</strong><br>
Data type: <ApiLink to="7_B">Address</ApiLink></p>
<p><strong>options</strong><br>
Data type: <ApiLink to="7_C">ShipmentOptions</ApiLink></p>
<p><strong>pickup</strong><br>
Data type: <ApiLink to="7_O">PickupLocation</ApiLink></p>
<p><strong>delayed</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Indicates whether the current event code means the shipment has been delayed.</p>
<p><strong>location</strong><br>
Data type: <ApiLink to="7_V">TrackTraceLocation</ApiLink></p>
<p><strong>status</strong><br>
Data type: <ApiLink to="7_S">TrackTraceStatus</ApiLink></p>
<p><strong>history</strong><br>
Data type: <ApiLink to="7_M">TrackTraceHistory</ApiLink></p>
<p><strong>delivery_moment_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Depending on the status of the shipment `expected` or `estimated`</p>
<p><strong>delivery_moment</strong><br>
Data type: <ApiLink to="7_T">DeliveryMoment</ApiLink></p>
<h3 id="_7-l-2" tabindex="-1"><a class="header-anchor" href="#_7-l-2" aria-hidden="true">#</a> 7.L.2 Example</h3>
<DetailsExpand tag="h4" title="GET example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"tracktraces"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"shipment_id"</span><span class="token operator">:</span> <span class="token number">43393092</span><span class="token punctuation">,</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"I01"</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Zending bezorgd"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2019-02-16 15:09:53"</span><span class="token punctuation">,</span>
        <span class="token property">"link_consumer_portal"</span><span class="token operator">:</span> <span class="token string">"https://yoursubomain.myparcel.me/track-trace/3SMYPA126329191/2182KD/NL"</span><span class="token punctuation">,</span>
        <span class="token property">"link_tracktrace"</span><span class="token operator">:</span> <span class="token string">"https://postnl.nl/tracktrace/?B=3SMYPA126329190&amp;P=2182KD&amp;D=NL&amp;T=C&amp;L=NL"</span><span class="token punctuation">,</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2231je"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hillegom"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Brouwerlaan"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span>
          <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Elma Koen"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"sender"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"4337WV"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Middelburg"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Podium"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Tamara Bosman"</span><span class="token punctuation">,</span>
          <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"Skin Jewelry"</span><span class="token punctuation">,</span>
          <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"tamluca@zeelandnet.nl"</span><span class="token punctuation">,</span>
          <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0118418888"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"cooled_delivery"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"age_check"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"delayed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Depot Den Bosch"</span><span class="token punctuation">,</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"S-Hertogenbosch"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"5222AL"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Ketelaarskampweg"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
          <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token number">5.27349901</span><span class="token punctuation">,</span>
          <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token number">51.70326781</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"current"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
          <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"delivered"</span><span class="token punctuation">,</span>
          <span class="token property">"final"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"history"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"delivery_moment_type"</span><span class="token operator">:</span> <span class="token string">"estimated"</span><span class="token punctuation">,</span>
        <span class="token property">"delivery_moment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2019-02-19 17:15:00.000000"</span><span class="token punctuation">,</span>
            <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2019-02-19 19:45:00.000000"</span><span class="token punctuation">,</span>
            <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-m" tabindex="-1"><a class="header-anchor" href="#_7-m" aria-hidden="true">#</a> 7.M TrackTraceHistory Object Definition</h2>
<h3 id="_7-m-1" tabindex="-1"><a class="header-anchor" href="#_7-m-1" aria-hidden="true">#</a> 7.M.1 Overview</h3>
<p>This is the tracktrace history object.</p>
<p><strong>code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>description</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>time</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: n/a.</p>
<p><strong>delayed</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Indicates whether the current event code means the shipment has been delayed.</p>
<p><strong>location</strong><br>
Data type: <ApiLink to="7_V">TrackTraceLocation</ApiLink></p>
<h3 id="_7-m-2" tabindex="-1"><a class="header-anchor" href="#_7-m-2" aria-hidden="true">#</a> 7.M.2 Example</h3>
<DetailsExpand tag="h4" title="GET example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"C3"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"The package is at the sorting center"</span><span class="token punctuation">,</span>
  <span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2015-01-02 05:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"delayed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Depot Den Bosch"</span><span class="token punctuation">,</span>
    <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"S-Hertogenbosch"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"5222AL"</span><span class="token punctuation">,</span>
    <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Ketelaarskampweg"</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
    <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token number">5.27349901</span><span class="token punctuation">,</span>
    <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token number">51.70326781</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-n" tabindex="-1"><a class="header-anchor" href="#_7-n" aria-hidden="true">#</a> 7.N PhysicalProperties Object Definition</h2>
<h3 id="_7-n-1" tabindex="-1"><a class="header-anchor" href="#_7-n-1" aria-hidden="true">#</a> 7.N.1 Overview</h3>
<p>This is the physical properties object, which is required for non-EU and digital stamp shipments. <strong>Note: Weight is the only available property for digital stamps ( <ApiLink to="_6-A_1">package_type</ApiLink> 4)</strong></p>
<p><strong>carrier_height</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>carrier_width</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>carrier_weight</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>carrier_length</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>carrier_volume</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>height</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>width</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>length</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>volume</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>weight</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<h3 id="_7-n-2" tabindex="-1"><a class="header-anchor" href="#_7-n-2" aria-hidden="true">#</a> 7.N.2 Example</h3>
<DetailsExpand tag="h4" title="POST example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-o" tabindex="-1"><a class="header-anchor" href="#_7-o" aria-hidden="true">#</a> 7.O PickupLocation Object Definition</h2>
<h3 id="_7-o-1" tabindex="-1"><a class="header-anchor" href="#_7-o-1" aria-hidden="true">#</a> 7.O.1 Overview</h3>
<p>This is the pickup location object.</p>
<p><strong>city</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>location_name</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>street</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>location_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>retail_network_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<h3 id="_7-o-2" tabindex="-1"><a class="header-anchor" href="#_7-o-2" aria-hidden="true">#</a> 7.O.2 Example</h3>
<DetailsExpand tag="h4" title="POST example for NL pickup location"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BH"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Burgemeester van Stamplein"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"270"</span><span class="token punctuation">,</span>
  <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Albert Heijn"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="POST example for BE pickup location"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"ANTWERPEN"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"HOOGSTRAAT"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"75"</span><span class="token punctuation">,</span>
  <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"BE0Q07"</span><span class="token punctuation">,</span>
  <span class="token property">"retail_network_id"</span><span class="token operator">:</span> <span class="token string">"LD-01"</span><span class="token punctuation">,</span>
  <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"K&amp;J TRADING"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-p" tabindex="-1"><a class="header-anchor" href="#_7-p" aria-hidden="true">#</a> 7.P PaymentInstructions Object Definition</h2>
<h3 id="_7-p-1" tabindex="-1"><a class="header-anchor" href="#_7-p-1" aria-hidden="true">#</a> 7.P.1 Overview</h3>
<p>This is the payment instruction object.</p>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>hash</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>invoices</strong><br>
Data type: <AutoLink item="#">Invoice</AutoLink><br>
Required: n/a.</p>
<p><strong>name</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>notification_hash</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>original_notification_hash</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>payment_url</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>paid</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: n/a.</p>
<p><strong>price</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#price">price</AutoLink><br>
Required: n/a.</p>
<h3 id="_7-p-2" tabindex="-1"><a class="header-anchor" href="#_7-p-2" aria-hidden="true">#</a> 7.P.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"93c8533d3744eaf4a24a119f068019dcfbf97551"</span><span class="token punctuation">,</span>
  <span class="token property">"hash"</span><span class="token operator">:</span> <span class="token string">"93c8533d3744eaf4a24a119f068019dcfbf97551"</span><span class="token punctuation">,</span>
  <span class="token property">"invoices"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1334092</span><span class="token punctuation">,</span>
    <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"111704089216"</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">102</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"notification_hash"</span><span class="token operator">:</span> <span class="token string">"27eecee49d917d9ea2700ef5ccb59d28849a8bf3"</span><span class="token punctuation">,</span>
  <span class="token property">"original_notification_hash"</span><span class="token operator">:</span> <span class="token string">"27eecee49d917d9ea2700ef5ccb59d28849a8bf3"</span><span class="token punctuation">,</span>
  <span class="token property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"https://pay.multisafepay.com/pay/?transaction=25cOdyun01THR2ZpozaR5KfNPPrLCzBSFYq&amp;lang=nl_NL"</span><span class="token punctuation">,</span>
  <span class="token property">"paid"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">911</span><span class="token punctuation">,</span>
    <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-q" tabindex="-1"><a class="header-anchor" href="#_7-q" aria-hidden="true">#</a> 7.Q Invoice Object Definition</h2>
<h3 id="_7-q-1" tabindex="-1"><a class="header-anchor" href="#_7-q-1" aria-hidden="true">#</a> 7.Q.1 Overview</h3>
<p>This is the invoice object.</p>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<p><strong>status</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: n/a.</p>
<h3 id="_7-q-2" tabindex="-1"><a class="header-anchor" href="#_7-q-2" aria-hidden="true">#</a> 7.Q.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1334092</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"111704089216"</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">102</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-r" tabindex="-1"><a class="header-anchor" href="#_7-r" aria-hidden="true">#</a> 7.R ShipmentLabelDownloadLink Object Definition</h2>
<h3 id="_7-r-1" tabindex="-1"><a class="header-anchor" href="#_7-r-1" aria-hidden="true">#</a> 7.R.1 Overview</h3>
<p>This is the shipment label download link object.</p>
<p><strong>url</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: n/a.</p>
<h3 id="_7-r-2" tabindex="-1"><a class="header-anchor" href="#_7-r-2" aria-hidden="true">#</a> 7.R.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-s" tabindex="-1"><a class="header-anchor" href="#_7-s" aria-hidden="true">#</a> 7.S TrackTraceStatus Object Definition</h2>
<h3 id="_7-s-1" tabindex="-1"><a class="header-anchor" href="#_7-s-1" aria-hidden="true">#</a> 7.S.1 Overview</h3>
<p>An object with a current status, main and final.</p>
<p><strong>current</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink></p>
<p><strong>main</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#main">main</AutoLink></p>
<p><strong>final</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
When `true` no new statuses are expected</p>
<h3 id="_7-s-2" tabindex="-1"><a class="header-anchor" href="#_7-s-2" aria-hidden="true">#</a> 7.S.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"current"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"delivered"</span><span class="token punctuation">,</span>
    <span class="token property">"final"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-t" tabindex="-1"><a class="header-anchor" href="#_7-t" aria-hidden="true">#</a> 7.T DeliveryMoment Object Definition</h2>
<h3 id="_7-t-1" tabindex="-1"><a class="header-anchor" href="#_7-t-1" aria-hidden="true">#</a> 7.T.1 Overview</h3>
<p>An object with a start and end DateTime.</p>
<p><strong>start</strong><br>
Data type: <ApiLink to="7_U">DateTimeStartEnd</ApiLink></p>
<p><strong>end</strong><br>
Data type: <ApiLink to="7_U">DateTimeStartEnd</ApiLink></p>
<h3 id="_7-t-2" tabindex="-1"><a class="header-anchor" href="#_7-t-2" aria-hidden="true">#</a> 7.T.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"delivery_moment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2019-02-19 17:15:00.000000"</span><span class="token punctuation">,</span>
      <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2019-02-19 19:45:00.000000"</span><span class="token punctuation">,</span>
      <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-u" tabindex="-1"><a class="header-anchor" href="#_7-u" aria-hidden="true">#</a> 7.U DateTimeStartEnd Object Definition</h2>
<h3 id="_7-u-1" tabindex="-1"><a class="header-anchor" href="#_7-u-1" aria-hidden="true">#</a> 7.U.1 Overview</h3>
<p>An object with a date, timezone_type and timezone.</p>
<p><strong>date</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink></p>
<p><strong>timezone_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></p>
<p><strong>timezone</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink></p>
<h3 id="_7-u-2" tabindex="-1"><a class="header-anchor" href="#_7-u-2" aria-hidden="true">#</a> 7.U.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2019-02-19 17:15:00.000000"</span><span class="token punctuation">,</span>
  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_7-v" tabindex="-1"><a class="header-anchor" href="#_7-v" aria-hidden="true">#</a> 7.V TrackTraceLocation Object Definition</h2>
<h3 id="_7-v-1" tabindex="-1"><a class="header-anchor" href="#_7-v-1" aria-hidden="true">#</a> 7.V.1 Overview</h3>
<p>An object with a location where the track and trace event took place. This data is only available when it has been provided by the carrier of the shipment.</p>
<p><strong>name</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: false</p>
<p><strong>cc</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>city</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>street</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>number_suffix</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
nullable: true</p>
<p><strong>longitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#float">float</AutoLink><br>
nullable: true</p>
<p><strong>latitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#float">float</AutoLink><br>
nullable: true</p>
<h3 id="_7-v-2" tabindex="-1"><a class="header-anchor" href="#_7-v-2" aria-hidden="true">#</a> 7.V.2 Example</h3>
<DetailsExpand tag="h4" title="Example"><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Depot Den Bosch"</span><span class="token punctuation">,</span>
  <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"S-Hertogenbosch"</span><span class="token punctuation">,</span>
  <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"5222AL"</span><span class="token punctuation">,</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Ketelaarskampweg"</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
  <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token number">5.27349901</span><span class="token punctuation">,</span>
  <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token number">51.70326781</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand></template>
