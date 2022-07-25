import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as _,a as e,b as t,w as o,d as n,r as a}from"./app.e0bc0234.js";const c={},u=e("h3",{id:"_8-delivery-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-delivery-options","aria-hidden":"true"},"#"),n(" 8. Delivery options")],-1),p=e("h4",{id:"_8-a",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-a","aria-hidden":"true"},"#"),n(" 8.A Get delivery options")],-1),m=n("This endpoint has a rate limit. For more information, see "),h=n("rate limiting"),y=n("."),f=e("h5",{id:"_8-a-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-a-1","aria-hidden":"true"},"#"),n(" 8.A.1 Overview")],-1),g=e("p",null,[e("strong",null,"Defaults"),e("br"),n(" Get the delivery options for a given location and carrier. If none of the optional parameters are specified then the following default will be used: If a request is made for the delivery options between Friday "),e("strong",null,"after"),n(" the default cutoff_time (15h30) and Monday "),e("strong",null,"before"),n(" the default cutoff_time (15h30) then Tuesday will be shown as the next possible delivery date.")],-1),b=e("strong",null,"Objects",-1),v=e("br",null,null,-1),z=n(" Upon success two "),E=n("array"),x=n("s are returned; one for "),A=n("DeliveryOptions"),w=n(" and one for "),T=n("PickupOptions"),k=n(" objects is returned. This object contains delivery date, time and pricing. Upon error an Error object is returned."),R=n("To show delivery options to customers, you can use our javascript "),P=n("code"),j=n(". Use our "),N=n("sandbox"),D=n(" for an example and easier integration."),q=e("h5",{id:"_8-a-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-a-2","aria-hidden":"true"},"#"),n(" 8.A.2 Reference")],-1),L=e("tr",null,[e("td",{rowspan:"2"},[e("strong",null,"URI")]),e("td",null,"https://api.myparcel.nl/delivery_options"),e("td")],-1),M=e("tr",null,[e("td",null,"https://api.myparcel.nl/pickup_locations"),e("td")],-1),S=e("tr",null,[e("td",null,"Methods"),e("td",null,"GET"),e("td")],-1),H=e("tr",null,[e("td",null,"Rate Limit"),e("td",null,"30 requests in 5 minutes"),e("td")],-1),U=e("tr",null,[e("td",null,"URI parameters"),e("td",null,"\u2013"),e("td")],-1),B=e("td",{rowspan:"18"},"Query parameters",-1),G=e("td",null,"cc",-1),O=n("country_code"),C=e("td",null,"postal_code",-1),J=n("string"),K=e("td",null,"number",-1),I=n("string"),F=e("td",null,"city",-1),V=n("string"),Q=e("td",null,"street",-1),W=n("string"),Y=e("td",null,"platform",-1),Z=n("platform"),X=e("td",null,"carrier",-1),$=n("carrier"),ee=e("td",null,"delivery_time",-1),ne=n("time"),te=e("td",null,"delivery_date",-1),oe=n("date"),se=e("td",null,"cutoff_time",-1),le=n("time"),ie=e("td",null,"dropoff_days",-1),ae=n("weekday_digit"),de=e("td",null,"monday_delivery",-1),re=n("boolean"),_e=e("td",null,"dropoff_delay",-1),ce=n("integer"),ue=e("td",null,"deliverydays_window",-1),pe=n("integer"),me=e("td",null,"exclude_delivery_type",-1),he=n("delivery_type"),ye=e("td",null,"exclude_parcel_lockers",-1),fe=n("boolean"),ge=e("td",null,"latitude",-1),be=n("coordinates"),ve=e("td",null,"longitude",-1),ze=n("coordinates"),Ee=e("tr",null,[e("td",null,"Request body"),e("td",null,"None."),e("td")],-1),xe=e("tr",null,[e("td",null,"Response"),e("td",null,"HTTP/1.1 200 OK"),e("td")],-1),Ae=e("tr",null,[e("td",null,"Content-Type:"),e("td",null,"application/json;version=2.0 charset=utf-8"),e("td")],-1),we=e("tr",null,[e("td",null,"Response body"),e("td",null,"array of DeliveryOptions or array of PickupOptions objects"),e("td")],-1),Te=e("tr",null,[e("td",null,"Error response"),e("td",null,"HTTP/1.1 5xx < MESSAGE >"),e("td")],-1),ke=e("tr",null,[e("td",null,"Error response body"),e("td",null,"None."),e("td")],-1),Re=e("tr",null,[e("td",null,"Error response"),e("td",null,"HTTP/1.1 503 < MESSAGE >"),e("td")],-1),Pe=e("tr",null,[e("td",null,"Error response body 503"),e("td",null,"Error"),e("td")],-1),je=e("tr",null,[e("td",null,"Error response body Example"),e("td",null,[e("code",null,' {"data": {"delivery": [],"pickup": [],"message": "No results"},"errors": [{"code": 9,"message": "Example","human": "Example"}]}')]),e("td")],-1),Ne=e("h5",{id:"_8-a-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-a-3","aria-hidden":"true"},"#"),n(" 8.A.3 Parameters")],-1),De=e("strong",null,"cc",-1),qe=e("br",null,null,-1),Le=n(" Data type: "),Me=n("country_code"),Se=e("br",null,null,-1),He=n(" Required: yes"),Ue=e("br",null,null,-1),Be=n(" The country code for which to fetch the delivery options. This endpoint can only be used in the Netherlands or Belgium ( cc=NL or cc=BE )."),Ge=e("strong",null,"postal_code",-1),Oe=e("br",null,null,-1),Ce=n(" Data type: "),Je=n("string"),Ke=e("br",null,null,-1),Ie=n(" Required: yes."),Fe=e("br",null,null,-1),Ve=n(" The postal code for which to fetch the delivery options."),Qe=e("strong",null,"number",-1),We=e("br",null,null,-1),Ye=n(" Data type: "),Ze=n("string"),Xe=e("br",null,null,-1),$e=n(" Required: yes"),en=e("br",null,null,-1),nn=n(" The street number for which to fetch the delivery options."),tn=e("strong",null,"city",-1),on=e("br",null,null,-1),sn=n(" Data type: "),ln=n("string"),an=e("br",null,null,-1),dn=n(" Required: no"),rn=e("br",null,null,-1),_n=n(" Only available for carriers bpost and DPD. This can be used to narrow the search results for locations outside NL."),cn=e("strong",null,"street",-1),un=e("br",null,null,-1),pn=n(" Data type: "),mn=n("string"),hn=e("br",null,null,-1),yn=n(" Required: no"),fn=e("br",null,null,-1),gn=n(" This can be used to narrow the search results for locations outside NL."),bn=e("strong",null,"platform",-1),vn=e("br",null,null,-1),zn=n(" Data type: "),En=n("platform"),xn=e("br",null,null,-1),An=n(" Required: no"),wn=e("br",null,null,-1),Tn=n(" The platform where you want the data from"),kn=e("strong",null,"delivery_time",-1),Rn=e("br",null,null,-1),Pn=n(" Data type: "),jn=n("time"),Nn=e("br",null,null,-1),Dn=n(" Required: no"),qn=e("br",null,null,-1),Ln=n(" The time on which a package has to be delivered."),Mn=e("br",null,null,-1),Sn=e("strong",null,"Note: This is only an indication of time the package will be delivered on the selected date.",-1),Hn=e("strong",null,"delivery_date",-1),Un=e("br",null,null,-1),Bn=n(" Data type: "),Gn=n("date"),On=e("br",null,null,-1),Cn=n(" Required: no"),Jn=e("br",null,null,-1),Kn=n(" The date on which the package has to be delivered."),In=e("strong",null,"cutoff_time",-1),Fn=e("br",null,null,-1),Vn=n(" Data type: "),Qn=n("time"),Wn=e("br",null,null,-1),Yn=n(" Required: no"),Zn=e("br",null,null,-1),Xn=n(" This option allows the "),$n=e("strong",null,"Merchant",-1),et=n(" to indicate the latest cut-off time before which a consumer order will still be picked, packed and dispatched on the same/first set dropoff day, taking into account the dropoff-delay. Default time is 15h30. For example, if cutoff time is 15h30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15h30 will be dropped of at PostNL on that same Monday in time for the Monday collection."),nt=e("strong",null,"dropoff_days",-1),tt=e("br",null,null,-1),ot=n(" Data type: "),st=n("weekday_digit"),lt=e("br",null,null,-1),it=n(" Required: no"),at=e("br",null,null,-1),dt=n(" This options allows the "),rt=e("strong",null,"Merchant",-1),_t=n(" to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded."),ct=e("strong",null,"monday_delivery",-1),ut=e("br",null,null,-1),pt=n(" Data type: "),mt=n("boolean"),ht=e("br",null,null,-1),yt=n(" Required: no"),ft=e("br",null,null,-1),gt=n(" Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. Click "),bt=n("here"),vt=n(" for more information concerning Monday delivery and the locations."),zt=e("br",null,null,-1),Et=n("Note: To activate Monday delivery, value 6 must be given with "),xt=n("dropoff_days"),At=n(" , value 1 must be given by "),wt=n("monday_delivery"),Tt=n(" . And on Saturday the "),kt=n("cutoff_time"),Rt=n(" must be before 15:00 (14:30 recommended) so that Monday will be shown."),Pt=e("strong",null,"saturday_delivery",-1),jt=e("br",null,null,-1),Nt=n(" Data type: "),Dt=n("boolean"),qt=e("br",null,null,-1),Lt=n(" Required: no"),Mt=e("br",null,null,-1),St=n(" Saturday delivery is only possible when the package is delivered before 15.00 on Friday at the designated bpost locations."),Ht=e("br",null,null,-1),Ut=n("Note: To activate Saturday delivery, value 6 must be given with "),Bt=n("dropoff_days"),Gt=n(" , value 1 must be given by "),Ot=n("saturday_delivery"),Ct=n(" ."),Jt=e("strong",null,"dropoff_delay",-1),Kt=e("br",null,null,-1),It=n(" Data type: "),Ft=n("integer"),Vt=e("br",null,null,-1),Qt=n(" Required: no"),Wt=e("br",null,null,-1),Yt=n(" This options allows the "),Zt=e("strong",null,"Merchant",-1),Xt=n(" to set the number of days it takes her to pick, pack and hand in her parcels at PostNL when ordered before the cutoff time. By default this is 0 and max is 14."),$t=e("strong",null,"deliverydays_window",-1),eo=e("br",null,null,-1),no=n(" Data type: "),to=n("integer"),oo=e("br",null,null,-1),so=n(" Required: no"),lo=e("br",null,null,-1),io=n(" This options allows the "),ao=e("strong",null,"Merchant",-1),ro=n(" to set the number of days into the future for which she wants to show her consumers delivery options. For example, if set to 3 in her check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cut-off time and she goes to PostNL on Mondays). Min is 1. and max. is 14."),_o=e("strong",null,"exclude_delivery_type",-1),co=e("br",null,null,-1),uo=n(" Data type: "),po=n("delivery_type"),mo=e("br",null,null,-1),ho=n(" Required: no"),yo=e("br",null,null,-1),fo=n(" This options allows the Merchant to exclude delivery types from the available delivery options. You can specify multiple delivery types by semicolon separating them. The standard delivery name cannot be excluded."),go=e("strong",null,"exclude_parcel_lockers",-1),bo=e("br",null,null,-1),vo=n(" Data type: "),zo=n("boolean"),Eo=e("br",null,null,-1),xo=n(" Required: no"),Ao=e("br",null,null,-1),wo=n(" This option allows to filter out pickup locations that are parcel lockers."),To=e("strong",null,"latitude",-1),ko=e("br",null,null,-1),Ro=n(" Data type: "),Po=n("coordinates"),jo=e("br",null,null,-1),No=n(" Required: no"),Do=e("br",null,null,-1),qo=n(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),Lo=e("strong",null,"longitude",-1),Mo=e("br",null,null,-1),So=n(" Data type: "),Ho=n("coordinates"),Uo=e("br",null,null,-1),Bo=n(" Required: no"),Go=e("br",null,null,-1),Oo=n(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),Co=e("h5",{id:"_8-a-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-a-4","aria-hidden":"true"},"#"),n(" 8.A.4 Examples")],-1),Jo=e("p",null,[e("strong",null,"Request")],-1),Ko=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Io=e("p",null,[e("strong",null,"Response")],-1),Fo=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Vo=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "delivery": [
      {
        "date": "2017-02-01",
        "time": [
          {
            "start": "08:00:00",
            "end": "12:00:00",
            "price": {
              "currency": "EUR",
              "amount": 1000
            },
            "price_comment": "morning",
            "comment": "",
            "name": 1
          },
          {
            "start": "11:30:00",
            "end": "13:30:00",
            "price": {
              "currency": "EUR",
              "amount": 0
            },
            "price_comment": "standard",
            "comment": "",
            "name": 2
          }
        ]
      },
      {
        "date": "2017-02-02",
        "time": [
          {
            "start": "08:00:00",
            "end": "12:00:00",
            "price": {
              "currency": "EUR",
              "amount": 1000
            },
            "price_comment": "morning",
            "comment": "",
            "name": 1
          },
          {
            "start": "11:00:00",
            "end": "13:00:00",
            "price": {
              "currency": "EUR",
              "amount": 0
            },
            "price_comment": "standard",
            "comment": "",
            "name": 2
          }
        ]
      }
    ],
    "pickup": [
      {
        "date": "2017-02-01",
        "time": [
          {
            "start": "16:00:00",
            "name": 4,
            "price": {
              "amount": 0,
              "currency": "EUR"
            }
          },
          {
            "start": "08:30:00",
            "name": 5,
            "price": {
              "amount": 125,
              "currency": "EUR"
            }
          }
        ],
        "location": "Staples Office Centre",
        "street": "Jacobus Spijkerdreef",
        "number": "10",
        "postal_code": "2132PZ",
        "city": "Hoofddorp",
        "start_time": "08:30:00",
        "price": 125,
        "price_comment": "retailexpress",
        "comment": "Dit is een Business Point. Post en pakketten die u op werkdagen v\xF3\xF3r de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag.",
        "phone_number": "023-5576310",
        "opening_hours": {
          "monday": [
            "08:00-18:30"
          ],
          "tuesday": [
            "08:00-18:30"
          ],
          "wednesday": [
            "08:00-18:30"
          ],
          "thursday": [
            "08:00-18:30"
          ],
          "friday": [
            "08:00-18:30"
          ],
          "saturday": [
            "08:00-17:00"
          ],
          "sunday": []
        },
        "distance": "1934",
        "latitude": "52.286582",
        "longitude": "4.682377",
        "location_code": "173187"
      },
      {
        "date": "2017-02-01",
        "time": [
          {
            "start": "16:00:00",
            "name": 4,
            "price": {
              "amount": 0,
              "currency": "EUR"
            }
          }
        ],
        "location": "Primera Sanders",
        "street": "Polderplein",
        "number": "3",
        "postal_code": "2132BA",
        "city": "Hoofddorp",
        "start_time": "16:00:00",
        "price": 0,
        "price_comment": "retail",
        "comment": "Dit is een Postkantoor. Post en pakketten die u op werkdagen v\xF3\xF3r de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag.",
        "phone_number": "023-5640556",
        "opening_hours": {
          "monday": [
            "11:00-18:00"
          ],
          "tuesday": [
            "09:00-18:00"
          ],
          "wednesday": [
            "09:00-18:00"
          ],
          "thursday": [
            "09:00-18:00"
          ],
          "friday": [
            "09:00-21:00"
          ],
          "saturday": [
            "09:00-17:00"
          ],
          "sunday": [
            "12:00-17:00"
          ]
        },
        "distance": "1687",
        "latitude": "52.192150633052",
        "longitude": "4.44249030539514",
        "location_code": "176227"
      },
      {
        "date": "2017-02-01",
        "time": [
          {
            "start": "16:00:00",
            "name": 4,
            "price": {
              "amount": 0,
              "currency": "EUR"
            }
          }
        ]
      }
    ]
  }
}
`)])],-1),Qo=e("p",null,[e("strong",null,"Request")],-1),Wo=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/pickup_locations?carrierName=postnl&platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Yo=e("p",null,[e("strong",null,"Response")],-1),Zo=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Xo=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "pickup_locations": [
      {
        "address": {
          "cc": "NL",
          "city": "Hoofddorp",
          "street": "Polderplein",
          "postal_code": "2132BA",
          "number": "3"
        },
        "possibilities": [
          {
            "delivery_type_id": 4,
            "delivery_type_name": "pickup",
            "moment": {
              "start": {
                "date": "2020-02-13 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Amsterdam"
              }
            }
          }
        ],
        "location": {
          "location_name": "Primera Sanders",
          "retail_network_id": "PNPNL-01",
          "distance": "1696",
          "latitude": "52.30329367",
          "longitude": "4.69476214",
          "location_code": "176227",
          "phone_number": null,
          "opening_hours": {
            "monday": [
              {
                "start": {
                  "date": "2020-02-17 11:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-17 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "tuesday": [
              {
                "start": {
                  "date": "2020-02-18 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-18 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "wednesday": [
              {
                "start": {
                  "date": "2020-02-19 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-19 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "thursday": [
              {
                "start": {
                  "date": "2020-02-13 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-13 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "friday": [
              {
                "start": {
                  "date": "2020-02-14 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-14 21:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "saturday": [
              {
                "start": {
                  "date": "2020-02-15 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-15 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "sunday": [
              {
                "start": {
                  "date": "2020-02-16 12:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-16 17:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ]
          }
        }
      }
    ]
  }
}
`)])],-1),$o=e("ul",null,[e("li",null,"Destination: 2132JE 31"),e("li",null,"PostNL"),e("li",null,"cutoff time 16:00"),e("li",null,"dropoff days Mon - Sat"),e("li",null,"dropoff delay: 0"),e("li",null,"delivery days window: 2"),e("li",null,"no morning")],-1),es=e("p",null,[e("strong",null,"Request")],-1),ns=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),ts=e("p",null,[e("strong",null,"Response")],-1),os=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),ss=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "deliveries": [
      {
        "date": {
          "date": "2020-02-13 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Europe/Amsterdam"
        },
        "possibilities": [
          {
            "name": "standard",
            "shipment_options": [
              {
                "name": "age_check",
                "schema": {
                  "name": "boolean",
                  "enum": [
                    true,
                    false
                  ]
                }
              },
              {
                "name": "large_format",
                "schema": {
                  "name": "boolean",
                  "enum": [
                    true,
                    false
                  ]
                }
              },
              {
                "name": "only_recipient",
                "schema": {
                  "name": "boolean",
                  "enum": [
                    true,
                    false
                  ]
                }
              },
              {
                "name": "signature",
                "schema": {
                  "name": "boolean",
                  "enum": [
                    true,
                    false
                  ]
                }
              },
              {
                "name": "return",
                "schema": {
                  "name": "boolean",
                  "enum": [
                    true,
                    false
                  ]
                }
              }
            ],
            "collect_date": null,
            "delivery_time_frames": [
              {
                "name": "start",
                "date_time": {
                  "date": "2020-02-13 09:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "name": "end",
                "date_time": {
                  "date": "2020-02-13 12:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
`)])],-1),ls=e("p",null,"2132JE, 31 for PostNL cutoff time 16h00, dropoff days Mon - Sat, dropoff delay is zero, delivery window is 2 days and morning is excluded as delivery name.",-1),is=e("p",null,[e("strong",null,"Request")],-1),as=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),ds=e("p",null,[e("strong",null,"Response")],-1),rs=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),_s=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`{
  "data": {
    "pickup_locations": [
      {
        "address": {
          "cc": "NL",
          "city": "Hoofddorp",
          "street": "Polderplein",
          "postal_code": "2132BA",
          "number": "3"
        },
        "possibilities": [
          {
            "delivery_type_id": 4,
            "delivery_type_name": "pickup",
            "moment": {
              "start": {
                "date": "2020-02-13 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Amsterdam"
              }
            }
          }
        ],
        "location": {
          "location_name": "Primera Sanders",
          "retail_network_id": "PNPNL-01",
          "distance": "1696",
          "latitude": "52.30329367",
          "longitude": "4.69476214",
          "location_code": "176227",
          "phone_number": null,
          "opening_hours": {
            "monday": [
              {
                "start": {
                  "date": "2020-02-17 11:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-17 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "tuesday": [
              {
                "start": {
                  "date": "2020-02-18 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-18 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "wednesday": [
              {
                "start": {
                  "date": "2020-02-19 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-19 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "thursday": [
              {
                "start": {
                  "date": "2020-02-13 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-13 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "friday": [
              {
                "start": {
                  "date": "2020-02-14 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-14 21:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "saturday": [
              {
                "start": {
                  "date": "2020-02-15 09:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-15 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "sunday": [
              {
                "start": {
                  "date": "2020-02-16 12:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-02-16 17:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ]
          }
        }
      }
    ]
  }
}
`)])],-1),cs=e("p",null,[e("strong",null,"Get delivery options for Belgium")],-1),us=e("p",null,[e("strong",null,"Request")],-1),ps=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/delivery_options?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),ms=e("p",null,[e("strong",null,"Response")],-1),hs=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
{
  "data": {
    "delivery": [
      {
        "date": "2020-07-27",
        "time": [
          {
            "start": "08:00:00",
            "end": "17:00:00",
            "price": {
              "currency": "EUR",
              "amount": 0
            },
            "price_comment": "standard",
            "comment": "",
            "name": 2
          }
        ]
      },
      {
        "date": "2020-07-28",
        "time": [
          {
            "start": "08:00:00",
            "end": "17:00:00",
            "price": {
              "currency": "EUR",
              "amount": 0
            },
            "price_comment": "standard",
            "comment": "",
            "name": 2
          }
        ]
      },
      {
        "date": "2020-07-29",
        "time": [
          {
            "start": "08:00:00",
            "end": "17:00:00",
            "price": {
              "currency": "EUR",
              "amount": 0
            },
            "price_comment": "standard",
            "comment": "",
            "name": 2
          }
        ]
      }
    ]
  }
}
`)])],-1),ys=e("p",null,[e("strong",null,"Get pickup options for Belgium")],-1),fs=e("p",null,[e("strong",null,"Request")],-1),gs=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),bs=e("p",null,[e("strong",null,"Response")],-1),vs=e("div",{class:"language-json ext-json"},[e("pre",{class:"language-json"},[e("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
{
  "data": {
    "pickup_locations": [
      {
        "address": {
          "cc": "BE",
          "city": "BRUSSEL",
          "street": "ANSPACHLAAN",
          "postal_code": "1000",
          "number": "1",
          "number_suffix": null
        },
        "possibilities": [
          {
            "delivery_type_id": 4,
            "delivery_type_name": "pickup",
            "moment": {
              "start": {
                "date": "2020-07-27 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Amsterdam"
              }
            }
          }
        ],
        "location": {
          "location_name": "BRUSSEL DE BROUCKERE",
          "retail_network_id": "",
          "distance": "242",
          "latitude": "50.8506",
          "longitude": "4.35185",
          "location_code": "20100",
          "phone_number": null,
          "opening_hours": {
            "monday": [
              {
                "start": {
                  "date": "2020-07-27 08:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-27 12:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "start": {
                  "date": "2020-07-27 13:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-27 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "tuesday": [
              {
                "start": {
                  "date": "2020-07-28 08:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-28 12:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "start": {
                  "date": "2020-07-28 13:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-28 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "wednesday": [
              {
                "start": {
                  "date": "2020-07-29 08:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-29 12:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "start": {
                  "date": "2020-07-29 13:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-29 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "thursday": [
              {
                "start": {
                  "date": "2020-07-30 08:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-30 12:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "start": {
                  "date": "2020-07-30 13:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-30 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "friday": [
              {
                "start": {
                  "date": "2020-07-31 08:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-31 12:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              },
              {
                "start": {
                  "date": "2020-07-31 13:30:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-31 18:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "saturday": [
              {
                "start": {
                  "date": "2020-07-25 10:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                },
                "end": {
                  "date": "2020-07-25 13:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "Europe/Amsterdam"
                }
              }
            ],
            "sunday": []
          }
        }
      }
    ]
  }
}
`)])],-1);function zs(Es,xs){const i=a("ApiLink"),s=a("AutoLink"),l=a("DetailsExpand");return r(),_("div",null,[u,p,e("p",null,[m,t(i,{to:"1_D"},{default:o(()=>[h]),_:1}),y]),f,g,e("p",null,[b,v,z,t(s,{item:"/api-reference/04.data-types#array"},{default:o(()=>[E]),_:1}),x,t(i,{to:"9_a"},{default:o(()=>[A]),_:1}),w,t(i,{to:"9_B"},{default:o(()=>[T]),_:1}),k]),e("p",null,[R,t(s,{item:"http://github.com/myparcelnl/checkout"},{default:o(()=>[P]),_:1}),j,t(s,{item:"https://myparcelnl.github.io/delivery-options/"},{default:o(()=>[N]),_:1}),D]),q,e("table",null,[e("tbody",null,[L,M,S,H,U,e("tr",null,[B,G,e("td",null,[t(s,{item:"/api-reference/04.data-types#country_code"},{default:o(()=>[O]),_:1})])]),e("tr",null,[C,e("td",null,[t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[J]),_:1})])]),e("tr",null,[K,e("td",null,[t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[I]),_:1})])]),e("tr",null,[F,e("td",null,[t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[V]),_:1})])]),e("tr",null,[Q,e("td",null,[t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[W]),_:1})])]),e("tr",null,[Y,e("td",null,[t(s,{item:"/api-reference/04.data-types#platform"},{default:o(()=>[Z]),_:1})])]),e("tr",null,[X,e("td",null,[t(s,{item:"/api-reference/04.data-types#carrier"},{default:o(()=>[$]),_:1})])]),e("tr",null,[ee,e("td",null,[t(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[ne]),_:1})])]),e("tr",null,[te,e("td",null,[t(s,{item:"/api-reference/04.data-types#date"},{default:o(()=>[oe]),_:1})])]),e("tr",null,[se,e("td",null,[t(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[le]),_:1})])]),e("tr",null,[ie,e("td",null,[t(s,{item:"/api-reference/04.data-types#weekday_digit"},{default:o(()=>[ae]),_:1})])]),e("tr",null,[de,e("td",null,[t(s,{item:"/api-reference/04.data-types#boolean"},{default:o(()=>[re]),_:1})])]),e("tr",null,[_e,e("td",null,[t(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[ce]),_:1})])]),e("tr",null,[ue,e("td",null,[t(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[pe]),_:1})])]),e("tr",null,[me,e("td",null,[t(s,{item:"/api-reference/04.data-types#delivery_type"},{default:o(()=>[he]),_:1})])]),e("tr",null,[ye,e("td",null,[t(s,{item:"/api-reference/04.data-types#boolean"},{default:o(()=>[fe]),_:1})])]),e("tr",null,[ge,e("td",null,[t(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[be]),_:1})])]),e("tr",null,[ve,e("td",null,[t(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[ze]),_:1})])]),Ee,xe,Ae,we,Te,ke,Re,Pe,je])]),Ne,e("p",null,[De,qe,Le,t(s,{item:"/api-reference/04.data-types#country_code"},{default:o(()=>[Me]),_:1}),Se,He,Ue,Be]),e("p",null,[Ge,Oe,Ce,t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Je]),_:1}),Ke,Ie,Fe,Ve]),e("p",null,[Qe,We,Ye,t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[Ze]),_:1}),Xe,$e,en,nn]),e("p",null,[tn,on,sn,t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[ln]),_:1}),an,dn,rn,_n]),e("p",null,[cn,un,pn,t(s,{item:"/api-reference/04.data-types#string"},{default:o(()=>[mn]),_:1}),hn,yn,fn,gn]),e("p",null,[bn,vn,zn,t(s,{item:"/api-reference/04.data-types#platform"},{default:o(()=>[En]),_:1}),xn,An,wn,Tn]),e("p",null,[kn,Rn,Pn,t(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[jn]),_:1}),Nn,Dn,qn,Ln,Mn,Sn]),e("p",null,[Hn,Un,Bn,t(s,{item:"/api-reference/04.data-types#date"},{default:o(()=>[Gn]),_:1}),On,Cn,Jn,Kn]),e("p",null,[In,Fn,Vn,t(s,{item:"/api-reference/04.data-types#time"},{default:o(()=>[Qn]),_:1}),Wn,Yn,Zn,Xn,$n,et]),e("p",null,[nt,tt,ot,t(s,{item:"/api-reference/04.data-types#weekday_digit"},{default:o(()=>[st]),_:1}),lt,it,at,dt,rt,_t]),e("p",null,[ct,ut,pt,t(s,{item:"/api-reference/04.data-types#boolean"},{default:o(()=>[mt]),_:1}),ht,yt,ft,gt,t(s,{item:"https://blog.myparcel.nl/maandagbezorging"},{default:o(()=>[bt]),_:1}),vt,zt,e("strong",null,[Et,t(s,{item:"#dropoff_days"},{default:o(()=>[xt]),_:1}),At,t(s,{item:"#monday_delivery"},{default:o(()=>[wt]),_:1}),Tt,t(s,{item:"#cutoff_time"},{default:o(()=>[kt]),_:1}),Rt])]),e("p",null,[Pt,jt,Nt,t(s,{item:"/api-reference/04.data-types#boolean"},{default:o(()=>[Dt]),_:1}),qt,Lt,Mt,St,Ht,e("strong",null,[Ut,t(s,{item:"#dropoff_days"},{default:o(()=>[Bt]),_:1}),Gt,t(s,{item:"#saturday_delivery"},{default:o(()=>[Ot]),_:1}),Ct])]),e("p",null,[Jt,Kt,It,t(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[Ft]),_:1}),Vt,Qt,Wt,Yt,Zt,Xt]),e("p",null,[$t,eo,no,t(s,{item:"/api-reference/04.data-types#integer"},{default:o(()=>[to]),_:1}),oo,so,lo,io,ao,ro]),e("p",null,[_o,co,uo,t(s,{item:"/api-reference/04.data-types#delivery_type"},{default:o(()=>[po]),_:1}),mo,ho,yo,fo]),e("p",null,[go,bo,vo,t(s,{item:"/api-reference/04.data-types#boolean"},{default:o(()=>[zo]),_:1}),Eo,xo,Ao,wo]),e("p",null,[To,ko,Ro,t(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[Po]),_:1}),jo,No,Do,qo]),e("p",null,[Lo,Mo,So,t(s,{item:"/api-reference/04.data-types#coordinates"},{default:o(()=>[Ho]),_:1}),Uo,Bo,Go,Oo]),Co,t(l,{tag:"h4",title:"Get delivery options for 2132JE, 31 for PostNL"},{default:o(()=>[Jo,Ko,Io,Fo,Vo]),_:1}),t(l,{tag:"h4",title:"Get pickup options for 2132JE, 31 for PostNL"},{default:o(()=>[Qo,Wo,Yo,Zo,Xo]),_:1}),t(l,{tag:"h4",title:"Get delivery options with a lot of options"},{default:o(()=>[$o,es,ns,ts,os,ss]),_:1}),t(l,{tag:"h4",title:"Get pickup options for..."},{default:o(()=>[ls,is,as,ds,rs,_s,cs,us,ps,ms,hs,ys,fs,gs,bs,vs]),_:1})])}var Ts=d(c,[["render",zs],["__file","08.delivery-options.html.vue"]]);export{Ts as default};
