import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as h,c as p,a,w as i,b as e,e as o,d as n,r as l}from"./app.3f588bc4.js";var c="/documentation/shopify/shopify-default-export-settings.gif";const u={},g=o('<h2 id="shopify" tabindex="-1"><a class="header-anchor" href="#shopify" aria-hidden="true" tabindex="-1">#</a> Shopify</h2><h3 id="introductie" tabindex="-1"><a class="header-anchor" href="#introductie" aria-hidden="true" tabindex="-1">#</a> Introductie</h3><p>Met onze Shopify plugin kun je vijf soorten MyParcel zendingen aanmaken:</p><ul><li>Pakketten binnen Nederland (huisadres en ophaallocaties PostNL)</li><li>Pakketten binnen de EU en buiten de EU</li><li>Brievenbuspakje</li><li>Digitale Postzegel</li><li>Ongefrankeerd label</li></ul>',4),k=e("p",null,"Plugins van derden die we ondersteunen:",-1),b=n("PostNL Pick-up points"),v=e("p",null,"Let op: Wij leveren geen support op deze plugin!",-1),f=o('<h3 id="installatie" tabindex="-1"><a class="header-anchor" href="#installatie" aria-hidden="true" tabindex="-1">#</a> Installatie</h3><h4 id="nieuwe-installatie" tabindex="-1"><a class="header-anchor" href="#nieuwe-installatie" aria-hidden="true" tabindex="-1">#</a> Nieuwe installatie</h4><p>Om de MyParcel-plugin te installeren, volg je de volgende stappen:</p><ul><li>Ga in jouw Shopify-omgeving naar Apps.</li><li>Klik rechtsboven op Ga naar de Shopify App Store.</li><li>Selecteer de gewenste shop.</li><li>Typ &#39;MyParcel&#39; in de zoekbalk en klik op enter.</li><li>Klik op de app &#39;MyParcel NL&#39; en vervolgens op Add app.</li></ul><h4 id="bijwerken-bestaande-installatie" tabindex="-1"><a class="header-anchor" href="#bijwerken-bestaande-installatie" aria-hidden="true" tabindex="-1">#</a> Bijwerken bestaande installatie</h4><p>De app wordt bij wijzigingen automatisch bijgewerkt, je hebt hier zelf geen onderhoud aan.</p><h3 id="configuratie" tabindex="-1"><a class="header-anchor" href="#configuratie" aria-hidden="true" tabindex="-1">#</a> Configuratie</h3><h4 id="algemene-instellingen" tabindex="-1"><a class="header-anchor" href="#algemene-instellingen" aria-hidden="true" tabindex="-1">#</a> Algemene instellingen</h4>',8),m=e("h5",{id:"standaard-paginakeuze",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#standaard-paginakeuze","aria-hidden":"true",tabindex:"-1"},"#"),n(" Standaard paginakeuze")],-1),j=e("p",null,"Hier geef je aan of je het label op een standaard (A4) of op een labelprinter ( A6) wilt printen.",-1),_=e("h5",{id:"beschrijving-op-label",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beschrijving-op-label","aria-hidden":"true",tabindex:"-1"},"#"),n(" Beschrijving op label")],-1),z=e("p",null,[n("Met deze optie kun je een beschrijving toevoegen aan de zending. Dit zal worden afgedrukt op de linkerbovenhoek van het label en kun je gebruiken om de zending in het MyParcel zendingenoverzicht op te zoeken. Gebruik "),e("code",null,"{order_name}"),n(" om de titel van de order of "),e("code",null,"{order_number}"),n(" om het ordernummer te vermelden.")],-1),w=o('<h5 id="fulfillment" tabindex="-1"><a class="header-anchor" href="#fulfillment" aria-hidden="true" tabindex="-1">#</a> Fulfillment</h5><p>Je hebt de mogelijkheid om jouw orders automatisch de status &#39;Fulfilled&#39; te geven, wanneer PostNL jouw zending heeft gescand. Wil je dit liever handmatig doen? Selecteer dan de optie Manueel. Ga naar Bestellingen, selecteer de gewenste orders en klik bovenaan het orderoverzicht op Bestellingen vervullen om deze status te veranderen.</p><h4 id="account" tabindex="-1"><a class="header-anchor" href="#account" aria-hidden="true" tabindex="-1">#</a> Account</h4><h5 id="api-key" tabindex="-1"><a class="header-anchor" href="#api-key" aria-hidden="true" tabindex="-1">#</a> API key</h5>',4),x=n("Het belangrijkste van de koppeling is de API key. Deze kan je in jouw "),y=n("MyParcel backoffice"),P=n(" terugvinden. Klik links onderin op "),S=e("code",null,"Shop instellingen > Selecteer de gewenste shop > Algemeen > API instellingen",-1),M=n(" . Wanneer je nog geen API key hebt, kan je deze aanmaken door op Genereer API key te klikken."),A=e("h4",{id:"herinneringsmail-afhaallocatie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#herinneringsmail-afhaallocatie","aria-hidden":"true",tabindex:"-1"},"#"),n(" Herinneringsmail afhaallocatie")],-1),B=e("p",null,"De MyParcel-plugin heeft niet de mogelijkheid om de afhaallocaties in de checkout zelf te tonen. Jouw klant kan de gewenste locatie selecteren op de bedankpagina na het plaatsen van zijn/haar bestelling. Zet deze functie aan om jouw klant na 30 minuten automatisch een herinneringsmail te sturen wanneer hij/zij is vergeten om een postpunt te selecteren.",-1),N=n(" ### Wereldzendingen "),q=e("p",null,"Om voor een wereldzending een douaneformulier op te stellen, zijn ook de ' HS-code', het 'gewicht per pakket' en 'land van oorsprong' benodigd. Hier kan je de standaard waarden in vullen welke worden gebruikt wanneer je dit niet bij de producten zelf hebt ingevuld.",-1),L=e("p",null,"Let op: wanneer je meer dan \xE9\xE9n soort product verzendt, is het belangrijk dat je per product een HS-code hebt ingesteld. Als je dit niet doet, is de kans aanwezig dat het pakket niet door de douane komt.",-1),I=o('<h4 id="standaard-exportinstellingen" tabindex="-1"><a class="header-anchor" href="#standaard-exportinstellingen" aria-hidden="true" tabindex="-1">#</a> Standaard exportinstellingen</h4><p>Met de standaard exportinstellingen heb je de mogelijkheid om aan de hand van de door jouw klant gekozen verzendmethode automatisch een gewenst pakkettype zoals een pakket of een brievenbuspakje aan te maken. De door jou aangemaakte verzendmethoden worden hier direct ingeladen, zodat je gelijk aan de slag kunt met het instellen van de exportvoorkeuren. Heb je nog geen verzendmethoden aangemaakt? Bekijk dan de [handleiding van Shopify] hoe je dit in kunt stellen.</p><p><img src="'+c+'" alt="Shopify default export settings"></p><p>Wanneer je op een verzendmethode klikt, opent een pop-up. In de pop-up kan je aangeven of de zending met MyParcel verzonden mag worden, welk type verzending en pakket er gebruikt moet worden en of er extra opties aan toegevoegd moeten worden.</p><h5 id="nederland" tabindex="-1"><a class="header-anchor" href="#nederland" aria-hidden="true" tabindex="-1">#</a> Nederland</h5><p>Beschikbare verzendtypes: Thuislevering en Afhaalpunt Beschikbare pakkettypes: Brievenbuspakket, Pakket, Ongefrankeerd label en Digitale postzegel Beschikbare opties: Handtekening voor ontvangst, Alleen geadresseerde, Retour bij geen gehoor, Extra groot formaat, 18+-check en verzekering tot \u20AC 5000</p><h5 id="postnl-locaties" tabindex="-1"><a class="header-anchor" href="#postnl-locaties" aria-hidden="true" tabindex="-1">#</a> PostNL Locaties</h5><p>Wanneer je jouw klanten een PostNL-locatie wilt aanbieden in de checkout, zul je een extra verzendmethode aan moeten maken in Shopify. Deze verzendmethode kan je daarna koppelen in de &quot;Standaard Exportinstellingen&quot;.</p>',8),W=o('<ol><li>Ga in Shopify naar &quot;Apps&quot;</li><li>Ga naar de MyParcel App</li><li>In de MyParcel App klik op &quot;Instellingen&quot; links bovenaan de pagina</li><li>Scroll in de instellingen naar beneden tot je &quot;Standaard exportinstellingen&quot; ziet</li><li>Klik hier de verzendmethode die je hebt aangemaakt voor de PostNL-locaties aan</li><li>Zet &quot;Verzenden via MyParcel&quot; aan en &quot;Type verzending&quot; op &quot;Afhaalpunt&quot;</li><li>Klik na het instellen van de verzendmethode op &quot;Opslaan&quot; Na het opslaan van deze instellingen zal de klant na betaling gevraagd worden om een PostNL-locatie te selecteren.</li><li>Mocht dit vergeten worden, zal er na ongeveer 30 minuten een email ter herinnering verstuurd worden.</li></ol><h5 id="belgie" tabindex="-1"><a class="header-anchor" href="#belgie" aria-hidden="true" tabindex="-1">#</a> Belgi\xEB</h5><ul><li>Beschikbare verzendtypes: Thuislevering en Afhaalpunt</li><li>Beschikbare pakkettypes: Pakket</li><li>Beschikbare opties: Extra groot formaat en standaard verzekering tot \u20AC 500,-</li></ul><h5 id="europa" tabindex="-1"><a class="header-anchor" href="#europa" aria-hidden="true" tabindex="-1">#</a> Europa</h5><ul><li>Beschikbare verzendtypes: Thuislevering</li><li>Beschikbare pakkettypes: Pakket</li><li>Beschikbare opties: Standaard verzekering tot \u20AC 500,-</li></ul><h5 id="wereld" tabindex="-1"><a class="header-anchor" href="#wereld" aria-hidden="true" tabindex="-1">#</a> Wereld</h5><ul><li>Beschikbare verzendtypes: Thuislevering</li><li>Beschikbare pakkettypes: Pakket</li><li>Beschikbare opties: Standaard verzekering tot \u20AC 200,-</li></ul><h4 id="veelgestelde-vragen-over-de-configuratie" tabindex="-1"><a class="header-anchor" href="#veelgestelde-vragen-over-de-configuratie" aria-hidden="true" tabindex="-1">#</a> Veelgestelde vragen over de configuratie</h4><h5 id="waar-kan-ik-de-hs-code-en-land-van-oorsprong-op-productniveau-instellen" tabindex="-1"><a class="header-anchor" href="#waar-kan-ik-de-hs-code-en-land-van-oorsprong-op-productniveau-instellen" aria-hidden="true" tabindex="-1">#</a> Waar kan ik de &#39;HS-code&#39; en &#39;land van oorsprong&#39; op productniveau instellen?</h5><p>Selecteer het gewenste product op de pagina <code>Producten</code>. Onderaan de pagina vind je de onderstaande gegevens. Maak je gebruik van &#39;varianten&#39;? In dat geval vind je het onderstaande nadat je de gewenste variant binnen het product hebt aangeklikt.</p>',10),H=o('<h3 id="plugin-gebruik" tabindex="-1"><a class="header-anchor" href="#plugin-gebruik" aria-hidden="true" tabindex="-1">#</a> Plugin gebruik</h3><h4 id="aanmaken-van-een-verzendlabel" tabindex="-1"><a class="header-anchor" href="#aanmaken-van-een-verzendlabel" aria-hidden="true" tabindex="-1">#</a> Aanmaken van \xE9\xE9n verzendlabel</h4><p>Bij het openen van een bestelling vind je bovenaan de pagina de knop <code>Meer acties</code>. In de dropdown kan je de optie <code>Print label</code>. Je wordt doorgestuurd naar de MyParcel app waarna je het label gelijk kunt downloaden.</p><h4 id="aanmaken-meerdere-verzendlabels" tabindex="-1"><a class="header-anchor" href="#aanmaken-meerdere-verzendlabels" aria-hidden="true" tabindex="-1">#</a> Aanmaken meerdere verzendlabels</h4><p>Wanneer je meerdere bestellingen in \xE9\xE9n keer wilt downloaden, kan je deze in het bestellingenoverzicht aanvinken, op de knop <code>Meer acties</code> bovenaan de pagina klikken. In de dropdown vind je de optie <code>Print label</code>. Je wordt doorgestuurd naar de MyParcel app waarna je de labels gelijk kunt downloaden.</p><h4 id="aanpassen-van-een-enkele-zending" tabindex="-1"><a class="header-anchor" href="#aanpassen-van-een-enkele-zending" aria-hidden="true" tabindex="-1">#</a> Aanpassen van een enkele zending</h4><p>Wanneer je de bestelling als een ander pakkettype wilt exporteren dan de eerder ingestelde standaard exportinstellingen, kan je dit binnen de MyParcel app doen. Ga naar <code>Apps &gt; MyParcel NL</code> en open de gewenste order. Hier vind je de mogelijkheid om een export te maken met een aangepast pakkettype en eventuele verzendopties toevoegen of verwijderen.</p>',7),D=e("h4",{id:"checkout-afhaallocatie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#checkout-afhaallocatie","aria-hidden":"true",tabindex:"-1"},"#"),n(" Checkout afhaallocatie")],-1),V=e("p",null,"Wanneer je de optie 'afhaallocatie' aan een verzendmethode hebt gekoppeld (zie hoofdstuk 2.3) hebben jouw klanten de mogelijkheid om op de bedankpagina na de betaling een afhaallocatie te selecteren. Wil je jouw klanten een herinnering sturen wanneer ze vergeten om het postpunt te selecteren? Zet dan de optie 'Herinneringsmail afhaallocatie' uit hoofdstuk 2.4 aan.",-1),E=e("h4",{id:"retourlabel-mailen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#retourlabel-mailen","aria-hidden":"true",tabindex:"-1"},"#"),n(" Retourlabel mailen")],-1),G=n("Heeft jouw klant een bestelling geplaatst en wil hij/zij deze retour sturen? Verstuur eenvoudig een mail met het retourlabel door de order te openen en bovenaan de pagina op de knop te klikken. Onderaan het dropdownmenu vind je de optie 'send return label' om een mail naar jouw klant te sturen. Wil je instellingen zoals de opmaak van de mail en eigen bijdrage van jouw klant aanpassen? Dit kan in jouw "),O=n("MyParcel backoffice"),T=n(". Klik links onderin op "),K=e("code",null,"Shop instellingen > Selecteer de gewenste shop > Retour",-1),C=n("."),J=e("h4",{id:"testen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testen","aria-hidden":"true",tabindex:"-1"},"#"),n(" Testen")],-1),R=e("p",null,"Het is mogelijk om ophalen bij een PostNL-punt als bezorgoptie aan de checkout toe te voegen. Wij adviseren om, na het installeren en configureren van de plugin, het bestelproces te doorlopen door een test-bestelling te plaatsen en zo te bekijken of de checkout naar wens is. Het is ook mogelijk om zendingen te exporteren na het configureren van de plugin en het downloaden van labels te testen. Er worden geen kosten in rekening gebracht, zolang je de labels niet inlevert bij PostNL.",-1),Z=e("p",null,"Let op: digitale postzegels worden wel direct in rekening gebracht.",-1),F=o('<h3 id="veelgestelde-vragen" tabindex="-1"><a class="header-anchor" href="#veelgestelde-vragen" aria-hidden="true" tabindex="-1">#</a> Veelgestelde vragen</h3><h5 id="waarom-kan-mijn-klant-alleen-na-de-checkout-voor-een-afhaallocatie-kiezen" tabindex="-1"><a class="header-anchor" href="#waarom-kan-mijn-klant-alleen-na-de-checkout-voor-een-afhaallocatie-kiezen" aria-hidden="true" tabindex="-1">#</a> Waarom kan mijn klant alleen na de checkout voor een afhaallocatie kiezen?</h5><p>Om de veiligheid van betalingen te waarborgen, laat Shopify het niet toe dat partijen code aan een checkout toevoegen. Na de checkout is dit w\xE9l mogelijk waardoor we de optie toch aan de plugin toe hebben kunnen voegen. Samen met de herinneringsmail (zie hoofdstuk 2.4) kan je jouw klanten deze optie op de best mogelijke manier toevoegen.</p><h5 id="ik-heb-de-plugin-geinstalleerd-maar-wanneer-ik-een-zending-probeer-te-exporteren-krijg-ik-een-error" tabindex="-1"><a class="header-anchor" href="#ik-heb-de-plugin-geinstalleerd-maar-wanneer-ik-een-zending-probeer-te-exporteren-krijg-ik-een-error" aria-hidden="true" tabindex="-1">#</a> Ik heb de plugin ge\xEFnstalleerd, maar wanneer ik een zending probeer te exporteren, krijg ik een error.</h5><p>Mogelijk zijn de actieve verzendmethoden bij het configureren van de plugin nog niet aan pakkettypes gekoppeld. Volg de stappen in hoofdstuk 2.3 om dit in te stellen.</p>',5);function U(Q,X){const r=l("AutoLink"),d=l("Message"),t=l("MPImg");return h(),p("div",null,[g,a(d,{title:"",type:"tip"},{default:i(()=>[k,e("ul",null,[e("li",null,[a(r,{item:"https://apps.shopify.com/pick-up-points?locale=nl"},{default:i(()=>[b]),_:1})])])]),_:1}),a(d,{title:"",type:"note"},{default:i(()=>[v]),_:1}),f,a(t,{src:"/documentation/shopify/shopify-general-settings.jpg",alt:"Shopify general settings"}),m,j,_,z,a(t,{src:"/documentation/shopify/shopify-label-description.jpg",alt:"Shopify label description"}),w,e("p",null,[x,a(r,{item:"https://backoffice.myparcel.nl/"},{default:i(()=>[y]),_:1}),P,S,M]),a(t,{src:"/documentation/shopify/shopify-api-settings.jpg",alt:"Shopify api settings"}),A,B,a(t,{src:"/documentation/shopify/shopify-reminder-email-pickup-location.jpg",alt:"Shopify reminder email pickup location"}),N,q,a(d,{title:"",type:"note"},{default:i(()=>[L]),_:1}),I,a(t,{src:"/documentation/shopify/shopify-postnl-location.jpg",alt:"Shopify PostNL-locatie"}),W,a(t,{src:"/documentation/shopify/shopify-questions.jpg",alt:"Shopify questions"}),H,a(t,{src:"/documentation/shopify/shopify-change-shipment.jpg",alt:"Shopify api settings"}),D,V,a(t,{src:"/documentation/shopify/shopify-checkout-pickup.jpg",alt:"Shopify checkout pickup"}),E,e("p",null,[G,a(r,{item:"https://backoffice.myparcel.nl/"},{default:i(()=>[O]),_:1}),T,K,C]),J,R,a(d,{title:"",type:"note"},{default:i(()=>[Z]),_:1}),F])}var ee=s(u,[["render",U],["__file","14.shopify.html.vue"]]);export{ee as default};