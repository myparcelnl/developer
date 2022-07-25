import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,e as r}from"./app.e0bc0234.js";const s={},i=r(`<p>Start by creating an <code>OrderCollection</code> and setting your API key:</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Collection\\Fulfilment\\OrderCollection;

$orderCollection = (new OrderCollection())
    -&gt;setApiKey(&#39;api_key_from_backoffice&#39;);
</code></pre></div><p>Define the billing and shipping addresses of the order with the <code>Recipient</code> class.</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Model\\Recipient;

$address = (new Recipient())
    -&gt;setCompany(&#39;MyParcel&#39;)
    -&gt;setPerson(&#39;Ms. Parcel&#39;)
    -&gt;setEmail(&#39;ms@myparcel.nl&#39;)
    -&gt;setPhone(&#39;0233030315&#39;)
    // Note: This field includes house number and number suffix.
    -&gt;setStreet(&#39;Antareslaan 31&#39;)
    -&gt;setPostalCode(&#39;2132JE&#39;)
    -&gt;setCity(&#39;Hoofddorp&#39;)
    -&gt;setCc(&#39;NL&#39;);
</code></pre></div><p>Create an <code>Order</code>:</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Model\\Fulfilment\\Order;

$order = (new Order())
    // The unique identifier of the order in your webshop.
    -&gt;setExternalIdentifier(&#39;set_external_identifier&#39;)
    // Shipping address of the customer.
    -&gt;setRecipient($shippingAddress)
    // Invoice/billing address of the customer.
    -&gt;setInvoiceAddress($billingAddress)
    // The delivery options. Must be an instance of AbstractDeliveryOptionsAdapter.
    -&gt;setDeliveryOptions($deliveryOptions)
    // The date when the order was placed. Can be a DateTime object or a string in Y-M-d H:i:s format.
    -&gt;setOrderDate(new DateTime());
</code></pre></div><p>To create order lines, you&#39;ll probably want to loop over the order lines from the order in your webshop. Every Order should contain one or more order lines.</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Model\\Fulfilment\\OrderLine;

$orderLine = (new OrderLine())
    // Full price in cents, regardless of quantity, excluding VAT.
    -&gt;setPrice(1972)
    // Full price in cents, regardless of quantity, including VAT.
    -&gt;setPriceAfterVat(2495)
    // VAT in cents.
    -&gt;setVat(523)
    // Amount of Products in this OrderLine.
    -&gt;setQuantity(3)
    // Arbitrary key/value instructions. Currently unused.
    -&gt;setInstructions([
        &#39;wrapping&#39; =&gt; &#39;the blue one with kittens on it&#39;
    ]);
</code></pre></div><p>An order line stores its product data in <code>Product</code>. You can set product data in two different ways:</p><p>By getting the <code>Product</code> and setting properties on there. When an <code>OrderLine</code> is created an empty <code>Product</code> is always created:</p><div class="language-php ext-php"><pre class="language-php"><code>$orderLine-&gt;getProduct()
     // Product name.
    -&gt;setName(&#39;Long Sleeved Button Up Shirt&#39;)
    // Additional product description.
    -&gt;setDescription(&#39;White and blue&#39;)
    // Stock Keeping Unit of the product.
    -&gt;setSku(&#39;MYPA-0012345&#39;)
    // The unique identifier of the product in your webshop software.
    -&gt;setExternalIdentifier(&#39;#0001394&#39;)
    // Weight in grams
    -&gt;setWeight(0)
    // Height in millimeters
    -&gt;setHeight(0)
    // Length in millimeters
    -&gt;setLength(0)
    // Width in millimeters
    -&gt;setWidth(0);
</code></pre></div><p>Or by creating a <code>Product</code> separately and using <code>OrderLine::setProduct()</code>.</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Model\\Fulfilment\\Product;

$product = new Product();
// You can use the same setters from the example above.

$orderLine-&gt;setProduct($product);
</code></pre></div><p>Finally, add the created OrderLine to the order:</p><div class="language-php ext-php"><pre class="language-php"><code>$order-&gt;getOrderLines()-&gt;push($orderLine);
</code></pre></div><p>And add the order to the OrderCollection</p><div class="language-php ext-php"><pre class="language-php"><code>$orderCollection-&gt;push($order);
</code></pre></div><p>When the order is complete, save it to our API by using the <code>save</code> method.</p><div class="language-php ext-php"><pre class="language-php"><code>$savedOrderCollection = $orderCollection-&gt;save();
</code></pre></div><h5 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full example</h5><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Collection\\Fulfilment\\OrderCollection;
use MyParcelNL\\Sdk\\src\\Model\\Fulfilment\\Order;
use MyParcelNL\\Sdk\\src\\Model\\Fulfilment\\OrderLine;
use MyParcelNL\\Sdk\\src\\Model\\Recipient;

$orderCollection = (new OrderCollection())
    -&gt;setApiKey(&#39;api_key_from_backoffice&#39;);

$customerAddress = (new Recipient())
    -&gt;setCompany(&#39;MyParcel&#39;)
    -&gt;setPerson(&#39;Ms. Parcel&#39;)
    -&gt;setEmail(&#39;ms@myparcel.nl&#39;)
    -&gt;setPhone(&#39;0233030315&#39;)
    -&gt;setStreet(&#39;Antareslaan 31&#39;)
    -&gt;setPostalCode(&#39;2132JE&#39;)
    -&gt;setCity(&#39;Hoofddorp&#39;)
    -&gt;setCc(&#39;NL&#39;);

$order = (new Order())
    -&gt;setExternalIdentifier(&#39;set_external_identifier&#39;)
    -&gt;setFulfilmentPartnerIdentifier(&#39;set_fulfilment_partner_identifier&#39;)
    -&gt;setRecipient($customerAddress)
    -&gt;setInvoiceAddress($customerAddress)
    -&gt;setDeliveryOptions($deliveryOptions)
    -&gt;setOrderDate(new DateTime());

foreach ($orderLines as $orderLineData) {
    $orderLine = (new OrderLine())
        -&gt;setPrice(1972)
        -&gt;setPriceAfterVat(2495)
        -&gt;setVat(523)
        -&gt;setQuantity(3)
        -&gt;setInstructions([
            &#39;wrapping&#39; =&gt; &#39;the blue one with kittens on it&#39;
        ]);
        
    $orderLine-&gt;getProduct()
        -&gt;setWeight(10)
        -&gt;setHeight(4)
        -&gt;setLength(12)
        -&gt;setWidth(100);

    $order-&gt;getOrderLines()-&gt;push($orderLine);
}

$orderCollection-&gt;push($order);

$savedOrderCollection = $orderCollection-&gt;save();
</code></pre></div>`,21),o=[i];function d(a,l){return t(),n("div",null,o)}var g=e(s,[["render",d],["__file","11.orders.html.vue"]]);export{g as default};
