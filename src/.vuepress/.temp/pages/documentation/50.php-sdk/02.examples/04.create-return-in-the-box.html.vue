<template><p>This example creates a consignment and a related return consignment by adding
them to one <code>MyParcelCollection()</code> and then creates and downloads a single PDF
file with both labels.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token comment">// Create the collection before the loop</span>
<span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyParcelCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Loop through your shipments, adding each to the same MyParcelCollection</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$yourShipments</span> <span class="token keyword">as</span> <span class="token variable">$yourShipment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name static-context">ConsignmentFactory</span><span class="token operator">::</span><span class="token function">createByCarrierId</span><span class="token punctuation">(</span><span class="token class-name static-context">PostNLConsignment</span><span class="token operator">::</span><span class="token constant">CARRIER_ID</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api_key_from_backoffice'</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setCountry</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'cc'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'person'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setCompany</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'company'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setFullStreet</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'full_street_input'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'postal_code'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'city'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">setLabelDescription</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'label_description'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token comment">// Add the consignment to the collection and generate the return consignment</span>
    <span class="token comment">// When there are no options set, the options from the parent consignment are used</span>
    <span class="token variable">$consignments</span>
        <span class="token operator">-></span><span class="token function">addConsignment</span><span class="token punctuation">(</span><span class="token variable">$consignment</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">generateReturnConsignments</span><span class="token punctuation">(</span>
            <span class="token constant boolean">false</span><span class="token punctuation">,</span>
            <span class="token keyword">function</span> <span class="token punctuation">(</span>
                <span class="token class-name type-declaration">AbstractConsignment</span> <span class="token variable">$returnConsignment</span><span class="token punctuation">,</span>
                <span class="token class-name type-declaration">AbstractConsignment</span> <span class="token variable">$parent</span>
            <span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">AbstractConsignment</span> <span class="token punctuation">{</span>
                <span class="token variable">$returnConsignment</span><span class="token operator">-></span><span class="token function">setLabelDescription</span><span class="token punctuation">(</span>
                    <span class="token string single-quoted-string">'Return: '</span> <span class="token operator">.</span> <span class="token variable">$parent</span><span class="token operator">-></span><span class="token function">getLabelDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span>
                    <span class="token string single-quoted-string">' This label is valid until: '</span> <span class="token operator">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"d-m-Y"</span><span class="token punctuation">,</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"+ 28 days"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$returnConsignment</span><span class="token operator">-></span><span class="token function">setSignature</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">return</span> <span class="token variable">$returnConsignment</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
