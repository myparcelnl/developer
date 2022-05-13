<template><p>After creating consignments, it is often necessary to pick up a specific
consignment:</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token class-name static-context">MyParcelCollection</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">432345</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Instead of <code>find()</code> you can also use <code>findMany()</code>, <code>findByReferenceIdentifier()</code>
or <code>findManyByReferenceIdentifier()</code>.</p>
<p>For <code>reference identifier</code> you can use a <code>*</code> to search smarter:</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token class-name static-context">MyParcelCollection</span><span class="token operator">::</span><span class="token function">findByReferenceIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'order-14*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></template>
