import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as r,a as e,b as s,w as a,d as n,r as l}from"./app.033e6678.js";const d={},c=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,`window.MyParcelConfig = {
  config: {
    platform: 'belgie',

    // Use this object to enable carriers and override settings per carrier.
    carrierSettings: {
      bpost: {
        deliveryDaysWindow: 7,
        allowDeliveryOptions: true,
        allowPickupLocations: true,
      },
      dpd: {
        allowDeliveryOptions: true,
        allowPickupLocations: true,
      },
    },

    // All settings below can be overridden per carrier via the carrierSettings object

    // The price for each option
    priceMorningDelivery: 7.95,
    priceStandardDelivery: 5.85,
    priceSameDayDelivery: 7.65,
    priceEveningDelivery: 6.25,
    priceSignature: 0.35,
    priceOnlyRecipient: 0.30,
    pricePickup: 5.85,

    // Shipment options
    allowSaturdayDelivery: true,
    allowPickupLocations: true,
    allowSignature: true,

    // Other settings
    dropOffDays: '1;2;3;4;5;6',
    cutoffTime: '15:00',
    deliveryDaysWindow: 4,
    dropOffDelay: 1,
  },
  strings: {
    saturdayDeliveryTitle: 'Zaterdaglevering',
    wrongPostalCodeCity: 'Combinatie postcode/plaats onbekend',

    // Address strings
    city: 'Plaats',
    postcode: 'Postcode',
    houseNumber: 'Huisnummer',
    addressNotFound: 'Adresgegevens niet ingevuld',

    // Delivery moment titles.
    // If any of these is not set, the delivery time will be visible instead.
    deliveryEveningTitle: 'Avondlevering',
    deliveryMorningTitle: 'Ochtendlevering',
    deliveryStandardTitle: 'Standaardlevering',

    deliveryTitle: 'Bezorgen op',
    pickupTitle: 'Afhalen op locatie',

    // Shipment options
    onlyRecipientTitle: 'Home address only',
    signatureTitle: 'Handtekening',

    pickUpFrom: 'Afhalen vanaf',
    openingHours: 'Openingstijden',

    // Other strings
    closed: 'Gesloten',
    from: 'Vanaf',
    loadMore: 'Laad meer',
    retry: 'Opnieuw',
  },
  address: {
    cc: 'BE',
    city: 'Antwerpen',
    postalCode: '2000',
  }
};
`)])],-1),p=n("When there is no title set for "),u=e("code",null,"deliveryMorningTitle",-1),v=n(", "),g=e("code",null,"deliveryStandardTitle",-1),y=n(" or "),h=e("code",null,"deliveryEveningTitle",-1),_=n(" , the delivery time will automatically be visible. For more in-depth explanation of each config item and string and an interactive demo please see our "),m=n("sandbox"),f=e("p",null,"To get the object with the selected options from the delivery options do the following:",-1),w=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,`const data = document.querySelector('#mypa-input').value;
const obj = JSON.parse(data);

// \`obj\` will be something like this:
// {
//   "delivery": "deliver",
//   "deliveryDate": "8-8-2019",
//   "deliveryMoment": "standard",
//   "shipmentOptions": {signature: true, only_recipient: false}
// }
`)])],-1);function b(D,T){const t=l("AutoLink");return o(),r("div",null,[c,e("p",null,[p,u,v,g,y,h,_,s(t,{item:"https://myparcelnl.github.io/delivery-options/"},{default:a(()=>[m]),_:1})]),f,w])}var j=i(d,[["render",b],["__file","09.options.html.vue"]]);export{j as default};
