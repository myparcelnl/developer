---
title: Contributing to the developer portal
sidebar: auto
---

## Writing pages

This documentation is built with VuePress 2, running on Vue 3. We recommend you first read the
following guides if you're not familiar with the VuePress or Vue:

**VuePress**
- [Page](https://v2.vuepress.vuejs.org/guide/page.html)
- [Markdown](https://v2.vuepress.vuejs.org/guide/markdown.html)

**Vue**
- [Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html)

**Tailwind CSS**
- [Tailwind CSS]

## Markdown

### Code

Simple inline snippets of code are written between backticks. Like `this`.

### Code blocks

Write a code block between a fence of three backticks. You can define a language
in the first one to provide syntax highlighting.

```md
### This is markdown

I am **bold**, but I am _not_. I am **_both_**
```

You can also highlight specific lines. See [Code blocks] for details.

```json{3}
{
  "type": "json",
  "line": "highlighted",
  "this-line": "not highlighted..."
}
```

[Code blocks]: https://v2.vuepress.vuejs.org/guide/markdown.html#code-blocks

## Available components

We've provided some extra components you can use in your markdown content. Their
usages are explained below.

### Http

#### Props

| name | type     | required |
|------|----------|----------|
| code | `String` | ✔️       |

#### Usage

```vue 
<Http code="204" />
```

#### Result

<Http code="204" />

### DataType

With `DataType`, you can provide a consistent way of displaying a data type and
a link to its source and more information. It supports the following types:

- `carrier`
- `delivery_type`
- `package_type`
- `platform`
- `shipment_status`

#### Props

| name | type     | required |
|------|----------|----------|
| type | `String` | ✔        |
| id   | `String` | ❌️       |
| name | `String` | ❌️       |

#### Usage

```vue
<DataType
  type="shipment_status"
  id="3" />

<DataType
  type="carrier"
  name="dpd" />

<DataType
  type="package_type"
  name="4" />
```

#### Result

<DataType type="shipment_status"
id="3" />

<DataType type="carrier"
name="dpd" />

<DataType type="package_type"
id="4" />

### DataTypeDefinition

#### Props

#### Usage

```vue
<DataTypeDefinition
  pattern="/\d{2}:\d{2}:\d{2}/"
  example="08:00:00" />
```

#### Result

<DataTypeDefinition pattern="/\d{2}:\d{2}:\d{2}/" example="08:00:00" />

### MPImg

#### Props

| name | type     | required |
|------|----------|----------|
| src  | `String` | ✔️       |
| alt  | `String` | ✔️       |

#### Usage

```vue
<MPImg
  src="/integrations/chrome.svg"
  class="max-w-xs" />
```

#### Result

<MPImg src="/integrations/chrome.svg" class="max-w-xs" />

## Attributes

You can use all classes from [Tailwind CSS 3](https://tailwindcss.com/) on any
inline component or html tag.

See [Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html) for
more information on how this works on Vue components.

### Example

```vue
<!-- Padding: 5, width: 12, background-color: monstera 500 -->
<MPImg
  src="/integrations/shopware.svg"
  class="p-3 w-12 bg-monstera-500" />

<!-- Padding: 1, width: 18, margin-left: 3, background-color: goldfish 500 -->
<MPImg
  src="/integrations/c-sharp.svg"
  class="p-1 w-18 ml-3 bg-goldfish-500" />
```

<MPImg
  src="/integrations/shopware.svg"
  class="p-3 w-12 bg-monstera-500" />

<MPImg
  src="/integrations/c-sharp.svg"
  class="p-1 w-16 ml-3 bg-goldfish-500" />

## Theme

We use [Tailwind CSS 3] with a few theme modifications.

### Custom colors

<Stack class="cols-2 grid-flow-col">
    <Stack>
        <div class="p-5 bg-monstera-100 text-white">monstera-100</div>
        <div class="p-5 bg-monstera-200 text-white">monstera-200</div>
        <div class="p-5 bg-monstera-300 text-white">monstera-300</div>
        <div class="p-5 bg-monstera-400 text-white">monstera-400</div>
        <div class="p-5 bg-monstera-500 text-white">monstera-500</div>
        <div class="p-5 bg-monstera-600 text-white">monstera-600</div>
        <div class="p-5 bg-monstera-700 text-white">monstera-700</div>
        <div class="p-5 bg-monstera-800 text-white">monstera-800</div>
        <div class="p-5 bg-monstera-900 text-white">monstera-900</div>
    </Stack>
    <Stack>
        <div class="p-5 bg-goldfish-100 text-white">goldfish-100</div>
        <div class="p-5 bg-goldfish-200 text-white">goldfish-200</div>
        <div class="p-5 bg-goldfish-300 text-white">goldfish-300</div>
        <div class="p-5 bg-goldfish-400 text-white">goldfish-400</div>
        <div class="p-5 bg-goldfish-500 text-white">goldfish-500</div>
        <div class="p-5 bg-goldfish-600 text-white">goldfish-600</div>
        <div class="p-5 bg-goldfish-700 text-white">goldfish-700</div>
        <div class="p-5 bg-goldfish-800 text-white">goldfish-800</div>
        <div class="p-5 bg-goldfish-900 text-white">goldfish-900</div>
    </Stack>
</Stack>

[Tailwind CSS 3]: https://tailwindcss.com/
