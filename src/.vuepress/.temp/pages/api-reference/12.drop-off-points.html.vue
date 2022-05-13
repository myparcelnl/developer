<template><h1 id="_12-drop-off-points" tabindex="-1"><a class="header-anchor" href="#_12-drop-off-points" aria-hidden="true">#</a> 12. Drop off points</h1>
<h2 id="_12-a" tabindex="-1"><a class="header-anchor" href="#_12-a" aria-hidden="true">#</a> 12.A Get drop off points</h2>
<h3 id="_12-a-1" tabindex="-1"><a class="header-anchor" href="#_12-a-1" aria-hidden="true">#</a> 12.A.1 Overview</h3>
<p>Use this endpoint to receive a list of nearby drop off points, where shipments
can be dropped off upon shipping. Results are ordered by distance from the
provided postal code or coordinates.<br>
When creating Instabox shipments, it is required to provide a drop-off point.</p>
<h3 id="_12-a-2" tabindex="-1"><a class="header-anchor" href="#_12-a-2" aria-hidden="true">#</a> 12.A.2 Reference</h3>
<table>
<tbody>
<tr>
<td><strong>URI</strong></td>
<td colspan="2">https://api.myparcel.nl/drop_off_points</td>
</tr>
<tr>
<td><strong>Methods</strong></td>
<td colspan="2">GET</td>
</tr>
<tr>
<td><strong>Required request headers</strong></td>
<td colspan="2">User-Agent: CustomApiCall/2</td>
</tr>
<tr>
<td><strong>URI parameters</strong></td>
<td colspan="2">None.</td>
</tr>
<tr>
<td rowspan="6"><strong>Query parameters</strong></td>
<td>postal_code</td>
<td><AutoLink item="/api-reference/04.data-types#string">string</AutoLink></td>
</tr>
<tr>
<td>cc</td>
<td><AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink></td>
</tr>
<tr>
<td>carrier_id</td>
<td><AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink></td>
</tr>
<tr>
<td>distance</td>
<td><AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink></td>
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
<td><strong>Request body</strong></td>
<td colspan="2">None.</td>
</tr>
<tr>
<td rowspan="2"><strong>Response</strong></td>
<td colspan="2">HTTP/1.1 200 OK</td>
</tr>
<tr>
<td colspan="2">Content-Type: application/json;charset=utf-8</td>
</tr>
<tr>
<td><strong>Response body</strong></td>
<td colspan="2">array of drop off point objects</td>
</tr>
</tbody>
</table>
<h3 id="_12-a-3" tabindex="-1"><a class="header-anchor" href="#_12-a-3" aria-hidden="true">#</a> 12.A.3 Parameters</h3>
<p><strong>postal_code</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#string">string</AutoLink><br>
Required: yes, unless longitude and latitude are used<br>
The postal code for which to fetch drop off points in the area.</p>
<p><strong>cc</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#country_code">country_code</AutoLink><br>
Required: no<br>
The country code for which to fetch the drop-off points. This endpoint can only
be used in the Netherlands (cc=NL).</p>
<p><strong>carrier_id</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#carrier">carrier</AutoLink><br>
Required: no</p>
<DataType type="carrier" name="postnl" />
, <DataType type="carrier" name="instabox" />,
and <DataType type="carrier" name="ups" /> are available.
<p><strong>distance</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#integer">integer</AutoLink><br>
Required: no<br>
Provide the radius in kilometers for which you want to find drop off points. The
default distance differs by carrier.</p>
<p><strong>latitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: no<br>
This provides the ability to find drop off points by coordinates. Should be used
together with longitude.</p>
<p><strong>longitude</strong><br>
Data type: <AutoLink item="/api-reference/04.data-types#coordinates">coordinates</AutoLink><br>
Required: no<br>
This provides the ability to find drop off points by coordinates. Should be used
together with latitude.</p>
<h3 id="_12-a-4" tabindex="-1"><a class="header-anchor" href="#_12-a-4" aria-hidden="true">#</a> 12.A.4 Examples</h3>
<DetailsExpand tag="h4" title="Get drop off points for 2132JE for Instabox"><p><strong>Request</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET https://api.myparcel.nl/delivery_options?carrier_id=5&amp;postal_code=2132JE HTTP/1.1
User-Agent: CustomApiCall/2
accept: application/json;charset=utf-8
</code></pre></div><p><strong>Response</strong></p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"drop_off_points"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"location_code"</span><span class="token operator">:</span> <span class="token string">"e9149b66-7bee-439b-bab0-7a5d92ddc519"</span><span class="token punctuation">,</span>
        <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Instabox"</span><span class="token punctuation">,</span>
        <span class="token property">"cc"</span><span class="token operator">:</span> <span class="token string">"NL"</span><span class="token punctuation">,</span>
        <span class="token property">"state"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Hoofddorp"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"2132WV"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"Diamantlaan"</span><span class="token punctuation">,</span>
        <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"77"</span><span class="token punctuation">,</span>
        <span class="token property">"number_suffix"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"reference"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"longitude"</span><span class="token operator">:</span> <span class="token number">4.68156004</span><span class="token punctuation">,</span>
        <span class="token property">"latitude"</span><span class="token operator">:</span> <span class="token number">52.29063034</span><span class="token punctuation">,</span>
        <span class="token property">"available_days"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token number">6</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"cut_off_time"</span><span class="token operator">:</span> <span class="token string">"10:00"</span><span class="token punctuation">,</span>
        <span class="token property">"carrier_id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token number">2076</span><span class="token punctuation">,</span>
        <span class="token property">"occupancy"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"occupancy_today"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"default_drop_off_point"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"opening_hours"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></DetailsExpand></template>
