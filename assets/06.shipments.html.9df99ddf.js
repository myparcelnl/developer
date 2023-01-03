import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{o as h,c as _,b as n,a as t,w as e,d as s,e as u,r as i}from"./app.4ea2b539.js";const m={},y=n("h2",{id:"_6-shipments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6. Shipments")],-1),g=n("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),b=n("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),f=n("h3",{id:"_6-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A Shipment option combinations")],-1),x=n("h4",{id:"_6-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.1 Package types")],-1),v=s("There are four different packages types available and determine the name of shipment. The value is sent with the "),A=s("ShipmentOptions"),T=s(" .package_type field."),E=n("h5",{id:"_1-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 1. Package")],-1),w=n("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),C=n("h5",{id:"_2-mailbox-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 2. Mailbox package")],-1),j=s("This package type is only available on "),P=s(" and "),R=s(" for NL shipments that fit into a mailbox. It does not support additional options."),q=n("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),D=n("h5",{id:"_3-letter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true",tabindex:"-1"},"#"),s(" 3. Letter")],-1),S=s("This package type is available on "),N=s(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),O=n("h5",{id:"_4-digital-stamp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true",tabindex:"-1"},"#"),s(" 4. Digital stamp")],-1),U=s("This package type is only available on "),B=s(" for NL shipments and does not support any additional options. Its price is calculated using the package "),I=s("weight"),L=s(" ."),H=s("Note: This shipment will appear on your invoice on "),M=s(" as opposed to all other package types, which won't appear on your invoice until shipment "),F=s("."),Y=n("h4",{id:"_6-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.2 Delivery types")],-1),z=s("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),K=s(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),J=u('<h5 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true" tabindex="-1">#</a> 1. Morning</h5><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h5 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true" tabindex="-1">#</a> 2. Standard</h5><p>This is the standard delivery type.</p><h5 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true" tabindex="-1">#</a> 3. Evening</h5>',5),G=s("This option is only available on "),V=s(" and "),W=s(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),Z=u('<h5 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true" tabindex="-1">#</a> 4. Pickup</h5><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h5 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true" tabindex="-1">#</a> 5. Pickup express</h5><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h4 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true" tabindex="-1">#</a> 6.A.3 Options</h4>',5),Q=s("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),X=s("ShipmentOptions"),$=s(" object. These options are only available for "),nn=s("."),sn=u('<h5 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true" tabindex="-1">#</a> only_recipient</h5><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h5 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true" tabindex="-1">#</a> signature</h5><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h5 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true" tabindex="-1">#</a> return</h5><p>Return the package to the sender when the recipient is not home.</p><h5 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true" tabindex="-1">#</a> large_format</h5><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h5 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true" tabindex="-1">#</a> insurance</h5>',9),tn=s("This option allows a shipment to be insured up to certain amount. Only "),en=s(" shipments can be insured."),an=u('<ul><li>NL shipments can be insured for different amounts with different costs: <ul><li>Insured up to 100,- euros</li><li>Insured up to 250,- euros</li><li>Insured from 500,- euros up to 5000 euro&#39;s</li></ul></li><li>EU and global shipments can be insured for different amounts: <ul><li>Insured up to 50,- euros</li><li>Insured up to 500,- euros</li></ul></li></ul><p>The following shipment options are <strong>mandatory</strong> when insuring an NL shipment: only_recipient and signature.</p><h5 id="age-check" tabindex="-1"><a class="header-anchor" href="#age-check" aria-hidden="true" tabindex="-1">#</a> age_check</h5>',3),on=s("Only available on "),pn=s(" and "),rn=s(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),ln=n("h4",{id:"_6-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.4 Examples")],-1),cn=n("p",null,"We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.",-1),un=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),dn=s("Let's go through this example. This package will be picked up by the customer, so it needs to "),kn=s(" with "),hn=s(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),_n=n("p",null,"We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.",-1),mn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"delivery_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),yn=s("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),gn=s(" with "),bn=s(". All evening and morning packages need to have only_recipient set."),fn=n("p",null,"We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.",-1),xn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"500000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"signature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"only_recipient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),vn=s("Only "),An=s(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),Tn=n("code",null,"insurance.amount",-1),En=s(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),wn=n("p",null,"We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it's dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.",-1),Cn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"insurance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"large_format"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),jn=n("p",null,"This package is an EU package so the name must be set to 1. EU and Global shipments do not have the only_recipient and signature options so these cannot be set for this shipment.",-1),Pn=n("h3",{id:"_6-b",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B Add Shipment")],-1),Rn=n("h4",{id:"_6-b-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.1 Overview")],-1),qn=n("p",null,"Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named ' column_mapping' in the multipart/form-data.",-1),Dn=s("For JSON requests a "),Sn=s("ShipmentIds"),Nn=s(" object is returned. The ids in the "),On=s("ShipmentIds"),Un=s(" object will be in the same order they were sent."),Bn=s("For CSV requests "),In=s(" with empty response body is returned. If a request fails then an "),Ln=s(" is returned."),Hn=n("h4",{id:"_6-b-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.2 Reference")],-1),Mn=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments")],-1),Fn=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),Yn=n("tr",null,[n("td",{rowspan:"6"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),zn=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Kn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Jn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),Gn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),Vn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),Wn=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Optional request headers")])]),n("td",null,[n("p",null,[s("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),n("code",null,"shipment_label_created"),s(" to listen to it.)")])])],-1),Zn=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),Qn=n("td",{rowspan:"2"},[n("p",null,[n("strong",null,"Query parameters")])],-1),Xn=s("format = "),$n=s("paper_size"),ns=s(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),ss=n("tr",null,[n("td",null,[n("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),ts=n("td",{rowspan:"3"},[n("p",null,[n("strong",null,"Request body")])],-1),es=s("array"),as=s(" of Shipment objects. (For Shipments JSON request)"),os=s("array"),ps=s(" of ReturnShipment objects. (For ReturnShipments JSON request)"),rs=s("array"),ls=s(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),cs=n("td",null,[n("strong",null,"Response")],-1),is=s(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),us=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"ShipmentIds")],-1),ds=n("td",null,[n("strong",null,"Error response")],-1),ks=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),hs=n("h4",{id:"_6-b-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.3 Request Headers")],-1),_s=n("p",null,[n("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create standard shipments.")],-1),ms=n("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),ys=n("br",null,null,-1),gs=s(" Specify this Content-Type when you want to create related return shipments."),bs=n("br",null,null,-1),fs=s(" Parent shipment cannot be a concept ("),xs=s(") ."),vs=n("br",null,null,-1),As=s(" When a label is generated, the status of the shipment is converted to registered ( "),Ts=s("shipment_status"),Es=s(" 2)."),ws=n("p",null,[n("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),Cs=n("h4",{id:"_6-b-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.4 Examples")],-1),js=n("p",null,"In these examples we are going to create shipments.",-1),Ps=n("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),Rs=n("h6",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),qs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ds=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ss=n("h6",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ns=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Os=s(" Bpost shipments are only supported on "),Us=s(". "),Bs=n("h6",{id:"request-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Is=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ls=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Hs=n("h6",{id:"response-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ms=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"49566653"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Fs=s(" DPD shipments are only supported on "),Ys=s(". "),zs=n("h6",{id:"request-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ks=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Js=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Gs=n("h6",{id:"response-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Vs=s(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),Ws=s(" Multi collo shipments are only available on "),Zs=s(" and "),Qs=s(". "),Xs=n("h6",{id:"request-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),$s=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),nt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),st=n("h6",{id:"response-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),tt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),et=s(" Creating shipments to an international destination is possible depending on the chosen carrier: "),at=n("ul",null,[n("li",null,"PostNL and Bpost shipments are available worldwide."),n("li",null,"DPD shipments are available in the EU.")],-1),ot=n("h6",{id:"request-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),pt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),rt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),lt=n("h6",{id:"response-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ct=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3485394579"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),it=s(" Digital stamp shipments are available on "),ut=s(" and to Dutch destinations only. "),dt=n("h6",{id:"request-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),kt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ht=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),_t=n("h6",{id:"response-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),mt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"39234953"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),yt=s(" Only available on "),gt=s(" and "),bt=s(". "),ft=n("h6",{id:"request-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),xt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),vt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),At=n("h6",{id:"response-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Tt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Et=s(" Only available on "),wt=s(". "),Ct=n("h6",{id:"request-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),jt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Pt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Rt=n("h6",{id:"response-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),qt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),Dt=s(" Only available on "),St=s(". "),Nt=n("h6",{id:"request-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ot=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ut=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Bt=n("h6",{id:"response-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),It=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),Lt=s(" Only available on "),Ht=s(" and "),Mt=s(". "),Ft=n("h6",{id:"request-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Yt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Kt=n("h6",{id:"response-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Jt=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),Gt=n("h6",{id:"request-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Vt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Wt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Zt=n("h6",{id:"response-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Qt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Xt=s(" The following example creates a PostNL return shipment. On "),$t=s(" return shipments are only available with "),ne=s(". "),se=n("h6",{id:"request-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),te=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ee=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ae=n("h6",{id:"response-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),oe=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),pe=s(" The following example creates a PostNL return shipment. On "),re=s(" return shipments are only available with "),le=s(". "),ce=n("h6",{id:"request-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ie=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ue=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),de=n("h6",{id:"response-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ke=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),he=n("h3",{id:"_6-c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C Delete Shipment")],-1),_e=s("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),me=s("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),ye=n("h4",{id:"_6-c-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.1 Overview")],-1),ge=s("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),be=s(" can be deleted. This method returns "),fe=s(" if successful. If the shipment doesn't exist a "),xe=s(" is returned."),ve=n("h4",{id:"_6-c-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.2 Reference")],-1),Ae=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),Te=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"DELETE")],-1),Ee=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),we=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Ce=n("tr",null,[n("td",null,"Content-type: application/json;charset=utf-8")],-1),je=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Pe=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),Re=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),qe=n("td",null,[n("strong",null,"Response")],-1),De=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"None.")],-1),Se=n("td",null,[n("strong",null,"Error response")],-1),Ne=s("."),Oe=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Ue=n("h4",{id:"_6-c-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.3 Parameters")],-1),Be=n("strong",null,"id",-1),Ie=n("br",null,null,-1),Le=s(" Data type: "),He=s("integer"),Me=n("br",null,null,-1),Fe=s(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),Ye=n("h4",{id:"_6-c-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.4 Examples")],-1),ze=n("h6",{id:"request-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ke=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Je=n("h6",{id:"response-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ge=n("h3",{id:"_6-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D Generate unrelated return shipment URL")],-1),Ve=n("h4",{id:"_6-d-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.1 Overview")],-1),We=s("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),Ze=s(" Not Found is returned."),Qe=n("h4",{id:"_6-d-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.2 Reference")],-1),Xe=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/return_shipments")],-1),$e=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),na=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),sa=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),ta=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ea=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),aa=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),oa=n("td",null,[n("strong",null,"Response")],-1),pa=s(" Content-Type: application/json"),ra=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"DownloadUrl object.")],-1),la=n("td",{rowspan:"2"},[n("strong",null,"Error response")],-1),ca=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"None.")],-1),ia=n("h4",{id:"_6-d-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.3 Examples")],-1),ua=n("h6",{id:"request-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),da=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),ka=n("h6",{id:"response-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ha=s(" ``` Content-Type: application/json ``` "),_a=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"download_url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"link"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ma=n("h3",{id:"_6-e",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E Get Shipment")],-1),ya=n("h4",{id:"_6-e-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.1 Overview")],-1),ga=n("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),ba=s("Upon success either a JSON "),fa=s("array"),xa=s(" of "),va=s("Shipment"),Aa=s(" objects or a CSV file is returned."),Ta=n("h4",{id:"_6-e-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.2 Reference")],-1),Ea=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),wa=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Ca=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),ja=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Pa=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Ra=n("td",{rowspan:"10"},[n("strong",null,"Query parameters")],-1),qa=s("q = "),Da=s("string"),Sa=n("tr",null,[n("td",null,"reference_identifier = [reference_identifier]")],-1),Na=s("dropoff_today = "),Oa=s("boolean"),Ua=s("status = "),Ba=s("shipment_status"),Ia=s("from = "),La=s("timestamp"),Ha=s("to = "),Ma=s("timestamp"),Fa=s("page = "),Ya=s("integer"),za=s("size = "),Ka=s("integer"),Ja=s("sort = "),Ga=s("string"),Va=s("order = "),Wa=s("sort_order"),Za=n("tr",null,[n("td",null,[n("strong",null,"Optional request headers")]),n("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),Qa=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Xa=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),$a=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),no=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of Shipment objects (For JSON)")],-1),so=n("td",null,[n("strong",null,"Error response")],-1),to=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),eo=n("h4",{id:"_6-e-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.3 Parameters")],-1),ao=n("strong",null,"id",-1),oo=n("br",null,null,-1),po=s(" Data type: "),ro=s("integer"),lo=n("br",null,null,-1),co=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),io=n("strong",null,"reference_identifier",-1),uo=n("br",null,null,-1),ko=s(" Data type: "),ho=s("string"),_o=n("br",null,null,-1),mo=s(" This is an optional arbitrary identifier to identify the shipment."),yo=n("strong",null,"dropoff_today",-1),go=n("br",null,null,-1),bo=s(" Data type: "),fo=s("boolean"),xo=n("br",null,null,-1),vo=s(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),Ao=n("strong",null,"q",-1),To=n("br",null,null,-1),Eo=s(" Data type: "),wo=s("string"),Co=n("br",null,null,-1),jo=s(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),Po=n("strong",null,"status",-1),Ro=n("br",null,null,-1),qo=s(" Data type: "),Do=s("shipment_status"),So=n("br",null,null,-1),No=s(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Oo=n("strong",null,"from",-1),Uo=n("br",null,null,-1),Bo=s(" Data type: "),Io=s("date"),Lo=n("br",null,null,-1),Ho=s(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),Mo=n("strong",null,"to",-1),Fo=n("br",null,null,-1),Yo=s(" Data type: "),zo=s("date"),Ko=n("br",null,null,-1),Jo=s(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),Go=n("strong",null,"page",-1),Vo=n("br",null,null,-1),Wo=s(" Data type: "),Zo=s("integer"),Qo=n("br",null,null,-1),Xo=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),$o=n("strong",null,"size",-1),np=n("br",null,null,-1),sp=s(" Data type: "),tp=s("integer"),ep=n("br",null,null,-1),ap=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),op=n("strong",null,"sort",-1),pp=n("br",null,null,-1),rp=s(" Data type: "),lp=s("string"),cp=n("br",null,null,-1),ip=s(" Shipment object field to sort on. See "),up=s("Shipment"),dp=s(" object"),kp=n("strong",null,"order",-1),hp=n("br",null,null,-1),_p=s(" Data type: "),mp=s("sort_order"),yp=n("br",null,null,-1),gp=s(" Sort order for sort filter. Defaults to ASC."),bp=n("h4",{id:"_6-e-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.4 Examples")],-1),fp=n("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),xp=n("h6",{id:"request-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),vp=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Ap=n("h6",{id:"response-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Tp=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ep=n("h3",{id:"_6-f",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F Get Shipment label")],-1),wp=n("h4",{id:"_6-f-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.1 Overview")],-1),Cp=s("Get shipment label. You can specify label format and starting position of labels on the first page with the "),jp=n("strong",null,"format",-1),Pp=s(" and "),Rp=n("strong",null,"position",-1),qp=s(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Dp=n("strong",null,"Post-payment",-1),Sp=s(" payment methods can fetch multiple labels in one call. For accounts with "),Np=n("strong",null,"Pre-payment",-1),Op=s(" payment method an "),Up=n("code",null,"<Http code=402 /> Payment Required",-1),Bp=s(" with a "),Ip=s(" PaymentInstructions"),Lp=s(" object is returned if the label has not been paid for yet."),Hp=n("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),Mp=s("Upon error "),Fp=s(" with a response body containing an Error is returned."),Yp=s("If you want to retrieve more than 25 labels in one response, you can use "),zp=n("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),Kp=s(". You will receive a URL to a label, but the label is not immediately available and will return an "),Jp=s(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),Gp=s("label_created webhooks"),Vp=s("."),Wp=n("h4",{id:"_6-f-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.2 Reference")],-1),Zp=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),Qp=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Xp=n("tr",null,[n("td",{rowspan:"5"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),$p=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),nr=n("tr",null,[n("td",null,[n("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),sr=s("Accept: application/json;charset=utf8 (For "),tr=s("ShipmentLabelDownloadLink"),er=s(") For processing less than 25 labels."),ar=s("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),or=s("ShipmentLabelDownloadLink"),pr=s(") For processing multiple labels. Recommended if you request more than 25 labels."),rr=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = Shipment.id")],-1),lr=n("td",{rowspan:"2"},[n("strong",null,"Query parameters")],-1),cr=s("format = "),ir=s("paper_size"),ur=s("positions = "),dr=s("label_position"),kr=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),hr=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),_r=s(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),mr=s(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),yr=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Response body")]),n("td",null,"Shipment label PDF")],-1),gr=s("ShipmentLabelDownloadLink"),br=n("tr",null,[n("td",null,"PaymentInstructions")],-1),fr=n("td",null,[n("strong",null,"Error response")],-1),xr=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Error response body")])]),n("td",null,[n("p",null,"Content-Type: application/json (When payment is required)")])],-1),vr=n("h4",{id:"_6-f-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.3 Parameters")],-1),Ar=n("strong",null,"id",-1),Tr=n("br",null,null,-1),Er=s(" Data type: "),wr=s("integer"),Cr=n("br",null,null,-1),jr=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Pr=n("strong",null,"format",-1),Rr=n("br",null,null,-1),qr=s(" Data type: "),Dr=s("paper_size"),Sr=n("br",null,null,-1),Nr=s(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Or=n("strong",null,"positions",-1),Ur=n("br",null,null,-1),Br=s(" Data type: "),Ir=s("label_position"),Lr=n("br",null,null,-1),Hr=s(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),Mr=n("h4",{id:"_6-f-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.4 Examples")],-1),Fr=n("h6",{id:"request-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Yr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zr=n("h6",{id:"response-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Kr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),Jr=n("h6",{id:"request-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Gr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),Vr=n("h6",{id:"response-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Wr=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Zr=n("h6",{id:"request-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Qr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),Xr=n("h6",{id:"response-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),$r=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),nl=n("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),sl=n("h6",{id:"request-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),tl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),el=n("h6",{id:"response-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),al=s(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),ol=n("h3",{id:"_6-g",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G Track Shipment")],-1),pl=n("h4",{id:"_6-g-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.1 Overview")],-1),rl=s("Get detailed Track & Trace information for a shipment. Upon success "),ll=s(" is returned with an "),cl=s("array"),il=s(" of "),ul=s("TrackTrace"),dl=s(" objects."),kl=n("h4",{id:"_6-g-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.2 Limitations")],-1),hl=s("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),_l=s("rate limit"),ml=s(" ."),yl=n("h4",{id:"_6-g-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.3 Reference")],-1),gl=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),bl=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),fl=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required")]),n("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),xl=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),vl=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id= [Shipment].id")],-1),Al=n("td",{rowspan:"5"},[n("strong",null,"Query parameters")],-1),Tl=s("page= "),El=s("integer"),wl=s("size= "),Cl=s("integer"),jl=s("sort= "),Pl=s("string"),Rl=s("order= "),ql=s("sort_order"),Dl=n("tr",null,[n("td",null,"extra_info= [extra_info]")],-1),Sl=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Nl=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Ol=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8")],-1),Ul=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of TrackTrace objects.")],-1),Bl=n("td",null,[n("strong",null,"Error response")],-1),Il=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Ll=n("h4",{id:"_6-g-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.4 Parameters")],-1),Hl=n("strong",null,"id",-1),Ml=n("br",null,null,-1),Fl=s(" Data type: "),Yl=s("integer"),zl=n("br",null,null,-1),Kl=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Jl=n("strong",null,"page",-1),Gl=n("br",null,null,-1),Vl=s(" Data type: "),Wl=s("integer"),Zl=n("br",null,null,-1),Ql=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),Xl=n("strong",null,"size",-1),$l=n("br",null,null,-1),nc=s(" Data type: "),sc=s("integer"),tc=n("br",null,null,-1),ec=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),ac=n("strong",null,"sort",-1),oc=n("br",null,null,-1),pc=s(" Data type: "),rc=s("string"),lc=n("br",null,null,-1),cc=s(" TrackTrace object field to sort on. See "),ic=s("TrackTrace"),uc=n("strong",null,"order",-1),dc=n("br",null,null,-1),kc=s(" Data type: "),hc=s("sort_order"),_c=n("br",null,null,-1),mc=s(" Sort order for sort filter. Defaults to ASC."),yc=n("strong",null,"extra_info",-1),gc=n("br",null,null,-1),bc=s(" Data type: "),fc=s("string"),xc=n("br",null,null,-1),vc=s(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),Ac=n("p",null,"extra_info=delivery_moment",-1),Tc=n("h4",{id:"_6-g-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.5 Examples")],-1),Ec=n("h6",{id:"request-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),wc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Cc=n("h6",{id:"response-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),jc=s(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),Pc=u('<h3 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true" tabindex="-1">#</a> 6.H Multi collo shipments</h3><h4 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true" tabindex="-1">#</a> 6.H.1 Overview</h4><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h4 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true" tabindex="-1">#</a> 6.H.2 Create</h4>',4),Rc=s("This section extends the "),qc=s("base functionality"),Dc=s("."),Sc=s("Creating a multi collo shipment basically means using one extra property "),Nc=n("code",null,"secondary_shipments",-1),Oc=s(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Uc=s(" and can only be used for shipments to NL en BE."),Bc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;reference_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SECONDARY-SHIPMENT&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-h-3" tabindex="-1"><a class="header-anchor" href="#_6-h-3" aria-hidden="true" tabindex="-1">#</a> 6.H.3 Update</h4><table><tbody><tr><td><strong>URI</strong></td><td>https://api.myparcel.nl/shipments</td></tr><tr><td><strong>Methods</strong></td><td>PUT</td></tr><tr><td rowspan="2"><strong>Required request headers</strong></td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>Content-Type: application/vnd.shipment+json;version=1.1</td></tr></tbody></table><p>Updating a secondary shipment can be done in several ways using different endpoints.</p><h5 id="add-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#add-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Add secondary shipment</h5><p>Adding an existing shipment to an existing multi collo shipment can be done in two ways.</p><ol><li>Post complete shipment with an extra shipment passed in the <code>secondary_shipments</code> property.</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h5 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Remove secondary shipment</h5><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),Ic=s("Delete secondary shipment. Make use of the "),Lc=s("delete endpoint"),Hc=s(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),Mc=s("Omit the secondary shipment in an "),Fc=s("update"),Yc=s(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),zc=n("li",null,[n("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),Kc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true" tabindex="-1">#</a> 6.H.4 Delete</h4>`,2),Jc=s("This section extends the "),Gc=s("base functionality"),Vc=s(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),Wc=n("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),Zc=n("h4",{id:"_6-h-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.H.5 Examples")],-1),Qc=n("h6",{id:"request-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Xc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),$c=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ni=n("h6",{id:"response-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),si=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ti=n("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),ei=n("h6",{id:"request-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ai=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),oi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),pi=n("h6",{id:"response-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ri=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),li=n("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),ci=n("h6",{id:"request-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ii=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ui=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),di=n("h6",{id:"response-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ki=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),hi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),_i=n("h6",{id:"request-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),mi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),yi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),gi=n("h6",{id:"response-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),fi=n("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),xi=n("h6",{id:"request-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),vi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])],-1),Ai=n("h6",{id:"response-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ti=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Ei=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),wi=n("h6",{id:"request-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ci=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ji=n("h6",{id:"response-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Pi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Ri(qi,Di){const d=i("AutoLink"),l=i("ApiLink"),p=i("DataType"),c=i("Message"),r=i("DetailsExpand"),a=i("Http"),o=i("RouterLink");return h(),_("div",null,[y,g,n("p",null,[t(d,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:e(()=>[b]),_:1})]),f,x,n("p",null,[v,t(l,{to:"7_C"},{default:e(()=>[A]),_:1}),T]),E,w,C,n("p",null,[j,t(p,{type:"platform",id:"1"}),P,t(p,{type:"platform",id:"3"}),R]),t(c,{title:"",type:"note"},{default:e(()=>[q]),_:1}),D,n("p",null,[S,t(p,{type:"platform",id:"1"}),N]),O,n("p",null,[U,t(p,{type:"platform",id:"1"}),B,t(l,{to:"7_N"},{default:e(()=>[I]),_:1}),L]),n("p",null,[n("strong",null,[H,t(p,{type:"shipment-status",id:"2"}),M,t(p,{type:"shipment-status",id:"3"}),F])]),Y,n("p",null,[z,t(p,{type:"package-type",id:"1"}),K]),J,n("p",null,[G,t(p,{type:"platform",id:"1"}),V,t(p,{type:"platform",id:"3"}),W]),Z,n("p",null,[Q,t(l,{to:"7_C"},{default:e(()=>[X]),_:1}),$,t(p,{type:"package-type",id:"1"}),nn]),sn,n("p",null,[tn,t(p,{type:"package-type",id:"1"}),en]),an,n("p",null,[on,t(p,{type:"platform",id:"1"}),pn,t(p,{type:"platform",id:"3"}),rn]),ln,t(r,{tag:"null",title:"Pickup"},{default:e(()=>[cn,un,n("p",null,[dn,t(p,{type:"package-type",id:"1"}),kn,t(p,{type:"delivery-type",id:"4"}),hn])]),_:1}),t(r,{tag:"null",title:"Evening"},{default:e(()=>[_n,mn,n("p",null,[yn,t(p,{type:"package-type",id:"1"}),gn,t(p,{type:"delivery-type",id:"3"}),bn])]),_:1}),t(r,{tag:"null",title:"NL insured"},{default:e(()=>[fn,xn,n("p",null,[vn,t(p,{type:"package-type",id:"1"}),An,Tn,En])]),_:1}),t(r,{tag:"null",title:"EU and Global insured"},{default:e(()=>[wn,Cn,jn]),_:1}),Pn,Rn,qn,n("p",null,[Dn,t(l,{to:"7_G"},{default:e(()=>[Sn]),_:1}),Nn,t(l,{to:"7_G"},{default:e(()=>[On]),_:1}),Un]),n("p",null,[Bn,t(a,{code:"204"}),In,t(a,{code:"4xx"}),Ln]),Hn,n("table",null,[n("tbody",null,[Mn,Fn,Yn,zn,Kn,Jn,Gn,Vn,Wn,Zn,n("tr",null,[Qn,n("td",null,[n("p",null,[Xn,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[$n]),_:1}),ns])])]),ss,n("tr",null,[ts,n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[es]),_:1}),as])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[os]),_:1}),ps])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[rs]),_:1}),ls])])]),n("tr",null,[cs,n("td",null,[t(a,{code:"200"}),is])]),us,n("tr",null,[ds,n("td",null,[t(a,{code:"4xx"})])]),ks])]),hs,_s,n("p",null,[ms,ys,gs,bs,fs,t(p,{type:"shipment-status",id:"1"}),xs,vs,As,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Ts]),_:1}),Es]),ws,Cs,js,t(r,{tag:"h4",title:"Create domestic PostNL shipments"},{default:e(()=>[Ps,Rs,qs,Ds,Ss,t(a,{code:"200"}),Ns]),_:1}),t(r,{tag:"h4",title:"Create domestic bpost shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Os,t(p,{type:"platform",name:"belgie"}),Us]),_:1}),Bs,Is,Ls,Hs,t(a,{code:"200"}),Ms]),_:1}),t(r,{tag:"h4",title:"Create domestic DPD shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Fs,t(p,{type:"platform",name:"belgie"}),Ys]),_:1}),zs,Ks,Js,Gs,t(a,{code:"200"}),Vs]),_:1}),t(r,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ws,t(p,{type:"platform",name:"myparcel"}),Zs,t(p,{type:"platform",name:"flespakket"}),Qs]),_:1}),Xs,$s,nt,st,t(a,{code:"200"}),tt]),_:1}),t(r,{tag:"h4",title:"Create International shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[et,at]),_:1}),ot,pt,rt,lt,t(a,{code:"200"}),ct]),_:1}),t(r,{tag:"h4",title:"Create digital stamp shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[it,t(p,{type:"platform",name:"myparcel"}),ut]),_:1}),dt,kt,ht,_t,t(a,{code:"200"}),mt]),_:1}),t(r,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[yt,t(p,{type:"platform",name:"myparcel"}),gt,t(p,{type:"platform",name:"flespakket"}),bt]),_:1}),ft,xt,vt,At,t(a,{code:"200"}),Tt]),_:1}),t(r,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Et,t(p,{type:"platform",name:"belgie"}),wt]),_:1}),Ct,jt,Pt,Rt,t(a,{code:"200"}),qt]),_:1}),t(r,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Dt,t(p,{type:"platform",name:"belgie"}),St]),_:1}),Nt,Ot,Ut,Bt,t(a,{code:"200"}),It]),_:1}),t(r,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Lt,t(p,{type:"platform",name:"myparcel"}),Ht,t(p,{type:"platform",name:"flespakket"}),Mt]),_:1}),Ft,Yt,zt,Kt,t(a,{code:"200"}),Jt]),_:1}),t(r,{tag:"h4",title:"Create shipment with BE pickup location"},{default:e(()=>[Gt,Vt,Wt,Zt,t(a,{code:"200"}),Qt]),_:1}),t(r,{tag:"h4",title:"Create related return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Xt,t(p,{type:"platform",name:"belgie"}),$t,t(p,{type:"carrier",name:"bpost"}),ne]),_:1}),se,te,ee,ae,t(a,{code:"200"}),oe]),_:1}),t(r,{tag:"h4",title:"Create unrelated return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[pe,t(p,{type:"platform",name:"belgie"}),re,t(p,{type:"carrier",name:"bpost"}),le]),_:1}),ce,ie,ue,de,t(a,{code:"200"}),ke]),_:1}),he,t(c,{title:"",type:"note"},{default:e(()=>[n("p",null,[_e,t(p,{type:"shipment-status",id:"1"}),me])]),_:1}),ye,n("p",null,[ge,t(p,{type:"shipment-status",id:"1"}),be,t(a,{code:"204"}),fe,t(a,{code:"422"}),xe]),ve,n("table",null,[n("tbody",null,[Ae,Te,Ee,we,Ce,je,Pe,Re,n("tr",null,[qe,n("td",null,[t(a,{code:"204"})])]),De,n("tr",null,[Se,n("td",null,[t(a,{code:"4xx"}),Ne])]),Oe])]),Ue,n("p",null,[Be,Ie,Le,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[He]),_:1}),Me,Fe]),Ye,t(r,{tag:"h4",title:"Remove a shipment with id 1234."},{default:e(()=>[ze,Ke,Je,t(a,{code:"204"})]),_:1}),Ge,Ve,n("p",null,[We,t(a,{code:"404"}),Ze]),Qe,n("table",null,[n("tbody",null,[Xe,$e,na,sa,ta,ea,aa,n("tr",null,[oa,n("td",null,[t(a,{code:"200"}),pa])]),ra,n("tr",null,[la,n("td",null,[t(a,{code:"4xx"})])]),n("tr",null,[n("td",null,[t(a,{code:"5xx"})])]),ca])]),ia,t(r,{tag:"h4",title:"Generate unrelated return shipment"},{default:e(()=>[ua,da,ka,t(a,{code:"200"}),ha,_a]),_:1}),ma,ya,ga,n("p",null,[ba,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[fa]),_:1}),xa,t(l,{to:"7_A"},{default:e(()=>[va]),_:1}),Aa]),Ta,n("table",null,[n("tbody",null,[Ea,wa,Ca,ja,Pa,n("tr",null,[Ra,n("td",null,[qa,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Da]),_:1})])]),Sa,n("tr",null,[n("td",null,[Na,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[Oa]),_:1})])]),n("tr",null,[n("td",null,[Ua,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Ba]),_:1})])]),n("tr",null,[n("td",null,[Ia,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[La]),_:1})])]),n("tr",null,[n("td",null,[Ha,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[Ma]),_:1})])]),n("tr",null,[n("td",null,[Fa,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Ya]),_:1})])]),n("tr",null,[n("td",null,[za,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Ka]),_:1})])]),n("tr",null,[n("td",null,[Ja,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Ga]),_:1})])]),n("tr",null,[n("td",null,[Va,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[Wa]),_:1})])]),Za,Qa,n("tr",null,[Xa,n("td",null,[t(a,{code:"200"})])]),$a,no,n("tr",null,[so,n("td",null,[t(a,{code:"4xx"})])]),to])]),eo,n("p",null,[ao,oo,po,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[ro]),_:1}),lo,co]),n("p",null,[io,uo,ko,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[ho]),_:1}),_o,mo]),n("p",null,[yo,go,bo,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[fo]),_:1}),xo,vo]),n("p",null,[Ao,To,Eo,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[wo]),_:1}),Co,jo]),n("p",null,[Po,Ro,qo,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Do]),_:1}),So,No]),n("p",null,[Oo,Uo,Bo,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[Io]),_:1}),Lo,Ho]),n("p",null,[Mo,Fo,Yo,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[zo]),_:1}),Ko,Jo]),n("p",null,[Go,Vo,Wo,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Zo]),_:1}),Qo,Xo]),n("p",null,[$o,np,sp,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[tp]),_:1}),ep,ap]),n("p",null,[op,pp,rp,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[lp]),_:1}),cp,ip,t(l,{to:"7_A"},{default:e(()=>[up]),_:1}),dp]),n("p",null,[kp,hp,_p,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[mp]),_:1}),yp,gp]),bp,t(r,{tag:"h4",title:"Search for shipments"},{default:e(()=>[fp,xp,vp,Ap,t(a,{code:"200"}),Tp]),_:1}),Ep,wp,n("p",null,[Cp,jp,Pp,Rp,qp,Dp,Sp,Np,Op,Up,Bp,t(l,{to:"7_P"},{default:e(()=>[Ip]),_:1}),Lp]),Hp,n("p",null,[Mp,t(a,{code:"4xx"}),Fp]),n("p",null,[Yp,zp,Kp,t(a,{code:"404"}),Jp,t(l,{to:"11_C"},{default:e(()=>[Gp]),_:1}),Vp]),Wp,n("table",null,[n("tbody",null,[Zp,Qp,Xp,$p,nr,n("tr",null,[n("td",null,[n("p",null,[sr,t(l,{to:"7_R"},{default:e(()=>[tr]),_:1}),er])])]),n("tr",null,[n("td",null,[n("p",null,[ar,t(l,{to:"7_R"},{default:e(()=>[or]),_:1}),pr])])]),rr,n("tr",null,[lr,n("td",null,[cr,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[ir]),_:1})])]),n("tr",null,[n("td",null,[ur,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[dr]),_:1})])]),kr,n("tr",null,[hr,n("td",null,[t(a,{code:"200"}),_r])]),n("tr",null,[n("td",null,[t(a,{code:"200"}),mr])]),yr,n("tr",null,[n("td",null,[t(l,{to:"7_R"},{default:e(()=>[gr]),_:1})])]),br,n("tr",null,[fr,n("td",null,[t(a,{code:"402"})])]),xr])]),vr,n("p",null,[Ar,Tr,Er,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[wr]),_:1}),Cr,jr]),n("p",null,[Pr,Rr,qr,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[Dr]),_:1}),Sr,Nr]),n("p",null,[Or,Ur,Br,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[Ir]),_:1}),Lr,Hr]),Mr,t(r,{tag:"h4",title:"Get Shipment label"},{default:e(()=>[Fr,Yr,zr,t(a,{code:"200"}),Kr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link"},{default:e(()=>[Jr,Gr,Vr,t(a,{code:"200"}),Wr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:e(()=>[Zr,Qr,Xr,t(a,{code:"200"}),$r]),_:1}),t(r,{tag:"h4",title:"Get shipment label with different format and position"},{default:e(()=>[nl,sl,tl,el,t(a,{code:"200"}),al]),_:1}),ol,pl,n("p",null,[rl,t(a,{code:"200"}),ll,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[cl]),_:1}),il,t(l,{to:"7_L"},{default:e(()=>[ul]),_:1}),dl]),kl,n("p",null,[hl,t(l,{to:"1_D"},{default:e(()=>[_l]),_:1}),ml]),yl,n("table",null,[n("tbody",null,[gl,bl,fl,xl,vl,n("tr",null,[Al,n("td",null,[Tl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[El]),_:1})])]),n("tr",null,[n("td",null,[wl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Cl]),_:1})])]),n("tr",null,[n("td",null,[jl,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Pl]),_:1})])]),n("tr",null,[n("td",null,[Rl,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[ql]),_:1})])]),Dl,Sl,n("tr",null,[Nl,n("td",null,[t(a,{code:"200"})])]),Ol,Ul,n("tr",null,[Bl,n("td",null,[t(a,{code:"4xx"})])]),Il])]),Ll,n("p",null,[Hl,Ml,Fl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Yl]),_:1}),zl,Kl]),n("p",null,[Jl,Gl,Vl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Wl]),_:1}),Zl,Ql]),n("p",null,[Xl,$l,nc,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[sc]),_:1}),tc,ec]),n("p",null,[ac,oc,pc,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[rc]),_:1}),lc,cc,t(l,{to:"7_L"},{default:e(()=>[ic]),_:1})]),n("p",null,[uc,dc,kc,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[hc]),_:1}),_c,mc]),n("p",null,[yc,gc,bc,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[fc]),_:1}),xc,vc]),Ac,Tc,t(r,{tag:"null"},{default:e(()=>[Ec,wc,Cc,t(a,{code:"200"}),jc]),_:1}),Pc,n("p",null,[Rc,t(l,{to:"6_B"},{default:e(()=>[qc]),_:1}),Dc]),n("p",null,[Sc,Nc,Oc,t(p,{type:"package-type",id:"1"}),Uc]),Bc,n("ol",null,[n("li",null,[n("p",null,[Ic,t(l,{to:"6_C"},{default:e(()=>[Lc]),_:1}),Hc])]),n("li",null,[n("p",null,[Mc,t(l,{to:"6_H_3"},{default:e(()=>[Fc]),_:1}),Yc])]),zc]),Kc,n("p",null,[Jc,t(l,{to:"6_C"},{default:e(()=>[Gc]),_:1}),Vc]),Wc,Zc,t(r,{tag:"h4",title:"Create national multi collo shipment"},{default:e(()=>[Qc,Xc,$c,ni,t(a,{code:"200"}),si]),_:1}),t(r,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:e(()=>[ti,ei,ai,oi,pi,ri]),_:1}),t(r,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:e(()=>[li,ci,ii,ui,di,ki]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:e(()=>[hi,_i,mi,yi,gi,bi]),_:1}),t(r,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:e(()=>[fi,xi,vi,Ai,Ti]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:e(()=>[Ei,wi,Ci,ji,Pi]),_:1})])}var Oi=k(m,[["render",Ri],["__file","06.shipments.html.vue"]]);export{Oi as default};
