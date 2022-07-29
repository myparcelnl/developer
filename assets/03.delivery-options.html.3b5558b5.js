import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as o,a,b as p,w as c,d as n,e as l,r as i}from"./app.db0a1a4d.js";const r={},u=n("You can use "),k=a("code",null,"DeliveryOptionsAdapterFactory",-1),d=n(" if you use the following code in your checkout: "),y=n("Delivery Options"),m=n(" You can use these adapters to receive the options anywhere in your code in a consistent way. If you also have the options in a different format, you can also make your own adapter."),_=l(`<div class="language-php ext-php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Adapter<span class="token punctuation">\\</span>DeliveryOptions<span class="token punctuation">\\</span>DeliveryOptionsFromOrderAdapter</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Factory<span class="token punctuation">\\</span>DeliveryOptionsAdapterFactory</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create new instance from known json</span>
	<span class="token variable">$deliveryOptions</span> <span class="token operator">=</span> <span class="token class-name static-context">DeliveryOptionsAdapterFactory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$dataFromCheckout</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BadMethodCallException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create new instance from your own data</span>
	<span class="token variable">$deliveryOptions</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeliveryOptionsFromOrderAdapter</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span> <span class="token variable">$meta</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Adapters are independent of consignments. It is therefore your responsibility to transform an adapter into a consignment.</p>`,2);function h(v,f){const s=i("AutoLink");return e(),o("div",null,[a("p",null,[u,k,d,p(s,{item:"https://github.com/myparcelnl/delivery-options"},{default:c(()=>[y]),_:1}),m]),_])}var g=t(r,[["render",h],["__file","03.delivery-options.html.vue"]]);export{g as default};