<template><p>You can use <code>DeliveryOptionsAdapterFactory</code> if you use the following code in
your
checkout: <AutoLink item="https://github.com/myparcelnl/delivery-options">Delivery Options</AutoLink> You
can use these adapters to receive the options anywhere in your code in a
consistent way. If you also have the options in a different format, you can also
make your own adapter.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\</span>Sdk<span class="token punctuation">\</span>src<span class="token punctuation">\</span>Adapter<span class="token punctuation">\</span>DeliveryOptions<span class="token punctuation">\</span>DeliveryOptionsFromOrderAdapter</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\</span>Sdk<span class="token punctuation">\</span>src<span class="token punctuation">\</span>Factory<span class="token punctuation">\</span>DeliveryOptionsAdapterFactory</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create new instance from known json</span>
	<span class="token variable">$deliveryOptions</span> <span class="token operator">=</span> <span class="token class-name static-context">DeliveryOptionsAdapterFactory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$dataFromCheckout</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BadMethodCallException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create new instance from your own data</span>
	<span class="token variable">$deliveryOptions</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeliveryOptionsFromOrderAdapter</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span> <span class="token variable">$meta</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Adapters are independent of consignments. It is therefore your responsibility to
transform an adapter into a consignment.</p>
</template>
