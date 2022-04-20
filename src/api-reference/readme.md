---
title: API Reference
---

This is the documentation for the MyParcel.nl Core API. Our API is build in such
a way to easily handle bulk operations. We try to follow the REST architecture
as much as possible but deviate from it when we need to achieve high
performance.

This documentation is applicable to MyParcel.nl, Flespakket and SendMyParcel.be.
Keep in mind that some examples will only be applicable to one of those
platforms, since there are differences in carriers, shipping options and package
types between the different platforms.

Do you want to connect with MyParcel using PHP, C# or Ruby? Then you can use the
following GitHub projects instead of the API. Create an issue on GitHub to
contact the programmer.

* [PHP](https://github.com/myparcelnl/sdk)
* [C#/.net](https://github.com/janssenr/MyParcelApi.Net)
* [Ruby](https://github.com/paypronl/myparcel)

**Sandbox**

To show delivery options to customers, you can use our
javascript [code](http://github.com/myparcelnl/checkout) . Use
our [sandbox](https://myparcelnl.github.io/delivery-options/) for an example and
easier integration.

**Test environment**

We do not currently have a test environment. You can create an account and print
labels. These will only be invoiced if you actually send them. Note: Digital
stamps/Digitale postzegel (package_type 4) will be charged immediately.

**Need help?**

![Slack](media/logo_slack.jpg)  Do you want to be kept informed of new
functionalities or do you just need help? You can contact us via
our [Slack channel](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LWQ5MWE5MTQ3MDg4YjU5NzdjYjk0OTY1ZDJiYjU5YzJjNzk3Yzk3NGY0OWFkZDU4MDYwZDEyZDlhZTgzOWM1MjI)
.

**Status API**

Sometimes we or an external party that we use have a malfunction. View the
malfunctions at [status.myparcel.nl](https://status.myparcel.nl/) . These
malfunctions are also visible in our Slack channel.
