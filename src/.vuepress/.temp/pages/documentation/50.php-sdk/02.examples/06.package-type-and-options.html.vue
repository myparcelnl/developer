<template><p>Set package type with <code>setPackageType($type)</code>. Retrieve it after
with <code>getPackageType()</code>. For more details on the different types of
packages: <ApiLink to="6_A_1" /></p>
<h2 id="package-types" tabindex="-1"><a class="header-anchor" href="#package-types" aria-hidden="true">#</a> Package types</h2>
<h3 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h3>
<p><code>id: 1</code></p>
<p>This is the default package type. It must be explicitly set to allow enabling of
further shipment options. It's available for NL, EU and global shipments.</p>
<h3 id="mailbox-package" tabindex="-1"><a class="header-anchor" href="#mailbox-package" aria-hidden="true">#</a> Mailbox package</h3>
<p><code>id: 2</code></p>
<p>This package type is only available for NL shipments that fit into a mailbox. It
does not support additional options.</p>
<Message title="" type="note"><p>If you still make the request with additional options, bear in mind that you may
pay more than the actual shipment costs!</p>
</Message><h3 id="letter" tabindex="-1"><a class="header-anchor" href="#letter" aria-hidden="true">#</a> Letter</h3>
<p><code>id: 3</code></p>
<p>This package type is available for NL, EU and global shipments. The label for
this shipment is unpaid meaning that you will need to pay the postal
office/courier to send this letter/package. Therefore, it does not support
additional options.</p>
<h3 id="digital-stamp" tabindex="-1"><a class="header-anchor" href="#digital-stamp" aria-hidden="true">#</a> Digital stamp</h3>
<p><code>id: 4</code></p>
<p>This package type is only available for NL shipments and does not support any
additional options. Its price is calculated using the package weight, which is
set using <code>setPhysicalProperties()</code>.</p>
<Message title="" type="note"><p>This type of shipment will be billed the moment it is printed. Read
more: <ApiLink to="6_A_1" /></p>
</Message><h2 id="package-options" tabindex="-1"><a class="header-anchor" href="#package-options" aria-hidden="true">#</a> Package options</h2>
<p>These options are only available for <DataType type="package_type" id="1" />.</p>
<p>Available options:</p>
<ul>
<li><code>only_recipient</code>: Deliver the package only at address of the intended
recipient. This option is required for Morning and Evening delivery types.
<ul>
<li>Set: <code>setOnlyRecipient(true)</code></li>
<li>Get: <code>isOnlyRecipient()</code></li>
</ul>
</li>
<li><code>signature</code>: Recipient must sign for the package. This option is required for
Pickup delivery type.
<ul>
<li>Set: <code>setSignature(true)</code></li>
<li>Get: <code>isSignature()</code></li>
</ul>
</li>
<li><code>return</code>: Return the package to the sender when the recipient is not home.
<ul>
<li>Set: <code>setReturn(true)</code></li>
<li>Get: <code>isReturn()</code></li>
</ul>
</li>
<li><code>large_format</code>: This option must be specified if the dimensions of the package
are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from
the carrier indicate that this package is large format, and it has not been
specified then it will be added to the shipment in the billing process. This
option is also available for EU shipments.
<ul>
<li>Set: <code>setLargeFormat(true)</code></li>
<li>Get: <code>isLargeFormat()</code></li>
</ul>
</li>
<li><code>age_check</code>: The Customer/Consumer must sign for the package and only receive
it when he is at least 18 years.
<ul>
<li>Set: <code>setAgeCheck(true)</code></li>
<li>Get: <code>hasAgeCheck()</code></li>
</ul>
</li>
<li><code>insurance</code>: This option allows a shipment to be insured up to certain amount.
NL shipments can be insured for € 5000,–. EU shipments must be insured for
€ 500,–. Global shipments must be insured for € 200,–. The following
shipment options are mandatory when insuring an NL shipment: <code>only_recipient</code>
and <code>signature</code>.
<ul>
<li>Set: <code>setInsurance(250)</code> (amount in EUR)</li>
<li>Get: <code>getInsurance()</code></li>
</ul>
</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<DataType type="package_type" name="package" /> with all shipment options:
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setPackageType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// Other options...</span>
    <span class="token operator">-></span><span class="token function">setOnlyRecipient</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setSignature</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setReturn</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setLargeFormat</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setAgeCheck</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setInsurance</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><DataType type="package_type" name="digital_stamp" />, with mandatory weight:
<div class="language-php ext-php"><pre v-pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-></span><span class="token function">setPackageType</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token comment">// weight in grams (required)</span>
    <span class="token operator">-></span><span class="token function">setPhysicalProperties</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'weight'</span> <span class="token operator">=></span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>More information: <ApiLink to="6_A_3" /></p>
</template>
