---
title: Plugin Development Kit (PDK)
description: The MyParcel Plugin Development Kit (PDK) is a set of tools to quickly build a MyParcel plugin for your e-commerce platform.
---

The MyParcel Plugin Development Kit (PDK) is a set of tools to quickly build a MyParcel plugin for your e-commerce platform. The backend is written in PHP and the frontend is written in JavaScript.

## Features

- Easy to use API
- Feature equality between all implementations
- Automated building using a configuration file
- Easily configurable
- Extensible: If the default implementation does not fit your needs, you can modify it

## Terminology

The following terms are used throughout the documentation:

|           Term | Description                                                                                      |
| -------------: | :----------------------------------------------------------------------------------------------- |
|          _App_ | Your implementation of the PDK. This is your plugin, app, module or extension that uses the PDK. |
|  _PDK backend_ | The PDK backend is the part of the PDK that is written in PHP.                                   |
| _PDK frontend_ | The PDK frontend is the part of the PDK that is written in JavaScript.                           |
|        _Admin_ | The admin is the admin panel, dashboard or backend of your app.                                  |
|     _Checkout_ | The checkout is the checkout page of your app.                                                   |

## Getting started

To get started with the PDK, you need to set up the backend and (optionally) the frontend. The backend is required for all other PDK functionality. The frontend is only required if you want to use custom checkout functionality.

<Stack class="grid-flow-col gap-4">
  <Cta
    title="Backend"
    subtitle="The backend contains all logic to communicate with the MyParcel API. The backend is required for all other PDK functionality."
    aria-label="To the MyParcel PDK backend documentation"
    link="./10.backend.html" />
  <Cta
    title="Frontend"
    subtitle="The frontend contains the logic to render the MyParcel components that communicate with the PDK backend in your admin panel and checkout."
    aria-label="To the MyParcel PDK frontend documentation"
    link="./20.frontend/" />
</Stack>

## Examples

The PDK is used in the following plugins:

- [MyParcel WooCommerce](https://github.com/myparcelnl/woocommerce/tree/alpha) (currently in alpha)
- [MyParcel PrestaShop](https://github.com/myparcelnl/prestashop/tree/alpha) (currently in pre-alpha)

## FAQ

::: expand h3: Why use the PDK over an SDK?
The PDK is a central codebase that contains all logic to scaffold a MyParcel plug-in. It uses our SDKs under the hood, but contains a lot of additional logic to make it easier to build a plugin.

The PDK is not a replacement for our SDKs. It is a tool to make it easier to build a plugin.
:::

## Contributing

We welcome contributions to the PDK. Please read our [developer guide](https://github.com/myparcelnl/developer/blob/main/DEVELOPERS.md) to get started.

## License

The MyParcel PDK is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Security

If you discover a security vulnerability within the PDK, please let us know via our [contact form](/contact.md).
