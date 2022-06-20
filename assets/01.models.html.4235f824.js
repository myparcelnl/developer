import{K as n}from"./app.08bc0512.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<p><code>MyParcelNL/Sdk/src/Model</code></p><h2 id="postnlconsignment" tabindex="-1"><a class="header-anchor" href="#postnlconsignment" aria-hidden="true">#</a> PostNLConsignment</h2><p><code>\\MyParcelNL\\Sdk\\src\\Model\\Consignment\\PostNLConsignment</code></p><h3 id="set-consignment-attributes" tabindex="-1"><a class="header-anchor" href="#set-consignment-attributes" aria-hidden="true">#</a> Set consignment attributes</h3><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Consignment<span class="token punctuation">\\</span>PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api_key_from_backoffice&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setReferenceIdentifier</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;order-146&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Not visible on the label</span>
    
    <span class="token comment">// Recipient/address: https://myparcelnl.github.io/api/#7_B</span>
    <span class="token operator">-&gt;</span><span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Piet Hier&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// Name</span>
    <span class="token operator">-&gt;</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test@test.nl&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// E-mail address</span>
    <span class="token operator">-&gt;</span><span class="token function">setPhone</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;+31 612345678&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Phone number</span>
    <span class="token operator">-&gt;</span><span class="token function">setCompany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Piet BV&#39;</span><span class="token punctuation">)</span>     <span class="token comment">// Company</span>
    
    <span class="token comment">// Preferred: Street, number and suffix in one line</span>
    <span class="token operator">-&gt;</span><span class="token function">setFullStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Plein 1945 55b&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// Alternatively, you can send the street data separately:</span>
    <span class="token operator">-&gt;</span><span class="token function">setStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Plein 1945&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Street</span>
    <span class="token operator">-&gt;</span><span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span>           <span class="token comment">// Number</span>
    <span class="token operator">-&gt;</span><span class="token function">setNumberSuffix</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// Suffix</span>
    
    <span class="token operator">-&gt;</span><span class="token function">setStreetAdditionalInfo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2 hoog&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Additional info</span>
    
    <span class="token operator">-&gt;</span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Amsterdam&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// City</span>
    <span class="token operator">-&gt;</span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2231JE&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Postal code</span>
    <span class="token operator">-&gt;</span><span class="token function">setCountry</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span>        <span class="token comment">// Country                </span>
            
    <span class="token comment">// Available package types:</span>
    <span class="token comment">// 1: Package (default)</span>
    <span class="token comment">// 2: Mailbox package</span>
    <span class="token comment">// 3: Letter</span>
    <span class="token comment">// 4: Digital stamp</span>
    <span class="token operator">-&gt;</span><span class="token function">setPackageType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@see</span> &quot;Package type and options &gt; Package types&quot; 
     */</span>
    <span class="token comment">// Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</span>
    <span class="token operator">-&gt;</span><span class="token function">setOnlyRecipient</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span>   
    <span class="token comment">// Recipient must sign for the package. This option is required for Pickup delivery type.</span>
    <span class="token operator">-&gt;</span><span class="token function">setSignature</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>         
    <span class="token comment">// Return the package to the sender when the recipient is not home.</span>
    <span class="token operator">-&gt;</span><span class="token function">setReturn</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>           
    <span class="token comment">// Must be specified if the dimensions of the package are between 100x70x50 and 175x78x58 cm.</span>
    <span class="token operator">-&gt;</span><span class="token function">setLargeFormat</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span>      
    <span class="token comment">// Allows a shipment to be insured up to certain amount. Only packages (package type 1) can be insured.</span>
    <span class="token operator">-&gt;</span><span class="token function">setInsurance</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span>          
    
    <span class="token operator">-&gt;</span><span class="token function">setLabelDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Order 146&#39;</span><span class="token punctuation">)</span> <span class="token comment">// This description will appear on the shipment label (for package type 1)</span>
        
    <span class="token comment">// Delivery: https://myparcelnl.github.io/api/#8</span>
    <span class="token operator">-&gt;</span><span class="token function">setDeliveryType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setDeliveryDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setDeliveryRemark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    
    <span class="token comment">// Set pickup location</span>
    <span class="token operator">-&gt;</span><span class="token function">setPickupLocationName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Supermarkt&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPickupStreet</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Straatnaam&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPickupNumber</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;32&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPickupPostalCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1234 AB&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setPickupCity</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hoofddorp&#39;</span><span class="token punctuation">)</span>
      
    <span class="token comment">// Physical properties</span>
    <span class="token operator">-&gt;</span><span class="token function">setPhysicalProperties</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;weight&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">73</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// Array with physical properties of the shipment. Currently, only used to set the weight in grams for digital stamps (which is required)</span>
    
    <span class="token comment">// Auto detect pickup</span>
    <span class="token operator">-&gt;</span><span class="token function">setAutoDetectPickup</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// When this setting is false MyParcel do not auto-detect a PostNL pickup addresses.</span>
    
    <span class="token comment">// Save recipient address</span>
    <span class="token operator">-&gt;</span><span class="token function">setSaveRecipientAddress</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// When this setting is true the recipient address will be saved in the address book.</span>

    <span class="token comment">// Non-EU shipment attributes: see https://myparcelnl.github.io/api/#7_E</span>
    <span class="token operator">-&gt;</span><span class="token function">setInvoice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="get-consignment-attributes" tabindex="-1"><a class="header-anchor" href="#get-consignment-attributes" aria-hidden="true">#</a> Get consignment attributes</h3><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span>
    <span class="token operator">-&gt;</span><span class="token function">getApiKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getReferenceIdentifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Barcode is available after using setLinkOfLabels() or setPdfOfLabels() on the MyParcelCollection the consignment has been added to</span>
    <span class="token operator">-&gt;</span><span class="token function">getBarcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token operator">-&gt;</span><span class="token function">getLabelDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getConsignmentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getShopId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Recipient info</span>
    <span class="token operator">-&gt;</span><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    <span class="token operator">-&gt;</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getCompany</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// It doesn&#39;t matter whether you used setFullStreet() or set all parts separately</span>
    <span class="token operator">-&gt;</span><span class="token function">getStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getStreetAdditionalInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getNumberSuffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getFullStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPostalCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isCdCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isCorrectAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isEuCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token comment">// Package type</span>
    <span class="token operator">-&gt;</span><span class="token function">getPackageType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Get value of options</span>
    <span class="token operator">-&gt;</span><span class="token function">isOnlyRecipient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">isLargeFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getInsurance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token comment">// Get pickup location info</span>
    <span class="token operator">-&gt;</span><span class="token function">getPickupLocationName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPickupStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPickupNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPickupPostalCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPickupCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Delivery</span>
    <span class="token operator">-&gt;</span><span class="token function">getDeliveryDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getDeliveryType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Physical properties (digital stamps or non-EU shipments)</span>
    <span class="token operator">-&gt;</span><span class="token function">getPhysicalProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Non-EU attributes</span>
    <span class="token operator">-&gt;</span><span class="token function">getInvoice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">getTotalWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="myparcelcustomsitem" tabindex="-1"><a class="header-anchor" href="#myparcelcustomsitem" aria-hidden="true">#</a> MyParcelCustomsItem</h4><p>This object is embedded in the PostNLConsignment object for global shipments and is mandatory for non-EU shipments.</p><p><code>MyParcelNL/Sdk/src/Model/MyParcelCustomsItem</code></p><div class="language-php ext-php"><pre class="language-php"><code>  <span class="token operator">-&gt;</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// Amount of items in the package</span>
  
  <span class="token comment">// ISIC/IDEP code (https://www.cbs.nl/nl-nl/deelnemers-enquetes/deelnemers-enquetes/bedrijven/onderzoek/lopend/internationale-handel-in-goederen/idep-codelijsten) </span>
  <span class="token operator">-&gt;</span><span class="token function">setClassification</span><span class="token punctuation">(</span><span class="token number">0111</span><span class="token punctuation">)</span> <span class="token comment">// Example: 0111 = &quot;Growing of cereals (except rice), leguminous crops and oil seeds&quot;  </span>
  <span class="token operator">-&gt;</span><span class="token function">setCountry</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Country of origin</span>
  <span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Cereal grains&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">setItemValue</span><span class="token punctuation">(</span><span class="token number">40000</span><span class="token punctuation">)</span> <span class="token comment">// Price of item in cents</span>
  <span class="token operator">-&gt;</span><span class="token function">setWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// The total weight for these items in whole grams. Between 0 and 20000 grams.</span>
  
  <span class="token operator">-&gt;</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">getClassification</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">getItemValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token operator">-&gt;</span><span class="token function">isFullyFilledItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,11);function p(e,o){return t}var i=s(a,[["render",p],["__file","01.models.html.vue"]]);export{i as default};
