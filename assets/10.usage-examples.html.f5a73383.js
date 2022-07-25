import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c,a as e,b as o,w as i,e as l,d as t,r as s}from"./app.e0bc0234.js";const p={},u=l(`<p>These examples assume you&#39;ve already loaded the delivery options in your page. See [Installation] if you haven&#39;t. You have to provide a configuration file in the following format as <code>window.MyParcelConfig</code> and initialize the delivery options with an event.</p><h4 id="setting-up-the-configuration" tabindex="-1"><a class="header-anchor" href="#setting-up-the-configuration" aria-hidden="true">#</a> Setting up the configuration</h4><p>This is an example.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window.MyParcelConfig = {
  config: {
    platform: &#39;belgie&#39;, // REQUIRED!
    carrierSettings: {
      bpost: {
        allowDeliveryOptions: true,
        allowPickupLocations: true,
      },
      dpd: {
        allowDeliveryOptions: true,
        allowPickupLocations: true,
      },
    },
  },
  address: {
    cc: &#39;BE&#39;,
    city: &#39;Antwerpen&#39;,
    postalCode: &#39;2000&#39;,
  },
};

// Trigger this event on the document to tell the delivery options to update.
// Usually only needed on initializing and when the address changes.
document.dispatchEvent(new Event(&#39;myparcel_update_delivery_options&#39;));
</code></pre></div><h4 id="getting-the-address-from-your-environment" tabindex="-1"><a class="header-anchor" href="#getting-the-address-from-your-environment" aria-hidden="true">#</a> Getting the address from your environment</h4><ol><li>Set up the link between the address fields and the delivery options:<div class="language-javascript ext-js"><pre class="language-javascript"><code>/**
 * Get data from form fields and put it in the global MyParcelConfig.
 */
function updateAddress() {
  window.MyParcelConfig.address = {
    cc: document.querySelector(&#39;#country&#39;).value,
    postalCode: document.querySelector(&#39;#house_number&#39;).value,
    number: document.querySelector(&#39;#postcode&#39;).value,
    city: document.querySelector(&#39;#address_1&#39;).value,
  };

  /*
   * Send the event that tells the delivery options module to reload data.
   */
  document.dispatchEvent(new Event(&#39;myparcel_update_delivery_options&#39;));

  // IE9\u201311 compatible example
  var event = document.createEvent(&#39;HTMLEvents&#39;);
  event.initEvent(&#39;myparcel_update_delivery_options&#39;, true, false);
  document.querySelector(&#39;body&#39;).dispatchEvent(event);
}
</code></pre></div></li><li>Add event listeners to each address field to execute this function:<div class="language-javascript ext-js"><pre class="language-javascript"><code>// ES6 example, use var for older environments.
const addressFields = [
  &#39;&lt;Country field selector&gt;&#39;,
  &#39;&lt;Postal code field selector&gt;&#39;,
  &#39;&lt;Address line 1 field selector&gt;&#39;,
];

addressFields.forEach((field) =&gt; {
  document.querySelector(field).addEventListener(&#39;change&#39;, updateAddress);
});
</code></pre></div></li><li>Now, when a user changes the value in any of the fields set in <code>addressFields</code> the <code>window.MyParcelConfig</code> will be updated and the delivery options module will receive the event that tells it to update. The delivery options will reload and fetch the available options for the new address.</li></ol><h4 id="usage-in-forms" tabindex="-1"><a class="header-anchor" href="#usage-in-forms" aria-hidden="true">#</a> Usage in forms</h4><p>You&#39;ll often want to use the delivery options module in a checkout form in your webshop software. Below are some things to keep in mind, but if you&#39;re interested in doing this you should check out our Magento2 and WooCommerce plugins locally and read through these implementations. You can find the best files to get started with in [Integration examples]. We also recommend you join our [Slack] support channel to get (fast!) answers to any questions you might have.</p><ol><li>Follow the steps in [Installation] and copy <code>myparcel.js</code> (Vue included) or <code>myparcel.lib.js</code> (Vue not included) from <code>node_modules/@myparcel/delivery-options/dist</code> to your js folder.</li><li>The things you&#39;ll need to do :</li></ol><ul><li>Have either a <code>window.MyParcelConfig</code> or dispatch a <code>CustomEvent</code> with the settings you want in the page where you&#39;re loading the delivery options.</li><li>Send events to the delivery options telling it when to update or rerender.</li><li>Listen to the delivery options&#39; events to update your application according to the changes.</li><li>Attach the output data to the order that is being created.</li></ul><h4 id="allowing-or-disallowing-settings-for-specific-countries" tabindex="-1"><a class="header-anchor" href="#allowing-or-disallowing-settings-for-specific-countries" aria-hidden="true">#</a> Allowing or disallowing settings for specific countries</h4><p>Let&#39;s say you want to disallow delivery to the Netherlands, only allow pickup in Belgium, for bpost. For DPD you want pickup only, wherever it&#39;s possible.</p><p>The configuration would look like this:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window.MyParcelConfig = {
  config: {
    platform: &#39;belgie&#39;,
    carrierSettings: {
      bpost: {
        // Allow delivery options in all countries it&#39;s possible in except the Netherlands.
        allowDeliveryOptions: { allow: false, items: [&#39;NL&#39;] },
        // Only allow pickup locations in Belgium.
        allowPickupLocations: { allow: true, items: [&#39;BE&#39;] },
      },
      dpd: {
        allowDeliveryOptions: false,
        allowPickupLocations: true,
      }
    }
  }
};
</code></pre></div><p>This is currently only possible for <code>allowDeliveryOptions</code> and <code>allowPickupLocations</code>. If you want this feature to be available for more settings, please create a feature request. Or, if you want to do it yourself you can send us a pull request!</p><h4 id="using-instabox-for-same-day-delivery-only" tabindex="-1"><a class="header-anchor" href="#using-instabox-for-same-day-delivery-only" aria-hidden="true">#</a> Using Instabox for same day delivery only</h4><p>Use case: You always want to use PostNL for regular shipments, but if a same day delivery is possible, you want to allow your customer to choose Instabox.</p><p>Example configuration:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window.MyParcelConfig = {
  config: {
    platform: &#39;myparcel&#39;,
    allowSameDayDelivery: true,
    cutoffTimeSameDay: &#39;8:30&#39;,
    deliveryDaysWindow: 7,
    dropOffDelay: 1,
    priceSameDayDelivery: 6.65,
    priceStandardDelivery: 4.95,
    carrierSettings: {
      // Carriers are shown in order of the carrierSettings object, so RJP will be above PostNL.
      instabox: {
        allowDeliveryOptions: true,
        deliveryDaysWindow: 1,
        dropOffDelay: 0,
      },
      postnl: {
        allowDeliveryOptions: true,
      }
    }
  }
};
</code></pre></div><p>The fields <code>deliveryDaysWindow</code> and <code>dropOffDelay</code> inside <code>carrierSettings.instabox</code> are very important here. This setup would give you the following logic:</p><blockquote><p><strong>Current day and time: Tuesday, 6:45</strong></p><ul><li>Instabox <ul><li>The only option is today, which costs \u20AC 6.65.</li></ul></li><li>PostNL <ul><li>First option: Tomorrow, standard delivery, \u20AC 4.95.</li></ul></li></ul></blockquote><ul><li>The next 6 valid days are also available.</li></ul><blockquote><p><strong>Current day and time: Tuesday, 14:30</strong></p><ul><li>PostNL <ul><li>First option: Tomorrow, standard delivery, \u20AC 4.95.</li></ul></li></ul></blockquote><ul><li>The next 6 valid days are also available.</li></ul><h5 id="integration-examples" tabindex="-1"><a class="header-anchor" href="#integration-examples" aria-hidden="true">#</a> Integration examples</h5><h6 id="our-woocommerce-implementation" tabindex="-1"><a class="header-anchor" href="#our-woocommerce-implementation" aria-hidden="true">#</a> Our WooCommerce implementation</h6><p>Files that can help you get started:</p><ul><li></li></ul>`,28),h={id:"backend-includes-frontend-class-wcmp-checkout-php",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#backend-includes-frontend-class-wcmp-checkout-php","aria-hidden":"true"},"#",-1),g=t(" Backend: "),y=t("/includes/frontend/class-wcmp-checkout.php"),v=t("Frontend: "),f=t("/assets/js/wcmp-frontend.js"),w=e("h6",{id:"our-magento-2-implementation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#our-magento-2-implementation","aria-hidden":"true"},"#"),t(" Our Magento 2 implementation")],-1),_=e("p",null,"Files that can help you get started:",-1),b=e("p",null,"Note: It's more complex in Magento 2 because of the way shipping methods work.",-1),x=e("ul",null,[e("li")],-1),k={id:"backend-model-checkout-deliveryoptionstoshippingmethods-php",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#backend-model-checkout-deliveryoptionstoshippingmethods-php","aria-hidden":"true"},"#",-1),D=t(" Backend: "),E=t("/Model/Checkout/DeliveryOptionsToShippingMethods.php"),S=t("Frontend: "),C=t("/view/frontend/web/js/view/delivery-options.js"),T=l(`<h5 id="attach-data-to-an-order-using-a-hidden-input" tabindex="-1"><a class="header-anchor" href="#attach-data-to-an-order-using-a-hidden-input" aria-hidden="true">#</a> Attach data to an order using a hidden input</h5><p>In WooCommerce and Magento 2 we injected a hidden text input inside the checkout <code>&lt;form&gt;</code> elements to hold this data and automatically pass it to the <code>$_POST</code> variable.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>// Listen to the CustomEvent the delivery option sends back out once its data has been updated
document.addEventListener(&#39;myparcel_updated_delivery_options&#39;, (event) =&gt; {
  myHiddenInput.value = JSON.stringify(event.detail);

  // And now trigger updating the checkout of whatever platform you&#39;re using.
  // WooCommerce example:
  document.dispatchEvent(new Event(&#39;update_checkout&#39;));

  // In Magento 2 we would update quote.shippingMethod here to trigger the changes.
});
</code></pre></div><h5 id="deselect-options" tabindex="-1"><a class="header-anchor" href="#deselect-options" aria-hidden="true">#</a> Deselect options</h5>`,4),P=t("You might want to integrate the delivery options into a list of existing shipping methods, like we've done in "),M=t("Magento 2"),I=t(" . So when the user selects a different shipping method you'll want the delivery options to appear unselected."),L=e("p",null,`Note: If you only have one option, so either "delivery" or "pickup", the option will appear disabled. Until there's a built in solution, there's the following workaround.`,-1),O=e("p",null,"If you only use delivery:",-1),N=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,`document.getElementById('myparcel-delivery-options__delivery--deliver').disabled =
  false;
`)])],-1),q=e("p",null,"If you only use pickup:",-1),A=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,`document.getElementById('myparcel-delivery-options__delivery--pickup').disabled =
  false;
`)])],-1),B=e("p",null,[t("To deselect all options, dispatch the "),e("code",null,"myparcel_disable_delivery_options"),t(" event. You could do this as when your users select a different shipping method, for example.")],-1),F=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,`document.dispatchEvent(new Event('myparcel_disable_delivery_options'));
`)])],-1),W=e("p",null,"The delivery options will look like this:",-1);function U(V,Y){const n=s("AutoLink"),a=s("MPImg");return r(),c("div",null,[u,e("h3",h,[m,g,o(n,{item:"https://github.com/myparcelnl/woocommerce/blob/main/includes/frontend/class-wcmp-checkout.php"},{default:i(()=>[y]),_:1})]),e("p",null,[v,o(n,{item:"https://github.com/myparcelnl/woocommerce/blob/main/src/js/wcmp-frontend.js"},{default:i(()=>[f]),_:1})]),w,_,b,x,e("h3",k,[j,D,o(n,{item:"https://github.com/myparcelnl/magento/blob/develop/Model/Checkout/DeliveryOptionsToShippingMethods.php"},{default:i(()=>[E]),_:1})]),e("p",null,[S,o(n,{item:"https://github.com/myparcelnl/magento/blob/develop/view/frontend/web/js/view/delivery-options.js"},{default:i(()=>[C]),_:1})]),T,e("p",null,[P,o(n,{item:"https://github.com/myparcelnl/magento/blob/504ea103f6b3042e1dfa7debc022251eeaba381e/view/frontend/web/js/view/delivery-options.js#L231"},{default:i(()=>[M]),_:1}),I]),o(a,{src:"/documentation/delivery-options/deselect-1.png",alt:"Deselect 1"}),L,O,N,q,A,o(a,{src:"/documentation/delivery-options/deselect-2.png",alt:"Deselect 2"}),B,F,W,o(a,{src:"/documentation/delivery-options/deselect-3.png",alt:"Deselect 3"})])}var z=d(p,[["render",U],["__file","10.usage-examples.html.vue"]]);export{z as default};
