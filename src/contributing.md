---
title: Contributing to the developer portal
sidebar: auto
---

## Writing pages

This documentation is built with VuePress 2, running on Vue 3. We recommend you
first read the following guides if you're not familiar with VuePress or Vue:

**VuePress**

- [Page](https://v2.vuepress.vuejs.org/guide/page.html)
- [Markdown](https://v2.vuepress.vuejs.org/guide/markdown.html)

**Vue**

- [Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html)

**Tailwind CSS**

- [Tailwind CSS 3]

### Frontmatter

At the start of each `.md` file, you can add frontmatter. Frontmatter should be
valid YAML. Below is described what properties you can use and how it affects
the page.

Example:

```markdown
---
title: My Page
---

## My page content

Hello!
```

Here is an overview of the most relevant values:

| Key            | Type                  | Description                                                                                                 | Default |
|----------------|-----------------------|-------------------------------------------------------------------------------------------------------------|---------|
| `title`        | `string`              | Defines the page name and renders a h1 on the page. Use either this or a manual `# <title>` in the content. | –       |
| `sidebar`      | `boolean/string`      | Modify the sidebar for a single page. `none` to turn it off.                                                | `auto`  |
| `editLink`     | `boolean`             | Controls whether the "Edit this page" button on the bottom is shown.                                        | `true`  |
| `lastUpdated`  | `boolean`             | Controls whether the "Last updated" text on the bottom is shown.                                            | `true`  |
| `contributors` | `boolean`             | Controls whether the "Contributors" section on the bottom is shown.                                         | `true`  |
| `redirect`     | `boolean`             | Automatically show redirects on page. See [redirecting](#redirecting)                                       | `false` |
| `languages`    | `string/array/object` | Used to manually define languages to redirect to. See [redirecting](#redirecting)                           | `false` |

See [Frontmatter](https://v2.vuepress.vuejs.org/reference/frontmatter.html#frontmatter)
for all default options.

::: tip
When `editLink`, `lastUpdated` and `contributors` are all false, the bar on top
of the footer will not be shown at all.
:::

::: note
When using the frontmatter title, don't forget this renders a `h1` on your page.
You should only have `h2` and smaller headings on the rest of the page.
:::

### Heading levels

A page title should be `h2`, and content headers start at `h3`, but we've made
it easier by correcting `h1` and `h2` tags automatically. So you can write
your page in any of the following ways:

```markdown
# Title

## Subject 1

## Subject 2
```

```markdown
## Title

### Subject 1

### Subject 2
```

```markdown
### Title

#### Subject 1

#### Subject 2
```

They will all be rendered the same way:

```html
<h2>Title</h2>

<h3>Subject 1</h3>

<h3>Subject 2</h3>
```

### Redirecting

Sometimes a page is not available in all languages, but you do want to show a
redirect link to it because people might miss out on useful information
otherwise.

Let's assume the following:

- There are multiple languages defined: `nl` and `en`
- The default language is `en`
- We have the following directory structure:
  ```
  src
  ├── nl
  │   └── subject
  │       └── my-page.md
  └── subject
      └── my-page.md
  ```

Now, if `src/subject/my-page.md` contains the following content:

```yaml
---
title: My Page
redirect: true
---
```

This will show something along the lines of the following on the page:

```markdown
This page is available in the following languages:

- 🇳🇱 (Nederlands)[/nl/subject/my-page.md]
```

But if the Dutch variant was named `mijn-pagina.md` instead of `my-page.md`,
this will not work. The automatic resolution checks if the resolved route is
present in the array of registered routes, which  `/nl/subject/my-page.md` will
not be, if it's actually called `/nl/subject/mijn-pagina.md`.

In this case, you can manually define which page it should link to
in `subject/my-page.md`:

```yaml
---
title: My Page
languages:
  nl: subject/mijn-pagina/
---
```

Now this page will show a redirect link to `/nl/subject/mijn-pagina.md`.

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

```html 
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

```html

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

<DataType type="shipment_status" id="3" />

<DataType type="carrier" name="dpd" />

<DataType type="package_type" id="4" />

### DataTypeDefinition

#### Props

#### Usage

```html

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

```html

<MPImg
  src="/integrations/chrome.svg"
  class="max-w-xs" />
```

#### Result

<MPImg src="/integrations/chrome.svg" class="max-w-xs" />

### Shield

Renders a shield from [shields.io](https://shields.io).


<Shield path="codacy/coverage/c0f99d91962d448287b438b8162fff51" logo="codacy" color="ff8c00" labelColor="maroon" text="codacy" />

#### NpmShield

```html

<NpmShield package="@myparcel/sdk" />
```

<NpmShield package="@myparcel/sdk"/>

#### GitHubShield

```html

<GitHubShield repo="myparcelnl/sdk" />
```

<GitHubShield repo="myparcelnl/sdk" />

#### PackagistShield

```html

<PackagistShield package="myparcelnl/sdk" />
```

<PackagistShield package="myparcelnl/sdk"/>

## Containers

Containers are rendered in markdown and are written like this:

```markdown
::: <name> <attributes>
<content>
:::
```

Any markdown can go between the fences (`:::`).

### Alerts

There are a currently two different alerts: `note` and `tip`.

#### Example

```markdown
::: note
Note content!
:::

::: tip
Tip content!
:::

::: note With a header
Wow!
:::
```

#### Result

::: note
Note content!
:::

::: tip
Tip content!
:::

::: note With a header
Woooow!
:::

### Expand

The "expand" container can be used to hide content until the user clicks on its
header to expand it.

#### Example

```markdown
::: expand
This is collapsed content.
:::

::: expand With a header
Collapsed content with a custom header.

| One | Two | Three  |
|-----|-----|--------|
| And | a   | table! |

:::

::: expand h6: With a custom tag header
Collapsed content with a header with a custom html tag.
:::
```

#### Result

::: expand
This is collapsed content.
:::

::: expand With a header
Collapsed content with a custom header.

| One | Two | Three  |
|-----|-----|--------|
| And | a   | table! |

:::

::: expand h6: With a custom tag header
Collapsed content with a header with a custom html tag.
:::

## Attributes

You can use all classes from [Tailwind CSS 3] on any
inline component or html tag.

See [Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html) for
more information on how this works on Vue components.

### Example

```html
<!-- Padding: 5, width: 12, background-color: monstera 500 -->
<MPImg
  alt="Shopware"
  src="/integrations/shopware.svg"
  class="p-3 w-12 bg-monstera-500" />

<!-- Padding: 1, width: 18, margin-left: 3, background-color: goldfish 500 -->
<MPImg
  alt="C#"
  src="/integrations/c-sharp.svg"
  class="p-1 w-18 ml-3 bg-goldfish-500" />
```

<MPImg alt="Shopware" src="/integrations/shopware.svg" class="p-3 w-12 bg-monstera-500" />

<MPImg alt="C#" src="/integrations/c-sharp.svg" class="p-1 w-16 ml-3 bg-goldfish-500" />

## Theme

We use [Tailwind CSS 3] with a few theme modifications.

### Border radius

<Stack class="grid-flow-col">
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-none">rounded-none</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-sm">rounded-sm</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded">rounded</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-lg">rounded-lg</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-xl">rounded-xl</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-full">rounded-full</div>
</Stack>

### Custom colors

These are available for all color utilities, like `bg-*`,`text-*`, `border-*`,
etc.

<Stack class="cols-2 grid-flow-col">
    <Stack>
        <div class="p-5 rounded bg-monstera-100 text-white">monstera-100</div>
        <div class="p-5 rounded bg-monstera-200 text-white">monstera-200</div>
        <div class="p-5 rounded bg-monstera-300 text-white">monstera-300</div>
        <div class="p-5 rounded bg-monstera-400 text-white">monstera-400</div>
        <div class="p-5 rounded bg-monstera-500 text-white">monstera-500</div>
        <div class="p-5 rounded bg-monstera-600 text-white">monstera-600</div>
        <div class="p-5 rounded bg-monstera-700 text-white">monstera-700</div>
        <div class="p-5 rounded bg-monstera-800 text-white">monstera-800</div>
        <div class="p-5 rounded bg-monstera-900 text-white">monstera-900</div>
    </Stack>
    <Stack>
        <div class="p-5 rounded bg-goldfish-100 text-white">goldfish-100</div>
        <div class="p-5 rounded bg-goldfish-200 text-white">goldfish-200</div>
        <div class="p-5 rounded bg-goldfish-300 text-white">goldfish-300</div>
        <div class="p-5 rounded bg-goldfish-400 text-white">goldfish-400</div>
        <div class="p-5 rounded bg-goldfish-500 text-white">goldfish-500</div>
        <div class="p-5 rounded bg-goldfish-600 text-white">goldfish-600</div>
        <div class="p-5 rounded bg-goldfish-700 text-white">goldfish-700</div>
        <div class="p-5 rounded bg-goldfish-800 text-white">goldfish-800</div>
        <div class="p-5 rounded bg-goldfish-900 text-white">goldfish-900</div>
    </Stack>
</Stack>

### Min and max width/height

The [`maxHeight`], [`maxWidth`], [`minHeight`] and [`minWidth`] utilities have
been extended to include all spacing values from [`width`] and [`height`].

## Editing non-markdown content

### Integrations

Integrations data is located
in [integrations.json](https://github.com/myparcelnl/developer/blob/main/src/.vuepress/integrations.json)
. Edit it there to see the changes reflected on all places where
the `Integration` component is used. Just reference the `name`, and all other
data will be retrieved from that `.json` file.

```html

<Stack class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
  <Integration name="php-sdk" />
  <Integration name="woocommerce" />
  <Integration name="google-chrome-extension" />
</Stack>
```

<Stack class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
    <Integration name="php-sdk" />
    <Integration name="woocommerce" />
    <Integration name="google-chrome-extension" />
</Stack>

### Code

To run the project, check out the repository and run the following commands:

```shell
yarn install
yarn translations:import
yarn dev
```

This installs dependencies, downloads translations and then starts the dev
server.


[Tailwind CSS 3]: https://tailwindcss.com/

[`maxHeight`]: https://tailwindcss.com/docs/max-height

[`maxWidth`]: https://tailwindcss.com/docs/max-width

[`minHeight`]: https://tailwindcss.com/docs/min-height

[`minWidth`]: https://tailwindcss.com/docs/min-width

[`width`]: https://tailwindcss.com/docs/width

[`height`]: https://tailwindcss.com/docs/height
