<template><h2 id="myparcelcollection" tabindex="-1"><a class="header-anchor" href="#myparcelcollection" aria-hidden="true">#</a> MyParcelCollection</h2>
<p>Stores all consignments to communicate with the MyParcel API. MyParcelCollection
also contains almost <AutoLink item="https://laravel.com/docs/5.7/collections">all methods</AutoLink>
from Laravel Collections. If you use Laravel it also
extends <code>\Illuminate\Support\Collection</code>.</p>
<p><code>MyParcelNL/Sdk/src/Helper/MyParcelCollection.php</code></p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code>    <span class="token comment">// Add consignment to collection</span>
    <span class="token operator">-></span><span class="token function">addConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token comment">// Generate the return consignments based on already added consignments</span>
    <span class="token operator">-></span><span class="token function">generateReturnConsignments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

    <span class="token comment">// Get consignments from the collection</span>
    <span class="token operator">-></span><span class="token function">getConsignments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getConsignmentByApiId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getConsignmentsByReferenceIdentifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Clear the collection</span>
    <span class="token operator">-></span><span class="token function">clearConsignmentsCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Create or delete concept shipments in the MyParcel Backoffice</span>
    <span class="token operator">-></span><span class="token function">createConcepts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">deleteConcepts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token operator">-></span><span class="token function">getOneConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getRequestBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Send return label to customer. The customer can pay and download the label</span>
    <span class="token operator">-></span><span class="token function">sendReturnLabelMails</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Set id and run this function to update all the information about this shipment </span>
    <span class="token operator">-></span><span class="token function">setLatestData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    
    <span class="token operator">-></span><span class="token function">setLinkOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getLinkOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Refer to </span>
    <span class="token operator">-></span><span class="token function">setPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">downloadPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// To give us insight into which CMS you're connecting from, you should send a User-Agent. </span>
    <span class="token comment">// If you're using a known CMS it's required. </span>
    <span class="token comment">// You must send the name of the CMS (required) followed by a version number (optional).</span>
    <span class="token operator">-></span><span class="token function">setUserAgents</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'name_of_cms'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'1.0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getUserAgent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></template>
