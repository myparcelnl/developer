import{K as n}from"./app.f2c9b6df.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<p>Start by creating an <code>OrderCollection</code> and setting your API key:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Collection<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>OrderCollection</span><span class="token punctuation">;</span>

<span class="token variable">$orderCollection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OrderCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api_key_from_backoffice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Define the billing and shipping addresses of the order with the <code>Recipient</code> class.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Recipient</span><span class="token punctuation">;</span>

<span class="token variable">$address</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Recipient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCompany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MyParcel&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Ms. Parcel&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ms@myparcel.nl&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPhone</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;0233030315&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Note: This field includes house number and number suffix.</span>
    <span class="token operator">-&gt;</span><span class="token function">setStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Antareslaan 31&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2132JE&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hoofddorp&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCc</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Create an <code>Order</code>:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>

<span class="token variable">$order</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// The unique identifier of the order in your webshop.</span>
    <span class="token operator">-&gt;</span><span class="token function">setExternalIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;set_external_identifier&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Shipping address of the customer.</span>
    <span class="token operator">-&gt;</span><span class="token function">setRecipient</span><span class="token punctuation">(</span><span class="token variable">$shippingAddress</span><span class="token punctuation">)</span>
    <span class="token comment">// Invoice/billing address of the customer.</span>
    <span class="token operator">-&gt;</span><span class="token function">setInvoiceAddress</span><span class="token punctuation">(</span><span class="token variable">$billingAddress</span><span class="token punctuation">)</span>
    <span class="token comment">// The delivery options. Must be an instance of AbstractDeliveryOptionsAdapter.</span>
    <span class="token operator">-&gt;</span><span class="token function">setDeliveryOptions</span><span class="token punctuation">(</span><span class="token variable">$deliveryOptions</span><span class="token punctuation">)</span>
    <span class="token comment">// The date when the order was placed. Can be a DateTime object or a string in Y-M-d H:i:s format.</span>
    <span class="token operator">-&gt;</span><span class="token function">setOrderDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>To create order lines, you&#39;ll probably want to loop over the order lines from the order in your webshop. Every Order should contain one or more order lines.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>OrderLine</span><span class="token punctuation">;</span>

<span class="token variable">$orderLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OrderLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// Full price in cents, regardless of quantity, excluding VAT.</span>
    <span class="token operator">-&gt;</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">1972</span><span class="token punctuation">)</span>
    <span class="token comment">// Full price in cents, regardless of quantity, including VAT.</span>
    <span class="token operator">-&gt;</span><span class="token function">setPriceAfterVat</span><span class="token punctuation">(</span><span class="token number">2495</span><span class="token punctuation">)</span>
    <span class="token comment">// VAT in cents.</span>
    <span class="token operator">-&gt;</span><span class="token function">setVat</span><span class="token punctuation">(</span><span class="token number">523</span><span class="token punctuation">)</span>
    <span class="token comment">// Amount of Products in this OrderLine.</span>
    <span class="token operator">-&gt;</span><span class="token function">setQuantity</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token comment">// Arbitrary key/value instructions. Currently unused.</span>
    <span class="token operator">-&gt;</span><span class="token function">setInstructions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;wrapping&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;the blue one with kittens on it&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>An order line stores its product data in <code>Product</code>. You can set product data in two different ways:</p><p>By getting the <code>Product</code> and setting properties on there. When an <code>OrderLine</code> is created an empty <code>Product</code> is always created:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$orderLine</span><span class="token operator">-&gt;</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token comment">// Product name.</span>
    <span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Long Sleeved Button Up Shirt&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Additional product description.</span>
    <span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;White and blue&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Stock Keeping Unit of the product.</span>
    <span class="token operator">-&gt;</span><span class="token function">setSku</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MYPA-0012345&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// The unique identifier of the product in your webshop software.</span>
    <span class="token operator">-&gt;</span><span class="token function">setExternalIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;#0001394&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Weight in grams</span>
    <span class="token operator">-&gt;</span><span class="token function">setWeight</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// Height in millimeters</span>
    <span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// Length in millimeters</span>
    <span class="token operator">-&gt;</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// Width in millimeters</span>
    <span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Or by creating a <code>Product</code> separately and using <code>OrderLine::setProduct()</code>.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>Product</span><span class="token punctuation">;</span>

<span class="token variable">$product</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// You can use the same setters from the example above.</span>

<span class="token variable">$orderLine</span><span class="token operator">-&gt;</span><span class="token function">setProduct</span><span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Finally, add the created OrderLine to the order:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$order</span><span class="token operator">-&gt;</span><span class="token function">getOrderLines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token variable">$orderLine</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>And add the order to the OrderCollection</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$orderCollection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token variable">$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>When the order is complete, save it to our API by using the <code>save</code> method.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$savedOrderCollection</span> <span class="token operator">=</span> <span class="token variable">$orderCollection</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full example</h5><div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Collection<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>OrderCollection</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Fulfilment<span class="token punctuation">\\</span>OrderLine</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Recipient</span><span class="token punctuation">;</span>

<span class="token variable">$orderCollection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OrderCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api_key_from_backoffice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$customerAddress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Recipient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCompany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MyParcel&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Ms. Parcel&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ms@myparcel.nl&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPhone</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;0233030315&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Antareslaan 31&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2132JE&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hoofddorp&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setCc</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$order</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setExternalIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;set_external_identifier&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setFulfilmentPartnerIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;set_fulfilment_partner_identifier&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setRecipient</span><span class="token punctuation">(</span><span class="token variable">$customerAddress</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setInvoiceAddress</span><span class="token punctuation">(</span><span class="token variable">$customerAddress</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setDeliveryOptions</span><span class="token punctuation">(</span><span class="token variable">$deliveryOptions</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setOrderDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$orderLines</span> <span class="token keyword">as</span> <span class="token variable">$orderLineData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$orderLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OrderLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">1972</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setPriceAfterVat</span><span class="token punctuation">(</span><span class="token number">2495</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setVat</span><span class="token punctuation">(</span><span class="token number">523</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setQuantity</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setInstructions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;wrapping&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;the blue one with kittens on it&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token variable">$orderLine</span><span class="token operator">-&gt;</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setWeight</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$order</span><span class="token operator">-&gt;</span><span class="token function">getOrderLines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token variable">$orderLine</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$orderCollection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token variable">$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$savedOrderCollection</span> <span class="token operator">=</span> <span class="token variable">$orderCollection</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,21);function p(e,o){return t}var u=s(a,[["render",p],["__file","11.orders.html.vue"]]);export{u as default};