<template><p>This is the documentation for the MyParcel.nl Core API. Our API is built in such
a way to easily handle bulk operations. We try to follow the REST architecture
as much as possible but deviate from it when we need to achieve high
performance.</p>
<p>This documentation is applicable to <DataType type="platform" id="1" />
, <DataType type="platform" id="2" /> and <DataType type="platform" id="3" />.
Keep in mind that some examples will only be applicable to one of those
platforms, since there are differences in carriers, shipping options and package
types between the different platforms.</p>
<h2 id="integrations" tabindex="-1"><a class="header-anchor" href="#integrations" aria-hidden="true">#</a> Integrations</h2>
<p>If you're using PHP, Node.js, JavaScript, C# or Ruby, we have an SDK available
to help you build your integration.</p>
<Stack class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-3">
    <Integration name="php-sdk" hide-type />
    <Integration name="js-sdk" hide-type />
    <Integration name="c-sharp-sdk" hide-type />
    <Integration name="ruby-sdk" hide-type />
</Stack>
<Message title="No SDK in your favorite language available?" type="tip"><p>If you end up making one and are willing to make it open source, please <AutoLink item="/contact">contact</AutoLink> us!</p>
</Message><h2 id="test-environment" tabindex="-1"><a class="header-anchor" href="#test-environment" aria-hidden="true">#</a> Test environment</h2>
<p>We currently do <strong>not</strong> have a test environment. However, you can create an
account and print labels freely. They will only be invoiced when you actually ship them.</p>
<Message title="" type="note"><p>This does not apply to <DataType type="package_type" id="4" />, these shipments
will always be invoiced immediately.</p>
</Message></template>
