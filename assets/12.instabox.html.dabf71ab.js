import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a,b as r,w as s,e as d,d as e,r as c}from"./app.033e6678.js";const f={},p=d(`<p>Instabox requires a drop-off point to be added to each consignment. Get available drop-off points from the webservice. It will return an indexed array holding data from drop off points near the supplied postal code.</p><div class="language-php ext-php"><pre class="language-php"><code>$dropOffPoints = (new DropOffPointWebService(new CarrierInstabox()))
      -&gt;setApiKey(&#39;api_key_from_backoffice&#39;)
      -&gt;getDropOffPoints(&#39;valid_dutch_postal_code&#39;);
</code></pre></div><p>You can use these to select a preferred drop-off point. The <code>location_code</code> field provides a unique identifier.</p><p>Please note:</p><ul><li>The list for a given postal code may be empty when there are no drop off points available in the vicinity.</li><li>The user may have indicated a default drop off point in the backoffice, check <code>default_drop_off_point</code> field for each drop off point in the array.</li></ul><p>Create a DropOffPoint using the relevant fields returned for the selected drop-off point. Then set it on the consignment, which should be an otherwise valid Instabox consignment.</p><div class="language-php ext-php"><pre class="language-php"><code>$dropOffPoint = (new DropOffPoint())
    -&gt;setBoxNumber()                          // unused for Dutch addresses
    -&gt;setCc(&#39;NL&#39;)                             // country code (field: cc) returned for the drop-off point
    -&gt;setCity(&#39;Amsterdam&#39;)                    // city (field: city)
    -&gt;setLocationCode(&#39;location_code&#39;)        // field: location_code holds a unique id for the drop-off point
    -&gt;setLocationName(&#39;location_name&#39;)        // name of the drop-off point (field: location_name)
    -&gt;setStreet(&#39;Plein 1945&#39;)                 // street (field: street)
    -&gt;setNumber(55)                           // number (field: number)
    -&gt;setNumberSuffix(&#39;b&#39;)                    // number suffix (field: number_suffix)
    -&gt;setPostalCode(&#39;2231JE&#39;)                 // postal code (field: postal_code)
    -&gt;setRegion()                             // unused for Dutch addresses
    -&gt;setRetailNetworkId(&#39;retail_network_id&#39;)
    -&gt;setState();                             // unused for Dutch addresses

$consignment-&gt;setDropOffPoint($dropOffPoint);
</code></pre></div>`,7),l=e("The consignment can now be created, refer to "),u=e("create a consignment"),h=e(".");function _(m,g){const t=c("RouterLink");return n(),i("div",null,[p,a("p",null,[l,r(t,{to:"/documentation/50.php-sdk/02.examples/01.create-consignment.html"},{default:s(()=>[u]),_:1}),h])])}var x=o(f,[["render",_],["__file","12.instabox.html.vue"]]);export{x as default};
