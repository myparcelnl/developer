<template><h2 id="to-the-woocommerce-plugin" tabindex="-1"><a class="header-anchor" href="#to-the-woocommerce-plugin" aria-hidden="true">#</a> To the WooCommerce plugin</h2>
<ol>
<li>Clone or download the <AutoLink item="https://github.com/myparcelnl/woocommerce">source code</AutoLink></li>
<li>If you're planning to change JavaScript or CSS code, see below section for
details.</li>
<li>Make your changes</li>
<li>Create a pull request!</li>
</ol>
<h3 id="making-javascript-or-css-changes" tabindex="-1"><a class="header-anchor" href="#making-javascript-or-css-changes" aria-hidden="true">#</a> Making JavaScript or CSS changes</h3>
<h4 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h4>
<ul>
<li><AutoLink item="https://www.docker.com/">Docker</AutoLink></li>
<li><AutoLink item="https://nodejs.org/en/">Node 16</AutoLink></li>
<li><AutoLink item="https://classic.yarnpkg.com/en/docs/install">Yarn</AutoLink></li>
</ul>
<h4 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h4>
<h5 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install dependencies</h5>
<p>Install npm dependencies</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div><h5 id="make-your-changes" tabindex="-1"><a class="header-anchor" href="#make-your-changes" aria-hidden="true">#</a> Make your changes</h5>
<ul>
<li>Please try to conform to our existing code style.</li>
</ul>
<h5 id="test-your-changes" tabindex="-1"><a class="header-anchor" href="#test-your-changes" aria-hidden="true">#</a> Test your changes</h5>
<h6 id="easiest-method" tabindex="-1"><a class="header-anchor" href="#easiest-method" aria-hidden="true">#</a> Easiest method</h6>
<p>This is only sufficient if you're running WordPress locally and your source
directory is inside your <code>wp-content</code> folder. If this is not the case, continue
to the next section.</p>
<p>Run this after every change:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre></div><p>Or run this to monitor your changes and rebuild automatically:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> serve
</code></pre></div><h6 id="if-your-wordpress-instance-is-hosted-somewhere-else" tabindex="-1"><a class="header-anchor" href="#if-your-wordpress-instance-is-hosted-somewhere-else" aria-hidden="true">#</a> If your WordPress instance is hosted somewhere else</h6>
<p>First, build all assets and puts all necessary files
into <code>woocommerce-myparcel.zip</code>.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre></div><p>Then upload this file on the plugins page of your WordPress website to install
the plugin.</p>
<p>You can also upload the plugin folder manually.</p>
<blockquote>
<p>Note: We don't recommend uploading the whole source folder to your website's
<code>wp-content</code> folder, but it does work. A better solution is to extract the
created .zip file and upload its contents to your website.</p>
</blockquote>
</template>
