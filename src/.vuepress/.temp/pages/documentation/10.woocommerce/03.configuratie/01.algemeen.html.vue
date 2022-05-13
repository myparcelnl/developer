<template><MPImg src="/documentation/woocommerce/woocommerce_general.jpg" alt="woocommerce_general" />
<h2 id="api-instellingen" tabindex="-1"><a class="header-anchor" href="#api-instellingen" aria-hidden="true">#</a> API instellingen</h2>
<p>Om zendingen in het juiste account terecht te laten komen, zal je de API key uit
je MyParcel-account moeten invullen. Als je ingelogd bent in jouw MyParcel
account, kun je deze vinden bij jouw <code>Shopinstellingen &gt; Algemeen</code>. Het kan zijn
dat je de API key nog niet ziet, maar deze eerst nog moet genereren. Klik dan
op <code>Genereer API-key</code> en kopieer de API-key.</p>
<MPImg src="/documentation/woocommerce/woocommerce_api.jpg" alt="woocommerce api key" />
<h2 id="modus-orderbeheer" tabindex="-1"><a class="header-anchor" href="#modus-orderbeheer" aria-hidden="true">#</a> Modus (Orderbeheer)</h2>
<p>Bij de instelling &quot;Modus&quot; kan je aangeven of je alleen een label aan wilt maken
of dat je de hele bestelling naar MyParcel wilt exporten.</p>
<MPImg src="/documentation/woocommerce/woocommerce-orderbeheer.jpg" alt="woocommerce orderbeheer" />
<p>Als je alleen een label aan wilt maken kan je de rest van de handleiding volgen.
Wanneer je de hele order wilt exporten moet je &quot;Modus&quot; op &quot;Exporteer volledige
order&quot; zetten. In de backoffice van MyParcel is het belangrijk, dat je in jouw
account instellingen onder &quot;Orderinformatie en Printopties&quot; &quot;Orderinformatie
importeren&quot; op &quot;Ja&quot; zet. Ook kan je hierna onderaan aangeven hoe je de
labels/pakbonnen wilt printen in de backoffice.</p>
<MPImg src="/documentation/woocommerce/orderbeheer-backoffice-instelling.jpg" alt="MyParcel orderbeheer" />
<h2 id="label-weergave" tabindex="-1"><a class="header-anchor" href="#label-weergave" aria-hidden="true">#</a> Label weergave</h2>
<p>Geef hier aan of je het label wilt downloaden als PDF of wilt openen in een
nieuw tabblad.</p>
<MPImg src="/documentation/woocommerce/woocommerce-labelweergave.jpg" alt="WooCommerce label weergaven" />
<h2 id="label-formaat" tabindex="-1"><a class="header-anchor" href="#label-formaat" aria-hidden="true">#</a> Label formaat</h2>
<p>Hier geef je aan of je het label op een standaard (A4) of op een labelprinter (
A6) wilt printen.</p>
<MPImg src="/documentation/woocommerce/woocommerce-labelformaat.jpg" alt="WooCommerce label formaat" />
<h2 id="vraag-om-startpositie-bij-printen" tabindex="-1"><a class="header-anchor" href="#vraag-om-startpositie-bij-printen" aria-hidden="true">#</a> Vraag om startpositie bij printen</h2>
<p>Met deze optie kan je verder gaan met printen waar je de laatste keer was
gebleven. Hierdoor kun je alle stickers op het A4-vel gebruiken.</p>
<MPImg src="/documentation/woocommerce/woocommerce-startposition.jpg" alt="WooCommerce start position" />
<h2 id="track-trace-in-email" tabindex="-1"><a class="header-anchor" href="#track-trace-in-email" aria-hidden="true">#</a> Track &amp; Trace in email</h2>
<p>Zet &quot;Track &amp; Trace in e-mail&quot; aan om de barcode en Track &amp; Trace link mee te
sturen in de verzendbevestiging naar je klanten. De Track &amp; Trace code wordt dan
toegevoegd aan de &quot;Bestelling afgerond en/of verzonden&quot;-mail, die wordt
verzonden vanuit WooCommerce op het moment dat een bestelling de status &quot;
Afgerond&quot; krijgt. We adviseren de track en trace-optie in je MyParcel-account
uit te zetten, als je gebruik maakt van deze optie. Anders krijgen je klanten
meerdere mails over hun verzonden pakket.</p>
<Message title="" type="note"><p>Let op! Zorg dat &quot;Verwerk zendingen direct&quot; is ingeschakeld, wanneer je deze
optie gebruikt in combinatie met de Track &amp; Trace in email optie. Anders wordt
de Track &amp; Trace code niet opgenomen in de email naar je klant, omdat er op het
moment van verzenden nog geen barcode is gecreëerd.</p>
</Message><MPImg src="/documentation/woocommerce/woocommerce-tracktrace-mail.jpg" alt="WooCommerce Track & Trace mail" />
<h2 id="track-trace-in-account" tabindex="-1"><a class="header-anchor" href="#track-trace-in-account" aria-hidden="true">#</a> Track &amp; Trace in account</h2>
<p>Als je klanten een account kunnen aanmaken in je webshop, kun je met er met deze
optie voor zorgen dat de link van de barcode van de bestelling in het account
wordt getoond.</p>
<MPImg src="/documentation/woocommerce/woocommerce-tracktrace-account.jpg" alt="WooCommerce Track & Trace account" />
<h2 id="bezorgdatum-in-klantcomminucatie" tabindex="-1"><a class="header-anchor" href="#bezorgdatum-in-klantcomminucatie" aria-hidden="true">#</a> Bezorgdatum in klantcomminucatie</h2>
<p>Deze optie laat je klanten de bezorgdag zien in orderbevestigingen en Mijn
Account.</p>
<MPImg src="/documentation/woocommerce/woocommerce-bezorgdatum-klantcommunicatie.jpg" alt="WooCommerce bezorgdatum klantcommunicatie" />
<h2 id="verwerk-zendingen-direct" tabindex="-1"><a class="header-anchor" href="#verwerk-zendingen-direct" aria-hidden="true">#</a> Verwerk zendingen direct</h2>
<p>Wanneer je deze optie inschakelt, zullen zendingen direct worden verwerkt
wanneer deze verzonden zijn naar MyParcel. Ze zijn dan direct voorgemeld en de
zending is niet meer aan te passen in je MyParcel-backoffice. Als deze optie
niet aan staat, wordt de zending als &quot;Concept&quot; ingeschoten. Je kunt de zending
dan nog steeds aanpassen in je MyParcel-account na het exporteren.</p>
<MPImg src="/documentation/woocommerce/woocommerce-verwerk-zendingen-direct.jpg" alt="WooCommerce verwerk zendingen direct" />
<h2 id="orderstatus-automatisering" tabindex="-1"><a class="header-anchor" href="#orderstatus-automatisering" aria-hidden="true">#</a> Orderstatus automatisering</h2>
<p>Met deze optie kan je kiezen wanneer je de status wilt veranderen. Je kan kiezen
om dit na het exporteren of printen te doen. Hierna kan je kiezen welke status
de zendingen moet krijgen na het exporteren of printen.</p>
<MPImg src="/documentation/woocommerce/woocommerce-automatisering.jpg" alt="WooCommerce automatisering" />
<h2 id="bewaar-barcode-in-een-notitie" tabindex="-1"><a class="header-anchor" href="#bewaar-barcode-in-een-notitie" aria-hidden="true">#</a> Bewaar barcode in een notitie</h2>
<p>Plaats de barcode in een notitie van een order, hierdoor is het mogelijk voor
andere plugins om de barcode makkelijk te kunnen uitlezen.</p>
<MPImg src="/documentation/woocommerce/woocommerce-barcode-notitie.jpg" alt="WooCommerce barcode in notitie" />
<h2 id="titel-voor-barcode" tabindex="-1"><a class="header-anchor" href="#titel-voor-barcode" aria-hidden="true">#</a> Titel voor barcode</h2>
<p>Je kunt hier de tekst veranderen dat voor de barcode van de zending komt te
staan in de notities van de bestelling. Dit is de tekst die voor de barcode komt
te staan in de notities.</p>
<Message title="" type="note"><p>Let op: maak je gebruik van een koppeling met Effect Connect om Bol.com-orders
in jouw WooCommerce-omgeving te krijgen? Laat de standaard waarde Tracking code:
staan om de barcode automatisch terug te koppelen naar Bol.com.</p>
</Message><h2 id="diagnostische-hulpmiddelen" tabindex="-1"><a class="header-anchor" href="#diagnostische-hulpmiddelen" aria-hidden="true">#</a> Diagnostische hulpmiddelen</h2>
<p>Je kunt de diagnostische hulpmiddelen inschakelen op het moment dat er problemen
zijn met het exporteren van de zendingen. Hiermee worden er logbestanden
aangemaakt waarin de communicatie tussen WooCommerce en MyParcel wordt
beschreven.</p>
<MPImg src="/documentation/woocommerce/woocommerce-diagnostische-hulpmiddelen.jpg" alt="woocommerce diagnostische hulpmiddelen" />
</template>
