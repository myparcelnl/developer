import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,e as n}from"./app.033e6678.js";const o={},a=n(`<p>It is possible to use multiple carriers. The following carriers are supported:</p><table><thead><tr><th>ID</th><th>Name</th><th>Carrier class</th><th>Consignment class</th></tr></thead><tbody><tr><td>1</td><td>PostNL</td><td><code>Model\\Carrier\\CarrierPostNL</code></td><td><code>Model\\Consignment\\PostNLConsignment</code></td></tr><tr><td>2</td><td>Bpost</td><td><code>Model\\Carrier\\CarrierBpost</code></td><td><code>Model\\Consignment\\BpostConsignment</code></td></tr><tr><td>3</td><td>DPD</td><td><code>Model\\Carrier\\CarrierDPD</code></td><td><code>Model\\Consignment\\DPDConsignment</code></td></tr><tr><td>5</td><td>Instabox</td><td><code>Model\\Carrier\\CarrierInstabox</code></td><td><code>Model\\Consignment\\InstaboxConsignment</code></td></tr></tbody></table><p>Please note, Instabox is only available in the Netherlands as of now, and can only ship to Dutch addresses. You can query which carriers are available like this:</p><div class="language-php ext-php"><pre class="language-php"><code>$options = (new CarrierOptionsWebService())
    -&gt;setApiKey(&#39;api_key_from_backoffice&#39;)
    -&gt;getCarrierOptions(&#39;shop_id&#39;);
</code></pre></div><p>You can get the required <code>shop_id</code> from <code>AccountWebService</code>, the only shop returned will be the shop belonging to the API key that is used. Since the <code>shop_id</code> will not change unless the API key changes, we advise you to store the <code>shop_id</code> until the user updates the API key.</p><div class="language-php ext-php"><pre class="language-php"><code>$shopId = (new AccountWebService())
    -&gt;setApiKey(&#39;api_key_from_backoffice&#39;)
    -&gt;getAccount()
    -&gt;getShops()
    -&gt;first()
    -&gt;getId();
</code></pre></div><h3 id="create-a-consignment-for-each-carrier-manually" tabindex="-1"><a class="header-anchor" href="#create-a-consignment-for-each-carrier-manually" aria-hidden="true">#</a> Create a consignment for each carrier manually</h3><div class="language-php ext-php"><pre class="language-php"><code>$postNL   = new \\MyParcelNL\\Sdk\\Model\\Consignment\\PostNLConsignment();
$bpost    = new \\MyParcelNL\\Sdk\\Model\\Consignment\\BpostConsignment();
$dpd      = new \\MyParcelNL\\Sdk\\Model\\Consignment\\DPDConsignment();
$instabox = new \\MyParcelNL\\Sdk\\Model\\Consignment\\InstaboxConsignment();
</code></pre></div><p>Or by using <code>Factory\\ConsignmentFactory</code> with a carrier ID or name, making it easier to dynamically instantiate a consignment:</p><div class="language-php ext-php"><pre class="language-php"><code>use MyParcelNL\\Sdk\\src\\Factory\\ConsignmentFactory;
use MyParcelNL\\Sdk\\src\\Model\\Carrier\\CarrierBpost;
use MyParcelNL\\Sdk\\src\\Model\\Carrier\\CarrierPostNL;

$postNL = ConsignmentFactory::createByCarrierId(CarrierPostNL::getId());
$bpost  = ConsignmentFactory::createByCarrierName(CarrierBpost::getName());
</code></pre></div>`,10),s=[a];function d(i,c){return t(),r("div",null,s)}var h=e(o,[["render",d],["__file","02.using-multiple-carriers.html.vue"]]);export{h as default};
