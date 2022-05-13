<template><h1 id="_6-shipments" tabindex="-1"><a class="header-anchor" href="#_6-shipments" aria-hidden="true">#</a> 6. Shipments</h1>
<p>We'll start the shipment section with the different shipment option combinations
available in MyParcel. It is highly recommended that you read this first as this
section helps you understand what all the shipment options are and which
combinations are possible. We will not list every possible combination since
there are too many to list. We will look at the different package types and then
look at the different options available to them. Then we bring all of it
together with some examples.</p>
<p><AutoLink item="https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman"></AutoLink></p>
<h2 id="_6-a" tabindex="-1"><a class="header-anchor" href="#_6-a" aria-hidden="true">#</a> 6.A Shipment option combinations</h2>
<h3 id="_6-a-1" tabindex="-1"><a class="header-anchor" href="#_6-a-1" aria-hidden="true">#</a> 6.A.1 Package types</h3>
<p>There are four different packages types available and determine the name of
shipment. The value is sent with
the <ApiLink to="7_C">ShipmentOptions</ApiLink>
.package_type
field.</p>
<h4 id="_1-package" tabindex="-1"><a class="header-anchor" href="#_1-package" aria-hidden="true">#</a> 1. Package</h4>
<p>This is the standard package type used for NL, EU and Global shipments. It
supports a variety of additional options such as insurance, xl format etc. We
will look at these options in more detail later. This package is most commonly
used when creating shipments.</p>
<h4 id="_2-mailbox-package" tabindex="-1"><a class="header-anchor" href="#_2-mailbox-package" aria-hidden="true">#</a> 2. Mailbox package</h4>
<p>This package type is only available on <DataType type="platform" id="1" />
and <DataType type="platform" id="3" /> for NL shipments that fit into a
mailbox. It does not support additional options.</p>
<Message title="" type="note"><p>If you still make the request with additional options, bear in mind that you may
pay more than is necessary!</p>
</Message><h4 id="_3-letter" tabindex="-1"><a class="header-anchor" href="#_3-letter" aria-hidden="true">#</a> 3. Letter</h4>
<p>This package type is available on <DataType type="platform" id="1" /> for NL, EU
and Global shipments. The label for this shipment is unpaid meaning that you
will need to pay the postal office/courier to send this letter/package.
Therefore, it does not support additional options.</p>
<h4 id="_4-digital-stamp" tabindex="-1"><a class="header-anchor" href="#_4-digital-stamp" aria-hidden="true">#</a> 4. Digital stamp</h4>
<p>This package type is only available on <DataType type="platform" id="1" /> for
NL shipments and does not support any additional options. Its price is
calculated using the
package <ApiLink to="7_N">weight</ApiLink> .</p>
<p><strong>Note: This shipment will appear on your invoice
on <DataType type="shipment_status" id="2" /> as opposed to all other package
types, which won't appear on your invoice until
shipment <DataType type="shipment_status" id="3" />.</strong></p>
<h3 id="_6-a-2" tabindex="-1"><a class="header-anchor" href="#_6-a-2" aria-hidden="true">#</a> 6.A.2 Delivery types</h3>
<p>There are five different delivery types and these specify how the package is
delivered. The value is sent with the ShipmentOptions.delivery_type field.
Currently, delivery types are only available for NL and BE shipments
with <DataType type="package_type" id="1" />. Delivery types 1-5 for NL and 1,4
for BE. The address of the package determines the delivery types available. You
need to use the DeliveryOptions interface to fetch the delivery types for a
specific address. It is also possible to specify a date on which the package has
to be delivered with the ShipmentOptions.delivery_date field. With delivery
types 1 &amp; 3 ShipmentOptions.delivery_date is required.</p>
<h4 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true">#</a> 1. Morning</h4>
<p>This option is only available for certain NL addresses. It allows a
Customer/Consumer to have their package delivered early in the morning on the
delivery date specified except on Saturday and Sunday.</p>
<h4 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true">#</a> 2. Standard</h4>
<p>This is the standard delivery type.</p>
<h4 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true">#</a> 3. Evening</h4>
<p>This option is only available on <DataType type="platform" id="1" />
and <DataType type="platform" id="3" /> for certain NL addresses. It allows a
Customer/Consumer to have their package delivered in the evening on the
specified delivery date.</p>
<h4 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true">#</a> 4. Pickup</h4>
<p>The package is delivered at the chosen drop-off point specified by the
Consumer/Customer.</p>
<h4 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true">#</a> 5. Pickup express</h4>
<p>The same as pickup but the package is available for pickup before 8:30AM on the
delivery date specified at the drop-off location. Only available on MyParcel.nl
and Flespakket.</p>
<h3 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true">#</a> 6.A.3 Options</h3>
<p>These are the different package options such as insurance, recipient only,
signature on receipt, XL format etc. These options are specified in
the <ApiLink to="7_C">ShipmentOptions</ApiLink>
object. These options are only available
for <DataType type="package_type" id="1" />.</p>
<h4 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true">#</a> only_recipient</h4>
<p>Deliver the package only at address of the intended recipient. This option is
required for Morning and Evening delivery types.</p>
<h4 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> signature</h4>
<p>Recipient must sign for the package. This option is required for Pickup and
Pickup express delivery types.</p>
<h4 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h4>
<p>Return the package to the sender when the recipient is not home.</p>
<h4 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true">#</a> large_format</h4>
<p>This option must be specified if the dimensions of the package are between 100 x
70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier
indicate that this package is large format, and it has not been specified then
it will be added to the shipment in the billing process. This option is also
available for EU shipments.</p>
<h4 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true">#</a> insurance</h4>
<p>This option allows a shipment to be insured up to certain amount.
Only <DataType type="package_type" id="1" /> shipments can be insured. NL
shipments can be insured for 500,- euros. EU shipments <strong>must</strong> be insured for
500,- euros. Global shipments <strong>must</strong> be insured for 200,- euros. The following
shipment options are <strong>mandatory</strong> when insuring an NL shipment: only_recipient
and signature.</p>
<h4 id="age-check" tabindex="-1"><a class="header-anchor" href="#age-check" aria-hidden="true">#</a> age_check</h4>
<p>Only available on <DataType type="platform" id="1" />
and <DataType type="platform" id="3" />. The Customer/Consumer must sign for the
package and only receive it when he is at least 18 years.</p>
<h3 id="_6-a-4" tabindex="-1"><a class="header-anchor" href="#_6-a-4" aria-hidden="true">#</a> 6.A.4 Examples</h3>
<h4 id="pickup" tabindex="-1"><a class="header-anchor" href="#pickup" aria-hidden="true">#</a> Pickup</h4>
<p>We want to send a package to a consumer in Utrecht. He will pick the package up
at the nearest pickup location. The shipment looks like this.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Let's go through this example. This package will be picked up by the customer,
so it needs to <DataType type="package_type" id="1" />
with <DataType type="delivery_type" id="4" />. All
pickup packages need to have signature set. A pickup location needs to be
specified as well.</p>
<h4 id="evening" tabindex="-1"><a class="header-anchor" href="#evening" aria-hidden="true">#</a> Evening</h4>
<p>We want to send a package to a consumer in Utrecht that has to be delivered on
Tuesday evening. The shipment looks like this.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Let's go through this example. This package will be delivered to the consumer in
the evening, so it needs <DataType type="package_type" id="1" />
with <DataType type="delivery_type" id="3" />. All evening and morning packages
need to have only_recipient set.</p>
<h4 id="nl-insured" tabindex="-1"><a class="header-anchor" href="#nl-insured" aria-hidden="true">#</a> NL insured</h4>
<p>We want to send a Rolex to a customer in Maastricht. This shipment needs to be
insured up to € 5000,–. The shipment looks like this.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Only <DataType type="package_type" id="1" /> can be insured so [package type] is
set to 1. Insurance amount needs to be specified in cents and needs to be one of
these amounts (10000, 25000, 50000, 500000, &lt;= 500000). The package needs to be
insured up to 5000 euros, so we set <code>insurance.amount</code> to 500000 cents. All NL
insured packages need to have signature and only_recipient set, so we set them
as well.</p>
<h4 id="eu-and-global-insured" tabindex="-1"><a class="header-anchor" href="#eu-and-global-insured" aria-hidden="true">#</a> EU and Global insured</h4>
<p>We want to send an expensive Japanese vase to a Belgian friend of ours in
Brussels. This package is large format because it's dimensions are within 100 x
70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be
insured up to 500 euros.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This package is an EU package so the name must be set to 1. All EU and Global
shipments <strong>must</strong> be insured up to 500 (EU) / 200 (Global) euros, so we set the
insured amount to 50000 <strong>cents.</strong> EU and Global shipments do not have the
only_recipient, signature and return options so these cannot be set for this
shipment.</p>
<h2 id="_6-b" tabindex="-1"><a class="header-anchor" href="#_6-b" aria-hidden="true">#</a> 6.B Add Shipment</h2>
<h3 id="_6-b-1" tabindex="-1"><a class="header-anchor" href="#_6-b-1" aria-hidden="true">#</a> 6.B.1 Overview</h3>
<p>Add shipments allows you to create standard and related return shipments. The
data format can be JSON or CSV. Only standard national and EU shipments can be
created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part
of multipart/form-data. You can specify the column mapping for CSV by including
it as the first line in the CSV file or as a separate field named '
column_mapping' in the multipart/form-data.</p>
<p>For JSON requests
a <ApiLink to="7_G">ShipmentIds</ApiLink>
object is returned. The ids in
the <ApiLink to="7_G">ShipmentIds</ApiLink>
object will be in the same order they were sent.</p>
<p>For CSV requests <Http code=204 /> with empty response body is returned. If a
request fails then an <Http code="4xx" /> is returned.</p>
<h3 id="_6-b-2" tabindex="-1"><a class="header-anchor" href="#_6-b-2" aria-hidden="true">#</a> 6.B.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/shipments</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>POST</td>
</tr>
<tr>
<td rowspan="6"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td>
<p>Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1
(For Shipments JSON request)</p>
</td>
</tr>
<tr>
<td>
<p>Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1
(For Shipments with recipients column JSON request)</p>
</td>
</tr>
<tr>
<td>
<p>Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1
(For ReturnShipments JSON request)</p>
</td>
</tr>
<tr>
<td>
<p>Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1
(For UnrelatedReturnShipments JSON request)</p>
</td>
</tr>
<tr>
<td>
<p><strong>Optional request headers</strong></p>
</td>
<td>
<p>Accept: application/vnd.shipment_label+json;charset=utf-8
(You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook <code>shipment_label_created</code> to listen to it.)</p>
</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>None.</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>Query parameters</strong></p>
</td>
<td>
<p>format = <AutoLink item="/api-reference/04.data-types#paper_size">paper_size</AutoLink>
(When using accept header: application/vnd.shipment_label+json;charset=utf-8)</p>
</td>
</tr>
<tr>
<td>
<p>positions = label_position
(When using accept header: application/vnd.shipment_label+json;charset=utf-8)</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p><strong>Request body</strong></p>
</td>
<td>
<p><AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of Shipment objects.
(For Shipments JSON request)</p>
</td>
</tr>
<tr>
<td>
<p><AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of ReturnShipment objects.
(For ReturnShipments JSON request)</p>
</td>
</tr>
<tr>
<td>
<p><AutoLink item="/api-reference/04.data-types#array">array</AutoLink> of UnrelatedReturnShipment objects.
(For UnrelatedReturnShipments JSON request)</p>
</td>
</tr>
<tr>
<td><strong>Response</strong></td>
<td><Http code="200" /> Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)</td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td>ShipmentIds</td>
</tr>
<tr>
<td><strong>Error response</strong></td>
<td><Http code="4xx" /></td>
</tr>
<tr>
<td><strong>Error response body</strong></td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="_6-b-3" tabindex="-1"><a class="header-anchor" href="#_6-b-3" aria-hidden="true">#</a> 6.B.3 Request Headers</h3>
<p><strong>Content-Type: application/vnd.shipment+json;version=1.1</strong><br>
Specify this Content-Type when you want to create standard shipments.</p>
<p><strong>Content-Type: application/vnd.return_shipment+json;version=1.1</strong><br>
Specify this Content-Type when you want to create related return shipments.<br>
Parent shipment cannot be a concept (<DataType type="shipment_status" id="1" />)
.<br>
When a label is generated, the status of the shipment is converted to
registered ( <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink> 2).</p>
<p><strong>Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1</strong><br>
Specify this Content-Type when you want to create unrelated return shipments.</p>
<h3 id="_6-b-4" tabindex="-1"><a class="header-anchor" href="#_6-b-4" aria-hidden="true">#</a> 6.B.4 Examples</h3>
<p>In these examples we are going to create shipments.</p>
<DetailsExpand tag="h4" title="Create domestic PostNL shipments"><p>The following example creates a PostNL shipment to a Dutch recipient address.
Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian
address instead.</p>
<h5 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
          <span class="token property">"age_check"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-223-BAR-43"</span><span class="token punctuation">,</span>
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
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">68794</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-223-BAR-43"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create domestic bpost shipments"><Message type="note">
    Bpost shipments are only supported on <DataType type="platform" name="belgie" />.
</Message>
<h5 id="request-1" tabindex="-1"><a class="header-anchor" href="#request-1" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Wormerplein"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"16"</span><span class="token punctuation">,</span>
          <span class="token property">"box_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"test"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"bpost shipment"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">49566653</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"bpost shipment"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create domestic DPD shipments"><Message type="note">
    DPD shipments are only supported on <DataType type="platform" name="belgie" />.
</Message>
<h5 id="request-2" tabindex="-1"><a class="header-anchor" href="#request-2" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Wormerplein"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"16"</span><span class="token punctuation">,</span>
          <span class="token property">"box_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"test"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"Order 123456"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 49566517,
        "reference_identifier": "Order 123456"
      }
    ]
  }
}
```
</DetailsExpand><DetailsExpand tag="h4" title="Create domestic Instabox shipments"><Message type="note">
Instabox shipments are only supported on <DataType type="platform" name="myparcel" />.
</Message>
<Message type="note">
Creating Instabox shipments requires selecting a drop-off point. To receive nearby drop off points, see <ApiLink to="12_A">Drop off points</ApiLink> endpoint.
</Message>
<h5 id="request-3" tabindex="-1"><a class="header-anchor" href="#request-3" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
          <span class="token property">"same_day_delivery"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"drop_off_point"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"e9149b66-7bee-439b-bab0-7a5d92ddc519"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Instabox"</span><span class="token punctuation">,</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132WV"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Diamantlaan"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"77"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-3" tabindex="-1"><a class="header-anchor" href="#response-3" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 49566518,
        "reference_identifier": "FOO-222-BAR-42"
      }
    ]
  }
}
```
</DetailsExpand><DetailsExpand tag="h4" title="Create domestic PostNL multi collo shipments"><Message type="note">
    Multi collo shipments are only available on <DataType type="platform" name="myparcel" /> and <DataType type="platform" name="flespakket" />.
</Message>
<h5 id="request-4" tabindex="-1"><a class="header-anchor" href="#request-4" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
          <span class="token property">"age_check"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-4" tabindex="-1"><a class="header-anchor" href="#response-4" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create International shipment"><Message type="note">
  Creating shipments to an international destination is possible depending on the chosen carrier:
<ul>
<li>PostNL and Bpost shipments are available worldwide.</li>
<li>DPD shipments are available in the EU.</li>
<li>Instabox is only available in NL.</li>
</ul>
</Message>
<h5 id="request-5" tabindex="-1"><a class="header-anchor" href="#request-5" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-5" tabindex="-1"><a class="header-anchor" href="#response-5" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">3485394579</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create digital stamp shipments"><Message type="note">
    Digital stamp shipments are available on <DataType type="platform" name="myparcel" /> and to Dutch destinations only.
</Message>
<h5 id="request-6" tabindex="-1"><a class="header-anchor" href="#request-6" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-DPZ-BAR-46"</span><span class="token punctuation">,</span>
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
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"This is a digital stamp shipment!"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"physical_properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">30</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-6" tabindex="-1"><a class="header-anchor" href="#response-6" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">39234953</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create PostNL shipment with NL pickup location"><Message type="note">
    Only available on <DataType type="platform" name="myparcel" /> and <DataType type="platform" name="flespakket" />.
</Message>
<h5 id="request-7" tabindex="-1"><a class="header-anchor" href="#request-7" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><h5 id="response-7" tabindex="-1"><a class="header-anchor" href="#response-7" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create bpost shipment with BE pickup location"><Message type="note">
    Only available on <DataType type="platform" name="belgie" />.
</Message>
<h6 id="request-8" tabindex="-1"><a class="header-anchor" href="#request-8" aria-hidden="true">#</a> Request</h6>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Adriaan Brouwerstraat"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"16"</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Test"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"ANTWERPEN"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"618925"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"KLAPKRANT"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"15"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"KLAPDORP"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"order-012356"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-8" tabindex="-1"><a class="header-anchor" href="#response-8" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 49571535,
        "reference_identifier": "order-012356"
      }
    ]
  }
}
```
</DetailsExpand><DetailsExpand tag="h4" title="Create DPD shipment with BE pickup location"><Message type="note">
    Only available on <DataType type="platform" name="belgie" />.
</Message>
<h5 id="request-9" tabindex="-1"><a class="header-anchor" href="#request-9" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Adriaan Brouwerstraat"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"16"</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Test"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"PRESS WINKEL"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"HOOGSTRAAT"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"75"</span><span class="token punctuation">,</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"BE11468"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"DPD pickup"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-9" tabindex="-1"><a class="header-anchor" href="#response-9" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 49571535,
        "reference_identifier": "DPD pickup"
      }
    ]
  }
}
```
</DetailsExpand><DetailsExpand tag="h4" title="Create multi collo shipment with NL pickup location"><Message type="note">
    Only available on <DataType type="platform" name="myparcel" /> and <DataType type="platform" name="flespakket" />.
</Message>
<h5 id="request-10" tabindex="-1"><a class="header-anchor" href="#request-10" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
          <span class="token property">"age_check"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BH"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Burgemeester van Stamplein"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"270"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Albert Heijn"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-10" tabindex="-1"><a class="header-anchor" href="#response-10" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": "FOO-222-BAR-42"
      }
    ]
  }
}
```
</DetailsExpand><DetailsExpand tag="h4" title="Create shipment with BE pickup location"><h5 id="request-11" tabindex="-1"><a class="header-anchor" href="#request-11" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Antwerpen"</span><span class="token punctuation">,</span>
          <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"België"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Adriaan Brouwerstraat 12"</span><span class="token punctuation">,</span>
          <span class="token property">"street_additional_info"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"person"</span><span class="token operator">:</span> <span class="token string">"Mr. Parcel"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"ANTWERPEN"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"HOOGSTRAAT"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"75"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"BE0Q07"</span><span class="token punctuation">,</span>
          <span class="token property">"retail_network_id"</span><span class="token operator">:</span> <span class="token string">"LD-01"</span><span class="token punctuation">,</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"K&amp;J TRADING"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">"delivery_date"</span><span class="token operator">:</span> <span class="token string">"2017-08-09 16:00:00"</span><span class="token punctuation">,</span>
          <span class="token property">"only_recipient"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"return"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"cooled_delivery"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-11" tabindex="-1"><a class="header-anchor" href="#response-11" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create related return shipment"><Message type="note">
The following example creates a PostNL return shipment. On <DataType type="platform" name="belgie" /> return shipments are only available with <DataType type="carrier" name="bpost" />.
</Message>
<h5 id="request-12" tabindex="-1"><a class="header-anchor" href="#request-12" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"return_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
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
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-12" tabindex="-1"><a class="header-anchor" href="#response-12" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Create unrelated return shipment"><Message type="note">
The following example creates a PostNL return shipment. On <DataType type="platform" name="belgie" /> return shipments are only available with <DataType type="carrier" name="bpost" />.
</Message>
<h5 id="request-13" tabindex="-1"><a class="header-anchor" href="#request-13" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"return_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testing@myparcel.nl"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-13" tabindex="-1"><a class="header-anchor" href="#response-13" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": null
      }
    ]
  }
}
```
</DetailsExpand><h2 id="_6-c" tabindex="-1"><a class="header-anchor" href="#_6-c" aria-hidden="true">#</a> 6.C Delete Shipment</h2>
<Message title="" type="note"><p>Deleting shipments is not done often. This can only be done for shipments for
which a label has not yet been
created (<DataType type="shipment_status" id="1" />). Especially since shipments
not handed over to the distributor will not be billed by MyParcel. Therefore,
when unused shipments are not deleted this has no financial consequences.</p>
</Message><h3 id="_6-c-1" tabindex="-1"><a class="header-anchor" href="#_6-c-1" aria-hidden="true">#</a> 6.C.1 Overview</h3>
<p>Use this link to remove shipments. You can specify multiple shipment ids by
semicolon separating them on the URL. Only shipments
with <DataType type="shipment_status" id="1" /> can be deleted. This method
returns <Http code=204 /> if successful.
If the shipment doesn't exist a <Http code="422" /> is returned.</p>
<h3 id="_6-c-2" tabindex="-1"><a class="header-anchor" href="#_6-c-2" aria-hidden="true">#</a> 6.C.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/shipments/id[;id]</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>DELETE</td>
</tr>
<tr>
<td rowspan="3"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td>Content-type: application/json;charset=utf-8</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>id = [Shipment].id</td>
</tr>
<tr>
<td><strong>Query parameters</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Request body</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Response</strong></td>
<td><Http code="204" /></td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Error response</strong></td>
<td><Http code="4xx" />.</td>
</tr>
<tr>
<td><strong>Error response body</strong></td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="_6-c-3" tabindex="-1"><a class="header-anchor" href="#_6-c-3" aria-hidden="true">#</a> 6.C.3 Parameters</h3>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
The id of the shipment to delete. You can specify multiple shipments by
semicolon separating them.</p>
<h3 id="_6-c-4" tabindex="-1"><a class="header-anchor" href="#_6-c-4" aria-hidden="true">#</a> 6.C.4 Examples</h3>
<DetailsExpand tag="h4" title="Remove a shipment with id 1234."><h5 id="request-14" tabindex="-1"><a class="header-anchor" href="#request-14" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><h5 id="response-14" tabindex="-1"><a class="header-anchor" href="#response-14" aria-hidden="true">#</a> Response</h5>
<Http code="204" />
</DetailsExpand><h2 id="_6-d" tabindex="-1"><a class="header-anchor" href="#_6-d" aria-hidden="true">#</a> 6.D Generate unrelated return shipment url</h2>
<h3 id="_6-d-1" tabindex="-1"><a class="header-anchor" href="#_6-d-1" aria-hidden="true">#</a> 6.D.1 Overview</h3>
<p>This endpoint is often used by external parties to facilitate return shipments
on a dedicated part of their website, mainly when offering reverse logistics
e.g. repair services. It will allow the consumer to send packages to the
merchant directly from the merchant's website. If this option is not enable
then <Http code=404 /> Not Found is returned.</p>
<h3 id="_6-d-2" tabindex="-1"><a class="header-anchor" href="#_6-d-2" aria-hidden="true">#</a> 6.D.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/return_shipments</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>POST</td>
</tr>
<tr>
<td rowspan="2"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Query parameters</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Request body</strong></td>
<td>None.</td>
</tr>
<tr>
<td><strong>Response</strong></td>
<td><Http code="200" /> Content-Type: application/json</td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td>DownloadUrl object.</td>
</tr>
<tr>
<td rowspan="2"><strong>Error response</strong></td>
<td><Http code="4xx" /></td>
</tr>
<tr>
<td><Http code="5xx" /></td>
</tr>
<tr>
<td><strong>Error response body</strong></td>
<td>None.</td>
</tr>
</tbody>
</table>
<h3 id="_6-d-3" tabindex="-1"><a class="header-anchor" href="#_6-d-3" aria-hidden="true">#</a> 6.D.3 Examples</h3>
<DetailsExpand tag="h4" title="Generate unrelated return shipment"><h5 id="request-15" tabindex="-1"><a class="header-anchor" href="#request-15" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
</code></pre></div><h5 id="response-15" tabindex="-1"><a class="header-anchor" href="#response-15" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```
Content-Type: application/json
```
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"download_url"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"link"</span><span class="token operator">:</span> <span class="token string">"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_6-e" tabindex="-1"><a class="header-anchor" href="#_6-e" aria-hidden="true">#</a> 6.E Get Shipment</h2>
<h3 id="_6-e-1" tabindex="-1"><a class="header-anchor" href="#_6-e-1" aria-hidden="true">#</a> 6.E.1 Overview</h3>
<p>With this endpoint you can get shipments. You can use the 'q' query parameter to
search for shipments. Depending on the Accept request header either JSON or CSV
is returned. Multiple shipment ids can be specified on the URI by using
semicolon. There are limitation when getting data back as CSV. When using CSV
you will only get the most recent status of shipment.</p>
<p>Upon success either a JSON <AutoLink item="/api-reference/04.data-types#array">array</AutoLink>
of <ApiLink to="7_A">Shipment</ApiLink>
objects or a CSV
file is returned.</p>
<h3 id="_6-e-2" tabindex="-1"><a class="header-anchor" href="#_6-e-2" aria-hidden="true">#</a> 6.E.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/shipments/[id[;id]]</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>GET</td>
</tr>
<tr>
<td rowspan="2"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>id = [Shipment].id</td>
</tr>
<tr>
<td rowspan="10"><strong>Query parameters</strong></td>
<td>q = <AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>reference_identifier = [reference_identifier]</td>
</tr>
<tr>
<td>dropoff_today = <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink></td>
</tr>
<tr>
<td>status = <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink></td>
</tr>
<tr>
<td>from = <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink></td>
</tr>
<tr>
<td>to = <AutoLink item="/api-reference/04.data-types#timestamp">timestamp</AutoLink></td>
</tr>
<tr>
<td>page = <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>size = <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>sort = <AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>order = <AutoLink item="/api-reference/04.data-types#sort_order">sort_order</AutoLink></td>
</tr>
<tr>
<td><strong>Optional request headers</strong></td>
<td>Accept: application/json;charset=utf-8 (For JSON)</td>
</tr>
<tr>
<td><strong>Request body</strong></td>
<td>None.</td>
</tr>
<tr>
<td rowspan="2"><strong>Response</strong></td>
<td><Http code="200" /></td>
</tr>
<tr>
<td>Content-Type: application/json;charset=utf-8 (For JSON)</td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td>array of Shipment objects (For JSON)</td>
</tr>
<tr>
<td><strong>Error response</strong></td>
<td><Http code="4xx" /></td>
</tr>
<tr>
<td><strong>Error response body</strong></td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="_6-e-3" tabindex="-1"><a class="header-anchor" href="#_6-e-3" aria-hidden="true">#</a> 6.E.3 Parameters</h3>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
This is the shipment id. You can specify multiple shipment ids by semicolon
separating them on the URI.</p>
<p><strong>reference_identifier</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
This is an optional arbitrary identifier to identify the shipment.</p>
<p><strong>dropoff_today</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Use this parameter to filter for shipments that need to dropped at a PostNL
location today.</p>
<p><strong>q</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Use this parameter to search through all the fields of a shipment object
including the embedded objects</p>
<p><strong>status</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#shipment_status">shipment_status</AutoLink><br>
Use this parameter to specify the shipment status to filter on. You can specify
multiple status by semicolon separating them on the URI.</p>
<p><strong>from</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#date">date</AutoLink><br>
Use this parameter to filter on the shipment creation date. This filter will set
the lower bound of the date search range.</p>
<p><strong>to</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#date">date</AutoLink><br>
Use this parameter to filter on the shipment creation date. This filter will set
the upper bound of the date search range.</p>
<p><strong>page</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Page number. Maximum value is 1000 and minimum is 1. Defaults to 1.</p>
<p><strong>size</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Items per page. Maximum value is 200 and minimum is 30. Defaults to 30.</p>
<p><strong>sort</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Shipment object field to sort on.
See <ApiLink to="7_A">Shipment</ApiLink>
object</p>
<p><strong>order</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#sort_order">sort_order</AutoLink><br>
Sort order for sort filter. Defaults to ASC.</p>
<h3 id="_6-e-4" tabindex="-1"><a class="header-anchor" href="#_6-e-4" aria-hidden="true">#</a> 6.E.4 Examples</h3>
<DetailsExpand tag="h4" title="Search for shipments"><p>Search shipments for fields containing 'Niels' with status 'pending'. The first
shipment has 'Jan' in the person field.</p>
<h5 id="request-16" tabindex="-1"><a class="header-anchor" href="#request-16" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/shipments?q=Niels&amp;status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
</code></pre></div><h5 id="response-16" tabindex="-1"><a class="header-anchor" href="#response-16" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"search_results"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
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
          <span class="token property">"carrier_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">535</span><span class="token punctuation">,</span>
            <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"barcode"</span><span class="token operator">:</span> <span class="token string">"3SMYPA77773333"</span><span class="token punctuation">,</span>
          <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"created"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 08:00:00"</span><span class="token punctuation">,</span>
          <span class="token property">"modified"</span><span class="token operator">:</span> <span class="token string">"2017-01-31 09:00:00"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token property">"results"</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><h2 id="_6-f" tabindex="-1"><a class="header-anchor" href="#_6-f" aria-hidden="true">#</a> 6.F Get Shipment label</h2>
<h3 id="_6-f-1" tabindex="-1"><a class="header-anchor" href="#_6-f-1" aria-hidden="true">#</a> 6.F.1 Overview</h3>
<p>Get shipment label. You can specify label format and starting position of labels
on the first page with the <strong>format</strong> and <strong>position</strong> query parameters. The **
position** query only works when you specify the A4 format and is only applied
on the first page with labels.Accounts with <strong>Post-payment</strong> payment methods can
fetch multiple labels in one call. For accounts with <strong>Pre-payment</strong> payment
method an <code>&lt;Http code=402 /&gt; Payment Required</code> with a <ApiLink to="7_P">
PaymentInstructions</ApiLink> object is returned if the label has not been paid
for yet.</p>
<p>When a label for a multi collo shipment is requested, labels for all shipments
part of the multi collo shipment will be generated. Each shipment within a multi
collo shipment MUST be labeled with a specific label containing a unique
barcode.</p>
<p>Upon error <Http code="4xx" /> with a response body containing an Error is
returned.</p>
<p>If you want to retrieve more than 25 labels in one response, you can use
<code>Accept: application/vnd.shipment_label_link+json;charset=utf8</code>. You will
receive a URL to a label, but the label is not immediately available and will
return an <Http code=404 /> until it is ready. Depending on the number of
labels, this process will take between 3 seconds and 3 minutes. You can
regularly check whether the label is available or you can use
the <AutoLink item="#10">label created webhooks</AutoLink> .</p>
<h3 id="_6-f-2" tabindex="-1"><a class="header-anchor" href="#_6-f-2" aria-hidden="true">#</a> 6.F.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/shipment_labels/id[;id]</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>GET</td>
</tr>
<tr>
<td rowspan="5"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td>
<p>Accept: application/pdf
(For the PDF binary. This is the default.) For processing less than 25 labels.</p>
</td>
</tr>
<tr>
<td>
<p>Accept: application/json;charset=utf8
(For <ApiLink to="7_R">ShipmentLabelDownloadLink</ApiLink>) For processing less than 25 labels.</p>
</td>
</tr>
<tr>
<td>
<p>Accept: application/vnd.shipment_label_link+json;charset=utf8
(For <ApiLink to="7_R">ShipmentLabelDownloadLink</ApiLink>) For processing multiple labels. Recommended if you request more than 25 labels.</p>
</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>id = Shipment.id</td>
</tr>
<tr>
<td rowspan="2"><strong>Query parameters</strong></td>
<td>format = <AutoLink item="/api-reference/04.data-types#paper_size">paper_size</AutoLink></td>
</tr>
<tr>
<td>positions = <AutoLink item="/api-reference/04.data-types#label_position">label_position</AutoLink></td>
</tr>
<tr>
<td><strong>Request body</strong></td>
<td>None.</td>
</tr>
<tr>
<td rowspan="2"><strong>Response</strong></td>
<td><Http code="200" /> Content-Disposition: attachment; filename=&quot;PDF_FILE&quot; Content-Type: application/pdf</td>
</tr>
<tr>
<td>
 <Http code="200" /> Content-Type: application/json
 (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")</td>
</tr>
<tr>
<td rowspan="3"><strong>Response body</strong></td>
<td>Shipment label PDF</td>
</tr>
<tr>
<td><ApiLink to="7_R">ShipmentLabelDownloadLink</ApiLink></td>
</tr>
<tr>
<td>PaymentInstructions</td>
</tr>
<tr>
<td><strong>Error response</strong></td>
<td><Http code="402" /></td>
</tr>
<tr>
<td>
<p><strong>Error response body</strong></p>
</td>
<td>
<p>Content-Type: application/json
(When payment is required)</p>
</td>
</tr>
</tbody>
</table>
<h3 id="_6-f-3" tabindex="-1"><a class="header-anchor" href="#_6-f-3" aria-hidden="true">#</a> 6.F.3 Parameters</h3>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
This is the shipment id. You can specify multiple shipment ids by semicolon
separating them on the URI.</p>
<p><strong>format</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#paper_size">paper_size</AutoLink><br>
The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen
you can specify the label position. When requesting the label for a shipment
that contains a custom form, you can only request a A4 format.</p>
<p><strong>positions</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#label_position">label_position</AutoLink><br>
The position of the label on an A4 sheet. You can specify multiple positions by
semicolon separating them on the URI. Positioning is only applied on the first
page with labels. All subsequent pages will use the default positioning 1,2,3,4.</p>
<h3 id="_6-f-4" tabindex="-1"><a class="header-anchor" href="#_6-f-4" aria-hidden="true">#</a> 6.F.4 Examples</h3>
<DetailsExpand tag="h4" title="Get Shipment label"><h5 id="request-17" tabindex="-1"><a class="header-anchor" href="#request-17" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><h5 id="response-17" tabindex="-1"><a class="header-anchor" href="#response-17" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get shipment label download link"><h5 id="request-18" tabindex="-1"><a class="header-anchor" href="#request-18" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
</code></pre></div><h5 id="response-18" tabindex="-1"><a class="header-anchor" href="#response-18" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pdfs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get shipment label download link to handle multiple labels"><h5 id="request-19" tabindex="-1"><a class="header-anchor" href="#request-19" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
</code></pre></div><h5 id="response-19" tabindex="-1"><a class="header-anchor" href="#response-19" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pdfs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get shipment label with different format and position"><p>Get label for shipment with id 2. The label will be printed on an A4 sheet and
the label position will be at the bottom-right.</p>
<h5 id="request-20" tabindex="-1"><a class="header-anchor" href="#request-20" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/shipment_labels/2?format=A4&amp;positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><h5 id="response-20" tabindex="-1"><a class="header-anchor" href="#response-20" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```
Content-Disposition: attachment; filename="456456456456.pdf" Content-Type:
application/pdf (...PDF content)
```
</DetailsExpand><h2 id="_6-g" tabindex="-1"><a class="header-anchor" href="#_6-g" aria-hidden="true">#</a> 6.G Track Shipment</h2>
<h3 id="_6-g-1" tabindex="-1"><a class="header-anchor" href="#_6-g-1" aria-hidden="true">#</a> 6.G.1 Overview</h3>
<p>Get detailed track and trace information for a shipment. Upon
success <Http code="200" /> is returned with an <AutoLink item="/api-reference/04.data-types#array">array</AutoLink>
of <ApiLink to="7_L">TrackTrace</ApiLink>
objects.</p>
<h3 id="_6-g-2" tabindex="-1"><a class="header-anchor" href="#_6-g-2" aria-hidden="true">#</a> 6.G.2 Limitations</h3>
<p>For retrieving Track &amp; Trace data, we recommend passing multiple shipment IDs at
once to avoid hitting the <ApiLink to="1_D">rate limit</ApiLink> .</p>
<h3 id="_6-g-3" tabindex="-1"><a class="header-anchor" href="#_6-g-3" aria-hidden="true">#</a> 6.G.3 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/tracktraces/id[;id]</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>GET</td>
</tr>
<tr>
<td rowspan="2"><strong>Required</strong></td>
<td>request headers Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td>id= [Shipment].id</td>
</tr>
<tr>
<td rowspan="5"><strong>Query parameters</strong></td>
<td>page= <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>size= <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>sort= <AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>order= <AutoLink item="/api-reference/04.data-types#sort_order">sort_order</AutoLink></td>
</tr>
<tr>
<td>extra_info= [extra_info]</td>
</tr>
<tr>
<td><strong>Request body</strong></td>
<td>None.</td>
</tr>
<tr>
<td rowspan="2"><strong>Response</strong></td>
<td><Http code="200" /></td>
</tr>
<tr>
<td>Content-Type: application/json;charset=utf-8</td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td>array of TrackTrace objects.</td>
</tr>
<tr>
<td><strong>Error response</strong></td>
<td><Http code="4xx" /></td>
</tr>
<tr>
<td><strong>Error response body</strong></td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="_6-g-4" tabindex="-1"><a class="header-anchor" href="#_6-g-4" aria-hidden="true">#</a> 6.G.4 Parameters</h3>
<p><strong>id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
This is the shipment id. You can specify multiple shipment ids by semicolon
separating them on the URI.</p>
<p><strong>page</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Page number. Maximum value is 1000 and minimum is 1. Defaults to 1.</p>
<p><strong>size</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Items per page. Maximum value is 200 and minimum is 30. Defaults to 30.</p>
<p><strong>sort</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
TrackTrace object field to sort on.
See <ApiLink to="7_L">TrackTrace</ApiLink></p>
<p><strong>order</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#sort_order">sort_order</AutoLink><br>
Sort order for sort filter. Defaults to ASC.</p>
<p><strong>extra_info</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Only the delivery_moment option is available. Delivery moment is not included by
default for performance reasons. Example:</p>
<p>extra_info=delivery_moment</p>
<h3 id="_6-g-5" tabindex="-1"><a class="header-anchor" href="#_6-g-5" aria-hidden="true">#</a> 6.G.5 Examples</h3>
<DetailsExpand tag="null" ><h5 id="request-21" tabindex="-1"><a class="header-anchor" href="#request-21" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><h5 id="response-21" tabindex="-1"><a class="header-anchor" href="#response-21" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
```json
{
  "data": {
    "tracktraces": [
      {
        "shipment_id": 43393092,
        "code": "I01",
        "description": "Zending bezorgd",
        "time": "2019-02-16 15:09:53",
        "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL",
        "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL",
        "recipient": {
          "cc": "NL",
          "postal_code": "2231je",
          "city": "Potloden dorp",
          "street": "Gumlaan",
          "number": "101",
          "number_suffix": "",
          "person": "Hard Kauwer"
        },
        "sender": {
          "cc": "NL",
          "postal_code": "4337WA",
          "city": "Middelburg",
          "street": "Jacobus Spijkerdreef",
          "number": "10",
          "person": "Tamara Faker",
          "company": "Potlodenshop",
          "email": "tamluca@potlodenshop.nl",
          "phone": "0673826485"
        },
        "options": {
          "package_type": 1,
          "only_recipient": 0,
          "signature": 0,
          "return": 0,
          "insurance": {
            "amount": 0,
            "currency": "EUR"
          },
          "large_format": 0,
          "cooled_delivery": 0,
          "age_check": 0
        },
        "pickup": null,
        "delayed": false,
        "location": {
          "name": "Depot Den Bosch",
          "cc": "NL",
          "city": "S-Hertogenbosch",
          "postal_code": "5222AL",
          "street": "Ketelaarskampweg",
          "number": "7",
          "number_suffix": null,
          "longitude": 5.27349901,
          "latitude": 51.70326781
        },
        "status": {
          "current": 7,
          "main": "delivered",
          "final": true
        },
        "history": [
          {
            "code": "A01",
            "status": 2,
            "main": "registered",
            "description": "De zending is aangemeld bij PostNL en wordt volgbaar",
            "time": "2019-02-15 00:00:00",
            "delayed": false,
            "location": {
              "name": "Depot Den Bosch",
              "cc": "NL",
              "city": "S-Hertogenbosch",
              "postal_code": "5222AL",
              "street": "Ketelaarskampweg",
              "number": "7",
              "number_suffix": null,
              "longitude": 5.27349901,
              "latitude": 51.70326781
            }
          },
          {
            "code": "B01",
            "status": 3,
            "main": "handed_to_carrier",
            "description": "Zending is ontvangen door PostNL",
            "time": "2019-02-15 17:09:55",
            "delayed": false,
            "location": null
          },
          {
            "code": "J01",
            "status": 4,
            "main": "sorting",
            "description": "Zending gesorteerd in sorteercentrum",
            "time": "2019-02-16 08:13:29",
            "delayed": false,
            "location": null
          },
          {
            "code": "J05",
            "status": 5,
            "main": "distribution",
            "description": "Bezorger is onderweg",
            "time": "2019-02-16 08:35:51",
            "delayed": false,
            "location": null
          }
        ],
        "delivery_moment_type": "estimated",
        "delivery_moment": {
          "start": {
            "date": "2019-02-19 17:15:00.000000",
            "timezone_type": 3,
            "timezone": "Europe/Amsterdam"
          },
          "end": {
            "date": "2019-02-19 19:45:00.000000",
            "timezone_type": 3,
            "timezone": "Europe/Amsterdam"
          }
        }
      }
    ]
  }
}
```
</DetailsExpand><h2 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true">#</a> 6.H Multi collo shipments</h2>
<h3 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true">#</a> 6.H.1 Overview</h3>
<p>This section describes the working of multi collo shipments. The multi collo
shipment is a special name of shipment which requires a specific way of
handling. A multi collo shipment is a shipment which contains multiple packages
for the same address and the same delivery date. It contains of one 'main'
shipment and at least one 'secondary' shipment. Working with multi collo
shipments does not require using specific endpoints but existing endpoints have
specific behaviour in combination with multi collo shipments.</p>
<h3 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true">#</a> 6.H.2 Create</h3>
<p>This section extends the <ApiLink to="6_B">base functionality</ApiLink>.</p>
<p>Creating a multi collo shipment basically means using one extra
property <code>secondary_shipments</code>. This property can be used to pass an array of
json objects. Each object represents an extra shipment to be part of the multi
collo shipment. All required properties of the main shipment are inherited by
the secondary shipments so there is no need to pass data with a secondary
shipment, but it is allowed to pass specific data. This might be useful for
example to pass a specific reference identifier per secondary shipment. Shipment
options MUST be provided only with the main shipment. Secondary shipments only
can be used in combination with <DataType type="package_type" id="1" /> and can
only be used for shipments to NL en BE.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"SECONDARY-SHIPMENT"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-h-3" tabindex="-1"><a class="header-anchor" href="#_6-h-3" aria-hidden="true">#</a> 6.H.3 Update</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td>https://api.myparcel.nl/shipments</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td>PUT</td>
</tr>
<tr>
<td rowspan="2"><strong>Required request headers</strong></td>
<td>Authorization: basic BASE64(API_KEY)</td>
</tr>
<tr>
<td>Content-Type: application/vnd.shipment+json;version=1.1</td>
</tr>
</tbody>
</table>
<p>Updating a secondary shipment can be done in several ways using different
endpoints.</p>
<h4 id="add-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#add-secondary-shipment" aria-hidden="true">#</a> Add secondary shipment</h4>
<p>Adding an existing shipment to an existing multi collo shipment can be done in
two ways.</p>
<ol>
<li>Post complete shipment with an extra shipment passed in
the <code>secondary_shipments</code> property.</li>
</ol>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">34567</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2">
<li>Update a single existing shipment with a reference to a multi collo shipment
via the <code>multi_collo_main_shipment_id</code>.</li>
</ol>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token number">34567</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Adding a non-existent shipment to an existing multi collo shipment can be done
via the <code>secondary_shipments</code> property of the main shipment.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well
because they will be deleted otherwise.</p>
<h4 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true">#</a> Remove secondary shipment</h4>
<p>Removing a secondary shipment from a multi collo shipment can be done in 3
different ways.</p>
<ol>
<li>
<p>Delete secondary shipment. Make use of
the <ApiLink to="6_C">delete endpoint</ApiLink> when
passing the id of the secondary shipment. This will cause the secondary
shipment to be deleted and removed from the multi collo shipment.</p>
</li>
<li>
<p>Omit the secondary shipment in
an <ApiLink to="6_H_3">update</ApiLink> request on the multi collo
main shipment. This will cause the secondary shipment to be deleted and be
removed from the multi collo shipment.</p>
</li>
<li>
<p>Unlink a secondary shipment from the multi collo shipment. This is done by a
PUT request for a specific secondary shipment with an empty reference to the
multi collo main shipment. This will cause the shipment to be removed from
the multi collo shipment and still be available as normal shipment. The data
passed in the PUT request for secondary shipment 1234 to remove it from its
multi collo shipment should contain besides all other required data:</p>
</li>
</ol>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true">#</a> 6.H.4 Delete</h3>
<p>This section extends the <ApiLink to="6_C">base functionality</ApiLink>.
Deleting a multi collo main shipment will result in a complete removal of the
main and secondary shipments of the multi collo shipment.</p>
<p>Deleting a secondary shipment will result in deleting the shipment and removal
of the secondary shipment from the multi collo shipment.</p>
<h3 id="_6-h-5" tabindex="-1"><a class="header-anchor" href="#_6-h-5" aria-hidden="true">#</a> 6.H.5 Examples</h3>
<DetailsExpand tag="h4" title="Create national multi collo shipment"><h5 id="request-22" tabindex="-1"><a class="header-anchor" href="#request-22" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
          <span class="token property">"large_format"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"label_description"</span><span class="token operator">:</span> <span class="token string">"My custom description"</span><span class="token punctuation">,</span>
          <span class="token property">"age_check"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"secondary_shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"REF-SECONDARY-SHIPMENT"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-22" tabindex="-1"><a class="header-anchor" href="#response-22" aria-hidden="true">#</a> Response</h5>
<Http code="200" />
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"FOO-222-BAR-42"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Add new shipment to existing multi collo shipment"><p>This example adds a new shipment to multi collo shipment 12345</p>
<h5 id="request-23" tabindex="-1"><a class="header-anchor" href="#request-23" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
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
          <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12346</span><span class="token punctuation">,</span>
            <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"SECONDARY-SHIPMENT"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-23" tabindex="-1"><a class="header-anchor" href="#response-23" aria-hidden="true">#</a> Response</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 204 No Content
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Add existing shipment to existing multi collo shipment"><p>This example adds existing shipment 12346 to multi collo shipment 12345</p>
<h5 id="request-24" tabindex="-1"><a class="header-anchor" href="#request-24" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12346</span><span class="token punctuation">,</span>
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
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"multi_collo_main_shipment_id"</span><span class="token operator">:</span> <span class="token number">12345</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-24" tabindex="-1"><a class="header-anchor" href="#response-24" aria-hidden="true">#</a> Response</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 204 No Content
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Delete and remove shipment from multi collo shipment"><p>This example deletes and removes existing shipment 12346 from multi collo
shipment 12345 by omitting the shipment in the secondary shipment property</p>
<h5 id="request-25" tabindex="-1"><a class="header-anchor" href="#request-25" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shipments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
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
          <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">12347</span><span class="token punctuation">,</span>
            <span class="token property">"reference_identifier"</span><span class="token operator">:</span> <span class="token string">"SECONDARY-SHIPMENT"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="response-25" tabindex="-1"><a class="header-anchor" href="#response-25" aria-hidden="true">#</a> Response</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 204 No Content
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Remove shipment from multi collo shipment without deletion"><p>This example removes existing shipment 12346 from multi collo shipment 12345 by
removing the relation to the multi collo main shipment.</p>
<h5 id="request-26" tabindex="-1"><a class="header-anchor" href="#request-26" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`

```json
{
  "data": {
    "shipments": [
      {
        "id": 12346,
        "reference_identifier": "FOO-222-BAR-42",
        "recipient": {
          "cc": "NL",
          "region": "Zuid-Holland",
          "city": "Hoofddorp",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "person": "Mr. Parcel",
          "phone": "0233030315",
          "email": "testing@myparcel.nl"
        },
        "options": {
          "package_type": 1,
          "label_description": "My custom description"
        },
        "carrier": 1,
        "multi_collo_main_shipment_id": null
      }
    ]
  }
}
</code></pre></div><h5 id="response-26" tabindex="-1"><a class="header-anchor" href="#response-26" aria-hidden="true">#</a> Response</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 204 No Content
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Delete and remove shipment from a multi collo shipment via DELETE request"><p>This example deletes and removes existing shipment 12346 from multi collo
shipment by deleting the secondary shipment.</p>
<h5 id="request-27" tabindex="-1"><a class="header-anchor" href="#request-27" aria-hidden="true">#</a> Request</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><h5 id="response-27" tabindex="-1"><a class="header-anchor" href="#response-27" aria-hidden="true">#</a> Response</h5>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 204 No Content
</code></pre></div></DetailsExpand></template>
