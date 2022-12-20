import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{o as h,c as _,b as n,a as t,w as e,d as s,e as u,r as i}from"./app.5cad2966.js";const m={},y=n("h2",{id:"_6-shipments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6. Shipments")],-1),g=n("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),b=n("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),f=n("h3",{id:"_6-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A Shipment option combinations")],-1),x=n("h4",{id:"_6-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.1 Package types")],-1),v=s("There are four different packages types available and determine the name of shipment. The value is sent with the "),A=s("ShipmentOptions"),T=s(" .package_type field."),E=n("h5",{id:"_1-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 1. Package")],-1),w=n("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),C=n("h5",{id:"_2-mailbox-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 2. Mailbox package")],-1),j=s("This package type is only available on "),P=s(" and "),R=s(" for NL shipments that fit into a mailbox. It does not support additional options."),q=n("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),D=n("h5",{id:"_3-letter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true",tabindex:"-1"},"#"),s(" 3. Letter")],-1),S=s("This package type is available on "),N=s(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),O=n("h5",{id:"_4-digital-stamp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true",tabindex:"-1"},"#"),s(" 4. Digital stamp")],-1),U=s("This package type is only available on "),B=s(" for NL shipments and does not support any additional options. Its price is calculated using the package "),I=s("weight"),L=s(" ."),H=s("Note: This shipment will appear on your invoice on "),M=s(" as opposed to all other package types, which won't appear on your invoice until shipment "),F=s("."),Y=n("h4",{id:"_6-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.2 Delivery types")],-1),z=s("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),G=s(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),K=u('<h5 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true" tabindex="-1">#</a> 1. Morning</h5><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h5 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true" tabindex="-1">#</a> 2. Standard</h5><p>This is the standard delivery type.</p><h5 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true" tabindex="-1">#</a> 3. Evening</h5>',5),J=s("This option is only available on "),V=s(" and "),W=s(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),Z=u('<h5 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true" tabindex="-1">#</a> 4. Pickup</h5><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h5 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true" tabindex="-1">#</a> 5. Pickup express</h5><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h4 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true" tabindex="-1">#</a> 6.A.3 Options</h4>',5),Q=s("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),X=s("ShipmentOptions"),$=s(" object. These options are only available for "),nn=s("."),sn=u('<h5 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true" tabindex="-1">#</a> only_recipient</h5><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h5 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true" tabindex="-1">#</a> signature</h5><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h5 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true" tabindex="-1">#</a> return</h5><p>Return the package to the sender when the recipient is not home.</p><h5 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true" tabindex="-1">#</a> large_format</h5><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h5 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true" tabindex="-1">#</a> insurance</h5>',9),tn=s("This option allows a shipment to be insured up to certain amount. Only "),en=s(" shipments can be insured. NL shipments can be insured for 500,- euros. EU shipments "),an=n("strong",null,"must",-1),on=s(" be insured for 500,- euros. Global shipments "),pn=n("strong",null,"must",-1),rn=s(" be insured for 200,- euros. The following shipment options are "),ln=n("strong",null,"mandatory",-1),cn=s(" when insuring an NL shipment: only_recipient and signature."),un=n("h5",{id:"age-check",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#age-check","aria-hidden":"true",tabindex:"-1"},"#"),s(" age_check")],-1),dn=s("Only available on "),kn=s(" and "),hn=s(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),_n=n("h4",{id:"_6-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.4 Examples")],-1),mn=n("p",null,"We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.",-1),yn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),gn=s("Let's go through this example. This package will be picked up by the customer, so it needs to "),bn=s(" with "),fn=s(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),xn=n("p",null,"We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.",-1),vn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),An=s("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),Tn=s(" with "),En=s(". All evening and morning packages need to have only_recipient set."),wn=n("p",null,"We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.",-1),Cn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),jn=s("Only "),Pn=s(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),Rn=n("code",null,"insurance.amount",-1),qn=s(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),Dn=n("p",null,"We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it's dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.",-1),Sn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Nn=n("p",null,[s("This package is an EU package so the name must be set to 1. All EU and Global shipments "),n("strong",null,"must"),s(" be insured up to 500 (EU) / 200 (Global) euros, so we set the insured amount to 50000 "),n("strong",null,"cents."),s(" EU and Global shipments do not have the only_recipient, signature and return options so these cannot be set for this shipment.")],-1),On=n("h3",{id:"_6-b",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B Add Shipment")],-1),Un=n("h4",{id:"_6-b-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.1 Overview")],-1),Bn=n("p",null,"Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named ' column_mapping' in the multipart/form-data.",-1),In=s("For JSON requests a "),Ln=s("ShipmentIds"),Hn=s(" object is returned. The ids in the "),Mn=s("ShipmentIds"),Fn=s(" object will be in the same order they were sent."),Yn=s("For CSV requests "),zn=s(" with empty response body is returned. If a request fails then an "),Gn=s(" is returned."),Kn=n("h4",{id:"_6-b-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.2 Reference")],-1),Jn=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments")],-1),Vn=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),Wn=n("tr",null,[n("td",{rowspan:"6"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Zn=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Qn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Xn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),$n=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),ns=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),ss=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Optional request headers")])]),n("td",null,[n("p",null,[s("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),n("code",null,"shipment_label_created"),s(" to listen to it.)")])])],-1),ts=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),es=n("td",{rowspan:"2"},[n("p",null,[n("strong",null,"Query parameters")])],-1),as=s("format = "),os=s("paper_size"),ps=s(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),rs=n("tr",null,[n("td",null,[n("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),ls=n("td",{rowspan:"3"},[n("p",null,[n("strong",null,"Request body")])],-1),cs=s("array"),is=s(" of Shipment objects. (For Shipments JSON request)"),us=s("array"),ds=s(" of ReturnShipment objects. (For ReturnShipments JSON request)"),ks=s("array"),hs=s(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),_s=n("td",null,[n("strong",null,"Response")],-1),ms=s(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),ys=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"ShipmentIds")],-1),gs=n("td",null,[n("strong",null,"Error response")],-1),bs=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),fs=n("h4",{id:"_6-b-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.3 Request Headers")],-1),xs=n("p",null,[n("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create standard shipments.")],-1),vs=n("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),As=n("br",null,null,-1),Ts=s(" Specify this Content-Type when you want to create related return shipments."),Es=n("br",null,null,-1),ws=s(" Parent shipment cannot be a concept ("),Cs=s(") ."),js=n("br",null,null,-1),Ps=s(" When a label is generated, the status of the shipment is converted to registered ( "),Rs=s("shipment_status"),qs=s(" 2)."),Ds=n("p",null,[n("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),Ss=n("h4",{id:"_6-b-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.4 Examples")],-1),Ns=n("p",null,"In these examples we are going to create shipments.",-1),Os=n("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),Us=n("h6",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Bs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Is=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ls=n("h6",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Hs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ms=s(" Bpost shipments are only supported on "),Fs=s(". "),Ys=n("h6",{id:"request-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),zs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Gs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ks=n("h6",{id:"response-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Js=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"49566653"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Vs=s(" DPD shipments are only supported on "),Ws=s(". "),Zs=n("h6",{id:"request-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Qs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Xs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),$s=n("h6",{id:"response-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),nt=s(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),st=s(" Multi collo shipments are only available on "),tt=s(" and "),et=s(". "),at=n("h6",{id:"request-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ot=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),pt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),rt=n("h6",{id:"response-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),lt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ct=s(" Creating shipments to an international destination is possible depending on the chosen carrier: "),it=n("ul",null,[n("li",null,"PostNL and Bpost shipments are available worldwide."),n("li",null,"DPD shipments are available in the EU.")],-1),ut=n("h6",{id:"request-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),dt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),kt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ht=n("h6",{id:"response-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),_t=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3485394579"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),mt=s(" Digital stamp shipments are available on "),yt=s(" and to Dutch destinations only. "),gt=n("h6",{id:"request-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),bt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ft=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),xt=n("h6",{id:"response-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),vt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"39234953"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),At=s(" Only available on "),Tt=s(" and "),Et=s(". "),wt=n("h6",{id:"request-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ct=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
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
`)])])],-1),Pt=n("h6",{id:"response-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Rt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),qt=s(" Only available on "),Dt=s(". "),St=n("h6",{id:"request-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Nt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ot=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ut=n("h6",{id:"response-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Bt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),It=s(" Only available on "),Lt=s(". "),Ht=n("h6",{id:"request-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Mt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ft=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Yt=n("h6",{id:"response-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),zt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),Gt=s(" Only available on "),Kt=s(" and "),Jt=s(". "),Vt=n("h6",{id:"request-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Wt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Zt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Qt=n("h6",{id:"response-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Xt=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),$t=n("h6",{id:"request-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ne=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),se=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),te=n("h6",{id:"response-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ee=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ae=s(" The following example creates a PostNL return shipment. On "),oe=s(" return shipments are only available with "),pe=s(". "),re=n("h6",{id:"request-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),le=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ce=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ie=n("h6",{id:"response-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ue=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),de=s(" The following example creates a PostNL return shipment. On "),ke=s(" return shipments are only available with "),he=s(". "),_e=n("h6",{id:"request-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),me=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ye=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ge=n("h6",{id:"response-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),be=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),fe=n("h3",{id:"_6-c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C Delete Shipment")],-1),xe=s("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),ve=s("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),Ae=n("h4",{id:"_6-c-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.1 Overview")],-1),Te=s("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),Ee=s(" can be deleted. This method returns "),we=s(" if successful. If the shipment doesn't exist a "),Ce=s(" is returned."),je=n("h4",{id:"_6-c-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.2 Reference")],-1),Pe=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),Re=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"DELETE")],-1),qe=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),De=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Se=n("tr",null,[n("td",null,"Content-type: application/json;charset=utf-8")],-1),Ne=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Oe=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),Ue=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Be=n("td",null,[n("strong",null,"Response")],-1),Ie=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"None.")],-1),Le=n("td",null,[n("strong",null,"Error response")],-1),He=s("."),Me=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Fe=n("h4",{id:"_6-c-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.3 Parameters")],-1),Ye=n("strong",null,"id",-1),ze=n("br",null,null,-1),Ge=s(" Data type: "),Ke=s("integer"),Je=n("br",null,null,-1),Ve=s(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),We=n("h4",{id:"_6-c-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.4 Examples")],-1),Ze=n("h6",{id:"request-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Qe=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Xe=n("h6",{id:"response-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),$e=n("h3",{id:"_6-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D Generate unrelated return shipment URL")],-1),na=n("h4",{id:"_6-d-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.1 Overview")],-1),sa=s("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),ta=s(" Not Found is returned."),ea=n("h4",{id:"_6-d-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.2 Reference")],-1),aa=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/return_shipments")],-1),oa=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),pa=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),ra=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),la=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ca=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),ia=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),ua=n("td",null,[n("strong",null,"Response")],-1),da=s(" Content-Type: application/json"),ka=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"DownloadUrl object.")],-1),ha=n("td",{rowspan:"2"},[n("strong",null,"Error response")],-1),_a=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"None.")],-1),ma=n("h4",{id:"_6-d-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.3 Examples")],-1),ya=n("h6",{id:"request-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ga=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),ba=n("h6",{id:"response-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),fa=s(" ``` Content-Type: application/json ``` "),xa=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"download_url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"link"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),va=n("h3",{id:"_6-e",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E Get Shipment")],-1),Aa=n("h4",{id:"_6-e-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.1 Overview")],-1),Ta=n("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),Ea=s("Upon success either a JSON "),wa=s("array"),Ca=s(" of "),ja=s("Shipment"),Pa=s(" objects or a CSV file is returned."),Ra=n("h4",{id:"_6-e-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.2 Reference")],-1),qa=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),Da=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Sa=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Na=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Oa=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Ua=n("td",{rowspan:"10"},[n("strong",null,"Query parameters")],-1),Ba=s("q = "),Ia=s("string"),La=n("tr",null,[n("td",null,"reference_identifier = [reference_identifier]")],-1),Ha=s("dropoff_today = "),Ma=s("boolean"),Fa=s("status = "),Ya=s("shipment_status"),za=s("from = "),Ga=s("timestamp"),Ka=s("to = "),Ja=s("timestamp"),Va=s("page = "),Wa=s("integer"),Za=s("size = "),Qa=s("integer"),Xa=s("sort = "),$a=s("string"),no=s("order = "),so=s("sort_order"),to=n("tr",null,[n("td",null,[n("strong",null,"Optional request headers")]),n("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),eo=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),ao=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),oo=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),po=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of Shipment objects (For JSON)")],-1),ro=n("td",null,[n("strong",null,"Error response")],-1),lo=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),co=n("h4",{id:"_6-e-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.3 Parameters")],-1),io=n("strong",null,"id",-1),uo=n("br",null,null,-1),ko=s(" Data type: "),ho=s("integer"),_o=n("br",null,null,-1),mo=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),yo=n("strong",null,"reference_identifier",-1),go=n("br",null,null,-1),bo=s(" Data type: "),fo=s("string"),xo=n("br",null,null,-1),vo=s(" This is an optional arbitrary identifier to identify the shipment."),Ao=n("strong",null,"dropoff_today",-1),To=n("br",null,null,-1),Eo=s(" Data type: "),wo=s("boolean"),Co=n("br",null,null,-1),jo=s(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),Po=n("strong",null,"q",-1),Ro=n("br",null,null,-1),qo=s(" Data type: "),Do=s("string"),So=n("br",null,null,-1),No=s(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),Oo=n("strong",null,"status",-1),Uo=n("br",null,null,-1),Bo=s(" Data type: "),Io=s("shipment_status"),Lo=n("br",null,null,-1),Ho=s(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Mo=n("strong",null,"from",-1),Fo=n("br",null,null,-1),Yo=s(" Data type: "),zo=s("date"),Go=n("br",null,null,-1),Ko=s(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),Jo=n("strong",null,"to",-1),Vo=n("br",null,null,-1),Wo=s(" Data type: "),Zo=s("date"),Qo=n("br",null,null,-1),Xo=s(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),$o=n("strong",null,"page",-1),np=n("br",null,null,-1),sp=s(" Data type: "),tp=s("integer"),ep=n("br",null,null,-1),ap=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),op=n("strong",null,"size",-1),pp=n("br",null,null,-1),rp=s(" Data type: "),lp=s("integer"),cp=n("br",null,null,-1),ip=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),up=n("strong",null,"sort",-1),dp=n("br",null,null,-1),kp=s(" Data type: "),hp=s("string"),_p=n("br",null,null,-1),mp=s(" Shipment object field to sort on. See "),yp=s("Shipment"),gp=s(" object"),bp=n("strong",null,"order",-1),fp=n("br",null,null,-1),xp=s(" Data type: "),vp=s("sort_order"),Ap=n("br",null,null,-1),Tp=s(" Sort order for sort filter. Defaults to ASC."),Ep=n("h4",{id:"_6-e-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.4 Examples")],-1),wp=n("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),Cp=n("h6",{id:"request-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),jp=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Pp=n("h6",{id:"response-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Rp=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),qp=n("h3",{id:"_6-f",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F Get Shipment label")],-1),Dp=n("h4",{id:"_6-f-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.1 Overview")],-1),Sp=s("Get shipment label. You can specify label format and starting position of labels on the first page with the "),Np=n("strong",null,"format",-1),Op=s(" and "),Up=n("strong",null,"position",-1),Bp=s(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Ip=n("strong",null,"Post-payment",-1),Lp=s(" payment methods can fetch multiple labels in one call. For accounts with "),Hp=n("strong",null,"Pre-payment",-1),Mp=s(" payment method an "),Fp=n("code",null,"<Http code=402 /> Payment Required",-1),Yp=s(" with a "),zp=s(" PaymentInstructions"),Gp=s(" object is returned if the label has not been paid for yet."),Kp=n("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),Jp=s("Upon error "),Vp=s(" with a response body containing an Error is returned."),Wp=s("If you want to retrieve more than 25 labels in one response, you can use "),Zp=n("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),Qp=s(". You will receive a URL to a label, but the label is not immediately available and will return an "),Xp=s(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),$p=s("label_created webhooks"),nr=s("."),sr=n("h4",{id:"_6-f-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.2 Reference")],-1),tr=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),er=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),ar=n("tr",null,[n("td",{rowspan:"5"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),or=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),pr=n("tr",null,[n("td",null,[n("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),rr=s("Accept: application/json;charset=utf8 (For "),lr=s("ShipmentLabelDownloadLink"),cr=s(") For processing less than 25 labels."),ir=s("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),ur=s("ShipmentLabelDownloadLink"),dr=s(") For processing multiple labels. Recommended if you request more than 25 labels."),kr=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = Shipment.id")],-1),hr=n("td",{rowspan:"2"},[n("strong",null,"Query parameters")],-1),_r=s("format = "),mr=s("paper_size"),yr=s("positions = "),gr=s("label_position"),br=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),fr=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),xr=s(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),vr=s(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),Ar=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Response body")]),n("td",null,"Shipment label PDF")],-1),Tr=s("ShipmentLabelDownloadLink"),Er=n("tr",null,[n("td",null,"PaymentInstructions")],-1),wr=n("td",null,[n("strong",null,"Error response")],-1),Cr=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Error response body")])]),n("td",null,[n("p",null,"Content-Type: application/json (When payment is required)")])],-1),jr=n("h4",{id:"_6-f-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.3 Parameters")],-1),Pr=n("strong",null,"id",-1),Rr=n("br",null,null,-1),qr=s(" Data type: "),Dr=s("integer"),Sr=n("br",null,null,-1),Nr=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Or=n("strong",null,"format",-1),Ur=n("br",null,null,-1),Br=s(" Data type: "),Ir=s("paper_size"),Lr=n("br",null,null,-1),Hr=s(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Mr=n("strong",null,"positions",-1),Fr=n("br",null,null,-1),Yr=s(" Data type: "),zr=s("label_position"),Gr=n("br",null,null,-1),Kr=s(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),Jr=n("h4",{id:"_6-f-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.4 Examples")],-1),Vr=n("h6",{id:"request-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Wr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Zr=n("h6",{id:"response-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Qr=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),Xr=n("h6",{id:"request-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),$r=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),nl=n("h6",{id:"response-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),sl=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),tl=n("h6",{id:"request-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),el=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),al=n("h6",{id:"response-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ol=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),pl=n("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),rl=n("h6",{id:"request-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ll=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),cl=n("h6",{id:"response-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),il=s(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),ul=n("h3",{id:"_6-g",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G Track Shipment")],-1),dl=n("h4",{id:"_6-g-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.1 Overview")],-1),kl=s("Get detailed Track & Trace information for a shipment. Upon success "),hl=s(" is returned with an "),_l=s("array"),ml=s(" of "),yl=s("TrackTrace"),gl=s(" objects."),bl=n("h4",{id:"_6-g-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.2 Limitations")],-1),fl=s("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),xl=s("rate limit"),vl=s(" ."),Al=n("h4",{id:"_6-g-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.3 Reference")],-1),Tl=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),El=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),wl=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required")]),n("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),Cl=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),jl=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id= [Shipment].id")],-1),Pl=n("td",{rowspan:"5"},[n("strong",null,"Query parameters")],-1),Rl=s("page= "),ql=s("integer"),Dl=s("size= "),Sl=s("integer"),Nl=s("sort= "),Ol=s("string"),Ul=s("order= "),Bl=s("sort_order"),Il=n("tr",null,[n("td",null,"extra_info= [extra_info]")],-1),Ll=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Hl=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Ml=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8")],-1),Fl=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of TrackTrace objects.")],-1),Yl=n("td",null,[n("strong",null,"Error response")],-1),zl=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Gl=n("h4",{id:"_6-g-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.4 Parameters")],-1),Kl=n("strong",null,"id",-1),Jl=n("br",null,null,-1),Vl=s(" Data type: "),Wl=s("integer"),Zl=n("br",null,null,-1),Ql=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),Xl=n("strong",null,"page",-1),$l=n("br",null,null,-1),nc=s(" Data type: "),sc=s("integer"),tc=n("br",null,null,-1),ec=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),ac=n("strong",null,"size",-1),oc=n("br",null,null,-1),pc=s(" Data type: "),rc=s("integer"),lc=n("br",null,null,-1),cc=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),ic=n("strong",null,"sort",-1),uc=n("br",null,null,-1),dc=s(" Data type: "),kc=s("string"),hc=n("br",null,null,-1),_c=s(" TrackTrace object field to sort on. See "),mc=s("TrackTrace"),yc=n("strong",null,"order",-1),gc=n("br",null,null,-1),bc=s(" Data type: "),fc=s("sort_order"),xc=n("br",null,null,-1),vc=s(" Sort order for sort filter. Defaults to ASC."),Ac=n("strong",null,"extra_info",-1),Tc=n("br",null,null,-1),Ec=s(" Data type: "),wc=s("string"),Cc=n("br",null,null,-1),jc=s(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),Pc=n("p",null,"extra_info=delivery_moment",-1),Rc=n("h4",{id:"_6-g-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.5 Examples")],-1),qc=n("h6",{id:"request-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Dc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Sc=n("h6",{id:"response-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Nc=s(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),Oc=u('<h3 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true" tabindex="-1">#</a> 6.H Multi collo shipments</h3><h4 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true" tabindex="-1">#</a> 6.H.1 Overview</h4><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h4 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true" tabindex="-1">#</a> 6.H.2 Create</h4>',4),Uc=s("This section extends the "),Bc=s("base functionality"),Ic=s("."),Lc=s("Creating a multi collo shipment basically means using one extra property "),Hc=n("code",null,"secondary_shipments",-1),Mc=s(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Fc=s(" and can only be used for shipments to NL en BE."),Yc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h5 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Remove secondary shipment</h5><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),zc=s("Delete secondary shipment. Make use of the "),Gc=s("delete endpoint"),Kc=s(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),Jc=s("Omit the secondary shipment in an "),Vc=s("update"),Wc=s(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),Zc=n("li",null,[n("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),Qc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true" tabindex="-1">#</a> 6.H.4 Delete</h4>`,2),Xc=s("This section extends the "),$c=s("base functionality"),ni=s(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),si=n("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),ti=n("h4",{id:"_6-h-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.H.5 Examples")],-1),ei=n("h6",{id:"request-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ai=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),oi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),pi=n("h6",{id:"response-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ri=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),li=n("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),ci=n("h6",{id:"request-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ii=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ui=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),di=n("h6",{id:"response-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ki=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),hi=n("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),_i=n("h6",{id:"request-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),mi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),yi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),gi=n("h6",{id:"response-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),fi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),xi=n("h6",{id:"request-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),vi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ai=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ti=n("h6",{id:"response-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ei=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),wi=n("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),Ci=n("h6",{id:"request-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ji=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])],-1),Pi=n("h6",{id:"response-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ri=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),qi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),Di=n("h6",{id:"request-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Si=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ni=n("h6",{id:"response-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Oi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Ui(Bi,Ii){const d=i("AutoLink"),l=i("ApiLink"),p=i("DataType"),c=i("Message"),r=i("DetailsExpand"),a=i("Http"),o=i("RouterLink");return h(),_("div",null,[y,g,n("p",null,[t(d,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:e(()=>[b]),_:1})]),f,x,n("p",null,[v,t(l,{to:"7_C"},{default:e(()=>[A]),_:1}),T]),E,w,C,n("p",null,[j,t(p,{type:"platform",id:"1"}),P,t(p,{type:"platform",id:"3"}),R]),t(c,{title:"",type:"note"},{default:e(()=>[q]),_:1}),D,n("p",null,[S,t(p,{type:"platform",id:"1"}),N]),O,n("p",null,[U,t(p,{type:"platform",id:"1"}),B,t(l,{to:"7_N"},{default:e(()=>[I]),_:1}),L]),n("p",null,[n("strong",null,[H,t(p,{type:"shipment-status",id:"2"}),M,t(p,{type:"shipment-status",id:"3"}),F])]),Y,n("p",null,[z,t(p,{type:"package-type",id:"1"}),G]),K,n("p",null,[J,t(p,{type:"platform",id:"1"}),V,t(p,{type:"platform",id:"3"}),W]),Z,n("p",null,[Q,t(l,{to:"7_C"},{default:e(()=>[X]),_:1}),$,t(p,{type:"package-type",id:"1"}),nn]),sn,n("p",null,[tn,t(p,{type:"package-type",id:"1"}),en,an,on,pn,rn,ln,cn]),un,n("p",null,[dn,t(p,{type:"platform",id:"1"}),kn,t(p,{type:"platform",id:"3"}),hn]),_n,t(r,{tag:"null",title:"Pickup"},{default:e(()=>[mn,yn,n("p",null,[gn,t(p,{type:"package-type",id:"1"}),bn,t(p,{type:"delivery-type",id:"4"}),fn])]),_:1}),t(r,{tag:"null",title:"Evening"},{default:e(()=>[xn,vn,n("p",null,[An,t(p,{type:"package-type",id:"1"}),Tn,t(p,{type:"delivery-type",id:"3"}),En])]),_:1}),t(r,{tag:"null",title:"NL insured"},{default:e(()=>[wn,Cn,n("p",null,[jn,t(p,{type:"package-type",id:"1"}),Pn,Rn,qn])]),_:1}),t(r,{tag:"null",title:"EU and Global insured"},{default:e(()=>[Dn,Sn,Nn]),_:1}),On,Un,Bn,n("p",null,[In,t(l,{to:"7_G"},{default:e(()=>[Ln]),_:1}),Hn,t(l,{to:"7_G"},{default:e(()=>[Mn]),_:1}),Fn]),n("p",null,[Yn,t(a,{code:"204"}),zn,t(a,{code:"4xx"}),Gn]),Kn,n("table",null,[n("tbody",null,[Jn,Vn,Wn,Zn,Qn,Xn,$n,ns,ss,ts,n("tr",null,[es,n("td",null,[n("p",null,[as,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[os]),_:1}),ps])])]),rs,n("tr",null,[ls,n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[cs]),_:1}),is])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[us]),_:1}),ds])])]),n("tr",null,[n("td",null,[n("p",null,[t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[ks]),_:1}),hs])])]),n("tr",null,[_s,n("td",null,[t(a,{code:"200"}),ms])]),ys,n("tr",null,[gs,n("td",null,[t(a,{code:"4xx"})])]),bs])]),fs,xs,n("p",null,[vs,As,Ts,Es,ws,t(p,{type:"shipment-status",id:"1"}),Cs,js,Ps,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Rs]),_:1}),qs]),Ds,Ss,Ns,t(r,{tag:"h4",title:"Create domestic PostNL shipments"},{default:e(()=>[Os,Us,Bs,Is,Ls,t(a,{code:"200"}),Hs]),_:1}),t(r,{tag:"h4",title:"Create domestic bpost shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ms,t(p,{type:"platform",name:"belgie"}),Fs]),_:1}),Ys,zs,Gs,Ks,t(a,{code:"200"}),Js]),_:1}),t(r,{tag:"h4",title:"Create domestic DPD shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Vs,t(p,{type:"platform",name:"belgie"}),Ws]),_:1}),Zs,Qs,Xs,$s,t(a,{code:"200"}),nt]),_:1}),t(r,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[st,t(p,{type:"platform",name:"myparcel"}),tt,t(p,{type:"platform",name:"flespakket"}),et]),_:1}),at,ot,pt,rt,t(a,{code:"200"}),lt]),_:1}),t(r,{tag:"h4",title:"Create International shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ct,it]),_:1}),ut,dt,kt,ht,t(a,{code:"200"}),_t]),_:1}),t(r,{tag:"h4",title:"Create digital stamp shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[mt,t(p,{type:"platform",name:"myparcel"}),yt]),_:1}),gt,bt,ft,xt,t(a,{code:"200"}),vt]),_:1}),t(r,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[At,t(p,{type:"platform",name:"myparcel"}),Tt,t(p,{type:"platform",name:"flespakket"}),Et]),_:1}),wt,Ct,jt,Pt,t(a,{code:"200"}),Rt]),_:1}),t(r,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[qt,t(p,{type:"platform",name:"belgie"}),Dt]),_:1}),St,Nt,Ot,Ut,t(a,{code:"200"}),Bt]),_:1}),t(r,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[It,t(p,{type:"platform",name:"belgie"}),Lt]),_:1}),Ht,Mt,Ft,Yt,t(a,{code:"200"}),zt]),_:1}),t(r,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Gt,t(p,{type:"platform",name:"myparcel"}),Kt,t(p,{type:"platform",name:"flespakket"}),Jt]),_:1}),Vt,Wt,Zt,Qt,t(a,{code:"200"}),Xt]),_:1}),t(r,{tag:"h4",title:"Create shipment with BE pickup location"},{default:e(()=>[$t,ne,se,te,t(a,{code:"200"}),ee]),_:1}),t(r,{tag:"h4",title:"Create related return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ae,t(p,{type:"platform",name:"belgie"}),oe,t(p,{type:"carrier",name:"bpost"}),pe]),_:1}),re,le,ce,ie,t(a,{code:"200"}),ue]),_:1}),t(r,{tag:"h4",title:"Create unrelated return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[de,t(p,{type:"platform",name:"belgie"}),ke,t(p,{type:"carrier",name:"bpost"}),he]),_:1}),_e,me,ye,ge,t(a,{code:"200"}),be]),_:1}),fe,t(c,{title:"",type:"note"},{default:e(()=>[n("p",null,[xe,t(p,{type:"shipment-status",id:"1"}),ve])]),_:1}),Ae,n("p",null,[Te,t(p,{type:"shipment-status",id:"1"}),Ee,t(a,{code:"204"}),we,t(a,{code:"422"}),Ce]),je,n("table",null,[n("tbody",null,[Pe,Re,qe,De,Se,Ne,Oe,Ue,n("tr",null,[Be,n("td",null,[t(a,{code:"204"})])]),Ie,n("tr",null,[Le,n("td",null,[t(a,{code:"4xx"}),He])]),Me])]),Fe,n("p",null,[Ye,ze,Ge,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Ke]),_:1}),Je,Ve]),We,t(r,{tag:"h4",title:"Remove a shipment with id 1234."},{default:e(()=>[Ze,Qe,Xe,t(a,{code:"204"})]),_:1}),$e,na,n("p",null,[sa,t(a,{code:"404"}),ta]),ea,n("table",null,[n("tbody",null,[aa,oa,pa,ra,la,ca,ia,n("tr",null,[ua,n("td",null,[t(a,{code:"200"}),da])]),ka,n("tr",null,[ha,n("td",null,[t(a,{code:"4xx"})])]),n("tr",null,[n("td",null,[t(a,{code:"5xx"})])]),_a])]),ma,t(r,{tag:"h4",title:"Generate unrelated return shipment"},{default:e(()=>[ya,ga,ba,t(a,{code:"200"}),fa,xa]),_:1}),va,Aa,Ta,n("p",null,[Ea,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[wa]),_:1}),Ca,t(l,{to:"7_A"},{default:e(()=>[ja]),_:1}),Pa]),Ra,n("table",null,[n("tbody",null,[qa,Da,Sa,Na,Oa,n("tr",null,[Ua,n("td",null,[Ba,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Ia]),_:1})])]),La,n("tr",null,[n("td",null,[Ha,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[Ma]),_:1})])]),n("tr",null,[n("td",null,[Fa,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Ya]),_:1})])]),n("tr",null,[n("td",null,[za,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[Ga]),_:1})])]),n("tr",null,[n("td",null,[Ka,t(o,{to:"/api-reference/04.data-types.html#timestamp",tabindex:"-1"},{default:e(()=>[Ja]),_:1})])]),n("tr",null,[n("td",null,[Va,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Wa]),_:1})])]),n("tr",null,[n("td",null,[Za,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Qa]),_:1})])]),n("tr",null,[n("td",null,[Xa,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[$a]),_:1})])]),n("tr",null,[n("td",null,[no,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[so]),_:1})])]),to,eo,n("tr",null,[ao,n("td",null,[t(a,{code:"200"})])]),oo,po,n("tr",null,[ro,n("td",null,[t(a,{code:"4xx"})])]),lo])]),co,n("p",null,[io,uo,ko,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[ho]),_:1}),_o,mo]),n("p",null,[yo,go,bo,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[fo]),_:1}),xo,vo]),n("p",null,[Ao,To,Eo,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:e(()=>[wo]),_:1}),Co,jo]),n("p",null,[Po,Ro,qo,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Do]),_:1}),So,No]),n("p",null,[Oo,Uo,Bo,t(o,{to:"/api-reference/04.data-types.html#shipment-status",tabindex:"-1"},{default:e(()=>[Io]),_:1}),Lo,Ho]),n("p",null,[Mo,Fo,Yo,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[zo]),_:1}),Go,Ko]),n("p",null,[Jo,Vo,Wo,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:e(()=>[Zo]),_:1}),Qo,Xo]),n("p",null,[$o,np,sp,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[tp]),_:1}),ep,ap]),n("p",null,[op,pp,rp,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[lp]),_:1}),cp,ip]),n("p",null,[up,dp,kp,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[hp]),_:1}),_p,mp,t(l,{to:"7_A"},{default:e(()=>[yp]),_:1}),gp]),n("p",null,[bp,fp,xp,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[vp]),_:1}),Ap,Tp]),Ep,t(r,{tag:"h4",title:"Search for shipments"},{default:e(()=>[wp,Cp,jp,Pp,t(a,{code:"200"}),Rp]),_:1}),qp,Dp,n("p",null,[Sp,Np,Op,Up,Bp,Ip,Lp,Hp,Mp,Fp,Yp,t(l,{to:"7_P"},{default:e(()=>[zp]),_:1}),Gp]),Kp,n("p",null,[Jp,t(a,{code:"4xx"}),Vp]),n("p",null,[Wp,Zp,Qp,t(a,{code:"404"}),Xp,t(l,{to:"11_C"},{default:e(()=>[$p]),_:1}),nr]),sr,n("table",null,[n("tbody",null,[tr,er,ar,or,pr,n("tr",null,[n("td",null,[n("p",null,[rr,t(l,{to:"7_R"},{default:e(()=>[lr]),_:1}),cr])])]),n("tr",null,[n("td",null,[n("p",null,[ir,t(l,{to:"7_R"},{default:e(()=>[ur]),_:1}),dr])])]),kr,n("tr",null,[hr,n("td",null,[_r,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[mr]),_:1})])]),n("tr",null,[n("td",null,[yr,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[gr]),_:1})])]),br,n("tr",null,[fr,n("td",null,[t(a,{code:"200"}),xr])]),n("tr",null,[n("td",null,[t(a,{code:"200"}),vr])]),Ar,n("tr",null,[n("td",null,[t(l,{to:"7_R"},{default:e(()=>[Tr]),_:1})])]),Er,n("tr",null,[wr,n("td",null,[t(a,{code:"402"})])]),Cr])]),jr,n("p",null,[Pr,Rr,qr,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Dr]),_:1}),Sr,Nr]),n("p",null,[Or,Ur,Br,t(o,{to:"/api-reference/04.data-types.html#paper-size",tabindex:"-1"},{default:e(()=>[Ir]),_:1}),Lr,Hr]),n("p",null,[Mr,Fr,Yr,t(o,{to:"/api-reference/04.data-types.html#label-position",tabindex:"-1"},{default:e(()=>[zr]),_:1}),Gr,Kr]),Jr,t(r,{tag:"h4",title:"Get Shipment label"},{default:e(()=>[Vr,Wr,Zr,t(a,{code:"200"}),Qr]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link"},{default:e(()=>[Xr,$r,nl,t(a,{code:"200"}),sl]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:e(()=>[tl,el,al,t(a,{code:"200"}),ol]),_:1}),t(r,{tag:"h4",title:"Get shipment label with different format and position"},{default:e(()=>[pl,rl,ll,cl,t(a,{code:"200"}),il]),_:1}),ul,dl,n("p",null,[kl,t(a,{code:"200"}),hl,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:e(()=>[_l]),_:1}),ml,t(l,{to:"7_L"},{default:e(()=>[yl]),_:1}),gl]),bl,n("p",null,[fl,t(l,{to:"1_D"},{default:e(()=>[xl]),_:1}),vl]),Al,n("table",null,[n("tbody",null,[Tl,El,wl,Cl,jl,n("tr",null,[Pl,n("td",null,[Rl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[ql]),_:1})])]),n("tr",null,[n("td",null,[Dl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Sl]),_:1})])]),n("tr",null,[n("td",null,[Nl,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[Ol]),_:1})])]),n("tr",null,[n("td",null,[Ul,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[Bl]),_:1})])]),Il,Ll,n("tr",null,[Hl,n("td",null,[t(a,{code:"200"})])]),Ml,Fl,n("tr",null,[Yl,n("td",null,[t(a,{code:"4xx"})])]),zl])]),Gl,n("p",null,[Kl,Jl,Vl,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[Wl]),_:1}),Zl,Ql]),n("p",null,[Xl,$l,nc,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[sc]),_:1}),tc,ec]),n("p",null,[ac,oc,pc,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:e(()=>[rc]),_:1}),lc,cc]),n("p",null,[ic,uc,dc,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[kc]),_:1}),hc,_c,t(l,{to:"7_L"},{default:e(()=>[mc]),_:1})]),n("p",null,[yc,gc,bc,t(o,{to:"/api-reference/04.data-types.html#sort-order",tabindex:"-1"},{default:e(()=>[fc]),_:1}),xc,vc]),n("p",null,[Ac,Tc,Ec,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:e(()=>[wc]),_:1}),Cc,jc]),Pc,Rc,t(r,{tag:"null"},{default:e(()=>[qc,Dc,Sc,t(a,{code:"200"}),Nc]),_:1}),Oc,n("p",null,[Uc,t(l,{to:"6_B"},{default:e(()=>[Bc]),_:1}),Ic]),n("p",null,[Lc,Hc,Mc,t(p,{type:"package-type",id:"1"}),Fc]),Yc,n("ol",null,[n("li",null,[n("p",null,[zc,t(l,{to:"6_C"},{default:e(()=>[Gc]),_:1}),Kc])]),n("li",null,[n("p",null,[Jc,t(l,{to:"6_H_3"},{default:e(()=>[Vc]),_:1}),Wc])]),Zc]),Qc,n("p",null,[Xc,t(l,{to:"6_C"},{default:e(()=>[$c]),_:1}),ni]),si,ti,t(r,{tag:"h4",title:"Create national multi collo shipment"},{default:e(()=>[ei,ai,oi,pi,t(a,{code:"200"}),ri]),_:1}),t(r,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:e(()=>[li,ci,ii,ui,di,ki]),_:1}),t(r,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:e(()=>[hi,_i,mi,yi,gi,bi]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:e(()=>[fi,xi,vi,Ai,Ti,Ei]),_:1}),t(r,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:e(()=>[wi,Ci,ji,Pi,Ri]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:e(()=>[qi,Di,Si,Ni,Oi]),_:1})])}var Mi=k(m,[["render",Ui],["__file","06.shipments.html.vue"]]);export{Mi as default};
