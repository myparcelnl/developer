import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as k,c as h,a as n,b as t,w as e,d as s,e as u,r as i}from"./app.bcb55c99.js";const _={},m=n("h3",{id:"_6-shipments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6. Shipments")],-1),y=n("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),g=n("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),b=n("h4",{id:"_6-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A Shipment option combinations")],-1),f=n("h5",{id:"_6-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.1 Package types")],-1),x=s("There are four different packages types available and determine the name of shipment. The value is sent with the "),v=s("ShipmentOptions"),A=s(" .package_type field."),T=n("h6",{id:"_1-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 1. Package")],-1),E=n("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),w=n("h6",{id:"_2-mailbox-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true",tabindex:"-1"},"#"),s(" 2. Mailbox package")],-1),C=s("This package type is only available on "),j=s(" and "),P=s(" for NL shipments that fit into a mailbox. It does not support additional options."),R=n("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),q=n("h6",{id:"_3-letter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true",tabindex:"-1"},"#"),s(" 3. Letter")],-1),D=s("This package type is available on "),S=s(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),O=n("h6",{id:"_4-digital-stamp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true",tabindex:"-1"},"#"),s(" 4. Digital stamp")],-1),N=s("This package type is only available on "),U=s(" for NL shipments and does not support any additional options. Its price is calculated using the package "),B=s("weight"),I=s(" ."),H=s("Note: This shipment will appear on your invoice on "),L=s(" as opposed to all other package types, which won't appear on your invoice until shipment "),M=s("."),F=n("h5",{id:"_6-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.2 Delivery types")],-1),Y=s("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),z=s(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),K=u('<h6 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true" tabindex="-1">#</a> 1. Morning</h6><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h6 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true" tabindex="-1">#</a> 2. Standard</h6><p>This is the standard delivery type.</p><h6 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true" tabindex="-1">#</a> 3. Evening</h6>',5),G=s("This option is only available on "),J=s(" and "),V=s(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),W=u('<h6 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true" tabindex="-1">#</a> 4. Pickup</h6><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h6 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true" tabindex="-1">#</a> 5. Pickup express</h6><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h5 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true" tabindex="-1">#</a> 6.A.3 Options</h5>',5),Z=s("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),Q=s("ShipmentOptions"),X=s(" object. These options are only available for "),$=s("."),nn=u('<h6 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true" tabindex="-1">#</a> only_recipient</h6><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h6 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true" tabindex="-1">#</a> signature</h6><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h6 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true" tabindex="-1">#</a> return</h6><p>Return the package to the sender when the recipient is not home.</p><h6 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true" tabindex="-1">#</a> large_format</h6><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h6 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true" tabindex="-1">#</a> insurance</h6>',9),sn=s("This option allows a shipment to be insured up to certain amount. Only "),tn=s(" shipments can be insured. NL shipments can be insured for 500,- euros. EU shipments "),en=n("strong",null,"must",-1),an=s(" be insured for 500,- euros. Global shipments "),on=n("strong",null,"must",-1),pn=s(" be insured for 200,- euros. The following shipment options are "),rn=n("strong",null,"mandatory",-1),ln=s(" when insuring an NL shipment: only_recipient and signature."),cn=n("h6",{id:"age-check",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#age-check","aria-hidden":"true",tabindex:"-1"},"#"),s(" age_check")],-1),un=s("Only available on "),dn=s(" and "),kn=s(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),hn=n("h5",{id:"_6-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-a-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.A.4 Examples")],-1),_n=n("p",null,"We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.",-1),mn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),yn=s("Let's go through this example. This package will be picked up by the customer, so it needs to "),gn=s(" with "),bn=s(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),fn=n("p",null,"We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.",-1),xn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),vn=s("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),An=s(" with "),Tn=s(". All evening and morning packages need to have only_recipient set."),En=n("p",null,"We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.",-1),wn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Cn=s("Only "),jn=s(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),Pn=n("code",null,"insurance.amount",-1),Rn=s(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),qn=n("p",null,"We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it's dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.",-1),Dn=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Sn=n("p",null,[s("This package is an EU package so the name must be set to 1. All EU and Global shipments "),n("strong",null,"must"),s(" be insured up to 500 (EU) / 200 (Global) euros, so we set the insured amount to 50000 "),n("strong",null,"cents."),s(" EU and Global shipments do not have the only_recipient, signature and return options so these cannot be set for this shipment.")],-1),On=n("h4",{id:"_6-b",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B Add Shipment")],-1),Nn=n("h5",{id:"_6-b-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.1 Overview")],-1),Un=n("p",null,"Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named ' column_mapping' in the multipart/form-data.",-1),Bn=s("For JSON requests a "),In=s("ShipmentIds"),Hn=s(" object is returned. The ids in the "),Ln=s("ShipmentIds"),Mn=s(" object will be in the same order they were sent."),Fn=s("For CSV requests "),Yn=s(" with empty response body is returned. If a request fails then an "),zn=s(" is returned."),Kn=n("h5",{id:"_6-b-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.2 Reference")],-1),Gn=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments")],-1),Jn=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),Vn=n("tr",null,[n("td",{rowspan:"6"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Wn=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Zn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Qn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),Xn=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),$n=n("tr",null,[n("td",null,[n("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),ns=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Optional request headers")])]),n("td",null,[n("p",null,[s("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),n("code",null,"shipment_label_created"),s(" to listen to it.)")])])],-1),ss=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ts=n("td",{rowspan:"2"},[n("p",null,[n("strong",null,"Query parameters")])],-1),es=s("format = "),as=s("paper_size"),os=s(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),ps=n("tr",null,[n("td",null,[n("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),rs=n("td",{rowspan:"3"},[n("p",null,[n("strong",null,"Request body")])],-1),ls=s("array"),cs=s(" of Shipment objects. (For Shipments JSON request)"),is=s("array"),us=s(" of ReturnShipment objects. (For ReturnShipments JSON request)"),ds=s("array"),ks=s(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),hs=n("td",null,[n("strong",null,"Response")],-1),_s=s(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),ms=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"ShipmentIds")],-1),ys=n("td",null,[n("strong",null,"Error response")],-1),gs=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),bs=n("h5",{id:"_6-b-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.3 Request Headers")],-1),fs=n("p",null,[n("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create standard shipments.")],-1),xs=n("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),vs=n("br",null,null,-1),As=s(" Specify this Content-Type when you want to create related return shipments."),Ts=n("br",null,null,-1),Es=s(" Parent shipment cannot be a concept ("),ws=s(") ."),Cs=n("br",null,null,-1),js=s(" When a label is generated, the status of the shipment is converted to registered ( "),Ps=s("shipment_status"),Rs=s(" 2)."),qs=n("p",null,[n("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),n("br"),s(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),Ds=n("h5",{id:"_6-b-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.B.4 Examples")],-1),Ss=n("p",null,"In these examples we are going to create shipments.",-1),Os=n("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),Ns=n("h6",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Us=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Bs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Is=n("h6",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Hs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ls=s(" Bpost shipments are only supported on "),Ms=s(". "),Fs=n("h6",{id:"request-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ys=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ks=n("h6",{id:"response-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Gs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"49566653"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bpost shipment"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Js=s(" DPD shipments are only supported on "),Vs=s(". "),Ws=n("h6",{id:"request-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Zs=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Qs=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Xs=n("h6",{id:"response-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),$s=s(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),nt=s(" Instabox shipments are only supported on "),st=s(". "),tt=s(" Creating Instabox shipments requires selecting a drop-off point. To receive nearby drop off points, see "),et=s("Drop off points"),at=s(" endpoint. "),ot=n("h6",{id:"request-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),pt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
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
`)])])],-1),lt=n("h6",{id:"response-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ct=s(' ```json { "data": { "ids": [ { "id": 49566518, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),it=s(" Multi collo shipments are only available on "),ut=s(" and "),dt=s(". "),kt=n("h6",{id:"request-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ht=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),_t=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),mt=n("h6",{id:"response-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),yt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),gt=s(" Creating shipments to an international destination is possible depending on the chosen carrier: "),bt=n("ul",null,[n("li",null,"PostNL and Bpost shipments are available worldwide."),n("li",null,"DPD shipments are available in the EU."),n("li",null,"Instabox is only available in NL.")],-1),ft=n("h6",{id:"request-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),xt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),vt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),At=n("h6",{id:"response-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Tt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3485394579"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Et=s(" Digital stamp shipments are available on "),wt=s(" and to Dutch destinations only. "),Ct=n("h6",{id:"request-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),jt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Pt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Rt=n("h6",{id:"response-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),qt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"39234953"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Dt=s(" Only available on "),St=s(" and "),Ot=s(". "),Nt=n("h6",{id:"request-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ut=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Bt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),It=n("h6",{id:"response-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Ht=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Lt=s(" Only available on "),Mt=s(". "),Ft=n("h6",{id:"request-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Yt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Kt=n("h6",{id:"response-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Gt=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),Jt=s(" Only available on "),Vt=s(". "),Wt=n("h6",{id:"request-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Zt=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Qt=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Xt=n("h6",{id:"response-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),$t=s(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),ne=s(" Only available on "),se=s(" and "),te=s(". "),ee=n("h6",{id:"request-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ae=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),oe=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),pe=n("h6",{id:"response-10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),re=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),le=n("h6",{id:"request-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ce=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ie=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),ue=n("h6",{id:"response-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),de=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ke=s(" The following example creates a PostNL return shipment. On "),he=s(" return shipments are only available with "),_e=s(". "),me=n("h6",{id:"request-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ye=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ge=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),be=n("h6",{id:"response-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),fe=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),xe=s(" The following example creates a PostNL return shipment. On "),ve=s(" return shipments are only available with "),Ae=s(". "),Te=n("h6",{id:"request-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ee=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),we=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ce=n("h6",{id:"response-13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),je=s(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),Pe=n("h4",{id:"_6-c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C Delete Shipment")],-1),Re=s("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),qe=s("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),De=n("h5",{id:"_6-c-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.1 Overview")],-1),Se=s("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),Oe=s(" can be deleted. This method returns "),Ne=s(" if successful. If the shipment doesn't exist a "),Ue=s(" is returned."),Be=n("h5",{id:"_6-c-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.2 Reference")],-1),Ie=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),He=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"DELETE")],-1),Le=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Me=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Fe=n("tr",null,[n("td",null,"Content-type: application/json;charset=utf-8")],-1),Ye=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),ze=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),Ke=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Ge=n("td",null,[n("strong",null,"Response")],-1),Je=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"None.")],-1),Ve=n("td",null,[n("strong",null,"Error response")],-1),We=s("."),Ze=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),Qe=n("h5",{id:"_6-c-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.3 Parameters")],-1),Xe=n("strong",null,"id",-1),$e=n("br",null,null,-1),na=s(" Data type: "),sa=s("integer"),ta=n("br",null,null,-1),ea=s(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),aa=n("h5",{id:"_6-c-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.C.4 Examples")],-1),oa=n("h6",{id:"request-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),pa=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ra=n("h6",{id:"response-14",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),la=n("h4",{id:"_6-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D Generate unrelated return shipment URL")],-1),ca=n("h5",{id:"_6-d-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.1 Overview")],-1),ia=s("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),ua=s(" Not Found is returned."),da=n("h5",{id:"_6-d-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.2 Reference")],-1),ka=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/return_shipments")],-1),ha=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"POST")],-1),_a=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),ma=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),ya=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"None.")],-1),ga=n("tr",null,[n("td",null,[n("strong",null,"Query parameters")]),n("td",null,"None.")],-1),ba=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),fa=n("td",null,[n("strong",null,"Response")],-1),xa=s(" Content-Type: application/json"),va=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"DownloadUrl object.")],-1),Aa=n("td",{rowspan:"2"},[n("strong",null,"Error response")],-1),Ta=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"None.")],-1),Ea=n("h5",{id:"_6-d-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.D.3 Examples")],-1),wa=n("h6",{id:"request-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ca=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),ja=n("h6",{id:"response-15",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Pa=s(" ``` Content-Type: application/json ``` "),Ra=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"download_url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"link"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),qa=n("h4",{id:"_6-e",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E Get Shipment")],-1),Da=n("h5",{id:"_6-e-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.1 Overview")],-1),Sa=n("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),Oa=s("Upon success either a JSON "),Na=s("array"),Ua=s(" of "),Ba=s("Shipment"),Ia=s(" objects or a CSV file is returned."),Ha=n("h5",{id:"_6-e-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.2 Reference")],-1),La=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),Ma=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Fa=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Ya=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),za=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = [Shipment].id")],-1),Ka=n("td",{rowspan:"10"},[n("strong",null,"Query parameters")],-1),Ga=s("q = "),Ja=s("string"),Va=n("tr",null,[n("td",null,"reference_identifier = [reference_identifier]")],-1),Wa=s("dropoff_today = "),Za=s("boolean"),Qa=s("status = "),Xa=s("shipment_status"),$a=s("from = "),no=s("timestamp"),so=s("to = "),to=s("timestamp"),eo=s("page = "),ao=s("integer"),oo=s("size = "),po=s("integer"),ro=s("sort = "),lo=s("string"),co=s("order = "),io=s("sort_order"),uo=n("tr",null,[n("td",null,[n("strong",null,"Optional request headers")]),n("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),ko=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),ho=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),_o=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),mo=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of Shipment objects (For JSON)")],-1),yo=n("td",null,[n("strong",null,"Error response")],-1),go=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),bo=n("h5",{id:"_6-e-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.3 Parameters")],-1),fo=n("strong",null,"id",-1),xo=n("br",null,null,-1),vo=s(" Data type: "),Ao=s("integer"),To=n("br",null,null,-1),Eo=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),wo=n("strong",null,"reference_identifier",-1),Co=n("br",null,null,-1),jo=s(" Data type: "),Po=s("string"),Ro=n("br",null,null,-1),qo=s(" This is an optional arbitrary identifier to identify the shipment."),Do=n("strong",null,"dropoff_today",-1),So=n("br",null,null,-1),Oo=s(" Data type: "),No=s("boolean"),Uo=n("br",null,null,-1),Bo=s(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),Io=n("strong",null,"q",-1),Ho=n("br",null,null,-1),Lo=s(" Data type: "),Mo=s("string"),Fo=n("br",null,null,-1),Yo=s(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),zo=n("strong",null,"status",-1),Ko=n("br",null,null,-1),Go=s(" Data type: "),Jo=s("shipment_status"),Vo=n("br",null,null,-1),Wo=s(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Zo=n("strong",null,"from",-1),Qo=n("br",null,null,-1),Xo=s(" Data type: "),$o=s("date"),np=n("br",null,null,-1),sp=s(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),tp=n("strong",null,"to",-1),ep=n("br",null,null,-1),ap=s(" Data type: "),op=s("date"),pp=n("br",null,null,-1),rp=s(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),lp=n("strong",null,"page",-1),cp=n("br",null,null,-1),ip=s(" Data type: "),up=s("integer"),dp=n("br",null,null,-1),kp=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),hp=n("strong",null,"size",-1),_p=n("br",null,null,-1),mp=s(" Data type: "),yp=s("integer"),gp=n("br",null,null,-1),bp=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),fp=n("strong",null,"sort",-1),xp=n("br",null,null,-1),vp=s(" Data type: "),Ap=s("string"),Tp=n("br",null,null,-1),Ep=s(" Shipment object field to sort on. See "),wp=s("Shipment"),Cp=s(" object"),jp=n("strong",null,"order",-1),Pp=n("br",null,null,-1),Rp=s(" Data type: "),qp=s("sort_order"),Dp=n("br",null,null,-1),Sp=s(" Sort order for sort filter. Defaults to ASC."),Op=n("h5",{id:"_6-e-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.E.4 Examples")],-1),Np=n("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),Up=n("h6",{id:"request-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Bp=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Ip=n("h6",{id:"response-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Hp=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Lp=n("h4",{id:"_6-f",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F Get Shipment label")],-1),Mp=n("h5",{id:"_6-f-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.1 Overview")],-1),Fp=s("Get shipment label. You can specify label format and starting position of labels on the first page with the "),Yp=n("strong",null,"format",-1),zp=s(" and "),Kp=n("strong",null,"position",-1),Gp=s(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Jp=n("strong",null,"Post-payment",-1),Vp=s(" payment methods can fetch multiple labels in one call. For accounts with "),Wp=n("strong",null,"Pre-payment",-1),Zp=s(" payment method an "),Qp=n("code",null,"<Http code=402 /> Payment Required",-1),Xp=s(" with a "),$p=s(" PaymentInstructions"),nr=s(" object is returned if the label has not been paid for yet."),sr=n("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),tr=s("Upon error "),er=s(" with a response body containing an Error is returned."),ar=s("If you want to retrieve more than 25 labels in one response, you can use "),or=n("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),pr=s(". You will receive a URL to a label, but the label is not immediately available and will return an "),rr=s(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),lr=s("label created webhooks"),cr=s(" ."),ir=n("h5",{id:"_6-f-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.2 Reference")],-1),ur=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),dr=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),kr=n("tr",null,[n("td",{rowspan:"5"},[n("strong",null,"Required request headers")]),n("td",null,"Authorization: basic BASE64(API_KEY)")],-1),hr=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),_r=n("tr",null,[n("td",null,[n("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),mr=s("Accept: application/json;charset=utf8 (For "),yr=s("ShipmentLabelDownloadLink"),gr=s(") For processing less than 25 labels."),br=s("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),fr=s("ShipmentLabelDownloadLink"),xr=s(") For processing multiple labels. Recommended if you request more than 25 labels."),vr=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id = Shipment.id")],-1),Ar=n("td",{rowspan:"2"},[n("strong",null,"Query parameters")],-1),Tr=s("format = "),Er=s("paper_size"),wr=s("positions = "),Cr=s("label_position"),jr=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Pr=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Rr=s(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),qr=s(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),Dr=n("tr",null,[n("td",{rowspan:"3"},[n("strong",null,"Response body")]),n("td",null,"Shipment label PDF")],-1),Sr=s("ShipmentLabelDownloadLink"),Or=n("tr",null,[n("td",null,"PaymentInstructions")],-1),Nr=n("td",null,[n("strong",null,"Error response")],-1),Ur=n("tr",null,[n("td",null,[n("p",null,[n("strong",null,"Error response body")])]),n("td",null,[n("p",null,"Content-Type: application/json (When payment is required)")])],-1),Br=n("h5",{id:"_6-f-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.3 Parameters")],-1),Ir=n("strong",null,"id",-1),Hr=n("br",null,null,-1),Lr=s(" Data type: "),Mr=s("integer"),Fr=n("br",null,null,-1),Yr=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),zr=n("strong",null,"format",-1),Kr=n("br",null,null,-1),Gr=s(" Data type: "),Jr=s("paper_size"),Vr=n("br",null,null,-1),Wr=s(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Zr=n("strong",null,"positions",-1),Qr=n("br",null,null,-1),Xr=s(" Data type: "),$r=s("label_position"),nl=n("br",null,null,-1),sl=s(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),tl=n("h5",{id:"_6-f-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.F.4 Examples")],-1),el=n("h6",{id:"request-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),al=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ol=n("h6",{id:"response-17",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),pl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),rl=n("h6",{id:"request-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ll=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),cl=n("h6",{id:"response-18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),il=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ul=n("h6",{id:"request-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),dl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),kl=n("h6",{id:"response-19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),hl=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pdfs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"url"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_l=n("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),ml=n("h6",{id:"request-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),yl=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),gl=n("h6",{id:"response-20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),bl=s(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),fl=n("h4",{id:"_6-g",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G Track Shipment")],-1),xl=n("h5",{id:"_6-g-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.1 Overview")],-1),vl=s("Get detailed Track & Trace information for a shipment. Upon success "),Al=s(" is returned with an "),Tl=s("array"),El=s(" of "),wl=s("TrackTrace"),Cl=s(" objects."),jl=n("h5",{id:"_6-g-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.2 Limitations")],-1),Pl=s("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),Rl=s("rate limit"),ql=s(" ."),Dl=n("h5",{id:"_6-g-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.3 Reference")],-1),Sl=n("tr",null,[n("td",null,[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),Ol=n("tr",null,[n("td",null,[n("strong",null,"Methods")]),n("td",null,"GET")],-1),Nl=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"Required")]),n("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),Ul=n("tr",null,[n("td",null,"User-Agent: CustomApiCall/2")],-1),Bl=n("tr",null,[n("td",null,[n("strong",null,"URI parameters")]),n("td",null,"id= [Shipment].id")],-1),Il=n("td",{rowspan:"5"},[n("strong",null,"Query parameters")],-1),Hl=s("page= "),Ll=s("integer"),Ml=s("size= "),Fl=s("integer"),Yl=s("sort= "),zl=s("string"),Kl=s("order= "),Gl=s("sort_order"),Jl=n("tr",null,[n("td",null,"extra_info= [extra_info]")],-1),Vl=n("tr",null,[n("td",null,[n("strong",null,"Request body")]),n("td",null,"None.")],-1),Wl=n("td",{rowspan:"2"},[n("strong",null,"Response")],-1),Zl=n("tr",null,[n("td",null,"Content-Type: application/json;charset=utf-8")],-1),Ql=n("tr",null,[n("td",null,[n("strong",null,"Response body")]),n("td",null,"array of TrackTrace objects.")],-1),Xl=n("td",null,[n("strong",null,"Error response")],-1),$l=n("tr",null,[n("td",null,[n("strong",null,"Error response body")]),n("td",null,"Error")],-1),nc=n("h5",{id:"_6-g-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.4 Parameters")],-1),sc=n("strong",null,"id",-1),tc=n("br",null,null,-1),ec=s(" Data type: "),ac=s("integer"),oc=n("br",null,null,-1),pc=s(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),rc=n("strong",null,"page",-1),lc=n("br",null,null,-1),cc=s(" Data type: "),ic=s("integer"),uc=n("br",null,null,-1),dc=s(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),kc=n("strong",null,"size",-1),hc=n("br",null,null,-1),_c=s(" Data type: "),mc=s("integer"),yc=n("br",null,null,-1),gc=s(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),bc=n("strong",null,"sort",-1),fc=n("br",null,null,-1),xc=s(" Data type: "),vc=s("string"),Ac=n("br",null,null,-1),Tc=s(" TrackTrace object field to sort on. See "),Ec=s("TrackTrace"),wc=n("strong",null,"order",-1),Cc=n("br",null,null,-1),jc=s(" Data type: "),Pc=s("sort_order"),Rc=n("br",null,null,-1),qc=s(" Sort order for sort filter. Defaults to ASC."),Dc=n("strong",null,"extra_info",-1),Sc=n("br",null,null,-1),Oc=s(" Data type: "),Nc=s("string"),Uc=n("br",null,null,-1),Bc=s(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),Ic=n("p",null,"extra_info=delivery_moment",-1),Hc=n("h5",{id:"_6-g-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.G.5 Examples")],-1),Lc=n("h6",{id:"request-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Mc=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Fc=n("h6",{id:"response-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Yc=s(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),zc=u('<h4 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true" tabindex="-1">#</a> 6.H Multi collo shipments</h4><h5 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true" tabindex="-1">#</a> 6.H.1 Overview</h5><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h5 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true" tabindex="-1">#</a> 6.H.2 Create</h5>',4),Kc=s("This section extends the "),Gc=s("base functionality"),Jc=s("."),Vc=s("Creating a multi collo shipment basically means using one extra property "),Wc=n("code",null,"secondary_shipments",-1),Zc=s(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Qc=s(" and can only be used for shipments to NL en BE."),Xc=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_shipments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;reference_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SECONDARY-SHIPMENT&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="_6-h-3" tabindex="-1"><a class="header-anchor" href="#_6-h-3" aria-hidden="true" tabindex="-1">#</a> 6.H.3 Update</h5><table><tbody><tr><td><strong>URI</strong></td><td>https://api.myparcel.nl/shipments</td></tr><tr><td><strong>Methods</strong></td><td>PUT</td></tr><tr><td rowspan="2"><strong>Required request headers</strong></td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>Content-Type: application/vnd.shipment+json;version=1.1</td></tr></tbody></table><p>Updating a secondary shipment can be done in several ways using different endpoints.</p><h6 id="add-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#add-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Add secondary shipment</h6><p>Adding an existing shipment to an existing multi collo shipment can be done in two ways.</p><ol><li>Post complete shipment with an extra shipment passed in the <code>secondary_shipments</code> property.</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h6 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true" tabindex="-1">#</a> Remove secondary shipment</h6><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),$c=s("Delete secondary shipment. Make use of the "),ni=s("delete endpoint"),si=s(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),ti=s("Omit the secondary shipment in an "),ei=s("update"),ai=s(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),oi=n("li",null,[n("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),pi=u(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multi_collo_main_shipment_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="_6-h-4" tabindex="-1"><a class="header-anchor" href="#_6-h-4" aria-hidden="true" tabindex="-1">#</a> 6.H.4 Delete</h5>`,2),ri=s("This section extends the "),li=s("base functionality"),ci=s(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),ii=n("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),ui=n("h5",{id:"_6-h-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true",tabindex:"-1"},"#"),s(" 6.H.5 Examples")],-1),di=n("h6",{id:"request-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),ki=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),hi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),_i=n("h6",{id:"response-22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),mi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"ids"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reference_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FOO-222-BAR-42"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),yi=n("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),gi=n("h6",{id:"request-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])])],-1),xi=n("h6",{id:"response-23",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),vi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Ai=n("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),Ti=n("h6",{id:"request-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Ei=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),wi=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Ci=n("h6",{id:"response-24",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),ji=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Pi=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),Ri=n("h6",{id:"request-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),qi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Di=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Si=n("h6",{id:"response-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Oi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Ni=n("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),Ui=n("h6",{id:"request-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Bi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])],-1),Ii=n("h6",{id:"response-26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),Hi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1),Li=n("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),Mi=n("h6",{id:"request-27",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-27","aria-hidden":"true",tabindex:"-1"},"#"),s(" Request")],-1),Fi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Yi=n("h6",{id:"response-27",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response-27","aria-hidden":"true",tabindex:"-1"},"#"),s(" Response")],-1),zi=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Ki(Gi,Ji){const a=i("AutoLink"),l=i("ApiLink"),p=i("DataType"),c=i("Message"),r=i("DetailsExpand"),o=i("Http");return k(),h("div",null,[m,y,n("p",null,[t(a,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:e(()=>[g]),_:1})]),b,f,n("p",null,[x,t(l,{to:"7_C"},{default:e(()=>[v]),_:1}),A]),T,E,w,n("p",null,[C,t(p,{type:"platform",id:"1"}),j,t(p,{type:"platform",id:"3"}),P]),t(c,{title:"",type:"note"},{default:e(()=>[R]),_:1}),q,n("p",null,[D,t(p,{type:"platform",id:"1"}),S]),O,n("p",null,[N,t(p,{type:"platform",id:"1"}),U,t(l,{to:"7_N"},{default:e(()=>[B]),_:1}),I]),n("p",null,[n("strong",null,[H,t(p,{type:"shipment_status",id:"2"}),L,t(p,{type:"shipment_status",id:"3"}),M])]),F,n("p",null,[Y,t(p,{type:"package_type",id:"1"}),z]),K,n("p",null,[G,t(p,{type:"platform",id:"1"}),J,t(p,{type:"platform",id:"3"}),V]),W,n("p",null,[Z,t(l,{to:"7_C"},{default:e(()=>[Q]),_:1}),X,t(p,{type:"package_type",id:"1"}),$]),nn,n("p",null,[sn,t(p,{type:"package_type",id:"1"}),tn,en,an,on,pn,rn,ln]),cn,n("p",null,[un,t(p,{type:"platform",id:"1"}),dn,t(p,{type:"platform",id:"3"}),kn]),hn,t(r,{tag:"null",title:"h4 Pickup"},{default:e(()=>[_n,mn,n("p",null,[yn,t(p,{type:"package_type",id:"1"}),gn,t(p,{type:"delivery_type",id:"4"}),bn])]),_:1}),t(r,{tag:"null",title:"h4 Evening"},{default:e(()=>[fn,xn,n("p",null,[vn,t(p,{type:"package_type",id:"1"}),An,t(p,{type:"delivery_type",id:"3"}),Tn])]),_:1}),t(r,{tag:"null",title:"h4 NL insured"},{default:e(()=>[En,wn,n("p",null,[Cn,t(p,{type:"package_type",id:"1"}),jn,Pn,Rn])]),_:1}),t(r,{tag:"null",title:"h4 EU and Global insured"},{default:e(()=>[qn,Dn,Sn]),_:1}),On,Nn,Un,n("p",null,[Bn,t(l,{to:"7_G"},{default:e(()=>[In]),_:1}),Hn,t(l,{to:"7_G"},{default:e(()=>[Ln]),_:1}),Mn]),n("p",null,[Fn,t(o,{code:"204"}),Yn,t(o,{code:"4xx"}),zn]),Kn,n("table",null,[n("tbody",null,[Gn,Jn,Vn,Wn,Zn,Qn,Xn,$n,ns,ss,n("tr",null,[ts,n("td",null,[n("p",null,[es,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[as]),_:1}),os])])]),ps,n("tr",null,[rs,n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[ls]),_:1}),cs])])]),n("tr",null,[n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[is]),_:1}),us])])]),n("tr",null,[n("td",null,[n("p",null,[t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[ds]),_:1}),ks])])]),n("tr",null,[hs,n("td",null,[t(o,{code:"200"}),_s])]),ms,n("tr",null,[ys,n("td",null,[t(o,{code:"4xx"})])]),gs])]),bs,fs,n("p",null,[xs,vs,As,Ts,Es,t(p,{type:"shipment_status",id:"1"}),ws,Cs,js,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[Ps]),_:1}),Rs]),qs,Ds,Ss,t(r,{tag:"h4",title:"Create domestic PostNL shipments"},{default:e(()=>[Os,Ns,Us,Bs,Is,t(o,{code:"200"}),Hs]),_:1}),t(r,{tag:"h4",title:"Create domestic bpost shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Ls,t(p,{type:"platform",name:"belgie"}),Ms]),_:1}),Fs,Ys,zs,Ks,t(o,{code:"200"}),Gs]),_:1}),t(r,{tag:"h4",title:"Create domestic DPD shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Js,t(p,{type:"platform",name:"belgie"}),Vs]),_:1}),Ws,Zs,Qs,Xs,t(o,{code:"200"}),$s]),_:1}),t(r,{tag:"h4",title:"Create domestic Instabox shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[nt,t(p,{type:"platform",name:"myparcel"}),st]),_:1}),t(c,{type:"note"},{default:e(()=>[tt,t(l,{to:"12_A"},{default:e(()=>[et]),_:1}),at]),_:1}),ot,pt,rt,lt,t(o,{code:"200"}),ct]),_:1}),t(r,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[it,t(p,{type:"platform",name:"myparcel"}),ut,t(p,{type:"platform",name:"flespakket"}),dt]),_:1}),kt,ht,_t,mt,t(o,{code:"200"}),yt]),_:1}),t(r,{tag:"h4",title:"Create International shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[gt,bt]),_:1}),ft,xt,vt,At,t(o,{code:"200"}),Tt]),_:1}),t(r,{tag:"h4",title:"Create digital stamp shipments"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Et,t(p,{type:"platform",name:"myparcel"}),wt]),_:1}),Ct,jt,Pt,Rt,t(o,{code:"200"}),qt]),_:1}),t(r,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Dt,t(p,{type:"platform",name:"myparcel"}),St,t(p,{type:"platform",name:"flespakket"}),Ot]),_:1}),Nt,Ut,Bt,It,t(o,{code:"200"}),Ht]),_:1}),t(r,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Lt,t(p,{type:"platform",name:"belgie"}),Mt]),_:1}),Ft,Yt,zt,Kt,t(o,{code:"200"}),Gt]),_:1}),t(r,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[Jt,t(p,{type:"platform",name:"belgie"}),Vt]),_:1}),Wt,Zt,Qt,Xt,t(o,{code:"200"}),$t]),_:1}),t(r,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ne,t(p,{type:"platform",name:"myparcel"}),se,t(p,{type:"platform",name:"flespakket"}),te]),_:1}),ee,ae,oe,pe,t(o,{code:"200"}),re]),_:1}),t(r,{tag:"h4",title:"Create shipment with BE pickup location"},{default:e(()=>[le,ce,ie,ue,t(o,{code:"200"}),de]),_:1}),t(r,{tag:"h4",title:"Create related return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[ke,t(p,{type:"platform",name:"belgie"}),he,t(p,{type:"carrier",name:"bpost"}),_e]),_:1}),me,ye,ge,be,t(o,{code:"200"}),fe]),_:1}),t(r,{tag:"h4",title:"Create unrelated return shipment"},{default:e(()=>[t(c,{type:"note"},{default:e(()=>[xe,t(p,{type:"platform",name:"belgie"}),ve,t(p,{type:"carrier",name:"bpost"}),Ae]),_:1}),Te,Ee,we,Ce,t(o,{code:"200"}),je]),_:1}),Pe,t(c,{title:"",type:"note"},{default:e(()=>[n("p",null,[Re,t(p,{type:"shipment_status",id:"1"}),qe])]),_:1}),De,n("p",null,[Se,t(p,{type:"shipment_status",id:"1"}),Oe,t(o,{code:"204"}),Ne,t(o,{code:"422"}),Ue]),Be,n("table",null,[n("tbody",null,[Ie,He,Le,Me,Fe,Ye,ze,Ke,n("tr",null,[Ge,n("td",null,[t(o,{code:"204"})])]),Je,n("tr",null,[Ve,n("td",null,[t(o,{code:"4xx"}),We])]),Ze])]),Qe,n("p",null,[Xe,$e,na,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[sa]),_:1}),ta,ea]),aa,t(r,{tag:"h4",title:"Remove a shipment with id 1234."},{default:e(()=>[oa,pa,ra,t(o,{code:"204"})]),_:1}),la,ca,n("p",null,[ia,t(o,{code:"404"}),ua]),da,n("table",null,[n("tbody",null,[ka,ha,_a,ma,ya,ga,ba,n("tr",null,[fa,n("td",null,[t(o,{code:"200"}),xa])]),va,n("tr",null,[Aa,n("td",null,[t(o,{code:"4xx"})])]),n("tr",null,[n("td",null,[t(o,{code:"5xx"})])]),Ta])]),Ea,t(r,{tag:"h4",title:"Generate unrelated return shipment"},{default:e(()=>[wa,Ca,ja,t(o,{code:"200"}),Pa,Ra]),_:1}),qa,Da,Sa,n("p",null,[Oa,t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[Na]),_:1}),Ua,t(l,{to:"7_A"},{default:e(()=>[Ba]),_:1}),Ia]),Ha,n("table",null,[n("tbody",null,[La,Ma,Fa,Ya,za,n("tr",null,[Ka,n("td",null,[Ga,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Ja]),_:1})])]),Va,n("tr",null,[n("td",null,[Wa,t(a,{item:"/api-reference/04.data-types#boolean"},{default:e(()=>[Za]),_:1})])]),n("tr",null,[n("td",null,[Qa,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[Xa]),_:1})])]),n("tr",null,[n("td",null,[$a,t(a,{item:"/api-reference/04.data-types#timestamp"},{default:e(()=>[no]),_:1})])]),n("tr",null,[n("td",null,[so,t(a,{item:"/api-reference/04.data-types#timestamp"},{default:e(()=>[to]),_:1})])]),n("tr",null,[n("td",null,[eo,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[ao]),_:1})])]),n("tr",null,[n("td",null,[oo,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[po]),_:1})])]),n("tr",null,[n("td",null,[ro,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[lo]),_:1})])]),n("tr",null,[n("td",null,[co,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[io]),_:1})])]),uo,ko,n("tr",null,[ho,n("td",null,[t(o,{code:"200"})])]),_o,mo,n("tr",null,[yo,n("td",null,[t(o,{code:"4xx"})])]),go])]),bo,n("p",null,[fo,xo,vo,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Ao]),_:1}),To,Eo]),n("p",null,[wo,Co,jo,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Po]),_:1}),Ro,qo]),n("p",null,[Do,So,Oo,t(a,{item:"/api-reference/04.data-types#boolean"},{default:e(()=>[No]),_:1}),Uo,Bo]),n("p",null,[Io,Ho,Lo,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Mo]),_:1}),Fo,Yo]),n("p",null,[zo,Ko,Go,t(a,{item:"/api-reference/04.data-types#shipment_status"},{default:e(()=>[Jo]),_:1}),Vo,Wo]),n("p",null,[Zo,Qo,Xo,t(a,{item:"/api-reference/04.data-types#date"},{default:e(()=>[$o]),_:1}),np,sp]),n("p",null,[tp,ep,ap,t(a,{item:"/api-reference/04.data-types#date"},{default:e(()=>[op]),_:1}),pp,rp]),n("p",null,[lp,cp,ip,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[up]),_:1}),dp,kp]),n("p",null,[hp,_p,mp,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[yp]),_:1}),gp,bp]),n("p",null,[fp,xp,vp,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Ap]),_:1}),Tp,Ep,t(l,{to:"7_A"},{default:e(()=>[wp]),_:1}),Cp]),n("p",null,[jp,Pp,Rp,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[qp]),_:1}),Dp,Sp]),Op,t(r,{tag:"h4",title:"Search for shipments"},{default:e(()=>[Np,Up,Bp,Ip,t(o,{code:"200"}),Hp]),_:1}),Lp,Mp,n("p",null,[Fp,Yp,zp,Kp,Gp,Jp,Vp,Wp,Zp,Qp,Xp,t(l,{to:"7_P"},{default:e(()=>[$p]),_:1}),nr]),sr,n("p",null,[tr,t(o,{code:"4xx"}),er]),n("p",null,[ar,or,pr,t(o,{code:"404"}),rr,t(a,{item:"#10"},{default:e(()=>[lr]),_:1}),cr]),ir,n("table",null,[n("tbody",null,[ur,dr,kr,hr,_r,n("tr",null,[n("td",null,[n("p",null,[mr,t(l,{to:"7_R"},{default:e(()=>[yr]),_:1}),gr])])]),n("tr",null,[n("td",null,[n("p",null,[br,t(l,{to:"7_R"},{default:e(()=>[fr]),_:1}),xr])])]),vr,n("tr",null,[Ar,n("td",null,[Tr,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[Er]),_:1})])]),n("tr",null,[n("td",null,[wr,t(a,{item:"/api-reference/04.data-types#label_position"},{default:e(()=>[Cr]),_:1})])]),jr,n("tr",null,[Pr,n("td",null,[t(o,{code:"200"}),Rr])]),n("tr",null,[n("td",null,[t(o,{code:"200"}),qr])]),Dr,n("tr",null,[n("td",null,[t(l,{to:"7_R"},{default:e(()=>[Sr]),_:1})])]),Or,n("tr",null,[Nr,n("td",null,[t(o,{code:"402"})])]),Ur])]),Br,n("p",null,[Ir,Hr,Lr,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Mr]),_:1}),Fr,Yr]),n("p",null,[zr,Kr,Gr,t(a,{item:"/api-reference/04.data-types#paper_size"},{default:e(()=>[Jr]),_:1}),Vr,Wr]),n("p",null,[Zr,Qr,Xr,t(a,{item:"/api-reference/04.data-types#label_position"},{default:e(()=>[$r]),_:1}),nl,sl]),tl,t(r,{tag:"h4",title:"Get Shipment label"},{default:e(()=>[el,al,ol,t(o,{code:"200"}),pl]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link"},{default:e(()=>[rl,ll,cl,t(o,{code:"200"}),il]),_:1}),t(r,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:e(()=>[ul,dl,kl,t(o,{code:"200"}),hl]),_:1}),t(r,{tag:"h4",title:"Get shipment label with different format and position"},{default:e(()=>[_l,ml,yl,gl,t(o,{code:"200"}),bl]),_:1}),fl,xl,n("p",null,[vl,t(o,{code:"200"}),Al,t(a,{item:"/api-reference/04.data-types#array"},{default:e(()=>[Tl]),_:1}),El,t(l,{to:"7_L"},{default:e(()=>[wl]),_:1}),Cl]),jl,n("p",null,[Pl,t(l,{to:"1_D"},{default:e(()=>[Rl]),_:1}),ql]),Dl,n("table",null,[n("tbody",null,[Sl,Ol,Nl,Ul,Bl,n("tr",null,[Il,n("td",null,[Hl,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Ll]),_:1})])]),n("tr",null,[n("td",null,[Ml,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[Fl]),_:1})])]),n("tr",null,[n("td",null,[Yl,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[zl]),_:1})])]),n("tr",null,[n("td",null,[Kl,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[Gl]),_:1})])]),Jl,Vl,n("tr",null,[Wl,n("td",null,[t(o,{code:"200"})])]),Zl,Ql,n("tr",null,[Xl,n("td",null,[t(o,{code:"4xx"})])]),$l])]),nc,n("p",null,[sc,tc,ec,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[ac]),_:1}),oc,pc]),n("p",null,[rc,lc,cc,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[ic]),_:1}),uc,dc]),n("p",null,[kc,hc,_c,t(a,{item:"/api-reference/04.data-types#integer"},{default:e(()=>[mc]),_:1}),yc,gc]),n("p",null,[bc,fc,xc,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[vc]),_:1}),Ac,Tc,t(l,{to:"7_L"},{default:e(()=>[Ec]),_:1})]),n("p",null,[wc,Cc,jc,t(a,{item:"/api-reference/04.data-types#sort_order"},{default:e(()=>[Pc]),_:1}),Rc,qc]),n("p",null,[Dc,Sc,Oc,t(a,{item:"/api-reference/04.data-types#string"},{default:e(()=>[Nc]),_:1}),Uc,Bc]),Ic,Hc,t(r,{tag:"null"},{default:e(()=>[Lc,Mc,Fc,t(o,{code:"200"}),Yc]),_:1}),zc,n("p",null,[Kc,t(l,{to:"6_B"},{default:e(()=>[Gc]),_:1}),Jc]),n("p",null,[Vc,Wc,Zc,t(p,{type:"package_type",id:"1"}),Qc]),Xc,n("ol",null,[n("li",null,[n("p",null,[$c,t(l,{to:"6_C"},{default:e(()=>[ni]),_:1}),si])]),n("li",null,[n("p",null,[ti,t(l,{to:"6_H_3"},{default:e(()=>[ei]),_:1}),ai])]),oi]),pi,n("p",null,[ri,t(l,{to:"6_C"},{default:e(()=>[li]),_:1}),ci]),ii,ui,t(r,{tag:"h4",title:"Create national multi collo shipment"},{default:e(()=>[di,ki,hi,_i,t(o,{code:"200"}),mi]),_:1}),t(r,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:e(()=>[yi,gi,bi,fi,xi,vi]),_:1}),t(r,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:e(()=>[Ai,Ti,Ei,wi,Ci,ji]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:e(()=>[Pi,Ri,qi,Di,Si,Oi]),_:1}),t(r,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:e(()=>[Ni,Ui,Bi,Ii,Hi]),_:1}),t(r,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:e(()=>[Li,Mi,Fi,Yi,zi]),_:1})])}var Zi=d(_,[["render",Ki],["__file","06.shipments.html.vue"]]);export{Zi as default};
