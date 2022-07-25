import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c,a as e,b as n,w as s,e as h,d as t,r as _}from"./app.e0bc0234.js";const u={},p=h('<h3 id="_7-shipment-related-object-definitions" tabindex="-1"><a class="header-anchor" href="#_7-shipment-related-object-definitions" aria-hidden="true">#</a> 7. Shipment related Object Definitions</h3><h4 id="_7-a" tabindex="-1"><a class="header-anchor" href="#_7-a" aria-hidden="true">#</a> 7.A Shipment Object Definition</h4><h5 id="_7-a-1" tabindex="-1"><a class="header-anchor" href="#_7-a-1" aria-hidden="true">#</a> 7.A.1 Overview</h5>',3),g=t("You can create shipments with this object. You can specify multiple address ids in the recipients column to create multiple shipments. If you want to create a return shipment you have to use the "),m=t("ReturnShipment"),f=t(" object."),b=e("strong",null,"barcode",-1),y=e("br",null,null,-1),D=t(" Data type: "),j=t("string"),v=e("br",null,null,-1),x=t(" Required: n/a."),R=e("br",null,null,-1),T=t(" Shipment barcode."),k=e("strong",null,"id",-1),w=e("br",null,null,-1),q=t(" Data type: "),E=t("integer"),S=e("br",null,null,-1),O=t(" Required: n/a."),P=e("br",null,null,-1),A=t(" Shipment id."),N=e("strong",null,"parent_id",-1),L=e("br",null,null,-1),B=t(" Data type: "),H=t("integer"),Y=e("br",null,null,-1),U=t(" Required: no"),M=e("br",null,null,-1),I=t(" The parent shipment. This is used for related return shipment."),C=e("strong",null,"account_id",-1),J=e("br",null,null,-1),z=t(" Data type: "),F=t("integer"),G=e("br",null,null,-1),Z=t(" Required: n/a."),V=e("br",null,null,-1),K=t(" The account id to which this shipment belongs."),W=e("strong",null,"shop_id",-1),X=e("br",null,null,-1),Q=t(" Data type: "),$=t("integer"),ee=e("br",null,null,-1),te=t(" Required: n/a."),ne=e("br",null,null,-1),se=t(" The shop id to which this shipment belongs."),oe=e("strong",null,"reference_identifier",-1),ie=e("br",null,null,-1),le=t(" Data type: "),_e=t("string"),ae=e("br",null,null,-1),de=t(" Required: No."),re=e("br",null,null,-1),ce=t(" Arbitrary reference indentifier to identify this shipment."),he=e("strong",null,"shipment_type",-1),ue=e("br",null,null,-1),pe=t(" Data type: "),ge=t("integer"),me=e("br",null,null,-1),fe=t(" Required: n/a."),be=e("strong",null,"recipient",-1),ye=e("br",null,null,-1),De=t(" Data type: "),je=t("Address"),ve=e("br",null,null,-1),xe=t(" Required: Yes for application/vnd.shipment+json"),Re=e("br",null,null,-1),Te=t(" The recipient address. Use this field when you want to create a shipment for one address."),ke=e("strong",null,"recipients",-1),we=e("br",null,null,-1),qe=t(" Data type: "),Ee=t("array"),Se=t(" of "),Oe=t("Address"),Pe=t(" objects"),Ae=e("br",null,null,-1),Ne=t(" Required: Yes for application/vnd.shipment_recipients+json Use this field when you want to create multiple shipments for multiple addresses."),Le=e("strong",null,"sender",-1),Be=e("br",null,null,-1),He=t(" Data type: "),Ye=t("Address"),Ue=e("br",null,null,-1),Me=t(" Required: n/a."),Ie=e("br",null,null,-1),Ce=t(" The sender of the package. This field is never set."),Je=e("strong",null,"status",-1),ze=e("br",null,null,-1),Fe=t(" Data type: "),Ge=t("shipment_status"),Ze=e("br",null,null,-1),Ve=t(" Required: no"),Ke=e("br",null,null,-1),We=t(" This is the internal shipment status. What we do is filter and translate the shipment status provided by the carrier in order to reduce the number of statuses."),Xe=e("strong",null,"options",-1),Qe=e("br",null,null,-1),$e=t(" Data type: "),et=t("ShipmentOptions"),tt=e("br",null,null,-1),nt=t(" Required: Yes."),st=e("br",null,null,-1),ot=t(" The shipment options."),it=e("strong",null,"pickup",-1),lt=e("br",null,null,-1),_t=t(" Data type: "),at=t("PickupLocation"),dt=e("br",null,null,-1),rt=t(" Required: Yes for options.delivery_type 4."),ct=e("br",null,null,-1),ht=t(" The pickup location for this shipment."),ut=e("strong",null,"customs_declaration",-1),pt=e("br",null,null,-1),gt=t(" Data type: "),mt=t("CustomsDeclaration"),ft=e("br",null,null,-1),bt=t(" Required: yes for non-EU shipments."),yt=e("br",null,null,-1),Dt=t(" The customs declaration information."),jt=e("strong",null,"physical_properties",-1),vt=e("br",null,null,-1),xt=t(" Data type: "),Rt=t("PhysicalProperties"),Tt=e("br",null,null,-1),kt=t(" Required: yes for non-EU and digital stamp "),wt=t("shipment types"),qt=t(" ."),Et=e("br",null,null,-1),St=t(" Shipment physical properties such as dimension, weight etc. This object may be updated when fetching shipment status update from the carrier."),Ot=e("strong",null,"carrier",-1),Pt=e("br",null,null,-1),At=t(" Data type: "),Nt=t("carrier"),Lt=e("br",null,null,-1),Bt=t(" Required: yes."),Ht=e("br",null,null,-1),Yt=t(" The carrier that will deliver the package."),Ut=e("strong",null,"general_settings",-1),Mt=e("br",null,null,-1),It=t(" Data type: "),Ct=t("ShipmentGeneralSettings"),Jt=e("br",null,null,-1),zt=t(" Required: no"),Ft=e("br",null,null,-1),Gt=t(" You can specify general settings for the shipment with this object."),Zt=e("strong",null,"price",-1),Vt=e("br",null,null,-1),Kt=t(" Data type: "),Wt=t("price"),Xt=e("br",null,null,-1),Qt=t(" Required: n/a."),$t=e("br",null,null,-1),en=t(" The shipment price."),tn=e("strong",null,"secondary_shipments",-1),nn=t(" Data type: an array of "),sn=t("shipment"),on=e("br",null,null,-1),ln=t(" Required: no"),_n=e("br",null,null,-1),an=t(" You can specify secondary shipments for the shipment with this object. This property is used to create a multi collo shipment: multiple packages to be delivered to the same address at the same time. Secondary shipment can be passed as empty json objects as all required data will be copied from the main shipment. When data is passed with the secondary shipment this data will be used in favor of the main shipment data."),dn=e("strong",null,"multi_collo_main_shipment_id",-1),rn=t(" Data type: "),cn=t("integer"),hn=e("br",null,null,-1),un=t(" In case of a multi collo shipment this field contains the id of the main shipment."),pn=e("strong",null,"created",-1),gn=e("br",null,null,-1),mn=t(" Data type: "),fn=t("timestamp"),bn=e("br",null,null,-1),yn=t(" Required: n/a."),Dn=e("br",null,null,-1),jn=t(" Date of creation."),vn=e("strong",null,"modified",-1),xn=e("br",null,null,-1),Rn=t(" Data type: "),Tn=t("timestamp"),kn=e("br",null,null,-1),wn=t(" Required: n/a."),qn=e("br",null,null,-1),En=t(" Date of modification."),Sn=e("h5",{id:"_7-a-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-a-2","aria-hidden":"true"},"#"),t(" 7.A.2 Examples")],-1),On=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "reference_identifier": "FOO-333-BAR-42",
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
      "amount": 10000,
      "currency": "EUR"
    },
    "large_format": 0
  },
  "carrier": 1
}
`)])],-1),Pn=e("p",null,"POST example national shipment b",-1),An=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "reference_identifier": "FOO-333-BAR-42",
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
    "only_recipient": 1,
    "signature": 1,
    "return": 1
  },
  "general_settings": {
    "save_recipient_address": 1,
    "disable_auto_detect_pickup": 1,
    "delivery_notification": 1,
    "delivery_notification_email": ["testing@myparcel.nl"],
    "printer_identifier": "printer_id_12"
  },
  "carrier": 1
}
`)])],-1),Nn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
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
    {},
    {}
  ],
  "carrier": 1
}
`)])],-1),Ln=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "reference_identifier": "\u3055\u3044\u305F-\u16B1\u16BE\u16DF/42",
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
`)])],-1),Hn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
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
  "carrier": 1,
  "status": 1,
  "price": {
    "amount": 535,
    "currency": "EUR"
  },
  "barcode": "3SMYPA77773333",
  "created": "2017-01-31 08:00:00",
  "modified": "2017-01-31 09:00:00"
}
`)])],-1),Yn=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
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
    "only_recipient": 1,
    "signature": 1,
    "return": 1
  },
  "sender": {
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
  "carrier": 1,
  "status": 2,
  "price": {
    "amount": 535,
    "currency": "EUR"
  },
  "barcode": "563716278632716817283",
  "created": "2017-01-31 08:00:00",
  "modified": "2017-01-31 09:00:00"
}
`)])],-1),Un=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "id": 12345,
  "account_id": 1,
  "shop_id": 1,
  "shipment_type": 3,
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
  "sender": {
    "cc": "NL",
    "postal_code": "2132JE",
    "city": "Hoofddorp",
    "street": "Antareslaan",
    "number": "31",
    "person": "Mrs. Parcel",
    "company": "MyParcel",
    "email": "testing@myparcel.nl",
    "phone": "12345678"
  },
  "status": 1,
  "options": {
    "package_type": 1,
    "label_description": "My custom description"
  },
  "reference_identifier": "FOO-222-BAR-42",
  "transaction_status": "unpaid",
  "barcode": null,
  "price": {
    "amount": 595,
    "currency": "EUR"
  },
  "region": "NL",
  "payment_status": "unpaid",
  "carrier_id": 1,
  "secondary_shipments": [
    {
      "id": 12346,
      "account_id": 1,
      "shop_id": 1,
      "shipment_type": 3,
      "recipient": {
        "cc": "NL",
        "region": "Zuid-Holland",
        "city": "Hoofddorp",
        "street": "Antareslaan",
        "number": "31",
        "postal_code": "2132JE",
        "person": "Mr. Parcel"
      },
      "sender": {
        "cc": "NL",
        "postal_code": "",
        "city": "Hoofddorp",
        "street": "Antareslaan",
        "number": "2132JE",
        "person": "Frisby Test",
        "company": "Test1",
        "email": "test1@test.nl",
        "phone": "12345678"
      },
      "status": 1,
      "options": {
        "package_type": 1,
        "label_description": "My custom description"
      },
      "reference_identifier": null,
      "transaction_status": "unpaid",
      "price": {
        "amount": 595,
        "currency": "EUR"
      },
      "barcode": "",
      "region": "NL",
      "payment_status": "unpaid",
      "carrier_id": 1,
      "multi_collo_main_shipment_id": 12345
    }
  ],
  "multi_collo_main_shipment_id": 12345
}
`)])],-1),Mn=e("h4",{id:"_7-b",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-b","aria-hidden":"true"},"#"),t(" 7.B Address Object Definition")],-1),In=e("h5",{id:"_7-b-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-b-1","aria-hidden":"true"},"#"),t(" 7.B.1 Overview")],-1),Cn=e("p",null,"This is the adress object",-1),Jn=e("strong",null,"cc",-1),zn=e("br",null,null,-1),Fn=t(" Data type: "),Gn=t("country_code"),Zn=e("br",null,null,-1),Vn=t(" Required: yes."),Kn=e("br",null,null,-1),Wn=t(" The address country code."),Xn=e("strong",null,"region",-1),Qn=e("br",null,null,-1),$n=t(" Data type: "),es=t("string"),ts=e("br",null,null,-1),ns=t(" Required: no."),ss=e("br",null,null,-1),os=t(" The region, department, state or province of the address."),is=e("strong",null,"postal_code",-1),ls=e("br",null,null,-1),_s=t(" Data type: "),as=t("string"),ds=e("br",null,null,-1),rs=t(" Required: Yes for NL and EU destinations except for IE."),cs=e("br",null,null,-1),hs=t(" The address postal code."),us=e("strong",null,"city",-1),ps=e("br",null,null,-1),gs=t(" Data type: "),ms=t("string"),fs=e("br",null,null,-1),bs=t(" Required: yes."),ys=e("br",null,null,-1),Ds=t(" The address city."),js=e("strong",null,"street",-1),vs=e("br",null,null,-1),xs=t(" Data type: "),Rs=t("string"),Ts=e("br",null,null,-1),ks=t(" Required: yes."),ws=e("br",null,null,-1),qs=t(" The address street name. When shipping to an international destination, you may include street number in this field."),Es=e("strong",null,"street_additional_info",-1),Ss=e("br",null,null,-1),Os=t(" Data type: "),Ps=t("string"),As=e("br",null,null,-1),Ns=t(" Required: no."),Ls=e("br",null,null,-1),Bs=t(" Additional information for the street that should not be included in the street field."),Hs=e("strong",null,"number",-1),Ys=e("br",null,null,-1),Us=t(" Data type: "),Ms=t("string"),Is=e("br",null,null,-1),Cs=t(" Required: Yes for domestic shipments in NL and BE."),Js=e("br",null,null,-1),zs=t(" Street number."),Fs=e("strong",null,"number_suffix",-1),Gs=e("br",null,null,-1),Zs=t(" Data type: "),Vs=t("string"),Ks=e("br",null,null,-1),Ws=t(" Required: no"),Xs=e("br",null,null,-1),Qs=t(" Street number suffix."),$s=e("strong",null,"person",-1),eo=e("br",null,null,-1),to=t(" Data type: "),no=t("string"),so=e("br",null,null,-1),oo=t(" Required: yes."),io=e("br",null,null,-1),lo=t(" The person at this address. Up to 40 characters long."),_o=e("strong",null,"company",-1),ao=e("br",null,null,-1),ro=t(" Data type: "),co=t("string"),ho=e("br",null,null,-1),uo=t(" Required: no."),po=e("br",null,null,-1),go=t(" Company name."),mo=e("strong",null,"email",-1),fo=e("br",null,null,-1),bo=t(" Data type: "),yo=t("string"),Do=e("br",null,null,-1),jo=t(" Required: no"),vo=e("br",null,null,-1),xo=t(" The address email."),Ro=e("strong",null,"phone",-1),To=e("br",null,null,-1),ko=t(" Data type: "),wo=t("string"),qo=e("br",null,null,-1),Eo=t(" Required: no."),So=e("br",null,null,-1),Oo=t(" The address phone."),Po=e("h5",{id:"_7-b-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-b-2","aria-hidden":"true"},"#"),t(" 7.B.2 Examples")],-1),Ao=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "cc": "NL",
  "region": "Zuid-Holland",
  "city": "Zoetermeer",
  "street": "Louiarmstrongrode",
  "number": "18",
  "postal_code": "2717NH",
  "person": "Pato otap",
  "phone": "0790880808",
  "email": "pato@otap.nl"
}
`)])],-1),No=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "cc": "NL",
  "region": "Zuid-Holland",
  "city": "Hoofddorp",
  "street": "Antareslaan 31",
  "postal_code": "2132JE",
  "person": "Mr. Parcel",
  "phone": "0233030315",
  "email": "parcel@myparcel.nl"
}
`)])],-1),Lo=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "cc": "NL",
  "region": "Zuid-Holland",
  "city": "Hoofddorp",
  "street": "Antareslaan",
  "number": "31",
  "person": "Jan Peter",
  "company": "MyParcel B.V.",
  "email": "janpeter@bedrijven.nl",
  "phone": "0233030315"
}
`)])],-1),Bo=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "cc": "FR",
  "region": "Seine",
  "city": "Paris",
  "street": "rue du Grenier-Saint-Lazare 22",
  "person": "Claus Stuter",
  "company": "Renault",
  "email": "claus@paris.nl",
  "postal_code": "75008",
  "phone": "0033142723122"
}
`)])],-1),Ho=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "cc": "JP",
  "region": "\u57FC\u7389\u770C",
  "city": "\u3055\u3044\u305F\u307E\u5E02",
  "street": "\u57FC\u7389\u770C\u3055\u3044\u305F\u307E\u5E02\u6D66\u548C\u533A \u5E38\u76E49\uFF0D21\uFF0D21",
  "person": "Tanaka san",
  "company": "\u3055\u3044\u305F\u307E\u56FD\u969B\u30AD\u30EA\u30B9\u30C8\u6559\u4F1A",
  "email": "saitamakyokai@gmail.com",
  "phone": "0081-48-825-6637"
}
`)])],-1),Yo=e("h4",{id:"_7-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-c","aria-hidden":"true"},"#"),t(" 7.C ShipmentOptions Object Definition")],-1),Uo=e("h5",{id:"_7-c-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-c-1","aria-hidden":"true"},"#"),t(" 7.C.1 Overview")],-1),Mo=t("This object contains the shipment options and is embedded in "),Io=t("Shipment"),Co=t(" .options and "),Jo=t("ReturnShipment"),zo=t(" .options."),Fo=e("strong",null,"package_type",-1),Go=e("br",null,null,-1),Zo=t(" Data type: "),Vo=t("package_type"),Ko=e("br",null,null,-1),Wo=t(" Required: yes"),Xo=e("br",null,null,-1),Qo=t(" The package type. For international shipment only "),$o=t(" (package) is allowed."),ei=e("strong",null,"delivery_type",-1),ti=e("br",null,null,-1),ni=t(" Data type: "),si=t("delivery_type"),oi=e("br",null,null,-1),ii=t(" Required: Yes if delivery_date has been specified."),li=e("br",null,null,-1),_i=t(" The delivery name for the package."),ai=e("strong",null,"delivery_date",-1),di=e("br",null,null,-1),ri=t(" Data type: "),ci=t("timestamp"),hi=e("br",null,null,-1),ui=t(" Required: Yes if delivery name has been specified."),pi=e("br",null,null,-1),gi=t(" The delivery date time for this shipment."),mi=e("strong",null,"only_recipient",-1),fi=e("br",null,null,-1),bi=t(" Data type: "),yi=t("boolean"),Di=e("br",null,null,-1),ji=t(" Required: No."),vi=e("br",null,null,-1),xi=t(" Deliver the package to the recipient only."),Ri=e("strong",null,"signature",-1),Ti=e("br",null,null,-1),ki=t(" Data type: "),wi=t("boolean"),qi=e("br",null,null,-1),Ei=t(" Required: No."),Si=e("br",null,null,-1),Oi=t(" Package must be signed for."),Pi=e("strong",null,"return",-1),Ai=e("br",null,null,-1),Ni=t(" Data type: "),Li=t("boolean"),Bi=e("br",null,null,-1),Hi=t(" Required: No."),Yi=e("br",null,null,-1),Ui=t(" Return the package if the recipient is not home."),Mi=e("strong",null,"insurance",-1),Ii=e("br",null,null,-1),Ci=t(" Data type: "),Ji=t("price"),zi=e("br",null,null,-1),Fi=t(" Required: No."),Gi=e("br",null,null,-1),Zi=t(" Insurance price for the package."),Vi=e("strong",null,"large_format",-1),Ki=e("br",null,null,-1),Wi=t(" Data type: "),Xi=t("boolean"),Qi=e("br",null,null,-1),$i=t(" Required: No."),el=e("br",null,null,-1),tl=t(" Large format package."),nl=e("strong",null,"cooled_delivery",-1),sl=e("br",null,null,-1),ol=t(" Data type: "),il=t("boolean"),ll=e("br",null,null,-1),_l=t(" Required: No."),al=e("br",null,null,-1),dl=t(" Cooled_delivery is only valid for cc=NL and with shipment_type 1 or 3."),rl=e("strong",null,"label_description",-1),cl=e("br",null,null,-1),hl=t(" Data type: "),ul=t("string"),pl=e("br",null,null,-1),gl=t(" Required: No."),ml=e("br",null,null,-1),fl=t(" This description will appear on the shipment label. "),bl=e("strong",null,"Note: This will be overridden for return shipment by the following: Retour \u2013 3SMYPAMYPAXXXXXX",-1),yl=e("strong",null,"age_check",-1),Dl=e("br",null,null,-1),jl=t(" Data type: "),vl=t("boolean"),xl=e("br",null,null,-1),Rl=t(" Required: No."),Tl=e("br",null,null,-1),kl=t(" The recipient must sign for the package and must be at least 18 years old."),wl=e("h5",{id:"_7-c-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-c-2","aria-hidden":"true"},"#"),t(" 7.C.2 Example")],-1),ql=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "package_type": 1,
  "only_recipient": 1,
  "signature": 1,
  "return": 1,
  "insurance": {
    "amount": 10000,
    "currency": "EUR"
  },
  "large_format": 0,
  "label_description": "My custom description",
  "age_check":1
}
`)])],-1),El=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "package_type": 1,
  "only_recipient": 0,
  "signature": 1,
  "return": 0,
  "insurance": {
    "amount": 10000,
    "currency": "EUR"
  },
  "label_description": "My custom description"
}
`)])],-1),Sl=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "package_type": 1,
  "only_recipient": 1,
  "signature": 1,
  "return": 1,
  "insurance": {
    "amount": 50000,
    "currency": "EUR"
  },
  "large_format": 0
}
`)])],-1),Ol=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "package_type": 1,
  "only_recipient": 1,
  "signature": 1,
  "return": 1
}
`)])],-1),Pl=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "package_type": 1,
  "delivery_type": 4,
  "delivery_date": "2017-01-12 16:30:00",
  "only_recipient": 0,
  "signature": 1,
  "return": 0
}
`)])],-1),Al=e("h4",{id:"_7-d",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-d","aria-hidden":"true"},"#"),t(" 7.D ShipmentGeneralSettings Object Definition")],-1),Nl=e("h5",{id:"_7-d-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-d-1","aria-hidden":"true"},"#"),t(" 7.D.1 Overview")],-1),Ll=t("You can specify shipment general settings with this object. It is embedded in the "),Bl=t("Shipment"),Hl=t(" .general_settings column."),Yl=e("strong",null,"save_recipient_address",-1),Ul=e("br",null,null,-1),Ml=t(" Data type: "),Il=t("boolean"),Cl=e("br",null,null,-1),Jl=t(" Required: No"),zl=e("br",null,null,-1),Fl=t(" When this setting is true the recipient address will be saved in the address book. "),Gl=e("strong",null,"Only for valid for POST request.",-1),Zl=e("strong",null,"delivery_notification",-1),Vl=e("br",null,null,-1),Kl=t(" Data type: "),Wl=t("boolean"),Xl=e("br",null,null,-1),Ql=t(" Required: No."),$l=e("br",null,null,-1),e_=t(" When this setting is true the Merchant will receive an email notification when the package has been delivered."),t_=e("strong",null,"disable_auto_detect_pickup",-1),n_=e("br",null,null,-1),s_=t(" Data type: "),o_=t("boolean"),i_=e("br",null,null,-1),l_=t(" Required: No."),__=e("br",null,null,-1),a_=t(" When this setting is true MyParcel do not auto detect pickup addresses."),d_=e("strong",null,"delivery_notification_email",-1),r_=e("br",null,null,-1),c_=t(" Data type: "),h_=t("array"),u_=t(" of "),p_=t("string"),g_=e("br",null,null,-1),m_=t(" Required: No."),f_=e("br",null,null,-1),b_=t(" This email addresses that will receive a delivery notification."),y_=e("strong",null,"printer_identifier",-1),D_=e("br",null,null,-1),j_=t(" Data type: "),v_=t("printer_identifier"),x_=t(" of "),R_=t("string"),T_=e("br",null,null,-1),k_=t(" Required: No."),w_=e("br",null,null,-1),q_=t(" In this field you can enter your printer identifier. This field is also sent with the webhook shipment_label_created. You are responsible for controlling your own printer based on a printer identifier."),E_=e("h5",{id:"_7-d-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-d-2","aria-hidden":"true"},"#"),t(" 7.D.2 Example")],-1),S_=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "save_recipient_address": 1,
  "disable_auto_detect_pickup": 1,
  "delivery_notification": 1,
  "delivery_notification_email": ["testing@myparcel.nl"],
  "printer_identifier": "printer_id_12"
}
`)])],-1),O_=e("h4",{id:"_7-e",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-e","aria-hidden":"true"},"#"),t(" 7.E CustomsDeclaration Object Definition")],-1),P_=e("h5",{id:"_7-e-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-e-1","aria-hidden":"true"},"#"),t(" 7.E.1 Overview")],-1),A_=t("This object is embedded in the "),N_=t("Shipment"),L_=t(" object for global shipments and is mandatory for non-EU shipments."),B_=e("strong",null,"contents",-1),H_=e("br",null,null,-1),Y_=t(" Data type: "),U_=t("package_contents"),M_=e("br",null,null,-1),I_=t(" Required: Yes."),C_=e("br",null,null,-1),J_=t(" The name of contents in the package."),z_=e("strong",null,"invoice",-1),F_=e("br",null,null,-1),G_=t(" Data type: "),Z_=t("string"),V_=e("br",null,null,-1),K_=t(" Required: Yes for "),W_=e("strong",null,"commercial goods, commercial samples",-1),X_=t(" and "),Q_=e("strong",null,"return shipment",-1),$_=t(" package contents."),ea=e("br",null,null,-1),ta=t(" The invoice number for the commercial goods or samples of "),na=e("strong",null,"package contents",-1),sa=t(" ."),oa=e("strong",null,"weight",-1),ia=e("br",null,null,-1),la=t(" Data type: "),_a=t("integer"),aa=e("br",null,null,-1),da=t(" Required: Yes."),ra=e("br",null,null,-1),ca=t(" The total weight for all items in whole grams."),ha=e("strong",null,"items",-1),ua=e("br",null,null,-1),pa=t(" Data type: "),ga=t("array"),ma=t(" of "),fa=t("CustomsItem"),ba=t(" objects"),ya=e("br",null,null,-1),Da=t(" Required: Yes."),ja=e("br",null,null,-1),va=t(" An "),xa=t("array"),Ra=t(" containing "),Ta=t("CustomsItem"),ka=t(" objects with description for each item in the package."),wa=e("h5",{id:"_7-e-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-e-2","aria-hidden":"true"},"#"),t(" 7.E.2 Example")],-1),qa=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
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
      "description": "Sample NBG Product",
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
}
`)])],-1),Ea=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "contents": 3,
  "invoice": "4567789004",
  "weight": 30,
  "items": [
    {
      "description": "NIV Product Audio CD",
      "amount": 3,
      "weight": 10,
      "item_value": {
        "amount": 10000,
        "currency": "EUR"
      },
      "classification": "0181",
      "country": "US"
    },
    {
      "description": "Sample JP Product",
      "amount": 10,
      "weight": 20,
      "item_value": {
        "amount": 800000,
        "currency": "YEN"
      },
      "classification": "0181",
      "country": "JP"
    }
  ]
}
`)])],-1),Sa=e("h4",{id:"_7-f",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-f","aria-hidden":"true"},"#"),t(" 7.F CustomsItem Object Definition")],-1),Oa=e("h5",{id:"_7-f-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-f-1","aria-hidden":"true"},"#"),t(" 7.F.1 Overview")],-1),Pa=t("This object contains a declaration for an item in the "),Aa=t("CustomsDeclaration"),Na=t(" object."),La=e("strong",null,"description",-1),Ba=e("br",null,null,-1),Ha=t(" Data type: "),Ya=t("string"),Ua=e("br",null,null,-1),Ma=t(" Required: Yes."),Ia=e("br",null,null,-1),Ca=t(" The description of the item."),Ja=e("strong",null,"amount",-1),za=e("br",null,null,-1),Fa=t(" Data type: "),Ga=t("integer"),Za=e("br",null,null,-1),Va=t(" Required: Yes."),Ka=e("br",null,null,-1),Wa=t(" The amount of this item in the package. The minimum amount is 1."),Xa=e("strong",null,"weight",-1),Qa=e("br",null,null,-1),$a=t(" Data type: "),ed=t("integer"),td=e("br",null,null,-1),nd=t(" Required: Yes."),sd=e("br",null,null,-1),od=t(" The total weight for these items in whole grams. Between 0 and 20000 grams."),id=e("strong",null,"item_value",-1),ld=e("br",null,null,-1),_d=t(" Data type: "),ad=t("price"),dd=e("br",null,null,-1),rd=t(" Required: Yes."),cd=e("br",null,null,-1),hd=t(" Item value"),ud=e("strong",null,"classification",-1),pd=e("br",null,null,-1),gd=t(" Data type: "),md=t("isic_code"),fd=e("br",null,null,-1),bd=t(" Required: Yes."),yd=e("br",null,null,-1),Dd=t(" The International Standard Industry Classification code for this item."),jd=e("strong",null,"country",-1),vd=e("br",null,null,-1),xd=t(" Data type: "),Rd=t("country_code"),Td=e("br",null,null,-1),kd=t(" Required: Yes."),wd=e("br",null,null,-1),qd=t(" The country of origin for this item."),Ed=e("h5",{id:"_7-f-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-f-2","aria-hidden":"true"},"#"),t(" 7.F.2 Example")],-1),Sd=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "description": "Sample NIV Product",
  "amount": 10,
  "weight": 20,
  "item_value": {
    "amount": 7000,
    "currency": "EUR"
  },
  "classification": "0181",
  "country": "NL"
}
`)])],-1),Od=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "description": "Sample NBG Product",
  "amount": 5,
  "weight": 10,
  "item_value": {
    "amount": 1000,
    "currency": "EUR"
  },
  "classification": "0181",
  "country": "BE"
}
`)])],-1),Pd=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "description": "NIV Product Audio CD",
  "amount": 3,
  "weight": 10,
  "item_value": {
    "amount": 10000,
    "currency": "EUR"
  },
  "classification": "0181",
  "country": "US"
}
`)])],-1),Ad=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "description": "Sample JP Product",
  "amount": 10,
  "weight": 20,
  "item_value": {
    "amount": 800000,
    "currency": "YEN"
  },
  "classification": "0181",
  "country": "JP"
}
`)])],-1),Nd=e("h4",{id:"_7-g",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-g","aria-hidden":"true"},"#"),t(" 7.G ShipmentIds Object Definition")],-1),Ld=e("h5",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),Bd=t("This object contains an "),Hd=t("array"),Yd=t(" of "),Ud=t("ShipmentId"),Md=t(" objects."),Id=e("strong",null,"ids",-1),Cd=e("br",null,null,-1),Jd=t(" Data type: "),zd=t("array"),Fd=t(" of "),Gd=t("ShipmentId"),Zd=t(" objects."),Vd=e("br",null,null,-1),Kd=t(" Required: n/a."),Wd=e("br",null,null,-1),Xd=t("array"),Qd=t(" of "),$d=t("ShipmentId"),er=t(" objects."),tr=e("h4",{id:"_7-h",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-h","aria-hidden":"true"},"#"),t(" 7.H ShipmentId Object Definition")],-1),nr=e("h5",{id:"overview-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview-1","aria-hidden":"true"},"#"),t(" Overview")],-1),sr=e("strong",null,"id",-1),or=e("br",null,null,-1),ir=t(" Data type: "),lr=t("integer"),_r=e("br",null,null,-1),ar=t(" Required: n/a."),dr=t("Shipment"),rr=t(" .id "),cr=e("h4",{id:"_7-i",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-i","aria-hidden":"true"},"#"),t(" 7.I ReturnShipment Object Definition")],-1),hr=e("h5",{id:"_7-i-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-i-1","aria-hidden":"true"},"#"),t(" 7.I.1 Overview")],-1),ur=e("p",null,"You can create a return shipment with this object.",-1),pr=e("strong",null,"shop_id",-1),gr=e("br",null,null,-1),mr=t(" Data type: "),fr=t("integer"),br=e("br",null,null,-1),yr=t(" Required: no."),Dr=e("br",null,null,-1),jr=t(" The shop id to which this shipment belongs."),vr=e("strong",null,"parent",-1),xr=e("br",null,null,-1),Rr=t(" Data type: "),Tr=t("integer"),kr=e("br",null,null,-1),wr=t(" Required: Yes."),qr=e("br",null,null,-1),Er=t(" The parent shipment that was initially sent to the consumer."),Sr=e("strong",null,"carrier",-1),Or=e("br",null,null,-1),Pr=t(" Data type: "),Ar=t("carrier"),Nr=e("br",null,null,-1),Lr=t(" Required: Yes."),Br=e("br",null,null,-1),Hr=t(" The carrier that will deliver the package."),Yr=e("strong",null,"email",-1),Ur=e("br",null,null,-1),Mr=t(" Data type: "),Ir=t("string"),Cr=e("br",null,null,-1),Jr=t(" Required: no."),zr=e("br",null,null,-1),Fr=t(" The email address to send the return shipment email to."),Gr=e("strong",null,"name",-1),Zr=e("br",null,null,-1),Vr=t(" Data type: "),Kr=t("string"),Wr=e("br",null,null,-1),Xr=t(" Required: Yes."),Qr=e("br",null,null,-1),$r=t(" The name to include in the email."),ec=e("strong",null,"options",-1),tc=e("br",null,null,-1),nc=t(" Data type: "),sc=t("ShipmentOptions"),oc=e("br",null,null,-1),ic=t(" Required: no."),lc=e("br",null,null,-1),_c=t(" The shipment options. If this is not provided then the default shop return shipment options are used."),ac=e("strong",null,"general_settings",-1),dc=e("br",null,null,-1),rc=t(" Data type: "),cc=t("ShipmentGeneralSettings"),hc=e("br",null,null,-1),uc=t(" Required: no"),pc=e("br",null,null,-1),gc=t(" You can specify general settings for the shipment with this object. For return shipments only the "),mc=t("printer_identifier"),fc=t(" property is accepted."),bc=e("h5",{id:"_7-i-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-i-2","aria-hidden":"true"},"#"),t(" 7.I.2 Example")],-1),yc=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "parent": 123456,
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
  },
  "general_settings": {
    "printer_identifier": "printer_id_12"
  }
}
`)])],-1),Dc=e("h4",{id:"_7-j",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-j","aria-hidden":"true"},"#"),t(" 7.J UnrelatedReturnShipment Object Definition")],-1),jc=e("h5",{id:"_7-j-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-j-1","aria-hidden":"true"},"#"),t(" 7.J.1 Overview")],-1),vc=e("p",null,"You can create an unrelated return shipment with this object.",-1),xc=e("strong",null,"shop_id",-1),Rc=e("br",null,null,-1),Tc=t(" Data type: "),kc=t("integer"),wc=e("br",null,null,-1),qc=t(" Required: No."),Ec=e("br",null,null,-1),Sc=t(" The shop id to which this shipment belongs."),Oc=e("strong",null,"carrier",-1),Pc=e("br",null,null,-1),Ac=t(" Data type: "),Nc=t("carrier"),Lc=e("br",null,null,-1),Bc=t(" Required: Yes."),Hc=e("br",null,null,-1),Yc=t(" The carrier that will deliver the package."),Uc=e("strong",null,"email",-1),Mc=e("br",null,null,-1),Ic=t(" Data type: "),Cc=t("string"),Jc=e("br",null,null,-1),zc=t(" Required: Yes."),Fc=e("br",null,null,-1),Gc=t(" The email to send the return shipment email to."),Zc=e("strong",null,"name",-1),Vc=e("br",null,null,-1),Kc=t(" Data type: "),Wc=t("string"),Xc=e("br",null,null,-1),Qc=t(" Required: Yes."),$c=e("br",null,null,-1),eh=t(" The name to include in the email."),th=e("strong",null,"sender",-1),nh=e("br",null,null,-1),sh=t(" Data type: "),oh=t("Address"),ih=e("br",null,null,-1),lh=t(" Required: No."),_h=e("br",null,null,-1),ah=t(" The sender where the package comes from."),dh=e("strong",null,"options",-1),rh=e("br",null,null,-1),ch=t(" Data type: "),hh=t("ShipmentOptions"),uh=e("br",null,null,-1),ph=t(" Required: No."),gh=e("br",null,null,-1),mh=t(" The shipment options. If this is not provided then the default shop returnshipment options are used."),fh=e("strong",null,"general_settings",-1),bh=e("br",null,null,-1),yh=t(" Data type: "),Dh=t("ShipmentGeneralSettings"),jh=e("br",null,null,-1),vh=t(" Required: no"),xh=e("br",null,null,-1),Rh=t(" You can specify general settings for the shipment with this object. For return shipments only the "),Th=t("printer_identifier"),kh=t(" property is accepted."),wh=e("h5",{id:"_7-j-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-j-2","aria-hidden":"true"},"#"),t(" 7.J.2 Example")],-1),qh=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "carrier": 1,
  "email": "testing@myparcel.nl",
  "name": "Mr. Parcel",
  "sender": {
    "cc": "NL",
    "city": "Hoofddorp",
    "street": "Antareslaan",
    "number": "31",
    "postal_code": "2132 JE",
    "email": "parcel@myparcel.nl",
    "person": "Mr. Parcel",
    "street_additional_info": "",
    "number_suffix": "",
    "company": "MyParcel B.V.",
    "phone": "0118418888"
  },
  "options": {
    "package_type": 1,
    "only_recipient": 0,
    "signature": 1,
    "return": 0,
    "insurance": {
      "amount": 10000,
      "currency": "EUR"
    }
  },
  "general_settings": {
    "printer_identifier": "printer_id_12"
  }
}
`)])],-1),Eh=e("h4",{id:"_7-k",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-k","aria-hidden":"true"},"#"),t(" 7.K DownloadUrl Object Definition")],-1),Sh=e("h5",{id:"_7-k-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-k-1","aria-hidden":"true"},"#"),t(" 7.K.1 Overview")],-1),Oh=e("p",null,"This is the download url object.",-1),Ph=e("strong",null,"link",-1),Ah=e("br",null,null,-1),Nh=t(" Data type: "),Lh=t("string"),Bh=e("br",null,null,-1),Hh=t(" Required: Yes."),Yh=e("br",null,null,-1),Uh=t(" The url to generate an unrelated return shipment"),Mh=e("h5",{id:"_7-k-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-k-2","aria-hidden":"true"},"#"),t(" 7.K.2 Example")],-1),Ih=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "link": "https://backoffice.myparcel.nl/retour/8005ebb27d55425c5eaf2dff2fa41147"
}
`)])],-1),Ch=e("h4",{id:"_7-l",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-l","aria-hidden":"true"},"#"),t(" 7.L TrackTrace Object Definition")],-1),Jh=e("h5",{id:"_7-l-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-l-1","aria-hidden":"true"},"#"),t(" 7.L.1 Overview")],-1),zh=e("p",null,"This is the track & trace object.",-1),Fh=e("strong",null,"shipment_id",-1),Gh=e("br",null,null,-1),Zh=t(" Data type: "),Vh=t("integer"),Kh=e("strong",null,"code",-1),Wh=e("br",null,null,-1),Xh=t(" Data type: "),Qh=t("string"),$h=e("strong",null,"description",-1),eu=e("br",null,null,-1),tu=t(" Data type: "),nu=t("description"),su=e("strong",null,"time",-1),ou=e("br",null,null,-1),iu=t(" Data type: "),lu=t("time"),_u=e("strong",null,"link_consumer_portal",-1),au=e("br",null,null,-1),du=t(" Data type: "),ru=t("string"),cu=e("br",null,null,-1),hu=t(" URL for custom track and trace page. More information about this service is found "),uu=t("here"),pu=t(" . If the consumer portal is turned off, the carrier tracking page is used. You can also pass a language parameter: ?lang=en_GB ."),gu=e("strong",null,"link_tracktrace",-1),mu=e("br",null,null,-1),fu=t(" Data type: "),bu=t("string"),yu=e("br",null,null,-1),Du=t(" Carrier tracking page"),ju=e("strong",null,"recipient",-1),vu=e("br",null,null,-1),xu=t(" Data type: "),Ru=t("Address"),Tu=e("strong",null,"sender",-1),ku=e("br",null,null,-1),wu=t(" Data type: "),qu=t("Address"),Eu=e("strong",null,"options",-1),Su=e("br",null,null,-1),Ou=t(" Data type: "),Pu=t("ShipmentOptions"),Au=e("strong",null,"pickup",-1),Nu=e("br",null,null,-1),Lu=t(" Data type: "),Bu=t("PickupLocation"),Hu=e("strong",null,"delayed",-1),Yu=e("br",null,null,-1),Uu=t(" Data type: "),Mu=t("boolean"),Iu=e("br",null,null,-1),Cu=t(" Indicates whether the current event code means the shipment has been delayed."),Ju=e("strong",null,"location",-1),zu=e("br",null,null,-1),Fu=t(" Data type: "),Gu=t("TrackTraceLocation"),Zu=e("strong",null,"status",-1),Vu=e("br",null,null,-1),Ku=t(" Data type: "),Wu=t("TrackTraceStatus"),Xu=e("strong",null,"history",-1),Qu=e("br",null,null,-1),$u=t(" Data type: "),e1=t("TrackTraceHistory"),t1=e("strong",null,"delivery_moment_type",-1),n1=e("br",null,null,-1),s1=t(" Data type: "),o1=t("string"),i1=e("br",null,null,-1),l1=t(" Depending on the status of the shipment `expected` or `estimated`"),_1=e("strong",null,"delivery_moment",-1),a1=e("br",null,null,-1),d1=t(" Data type: "),r1=t("DeliveryMoment"),c1=e("h5",{id:"_7-l-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-l-2","aria-hidden":"true"},"#"),t(" 7.L.2 Example")],-1),h1=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "tracktraces": [
      {
        "shipment_id": 43393092,
        "code": "I01",
        "description": "Zending bezorgd",
        "time": "2019-02-16 15:09:53",
        "link_consumer_portal": "https://yoursubomain.myparcel.me/track-trace/3SMYPA126329191/2182KD/NL",
        "link_tracktrace": "https://postnl.nl/tracktrace/?B=3SMYPA126329190&P=2182KD&D=NL&T=C&L=NL",
        "recipient": {
          "cc": "NL",
          "postal_code": "2231je",
          "city": "Hillegom",
          "street": "Brouwerlaan",
          "number": "12",
          "number_suffix": "",
          "person": "Elma Koen"
        },
        "sender": {
          "cc": "NL",
          "postal_code": "4337WV",
          "city": "Middelburg",
          "street": "Podium",
          "number": "3",
          "person": "Tamara Bosman",
          "company": "Skin Jewelry",
          "email": "tamluca@zeelandnet.nl",
          "phone": "0118418888"
        },
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
          "cooled_delivery": 0,
          "age_check": 0
        },
        "pickup": null,
        "delayed": false,
        "location": {
          "name": "Depot Den Bosch",
          "cc": "NL",
          "city": "S-Hertogenbosch",
          "postal_code": "5222AL",
          "street": "Ketelaarskampweg",
          "number": "7",
          "number_suffix": null,
          "longitude": 5.27349901,
          "latitude": 51.70326781
        },
        "status": {
          "current": 7,
          "main": "delivered",
          "final": true
        },
        "history": [],
        "delivery_moment_type": "estimated",
        "delivery_moment": {
          "start": {
            "date": "2019-02-19 17:15:00.000000",
            "timezone_type": 3,
            "timezone": "Europe/Amsterdam"
          },
          "end": {
            "date": "2019-02-19 19:45:00.000000",
            "timezone_type": 3,
            "timezone": "Europe/Amsterdam"
          }
        }
      }
    ]
  }
}
`)])],-1),u1=e("h4",{id:"_7-m",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-m","aria-hidden":"true"},"#"),t(" 7.M TrackTraceHistory Object Definition")],-1),p1=e("h5",{id:"_7-m-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-m-1","aria-hidden":"true"},"#"),t(" 7.M.1 Overview")],-1),g1=e("p",null,"This is the tracktrace history object.",-1),m1=e("strong",null,"code",-1),f1=e("br",null,null,-1),b1=t(" Data type: "),y1=t("string"),D1=e("br",null,null,-1),j1=t(" Required: n/a."),v1=e("strong",null,"description",-1),x1=e("br",null,null,-1),R1=t(" Data type: "),T1=t("string"),k1=e("br",null,null,-1),w1=t(" Required: n/a."),q1=e("strong",null,"time",-1),E1=e("br",null,null,-1),S1=t(" Data type: "),O1=t("time"),P1=e("br",null,null,-1),A1=t(" Required: n/a."),N1=e("strong",null,"delayed",-1),L1=e("br",null,null,-1),B1=t(" Data type: "),H1=t("boolean"),Y1=e("br",null,null,-1),U1=t(" Indicates whether the current event code means the shipment has been delayed."),M1=e("strong",null,"location",-1),I1=e("br",null,null,-1),C1=t(" Data type: "),J1=t("TrackTraceLocation"),z1=e("h5",{id:"_7-m-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-m-2","aria-hidden":"true"},"#"),t(" 7.M.2 Example")],-1),F1=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "code": "C3",
  "description": "The package is at the sorting center",
  "time": "2015-01-02 05:00:00",
  "delayed": false,
  "location": {
    "name": "Depot Den Bosch",
    "cc": "NL",
    "city": "S-Hertogenbosch",
    "postal_code": "5222AL",
    "street": "Ketelaarskampweg",
    "number": "7",
    "number_suffix": null,
    "longitude": 5.27349901,
    "latitude": 51.70326781
  }
}
`)])],-1),G1=e("h4",{id:"_7-n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-n","aria-hidden":"true"},"#"),t(" 7.N PhysicalProperties Object Definition")],-1),Z1=e("h5",{id:"_7-n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-n-1","aria-hidden":"true"},"#"),t(" 7.N.1 Overview")],-1),V1=t("This is the physical properties object, which is required for non-EU and digital stamp shipments. "),K1=t("Note: Weight is the only available property for digital stamps ( "),W1=t("package_type"),X1=t(" 4)"),Q1=e("strong",null,"carrier_height",-1),$1=e("br",null,null,-1),ep=t(" Data type: "),tp=t("integer"),np=e("br",null,null,-1),sp=t(" Required: n/a."),op=e("strong",null,"carrier_width",-1),ip=e("br",null,null,-1),lp=t(" Data type: "),_p=t("integer"),ap=e("br",null,null,-1),dp=t(" Required: n/a."),rp=e("strong",null,"carrier_weight",-1),cp=e("br",null,null,-1),hp=t(" Data type: "),up=t("integer"),pp=e("br",null,null,-1),gp=t(" Required: n/a."),mp=e("strong",null,"carrier_length",-1),fp=e("br",null,null,-1),bp=t(" Data type: "),yp=t("integer"),Dp=e("br",null,null,-1),jp=t(" Required: n/a."),vp=e("strong",null,"carrier_volume",-1),xp=e("br",null,null,-1),Rp=t(" Data type: "),Tp=t("integer"),kp=e("br",null,null,-1),wp=t(" Required: n/a."),qp=e("strong",null,"height",-1),Ep=e("br",null,null,-1),Sp=t(" Data type: "),Op=t("integer"),Pp=e("br",null,null,-1),Ap=t(" Required: n/a."),Np=e("strong",null,"width",-1),Lp=e("br",null,null,-1),Bp=t(" Data type: "),Hp=t("integer"),Yp=e("br",null,null,-1),Up=t(" Required: n/a."),Mp=e("strong",null,"length",-1),Ip=e("br",null,null,-1),Cp=t(" Data type: "),Jp=t("integer"),zp=e("br",null,null,-1),Fp=t(" Required: n/a."),Gp=e("strong",null,"volume",-1),Zp=e("br",null,null,-1),Vp=t(" Data type: "),Kp=t("integer"),Wp=e("br",null,null,-1),Xp=t(" Required: n/a."),Qp=e("strong",null,"weight",-1),$p=e("br",null,null,-1),e0=t(" Data type: "),t0=t("integer"),n0=e("br",null,null,-1),s0=t(" Required: n/a."),o0=e("h5",{id:"_7-n-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-n-2","aria-hidden":"true"},"#"),t(" 7.N.2 Example")],-1),i0=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "weight": 30
}
`)])],-1),l0=e("h4",{id:"_7-o",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-o","aria-hidden":"true"},"#"),t(" 7.O PickupLocation Object Definition")],-1),_0=e("h5",{id:"_7-o-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-o-1","aria-hidden":"true"},"#"),t(" 7.O.1 Overview")],-1),a0=e("p",null,"This is the pickup location object.",-1),d0=e("strong",null,"city",-1),r0=e("br",null,null,-1),c0=t(" Data type: "),h0=t("string"),u0=e("br",null,null,-1),p0=t(" Required: n/a."),g0=e("strong",null,"location_name",-1),m0=e("br",null,null,-1),f0=t(" Data type: "),b0=t("string"),y0=e("br",null,null,-1),D0=t(" Required: n/a."),j0=e("strong",null,"number",-1),v0=e("br",null,null,-1),x0=t(" Data type: "),R0=t("string"),T0=e("br",null,null,-1),k0=t(" Required: n/a."),w0=e("strong",null,"postal_code",-1),q0=e("br",null,null,-1),E0=t(" Data type: "),S0=t("string"),O0=e("br",null,null,-1),P0=t(" Required: n/a."),A0=e("strong",null,"street",-1),N0=e("br",null,null,-1),L0=t(" Data type: "),B0=t("string"),H0=e("br",null,null,-1),Y0=t(" Required: n/a."),U0=e("strong",null,"location_code",-1),M0=e("br",null,null,-1),I0=t(" Data type: "),C0=t("string"),J0=e("br",null,null,-1),z0=t(" Required: n/a."),F0=e("strong",null,"retail_network_id",-1),G0=e("br",null,null,-1),Z0=t(" Data type: "),V0=t("string"),K0=e("br",null,null,-1),W0=t(" Required: n/a."),X0=e("h5",{id:"_7-o-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-o-2","aria-hidden":"true"},"#"),t(" 7.O.2 Example")],-1),Q0=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "postal_code": "2132BH",
  "street": "Burgemeester van Stamplein",
  "city": "Hoofddorp",
  "number": "270",
  "location_name": "Albert Heijn"
}
`)])],-1),$0=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "city": "ANTWERPEN",
  "street": "HOOGSTRAAT",
  "postal_code": "2000",
  "number": "75",
  "location_code": "BE0Q07",
  "retail_network_id": "LD-01",
  "location_name": "K&J TRADING"
}
`)])],-1),eg=e("h4",{id:"_7-p",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-p","aria-hidden":"true"},"#"),t(" 7.P PaymentInstructions Object Definition")],-1),tg=e("h5",{id:"_7-p-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-p-1","aria-hidden":"true"},"#"),t(" 7.P.1 Overview")],-1),ng=e("p",null,"This is the payment instruction object.",-1),sg=e("strong",null,"id",-1),og=e("br",null,null,-1),ig=t(" Data type: "),lg=t("string"),_g=e("br",null,null,-1),ag=t(" Required: n/a."),dg=e("strong",null,"hash",-1),rg=e("br",null,null,-1),cg=t(" Data type: "),hg=t("string"),ug=e("br",null,null,-1),pg=t(" Required: n/a."),gg=e("strong",null,"invoices",-1),mg=e("br",null,null,-1),fg=t(" Data type: "),bg=t("Invoice"),yg=e("br",null,null,-1),Dg=t(" Required: n/a."),jg=e("strong",null,"name",-1),vg=e("br",null,null,-1),xg=t(" Data type: "),Rg=t("integer"),Tg=e("br",null,null,-1),kg=t(" Required: n/a."),wg=e("strong",null,"notification_hash",-1),qg=e("br",null,null,-1),Eg=t(" Data type: "),Sg=t("string"),Og=e("br",null,null,-1),Pg=t(" Required: n/a."),Ag=e("strong",null,"original_notification_hash",-1),Ng=e("br",null,null,-1),Lg=t(" Data type: "),Bg=t("string"),Hg=e("br",null,null,-1),Yg=t(" Required: n/a."),Ug=e("strong",null,"payment_url",-1),Mg=e("br",null,null,-1),Ig=t(" Data type: "),Cg=t("string"),Jg=e("br",null,null,-1),zg=t(" Required: n/a."),Fg=e("strong",null,"paid",-1),Gg=e("br",null,null,-1),Zg=t(" Data type: "),Vg=t("boolean"),Kg=e("br",null,null,-1),Wg=t(" Required: n/a."),Xg=e("strong",null,"price",-1),Qg=e("br",null,null,-1),$g=t(" Data type: "),em=t("price"),tm=e("br",null,null,-1),nm=t(" Required: n/a."),sm=e("h5",{id:"_7-p-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-p-2","aria-hidden":"true"},"#"),t(" 7.P.2 Example")],-1),om=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "id": "93c8533d3744eaf4a24a119f068019dcfbf97551",
  "hash": "93c8533d3744eaf4a24a119f068019dcfbf97551",
  "invoices": {
    "id": 1334092,
    "number": "111704089216",
    "status": 102
  },
  "name": 1,
  "notification_hash": "27eecee49d917d9ea2700ef5ccb59d28849a8bf3",
  "original_notification_hash": "27eecee49d917d9ea2700ef5ccb59d28849a8bf3",
  "payment_url": "https://pay.multisafepay.com/pay/?transaction=25cOdyun01THR2ZpozaR5KfNPPrLCzBSFYq&lang=nl_NL",
  "paid": 0,
  "price": {
    "amount": 911,
    "currency": "EUR"
  }
}
`)])],-1),im=e("h4",{id:"_7-q",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-q","aria-hidden":"true"},"#"),t(" 7.Q Invoice Object Definition")],-1),lm=e("h5",{id:"_7-q-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-q-1","aria-hidden":"true"},"#"),t(" 7.Q.1 Overview")],-1),_m=e("p",null,"This is the invoice object.",-1),am=e("strong",null,"id",-1),dm=e("br",null,null,-1),rm=t(" Data type: "),cm=t("integer"),hm=e("br",null,null,-1),um=t(" Required: n/a."),pm=e("strong",null,"number",-1),gm=e("br",null,null,-1),mm=t(" Data type: "),fm=t("string"),bm=e("br",null,null,-1),ym=t(" Required: n/a."),Dm=e("strong",null,"status",-1),jm=e("br",null,null,-1),vm=t(" Data type: "),xm=t("integer"),Rm=e("br",null,null,-1),Tm=t(" Required: n/a."),km=e("h5",{id:"_7-q-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-q-2","aria-hidden":"true"},"#"),t(" 7.Q.2 Example")],-1),wm=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "id": 1334092,
  "number": "111704089216",
  "status": 102
}
`)])],-1),qm=e("h4",{id:"_7-r",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-r","aria-hidden":"true"},"#"),t(" 7.R ShipmentLabelDownloadLink Object Definition")],-1),Em=e("h5",{id:"_7-r-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-r-1","aria-hidden":"true"},"#"),t(" 7.R.1 Overview")],-1),Sm=e("p",null,"This is the shipment label download link object.",-1),Om=e("strong",null,"url",-1),Pm=e("br",null,null,-1),Am=t(" Data type: "),Nm=t("string"),Lm=e("br",null,null,-1),Bm=t(" Required: n/a."),Hm=e("h5",{id:"_7-r-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-r-2","aria-hidden":"true"},"#"),t(" 7.R.2 Example")],-1),Ym=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "url": "https://api.myparcel.nl/pdfs/461efc8b5c7e71dbd0c39a25067bda9455b0ca5a"
}
`)])],-1),Um=e("h4",{id:"_7-s",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-s","aria-hidden":"true"},"#"),t(" 7.S TrackTraceStatus Object Definition")],-1),Mm=e("h5",{id:"_7-s-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-s-1","aria-hidden":"true"},"#"),t(" 7.S.1 Overview")],-1),Im=e("p",null,"An object with a current status, main and final.",-1),Cm=e("strong",null,"current",-1),Jm=e("br",null,null,-1),zm=t(" Data type: "),Fm=t("shipment_status"),Gm=e("strong",null,"main",-1),Zm=e("br",null,null,-1),Vm=t(" Data type: "),Km=t("main"),Wm=e("strong",null,"final",-1),Xm=e("br",null,null,-1),Qm=t(" Data type: "),$m=t("boolean"),ef=e("br",null,null,-1),tf=t(" When `true` no new statuses are expected"),nf=e("h5",{id:"_7-s-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-s-2","aria-hidden":"true"},"#"),t(" 7.S.2 Example")],-1),sf=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "status": {
    "current": 7,
    "main": "delivered",
    "final": true
  }
}
`)])],-1),of=e("h4",{id:"_7-t",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-t","aria-hidden":"true"},"#"),t(" 7.T DeliveryMoment Object Definition")],-1),lf=e("h5",{id:"_7-t-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-t-1","aria-hidden":"true"},"#"),t(" 7.T.1 Overview")],-1),_f=e("p",null,"An object with a start and end DateTime.",-1),af=e("strong",null,"start",-1),df=e("br",null,null,-1),rf=t(" Data type: "),cf=t("DateTimeStartEnd"),hf=e("strong",null,"end",-1),uf=e("br",null,null,-1),pf=t(" Data type: "),gf=t("DateTimeStartEnd"),mf=e("h5",{id:"_7-t-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-t-2","aria-hidden":"true"},"#"),t(" 7.T.2 Example")],-1),ff=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "delivery_moment": {
    "start": {
      "date": "2019-02-19 17:15:00.000000",
      "timezone_type": 3,
      "timezone": "Europe/Amsterdam"
    },
    "end": {
      "date": "2019-02-19 19:45:00.000000",
      "timezone_type": 3,
      "timezone": "Europe/Amsterdam"
    }
  }
}
`)])],-1),bf=e("h4",{id:"_7-u",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-u","aria-hidden":"true"},"#"),t(" 7.U DateTimeStartEnd Object Definition")],-1),yf=e("h5",{id:"_7-u-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-u-1","aria-hidden":"true"},"#"),t(" 7.U.1 Overview")],-1),Df=e("p",null,"An object with a date, timezone_type and timezone.",-1),jf=e("strong",null,"date",-1),vf=e("br",null,null,-1),xf=t(" Data type: "),Rf=t("timestamp"),Tf=e("strong",null,"timezone_type",-1),kf=e("br",null,null,-1),wf=t(" Data type: "),qf=t("integer"),Ef=e("strong",null,"timezone",-1),Sf=e("br",null,null,-1),Of=t(" Data type: "),Pf=t("string"),Af=e("h5",{id:"_7-u-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-u-2","aria-hidden":"true"},"#"),t(" 7.U.2 Example")],-1),Nf=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "date": "2019-02-19 17:15:00.000000",
  "timezone_type": 3,
  "timezone": "Europe/Amsterdam"
}
`)])],-1),Lf=e("h4",{id:"_7-v",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-v","aria-hidden":"true"},"#"),t(" 7.V TrackTraceLocation Object Definition")],-1),Bf=e("h5",{id:"_7-v-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-v-1","aria-hidden":"true"},"#"),t(" 7.V.1 Overview")],-1),Hf=e("p",null,"An object with a location where the track and trace event took place. This data is only available when it has been provided by the carrier of the shipment.",-1),Yf=e("strong",null,"name",-1),Uf=e("br",null,null,-1),Mf=t(" Data type: "),If=t("string"),Cf=e("br",null,null,-1),Jf=t(" nullable: false"),zf=e("strong",null,"cc",-1),Ff=e("br",null,null,-1),Gf=t(" Data type: "),Zf=t("string"),Vf=e("br",null,null,-1),Kf=t(" nullable: true"),Wf=e("strong",null,"city",-1),Xf=e("br",null,null,-1),Qf=t(" Data type: "),$f=t("string"),eb=e("br",null,null,-1),tb=t(" nullable: true"),nb=e("strong",null,"postal_code",-1),sb=e("br",null,null,-1),ob=t(" Data type: "),ib=t("string"),lb=e("br",null,null,-1),_b=t(" nullable: true"),ab=e("strong",null,"street",-1),db=e("br",null,null,-1),rb=t(" Data type: "),cb=t("string"),hb=e("br",null,null,-1),ub=t(" nullable: true"),pb=e("strong",null,"number",-1),gb=e("br",null,null,-1),mb=t(" Data type: "),fb=t("string"),bb=e("br",null,null,-1),yb=t(" nullable: true"),Db=e("strong",null,"number_suffix",-1),jb=e("br",null,null,-1),vb=t(" Data type: "),xb=t("string"),Rb=e("br",null,null,-1),Tb=t(" nullable: true"),kb=e("strong",null,"longitude",-1),wb=e("br",null,null,-1),qb=t(" Data type: "),Eb=t("float"),Sb=e("br",null,null,-1),Ob=t(" nullable: true"),Pb=e("strong",null,"latitude",-1),Ab=e("br",null,null,-1),Nb=t(" Data type: "),Lb=t("float"),Bb=e("br",null,null,-1),Hb=t(" nullable: true"),Yb=e("h5",{id:"_7-v-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-v-2","aria-hidden":"true"},"#"),t(" 7.V.2 Example")],-1),Ub=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "name": "Depot Den Bosch",
  "cc": "NL",
  "city": "S-Hertogenbosch",
  "postal_code": "5222AL",
  "street": "Ketelaarskampweg",
  "number": "7",
  "number_suffix": null,
  "longitude": 5.27349901,
  "latitude": 51.70326781
}
`)])],-1);function Mb(Ib,Cb){const l=_("ApiLink"),o=_("AutoLink"),i=_("DetailsExpand"),a=_("DataType");return r(),c("div",null,[p,e("p",null,[g,n(l,{to:"7_I"},{default:s(()=>[m]),_:1}),f]),e("p",null,[b,y,D,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[j]),_:1}),v,x,R,T]),e("p",null,[k,w,q,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[E]),_:1}),S,O,P,A]),e("p",null,[N,L,B,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[H]),_:1}),Y,U,M,I]),e("p",null,[C,J,z,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[F]),_:1}),G,Z,V,K]),e("p",null,[W,X,Q,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[$]),_:1}),ee,te,ne,se]),e("p",null,[oe,ie,le,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[_e]),_:1}),ae,de,re,ce]),e("p",null,[he,ue,pe,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[ge]),_:1}),me,fe]),e("p",null,[be,ye,De,n(l,{to:"7_B"},{default:s(()=>[je]),_:1}),ve,xe,Re,Te]),e("p",null,[ke,we,qe,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[Ee]),_:1}),Se,n(l,{to:"7_B"},{default:s(()=>[Oe]),_:1}),Pe,Ae,Ne]),e("p",null,[Le,Be,He,n(l,{to:"7_B"},{default:s(()=>[Ye]),_:1}),Ue,Me,Ie,Ce]),e("p",null,[Je,ze,Fe,n(o,{item:"/api-reference/04.data-types#shipment_status"},{default:s(()=>[Ge]),_:1}),Ze,Ve,Ke,We]),e("p",null,[Xe,Qe,$e,n(l,{to:"7_C"},{default:s(()=>[et]),_:1}),tt,nt,st,ot]),e("p",null,[it,lt,_t,n(l,{to:"7_O"},{default:s(()=>[at]),_:1}),dt,rt,ct,ht]),e("p",null,[ut,pt,gt,n(l,{to:"7_E"},{default:s(()=>[mt]),_:1}),ft,bt,yt,Dt]),e("p",null,[jt,vt,xt,n(l,{to:"7_N"},{default:s(()=>[Rt]),_:1}),Tt,kt,n(l,{to:"6-A_1"},{default:s(()=>[wt]),_:1}),qt,Et,St]),e("p",null,[Ot,Pt,At,n(o,{item:"/api-reference/04.data-types#carrier"},{default:s(()=>[Nt]),_:1}),Lt,Bt,Ht,Yt]),e("p",null,[Ut,Mt,It,n(l,{to:"7_D"},{default:s(()=>[Ct]),_:1}),Jt,zt,Ft,Gt]),e("p",null,[Zt,Vt,Kt,n(o,{item:"/api-reference/04.data-types#price"},{default:s(()=>[Wt]),_:1}),Xt,Qt,$t,en]),e("p",null,[tn,nn,n(l,{to:"7_A"},{default:s(()=>[sn]),_:1}),on,ln,_n,an]),e("p",null,[dn,rn,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[cn]),_:1}),hn,un]),e("p",null,[pn,gn,mn,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[fn]),_:1}),bn,yn,Dn,jn]),e("p",null,[vn,xn,Rn,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[Tn]),_:1}),kn,wn,qn,En]),Sn,n(i,{tag:"h4",title:"POST example national shipment"},{default:s(()=>[On,Pn,An]),_:1}),n(i,{tag:"h4",title:"POST example national multi collo shipment"},{default:s(()=>[Nn]),_:1}),n(i,{tag:"h4",title:"POST example international shipment"},{default:s(()=>[Ln]),_:1}),n(i,{tag:"h4",title:"POST example pickup location"},{default:s(()=>[Bn]),_:1}),n(i,{tag:"h4",title:"GET example national shipment A"},{default:s(()=>[Hn]),_:1}),n(i,{tag:"h4",title:"GET example national shipment B"},{default:s(()=>[Yn]),_:1}),n(i,{tag:"h4",title:"GET example national multi collo shipment"},{default:s(()=>[Un]),_:1}),Mn,In,Cn,e("p",null,[Jn,zn,Fn,n(o,{item:"/api-reference/04.data-types#country_code"},{default:s(()=>[Gn]),_:1}),Zn,Vn,Kn,Wn]),e("p",null,[Xn,Qn,$n,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[es]),_:1}),ts,ns,ss,os]),e("p",null,[is,ls,_s,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[as]),_:1}),ds,rs,cs,hs]),e("p",null,[us,ps,gs,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[ms]),_:1}),fs,bs,ys,Ds]),e("p",null,[js,vs,xs,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Rs]),_:1}),Ts,ks,ws,qs]),e("p",null,[Es,Ss,Os,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ps]),_:1}),As,Ns,Ls,Bs]),e("p",null,[Hs,Ys,Us,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ms]),_:1}),Is,Cs,Js,zs]),e("p",null,[Fs,Gs,Zs,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Vs]),_:1}),Ks,Ws,Xs,Qs]),e("p",null,[$s,eo,to,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[no]),_:1}),so,oo,io,lo]),e("p",null,[_o,ao,ro,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[co]),_:1}),ho,uo,po,go]),e("p",null,[mo,fo,bo,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[yo]),_:1}),Do,jo,vo,xo]),e("p",null,[Ro,To,ko,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[wo]),_:1}),qo,Eo,So,Oo]),Po,n(i,{tag:"h4",title:"Dutch recipient"},{default:s(()=>[Ao]),_:1}),n(i,{tag:"h4",title:"Street and number in one field"},{default:s(()=>[No]),_:1}),n(i,{tag:"h4",title:"With company"},{default:s(()=>[Lo]),_:1}),n(i,{tag:"h4",title:"French recipient"},{default:s(()=>[Bo]),_:1}),n(i,{tag:"h4",title:"Japanese recipient"},{default:s(()=>[Ho]),_:1}),Yo,Uo,e("p",null,[Mo,n(l,{to:"7_A"},{default:s(()=>[Io]),_:1}),Co,n(o,{item:"#7_I"},{default:s(()=>[Jo]),_:1}),zo]),e("p",null,[Fo,Go,Zo,n(o,{item:"/api-reference/04.data-types#package_type"},{default:s(()=>[Vo]),_:1}),Ko,Wo,Xo,Qo,n(a,{type:"package_type",id:"1"}),$o]),e("p",null,[ei,ti,ni,n(o,{item:"/api-reference/04.data-types#delivery_type"},{default:s(()=>[si]),_:1}),oi,ii,li,_i]),e("p",null,[ai,di,ri,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[ci]),_:1}),hi,ui,pi,gi]),e("p",null,[mi,fi,bi,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[yi]),_:1}),Di,ji,vi,xi]),e("p",null,[Ri,Ti,ki,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[wi]),_:1}),qi,Ei,Si,Oi]),e("p",null,[Pi,Ai,Ni,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Li]),_:1}),Bi,Hi,Yi,Ui]),e("p",null,[Mi,Ii,Ci,n(o,{item:"/api-reference/04.data-types#price"},{default:s(()=>[Ji]),_:1}),zi,Fi,Gi,Zi]),e("p",null,[Vi,Ki,Wi,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Xi]),_:1}),Qi,$i,el,tl]),e("p",null,[nl,sl,ol,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[il]),_:1}),ll,_l,al,dl]),e("p",null,[rl,cl,hl,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[ul]),_:1}),pl,gl,ml,fl,bl]),e("p",null,[yl,Dl,jl,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[vl]),_:1}),xl,Rl,Tl,kl]),wl,n(i,{tag:"h4",title:"Parcel with only_recipient, signature, return, age_check and \u20AC100,\u2013 insurance"},{default:s(()=>[ql]),_:1}),n(i,{tag:"h4",title:"Package with signature and \u20AC100,\u2013 insurance"},{default:s(()=>[El]),_:1}),n(i,{tag:"h4",title:"Package with only_recipient, signature, return and \u20AC500,\u2013 insurance"},{default:s(()=>[Sl]),_:1}),n(i,{tag:"h4",title:"Package with only_recipient, signature, and return"},{default:s(()=>[Ol]),_:1}),n(i,{tag:"h4",title:"Package with pickup and signature"},{default:s(()=>[Pl]),_:1}),Al,Nl,e("p",null,[Ll,n(l,{to:"7_A"},{default:s(()=>[Bl]),_:1}),Hl]),e("p",null,[Yl,Ul,Ml,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Il]),_:1}),Cl,Jl,zl,Fl,Gl]),e("p",null,[Zl,Vl,Kl,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Wl]),_:1}),Xl,Ql,$l,e_]),e("p",null,[t_,n_,s_,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[o_]),_:1}),i_,l_,__,a_]),e("p",null,[d_,r_,c_,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[h_]),_:1}),u_,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[p_]),_:1}),g_,m_,f_,b_]),e("p",null,[y_,D_,j_,n(o,{item:"#printer_identifier"},{default:s(()=>[v_]),_:1}),x_,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[R_]),_:1}),T_,k_,w_,q_]),E_,n(i,{tag:"h4",title:"All options used"},{default:s(()=>[S_]),_:1}),O_,P_,e("p",null,[A_,n(l,{to:"7_A"},{default:s(()=>[N_]),_:1}),L_]),e("p",null,[B_,H_,Y_,n(o,{item:"/api-reference/04.data-types#package_contents"},{default:s(()=>[U_]),_:1}),M_,I_,C_,J_]),e("p",null,[z_,F_,G_,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Z_]),_:1}),V_,K_,W_,X_,Q_,$_,ea,ta,na,sa]),e("p",null,[oa,ia,la,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[_a]),_:1}),aa,da,ra,ca]),e("p",null,[ha,ua,pa,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[ga]),_:1}),ma,n(l,{to:"7_F"},{default:s(()=>[fa]),_:1}),ba,ya,Da,ja,va,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[xa]),_:1}),Ra,n(l,{to:"7_F"},{default:s(()=>[Ta]),_:1}),ka]),wa,n(i,{tag:"h4",title:"POST example A"},{default:s(()=>[qa]),_:1}),n(i,{tag:"h4",title:"POST example B"},{default:s(()=>[Ea]),_:1}),Sa,Oa,e("p",null,[Pa,n(l,{to:"7_E"},{default:s(()=>[Aa]),_:1}),Na]),e("p",null,[La,Ba,Ha,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ya]),_:1}),Ua,Ma,Ia,Ca]),e("p",null,[Ja,za,Fa,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Ga]),_:1}),Za,Va,Ka,Wa]),e("p",null,[Xa,Qa,$a,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[ed]),_:1}),td,nd,sd,od]),e("p",null,[id,ld,_d,n(o,{item:"/api-reference/04.data-types#price"},{default:s(()=>[ad]),_:1}),dd,rd,cd,hd]),e("p",null,[ud,pd,gd,n(o,{item:"/api-reference/04.data-types#isic_code"},{default:s(()=>[md]),_:1}),fd,bd,yd,Dd]),e("p",null,[jd,vd,xd,n(o,{item:"/api-reference/04.data-types#country_code"},{default:s(()=>[Rd]),_:1}),Td,kd,wd,qd]),Ed,n(i,{tag:"h4",title:"POST example A"},{default:s(()=>[Sd]),_:1}),n(i,{tag:"h4",title:"POST example B"},{default:s(()=>[Od]),_:1}),n(i,{tag:"h4",title:"POST example C"},{default:s(()=>[Pd]),_:1}),n(i,{tag:"h4",title:"POST example D"},{default:s(()=>[Ad]),_:1}),Nd,Ld,e("p",null,[Bd,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[Hd]),_:1}),Yd,n(l,{to:"7_H"},{default:s(()=>[Ud]),_:1}),Md]),e("p",null,[Id,Cd,Jd,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[zd]),_:1}),Fd,n(l,{to:"7_H"},{default:s(()=>[Gd]),_:1}),Zd,Vd,Kd,Wd,n(o,{item:"/api-reference/04.data-types#array"},{default:s(()=>[Xd]),_:1}),Qd,n(l,{to:"7_H"},{default:s(()=>[$d]),_:1}),er]),tr,nr,e("p",null,[sr,or,ir,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[lr]),_:1}),_r,ar]),n(l,{to:"7_A"},{default:s(()=>[dr]),_:1}),rr,cr,hr,ur,e("p",null,[pr,gr,mr,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[fr]),_:1}),br,yr,Dr,jr]),e("p",null,[vr,xr,Rr,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Tr]),_:1}),kr,wr,qr,Er]),e("p",null,[Sr,Or,Pr,n(o,{item:"/api-reference/04.data-types#carrier"},{default:s(()=>[Ar]),_:1}),Nr,Lr,Br,Hr]),e("p",null,[Yr,Ur,Mr,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Ir]),_:1}),Cr,Jr,zr,Fr]),e("p",null,[Gr,Zr,Vr,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Kr]),_:1}),Wr,Xr,Qr,$r]),e("p",null,[ec,tc,nc,n(l,{to:"7_C"},{default:s(()=>[sc]),_:1}),oc,ic,lc,_c]),e("p",null,[ac,dc,rc,n(l,{to:"7_D"},{default:s(()=>[cc]),_:1}),hc,uc,pc,gc,n(o,{item:"#printer_identifier"},{default:s(()=>[mc]),_:1}),fc]),bc,n(i,{tag:"h4",title:"POST example"},{default:s(()=>[yc]),_:1}),Dc,jc,vc,e("p",null,[xc,Rc,Tc,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[kc]),_:1}),wc,qc,Ec,Sc]),e("p",null,[Oc,Pc,Ac,n(o,{item:"/api-reference/04.data-types#carrier"},{default:s(()=>[Nc]),_:1}),Lc,Bc,Hc,Yc]),e("p",null,[Uc,Mc,Ic,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Cc]),_:1}),Jc,zc,Fc,Gc]),e("p",null,[Zc,Vc,Kc,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Wc]),_:1}),Xc,Qc,$c,eh]),e("p",null,[th,nh,sh,n(l,{to:"7_B"},{default:s(()=>[oh]),_:1}),ih,lh,_h,ah]),e("p",null,[dh,rh,ch,n(l,{to:"7_C"},{default:s(()=>[hh]),_:1}),uh,ph,gh,mh]),e("p",null,[fh,bh,yh,n(l,{to:"7_D"},{default:s(()=>[Dh]),_:1}),jh,vh,xh,Rh,n(o,{item:"#printer_identifier"},{default:s(()=>[Th]),_:1}),kh]),wh,n(i,{tag:"h4",title:"POST example"},{default:s(()=>[qh]),_:1}),Eh,Sh,Oh,e("p",null,[Ph,Ah,Nh,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Lh]),_:1}),Bh,Hh,Yh,Uh]),Mh,n(i,{tag:"h4",title:"POST example"},{default:s(()=>[Ih]),_:1}),Ch,Jh,zh,e("p",null,[Fh,Gh,Zh,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Vh]),_:1})]),e("p",null,[Kh,Wh,Xh,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Qh]),_:1})]),e("p",null,[$h,eu,tu,n(o,{item:"/api-reference/04.data-types#description"},{default:s(()=>[nu]),_:1})]),e("p",null,[su,ou,iu,n(o,{item:"/api-reference/04.data-types#time"},{default:s(()=>[lu]),_:1})]),e("p",null,[_u,au,du,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[ru]),_:1}),cu,hu,n(o,{item:"https://blog.myparcel.nl/jouw-track-en-trace-pagina"},{default:s(()=>[uu]),_:1}),pu]),e("p",null,[gu,mu,fu,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[bu]),_:1}),yu,Du]),e("p",null,[ju,vu,xu,n(l,{to:"7_B"},{default:s(()=>[Ru]),_:1})]),e("p",null,[Tu,ku,wu,n(l,{to:"7_B"},{default:s(()=>[qu]),_:1})]),e("p",null,[Eu,Su,Ou,n(l,{to:"7_C"},{default:s(()=>[Pu]),_:1})]),e("p",null,[Au,Nu,Lu,n(l,{to:"7_O"},{default:s(()=>[Bu]),_:1})]),e("p",null,[Hu,Yu,Uu,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Mu]),_:1}),Iu,Cu]),e("p",null,[Ju,zu,Fu,n(l,{to:"7_V"},{default:s(()=>[Gu]),_:1})]),e("p",null,[Zu,Vu,Ku,n(l,{to:"7_S"},{default:s(()=>[Wu]),_:1})]),e("p",null,[Xu,Qu,$u,n(l,{to:"7_M"},{default:s(()=>[e1]),_:1})]),e("p",null,[t1,n1,s1,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[o1]),_:1}),i1,l1]),e("p",null,[_1,a1,d1,n(l,{to:"7_T"},{default:s(()=>[r1]),_:1})]),c1,n(i,{tag:"h4",title:"GET example"},{default:s(()=>[h1]),_:1}),u1,p1,g1,e("p",null,[m1,f1,b1,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[y1]),_:1}),D1,j1]),e("p",null,[v1,x1,R1,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[T1]),_:1}),k1,w1]),e("p",null,[q1,E1,S1,n(o,{item:"/api-reference/04.data-types#time"},{default:s(()=>[O1]),_:1}),P1,A1]),e("p",null,[N1,L1,B1,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[H1]),_:1}),Y1,U1]),e("p",null,[M1,I1,C1,n(l,{to:"7_V"},{default:s(()=>[J1]),_:1})]),z1,n(i,{tag:"h4",title:"GET example"},{default:s(()=>[F1]),_:1}),G1,Z1,e("p",null,[V1,e("strong",null,[K1,n(l,{to:"_6-A_1"},{default:s(()=>[W1]),_:1}),X1])]),e("p",null,[Q1,$1,ep,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[tp]),_:1}),np,sp]),e("p",null,[op,ip,lp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[_p]),_:1}),ap,dp]),e("p",null,[rp,cp,hp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[up]),_:1}),pp,gp]),e("p",null,[mp,fp,bp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[yp]),_:1}),Dp,jp]),e("p",null,[vp,xp,Rp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Tp]),_:1}),kp,wp]),e("p",null,[qp,Ep,Sp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Op]),_:1}),Pp,Ap]),e("p",null,[Np,Lp,Bp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Hp]),_:1}),Yp,Up]),e("p",null,[Mp,Ip,Cp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Jp]),_:1}),zp,Fp]),e("p",null,[Gp,Zp,Vp,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Kp]),_:1}),Wp,Xp]),e("p",null,[Qp,$p,e0,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[t0]),_:1}),n0,s0]),o0,n(i,{tag:"h4",title:"POST example"},{default:s(()=>[i0]),_:1}),l0,_0,a0,e("p",null,[d0,r0,c0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[h0]),_:1}),u0,p0]),e("p",null,[g0,m0,f0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[b0]),_:1}),y0,D0]),e("p",null,[j0,v0,x0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[R0]),_:1}),T0,k0]),e("p",null,[w0,q0,E0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[S0]),_:1}),O0,P0]),e("p",null,[A0,N0,L0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[B0]),_:1}),H0,Y0]),e("p",null,[U0,M0,I0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[C0]),_:1}),J0,z0]),e("p",null,[F0,G0,Z0,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[V0]),_:1}),K0,W0]),X0,n(i,{tag:"h4",title:"POST example for NL pickup location"},{default:s(()=>[Q0]),_:1}),n(i,{tag:"h4",title:"POST example for BE pickup location"},{default:s(()=>[$0]),_:1}),eg,tg,ng,e("p",null,[sg,og,ig,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[lg]),_:1}),_g,ag]),e("p",null,[dg,rg,cg,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[hg]),_:1}),ug,pg]),e("p",null,[gg,mg,fg,n(o,{item:"#"},{default:s(()=>[bg]),_:1}),yg,Dg]),e("p",null,[jg,vg,xg,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[Rg]),_:1}),Tg,kg]),e("p",null,[wg,qg,Eg,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Sg]),_:1}),Og,Pg]),e("p",null,[Ag,Ng,Lg,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Bg]),_:1}),Hg,Yg]),e("p",null,[Ug,Mg,Ig,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Cg]),_:1}),Jg,zg]),e("p",null,[Fg,Gg,Zg,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[Vg]),_:1}),Kg,Wg]),e("p",null,[Xg,Qg,$g,n(o,{item:"/api-reference/04.data-types#price"},{default:s(()=>[em]),_:1}),tm,nm]),sm,n(i,{tag:"h4",title:"Example"},{default:s(()=>[om]),_:1}),im,lm,_m,e("p",null,[am,dm,rm,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[cm]),_:1}),hm,um]),e("p",null,[pm,gm,mm,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[fm]),_:1}),bm,ym]),e("p",null,[Dm,jm,vm,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[xm]),_:1}),Rm,Tm]),km,n(i,{tag:"h4",title:"Example"},{default:s(()=>[wm]),_:1}),qm,Em,Sm,e("p",null,[Om,Pm,Am,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Nm]),_:1}),Lm,Bm]),Hm,n(i,{tag:"h4",title:"Example"},{default:s(()=>[Ym]),_:1}),Um,Mm,Im,e("p",null,[Cm,Jm,zm,n(o,{item:"/api-reference/04.data-types#shipment_status"},{default:s(()=>[Fm]),_:1})]),e("p",null,[Gm,Zm,Vm,n(o,{item:"/api-reference/04.data-types#main"},{default:s(()=>[Km]),_:1})]),e("p",null,[Wm,Xm,Qm,n(o,{item:"/api-reference/04.data-types#boolean"},{default:s(()=>[$m]),_:1}),ef,tf]),nf,n(i,{tag:"h4",title:"Example"},{default:s(()=>[sf]),_:1}),of,lf,_f,e("p",null,[af,df,rf,n(l,{to:"7_U"},{default:s(()=>[cf]),_:1})]),e("p",null,[hf,uf,pf,n(l,{to:"7_U"},{default:s(()=>[gf]),_:1})]),mf,n(i,{tag:"h4",title:"Example"},{default:s(()=>[ff]),_:1}),bf,yf,Df,e("p",null,[jf,vf,xf,n(o,{item:"/api-reference/04.data-types#timestamp"},{default:s(()=>[Rf]),_:1})]),e("p",null,[Tf,kf,wf,n(o,{item:"/api-reference/04.data-types#integer"},{default:s(()=>[qf]),_:1})]),e("p",null,[Ef,Sf,Of,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Pf]),_:1})]),Af,n(i,{tag:"h4",title:"Example"},{default:s(()=>[Nf]),_:1}),Lf,Bf,Hf,e("p",null,[Yf,Uf,Mf,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[If]),_:1}),Cf,Jf]),e("p",null,[zf,Ff,Gf,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[Zf]),_:1}),Vf,Kf]),e("p",null,[Wf,Xf,Qf,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[$f]),_:1}),eb,tb]),e("p",null,[nb,sb,ob,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[ib]),_:1}),lb,_b]),e("p",null,[ab,db,rb,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[cb]),_:1}),hb,ub]),e("p",null,[pb,gb,mb,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[fb]),_:1}),bb,yb]),e("p",null,[Db,jb,vb,n(o,{item:"/api-reference/04.data-types#string"},{default:s(()=>[xb]),_:1}),Rb,Tb]),e("p",null,[kb,wb,qb,n(o,{item:"/api-reference/04.data-types#float"},{default:s(()=>[Eb]),_:1}),Sb,Ob]),e("p",null,[Pb,Ab,Nb,n(o,{item:"/api-reference/04.data-types#float"},{default:s(()=>[Lb]),_:1}),Bb,Hb]),Yb,n(i,{tag:"h4",title:"Example"},{default:s(()=>[Ub]),_:1})])}var Fb=d(u,[["render",Mb],["__file","07.shipment-related-object-definitions.html.vue"]]);export{Fb as default};
