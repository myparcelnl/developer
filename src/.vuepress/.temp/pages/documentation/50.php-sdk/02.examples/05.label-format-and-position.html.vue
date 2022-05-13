<template><p>Choose to output the label as either A4 or A6 when creating a pdf or download
link with the argument <code>$positions</code> of <code>setPdfOfLabels($positions)</code>
and <code>setLinkOfLabels($positions)</code>.</p>
<p>Example values for <code>$positions</code>:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>A4:            A6:
┏━━━━━┳━━━━━┓  ┏━━━━━┓
┃  1  ┃  2  ┃  ┃  x  ┃
┣━━━━━╋━━━━━┫  ┗━━━━━┛
┃  3  ┃  4  ┃
┗━━━━━┻━━━━━┛  
</code></pre></div><ol>
<li><code>1</code>: Default value. Outputs A4, starting at top left position.</li>
<li><code>false</code>: Outputs at A6 format</li>
<li><code>[1,4]</code>: Defines the position of labels on an A4 sheet. Only applies to the
first page, subsequent pages will use the default positioning (1,2,3,4)</li>
</ol>
<p>More information: <ApiLink to="6_F" /></p>
</template>
