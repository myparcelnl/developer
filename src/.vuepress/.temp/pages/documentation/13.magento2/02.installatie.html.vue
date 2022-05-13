<template><h2 id="technische-vereisten" tabindex="-1"><a class="header-anchor" href="#technische-vereisten" aria-hidden="true">#</a> Technische vereisten</h2>
<p>Om de MyParcel Magento 2 extensie te gebruiken dient je server aan onderstaande
vereisten te voldoen:</p>
<ul>
<li>PHP versie 7 of hoger</li>
</ul>
<p>De onderstaande Magento versie wordt ondersteund:</p>
<ul>
<li>Community 2.x</li>
</ul>
<h2 id="installatie" tabindex="-1"><a class="header-anchor" href="#installatie" aria-hidden="true">#</a> Installatie</h2>
<p>De MyParcel Magento 2 extensie is niet te downloaden via de Magento Marketplace.</p>
<p>Voor het installeren adviseren wij om een backup te maken van jouw Magento 2
omgeving. De extensie is te verkrijgen via de terminal, raadpleeg jouw
webbeheerder. Jouw webbeheerder kan het volgende commando in de root van de
website (in bv. <code>public_html</code>) uitvoeren om de MyParcel extensie te
installeren:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/magento
</code></pre></div><h3 id="installeer-je-voor-het-eerst-een-extensie-in-jouw-magento-omgeving" tabindex="-1"><a class="header-anchor" href="#installeer-je-voor-het-eerst-een-extensie-in-jouw-magento-omgeving" aria-hidden="true">#</a> Installeer je voor het eerst een extensie in jouw Magento omgeving?</h3>
<p>Dan bestaat de kans dat je de volgende melding krijgt:</p>
<MPImg src="/documentation/magento/magento-composer-update.jpg" alt="Magento composer update" />
<p>Om de Username en Password te verkrijgen ga je naar <AutoLink item="https://marketplace.magento.com">Magento marketplace</AutoLink>. Hier
kun je een account aanmaken en inloggen. Ga daarna in <code>My Account</code>
naar <code>Marketplace</code>. Klik vervolgens op <code>My Access Keys</code> en op <code>Magento 2</code>.</p>
<MPImg src="/documentation/magento/magento-marketplace-start.jpg" alt="Magento marketplace" />
<p>Hier zie je public key en een private key. De public key kan je in de terminal
gebruiken als username en de private key kan je gebruiken als Password. Zie je
de keys nog niet? Klik dan op Create A New Access Key.</p>
<MPImg src="/documentation/magento/magento-marketplace-key.jpg" alt="Magento marketplace key" />
<h3 id="cache-legen" tabindex="-1"><a class="header-anchor" href="#cache-legen" aria-hidden="true">#</a> Cache legen</h3>
<p>Om de cache te legen en andere benodigde acties van Magento 2 uit te voeren
gebruik je de volgende reeks commandos:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf var/di/* pub/static/* var/cache/* var/pagecache/* var/generation/* var/dir/* var/view_preprocessed/*
php bin/magento cache:flush 
php bin/magento setup:upgrade 
php bin/magento setup:static-content:deploy 
php bin/magento setup:static-content:deploy nl_NL 
php bin/magento indexer:reindex
</code></pre></div><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2>
<p>Om een update uit te voeren kun je het volgende commando gebruiken:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> update myparcelnl/magento
</code></pre></div><p>Maak je nog gebruik van een oudere versie van onze plugin, en zou je deze
graag willen bijwerken naar bijvoorbeeld versie <code>4.x</code>, dan kun je onderstaand
commando gebruiken om de laatste versie te installeren:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/magento:4
</code></pre></div><p>Misschien krijg je tijdens de update een melding dat de sdk bijgewerkt moet
worden naar versie <code>x.x</code>. Gebruik dan het commando:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/sdk:x.x
</code></pre></div><p>Vervolgens moet je <AutoLink item="#cache-legen">de Magento cache legen</AutoLink>.</p>
</template>
