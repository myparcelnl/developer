import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,e as i}from"./app.033e6678.js";const s={},a=i(`<p><code>MyParcelNL/Sdk/src/Model</code></p><h3 id="postnlconsignment" tabindex="-1"><a class="header-anchor" href="#postnlconsignment" aria-hidden="true">#</a> PostNLConsignment</h3><p><code>\\MyParcelNL\\Sdk\\src\\Model\\Consignment\\PostNLConsignment</code></p><h4 id="set-consignment-attributes" tabindex="-1"><a class="header-anchor" href="#set-consignment-attributes" aria-hidden="true">#</a> Set consignment attributes</h4><div class="language-php ext-php"><pre class="language-php"><code>$consignment = (new \\MyParcelNL\\Sdk\\src\\Model\\Consignment\\PostNLConsignment())
    -&gt;setApiKey(&#39;api_key_from_backoffice&#39;)
    -&gt;setReferenceIdentifier(&#39;order-146&#39;) // Not visible on the label
    
    // Recipient/address: https://myparcelnl.github.io/api/#7_B
    -&gt;setPerson(&#39;Piet Hier&#39;)    // Name
    -&gt;setEmail(&#39;test@test.nl&#39;)  // E-mail address
    -&gt;setPhone(&#39;+31 612345678&#39;) // Phone number
    -&gt;setCompany(&#39;Piet BV&#39;)     // Company
    
    // Preferred: Street, number and suffix in one line
    -&gt;setFullStreet(&#39;Plein 1945 55b&#39;)
    // Alternatively, you can send the street data separately:
    -&gt;setStreet(&#39;Plein 1945&#39;) // Street
    -&gt;setNumber(55)           // Number
    -&gt;setNumberSuffix(&#39;b&#39;)    // Suffix
    
    -&gt;setStreetAdditionalInfo(&#39;2 hoog&#39;) // Additional info
    
    -&gt;setCity(&#39;Amsterdam&#39;)    // City
    -&gt;setPostalCode(&#39;2231JE&#39;) // Postal code
    -&gt;setCountry(&#39;NL&#39;)        // Country                
            
    // Available package types:
    // 1: Package (default)
    // 2: Mailbox package
    // 3: Letter
    // 4: Digital stamp
    -&gt;setPackageType(1)

    /**
     * @see &quot;Package type and options &gt; Package types&quot; 
     */
    // Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.
    -&gt;setOnlyRecipient(false)   
    // Recipient must sign for the package. This option is required for Pickup delivery type.
    -&gt;setSignature(true)         
    // Return the package to the sender when the recipient is not home.
    -&gt;setReturn(true)           
    // Must be specified if the dimensions of the package are between 100x70x50 and 175x78x58 cm.
    -&gt;setLargeFormat(false)      
    // Allows a shipment to be insured up to certain amount. Only packages (package type 1) can be insured.
    -&gt;setInsurance(250)          
    
    -&gt;setLabelDescription(&#39;Order 146&#39;) // This description will appear on the shipment label (for package type 1)
        
    // Delivery: https://myparcelnl.github.io/api/#8
    -&gt;setDeliveryType()
    -&gt;setDeliveryDate()
    -&gt;setDeliveryRemark()    
    
    // Set pickup location
    -&gt;setPickupLocationName(&#39;Supermarkt&#39;)
    -&gt;setPickupStreet(&#39;Straatnaam&#39;)
    -&gt;setPickupNumber(&#39;32&#39;)
    -&gt;setPickupPostalCode(&#39;1234 AB&#39;)
    -&gt;setPickupCity(&#39;Hoofddorp&#39;)
      
    // Physical properties
    -&gt;setPhysicalProperties([&#39;weight&#39; =&gt; 73]) // Array with physical properties of the shipment. Currently, only used to set the weight in grams for digital stamps (which is required)
    
    // Auto detect pickup
    -&gt;setAutoDetectPickup(true) // When this setting is false MyParcel do not auto-detect a PostNL pickup addresses.
    
    // Save recipient address
    -&gt;setSaveRecipientAddress(true) // When this setting is true the recipient address will be saved in the address book.

    // Non-EU shipment attributes: see https://myparcelnl.github.io/api/#7_E
    -&gt;setInvoice()
    -&gt;setContents()
    -&gt;addItem();
</code></pre></div><h4 id="get-consignment-attributes" tabindex="-1"><a class="header-anchor" href="#get-consignment-attributes" aria-hidden="true">#</a> Get consignment attributes</h4><div class="language-php ext-php"><pre class="language-php"><code>$consignment
    -&gt;getApiKey()
    -&gt;getReferenceIdentifier()
    // Barcode is available after using setLinkOfLabels() or setPdfOfLabels() on the MyParcelCollection the consignment has been added to
    -&gt;getBarcode()
    
    -&gt;getLabelDescription()
    -&gt;getConsignmentId()
    -&gt;getShopId()
    -&gt;getStatus()
    
    // Recipient info
    -&gt;getPerson()
    -&gt;getEmail()    
    -&gt;getPhone()
    -&gt;getCompany()

    // It doesn&#39;t matter whether you used setFullStreet() or set all parts separately
    -&gt;getStreet()
    -&gt;getStreetAdditionalInfo()
    -&gt;getNumber()
    -&gt;getNumberSuffix()
    -&gt;getFullStreet()
    -&gt;getPostalCode()
    -&gt;getCity()
    -&gt;getCountry()
    -&gt;isCdCountry()
    -&gt;isCorrectAddress()
    -&gt;isEuCountry()
        
    // Package type
    -&gt;getPackageType()
    
    // Get value of options
    -&gt;isOnlyRecipient()
    -&gt;isSignature()
    -&gt;isReturn()
    -&gt;isLargeFormat()
    -&gt;getInsurance()
        
    // Get pickup location info
    -&gt;getPickupLocationName()
    -&gt;getPickupStreet()
    -&gt;getPickupNumber()
    -&gt;getPickupPostalCode()
    -&gt;getPickupCity()
    
    // Delivery
    -&gt;getDeliveryDate()
    -&gt;getDeliveryType()
    
    // Physical properties (digital stamps or non-EU shipments)
    -&gt;getPhysicalProperties()

    // Non-EU attributes
    -&gt;getInvoice()
    -&gt;getContents()
    -&gt;getItems()
    -&gt;getTotalWeight()
</code></pre></div><h5 id="myparcelcustomsitem" tabindex="-1"><a class="header-anchor" href="#myparcelcustomsitem" aria-hidden="true">#</a> MyParcelCustomsItem</h5><p>This object is embedded in the PostNLConsignment object for global shipments and is mandatory for non-EU shipments.</p><p><code>MyParcelNL/Sdk/src/Model/MyParcelCustomsItem</code></p><div class="language-php ext-php"><pre class="language-php"><code>  -&gt;setAmount(3) // Amount of items in the package
  
  // ISIC/IDEP code (https://www.cbs.nl/nl-nl/deelnemers-enquetes/deelnemers-enquetes/bedrijven/onderzoek/lopend/internationale-handel-in-goederen/idep-codelijsten) 
  -&gt;setClassification(0111) // Example: 0111 = &quot;Growing of cereals (except rice), leguminous crops and oil seeds&quot;  
  -&gt;setCountry(&#39;NL&#39;) // Country of origin
  -&gt;setDescription(&#39;Cereal grains&#39;)
  -&gt;setItemValue(40000) // Price of item in cents
  -&gt;setWeight() // The total weight for these items in whole grams. Between 0 and 20000 grams.
  
  -&gt;getAmount()
  -&gt;getClassification()
  -&gt;getCountry()
  -&gt;getDescription()
  -&gt;getItemValue()
  -&gt;getWeight()
  
  -&gt;isFullyFilledItem()
</code></pre></div>`,11),o=[a];function r(g,c){return t(),n("div",null,o)}var d=e(s,[["render",r],["__file","01.models.html.vue"]]);export{d as default};
