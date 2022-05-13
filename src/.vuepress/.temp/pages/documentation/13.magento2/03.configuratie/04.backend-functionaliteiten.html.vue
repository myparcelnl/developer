<template><h1 id="backend-functionaliteiten" tabindex="-1"><a class="header-anchor" href="#backend-functionaliteiten" aria-hidden="true">#</a> Backend functionaliteiten</h1>
<h2 id="verzending-aanmaken" tabindex="-1"><a class="header-anchor" href="#verzending-aanmaken" aria-hidden="true">#</a> Verzending aanmaken</h2>
<p>Een MyParcel zending aanmaken kan op twee manieren:</p>
<p><strong>Batch methode in het bestellingenoverzicht.</strong></p>
<ol>
<li>Selecteer de orders die je wilt exporteren naar MyParcel.</li>
</ol>
<MPImg src="/documentation/magento/magento-bestelling-overzicht.jpg" alt="Magento bestelling overzicht" />
<ol start="2">
<li>Kies in de actie balk <code>Print MyParcel labels</code></li>
</ol>
<MPImg src="/documentation/magento/magento-actiemenu-bestellingen.jpg" alt="Magento actiemenu bestellingen" />
<ol start="3">
<li>Kies voor de juiste printpositie, indien je voor A4 hebt gekozen.</li>
</ol>
<MPImg src="/documentation/magento/magento-print-position.jpg" alt="Magento print positie" />
<ol start="4">
<li>Het PDF verschijnt op je computer en is klaar om te printen.</li>
<li>Wanneer je de instellingen in stap 3 wil overslaan, bijvoorbeeld omdat je via
de 'standaard verzendinstellingen' al de juiste verzendopties aan jouw
bestellingen hebt meegegeven, dan kan je via 'Print MyParcel labels direct'
je labels direct downloaden.</li>
</ol>
<MPImg src="/documentation/magento/magento-actiemenu-bestellingen-2.jpg" alt="Magento print positie 2" />
<p><strong>Per bestelling als je een Magento zending aanmaakt.</strong></p>
<ol>
<li>Klik op de desbetreffende order.</li>
</ol>
<MPImg src="/documentation/magento/magento-order.jpg" alt="Magento order" />
<ol start="2">
<li>Kies rechtsboven voor de knop <code>Verzenden</code>.</li>
</ol>
<MPImg src="/documentation/magento/magento-order-detail.jpg" alt="Magento order detail" />
<ol start="3">
<li>Rechts onderin verschijnt een vak. Hier kan je zowel het verzendtype
aanpassen als de beschikbare verzendopties per verzendtype.</li>
</ol>
<MPImg src="/documentation/magento/magento-aanpassing-verzendmethode-opties.jpg" alt="Magento aanpassing verzendmethode opties" />
<ol start="4">
<li>Verstuur zending naar MyParcel via <code>Verzending Inboeken</code>. Dit zorgt ervoor
dat er een concept verzending wordt aangemaakt.</li>
<li>Vervolgens kun je meteen het label printen in de order door rechtsboven op de
knop <code>Print Label</code> te klikken.</li>
</ol>
<MPImg src="/documentation/magento/magento-print-label.jpg" alt="Magento print labels" />
<h2 id="multicollo-zending" tabindex="-1"><a class="header-anchor" href="#multicollo-zending" aria-hidden="true">#</a> Multicollo zending</h2>
<p>Naast het aanmaken van een enkele zending is het ook mogelijk om een multicollo
zending aan te maken. Dit beteken dat er meerdere labels geprint kunnen worden,
die bij elkaar horen.</p>
<p>Er zijn twee manieren om een multicollo zending aan te maken:</p>
<ul>
<li>In het orderoverzicht, bij <code>acties</code></li>
<li>In de order onder <code>verzenden</code></li>
</ul>
<p>Bij allebei is het mogelijk om aan te geven hoeveel labels je bij de
desbetreffende order wilt ontvangen.</p>
<Stack class="lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
<MPImg src="/documentation/magento/magento-multicollo-order-grid.jpg" alt="Magento multicollo order grid" />
<MPImg src="/documentation/magento/magento-multicollo-in-order.jpg" alt="Magento multicollo in order" />
</Stack>
<h2 id="orderoverzicht" tabindex="-1"><a class="header-anchor" href="#orderoverzicht" aria-hidden="true">#</a> Orderoverzicht</h2>
<p>Om je altijd inzicht te bieden in de status van jouw zendingen zijn er 3 nieuwe
kolommen automatisch toegevoegd aan het orderoverzicht nadat de MyParcel plugin
is geïnstalleerd.</p>
<MPImg src="/documentation/magento/magento-trackstatus-tracknummer-actie.jpg" alt="Magento trackstatus tracknummer actie" />
<ul>
<li>Track status : Hier kun je de status van de zending zien, deze wordt altijd up
to date gehouden.</li>
<li>Track nummer : Hier vind je de barcode van je zending.</li>
<li>Track actie : Wanneer de order nog niet verzonden is en je klikt op 'Select',
dan verschijnt er een pop-up met download opties voor verzendlabels. Mocht je
order al verzonden zijn, dan kan je hier het label nogmaals downloaden.</li>
</ul>
<MPImg src="/documentation/magento/magento-besteloverzicht-label-genereren.jpg" alt="Magento besteloverzicht label genereren" />
<h2 id="track-trace-e-mail-template" tabindex="-1"><a class="header-anchor" href="#track-trace-e-mail-template" aria-hidden="true">#</a> Track&amp;Trace e-mail template</h2>
<p>Wanneer er een orderbevestigingsmail naar de klant gestuurd wordt vanuit Magento
neemt deze de barcode van de zending automatisch mee. Dit hoeft nu niet apart
ingesteld te worden. Mocht je nu toch een andere Track &amp; Trace email willen
willen versturen naar de klant vanuit Magento 2, ga dan naar <code>'Winkels' → ' Verkopen' → 'E-mails voor verkoop' → 'MyParcel barcode'</code> en stel hier je eigen
template naar wens in.</p>
</template>
