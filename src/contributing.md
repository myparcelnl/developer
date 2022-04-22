---
title: Contributing to the developer portal
sidebar: auto
---

## Writing pages

This documentation is built with VuePress 2. We recommend you first read the
following guides in the VuePress docs if you're not familiar with the framework:

- [https://v2.vuepress.vuejs.org/guide/page.html](https://v2.vuepress.vuejs.org/guide/page.html)
- [https://v2.vuepress.vuejs.org/guide/markdown.html](https://v2.vuepress.vuejs.org/guide/markdown.html)

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

<DataType
type="shipment_status"
id="3" />

<DataType
type="carrier"
name="dpd" />

<DataType
type="package_type"
id="4" />

### DataTypeDefinition

#### Props

#### Usage

```vue

<DataTypeDefinition />
```

#### Result

<DataTypeDefinition />
