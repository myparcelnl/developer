import{r as u,f as d,h as n,z as t,w as e,F as k,e as s,K as i,o as h}from"./app.6b7de2d8.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const m={},y=n("h1",{id:"_6-shipments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true"},"#"),s(" 6. Shipments")],-1),g=n("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),f=n("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),b=n("h2",{id:"_6-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true"},"#"),s(" 6.A Shipment option combinations")],-1),x=n("h3",{id:"_6-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true"},"#"),s(" 6.A.1 Package types")],-1),v=s("There are four different packages types available and determine the name of shipment. The value is sent with the "),A=s("ShipmentOptions"),T=s(" .package_type field."),E=n("h4",{id:"_1-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true"},"#"),s(" 1. Package")],-1),q=n("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),w=n("h4",{id:"_2-mailbox-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true"},"#"),s(" 2. Mailbox package")],-1),C=s("This package type is only available on "),j=s(" and "),P=s(" for NL shipments that fit into a mailbox. It does not support additional options."),R=n("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),D=n("h4",{id:"_3-letter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true"},"#"),s(" 3. Letter")],-1),S=s("This package type is available on "),O=s(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),N=n("h4",{id:"_4-digital-stamp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true"},"#"),s(" 4. Digital stamp")],-1),U=s("This package type is only available on "),B=s(" for NL shipments and does not support any additional options. Its price is calculated using the package "),I=s("weight"),H=s(" ."),L=s("Note: This shipment will appear on your invoice on "),M=s(" as opposed to all other package types, which won't appear on your invoice until shipment "),F=s("."),Y=n("h3",{id:"_6-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true"},"#"),s(" 6.A.2 Delivery types")],-1),z=s("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),K=s(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),G=i('<h4 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true">#</a> 1. Morning</h4><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h4 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true">#</a> 2. Standard</h4><p>This is the standard delivery type.</p><h4 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true">#</a> 3. Evening</h4>',5),J=s("This option is only available on "),V=s(" and "),W=s(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),Z=i('<h4 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true">#</a> 4. Pickup</h4><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h4 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true">#</a> 5. Pickup express</h4><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h3 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true">#</a> 6.A.3 Options</h3>',5),Q=s("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),X=s("ShipmentOptions"),$=s(" object. These options are only available for "),nn=s("."),sn=i('<h4 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true">#</a> only_recipient</h4><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h4 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> signature</h4><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h4 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h4><p>Return the package to the sender when the recipient is not home.</p><h4 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true">#</a> large_format</h4><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h4 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true">#</a> insurance</h4>',9),tn=s("This option allows a shipment to be insured up to certain amount. Only "),en=s(" shipments can be insured. NL shipments can be insured for 500,- euros. EU shipments "),an=n("strong",null,"must",-1),on=s(" be insured for 500,- euros. Global shipments "),pn=n("strong",null,"must",-1),rn=s(" be insured for 200,- euros. The following shipment options are "),cn=n("strong",null,"mandatory",-1),ln=s(" when insuring an NL shipment: only_recipient and signature."),un=n("h4",{id:"age-check",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#age-check","aria-hidden":"true"},"#"),s(" age_check")],-1),dn=s("Only available on "),kn=s(" and "),hn=s(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),_n=i(`<h3 id="_6-a-4" tabindex="-1"><a class="header-anchor" href="#_6-a-4" aria-hidden="true">#</a> 6.A.4 Examples</h3><h4 id="pickup" tabindex="-1"><a class="header-anchor" href="#pickup" aria-hidden="true">#</a> Pickup</h4><p>We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;package_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;only_recipient&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;delivery_type&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),mn=s("Let's go through this example. This package will be picked up by the customer, so it needs to "),yn=s(" with "),gn=s(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),fn=i(`<h4 id="evening" tabindex="-1"><a class="header-anchor" href="#evening" aria-hidden="true">#</a> Evening</h4><p>We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;package_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;delivery_type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;only_recipient&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),bn=s("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),xn=s(" with "),vn=s(". All evening and morning packages need to have only_recipient set."),An=i(`<h4 id="nl-insured" tabindex="-1"><a class="header-anchor" href="#nl-insured" aria-hidden="true">#</a> NL insured</h4><p>We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;package_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;insurance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EUR&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;only_recipient&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),Tn=s("Only "),En=s(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),qn=n("code",null,"insurance.amount",-1),wn=s(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),Cn=i(`<h4 id="eu-and-global-insured" tabindex="-1"><a class="header-anchor" href="#eu-and-global-insured" aria-hidden="true">#</a> EU and Global insured</h4><p>We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it&#39;s dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;package_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;insurance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EUR&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;large_format&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This package is an EU package so the name must be set to 1. All EU and Global shipments <strong>must</strong> be insured up to 500 (EU) / 200 (Global) euros, so we set the insured amount to 50000 <strong>cents.</strong> EU and Global shipments do not have the only_recipient, signature and return options so these cannot be set for this shipment.</p><h2 id="_6-b" tabindex="-1"><a class="header-anchor" href="#_6-b" aria-hidden="true">#</a> 6.B Add Shipment</h2><h3 id="_6-b-1" tabindex="-1"><a class="header-anchor" href="#_6-b-1" aria-hidden="true">#</a> 6.B.1 Overview</h3><p>Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named &#39; column_mapping&#39; in the multipart/form-data.</p>`,7),jn=s("For JSON requests a "),Pn=s("ShipmentIds"),Rn=s(" object is returned. The ids in the "),Dn=s("ShipmentIds"),Sn=s(" object will be in the same order they were sent."),On=s("For CSV requests "),Nn=s(" with empty response body is returned. If a request fails then an "),Un=s(" is returned."),Bn=n("h3",{id:"_6-b-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true"},"#"),s(" 6.B.2 Reference")],-1),In=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments")],-1),Hn=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),Ln=n("tr",null,[n("td",{rowspan:"6"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Mn=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Fn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Yn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),zn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),Kn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),Gn=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Optional request headers")])]),n("td",null,[n("p",null,[s("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),n("code",null,"shipment_label_created"),s(" to listen to it.)")])])],-1),Jn=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),Vn=n("td",{rowspan:"2"},[n("p",null,[n("strong",null,"Query parameters")])],-1),Wn=s("format = "),Zn=s("paper_size"),Qn=s(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),Xn=n("tr",null,[n("td",null,[n("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),$n=n("td",{rowspan:"3"},[n("p",null,[n("strong",null,"Request body")])],-1),ns=s("array"),ss=s(" of Shipment objects. (For Shipments JSON request)"),ts=s("array"),es=s(" of ReturnShipment objects. (For ReturnShipments JSON request)"),as=s("array"),os=s(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),ps=n("td",null,[n("strong",null,"Response")],-1),rs=s(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),cs=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"ShipmentIds")],-1),ls=n("td",null,[n("strong",null,"Error response")],-1),is=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),us=n("h3",{id:"_6-b-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true"},"#"),s(" 6.B.3 Request Headers")],-1),ds=n("p",null,[n("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create standard shipments.")],-1),ks=n("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),hs=n("br",null,null,-1),_s=s(" Specify this Content-Type when you want to create related return shipments."),ms=n("br",null,null,-1),ys=s(" Parent shipment cannot be a concept ("),gs=s(") ."),fs=n("br",null,null,-1),bs=s(" When a label is generated, the status of the shipment is converted to registered ( "),xs=s("shipment_status"),vs=s(" 2)."),As=n("p",null,[n("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),Ts=n("h3",{id:"_6-b-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true"},"#"),s(" 6.B.4 Examples")],-1),Es=n("p",null,"In these examples we are going to create shipments.",-1),qs=n("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),ws=n("h5",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),s(" Request")],-1),Cs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),js=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"age_check"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-223-BAR-43"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Amsterdam"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Dorpstraat"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"123"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1020BC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mrs. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"02012343546"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Ps=n("h5",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),Rs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"68794"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-223-BAR-43"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Ds=s(" Bpost shipments are only supported on "),Ss=s(". "),Os=n("h5",{id:"request-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true"},"#"),s(" Request")],-1),Ns=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Us=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Wormerplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"box_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"test"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Bs=n("h5",{id:"response-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true"},"#"),s(" Response")],-1),Is=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"49566653"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Hs=s(" DPD shipments are only supported on "),Ls=s(". "),Ms=n("h5",{id:"request-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true"},"#"),s(" Request")],-1),Fs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ys=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Wormerplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"box_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"test"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Order 123456"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),zs=n("h5",{id:"response-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true"},"#"),s(" Response")],-1),Ks=s(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),Gs=s(" Instabox shipments are only supported on "),Js=s(". "),Vs=s(" Creating Instabox shipments requires selecting a drop-off point. To receive nearby drop off points, see "),Ws=s("Drop off points"),Zs=s(" endpoint. "),Qs=n("h5",{id:"request-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true"},"#"),s(" Request")],-1),Xs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),$s=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"same_day_delivery"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"drop_off_point"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"e9149b66-7bee-439b-bab0-7a5d92ddc519"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Instabox"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132WV"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Diamantlaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"77"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),nt=n("h5",{id:"response-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true"},"#"),s(" Response")],-1),st=s(' ```json { "data": { "ids": [ { "id": 49566518, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),tt=s(" Multi collo shipments are only available on "),et=s(" and "),at=s(". "),ot=n("h5",{id:"request-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true"},"#"),s(" Request")],-1),pt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),rt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"age_check"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ct=n("h5",{id:"response-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true"},"#"),s(" Response")],-1),lt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),it=s(" Creating shipments to an international destination is possible depending on the chosen carrier: "),ut=n("ul",null,[n("li",null,"PostNL and Bpost shipments are available worldwide."),n("li",null,"DPD shipments are available in the EU."),n("li",null,"Instabox is only available in NL.")],-1),dt=n("h5",{id:"request-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true"},"#"),s(" Request")],-1),kt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ht=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"JP"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u57FC\u7389\u770C"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u3055\u3044\u305F\u307E\u5E02"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u57FC\u7389\u770C\u3055\u3044\u305F\u307E\u5E02\u6D66\u548C\u533A \u5E38\u76E49\uFF0D21\uFF0D21"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tanaka san"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"company"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u3055\u3044\u305F\u307E\u56FD\u969B\u30AD\u30EA\u30B9\u30C8\u6559\u4F1A"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"saitamakyokai@gmail.com"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0081-48-825-6637"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"customs_declaration"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"contents"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"invoice"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1231235345345"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sample Product"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"item_value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7000"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"classification"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0181"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"country"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sample Product 2"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"item_value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"classification"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0181"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"country"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"physical_properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_t=n("h5",{id:"response-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true"},"#"),s(" Response")],-1),mt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3485394579"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),yt=s(" Digital stamp shipments are available on "),gt=s(" and to Dutch destinations only. "),ft=n("h5",{id:"request-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true"},"#"),s(" Request")],-1),bt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),xt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-DPZ-BAR-46"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"This is a digital stamp shipment!"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"physical_properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),vt=n("h5",{id:"response-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true"},"#"),s(" Response")],-1),At=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"39234953"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Tt=s(" Only available on "),Et=s(" and "),qt=s(". "),wt=n("h5",{id:"request-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true"},"#"),s(" Request")],-1),Ct=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),jt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2015-07-12 00:00:00"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132BH"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Burgemeester van Stamplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"270"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Albert Heijn"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Pt=n("h5",{id:"response-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true"},"#"),s(" Response")],-1),Rt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Dt=s(" Only available on "),St=s(". "),Ot=n("h6",{id:"request-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true"},"#"),s(" Request")],-1),Nt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ut=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Adriaan Brouwerstraat"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Test"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ANTWERPEN"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"618925"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"KLAPKRANT"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"15"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"KLAPDORP"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"order-012356"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Bt=n("h5",{id:"response-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true"},"#"),s(" Response")],-1),It=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),Ht=s(" Only available on "),Lt=s(". "),Mt=n("h5",{id:"request-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true"},"#"),s(" Request")],-1),Ft=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Yt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Adriaan Brouwerstraat"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Test"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PRESS WINKEL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"HOOGSTRAAT"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"75"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE11468"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"DPD pickup"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),zt=n("h5",{id:"response-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true"},"#"),s(" Response")],-1),Kt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),Gt=s(" Only available on "),Jt=s(" and "),Vt=s(". "),Wt=n("h5",{id:"request-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true"},"#"),s(" Request")],-1),Zt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Qt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"age_check"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132BH"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Burgemeester van Stamplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"270"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Albert Heijn"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Xt=n("h5",{id:"response-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true"},"#"),s(" Response")],-1),$t=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),ne=n("h5",{id:"request-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true"},"#"),s(" Request")],-1),se=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),te=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antwerpen"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Belgi\xEB"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Adriaan Brouwerstraat 12"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street_additional_info"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ANTWERPEN"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"HOOGSTRAAT"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"75"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE0Q07"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"retail_network_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LD-01"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"K&J TRADING"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-08-09 16:00:00"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"cooled_delivery"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ee=n("h5",{id:"response-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true"},"#"),s(" Response")],-1),ae=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),oe=s(" The following example creates a PostNL return shipment. On "),pe=s(" return shipments are only available with "),re=s(". "),ce=n("h5",{id:"request-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true"},"#"),s(" Request")],-1),le=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ie=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"return_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ue=n("h5",{id:"response-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true"},"#"),s(" Response")],-1),de=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ke=s(" The following example creates a PostNL return shipment. On "),he=s(" return shipments are only available with "),_e=s(". "),me=n("h5",{id:"request-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true"},"#"),s(" Request")],-1),ye=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ge=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"return_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Test"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),fe=n("h5",{id:"response-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true"},"#"),s(" Response")],-1),be=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),xe=n("h2",{id:"_6-c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true"},"#"),s(" 6.C Delete Shipment")],-1),ve=s("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),Ae=s("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),Te=n("h3",{id:"_6-c-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true"},"#"),s(" 6.C.1 Overview")],-1),Ee=s("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),qe=s(" can be deleted. This method returns "),we=s(" if successful. If the shipment doesn't exist a "),Ce=s(" is returned."),je=n("h3",{id:"_6-c-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true"},"#"),s(" 6.C.2 Reference")],-1),Pe=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),Re=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"DELETE")],-1),De=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Se=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Oe=n("tr",null,[n("td",null,"Content-type: application/json;charset=utf-8")],-1),Ne=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Ue=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),Be=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Ie=n("td",null,[n("strong",null,"Response")],-1),He=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"None.")],-1),Le=n("td",null,[n("strong",null,"Error response")],-1),Me=s("."),Fe=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Ye=n("h3",{id:"_6-c-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true"},"#"),s(" 6.C.3 Parameters")],-1),ze=n("strong",null,"id",-1),Ke=n("br",null,null,-1),Ge=s(" Data type: "),Je=s("integer"),Ve=n("br",null,null,-1),We=s(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),Ze=n("h3",{id:"_6-c-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true"},"#"),s(" 6.C.4 Examples")],-1),Qe=n("h5",{id:"request-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true"},"#"),s(" Request")],-1),Xe=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),$e=n("h5",{id:"response-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true"},"#"),s(" Response")],-1),na=n("h2",{id:"_6-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true"},"#"),s(" 6.D Generate unrelated return shipment url")],-1),sa=n("h3",{id:"_6-d-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true"},"#"),s(" 6.D.1 Overview")],-1),ta=s("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),ea=s(" Not Found is returned."),aa=n("h3",{id:"_6-d-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true"},"#"),s(" 6.D.2 Reference")],-1),oa=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/return_shipments")],-1),pa=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),ra=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),ca=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),la=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ia=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),ua=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),da=n("td",null,[n("strong",null,"Response")],-1),ka=s(" Content-Type: application/json"),ha=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"DownloadUrl object.")],-1),_a=n("td",{rowspan:"2"},[n("strong",null,"Error response")],-1),ma=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"None.")],-1),ya=n("h3",{id:"_6-d-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true"},"#"),s(" 6.D.3 Examples")],-1),ga=n("h5",{id:"request-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true"},"#"),s(" Request")],-1),fa=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),ba=n("h5",{id:"response-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true"},"#"),s(" Response")],-1),xa=s(" ``` Content-Type: application/json ``` "),va=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"download_url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"link"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Aa=n("h2",{id:"_6-e",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true"},"#"),s(" 6.E Get Shipment")],-1),Ta=n("h3",{id:"_6-e-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true"},"#"),s(" 6.E.1 Overview")],-1),Ea=n("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),qa=s("Upon success either a JSON "),wa=s("array"),Ca=s(" of "),ja=s("Shipment"),Pa=s(" objects or a CSV file is returned."),Ra=n("h3",{id:"_6-e-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true"},"#"),s(" 6.E.2 Reference")],-1),Da=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),Sa=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Oa=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Na=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Ua=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Ba=n("td",{rowspan:"10"},[n("strong",null,"Query parameters")],-1),Ia=s("q = "),Ha=s("string"),La=n("tr",null,[n("td",null,"reference_identifier = [reference_identifier]")],-1),Ma=s("dropoff_today = "),Fa=s("boolean"),Ya=s("status = "),za=s("shipment_status"),Ka=s("from = "),Ga=s("timestamp"),Ja=s("to = "),Va=s("timestamp"),Wa=s("page = "),Za=s("integer"),Qa=s("size = "),Xa=s("integer"),$a=s("sort = "),no=s("string"),so=s("order = "),to=s("sort_order"),eo=n("tr",null,[n("td",null,[n("strong",null,"Optional request headers")]),n("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),ao=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),oo=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),po=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),ro=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of Shipment objects (For JSON)")],-1),co=n("td",null,[n("strong",null,"Error response")],-1),lo=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),io=n("h3",{id:"_6-e-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true"},"#"),s(" 6.E.3 Parameters")],-1),uo=n("strong",null,"id",-1),ko=n("br",null,null,-1),ho=s(" Data type: "),_o=s("integer"),mo=n("br",null,null,-1),yo=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),go=n("strong",null,"reference_identifier",-1),fo=n("br",null,null,-1),bo=s(" Data type: "),xo=s("string"),vo=n("br",null,null,-1),Ao=s(" This is an optional arbitrary identifier to identify the shipment."),To=n("strong",null,"dropoff_today",-1),Eo=n("br",null,null,-1),qo=s(" Data type: "),wo=s("boolean"),Co=n("br",null,null,-1),jo=s(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),Po=n("strong",null,"q",-1),Ro=n("br",null,null,-1),Do=s(" Data type: "),So=s("string"),Oo=n("br",null,null,-1),No=s(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),Uo=n("strong",null,"status",-1),Bo=n("br",null,null,-1),Io=s(" Data type: "),Ho=s("shipment_status"),Lo=n("br",null,null,-1),Mo=s(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Fo=n("strong",null,"from",-1),Yo=n("br",null,null,-1),zo=s(" Data type: "),Ko=s("date"),Go=n("br",null,null,-1),Jo=s(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),Vo=n("strong",null,"to",-1),Wo=n("br",null,null,-1),Zo=s(" Data type: "),Qo=s("date"),Xo=n("br",null,null,-1),$o=s(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),np=n("strong",null,"page",-1),sp=n("br",null,null,-1),tp=s(" Data type: "),ep=s("integer"),ap=n("br",null,null,-1),op=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),pp=n("strong",null,"size",-1),rp=n("br",null,null,-1),cp=s(" Data type: "),lp=s("integer"),ip=n("br",null,null,-1),up=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),dp=n("strong",null,"sort",-1),kp=n("br",null,null,-1),hp=s(" Data type: "),_p=s("string"),mp=n("br",null,null,-1),yp=s(" Shipment object field to sort on. See "),gp=s("Shipment"),fp=s(" object"),bp=n("strong",null,"order",-1),xp=n("br",null,null,-1),vp=s(" Data type: "),Ap=s("sort_order"),Tp=n("br",null,null,-1),Ep=s(" Sort order for sort filter. Defaults to ASC."),qp=n("h3",{id:"_6-e-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true"},"#"),s(" 6.E.4 Examples")],-1),wp=n("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),Cp=n("h5",{id:"request-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true"},"#"),s(" Request")],-1),jp=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Pp=n("h5",{id:"response-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true"},"#"),s(" Response")],-1),Rp=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"search_results"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"sender"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Amsterdam"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Dorpstraat"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"123"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1020BC"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mrs. Parcel"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"02012343546"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info@myparcel.nl"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"carrier_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"status"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"535"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"barcode"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"3SMYPA77773333"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"multi_collo_main_shipment_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"created"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-01-31 08:00:00"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"modified"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-01-31 09:00:00"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"page"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"results"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Dp=n("h2",{id:"_6-f",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true"},"#"),s(" 6.F Get Shipment label")],-1),Sp=n("h3",{id:"_6-f-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true"},"#"),s(" 6.F.1 Overview")],-1),Op=s("Get shipment label. You can specify label format and starting position of labels on the first page with the "),Np=n("strong",null,"format",-1),Up=s(" and "),Bp=n("strong",null,"position",-1),Ip=s(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Hp=n("strong",null,"Post-payment",-1),Lp=s(" payment methods can fetch multiple labels in one call. For accounts with "),Mp=n("strong",null,"Pre-payment",-1),Fp=s(" payment method an "),Yp=n("code",null,"<Http code=402 /> Payment Required",-1),zp=s(" with a "),Kp=s(" PaymentInstructions"),Gp=s(" object is returned if the label has not been paid for yet."),Jp=n("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),Vp=s("Upon error "),Wp=s(" with a response body containing an Error is returned."),Zp=s("If you want to retrieve more than 25 labels in one response, you can use "),Qp=n("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),Xp=s(". You will receive a URL to a label, but the label is not immediately available and will return an "),$p=s(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),nr=s("label created webhooks"),sr=s(" ."),tr=n("h3",{id:"_6-f-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true"},"#"),s(" 6.F.2 Reference")],-1),er=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),ar=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),or=n("tr",null,[n("td",{rowspan:"5"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),pr=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),rr=n("tr",null,[n("td",null,[n("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),cr=s("Accept: application/json;charset=utf8 (For "),lr=s("ShipmentLabelDownloadLink"),ir=s(") For processing less than 25 labels."),ur=s("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),dr=s("ShipmentLabelDownloadLink"),kr=s(") For processing multiple labels. Recommended if you request more than 25 labels."),hr=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = Shipment.id")],-1),_r=n("td",{rowspan:"2"},[n("strong",null,"Query parameters")],-1),mr=s("format = "),yr=s("paper_size"),gr=s("positions = "),fr=s("label_position"),br=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),xr=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),vr=s(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),Ar=s(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),Tr=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Response body")]),n("td",null,"Shipment label PDF")],-1),Er=s("ShipmentLabelDownloadLink"),qr=n("tr",null,[n("td",null,"PaymentInstructions")],-1),wr=n("td",null,[n("strong",null,"Error response")],-1),Cr=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Error response body")])]),n("td",null,[n("p",null,"Content-Type: application/json (When payment is required)")])],-1),jr=n("h3",{id:"_6-f-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true"},"#"),s(" 6.F.3 Parameters")],-1),Pr=n("strong",null,"id",-1),Rr=n("br",null,null,-1),Dr=s(" Data type: "),Sr=s("integer"),Or=n("br",null,null,-1),Nr=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Ur=n("strong",null,"format",-1),Br=n("br",null,null,-1),Ir=s(" Data type: "),Hr=s("paper_size"),Lr=n("br",null,null,-1),Mr=s(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Fr=n("strong",null,"positions",-1),Yr=n("br",null,null,-1),zr=s(" Data type: "),Kr=s("label_position"),Gr=n("br",null,null,-1),Jr=s(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),Vr=n("h3",{id:"_6-f-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true"},"#"),s(" 6.F.4 Examples")],-1),Wr=n("h5",{id:"request-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true"},"#"),s(" Request")],-1),Zr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Qr=n("h5",{id:"response-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true"},"#"),s(" Response")],-1),Xr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),$r=n("h5",{id:"request-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true"},"#"),s(" Request")],-1),nc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),sc=n("h5",{id:"response-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true"},"#"),s(" Response")],-1),tc=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ec=n("h5",{id:"request-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true"},"#"),s(" Request")],-1),ac=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),oc=n("h5",{id:"response-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true"},"#"),s(" Response")],-1),pc=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),rc=n("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),cc=n("h5",{id:"request-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true"},"#"),s(" Request")],-1),lc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ic=n("h5",{id:"response-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true"},"#"),s(" Response")],-1),uc=s(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),dc=n("h2",{id:"_6-g",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true"},"#"),s(" 6.G Track Shipment")],-1),kc=n("h3",{id:"_6-g-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true"},"#"),s(" 6.G.1 Overview")],-1),hc=s("Get detailed track and trace information for a shipment. Upon success "),_c=s(" is returned with an "),mc=s("array"),yc=s(" of "),gc=s("TrackTrace"),fc=s(" objects."),bc=n("h3",{id:"_6-g-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true"},"#"),s(" 6.G.2 Limitations")],-1),xc=s("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),vc=s("rate limit"),Ac=s(" ."),Tc=n("h3",{id:"_6-g-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true"},"#"),s(" 6.G.3 Reference")],-1),Ec=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),qc=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),wc=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required")]),n("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),Cc=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),jc=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id= [Shipment].id")],-1),Pc=n("td",{rowspan:"5"},[n("strong",null,"Query parameters")],-1),Rc=s("page= "),Dc=s("integer"),Sc=s("size= "),Oc=s("integer"),Nc=s("sort= "),Uc=s("string"),Bc=s("order= "),Ic=s("sort_order"),Hc=n("tr",null,[n("td",null,"extra_info= [extra_info]")],-1),Lc=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Mc=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Fc=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8")],-1),Yc=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of TrackTrace objects.")],-1),zc=n("td",null,[n("strong",null,"Error response")],-1),Kc=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Gc=n("h3",{id:"_6-g-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true"},"#"),s(" 6.G.4 Parameters")],-1),Jc=n("strong",null,"id",-1),Vc=n("br",null,null,-1),Wc=s(" Data type: "),Zc=s("integer"),Qc=n("br",null,null,-1),Xc=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),$c=n("strong",null,"page",-1),nl=n("br",null,null,-1),sl=s(" Data type: "),tl=s("integer"),el=n("br",null,null,-1),al=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),ol=n("strong",null,"size",-1),pl=n("br",null,null,-1),rl=s(" Data type: "),cl=s("integer"),ll=n("br",null,null,-1),il=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),ul=n("strong",null,"sort",-1),dl=n("br",null,null,-1),kl=s(" Data type: "),hl=s("string"),_l=n("br",null,null,-1),ml=s(" TrackTrace object field to sort on. See "),yl=s("TrackTrace"),gl=n("strong",null,"order",-1),fl=n("br",null,null,-1),bl=s(" Data type: "),xl=s("sort_order"),vl=n("br",null,null,-1),Al=s(" Sort order for sort filter. Defaults to ASC."),Tl=n("strong",null,"extra_info",-1),El=n("br",null,null,-1),ql=s(" Data type: "),wl=s("string"),Cl=n("br",null,null,-1),jl=s(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),Pl=n("p",null,"extra_info=delivery_moment",-1),Rl=n("h3",{id:"_6-g-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true"},"#"),s(" 6.G.5 Examples")],-1),Dl=n("h5",{id:"request-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true"},"#"),s(" Request")],-1),Sl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ol=n("h5",{id:"response-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true"},"#"),s(" Response")],-1),Nl=s(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),Ul=i('<h2 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true">#</a> 6.H Multi collo shipments</h2><h3 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true">#</a> 6.H.1 Overview</h3><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h3 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true">#</a> 6.H.2 Create</h3>',4),Bl=s("This section extends the "),Il=s("base functionality"),Hl=s("."),Ll=s("Creating a multi collo shipment basically means using one extra property "),Ml=n("code",null,"secondary_shipments",-1),Fl=s(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Yl=s(" and can only be used for shipments to NL en BE."),zl=i(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;reference_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SECONDARY-SHIPMENT&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-h-3" tabindex="-1"><a class="header-anchor" href="#_6-h-3" aria-hidden="true">#</a> 6.H.3 Update</h3><table><tbody><tr><td><strong>URI</strong></td><td>https://api.myparcel.nl/shipments</td></tr><tr><td><strong>Methods</strong></td><td>PUT</td></tr><tr><td rowspan="2"><strong>Required request headers</strong></td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>Content-Type: application/vnd.shipment+json;version=1.1</td></tr></tbody></table><p>Updating a secondary shipment can be done in several ways using different endpoints.</p><h4 id="add-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#add-secondary-shipment" aria-hidden="true">#</a> Add secondary shipment</h4><p>Adding an existing shipment to an existing multi collo shipment can be done in two ways.</p><ol><li>Post complete shipment with an extra shipment passed in the <code>secondary_shipments</code> property.</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">34567</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>Update a single existing shipment with a reference to a multi collo shipment via the <code>multi_collo_main_shipment_id</code>.</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token number">34567</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Adding a non-existent shipment to an existing multi collo shipment can be done via the <code>secondary_shipments</code> property of the main shipment.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h4 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true">#</a> Remove secondary shipment</h4><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),Kl=s("Delete secondary shipment. Make use of the "),Gl=s("delete endpoint"),Jl=s(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),Vl=s("Omit the secondary shipment in an "),Wl=s("update"),Zl=s(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),Ql=n("li",null,[n("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),Xl=i(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true">#</a> 6.H.4 Delete</h3>`,2),$l=s("This section extends the "),ni=s("base functionality"),si=s(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),ti=n("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),ei=n("h3",{id:"_6-h-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true"},"#"),s(" 6.H.5 Examples")],-1),ai=n("h5",{id:"request-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true"},"#"),s(" Request")],-1),oi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),pi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"return"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"age_check"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"REF-SECONDARY-SHIPMENT"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ri=n("h5",{id:"response-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true"},"#"),s(" Response")],-1),ci=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),li=n("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),ii=n("h5",{id:"request-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true"},"#"),s(" Request")],-1),ui=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),di=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12346"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SECONDARY-SHIPMENT"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ki=n("h5",{id:"response-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true"},"#"),s(" Response")],-1),hi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),_i=n("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),mi=n("h5",{id:"request-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true"},"#"),s(" Request")],-1),yi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),gi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12346"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"multi_collo_main_shipment_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),fi=n("h5",{id:"response-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true"},"#"),s(" Response")],-1),bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),xi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),vi=n("h5",{id:"request-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true"},"#"),s(" Request")],-1),Ai=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ti=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"region"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Zuid-Holland"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Antareslaan"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"31"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132JE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"person"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Mr. Parcel"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0233030315"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"email"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"testing@myparcel.nl"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"label_description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My custom description"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"secondary_shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12347"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SECONDARY-SHIPMENT"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"carrier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Ei=n("h5",{id:"response-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true"},"#"),s(" Response")],-1),qi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),wi=n("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),Ci=n("h5",{id:"request-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true"},"#"),s(" Request")],-1),ji=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
\`

\`\`\`json
{
  "data": {
    "shipments": [
      {
        "id": 12346,
        "reference_identifier": "FOO-222-BAR-42",
        "recipient": {
          "cc": "NL",
          "region": "Zuid-Holland",
          "city": "Hoofddorp",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "person": "Mr. Parcel",
          "phone": "0233030315",
          "email": "testing@myparcel.nl"
        },
        "options": {
          "package_type": 1,
          "label_description": "My custom description"
        },
        "carrier": 1,
        "multi_collo_main_shipment_id": null
      }
    ]
  }
}
`)])],-1),Pi=n("h5",{id:"response-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true"},"#"),s(" Response")],-1),Ri=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Di=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),Si=n("h5",{id:"request-27",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-27","aria-hidden":"true"},"#"),s(" Request")],-1),Oi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ni=n("h5",{id:"response-27",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-27","aria-hidden":"true"},"#"),s(" Response")],-1),Ui=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Bi(Ii,Hi){const a=u("AutoLink"),c=u("ApiLink"),p=u("DataType"),l=u("Message"),o=u("Http"),r=u("DetailsExpand");return h(),d(k,null,[y,g,n("p",null,[t(a,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:e(()=>[f]),_:1})]),b,x,n("p",null,[v,t(c,{to:"7_C"},{default:e(()=>[A]),_:1}),T]),E,q,w,n("p",null,[C,t(p,{type:"platform",id:"1"}),j,t(p,{type:"platform",id:"3"}),P]),t(l,{title:"",type:"note"},{default:e(()=>[R]),_:1}),D,n("p",null,[S,t(p,{type:"platform",id:"1"}),O]),N,n("p",null,[U,t(p,{type:"platform",id:"1"}),B,t(c,{to:"7_N"},{default:e(()=>[I]),_:1}),H]),n("p",null,[n("strong",null,[L,t(p,{type:"shipment_status",id:"2"}),M,t(p,{type:"shipment_status",id:"3"}),F])]),Y,n("p",null,[z,t(p,{type:"package_type",id:"1"}),K]),G,n("p",null,[J,t(p,{type:"platform",id:"1"}),V,t(p,{type:"platform",id:"3"}),W]),Z,n("p",null,[Q,t(c,{to:"7_C"},{default:e(()=>[X]),_:1}),$,t(p,{type:"package_type",id:"1"}),nn]),sn,n("p",null,[tn,t(p,{type:"package_type",id:"1"}),en,an,on,pn,rn,cn,ln]),un,n("p",null,[dn,t(p,{type:"platform",id:"1"}),kn,t(p,{type:"platform",id:"3"}),hn]),_n,n("p",null,[mn,t(p,{type:"package_type",id:"1"}),yn,t(p,{type:"delivery_type",id:"4"}),gn]),fn,n("p",null,[bn,t(p,{type:"package_type",id:"1"}),xn,t(p,{type:"delivery_type",id:"3"}),vn]),An,n("p",null,[Tn,t(p,{type:"package_type",id:"1"}),En,qn,wn]),Cn,n("p",null,[jn,t(c,{to:"7_G"},{default:e(()=>[Pn]),_:1}),Rn,t(c,{to:"7_G"},{default:e(()=>[Dn]),_:1}),Sn]),n("p",null,[On,t(o,{code:"204"}),Nn,t(o,{code:"4xx"}),Un]),Bn,n("table",null,[n("tbody",null,[In,Hn,Ln,Mn,Fn,Yn,zn,Kn,Gn,Jn,n("tr",null,[Vn,n("td",null,[n("p",null,[Wn,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[Zn]),_:1}),Qn])])]),Xn,n("tr",null,[$n,n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[ns]),_:1}),ss])])]),n("tr",null,[n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[ts]),_:1}),es])])]),n("tr",null,[n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[as]),_:1}),os])])]),n("tr",null,[ps,n("td",null,[t(o,{code:"200"}),rs])]),cs,n("tr",null,[ls,n("td",null,[t(o,{code:"4xx"})])]),is])]),us,ds,n("p",null,[ks,hs,_s,ms,ys,t(p,{type:"shipment_status",id:"1"}),gs,fs,bs,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[xs]),_:1}),vs]),As,Ts,Es,t(r,{tag:"h4",title:"Create domestic PostNL shipments"},{default:e(()=>[qs,ws,Cs,js,Ps,t(o,{code:"200"}),Rs]),_:1}),t(r,{tag:"h4",title:"Create domestic bpost shipments"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Ds,t(p,{type:"platform",name:"belgie"}),Ss]),_:1}),Os,Ns,Us,Bs,t(o,{code:"200"}),Is]),_:1}),t(r,{tag:"h4",title:"Create domestic DPD shipments"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Hs,t(p,{type:"platform",name:"belgie"}),Ls]),_:1}),Ms,Fs,Ys,zs,t(o,{code:"200"}),Ks]),_:1}),t(r,{tag:"h4",title:"Create domestic Instabox shipments"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Gs,t(p,{type:"platform",name:"myparcel"}),Js]),_:1}),t(l,{type:"note"},{default:e(()=>[Vs,t(c,{to:"12_A"},{default:e(()=>[Ws]),_:1}),Zs]),_:1}),Qs,Xs,$s,nt,t(o,{code:"200"}),st]),_:1}),t(r,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[tt,t(p,{type:"platform",name:"myparcel"}),et,t(p,{type:"platform",name:"flespakket"}),at]),_:1}),ot,pt,rt,ct,t(o,{code:"200"}),lt]),_:1}),t(r,{tag:"h4",title:"Create International shipment"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[it,ut]),_:1}),dt,kt,ht,_t,t(o,{code:"200"}),mt]),_:1}),t(r,{tag:"h4",title:"Create digital stamp shipments"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[yt,t(p,{type:"platform",name:"myparcel"}),gt]),_:1}),ft,bt,xt,vt,t(o,{code:"200"}),At]),_:1}),t(r,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Tt,t(p,{type:"platform",name:"myparcel"}),Et,t(p,{type:"platform",name:"flespakket"}),qt]),_:1}),wt,Ct,jt,Pt,t(o,{code:"200"}),Rt]),_:1}),t(r,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Dt,t(p,{type:"platform",name:"belgie"}),St]),_:1}),Ot,Nt,Ut,Bt,t(o,{code:"200"}),It]),_:1}),t(r,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Ht,t(p,{type:"platform",name:"belgie"}),Lt]),_:1}),Mt,Ft,Yt,zt,t(o,{code:"200"}),Kt]),_:1}),t(r,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[Gt,t(p,{type:"platform",name:"myparcel"}),Jt,t(p,{type:"platform",name:"flespakket"}),Vt]),_:1}),Wt,Zt,Qt,Xt,t(o,{code:"200"}),$t]),_:1}),t(r,{tag:"h4",title:"Create shipment with BE pickup location"},{default:e(()=>[ne,se,te,ee,t(o,{code:"200"}),ae]),_:1}),t(r,{tag:"h4",title:"Create related return shipment"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[oe,t(p,{type:"platform",name:"belgie"}),pe,t(p,{type:"carrier",name:"bpost"}),re]),_:1}),ce,le,ie,ue,t(o,{code:"200"}),de]),_:1}),t(r,{tag:"h4",title:"Create unrelated return shipment"},{default:e(()=>[t(l,{type:"note"},{default:e(()=>[ke,t(p,{type:"platform",name:"belgie"}),he,t(p,{type:"carrier",name:"bpost"}),_e]),_:1}),me,ye,ge,fe,t(o,{code:"200"}),be]),_:1}),xe,t(l,{title:"",type:"note"},{default:e(()=>[n("p",null,[ve,t(p,{type:"shipment_status",id:"1"}),Ae])]),_:1}),Te,n("p",null,[Ee,t(p,{type:"shipment_status",id:"1"}),qe,t(o,{code:"204"}),we,t(o,{code:"422"}),Ce]),je,n("table",null,[n("tbody",null,[Pe,Re,De,Se,Oe,Ne,Ue,Be,n("tr",null,[Ie,n("td",null,[t(o,{code:"204"})])]),He,n("tr",null,[Le,n("td",null,[t(o,{code:"4xx"}),Me])]),Fe])]),Ye,n("p",null,[ze,Ke,Ge,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Je]),_:1}),Ve,We]),Ze,t(r,{tag:"h4",title:"Remove a shipment with id 1234."},{default:e(()=>[Qe,Xe,$e,t(o,{code:"204"})]),_:1}),na,sa,n("p",null,[ta,t(o,{code:"404"}),ea]),aa,n("table",null,[n("tbody",null,[oa,pa,ra,ca,la,ia,ua,n("tr",null,[da,n("td",null,[t(o,{code:"200"}),ka])]),ha,n("tr",null,[_a,n("td",null,[t(o,{code:"4xx"})])]),n("tr",null,[n("td",null,[t(o,{code:"5xx"})])]),ma])]),ya,t(r,{tag:"h4",title:"Generate unrelated return shipment"},{default:e(()=>[ga,fa,ba,t(o,{code:"200"}),xa,va]),_:1}),Aa,Ta,Ea,n("p",null,[qa,t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[wa]),_:1}),Ca,t(c,{to:"7_A"},{default:e(()=>[ja]),_:1}),Pa]),Ra,n("table",null,[n("tbody",null,[Da,Sa,Oa,Na,Ua,n("tr",null,[Ba,n("td",null,[Ia,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Ha]),_:1})])]),La,n("tr",null,[n("td",null,[Ma,t(a,{item:"/api-reference/04.data-types#boolean"},{default:e(()=>[Fa]),_:1})])]),n("tr",null,[n("td",null,[Ya,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[za]),_:1})])]),n("tr",null,[n("td",null,[Ka,t(a,{item:"/api-reference/04.data-types#timestamp"},{default:e(()=>[Ga]),_:1})])]),n("tr",null,[n("td",null,[Ja,t(a,{item:"/api-reference/04.data-types#timestamp"},{default:e(()=>[Va]),_:1})])]),n("tr",null,[n("td",null,[Wa,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Za]),_:1})])]),n("tr",null,[n("td",null,[Qa,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Xa]),_:1})])]),n("tr",null,[n("td",null,[$a,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[no]),_:1})])]),n("tr",null,[n("td",null,[so,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[to]),_:1})])]),eo,ao,n("tr",null,[oo,n("td",null,[t(o,{code:"200"})])]),po,ro,n("tr",null,[co,n("td",null,[t(o,{code:"4xx"})])]),lo])]),io,n("p",null,[uo,ko,ho,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[_o]),_:1}),mo,yo]),n("p",null,[go,fo,bo,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[xo]),_:1}),vo,Ao]),n("p",null,[To,Eo,qo,t(a,{item:"/api-reference/04.data-types#boolean"},{default:e(()=>[wo]),_:1}),Co,jo]),n("p",null,[Po,Ro,Do,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[So]),_:1}),Oo,No]),n("p",null,[Uo,Bo,Io,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[Ho]),_:1}),Lo,Mo]),n("p",null,[Fo,Yo,zo,t(a,{item:"/api-reference/04.data-types#date"},{default:e(()=>[Ko]),_:1}),Go,Jo]),n("p",null,[Vo,Wo,Zo,t(a,{item:"/api-reference/04.data-types#date"},{default:e(()=>[Qo]),_:1}),Xo,$o]),n("p",null,[np,sp,tp,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[ep]),_:1}),ap,op]),n("p",null,[pp,rp,cp,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[lp]),_:1}),ip,up]),n("p",null,[dp,kp,hp,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[_p]),_:1}),mp,yp,t(c,{to:"7_A"},{default:e(()=>[gp]),_:1}),fp]),n("p",null,[bp,xp,vp,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[Ap]),_:1}),Tp,Ep]),qp,t(r,{tag:"h4",title:"Search for shipments"},{default:e(()=>[wp,Cp,jp,Pp,t(o,{code:"200"}),Rp]),_:1}),Dp,Sp,n("p",null,[Op,Np,Up,Bp,Ip,Hp,Lp,Mp,Fp,Yp,zp,t(c,{to:"7_P"},{default:e(()=>[Kp]),_:1}),Gp]),Jp,n("p",null,[Vp,t(o,{code:"4xx"}),Wp]),n("p",null,[Zp,Qp,Xp,t(o,{code:"404"}),$p,t(a,{item:"#10"},{default:e(()=>[nr]),_:1}),sr]),tr,n("table",null,[n("tbody",null,[er,ar,or,pr,rr,n("tr",null,[n("td",null,[n("p",null,[cr,t(c,{to:"7_R"},{default:e(()=>[lr]),_:1}),ir])])]),n("tr",null,[n("td",null,[n("p",null,[ur,t(c,{to:"7_R"},{default:e(()=>[dr]),_:1}),kr])])]),hr,n("tr",null,[_r,n("td",null,[mr,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[yr]),_:1})])]),n("tr",null,[n("td",null,[gr,t(a,{item:"/api-reference/04.data-types#label_position"},{default:e(()=>[fr]),_:1})])]),br,n("tr",null,[xr,n("td",null,[t(o,{code:"200"}),vr])]),n("tr",null,[n("td",null,[t(o,{code:"200"}),Ar])]),Tr,n("tr",null,[n("td",null,[t(c,{to:"7_R"},{default:e(()=>[Er]),_:1})])]),qr,n("tr",null,[wr,n("td",null,[t(o,{code:"402"})])]),Cr])]),jr,n("p",null,[Pr,Rr,Dr,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Sr]),_:1}),Or,Nr]),n("p",null,[Ur,Br,Ir,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[Hr]),_:1}),Lr,Mr]),n("p",null,[Fr,Yr,zr,t(a,{item:"/api-reference/04.data-types#label_position"},{default:e(()=>[Kr]),_:1}),Gr,Jr]),Vr,t(r,{tag:"h4",title:"Get Shipment label"},{default:e(()=>[Wr,Zr,Qr,t(o,{code:"200"}),Xr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link"},{default:e(()=>[$r,nc,sc,t(o,{code:"200"}),tc]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:e(()=>[ec,ac,oc,t(o,{code:"200"}),pc]),_:1}),t(r,{tag:"h4",title:"Get shipment label with different format and position"},{default:e(()=>[rc,cc,lc,ic,t(o,{code:"200"}),uc]),_:1}),dc,kc,n("p",null,[hc,t(o,{code:"200"}),_c,t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[mc]),_:1}),yc,t(c,{to:"7_L"},{default:e(()=>[gc]),_:1}),fc]),bc,n("p",null,[xc,t(c,{to:"1_D"},{default:e(()=>[vc]),_:1}),Ac]),Tc,n("table",null,[n("tbody",null,[Ec,qc,wc,Cc,jc,n("tr",null,[Pc,n("td",null,[Rc,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Dc]),_:1})])]),n("tr",null,[n("td",null,[Sc,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Oc]),_:1})])]),n("tr",null,[n("td",null,[Nc,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Uc]),_:1})])]),n("tr",null,[n("td",null,[Bc,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[Ic]),_:1})])]),Hc,Lc,n("tr",null,[Mc,n("td",null,[t(o,{code:"200"})])]),Fc,Yc,n("tr",null,[zc,n("td",null,[t(o,{code:"4xx"})])]),Kc])]),Gc,n("p",null,[Jc,Vc,Wc,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Zc]),_:1}),Qc,Xc]),n("p",null,[$c,nl,sl,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[tl]),_:1}),el,al]),n("p",null,[ol,pl,rl,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[cl]),_:1}),ll,il]),n("p",null,[ul,dl,kl,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[hl]),_:1}),_l,ml,t(c,{to:"7_L"},{default:e(()=>[yl]),_:1})]),n("p",null,[gl,fl,bl,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[xl]),_:1}),vl,Al]),n("p",null,[Tl,El,ql,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[wl]),_:1}),Cl,jl]),Pl,Rl,t(r,{tag:"null"},{default:e(()=>[Dl,Sl,Ol,t(o,{code:"200"}),Nl]),_:1}),Ul,n("p",null,[Bl,t(c,{to:"6_B"},{default:e(()=>[Il]),_:1}),Hl]),n("p",null,[Ll,Ml,Fl,t(p,{type:"package_type",id:"1"}),Yl]),zl,n("ol",null,[n("li",null,[n("p",null,[Kl,t(c,{to:"6_C"},{default:e(()=>[Gl]),_:1}),Jl])]),n("li",null,[n("p",null,[Vl,t(c,{to:"6_H_3"},{default:e(()=>[Wl]),_:1}),Zl])]),Ql]),Xl,n("p",null,[$l,t(c,{to:"6_C"},{default:e(()=>[ni]),_:1}),si]),ti,ei,t(r,{tag:"h4",title:"Create national multi collo shipment"},{default:e(()=>[ai,oi,pi,ri,t(o,{code:"200"}),ci]),_:1}),t(r,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:e(()=>[li,ii,ui,di,ki,hi]),_:1}),t(r,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:e(()=>[_i,mi,yi,gi,fi,bi]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:e(()=>[xi,vi,Ai,Ti,Ei,qi]),_:1}),t(r,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:e(()=>[wi,Ci,ji,Pi,Ri]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:e(()=>[Di,Si,Oi,Ni,Ui]),_:1})],64)}var Fi=_(m,[["render",Bi],["__file","06.shipments.html.vue"]]);export{Fi as default};
