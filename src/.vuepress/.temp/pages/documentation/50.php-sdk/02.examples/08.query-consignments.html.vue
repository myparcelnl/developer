<template><p>You can search and filter consignments by certain values:</p>
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token class-name static-context">MyParcelCollection</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">'api_key_from_backoffice'</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'q'</span>                    <span class="token operator">=></span> <span class="token string single-quoted-string">'Niels'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'reference_identifier'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'order-1234'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'status'</span>               <span class="token operator">=></span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'from'</span>                 <span class="token operator">=></span> <span class="token string single-quoted-string">'2020-01-01 00:00:00'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'to'</span>                   <span class="token operator">=></span> <span class="token string single-quoted-string">'2020-02-01 00:00:00'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'page'</span>                 <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'size'</span>                 <span class="token operator">=></span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'order'</span>                <span class="token operator">=></span> <span class="token string single-quoted-string">'DESC'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'package_type'</span>         <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'region'</span>               <span class="token operator">=></span> <span class="token string single-quoted-string">'NL;EU'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'dropoff_today'</span>        <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>For <code>q</code> and <code>reference identifier</code> you can use <code>*</code> (wildcards) to search
smarter.</p>
<Message title="" type="tip"><p>If the 2nd parameter is an object, then public properties will be used. If you
query in many ways, creating a separate class can provide a clean solution.</p>
</Message><p>For more information, see <ApiLink to="6_E" />.</p>
</template>
