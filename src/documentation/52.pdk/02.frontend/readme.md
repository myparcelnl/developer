---
title: PDK Frontend
description: The frontend part of the PDK uses Vue.js 3 and provides certain components you can render in your application. It supports custom components, so you can style everything yourself.
---

<Stack class="grid-flow-col auto-cols-max gap-1">
    <NpmShield package="@myparcel/pdk" />
    <GitHubShield repo="myparcelnl/js-pdk" link="issues" />
    <GitHubShield repo="myparcelnl/js-pdk" link="pulls" />
</Stack>

The frontend part of the PDK uses Vue.js 3 and provides certain components you can render in your application. It supports custom components, so you can style everything yourself.

### Prerequisites

- Node.js 18 or higher (May work on lower versions, but not tested)
- Vue.js 3 or higher
- TypeScript 4.5 or higher

## Project structure

The PDK frontend works best in a [Yarn 2](https://yarnpkg.com/) workspace. Example workspace structure:

```
.
├── package.json
└── views
    ├── admin
    │   └── package.json
    ├── checkout-core
    │   └── package.json
    ├── checkout-delivery-options
    │   └── package.json
    ├── checkout-separate-address-fields
    │   └── package.json
    └── checkout-tax-fields
        └── package.json
```

With this being the root `package.json`:

```json
{
  "name": "@my-scope/monorepo",
  "private": true,
  "workspaces": ["views/*"]
}
```

### Backend

The backend is the main component of the JS PDK. It contains all the logic to communicate with the PDK backend and to render the admin components.

It uses the following libraries:

- vue^3
- typescript^4.5
- vite
- pinia
- @vueuse/core
- @tanstack/vue-query

::: tip
[Continue reading on how to set up the admin backend.](./10.admin.md)
:::

### Frontend

The frontend of the PDK is split up into multiple packages. This allows you to only use the parts you need.

::: tip
[Continue reading on how to set up the frontend.](./20.frontend.md)
:::
