import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as u,c as i,b as n,a as t,w as a,d as s,r as c}from"./app.6acc73c4.js";const k={},d=n("h2",{id:"_8-delivery-options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-delivery-options","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8. Delivery options")],-1),y=n("h3",{id:"_8-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8.A Get delivery options")],-1),_=s("This endpoint has a rate limit. For more information, see "),m=s("rate limiting"),h=s("."),g=n("h4",{id:"_8-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-1","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8.A.1 Overview")],-1),b=n("p",null,[n("strong",null,"Defaults"),n("br"),s(" Get the delivery options for a given location and carrier. If none of the optional parameters are specified then the following default will be used: If a request is made for the delivery options between Friday "),n("strong",null,"after"),s(" the default cutoff_time (15h30) and Monday "),n("strong",null,"before"),s(" the default cutoff_time (15h30) then Tuesday will be shown as the next possible delivery date.")],-1),f=n("strong",null,"Objects",-1),v=n("br",null,null,-1),x=s(" Upon success two "),z=s("array"),E=s("s are returned; one for "),w=s("DeliveryOptions"),A=s(" and one for "),T=s("PickupOptions"),R=s(" objects is returned. This object contains delivery date, time and pricing. Upon error an Error object is returned."),P=s("To show delivery options to customers, you can use our javascript "),j=s("code"),N=s(". Use our "),D=s("sandbox"),L=s(" for an example and easier integration."),q=n("h4",{id:"_8-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-2","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8.A.2 Reference")],-1),M=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/delivery_options"),n("td")],-1),S=n("tr",null,[n("td",null,"https://api.myparcel.nl/pickup_locations"),n("td")],-1),H=n("tr",null,[n("td",null,"Methods"),n("td",null,"GET"),n("td")],-1),U=n("tr",null,[n("td",null,"Rate Limit"),n("td",null,"30 requests in 5 minutes"),n("td")],-1),B=n("tr",null,[n("td",null,"URI parameters"),n("td",null,"\u2013"),n("td")],-1),G=n("td",{rowspan:"18"},"Query parameters",-1),O=n("td",null,"cc",-1),C=s("country_code"),J=n("td",null,"postal_code",-1),K=s("string"),I=n("td",null,"number",-1),F=s("string"),V=n("td",null,"city",-1),Q=s("string"),W=n("td",null,"street",-1),Y=s("string"),Z=n("td",null,"platform",-1),X=s("platform"),$=n("td",null,"carrier",-1),nn=s("carrier"),sn=n("td",null,"delivery_time",-1),tn=s("time"),an=n("td",null,"delivery_date",-1),on=s("date"),en=n("td",null,"cutoff_time",-1),pn=s("time"),cn=n("td",null,"dropoff_days",-1),ln=s("weekday_digit"),rn=n("td",null,"monday_delivery",-1),un=s("boolean"),kn=n("td",null,"dropoff_delay",-1),dn=s("integer"),yn=n("td",null,"deliverydays_window",-1),_n=s("integer"),mn=n("td",null,"exclude_delivery_type",-1),hn=s("delivery_type"),gn=n("td",null,"exclude_parcel_lockers",-1),bn=s("boolean"),fn=n("td",null,"latitude",-1),vn=s("coordinates"),xn=n("td",null,"longitude",-1),zn=s("coordinates"),En=n("tr",null,[n("td",null,"Request body"),n("td",null,"None."),n("td")],-1),wn=n("tr",null,[n("td",null,"Response"),n("td",null,"HTTP/1.1 200 OK"),n("td")],-1),An=n("tr",null,[n("td",null,"Content-Type:"),n("td",null,"application/json;version=2.0 charset=utf-8"),n("td")],-1),Tn=n("tr",null,[n("td",null,"Response body"),n("td",null,"array of DeliveryOptions or array of PickupOptions objects"),n("td")],-1),Rn=n("tr",null,[n("td",null,"Error response"),n("td",null,"HTTP/1.1 5xx < MESSAGE >"),n("td")],-1),Pn=n("tr",null,[n("td",null,"Error response body"),n("td",null,"None."),n("td")],-1),jn=n("tr",null,[n("td",null,"Error response"),n("td",null,"HTTP/1.1 503 < MESSAGE >"),n("td")],-1),Nn=n("tr",null,[n("td",null,"Error response body 503"),n("td",null,"Error"),n("td")],-1),Dn=n("tr",null,[n("td",null,"Error response body Example"),n("td",null,[n("code",null,' {"data": {"delivery": [],"pickup": [],"message": "No results"},"errors": [{"code": 9,"message": "Example","human": "Example"}]}')]),n("td")],-1),Ln=n("h4",{id:"_8-a-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-3","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8.A.3 Parameters")],-1),qn=n("strong",null,"cc",-1),Mn=n("br",null,null,-1),Sn=s(" Data type: "),Hn=s("country_code"),Un=n("br",null,null,-1),Bn=s(" Required: yes"),Gn=n("br",null,null,-1),On=s(" The country code for which to fetch the delivery options. This endpoint can only be used in the Netherlands or Belgium ( cc=NL or cc=BE )."),Cn=n("strong",null,"postal_code",-1),Jn=n("br",null,null,-1),Kn=s(" Data type: "),In=s("string"),Fn=n("br",null,null,-1),Vn=s(" Required: yes."),Qn=n("br",null,null,-1),Wn=s(" The postal code for which to fetch the delivery options."),Yn=n("strong",null,"number",-1),Zn=n("br",null,null,-1),Xn=s(" Data type: "),$n=s("string"),ns=n("br",null,null,-1),ss=s(" Required: yes"),ts=n("br",null,null,-1),as=s(" The street number for which to fetch the delivery options."),os=n("strong",null,"city",-1),es=n("br",null,null,-1),ps=s(" Data type: "),cs=s("string"),ls=n("br",null,null,-1),rs=s(" Required: no"),us=n("br",null,null,-1),is=s(" Only available for carriers bpost and DPD. This can be used to narrow the search results for locations outside NL."),ks=n("strong",null,"street",-1),ds=n("br",null,null,-1),ys=s(" Data type: "),_s=s("string"),ms=n("br",null,null,-1),hs=s(" Required: no"),gs=n("br",null,null,-1),bs=s(" This can be used to narrow the search results for locations outside NL."),fs=n("strong",null,"platform",-1),vs=n("br",null,null,-1),xs=s(" Data type: "),zs=s("platform"),Es=n("br",null,null,-1),ws=s(" Required: no"),As=n("br",null,null,-1),Ts=s(" The platform where you want the data from"),Rs=n("strong",null,"delivery_time",-1),Ps=n("br",null,null,-1),js=s(" Data type: "),Ns=s("time"),Ds=n("br",null,null,-1),Ls=s(" Required: no"),qs=n("br",null,null,-1),Ms=s(" The time on which a package has to be delivered."),Ss=n("br",null,null,-1),Hs=n("strong",null,"Note: This is only an indication of time the package will be delivered on the selected date.",-1),Us=n("strong",null,"delivery_date",-1),Bs=n("br",null,null,-1),Gs=s(" Data type: "),Os=s("date"),Cs=n("br",null,null,-1),Js=s(" Required: no"),Ks=n("br",null,null,-1),Is=s(" The date on which the package has to be delivered."),Fs=n("strong",null,"cutoff_time",-1),Vs=n("br",null,null,-1),Qs=s(" Data type: "),Ws=s("time"),Ys=n("br",null,null,-1),Zs=s(" Required: no"),Xs=n("br",null,null,-1),$s=s(" This option allows the "),nt=n("strong",null,"Merchant",-1),st=s(" to indicate the latest cut-off time before which a consumer order will still be picked, packed and dispatched on the same/first set dropoff day, taking into account the dropoff-delay. Default time is 15h30. For example, if cutoff time is 15h30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15h30 will be dropped of at PostNL on that same Monday in time for the Monday collection."),tt=n("strong",null,"dropoff_days",-1),at=n("br",null,null,-1),ot=s(" Data type: "),et=s("weekday_digit"),pt=n("br",null,null,-1),ct=s(" Required: no"),lt=n("br",null,null,-1),rt=s(" This options allows the "),ut=n("strong",null,"Merchant",-1),it=s(" to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded."),kt=n("strong",null,"monday_delivery",-1),dt=n("br",null,null,-1),yt=s(" Data type: "),_t=s("boolean"),mt=n("br",null,null,-1),ht=s(" Required: no"),gt=n("br",null,null,-1),bt=s(" Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. Click "),ft=s("here"),vt=s(" for more information concerning Monday delivery and the locations."),xt=n("br",null,null,-1),zt=s("Note: To activate Monday delivery, value 6 must be given with "),Et=s("dropoff_days"),wt=s(" , value 1 must be given by "),At=s("monday_delivery"),Tt=s(" . And on Saturday the "),Rt=s("cutoff_time"),Pt=s(" must be before 15:00 (14:30 recommended) so that Monday will be shown."),jt=n("strong",null,"saturday_delivery",-1),Nt=n("br",null,null,-1),Dt=s(" Data type: "),Lt=s("boolean"),qt=n("br",null,null,-1),Mt=s(" Required: no"),St=n("br",null,null,-1),Ht=s(" Saturday delivery is only possible when the package is delivered before 15.00 on Friday at the designated bpost locations."),Ut=n("br",null,null,-1),Bt=s("Note: To activate Saturday delivery, value 6 must be given with "),Gt=s("dropoff_days"),Ot=s(" , value 1 must be given by "),Ct=s("saturday_delivery"),Jt=s(" ."),Kt=n("strong",null,"dropoff_delay",-1),It=n("br",null,null,-1),Ft=s(" Data type: "),Vt=s("integer"),Qt=n("br",null,null,-1),Wt=s(" Required: no"),Yt=n("br",null,null,-1),Zt=s(" This options allows the "),Xt=n("strong",null,"Merchant",-1),$t=s(" to set the number of days it takes her to pick, pack and hand in her parcels at PostNL when ordered before the cutoff time. By default this is 0 and max is 14."),na=n("strong",null,"deliverydays_window",-1),sa=n("br",null,null,-1),ta=s(" Data type: "),aa=s("integer"),oa=n("br",null,null,-1),ea=s(" Required: no"),pa=n("br",null,null,-1),ca=s(" This options allows the "),la=n("strong",null,"Merchant",-1),ra=s(" to set the number of days into the future for which she wants to show her consumers delivery options. For example, if set to 3 in her check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cut-off time and she goes to PostNL on Mondays). Min is 1. and max. is 14."),ua=n("strong",null,"exclude_delivery_type",-1),ia=n("br",null,null,-1),ka=s(" Data type: "),da=s("delivery_type"),ya=n("br",null,null,-1),_a=s(" Required: no"),ma=n("br",null,null,-1),ha=s(" This options allows the Merchant to exclude delivery types from the available delivery options. You can specify multiple delivery types by semicolon separating them. The standard delivery name cannot be excluded."),ga=n("strong",null,"exclude_parcel_lockers",-1),ba=n("br",null,null,-1),fa=s(" Data type: "),va=s("boolean"),xa=n("br",null,null,-1),za=s(" Required: no"),Ea=n("br",null,null,-1),wa=s(" This option allows to filter out pickup locations that are parcel lockers."),Aa=n("strong",null,"latitude",-1),Ta=n("br",null,null,-1),Ra=s(" Data type: "),Pa=s("coordinates"),ja=n("br",null,null,-1),Na=s(" Required: no"),Da=n("br",null,null,-1),La=s(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),qa=n("strong",null,"longitude",-1),Ma=n("br",null,null,-1),Sa=s(" Data type: "),Ha=s("coordinates"),Ua=n("br",null,null,-1),Ba=s(" Required: no"),Ga=n("br",null,null,-1),Oa=s(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),Ca=n("h4",{id:"_8-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-4","aria-hidden":"true",tabindex:"-1"},"#"),s(" 8.A.4 Examples")],-1),Ja=n("p",null,[n("strong",null,"Request")],-1),Ka=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Ia=n("p",null,[n("strong",null,"Response")],-1),Fa=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Va=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"delivery"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-02-01"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"12:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"morning"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"11:30:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"13:30:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-02-02"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"12:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"morning"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"11:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"13:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"pickup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-02-01"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:30:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"125"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Staples Office Centre"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Jacobus Spijkerdreef"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"10"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132PZ"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"start_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:30:00"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"125"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"retailexpress"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Dit is een Business Point. Post en pakketten die u op werkdagen v\xF3\xF3r de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag."'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"phone_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"023-5576310"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"opening_hours"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"monday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-18:30"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"tuesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-18:30"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"wednesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-18:30"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"thursday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-18:30"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"friday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-18:30"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"saturday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"08:00-17:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"sunday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1934"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"latitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"52.286582"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"longitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"4.682377"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"173187"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-02-01"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Primera Sanders"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Polderplein"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132BA"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"start_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16:00:00"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"retail"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Dit is een Postkantoor. Post en pakketten die u op werkdagen v\xF3\xF3r de lichtingstijd afgeeft, bezorgen we binnen Nederland de volgende dag."'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"phone_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"023-5640556"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"opening_hours"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"monday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"11:00-18:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"tuesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"09:00-18:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"wednesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"09:00-18:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"thursday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"09:00-18:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"friday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"09:00-21:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"saturday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"09:00-17:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"sunday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"12:00-17:00"'),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1687"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"latitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"52.192150633052"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"longitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"4.44249030539514"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"176227"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2017-02-01"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"16:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Qa=n("p",null,[n("strong",null,"Request")],-1),Wa=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?carrierName=postnl&platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Ya=n("p",null,[n("strong",null,"Response")],-1),Za=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Xa=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pickup_locations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"address"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Polderplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132BA"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"3"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"possibilities"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"delivery_type_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"delivery_type_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pickup"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"moment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 16:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Primera Sanders"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"retail_network_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PNPNL-01"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1696"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"latitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"52.30329367"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"longitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"4.69476214"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"176227"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"opening_hours"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"monday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-17 11:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-17 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"tuesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-18 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-18 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"wednesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-19 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-19 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"thursday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"friday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-14 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-14 21:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"saturday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-15 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-15 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"sunday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-16 12:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-16 17:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),$a=n("ul",null,[n("li",null,"Destination: 2132JE 31"),n("li",null,"PostNL"),n("li",null,"cutoff time 16:00"),n("li",null,"dropoff days Mon - Sat"),n("li",null,"dropoff delay: 0"),n("li",null,"delivery days window: 2"),n("li",null,"no morning")],-1),no=n("p",null,[n("strong",null,"Request")],-1),so=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),to=n("p",null,[n("strong",null,"Response")],-1),ao=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),oo=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"deliveries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 00:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"possibilities"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"shipment_options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"age_check"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"schema"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"boolean"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"enum"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"false"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"large_format"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"schema"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"boolean"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"enum"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"false"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"only_recipient"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"schema"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"boolean"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"enum"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"false"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"signature"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"schema"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"boolean"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"enum"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"false"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"return"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"schema"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"boolean"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"enum"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"false"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"collect_date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"delivery_time_frames"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"date_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 09:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"end"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"date_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 12:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),eo=n("p",null,"2132JE, 31 for PostNL cutoff time 16h00, dropoff days Mon - Sat, dropoff delay is zero, delivery window is 2 days and morning is excluded as delivery name.",-1),po=n("p",null,[n("strong",null,"Request")],-1),co=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),lo=n("p",null,[n("strong",null,"Response")],-1),ro=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),uo=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pickup_locations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"address"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hoofddorp"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Polderplein"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2132BA"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"3"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"possibilities"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"delivery_type_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"delivery_type_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pickup"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"moment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 16:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Primera Sanders"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"retail_network_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PNPNL-01"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1696"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"latitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"52.30329367"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"longitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"4.69476214"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"176227"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"opening_hours"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"monday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-17 11:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-17 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"tuesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-18 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-18 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"wednesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-19 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-19 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"thursday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-13 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"friday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-14 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-14 21:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"saturday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-15 09:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-15 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"sunday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-16 12:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-02-16 17:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),io=n("p",null,[n("strong",null,"Get delivery options for Belgium")],-1),ko=n("p",null,[n("strong",null,"Request")],-1),yo=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),_o=n("p",null,[n("strong",null,"Response")],-1),mo=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s("HTTP/"),n("span",{class:"token number"},"1.1"),s(),n("span",{class:"token number"},"200"),s(" OK Content-Type"),n("span",{class:"token operator"},":"),s("application/json;charset=utf"),n("span",{class:"token number"},"-8"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"delivery"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"17:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-28"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"17:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-29"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"08:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"17:00:00"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"currency"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EUR"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"price_comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"standard"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"comment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),ho=n("p",null,[n("strong",null,"Get pickup options for Belgium")],-1),go=n("p",null,[n("strong",null,"Request")],-1),bo=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),fo=n("p",null,[n("strong",null,"Response")],-1),vo=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s("HTTP/"),n("span",{class:"token number"},"1.1"),s(),n("span",{class:"token number"},"200"),s(" OK Content-Type"),n("span",{class:"token operator"},":"),s("application/json;charset=utf"),n("span",{class:"token number"},"-8"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"pickup_locations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"address"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"cc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BRUSSEL"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"street"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ANSPACHLAAN"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1000"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"number_suffix"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"possibilities"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"delivery_type_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"delivery_type_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pickup"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"moment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27 16:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"location"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"location_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"BRUSSEL DE BROUCKERE"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"retail_network_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"242"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"latitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50.8506"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"longitude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"4.35185"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"location_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"20100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"phone_number"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"opening_hours"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"monday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27 08:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27 12:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27 13:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-27 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"tuesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-28 08:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-28 12:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-28 13:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-28 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"wednesday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-29 08:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-29 12:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-29 13:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-29 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"thursday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-30 08:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-30 12:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-30 13:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-30 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"friday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-31 08:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-31 12:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-31 13:30:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-31 18:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"saturday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-25 10:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"end"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token property"},'"date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2020-07-25 13:00:00.000000"'),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token property"},'"timezone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Europe/Amsterdam"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"sunday"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1);function xo(zo,Eo){const l=c("ApiLink"),o=c("RouterLink"),e=c("AutoLink"),p=c("DetailsExpand");return u(),i("div",null,[d,y,n("p",null,[_,t(l,{to:"1_D"},{default:a(()=>[m]),_:1}),h]),g,b,n("p",null,[f,v,x,t(o,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:a(()=>[z]),_:1}),E,t(l,{to:"9_a"},{default:a(()=>[w]),_:1}),A,t(l,{to:"9_B"},{default:a(()=>[T]),_:1}),R]),n("p",null,[P,t(e,{item:"http://github.com/myparcelnl/checkout"},{default:a(()=>[j]),_:1}),N,t(e,{item:"https://myparcelnl.github.io/delivery-options/"},{default:a(()=>[D]),_:1}),L]),q,n("table",null,[n("tbody",null,[M,S,H,U,B,n("tr",null,[G,O,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#country_code",tabindex:"-1"},{default:a(()=>[C]),_:1})])]),n("tr",null,[J,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[K]),_:1})])]),n("tr",null,[I,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[F]),_:1})])]),n("tr",null,[V,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[Q]),_:1})])]),n("tr",null,[W,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[Y]),_:1})])]),n("tr",null,[Z,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#platform",tabindex:"-1"},{default:a(()=>[X]),_:1})])]),n("tr",null,[$,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#carrier",tabindex:"-1"},{default:a(()=>[nn]),_:1})])]),n("tr",null,[sn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#time",tabindex:"-1"},{default:a(()=>[tn]),_:1})])]),n("tr",null,[an,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:a(()=>[on]),_:1})])]),n("tr",null,[en,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#time",tabindex:"-1"},{default:a(()=>[pn]),_:1})])]),n("tr",null,[cn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#weekday_digit",tabindex:"-1"},{default:a(()=>[ln]),_:1})])]),n("tr",null,[rn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:a(()=>[un]),_:1})])]),n("tr",null,[kn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:a(()=>[dn]),_:1})])]),n("tr",null,[yn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:a(()=>[_n]),_:1})])]),n("tr",null,[mn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#delivery_type",tabindex:"-1"},{default:a(()=>[hn]),_:1})])]),n("tr",null,[gn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:a(()=>[bn]),_:1})])]),n("tr",null,[fn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#coordinates",tabindex:"-1"},{default:a(()=>[vn]),_:1})])]),n("tr",null,[xn,n("td",null,[t(o,{to:"/api-reference/04.data-types.html#coordinates",tabindex:"-1"},{default:a(()=>[zn]),_:1})])]),En,wn,An,Tn,Rn,Pn,jn,Nn,Dn])]),Ln,n("p",null,[qn,Mn,Sn,t(o,{to:"/api-reference/04.data-types.html#country_code",tabindex:"-1"},{default:a(()=>[Hn]),_:1}),Un,Bn,Gn,On]),n("p",null,[Cn,Jn,Kn,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[In]),_:1}),Fn,Vn,Qn,Wn]),n("p",null,[Yn,Zn,Xn,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[$n]),_:1}),ns,ss,ts,as]),n("p",null,[os,es,ps,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[cs]),_:1}),ls,rs,us,is]),n("p",null,[ks,ds,ys,t(o,{to:"/api-reference/04.data-types.html#string",tabindex:"-1"},{default:a(()=>[_s]),_:1}),ms,hs,gs,bs]),n("p",null,[fs,vs,xs,t(o,{to:"/api-reference/04.data-types.html#platform",tabindex:"-1"},{default:a(()=>[zs]),_:1}),Es,ws,As,Ts]),n("p",null,[Rs,Ps,js,t(o,{to:"/api-reference/04.data-types.html#time",tabindex:"-1"},{default:a(()=>[Ns]),_:1}),Ds,Ls,qs,Ms,Ss,Hs]),n("p",null,[Us,Bs,Gs,t(o,{to:"/api-reference/04.data-types.html#date",tabindex:"-1"},{default:a(()=>[Os]),_:1}),Cs,Js,Ks,Is]),n("p",null,[Fs,Vs,Qs,t(o,{to:"/api-reference/04.data-types.html#time",tabindex:"-1"},{default:a(()=>[Ws]),_:1}),Ys,Zs,Xs,$s,nt,st]),n("p",null,[tt,at,ot,t(o,{to:"/api-reference/04.data-types.html#weekday_digit",tabindex:"-1"},{default:a(()=>[et]),_:1}),pt,ct,lt,rt,ut,it]),n("p",null,[kt,dt,yt,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:a(()=>[_t]),_:1}),mt,ht,gt,bt,t(e,{item:"https://blog.myparcel.nl/maandagbezorging"},{default:a(()=>[ft]),_:1}),vt,xt,n("strong",null,[zt,t(e,{item:"#dropoff_days"},{default:a(()=>[Et]),_:1}),wt,t(e,{item:"#monday_delivery"},{default:a(()=>[At]),_:1}),Tt,t(e,{item:"#cutoff_time"},{default:a(()=>[Rt]),_:1}),Pt])]),n("p",null,[jt,Nt,Dt,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:a(()=>[Lt]),_:1}),qt,Mt,St,Ht,Ut,n("strong",null,[Bt,t(e,{item:"#dropoff_days"},{default:a(()=>[Gt]),_:1}),Ot,t(e,{item:"#saturday_delivery"},{default:a(()=>[Ct]),_:1}),Jt])]),n("p",null,[Kt,It,Ft,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:a(()=>[Vt]),_:1}),Qt,Wt,Yt,Zt,Xt,$t]),n("p",null,[na,sa,ta,t(o,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:a(()=>[aa]),_:1}),oa,ea,pa,ca,la,ra]),n("p",null,[ua,ia,ka,t(o,{to:"/api-reference/04.data-types.html#delivery_type",tabindex:"-1"},{default:a(()=>[da]),_:1}),ya,_a,ma,ha]),n("p",null,[ga,ba,fa,t(o,{to:"/api-reference/04.data-types.html#boolean",tabindex:"-1"},{default:a(()=>[va]),_:1}),xa,za,Ea,wa]),n("p",null,[Aa,Ta,Ra,t(o,{to:"/api-reference/04.data-types.html#coordinates",tabindex:"-1"},{default:a(()=>[Pa]),_:1}),ja,Na,Da,La]),n("p",null,[qa,Ma,Sa,t(o,{to:"/api-reference/04.data-types.html#coordinates",tabindex:"-1"},{default:a(()=>[Ha]),_:1}),Ua,Ba,Ga,Oa]),Ca,t(p,{tag:"h4",title:"Get delivery options for 2132JE, 31 for PostNL"},{default:a(()=>[Ja,Ka,Ia,Fa,Va]),_:1}),t(p,{tag:"h4",title:"Get pickup options for 2132JE, 31 for PostNL"},{default:a(()=>[Qa,Wa,Ya,Za,Xa]),_:1}),t(p,{tag:"h4",title:"Get delivery options with a lot of options"},{default:a(()=>[$a,no,so,to,ao,oo]),_:1}),t(p,{tag:"h4",title:"Get pickup options for..."},{default:a(()=>[eo,po,co,lo,ro,uo,io,ko,yo,_o,mo,ho,go,bo,fo,vo]),_:1})])}var To=r(k,[["render",xo],["__file","08.delivery-options.html.vue"]]);export{To as default};
