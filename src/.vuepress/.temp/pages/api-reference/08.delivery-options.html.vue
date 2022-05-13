<template><h1 id="_8-delivery-options" tabindex="-1"><a class="header-anchor" href="#_8-delivery-options" aria-hidden="true">#</a> 8. Delivery options</h1>
<h2 id="_8-a" tabindex="-1"><a class="header-anchor" href="#_8-a" aria-hidden="true">#</a> 8.A Get delivery options</h2>
<p>This endpoint has a rate limit. For more information, see <ApiLink to="1-D">rate limiting</ApiLink>.</p>
<h3 id="_8-a-1" tabindex="-1"><a class="header-anchor" href="#_8-a-1" aria-hidden="true">#</a> 8.A.1 Overview</h3>
<p><strong>Defaults</strong><br>
Get the delivery options for a given location and carrier. If none of the
optional parameters are specified then the following default will be used: If a
request is made for the delivery options between Friday <strong>after</strong> the default
cutoff_time (15h30) and Monday <strong>before</strong> the default cutoff_time (15h30) then
Tuesday will be shown as the next possible delivery date.</p>
<p><strong>Objects</strong><br>
Upon success two <AutoLink item="/api-reference/04.data-types#array">array</AutoLink>s are returned; one for <ApiLink to="9_a">DeliveryOptions</ApiLink>
and one for <ApiLink to="9_B">PickupOptions</ApiLink> objects is returned. This object contains
delivery date, time and pricing. Upon error an Error object is returned.</p>
<p>To show delivery options to customers, you can use our
javascript <AutoLink item="http://github.com/myparcelnl/checkout">code</AutoLink>. Use
our <AutoLink item="https://myparcelnl.github.io/delivery-options/">sandbox</AutoLink> for an example and
easier integration.</p>
<h3 id="_8-a-2" tabindex="-1"><a class="header-anchor" href="#_8-a-2" aria-hidden="true">#</a> 8.A.2 Reference</h3>
<table>
<tbody>
<tr>
<td rowspan="2"><strong>URI</strong></td>
<td>https://api.myparcel.nl/delivery_options</td>
<td></td>
</tr>
<tr>
<td>https://api.myparcel.nl/pickup_locations</td>
<td></td>
</tr>
<tr>
<td>Methods</td>
<td>GET</td>
<td></td>
</tr>
<tr>
<td>Rate Limit</td>
<td>30 requests in 5 minutes</td>
<td></td>
</tr>
<tr>
<td>URI parameters</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td rowspan="18">Query parameters</td>
<td>cc</td>
<td><AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink></td>
</tr>
<tr>
<td>postal_code</td>
<td><AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>number</td>
<td><AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>city</td>
<td><AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>street</td>
<td><AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>platform</td>
<td><AutoLink item="/api-reference/04.data-types#platform">platform</AutoLink></td>
</tr>
<tr>
<td>carrier</td>
<td><AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink></td>
</tr>
<tr>
<td>delivery_time</td>
<td><AutoLink item="/api-reference/04.data-types#time">time</AutoLink></td>
</tr>
<tr>
<td>delivery_date</td>
<td><AutoLink item="/api-reference/04.data-types#date">date</AutoLink></td>
</tr>
<tr>
<td>cutoff_time</td>
<td><AutoLink item="/api-reference/04.data-types#time">time</AutoLink></td>
</tr>
<tr>
<td>dropoff_days</td>
<td><AutoLink item="/api-reference/04.data-types#weekday_digit">weekday_digit</AutoLink></td>
</tr>
<tr>
<td>monday_delivery</td>
<td><AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink></td>
</tr>
<tr>
<td>dropoff_delay</td>
<td><AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>deliverydays_window</td>
<td><AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
</tr>
<tr>
<td>exclude_delivery_type</td>
<td><AutoLink item="/api-reference/04.data-types#delivery_type">delivery_type</AutoLink></td>
</tr>
<tr>
<td>exclude_parcel_lockers</td>
<td><AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink></td>
</tr>
<tr>
<td>latitude</td>
<td><AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink></td>
</tr>
<tr>
<td>longitude</td>
<td><AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink></td>
</tr>
<tr>
<td>Request body</td>
<td>None.</td>
<td></td>
</tr>
<tr>
<td>Response</td>
<td>HTTP/1.1 200 OK</td>
<td></td>
</tr>
<tr>
<td>Content-Type:</td>
<td>application/json;version=2.0 charset=utf-8</td>
<td></td>
</tr>
<tr>
<td>Response body</td>
<td>array of DeliveryOptions or array of PickupOptions objects</td>
<td></td>
</tr>
<tr>
<td>Error response</td>
<td>HTTP/1.1 5xx &lt; MESSAGE &gt;</td>
<td></td>
</tr>
<tr>
<td>Error response body</td>
<td>None.</td>
<td></td>
</tr>
<tr>
<td>Error response</td>
<td>HTTP/1.1 503 &lt; MESSAGE &gt;</td>
<td></td>
</tr>
<tr>
<td>Error response body 503</td>
<td>Error</td>
<td></td>
</tr>
<tr>
<td>Error response body Example</td>
<td><code> {&quot;data&quot;: {&quot;delivery&quot;: [],&quot;pickup&quot;: [],&quot;message&quot;: &quot;No results&quot;},&quot;errors&quot;: [{&quot;code&quot;: 9,&quot;message&quot;: &quot;Example&quot;,&quot;human&quot;: &quot;Example&quot;}]}</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_8-a-3" tabindex="-1"><a class="header-anchor" href="#_8-a-3" aria-hidden="true">#</a> 8.A.3 Parameters</h3>
<p><strong>cc</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink><br>
Required: yes<br>
The country code for which to fetch the delivery options. This endpoint can only be used in the Netherlands or Belgium ( cc=NL or cc=BE ).</p>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes.<br>
The postal code for which to fetch the delivery options.</p>
<p><strong>number</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes<br>
The street number for which to fetch the delivery options.</p>
<p><strong>city</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no<br>
Only available for carriers bpost and DPD. This can be used to narrow the search results for locations outside NL.</p>
<p><strong>street</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: no<br>
This can be used to narrow the search results for locations outside NL.</p>
<p><strong>platform</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#platform">platform</AutoLink><br>
Required: no<br>
The platform where you want the data from</p>
<p><strong>delivery_time</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: no<br>
The time on which a package has to be delivered.<br>
<strong>Note: This is only an indication of time the package will be delivered on the selected date.</strong></p>
<p><strong>delivery_date</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#date">date</AutoLink><br>
Required: no<br>
The date on which the package has to be delivered.</p>
<p><strong>cutoff_time</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#time">time</AutoLink><br>
Required: no<br>
This option allows the <strong>Merchant</strong> to indicate the latest cut-off time before which a consumer order will still be picked, packed and dispatched on the same/first set dropoff day, taking into account the dropoff-delay. Default time is 15h30. For example, if cutoff time is 15h30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15h30 will be dropped of at PostNL on that same Monday in time for the Monday collection.</p>
<p><strong>dropoff_days</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#weekday_digit">weekday_digit</AutoLink><br>
Required: no<br>
This options allows the <strong>Merchant</strong> to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded.</p>
<p><strong>monday_delivery</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: no<br>
Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. Click <AutoLink item="https://blog.myparcel.nl/maandagbezorging">here</AutoLink> for more information concerning Monday delivery and the locations.<br>
<strong>Note: To activate Monday delivery, value 6 must be given with <AutoLink item="#dropoff_days">dropoff_days</AutoLink> , value 1 must be given by <AutoLink item="#monday_delivery">monday_delivery</AutoLink> . And on Saturday the <AutoLink item="#cutoff_time">cutoff_time</AutoLink> must be before 15:00 (14:30 recommended) so that Monday will be shown.</strong></p>
<p><strong>saturday_delivery</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: no<br>
Saturday delivery is only possible when the package is delivered before 15.00 on Friday at the designated bpost locations.<br>
<strong>Note: To activate Saturday delivery, value 6 must be given with <AutoLink item="#dropoff_days">dropoff_days</AutoLink> , value 1 must be given by <AutoLink item="#saturday_delivery">saturday_delivery</AutoLink> .</strong></p>
<p><strong>dropoff_delay</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: no<br>
This options allows the <strong>Merchant</strong> to set the number of days it takes her to pick, pack and hand in her parcels at PostNL when ordered before the cutoff time. By default this is 0 and max is 14.</p>
<p><strong>deliverydays_window</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: no<br>
This options allows the <strong>Merchant</strong> to set the number of days into the future for which she wants to show her consumers delivery options. For example, if set to 3 in her check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cut-off time and she goes to PostNL on Mondays). Min is 1. and max. is 14.</p>
<p><strong>exclude_delivery_type</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#delivery_type">delivery_type</AutoLink><br>
Required: no<br>
This options allows the Merchant to exclude delivery types from the available delivery options. You can specify multiple delivery types by semicolon separating them. The standard delivery name cannot be excluded.</p>
<p><strong>exclude_parcel_lockers</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#boolean">boolean</AutoLink><br>
Required: no<br>
This option allows to filter out pickup locations that are parcel lockers.</p>
<p><strong>latitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: no<br>
This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations.</p>
<p><strong>longitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: no<br>
This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations.</p>
<h3 id="_8-a-4" tabindex="-1"><a class="header-anchor" href="#_8-a-4" aria-hidden="true">#</a> 8.A.4 Examples</h3>
<DetailsExpand tag="h4" title="Get delivery options for 2132JE, 31 for PostNL"><p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/delivery_options?platform=myparcel&amp;carrier=postnl&amp;cc=nl&amp;number=31&amp;postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"delivery"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
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
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">1</span>
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
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-02"</span><span class="token punctuation">,</span>
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
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"11:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"13:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
            <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"pickup"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-01"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:30:00"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
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
        <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">"Dit is een Business Point. Post en pakketten die u op werkdagen vóór de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag."</span><span class="token punctuation">,</span>
        <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token string">"023-5576310"</span><span class="token punctuation">,</span>
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
          <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"1934"</span><span class="token punctuation">,</span>
        <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"52.286582"</span><span class="token punctuation">,</span>
        <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.682377"</span><span class="token punctuation">,</span>
        <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"173187"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-01"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token string">"Primera Sanders"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Polderplein"</span><span class="token punctuation">,</span>
        <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BA"</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
        <span class="token property">"start_time"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
        <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"retail"</span><span class="token punctuation">,</span>
        <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">"Dit is een Postkantoor. Post en pakketten die u op werkdagen vóór de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag."</span><span class="token punctuation">,</span>
        <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token string">"023-5640556"</span><span class="token punctuation">,</span>
        <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"11:00-18:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"09:00-18:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"09:00-18:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"09:00-18:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"09:00-21:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"09:00-17:00"</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"12:00-17:00"</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"1687"</span><span class="token punctuation">,</span>
        <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"52.192150633052"</span><span class="token punctuation">,</span>
        <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.44249030539514"</span><span class="token punctuation">,</span>
        <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"176227"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2017-02-01"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"16:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get pickup options for 2132JE, 31 for PostNL"><p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/pickup_locations?carrierName=postnl&amp;platform=myparcel&amp;carrier=postnl&amp;cc=nl&amp;number=31&amp;postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pickup_locations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Polderplein"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BA"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"3"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"possibilities"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"delivery_type_id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"delivery_type_name"</span><span class="token operator">:</span> <span class="token string">"pickup"</span><span class="token punctuation">,</span>
            <span class="token property">"moment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 16:00:00.000000"</span><span class="token punctuation">,</span>
                <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Primera Sanders"</span><span class="token punctuation">,</span>
          <span class="token property">"retail_network_id"</span><span class="token operator">:</span> <span class="token string">"PNPNL-01"</span><span class="token punctuation">,</span>
          <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"1696"</span><span class="token punctuation">,</span>
          <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"52.30329367"</span><span class="token punctuation">,</span>
          <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.69476214"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"176227"</span><span class="token punctuation">,</span>
          <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-17 11:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-17 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-18 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-18 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-19 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-19 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-14 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-14 21:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-15 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-15 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-16 12:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-16 17:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get delivery options with a lot of options"><ul>
<li>Destination: 2132JE 31</li>
<li>PostNL</li>
<li>cutoff time 16:00</li>
<li>dropoff days Mon - Sat</li>
<li>dropoff delay: 0</li>
<li>delivery days window: 2</li>
<li>no morning</li>
</ul>
<p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/delivery_options?platform=myparcel&amp;carrier=postnl&amp;cc=nl&amp;number=31&amp;postal_code=2132JE&amp;cutoff_time=16:00:00&amp;dropoff_days=1;2;3;4;5;6&amp;monday_delivery=1&amp;dropoff_delay=0&amp;deliverydays_window=2&amp;exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"deliveries"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 00:00:00.000000"</span><span class="token punctuation">,</span>
          <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"possibilities"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
            <span class="token property">"shipment_options"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"age_check"</span><span class="token punctuation">,</span>
                <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span>
                  <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token boolean">false</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"large_format"</span><span class="token punctuation">,</span>
                <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span>
                  <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token boolean">false</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"only_recipient"</span><span class="token punctuation">,</span>
                <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span>
                  <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token boolean">false</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"signature"</span><span class="token punctuation">,</span>
                <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span>
                  <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token boolean">false</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"return"</span><span class="token punctuation">,</span>
                <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span>
                  <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token boolean">false</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"collect_date"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"delivery_time_frames"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"start"</span><span class="token punctuation">,</span>
                <span class="token property">"date_time"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 09:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"end"</span><span class="token punctuation">,</span>
                <span class="token property">"date_time"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 12:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand><DetailsExpand tag="h4" title="Get pickup options for..."><p>2132JE, 31 for PostNL cutoff time 16h00, dropoff days Mon - Sat, dropoff delay is zero, delivery window is 2 days and morning is excluded as delivery name.</p>
<p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/pickup_locations?platform=myparcel&amp;carrier=postnl&amp;cc=nl&amp;number=31&amp;postal_code=2132JE&amp;cutoff_time=16:00:00&amp;dropoff_days=1;2;3;4;5;6&amp;monday_delivery=1&amp;dropoff_delay=0&amp;deliverydays_window=2&amp;exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
</code></pre></div><div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pickup_locations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Polderplein"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132BA"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"3"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"possibilities"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"delivery_type_id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"delivery_type_name"</span><span class="token operator">:</span> <span class="token string">"pickup"</span><span class="token punctuation">,</span>
            <span class="token property">"moment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 16:00:00.000000"</span><span class="token punctuation">,</span>
                <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Primera Sanders"</span><span class="token punctuation">,</span>
          <span class="token property">"retail_network_id"</span><span class="token operator">:</span> <span class="token string">"PNPNL-01"</span><span class="token punctuation">,</span>
          <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"1696"</span><span class="token punctuation">,</span>
          <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"52.30329367"</span><span class="token punctuation">,</span>
          <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.69476214"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"176227"</span><span class="token punctuation">,</span>
          <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-17 11:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-17 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-18 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-18 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-19 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-19 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-13 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-14 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-14 21:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-15 09:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-15 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-16 12:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-02-16 17:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>Get delivery options for Belgium</strong></p>
<p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/delivery_options?platform=belgie&amp;carrier=bpost&amp;cc=be&amp;number=49&amp;postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK Content-Type<span class="token operator">:</span>application/json;charset=utf<span class="token number">-8</span>
<span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"delivery"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"17:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
            <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-28"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"17:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
            <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-29"</span><span class="token punctuation">,</span>
        <span class="token property">"time"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"08:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"end"</span><span class="token operator">:</span> <span class="token string">"17:00:00"</span><span class="token punctuation">,</span>
            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
              <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"price_comment"</span><span class="token operator">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>
            <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>Get pickup options for Belgium</strong></p>
<p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/pickup_locations?platform=belgie&amp;carrier=bpost&amp;cc=be&amp;number=49&amp;postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
</code></pre></div><p><strong>Response</strong></p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK Content-Type<span class="token operator">:</span>application/json;charset=utf<span class="token number">-8</span>
<span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pickup_locations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"BE"</span><span class="token punctuation">,</span>
          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"BRUSSEL"</span><span class="token punctuation">,</span>
          <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"ANSPACHLAAN"</span><span class="token punctuation">,</span>
          <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"1000"</span><span class="token punctuation">,</span>
          <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
          <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"possibilities"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"delivery_type_id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">"delivery_type_name"</span><span class="token operator">:</span> <span class="token string">"pickup"</span><span class="token punctuation">,</span>
            <span class="token property">"moment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27 16:00:00.000000"</span><span class="token punctuation">,</span>
                <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"BRUSSEL DE BROUCKERE"</span><span class="token punctuation">,</span>
          <span class="token property">"retail_network_id"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"242"</span><span class="token punctuation">,</span>
          <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token string">"50.8506"</span><span class="token punctuation">,</span>
          <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token string">"4.35185"</span><span class="token punctuation">,</span>
          <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"20100"</span><span class="token punctuation">,</span>
          <span class="token property">"phone_number"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"monday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27 08:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27 12:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27 13:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-27 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"tuesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-28 08:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-28 12:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-28 13:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-28 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"wednesday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-29 08:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-29 12:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-29 13:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-29 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"thursday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-30 08:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-30 12:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-30 13:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-30 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"friday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-31 08:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-31 12:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-31 13:30:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-31 18:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"saturday"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-25 10:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2020-07-25 13:00:00.000000"</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone_type"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"Europe/Amsterdam"</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"sunday"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand></template>
