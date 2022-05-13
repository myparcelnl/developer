<template><h2 id="writing-pages" tabindex="-1"><a class="header-anchor" href="#writing-pages" aria-hidden="true">#</a> Writing pages</h2>
<p>This documentation is built with VuePress 2, running on Vue 3. We recommend you
first read the following guides if you're not familiar with VuePress or Vue:</p>
<p><strong>VuePress</strong></p>
<ul>
<li><AutoLink item="https://v2.vuepress.vuejs.org/guide/page.html">Page</AutoLink></li>
<li><AutoLink item="https://v2.vuepress.vuejs.org/guide/markdown.html">Markdown</AutoLink></li>
</ul>
<p><strong>Vue</strong></p>
<ul>
<li><AutoLink item="https://vuejs.org/guide/components/attrs.html">Fallthrough Attributes</AutoLink></li>
</ul>
<p><strong>Tailwind CSS</strong></p>
<ul>
<li><AutoLink item="https://tailwindcss.com/">Tailwind CSS 3</AutoLink></li>
</ul>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h3>
<p>At the start of each <code>.md</code> file, you can add frontmatter. Below is described what you can write there and how it affects the page.</p>
<p>Example:</p>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> My Page</span> 
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">##</span> My page content</span>

Hello!
</code></pre></div><p>Here is an overview of the most relevant values:</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Defines the page name and renders a h1 on the page. Use either this or a manual <code># &lt;title&gt;</code> in the content.</td>
<td>–</td>
</tr>
<tr>
<td><code>sidebar</code></td>
<td><code>boolean/string</code></td>
<td>Modify the sidebar for a single page. <code>none</code> to turn it off.</td>
<td><code>auto</code></td>
</tr>
<tr>
<td><code>editLink</code></td>
<td><code>boolean</code></td>
<td>Controls whether the &quot;Edit this page&quot; button on the bottom is shown.</td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>lastUpdated</code></td>
<td><code>boolean</code></td>
<td>Controls whether the &quot;Last updated&quot; text on the bottom is shown.</td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>contributors</code></td>
<td><code>boolean</code></td>
<td>Controls whether the &quot;Contributors&quot; section on the bottom is shown.</td>
<td><code>true</code></td>
</tr>
</tbody>
</table>
<p>See <AutoLink item="https://v2.vuepress.vuejs.org/reference/frontmatter.html#frontmatter">Frontmatter</AutoLink> for all options.</p>
<Message title="" type="tip"><p>When <code>editLink</code>, <code>lastUpdated</code> and <code>contributors</code> are all false, the bar on top of the footer will not be shown at all.</p>
</Message><Message title="" type="note"><p>When using the frontmatter title, don't forget this renders a <code>h1</code> on your page. You should only have <code>h2</code> and smaller headings on the rest of the page.</p>
</Message><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3>
<p>Simple inline snippets of code are written between backticks. Like <code>this</code>.</p>
<h3 id="code-blocks" tabindex="-1"><a class="header-anchor" href="#code-blocks" aria-hidden="true">#</a> Code blocks</h3>
<p>Write a code block between a fence of three backticks. You can define a language
in the first one to provide syntax highlighting.</p>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> This is markdown</span>

I am <span class="token bold"><span class="token punctuation">**</span><span class="token content">bold</span><span class="token punctuation">**</span></span>, but I am <span class="token italic"><span class="token punctuation">_</span><span class="token content">not</span><span class="token punctuation">_</span></span>. I am <span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">_</span><span class="token content">both</span><span class="token punctuation">_</span></span></span><span class="token punctuation">**</span></span>
</code></pre></div><p>You can also highlight specific lines. See <AutoLink item="https://v2.vuepress.vuejs.org/guide/markdown.html#code-blocks">Code blocks</AutoLink> for details.</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
  <span class="token property">"line"</span><span class="token operator">:</span> <span class="token string">"highlighted"</span><span class="token punctuation">,</span>
  <span class="token property">"this-line"</span><span class="token operator">:</span> <span class="token string">"not highlighted..."</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br></div></div><h2 id="available-components" tabindex="-1"><a class="header-anchor" href="#available-components" aria-hidden="true">#</a> Available components</h2>
<p>We've provided some extra components you can use in your markdown content. Their
usages are explained below.</p>
<h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h3>
<h4 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h4>
<table>
<thead>
<tr>
<th>name</th>
<th>type</th>
<th>required</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td><code>String</code></td>
<td>✔️</td>
</tr>
</tbody>
</table>
<h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Http</span> <span class="token attr-name">code</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>204<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre></div><h4 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h4>
<Http code="204" />
<h3 id="datatype" tabindex="-1"><a class="header-anchor" href="#datatype" aria-hidden="true">#</a> DataType</h3>
<p>With <code>DataType</code>, you can provide a consistent way of displaying a data type and
a link to its source and more information. It supports the following types:</p>
<ul>
<li><code>carrier</code></li>
<li><code>delivery_type</code></li>
<li><code>package_type</code></li>
<li><code>platform</code></li>
<li><code>shipment_status</code></li>
</ul>
<h4 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h4>
<table>
<thead>
<tr>
<th>name</th>
<th>type</th>
<th>required</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td><code>String</code></td>
<td>✔</td>
</tr>
<tr>
<td>id</td>
<td><code>String</code></td>
<td>❌️</td>
</tr>
<tr>
<td>name</td>
<td><code>String</code></td>
<td>❌️</td>
</tr>
</tbody>
</table>
<h4 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h4>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataType</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shipment_status<span class="token punctuation">"</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataType</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carrier<span class="token punctuation">"</span></span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dpd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataType</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>package_type<span class="token punctuation">"</span></span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre></div><h4 id="result-1" tabindex="-1"><a class="header-anchor" href="#result-1" aria-hidden="true">#</a> Result</h4>
<DataType type="shipment_status"
id="3" />
<DataType type="carrier"
name="dpd" />
<DataType type="package_type"
id="4" />
<h3 id="datatypedefinition" tabindex="-1"><a class="header-anchor" href="#datatypedefinition" aria-hidden="true">#</a> DataTypeDefinition</h3>
<h4 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> Props</h4>
<h4 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h4>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataTypeDefinition</span>
  <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/\d{2}:\d{2}:\d{2}/<span class="token punctuation">"</span></span>
  <span class="token attr-name">example</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>08:00:00<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre></div><h4 id="result-2" tabindex="-1"><a class="header-anchor" href="#result-2" aria-hidden="true">#</a> Result</h4>
<DataTypeDefinition pattern="/\d{2}:\d{2}:\d{2}/" example="08:00:00" />
<h3 id="mpimg" tabindex="-1"><a class="header-anchor" href="#mpimg" aria-hidden="true">#</a> MPImg</h3>
<h4 id="props-3" tabindex="-1"><a class="header-anchor" href="#props-3" aria-hidden="true">#</a> Props</h4>
<table>
<thead>
<tr>
<th>name</th>
<th>type</th>
<th>required</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td><code>String</code></td>
<td>✔️</td>
</tr>
<tr>
<td>alt</td>
<td><code>String</code></td>
<td>✔️</td>
</tr>
</tbody>
</table>
<h4 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3" aria-hidden="true">#</a> Usage</h4>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPImg</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/integrations/chrome.svg<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre></div><h4 id="result-3" tabindex="-1"><a class="header-anchor" href="#result-3" aria-hidden="true">#</a> Result</h4>
<MPImg src="/integrations/chrome.svg" class="max-w-xs" />
<h2 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h2>
<p>Containers are rendered in markdown and are written like this:</p>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attributes</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>content</span><span class="token punctuation">></span></span>
:::
</code></pre></div><p>Any markdown can go between the fences (<code>:::</code>).</p>
<h3 id="alerts" tabindex="-1"><a class="header-anchor" href="#alerts" aria-hidden="true">#</a> Alerts</h3>
<p>There are a currently two different alerts: <code>note</code> and <code>tip</code>.</p>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>::: note
Note content!
:::

::: tip
Tip content!
:::

::: note With a header
Wow!
:::
</code></pre></div><h4 id="result-4" tabindex="-1"><a class="header-anchor" href="#result-4" aria-hidden="true">#</a> Result</h4>
<Message title="" type="note"><p>Note content!</p>
</Message><Message title="" type="tip"><p>Tip content!</p>
</Message><Message title="With a header" type="note"><p>Woooow!</p>
</Message><h3 id="expand" tabindex="-1"><a class="header-anchor" href="#expand" aria-hidden="true">#</a> Expand</h3>
<p>The &quot;expand&quot; container can be used to hide content until the user clicks on its
header to expand it.</p>
<h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>::: expand
This is collapsed content.
:::

::: expand With a header
Collapsed content with a custom header.

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> One </span><span class="token punctuation">|</span><span class="token table-header important"> Two </span><span class="token punctuation">|</span><span class="token table-header important"> Three  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">---</span> <span class="token punctuation">|</span> <span class="token punctuation">---</span> <span class="token punctuation">|</span> <span class="token punctuation">---</span>    <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> And </span><span class="token punctuation">|</span><span class="token table-data"> a   </span><span class="token punctuation">|</span><span class="token table-data"> table! </span><span class="token punctuation">|</span>
</span></span>:::

::: expand h6: With a custom tag header
Collapsed content with a header with a custom html tag.
:::
</code></pre></div><h4 id="result-5" tabindex="-1"><a class="header-anchor" href="#result-5" aria-hidden="true">#</a> Result</h4>
<DetailsExpand tag="null" ><p>This is collapsed content.</p>
</DetailsExpand><DetailsExpand tag="null" title="With a header"><p>Collapsed content with a custom header.</p>
<table>
<thead>
<tr>
<th>One</th>
<th>Two</th>
<th>Three</th>
</tr>
</thead>
<tbody>
<tr>
<td>And</td>
<td>a</td>
<td>table!</td>
</tr>
</tbody>
</table>
</DetailsExpand><DetailsExpand tag="h6" title="With a custom tag header"><p>Collapsed content with a header with a custom html tag.</p>
</DetailsExpand><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2>
<p>You can use all classes from <AutoLink item="https://tailwindcss.com/">Tailwind CSS 3</AutoLink> on any
inline component or html tag.</p>
<p>See <AutoLink item="https://vuejs.org/guide/components/attrs.html">Fallthrough Attributes</AutoLink> for
more information on how this works on Vue components.</p>
<h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h3>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- Padding: 5, width: 12, background-color: monstera 500 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPImg</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/integrations/shopware.svg<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-3 w-12 bg-monstera-500<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- Padding: 1, width: 18, margin-left: 3, background-color: goldfish 500 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPImg</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/integrations/c-sharp.svg<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-1 w-18 ml-3 bg-goldfish-500<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre></div><p><MPImg
src="/integrations/shopware.svg"
class="p-3 w-12 bg-monstera-500" /></p>
<p><MPImg
src="/integrations/c-sharp.svg"
class="p-1 w-16 ml-3 bg-goldfish-500" /></p>
<h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h2>
<p>We use <AutoLink item="https://tailwindcss.com/">Tailwind CSS 3</AutoLink> with a few theme modifications.</p>
<h3 id="border-radius" tabindex="-1"><a class="header-anchor" href="#border-radius" aria-hidden="true">#</a> Border radius</h3>
<Stack class="grid-flow-col">
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-none">rounded-none</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-sm">rounded-sm</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded">rounded</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-lg">rounded-lg</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-xl">rounded-xl</div>
    <div class="p-5 bg-zinc-200 dark:bg-zinc-700 rounded-full">rounded-full</div>
</Stack>
<h3 id="custom-colors" tabindex="-1"><a class="header-anchor" href="#custom-colors" aria-hidden="true">#</a> Custom colors</h3>
<p>These are available for all color utilities, like <code>bg-*</code>,<code>text-*</code>, <code>border-*</code>,
etc.</p>
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
<h3 id="min-and-max-width-height" tabindex="-1"><a class="header-anchor" href="#min-and-max-width-height" aria-hidden="true">#</a> Min and max width/height</h3>
<p>The <AutoLink item="https://tailwindcss.com/docs/max-height"><code>maxHeight</code></AutoLink>, <AutoLink item="https://tailwindcss.com/docs/max-width"><code>maxWidth</code></AutoLink>, <AutoLink item="https://tailwindcss.com/docs/min-height"><code>minHeight</code></AutoLink> and <AutoLink item="https://tailwindcss.com/docs/min-width"><code>minWidth</code></AutoLink> utilities have
been extended to include all spacing values from <AutoLink item="https://tailwindcss.com/docs/width"><code>width</code></AutoLink> and <AutoLink item="https://tailwindcss.com/docs/height"><code>height</code></AutoLink>.</p>
<h2 id="editing-non-markdown-content" tabindex="-1"><a class="header-anchor" href="#editing-non-markdown-content" aria-hidden="true">#</a> Editing non-markdown content</h2>
<h3 id="integrations" tabindex="-1"><a class="header-anchor" href="#integrations" aria-hidden="true">#</a> Integrations</h3>
<p>Integrations data is located in <AutoLink item="https://github.com/myparcelnl/developer/blob/main/src/.vuepress/integrations.json">integrations.json</AutoLink>. Edit it there to see the changes reflected on all places where the <code>Integration</code> component is used. Just reference the <code>name</code>, and all other data will be retrieved from that <code>.json</code> file.</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Stack</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg:grid-cols-4 md:grid-cols-3 grid-cols-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Integration</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>php-sdk<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Integration</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>woocommerce<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Integration</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>google-chrome-extension<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Stack</span><span class="token punctuation">></span></span>
</code></pre></div><Stack class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
    <Integration name="php-sdk" />
    <Integration name="woocommerce" />
    <Integration name="google-chrome-extension" />
</Stack>
</template>
