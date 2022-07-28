import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as _,c as u,a as e,b as n,w as s,d as t,e as h,r as c}from"./app.02e2e447.js";const m={},g=e("h3",{id:"_6-shipments",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-shipments","aria-hidden":"true"},"#"),t(" 6. Shipments")],-1),f=e("p",null,"We'll start the shipment section with the different shipment option combinations available in MyParcel. It is highly recommended that you read this first as this section helps you understand what all the shipment options are and which combinations are possible. We will not list every possible combination since there are too many to list. We will look at the different package types and then look at the different options available to them. Then we bring all of it together with some examples.",-1),y=e("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"},null,-1),b=e("h4",{id:"_6-a",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-a","aria-hidden":"true"},"#"),t(" 6.A Shipment option combinations")],-1),x=e("h5",{id:"_6-a-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-a-1","aria-hidden":"true"},"#"),t(" 6.A.1 Package types")],-1),v=t("There are four different packages types available and determine the name of shipment. The value is sent with the "),A=t("ShipmentOptions"),T=t(" .package_type field."),E=e("h6",{id:"_1-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-package","aria-hidden":"true"},"#"),t(" 1. Package")],-1),C=e("p",null,"This is the standard package type used for NL, EU and Global shipments. It supports a variety of additional options such as insurance, xl format etc. We will look at these options in more detail later. This package is most commonly used when creating shipments.",-1),w=e("h6",{id:"_2-mailbox-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-mailbox-package","aria-hidden":"true"},"#"),t(" 2. Mailbox package")],-1),j=t("This package type is only available on "),k=t(" and "),P=t(" for NL shipments that fit into a mailbox. It does not support additional options."),R=e("p",null,"If you still make the request with additional options, bear in mind that you may pay more than is necessary!",-1),q=e("h6",{id:"_3-letter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-letter","aria-hidden":"true"},"#"),t(" 3. Letter")],-1),D=t("This package type is available on "),S=t(" for NL, EU and Global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options."),O=e("h6",{id:"_4-digital-stamp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-digital-stamp","aria-hidden":"true"},"#"),t(" 4. Digital stamp")],-1),N=t("This package type is only available on "),U=t(" for NL shipments and does not support any additional options. Its price is calculated using the package "),B=t("weight"),I=t(" ."),H=t("Note: This shipment will appear on your invoice on "),L=t(" as opposed to all other package types, which won't appear on your invoice until shipment "),M=t("."),F=e("h5",{id:"_6-a-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-a-2","aria-hidden":"true"},"#"),t(" 6.A.2 Delivery types")],-1),Y=t("There are five different delivery types and these specify how the package is delivered. The value is sent with the ShipmentOptions.delivery_type field. Currently, delivery types are only available for NL and BE shipments with "),z=t(". Delivery types 1-5 for NL and 1,4 for BE. The address of the package determines the delivery types available. You need to use the DeliveryOptions interface to fetch the delivery types for a specific address. It is also possible to specify a date on which the package has to be delivered with the ShipmentOptions.delivery_date field. With delivery types 1 & 3 ShipmentOptions.delivery_date is required."),K=h('<h6 id="_1-morning" tabindex="-1"><a class="header-anchor" href="#_1-morning" aria-hidden="true">#</a> 1. Morning</h6><p>This option is only available for certain NL addresses. It allows a Customer/Consumer to have their package delivered early in the morning on the delivery date specified except on Saturday and Sunday.</p><h6 id="_2-standard" tabindex="-1"><a class="header-anchor" href="#_2-standard" aria-hidden="true">#</a> 2. Standard</h6><p>This is the standard delivery type.</p><h6 id="_3-evening" tabindex="-1"><a class="header-anchor" href="#_3-evening" aria-hidden="true">#</a> 3. Evening</h6>',5),G=t("This option is only available on "),J=t(" and "),V=t(" for certain NL addresses. It allows a Customer/Consumer to have their package delivered in the evening on the specified delivery date."),W=h('<h6 id="_4-pickup" tabindex="-1"><a class="header-anchor" href="#_4-pickup" aria-hidden="true">#</a> 4. Pickup</h6><p>The package is delivered at the chosen drop-off point specified by the Consumer/Customer.</p><h6 id="_5-pickup-express" tabindex="-1"><a class="header-anchor" href="#_5-pickup-express" aria-hidden="true">#</a> 5. Pickup express</h6><p>The same as pickup but the package is available for pickup before 8:30AM on the delivery date specified at the drop-off location. Only available on MyParcel.nl and Flespakket.</p><h5 id="_6-a-3" tabindex="-1"><a class="header-anchor" href="#_6-a-3" aria-hidden="true">#</a> 6.A.3 Options</h5>',5),Z=t("These are the different package options such as insurance, recipient only, signature on receipt, XL format etc. These options are specified in the "),Q=t("ShipmentOptions"),X=t(" object. These options are only available for "),$=t("."),ee=h('<h6 id="only-recipient" tabindex="-1"><a class="header-anchor" href="#only-recipient" aria-hidden="true">#</a> only_recipient</h6><p>Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types.</p><h6 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> signature</h6><p>Recipient must sign for the package. This option is required for Pickup and Pickup express delivery types.</p><h6 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h6><p>Return the package to the sender when the recipient is not home.</p><h6 id="large-format" tabindex="-1"><a class="header-anchor" href="#large-format" aria-hidden="true">#</a> large_format</h6><p>This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments.</p><h6 id="insurance" tabindex="-1"><a class="header-anchor" href="#insurance" aria-hidden="true">#</a> insurance</h6>',9),te=t("This option allows a shipment to be insured up to certain amount. Only "),ne=t(" shipments can be insured. NL shipments can be insured for 500,- euros. EU shipments "),se=e("strong",null,"must",-1),oe=t(" be insured for 500,- euros. Global shipments "),ae=e("strong",null,"must",-1),ie=t(" be insured for 200,- euros. The following shipment options are "),le=e("strong",null,"mandatory",-1),re=t(" when insuring an NL shipment: only_recipient and signature."),de=e("h6",{id:"age-check",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#age-check","aria-hidden":"true"},"#"),t(" age_check")],-1),ce=t("Only available on "),he=t(" and "),pe=t(". The Customer/Consumer must sign for the package and only receive it when he is at least 18 years."),_e=e("h5",{id:"_6-a-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-a-4","aria-hidden":"true"},"#"),t(" 6.A.4 Examples")],-1),ue=e("p",null,"We want to send a package to a consumer in Utrecht. He will pick the package up at the nearest pickup location. The shipment looks like this.",-1),me=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "options": {
          "package_type": 1,
          "only_recipient": 0,
          "signature": 1,
          "delivery_type": 4
        }
      }
    ]
  }
}
`)])],-1),ge=t("Let's go through this example. This package will be picked up by the customer, so it needs to "),fe=t(" with "),ye=t(". All pickup packages need to have signature set. A pickup location needs to be specified as well."),be=e("p",null,"We want to send a package to a consumer in Utrecht that has to be delivered on Tuesday evening. The shipment looks like this.",-1),xe=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "options": {
          "package_type": 1,
          "delivery_type": 3,
          "only_recipient": 1
        }
      }
    ]
  }
}
`)])],-1),ve=t("Let's go through this example. This package will be delivered to the consumer in the evening, so it needs "),Ae=t(" with "),Te=t(". All evening and morning packages need to have only_recipient set."),Ee=e("p",null,"We want to send a Rolex to a customer in Maastricht. This shipment needs to be insured up to \u20AC 5000,\u2013. The shipment looks like this.",-1),Ce=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "options": {
          "package_type": 1,
          "insurance": {
            "amount": 500000,
            "currency": "EUR"
          },
          "signature": 1,
          "only_recipient": 1
        }
      }
    ]
  }
}
`)])],-1),we=t("Only "),je=t(" can be insured so [package type] is set to 1. Insurance amount needs to be specified in cents and needs to be one of these amounts (10000, 25000, 50000, 500000, <= 500000). The package needs to be insured up to 5000 euros, so we set "),ke=e("code",null,"insurance.amount",-1),Pe=t(" to 500000 cents. All NL insured packages need to have signature and only_recipient set, so we set them as well."),Re=e("p",null,"We want to send an expensive Japanese vase to a Belgian friend of ours in Brussels. This package is large format because it's dimensions are within 100 x 70 x 50 and 175 x 78 x 58 cm range. Since this is an EU shipment is must be insured up to 500 euros.",-1),qe=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "options": {
          "package_type": 1,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 1
        }
      }
    ]
  }
}
`)])],-1),De=e("p",null,[t("This package is an EU package so the name must be set to 1. All EU and Global shipments "),e("strong",null,"must"),t(" be insured up to 500 (EU) / 200 (Global) euros, so we set the insured amount to 50000 "),e("strong",null,"cents."),t(" EU and Global shipments do not have the only_recipient, signature and return options so these cannot be set for this shipment.")],-1),Se=e("h4",{id:"_6-b",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-b","aria-hidden":"true"},"#"),t(" 6.B Add Shipment")],-1),Oe=e("h5",{id:"_6-b-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-b-1","aria-hidden":"true"},"#"),t(" 6.B.1 Overview")],-1),Ne=e("p",null,"Add shipments allows you to create standard and related return shipments. The data format can be JSON or CSV. Only standard national and EU shipments can be created with CSV. There are two ways of sending CSV: raw CSV or CSV file as part of multipart/form-data. You can specify the column mapping for CSV by including it as the first line in the CSV file or as a separate field named ' column_mapping' in the multipart/form-data.",-1),Ue=t("For JSON requests a "),Be=t("ShipmentIds"),Ie=t(" object is returned. The ids in the "),He=t("ShipmentIds"),Le=t(" object will be in the same order they were sent."),Me=t("For CSV requests "),Fe=t(" with empty response body is returned. If a request fails then an "),Ye=t(" is returned."),ze=e("h5",{id:"_6-b-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-b-2","aria-hidden":"true"},"#"),t(" 6.B.2 Reference")],-1),Ke=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/shipments")],-1),Ge=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"POST")],-1),Je=e("tr",null,[e("td",{rowspan:"6"},[e("strong",null,"Required request headers")]),e("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Ve=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),We=e("tr",null,[e("td",null,[e("p",null,"Content-type: application/vnd.shipment+json;charset=utf-8;version=1.1 (For Shipments JSON request)")])],-1),Ze=e("tr",null,[e("td",null,[e("p",null,"Content-type: application/vnd.shipment_recipients+json;charset=utf-8;version=1.1 (For Shipments with recipients column JSON request)")])],-1),Qe=e("tr",null,[e("td",null,[e("p",null,"Content-type: application/vnd.return_shipment+json;charset=utf-8;version=1.1 (For ReturnShipments JSON request)")])],-1),Xe=e("tr",null,[e("td",null,[e("p",null,"Content-type: application/vnd.unrelated_return_shipment+json;charset=utf-8;version=1.1 (For UnrelatedReturnShipments JSON request)")])],-1),$e=e("tr",null,[e("td",null,[e("p",null,[e("strong",null,"Optional request headers")])]),e("td",null,[e("p",null,[t("Accept: application/vnd.shipment_label+json;charset=utf-8 (You will receive a URL that points to a PDF. This PDF is not immediately available, you can use the webhook "),e("code",null,"shipment_label_created"),t(" to listen to it.)")])])],-1),et=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"None.")],-1),tt=e("td",{rowspan:"2"},[e("p",null,[e("strong",null,"Query parameters")])],-1),nt=t("format = "),st=t("paper_size"),ot=t(" (When using accept header: application/vnd.shipment_label+json;charset=utf-8)"),at=e("tr",null,[e("td",null,[e("p",null,"positions = label_position (When using accept header: application/vnd.shipment_label+json;charset=utf-8)")])],-1),it=e("td",{rowspan:"3"},[e("p",null,[e("strong",null,"Request body")])],-1),lt=t("array"),rt=t(" of Shipment objects. (For Shipments JSON request)"),dt=t("array"),ct=t(" of ReturnShipment objects. (For ReturnShipments JSON request)"),ht=t("array"),pt=t(" of UnrelatedReturnShipment objects. (For UnrelatedReturnShipments JSON request)"),_t=e("td",null,[e("strong",null,"Response")],-1),ut=t(" Content-Type: application/vnd.shipment_ids+json;charset=utf-8 (For standard and related return shipment.)"),mt=e("tr",null,[e("td",null,[e("strong",null,"Response body")]),e("td",null,"ShipmentIds")],-1),gt=e("td",null,[e("strong",null,"Error response")],-1),ft=e("tr",null,[e("td",null,[e("strong",null,"Error response body")]),e("td",null,"Error")],-1),yt=e("h5",{id:"_6-b-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-b-3","aria-hidden":"true"},"#"),t(" 6.B.3 Request Headers")],-1),bt=e("p",null,[e("strong",null,"Content-Type: application/vnd.shipment+json;version=1.1"),e("br"),t(" Specify this Content-Type when you want to create standard shipments.")],-1),xt=e("strong",null,"Content-Type: application/vnd.return_shipment+json;version=1.1",-1),vt=e("br",null,null,-1),At=t(" Specify this Content-Type when you want to create related return shipments."),Tt=e("br",null,null,-1),Et=t(" Parent shipment cannot be a concept ("),Ct=t(") ."),wt=e("br",null,null,-1),jt=t(" When a label is generated, the status of the shipment is converted to registered ( "),kt=t("shipment_status"),Pt=t(" 2)."),Rt=e("p",null,[e("strong",null,"Content-Type: application/vnd.unrelated_return_shipment+json;version=1.1"),e("br"),t(" Specify this Content-Type when you want to create unrelated return shipments.")],-1),qt=e("h5",{id:"_6-b-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-b-4","aria-hidden":"true"},"#"),t(" 6.B.4 Examples")],-1),Dt=e("p",null,"In these examples we are going to create shipments.",-1),St=e("p",null,"The following example creates a PostNL shipment to a Dutch recipient address. Domestic PostNL shipments are also supported on sendmyparcel.be, using a Belgian address instead.",-1),Ot=e("h6",{id:"request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),t(" Request")],-1),Nt=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Ut=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "only_recipient": 1,
          "signature": 1,
          "return": 1,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 0,
          "label_description": "My custom description",
          "age_check": 1
        },
        "carrier": 1
      },
      {
        "reference_identifier": "FOO-223-BAR-43",
        "recipient": {
          "cc": "NL",
          "region": "Zuid-Holland",
          "city": "Amsterdam",
          "street": "Dorpstraat",
          "number": "123",
          "postal_code": "1020BC",
          "person": "Mrs. Parcel",
          "phone": "02012343546",
          "email": "info@myparcel.nl"
        },
        "options": {
          "package_type": 1,
          "only_recipient": 0,
          "signature": 0,
          "return": 0
        },
        "carrier": 1
      }
    ]
  }
}
`)])],-1),Bt=e("h6",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),It=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": "FOO-222-BAR-42"
      },
      {
        "id": 68794,
        "reference_identifier": "FOO-223-BAR-43"
      }
    ]
  }
}
`)])],-1),Ht=t(" Bpost shipments are only supported on "),Lt=t(". "),Mt=e("h6",{id:"request-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-1","aria-hidden":"true"},"#"),t(" Request")],-1),Ft=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Yt=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "recipient": {
          "cc": "BE",
          "postal_code": "2000",
          "city": "Antwerpen",
          "street": "Wormerplein",
          "number": "16",
          "box_number": "",
          "person": "test"
        },
        "options": {
          "package_type": 1,
          "signature": 0,
          "insurance": {
            "amount": 0,
            "currency": "EUR"
          }
        },
        "carrier": 2,
        "reference_identifier": "bpost shipment"
      }
    ]
  }
}
`)])],-1),zt=e("h6",{id:"response-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-1","aria-hidden":"true"},"#"),t(" Response")],-1),Kt=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 49566653,
        "reference_identifier": "bpost shipment"
      }
    ]
  }
}
`)])],-1),Gt=t(" DPD shipments are only supported on "),Jt=t(". "),Vt=e("h6",{id:"request-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-2","aria-hidden":"true"},"#"),t(" Request")],-1),Wt=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Zt=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "recipient": {
          "cc": "BE",
          "postal_code": "2000",
          "city": "Antwerpen",
          "street": "Wormerplein",
          "number": "16",
          "box_number": "",
          "person": "test"
        },
        "options": {
          "package_type": 1
        },
        "carrier": 4,
        "reference_identifier": "Order 123456"
      }
    ]
  }
}
`)])],-1),Qt=e("h6",{id:"response-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-2","aria-hidden":"true"},"#"),t(" Response")],-1),Xt=t(' ```json { "data": { "ids": [ { "id": 49566517, "reference_identifier": "Order 123456" } ] } } ``` '),$t=t(" Instabox shipments are only supported on "),en=t(". "),tn=t(" Creating Instabox shipments requires selecting a drop-off point. To receive nearby drop off points, see "),nn=t("Drop off points"),sn=t(" endpoint. "),on=e("h6",{id:"request-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-3","aria-hidden":"true"},"#"),t(" Request")],-1),an=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ln=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "label_description": "My custom description",
          "same_day_delivery": 1
        },
        "carrier": 5,
        "drop_off_point": {
          "location_code": "e9149b66-7bee-439b-bab0-7a5d92ddc519",
          "location_name": "Instabox",
          "cc": "NL",
          "city": "Hoofddorp",
          "postal_code": "2132WV",
          "street": "Diamantlaan",
          "number": "77"
        }
      }
    ]
  }
}
`)])],-1),rn=e("h6",{id:"response-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-3","aria-hidden":"true"},"#"),t(" Response")],-1),dn=t(' ```json { "data": { "ids": [ { "id": 49566518, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),cn=t(" Multi collo shipments are only available on "),hn=t(" and "),pn=t(". "),_n=e("h6",{id:"request-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-4","aria-hidden":"true"},"#"),t(" Request")],-1),un=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),mn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "only_recipient": 1,
          "signature": 1,
          "return": 1,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 0,
          "label_description": "My custom description",
          "age_check": 1
        },
        "secondary_shipments": [
          { },
          { }
        ],
        "carrier": 1
      }
    ]
  }
}
`)])],-1),gn=e("h6",{id:"response-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-4","aria-hidden":"true"},"#"),t(" Response")],-1),fn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": "FOO-222-BAR-42"
      }
    ]
  }
}
`)])],-1),yn=t(" Creating shipments to an international destination is possible depending on the chosen carrier: "),bn=e("ul",null,[e("li",null,"PostNL and Bpost shipments are available worldwide."),e("li",null,"DPD shipments are available in the EU."),e("li",null,"Instabox is only available in NL.")],-1),xn=e("h6",{id:"request-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-5","aria-hidden":"true"},"#"),t(" Request")],-1),vn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),An=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "recipient": {
          "cc": "JP",
          "region": "\u57FC\u7389\u770C",
          "city": "\u3055\u3044\u305F\u307E\u5E02",
          "street": "\u57FC\u7389\u770C\u3055\u3044\u305F\u307E\u5E02\u6D66\u548C\u533A \u5E38\u76E49\uFF0D21\uFF0D21",
          "person": "Tanaka san",
          "company": "\u3055\u3044\u305F\u307E\u56FD\u969B\u30AD\u30EA\u30B9\u30C8\u6559\u4F1A",
          "email": "saitamakyokai@gmail.com",
          "phone": "0081-48-825-6637"
        },
        "options": {
          "package_type": 1
        },
        "customs_declaration": {
          "contents": 1,
          "invoice": "1231235345345",
          "weight": 30,
          "items": [
            {
              "description": "Sample Product",
              "amount": 10,
              "weight": 20,
              "item_value": {
                "amount": 7000,
                "currency": "EUR"
              },
              "classification": "0181",
              "country": "NL"
            },
            {
              "description": "Sample Product 2",
              "amount": 5,
              "weight": 10,
              "item_value": {
                "amount": 1000,
                "currency": "EUR"
              },
              "classification": "0181",
              "country": "BE"
            }
          ]
        },
        "physical_properties": {
          "weight": 30
        },
        "carrier": 1
      }
    ]
  }
}
`)])],-1),Tn=e("h6",{id:"response-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-5","aria-hidden":"true"},"#"),t(" Response")],-1),En=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 3485394579,
        "reference_identifier": null
      }
    ]
  }
}
`)])],-1),Cn=t(" Digital stamp shipments are available on "),wn=t(" and to Dutch destinations only. "),jn=e("h6",{id:"request-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-6","aria-hidden":"true"},"#"),t(" Request")],-1),kn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Pn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "reference_identifier": "FOO-DPZ-BAR-46",
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
          "package_type": 4,
          "label_description": "This is a digital stamp shipment!"
        },
        "physical_properties": {
          "weight": 30
        },
        "carrier": 1
      }
    ]
  }
}
`)])],-1),Rn=e("h6",{id:"response-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-6","aria-hidden":"true"},"#"),t(" Response")],-1),qn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 39234953,
        "reference_identifier": null
      }
    ]
  }
}
`)])],-1),Dn=t(" Only available on "),Sn=t(" and "),On=t(". "),Nn=e("h6",{id:"request-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-7","aria-hidden":"true"},"#"),t(" Request")],-1),Un=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Bn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "delivery_type": 4,
          "delivery_date": "2015-07-12 00:00:00",
          "only_recipient": 0,
          "signature": 1,
          "return": 0
        },
        "pickup": {
          "postal_code": "2132BH",
          "street": "Burgemeester van Stamplein",
          "city": "Hoofddorp",
          "number": "270",
          "location_name": "Albert Heijn"
        },
        "carrier": 1
      }
    ]
  }
}
`)])],-1),In=e("h6",{id:"response-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-7","aria-hidden":"true"},"#"),t(" Response")],-1),Hn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": null
      }
    ]
  }
}
`)])],-1),Ln=t(" Only available on "),Mn=t(". "),Fn=e("h6",{id:"request-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-8","aria-hidden":"true"},"#"),t(" Request")],-1),Yn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "carrier": 2,
        "recipient": {
          "cc": "BE",
          "city": "Antwerpen",
          "street": "Adriaan Brouwerstraat",
          "number": "16",
          "person": "Test",
          "postal_code": "2000"
        },
        "options": {
          "package_type": 1,
          "delivery_type": 4
        },
        "pickup": {
          "city": "ANTWERPEN",
          "location_code": "618925",
          "location_name": "KLAPKRANT",
          "number": "15",
          "postal_code": "2000",
          "street": "KLAPDORP"
        },
        "reference_identifier": "order-012356"
      }
    ]
  }
}
`)])],-1),Kn=e("h6",{id:"response-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-8","aria-hidden":"true"},"#"),t(" Response")],-1),Gn=t(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "order-012356" } ] } } ``` '),Jn=t(" Only available on "),Vn=t(". "),Wn=e("h6",{id:"request-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-9","aria-hidden":"true"},"#"),t(" Request")],-1),Zn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.sendmyparcel.be/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Qn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "carrier": 4,
        "recipient": {
          "cc": "BE",
          "city": "Antwerpen",
          "street": "Adriaan Brouwerstraat",
          "number": "16",
          "person": "Test",
          "postal_code": "2000"
        },
        "options": {
          "package_type": 1,
          "delivery_type": 4
        },
        "pickup": {
          "postal_code": "2000",
          "location_name": "PRESS WINKEL",
          "city": "Antwerpen",
          "street": "HOOGSTRAAT",
          "number": "75",
          "cc": "BE",
          "location_code": "BE11468"
        },
        "reference_identifier": "DPD pickup"
      }
    ]
  }
}
`)])],-1),Xn=e("h6",{id:"response-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-9","aria-hidden":"true"},"#"),t(" Response")],-1),$n=t(' ```json { "data": { "ids": [ { "id": 49571535, "reference_identifier": "DPD pickup" } ] } } ``` '),es=t(" Only available on "),ts=t(" and "),ns=t(". "),ss=e("h6",{id:"request-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-10","aria-hidden":"true"},"#"),t(" Request")],-1),os=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),as=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "only_recipient": 1,
          "signature": 1,
          "return": 1,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 0,
          "label_description": "My custom description",
          "age_check": 1
        },
        "pickup": {
          "postal_code": "2132BH",
          "street": "Burgemeester van Stamplein",
          "city": "Hoofddorp",
          "number": "270",
          "location_name": "Albert Heijn"
        },
        "secondary_shipments": [
          { },
          { }
        ],
        "carrier": 1
      }
    ]
  }
}
`)])],-1),is=e("h6",{id:"response-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-10","aria-hidden":"true"},"#"),t(" Response")],-1),ls=t(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": "FOO-222-BAR-42" } ] } } ``` '),rs=e("h6",{id:"request-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-11","aria-hidden":"true"},"#"),t(" Request")],-1),ds=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),cs=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "recipient": {
          "cc": "BE",
          "postal_code": "2000",
          "city": "Antwerpen",
          "region": "Belgi\xEB",
          "street": "Adriaan Brouwerstraat 12",
          "street_additional_info": "",
          "person": "Mr. Parcel"
        },
        "pickup": {
          "city": "ANTWERPEN",
          "street": "HOOGSTRAAT",
          "postal_code": "2000",
          "number": "75",
          "location_code": "BE0Q07",
          "retail_network_id": "LD-01",
          "location_name": "K&J TRADING"
        },
        "options": {
          "package_type": 1,
          "delivery_type": 4,
          "delivery_date": "2017-08-09 16:00:00",
          "only_recipient": 0,
          "signature": 1,
          "return": 0,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 0,
          "cooled_delivery": 0
        },
        "carrier": 1
      }
    ]
  }
}
`)])],-1),hs=e("h6",{id:"response-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-11","aria-hidden":"true"},"#"),t(" Response")],-1),ps=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": null
      }
    ]
  }
}
`)])],-1),_s=t(" The following example creates a PostNL return shipment. On "),us=t(" return shipments are only available with "),ms=t(". "),gs=e("h6",{id:"request-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-12","aria-hidden":"true"},"#"),t(" Request")],-1),fs=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ys=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "return_shipments": [
      {
        "parent": 5,
        "carrier": 1,
        "email": "testing@myparcel.nl",
        "name": "Mr. Parcel",
        "options": {
          "package_type": 1,
          "only_recipient": 0,
          "signature": 1,
          "return": 0,
          "insurance": {
            "amount": 10000,
            "currency": "EUR"
          }
        }
      }
    ]
  }
}
`)])],-1),bs=e("h6",{id:"response-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-12","aria-hidden":"true"},"#"),t(" Response")],-1),xs=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": null
      }
    ]
  }
}
`)])],-1),vs=t(" The following example creates a PostNL return shipment. On "),As=t(" return shipments are only available with "),Ts=t(". "),Es=e("h6",{id:"request-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-13","aria-hidden":"true"},"#"),t(" Request")],-1),Cs=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.unrelated_return_shipment+json;charset=utf-8
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ws=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "return_shipments": [
      {
        "options": {
          "package_type": 1,
          "only_recipient": 0,
          "signature": 0,
          "return": 0,
          "insurance": {
            "amount": 0,
            "currency": "EUR"
          },
          "large_format": 0,
          "label_description": "My custom description"
        },
        "carrier": 1,
        "email": "testing@myparcel.nl",
        "name": "Test"
      }
    ]
  }
}
`)])],-1),js=e("h6",{id:"response-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-13","aria-hidden":"true"},"#"),t(" Response")],-1),ks=t(' ```json { "data": { "ids": [ { "id": 12345, "reference_identifier": null } ] } } ``` '),Ps=e("h4",{id:"_6-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-c","aria-hidden":"true"},"#"),t(" 6.C Delete Shipment")],-1),Rs=t("Deleting shipments is not done often. This can only be done for shipments for which a label has not yet been created ("),qs=t("). Especially since shipments not handed over to the distributor will not be billed by MyParcel. Therefore, when unused shipments are not deleted this has no financial consequences."),Ds=e("h5",{id:"_6-c-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-c-1","aria-hidden":"true"},"#"),t(" 6.C.1 Overview")],-1),Ss=t("Use this link to remove shipments. You can specify multiple shipment ids by semicolon separating them on the URL. Only shipments with "),Os=t(" can be deleted. This method returns "),Ns=t(" if successful. If the shipment doesn't exist a "),Us=t(" is returned."),Bs=e("h5",{id:"_6-c-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-c-2","aria-hidden":"true"},"#"),t(" 6.C.2 Reference")],-1),Is=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/shipments/id[;id]")],-1),Hs=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"DELETE")],-1),Ls=e("tr",null,[e("td",{rowspan:"3"},[e("strong",null,"Required request headers")]),e("td",null,"Authorization: basic BASE64(API_KEY)")],-1),Ms=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),Fs=e("tr",null,[e("td",null,"Content-type: application/json;charset=utf-8")],-1),Ys=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"id = [Shipment].id")],-1),zs=e("tr",null,[e("td",null,[e("strong",null,"Query parameters")]),e("td",null,"None.")],-1),Ks=e("tr",null,[e("td",null,[e("strong",null,"Request body")]),e("td",null,"None.")],-1),Gs=e("td",null,[e("strong",null,"Response")],-1),Js=e("tr",null,[e("td",null,[e("strong",null,"Response body")]),e("td",null,"None.")],-1),Vs=e("td",null,[e("strong",null,"Error response")],-1),Ws=t("."),Zs=e("tr",null,[e("td",null,[e("strong",null,"Error response body")]),e("td",null,"Error")],-1),Qs=e("h5",{id:"_6-c-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-c-3","aria-hidden":"true"},"#"),t(" 6.C.3 Parameters")],-1),Xs=e("strong",null,"id",-1),$s=e("br",null,null,-1),eo=t(" Data type: "),to=t("integer"),no=e("br",null,null,-1),so=t(" The id of the shipment to delete. You can specify multiple shipments by semicolon separating them."),oo=e("h5",{id:"_6-c-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-c-4","aria-hidden":"true"},"#"),t(" 6.C.4 Examples")],-1),ao=e("h6",{id:"request-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-14","aria-hidden":"true"},"#"),t(" Request")],-1),io=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`DELETE https://api.myparcel.nl/shipments/1234 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),lo=e("h6",{id:"response-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-14","aria-hidden":"true"},"#"),t(" Response")],-1),ro=e("h4",{id:"_6-d",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-d","aria-hidden":"true"},"#"),t(" 6.D Generate unrelated return shipment URL")],-1),co=e("h5",{id:"_6-d-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-d-1","aria-hidden":"true"},"#"),t(" 6.D.1 Overview")],-1),ho=t("This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website. If this option is not enable then "),po=t(" Not Found is returned."),_o=e("h5",{id:"_6-d-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-d-2","aria-hidden":"true"},"#"),t(" 6.D.2 Reference")],-1),uo=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/return_shipments")],-1),mo=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"POST")],-1),go=e("tr",null,[e("td",{rowspan:"2"},[e("strong",null,"Required request headers")]),e("td",null,"Authorization: basic BASE64(API_KEY)")],-1),fo=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),yo=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"None.")],-1),bo=e("tr",null,[e("td",null,[e("strong",null,"Query parameters")]),e("td",null,"None.")],-1),xo=e("tr",null,[e("td",null,[e("strong",null,"Request body")]),e("td",null,"None.")],-1),vo=e("td",null,[e("strong",null,"Response")],-1),Ao=t(" Content-Type: application/json"),To=e("tr",null,[e("td",null,[e("strong",null,"Response body")]),e("td",null,"DownloadUrl object.")],-1),Eo=e("td",{rowspan:"2"},[e("strong",null,"Error response")],-1),Co=e("tr",null,[e("td",null,[e("strong",null,"Error response body")]),e("td",null,"None.")],-1),wo=e("h5",{id:"_6-d-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-d-3","aria-hidden":"true"},"#"),t(" 6.D.3 Examples")],-1),jo=e("h6",{id:"request-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-15","aria-hidden":"true"},"#"),t(" Request")],-1),ko=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/return_shipments
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Po=e("h6",{id:"response-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-15","aria-hidden":"true"},"#"),t(" Response")],-1),Ro=t(" ``` Content-Type: application/json ``` "),qo=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "download_url": {
      "link": "https://myparcel.me/returns/902223ede2f50288ecfbbd21a8c8fd7e"
    }
  }
}
`)])],-1),Do=e("h4",{id:"_6-e",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-e","aria-hidden":"true"},"#"),t(" 6.E Get Shipment")],-1),So=e("h5",{id:"_6-e-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-e-1","aria-hidden":"true"},"#"),t(" 6.E.1 Overview")],-1),Oo=e("p",null,"With this endpoint you can get shipments. You can use the 'q' query parameter to search for shipments. Depending on the Accept request header either JSON or CSV is returned. Multiple shipment ids can be specified on the URI by using semicolon. There are limitation when getting data back as CSV. When using CSV you will only get the most recent status of shipment.",-1),No=t("Upon success either a JSON "),Uo=t("array"),Bo=t(" of "),Io=t("Shipment"),Ho=t(" objects or a CSV file is returned."),Lo=e("h5",{id:"_6-e-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-e-2","aria-hidden":"true"},"#"),t(" 6.E.2 Reference")],-1),Mo=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/shipments/[id[;id]]")],-1),Fo=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"GET")],-1),Yo=e("tr",null,[e("td",{rowspan:"2"},[e("strong",null,"Required request headers")]),e("td",null,"Authorization: basic BASE64(API_KEY)")],-1),zo=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),Ko=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"id = [Shipment].id")],-1),Go=e("td",{rowspan:"10"},[e("strong",null,"Query parameters")],-1),Jo=t("q = "),Vo=t("string"),Wo=e("tr",null,[e("td",null,"reference_identifier = [reference_identifier]")],-1),Zo=t("dropoff_today = "),Qo=t("boolean"),Xo=t("status = "),$o=t("shipment_status"),ea=t("from = "),ta=t("timestamp"),na=t("to = "),sa=t("timestamp"),oa=t("page = "),aa=t("integer"),ia=t("size = "),la=t("integer"),ra=t("sort = "),da=t("string"),ca=t("order = "),ha=t("sort_order"),pa=e("tr",null,[e("td",null,[e("strong",null,"Optional request headers")]),e("td",null,"Accept: application/json;charset=utf-8 (For JSON)")],-1),_a=e("tr",null,[e("td",null,[e("strong",null,"Request body")]),e("td",null,"None.")],-1),ua=e("td",{rowspan:"2"},[e("strong",null,"Response")],-1),ma=e("tr",null,[e("td",null,"Content-Type: application/json;charset=utf-8 (For JSON)")],-1),ga=e("tr",null,[e("td",null,[e("strong",null,"Response body")]),e("td",null,"array of Shipment objects (For JSON)")],-1),fa=e("td",null,[e("strong",null,"Error response")],-1),ya=e("tr",null,[e("td",null,[e("strong",null,"Error response body")]),e("td",null,"Error")],-1),ba=e("h5",{id:"_6-e-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-e-3","aria-hidden":"true"},"#"),t(" 6.E.3 Parameters")],-1),xa=e("strong",null,"id",-1),va=e("br",null,null,-1),Aa=t(" Data type: "),Ta=t("integer"),Ea=e("br",null,null,-1),Ca=t(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),wa=e("strong",null,"reference_identifier",-1),ja=e("br",null,null,-1),ka=t(" Data type: "),Pa=t("string"),Ra=e("br",null,null,-1),qa=t(" This is an optional arbitrary identifier to identify the shipment."),Da=e("strong",null,"dropoff_today",-1),Sa=e("br",null,null,-1),Oa=t(" Data type: "),Na=t("boolean"),Ua=e("br",null,null,-1),Ba=t(" Use this parameter to filter for shipments that need to dropped at a PostNL location today."),Ia=e("strong",null,"q",-1),Ha=e("br",null,null,-1),La=t(" Data type: "),Ma=t("string"),Fa=e("br",null,null,-1),Ya=t(" Use this parameter to search through all the fields of a shipment object including the embedded objects"),za=e("strong",null,"status",-1),Ka=e("br",null,null,-1),Ga=t(" Data type: "),Ja=t("shipment_status"),Va=e("br",null,null,-1),Wa=t(" Use this parameter to specify the shipment status to filter on. You can specify multiple status by semicolon separating them on the URI."),Za=e("strong",null,"from",-1),Qa=e("br",null,null,-1),Xa=t(" Data type: "),$a=t("date"),ei=e("br",null,null,-1),ti=t(" Use this parameter to filter on the shipment creation date. This filter will set the lower bound of the date search range."),ni=e("strong",null,"to",-1),si=e("br",null,null,-1),oi=t(" Data type: "),ai=t("date"),ii=e("br",null,null,-1),li=t(" Use this parameter to filter on the shipment creation date. This filter will set the upper bound of the date search range."),ri=e("strong",null,"page",-1),di=e("br",null,null,-1),ci=t(" Data type: "),hi=t("integer"),pi=e("br",null,null,-1),_i=t(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),ui=e("strong",null,"size",-1),mi=e("br",null,null,-1),gi=t(" Data type: "),fi=t("integer"),yi=e("br",null,null,-1),bi=t(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),xi=e("strong",null,"sort",-1),vi=e("br",null,null,-1),Ai=t(" Data type: "),Ti=t("string"),Ei=e("br",null,null,-1),Ci=t(" Shipment object field to sort on. See "),wi=t("Shipment"),ji=t(" object"),ki=e("strong",null,"order",-1),Pi=e("br",null,null,-1),Ri=t(" Data type: "),qi=t("sort_order"),Di=e("br",null,null,-1),Si=t(" Sort order for sort filter. Defaults to ASC."),Oi=e("h5",{id:"_6-e-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-e-4","aria-hidden":"true"},"#"),t(" 6.E.4 Examples")],-1),Ni=e("p",null,"Search shipments for fields containing 'Niels' with status 'pending'. The first shipment has 'Jan' in the person field.",-1),Ui=e("h6",{id:"request-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-16","aria-hidden":"true"},"#"),t(" Request")],-1),Bi=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/shipments?q=Niels&status=1
User-Agent: CustomApiCall/2
HTTP/1.1 Authorization: basic
eUVJV1hFc3ZhMkxPeWRvVlM1bDVVZVJwamJNdVZQQXJSUGhFVkpCYw==
`)])],-1),Ii=e("h6",{id:"response-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-16","aria-hidden":"true"},"#"),t(" Response")],-1),Hi=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "search_results": {
      "shipments": [
        {
          "id": 12345,
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
            "only_recipient": 1,
            "signature": 1,
            "return": 1,
            "insurance": {
              "amount": 50000,
              "currency": "EUR"
            },
            "large_format": 0
          },
          "sender": {
            "cc": "NL",
            "region": "Zuid-Holland",
            "city": "Amsterdam",
            "street": "Dorpstraat",
            "number": "123",
            "postal_code": "1020BC",
            "person": "Mrs. Parcel",
            "phone": "02012343546",
            "email": "info@myparcel.nl"
          },
          "carrier_id": 1,
          "status": 1,
          "price": {
            "amount": 535,
            "currency": "EUR"
          },
          "barcode": "3SMYPA77773333",
          "secondary_shipments": null,
          "multi_collo_main_shipment_id": null,
          "created": "2017-01-31 08:00:00",
          "modified": "2017-01-31 09:00:00"
        }
      ],
      "page": 1,
      "size": 30,
      "results": 50
    }
  }
}
`)])],-1),Li=e("h4",{id:"_6-f",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-f","aria-hidden":"true"},"#"),t(" 6.F Get Shipment label")],-1),Mi=e("h5",{id:"_6-f-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-f-1","aria-hidden":"true"},"#"),t(" 6.F.1 Overview")],-1),Fi=t("Get shipment label. You can specify label format and starting position of labels on the first page with the "),Yi=e("strong",null,"format",-1),zi=t(" and "),Ki=e("strong",null,"position",-1),Gi=t(" query parameters. The ** position** query only works when you specify the A4 format and is only applied on the first page with labels.Accounts with "),Ji=e("strong",null,"Post-payment",-1),Vi=t(" payment methods can fetch multiple labels in one call. For accounts with "),Wi=e("strong",null,"Pre-payment",-1),Zi=t(" payment method an "),Qi=e("code",null,"<Http code=402 /> Payment Required",-1),Xi=t(" with a "),$i=t(" PaymentInstructions"),el=t(" object is returned if the label has not been paid for yet."),tl=e("p",null,"When a label for a multi collo shipment is requested, labels for all shipments part of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.",-1),nl=t("Upon error "),sl=t(" with a response body containing an Error is returned."),ol=t("If you want to retrieve more than 25 labels in one response, you can use "),al=e("code",null,"Accept: application/vnd.shipment_label_link+json;charset=utf8",-1),il=t(". You will receive a URL to a label, but the label is not immediately available and will return an "),ll=t(" until it is ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the "),rl=t("label created webhooks"),dl=t(" ."),cl=e("h5",{id:"_6-f-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-f-2","aria-hidden":"true"},"#"),t(" 6.F.2 Reference")],-1),hl=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/shipment_labels/id[;id]")],-1),pl=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"GET")],-1),_l=e("tr",null,[e("td",{rowspan:"5"},[e("strong",null,"Required request headers")]),e("td",null,"Authorization: basic BASE64(API_KEY)")],-1),ul=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),ml=e("tr",null,[e("td",null,[e("p",null,"Accept: application/pdf (For the PDF binary. This is the default.) For processing less than 25 labels.")])],-1),gl=t("Accept: application/json;charset=utf8 (For "),fl=t("ShipmentLabelDownloadLink"),yl=t(") For processing less than 25 labels."),bl=t("Accept: application/vnd.shipment_label_link+json;charset=utf8 (For "),xl=t("ShipmentLabelDownloadLink"),vl=t(") For processing multiple labels. Recommended if you request more than 25 labels."),Al=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"id = Shipment.id")],-1),Tl=e("td",{rowspan:"2"},[e("strong",null,"Query parameters")],-1),El=t("format = "),Cl=t("paper_size"),wl=t("positions = "),jl=t("label_position"),kl=e("tr",null,[e("td",null,[e("strong",null,"Request body")]),e("td",null,"None.")],-1),Pl=e("td",{rowspan:"2"},[e("strong",null,"Response")],-1),Rl=t(' Content-Disposition: attachment; filename="PDF_FILE" Content-Type: application/pdf'),ql=t(' Content-Type: application/json (When using "Accept: application/json;charset=utf8" or "Accept: application/vnd.shipment_label_link+json;charset=utf8")'),Dl=e("tr",null,[e("td",{rowspan:"3"},[e("strong",null,"Response body")]),e("td",null,"Shipment label PDF")],-1),Sl=t("ShipmentLabelDownloadLink"),Ol=e("tr",null,[e("td",null,"PaymentInstructions")],-1),Nl=e("td",null,[e("strong",null,"Error response")],-1),Ul=e("tr",null,[e("td",null,[e("p",null,[e("strong",null,"Error response body")])]),e("td",null,[e("p",null,"Content-Type: application/json (When payment is required)")])],-1),Bl=e("h5",{id:"_6-f-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-f-3","aria-hidden":"true"},"#"),t(" 6.F.3 Parameters")],-1),Il=e("strong",null,"id",-1),Hl=e("br",null,null,-1),Ll=t(" Data type: "),Ml=t("integer"),Fl=e("br",null,null,-1),Yl=t(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),zl=e("strong",null,"format",-1),Kl=e("br",null,null,-1),Gl=t(" Data type: "),Jl=t("paper_size"),Vl=e("br",null,null,-1),Wl=t(" The paper size of the PDF. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label position. When requesting the label for a shipment that contains a custom form, you can only request a A4 format."),Zl=e("strong",null,"positions",-1),Ql=e("br",null,null,-1),Xl=t(" Data type: "),$l=t("label_position"),er=e("br",null,null,-1),tr=t(" The position of the label on an A4 sheet. You can specify multiple positions by semicolon separating them on the URI. Positioning is only applied on the first page with labels. All subsequent pages will use the default positioning 1,2,3,4."),nr=e("h5",{id:"_6-f-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-f-4","aria-hidden":"true"},"#"),t(" 6.F.4 Examples")],-1),sr=e("h6",{id:"request-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-17","aria-hidden":"true"},"#"),t(" Request")],-1),or=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),ar=e("h6",{id:"response-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-17","aria-hidden":"true"},"#"),t(" Response")],-1),ir=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`Content-Disposition: attachment;filename="123123123.pdf" 
Content-Type: application/pdf
(...PDF content)
`)])],-1),lr=e("h6",{id:"request-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-18","aria-hidden":"true"},"#"),t(" Request")],-1),rr=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/json;charset=utf-8
`)])],-1),dr=e("h6",{id:"response-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-18","aria-hidden":"true"},"#"),t(" Response")],-1),cr=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`
{
  "data": {
    "pdfs": {
      "url": "https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"
    }
  }
}
`)])],-1),hr=e("h6",{id:"request-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-19","aria-hidden":"true"},"#"),t(" Request")],-1),pr=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/shipment_labels/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
Accept: application/vnd.shipment_label_link+json;charset=utf8
`)])],-1),_r=e("h6",{id:"response-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-19","aria-hidden":"true"},"#"),t(" Response")],-1),ur=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "pdfs": {
      "url": "/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"
    }
  }
}
`)])],-1),mr=e("p",null,"Get label for shipment with id 2. The label will be printed on an A4 sheet and the label position will be at the bottom-right.",-1),gr=e("h6",{id:"request-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-20","aria-hidden":"true"},"#"),t(" Request")],-1),fr=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/shipment_labels/2?format=A4&positions=3;4 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),yr=e("h6",{id:"response-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-20","aria-hidden":"true"},"#"),t(" Response")],-1),br=t(' ``` Content-Disposition: attachment; filename="456456456456.pdf" Content-Type: application/pdf (...PDF content) ``` '),xr=e("h4",{id:"_6-g",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g","aria-hidden":"true"},"#"),t(" 6.G Track Shipment")],-1),vr=e("h5",{id:"_6-g-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g-1","aria-hidden":"true"},"#"),t(" 6.G.1 Overview")],-1),Ar=t("Get detailed Track & Trace information for a shipment. Upon success "),Tr=t(" is returned with an "),Er=t("array"),Cr=t(" of "),wr=t("TrackTrace"),jr=t(" objects."),kr=e("h5",{id:"_6-g-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g-2","aria-hidden":"true"},"#"),t(" 6.G.2 Limitations")],-1),Pr=t("For retrieving Track & Trace data, we recommend passing multiple shipment IDs at once to avoid hitting the "),Rr=t("rate limit"),qr=t(" ."),Dr=e("h5",{id:"_6-g-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g-3","aria-hidden":"true"},"#"),t(" 6.G.3 Reference")],-1),Sr=e("tr",null,[e("td",null,[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/tracktraces/id[;id]")],-1),Or=e("tr",null,[e("td",null,[e("strong",null,"Methods")]),e("td",null,"GET")],-1),Nr=e("tr",null,[e("td",{rowspan:"2"},[e("strong",null,"Required")]),e("td",null,"request headers Authorization: basic BASE64(API_KEY)")],-1),Ur=e("tr",null,[e("td",null,"User-Agent: CustomApiCall/2")],-1),Br=e("tr",null,[e("td",null,[e("strong",null,"URI parameters")]),e("td",null,"id= [Shipment].id")],-1),Ir=e("td",{rowspan:"5"},[e("strong",null,"Query parameters")],-1),Hr=t("page= "),Lr=t("integer"),Mr=t("size= "),Fr=t("integer"),Yr=t("sort= "),zr=t("string"),Kr=t("order= "),Gr=t("sort_order"),Jr=e("tr",null,[e("td",null,"extra_info= [extra_info]")],-1),Vr=e("tr",null,[e("td",null,[e("strong",null,"Request body")]),e("td",null,"None.")],-1),Wr=e("td",{rowspan:"2"},[e("strong",null,"Response")],-1),Zr=e("tr",null,[e("td",null,"Content-Type: application/json;charset=utf-8")],-1),Qr=e("tr",null,[e("td",null,[e("strong",null,"Response body")]),e("td",null,"array of TrackTrace objects.")],-1),Xr=e("td",null,[e("strong",null,"Error response")],-1),$r=e("tr",null,[e("td",null,[e("strong",null,"Error response body")]),e("td",null,"Error")],-1),ed=e("h5",{id:"_6-g-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g-4","aria-hidden":"true"},"#"),t(" 6.G.4 Parameters")],-1),td=e("strong",null,"id",-1),nd=e("br",null,null,-1),sd=t(" Data type: "),od=t("integer"),ad=e("br",null,null,-1),id=t(" This is the shipment id. You can specify multiple shipment ids by semicolon separating them on the URI."),ld=e("strong",null,"page",-1),rd=e("br",null,null,-1),dd=t(" Data type: "),cd=t("integer"),hd=e("br",null,null,-1),pd=t(" Page number. Maximum value is 1000 and minimum is 1. Defaults to 1."),_d=e("strong",null,"size",-1),ud=e("br",null,null,-1),md=t(" Data type: "),gd=t("integer"),fd=e("br",null,null,-1),yd=t(" Items per page. Maximum value is 200 and minimum is 30. Defaults to 30."),bd=e("strong",null,"sort",-1),xd=e("br",null,null,-1),vd=t(" Data type: "),Ad=t("string"),Td=e("br",null,null,-1),Ed=t(" TrackTrace object field to sort on. See "),Cd=t("TrackTrace"),wd=e("strong",null,"order",-1),jd=e("br",null,null,-1),kd=t(" Data type: "),Pd=t("sort_order"),Rd=e("br",null,null,-1),qd=t(" Sort order for sort filter. Defaults to ASC."),Dd=e("strong",null,"extra_info",-1),Sd=e("br",null,null,-1),Od=t(" Data type: "),Nd=t("string"),Ud=e("br",null,null,-1),Bd=t(" Only the delivery_moment option is available. Delivery moment is not included by default for performance reasons. Example:"),Id=e("p",null,"extra_info=delivery_moment",-1),Hd=e("h5",{id:"_6-g-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-g-5","aria-hidden":"true"},"#"),t(" 6.G.5 Examples")],-1),Ld=e("h6",{id:"request-21",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-21","aria-hidden":"true"},"#"),t(" Request")],-1),Md=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/tracktraces/1212321?extra_info=delivery_moment
HTTP/1.1
User-Agent: CustomApiCall/2
Accept-Language: en_GB
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Fd=e("h6",{id:"response-21",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-21","aria-hidden":"true"},"#"),t(" Response")],-1),Yd=t(' ```json { "data": { "tracktraces": [ { "shipment_id": 43393092, "code": "I01", "description": "Zending bezorgd", "time": "2019-02-16 15:09:53", "link_consumer_portal": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329191&P=2182KD&D=NL&T=C&L=NL", "recipient": { "cc": "NL", "postal_code": "2231je", "city": "Potloden dorp", "street": "Gumlaan", "number": "101", "number_suffix": "", "person": "Hard Kauwer" }, "sender": { "cc": "NL", "postal_code": "4337WA", "city": "Middelburg", "street": "Jacobus Spijkerdreef", "number": "10", "person": "Tamara Faker", "company": "Potlodenshop", "email": "tamluca@potlodenshop.nl", "phone": "0673826485" }, "options": { "package_type": 1, "only_recipient": 0, "signature": 0, "return": 0, "insurance": { "amount": 0, "currency": "EUR" }, "large_format": 0, "cooled_delivery": 0, "age_check": 0 }, "pickup": null, "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 }, "status": { "current": 7, "main": "delivered", "final": true }, "history": [ { "code": "A01", "status": 2, "main": "registered", "description": "De zending is aangemeld bij PostNL en wordt volgbaar", "time": "2019-02-15 00:00:00", "delayed": false, "location": { "name": "Depot Den Bosch", "cc": "NL", "city": "S-Hertogenbosch", "postal_code": "5222AL", "street": "Ketelaarskampweg", "number": "7", "number_suffix": null, "longitude": 5.27349901, "latitude": 51.70326781 } }, { "code": "B01", "status": 3, "main": "handed_to_carrier", "description": "Zending is ontvangen door PostNL", "time": "2019-02-15 17:09:55", "delayed": false, "location": null }, { "code": "J01", "status": 4, "main": "sorting", "description": "Zending gesorteerd in sorteercentrum", "time": "2019-02-16 08:13:29", "delayed": false, "location": null }, { "code": "J05", "status": 5, "main": "distribution", "description": "Bezorger is onderweg", "time": "2019-02-16 08:35:51", "delayed": false, "location": null } ], "delivery_moment_type": "estimated", "delivery_moment": { "start": { "date": "2019-02-19 17:15:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" }, "end": { "date": "2019-02-19 19:45:00.000000", "timezone_type": 3, "timezone": "Europe/Amsterdam" } } } ] } } ``` '),zd=h('<h4 id="_6-h" tabindex="-1"><a class="header-anchor" href="#_6-h" aria-hidden="true">#</a> 6.H Multi collo shipments</h4><h5 id="_6-h-1" tabindex="-1"><a class="header-anchor" href="#_6-h-1" aria-hidden="true">#</a> 6.H.1 Overview</h5><p>This section describes the working of multi collo shipments. The multi collo shipment is a special name of shipment which requires a specific way of handling. A multi collo shipment is a shipment which contains multiple packages for the same address and the same delivery date. It contains of one &#39;main&#39; shipment and at least one &#39;secondary&#39; shipment. Working with multi collo shipments does not require using specific endpoints but existing endpoints have specific behaviour in combination with multi collo shipments.</p><h5 id="_6-h-2" tabindex="-1"><a class="header-anchor" href="#_6-h-2" aria-hidden="true">#</a> 6.H.2 Create</h5>',4),Kd=t("This section extends the "),Gd=t("base functionality"),Jd=t("."),Vd=t("Creating a multi collo shipment basically means using one extra property "),Wd=e("code",null,"secondary_shipments",-1),Zd=t(". This property can be used to pass an array of json objects. Each object represents an extra shipment to be part of the multi collo shipment. All required properties of the main shipment are inherited by the secondary shipments so there is no need to pass data with a secondary shipment, but it is allowed to pass specific data. This might be useful for example to pass a specific reference identifier per secondary shipment. Shipment options MUST be provided only with the main shipment. Secondary shipments only can be used in combination with "),Qd=t(" and can only be used for shipments to NL en BE."),Xd=h(`<div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;secondary_shipments&quot;: [
    {
      &quot;reference_identifier&quot;: &quot;SECONDARY-SHIPMENT&quot;
    }
  ]
}
</code></pre></div><h5 id="_6-h-3" tabindex="-1"><a class="header-anchor" href="#_6-h-3" aria-hidden="true">#</a> 6.H.3 Update</h5><table><tbody><tr><td><strong>URI</strong></td><td>https://api.myparcel.nl/shipments</td></tr><tr><td><strong>Methods</strong></td><td>PUT</td></tr><tr><td rowspan="2"><strong>Required request headers</strong></td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>Content-Type: application/vnd.shipment+json;version=1.1</td></tr></tbody></table><p>Updating a secondary shipment can be done in several ways using different endpoints.</p><h6 id="add-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#add-secondary-shipment" aria-hidden="true">#</a> Add secondary shipment</h6><p>Adding an existing shipment to an existing multi collo shipment can be done in two ways.</p><ol><li>Post complete shipment with an extra shipment passed in the <code>secondary_shipments</code> property.</li></ol><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;secondary_shipments&quot;: [
    {
      &quot;id&quot;: 12345
    },
    {
      &quot;id&quot;: 34567
    }
  ]
}
</code></pre></div><ol start="2"><li>Update a single existing shipment with a reference to a multi collo shipment via the <code>multi_collo_main_shipment_id</code>.</li></ol><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;multi_collo_main_shipment_id&quot;: 34567
}
</code></pre></div><p>Adding a non-existent shipment to an existing multi collo shipment can be done via the <code>secondary_shipments</code> property of the main shipment.</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;secondary_shipments&quot;: [
    {
      &quot;id&quot;: 12345
    }
  ]
}
</code></pre></div><p>Note that the existing secondary shipments should always be passed as well because they will be deleted otherwise.</p><h6 id="remove-secondary-shipment" tabindex="-1"><a class="header-anchor" href="#remove-secondary-shipment" aria-hidden="true">#</a> Remove secondary shipment</h6><p>Removing a secondary shipment from a multi collo shipment can be done in 3 different ways.</p>`,15),$d=t("Delete secondary shipment. Make use of the "),ec=t("delete endpoint"),tc=t(" when passing the id of the secondary shipment. This will cause the secondary shipment to be deleted and removed from the multi collo shipment."),nc=t("Omit the secondary shipment in an "),sc=t("update"),oc=t(" request on the multi collo main shipment. This will cause the secondary shipment to be deleted and be removed from the multi collo shipment."),ac=e("li",null,[e("p",null,"Unlink a secondary shipment from the multi collo shipment. This is done by a PUT request for a specific secondary shipment with an empty reference to the multi collo main shipment. This will cause the shipment to be removed from the multi collo shipment and still be available as normal shipment. The data passed in the PUT request for secondary shipment 1234 to remove it from its multi collo shipment should contain besides all other required data:")],-1),ic=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "id": 1234,
  "multi_collo_main_shipment_id": null
}
`)])],-1),lc=e("h5",{id:"_6-h-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-h-4","aria-hidden":"true"},"#"),t(" 6.H.4 Delete")],-1),rc=t("This section extends the "),dc=t("base functionality"),cc=t(". Deleting a multi collo main shipment will result in a complete removal of the main and secondary shipments of the multi collo shipment."),hc=e("p",null,"Deleting a secondary shipment will result in deleting the shipment and removal of the secondary shipment from the multi collo shipment.",-1),pc=e("h5",{id:"_6-h-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-h-5","aria-hidden":"true"},"#"),t(" 6.H.5 Examples")],-1),_c=e("h6",{id:"request-22",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-22","aria-hidden":"true"},"#"),t(" Request")],-1),uc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`POST https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),mc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
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
          "only_recipient": 1,
          "signature": 1,
          "return": 1,
          "insurance": {
            "amount": 50000,
            "currency": "EUR"
          },
          "large_format": 0,
          "label_description": "My custom description",
          "age_check": 1
        },
        "secondary_shipments": [
          {
            "reference_identifier": "REF-SECONDARY-SHIPMENT"
          }
        ],
        "carrier": 1
      }
    ]
  }
}
`)])],-1),gc=e("h6",{id:"response-22",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-22","aria-hidden":"true"},"#"),t(" Response")],-1),fc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "ids": [
      {
        "id": 12345,
        "reference_identifier": "FOO-222-BAR-42"
      }
    ]
  }
}
`)])],-1),yc=e("p",null,"This example adds a new shipment to multi collo shipment 12345",-1),bc=e("h6",{id:"request-23",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-23","aria-hidden":"true"},"#"),t(" Request")],-1),xc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),vc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "id": 12345,
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
        "secondary_shipments": [
          {
            "id": 12346,
            "reference_identifier": "SECONDARY-SHIPMENT"
          },
          { }
        ],
        "carrier": 1
      }
    ]
  }
}
`)])],-1),Ac=e("h6",{id:"response-23",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-23","aria-hidden":"true"},"#"),t(" Response")],-1),Tc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 204 No Content
`)])],-1),Ec=e("p",null,"This example adds existing shipment 12346 to multi collo shipment 12345",-1),Cc=e("h6",{id:"request-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-24","aria-hidden":"true"},"#"),t(" Request")],-1),wc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),jc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
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
        "multi_collo_main_shipment_id": 12345
      }
    ]
  }
}
`)])],-1),kc=e("h6",{id:"response-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-24","aria-hidden":"true"},"#"),t(" Response")],-1),Pc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 204 No Content
`)])],-1),Rc=e("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment 12345 by omitting the shipment in the secondary shipment property",-1),qc=e("h6",{id:"request-25",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-25","aria-hidden":"true"},"#"),t(" Request")],-1),Dc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
Content-Type: application/vnd.shipment+json;charset=utf-8;version=1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),Sc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "shipments": [
      {
        "id": 12345,
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
        "secondary_shipments": [
          {
            "id": 12347,
            "reference_identifier": "SECONDARY-SHIPMENT"
          }
        ],
        "carrier": 1
      }
    ]
  }
}
`)])],-1),Oc=e("h6",{id:"response-25",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-25","aria-hidden":"true"},"#"),t(" Response")],-1),Nc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 204 No Content
`)])],-1),Uc=e("p",null,"This example removes existing shipment 12346 from multi collo shipment 12345 by removing the relation to the multi collo main shipment.",-1),Bc=e("h6",{id:"request-26",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-26","aria-hidden":"true"},"#"),t(" Request")],-1),Ic=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`PUT https://api.myparcel.nl/shipments HTTP/1.1
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
`)])],-1),Hc=e("h6",{id:"response-26",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-26","aria-hidden":"true"},"#"),t(" Response")],-1),Lc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 204 No Content
`)])],-1),Mc=e("p",null,"This example deletes and removes existing shipment 12346 from multi collo shipment by deleting the secondary shipment.",-1),Fc=e("h6",{id:"request-27",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-27","aria-hidden":"true"},"#"),t(" Request")],-1),Yc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`DELETE https://api.myparcel.nl/shipments/12346 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
`)])],-1),zc=e("h6",{id:"response-27",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response-27","aria-hidden":"true"},"#"),t(" Response")],-1),Kc=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 204 No Content
`)])],-1);function Gc(Jc,Vc){const o=c("AutoLink"),r=c("ApiLink"),i=c("DataType"),d=c("Message"),l=c("DetailsExpand"),a=c("Http");return _(),u("div",null,[g,f,e("p",null,[n(o,{item:"https://app.getpostman.com/run-collection/9df5cb4cf2026e7ef4c0?action=collection%2Fimport"},{default:s(()=>[y]),_:1})]),b,x,e("p",null,[v,n(r,{to:"7_C"},{default:s(()=>[A]),_:1}),T]),E,C,w,e("p",null,[j,n(i,{type:"platform",id:"1"}),k,n(i,{type:"platform",id:"3"}),P]),n(d,{title:"",type:"note"},{default:s(()=>[R]),_:1}),q,e("p",null,[D,n(i,{type:"platform",id:"1"}),S]),O,e("p",null,[N,n(i,{type:"platform",id:"1"}),U,n(r,{to:"7_N"},{default:s(()=>[B]),_:1}),I]),e("p",null,[e("strong",null,[H,n(i,{type:"shipment_status",id:"2"}),L,n(i,{type:"shipment_status",id:"3"}),M])]),F,e("p",null,[Y,n(i,{type:"package_type",id:"1"}),z]),K,e("p",null,[G,n(i,{type:"platform",id:"1"}),J,n(i,{type:"platform",id:"3"}),V]),W,e("p",null,[Z,n(r,{to:"7_C"},{default:s(()=>[Q]),_:1}),X,n(i,{type:"package_type",id:"1"}),$]),ee,e("p",null,[te,n(i,{type:"package_type",id:"1"}),ne,se,oe,ae,ie,le,re]),de,e("p",null,[ce,n(i,{type:"platform",id:"1"}),he,n(i,{type:"platform",id:"3"}),pe]),_e,n(l,{tag:"null",title:"h4 Pickup"},{default:s(()=>[ue,me,e("p",null,[ge,n(i,{type:"package_type",id:"1"}),fe,n(i,{type:"delivery_type",id:"4"}),ye])]),_:1}),n(l,{tag:"null",title:"h4 Evening"},{default:s(()=>[be,xe,e("p",null,[ve,n(i,{type:"package_type",id:"1"}),Ae,n(i,{type:"delivery_type",id:"3"}),Te])]),_:1}),n(l,{tag:"null",title:"h4 NL insured"},{default:s(()=>[Ee,Ce,e("p",null,[we,n(i,{type:"package_type",id:"1"}),je,ke,Pe])]),_:1}),n(l,{tag:"null",title:"h4 EU and Global insured"},{default:s(()=>[Re,qe,De]),_:1}),Se,Oe,Ne,e("p",null,[Ue,n(r,{to:"7_G"},{default:s(()=>[Be]),_:1}),Ie,n(r,{to:"7_G"},{default:s(()=>[He]),_:1}),Le]),e("p",null,[Me,n(a,{code:"204"}),Fe,n(a,{code:"4xx"}),Ye]),ze,e("table",null,[e("tbody",null,[Ke,Ge,Je,Ve,We,Ze,Qe,Xe,$e,et,e("tr",null,[tt,e("td",null,[e("p",null,[nt,n(o,{item:"/api-reference/04.data-types#paper_size"},{default:s(()=>[st]),_:1}),ot])])]),at,e("tr",null,[it,e("td",null,[e("p",null,[n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[lt]),_:1}),rt])])]),e("tr",null,[e("td",null,[e("p",null,[n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[dt]),_:1}),ct])])]),e("tr",null,[e("td",null,[e("p",null,[n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[ht]),_:1}),pt])])]),e("tr",null,[_t,e("td",null,[n(a,{code:"200"}),ut])]),mt,e("tr",null,[gt,e("td",null,[n(a,{code:"4xx"})])]),ft])]),yt,bt,e("p",null,[xt,vt,At,Tt,Et,n(i,{type:"shipment_status",id:"1"}),Ct,wt,jt,n(o,{item:"/api-reference/04.data-types#shipment_status"},{default:s(()=>[kt]),_:1}),Pt]),Rt,qt,Dt,n(l,{tag:"h4",title:"Create domestic PostNL shipments"},{default:s(()=>[St,Ot,Nt,Ut,Bt,n(a,{code:"200"}),It]),_:1}),n(l,{tag:"h4",title:"Create domestic bpost shipments"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Ht,n(i,{type:"platform",name:"belgie"}),Lt]),_:1}),Mt,Ft,Yt,zt,n(a,{code:"200"}),Kt]),_:1}),n(l,{tag:"h4",title:"Create domestic DPD shipments"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Gt,n(i,{type:"platform",name:"belgie"}),Jt]),_:1}),Vt,Wt,Zt,Qt,n(a,{code:"200"}),Xt]),_:1}),n(l,{tag:"h4",title:"Create domestic Instabox shipments"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[$t,n(i,{type:"platform",name:"myparcel"}),en]),_:1}),n(d,{type:"note"},{default:s(()=>[tn,n(r,{to:"12_A"},{default:s(()=>[nn]),_:1}),sn]),_:1}),on,an,ln,rn,n(a,{code:"200"}),dn]),_:1}),n(l,{tag:"h4",title:"Create domestic PostNL multi collo shipments"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[cn,n(i,{type:"platform",name:"myparcel"}),hn,n(i,{type:"platform",name:"flespakket"}),pn]),_:1}),_n,un,mn,gn,n(a,{code:"200"}),fn]),_:1}),n(l,{tag:"h4",title:"Create International shipment"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[yn,bn]),_:1}),xn,vn,An,Tn,n(a,{code:"200"}),En]),_:1}),n(l,{tag:"h4",title:"Create digital stamp shipments"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Cn,n(i,{type:"platform",name:"myparcel"}),wn]),_:1}),jn,kn,Pn,Rn,n(a,{code:"200"}),qn]),_:1}),n(l,{tag:"h4",title:"Create PostNL shipment with NL pickup location"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Dn,n(i,{type:"platform",name:"myparcel"}),Sn,n(i,{type:"platform",name:"flespakket"}),On]),_:1}),Nn,Un,Bn,In,n(a,{code:"200"}),Hn]),_:1}),n(l,{tag:"h4",title:"Create bpost shipment with BE pickup location"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Ln,n(i,{type:"platform",name:"belgie"}),Mn]),_:1}),Fn,Yn,zn,Kn,n(a,{code:"200"}),Gn]),_:1}),n(l,{tag:"h4",title:"Create DPD shipment with BE pickup location"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[Jn,n(i,{type:"platform",name:"belgie"}),Vn]),_:1}),Wn,Zn,Qn,Xn,n(a,{code:"200"}),$n]),_:1}),n(l,{tag:"h4",title:"Create multi collo shipment with NL pickup location"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[es,n(i,{type:"platform",name:"myparcel"}),ts,n(i,{type:"platform",name:"flespakket"}),ns]),_:1}),ss,os,as,is,n(a,{code:"200"}),ls]),_:1}),n(l,{tag:"h4",title:"Create shipment with BE pickup location"},{default:s(()=>[rs,ds,cs,hs,n(a,{code:"200"}),ps]),_:1}),n(l,{tag:"h4",title:"Create related return shipment"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[_s,n(i,{type:"platform",name:"belgie"}),us,n(i,{type:"carrier",name:"bpost"}),ms]),_:1}),gs,fs,ys,bs,n(a,{code:"200"}),xs]),_:1}),n(l,{tag:"h4",title:"Create unrelated return shipment"},{default:s(()=>[n(d,{type:"note"},{default:s(()=>[vs,n(i,{type:"platform",name:"belgie"}),As,n(i,{type:"carrier",name:"bpost"}),Ts]),_:1}),Es,Cs,ws,js,n(a,{code:"200"}),ks]),_:1}),Ps,n(d,{title:"",type:"note"},{default:s(()=>[e("p",null,[Rs,n(i,{type:"shipment_status",id:"1"}),qs])]),_:1}),Ds,e("p",null,[Ss,n(i,{type:"shipment_status",id:"1"}),Os,n(a,{code:"204"}),Ns,n(a,{code:"422"}),Us]),Bs,e("table",null,[e("tbody",null,[Is,Hs,Ls,Ms,Fs,Ys,zs,Ks,e("tr",null,[Gs,e("td",null,[n(a,{code:"204"})])]),Js,e("tr",null,[Vs,e("td",null,[n(a,{code:"4xx"}),Ws])]),Zs])]),Qs,e("p",null,[Xs,$s,eo,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[to]),_:1}),no,so]),oo,n(l,{tag:"h4",title:"Remove a shipment with id 1234."},{default:s(()=>[ao,io,lo,n(a,{code:"204"})]),_:1}),ro,co,e("p",null,[ho,n(a,{code:"404"}),po]),_o,e("table",null,[e("tbody",null,[uo,mo,go,fo,yo,bo,xo,e("tr",null,[vo,e("td",null,[n(a,{code:"200"}),Ao])]),To,e("tr",null,[Eo,e("td",null,[n(a,{code:"4xx"})])]),e("tr",null,[e("td",null,[n(a,{code:"5xx"})])]),Co])]),wo,n(l,{tag:"h4",title:"Generate unrelated return shipment"},{default:s(()=>[jo,ko,Po,n(a,{code:"200"}),Ro,qo]),_:1}),Do,So,Oo,e("p",null,[No,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[Uo]),_:1}),Bo,n(r,{to:"7_A"},{default:s(()=>[Io]),_:1}),Ho]),Lo,e("table",null,[e("tbody",null,[Mo,Fo,Yo,zo,Ko,e("tr",null,[Go,e("td",null,[Jo,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Vo]),_:1})])]),Wo,e("tr",null,[e("td",null,[Zo,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Qo]),_:1})])]),e("tr",null,[e("td",null,[Xo,n(o,{item:"/api-reference/04.data-types#shipment_status"},{default:s(()=>[$o]),_:1})])]),e("tr",null,[e("td",null,[ea,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[ta]),_:1})])]),e("tr",null,[e("td",null,[na,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[sa]),_:1})])]),e("tr",null,[e("td",null,[oa,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[aa]),_:1})])]),e("tr",null,[e("td",null,[ia,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[la]),_:1})])]),e("tr",null,[e("td",null,[ra,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[da]),_:1})])]),e("tr",null,[e("td",null,[ca,n(o,{item:"/api-reference/04.data-types#sort_order"},{default:s(()=>[ha]),_:1})])]),pa,_a,e("tr",null,[ua,e("td",null,[n(a,{code:"200"})])]),ma,ga,e("tr",null,[fa,e("td",null,[n(a,{code:"4xx"})])]),ya])]),ba,e("p",null,[xa,va,Aa,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Ta]),_:1}),Ea,Ca]),e("p",null,[wa,ja,ka,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Pa]),_:1}),Ra,qa]),e("p",null,[Da,Sa,Oa,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Na]),_:1}),Ua,Ba]),e("p",null,[Ia,Ha,La,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ma]),_:1}),Fa,Ya]),e("p",null,[za,Ka,Ga,n(o,{item:"/api-reference/04.data-types#shipment_status"},{default:s(()=>[Ja]),_:1}),Va,Wa]),e("p",null,[Za,Qa,Xa,n(o,{item:"/api-reference/04.data-types#date"},{default:s(()=>[$a]),_:1}),ei,ti]),e("p",null,[ni,si,oi,n(o,{item:"/api-reference/04.data-types#date"},{default:s(()=>[ai]),_:1}),ii,li]),e("p",null,[ri,di,ci,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[hi]),_:1}),pi,_i]),e("p",null,[ui,mi,gi,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[fi]),_:1}),yi,bi]),e("p",null,[xi,vi,Ai,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ti]),_:1}),Ei,Ci,n(r,{to:"7_A"},{default:s(()=>[wi]),_:1}),ji]),e("p",null,[ki,Pi,Ri,n(o,{item:"/api-reference/04.data-types#sort_order"},{default:s(()=>[qi]),_:1}),Di,Si]),Oi,n(l,{tag:"h4",title:"Search for shipments"},{default:s(()=>[Ni,Ui,Bi,Ii,n(a,{code:"200"}),Hi]),_:1}),Li,Mi,e("p",null,[Fi,Yi,zi,Ki,Gi,Ji,Vi,Wi,Zi,Qi,Xi,n(r,{to:"7_P"},{default:s(()=>[$i]),_:1}),el]),tl,e("p",null,[nl,n(a,{code:"4xx"}),sl]),e("p",null,[ol,al,il,n(a,{code:"404"}),ll,n(o,{item:"#10"},{default:s(()=>[rl]),_:1}),dl]),cl,e("table",null,[e("tbody",null,[hl,pl,_l,ul,ml,e("tr",null,[e("td",null,[e("p",null,[gl,n(r,{to:"7_R"},{default:s(()=>[fl]),_:1}),yl])])]),e("tr",null,[e("td",null,[e("p",null,[bl,n(r,{to:"7_R"},{default:s(()=>[xl]),_:1}),vl])])]),Al,e("tr",null,[Tl,e("td",null,[El,n(o,{item:"/api-reference/04.data-types#paper_size"},{default:s(()=>[Cl]),_:1})])]),e("tr",null,[e("td",null,[wl,n(o,{item:"/api-reference/04.data-types#label_position"},{default:s(()=>[jl]),_:1})])]),kl,e("tr",null,[Pl,e("td",null,[n(a,{code:"200"}),Rl])]),e("tr",null,[e("td",null,[n(a,{code:"200"}),ql])]),Dl,e("tr",null,[e("td",null,[n(r,{to:"7_R"},{default:s(()=>[Sl]),_:1})])]),Ol,e("tr",null,[Nl,e("td",null,[n(a,{code:"402"})])]),Ul])]),Bl,e("p",null,[Il,Hl,Ll,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Ml]),_:1}),Fl,Yl]),e("p",null,[zl,Kl,Gl,n(o,{item:"/api-reference/04.data-types#paper_size"},{default:s(()=>[Jl]),_:1}),Vl,Wl]),e("p",null,[Zl,Ql,Xl,n(o,{item:"/api-reference/04.data-types#label_position"},{default:s(()=>[$l]),_:1}),er,tr]),nr,n(l,{tag:"h4",title:"Get Shipment label"},{default:s(()=>[sr,or,ar,n(a,{code:"200"}),ir]),_:1}),n(l,{tag:"h4",title:"Get shipment label download link"},{default:s(()=>[lr,rr,dr,n(a,{code:"200"}),cr]),_:1}),n(l,{tag:"h4",title:"Get shipment label download link to handle multiple labels"},{default:s(()=>[hr,pr,_r,n(a,{code:"200"}),ur]),_:1}),n(l,{tag:"h4",title:"Get shipment label with different format and position"},{default:s(()=>[mr,gr,fr,yr,n(a,{code:"200"}),br]),_:1}),xr,vr,e("p",null,[Ar,n(a,{code:"200"}),Tr,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[Er]),_:1}),Cr,n(r,{to:"7_L"},{default:s(()=>[wr]),_:1}),jr]),kr,e("p",null,[Pr,n(r,{to:"1_D"},{default:s(()=>[Rr]),_:1}),qr]),Dr,e("table",null,[e("tbody",null,[Sr,Or,Nr,Ur,Br,e("tr",null,[Ir,e("td",null,[Hr,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Lr]),_:1})])]),e("tr",null,[e("td",null,[Mr,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Fr]),_:1})])]),e("tr",null,[e("td",null,[Yr,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[zr]),_:1})])]),e("tr",null,[e("td",null,[Kr,n(o,{item:"/api-reference/04.data-types#sort_order"},{default:s(()=>[Gr]),_:1})])]),Jr,Vr,e("tr",null,[Wr,e("td",null,[n(a,{code:"200"})])]),Zr,Qr,e("tr",null,[Xr,e("td",null,[n(a,{code:"4xx"})])]),$r])]),ed,e("p",null,[td,nd,sd,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[od]),_:1}),ad,id]),e("p",null,[ld,rd,dd,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[cd]),_:1}),hd,pd]),e("p",null,[_d,ud,md,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[gd]),_:1}),fd,yd]),e("p",null,[bd,xd,vd,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ad]),_:1}),Td,Ed,n(r,{to:"7_L"},{default:s(()=>[Cd]),_:1})]),e("p",null,[wd,jd,kd,n(o,{item:"/api-reference/04.data-types#sort_order"},{default:s(()=>[Pd]),_:1}),Rd,qd]),e("p",null,[Dd,Sd,Od,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Nd]),_:1}),Ud,Bd]),Id,Hd,n(l,{tag:"null"},{default:s(()=>[Ld,Md,Fd,n(a,{code:"200"}),Yd]),_:1}),zd,e("p",null,[Kd,n(r,{to:"6_B"},{default:s(()=>[Gd]),_:1}),Jd]),e("p",null,[Vd,Wd,Zd,n(i,{type:"package_type",id:"1"}),Qd]),Xd,e("ol",null,[e("li",null,[e("p",null,[$d,n(r,{to:"6_C"},{default:s(()=>[ec]),_:1}),tc])]),e("li",null,[e("p",null,[nc,n(r,{to:"6_H_3"},{default:s(()=>[sc]),_:1}),oc])]),ac]),ic,lc,e("p",null,[rc,n(r,{to:"6_C"},{default:s(()=>[dc]),_:1}),cc]),hc,pc,n(l,{tag:"h4",title:"Create national multi collo shipment"},{default:s(()=>[_c,uc,mc,gc,n(a,{code:"200"}),fc]),_:1}),n(l,{tag:"h4",title:"Add new shipment to existing multi collo shipment"},{default:s(()=>[yc,bc,xc,vc,Ac,Tc]),_:1}),n(l,{tag:"h4",title:"Add existing shipment to existing multi collo shipment"},{default:s(()=>[Ec,Cc,wc,jc,kc,Pc]),_:1}),n(l,{tag:"h4",title:"Delete and remove shipment from multi collo shipment"},{default:s(()=>[Rc,qc,Dc,Sc,Oc,Nc]),_:1}),n(l,{tag:"h4",title:"Remove shipment from multi collo shipment without deletion"},{default:s(()=>[Uc,Bc,Ic,Hc,Lc]),_:1}),n(l,{tag:"h4",title:"Delete and remove shipment from a multi collo shipment via DELETE request"},{default:s(()=>[Mc,Fc,Yc,zc,Kc]),_:1})])}var Qc=p(m,[["render",Gc],["__file","06.shipments.html.vue"]]);export{Qc as default};
