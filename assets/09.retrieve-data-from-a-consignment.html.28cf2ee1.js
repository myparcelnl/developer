import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,b as a,a as p,w as c,d as n,e as l,r as i}from"./app.89e30d60.js";const r={},u=a("h2",{id:"retrieve-data-from-a-consignment",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#retrieve-data-from-a-consignment","aria-hidden":"true",tabindex:"-1"},"#"),n(" Retrieve data from a consignment")],-1),d=n("Most attributes that have a "),k=a("code",null,"set<Attribute>()",-1),g=n(" method also have a "),h=a("code",null,"get<Attribute>()",-1),m=n(" method to retrieve the data. View "),f=n("all methods"),b=n(" for consignments here."),_=l(`<div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getFullStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// etc...</span>
</code></pre></div><h5 id="get-status" tabindex="-1"><a class="header-anchor" href="#get-status" aria-hidden="true" tabindex="-1">#</a> Get status</h5><p>After <code>setPdfOfLabels()</code>, <code>setLinkOfLabels()</code> and <code>createConcepts()</code> you can get the status.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$status</span> <span class="token operator">=</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="get-barcode" tabindex="-1"><a class="header-anchor" href="#get-barcode" aria-hidden="true" tabindex="-1">#</a> Get barcode</h5><p>The barcode is available after <code>setPdfOfLabels()</code> and <code>setLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$barcode</span> <span class="token operator">=</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getBarcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="get-track-trace-url" tabindex="-1"><a class="header-anchor" href="#get-track-trace-url" aria-hidden="true" tabindex="-1">#</a> Get Track &amp; Trace URL</h5><p>The Track &amp; Trace URL is available after <code>downloadPdfOfLabels()</code> and <code>getLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Consignment<span class="token punctuation">\\</span>PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getBarcodeURL</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;3SMYPA123456789&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2231JE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Barcode , Postal code, Country</span>
</code></pre></div>`,10);function v(x,L){const s=i("RouterLink");return t(),o("div",null,[u,a("p",null,[d,k,g,h,m,p(s,{to:"/documentation/50.php-sdk/03.reference/01.models.html#postnlconsignment",tabindex:"-1"},{default:c(()=>[f]),_:1}),b]),_])}var $=e(r,[["render",v],["__file","09.retrieve-data-from-a-consignment.html.vue"]]);export{$ as default};