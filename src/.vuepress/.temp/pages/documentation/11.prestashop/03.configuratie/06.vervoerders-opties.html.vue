<template><h1 id="vervoerders-opties" tabindex="-1"><a class="header-anchor" href="#vervoerders-opties" aria-hidden="true">#</a> Vervoerders opties</h1>
<p>Bij installatie van de plugin wordt automatisch de vervoerder PostNL (in BE
bpost, dpd en PostNL) aangemaakt. Het is ok mogelijk om andere en reeds
aangemaakte vervoerders te koppelen, waardoor de MyParcel bezorgopties en acties
beschikbaar worden voor orders met deze vervoerder. Dit doe je vanuit de Carrier
options tab in de plugin. Klik hier op het plusteken (+) om een vervoerder te
koppelen aan MyParcel. In het scherm wat hierop volgt kun je via 'Select PS
carrier' een bestaande vervoerder kiezen of via carrier name een nieuwe
vervoerder aanmaken. In de plugin staat de 'Carrier option' standaard op PostNL.
Nadat de vervoerder gekoppeld is, kun je voor deze vervoerder bezorgopties
configureren en kun je voor orders gedaan met deze vervoerder (met terugwerkende
kracht) labels printen in het orderoverzicht.</p>
<MPImg src="/documentation/prestashop/prestashop-carrier-settings.jpg" alt="PrestaShop carrier settings" />
<h2 id="checkout-delivery-form" tabindex="-1"><a class="header-anchor" href="#checkout-delivery-form" aria-hidden="true">#</a> Checkout delivery form</h2>
<p>Stel hier de titel van de bezorgopties in. Dit zal boven de bezorgopties qorden
getoond in de checkout. Geef hier ook aan op welke dagen je de pakketten bij
PostNL inlevert en welke cut-off tijd je hiervoor aanhoudt. De bezorgopties
zullen aan de hand van deze gegevens worden getoond.</p>
<p>Geef ook aan welke dagen afwijken van de standaard drop off days, bijvoorbeeld
bij feestdagen of vakanties.</p>
<p>Met <em><strong>Delivery days window</strong></em> optie kun je aangeven tot hoever in de toekomst
jouw klanten een leverdag kunnen kiezen. Wanneer je kiest voor 'Hide days'
worden er geen dagen getoond in de checkout.</p>
<p>Bij <em><strong>Drop off delay</strong></em> geef je aan hoeveel dagen er nodig zijn tot een pakket
kan worden verstuurd. Bijvoorbeeld wanneer je het product nog moet maken op het
moment van bestellen.</p>
<p>Bij de verschillende bezorgopties is het mogelijk een toeslag in te stellen.
Deze zal worden getoond in de checkout en worden doorberekend aan jouw klant.</p>
<h2 id="delivery" tabindex="-1"><a class="header-anchor" href="#delivery" aria-hidden="true">#</a> Delivery</h2>
<p>Stel hier in welk pakkettype er standaard moet worden gebruikt, wanneer er geen
pakkettype is ingevuld bij het product. Om dit bij het product in te stellen, ga
je naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Delivery</code> en
stel je de juiste waarden voor dat product in. Je kunt er hier ook voor kiezen
om alle zendingen een bezorgoptie mee te geven.</p>
<Message title="" type="note"><p>Let op: Dit kan alleen voor pakketten binnen Nederland!</p>
</Message><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h2>
<p>Stel hier in welk pakkettype er standaard moet worden gebruikt voor
retourzendingen.</p>
</template>
