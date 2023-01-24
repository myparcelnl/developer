import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{o as h,c as _,b as n,a as t,w as e,d as s,e as u,r as i}from"./app.a02d6c3e.js";const m={},y=n("h2",{id:"_6-shipments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6. Shipments")],-1),g=n("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),b=n("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),f=n("h3",{id:"_6-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A Shipment option combinations")],-1),x=n("h4",{id:"_6-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.1 Package types")],-1),v=s("There are four different packages types available and determine the name of shipment. The value is sent with the "),A=s("ShipmentOptions"),T=s(" .package_type field."),E=n("h5",{id:"_1-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 1. Package")],-1),w=n("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),C=n("h5",{id:"_2-mailbox-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 2. Mailbox package")],-1),j=s("This package type is only available on "),P=s(" and "),R=s(" for NL shipments that fit into a mailbox. It does not support additional options."),q=n("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),D=n("h5",{id:"_3-letter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true",tabindex:"-1"},"#"),s(" 3. Letter")],-1),S=s("This package type is available on "),N=s(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),O=n("h5",{id:"_4-digital-stamp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true",tabindex:"-1"},"#"),s(" 4. Digital stamp")],-1),U=s("This package type is only available on "),B=s(" for NL shipments and does not support any additional options. Its price is calculated using the package "),I=s("weight"),L=s(" ."),H=s("Note: This shipment will appear on your invoice on "),M=s(" as opposed to all other package types, which won't appear on your invoice until shipment "),F=s("."),Y=n("h4",{id:"_6-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.2 Delivery types")],-1),z=s("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),K=s(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),J=u('<h5 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true" tabindex="-1">#</a> 1. Morning</h5><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h5 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true" tabindex="-1">#</a> 2. Standard</h5><p>This is the standard delivery type.</p><h5 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true" tabindex="-1">#</a> 3. Evening</h5>',5),G=s("This option is only available on "),V=s(" and "),W=s(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),Z=u('<h5 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true" tabindex="-1">#</a> 4. Pickup</h5><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h5 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true" tabindex="-1">#</a> 5. Pickup express</h5><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h4 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true" tabindex="-1">#</a> 6.A.3 Options</h4>',5),Q=s("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),X=s("ShipmentOptions"),$=s(" object. These options are only available for "),nn=s("."),sn=u('<h5 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true" tabindex="-1">#</a> only_recipient</h5><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h5 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true" tabindex="-1">#</a> signature</h5><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h5 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true" tabindex="-1">#</a> return</h5><p>Return the package to the sender when the recipient is not home.</p><h5 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true" tabindex="-1">#</a> large_format</h5><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h5 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true" tabindex="-1">#</a> insurance</h5>',9),tn=s("This option allows a shipment to be insured up to certain amount. Only "),en=s(" shipments can be insured."),an=u('<ul><li>NL shipments can be insured for different amounts with different costs: <ul><li>Insured up to 100,- euros</li><li>Insured up to 250,- euros</li><li>Insured from 500,- euros up to 5000 euro&#39;s</li></ul></li><li>EU and global shipments can be insured for different amounts: <ul><li>Insured up to 50,- euros</li><li>Insured up to 500,- euros</li></ul></li></ul><p>The following shipment options are <strong>mandatory</strong> when insuring an NL shipment: only_recipient and signature.</p><h5 id="age-check" tabindex="-1"><a class="header-anchor" href="#age-check" aria-hidden="true" tabindex="-1">#</a> age_check</h5>',3),on=s("Only available on "),pn=s(" and "),rn=s(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),ln=n("h5",{id:"saturday-delivery",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#saturday-delivery","aria-hidden":"true",tabindex:"-1"},"#"),s(" saturday_delivery")],-1),cn=s("Only available on "),un=s(" and carrier bpost. An additional fee is paid for delivery on saturdays."),dn=n("h4",{id:"_6-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.4 Examples")],-1),kn=n("p",null,"We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.",-1),hn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),_n=s("Let's go through this example. This package will be picked up by the customer, so it needs to "),mn=s(" with "),yn=s(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),gn=n("p",null,"We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.",-1),bn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),fn=s("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),xn=s(" with "),vn=s(". All evening and morning packages need to have only_recipient set."),An=n("p",null,"We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.",-1),Tn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),En=s("Only "),wn=s(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),Cn=n("code",null,"insurance.amount",-1),jn=s(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),Pn=n("p",null,"We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it's dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.",-1),Rn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),qn=n("p",null,"This package is an EU package so the name must be set to 1. EU and Global shipments do not have the only_recipient and signature options so these cannot be set for this shipment.",-1),Dn=n("h3",{id:"_6-b",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B Add Shipment")],-1),Sn=n("h4",{id:"_6-b-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.1 Overview")],-1),Nn=n("p",null,"Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named ' column_mapping' in the multipart/form-data.",-1),On=s("For JSON requests a "),Un=s("ShipmentIds"),Bn=s(" object is returned. The ids in the "),In=s("ShipmentIds"),Ln=s(" object will be in the same order they were sent."),Hn=s("For CSV requests "),Mn=s(" with empty response body is returned. If a request fails then an "),Fn=s(" is returned."),Yn=n("h4",{id:"_6-b-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.2 Reference")],-1),zn=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments")],-1),Kn=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),Jn=n("tr",null,[n("td",{rowspan:"6"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Gn=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Vn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Wn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),Zn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),Qn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),Xn=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Optional request headers")])]),n("td",null,[n("p",null,[s("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),n("code",null,"shipment_label_created"),s(" to listen to it.)")])])],-1),$n=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ns=n("td",{rowspan:"2"},[n("p",null,[n("strong",null,"Query parameters")])],-1),ss=s("format = "),ts=s("paper_size"),es=s(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),as=n("tr",null,[n("td",null,[n("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),os=n("td",{rowspan:"3"},[n("p",null,[n("strong",null,"Request body")])],-1),ps=s("array"),rs=s(" of Shipment objects. (For Shipments JSON request)"),ls=s("array"),cs=s(" of ReturnShipment objects. (For ReturnShipments JSON request)"),is=s("array"),us=s(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),ds=n("td",null,[n("strong",null,"Response")],-1),ks=s(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),hs=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"ShipmentIds")],-1),_s=n("td",null,[n("strong",null,"Error response")],-1),ms=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),ys=n("h4",{id:"_6-b-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.3 Request Headers")],-1),gs=n("p",null,[n("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create standard shipments.")],-1),bs=n("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),fs=n("br",null,null,-1),xs=s(" Specify this Content-Type when you want to create related return shipments."),vs=n("br",null,null,-1),As=s(" Parent shipment cannot be a concept ("),Ts=s(") ."),Es=n("br",null,null,-1),ws=s(" When a label is generated, the status of the shipment is converted to registered ( "),Cs=s("shipment_status"),js=s(" 2)."),Ps=n("p",null,[n("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),Rs=n("h4",{id:"_6-b-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.4 Examples")],-1),qs=n("p",null,"In these examples we are going to create shipments.",-1),Ds=n("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),Ss=n("h6",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ns=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Os=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Us=n("h6",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Bs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Is=s(" Bpost shipments are only supported on "),Ls=s(". "),Hs=n("h6",{id:"request-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ms=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Fs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
          `),n("span",{class:"token property"},'"saturday_delivery"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
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
`)])])],-1),Ys=n("h6",{id:"response-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),zs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"49566653"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Ks=s(" DPD shipments are only supported on "),Js=s(". "),Gs=n("h6",{id:"request-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Vs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ws=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Zs=n("h6",{id:"response-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Qs=s(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),Xs=s(" Multi collo shipments are only available on "),$s=s(" and "),nt=s(". "),st=n("h6",{id:"request-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),tt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),et=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),at=n("h6",{id:"response-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ot=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),pt=s(" Creating shipments to an international destination is possible depending on the chosen carrier: "),rt=n("ul",null,[n("li",null,"PostNL and Bpost shipments are available worldwide."),n("li",null,"DPD shipments are available in the EU.")],-1),lt=n("h6",{id:"request-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ct=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),it=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ut=n("h6",{id:"response-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),dt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3485394579"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),kt=s(" Digital stamp shipments are available on "),ht=s(" and to Dutch destinations only. "),_t=n("h6",{id:"request-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),mt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),yt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),gt=n("h6",{id:"response-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),bt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"39234953"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ft=s(" Only available on "),xt=s(" and "),vt=s(". "),At=n("h6",{id:"request-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Tt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Et=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),wt=n("h6",{id:"response-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ct=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),jt=s(" Only available on "),Pt=s(". "),Rt=n("h6",{id:"request-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),qt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Dt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),St=n("h6",{id:"response-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Nt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),Ot=s(" Only available on "),Ut=s(". "),Bt=n("h6",{id:"request-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),It=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Lt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ht=n("h6",{id:"response-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Mt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),Ft=s(" Only available on "),Yt=s(" and "),zt=s(". "),Kt=n("h6",{id:"request-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Jt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Gt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Vt=n("h6",{id:"response-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Wt=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),Zt=n("h6",{id:"request-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Qt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Xt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),$t=n("h6",{id:"response-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ne=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),se=s(" The following example creates a PostNL return shipment. On "),te=s(" return shipments are only available with "),ee=s(". "),ae=n("h6",{id:"request-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),oe=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),pe=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),re=n("h6",{id:"response-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),le=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ce=s(" The following example creates a PostNL return shipment. On "),ie=s(" return shipments are only available with "),ue=s(". "),de=n("h6",{id:"request-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ke=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),he=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),_e=n("h6",{id:"response-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),me=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),ye=n("h3",{id:"_6-c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C Delete Shipment")],-1),ge=s("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),be=s("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),fe=n("h4",{id:"_6-c-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.1 Overview")],-1),xe=s("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),ve=s(" can be deleted. This method returns "),Ae=s(" if successful. If the shipment doesn't exist a "),Te=s(" is returned."),Ee=n("h4",{id:"_6-c-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.2 Reference")],-1),we=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),Ce=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"DELETE")],-1),je=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Pe=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Re=n("tr",null,[n("td",null,"Content-type: application/json;charset=utf-8")],-1),qe=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),De=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),Se=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Ne=n("td",null,[n("strong",null,"Response")],-1),Oe=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"None.")],-1),Ue=n("td",null,[n("strong",null,"Error response")],-1),Be=s("."),Ie=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Le=n("h4",{id:"_6-c-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.3 Parameters")],-1),He=n("strong",null,"id",-1),Me=n("br",null,null,-1),Fe=s(" Data type: "),Ye=s("integer"),ze=n("br",null,null,-1),Ke=s(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),Je=n("h4",{id:"_6-c-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.4 Examples")],-1),Ge=n("h6",{id:"request-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ve=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),We=n("h6",{id:"response-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ze=n("h3",{id:"_6-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D Generate unrelated return shipment URL")],-1),Qe=n("h4",{id:"_6-d-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.1 Overview")],-1),Xe=s("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),$e=s(" Not Found is returned."),na=n("h4",{id:"_6-d-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.2 Reference")],-1),sa=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/return_shipments")],-1),ta=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),ea=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),aa=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),oa=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),pa=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),ra=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),la=n("td",null,[n("strong",null,"Response")],-1),ca=s(" Content-Type: application/json"),ia=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"DownloadUrl object.")],-1),ua=n("td",{rowspan:"2"},[n("strong",null,"Error response")],-1),da=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"None.")],-1),ka=n("h4",{id:"_6-d-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.3 Examples")],-1),ha=n("h6",{id:"request-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),_a=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),ma=n("h6",{id:"response-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ya=s(" ``` Content-Type: application/json ``` "),ga=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"download_url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"link"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ba=n("h3",{id:"_6-e",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E Get Shipment")],-1),fa=n("h4",{id:"_6-e-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.1 Overview")],-1),xa=n("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),va=s("Upon success either a JSON "),Aa=s("array"),Ta=s(" of "),Ea=s("Shipment"),wa=s(" objects or a CSV file is returned."),Ca=n("h4",{id:"_6-e-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.2 Reference")],-1),ja=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),Pa=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Ra=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),qa=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Da=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Sa=n("td",{rowspan:"10"},[n("strong",null,"Query parameters")],-1),Na=s("q = "),Oa=s("string"),Ua=n("tr",null,[n("td",null,"reference_identifier = [reference_identifier]")],-1),Ba=s("dropoff_today = "),Ia=s("boolean"),La=s("status = "),Ha=s("shipment_status"),Ma=s("from = "),Fa=s("timestamp"),Ya=s("to = "),za=s("timestamp"),Ka=s("page = "),Ja=s("integer"),Ga=s("size = "),Va=s("integer"),Wa=s("sort = "),Za=s("string"),Qa=s("order = "),Xa=s("sort_order"),$a=n("tr",null,[n("td",null,[n("strong",null,"Optional request headers")]),n("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),no=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),so=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),to=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),eo=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of Shipment objects (For JSON)")],-1),ao=n("td",null,[n("strong",null,"Error response")],-1),oo=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),po=n("h4",{id:"_6-e-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.3 Parameters")],-1),ro=n("strong",null,"id",-1),lo=n("br",null,null,-1),co=s(" Data type: "),io=s("integer"),uo=n("br",null,null,-1),ko=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),ho=n("strong",null,"reference_identifier",-1),_o=n("br",null,null,-1),mo=s(" Data type: "),yo=s("string"),go=n("br",null,null,-1),bo=s(" This is an optional arbitrary identifier to identify the shipment."),fo=n("strong",null,"dropoff_today",-1),xo=n("br",null,null,-1),vo=s(" Data type: "),Ao=s("boolean"),To=n("br",null,null,-1),Eo=s(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),wo=n("strong",null,"q",-1),Co=n("br",null,null,-1),jo=s(" Data type: "),Po=s("string"),Ro=n("br",null,null,-1),qo=s(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),Do=n("strong",null,"status",-1),So=n("br",null,null,-1),No=s(" Data type: "),Oo=s("shipment_status"),Uo=n("br",null,null,-1),Bo=s(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Io=n("strong",null,"from",-1),Lo=n("br",null,null,-1),Ho=s(" Data type: "),Mo=s("date"),Fo=n("br",null,null,-1),Yo=s(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),zo=n("strong",null,"to",-1),Ko=n("br",null,null,-1),Jo=s(" Data type: "),Go=s("date"),Vo=n("br",null,null,-1),Wo=s(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),Zo=n("strong",null,"page",-1),Qo=n("br",null,null,-1),Xo=s(" Data type: "),$o=s("integer"),np=n("br",null,null,-1),sp=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),tp=n("strong",null,"size",-1),ep=n("br",null,null,-1),ap=s(" Data type: "),op=s("integer"),pp=n("br",null,null,-1),rp=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),lp=n("strong",null,"sort",-1),cp=n("br",null,null,-1),ip=s(" Data type: "),up=s("string"),dp=n("br",null,null,-1),kp=s(" Shipment object field to sort on. See "),hp=s("Shipment"),_p=s(" object"),mp=n("strong",null,"order",-1),yp=n("br",null,null,-1),gp=s(" Data type: "),bp=s("sort_order"),fp=n("br",null,null,-1),xp=s(" Sort order for sort filter. Defaults to ASC."),vp=n("h4",{id:"_6-e-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.4 Examples")],-1),Ap=n("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),Tp=n("h6",{id:"request-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ep=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),wp=n("h6",{id:"response-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Cp=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),jp=n("h3",{id:"_6-f",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F Get Shipment label")],-1),Pp=n("h4",{id:"_6-f-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.1 Overview")],-1),Rp=s("Get shipment label. You can specify label format and starting position of labels on the first page with the "),qp=n("strong",null,"format",-1),Dp=s(" and "),Sp=n("strong",null,"position",-1),Np=s(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Op=n("strong",null,"Post-payment",-1),Up=s(" payment methods can fetch multiple labels in one call. For accounts with "),Bp=n("strong",null,"Pre-payment",-1),Ip=s(" payment method an "),Lp=n("code",null,"<Http code=402 /> Payment Required",-1),Hp=s(" with a "),Mp=s(" PaymentInstructions"),Fp=s(" object is returned if the label has not been paid for yet."),Yp=n("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),zp=s("Upon error "),Kp=s(" with a response body containing an Error is returned."),Jp=s("If you want to retrieve more than 25 labels in one response, you can use "),Gp=n("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),Vp=s(". You will receive a URL to a label, but the label is not immediately available and will return an "),Wp=s(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),Zp=s("label_created webhooks"),Qp=s("."),Xp=n("h4",{id:"_6-f-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.2 Reference")],-1),$p=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),nr=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),sr=n("tr",null,[n("td",{rowspan:"5"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),tr=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),er=n("tr",null,[n("td",null,[n("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),ar=s("Accept: application/json;charset=utf8 (For "),or=s("ShipmentLabelDownloadLink"),pr=s(") For processing less than 25 labels."),rr=s("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),lr=s("ShipmentLabelDownloadLink"),cr=s(") For processing multiple labels. Recommended if you request more than 25 labels."),ir=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = Shipment.id")],-1),ur=n("td",{rowspan:"2"},[n("strong",null,"Query parameters")],-1),dr=s("format = "),kr=s("paper_size"),hr=s("positions = "),_r=s("label_position"),mr=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),yr=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),gr=s(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),br=s(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),fr=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Response body")]),n("td",null,"Shipment label PDF")],-1),xr=s("ShipmentLabelDownloadLink"),vr=n("tr",null,[n("td",null,"PaymentInstructions")],-1),Ar=n("td",null,[n("strong",null,"Error response")],-1),Tr=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Error response body")])]),n("td",null,[n("p",null,"Content-Type: application/json (When payment is required)")])],-1),Er=n("h4",{id:"_6-f-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.3 Parameters")],-1),wr=n("strong",null,"id",-1),Cr=n("br",null,null,-1),jr=s(" Data type: "),Pr=s("integer"),Rr=n("br",null,null,-1),qr=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Dr=n("strong",null,"format",-1),Sr=n("br",null,null,-1),Nr=s(" Data type: "),Or=s("paper_size"),Ur=n("br",null,null,-1),Br=s(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Ir=n("strong",null,"positions",-1),Lr=n("br",null,null,-1),Hr=s(" Data type: "),Mr=s("label_position"),Fr=n("br",null,null,-1),Yr=s(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),zr=n("h4",{id:"_6-f-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.4 Examples")],-1),Kr=n("h6",{id:"request-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Jr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Gr=n("h6",{id:"response-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Vr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),Wr=n("h6",{id:"request-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Zr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),Qr=n("h6",{id:"response-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Xr=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),$r=n("h6",{id:"request-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),nl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),sl=n("h6",{id:"response-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),tl=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),el=n("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),al=n("h6",{id:"request-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ol=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),pl=n("h6",{id:"response-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),rl=s(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),ll=n("h3",{id:"_6-g",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G Track Shipment")],-1),cl=n("h4",{id:"_6-g-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.1 Overview")],-1),il=s("Get detailed Track & Trace information for a shipment. Upon success "),ul=s(" is returned with an "),dl=s("array"),kl=s(" of "),hl=s("TrackTrace"),_l=s(" objects."),ml=n("h4",{id:"_6-g-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.2 Limitations")],-1),yl=s("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),gl=s("rate limit"),bl=s(" ."),fl=n("h4",{id:"_6-g-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.3 Reference")],-1),xl=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),vl=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Al=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required")]),n("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),Tl=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),El=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id= [Shipment].id")],-1),wl=n("td",{rowspan:"5"},[n("strong",null,"Query parameters")],-1),Cl=s("page= "),jl=s("integer"),Pl=s("size= "),Rl=s("integer"),ql=s("sort= "),Dl=s("string"),Sl=s("order= "),Nl=s("sort_order"),Ol=n("tr",null,[n("td",null,"extra_info= [extra_info]")],-1),Ul=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Bl=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Il=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8")],-1),Ll=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of TrackTrace objects.")],-1),Hl=n("td",null,[n("strong",null,"Error response")],-1),Ml=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Fl=n("h4",{id:"_6-g-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.4 Parameters")],-1),Yl=n("strong",null,"id",-1),zl=n("br",null,null,-1),Kl=s(" Data type: "),Jl=s("integer"),Gl=n("br",null,null,-1),Vl=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Wl=n("strong",null,"page",-1),Zl=n("br",null,null,-1),Ql=s(" Data type: "),Xl=s("integer"),$l=n("br",null,null,-1),nc=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),sc=n("strong",null,"size",-1),tc=n("br",null,null,-1),ec=s(" Data type: "),ac=s("integer"),oc=n("br",null,null,-1),pc=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),rc=n("strong",null,"sort",-1),lc=n("br",null,null,-1),cc=s(" Data type: "),ic=s("string"),uc=n("br",null,null,-1),dc=s(" TrackTrace object field to sort on. See "),kc=s("TrackTrace"),hc=n("strong",null,"order",-1),_c=n("br",null,null,-1),mc=s(" Data type: "),yc=s("sort_order"),gc=n("br",null,null,-1),bc=s(" Sort order for sort filter. Defaults to ASC."),fc=n("strong",null,"extra_info",-1),xc=n("br",null,null,-1),vc=s(" Data type: "),Ac=s("string"),Tc=n("br",null,null,-1),Ec=s(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),wc=n("p",null,"extra_info=delivery_moment",-1),Cc=n("h4",{id:"_6-g-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.5 Examples")],-1),jc=n("h6",{id:"request-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Pc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Rc=n("h6",{id:"response-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),qc=s(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),Dc=u('<h3 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true" tabindex="-1">#</a> 6.H Multi collo shipments</h3><h4 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true" tabindex="-1">#</a> 6.H.1 Overview</h4><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h4 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true" tabindex="-1">#</a> 6.H.2 Create</h4>',4),Sc=s("This section extends the "),Nc=s("base functionality"),Oc=s("."),Uc=s("Creating a multi collo shipment basically means using one extra property "),Bc=n("code",null,"secondary_shipments",-1),Ic=s(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Lc=s(" and can only be used for shipments to NL en BE."),Hc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h5 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Remove secondary shipment</h5><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),Mc=s("Delete secondary shipment. Make use of the "),Fc=s("delete endpoint"),Yc=s(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),zc=s("Omit the secondary shipment in an "),Kc=s("update"),Jc=s(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),Gc=n("li",null,[n("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),Vc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true" tabindex="-1">#</a> 6.H.4 Delete</h4>`,2),Wc=s("This section extends the "),Zc=s("base functionality"),Qc=s(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),Xc=n("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),$c=n("h4",{id:"_6-h-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.H.5 Examples")],-1),ni=n("h6",{id:"request-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),si=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ti=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ei=n("h6",{id:"response-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ai=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),oi=n("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),pi=n("h6",{id:"request-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ri=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),li=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ci=n("h6",{id:"response-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ii=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),ui=n("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),di=n("h6",{id:"request-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ki=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),hi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),_i=n("h6",{id:"response-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),mi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),yi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),gi=n("h6",{id:"request-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),fi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),xi=n("h6",{id:"response-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),vi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Ai=n("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),Ti=n("h6",{id:"request-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ei=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])],-1),wi=n("h6",{id:"response-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ci=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),ji=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),Pi=n("h6",{id:"request-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ri=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),qi=n("h6",{id:"response-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Di=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Si(Ni,Oi){const d=i("AutoLink"),l=i("ApiLink"),p=i("DataType"),c=i("Message"),r=i("DetailsExpand"),a=i("Http"),o=i("RouterLink");return h(),_("div",null,[y,g,n("p",null,[t(d,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:e(()=>[b]),_:1})]),f,x,n("p",null,[v,t(l,{to:"7_C"},{default:e(()=>[A]),_:1}),T]),E,w,C,n("p",null,[j,t(p,{type:"platform",id:"1"}),P,t(p,{type:"platform",id:"2"}),R]),t(c,{title:"",type:"note"},{default:e(()=>[q]),_:1}),D,n("p",null,[S,t(p,{type:"platform",id:"1"}),N]),O,n("p",null,[U,t(p,{type:"platform",id:"1"}),B,t(l,{to:"7_N"},{default:e(()=>[I]),_:1}),L]),n("p",null,[n("strong",null,[H,t(p,{type:"shipment-status",id:"2"}),M,t(p,{type:"shipment-status",id:"3"}),F])]),Y,n("p",null,[z,t(p,{type:"package-type",id:"1"}),K]),J,n("p",null,[G,t(p,{type:"platform",id:"1"}),V,t(p,{type:"platform",id:"2"}),W]),Z,n("p",null,[Q,t(l,{to:"7_C"},{default:e(()=>[X]),_:1}),$,t(p,{type:"package-type",id:"1"}),nn]),sn,n("p",null,[tn,t(p,{type:"package-type",id:"1"}),en]),an,n("p",null,[on,t(p,{type:"platform",id:"1"}),pn,t(p,{type:"platform",id:"2"}),rn]),ln,n("p",null,[cn,t(p,{type:"platform",id:"3"}),un]),dn,t(r,{tag:"null",title:"Pickup"},{default:e(()=>[kn,hn,n("p",null,[_n,t(p,{type:"package-type",id:"1"}),mn,t(p,{type:"delivery-type",id:"4"}),yn])]),_:1}),t(r,{tag:"null",title:"Evening"},{default:e(()=>[gn,bn,n("p",null,[fn,t(p,{type:"package-type",id:"1"}),xn,t(p,{type:"delivery-type",id:"3"}),vn])]),_:1}),t(r,{tag:"null",title:"NL insured"},{default:e(()=>[An,Tn,n("p",null,[En,t(p,{type:"package-type",id:"1"}),wn,Cn,jn])]),_:1}),t(r,{tag:"null",title:"EU and Global insured"},{default:e(()=>[Pn,Rn,qn]),_:1}),Dn,Sn,Nn,n("p",null,[On,t(l,{to:"7_G"},{default:e(()=>[Un]),_:1}),Bn,t(l,{to:"7_G"},{default:e(()=>[In]),_:1}),Ln]),n("p",null,[Hn,t(a,{code:"204"}),Mn,t(a,{code:"4xx"}),Fn]),Yn,n("table",null,[n("tbody",null,[zn,Kn,Jn,Gn,Vn,Wn,Zn,Qn,Xn,$n,n("tr",null,[ns,n("td",null,[n("p",null,[ss,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[ts]),_:1}),es])])]),as,n("tr",null,[os,n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[ps]),_:1}),rs])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[ls]),_:1}),cs])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[is]),_:1}),us])])]),n("tr",null,[ds,n("td",null,[t(a,{code:"200"}),ks])]),hs,n("tr",null,[_s,n("td",null,[t(a,{code:"4xx"})])]),ms])]),ys,gs,n("p",null,[bs,fs,xs,vs,As,t(p,{type:"shipment-status",id:"1"}),Ts,Es,ws,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Cs]),_:1}),js]),Ps,Rs,qs,t(r,{tag:"h4",title:"Create domestic PostNL shipments"},{default:e(()=>[Ds,Ss,Ns,Os,Us,t(a,{code:"200"}),Bs]),_:1}),t(r,{tag:"h4",title:"Create domestic bpost shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Is,t(p,{type:"platform",name:"belgie"}),Ls]),_:1}),Hs,Ms,Fs,Ys,t(a,{code:"200"}),zs]),_:1}),t(r,{tag:"h4",title:"Create domestic DPD shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ks,t(p,{type:"platform",name:"belgie"}),Js]),_:1}),Gs,Vs,Ws,Zs,t(a,{code:"200"}),Qs]),_:1}),t(r,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Xs,t(p,{type:"platform",name:"myparcel"}),$s,t(p,{type:"platform",name:"flespakket"}),nt]),_:1}),st,tt,et,at,t(a,{code:"200"}),ot]),_:1}),t(r,{tag:"h4",title:"Create International shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[pt,rt]),_:1}),lt,ct,it,ut,t(a,{code:"200"}),dt]),_:1}),t(r,{tag:"h4",title:"Create digital stamp shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[kt,t(p,{type:"platform",name:"myparcel"}),ht]),_:1}),_t,mt,yt,gt,t(a,{code:"200"}),bt]),_:1}),t(r,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ft,t(p,{type:"platform",name:"myparcel"}),xt,t(p,{type:"platform",name:"flespakket"}),vt]),_:1}),At,Tt,Et,wt,t(a,{code:"200"}),Ct]),_:1}),t(r,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[jt,t(p,{type:"platform",name:"belgie"}),Pt]),_:1}),Rt,qt,Dt,St,t(a,{code:"200"}),Nt]),_:1}),t(r,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ot,t(p,{type:"platform",name:"belgie"}),Ut]),_:1}),Bt,It,Lt,Ht,t(a,{code:"200"}),Mt]),_:1}),t(r,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ft,t(p,{type:"platform",name:"myparcel"}),Yt,t(p,{type:"platform",name:"flespakket"}),zt]),_:1}),Kt,Jt,Gt,Vt,t(a,{code:"200"}),Wt]),_:1}),t(r,{tag:"h4",title:"Create shipment with BE pickup location"},{default:e(()=>[Zt,Qt,Xt,$t,t(a,{code:"200"}),ne]),_:1}),t(r,{tag:"h4",title:"Create related return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[se,t(p,{type:"platform",name:"belgie"}),te,t(p,{type:"carrier",name:"bpost"}),ee]),_:1}),ae,oe,pe,re,t(a,{code:"200"}),le]),_:1}),t(r,{tag:"h4",title:"Create unrelated return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ce,t(p,{type:"platform",name:"belgie"}),ie,t(p,{type:"carrier",name:"bpost"}),ue]),_:1}),de,ke,he,_e,t(a,{code:"200"}),me]),_:1}),ye,t(c,{title:"",type:"note"},{default:e(()=>[n("p",null,[ge,t(p,{type:"shipment-status",id:"1"}),be])]),_:1}),fe,n("p",null,[xe,t(p,{type:"shipment-status",id:"1"}),ve,t(a,{code:"204"}),Ae,t(a,{code:"422"}),Te]),Ee,n("table",null,[n("tbody",null,[we,Ce,je,Pe,Re,qe,De,Se,n("tr",null,[Ne,n("td",null,[t(a,{code:"204"})])]),Oe,n("tr",null,[Ue,n("td",null,[t(a,{code:"4xx"}),Be])]),Ie])]),Le,n("p",null,[He,Me,Fe,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Ye]),_:1}),ze,Ke]),Je,t(r,{tag:"h4",title:"Remove a shipment with id 1234."},{default:e(()=>[Ge,Ve,We,t(a,{code:"204"})]),_:1}),Ze,Qe,n("p",null,[Xe,t(a,{code:"404"}),$e]),na,n("table",null,[n("tbody",null,[sa,ta,ea,aa,oa,pa,ra,n("tr",null,[la,n("td",null,[t(a,{code:"200"}),ca])]),ia,n("tr",null,[ua,n("td",null,[t(a,{code:"4xx"})])]),n("tr",null,[n("td",null,[t(a,{code:"5xx"})])]),da])]),ka,t(r,{tag:"h4",title:"Generate unrelated return shipment"},{default:e(()=>[ha,_a,ma,t(a,{code:"200"}),ya,ga]),_:1}),ba,fa,xa,n("p",null,[va,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[Aa]),_:1}),Ta,t(l,{to:"7_A"},{default:e(()=>[Ea]),_:1}),wa]),Ca,n("table",null,[n("tbody",null,[ja,Pa,Ra,qa,Da,n("tr",null,[Sa,n("td",null,[Na,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Oa]),_:1})])]),Ua,n("tr",null,[n("td",null,[Ba,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[Ia]),_:1})])]),n("tr",null,[n("td",null,[La,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Ha]),_:1})])]),n("tr",null,[n("td",null,[Ma,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[Fa]),_:1})])]),n("tr",null,[n("td",null,[Ya,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[za]),_:1})])]),n("tr",null,[n("td",null,[Ka,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Ja]),_:1})])]),n("tr",null,[n("td",null,[Ga,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Va]),_:1})])]),n("tr",null,[n("td",null,[Wa,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Za]),_:1})])]),n("tr",null,[n("td",null,[Qa,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[Xa]),_:1})])]),$a,no,n("tr",null,[so,n("td",null,[t(a,{code:"200"})])]),to,eo,n("tr",null,[ao,n("td",null,[t(a,{code:"4xx"})])]),oo])]),po,n("p",null,[ro,lo,co,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[io]),_:1}),uo,ko]),n("p",null,[ho,_o,mo,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[yo]),_:1}),go,bo]),n("p",null,[fo,xo,vo,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[Ao]),_:1}),To,Eo]),n("p",null,[wo,Co,jo,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Po]),_:1}),Ro,qo]),n("p",null,[Do,So,No,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Oo]),_:1}),Uo,Bo]),n("p",null,[Io,Lo,Ho,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[Mo]),_:1}),Fo,Yo]),n("p",null,[zo,Ko,Jo,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[Go]),_:1}),Vo,Wo]),n("p",null,[Zo,Qo,Xo,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[$o]),_:1}),np,sp]),n("p",null,[tp,ep,ap,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[op]),_:1}),pp,rp]),n("p",null,[lp,cp,ip,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[up]),_:1}),dp,kp,t(l,{to:"7_A"},{default:e(()=>[hp]),_:1}),_p]),n("p",null,[mp,yp,gp,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[bp]),_:1}),fp,xp]),vp,t(r,{tag:"h4",title:"Search for shipments"},{default:e(()=>[Ap,Tp,Ep,wp,t(a,{code:"200"}),Cp]),_:1}),jp,Pp,n("p",null,[Rp,qp,Dp,Sp,Np,Op,Up,Bp,Ip,Lp,Hp,t(l,{to:"7_P"},{default:e(()=>[Mp]),_:1}),Fp]),Yp,n("p",null,[zp,t(a,{code:"4xx"}),Kp]),n("p",null,[Jp,Gp,Vp,t(a,{code:"404"}),Wp,t(l,{to:"11_C"},{default:e(()=>[Zp]),_:1}),Qp]),Xp,n("table",null,[n("tbody",null,[$p,nr,sr,tr,er,n("tr",null,[n("td",null,[n("p",null,[ar,t(l,{to:"7_R"},{default:e(()=>[or]),_:1}),pr])])]),n("tr",null,[n("td",null,[n("p",null,[rr,t(l,{to:"7_R"},{default:e(()=>[lr]),_:1}),cr])])]),ir,n("tr",null,[ur,n("td",null,[dr,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[kr]),_:1})])]),n("tr",null,[n("td",null,[hr,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[_r]),_:1})])]),mr,n("tr",null,[yr,n("td",null,[t(a,{code:"200"}),gr])]),n("tr",null,[n("td",null,[t(a,{code:"200"}),br])]),fr,n("tr",null,[n("td",null,[t(l,{to:"7_R"},{default:e(()=>[xr]),_:1})])]),vr,n("tr",null,[Ar,n("td",null,[t(a,{code:"402"})])]),Tr])]),Er,n("p",null,[wr,Cr,jr,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Pr]),_:1}),Rr,qr]),n("p",null,[Dr,Sr,Nr,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[Or]),_:1}),Ur,Br]),n("p",null,[Ir,Lr,Hr,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[Mr]),_:1}),Fr,Yr]),zr,t(r,{tag:"h4",title:"Get Shipment label"},{default:e(()=>[Kr,Jr,Gr,t(a,{code:"200"}),Vr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link"},{default:e(()=>[Wr,Zr,Qr,t(a,{code:"200"}),Xr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:e(()=>[$r,nl,sl,t(a,{code:"200"}),tl]),_:1}),t(r,{tag:"h4",title:"Get shipment label with different format and position"},{default:e(()=>[el,al,ol,pl,t(a,{code:"200"}),rl]),_:1}),ll,cl,n("p",null,[il,t(a,{code:"200"}),ul,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[dl]),_:1}),kl,t(l,{to:"7_L"},{default:e(()=>[hl]),_:1}),_l]),ml,n("p",null,[yl,t(l,{to:"1_D"},{default:e(()=>[gl]),_:1}),bl]),fl,n("table",null,[n("tbody",null,[xl,vl,Al,Tl,El,n("tr",null,[wl,n("td",null,[Cl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[jl]),_:1})])]),n("tr",null,[n("td",null,[Pl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Rl]),_:1})])]),n("tr",null,[n("td",null,[ql,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Dl]),_:1})])]),n("tr",null,[n("td",null,[Sl,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[Nl]),_:1})])]),Ol,Ul,n("tr",null,[Bl,n("td",null,[t(a,{code:"200"})])]),Il,Ll,n("tr",null,[Hl,n("td",null,[t(a,{code:"4xx"})])]),Ml])]),Fl,n("p",null,[Yl,zl,Kl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Jl]),_:1}),Gl,Vl]),n("p",null,[Wl,Zl,Ql,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Xl]),_:1}),$l,nc]),n("p",null,[sc,tc,ec,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[ac]),_:1}),oc,pc]),n("p",null,[rc,lc,cc,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[ic]),_:1}),uc,dc,t(l,{to:"7_L"},{default:e(()=>[kc]),_:1})]),n("p",null,[hc,_c,mc,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[yc]),_:1}),gc,bc]),n("p",null,[fc,xc,vc,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Ac]),_:1}),Tc,Ec]),wc,Cc,t(r,{tag:"null"},{default:e(()=>[jc,Pc,Rc,t(a,{code:"200"}),qc]),_:1}),Dc,n("p",null,[Sc,t(l,{to:"6_B"},{default:e(()=>[Nc]),_:1}),Oc]),n("p",null,[Uc,Bc,Ic,t(p,{type:"package-type",id:"1"}),Lc]),Hc,n("ol",null,[n("li",null,[n("p",null,[Mc,t(l,{to:"6_C"},{default:e(()=>[Fc]),_:1}),Yc])]),n("li",null,[n("p",null,[zc,t(l,{to:"6_H_3"},{default:e(()=>[Kc]),_:1}),Jc])]),Gc]),Vc,n("p",null,[Wc,t(l,{to:"6_C"},{default:e(()=>[Zc]),_:1}),Qc]),Xc,$c,t(r,{tag:"h4",title:"Create national multi collo shipment"},{default:e(()=>[ni,si,ti,ei,t(a,{code:"200"}),ai]),_:1}),t(r,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:e(()=>[oi,pi,ri,li,ci,ii]),_:1}),t(r,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:e(()=>[ui,di,ki,hi,_i,mi]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:e(()=>[yi,gi,bi,fi,xi,vi]),_:1}),t(r,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:e(()=>[Ai,Ti,Ei,wi,Ci]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:e(()=>[ji,Pi,Ri,qi,Di]),_:1})])}var Ii=k(m,[["render",Si],["__file","06.shipments.html.vue"]]);export{Ii as default};
