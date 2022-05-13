<template><p>Create and directly download PDF with <code>setPdfOfLabels($position)</code>
where <code>$positions</code> is the <RouterLink to="/documentation/50.php-sdk/02.examples/05.label-format-and-position.html">label position</RouterLink>
value.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$consignments</span>
    <span class="token operator">-></span><span class="token function">setPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Opens pdf "inline" by default, pass false as argument to download file instead</span>
    <span class="token operator">-></span><span class="token function">downloadPdfOfLabels</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>Create and echo download link to PDF with <code>setLinkOfLabels($position)</code>
where <code>$positions</code> is the <RouterLink to="/documentation/50.php-sdk/02.examples/05.label-format-and-position.html">label position</RouterLink>
value. If you want more than 25 labels in one response, <code>setLinkOfLabels</code> will
automatically use a different endpoint. At that point, it is likely that the PDF
is not ready yet. You should check periodically if the PDF is ready for
download.</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token keyword">echo</span> <span class="token variable">$consignments</span> 
    <span class="token operator">-></span><span class="token function">setLinkOfLabels</span><span class="token punctuation">(</span><span class="token variable">$positions</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">getLinkOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>If you want to download a label at a later time, you can also use the following
to fill the collection:</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token class-name static-context">MyParcelCollection</span><span class="token operator">::</span><span class="token function">findByReferenceIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'order-146'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'api_key_from_backoffice'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$consignments</span>
    <span class="token operator">-></span><span class="token function">setPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">downloadPdfOfLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Instead of <code>findByReferenceIdentifier()</code> you can also
use <code>findManyByReferenceIdentifier()</code>, <code>find()</code> or <code>findMany()</code>.</p>
<p>More information: <ApiLink to="6_F" /></p>
</template>
