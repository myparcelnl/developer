<template><h2 id="pakkettype-koppelen-aan-verzendtype" tabindex="-1"><a class="header-anchor" href="#pakkettype-koppelen-aan-verzendtype" aria-hidden="true">#</a> Pakkettype koppelen aan verzendtype</h2>
<p>Je kunt verzendmethoden koppelen aan een pakkettype, zodat het juiste label
wordt aangemaakt in jouw MyParcel account. Met onderstaand voorbeeld lichten we
dit verder toe.</p>
<MPImg src="/documentation/woocommerce/woocommerce-standaard-export-settings.jpg" alt="woocommerce standaard export pakket" />
<p>In het voorbeeld is te zien dat de verzendmethode Vast tarief is gekoppeld aan
het pakkettype Pakket. Dit betekent dat orders met deze verzendmethode standaard
als pakket doorgezet worden naar MyParcel.</p>
<MPImg src="/documentation/woocommerce/woocommerce-standaard-export-bbp.jpg" alt="woocommerce standaard export bbp" />
<p>In het voorbeeld is te zien dat de verzendmethode Vast tarief is gekoppeld aan
het pakkettype Brievenbuspakje. Dit betekent dat orders met deze verzendmethode
standaard als brievenbuspakje doorgezet worden naar MyParcel.</p>
<MPImg src="/documentation/woocommerce/woocommerce-standaard-export-dpz.jpg" alt="woocommerce standaard export dpz" />
<p>In het voorbeeld is te zien dat de verzendmethode Vast tarief is gekoppeld aan
het pakkettype Digitale postzegel. Dit betekent dat orders met deze
verzendmethode standaard als digitale postzegel doorgezet worden naar MyParcel.</p>
<Message title="" type="note"><p>Let op! Het gaat hier om de standaardinstelling. Uiteraard kan dit nog per order
handmatig aangepast worden.</p>
</Message><h2 id="instellen-brievenbuspakje" tabindex="-1"><a class="header-anchor" href="#instellen-brievenbuspakje" aria-hidden="true">#</a> Instellen brievenbuspakje</h2>
<Message title="" type="note"><p>Let op! Deze plugin is niet in staat om van meerdere BBP-zendingen automatisch
een pakket te genereren. Hiervoor raden wij aan om een externe plugin te
gebruiken. Ons advies is om de Bolder elements of de table rate plugin van
Woocommerce zelf te gebruiken. Met deze plugins kun je namelijk voorwaarden
instellen.</p>
</Message><p>Ga naar <code>WooCommerce &gt; verzendmethoden &gt; verzendklassen</code> en voeg hier (zoals in
de screenshot) de verschillende verzendtypes in. In dit geval BBP afgekort van
brievenbuspakje.</p>
<MPImg src="/documentation/woocommerce/woocommerce-mailbox-verzendklassen.jpg" alt="woocommerce mailbox verzendklasse" />
<p>Sla na het toevoegen op en ga vervolgens naar de verzendmethoden in de
Woocommerce instellingen. Klik hier op de zone Nederland en afhankelijk hoe je
de verzendmethode hebt genoemd (deze titel kun je aanpassen) vervolgens zoals in
het 12 voorbeeld op &quot;bezorgd door PostNL&quot;.</p>
<MPImg src="/documentation/woocommerce/woocommerce-mailbox-verzendzone.jpg" alt="woocommerce mailbox verzendzone" />
<p>Hier binnen de omlijning in het rood, voer je de kosten in voor het BBP en klik
je op wijzigingen opslaan.</p>
<MPImg src="/documentation/woocommerce/woocommerce-mailbox-verzendklassen-prijzen.jpg" alt="woocommerce mailbox verzendklasse prijzen" />
<p>Bij de producten die je als brievenbuspakje wilt versturen selecteer je in het
product (zoals aangegeven in de screenshot) de verzendklasse.</p>
<MPImg src="/documentation/woocommerce/woocommerce-mailbox-verzendklassen-product.jpg" alt="woocommerce mailbox verzendklasse product" />
<p>Daarna dien je in de plugin bij standaard exportinstellingen de verzendmethode
te selecteren en op te slaan.</p>
<h2 id="koppel-emailadres-klant" tabindex="-1"><a class="header-anchor" href="#koppel-emailadres-klant" aria-hidden="true">#</a> Koppel emailadres klant</h2>
<p>Je kunt de keuze maken om het e-mailadres vanuit de order mee te sturen naar
MyParcel. Deze optie moet aan staan, als je gebruik maakt van de track en
trace-mails van MyParcel. In jouw MyParcel account kun je zelf deze email in- of
uitschakelen en opmaken in jouw eigen stijl.</p>
<MPImg src="/documentation/woocommerce/woocommerce-koppel-email.jpg" alt="woocommerce koppel emial" />
<h2 id="koppel-telefoonnummer-klant" tabindex="-1"><a class="header-anchor" href="#koppel-telefoonnummer-klant" aria-hidden="true">#</a> Koppel telefoonnummer klant</h2>
<p>Wanneer je het telefoonnummer van de klant koppelt met de zending, kan de
koerier dit gebruiken voor de aflevering van het pakket. De afleverkans voor
buitenlandzendingen wordt hiermee aanzienlijk verhoogd.</p>
<MPImg src="/documentation/woocommerce/woocommerce-koppel-telefoon.jpg" alt="woocommerce koppel telefoon" />
<h2 id="label-omschrijving" tabindex="-1"><a class="header-anchor" href="#label-omschrijving" aria-hidden="true">#</a> Label omschrijving</h2>
<p>Met deze optie kun je een beschrijving toevoegen aan de zending. Dit zal worden
afgedrukt op de linkerbovenhoek van het label en kun je gebruiken om de zending
in het MyParcel zendingenoverzicht op te zoeken. Gebruik [<strong>ORDER_NR</strong>] om het
ordernummer te vermelden.</p>
<MPImg src="/documentation/woocommerce/woocommerce-label-omschrijving.jpg" alt="woocommerce label omschrijving" />
<h2 id="leeg-pakket-gewicht" tabindex="-1"><a class="header-anchor" href="#leeg-pakket-gewicht" aria-hidden="true">#</a> Leeg pakket gewicht</h2>
<p>Geef hier aan wat het gewicht van een leeg pakket is. Het ligt aan de
instellingen van WooCommerce of dit in grammen of kilo's is.</p>
<MPImg src="/documentation/woocommerce/woocommerce-leeg-pakket-gewicht.jpg" alt="woocommerce leeg pakket gewicht" />
<h2 id="standaard-hs-code" tabindex="-1"><a class="header-anchor" href="#standaard-hs-code" aria-hidden="true">#</a> Standaard HS-code</h2>
<p>Vul hier een goederencode in welke standaard gebruikt kan worden bij het
exporteren van zendingen buiten de EU. Je kan deze code ook per product
invullen. Ga
naar <code>Producten &gt; kies het gewenste product &gt; Productgegevens &gt; Verzendmethoden</code>
en vul hier de gewenste code in.</p>
<MPImg src="/documentation/woocommerce/woocommerce-standaard-hs-code.jpg" alt="woocommerce standaard hs code" />
<h2 id="type-douanezending" tabindex="-1"><a class="header-anchor" href="#type-douanezending" aria-hidden="true">#</a> Type douanezending</h2>
<p>Geef hier aan wat voor soort zendingen je buiten de EU verstuurt. In de regel
zijn dit commerciële goederen.</p>
<MPImg src="/documentation/woocommerce/woocommerce-douanezending.jpg" alt="woocommerce douanezending" />
<h2 id="standaard-land-van-herkomst" tabindex="-1"><a class="header-anchor" href="#standaard-land-van-herkomst" aria-hidden="true">#</a> Standaard land van herkomst</h2>
<p>Bij zendingen buiten de EU moet je aangeven vanuit welk land jouw producten
oorspronkelijk afkomstig zijn. In dit veld vul je de <strong>landcode</strong> van het
betreffende land in. In het geval van Nederland is dit <strong>NL</strong>.</p>
<MPImg src="/documentation/woocommerce/woocommerce-land-van-herkomst.jpg" alt="woocommerce land van hermomst" />
<h2 id="automatische-export" tabindex="-1"><a class="header-anchor" href="#automatische-export" aria-hidden="true">#</a> Automatische export</h2>
<p>Zet deze fucntie aan als je jouw orders direct na betaling automatisch naar
MyParcel wilt exporteren.</p>
<MPImg src="/documentation/woocommerce/woocommerce-auto-export.jpg" alt="woocommerce automatische export" />
</template>
