<template><p>Instabox requires a drop-off point to be added to each consignment. Get
available drop-off points from the webservice. It will return an indexed array
holding data from drop off points near the supplied postal code.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$dropOffPoints</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DropOffPointWebService</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CarrierInstabox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">-></span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api_key_from_backoffice'</span><span class="token punctuation">)</span>
      <span class="token operator">-></span><span class="token function">getDropOffPoints</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'valid_dutch_postal_code'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can use these to select a preferred drop-off point. The <code>location_code</code>
field provides a unique identifier.</p>
<p>Please note:</p>
<ul>
<li>The list for a given postal code may be empty when there are no drop off
points available in the vicinity.</li>
<li>The user may have indicated a default drop off point in the backoffice,
check <code>default_drop_off_point</code> field for each drop off point in the array.</li>
</ul>
<p>Create a DropOffPoint using the relevant fields returned for the selected
drop-off point. Then set it on the consignment, which should be an otherwise
valid Instabox consignment.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$dropOffPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DropOffPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setBoxNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">// unused for Dutch addresses</span>
    <span class="token operator">-></span><span class="token function">setCc</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'NL'</span><span class="token punctuation">)</span>                             <span class="token comment">// country code (field: cc) returned for the drop-off point</span>
    <span class="token operator">-></span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Amsterdam'</span><span class="token punctuation">)</span>                    <span class="token comment">// city (field: city)</span>
    <span class="token operator">-></span><span class="token function">setLocationCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'location_code'</span><span class="token punctuation">)</span>        <span class="token comment">// field: location_code holds a unique id for the drop-off point</span>
    <span class="token operator">-></span><span class="token function">setLocationName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'location_name'</span><span class="token punctuation">)</span>        <span class="token comment">// name of the drop-off point (field: location_name)</span>
    <span class="token operator">-></span><span class="token function">setStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Plein 1945'</span><span class="token punctuation">)</span>                 <span class="token comment">// street (field: street)</span>
    <span class="token operator">-></span><span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span>                           <span class="token comment">// number (field: number)</span>
    <span class="token operator">-></span><span class="token function">setNumberSuffix</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'b'</span><span class="token punctuation">)</span>                    <span class="token comment">// number suffix (field: number_suffix)</span>
    <span class="token operator">-></span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'2231JE'</span><span class="token punctuation">)</span>                 <span class="token comment">// postal code (field: postal_code)</span>
    <span class="token operator">-></span><span class="token function">setRegion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                             <span class="token comment">// unused for Dutch addresses</span>
    <span class="token operator">-></span><span class="token function">setRetailNetworkId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'retail_network_id'</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                             <span class="token comment">// unused for Dutch addresses</span>

<span class="token variable">$consignment</span><span class="token operator">-></span><span class="token function">setDropOffPoint</span><span class="token punctuation">(</span><span class="token variable">$dropOffPoint</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The consignment can now be created, refer
to <RouterLink to="/documentation/50.php-sdk/02.examples/01.create-consignment.html">create a consignment</RouterLink>.</p>
</template>
