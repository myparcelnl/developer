---
title: Documentation
index: true
---

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2:

Alt-H1
======

Alt-H2
------


Inline `code` has `back-ticks around` it.

```vue
<!-- Comment -->
<AutoLink
  :item="linkItem"
  class="before:content before:pb-[100%] flex group overflow-hidden p-5 relative rounded-xl"
  :style="`background-color: ${color}`">
<div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

<div class="absolute flex inset-5">
  <MyPaImage
    class="m-auto"
    :src="brandLogo"
    :alt="`${name} logo`" />
</div>
</AutoLink>
```

```typescript{1,6-8}
export function transformSidebar(
  children: SidebarV1ConfigArray,
  baseDir: string,
  depth: number = 0,
): SidebarConfigArray {
  return children
    .filter(Boolean)
    .map((child): SidebarGroupCollapsible | string => {
      if (typeof child === 'string') {
        return `/${baseDir}/${child}`;
      }

      const newChild = child as SidebarGroupCollapsible;

      if ('children' in child && child.children) {
        newChild.children = transformSidebar(child.children, baseDir, depth + 1).filter(Boolean);

        // if (!newChild.link && typeof child.children[0] === 'string') {
        //   newChild.link = child.children[0];
        //   newChild.children = newChild.children.slice(1);
        // }
      }
```

```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```



Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
    * Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.


* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org

[1]: http://slashdot.org

[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
|---------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
|----------|-----------|------------|
| *Still*  | `renders` | **nicely** |
| 1        | 2         | 3          |

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh
> boy let's keep writing to make sure this is long enough to actually wrap for
> everyone. Oh, you can *put* **Markdown** into a blockquote.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
