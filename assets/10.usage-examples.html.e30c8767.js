import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as r,a as o,b as i,w as c,e,d as a,r as d}from"./app.e0bc0234.js";const l={},p=e(`<h3 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a> Usage examples</h3><h4 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h4><p>The client is Promise-based, so you can use <code>async/await</code>, or <code>Promise.then</code>.</p><p>First, instantiate an SDK and pass the endpoints you want to use.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>import { createPrivateSdk, PostShipments } from &#39;@myparcel/sdk&#39;;

const clientConfig = {
  headers: {
    Authorization: &#39;bearer &#39; + MY_BASE_64_ENCODED_API_KEY
  }
};

const sdk = createPrivateSdk(new FetchClient(clientConfig), [
  new PostShipments(),
]);

</code></pre></div>`,5),u=a("Then call the endpoint. There are constants available in our SDK for data like carriers, package types, delivery types and more. See "),g=a("constants"),h=e(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>const result = await sdk.postShipments({
  body: [
    {
      carrier: 1,
      options: {
        package_type: &#39;package&#39;,
      },
      recipient: {
        cc: &#39;NL&#39;,
        city: &#39;Hoofddorp&#39;,
        person: &#39;Ms. Parcel&#39;,
        street: &#39;Antareslaan 31&#39;,
      },
    },
  ]
});

console.log(result); // [ 123456 ] (The ID of the shipment that was just created)
</code></pre></div><h4 id="using-constants" tabindex="-1"><a class="header-anchor" href="#using-constants" aria-hidden="true">#</a> Using constants</h4><p>Our SDK exposes some constants to make working with our API easier.</p><ul><li>Carriers<div class="language-javascript ext-js"><pre class="language-javascript"><code>import { CARRIERS } from &#39;@myparcelnl/sdk&#39;;

CARRIERS.POSTNL_NAME // &quot;postnl&quot;
</code></pre></div></li><li><strong>Package types:</strong> Contains all package types&#39; names and IDs.<div class="language-javascript ext-js"><pre class="language-javascript"><code>import { PACKAGE_TYPES } from &#39;@myparcelnl/sdk&#39;;

PACKAGE_TYPES.DIGITAL_STAMP_NAME // &quot;digital_stamp&quot;
PACKAGE_TYPES.PACKAGE_ID // 1
PACKAGE_TYPES.LETTER // { ID: 3, NAME: &quot;letter&quot; }
// etc
</code></pre></div></li><li><strong>Delivery types</strong><div class="language-javascript ext-js"><pre class="language-javascript"><code>import { DELIVERY_TYPES } from &#39;@myparcelnl/sdk&#39;;

DELIVERY_TYPES.STANDARD_NAME // &quot;standard&quot;
DELIVERY_TYPES.PICKUP_ID // 4
DELIVERY_TYPES.MORNING // { ID: 1, NAME: &quot;morning&quot; }
// etc
</code></pre></div></li><li><strong>Countries:</strong> Contains constants for all countries, by name.<div class="language-javascript ext-js"><pre class="language-javascript"><code>import { COUNTRIES } from &#39;@myparcelnl/sdk&#39;;

COUNTRIES.NETHERLANDS // &quot;NL&quot;
COUNTRIES.GERMANY // &quot;DE&quot;
// etc
</code></pre></div></li></ul><h4 id="creating-a-new-endpoint" tabindex="-1"><a class="header-anchor" href="#creating-a-new-endpoint" aria-hidden="true">#</a> Creating a new endpoint</h4><p>To create a new endpoint, you can extend either <code>AbstractPrivateEndpoint</code> or <code>AbstractPublicEndpoint</code> and fill in the derived class as needed.</p><p>Feel free to add open a pull request to add it to our repository! See [CONTRIBUTING.md].</p><h4 id="creating-a-new-client" tabindex="-1"><a class="header-anchor" href="#creating-a-new-client" aria-hidden="true">#</a> Creating a new client</h4><p>In this example we&#39;re creating an Axios client.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>class AxiosClient extends AbstractClient {
  async request(endpoint, options) {
    try {
      const response = await axios.request({
        method: endpoint.method,
        url: this.createUrl(endpoint, options),
        headers: {
          ...this.getHeaders(),
          ...endpoint.getHeaders()
        }
      });

      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
</code></pre></div><p>Now use the new client with an SDK instance:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const sdk = createPublicSdk(new AxiosClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();

console.log(carriers); // [ { &quot;id&quot;: 1, &quot;name&quot;: &quot;postnl&quot;, (etc...)
</code></pre></div>`,12);function m(_,E){const n=d("AutoLink");return s(),r("div",null,[p,o("p",null,[u,i(n,{item:"#using-constants"},{default:c(()=>[g]),_:1})]),h])}var x=t(l,[["render",m],["__file","10.usage-examples.html.vue"]]);export{x as default};
