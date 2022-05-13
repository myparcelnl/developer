<template><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>
<p>The MyParcel SDK works with PHP version &gt;= 7.1.</p>
<p>If you have a PHP version lower than 7.1 then we would like to advise you to
update your PHP version to
a <AutoLink item="https://www.php.net/supported-versions.php">supported versions</AutoLink>. For support
for PHP version 5.6 you can use
release <AutoLink item="https://github.com/myparcelnl/sdk/releases/tag/v2.1.5">2.x</AutoLink>.</p>
<h2 id="installation-with-composer" tabindex="-1"><a class="header-anchor" href="#installation-with-composer" aria-hidden="true">#</a> Installation with Composer</h2>
<p>This SDK uses Composer. Composer is a tool for dependency management in PHP. It
allows you to declare the libraries your project depends on, and it will
manage (install/update) them for you. For more information on how to use
composer, please visit <AutoLink item="https://getcomposer.org/">the Composer website</AutoLink></p>
<p>To install the MyParcel SDK into your project, simply use</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/sdk
</code></pre></div><p>You can then start using our classes in the namespace <code>MyParcelNL/Sdk</code>.
See <RouterLink to="/documentation/50.php-sdk/02.examples/01.create-consignment.html">Examples</RouterLink> to get started.</p>
</template>
