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

Do you want to connect with MyParcel using PHP, Node.js, JavaScript, C# or Ruby?
Then you can use the following GitHub projects instead of sending requests to
the API directly. Create an issue on GitHub to contact the programmer.

* [PHP](https://github.com/myparcelnl/sdk)
* [Node.js/JavaScript](https://github.com/myparcelnl/js-sdk)
* [C#/.net](https://github.com/janssenr/MyParcelApi.Net)
* [Ruby](https://github.com/paypronl/myparcel)

## Test environment

We do not currently have a test environment. You can create an account and print
labels freely. These will only be invoiced when you actually ship them.

::: note
This does not apply to <DataType type="package_type" id="4" />, these shipments
will always be invoiced immediately.
:::
