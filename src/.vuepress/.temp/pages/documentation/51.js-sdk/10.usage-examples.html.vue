<template><h1 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a> Usage examples</h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2>
<p>The client is Promise-based, so you can use <code>async/await</code>, or <code>Promise.then</code>.</p>
<p>First, instantiate an SDK and pass the endpoints you want to use.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPrivateSdk<span class="token punctuation">,</span> PostShipments <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@myparcel/sdk'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> clientConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">'bearer '</span> <span class="token operator">+</span> <span class="token constant">MY_BASE_64_ENCODED_API_KEY</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sdk <span class="token operator">=</span> <span class="token function">createPrivateSdk</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FetchClient</span><span class="token punctuation">(</span>clientConfig<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">PostShipments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>Then call the endpoint. There are constants available in our SDK for data like
carriers, package types, delivery types and more.
See <AutoLink item="#using-constants">constants</AutoLink></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> sdk<span class="token punctuation">.</span><span class="token function">postShipments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">carrier</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">package_type</span><span class="token operator">:</span> <span class="token string">'package'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">recipient</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cc</span><span class="token operator">:</span> <span class="token string">'NL'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'Hoofddorp'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token string">'Ms. Parcel'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">'Antareslaan 31'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 123456 ] (The ID of the shipment that was just created)</span>
</code></pre></div><h2 id="using-constants" tabindex="-1"><a class="header-anchor" href="#using-constants" aria-hidden="true">#</a> Using constants</h2>
<p>Our SDK exposes some constants to make working with our API easier.</p>
<ul>
<li>Carriers<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CARRIERS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@myparcelnl/sdk'</span><span class="token punctuation">;</span>

<span class="token constant">CARRIERS</span><span class="token punctuation">.</span><span class="token constant">POSTNL_NAME</span> <span class="token comment">// "postnl"</span>
</code></pre></div></li>
<li><strong>Package types:</strong> Contains all package types' names and IDs.<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PACKAGE_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@myparcelnl/sdk'</span><span class="token punctuation">;</span>

<span class="token constant">PACKAGE_TYPES</span><span class="token punctuation">.</span><span class="token constant">DIGITAL_STAMP_NAME</span> <span class="token comment">// "digital_stamp"</span>
<span class="token constant">PACKAGE_TYPES</span><span class="token punctuation">.</span><span class="token constant">PACKAGE_ID</span> <span class="token comment">// 1</span>
<span class="token constant">PACKAGE_TYPES</span><span class="token punctuation">.</span><span class="token constant">LETTER</span> <span class="token comment">// { ID: 3, NAME: "letter" }</span>
<span class="token comment">// etc</span>
</code></pre></div></li>
<li><strong>Delivery types</strong><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DELIVERY_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@myparcelnl/sdk'</span><span class="token punctuation">;</span>

<span class="token constant">DELIVERY_TYPES</span><span class="token punctuation">.</span><span class="token constant">STANDARD_NAME</span> <span class="token comment">// "standard"</span>
<span class="token constant">DELIVERY_TYPES</span><span class="token punctuation">.</span><span class="token constant">PICKUP_ID</span> <span class="token comment">// 4</span>
<span class="token constant">DELIVERY_TYPES</span><span class="token punctuation">.</span><span class="token constant">MORNING</span> <span class="token comment">// { ID: 1, NAME: "morning" }</span>
<span class="token comment">// etc</span>
</code></pre></div></li>
<li><strong>Countries:</strong> Contains constants for all countries, by name.<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">COUNTRIES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@myparcelnl/sdk'</span><span class="token punctuation">;</span>

<span class="token constant">COUNTRIES</span><span class="token punctuation">.</span><span class="token constant">NETHERLANDS</span> <span class="token comment">// "NL"</span>
<span class="token constant">COUNTRIES</span><span class="token punctuation">.</span><span class="token constant">GERMANY</span> <span class="token comment">// "DE"</span>
<span class="token comment">// etc</span>
</code></pre></div></li>
</ul>
<h2 id="creating-a-new-endpoint" tabindex="-1"><a class="header-anchor" href="#creating-a-new-endpoint" aria-hidden="true">#</a> Creating a new endpoint</h2>
<p>To create a new endpoint, you can extend either <code>AbstractPrivateEndpoint</code>
or <code>AbstractPublicEndpoint</code> and fill in the derived class as needed.</p>
<p>Feel free to add open a pull request to add it to our repository!
See [CONTRIBUTING.md].</p>
<h2 id="creating-a-new-client" tabindex="-1"><a class="header-anchor" href="#creating-a-new-client" aria-hidden="true">#</a> Creating a new client</h2>
<p>In this example we're creating an Axios client.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">AxiosClient</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractClient</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">endpoint<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> endpoint<span class="token punctuation">.</span>method<span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createUrl</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token operator">...</span>endpoint<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> e<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now use the new client with an SDK instance:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sdk <span class="token operator">=</span> <span class="token function">createPublicSdk</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AxiosClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">GetCarriers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> carriers <span class="token operator">=</span> <span class="token keyword">await</span> sdk<span class="token punctuation">.</span><span class="token function">getCarriers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>carriers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ { "id": 1, "name": "postnl", (etc...)</span>
</code></pre></div></template>
