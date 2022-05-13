<template><h1 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h1>
<h2 id="_0-requirements" tabindex="-1"><a class="header-anchor" href="#_0-requirements" aria-hidden="true">#</a> 0. Requirements</h2>
<ul>
<li><AutoLink item="https://nodejs.org/">Node 16</AutoLink></li>
<li><AutoLink item="https://classic.yarnpkg.com/">Yarn</AutoLink></li>
</ul>
<h2 id="_1-basics" tabindex="-1"><a class="header-anchor" href="#_1-basics" aria-hidden="true">#</a> 1. Basics</h2>
<ul>
<li>Fork this repository and clone it to your machine</li>
<li>Install dependencies using Yarn:<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div></li>
</ul>
<h2 id="_2-make-your-changes" tabindex="-1"><a class="header-anchor" href="#_2-make-your-changes" aria-hidden="true">#</a> 2. Make your changes</h2>
<ul>
<li>Try to conform to our code style. Make sure to enable ESLint in your editor.</li>
<li>You should make only one change in each branch.</li>
</ul>
<h2 id="_3-add-or-update-tests" tabindex="-1"><a class="header-anchor" href="#_3-add-or-update-tests" aria-hidden="true">#</a> 3. Add or update tests</h2>
<p>Run tests with the following command:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> run test:coverage
</code></pre></div><ul>
<li>Coverage % needs to be equal to or greater than that of the previous commit.</li>
<li>If you added a new file, the corresponding test(s) should go
inside <code>&lt;filename&gt;.spec.ts</code> in the same directory.</li>
</ul>
<h2 id="_4-commit" tabindex="-1"><a class="header-anchor" href="#_4-commit" aria-hidden="true">#</a> 4. Commit</h2>
<p>Make as many commits as you'd like. We use <AutoLink item="https://www.conventionalcommits.org/en/v1.0.0/#summary">Conventional Commits</AutoLink>
and <AutoLink item="https://github.com/semantic-release/semantic-release">semantic-release</AutoLink> to simplify the process of releasing updates by
automating release notes and changelogs based on the rules
of <AutoLink item="https://github.com/conventional-changelog/commitlint">@commitlint/config-conventional</AutoLink>.</p>
<p>Your branch will be squashed into one single valid commit before merging.</p>
<h2 id="_5-create-a-pull-request" tabindex="-1"><a class="header-anchor" href="#_5-create-a-pull-request" aria-hidden="true">#</a> 5. Create a pull request</h2>
<ul>
<li>Keep your pull requests focused on single subjects</li>
<li>Please explain what you changed and why</li>
<li>We will review your code and thoroughly test it before squashing and merging
your pull request</li>
</ul>
</template>
