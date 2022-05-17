import{r as t,f as e,h as s,z as o,w as p,F as c,e as n,K as l,o as i}from"./app.d77be46b.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=s("h2",{id:"myparcelcollection",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#myparcelcollection","aria-hidden":"true"},"#"),n(" MyParcelCollection")],-1),m=n("Stores all consignments to communicate with the MyParcel API. MyParcelCollection also contains almost "),d=n("all methods"),g=n(" from Laravel Collections. If you use Laravel it also extends "),f=s("code",null,"\\Illuminate\\Support\\Collection",-1),h=n("."),_=l(`<p><code>MyParcelNL/Sdk/src/Helper/MyParcelCollection.php</code></p><div class="language-php ext-php"><pre class="language-php"><code>    <span class="token comment">// Add consignment to collection</span>
    <span class="token operator">-&gt;</span><span class="token function">addConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token comment">// Generate the return consignments based on already added consignments</span>
    <span class="token operator">-&gt;</span><span class="token function">generateReturnConsignments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

    <span class="token comment">// Get consignments from the collection</span>
    <span class="token operator">-&gt;</span><span class="token function">getConsignments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getConsignmentByApiId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getConsignmentsByReferenceIdentifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Clear the collection</span>
    <span class="token operator">-&gt;</span><span class="token function">clearConsignmentsCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Create or delete concept shipments in the MyParcel Backoffice</span>
    <span class="token operator">-&gt;</span><span class="token function">createConcepts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">deleteConcepts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token operator">-&gt;</span><span class="token function">getOneConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getRequestBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Send return label to customer. The customer can pay and download the label</span>
    <span class="token operator">-&gt;</span><span class="token function">sendReturnLabelMails</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Set id and run this function to update all the information about this shipment </span>
    <span class="token operator">-&gt;</span><span class="token function">setLatestData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    
    <span class="token operator">-&gt;</span><span class="token function">setLinkOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getLinkOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Refer to </span>
    <span class="token operator">-&gt;</span><span class="token function">setPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">downloadPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// To give us insight into which CMS you&#39;re connecting from, you should send a User-Agent. </span>
    <span class="token comment">// If you&#39;re using a known CMS it&#39;s required. </span>
    <span class="token comment">// You must send the name of the CMS (required) followed by a version number (optional).</span>
    <span class="token operator">-&gt;</span><span class="token function">setUserAgents</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name_of_cms&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;1.0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getUserAgent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,2);function C(y,L){const a=t("AutoLink");return i(),e(c,null,[k,s("p",null,[m,o(a,{item:"https://laravel.com/docs/5.7/collections"},{default:p(()=>[d]),_:1}),g,f,h]),_],64)}var M=u(r,[["render",C],["__file","02.helpers.html.vue"]]);export{M as default};
