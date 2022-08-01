---
title: API Reference
---

This is the documentation for the MyParcel.nl Core API. Our API is built in such
a way to easily handle bulk operations. We try to follow the REST architecture
as much as possible but deviate from it when we need to achieve high
performance.

This documentation is applicable to <DataType type="platform" id="1" />
, <DataType type="platform" id="2" /> and <DataType type="platform" id="3" />.
Keep in mind that some examples will only be applicable to one of those
platforms, since there are differences in carriers, shipping options and package
types between the different platforms.

## Integrations

If you're using PHP, Node.js, JavaScript, C# or Ruby, we have an SDK available
to help you build your integration.

<Stack class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-3">
    <Integration name="php-sdk" hide-type />
    <Integration name="js-sdk" hide-type />
    <Integration name="c-sharp-sdk" hide-type />
    <Integration name="ruby-sdk" hide-type />
</Stack>

::: tip No SDK in your favorite language available?
If you end up making one and are willing to make it open source, please [contact] us!
:::


## Test environment

We currently do **not** have a test environment. However, you can create an
account and print labels freely. They will only be invoiced when you actually ship them.

::: note
This does not apply to <DataType type="package_type" id="4" />, these shipments
will always be invoiced immediately.
:::

[contact]: /contact/
